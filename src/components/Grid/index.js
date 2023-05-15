import cx from "classnames";
import styles from "./index.module.css";

const Grid = ({ children, className }) => {
  return <div className={cx(styles.grid, className)}>{children}</div>;
};

export default Grid;
