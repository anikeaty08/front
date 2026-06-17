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



        // Icons
        lucide.createIcons();

        // Process Section Scroll Logic (Sticky Image Changer)
        document.addEventListener('DOMContentLoaded', () => {
            const processSteps = document.querySelectorAll('.process-step');
            const images = [
                document.getElementById('process-img-1'),
                document.getElementById('process-img-2'),
                document.getElementById('process-img-3')
            ];
            const numberEl = document.getElementById('process-number');

            const observerOptions = {
                root: null,
                rootMargin: '-40% 0px -40% 0px',
                threshold: 0
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const step = entry.target.getAttribute('data-step');
                        const index = parseInt(step) - 1;

                        // Update Number
                        numberEl.innerText = `0${step}`;

                        // Update Images
                        images.forEach((img, i) => {
                            if (i === index) {
                                img.classList.add('active');
                                img.classList.remove('inactive');
                            } else {
                                img.classList.remove('active');
                                img.classList.add('inactive');
                            }
                        });
                    }
                });
            }, observerOptions);

            processSteps.forEach(step => observer.observe(step));
        });

        // Dynamic Time/Location
        (function() {
            const timeElement = document.getElementById('dynamic-time');
            const locationElement = document.getElementById('dynamic-location');
            
            function updateClock() {
                const now = new Date();
                timeElement.textContent = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
            }
            
            function updateLocation() {
                try {
                    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                    let locationName = timeZone ? timeZone.split('/').pop().replace(/_/g, ' ') : 'Global';
                    locationElement.textContent = locationName;
                } catch {
                    locationElement.textContent = 'Earth';
                }
            }
            updateClock(); updateLocation();
            setInterval(updateClock, 1000);
        })();

        // Draggable Infinite Scroll Logic
        (function() {
            const container = document.getElementById('marquee-container');
            const track = document.getElementById('marquee-track');

            if (!container || !track) return;

            // Clone items for infinite loop
            const originalCards = Array.from(track.children);
            originalCards.forEach(card => track.appendChild(card.cloneNode(true))); // Set 2
            originalCards.forEach(card => track.appendChild(card.cloneNode(true))); // Set 3

            let position = 0;
            const speed = 0.5;
            let isDragging = false;
            let startX = 0;
            let prevTranslate = 0;
            let animationID;

            function animate() {
                if (!isDragging) position += speed;
                const trackWidth = track.scrollWidth;
                const setWidth = trackWidth / 3;

                if (position >= setWidth) {
                    position = 0;
                    if(isDragging) { prevTranslate += setWidth; startX += setWidth; }
                }
                if (position < 0) {
                   position = setWidth - 1;
                   if(isDragging) { prevTranslate -= setWidth; startX -= setWidth; }
                }

                track.style.transform = `translateX(${-position}px)`;
                animationID = requestAnimationFrame(animate);
            }
            animationID = requestAnimationFrame(animate);

            // Drag Events
            const startDrag = (e) => {
                isDragging = true;
                container.classList.add('cursor-grabbing');
                container.classList.remove('cursor-grab');
                startX = e.pageX || e.touches[0].clientX;
                prevTranslate = position;
            }
            const moveDrag = (e) => {
                if (!isDragging) return;
                const currentX = e.pageX || e.touches[0].clientX;
                const diff = startX - currentX;
                position = prevTranslate + diff;
            }
            const endDrag = () => {
                isDragging = false;
                container.classList.add('cursor-grab');
                container.classList.remove('cursor-grabbing');
            }

            container.addEventListener('mousedown', startDrag);
            container.addEventListener('touchstart', startDrag);
            container.addEventListener('mousemove', moveDrag);
            container.addEventListener('touchmove', moveDrag);
            container.addEventListener('mouseup', endDrag);
            container.addEventListener('mouseleave', endDrag);
            container.addEventListener('touchend', endDrag);
        })();
    
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
      

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center mix-blend-difference text-white pointer-events-none">
<a className="group flex items-center gap-1 text-2xl md:text-3xl tracking-tight font-normal pointer-events-auto font-instrument-serif" href="#">
<span className="border-b border-white pb-0.5 group-hover:border-transparent transition-colors duration-300">spark</span>
<span>labs</span>
</a>

