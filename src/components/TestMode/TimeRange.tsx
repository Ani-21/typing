export const TimeRange = () => (
  <div className="d-flex gap-1">
    {[30, 60, 120].map((item) => (
      <button key={item} className="btn btn-primary">
        {item}
      </button>
    ))}
  </div>
);
