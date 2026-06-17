import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      (function () {
        const items = document.querySelectorAll(".service-catalog-reveal");
        if (!items.length) return;
  
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.12, rootMargin: "0px 0px -10% 0px" });
  
        items.forEach((item) => observer.observe(item));
      })();
    


      (function () {
      const items = document.querySelectorAll(".standard-care-reveal");
      if (!items.length) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -10% 0px" });

      items.forEach((item) => observer.observe(item));
    })();
    


      (function () {
      const items = document.querySelectorAll(".process-reveal");
      if (!items.length) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -10% 0px" });

      items.forEach((item) => observer.observe(item));
    })();
    


      (function () {
      const items = document.querySelectorAll(".lifestyle-reveal");
      if (!items.length) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -10% 0px" });

      items.forEach((item) => observer.observe(item));
    })();
    


      (function () {
      const track = document.getElementById("testimonialsCarouselTrack");
      const prevBtn = document.getElementById("testimonialsPrev");
      const nextBtn = document.getElementById("testimonialsNext");
      const indicators = document.querySelectorAll(".testimonials-indicator");
      const revealItems = document.querySelectorAll(".testimonials-reveal");

      if (!track || !prevBtn || !nextBtn || !indicators.length) return;

      let currentSlide = 0;
      const totalSlides = indicators.length;
      let autoPlay;

      function updateCarousel() {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;

        indicators.forEach((indicator, index) => {
          indicator.classList.toggle("is-active", index === currentSlide);
        });
      }

      function goToSlide(index) {
        currentSlide = index;
        updateCarousel();
      }

      function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
      }

      function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
      }

      function startAutoPlay() {
        stopAutoPlay();
        autoPlay = setInterval(nextSlide, 5200);
      }

      function stopAutoPlay() {
        if (autoPlay) clearInterval(autoPlay);
      }

      nextBtn.addEventListener("click", () => {
        nextSlide();
        startAutoPlay();
      });

      prevBtn.addEventListener("click", () => {
        prevSlide();
        startAutoPlay();
      });

      indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
          goToSlide(index);
          startAutoPlay();
        });
      });

      const carouselWrap = track.closest(".testimonials-carousel-wrap");
      if (carouselWrap) {
        carouselWrap.addEventListener("mouseenter", stopAutoPlay);
        carouselWrap.addEventListener("mouseleave", startAutoPlay);
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -10% 0px" });

      revealItems.forEach((item) => observer.observe(item));

      updateCarousel();
      startAutoPlay();
    })();
    


      (function () {
      const items = document.querySelectorAll(".final-conversion-reveal");
      if (!items.length) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -10% 0px" });

      items.forEach((item) => observer.observe(item));
    })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      
<div className="hero-nav-wrap">
<nav className="hero-nav hero-fade-up" style={{animationDelay: '0.05s'}}>
<a className="hero-brand" href="#hero">
<span className="hero-brand-mark">LH</span>
<span className="hero-brand-text">
<span className="hero-brand-name">Liora</span>
<span className="hero-brand-sub">Home Care</span>
</span>
</a>
<div className="hero-nav-links">
<a className="is-active" href="#hero">Home</a>
<a href="#services">Services</a>
<a href="#process">Process</a>
<a href="#reviews">Reviews</a>
<a href="#quote">Quote</a>
</div>
<a className="hero-nav-cta" href="#quote">Get a Quote</a>
</nav>
</div>

<section className="hero-homecare" id="hero">
<div className="hero-shell">
<div className="hero-frame">
<div className="hero-bg">
<img alt="Warm premium residential interior" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ac8a92d3-83da-4d2d-9255-88cf93065051_3840w.webp?w=800&amp;q=80"/>
</div>
<div className="hero-grid-lines">
<div className="hero-grid-line"></div>
<div className="hero-grid-line"></div>
<div className="hero-grid-line"></div>
<div className="hero-grid-line"></div>
</div>
<div className="hero-content">
<div className="hero-copy hero-fade-up" style={{animationDelay: '0.14s'}}>
<div className="hero-eyebrow">
<span className="hero-eyebrow-dot"></span>
              Premium residential home cleaning
            </div>