<div className="hidden md:flex items-center gap-8 lg:gap-12 pointer-events-auto">
<a className="text-sm font-medium uppercase tracking-wide hover:text-zinc-300 transition-colors" href="https://www.linkedin.com/in/cpritesh/">Linkedin</a>
<a className="text-sm font-medium uppercase tracking-wide hover:text-zinc-300 transition-colors" href="https://www.instagram.com/sparklabs.ai/">Instagram</a>
<a className="text-sm font-medium uppercase tracking-wide hover:text-zinc-300 transition-colors" href="http://spark-labs.org/portfolio.pdf" target="_blank">Portfolio</a>
<a className="px-5 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium uppercase tracking-wide backdrop-blur-sm" href="#contact">Start Project</a>
</div>
</nav>

<header className="relative w-full h-screen overflow-hidden bg-black">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/16b5c7c1-f196-4707-b5d8-9ba5ecac10bc_1600w.jpg">
<source src="https://spark-labs.org/video/reel.mp4" type="video/mp4"/>
</video>
<div className="bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 w-full px-6 py-12 md:px-12 md:py-20 flex flex-col md:flex-row justify-between items-end">
<div className="max-w-3xl fade-in-up">
<h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight font-instrument-serif mb-8">
            Scale Visual Content 
            <span className="text-zinc-500">Without Scaling Teams</span>
</h1>
<div className="flex flex-col md:flex-row gap-6 md:items-center text-lg font-light text-zinc-300">
<p className="max-w-md leading-relaxed text-zinc-400 text-base md:text-lg">
               We blend high-end art direction with intelligent automation to generate on-demand visuals that keep your business moving.
             </p>
<a className="group flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-all w-fit" href="#process">
<span className="">See how it works</span>
<svg className="lucide lucide-arrow-down-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-down-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 7 10 10"></path><path d="M17 7v10H7"></path></svg>
</a>
</div>
</div>
</div>
</header>

<section className="overflow-hidden z-10 bg-zinc-950 border-zinc-900/50 border-b pt-24 pb-24 relative">
<div className="px-6 md:px-12 mb-16 md:mb-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
<h2 className="text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight font-instrument-serif text-white">
            Solving Problems With <br/><span className="text-zinc-600">Intelligent AI</span>
</h2>
<div className="lg:pl-12">
<p className="text-lg md:text-xl font-light text-zinc-400 leading-relaxed">
              Whether you're fighting deadlines, budgets, or brand consistency, we build systems that generate premium assets instantly.
            </p>
</div>
</div>
</div>

