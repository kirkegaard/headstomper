import {
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePhone,
} from "react-icons/hi2";
import { REGISTER_URL } from "@/lib/constants";
import { Button } from "./button";
import { Section } from "./section";
import styles from "./info.module.css";

export function Info() {
  return (
    <Section title="Info">
      <div className={styles.grid}>
        <div>
          <h3 className={styles.subtitle}>Venue</h3>
          <p className={styles.text}>
            Again this year the event will be held at Quality Hotel View - easy
            to access, just one train stop from Copenhagen Airport. Rooms are
            limited and it is a busy weekend so book now! Remember to let them
            know that you&rsquo;re there for Headstomper!
          </p>
          <ul className={styles.features}>
            <li>Accommodation deals at Quality Hotel View</li>
            <li>Air conditioning!</li>
            <li>Hotel bar</li>
            <li>Multiple stages and streams for the main lineup</li>
            <li>Side stages and streams for side events</li>
            <li>Plenty of stations for casuals</li>
            <li>
              <b>Free ice cream!</b>
            </li>
          </ul>
          <address className={styles.contact}>
            <a
              href="https://maps.google.com/?q=Quality+Hotel+View,+Hyllie+stationsväg+29,+215+32+Malmö,+Sweden"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.row}
            >
              <HiOutlineMapPin className={styles.icon} />
              <span>Hyllie stationsv&auml;g 29, 215 32 Malm&ouml;, Sweden</span>
            </a>
            <a href="tel:+46040374100" className={styles.row}>
              <HiOutlinePhone className={styles.icon} />
              <span>(+460) 40 37 41 00</span>
            </a>
            <a href="mailto:q.view@choice.se" className={styles.row}>
              <HiOutlineEnvelope className={styles.icon} />
              <span>q.view@choice.se</span>
            </a>
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
        <div>
          <h3 className={styles.subtitle}>Pricing</h3>
          <ul className={styles.prices}>
            <li className={styles.price}>
              <span className={styles.label}>
                <s className={styles.sold}>Super Early Bird</s>
                <span className={styles.note}>Sold out</span>
              </span>
              <span className={styles.amount}>50 &euro;</span>
            </li>
            <li className={styles.price}>
              <span className={styles.label}>
                Early Bird
                <span className={styles.note}>Ends 18 June</span>
              </span>
              <span className={styles.amount}>55 &euro;</span>
            </li>
            <li className={styles.price}>
              <span className={styles.label}>
                Regular Pass
                <span className={styles.note}>Ends 30 September</span>
              </span>
              <span className={styles.amount}>65 &euro;</span>
            </li>
            <li className={styles.price}>
              <span className={styles.label}>
                Late Pass
                <span className={styles.note}>Ends 31 October</span>
              </span>
              <span className={styles.amount}>75 &euro;</span>
            </li>
            <li className={styles.price}>
              <span className={styles.label}>
                Tournament Entry
                <span className={styles.note}>Per main game</span>
              </span>
              <span className={styles.amount}>10 &euro;</span>
            </li>
          </ul>
          <Button href={REGISTER_URL} target="_blank" rel="noreferrer noopener">
            Register now
          </Button>
        </div>
      </div>
    </Section>
  );
}