<h1 className="hero-title">
              A cleaner home,<br/>
<span className="hero-title-accent hero-font-serif">beautifully maintained.</span>
</h1>
<p className="hero-description">
              Effortless, dependable home care for busy households. We handle the upkeep with precision so your space
              stays calm, polished, and ready for real life.
            </p>
<div className="hero-actions">
<a className="hero-btn-primary" href="#quote">
                Get a Quote
                <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="hero-btn-secondary" href="#services">
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
<div className="hero-visual hero-fade-up" style={{animationDelay: '0.32s'}}>
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
<a className="hero-card-link" href="#services">
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

<section className="services-catalog" id="services">
<div className="services-catalog-shell">
<div className="services-catalog-head">
<h2 className="services-catalog-title">
          Service layers built for<br/>
<span className="services-catalog-title-accent hero-font-serif">real household rhythms.</span>
</h2>
<p className="services-catalog-description">
          Six carefully structured service options designed to keep your home calm, maintained, and ready for everyday
          life without friction.
        </p>
</div>
<div className="services-catalog-grid">

<div className="service-catalog-column is-outer">
<article className="service-catalog-card service-catalog-reveal" style={{animationDelay: '0.10s'}}>
<div className="service-catalog-media">
<img alt="Recurring cleaning service" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/11378375-ed4c-4209-89f8-a1ddf44ac859_800w.jpg"/>
</div>
<div className="service-catalog-body">
<h3 className="service-catalog-label">Recurring Cleaning</h3>
<p className="service-catalog-meta">Weekly / Bi-weekly / Monthly</p>
<p className="service-catalog-copy">
                Ongoing upkeep designed to maintain a polished, comfortable home with dependable rhythm and
                detail-focused
                consistency.
              </p>
<a className="service-catalog-link" href="#quote">
                Explore Service
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</article>
<article className="service-catalog-card service-catalog-reveal" style={{animationDelay: '0.18s'}}>
<div className="service-catalog-media">
<img alt="Deep reset service" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa19624e-fc36-4a40-a710-ea50852db8fa_800w.jpg"/>
</div>
<div className="service-catalog-body">
<h3 className="service-catalog-label">Deep Reset</h3>
<p className="service-catalog-meta">Seasonal / Detailed / Restorative</p>
<p className="service-catalog-copy">
                A more comprehensive level of care for the moments when your space needs a full return to order and
                freshness.
              </p>
<a className="service-catalog-link" href="#quote">
                Explore Service
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</article>
</div>

<div className="service-catalog-column is-middle">
<article className="service-catalog-card service-catalog-reveal" style={{animationDelay: '0.26s'}}>
<div className="service-catalog-media">
<img alt="Move in move out service" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b6dcc87-c197-407e-a503-16084fb42950_800w.jpg"/>
</div>
<div className="service-catalog-body">
<h3 className="service-catalog-label">Move In / Move Out</h3>
<p className="service-catalog-meta">Transition / Preparation / Reset</p>
<p className="service-catalog-copy">
                A precise handoff service for homes entering a new chapter — immaculate, cleared, and ready from the
                start.
              </p>
<a className="service-catalog-link" href="#quote">
                Explore Service
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</article>
<article className="service-catalog-card service-catalog-reveal" style={{animationDelay: '0.34s'}}>
<div className="service-catalog-media">
<img alt="Apartment refresh service" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/69e9711f-cb29-49b9-9312-17b3fc6172d1_800w.jpg"/>
</div>
<div className="service-catalog-body">
<h3 className="service-catalog-label">Apartment Refresh</h3>
<p className="service-catalog-meta">Compact / Efficient / Modern</p>
<p className="service-catalog-copy">
                Thoughtfully structured care for condos and smaller urban homes where efficiency and precision matter
                most.
              </p>
<a className="service-catalog-link" href="#quote">
                Explore Service
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</article>
</div>

