import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // 1. SCROLL REVEAL OBSERVER (Elements sliding up)
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-element');
            elements.forEach(el => observer.observe(el));
        });

        // 2. PARALLAX BLUR EFFECT (Signature "Oceans" Animation)
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const heroTitle = document.getElementById('hero-title');
            const heroDesc = document.getElementById('hero-desc');
            const nav = document.getElementById('navbar');

            // Hero Text Blur/Fade/Parallax
            if(scrolled < 700) {
                if(heroTitle) {
                    heroTitle.style.filter = `blur(${scrolled * 0.04}px)`;
                    heroTitle.style.opacity = 1 - (scrolled * 0.0025);
                    heroTitle.style.transform = `translateY(${scrolled * 0.2}px)`; // Gentle parallax
                }
                if(heroDesc) {
                    heroDesc.style.opacity = 1 - (scrolled * 0.003);
                    heroDesc.style.transform = `translateY(${scrolled * 0.1}px)`;
                }
            }

            // Navbar Blur State
            if (scrolled > 50) {
                nav.classList.add('shadow-sm');
                nav.classList.replace('bg-nude-100/80', 'bg-nude-100/95');
            } else {
                nav.classList.remove('shadow-sm');
                nav.classList.replace('bg-nude-100/95', 'bg-nude-100/80');
            }
        });

        // 3. PARTICLE SYSTEM (Optimized for warmth)
        (function() {
            const canvas = document.getElementById('luxury-dust');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            let width, height, particles = [];

            function init() {
                width = canvas.width = canvas.offsetWidth;
                height = canvas.height = canvas.offsetHeight;
                createParticles();
            }

            function createParticles() {
                particles = [];
                // Sparse particles for elegance
                const count = Math.floor((width * height) / 15000); 
                for (let i = 0; i < count; i++) {
                    particles.push({
                        x: Math.random() * width,
                        y: Math.random() * height,
                        size: Math.random() * 2 + 0.5,
                        speed: Math.random() * 0.2 + 0.05,
                        opacity: Math.random() * 0.5 + 0.1
                    });
                }
            }

            function animate() {
                ctx.clearRect(0, 0, width, height);
                particles.forEach(p => {
                    p.y -= p.speed;
                    if (p.y < -5) p.y = height + 5;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    // Color: Warm Nude/Gold (#E8D5CD approx)
                    ctx.fillStyle = 'rgba(232, 213, 205, ' + p.opacity + ')';
                    ctx.fill();
                });
                requestAnimationFrame(animate);
            }

            window.addEventListener('resize', init);
            init();
            animate();
        })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full border-b pt-2 pr-6 pb-2 pl-6 relative z-50 border-burgundy-800/10 bg-nude-100">
<div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] md:text-xs tracking-wide uppercase font-medium opacity-70">
<span className="">Mon-Sat: 9:30AM-7PM | Sun: 10AM-5PM</span>
<div className="flex gap-6">
<span className="">(561) 898-1979</span>
<span className="hidden md:inline">1540 Palm Beach Lakes Blvd Unit 150, West Palm Beach, FL 33401</span>
</div>
</div>
</div>

<nav className="sticky transition-all duration-700 z-50 w-full border-transparent border-b pt-6 pr-6 pb-6 pl-6 top-0 backdrop-blur-md" id="navbar">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center gap-2 animate-drift">
<span className="font-serif text-xl font-medium tracking-tight">Emm Nail Bar &amp; Lash</span>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium tracking-wide animate-drift delay-100">
<a className="hover:text-orange-600 transition-colors duration-500" href="#about">About</a>
<a className="hover:text-orange-600 transition-colors duration-500" href="#services">Services</a>
<a className="hover:text-orange-600 transition-colors duration-500" href="#gallery">Gallery</a>
<a className="hover:text-orange-600 transition-colors duration-500" href="#faq">FAQ</a>
</div>
<button className="animate-drift delay-200 uppercase transition-all duration-500 flex text-xs font-medium tracking-wider rounded-full pt-3 pr-6 pb-3 pl-6 gap-x-2 gap-y-2 items-center hover:text-stone-500 hover:bg-burgundy-800 text-orange-600 bg-red-100">
                Book Appointment <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</nav>

