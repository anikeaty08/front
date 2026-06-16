import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
navy: '#020F1F',
cyan: '#4DB9FF',
electric: '#7DA6FF',
pale: '#C7D9FF',
},
fontFamily: {
sans: ['Manrope', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'spin-slow': 'spin 12s linear infinite',
'glitch': 'glitch 1s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
glitch: {
'2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
'4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
'62%': { transform: 'translate(0,0) skew(5deg)' },
}
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // 1. Custom Cursor Logic
        const cursor = document.getElementById('cursor');
        const follower = document.getElementById('cursorFollower');
        
        if (window.matchMedia("(hover: hover)").matches) {
            document.addEventListener('mousemove', (e) => {
                const { clientX, clientY } = e;
                cursor.style.transform = `translate(${clientX}px, ${clientY}px) translate(-50%, -50%)`;
                follower.animate({
                    left: `${clientX}px`,
                    top: `${clientY}px`
                }, { duration: 500, fill: "forwards" });
            });

            // Hover state for cursor
            const interactiveElements = document.querySelectorAll('a, button, input, textarea, .spotlight-card, .group');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursor.classList.add('scale-[2]', 'bg-white/10');
                });
                el.addEventListener('mouseleave', () => {
                    cursor.classList.remove('scale-[2]', 'bg-white/10');
                });
            });
        }

        // 2. Spotlight Effect (Services)
        const servicesGrid = document.getElementById('servicesGrid');
        const serviceCards = document.querySelectorAll('.spotlight-card');

        servicesGrid.addEventListener('mousemove', (e) => {
            serviceCards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            });
        });

        // 3. Magnetic Button (Contact)
        const magneticBtn = document.getElementById('magneticBtn');
        if(magneticBtn) {
            magneticBtn.addEventListener('mousemove', (e) => {
                const rect = magneticBtn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                magneticBtn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });
            magneticBtn.addEventListener('mouseleave', () => {
                magneticBtn.style.transform = 'translate(0, 0)';
            });
        }

        // 4. Parallax Image Scrolling (References)
        window.addEventListener('scroll', () => {
            const parallaxImages = document.querySelectorAll('.parallax-img');
            parallaxImages.forEach(img => {
                const rect = img.parentElement.getBoundingClientRect();
                // Check if element is in viewport
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    const distance = (window.scrollY - (rect.top + window.scrollY)) + (window.innerHeight/2);
                    img.style.transform = `translateY(${distance * 0.15}px)`;
                }
            });

            // Scroll Progress
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById("scrollProgress").style.height = scrolled + "%";

            // Navbar Blur
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('bg-[#020F1F]/90');
            } else {
                nav.classList.remove('bg-[#020F1F]/90');
            }
        });

        // 5. Intersection Observer (Reveals & Team Stagger)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        document.querySelectorAll('.avatar-pop').forEach(el => observer.observe(el));

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="scroll-progress h-0" id="scrollProgress"></div>

<div className="custom-cursor fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan pointer-events-none z-50 mix-blend-screen transition-transform duration-100 ease-out flex items-center justify-center -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(77,185,255,0.5)]" id="cursor">
<div className="w-1 h-1 bg-white rounded-full"></div>
</div>
<div className="custom-cursor fixed top-0 left-0 w-64 h-64 bg-cyan/5 rounded-full blur-3xl pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500" id="cursorFollower"></div>

<div className="fixed inset-0 bg-grid z-0 pointer-events-none"></div>

<nav className="fixed w-full z-40 top-0 left-0 glass-panel transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="group flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-gradient-to-br from-cyan to-electric rounded flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
<span className="font-serif italic font-bold text-navy">A</span>
</div>
<span className="font-medium tracking-tight text-white group-hover:tracking-widest transition-all duration-300">AGENCY_AI</span>
</a>
<div className="hidden md:flex gap-8 items-center text-sm font-medium text-pale/70">
<a className="hover:text-cyan transition-colors relative group" href="#services">Szolgáltatások<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan group-hover:w-full transition-all duration-300"></span></a>
<a className="hover:text-cyan transition-colors relative group" href="#team">Csapat<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan group-hover:w-full transition-all duration-300"></span></a>
<a className="hover:text-cyan transition-colors relative group" href="#references">Referenciák<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan group-hover:w-full transition-all duration-300"></span></a>
<a className="px-5 py-2 border border-white/20 rounded-full hover:bg-white/5 hover:border-cyan hover:text-cyan transition-all duration-300 active:scale-95" href="#contact">Kapcsolat</a>
</div>
<button className="md:hidden text-white"><i data-lucide="menu"></i></button>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden z-10" id="home">
<div className="absolute top-1/4 left-10 w-24 h-24 border border-cyan/20 rounded-full animate-float opacity-50 blur-[1px]"></div>
<div className="absolute bottom-1/3 right-10 w-32 h-32 border border-electric/20 rotate-45 animate-float opacity-50" style={{animationDelay: '1s'}}></div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10 parallax-layer" data-speed="0.5">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs tracking-wide uppercase text-cyan mb-8 reveal">
<span className="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
                System Operational 🤖
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] font-serif font-medium mb-8 text-white reveal tracking-tight">
                We are the <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-cyan via-electric to-purple-400">bridge</span><br/>
                to the world of AI.
            </h1>
