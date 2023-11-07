/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import BidCard from "./BidCard";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";
import Skeleton from "react-loading-skeleton";
import { Helmet } from "react-helmet-async";

const MyBids = () => {
  const { user } = useAuth();
  const [bidData, setBidData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const exios = useAxios();

  const handleCompleteWork = (id) => {
    const acceptStatus = { bid_status: "completed" };
    exios.put(`/bid-status-update?id=${id}`, acceptStatus).then((data) => {
      if (data.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Order Completed",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  useEffect(() => {
    exios.get(`/job-bid?email=${user?.email}`).then((data) => {
      setBidData(data.data);
      setIsLoading(false);
    });
  }, [user, exios, handleCompleteWork]);

  return (
    <>
      <Helmet>
        <title>My Bids | WorkWizards</title>
      </Helmet>
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
                {isLoading ? (
                  <>
                    {[1, 2, 3, 4].map((index) => (
                      <tr key={index}>
                        <th>
                          <Skeleton />
                        </th>
                        <th>
                          <Skeleton />
                        </th>
                        <th>
                          <Skeleton />
                        </th>
                        <th className="capitalize">
                          <Skeleton />
                        </th>
                        <th>
                          <Skeleton />
                        </th>
                      </tr>
                    ))}
                  </>
                ) : (
                  <>
                    {bidData?.map((data) => (
                      <BidCard
                        key={data._id}
                        data={data}
                        handleCompleteWork={handleCompleteWork}
                      />
                    ))}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyBids;
