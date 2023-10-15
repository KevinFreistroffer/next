"use client";
import { useState } from "react";
import styles from "./layout.module.css";

const Layout = ({
  children,
  left,
  right,
}: {
  children: React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
}) => {
  const [pageClicks, setPageClicks] = useState(0);
  return (
    <div className={styles.container}>
      <h1>Algorithms</h1>
      <main>
        <div>{left}</div>
        {children}
        <div>{right}</div>
      </main>
    </div>
  );
};

export default Layout;