<p className="text-base md:text-lg text-pale/60 max-w-2xl mx-auto mb-12 leading-relaxed reveal font-light" style={{transitionDelay: '100ms'}}>
                Architecting intelligent digital infrastructures with a blueprint for the future. We merge heavy computing with elegant design.
            </p>
<div className="flex flex-col sm:flex-row gap-6 justify-center items-center reveal" style={{transitionDelay: '200ms'}}>
<a className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded overflow-hidden transition-all hover:border-cyan/50 hover:shadow-[0_0_20px_rgba(77,185,255,0.2)]" href="#services">
<span className="relative z-10 font-medium">Szolgáltatásaink</span>
<div className="absolute inset-0 bg-cyan/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
</a>
</div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan/10 to-purple-500/10 rounded-full blur-[100px] -z-10"></div>
</header>

<section className="relative py-32 bg-navy spotlight-group overflow-hidden" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 reveal">
<h2 className="text-3xl md:text-5xl font-serif italic mb-4 text-white">Választható szolgáltatásaink</h2>
<div className="h-1 w-20 bg-cyan mx-auto rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10" id="servicesGrid">

<div className="spotlight-card group relative bg-navy/50 border border-white/10 hover:border-cyan p-8 rounded-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(77,185,255,0.2)] overflow-hidden reveal">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<i className="w-24 h-24 text-cyan/20 group-hover:text-cyan/50 transition-colors" data-lucide="code-2"></i>
</div>
<div className="relative z-10">
<div className="w-12 h-12 mb-6 rounded-lg bg-gradient-to-br from-cyan/20 to-blue-600/20 flex items-center justify-center border border-cyan/30">
<i className="text-cyan w-6 h-6" data-lucide="code-2"></i>
</div>
<h3 className="text-2xl font-bold text-white mb-2">Weboldal fejlesztés</h3>
<p className="text-pale/60 text-sm mb-6">Modern, reszponzív és gyors weboldalak.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-pale/80"><i className="w-4 h-4 text-cyan" data-lucide="check"></i>Next.js &amp; React Framework</li>
<li className="flex items-center gap-3 text-sm text-pale/80"><i className="w-4 h-4 text-cyan" data-lucide="check"></i>SEO Optimalizálás</li>
<li className="flex items-center gap-3 text-sm text-pale/80"><i className="w-4 h-4 text-cyan" data-lucide="check"></i>High Performance</li>
</ul>
</div>
</div>

<div className="spotlight-card group relative bg-navy/50 border border-white/10 hover:border-cyan p-8 rounded-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(77,185,255,0.2)] overflow-hidden reveal" style={{transitionDelay: '100ms'}}>
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<i className="w-24 h-24 text-cyan/20 group-hover:text-cyan/50 transition-colors" data-lucide="bar-chart-2"></i>
</div>
<div className="relative z-10">
<div className="w-12 h-12 mb-6 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-600/20 flex items-center justify-center border border-purple-500/30">
<i className="text-purple-400 w-6 h-6" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-2xl font-bold text-white mb-2">Social Media Marketing</h3>
<p className="text-pale/60 text-sm mb-6">Márkaépítés és közösség menedzsment.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-pale/80"><i className="w-4 h-4 text-cyan" data-lucide="check"></i>Tartalom stratégia</li>
<li className="flex items-center gap-3 text-sm text-pale/80"><i className="w-4 h-4 text-cyan" data-lucide="check"></i>PPC Kampányok</li>
<li className="flex items-center gap-3 text-sm text-pale/80"><i className="w-4 h-4 text-cyan" data-lucide="check"></i>Analitika és jelentések</li>
</ul>
</div>
</div>

