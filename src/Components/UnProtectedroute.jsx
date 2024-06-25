import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const UnProtectedRoute = ({ element }) => {
  const authState = useSelector((state) => state.auth);
  return !authState.user ? element : <Navigate to="/" />;
};

UnProtectedRoute.propTypes = {
  element: PropTypes.element,
};

export default UnProtectedRoute;
