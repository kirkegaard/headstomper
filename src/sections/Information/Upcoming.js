import Link from "next/link";

import Container from "@/components/Container";
import Section from "@/components/Section";

import styles from "./index.module.css";

const Thankyou = () => {
  return (
    <Section className={styles.container}>
      <Container>
        <div className={styles.maxWidth}>
          <h1 className="title">Ready, Set, FIGHT!</h1>
          <p>
            We are working hard to make{" "}
            <span className="fw-bold">Headstomper 2025</span> our best event
            yet. Thank you for all your patience and support. Please stay tuned
            for more information.
          </p>
          <p>
            In the mean time be sure to follow us on{" "}
            <Link href="https://twitter.com/headstomper">twitter</Link> for all
            the news about <span className="fw-bold">Headstomper 2025</span>
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default Thankyou;
