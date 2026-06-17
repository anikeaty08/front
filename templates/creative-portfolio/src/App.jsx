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



        let currentSection = 0;
        let isAnimating = false;
        const totalSections = 5;
        let lastScrollTime = 0;
        
        function updateDots() {
            document.querySelectorAll('.dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSection);
            });
        }
        
        function goToSection(sectionIndex, force = false) {
            if (!force && (isAnimating || sectionIndex === currentSection || sectionIndex < 0 || sectionIndex >= totalSections)) return;
            
            isAnimating = true;
            const oldSection = document.getElementById(`section-${currentSection}`);
            const newSection = document.getElementById(`section-${sectionIndex}`);
            
            if (oldSection) oldSection.classList.remove('active');
            if (newSection) newSection.classList.add('active');
            
            currentSection = sectionIndex;
            updateDots();
            
            setTimeout(() => {
                isAnimating = false;
            }, 500);
        }
        
        function nextSection() {
            if (currentSection < totalSections - 1) {
                goToSection(currentSection + 1);
            }
        }
        
        function prevSection() {
            if (currentSection > 0) {
                goToSection(currentSection - 1);
            }
        }
        
        // Touch zones click events
        document.getElementById('touch-next').addEventListener('click', nextSection);
        document.getElementById('touch-prev').addEventListener('click', prevSection);
        
        // Wheel event for desktop navigation
        let wheelTimeout;
        document.addEventListener('wheel', (e) => {
            e.preventDefault();
            
            const now = Date.now();
            if (now - lastScrollTime < 800 || isAnimating) return;
            
            clearTimeout(wheelTimeout);
            wheelTimeout = setTimeout(() => {
                if (e.deltaY > 0) {
                    lastScrollTime = now;
                    nextSection();
                } else if (e.deltaY < 0) {
                    lastScrollTime = now;
                    prevSection();
                }
            }, 10);
        }, { passive: false });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (isAnimating) return;
            
            if (e.key === 'ArrowDown' || e.key === ' ') {
                e.preventDefault();
                nextSection();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                prevSection();
            }
        });
        
        // Touch events for mobile
        let touchStartY = 0;
        let touchStartTime = 0;
        
        document.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
            touchStartTime = Date.now();
        }, { passive: true });
        
        document.addEventListener('touchend', (e) => {
            const touchEndY = e.changedTouches[0].clientY;
            const touchEndTime = Date.now();
            const deltaY = touchStartY - touchEndY;
            const deltaTime = touchEndTime - touchStartTime;
            
            if (Math.abs(deltaY) > 50 && deltaTime < 500 && !isAnimating) {
                if (deltaY > 0) {
                    nextSection();
                } else {
                    prevSection();
                }
            }
        }, { passive: true });
        
        // Prevent default touch behavior on body to avoid scrolling
        document.body.addEventListener('touchmove', (e) => {
            e.preventDefault();
        }, { passive: false });
        
        // Initialize
        updateDots();
        goToSection(0, true);
    
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
      
<div className="fixed top-0 w-full -z-10 h-screen bg-cover bg-center brightness-75" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/bc00d3f0-1d80-4f28-b7a3-e584196b6fc8_3840w.jpg\')'}}></div>

<div className="touch-zone-next" id="touch-next"></div>
<div className="touch-zone-prev" id="touch-prev"></div>

