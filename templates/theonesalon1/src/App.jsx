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



{
"@context": "https://schema.org",
"@type": "HairSalon",
"name": "THE ONE SALON",
"description": "THE ONE SALON — Ku tradita takohet me mjeshtërinë moderne. Sallon ekskluziv për meshkuj në Tiranë.",
"image": "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6a6f2231-a610-468d-adee-c18c545ea7ea_1600w.jpg",
"telephone": "+355696973690",
"address": {
"@type": "PostalAddress",
"streetAddress": "Dyqani nr. 15, Rruga Zallit, Pallati nr. 19",
"addressLocality": "Tiranë",
"addressCountry": "AL"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 41.3135361,
"longitude": 19.7988299
},
"openingHoursSpecification": {
"@type": "OpeningHoursSpecification",
"dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
"opens": "09:00",
"closes": "21:00"
},
"priceRange": "$$"
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // ── NAV ──
      const nav = document.getElementById('nav');
      let ticking = false;
      window.addEventListener('scroll', () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            nav.classList.toggle('scrolled', window.scrollY > 60);
            ticking = false;
          });
          ticking = true;
        }
      }, { passive: true });

      // ── HAMBURGER ──
      const hamburger = document.getElementById('hamburger');
      const mobileNav = document.getElementById('mobileNav');
      hamburger.addEventListener('click', () => {
        const isActive = hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isActive);
        document.body.style.overflow = isActive ? 'hidden' : '';
      });
      function closeMobileNav() {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
      // Close mobile nav on Escape
      document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) closeMobileNav();
      });

      // ── SCROLL REVEAL ──
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
      document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

      // ── TESTIMONIALS ──
      let currentTestimonial = 0;
      const testimonialItems = document.querySelectorAll('.testimonial-item');
      const testimonialDots = document.querySelectorAll('.testimonial-dot');
      let testimonialTimer;
      function goToTestimonial(index) {
        testimonialItems[currentTestimonial].classList.remove('active');
        testimonialDots[currentTestimonial].classList.remove('active');
        testimonialDots[currentTestimonial].setAttribute('aria-selected', 'false');
        currentTestimonial = index;
        testimonialItems[currentTestimonial].classList.add('active');
        testimonialDots[currentTestimonial].classList.add('active');
        testimonialDots[currentTestimonial].setAttribute('aria-selected', 'true');
        resetTimer();
      }
      function resetTimer() {
        clearInterval(testimonialTimer);
        testimonialTimer = setInterval(() => {
          goToTestimonial((currentTestimonial + 1) % testimonialItems.length);
        }, 5500);
      }
      resetTimer();

      // ── BOOKING FORM ──
      function handleBooking(e) {
        e.preventDefault();
        document.getElementById('successModal').classList.add('show');
        document.body.style.overflow = 'hidden';
        e.target.reset();
      }
      function closeModal() {
        document.getElementById('successModal').classList.remove('show');
        document.body.style.overflow = '';
      }
      document.getElementById('successModal').addEventListener('click', function(e) {
        if (e.target === this) closeModal();
      });
      document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && document.getElementById('successModal').classList.contains('show')) closeModal();
      });

      // Set min date for date input to today
      const dateInput = document.getElementById('date');
      if (dateInput) {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        dateInput.min = `${yyyy}-${mm}-${dd}`;
      }

      // ── SMOOTH ANCHOR SCROLL ──
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        });
      });
    
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
      

<nav className="nav" id="nav">
<a className="nav-logo" href="#">
        THE ONE SALON
        <span className="ampersand">&amp;</span>
</a>
<ul className="nav-links">
<li className=""></li>
<li className=""><a className="" href="#services">Shërbimet</a></li>
<li className=""><a className="" href="#gallery">Galeria</a></li>
<li className=""><a className="" href="#testimonials">Vlerësimet</a></li>
</ul>
<a className="nav-cta" href="tel:+355696973690">Rezervo Tani</a>
<div aria-expanded="false" aria-label="Menu" className="nav-hamburger" id="hamburger" role="button">
<span></span>
<span></span>
<span></span>
</div>
</nav>

