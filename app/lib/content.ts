export const FIVERR_URL = "https://www.fiverr.com/thebigamore";
export const NAIRA_RATE = 1380;
export const CUSTOM_PLAN = "Web Apps & Custom Builds";
export const CUSTOM_BOOKING_URL = `/booking?plan=${encodeURIComponent(CUSTOM_PLAN)}`;

export function naira(dollars: number) {
  return `₦${(dollars * NAIRA_RATE).toLocaleString("en-US")}`;
}

export const plans = [
  {
    name: "Standard",
    price: 350,
    description: "Most founders choose this. Flexible pricing, let's talk.",
    features: [
      "Landing page with up to 5 sections",
      "Custom responsive design",
      "Smooth scroll animations",
      "2 revisions",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: 600,
    description: "For serious launches. Custom quote, room to discuss.",
    features: [
      "Landing page with up to 8 sections",
      "Custom design and animations",
      "Conversion-focused copy polish",
      "3 revisions",
    ],
    featured: false,
  },
];

export const budgetOptions = plans
  .map((plan) => ({
    value: plan.name,
    label: `${plan.name} — $${plan.price} / ${naira(plan.price)}`,
  }))
  .concat({ value: CUSTOM_PLAN, label: `${CUSTOM_PLAN} — Let's talk` });

export const templates = [
  {
    id: "orbit",
    name: "Orbit",
    category: "SaaS",
    kind: "dashboard",
    description:
      "A precise, product-led direction for your next software launch.",
    tag: "SaaS / Analytics",
  },
  {
    id: "form",
    name: "Form & Field",
    category: "Service",
    kind: "studio",
    description:
      "Editorial typography meets a confident, considered studio presence.",
    tag: "Studio / Portfolio",
  },
  {
    id: "vault",
    name: "Vault",
    category: "SaaS",
    kind: "finance",
    description:
      "A quietly bold interface for modern finance and ambitious products.",
    tag: "Fintech / Product",
  },
];
