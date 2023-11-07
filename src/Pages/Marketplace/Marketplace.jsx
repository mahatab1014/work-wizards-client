import { useEffect, useState } from "react";
import "react-best-tabs/dist/index.css";
import JobPostCard from "../Home/BrowseByCategory/JobPostCard";
import useAxios from "../../Hooks/useAxios";

const Marketplace = () => {
  const [postData, setPostData] = useState([]);
  const exios = useAxios();

  useEffect(() => {
    exios.get(`/job-posts`).then((data) => {
      setPostData(data.data);
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
        {postData?.map((post) => (
          <JobPostCard key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default Marketplace;
