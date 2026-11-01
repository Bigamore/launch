import Link from "next/link";
import { CUSTOM_BOOKING_URL, CUSTOM_PLAN, naira, plans } from "../lib/content";
import { ActionLink, Arrow, Reveal, SectionLabel } from "./UI";

export default function Pricing() {
  return (
    <section className="section pricing-section container" id="pricing">
      <Reveal className="section-heading">
        <div>
          <SectionLabel>AN INVESTMENT IN YOUR NEXT CHAPTER</SectionLabel>
          <h2>
            Clear starting points.
            <br />
            <span>Room for ambition.</span>
          </h2>
        </div>
        <p>
          No subscriptions. No accounts. Just the right scope for your next
          launch, agreed before we build.
        </p>
      </Reveal>
      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <Reveal
            key={plan.name}
            className={`pricing-wrap ${plan.featured ? "featured-wrap" : ""}`}
            delay={index * 0.07}
          >
            <article
              className={`pricing-card ${plan.featured ? "featured" : ""}`}
            >
              <div className="plan-heading">
                <span className="micro">
                  0{index + 1} / {plan.name.toUpperCase()}
                </span>
                {plan.featured && (
                  <span className="popular-badge">THE SWEET SPOT</span>
                )}
              </div>
              <h3>{plan.name}</h3>
              <div className="dual-price">
                <strong>${plan.price}</strong>
                <span>/ {naira(plan.price)}</span>
              </div>
              <p className="price-note">Starting at · Negotiable on WhatsApp</p>
              <p className="plan-description">{plan.description}</p>
              <div className="plan-rule" />
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span aria-hidden="true">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <ActionLink
                href={`/booking?plan=${encodeURIComponent(plan.name)}`}
                secondary={!plan.featured}
              >
                Choose {plan.name}
              </ActionLink>
              <span className="plan-footnote">
                ONE-TIME PROJECT · NO SUBSCRIPTION
              </span>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <article className="custom-plan">
          <div className="custom-symbol" aria-hidden="true">
            ✳
          </div>
          <div className="custom-copy">
            <p className="micro">BEYOND THE BRIEF</p>
            <h3>{CUSTOM_PLAN}</h3>
            <p>
              Web apps and custom websites built around your business. Let&apos;s
              discuss your idea, the features you need, and a tailored plan to
              bring it to life.
            </p>
          </div>
          <div className="custom-action">
            <p>
              Custom <span>/ Let&apos;s Talk</span>
            </p>
            <Link className="button button-secondary" href={CUSTOM_BOOKING_URL}>
              Let&apos;s talk <Arrow diagonal />
            </Link>
          </div>
        </article>
      </Reveal>
      <p className="exchange-note">
        USD prices are unchanged. NGN equivalents calculated at ₦1,380 per $1.
        Final scope and quote agreed together.
      </p>
    </section>
  );
}