<div aria-label="Navigation menu" aria-modal="true" className="mobile-nav" id="mobileNav" role="dialog">
<a href="#about" onclick="closeMobileNav()">Historia Jonë</a>
<div className="mobile-nav-divider"></div>
<a href="#services" onclick="closeMobileNav()">Shërbimet</a>
<div className="mobile-nav-divider"></div>
<a href="#gallery" onclick="closeMobileNav()">Galeria</a>
<div className="mobile-nav-divider"></div>
<a href="#testimonials" onclick="closeMobileNav()">Vlerësimet</a>
<div className="mobile-nav-divider"></div>
<a href="tel:+355696973690" onclick="closeMobileNav()">Rezervo Tani</a>
</div>

<section className="hero">
<div className="hero-content">
<div className="hero-tag">
<span className="hero-tag-line"></span>
<span className="hero-tag-text">
            Themeluar 2018 — Eksperience Premium
          </span>
</div>
<h1 className="hero-title">
<span className="">Ku Stili</span>
<span className="">Nuk Ka</span>
<span className="title-stroke">Kompromis</span>
</h1>
<p className="hero-desc">
          Hyni në një sallon ku çdo prerje tregon klas. Berberët tanë nuk
          kopjojnë moden, ata krijojnë stilin tënd.
        </p>
<div className="hero-actions">
<a className="btn-primary" href="tel:+355696973690">
<span className="">Rezervo Karrigen Tënde</span>
<iconify-icon height="17" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="17"></iconify-icon>
</a>
<a className="btn-outline" href="#services">
<iconify-icon height="17" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="17"></iconify-icon>
</a>
</div>
</div>
<div className="hero-image">
<img alt="Professional Hair Clippers Held by Barber" className="" fetchpriority="high" loading="eager" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6a6f2231-a610-468d-adee-c18c545ea7ea_1600w.jpg"/>
</div>
</section>

<div aria-hidden="true" className="marquee-section">
<div className="marquee-track">
<div className="marquee-item">
<span className="">Kujdes Premium</span>
<div className="dot"></div>
<span className="">Trajtim për Kacurrelat</span>
<div className="dot"></div>
<span className="">Stilim Mjekrre</span>
<div className="dot"></div>
<span className="">Qethje</span>
<div className="dot"></div>
<span className="">Stilim Flokësh</span>
<div className="dot"></div>
<span>Përvojë Luksoze</span>
<div className="dot"></div>
<span>Klubi i Zotërinjve</span>
<div className="dot"></div>
<span>Rrojë me Brisk</span>
<div className="dot"></div>
</div>
<div aria-hidden="true" className="marquee-item">
<span>Kujdes Premium</span>
<div className="dot"></div>
<span>Stilim Mjekrre</span>
<div className="dot"></div>
<span>Prerje Klasike</span>
<div className="dot"></div>
<span>Dizajn Flokësh</span>
<div className="dot"></div>
<span>Përvojë Luksoze</span>
<div className="dot"></div>
<span>Klubi i Zotërinjve</span>
<div className="dot"></div>
<span>Rrojë me Brisk</span>
<div className="dot"></div>
</div>
</div>
</div>

<section className="about" id="about">
<div className="about-images reveal">
<img alt="Modern Industrial Barbershop Interior" className="about-img-main" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a169e8ef-7acd-4c9f-b0a3-cc1abaceae9a_800w.png"/>
<img alt="Modern Industrial Barbershop Interior" className="about-img-secondary" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eaf61679-3977-4056-a89b-e9da3e6bc79d_800w.jpg"/>
</div>
<div className="about-content">
<div className="section-tag reveal">
<span className="section-tag-line"></span>
</div>
<h2 className="section-title reveal reveal-delay-1">
          Mirë se vini në
          <br/>
