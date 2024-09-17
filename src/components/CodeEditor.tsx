import { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import { themes } from 'prism-react-renderer';
import { IoMdRefresh } from "react-icons/io";

export interface CodeEditorProps {
  startCode: string;
  refresh: boolean;
}

const CodeEditor = ({ startCode, refresh }: CodeEditorProps) => {
  const [runAnimation, setRunAnimation] = useState(false);
  const [code, setCode] = useState(startCode);

  const handleRunAnimation = () => {
    setRunAnimation(prev => !prev); // Toggle to refresh live preview animation
  };

  return (
    <LiveProvider code={code} scope={{ motion }} theme={themes.nightOwl} key={runAnimation ? 'refresh' : 'static'}>

      {/* Full Screen */}
      <div className="fixed bottom-0 left-0 z-30 bg-white w-full hidden md:flex flex-row h-[300px] border-t-2 border-teal-900">
        {/* <h1 className='text-6xl w-full text-black text-center'>Hiiiii</h1> */}
        {/* Live Code Editor */}
        <div className="w-1/2 ">
          <LiveEditor
            className=" p-4 bg-[rgb(5,22,38)] w-full h-full max-h-full overflow-auto"
            onChange={newCode => setCode(newCode)}
          />
          <LiveError className="text-red-500 mt-2" />
        </div>

        {/* Live Preview */}
        <div className="w-1/2 ">
          <div className="w-full max-w-full h-[300px] bg-teal-700 p-4 flex justify-center items-center ">
            <LivePreview key={runAnimation ? 'refresh' : 'static'} />
          </div>
          {refresh && (
            <button
              onClick={handleRunAnimation}
              className="absolute bottom-60 right-8 px-4 py-2 bg-white text-teal-800 rounded-md hover:bg-teal-900 hover:text-white"
            >
              <IoMdRefresh />
            </button>
          )}
        </div>
      </div>



      {/* Smaller Screen */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4 md:mx-6 lg:mx-28 mt-6 md:mt-10 md:hidden">

        {/* Live Code Editor */}
        <div className="flex flex-col items-center justify-center">
          <LiveEditor
            className="border p-4 bg-[rgb(5,22,38)] rounded-md w-full max-w-full md:max-w-xl h-96"
            onChange={newCode => setCode(newCode)}
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
            className={`mt-4 px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600
            ${refresh ? 'relative' : 'hidden'}`}
          >
            Refresh Animation
          </button>
        </div>

      </div>
    </LiveProvider>
  );
};

export default CodeEditor;
