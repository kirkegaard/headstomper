"use client";

import styles from "./overlay.module.css";

type Stop = string;
type Direction =
  | "to top"
  | "to bottom"
  | "to left"
  | "to right"
  | `${number}deg`;

interface SolidOverlay {
  type: "solid";
  color: string;
}

interface GradientOverlay {
  type: "gradient";
  direction?: Direction;
  colors: Stop[];
}

type Layer = SolidOverlay | GradientOverlay;

interface DotsEffect {
  type: "dots";
  /** Dot color, defaults to rgba(0,0,0,0.8) */
  color?: string;
  /** Grid cell size in px, defaults to 4 */
  size?: number;
  /** Dot radius as fraction of size (0–0.5), defaults to 0.35 */
  radius?: number;
}

interface GrayscaleEffect {
  type: "grayscale";
  /** 0–1, defaults to 1 (full grayscale) */
  amount?: number;
}

interface LevelsEffect {
  type: "levels";
  /** 0–1, darkens overall brightness, defaults to 1 */
  brightness?: number;
  /** 0–1, reduces contrast, defaults to 1 */
  contrast?: number;
  /** 0–1, reduces saturation, defaults to 1 */
  saturate?: number;
}

type Effect = DotsEffect | GrayscaleEffect | LevelsEffect;

interface OverlayProps {
  layers?: Layer | Layer[];
  effect?: Effect | Effect[];
  children?: React.ReactNode;
}

function toCSS(layer: Layer): string {
  if (layer.type === "solid") return layer.color;
  return `linear-gradient(${layer.direction ?? "to bottom"}, ${layer.colors.join(", ")})`;
}

function dotsSVG(color: string, size: number, radius: number): string {
  const r = radius * size;
  const c = size / 2;
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}'><circle cx='${c}' cy='${c}' r='${r}' fill='${color}'/></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

export const Overlay = ({ layers, effect, children }: OverlayProps) => {
  const arr = layers ? (Array.isArray(layers) ? layers : [layers]) : [];
  const effects = effect ? (Array.isArray(effect) ? effect : [effect]) : [];
  const bg = arr.map(toCSS).join(", ") || undefined;

  const dots = effects.filter((e): e is DotsEffect => e.type === "dots");
  const grayscale = effects.find((e): e is GrayscaleEffect => e.type === "grayscale");
  const levels = effects.find((e): e is LevelsEffect => e.type === "levels");

  const filters: string[] = [];
  if (grayscale) filters.push(`grayscale(${grayscale.amount ?? 1})`);
  if (levels) {
    if (levels.brightness !== undefined) filters.push(`brightness(${levels.brightness})`);
    if (levels.contrast !== undefined) filters.push(`contrast(${levels.contrast})`);
    if (levels.saturate !== undefined) filters.push(`saturate(${levels.saturate})`);
  }

  const rootStyle: React.CSSProperties = {};
  if (filters.length) rootStyle.filter = filters.join(" ");

  return (
    <div className={styles.root} style={rootStyle}>
      {children}
      {bg && <div className={styles.overlay} style={{ background: bg }} />}
      {dots.map((d, i) => {
        const { color = "rgba(0,0,0,0.8)", size = 4, radius = 0.35 } = d;
        return (
          <div
            key={i}
            className={styles.overlay}
            style={{
              backgroundImage: dotsSVG(color, size, radius),
              backgroundRepeat: "repeat",
              backgroundSize: `${size}px ${size}px`,
            }}
          />
        );
      })}
    </div>
  );
};
