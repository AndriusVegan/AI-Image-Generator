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
    // generates new suggestion
    isValidating,
  } = useSWR("/api/suggestion", fetchSuggestionFromChatGPT, {
    revalidateOnFocus: false,
  });
  // pulls data from our own local API
  // console.log(suggestion);
  const loading = isLoading || isValidating;

  return (
    <div className="m-10">
      <form className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10 border rounded-md lg:divide-x ">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            (loading && "ChatGPT is thinking of a suggestion...") ||
            suggestion ||
            "Enter a prompt.."
          }
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
          onClick={mutate}
        >
          New Suggestion
        </button>
      </form>

      {input && (
        <p className="italic pt-2 pl-2 font-light">
          Suggestion:{""}
          <span className="test-violet-500">
            {loading ? "ChatGPT is thinking..." : suggestion}
          </span>
        </p>
      )}
    </div>
  );
}

export default PromptInput;