<div className="flex w-full overflow-hidden select-none active:cursor-grabbing touch-pan-y" id="marquee-container" style={{maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>
<div className="flex gap-6 md:gap-8 min-w-max px-4 md:px-8 items-stretch will-change-transform" id="marquee-track">

<div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div>

<div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div>

<div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div>
<div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img alt="Ad Creatives" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl group-hover:translate-y-0 transition-transform duration-500 text-3xl text-white tracking-tight font-instrument-serif mb-3 translate-y-2">Ad Creatives</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Platform-perfect ads that match your brand identity and boost performance metrics without the manual grind.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04ff5a45-5b01-4b68-a092-f3ec2da28b5e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Product Visuals</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Generate unlimited angles, lighting scenarios, and environments for your products without a single reshoot.
                      </p>
</div>
</div>
</div>
</div><div className="group relative w-[85vw] md:w-[500px] h-[600px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f365bf31-c2fb-44c2-a24a-c78fedc640ba_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950"></div>
</div>
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="font-instrument-serif text-5xl md:text-6xl text-white/90">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-instrument-serif tracking-tight text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Social Content</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-zinc-300 text-sm leading-relaxed max-w-[90%] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Never run dry on content. Deploy daily on-brand social posts that engage your audience and grow your reach.
                      </p>
</div>
</div>
</div>
</div></div>
</div>
</section>

<section className="relative bg-zinc-950 border-b border-zinc-900/50" id="process">
<div className="max-w-[1600px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="hidden lg:block relative h-full min-h-screen border-r border-zinc-900/50">
<div className="sticky top-0 h-screen w-full flex items-center justify-center p-12 lg:p-16">
<div className="relative w-full h-[85vh] max-h-[800px] flex items-start">

<div className="relative w-3/4 h-full overflow-hidden">

<img alt="Process Step 1" className="process-img w-full h-full object-cover grayscale opacity-90" id="process-img-1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f36259a7-cc94-4846-8290-2df52026731d_original.gif"/>

<img alt="Process Step 2" className="process-img w-full h-full object-cover grayscale opacity-90" id="process-img-2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ebfeb48e-4108-49c6-86a2-a1491f93b564_original.gif"/>

<img alt="Process Step 3" className="process-img w-full h-full object-cover grayscale opacity-90" id="process-img-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
</div>

<div className="absolute -right-4 top-8 z-20">
<span className="font-instrument-serif text-7xl lg:text-8xl text-zinc-100/90 tracking-tight transition-all duration-500" id="process-number">03</span>
</div>
</div>
</div>
</div>

<div className="md:px-12 md:py-32 flex flex-col lg:gap-64 pt-24 pr-6 pb-24 pl-6 relative gap-x-32 gap-y-32">

<div className="lg:hidden mb-8">
<div className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm rounded-full px-3 py-1 mb-6 tracking-wider uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Process
                </div>
<h2 className="text-4xl md:text-5xl font-instrument-serif text-white tracking-tight">How it works</h2>
</div>

<div className="process-step group flex flex-col justify-center min-h-[40vh]" data-step="1">
<span className="lg:hidden text-6xl font-instrument-serif text-zinc-700 mb-6 block">01</span>
<h3 className="text-4xl md:text-5xl lg:text-6xl font-instrument-serif text-zinc-100 tracking-tight mb-8 group-hover:text-white transition-colors">
                   Share Your Vision +  Guidelines
                </h3>
<p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-lg mb-10">
                   A simple brief or a 15-minute sync is all we need. We digest your brand guidelines, goals, and aesthetic preferences to build a custom model that understands your visual language.
                </p>
<a className="text-sm uppercase tracking-widest font-medium text-white border-b border-zinc-600 pb-1 w-fit hover:border-white hover:text-emerald-400 transition-all" href="#contact">
                   Start a project
                </a>
</div>

<div className="process-step group flex flex-col justify-center min-h-[40vh]" data-step="2">
<span className="lg:hidden text-6xl font-instrument-serif text-zinc-700 mb-6 block">02</span>
<h3 className="text-4xl md:text-5xl lg:text-6xl font-instrument-serif text-zinc-100 tracking-tight mb-8 group-hover:text-white transition-colors">
                   (Intelligent) Model  Generation
                </h3>
<p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-lg mb-10">
                   We configure our AI models to your style. Instead of generic outputs, you get high-fidelity options tailored to your specific campaign needs in hours, not weeks.
                </p>
<a className="text-sm uppercase tracking-widest font-medium text-white border-b border-zinc-600 pb-1 w-fit hover:border-white hover:text-emerald-400 transition-all" href="#contact">
                   See examples
                </a>
</div>

<div className="process-step group flex flex-col justify-center min-h-[40vh]" data-step="3">
<span className="lg:hidden text-6xl font-instrument-serif text-zinc-700 mb-6 block">03</span>
<h3 className="text-4xl md:text-5xl lg:text-6xl font-instrument-serif text-zinc-100 tracking-tight mb-8 group-hover:text-white transition-colors">
                   Launch &amp; Automated  Scaling
                </h3>
<p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-lg mb-10">
                   Receive production-ready assets for every platform. We can even set up automated pipelines so your content scales effortlessly as your audience grows.
                </p>
<a className="text-sm uppercase tracking-widest font-medium text-white border-b border-zinc-600 pb-1 w-fit hover:border-white hover:text-emerald-400 transition-all" href="#contact">
                   Scale now
                </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-zinc-950 border-b border-zinc-900/50" id="benefits">
<div className="max-w-[1400px] mx-auto">
<div className="mb-20 max-w-2xl">
<h2 className="text-5xl md:text-7xl font-medium text-white tracking-tight font-instrument-serif mb-6">
              Creative power, <span className="text-zinc-600">unbound.</span>
</h2>
<p className="text-xl text-zinc-400 font-light leading-relaxed">
              Save time, cut costs, and do more with less. We help you work smarter so you can focus on strategy.
           </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-5 group relative min-h-[640px] bg-zinc-900/20 border border-zinc-800 rounded-[2.5rem] hover:border-zinc-600 transition-all duration-500 overflow-hidden flex flex-col justify-between p-10">

<div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950/80 z-0 pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)] animate-pulse"></span>
<span className="uppercase text-xs font-bold tracking-[0.2em] text-zinc-500">Consistent</span>
</div>
<h3 className="text-4xl md:text-5xl font-instrument-serif text-white tracking-tight mb-4 leading-[0.95]">AI That Knows You</h3>
<p className="text-lg text-zinc-400 font-light leading-relaxed max-w-sm">
                Feed us your brand assets once, and our AI masters your look forever.
              </p>
