import Tabs, { Tab } from "react-best-tabs";
import "react-best-tabs/dist/index.css";

const BrowseByCategory = () => {
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
        onClick={(event, tab) => console.log(event, tab)}
      >
        <Tab title="Web Development" className="mr-3">
          <div className="mt-3">Tab 1 content</div>
        </Tab>
        <Tab title="Digital Marketing" className="mr-3">
          <div className="mt-3">Tab 2 content</div>
        </Tab>
        <Tab title="Graphics Design" className="mr-3">
          <div className="mt-3">Tab 3 content</div>
        </Tab>
      </Tabs>
    </section>
  );
};

export default BrowseByCategory;