<header className="overflow-hidden min-h-[90vh] flex flex-col pt-12 pr-6 pb-24 pl-6 relative justify-center">

<div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
<canvas className="w-full h-full opacity-60" height="1221" id="luxury-dust" width="1064"></canvas>
</div>
<div className="text-center max-w-7xl mr-auto mb-16 ml-auto relative z-10">

<h1 className="font-serif text-5xl md:text-8xl leading-[1.1] tracking-tight mb-6 animate-drift" id="hero-title">
                Elevate your style<br/>
                in <span className="text-orange-600 font-light italic">Florida</span>
</h1>
<p className="max-w-md mx-auto text-base mb-10 leading-relaxed animate-drift delay-200 text-burgundy-800/70" id="hero-desc">
                Premium nail care, lash extensions, and waxing services. Experience the artistry at Emm Nail Bar &amp; Lash.
            </p>
<div className="animate-drift delay-300">
<button className="px-8 py-3 rounded-full text-sm font-medium hover:bg-orange-600 hover:scale-105 transition-all duration-500 flex items-center gap-2 mx-auto bg-burgundy-800 text-white">
                    View Services <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 max-w-5xl mr-auto ml-auto pr-4 pl-4 gap-x-6 gap-y-6 relative z-10">
<div className="reveal-element delay-100 group relative in-view">
<div className="aspect-[1/2] overflow-hidden rounded-t-[200px] rounded-b-[100px]">
<img alt="Lashes" className="group-hover:scale-110 transition-transform duration-[2500ms] w-full h-full object-cover" src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&amp;q=80"/>
</div>
</div>
<div className="reveal-element delay-300 group relative md:mt-12">
<div className="aspect-[1/2] overflow-hidden rounded-t-[200px] rounded-b-[100px]">
<img alt="Nail Art" className="group-hover:scale-110 transition-transform duration-[2500ms] w-full h-full object-cover" src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="reveal-element delay-500 group relative in-view">
<div className="aspect-[1/2] overflow-hidden rounded-t-[200px] rounded-b-[100px]">
<img alt="Pedicure" className="group-hover:scale-110 transition-transform duration-[2500ms] w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c86bfd8-5307-4938-957d-e00e4067e795_800w.webp"/>
</div>
</div>
</div>
</header>

<section className="pt-24 pr-6 pb-24 pl-6 relative">
<div className="absolute top-10 left-1/2 -translate-x-1/2 flex justify-center w-full opacity-10 pointer-events-none animate-pulse duration-[4000ms]">
<svg className="lucide lucide-crown w-24 h-24 text-orange-600" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
</div>
<div className="text-center mb-16 reveal-element">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-2">Complete beauty</h2>
<p className="font-serif text-3xl md:text-4xl italic text-orange-600">head to toe</p>
</div>
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal-element delay-100 p-10 rounded-2xl text-center transition-colors duration-500 cursor-pointer group hover:-translate-y-2 ease-out bg-nude-200/50 hover:bg-nude-200">
<div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 bg-white/50">
<svg className="lucide lucide-sparkle w-5 h-5 stroke-[1.5] text-burgundy-800" data-lucide="sparkle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
</div>
<h3 className="font-serif text-xl font-medium mb-2">Nail Enhancements</h3>
<p className="text-xs uppercase tracking-widest text-burgundy-800/60">Acrylic &amp; Dip Powder</p>
</div>