<div className="fixed z-50 bg-transparent pt-6 pr-6 pb-6 pl-6 top-0 right-0 left-0">
<div className="max-w-4xl border-white/20 border rounded-full mr-auto ml-auto pt-3 pr-6 pb-3 pl-6" style={{background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'}}>
<div className="flex items-center justify-between">
<div className="flex items-center">
<span className="cursor-pointer text-lg font-semibold text-white tracking-tight font-geist" onclick="window.location.href='/home'" role="button">Zara Liu</span>
</div>
<ul className="hidden md:flex items-center gap-1 text-sm font-medium text-white/60">
<li className=""><a className="text-white bg-white/10 rounded-full pt-2 pr-4 pb-2 pl-4" href="/home">Home</a></li>
<li className=""><a className="hover:text-white transition-colors duration-300 hover:bg-white/10 rounded-full pt-2 pr-4 pb-2 pl-4" href="/about">About</a></li>
<li className=""><a className="hover:text-white transition-colors duration-300 hover:bg-white/10 rounded-full pt-2 pr-4 pb-2 pl-4" href="/work">Work</a></li>
<li className="hover:text-white transition-colors duration-300 hover:bg-white/10 rounded-full pt-2 pr-4 pb-2 pl-4"><a className="hover:text-white transition-colors duration-300 hover:bg-white/10 rounded-full pt-2 pr-4 pb-2 pl-4" href="/contact">Contact</a></li>
</ul>
<div className="flex gap-2 items-center">
<div className="relative inline-block group">
<button className="group inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.1] hover:text-white text-sm font-normal text-white/70 tracking-tight font-geist rounded-full pt-[12px] pr-[17px] pb-[12px] pl-[17px] relative items-center justify-center" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)', background: 'radial-gradient(ellipse at bottom,rgba(55,55,55,1) 0%,rgba(0,0,0,1) 100%)'}}>
<span className="z-10 relative">Download Resume</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255, 255, 255, .55), rgba(255, 255, 255, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>
</div>
</div>
</div>

<div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-4">
<div className="dot active" data-section="0" onclick="goToSection(0)"></div>
<div className="dot" data-section="1" onclick="goToSection(1)"></div>
<div className="dot" data-section="2" onclick="goToSection(2)"></div>
<div className="dot" data-section="3" onclick="goToSection(3)"></div>
<div className="dot" data-section="4" onclick="goToSection(4)"></div>
</div>

<div className="section active" id="section-0">
<div className="flex h-full pr-6 pl-6 items-center justify-center">
<section className="relative z-10 max-w-4xl text-center pt-20">
<div className="mb-6 flex items-center justify-center gap-4">
<div className="flex -space-x-3">
<img alt="Client 1" className="h-9 w-9 rounded-full ring-2 ring-black/60 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2201bb49-ba9d-4655-9360-c0350107a9fd_320w.jpg"/>
<img alt="Client 2" className="h-9 w-9 rounded-full ring-2 ring-black/60 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c1bfea42-f5c9-4b52-974e-36fe36212b17_320w.jpg"/>
<img alt="Client 3" className="h-9 w-9 rounded-full ring-2 ring-black/60 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b6d79211-32f1-430e-96b3-9b4d857c1482_320w.jpg"/>
<img alt="Client 4" className="h-9 w-9 rounded-full ring-2 ring-black/60 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5bf79840-b7ed-4d8d-acd3-c5f5835a065e_320w.jpg"/>
<img alt="Client 5" className="h-9 w-9 rounded-full ring-2 ring-black/60 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/590efc90-e69f-4f7e-a7c1-e54d0a7fe400_320w.jpg"/>
</div>
<div className="flex flex-col items-start">
<div className="flex items-center">
<svg className="h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="h-4 w-4 fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-xs font-medium text-white/70 font-geist mt-1">30+ completed projects</p>
</div>
</div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-geist max-w-5xl mx-auto text-white mb-6">Ready to
                    <span className="italic text-white tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>explore</span> design that inspires?</h1>
<p className="text-base sm:text-lg font-normal text-white/70 font-geist max-w-2xl mx-auto mb-8">I craft modern, user-focused digital experiences. If you're looking for impactful design that blends creativity and function, you're in the right place.</p>
<div className="flex flex-col gap-3 sm:flex-row items-center justify-center">
<div className="relative inline-block group">
<button className="group inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.1] hover:text-white text-sm font-normal text-white/70 tracking-tight font-geist rounded-full pt-[12px] pr-[17px] pb-[12px] pl-[17px] relative items-center justify-center" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)', background: 'radial-gradient(ellipse at bottom,rgba(55,55,55,1) 0%,rgba(0,0,0,1) 100%)'}}>
<span className="z-10 relative">View Work</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255, 255, 255, .55), rgba(255, 255, 255, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
<a className="inline-flex items-center justify-center gap-2 min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.1] hover:text-white text-sm font-normal text-white/70 tracking-tight rounded-full pt-[12px] pr-[17px] pb-[12px] pl-[17px] backdrop-blur font-geist relative" href="#" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)', background: 'transparent'}}>
<span className="z-10 relative">Learn more</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</a>
</div>
</section>
</div>
</div>

