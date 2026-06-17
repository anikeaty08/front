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



        // Scroll Progress
        const scrollProgress = document.querySelector('.scroll-progress');
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const progress = scrolled / maxScroll;
            scrollProgress.style.transform = `scaleX(${progress})`;
        });

        // Mobile Menu
        const menuBtn = document.querySelector('.menu-btn');
        const mobileMenu = document.querySelector('.mobile-menu');
        let menuOpen = false;

        menuBtn.addEventListener('click', () => {
            menuOpen = !menuOpen;
            mobileMenu.classList.toggle('active');
            menuBtn.children[0].style.transform = menuOpen ? 'rotate(45deg) translate(4px, 4px)' : '';
            menuBtn.children[1].style.transform = menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : '';
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuOpen = false;
                mobileMenu.classList.remove('active');
                menuBtn.children[0].style.transform = '';
                menuBtn.children[1].style.transform = '';
            });
        });

        // Reveal Animations
        const reveals = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        reveals.forEach(el => revealObserver.observe(el));

        // Testimonial Carousel
        const testimonialSlides = document.querySelector('.testimonial-slides');
        const testimonialDots = document.querySelectorAll('.testimonial-dot');
        let currentSlide = 0;

        function goToSlide(index) {
            currentSlide = index;
            testimonialSlides.style.transform = `translateX(-${index * 100}%)`;
            testimonialDots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }

        testimonialDots.forEach(dot => {
            dot.addEventListener('click', () => {
                goToSlide(parseInt(dot.dataset.index));
            });
        });

        // Auto advance
        setInterval(() => {
            currentSlide = (currentSlide + 1) % 3;
            goToSlide(currentSlide);
        }, 6000);

        // Horizontal Scroll with drag
        const projectsScroll = document.querySelector('.projects-scroll');
        let isDown = false;
        let startX;
        let scrollLeft;

        projectsScroll.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - projectsScroll.offsetLeft;
            scrollLeft = projectsScroll.scrollLeft;
        });

        projectsScroll.addEventListener('mouseleave', () => isDown = false);
        projectsScroll.addEventListener('mouseup', () => isDown = false);

        projectsScroll.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - projectsScroll.offsetLeft;
            const walk = (x - startX) * 2;
            projectsScroll.scrollLeft = scrollLeft - walk;
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Form submission
        const form = document.querySelector('.contact-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.textContent;

            btn.textContent = 'Sending...';
            btn.style.opacity = '0.7';

            setTimeout(() => {
                btn.textContent = 'Message Sent';
                form.reset();

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.opacity = '1';
                }, 2000);
            }, 1500);
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
      

<div className="page-transition"></div>

<div className="scroll-line">
<div className="scroll-progress"></div>
</div>

<nav className="">
<a className="logo" href="#">James Chen</a>
<ul className="nav-links">
<li><a href="#about">About</a></li>
<li><a href="#projects">Work</a></li>
<li><a href="#services">Services</a></li>
<li><a href="#contact">Contact</a></li>
</ul>
<button aria-label="Menu" className="menu-btn">
<span></span>
<span></span>
</button>
</nav>

<div className="mobile-menu">
<a href="#about">About</a>
<a href="#projects">Work</a>
<a href="#services">Services</a>
<a href="#contact">Contact</a>
</div>

<section className="hero" id="home">

<div className="hero-orb hero-orb-1"></div>
<div className="hero-orb hero-orb-2"></div>
<div className="hero-orb hero-orb-3"></div>
<div className="hero-grain"></div>
<div className="hero-container">
<div className="hero-content">
<div className="hero-tag">
<span className="hero-tag-line"></span>
<span className="hero-tag-text">Creative Developer &amp; Designer</span>
</div>
<h1 className="hero-title">
<span className="line"><span className="word">Crafting</span></span>
<span className="line"><span className="word"></span></span>
<span className="line"><span className="word">experiences</span></span>
</h1>
<p className="hero-desc">
                    I design and build thoughtful digital products that balance form and function,
                    creating meaningful connections between brands and people.
                </p>
