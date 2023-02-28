import styles from "./index.module.css";

const Event = ({ props }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{props.title}</h3>
      <p>
        {props.desc}
        <br />
        <small>Played on: {props.playedOn}</small>
      </p>
    </div>
  );
};

export default Event;
