import Lottie from "lottie-react";
import AddJobsLottie from "./add-jobs.json";
const AddJobs = () => {
  const handleJobPost = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(e);
    console.log(form);
    const jobTitle = form.job_title.value;
    const category = form.category.value;
    const deadline = form.deadline.value;
    const jobDescription = form.description.value;
    const minimum_price = form.minimum_price.value;
    const maximum_price = form.maximum_price.value;

    console.log(`
        ${jobTitle}
        ${category}
        ${deadline}
        ${jobDescription}
        ${minimum_price}
        ${maximum_price}
        
        `);
  };

  return (
    <section className="bg-white dark:bg-gray-800 pb-10">
      <div className="max-w-4xl mt-10 p-6 mx-auto rounded-md shadow-md ">
        <div className="pb-8 md:flex items-center">
          <div className="section-title">
            <h2 className="">Post a Job</h2>
            <p>
              Ready to find the perfect professional or advertise your job
              opportunity? Use this page to post a new job listing. Provide the
              details, set your budget, and let our marketplace connect you with
              the right candidates. Start by filling out the form below.
            </p>
          </div>
          <div>
            <Lottie
              className="h-96"
              animationData={AddJobsLottie}
              loop={true}
            />
          </div>
        </div>

        <form className="-mt-20" onSubmit={handleJobPost}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
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
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                required
              >
                <option value="Web Development">Web Development</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Graphic Design">Graphic Design</option>
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
                  name="maximum_price"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Save
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddJobs;
