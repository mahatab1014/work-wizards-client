import Lottie from "lottie-react";
import PageNotFound from "./page-not-found_3.json";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="container mx-auto px-5">
      <div className="-mt-20">
        <Lottie className="h-96" animationData={PageNotFound} loop={true} />
      </div>
      <div className="text-center space-x-4  z-50">
        <button
          className="primary-button-outline !text-black hover:!text-white hover:!border-transparent"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <Link to="/" className="primary-button">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
