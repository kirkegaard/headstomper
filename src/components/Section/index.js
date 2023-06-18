import styles from "./index.module.css";

const Section = ({ children, className, ...rest }) => {
  return (
    <section
      className={`${styles.container} ${className ? className : ""}`}
      {...rest}
    >
      {children}
    </section>
  );
};

export default Section;
