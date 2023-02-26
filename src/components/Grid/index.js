import styles from "./index.module.css";

const Grid = ({ children }) => {
  return <div className={styles.grid}>{children}</div>;
};

export default Grid;
