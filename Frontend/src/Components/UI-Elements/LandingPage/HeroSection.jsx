const HeroSection = () => {
  return (
    <main className="hero">
      <div className="container">
        <div className="floating-element bear">🦋</div>
        <div className="floating-element flower1">🌸</div>
        <div className="floating-element flower2">🦢</div>
        <div className="floating-element heart1">🌼</div>
        <div className="floating-element heart2">💕</div>
        <div className="floating-element star">⭐</div>
        <div className="floating-element rainbow">🌈</div>

        <div className="hero-content">
          <h1 className="hero-title">
            Create Your
            <span className="gradient-text"> Dream Portfolio</span>
            <span className="bunny">🐰</span>
          </h1>

          <p className="hero-description">
            Build stunning, adorable portfolios that make you shine! No coding
            required - just pure creativity and lots of cute magic 💖
          </p>

          <button className="cta-button">
            <span>Start Creating Free</span>
            <span className="button-icon">🎨</span>
          </button>

          <div className="happy-creators">
            <div className="avatars">
              <div className="avatar">🐱</div>
              <div className="avatar">🐰</div>
              <div className="avatar">🦄</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
