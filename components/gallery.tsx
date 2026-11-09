"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import styles from "./gallery.module.css";

const quality = 60;

interface Props {
  photos: string[];
  basePath: string;
}

export function Gallery({ photos, basePath }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);

  const open = (i: number) => {
    setIndex(i);
    dialog.current?.showModal();
  };

  const close = () => {
    dialog.current?.close();
    setIndex(null);
  };

  const step = useCallback(
    (dir: number) => {
      setIndex((i) => {
        if (i === null) return i;
        return (i + dir + photos.length) % photos.length;
      });
    },
    [photos.length],
  );

  useEffect(() => {
    const key = (event: KeyboardEvent) => {
      if (index === null) return;
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [index, step]);

  return (
    <>
      <div className={styles.grid}>
        {photos.map((photo, i) => (
          <button
            key={photo}
            type="button"
            className={styles.tile}
            onClick={() => open(i)}
            aria-label={`View photo ${i + 1}`}
          >
            <Image
              src={`${basePath}/${photo}`}
              alt=""
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1100px) 33vw, 300px"
              quality={quality}
              className={styles.image}
            />
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className={styles.dialog}
        onClose={() => setIndex(null)}
      >
        {index !== null && (
          <>
            <button
              type="button"
              className={styles.close}
              onClick={close}
              aria-label="Close gallery"
            >
              &times;
            </button>
            <button
              type="button"
              className={styles.prev}
              onClick={() => step(-1)}
              aria-label="Previous photo"
            >
              &lsaquo;
            </button>
            <div className={styles.frame}>
              <Image
                src={`${basePath}/${photos[index]}`}
                alt=""
                fill
                sizes="100vw"
                quality={75}
                className={styles.full}
                priority
              />
            </div>
            <button
              type="button"
              className={styles.next}
              onClick={() => step(1)}
              aria-label="Next photo"
            >
              &rsaquo;
            </button>
            <span className={styles.count}>
              {index + 1} / {photos.length}
            </span>
            <button
              type="button"
              className={styles.backdrop}
              onClick={close}
              aria-label="Close gallery"
            />
          </>
        )}
      </dialog>
    </>
  );
}
