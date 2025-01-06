import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import SideNav from "../../components/SideNav";
import SelectDropdown from "../../components/SelectDropDown";
import PageTransitionOverlay from "../../components/PageTransitionOverlay";
import CodeSnippet from "../../components/CodeSnippet";
import CodeEditorMemo from "../../components/CodeEditMemo";
import {
  basicVariant,
  starterVariant,
} from "../../codeSnippets/variantSnippets";
import { IoMdRefresh } from "react-icons/io";

const Variants = () => {
  const [selectedOption, setSelectedOption] = useState("gestures");
  const [animateKey, setAnimateKey] = useState(0);
  const navigate = useNavigate();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newOption = e.target.value;
    setSelectedOption(newOption);
    navigate(`/learn/${newOption}`);
  };

  const handleRefresh = () => {
    setAnimateKey((prevKey) => prevKey + 1);
  };

  const variants = {
    start: { rotate: 180 },
    hoverState: { borderRadius: "75px" },
    tapState: { backgroundColor: "#ffd700" },
  };

  return (
    <>
      <div className="flex w-full">
        <PageTransitionOverlay />

        <div className="hidden 2xl:block">
          <SideNav />
        </div>

        <div className="fixed bottom-0 z-30 hidden md:flex w-full">
          <CodeEditorMemo
            startCode={starterVariant.trim()}
            refresh={true}
            noInline={true}
          />
        </div>

        <div className="mx-auto w-full max-w-screen-xl md:mb-[50vh]">
          <SelectDropdown
            selectedOption={selectedOption}
            onSelectChange={handleSelectChange}
          />

          <h1 className="text-teal-400 text-center mt-10 2xl:mt-28 text-5xl font-bold">
            Variants
          </h1>

          <div className="mx-6 sm:mx-10 lg:mx-36 mt-10">
            <p className="text-white mb-4 text-lg px-4 sm:px-8">
              When building animations in Framer Motion, you often need to
              transition interface elements between different visual states. A
              button might change color when pressed or become grayed out when
              disabled. Variants allow you to assign recognizable names to these
              states, such as "pressed" or "disabled," making animations more
              manageable and reusable.
            </p>
            <p className="text-white mb-4 text-lg px-4 sm:px-8">
              Variants also facilitate automatic animation propagation, meaning
              that child elements will animate in sync with the parent, and they
              allow for more complex animation orchestration.
            </p>
            <p className="text-white mb-4 text-lg px-4 sm:px-8">
              Variants are a way to define different animation states for an
              element. Instead of passing animation properties directly in
              animate, whileHover, or whileTap, you can assign names to these
              states and reference them throughout the component.
            </p>

            <div className="mt-10 mx-4 sm:mx-10 lg:mx-28">
              {/* Code snippet column */}
              <div className="flex items-center justify-center mb-10">
                <div className="w-full">
                  <CodeSnippet code={basicVariant} />
                </div>
              </div>

              {/* Animation and button column */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative w-full max-w-full md:max-w-[400px] h-[300px] bg-teal-900 p-4 flex justify-center items-center rounded-md">
                  <motion.div
                    key={animateKey}
                    className="relative h-[150px] w-[150px] rounded-lg bg-white cursor-pointer"
                    variants={variants}
                    animate="start"
                    whileHover="hoverState"
                    whileTap="tapState"
                  ></motion.div>

                  {/* Refresh Button */}
                  <button
                    onClick={handleRefresh}
                    className="absolute top-2 right-2 px-4 py-2 text-xl bg-white text-teal-800 rounded-md hover:bg-teal-600 hover:text-white"
                  >
                    <IoMdRefresh />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Variants;
