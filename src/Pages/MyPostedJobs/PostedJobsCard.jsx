import { useState } from "react";
import { Link } from "react-router-dom";

const PostedJobsCard = ({ post, handleDeleteJobs }) => {
  const {
    _id,
    user_name,
    user_photoURL,
    job_title,
    category,
    deadline,
    description,
    minimum_price,
    maximum_price,
  } = post;

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">
          {deadline}
        </span>
      </div>

      <div className="mt-2">
        <Link
          className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
          tabIndex="0"
          role="link"
        >
          {job_title}
        </Link>
        <p
          className="px-1 sm:px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
          tabIndex="0"
          role="button"
        >
          {category}
        </p>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {showFullDescription ? (
            description
          ) : (
            <>
              {description?.slice(0, 180)}...{" "}
              <span
                className="cursor-pointer text-blue-600"
                onClick={toggleDescription}
              >
                Read More
              </span>
            </>
          )}
        </p>
      </div>

      <div className="lg:flex items-center justify-between mt-4">
        <div className="space-x-3">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            <strong>Price Range :</strong> ${minimum_price} - {maximum_price}
          </span>
        </div>

        {/* <div className="flex md:items-center justify-end">
          <img
            className="hidden object-cover w-10 h-10 mx-4 rounded-full md:block ml-0"
            src={user_photoURL}
            alt={user_name}
          />
          <span
            className="font-bold text-gray-700 cursor-pointer dark:text-gray-200"
            tabIndex="0"
            role="link"
          >
            {user_name}
          </span>
        </div> */}
      </div>
      <div className="space-x-2 text-end">
        <Link
          to={`/update-jobs-data/${_id}`}
          className="primary-button-outline !text-primary-color hover:!text-white hover:border-transparent !btn-sm"
          tabIndex="0"
          role="link"
        >
          Update Details
        </Link>
        <button
          onClick={() => handleDeleteJobs(_id)}
          className="btn btn-warning btn-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostedJobsCard;
