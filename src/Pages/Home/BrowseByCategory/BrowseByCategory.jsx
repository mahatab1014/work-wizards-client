import { useEffect, useState } from "react";
import Tabs, { Tab } from "react-best-tabs";
import "react-best-tabs/dist/index.css";
import useAxios from "../../../Hooks/useAxios";
import JobPostCard from "./JobPostCard";
import Skeleton from "react-loading-skeleton";

const BrowseByCategory = () => {
  const [postData, setPostData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("Web Development");
  const exios = useAxios();

  useEffect(() => {
    exios.get(`/job-posts?category=${category}`).then((data) => {
      setPostData(data.data);
      setIsLoading(false);
    });
  }, [exios, category]);

  return (
    <section className="py-10">
      <div className="section-title">
        <h2>Discover Jobs</h2>
        <p>
          Explore a wide range of job categories to find the perfect job or hire
          the right professional. From web development to graphic design, we've
          got you covered. Choose your area of interest and start your journey
          today
        </p>
      </div>
      <Tabs
        activeTab="1"
        className="flex flex-col items-center pt-10"
        ulClassName=""
        activityClassName="bg-success"
        onClick={(event, tab) => {
          setCategory(event.target.innerText);
          // console.log(event, tab);
        }}
      >
        <Tab title="Web Development" className="mr-3">
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-5">
            {isLoading ? (
              <>
                {[1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800"
                  >
                    <div className="flex justify-between">
                      <Skeleton width={60} />
                      <Skeleton width={100} />
                    </div>
                    <div>
                      <Skeleton count={5} />
                    </div>
                    <div className="flex justify-between items-center">
                      <Skeleton width={80} />
                      <Skeleton width={80} />
                      <div className="flex items-center gap-2">
                        <Skeleton width={40} height={40} circle />
                        <Skeleton width={80} />
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {postData?.map((post) => (
                  <JobPostCard key={post._id} post={post} />
                ))}
              </>
            )}
          </div>
        </Tab>
        <Tab title="Digital Marketing" className="mr-3">
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-5">
            {isLoading ? (
              <>
                {[1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800"
                  >
                    <div className="flex justify-between">
                      <Skeleton width={60} />
                      <Skeleton width={100} />
                    </div>
                    <div>
                      <Skeleton count={5} />
                    </div>
                    <div className="flex justify-between items-center">
                      <Skeleton width={80} />
                      <Skeleton width={80} />
                      <div className="flex items-center gap-2">
                        <Skeleton width={40} height={40} circle />
                        <Skeleton width={80} />
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {postData?.map((post) => (
                  <JobPostCard key={post._id} post={post} />
                ))}
              </>
            )}
          </div>
        </Tab>
        <Tab title="Graphics Design" className="mr-3">
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-5">
            {isLoading ? (
              <>
                {[1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800"
                  >
                    <div className="flex justify-between">
                      <Skeleton width={60} />
                      <Skeleton width={100} />
                    </div>
                    <div>
                      <Skeleton count={5} />
                    </div>
                    <div className="flex justify-between items-center">
                      <Skeleton width={80} />
                      <Skeleton width={80} />
                      <div className="flex items-center gap-2">
                        <Skeleton width={40} height={40} circle />
                        <Skeleton width={80} />
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {postData?.map((post) => (
                  <JobPostCard key={post._id} post={post} />
                ))}
              </>
            )}
          </div>
        </Tab>
      </Tabs>
    </section>
  );
};

export default BrowseByCategory;
