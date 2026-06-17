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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
bg: {
primary: '#0D0D0D',
secondary: '#1A1A1A',
card: '#252525'
},
accent: {
DEFAULT: '#C9A063',
dark: '#8B7355',
hover: '#D4AF6A'
},
text: {
primary: '#F5F5F5',
secondary: '#B8B8B8',
muted: '#666666'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
backgroundImage: {
'gradient-gold': 'linear-gradient(to right, #C9A063, #A67C52)',
}
}
}
}



        // Init Icons
        lucide.createIcons();

        // SEO Data
        const seoData = {
            '/': { title: "Natural Eyebrow Tattoo & Microblading in Gangnam Seoul | AmorJ", desc: "Experience Korea's most natural eyebrow tattoo results at AmorJ Gangnam. No harsh lines. 5+ years expertise." },
            '/about': { title: "About AmorJ - Premium Eyebrow Tattoo Studio in Gangnam", desc: "Learn about AmorJ's expertise in natural eyebrows. Located in Gangnam's Route One Residence." },
            '/services': { title: "Services: Microblading, Powder & Combination | AmorJ", desc: "Explore our signature techniques. Natural hair strokes and soft shading for Asian skin tones." },
            '/services/microblading': { title: "Microblading Gangnam - Natural Hair Strokes | AmorJ", desc: "Hyper-realistic hair strokes using a manual blade. Perfect for correcting sparse brows naturally." },
            '/services/powder-brows': { title: "Powder Brows Gangnam - Soft Shading | AmorJ", desc: "Soft, makeup-like shading effect ideal for oily skin or fuller looks." },
            '/services/combination': { title: "Combination Brows - The Perfect Blend | AmorJ", desc: "Our most popular service. Combines hair strokes and shading for natural dimension." },
            '/gallery': { title: "Portfolio - Before & After Results | AmorJ", desc: "See real client results. Natural, healed, and immediate photos of our work." },
            '/process': { title: "The Process - What to Expect | AmorJ", desc: "From consultation to healing. A step-by-step guide to your eyebrow transformation." },
            '/pricing': { title: "Transparent Pricing | AmorJ Gangnam", desc: "View our pricing structure. Includes consultation, procedure, aftercare kit, and touch-up." },
            '/faq': { title: "FAQ - Common Questions | AmorJ", desc: "Answers about pain, healing time, longevity, and safety protocols." },
            '/reviews': { title: "Client Reviews | AmorJ", desc: "Read why 17,000+ clients trust us with their faces. 5-star ratings." },
            '/contact': { title: "Contact & Booking | AmorJ Gangnam", desc: "Book your consultation at Route One Residence, Gangnam. 5 min from Seolleung Station." },
            '/blog': { title: "Expert Beauty Tips | AmorJ Blog", desc: "Advice on aftercare, trends, and technique comparisons." },
            '/blog/eyebrow-care-tips': { title: "Complete Aftercare Guide | AmorJ Blog", desc: "How to care for your new brows for perfect healing results." },
            '/blog/microblading-vs-tattooing': { title: "Microblading vs Tattooing | AmorJ Blog", desc: "Understanding the difference between semi-permanent makeup and traditional tattoos." }
        };

        // Routing System
        const routes = {
            "/": "page-home",
            "/about": "page-about",
            "/services": "page-services",
            "/services/microblading": "page-services-microblading",
            "/services/powder-brows": "page-services-powder-brows",
            "/services/combination": "page-services-combination",
            "/gallery": "page-gallery",
            "/process": "page-process",
            "/pricing": "page-pricing",
            "/faq": "page-faq",
            "/reviews": "page-reviews",
            "/contact": "page-contact",
            "/blog": "page-blog",
            "/blog/eyebrow-care-tips": "page-blog-eyebrow-care-tips",
            "/blog/microblading-vs-tattooing": "page-blog-microblading-vs-tattooing"
        };

        function route(e, path) {
            e.preventDefault();
            window.history.pushState({}, "", path);
            handleLocation();
        }

        const handleLocation = async () => {
            const path = window.location.pathname;
            const routePath = path.endsWith('index.html') || path === '' ? '/' : path;
            const pageId = routes[routePath] || routes['/'];
            
            // DOM Switching
            document.querySelectorAll('.page-section').forEach(el => el.classList.remove('active'));
            const target = document.getElementById(pageId);
            if(target) {
                target.classList.add('active');
                window.scrollTo(0, 0);
            }

            // SEO Update
            const meta = seoData[routePath] || seoData['/'];
            document.title = meta.title;
            document.querySelector('meta[name="description"]').setAttribute("content", meta.desc);

            // Nav Active State
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('text-[#C9A063]');
                link.classList.add('text-[#F5F5F5]', 'hover:text-[#C9A063]'); // reset
            });

            // Re-trigger animations
            initAnimations();
        };

        window.onpopstate = handleLocation;

        // Mobile Menu
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const icon = document.querySelector('button[aria-label="Menu"] i');
            
            if (menu.classList.contains('translate-x-full')) {
                menu.classList.remove('translate-x-full');
                document.body.style.overflow = 'hidden';
            } else {
                menu.classList.add('translate-x-full');
                document.body.style.overflow = 'auto';
            }
        }

        // Observer for Fade Up Animations
        function initAnimations() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el));
        }

        // Init
        document.addEventListener('DOMContentLoaded', () => {
            handleLocation();
            initAnimations();
            
            // Scroll Effect for Navbar
            window.addEventListener('scroll', () => {
                const nav = document.getElementById('navbar');
                if (window.scrollY > 50) {
                    nav.classList.add('bg-[#0D0D0D]', 'shadow-lg');
                    nav.classList.remove('bg-[#0D0D0D]/90', 'border-white/5');
                    nav.classList.add('border-transparent');
                } else {
                    nav.classList.remove('bg-[#0D0D0D]', 'shadow-lg', 'border-transparent');
                    nav.classList.add('bg-[#0D0D0D]/90', 'border-white/5');
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
      

<nav className="fixed w-full z-50 bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/5 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex flex-col leading-none group" href="/" onclick="route(event, '/')">
<span className="text-2xl font-serif font-semibold tracking-wider text-[#F5F5F5] group-hover:text-[#C9A063] transition-colors">AMORJ</span>
<span className="text-[10px] tracking-[0.2em] text-[#B8B8B8] mt-0.5">아모르제이</span>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="nav-link text-sm font-medium tracking-wide hover:text-[#C9A063] transition-colors" href="/" onclick="route(event, '/')">HOME</a>
<a className="nav-link text-sm font-medium tracking-wide hover:text-[#C9A063] transition-colors" href="/about" onclick="route(event, '/about')">ABOUT</a>

<div className="relative group">
<button className="nav-link text-sm font-medium tracking-wide hover:text-[#C9A063] transition-colors flex items-center gap-1 py-4">
                        SERVICES <i className="w-3 h-3 text-[#C9A063]" data-lucide="chevron-down"></i>
</button>
<div className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-[#1A1A1A] border border-white/10 rounded-sm shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
<a className="block px-5 py-3 text-sm text-[#B8B8B8] hover:text-[#C9A063] hover:bg-white/5 border-b border-white/5" href="/services" onclick="route(event, '/services')">Overview</a>
<a className="block px-5 py-3 text-sm text-[#B8B8B8] hover:text-[#C9A063] hover:bg-white/5" href="/services/microblading" onclick="route(event, '/services/microblading')">Microblading</a>
<a className="block px-5 py-3 text-sm text-[#B8B8B8] hover:text-[#C9A063] hover:bg-white/5" href="/services/powder-brows" onclick="route(event, '/services/powder-brows')">Powder Brows</a>
<a className="block px-5 py-3 text-sm text-[#B8B8B8] hover:text-[#C9A063] hover:bg-white/5" href="/services/combination" onclick="route(event, '/services/combination')">Combination Brows</a>
</div>
</div>
<a className="nav-link text-sm font-medium tracking-wide hover:text-[#C9A063] transition-colors" href="/gallery" onclick="route(event, '/gallery')">GALLERY</a>
<a className="nav-link text-sm font-medium tracking-wide hover:text-[#C9A063] transition-colors" href="/process" onclick="route(event, '/process')">PROCESS</a>
<a className="nav-link text-sm font-medium tracking-wide hover:text-[#C9A063] transition-colors" href="/pricing" onclick="route(event, '/pricing')">PRICING</a>
<a className="nav-link text-sm font-medium tracking-wide hover:text-[#C9A063] transition-colors" href="/blog" onclick="route(event, '/blog')">BLOG</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex px-6 py-2.5 bg-gradient-gold text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(201,160,99,0.3)]" href="/contact" onclick="route(event, '/contact')">
                    Book Now
                </a>
<button aria-label="Menu" className="lg:hidden text-white hover:text-[#C9A063]" onclick="toggleMobileMenu()">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-[#0D0D0D] z-[60] transform translate-x-full transition-transform duration-300 flex flex-col pt-24 px-8 overflow-y-auto" id="mobile-menu">
<button className="absolute top-6 right-6 text-white hover:text-[#C9A063]" onclick="toggleMobileMenu()">
<i className="w-8 h-8" data-lucide="x" strokeWidth="1.5"></i>
</button>
<div className="flex flex-col gap-6 text-xl font-serif">
<a className="hover:text-[#C9A063]" href="/" onclick="route(event, '/'); toggleMobileMenu()">Home</a>
<a className="hover:text-[#C9A063]" href="/about" onclick="route(event, '/about'); toggleMobileMenu()">About</a>
<div className="space-y-4 pl-4 border-l border-white/10">
<p className="text-sm text-[#666] uppercase tracking-widest">Services</p>
<a className="block text-base hover:text-[#C9A063]" href="/services" onclick="route(event, '/services'); toggleMobileMenu()">Overview</a>
<a className="block text-base hover:text-[#C9A063]" href="/services/microblading" onclick="route(event, '/services/microblading'); toggleMobileMenu()">Microblading</a>
<a className="block text-base hover:text-[#C9A063]" href="/services/powder-brows" onclick="route(event, '/services/powder-brows'); toggleMobileMenu()">Powder Brows</a>
<a className="block text-base hover:text-[#C9A063]" href="/services/combination" onclick="route(event, '/services/combination'); toggleMobileMenu()">Combination</a>
</div>
<a className="hover:text-[#C9A063]" href="/gallery" onclick="route(event, '/gallery'); toggleMobileMenu()">Gallery</a>
<a className="hover:text-[#C9A063]" href="/process" onclick="route(event, '/process'); toggleMobileMenu()">Process</a>
<a className="hover:text-[#C9A063]" href="/pricing" onclick="route(event, '/pricing'); toggleMobileMenu()">Pricing</a>
<a className="hover:text-[#C9A063]" href="/reviews" onclick="route(event, '/reviews'); toggleMobileMenu()">Reviews</a>
<a className="hover:text-[#C9A063]" href="/faq" onclick="route(event, '/faq'); toggleMobileMenu()">FAQ</a>
<a className="hover:text-[#C9A063] text-[#C9A063]" href="/contact" onclick="route(event, '/contact'); toggleMobileMenu()">Book Now</a>
</div>
</div>

<main className="min-h-screen pt-20" id="app-content">

<div className="page-section active" id="page-home">

<section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-[#0D0D0D]/30"></div>
<div className="relative z-10 text-center max-w-4xl px-6 fade-in-up">
<span className="text-[#C9A063] text-xs md:text-sm uppercase tracking-[0.3em] font-medium mb-6 block">Gangnam • Seoul</span>
<h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
                        Unveil Your <span className="italic text-[#C9A063]">Natural</span> Beauty
                    </h1>
<p className="text-lg md:text-xl text-[#B8B8B8] max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        Experience Korea's most natural eyebrow tattoo results. No harsh lines, no redness over time. Trusted by 17,000+ clients.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="px-8 py-4 bg-gradient-gold text-white text-sm font-bold uppercase tracking-widest rounded-sm hover:scale-105 transition-transform shadow-lg shadow-[#C9A063]/20 w-full sm:w-auto text-center" href="/contact" onclick="route(event, '/contact')">
                            Book Free Consultation
                        </a>
<a className="px-8 py-4 bg-transparent border border-white/20 text-white text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-white/5 transition-colors w-full sm:w-auto text-center" href="/gallery" onclick="route(event, '/gallery')">
                            View Portfolio
                        </a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#0D0D0D]">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-8 bg-[#1A1A1A] rounded-sm border border-white/5 hover:border-[#C9A063]/50 transition-colors fade-in-up group">
<i className="w-8 h-8 text-[#C9A063] mb-6 group-hover:scale-110 transition-transform" data-lucide="sparkles" strokeWidth="1.5"></i>
<h3 className="text-xl font-serif text-white mb-3">Natural From Day One</h3>
<p className="text-[#B8B8B8] leading-relaxed text-sm">Unlike traditional tattoos, our technique ensures your brows look soft and natural immediately after the procedure.</p>
</div>
<div className="p-8 bg-[#1A1A1A] rounded-sm border border-white/5 hover:border-[#C9A063]/50 transition-colors fade-in-up" style={{animationDelay: '0.1s'}}>
<i className="w-8 h-8 text-[#C9A063] mb-6 group-hover:scale-110 transition-transform" data-lucide="shield-check" strokeWidth="1.5"></i>
<h3 className="text-xl font-serif text-white mb-3">No Redness Over Time</h3>
<p className="text-[#B8B8B8] leading-relaxed text-sm">We use premium pigments specifically designed for Asian skin tones that fade naturally without turning red or blue.</p>
</div>
<div className="p-8 bg-[#1A1A1A] rounded-sm border border-white/5 hover:border-[#C9A063]/50 transition-colors fade-in-up" style={{animationDelay: '0.2s'}}>
<i className="w-8 h-8 text-[#C9A063] mb-6 group-hover:scale-110 transition-transform" data-lucide="palette" strokeWidth="1.5"></i>
<h3 className="text-xl font-serif text-white mb-3">Personalized Design</h3>
<p className="text-[#B8B8B8] leading-relaxed text-sm">We analyze your bone structure, muscle movement, and face shape to design the perfect custom brow for you.</p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#131313]">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 fade-in-up">
<h2 className="text-3xl md:text-5xl font-serif text-white mb-4 tracking-tight">Our Techniques</h2>
<div className="w-12 h-px bg-[#C9A063] mx-auto"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative h-[450px] overflow-hidden rounded-sm cursor-pointer fade-in-up" onclick="route(event, '/services/microblading')">
<img alt="Microblading" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-2xl font-serif text-white mb-2">Microblading</h3>
<p className="text-[#B8B8B8] text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">Natural hair-like strokes for a realistic look.</p>
<span className="text-[#C9A063] text-xs uppercase tracking-widest flex items-center gap-2">Discover <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i></span>
</div>
</div>

<div className="group relative h-[450px] overflow-hidden rounded-sm cursor-pointer fade-in-up" onclick="route(event, '/services/powder-brows')" style={{animationDelay: '0.1s'}}>
<img alt="Powder Brows" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-2xl font-serif text-white mb-2">Powder Brows</h3>
<p className="text-[#B8B8B8] text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">Soft shading effect resembling makeup.</p>
<span className="text-[#C9A063] text-xs uppercase tracking-widest flex items-center gap-2">Discover <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i></span>
</div>
</div>

<div className="group relative h-[450px] overflow-hidden rounded-sm cursor-pointer fade-in-up" onclick="route(event, '/services/combination')" style={{animationDelay: '0.2s'}}>
<img alt="Combination Brows" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-2xl font-serif text-white mb-2">Combination</h3>
<p className="text-[#B8B8B8] text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">The perfect blend of strokes and shading.</p>
<span className="text-[#C9A063] text-xs uppercase tracking-widest flex items-center gap-2">Discover <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i></span>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section" id="page-about">
<div className="pt-16 pb-24 px-6 max-w-4xl mx-auto">
<span className="text-[#C9A063] text-xs uppercase tracking-widest mb-4 block">Our Story</span>
<h1 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-white tracking-tight">About AmorJ</h1>
<p className="text-xl text-[#B8B8B8] leading-relaxed mb-12 font-light">
                    Located in the heart of Gangnam, AmorJ has been redefining semi-permanent makeup for over 5 years. We believe that the best work goes unnoticed.
                </p>
<div className="w-full h-96 bg-[#252525] rounded-sm overflow-hidden mb-16 relative">
<img alt="AmorJ Studio Gangnam" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-sm px-6 py-3 rounded-sm border border-white/10">
<span className="text-white font-serif flex items-center gap-2"><i className="w-4 h-4 text-[#C9A063]" data-lucide="map-pin" strokeWidth="1.5"></i> Route One Residence, Gangnam</span>
</div>
</div>
<h2 className="text-2xl font-serif text-[#C9A063] mb-8">Why Clients Choose Us</h2>
<div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
<div>
<h3 className="text-lg text-white font-medium mb-2">Natural from Day One</h3>
<p className="text-[#B8B8B8] leading-relaxed text-sm">We reject the "angry bird" phase. Our unique techniques and delicate hand ensure you walk out looking polished, not painted.</p>
</div>
<div>
<h3 className="text-lg text-white font-medium mb-2">Hygiene First</h3>
<p className="text-[#B8B8B8] leading-relaxed text-sm">We adhere to the strictest hospital-grade sanitation protocols. Single-use needles, sterilized equipment, and premium FDA-approved pigments.</p>
</div>
<div>
<h3 className="text-lg text-white font-medium mb-2">Custom Facial Analysis</h3>
<p className="text-[#B8B8B8] leading-relaxed text-sm">Your face is unique. We analyze eye muscle movement and bone structure before drawing a single line.</p>
</div>
<div>
<h3 className="text-lg text-white font-medium mb-2">Cafe-Style Comfort</h3>
<p className="text-[#B8B8B8] leading-relaxed text-sm">Relax in our upgraded studio space near Seolleung Station with complimentary beverages and a calming atmosphere.</p>
</div>
</div>
</div>
</div>

<div className="page-section" id="page-services">
<div className="py-20 px-6 max-w-7xl mx-auto">
<div className="text-center mb-20">
<span className="text-[#C9A063] text-xs uppercase tracking-[0.2em]">Our Expertise</span>
<h1 className="text-4xl md:text-6xl font-serif mt-4 text-white tracking-tight">Services</h1>
</div>
<div className="space-y-24">

<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="bg-[#252525] aspect-[4/3] rounded-sm overflow-hidden relative group">
<img alt="Microblading" className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1596704017235-d9748b299e91?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h2 className="text-3xl font-serif text-white mb-4">Microblading</h2>
<p className="text-[#B8B8B8] leading-relaxed mb-6">The art of creating hyper-realistic hair strokes using a manual blade. Ideal for those with normal to dry skin looking to fill gaps or define shape naturally.</p>
<ul className="space-y-3 mb-8 text-[#B8B8B8] text-sm">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#C9A063]" data-lucide="check" strokeWidth="1.5"></i> Hair-like texture</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#C9A063]" data-lucide="check" strokeWidth="1.5"></i> Lasts 1-2 years</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#C9A063]" data-lucide="check" strokeWidth="1.5"></i> Best for dry/normal skin</li>
</ul>
<a className="inline-flex items-center gap-2 text-[#C9A063] hover:text-white transition-colors text-sm font-medium uppercase tracking-widest" href="/services/microblading" onclick="route(event, '/services/microblading')">
                                View Details <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
<div className="md:order-2 bg-[#252525] aspect-[4/3] rounded-sm overflow-hidden relative group">
<img alt="Powder Brows" className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="md:order-1">
<h2 className="text-3xl font-serif text-white mb-4">Powder Brows</h2>
<p className="text-[#B8B8B8] leading-relaxed mb-6">A soft shading technique that mimics the look of filled-in makeup. This method uses a machine to create a gradient effect, softer at the front and bolder at the tail.</p>
<ul className="space-y-3 mb-8 text-[#B8B8B8] text-sm">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#C9A063]" data-lucide="check" strokeWidth="1.5"></i> Soft makeup look</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#C9A063]" data-lucide="check" strokeWidth="1.5"></i> Lasts 2-3 years</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#C9A063]" data-lucide="check" strokeWidth="1.5"></i> Great for oily skin</li>
</ul>
<a className="inline-flex items-center gap-2 text-[#C9A063] hover:text-white transition-colors text-sm font-medium uppercase tracking-widest" href="/services/powder-brows" onclick="route(event, '/services/powder-brows')">
                                View Details <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="bg-[#252525] aspect-[4/3] rounded-sm overflow-hidden relative group">
<img alt="Combination Brows" className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h2 className="text-3xl font-serif text-white mb-4">Combination Brows</h2>
<p className="text-[#B8B8B8] leading-relaxed mb-6">The best of both worlds. We combine microblading hair strokes at the front with powder shading at the tail for a natural yet defined dimensional look.</p>
<ul className="space-y-3 mb-8 text-[#B8B8B8] text-sm">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#C9A063]" data-lucide="check" strokeWidth="1.5"></i> 3D Dimensional look</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#C9A063]" data-lucide="check" strokeWidth="1.5"></i> Most popular choice</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#C9A063]" data-lucide="check" strokeWidth="1.5"></i> Suits most skin types</li>
</ul>
<a className="inline-flex items-center gap-2 text-[#C9A063] hover:text-white transition-colors text-sm font-medium uppercase tracking-widest" href="/services/combination" onclick="route(event, '/services/combination')">
                                View Details <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</div>
</div>

<div className="page-section" id="page-services-microblading">
<div className="relative h-[60vh] flex items-end pb-20 px-6">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80')] bg-cover bg-center opacity-30"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/50 to-transparent"></div>
<div className="relative z-10 max-w-7xl mx-auto w-full">
<a className="text-xs uppercase tracking-widest text-[#B8B8B8] hover:text-white mb-6 block flex items-center gap-2" href="/services" onclick="route(event, '/services')"><i className="w-4 h-4" data-lucide="arrow-left" strokeWidth="1.5"></i> Back to Services</a>
<h1 className="text-4xl md:text-6xl font-serif text-white tracking-tight">Microblading</h1>
</div>
</div>
<div className="max-w-4xl mx-auto px-6 py-20">
<p className="text-xl text-[#B8B8B8] leading-relaxed mb-12 font-light">
                    Microblading is our signature technique for correcting sparse or over-plucked brows. By manually depositing pigment into the upper region of the dermis using a fine blade, we create individual strokes that resemble your natural hair.
                </p>
<div className="grid md:grid-cols-2 gap-12 mb-16">
<div>
<h3 className="text-2xl font-serif text-white mb-6">Is it right for you?</h3>
<ul className="space-y-4 text-[#B8B8B8]">
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#C9A063] shrink-0" data-lucide="check-circle" strokeWidth="1.5"></i> <span>Normal to dry skin types</span></li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#C9A063] shrink-0" data-lucide="check-circle" strokeWidth="1.5"></i> <span>Existing brow hair needing definition</span></li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-[#C9A063] shrink-0" data-lucide="check-circle" strokeWidth="1.5"></i> <span>Desire for the most natural, "fluffy" look</span></li>
</ul>
</div>
<div className="bg-[#1A1A1A] p-8 rounded-sm border border-white/5">
<h3 className="text-xl font-serif text-white mb-4">Quick Facts</h3>
<div className="grid grid-cols-2 gap-6">
<div>
<span className="text-xs text-[#666] uppercase tracking-wider block mb-1">Longevity</span>
<span className="text-[#C9A063]">1 - 2 Years</span>
</div>
<div>
<span className="text-xs text-[#666] uppercase tracking-wider block mb-1">Healing</span>
<span className="text-[#C9A063]">7 - 10 Days</span>
</div>
<div>
<span className="text-xs text-[#666] uppercase tracking-wider block mb-1">Pain Level</span>
<span className="text-[#C9A063]">Minimal</span>
</div>
<div>
<span className="text-xs text-[#666] uppercase tracking-wider block mb-1">Time</span>
<span className="text-[#C9A063]">2 Hours</span>
</div>
</div>
</div>
</div>
<a className="block w-full py-5 bg-[#252525] text-center text-white text-sm font-bold uppercase tracking-widest hover:bg-[#C9A063] transition-colors rounded-sm border border-white/10 hover:border-transparent" href="/contact" onclick="route(event, '/contact')">Book Microblading Consultation</a>
</div>
</div>

<div className="page-section" id="page-services-powder-brows">
<div className="relative h-[50vh] flex items-end pb-20 px-6">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80')] bg-cover bg-center opacity-30"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent"></div>
<div className="relative z-10 max-w-7xl mx-auto w-full">
<a className="text-xs uppercase tracking-widest text-[#B8B8B8] hover:text-white mb-6 block flex items-center gap-2" href="/services" onclick="route(event, '/services')"><i className="w-4 h-4" data-lucide="arrow-left" strokeWidth="1.5"></i> Back to Services</a>
<h1 className="text-4xl md:text-6xl font-serif text-white tracking-tight">Powder Brows</h1>
</div>
</div>
<div className="max-w-4xl mx-auto px-6 py-20">
<p className="text-xl text-[#B8B8B8] leading-relaxed mb-12 font-light">Ideal for oily skin or those who prefer a filled-in makeup look.</p>

<a className="block w-full py-5 bg-[#252525] text-center text-white text-sm font-bold uppercase tracking-widest hover:bg-[#C9A063] transition-colors rounded-sm" href="/contact" onclick="route(event, '/contact')">Book Powder Brows</a>
</div>
</div>

<div className="page-section" id="page-services-combination">
<div className="relative h-[50vh] flex items-end pb-20 px-6">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80')] bg-cover bg-center opacity-30"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent"></div>
<div className="relative z-10 max-w-7xl mx-auto w-full">
<a className="text-xs uppercase tracking-widest text-[#B8B8B8] hover:text-white mb-6 block flex items-center gap-2" href="/services" onclick="route(event, '/services')"><i className="w-4 h-4" data-lucide="arrow-left" strokeWidth="1.5"></i> Back to Services</a>
<h1 className="text-4xl md:text-6xl font-serif text-white tracking-tight">Combination Brows</h1>
</div>
</div>
<div className="max-w-4xl mx-auto px-6 py-20">
<p className="text-xl text-[#B8B8B8] leading-relaxed mb-12 font-light">The most popular choice for natural dimension. Hair strokes at the front, shading at the tail.</p>
<a className="block w-full py-5 bg-[#252525] text-center text-white text-sm font-bold uppercase tracking-widest hover:bg-[#C9A063] transition-colors rounded-sm" href="/contact" onclick="route(event, '/contact')">Book Combination Brows</a>
</div>
</div>

<div className="page-section" id="page-process">
<div className="py-20 px-6 max-w-4xl mx-auto">
<h1 className="text-4xl md:text-6xl text-white font-serif mb-16 text-center">The Journey</h1>
<div className="space-y-12 relative before:content-[''] before:absolute before:left-8 md:before:left-1/2 before:top-4 before:h-full before:w-px before:bg-[#C9A063]/20 before:-translate-x-1/2">

<div className="relative z-10 flex flex-col md:flex-row items-center gap-8 group">
<div className="w-16 h-16 bg-[#1A1A1A] border border-[#C9A063] rounded-full flex items-center justify-center text-[#C9A063] text-xl font-serif shrink-0 shadow-lg shadow-black">01</div>
<div className="flex-1 bg-[#1A1A1A] p-8 rounded-sm border border-white/5 md:text-right group-hover:border-[#C9A063]/30 transition-colors">
<h3 className="text-xl text-white font-serif mb-2">Consultation &amp; Design</h3>
<p className="text-[#B8B8B8] text-sm">We analyze your bone structure, eye muscles, and face shape to draw a custom design. We don't start until you approve the shape.</p>
</div>
</div>

<div className="relative z-10 flex flex-col md:flex-row-reverse items-center gap-8 group">
<div className="w-16 h-16 bg-[#1A1A1A] border border-[#C9A063] rounded-full flex items-center justify-center text-[#C9A063] text-xl font-serif shrink-0 shadow-lg shadow-black">02</div>
<div className="flex-1 bg-[#1A1A1A] p-8 rounded-sm border border-white/5 md:text-left group-hover:border-[#C9A063]/30 transition-colors">
<h3 className="text-xl text-white font-serif mb-2">Numbing &amp; Prep</h3>
<p className="text-[#B8B8B8] text-sm">Medical-grade numbing cream is applied for 20 minutes to ensure a comfortable experience while you relax in our cafe-style lounge.</p>
</div>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-center gap-8 group">
<div className="w-16 h-16 bg-[#1A1A1A] border border-[#C9A063] rounded-full flex items-center justify-center text-[#C9A063] text-xl font-serif shrink-0 shadow-lg shadow-black">03</div>
<div className="flex-1 bg-[#1A1A1A] p-8 rounded-sm border border-white/5 md:text-right group-hover:border-[#C9A063]/30 transition-colors">
<h3 className="text-xl text-white font-serif mb-2">The Procedure</h3>
<p className="text-[#B8B8B8] text-sm">Using single-use sterile tools and premium pigments, we create your brows. Takes about 60-90 minutes.</p>
</div>
</div>

<div className="relative z-10 flex flex-col md:flex-row-reverse items-center gap-8 group">
<div className="w-16 h-16 bg-[#1A1A1A] border border-[#C9A063] rounded-full flex items-center justify-center text-[#C9A063] text-xl font-serif shrink-0 shadow-lg shadow-black">04</div>
<div className="flex-1 bg-[#1A1A1A] p-8 rounded-sm border border-white/5 md:text-left group-hover:border-[#C9A063]/30 transition-colors">
<h3 className="text-xl text-white font-serif mb-2">Aftercare &amp; Healing</h3>
<p className="text-[#B8B8B8] text-sm">Receive your complimentary aftercare kit. Healing takes 7-10 days. A touch-up is recommended in 6 weeks.</p>
</div>
</div>
</div>
</div>
</div>

<div className="page-section" id="page-gallery">
<div className="py-20 px-6 max-w-7xl mx-auto">
<h1 className="text-4xl md:text-6xl font-serif mb-12 text-center text-white tracking-tight">Portfolio</h1>

<div className="flex flex-wrap justify-center gap-3 mb-12">
<button className="px-6 py-2 rounded-full border border-[#C9A063] bg-[#C9A063] text-black text-sm font-medium">All</button>
<button className="px-6 py-2 rounded-full border border-white/10 text-[#B8B8B8] text-sm hover:border-[#C9A063] hover:text-[#C9A063] transition-colors">Microblading</button>
<button className="px-6 py-2 rounded-full border border-white/10 text-[#B8B8B8] text-sm hover:border-[#C9A063] hover:text-[#C9A063] transition-colors">Combination</button>
<button className="px-6 py-2 rounded-full border border-white/10 text-[#B8B8B8] text-sm hover:border-[#C9A063] hover:text-[#C9A063] transition-colors">Healed</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-[#1A1A1A] rounded-sm overflow-hidden group cursor-pointer border border-white/5">
<div className="relative aspect-square">
<img alt="Microblading Result" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1588510883391-7f9be4dc8df1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
<div>
<span className="text-[#C9A063] text-xs uppercase tracking-widest block mb-2">Microblading</span>
<h3 className="text-white font-serif text-xl">Healed Result</h3>
</div>
</div>
</div>
</div>
<div className="bg-[#1A1A1A] rounded-sm overflow-hidden group cursor-pointer border border-white/5">
<div className="relative aspect-square">
<img alt="Combination Result" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1595476103518-3c8ad8166c30?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
<div>
<span className="text-[#C9A063] text-xs uppercase tracking-widest block mb-2">Combination</span>
<h3 className="text-white font-serif text-xl">Immediate After</h3>
</div>
</div>
</div>
</div>

<div className="bg-[#1A1A1A] rounded-sm overflow-hidden group cursor-pointer border border-white/5">
<div className="relative aspect-square">
<img alt="Powder Brows Result" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
<div>
<span className="text-[#C9A063] text-xs uppercase tracking-widest block mb-2">Powder</span>
<h3 className="text-white font-serif text-xl">Healed Result</h3>
</div>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-[#B8B8B8] mb-6">See our daily updates on Instagram</p>
<a className="inline-flex items-center gap-2 text-[#C9A063] border-b border-[#C9A063] pb-1 hover:text-white hover:border-white transition-colors" href="https://instagram.com" target="_blank">@amorj2016 <i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i></a>
</div>
</div>
</div>

<div className="page-section" id="page-pricing">
<div className="py-20 px-6 max-w-5xl mx-auto">
<h1 className="text-4xl md:text-6xl font-serif mb-6 text-center text-white tracking-tight">Transparent Pricing</h1>
<p className="text-center text-[#B8B8B8] mb-16 max-w-2xl mx-auto font-light">All procedures include an initial consultation, the procedure, a touch-up session within 8 weeks, and a complimentary aftercare kit.</p>
<div className="space-y-6">
<div className="flex flex-col md:flex-row justify-between items-center p-8 bg-[#1A1A1A] rounded-sm border border-white/5 hover:border-[#C9A063] transition-colors group">
<div className="mb-4 md:mb-0 text-center md:text-left">
<h3 className="text-2xl text-white font-serif group-hover:text-[#C9A063] transition-colors">Microblading</h3>
<p className="text-sm text-[#B8B8B8] mt-1">Natural hair strokes only</p>
</div>
<div className="text-white text-xl font-light">Contact for Quote</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center p-8 bg-[#1A1A1A] rounded-sm border border-white/5 hover:border-[#C9A063] transition-colors group">
<div className="mb-4 md:mb-0 text-center md:text-left">
<h3 className="text-2xl text-white font-serif group-hover:text-[#C9A063] transition-colors">Combination Brows</h3>
<p className="text-sm text-[#B8B8B8] mt-1">Strokes + Shading (Most Popular)</p>
</div>
<div className="text-white text-xl font-light">Contact for Quote</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center p-8 bg-[#1A1A1A] rounded-sm border border-white/5 hover:border-[#C9A063] transition-colors group">
<div className="mb-4 md:mb-0 text-center md:text-left">
<h3 className="text-2xl text-white font-serif group-hover:text-[#C9A063] transition-colors">Powder Brows</h3>
<p className="text-sm text-[#B8B8B8] mt-1">Soft makeup look</p>
</div>
<div className="text-white text-xl font-light">Contact for Quote</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-block px-10 py-4 bg-[#C9A063] text-black text-sm font-bold rounded-sm hover:bg-[#D4AF6A] uppercase tracking-widest" href="/contact" onclick="route(event, '/contact')">Get a Quote</a>
</div>
</div>
</div>

<div className="page-section" id="page-faq">
<div className="py-20 px-6 max-w-3xl mx-auto">
<h1 className="text-4xl font-serif mb-12 text-center text-white">Common Questions</h1>
<div className="space-y-4">
<details className="group bg-[#1A1A1A] rounded-sm border border-white/5 open:border-[#C9A063]/50 transition-colors">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none text-white font-medium hover:text-[#C9A063] transition-colors">
                            Does the procedure hurt?
                            <i className="w-5 h-5 text-[#C9A063] transition-transform duration-300 group-open:rotate-180" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<div className="px-6 pb-6 text-[#B8B8B8] leading-relaxed text-sm font-light">
                            Most clients experience very little discomfort. We use a high-quality medical-grade topical anesthetic before and during the procedure to ensure you are comfortable. Many clients even fall asleep during the process!
                        </div>
</details>
<details className="group bg-[#1A1A1A] rounded-sm border border-white/5 open:border-[#C9A063]/50 transition-colors">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none text-white font-medium hover:text-[#C9A063] transition-colors">
                            How long does it last?
                            <i className="w-5 h-5 text-[#C9A063] transition-transform duration-300 group-open:rotate-180" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<div className="px-6 pb-6 text-[#B8B8B8] leading-relaxed text-sm font-light">
                            Depending on your skin type, lifestyle, and aftercare, results typically last between 1 to 3 years. Oily skin may require touch-ups sooner. We recommend an annual color boost to keep them looking fresh.
                        </div>
</details>
<details className="group bg-[#1A1A1A] rounded-sm border border-white/5 open:border-[#C9A063]/50 transition-colors">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none text-white font-medium hover:text-[#C9A063] transition-colors">
                            Will it look dark immediately?
                            <i className="w-5 h-5 text-[#C9A063] transition-transform duration-300 group-open:rotate-180" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<div className="px-6 pb-6 text-[#B8B8B8] leading-relaxed text-sm font-light">
                            Eyebrows will appear slightly darker and sharper for the first 3-5 days. This is normal oxidation. Over the next week, they will soften by about 30-40% to reveal the final, natural color we designed.
                        </div>
</details>
<details className="group bg-[#1A1A1A] rounded-sm border border-white/5 open:border-[#C9A063]/50 transition-colors">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none text-white font-medium hover:text-[#C9A063] transition-colors">
                            Can I wear makeup after?
                            <i className="w-5 h-5 text-[#C9A063] transition-transform duration-300 group-open:rotate-180" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<div className="px-6 pb-6 text-[#B8B8B8] leading-relaxed text-sm font-light">
                            You should avoid applying makeup directly on the eyebrows for at least 10 days to allow them to heal properly. You can wear face makeup around the area, but keep the brows clean.
                        </div>
</details>
</div>
</div>
</div>

<div className="page-section" id="page-reviews">
<div className="py-20 px-6 max-w-6xl mx-auto">
<h1 className="text-4xl text-white font-serif text-center mb-16">Client Love</h1>

<div className="bg-[#1A1A1A] p-8 md:p-12 rounded-sm border border-[#C9A063]/30 text-center max-w-3xl mx-auto mb-16">
<div className="flex justify-center text-[#C9A063] mb-6 gap-1">
<i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i><i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<h2 className="text-2xl md:text-3xl font-serif text-white italic leading-relaxed mb-6">"I flew from Singapore just for AmorJ and it was worth every mile. The most natural brows I've ever had."</h2>
<p className="text-[#B8B8B8] uppercase tracking-widest text-xs">- Sarah L., 5-Year Client</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-[#1A1A1A] p-8 rounded-sm border border-white/5 hover:border-[#C9A063] transition-colors">
<div className="flex text-[#C9A063] mb-4 gap-0.5"><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i></div>
<p className="text-[#B8B8B8] text-sm leading-relaxed mb-4">"Best decision I ever made. The studio is so clean and luxury. No redness at all."</p>
<p className="text-white text-xs font-medium">- Emily R.</p>
</div>
<div className="bg-[#1A1A1A] p-8 rounded-sm border border-white/5 hover:border-[#C9A063] transition-colors">
<div className="flex text-[#C9A063] mb-4 gap-0.5"><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i></div>
<p className="text-[#B8B8B8] text-sm leading-relaxed mb-4">"Very natural. I was afraid it would be too dark but it's perfect. The consultation was very detailed."</p>
<p className="text-white text-xs font-medium">- Ji-won K.</p>
</div>
<div className="bg-[#1A1A1A] p-8 rounded-sm border border-white/5 hover:border-[#C9A063] transition-colors">
<div className="flex text-[#C9A063] mb-4 gap-0.5"><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i></div>
<p className="text-[#B8B8B8] text-sm leading-relaxed mb-4">"The cafe style waiting area is so nice. Very professional team."</p>
<p className="text-white text-xs font-medium">- Min-ji P.</p>
</div>
</div>
</div>
</div>

<div className="page-section" id="page-contact">
<div className="py-20 px-6 max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-16">
<div>
<h1 className="text-4xl font-serif text-white mb-8">Visit AmorJ</h1>
<p className="text-[#B8B8B8] mb-12 font-light">Ready to enhance your natural beauty? We are located in the Route One Residence, Gangnam.</p>
<div className="space-y-8">
<div className="flex items-start gap-5">
<div className="bg-[#252525] p-3 rounded-sm text-[#C9A063] border border-white/5"><i data-lucide="map-pin" strokeWidth="1.5"></i></div>
<div>
<h3 className="text-white font-medium mb-1">Address</h3>
<p className="text-[#B8B8B8] text-sm">Route One Residence<br/>Gangnam-gu, Seoul, South Korea</p>
<p className="text-xs text-[#C9A063] mt-2 font-medium">5 min walk from Seolleung Station (Exit 5)</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="bg-[#252525] p-3 rounded-sm text-[#C9A063] border border-white/5"><i data-lucide="instagram" strokeWidth="1.5"></i></div>
<div>
<h3 className="text-white font-medium mb-1">Instagram</h3>
<p className="text-[#B8B8B8] text-sm">@amorj2016</p>
<a className="text-xs text-[#C9A063] mt-1 hover:text-white transition-colors block" href="#">DM for fastest response →</a>
</div>
</div>
<div className="flex items-start gap-5">
<div className="bg-[#252525] p-3 rounded-sm text-[#C9A063] border border-white/5"><i data-lucide="clock" strokeWidth="1.5"></i></div>
<div>
<h3 className="text-white font-medium mb-1">Hours</h3>
<p className="text-[#B8B8B8] text-sm">Mon-Sat: 10:00 AM - 7:00 PM</p>
<p className="text-[#B8B8B8] text-sm">Sun: Closed</p>
</div>
</div>
</div>
</div>
<div className="bg-[#1A1A1A] p-8 md:p-10 rounded-sm border border-white/5">
<h2 className="text-2xl font-serif text-white mb-6">Send a Message</h2>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-[#0D0D0D] border border-white/10 rounded-sm p-4 text-white focus:border-[#C9A063] outline-none text-sm placeholder:text-[#555]" placeholder="First Name" type="text"/>
<input className="w-full bg-[#0D0D0D] border border-white/10 rounded-sm p-4 text-white focus:border-[#C9A063] outline-none text-sm placeholder:text-[#555]" placeholder="Last Name" type="text"/>
</div>
<input className="w-full bg-[#0D0D0D] border border-white/10 rounded-sm p-4 text-white focus:border-[#C9A063] outline-none text-sm placeholder:text-[#555]" placeholder="Email Address" type="email"/>
<div className="relative">
<select className="w-full bg-[#0D0D0D] border border-white/10 rounded-sm p-4 text-[#B8B8B8] focus:border-[#C9A063] outline-none text-sm appearance-none">
<option>Select Service</option>
<option>Microblading</option>
<option>Combination</option>
<option>Powder Brows</option>
<option>General Inquiry</option>
</select>
<i className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666]" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<textarea className="w-full bg-[#0D0D0D] border border-white/10 rounded-sm p-4 text-white focus:border-[#C9A063] outline-none text-sm placeholder:text-[#555]" placeholder="Your Message" rows="4"></textarea>
<button className="w-full py-4 bg-gradient-gold text-white font-bold uppercase tracking-widest rounded-sm hover:opacity-90 transition-opacity">Send Message</button>
</form>
</div>
</div>
</div>
</div>

<div className="page-section" id="page-blog">
<div className="py-20 px-6 max-w-5xl mx-auto">
<h1 className="text-4xl font-serif text-white mb-4">Expert Tips</h1>
<p className="text-[#B8B8B8] mb-12">Latest advice on eyebrow care, trends, and techniques.</p>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-[#1A1A1A] rounded-sm overflow-hidden cursor-pointer border border-white/5 hover:border-[#C9A063] transition-colors group" onclick="route(event, '/blog/eyebrow-care-tips')">
<div className="h-64 bg-[#252525] relative overflow-hidden">
<img alt="Eyebrow Care" className="object-cover w-full h-full opacity-70 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8">
<div className="flex items-center gap-2 mb-3 text-xs text-[#C9A063] uppercase tracking-wider">
<span>Aftercare</span>
<span>•</span>
<span>5 Min Read</span>
</div>
<h3 className="text-2xl text-white font-serif mb-3 group-hover:text-[#C9A063] transition-colors">Eyebrow Aftercare Guide</h3>
<p className="text-[#B8B8B8] text-sm leading-relaxed mb-6">How to ensure perfectly healed results in 7 days. The do's and don'ts of healing.</p>
<span className="text-white text-xs font-bold uppercase tracking-widest border-b border-white pb-1 group-hover:text-[#C9A063] group-hover:border-[#C9A063] transition-colors">Read Article</span>
</div>
</div>

<div className="bg-[#1A1A1A] rounded-sm overflow-hidden cursor-pointer border border-white/5 hover:border-[#C9A063] transition-colors group" onclick="route(event, '/blog/microblading-vs-tattooing')">
<div className="h-64 bg-[#252525] relative overflow-hidden">
<img alt="Microblading vs Tattoo" className="object-cover w-full h-full opacity-70 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8">
<div className="flex items-center gap-2 mb-3 text-xs text-[#C9A063] uppercase tracking-wider">
<span>Education</span>
<span>•</span>
<span>4 Min Read</span>
</div>
<h3 className="text-2xl text-white font-serif mb-3 group-hover:text-[#C9A063] transition-colors">Microblading vs. Tattoo</h3>
<p className="text-[#B8B8B8] text-sm leading-relaxed mb-6">Understanding the key differences between semi-permanent makeup and traditional tattooing.</p>
<span className="text-white text-xs font-bold uppercase tracking-widest border-b border-white pb-1 group-hover:text-[#C9A063] group-hover:border-[#C9A063] transition-colors">Read Article</span>
</div>
</div>
</div>
</div>
</div>

<div className="page-section" id="page-blog-eyebrow-care-tips">
<div className="max-w-3xl mx-auto px-6 py-24">
<a className="text-xs uppercase tracking-widest text-[#B8B8B8] hover:text-white mb-8 block flex items-center gap-2" href="/blog" onclick="route(event, '/blog')"><i className="w-4 h-4" data-lucide="arrow-left" strokeWidth="1.5"></i> Back to Blog</a>
<h1 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">The Complete Guide to Eyebrow Tattoo Aftercare</h1>
<div className="h-96 w-full bg-[#252525] rounded-sm overflow-hidden mb-12">
<img alt="Aftercare" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&amp;w=1200"/>
</div>
<div className="prose prose-invert prose-lg text-[#B8B8B8] font-light">
<p className="mb-6">The secret to perfect eyebrows isn't just the procedure—it's how you care for them in the 7 days following your appointment.</p>
<h2 className="text-2xl text-white font-serif mt-12 mb-6">First 24 Hours</h2>
<p className="mb-6">Gently blot your eyebrows with a clean tissue every hour to remove lymph fluid. This prevents thick scabs from forming.</p>
<h2 className="text-2xl text-white font-serif mt-12 mb-6">Days 2-7</h2>
<p className="mb-6">Keep them dry! Use the healing cream provided in your AmorJ aftercare kit sparingly. Do not pick or scratch if they itch.</p>
<div className="bg-[#1A1A1A] p-6 border-l-2 border-[#C9A063] my-8">
<p className="text-white italic">"Great results require patience. Trust the healing process."</p>
</div>
</div>
</div>
</div>

<div className="page-section" id="page-blog-microblading-vs-tattooing">
<div className="max-w-3xl mx-auto px-6 py-24">
<a className="text-xs uppercase tracking-widest text-[#B8B8B8] hover:text-white mb-8 block flex items-center gap-2" href="/blog" onclick="route(event, '/blog')"><i className="w-4 h-4" data-lucide="arrow-left" strokeWidth="1.5"></i> Back to Blog</a>
<h1 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">Microblading vs. Traditional Tattooing</h1>
<div className="h-96 w-full bg-[#252525] rounded-sm overflow-hidden mb-12">
<img alt="Comparison" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&amp;w=1200"/>
</div>
<div className="prose prose-invert prose-lg text-[#B8B8B8] font-light">
<h2 className="text-2xl text-white font-serif mt-12 mb-6">It's Not Forever</h2>
<p className="mb-6">Unlike traditional tattoos which place ink deep into the dermis, semi-permanent makeup deposits pigment into the upper layers. This means it fades naturally over 1-3 years.</p>
<h2 className="text-2xl text-white font-serif mt-12 mb-6">No Blue Brows</h2>
<p className="mb-6">Traditional tattoos often turn blue or green over time due to the carbon content. Our premium pigments are formulated to fade true-to-color.</p>
</div>
</div>
</div>
</main>

<footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<span className="text-2xl font-serif font-semibold text-white tracking-wider">AMORJ</span>
<p className="text-[#B8B8B8] mt-6 max-w-sm leading-relaxed text-sm font-light">
                        Premium semi-permanent makeup studio in Gangnam, Seoul. Dedicated to natural results, artistic excellence, and your confidence.
                    </p>
<div className="flex gap-4 mt-6">
<a className="text-[#B8B8B8] hover:text-[#C9A063] transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i></a>
<a className="text-[#B8B8B8] hover:text-[#C9A063] transition-colors" href="#"><i className="w-5 h-5" data-lucide="message-circle" strokeWidth="1.5"></i></a>
</div>
</div>
<div>
<h4 className="text-white font-serif mb-6 text-lg">Quick Links</h4>
<ul className="space-y-3 text-[#666] text-sm">
<li><a className="hover:text-[#C9A063] transition-colors" href="/services" onclick="route(event, '/services')">Services</a></li>
<li><a className="hover:text-[#C9A063] transition-colors" href="/gallery" onclick="route(event, '/gallery')">Portfolio</a></li>
<li><a className="hover:text-[#C9A063] transition-colors" href="/pricing" onclick="route(event, '/pricing')">Pricing</a></li>
<li><a className="hover:text-[#C9A063] transition-colors" href="/contact" onclick="route(event, '/contact')">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-serif mb-6 text-lg">Contact</h4>
<ul className="space-y-3 text-[#666] text-sm">
<li>Instagram: @amorj2016</li>
<li>KakaoTalk: AmorJ</li>
<li>Gangnam-gu, Seoul</li>
<li className="pt-4 text-xs uppercase tracking-widest text-[#444]">Route One Residence</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#444] uppercase tracking-wider">
<p>© 2024 AmorJ Studio. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
