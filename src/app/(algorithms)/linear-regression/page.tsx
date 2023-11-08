"use client";
import React, { useEffect, useState, Suspense } from "react";
import Head from "next/head";
import styles from "./css/page.module.css";
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
import Papa from "papaparse";
import { flatten } from "lodash";

interface ICSVData {
  headers: string[];
  values: string[][];
}

const LinearRegressionPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isTraining, setIsTraining] = useState<boolean>(false);
  const [isPredicting, setIsPredicting] = useState<boolean>(false);
  const [predictionComplete, setPredictionComplete] = useState<boolean>(false);
  const [headers, setHeaders] = useState<string[]>([]);
  const [values, setValues] = useState<string[][]>([]);
  const [file, setFile] = useState<File>();
  const [csvValues, setCSVValues] = useState([]);
  const [csvHeaders, setCSVHeaders] = useState<string[]>([]);
  const [csvRows, setCSVRows] = useState<string[][]>([]);

  useEffect(() => {
    if (csvHeaders.length && csvRows.length) {
      (async () => {
        const model = createModel();
        const tensorData = convertToTensor(
          csvRows.map((v, index) => ({
            horsepower: parseInt(v[0]),
            mpg: parseInt(v[1]),
          }))
        );
        const { inputs, labels } = tensorData;
        setIsTraining(true);
        await trainModel(model, inputs, labels);
        setIsPredicting(true);
        testModel(model, csvRows, tensorData);
        setPredictionComplete(true);
      })();
    }
  }, [csvHeaders, csvRows]);

  console.log(csvHeaders, csvRows);

  useEffect(() => {
    if (isLoading) {
      setIsTraining(false);
      setIsPredicting(false);
    }

    if (isTraining) {
      setIsLoading(false);
      setIsPredicting(false);
    }

    if (isPredicting) {
      setIsLoading(false);
      setIsTraining(false);
      setIsPredicting(false);
    }

    if (predictionComplete) {
      setIsLoading(false);
      setIsTraining(false);
      setIsPredicting(false);
    }
  }, [isLoading, isTraining, isPredicting, predictionComplete]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      const parsed = Papa.parse(e.target.files[0], {
        complete: async (arg: { data: string[][] }) => {
          console.log(arg.data);
          console.log("setting data", arg.data[0], arg.data.slice(1));

          setHeaders((state) => {
            return [...arg.data[0]];
          });
          setValues((state) => [...arg.data.slice(1)]);

          const model = createModel();
          console.log(flatten(arg.data.slice(1)));

          const tensorData = convertToTensor(
            arg.data.slice(1).map((v, index) => ({
              horsepower: parseInt(v[0]),
              mpg: parseInt(v[1]),
            }))
          );
          const { inputs, labels } = tensorData;
          setIsTraining(true);
          await trainModel(model, inputs, labels);
          setIsPredicting(true);
          testModel(model, csvRows, tensorData);
          setPredictionComplete(true);
        },
      });
      console.log(parsed);
    }
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();

    // if (file) {
    //   fileReader.onload = function (event) {
    //     if (event.target?.result) {
    //       const text = event.target.result;
    //       console.log(text);
    //     }
    //   };

    //   fileReader.readAsText(file);
    // }
  };

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div>Loading...</div> // show loading spinner while data is being fetched
      ) : (
        <>
          <div>LinearRegression!</div>
          <div>
            {isTraining ? <div>Training...</div> : <></>}
            {isPredicting ? <div>Predicting...</div> : <></>}
            {predictionComplete ? <div>Prediction complete!</div> : <></>}
            <form>
              <input
                type={"file"}
                id={"csvFileInput"}
                accept={".csv"}
                onChange={handleOnChange}
              />

              <button
                onClick={(e) => {
                  handleOnSubmit(e);
                }}
                disabled={!file}
              >
                IMPORT CSV
              </button>
            </form>
            <div></div>
          </div>
        </>
      )}
    </div>
  );
};

export default LinearRegressionPage;
