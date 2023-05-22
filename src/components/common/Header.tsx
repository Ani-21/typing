import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const isOnTestPage = useLocation();
  return (
    <header className="w-100 d-flex py-4 align-items-center justify-content-evenly">
      <h3 className="mb-0">BLIND TYPING</h3>
      <nav className="d-flex gap-3">
        {isOnTestPage.pathname === "/test" ? (
          <Link to="/">
            <a className="link-info">go back</a>
          </Link>
        ) : (
          <Link to="/test">
            <a className="link-info">start test</a>
          </Link>
        )}
      </nav>
    </header>
  );
};
