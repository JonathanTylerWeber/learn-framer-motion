import { useState } from "react";
import { motion } from "framer-motion";
import CodeEditorMemo from "../../components/CodeEditMemo";
import {
  fadeInCode,
  textAnimationCode,
  colorAnimationCode,
  positionAnimationCode,
  rotationAnimationCode,
  scaleAnimationCode,
} from "../../codeSnippets";
import CodeSnippet from "../../components/CodeSnippet";
import SideNav from "../../components/SideNav";
import { Outlet, useNavigate } from "react-router-dom";
import SelectDropdown from "../../components/SelectDropDown";

const Basics = () => {
  const [animateKey, setAnimateKey] = useState(0);
  const [selectedOption, setSelectedOption] = useState("basics");
  const navigate = useNavigate();

  const handleRefresh = () => {
    setAnimateKey(prevKey => prevKey + 1);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newOption = e.target.value;
    setSelectedOption(newOption);
    navigate(`/learn/${newOption}`); // Updated to use newOption
  };

  return (
    <>
      <div className="flex">

        <div className="hidden 2xl:block">
          <SideNav />
        </div>

        <div className="mx-auto w-full max-w-screen-xl">

          <SelectDropdown
            selectedOption={selectedOption}
            onSelectChange={handleSelectChange}
          />

          <h1 className="text-teal-400 text-center mt-10 xl:mt-28 text-4xl font-bold">
            Basics
          </h1>
          <div className="mx-6 sm:mx-10 lg:mx-36 mt-10">
            <p className="text-white mb-4 text-lg px-4 sm:px-8">
              The <code>&lt;motion.div&gt;</code> component from Framer Motion allows you to add animations to your React components with ease. Framer Motion provides a set of components and hooks that make it simple to animate elements with powerful and smooth transitions.
              <br />
              <br />
              In this example, we're using <code>&lt;motion.div&gt;</code> to create a fade-in animation for a circular div element. Here’s what’s happening in the animation:
            </p>
            <ul className="list-disc list-inside mt-2 px-4 sm:px-8 my-6 text-white">
              <li><strong>Initial State:</strong> The <code>'initial= &#123;&#123;opacity: 0&#125;&#125;'</code> prop sets the initial opacity of the div to 0, making it fully transparent when the animation starts.</li>
              <li><strong>Animate State:</strong> The <code>'animate= &#123;&#123;opacity: 1&#125;&#125;'</code> prop defines the end state of the animation, setting the opacity to 1, which makes the div fully opaque and visible.</li>
              <li><strong>Transition:</strong> The <code>'transition= &#123;&#123;duration: 2&#125;&#125;'</code> prop controls the duration of the animation, specifying that it should take 2 seconds to transition from opacity 0 to opacity 1.</li>
            </ul>
            <p className="text-white mb-4 text-lg px-4 sm:px-8">
              By clicking the "Refresh Animation" button, the <code>key</code> prop of the <code>&lt;motion.div&gt;</code> component is updated, causing the component to re-render and restart the animation. This technique ensures that the animation runs again every time you press the button, demonstrating how you can use Framer Motion to create dynamic and interactive UI elements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10 mx-4 sm:mx-10 lg:mx-28">
            {/* Code snippet column */}
            <div className="flex items-center justify-center">
              <div className="w-full">
                <CodeSnippet code={fadeInCode} />
              </div>
            </div>

            {/* Animation and button column */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-full max-w-full md:max-w-[400px] h-[300px] bg-teal-700 p-4 flex justify-center items-center rounded-md">
                <motion.div
                  key={animateKey}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  <div className="h-[150px] w-[150px] bg-white rounded-full"></div>
                </motion.div>
              </div>
              <button
                onClick={handleRefresh}
                className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600"
              >
                Refresh Animation
              </button>
            </div>
          </div>

          <p className="text-white text-center text-3xl mt-10">Try adding an animation below!</p>

          <div className="my-20">
            <CodeEditorMemo />
          </div>

          <div className="mx-6 sm:mx-10 lg:mx-36 mt-10">
            <p className="text-white  text-xl mb-10">There are many different props and values that you can change to create animations. Try some more examples in the code editor above and mix/match different ones. You can add multiple properties to each prop, for example:
              <code>'initial = &#123;&#123;opacity: 0, rotate:0&#125;&#125;
                animate= &#123;&#123;opacity: 1, rotate: 180&#125;&#125;'</code></p>

            {/* Animating Text */}
            <div className="mb-16">
              <h2 className="text-teal-400 text-2xl font-bold mb-2">Animating Text</h2>
              <CodeSnippet code={textAnimationCode} />
              <p className="text-white my-4 text-lg px-4 sm:px-8">
                You can animate text by applying motion to the <code>&lt;p&gt;</code> element or any other text element. This example demonstrates how to fade in the text "Hello World" from opacity 0 to opacity 1 over 2 seconds.
              </p>
            </div>

            {/* Animating Colors */}
            <div className="mb-16">
              <h2 className="text-teal-400 text-2xl font-bold mb-2">Animating Colors</h2>
              <CodeSnippet code={colorAnimationCode} />
              <p className="text-white my-4 text-lg px-4 sm:px-8">
                You can animate the color of elements by changing the <code>backgroundColor</code> and <code>color</code> properties. This example transitions the background color of the div from white to yellow.
              </p>
            </div>

            {/* Animating Position (X and Y) */}
            <div className="mb-16">
              <h2 className="text-teal-400 text-2xl font-bold mb-2">Animating Position (X and Y)</h2>
              <CodeSnippet code={positionAnimationCode} />
              <p className="text-white my-4 text-lg px-4 sm:px-8">
                To animate the position of an element along the x and y axes, use the <code>x</code> and <code>y</code> properties. This example moves the element 100 pixels to the right and 100 pixels down.
              </p>
            </div>

            {/* Animating Rotation */}
            <div className="mb-16">
              <h2 className="text-teal-400 text-2xl font-bold mb-2">Animating Rotation</h2>
              <CodeSnippet code={rotationAnimationCode} />
              <p className="text-white my-4 text-lg px-4 sm:px-8">
                You can animate the rotation of elements using the <code>rotate</code> property. This example rotates the element 360 degrees over 2 seconds.
              </p>
            </div>

            {/* Animating Scale */}
            <div className="mb-16">
              <h2 className="text-teal-400 text-2xl font-bold mb-2">Animating Scale</h2>
              <CodeSnippet code={scaleAnimationCode} />
              <p className="text-white my-4 text-lg px-4 sm:px-8">
                You can animate the scale of elements using the <code>scale</code> property. This example makes the circle quickly expand.
              </p>
            </div>
          </div>
        </div>
      </div>
      < Outlet />
    </>
  );
};

export default Basics;
