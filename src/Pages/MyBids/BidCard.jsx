const BidCard = ({ data, handleCompleteWork }) => {
  const { _id, bid_deadline, bid_status, bidder_email, job_info } = data;

  return (
    <>
      <tr>
        <th>{job_info?.job_title}</th>
        <th>{bidder_email}</th>
        <th>{bid_deadline}</th>
        <th className="capitalize">{bid_status}</th>
        <th>
          {bid_status !== "completed" ? (
            <button
              onClick={() => handleCompleteWork(_id)}
              className={
                bid_status !== "in progress"
                  ? "primary-button !btn-sm btn-disabled"
                  : "primary-button !btn-sm"
              }
            >
              Complete
            </button>
          ) : (
            ""
          )}
        </th>
      </tr>
    </>
  );
};

export default BidCard;
