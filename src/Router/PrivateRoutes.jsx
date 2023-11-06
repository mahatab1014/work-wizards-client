import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";
import SpinnerLoader from "../Components/LoadingAnimation/SpinnerLoader";
const PrivateRoutes = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <SpinnerLoader />;
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname} replace></Navigate>;
};

export default PrivateRoutes;