<div className="spotlight-card group relative bg-navy/50 border border-white/10 hover:border-cyan p-8 rounded-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(77,185,255,0.2)] overflow-hidden reveal" style={{transitionDelay: '200ms'}}>
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<i className="w-24 h-24 text-cyan/20 group-hover:text-cyan/50 transition-colors" data-lucide="brush"></i>
</div>
<div className="relative z-10">
<div className="w-12 h-12 mb-6 rounded-lg bg-gradient-to-br from-orange-400/20 to-red-500/20 flex items-center justify-center border border-orange-400/30">
<i className="text-orange-400 w-6 h-6" data-lucide="brush"></i>
</div>
<h3 className="text-2xl font-bold text-white mb-2">Grafikai Tervezés</h3>
<p className="text-pale/60 text-sm mb-6">Vizuális identitás és UI/UX design.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-pale/80"><i className="w-4 h-4 text-cyan" data-lucide="check"></i>Logo &amp; Arculat</li>
<li className="flex items-center gap-3 text-sm text-pale/80"><i className="w-4 h-4 text-cyan" data-lucide="check"></i>UI/UX Design</li>
<li className="flex items-center gap-3 text-sm text-pale/80"><i className="w-4 h-4 text-cyan" data-lucide="check"></i>Nyomdai előkészítés</li>
</ul>
</div>
</div>

<div className="spotlight-card group relative bg-navy/50 border border-white/10 hover:border-cyan p-8 rounded-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(77,185,255,0.2)] overflow-hidden reveal" style={{transitionDelay: '300ms'}}>
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<i className="w-24 h-24 text-cyan/20 group-hover:text-cyan/50 transition-colors" data-lucide="brain-circuit"></i>
</div>
<div className="relative z-10">
<div className="w-12 h-12 mb-6 rounded-lg bg-gradient-to-br from-green-400/20 to-emerald-600/20 flex items-center justify-center border border-green-400/30">
<i className="text-emerald-400 w-6 h-6" data-lucide="brain-circuit"></i>
</div>
<h3 className="text-2xl font-bold text-white mb-2">AI Szoftverfejlesztés</h3>
<p className="text-pale/60 text-sm mb-6">Intelligens automatizálás és gépi tanulás.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-pale/80"><i className="w-4 h-4 text-cyan" data-lucide="check"></i>Custom LLM Solutions</li>
<li className="flex items-center gap-3 text-sm text-pale/80"><i className="w-4 h-4 text-cyan" data-lucide="check"></i>Process Automation</li>
<li className="flex items-center gap-3 text-sm text-pale/80"><i className="w-4 h-4 text-cyan" data-lucide="check"></i>Data Analytics</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 border-t border-white/5 overflow-hidden" id="team">

<div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan/30 to-transparent -translate-y-12 blur-[1px]"></div>
<div className="absolute top-1/2 left-0 w-full h-[100px] bg-cyan/5 -translate-y-24 rounded-[100%] blur-3xl -z-10"></div>
<div className="max-w-6xl mx-auto px-6 text-center">
<div className="mb-20 reveal">
<h2 className="text-4xl md:text-5xl font-serif mb-4 text-white">Ismerd meg a csapatunkat</h2>
<p className="text-pale/60 max-w-xl mx-auto text-sm">
                    Fiatal, szenvedélyes IT szakemberek, akik a jövőt építik.
                </p>
</div>

<div className="flex flex-wrap justify-center items-end gap-6 md:gap-12 group/team h-48" id="teamContainer">

<div className="relative group cursor-pointer avatar-pop">
<div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white/10 overflow-hidden relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:border-cyan grayscale group-hover:grayscale-0 group-hover:shadow-[0_0_20px_rgba(77,185,255,0.4)] peer-hover:blur-[2px]">
<img alt="Member" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -top-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-2 pointer-events-none whitespace-nowrap">
<div className="bg-navy border border-cyan/30 px-3 py-1.5 rounded text-center shadow-lg">
<div className="text-white font-bold text-sm">David K.</div>
<div className="text-cyan text-[10px] uppercase tracking-wide">Lead Dev</div>
</div>
<div className="w-2 h-2 bg-navy border-r border-b border-cyan/30 rotate-45 absolute bottom-[-5px] left-1/2 -translate-x-1/2"></div>
</div>
</div>

