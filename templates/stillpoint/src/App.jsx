import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    (function () {
    const updateFlashlight = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    };

    document.querySelectorAll('.method-card').forEach(card => {
      card.addEventListener('mousemove', updateFlashlight);
    });

    const revealEls = document.querySelectorAll('.reveal, .reveal-trigger, .reveal-para, .reveal-fade, .reveal-img, .reveal-seq');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          if (entry.target.classList.contains('reveal')) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(el => observer.observe(el));

    const faqItems = document.querySelectorAll('.faq-item-v1');

    faqItems.forEach(item => {
      const btn = item.querySelector('.faq-question-v1');
      const answer = item.querySelector('.faq-answer-v1');

      if (item.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }

      btn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        faqItems.forEach(other => {
          other.classList.remove('active');
          const otherAnswer = other.querySelector('.faq-answer-v1');
          otherAnswer.style.maxHeight = null;
        });

        if (!isActive) {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });

    const faqFilterTags = document.querySelectorAll('.faq-filter-tag-v1');

    faqFilterTags.forEach(tag => {
      tag.addEventListener('click', () => {
        const selectedCategory = tag.dataset.category;

        faqFilterTags.forEach(otherTag => otherTag.classList.remove('active'));
        tag.classList.add('active');

        faqItems.forEach(item => {
          const itemCategory = item.dataset.category;
          const shouldShow = selectedCategory === 'all' || itemCategory === selectedCategory;

          item.style.display = shouldShow ? '' : 'none';

          if (!shouldShow) {
            item.classList.remove('active');
            const answer = item.querySelector('.faq-answer-v1');
            answer.style.maxHeight = null;
          }
        });

        const firstVisible = Array.from(faqItems).find(item => item.style.display !== 'none');

        if (firstVisible) {
          firstVisible.classList.add('active');
          const firstAnswer = firstVisible.querySelector('.faq-answer-v1');
          firstAnswer.style.maxHeight = firstAnswer.scrollHeight + 'px';
        }
      });
    });
  })();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="hero-shell" id="hero">
<div className="hero-card">
<div className="top-image-zone">
<img alt="Stillpoint Recovery Studio interior" className="reveal-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d3c8b1b5-0146-4359-99ac-d635afd038d6_3840w.jpg"/>
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
<a className="nav-link" href="#experiences">Therapies</a>
<a className="nav-link" href="#membership">Membership</a>
<a className="nav-link" href="#studio-experience">The Studio</a>
<a className="nav-link" href="#faq">FAQ</a>
</nav>
<a className="nav-book-btn" href="#">Book Session</a>
<button aria-label="Open menu" className="mobile-menu-btn">
<iconify-icon height="20" icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
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
<span className="reveal-word" style={{transitionDelay: '0.1s'}}>
                  Restore
                </span>
<span className="reveal-word" style={{transitionDelay: '0.2s'}}>
                  your
                </span>
<span className="reveal-word" style={{transitionDelay: '0.3s'}}>
                  body
                </span>
<span className="reveal-word" style={{transitionDelay: '0.4s'}}>
                  with
                </span>
</span>
<span className="block">
<span className="reveal-word" style={{transitionDelay: '0.5s'}}>
                  calm,
                </span>
<span className="reveal-word" style={{transitionDelay: '0.6s'}}>
                  structured
                </span>
<span className="reveal-word" style={{transitionDelay: '0.7s'}}>
                  recovery.
                </span>
</span>
</h1>
<div className="hero-divider reveal-fade" style={{transitionDelay: '0.7s'}}></div>
<p className="hero-text reveal-para" style={{transitionDelay: '0.8s'}}>
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
<span className="reveal-line" style={{transitionDelay: '0.1s'}}>
                  The science of recovery,
                </span>
<span className="reveal-line" style={{transitionDelay: '0.3s'}}>
                  translated into a
                </span>
<span className="reveal-line" style={{transitionDelay: '0.5s'}}>
                  premium ritual.
                </span>
