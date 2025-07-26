import "./Header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span className="logo-text">Portfolio Builder</span>
          <span className="logo-icon">🧸</span>
        </div>
        <div className="auth-buttons">
          <button
            className="login-btn"
            onClick={() => navigate("/authenticate?mode=login")}>
            Login
          </button>
          <button
            className="signup-btn"
            onClick={() => navigate("/authenticate?mode=signup")}>
            Sign Up Free
          </button>
        </div>
      </div>
    </header>
  );
}
