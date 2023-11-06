import { useParams } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

const JobDetails = () => {
  const { id } = useParams();
  const exios = useAxios();
  const { user } = useAuth();
  const [data, setData] = useState(null);

  useEffect(() => {
    exios.get(`/single-job-data?id=${id}`).then((data) => {
      setData(data.data);
    });
  }, [id, exios]);

  console.log(data);
  return (
    <>
      <section>
        <div className="max-w-5xl m-auto shadow-lg px-5 rounded-box py-10">
          <div className="text-center space-y-5 mb-10">
            <h2 className="text-xl sm:text-3xl">{data?.job_title}</h2>
            <p>{data?.description}</p>
          </div>
          <div className="sm:flex gap-5 justify-center [&>div>p>strong]:text-gray-700 [&>div>p>strong]:font-medium">
            <div className="flex flex-col justify-between">
              <h4 className="text-lg font-medium">Work Info</h4>
              <p>
                <strong>Category :</strong> {data?.category}
              </p>
              <p>
                <strong>Deadline :</strong> {data?.deadline}
              </p>
              <p>
                <strong>Price Range :</strong> ${data?.minimum_price} - $
                {data?.maximum_price}
              </p>
            </div>
            <div className="flex flex-col justify-between">
              <h4 className="text-lg font-medium">Company Info</h4>
              <figure>
                <img
                  className="w-10 h-10 object-cover rounded-full"
                  src={data?.user_photoURL}
                  alt={data?.user_name}
                />
              </figure>
              <p>
                <strong>Name :</strong> {data?.user_name}
              </p>
              <p>
                <strong>Email :</strong> {data?.user_email}
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-5xl m-auto shadow-lg px-5 rounded-box pt-5 my-10">
          {user?.email === data?.user_email ? (
            <div>
              <p className="text-center py-2 bg-warning text-lg rounded-lg my-10">
                You can't bid on your own job.
              </p>
            </div>
          ) : (
            <div>
              <p className="text-center py-2 bg-success text-lg rounded-lg my-10">
                Bid Now
              </p>
            </div>
          )}
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-500 dark:text-gray-300"
                >
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  id="name"
                  defaultValue={user?.displayName}
                  className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-500 dark:text-gray-300"
                >
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  defaultValue={user?.email}
                  className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                  required
                  disabled
                />
              </div>

              <div>
                <label
                  htmlFor="bidding_amount"
                  className="block text-sm text-gray-500 dark:text-gray-300"
                >
                  Bidding amount
                </label>

                <input
                  type="number"
                  placeholder="$10000"
                  name="bidding_amount"
                  id="bidding_amount"
                  className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="deadline"
                  className="block text-sm text-gray-500 dark:text-gray-300"
                >
                  Deadline
                </label>

                <input
                  type="date"
                  name="deadline"
                  id="deadline"
                  className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="bid_message"
                  className="block text-sm text-gray-500 dark:text-gray-300"
                >
                  Message
                </label>

                <textarea
                  name="bid_message"
                  id="bid_message"
                  className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                  required
                ></textarea>
              </div>
            </div>
            <div className="py-5">
              <button
                type="submit"
                className={
                  user?.email === data?.user_email
                    ? "primary-button btn-disabled"
                    : "primary-button"
                }
              >
                Bid Now
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default JobDetails;
