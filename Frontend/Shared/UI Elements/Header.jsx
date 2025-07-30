import "./Header.css";
import { useNavigate, NavLink } from "react-router-dom";
import useAuth from "../Context/useAuth.js";

export default function Header() {
  const navigate = useNavigate();

  //context provider:
  const { currentUser, logout } = useAuth();

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span className="logo-text">Portfolio Builder</span>
          <span className="logo-icon">🧸</span>
        </div>
        {!currentUser && (
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
        )}
        {currentUser && (
          <div className="auth-buttons">
            <NavLink
              to="/templates"
              className={({ isActive }) =>
                isActive ? "templates-btn active" : "templates-btn"
              }>
              Templates
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "dashboard-btn active" : "dashboard-btn"
              }>
              Dashboard
            </NavLink>

            <button
              className="logout-btn"
              onClick={() => {
                logout();
                navigate("/");
              }}>
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
