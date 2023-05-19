import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-100 d-flex py-4 align-items-center justify-content-evenly">
      <h5 className="mb-0">Blind Typing</h5>
      <nav className="d-flex gap-3">
        <Link to="/test">
          <a className="link-info">start test</a>
        </Link>
        <Link to="/learn">
          <a className="link-info">start learning</a>
        </Link>
      </nav>
    </header>
  );
};
