import Image from "next/image";
import styles from "./lineup.module.css";
import { Section } from "./section";

const games = [
  {
    name: "2XKO",
    image: "/assets/games/2xko.jpg",
  },
  {
    name: "Avatar Legends",
    image: "/assets/games/avatar-legends-the-fighting-game.jpg",
  },
  {
    name: "Guilty Gear Xrd REV 2",
    image: "/assets/games/guilty-gear-xrd-rev-2.jpg",
  },
  {
    name: "BlazBlue: Central Fiction",
    image: "/assets/games/blazblue-central-fiction.jpg",
  },
  {
    name: "Granblue Fantasy: Versus",
    image: "/assets/games/granblue-fantasy-versus.jpg",
  },
  {
    name: "Rivals of Aether II",
    image: "/assets/games/rivals-of-aether-ii.jpg",
  },
];

export function SideEvents() {
  return (
    <Section title="Side events">
      <div className={`${styles.grid} ${styles.side}`}>
        {games.map((game) => (
          <div key={game.name} className={styles.card}>
            <Image
              src={game.image}
              alt={game.name}
              fill
              sizes="(max-width: 768px) 100vw, 540px"
              className={styles.image}
            />
            <div className={styles.overlay} />
            <div className={styles.info}>
              <p className={styles.name}>{game.name}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
