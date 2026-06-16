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

        // Interactive Mobile Menu Logic
        const openMenuBtn = document.getElementById('open-menu');
        const closeMenuBtn = document.getElementById('close-menu');
        const mobileMenu = document.getElementById('mobile-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        function toggleMenu() {
            const isOpen = mobileMenu.classList.contains('opacity-100');
            
            if (isOpen) {
                // Close menu
                mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                document.body.style.overflow = ''; // Restore scrolling
            } else {
                // Open menu
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            }
        }

        openMenuBtn.addEventListener('click', toggleMenu);
        closeMenuBtn.addEventListener('click', toggleMenu);

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if(mobileMenu.classList.contains('opacity-100')) {
                    toggleMenu();
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-[#050505] z-[100] flex flex-col justify-center items-center opacity-0 pointer-events-none transition-opacity duration-500" id="mobile-menu">
<button className="absolute top-8 right-8 text-white hover:text-[#FF3000] transition-colors" id="close-menu">
<i className="w-8 h-8" data-lucide="x" strokeWidth="1.5"></i>
</button>
<div className="flex flex-col items-center gap-8 text-4xl md:text-6xl font-semibold tracking-tight uppercase text-white">
<a className="hover:text-[#FF3000] transition-colors nav-link" href="#work">Work</a>
<a className="hover:text-[#FF3000] transition-colors nav-link" href="#about">About</a>
<a className="hover:text-[#FF3000] transition-colors nav-link" href="#services">Services</a>
<a className="hover:text-[#FF3000] transition-colors nav-link" href="#labs">Labs</a>
<a className="hover:text-[#FF3000] transition-colors nav-link" href="#contact">Contact</a>
</div>
</div>

<header className="fixed top-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference text-white">

<a className="flex items-center gap-3 group relative z-50" href="#">
<i className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" data-lucide="crosshair" strokeWidth="1.5"></i>
<span className="text-sm font-semibold tracking-widest uppercase">Ethan <span className="text-[#FF3000]">/</span> Clark®</span>
</a>

<nav className="hidden lg:flex items-center gap-10">
<a className="text-xs font-medium tracking-widest uppercase text-neutral-400 hover:text-white transition-colors" href="#work">Work</a>
<a className="text-xs font-medium tracking-widest uppercase text-neutral-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-xs font-medium tracking-widest uppercase text-neutral-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-xs font-medium tracking-widest uppercase text-neutral-400 hover:text-white transition-colors" href="#labs">Labs</a>
<a className="text-xs font-medium tracking-widest uppercase text-neutral-400 hover:text-white transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-6 relative z-50">
<a className="hidden md:flex bg-[#FF3000] text-white text-xs font-semibold tracking-widest uppercase px-6 py-4 items-center gap-3 hover:bg-white hover:text-black transition-colors duration-300" href="#contact">
                Let's Work Together
                <span className="w-1.5 h-1.5 bg-current rounded-full"></span>
</a>
<button className="lg:hidden text-white hover:text-[#FF3000] transition-colors" id="open-menu">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</header>
<main>

<section className="relative min-h-screen w-full flex items-center pt-24 pb-12 overflow-hidden">

<div className="absolute inset-0 md:left-[35%] z-0">
<img alt="Abstract fluid smoke background" className="w-full h-full object-cover opacity-40 mix-blend-luminosity grayscale contrast-150" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent"></div>
</div>

<div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 h-full">

<div className="md:col-span-8 lg:col-span-7 flex flex-col justify-center h-full">

<div className="flex items-center gap-6 md:gap-12 mb-12 md:mb-20">
<div className="flex -space-x-2 opacity-50">
<div className="w-6 h-6 rounded-full border border-current"></div>
<div className="w-6 h-6 rounded-full border border-current"></div>
<div className="w-6 h-6 rounded-full border border-current"></div>
<div className="w-6 h-6 rounded-full border border-current"></div>
</div>
<span className="text-xs font-light tracking-widest uppercase text-neutral-500">Based in New York</span>
<span className="text-xs font-light tracking-widest uppercase text-neutral-500 hidden sm:block">40.7128° N, 74.0060° W</span>
</div>

<div className="flex items-center gap-4 mb-6">
<span className="text-xs font-semibold tracking-widest uppercase text-neutral-400">Web Designer</span>
<span className="w-1.5 h-1.5 bg-[#FF3000] rounded-full"></span>
<div className="h-px w-16 bg-neutral-800"></div>
</div>

<h1 className="text-6xl sm:text-7xl md:text-[7rem] lg:text-[8rem] xl:text-[9rem] leading-[0.9] font-semibold tracking-tight text-white uppercase mb-8">
                        Design That<br/>Moves<br/>Digital
                    </h1>

<p className="text-lg font-light text-neutral-400 max-w-md leading-relaxed mb-12">
                        I design and build digital experiences that are fast, functional, and visually unforgettable.
                    </p>

<div className="flex flex-wrap items-center gap-8 md:gap-12 mb-20 md:mb-0">
<a className="flex items-center gap-3 text-xs font-semibold tracking-widest uppercase text-white hover:text-[#FF3000] transition-colors group" href="#work">
                            Explore My Work
                            <i className="w-4 h-4 text-[#FF3000] group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<div className="flex gap-2">
<img alt="Work thumbnail 1" className="w-10 h-10 object-cover grayscale hover:grayscale-0 transition duration-500 cursor-pointer border border-neutral-800" src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="Work thumbnail 2" className="w-10 h-10 object-cover grayscale hover:grayscale-0 transition duration-500 cursor-pointer border border-neutral-800" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="Work thumbnail 3" className="w-10 h-10 object-cover grayscale hover:grayscale-0 transition duration-500 cursor-pointer border border-neutral-800" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>

<div className="hidden md:flex items-center gap-4 mt-auto pt-12">
<img alt="Ethan Clark profile" className="w-12 h-12 rounded-full object-cover grayscale border border-neutral-800" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-light text-neutral-300">Available for new projects</span>
<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
</div>
<div className="text-xs font-light text-neutral-500">Let's create something bold.</div>
</div>
</div>
</div>


<div className="absolute right-4 bottom-32 md:right-[25%] md:bottom-[20%] w-48 h-48 md:w-64 md:h-64 bg-[#FF3000] flex items-end justify-start p-6 shadow-2xl z-20 group cursor-pointer hover:bg-white transition-colors duration-500">
<i className="w-10 h-10 text-white group-hover:text-[#FF3000] transition-colors" data-lucide="arrow-down-left" strokeWidth="1.5"></i>
</div>

<div className="hidden xl:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-20">
<div className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-[#FF3000] rounded-full"></span>
<span className="text-xs font-mono text-white">01</span>
</div>
<div className="w-px h-6 bg-neutral-600"></div>
<span className="text-xs font-mono text-neutral-500">02</span>
<div className="w-px h-6 bg-neutral-600"></div>
<span className="text-xs font-mono text-neutral-500">03</span>
<span className="text-xs font-semibold tracking-widest text-[#FF3000] uppercase mt-12 [writing-mode:vertical-lr] rotate-180">Home</span>
</div>

<div className="absolute right-6 bottom-6 md:right-12 md:bottom-12 z-20 flex items-center justify-center">
<div className="relative w-28 h-28 md:w-36 md:h-36">
<svg className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]" viewbox="0 0 100 100">
<path d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" id="circlePath"></path>
<text className="text-[0.45rem] font-mono tracking-[0.25em] fill-neutral-400 uppercase">
<textpath href="#circlePath" startoffset="0%">Available for freelance • Available for freelance • </textpath>
</text>
</svg>
<div className="absolute inset-0 flex items-center justify-center text-white">
<i className="w-8 h-8 opacity-50" data-lucide="globe" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="hidden xl:block absolute right-32 bottom-24 z-20">
<p className="text-[10px] text-neutral-500 font-light max-w-[150px] [writing-mode:vertical-lr] rotate-180 leading-relaxed uppercase tracking-widest opacity-50">
                        Crafting digital experiences that connect brands with people through design and technology.
                    </p>
<div className="h-12 w-px bg-neutral-800 mt-6 ml-auto mr-auto"></div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
<span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">[ Scroll to discover ]</span>
</div>
</div>
</section>

<section className="py-24 md:py-40 px-6 md:px-12 bg-black border-t border-neutral-900 relative" id="work">
<div className="max-w-screen-2xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
<div>
<span className="text-xs font-mono text-[#FF3000] block mb-4">01 / PORTFOLIO</span>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-white uppercase">Selected<br/>Work</h2>
</div>
<a className="text-xs font-semibold tracking-widest uppercase border-b border-neutral-700 pb-1 hover:border-white hover:text-white transition-colors" href="#">View All Projects</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

<div className="group cursor-pointer">
<div className="relative overflow-hidden bg-neutral-900 aspect-[4/3] mb-6">
<img alt="Project 1" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-[#FF3000]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
<div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
<i className="w-5 h-5 text-black" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl font-semibold text-white uppercase tracking-tight mb-2 group-hover:text-[#FF3000] transition-colors">Nexus FinTech</h3>
<p className="text-sm font-light text-neutral-500">Digital Platform, UI/UX</p>
</div>
<span className="text-xs font-mono text-neutral-600">2023</span>
</div>
</div>

<div className="group cursor-pointer md:mt-32">
<div className="relative overflow-hidden bg-neutral-900 aspect-[4/3] mb-6">
<img alt="Project 2" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#FF3000]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
<div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
<i className="w-5 h-5 text-black" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl font-semibold text-white uppercase tracking-tight mb-2 group-hover:text-[#FF3000] transition-colors">Aether Architecture</h3>
<p className="text-sm font-light text-neutral-500">Web Design, Creative Direction</p>
</div>
<span className="text-xs font-mono text-neutral-600">2023</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-40 px-6 md:px-12 bg-[#050505] relative" id="services">
<div className="max-w-screen-2xl mx-auto">
<span className="text-xs font-mono text-[#FF3000] block mb-12">02 / EXPERTISE</span>
<div className="flex flex-col border-t border-neutral-900">

<div className="group border-b border-neutral-900 py-10 md:py-16 hover:bg-neutral-950 transition-colors duration-500 px-4 -mx-4 cursor-crosshair">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
<div className="md:col-span-2 text-xl font-mono text-neutral-600 group-hover:text-[#FF3000] transition-colors">01</div>
<div className="md:col-span-6">
<h3 className="text-4xl md:text-5xl font-semibold text-white uppercase tracking-tight mb-4">Digital Design</h3>
<p className="text-lg font-light text-neutral-400 max-w-md opacity-0 h-0 overflow-hidden group-hover:opacity-100 group-hover:h-auto transition-all duration-500 ease-in-out">Crafting intuitive, pixel-perfect user interfaces that align with your brand identity and drive user engagement.</p>
</div>
<div className="md:col-span-4 flex justify-end">
<div className="w-16 h-16 rounded-full border border-neutral-800 flex items-center justify-center group-hover:bg-[#FF3000] group-hover:border-[#FF3000] transition-colors duration-500">
<i className="w-6 h-6 text-white group-hover:rotate-45 transition-transform duration-500" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>

<div className="group border-b border-neutral-900 py-10 md:py-16 hover:bg-neutral-950 transition-colors duration-500 px-4 -mx-4 cursor-crosshair">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
<div className="md:col-span-2 text-xl font-mono text-neutral-600 group-hover:text-[#FF3000] transition-colors">02</div>
<div className="md:col-span-6">
<h3 className="text-4xl md:text-5xl font-semibold text-white uppercase tracking-tight mb-4">Creative Direction</h3>
<p className="text-lg font-light text-neutral-400 max-w-md opacity-0 h-0 overflow-hidden group-hover:opacity-100 group-hover:h-auto transition-all duration-500 ease-in-out">Guiding the visual language and overall strategic vision to ensure a cohesive and impactful brand presence.</p>
</div>
<div className="md:col-span-4 flex justify-end">
<div className="w-16 h-16 rounded-full border border-neutral-800 flex items-center justify-center group-hover:bg-[#FF3000] group-hover:border-[#FF3000] transition-colors duration-500">
<i className="w-6 h-6 text-white group-hover:rotate-45 transition-transform duration-500" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>

<div className="group border-b border-neutral-900 py-10 md:py-16 hover:bg-neutral-950 transition-colors duration-500 px-4 -mx-4 cursor-crosshair">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
<div className="md:col-span-2 text-xl font-mono text-neutral-600 group-hover:text-[#FF3000] transition-colors">03</div>
<div className="md:col-span-6">
<h3 className="text-4xl md:text-5xl font-semibold text-white uppercase tracking-tight mb-4">Front-End Dev</h3>
<p className="text-lg font-light text-neutral-400 max-w-md opacity-0 h-0 overflow-hidden group-hover:opacity-100 group-hover:h-auto transition-all duration-500 ease-in-out">Bringing designs to life with clean, performant code, smooth animations, and robust modern frameworks.</p>
</div>
<div className="md:col-span-4 flex justify-end">
<div className="w-16 h-16 rounded-full border border-neutral-800 flex items-center justify-center group-hover:bg-[#FF3000] group-hover:border-[#FF3000] transition-colors duration-500">
<i className="w-6 h-6 text-white group-hover:rotate-45 transition-transform duration-500" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-64 px-6 bg-[#FF3000] flex items-center justify-center text-center relative overflow-hidden group" id="about">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-multiply pointer-events-none"></div>
<h2 className="text-5xl sm:text-7xl md:text-[6rem] lg:text-[8rem] font-semibold tracking-tight text-black uppercase leading-[0.85] max-w-6xl relative z-10 transition-transform duration-700 group-hover:scale-105">
                We Don't Just Build Websites.<br/>
<span className="text-white">We Craft Digital Ecosystems.</span>
</h2>
</section>

<section className="py-24 md:py-40 px-6 md:px-12 bg-[#050505] border-b border-neutral-900 relative">
<div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-4 relative">
<div className="sticky top-32">
<span className="text-xs font-mono text-[#FF3000] block mb-4">03 / EXPERIENCE</span>
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-white uppercase mb-8">Career<br/>Timeline</h2>
<p className="text-lg font-light text-neutral-400 max-w-sm">A decade of refining the intersection between aesthetic design and functional engineering.</p>
</div>
</div>
<div className="lg:col-span-8 flex flex-col gap-12">

<div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-start pb-12 border-b border-neutral-900 group">
<div className="sm:col-span-1 text-sm font-mono text-neutral-500 mt-2">2021 — Present</div>
<div className="sm:col-span-3">
<h3 className="text-2xl font-semibold text-white uppercase tracking-tight mb-2 group-hover:text-[#FF3000] transition-colors">Independent Web Designer</h3>
<p className="text-lg font-light text-neutral-400 mb-6">Partnering with ambitious brands and startups globally to design premium web experiences.</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 border border-neutral-800 rounded-full text-xs text-neutral-400">Design Direction</span>
<span className="px-3 py-1 border border-neutral-800 rounded-full text-xs text-neutral-400">Webflow</span>
<span className="px-3 py-1 border border-neutral-800 rounded-full text-xs text-neutral-400">React</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-start pb-12 border-b border-neutral-900 group">
<div className="sm:col-span-1 text-sm font-mono text-neutral-500 mt-2">2018 — 2021</div>
<div className="sm:col-span-3">
<h3 className="text-2xl font-semibold text-white uppercase tracking-tight mb-2 group-hover:text-[#FF3000] transition-colors">Senior Designer @ Studio Nu</h3>
<p className="text-lg font-light text-neutral-400 mb-6">Led design systems and interactive projects for enterprise clients, winning multiple Awwwards.</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 border border-neutral-800 rounded-full text-xs text-neutral-400">UI/UX</span>
<span className="px-3 py-1 border border-neutral-800 rounded-full text-xs text-neutral-400">Prototyping</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-start pb-12 border-b border-neutral-900 group">
<div className="sm:col-span-1 text-sm font-mono text-neutral-500 mt-2">2015 — 2018</div>
<div className="sm:col-span-3">
<h3 className="text-2xl font-semibold text-white uppercase tracking-tight mb-2 group-hover:text-[#FF3000] transition-colors">Front-end Developer @ TechCorp</h3>
<p className="text-lg font-light text-neutral-400 mb-6">Developed scalable web applications focusing on extreme performance and accessibility.</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 border border-neutral-800 rounded-full text-xs text-neutral-400">JavaScript</span>
<span className="px-3 py-1 border border-neutral-800 rounded-full text-xs text-neutral-400">Vue.js</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-40 px-6 md:px-12 bg-black relative" id="labs">
<div className="max-w-screen-2xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
<div>
<span className="text-xs font-mono text-[#FF3000] block mb-4">04 / LABS</span>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-white uppercase">Visual<br/>Experiments</h2>
</div>
<div className="text-lg font-light text-neutral-400 max-w-sm">Explorations in WebGL, motion design, and creative coding.</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="block group relative overflow-hidden bg-neutral-900 aspect-square" href="#">
<img alt="Lab 1" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-sm font-semibold tracking-widest text-white uppercase border border-white px-6 py-3">View Code</span>
</div>
</a>

<a className="block group relative overflow-hidden bg-neutral-900 aspect-square" href="#">
<img alt="Lab 2" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-sm font-semibold tracking-widest text-white uppercase border border-white px-6 py-3">View Code</span>
</div>
</a>

<a className="block group relative overflow-hidden bg-neutral-900 aspect-square sm:col-span-2 lg:col-span-1" href="#">
<img alt="Lab 3" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-sm font-semibold tracking-widest text-white uppercase border border-white px-6 py-3">View Code</span>
</div>
</a>
</div>
</div>
</section>

<footer className="bg-[#050505] pt-32 pb-12 px-6 md:px-12 border-t border-neutral-900" id="contact">
<div className="max-w-screen-2xl mx-auto flex flex-col items-center text-center">
<span className="w-3 h-3 bg-green-500 rounded-full animate-pulse mb-8"></span>
<h2 className="text-6xl sm:text-7xl md:text-[8rem] font-semibold tracking-tight text-white uppercase leading-none mb-12 hover:text-[#FF3000] transition-colors duration-500 cursor-pointer">
                    Let's Talk
                </h2>
<a className="text-xl md:text-3xl font-light text-neutral-400 hover:text-white border-b border-transparent hover:border-white pb-1 transition-all mb-32" href="mailto:hello@ethanclark.com">
                    hello@ethanclark.com
                </a>

<div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-neutral-900">
<div className="flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-white">
<i className="w-4 h-4" data-lucide="crosshair" strokeWidth="1.5"></i>
                        Ethan <span className="text-[#FF3000]">/</span> Clark®
                    </div>
<div className="flex gap-8 text-xs font-medium tracking-widest text-neutral-500 uppercase">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Dribbble</a>
</div>
<p className="text-xs font-mono text-neutral-600">
                        © 2024. All rights reserved.
                    </p>
</div>
</div>
</footer>
</main>


    </>
  );
}
