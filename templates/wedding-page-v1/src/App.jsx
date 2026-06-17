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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Mobile navigation toggle
    (function () {
      const toggle = document.querySelector(".nav-toggle");
      const mobileMenu = document.getElementById("mobile-menu");
      const mobileLinks = mobileMenu.querySelectorAll("a");

      function closeMenu() {
        mobileMenu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-hidden", "true");
        toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      }

      toggle.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(isOpen));
        mobileMenu.setAttribute("aria-hidden", String(!isOpen));
        toggle.innerHTML = isOpen
          ? '<i class="fa-solid fa-xmark"></i>'
          : '<i class="fa-solid fa-bars"></i>';
      });

      mobileLinks.forEach((link) => {
        link.addEventListener("click", () => {
          closeMenu();
        });
      });

      window.addEventListener("resize", () => {
        if (window.innerWidth >= 768 && mobileMenu.classList.contains("open")) {
          closeMenu();
        }
      });
    })();

    // Countdown timer
    (function () {
      const weddingDate = new Date("2026-09-12T15:00:00+02:00").getTime();

      const daysEl = document.getElementById("days");
      const hoursEl = document.getElementById("hours");
      const minutesEl = document.getElementById("minutes");
      const secondsEl = document.getElementById("seconds");

      function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        if (distance <= 0) {
          daysEl.textContent = "0";
          hoursEl.textContent = "0";
          minutesEl.textContent = "0";
          secondsEl.textContent = "0";
          clearInterval(intervalId);
          return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.textContent = String(days);
        hoursEl.textContent = String(hours).padStart(2, "0");
        minutesEl.textContent = String(minutes).padStart(2, "0");
        secondsEl.textContent = String(seconds).padStart(2, "0");
      }

      updateCountdown();
      const intervalId = setInterval(updateCountdown, 1000);
    })();

    // Intersection Observer for fade-in sections
    (function () {
      const sections = document.querySelectorAll(".fade-section");
      if (!("IntersectionObserver" in window)) {
        sections.forEach((section) => section.classList.add("visible"));
        return;
      }

      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              obs.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.15,
        }
      );

      sections.forEach((section) => observer.observe(section));
    })();

    // RSVP form
    (function () {
      const form = document.getElementById("rsvp-form");
      const pills = document.querySelectorAll(".rsvp-pill");

      pills.forEach((pill) => {
        pill.addEventListener("click", () => {
          pills.forEach((p) => p.classList.remove("selected"));
          pill.classList.add("selected");
          const input = pill.querySelector("input[type='radio']");
          if (input) input.checked = true;
        });
      });

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for your RSVP!");
        form.reset();
        const yesPill = document.querySelector(".rsvp-pill[data-attendance='yes']");
        if (yesPill) {
          pills.forEach((p) => p.classList.remove("selected"));
          yesPill.classList.add("selected");
          const yesInput = yesPill.querySelector("input[type='radio']");
          if (yesInput) yesInput.checked = true;
        }
      });
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
      
<header className="site-header">
<div className="site-shell nav-inner">
<a aria-label="Return to top" className="logo" href="#hero">
<span className="logo-mark">aj</span>
<span>Anya &amp; Jude</span>
</a>
<nav aria-label="Primary" className="nav-links">
<a href="#story">Story</a>
<a href="#events">Events</a>
<a href="#gallery">Gallery</a>
<a className="nav-cta" href="#rsvp">
          RSVP
          <i className="fa-solid fa-heart"></i>
</a>
</nav>
<button aria-controls="mobile-menu" aria-expanded="false" aria-label="Toggle navigation" className="nav-toggle">
<i className="fa-solid fa-bars"></i>
</button>
</div>
<div aria-hidden="true" className="nav-mobile" id="mobile-menu">
<div className="nav-mobile-inner">
<a href="#story">
          Story
          <span>How it all began</span>
</a>
<a href="#events">
          Events
          <span>When &amp; where</span>
</a>
<a href="#gallery">
          Gallery
          <span>Little moments</span>
</a>
<a href="#rsvp">
          RSVP
          <span>Let us know</span>
</a>
</div>
</div>
</header>
<main>

<section className="hero" id="hero">
<div className="hero-content">
<div aria-hidden="true" className="hero-media">
<img alt="Wedding background" className="hero-bg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="hero-overlay">
<div>
<div className="hero-badge">
<i className="fa-solid fa-sparkles"></i>
              An Ethereal Garden Celebration
            </div>
<h1 className="hero-names">
<span>Anya</span>
<span className="hero-and">&amp;</span>
<span>Jude</span>
</h1>
<p className="hero-subtitle">
              Beneath the soft glow of garden lights, surrounded by the people we love most, we’re saying “forever”.
            </p>
<p className="hero-date">
              September 12 • 2026 • Tuscany
            </p>
