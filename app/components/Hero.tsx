"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ActionLink, Arrow } from "./UI";

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      className="xp-hero container"
      id="content"
      aria-labelledby="hero-heading"
    >
      <div className="xp-hero-ambient" aria-hidden="true" />
      <div className="xp-hero-main">
        <motion.div
          className="xp-hero-copy"
          initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="xp-hero-kicker">
            <span className="status-dot" />
            BRANDS / WEBSITES / DIGITAL EXPERIENCES
          </div>
          <h1 id="hero-heading">
            Ideas into
            <br />
            <span>Digital Reality.</span>
          </h1>
          <p className="xp-hero-tagline">We Start It. You Ship It.</p>
          <p className="xp-hero-description">
            We turn ambitious ideas into distinctive websites. Thoughtful
            design, purposeful motion, and every detail built around what&apos;s
            next for you.
          </p>
          <div className="xp-hero-actions">
            <ActionLink href="/booking">Start a project</ActionLink>
            <ActionLink href="/#templates" secondary>
              Explore the work
            </ActionLink>
          </div>
          <div className="xp-hero-note">
            <span className="xp-note-line" />
            INDEPENDENT STUDIO. PERSONAL ATTENTION.
          </div>
        </motion.div>

        <motion.div
          className="xp-hero-art"
          initial={{ opacity: reduced ? 1 : 0, scale: reduced ? 1 : 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: reduced ? 0 : 0.15 }}
        >
          <div className="xp-art-halo" aria-hidden="true" />
          <motion.div
            className="xp-ribbon-wrap"
            animate={reduced ? undefined : { y: [0, -9, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/startitxp-ribbon.png"
              width={1448}
              height={1086}
              alt=""
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 900px) 100vw, 58vw"
              className="xp-ribbon-image"
            />
          </motion.div>
          <div className="xp-art-stamp">
            <span className="xp-stamp-symbol">✳</span>
            <div>
              Made to feel different.
              <small>Distinctive by design. Yours by intention.</small>
            </div>
          </div>
          <div className="xp-art-coordinate" aria-hidden="true">
            <span>EXPERIENCE / 001</span>
            <span>FORM MEETS PURPOSE ↗</span>
          </div>
        </motion.div>
      </div>

      <div className="xp-hero-principles">
        <div>
          <span>01</span>
          <p>
            Strategy &amp; design<small>Clarity before every pixel.</small>
          </p>
        </div>
        <div>
          <span>02</span>
          <p>
            Responsive development<small>Considered on every screen.</small>
          </p>
        </div>
        <div>
          <span>03</span>
          <p>
            Purposeful motion<small>Details that make it feel right.</small>
          </p>
        </div>
        <Link href="/#templates" aria-label="Scroll to design directions">
          <Arrow diagonal />
        </Link>
      </div>
    </section>
  );
}
