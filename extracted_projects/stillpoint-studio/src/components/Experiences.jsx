import React from 'react';

export default function Experiences() {
  return (
    <section id="experiences" className="ritual-panels-section">
      <div className="ritual-panels-shell">
        <div className="ritual-panels-frame">
          <div className="ritual-panels-header">
            <div className="ritual-panels-header-grid">
              <div>
                <p className="ritual-panels-kicker reveal-fade editorial-eyebrow" style={{ transitionDelay: '0s' }}>
                  Guided recovery experiences
                </p>
                <h2 className="ritual-panels-title font-head reveal-trigger">
                  <span className="reveal-line" style={{ transitionDelay: '0.1s' }}>
                    Recovery experiences
                  </span>
                  <span className="reveal-line" style={{ transitionDelay: '0.24s' }}>
                    designed to be felt,
                  </span>
                  <span className="reveal-line" style={{ transitionDelay: '0.38s' }}>
                    not just listed.
                  </span>
                </h2>
              </div>

              <div>
                <p className="ritual-panels-text reveal-para editorial-para" style={{ transitionDelay: '0.55s' }}>
                  Each ritual at Stillpoint is structured to restore capacity,
                  regulate stress, and support the body through calm, repeatable
                  recovery. Explore the four core experiences below.
                </p>
              </div>
            </div>
          </div>

          <div className="ritual-panels-grid">
            {/* PANEL 01 */}
            <article className="ritual-panel group reveal-fade editorial-panel" style={{ transitionDelay: '0.7s' }}>
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a15293f0-97d1-4dc6-b1ce-d5f3cb42fe84_800w.jpg" alt="Contrast Suite" className="ritual-panel-image" />
              <div className="ritual-panel-overlay"></div>
              <div className="ritual-panel-base">
                <span className="ritual-panel-index">Ritual 01</span>
                <h3 className="ritual-panel-title font-head">Contrast</h3>
              </div>
              <div className="ritual-panel-detail">
                <div className="ritual-panel-line"></div>
                <p className="ritual-panel-detail-title font-head">Contrast Suite</p>
                <p className="ritual-panel-detail-text">
                  Alternating heat and cold exposure designed to increase
                  circulation, reduce residual fatigue, and help the body return
                  to a more alert, restored state.
                </p>
                <div className="ritual-panel-tags">
                  <span>Cold Plunge</span>
                  <span>Infrared Heat</span>
                  <span>Recovery Reset</span>
                </div>
              </div>
            </article>

            {/* PANEL 02 */}
            <article className="ritual-panel group reveal-fade editorial-panel" style={{ transitionDelay: '0.90s' }}>
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/19453e4f-9a3f-4b6e-a99d-4abc941bb6e4_800w.jpg" alt="Mobility Ritual" className="ritual-panel-image" />
              <div className="ritual-panel-overlay"></div>
              <div className="ritual-panel-base">
                <span className="ritual-panel-index">Ritual 02</span>
                <h3 className="ritual-panel-title font-head">Mobility</h3>
              </div>
              <div className="ritual-panel-detail">
                <div className="ritual-panel-line"></div>
                <p className="ritual-panel-detail-title font-head">Mobility Ritual</p>
                <p className="ritual-panel-detail-text">
                  Guided recovery movement focused on opening the body,
                  restoring range, and releasing built-up tension through
                  slower, deliberate, intentional motion.
                </p>
                <div className="ritual-panel-tags">
                  <span>Guided Stretch</span>
                  <span>Restore Range</span>
                  <span>Recovery Flow</span>
                </div>
              </div>
            </article>

            {/* PANEL 03 */}
            <article className="ritual-panel group reveal-fade editorial-panel" style={{ transitionDelay: '1.10s' }}>
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0340f36-59a2-4400-bbe4-c1cd0cc179be_800w.jpg" alt="Breath Reset" className="ritual-panel-image" />
              <div className="ritual-panel-overlay"></div>
              <div className="ritual-panel-base">
                <span className="ritual-panel-index">Ritual 03</span>
                <h3 className="ritual-panel-title font-head">Breath</h3>
              </div>
              <div className="ritual-panel-detail">
                <div className="ritual-panel-line"></div>
                <p className="ritual-panel-detail-title font-head">Breath Reset</p>
                <p className="ritual-panel-detail-text">
                  Breath-led downregulation sessions that help quiet mental
                  overload, settle the nervous system, and create a more
                  grounded transition back into the day.
                </p>
                <div className="ritual-panel-tags">
                  <span>Breathwork</span>
                  <span>Nervous System</span>
                  <span>Reset</span>
                </div>
              </div>
            </article>

            {/* PANEL 04 */}
            <article className="ritual-panel group reveal-fade editorial-panel" style={{ transitionDelay: '1.30s' }}>
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e59849f5-c57a-4903-afaf-4d4965ecda8b_800w.jpg" alt="Recovery Membership" className="ritual-panel-image" />
              <div className="ritual-panel-overlay"></div>
              <div className="ritual-panel-base">
                <span className="ritual-panel-index">Ritual 04</span>
                <h3 className="ritual-panel-title font-head">Membership</h3>
              </div>
              <div className="ritual-panel-detail">
                <div className="ritual-panel-line"></div>
                <p className="ritual-panel-detail-title font-head">Recovery Membership</p>
                <p className="ritual-panel-detail-text">
                  A recurring rhythm of restoration with flexible access to
                  Stillpoint’s core experiences, so recovery becomes part of how
                  you live, train, and perform.
                </p>
                <div className="ritual-panel-tags">
                  <span>Monthly Rhythm</span>
                  <span>Priority Booking</span>
                  <span>Flexible Access</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}