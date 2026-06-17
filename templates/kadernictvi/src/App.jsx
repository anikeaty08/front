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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Sticky Navigation Background
        const nav = document.getElementById('nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });

        // Mobile Menu Toggle
        const hamburger = document.getElementById('hamburger');
        const mobileNav = document.getElementById('mobileNav');
        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileNav.classList.toggle('active');
            if (mobileNav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        function closeMobileNav() {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Testimonial Slider
        const testimonials = document.querySelectorAll('.testimonial-item');
        const dots = document.querySelectorAll('.testimonial-dot');
        let currentSlide = 0;
        let slideInterval;

        function showSlide(index) {
            testimonials.forEach(t => t.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));
            
            testimonials[index].classList.add('active');
            dots[index].classList.add('active');
            currentSlide = index;
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
                resetInterval();
            });
        });

        function nextSlide() {
            let next = (currentSlide + 1) % testimonials.length;
            showSlide(next);
        }

        function resetInterval() {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 6000);
        }

        if (testimonials.length > 0) {
            showSlide(0);
            slideInterval = setInterval(nextSlide, 6000);
        }

        // Scroll Reveal Animation Intersection Observer
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealOnScroll = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, revealOptions);

        revealElements.forEach(el => {
            revealOnScroll.observe(el);
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
            SALON <span className="logo-ampersand">&amp;</span> CO.
        </a>
<a className="nav-cta" href="#contact">Kontakt</a>
<div className="nav-hamburger" id="hamburger">
<span></span>
<span></span>
<span></span>
</div>
</nav>

<div className="mobile-nav" id="mobileNav">
<a href="#about" onclick="closeMobileNav()">Příběh</a>
<a href="#services" onclick="closeMobileNav()">Služby</a>
<a href="#gallery" onclick="closeMobileNav()">Galerie</a>
<a href="#team" onclick="closeMobileNav()">Tým</a>
<a href="#testimonials" onclick="closeMobileNav()">Recenze</a>
<a href="#contact" onclick="closeMobileNav()">Kontakt</a>
</div>

<section className="hero">
<div className="hero-content">
<div className="hero-tag">
<span className="hero-tag-line"></span>
<span className="hero-tag-text">Založeno 2018 -- Prémiové kadeřnictví</span>
</div>
<h1 className="hero-title">
<span className="">KDE SE UMĚNÍ</span>
<span className="">SNOUBÍ </span>
<span className="title-stroke">S ELEGANCÍ</span>
</h1>
<p className="hero-desc">
                Vstupte do světa, kde každý střih vypráví příběh. Naši mistři stylisté spojují prověřené techniky s moderním uměním, aby vytvořili váš jedinečný a osobitý vzhled.
            </p>
<div className="hero-actions">
<a className="btn-primary" href="#contact">
<span>Kontaktujte Nás</span>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</a>
<a className="btn-outline" href="#services">
<span>Prozkoumat služby</span>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</a>
</div>
</div>
<div className="hero-image">
<img alt="Profesionální kadeřnický salon" className="" loading="eager" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&amp;q=85&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<div className="marquee-section">
<div className="marquee-track">
<div className="marquee-item">
<span>Prémiová péče</span><div className="dot"></div>
<span>Precizní střihy</span><div className="dot"></div>
<span>Barvení a Melíry</span><div className="dot"></div>
<span>Vlasový styling</span><div className="dot"></div>
<span>Společenské účesy</span><div className="dot"></div>
<span>Hloubková regenerace</span><div className="dot"></div>
<span>Luxusní zážitek</span><div className="dot"></div>
</div>
<div className="marquee-item">
<span>Prémiová péče</span><div className="dot"></div>
<span>Precizní střihy</span><div className="dot"></div>
<span>Barvení a Melíry</span><div className="dot"></div>
<span>Vlasový styling</span><div className="dot"></div>
<span>Společenské účesy</span><div className="dot"></div>
<span>Hloubková regenerace</span><div className="dot"></div>
<span>Luxusní zážitek</span><div className="dot"></div>
</div>
</div>
</div>

<section className="about" id="about">
<div className="about-images reveal">
<img alt="Elegantní interiér salonu" className="about-img-main" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Kadeřnické vybavení" className="about-img-secondary" src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&amp;q=85&amp;auto=format&amp;fit=crop"/>
<div className="about-accent">S&amp;C</div>
</div>
<div className="about-content">
<div className="section-tag reveal">
<span className="section-tag-line"></span>
<span className="section-tag-text">Náš Příběh</span>
</div>
<h2 className="section-title reveal reveal-delay-1">
                VÍCE NEŽ<br/>KADEŘNICTVÍ.<br/>JE TO <span className="italic">Zážitek.</span>
</h2>
<p className="about-text reveal reveal-delay-2">
                Naše studio vzniklo v srdci města z opravdové vášně pro řemeslo. Věříme, že každý si zaslouží péči o vlasy, která přesahuje běžný standard. Jsme místem, kde vládne pohoda a kde hraje roli každý sebemenší detail.
            </p>
<p className="about-text reveal reveal-delay-3">
                Záleží nám na tom, abyste od nás odcházeli nejen s dokonalým účesem, ale především s novým sebevědomím a pocitem výjimečnosti.
            </p>
<div className="about-stats reveal reveal-delay-4">
<div className="">
<div className="stat-number">7+</div>
<div className="stat-label">Let zkušeností</div>
</div>
<div>
<div className="stat-number">15K+</div>
<div className="stat-label">Spokojených klientů</div>
</div>
<div>
<div className="stat-number">6</div>
<div className="stat-label">Profesionálů v týmu</div>
</div>
</div>
</div>
</section>

<section className="services" id="services">
<div className="services-header">
<div>
<div className="section-tag reveal">
<span className="section-tag-line"></span>
<span className="section-tag-text">Naše Nabídka</span>
</div>
<h2 className="section-title reveal reveal-delay-1">
                    NAŠE <span className="italic">Prémiové</span><br/>SLUŽBY
                </h2>
</div>
<div className="services-header-right reveal reveal-delay-2">
<p className="">Každá služba je prováděna s maximální pečlivostí, s využitím těch nejlepších produktů a moderních postupů.</p>
</div>
</div>
<div className="services-grid">
<div className="service-card reveal">
<svg aria-hidden="true" className="iconify service-icon iconify--solar" data-icon="solar:scissors-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.654 1.633a.75.75 0 0 0-1.308.735l5.794 10.304l-2.708 4.815a3.751 3.751 0 1 0-.136 3.303L12 14.202l3.704 6.588a3.75 3.75 0 1 0-.136-3.303l-2.708-4.815l5.794-10.304a.75.75 0 0 0-1.308-.735L12 11.142z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify service-arrow iconify--solar" data-icon="solar:arrow-right-up-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6m0 0H9m9 0v9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<h3 className="service-name">DÁMSKÝ STŘIH</h3>
<p className="service-desc">Konzultace, mytí, individuální střih na míru vašim rysům tváře a závěrečný styling.</p>
<div className="service-price-row">
<span className="service-price">1200 Kč</span>
<span className="service-duration">60 Min</span>
</div>
</div>
<div className="service-card reveal reveal-delay-1">
<svg aria-hidden="true" className="iconify service-icon iconify--solar" data-icon="solar:crown-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m20.092 14.326l.193-1.894c.103-1.011.17-1.678.117-2.099h.02c.871 0 1.578-.746 1.578-1.666S21.293 7 20.421 7s-1.579.746-1.579 1.667c0 .416.145.797.384 1.089c-.343.223-.792.695-1.468 1.405c-.52.547-.78.82-1.07.863a.84.84 0 0 1-.473-.07c-.268-.124-.447-.462-.804-1.139L13.527 7.25c-.22-.417-.405-.766-.572-1.047c.683-.368 1.15-1.117 1.15-1.98C14.105 2.994 13.163 2 12 2s-2.105.995-2.105 2.222c0 .864.467 1.613 1.15 1.98c-.167.282-.351.631-.572 1.048L8.59 10.816c-.358.676-.537 1.014-.805 1.139a.84.84 0 0 1-.473.07c-.29-.043-.55-.317-1.07-.864c-.676-.71-1.125-1.182-1.468-1.405c.24-.292.384-.673.384-1.09C5.158 7.747 4.45 7 3.578 7C2.708 7 2 7.746 2 8.667c0 .92.707 1.666 1.579 1.666h.019c-.054.42.014 1.088.117 2.099l.193 1.894c.107 1.051.196 2.051.306 2.952h15.572c.11-.9.199-1.901.306-2.952M10.855 22h2.29c2.985 0 4.478 0 5.474-.94c.434-.412.71-1.152.908-2.116H4.473c.198.964.473 1.704.908 2.115C6.377 22 7.87 22 10.855 22" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify service-arrow iconify--solar" data-icon="solar:arrow-right-up-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6m0 0H9m9 0v9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<h3 className="service-name">PÁNSKÝ STŘIH</h3>
<p className="service-desc">Klasický nebo moderní pánský střih včetně úpravy kontur, umytí hlavy a stylingu.</p>
<div className="service-price-row">
<span className="service-price">800 Kč</span>
<span className="service-duration">45 Min</span>
</div>
</div>
<div className="service-card reveal reveal-delay-2">
<svg aria-hidden="true" className="iconify service-icon iconify--solar" data-icon="solar:pallete-2-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M10.847 21.934C5.867 21.362 2 17.133 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.157-3.283 4.733-6.086 4.37c-1.618-.209-3.075-.397-3.652.518c-.395.626.032 1.406.555 1.929a1.673 1.673 0 0 1 0 2.366c-.523.523-1.235.836-1.97.751M11.085 7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M6.5 13a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m11 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-3-4.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" fill="currentColor" fill-rule="evenodd"></path></svg>
<svg aria-hidden="true" className="iconify service-arrow iconify--solar" data-icon="solar:arrow-right-up-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6m0 0H9m9 0v9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<h3 className="service-name">BARVENÍ &amp; MELÍRY</h3>
<p className="service-desc">Profesionální barvení, balayage, tónování a melírování pomocí šetrných barev nejvyšší kvality.</p>
<div className="service-price-row">
<span className="service-price">od 2000 Kč</span>
<span className="service-duration">120+ Min</span>
</div>
</div>
<div className="service-card reveal reveal-delay-3">
<svg aria-hidden="true" className="iconify service-icon iconify--solar" data-icon="solar:waterdrop-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M11.612 22C6.855 22 3 18.057 3 13.193v-.265C3 8.317 5.729 4.163 9.903 2.421a5.43 5.43 0 0 1 4.194 0C18.272 4.163 21 8.317 21 12.928v.265C21 18.057 17.145 22 12.389 22zm.454-16.039a.75.75 0 0 1-.366.996c-1.545.715-2.793 2.168-3.37 3.993a.75.75 0 1 1-1.43-.453c.692-2.186 2.206-3.993 4.17-4.901a.75.75 0 0 1 .996.365" fill="currentColor" fill-rule="evenodd"></path></svg>
<svg aria-hidden="true" className="iconify service-arrow iconify--solar" data-icon="solar:arrow-right-up-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6m0 0H9m9 0v9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<h3 className="service-name">HLOUBKOVÁ PÉČE</h3>
<p className="service-desc">Intenzivní regenerace poškozených vlasů, masáž vlasové pokožky a aplikace prémiových masek.</p>
<div className="service-price-row">
<span className="service-price">900 Kč</span>
<span className="service-duration">45 Min</span>
</div>
</div>
</div>
</section>



<section className="testimonials" id="testimonials">
<div className="testimonial-bg-text">RECENZE</div>
<div className="testimonials-header">
<div className="section-tag reveal" style={{justifyContent: 'center'}}>
<span className="section-tag-line"></span>
<span className="section-tag-text">Testimoniály</span>
<span className="section-tag-line"></span>
</div>
<h2 className="section-title reveal reveal-delay-1">CO O NÁS ŘÍKAJÍ <span className="italic">Klienti</span></h2>
</div>
<div className="testimonial-slider">
<div className="testimonial-item active">
<div className="testimonial-stars">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
</div>
<p className="testimonial-quote">"Salon &amp; Co. je naprosto jedinečné místo. Už od vstupu cítíte péči o každý detail. Anna mi vytvořila úžasnou barvu, která působí dokonale přirozeně. Všem moc doporučuji!"</p>
<div className="testimonial-author-name">MICHAELA NOVÁKOVÁ</div>
<div className="testimonial-author-title">Klientka od 2019</div>
</div>
<div className="testimonial-item">
<div className="testimonial-stars">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
</div>
<p className="testimonial-quote">"Fantastický přístup k pánskému střihu. David mě vždy vyslechne a odcházím s účesem, který perfektně drží i po týdnech. Nejlepší kadeřnictví široko daleko."</p>
<div className="testimonial-author-name">ROBERT KASTNER</div>
<div className="testimonial-author-title">Klient od 2020</div>
</div>
<div className="testimonial-item">
<div className="testimonial-stars">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
</div>
<p className="testimonial-quote">"Měl jsem možnost navštívit spoustu luxusních salonů, ale tady to má něco navíc. Příjemná nálada, prvotřídní um a navíc vynikající káva. Prostě bezchybné."</p>
<div className="testimonial-author-name">ALEXANDR LOVECKÝ</div>
<div className="testimonial-author-title">Klient od 2021</div>
</div>
</div>
<div className="testimonial-nav" id="testimonialNav">
<button className="testimonial-dot active" data-index="0"></button>
<button className="testimonial-dot" data-index="1"></button>
<button className="testimonial-dot" data-index="2"></button>
</div>
</section>

<section className="booking" id="contact">
<div className="booking-inner">
<div className="booking-image reveal">
<img alt="Prémiové vybavení salonu" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&amp;q=85&amp;auto=format&amp;fit=crop"/>
</div>
<div className="booking-form-wrapper">
<div className="section-tag reveal">
<span className="section-tag-line"></span>
<span className="section-tag-text">Rezervace</span>
</div>
<h2 className="section-title reveal reveal-delay-1">DOMLUVTE SI <span className="italic">Termín</span></h2>
<p className="reveal reveal-delay-2" style={{color: 'var(--gray-light)', lineHeight: '1.8', marginBottom: '2.5rem', fontSize: '0.95rem'}}>
                    Pro rezervaci termínu nás prosím kontaktujte napřímo. Zakládáme si na zcela osobním přístupua rádi s vámi probereme vaše přání ještě před samotnou návštěvou.</p>
<div className="contact-direct-links reveal reveal-delay-3">
<a href="tel:+420123456789">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:phone-calling-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19.948 13.565c-1.353-.873-2.029-1.309-2.735-1.127c-.706.182-1.173.789-2.108 2.003l-.438.568c-.23.3-.59.431-.95.342c-1.2-.294-2.887-1.302-3.818-2.233c-.931-.931-1.939-2.618-2.233-3.818c-.089-.36-.042-.72.258-.95l.652-.5c1.214-.935 1.821-1.402 2.003-2.108c.182-.706-.254-1.382-1.127-2.735L8.463 1.488C7.518-.01 7.045-.758 6.27-.852C5.495-.946 4.846-.372 3.548.777l-.613.541C1.298 2.768.219 4.888.75 7.421c1.082 5.161 4.904 9.877 9.83 12.484c2.81 1.487 5.753 2.181 8.232 1.632c2.043-.452 3.65-1.639 4.394-3.08l.383-.742c.866-1.677 1.299-2.515.932-3.153c-.367-.638-1.258-.974-3.039-1.646l-1.534-.651z" fill="currentColor"></path></svg>
                        +420 123 456 789
                    </a>
<a href="mailto:rezervace@salonco.cz">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:letter-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 6.425V17.5c0 1.886 0 2.828-.586 3.414C19.328 21.5 18.386 21.5 16.5 21.5h-9c-1.886 0-2.828 0-3.414-.586C3.5 20.328 3.5 19.386 3.5 17.5V6.425c0-.685.342-1.317.91-1.688l5.836-3.812c1.06-.692 1.589-1.038 2.254-1.038s1.194.346 2.254 1.038l5.836 3.812c.568.371.91 1.003.91 1.688Z" fill="currentColor"></path></svg>
                        rezervace@salonco.cz
                    </a>
</div>
</div>
</div>
</section>

<section className="instagram reveal">
<div className="instagram-header">
<h2 className="section-title" style={{fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '0'}}>Sledujte Nás</h2>
<a className="instagram-handle" href="#">
<svg className="iconify" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z" fill="currentColor"></path></svg>
                @salon.co
            </a>
</div>
<div className="instagram-grid">
<div className="instagram-item">
<img alt="Instagram post 1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<svg className="iconify" height="2em" style={{color: 'white', position: 'absolute', zIndex: '2'}} viewbox="0 0 24 24" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z" fill="currentColor"></path></svg>
</div>
<div className="instagram-item">
<img alt="Instagram post 2" src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&amp;q=80&amp;auto=format&amp;fit=crop"/>
</div>
<div className="instagram-item">
<img alt="Instagram post 3" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&amp;q=80&amp;auto=format&amp;fit=crop"/>
</div>
<div className="instagram-item">
<img alt="Instagram post 4" src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=500&amp;q=80&amp;auto=format&amp;fit=crop"/>
</div>
<div className="instagram-item">
<img alt="Instagram post 5" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="instagram-item">
<img alt="Instagram post 6" src="https://images.unsplash.com/photo-1559599101-f09722fb4948?w=500&amp;q=80&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<footer className="footer reveal">
<div className="footer-top">
<div className="footer-col">
<h3 className="footer-brand-name">SALON <span className="gold">&amp;</span> CO.</h3>
<p className="footer-brand-desc">Kde se tradice setkává s moderním uměním. Vaše destinace pro prémiovou péči o vlasy v srdci Prahy.</p>
</div>
<div className="footer-col">
<h4 className="footer-col-title">Navigace</h4>
<ul>
<li><a href="#about">Náš Příběh</a></li>
<li><a href="#services">Služby a Ceník</a></li>
<li><a href="#gallery">Galerie</a></li>
<li><a href="#team">Náš Tým</a></li>
<li><a href="#testimonials">Recenze</a></li>
</ul>
</div>
<div className="footer-col">
<h4 className="footer-col-title">Služby</h4>
<ul>
<li><a href="#services">Dámský střih</a></li>
<li><a href="#services">Pánský střih</a></li>
<li><a href="#services">Barvení a Melíry</a></li>
<li><a href="#services">Společenské účesy</a></li>
<li><a href="#services">Hloubková regenerace</a></li>
</ul>
</div>
<div className="footer-col">
<h4 className="footer-col-title">Kontakt &amp; Otevřeno</h4>
<div className="footer-contact-item">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:map-point-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C7.589 2 4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12.005C20 5.589 16.411 2 12 2zm0 11a3 3 0 1 1 0-6a3 3 0 0 1 0 6z" fill="currentColor"></path></svg>
<p>Pařížská 12<br/>110 00 Praha 1<br/>Česká republika</p>
</div>
<div className="footer-contact-item" style={{marginTop: '1rem'}}>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:clock-circle-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 22 10 17.523 10 12S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10zm1-10V7a1 1 0 1 0-2 0v6a1 1 0 0 0 .5.866l3 1.732a1 1 0 1 0 1-1.732l-2.5-1.443z" fill="currentColor"></path></svg>
<p>Po - Pá: 09:00 - 20:00<br/>So: 10:00 - 16:00<br/>Ne: Zavřeno</p>
</div>
</div>
</div>
<div className="footer-bottom">
<p>© 2023 SALON &amp; CO. Všechna práva vyhrazena.</p>
<div className="footer-bottom-links">
<a href="#">Ochrana osobních údajů</a>
<a href="#">Obchodní podmínky</a>
</div>
</div>
</footer>



    </>
  );
}