<span className="italic">The One Salon</span>
</h2>
<p className="about-text reveal reveal-delay-2">
          Hyni në The One Salon, ku vetëbesimi juaj është në qendër të vëmendjes
          dhe çdo vizitë është një hap drejt më të mirës suaj absolute. Ne nuk
          jemi vetëm stilistë, ne jemi krijues, duke vendosur standarde të reja
          për atë që një sallon flokësh jep. Në këtë hapësirë mirëpritëse, ne
          nuk ndjekim vetëm trendet, ne i vendosim ato. The One Salon është më
          shumë se thjesht një vend për të marrë një pamje të freskët, është një
          destinacion për të jetuar pasionin tuaj. Stafi ynë është i përkushtuar
          t'ju bëjë të ndiheni të rifreskuar, të frymëzuar dhe të gatshëm për të
          pushtuar botën. Ne nuk jemi të kënaqur duke qenë më të mirët, ne jemi
          këtu për të ripërcaktuar se çfarë do të thotë 'më e mira'. Ejani,
          përjetoni The One Salon, ku të jetosh pasionin tënd plotëson
          standardet dhe të ndihesh më mirë është trendi i ri. Ju mirëpresim.
        </p>
<div className="about-stats reveal reveal-delay-4 visible">
<div className="">
<div className="stat-number">7+</div>
<div className="stat-label">Vite Eksperience</div>
</div>
<div className="">
<div className="stat-number">10K+</div>
<div className="stat-label">Klientë të Kënaqur</div>
</div>
<div className="">
<div className="stat-number">4</div>
<div className="stat-label">Berber</div>
</div>
</div>
</div>
</section>

<section className="services" id="services">
<div className="services-header">
<div className="">
<div className="section-tag reveal">
<span className="section-tag-line"></span>
<span className="section-tag-text">Çfarë Ofrojmë</span>
</div>
<h2 className="section-title reveal reveal-delay-1">
            SHËRBIMET TONA
            <br/>
<span className="italic">Premium</span>
</h2>
</div>
<div className="services-header-right reveal reveal-delay-2">
<p className="">
            Çdo shërbim ofrohet me saktësi dhe kujdes, duke përdorur vetëm
            produktet më të mira dhe teknikat e provuara në kohë.
          </p>
</div>
</div>
<div className="services-grid">
<div className="service-card reveal">
<iconify-icon className="service-icon" height="34" icon="solar:scissors-linear" style={{strokeWidth: '1.5'}} width="34"></iconify-icon>
<iconify-icon className="service-arrow" height="18" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<h3 className="service-name">QETHJE</h3>
<p className="service-desc">
            Prerje e flokeve e personalizuar sipas formës së fytyrës dhe stilit
            tuaj.
          </p>
<div className="service-duration-row">
<span className="service-duration"></span>
</div>
</div>
<div className="service-card reveal reveal-delay-1">
<iconify-icon className="service-icon" height="34" icon="solar:fire-linear" style={{strokeWidth: '1.5'}} width="34"></iconify-icon>
<iconify-icon className="service-arrow" height="18" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<h3 className="service-name">MJEKËR</h3>
<p className="service-desc">
            Formësim dhe rregullim i mjekrrës për një pamje të pastër dhe të
            përkryer.
          </p>
<div className="service-duration-row">
<span className="service-duration"></span>
</div>
</div>
<div className="service-card reveal reveal-delay-2">
<iconify-icon className="service-icon" height="34" icon="solar:crown-linear" style={{strokeWidth: '1.5'}} width="34"></iconify-icon>
<iconify-icon className="service-arrow" height="18" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<h3 className="service-name">LYERJE FLOKUT</h3>
<p className="service-desc">
            Ngjyrosje profesionale që i jep flokëve tuaj pamje voluminoze, me
            rezultat natyral dhe të qëndrueshëm.
          </p>
