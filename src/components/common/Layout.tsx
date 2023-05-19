import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const Layout = () => {
  return (
    <div className="h-100 w-50 mx-auto">
      <Header />
      <Outlet />
    </div>
  );
};
