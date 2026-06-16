import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            
            // --- Custom Cursor Logic ---
            const cursor = document.getElementById('custom-cursor');
            const dot = cursor.querySelector('.cursor-dot');
            const ring = cursor.querySelector('.cursor-ring');
            
            // Mouse Movement
            let mouseX = 0;
            let mouseY = 0;
            let ringX = 0;
            let ringY = 0;

            window.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                
                // Dot follows immediately
                gsap.to(dot, { duration: 0, x: mouseX, y: mouseY });
                
                // Spotlight follows mouse
                const spotlight = document.getElementById('spotlight');
                spotlight.style.setProperty('--x', mouseX + 'px');
                spotlight.style.setProperty('--y', mouseY + 'px');
            });

            // Smooth Ring Follow Loop
            gsap.ticker.add(() => {
                ringX += (mouseX - ringX) * 0.15;
                ringY += (mouseY - ringY) * 0.15;
                gsap.set(ring, { x: ringX, y: ringY });
            });

            // Hover States
            const hoverElements = document.querySelectorAll('a, button, .cursor-none-target, input');
            hoverElements.forEach(el => {
                el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
                el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
            });

            // --- Magnetic Button Effect ---
            const magnetics = document.querySelectorAll('.magnetic-wrap');
            magnetics.forEach(wrap => {
                wrap.addEventListener('mousemove', function(e) {
                    const rect = this.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    const strength = this.getAttribute('data-magnetic-strength') || 0.5;
                    
                    gsap.to(this, {
                        duration: 0.3,
                        x: x * strength,
                        y: y * strength,
                        ease: "power2.out"
                    });
                });
                
                wrap.addEventListener('mouseleave', function() {
                    gsap.to(this, {
                        duration: 0.5,
                        x: 0,
                        y: 0,
                        ease: "elastic.out(1, 0.3)"
                    });
                });
            });

            // --- 3D Card Tilt Effect ---
            const tiltCards = document.querySelectorAll('.tilt-card');
            tiltCards.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const rotateX = ((y - centerY) / centerY) * -3; 
                    const rotateY = ((x - centerX) / centerX) * 3;

                    const inner = card.querySelector('.tilt-inner');
                    gsap.to(inner, {
                        duration: 0.1,
                        rotateX: rotateX,
                        rotateY: rotateY,
                        transformPerspective: 1000,
                        ease: "power1.out"
                    });
                });

                card.addEventListener('mouseleave', () => {
                    const inner = card.querySelector('.tilt-inner');
                    gsap.to(inner, {
                        duration: 0.5,
                        rotateX: 0,
                        rotateY: 0,
                        ease: "power2.out"
                    });
                });
            });

            // --- Reveal on Scroll ---
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

            document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
            
            // --- Simple Parallax ---
            window.addEventListener('scroll', () => {
                const scrolled = window.scrollY;
                document.querySelectorAll('.parallax-element').forEach(el => {
                    const speed = el.getAttribute('data-speed') || 0.1;
                    el.style.transform = `translateY(${scrolled * speed}px)`;
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="custom-cursor hidden md:block" id="custom-cursor">
<div className="cursor-dot" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(-50%, -50%) translate(1239px, 3px)'}}></div>
<div className="cursor-ring" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(-50%, -50%) translate(1238.19px, 3.2166px)'}}></div>
</div>

<div className="blob-cont">
<div className="blob blob-1"></div>
<div className="blob blob-2"></div>
<div className="blob blob-3"></div>
</div>

<div className="noise-overlay"></div>

<div className="spotlight" id="spotlight" style={{-X: '1239px', -Y: '3px'}}></div>

<nav className="fixed top-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center transition-all duration-300 bg-gradient-to-b from-[#05080f]/90 to-transparent backdrop-blur-[2px]">
<div className="magnetic-wrap" data-magnetic-strength="0.3">
</div>
<div className="hidden md:flex items-center gap-2 group reveal-up in-view delay-100 cursor-none-target magnetic-wrap" data-magnetic-strength="0.5">
<button className="flex items-center gap-3 px-4 py-2">
<span className="text-[11px] uppercase tracking-[0.2em] text-slate-300 group-hover:text-[#FFD400] transition-colors duration-300 font-sans font-medium">Menu</span>
<div className="flex flex-col gap-[5px] items-end group-hover:gap-[4px] transition-all">
<span className="block w-6 h-[1px] bg-slate-300 group-hover:bg-[#FFD400] group-hover:w-8 transition-all duration-300"></span>
<span className="block w-4 h-[1px] bg-slate-300 group-hover:bg-[#FFD400] group-hover:w-8 transition-all duration-300"></span>
</div>
</button>
</div>
</nav>

<main className="z-10 w-full relative">

<section className="flex flex-col min-h-[75vh] pt-32 md:pt-48 px-6 md:px-12 relative mb-20">
<div className="flex flex-col md:flex-row w-full h-full relative items-start justify-between">
<div className="w-full md:w-3/4 z-20">

<h1 className="reveal-up delay-100 md:text-[10rem] leading-[0.85] text-7xl font-normal tracking-tight font-oswald mb-8">
<span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-600">SPECTRUM</span>
</h1>
<div className="w-full h-[1px] bg-gradient-to-r from-[#FFD400] via-white/10 to-transparent mb-10 reveal-up delay-200 opacity-50"></div>
<div className="flex flex-col md:flex-row reveal-up delay-300 gap-x-12 gap-y-12 items-start">
<p className="md:text-xl leading-relaxed text-slate-400 font-light max-w-lg font-sans">
                           A Professional <span className="text-white font-medium border-b border-[#FFD400]/50">Skill Development</span> Club of <span className="text-white font-medium border-b border-[#FFD400]/50">KUET</span>. You can nurture your creativity, innovation, passion, skills and efficiency in a guided way so that it will be easier for you to reach your goal and shine bright not only in native boundary but also in international arena.  
                        </p>
</div>
</div>

<div className="hidden md:flex w-1/4 h-full justify-center items-center absolute right-0 top-20 z-10 pointer-events-none parallax-element" data-speed="0.05" style={{transform: 'translateY(143.36px)'}}>
<div className="relative w-64 h-64 border border-white/10 rounded-full animate-[spin_20s_linear_infinite]">
<div className="absolute inset-0 border border-[#FFD400]/20 rounded-full scale-75 animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute inset-0 border border-white/5 rounded-full scale-50"></div>
</div>
</div>
</div>
</section>

<section className="border-y overflow-hidden bg-[#05080f]/20 border-white/5 mb-16 pt-12 pb-12 relative backdrop-blur-md">
<div className="absolute inset-0 bg-gradient-to-r from-[#05080f] via-transparent to-[#05080f] z-20 pointer-events-none"></div>
<div className="marquee-container opacity-50">
<div className="marquee-content">
<span className="stroke-text text-stroke text-8xl font-normal text-yellow-400 font-oswald px-8" style={{WebkitTextStroke: '1px rgba(255,255,255,0.15)'}}>ENTHUSIASM</span>
<span className="text-8xl font-normal text-[#FFD400] font-oswald pr-8 pl-8">EXCELLENCE</span>
<span className="stroke-text text-stroke text-8xl font-normal text-yellow-300 font-oswald px-8" style={{WebkitTextStroke: '1px rgba(255,255,255,0.15)'}}>EXPERTISE</span>

<span className="stroke-text text-stroke text-8xl font-normal text-yellow-400 font-oswald px-8" style={{WebkitTextStroke: '1px rgba(255,255,255,0.15)'}}>ENTHUSIASM</span>
<span className="text-8xl font-normal text-[#FFD400] font-oswald pr-8 pl-8">EXCELLENCE</span>
<span className="stroke-text text-stroke text-8xl font-normal text-yellow-300 font-oswald px-8" style={{WebkitTextStroke: '1px rgba(255,255,255,0.15)'}}>EXPERTISE</span>
</div>
</div>
</section>

<section className="px-6 md:px-12 mb-32 reveal-up">
<div className="w-full relative rounded-2xl overflow-hidden border border-white/10 bg-[#05080f] group tilt-card">
<div className="tilt-inner relative">

<div className="aspect-video w-full bg-slate-900 relative">
<img alt="Live Stream Background" className="w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=1600&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-[#05080f]/60 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#05080f]/80 via-transparent to-transparent"></div>

<div className="absolute top-6 left-6 md:top-8 md:left-8 z-20 flex items-center gap-3 bg-red-600/10 border border-red-500/20 px-4 py-1.5 rounded-full backdrop-blur-md shadow-[0_0_15px_-3px_rgba(220,38,38,0.4)]">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
</span>
<span className="text-red-500 text-[10px] font-bold tracking-[0.25em] uppercase font-sans">Live Now</span>
</div>

<div className="absolute top-6 right-6 md:top-8 md:right-8 z-20 flex items-center gap-2 bg-black/40 border border-white/5 px-3 py-1.5 rounded-full backdrop-blur-md">
<svg className="text-slate-400" data-darkreader-inline-stroke="" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-slate-300 text-[10px] font-medium tracking-wider font-sans">14.2k</span>
</div>

<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 flex flex-col md:flex-row items-end justify-between gap-8">
<div className="max-w-3xl">
<div className="inline-block mb-4">
<span className="text-[#FFD400] text-[10px] tracking-[0.2em] uppercase border border-[#FFD400]/20 bg-[#FFD400]/5 px-3 py-1 rounded-sm font-sans">Keynote Session</span>
</div>
<h3 className="text-4xl md:text-6xl font-display text-white mb-4 leading-none tracking-tight">
                                    CaseSpecs 3.0
                                </h3>
<div className="flex items-center gap-4 text-slate-400 text-sm font-sans">
<span className="text-white font-medium">An Intra University Case Competition</span>
<span className="w-1 h-1 bg-slate-600 rounded-full"></span>
<span className="font-light">Jan 30,2026</span>
</div>
</div>

<div className="magnetic-wrap w-full md:w-auto" data-magnetic-strength="0.3">
<button className="w-full md:w-auto group relative px-8 py-4 bg-[#FFD400] overflow-hidden cursor-none-target transition-transform duration-300 hover:scale-[1.02] shadow-[0_0_20px_-5px_rgba(255,212,0,0.3)]">
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
<span className="relative flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest text-[#05080f]">
                                        Visit Now
                                        <svg className="group-hover:translate-x-1 transition-transform" data-darkreader-inline-stroke="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{-DarkreaderInlineStroke: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-30">
<div className="h-full bg-[#FFD400] w-[35%] shadow-[0_0_10px_#FFD400]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 relative z-20">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6 reveal-up">
<div>
<h2 className="text-5xl md:text-6xl mb-3 font-oswald font-normal animate-gradient-text bg-gradient-to-r from-white via-slate-400 to-white bg-clip-text text-transparent">Committee</h2>
<p className="text-slate-500 font-light tracking-wide text-sm font-sans flex items-center gap-2">
<span className="w-2 h-2 bg-[#FFD400] rounded-full"></span>
                        THE VISIONARIES STEERING THE SHIP
                    </p>
</div>

<div className="flex gap-4">
<button className="w-14 h-14 rounded-full border border-white/10 hover:border-[#FFD400] hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-none-target group magnetic-wrap">
<svg aria-hidden="true" className="iconify iconify--lucide group-hover:text-[#FFD400] transition-colors" data-icon="lucide:arrow-left" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 19l-7-7l7-7m7 7H5" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{-DarkreaderInlineStroke: 'currentColor'}}></path></svg>
</button>
<button className="w-14 h-14 rounded-full border border-white/10 hover:border-[#FFD400] hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-none-target group magnetic-wrap">
<svg aria-hidden="true" className="iconify iconify--lucide group-hover:text-[#FFD400] transition-colors" data-icon="lucide:arrow-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{-DarkreaderInlineStroke: 'currentColor'}}></path></svg>
</button>
</div>
</div>
<div className="space-y-12">

<div className="tilt-card group reveal-up">
<div className="tilt-inner relative w-full bg-white/[0.02] backdrop-filter backdrop-blur-xl border border-white/[0.08] rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 hover:border-[#FFD400]/40 transition-colors duration-500 shadow-[0_0_0_1px_rgba(0,0,0,0)] hover:shadow-[0_0_30px_-10px_rgba(255,212,0,0.15)]">
<div className="lg:col-span-5 h-[500px] lg:h-auto relative shine-wrapper overflow-hidden">
<img alt="President" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-transparent to-transparent opacity-80"></div>
</div>
<div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-between relative bg-gradient-to-br from-white/[0.01] to-transparent">
<div className="absolute top-8 right-8 text-white/5 group-hover:text-[#FFD400]/20 transition-colors duration-500 transform group-hover:rotate-12 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:quote" height="100" role="img" viewbox="0 0 24 24" width="100" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{-DarkreaderInlineStroke: 'currentColor'}}></path></svg>
</div>
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-[#FFD400]/30 text-[#FFD400] text-[10px] tracking-[0.2em] uppercase rounded-full bg-[#FFD400]/5 font-sans backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]"></span>
                                    Chairman
                                </div>
<h3 className="text-6xl md:text-8xl mb-2 text-white font-oswald font-normal tracking-tight">
                                    James Sterling
                                </h3>
<p className="text-slate-500 font-light tracking-[0.15em] uppercase text-xs mt-2 font-sans group-hover:text-slate-300 transition-colors">President &amp; Global Strategist</p>
</div>
<div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-end justify-between gap-6">
<p className="text-slate-400 text-sm md:text-base font-light max-w-md leading-relaxed font-sans italic opacity-80">
                                    "True leadership isn't about presence. It's about impact that resonates when you're absent."
                                </p>
<a className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FFD400] hover:border-[#FFD400] hover:text-[#05080f] transition-all duration-300 cursor-none-target magnetic-wrap" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{-DarkreaderInlineStroke: 'currentColor'}}></path></svg>
</a>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="tilt-card group h-[500px] reveal-up delay-100">
<div className="tilt-inner h-full bg-white/[0.02] border border-white/[0.08] rounded-xl overflow-hidden relative hover:border-[#FFD400]/30 transition-all duration-500 flex flex-col" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'perspective(1000px)'}}>
<div className="h-3/4 relative shine-wrapper overflow-hidden">
<img alt="SVP" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-[#05080f]/50 to-transparent"></div>
<div className="absolute bottom-6 left-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<h4 className="text-4xl text-white group-hover:text-[#FFD400] transition-colors duration-300 font-oswald font-normal">
                                        Elena Ross
                                    </h4>
<p className="text-[10px] text-white/60 tracking-[0.2em] uppercase mt-1 font-sans">Senior Vice President</p>
</div>
</div>
<div className="h-1/4 p-6 flex items-center justify-between bg-[#05080f]/40 backdrop-blur-md border-t border-white/5 group-hover:bg-[#FFD400]/5 transition-colors">
<p className="text-slate-500 text-xs font-light leading-relaxed max-w-[80%] font-sans group-hover:text-slate-300 transition-colors">
                                    Overseeing operational excellence and partnership growth across three continents.
                                </p>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#FFD400] group-hover:text-[#FFD400] transition-all">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m-7-7h14" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{-DarkreaderInlineStroke: 'currentColor'}}></path></svg>
</div>
</div>
</div>
</div>

<div className="tilt-card group h-[500px] reveal-up delay-200">
<div className="tilt-inner h-full bg-white/[0.02] border border-white/[0.08] rounded-xl overflow-hidden relative hover:border-[#FFD400]/30 transition-all duration-500 flex flex-col">
<div className="h-3/4 relative shine-wrapper overflow-hidden">
<img alt="GS" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-[#05080f]/50 to-transparent"></div>
<div className="absolute bottom-6 left-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<h4 className="text-4xl text-white group-hover:text-[#FFD400] transition-colors duration-300 font-oswald font-normal">
                                        Marcus Chen
                                    </h4>
<p className="text-[10px] text-white/60 tracking-[0.2em] uppercase mt-1 font-sans">General Secretary</p>
</div>
</div>
<div className="h-1/4 p-6 flex items-center justify-between bg-[#05080f]/40 backdrop-blur-md border-t border-white/5 group-hover:bg-[#FFD400]/5 transition-colors">
<p className="text-slate-500 text-xs font-light leading-relaxed max-w-[80%] font-sans group-hover:text-slate-300 transition-colors">
                                    Coordinating internal affairs, logistics, and ensuring the vision is executed flawlesly.
                                </p>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#FFD400] group-hover:text-[#FFD400] transition-all">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m-7-7h14" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{-DarkreaderInlineStroke: 'currentColor'}}></path></svg>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-10 border-t border-white/5">

<div className="group cursor-none-target reveal-up delay-100">
<div className="aspect-[3/4] rounded-lg overflow-hidden relative shine-wrapper mb-4 border border-white/5 hover:border-[#FFD400]/30 transition-all">
<img alt="Member" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&amp;q=80"/>
</div>
<div className="pl-1 transform transition-transform group-hover:translate-x-2">
<h5 className="text-xl font-display italic text-slate-300 group-hover:text-[#FFD400] transition-colors font-sans">David Kim</h5>
<p className="text-[10px] text-slate-600 uppercase tracking-widest mt-1 font-sans group-hover:text-slate-400">Tech Lead</p>
</div>
</div>
<div className="group cursor-none-target reveal-up delay-200">
<div className="aspect-[3/4] rounded-lg overflow-hidden relative shine-wrapper mb-4 border border-white/5 hover:border-[#FFD400]/30 transition-all">
<img alt="Member" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&amp;q=80"/>
</div>
<div className="pl-1 transform transition-transform group-hover:translate-x-2">
<h5 className="text-xl font-display italic text-slate-300 group-hover:text-[#FFD400] transition-colors font-sans">Sarah Vane</h5>
<p className="text-[10px] text-slate-600 uppercase tracking-widest mt-1 font-sans group-hover:text-slate-400">Events Head</p>
</div>
</div>
<div className="group cursor-none-target reveal-up delay-300">
<div className="aspect-[3/4] rounded-lg overflow-hidden relative shine-wrapper mb-4 border border-white/5 hover:border-[#FFD400]/30 transition-all">
<img alt="Member" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=400&amp;q=80"/>
</div>
<div className="pl-1 transform transition-transform group-hover:translate-x-2">
<h5 className="text-xl font-display italic text-slate-300 group-hover:text-[#FFD400] transition-colors font-sans">Arjun Patel</h5>
<p className="text-[10px] text-slate-600 uppercase tracking-widest mt-1 font-sans group-hover:text-slate-400">Finance</p>
</div>
</div>
<div className="group cursor-none-target reveal-up delay-100">
<div className="aspect-[3/4] rounded-lg overflow-hidden relative shine-wrapper mb-4 border border-white/5 hover:border-[#FFD400]/30 transition-all">
<img alt="Member" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&amp;q=80"/>
</div>
<div className="pl-1 transform transition-transform group-hover:translate-x-2">
<h5 className="text-xl font-display italic text-slate-300 group-hover:text-[#FFD400] transition-colors font-sans">Lina Wu</h5>
<p className="text-[10px] text-slate-600 uppercase tracking-widest mt-1 font-sans group-hover:text-slate-400">Marketing</p>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 mt-40 border-t border-white/10 pt-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 pb-12 reveal-up relative z-20 bg-gradient-to-t from-[#05080f] to-transparent">
<div className="max-w-md">
<h2 className="text-4xl mb-6 font-oswald font-light text-white">Stay ahead of the <span className="text-[#FFD400] italic font-display">curve</span>.</h2>
<div className="relative group">
<input className="bg-transparent border-b border-white/20 py-4 w-full md:w-96 text-sm placeholder-slate-600 focus:outline-none focus:border-[#FFD400] transition-all uppercase tracking-widest font-light text-white cursor-none-target" placeholder="ENTER EMAIL ADDRESS" type="email"/>
<button className="absolute right-0 top-4 text-slate-500 group-focus-within:text-[#FFD400] hover:text-[#FFD400] transition-colors cursor-none-target">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{-DarkreaderInlineStroke: 'currentColor'}}></path></svg>
</button>
</div>
</div>
<div className="text-right flex flex-col items-end gap-6">
<div className="flex gap-6 text-slate-500">
<a className="hover:text-[#FFD400] hover:-translate-y-1 transition-all duration-300 cursor-none-target magnetic-wrap" href="#"><svg className="feather feather-twitter" data-darkreader-inline-stroke="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{-DarkreaderInlineStroke: 'currentColor'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
<a className="hover:text-[#FFD400] hover:-translate-y-1 transition-all duration-300 cursor-none-target magnetic-wrap" href="#"><svg className="feather feather-instagram" data-darkreader-inline-stroke="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{-DarkreaderInlineStroke: 'currentColor'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="hover:text-[#FFD400] hover:-translate-y-1 transition-all duration-300 cursor-none-target magnetic-wrap" href="#"><svg className="feather feather-linkedin" data-darkreader-inline-stroke="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{-DarkreaderInlineStroke: 'currentColor'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
<p className="text-slate-700 text-[10px] font-mono uppercase tracking-widest font-sans">© 2024 Nexus Organization. All Rights Reserved.</p>
</div>
</section>
</main>


    </>
  );
}
