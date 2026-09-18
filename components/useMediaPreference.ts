"use client";

import { useSyncExternalStore } from "react";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

/**
 * matchMedia is an external store, so it is read through
 * useSyncExternalStore rather than mirrored into state: that keeps
 * hydration correct and picks up a change of preference mid-visit.
 */
function subscribe(onChange: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

const prefersReduced = () => window.matchMedia(REDUCED_MOTION).matches;

/** On the server nothing has animated yet, so assume motion is welcome. */
const onServer = () => false;

export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, prefersReduced, onServer);
}

/**
 * True when a reveal should simply appear rather than animate in: the visitor
 * asked for less motion, or the browser has no IntersectionObserver to drive it.
 */
export function useSkipsReveal(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => prefersReduced() || !("IntersectionObserver" in window),
    onServer,
  );
}
