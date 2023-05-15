import styles from "./index.module.css";

const Event = (props) => {
  return (
    <div className={styles.container}>
      {props.url ? (
        <h3 className={styles.title}>
          <a href={props.url}>{props.title}</a>
        </h3>
      ) : (
        <h3 className={styles.title}>{props.title}</h3>
      )}
      {props.desc && <p className="mb-0">{props.desc}</p>}
      {props.playedOn && <small>Played on: {props.playedOn}</small>}
    </div>
  );
};

export default Event;
