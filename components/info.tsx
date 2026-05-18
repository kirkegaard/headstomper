import { Section } from "./section";
import styles from "./info.module.css";

export function Info() {
  return (
    <Section title="Info">
      <div className={styles.grid}>
        <div>
          <h3 className={styles.subtitle}>Venue</h3>
          <p className={styles.text}>
            Again this year the event will be held at Quality Hotel View. The
            hotel is fully air conditioned, features multiple stages and even a
            bar!
          </p>
          {/* <p className={styles.text}> */}
          {/*   Use the discount code: <code className={styles.code}>Headstomper2025</code> */}
          {/* </p> */}
          <p className={styles.text}>
            Rooms are limited and it is a busy weekend so book now! Remember to
            let them know that you&rsquo;re there for Headstomper!
          </p>
          <h4 className={styles.detail}>Address</h4>
          <address className={styles.address}>
            Hyllie stationsv&auml;g 29
            <br />
            215 32
            <br />
            Malm&ouml;, Sweden
            <br />
            <br />
            <a href="tel:+46040374100">(+460) 40 37 41 00</a>
            <br />
            <a href="mailto:q.view@choice.se">q.view@choice.se</a>
          </address>
        </div>
        <div>
          <h3 className={styles.subtitle}>Travel</h3>
          <p className={styles.text}>
            Traveling to the venue couldn&rsquo;t be easier with Copenhagen
            Airport just one stop away! All flying guests are recommended to use
            this airport as it&rsquo;s the closest.
          </p>
          <h4 className={styles.detail}>From Copenhagen Airport</h4>
          <p className={styles.text}>
            Take the train from Copenhagen Airport towards Malm&ouml; Sweden and
            get off at the first stop, Hyllie station. The venue will be located
            right outside the train station.
          </p>
          <h4 className={styles.detail}>From Malm&ouml; Airport</h4>
          <p className={styles.text}>
            Take the train from Malm&ouml; towards Copenhagen. Get off at Hyllie
            station. However Copenhagen is much closer!
          </p>
        </div>
      </div>
    </Section>
  );
}
