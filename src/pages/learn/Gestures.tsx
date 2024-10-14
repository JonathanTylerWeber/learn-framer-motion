import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import SideNav from "../../components/SideNav";
import SelectDropdown from "../../components/SelectDropDown";
import PageTransitionOverlay from "../../components/PageTransitionOverlay";
import CodeSnippet from "../../components/CodeSnippet";
import { gestureCode, starterClick } from "../../codeSnippets";
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
          <CodeEditorMemo startCode={starterClick.trim()} refresh={false} />
        </div>

        <div className="mx-auto w-full max-w-screen-xl mb-[50vh]">

          <SelectDropdown
            selectedOption={selectedOption}
            onSelectChange={handleSelectChange}
          />

          <h1 className="text-teal-400 text-center mt-10 2xl:mt-28 text-5xl font-bold">
            Gestures
          </h1>

          <div className="mx-6 sm:mx-10 lg:mx-36 mt-10">
            <p className="text-white mb-4 text-lg px-4 sm:px-8">
              Gestures are a key part of interactive UIs, allowing users to interact with elements using touch or mouse inputs. Framer Motion offers powerful gesture handling capabilities to make these interactions smooth and intuitive. In this section, you'll learn how to implement and animate gestures using the <code className="text-lime-200">'&lt;motion&gt;'</code> component from Framer Motion.
              <br />
              <br />
              Here's a brief overview of how gestures work with Framer Motion:
            </p>
            <ul className="list-disc list-inside mt-2 px-4 sm:px-8 my-6 text-white">
              <li><strong>Gestures:</strong> Framer Motion provides gesture handlers like <code className="text-lime-200">`whileHover`</code>, <code className="text-lime-200">`whileTap`</code>, and <code className="text-lime-200">`drag`</code> to create interactive animations based on user input.</li>
              <li><strong>Initial State:</strong> Define the initial state of the element before any gestures are applied, such as scale, opacity, or position.</li>
              <li><strong>Animate State:</strong> Set the desired end state for the element when a gesture is detected, such as scaling up, changing color, or moving.</li>
              <li><strong>Transition:</strong> Control the timing and easing of the gesture-based animation to make the interaction feel natural and responsive.</li>
            </ul>
            <p className="text-white mb-4 text-lg px-4 sm:px-8">
              By using gestures in Framer Motion, you can enhance the user experience with dynamic and interactive elements. For example, you can make buttons grow when hovered over or animate elements as users drag them across the screen. Experiment with different gesture handlers and animations to see how they can be used to create engaging interactions.
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
              In this example, we’re using <code className="text-lime-200">'&lt;motion.div&gt;'</code> to create interactive animations for a button element. Here’s what’s happening with the gestures:
            </p>
            <ul className="list-disc list-inside mt-2 px-4 sm:px-8 my-6 text-white">
              <li><strong>Hover State:</strong> The <code className="text-lime-200">'whileHover= &#123;&#123;scale: 1.1&#125;&#125;'</code> prop defines the behavior when the button is hovered. It scales the button to 110% of its original size,making the button appear to "pop out".</li>
              <li><strong>Tap State:</strong> The <code className="text-lime-200">'whileTap= &#123;&#123;scale: 0.9&#125;&#125;'</code> prop controls what happens when the button is clicked or tapped. It shrinks the button to 90% of its original size, giving the effect of the button being pressed down.</li>
            </ul>
          </div>

          <p className="text-white text-center text-3xl mt-10">Try using gestures in the Code Editor!</p>

          <div className="mx-6 sm:mx-10 lg:mx-36 mt-10">

            {/* Animating Text */}
            {/* <div className="mb-16">
              <h2 className="text-teal-400 text-2xl font-bold mb-2">Animating Text</h2>
              <CodeSnippet code={textAnimationCode} />
              <p className="text-white my-4 text-lg px-4 sm:px-8">
                You can animate text by applying motion to the <code>&lt;p&gt;</code> element or any other text element. This example demonstrates how to fade in the text "Hello World" from opacity 0 to opacity 1 over 2 seconds.
              </p>
            </div> */}

            {/* Animating Colors */}
            {/* <div className="mb-16">
              <h2 className="text-teal-400 text-2xl font-bold mb-2">Animating Colors</h2>
              <CodeSnippet code={colorAnimationCode} />
              <p className="text-white my-4 text-lg px-4 sm:px-8">
                You can animate the color of elements by changing the <code>backgroundColor</code> and <code>color</code> properties. This example transitions the background color of the div from white to yellow.
              </p>
            </div> */}

            {/* Animating Position (X and Y) */}
            {/* <div className="mb-16">
              <h2 className="text-teal-400 text-2xl font-bold mb-2">Animating Position (X and Y)</h2>
              <CodeSnippet code={positionAnimationCode} />
              <p className="text-white my-4 text-lg px-4 sm:px-8">
                To animate the position of an element along the x and y axes, use the <code>x</code> and <code>y</code> properties. This example moves the element 100 pixels to the right and 100 pixels down.
              </p>
            </div> */}

            {/* Animating Rotation */}
            {/* <div className="mb-16">
              <h2 className="text-teal-400 text-2xl font-bold mb-2">Animating Rotation</h2>
              <CodeSnippet code={rotationAnimationCode} />
              <p className="text-white my-4 text-lg px-4 sm:px-8">
                You can animate the rotation of elements using the <code>rotate</code> property. This example rotates the element 360 degrees over 2 seconds.
              </p>
            </div> */}

            {/* Animating Scale */}
            {/* <div className="mb-16">
              <h2 className="text-teal-400 text-2xl font-bold mb-2">Animating Scale</h2>
              <CodeSnippet code={scaleAnimationCode} />
              <p className="text-white my-4 text-lg px-4 sm:px-8">
                You can animate the scale of elements using the <code>scale</code> property. This example makes the circle quickly expand.
              </p>
            </div> */}
          </div>

        </div>
      </div>
    </>
  );
};

export default Gestures;
