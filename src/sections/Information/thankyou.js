import Link from "next/link";

import Container from "@/components/Container";
import Section from "@/components/Section";

import styles from "./index.module.css";

const Thankyou = () => {
  return (
    <Section className={styles.container}>
      <Container>
        <div className={styles.maxWidth}>
          <h1 className="title">Thank you!</h1>
          <p>
            It's been an amazing year. Thank you all for joining us in playing
            the games that we love, meet new and old friends, and of course eat
            ice cream! We hope to see you all again next year!
          </p>
          <p>
            In the mean time be sure to follow us on{" "}
            <Link href="https://twitter.com/headstomper">twitter</Link> for all
            the news about <span className="fw-bold">Headstomper 2024</span>
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default Thankyou;
