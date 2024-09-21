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
  starterCircle,
} from "../../codeSnippets";
import CodeSnippet from "../../components/CodeSnippet";
import SideNav from "../../components/SideNav";
import { useNavigate } from "react-router-dom";
import SelectDropdown from "../../components/SelectDropDown";
import PageTransitionOverlay from "../../components/PageTransitionOverlay";
import { IoMdRefresh } from "react-icons/io";

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
    navigate(`/learn/${newOption}`);
  };

  return (
    <>
      <PageTransitionOverlay />

      <div className="flex w-full">

        <div className="hidden 2xl:block">
          <SideNav />
        </div>

        <div className="fixed bottom-0 z-30 hidden md:flex w-full">
          <CodeEditorMemo startCode={starterCircle.trim()} refresh={true} />
        </div>

        <div className="mx-auto w-full max-w-screen-xl mb-[50vh]">

          <SelectDropdown
            selectedOption={selectedOption}
            onSelectChange={handleSelectChange}
          />

          <h1 className="text-teal-400 text-center mt-10 2xl:mt-28 text-5xl font-bold">
            Basics
          </h1>
          <div className="mx-6 sm:mx-10 lg:mx-36 mt-10">
            <p className="text-white mb-4 text-lg px-4 sm:px-8">
              The <code className="text-lime-200">'&lt;motion.div&gt;'</code> component from Framer Motion allows you to add animations to your React components with ease. Framer Motion provides a set of components and hooks that make it simple to animate elements with powerful and smooth transitions.
              <br />
              <br />
              In this example, we're using <code className="text-lime-200">'&lt;motion.div&gt;'</code> to create a fade-in animation for a circular div element. Here’s what’s happening in the animation:
            </p>
            <ul className="list-disc list-inside mt-2 px-4 sm:px-8 my-6 text-white">
              <li><strong>Initial State:</strong> The <code className="text-lime-200">'initial= &#123;&#123;opacity: 0&#125;&#125;'</code> prop sets the initial opacity of the div to 0, making it fully transparent when the animation starts.</li>
              <li><strong>Animate State:</strong> The <code className="text-lime-200">'animate= &#123;&#123;opacity: 1&#125;&#125;'</code> prop defines the end state of the animation, setting the opacity to 1, which makes the div fully opaque and visible.</li>
              <li><strong>Transition:</strong> The <code className="text-lime-200">'transition= &#123;&#123;duration: 2&#125;&#125;'</code> prop controls the duration of the animation, specifying that it should take 2 seconds to transition from opacity 0 to opacity 1.</li>
            </ul>
            <p className="text-white mb-4 text-lg px-4 sm:px-8">
              By clicking the "Refresh Animation" button, the <code className="text-lime-200">'key'</code> prop of the <code className="text-lime-200">'&lt;motion.div&gt;'</code> component is updated, causing the component to re-render and restart the animation. This technique ensures that the animation runs again every time you press the button, demonstrating how you can use Framer Motion to create dynamic and interactive UI elements.
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
              <div className="relative w-full max-w-full md:max-w-[400px] h-[300px] bg-teal-900 p-4 flex justify-center items-center rounded-md">
                <motion.div
                  key={animateKey}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  className="relative"
                >
                  <div className="h-[150px] w-[150px] bg-white rounded-full"></div>
                </motion.div>

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


          <p className="text-white text-center text-3xl mt-10">Try adding an animation below!</p>

          <div className="my-20 md:hidden">
            <CodeEditorMemo startCode={starterCircle} refresh={true} />
          </div>

          <div className="mx-6 sm:mx-10 lg:mx-36 mt-10">
            <p className="text-white  text-xl mb-10">There are many different props and values that you can change to create animations. Try some more examples in the code editor above and mix/match different ones. You can add multiple properties to each prop, for example:
              <code className="text-lime-200">'initial = &#123;&#123;opacity: 0, rotate:0&#125;&#125;
                animate= &#123;&#123;opacity: 1, rotate: 180&#125;&#125;'</code></p>

            {/* Animating Text */}
            <div className="mb-16">
              <h2 className="text-teal-400 text-2xl font-bold mb-2">Animating Text</h2>
              <CodeSnippet code={textAnimationCode} />
              <p className="text-white my-4 text-lg px-4 sm:px-8">
                You can animate text by applying motion to the <code className="text-lime-200">'&lt;p&gt;'</code> element or any other text element. This example demonstrates how to fade in the text "Hello World" from opacity 0 to opacity 1 over 2 seconds.
              </p>
            </div>

            {/* Animating Colors */}
            <div className="mb-16">
              <h2 className="text-teal-400 text-2xl font-bold mb-2">Animating Colors</h2>
              <CodeSnippet code={colorAnimationCode} />
              <p className="text-white my-4 text-lg px-4 sm:px-8">
                You can animate the color of elements by changing the <code className="text-lime-200">'backgroundColor'</code> and <code className="text-lime-200">'color'</code> properties. This example transitions the background color of the div from white to yellow.
              </p>
            </div>

            {/* Animating Position (X and Y) */}
            <div className="mb-16">
              <h2 className="text-teal-400 text-2xl font-bold mb-2">Animating Position (X and Y)</h2>
              <CodeSnippet code={positionAnimationCode} />
              <p className="text-white my-4 text-lg px-4 sm:px-8">
                To animate the position of an element along the x and y axes, use the <code className="text-lime-200">'x'</code> and <code className="text-lime-200">'y'</code> properties. This example moves the element 100 pixels to the right and 100 pixels down.
              </p>
            </div>

            {/* Animating Rotation */}
            <div className="mb-16">
              <h2 className="text-teal-400 text-2xl font-bold mb-2">Animating Rotation</h2>
              <CodeSnippet code={rotationAnimationCode} />
              <p className="text-white my-4 text-lg px-4 sm:px-8">
                You can animate the rotation of elements using the <code className="text-lime-200">'rotate'</code> property. This example rotates the element 360 degrees over 2 seconds.
              </p>
            </div>

            {/* Animating Scale */}
            <div className="mb-16">
              <h2 className="text-teal-400 text-2xl font-bold mb-2">Animating Scale</h2>
              <CodeSnippet code={scaleAnimationCode} />
              <p className="text-white my-4 text-lg px-4 sm:px-8">
                You can animate the scale of elements using the <code className="text-lime-200">'scale'</code> property. This example makes the circle quickly expand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basics;