</h2>
<div className="mt-8">
<p className="text-[11px] uppercase tracking-[0.18em] text-[var(--ink-soft)] opacity-60 mb-4">
                ( Approach )
              </p>
<p className="section-text max-w-[520px] reveal-para" style={{transitionDelay: '0.4s'}}>
                Recovery is treated as a designed experience, not an
                afterthought. Each element supports better movement, deeper
                exhale, and a more restorative transition back into daily life
                and training.
              </p>
<div className="cta-row mt-8 reveal-fade" style={{transitionDelay: '0.6s'}}>
<a className="btn-primary" href="#">
                  Explore Therapies
                  <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
<a className="btn-secondary" href="#">View Membership</a>
</div>
<div className="icon-pulse mt-6">
<iconify-icon className="text-3xl" icon="solar:asterisk-bold-duotone"></iconify-icon>
<div className="sonar-ring"></div>
</div>
</div>
</div>
<div className="method-right">
<p className="section-text max-w-[620px] method-right-text reveal-para" style={{transitionDelay: '0.2s'}}>
              Every session is structured around restoration, mobility, and
              nervous system downshift. Contrast, guided movement, and breath
              are brought together to create a recovery rhythm that feels
              calm, elevated, and repeatable.
            </p>
<div className="method-cards-grid">
<article className="method-card group cursor-pointer reveal-seq" style={{transitionDelay: '0.72s'}}>
<img alt="Contrast recovery room" className="method-card-image reveal-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d71cc83-2714-4c6c-a432-9d2fd65fbcfe_800w.jpg"/>
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
<article className="method-card group cursor-pointer reveal-seq" style={{transitionDelay: '0.94s'}}>
<img alt="Mobility and breath area" className="method-card-image reveal-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/96c79e30-2e87-4d9e-bf46-84e831415410_800w.jpg"/>
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

<section className="ritual-panels-section" id="experiences">
<div className="ritual-panels-shell">
<div className="ritual-panels-frame">
<div className="ritual-panels-header">
<div className="ritual-panels-header-grid">
<div>
<p className="ritual-panels-kicker reveal-fade editorial-eyebrow" style={{transitionDelay: '0s'}}>
                Guided recovery experiences
              </p>
<h2 className="ritual-panels-title font-head reveal-trigger">
<span className="reveal-line" style={{transitionDelay: '0.1s'}}>
                    Recovery experiences
                  </span>
<span className="reveal-line" style={{transitionDelay: '0.24s'}}>
                    designed to be felt,
                  </span>
<span className="reveal-line" style={{transitionDelay: '0.38s'}}>
                    not just listed.
                  </span>
</h2>
</div>
<div>
<p className="ritual-panels-text reveal-para editorial-para" style={{transitionDelay: '0.55s'}}>
                Each ritual at Stillpoint is structured to restore capacity,
                regulate stress, and support the body through calm, repeatable
                recovery. Explore the four core experiences below.
              </p>
</div>
</div>
</div>
<div className="ritual-panels-grid">

<article className="ritual-panel group reveal-fade editorial-panel" style={{transitionDelay: '0.7s'}}>
<img alt="Contrast Suite" className="ritual-panel-image" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a15293f0-97d1-4dc6-b1ce-d5f3cb42fe84_800w.jpg"/>
<div className="ritual-panel-overlay"></div>
<div className="ritual-panel-base">
<span className="ritual-panel-index">Ritual 01</span>
<h3 className="ritual-panel-title font-head">Contrast</h3>
</div>
<div className="ritual-panel-detail">
<div className="ritual-panel-line"></div>
<p className="ritual-panel-detail-title font-head">
                Contrast Suite
              </p>
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

