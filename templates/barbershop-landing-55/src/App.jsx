import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // ========== NAVIGATION SCROLL ==========
        const nav = document.getElementById('nav');
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;
            if (currentScroll > 80) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
            lastScroll = currentScroll;
        });

        // ========== MOBILE NAVIGATION ==========
        const hamburger = document.getElementById('hamburger');
        const mobileNav = document.getElementById('mobileNav');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileNav.classList.toggle('active');
            document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
        });

        function closeMobileNav() {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        }

        // ========== SCROLL REVEAL ==========
        const revealElements = document.querySelectorAll('.reveal');

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));

        // ========== TESTIMONIAL SLIDER ==========
        const testimonialItems = document.querySelectorAll('.testimonial-item');
        const testimonialDots = document.querySelectorAll('.testimonial-dot');
        let currentTestimonial = 0;
        let testimonialInterval;

        function showTestimonial(index) {
            testimonialItems.forEach(item => item.classList.remove('active'));
            testimonialDots.forEach(dot => dot.classList.remove('active'));
            testimonialItems[index].classList.add('active');
            testimonialDots[index].classList.add('active');
            currentTestimonial = index;
        }

        testimonialDots.forEach(dot => {
            dot.addEventListener('click', () => {
                showTestimonial(parseInt(dot.dataset.index));
                clearInterval(testimonialInterval);
                startTestimonialAutoplay();
            });
        });

        function startTestimonialAutoplay() {
            testimonialInterval = setInterval(() => {
                showTestimonial((currentTestimonial + 1) % testimonialItems.length);
            }, 5000);
        }

        startTestimonialAutoplay();

        // ========== SMOOTH SCROLL ==========
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // ========== PARALLAX ON HERO IMAGE ==========
        const heroImg = document.querySelector('.hero-image img');
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (heroImg && scrolled < window.innerHeight) {
                heroImg.style.transform = `scale(1.05) translateY(${scrolled * 0.15}px)`;
            }
        });

        // ========== COUNTER ANIMATION ==========
        const statNumbers = document.querySelectorAll('.stat-number');
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const text = el.textContent;
                    const match = text.match(/(\d+)/);
                    if (match) {
                        const target = parseInt(match[0]);
                        const suffix = text.replace(match[0], '');
                        let current = 0;
                        const increment = target / 60;
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= target) {
                                current = target;
                                clearInterval(timer);
                            }
                            el.textContent = Math.floor(current) + suffix;
                        }, 25);
                    }
                    statsObserver.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(el => statsObserver.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="nav" id="nav">
<a className="nav-logo" href="#">
            BLADE <span className="logo-ampersand">&amp;</span> CO.
        </a>
<ul className="nav-links">
<li><a href="#about">Our Story</a></li>
<li className=""><a className="" href="#services">Services</a></li>
<li><a href="#gallery">Gallery</a></li>
<li><a href="#team">Barbers</a></li>
<li><a href="#testimonials">Reviews</a></li>
</ul>
<a className="nav-cta" href="#booking">Book Now</a>
<div className="nav-hamburger" id="hamburger">
<span></span>
<span></span>
<span></span>
</div>
</nav>

<div className="mobile-nav" id="mobileNav">
<a href="#about" onclick="closeMobileNav()">Our Story</a>
<a href="#services" onclick="closeMobileNav()">Services</a>
<a href="#gallery" onclick="closeMobileNav()">Gallery</a>
<a href="#team" onclick="closeMobileNav()">Barbers</a>
<a href="#testimonials" onclick="closeMobileNav()">Reviews</a>
<a href="#booking" onclick="closeMobileNav()">Book Now</a>
</div>

<section className="hero">
<div className="hero-content">
<div className="hero-tag">
<span className="hero-tag-line"></span>
<span className="hero-tag-text">Est. 2018 -- Premium Grooming</span>
</div>
<h1 className="hero-title">
<span>WHERE CRAFT</span>
<span>MEETS </span>
<span className="title-stroke">&amp; TRADITION</span>
</h1>
<p className="hero-desc">
                Step into a world where every cut tells a story. Our master barbers blend time-honored techniques with contemporary artistry to craft your signature look.
            </p>
<div className="hero-actions">
<a className="btn-primary" href="#booking">
<span>Reserve Your Chair</span>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</a>
<a className="btn-outline" href="#services">
<span>Explore Services</span>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</a>
</div>
</div>
<div className="hero-image">
<img alt="Master barber at work" className="" loading="eager" src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1200&amp;q=85&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<div className="marquee-section">
<div className="marquee-track">
<div className="marquee-item">
<span>Premium Grooming</span><div className="dot"></div>
<span>Hot Towel Shaves</span><div className="dot"></div>
<span>Beard Sculpting</span><div className="dot"></div>
<span>Classic Cuts</span><div className="dot"></div>
<span>Hair Design</span><div className="dot"></div>
<span>Luxury Experience</span><div className="dot"></div>
<span>Gentleman's Club</span><div className="dot"></div>
<span>Straight Razor</span><div className="dot"></div>
</div>
<div className="marquee-item">
<span>Premium Grooming</span><div className="dot"></div>
<span>Hot Towel Shaves</span><div className="dot"></div>
<span>Beard Sculpting</span><div className="dot"></div>
<span>Classic Cuts</span><div className="dot"></div>
<span>Hair Design</span><div className="dot"></div>
<span>Luxury Experience</span><div className="dot"></div>
<span>Gentleman's Club</span><div className="dot"></div>
<span>Straight Razor</span><div className="dot"></div>
</div>
</div>
</div>

<section className="about" id="about">
<div className="about-images reveal">
<img alt="Barbershop interior" className="about-img-main" src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&amp;q=85&amp;auto=format&amp;fit=crop"/>
<img alt="Barber tools" className="about-img-secondary" src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&amp;q=85&amp;auto=format&amp;fit=crop"/>
<div className="about-accent">B&amp;C</div>
</div>
<div className="about-content">
<div className="section-tag reveal">
<span className="section-tag-line"></span>
<span className="section-tag-text">Our Story</span>
</div>
<h2 className="section-title reveal reveal-delay-1">
                MORE THAN A<br/>BARBERSHOP.<br/>A <span className="italic">Legacy.</span>
</h2>
<p className="about-text reveal reveal-delay-2">
                Founded in the heart of the city, Blade &amp; Co. was born from a passion for authentic craftsmanship and the belief that every man deserves a grooming experience that goes beyond the ordinary. Our shop is a sanctuary -- a place where tradition is honored, conversation flows freely, and every detail matters.
            </p>
<p className="about-text reveal reveal-delay-3">
                From the warm towels to the final brush of talc, every visit is choreographed to perfection. We don't just cut hair; we build confidence, one client at a time.
            </p>
<div className="about-stats reveal reveal-delay-4">
<div className="">
<div className="stat-number">7+</div>
<div className="stat-label">Years of Excellence</div>
</div>
<div>
<div className="stat-number">15K+</div>
<div className="stat-label">Happy Clients</div>
</div>
<div>
<div className="stat-number">6</div>
<div className="stat-label">Master Barbers</div>
</div>
</div>
</div>
</section>

<section className="services" id="services">
<div className="services-header">
<div>
<div className="section-tag reveal">
<span className="section-tag-line"></span>
<span className="section-tag-text">What We Offer</span>
</div>
<h2 className="section-title reveal reveal-delay-1">
                    OUR <span className="italic">Premium</span><br/>SERVICES
                </h2>
</div>
<div className="services-header-right reveal reveal-delay-2">
<p>Each service is crafted with precision and care, using only the finest products and time-tested techniques.</p>
</div>
</div>
<div className="services-grid">
<div className="service-card reveal">
<svg aria-hidden="true" className="iconify service-icon iconify--solar" data-icon="solar:scissors-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.654 1.633a.75.75 0 0 0-1.308.735l5.794 10.304l-2.708 4.815a3.751 3.751 0 1 0-.136 3.303L12 14.202l3.704 6.588a3.75 3.75 0 1 0-.136-3.303l-2.708-4.815l5.794-10.304a.75.75 0 0 0-1.308-.735L12 11.142z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify service-arrow iconify--solar" data-icon="solar:arrow-right-up-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6m0 0H9m9 0v9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<h3 className="service-name">SIGNATURE CUT</h3>
<p className="service-desc">A tailored haircut experience with consultation, hot towel treatment, and precision styling.</p>
<div className="service-price-row">
<span className="service-price">$45</span>
<span className="service-duration">45 Min</span>
</div>
</div>
<div className="service-card reveal reveal-delay-1">
<svg aria-hidden="true" className="iconify service-icon iconify--solar" data-icon="solar:fire-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.832 21.801c3.126-.626 7.168-2.875 7.168-8.69c0-5.291-3.873-8.815-6.658-10.434c-.619-.36-1.342.113-1.342.828v1.828c0 1.442-.606 4.074-2.29 5.169c-.86.559-1.79-.278-1.894-1.298l-.086-.838c-.1-.974-1.092-1.565-1.87-.971C4.461 8.46 3 10.33 3 13.11C3 20.221 8.289 22 10.933 22q.232 0 .484-.015C10.111 21.874 8 21.064 8 18.444c0-2.05 1.495-3.435 2.631-4.11c.306-.18.663.055.663.41v.59c0 .45.175 1.155.59 1.637c.47.546 1.159-.026 1.214-.744c.018-.226.246-.37.442-.256c.641.375 1.46 1.175 1.46 2.473c0 2.048-1.129 2.99-2.168 3.357" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify service-arrow iconify--solar" data-icon="solar:arrow-right-up-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6m0 0H9m9 0v9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<h3 className="service-name">HOT TOWEL SHAVE</h3>
<p className="service-desc">Traditional straight-razor shave with hot towel prep, premium lather, and aftershave balm.</p>
<div className="service-price-row">
<span className="service-price">$55</span>
<span className="service-duration">50 Min</span>
</div>
</div>
<div className="service-card reveal reveal-delay-2">
<svg aria-hidden="true" className="iconify service-icon iconify--solar" data-icon="solar:crown-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m20.092 14.326l.193-1.894c.103-1.011.17-1.678.117-2.099h.02c.871 0 1.578-.746 1.578-1.666S21.293 7 20.421 7s-1.579.746-1.579 1.667c0 .416.145.797.384 1.089c-.343.223-.792.695-1.468 1.405c-.52.547-.78.82-1.07.863a.84.84 0 0 1-.473-.07c-.268-.124-.447-.462-.804-1.139L13.527 7.25c-.22-.417-.405-.766-.572-1.047c.683-.368 1.15-1.117 1.15-1.98C14.105 2.994 13.163 2 12 2s-2.105.995-2.105 2.222c0 .864.467 1.613 1.15 1.98c-.167.282-.351.631-.572 1.048L8.59 10.816c-.358.676-.537 1.014-.805 1.139a.84.84 0 0 1-.473.07c-.29-.043-.55-.317-1.07-.864c-.676-.71-1.125-1.182-1.468-1.405c.24-.292.384-.673.384-1.09C5.158 7.747 4.45 7 3.578 7C2.708 7 2 7.746 2 8.667c0 .92.707 1.666 1.579 1.666h.019c-.054.42.014 1.088.117 2.099l.193 1.894c.107 1.051.196 2.051.306 2.952h15.572c.11-.9.199-1.901.306-2.952M10.855 22h2.29c2.985 0 4.478 0 5.474-.94c.434-.412.71-1.152.908-2.116H4.473c.198.964.473 1.704.908 2.115C6.377 22 7.87 22 10.855 22" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify service-arrow iconify--solar" data-icon="solar:arrow-right-up-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6m0 0H9m9 0v9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<h3 className="service-name">BEARD SCULPTING</h3>
<p className="service-desc">Expert beard shaping, trimming, and conditioning with premium oils and balms for the perfect profile.</p>
<div className="service-price-row">
<span className="service-price">$35</span>
<span className="service-duration">30 Min</span>
</div>
</div>
<div className="service-card reveal reveal-delay-3">
<svg aria-hidden="true" className="iconify service-icon iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify service-arrow iconify--solar" data-icon="solar:arrow-right-up-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6m0 0H9m9 0v9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<h3 className="service-name">THE ROYAL</h3>
<p className="service-desc">Our complete package: signature cut, hot shave, beard grooming, facial treatment, and scalp massage.</p>
<div className="service-price-row">
<span className="service-price">$95</span>
<span className="service-duration">90 Min</span>
</div>
</div>
<div className="service-card reveal">
<svg aria-hidden="true" className="iconify service-icon iconify--solar" data-icon="solar:pallete-2-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M10.847 21.934C5.867 21.362 2 17.133 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.157-3.283 4.733-6.086 4.37c-1.618-.209-3.075-.397-3.652.518c-.395.626.032 1.406.555 1.929a1.673 1.673 0 0 1 0 2.366c-.523.523-1.235.836-1.97.751M11.085 7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M6.5 13a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m11 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-3-4.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" fill="currentColor" fill-rule="evenodd"></path></svg>
<svg aria-hidden="true" className="iconify service-arrow iconify--solar" data-icon="solar:arrow-right-up-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6m0 0H9m9 0v9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<h3 className="service-name">HAIR DESIGN</h3>
<p className="service-desc">Creative fades, patterns, and artistic designs crafted by our most skilled stylists.</p>
<div className="service-price-row">
<span className="service-price">$60</span>
<span className="service-duration">60 Min</span>
</div>
</div>
<div className="service-card reveal reveal-delay-1">
<svg aria-hidden="true" className="iconify service-icon iconify--solar" data-icon="solar:waterdrop-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M11.612 22C6.855 22 3 18.057 3 13.193v-.265C3 8.317 5.729 4.163 9.903 2.421a5.43 5.43 0 0 1 4.194 0C18.272 4.163 21 8.317 21 12.928v.265C21 18.057 17.145 22 12.389 22zm.454-16.039a.75.75 0 0 1-.366.996c-1.545.715-2.793 2.168-3.37 3.993a.75.75 0 1 1-1.43-.453c.692-2.186 2.206-3.993 4.17-4.901a.75.75 0 0 1 .996.365" fill="currentColor" fill-rule="evenodd"></path></svg>
<svg aria-hidden="true" className="iconify service-arrow iconify--solar" data-icon="solar:arrow-right-up-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6m0 0H9m9 0v9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<h3 className="service-name">SCALP TREATMENT</h3>
<p className="service-desc">Deep cleansing scalp therapy with exfoliation, essential oils, and a relaxing pressure-point massage.</p>
<div className="service-price-row">
<span className="service-price">$40</span>
<span className="service-duration">35 Min</span>
</div>
</div>
<div className="service-card reveal reveal-delay-2">
<svg aria-hidden="true" className="iconify service-icon iconify--solar" data-icon="solar:magic-stick-3-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.845 3.845a2.883 2.883 0 0 0 0 4.077L5.432 9.51l.038-.04l4-4l.04-.038l-1.588-1.587a2.883 2.883 0 0 0-4.077 0m6.723 2.645l-.038.04l-4 4l-.04.038l9.588 9.588a2.884 2.884 0 0 0 4.078-4.078zM16.1 2.307a.483.483 0 0 1 .9 0l.43 1.095a.48.48 0 0 0 .272.274l1.091.432a.486.486 0 0 1 0 .903l-1.09.432a.5.5 0 0 0-.273.273L17 6.81a.483.483 0 0 1-.9 0l-.43-1.095a.5.5 0 0 0-.273-.273l-1.09-.432a.486.486 0 0 1 0-.903l1.09-.432a.5.5 0 0 0 .273-.274zm3.867 6.823a.483.483 0 0 1 .9 0l.156.399c.05.125.148.224.273.273l.398.158a.486.486 0 0 1 0 .902l-.398.158a.5.5 0 0 0-.273.273l-.156.4a.483.483 0 0 1-.9 0l-.157-.4a.5.5 0 0 0-.272-.273l-.398-.158a.486.486 0 0 1 0-.902l.398-.158a.5.5 0 0 0 .272-.273zM5.133 15.307a.483.483 0 0 1 .9 0l.157.4a.48.48 0 0 0 .272.273l.398.157a.486.486 0 0 1 0 .903l-.398.158a.48.48 0 0 0-.272.273l-.157.4a.483.483 0 0 1-.9 0l-.157-.4a.48.48 0 0 0-.272-.273l-.398-.158a.486.486 0 0 1 0-.903l.398-.157a.48.48 0 0 0 .272-.274z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify service-arrow iconify--solar" data-icon="solar:arrow-right-up-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6m0 0H9m9 0v9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<h3 className="service-name">GREY BLENDING</h3>
<p className="service-desc">Natural-looking grey camouflage using premium products for a refreshed, youthful appearance.</p>
<div className="service-price-row">
<span className="service-price">$50</span>
<span className="service-duration">40 Min</span>
</div>
</div>
<div className="service-card reveal reveal-delay-3">
<svg aria-hidden="true" className="iconify service-icon iconify--solar" data-icon="solar:face-scan-circle-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill="currentColor" fill-rule="evenodd"><path d="M10.801 2.57a.71.71 0 0 1-.555.838a8.78 8.78 0 0 0-6.838 6.838a.71.71 0 1 1-1.394-.283a10.2 10.2 0 0 1 7.949-7.949a.71.71 0 0 1 .838.556M2.57 13.199a.71.71 0 0 1 .838.555a8.78 8.78 0 0 0 6.838 6.838a.71.71 0 1 1-.283 1.394a10.2 10.2 0 0 1-7.948-7.949a.71.71 0 0 1 .555-.838M13.199 2.57a.71.71 0 0 1 .838-.556a10.2 10.2 0 0 1 7.949 7.949a.711.711 0 0 1-1.394.283a8.78 8.78 0 0 0-6.838-6.838a.71.71 0 0 1-.555-.838m8.231 10.629a.71.71 0 0 1 .556.838a10.2 10.2 0 0 1-7.949 7.949a.711.711 0 0 1-.283-1.394a8.78 8.78 0 0 0 6.838-6.838a.71.71 0 0 1 .838-.555"></path><path d="M12 19.583a7.583 7.583 0 1 0 0-15.166a7.583 7.583 0 0 0 0 15.166m-3.06-5.044a.71.71 0 0 1 .995-.148c.59.437 1.3.69 2.065.69a3.45 3.45 0 0 0 2.065-.69a.71.71 0 1 1 .846 1.142a4.87 4.87 0 0 1-2.911.97a4.87 4.87 0 0 1-2.911-.97a.71.71 0 0 1-.148-.994m6.377-4.139c0 .688-.37 1.245-.829 1.245s-.83-.557-.83-1.245c0-.687.372-1.244.83-1.244s.83.557.83 1.244m-5.805 1.245c.458 0 .83-.557.83-1.245c0-.687-.372-1.244-.83-1.244s-.83.557-.83 1.244c0 .688.372 1.245.83 1.245"></path></g></svg>
<svg aria-hidden="true" className="iconify service-arrow iconify--solar" data-icon="solar:arrow-right-up-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6m0 0H9m9 0v9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<h3 className="service-name">FACIAL GROOMING</h3>
<p className="service-desc">Complete facial care including cleansing, exfoliation, mask, and moisturizing for healthy skin.</p>
<div className="service-price-row">
<span className="service-price">$45</span>
<span className="service-duration">40 Min</span>
</div>
</div>
</div>
</section>

<section className="gallery" id="gallery">
<div className="gallery-header">
<div className="section-tag reveal" style={{justifyContent: 'center'}}>
<span className="section-tag-line"></span>
<span className="section-tag-text">Our Work</span>
<span className="section-tag-line"></span>
</div>
<h2 className="section-title reveal reveal-delay-1">THE <span className="italic">Craft</span> IN DETAIL</h2>
</div>
<div className="gallery-grid">
<div className="gallery-item reveal">
<img alt="Classic fade haircut" src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=700&amp;q=85&amp;auto=format&amp;fit=crop"/>
<div className="gallery-overlay">
<span className="gallery-overlay-text">PRECISION FADE</span>
</div>
</div>
<div className="gallery-item reveal reveal-delay-1">
<img alt="Beard grooming" src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=700&amp;q=85&amp;auto=format&amp;fit=crop"/>
<div className="gallery-overlay">
<span className="gallery-overlay-text">BEARD ARTISTRY</span>
</div>
</div>
<div className="gallery-item reveal reveal-delay-2">
<img alt="Hot towel shave" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&amp;q=85&amp;auto=format&amp;fit=crop"/>
<div className="gallery-overlay">
<span className="gallery-overlay-text">HOT TOWEL RITUAL</span>
</div>
</div>
<div className="gallery-item reveal reveal-delay-1">
<img alt="Barbershop atmosphere" src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=900&amp;q=85&amp;auto=format&amp;fit=crop"/>
<div className="gallery-overlay">
<span className="gallery-overlay-text">THE EXPERIENCE</span>
</div>
</div>
<div className="gallery-item reveal reveal-delay-2">
<img alt="Styling details" src="https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=900&amp;q=85&amp;auto=format&amp;fit=crop"/>
<div className="gallery-overlay">
<span className="gallery-overlay-text">FINISHING TOUCHES</span>
</div>
</div>
</div>
</section>

<section className="team" id="team">
<div className="team-header">
<div>
<div className="section-tag reveal">
<span className="section-tag-line"></span>
<span className="section-tag-text">The Team</span>
</div>
<h2 className="section-title reveal reveal-delay-1">MEET OUR <span className="italic">Master</span><br/>BARBERS</h2>
</div>
</div>
<div className="team-grid">
<div className="team-card reveal">
<div className="team-card-img">
<img alt="James Rivera" className="object-cover bg-center" src="https://images.unsplash.com/photo-1557862921-37829c790f19?w=800&amp;q=80"/>
</div>
<div className="team-card-info">
<div>
<div className="team-card-name">JAMES RIVERA</div>
<div className="team-card-role">Founder &amp; Head Barber</div>
</div>
<div className="team-card-socials">
<a href="#"><svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:chat-round-dots-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><defs><mask id="IconifyId19c668d3a56232cb50"><g fill="none"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22" fill="#fff"></path><path d="M15 12a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-4 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-4 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0" fill="#000"></path></g></mask></defs><path d="M0 0h24v24H0z" fill="currentColor" mask="url(#IconifyId19c668d3a56232cb50)"></path></svg></a>
</div>
</div>
</div>
<div className="team-card reveal reveal-delay-1">
<div className="team-card-img">
<img alt="Marcus Chen" className="object-cover bg-center" src="https://images.unsplash.com/photo-1597116648852-75764ecaf6f5?w=800&amp;q=80"/>
</div>
<div className="team-card-info">
<div>
<div className="team-card-name">MARCUS CHEN</div>
<div className="team-card-role">Senior Stylist</div>
</div>
<div className="team-card-socials">
<a href="#"><svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:chat-round-dots-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><defs><mask id="IconifyId19c668d3a56232cb51"><g fill="none"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22" fill="#fff"></path><path d="M15 12a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-4 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-4 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0" fill="#000"></path></g></mask></defs><path d="M0 0h24v24H0z" fill="currentColor" mask="url(#IconifyId19c668d3a56232cb51)"></path></svg></a>
</div>
</div>
</div>
<div className="team-card reveal reveal-delay-2">
<div className="team-card-img">
<img alt="David Okafor" className="object-cover bg-center" src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=800&amp;q=80"/>
</div>
<div className="team-card-info">
<div>
<div className="team-card-name">DAVID OKAFOR</div>
<div className="team-card-role">Beard Specialist</div>
</div>
<div className="team-card-socials">
<a href="#"><svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:chat-round-dots-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><defs><mask id="IconifyId19c668d3a56232cb52"><g fill="none"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22" fill="#fff"></path><path d="M15 12a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-4 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-4 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0" fill="#000"></path></g></mask></defs><path d="M0 0h24v24H0z" fill="currentColor" mask="url(#IconifyId19c668d3a56232cb52)"></path></svg></a>
</div>
</div>
</div>
</div>
</section>

<section className="testimonials" id="testimonials">
<div className="testimonial-bg-text">REVIEWS</div>
<div className="testimonials-header">
<div className="section-tag reveal" style={{justifyContent: 'center'}}>
<span className="section-tag-line"></span>
<span className="section-tag-text">Testimonials</span>
<span className="section-tag-line"></span>
</div>
<h2 className="section-title reveal reveal-delay-1">WHAT OUR <span className="italic">Clients</span> SAY</h2>
</div>
<div className="testimonial-slider">
<div className="testimonial-item">
<div className="testimonial-stars">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
</div>
<p className="testimonial-quote">"Blade &amp; Co. is not just a barbershop -- it's an experience. From the moment you walk in, you feel the attention to detail. James and his team are true artists. I wouldn't trust anyone else with my hair."</p>
<div className="testimonial-author-name">MICHAEL THORNTON</div>
<div className="testimonial-author-title">Client since 2019</div>
</div>
<div className="testimonial-item">
<div className="testimonial-stars">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
</div>
<p className="testimonial-quote">"The Royal package is worth every penny. Hot towel shave, the perfect fade, and a scalp massage that melts your stress away. This is what premium grooming should feel like. Best barbershop in the city, hands down."</p>
<div className="testimonial-author-name">ROBERT CASTELLANO</div>
<div className="testimonial-author-title">Client since 2020</div>
</div>
<div className="testimonial-item">
<div className="testimonial-stars">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
</div>
<p className="testimonial-quote">"I've been to barbershops all over the world, and Blade &amp; Co. ranks among the very best. The atmosphere, the skill, the conversation -- everything comes together perfectly. Marcus shaped my beard into a work of art."</p>
<div className="testimonial-author-name">ALEXANDER HUNT</div>
<div className="testimonial-author-title">Client since 2021</div>
</div>
</div>
<div className="testimonial-nav" id="testimonialNav">
<button className="testimonial-dot" data-index="0"></button>
<button className="testimonial-dot" data-index="1"></button>
<button className="testimonial-dot" data-index="2"></button>
</div>
</section>

<section className="booking" id="booking">
<div className="booking-inner">
<div className="booking-image reveal">
<img alt="Barbershop chair" src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=800&amp;q=85&amp;auto=format&amp;fit=crop"/>
</div>
<div className="booking-form-wrapper">
<div className="section-tag reveal">
<span className="section-tag-line"></span>
<span className="section-tag-text">Reserve Your Spot</span>
</div>
<h2 className="section-title reveal reveal-delay-1">BOOK YOUR <span className="italic">Visit</span></h2>
<form className="booking-form reveal reveal-delay-2" onsubmit="event.preventDefault();">
<div className="form-row">
<div className="form-group">
<label>First Name</label>
<input placeholder="John" type="text"/>
</div>
<div className="form-group">
<label>Last Name</label>
<input placeholder="Doe" type="text"/>
</div>
</div>
<div className="form-row">
<div className="form-group">
<label>Email</label>
<input placeholder="john@email.com" type="email"/>
</div>
<div className="form-group">
<label>Phone</label>
<input placeholder="+1 (555) 000-0000" type="tel"/>
</div>
</div>
<div className="form-group">
<label>Select Service</label>
<select>
<option value="">Choose a service...</option>
<option value="signature">Signature Cut -- $45</option>
<option value="shave">Hot Towel Shave -- $55</option>
<option value="beard">Beard Sculpting -- $35</option>
<option value="royal">The Royal -- $95</option>
<option value="design">Hair Design -- $60</option>
<option value="scalp">Scalp Treatment -- $40</option>
<option value="grey">Grey Blending -- $50</option>
<option value="facial">Facial Grooming -- $45</option>
</select>
</div>
<div className="form-group">
<label>Preferred Barber</label>
<select>
<option value="">No preference</option>
<option value="james">James Rivera</option>
<option value="marcus">Marcus Chen</option>
<option value="david">David Okafor</option>
</select>
</div>
<div className="form-row">
<div className="form-group">
<label>Date</label>
<input type="date"/>
</div>
<div className="form-group">
<label>Time</label>
<input type="time"/>
</div>
</div>
<button className="btn-submit" type="submit">
<span>Confirm Booking</span>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
</form>
</div>
</div>
</section>

<section className="instagram">
<div className="instagram-header">
<div className="section-tag reveal" style={{justifyContent: 'center'}}>
<span className="section-tag-line"></span>
<span className="section-tag-text">Follow Us</span>
<span className="section-tag-line"></span>
</div>
<h2 className="section-title reveal reveal-delay-1">ON <span className="italic">Instagram</span></h2>
<a className="instagram-handle reveal reveal-delay-2" href="#">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:camera-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21M12 9.273c-2.301 0-4.167 1.831-4.167 4.09S9.7 17.456 12 17.456s4.167-1.832 4.167-4.091S14.3 9.273 12 9.273m0 1.636c-1.38 0-2.5 1.099-2.5 2.455c0 1.355 1.12 2.454 2.5 2.454s2.5-1.099 2.5-2.454s-1.12-2.455-2.5-2.455m4.722-.818c0-.452.373-.818.834-.818h1.11c.46 0 .834.366.834.818a.826.826 0 0 1-.833.818h-1.111a.826.826 0 0 1-.834-.818" fill="currentColor" fill-rule="evenodd"></path></svg>
                @bladeandco
            </a>
</div>
<div className="instagram-grid">
<div className="instagram-item">
<img alt="Instagram post" loading="lazy" src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&amp;q=80&amp;auto=format&amp;fit=crop"/>
</div>
<div className="instagram-item">
<img alt="Instagram post" loading="lazy" src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&amp;q=80&amp;auto=format&amp;fit=crop"/>
</div>
<div className="instagram-item">
<img alt="Instagram post" loading="lazy" src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&amp;q=80&amp;auto=format&amp;fit=crop"/>
</div>
<div className="instagram-item">
<img alt="Instagram post" loading="lazy" src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&amp;q=80&amp;auto=format&amp;fit=crop"/>
</div>
<div className="instagram-item">
<img alt="Instagram post" loading="lazy" src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&amp;q=80&amp;auto=format&amp;fit=crop"/>
</div>
<div className="instagram-item">
<img alt="Instagram post" loading="lazy" src="https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=400&amp;q=80&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<footer className="footer">
<div className="footer-top">
<div>
<div className="footer-brand-name">BLADE <span className="gold">&amp;</span> CO.</div>
<p className="footer-brand-desc">Where tradition meets modern craft. Premium grooming experiences for the distinguished gentleman since 2018.</p>
<div className="footer-socials">
<a href="#"><svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:camera-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21M12 9.273c-2.301 0-4.167 1.831-4.167 4.09S9.7 17.456 12 17.456s4.167-1.832 4.167-4.091S14.3 9.273 12 9.273m0 1.636c-1.38 0-2.5 1.099-2.5 2.455c0 1.355 1.12 2.454 2.5 2.454s2.5-1.099 2.5-2.454s-1.12-2.455-2.5-2.455m4.722-.818c0-.452.373-.818.834-.818h1.11c.46 0 .834.366.834.818a.826.826 0 0 1-.833.818h-1.111a.826.826 0 0 1-.834-.818" fill="currentColor" fill-rule="evenodd"></path></svg></a>
<a href="#"><svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:chat-round-dots-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><defs><mask id="IconifyId19c668d3a56232cb53"><g fill="none"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22" fill="#fff"></path><path d="M15 12a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-4 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-4 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0" fill="#000"></path></g></mask></defs><path d="M0 0h24v24H0z" fill="currentColor" mask="url(#IconifyId19c668d3a56232cb53)"></path></svg></a>
<a href="#"><svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:share-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M13.803 5.333c0-1.84 1.5-3.333 3.348-3.333A3.34 3.34 0 0 1 20.5 5.333c0 1.841-1.5 3.334-3.349 3.334a3.35 3.35 0 0 1-2.384-.994l-4.635 3.156a3.34 3.34 0 0 1-.182 1.917l5.082 3.34a3.35 3.35 0 0 1 2.12-.753a3.34 3.34 0 0 1 3.348 3.334C20.5 20.507 19 22 17.151 22a3.34 3.34 0 0 1-3.348-3.333a3.3 3.3 0 0 1 .289-1.356L9.05 14a3.35 3.35 0 0 1-2.202.821A3.34 3.34 0 0 1 3.5 11.487a3.34 3.34 0 0 1 3.348-3.333c1.064 0 2.01.493 2.623 1.261l4.493-3.059a3.3 3.3 0 0 1-.161-1.023" fill="currentColor" fill-rule="evenodd"></path></svg></a>
<a href="#"><svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:play-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" fill="currentColor"></path></svg></a>
</div>
</div>
<div className="footer-col">
<div className="footer-col-title">QUICK LINKS</div>
<ul>
<li><a href="#about">Our Story</a></li>
<li><a href="#services">Services</a></li>
<li><a href="#gallery">Gallery</a></li>
<li><a href="#team">Our Barbers</a></li>
<li><a href="#booking">Book Online</a></li>
</ul>
</div>
<div className="footer-col">
<div className="footer-col-title">SERVICES</div>
<ul>
<li><a href="#services">Signature Cut</a></li>
<li><a href="#services">Hot Towel Shave</a></li>
<li><a href="#services">Beard Sculpting</a></li>
<li><a href="#services">The Royal</a></li>
<li><a href="#services">Hair Design</a></li>
</ul>
</div>
<div className="footer-col">
<div className="footer-col-title">VISIT US</div>
<div className="footer-contact-item">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:map-point-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12 2c-4.418 0-8 4.003-8 8.5c0 4.462 2.553 9.312 6.537 11.174a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.962 20 10.5C20 6.003 16.418 2 12 2m0 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4" fill="currentColor" fill-rule="evenodd"></path></svg>
<p>742 Barber Lane, Suite 101<br/>Downtown District, NY 10012</p>
</div>
<div className="footer-contact-item">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:phone-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317" fill="currentColor"></path></svg>
<p>+1 (555) 234-5678</p>
</div>
<div className="footer-contact-item">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:clock-circle-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><defs><mask id="IconifyId19c668d3a56232cb54"><g fill="none"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="#fff"></path><path clip-rule="evenodd" d="M12 7.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75" fill="#000" fill-rule="evenodd"></path></g></mask></defs><path d="M0 0h24v24H0z" fill="currentColor" mask="url(#IconifyId19c668d3a56232cb54)"></path></svg>
<p>Mon-Fri: 9AM - 8PM<br/>Sat: 9AM - 6PM<br/>Sun: 10AM - 4PM</p>
</div>
</div>
</div>
<div className="footer-bottom">
<p>2025 BLADE &amp; CO. All rights reserved.</p>
<div className="footer-bottom-links">
<a href="#">Privacy Policy</a>
<a href="#">Terms of Service</a>
</div>
</div>
</footer>


    </>
  );
}
