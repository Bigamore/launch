"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Arrow, Reveal, SectionLabel } from "./UI";

const questions = [
  [
    "How do we get started?",
    "Share your project using the booking form. It creates a brief you can copy or share through WhatsApp. We discuss the goals, agree the scope and quote, and then get to work. No account needed.",
  ],
  [
    "Are the prices fixed?",
    "The listed dollar amounts are starting prices. The naira equivalents use ₦1,380 per $1. Your final quote depends on the agreed scope, and there's room to discuss it before we begin.",
  ],
  [
    "Can I request something completely custom?",
    "Absolutely. Web Apps & Custom Builds is for projects beyond the listed packages: web applications, more involved websites, or a specific experience you have in mind. Tell us about your goals and we'll discuss the scope and the right approach together.",
  ],
  [
    "How long will my project take?",
    "Timing depends on the scope, content readiness, and feedback. We confirm a delivery schedule before starting. If you're working toward a specific date, include it in your project brief.",
  ],
  [
    "What do you need from me?",
    "Your business name, goals, content, brand assets if you have them, and any references you like. If something isn't ready, mention it in the brief so we can plan around it.",
  ],
  [
    "Are mobile design and revisions included?",
    "Responsive design is included in every listed package. Basic includes one revision, Standard two, and Premium three. For a custom build, we agree the revision scope in your quote.",
  ],
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);
  const reduced = useReducedMotion();
  return (
    <section id="faq" className="section container faq-section">
      <Reveal className="faq-intro">
        <SectionLabel>GOOD QUESTIONS. STRAIGHT ANSWERS.</SectionLabel>
        <h2>
          A little clarity
          <br />
          <span>before we begin.</span>
        </h2>
        <p>
          Something else on your mind?
          <br />
          That&apos;s what the conversation is for.
        </p>
        <Link className="text-link" href="/booking">
          Let&apos;s talk <Arrow diagonal />
        </Link>
      </Reveal>
      <div className="faq-list">
        {questions.map(([question, answer], index) => (
          <article
            className={`faq-item ${active === index ? "active" : ""}`}
            key={question}
          >
            <h3>
              <button
                type="button"
                id={`question-${index}`}
                aria-expanded={active === index}
                aria-controls={`answer-${index}`}
                onClick={() => setActive(active === index ? null : index)}
              >
                <span className="faq-number">0{index + 1}</span>
                <span>{question}</span>
                <span className="faq-toggle" aria-hidden="true">
                  {active === index ? "−" : "+"}
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {active === index && (
                <motion.div
                  id={`answer-${index}`}
                  role="region"
                  aria-labelledby={`question-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reduced ? 0 : 0.25 }}
                  className="faq-answer"
                >
                  <p>{answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </article>
        ))}
      </div>
    </section>
  );
}
