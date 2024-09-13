import PageTransitionOverlay from "../components/PageTransitionOverlay";

const NotFound: React.FC = () => {
  return (
    <>
      <PageTransitionOverlay />
      <div className="not-found text-white mt-96 flex justify-center items-center">
        <div>
          <h1 className="font-bold text-2xl">404 - Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
        </div>
      </div>
    </>
  );
};

export default NotFound;