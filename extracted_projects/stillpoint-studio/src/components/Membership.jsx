import React, { useState } from 'react';

export default function Membership() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="membership" className="membership-section-v2">
      <div className="membership-shell-v2">
        <div className="membership-frame-v2">
          <div className="membership-inner-v2">
            <div className="membership-top-v2">
              <div className="membership-eyebrow-v2 reveal-fade">Recovery Membership</div>

              <h2 className="membership-title-v2 font-head reveal-trigger">
                <span className="reveal-line" style={{ transitionDelay: '0.1s' }}>Choose a recovery rhythm</span>
                <span className="reveal-line" style={{ transitionDelay: '0.24s' }}>that supports how you live.</span>
              </h2>

              <div className="membership-copy-v2">
                <p className="membership-text-v2 reveal-para" style={{ transitionDelay: '0.16s' }}>
                  Stillpoint memberships are designed to reduce friction and make restoration easier to return to.
                  Whether you want a lighter monthly rhythm or a more integrated weekly practice, each option is built
                  around calm access, thoughtful pacing, and repeatable recovery.
                </p>

                <div className="membership-toggle-wrap-v2 reveal-fade" style={{ transitionDelay: '0.28s' }}>
                  <div 
                    className="membership-toggle-v2 cursor-pointer"
                    onClick={() => setIsAnnual(!isAnnual)}
                  >
                    <span className={`membership-toggle-label-v2 ${!isAnnual ? 'active' : ''}`}>Monthly</span>
                    <div className="membership-toggle-switch-v2">
                      <div 
                        className="membership-toggle-knob-v2 transition-transform duration-200"
                        style={{ transform: isAnnual ? 'translateX(26px)' : 'translateX(0)' }}
                      ></div>
                    </div>
                    <span className={`membership-toggle-label-v2 ${isAnnual ? 'active' : ''}`}>Annually</span>
                    <span className="membership-toggle-save-v2">Save 20%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="membership-main-v2">
              <div className="membership-points-v2">
                <div className="membership-point-v2 reveal-fade" style={{ transitionDelay: '0.1s' }}>
                  <span className="membership-point-number-v2">01</span>
                  <div className="membership-point-content-v2">
                    <h3 className="membership-point-title-v2 font-head">Recovery that fits real routines</h3>
                    <p className="membership-point-text-v2">
                      Flexible access designed for people balancing training, work, stress, and the need to recover more
                      consistently.
                    </p>
                  </div>
                </div>

                <div className="membership-point-v2 reveal-fade" style={{ transitionDelay: '0.18s' }}>
                  <span className="membership-point-number-v2">02</span>
                  <div className="membership-point-content-v2">
                    <h3 className="membership-point-title-v2 font-head">Less friction, more consistency</h3>
                    <p className="membership-point-text-v2">
                      A recurring structure makes it easier to come back to the rituals that help your body reset,
                      restore, and move better.
                    </p>
                  </div>
                </div>

                <div className="membership-point-v2 reveal-fade" style={{ transitionDelay: '0.26s' }}>
                  <span className="membership-point-number-v2">03</span>
                  <div className="membership-point-content-v2">
                    <h3 className="membership-point-title-v2 font-head">Built for long-term recovery</h3>
                    <p className="membership-point-text-v2">
                      Choose the level of access that matches your current rhythm, then scale into a deeper recovery
                      practice over time.
                    </p>
                  </div>
                </div>

                <div className="membership-point-v2 reveal-fade" style={{ transitionDelay: '0.34s' }}>
                  <span className="membership-point-number-v2">04</span>
                  <div className="membership-point-content-v2">
                    <h3 className="membership-point-title-v2 font-head">Priority access with calmer planning</h3>
                    <p className="membership-point-text-v2">
                      Membership makes booking feel simpler and more intentional, so your recovery rhythm stays easier to
                      maintain over time.
                    </p>
                  </div>
                </div>

              </div>

              <div className="membership-cards-v2">
                <article className="membership-card-v2 featured reveal-fade" style={{ transitionDelay: '0.40s' }}>
                  <div className="membership-card-top-v2">
                    <div className="membership-card-topbar-v2">
                      <h3 className="membership-card-label-v2">Core Membership</h3>
                      <span className="membership-card-badge-v2">Most Chosen</span>
                    </div>

                    <h4 className="membership-card-name-v2 font-head">Core Rhythm</h4>

                    <div className="membership-price-v2">
                      <strong>{isAnnual ? '$119' : '$149'}</strong>
                      <span>/ month</span>
                    </div>

                    <p className="membership-card-desc-v2">
                      A balanced recurring plan designed for members who want a steady weekly recovery rhythm without
                      overcommitting.
                    </p>
                  </div>

                  <div className="membership-card-actions-v2">
                    <a href="#" className="membership-plan-btn-v2 primary">Choose Core Rhythm</a>
                    <a href="#" className="membership-plan-btn-v2 secondary">View Membership Details</a>
                  </div>

                  <div className="membership-card-bottom-v2">
                    <p className="membership-includes-v2">Included Access</p>
                    <p className="membership-includes-note-v2">
                      A strong foundation for making recovery part of your week.
                    </p>

                    <div className="membership-feature-list-v2">
                      <div className="membership-feature-row-v2">
                        <iconify-icon icon="solar:check-circle-bold"></iconify-icon>
                        <span>4 recovery sessions per month</span>
                      </div>
                      <div className="membership-feature-row-v2">
                        <iconify-icon icon="solar:check-circle-bold"></iconify-icon>
                        <span>Priority booking windows</span>
                      </div>
                      <div className="membership-feature-row-v2">
                        <iconify-icon icon="solar:check-circle-bold"></iconify-icon>
                        <span>Access to core rituals and reset sessions</span>
                      </div>
                      <div className="membership-feature-row-v2">
                        <iconify-icon icon="solar:check-circle-bold"></iconify-icon>
                        <span>Best for weekly or biweekly recovery</span>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="membership-card-v2 reveal-fade" style={{ transitionDelay: '0.55s' }}>
                  <div className="membership-card-top-v2">
                    <div className="membership-card-topbar-v2">
                      <h3 className="membership-card-label-v2">Unlimited Membership</h3>
                    </div>

                    <h4 className="membership-card-name-v2 font-head">Studio Access</h4>

                    <div className="membership-price-v2">
                      <strong>{isAnnual ? '$199' : '$249'}</strong>
                      <span>/ month</span>
                    </div>

                    <p className="membership-card-desc-v2">
                      Full access for members who want recovery more deeply integrated into their training, work rhythm,
                      and weekly flow.
                    </p>
                  </div>

                  <div className="membership-card-actions-v2">
                    <a href="#" className="membership-plan-btn-v2 secondary">Start Unlimited</a>
                    <a href="#" className="membership-plan-btn-v2 secondary">Compare Access</a>
                  </div>

                  <div className="membership-card-bottom-v2">
                    <p className="membership-includes-v2">Included Access</p>
                    <p className="membership-includes-note-v2">
                      Designed for higher-frequency use and deeper consistency.
                    </p>

                    <div className="membership-feature-list-v2">
                      <div className="membership-feature-row-v2">
                        <iconify-icon icon="solar:check-circle-bold"></iconify-icon>
                        <span>Unlimited monthly access</span>
                      </div>
                      <div className="membership-feature-row-v2">
                        <iconify-icon icon="solar:check-circle-bold"></iconify-icon>
                        <span>Expanded booking priority</span>
                      </div>
                      <div className="membership-feature-row-v2">
                        <iconify-icon icon="solar:check-circle-bold"></iconify-icon>
                        <span>Ideal for highly active routines</span>
                      </div>
                      <div className="membership-feature-row-v2">
                        <iconify-icon icon="solar:check-circle-bold"></iconify-icon>
                        <span>Best value for frequent visits</span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}