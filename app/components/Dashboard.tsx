"use client";

import { useEffect, useId, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";

function Count({
  value,
  suffix,
  prefix = "",
}: {
  value: number;
  suffix: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduced = useReducedMotion();
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView || reduced) return;
    const control = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (n) => setCount(Math.round(n)),
    });
    return () => control.stop();
  }, [inView, reduced, value]);
  return (
    <span ref={ref} aria-label={`${prefix}${value}${suffix}`}>
      <span aria-hidden="true">
        {prefix}
        {reduced ? value : count}
        {suffix}
      </span>
    </span>
  );
}

export default function Dashboard({ compact = false }: { compact?: boolean }) {
  const gradientId = useId();
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.1 });
  return (
    <motion.div
      ref={ref}
      className={`dashboard-shell ${compact ? "compact" : ""}`}
      animate={{ y: reduced || compact || !inView ? 0 : [-6, 6, -6] }}
      transition={
        reduced || compact || !inView
          ? { duration: 0 }
          : { duration: 7, repeat: Infinity, ease: "easeInOut" }
      }
    >
      <div className="dashboard">
        <div className="window-bar">
          <div className="window-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <span>orbit / workspace</span>
          <span className="window-command">⌘ K</span>
        </div>
        <div className="dashboard-body">
          <aside className="dashboard-sidebar" aria-hidden="true">
            <div className="orbit-brand">
              <span>◈</span> orbit
            </div>
            <div className="sidebar-item selected">
              ▦ <span>Overview</span>
            </div>
            <div className="sidebar-item">
              ◷ <span>Analytics</span>
            </div>
            <div className="sidebar-item">
              ⊞ <span>Projects</span>
            </div>
            <div className="sidebar-item">
              ◎ <span>Audience</span>
            </div>
            <div className="sidebar-bottom">
              <div className="avatar">J</div>
              <span>
                Your workspace<small>Pro plan</small>
              </span>
              <b>⌄</b>
            </div>
          </aside>
          <div className="dashboard-content">
            <div className="dashboard-heading">
              <div>
                <span className="micro">YOUR WORKSPACE, AT A GLANCE</span>
                <h3>
                  Overview<span>↗</span>
                </h3>
              </div>
              <span className="date-pill">Last 30 days ⌄</span>
            </div>
            <div className="metric-grid">
              {[
                {
                  name: "Total growth",
                  value: 124,
                  suffix: "%",
                  change: "+24.8%",
                },
                {
                  name: "Revenue",
                  value: 42,
                  prefix: "$",
                  suffix: "k",
                  change: "+18.6%",
                },
                {
                  name: "Performance",
                  value: 98,
                  suffix: "%",
                  change: "+12.4%",
                },
              ].map((m) => (
                <div className="metric" key={m.name}>
                  <p>
                    {m.name}
                    <span>↗</span>
                  </p>
                  <strong>
                    <Count
                      value={m.value}
                      prefix={m.prefix}
                      suffix={m.suffix}
                    />
                  </strong>
                  <small>
                    <span>↗ {m.change}</span> vs. last month
                  </small>
                </div>
              ))}
            </div>
            <div className="chart-panel">
              <div className="chart-heading">
                <span>Revenue overview</span>
                <span className="chart-legend">
                  <i />
                  Revenue
                </span>
              </div>
              <div
                className="chart"
                role="img"
                aria-label="Sample revenue chart increasing over thirty days"
              >
                <div className="chart-grid" />
                <svg
                  viewBox="0 0 600 180"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#c2d6a5" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#c2d6a5" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 150 C30 150 25 128 60 133 S105 150 130 110 S175 125 200 96 S235 118 265 77 S310 90 340 59 S380 82 410 42 S460 69 490 30 S545 40 600 8 L600 180 L0 180Z"
                    fill={`url(#${gradientId})`}
                  />
                  <path
                    d="M0 150 C30 150 25 128 60 133 S105 150 130 110 S175 125 200 96 S235 118 265 77 S310 90 340 59 S380 82 410 42 S460 69 490 30 S545 40 600 8"
                    fill="none"
                    stroke="#c2d6a5"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>
              <div className="chart-axis">
                <span>01 JUN</span>
                <span>07 JUN</span>
                <span>14 JUN</span>
                <span>21 JUN</span>
                <span>30 JUN</span>
              </div>
            </div>
            <div className="dashboard-bottom">
              <span>
                <i />
                All systems operational
              </span>
              <span>Concept interface · Sample data</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
