import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { forwardRef } from "react";

import styles from "./grid.module.css";

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";
type BreakpointValues<T> = Partial<Record<Breakpoint, T>>;
type Responsive<T> = T | BreakpointValues<T>;

const breakpoints: Breakpoint[] = ["xs", "sm", "md", "lg", "xl"];

function isBreakpointObj<T>(v: Responsive<T>): v is BreakpointValues<T> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

const container = cva(styles.container, {
  variants: {
    wrap: {
      wrap: styles.wrapWrap,
      nowrap: styles.wrapNowrap,
      wrapReverse: styles.wrapWrapReverse,
    },
  },
  defaultVariants: {
    wrap: "wrap",
  },
});

export interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof container> {
  container?: boolean;
  columns?: Responsive<number>;
  spacing?: Responsive<number>;
  columnSpacing?: Responsive<number>;
  rowSpacing?: Responsive<number>;
  direction?: Responsive<"row" | "row-reverse" | "column" | "column-reverse">;
  size?: Responsive<number | "auto" | true>;
  offset?: Responsive<number>;
}

function resolveResponsiveVars<T>(
  value: Responsive<T>,
  prop: string,
  transform?: (v: T) => string | number,
): Record<string, string | number> {
  const t = (v: T) => (transform ? transform(v) : (v as string | number));
  if (!isBreakpointObj(value)) return { [prop]: t(value) };
  const out: Record<string, string | number> = {};
  for (const bp of breakpoints) {
    if (value[bp] !== undefined) out[`${prop}-${bp}`] = t(value[bp] as T);
  }
  return out;
}

function flexBasis(size: number | "auto" | true, cols: number): string {
  if (size === "auto") return "auto";
  if (size === true) return "calc(100% - var(--col-gap, 0px))";
  const pct = (size / cols) * 100;
  // Subtract a proportional share of the total gap.
  // For N columns there are (N-1) gaps distributed across N columns, so each
  // column loses ((cols-1)/cols) * gap. Per-item: gap * (cols - size) / cols.
  return `calc(${pct}% - var(--col-gap, 0px) * ${(cols - size) / cols})`;
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      children,
      className,
      container: isContainer = false,
      columns = 12,
      spacing = 0,
      columnSpacing,
      rowSpacing,
      direction = "row",
      wrap = "wrap",
      size,
      offset,
      style,
      ...props
    },
    ref,
  ) => {
    const vars: Record<string, string | number> = {};
    const cols = isBreakpointObj(columns) ? 12 : (columns as number);

    if (isContainer) {
      const colSpacing = columnSpacing ?? spacing;
      const rowSp = rowSpacing ?? spacing;

      Object.assign(
        vars,
        resolveResponsiveVars(
          colSpacing,
          "--col-gap",
          (v) => `${(v as number) * 8}px`,
        ),
      );
      Object.assign(
        vars,
        resolveResponsiveVars(
          rowSp,
          "--row-gap",
          (v) => `${(v as number) * 8}px`,
        ),
      );
      Object.assign(vars, resolveResponsiveVars(direction, "--direction"));
    }

    if (!isContainer && size !== undefined) {
      if (isBreakpointObj(size)) {
        for (const bp of breakpoints) {
          if (size[bp] !== undefined) {
            const bpCols = isBreakpointObj(columns)
              ? (columns[bp] ?? 12)
              : cols;
            vars[`--size-${bp}`] = flexBasis(
              size[bp] as number | "auto" | true,
              bpCols,
            );
          }
        }
      } else {
        vars["--size"] = flexBasis(size, cols);
      }
    }

    if (!isContainer && offset !== undefined) {
      if (isBreakpointObj(offset)) {
        for (const bp of breakpoints) {
          if (offset[bp] !== undefined && offset[bp] !== 0) {
            const bpCols = isBreakpointObj(columns)
              ? (columns[bp] ?? 12)
              : cols;
            vars[`--offset-${bp}`] =
              `${((offset[bp] as number) / bpCols) * 100}%`;
          }
        }
      } else if (offset !== 0) {
        vars["--offset"] = `${((offset as number) / cols) * 100}%`;
      }
    }

    return (
      <div
        ref={ref}
        className={isContainer ? container({ wrap, className }) : styles.item}
        style={{ ...vars, ...style }}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Grid.displayName = "Grid";
