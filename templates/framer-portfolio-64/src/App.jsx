import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // --- Custom Cursor ---
            const cursor = document.getElementById('custom-cursor');
            const cursorText = document.getElementById('cursor-text');
            let mouseX = window.innerWidth / 2;
            let mouseY = window.innerHeight / 2;
            let cursorX = mouseX;
            let cursorY = mouseY;
            
            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });

            function attachCursorEvents() {
                const hoverElements = document.querySelectorAll('.hover-view');
                hoverElements.forEach(el => {
                    // Prevent duplicate attachments
                    if(el.dataset.cursorAttached) return;
                    el.dataset.cursorAttached = 'true';

                    el.addEventListener('mouseenter', () => {
                        cursor.style.width = '80px';
                        cursor.style.height = '80px';
                        cursor.style.mixBlendMode = 'normal';
                        cursor.classList.remove('bg-white');
                        cursor.classList.add('bg-black/90', 'backdrop-blur-sm');
                        cursorText.style.opacity = '1';
                        cursorText.style.color = 'white';
                    });
                    
                    el.addEventListener('mouseleave', () => {
                        cursor.style.width = '12px';
                        cursor.style.height = '12px';
                        cursor.style.mixBlendMode = 'difference';
                        cursor.classList.add('bg-white');
                        cursor.classList.remove('bg-black/90', 'backdrop-blur-sm');
                        cursorText.style.opacity = '0';
                    });
                });
            }
            attachCursorEvents();

            // --- SPA Routing Logic (AnimatePresence Simulation) ---
            const links = document.querySelectorAll('[data-route]');
            let isAnimating = false;
            let currentRoute = 'home';

            links.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetRoute = link.getAttribute('data-route');
                    if(targetRoute === currentRoute || isAnimating) return;
                    
                    isAnimating = true;
                    const currentView = document.getElementById(`view-${currentRoute}`);
                    const targetView = document.getElementById(`view-${targetRoute}`);

                    // Exit Animation
                    currentView.classList.add('page-exit');
                    
                    setTimeout(() => {
                        currentView.classList.add('page-hidden');
                        currentView.classList.remove('page-exit');
                        
                        // Prepare Target
                        targetView.classList.remove('page-hidden');
                        targetView.classList.add('page-enter');
                        
                        // Force reflow
                        void targetView.offsetWidth;
                        
                        window.scrollTo({top: 0, behavior: 'instant'});

                        // Enter Animation
                        targetView.classList.remove('page-enter');
                        
                        currentRoute = targetRoute;
                        
                        setTimeout(() => {
                            isAnimating = false;
                            attachCursorEvents(); // Reattach if new elements
                        }, 600); // Match CSS transition duration

                    }, 600);
                });
            });


            // --- Home Hero Scroll Reveal ---
            let targetScrollProgress = 0;
            let currentScrollProgress = 0;
            const heroSection = document.getElementById('hero-section');
            const headlineContainer = document.getElementById('hero-headline-container');
            const mockupWrapper = document.getElementById('hero-mockup-wrapper');
            const mockupInner = document.getElementById('hero-mockup');

            // --- Parallax Logic ---
            const parallaxEls = document.querySelectorAll('.parallax-el');

            window.addEventListener('scroll', () => {
                // Home Hero logic (only active if home view)
                if(currentRoute === 'home' && heroSection) {
                    const rect = heroSection.getBoundingClientRect();
                    const scrollableDistance = rect.height - window.innerHeight;
                    let progress = -rect.top / scrollableDistance;
                    targetScrollProgress = Math.max(0, Math.min(1, progress));
                }

                // Parallax logic (only active if project view)
                if(currentRoute === 'project') {
                    parallaxEls.forEach(el => {
                        const speed = parseFloat(el.getAttribute('data-speed'));
                        const yPos = window.scrollY * speed;
                        el.style.transform = `translateY(${yPos}px)`;
                    });
                }
            });

            // Global Render Loop
            function render() {
                // Cursor easing
                cursorX += (mouseX - cursorX) * 0.15;
                cursorY += (mouseY - cursorY) * 0.15;
                cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;

                // Hero animation easing
                if(currentRoute === 'home' && headlineContainer) {
                    currentScrollProgress += (targetScrollProgress - currentScrollProgress) * 0.08;
                    const headlineScale = 1 - (currentScrollProgress * 0.2);
                    const headlineY = currentScrollProgress * 100; 
                    const headlineOpacity = Math.max(0, 1 - (currentScrollProgress * 2)); 
                    headlineContainer.style.transform = `scale(${headlineScale}) translateY(${headlineY}px)`;
                    headlineContainer.style.opacity = headlineOpacity;

                    const mockupScale = 0.8 + (currentScrollProgress * 0.2); 
                    const borderRadius = 32 * (1 - currentScrollProgress); 
                    mockupWrapper.style.transform = `scale(${mockupScale})`;
                    mockupInner.style.borderRadius = `${borderRadius}px ${borderRadius}px 0 0`;
                }

                requestAnimationFrame(render);
            }
            render();


            // --- Accordion Logic ---
            const accordionHeaders = document.querySelectorAll('.accordion-header');
            accordionHeaders.forEach(header => {
                header.addEventListener('click', () => {
                    const item = header.parentElement;
                    const isActive = item.classList.contains('active');
                    
                    // Close all
                    document.querySelectorAll('.accordion-item').forEach(el => el.classList.remove('active'));
                    
                    // Open clicked if wasn't active
                    if(!isActive) {
                        item.classList.add('active');
                    }
                });
            });


            // --- Live Warsaw Clock ---
            const clockEl = document.getElementById('warsaw-clock');
            function updateClock() {
                if(!clockEl) return;
                const now = new Date();
                const options = { timeZone: 'Europe/Warsaw', hour: '2-digit', minute: '2-digit', second: '2-digit' };
                clockEl.textContent = now.toLocaleTimeString('en-GB', options) + ' CET';
            }
            setInterval(updateClock, 1000);
            updateClock();
            
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-3 h-3 rounded-full" id="custom-cursor" style={{width: '12px', height: '12px', mixBlendMode: 'difference'}}>
<span className="text-black font-mono text-xs font-medium tracking-widest opacity-0 transition-opacity duration-300" id="cursor-text" style={{color: 'white'}}>VIEW</span>
</div>

<nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white px-6 py-6 transition-all duration-300">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<a className="text-base font-medium tracking-tight uppercase hover:opacity-70 transition-opacity" data-route="home" href="#home">
                SFE
            </a>
<div className="flex items-center gap-8">
<a className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity" data-route="services" href="#services">Services</a>
<a className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity" data-route="about" href="#about">About</a>
<a className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity" data-route="contact" href="#contact">Contact</a>
<div className="flex items-center gap-2 text-xs font-mono ml-4 border border-white/20 rounded-full px-3 py-1.5 hidden md:flex">
<button className="font-medium opacity-100 hover:opacity-70 transition-opacity">EN</button>
<span className="opacity-30">/</span>
<button className="font-medium opacity-40 hover:opacity-100 transition-opacity">PL</button>
</div>
</div>
</div>
</nav>

<div className="" id="app-container">

<main className="page-view block" id="view-home">
<section className="relative h-[250vh]" id="hero-section">
<div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20">
<div className="relative z-10 w-full max-w-4xl px-6 text-center transform-gpu" id="hero-headline-container">
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-5xl font-medium text-black tracking-tight">
                            Bespoke interfaces designed in Figma, brought to life in Framer
                        </h1>
</div>
<div className="absolute bottom-0 w-full h-[60vh] md:h-[70vh] flex justify-center items-end transform-gpu origin-bottom z-20" id="hero-mockup-wrapper">
<div className="w-full h-full bg-[#FAFAFA] border-t border-l border-r border-gray-200 overflow-hidden relative shadow-2xl bg-grid flex flex-col" id="hero-mockup" style={{borderRadius: '32px 32px 0px 0px'}}>
<div className="w-full h-12 border-b border-gray-200 bg-white/80 backdrop-blur-md flex items-center px-6 gap-2">
<div className="w-3 h-3 rounded-full bg-gray-200"></div>
<div className="w-3 h-3 rounded-full bg-gray-200"></div>
<div className="w-3 h-3 rounded-full bg-gray-200"></div>
</div>
<div className="flex-1 p-8 flex items-center justify-center">
<div className="w-full max-w-2xl h-full border border-gray-100 bg-white rounded-2xl shadow-sm p-8 flex flex-col gap-6">
<div className="w-1/3 h-6 bg-gray-100 rounded-md"></div>
<div className="w-full h-32 bg-gray-50 rounded-xl"></div>
<div className="w-2/3 h-4 bg-gray-100 rounded-md"></div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-[160px] bg-white relative z-30">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-16">Selected Works</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[400px]">

