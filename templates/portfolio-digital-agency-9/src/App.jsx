import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons with proper stroke width
        lucide.createIcons({
            attrs: { 'stroke-width': 1.5 }
        });

        // Initialize Lenis Smooth Scroll
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Custom Cursor Logic
        const cursor = document.getElementById('custom-cursor');
        const cursorDot = document.getElementById('custom-cursor-dot');
        const interactives = document.querySelectorAll('.interactive, a, button');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            cursorDot.style.left = e.clientX + 'px';
            cursorDot.style.top = e.clientY + 'px';
        });

        interactives.forEach(el => {
            el.addEventListener('mouseenter', () => {
                document.body.classList.add('cursor-hover');
                cursorDot.style.opacity = '0';
            });
            el.addEventListener('mouseleave', () => {
                document.body.classList.remove('cursor-hover');
                cursorDot.style.opacity = '1';
            });
        });

        // Scroll Reveal Animation via Intersection Observer
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

        // Simple Parallax Effect for Hero Background
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const parallaxBg = document.querySelector('.parallax-bg');
            if(parallaxBg) {
                parallaxBg.style.transform = `translateY(${scrolled * 0.4 - 10}%)`;
            }
        });

        // Modal Logic
        const modal = document.getElementById('service-modal');
        const modalPanel = document.getElementById('modal-panel');
        const mTitle = document.getElementById('modal-title');
        const mDesc = document.getElementById('modal-desc');
        const mIcon = document.getElementById('modal-icon');
        const mRate = document.getElementById('modal-market-rate');

        function openServiceModal(title, iconName, desc, rate) {
            // Populate content
            mTitle.textContent = title;
            mDesc.textContent = desc;
            mRate.textContent = rate;
            
            // Re-render icon
            const newIcon = document.createElement('i');
            newIcon.setAttribute('data-lucide', iconName);
            newIcon.className = 'w-8 h-8';
            mIcon.parentNode.replaceChild(newIcon, mIcon);
            newIcon.id = 'modal-icon';
            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

            // Show modal
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            // Slight delay for transition to work after display:flex
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                modalPanel.classList.remove('scale-95');
                modalPanel.classList.add('scale-100');
            }, 10);
            
            lenis.stop(); // Pause smooth scroll
        }

        function closeServiceModal() {
            modal.classList.add('opacity-0');
            modalPanel.classList.remove('scale-100');
            modalPanel.classList.add('scale-95');
            
            setTimeout(() => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                lenis.start(); // Resume smooth scroll
            }, 300);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="hidden md:block" id="custom-cursor"></div>
<div className="hidden md:block" id="custom-cursor-dot"></div>

<div className="fixed top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-glow-1 pointer-events-none -z-10 blur-[100px]"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-glow-2 pointer-events-none -z-10 blur-[100px]"></div>

<nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-2 py-2 flex items-center gap-1 shadow-2xl shadow-black">
<a className="px-6 py-3 rounded-full text-base font-medium text-white bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-2 interactive" href="#home">
<i className="w-5 h-5" data-lucide="user"></i> Home
        </a>
<a className="px-6 py-3 rounded-full text-base font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-2 interactive" href="#services">
<i className="w-5 h-5" data-lucide="layers"></i> Services
        </a>
<a className="px-6 py-3 rounded-full text-base font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-2 interactive" href="#portfolio">
<i className="w-5 h-5" data-lucide="briefcase"></i> Work
        </a>
<a className="px-6 py-3 rounded-full text-base font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-2 interactive" href="#tech">
<i className="w-5 h-5" data-lucide="cpu"></i> Tech
        </a>
</nav>

<button className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center text-black shadow-lg shadow-amber-500/20 hover:scale-110 transition-transform interactive">
<i className="w-6 h-6" data-lucide="message-square"></i>
</button>
<main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 lg:pt-12 space-y-32">

<section className="glass-panel rounded-[2.5rem] overflow-hidden relative min-h-[85vh] flex flex-col justify-between p-8 md:p-12 lg:p-16 reveal-up" id="home">

