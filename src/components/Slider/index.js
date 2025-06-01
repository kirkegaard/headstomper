import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

import Container from "@/components/Container";
import Button from "@/components/Button";

import styles from "./index.module.css";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Slider = ({ folder = "./", images }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const ref = setInterval(() => setPage([page + 1, 1]), 4500);
    return () => clearInterval(ref);
  }, [page]);

  return (
    <div>
      <div className={styles.wrapper}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            loading="lazy"
            className={styles.image}
            width="1280"
            height="853"
            key={page}
            src={`${folder}/${images[imageIndex]}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>
      </div>
      <Container>
        <div className={styles.controls}>
          <Button size="small" onClick={() => setPage([page - 1, -1])}>
            Previous
          </Button>
          <div className={styles.indicator}>
            {imageIndex + 1} / {images.length}
          </div>
          <Button size="small" onClick={() => setPage([page + 1, 1])}>
            Next
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Slider;
