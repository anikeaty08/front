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
"@type": "Dentist",
"name": "Dr. Aarya Mehta",
"medicalSpecialty": "Prosthodontics",
"description": "Founder & Clinical Director – Aura Dental Group. Specializing in cosmetic dentistry and implantology.",
"image": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2500&auto=format&fit=crop",
"address": {
"@type": "PostalAddress",
"streetAddress": "Bandra West",
"addressLocality": "Mumbai",
"addressRegion": "Maharashtra",
"addressCountry": "IN"
},
"aggregateRating": {
"@type": "AggregateRating",
"ratingValue": "4.9",
"reviewCount": "840"
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Particles
        const particleContainer = document.getElementById('particles');
        const particleCount = 20;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            const size = Math.random() * 2 + 1;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}vw`;
            const duration = Math.random() * 15 + 10;
            particle.style.setProperty('--duration', `${duration}s`);
            particle.style.animationDelay = `-${Math.random() * 20}s`;
            particle.style.setProperty('--opacity', Math.random() * 0.4 + 0.1);
            particleContainer.appendChild(particle);
        }

        // Cursor
        const cursor = document.getElementById('magic-cursor');
        document.addEventListener('mousemove', (e) => {
            requestAnimationFrame(() => {
                cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            });
        });
        const hoverables = document.querySelectorAll('a, button, article, .group, input, textarea, select');
        hoverables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.querySelector('.cursor-dot').style.transform = 'scale(2)';
                cursor.querySelector('.cursor-glow').style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursor.querySelector('.cursor-glow').style.background = 'radial-gradient(circle, rgba(198, 168, 124, 0.25) 0%, rgba(255,255,255,0) 70%)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.querySelector('.cursor-dot').style.transform = 'scale(1)';
                cursor.querySelector('.cursor-glow').style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.querySelector('.cursor-glow').style.background = 'radial-gradient(circle, rgba(198, 168, 124, 0.15) 0%, rgba(255,255,255,0) 70%)';
            });
        });

        // Intersection Observer
        const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('reveal-hidden')) {
                        entry.target.classList.add('reveal-visible');
                    }
                    if (entry.target.id === 'about-line') {
                        entry.target.classList.add('active');
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-hidden').forEach(el => observer.observe(el));
        document.querySelectorAll('#about-line').forEach(el => observer.observe(el));

        // Loading
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('magic-loader').classList.add('fade-out');
            }, 1000);
        });

        // Navigation Scroll Effect
        const nav = document.querySelector('nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm');
                nav.classList.remove('py-6', 'md:py-8');
                nav.classList.add('py-4', 'md:py-5');
            } else {
                nav.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-4', 'md:py-5');
                nav.classList.add('py-6', 'md:py-8');
            }
        });

        // Canvas BG (Gold/Dust Effect)
        const mCanvas = document.getElementById('magic-bg');
        const mCtx = mCanvas.getContext('2d');
        let mW, mH;
        function mResize() {
            mW = mCanvas.width = window.innerWidth;
            mH = mCanvas.height = window.innerHeight;
        }
        window.addEventListener('resize', mResize);
        mResize();

        class MStream {
            constructor() {
                this.pts = [];
                this.cnt = 5;
                this.spd = Math.random() * 0.001 + 0.0005;
                this.off = Math.random() * 1000;
                for (let t = 0; t < this.cnt; t++) {
                    this.pts.push({ x: Math.random() * mW, y: mH - (mH / this.cnt) * t });
                }
            }
            update(t) {
                for (let s = 0; s < this.cnt; s++) {
                    this.pts[s].x += Math.sin(t * this.spd + s + this.off) * 1.5;
                }
            }
            draw(t) {
                t.beginPath();
                t.moveTo(this.pts[0].x, this.pts[0].y);
                for (let s = 1; s < this.pts.length - 1; s++) {
                    const e = (this.pts[s].x + this.pts[s + 1].x) / 2;
                    const i = (this.pts[s].y + this.pts[s + 1].y) / 2;
                    t.quadraticCurveTo(this.pts[s].x, this.pts[s].y, e, i);
                }
                t.strokeStyle = 'rgba(198, 168, 124, 0.06)';
                t.lineWidth = 60;
                t.lineCap = 'round';
                t.filter = 'blur(40px)';
                t.stroke();
                t.filter = 'none';
                t.strokeStyle = 'rgba(0, 0, 0, 0.03)';
                t.lineWidth = 1;
                t.stroke();
            }
        }
        const mStreams = [new MStream(), new MStream(), new MStream()];
        function mAnim(t) {
            mCtx.clearRect(0, 0, mW, mH);
            if (window.innerWidth > 768) {
                mStreams.forEach(s => { s.update(t); s.draw(mCtx); });
            }
            requestAnimationFrame(mAnim);
        }
        mAnim(0);
        window.addEventListener('scroll', () => {
            const scrollPercent = window.scrollY / window.innerHeight;
            mCanvas.style.opacity = Math.max(0.1, 0.6 - scrollPercent * 0.5);
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
      

<div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-50 transition-opacity duration-1000" id="magic-loader">
<div className="relative w-32 h-32 mb-8 flex items-center justify-center">
<div className="absolute inset-0 rounded-full bg-[#c6a87c] opacity-10 blur-2xl animate-pulse"></div>
<div className="absolute inset-0 border border-[#c6a87c]/50 rounded-full animate-[spin_8s_linear_infinite]"></div>
<div className="absolute inset-4 border border-slate-300/60 rounded-full animate-[spin_5s_linear_infinite_reverse]"></div>
<iconify-icon className="text-[#c6a87c] opacity-80 text-4xl animate-pulse" icon="solar:shield-plus-linear"></iconify-icon>
</div>
<span className="font-cinematic text-[#c6a87c] tracking-tight text-xs uppercase animate-pulse">
            Precision Dentistry...
        </span>
</div>

<canvas className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-40 mix-blend-multiply transition-opacity duration-700" id="magic-bg"></canvas>
<div className="particle-container" id="particles"></div>
<div id="magic-cursor"><div className="cursor-dot"></div><div className="cursor-glow"></div></div>

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center pointer-events-none transition-all duration-300">
<div className="reveal-hidden pointer-events-auto flex items-center gap-3">
<a className="flex flex-col items-center leading-none group cursor-pointer" href="#">
<span className="font-ancient text-2xl tracking-tight text-slate-900 font-semibold group-hover:text-[#c6a87c] transition-colors">AURA</span>
<span className="font-body text-xs text-[#c6a87c] tracking-widest mt-1 group-hover:text-slate-900 transition-colors">DENTAL GROUP</span>
</a>
</div>
<div className="hidden md:flex gap-8 pointer-events-auto reveal-hidden items-center" style={{transitionDelay: '200ms'}}>
<a className="text-xs uppercase tracking-widest text-slate-500 hover:text-[#c6a87c] transition-colors duration-500" href="#about">Dr. Mehta</a>
<a className="text-xs uppercase tracking-widest text-slate-500 hover:text-[#c6a87c] transition-colors duration-500" href="#clinics">Clinics</a>
<a className="text-xs uppercase tracking-widest text-slate-500 hover:text-[#c6a87c] transition-colors duration-500" href="#services">Services</a>
<a className="text-xs uppercase tracking-widest text-slate-500 hover:text-[#c6a87c] transition-colors duration-500" href="#technology">Technology</a>
<a className="text-xs uppercase tracking-widest text-slate-500 hover:text-[#c6a87c] transition-colors duration-500" href="#nri">NRI Patients</a>
<a className="px-5 py-2.5 border border-[#c6a87c]/40 rounded-sm text-xs uppercase tracking-widest text-[#c6a87c] hover:bg-[#c6a87c]/5 hover:border-[#c6a87c] transition-all" href="#contact">
                Book Consult
            </a>
</div>

<div className="md:hidden pointer-events-auto text-[#c6a87c]">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</div>
</nav>

<header className="min-h-screen flex flex-col relative items-center justify-center px-6 overflow-hidden bg-slate-50">

<div className="absolute inset-0 z-0 pointer-events-none">
<img alt="Premium Dental Clinic Interior" className="w-full h-full object-cover opacity-[0.15] grayscale hover:grayscale-0 transition-all duration-[3s] scale-105 animate-[pulse_10s_ease-in-out_infinite]" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50"></div>
</div>
<div className="relative z-10 text-center max-w-6xl space-y-8 mt-20">
<div className="reveal-hidden" style={{transitionDelay: '300ms'}}>
<div className="flex items-center justify-center gap-3 text-[#c6a87c]">
<iconify-icon icon="solar:shield-star-linear" width="16"></iconify-icon>
<p className="text-xs uppercase tracking-widest font-normal">
                        15+ Years Expertise • 4 Advanced Clinics • 25,000+ Smiles
                    </p>
</div>
</div>
<h1 className="reveal-hidden font-ancient text-5xl md:text-8xl tracking-tight text-slate-900 font-semibold leading-tight drop-shadow-sm" style={{transitionDelay: '600ms'}}>
                Precision Dentistry.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c6a87c] via-[#a38054] to-[#c6a87c]">Elevated Experience.</span>
</h1>
<div className="reveal-hidden" style={{transitionDelay: '900ms'}}>
<p className="font-cinematic text-lg md:text-2xl tracking-tight text-slate-600 italic font-light max-w-2xl mx-auto leading-relaxed">
                    Led by Dr. Aarya Mehta, redefining aesthetic dentistry and implantology in Mumbai with world-class care.
                </p>
</div>
<div className="reveal-hidden pt-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12" style={{transitionDelay: '1100ms'}}>
<a className="group inline-flex items-center gap-4 text-xs uppercase tracking-widest text-[#c6a87c] hover:text-slate-900 transition-colors" href="#contact">
<span className="border-b border-transparent group-hover:border-slate-900 transition-all pb-1">Book Appointment</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="group inline-flex items-center gap-4 text-xs uppercase tracking-widest text-slate-500 hover:text-[#c6a87c] transition-colors" href="#clinics">
<span className="border-b border-transparent group-hover:border-[#c6a87c] transition-all pb-1">Explore Our Clinics</span>
</a>
</div>
</div>
</header>

<section className="py-32 px-6 md:px-12 max-w-screen-xl mx-auto relative" id="about">
<div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
<div className="hidden md:block md:col-span-1 h-full relative">
<div className="absolute left-0 top-0 bottom-0 w-px magic-line" id="about-line"></div>
</div>
<div className="md:col-span-11 space-y-12">
<div className="reveal-hidden">
<span className="text-xs text-[#c6a87c] uppercase tracking-widest opacity-90">
                        About The Director
                    </span>
<h2 className="mt-6 font-cinematic text-4xl md:text-5xl tracking-tight text-slate-900 leading-snug">
                        Dr. Aarya Mehta<br/>
<span className="text-slate-500 font-light text-3xl tracking-tight">BDS, MDS (Prosthodontics)</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-black/5 pt-12 reveal-hidden text-slate-600 font-light leading-loose text-sm md:text-base">
<p>
                        As the Founder and Clinical Director of Aura Dental Group, Dr. Aarya Mehta brings over 15 years of specialized expertise in prosthodontics and aesthetic dentistry. Her vision is rooted in a patient-first philosophy, delivering painless, predictable, and luxurious smile transformations.
                    </p>
<div className="space-y-4">
<p>
                            Dr. Mehta is recognized as a serious healthcare entrepreneur, seamlessly blending clinical mastery with technological advancement to standardize high-end dental care across Mumbai.
                        </p>
<ul className="space-y-3 mt-4 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#c6a87c] mt-1" icon="solar:verified-check-linear"></iconify-icon>
<span>MDS (Prosthodontics) – Manipal College of Dental Sciences</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#c6a87c] mt-1" icon="solar:verified-check-linear"></iconify-icon>
<span>Fellowship in Aesthetic Dentistry – NYU College of Dentistry</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#c6a87c] mt-1" icon="solar:verified-check-linear"></iconify-icon>
<span>Certified Digital Smile Design (DSD) Expert</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#c6a87c] mt-1" icon="solar:verified-check-linear"></iconify-icon>
<span>Member – International Congress of Oral Implantologists</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-b border-black/5 bg-white relative z-10">
<div className="max-w-screen-xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 reveal-hidden text-center md:text-left">
<div className="space-y-2">
<p className="font-ancient text-4xl tracking-tight text-[#c6a87c]">25,000+</p>
<p className="text-xs uppercase tracking-widest text-slate-500">Patients Treated</p>
</div>
<div className="space-y-2">
<p className="font-ancient text-4xl tracking-tight text-[#c6a87c]">3,500+</p>
<p className="text-xs uppercase tracking-widest text-slate-500">Implants Placed</p>
</div>
<div className="space-y-2">
<p className="font-ancient text-4xl tracking-tight text-[#c6a87c]">4</p>
<p className="text-xs uppercase tracking-widest text-slate-500">Premium Locations</p>
</div>
<div className="space-y-2">
<p className="font-ancient text-4xl tracking-tight text-[#c6a87c]">98%</p>
<p className="text-xs uppercase tracking-widest text-slate-500">Patient Satisfaction</p>
</div>
</div>
</section>

<section className="py-24 max-w-screen-xl mx-auto px-6 md:px-12" id="services">
<div className="mb-16 reveal-hidden text-center md:text-left border-b border-black/5 pb-8">
<span className="text-xs text-[#c6a87c] uppercase tracking-widest">Clinical Excellence</span>
<h3 className="font-cinematic text-3xl md:text-4xl tracking-tight text-slate-900 mt-4">Core Services</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal-hidden">

<div className="glass-panel p-8 rounded-sm hover:border-[#c6a87c]/40 transition-all duration-500 group">
<iconify-icon className="text-4xl text-[#c6a87c] mb-6 group-hover:scale-110 transition-transform" icon="solar:star-shine-linear"></iconify-icon>
<h4 className="font-cinematic text-2xl tracking-tight text-slate-900 mb-3">Cosmetic Dentistry</h4>
<p className="text-sm text-slate-600 font-light leading-relaxed">
                    Veneers, comprehensive Smile Makeovers, Laser Teeth Whitening, and precise Digital Smile Design.
                </p>
</div>

<div className="glass-panel p-8 rounded-sm hover:border-[#c6a87c]/40 transition-all duration-500 group">
<iconify-icon className="text-4xl text-[#c6a87c] mb-6 group-hover:scale-110 transition-transform" icon="solar:shield-check-linear"></iconify-icon>
<h4 className="font-cinematic text-2xl tracking-tight text-slate-900 mb-3">Dental Implants</h4>
<p className="text-sm text-slate-600 font-light leading-relaxed">
                    Single tooth replacement, Full Mouth Implants, and advanced All-on-4 immediate load techniques.
                </p>
</div>

<div className="glass-panel p-8 rounded-sm hover:border-[#c6a87c]/40 transition-all duration-500 group">
<iconify-icon className="text-4xl text-[#c6a87c] mb-6 group-hover:scale-110 transition-transform" icon="solar:medical-kit-linear"></iconify-icon>
<h4 className="font-cinematic text-2xl tracking-tight text-slate-900 mb-3">Restorative Care</h4>
<p className="text-sm text-slate-600 font-light leading-relaxed">
                    Same-day CAD-CAM Crowns, Bridges, painless Root Canal Treatments, and Full Mouth Rehabilitation.
                </p>
</div>

<div className="glass-panel p-8 rounded-sm hover:border-[#c6a87c]/40 transition-all duration-500 group">
<iconify-icon className="text-4xl text-[#c6a87c] mb-6 group-hover:scale-110 transition-transform" icon="solar:users-group-rounded-linear"></iconify-icon>
<h4 className="font-cinematic text-2xl tracking-tight text-slate-900 mb-3">Family Dentistry</h4>
<p className="text-sm text-slate-600 font-light leading-relaxed">
                    Pediatric care, Invisible Aligners, traditional Braces, and proactive preventive therapies.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-slate-100 relative overflow-hidden border-t border-black/5" id="clinics">
<div className="px-6 md:px-12 max-w-screen-xl mx-auto">
<div className="mb-16 reveal-hidden flex flex-col items-center text-center">
<span className="text-xs text-[#c6a87c] uppercase tracking-widest">Aura Dental Group</span>
<h3 className="font-cinematic text-3xl md:text-4xl tracking-tight text-slate-900 mt-4 mb-6">Standardized Luxury Care</h3>
<p className="text-sm text-slate-600 font-light max-w-2xl">
                    Experience consistency across our 4 strategic Mumbai locations. Every clinic is equipped with advanced sterilization protocols, digital workflows, and a serene environment tailored for your comfort.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative overflow-hidden rounded-sm bg-white border border-slate-200 p-10 h-96 flex flex-col justify-end reveal-hidden cursor-none shadow-sm">
<img alt="Bandra Clinic Interior" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-opacity duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-2 text-[#c6a87c]">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
<span className="text-xs uppercase tracking-widest">Flagship Centers</span>
</div>
<h4 className="font-cinematic text-3xl tracking-tight text-slate-900 mb-4">Bandra &amp; South Mumbai</h4>
<p className="text-sm text-slate-600 font-light mb-6 line-clamp-2">
                            Our signature luxury practices catering to high-profile clients, offering complete privacy and VIP lounges.
                        </p>
<div className="w-8 h-[1px] bg-[#c6a87c] group-hover:w-16 transition-all duration-500"></div>
</div>
</div>

<div className="group relative overflow-hidden rounded-sm bg-white border border-slate-200 p-10 h-96 flex flex-col justify-end reveal-hidden cursor-none shadow-sm">
<img alt="Powai Clinic Operating Room" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-opacity duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-2 text-[#c6a87c]">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
<span className="text-xs uppercase tracking-widest">Tech Hubs</span>
</div>
<h4 className="font-cinematic text-3xl tracking-tight text-slate-900 mb-4">Andheri &amp; Powai</h4>
<p className="text-sm text-slate-600 font-light mb-6">
                            State-of-the-art digital dentistry centers equipped with in-house 3D milling and immediate implant infrastructure.
                        </p>
<div className="w-8 h-[1px] bg-[#c6a87c] group-hover:w-16 transition-all duration-500"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 max-w-screen-xl mx-auto space-y-32" id="technology">
<div className="text-center reveal-hidden mb-16">
<span className="text-xs text-[#c6a87c] uppercase tracking-widest">The Future of Care</span>
<h3 className="font-ancient text-4xl tracking-tight text-slate-900 mt-4">Advanced Dental Technology</h3>
</div>

<article className="group relative reveal-hidden">
<div className="flex flex-col md:flex-row gap-8 md:items-end justify-between mb-8 border-b border-black/5 pb-6">
<div>
<h3 className="font-cinematic text-3xl md:text-4xl tracking-tight text-slate-800 font-normal group-hover:text-[#c6a87c] transition-colors duration-700">
                        3D CBCT &amp; Digital Scanning
                    </h3>
<p className="mt-2 text-xs text-slate-500 uppercase tracking-widest flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#c6a87c]"></span> Precision Diagnostics
                    </p>
</div>
<div className="max-w-md text-sm text-slate-600 font-light">
                    We utilize ultra-low radiation 3D CBCT imaging and painless intraoral scanners to replace traditional, uncomfortable dental impressions, ensuring millimeter-perfect accuracy for implants and aligners.
                </div>
</div>
<div className="w-full aspect-[21/9] bg-slate-200 overflow-hidden relative cursor-none rounded-sm border border-slate-200">
<img alt="Dental 3D Scanner" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-[1.5s] ease-out mix-blend-luminosity group-hover:mix-blend-normal" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</article>

<article className="group relative reveal-hidden">
<div className="flex flex-col md:flex-row gap-8 md:items-end justify-between mb-8 border-b border-black/5 pb-6">
<div>
<h3 className="font-cinematic text-3xl md:text-4xl tracking-tight text-slate-800 font-normal group-hover:text-[#c6a87c] transition-colors duration-700">
                        CAD-CAM &amp; Same-Day Crowns
                    </h3>
<p className="mt-2 text-xs text-slate-500 uppercase tracking-widest flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#c6a87c]"></span> Instant Restoration
                    </p>
</div>
<div className="max-w-md text-sm text-slate-600 font-light">
                    Our in-house milling machines craft custom, high-strength ceramic crowns and veneers while you wait. Combined with digital patient records, your treatment is swift, seamless, and entirely paperless.
                </div>
</div>
<div className="w-full aspect-[21/9] bg-slate-200 overflow-hidden relative cursor-none rounded-sm border border-slate-200">
<img alt="Dental CAD CAM software" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-[1.5s] ease-out mix-blend-luminosity group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</article>
</section>

<section className="py-24 px-6 md:px-12 max-w-screen-xl mx-auto border-t border-black/5" id="nri">
<div className="mb-16 text-center reveal-hidden">
<span className="text-xs text-[#c6a87c] uppercase tracking-widest">Global Standards</span>
<h3 className="font-cinematic text-3xl md:text-4xl tracking-tight text-slate-900 mt-4">International &amp; NRI Services</h3>
<p className="text-sm text-slate-600 font-light max-w-2xl mx-auto mt-4">
                Tailored dental tourism protocols for our overseas guests, combining world-class dental work with a luxurious Mumbai itinerary.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 glass-panel rounded-sm reveal-hidden hover:border-[#c6a87c]/40 transition-all duration-500">
<div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#c6a87c]/10 group-hover:border-[#c6a87c]/20 transition-colors">
<iconify-icon className="text-slate-400 group-hover:text-[#c6a87c] text-xl" icon="solar:laptop-linear"></iconify-icon>
</div>
<h4 className="text-slate-900 font-cinematic text-2xl tracking-tight">Virtual Consultation</h4>
<p className="text-sm text-slate-600 font-light mt-4 leading-relaxed">
                    Pre-travel assessment via secure video calls to discuss your X-rays, timeline, and preliminary digital smile design.
                </p>
</div>

<div className="group p-8 glass-panel rounded-sm reveal-hidden hover:border-[#c6a87c]/40 transition-all duration-500" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#c6a87c]/10 group-hover:border-[#c6a87c]/20 transition-colors">
<iconify-icon className="text-slate-400 group-hover:text-[#c6a87c] text-xl" icon="solar:routing-linear"></iconify-icon>
</div>
<h4 className="text-slate-900 font-cinematic text-2xl tracking-tight">Care Coordinator</h4>
<p className="text-sm text-slate-600 font-light mt-4 leading-relaxed">
                    A dedicated concierge to assist with express treatment scheduling, airport transfers, and hotel recommendations in Mumbai.
                </p>
</div>

<div className="group p-8 glass-panel rounded-sm reveal-hidden hover:border-[#c6a87c]/40 transition-all duration-500" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#c6a87c]/10 group-hover:border-[#c6a87c]/20 transition-colors">
<iconify-icon className="text-slate-400 group-hover:text-[#c6a87c] text-xl" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<h4 className="text-slate-900 font-cinematic text-2xl tracking-tight">Tele-Follow Up</h4>
<p className="text-sm text-slate-600 font-light mt-4 leading-relaxed">
                    Post-treatment global aftercare. Our team remains accessible for virtual check-ins once you return to your home country.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-black/5">
<div className="max-w-screen-xl mx-auto px-6 md:px-12">
<h3 className="font-cinematic text-3xl md:text-4xl tracking-tight text-slate-900 mb-12 text-center reveal-hidden">Patient Experiences</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 bg-slate-50 border border-slate-200 rounded-sm relative reveal-hidden shadow-sm">
<iconify-icon className="text-[#c6a87c] text-2xl absolute top-6 right-6 opacity-30" icon="solar:quote-up-linear"></iconify-icon>
<p className="text-slate-600 text-sm font-light leading-loose mb-6">"Dr. Aarya's attention to detail is immaculate. The clinic feels like a luxury lounge, and my porcelain veneers look incredibly natural. Highly recommend."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs text-slate-700">S</div>
<div>
<p className="text-xs text-slate-900 font-medium">Siddharth R.</p>
<p className="text-xs text-slate-500">Corporate Executive</p>
</div>
</div>
</div>

<div className="p-8 bg-slate-50 border border-slate-200 rounded-sm relative reveal-hidden shadow-sm" style={{transitionDelay: '100ms'}}>
<iconify-icon className="text-[#c6a87c] text-2xl absolute top-6 right-6 opacity-30" icon="solar:quote-up-linear"></iconify-icon>
<p className="text-slate-600 text-sm font-light leading-loose mb-6">"Flew in from Dubai specifically for full mouth implants. The seamless coordination and painless execution by the Aura Dental team was truly world-class."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs text-slate-700">N</div>
<div>
<p className="text-xs text-slate-900 font-medium">Natasha M.</p>
<p className="text-xs text-slate-500">NRI Patient</p>
</div>
</div>
</div>

<div className="p-8 bg-slate-50 border border-slate-200 rounded-sm relative reveal-hidden shadow-sm" style={{transitionDelay: '200ms'}}>
<iconify-icon className="text-[#c6a87c] text-2xl absolute top-6 right-6 opacity-30" icon="solar:quote-up-linear"></iconify-icon>
<p className="text-slate-600 text-sm font-light leading-loose mb-6">"Professional, punctual, and technologically brilliant. The intraoral scanning was fascinating, and I walked out with a perfect crown on the same day."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs text-slate-700">A</div>
<div>
<p className="text-xs text-slate-900 font-medium">Ananya V.</p>
<p className="text-xs text-slate-500">Entrepreneur</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 max-w-screen-xl mx-auto border-t border-black/5" id="contact">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

<div className="reveal-hidden space-y-8">
<div>
<h2 className="font-cinematic text-4xl md:text-5xl tracking-tight text-slate-900 mb-6">
                        Schedule a Consultation
                    </h2>
<p className="text-slate-600 font-light leading-relaxed">
                        Begin your journey to a flawless smile. Reach out to our concierge desk to book your appointment at any of our four premium Mumbai locations.
                    </p>
</div>
<div className="p-8 glass-panel border border-slate-200 rounded-sm">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-[#c6a87c]/10 flex items-center justify-center text-[#c6a87c]">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<h4 className="font-ancient text-xl tracking-tight text-slate-900">Head Office</h4>
</div>
<div className="space-y-4 text-sm text-slate-600 font-light">
<p><strong className="font-medium">Aura Dental Group - Flagship</strong></p>
<p>Turner Road, Bandra West,<br/>Mumbai, Maharashtra 400050</p>
<p className="pt-2 flex items-center gap-2">
<iconify-icon className="text-[#c6a87c]" icon="solar:phone-linear"></iconify-icon> +91 98765 43210
                        </p>
<p className="flex items-center gap-2">
<iconify-icon className="text-[#c6a87c]" icon="solar:letter-linear"></iconify-icon> appointments@auradental.in
                        </p>
<p className="pt-2 text-xs text-slate-500 uppercase tracking-widest font-normal">
                            Mon - Sat : 10:00 AM - 8:00 PM
                        </p>
</div>

<div className="mt-8 w-full h-32 bg-slate-100 border border-slate-200 rounded-sm flex items-center justify-center relative overflow-hidden group">
<img alt="Clinic Exterior Location" className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-white/40 group-hover:bg-transparent transition-colors duration-700"></div>
<div className="relative z-10 flex items-center gap-2 text-xs uppercase tracking-widest text-slate-900 bg-white/90 px-4 py-2 rounded-sm shadow-sm group-hover:text-[#c6a87c] transition-colors cursor-pointer">
<iconify-icon icon="solar:map-linear"></iconify-icon> View on Maps
                         </div>
</div>
</div>
</div>

<div className="reveal-hidden glass-panel p-8 md:p-12 rounded-sm border border-slate-200 flex flex-col justify-center shadow-sm">
<h3 className="font-ancient text-2xl tracking-tight text-slate-900 mb-8">Request an Appointment</h3>
<form className="space-y-8" onsubmit="event.preventDefault();">
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-slate-500">Patient Name</label>
<input className="w-full border-b border-slate-300 py-2 text-slate-900 focus:border-[#c6a87c] transition-colors placeholder-slate-400 text-sm" placeholder="Your full name" type="text"/>
</div>
<div className="grid grid-cols-2 gap-8">
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-slate-500">Phone</label>
<input className="w-full border-b border-slate-300 py-2 text-slate-900 focus:border-[#c6a87c] transition-colors placeholder-slate-400 text-sm" placeholder="+91" type="tel"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-slate-500">Preferred Clinic</label>
<select className="w-full border-b border-slate-300 py-2 text-slate-600 focus:border-[#c6a87c] transition-colors bg-transparent text-sm cursor-pointer">
<option className="bg-white text-slate-900">Bandra West</option>
<option className="bg-white text-slate-900">South Mumbai</option>
<option className="bg-white text-slate-900">Andheri</option>
<option className="bg-white text-slate-900">Powai</option>
<option className="bg-white text-slate-900">Virtual Consult (NRI)</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-slate-500">Primary Concern</label>
<textarea className="w-full border-b border-slate-300 py-2 text-slate-900 focus:border-[#c6a87c] transition-colors placeholder-slate-400 resize-none h-24 text-sm" placeholder="Tell us how we can help your smile..."></textarea>
</div>
<button className="w-full py-4 bg-slate-900 border border-slate-900 text-white text-xs uppercase tracking-widest hover:bg-[#c6a87c] hover:border-[#c6a87c] transition-all duration-500 shadow-md" type="submit">
                        Confirm Request
                    </button>
</form>
</div>
</div>
</section>

<footer className="py-24 px-6 md:px-12 border-t border-black/5 relative overflow-hidden bg-white">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#c6a87c]/10 to-transparent pointer-events-none"></div>
<div className="relative z-10 flex flex-col items-center justify-center text-center space-y-12 reveal-hidden">

<div className="flex flex-col items-center leading-none opacity-80 hover:opacity-100 transition-opacity">
<span className="font-ancient text-2xl tracking-tight text-slate-900 font-semibold">AURA</span>
<span className="font-body text-xs text-[#c6a87c] tracking-widest mt-1">DENTAL GROUP</span>
</div>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 text-xs text-slate-500 uppercase tracking-widest pt-8">
<a className="hover:text-[#c6a87c] transition-colors duration-500" href="#about">Dr. Mehta</a>
<a className="hover:text-[#c6a87c] transition-colors duration-500" href="#services">Treatments</a>
<a className="hover:text-[#c6a87c] transition-colors duration-500" href="#clinics">Locations</a>
<a className="hover:text-[#c6a87c] transition-colors duration-500" href="#contact">Contact</a>
</div>
<p className="text-xs text-slate-400 uppercase tracking-widest mt-12">
                © 2024 Aura Dental Group. Dr. Aarya Mehta. All Rights Reserved.
            </p>
</div>
</footer>



    </>
  );
}
