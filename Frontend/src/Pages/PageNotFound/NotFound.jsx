import "./NotFound.css";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <div className="error-number">404</div>

      <div className="cute-face">🥺</div>

      <h1 className="notfound-title">Oops! Page Not Found</h1>

      <div className="button-wrapper">
        <button className="home-button" onClick={() => navigate("/")}>
          Take me Home
        </button>
      </div>
    </>
  );
}