<div className="reveal-element delay-200 p-10 rounded-2xl text-center transition-colors duration-500 cursor-pointer group hover:-translate-y-2 ease-out bg-nude-200/50 hover:bg-nude-200">
<div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 bg-white/50">
<svg className="lucide lucide-eye w-5 h-5 stroke-[1.5] text-burgundy-800" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h3 className="font-serif text-xl font-medium mb-2">Lash Extensions</h3>
<p className="text-xs uppercase tracking-widest text-burgundy-800/60">Volume &amp; Hybrid</p>
</div>

<div className="reveal-element delay-300 p-10 rounded-2xl text-center transition-colors duration-500 cursor-pointer group hover:-translate-y-2 ease-out bg-nude-200/50 hover:bg-nude-200">
<div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 bg-white/50">
<svg className="lucide lucide-flower-2 w-5 h-5 stroke-[1.5] text-burgundy-800" data-lucide="flower-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"></path><circle cx="12" cy="8" r="2"></circle><path d="M12 10v12"></path><path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"></path><path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"></path></svg>
</div>
<h3 className="font-serif text-xl font-medium mb-2">Spa Pedicures</h3>
<p className="text-xs uppercase tracking-widest text-burgundy-800/60">Relaxation &amp; Care</p>
</div>
</div>
<p className="text-center text-sm mt-12 max-w-md mx-auto reveal-element text-burgundy-800/60">
            Your neighborhood destination in Las Vegas for professional nail care, waxing, and eyelash services.
        </p>
</section>

<section className="py-24 px-6 bg-nude-200/30" id="about">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12 reveal-element">
<span className="text-xs uppercase tracking-widest opacity-60 mb-2 block">Our Studio</span>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-1">Expert techniques.</h2>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight italic text-orange-600">Quality products.</h2>
</div>

<div className="flex justify-center gap-8 md:gap-24 mb-16 text-center reveal-element delay-100">
<div>
<div className="flex items-center justify-center gap-2 font-serif text-2xl md:text-3xl text-orange-600">
<svg className="lucide lucide-star w-5 h-5 fill-orange-600 animate-pulse" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 4.8
                    </div>
<span className="text-xs font-medium uppercase tracking-wide opacity-60 mt-1 block">Google Rating</span>
</div>
<div className="">
<div className="flex items-center justify-center gap-2 font-serif text-2xl md:text-3xl text-orange-600">
<svg className="lucide lucide-gem w-5 h-5" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg> 1000+
                    </div>
<span className="text-xs font-medium uppercase tracking-wide opacity-60 mt-1 block">Happy Clients</span>
</div>
<div>
<div className="flex items-center justify-center gap-2 font-serif text-2xl md:text-3xl text-orange-600">
<svg className="lucide lucide-clock w-5 h-5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> 7 Days
                    </div>
<span className="text-xs font-medium uppercase tracking-wide opacity-60 mt-1 block">Open Weekly</span>
</div>
</div>

<div className="relative max-w-5xl mx-auto reveal-element delay-200">
<div className="aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
<img alt="Emm Nail Bar Interior Vibe" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[3000ms]" src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute bottom-[-40px] md:bottom-[-60px] left-1/2 -translate-x-1/2 p-8 md:p-10 rounded-xl shadow-xl max-w-sm md:max-w-md w-[90%] text-center border hover:-translate-y-2 transition-transform duration-500 bg-nude-100 border-burgundy-800/5">
<p className="font-serif text-lg md:text-xl italic leading-relaxed mb-6">
                        "We pride ourselves on providing a clean, relaxing environment where you can unwind while we perfect your look."
                    </p>
<div className="flex items-center justify-center gap-3">
<div className="bg-orange-600 w-10 h-10 rounded-full flex items-center justify-center font-serif text-lg text-white">E</div>
<div className="text-left">
<p className="text-xs font-semibold text-burgundy-800">Emm Nail Bar</p>
<p className="text-[10px] uppercase tracking-wide opacity-60">Las Vegas, NV</p>
</div>
</div>
</div>
</div>
</div>
<div className="h-24"></div> 
</section>