<div className="section" id="section-1">
<div className="h-full flex items-center justify-center px-6">
<section className="max-w-4xl text-center pt-20">
<div className="mb-12">
<h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-geist text-white mb-6">Design is storytelling through <span className="italic" style={{fontFamily: '\'Playfair Display\', serif'}}>experience</span></h2>
<p className="text-base sm:text-lg font-normal text-white/70 font-geist max-w-3xl mx-auto">I'm a passionate UI/UX designer with over 8 years of experience crafting digital experiences that connect brands with their audiences. My approach combines strategic thinking with creative execution.</p>
</div>
<div className="grid lg:grid-cols-2 gap-12 items-start text-left mb-12">
<div>
<div className="relative rounded-2xl overflow-hidden mb-6">
<img alt="Designer portrait" className="w-full h-96 lg:h-[400px] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/84e6c9bd-0fb3-4f2e-b3c9-cc0309f9570e_1600w.jpg"/>
<div className="bg-gradient-to-t from-black/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
<div className="space-y-6">
<p className="text-lg text-white/70 leading-relaxed">From startups to enterprise companies, I've helped organizations tell their stories through thoughtful design, intuitive interfaces, and meaningful user experiences.</p>
<p className="text-lg text-white/70 leading-relaxed">When I'm not designing, you'll find me exploring new technologies, reading about behavioral psychology, or traveling to discover new perspectives.</p>
<div className="grid grid-cols-2 gap-8 mt-8">
<div>
<div className="text-3xl font-semibold tracking-tight text-white">50+</div>
<div className="text-sm mt-1 text-white/60">Projects Completed</div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight text-white">8</div>
<div className="text-sm mt-1 text-white/60">Years Experience</div>
</div>
</div>
<div className="flex flex-wrap gap-3 mt-8">
<span className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium">UI/UX Design</span>
<span className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium">Brand Strategy</span>
<span className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium">Product Design</span>
<span className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium">Prototyping</span>
</div>
</div>
</div>
<div className="flex justify-center">
<div className="relative inline-block group">
<button className="group inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.1] hover:text-white text-sm font-normal text-white/70 tracking-tight rounded-full pt-[12px] pr-[17px] pb-[12px] pl-[17px] relative items-center justify-center font-geist" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)', background: 'radial-gradient(ellipse at bottom,rgba(55,55,55,1) 0%,rgba(0,0,0,1) 100%)'}}>
<span className="z-10 relative">Download Resume</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255, 255, 255, .55), rgba(255, 255, 255, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>
</section>
</div>
</div>

<div className="section" id="section-2">
<div className="h-full flex items-center justify-center px-6">
<section className="max-w-4xl text-center pt-20">
<div className="mb-12">
<h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-geist text-white mb-6">Recent <span className="italic" style={{fontFamily: '\'Playfair Display\', serif'}}>Work</span></h2>
<p className="text-base sm:text-lg font-normal text-white/70 font-geist max-w-3xl mx-auto">A curated set of projects from the past months. Clean UI, clear structure, and fast delivery. Designed in Figma and built in React and Tailwind when needed.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start text-left mb-12">
<div>
<div className="w-full h-[360px] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-800 mb-6">
<img alt="Portfolio work" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/793bcc86-3816-4749-9460-729fba0a7052_800w.jpg"/>
</div>
</div>
<div className="space-y-6">
<p className="text-lg text-white/70 leading-relaxed">I'm a product designer who believes in the power of simplicity. My approach is rooted in understanding user needs deeply and crafting solutions that feel effortless and intuitive.</p>
<p className="text-lg text-white/70 leading-relaxed">With over 8 years of experience working with startups and Fortune 500 companies, I've learned that the best designs are often the ones you don't notice – they just work.</p>
<div className="grid grid-cols-2 gap-8 mt-8">
<div>
<div className="text-3xl font-semibold tracking-tight text-white">15+</div>
<div className="text-sm mt-1 text-white/60">Happy Clients</div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight text-white">3</div>
<div className="text-sm mt-1 text-white/60">Design Awards</div>
</div>
</div>
</div>
</div>
<div className="flex justify-center">
<div className="relative inline-block group">
<button className="group inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.1] hover:text-white text-sm font-normal text-white/70 tracking-tight rounded-full pt-[12px] pr-[17px] pb-[12px] pl-[17px] relative items-center justify-center font-geist" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)', background: 'radial-gradient(ellipse at bottom,rgba(55,55,55,1) 0%,rgba(0,0,0,1) 100%)'}}>
<span className="z-10 relative">View All Projects</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255, 255, 255, .55), rgba(255, 255, 255, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>
</section>
</div>
</div>

<div className="section" id="section-3">
<div className="flex h-full items-center justify-center px-6">
<section className="max-w-4xl text-center pt-20">
<div className="mb-12">
<h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-geist text-white mb-6">What Clients <span className="italic" style={{fontFamily: '\'Playfair Display\', serif'}}>Say</span></h2>
<p className="text-base sm:text-lg font-normal text-white/70 font-geist max-w-3xl mx-auto">What our clients say about working with us. Real feedback from real partnerships that drive exceptional results.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
<div className="relative overflow-hidden text-white rounded-2xl p-6" style={{background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.15)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'}}>
<div className="flex items-center gap-1 mb-4 text-white/90">
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
</div>
<p className="text-base leading-relaxed mb-6 text-white/90">Zara transformed our brand identity beyond what we imagined. Professional, creative, and delivered on time.</p>
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium text-white">Emma Collins</div>
<div className="text-xs mt-1 text-white/70">CEO, Powersurge</div>
</div>
<img alt="Emma Collins" className="w-8 h-8 object-cover rounded-full ring-2 ring-white/20" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&amp;h=64&amp;fit=crop&amp;crop=faces"/>
</div>
</div>
<div className="relative overflow-hidden text-white rounded-2xl p-6" style={{background: 'rgba(255, 255, 255, 0.12)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.2)', boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)'}}>
<div className="flex items-center gap-1 mb-4 text-white/90">
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
</div>
<p className="leading-relaxed text-base text-white/90 mb-6">Working with Zara was incredible. The sleek design resonates with customers and has improved our user experience.</p>
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium text-white">Michael Brooks</div>
<div className="text-xs text-white/70">CTO, Warpspeed</div>
</div>
<img alt="Michael Brooks" className="w-8 h-8 object-cover rounded-full ring-2 ring-white/20" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=64&amp;h=64&amp;fit=crop&amp;crop=faces"/>
</div>
</div>
<div className="relative overflow-hidden text-white rounded-2xl p-6" style={{background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.15)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'}}>
<div className="flex items-center gap-1 mb-4 text-white/90">
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
</svg>
</div>
<p className="text-base leading-relaxed mb-6 text-white/90">From strategy to launch, Zara was with us every step. Their creativity helped us stand out in a crowded market.</p>
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium text-white">Emily Harris</div>
<div className="text-xs mt-1 text-white/70">CEO, Boltshift</div>
</div>
<img alt="Emily Harris" className="w-8 h-8 object-cover rounded-full ring-2 ring-white/20" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=64&amp;h=64&amp;fit=crop&amp;crop=faces"/>
</div>
</div>
</div>
<div className="flex justify-center">
<div className="relative inline-block group">
<button className="group inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.1] hover:text-white text-sm font-normal text-white/70 tracking-tight rounded-full pt-[12px] pr-[17px] pb-[12px] pl-[17px] relative items-center justify-center font-geist" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)', background: 'radial-gradient(ellipse at bottom,rgba(55,55,55,1) 0%,rgba(0,0,0,1) 100%)'}}>
<span className="z-10 relative">See All Reviews</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255, 255, 255, .55), rgba(255, 255, 255, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>
</section>
</div>
</div>

<div className="section" id="section-4">
<div className="h-full flex items-center justify-center px-6">
<section className="max-w-4xl text-center pt-20">
<div className="mb-12">
<h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-geist text-white mb-6">Ready to Get <span className="italic" style={{fontFamily: '\'Playfair Display\', serif'}}>Started?</span></h2>
<p className="text-base sm:text-lg font-normal text-white/70 font-geist max-w-3xl mx-auto">Let's discuss your project and explore how we can work together to create something amazing. Ready to turn your ideas into reality?</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 text-left">
<div className="text-white rounded-2xl p-6" style={{background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.15)'}}>
<svg className="h-6 w-6 text-white/80 mb-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-10 5L2 7"></path></svg>
<div className="text-lg font-medium mb-2 text-white">Email</div>
<div className="text-sm text-white/70">hello@zaraliu.com</div>
</div>
<div className="text-white rounded-2xl p-6" style={{background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.15)'}}>
<svg className="h-6 w-6 text-white/80 mb-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
<div className="text-lg font-medium mb-2 text-white">Phone</div>
<div className="text-sm text-white/70">+1 (555) 123-4567</div>
</div>
<div className="text-white rounded-2xl p-6" style={{background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.15)'}}>
<svg className="h-6 w-6 text-white/80 mb-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
<div className="text-lg font-medium mb-2 text-white">Location</div>
<div className="text-sm text-white/70">San Francisco, CA</div>
</div>
</div>
<div className="flex justify-center">
<div className="relative inline-block group">
<button className="group inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.1] hover:text-white text-sm font-normal text-white/70 tracking-tight rounded-full pt-[12px] pr-[17px] pb-[12px] pl-[17px] relative items-center justify-center font-geist" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)', background: 'radial-gradient(ellipse at bottom,rgba(55,55,55,1) 0%,rgba(0,0,0,1) 100%)'}}>
<span className="z-10 relative">Get In Touch</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255, 255, 255, .55), rgba(255, 255, 255, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>
</section>
</div>
</div>


    </>
  );
}