<article className="ritual-panel group reveal-fade editorial-panel" style={{transitionDelay: '0.90s'}}>
<img alt="Mobility Ritual" className="ritual-panel-image" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/19453e4f-9a3f-4b6e-a99d-4abc941bb6e4_800w.jpg"/>
<div className="ritual-panel-overlay"></div>
<div className="ritual-panel-base">
<span className="ritual-panel-index">Ritual 02</span>
<h3 className="ritual-panel-title font-head">Mobility</h3>
</div>
<div className="ritual-panel-detail">
<div className="ritual-panel-line"></div>
<p className="ritual-panel-detail-title font-head">
                Mobility Ritual
              </p>
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

<article className="ritual-panel group reveal-fade editorial-panel" style={{transitionDelay: '1.10s'}}>
<img alt="Breath Reset" className="ritual-panel-image" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0340f36-59a2-4400-bbe4-c1cd0cc179be_800w.jpg"/>
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

<article className="ritual-panel group reveal-fade editorial-panel" style={{transitionDelay: '1.30s'}}>
<img alt="Recovery Membership" className="ritual-panel-image" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e59849f5-c57a-4903-afaf-4d4965ecda8b_800w.jpg"/>
<div className="ritual-panel-overlay"></div>
<div className="ritual-panel-base">
<span className="ritual-panel-index">Ritual 04</span>
<h3 className="ritual-panel-title font-head">Membership</h3>
</div>
<div className="ritual-panel-detail">
<div className="ritual-panel-line"></div>
<p className="ritual-panel-detail-title font-head">
                Recovery Membership
              </p>
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

<section className="studio-section" id="studio-experience">
<div className="studio-shell">
<div className="studio-frame">
<div className="studio-grid">
<div className="studio-copy">
<div className="">
<p className="studio-kicker reveal-fade" style={{transitionDelay: '0s'}}>The studio experience</p>
<h2 className="studio-title font-head reveal-trigger">
<span className="reveal-line" style={{transitionDelay: '0.1s'}}>A space designed</span>
<span className="reveal-line" style={{transitionDelay: '0.24s'}}>to slow the body</span>
<span className="reveal-line" style={{transitionDelay: '0.38s'}}>before it restores it.</span>
</h2>
<p className="studio-text reveal-para" style={{transitionDelay: '0.5s'}}>
                Stillpoint is built as a recovery environment, not just a treatment menu. Material warmth, quieter
                lighting, and intentional pacing are designed to help the nervous system settle before the rituals even
                begin.
              </p>
<div className="studio-note reveal-fade" style={{transitionDelay: '0.62s'}}>
                Every element is there to reduce friction — from arrival to exhale — so the experience feels
                restorative,
                architectural, and easy to return to.
              </div>
</div>
<div className="studio-points">
<div className="studio-point reveal-fade" style={{transitionDelay: '0.72s'}}>
<span className="studio-point-index">01</span>
<p className="studio-point-text">
                  Quiet materiality, warm surfaces, and softer light create an immediate downshift in pace.
                </p>
</div>
<div className="studio-point reveal-fade" style={{transitionDelay: '0.80s'}}>
<span className="studio-point-index">02</span>
<p className="studio-point-text">
                  Thermal, movement, and breath rituals are arranged to feel sequential, not overwhelming.
                </p>
</div>
<div className="studio-point reveal-fade" style={{transitionDelay: '0.88s'}}>
<span className="studio-point-index">03</span>
<p className="studio-point-text">
                  The space is structured to feel private, elevated, and calm enough to support repeat recovery.
                </p>
</div>
</div>
</div>
<div className="studio-media">
<div className="studio-main-card reveal-img">
<img alt="Stillpoint studio interior" className="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3cc45272-bd4e-423d-94e0-2657b8ce7ba8_1600w.jpg"/>
<div className="studio-main-label">Designed environment</div>
</div>
<div className="studio-subgrid">
<article className="studio-subcard reveal-fade" style={{transitionDelay: '0.76s'}}>
<span className="studio-subcard-eyebrow">01 / Material warmth</span>
<h3 className="studio-subcard-title font-head">Material warmth</h3>
<p className="studio-subcard-text">
                  Natural stone, soft plaster, warm oak, and muted detail help the studio feel restorative before any
                  ritual begins.
                </p>
