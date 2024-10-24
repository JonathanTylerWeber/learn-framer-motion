
// import HIGrid from "../components/Grid";
import { Example } from "../components/Example";
import PageTransitionOverlay from "../components/PageTransitionOverlay";

const Home = () => {
  return (
    <>
      <PageTransitionOverlay />
      <div className="max-w-screen-lg mx-auto px-6 py-12 m-20">
        <h1 className="text-4xl text-center font-bold text-teal-400 mb-4">
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
        {/* <HIGrid /> */}
        {/* <p className="my-10 text-center text-6xl text-white font-bold">hands on learning</p>
        <p className="mt-20 text-center text-6xl text-white font-bold">Sick scroll animations</p> */}

        <Example />




      </div>

    </>
  );
};

export default Home;
