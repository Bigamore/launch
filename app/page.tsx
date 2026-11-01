"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";

const FIVERR_URL = "https://www.fiverr.com/thebigamore";

const features = [
  {
    k: "01",
    t: "Strategy First",
    d: "No templates. Every pixel is built to convert your specific audience.",
  },
  {
    k: "02",
    t: "Ship in 48h",
    d: "From idea to live link in two days. No endless revisions.",
  },
  {
    k: "03",
    t: "Built to Convert",
    d: "Copy, design, and animations that make people click buy.",
  },
];

const packages = [
  {
    name: "Basic",
    price: "$150",
    description: "Perfect to get started fast. Starting price, negotiable.",
    features: [
      "Single-section landing page",
      "Responsive mobile design",
      "Your copy and branding",
      "1 revision",
    ],
    featured: false,
  },
  {
    name: "Standard",
    price: "$350",
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
    price: "$600",
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

const metrics = [
  { label: "Growth", value: 124, prefix: "", suffix: "%", change: "24.8%" },
  { label: "Revenue", value: 42, prefix: "$", suffix: "k", change: "18.6%" },
  { label: "Performance", value: 98, prefix: "", suffix: "%", change: "12.4%" },
];

const chartHeights = [78, 72, 75, 58, 63, 44, 48, 29, 33, 14, 8];

const chartPoints = chartHeights.map(
  (height, index) => `${(index / (chartHeights.length - 1)) * 100}% ${height}%`
);

const chartArea = `polygon(${chartPoints.join(", ")}, 100% 100%, 0% 100%)`;

const chartLine = `polygon(${chartPoints.join(", ")}, ${chartHeights
  .map(
    (height, index) =>
      `${(index / (chartHeights.length - 1)) * 100}% ${height + 1.2}%`
  )
  .reverse()
  .join(", ")})`;

function CountUp({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || reduceMotion) return;

    const controls = animate(0, value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (latest) => setCount(Math.round(latest)),
    });

    return () => controls.stop();
  }, [inView, reduceMotion, value]);

  return (
    <span ref={ref} aria-label={`${prefix}${value}${suffix}`}>
      <span aria-hidden="true">
        {prefix}
        {reduceMotion ? value : count}
        {suffix}
      </span>
    </span>
  );
}

function DashboardPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.15 });
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="preview"
      aria-labelledby="preview-heading"
      className="relative mx-auto max-w-7xl scroll-mt-24 px-6 pb-8 pt-24 md:pt-36"
    >
      <div className="mb-14 text-center">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
          Interface preview / 001
        </p>
        <h2
          id="preview-heading"
          className="text-4xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-6xl"
        >
          A PREVIEW /
          <br />
          <span className="bg-gradient-to-b from-zinc-300 to-zinc-600 bg-clip-text text-transparent">
            OF WHAT&apos;S POSSIBLE
          </span>
        </h2>
      </div>

      <div ref={ref} className="relative mx-auto max-w-5xl py-4">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-[15%] inset-y-[10%] rounded-full bg-white/[0.04] blur-3xl"
        />

        <motion.div
          initial={false}
          animate={{
            y: reduceMotion || !inView ? 0 : [-10, 10, -10],
          }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : inView
                ? {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
                : { duration: 0.6, ease: "easeOut" }
          }
          className="relative rounded-[24px] border border-white/[0.08] bg-white/[0.03] p-2 shadow-[0_0_100px_rgba(255,255,255,0.08)] backdrop-blur"
        >
          <div className="overflow-hidden rounded-[17px] border border-white/[0.06] bg-black">
            {/* WINDOW BAR */}
            <div className="relative flex items-center justify-between gap-3 border-b border-white/[0.06] px-4 py-4 sm:px-5">
              <div aria-hidden="true" className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-zinc-600" />
                <span className="h-2 w-2 rounded-full bg-zinc-700" />
                <span className="h-2 w-2 rounded-full bg-zinc-800" />
              </div>

              <div className="flex items-center gap-2 rounded-md border border-white/[0.06] bg-white/[0.03] px-4 py-1.5 font-mono text-[9px] text-zinc-500 sm:px-8">
                <span
                  aria-hidden="true"
                  className="h-1 w-1 rounded-full bg-zinc-500"
                />
                app.launch.studio / overview
              </div>

              <div
                aria-hidden="true"
                className="hidden h-5 w-5 rounded-full border border-white/10 bg-gradient-to-br from-zinc-600 to-zinc-900 sm:block"
              />
            </div>

            <div className="flex">
              {/* SIDEBAR */}
              <aside
                aria-hidden="true"
                className="hidden w-40 shrink-0 flex-col border-r border-white/[0.06] p-5 sm:flex lg:w-48"
              >
                <div className="mb-9 flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md border border-white/15 bg-white/[0.05] text-xs font-bold">
                    L
                  </div>
                  <span className="text-xs font-semibold tracking-tight">
                    LAUNCH.
                  </span>
                </div>

                <div className="space-y-2">
                  {[68, 48, 60, 42].map((width, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 rounded-lg px-2.5 py-3 ${index === 0
                          ? "border border-white/[0.06] bg-white/[0.05]"
                          : "border border-transparent"
                        }`}
                    >
                      <div
                        className={`h-3 w-3 rounded-sm border ${index === 0
                            ? "border-zinc-500 bg-white/10"
                            : "border-zinc-800"
                          }`}
                      />
                      <div
                        className={`h-1.5 rounded-full ${index === 0 ? "bg-zinc-500" : "bg-zinc-800"
                          }`}
                        style={{ width: `${width}%` }}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-16">
                  <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                    <div className="mb-2 h-1.5 w-3/4 rounded-full bg-zinc-800" />
                    <div className="h-1.5 w-1/2 rounded-full bg-zinc-900" />
                    <div className="mt-4 h-1 overflow-hidden rounded-full bg-zinc-900">
                      <div className="h-full w-3/4 rounded-full bg-zinc-500" />
                    </div>
                  </div>
                </div>
              </aside>

              {/* MAIN DASHBOARD */}
              <div className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
                <div className="mb-6 flex items-start justify-between gap-3">
                  <div>
                    <p className="mb-1.5 font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-600">
                      Workspace / Analytics
                    </p>
                    <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                      Overview
                    </h3>
                  </div>

                  <span className="shrink-0 rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 font-mono text-[9px] text-zinc-400">
                    Last 30 days
                  </span>
                </div>

                {/* METRICS */}
                <div className="mb-4 grid grid-cols-1 gap-3 min-[420px]:grid-cols-3">
                  {metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="relative overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.025] p-4"
                    >
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
                      />
                      <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.1em] text-zinc-500">
                        {metric.label}
                      </p>

                      <div className="text-3xl font-semibold tracking-[-0.05em] tabular-nums lg:text-4xl">
                        <CountUp
                          value={metric.value}
                          prefix={metric.prefix}
                          suffix={metric.suffix}
                        />
                      </div>

                      <p className="mt-3 flex items-center gap-1 font-mono text-[9px] text-green-400">
                        <span aria-hidden="true">↗</span>
                        <span>{metric.change}</span>
                        <span className="hidden text-zinc-600 lg:inline">
                          vs last month
                        </span>
                      </p>
                    </div>
                  ))}
                </div>

                {/* CHART */}
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.015] p-4 sm:p-5">
                  <div className="mb-6 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-medium text-zinc-300">
                        Revenue overview
                      </p>
                      <p className="mt-1 font-mono text-[9px] text-zinc-600">
                        Performance over time
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-[9px] text-zinc-500">
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-zinc-300"
                      />
                      Revenue
                    </div>
                  </div>

                  <div
                    role="img"
                    aria-label="Illustrative revenue chart trending upward over thirty days."
                    className="relative aspect-[2/1] w-full sm:aspect-[3/1]"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 flex flex-col justify-between"
                    >
                      {[0, 1, 2, 3, 4].map((line) => (
                        <div
                          key={line}
                          className="h-px w-full bg-white/[0.05]"
                        />
                      ))}
                    </div>

                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-b from-white/[0.12] via-white/[0.04] to-transparent"
                      style={{ clipPath: chartArea }}
                    />

                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-r from-zinc-700 via-zinc-300 to-white"
                      style={{ clipPath: chartLine }}
                    />

                    <div
                      aria-hidden="true"
                      className="absolute right-0 top-[8%] -mr-1 -mt-1 h-2 w-2 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.6)]"
                    />
                  </div>

                  <div
                    aria-hidden="true"
                    className="mt-3 flex justify-between font-mono text-[8px] text-zinc-600 sm:text-[9px]"
                  >
                    <span>01 JUN</span>
                    <span>07 JUN</span>
                    <span>14 JUN</span>
                    <span>21 JUN</span>
                    <span>30 JUN</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 font-mono text-[8px] text-zinc-600 sm:text-[9px]">
                  <span className="flex items-center gap-1.5">
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 rounded-full bg-green-500"
                    />
                    All systems operational
                  </span>
                  <span>Illustrative dashboard · Sample data</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const smoothX = useSpring(cursorX, { stiffness: 700, damping: 45 });
  const smoothY = useSpring(cursorY, { stiffness: 700, damping: 45 });

  useMotionValueEvent(scrollY, "change", (value) => {
    setScrolled(value > 12);
  });

  useEffect(() => {
    setScrolled(window.scrollY > 12);
  }, []);

  useEffect(() => {
    const media = window.matchMedia(
      "(min-width: 768px) and (hover: hover) and (pointer: fine)"
    );

    let positioned = false;

    const hideCursor = () => {
      positioned = false;
      setCursorVisible(false);
    };

    const moveCursor = (event: PointerEvent) => {
      if (!media.matches || event.pointerType !== "mouse") {
        hideCursor();
        return;
      }

      cursorX.set(event.clientX);
      cursorY.set(event.clientY);

      if (!positioned) {
        smoothX.jump(event.clientX);
        smoothY.jump(event.clientY);
        positioned = true;
      }

      setCursorVisible(true);
    };

    const leaveWindow = (event: PointerEvent) => {
      if (event.relatedTarget === null) hideCursor();
    };

    const handleVisibility = () => {
      if (document.hidden) hideCursor();
    };

    window.addEventListener("pointermove", moveCursor, { passive: true });
    window.addEventListener("pointerout", leaveWindow);
    window.addEventListener("blur", hideCursor);
    document.addEventListener("visibilitychange", handleVisibility);
    media.addEventListener("change", hideCursor);

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      window.removeEventListener("pointerout", leaveWindow);
      window.removeEventListener("blur", hideCursor);
      document.removeEventListener("visibilitychange", handleVisibility);
      media.removeEventListener("change", hideCursor);
    };
  }, [cursorX, cursorY, smoothX, smoothY]);

  const hover = reduceMotion ? undefined : { scale: 1.05 };
  const tap = reduceMotion ? undefined : { scale: 0.98 };
  const buttonTransition = {
    type: "spring" as const,
    stiffness: 400,
    damping: 25,
  };

  const heroVariants = {
    hidden: {
      opacity: reduceMotion ? 1 : 0,
      y: reduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.75 },
    },
  };

  const gridVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.15 },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: reduceMotion ? 1 : 0,
      y: reduceMotion ? 0 : 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.55 },
    },
  };

  return (
    <main
      id="top"
      className="launch-page relative isolate min-h-screen bg-[#0a0a0a] text-white antialiased selection:bg-white selection:text-black"
      data-cursor-active={cursorVisible ? "true" : "false"}
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      <div
        aria-hidden="true"
        className="launch-noise pointer-events-none fixed inset-0 z-[60] opacity-[0.02]"
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] -ml-1 -mt-1 hidden h-2 w-2 rounded-full bg-white mix-blend-difference md:block"
        style={{
          x: reduceMotion ? cursorX : smoothX,
          y: reduceMotion ? cursorY : smoothY,
          opacity: cursorVisible ? 1 : 0,
        }}
      />

      <a
        href="#content"
        className="sr-only fixed left-6 top-6 z-[110] rounded-full bg-white px-5 py-3 text-black focus:not-sr-only"
      >
        Skip to content
      </a>

      {/* NAV */}
      <header
        className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${scrolled
            ? "border-white/10 bg-[#0a0a0a]/80 shadow-lg shadow-black/20 backdrop-blur-xl"
            : "border-transparent bg-[#0a0a0a]"
          }`}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5"
        >
          <a
            href="#top"
            aria-label="LAUNCH home"
            className="text-xl font-bold tracking-[-0.05em]"
          >
            LAUNCH.
          </a>

          <div className="hidden gap-8 text-sm text-zinc-400 md:flex">
            <a href="#work" className="transition-colors hover:text-white">
              Work
            </a>
            <a href="#pricing" className="transition-colors hover:text-white">
              Pricing
            </a>
            <a href="#about" className="transition-colors hover:text-white">
              About
            </a>
          </div>

          <motion.a
            href="https://www.fiverr.com/thebigamore"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={hover}
            whileTap={tap}
            transition={buttonTransition}
            className="launch-primary inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            <span className="relative z-10">Start Project</span>
          </motion.a>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="content"
        className="relative mx-auto max-w-7xl scroll-mt-28 px-6 pb-24 pt-20 md:pb-36 md:pt-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(600px_at_50%_-10%,rgba(255,255,255,0.08),transparent)]"
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={gridVariants}
        >
          <motion.div
            variants={heroVariants}
            className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-400 backdrop-blur-md sm:text-xs"
          >
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)] motion-safe:animate-pulse"
            />
            Available for new projects
          </motion.div>

          <motion.h1
            variants={heroVariants}
            className="text-[12.5vw] font-black leading-[0.88] tracking-[-0.05em] md:text-[10vw] xl:text-[140px]"
          >
            WE BUILD
            <br />
            BRANDS
            <br />
            <span className="inline-block bg-gradient-to-b from-white to-zinc-600 bg-clip-text pb-[0.08em] text-transparent">
              THAT LAUNCH.
            </span>
          </motion.h1>

          <motion.div
            variants={heroVariants}
            className="mt-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"
          >
            <p className="max-w-md text-lg leading-relaxed text-zinc-400">
              Premium landing pages for founders who need to ship fast and look
              expensive. Delivered in 48 hours.
            </p>

            <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <motion.a
                href="#work"
                whileHover={hover}
                whileTap={tap}
                transition={buttonTransition}
                className="launch-primary inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-center font-medium text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                <span className="relative z-10">Explore Our Approach</span>
              </motion.a>

              <motion.a
                href={FIVERR_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={hover}
                whileTap={tap}
                transition={buttonTransition}
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.02] px-8 py-4 text-center backdrop-blur-md transition-colors hover:border-white hover:bg-white/[0.05]"
              >
                Discuss on Fiverr
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* GRID */}
      <section
        id="work"
        aria-label="How we work"
        className="mx-auto max-w-7xl scroll-mt-24 px-6"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={gridVariants}
          className="grid gap-4 md:grid-cols-3"
        >
          {features.map((item) => (
            <motion.article
              key={item.k}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300 hover:border-white/15 hover:bg-white/[0.06] hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] lg:p-10"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/[0.04] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative mb-10 font-mono text-xs tracking-[0.15em] text-zinc-500">
                / {item.k}
              </div>
              <h2 className="relative mb-4 text-2xl font-semibold tracking-tight">
                {item.t}
              </h2>
              <p className="relative leading-relaxed text-zinc-400">
                {item.d}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* DASHBOARD PREVIEW */}
      <DashboardPreview />

      {/* PRICING */}
      <section
        id="pricing"
        aria-labelledby="pricing-heading"
        className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:py-36"
      >
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Simple pricing. Serious impact.
            </p>
            <h2
              id="pricing-heading"
              className="text-4xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-6xl"
            >
              YOUR NEXT
              <br />
              <span className="bg-gradient-to-b from-zinc-300 to-zinc-600 bg-clip-text text-transparent">
                BIG LAUNCH.
              </span>
            </h2>
          </div>

          <p className="max-w-sm leading-relaxed text-zinc-400">
            Starting prices, flexible scope. Choose your package and discuss
            the details on Fiverr.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {packages.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex ${tier.featured ? "z-10 scale-[1.05]" : ""
                }`}
            >
              {tier.featured && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-5 rounded-[2rem] bg-white/[0.07] blur-3xl"
                />
              )}

              <article
                className={`group relative flex w-full flex-col overflow-hidden rounded-2xl border bg-black p-8 transition-[border-color,box-shadow] duration-300 hover:border-white ${tier.featured
                    ? "border-white/30 shadow-[0_0_80px_rgba(255,255,255,0.1)] hover:shadow-[0_0_80px_rgba(255,255,255,0.14)]"
                    : "border-white/[0.08] hover:shadow-[0_0_40px_rgba(255,255,255,0.04)]"
                  }`}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />

                {tier.featured && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.07),transparent_65%)]"
                  />
                )}

                <div className="relative mb-8 flex min-h-6 flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {tier.name}
                  </h3>
                  {tier.featured && (
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-white">
                      Most popular
                    </span>
                  )}
                </div>

                <div className="relative mb-2 flex items-baseline gap-2">
                  <span className="text-5xl font-bold tracking-[-0.05em]">
                    {tier.price}
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500">
                    USD / project
                  </span>
                </div>

                <p className="relative mb-5 font-mono text-[10px] leading-relaxed text-zinc-500">
                  Starting at - Negotiable on Fiverr
                </p>

                <p className="relative mb-8 min-h-12 text-sm leading-relaxed text-zinc-400">
                  {tier.description}
                </p>

                <div className="relative mb-8 h-px bg-gradient-to-r from-white/15 to-white/[0.03]" />

                <ul className="relative mb-10 flex-1 space-y-4">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300"
                    >
                      <span
                        aria-hidden="true"
                        className="font-mono text-zinc-500"
                      >
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.a
                  href={FIVERR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${tier.name} package on Fiverr`}
                  whileHover={hover}
                  whileTap={tap}
                  transition={buttonTransition}
                  className={`relative inline-flex w-full items-center justify-center rounded-full border px-6 py-3.5 text-sm font-medium transition-colors ${tier.featured
                      ? "launch-primary border-white bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                      : "border-white/15 bg-white/[0.02] text-white hover:border-white hover:bg-white/[0.05]"
                    }`}
                >
                  <span className="relative z-10">Choose {tier.name}</span>
                  <span aria-hidden="true" className="relative z-10 ml-2">
                    ↗
                  </span>
                </motion.a>
              </article>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        aria-labelledby="about-heading"
        className="relative scroll-mt-24 border-t border-white/[0.06]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-2 md:py-24">
          <h2
            id="about-heading"
            className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl"
          >
            SMALL STUDIO.
            <br />
            <span className="text-zinc-600">BIG FIRST IMPRESSIONS.</span>
          </h2>

          <p className="max-w-lg text-lg leading-relaxed text-zinc-400">
            LAUNCH builds focused digital experiences for ambitious founders.
            Clear messaging, considered design, and fast delivery—everything
            your next idea needs to make its entrance.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-10 font-mono text-[10px] tracking-wide text-zinc-500 sm:flex-row">
          <span>© 2026 LAUNCH — Lagos, NG</span>
          <a
            href={FIVERR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Built for Fiverr Clients ↗
          </a>
        </div>
      </footer>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 6rem;
          background: #0a0a0a;
        }

        .launch-page a:focus-visible {
          outline: 2px solid white;
          outline-offset: 6px;
        }

        .launch-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Cpath fill='%23fff' filter='url(%23noise)' d='M0 0h180v180H0z'/%3E%3C/svg%3E");
          background-size: 180px 180px;
        }

        .launch-primary {
          position: relative;
          isolation: isolate;
          overflow: hidden;
        }

        .launch-primary::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background: linear-gradient(
            110deg,
            transparent 20%,
            rgba(255, 255, 255, 0.85) 50%,
            transparent 80%
          );
          transform: translateX(-150%) skewX(-20deg);
        }

        .launch-primary:hover::after,
        .launch-primary:focus-visible::after {
          animation: launch-button-shine 0.8s ease-in-out;
        }

        @keyframes launch-button-shine {
          from {
            transform: translateX(-150%) skewX(-20deg);
          }
          to {
            transform: translateX(150%) skewX(-20deg);
          }
        }

        @media (min-width: 768px) and (hover: hover) and (pointer: fine) {
          .launch-page[data-cursor-active="true"],
          .launch-page[data-cursor-active="true"] * {
            cursor: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          .launch-page *,
          .launch-page *::before,
          .launch-page *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </main>
  );
}