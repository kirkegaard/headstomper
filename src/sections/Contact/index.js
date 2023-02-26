import Container from "@/components/Container";
import Section from "@/components/Section";

import styles from "./index.module.css";

const Contact = () => {
  return (
    <Section className={styles.container}>
      <Container>
        <h1>Contact</h1>
        <p>Footer stuff</p>
      </Container>
    </Section>
  );
};

export default Contact;
