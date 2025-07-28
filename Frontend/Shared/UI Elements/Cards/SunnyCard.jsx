import "./Cards.css";
export default function SunnyCard() {
  return (
    <div className="cv-card orange-theme">
      <div className="emoji emoji-1">🌻</div>
      <div className="emoji emoji-2">🧡</div>
      <div className="emoji emoji-3">🌞</div>

      <div className="bg-decoration"></div>

      <div className="cv-preview">
        <div className="cv-content">
          <div className="cv-header">
            <div className="avatar orange-avatar"></div>
            <div className="name-section">
              <div className="name-bar"></div>
              <div className="title-bar"></div>
            </div>
          </div>
          <div className="cv-body">
            <div className="content-line full orange-line"></div>
            <div className="content-line three-quarter orange-line"></div>
            <div className="content-line five-sixth orange-line"></div>
          </div>
        </div>
        <div className="hover-overlay orange-overlay"></div>
      </div>

      <div className="template-info">
        <div className="info-header">
          <h3 className="template-title orange-title">Sunny CV ☀️</h3>
        </div>
        <p className="template-description">
          Warm & energetic design that radiates positivity 🍂
        </p>
      </div>

      <div className="explore-overlay">
        <div className="explore-content">
          <button className="explore-btn orange-btn">
            <span className="btn-icon">🐻</span>
            <span>Use this Template </span>
          </button>
          <div className="action-buttons">
            <button className="action-btn">
              <span>🧡</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