<div className="service-catalog-column is-outer">
<article className="service-catalog-card service-catalog-reveal" style={{animationDelay: '0.42s'}}>
<div className="service-catalog-media">
<img alt="Host-ready styling service" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1f94b051-5d32-44ea-be8c-ca801e3e5e86_800w.jpg"/>
</div>
<div className="service-catalog-body">
<h3 className="service-catalog-label">Host-Ready Styling</h3>
<p className="service-catalog-meta">Guests / Events / Presentation</p>
<p className="service-catalog-copy">
                A presentation-focused clean for homes that need to feel composed, welcoming, and beautifully ready at
                short notice.
              </p>
<a className="service-catalog-link" href="#quote">
                Explore Service
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</article>
<article className="service-catalog-card service-catalog-reveal" style={{animationDelay: '0.50s'}}>
<div className="service-catalog-media">
<img alt="Custom home plan service" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5d14b464-fffc-4ede-804a-c9d77e7c30c8_800w.jpg"/>
</div>
<div className="service-catalog-body">
<h3 className="service-catalog-label">Custom Home Plan</h3>
<p className="service-catalog-meta">Tailored / Flexible / Ongoing</p>
<p className="service-catalog-copy">
                A personalized service structure for households with unique routines, priorities, and a more tailored
                care
                cadence.
              </p>
<a className="service-catalog-link" href="#quote">
                Explore Service
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</article>
</div>
</div>
<div className="services-catalog-cta-wrap">
<a className="services-catalog-button" href="#quote">Explore Services</a>
</div>
</div>

</section>

<section className="standard-care" id="standard">
<div className="standard-care-shell">
<div className="standard-care-head standard-care-reveal" style={{animationDelay: '0.08s'}}>
<div className="standard-care-head-copy">
<h2 className="standard-care-title">The standard of care.</h2>
<p className="standard-care-description">
            Every visit is designed around trust, consistency, and quiet precision — so the experience feels as refined
            as the result.
          </p>
</div>
<a className="standard-care-link" href="#quote">
          Request a Quote
          <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
<div className="standard-care-grid">
<article className="standard-care-card standard-care-reveal" style={{animationDelay: '0.14s'}}>
<div className="standard-care-card-badge-row">
<div className="standard-care-card-badge">
<iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
              Vetted
            </div>
<span className="standard-care-card-index">01</span>
</div>
<h3 className="standard-care-card-title">Vetted Professionals</h3>
<p className="standard-care-card-text">
            Every team member is selected for professionalism, discretion, and the ability to care for premium
            residential spaces with consistency.
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
<article className="standard-care-card standard-care-reveal" style={{animationDelay: '0.22s'}}>
<div className="standard-care-card-badge-row">
<div className="standard-care-card-badge">
<iconify-icon icon="solar:calendar-linear" width="16"></iconify-icon>
              Flexible
            </div>
<span className="standard-care-card-index">02</span>
</div>
<h3 className="standard-care-card-title">Flexible Scheduling</h3>
<p className="standard-care-card-text">
            Built around real household routines, with service plans that can adapt to weekly rhythms, travel periods,
            and shifting priorities.
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
<article className="standard-care-card standard-care-reveal" style={{animationDelay: '0.30s'}}>
<div className="standard-care-card-badge-row">
<div className="standard-care-card-badge">
<iconify-icon icon="solar:eye-linear" width="16"></iconify-icon>
              Detail
            </div>
<span className="standard-care-card-index">03</span>
</div>
<h3 className="standard-care-card-title">Attention to Detail</h3>
<p className="standard-care-card-text">
            We focus on the subtle signals of a truly maintained home — alignment, finish, surface care, and the details
            that create calm.
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
<article className="standard-care-card standard-care-reveal" style={{animationDelay: '0.38s'}}>
<div className="standard-care-card-badge-row">
<div className="standard-care-card-badge">
<iconify-icon icon="solar:leaf-linear" width="16"></iconify-icon>
              Materials
            </div>
<span className="standard-care-card-index">04</span>
</div>
<h3 className="standard-care-card-title">Premium Products</h3>
<p className="standard-care-card-text">
            Thoughtfully selected products and methods chosen for modern homes, refined finishes, and spaces shared with
            children or pets.
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

