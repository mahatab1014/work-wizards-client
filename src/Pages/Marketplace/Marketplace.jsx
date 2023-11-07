import { useEffect, useState } from "react";
import "react-best-tabs/dist/index.css";
import JobPostCard from "../Home/BrowseByCategory/JobPostCard";
import useAxios from "../../Hooks/useAxios";
import Skeleton from "react-loading-skeleton";

const Marketplace = () => {
  const [postData, setPostData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const exios = useAxios();

  useEffect(() => {
    exios.get(`/job-posts`).then((data) => {
      setPostData(data.data);
      setIsLoading(false);
    });
  }, [exios]);

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
      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-5">
        {isLoading ? (
          <>
            {[1, 2, 3, 4, 5, 6].map((index) => (
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
    </section>
  );
};

export default Marketplace;
