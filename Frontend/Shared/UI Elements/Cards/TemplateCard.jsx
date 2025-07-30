import "./TemplateCard.css";
import { useNavigate } from "react-router-dom";

export default function TemplateCard({
  id,
  themeClass,
  emojis,
  avatarClass,
  lineClass,
  title,
  description,
  btnClass,
  btnIcon,
  favIcon,
}) {
  const navigate = useNavigate();

  return (
    <div className={`cv-card ${themeClass}`}>
      <div className="emoji emoji-1">{emojis[0]}</div>
      <div className="emoji emoji-2">{emojis[1]}</div>
      <div className="emoji emoji-3">{emojis[2]}</div>

      <div className="bg-decoration"></div>

      <div className="cv-preview">
        <div className="cv-content">
          <div className="cv-header">
            <div className={`avatar ${avatarClass}`}></div>
            <div className="name-section">
              <div className="name-bar"></div>
              <div className="title-bar"></div>
            </div>
          </div>

          <div className="cv-body">
            <div className={`content-line full ${lineClass}`}></div>
            <div className={`content-line three-quarter ${lineClass}`}></div>
            <div className={`content-line five-sixth ${lineClass}`}></div>
          </div>

          <div className="cv-footer">
            <div className="footer-line half"></div>
            <div className="footer-line two-third"></div>
            <div className="footer-line one-third"></div>
          </div>
        </div>
        <div className={`hover-overlay ${themeClass}-overlay`}></div>
      </div>

      <div className="template-info">
        <div className="info-header">
          <h3 className={`template-title ${themeClass}-title`}>{title}</h3>
        </div>
        <p className="template-description">{description}</p>
      </div>

      <div className="explore-overlay">
        <div className="explore-content">
          <button
            className={`explore-btn ${btnClass}`}
            onClick={() => navigate(`/templates/${id}`)}>
            <span className="btn-icon">{btnIcon}</span>
            <span>Explore Template </span>
          </button>

          <div className="action-buttons">
            <button className="action-btn">
              <span>{favIcon}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
