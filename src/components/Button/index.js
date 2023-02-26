import cx from "classnames";
import styles from "./index.module.css";

const Button = ({ children, size, variant = "default" }) => {
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
    >
      {children}
    </button>
  );
};

export default Button;
