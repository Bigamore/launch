"use client";

import { useId, type SVGProps } from "react";
import {
  facetPath,
  logoWidth,
  ribbonA,
  ribbonB,
  startitPath,
  xpPath,
  xpStart,
} from "./logo-data";

export type LogoProps = Omit<
  SVGProps<SVGSVGElement>,
  "width" | "height" | "children"
> & {
  /** The background the signature will sit on. */
  variant?: "dark" | "light";
  /** Total SVG height in pixels; all artwork scales without rasterization. */
  size?: number;
  iconOnly?: boolean;
  monochrome?: boolean;
  decorative?: boolean;
};

/** StartitXP's first-move symbol and optically spaced, outlined wordmark. */
export default function Logo({
  variant = "dark",
  size = 24,
  iconOnly = false,
  monochrome = false,
  decorative = false,
  className = "",
  ...props
}: LogoProps) {
  const id = useId();
  const ink = variant === "dark" ? "#f4f5f2" : "#171a21";
  const accent = variant === "dark" ? "#b6bdf5" : "#5b61ba";
  const width = iconOnly ? 80 : logoWidth;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} 80`}
      width={(width / 80) * size}
      height={size}
      className={`startitxp-logo ${className}`}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-labelledby={decorative ? undefined : `${id}-title`}
      focusable="false"
      {...props}
    >
      {!decorative && <title id={`${id}-title`}>StartitXP</title>}
      <defs>
        <linearGradient
          id={`${id}-facet`}
          x1="40"
          y1="22"
          x2="62"
          y2="44"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#e0e4ff" />
          <stop offset="0.48" stopColor={accent} />
          <stop offset="1" stopColor="#8c99ed" />
        </linearGradient>
        <linearGradient
          id={`${id}-xp`}
          x1={xpStart}
          y1="10"
          x2={logoWidth}
          y2="66"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={ink} />
          <stop offset="1" stopColor={accent} />
        </linearGradient>
      </defs>
      <g data-logo-part="symbol">
        <path d={ribbonA} fill={ink} />
        <path d={ribbonB} fill={ink} />
        {!monochrome && <path d={facetPath} fill={`url(#${id}-facet)`} />}
      </g>
      {!iconOnly && (
        <g data-logo-part="wordmark">
          <path d={startitPath} fill={ink} />
          <path d={xpPath} fill={monochrome ? ink : `url(#${id}-xp)`} />
        </g>
      )}
    </svg>
  );
}
