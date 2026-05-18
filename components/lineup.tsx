import Image from "next/image";
import { Section } from "./section";
import styles from "./lineup.module.css";

const games = [
  {
    name: "Guilty Gear: Strive",
    sub: "AWT 26-27 Gold Event",
    image: "/assets/games/guilty-gear.jpg",
  },
  {
    name: "Tekken 8",
    sub: "TWT 2026 Challenger Event",
    image: "/assets/games/tekken.jpg",
  },
  {
    name: "Granblue Fantasy Versus: Rising",
    sub: "GBVS World Tour 4 Star Event",
    image: "/assets/games/granblue.jpg",
  },
  {
    name: "Street Fighter 6",
    image: "/assets/games/streetfighter6.png",
  },
];

export function Lineup() {
  return (
    <Section title="Lineup">
      <div className={styles.grid}>
        {games.map((game) => (
          <div key={game.name} className={styles.card}>
            {game.image ? (
              <Image
                src={game.image}
                alt={game.name}
                fill
                loading="eager"
                sizes="(max-width: 768px) 100vw, 540px"
                className={styles.image}
              />
            ) : (
              <div className={styles.placeholder}>
                <span>?</span>
              </div>
            )}
            <div className={styles.overlay} />
            <div className={styles.info}>
              <p className={styles.name}>{game.name}</p>
              {game.sub && <p className={styles.sub}>{game.sub}</p>}
            </div>
          </div>
        ))}
      </div>
      <h3 className={styles.more}>More coming soon!</h3>
    </Section>
  );
}
