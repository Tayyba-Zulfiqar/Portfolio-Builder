const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span className="logo-icon">🧸</span>
          <span className="logo-text">CutePortfolio</span>
        </div>
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up Free</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
