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



        // Icon Initialization
        lucide.createIcons();

        // Intersection Observer for Scroll Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

        // Typewriter Logic
        function typeWriter(elementId, text, speed = 50, startDelay = 0) {
            const element = document.getElementById(elementId);
            if(!element) return;
            
            let i = 0;
            setTimeout(() => {
                function type() {
                    if (i < text.length) {
                        element.innerHTML += text.charAt(i);
                        i++;
                        setTimeout(type, speed + (Math.random() * 50)); // Add slight randomness for "AI" feel
                    } else {
                        // Keep cursor blinking but remove typing class if needed
                    }
                }
                type();
            }, startDelay);
        }

        // Initialize Text Animations
        document.addEventListener('DOMContentLoaded', () => {
            typeWriter('hero-typewriter', 'It is a known fact that AI innovation requires strategic development.', 40, 500);
            
            // Observer for CTA typewriter to trigger when visible
            const ctaObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        if(document.getElementById('cta-typewriter').innerHTML === "") {
                            typeWriter('cta-typewriter', 'Let our models process your vision.', 50, 200);
                        }
                    }
                });
            });
            ctaObserver.observe(document.getElementById('cta-typewriter'));
        });
    
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
      

<div className="noise-bg"></div>

<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center transition-all duration-300" id="navbar">
<div className="text-xl font-semibold tracking-tighter mix-blend-difference">KAIRO<span className="text-[0.6em] align-top opacity-50">®</span></div>
<div className="hidden md:flex gap-8 text-sm font-medium tracking-tight text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Work</a>
<a className="hover:text-white transition-colors" href="#">Agency</a>
<a className="hover:text-white transition-colors" href="#">Systems</a>
</div>
<button className="text-sm font-medium border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300">
            Menu
        </button>
</nav>

<header className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black z-0 pointer-events-none"></div>

<div className="absolute inset-0 flex justify-between items-center px-4 md:px-20 opacity-40 md:opacity-100 pointer-events-none select-none z-0">

<div className="w-24 h-64 md:w-48 md:h-96 rounded-lg overflow-hidden glass-panel transform -translate-y-12 fade-in-up visible" style={{transitionDelay: '100ms'}}>
<img alt="Abstract" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="w-24 h-64 md:w-48 md:h-96 rounded-lg overflow-hidden glass-panel transform translate-y-12 fade-in-up visible" style={{transitionDelay: '200ms'}}>
<img alt="Abstract" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="flex flex-col w-full max-w-7xl z-10 mr-auto ml-auto relative items-center justify-center">

<h1 className="text-[18vw] md:text-[14vw] leading-none select-none transform -translate-x-1/2 -translate-y-1/2 z-0 font-bold text-white tracking-tighter opacity-20 mix-blend-overlay absolute top-1/2 left-1/2">
                KAIRO
            </h1>

<div className="relative z-10 w-64 md:w-80 lg:w-96 aspect-[3/4] mt-10 md:mt-0 fade-in-up visible" style={{transitionDelay: '300ms'}}>

<div className="w-full h-full relative overflow-hidden rounded-sm">
<img alt="Model" className="w-full h-full object-cover grayscale brightness-90 contrast-125" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="bg-gradient-to-t from-black via-transparent to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="absolute top-[15%] left-[10%] w-[80%] h-[30%] pointer-events-none z-20 mix-blend-hard-light">
<svg className="w-full h-full overflow-visible" viewbox="0 0 200 100">
<path className="scratch-path filter blur-[1px]" d="M10,50 Q30,20 50,50 T90,50 T130,50 T170,50 M20,60 Q50,30 80,60 T140,40" fill="none" stroke="#ff4d29" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
<path className="scratch-path" d="M15,45 L180,55 M25,55 L160,40 M40,30 L150,70" fill="none" stroke="#ff4d29" strokeWidth="2" style={{animationDelay: '0.7s'}}></path>
</svg>
</div>
</div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full text-center pointer-events-none mix-blend-exclusion">
<h1 className="text-[18vw] md:text-[14vw] leading-none font-bold tracking-tighter text-white opacity-90">
                    KAIRO
                </h1>
