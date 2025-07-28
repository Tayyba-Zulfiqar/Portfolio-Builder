import "./Cards.css";
export default function PurpleCard() {
  return (
    <div className="cv-card pink-theme">
      <div className="emoji emoji-1">🦄</div>
      <div className="emoji emoji-2">💜</div>
      <div className="emoji emoji-3">🌈</div>

      <div className="bg-decoration"></div>

      <div className="cv-preview">
        <div className="cv-content">
          <div className="cv-header">
            <div className="avatar"></div>
            <div className="name-section">
              <div className="name-bar"></div>
              <div className="title-bar"></div>
            </div>
          </div>
          <div className="cv-body">
            <div className="content-line full"></div>
            <div className="content-line three-quarter"></div>
            <div className="content-line five-sixth"></div>
          </div>
          <div className="cv-footer">
            <div className="footer-line half"></div>
            <div className="footer-line two-third"></div>
            <div className="footer-line one-third"></div>
          </div>
        </div>
        <div className="hover-overlay"></div>
      </div>

      <div className="template-info">
        <div className="info-header">
          <h3 className="template-title">Purple CV 🐾</h3>
        </div>
        <p className="template-description">
          Design Inspired by Purple Aesthetics 💟
        </p>
      </div>

      <div className="explore-overlay">
        <div className="explore-content">
          <button className="explore-btn pink-btn">
            <span className="btn-icon">🐻‍❄️</span>
            <span>Use this Template </span>
          </button>
          <div className="action-buttons">
            <button className="action-btn">
              <span>❤️</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
