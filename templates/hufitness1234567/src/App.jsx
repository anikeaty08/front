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



      document.addEventListener('DOMContentLoaded', function() {
        const words = ["Vitality", "Strength", "Mobility", "Power", "Capability", "Resilience"];
        let index = 0;
        const el = document.getElementById('rotating-text-aura-emjp7hogd1fpaea18-unique');
        if (el) {
            setInterval(() => {
                el.classList.add('opacity-0');
                setTimeout(() => {
                    index = (index + 1) % words.length;
                    el.textContent = words[index];
                    el.classList.remove('opacity-0');
                }, 300);
            }, 2000);
        }
    });
    


        document.addEventListener('DOMContentLoaded', () => {
            const scrollTargets = document.querySelectorAll('.scroll-blur-target');

            const handleScrollEffects = () => {
                // Modified: Disable the blur logic on mobile AND tablet devices (width < 1024px)
                if (window.innerWidth < 1024) {
                    scrollTargets.forEach(target => {
                        // Reset styles if previously applied
                        target.style.filter = '';
                        target.style.opacity = '';
                        target.style.transform = '';
                    });
                    return; 
                }

                const scrolled = window.scrollY;
                const windowHeight = window.innerHeight;

                scrollTargets.forEach(target => {
                    const rect = target.getBoundingClientRect();
                    const distanceFromTop = rect.top;
                    
                    // Logic: Trigger blur only when element is significantly above the viewport top
                    // Changed threshold from -50 to -150 to delay blur onset
                    const startBlurAt = -150; 
                    
                    if (distanceFromTop < startBlurAt) {
                        // Calculate progress based on distance past the trigger point
                        const distancePastTrigger = Math.abs(distanceFromTop - startBlurAt);
                        const leaveProgress = Math.min(distancePastTrigger / 500, 1);
                        
                        if (leaveProgress > 0) {
                            target.style.filter = `blur(${leaveProgress * 8}px)`;
                            target.style.opacity = 1 - leaveProgress;
                            target.style.transform = `scale(${1 - (leaveProgress * 0.05)}) translateY(${leaveProgress * 10}px)`;
                        }
                    } else {
                        // Element is in view or just entering top area (keep sharp)
                        target.style.filter = 'blur(0px)';
                        target.style.opacity = '1';
                        target.style.transform = 'none';
                    }
                });
            };

            // Use requestAnimationFrame for smooth performance
            let ticking = false;
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        handleScrollEffects();
                        ticking = false;
                    });
                    ticking = true;
                }
            }, { passive: true });
            
            // Handle resize to reset/re-enable logic if screen size changes
            window.addEventListener('resize', () => {
                handleScrollEffects();
            });

            // Initial call
            handleScrollEffects();
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
      


<div className="fixed top-0 left-0 w-full h-32 pointer-events-none z-40 bg-gradient-to-b from-[#050505] to-transparent"></div>

