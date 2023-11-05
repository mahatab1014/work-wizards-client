import { Link } from "react-router-dom";

const JobPostCard = ({ post }) => {
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

  return (
    <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">
          {deadline}
        </span>
        <a
          className="px-1 sm:px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
          tabIndex="0"
          role="button"
        >
          {category}
        </a>
      </div>

      <div className="mt-2">
        <Link
          className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
          tabIndex="0"
          role="link"
        >
          {job_title}
        </Link>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
        {description.length > 150 ? (
            <>{description.slice(0, 150)}... <Link className="text-blue-600">Read More</Link></>
        ) : (
            description
        )}
        </p>

      </div>

      <div className="lg:flex items-center justify-between mt-4">
        <div className="space-x-3">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            <strong>Price Range :</strong> ${minimum_price} - {maximum_price}
          </span>
        </div>
        <div>
          <Link className="primary-button !btn-sm" tabIndex="0" role="link">
            Bid Now
          </Link>
        </div>

        <div className="flex md:items-center justify-end">
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
        </div>
      </div>
    </div>
  );
};

export default JobPostCard;
