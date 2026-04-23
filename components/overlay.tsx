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

type Effect = DotsEffect;

interface OverlayProps {
  layers?: Layer | Layer[];
  effect?: Effect;
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
  const bg = arr.map(toCSS).join(", ") || undefined;

  const effectStyle: React.CSSProperties = {};
  if (effect?.type === "dots") {
    const { color = "rgba(0,0,0,0.8)", size = 4, radius = 0.35 } = effect;
    effectStyle.backgroundImage = dotsSVG(color, size, radius);
    effectStyle.backgroundRepeat = "repeat";
    effectStyle.backgroundSize = `${size}px ${size}px`;
  }

  return (
    <div className={styles.root}>
      {children}
      {bg && <div className={styles.overlay} style={{ background: bg }} />}
      {effect && <div className={styles.overlay} style={effectStyle} />}
    </div>
  );
};