<section className="process-section" id="process">
<div className="process-shell">
<div className="process-grid">
<div className="process-visual process-reveal" style={{animationDelay: '0.08s'}}>
<div className="process-stage">
<div className="process-plane-back"></div>
<div className="process-plane-mid"></div>
<div className="process-plane-front">
<img alt="Beautifully maintained premium living room" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b60b74f-a2ee-4cea-a269-c37cf03459b3_1600w.jpg"/>
</div>
<div className="process-chip-row top-left">
<span className="process-step-number">01</span>
<div className="process-chip">
<iconify-icon icon="solar:clipboard-text-linear" width="14"></iconify-icon>
                Quote
              </div>
</div>
<div className="process-chip-row mid-right">
<div className="process-chip">
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon>
                Plan
              </div>
<span className="process-step-number">02</span>
</div>
<div className="process-chip-row bottom-left">
<span className="process-step-number">03</span>
<div className="process-chip">
<iconify-icon icon="solar:home-smile-linear" width="14"></iconify-icon>
                Reset
              </div>
</div>
</div>
</div>
<div className="process-copy process-reveal" style={{animationDelay: '0.16s'}}>
<p className="process-kicker">Process Overview</p>
<h2 className="process-title">From first request to a calmer home.</h2>
<p className="process-description">
            A simple three-step experience designed to feel polished, low-friction, and easy to fit into real household
            routines.
          </p>
<div className="process-steps">
<div className="process-step">
<div className="process-step-index">01</div>
<div>
<h3 className="process-step-title">Request a Quote</h3>
<p className="process-step-text">
                  Tell us a bit about your home, priorities, and preferred cadence so we can shape the right service
                  recommendation.
                </p>
</div>
</div>
<div className="process-step">
<div className="process-step-index">02</div>
<div>
<h3 className="process-step-title">Choose Your Plan</h3>
<p className="process-step-text">
                  We match the right service type and schedule, then confirm the details in a way that feels clear and
                  effortless.
                </p>
</div>
</div>
<div className="process-step">
<div className="process-step-index">03</div>
<div>
<h3 className="process-step-title">Come Home to Reset</h3>
<p className="process-step-text">
                  Return to a space that feels calm, polished, and ready for everyday life without the mental load of
                  constant upkeep.
                </p>
</div>
</div>
</div>
<div className="process-cta-wrap">
<a className="process-cta" href="#quote">
              Request a Quote
              <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

</section>

<section className="lifestyle-section" id="lifestyle">
<div className="lifestyle-shell">
<div className="lifestyle-grid">
<div className="lifestyle-copy lifestyle-reveal" style={{animationDelay: '0.08s'}}>
<h2 className="lifestyle-title">
<span className="lifestyle-title-line">More time for what</span>
<span className="lifestyle-title-accent hero-font-serif">truly matters.</span>
</h2>
<p className="lifestyle-description">
            A beautifully maintained home is more than a visual standard — it changes how your week feels. Less mental
            load, less weekend catch-up, and more room for the life that happens inside it.
          </p>
<div className="lifestyle-outcomes">
<p className="lifestyle-outcomes-label">Everyday outcomes</p>
<ul className="lifestyle-outcomes-list">
<li>
<iconify-icon icon="solar:brain-linear" width="18"></iconify-icon>
                Reduced mental load
              </li>
<li>
<iconify-icon icon="solar:home-smile-linear" width="18"></iconify-icon>
                Guest-ready spaces
              </li>
<li>
<iconify-icon icon="solar:cup-hot-linear" width="18"></iconify-icon>
                Calmer mornings
              </li>
</ul>
</div>
<div className="lifestyle-note">
<img alt="Founder portrait" className="lifestyle-note-avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
<div>
<p className="lifestyle-note-quote">“We built Liora around one belief: a well-kept home should feel effortless
                for the people living in it.”</p>
<p className="lifestyle-note-meta">Alicia Moreau — Founder</p>
</div>
</div>
<a className="lifestyle-cta" href="#quote">
            Request a Quote
            <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
<div className="lifestyle-visual lifestyle-reveal" style={{animationDelay: '0.16s'}}>
<img alt="Warm premium residential interior" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/54708568-76f8-402e-b7e1-931abd2b60e1_1600w.jpg"/>
</div>
</div>
</div>

</section>

