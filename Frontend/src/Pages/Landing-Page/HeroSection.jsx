import "./HeroSection.css";
import { useNavigate } from "react-router-dom";
export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <main className="hero">
      <div className="container">
        <div className="floating-element flower1">🌸</div>
        <div className="floating-element butterfly">🦋</div>
        <div className="floating-element flower2">🌼</div>
        <div className="floating-element swan">🦢</div>

        <div className="hero-content">
          <h1 className="hero-title">
            Create Your
            <span className="gradient-text"> Dream Portfolio</span>
            <span className="bunny">🐰</span>
          </h1>

          <p className="hero-description">
            Build stunning, adorable portfolios that make you shine! No coding
            required - just pure creativity and lots of cute magic🌷
          </p>

          <button
            className="cta-button"
            onClick={() => navigate("/authenticate")}>
            <span>Start Creating Free</span>
            <span className="button-icon">🎨</span>
          </button>
        </div>
      </div>
    </main>
  );
}
