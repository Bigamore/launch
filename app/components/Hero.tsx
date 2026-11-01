"use client";

import { motion, useReducedMotion } from "framer-motion";
import Dashboard from "./Dashboard";
import { ActionLink, Arrow } from "./UI";
import Link from "next/link";

export default function Hero() {
  const reduced = useReducedMotion();
  return (
    <section className="hero container" id="content">
      <div className="hero-glow" aria-hidden="true" />
      <motion.div
        className="hero-copy"
        initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="availability">
          <span className="status-dot" />
          INDEPENDENT STUDIO · OPEN FOR PROJECTS
        </div>
        <h1>
          Good ideas.
          <br />
          Remarkable
          <br />
          <span className="hero-gradient">first impressions.</span>
        </h1>
        <p className="brand-tagline">We Start It. You Ship It.</p>
        <p className="hero-description">
          We turn ambitious ideas into websites people remember. Thoughtful
          design. Purposeful motion. Built for your next chapter.
        </p>
        <div className="hero-actions">
          <ActionLink href="/booking">Let&apos;s build your next</ActionLink>
          <Link href="/#templates" className="text-link">
            Explore the possibilities <Arrow diagonal />
          </Link>
        </div>
        <div className="hero-footnote">
          <span>DESIGNED WITH INTENTION.</span>
          <span>BUILT TO GO LIVE.</span>
        </div>
      </motion.div>
      <motion.div
        className="hero-visual"
        initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: reduced ? 0 : 0.2 }}
      >
        <div className="visual-caption">
          <span>01 / FROM IDEA TO INTERFACE</span>
          <span className="live-indicator">
            <i />
            CONCEPT PREVIEW
          </span>
        </div>
        <div className="hero-dashboard">
          <Dashboard />
        </div>
        <div className="floating-note">
          <span className="note-icon">✳</span>
          <div>
            Made to feel different.
            <small>Your vision. Our attention to detail.</small>
          </div>
          <span className="note-arrow">↗</span>
        </div>
        <div className="visual-bottom">
          <span>LESS TEMPLATE. MORE YOU.</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </motion.div>
      <div className="hero-baseline">
        <span>LANDING PAGES</span>
        <i />
        <span>BRAND WEBSITES</span>
        <i />
        <span>PRODUCT EXPERIENCES</span>
        <i />
        <span>CUSTOM BUILDS</span>
      </div>
    </section>
  );
}
