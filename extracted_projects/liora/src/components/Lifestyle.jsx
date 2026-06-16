import React from 'react';

export default function Lifestyle() {
  return (
    <section id="lifestyle" className="lifestyle-section">
      <div className="lifestyle-shell">
        <div className="lifestyle-grid">
          <div
            className="lifestyle-copy lifestyle-reveal"
            style={{ animationDelay: '0.08s' }}
          >
            <h2 className="lifestyle-title">
              <span className="lifestyle-title-line">More time for what</span>
              <span className="lifestyle-title-accent hero-font-serif">
                truly matters.
              </span>
            </h2>

            <p className="lifestyle-description">
              A beautifully maintained home is more than a visual standard — it changes
              how your week feels. Less mental load, less weekend catch-up, and more
              room for the life that happens inside it.
            </p>

            <div className="lifestyle-outcomes">
              <p className="lifestyle-outcomes-label">Everyday outcomes</p>

              <ul className="lifestyle-outcomes-list">
                <li>
                  <iconify-icon icon="solar:brain-linear" width="18"></iconify-icon>
                  <span>Reduced mental load</span>
                </li>
                <li>
                  <iconify-icon icon="solar:home-smile-linear" width="18"></iconify-icon>
                  <span>Guest-ready spaces</span>
                </li>
                <li>
                  <iconify-icon icon="solar:cup-hot-linear" width="18"></iconify-icon>
                  <span>Calmer mornings</span>
                </li>
              </ul>
            </div>

            <div className="lifestyle-note">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
                alt="Founder portrait"
                className="lifestyle-note-avatar"
              />
              <div>
                <p className="lifestyle-note-quote">
                  “We built Liora around one belief: a well-kept home should feel
                  effortless for the people living in it.”
                </p>
                <p className="lifestyle-note-meta">Alicia Moreau — Founder</p>
              </div>
            </div>

            <a href="#quote" className="lifestyle-cta">
              Request a Quote
              <iconify-icon
                icon="solar:arrow-right-up-linear"
                width="16"
              ></iconify-icon>
            </a>
          </div>

          <div
            className="lifestyle-visual lifestyle-reveal"
            style={{ animationDelay: '0.16s' }}
          >
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/54708568-76f8-402e-b7e1-931abd2b60e1_1600w.jpg"
              alt="Warm premium residential interior"
            />
          </div>
        </div>
      </div>
    </section>
  );
}