<section className="py-24 px-6" id="services">
<div className="max-w-5xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-element">
<div>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-2">Service Menu</h2>
<p className="font-serif text-4xl md:text-5xl italic text-orange-600">Nails &amp; Lashes</p>
</div>
<div className="mt-4 md:mt-0 text-right">
<p className="text-xs max-w-[200px] ml-auto mb-4 text-burgundy-800/60">Offering Acrylic, Dip, Gel, Waxing and Kids Services.</p>
<button className="text-[10px] uppercase font-semibold tracking-wider px-4 py-2 rounded-lg transition-colors bg-nude-200 hover:bg-nude-300">
                        Book Online
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">

<div className="reveal-element delay-100">
<div className="flex items-center gap-2 mb-6 opacity-60">
<svg className="lucide lucide-circle-dashed w-3 h-3" data-lucide="circle-dashed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.1 2.182a10 10 0 0 1 3.8 0"></path><path d="M13.9 21.818a10 10 0 0 1-3.8 0"></path><path d="M17.609 3.721a10 10 0 0 1 2.69 2.7"></path><path d="M2.182 13.9a10 10 0 0 1 0-3.8"></path><path d="M20.279 17.609a10 10 0 0 1-2.7 2.69"></path><path d="M21.818 10.1a10 10 0 0 1 0 3.8"></path><path d="M3.721 6.391a10 10 0 0 1 2.7-2.69"></path><path d="M6.391 20.279a10 10 0 0 1-2.69-2.7"></path></svg>
<span className="text-xs uppercase tracking-widest font-medium">Manicure &amp; Pedicure</span>
</div>
<ul className="space-y-4">
<li className="flex justify-between items-baseline border-b pb-2 group hover:pl-2 transition-all duration-300 cursor-default border-burgundy-800/10">
<span className="text-lg font-serif">Classic Manicure</span>
<span className="text-lg italic font-serif text-orange-600">$20+</span>
</li>
<li className="flex justify-between items-baseline border-b pb-2 group hover:pl-2 transition-all duration-300 cursor-default border-burgundy-800/10">
<span className="text-lg font-serif">Gel Manicure</span>
<span className="text-lg italic font-serif text-orange-600">$35+</span>
</li>
<li className="flex justify-between items-baseline border-b pb-2 group hover:pl-2 transition-all duration-300 cursor-default border-burgundy-800/10">
<span className="text-lg font-serif">Classic Pedicure</span>
<span className="text-lg italic font-serif text-orange-600">$30+</span>
</li>
<li className="flex justify-between items-baseline border-b pb-2 group hover:pl-2 transition-all duration-300 cursor-default border-burgundy-800/10">
<span className="text-lg font-serif">Deluxe Pedicure</span>
<span className="text-lg italic font-serif text-orange-600">$45+</span>
</li>
<li className="flex justify-between items-baseline border-b pb-2 group hover:pl-2 transition-all duration-300 cursor-default border-burgundy-800/10">
<span className="text-lg font-serif">Gel Pedicure</span>
<span className="text-lg italic font-serif text-orange-600">$50+</span>
</li>
</ul>
</div>

