import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const UpdatePostedJobs = () => {
  const exios = useAxios();
  const { user } = useAuth();

  const { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    exios.get(`/single-job-data?id=${id}`).then((data) => {
      setData(data.data);
    });
  }, [id, exios]);

  const navigate = useNavigate();

  const handleJobDetailsUpdate = (e) => {
    e.preventDefault();

    const form = e.target;

    const userEmail = user.email;
    const userName = user.displayName;
    const userPhotoURL = user.photoURL;
    const jobTitle = form.job_title.value;
    const category = form.category.value;
    const deadline = form.deadline.value;
    const jobDescription = form.description.value;
    const minimum_price = form.minimum_price.value;
    const maximum_price = form.maximum_price.value;

    const postData = {
      user_email: userEmail,
      user_name: userName,
      user_photoURL: userPhotoURL,
      job_title: jobTitle,
      category: category,
      deadline: deadline,
      description: jobDescription,
      minimum_price: minimum_price,
      maximum_price: maximum_price,
    };

    exios
      .put(`/update-job-post-data?id=${data?._id}`, postData)
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Job Details update successful",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      })
      .catch((err) => {
        if (err) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Something went wrong",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      });
  };

  return (
    <section>
      <Helmet>
        <title>Update Data | WorkWizards</title>
      </Helmet>
      <div className="py-10">
        <div className="section-title ">
          <h2>Update Jobs Data</h2>
        </div>

        <div className="py-8">
          <span onClick={() => navigate(-1)} className="primary-button !btn-sm">
            <AiOutlineRollback className="text-xl" />
            Back
          </span>
        </div>

        <form className="" onSubmit={handleJobDetailsUpdate}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                defaultValue={data?.user_name}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                required
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                defaultValue={data?.user_email}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                disabled
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="job-title"
              >
                Job Title
              </label>
              <input
                id="job-title"
                type="text"
                name="job_title"
                defaultValue={data?.job_title}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                required
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="category"
              >
                Category
              </label>

              <select
                name="category"
                id="category"
                defaultValue={data?.category}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                required
              >
                <option value="Web Development">Web Development</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Graphics Design">Graphics Design</option>
              </select>
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="deadline"
              >
                Deadline
              </label>
              <input
                id="deadline"
                name="deadline"
                type="date"
                defaultValue={data?.deadline}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                required
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                defaultValue={data?.description}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                required
              ></textarea>
            </div>

            <div className="flex gap-2">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="minimum-price"
                >
                  Minimum Price
                </label>
                <input
                  id="minimum-price"
                  type="number"
                  name="minimum_price"
                  defaultValue={data?.minimum_price}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                />
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="maximum-price"
                >
                  Maximum Price
                </label>
                <input
                  id="maximum-price"
                  type="number"
                  defaultValue={data?.maximum_price}
                  name="maximum_price"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdatePostedJobs;
