import { useParams, useNavigate } from "react-router-dom";

function Movie() {
  const { title } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <h1>Hello, from Movie page {title}</h1>
      <button className="btn" onClick={() => navigate("/")}>
        Go back
      </button>
    </>
  );
}

export { Movie };
