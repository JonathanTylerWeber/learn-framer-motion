import React from "react";
import { copyToClipboard } from "../utils";

interface CodeSnippetProps {
  code: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code }) => {
  const handleCopy = () => {
    copyToClipboard(code);
  };

  return (
    <div className="relative">
      <pre className="bg-[rgb(40,42,52)] p-4 rounded-md text-white whitespace-pre-wrap break-words">
        {code.trim()}
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-teal-500 text-white px-2 py-1 rounded-md hover:bg-teal-600"
      >
        Copy
      </button>
    </div>
  );
};

export default CodeSnippet;