<div className="hero-cta">
<a className="btn btn-primary" href="#projects"><span>View Work</span></a>
<a className="btn btn-secondary" href="#contact">Get in Touch</a>
</div>
</div>
<div className="hero-visual">
<div className="hero-image-wrapper">
<img alt="Abstract creative design" className="hero-image object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2dae3a26-37c5-47e4-8c42-e88840f488e9_1600w.webp"/>
<div className="hero-image-frame"></div>
</div>
<div className="hero-badge">
<svg viewbox="0 0 100 100">
<defs>
<path d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" id="circlePath"></path>
</defs>
<text>
<textpath className="hero-badge-text" href="#circlePath">
                                AVAILABLE FOR WORK • AVAILABLE FOR WORK •
                            </textpath>
</text>
</svg>
</div>
</div>
</div>
<div className="hero-scroll">
<span className="hero-scroll-text">Scroll</span>
<div className="hero-scroll-line"></div>
</div>
</section>

<div className="marquee">
<div className="marquee-content">
<span className="marquee-item">Strategy <span>·</span></span>
<span className="marquee-item">Design <span>·</span></span>
<span className="marquee-item">Development <span className="">·</span></span>
<span className="marquee-item">Branding <span>·</span></span>
<span className="marquee-item">Motion <span>·</span></span>
<span className="marquee-item">Strategy <span>·</span></span>
<span className="marquee-item">Design <span>·</span></span>
<span className="marquee-item">Development <span>·</span></span>
<span className="marquee-item">Branding <span>·</span></span>
<span className="marquee-item">Motion <span>·</span></span>
</div>
</div>

<section className="about" id="about">
<div className="section-header reveal">
<div className="section-number">01</div>
<h2 className="section-title">About <em>me</em></h2>
</div>
<div className="about-grid">
<div className="about-image-wrapper reveal">
<img alt="About" className="about-image object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/48158ae4-0512-47bf-8a73-ab2be48fdadc_1600w.webp"/>
<div className="about-image-border"></div>
</div>
<div className="about-content">
<p className="about-intro reveal reveal-delay-1">
                    I'm a creative developer based in San Francisco, passionate about
                    building digital experiences that make a lasting impression.
                </p>
<p className="about-text reveal reveal-delay-2">
                    With over eight years of experience working with startups, agencies, and
                    Fortune 500 companies, I bring a unique blend of design sensibility and
                    technical expertise to every project. My approach centers on understanding
                    the core problem before crafting elegant solutions that serve both users
                    and business objectives.
                </p>
<p className="about-text reveal reveal-delay-2">
                    When I'm not designing or coding, you'll find me exploring architecture,
                    photographing urban landscapes, or experimenting with new creative tools.
                </p>
<div className="stats-grid reveal reveal-delay-3">
<div className="stat-item">
<div className="stat-number">8+</div>
<div className="stat-label">Years Experience</div>
</div>
<div className="stat-item">
<div className="stat-number">120+</div>
<div className="stat-label">Projects Completed</div>
</div>
<div className="stat-item">
<div className="stat-number">40+</div>
<div className="stat-label">Happy Clients</div>
</div>
</div>
</div>
</div>
</section>

<section className="projects" id="projects">
<div className="projects-header">
<div className="section-header reveal">
<div className="section-number">02</div>
<h2 className="section-title">Selected <em>work</em></h2>
</div>
<a className="view-all reveal" href="#">
                View all projects
                <svg fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</a>
