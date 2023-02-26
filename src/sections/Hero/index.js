import Button from "@/components/Button";
import Container from "@/components/Container";

import styles from "./index.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.fullscreen}>
          <video
            className={styles.video}
            poster="/assets/videos/hero.png"
            src="/assets/videos/hero.mp4#t=1"
            loop
            muted
            autoPlay
          ></video>
        </div>
        <div className={styles.overlay}>
          <img
            src="/assets/images/logo.png"
            alt="Headstomper"
            className={styles.logo}
          />
          <div className="my-2">
            <h1 className="mb-1">
              Scandinavia's <span className="text-underline">BIGGEST</span>
              <br />
              fighting game tournament
            </h1>
            <p className="fw-bold">
              9th - 11th June 2023
              <br />
              Malmö, Sweden
            </p>
          </div>
          <Button size="large">Register now</Button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
