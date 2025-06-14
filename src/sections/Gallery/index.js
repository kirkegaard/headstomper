import Link from "next/link";

import Container from "@/components/Container";
import Section from "@/components/Section";
import Slider from "@/components/Slider";
import styles from "./index.module.css";

import data2025 from "@/data/gallery-2025.json";
import data2023 from "@/data/gallery-2023.json";
import data2019 from "@/data/gallery-2019.json";

const Gallery = () => {
  return (
    <Section className={styles.container} id="gallery">
      <Container>
        <h1 className="title">Past events</h1>
      </Container>

      <Container>
        <h3>2025</h3>
        <p>
          By <Link href="https://twitter.com/FrejaBorne">Freja Borne</Link>{" "}
          <small>
            <Link href="https://galleri.fotosy.dk/headstomperday1/">
              [Day 1]
            </Link>
          </small>{" "}
          <small>
            <Link href="https://galleri.fotosy.dk/headstomperday2/">
              [Day 2]
            </Link>
          </small>
        </p>
      </Container>
      <Slider folder="/assets/gallery/2025" images={data2025} />

      <Container>
        <h3>2023</h3>
        <p>
          By <Link href="https://twitter.com/FrejaBorne">Freja Borne</Link>{" "}
          <small>
            <Link href="https://galleri.fotosy.dk/headstomper/">
              [Download]
            </Link>
          </small>
        </p>
      </Container>
      <Slider folder="/assets/gallery/2023" images={data2023} />

      <Container>
        <h3>2019</h3>
        <p>By Stephanie Lindgren</p>
      </Container>
      <Slider folder="/assets/gallery/2019" images={data2019} />
    </Section>
  );
};

export default Gallery;
