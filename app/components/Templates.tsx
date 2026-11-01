"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { templates } from "../lib/content";
import { Arrow, Reveal, SectionLabel } from "./UI";
import SiteConcept from "./SiteConcept";

type Template = (typeof templates)[number];

export default function Templates() {
  const [filter, setFilter] = useState("All directions");
  const [selected, setSelected] = useState<Template | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const visible = templates.filter(
    (template) => filter === "All directions" || template.category === filter,
  );

  function preview(template: Template) {
    setSelected(template);
    dialog.current?.showModal();
  }

  return (
    <section
      className="section templates-section container xp-templates"
      id="templates"
    >
      <Reveal className="section-heading">
        <div>
          <SectionLabel>
            DESIGN DIRECTIONS / A TASTE OF WHAT&apos;S POSSIBLE
          </SectionLabel>
          <h2>
            Designed to stand out.
            <br />
            <span>Built to feel different.</span>
          </h2>
        </div>
        <p>
          Explore a few possibilities. Every direction is shaped around your
          brand, your content, and your next chapter.
        </p>
      </Reveal>
      <div className="template-toolbar">
        <div
          className="filter-tabs"
          role="group"
          aria-label="Filter design concepts"
        >
          {["All directions", "SaaS", "Service"].map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <span className="micro">ILLUSTRATIVE CONCEPTS / NOT CLIENT WORK</span>
      </div>
      <div className="template-grid">
        {visible.map((template, index) => (
          <article className="template-card" key={template.id}>
            <button
              type="button"
              className="template-preview"
              onClick={() => preview(template)}
              aria-label={`Preview ${template.name} concept`}
            >
              <SiteConcept variant={template.id} />
              <span className="preview-overlay">
                Explore concept <Arrow diagonal />
              </span>
            </button>
            <div className="template-meta">
              <div>
                <p className="micro">
                  0{index + 1} / {template.tag}
                </p>
                <h3>{template.name}</h3>
              </div>
              <button
                type="button"
                className="icon-button"
                aria-label={`Open ${template.name} preview`}
                onClick={() => preview(template)}
              >
                <Arrow diagonal />
              </button>
            </div>
            <p className="template-description">{template.description}</p>
          </article>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="concept-dialog"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className="dialog-content">
          <div className="dialog-bar">
            <span>{selected?.name} / Concept preview</span>
            <button
              type="button"
              className="icon-button"
              aria-label="Close concept preview"
              onClick={() => dialog.current?.close()}
            >
              ×
            </button>
          </div>
          {selected && <SiteConcept variant={selected.id} expanded />}
          <div className="dialog-footer">
            <p>
              Illustrative direction. Your final website is tailored to your
              brand.
            </p>
            <Link
              href={`/booking?template=${selected?.id ?? ""}`}
              className="button button-primary"
              onClick={() => dialog.current?.close()}
            >
              Build something like this <Arrow />
            </Link>
          </div>
        </div>
      </dialog>
    </section>
  );
}