</div>
<div className="absolute bottom-0 left-0 w-full h-[55%] z-0 rounded-b-[2.5rem] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/20 to-transparent z-10"></div>
<img alt="AI Gen" className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f36259a7-cc94-4846-8290-2df52026731d_original.gif"/>
</div>
</div>

<div className="lg:col-span-7 flex flex-col gap-6 h-full">

<div className="group relative bg-zinc-900/20 border border-zinc-800 rounded-[2.5rem] p-10 hover:border-zinc-600 transition-all duration-500 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
<div className="relative z-10 flex-1">
<h3 className="md:text-5xl leading-[0.95] text-4xl text-white tracking-tight font-instrument-serif mb-4">Perfect Consistency</h3>
<p className="text-lg text-zinc-400 font-light leading-relaxed">
                    Every piece of content adheres strictly to your guidelines, ensuring a unified brand voice across channels.
                  </p>
</div>
<div className="relative w-full md:w-48 h-48 flex-shrink-0 rounded-2xl overflow-hidden border border-zinc-800/50 group-hover:border-zinc-600 transition-colors">
<img className="transition-all duration-700 ease-in-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ebfeb48e-4108-49c6-86a2-a1491f93b564_original.gif"/>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">

<div className="group relative bg-zinc-900/20 border border-zinc-800 rounded-[2.5rem] p-10 hover:border-zinc-600 transition-all duration-500 flex flex-col justify-between min-h-[320px] overflow-hidden">
<div className="relative z-10">
<h3 className="text-3xl font-medium text-white mb-2 tracking-tight">Cost Efficiency</h3>
<p className="text-base text-zinc-500 font-light">Cut overhead significantly.</p>
</div>
<div className="relative z-10">
<div className="flex items-baseline gap-1 mb-5">
<span className="text-7xl font-semibold text-white tracking-tighter">-85</span>
<span className="text-3xl text-emerald-500 font-medium">%</span>
</div>
<div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[15%] group-hover:w-[85%] transition-all duration-1000 ease-out rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
</div>
</div>
</div>

<div className="group relative bg-zinc-900/20 border border-zinc-800 rounded-[2.5rem] p-10 hover:border-zinc-600 transition-all duration-500 flex flex-col justify-between min-h-[320px] overflow-hidden">
<div className="relative z-10">
<h3 className="text-3xl font-medium text-white mb-2 tracking-tight">Hyper Speed</h3>
<p className="text-base text-zinc-500 font-light">Concept to final in 24h.</p>
</div>
<div className="relative z-10 flex items-end">
<div className="flex items-center gap-3 bg-black border border-zinc-800 rounded-full pl-5 pr-6 py-3 shadow-lg group-hover:border-zinc-600 transition-colors">
<div className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
</div>
<span className="text-sm font-mono text-zinc-300 tracking-wide">Rendering...</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-zinc-950 border-b border-zinc-900/50" id="insights">
<div className="max-w-[1800px] mx-auto">
<h2 className="text-5xl md:text-7xl font-instrument-serif font-normal text-white tracking-tight mb-24">
    On our minds
    <span className="block font-inter text-xl text-zinc-400 font-light mt-6 max-w-2xl tracking-normal leading-relaxed">
        Explore our latest thinking on the intersection of design, technology, and automation.
    </span>
