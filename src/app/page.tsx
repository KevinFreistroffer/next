"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Pinecone } from "@pinecone-database/pinecone";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    (async () => {
      console.log("Hello from the client!");

      const pinecone = new Pinecone({
        apiKey: "f219eb17-5f89-4219-b7ec-96c6aa920964",
        environment: "gcp-starter",
      });
      const index = pinecone.Index("index1");
      console.log(index);
    })();
  }, []);
  return (
    <div className={styles.home}>
      <div>
        <h1>Welcome!!!!!</h1>
      </div>
    </div>
  );
}
