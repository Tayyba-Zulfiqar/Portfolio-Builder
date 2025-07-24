const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">🧸</span>
              <span className="logo-text">CutePortfolio</span>
            </div>
            <p className="footer-description">
              Making portfolio creation fun, beautiful, and accessible for
              everyone. Your creativity deserves the perfect showcase! ✨
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                🐦
              </a>
              <a href="#" className="social-link">
                📷
              </a>
              <a href="#" className="social-link">
                💼
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h3>Product</h3>
              <a href="#">Templates</a>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Examples</a>
            </div>

            <div className="link-group">
              <h3>Support</h3>
              <a href="#">Help Center</a>
              <a href="#">Tutorials</a>
              <a href="#">Contact Us</a>
              <a href="#">Community</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2025 CutePortfolio. Made with 💖 by creators, for creators.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