<a className="md:col-span-2 relative group overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 hover-view flex flex-col block" data-cursor-attached="true" data-route="project" href="#project">
<div className="p-8 flex justify-between items-start z-10 relative">
<div className="">
<span className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-2 block">[Fintech App]</span>
<h3 className="text-2xl font-medium tracking-tight">Nova Finance</h3>
</div>
<iconify-icon className="text-2xl text-gray-400 group-hover:text-black transition-colors" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1 mt-auto mx-8 mb-0 rounded-t-xl bg-white border-t border-l border-r border-gray-200 shadow-sm relative overflow-hidden bg-grid"></div>
</a>

<a className="relative group overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 hover-view flex flex-col block" data-cursor-attached="true" data-route="project" href="#project">
<div className="p-8 z-10 relative">
<span className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-2 block">[SaaS Platform]</span>
<h3 className="text-xl font-medium tracking-tight">Metrics Pro</h3>
</div>
<div className="flex-1 m-6 mt-0 rounded-xl bg-white border border-gray-200 shadow-sm bg-grid"></div>
</a>
</div>
</div>
</section>
</main>

<main className="page-view page-hidden pt-32 pb-[160px]" id="view-services">
<div className="max-w-4xl mx-auto px-6">
<h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-16">Capabilities &amp; Detail</h1>
<div className="flex flex-col border-t border-gray-200">

<div className="accordion-item border-b border-gray-200">
<div className="accordion-header py-8 flex justify-between items-center hover:opacity-70 transition-opacity">
<h2 className="text-2xl font-medium tracking-tight">Framer Development</h2>
<iconify-icon className="icon-plus text-2xl transition-transform duration-300 text-gray-400" icon="solar:add-linear"></iconify-icon>
</div>
<div className="accordion-content overflow-hidden">
<div className="pb-8 text-sm text-gray-500 leading-relaxed max-w-2xl">
<p className="mb-8">Transitioning from legacy CMS platforms to modern React-based infrastructure ensures superior performance and security.</p>

<div className="w-full border border-gray-200 rounded-xl overflow-hidden bg-white">
<div className="grid grid-cols-3 border-b border-gray-200 bg-gray-50 text-xs font-mono uppercase tracking-widest text-gray-400 p-4">
<div>Metric</div>
<div>Framer</div>
<div>WordPress</div>
</div>
<div className="grid grid-cols-3 border-b border-gray-100 p-4 text-sm items-center">
<div className="font-medium text-black">Speed (LCP)</div>
<div className="text-emerald-500">~0.8s</div>
<div className="text-orange-500">~2.4s</div>
</div>
<div className="grid grid-cols-3 border-b border-gray-100 p-4 text-sm items-center">
<div className="font-medium text-black">Security</div>
<div className="text-gray-500">Serverless / Edge</div>
<div className="text-gray-500">Plugin Vulnerabilities</div>
</div>
<div className="grid grid-cols-3 p-4 text-sm items-center">
<div className="font-medium text-black">Design Fidelity</div>
<div className="text-gray-500">1:1 with Figma</div>
<div className="text-gray-500">Theme Dependent</div>
</div>
</div>
</div>
</div>
</div>

<div className="accordion-item border-b border-gray-200">
<div className="accordion-header py-8 flex justify-between items-center hover:opacity-70 transition-opacity">
<h2 className="text-2xl font-medium tracking-tight">Design Systems</h2>
<iconify-icon className="icon-plus text-2xl transition-transform duration-300 text-gray-400" icon="solar:add-linear"></iconify-icon>
</div>
<div className="accordion-content overflow-hidden">
<div className="pb-8 text-sm text-gray-500 leading-relaxed max-w-2xl">
<p>Building scalable, token-based design systems in Figma that translate directly into Framer components. Ensuring consistency across breakpoints and thematic variations.</p>
</div>
</div>
</div>
</div>
</div>
</main>

<main className="page-view page-hidden pt-32 pb-[160px] min-h-screen flex items-center" id="view-about">
<div className="max-w-7xl mx-auto px-6 w-full">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center">

<div className="flex flex-col gap-8 max-w-lg">
<span className="font-mono text-xs uppercase tracking-widest text-gray-400">[Biography]</span>
<h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.2] text-black">
                            A decade of crafting pixel-perfect interfaces in Figma, now seamlessly translating them into high-performance Framer experiences.
                        </h1>
<p className="text-base text-gray-500 leading-relaxed font-light">
                            Bridging the gap between conceptual design and production-ready code. Focusing on micro-interactions, robust architecture, and uncompromised aesthetic fidelity.
                        </p>
</div>

<div className="relative h-[60vh] overflow-hidden rounded-3xl bg-gray-50 border border-gray-100 flex gap-4 p-4 mask-image-vertical">
<div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-transparent to-gray-50 z-10 pointer-events-none"></div>

