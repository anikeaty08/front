import React from 'react';

export default function Hero() {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="hero" className="hero-shell">
      <div className="hero-card">
        <div className="top-image-zone">
          <img 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d3c8b1b5-0146-4359-99ac-d635afd038d6_3840w.jpg" 
            alt="Stillpoint Recovery Studio interior" 
            className="reveal-img" 
          />

          <div className="nav-wrap">
            <div className="nav-pill">
              <div className="flex items-center gap-3">
                <span className="brand-mark font-head">SP</span>
                <div>
                  <div className="font-head text-[13px] uppercase tracking-[0.24em] brand-name">
                    Stillpoint
                  </div>
                  <div className="mt-[2px] text-[10px] uppercase tracking-[0.18em] brand-sub">
                    Recovery Studio
                  </div>
                </div>
              </div>

              <nav className="flex items-center gap-8 text-sm">
                <a href="#experiences" className="nav-link">Therapies</a>
                <a href="#membership" className="nav-link">Membership</a>
                <a href="#studio-experience" className="nav-link">The Studio</a>
                <a href="#faq" className="nav-link">FAQ</a>
              </nav>

              <a href="#" className="nav-book-btn">Book Session</a>

              <button className="mobile-menu-btn" aria-label="Open menu">
                <iconify-icon icon="solar:hamburger-menu-linear" width="20" height="20"></iconify-icon>
              </button>
            </div>
          </div>

          <div className="hero-copy">
            <div className="eyebrow reveal-fade">
              <span className="eyebrow-dot"></span>
              Guided recovery experiences
            </div>

            <h1 className="hero-title font-head reveal-trigger">
              <span className="block">
                <span className="reveal-word" style={{ transitionDelay: '0.1s' }}>Restore</span>
                <span className="reveal-word" style={{ transitionDelay: '0.2s' }}>your</span>
                <span className="reveal-word" style={{ transitionDelay: '0.3s' }}>body</span>
                <span className="reveal-word" style={{ transitionDelay: '0.4s' }}>with</span>
              </span>
              <span className="block">
                <span className="reveal-word" style={{ transitionDelay: '0.5s' }}>calm,</span>
                <span className="reveal-word" style={{ transitionDelay: '0.6s' }}>structured</span>
                <span className="reveal-word" style={{ transitionDelay: '0.7s' }}>recovery.</span>
              </span>
            </h1>

            <div className="hero-divider reveal-fade" style={{ transitionDelay: '0.7s' }}></div>

            <p className="hero-text reveal-para" style={{ transitionDelay: '0.8s' }}>
              A restorative space for mobility, contrast therapy, breathwork,
              and nervous system reset — designed to help active people recover
              with more intention and better daily energy.
            </p>
          </div>
        </div>

        <div className="bottom-paper">
          <div className="method-layout">
            <div className="method-left">
              <p className="section-kicker">The Stillpoint method</p>
              <h2 className="section-title section-title-split font-head reveal-trigger">
                <span className="reveal-line" style={{ transitionDelay: '0.1s' }}>
                  The science of recovery,
                </span>
                <span className="reveal-line" style={{ transitionDelay: '0.3s' }}>
                  translated into a
                </span>
                <span className="reveal-line" style={{ transitionDelay: '0.5s' }}>
                  premium ritual.
                </span>
              </h2>

              <div className="mt-8">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--ink-soft)] opacity-60 mb-4">
                  ( Approach )
                </p>
                <p className="section-text max-w-[520px] reveal-para" style={{ transitionDelay: '0.4s' }}>
                  Recovery is treated as a designed experience, not an
                  afterthought. Each element supports better movement, deeper
                  exhale, and a more restorative transition back into daily life
                  and training.
                </p>

                <div className="cta-row mt-8 reveal-fade" style={{ transitionDelay: '0.6s' }}>
                  <a href="#" className="btn-primary">
                    Explore Therapies
                    <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
                  </a>
                  <a href="#" className="btn-secondary">View Membership</a>
                </div>

                <div className="icon-pulse mt-6">
                  <iconify-icon icon="solar:asterisk-bold-duotone" className="text-3xl"></iconify-icon>
                  <div className="sonar-ring"></div>
                </div>
              </div>
            </div>

            <div className="method-right">
              <p className="section-text max-w-[620px] method-right-text reveal-para" style={{ transitionDelay: '0.2s' }}>
                Every session is structured around restoration, mobility, and
                nervous system downshift. Contrast, guided movement, and breath
                are brought together to create a recovery rhythm that feels
                calm, elevated, and repeatable.
              </p>

              <div className="method-cards-grid">
                <article 
                  className="method-card group cursor-pointer reveal-seq" 
                  style={{ transitionDelay: '0.72s' }}
                  onMouseMove={handleMouseMove}
                >
                  <img 
                    src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d71cc83-2714-4c6c-a432-9d2fd65fbcfe_800w.jpg" 
                    alt="Contrast recovery room" 
                    className="method-card-image reveal-img" 
                  />
                  <div className="method-card-overlay"></div>

                  <div className="method-card-content">
                    <div className="flex items-end justify-between text-sm text-[var(--paper)]">
                      <div>
                        <span className="mb-1 block text-xs opacity-60">01</span>
                        <p className="font-medium tracking-tight">Contrast Suite</p>
                      </div>
                      <span className="opacity-70">Heat / Cold</span>
                    </div>
                  </div>
                </article>

                <article 
                  className="method-card group cursor-pointer reveal-seq" 
                  style={{ transitionDelay: '0.94s' }}
                  onMouseMove={handleMouseMove}
                >
                  <img 
                    src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/96c79e30-2e87-4d9e-bf46-84e831415410_800w.jpg" 
                    alt="Mobility and breath area" 
                    className="method-card-image reveal-img" 
                  />
                  <div className="method-card-overlay"></div>

                  <div className="method-card-content">
                    <div className="flex items-end justify-between text-sm text-[var(--paper)]">
                      <div>
                        <span className="mb-1 block text-xs opacity-60">02</span>
                        <p className="font-medium tracking-tight">
                          Mobility Ritual
                        </p>
                      </div>
                      <span className="opacity-70">Breath / Restore</span>
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