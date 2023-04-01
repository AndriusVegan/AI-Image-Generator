"use client";

import fetchSuggestionFromChatGPT from "@/lib/fetchSuggestoinFromChatGPT";
import { useState } from "react";
import useSWR from "swr";

function PromptInput() {
  const [input, setInput] = useState("");
  const {
    data: suggestion,
    isLoading,
    mutate,
    isValidating,
  } = useSWR("/api/suggestion", fetchSuggestionFromChatGPT, {
    revalidateOnFOcus: false,
  });
  // pulls data from our own local API

  return (
    <div className="m-10">
      <form className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10 border rounded-md lg:divide-x ">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 outline-none rounded-md"
        />

        <button
          // dominant button
          type="submit"
          disabled={!input}
          className={`p-4 font-bold rounded-md ${
            input
              ? "bg-violet-500 text-white transition-colors duration-200"
              : "text-gray-300 cursor-not-allowed"
          } font-bold`}
        >
          Generate
        </button>
        <button
          type="button"
          className="p-4 mx-2 bg-violet-400 text-white transition-colors duration-200 rounded-md font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          Use Suggestion
        </button>
        <button
          type="button"
          className="p-4 bg-white text-green-400 border-none transition-colors duration-200 rounded-b-md md:rounded-r-md md:rounded-bl-none font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          New Suggestion
        </button>
      </form>
    </div>
  );
}

export default PromptInput;