<div className="relative group cursor-pointer avatar-pop" style={{transitionDelay: '100ms'}}>
<div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white/10 overflow-hidden relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:border-cyan grayscale group-hover:grayscale-0 group-hover:shadow-[0_0_20px_rgba(77,185,255,0.4)]">
<img alt="Member" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -top-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-2 pointer-events-none whitespace-nowrap">
<div className="bg-navy border border-cyan/30 px-3 py-1.5 rounded text-center shadow-lg">
<div className="text-white font-bold text-sm">Sarah L.</div>
<div className="text-cyan text-[10px] uppercase tracking-wide">UI Design</div>
</div>
<div className="w-2 h-2 bg-navy border-r border-b border-cyan/30 rotate-45 absolute bottom-[-5px] left-1/2 -translate-x-1/2"></div>
</div>
</div>

<div className="relative group cursor-pointer avatar-pop" style={{transitionDelay: '200ms'}}>
<div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-cyan overflow-hidden relative z-20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(77,185,255,0.6)] bg-white/5">
<img alt="Memoji" className="w-full h-full object-cover p-2" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&amp;backgroundColor=transparent"/>
</div>

<div className="absolute -top-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-2 pointer-events-none whitespace-nowrap">
<div className="bg-navy border border-cyan/30 px-3 py-1.5 rounded text-center shadow-lg">
<div className="text-white font-bold text-sm">Alex M.</div>
<div className="text-cyan text-[10px] uppercase tracking-wide">Founder</div>
</div>
<div className="w-2 h-2 bg-navy border-r border-b border-cyan/30 rotate-45 absolute bottom-[-5px] left-1/2 -translate-x-1/2"></div>
</div>
</div>

<div className="relative group cursor-pointer avatar-pop" style={{transitionDelay: '300ms'}}>
<div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white/10 overflow-hidden relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:border-cyan grayscale group-hover:grayscale-0 group-hover:shadow-[0_0_20px_rgba(77,185,255,0.4)]">
<img alt="Member" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -top-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-2 pointer-events-none whitespace-nowrap">
<div className="bg-navy border border-cyan/30 px-3 py-1.5 rounded text-center shadow-lg">
<div className="text-white font-bold text-sm">Marcus R.</div>
<div className="text-cyan text-[10px] uppercase tracking-wide">Backend</div>
</div>
<div className="w-2 h-2 bg-navy border-r border-b border-cyan/30 rotate-45 absolute bottom-[-5px] left-1/2 -translate-x-1/2"></div>
</div>
</div>

<div className="relative group cursor-pointer avatar-pop" style={{transitionDelay: '400ms'}}>
<div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white/10 overflow-hidden relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:border-cyan grayscale group-hover:grayscale-0 group-hover:shadow-[0_0_20px_rgba(77,185,255,0.4)]">
<img alt="Member" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -top-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-2 pointer-events-none whitespace-nowrap">
<div className="bg-navy border border-cyan/30 px-3 py-1.5 rounded text-center shadow-lg">
<div className="text-white font-bold text-sm">Emily W.</div>
<div className="text-cyan text-[10px] uppercase tracking-wide">Marketing</div>
</div>
<div className="w-2 h-2 bg-navy border-r border-b border-cyan/30 rotate-45 absolute bottom-[-5px] left-1/2 -translate-x-1/2"></div>
</div>
</div>
</div>

<style>
                .group\/team:hover .group:not(:hover) {
                    filter: blur(2px);
                    opacity: 0.7;
                    transform: scale(0.95);
                }
            </style>
</div>
</section>

<section className="relative py-32 bg-navy" id="references">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl md:text-6xl font-serif text-center mb-20 text-white reveal">Referenciáink</h2>

<div className="grid grid-cols-1 lg:grid-cols-5 gap-8 h-auto lg:h-[600px]">

<div className="lg:col-span-3 relative h-[500px] lg:h-full rounded overflow-hidden group reveal">
<div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/40 transition-colors duration-500"></div>
<div className="parallax-img absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-center transition-transform duration-75" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp'}}></div>
<div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
<div className="overflow-hidden">
<h3 className="text-3xl md:text-5xl font-bold text-white uppercase leading-none tracking-tighter mb-2 translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                Office for<br/>Future Furnishing
                            </h3>