<div className="flex-1 flex flex-col gap-4 animate-marquee pt-10">
<div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm text-center font-mono text-sm tracking-tight text-gray-600">Framer</div>
<div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm text-center font-mono text-sm tracking-tight text-gray-600">React</div>
<div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm text-center font-mono text-sm tracking-tight text-gray-600">Figma</div>
<div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm text-center font-mono text-sm tracking-tight text-gray-600">Next.js</div>

<div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm text-center font-mono text-sm tracking-tight text-gray-600">Framer</div>
<div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm text-center font-mono text-sm tracking-tight text-gray-600">React</div>
</div>

<div className="flex-1 flex flex-col gap-4 animate-marquee-reverse">
<div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm text-center font-mono text-sm tracking-tight text-gray-600">Tailwind</div>
<div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm text-center font-mono text-sm tracking-tight text-gray-600">Vercel</div>
<div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm text-center font-mono text-sm tracking-tight text-gray-600">Supabase</div>
<div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm text-center font-mono text-sm tracking-tight text-gray-600">GSAP</div>

<div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm text-center font-mono text-sm tracking-tight text-gray-600">Tailwind</div>
<div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm text-center font-mono text-sm tracking-tight text-gray-600">Vercel</div>
</div>
</div>
</div>
</div>
</main>

<main className="page-view page-hidden pt-32 pb-[160px] min-h-screen flex flex-col" id="view-contact">
<div className="max-w-3xl mx-auto w-full px-6 flex-1 flex flex-col justify-center">

<div className="flex items-center justify-between border border-gray-200 rounded-full px-6 py-3 mb-16 bg-gray-50 w-full max-w-sm">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-medium tracking-tight text-gray-600">Available for work</span>
</div>
<span className="text-xs font-mono tracking-widest text-gray-400 uppercase" id="warsaw-clock">11:09:59 CET</span>
</div>
<h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-16">Let's build.</h1>

<form className="flex flex-col gap-12">
<div className="relative">
<input className="w-full bg-transparent border-b border-gray-200 py-4 text-lg outline-none focus:border-black transition-colors rounded-none text-black placeholder-gray-300" placeholder="Name" type="text"/>
</div>
<div className="relative">
<input className="w-full bg-transparent border-b border-gray-200 py-4 text-lg outline-none focus:border-black transition-colors rounded-none text-black placeholder-gray-300" placeholder="Email" type="email"/>
</div>
<div className="relative">
<textarea className="w-full bg-transparent border-b border-gray-200 py-4 text-lg outline-none focus:border-black transition-colors rounded-none text-black placeholder-gray-300 resize-none" placeholder="Project Details" rows="1"></textarea>
</div>
<div className="pt-8">
<button className="group flex items-center gap-4 text-lg font-medium tracking-tight hover:opacity-70 transition-opacity" type="button">
                            Submit Request 
                            <iconify-icon className="text-xl group-hover:translate-x-2 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</form>
</div>
</main>

<main className="page-view page-hidden bg-white" id="view-project">

<section className="min-h-screen pt-32 px-6 flex flex-col max-w-7xl mx-auto">
<h1 className="text-6xl md:text-8xl font-medium tracking-tight text-black mb-16 uppercase">Nova Finance</h1>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 border-t border-gray-200 pt-8">
<div>
<span className="block text-xs font-mono uppercase tracking-widest text-gray-400 mb-2">Client</span>
<span className="block text-sm font-medium">Nova Inc.</span>
</div>
<div>
<span className="block text-xs font-mono uppercase tracking-widest text-gray-400 mb-2">Role</span>
<span className="block text-sm font-medium">Design &amp; Dev</span>
</div>
<div>
<span className="block text-xs font-mono uppercase tracking-widest text-gray-400 mb-2">Year</span>
<span className="block text-sm font-medium">2024</span>
</div>
<div>
<span className="block text-xs font-mono uppercase tracking-widest text-gray-400 mb-2">Link</span>
<a className="block text-sm font-medium underline underline-offset-4 hover:opacity-70" href="#">Visit Live Site</a>
</div>
</div>
<div className="w-full flex-1 bg-gray-100 rounded-2xl mb-12 relative overflow-hidden bg-grid flex items-center justify-center">
<span className="text-sm font-mono text-gray-400 tracking-widest uppercase">Video / Image Placeholder</span>
</div>
</section>

