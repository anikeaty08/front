import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic', offset: 50 });
    


        const mobileToggle = document.getElementById('mobile-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        let menuOpen = false;

        mobileToggle.addEventListener('click', () => {
            menuOpen = !menuOpen;
            mobileMenu.classList.toggle('active');
            menuIcon.setAttribute('icon', menuOpen ? 'solar:close-circle-linear' : 'solar:hamburger-menu-linear');
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                menuOpen = false;
                menuIcon.setAttribute('icon', 'solar:hamburger-menu-linear');
            });
        });
    


        const navbar = document.getElementById('navbar');
        const navLinks = document.querySelectorAll('.nav-link[data-section]');
        const sections = document.querySelectorAll('section[id]');

        function updateNavbar() {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(5, 10, 24, 0.95)';
                navbar.style.borderBottomColor = 'rgba(255,255,255,0.08)';
            } else {
                navbar.style.background = 'rgba(5, 10, 24, 0.6)';
                navbar.style.borderBottomColor = 'rgba(255,255,255,0.05)';
            }
        }

        function updateActiveNav() {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-section') === current) {
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', () => {
            updateNavbar();
            updateActiveNav();
        });
    


        const progressBar = document.getElementById('scroll-progress');
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    


        const backToTop = document.getElementById('back-to-top');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    


        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    


        function animateCounters() {
            const counters = document.querySelectorAll('[data-count]');
            counters.forEach(counter => {
                const target = parseFloat(counter.getAttribute('data-count'));
                const suffix = counter.getAttribute('data-suffix') || '';
                const isDecimal = counter.getAttribute('data-decimal') === 'true';
                const duration = 2000;
                const startTime = performance.now();

                function update(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 4);
                    const current = eased * target;

                    if (isDecimal) {
                        counter.textContent = current.toFixed(1) + suffix;
                    } else {
                        counter.textContent = Math.floor(current) + suffix;
                    }

                    if (progress < 1) {
                        requestAnimationFrame(update);
                    }
                }
                requestAnimationFrame(update);
            });
        }

        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    heroObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        heroObserver.observe(document.getElementById('hero'));
    


        const chartObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bars = entry.target.querySelectorAll('[data-height]');
                    bars.forEach((bar, index) => {
                        setTimeout(() => {
                            bar.style.height = bar.getAttribute('data-height') + '%';
                        }, index * 100);
                    });
                    chartObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        chartObserver.observe(document.getElementById('chart-bars'));
    


        const dateEl = document.getElementById('dashboard-date');
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
        dateEl.textContent = 'Today, ' + now.toLocaleDateString('en-IN', options);
    


        const words = ['Hospitality', 'Hotel', 'Restaurant', 'Resort', 'Property'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingEl = document.getElementById('typing-text');

        function typeEffect() {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                typingEl.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingEl.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            let speed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentWord.length) {
                speed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                speed = 300;
            }

            setTimeout(typeEffect, speed);
        }

        setTimeout(typeEffect, 1500);
    


        const particlesContainer = document.getElementById('particles-container');
        const colors = ['#6366f1', '#ec4899', '#3b82f6', '#818cf8', '#f472b6'];

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            const size = Math.random() * 4 + 2;
            const color = colors[Math.floor(Math.random() * colors.length)];
            particle.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: floatParticle ${Math.random() * 10 + 10}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
            `;
            particlesContainer.appendChild(particle);
        }

        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatParticle {
                0% { transform: translateY(0) translateX(0); opacity: 0; }
                10% { opacity: 0.3; }
                90% { opacity: 0.3; }
                100% { transform: translateY(-100vh) translateX(${Math.random() > 0.5 ? '' : '-'}${Math.random() * 200}px); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    


        import createGlobe from 'https://cdn.skypack.dev/cobe';

        let phi = 0;
        let canvas = document.getElementById('globe-canvas');

        function setCanvasSize() {
            const container = canvas.parentElement;
            const size = Math.min(container.offsetWidth, 550);
            canvas.width = size * 2;
            canvas.height = size * 2;
            canvas.style.width = size + 'px';
            canvas.style.height = size + 'px';
            return size;
        }

        let currentSize = setCanvasSize();

        const globe = createGlobe(canvas, {
            devicePixelRatio: 2,
            width: currentSize * 2,
            height: currentSize * 2,
            phi: 0,
            theta: 0.25,
            dark: 1,
            diffuse: 1.8,
            mapSamples: 16000,
            mapBrightness: 3.5,
            baseColor: [0.39, 0.4, 0.95],
            markerColor: [0.93, 0.28, 0.6],
            glowColor: [0.05, 0.05, 0.15],
            markers: [
                { location: [26.87, 83.95], size: 0.08 },
                { location: [19.076, 72.877], size: 0.05 },
                { location: [28.613, 77.209], size: 0.05 },
                { location: [12.971, 77.594], size: 0.04 },
                { location: [27.175, 78.042], size: 0.04 },
                { location: [15.299, 74.124], size: 0.04 },
            ],
            onRender: (state) => {
                state.phi = phi;
                phi += 0.004;
                state.width = currentSize * 2;
                state.height = currentSize * 2;
            }
        });

        window.addEventListener('resize', () => {
            currentSize = setCanvasSize();
        });

        window.addEventListener('beforeunload', () => {
            globe.destroy();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="scroll-progress" id="scroll-progress" style={{width: '0%'}}></div>

<button aria-label="Back to top" className="back-to-top" id="back-to-top">
<iconify-icon icon="solar:arrow-up-linear" style={{color: '#818cf8'}} width="20"></iconify-icon>
</button>

<a aria-label="Chat on WhatsApp" className="whatsapp-float" href="https://wa.me/918354943928?text=Hello%20MyPMS%20Solutions%2C%20I%20want%20to%20enquire%20about%20your%20PMS%2FPOS%20services." rel="noopener" target="_blank">
<svg fill="white" height="32" viewbox="0 0 24 24" width="32"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
</a>

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500" id="navbar" style={{background: 'rgba(5, 10, 24, 0.6)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16 lg:h-18">
<a className="flex items-center gap-2 flex-shrink-0" href="#hero">
<div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background: 'linear-gradient(135deg, #6366f1, #ec4899)'}}>
<span className="text-white font-semibold text-sm tracking-tighter">M</span>
</div>
<span className="font-semibold text-base tracking-tight text-white">MyPMS<span className="text-gradient"> Solutions</span></span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="nav-link text-sm text-slate-300" data-section="services" href="#services">Services</a>
<a className="nav-link text-sm text-slate-300" data-section="features" href="#features">Features</a>
<a className="nav-link text-sm text-slate-300" data-section="product" href="#product">Product</a>
<a className="nav-link text-sm text-slate-300" data-section="testimonials" href="#testimonials">Testimonials</a>
<a className="nav-link text-sm text-slate-300" data-section="contact" href="#contact">Contact</a>
</div>
<div className="hidden md:flex items-center gap-3">
<a className="primary-btn rounded-lg px-5 py-2 text-sm font-medium text-white" href="https://wa.me/918354943928?text=Hello%20MyPMS%20Solutions%2C%20I%20want%20to%20book%20a%20demo." target="_blank">
<span>Book a Demo</span>
</a>
</div>
<button aria-label="Toggle menu" className="md:hidden text-white p-2" id="mobile-toggle">
<iconify-icon icon="solar:hamburger-menu-linear" id="menu-icon" style={{color: '#f0f4ff'}} width="24"></iconify-icon>
</button>
</div>
<div className="mobile-menu md:hidden flex-col gap-2 pb-4" id="mobile-menu">
<a className="block py-2 text-sm text-slate-300 hover:text-indigo-400 transition-colors" href="#services">Services</a>
<a className="block py-2 text-sm text-slate-300 hover:text-indigo-400 transition-colors" href="#features">Features</a>
<a className="block py-2 text-sm text-slate-300 hover:text-indigo-400 transition-colors" href="#product">Product</a>
<a className="block py-2 text-sm text-slate-300 hover:text-indigo-400 transition-colors" href="#testimonials">Testimonials</a>
<a className="block py-2 text-sm text-slate-300 hover:text-indigo-400 transition-colors" href="#contact">Contact</a>
<a className="primary-btn rounded-lg px-5 py-2.5 text-sm font-medium text-white text-center mt-2" href="https://wa.me/918354943928?text=Hello%20MyPMS%20Solutions%2C%20I%20want%20to%20book%20a%20demo." target="_blank">
<span>Book a Demo</span>
</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
<div className="absolute inset-0 pointer-events-none" id="particles-container"></div>
<div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none" style={{background: 'radial-gradient(circle, #6366f1, transparent 70%)', animation: 'auroraShift 12s ease-in-out infinite alternate'}}></div>
<div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none" style={{background: 'radial-gradient(circle, #ec4899, transparent 70%)', animation: 'auroraShift 10s ease-in-out infinite alternate-reverse'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
<div className="relative z-10" data-aos="fade-right" data-aos-duration="1000">
<div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 shimmer-border">
<span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
<span className="text-xs font-medium text-slate-300">Now serving 100+ properties across India</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
                        The Future of<br/>
<span className="text-gradient" id="typing-text">Hospitality</span><br/>
                        Technology
                    </h1>
<p className="text-base lg:text-lg text-slate-400 max-w-lg mb-8 leading-relaxed">
                        Cloud-native PMS &amp; POS platform built for modern hotels, restaurants, and hospitality businesses. Streamline operations, boost revenue, delight guests.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="primary-btn rounded-xl px-8 py-3.5 text-sm font-medium text-white text-center" href="https://wa.me/918354943928?text=Hello%20MyPMS%20Solutions%2C%20I%20want%20to%20book%20a%20demo%20of%20your%20PMS%2FPOS%20platform." target="_blank">
<span className="flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" style={{color: 'white'}} width="18"></iconify-icon>
                                Book a Demo
                            </span>
</a>
<a className="glass rounded-xl px-8 py-3.5 text-sm font-medium text-white text-center hover:bg-white/10 transition-all duration-300" href="https://wa.me/918354943928?text=Hello%20MyPMS%20Solutions%2C%20I%20want%20to%20enquire%20about%20your%20services." target="_blank">
<span className="flex items-center justify-center gap-2">
<svg fill="#25D366" height="18" viewbox="0 0 24 24" width="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
                                Chat on WhatsApp
                            </span>
</a>
</div>

<div className="flex gap-8 sm:gap-12">
<div>
<div className="text-2xl sm:text-3xl font-semibold stat-num tracking-tight" data-count="100" data-suffix="+">0+</div>
<div className="text-xs text-slate-500 mt-1">Properties</div>
</div>
<div>
<div className="text-2xl sm:text-3xl font-semibold stat-num tracking-tight" data-count="99.9" data-decimal="true" data-suffix="%">0%</div>
<div className="text-xs text-slate-500 mt-1">Uptime</div>
</div>
<div>
<div className="text-2xl sm:text-3xl font-semibold stat-num tracking-tight">24/7</div>
<div className="text-xs text-slate-500 mt-1">Support</div>
</div>
</div>
</div>

<div className="relative flex items-center justify-center" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full opacity-15 blur-2xl" style={{background: 'radial-gradient(circle, #6366f1, #ec4899, transparent 70%)'}}></div>
</div>
<canvas id="globe-canvas" style={{width: '100%', maxWidth: '550px', aspectRatio: '1'}}></canvas>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
<span className="text-xs font-medium uppercase tracking-widest text-indigo-400 mb-4 block">Our Services</span>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Everything your property needs to <span className="text-gradient">thrive</span></h2>
<p className="text-slate-400 text-base">End-to-end hospitality technology solutions designed to modernize operations and maximize revenue.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 lg:gap-8">

<div className="glass-card rounded-2xl p-8" data-aos="fade-up" data-aos-delay="0">
<div className="icon-3d icon-3d-purple mb-6 float-animate">
<iconify-icon icon="solar:cloud-bold-duotone" style={{color: 'white'}} width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-3">Cloud PMS &amp; POS</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">Unified property management and point-of-sale system. Manage reservations, check-ins, billing, inventory — all from one dashboard.</p>
<ul className="space-y-2.5">
<li className="flex items-center gap-2 text-xs text-slate-400">
<iconify-icon icon="solar:check-circle-bold" style={{color: '#818cf8'}} width="16"></iconify-icon>
                            Real-time room management
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-400">
<iconify-icon icon="solar:check-circle-bold" style={{color: '#818cf8'}} width="16"></iconify-icon>
                            Automated billing &amp; invoicing
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-400">
<iconify-icon icon="solar:check-circle-bold" style={{color: '#818cf8'}} width="16"></iconify-icon>
                            Multi-property support
                        </li>
</ul>
</div>

<div className="glass-card rounded-2xl p-8" data-aos="fade-up" data-aos-delay="100">
<div className="icon-3d icon-3d-pink mb-6 float-animate-delay">
<iconify-icon icon="solar:monitor-bold-duotone" style={{color: 'white'}} width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-3">Website Development</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">Beautiful, conversion-optimized websites for hotels and restaurants. Direct booking engines, SEO-ready, lightning-fast performance.</p>
<ul className="space-y-2.5">
<li className="flex items-center gap-2 text-xs text-slate-400">
<iconify-icon icon="solar:check-circle-bold" style={{color: '#f472b6'}} width="16"></iconify-icon>
                            Direct booking engine
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-400">
<iconify-icon icon="solar:check-circle-bold" style={{color: '#f472b6'}} width="16"></iconify-icon>
                            Mobile-first responsive design
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-400">
<iconify-icon icon="solar:check-circle-bold" style={{color: '#f472b6'}} width="16"></iconify-icon>
                            SEO optimized architecture
                        </li>
</ul>
</div>

<div className="glass-card rounded-2xl p-8" data-aos="fade-up" data-aos-delay="200">
<div className="icon-3d icon-3d-blue mb-6 float-animate-delay2">
<iconify-icon icon="solar:chart-square-bold-duotone" style={{color: 'white'}} width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-3">Digital Marketing</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">Data-driven digital marketing and revenue growth strategies. OTA optimization, social media, Google Ads, and reputation management.</p>
<ul className="space-y-2.5">
<li className="flex items-center gap-2 text-xs text-slate-400">
<iconify-icon icon="solar:check-circle-bold" style={{color: '#60a5fa'}} width="16"></iconify-icon>
                            OTA channel management
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-400">
<iconify-icon icon="solar:check-circle-bold" style={{color: '#60a5fa'}} width="16"></iconify-icon>
                            Social media &amp; content strategy
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-400">
<iconify-icon icon="solar:check-circle-bold" style={{color: '#60a5fa'}} width="16"></iconify-icon>
                            Revenue optimization
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative" id="industries">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
<span className="text-xs font-medium uppercase tracking-widest text-indigo-400 mb-4 block">Industries</span>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Built for every <span className="text-gradient">hospitality</span> business</h2>
<p className="text-slate-400 text-base">From boutique hotels to multi-chain restaurants, our platform adapts to your unique needs.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" data-aos="fade-up" data-aos-delay="100">
<div className="industry-card">
<div className="icon-3d icon-3d-sm icon-3d-purple mx-auto mb-3">
<iconify-icon icon="solar:buildings-2-bold-duotone" style={{color: 'white'}} width="24"></iconify-icon>
</div>
<div className="text-sm font-medium">Hotels</div>
</div>
<div className="industry-card">
<div className="icon-3d icon-3d-sm icon-3d-pink mx-auto mb-3">
<iconify-icon icon="solar:cup-hot-bold-duotone" style={{color: 'white'}} width="24"></iconify-icon>
</div>
<div className="text-sm font-medium">Restaurants</div>
</div>
<div className="industry-card">
<div className="icon-3d icon-3d-sm icon-3d-blue mx-auto mb-3">
<iconify-icon icon="solar:home-smile-bold-duotone" style={{color: 'white'}} width="24"></iconify-icon>
</div>
<div className="text-sm font-medium">Resorts</div>
</div>
<div className="industry-card">
<div className="icon-3d icon-3d-sm icon-3d-cyan mx-auto mb-3">
<iconify-icon icon="solar:bed-bold-duotone" style={{color: 'white'}} width="24"></iconify-icon>
</div>
<div className="text-sm font-medium">Hostels</div>
</div>
<div className="industry-card">
<div className="icon-3d icon-3d-sm icon-3d-emerald mx-auto mb-3">
<iconify-icon icon="solar:home-2-bold-duotone" style={{color: 'white'}} width="24"></iconify-icon>
</div>
<div className="text-sm font-medium">Homestays</div>
</div>
<div className="industry-card">
<div className="icon-3d icon-3d-sm icon-3d-orange mx-auto mb-3">
<iconify-icon icon="solar:cup-star-bold-duotone" style={{color: 'white'}} width="24"></iconify-icon>
</div>
<div className="text-sm font-medium">Cafés &amp; Bars</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
<span className="text-xs font-medium uppercase tracking-widest text-indigo-400 mb-4 block">Core Features</span>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Powerful features, <span className="text-gradient">effortless</span> experience</h2>
<p className="text-slate-400 text-base">Every tool you need to run a world-class hospitality operation.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="glass-card rounded-2xl p-6" data-aos="fade-up" data-aos-delay="0">
<div className="icon-3d icon-3d-sm icon-3d-purple mb-4">
<iconify-icon icon="solar:calendar-bold-duotone" style={{color: 'white'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight mb-2">Smart Reservations</h3>
<p className="text-sm text-slate-400 leading-relaxed">Automated booking engine with OTA sync, rate management, and availability calendar.</p>
</div>
<div className="glass-card rounded-2xl p-6" data-aos="fade-up" data-aos-delay="50">
<div className="icon-3d icon-3d-sm icon-3d-pink mb-4">
<iconify-icon icon="solar:card-bold-duotone" style={{color: 'white'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight mb-2">Integrated Payments</h3>
<p className="text-sm text-slate-400 leading-relaxed">Accept payments via UPI, cards, wallets. Auto-reconciliation and GST-compliant invoicing.</p>
</div>
<div className="glass-card rounded-2xl p-6" data-aos="fade-up" data-aos-delay="100">
<div className="icon-3d icon-3d-sm icon-3d-blue mb-4">
<iconify-icon icon="solar:graph-up-bold-duotone" style={{color: 'white'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight mb-2">Revenue Analytics</h3>
<p className="text-sm text-slate-400 leading-relaxed">Real-time dashboards with occupancy rates, RevPAR, ADR, and actionable revenue insights.</p>
</div>
<div className="glass-card rounded-2xl p-6" data-aos="fade-up" data-aos-delay="150">
<div className="icon-3d icon-3d-sm icon-3d-cyan mb-4">
<iconify-icon icon="solar:users-group-rounded-bold-duotone" style={{color: 'white'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight mb-2">Guest CRM</h3>
<p className="text-sm text-slate-400 leading-relaxed">Guest profiles, preferences, feedback tracking, and loyalty program management.</p>
</div>
<div className="glass-card rounded-2xl p-6" data-aos="fade-up" data-aos-delay="200">
<div className="icon-3d icon-3d-sm icon-3d-emerald mb-4">
<iconify-icon icon="solar:smartphone-bold-duotone" style={{color: 'white'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight mb-2">Mobile App</h3>
<p className="text-sm text-slate-400 leading-relaxed">Manage your property on-the-go. Full-featured mobile app for iOS and Android.</p>
</div>
<div className="glass-card rounded-2xl p-6" data-aos="fade-up" data-aos-delay="250">
<div className="icon-3d icon-3d-sm icon-3d-rose mb-4">
<iconify-icon icon="solar:shield-check-bold-duotone" style={{color: 'white'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight mb-2">Enterprise Security</h3>
<p className="text-sm text-slate-400 leading-relaxed">Bank-grade encryption, role-based access, automated backups, and GDPR compliance.</p>
</div>
<div className="glass-card rounded-2xl p-6" data-aos="fade-up" data-aos-delay="300">
<div className="icon-3d icon-3d-sm icon-3d-violet mb-4">
<iconify-icon icon="solar:widget-2-bold-duotone" style={{color: 'white'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight mb-2">Channel Manager</h3>
<p className="text-sm text-slate-400 leading-relaxed">Sync inventory across Booking.com, Expedia, MakeMyTrip, Goibibo, and 50+ OTAs.</p>
</div>
<div className="glass-card rounded-2xl p-6" data-aos="fade-up" data-aos-delay="350">
<div className="icon-3d icon-3d-sm icon-3d-orange mb-4">
<iconify-icon icon="solar:document-text-bold-duotone" style={{color: 'white'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight mb-2">Automated Reports</h3>
<p className="text-sm text-slate-400 leading-relaxed">Night audit, housekeeping, food &amp; beverage — all reports auto-generated and exportable.</p>
</div>
<div className="glass-card rounded-2xl p-6" data-aos="fade-up" data-aos-delay="400">
<div className="icon-3d icon-3d-sm icon-3d-teal mb-4">
<iconify-icon icon="solar:link-round-bold-duotone" style={{color: 'white'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight mb-2">API Integrations</h3>
<p className="text-sm text-slate-400 leading-relaxed">Open APIs for seamless integration with accounting, CRM, and third-party tools.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative overflow-hidden" id="product">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
<span className="text-xs font-medium uppercase tracking-widest text-indigo-400 mb-4 block">Product Preview</span>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">A dashboard you'll <span className="text-gradient">love</span> using</h2>
<p className="text-slate-400 text-base">Intuitive interface designed for hospitality professionals. Zero learning curve.</p>
</div>
<div className="dashboard-mock p-1 max-w-5xl mx-auto shimmer-border" data-aos="fade-up" data-aos-delay="100">
<div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
<div className="flex gap-1.5">
<span className="w-3 h-3 rounded-full" style={{background: '#ef4444'}}></span>
<span className="w-3 h-3 rounded-full" style={{background: '#eab308'}}></span>
<span className="w-3 h-3 rounded-full" style={{background: '#22c55e'}}></span>
</div>
<div className="flex-1 flex justify-center">
<div className="glass rounded-md px-4 py-1 text-xs text-slate-500 max-w-xs w-full text-center">
                            dashboard.mypms.solutions
                        </div>
</div>
</div>
<div className="p-4 sm:p-6 lg:p-8" style={{background: 'linear-gradient(180deg, rgba(5,10,24,0.95) 0%, rgba(10,22,40,0.6) 100%)'}}>
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-base font-semibold tracking-tight">Dashboard Overview</h3>
<p className="text-xs text-slate-500 mt-0.5" id="dashboard-date">Today, Dec 15 2024</p>
</div>
<div className="flex items-center gap-3">
<div className="glass rounded-lg px-3 py-1.5 text-xs text-slate-400 hidden sm:block">Last 30 days</div>
<div className="w-8 h-8 rounded-full" style={{background: 'linear-gradient(135deg, #6366f1, #ec4899)'}}></div>
</div>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
<div className="glass rounded-xl p-4">
<div className="text-xs text-slate-500 mb-1">Occupancy</div>
<div className="text-xl sm:text-2xl font-semibold tracking-tight text-gradient-blue" id="dash-occupancy">87%</div>
<div className="text-xs text-indigo-400 mt-1">↑ 12% vs last week</div>
</div>
<div className="glass rounded-xl p-4">
<div className="text-xs text-slate-500 mb-1">Revenue</div>
<div className="text-xl sm:text-2xl font-semibold tracking-tight text-gradient" id="dash-revenue">₹4.2L</div>
<div className="text-xs text-pink-400 mt-1">↑ 8% vs last week</div>
</div>
<div className="glass rounded-xl p-4">
<div className="text-xs text-slate-500 mb-1">Check-ins</div>
<div className="text-xl sm:text-2xl font-semibold tracking-tight text-gradient-blue" id="dash-checkins">24</div>
<div className="text-xs text-slate-500 mt-1">Today's arrivals</div>
</div>
<div className="glass rounded-xl p-4">
<div className="text-xs text-slate-500 mb-1">ADR</div>
<div className="text-xl sm:text-2xl font-semibold tracking-tight text-gradient" id="dash-adr">₹3,850</div>
<div className="text-xs text-indigo-400 mt-1">↑ 5% vs last month</div>
</div>
</div>
<div className="glass rounded-xl p-4 sm:p-6">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium">Revenue Trend</span>
<span className="text-xs text-slate-500">Last 7 days</span>
</div>
<div className="flex items-end gap-2 sm:gap-3 h-32 sm:h-40" id="chart-bars">
<div className="flex-1 rounded-t-md transition-all duration-700 ease-out" data-height="60" style={{height: '0%', background: 'linear-gradient(180deg, rgba(99,102,241,0.7), rgba(99,102,241,0.1))'}}></div>
<div className="flex-1 rounded-t-md transition-all duration-700 ease-out" data-height="75" style={{height: '0%', background: 'linear-gradient(180deg, rgba(99,102,241,0.7), rgba(99,102,241,0.1))'}}></div>
<div className="flex-1 rounded-t-md transition-all duration-700 ease-out" data-height="45" style={{height: '0%', background: 'linear-gradient(180deg, rgba(236,72,153,0.7), rgba(236,72,153,0.1))'}}></div>
<div className="flex-1 rounded-t-md transition-all duration-700 ease-out" data-height="90" style={{height: '0%', background: 'linear-gradient(180deg, rgba(99,102,241,0.7), rgba(99,102,241,0.1))'}}></div>
<div className="flex-1 rounded-t-md transition-all duration-700 ease-out" data-height="70" style={{height: '0%', background: 'linear-gradient(180deg, rgba(236,72,153,0.7), rgba(236,72,153,0.1))'}}></div>
<div className="flex-1 rounded-t-md transition-all duration-700 ease-out" data-height="85" style={{height: '0%', background: 'linear-gradient(180deg, rgba(59,130,246,0.7), rgba(59,130,246,0.1))'}}></div>
<div className="flex-1 rounded-t-md transition-all duration-700 ease-out" data-height="100" style={{height: '0%', background: 'linear-gradient(180deg, rgba(99,102,241,0.9), rgba(99,102,241,0.2))'}}></div>
</div>
<div className="flex gap-2 sm:gap-3 mt-2">
<div className="flex-1 text-center text-xs text-slate-600">Mon</div>
<div className="flex-1 text-center text-xs text-slate-600">Tue</div>
<div className="flex-1 text-center text-xs text-slate-600">Wed</div>
<div className="flex-1 text-center text-xs text-slate-600">Thu</div>
<div className="flex-1 text-center text-xs text-slate-600">Fri</div>
<div className="flex-1 text-center text-xs text-slate-600">Sat</div>
<div className="flex-1 text-center text-xs text-slate-600">Sun</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative" id="testimonials">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
<span className="text-xs font-medium uppercase tracking-widest text-indigo-400 mb-4 block">Testimonials</span>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Trusted by hospitality <span className="text-gradient">leaders</span></h2>
<p className="text-slate-400 text-base">Hear from property owners who transformed their operations with MyPMS.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="testimonial-card p-6" data-aos="fade-up" data-aos-delay="0">
<div className="flex gap-1 mb-4">
<iconify-icon icon="solar:star-bold" style={{color: '#fbbf24'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#fbbf24'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#fbbf24'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#fbbf24'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#fbbf24'}} width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-300 leading-relaxed mb-6">"MyPMS transformed how we manage our 45-room hotel. The cloud PMS eliminated manual errors and increased our booking efficiency by 40%. Exceptional support team."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold" style={{background: 'linear-gradient(135deg, #6366f1, #818cf8)'}}>RP</div>
<div>
<div className="text-sm font-medium">Rajesh Patel</div>
<div className="text-xs text-slate-500">Owner, Hotel Sunrise Inn</div>
</div>
</div>
</div>
<div className="testimonial-card p-6" data-aos="fade-up" data-aos-delay="100">
<div className="flex gap-1 mb-4">
<iconify-icon icon="solar:star-bold" style={{color: '#fbbf24'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#fbbf24'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#fbbf24'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#fbbf24'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#fbbf24'}} width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-300 leading-relaxed mb-6">"The website they built for our restaurant drives 60% of our reservations now. The POS integration is seamless. Best investment we've made in technology."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold" style={{background: 'linear-gradient(135deg, #ec4899, #f472b6)'}}>AS</div>
<div>
<div className="text-sm font-medium">Ananya Sharma</div>
<div className="text-xs text-slate-500">Manager, Spice Garden Restaurant</div>
</div>
</div>
</div>
<div className="testimonial-card p-6" data-aos="fade-up" data-aos-delay="200">
<div className="flex gap-1 mb-4">
<iconify-icon icon="solar:star-bold" style={{color: '#fbbf24'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#fbbf24'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#fbbf24'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#fbbf24'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#fbbf24'}} width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-300 leading-relaxed mb-6">"Managing 3 properties used to be chaos. With MyPMS, I see everything in one dashboard. Their digital marketing doubled our direct bookings in 6 months."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold" style={{background: 'linear-gradient(135deg, #3b82f6, #60a5fa)'}}>VK</div>
<div>
<div className="text-sm font-medium">Vikram Kumar</div>
<div className="text-xs text-slate-500">Director, VK Hospitality Group</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="cta-section py-24 lg:py-32 relative">
<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-10" style={{background: 'linear-gradient(135deg, #6366f1, #ec4899)'}}></div>
</div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-aos="fade-up">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Ready to modernize your<br/><span className="text-gradient">hospitality business?</span>
</h2>
<p className="text-base lg:text-lg text-slate-400 max-w-2xl mx-auto mb-10">
                Join 100+ properties already using MyPMS Solutions. Get a personalized demo and see how we can transform your operations.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="primary-btn rounded-xl px-10 py-4 text-base font-medium text-white text-center" href="https://wa.me/918354943928?text=Hello%20MyPMS%20Solutions%2C%20I%20want%20to%20book%20a%20demo%20of%20your%20PMS%2FPOS%20platform." target="_blank">
<span className="flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-bold-duotone" style={{color: 'white'}} width="20"></iconify-icon>
                        Book a Free Demo
                    </span>
</a>
<a className="glass rounded-xl px-10 py-4 text-base font-medium text-white text-center hover:bg-white/10 transition-all duration-300" href="https://wa.me/918354943928?text=Hello%20MyPMS%20Solutions%2C%20I%20want%20to%20enquire%20about%20your%20services." target="_blank">
<span className="flex items-center justify-center gap-2">
<svg fill="#25D366" height="20" viewbox="0 0 24 24" width="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
                        Chat on WhatsApp
                    </span>
</a>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
<div data-aos="fade-right">
<span className="text-xs font-medium uppercase tracking-widest text-indigo-400 mb-4 block">Contact Us</span>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Let's <span className="text-gradient">connect</span></h2>
<p className="text-slate-400 text-base mb-10 leading-relaxed">Have questions? Want a demo? Reach out to us directly on WhatsApp — we typically respond within minutes.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="icon-3d icon-3d-sm icon-3d-purple flex-shrink-0">
<iconify-icon icon="solar:map-point-bold-duotone" style={{color: 'white'}} width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium mb-1">Office Address</h3>
<p className="text-sm text-slate-400">Eklavya Tower, Fazilnagar,<br/>Pipra Rajab, Uttar Pradesh 274401</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="icon-3d icon-3d-sm icon-3d-pink flex-shrink-0">
<iconify-icon icon="solar:phone-bold-duotone" style={{color: 'white'}} width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium mb-1">Phone &amp; WhatsApp</h3>
<a className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors" href="https://wa.me/918354943928" target="_blank">+91 8354943928</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="icon-3d icon-3d-sm icon-3d-blue flex-shrink-0">
<iconify-icon icon="solar:clock-circle-bold-duotone" style={{color: 'white'}} width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium mb-1">Support Hours</h3>
<p className="text-sm text-slate-400">24/7 — We're always here for you</p>
</div>
</div>
</div>
<div className="mt-10">
<a className="primary-btn rounded-xl px-8 py-3.5 text-sm font-medium text-white inline-flex items-center gap-2" href="https://wa.me/918354943928?text=Hello%20MyPMS%20Solutions%2C%20I%20want%20to%20enquire%20about%20your%20services." target="_blank">
<span className="flex items-center gap-2">
<svg fill="white" height="18" viewbox="0 0 24 24" width="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
                                Start a Conversation
                            </span>
</a>
</div>
</div>
<div className="rounded-2xl overflow-hidden" data-aos="fade-left" style={{border: '1px solid rgba(255,255,255,0.06)'}}>
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.5!2d83.95!3d26.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sFazilnagar%2C%20Pipra%20Rajab%2C%20Uttar%20Pradesh%20274401!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" style={{border: '0', minHeight: '400px', filter: 'brightness(0.6) contrast(1.2) saturate(0.6) hue-rotate(200deg)'}} title="MyPMS Solutions Office Location" width="100%"></iframe>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t" style={{borderColor: 'rgba(255,255,255,0.05)'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-8 mb-12">
<div className="md:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#hero">
<div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background: 'linear-gradient(135deg, #6366f1, #ec4899)'}}>
<span className="text-white font-semibold text-sm tracking-tighter">M</span>
</div>
<span className="font-semibold text-base tracking-tight text-white">MyPMS<span className="text-gradient"> Solutions</span></span>
</a>
<p className="text-sm text-slate-500 max-w-sm leading-relaxed mb-4">
                        Premium hospitality technology platform. Cloud PMS, POS, website development, and digital marketing solutions for modern hospitality businesses.
                    </p>
<p className="text-xs text-slate-600">MyPMS Solutions Private Limited</p>
</div>
<div>
<h3 className="text-sm font-medium mb-4">Quick Links</h3>
<ul className="space-y-2">
<li><a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#services">Services</a></li>
<li><a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#features">Features</a></li>
<li><a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#product">Product</a></li>
<li><a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#testimonials">Testimonials</a></li>
<li><a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-medium mb-4">Get in Touch</h3>
<ul className="space-y-2">
<li>
<a className="text-sm text-slate-500 hover:text-indigo-400 transition-colors flex items-center gap-2" href="https://wa.me/918354943928" target="_blank">
<iconify-icon icon="solar:phone-linear" style={{color: '#94a3b8'}} width="14"></iconify-icon>
                                +91 8354943928
                            </a>
</li>
<li className="text-sm text-slate-500 flex items-start gap-2">
<iconify-icon className="flex-shrink-0" icon="solar:map-point-linear" style={{color: '#94a3b8', marginTop: '3px'}} width="14"></iconify-icon>
                            Eklavya Tower, Fazilnagar, UP 274401
                        </li>
</ul>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t" style={{borderColor: 'rgba(255,255,255,0.05)'}}>
<p className="text-xs text-slate-600 mb-4 sm:mb-0">© 2024 MyPMS Solutions Private Limited. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-slate-600 hover:text-slate-400 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-slate-600 hover:text-slate-400 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


























    </>
  );
}
