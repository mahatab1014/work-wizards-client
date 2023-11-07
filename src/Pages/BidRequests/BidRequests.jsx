/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import BidReqCard from "./BidReqCard";
import Swal from "sweetalert2";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Helmet } from "react-helmet-async";

const BidRequests = () => {
  const { user } = useAuth();
  const [bidData, setBidData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const exios = useAxios();

  const handleAcceptBidReq = (id) => {
    const acceptStatus = { bid_status: "in progress" };
    exios.put(`/bid-status-update?id=${id}`, acceptStatus).then((data) => {
      if (data.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Order accepted",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleRejectBidReq = (id) => {
    const acceptStatus = { bid_status: "canceled" };

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Back",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I want Cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        exios
          .put(`/bid-status-update?id=${id}`, acceptStatus)
          .then((res) => {
            if (res.status === 200) {
              Swal.fire({
                title: "Canceled!",
                text: "Bid Requsts reject successfully done.",
                icon: "success",
              });
            }
          })
          .catch((err) => console.error(err));
      }
    });
  };

  useEffect(() => {
    exios.get(`/job-bid?company_email=${user?.email}`).then((data) => {
      setBidData(data.data);
      setIsLoading(false);
    });
  }, [user, exios, handleAcceptBidReq, handleRejectBidReq]);

  return (
    <>
      <Helmet>
        <title>Bid Requests | WorkWizards</title>
      </Helmet>
      <section>
        <div className="section-title mt-5">
          <h2>Bid Requset</h2>
        </div>

        <div className="mt-3 space-y-8 max-w-4xl mx-auto mb-10">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr className="bg-base-300">
                  <th>Job Title</th>
                  <th>Email</th>
                  <th>Deadline</th>
                  <th>Price</th>
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
                        <th>
                          <Skeleton />
                        </th>
                      </tr>
                    ))}
                  </>
                ) : (
                  <>
                    {bidData?.map((data) => (
                      <BidReqCard
                        key={data._id}
                        data={data}
                        handleAcceptBidReq={handleAcceptBidReq}
                        handleRejectBidReq={handleRejectBidReq}
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

export default BidRequests;
