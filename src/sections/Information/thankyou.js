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
          <p className="fw-bold">
            It’s been an amazing year — and an even more amazing event.
          </p>
          <p>
            Thank you all for making it so special by joining us to play the
            games we love, reconnect with old friends, make new ones, and (of
            course) eat a whole lot of ice cream.
          </p>
          <p>
            Your energy, passion, and support mean the world to us — Headstomper
            wouldn&rsquo;t be the same without this incredible community.
          </p>
          <p>We can&rsquo;t wait to do it all again. See you in 2026!</p>
          <p>
            In the meantime, follow us on{" "}
            <Link href="https://x.com/headstomper">Twitter</Link> for all the
            latest updates on Headstomper <b>2026</b>!
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default Thankyou;