</article>
<article className="studio-subcard reveal-fade" style={{transitionDelay: '0.98s'}}>
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

<section className="membership-section-v2" id="membership">
<div className="membership-shell-v2">
<div className="membership-frame-v2">
<div className="membership-inner-v2">
<div className="membership-top-v2">
<div className="membership-eyebrow-v2 reveal-fade">Recovery Membership</div>
<h2 className="membership-title-v2 font-head reveal-trigger">
<span className="reveal-line" style={{transitionDelay: '0.1s'}}>Choose a recovery rhythm</span>
<span className="reveal-line" style={{transitionDelay: '0.24s'}}>that supports how you live.</span>
</h2>
<div className="membership-copy-v2">
<p className="membership-text-v2 reveal-para" style={{transitionDelay: '0.16s'}}>
                Stillpoint memberships are designed to reduce friction and make restoration easier to return to.
                Whether you want a lighter monthly rhythm or a more integrated weekly practice, each option is built
                around calm access, thoughtful pacing, and repeatable recovery.
              </p>
<div className="membership-toggle-wrap-v2 reveal-fade" style={{transitionDelay: '0.28s'}}>
<div className="membership-toggle-v2">
<span className="membership-toggle-label-v2">Monthly</span>
<div className="membership-toggle-switch-v2">
<div className="membership-toggle-knob-v2"></div>
</div>
<span className="membership-toggle-label-v2 active">Annually</span>
<span className="membership-toggle-save-v2">Save 20%</span>
</div>
</div>
</div>
</div>
<div className="membership-main-v2">
<div className="membership-points-v2">
<div className="membership-point-v2 reveal-fade" style={{transitionDelay: '0.1s'}}>
<span className="membership-point-number-v2">01</span>
<div className="membership-point-content-v2">
<h3 className="membership-point-title-v2 font-head">Recovery that fits real routines</h3>
<p className="membership-point-text-v2">
                    Flexible access designed for people balancing training, work, stress, and the need to recover more
                    consistently.
                  </p>
</div>
</div>
<div className="membership-point-v2 reveal-fade" style={{transitionDelay: '0.18s'}}>
<span className="membership-point-number-v2">02</span>
<div className="membership-point-content-v2">
<h3 className="membership-point-title-v2 font-head">Less friction, more consistency</h3>
<p className="membership-point-text-v2">
                    A recurring structure makes it easier to come back to the rituals that help your body reset,
                    restore, and move better.
                  </p>
</div>
</div>
<div className="membership-point-v2 reveal-fade" style={{transitionDelay: '0.26s'}}>
<span className="membership-point-number-v2">03</span>
<div className="membership-point-content-v2">
<h3 className="membership-point-title-v2 font-head">Built for long-term recovery</h3>
<p className="membership-point-text-v2">
                    Choose the level of access that matches your current rhythm, then scale into a deeper recovery
                    practice over time.
                  </p>
</div>
</div>
<div className="membership-point-v2 reveal-fade" style={{transitionDelay: '0.34s'}}>
<span className="membership-point-number-v2">04</span>
<div className="membership-point-content-v2">
<h3 className="membership-point-title-v2 font-head">Priority access with calmer planning</h3>
<p className="membership-point-text-v2">
                    Membership makes booking feel simpler and more intentional, so your recovery rhythm stays easier to
                    maintain over
                    time.
                  </p>
</div>
</div>
</div>
<div className="membership-cards-v2">
<article className="membership-card-v2 featured reveal-fade" style={{transitionDelay: '0.40s'}}>
<div className="membership-card-top-v2">
<div className="membership-card-topbar-v2">
<h3 className="membership-card-label-v2">Core Membership</h3>
<span className="membership-card-badge-v2">Most Chosen</span>
</div>
<h4 className="membership-card-name-v2 font-head">Core Rhythm</h4>
<div className="membership-price-v2">
<strong>$149</strong>
<span>/ month</span>
</div>
<p className="membership-card-desc-v2">
                    A balanced recurring plan designed for members who want a steady weekly recovery rhythm without
                    overcommitting.
                  </p>