</div>
<div className="overflow-hidden mt-4">
<div className="flex gap-3 text-xs font-medium tracking-widest text-white/80 uppercase translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-200">
<span className="px-2 py-1 border border-white/30 rounded">Web Dev</span>
<span className="px-2 py-1 border border-white/30 rounded">Branding</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2 relative h-[500px] lg:h-full rounded overflow-hidden group reveal" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 bg-red-900/10 mix-blend-overlay z-10 pointer-events-none"></div>
<div className="parallax-img absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-center transition-transform duration-75 filter grayscale group-hover:grayscale-0 transition-all duration-300" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp'}}></div>

<div className="absolute inset-0 bg-cyan/20 mix-blend-color-dodge opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full">
<div className="overflow-hidden">
<h3 className="text-2xl md:text-4xl font-bold text-white uppercase leading-none tracking-tighter mb-2 glitch-hover cursor-default" data-text="Cyber_Security_AI">
                                Cyber_Security_AI
                            </h3>
</div>
<div className="overflow-hidden mt-2">
<div className="text-xs text-cyan font-mono tracking-widest uppercase">System Protected</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 border-t border-white/5" id="contact">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-white reveal">Kapcsolat</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">

<div className="bg-navy border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden reveal">
<div className="absolute top-0 right-0 w-64 h-64 bg-cyan/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<h3 className="text-2xl font-bold text-white mb-8">Elérhetőségeink</h3>
<div className="space-y-8">
<div className="flex items-center gap-6 group">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyan group-hover:text-cyan transition-colors">
<i className="w-5 h-5" data-lucide="phone"></i>
</div>
<div>
<p className="text-xs text-pale/50 uppercase tracking-widest mb-1">Telefon</p>
<a className="text-lg text-white font-medium hover:text-cyan transition-colors" href="tel:+36301234567">+36 30 123 4567</a>
</div>
</div>
<div className="flex items-center gap-6 group">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyan group-hover:text-cyan transition-colors">
<i className="w-5 h-5" data-lucide="mail"></i>
</div>
<div>
<p className="text-xs text-pale/50 uppercase tracking-widest mb-1">Email</p>
<a className="text-lg text-white font-medium hover:text-cyan transition-colors" href="mailto:hello@agency.ai">hello@agency.ai</a>
</div>
</div>
<div className="flex items-center gap-6 group">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyan group-hover:text-cyan transition-colors">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<div>
<p className="text-xs text-pale/50 uppercase tracking-widest mb-1">Iroda</p>
<p className="text-lg text-white font-medium">1052 Budapest, Deák Ferenc tér 1.</p>
</div>
</div>
</div>
</div>

<div className="reveal" style={{transitionDelay: '150ms'}}>
<form className="space-y-8">
<div className="relative group">
<input className="block w-full px-0 py-3 text-white bg-transparent border-b-2 border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-cyan peer transition-colors" id="name" placeholder=" " type="text"/>
<label className="absolute text-sm text-pale/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="name">Teljes Név</label>
</div>
<div className="relative group">
<input className="block w-full px-0 py-3 text-white bg-transparent border-b-2 border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-cyan peer transition-colors" id="email" placeholder=" " type="email"/>
<label className="absolute text-sm text-pale/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="email">Email Cím</label>
</div>
<div className="relative group">
<input className="block w-full px-0 py-3 text-white bg-transparent border-b-2 border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-cyan peer transition-colors" id="company" placeholder=" " type="text"/>
<label className="absolute text-sm text-pale/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="company">Cégnév (Opcionális)</label>
</div>
<div className="relative group">
<textarea className="block w-full px-0 py-3 text-white bg-transparent border-b-2 border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-cyan peer transition-colors resize-none" id="message" placeholder=" " rows="3"></textarea>
<label className="absolute text-sm text-pale/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="message">Üzenet</label>
</div>
<button className="magnetic-btn w-full md:w-auto relative px-8 py-4 bg-cyan text-navy font-bold rounded hover:bg-white transition-colors overflow-hidden group" id="magneticBtn">
<span className="relative z-10">Küldés</span>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#010810] py-12 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-cyan rounded-sm flex items-center justify-center">
<span className="font-serif italic text-navy text-xs font-bold">AI</span>
</div>
<span className="text-sm text-pale/50">© 2024 AI Agency. Systems Online.</span>
</div>
<div className="flex gap-6">
<a className="text-pale/50 hover:text-cyan transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-pale/50 hover:text-cyan transition-colors" href="#"><i className="w-5 h-5" data-lucide="github"></i></a>
<a className="text-pale/50 hover:text-cyan transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan/50 to-transparent"></div>
</footer>


    </>
  );
}
