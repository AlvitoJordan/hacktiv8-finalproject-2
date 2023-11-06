import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const routeAdmin = ["/dashboard", "/rekap", "/dashboard/availabled"];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const routeUser = ["/cart", "/detail"];
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const getUser = localStorage.getItem("userData");
  const user = JSON.parse(getUser);

  useEffect(() => {
    if (user?.role !== "admin" && routeAdmin.includes(pathname)) {
      navigate("/");
    }
    if (user?.role !== "user" && routeUser.includes(pathname)) {
      navigate("/");
    }
  }, [navigate, pathname, routeAdmin, routeUser, user?.role]);
  return children;
};

export default ProtectedRoute;