</div>
<div className="membership-card-actions-v2">
<a className="membership-plan-btn-v2 primary" href="#">Choose Core Rhythm</a>
<a className="membership-plan-btn-v2 secondary" href="#">View Membership Details</a>
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
<article className="membership-card-v2 reveal-fade" style={{transitionDelay: '0.55s'}}>
<div className="membership-card-top-v2">
<div className="membership-card-topbar-v2">
<h3 className="membership-card-label-v2">Unlimited Membership</h3>
</div>
<h4 className="membership-card-name-v2 font-head">Studio Access</h4>
<div className="membership-price-v2">
<strong>$249</strong>
<span>/ month</span>
</div>
<p className="membership-card-desc-v2">
                    Full access for members who want recovery more deeply integrated into their training, work rhythm,
                    and weekly flow.
                  </p>
</div>
<div className="membership-card-actions-v2">
<a className="membership-plan-btn-v2 secondary" href="#">Start Unlimited</a>
<a className="membership-plan-btn-v2 secondary" href="#">Compare Access</a>
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

<section className="outcomes-section-v1">
<div className="outcomes-shell-v1">
<div className="outcomes-frame-v1">
<div className="outcomes-inner-v1">
<div className="outcomes-top-v1">
<div className="outcomes-eyebrow-v1 reveal-fade">Recovery Outcomes</div>
<h2 className="outcomes-title-v1 font-head reveal-trigger">
<span className="reveal-line" style={{transitionDelay: '0.10s'}}>What changes when</span>
<span className="reveal-line" style={{transitionDelay: '0.24s'}}>recovery becomes routine.</span>
</h2>
<p className="outcomes-text-v1 reveal-para" style={{transitionDelay: '0.18s'}}>
              Stillpoint is designed to do more than provide a single reset. The aim is to help the body come down
              from overload, restore usable energy, and make recovery feel easier to return to consistently.
            </p>
</div>
<div className="outcomes-grid-v1">
<article className="outcome-card-v1 reveal-fade" style={{transitionDelay: '0.20s'}}>
<div className="outcome-card-media-v1">
<img alt="Recovery session focused on calm movement" className="outcome-card-image-v1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/03e3bf84-a049-41e8-9238-c44b7ba8abde_800w.jpg"/>
<div className="outcome-card-frame-v1"></div>
</div>
<div className="outcome-card-body-v1">
<span className="outcome-index-v1">01 — Nervous System Downshift</span>
<h3 className="outcome-title-v1 font-head">Feel more settled, faster.</h3>
<p className="outcome-text-v1">
                  Sessions are structured to reduce stress load, help the body settle faster, and create a more
                  grounded internal state that extends beyond the studio.
                </p>
</div>
</article>
<article className="outcome-card-v1 reveal-fade" style={{transitionDelay: '0.35s'}}>
<div className="outcome-card-media-v1">
<img alt="Physical recovery and release work" className="outcome-card-image-v1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ef35cb7d-0c6c-4939-b48e-97b474688382_1600w.jpg"/>
<div className="outcome-card-frame-v1"></div>
</div>
<div className="outcome-card-body-v1">
<span className="outcome-index-v1">02 — Physical Release</span>
<h3 className="outcome-title-v1 font-head">Move with less resistance.</h3>
<p className="outcome-text-v1">
                  The body feels less held, less compressed, and more ready to move, train, and recover with greater
                  ease across the rest of the week.
                </p>