</div>
<div className="projects-scroll">
<div className="projects-track">
<article className="project-card reveal">
<div className="project-image-wrapper">
<img alt="Meridian" className="project-image object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/63199527-eed1-4d8c-ad74-7bfa3396440f_1600w.webp"/>
<div className="project-overlay">
<a className="project-link" href="#">View Project</a>
</div>
</div>
<div className="project-info">
<div>
<h3 className="project-title">Meridian Analytics</h3>
<p className="project-category">Web Design &amp; Development</p>
</div>
<span className="project-year">2024</span>
</div>
</article>
<article className="project-card reveal">
<div className="project-image-wrapper">
<img alt="Aether" className="project-image object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bb9b217e-05c2-4e6e-8f35-3fcb7f5b5e0c_1600w.webp"/>
<div className="project-overlay">
<a className="project-link" href="#">View Project</a>
</div>
</div>
<div className="project-info">
<div>
<h3 className="project-title">Aether Health</h3>
<p className="project-category">Mobile App Design</p>
</div>
<span className="project-year">2024</span>
</div>
</article>
<article className="project-card reveal">
<div className="project-image-wrapper">
<img alt="Noir" className="project-image object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9497e84f-cd43-4bed-8735-bbc8bfb0606f_1600w.webp"/>
<div className="project-overlay">
<a className="project-link" href="#">View Project</a>
</div>
</div>
<div className="project-info">
<div>
<h3 className="project-title">Noir Studio</h3>
<p className="project-category">Brand Identity</p>
</div>
<span className="project-year">2023</span>
</div>
</article>
<article className="project-card reveal">
<div className="project-image-wrapper">
<img alt="Vault" className="project-image object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c1042d62-4402-4150-a295-c82f622f7b03_1600w.webp"/>
<div className="project-overlay">
<a className="project-link" href="#">View Project</a>
</div>
</div>
<div className="project-info">
<div>
<h3 className="project-title">Vault Finance</h3>
<p className="project-category">Web Application</p>
</div>
<span className="project-year">2023</span>
</div>
</article>
<article className="project-card reveal">
<div className="project-image-wrapper">
<img alt="Pulse" className="project-image object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa91f7af-c0ee-487e-9b71-34905a5f7414_1600w.webp"/>
<div className="project-overlay">
<a className="project-link" href="#">View Project</a>
</div>
</div>
<div className="project-info">
<div>
<h3 className="project-title">Pulse IoT</h3>
<p className="project-category">Product Design</p>
</div>
<span className="project-year">2023</span>
</div>
</article>
</div>
</div>
<div className="scroll-hint reveal">
<div className="scroll-hint-line"></div>
<span>Drag to explore</span>
</div>
</section>

<section className="services" id="services">
<div className="section-header reveal">
<div className="section-number">03</div>
<h2 className="section-title">What I <em>do</em></h2>
</div>
<div className="services-grid">
<div className="service-item reveal">
<div className="service-number">01</div>
<h3 className="service-title">Digital Strategy</h3>
<p className="service-desc">
                    Understanding your goals and audience to create a roadmap
                    that aligns design decisions with business objectives.
                </p>
</div>
<div className="service-item reveal">
<div className="service-number">02</div>
<h3 className="service-title">UI/UX Design</h3>
<p className="service-desc">
                    Crafting intuitive interfaces that balance aesthetic appeal
                    with usability, creating seamless user journeys.
                </p>
</div>
<div className="service-item reveal">
<div className="service-number">03</div>
<h3 className="service-title">Web Development</h3>
<p className="service-desc">
                    Building performant, accessible websites using modern
                    technologies that scale with your business needs.
                </p>
</div>
<div className="service-item reveal">
<div className="service-number">04</div>
<h3 className="service-title">Brand Identity</h3>
<p className="service-desc">
                    Developing cohesive visual systems that communicate your
                    brand's essence across every touchpoint.
                </p>
</div>
</div>
</section>

<section className="testimonials" id="testimonials">
<div className="section-header reveal">
<div className="section-number">04</div>
<h2 className="section-title">Kind <em>words</em></h2>
</div>
<div className="testimonial-wrapper reveal">
<div className="testimonial-track">
<div className="testimonial-slides">
<div className="testimonial-slide">
<p className="testimonial-quote">
                            "James has an exceptional ability to translate complex ideas into
                            elegant, user-friendly designs. His work elevated our brand and
                            significantly improved our conversion rates."
                        </p>