<section className="testimonials-section" id="reviews">
<div className="testimonials-shell">
<div className="testimonials-head testimonials-reveal" style={{animationDelay: '0.08s'}}>
<span className="testimonials-kicker">Client Stories</span>
<h2 className="testimonials-title">
<span className="testimonials-title-line">What homeowners</span>
<span className="testimonials-title-accent hero-font-serif">notice most.</span>
</h2>
<p className="testimonials-description">
          Real feedback from households who wanted less friction, more consistency, and a home that always feels ready.
        </p>
</div>
<div className="testimonials-carousel-wrap testimonials-reveal" style={{animationDelay: '0.14s'}}>
<div className="testimonials-carousel-viewport">
<div className="testimonials-carousel-track" id="testimonialsCarouselTrack">

<div className="testimonials-slide">
<div className="testimonials-grid">
<article className="testimonial-card">
<div className="testimonial-avatar-row">
<div className="testimonial-avatar">SJ</div>
</div>
<div className="testimonial-stars">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="testimonial-quote">
                    “The attention to detail is unmatched. Walking into my home after each visit feels like
                    <span className="testimonial-quote-accent hero-font-serif">a complete reset.</span>
                    It has changed how I experience my weekends.”
                  </p>
<div className="testimonial-footer">
<div className="testimonial-name">Sarah Jenkins</div>
<div className="testimonial-detail">Recurring Care · Client Since 2023</div>
</div>
</article>
<article className="testimonial-card">
<div className="testimonial-avatar-row">
<div className="testimonial-avatar">MT</div>
</div>
<div className="testimonial-stars">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="testimonial-quote">
                    “I’ve tried multiple services over the years, but none have felt this polished. They respect the
                    space, they’re reliable, and the results are consistently flawless week after week.”
                  </p>
<div className="testimonial-footer">
<div className="testimonial-name">Michael T.</div>
<div className="testimonial-detail">Bi-Weekly Service · Client Since 2022</div>
</div>
</article>
<article className="testimonial-card">
<div className="testimonial-avatar-row">
<div className="testimonial-avatar">ER</div>
</div>
<div className="testimonial-stars">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="testimonial-quote">
                    “Booking was effortless, the team was incredibly professional, and coming home to a beautifully
                    reset kitchen before guests arrived felt like a luxury I don’t want to give up.”
                  </p>
<div className="testimonial-footer">
<div className="testimonial-name">Elena R.</div>
<div className="testimonial-detail">Host-Ready Styling · Client Since 2024</div>
</div>
</article>
</div>
</div>

<div className="testimonials-slide">
<div className="testimonials-grid">
<article className="testimonial-card">
<div className="testimonial-avatar-row">
<div className="testimonial-avatar">CL</div>
</div>
<div className="testimonial-stars">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="testimonial-quote">
                    “The consistency is what impressed me most. I never have to wonder how the home will look before
                    family visits or busy workweeks.”
                  </p>
<div className="testimonial-footer">
<div className="testimonial-name">Claire L.</div>
<div className="testimonial-detail">Custom Home Plan · Client Since 2023</div>
</div>
</article>
<article className="testimonial-card">
<div className="testimonial-avatar-row">
<div className="testimonial-avatar">DM</div>
</div>
<div className="testimonial-stars">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="testimonial-quote">
                    “Their move-in service made the entire transition feel lighter. The house was immaculate, organized,
                    and ready from the first day.”
                  </p>
<div className="testimonial-footer">
<div className="testimonial-name">Daniel M.</div>
<div className="testimonial-detail">Move In / Move Out · Client Since 2024</div>
</div>
</article>
<article className="testimonial-card">
<div className="testimonial-avatar-row">
<div className="testimonial-avatar">AP</div>
</div>
<div className="testimonial-stars">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="testimonial-quote">
                    “What I value most is how calm and dependable the whole experience feels. It saves time, yes, but it
                    also removes a surprising amount of mental load.”
                  </p>