</div>
</article>
<article className="outcome-card-v1 reveal-fade" style={{transitionDelay: '0.50s'}}>
<div className="outcome-card-media-v1">
<img alt="Sustainable weekly recovery rhythm" className="outcome-card-image-v1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/702af30c-e0ea-4555-999f-176514db6a5c_800w.jpg"/>
<div className="outcome-card-frame-v1"></div>
</div>
<div className="outcome-card-body-v1">
<span className="outcome-index-v1">03 — Sustainable Recovery Rhythm</span>
<h3 className="outcome-title-v1 font-head">Make recovery easier to keep.</h3>
<p className="outcome-text-v1">
                  Instead of treating restoration as an occasional fix, members build a steadier rhythm that supports
                  energy, resilience, and long-term recovery habits.
                </p>
</div>
</article>
</div>
</div>
</div>
</div>
</section>

<section className="testimonials-section-v1">
<div className="testimonials-shell-v1">
<div className="testimonials-frame-v1">
<div className="testimonials-inner-v1">
<div className="testimonials-head-v1">
<div className="testimonials-eyebrow-v1 reveal-fade">Member Perspective</div>
<h2 className="testimonials-title-v1 font-head reveal-trigger">
<span className="reveal-line" style={{transitionDelay: '0.10s'}}>What recovery starts</span>
<span className="reveal-line" style={{transitionDelay: '0.24s'}}>to feel like when it</span>
<span className="reveal-line" style={{transitionDelay: '0.38s'}}>becomes consistent.</span>
</h2>
<p className="testimonials-text-v1 reveal-para" style={{transitionDelay: '0.18s'}}>
              Stillpoint is designed to be returned to. These reflections capture what members tend to notice first:
              less friction, steadier energy, and a recovery rhythm that feels easier to keep.
            </p>
</div>
<div className="testimonials-grid-v1">
<article className="testimonial-featured-v1 reveal-fade" style={{transitionDelay: '0.12s'}}>
<div>
<div className="testimonial-featured-top-v1">
<div aria-label="5 star rating" className="testimonial-rating-v1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="testimonial-badge-v1">Most repeated feedback</span>
</div>
<h3 className="testimonial-quote-v1 font-head">
                  “It made recovery feel easier to return to, instead of one more thing to schedule.”
                </h3>
<p className="testimonial-body-v1">
                  I originally came in for contrast therapy, but what kept me coming back was the pacing of the whole
                  experience. The studio feels calm without being sleepy, and I leave feeling clearer, lighter, and more
                  put back together than when I arrived.
                </p>
</div>
<div className="testimonial-featured-footer-v1">
<div className="testimonial-person-v1">
<span className="testimonial-name-v1">Maya R.</span>
<span className="testimonial-role-v1">Creative Director · Weekly member</span>
</div>
<span className="testimonial-meta-v1">Mobility + Contrast + Breath</span>
</div>
</article>
<div className="testimonials-side-v1">
<article className="testimonial-card-v1 reveal-fade" style={{transitionDelay: '0.18s'}}>
<div className="testimonial-card-head-v1">
<div>
<div className="testimonial-card-name-v1">Daniel K.</div>
<div className="testimonial-card-role-v1">Founder · Biweekly visits</div>
</div>
<div aria-label="5 star rating" className="testimonial-rating-v1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
<p className="testimonial-card-text-v1">
                  “The biggest shift was how quickly I could move from work mode into a calmer state.”
                </p>
</article>
<article className="testimonial-card-v1 reveal-fade" style={{transitionDelay: '0.24s'}}>
<div className="testimonial-card-head-v1">
<div>
<div className="testimonial-card-name-v1">Sophie T.</div>
<div className="testimonial-card-role-v1">Trainer · Membership</div>
</div>
<div aria-label="5 star rating" className="testimonial-rating-v1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
<p className="testimonial-card-text-v1">
                  “It feels structured without being clinical. That balance is what makes it special.”
                </p>
</article>
<article className="testimonial-card-v1 reveal-fade" style={{transitionDelay: '0.30s'}}>
<div className="testimonial-card-head-v1">
<div>
<div className="testimonial-card-name-v1">Ethan L.</div>
<div className="testimonial-card-role-v1">Runner · Contrast + Breath</div>
</div>
<div aria-label="5 star rating" className="testimonial-rating-v1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
<p className="testimonial-card-text-v1">
                  “I started coming for physical recovery, but the nervous system reset is what I notice the most now.”
                </p>
