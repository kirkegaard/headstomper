import Container from "@/components/Container";
import Section from "@/components/Section";

import styles from "./index.module.css";

const Contact = () => {
  return (
    <Section className={styles.container}>
      <Container>
        <h1 className="title">Questions?</h1>
        <p>Feel free to contact us here</p>
        <ul className="list-unstyled">
          <li>
            <a href="https://discord.gg/MAGpuHw">Discord</a>
          </li>
          <li>
            <a href="https://twitter.com/headstomper">Twitter</a>
          </li>
          <li>
            <a href="https://www.facebook.com/HeadstomperTournament/">
              Facebook
            </a>
          </li>
          <li>
            <a href="mailto:contact@headstomper.com">E-mail</a>
          </li>
        </ul>
      </Container>
    </Section>
  );
};

export default Contact;