<div className="testimonial-footer">
<div className="testimonial-name">Amelia P.</div>
<div className="testimonial-detail">Apartment Refresh · Client Since 2023</div>
</div>
</article>
</div>
</div>
</div>
</div>
<div className="testimonials-controls">
<button aria-label="Previous testimonials" className="testimonials-nav-btn" id="testimonialsPrev">
<iconify-icon icon="solar:alt-arrow-left-linear" width="18"></iconify-icon>
</button>
<div className="testimonials-indicators">
<button aria-label="Go to slide 1" className="testimonials-indicator is-active" data-slide="0"></button>
<button aria-label="Go to slide 2" className="testimonials-indicator" data-slide="1"></button>
</div>
<button aria-label="Next testimonials" className="testimonials-nav-btn" id="testimonialsNext">
<iconify-icon icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

</section>

<section className="final-conversion-section" id="quote">
<div className="final-conversion-shell">
<div className="final-conversion-intro final-conversion-reveal" style={{animationDelay: '0.04s'}}>
<span className="final-conversion-intro-kicker">Next Step</span>
<h2 className="final-conversion-intro-title">
          Tell us about your home.
        </h2>
<p className="final-conversion-intro-text">
          A few details is all we need to recommend the right service rhythm for your home.
        </p>
</div>
<div className="final-conversion-quote final-conversion-reveal" style={{animationDelay: '0.08s'}}>

<div className="final-conversion-context">
<span className="final-conversion-kicker">Tailored Quote</span>
<h2 className="final-conversion-title">
            Request your<br/>
<span className="final-conversion-title-accent hero-font-serif">tailored quote.</span>
</h2>
<p className="final-conversion-description">
            Tell us a bit about your home and your preferred routine. We’ll send back a clear, personalized quote
            designed around the way you actually live.
          </p>
<ul className="final-conversion-points">
<li>
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon>
              Transparent pricing with no hidden fees
            </li>
<li>
<iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon>
              Flexible scheduling that can adjust over time
            </li>
<li>
<iconify-icon icon="solar:shield-check-linear" width="18"></iconify-icon>
              Thoughtful service for modern homes, families, and pets
            </li>
</ul>
</div>

<div className="final-conversion-form-wrap">
<form className="final-conversion-form">
<div className="final-conversion-form-grid">
<div className="final-conversion-field">
<label className="final-conversion-field-label">First Name</label>
<input className="final-conversion-input" placeholder="Jane" type="text"/>
</div>
<div className="final-conversion-field">
<label className="final-conversion-field-label">Email Address</label>
<input className="final-conversion-input" placeholder="jane@example.com" type="email"/>
</div>
<div className="final-conversion-field">
<label className="final-conversion-field-label">Bedrooms</label>
<select className="final-conversion-select">
<option>Select</option>
<option>1 Bedroom</option>
<option>2 Bedrooms</option>
<option>3 Bedrooms</option>
<option>4+ Bedrooms</option>
</select>
</div>
<div className="final-conversion-field">
<label className="final-conversion-field-label">Bathrooms</label>
<select className="final-conversion-select">
<option>Select</option>
<option>1 Bathroom</option>
<option>2 Bathrooms</option>
<option>3 Bathrooms</option>
<option>4+ Bathrooms</option>
</select>
</div>
</div>
<div className="final-conversion-field">
<label className="final-conversion-field-label">Service Interest</label>
<div className="final-conversion-checkbox-wrap">
<label className="final-conversion-check">
<input type="checkbox"/>
<span className="final-conversion-check-box"></span>
<span className="final-conversion-check-text">Recurring Cleaning</span>
</label>
<label className="final-conversion-check">
<input type="checkbox"/>
<span className="final-conversion-check-box"></span>
<span className="final-conversion-check-text">Deep Reset</span>
</label>
<label className="final-conversion-check">
<input type="checkbox"/>
<span className="final-conversion-check-box"></span>
<span className="final-conversion-check-text">Move In / Move Out</span>
</label>
<label className="final-conversion-check">
<input type="checkbox"/>
<span className="final-conversion-check-box"></span>
<span className="final-conversion-check-text">Custom Home Plan</span>
</label>
</div>
</div>
<button className="final-conversion-submit" type="button">
            Get My Quote
            <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="final-conversion-faq final-conversion-reveal" style={{animationDelay: '0.16s'}}>