<div className="fixed top-0 left-0 w-full h-24 pointer-events-none z-30 backdrop-blur-md" style={{maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)'}}></div>

<div className="fixed bottom-0 left-0 w-full h-32 pointer-events-none z-40 backdrop-blur-[2px]" style={{maskImage: 'linear-gradient(to bottom, transparent, black)'}}></div>
<div className="fixed bottom-0 left-0 w-full h-24 pointer-events-none z-40 bg-gradient-to-t from-[#050505] to-transparent"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl transition-all duration-300" id="navbar">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-white flex items-center gap-2" href="#">
<span className="w-8 h-8 rounded bg-gradient-to-br from-neutral-800 to-black border border-white/10 flex items-center justify-center text-xs text-white">HF</span>
                HUFITNESS
            </a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium">
<a className="hover:text-white transition-colors duration-200" href="#philosophy">Philosophy</a>
<a className="hover:text-white transition-colors duration-200" href="#stories">Stories</a>
<a className="hover:text-white transition-colors duration-200" href="#services">Membership</a>
<a className="hover:bg-neutral-200 transition-all duration-200 font-semibold text-black bg-white rounded-full pt-2 pr-4 pb-2 pl-4" href="#contact">
                    Book Assessment
                </a>
</div>

<button className="md:hidden text-white">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="hero-section">
<div className="z-0 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
<div className="z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative scroll-blur-target" id="hero-content">
<div className="inline-flex gap-2 text-xs font-medium text-indigo-300 bg-white/5 border-white/10 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center" style={{}}>Accepting New Clients For 2026<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
</div>
<h1 className="md:text-7xl lg:text-8xl leading-[0.95] text-5xl font-semibold text-white tracking-tighter mb-6 transition-all duration-75 ease-out will-change-transform" id="hero-title">
    Engineering <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">Human </span>

<br className="md:hidden"/>
<span className="whitespace-nowrap">
<span className="text-white/90 inline-block transition-opacity duration-300 min-w-[1ch]" id="rotating-text-aura-emjp7hogd1fpaea18-unique">Vitality</span><span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">.</span>
</span>

</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-neutral-400 max-w-2xl mr-auto mb-10 ml-auto" style={{}}>
    Specialized strength and mobility coaching for adults 30–85. Move without pain. Live without limits.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-black text-sm font-medium rounded-full hover:bg-neutral-200 transition-colors duration-200 flex items-center justify-center gap-2" href="#contact">
      Start Training
      <iconify-icon className="" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="border-y bg-neutral-950/50 border-white/5 relative z-10 scroll-blur-target">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 gap-x-8 gap-y-8">
<div className="text-center md:text-left">
<h3 className="md:text-3xl text-2xl font-semibold text-white tracking-tight" style={{}}>15+</h3>
<p className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Years Experience</p>
</div>
<div className="text-center md:text-left">
<h3 className="md:text-3xl text-2xl font-semibold text-white tracking-tight" style={{}}>100+</h3>
<p className="uppercase text-xs text-neutral-500 tracking-widest mt-1">Lives Changed</p>
</div>
<div className="text-center md:text-left">
<h3 className="md:text-3xl text-2xl font-semibold text-white tracking-tight">100%</h3>
<p className="uppercase text-xs text-neutral-500 tracking-widest mt-1">Private Focus</p>
</div>
<div className="text-center md:text-left">
<div className="inline-flex text-white items-center justify-center mb-2">
<svg className="w-8 h-8" data-icon-set="lucide" data-lucide="graduation-cap" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"></path><path className="" d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></g></svg>
</div>
<p className="uppercase text-xs text-neutral-500 tracking-widest mt-1">Multiple Certifications</p>
</div>
</div>
</section>

<section className="md:py-32 pt-24 pb-24 relative" id="philosophy">
<div className="max-w-7xl mx-auto px-6 scroll-blur-target">
<div className="grid lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-purple-500/5 rounded-2xl blur-2xl opacity-50"></div>
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
<img alt="Trainer adjusting weights" className="object-cover w-full h-full opacity-60 hover:opacity-80 transition-opacity duration-700 hover:scale-105 transform" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-black/90 to-transparent w-full pt-6 pr-6 pb-6 pl-6 absolute bottom-0 left-0">
<p className="text-white font-medium text-sm">Focused on form.</p>
<p className="text-xs text-neutral-400">Queens, New York</p>
</div>
</div>
</div>
<div className="space-y-8">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
                        Fitness for the <br/><span className="text-indigo-400">Long Game.</span>
</h2>
<div className="space-y-6 text-lg font-light text-neutral-400">
<p className="">I am a personal trainer who has shifted my focus to what matters most: <strong className="text-neutral-200 font-medium">Longevity</strong>.</p>
<p className="">
                            The fitness industry sells exhaustion. I sell capability. My methodology is designed specifically for professionals and active seniors who want to maintain independence, protect joint health, and build functional strength that transfers to the real world.
                        </p>
<ul className="pt-4 space-y-4">
<li className="flex gap-3 gap-x-3 gap-y-3 items-start">
<div className="text-indigo-400 bg-indigo-500/10 rounded mt-1 pt-1 pr-1 pb-1 pl-1">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="weight" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(129, 140, 248)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="5" r="3"></circle><path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"></path></svg>
</div>
<div className="">
<span className="block text-sm font-medium text-white">Stength Training</span>
<span className="text-sm">Building durable strength that supports you in everyday life.</span>
</div>
</li>
<li className="flex gap-3 gap-x-3 gap-y-3 items-start">
<div className="mt-1 p-1 rounded bg-indigo-500/10 text-indigo-400">
<iconify-icon className="" icon="lucide:activity" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="">
<span className="block text-sm font-medium text-white">Metabolic Health</span>
<span className="text-sm">Optimizing bone density and muscle mass for aging.</span>
</div>
</li><li className="flex gap-3 gap-x-3 gap-y-3 items-start">
<div className="mt-1 p-1 rounded bg-indigo-500/10 text-indigo-400">
<iconify-icon className="" icon="lucide:shield-check" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="">
<span className="block text-sm font-medium text-white">Injury Prevention First</span>
<span className="text-sm">We rebuild movement patterns before adding load.</span>
</div>
</li>
</ul>

<div className="pt-2">
<a className="inline-flex items-center gap-2 text-white font-medium hover:text-indigo-400 transition-colors group text-sm" href="#contact">
                                Book your assessment
                                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 scroll-blur-target" id="stories">
<div className="flex mb-10 pr-2 pl-2 items-end justify-between">
<div className="max-w-xl">
<h2 className="uppercase text-xs font-semibold text-indigo-400 tracking-widest mb-3">Success Stories</h2>
<h3 className="text-3xl font-semibold text-white tracking-tight">Trusted by over 100+ clients in Queens.</h3>
</div>
<div className="flex gap-3 hidden md:flex">
<button aria-label="Scroll left" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors active:scale-95" onclick="document.getElementById('testimonials-container').scrollBy({left: -420, behavior: 'smooth'})">
<iconify-icon className="" icon="lucide:arrow-left" width="16"></iconify-icon>
</button>
<button aria-label="Scroll right" className="flex hover:bg-white/10 transition-colors active:scale-95 text-white bg-white/5 w-10 h-10 border-white/10 border rounded-full items-center justify-center" onclick="document.getElementById('testimonials-container').scrollBy({left: 420, behavior: 'smooth'})">
<svg className="" data-icon-set="lucide" data-lucide="arrow-right" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
<div className="flex overflow-x-auto gap-6 pb-8 -mx-6 px-6 snap-x scroll-smooth" id="testimonials-container" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>
<style>
            #testimonials-container::-webkit-scrollbar { display: none; }
        </style>

<div className="min-w-[320px] md:min-w-[400px] p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 backdrop-blur-sm snap-center flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:from-white/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 group cursor-default">
<div className="">
<div className="flex gap-1 text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors">
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="" fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon className="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="" fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon className="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="" fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon className="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-lg text-neutral-200 font-light italic mb-6">"After my hip surgery, I was terrified to move. HuFitness didn't just help me rehab; they taught me how to trust my body again. I'm hiking on weekends now."</p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 group-hover:bg-neutral-700 transition-colors flex items-center justify-center text-white font-bold text-xs">S</div>
<div className="">
<p className="text-sm font-semibold text-white">Susan</p>
<p className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">Age 63 • Queens, NY</p>
</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[400px] p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 backdrop-blur-sm snap-center flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:from-white/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 group cursor-default">
<div className="">
<div className="flex gap-1 text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors">
<svg className="" fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="" fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="" fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="" fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon className="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-lg text-neutral-200 font-light italic mb-6">"I work 60 hours a week. I don't have time for nonsense. This program is efficient, scientific, and the results have been undeniable."</p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 group-hover:bg-neutral-700 transition-colors flex items-center justify-center text-white font-bold text-xs">ST</div>
<div className="">
<p className="text-sm font-semibold text-white">Stephanie</p>
<p className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">Age 34 • Executive</p>
</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[400px] p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 backdrop-blur-sm snap-center flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:from-white/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 group cursor-default">
<div className="">
<div className="flex gap-1 text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors">
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-lg text-neutral-200 font-light italic mb-6">"My chronic back pain is 95% gone. I never thought I'd be deadlifting at 55, but here I am, stronger than I was at 30."</p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 group-hover:bg-neutral-700 transition-colors flex items-center justify-center text-white font-bold text-xs">MK</div>
<div className="">
<p className="text-sm font-semibold text-white">Michael K.</p>
<p className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">Age 55 • Architect</p>
</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[400px] p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 backdrop-blur-sm snap-center flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:from-white/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 group cursor-default">
<div>
<div className="flex gap-1 text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors">
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-lg text-neutral-200 font-light italic mb-6">"The focus on joint health changed my game. I can play 18 holes of golf without my knees swelling up the next day."</p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 group-hover:bg-neutral-700 transition-colors flex items-center justify-center text-white font-bold text-xs">RT</div>
<div>
<p className="text-sm font-semibold text-white">Robert T.</p>
<p className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">Age 68 • Retired</p>
</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[400px] p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 backdrop-blur-sm snap-center flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:from-white/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 group cursor-default">
<div>
<div className="flex gap-1 text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors">
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-lg text-neutral-200 font-light italic mb-6">"Post-pregnancy recovery was daunting. This program gave me a structured, safe path back to feeling like myself again."</p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 group-hover:bg-neutral-700 transition-colors flex items-center justify-center text-white font-bold text-xs">EL</div>
<div>
<p className="text-sm font-semibold text-white">Elena L.</p>
<p className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">Age 36 • Lawyer</p>
</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[400px] p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 backdrop-blur-sm snap-center flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:from-white/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 group cursor-default">
<div>
<div className="flex gap-1 text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors">
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-lg text-neutral-200 font-light italic mb-6">"I've tried every trainer in the city. No one pays attention to biomechanics like this team. It's engineering, not just exercise."</p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 group-hover:bg-neutral-700 transition-colors flex items-center justify-center text-white font-bold text-xs">DJ</div>
<div>
<p className="text-sm font-semibold text-white">David J.</p>
<p className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">Age 42 • Engineer</p>
</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[400px] p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 backdrop-blur-sm snap-center flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:from-white/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 group cursor-default">
<div>
<div className="flex gap-1 text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors">
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-lg text-neutral-200 font-light italic mb-6">"The best investment in my longevity I've ever made. I want to be skiing when I'm 80, and this is how I'll get there."</p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 group-hover:bg-neutral-700 transition-colors flex items-center justify-center text-white font-bold text-xs">PL</div>
<div>
<p className="text-sm font-semibold text-white">Patricia L.</p>
<p className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">Age 51 • CEO</p>
</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[400px] p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 backdrop-blur-sm snap-center flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:from-white/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 group cursor-default">
<div>
<div className="flex gap-1 text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors">
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-lg text-neutral-200 font-light italic mb-6">"Simple, effective, and zero fluff. Just hard work directed at the right muscles. My posture has improved dramatically."</p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 group-hover:bg-neutral-700 transition-colors flex items-center justify-center text-white font-bold text-xs">JM</div>
<div>
<p className="text-sm font-semibold text-white">James M.</p>
<p className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">Age 48 • Consultant</p>
</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[400px] p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 backdrop-blur-sm snap-center flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:from-white/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 group cursor-default">
<div>
<div className="flex gap-1 text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors">
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-lg text-neutral-200 font-light italic mb-6">"I was skeptical about online coaching, but the video analysis is incredible. It's like they are right there in the room."</p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 group-hover:bg-neutral-700 transition-colors flex items-center justify-center text-white font-bold text-xs">AS</div>
<div>
<p className="text-sm font-semibold text-white">Amanda S.</p>
<p className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">Age 39 • Remote Client</p>
</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[400px] p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 backdrop-blur-sm snap-center flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:from-white/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 group cursor-default">
<div>
<div className="flex gap-1 text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors">
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-lg text-neutral-200 font-light italic mb-6">"Finally, a program that respects my busy schedule. 30 minutes, high intensity, perfect form. I'm in the best shape of my life."</p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 group-hover:bg-neutral-700 transition-colors flex items-center justify-center text-white font-bold text-xs">MP</div>
<div>
<p className="text-sm font-semibold text-white">Marcus P.</p>
<p className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">Age 45 • Trader</p>
</div>
</div>
</div>
</div>

<div className="mt-8 flex justify-center">
<a className="text-sm font-medium text-white border border-white/10 bg-white/5 hover:bg-white/10 rounded-full px-6 py-3 transition-all flex items-center gap-2" href="#contact">
            Start your transformation
            <iconify-icon icon="lucide:chevron-right" width="16"></iconify-icon>
</a>
</div>
</section>

<section className="bg-neutral-900/30 border-white/5 border-t pt-24 pb-24 scroll-blur-target" id="services">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Membership Options</h2>
<p className="text-neutral-400 max-w-lg mr-auto ml-auto" style={{}}>Transparent pricing for elite level coaching.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 md:auto-rows-[minmax(180px,auto)] gap-x-4 gap-y-4">

<div className="md:col-span-4 lg:col-span-4 flex flex-col group overflow-hidden bg-[#0a0a0a] border border-white/10 hover:border-indigo-500/50 rounded-3xl p-8 relative justify-between transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.3)] z-0">

<div className="absolute inset-0 bg-[radial-gradient(600px_at_top_right,_var(--tw-gradient-stops))] from-indigo-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"></div>

<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-25 transition-all duration-700 ease-in-out transform group-hover:scale-125 group-hover:-rotate-12 group-hover:translate-x-4 group-hover:-translate-y-2 pointer-events-none">
<iconify-icon icon="lucide:home" strokeWidth="1" width="120"></iconify-icon>
</div>

<div className="relative z-10">
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-indigo-500 text-white uppercase tracking-wider shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/50 transition-all duration-300">Most Popular</span>
</div>
<h3 className="text-2xl font-semibold text-white mb-2 tracking-tight group-hover:text-indigo-100 transition-colors duration-300">In-Home Concierge</h3>
<p className="text-sm text-neutral-400 max-w-sm group-hover:text-neutral-300 transition-colors duration-300">I bring the gym to you in Queens, NY. Full equipment setup, mobility assessment, and nutritional guidance included.</p>
</div>

<div className="mt-8 relative z-10">
<div className="flex items-end justify-between">
<ul className="text-sm text-neutral-400 space-y-1">
<li className="flex gap-2 items-center group-hover:text-neutral-300 transition-colors duration-300">
<iconify-icon className="text-indigo-400 group-hover:text-indigo-300 group-hover:scale-110 transition-transform duration-300" icon="lucide:check"></iconify-icon>10 sessions
                </li>
<li className="flex gap-2 items-center group-hover:text-neutral-300 transition-colors duration-300 delay-75">
<iconify-icon className="text-indigo-400 group-hover:text-indigo-300 group-hover:scale-110 transition-transform duration-300" icon="lucide:check"></iconify-icon> Custom Nutrition Plan
                </li>
</ul>
<div className="text-right">
<p className="text-3xl font-semibold text-white tracking-tight group-hover:text-indigo-50 transition-colors duration-300">$1,250</p>
<p className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">/ 10 pack</p>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 lg:col-span-2 flex flex-col group overflow-hidden bg-[#0a0a0a] border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative justify-between transition-all duration-500 ease-out hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.25)]">

<div className="absolute inset-0 bg-[radial-gradient(400px_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 pointer-events-none">
<iconify-icon icon="lucide:laptop" strokeWidth="1" width="120"></iconify-icon>
</div>
<div className="z-10 relative">
<h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-100 transition-colors duration-300">Remote Coaching</h3>
<p className="text-sm text-neutral-400 w-48 h-50 group-hover:text-neutral-300 transition-colors duration-300">The same rigorous programming, delivered via Zoom or Facetime.</p>
</div>
<div className="mt-8 relative z-10">
<div className="flex items-end justify-between">
<ul className="text-sm text-neutral-400 space-y-1">
<li className="flex gap-x-2 gap-y-2 items-center group-hover:text-neutral-300 transition-colors"><iconify-icon className="text-indigo-400 group-hover:text-indigo-300 transition-colors" icon="lucide:check"></iconify-icon>10 sessions</li>
<li className="flex gap-x-2 gap-y-2 items-center group-hover:text-neutral-300 transition-colors"><iconify-icon className="text-indigo-400 group-hover:text-indigo-300 transition-colors" icon="lucide:check"></iconify-icon> Custom Nutrition Plan</li>
</ul>
<div className="text-right">
<p className="text-3xl font-semibold text-white tracking-tight group-hover:text-indigo-200 transition-colors duration-300">$1,150</p>
<p className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">/ 10 pack</p>
</div>
</div>
</div>
</div>

<div className="md:col-span-6 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">

<div className="flex flex-col card-hover bg-[#0a0a0a] h-full border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 justify-center">
<svg className="text-neutral-300 mb-3" data-icon-set="lucide" data-lucide="dumbbell" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829zM2.5 21.5l1.4-1.4M20.1 3.9l1.4-1.4M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829zM9.6 14.4l4.8-4.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h4 className="font-medium text-white tracking-tight mb-1">Strength Training</h4>
<p className="leading-relaxed text-xs text-neutral-500">Compound movements designed to increase functional muscle mass and density.</p>
</div>

<div className="flex flex-col h-full card-hover bg-[#0a0a0a] border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 justify-center">
<svg className="text-neutral-300 mb-3" data-icon-set="lucide" data-lucide="heart-pulse" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1l2 4.5l2-7l1.5 3.5h5.27"></path></g></svg>
<h4 className="text-white font-medium mb-1">Cardiovascular</h4>
<p className="leading-relaxed text-xs text-neutral-500">Training for heart health and endurance.</p>
</div>

<div className="flex flex-col h-full card-hover bg-[#0a0a0a] border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 justify-center">
<svg className="text-neutral-300 mb-3" data-icon-set="lucide" data-lucide="brain-circuit" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4M6.003 5.125A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M12 13h4m-4 5h6a2 2 0 0 1 2 2v1M12 8h8m-4 0V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></g></svg>
<h4 className="text-white font-medium mb-1">Neuromuscular</h4>
<p className="leading-relaxed text-xs text-neutral-500">Balance and coordination drills to prevent falls and improve agility.</p>
</div>

<div className="flex flex-col h-full card-hover bg-[#0a0a0a] border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 justify-center">
<iconify-icon className="text-neutral-300 mb-3" icon="lucide:orbit" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-white font-medium mb-1 tracking-tight">Joint Mobility</h4>
<p className="leading-relaxed text-xs text-neutral-500">Enhancing range of motion for pain-free daily movement and longevity.</p>
</div>

<div className="flex flex-col card-hover bg-[#0a0a0a] h-full border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 justify-center">
<svg className="text-neutral-300 mb-3" data-icon-set="lucide" data-lucide="bone" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5a.5.5 0 0 1-.5-.5a2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h4 className="text-white font-medium mb-1">Bone Density</h4>
<p className="text-xs text-neutral-500 leading-relaxed">Heavy loading protocols scientifically proven to combat osteoporosis.</p>
</div>
</div>
</div>

<div className="mt-8 mx-auto w-full">
<div className="flex items-start gap-3 p-4 rounded-xl bg-neutral-900/50 border border-white/5">
<iconify-icon className="text-neutral-500 mt-0.5 shrink-0" icon="lucide:info" strokeWidth="1.5" width="16"></iconify-icon>
<p className="leading-relaxed text-sm text-neutral-200">
  Upon purchasing your first package, you acknowledge that you will respect the rules of the policy: if you cancel
  within 12 hours of your scheduled session, you lose the session.
</p>
</div>
</div>
</div>
</section>

<footer className="bg-[#020202] border-white/10 border-t scroll-blur-target" id="contact">
<div className="max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6">
<div className="grid lg:grid-cols-2 gap-20">

<div className="">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                        Ready to Invest <br/> in Your <span className="text-indigo-400">Future Self?</span>
</h2>
<p className="font-light text-neutral-400 max-w-md mb-8" style={{}}>Applications for new clients are reviewed weekly. Fill out the form to schedule a complimentary discovery call.</p>
<div className="space-y-4">
<div className="flex gap-3 text-sm text-neutral-400 gap-x-3 gap-y-3 items-center"><svg className="w-[14px] h-[14px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="mail" height="14" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path className="" d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect className="" height="16" rx="2" width="20" x="2" y="4"></rect></g></svg><div className="flex gap-3 text-sm text-neutral-400 gap-x-3 gap-y-3 items-center" style={{}}>maxfitnyc@gmail.com</div></div>
<div className="flex gap-3 text-sm text-neutral-400 gap-x-3 gap-y-3 items-center">
<iconify-icon className="text-white" icon="lucide:map-pin"></iconify-icon>
                            Queens, New York (and Virtual)
                        </div>
</div>
<div className="flex gap-4 text-neutral-500 mt-12 gap-x-4 gap-y-4">
<a className="hover:text-white transition" href="#"><iconify-icon className="" icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="hover:text-white transition" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
<a className="hover:text-white transition" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="hover:text-white transition" href="#"><iconify-icon className="" icon="lucide:linkedin" width="20"></iconify-icon></a>
</div>
</div>

<form className="bg-neutral-900/20 border-white/5 border rounded-3xl pt-8 pr-8 pb-8 pl-8 space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 ml-1">First Name <span className="text-red-500">*</span></label>
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Jane" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 ml-1">Last Name <span className="text-red-500">*</span></label>
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 ml-1">Email <span className="text-red-500">*</span></label>
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="jane@example.com" required="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 ml-1">Phone Number <span className="text-red-500">*</span></label>
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="+1 (555) 000-0000" required="" type="tel"/>
</div>

<div className="pt-2 space-y-2">
<label className="text-xs font-medium text-neutral-500 ml-1">Goals</label>
<div className="grid grid-cols-2 md:grid-cols-3 gap-2">

<label className="flex items-center gap-2 cursor-pointer hover:border-white/20 hover:bg-white/5 transition-all group bg-[#0a0a0a] border-white/10 border rounded-lg pt-2.5 pr-2.5 pb-2.5 pl-2.5">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer appearance-none w-4 h-4 rounded border border-neutral-700 checked:bg-indigo-500 checked:border-indigo-500 transition-colors" type="checkbox"/>
<svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity duration-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs text-neutral-400 group-hover:text-neutral-200 transition-colors select-none">Weight Loss</span>
</label>

<label className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0a0a0a] border border-white/10 cursor-pointer hover:border-white/20 hover:bg-white/5 transition-all group">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer appearance-none w-4 h-4 rounded border border-neutral-700 checked:bg-indigo-500 checked:border-indigo-500 transition-colors" type="checkbox"/>
<svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity duration-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs text-neutral-400 group-hover:text-neutral-200 transition-colors select-none">Muscle Gain</span>
</label>