<div className="reveal-element delay-200">
<div className="flex items-center gap-2 mb-6 opacity-60">
<svg className="lucide lucide-sparkles w-3 h-3" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-xs uppercase tracking-widest font-medium">Enhancements</span>
</div>
<ul className="space-y-4">
<li className="flex justify-between items-baseline border-b pb-2 group hover:pl-2 transition-all duration-300 cursor-default border-burgundy-800/10">
<span className="text-lg font-serif">Acrylic Full Set</span>
<span className="text-lg italic font-serif text-orange-600">$50+</span>
</li>
<li className="flex justify-between items-baseline border-b pb-2 group hover:pl-2 transition-all duration-300 cursor-default border-burgundy-800/10">
<span className="text-lg font-serif">Acrylic Fill</span>
<span className="text-lg italic font-serif text-orange-600">$35+</span>
</li>
<li className="flex justify-between items-baseline border-b pb-2 group hover:pl-2 transition-all duration-300 cursor-default border-burgundy-800/10">
<span className="text-lg font-serif">Dip Powder</span>
<span className="text-lg italic font-serif text-orange-600">$45+</span>
</li>
<li className="flex justify-between items-baseline border-b pb-2 group hover:pl-2 transition-all duration-300 cursor-default border-burgundy-800/10">
<span className="text-lg font-serif">Pink &amp; White Set</span>
<span className="text-lg italic font-serif text-orange-600">$60+</span>
</li>
<li className="flex justify-between items-baseline border-b pb-2 group hover:pl-2 transition-all duration-300 cursor-default border-burgundy-800/10">
<span className="text-lg font-serif">Ombre Set</span>
<span className="text-lg italic font-serif text-orange-600">$65+</span>
</li>
</ul>
</div>

<div className="md:col-span-2 reveal-element delay-300">
<div className="flex items-center gap-2 mb-6 opacity-60 mt-4">
<svg className="lucide lucide-eye w-3 h-3" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-xs uppercase tracking-widest font-medium">Lash Extensions &amp; Waxing</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
<div className="flex justify-between items-baseline border-b pb-2 group hover:pl-2 transition-all duration-300 cursor-default border-burgundy-800/10">
<span className="text-lg font-serif">Classic Eyelash Set</span>
<span className="text-lg italic font-serif text-orange-600">$100+</span>
</div>
<div className="flex justify-between items-baseline border-b pb-2 group hover:pl-2 transition-all duration-300 cursor-default border-burgundy-800/10">
<span className="text-lg font-serif">Eyebrow Wax</span>
<span className="text-lg italic font-serif text-orange-600">$12+</span>
</div>
<div className="flex justify-between items-baseline border-b pb-2 group hover:pl-2 transition-all duration-300 cursor-default border-burgundy-800/10">
<span className="text-lg font-serif">Hybrid Eyelash Set</span>
<span className="text-lg italic font-serif text-orange-600">$120+</span>
</div>
<div className="flex justify-between items-baseline border-b pb-2 group hover:pl-2 transition-all duration-300 cursor-default border-burgundy-800/10">
<span className="text-lg font-serif">Lip Wax</span>
<span className="text-lg italic font-serif text-orange-600">$8+</span>
</div>
<div className="flex justify-between items-baseline border-b pb-2 group hover:pl-2 transition-all duration-300 cursor-default border-burgundy-800/10">
<span className="text-lg font-serif">Volume Eyelash Set</span>
<span className="text-lg italic font-serif text-orange-600">$140+</span>
</div>
<div className="flex justify-between items-baseline border-b pb-2 group hover:pl-2 transition-all duration-300 cursor-default border-burgundy-800/10">
<span className="text-lg font-serif">Full Face Wax</span>
<span className="text-lg italic font-serif text-orange-600">$40+</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-nude-200/20">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 reveal-element">
<div className="flex justify-center gap-4 mb-4">
<svg className="lucide lucide-message-circle w-6 h-6 text-orange-600" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<svg className="lucide lucide-thumbs-up w-6 h-6 text-orange-600 -mt-2" data-lucide="thumbs-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path><path d="M7 10v12"></path></svg>
<svg className="lucide lucide-heart w-6 h-6 text-orange-600" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight">Client <span className="italic text-orange-600 block md:inline">Reviews</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="flex flex-col gap-6 reveal-element delay-100">
<div className="p-8 rounded-2xl transition-all hover:shadow-lg bg-nude-200/50">
<svg className="lucide lucide-quote w-6 h-6 text-orange-600/40 mb-4 rotate-180" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-xl mb-4">"Best nail salon in Las Vegas! They pay such attention to detail with my dip powder nails. The lash service is also amazing."</p>
<p className="text-xs uppercase tracking-wider opacity-60">Sarah J.</p>
</div>
<div className="h-64 rounded-2xl overflow-hidden group">
<img alt="Manicure" className="hover:scale-110 transition-transform duration-[2000ms] w-full h-full object-cover" src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=1600&amp;q=80"/>
</div>
</div>

