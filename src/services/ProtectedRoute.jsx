import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const param = useParams();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const routeAdmin = ["/rekap", "/availabled", "/disabled"];
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
    if (user?.role === "admin" && pathname.startsWith("/detail/")) {
      navigate("/");
    }
  }, [navigate, pathname, routeAdmin, routeUser, user?.role]);

  return children;
};

export default ProtectedRoute;
