import React from 'react';

export default function Services() {
  return (
    <section id="services" className="services-catalog">
      <div className="services-catalog-shell">
        <div className="services-catalog-head">
          <h2 className="services-catalog-title">
            Service layers built for<br />
            <span className="services-catalog-title-accent hero-font-serif">
              real household rhythms.
            </span>
          </h2>

          <p className="services-catalog-description">
            Six carefully structured service options designed to keep your home calm,
            maintained, and ready for everyday life without friction.
          </p>
        </div>

        <div className="services-catalog-grid">
          {/* Column 1 */}
          <div className="service-catalog-column is-outer">
            <article
              className="service-catalog-card service-catalog-reveal"
              style={{ animationDelay: '0.10s' }}
            >
              <div className="service-catalog-media">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/11378375-ed4c-4209-89f8-a1ddf44ac859_800w.jpg"
                  alt="Recurring cleaning service"
                />
              </div>

              <div className="service-catalog-body">
                <h3 className="service-catalog-label">Recurring Cleaning</h3>
                <p className="service-catalog-meta">Weekly / Bi-weekly / Monthly</p>
                <p className="service-catalog-copy">
                  Ongoing upkeep designed to maintain a polished, comfortable home with
                  dependable rhythm and detail-focused consistency.
                </p>
                <a href="#quote" className="service-catalog-link">
                  Explore Service
                  <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
                </a>
              </div>
            </article>

            <article
              className="service-catalog-card service-catalog-reveal"
              style={{ animationDelay: '0.18s' }}
            >
              <div className="service-catalog-media">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa19624e-fc36-4a40-a710-ea50852db8fa_800w.jpg"
                  alt="Deep reset service"
                />
              </div>

              <div className="service-catalog-body">
                <h3 className="service-catalog-label">Deep Reset</h3>
                <p className="service-catalog-meta">Seasonal / Detailed / Restorative</p>
                <p className="service-catalog-copy">
                  A more comprehensive level of care for the moments when your space
                  needs a full return to order and freshness.
                </p>
                <a href="#quote" className="service-catalog-link">
                  Explore Service
                  <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
                </a>
              </div>
            </article>
          </div>

          {/* Column 2 */}
          <div className="service-catalog-column is-middle">
            <article
              className="service-catalog-card service-catalog-reveal"
              style={{ animationDelay: '0.26s' }}
            >
              <div className="service-catalog-media">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b6dcc87-c197-407e-a503-16084fb42950_800w.jpg"
                  alt="Move in move out service"
                />
              </div>

              <div className="service-catalog-body">
                <h3 className="service-catalog-label">Move In / Move Out</h3>
                <p className="service-catalog-meta">Transition / Preparation / Reset</p>
                <p className="service-catalog-copy">
                  A precise handoff service for homes entering a new chapter —
                  immaculate, cleared, and ready from the start.
                </p>
                <a href="#quote" className="service-catalog-link">
                  Explore Service
                  <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
                </a>
              </div>
            </article>

            <article
              className="service-catalog-card service-catalog-reveal"
              style={{ animationDelay: '0.34s' }}
            >
              <div className="service-catalog-media">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/69e9711f-cb29-49b9-9312-17b3fc6172d1_800w.jpg"
                  alt="Apartment refresh service"
                />
              </div>

              <div className="service-catalog-body">
                <h3 className="service-catalog-label">Apartment Refresh</h3>
                <p className="service-catalog-meta">Compact / Efficient / Modern</p>
                <p className="service-catalog-copy">
                  Thoughtfully structured care for condos and smaller urban homes where
                  efficiency and precision matter most.
                </p>
                <a href="#quote" className="service-catalog-link">
                  Explore Service
                  <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
                </a>
              </div>
            </article>
          </div>

          {/* Column 3 */}
          <div className="service-catalog-column is-outer">
            <article
              className="service-catalog-card service-catalog-reveal"
              style={{ animationDelay: '0.42s' }}
            >
              <div className="service-catalog-media">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1f94b051-5d32-44ea-be8c-ca801e3e5e86_800w.jpg"
                  alt="Host-ready styling service"
                />
              </div>

              <div className="service-catalog-body">
                <h3 className="service-catalog-label">Host-Ready Styling</h3>
                <p className="service-catalog-meta">Guests / Events / Presentation</p>
                <p className="service-catalog-copy">
                  A presentation-focused clean for homes that need to feel composed,
                  welcoming, and beautifully ready at short notice.
                </p>
                <a href="#quote" className="service-catalog-link">
                  Explore Service
                  <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
                </a>
              </div>
            </article>

            <article
              className="service-catalog-card service-catalog-reveal"
              style={{ animationDelay: '0.50s' }}
            >
              <div className="service-catalog-media">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5d14b464-fffc-4ede-804a-c9d77e7c30c8_800w.jpg"
                  alt="Custom home plan service"
                />
              </div>

              <div className="service-catalog-body">
                <h3 className="service-catalog-label">Custom Home Plan</h3>
                <p className="service-catalog-meta">Tailored / Flexible / Ongoing</p>
                <p className="service-catalog-copy">
                  A personalized service structure for households with unique routines,
                  priorities, and a more tailored care cadence.
                </p>
                <a href="#quote" className="service-catalog-link">
                  Explore Service
                  <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
                </a>
              </div>
            </article>
          </div>
        </div>

        <div className="services-catalog-cta-wrap">
          <a href="#quote" className="services-catalog-button">
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}