"use client";
import React from "react";
import { ReactNode } from "react";
import styles from "./dashboard.module.css";

const Dashboard = ({
  kevin,
  freistroffer,
  children,
}: {
  kevin: ReactNode;
  freistroffer: ReactNode;
  children: ReactNode;
}) => {
  return (
    <div>
      <h2>The rest of the content</h2>
      <h3>Such as a sub heading</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
        accusantium aliquid eveniet inventore dolore at, voluptates perspiciatis
        minus beatae aspernatur doloremque tempora nemo ipsa cupiditate iure ab
        repellat nisi recusandae.
      </p>
    </div>
  );
};

export default Dashboard;
