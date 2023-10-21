import { ReactNode } from "react";
import styles from "./dashboard.module.css";

type Props = {
  children: ReactNode;
  left: ReactNode;
  right: ReactNode;
  feed: ReactNode;
};

const Layout = ({ children, left, right, feed }: Props) => {
  return (
    <div
      className={styles.dashboard}
      style={{ width: "100%", display: "flex", flexDirection: "row" }}
    >
      <div className={styles["left-right-bottom-container"]}>
        {/* Left Right Bottom */}
        <div>
          <div className="flex">
            <div className={styles.left} style={{ flex: 1 }}>
              {left}
            </div>
            <div className={styles.right} style={{ flex: 1 }}>
              {right}
            </div>
          </div>
        </div>
        <div className={styles.bottom}>{children}</div>
      </div>
      {/* Feed */}
      <div className={styles["feed-container"]}>
        <div
          className={styles.feed}
          style={{ display: "flex", flexDirection: "column" }}
        >
          {feed}
        </div>
      </div>
    </div>
  );
};

export default Layout;