<label className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0a0a0a] border border-white/10 cursor-pointer hover:border-white/20 hover:bg-white/5 transition-all group">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer appearance-none w-4 h-4 rounded border border-neutral-700 checked:bg-indigo-500 checked:border-indigo-500 transition-colors" type="checkbox"/>
<svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity duration-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs text-neutral-400 group-hover:text-neutral-200 transition-colors select-none">Flexibility</span>
</label>

<label className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0a0a0a] border border-white/10 cursor-pointer hover:border-white/20 hover:bg-white/5 transition-all group">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer appearance-none w-4 h-4 rounded border border-neutral-700 checked:bg-indigo-500 checked:border-indigo-500 transition-colors" type="checkbox"/>
<svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity duration-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs text-neutral-400 group-hover:text-neutral-200 transition-colors select-none">Nutrition</span>
</label>

<label className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0a0a0a] border border-white/10 cursor-pointer hover:border-white/20 hover:bg-white/5 transition-all group">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer appearance-none w-4 h-4 rounded border border-neutral-700 checked:bg-indigo-500 checked:border-indigo-500 transition-colors" type="checkbox"/>
<svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity duration-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs text-neutral-400 group-hover:text-neutral-200 transition-colors select-none">Pain Relief</span>
</label>

<label className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0a0a0a] border border-white/10 cursor-pointer hover:border-white/20 hover:bg-white/5 transition-all group">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer appearance-none w-4 h-4 rounded border border-neutral-700 checked:bg-indigo-500 checked:border-indigo-500 transition-colors" type="checkbox"/>
<svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity duration-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs text-neutral-400 group-hover:text-neutral-200 transition-colors select-none">Stress Mgmt</span>
</label>

