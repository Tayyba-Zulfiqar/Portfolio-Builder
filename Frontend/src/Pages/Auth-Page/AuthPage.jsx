import "./AuthPage.css";

export default function AuthPage() {
  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <button className="close-button" aria-label="Close">
            &times;
          </button>

          <div className="form-header">
            <h1 className="form-title">Welcome Back! 🌸</h1>
            <p className="form-subtitle">Sign in to your account</p>
          </div>

          <form className="form">
            <div className="input-group">
              <input type="email" id="email" className="form-input" required />
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <div className="input-underline"></div>
            </div>

            <div className="input-group">
              <input
                type="password"
                id="password"
                className="form-input"
                required
              />
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="input-underline"></div>
            </div>

            <button type="submit" className="login-button">
              <span className="button-text">Login</span>
            </button>

            <p className="create-title">Don't have an account?</p>
            <button type="submit" className="login-button">
              <span className="button-text">SignUp</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