<div className="absolute inset-0 z-0">
<img alt="Hero Background" className="w-full h-[120%] object-cover object-top opacity-30 mix-blend-luminosity transform translate-y-[-10%] parallax-bg" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0e] via-[#0c0c0e]/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent"></div>
</div>

<div className="relative z-10 flex justify-between items-start w-full">
<div className="flex items-center gap-3 bg-black/40 border border-white/10 px-4 py-2 rounded-full text-base font-medium backdrop-blur-md">
<div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse"></div>
                    Accepting New Projects
                </div>
<a className="bg-amber-500 hover:bg-amber-400 text-black px-8 py-3 rounded-full text-base font-semibold transition-all hover:scale-105 interactive" href="#contact">
                    Get in Touch
                </a>
</div>

<div className="relative z-10 mt-24 mb-16 max-w-3xl">
<p className="text-amber-500 font-medium text-2xl mb-6 tracking-tight">Flowstate Agency</p>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white leading-[1.1] mb-8">
                    We Build <br/>
<span className="text-zinc-500">Digital</span> Experiences
                </h1>
<p className="text-xl lg:text-2xl text-zinc-400 font-medium max-w-2xl leading-relaxed">
                    A premium digital agency merging software engineering, cloud architecture, and vanguard design to create tomorrow's leading products.
                </p>
</div>

<div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-white/10 mt-auto">
<a className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors group interactive" href="mailto:hello@flowstate.dev">
<div className="p-3 bg-white/5 rounded-xl group-hover:bg-amber-500/20 group-hover:text-amber-500 transition-colors">
<i className="w-5 h-5" data-lucide="mail"></i>
</div>
<span className="text-base font-medium">hello@flowstate.dev</span>
</a>
<div className="flex items-center gap-4 text-zinc-400 group">
<div className="p-3 bg-white/5 rounded-xl">
<i className="w-5 h-5 text-amber-500" data-lucide="map-pin"></i>
</div>
<span className="text-base font-medium">San Francisco, CA</span>
</div>
<div className="flex items-center gap-4 text-zinc-400 group">
<div className="p-3 bg-white/5 rounded-xl">
<i className="w-5 h-5 text-amber-500" data-lucide="phone"></i>
</div>
<span className="text-base font-medium">+1 (555) 019-2834</span>
</div>
<a className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors group interactive" href="#">
<div className="p-3 bg-white/5 rounded-xl group-hover:bg-amber-500/20 group-hover:text-amber-500 transition-colors">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</div>
<span className="text-base font-medium">linkedin.com/company/flow</span>
</a>
</div>
</section>

<section className="space-y-12 reveal-up" id="services">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4">
<div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">Core Competencies</h2>
<p className="text-xl text-zinc-400 font-medium max-w-xl">Comprehensive solutions tailored for enterprise scalability and aesthetic superiority.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<button className="glass p-8 rounded-3xl text-left hover:bg-white/5 transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden interactive" onclick="openServiceModal('Software Development', 'code', 'End-to-end custom software engineering. We build scalable backend architectures, high-performance APIs, and robust enterprise applications using modern frameworks.', '$150 - $250/hr')">
<div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-colors"></div>
<i className="text-amber-500 mb-8 w-10 h-10 group-hover:scale-110 transition-transform duration-500" data-lucide="code"></i>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4">Software Development</h3>
<p className="text-lg text-zinc-400 font-medium line-clamp-2">Custom enterprise solutions, API development, and robust backend systems.</p>
</button>
<button className="glass p-8 rounded-3xl text-left hover:bg-white/5 transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden interactive" onclick="openServiceModal('Web Design &amp; Dev', 'layout', 'Creating award-winning, conversion-optimized digital experiences. We blend interactive 3D elements, seamless animations, and accessible design principles.', '$120 - $200/hr')">
<div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-colors"></div>
<i className="text-amber-500 mb-8 w-10 h-10 group-hover:scale-110 transition-transform duration-500" data-lucide="layout"></i>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4">Web Design &amp; Dev</h3>
<p className="text-lg text-zinc-400 font-medium line-clamp-2">High-end marketing sites, e-commerce platforms, and immersive web apps.</p>
</button>
<button className="glass p-8 rounded-3xl text-left hover:bg-white/5 transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden interactive" onclick="openServiceModal('Cloud &amp; Security', 'cloud', 'Secure, scalable infrastructure management. AWS/GCP architecture, CI/CD pipeline implementation, and proactive cybersecurity monitoring.', '$180 - $300/hr')">
<div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-colors"></div>
<i className="text-amber-500 mb-8 w-10 h-10 group-hover:scale-110 transition-transform duration-500" data-lucide="cloud"></i>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4">Cloud Services</h3>
<p className="text-lg text-zinc-400 font-medium line-clamp-2">Infrastructure architecture, cloud migration, and enterprise cybersecurity.</p>
</button>
<button className="glass p-8 rounded-3xl text-left hover:bg-white/5 transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden interactive" onclick="openServiceModal('Data &amp; Analytics', 'database', 'Transform raw data into actionable intelligence. We construct data lakes, implement machine learning models, and build real-time dashboards.', '$160 - $280/hr')">
<div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-colors"></div>
<i className="text-amber-500 mb-8 w-10 h-10 group-hover:scale-110 transition-transform duration-500" data-lucide="database"></i>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4">Data &amp; Analytics</h3>
<p className="text-lg text-zinc-400 font-medium line-clamp-2">Business intelligence, machine learning integration, and data visualization.</p>
</button>
<button className="glass p-8 rounded-3xl text-left hover:bg-white/5 transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden interactive" onclick="openServiceModal('Digital Marketing', 'trending-up', 'Data-driven growth strategies. Technical SEO, performance marketing, and automated campaign infrastructure.', '$100 - $180/hr')">
<div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-colors"></div>
<i className="text-amber-500 mb-8 w-10 h-10 group-hover:scale-110 transition-transform duration-500" data-lucide="trending-up"></i>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4">Digital Marketing</h3>
<p className="text-lg text-zinc-400 font-medium line-clamp-2">Technical SEO, conversion rate optimization, and growth engineering.</p>
</button>
<button className="glass p-8 rounded-3xl text-left hover:bg-white/5 transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden interactive" onclick="openServiceModal('Creative &amp; 3D', 'palette', 'Pushing visual boundaries. Custom WebGL experiences, 3D product rendering, and premium brand identity systems.', '$130 - $220/hr')">
<div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-colors"></div>
<i className="text-amber-500 mb-8 w-10 h-10 group-hover:scale-110 transition-transform duration-500" data-lucide="palette"></i>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4">Creative &amp; 3D</h3>
<p className="text-lg text-zinc-400 font-medium line-clamp-2">Brand identity, motion graphics, and interactive Three.js environments.</p>
</button>
</div>
</section>

<section className="space-y-12 reveal-up" id="portfolio">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white px-4">Selected Works</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="glass-panel p-4 rounded-[2rem] group cursor-pointer interactive">
<div className="relative overflow-hidden rounded-2xl aspect-[16/10] mb-8 bg-[#111]">
<img alt="Project Flowstate" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="px-6 pb-6">
<div className="flex justify-between items-start mb-4">
<h3 className="text-3xl font-semibold tracking-tight text-white group-hover:text-amber-500 transition-colors">Nexus E-Commerce</h3>
<span className="px-4 py-1.5 rounded-full border border-white/10 text-sm font-medium text-zinc-400">Web App</span>
</div>
<p className="text-lg text-zinc-400 font-medium mb-6">Headless commerce architecture reducing load times by 40% and increasing conversion rates across mobile platforms.</p>
<div className="flex gap-3">
<span className="text-base text-zinc-500 font-medium">React</span>
<span className="text-base text-zinc-500 font-medium">•</span>
<span className="text-base text-zinc-500 font-medium">Shopify Plus</span>
</div>
</div>
</div>

<div className="glass-panel p-4 rounded-[2rem] group cursor-pointer interactive">
<div className="relative overflow-hidden rounded-2xl aspect-[16/10] mb-8 bg-[#111]">
<img alt="Project FinTech" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="px-6 pb-6">
<div className="flex justify-between items-start mb-4">
<h3 className="text-3xl font-semibold tracking-tight text-white group-hover:text-amber-500 transition-colors">Aura Dashboard</h3>
<span className="px-4 py-1.5 rounded-full border border-white/10 text-sm font-medium text-zinc-400">FinTech</span>
</div>
<p className="text-lg text-zinc-400 font-medium mb-6">Real-time data visualization platform for institutional investors, featuring complex interactive charting.</p>
<div className="flex gap-3">
<span className="text-base text-zinc-500 font-medium">Vue.js</span>
<span className="text-base text-zinc-500 font-medium">•</span>
<span className="text-base text-zinc-500 font-medium">D3.js</span>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 gap-8 reveal-up" id="tech">

<div className="glass-panel p-8 md:p-12 rounded-[2.5rem] lg:col-span-7 flex flex-col justify-between">
<div>
<h3 className="text-3xl font-semibold tracking-tight text-white mb-2">Tech Stack</h3>
<p className="text-lg text-zinc-400 font-medium mb-10">Enterprise-grade tools for scalable solutions.</p>
</div>
<div className="grid grid-cols-3 sm:grid-cols-4 gap-6 md:gap-8">
<div className="flex flex-col items-center gap-4 group">
<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-amber-500/30 transition-all duration-300">
<i className="w-8 h-8 text-zinc-400 group-hover:text-amber-500 transition-colors" data-lucide="atom"></i>
</div>
<span className="text-base font-medium text-zinc-500 group-hover:text-zinc-300">React</span>
</div>
<div className="flex flex-col items-center gap-4 group">
<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-amber-500/30 transition-all duration-300">
<i className="w-8 h-8 text-zinc-400 group-hover:text-amber-500 transition-colors" data-lucide="triangle"></i>
</div>
<span className="text-base font-medium text-zinc-500 group-hover:text-zinc-300">Vercel</span>
</div>
<div className="flex flex-col items-center gap-4 group">
<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-amber-500/30 transition-all duration-300">
<i className="w-8 h-8 text-zinc-400 group-hover:text-amber-500 transition-colors" data-lucide="server"></i>
</div>
<span className="text-base font-medium text-zinc-500 group-hover:text-zinc-300">AWS</span>
</div>
<div className="flex flex-col items-center gap-4 group">
<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-amber-500/30 transition-all duration-300">
<i className="w-8 h-8 text-zinc-400 group-hover:text-amber-500 transition-colors" data-lucide="figma"></i>
</div>
<span className="text-base font-medium text-zinc-500 group-hover:text-zinc-300">Figma</span>
</div>
<div className="flex flex-col items-center gap-4 group">
<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-amber-500/30 transition-all duration-300">
<i className="w-8 h-8 text-zinc-400 group-hover:text-amber-500 transition-colors" data-lucide="box"></i>
</div>
<span className="text-base font-medium text-zinc-500 group-hover:text-zinc-300">Three.js</span>
</div>
<div className="flex flex-col items-center gap-4 group">
<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-amber-500/30 transition-all duration-300">
<i className="w-8 h-8 text-zinc-400 group-hover:text-amber-500 transition-colors" data-lucide="database"></i>
</div>
<span className="text-base font-medium text-zinc-500 group-hover:text-zinc-300">PostgreSQL</span>
</div>
<div className="flex flex-col items-center gap-4 group hidden sm:flex">
<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-amber-500/30 transition-all duration-300">
<i className="w-8 h-8 text-zinc-400 group-hover:text-amber-500 transition-colors" data-lucide="terminal"></i>
</div>
<span className="text-base font-medium text-zinc-500 group-hover:text-zinc-300">Node.js</span>
</div>
<div className="flex flex-col items-center gap-4 group hidden sm:flex">
<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-amber-500/30 transition-all duration-300">
<i className="w-8 h-8 text-zinc-400 group-hover:text-amber-500 transition-colors" data-lucide="wind"></i>
</div>
<span className="text-base font-medium text-zinc-500 group-hover:text-zinc-300">Tailwind</span>
</div>
</div>
</div>

<div className="glass-panel p-8 md:p-12 rounded-[2.5rem] lg:col-span-5 flex flex-col justify-center">
<h3 className="text-3xl font-semibold tracking-tight text-amber-500 mb-10">Capabilities</h3>
<div className="space-y-8">
<div>
<div className="flex justify-between text-base font-medium mb-3">
<span className="text-white">Frontend Architecture</span>
<span className="text-zinc-500">95%</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-amber-500 w-[95%] rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-base font-medium mb-3">
<span className="text-white">Backend Systems</span>
<span className="text-zinc-500">90%</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-amber-500 w-[90%] rounded-full opacity-80"></div>
</div>
</div>
<div>
<div className="flex justify-between text-base font-medium mb-3">
<span className="text-white">UI/UX Design</span>
<span className="text-zinc-500">85%</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-amber-500 w-[85%] rounded-full opacity-60"></div>
</div>
</div>
<div>
<div className="flex justify-between text-base font-medium mb-3">
<span className="text-white">Cloud DevOps</span>
<span className="text-zinc-500">80%</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-amber-500 w-[80%] rounded-full opacity-40"></div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-24 border-t border-white/10 pt-12 pb-24 text-center">
<p className="text-base text-zinc-500 font-medium">© 2024 Flowstate Digital Agency. All rights reserved.</p>
</footer>

<div className="fixed inset-0 z-[100] hidden items-center justify-center p-4 sm:p-6 opacity-0 transition-opacity duration-300" id="service-modal">
<div className="absolute inset-0 bg-black/80 backdrop-blur-md" onclick="closeServiceModal()"></div>
<div className="relative glass-panel w-full max-w-2xl rounded-[2.5rem] p-8 md:p-12 transform scale-95 transition-all duration-400 ease-out border-t border-amber-500/20" id="modal-panel">
<button className="absolute top-8 right-8 text-zinc-500 hover:text-white transition-colors bg-white/5 p-2 rounded-full interactive" onclick="closeServiceModal()">
<i className="w-6 h-6" data-lucide="x"></i>
</button>
<div className="mb-8 flex items-center gap-5">
<div className="p-4 bg-amber-500/10 rounded-2xl text-amber-500 border border-amber-500/20">
<i className="w-8 h-8" data-lucide="box" id="modal-icon"></i>
</div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white" id="modal-title">Service</h3>
</div>
<p className="text-xl text-zinc-300 font-medium mb-10 leading-relaxed" id="modal-desc">Description</p>
<div className="bg-black/30 rounded-2xl p-6 border border-white/5">
<h4 className="text-lg font-semibold tracking-tight text-zinc-400 mb-6 uppercase tracking-wider text-sm">Pricing Benchmark</h4>
<div className="space-y-3">
<div className="flex justify-between items-center py-2">
<span className="text-lg text-zinc-400 font-medium">Market Average</span>
<span className="text-xl text-white font-semibold" id="modal-market-rate">$0 - $0/hr</span>
</div>
<div className="w-full h-px bg-white/5"></div>
<div className="flex justify-between items-center py-2">
<span className="text-lg text-amber-500 font-medium flex items-center gap-2">
<i className="w-4 h-4" data-lucide="zap"></i> Flowstate Rate
                        </span>
<span className="text-xl text-amber-500 font-semibold bg-amber-500/10 px-4 py-1 rounded-full border border-amber-500/20">Negotiable</span>
</div>
</div>
</div>
<button className="w-full mt-8 bg-white/5 hover:bg-white/10 text-white py-4 rounded-full text-lg font-medium transition-colors border border-white/10 interactive" onclick="closeServiceModal()">
                Close Details
            </button>
</div>
</div>



    </>
  );
}
