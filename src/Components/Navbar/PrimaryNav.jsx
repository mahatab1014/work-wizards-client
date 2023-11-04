import { Link, NavLink } from "react-router-dom";
import logoLight from "/assets/images/logo/logo_light.png";
const PrimaryNav = () => {
  const menuList = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/add-jobs">Add Job</NavLink>
      </li>
      <li>
        <NavLink to="/my-posted-jobs">My Posted Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/my-bids">My Bids</NavLink>
      </li>
      <li>
        <NavLink to="/bid-requests">Bid Requests</NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar container mx-auto px-5 h-16">
      <div className="navbar-start">
        <div className="block lg:hidden">
          <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <div className="drawer z-[9999]">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              <img src={logoLight} alt="" className="w-2/4 mx-auto" />
                {menuList}
              </ul>
            </div>
          </div>
        </div>
        <Link to="/" className="">
          <img src={logoLight} alt="" className="w-4/5 sm:w-3/5 md:w-2/5" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuList}</ul>
      </div>
      <div className="navbar-end">
        <Link to="login" className="primary-button w-1/4 !btn-sm">Login</Link>
      </div>
    </nav>
  );
};

export default PrimaryNav;
