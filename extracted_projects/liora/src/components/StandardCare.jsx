import React from 'react';

export default function StandardCare() {
  return (
    <section id="standard" className="standard-care">
      <div className="standard-care-shell">
        <div
          className="standard-care-head standard-care-reveal"
          style={{ animationDelay: '0.08s' }}
        >
          <div className="standard-care-head-copy">
            <h2 className="standard-care-title">The standard of care.</h2>
            <p className="standard-care-description">
              Every visit is designed around trust, consistency, and quiet precision —
              so the experience feels as refined as the result.
            </p>
          </div>

          <a href="#quote" className="standard-care-link">
            Request a Quote
            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
          </a>
        </div>

        <div className="standard-care-grid">
          <article
            className="standard-care-card standard-care-reveal"
            style={{ animationDelay: '0.14s' }}
          >
            <div className="standard-care-card-badge-row">
              <div className="standard-care-card-badge">
                <iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
                Vetted
              </div>
              <span className="standard-care-card-index">01</span>
            </div>

            <h3 className="standard-care-card-title">Vetted Professionals</h3>
            <p className="standard-care-card-text">
              Every team member is selected for professionalism, discretion, and the
              ability to care for premium residential spaces with consistency.
            </p>

            <ul className="standard-care-card-list">
              <li>
                <iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
                Background-checked and trained
              </li>
              <li>
                <iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
                Respectful, in-home professionalism
              </li>
            </ul>
          </article>

          <article
            className="standard-care-card standard-care-reveal"
            style={{ animationDelay: '0.22s' }}
          >
            <div className="standard-care-card-badge-row">
              <div className="standard-care-card-badge">
                <iconify-icon icon="solar:calendar-linear" width="16"></iconify-icon>
                Flexible
              </div>
              <span className="standard-care-card-index">02</span>
            </div>

            <h3 className="standard-care-card-title">Flexible Scheduling</h3>
            <p className="standard-care-card-text">
              Built around real household routines, with service plans that can adapt
              to weekly rhythms, travel periods, and shifting priorities.
            </p>

            <ul className="standard-care-card-list">
              <li>
                <iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
                Weekly, bi-weekly, or custom cadence
              </li>
              <li>
                <iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
                Easy adjustments when life changes
              </li>
            </ul>
          </article>

          <article
            className="standard-care-card standard-care-reveal"
            style={{ animationDelay: '0.30s' }}
          >
            <div className="standard-care-card-badge-row">
              <div className="standard-care-card-badge">
                <iconify-icon icon="solar:eye-linear" width="16"></iconify-icon>
                Detail
              </div>
              <span className="standard-care-card-index">03</span>
            </div>

            <h3 className="standard-care-card-title">Attention to Detail</h3>
            <p className="standard-care-card-text">
              We focus on the subtle signals of a truly maintained home — alignment,
              finish, surface care, and the details that create calm.
            </p>

            <ul className="standard-care-card-list">
              <li>
                <iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
                Consistent results visit after visit
              </li>
              <li>
                <iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
                A reset that feels immediately noticeable
              </li>
            </ul>
          </article>

          <article
            className="standard-care-card standard-care-reveal"
            style={{ animationDelay: '0.38s' }}
          >
            <div className="standard-care-card-badge-row">
              <div className="standard-care-card-badge">
                <iconify-icon icon="solar:leaf-linear" width="16"></iconify-icon>
                Materials
              </div>
              <span className="standard-care-card-index">04</span>
            </div>

            <h3 className="standard-care-card-title">Premium Products</h3>
            <p className="standard-care-card-text">
              Thoughtfully selected products and methods chosen for modern homes,
              refined finishes, and spaces shared with children or pets.
            </p>

            <ul className="standard-care-card-list">
              <li>
                <iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
                Surface-conscious product choices
              </li>
              <li>
                <iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
                Clean results without harsh presence
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}