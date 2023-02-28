import Container from "@/components/Container";
import Section from "@/components/Section";
import Slider from "@/components/Slider";
import styles from "./index.module.css";

import data from "@/data/gallery.json";

const Gallery = () => {
  return (
    <Section className={styles.container}>
      <Container>
        <h1 className="title">Past events</h1>
      </Container>
      <Slider images={data.images} />
    </Section>
  );
};

export default Gallery;
