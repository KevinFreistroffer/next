"use client";
import React, { useEffect, useState, Suspense } from "react";
import Head from "next/head";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Weather from "./components/Weather";

const LinearRegressionPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      LinearRegression! <Weather />
    </div>
  );
};

export default LinearRegressionPage;