<div className="service-duration-row">
<span className="service-duration"></span>
</div>
</div>
<div className="service-card reveal reveal-delay-3">
<iconify-icon className="service-icon" height="34" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="34"></iconify-icon>
<iconify-icon className="service-arrow" height="18" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<h3 className="service-name">LYERJE MJEKËRE</h3>
<p className="service-desc">
            Ngjyrosje e mjekrrës për një pamje të njëtrajtshme, të freskët dhe
            të rinuar, sipas dëshirës.
          </p>
<div className="service-duration-row">
<span className="service-duration"></span>
</div>
</div>
<div className="service-card reveal">
<iconify-icon className="service-icon" height="34" icon="solar:pallete-2-linear" style={{strokeWidth: '1.5'}} width="34"></iconify-icon>
<iconify-icon className="service-arrow" height="18" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<h3 className="service-name">HEQJE ME DYLL ose me PE</h3>
<p className="service-desc">
            Heqje e qimeve të padëshiruara me dyll ose pe, e shpejtë dhe
            efektive.
          </p>
<div className="service-duration-row">
<span className="service-duration"></span>
</div>
</div>
<div className="service-card reveal reveal-delay-1">
<iconify-icon className="service-icon" height="34" icon="solar:waterdrop-linear" style={{strokeWidth: '1.5'}} width="34"></iconify-icon>
<iconify-icon className="service-arrow" height="18" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<h3 className="service-name">STILIM</h3>
<p className="service-desc">
            Krijoni pamjen tuaj ideale me duart e stilistëve tanë të
            specializuar.
          </p>
<div className="service-duration-row">
<span className="service-duration"></span>
</div>
</div>
<div className="service-card reveal reveal-delay-2">
<iconify-icon className="service-icon" height="34" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}} width="34"></iconify-icon>
<iconify-icon className="service-arrow" height="18" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<h3 className="service-name">TRAJTIM PËR KACURRELET</h3>
<p className="service-desc">
            Trajtim i specializuar që i jep formë, shkëlqim dhe jetë kacurreleve
            tuaja natyrore. Proces 3-mujor.
          </p>
<div className="service-duration-row">
<span className="service-duration"></span>
</div>
</div>
<div className="service-card reveal reveal-delay-3">
<iconify-icon className="service-icon" height="34" icon="solar:face-scan-circle-linear" style={{strokeWidth: '1.5'}} width="34"></iconify-icon>
<iconify-icon className="service-arrow" height="18" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<h3 className="service-name">TRAJTIM FYTYRE</h3>
<p className="service-desc">
            Kujdes i plotë për lëkurën e fytyrës — pastrim, hidratim dhe
            rigjenerim.
          </p>
<div className="service-duration-row">
<span className="service-duration"></span>
</div>
</div>
</div>
</section>

<section className="gallery" id="gallery">
<div className="gallery-header">
<div className="section-tag reveal" style={{justifyContent: 'center'}}>
<span className="section-tag-line"></span>
<span className="section-tag-text">Puna Jonë</span>
<span className="section-tag-line"></span>
</div>
<h2 className="section-title reveal reveal-delay-1">
          MJESHTËRIA
          <span className="italic">Në</span>
          DETAJE
        </h2>