<div className="hero-separator"></div>
<div aria-label="Countdown to wedding date" className="hero-countdown">
<div className="hero-countdown-label">Counting down to our day</div>
<div className="countdown-grid">
<div className="countdown-item">
<span className="countdown-value" id="days">0</span>
<span className="countdown-label">Days</span>
</div>
<div className="countdown-item">
<span className="countdown-value" id="hours">0</span>
<span className="countdown-label">Hours</span>
</div>
<div className="countdown-item">
<span className="countdown-value" id="minutes">0</span>
<span className="countdown-label">Minutes</span>
</div>
<div className="countdown-item">
<span className="countdown-value" id="seconds">0</span>
<span className="countdown-label">Seconds</span>
</div>
</div>
</div>
<div className="hero-scroll">
              Scroll to explore
              <i className="fa-solid fa-chevron-down"></i>
</div>
</div>
<div className="hero-bottom">
<div className="hero-meta">
<span><i className="fa-solid fa-map-pin"></i> Villa dei Fiori</span>
<span><i className="fa-solid fa-champagne-glasses"></i> Garden soirée</span>
</div>
</div>
</div>
</div>
</section>

<section className="fade-section" id="story">
<div className="section-heading">
<div className="section-kicker">Our Story</div>
<h2 className="section-title">From a chance meeting to an endless garden</h2>
<p className="section-description">
          What began as a serendipitous hello in a greenhouse café grew, slowly and softly, into the kind of love that feels like home.
        </p>
</div>
<div className="story">
<div className="story-text">
<div className="story-body">
<p>
              Anya had ducked into the little glasshouse café to escape a spring rainstorm. Jude was already there, reading
              amidst rows of potted herbs and climbing roses. There was only one empty seat—at his table.
            </p>
<p>
              One shared umbrella, two lukewarm cappuccinos, and a three-hour conversation later, the world outside the garden
              felt a little different. What followed were seasons of slow Sunday mornings, long drives with no destination, and
              the quiet joy of growing something together.
            </p>
<p>
              Years later, Jude proposed back at that same café, surrounded by the scent of jasmine and the familiar rustle of
              leaves. This September, under an open sky and among the people we love, we’re promising to keep choosing each other—
              in every season that’s still to come.
            </p>
<div className="story-meta">
<div className="story-meta-item">
<i className="fa-solid fa-mug-hot"></i>
                First hello • April 2019
              </div>
<div className="story-meta-item">
<i className="fa-solid fa-ring"></i>
                Engaged in the greenhouse
              </div>
</div>
</div>
</div>
<div className="story-image-wrap">
<div className="story-main">
<img alt="Couple in a garden" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="story-tag">
<i className="fa-solid fa-heart"></i>
<span>We can’t wait to begin this next chapter with <strong>you</strong> there.</span>
</div>
<div className="story-floater">
<div className="story-floater-inner">
<span>Since</span>
<span>2019</span>
<span>Growing side by side</span>
</div>
</div>
</div>
</div>
</section>

<section className="fade-section" id="events">
<div className="section-heading">
<div className="section-kicker">Events</div>
<h2 className="section-title">A day in the garden</h2>
<p className="section-description">
          We’d be honored to have you with us for both the ceremony and reception. Each moment has been planned with you in mind.
        </p>
</div>
<div className="events-grid">
<article className="event-card">
<div className="event-inner">
<div className="event-label">
<i className="fa-solid fa-sun"></i>
              Ceremony
            </div>
<h3 className="event-title">Vows in the Olive Grove</h3>
<div className="event-meta">
<div className="event-meta-row">
<i className="fa-regular fa-clock"></i>
<span>3:00 PM • Guests seated by 2:45 PM</span>
</div>
<div className="event-meta-row">
<i className="fa-solid fa-location-dot"></i>
<span>Villa dei Fiori, Tuscany • Main Garden</span>
</div>
<div className="event-meta-row">
<i className="fa-solid fa-shirt"></i>
<span>Garden formal • Soft neutrals &amp; florals welcomed</span>
</div>
</div>
<a className="event-cta" href="#">
<i className="fa-regular fa-calendar-plus"></i>
              Add to Calendar
            </a>
<p className="event-note">
              The ceremony will be outdoors on the grass. Please consider comfortable shoes for the garden setting.
            </p>
</div>
</article>
<article className="event-card">
<div className="event-inner">
<div className="event-label">
<i className="fa-solid fa-moon"></i>
              Reception
            </div>
<h3 className="event-title">Dinner Under the Stars</h3>
<div className="event-meta">
<div className="event-meta-row">
<i className="fa-regular fa-clock"></i>
<span>5:30 PM – Late</span>
</div>
<div className="event-meta-row">
<i className="fa-solid fa-location-dot"></i>
<span>Villa dei Fiori • Courtyard &amp; Glasshouse</span>
</div>
<div className="event-meta-row">
<i className="fa-solid fa-music"></i>
<span>Live band, dancing, and candlelit dinner</span>
</div>
</div>
<a className="event-cta" href="#">
<i className="fa-regular fa-calendar-plus"></i>
              Add to Calendar
            </a>