<label className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0a0a0a] border border-white/10 cursor-pointer hover:border-white/20 hover:bg-white/5 transition-all group">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer appearance-none w-4 h-4 rounded border border-neutral-700 checked:bg-indigo-500 checked:border-indigo-500 transition-colors" type="checkbox"/>
<svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity duration-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs text-neutral-400 group-hover:text-neutral-200 transition-colors select-none">Endurance</span>
</label>

<label className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0a0a0a] border border-white/10 cursor-pointer hover:border-white/20 hover:bg-white/5 transition-all group">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer appearance-none w-4 h-4 rounded border border-neutral-700 checked:bg-indigo-500 checked:border-indigo-500 transition-colors" type="checkbox"/>
<svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity duration-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs text-neutral-400 group-hover:text-neutral-200 transition-colors select-none">Rehab</span>
</label>

<label className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0a0a0a] border border-white/10 cursor-pointer hover:border-white/20 hover:bg-white/5 transition-all group">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer appearance-none w-4 h-4 rounded border border-neutral-700 checked:bg-indigo-500 checked:border-indigo-500 transition-colors" type="checkbox"/>
<svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity duration-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs text-neutral-400 group-hover:text-neutral-200 transition-colors select-none">Accountability</span>
</label>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 ml-1">Message</label>
<textarea className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none" placeholder="Tell me about your current fitness level..." rows="4"></textarea>
</div>
<button className="hover:bg-neutral-200 transition-all duration-200 cursor-pointer text-sm font-semibold text-black bg-white w-full rounded-lg mt-2 pt-3.5 pb-3.5" onclick="const f=this.closest('form');if(!f.checkValidity()){f.reportValidity();return;}const b=this;const og=b.innerText;b.innerText='Sending...';b.disabled=true;let h='';f.querySelectorAll('input,textarea').forEach(e=&gt;{if(e.type==='checkbox'&amp;&amp;!e.checked)return;let l=e.closest('label');if(!l){let c=e.closest('.space-y-1');if(c)l=c.querySelector('label')}let n=l?l.innerText.replace('*','').trim():e.placeholder;if(n&amp;&amp;e.value)h+=`&lt;p&gt;&lt;strong&gt;${n}:&lt;/strong&gt; ${e.value}&lt;/p&gt;`});fetch('https://api.resend.com/emails',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer re_Q5vxzBkS_FSghzHADgLPzo1WgT2bR38H2'},body:JSON.stringify({from:'onboarding@resend.dev',to:['maxfitnyc@gmail.com'],subject:'New HuFitness Application',html:h})}).then(r=&gt;{if(r.ok){b.innerText='Application Sent';b.classList.remove('bg-white','text-black','hover:bg-neutral-200');b.classList.add('bg-green-500','text-white','hover:bg-green-600');f.reset()}else{throw new Error()}}).catch(e=&gt;{console.error(e);b.innerText='Error - Try Again';setTimeout(()=&gt;{b.innerText=og;b.disabled=false},3000)})" type="button">
    Submit Application
</button>
<p className="text-[10px] text-neutral-600 text-center mt-4">
    By submitting this form, you agree to our privacy policy. No spam, ever.
  </p>
</form>
</div></div></footer>



    </>
  );
}
