import "./NotFound.css";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../Shared/Context/useAuth.js";

export default function NotFound() {
  const navigate = useNavigate();

  const { currentUser } = useAuth();
  console.log("current user", currentUser);

  const directionHandler = () => {
    if (currentUser) {
      navigate("/templates");
    } else {
      navigate("/");
    }
  };
  return (
    <>
      <div className="error-number">404</div>

      <div className="cute-face">🥺</div>

      <h1 className="notfound-title">Oops! Page Not Found</h1>

      <div className="button-wrapper">
        <button className="home-button" onClick={directionHandler}>
          Take me Home
        </button>
      </div>
    </>
  );
}
