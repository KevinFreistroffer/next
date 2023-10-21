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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isTraining, setIsTraining] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const data = getData();
      const model = createModel();
      if (data.length) {
        const tensorData = convertToTensor(data);
        const { inputs, labels } = tensorData;
        await trainModel(model, inputs, labels);
        setIsLoading(false);
        setIsTraining(true);
        testModel(model, data, tensorData);
        setIsTraining(false);
      }
      setIsLoading(false); // set loading to false after data is fetched
    })();
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div>Loading...</div> // show loading spinner while data is being fetched
      ) : (
        <>
          <div>LinearRegression!</div>
          <div>
            {isTraining ? (
              <div>Training...</div>
            ) : (
              <div>Training complete!</div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default LinearRegressionPage;
