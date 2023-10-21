"use client";
import React, { useEffect, useState, Suspense } from "react";
import Head from "next/head";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Weather from "./components/Weather";
import * as tf from "@tensorflow/tfjs";

const LinearRegressionPage = () => {
  const router = useRouter();

  useEffect(() => {
    const data: { horsepower: number; mpg: number }[] = [
      {
        horsepower: 140,
        mpg: 100,
      },
      {
        horsepower: 160,
        mpg: 25,
      },
      {
        horsepower: 300,
        mpg: 11,
      },
    ];
    const model = tf.sequential();

    // Add a single input layer
    model.add(tf.layers.dense({ inputShape: [1], units: 1, useBias: true }));

    // Add an output layer
    model.add(tf.layers.dense({ units: 1, useBias: true }));

    tf.tidy(() => {
      tf.util.shuffle(data);
      const inputs = data.map((d) => d.horsepower);
      const labels = data.map((d) => d.mpg);

      // Converts the data to tensors
      const inputTensor = tf.tensor2d(inputs, [inputs.length, 1]);
      const labelTensor = tf.tensor2d(labels, [labels.length, 1]);

      // Nomralize the data. It means it like takes the min and max and divides it by the sum divided by something, so that the min and max are between 0 and 1.
      const inputMax = tf.max(inputTensor);
      const inputMin = tf.min(inputTensor);
      const labelMax = tf.max(labelTensor);
      const labelMin = tf.max(labelTensor);

      const normalizedInputs = inputTensor
        .sub(inputMin)
        .div(inputMax.sub(inputMin));
      const normalizedLabels = labelTensor
        .sub(labelMin)
        .div(labelMax.sub(labelMin));

      model.compile({
        optimizer: tf.train.adam(),
        loss: tf.losses.meanSquaredError,
        metrics: ["mse"],
      });

      const batchSize = 32;
      const epochs = 50;

      model
        .fit(inputTensor, labelTensor, {
          batchSize,
          epochs,
          shuffle: true,
        })
        .then((data) => {
          console.log(data);
        });
    });
  }, []);

  return (
    <div className={styles.container}>
      LinearRegression! <Weather />
    </div>
  );
};

export default LinearRegressionPage;
