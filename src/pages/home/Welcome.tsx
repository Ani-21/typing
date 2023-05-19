import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="h-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="py-3">Check your speed typing</h1>
      <div className="d-flex flex-row justify-content-between gap-5">
        <Link to="/test">
          <button className="btn btn-primary">Start training</button>
        </Link>
        <Link to="/history">
          <button className="btn btn-primary">Learn more</button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
