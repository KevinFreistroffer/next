"use client";
import React, { useEffect, useState } from "react";
import OpenAI from "openai-api";
import { ChatGPTAPI } from "chatgpt";

const GPT4 = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  useEffect(() => {
    (async () => {
      const api = new ChatGPTAPI({
        apiKey: process.env.OPENAI_API_KEY || "",
      });

      console.log(api.sendMessage);

      // const res = await api.sendMessage("Hello World!");
      // console.log(res.text);
    })();
  }, []);

  return (
    <div>
      <h1>GPT-4</h1>
      <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      {/* <button onClick={generateResponse}>Generate Response</button> */}
      <p>{response}</p>
    </div>
  );
};

export default GPT4;