</div>
<div className="gallery-grid">
<div className="gallery-item reveal">
<img alt="Side Profile of Men's Taper Fade Haircut" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/15ca4bba-15bc-49c2-b42a-6e140c3f3dec_800w.jpg"/>
<div className="gallery-overlay">
<span className="gallery-overlay-text"></span>
</div>
</div>
<div className="gallery-item reveal reveal-delay-1">
<img alt="Modern Men's Taper Fade Haircut" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/887afcd5-45a0-4d18-8a97-6745b2ea122a_800w.jpg"/>
<div className="gallery-overlay">
<span className="gallery-overlay-text"></span>
</div>
</div>
<div className="gallery-item reveal reveal-delay-2">
<img alt="Professional Hair Clippers Held by Barber" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6a6f2231-a610-468d-adee-c18c545ea7ea_800w.jpg"/>
<div className="gallery-overlay">
<span className="gallery-overlay-text"></span>
</div>
</div>
<div className="gallery-item reveal reveal-delay-1">
<img alt="Modern Industrial Barbershop Interior" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71380c92-0d53-4344-869c-e7bfb84dfc9f_800w.jpg"/>
<div className="gallery-overlay">
<span className="gallery-overlay-text"></span>
</div>
</div>
<div className="gallery-item reveal reveal-delay-2">
<img alt="Professional Barber Giving a Precision Fade Haircut" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/505329af-af63-4b5a-bab1-1de0a3dc4d0d_800w.jpg"/>
<div className="gallery-overlay">
<span className="gallery-overlay-text"></span>
</div>
</div>
</div>
</section>

<section className="testimonials" id="testimonials">
<div aria-hidden="true" className="testimonial-bg-text">VLERËSIME</div>
<div className="testimonials-header">
<div className="section-tag reveal" style={{justifyContent: 'center'}}>
<span className="section-tag-line"></span>
<span className="section-tag-text">Reviews</span>
<span className="section-tag-line"></span>
</div>
<h2 className="section-title reveal reveal-delay-1">
          ÇFARË THONË
          <span className="italic">Klientët</span>
          TANË
        </h2>
</div>
<div aria-label="Testimonials" aria-live="polite" className="testimonial-slider" role="region">
<div className="testimonial-item active">
<div aria-label="5 stars" className="testimonial-stars">
<iconify-icon height="17" icon="solar:star-bold" width="17"></iconify-icon>
<iconify-icon height="17" icon="solar:star-bold" width="17"></iconify-icon>
<iconify-icon height="17" icon="solar:star-bold" width="17"></iconify-icon>
<iconify-icon height="17" icon="solar:star-bold" width="17"></iconify-icon>
<iconify-icon height="17" icon="solar:star-bold" width="17"></iconify-icon>
</div>
<p className="testimonial-quote">
            "I had an excellent experience at The One Salon. The staff is highly
            professional, friendly, and pays great attention to detail. From the
            moment I walked in, I felt welcomed and well taken care of."
          </p>
<div className="testimonial-author-name">Skerdi Brahimi</div>
<div className="testimonial-author-title">Klient i kenaqur</div>
</div>
<div className="testimonial-item">
<div aria-label="5 stars" className="testimonial-stars">
<iconify-icon height="17" icon="solar:star-bold" width="17"></iconify-icon>
<iconify-icon height="17" icon="solar:star-bold" width="17"></iconify-icon>
<iconify-icon height="17" icon="solar:star-bold" width="17"></iconify-icon>
<iconify-icon height="17" icon="solar:star-bold" width="17"></iconify-icon>
<iconify-icon height="17" icon="solar:star-bold" width="17"></iconify-icon>
</div>
<p className="testimonial-quote">
            "The best Barber in town! The whole experience is totally worth it,
            the staff is super friendly and professional. Would totally
            recommend them 10/10"
          </p>