<p className="event-note">
              Kindly let us know any dietary needs in your RSVP so we can make sure there’s a plate that feels like you.
            </p>
</div>
</article>
</div>
</section>

<section className="fade-section" id="gallery">
<div className="section-heading">
<div className="section-kicker">Gallery</div>
<h2 className="section-title">Little glimpses of our garden</h2>
<p className="section-description">
          Just a few snapshots from the places and moments that mean the most to us. We can’t wait to fill this with wedding memories.
        </p>
</div>
<div className="gallery-grid">
<figure className="gallery-item">
<img alt="Couple in a garden" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<figcaption className="gallery-label">Greenhouse café</figcaption>
</figure>
<figure className="gallery-item">
<img alt="Wedding flowers" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<figcaption className="gallery-label">Wild florals</figcaption>
</figure>
<figure className="gallery-item">
<img alt="Olive grove" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<figcaption className="gallery-label">Olive grove</figcaption>
</figure>
<figure className="gallery-item">
<img alt="Tuscany sunset" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<figcaption className="gallery-label">Tuscan dusk</figcaption>
</figure>
<figure className="gallery-item">
<img alt="String lights" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<figcaption className="gallery-label">Soft lights</figcaption>
</figure>
<figure className="gallery-item">
<img alt="Champagne toast" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<figcaption className="gallery-label">A gentle toast</figcaption>
</figure>
</div>
</section>

<section className="fade-section" id="rsvp">
<div className="section-heading">
<div className="section-kicker">RSVP</div>
<h2 className="section-title">We’d love to save you a seat</h2>
<p className="section-description">
          Your presence is the most meaningful gift. Please let us know if you’ll be joining us so we can prepare a place just for you.
        </p>
</div>
<div className="rsvp-wrapper">
<div className="rsvp-card">
<div className="rsvp-inner">
<h3 className="rsvp-title">Kindly respond by July 15, 2026</h3>
<p className="rsvp-subtitle">
              If you have any questions about travel or accommodation, feel free to add them to your note—we’re happy to help.
            </p>
<form id="rsvp-form" novalidate="">
<div className="rsvp-grid">
<div className="form-field">
<label className="form-label" htmlFor="name">
                    Name
                    <span className="helper">Required</span>
</label>
<input className="form-input" id="name" name="name" placeholder="Your full name" required="" type="text"/>
</div>
<div className="form-field">
<label className="form-label" htmlFor="email">
                    Email
                    <span className="helper">For confirmation</span>
</label>
<input className="form-input" id="email" name="email" placeholder="you@example.com" required="" type="email"/>
</div>
<div className="form-field">
<label className="form-label" htmlFor="guests">
                    Number of guests
                    <span className="helper">Including you</span>
</label>
<input className="form-input" id="guests" max="10" min="1" name="guests" placeholder="1" type="number"/>
</div>
<div className="form-field">
<span className="form-label">
                    Will you be joining us?
                    <span className="helper">Select one</span>
</span>
<div aria-label="Attendance" className="rsvp-attendance" role="radiogroup">
<label className="rsvp-pill selected" data-attendance="yes">
<input checked="" name="attendance" type="radio" value="yes"/>
<i className="fa-solid fa-circle-check"></i>
                      Joyfully accepts
                    </label>
<label className="rsvp-pill" data-attendance="no">
<input name="attendance" type="radio" value="no"/>
<i className="fa-regular fa-circle-xmark"></i>
                      Regretfully declines
                    </label>
</div>
</div>
<div className="form-field full-row">
<label className="form-label" htmlFor="message">
                    Message
                    <span className="helper">Dietary needs, song requests, or a note</span>
</label>
<textarea className="form-textarea" id="message" name="message" placeholder="We’d love to hear from you."></textarea>
</div>
</div>
<div className="rsvp-footer">
<button className="rsvp-button" type="submit">
<i className="fa-solid fa-envelope-open-heart"></i>
                  Send RSVP
                </button>
<p className="rsvp-disclaimer">
                  By submitting, you’re helping us thoughtfully plan seating, dinner, and transport. Thank you for responding with care.
                </p>
</div>
</form>
</div>
</div>
</div>
</section>
</main>
<footer>
<div className="footer-inner">
<div>
<div className="footer-love">
          Made with love
          <i className="fa-solid fa-heart"></i>
          in our little garden
        </div>
<div className="footer-meta">
          Anya &amp; Jude • September 12, 2026 • Villa dei Fiori, Tuscany
        </div>
</div>
<div aria-label="Social media links" className="footer-social">
<a aria-label="Instagram" href="#">
<i className="fa-brands fa-instagram"></i>
</a>
<a aria-label="Pinterest" href="#">
<i className="fa-brands fa-pinterest"></i>
</a>
<a aria-label="Email" href="#">
<i className="fa-regular fa-envelope"></i>
</a>
</div>
</div>
</footer>


    </>
  );
}
