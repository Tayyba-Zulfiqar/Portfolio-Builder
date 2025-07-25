import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span className="logo-text">Portfolio Builder</span>
          <span className="logo-icon">🧸</span>
        </div>
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up Free</button>
        </div>
      </div>
    </header>
  );
}
