import PageTransitionOverlay from "../components/PageTransitionOverlay";

const Projects = () => {
  return (
    <>
      <PageTransitionOverlay />
      <div className="w-fullmx-auto px-6 py-12 m-20">
        <h1 className="text-teal-400 text-5xl font-bold text-center mb-20">
          Projects
        </h1>

        <p className="text-white text-3xl text-center mb-20 leading-relaxed">
          Follow along together as we create animated components using Framer
          Motion!
        </p>
        <h2 className="text-lime-200 text-2xl font-bold text-center mb-8">
          Coming Soon...
        </h2>
      </div>
    </>
  );
};

export default Projects;
