import { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

import { themes } from 'prism-react-renderer';
import { IoMdRefresh } from "react-icons/io";
import { MdFullscreen } from "react-icons/md";
import { MdFullscreenExit } from "react-icons/md";
import { FaRegWindowMinimize } from "react-icons/fa6";
import { PiArrowsOutSimple } from "react-icons/pi";

export interface CodeEditorProps {
  startCode: string;
  refresh: boolean;
}

const CodeEditor = ({ startCode, refresh }: CodeEditorProps) => {
  const [runAnimation, setRunAnimation] = useState(false);
  const [mini, setMini] = useState(false);
  const [full, setFull] = useState(false);

  const [code, setCode] = useState(startCode);

  const getEditorHeight = () => {
    if (full) {
      return `calc(100vh - 2.25rem)`;
    } else if (mini) {
      return "60px";
    } else {
      return "360px";
    }
  };

  const handleRunAnimation = () => {
    setRunAnimation(prev => !prev); // Toggle to refresh live preview animation
  };

  const handleMini = () => {
    setMini(!mini);
    setFull(false);
  };

  const handleFull = () => {
    setFull(!full);
    setMini(false);
  };

  return (
    <LiveProvider code={code} scope={{ motion }} theme={themes.nightOwl} key={runAnimation ? 'refresh' : 'static'}>

      {/* Main container */}
      <div className='hidden md:block relative w-full transition-all duration-500' style={{ height: getEditorHeight() }}>

        {/* Gradient overlay */}
        <div className="absolute inset-x-0 top-0 h-[30px] bg-gradient-to-t from-slate-900 to-transparent z-20" />

        {/* Content container (includes the controls and editor) */}
        <div className="absolute inset-x-0 top-[30px] z-10 h-full">

          {/* Editor controls - Positioned at the top */}
          <div className="flex items-center justify-between h-[30px] bg-gray-800 text-gray-400 p-2 top-[30px]">
            {/* Text */}
            <div className="flex w-full justify-between">
              <div className="flex-1 flex justify-start">
                <p>Code Editor</p>
              </div>
              <div className="flex-1 flex justify-start pl-20">
                <p>Code Preview</p>
              </div>
            </div>

            {/* Icons */}
            <div className="flex space-x-2">
              {mini ?
                (<PiArrowsOutSimple
                  className='text-xl text-white hover:text-teal-400 cursor-pointer'
                  onClick={handleMini}
                />
                )
                :
                (<FaRegWindowMinimize
                  className='text-white hover:text-teal-400 cursor-pointer'
                  onClick={handleMini}
                />
                )}

              {full ?
                (<MdFullscreenExit
                  className='text-xl text-white hover:text-teal-400 cursor-pointer'
                  onClick={handleFull}
                />
                )
                :
                (<MdFullscreen
                  className='text-xl text-white hover:text-teal-400 cursor-pointer'
                  onClick={handleFull}
                />
                )}
            </div>
          </div>

          {/* Full Screen */}
          <div className="flex flex-row w-full h-full">

            {/* Live Code Editor */}
            <div className="w-1/2 h-full">
              <LiveEditor
                className="px-4 pt-4 bg-[rgb(5,22,38)] w-full h-full max-h-full overflow-auto"
                onChange={newCode => setCode(newCode)}
              />
              <LiveError className="text-red-500 mt-2" />
            </div>

            {/* Live Preview */}
            <div className="w-1/2 h-full relative">
              <div className="w-full h-full bg-teal-900 flex justify-center items-center overflow-hidden pb-16">
                <LivePreview key={runAnimation ? 'refresh' : 'static'} />
              </div>
              {refresh && (
                <button
                  onClick={handleRunAnimation}
                  className="absolute top-10 right-10 px-4 py-2 bg-white text-teal-800 rounded-md hover:bg-teal-600 hover:text-white "
                >
                  <IoMdRefresh className='text-xl' />
                </button>
              )}
            </div>
          </div>
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

    </LiveProvider >
  );
};

export default CodeEditor;
