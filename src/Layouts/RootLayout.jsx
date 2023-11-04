import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <header></header>
      <main className="container mx-auto px-5">
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default RootLayout;
