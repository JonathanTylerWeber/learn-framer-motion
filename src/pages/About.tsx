import MagnetButton from "../components/MagnetButton";
import PageTransitionOverlay from "../components/PageTransitionOverlay";

import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import profileCircle from "../assets/profileCircle.png"

const About = () => {
  return (
    <>
      <PageTransitionOverlay />
      <div className="max-w-screen-lg mx-auto px-6 py-12 m-20">
        <h1 className="text-teal-400 text-4xl font-bold text-center mb-8">About</h1>
        <p className="text-white text-lg mb-6 leading-relaxed">
          Welcome to my site! I created this platform to help people learn how to use Framer Motion,
          because I believe the best way to master something is by teaching others. My passion for animations and
          smooth transitions in web development drove me to build a space where you can experiment with code and see the
          beauty of motion in action.
        </p>
        <p className="text-white text-lg mb-6 leading-relaxed">
          While I use <span className="text-lime-200 font-bold">Tailwind CSS</span> to style this site, you can easily style components on this site using inline <span className="text-lime-200 font-bold">CSS style</span> attributes if that fits your workflow better.
          For example:
        </p>
        <div className="bg-gray-800 p-4 rounded-md mb-6">
          <code className="text-white font-mono text-sm block">
            {'<motion.div style={{ backgroundColor: "#ffffff", color: "#ffff00" }}>'}<br />
            {'  // Your content here'}<br />
            {'</motion.div>'}
          </code>
        </div>

        <p className="text-white text-lg mb-6 leading-relaxed">
          To set up <span className="text-lime-200 font-bold">Framer Motion</span> in your React project, you can follow these steps:
        </p>
        <div className="bg-gray-800 p-4 rounded-md mb-6">
          <code className="text-white font-mono text-sm block">
            {'// Install Framer Motion'}<br />
            {'npm install framer-motion'}<br />
            {'// or'}<br />
            {'yarn add framer-motion'}
          </code>
        </div>

        <p className="text-white text-lg leading-relaxed mb-6">
          After installing, you can import and use it in your components like this:
        </p>
        <div className="bg-gray-800 p-4 rounded-md mb-6">
          <code className="text-white font-mono text-sm block whitespace-pre-wrap">
            {'import { motion } from "framer-motion";'}<br />
            <br />
            {'const MyComponent = () => {'}<br />
            {'    return ('}<br />
            {'        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>'}<br />
            {'            Hello, Framer Motion!'}<br />
            {'        </motion.div>'}<br />
            {'    );'}<br />
            {'};'}
          </code>

        </div>

        <p className="text-white text-lg leading-relaxed">
          Feel free to explore the site, try out different animations, and make it your own.
          If you're interested in my work, you can find more about me below:
        </p>

        <div className="grid grid-cols-3 gap-8 mt-20">
          <MagnetButton>
            <a
              href="https://jonathantweber.com/"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-lg flex items-center justify-center"
            >
              <img
                src={profileCircle}
                className="w-20 h-20 sm:w-36 sm:h-36 object-cover rounded-full"
              />
            </a>
          </MagnetButton>

          <MagnetButton>
            <a
              href="https://www.linkedin.com/in/jonathantweber/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <div
                className="w-20 h-20 sm:w-36 sm:h-36 object-cover relative"
              >
                <div className="bg-white w-16 h-16 sm:w-28 sm:h-28 rounded-md inset-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" ></div>
                <FaLinkedin className="relative w-20 h-20 sm:w-36 sm:h-36 z-10 text-teal-700 " />
              </div>

            </a>
          </MagnetButton>

          <MagnetButton>
            <a
              href="https://github.com/JonathanTylerWeber"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <div
                className="w-20 h-20 sm:w-36 sm:h-36 object-cover relative"
              >
                <div className="bg-white w-16 h-16 sm:w-28 sm:h-28 rounded-md inset-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" ></div>
                <FaGithubSquare className="relative w-20 h-20 sm:w-36 sm:h-36 z-10 text-teal-700 " />
              </div>
            </a>
          </MagnetButton>
        </div>
      </div>

    </>
  );
};

export default About;
