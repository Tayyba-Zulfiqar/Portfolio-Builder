import "./Cards.css";
export default function NatureCard() {
  return (
    <div className="cv-card green-theme">
      <div className="emoji emoji-1">🌼</div>
      <div className="emoji emoji-2">💚</div>
      <div className="emoji emoji-3">🌳</div>

      <div className="bg-decoration"></div>

      <div className="cv-preview">
        <div className="cv-content">
          <div className="cv-header">
            <div className="avatar green-avatar"></div>
            <div className="name-section">
              <div className="name-bar"></div>
              <div className="title-bar"></div>
            </div>
          </div>
          <div className="cv-body">
            <div className="content-line full green-line"></div>
            <div className="content-line three-quarter green-line"></div>
            <div className="content-line five-sixth green-line"></div>
          </div>
        </div>
        <div className="hover-overlay green-overlay"></div>
      </div>

      <div className="template-info">
        <div className="info-header">
          <h3 className="template-title green-title">Nature CV 🌿</h3>
        </div>
        <p className="template-description">
          Fresh Design inspired by nature 🍃
        </p>
      </div>

      <div className="explore-overlay">
        <div className="explore-content">
          <button className="explore-btn green-btn">
            <span className="btn-icon">🐼</span>
            <span>Use this Template </span>
          </button>
          <div className="action-buttons">
            <button className="action-btn">
              <span>💚</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
