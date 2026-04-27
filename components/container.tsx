import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";

import styles from "./container.module.css";

const container = cva(styles.base, {
  variants: {
    justifyContent: {
      flexStart: styles.justifyFlexStart,
      flexEnd: styles.justifyFlexEnd,
      center: styles.justifyCenter,
      spaceBetween: styles.justifySpaceBetween,
      spaceAround: styles.justifySpaceAround,
      spaceEvenly: styles.justifySpaceEvenly,
    },
    alignItems: {
      flexStart: styles.alignFlexStart,
      flexEnd: styles.alignFlexEnd,
      center: styles.alignCenter,
      stretch: styles.alignStretch,
      baseline: styles.alignBaseline,
    },
    flexDirection: {
      row: styles.directionRow,
      rowReverse: styles.directionRowReverse,
      column: styles.directionColumn,
      columnReverse: styles.directionColumnReverse,
    },
    flexWrap: {
      nowrap: styles.wrapNowrap,
      wrap: styles.wrapWrap,
      wrapReverse: styles.wrapWrapReverse,
    },
    maxWidth: {
      sm: styles.maxWidthSm,
      md: styles.maxWidthMd,
      lg: styles.maxWidthLg,
      xl: styles.maxWidthXl,
      full: styles.maxWidthFull,
    },
    center: {
      true: styles.center,
    },
    fill: {
      true: styles.fill,
      fixed: styles.fillFixed,
    },
  },
  defaultVariants: {
    flexDirection: "row",
    alignItems: "stretch",
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof container> {}

export const Container: React.FC<ContainerProps> = ({
  className,
  justifyContent,
  alignItems,
  flexDirection,
  flexWrap,
  maxWidth,
  center,
  fill,
  ...props
}) => (
  <div
    className={container({
      justifyContent,
      alignItems,
      flexDirection,
      flexWrap,
      maxWidth,
      center,
      fill,
      className,
    })}
    {...props}
  />
);
