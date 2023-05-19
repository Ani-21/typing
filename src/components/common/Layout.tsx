import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const Layout = () => {
  return (
    <div className="h-100 w-50 mx-auto">
      <Header />
      <div className="h-100 d-flex align-items-center justify-content-center">
        <Outlet />
      </div>
    </div>
  );
};
