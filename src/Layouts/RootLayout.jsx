import { Outlet, useNavigation } from "react-router-dom";
import PrimaryNav from "../Components/Navbar/PrimaryNav";
import SpinnerLoader from "../Components/LoadingAnimation/SpinnerLoader";
import FooterNav from "../Components/Navbar/FooterNav";

const RootLayout = () => {
  const navigation = useNavigation();
  return (
    <>
      <header className="sticky top-0 z-[999] backdrop-blur-xl shadow-lg">
        <PrimaryNav />
      </header>
      <main className="container mx-auto px-5">
        {navigation.state === "loading" ? <SpinnerLoader /> : <Outlet />}
      </main>
      <footer>
        <FooterNav />
      </footer>
    </>
  );
};

export default RootLayout;
