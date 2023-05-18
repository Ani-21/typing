import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Layout = () => {
  return (
    <div className="h-100 w-50 mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};
