import cx from "classnames";
import styles from "./index.module.css";

const Button = ({ children, variant = "default" }) => {
  return (
    <button
      className={cx(styles.button, {
        [styles.default]: variant === "default",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
