import { Link } from "react-router-dom";
import logoLight from "/assets/images/logo/logo_light.png";
import ContinueWithSocialMedia from "./ContinueWithSocialMedia";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { loginUserWithEmailAndPassword } = useAuth();
  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    if (password.length < 6) {
      setErrorMessage("Please enter a valid password");
      return;
    }

    loginUserWithEmailAndPassword(email, password)
      .then((user) => {
        const userName = user.user.displayName;
        Swal.fire({
          title: `Login successful`,
          html: `Welcome back! <strong>${userName}</strong>`,
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
      })
      .catch((error) => {
        if (error.code === "auth/invalid-login-credentials") {
          setErrorMessage("Email or password is invalid");
        }
      });
  };
  return (
    <section className="bg-white dark:bg-gray-900 py-10">
      <div className="flex items-center justify-center">
        <form onSubmit={handleLogin} className="w-full max-w-md">
          <div className="flex justify-center mx-auto">
            <img className="w-auto sm:h-16" src={logoLight} alt="" />
          </div>

          <div className="flex items-center justify-center mt-6">
            <Link
              to="/login"
              className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white"
            >
              sign in
            </Link>

            <Link
              to="/registration"
              className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300"
            >
              sign up
            </Link>
          </div>

          {errorMessage && (
            <div className="mt-6">
              <p className="bg-primary-color px-3 py-1 text-white font-medium rounded-lg">
                {errorMessage}
              </p>
            </div>
          )}

          <div className="relative flex items-center mt-6">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            <input
              type="email"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email address"
              name="email"
              required
            />
          </div>

          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>
            <input
              type="password"
              className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Password"
              name="password"
              required
            />
          </div>

          <div className="mt-6">
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Sign In
            </button>

            <div className="mt-6 text-center ">
              <ContinueWithSocialMedia />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
