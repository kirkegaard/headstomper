import Image from "next/image";
import Container from "@/components/Container";
import Register from "@/components/Register";

import styles from "./index.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.fullscreen}>
          <video
            className={styles.video}
            poster="/assets/videos/hero.png"
            src="/assets/videos/hero.mp4#t=0.1"
            loop
            muted
            autoPlay
            playsInline
          ></video>
        </div>
        <div className={styles.overlay}>
          <Image
            className={styles.logo}
            src="/assets/images/logo.png"
            alt="Headstomper is back"
            width={914}
            height={429}
          />
          <div className="my-2">
            <h2 className="fw-bold">We&apos;re back!</h2>
            <h5 className="">
              Scandinavia&apos;s{" "}
              <span className="text-highlight fw-bold">GREATEST</span> fighting
              <br />
              game tournament is back! <small>So is the ice cream...</small>
            </h5>
            <h1 className="my-2">
              <span className="fw-bold">30th May - 1st June 2025</span>
            </h1>
            <Register />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
