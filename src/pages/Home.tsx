import { useState } from "react";
import PageTransitionOverlay from "../components/PageTransitionOverlay";
import ParticleBackground from "../components/Particles";
import { Link } from "react-router-dom";

const Home = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <PageTransitionOverlay />

      <div className="flex justify-center items-center w-full min-h-screen pb-32 relative overflow-hidden">
        <ParticleBackground hovered={hovered} />

        <div className="text-center gap-4 w-2/5 text-white z-10">
          <h1 className="text-5xl text-teal-400 font-bold mb-10">
            Exploring Framer Motion
          </h1>
          <p className="text-gray-200 text-xl">
            Learning Framer Motion enables smooth, interactive animations in
            React apps with a simple API, enhancing UI dynamics and engagement.
          </p>
          <div className="mt-32 flex flex-row justify-center gap-4">
            <button
              className="font-bold bg-teal-600 py-4 px-8 flex text-2xl items-center justify-center rounded-full drop-shadow-xl hover:bg-teal-700"
              style={{ boxShadow: "0 4px 10px rgba(0, 128, 128, 0.5)" }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <Link to="/learn/basics">Start Learning</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