<div className="testimonial-author">
<span className="testimonial-name">Sarah Mitchell</span>
<span className="testimonial-role">CEO, Meridian Analytics</span>
</div>
</div>
<div className="testimonial-slide">
<p className="testimonial-quote">
                            "Working with James was a transformative experience. His attention
                            to detail and strategic thinking resulted in a product that exceeded
                            all expectations."
                        </p>
<div className="testimonial-author">
<span className="testimonial-name">Michael Torres</span>
<span className="testimonial-role">Founder, Aether Health</span>
</div>
</div>
<div className="testimonial-slide">
<p className="testimonial-quote">
                            "Rare is the designer who combines such strong visual skills with
                            deep technical knowledge. James delivers work that is both beautiful
                            and built to last."
                        </p>
<div className="testimonial-author">
<span className="testimonial-name">Emily Nakamura</span>
<span className="testimonial-role">Creative Director, Noir Studio</span>
</div>
</div>
</div>
</div>
<div className="testimonial-nav">
<div className="testimonial-dot" data-index="0"></div>
<div className="testimonial-dot" data-index="1"></div>
<div className="testimonial-dot" data-index="2"></div>
</div>
</div>
</section>

<section className="contact" id="contact">
<div className="section-header reveal">
<div className="section-number">05</div>
<h2 className="section-title">Let's <em>talk</em></h2>
</div>
<div className="contact-grid">
<div className="contact-info reveal">
<h3>Have a project in mind?</h3>
<p>
                    I'm always interested in hearing about new projects and opportunities.
                    Whether you have a detailed brief or just a rough idea, let's start
                    a conversation.
                </p>
<div className="contact-details">
<div className="contact-item">
<span className="contact-label">Email</span>
<span className="contact-value">
<a href="mailto:hello@jameschen.design">hello@jameschen.design</a>
</span>
</div>
<div className="contact-item">
<span className="contact-label">Phone</span>
<span className="contact-value">+1 (415) 555-0123</span>
</div>
<div className="contact-item">
<span className="contact-label">Location</span>
<span className="contact-value">San Francisco, CA</span>
</div>
</div>
</div>
<form className="contact-form reveal">
<div className="form-group">
<input className="form-input" placeholder=" " required="" type="text"/>
<label className="form-label">Your Name</label>
</div>
<div className="form-group">
<input className="form-input" placeholder=" " required="" type="email"/>
<label className="form-label">Email Address</label>
</div>
<div className="form-group">
<textarea className="form-input form-textarea" placeholder=" " required=""></textarea>
<label className="form-label">Tell me about your project</label>
</div>
<button className="btn btn-primary" type="submit">Send Message</button>
</form>
</div>
</section>

<footer>
<div className="footer-top">
<div className="footer-brand">
<h2>Let's create together.</h2>
<p>Available for select projects in 2024</p>
</div>
<div className="footer-links">
<div className="footer-column">
<h4>Navigation</h4>
<ul>
<li><a href="#about">About</a></li>
<li><a href="#projects">Work</a></li>
<li><a href="#services">Services</a></li>
<li><a href="#contact">Contact</a></li>
</ul>
</div>
<div className="footer-column">
<h4>Connect</h4>
<ul>
<li><a href="#">LinkedIn</a></li>
<li><a href="#">Twitter</a></li>
<li><a href="#">Dribbble</a></li>
<li><a href="#">Instagram</a></li>
</ul>
</div>
</div>
</div>
<div className="footer-bottom">
<p className="footer-copy">© 2024 James Chen. All rights reserved.</p>
<div className="social-links">
<a href="#">Li</a>
<a href="#">Tw</a>
<a href="#">Dr</a>
<a href="#">Ig</a>
</div>
</div>
</footer>


    </>
  );
}