<div className="testimonial-author-name">Joni Bakia</div>
<div className="testimonial-author-title">Klient i kenaqur</div>
</div>
<div className="testimonial-item">
<div aria-label="5 stars" className="testimonial-stars">
<iconify-icon height="17" icon="solar:star-bold" width="17"></iconify-icon>
<iconify-icon height="17" icon="solar:star-bold" width="17"></iconify-icon>
<iconify-icon height="17" icon="solar:star-bold" width="17"></iconify-icon>
<iconify-icon height="17" icon="solar:star-bold" width="17"></iconify-icon>
<iconify-icon height="17" icon="solar:star-bold" width="17"></iconify-icon>
</div>
<p className="testimonial-quote">"The best barber in Tirana"</p>
<div className="testimonial-author-name">Ridi Qato</div>
<div className="testimonial-author-title">Klient i kenaqur</div>
</div>
<div aria-label="Testimonial navigation" className="testimonial-nav" role="tablist">
<button aria-label="Testimonial 1" aria-selected="true" className="testimonial-dot active" onclick="goToTestimonial(0)" role="tab"></button>
<button aria-label="Testimonial 2" aria-selected="false" className="testimonial-dot" onclick="goToTestimonial(1)" role="tab"></button>
<button aria-label="Testimonial 3" aria-selected="false" className="testimonial-dot" onclick="goToTestimonial(2)" role="tab"></button>
</div>
</div>
</section>

<section className="booking" id="booking">
<div className="booking-inner">
<div className="booking-image reveal">
<img alt="Modern Industrial Barber Shop Interior" className="object-center w-full h-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0af4484-d5e3-4540-9485-4c4a3a473b15_1600w.jpg"/>
</div>
<div className="booking-form-wrapper">
<div className="section-tag reveal">
<span className="section-tag-line"></span>
<span className="section-tag-text">Rezervo Tani</span>
</div>
<h2 className="section-title reveal reveal-delay-1">
            REZERVO
            <br/>
            KARRIGEN
            <span className="italic">Tënde</span>
</h2>
<div className="booking-form reveal reveal-delay-2">
<a className="btn-submit" href="tel:+355696973690" style={{textDecoration: 'none'}}>
<span className="">REZERVO KARRIGEN TËNDE</span>
<iconify-icon height="17" icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="17"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="instagram">
<div className="instagram-header">
<div className="section-tag reveal" style={{justifyContent: 'center'}}>
<span className="section-tag-line"></span>
<span className="section-tag-text">Ndiqni Punën Tonë</span>
<span className="section-tag-line"></span>
</div>
<h2 className="section-title reveal reveal-delay-1">
          NA NDIQNI NË
          <span className="italic">Instagram</span>
</h2>
<a className="instagram-handle reveal reveal-delay-2" href="https://www.instagram.com/the.one.salon1/" rel="noopener noreferrer" target="_blank">
<iconify-icon height="15" icon="solar:instagram-linear" width="15"></iconify-icon>
          @the.one.salon1
        </a>
</div>
<div className="instagram-grid">
<a aria-label="Instagram post 1" className="instagram-item" href="https://www.instagram.com/the.one.salon1/" rel="noopener noreferrer" target="_blank">
<img alt="Modern Men's Taper Fade Haircut" className="" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/887afcd5-45a0-4d18-8a97-6745b2ea122a_800w.jpg"/>
</a>
<a aria-label="Instagram post 2" className="instagram-item" href="https://www.instagram.com/the.one.salon1/" rel="noopener noreferrer" target="_blank">
<img alt="Side Profile of Men's Taper Fade Haircut" className="" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/15ca4bba-15bc-49c2-b42a-6e140c3f3dec_800w.jpg"/>
</a>
<a aria-label="Instagram post 3" className="instagram-item" href="https://www.instagram.com/the.one.salon1/" rel="noopener noreferrer" target="_blank">
<img alt="Male Professional Skin Fade Haircut with Beard" className="" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2907babc-8c2f-4e2e-924b-9bcc13c36f6b_800w.jpg"/>
</a>
<a aria-label="Instagram post 4" className="instagram-item" href="https://www.instagram.com/the.one.salon1/" rel="noopener noreferrer" target="_blank">
<img alt="Modern Curly Taper Fade Haircut" className="" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/56917271-28ea-44bc-9249-7e5b37ae4696_800w.jpg"/>
</a>
<a aria-label="Instagram post 5" className="instagram-item" href="https://www.instagram.com/the.one.salon1/" rel="noopener noreferrer" target="_blank">
<img alt="Modern Men's Fade with Geometric Hair Design" className="" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d85c69f7-fae8-4f13-8765-ee62a3f43e8f_800w.jpg"/>
</a>
<a aria-label="Instagram post 6" className="instagram-item" href="https://www.instagram.com/the.one.salon1/" rel="noopener noreferrer" target="_blank">
<img alt="Modern Industrial Barbershop Interior" className="" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71380c92-0d53-4344-869c-e7bfb84dfc9f_800w.jpg"/>
</a>
</div>
</section>