</article>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="final-section-v1" id="faq">
<div className="final-shell-v1">
<div className="final-frame-v1">
<div className="final-inner-v1">
<div className="final-head-v1">
<div className="final-eyebrow-v1 reveal-fade">Questions + Next Step</div>
<h2 className="final-title-v1 font-head reveal-trigger">
<span className="reveal-line" style={{transitionDelay: '0.10s'}}>Everything you need</span>
<span className="reveal-line" style={{transitionDelay: '0.24s'}}>to know before you</span>
<span className="reveal-line" style={{transitionDelay: '0.38s'}}>begin your rhythm.</span>
</h2>
<p className="final-text-v1 reveal-para" style={{transitionDelay: '0.18s'}}>
              A few practical answers before your first visit — and when you’re ready, a simple way to take the next
              step.
            </p>
</div>
<div className="faq-grid-v1">
<div className="faq-side-v1 reveal-fade" style={{transitionDelay: '0.12s'}}>
<p className="faq-side-note-v1">
                Stillpoint is designed to feel approachable from the start. Whether you are coming in for recovery,
                nervous system reset, or a more consistent membership rhythm, the experience is built to feel guided,
                calm, and easy to return to.
              </p>
<div className="faq-filter-v1">
<p className="faq-filter-label-v1">Browse by category</p>
<div className="faq-filter-tags-v1">
<button className="faq-filter-tag-v1 active" data-category="all" type="button">
<span className="faq-filter-dot-v1"></span>
                  All Questions
                </button>
<button className="faq-filter-tag-v1" data-category="recovery" type="button">
<span className="faq-filter-dot-v1"></span>
                  Recovery Visits
                </button>
<button className="faq-filter-tag-v1" data-category="services" type="button">
<span className="faq-filter-dot-v1"></span>
                  Services &amp; Flow
                </button>
<button className="faq-filter-tag-v1" data-category="membership" type="button">
<span className="faq-filter-dot-v1"></span>
                  Membership
                </button>
</div>
<p className="faq-filter-note-v1">
                  Select a category to focus the questions on the right, or view everything at once.
                </p>
</div>
</div>
<div className="faq-list-v1">
<div className="faq-item-v1 reveal-fade active" data-category="membership" style={{transitionDelay: '0.16s'}}>
<button className="faq-question-v1" type="button">
<span>Do I need a membership to visit Stillpoint?</span>
<div className="faq-icon-v1">+</div>
</button>
<div className="faq-answer-v1">
<div className="faq-answer-inner-v1">
                    No. You can begin with an intro session or book an individual visit. Membership simply makes
                    recovery easier to return to if you want a more consistent rhythm.
                  </div>
</div>
</div>
<div className="faq-item-v1 reveal-fade" data-category="recovery" style={{transitionDelay: '0.22s'}}>
<button className="faq-question-v1" type="button">
<span>Is this only for athletes or highly active people?</span>
<div className="faq-icon-v1">+</div>
</button>
<div className="faq-answer-v1">
<div className="faq-answer-inner-v1">
                    Not at all. Stillpoint is for anyone who wants a calmer, more intentional way to recover — including
                    professionals, creatives, and people dealing with stress, fatigue, or physical tension.
                  </div>
</div>
</div>
<div className="faq-item-v1 reveal-fade" data-category="services" style={{transitionDelay: '0.28s'}}>
<button className="faq-question-v1" type="button">
<span>What should I expect during my first visit?</span>
<div className="faq-icon-v1">+</div>
</button>
<div className="faq-answer-v1">
<div className="faq-answer-inner-v1">
                    Your first visit is designed to feel guided and clear. You’ll be introduced to the space, the pacing
                    of the rituals, and the recovery flow that best fits your needs and comfort level.
                  </div>
