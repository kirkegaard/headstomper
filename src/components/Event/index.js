import styles from "./index.module.css";

const Event = ({ props }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{props.title}</h3>
      <p className="mb-0">{props.desc}</p>
      {props.playedOn && <small>Played on: {props.playedOn}</small>}
    </div>
  );
};

export default Event;
