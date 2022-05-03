import Head from "next/head";
import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("result here");

  const BinConvert = () => {
    const dec = parseInt(input, 2);
    setResult(dec.toString());
  };

  return (
    <>
      <Head>
        <title>bin to dec</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex h-screen w-screen justify-center items-center">
        <div className="flex flex-col gap-3">
          <input
            type="text"
            id="input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter 0 or 1"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          ></input>
          <button
            onClick={BinConvert}
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 font-qs"
          >
            Convert
          </button>
          <div className="flex justify-center">
            <p>{result}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
