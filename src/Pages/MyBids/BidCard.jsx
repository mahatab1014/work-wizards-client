const BidCard = ({ data }) => {
  const { bid_deadline, bid_status, bidder_email, job_info } = data;

  return (
    <>
      <tr>
        <th>{job_info?.job_title}</th>
        <th>{bidder_email}</th>
        <th>{bid_deadline}</th>
        <th className="capitalize">{bid_status}</th>
        <th>
          <div
            className="tooltip tooltip-left"
            data-tip="Without accept your bid, you can't start/submit work"
          >
            <button
              className={
                bid_status === "pending"
                  ? "primary-button !btn-sm btn-disabled"
                  : "primary-button !btn-sm"
              }
            >
              Complete
            </button>
          </div>
        </th>
      </tr>
    </>
  );
};

export default BidCard;
