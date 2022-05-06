import About from "../components/About";
import Footer from "../components/Footer";
import Head from "next/head";
import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [binaryText, setBinaryText] = useState("");
  const [resultText, setResultText] = useState("");
  const [success, setSuccess] = useState(true);
  const [isCopied, setIsCopied] = useState(false);

  const CheckBinary = (str: string) => {
    const binaryRegex = /^[0-1]{1,}$/g;
    return binaryRegex.test(str);
  };

  const BinConvert = () => {
    const result = CheckBinary(binaryText);
    if (!result) {
      setSuccess(false);
    } else {
      const decimal = parseInt(binaryText, 2);
      setResultText(decimal.toString());
      setSuccess(true);
    }
  };

  const CopyToClipboard = () => {
    navigator.clipboard.writeText(resultText);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 4000);
  };

  return (
    <>
      <Head>
        <title>binary to decimal</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex h-screen justify-center items-center flex-col">
        <div className="m-14">
          <h1 className="font-qs text-gray-800 font-semibold text-5xl text-center">
            Binary to Decimal converter
          </h1>
        </div>
        <div className="flex flex-col gap-3 w-80">
          <div className="">
            <input
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  BinConvert;
                }
              }}
              type="search"
              id="binary_text"
              className={
                "outline-0 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 font-qs text-lg " +
                (success ? "" : "border-red-500 focus:border-red-500")
              }
              placeholder="Enter 0 or 1"
              value={binaryText}
              onChange={(e) => setBinaryText(e.target.value)}
              required
            ></input>
          </div>
          <button
            onClick={BinConvert}
            className="w-full text-white bg-gradient-to-br from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 focus:outline-none font-qs"
          >
            Convert
          </button>
          <div className="flex flex-col justify-end items-end gap-1">
            <textarea
              readOnly
              id="message"
              value={resultText}
              onChange={(e) => setResultText(e.target.value)}
              rows={3}
              className="block outline-0 p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-qs mb-2"
              placeholder="Result here"
            />
            <button
              onClick={CopyToClipboard}
              type="button"
              className="border border-gray-300 hover:border-gray-500 hover:text-white focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-lg p-2.5 text-center flex justify-center items-center gap-1"
            >
              {isCopied ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                  />
                </svg>
              )}
              <span className="font-qs text-gray-800 text-base">
                {isCopied ? "Copied" : "Copy to clipboard"}
              </span>
            </button>
          </div>
        </div>
      </div>
      <About />
      <Footer />
    </>
  );
};

export default Home;