<footer className="footer">
<div className="footer-top">
<div className="footer-col">
<div className="footer-brand-name">
            THE ONE
            <span className="gold">SALON</span>
</div>
<p className="footer-brand-desc">
            The One Salon, vendi ku vetëbesimi juaj është në qendër të vëmendjes
            dhe çdo vizitë është një hap drejt më të mirës suaj absolute.
          </p>
<div className="footer-socials">
<a aria-label="Instagram" className="" href="https://www.instagram.com/the.one.salon1/" rel="noopener noreferrer" target="_blank">
<svg className="" fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a aria-label="Google Maps" className="" href="https://www.google.com/maps/place/The+ONE+Salon+Men/@41.313536,19.793959,17z/data=!3m1!4b1!4m6!3m5!1s0x1350318fe40be377:0x3949885c0a0152e9!8m2!3d41.3135361!4d19.7988299!16s%2Fg%2F11ry9x30st?entry=ttu&amp;g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D" rel="noopener noreferrer" target="_blank">
<svg fill="none" height="17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
</a>
</div>
</div>
<div className="footer-col">
<div className="footer-col-title">NAVIGIM</div>
<ul className="">
<li className=""><a className="" href="#services">Shërbimet</a></li>
<li className=""><a className="" href="#gallery">Galeria</a></li>
<li className=""><a className="" href="#testimonials">Vlerësimet</a></li>
</ul>
</div>
<div className="footer-col">
<div className="footer-col-title">NA KONTAKTONI</div>
<div className="footer-contact-item">
<iconify-icon className="iconify" height="17" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="17"></iconify-icon>
<p className="">
              Dyqani nr. 15, Rruga Zallit
              <br/>
              Pallati nr. 19, Tiranë
            </p>
</div>
<div className="footer-contact-item">
<iconify-icon className="iconify" height="17" icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="17"></iconify-icon>
<p className="">
<a className="" href="tel:+355696973690" onmouseout="this.style.color='inherit'" onmouseover="this.style.color='var(--gold)'" style={{color: 'inherit', transition: 'color 0.2s'}}>
                +355 69 697 3690
              </a>
</p>
</div>
<div className="footer-contact-item">
<iconify-icon className="iconify" height="17" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="17"></iconify-icon>
<p className="">
              E Hënë – E Shtunë
              <br/>
              09:00 – 21:00
            </p>
</div>
</div>
</div>
<div className="footer-bottom">
<p className="">
          © 2026 THE ONE SALON. TË GJITHA TË DREJTAT JANË TË REZERVUARA.
        </p>
</div>
</footer>

<div aria-labelledby="modalTitle" aria-modal="true" className="success-modal" id="successModal" role="dialog">
<div className="success-modal-inner">
<div className="success-modal-icon">
<iconify-icon height="46" icon="solar:check-circle-linear" width="46"></iconify-icon>
</div>
<h3 className="success-modal-title" id="modalTitle">
          REZERVIMI U KONFIRMUA!
        </h3>
<p className="success-modal-text">
          Faleminderit për rezervimin tuaj. Do t'ju kontaktojmë brenda 24 orëve
          për të konfirmuar takimin tuaj në The One Salon.
        </p>
<button className="success-modal-btn" onclick="closeModal()">Mbyll</button>
</div>
</div>


    </>
  );
}
