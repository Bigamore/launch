"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRef, useState, type FormEvent } from "react";
import { budgetOptions, templates } from "../lib/content";
import { Arrow } from "./UI";

type BriefFields = {
  name: string;
  business: string;
  email: string;
  budget: string;
  details: string;
};

export default function BookingForm() {
  const params = useSearchParams();
  const plan = params.get("plan") ?? "";
  const template = templates.find((item) => item.id === params.get("template"));
  const [fields, setFields] = useState<BriefFields>({
    name: "",
    business: "",
    email: "",
    budget: budgetOptions.some((item) => item.value === plan) ? plan : "",
    details: "",
  });
  const [brief, setBrief] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const outputRef = useRef<HTMLTextAreaElement>(null);
  const resultHeading = useRef<HTMLHeadingElement>(null);
  const whatsappNumber = "2348079941362";
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi StartitXP I want to build a website.

${brief}`)}`;

  function update(key: keyof BriefFields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  function generate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const budget =
      budgetOptions.find((item) => item.value === fields.budget)?.label ??
      fields.budget;
    setBrief(
      [
        "StartitXP — PROJECT BRIEF",
        "",
        `Name: ${fields.name.trim()}`,
        `Business: ${fields.business.trim()}`,
        `Email: ${fields.email.trim()}`,
        `Budget / package: ${budget}`,
        ...(template ? [`Design direction: ${template.name}`] : []),
        "",
        "PROJECT DETAILS",
        fields.details.trim(),
        "",
        "I'd like to discuss the scope, timeline, and next steps.",
      ].join("\n"),
    );
    setCopied(false);
    setCopyError(false);
    requestAnimationFrame(() => resultHeading.current?.focus());
  }

  async function copyBrief() {
    try {
      await navigator.clipboard.writeText(brief);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
      outputRef.current?.focus();
      outputRef.current?.select();
    }
  }

  if (brief)
    return (
      <section
        className="booking-form-panel brief-result"
        aria-labelledby="brief-heading"
      >
        <div className="form-topline">
          <span className="micro">YOUR IDEA, READY TO SHARE</span>
          <span className="brief-check" aria-hidden="true">
            ✓
          </span>
        </div>
        <h2 id="brief-heading" tabIndex={-1} ref={resultHeading}>
          Your next chapter,
          <br />
          <span>in a few words.</span>
        </h2>
        <p className="form-description">
          Your brief is ready. Nothing has been sent yet. Copy it or share it
          through WhatsApp to start the conversation.
        </p>
        <label className="field-label" htmlFor="generated-brief">
          Your project brief
        </label>
        <textarea
          ref={outputRef}
          id="generated-brief"
          className="generated-brief"
          readOnly
          value={brief}
          rows={14}
        />
        <div className="brief-actions">
          <button
            type="button"
            className="button button-primary"
            onClick={copyBrief}
          >
            {copied ? "Brief copied ✓" : "Copy project brief"}
            <span aria-hidden="true">⧉</span>
          </button>
          <Link
            className="button button-whatsapp"
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Send via WhatsApp <Arrow diagonal />
          </Link>
        </div>
        <p className="form-privacy" role="status">
          {copyError
            ? "Automatic copy is unavailable. Your brief is selected; use your device's Copy command."
            : copied
              ? "Copied. Paste your brief into your conversation when you're ready."
              : whatsappNumber
                ? "WhatsApp opens with your brief. Review it and tap Send to deliver it."
                : "WhatsApp opens with your brief and lets you choose a contact. Review it before sending."}
        </p>
        <button
          type="button"
          className="back-to-form"
          onClick={() => {
            setBrief("");
            setCopied(false);
            setCopyError(false);
          }}
        >
          ← Edit your details
        </button>
      </section>
    );

  return (
    <section className="booking-form-panel" aria-labelledby="form-heading">
      <div className="form-topline">
        <span className="micro">PROJECT ENQUIRY / 01</span>
        <span className="micro">ABOUT 2 MINUTES</span>
      </div>
      <h2 id="form-heading">Tell us what&apos;s next.</h2>
      <p className="form-description">
        A few details to get the conversation started.
      </p>
      {template && (
        <div className="selected-template">
          DESIGN DIRECTION <strong>{template.name}</strong>
        </div>
      )}
      <form onSubmit={generate}>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="name">
              Your name <span>*</span>
            </label>
            <input
              autoComplete="name"
              id="name"
              name="name"
              placeholder="Alex Johnson"
              required
              minLength={2}
              maxLength={100}
              value={fields.name}
              onChange={(e) => update("name", e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="business">
              Business / brand <span>*</span>
            </label>
            <input
              autoComplete="organization"
              id="business"
              name="business"
              placeholder="Your next big thing"
              required
              maxLength={150}
              value={fields.business}
              onChange={(e) => update("business", e.target.value)}
            />
          </div>
        </div>
        <div className="form-field">
          <label htmlFor="email">
            Email address <span>*</span>
          </label>
          <input
            type="email"
            autoComplete="email"
            id="email"
            name="email"
            placeholder="you@yourbusiness.com"
            required
            maxLength={254}
            value={fields.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="budget">
            Your starting point <span>*</span>
          </label>
          <select
            id="budget"
            name="budget"
            required
            value={fields.budget}
            onChange={(e) => update("budget", e.target.value)}
          >
            <option value="" disabled>
              Select a package or let's discuss
            </option>
            {budgetOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <small>Starting prices. Scope and final quote agreed together.</small>
        </div>
        <div className="form-field">
          <label htmlFor="details">
            What are you building? <span>*</span>
          </label>
          <textarea
            id="details"
            name="details"
            placeholder="Tell us about your business, your goals, any references you love, and your ideal timeline…"
            required
            minLength={20}
            maxLength={5000}
            rows={5}
            value={fields.details}
            onChange={(e) => update("details", e.target.value)}
          />
          <small>
            A little context goes a long way. Minimum 20 characters.
          </small>
        </div>
        <button type="submit" className="button button-primary form-submit">
          Create my project brief <Arrow />
        </button>
        <p className="form-privacy">
          No account or payment required. Your details stay in this page until
          you choose to copy or share your brief. No email is sent.
        </p>
      </form>
    </section>
  );
}
