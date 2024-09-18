import PageTransitionOverlay from "../components/PageTransitionOverlay";

const About = () => {
  return (
    <>
      <PageTransitionOverlay />
      <div className="max-w-screen-lg mx-auto px-6 py-12 m-20">
        <h1 className="text-teal-400 text-4xl font-bold text-center mb-8">About This Site</h1>
        <p className="text-white text-lg mb-6 leading-relaxed">
          Welcome to my site! I created this platform to help people learn how to use Framer Motion through teaching,
          because I believe the best way to master something is by sharing it with others. My passion for animations and
          smooth transitions in web development drove me to build a space where you can experiment with code and see the
          beauty of motion in action.
        </p>
        <p className="text-white text-lg mb-6 leading-relaxed">
          While I use <span className="text-lime-200 font-bold">Tailwind CSS</span> to style this site, I understand that every developer has their preferences.
          You can easily style components using inline <span className="text-lime-200 font-bold">CSS style</span> attributes if that fits your workflow better.
          For example:
        </p>
        <div className="bg-gray-800 p-4 rounded-md mb-6">
          <code className="text-white font-mono text-sm block">
            {'<motion.div style={{ backgroundColor: "yellow", color: "black" }}>'}<br />
            {'  // Your content here'}<br />
            {'</motion.div>'}
          </code>
        </div>
        <p className="text-white text-lg leading-relaxed">
          Feel free to explore the site, try out different animations, and make it your own.
          If you're interested in my work, you can find more about me below:
        </p>

        <p className="my-10 text-center text-6xl text-white font-bold">hands on learning</p>
        <p className="my-10 text-center text-6xl text-white font-bold">magnet links</p>
        <p className="my-10 text-center text-6xl text-white font-bold">links to setup framer motion and tailwind</p>

        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="https://yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-300 hover:text-teal-400 text-lg"
          >
            Website
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-300 hover:text-teal-400 text-lg"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-300 hover:text-teal-400 text-lg"
          >
            GitHub
          </a>
        </div>
      </div>

    </>
  );
};

export default About;
