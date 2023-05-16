import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <div className="container square-box d-flex flex-column justify-content-center align-items-center">
      <h6>
        Проверьте вашу скорость набора текста. Тренируйте метод слепой печати,
        при котором человек не смотрит на клавиатуру и использует все 10
        пальцев. Используя данный метод, люди развивают мышечную память, чтобы
        запоминать расположение необходимых клавиш.
      </h6>
      <div className="d-flex flex-row justify-content-between py-3 ">
        <Link to="/test">
          <button className="btn btn-primary">Start training</button>
        </Link>
        <button className="btn btn-primary">Start training</button>
      </div>
    </div>
  );
};
