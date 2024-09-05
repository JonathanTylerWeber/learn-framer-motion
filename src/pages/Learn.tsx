import { useState } from "react";
import { motion } from "framer-motion";
import CodeEditorMemo from "../components/CodeEditMemo";

const codeSnippet = `
<motion.div
  className="h-[150px] w-[150px] bg-white rounded-full"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 2 }}
/>
`;

const Learn = () => {
  const [animateKey, setAnimateKey] = useState(0);

  const handleRefresh = () => {
    setAnimateKey(prevKey => prevKey + 1); // Only update the key for this component
  };

  return (
    <>
      <h1 className="text-teal-400 text-center mt-4 text-5xl font-bold">
        Basics
      </h1>
      <p className="text-white mb-2">
        This animation fades in the circle from 0 to 1 opacity over 2 seconds. Clicking the button below refreshes the animation by changing the key.
      </p>
      <div className="grid grid-cols-2 gap-4 mt-20">

        {/* Code snippet column */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-xl">
            <pre className="bg-gray-800 p-4 rounded-md text-white">
              {codeSnippet.trim()}
            </pre>
          </div>
        </div>

        {/* Animation and button column */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-[400px] h-[300px] flex justify-center items-center bg-teal-700 rounded-md">
            <motion.div
              key={animateKey} // This key change should only affect the Learn component
              className="h-[150px] w-[150px] bg-white rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            />
          </div>
          <button
            onClick={handleRefresh}
            className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600"
          >
            Refresh Animation
          </button>
        </div>

      </div>

      <div className="my-20">
        <CodeEditorMemo />
      </div>
    </>
  );
};

export default Learn;
