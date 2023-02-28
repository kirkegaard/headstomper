import cx from "classnames";
import styles from "./index.module.scss";

const Button = ({ children, size, variant = "default", ...rest }) => {
  return (
    <button
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
    </button>
  );
};

export default Button;