<section className="py-[160px] max-w-7xl mx-auto px-6 border-t border-gray-100">
<h2 className="text-3xl font-medium tracking-tight mb-16">Design System</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
<div className="flex flex-col gap-8">
<span className="text-xs font-mono uppercase tracking-widest text-gray-400">Typography</span>
<div className="border border-gray-200 rounded-xl p-8 bg-gray-50 flex flex-col gap-6">
<div className="text-4xl font-medium tracking-tight text-black">Aa</div>
<div className="text-sm text-gray-500 font-mono">Inter / Semibold / -2% Tracking</div>
</div>
</div>
<div className="flex flex-col gap-8">
<span className="text-xs font-mono uppercase tracking-widest text-gray-400">Colors</span>
<div className="flex gap-4">
<div className="w-24 h-24 rounded-full bg-black border border-gray-200 flex items-center justify-center shadow-sm"><span className="text-[10px] text-white font-mono opacity-50">#000</span></div>
<div className="w-24 h-24 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center shadow-sm"><span className="text-[10px] text-black font-mono opacity-50">#F3F4F6</span></div>
<div className="w-24 h-24 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm"><span className="text-[10px] text-black font-mono opacity-50">#FFF</span></div>
</div>
</div>
</div>
</section>

<section className="py-[160px] bg-gray-50 overflow-hidden">
<div className="max-w-5xl mx-auto px-6 flex flex-col gap-32">
<div className="w-full h-[60vh] bg-white border border-gray-200 rounded-2xl shadow-sm parallax-el bg-grid" data-speed="0.05"></div>
<div className="w-3/4 h-[50vh] bg-white border border-gray-200 rounded-2xl shadow-sm self-end parallax-el bg-grid" data-speed="-0.03"></div>
<div className="w-full h-[80vh] bg-white border border-gray-200 rounded-2xl shadow-sm parallax-el bg-grid" data-speed="0.08"></div>
</div>
</section>

<section className="py-[160px] max-w-7xl mx-auto px-6">
<div className="bg-black rounded-3xl p-12 md:p-16 flex flex-col md:flex-row gap-16 items-center">
<div className="flex-1 flex flex-col gap-6">
<span className="text-xs font-mono uppercase tracking-widest text-gray-400">[Architecture]</span>
<h2 className="text-3xl font-medium tracking-tight text-white">Shopify API Integration</h2>
<p className="text-sm text-gray-400 leading-relaxed font-light">
                            Headless commerce implementation natively within Framer using custom React components and Shopify's Storefront API to ensure sub-second cart updates.
                        </p>
</div>
<div className="flex-1 w-full bg-[#111] border border-white/10 rounded-xl p-6 font-mono text-xs text-gray-400 leading-loose overflow-x-auto shadow-2xl">
<pre><code><span className="text-blue-400">const</span> fetchProduct = <span className="text-blue-400">async</span> (id) =&gt; {
  <span className="text-blue-400">const</span> res = <span className="text-blue-400">await</span> fetch(API_URL, {
    method: <span className="text-green-400">'POST'</span>,
    headers: { <span className="text-green-400">'X-Shopify-Token'</span>: TOKEN },
    body: JSON.stringify({ query: PRODUCT_QUERY })
  });
  <span className="text-blue-400">return</span> res.json();
}</code></pre>
</div>
</div>
</section>

<section className="relative h-screen border-t border-gray-200 bg-white flex items-center justify-center overflow-hidden hover-view group" data-cursor-attached="true" id="next-project-cta">
<div className="absolute inset-0 bg-grid opacity-30 z-0"></div>
<div className="z-10 text-center mix-blend-difference pointer-events-none">
<span className="block text-sm font-mono uppercase tracking-widest text-white mb-6 opacity-50">Next Project</span>
<h2 className="text-[10vw] font-medium tracking-tighter leading-none text-white">METRICS PRO</h2>
</div>

<div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 bg-center bg-cover scale-105 group-hover:scale-100 transition-transform" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(\'data:image/svg+xml', svg xmlns=\'http: '//www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\'&gt'}}></div>
</section>
</main>
</div> 

<footer className="py-12 border-t border-gray-100 bg-white relative z-40">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                © 2024 Senior Framer Expert
            </div>
<div className="flex gap-6">
<a className="text-xs font-medium text-gray-500 hover:text-black transition-colors uppercase tracking-widest" href="#">Twitter</a>
<a className="text-xs font-medium text-gray-500 hover:text-black transition-colors uppercase tracking-widest" href="#">LinkedIn</a>
<a className="text-xs font-medium text-gray-500 hover:text-black transition-colors uppercase tracking-widest" href="#">Email</a>
</div>
</div>
</footer>



    </>
  );
}
