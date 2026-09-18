"use client";

import type { ComponentPropsWithoutRef, ElementType, Ref } from "react";
import { useReveal } from "./useReveal";

type RevealProps = ComponentPropsWithoutRef<"div"> & {
  /** The tag to render — the element itself carries `.rise`, not a wrapper. */
  as?: ElementType;
};

export default function Reveal({ as: Tag = "div", className, ...rest }: RevealProps) {
  const { ref, revealClass } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as Ref<HTMLDivElement>}
      className={className ? `${revealClass} ${className}` : revealClass}
      {...rest}
    />
  );
}
