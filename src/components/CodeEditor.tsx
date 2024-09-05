import { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import { themes } from 'prism-react-renderer';

const CodeEditor = () => {
  const [runAnimation, setRunAnimation] = useState(false);
  const [code, setCode] = useState(`
<motion.div
  // add animation 
>
  <div className="h-[150px] w-[150px] bg-white rounded-full"></div>
</motion.div>
`);

  const handleRunAnimation = () => {
    setRunAnimation(prev => !prev); // Toggle to refresh live preview animation
  };

  return (
    <LiveProvider code={code.trim()} scope={{ motion }} theme={themes.dracula} key={runAnimation ? 'refresh' : 'static'}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4 md:mx-6 lg:mx-28 mt-6 md:mt-10">

        {/* Live Code Editor */}
        <div className="flex flex-col items-center justify-center">
          <LiveEditor
            className="border p-4 bg-[rgb(40,42,52)] rounded-md w-full max-w-full md:max-w-xl h-96"
            onChange={newCode => setCode(newCode)} // Update state on code change
          />
          <LiveError className="text-red-500 mt-2" />
        </div>

        {/* Live Preview */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-full md:max-w-[400px] h-[300px] bg-teal-700 p-4 flex justify-center items-center rounded-md">
            <LivePreview key={runAnimation ? 'refresh' : 'static'} />
          </div>
          <button
            onClick={handleRunAnimation}
            className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600"
          >
            Refresh Animation
          </button>
        </div>

      </div>
    </LiveProvider>
  );
};

export default CodeEditor;
