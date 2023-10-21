"use client";
import React, { useEffect, useState, Suspense } from "react";
import Head from "next/head";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import * as tf from "@tensorflow/tfjs";
import tfvis from "@tensorflow/tfjs-vis";
import {
  createModel,
  getData,
  convertToTensor,
  trainModel,
  testModel,
} from "./services";
const LinearRegressionPage = () => {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const data = getData();
      const model = createModel();
      if (data.length) {
        const tensorData = convertToTensor(data);
        const { inputs, labels } = tensorData;
        await trainModel(model, inputs, labels);
        testModel(model, data, tensorData);
      }
    })();
  }, []);

  return (
    <div className={styles.container}>
      LinearRegression!
      <div>
        <button>Train Model</button>
      </div>
    </div>
  );
};

export default LinearRegressionPage;
