import { ReactNode } from "react";
import styles from "./dashboard.module.css";

type Props = {
  children: ReactNode;
  kevin: ReactNode;
  freistroffer: ReactNode;
};

const Layout = ({ children, kevin, freistroffer }: Props) => {
  return (
    <div
      className={styles.dashboard}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div style={{ display: "flex", width: "100%" }}>
        <div className={styles.left} style={{ flex: 1 }}>
          {kevin}
        </div>
        <div className={styles.right} style={{ flex: 1 }}>
          {freistroffer}
        </div>
      </div>
      <div className={styles.bottom}>{children}</div>
    </div>
  );
};

export default Layout;
