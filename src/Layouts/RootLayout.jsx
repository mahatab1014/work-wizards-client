import { Outlet } from "react-router-dom";
import PrimaryNav from "../Components/Navbar/PrimaryNav";

const RootLayout = () => {
  return (
    <>
      <header className="sticky top-0 z-[999]">
        <PrimaryNav />
      </header>
      <main className="container mx-auto px-5">
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default RootLayout;
