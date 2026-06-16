import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Mobile Menu Toggle Logic
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let menuOpen = false;

        menuBtn.addEventListener('click', () => {
            menuOpen = !menuOpen;
            if (menuOpen) {
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
                menuBtn.innerHTML = '<i data-lucide="x" stroke-width="1.5" class="w-6 h-6"></i>';
                lucide.createIcons();
            } else {
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
                menuBtn.innerHTML = '<i data-lucide="menu" stroke-width="1.5" class="w-6 h-6"></i>';
                lucide.createIcons();
            }
        });

        // Close mobile menu on link click
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if(menuOpen) menuBtn.click();
            });
        });

        // Custom Cursor Logic
        const dot = document.getElementById('cursor-dot');
        const trail = document.getElementById('cursor-trail');
        
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let trailX = mouseX;
        let trailY = mouseY;

        // Ensure cursor only runs on non-touch devices
        if (window.matchMedia("(pointer: fine)").matches) {
            window.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                dot.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`;
            });

            function renderTrail() {
                trailX += (mouseX - trailX) * 0.15;
                trailY += (mouseY - trailY) * 0.15;
                trail.style.transform = `translate(calc(${trailX}px - 50%), calc(${trailY}px - 50%))`;
                requestAnimationFrame(renderTrail);
            }
            renderTrail();

            const interactables = document.querySelectorAll('a, button, [role="button"]');
            interactables.forEach(el => {
                el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
                el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
            });
        }

        // Scroll Animations (Intersection Observer)
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-up').forEach(el => {
            revealObserver.observe(el);
        });

        // Active Nav Link Highlight based on scroll position
        const sections = document.querySelectorAll('section, header');
        const navLinks = document.querySelectorAll('.hidden.md\\:flex a[href^="#"]');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (scrollY >= sectionTop - 150) {
                    current = section.getAttribute('id') || '';
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('text-white');
                if (link.getAttribute('href') === `#${current}` && current !== '') {
                    link.classList.add('text-white');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="cursor-dot"></div>
<div id="cursor-trail"></div>

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
<div className="absolute top-[-20%] left-[-10%] w-[50rem] h-[50rem] bg-emerald-600/5 rounded-full mix-blend-screen filter blur-[120px]"></div>
<div className="absolute top-[10%] right-[-10%] w-[40rem] h-[40rem] bg-indigo-500/5 rounded-full mix-blend-screen filter blur-[120px]"></div>
<div className="absolute bottom-[-10%] left-[20%] w-[45rem] h-[45rem] bg-purple-600/5 rounded-full mix-blend-screen filter blur-[120px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/50 backdrop-blur-xl transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
<div className="flex items-center gap-3 group cursor-pointer z-50">
<div className="relative flex items-center justify-center w-10 h-10 transition-transform duration-500 group-hover:scale-105">
<svg className="w-full h-full drop-shadow-[0_0_8px_rgba(56,189,248,0.4)]" viewbox="0 0 100 100">
<path className="opacity-80" d="M25 65 A15 15 0 0 1 30 40 A20 20 0 0 1 65 35 A18 18 0 0 1 80 60 Z" fill="none" stroke="#0ea5e9" strokeLinejoin="round" strokeWidth="4"></path>
<path className="animate-pulse" d="M45 40 C 65 30, 75 60, 50 70 C 30 75, 25 45, 55 50" fill="none" stroke="url(#swirlGrad)" strokeLinecap="round" strokeWidth="3"></path>
<circle className="drop-shadow-[0_0_5px_#fff]" cx="50" cy="50" fill="#fff" r="4"></circle>
<defs>
<lineargradient id="swirlGrad" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#a855f7"></stop>
<stop offset="100%" stop-color="#3b82f6"></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xl font-normal tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent leading-none">NEXORIFT</span>
<span className="text-xs font-light tracking-widest text-zinc-200 mt-1 uppercase leading-none">Cloud</span>
</div>
</div>
<div className="hidden md:flex items-center gap-8 text-base font-light text-zinc-400">
<a className="hover:text-white transition-colors duration-300" href="#features">Features</a>
<a className="hover:text-white transition-colors duration-300" href="#budget">Budget</a>
<a className="hover:text-white transition-colors duration-300" href="#performance">Performance</a>
</div>
<div className="hidden md:flex items-center gap-4 text-base font-light">
<a className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300 tracking-tight" href="https://mcservers.in/" target="_blank">
<i className="w-4 h-4" data-lucide="layout-dashboard" strokeWidth="1.5"></i> Panel
                </a>
<a className="relative group bg-zinc-900 text-zinc-100 px-5 py-2 rounded-full ring-1 ring-white/10 hover:ring-emerald-500/50 transition-all duration-300 tracking-tight overflow-hidden" href="https://discord.gg/KPRxv9vPcB" target="_blank">
<div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="relative z-10">Get Started</span>
</a>
</div>
<button className="md:hidden text-zinc-400 hover:text-white z-50 relative" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
<div className="fixed inset-0 bg-zinc-950/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-8 opacity-0 pointer-events-none transition-all duration-500" id="mobile-menu">
<a className="mobile-link text-2xl font-light text-zinc-300 hover:text-white tracking-tight" href="#features">Features</a>
<a className="mobile-link text-2xl font-light text-zinc-300 hover:text-white tracking-tight" href="#budget">Budget</a>
<a className="mobile-link text-2xl font-light text-zinc-300 hover:text-white tracking-tight" href="#performance">Performance</a>
<a className="mobile-link text-2xl font-light text-zinc-300 hover:text-white tracking-tight" href="https://mcservers.in/" target="_blank">Client Panel</a>
<a className="mobile-link mt-4 bg-white text-zinc-950 px-8 py-3 rounded-full text-lg font-normal tracking-tight shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="https://discord.gg/KPRxv9vPcB" target="_blank">Get Started</a>
</div>
</nav>

<header className="relative pt-40 pb-24 md:pt-56 md:pb-32 px-6 overflow-hidden flex items-center justify-center min-h-[90vh]">
<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute top-1/4 left-1/4 w-1 h-1 bg-emerald-400 rounded-full animate-float-slow shadow-[0_0_10px_#34d399]"></div>
<div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-float-slow shadow-[0_0_10px_#60a5fa]" style={{animationDelay: '2s'}}></div>
<div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-float-slow shadow-[0_0_10px_#c084fc]" style={{animationDelay: '4s'}}></div>
<div className="absolute top-2/3 right-1/3 w-1 h-1 bg-amber-400 rounded-full animate-float-slow shadow-[0_0_10px_#fbbf24]" style={{animationDelay: '1.5s'}}></div>
<div className="absolute bottom-1/4 right-1/5 w-1 h-1 bg-zinc-300 rounded-full animate-float-slow" style={{animationDelay: '3s'}}></div>
</div>
<div className="max-w-4xl mx-auto text-center relative z-10 reveal-up active">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full ring-1 ring-white/5 bg-zinc-900/30 text-sm font-light text-zinc-400 mb-8 backdrop-blur-md cursor-default">
<span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse"></span>
<span className="">Minecraft Server &amp; VPS Hosting</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-normal text-white tracking-tight leading-[1.1] mb-8">
                Next-generation <br className="hidden md:block"/>
<span className="bg-clip-text animate-shimmer text-transparent bg-gradient-to-r from-emerald-300 via-cyan-200 to-purple-300">cloud infrastructure</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                Experience unparalleled performance with dedicated resources, NVMe SSDs, and enterprise-grade DDoS protection. Built for communities that demand absolute reliability.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="relative group w-full sm:w-auto bg-zinc-100 text-zinc-950 px-8 py-3.5 rounded-full text-base font-normal tracking-tight transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]" href="#performance">
                    View Pricing
                </a>
<a className="sm:w-auto hover:bg-zinc-900 hover:ring-white/20 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 text-base font-normal text-zinc-300 tracking-tight w-full rounded-full ring-white/10 ring-1 pt-3.5 pr-8 pb-3.5 pl-8 backdrop-blur-md" href="https://discord.gg/KPRxv9vPcB" target="_blank">
<i className="w-5 h-5" data-lucide="message-square" strokeWidth="1.5"></i>
                    Join Discord
                </a>
</div>
</div>
</header>

<div className="border-y border-white/5 bg-zinc-900/10 backdrop-blur-sm relative z-10" id="features">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left reveal-up">
<div className="flex flex-col sm:flex-row items-center gap-4 group">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 transition-colors duration-300">
<i className="w-5 h-5" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-base font-normal text-zinc-200 tracking-tight">Instant Setup</h4>
<p className="text-base text-zinc-500 mt-0.5 font-light">Deploy in seconds</p>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4 group">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-400 group-hover:text-blue-400 transition-colors duration-300">
<i className="w-5 h-5" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<div className="">
<h4 className="text-base font-normal text-zinc-200 tracking-tight">DDoS Protection</h4>
<p className="text-base text-zinc-500 mt-0.5 font-light">Enterprise routing</p>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4 group">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-400 group-hover:text-purple-400 transition-colors duration-300">
<i className="w-5 h-5" data-lucide="server" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-base font-normal text-zinc-200 tracking-tight">99.9% Uptime</h4>
<p className="text-base text-zinc-500 mt-0.5 font-light">Reliable network</p>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4 group">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-400 group-hover:text-amber-400 transition-colors duration-300">
<i className="w-5 h-5" data-lucide="headphones" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-base font-normal text-zinc-200 tracking-tight">24/7 Support</h4>
<p className="text-base text-zinc-500 mt-0.5 font-light">Always online</p>
</div>
</div>
</div>
</div>
</div>

<main className="py-32 px-6 relative z-10">
<div className="max-w-7xl mx-auto space-y-40">

<section className="scroll-mt-32" id="budget">
<div className="mb-16 text-center md:text-left flex flex-col md:flex-row items-end justify-between gap-6 reveal-up">
<div className="">
<h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight mb-4">Budget Plans</h2>
<p className="text-lg text-zinc-400 font-light max-w-xl">Reliable performance tailored for small communities and private servers. Powerful hardware that fits your budget.</p>
</div>
<div className="hidden md:flex items-center gap-2 text-sm font-light text-zinc-500 px-4 py-2 rounded-full ring-1 ring-white/5">
<i className="w-4 h-4" data-lucide="calendar" strokeWidth="1.5"></i>
                        Billed Monthly
                    </div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="relative group h-full reveal-up" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 bg-zinc-900/40 rounded-2xl ring-1 ring-white/5 group-hover:ring-white/10 group-hover:bg-zinc-900/60 transition-all duration-500"></div>
<div className="relative p-8 flex flex-col h-full z-10">
<div className="flex items-center gap-3 mb-8">
<div className="p-2 rounded-lg bg-white/5 text-zinc-400 group-hover:text-white transition-colors duration-300">
<i className="w-6 h-6" data-lucide="package" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-normal text-white tracking-tight">Wood</h3>
</div>
<div className="space-y-4 mb-10 flex-grow">
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">RAM</span>
<span className="text-zinc-300 font-normal">2GB</span>
</div>
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">CPU</span>
<span className="text-zinc-300 font-normal">100%</span>
</div>
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">NVMe SSD</span>
<span className="text-zinc-300 font-normal">10GB</span>
</div>
</div>
<div className="pt-6 border-t border-white/5 flex flex-col gap-6 mt-auto">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-normal text-white tracking-tight">₹60</span>
<span className="text-base text-zinc-500 font-light">/mo</span>
</div>
<a className="w-full py-3 rounded-xl ring-1 ring-white/10 text-base font-light text-zinc-300 hover:bg-white hover:text-black hover:ring-white transition-all duration-300 tracking-tight text-center" href="https://discord.gg/KPRxv9vPcB" target="_blank">Order Now</a>
</div>
</div>
</div>

<div className="relative group h-full reveal-up" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 bg-zinc-900/40 rounded-2xl ring-1 ring-white/5 group-hover:ring-white/10 group-hover:bg-zinc-900/60 transition-all duration-500"></div>
<div className="relative p-8 flex flex-col h-full z-10">
<div className="flex items-center gap-3 mb-8">
<div className="p-2 rounded-lg bg-white/5 text-zinc-400 group-hover:text-white transition-colors duration-300">
<i className="w-6 h-6" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-normal text-white tracking-tight">Stone</h3>
</div>
<div className="space-y-4 mb-10 flex-grow">
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">RAM</span>
<span className="text-zinc-300 font-normal">4GB</span>
</div>
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">CPU</span>
<span className="text-zinc-300 font-normal">150%</span>
</div>
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">NVMe SSD</span>
<span className="text-zinc-300 font-normal">20GB</span>
</div>
</div>
<div className="pt-6 border-t border-white/5 flex flex-col gap-6 mt-auto">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-normal text-white tracking-tight">₹90</span>
<span className="text-base text-zinc-500 font-light">/mo</span>
</div>
<a className="w-full py-3 rounded-xl ring-1 ring-white/10 text-base font-light text-zinc-300 hover:bg-white hover:text-black hover:ring-white transition-all duration-300 tracking-tight text-center" href="https://discord.gg/KPRxv9vPcB" target="_blank">Order Now</a>
</div>
</div>
</div>

<div className="relative group h-full reveal-up" style={{transitionDelay: '300ms'}}>
<div className="absolute inset-0 bg-zinc-900/40 rounded-2xl ring-1 ring-white/5 group-hover:ring-orange-500/30 group-hover:bg-zinc-900/60 transition-all duration-500"></div>
<div className="relative p-8 flex flex-col h-full z-10">
<div className="flex items-center gap-3 mb-8">
<div className="p-2 rounded-lg bg-orange-500/10 text-orange-400/70 group-hover:text-orange-400 transition-colors duration-300">
<i className="w-6 h-6" data-lucide="database" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-normal text-white tracking-tight">Copper</h3>
</div>
<div className="space-y-4 mb-10 flex-grow">
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">RAM</span>
<span className="text-zinc-300 font-normal">6GB</span>
</div>
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">CPU</span>
<span className="text-zinc-300 font-normal">200%</span>
</div>
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">NVMe SSD</span>
<span className="text-zinc-300 font-normal">20GB</span>
</div>
</div>
<div className="pt-6 border-t border-white/5 flex flex-col gap-6 mt-auto">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-normal text-white tracking-tight">₹140</span>
<span className="text-base text-zinc-500 font-light">/mo</span>
</div>
<a className="w-full py-3 rounded-xl ring-1 ring-white/10 text-base font-light text-zinc-300 hover:bg-orange-500 hover:text-black hover:ring-orange-500 transition-all duration-300 tracking-tight text-center" href="https://discord.gg/KPRxv9vPcB" target="_blank">Order Now</a>
</div>
</div>
</div>

<div className="relative group h-full reveal-up" style={{transitionDelay: '400ms'}}>
<div className="absolute inset-0 bg-zinc-900/40 rounded-2xl ring-1 ring-white/5 group-hover:ring-zinc-400/40 group-hover:bg-zinc-900/60 transition-all duration-500"></div>
<div className="relative p-8 flex flex-col h-full z-10">
<div className="flex items-center gap-3 mb-8">
<div className="p-2 rounded-lg bg-zinc-500/10 text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300">
<i className="w-6 h-6" data-lucide="cpu" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-normal text-white tracking-tight">Iron</h3>
</div>
<div className="space-y-4 mb-10 flex-grow">
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">RAM</span>
<span className="text-zinc-300 font-normal">10GB</span>
</div>
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">CPU</span>
<span className="text-zinc-300 font-normal">350%</span>
</div>
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">NVMe SSD</span>
<span className="text-zinc-300 font-normal">40GB</span>
</div>
</div>
<div className="pt-6 border-t border-white/5 flex flex-col gap-6 mt-auto">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-normal text-white tracking-tight">₹210</span>
<span className="text-base text-zinc-500 font-light">/mo</span>
</div>
<a className="w-full py-3 rounded-xl ring-1 ring-white/10 text-base font-light text-zinc-300 hover:bg-zinc-200 hover:text-black hover:ring-zinc-200 transition-all duration-300 tracking-tight text-center" href="https://discord.gg/KPRxv9vPcB" target="_blank">Order Now</a>
</div>
</div>
</div>

<div className="relative group h-full reveal-up" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 bg-zinc-900/40 rounded-2xl ring-1 ring-white/5 group-hover:ring-amber-500/30 group-hover:bg-zinc-900/60 transition-all duration-500"></div>
<div className="relative p-8 flex flex-col h-full z-10">
<div className="flex items-center gap-3 mb-8">
<div className="p-2 rounded-lg bg-amber-500/10 text-amber-500/70 group-hover:text-amber-400 transition-colors duration-300">
<i className="w-6 h-6" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-normal text-white tracking-tight">Gold</h3>
</div>
<div className="space-y-4 mb-10 flex-grow">
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">RAM</span>
<span className="text-zinc-200 font-normal">16GB</span>
</div>
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">CPU</span>
<span className="text-zinc-200 font-normal">500%</span>
</div>
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">NVMe SSD</span>
<span className="text-zinc-200 font-normal">50GB</span>
</div>
</div>
<div className="pt-6 border-t border-white/5 flex flex-col gap-6 mt-auto">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-normal text-white tracking-tight">₹300</span>
<span className="text-base text-zinc-500 font-light">/mo</span>
</div>
<a className="w-full py-3 rounded-xl ring-1 ring-white/10 text-base font-light text-zinc-300 hover:bg-amber-500 hover:text-black hover:ring-amber-500 transition-all duration-300 tracking-tight text-center" href="https://discord.gg/KPRxv9vPcB" target="_blank">Order Now</a>
</div>
</div>
</div>

<div className="relative group h-full reveal-up" style={{transitionDelay: '200ms'}}>
<div className="absolute -inset-0.5 bg-gradient-to-b from-emerald-500/30 to-transparent rounded-2xl opacity-50 blur-sm group-hover:opacity-100 group-hover:blur-md transition duration-500"></div>
<div className="absolute inset-0 bg-zinc-900 rounded-2xl ring-1 ring-emerald-500/40 transition-all duration-500"></div>
<div className="relative p-8 flex flex-col h-full z-10">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
<i className="w-6 h-6" data-lucide="gem" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-normal text-white tracking-tight">Emerald</h3>
</div>
<span className="text-xs font-normal text-black bg-emerald-400 px-3 py-1 rounded-full tracking-tight">Popular</span>
</div>
<div className="space-y-4 mb-10 flex-grow">
<div className="flex items-center justify-between text-base">
<span className="text-zinc-400 font-light">RAM</span>
<span className="text-white font-normal">20GB</span>
</div>
<div className="flex items-center justify-between text-base">
<span className="text-zinc-400 font-light">CPU</span>
<span className="text-white font-normal">600%</span>
</div>
<div className="flex items-center justify-between text-base">
<span className="text-zinc-400 font-light">NVMe SSD</span>
<span className="text-white font-normal">60GB</span>
</div>
</div>
<div className="pt-6 border-t border-white/10 flex flex-col gap-6 mt-auto">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-normal text-white tracking-tight">₹350</span>
<span className="text-base text-zinc-400 font-light">/mo</span>
</div>
<a className="w-full py-3 rounded-xl bg-emerald-500 text-base font-normal text-black hover:bg-emerald-400 hover:scale-[1.02] transition-all duration-300 tracking-tight text-center shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]" href="https://discord.gg/KPRxv9vPcB" target="_blank">Order Now</a>
</div>
</div>
</div>

<div className="relative group h-full reveal-up" style={{transitionDelay: '300ms'}}>
<div className="absolute inset-0 bg-zinc-900/40 rounded-2xl ring-1 ring-white/5 group-hover:ring-cyan-500/30 group-hover:bg-zinc-900/60 transition-all duration-500"></div>
<div className="relative p-8 flex flex-col h-full z-10">
<div className="flex items-center gap-3 mb-8">
<div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500/70 group-hover:text-cyan-400 transition-colors duration-300">
<i className="w-6 h-6" data-lucide="diamond" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-normal text-white tracking-tight">Diamond</h3>
</div>
<div className="space-y-4 mb-10 flex-grow">
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">RAM</span>
<span className="text-zinc-200 font-normal">32GB</span>
</div>
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">CPU</span>
<span className="text-zinc-200 font-normal">700%</span>
</div>
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">NVMe SSD</span>
<span className="text-zinc-200 font-normal">70GB</span>
</div>
</div>
<div className="pt-6 border-t border-white/5 flex flex-col gap-6 mt-auto">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-normal text-white tracking-tight">₹480</span>
<span className="text-base text-zinc-500 font-light">/mo</span>
</div>
<a className="w-full py-3 rounded-xl ring-1 ring-white/10 text-base font-light text-zinc-300 hover:bg-cyan-500 hover:text-black hover:ring-cyan-500 transition-all duration-300 tracking-tight text-center" href="https://discord.gg/KPRxv9vPcB" target="_blank">Order Now</a>
</div>
</div>
</div>

<div className="relative group h-full reveal-up" style={{transitionDelay: '400ms'}}>
<div className="absolute inset-0 bg-zinc-900/40 rounded-2xl ring-1 ring-white/5 group-hover:ring-purple-500/30 group-hover:bg-zinc-900/60 transition-all duration-500"></div>
<div className="relative p-8 flex flex-col h-full z-10">
<div className="flex items-center gap-3 mb-8">
<div className="p-2 rounded-lg bg-purple-500/10 text-purple-500/70 group-hover:text-purple-400 transition-colors duration-300">
<i className="w-6 h-6" data-lucide="crown" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-normal text-white tracking-tight">Netherite</h3>
</div>
<div className="space-y-4 mb-10 flex-grow">
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">RAM</span>
<span className="text-zinc-200 font-normal">64GB</span>
</div>
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">CPU</span>
<span className="text-zinc-200 font-normal">800%</span>
</div>
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">NVMe SSD</span>
<span className="text-zinc-200 font-normal">150GB</span>
</div>
</div>
<div className="pt-6 border-t border-white/5 flex flex-col gap-6 mt-auto">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-normal text-white tracking-tight">₹700</span>
<span className="text-base text-zinc-500 font-light">/mo</span>
</div>
<a className="w-full py-3 rounded-xl ring-1 ring-white/10 text-base font-light text-zinc-300 hover:bg-purple-500 hover:text-white hover:ring-purple-500 transition-all duration-300 tracking-tight text-center" href="https://discord.gg/KPRxv9vPcB" target="_blank">Order Now</a>
</div>
</div>
</div>
</div>
</section>

<div className="relative h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent reveal-up"></div>

<section className="scroll-mt-32" id="performance">
<div className="mb-16 text-center md:text-left flex flex-col md:flex-row items-end justify-between gap-6 reveal-up">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 text-sm font-light text-amber-400 mb-5 ring-1 ring-amber-500/20">
<i className="w-4 h-4" data-lucide="rocket" strokeWidth="1.5"></i> Premium Tier
                        </div>
<h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight mb-4">Performance Plans</h2>
<p className="text-lg text-zinc-400 font-light max-w-xl">Powered by extreme frequency CPUs for massive modpacks, demanding plugins, and zero compromises.</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="relative group h-full reveal-up" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 bg-zinc-900/50 rounded-2xl ring-1 ring-white/5 group-hover:ring-white/10 group-hover:bg-zinc-900/80 transition-all duration-500"></div>
<div className="relative p-8 flex flex-col h-full z-10">
<div className="flex items-center gap-3 mb-8">
<div className="p-2 rounded-lg bg-white/5 text-zinc-400 group-hover:text-white transition-colors duration-300">
<i className="w-6 h-6" data-lucide="package" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-normal text-white tracking-tight">Wood</h3>
</div>
<div className="space-y-4 mb-10 flex-grow">
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">RAM</span>
<span className="text-zinc-300 font-normal">2GB</span>
</div>
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">CPU</span>
<span className="text-zinc-300 font-normal">100%</span>
</div>
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">NVMe SSD</span>
<span className="text-zinc-300 font-normal">10GB</span>
</div>
</div>
<div className="pt-6 border-t border-white/5 flex flex-col gap-6 mt-auto">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-normal text-white tracking-tight">₹90</span>
<span className="text-base text-zinc-500 font-light">/mo</span>
</div>
<a className="w-full py-3 rounded-xl ring-1 ring-white/10 text-base font-light text-zinc-300 hover:bg-white hover:text-black hover:ring-white transition-all duration-300 tracking-tight text-center" href="https://discord.gg/KPRxv9vPcB" target="_blank">Order Now</a>
</div>
</div>
</div>

<div className="relative group h-full reveal-up" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 bg-zinc-900/50 rounded-2xl ring-1 ring-white/5 group-hover:ring-white/10 group-hover:bg-zinc-900/80 transition-all duration-500"></div>
<div className="relative p-8 flex flex-col h-full z-10">
<div className="flex items-center gap-3 mb-8">
<div className="p-2 rounded-lg bg-white/5 text-zinc-400 group-hover:text-white transition-colors duration-300">
<i className="w-6 h-6" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-normal text-white tracking-tight">Stone</h3>
</div>
<div className="space-y-4 mb-10 flex-grow">
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">RAM</span>
<span className="text-zinc-300 font-normal">4GB</span>
</div>
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">CPU</span>
<span className="text-zinc-300 font-normal">150%</span>
</div>
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">NVMe SSD</span>
<span className="text-zinc-300 font-normal">20GB</span>
</div>
</div>
<div className="pt-6 border-t border-white/5 flex flex-col gap-6 mt-auto">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-normal text-white tracking-tight">₹120</span>
<span className="text-base text-zinc-500 font-light">/mo</span>
</div>
<a className="w-full py-3 rounded-xl ring-1 ring-white/10 text-base font-light text-zinc-300 hover:bg-white hover:text-black hover:ring-white transition-all duration-300 tracking-tight text-center" href="https://discord.gg/KPRxv9vPcB" target="_blank">Order Now</a>
</div>
</div>
</div>

<div className="relative group h-full reveal-up" style={{transitionDelay: '300ms'}}>
<div className="absolute inset-0 bg-zinc-900/50 rounded-2xl ring-1 ring-white/5 group-hover:ring-orange-500/30 group-hover:bg-zinc-900/80 transition-all duration-500"></div>
<div className="relative p-8 flex flex-col h-full z-10">
<div className="flex items-center gap-3 mb-8">
<div className="p-2 rounded-lg bg-orange-500/10 text-orange-400/70 group-hover:text-orange-400 transition-colors duration-300">
<i className="w-6 h-6" data-lucide="database" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-normal text-white tracking-tight">Copper</h3>
</div>
<div className="space-y-4 mb-10 flex-grow">
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">RAM</span>
<span className="text-zinc-300 font-normal">8GB</span>
</div>
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">CPU</span>
<span className="text-zinc-300 font-normal">200%</span>
</div>
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">NVMe SSD</span>
<span className="text-zinc-300 font-normal">30GB</span>
</div>
</div>
<div className="pt-6 border-t border-white/5 flex flex-col gap-6 mt-auto">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-normal text-white tracking-tight">₹170</span>
<span className="text-base text-zinc-500 font-light">/mo</span>
</div>
<a className="w-full py-3 rounded-xl ring-1 ring-white/10 text-base font-light text-zinc-300 hover:bg-orange-500 hover:text-black hover:ring-orange-500 transition-all duration-300 tracking-tight text-center" href="https://discord.gg/KPRxv9vPcB" target="_blank">Order Now</a>
</div>
</div>
</div>

<div className="relative group h-full reveal-up" style={{transitionDelay: '400ms'}}>
<div className="absolute inset-0 bg-zinc-900/50 rounded-2xl ring-1 ring-white/5 group-hover:ring-zinc-400/40 group-hover:bg-zinc-900/80 transition-all duration-500"></div>
<div className="relative p-8 flex flex-col h-full z-10">
<div className="flex items-center gap-3 mb-8">
<div className="p-2 rounded-lg bg-zinc-500/10 text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300">
<i className="w-6 h-6" data-lucide="cpu" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-normal text-white tracking-tight">Iron</h3>
</div>
<div className="space-y-4 mb-10 flex-grow">
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">RAM</span>
<span className="text-zinc-300 font-normal">10GB</span>
</div>
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">CPU</span>
<span className="text-zinc-300 font-normal">350%</span>
</div>
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">NVMe SSD</span>
<span className="text-zinc-300 font-normal">40GB</span>
</div>
</div>
<div className="pt-6 border-t border-white/5 flex flex-col gap-6 mt-auto">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-normal text-white tracking-tight">₹250</span>
<span className="text-base text-zinc-500 font-light">/mo</span>
</div>
<a className="w-full py-3 rounded-xl ring-1 ring-white/10 text-base font-light text-zinc-300 hover:bg-zinc-200 hover:text-black hover:ring-zinc-200 transition-all duration-300 tracking-tight text-center" href="https://discord.gg/KPRxv9vPcB" target="_blank">Order Now</a>
</div>
</div>
</div>

<div className="relative group h-full reveal-up" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 bg-zinc-900/50 rounded-2xl ring-1 ring-white/5 group-hover:ring-amber-500/30 group-hover:bg-zinc-900/80 transition-all duration-500"></div>
<div className="relative p-8 flex flex-col h-full z-10">
<div className="flex items-center gap-3 mb-8">
<div className="p-2 rounded-lg bg-amber-500/10 text-amber-500/70 group-hover:text-amber-400 transition-colors duration-300">
<i className="w-6 h-6" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-normal text-white tracking-tight">Gold</h3>
</div>
<div className="space-y-4 mb-10 flex-grow">
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">RAM</span>
<span className="text-zinc-200 font-normal">16GB</span>
</div>
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">CPU</span>
<span className="text-zinc-200 font-normal">500%</span>
</div>
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">NVMe SSD</span>
<span className="text-zinc-200 font-normal">50GB</span>
</div>
</div>
<div className="pt-6 border-t border-white/5 flex flex-col gap-6 mt-auto">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-normal text-white tracking-tight">₹350</span>
<span className="text-base text-zinc-500 font-light">/mo</span>
</div>
<a className="w-full py-3 rounded-xl ring-1 ring-white/10 text-base font-light text-zinc-300 hover:bg-amber-500 hover:text-black hover:ring-amber-500 transition-all duration-300 tracking-tight text-center" href="https://discord.gg/KPRxv9vPcB" target="_blank">Order Now</a>
</div>
</div>
</div>

<div className="relative group h-full reveal-up" style={{transitionDelay: '200ms'}}>

<div className="absolute -inset-0.5 bg-gradient-to-b from-emerald-500/30 to-transparent rounded-2xl opacity-50 blur-sm group-hover:opacity-100 group-hover:blur-md transition duration-500"></div>
<div className="absolute inset-0 bg-zinc-900 rounded-2xl ring-1 ring-emerald-500/40 transition-all duration-500"></div>
<div className="relative p-8 flex flex-col h-full z-10">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
<i className="w-6 h-6" data-lucide="gem" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-normal text-white tracking-tight">Emerald</h3>
</div>
<span className="text-xs font-normal text-black bg-emerald-400 px-3 py-1 rounded-full tracking-tight">Popular</span>
</div>
<div className="space-y-4 mb-10 flex-grow">
<div className="flex items-center justify-between text-base">
<span className="text-zinc-400 font-light">RAM</span>
<span className="text-white font-normal">20GB</span>
</div>
<div className="flex items-center justify-between text-base">
<span className="text-zinc-400 font-light">CPU</span>
<span className="text-white font-normal">600%</span>
</div>
<div className="flex items-center justify-between text-base">
<span className="text-zinc-400 font-light">NVMe SSD</span>
<span className="text-white font-normal">60GB</span>
</div>
</div>
<div className="pt-6 border-t border-white/10 flex flex-col gap-6 mt-auto">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-normal text-white tracking-tight">₹400</span>
<span className="text-base text-zinc-400 font-light">/mo</span>
</div>
<a className="w-full py-3 rounded-xl bg-emerald-500 text-base font-normal text-black hover:bg-emerald-400 hover:scale-[1.02] transition-all duration-300 tracking-tight text-center shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]" href="https://discord.gg/KPRxv9vPcB" target="_blank">Order Now</a>
</div>
</div>
</div>

<div className="relative group h-full reveal-up" style={{transitionDelay: '300ms'}}>
<div className="absolute inset-0 bg-zinc-900/50 rounded-2xl ring-1 ring-white/5 group-hover:ring-cyan-500/30 group-hover:bg-zinc-900/80 transition-all duration-500"></div>
<div className="relative p-8 flex flex-col h-full z-10">
<div className="flex items-center gap-3 mb-8">
<div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500/70 group-hover:text-cyan-400 transition-colors duration-300">
<i className="w-6 h-6" data-lucide="diamond" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-normal text-white tracking-tight">Diamond</h3>
</div>
<div className="space-y-4 mb-10 flex-grow">
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">RAM</span>
<span className="text-zinc-200 font-normal">32GB</span>
</div>
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">CPU</span>
<span className="text-zinc-200 font-normal">700%</span>
</div>
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">NVMe SSD</span>
<span className="text-zinc-200 font-normal">70GB</span>
</div>
</div>
<div className="pt-6 border-t border-white/5 flex flex-col gap-6 mt-auto">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-normal text-white tracking-tight">₹520</span>
<span className="text-base text-zinc-500 font-light">/mo</span>
</div>
<a className="w-full py-3 rounded-xl ring-1 ring-white/10 text-base font-light text-zinc-300 hover:bg-cyan-500 hover:text-black hover:ring-cyan-500 transition-all duration-300 tracking-tight text-center" href="https://discord.gg/KPRxv9vPcB" target="_blank">Order Now</a>
</div>
</div>
</div>

<div className="relative group h-full reveal-up" style={{transitionDelay: '400ms'}}>
<div className="absolute inset-0 bg-zinc-900/50 rounded-2xl ring-1 ring-white/5 group-hover:ring-purple-500/30 group-hover:bg-zinc-900/80 transition-all duration-500"></div>
<div className="relative p-8 flex flex-col h-full z-10">
<div className="flex items-center gap-3 mb-8">
<div className="p-2 rounded-lg bg-purple-500/10 text-purple-500/70 group-hover:text-purple-400 transition-colors duration-300">
<i className="w-6 h-6" data-lucide="crown" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-normal text-white tracking-tight">Netherite</h3>
</div>
<div className="space-y-4 mb-10 flex-grow">
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">RAM</span>
<span className="text-zinc-200 font-normal">64GB</span>
</div>
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">CPU</span>
<span className="text-zinc-200 font-normal">800%</span>
</div>
<div className="flex items-center justify-between text-base">
<span className="text-zinc-500 font-light">NVMe SSD</span>
<span className="text-zinc-200 font-normal">150GB</span>
</div>
</div>
<div className="pt-6 border-t border-white/5 flex flex-col gap-6 mt-auto">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-normal text-white tracking-tight">₹900</span>
<span className="text-base text-zinc-500 font-light">/mo</span>
</div>
<a className="w-full py-3 rounded-xl ring-1 ring-white/10 text-base font-light text-zinc-300 hover:bg-purple-500 hover:text-white hover:ring-purple-500 transition-all duration-300 tracking-tight text-center" href="https://discord.gg/KPRxv9vPcB" target="_blank">Order Now</a>
</div>
</div>
</div>
</div>
</section>
</div>
</main>

<footer className="border-t border-white/5 bg-zinc-950 pt-20 pb-10 px-6 relative z-10">
<div className="max-w-7xl mx-auto reveal-up">
<div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
<div className="col-span-2">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 opacity-80">

<svg className="w-full h-full" viewbox="0 0 100 100">
<path d="M25 65 A15 15 0 0 1 30 40 A20 20 0 0 1 65 35 A18 18 0 0 1 80 60 Z" fill="none" stroke="#0ea5e9" strokeLinejoin="round" strokeWidth="4"></path>
<path d="M45 40 C 65 30, 75 60, 50 70 C 30 75, 25 45, 55 50" fill="none" stroke="#a855f7" strokeLinecap="round" strokeWidth="3"></path>
<circle cx="50" cy="50" fill="#fff" r="4"></circle>
</svg>
</div>
<div className="flex flex-col">
<span className="text-lg font-normal tracking-tight text-white leading-none">NEXORIFT</span>
<span className="text-[10px] font-light tracking-widest text-zinc-400 mt-1 uppercase leading-none">Cloud</span>
</div>
</div>
<p className="text-base text-zinc-500 font-light mb-6 max-w-sm leading-relaxed">Premium cloud infrastructure built for ultimate performance, unshakable reliability, and absolute speed.</p>
</div>
<div>
<h5 className="text-base font-normal text-white mb-6 tracking-tight">Products</h5>
<ul className="space-y-4 text-base text-zinc-500 font-light">
<li><a className="hover:text-white transition-colors duration-300" href="#">Minecraft Hosting</a></li>
<li><a className="hover:text-white transition-colors duration-300" href="#">Dedicated Servers</a></li>
<li><a className="hover:text-white transition-colors duration-300" href="#">VPS Hosting</a></li>
</ul>
</div>
<div>
<h5 className="text-base font-normal text-white mb-6 tracking-tight">Company</h5>
<ul className="space-y-4 text-base text-zinc-500 font-light">
<li><a className="hover:text-white transition-colors duration-300" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors duration-300" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors duration-300" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h5 className="text-base font-normal text-white mb-6 tracking-tight">Support</h5>
<ul className="space-y-4 text-base text-zinc-500 font-light">
<li><a className="hover:text-white transition-colors duration-300" href="https://discord.gg/KPRxv9vPcB" target="_blank">Discord</a></li>
<li><a className="hover:text-white transition-colors duration-300" href="#">Knowledge Base</a></li>
<li><a className="hover:text-white transition-colors duration-300" href="https://mcservers.in/" target="_blank">Client Portal</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-600 font-light">
<p>© 2024 NexoRift Cloud. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="hover:text-zinc-300 transition-colors duration-300" href="#"><i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i></a>
<a className="hover:text-zinc-300 transition-colors duration-300" href="https://discord.gg/KPRxv9vPcB" target="_blank"><i className="w-5 h-5" data-lucide="message-circle" strokeWidth="1.5"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
