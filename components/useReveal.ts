"use client";

import { useEffect, useRef, useState } from "react";
import { useSkipsReveal } from "./useMediaPreference";

/**
 * The page's one motion idea: elements start 14px low and fade up the first
 * time they cross into view, and stay put thereafter.
 *
 * Returns the ref to attach and the class string to merge in. The `rise`
 * class is what carries the CSS, including the hero's nth-child stagger, so
 * the element itself must keep it rather than a wrapper.
 *
 * @param enabled pass false to opt an element out and skip the observer.
 */
export function useReveal<T extends HTMLElement>(enabled = true) {
  const skip = useSkipsReveal();
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!enabled || skip || seen || !el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setSeen(true);
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [enabled, skip, seen]);

  const shown = skip || seen;
  return { ref, revealClass: !enabled ? "" : shown ? "rise in" : "rise" };
}
