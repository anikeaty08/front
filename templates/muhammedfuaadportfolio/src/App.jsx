import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Cursor Logic
        const cursor = document.getElementById('cursor');
        const hoverTriggers = document.querySelectorAll('.hover-trigger');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        document.addEventListener('mousedown', () => cursor.style.transform = 'translate(-50%, -50%) scale(0.8)');
        document.addEventListener('mouseup', () => cursor.style.transform = 'translate(-50%, -50%) scale(1)');

        hoverTriggers.forEach(trigger => {
            trigger.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
            trigger.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
        });

        // Animations
        window.addEventListener('load', () => {
            document.querySelectorAll('.char').forEach((char, i) => {
                setTimeout(() => char.parentElement.classList.add('is-visible'), 100 + (i * 30));
            });
            document.querySelectorAll('.fade-in-up').forEach(el => {
                el.classList.remove('opacity-0', 'translate-y-4');
            });
        });

        // Clock
        setInterval(() => {
            document.getElementById('clock').innerText = new Date().toLocaleTimeString('en-US', { 
                hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Dubai' 
            });
        }, 1000);

        // Scroll Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-8');
                }
            });
        }, { threshold: 0.1 });

        // Add observer to sections
        document.querySelectorAll('section > div').forEach(el => {
            el.classList.add('transition-all', 'duration-1000', 'ease-out');
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div id="cursor"></div>
<div className="noise"></div>

<nav className="fixed top-0 w-full z-40 backdrop-blur-md border-b border-white/5 bg-[#050505]/80 transition-all duration-500">
<div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
<a className="text-base tracking-tight font-medium text-white hover:text-neutral-300 transition-colors z-50" href="#">FUAAD.</a>
<div className="hidden md:flex gap-8 text-xs font-medium tracking-wide uppercase text-neutral-500">
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#stack">Stack</a>
</div>
<a className="text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/5 text-white px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 group hover-trigger" href="mailto:hello@fuaad.com">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Available
            </a>
</div>
</nav>
<main className="relative z-10">

<section className="min-h-[90vh] flex flex-col justify-center px-6 pt-20 relative">
<div className="absolute top-1/3 right-0 w-[600px] h-[400px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto w-full z-20">
<div className="mb-8 overflow-hidden">
<span className="block char text-xs font-medium tracking-[0.2em] uppercase text-neutral-500">Portfolio 2024</span>
</div>
<h1 className="text-6xl md:text-[8rem] font-medium tracking-tighter text-white leading-[0.9] mix-blend-screen -ml-1">
<div className="overflow-hidden reveal-text"><span className="char inline-block">Digital</span></div>
<div className="overflow-hidden reveal-text"><span className="char inline-block text-neutral-600">Product</span></div>
<div className="overflow-hidden reveal-text"><span className="char inline-block">Designer</span></div>
</h1>
<p className="mt-12 max-w-xl text-lg text-neutral-400 font-light fade-in-up opacity-0 transform translate-y-4 transition-all duration-700 delay-500">
                    Crafting software that feels physical. Combining technical depth with visual precision to build systems, tools, and interfaces for the web.
                </p>
<div className="mt-12 fade-in-up opacity-0 transform translate-y-4 transition-all duration-700 delay-700">
<a className="inline-flex items-center gap-2 text-white border-b border-white/20 pb-1 hover:border-white transition-all hover-trigger" href="#work">
                        Scroll for selected projects
                        <span className="iconify" data-icon="lucide:arrow-down" data-strokeWidth="1.5"></span>
</a>
</div>
</div>
</section>

<div className="w-full border-y border-white/5 py-6 overflow-hidden bg-neutral-950/30">
<div className="flex whitespace-nowrap marquee-content">
<div className="flex gap-12 items-center px-6 text-sm font-medium uppercase tracking-widest text-neutral-600">
<span>React</span> <span>•</span>
<span>TypeScript</span> <span>•</span>
<span>Next.js</span> <span>•</span>
<span>Tailwind CSS</span> <span>•</span>
<span>Figma</span> <span>•</span>
<span>Motion</span> <span>•</span>
<span>Design Systems</span> <span>•</span>
<span>Prototyping</span> <span>•</span>
<span>React</span> <span>•</span>
<span>TypeScript</span> <span>•</span>
<span>Next.js</span> <span>•</span>
<span>Tailwind CSS</span> <span>•</span>
<span>Figma</span> <span>•</span>
<span>Motion</span> <span>•</span>
</div>
</div>
</div>

<section className="max-w-7xl mx-auto px-6 py-32 space-y-40" id="work">

<div className="group grid grid-cols-1 md:grid-cols-12 gap-12 items-center hover-trigger">
<div className="md:col-span-7 relative rounded-xl bg-[#0A0A0A] aspect-[4/3] glow-card border border-white/5 group-hover:border-white/10 transition-colors duration-500">

<div className="absolute inset-0 flex items-center justify-center overflow-hidden">
<div className="w-[85%] h-[85%] bg-[#0f0f0f] rounded-lg border border-white/5 shadow-2xl flex flex-col overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">

<div className="flex h-full">
<div className="w-16 border-r border-white/5 flex flex-col items-center py-4 gap-4">
<div className="w-6 h-6 rounded bg-neutral-800"></div>
<div className="w-4 h-4 rounded-full bg-neutral-800/50 mt-4"></div>
<div className="w-4 h-4 rounded-full bg-neutral-800/50"></div>
</div>

<div className="flex-1 p-6">
<div className="flex justify-between mb-8">
<div className="w-32 h-4 bg-neutral-800 rounded"></div>
<div className="w-8 h-8 rounded-full bg-neutral-800"></div>
</div>

<div className="w-full h-32 bg-gradient-to-r from-neutral-800/20 to-transparent rounded border border-white/5 mb-4 relative overflow-hidden">
<svg className="absolute bottom-0 left-0 w-full h-16 text-indigo-500/20 fill-current" preserveaspectratio="none" viewbox="0 0 100 20">
<path d="M0,20 L0,10 C10,15 20,5 30,12 C40,18 50,8 60,15 C70,10 80,18 90,12 L100,15 L100,20 Z"></path>
</svg>
<svg className="absolute bottom-0 left-0 w-full h-16 text-indigo-500 stroke-current fill-none" preserveaspectratio="none" strokeWidth="0.5" viewbox="0 0 100 20">
<path d="M0,10 C10,15 20,5 30,12 C40,18 50,8 60,15 C70,10 80,18 90,12 L100,15"></path>
</svg>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="h-20 rounded bg-neutral-800/20 border border-white/5"></div>
<div className="h-20 rounded bg-neutral-800/20 border border-white/5"></div>
<div className="h-20 rounded bg-neutral-800/20 border border-white/5"></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="md:col-span-5 flex flex-col">
<div className="flex items-center gap-3 mb-4">
<span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
<span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">SaaS Analytics</span>
</div>
<h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4 group-hover:text-indigo-300 transition-colors">Nova Analytics</h3>
<p className="text-neutral-400 leading-relaxed mb-8">
                        A complete overhaul of a data intelligence platform. Focused on simplifying complex datasets into actionable insights through a modular widget system and keyboard-first navigation.
                    </p>
<div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-500">
<span className="px-2 py-1 border border-white/10 rounded">Product Design</span>
<span className="px-2 py-1 border border-white/10 rounded">Frontend</span>
<span className="px-2 py-1 border border-white/10 rounded">2023</span>
</div>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-12 gap-12 items-center hover-trigger">
<div className="md:col-span-5 md:order-1 order-2 flex flex-col">
<div className="flex items-center gap-3 mb-4">
<span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
<span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Fintech Mobile</span>
</div>
<h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4 group-hover:text-emerald-300 transition-colors">Vault App</h3>
<p className="text-neutral-400 leading-relaxed mb-8">
                        Designed the mobile experience for a next-gen crypto wallet. Emphasis on trust, security, and fluid gestures for transferring assets. Created a dark-mode first design system.
                    </p>
<div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-500">
<span className="px-2 py-1 border border-white/10 rounded">iOS</span>
<span className="px-2 py-1 border border-white/10 rounded">Design Systems</span>
<span className="px-2 py-1 border border-white/10 rounded">2024</span>
</div>
</div>
<div className="md:col-span-7 md:order-2 order-1 relative rounded-xl bg-[#0A0A0A] aspect-[4/3] glow-card border border-white/5 group-hover:border-white/10 transition-colors duration-500">

<div className="absolute inset-0 flex items-center justify-center">

<div className="w-[180px] h-[320px] bg-neutral-900 rounded-[2rem] border-4 border-neutral-800 shadow-2xl relative z-10 transform -rotate-6 group-hover:-rotate-12 transition-transform duration-700 ease-out flex flex-col overflow-hidden">
<div className="h-full w-full bg-gradient-to-b from-emerald-900/10 to-neutral-900 p-4">
<div className="flex justify-between items-center mb-6">
<div className="w-6 h-6 rounded-full bg-white/10"></div>
<div className="w-16 h-2 rounded-full bg-white/5"></div>
</div>
<div className="text-center mb-6">
<div className="w-8 h-8 mx-auto bg-emerald-500 rounded-full mb-2 flex items-center justify-center text-black text-xs font-bold">$</div>
<div className="w-24 h-6 mx-auto bg-white/10 rounded"></div>
</div>
<div className="space-y-2">
<div className="h-12 w-full bg-white/5 rounded-xl border border-white/5"></div>
<div className="h-12 w-full bg-white/5 rounded-xl border border-white/5"></div>
</div>
</div>
</div>

<div className="w-[180px] h-[320px] bg-neutral-800 rounded-[2rem] border-4 border-neutral-700 absolute z-0 transform translate-x-12 rotate-6 group-hover:translate-x-16 group-hover:rotate-12 transition-transform duration-700 ease-out opacity-40"></div>
</div>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-12 gap-12 items-center hover-trigger">
<div className="md:col-span-7 relative rounded-xl bg-[#0A0A0A] aspect-[4/3] glow-card border border-white/5 group-hover:border-white/10 transition-colors duration-500">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-[80%] bg-[#111] rounded-xl border border-white/10 shadow-2xl p-4 transform group-hover:-translate-y-2 transition-transform duration-700">
<div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
<span className="iconify text-neutral-500" data-icon="lucide:search" width="16"></span>
<div className="h-4 w-32 bg-neutral-800 rounded animate-pulse"></div>
<div className="ml-auto px-1.5 py-0.5 rounded border border-white/10 text-[10px] text-neutral-500 font-mono">ESC</div>
</div>
<div className="space-y-1">
<div className="flex items-center gap-3 p-2 rounded bg-indigo-500/10 border border-indigo-500/20">
<div className="w-4 h-4 rounded bg-indigo-500 flex items-center justify-center">
<span className="iconify text-white text-[10px]" data-icon="lucide:terminal"></span>
</div>
<div className="h-2 w-24 bg-indigo-200/20 rounded"></div>
</div>
<div className="flex items-center gap-3 p-2 rounded hover:bg-white/5">
<div className="w-4 h-4 rounded bg-neutral-700"></div>
<div className="h-2 w-32 bg-neutral-800 rounded"></div>
</div>
<div className="flex items-center gap-3 p-2 rounded hover:bg-white/5">
<div className="w-4 h-4 rounded bg-neutral-700"></div>
<div className="h-2 w-20 bg-neutral-800 rounded"></div>
</div>
</div>
</div>
</div>
</div>
<div className="md:col-span-5 flex flex-col">
<div className="flex items-center gap-3 mb-4">
<span className="w-2 h-2 bg-orange-500 rounded-full"></span>
<span className="text-xs font-mono text-orange-400 uppercase tracking-widest">Dev Tools</span>
</div>
<h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4 group-hover:text-orange-300 transition-colors">Command Kit</h3>
<p className="text-neutral-400 leading-relaxed mb-8">
                        A productivity extension for developers. Keyboard-centric design allowing users to manage deployments, check logs, and run scripts without leaving their IDE.
                    </p>
<div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-500">
<span className="px-2 py-1 border border-white/10 rounded">Electron</span>
<span className="px-2 py-1 border border-white/10 rounded">UX Research</span>
<span className="px-2 py-1 border border-white/10 rounded">2023</span>
</div>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-12 gap-12 items-center hover-trigger">
<div className="md:col-span-5 md:order-1 order-2 flex flex-col">
<div className="flex items-center gap-3 mb-4">
<span className="w-2 h-2 bg-purple-500 rounded-full"></span>
<span className="text-xs font-mono text-purple-400 uppercase tracking-widest">Generative AI</span>
</div>
<h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4 group-hover:text-purple-300 transition-colors">Aether Lens</h3>
<p className="text-neutral-400 leading-relaxed mb-8">
                        Marketing site and web app for an AI image upscaling tool. Created a unique visual identity using WebGL distortions and glassmorphism to represent "clarity".
                    </p>
<div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-500">
<span className="px-2 py-1 border border-white/10 rounded">Web Design</span>
<span className="px-2 py-1 border border-white/10 rounded">3D</span>
<span className="px-2 py-1 border border-white/10 rounded">2024</span>
</div>
</div>
<div className="md:col-span-7 md:order-2 order-1 relative rounded-xl bg-[#0A0A0A] aspect-[4/3] glow-card border border-white/5 group-hover:border-white/10 transition-colors duration-500 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>

<div className="absolute inset-0 p-8 grid grid-cols-2 gap-4 opacity-80 group-hover:scale-105 transition-transform duration-1000">
<div className="rounded-lg bg-neutral-900 border border-white/5 overflow-hidden relative">
<div className="absolute inset-0 bg-neutral-800/50"></div>
</div>
<div className="rounded-lg bg-neutral-900 border border-white/5 overflow-hidden relative mt-8">
<div className="absolute inset-0 bg-purple-500/10"></div>
<div className="absolute bottom-4 left-4 right-4 h-1 bg-purple-500/50 rounded overflow-hidden">
<div className="h-full bg-purple-400 w-2/3"></div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full text-white text-sm font-medium shadow-xl">
                        Processing...
                    </div>
</div>
</div>
</section>

<section className="bg-neutral-900/20 border-y border-white/5 py-32 relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:flex justify-between items-end">
<div>
<h2 className="text-4xl font-medium tracking-tighter text-white mb-2">The Stack</h2>
<p className="text-neutral-500 text-sm">Tools and technologies I use daily.</p>
</div>
<a className="hidden md:block text-sm text-white border-b border-white/20 pb-1 hover:border-white transition-colors" href="#">View Resume</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[500px]">

<div className="col-span-2 row-span-2 bg-[#080808] border border-white/5 rounded-2xl p-8 flex flex-col justify-between hover:border-white/10 transition-colors">
<div>
<span className="iconify text-2xl text-white mb-6" data-icon="lucide:fingerprint"></span>
<h3 className="text-xl text-white font-medium mb-3">About Me</h3>
<p className="text-neutral-400 text-sm leading-7">
                                I bridge the gap between design and engineering. With a background in Computer Science and a passion for typography, I build products that look beautiful and perform flawlessly. Currently exploring the intersection of AI and UI.
                            </p>
</div>
<div className="flex gap-4 mt-4">
<a className="text-xs text-white bg-neutral-800 px-3 py-1.5 rounded hover:bg-neutral-700 transition-colors" href="#">Read.cv</a>
<a className="text-xs text-white bg-neutral-800 px-3 py-1.5 rounded hover:bg-neutral-700 transition-colors" href="#">LinkedIn</a>
</div>
</div>

<div className="bg-[#080808] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:border-white/10 transition-colors group">
<span className="iconify text-3xl text-neutral-600 group-hover:text-blue-500 transition-colors" data-icon="lucide:figma"></span>
<span className="text-xs text-neutral-500">Figma</span>
</div>
<div className="bg-[#080808] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:border-white/10 transition-colors group">
<span className="iconify text-3xl text-neutral-600 group-hover:text-cyan-400 transition-colors" data-icon="lucide:atom"></span>
<span className="text-xs text-neutral-500">React</span>
</div>
<div className="bg-[#080808] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:border-white/10 transition-colors group">
<span className="iconify text-3xl text-neutral-600 group-hover:text-white transition-colors" data-icon="lucide:framer"></span>
<span className="text-xs text-neutral-500">Framer Motion</span>
</div>

<div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent"></div>
<span className="relative z-10 text-[10px] uppercase tracking-widest text-neutral-500">Location</span>
<div className="relative z-10">
<div className="text-white font-medium">Dubai, UAE</div>
<div className="text-xs text-neutral-500 mt-1" id="clock">12:00 PM</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-32 flex flex-col items-center text-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black -z-10"></div>
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-8">Ready to build?</h2>
<a className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full font-medium tracking-tight overflow-hidden hover-trigger" href="mailto:hello@fuaad.com">
<span className="relative z-10 flex items-center gap-2">
                    Start a Project 
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right"></span>
</span>
<div className="absolute inset-0 bg-neutral-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
</a>
<div className="mt-24 flex gap-8 text-sm text-neutral-600 font-medium">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
</div>
<p className="mt-8 text-xs text-neutral-700">© 2024 Fuaad. All Rights Reserved.</p>
</footer>
</main>


    </>
  );
}
