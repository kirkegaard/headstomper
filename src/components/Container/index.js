import cx from "classnames";
import styles from "./index.module.css";

const Container = ({ dimmed, children }) => {
  return (
    <div className={cx(dimmed && styles.dimmed, styles.container)}>
      {children}
    </div>
  );
};

export default Container;