<div className="flex flex-col gap-6 reveal-element delay-300">
<div className="p-8 rounded-2xl transition-all hover:shadow-lg bg-nude-200/50">
<svg className="lucide lucide-quote w-6 h-6 text-orange-600/40 mb-4 rotate-180" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="font-serif text-xl mb-4">"Very clean and professional. I love my hybrid lashes, they look so natural yet full. Highly recommend Emm Nail Bar!"</p>
<p className="text-xs uppercase tracking-wider opacity-60">Michelle T.</p>
</div>
<div className="h-64 rounded-2xl overflow-hidden group">
<img alt="Lashes" className="hover:scale-110 transition-transform duration-[2000ms] w-full h-full object-cover" src="https://images.unsplash.com/photo-1761569105762-c54a69466d06?w=1600&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="relative h-[700px] flex items-center justify-center overflow-hidden my-24 group">
<div className="absolute inset-0 z-0">
<img alt="Dark moody lash and nail art" className="brightness-[0.4] w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[4000ms]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a8999d3b-1466-4c05-8d4f-bcb973d2970d_1600w.jpg"/>
</div>
<div className="relative z-10 text-center px-6 w-full max-w-4xl text-white">
<span className="text-xs uppercase tracking-[0.2em] mb-4 block reveal-element">Combo Packages</span>
<h2 className="font-serif text-5xl md:text-7xl mb-4 tracking-tight reveal-element delay-100">Nails &amp; Lashes<span className="italic font-light"> perfected</span></h2>
<p className="mb-8 max-w-lg mx-auto reveal-element delay-200 text-white/80">Book a full set of lashes and a gel manicure together for the ultimate makeover.</p>
<button className="px-8 py-3 rounded-full font-medium transition-colors mb-16 reveal-element delay-300 hover:scale-105 duration-300 bg-white text-burgundy-900 hover:bg-nude-200">
                Book Now
            </button>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-burgundy-900">
<div className="p-8 rounded-lg reveal-element delay-100 hover:-translate-y-2 transition-transform duration-500 bg-nude-100">
<svg className="lucide lucide-star w-5 h-5 mx-auto mb-4 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<h3 className="font-serif text-lg mb-1">Quality</h3>
<p className="text-[10px] uppercase opacity-60">Top-tier products</p>
</div>
<div className="p-8 rounded-lg reveal-element delay-200 hover:-translate-y-2 transition-transform duration-500 bg-nude-100">
<svg className="lucide lucide-shield-check w-5 h-5 mx-auto mb-4 stroke-[1.5]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<h3 className="font-serif text-lg mb-1">Sanitary</h3>
<p className="text-[10px] uppercase opacity-60">Hospital-grade clean</p>
</div>
<div className="p-8 rounded-lg reveal-element delay-300 hover:-translate-y-2 transition-transform duration-500 bg-nude-100">
<svg className="lucide lucide-heart w-5 h-5 mx-auto mb-4 stroke-[1.5]" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<h3 className="font-serif text-lg mb-1">Comfort</h3>
<p className="text-[10px] uppercase opacity-60">Relaxing atmosphere</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-nude-200/30" id="faq">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-4 reveal-element">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-2">Common</h2>
<p className="font-serif text-4xl md:text-5xl italic text-orange-600 mb-8">Questions</p>
<button className="text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-full transition-colors flex items-center gap-2 bg-nude-200 hover:bg-nude-300">
                    Contact Us <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="md:col-span-8 space-y-4">
