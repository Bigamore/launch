"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { ActionLink } from "./UI";

const links = [
  { href: "/#work", label: "The approach" },
  { href: "/#templates", label: "Design directions" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQs" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useMotionValueEvent(scrollY, "change", (value) => setScrolled(value > 12));

  return (
    <header className={`site-header ${scrolled || open ? "is-scrolled" : ""}`}>
      <nav className="container nav-inner" aria-label="Main navigation">
        <Link className="wordmark" href="/" aria-label="LAUNCH home">
          LAUNCH<span>.</span>
        </Link>
        <div className="desktop-links">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="nav-actions">
          <ActionLink
            href="/booking"
            className="nav-cta"
            onNavigate={() => setOpen(false)}
          >
            {pathname === "/booking" ? "Your next chapter" : "Start a project"}
          </ActionLink>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen(!open)}
          >
            <span
              className={
                open ? "menu-line line-one open" : "menu-line line-one"
              }
            />
            <span
              className={
                open ? "menu-line line-two open" : "menu-line line-two"
              }
            />
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="mobile-links container">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/booking" onClick={() => setOpen(false)}>
            Book a project <span>↗</span>
          </Link>
        </div>
      )}
    </header>
  );
}