</div>
</div>
<div className="faq-item-v1 reveal-fade" data-category="recovery" style={{transitionDelay: '0.34s'}}>
<button className="faq-question-v1" type="button">
<span>How often should I come to feel the benefits?</span>
<div className="faq-icon-v1">+</div>
</button>
<div className="faq-answer-v1">
<div className="faq-answer-inner-v1">
                    That depends on your routine, but most people notice the difference most clearly when recovery
                    becomes consistent rather than occasional. Even a simple weekly rhythm can change how the body
                    resets.
                  </div>
</div>
</div>
<div className="faq-item-v1 reveal-fade" data-category="services" style={{transitionDelay: '0.40s'}}>
<button className="faq-question-v1" type="button">
<span>Can I combine contrast, mobility, and breathwork?</span>
<div className="faq-icon-v1">+</div>
</button>
<div className="faq-answer-v1">
<div className="faq-answer-inner-v1">
                    Yes. The studio is designed around sequencing, so different modalities can work together in a way
                    that feels calm and complementary rather than overwhelming.
                  </div>
</div>
</div>
</div>
</div>
<div className="final-cta-wrap-v1">
<div className="final-cta-panel-v1 reveal-fade" style={{transitionDelay: '0.18s'}}>
<div className="final-cta-grid-v1">
<div className="final-cta-copy-v1">
<span className="final-cta-kicker-v1">Begin your first visit</span>
<h3 className="final-cta-title-v1 font-head">Start with one session, then build your rhythm from there.
                  </h3>
<p className="final-cta-text-v1">
                    Whether you want to explore the studio, try a guided intro, or compare membership options,
                    Stillpoint is built to feel calm from the very first step.
                  </p>
</div>
<div className="final-cta-actions-v1">
<a className="final-btn-v1 primary" href="#">Book Intro Session</a>
<a className="final-btn-v1 secondary" href="#">Explore Membership</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="site-footer-v1">
<div className="site-footer-shell-v1">
<div className="site-footer-frame-v1">
<div className="site-footer-inner-v1">
<div className="site-footer-top-v1">
<div className="site-footer-brand-v1 reveal-fade" style={{transitionDelay: '0.08s'}}>
<div className="site-footer-mark-v1 font-head">SP</div>
<h2 className="site-footer-name-v1 font-head">Stillpoint<br/>Recovery Studio</h2>
<p className="site-footer-text-v1">
                A premium recovery environment designed to make restoration feel calm, structured, and easy to return
                to.
              </p>
</div>
<div className="reveal-fade" style={{transitionDelay: '0.14s'}}>
<p className="site-footer-heading-v1">Navigate</p>
<div className="site-footer-links-v1">
<a className="site-footer-link-v1" href="#hero">Home</a>
<a className="site-footer-link-v1" href="#experiences">Experiences</a>
<a className="site-footer-link-v1" href="#studio-experience">Studio Experience</a>
<a className="site-footer-link-v1" href="#membership">Membership</a>
<a className="site-footer-link-v1" href="#faq">FAQ</a>
</div>
</div>
<div className="reveal-fade" style={{transitionDelay: '0.20s'}}>
<p className="site-footer-heading-v1">Connect</p>
<div className="site-footer-contact-v1">
<a className="site-footer-contact-item-v1" href="#">Book Intro Session</a>
<a className="site-footer-contact-item-v1" href="#">hello@stillpointstudio.com</a>
<a className="site-footer-contact-item-v1" href="#">Instagram</a>
<a className="site-footer-contact-item-v1" href="#">Visit the Studio</a>
</div>
</div>
</div>
<div className="site-footer-bottom-v1 reveal-fade" style={{transitionDelay: '0.24s'}}>
<div className="site-footer-meta-v1">
              © 2026 Stillpoint Recovery Studio. All rights reserved.
            </div>
<div className="site-footer-legal-v1">
<a href="#">Privacy</a>
<a href="#">Terms</a>
<a href="#">Accessibility</a>
</div>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
