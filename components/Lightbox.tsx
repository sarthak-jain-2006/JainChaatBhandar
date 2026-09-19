"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
  type Ref,
} from "react";
import Image from "next/image";
import { IconX } from "./icons";
import { useReveal } from "./useReveal";
import type { Photo } from "@/lib/site";

type LightboxApi = {
  open: (photo: Photo) => void;
  /** The gallery reads this to hold its autoplay while a photo is up. */
  isOpen: boolean;
};

const LightboxContext = createContext<LightboxApi | null>(null);

export function useLightbox(): LightboxApi {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used inside <LightboxProvider>");
  return ctx;
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [photo, setPhoto] = useState<Photo | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const open = useCallback((next: Photo) => {
    lastFocused.current = document.activeElement as HTMLElement | null;
    setPhoto(next);
  }, []);

  const close = useCallback(() => {
    setPhoto(null);
    lastFocused.current?.focus();
  }, []);

  // Hold the page still behind the viewer, and move focus onto the close button.
  useEffect(() => {
    if (!photo) return;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [photo, close]);

  return (
    <LightboxContext.Provider value={{ open, isOpen: photo !== null }}>
      {children}
      {photo && (
        <div
          className="lb open"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <button
            ref={closeButtonRef}
            className="lb-close"
            aria-label="Close photo viewer"
            onClick={close}
          >
            <IconX />
          </button>
          <img src={photo.src} alt={photo.alt} />
          <p className="lb-cap">{photo.slot + photo.caption}</p>
        </div>
      )}
    </LightboxContext.Provider>
  );
}

/**
 * A photo slot that opens in the viewer. Keyboard-operable as a button, with
 * the role and label rendered server-side rather than patched on after load.
 */
export function PhotoFigure({
  photo,
  className = "",
  style,
  eager = false,
  reveal = false,
  sizes = "(max-width: 520px) 74vw, 380px",
}: {
  photo: Photo;
  className?: string;
  style?: CSSProperties;
  eager?: boolean;
  reveal?: boolean;
  /** Widest the slot ever gets, per breakpoint, so the optimiser is asked
      for a card-sized file rather than the whole photograph. Defaults to
      the gallery card, which is what most callers are. */
  sizes?: string;
}) {
  const { open } = useLightbox();
  const { ref, revealClass } = useReveal<HTMLElement>(reveal);

  return (
    <figure
      ref={ref as Ref<HTMLElement>}
      className={`g-item ${revealClass} ${className}`.replace(/\s+/g, " ").trim()}
      style={style}
      tabIndex={0}
      role="button"
      aria-label={`View photo: ${photo.alt}`}
      onClick={() => open(photo)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open(photo);
        }
      }}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        loading={eager ? "eager" : "lazy"}
      />
      {(photo.slot || photo.caption) && (
        <figcaption>
          {photo.slot && <b>{photo.slot}</b>}
          {photo.caption}
        </figcaption>
      )}
    </figure>
  );
}
