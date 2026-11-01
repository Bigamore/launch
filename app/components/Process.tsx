"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal, SectionLabel } from "./UI";

const steps = [
  {
    n: "01",
    title: "A conversation first.",
    text: "Tell us what you're building, who it's for, and what success looks like. We shape the brief together.",
    detail: "DISCOVER / DEFINE",
    icon: "◎",
  },
  {
    n: "02",
    title: "Details make the difference.",
    text: "Distinctive typography, considered layouts, and motion with purpose. Every decision serves your story.",
    detail: "DESIGN / REFINE",
    icon: "✳",
  },
  {
    n: "03",
    title: "Ready for the real world.",
    text: "Responsive development, the agreed revisions, and a considered handover. A website you're proud to share.",
    detail: "DEVELOP / LAUNCH",
    icon: "↗",
  },
];

export default function Process() {
  const reduced = useReducedMotion();
  return (
    <section id="work" className="section container">
      <Reveal className="section-heading">
        <div>
          <SectionLabel>THE APPROACH</SectionLabel>
          <h2>
            Not just a website.
            <br />
            <span>A considered experience.</span>
          </h2>
        </div>
        <p>
          From the first conversation to the final detail, a clear process. No
          unnecessary complexity.
        </p>
      </Reveal>
      <motion.div
        className="process-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: reduced ? 0 : 0.15 } },
        }}
      >
        {steps.map((step) => (
          <motion.article
            className="glass-card process-card"
            key={step.n}
            variants={{
              hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: reduced ? 0 : 0.6 },
              },
            }}
          >
            <div className="card-top">
              <span className="micro">/{step.n}</span>
              <span className="process-icon" aria-hidden="true">
                {step.icon}
              </span>
            </div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
            <span className="process-detail">{step.detail}</span>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
