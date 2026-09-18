"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { gallery } from "@/lib/site";
import { IconChevronLeft, IconChevronRight } from "./icons";
import { PhotoFigure, useLightbox } from "./Lightbox";
import { usePrefersReducedMotion } from "./useMediaPreference";
import Reveal from "./Reveal";

/** Matches the `gap` on .g-track, so a step lands one card along. */
const GAP = 14;
const AUTOPLAY_MS = 3800;
/** How long a touch keeps autoplay held off after the finger lifts. */
const TOUCH_HOLD_MS = 4000;

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const reduced = usePrefersReducedMotion();

  // Bumping this restarts the autoplay interval, so an arrow press gets a
  // full beat before the next automatic slide.
  const [autoplayEpoch, setAutoplayEpoch] = useState(0);

  const { isOpen } = useLightbox();
  const pausedRef = useRef(false);
  const touchHold = useRef<number | null>(null);

  const slide = useCallback(
    (dir: number) => {
      const track = trackRef.current;
      if (!track) return;
      const item = track.querySelector<HTMLElement>(".g-item");
      const step = item
        ? item.getBoundingClientRect().width + GAP
        : track.clientWidth * 0.8;
      track.scrollBy({ left: dir * step, behavior: reduced ? "auto" : "smooth" });
    },
    [reduced],
  );

  const sync = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth - 2;
    setAtStart(track.scrollLeft <= 2);
    setAtEnd(track.scrollLeft >= max);
  }, []);

  useEffect(() => {
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [sync]);

  // One card every few seconds, looping back to the start at the end.
  // Hover, touch and focus hold it; a hidden tab skips the tick; an open
  // lightbox tears the timer down entirely, so closing it starts a fresh
  // beat. Off altogether under reduced motion.
  useEffect(() => {
    if (reduced || isOpen) return;
    const id = window.setInterval(() => {
      if (pausedRef.current || document.hidden) return;
      const track = trackRef.current;
      if (!track) return;
      const max = track.scrollWidth - track.clientWidth - 2;
      if (track.scrollLeft >= max) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slide(1);
      }
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [reduced, isOpen, slide, autoplayEpoch]);

  useEffect(
    () => () => {
      if (touchHold.current) window.clearTimeout(touchHold.current);
    },
    [],
  );

  const onArrow = (dir: number) => {
    slide(dir);
    setAutoplayEpoch((n) => n + 1);
  };

  return (
    <section className="gallery" id="gallery">
      <div className="wrap">
        <div className="g-head">
          <Reveal className="sec-head">
            <h2>From the counter</h2>
          </Reveal>
          <div className="g-nav">
            <button
              className="g-btn"
              aria-label="Scroll gallery left"
              disabled={atStart}
              onClick={() => onArrow(-1)}
            >
              <IconChevronLeft />
            </button>
            <button
              className="g-btn"
              aria-label="Scroll gallery right"
              disabled={atEnd}
              onClick={() => onArrow(1)}
            >
              <IconChevronRight />
            </button>
          </div>
        </div>
        <div
          className="g-track"
          ref={trackRef}
          aria-label="Shop photo gallery"
          onScroll={sync}
          onPointerEnter={() => (pausedRef.current = true)}
          onPointerLeave={() => (pausedRef.current = false)}
          onFocus={() => (pausedRef.current = true)}
          onBlur={() => (pausedRef.current = false)}
          onTouchStart={() => {
            pausedRef.current = true;
            if (touchHold.current) window.clearTimeout(touchHold.current);
          }}
          onTouchEnd={() => {
            if (touchHold.current) window.clearTimeout(touchHold.current);
            touchHold.current = window.setTimeout(() => {
              pausedRef.current = false;
            }, TOUCH_HOLD_MS);
          }}
        >
          {gallery.map((photo) => (
            <PhotoFigure key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
    </section>
  );
}
