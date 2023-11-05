import { useEffect, useState } from "react";
import Tabs, { Tab } from "react-best-tabs";
import "react-best-tabs/dist/index.css";
import useAxios from "../../../Hooks/useAxios";
import JobPostCard from "./JobPostCard";

const BrowseByCategory = () => {
  const [postData, setPostData] = useState([]);
  const [category, setCategory] = useState("Web Development");
  const exios = useAxios();

  useEffect(() => {
    exios.get(`/api/v1/job-posts?category=${category}`).then((data) => {
      setPostData(data.data);
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
            {postData?.map((post) => (
              <JobPostCard key={post._id} post={post} />
            ))}
          </div>
        </Tab>
        <Tab title="Digital Marketing" className="mr-3">
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-5">
            {postData?.map((post) => (
              <JobPostCard key={post._id} post={post} />
            ))}
          </div>
        </Tab>
        <Tab title="Graphics Design" className="mr-3">
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-5"> 
            {postData?.map((post) => (
              <JobPostCard key={post._id} post={post} />
            ))}
          </div>
        </Tab>
      </Tabs>
    </section>
  );
};

export default BrowseByCategory;
