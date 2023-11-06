import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import BidCard from "./BidCard";
import useAxios from "../../Hooks/useAxios";

const MyBids = () => {
  const { user } = useAuth();
  const [bidData, setBidData] = useState([]);
  const exios = useAxios();

  useEffect(() => {
    exios.get(`/job-bid?email=${user?.email}`).then((data) => {
      setBidData(data.data);
    });
  }, [user, exios]);

  return (
    <>
      <section>
        <div className="section-title mt-5">
          <h2>My Bids</h2>
        </div>

        <div className="mt-3 space-y-8 max-w-4xl mx-auto mb-10">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="bg-base-300">
                  <th>Job Title</th>
                  <th>Email</th>
                  <th>Deadline</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {bidData.map((data) => (
                  <BidCard key={data._id} data={data} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyBids;
