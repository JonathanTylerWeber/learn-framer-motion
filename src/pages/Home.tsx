// import { motion } from "framer-motion";
import PageTransitionOverlay from "../components/PageTransitionOverlay";

const Home = () => {
  return (
    <>
      <PageTransitionOverlay />
      <div
        className="bg-slate-900 min-h-screen mt-20 flex justify-center py-6 ">
        <div className="max-w-lg w-full px-6 md:px-0">
          <h1 className="text-4xl font-bold text-teal-400 mb-4">
            Exploring Framer Motion
          </h1>
          <p className="text-white text-lg leading-relaxed">
            Learning Framer Motion opens up a world of possibilities for creating
            smooth, interactive animations in React applications. With its simple
            API, you can easily animate elements, transitions, and gestures,
            making your UI more dynamic and engaging.
          </p>
          <p className="text-white text-lg leading-relaxed mt-4">
            Whether you're building complex animations or just adding subtle
            motion to your components, Framer Motion provides the tools and
            flexibility to bring your ideas to life. Start experimenting with
            animations today and see how they can transform your web experience!
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
