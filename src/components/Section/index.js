import styles from "./index.module.css";

const Section = ({ children, className }) => {
  return (
    <section className={`${styles.container} ${className ? className : ""}`}>
      {children}
    </section>
  );
};

export default Section;
