import { useEffect, useState } from "react";
import Layout from "../components/templates/Layout";
import { useLocation, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const routeAdmin = ["/rekap", "/availabled", "/disabled"];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const routeUser = ["/cart", "/detail"];
  const location = useLocation();
  const navigate = useNavigate();

  const { pathname } = location;
  const getUser = localStorage.getItem("userData");
  const user = JSON.parse(getUser);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const checkRoute = () => {
      setTimeout(() => {
        if (user?.role !== "admin" && routeAdmin.includes(pathname)) {
          navigate("/");
        }
        if (user?.role !== "user" && routeUser.includes(pathname)) {
          navigate("/");
        }
        if (user?.role === "admin" && pathname.startsWith("/detail/")) {
          navigate("/");
        }
        if (user?.role === "admin" && pathname.startsWith("/search/")) {
          navigate("/");
        }
        setloading(false);
      }, 1000);
    };
    checkRoute();
  }, [navigate, pathname, routeAdmin, routeUser, user?.role]);

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center space-x-3">
          <div className="animate-spin rounded-full h-10 w-10 border-y-4 border-primary"></div>
          <span className="text-4xl font-medium text-primary">Loading...</span>
        </div>
      </Layout>
    );
  }

  return children;
};

export default ProtectedRoute;