</div>

<div className="mt-12 md:mt-16 text-center z-30 max-w-lg mx-auto px-6">
<p className="text-lg md:text-xl text-zinc-400 font-medium tracking-tight h-16 md:h-auto">
<span className="typing-cursor" id="hero-typewriter">I</span>
</p>
<div className="mt-8 flex justify-center gap-4 opacity-0 animate-fade-in" style={{animation: 'fadeIn 1s forwards 2.5s'}}>
<div className="text-xs font-mono text-zinc-600 uppercase tracking-widest border border-zinc-800 rounded-full px-3 py-1">System Active</div>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-xs uppercase tracking-widest text-zinc-500">Explore</span>
<svg aria-hidden="true" className="lucide lucide-arrow-down w-4 h-4 text-zinc-500" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
</header>

<section className="py-20 border-t border-white/5 bg-black relative z-10">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
<div className="fade-in-up">
<div className="text-5xl font-semibold tracking-tighter text-white mb-2">2<span className="text-zinc-600 text-3xl">h</span></div>
<div className="text-lg text-zinc-500 font-medium">Average delivery time</div>
</div>
<div className="fade-in-up" style={{transitionDelay: '100ms'}}>
<div className="text-5xl font-semibold tracking-tighter text-white mb-2">500<span className="text-zinc-600 text-3xl">+</span></div>
<div className="text-lg text-zinc-500 font-medium">Assets generated</div>
</div>
<div className="fade-in-up" style={{transitionDelay: '200ms'}}>
<div className="text-5xl font-semibold tracking-tighter text-white mb-2">120<span className="text-zinc-600 text-3xl">+</span></div>
<div className="text-lg text-zinc-500 font-medium">Partner brands</div>
</div>
<div className="fade-in-up" style={{transitionDelay: '300ms'}}>
<div className="text-5xl font-semibold tracking-tighter text-white mb-2">99<span className="text-zinc-600 text-3xl">%</span></div>
<div className="text-lg text-zinc-500 font-medium">Accuracy rate</div>
</div>
</div>
</section>

<section className="py-32 relative bg-zinc-950">

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-20 fade-in-up">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Capabilities</h2>
<p className="text-xl text-zinc-400 max-w-2xl font-light">
                    Our neural networks are trained to execute complex creative tasks with precision and unexpected flair.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl group hover:border-white/20 transition-all duration-500 hover:-translate-y-2 fade-in-up">
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
<svg aria-hidden="true" className="lucide lucide-layout-template text-white w-6 h-6" data-lucide="layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Generative UI</h3>
<p className="text-lg text-zinc-500 leading-relaxed">
                        Adaptive interfaces that evolve based on user behavior and real-time data inputs.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:border-white/20 transition-all duration-500 hover:-translate-y-2 fade-in-up" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
<svg aria-hidden="true" className="lucide lucide-aperture text-white w-6 h-6" data-lucide="aperture" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Synthetic Media</h3>
<p className="text-lg text-zinc-500 leading-relaxed">
                        High-fidelity image and video generation for campaigns that require the impossible.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:border-white/20 transition-all duration-500 hover:-translate-y-2 fade-in-up" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
<svg aria-hidden="true" className="lucide lucide-fingerprint text-white w-6 h-6" data-lucide="fingerprint" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path><path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path><path d="M2 12a10 10 0 0 1 18-6"></path><path d="M2 16h.01"></path><path d="M21.8 16c.2-2 .131-5.354 0-6"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></path><path d="M8.65 22c.21-.66.45-1.32.57-2"></path><path d="M9 6.8a6 6 0 0 1 9 5.2v2"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Brand DNA</h3>
<p className="text-lg text-zinc-500 leading-relaxed">
                        Algorithmic identity systems that maintain consistency across infinite touchpoints.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:border-white/20 transition-all duration-500 hover:-translate-y-2 fade-in-up">
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
<svg aria-hidden="true" className="lucide lucide-cpu text-white w-6 h-6" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Strategy Models</h3>
<p className="text-lg text-zinc-500 leading-relaxed">
                        Predictive market analysis turned into actionable creative directives.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:border-white/20 transition-all duration-500 hover:-translate-y-2 fade-in-up" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