</h2>
<div className="flex flex-col">

<article className="group grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-8 py-10 border-t border-zinc-800 items-center hover:bg-zinc-900/20 transition-colors duration-300">
<div className="lg:col-span-2">
<span className="text-sm font-semibold text-zinc-400">Report</span>
</div>
<div className="lg:col-span-6">
<h3 className="text-2xl md:text-3xl text-white leading-snug">
<span className="font-semibold tracking-tight">Unlocking High-Value Users</span>
<span className="font-instrument-serif text-zinc-400 italic">with Machine Learning</span>
</h3>
</div>
<div className="lg:col-span-2 lg:text-right">
<span className="text-sm font-medium text-zinc-400">2 min read</span>
</div>
<div className="lg:col-span-2 flex justify-start lg:justify-end">
<a className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-800 border border-zinc-700/50 text-white hover:bg-white hover:text-black transition-all duration-300 group/btn" href="#">
<span className="text-sm font-medium">Read now</span>
<div className="w-5 h-5 flex items-center justify-center rounded-full bg-white/10 group-hover/btn:bg-black/10 transition-colors">
<svg className="lucide lucide-arrow-right transition-transform group-hover/btn:translate-x-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>
</div>
</article>

<article className="group grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-8 py-10 border-t border-zinc-800 items-center hover:bg-zinc-900/20 transition-colors duration-300">
<div className="lg:col-span-2">
<span className="text-sm font-semibold text-zinc-400">Blog Post</span>
</div>
<div className="lg:col-span-6">
<h3 className="text-2xl md:text-3xl text-white leading-snug">
<span className="font-semibold tracking-tight">Why Your Customer Lifetime Value Strategy</span>
<span className="font-instrument-serif text-zinc-400 italic">Hinges on a High-Performance Email Engine</span>
</h3>
</div>
<div className="lg:col-span-2 lg:text-right">
<span className="text-sm font-medium text-zinc-400">5 min read</span>
</div>
<div className="lg:col-span-2 flex justify-start lg:justify-end">
<a className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-800 border border-zinc-700/50 text-white hover:bg-white hover:text-black transition-all duration-300 group/btn" href="#">
<span className="text-sm font-medium">Read now</span>
<div className="w-5 h-5 flex items-center justify-center rounded-full bg-white/10 group-hover/btn:bg-black/10 transition-colors">
<svg className="lucide lucide-arrow-right transition-transform group-hover/btn:translate-x-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>
</div>
</article>

<article className="group grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-8 py-10 border-t border-zinc-800 items-center hover:bg-zinc-900/20 transition-colors duration-300">
<div className="lg:col-span-2">
<span className="text-sm font-semibold text-zinc-400">Blog Post</span>
</div>
<div className="lg:col-span-6">
<h3 className="text-2xl md:text-3xl text-white leading-snug">
<span className="font-semibold tracking-tight">Inside Salesforce Connections 2025</span>
<span className="font-instrument-serif text-zinc-400 italic">and the Conversational Potential of Agentic AI</span>
</h3>
</div>
<div className="lg:col-span-2 lg:text-right">
<span className="text-sm font-medium text-zinc-400">5 min read</span>
</div>
<div className="lg:col-span-2 flex justify-start lg:justify-end">
<a className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-800 border border-zinc-700/50 text-white hover:bg-white hover:text-black transition-all duration-300 group/btn" href="#">
<span className="text-sm font-medium">Read now</span>
<div className="w-5 h-5 flex items-center justify-center rounded-full bg-white/10 group-hover/btn:bg-black/10 transition-colors">
<svg className="lucide lucide-arrow-right transition-transform group-hover/btn:translate-x-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>
</div>
</article>

