import { Navigate, Outlet } from "react-router";
import { isAuthenticated } from "./isAuthenticated";

export const PublicRoute = () => {
  if (isAuthenticated()) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};
