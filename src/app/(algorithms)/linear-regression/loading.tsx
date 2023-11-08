import { FC } from "react";
import styles from "./css/loading.module.css";

const Loading = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className="loading__spinner">LOADING ...</div>
    </div>
  );
};

export default Loading;
