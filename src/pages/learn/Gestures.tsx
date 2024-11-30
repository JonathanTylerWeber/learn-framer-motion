import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import SideNav from "../../components/SideNav";
import SelectDropdown from "../../components/SelectDropDown";
import PageTransitionOverlay from "../../components/PageTransitionOverlay";
import CodeSnippet from "../../components/CodeSnippet";
import {
  gestureCode,
  starterClick,
  whileDragCode,
  whileFocusCode,
  whileHoverCode,
  whileTapCode,
} from "../../codeSnippets";
import CodeEditorMemo from "../../components/CodeEditMemo";

const Gestures = () => {
  const [selectedOption, setSelectedOption] = useState("gestures");
  const navigate = useNavigate();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newOption = e.target.value;
    setSelectedOption(newOption);
    navigate(`/learn/${newOption}`);
  };

  return (
    <>
      <div className="flex w-full">
        <PageTransitionOverlay />

        <div className="hidden 2xl:block">
          <SideNav />
        </div>

        <div className="fixed bottom-0 z-30 hidden md:flex w-full">
          <CodeEditorMemo startCode={starterClick.trim()} refresh={true} />
        </div>

        <div className="mx-auto w-full max-w-screen-xl md:mb-[50vh]">
          <SelectDropdown
            selectedOption={selectedOption}
            onSelectChange={handleSelectChange}
          />

          <h1 className="text-teal-400 text-center mt-10 2xl:mt-28 text-5xl font-bold">
            Gestures
          </h1>

          <div className="mx-6 sm:mx-10 lg:mx-36 mt-10">
            <p className="text-white mb-4 text-lg px-4 sm:px-8">
              Gestures are a key part of interactive UIs, allowing users to
              interact with elements using touch or mouse inputs. Framer Motion
              offers powerful gesture handling capabilities to make these
              interactions smooth and intuitive. In this section, you'll learn
              how to implement and animate gestures using the{" "}
              <code className="text-lime-200">'&lt;motion&gt;'</code> component
              from Framer Motion.
              <br />
              <br />
              Here's a brief overview of how gestures work with Framer Motion:
            </p>
            <ul className="list-disc list-inside mt-2 px-4 sm:px-8 my-6 text-white">
              <li>
                <strong>Gestures:</strong> Framer Motion provides gesture
                handlers like{" "}
                <code className="text-lime-200">`whileHover`</code>,{" "}
                <code className="text-lime-200">`whileTap`</code>,{" "}
                <code className="text-lime-200">`whileFocus`</code>, and{" "}
                <code className="text-lime-200">`whileDrag`</code> to create
                interactive animations based on user input.
              </li>
              <li>
                <strong>Initial State:</strong> Define the initial state of the
                element before any gestures are applied, such as scale, opacity,
                or position.
              </li>
              <li>
                <strong>Animate State:</strong> Set the desired end state for
                the element when a gesture is detected, such as scaling up,
                changing color, or moving.
              </li>
              <li>
                <strong>Transition:</strong> Control the timing and easing of
                the gesture-based animation to make the interaction feel natural
                and responsive.
              </li>
            </ul>
            <p className="text-white mb-4 text-lg px-4 sm:px-8">
              By using gestures in Framer Motion, you can enhance the user
              experience with dynamic and interactive elements. For example, you
              can make buttons grow when hovered over or animate elements as
              users drag them across the screen. Experiment with different
              gesture handlers and animations to see how they can be used to
              create engaging interactions.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10 mx-4 sm:mx-10 lg:mx-28">
              {/* Code snippet column */}
              <div className="flex items-center justify-center">
                <div className="w-full">
                  <CodeSnippet code={gestureCode} />
                </div>
              </div>

              {/* Animation and button column */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-full max-w-full md:max-w-[400px] h-[300px] bg-teal-900 p-4 flex justify-center items-center rounded-md">
                  <motion.div
                    className="w-48 h-12 bg-white text-black flex items-center justify-center rounded-full cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Click Me
                  </motion.div>
                </div>
              </div>
            </div>

            <p className="text-white mb-4 mt-8 text-lg px-4 sm:px-8">
              In this example, we’re using{" "}
              <code className="text-lime-200">'&lt;motion.div&gt;'</code> to
              create interactive animations for a button element. Here’s what’s
              happening with the gestures:
            </p>
            <ul className="list-disc list-inside mt-2 px-4 sm:px-8 my-6 text-white">
              <li>
                <strong>Hover State:</strong> The{" "}
                <code className="text-lime-200">
                  'whileHover= &#123;&#123;scale: 1.1&#125;&#125;'
                </code>{" "}
                prop defines the behavior when the button is hovered. It scales
                the button to 110% of its original size,making the button appear
                to "pop out".
              </li>
              <li>
                <strong>Tap State:</strong> The{" "}
                <code className="text-lime-200">
                  'whileTap= &#123;&#123;scale: 0.9&#125;&#125;'
                </code>{" "}
                prop controls what happens when the button is clicked or tapped.
                It shrinks the button to 90% of its original size, giving the
                effect of the button being pressed down.
              </li>
            </ul>
          </div>

          <p className="text-white text-center text-3xl mt-10 mx-2">
            Try using gestures in the Code Editor!
          </p>

          <div className="mx-6 sm:mx-10 lg:mx-36 mt-10">
            <div className="mb-16">
              <h2 className="text-teal-400 text-2xl font-bold mb-2">
                whileHover
              </h2>
              <CodeSnippet code={whileHoverCode} />
              <p className="text-white my-4 text-lg px-4 sm:px-8">
                The <code className="text-lime-200">whileHover</code> property
                allows you to animate an element when the user hovers over it.
                In this example, the button scales up by 10% when hovered,
                creating a "pop" effect.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-teal-400 text-2xl font-bold mb-2">
                whileTap
              </h2>
              <CodeSnippet code={whileTapCode} />
              <p className="text-white my-4 text-lg px-4 sm:px-8">
                The <code className="text-lime-200">whileTap</code> property
                animates an element while it's being clicked or tapped. In this
                example, the button shrinks by 10% (`scale: 0.9`) during a tap,
                simulating a "press" effect.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-teal-400 text-2xl font-bold mb-2">
                whileFocus
              </h2>
              <CodeSnippet code={whileFocusCode} />
              <p className="text-white my-4 text-lg px-4 sm:px-8">
                The <code className="text-lime-200">whileFocus</code> property
                applies animations when an element is focused, like an input
                field. In this example, the background changes to yellow when
                the input is focused, drawing attention to the element.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-teal-400 text-2xl font-bold mb-2">
                whileDrag
              </h2>
              <CodeSnippet code={whileDragCode} />
              <p className="text-white my-4 text-lg px-4 sm:px-8">
                The <code className="text-lime-200">whileDrag</code> property
                animates an element during a drag event. In this example, the
                element rotates by 15 degrees when it's dragged, and the cursor
                changes to "grabbing" to indicate it's being held.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gestures;
