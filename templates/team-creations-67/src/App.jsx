import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
gold: '#f59e0b', // Amber 500
orange: '#ea580c', // Orange 600
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // ===== PRELOADER =====
        window.addEventListener('load', function() {
            setTimeout(() => {
                const preloader = document.getElementById('preloader');
                preloader.style.opacity = '0';
                setTimeout(() => preloader.style.display = 'none', 500);
            }, 2500);
        });

        // ===== CUSTOM CURSOR =====
        const cursor = document.getElementById('cursor');
        const cursorDot = document.getElementById('cursorDot');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            cursorDot.style.left = e.clientX + 'px';
            cursorDot.style.top = e.clientY + 'px';
        });

        document.querySelectorAll('a, button, input, textarea, select').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursor.style.borderColor = '#ffffff';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.borderColor = '#f59e0b';
            });
        });

        // ===== NAVBAR SCROLL =====
        const navbar = document.getElementById('navbar');
        const backTop = document.getElementById('backTop');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                navbar.classList.add('bg-black/80', 'backdrop-blur-md', 'border-b', 'border-white/10');
            } else {
                navbar.classList.remove('bg-black/80', 'backdrop-blur-md', 'border-b', 'border-white/10');
            }

            if (window.scrollY > 500) {
                backTop.classList.remove('opacity-0', 'invisible');
                backTop.classList.add('opacity-100', 'visible');
            } else {
                backTop.classList.add('opacity-0', 'invisible');
                backTop.classList.remove('opacity-100', 'visible');
            }
        });

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // ===== MOBILE MENU =====
        function openMobileMenu() {
            document.getElementById('mobileMenu').classList.remove('-right-full');
            document.getElementById('mobileMenu').classList.add('right-0');
            document.getElementById('mobileOverlay').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeMobileMenu() {
            document.getElementById('mobileMenu').classList.add('-right-full');
            document.getElementById('mobileMenu').classList.remove('right-0');
            document.getElementById('mobileOverlay').classList.add('hidden');
            document.body.style.overflow = '';
        }

        // ===== VIDEO MODAL =====
        function openVideoModal() {
            const modal = document.getElementById('videoModal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden';
        }

        function closeVideoModal() {
            const modal = document.getElementById('videoModal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = '';
            const video = document.getElementById('modalVideo');
            video.pause();
            video.currentTime = 0;
        }

        // ===== SCROLL REVEAL =====
        const reveals = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        reveals.forEach(el => revealObserver.observe(el));

        // ===== COUNTER ANIMATION =====
        const counters = document.querySelectorAll('.stat-num');
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.dataset.target);
                    let count = 0;
                    const step = target / 60;
                    const timer = setInterval(() => {
                        count += step;
                        if (count >= target) {
                            count = target;
                            clearInterval(timer);
                        }
                        el.textContent = Math.floor(count) + '+';
                    }, 30);
                    counterObserver.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(c => counterObserver.observe(c));

        // ===== FORM SUBMIT =====
        function submitForm(e) {
            e.preventDefault();
            const btn = e.target.querySelector('.submit-btn');
            const originalContent = btn.innerHTML;
            btn.innerHTML = '<iconify-icon icon="solar:check-circle-linear" stroke-width="1.5"></iconify-icon> Inquiry Sent!';
            btn.classList.replace('bg-white', 'bg-green-500');
            btn.classList.replace('text-black', 'text-white');
            setTimeout(() => {
                btn.innerHTML = originalContent;
                btn.classList.replace('bg-green-500', 'bg-white');
                btn.classList.replace('text-white', 'text-black');
                e.target.reset();
            }, 3000);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center transition-opacity duration-500" id="preloader" style={{display: 'none'}}>
<div className="text-4xl font-semibold tracking-tighter text-gold mb-6 animate-pulse">TC</div>
<div className="w-48 h-px bg-white/10 overflow-hidden relative">
<div className="absolute top-0 left-0 h-full bg-gradient-to-r from-gold animate-[pulse_2s_ease-in-out_infinite] to-slate" style={{width: '100%'}}></div>
</div>
</div>

<div className="fixed w-5 h-5 border border-gold rounded-full pointer-events-none z-[9998] transition-transform duration-100 ease-out" id="cursor" style={{transform: 'translate(-50%, -50%)'}}></div>
<div className="fixed w-1.5 h-1.5 bg-gold rounded-full pointer-events-none z-[9998]" id="cursorDot" style={{transform: 'translate(-50%, -50%)'}}></div>

<div className="fixed inset-0 bg-black/95 z-[10000] hidden items-center justify-center backdrop-blur-sm transition-opacity" id="videoModal">
<div className="relative w-[90%] max-w-5xl">
<button className="absolute -top-12 right-0 text-gold hover:text-white transition-colors" onclick="closeVideoModal()">
<iconify-icon className="text-3xl" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<video className="w-full aspect-video rounded-xl border border-white/10 bg-slate-950" controls="" id="modalVideo">
<source src="" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
</div>
</div>

<div className="fixed inset-0 bg-black/80 z-[1000] hidden backdrop-blur-sm" id="mobileOverlay" onclick="closeMobileMenu()"></div>

<div className="fixed top-0 -right-full w-4/5 max-w-sm h-screen border-l border-white/10 z-[1001] p-8 pt-24 transition-all duration-500 overflow-y-auto bg-slate-950" id="mobileMenu">
<ul className="flex flex-col gap-6">
<li><a className="text-sm font-medium hover:text-white transition-colors text-slate-400" href="#home" onclick="closeMobileMenu()">Home</a></li>
<li><a className="text-sm font-medium hover:text-white transition-colors text-slate-400" href="#about" onclick="closeMobileMenu()">About</a></li>
<li><a className="text-sm font-medium hover:text-white transition-colors text-slate-400" href="#services" onclick="closeMobileMenu()">Services</a></li>
<li><a className="text-sm font-medium hover:text-white transition-colors text-slate-400" href="#exhibition" onclick="closeMobileMenu()">Exhibition</a></li>
<li><a className="text-sm font-medium hover:text-white transition-colors text-slate-400" href="#conference" onclick="closeMobileMenu()">Conference</a></li>
<li><a className="text-sm font-medium hover:text-white transition-colors text-slate-400" href="#live-shows" onclick="closeMobileMenu()">Live Shows</a></li>
<li><a className="text-sm font-medium hover:text-white transition-colors text-slate-400" href="#corporate" onclick="closeMobileMenu()">Corporate Parties</a></li>
<li><a className="text-sm font-medium hover:text-white transition-colors text-slate-400" href="#equipment" onclick="closeMobileMenu()">AV Equipment</a></li>
<li><a className="text-sm font-medium hover:text-white transition-colors text-slate-400" href="#structures" onclick="closeMobileMenu()">Structures</a></li>
<li><a className="text-sm font-medium hover:text-white transition-colors text-slate-400" href="#venue" onclick="closeMobileMenu()">Venue Sourcing</a></li>
<li><a className="text-sm font-medium hover:text-white transition-colors text-slate-400" href="#licences" onclick="closeMobileMenu()">Licences</a></li>
<li><a className="text-sm font-medium hover:text-white transition-colors text-slate-400" href="#gallery" onclick="closeMobileMenu()">Gallery</a></li>
<li><a className="text-sm font-medium text-gold transition-colors hover:text-cyan-400" href="#contact" onclick="closeMobileMenu()">Contact</a></li>
</ul>
</div>

<nav className="fixed top-0 left-0 w-full z-[1000] px-6 py-4 flex items-center justify-between transition-all duration-300" id="navbar">
<a className="flex items-center gap-2 group" href="#home">
<div className="font-semibold tracking-tighter text-lg uppercase flex items-center gap-2">
<span className="text-gold">TC</span>
<span className="group-hover:text-white transition-colors text-slate-300">TEAM CREATIONS</span>
</div>
</a>
<ul className="hidden md:flex items-center gap-8">
<li><a className="text-xs font-medium hover:text-white transition-colors tracking-wide text-slate-400" href="#home">Home</a></li>
<li><a className="text-xs font-medium hover:text-white transition-colors tracking-wide text-slate-400" href="#about">About</a></li>
<li className="relative group">
<a className="text-xs font-medium hover:text-white transition-colors tracking-wide flex items-center gap-1 text-slate-400" href="#services">
                    Services 
                    <iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</a>
<ul className="absolute top-full left-1/2 -translate-x-1/2 mt-4 border border-white/10 rounded-xl min-w-[220px] py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 backdrop-blur-xl bg-slate-950">
<li><a className="block px-4 py-2 text-xs hover:text-gold hover:bg-white/5 transition-all text-slate-400" href="#exhibition">Exhibition</a></li>
<li><a className="block px-4 py-2 text-xs hover:text-gold hover:bg-white/5 transition-all text-slate-400" href="#conference">Conference</a></li>
<li><a className="block px-4 py-2 text-xs hover:text-gold hover:bg-white/5 transition-all text-slate-400" href="#live-shows">Live Shows</a></li>
<li><a className="block px-4 py-2 text-xs hover:text-gold hover:bg-white/5 transition-all text-slate-400" href="#corporate">Corporate Parties</a></li>
<li><a className="block px-4 py-2 text-xs hover:text-gold hover:bg-white/5 transition-all text-slate-400" href="#branding">Venue Branding</a></li>
</ul>
</li>
<li><a className="text-xs font-medium hover:text-white transition-colors tracking-wide text-slate-400" href="#gallery">Gallery</a></li>
<li><a className="bg-white text-black px-4 py-2 rounded-full text-xs font-semibold transition-colors hover:bg-slate-200" href="#contact">Get Quote</a></li>
</ul>
<div className="md:hidden flex flex-col gap-1.5 cursor-pointer z-[1001]" onclick="openMobileMenu()">
<span className="w-6 h-0.5 bg-slate-400"></span>
<span className="w-6 h-0.5 bg-slate-400"></span>
<span className="w-6 h-0.5 bg-slate-400"></span>
</div>
</nav>

<section className="relative h-screen flex items-center justify-center overflow-hidden" id="home">
<div className="absolute inset-0 z-0 bg-slate-950">

<video autoplay="" className="w-full h-full object-cover opacity-30 mix-blend-screen" loop="" muted="" playsinline="">
<source src="" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black pointer-events-none"></div>
</div>
<div className="relative z-10 text-center max-w-5xl px-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-medium mb-8">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold"></span>
</span>
                India's Premier Event Management
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white leading-[1.1] mb-8">
                We create <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-500">unforgettable</span> <br/>
                experiences.
            </h1>
<p className="text-sm md:text-base font-normal mb-12 tracking-wide text-slate-400">
                Exhibitions · Conferences · Live Shows · Corporate Events
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-white text-black px-6 py-3 rounded-full text-xs font-semibold transition-colors flex items-center justify-center gap-2 hover:bg-slate-200" href="#contact">
<iconify-icon className="text-sm" icon="solar:plain-linear" strokeWidth="1.5"></iconify-icon>
                    Get A Free Quote
                </a>
<a className="w-full sm:w-auto bg-transparent border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-full text-xs font-medium transition-colors flex items-center justify-center gap-2" href="#video-showcase" onclick="openVideoModal()">
<iconify-icon className="text-sm" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Watch Showreel
                </a>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 animate-bounce">
<span className="text-[10px] tracking-widest uppercase text-slate-500">Scroll</span>
<div className="w-px h-8 bg-gradient-to-b to-transparent from-slate-500"></div>
</div>
</section>

<div className="border-y border-white/5 pt-12 pr-6 pb-12 pl-6 backdrop-blur-md bg-slate-950/50">
<div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12 md:gap-24">
<div className="text-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tight text-white stat-num" data-target="500">0+</div>
<div className="text-[10px] tracking-widest uppercase mt-2 text-slate-500">Events Delivered</div>
</div>
<div className="text-center">
<div className="md:text-5xl stat-num text-4xl font-semibold text-white tracking-tight" data-target="15">20+</div>
<div className="text-[10px] tracking-widest uppercase mt-2 text-slate-500">Years Experience</div>
</div>
<div className="text-center">
<div className="md:text-5xl stat-num text-4xl font-semibold text-white tracking-tight" data-target="200">1000+</div>
<div className="text-[10px] tracking-widest uppercase mt-2 text-slate-500">Happy Clients</div>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tight text-white stat-num" data-target="50">0+</div>
<div className="text-[10px] tracking-widest uppercase mt-2 text-slate-500">Cities Covered</div>
</div>
</div>
</div>

<section className="md:py-32 border-white/5 border-b pt-24 pr-6 pb-24 pl-6" id="about">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="reveal transition-all duration-700 relative">
<div className="aspect-square rounded-3xl border border-white/10 flex items-center justify-center relative overflow-hidden bg-slate-950">
<div className="bg-gradient-to-tr from-gold/10 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<iconify-icon className="text-8xl text-white/5" icon="solar:star-linear" strokeWidth="1"></iconify-icon>
</div>
<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-full flex flex-col items-center justify-center text-black border border-white/10 shadow-2xl">
<span className="text-3xl font-semibold tracking-tight">20+</span>
<span className="text-[10px] tracking-widest uppercase mt-1 text-center px-4 text-slate-600">Years of Excellence</span>
</div>
</div>
<div className="reveal transition-all duration-700 delay-100">
<div className="text-xs font-medium text-gold tracking-wide mb-4 flex items-center gap-4">
<span className="w-8 h-px bg-gold/50"></span> About Us
                </div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
                    We don't just plan events, <br/>
<span className="text-slate-500">we create memories.</span>
</h2>
<p className="text-sm leading-relaxed mb-6 text-slate-400">
                    Team Creations is a full-service event management company with over 15 years of experience delivering world-class events across India. From intimate corporate gatherings to grand-scale exhibitions, we bring vision to life.
                </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-gold" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> End-to-End Management
                    </div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-gold" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> In-House AV Equipment
                    </div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-gold" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> German Hanger &amp; Truss
                    </div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-gold" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> 24/7 Dedicated Support
                    </div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-gold" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Government Licences
                    </div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-gold" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Pan India Coverage
                    </div>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-gold transition-colors" href="#contact">
                    Explore Services <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="services">
<div className="reveal transition-all duration-700 text-center mb-16">
<div className="text-xs font-medium text-gold tracking-wide mb-4 flex items-center justify-center gap-4">
<span className="w-8 h-px bg-gold/50"></span> What We Do <span className="w-8 h-px bg-gold/50"></span>
</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Our Services</h2>
<p className="text-sm max-w-2xl mx-auto text-slate-400">From concept to completion, we offer comprehensive event solutions tailored to your vision.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10 reveal transition-all duration-700 delay-100">
<a className="group relative bg-black p-8 transition-colors hover:bg-slate-900" href="#exhibition">
<iconify-icon className="text-2xl group-hover:text-gold transition-colors mb-6 block text-slate-500" icon="solar:widget-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight text-white mb-2">Exhibition</h3>
<p className="text-xs leading-relaxed text-slate-400">World-class exhibition setups with custom stalls, lighting, and production.</p>
<div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity text-gold">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</a>
<a className="group relative bg-black p-8 transition-colors hover:bg-slate-900" href="#conference">
<iconify-icon className="text-2xl group-hover:text-gold transition-colors mb-6 block text-slate-500" icon="solar:microphone-3-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight text-white mb-2">Conference</h3>
<p className="text-xs leading-relaxed text-slate-400">Professional conference setups with state-of-the-art AV and stage design.</p>
<div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity text-gold">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</a>
<a className="group relative bg-black p-8 transition-colors hover:bg-slate-900" href="#live-shows">
<iconify-icon className="text-2xl group-hover:text-gold transition-colors mb-6 block text-slate-500" icon="solar:music-notes-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight text-white mb-2">Live Shows</h3>
<p className="text-xs leading-relaxed text-slate-400">Concert-grade production, staging, lighting design, and sound management.</p>
<div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity text-gold">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</a>
<a className="group relative bg-black p-8 transition-colors hover:bg-slate-900" href="#corporate">
<iconify-icon className="text-2xl group-hover:text-gold transition-colors mb-6 block text-slate-500" icon="solar:glass-water-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight text-white mb-2">Corporate Parties</h3>
<p className="text-xs leading-relaxed text-slate-400">Sophisticated celebrations with premium décor and seamless execution.</p>
<div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity text-gold">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</a>
<a className="group relative bg-black p-8 transition-colors hover:bg-slate-900" href="#branding">
<iconify-icon className="text-2xl group-hover:text-gold transition-colors mb-6 block text-slate-500" icon="solar:pen-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight text-white mb-2">Venue Branding</h3>
<p className="text-xs leading-relaxed text-slate-400">Complete venue transformation with brand-aligned design and signage.</p>
<div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity text-gold">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</a>
<a className="group relative bg-black p-8 transition-colors hover:bg-slate-900" href="#equipment">
<iconify-icon className="text-2xl group-hover:text-gold transition-colors mb-6 block text-slate-500" icon="solar:radar-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight text-white mb-2">AV Equipment</h3>
<p className="text-xs leading-relaxed text-slate-400">Professional LED walls, sound systems, lighting rigs, projectors on rent.</p>
<div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity text-gold">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</a>
<a className="group relative bg-black p-8 transition-colors hover:bg-slate-900" href="#structures">
<iconify-icon className="text-2xl group-hover:text-gold transition-colors mb-6 block text-slate-500" icon="solar:buildings-2-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight text-white mb-2">German Hanger</h3>
<p className="text-xs leading-relaxed text-slate-400">Premium German hangers and super struter truss systems on rent.</p>
<div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity text-gold">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</a>
<a className="group relative bg-black p-8 transition-colors hover:bg-slate-900" href="#licences">
<iconify-icon className="text-2xl group-hover:text-gold transition-colors mb-6 block text-slate-500" icon="solar:diploma-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight text-white mb-2">Licences</h3>
<p className="text-xs leading-relaxed text-slate-400">Hassle-free government permissions, NOCs, and sound licences.</p>
<div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity text-gold">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</a>
</div>
</section>

<section className="relative py-32 border-y border-white/5 overflow-hidden bg-slate-950" id="video-showcase">
<div className="absolute inset-0 opacity-20">
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="">
<source src="" type="video/mp4"/>
</video>
</div>
<div className="flex flex-col z-10 text-center max-w-3xl mr-auto ml-auto pr-6 pl-6 relative items-center justify-center">
<button className="w-20 h-20 rounded-full border border-white/20 hover:border-white hover:bg-white/5 flex items-center justify-center text-white transition-all mb-8 group" onclick="openVideoModal()">
<iconify-icon className="group-hover:scale-110 transition-transform text-2xl ml-1" height="24" icon="solar:play-linear" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon>
</button>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">Watch Our Showreel</h2>
<p className="text-sm text-slate-400">See the magic we create at every event</p>
</div>
</section>

<div className="max-w-7xl mx-auto px-6 divide-y divide-white/5">

<section className="py-24 reveal transition-all duration-700" id="exhibition">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="border border-white/10 rounded-3xl aspect-[4/3] flex items-center justify-center relative overflow-hidden group bg-slate-950">
<iconify-icon className="text-6xl text-white/5 group-hover:scale-110 transition-transform duration-700" icon="solar:widget-linear" strokeWidth="1"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-gold tracking-wide mb-4">Service 01</div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Exhibitions That Speak</h3>
<p className="text-sm leading-relaxed mb-6 text-slate-400">From trade fairs to product launches, we design and execute exhibitions that create lasting impressions. Our team handles every detail from stall fabrication to visitor experience.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-300"><iconify-icon className="text-gold" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Custom Stall Design</li>
<li className="flex items-center gap-3 text-sm text-slate-300"><iconify-icon className="text-gold" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Expo Management</li>
<li className="flex items-center gap-3 text-sm text-slate-300"><iconify-icon className="text-gold" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Brand Activation</li>
</ul>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-gold transition-colors" href="#contact">
                        Plan Exhibition <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 reveal transition-all duration-700" id="conference">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<div className="text-xs font-medium text-gold tracking-wide mb-4">Service 02</div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Conferences That Inspire</h3>
<p className="text-sm leading-relaxed mb-8 text-slate-400">We deliver seamless conference experiences from small boardroom meetings to large-scale summits. Flawless audio-visual delivery, stage design, and event coordination.</p>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="p-4 border border-white/10 rounded-2xl bg-slate-950">
<iconify-icon className="text-gold text-xl mb-2" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-xs font-semibold text-white">Corporate Summits</div>
</div>
<div className="p-4 border border-white/10 rounded-2xl bg-slate-950">
<iconify-icon className="text-gold text-xl mb-2" icon="solar:presentation-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-xs font-semibold text-white">Seminars</div>
</div>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-gold transition-colors" href="#contact">
                        Plan Conference <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="order-1 md:order-2 aspect-[4/3] flex overflow-hidden group bg-slate-950 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c98deba1-da0f-461b-a66c-90783c387f15_800w.jpg)] bg-cover bg-center border-white/10 border rounded-3xl relative items-center justify-center">
<iconify-icon className="text-6xl text-white/5 group-hover:scale-110 transition-transform duration-700" icon="solar:microphone-3-linear" strokeWidth="1"></iconify-icon>
</div>
</div>
</section>
</div>

<section className="py-24 border-y border-white/5 bg-slate-950" id="equipment">
<div className="max-w-7xl mx-auto px-6">
<div className="reveal transition-all duration-700 text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">Equipment &amp; Structures</h2>
<p className="text-sm max-w-2xl mx-auto text-slate-400">State-of-the-art rentals for comprehensive event infrastructure.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal transition-all duration-700 delay-100">

<div className="bg-black border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-colors group">
<iconify-icon className="text-2xl text-gold mb-4 block" icon="solar:tv-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold text-white mb-2">LED Video Walls</h3>
<p className="text-xs mb-4 text-slate-400">High-resolution indoor &amp; outdoor displays.</p>
<span className="text-[10px] tracking-widest uppercase font-medium text-slate-500">Available On Rent</span>
</div>

<div className="bg-black border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-colors group">
<iconify-icon className="text-2xl text-gold mb-4 block" icon="solar:volume-loud-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold text-white mb-2">Sound Systems</h3>
<p className="text-xs mb-4 text-slate-400">Concert-grade line array PA systems.</p>
<span className="text-[10px] tracking-widest uppercase font-medium text-slate-500">Available On Rent</span>
</div>

<div className="bg-black border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-colors group">
<iconify-icon className="text-2xl text-gold mb-4 block" icon="solar:lightbulb-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold text-white mb-2">Stage Lighting</h3>
<p className="text-xs mb-4 text-slate-400">Intelligent fixtures and DMX controllers.</p>
<span className="text-[10px] tracking-widest uppercase font-medium text-slate-500">Available On Rent</span>
</div>

<div className="bg-black border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-colors group">
<iconify-icon className="text-2xl text-gold mb-4 block" icon="solar:buildings-2-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold text-white mb-2">German Hanger</h3>
<p className="text-xs mb-4 text-slate-400">Weatherproof structures up to 40m span.</p>
<span className="text-[10px] tracking-widest uppercase font-medium text-slate-500">Available On Rent</span>
</div>

<div className="bg-black border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-colors group">
<iconify-icon className="text-2xl text-gold mb-4 block" icon="solar:share-circle-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold text-white mb-2">Super Struter</h3>
<p className="text-xs mb-4 text-slate-400">Heavy-duty truss systems for rigging.</p>
<span className="text-[10px] tracking-widest uppercase font-medium text-slate-500">Available On Rent</span>
</div>

<div className="bg-black border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-colors group">
<iconify-icon className="text-2xl text-gold mb-4 block" icon="solar:videocamera-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold text-white mb-2">Live Streaming Setup</h3>
<p className="text-xs mb-4 text-slate-400">Multi-camera broadcast production.</p>
<span className="text-[10px] tracking-widest uppercase font-medium text-slate-500">Available On Rent</span>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="licences">
<div className="grid md:grid-cols-2 gap-16 items-center reveal transition-all duration-700">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Government &amp; Sound Licences</h2>
<p className="text-sm leading-relaxed mb-8 text-slate-400">Navigating government permissions can be complex. Our experienced team handles all licences, NOCs, and government permissions — ensuring fast and hassle-free processing.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-gold transition-colors" href="#contact">
                    Consult Us <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-6 border border-white/10 rounded-2xl flex flex-col items-start gap-4 bg-slate-950">
<iconify-icon className="text-2xl text-slate-400" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-white">Police NOC</h4>
<p className="text-xs mt-1 text-slate-500">For public events</p>
</div>
</div>
<div className="p-6 border border-white/10 rounded-2xl flex flex-col items-start gap-4 bg-slate-950">
<iconify-icon className="text-2xl text-slate-400" icon="solar:volume-loud-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-white">Sound Licence</h4>
<p className="text-xs mt-1 text-slate-500">Day &amp; night permits</p>
</div>
</div>
<div className="p-6 border border-white/10 rounded-2xl flex flex-col items-start gap-4 bg-slate-950">
<iconify-icon className="text-2xl text-slate-400" icon="solar:fire-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-white">Fire NOC</h4>
<p className="text-xs mt-1 text-slate-500">Safety compliance</p>
</div>
</div>
<div className="p-6 border border-white/10 rounded-2xl flex flex-col items-start gap-4 bg-slate-950">
<iconify-icon className="text-2xl text-slate-400" icon="solar:music-notes-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-white">Music Licence</h4>
<p className="text-xs mt-1 text-slate-500">IPRS &amp; PPL clearances</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-slate-950" id="process">
<div className="max-w-7xl mx-auto px-6 reveal transition-all duration-700">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-16 text-center">Our Process</h2>
<div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center relative">

<div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-white/10"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center text-xs font-semibold text-white mb-4">01</div>
<h4 className="text-xs font-semibold text-white mb-2">Consultation</h4>
</div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center text-xs font-semibold text-white mb-4">02</div>
<h4 className="text-xs font-semibold text-white mb-2">Design</h4>
</div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center text-xs font-semibold text-white mb-4">03</div>
<h4 className="text-xs font-semibold text-white mb-2">Planning</h4>
</div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center text-xs font-semibold text-white mb-4">04</div>
<h4 className="text-xs font-semibold text-white mb-2">Production</h4>
</div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center text-xs font-semibold text-white mb-4">05</div>
<h4 className="text-xs font-semibold text-white mb-2">Execution</h4>
</div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center text-xs font-semibold text-white mb-4">06</div>
<h4 className="text-xs font-semibold text-white mb-2">Wrap Up</h4>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="contact">
<div className="grid lg:grid-cols-5 gap-16 reveal transition-all duration-700">
<div className="lg:col-span-2">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Let's Connect</h2>
<p className="text-sm mb-10 text-slate-400">Ready to plan your event? Reach out and our team will get back to you within 24 hours.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<iconify-icon className="text-xl text-slate-500" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<div className="">
<h5 className="text-xs font-semibold text-white mb-1">Office Address</h5>
<p className="leading-relaxed text-xs cursor-pointer text-slate-400" onclick="window.location.href='https://maps.app.goo.gl/zGPMwSjaHNy3xYXd7'" role="button">C/124, Shreyas Industrial Estate Shri Ram Mandir Lane, Near, Jay Coach Flyover, behind Silver Metropolis, NESCO, Goregaon East, Mumbai, Maharashtra 400063</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-xl text-slate-500" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
<div className="">
<h5 className="text-xs font-semibold text-white mb-1">Phone</h5>
<p className="leading-relaxed text-xs text-slate-400 cursor-pointer" onclick="window.location.href='https://wa.me/qr/SWZK3PGEPFGKC1'" role="button">+91 9136090815 / +91 9004363499 / +91 8898804777</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-xl text-slate-500" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<div className="">
<h5 className="text-xs font-semibold text-white mb-1">Email</h5>
<p className="leading-relaxed text-xs text-slate-400">teamcreationsnesco.com</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-3">
<div className="border border-white/10 rounded-3xl p-8 bg-slate-950">
<h3 className="text-xl font-semibold text-white mb-8">Request A Quote</h3>
<form className="space-y-6" onsubmit="submitForm(event)">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="">
<label className="block text-[10px] tracking-widest uppercase mb-2 text-slate-500">Your Name</label>
<input className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-white focus:outline-none transition-colors placeholder:text-slate-600" required="" type="text"/>
</div>
<div>
<label className="block text-[10px] tracking-widest uppercase mb-2 text-slate-500">Company</label>
<input className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-white focus:outline-none transition-colors placeholder:text-slate-600" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="">
<label className="block text-[10px] tracking-widest uppercase mb-2 text-slate-500">Phone</label>
<input className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-white focus:outline-none transition-colors placeholder:text-slate-600" required="" type="tel"/>
</div>
<div>
<label className="block text-[10px] tracking-widest uppercase mb-2 text-slate-500">Email</label>
<input className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-white focus:outline-none transition-colors placeholder:text-slate-600" required="" type="email"/>
</div>
</div>
<div className="">
<label className="block text-[10px] tracking-widest uppercase mb-2 text-slate-500">Message</label>
<textarea className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-white focus:outline-none transition-colors resize-none placeholder:text-slate-600" rows="4"></textarea>
</div>
<button className="submit-btn w-full bg-white text-black py-3 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2 hover:bg-slate-200" type="submit">
<iconify-icon icon="solar:plain-linear" strokeWidth="1.5"></iconify-icon>
                            Send Inquiry
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 pt-20 pb-10 bg-slate-950">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<div className="uppercase flex text-lg font-semibold tracking-tighter mb-6 gap-x-2 gap-y-2 items-center">TEAM CREATIONS </div>
<p className="text-xs leading-relaxed mb-6 text-slate-400">India's premier event management company delivering extraordinary experiences for exhibitions, conferences, live shows, and corporate events.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors text-slate-500" href="#"><iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors text-slate-500" href="#"><iconify-icon className="text-lg" icon="solar:monitor-smartphone-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors text-slate-500" href="#"><iconify-icon className="text-lg" icon="solar:link-linear"></iconify-icon></a>
</div>
</div>
<div className="">
<h5 className="text-xs font-semibold text-white mb-6">Services</h5>
<ul className="space-y-3">
<li className=""><a className="text-xs hover:text-white transition-colors text-slate-400" href="#exhibition">Exhibition</a></li>
<li className=""><a className="text-xs hover:text-white transition-colors text-slate-400" href="#conference">Conference</a></li>
<li className=""><a className="text-xs hover:text-white transition-colors text-slate-400" href="#live-shows">Live Shows</a></li>
</ul>
</div>
<div className=""></div>
<div>
<h5 className="text-xs font-semibold text-white mb-6">Coverage</h5>
<div className="p-4 border border-white/10 rounded-xl bg-black">
<p className="text-xs leading-relaxed text-slate-400">Mumbai · Delhi · Bangalore · Chennai · Hyderabad</p>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-[10px] uppercase text-slate-500 tracking-wide">© 2026 Team Creations. All Rights Reserved.</p>
<div className="flex gap-4 text-[10px] tracking-wide uppercase text-slate-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</footer>

<button className="fixed bottom-8 right-8 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center transition-all duration-300 z-50 hover:bg-slate-200" id="backTop" onclick="scrollToTop()">
<iconify-icon className="text-xl" icon="solar:alt-arrow-up-linear" strokeWidth="1.5"></iconify-icon>
</button>



    </>
  );
}
