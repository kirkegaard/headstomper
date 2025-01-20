import cx from "classnames";
import styles from "./index.module.scss";

const Button = ({
  children,
  size,
  variant = "default",
  as = "button",
  className,
  ...rest
}) => {
  const Component = as;
  return (
    <Component
      className={cx(
        className,
        styles.button,
        {
          [styles.small]: size === "small",
          [styles.large]: size === "large",
        },
        {
          [styles.default]: variant === "default",
          [styles.outline]: variant === "outline",
        }
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Button;
