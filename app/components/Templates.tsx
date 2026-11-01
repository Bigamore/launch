"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { templates } from "../lib/content";
import { Arrow, Reveal, SectionLabel } from "./UI";
import Dashboard from "./Dashboard";

type Template = (typeof templates)[number];

function Concept({
  template,
  expanded = false,
}: {
  template: Template;
  expanded?: boolean;
}) {
  if (template.kind === "dashboard")
    return (
      <div className={`concept concept-orbit ${expanded ? "expanded" : ""}`}>
        <div className="concept-nav">
          <span>◈ orbit</span>
          <span>Built for your next big move. ↗</span>
        </div>
        <div className="concept-orbit-copy">
          <span className="micro">CLARITY, AT EVERY SCALE.</span>
          <h4>
            Your business.
            <br />
            <span>In perspective.</span>
          </h4>
        </div>
        <div className="concept-dashboard">
          <Dashboard compact />
        </div>
      </div>
    );
  if (template.kind === "studio")
    return (
      <div className={`concept concept-studio ${expanded ? "expanded" : ""}`}>
        <div className="concept-nav">
          <span>form & field®</span>
          <span>INDEPENDENT BY DESIGN</span>
        </div>
        <div className="studio-title">
          A little
          <br />
          <em>less ordinary.</em>
        </div>
        <div className="studio-art" aria-hidden="true">
          <div className="art-ring ring-one" />
          <div className="art-ring ring-two" />
          <div className="art-ring ring-three" />
        </div>
        <div className="studio-caption">
          <span>BRAND. SPACE. DIGITAL.</span>
          <span>01—03 ↗</span>
        </div>
      </div>
    );
  return (
    <div className={`concept concept-finance ${expanded ? "expanded" : ""}`}>
      <div className="concept-nav">
        <span>v / vault</span>
        <span>THE FUTURE IS YOURS ↗</span>
      </div>
      <div className="finance-title">
        Your money.
        <br />
        <span>New possibilities.</span>
      </div>
      <div className="finance-orbit" aria-hidden="true">
        <div className="finance-circle" />
        <div className="bank-card">
          <span>vault /</span>
          <strong>•••• 0842</strong>
          <small>YOUR NEXT CHAPTER</small>
          <i>◈</i>
        </div>
      </div>
      <div className="finance-caption">
        <span>BUILT AROUND YOU.</span>
        <span>↗</span>
      </div>
    </div>
  );
}

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
    <section className="section templates-section container" id="templates">
      <Reveal className="section-heading">
        <div>
          <SectionLabel>A TASTE OF WHAT&apos;S POSSIBLE</SectionLabel>
          <h2>
            Different ambitions.
            <br />
            <span>Distinctive directions.</span>
          </h2>
        </div>
        <p>
          A few starting points for the conversation. Every concept is adapted
          to your brand, content, and goals.
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
        {visible.map((template) => (
          <article className="template-card" key={template.id}>
            <button
              type="button"
              className="template-preview"
              onClick={() => preview(template)}
              aria-label={`Preview ${template.name} concept`}
            >
              <Concept template={template} />
              <span className="preview-overlay">
                Explore concept <Arrow diagonal />
              </span>
            </button>
            <div className="template-meta">
              <div>
                <p className="micro">{template.tag}</p>
                <h3>{template.name}</h3>
              </div>
              <button
                className="icon-button"
                type="button"
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
          {selected && <Concept template={selected} expanded />}
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
