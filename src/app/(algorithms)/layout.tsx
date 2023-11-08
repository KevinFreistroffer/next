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
      <main>
        <div id="left">{left}</div>
        {children}
        <div id="right">{right}</div>
      </main>
    </div>
  );
};

export default Layout;
