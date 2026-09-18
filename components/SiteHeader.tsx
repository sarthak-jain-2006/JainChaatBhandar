"use client";

import { useState } from "react";
import { links, navLinks } from "@/lib/site";
import { IconBars, IconPin, IconX } from "./icons";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-head">
      <div className="wrap">
        <a className="wordmark" href="#top">
          Jain Chaat Bhandar
        </a>
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconX /> : <IconBars />}
        </button>
        <nav
          className={open ? "nav open" : "nav"}
          id="nav"
          aria-label="Sections"
          onClick={() => setOpen(false)}
        >
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
          <a
            className="nav-go"
            href={links.directions}
            target="_blank"
            rel="noopener"
          >
            <IconPin />
            Directions
          </a>
        </nav>
      </div>
    </header>
  );
}
