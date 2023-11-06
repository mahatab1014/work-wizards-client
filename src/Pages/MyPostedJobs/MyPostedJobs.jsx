import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";
import PostedJobsCard from "./PostedJobsCard";

const MyPostedJobs = () => {
  const { user } = useAuth();
  const [postData, setPostData] = useState([]);
  const exios = useAxios();


  useEffect(() => {
    exios.get(`/job-posts?email=${user?.email}`).then((data) => {
      setPostData(data.data);
    });
  }, [user, exios]);

  console.log(postData)

  return (
    <>
      <section>
        <div className="section-title mt-5">
          <h2>My Posted Jobs</h2>
        </div>

        <div className="mt-3 flex justify-center gap-5">
          {postData?.map((post) => (
            <PostedJobsCard key={post._id} post={post} />
          ))}
        </div>
      </section>
    </>
  );
};

export default MyPostedJobs;
