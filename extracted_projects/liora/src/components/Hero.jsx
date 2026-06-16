import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="hero-homecare">
      <div className="hero-shell">
        <div className="hero-frame">
          <div className="hero-bg">
            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ac8a92d3-83da-4d2d-9255-88cf93065051_3840w.webp?w=800&q=80" alt="Warm premium residential interior" />
          </div>

          <div className="hero-grid-lines">
            <div className="hero-grid-line"></div>
            <div className="hero-grid-line"></div>
            <div className="hero-grid-line"></div>
            <div className="hero-grid-line"></div>
          </div>

          <div className="hero-content">
            <div className="hero-copy hero-fade-up" style={{ animationDelay: '0.14s' }}>
              <div className="hero-eyebrow">
                <span className="hero-eyebrow-dot"></span>
                Premium residential home cleaning
              </div>

              <h1 className="hero-title">
                A cleaner home,<br />
                <span className="hero-title-accent hero-font-serif">beautifully maintained.</span>
              </h1>

              <p className="hero-description">
                Effortless, dependable home care for busy households. We handle the upkeep with precision so your space
                stays calm, polished, and ready for real life.
              </p>

              <div className="hero-actions">
                <a href="#quote" className="hero-btn-primary">
                  Get a Quote
                  <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
                </a>

                <a href="#services" className="hero-btn-secondary">
                  See Services
                </a>
              </div>

              <div className="hero-trust">
                <div className="hero-trust-stack">
                  <span className="hero-trust-dot"></span>
                  <span className="hero-trust-dot"></span>
                  <span className="hero-trust-dot"></span>
                </div>
                <div className="hero-trust-text">Trusted by 500+ households</div>
              </div>
            </div>

            <div className="hero-visual hero-fade-up" style={{ animationDelay: '0.32s' }}>
              <div className="hero-floating-card hero-float-soft">
                <span className="hero-card-kicker">The Standard</span>

                <h3 className="hero-card-title">Care that feels calm, structured, and dependable.</h3>

                <ul className="hero-card-list">
                  <li className="hero-card-item">
                    <iconify-icon className="hero-card-icon" icon="solar:shield-check-linear" width="18"></iconify-icon>
                    <div>
                      <strong>Carefully vetted professionals</strong>
                      <span>Trusted teams trained for premium residential spaces and consistent quality.</span>
                    </div>
                  </li>

                  <li className="hero-card-item">
                    <iconify-icon className="hero-card-icon" icon="solar:calendar-linear" width="18"></iconify-icon>
                    <div>
                      <strong>Flexible routine-based scheduling</strong>
                      <span>Weekly, bi-weekly, or tailored visits designed around your actual household rhythm.</span>
                    </div>
                  </li>

                  <li className="hero-card-item">
                    <iconify-icon className="hero-card-icon" icon="solar:leaf-linear" width="18"></iconify-icon>
                    <div>
                      <strong>Products chosen for modern homes</strong>
                      <span>Thoughtful materials and premium-safe care for surfaces, families, and pets.</span>
                    </div>
                  </li>
                </ul>

                <div className="hero-card-footer">
                  <span className="hero-card-meta">Detail-focused · Calm by design</span>
                  <a href="#services" className="hero-card-link">
                    Learn More
                    <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}