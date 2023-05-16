import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Layout = () => {
  return (
    <div className="h-100">
      <Navbar />
      <Outlet />
    </div>
  );
};
