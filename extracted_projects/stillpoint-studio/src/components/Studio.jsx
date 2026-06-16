import React from 'react';

export default function Studio() {
  return (
    <section id="studio-experience" className="studio-section">
      <div className="studio-shell">
        <div className="studio-frame">
          <div className="studio-grid">
            <div className="studio-copy">
              <div>
                <p className="studio-kicker reveal-fade" style={{ transitionDelay: '0s' }}>The studio experience</p>

                <h2 className="studio-title font-head reveal-trigger">
                  <span className="reveal-line" style={{ transitionDelay: '0.1s' }}>A space designed</span>
                  <span className="reveal-line" style={{ transitionDelay: '0.24s' }}>to slow the body</span>
                  <span className="reveal-line" style={{ transitionDelay: '0.38s' }}>before it restores it.</span>
                </h2>

                <p className="studio-text reveal-para" style={{ transitionDelay: '0.5s' }}>
                  Stillpoint is built as a recovery environment, not just a treatment menu. Material warmth, quieter
                  lighting, and intentional pacing are designed to help the nervous system settle before the rituals even
                  begin.
                </p>

                <div className="studio-note reveal-fade" style={{ transitionDelay: '0.62s' }}>
                  Every element is there to reduce friction — from arrival to exhale — so the experience feels
                  restorative,
                  architectural, and easy to return to.
                </div>
              </div>

              <div className="studio-points">
                <div className="studio-point reveal-fade" style={{ transitionDelay: '0.72s' }}>
                  <span className="studio-point-index">01</span>
                  <p className="studio-point-text">
                    Quiet materiality, warm surfaces, and softer light create an immediate downshift in pace.
                  </p>
                </div>

                <div className="studio-point reveal-fade" style={{ transitionDelay: '0.80s' }}>
                  <span className="studio-point-index">02</span>
                  <p className="studio-point-text">
                    Thermal, movement, and breath rituals are arranged to feel sequential, not overwhelming.
                  </p>
                </div>

                <div className="studio-point reveal-fade" style={{ transitionDelay: '0.88s' }}>
                  <span className="studio-point-index">03</span>
                  <p className="studio-point-text">
                    The space is structured to feel private, elevated, and calm enough to support repeat recovery.
                  </p>
                </div>
              </div>
            </div>

            <div className="studio-media">
              <div className="studio-main-card reveal-img">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3cc45272-bd4e-423d-94e0-2657b8ce7ba8_1600w.jpg" alt="Stillpoint studio interior" />
                <div className="studio-main-label">Designed environment</div>
              </div>

              <div className="studio-subgrid">
                <article className="studio-subcard reveal-fade" style={{ transitionDelay: '0.76s' }}>
                  <span className="studio-subcard-eyebrow">01 / Material warmth</span>
                  <h3 className="studio-subcard-title font-head">Material warmth</h3>
                  <p className="studio-subcard-text">
                    Natural stone, soft plaster, warm oak, and muted detail help the studio feel restorative before any
                    ritual begins.
                  </p>
                </article>

                <article className="studio-subcard reveal-fade" style={{ transitionDelay: '0.98s' }}>
                  <span className="studio-subcard-eyebrow">02 / Calm sequencing</span>
                  <h3 className="studio-subcard-title font-head">Calm sequencing</h3>
                  <p className="studio-subcard-text">
                    The experience is paced to move from arrival into recovery with less noise, less friction, and more
                    intention.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}