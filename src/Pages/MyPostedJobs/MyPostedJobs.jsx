import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";
import PostedJobsCard from "./PostedJobsCard";
import Swal from "sweetalert2";

const MyPostedJobs = () => {
  const { user } = useAuth();
  const [postData, setPostData] = useState([]);
  const exios = useAxios();

  useEffect(() => {
    exios.get(`/job-posts?email=${user?.email}`).then((data) => {
      setPostData(data.data);
    });
  }, [user, exios]);

  const handleDeleteJobs = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        exios
          .delete(`/delete-job-post?id=${id}`)
          .then((res) => {
            if (res.status === 200) {
              Swal.fire({
                title: "Deleted!",
                text: "Your posted jobs successfully deleted.",
                icon: "success",
              });

              const remaining = postData?.filter((post) => post._id !== id);
              setPostData(remaining);
            }
          })
          .catch((err) => console.error(err));
      }
    });
  };

  return (
    <>
      <section>
        <div className="section-title mt-5">
          <h2>My Posted Jobs</h2>
        </div>

        <div className="mt-3 space-y-8 max-w-2xl mx-auto mb-10">
          {postData?.map((post) => (
            <PostedJobsCard
              key={post._id}
              post={post}
              handleDeleteJobs={handleDeleteJobs}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default MyPostedJobs;
