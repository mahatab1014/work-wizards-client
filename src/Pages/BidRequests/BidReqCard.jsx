import { Link } from "react-router-dom";

const BidReqCard = ({ data, handleAcceptBidReq, handleRejectBidReq }) => {
  const {
    _id,
    bid_deadline,
    bid_status,
    bidder_email,
    job_info,
    bidding_amount,
  } = data;
  return (
    <>
      <tr>
        <th>
          <Link className="hover:underline" to={`/jobs/${job_info?._id}`}>
            {job_info?.job_title}
          </Link>
        </th>
        <th>{bidder_email}</th>
        <th>{bid_deadline}</th>
        <th className="capitalize">${bidding_amount}</th>
        <th className="capitalize">{bid_status}</th>
        <th className="space-y-1 md:space-x-1">
          {bid_status !== "canceled" ? (
            <>
              <div
                className="tooltip tooltip-left"
                data-tip="After accept bid requset, seller start your work"
              >
                <button
                  onClick={() => handleAcceptBidReq(_id)}
                  className="primary-button !bg-success !btn-sm"
                >
                  Accept
                </button>
              </div>
              <div
                className="tooltip tooltip-top"
                data-tip="Reject bid request"
              >
                <button
                  onClick={() => handleRejectBidReq(_id)}
                  className="primary-button !btn-sm"
                >
                  Reject
                </button>
              </div>
            </>
          ) : (
            ""
          )}
        </th>
      </tr>
    </>
  );
};

export default BidReqCard;
