import Image from "next/image";

import Container from "@/components/Container";
import Register from "@/components/Register";

import Button from "@/components/Button";

import styles from "./index.module.css";

const Hero = () => {
  const goto = () => {
    const elm = document.getElementById("results");
    if (elm) {
      elm.scrollIntoView({
        behavior: "smooth",
        // block: "end",
        // inline: "nearest",
      });
    }
  };

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
            alt="Headstomper"
            width={914}
            height={429}
          />
          <div className="my-2">
            <h3 className="fw-bold">Thank you all!</h3>
            <p>See you all next year!</p>
            <Button variant="outline" size="large" href="#stats" onClick={goto}>
              See results
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

// const Hero = () => {
//   return (
//     <div className={styles.container}>
//       <Container>
//         <div className={styles.fullscreen}>
//           <video
//             className={styles.video}
//             poster="/assets/videos/hero.png"
//             src="/assets/videos/hero.mp4#t=0.1"
//             loop
//             muted
//             autoPlay
//             playsInline
//           ></video>
//         </div>
//         <div className={styles.overlay}>
//           <Image
//             className={styles.logo}
//             src="/assets/images/logo.png"
//             alt="Headstomper"
//             width={914}
//             height={429}
//           />
//           <div className="my-2">
//             <h1>We&apos;re back!</h1>
//             <h4 className="my-1">
//               Scandinavia&apos;s{" "}
//               <span className="text-highlight">GREATEST</span>
//               <br />
//               fighting game tournament
//             </h4>
//             <p className="fw-bold">
//               9th - 11th June 2023
//               <br />
//               Malmö, Sweden
//             </p>
//           </div>
//           <Register size="large" />
//         </div>
//       </Container>
//     </div>
//   );
// };

export default Hero;