<svg aria-hidden="true" className="lucide lucide-box text-white w-6 h-6" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">3D Environments</h3>
<p className="text-lg text-zinc-500 leading-relaxed">
                        Procedural world-building for immersive web experiences and VR.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:border-white/20 transition-all duration-500 hover:-translate-y-2 fade-in-up" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
<svg aria-hidden="true" className="lucide lucide-globe text-white w-6 h-6" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Global Scale</h3>
<p className="text-lg text-zinc-500 leading-relaxed">
                        Localization and cultural adaptation performed instantly by our linguistics engine.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end fade-in-up">
<div>
<span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2 block">Archive</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white">Visual Logs</h2>
</div>
<button className="hidden md:flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                View All <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="flex flex-col md:grid md:grid-cols-12 gap-6 px-6 max-w-7xl mx-auto h-auto md:h-[600px]">

<div className="col-span-12 md:col-span-5 h-[400px] md:h-full relative group rounded-lg overflow-hidden fade-in-up">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<span className="text-zinc-400 text-sm">Fintech</span>
<h3 className="text-2xl text-white font-medium tracking-tight">Neo-Bank Identity</h3>
</div>
</div>

<div className="col-span-12 md:col-span-7 grid grid-rows-2 gap-6 h-full">

<div className="h-[300px] md:h-full relative group rounded-lg overflow-hidden fade-in-up" style={{transitionDelay: '100ms'}}>
<img alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<span className="text-zinc-400 text-sm">Automotive</span>
<h3 className="text-2xl text-white font-medium tracking-tight">Autonomous Dashboard</h3>
</div>
</div>
<div className="grid grid-cols-2 gap-6 h-[200px] md:h-full">

<div className="relative group rounded-lg overflow-hidden fade-in-up" style={{transitionDelay: '200ms'}}>
<img alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-zinc-400 text-sm">Art</span>
<h3 className="text-lg text-white font-medium tracking-tight">Synthetic Gallery</h3>
</div>
</div>

<div className="relative group rounded-lg overflow-hidden fade-in-up" style={{transitionDelay: '300ms'}}>
<img alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-zinc-400 text-sm">Fashion</span>
<h3 className="text-lg text-white font-medium tracking-tight">Vogue AI</h3>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative z-10 max-w-2xl">
<h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8">
                Ready to <span className="text-zinc-500">collaborate?</span>
</h2>
<p className="text-xl text-zinc-400 mb-10 h-8">
<span className="typing-cursor" id="cta-typewriter"></span>
</p>
<button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold tracking-tight overflow-hidden transition-all hover:scale-105">
<span className="relative z-10">Start Simulation</span>
<svg aria-hidden="true" className="lucide lucide-arrow-right w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<div className="absolute inset-0 bg-zinc-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
</button>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-20 pb-10 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div>
<div className="text-2xl font-bold tracking-tighter text-white mb-4">KAIRO</div>
<p className="text-zinc-500 max-w-xs text-sm leading-relaxed">
                    Redefining agency workflows through intelligent automation and synthetic creativity.
                </p>
</div>
<div className="flex gap-12 md:gap-24 text-sm font-medium text-zinc-400">
<div className="flex flex-col gap-4">
<span className="text-white tracking-widest text-xs uppercase font-mono mb-2 opacity-50">Sitemap</span>
<a className="hover:text-white transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#">Work</a>
<a className="hover:text-white transition-colors" href="#">About</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-white tracking-widest text-xs uppercase font-mono mb-2 opacity-50">Socials</span>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-white tracking-widest text-xs uppercase font-mono mb-2 opacity-50">Legal</span>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex justify-between items-center text-xs text-zinc-600 font-mono">
<span>© 2024 KAIRO INC.</span>
<span>SYSTEM STATUS: ONLINE</span>
</div>
</footer>


    </>
  );
}
