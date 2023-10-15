"use client";
import React from "react";
import sleep from "sleep-promise";

interface IData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = (): Promise<IData> =>
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then(sleep(5000))
    .then((data) => data);

const DataFetcher = () => {
  const data: any = fetchData();
  return <div>{data.title}</div>;
};

const Weather = () => {
  const resource = fetchData();

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <DataFetcher />
    </React.Suspense>
  );
};

export default Weather;