<details className="group rounded-lg open:bg-white transition-colors duration-300 reveal-element delay-100 bg-nude-100">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
<span>How do I prepare for my lash appointment?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="p-6 pt-0 text-sm leading-relaxed animate-drift text-burgundy-800/70">
                        Please arrive with clean, makeup-free eyes. Avoid caffeine beforehand as it can cause fluttering eyelids, and remove contact lenses before your service.
                    </div>
</details>
<details className="group rounded-lg open:bg-white transition-colors duration-300 reveal-element delay-200 bg-nude-100">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
<span className="">What is the difference between Dip and Acrylic?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="p-6 pt-0 text-sm leading-relaxed animate-drift text-burgundy-800/70">
                        Dip powder is generally considered lighter on the nail and doesn't require UV light, whereas Acrylic is harder and more durable for lengthening. Both provide long-lasting results.
                    </div>
</details>
<details className="group rounded-lg open:bg-white transition-colors duration-300 reveal-element delay-300 bg-nude-100">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
<span>Do you accept walk-ins?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="p-6 pt-0 text-sm leading-relaxed animate-drift text-burgundy-800/70">
                        We welcome walk-ins when availability permits! However, we highly recommend booking an appointment, especially for lash services and intricate nail art.
                    </div>
</details>
<details className="group rounded-lg open:bg-white transition-colors duration-300 reveal-element delay-400 bg-nude-100">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
<span>Do you offer services for children?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="p-6 pt-0 text-sm leading-relaxed animate-drift text-burgundy-800/70">
                        Yes, we have a special menu for kids, including "Princess Manicures" and pedicures designed for our younger guests.
                    </div>
</details>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-2xl mx-auto text-center mb-12 reveal-element">
<div className="flex justify-center gap-6 mb-4 text-orange-600 opacity-60">
<svg className="lucide lucide-map-pin w-6 h-6 -rotate-12 animate-bounce duration-[3000ms]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<svg className="lucide lucide-crown w-8 h-8 -mt-4 animate-pulse" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
<svg className="lucide lucide-sparkles w-6 h-6 rotate-12" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-2">Visit our</h2>
<p className="font-serif text-4xl md:text-5xl italic text-orange-600">Las Vegas Studio</p>
</div>
<div className="max-w-xl mx-auto p-8 md:p-12 rounded-2xl reveal-element delay-100 bg-nude-200/50">
<h3 className="font-serif text-xl mb-6">Send us a message</h3>
<form className="space-y-4">
<div className="">
<label className="block text-xs uppercase tracking-wide opacity-60 mb-1">Full Name</label>
<input className="w-full border border-transparent focus:border-orange-600 focus:ring-0 rounded-md p-3 text-sm transition-all outline-none bg-nude-100" placeholder="Enter your name" type="text"/>
</div>
<div className="">
<label className="block text-xs uppercase tracking-wide opacity-60 mb-1">Email</label>
<input className="w-full border border-transparent focus:border-orange-600 focus:ring-0 rounded-md p-3 text-sm transition-all outline-none bg-nude-100" placeholder="Enter your email" type="email"/>
</div>
<div className="">
<label className="block text-xs uppercase tracking-wide opacity-60 mb-1">Service Interest</label>
<select className="focus:border-orange-600 focus:ring-0 transition-all outline-none text-sm w-full border-transparent border rounded-md pt-3 pr-3 pb-3 pl-3 text-burgundy-800/70">
<option>Select Service...</option>
<option>Manicure / Pedicure</option>
<option>Lash Extensions</option>
<option>Waxing</option>
<option>Group Booking</option>
</select>
</div>
<div className="">
<label className="block text-xs uppercase tracking-wide opacity-60 mb-1">Message</label>
<textarea autocomplete="off" className="focus:border-orange-600 focus:ring-0 transition-all outline-none resize-none text-sm w-full border-transparent border rounded-md pt-3 pr-3 pb-3 pl-3" placeholder="How can we help?" rows="4" spellcheck="false"></textarea>
</div>
<button className="w-full bg-orange-600 font-medium text-sm py-3 rounded-md transition-colors mt-2 text-white hover:bg-burgundy-800">
                    Send Message
                </button>
