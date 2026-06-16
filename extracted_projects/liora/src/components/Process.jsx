import React from 'react';

export default function Process() {
  return (
    <section id="process" className="process-section">
      <div className="process-shell">
        <div className="process-grid">
          <div
            className="process-visual process-reveal"
            style={{ animationDelay: '0.08s' }}
          >
            <div className="process-stage">
              <div className="process-plane-back"></div>
              <div className="process-plane-mid"></div>

              <div className="process-plane-front">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b60b74f-a2ee-4cea-a269-c37cf03459b3_1600w.jpg"
                  alt="Beautifully maintained premium living room"
                />
              </div>

              <div className="process-chip-row top-left">
                <span className="process-step-number">01</span>
                <div className="process-chip">
                  <iconify-icon
                    icon="solar:clipboard-text-linear"
                    width="14"
                  ></iconify-icon>
                  Quote
                </div>
              </div>

              <div className="process-chip-row mid-right">
                <div className="process-chip">
                  <iconify-icon
                    icon="solar:calendar-linear"
                    width="14"
                  ></iconify-icon>
                  Plan
                </div>
                <span className="process-step-number">02</span>
              </div>

              <div className="process-chip-row bottom-left">
                <span className="process-step-number">03</span>
                <div className="process-chip">
                  <iconify-icon
                    icon="solar:home-smile-linear"
                    width="14"
                  ></iconify-icon>
                  Reset
                </div>
              </div>
            </div>
          </div>

          <div
            className="process-copy process-reveal"
            style={{ animationDelay: '0.16s' }}
          >
            <p className="process-kicker">Process Overview</p>

            <h2 className="process-title">
              From first request to a calmer home.
            </h2>

            <p className="process-description">
              A simple three-step experience designed to feel polished,
              low-friction, and easy to fit into real household routines.
            </p>

            <div className="process-steps">
              <div className="process-step">
                <div className="process-step-index">01</div>
                <div>
                  <h3 className="process-step-title">Request a Quote</h3>
                  <p className="process-step-text">
                    Tell us a bit about your home, priorities, and preferred
                    cadence so we can shape the right service recommendation.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <div className="process-step-index">02</div>
                <div>
                  <h3 className="process-step-title">Choose Your Plan</h3>
                  <p className="process-step-text">
                    We match the right service type and schedule, then confirm
                    the details in a way that feels clear and effortless.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <div className="process-step-index">03</div>
                <div>
                  <h3 className="process-step-title">Come Home to Reset</h3>
                  <p className="process-step-text">
                    Return to a space that feels calm, polished, and ready for
                    everyday life without the mental load of constant upkeep.
                  </p>
                </div>
              </div>
            </div>

            <div className="process-cta-wrap">
              <a href="#quote" className="process-cta">
                Request a Quote
                <iconify-icon
                  icon="solar:arrow-right-up-linear"
                  width="16"
                ></iconify-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}