<div className="final-conversion-faq-head">
<h3 className="final-conversion-faq-title">Common questions.</h3>
<p className="final-conversion-faq-description">
            A few final details to make the process feel even easier before you request your quote.
          </p>
</div>
<div className="final-conversion-faq-list">
<details className="final-conversion-faq-item">
<summary>
<span>What is included in a standard recurring visit?</span>
<iconify-icon className="final-conversion-faq-icon" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</summary>
<div className="final-conversion-faq-answer">
              Our recurring visits typically include dusting surfaces, vacuuming and mopping floors, sanitizing
              bathrooms, wiping kitchen exteriors, and restoring the home to a calm, polished baseline.
            </div>
</details>
<details className="final-conversion-faq-item">
<summary>
<span>Do I need to be home during the service?</span>
<iconify-icon className="final-conversion-faq-icon" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</summary>
<div className="final-conversion-faq-answer">
              No. Many clients prefer to provide a key, entry code, or lockbox access so they can return to a fully
              refreshed space without interrupting their day.
            </div>
</details>
<details className="final-conversion-faq-item">
<summary>
<span>Do you bring your own supplies and equipment?</span>
<iconify-icon className="final-conversion-faq-icon" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</summary>
<div className="final-conversion-faq-answer">
              Yes. We arrive fully equipped with modern, carefully selected products and professional tools. We can also
              accommodate preferred products for specific surfaces when needed.
            </div>
</details>
<details className="final-conversion-faq-item">
<summary>
<span>How often can I book service?</span>
<iconify-icon className="final-conversion-faq-icon" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</summary>
<div className="final-conversion-faq-answer">
              We offer weekly, bi-weekly, monthly, and one-time services depending on your needs. Custom care cadences
              are also available for homes with more specific routines.
            </div>
</details>
</div>
</div>
</div>

</section>

<footer className="site-footer">
<div className="site-footer-shell">
<div className="site-footer-grid">
<div className="site-footer-brand">
<div className="site-footer-brand-mark">
<span className="site-footer-brand-square">LH</span>
<div className="site-footer-brand-name-wrap">
<span className="site-footer-brand-name">Liora</span>
<span className="site-footer-brand-sub">Home Care</span>
</div>
</div>
<p className="site-footer-brand-text">
            Premium residential home care designed for calm, consistency, and beautifully maintained spaces.
          </p>
</div>
<div>
<span className="site-footer-col-title">Explore</span>
<div className="site-footer-links">
<a href="#services">Services</a>
<a href="#process">Process</a>
<a href="#reviews">Reviews</a>
<a href="#faq">FAQ</a>
</div>
</div>
<div>
<span className="site-footer-col-title">Contact</span>
<div className="site-footer-contact">
<a href="mailto:hello@liorahomecare.com">hello@liorahomecare.com</a>
<a href="tel:+15149002400">+1 (514) 900-2400</a>
<p className="is-soft">Serving Montreal and surrounding areas.</p>
</div>
<div className="site-footer-hours-wrap">
<span className="site-footer-col-title">Hours</span>
<p className="site-footer-hours">
              Mon–Sat — 9:00–18:00<br/>
            Sunday by request
            </p>
</div>
</div>
<div>
<span className="site-footer-col-title">Have a Question?</span>
<p className="site-footer-note">
            A member of our team will respond within 24 hours and help recommend the right care rhythm for your home.
          </p>
<a className="site-footer-service-link" href="#quote">
            Request a Quote
            <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="site-footer-bottom">
<div className="site-footer-bottom-left">
<span className="site-footer-bottom-line">Built with care for modern homes.</span>
<span className="site-footer-bottom-line">© 2026 Liora Home Care.</span>
</div>
<div className="site-footer-bottom-right">
<div className="site-footer-meta-links">
<a href="#">Privacy</a>
<a href="#">Terms</a>
</div>
<div className="site-footer-social">
<a aria-label="Instagram" href="#">
<iconify-icon icon="mdi:instagram" width="16"></iconify-icon>
</a>
<a aria-label="Facebook" href="#">
<iconify-icon icon="mdi:facebook" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</footer>

    </>
  );
}
