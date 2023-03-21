import { createElement } from "react";
import cx from "classnames";
import styles from "./index.module.scss";

const Button = ({
  children,
  size,
  variant = "default",
  as = "button",
  ...rest
}) => {
  const Component = as;
  return (
    <Component
      className={cx(
        styles.button,
        {
          [styles.small]: size === "small",
          [styles.large]: size === "large",
        },
        {
          [styles.default]: variant === "default",
        }
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Button;