<article className="group grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-8 py-10 border-t border-zinc-800 items-center hover:bg-zinc-900/20 transition-colors duration-300">
<div className="lg:col-span-2">
<span className="text-sm font-semibold text-zinc-400">Blog Post</span>
</div>
<div className="lg:col-span-6">
<h3 className="text-2xl md:text-3xl text-white leading-snug">
<span className="font-semibold tracking-tight">Driving Experimentation and AI Innovation</span>
<span className="font-instrument-serif text-zinc-400 italic">with Amplitude</span>
</h3>
</div>
<div className="lg:col-span-2 lg:text-right">
<span className="text-sm font-medium text-zinc-400">5 min read</span>
</div>
<div className="lg:col-span-2 flex justify-start lg:justify-end">
<a className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-800 border border-zinc-700/50 text-white hover:bg-white hover:text-black transition-all duration-300 group/btn" href="#">
<span className="text-sm font-medium">Read now</span>
<div className="w-5 h-5 flex items-center justify-center rounded-full bg-white/10 group-hover/btn:bg-black/10 transition-colors">
<svg className="lucide lucide-arrow-right transition-transform group-hover/btn:translate-x-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>
</div>
</article>

<article className="group grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-8 py-10 border-t border-zinc-800 items-center hover:bg-zinc-900/20 transition-colors duration-300">
<div className="lg:col-span-2">
<span className="text-sm font-semibold text-zinc-400">Blog Post</span>
</div>
<div className="lg:col-span-6">
<h3 className="text-2xl md:text-3xl text-white leading-snug">
<span className="font-semibold tracking-tight">Experience Centers:</span>
<span className="font-instrument-serif text-zinc-400 italic">Where Brands Come to Life</span>
</h3>
</div>
<div className="lg:col-span-2 lg:text-right">
<span className="text-sm font-medium text-zinc-400">6 min read</span>
</div>
<div className="lg:col-span-2 flex justify-start lg:justify-end">
<a className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-800 border border-zinc-700/50 text-white hover:bg-white hover:text-black transition-all duration-300 group/btn" href="#">
<span className="text-sm font-medium">Read now</span>
<div className="w-5 h-5 flex items-center justify-center rounded-full bg-white/10 group-hover/btn:bg-black/10 transition-colors">
<svg className="lucide lucide-arrow-right transition-transform group-hover/btn:translate-x-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>
</div>
</article>

<article className="group grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-8 py-10 border-t border-zinc-800 items-center hover:bg-zinc-900/20 transition-colors duration-300">
<div className="lg:col-span-2">
<span className="text-sm font-semibold text-zinc-400">Blog Post</span>
</div>
<div className="lg:col-span-6">
<h3 className="text-2xl md:text-3xl text-white leading-snug">
<span className="font-semibold tracking-tight">Smarter Investments for an Evolving Marketing Landscape:</span>
<span className="font-instrument-serif text-zinc-400 italic">MMM Meta-Analysis with Monks and TikTok</span>
</h3>
</div>
<div className="lg:col-span-2 lg:text-right">
<span className="text-sm font-medium text-zinc-400">7 min read</span>
</div>
<div className="lg:col-span-2 flex justify-start lg:justify-end">
<a className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-800 border border-zinc-700/50 text-white hover:bg-white hover:text-black transition-all duration-300 group/btn" href="#">
<span className="text-sm font-medium">Read now</span>
<div className="w-5 h-5 flex items-center justify-center rounded-full bg-white/10 group-hover/btn:bg-black/10 transition-colors">
<svg className="lucide lucide-arrow-right transition-transform group-hover/btn:translate-x-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>
</div>
</article>
<div className="border-b border-zinc-800 w-full"></div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-black relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
<div className="">
<div className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 border border-zinc-800 bg-zinc-900/50 rounded-full px-3 py-1 mb-8 tracking-wider uppercase">
                Contact
             </div>
<h2 className="text-5xl md:text-7xl font-instrument-serif text-white tracking-tight mb-6">Let's start a <br/>project together.</h2>
<p className="text-xl text-zinc-400 font-light mb-12 max-w-md">
                Ready to automate your creative workflow? Fill out the form and we'll be in touch within 24 hours.
             </p>
<div className="space-y-6">
<a className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group" href="mailto:infosparklabs@gmail.com">
<div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<span className="text-lg">infosparklabs@gmail.com</span>
</a>
<div className="flex items-center gap-4 text-zinc-300">
<div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center">
<svg className="lucide lucide-map-pin w-5 h-5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<span className="text-lg">Los Angeles / Remote</span>
</div>
</div>
</div>

