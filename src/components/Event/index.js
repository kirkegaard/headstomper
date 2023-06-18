import { useState } from "react";
import Link from "next/link";
import cx from "classnames";
import styles from "./index.module.css";

const Event = (props) => {
  const [more, setMore] = useState(false);
  return (
    <div className={styles.container}>
      {props.url ? (
        <h3 className={styles.title}>
          <a href={props.url}>{props.title}</a>
        </h3>
      ) : (
        <h3 className={styles.title}>{props.title}</h3>
      )}

      {props.results ? (
        <div className="my-1">
          <h5>Results:</h5>
          <ul className={styles.results}>
            {props.results.map((player, index) => (
              <li
                key={index}
                className={cx(styles.player, {
                  [styles.hide]: index >= 3 && !more,
                })}
              >
                {player}
              </li>
            ))}
          </ul>
          <small className="text-link" onClick={() => setMore(!more)}>
            {more ? "Show less" : "Show more"}
          </small>
        </div>
      ) : (
        <>
          {props.desc && <p className="mb-0">{props.desc}</p>}
          {props.playedOn && <small>Played on: {props.playedOn}</small>}
        </>
      )}

      {props.streams && (
        <>
          <h5>Streams:</h5>
          <ul className="list-unstyled">
            {props.streams.map(({ title, url }, index) => (
              <li key={index}>
                <Link href={url}>{title}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Event;
