import { RevolvingDot } from "react-loader-spinner";
const SpinnerLoader = () => {
  return (
    <section>
      <div className="flex justify-center py-10">
        <RevolvingDot
          radius="45"
          strokeWidth="5"
          color="red"
          secondaryColor="#ddd"
          ariaLabel="revolving-dot-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </section>
  );
};

export default SpinnerLoader;