<form className="glass-panel p-8 md:p-10 rounded-3xl space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs uppercase font-semibold tracking-wider text-zinc-500 ml-1">Name</label>
<input className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase font-semibold tracking-wider text-zinc-500 ml-1">Email</label>
<input className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase font-semibold tracking-wider text-zinc-500 ml-1">Interest</label>
<select className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-300 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all appearance-none cursor-pointer">
<option>Ad Creatives</option>
<option>Product Photography</option>
<option>Virtual Staging</option>
<option>Automation Consulting</option>
<option>Other</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs uppercase font-semibold tracking-wider text-zinc-500 ml-1">Message</label>
<textarea className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all resize-none" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<button className="hover:bg-zinc-200 transition-colors flex gap-2 group font-semibold text-black bg-white w-full rounded-xl pt-4 pb-4 gap-x-2 gap-y-2 items-center justify-center" onclick="event.preventDefault();const b=this;const o=b.innerHTML;b.disabled=true;b.innerHTML='&lt;svg class=\'animate-spin h-5 w-5 text-black mr-2\' xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\'&gt;&lt;circle class=\'opacity-25\' cx=\'12\' cy=\'12\' r=\'10\' stroke=\'currentColor\' strokeWidth=\'4\'&gt;&lt;/circle&gt;&lt;path class=\'opacity-75\' fill=\'currentColor\' d=\'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z\'&gt;&lt;/path&gt;&lt;/svg&gt;Sending...';setTimeout(()=&gt;{b.innerHTML=o;b.disabled=false;const t=document.createElement('div');t.className='fixed bottom-6 right-6 z-[9999] flex items-center gap-3 px-6 py-4 bg-white text-zinc-950 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-zinc-100 transform translate-y-24 opacity-0 transition-all duration-500 font-medium font-inter tracking-tight';t.innerHTML='&lt;svg xmlns=\'http://www.w3.org/2000/svg\' width=\'20\' height=\'20\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'#10b981\' strokeWidth=\'2.5\' strokeLinecap=\'round\' strokeLinejoin=\'round\'&gt;&lt;polyline points=\'20 6 9 17 4 12\'/&gt;&lt;/svg&gt;&lt;span&gt;Request sent successfully&lt;/span&gt;';document.body.appendChild(t);requestAnimationFrame(()=&gt;t.classList.remove('translate-y-24','opacity-0'));setTimeout(()=&gt;{t.classList.add('translate-y-24','opacity-0');setTimeout(()=&gt;t.remove(),500)},3000);b.closest('form').reset()},1500)" type="submit">
    Send Request
    <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</form>
</div>
</section>

<div className="border-t border-zinc-900 bg-zinc-950 pt-12 pb-6">
<div className="max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 mb-12">

<div className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-sm font-mono">
<span className="text-white" id="dynamic-time">12:12</span>
<span className="text-zinc-700">|</span>
<span id="dynamic-location">Bangkok</span>
</div>

<div className="flex gap-8 text-sm font-medium uppercase tracking-wide text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="https://www.linkedin.com/in/cpritesh/">LinkedIn</a>
<a className="hover:text-white transition-colors" href="https://www.instagram.com/sparklabs.ai/">Instagram</a>
</div>
</div>

<div className="relative w-full overflow-hidden select-none opacity-40 hover:opacity-100 transition-opacity duration-500">
<div className="marquee-container-text">
<div className="flex items-center whitespace-nowrap">
<span className="text-[12vw] leading-none font-instrument-serif text-zinc-800 px-8">SPARK LABS ©</span>
<span className="text-[12vw] leading-none font-instrument-serif text-zinc-800 px-8">SPARK LABS ©</span>
</div>
<div aria-hidden="true" className="flex items-center whitespace-nowrap">
<span className="text-[12vw] leading-none font-instrument-serif text-zinc-800 px-8">SPARK LABS ©</span>
<span className="text-[12vw] leading-none font-instrument-serif text-zinc-800 px-8">SPARK LABS ©</span>
</div>
</div>
</div>
</div>



    </>
  );
}