</form>
</div>

<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
<div className="p-4 rounded-lg flex justify-between items-center reveal-element delay-100 border hover:-translate-y-1 transition-transform bg-nude-200/30 border-burgundy-800/5">
<div>
<h4 className="font-serif text-lg">Call Us</h4>
<p className="text-[10px] uppercase opacity-60">(702) 823-3866</p>
</div>
<svg className="lucide lucide-phone w-4 h-4 opacity-40" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div className="p-4 rounded-lg flex justify-between items-center reveal-element delay-200 border hover:-translate-y-1 transition-transform bg-nude-200/30 border-burgundy-800/5">
<div className="">
<h4 className="font-serif text-lg">Visit Us</h4>
<p className="text-[10px] uppercase opacity-60">6030 W Windmill Ln</p>
</div>
<svg className="lucide lucide-map-pin w-4 h-4 opacity-40" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div className="p-4 rounded-lg flex justify-between items-center reveal-element delay-300 border hover:-translate-y-1 transition-transform bg-nude-200/30 border-burgundy-800/5">
<div>
<h4 className="font-serif text-lg">Email Us</h4>
<p className="text-[10px] uppercase opacity-60">info@emmnailbar.com</p>
</div>
<svg className="lucide lucide-mail w-4 h-4 opacity-40" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
</div>
</section>

<footer className="py-16 px-6 bg-burgundy-900 text-nude-100">
<div className="max-w-7xl mx-auto rounded-2xl overflow-hidden bg-burgundy-900">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<svg className="lucide lucide-sparkles w-5 h-5 text-orange-600" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="font-serif text-xl font-medium tracking-tight">Emm Nail Bar &amp; Lash</span>
</div>
<p className="text-xs leading-relaxed max-w-xs mb-8 text-white/60">
                        Las Vegas' premier destination for nail art, enhancements, and lash extensions. Dedicated to hygiene, quality, and your relaxation.
                    </p>
<div className="text-xs space-y-2 text-white/60">
<p>(702) 823-3866</p>
<p>6030 W Windmill Ln #B</p>
<p>Las Vegas, NV 89139</p>
</div>
<div className="mt-8">
<p className="text-[10px] uppercase tracking-widest mb-2 text-white/40">We're Open:</p>
<p className="text-xs text-white/80">Mon - Sat: 9:30AM - 7:00PM</p>
<p className="text-xs text-white/80">Sunday: 10:00AM - 5:00PM</p>
</div>
</div>
<div className="">
<h4 className="text-sm font-medium mb-6">Menu</h4>
<ul className="space-y-3 text-sm text-white/60">
<li className=""><a className="transition-colors hover:text-stone-500" href="#">Services</a></li>
<li className=""><a className="transition-colors hover:text-stone-500" href="#">Book Online</a></li>
<li className=""><a className="transition-colors hover:text-stone-500" href="#">Gallery</a></li>
<li className=""><a className="transition-colors hover:text-stone-500" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium mb-6">Connect</h4>
<ul className="space-y-3 text-sm text-white/60">
<li><a className="transition-colors hover:text-stone-500" href="#">Instagram</a></li>
<li><a className="transition-colors hover:text-stone-500" href="#">Facebook</a></li>
<li><a className="transition-colors hover:text-stone-500" href="#">Yelp Reviews</a></li>
<li><a className="transition-colors hover:text-stone-500" href="#">Google Maps</a></li>
</ul>
</div>
</div>
<div className="border-t mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] border-white/10 text-white/40">
<p>© 2024 Emm Nail Bar &amp; Lash. All rights reserved.</p>
<p>Designed with Care.</p>
</div>
</div>
</footer>



    </>
  );
}
