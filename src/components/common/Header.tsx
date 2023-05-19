import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-100 d-flex p-2 align-items-center justify-content-evenly">
      <h5>Blind Typing</h5>
      <nav className="d-flex gap-3">
        <Link to="/test">
          <a className="link-info">start test</a>
        </Link>
        <Link to="/test">
          <a className="link-info">start learning</a>
        </Link>
      </nav>
    </header>
  );
};
