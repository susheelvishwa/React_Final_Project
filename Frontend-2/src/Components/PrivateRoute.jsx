import { AuthContext } from "../context/AuthContextProvider";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
  const { authDetails } = useContext(AuthContext);

  if (!authDetails?.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}
