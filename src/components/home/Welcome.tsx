import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h6>Check your speed typing and learn more...</h6>
      <div className="d-flex flex-row justify-content-between py-3 ">
        <Link to="/test">
          <button className="btn btn-primary">Start training</button>
        </Link>
        <button className="btn btn-primary">Start training</button>
      </div>
    </div>
  );
};
