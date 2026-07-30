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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

        window.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();
            
            // Scroll animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);

            // Observe all fade-in elements
            document.querySelectorAll('.scroll-fade-in').forEach(el => {
                observer.observe(el);
            });

            // Parallax effect for header
            let ticking = false;
            
            function updateParallax() {
                const scrolled = window.pageYOffset;
                const parallaxElements = document.querySelectorAll('.parallax');
                
                parallaxElements.forEach(el => {
                    const speed = 0.5;
                    const yPos = -(scrolled * speed);
                    el.style.setProperty('--parallax-offset', `${yPos}px`);
                });
                
                ticking = false;
            }

            function requestParallaxUpdate() {
                if (!ticking) {
                    requestAnimationFrame(updateParallax);
                    ticking = true;
                }
            }

            window.addEventListener('scroll', requestParallaxUpdate);
        });
    
}
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
      
<header className="sticky top-0 z-30 bg-zinc-950/90 backdrop-blur border-b border-zinc-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-2">
<span className="text-xl font-light tracking-tighter font-sans" style={{}}>Cynthia Labelle</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-zinc-400 hover:text-zinc-100 font-light tracking-tighter font-sans" href="#work" style={{}}>Work</a>
<a className="text-zinc-400 hover:text-zinc-100 font-light tracking-tighter font-sans" href="#about" style={{}}>About</a>
<a className="text-zinc-400 hover:text-zinc-100 font-light tracking-tighter font-sans" href="#process" style={{}}>Process</a>
<a className="text-zinc-400 hover:text-zinc-100 font-light tracking-tighter font-sans" href="#contact" style={{}}>Contact</a>
</nav>
<button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path><path></path><path></path>
</svg>
</button>
</div>
</div>
</header>
<main className="max-w-7xl sm:px-6 sm:py-10 flex flex-col gap-12 mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">

<section className="scroll-fade-in relative overflow-hidden h-[48vh] bg-zinc-900 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-800 rounded-3xl">
<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=" cx="20" cy="20" fill="none" fillOpacity="0.03" fillRule="evenodd" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"></div>
<div className="relative overflow-hidden h-[48vh] bg-[url(/assets/8e1d1c1a-a3b6-46bd-bbab-454e16ca12eb_1600w.jpg)] bg-cover items-center justify-center">
<div className="absolute left-12 top-12 max-w-md flex flex-col gap-4">
<h1 className="leading-tight md:text-8xl text-7xl text-white mb-1 font-pt-serif font-light tracking-tighter" style={{}}>Product Designer</h1>
<p className="md:text-5xl text-3xl text-zinc-300 font-pt-serif font-light tracking-tighter" style={{}}>Crafting intuitive digital experiences that users love and businesses need.</p>
</div>
<button className="absolute bottom-6 right-6 group inline-flex items-center gap-4 hover:bg-zinc-800 transition text-zinc-100 bg-zinc-800/80 border border-zinc-700 rounded-full pt-3 pr-5 pb-3 pl-5 backdrop-blur">
<span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 font-light tracking-tighter font-sans" style={{}}>
    ...
  </span>
<div className="text-left">
<p className="text-xl leading-tight text-lg font-light tracking-tighter font-sans" style={{}}>View Portfolio</p>
<p className="text-xs text-zinc-400 font-light tracking-tighter font-sans" style={{}}>Featured projects & case studies</p>
</div>
</button>
</div>
<div className="absolute right-5 top-5 flex items-center gap-2 text-xs text-zinc-400">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
<span className="font-light tracking-tighter font-sans" style={{}}>5+ years experience</span>
</div>
</section>

<section className="scroll-fade-in py-16 text-center">
<blockquote className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-white font-pt-serif font-semibold tracking-tighter max-w-5xl mx-auto">
                "Design is not just what it looks like and feels like. <span className="text-zinc-400">Design is how it works.</span>"
            </blockquote>
<cite className="block mt-6 text-lg text-zinc-400 font-light tracking-tighter font-sans">— Steve Jobs</cite>
</section>

<section className="scroll-fade-in sm:p-8 bg-zinc-900/50 border-zinc-800 border rounded-3xl pt-6 pr-6 pb-6 pl-6" id="work">
<div className="flex items-center justify-between">
<h2 className="text-xl sm:text-2xl font-pt-serif font-light tracking-tighter" style={{}}>Skills & Expertise</h2>
<a className="inline-flex items-center gap-2 text-sm tracking-tight text-white/70 hover:text-white" href="#">
<span className="font-light tracking-tighter font-sans" style={{}}>Download Resume</span>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<polyline points="7,10 12,15 17,10"></polyline>
<line></line>
</svg>
</a>
</div>
<div className="mt-6 columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">

<article className="group break-inside-avoid mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
<div className="p-6">
<div className="flex items-center gap-3 mb-4">
<div className="h-10 w-10 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center">
<svg className="h-5 w-5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18"></rect>
<path></path>
</svg>
</div>
<span className="px-2 py-1 rounded-md bg-blue-500/20 text-xs text-blue-400 font-light tracking-tighter font-sans" style={{}}>Design Systems</span>
</div>
<h3 className="text-base text-white font-light tracking-tighter font-sans" style={{}}>UI/UX Design</h3>
<p className="text-sm text-white/70 mt-2 font-light tracking-tighter font-sans" style={{}}>Creating cohesive design systems and user interfaces that scale across products and platforms.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-white/60">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<span className="font-light tracking-tighter font-sans" style={{}}>Figma, Sketch, Adobe Creative Suite</span>
</div>
</div>
</article>

<article className="group break-inside-avoid mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
<div className="p-6">
<div className="flex items-center gap-3 mb-4">
<div className="h-10 w-10 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl flex items-center justify-center">
<svg className="h-5 w-5 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<circle cx="9" cy="7"></circle>
<path></path>
</svg>
</div>
<span className="px-2 py-1 rounded-md bg-green-500/20 text-xs text-green-400 font-light tracking-tighter font-sans" style={{}}>Research</span>
</div>
<h3 className="text-base text-white font-light tracking-tighter font-sans" style={{}}>User Research</h3>
<p className="text-sm text-white/70 mt-2 font-light tracking-tighter font-sans" style={{}}>Conducting user interviews, usability testing, and data analysis to inform design decisions.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-white/60">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<circle cx="12" cy="12"></circle>
</svg>
<span className="font-light tracking-tighter font-sans" style={{}}>Interviews, surveys, A/B testing</span>
</div>
</div>
</article>

<article className="group break-inside-avoid mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
<div className="p-6">
<div className="flex items-center gap-3 mb-4">
<div className="h-10 w-10 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center">
<svg className="h-5 w-5 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="2" ry="2" width="14"></rect>
<path></path>
</svg>
</div>
<span className="px-2 py-1 rounded-md bg-purple-500/20 text-xs text-purple-400 font-light tracking-tighter font-sans" style={{}}>Prototyping</span>
</div>
<h3 className="text-base text-white font-light tracking-tighter font-sans" style={{}}>Interactive Prototypes</h3>
<p className="text-sm text-white/70 mt-2 font-light tracking-tighter font-sans" style={{}}>Building high-fidelity prototypes to test concepts and communicate design vision to stakeholders.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-white/60">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<span className="font-light tracking-tighter font-sans" style={{}}>Principle, Framer, InVision</span>
</div>
</div>
</article>

<article className="group break-inside-avoid mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
<div className="p-6">
<div className="flex items-center gap-3 mb-4">
<div className="h-10 w-10 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl flex items-center justify-center">
<svg className="h-5 w-5 text-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</div>
<span className="px-2 py-1 rounded-md bg-orange-500/20 text-xs text-orange-400 font-light tracking-tighter font-sans" style={{}}>Strategy</span>
</div>
<h3 className="text-base text-white font-light tracking-tighter font-sans" style={{}}>Product Strategy</h3>
<p className="text-sm text-white/70 mt-2 font-light tracking-tighter font-sans" style={{}}>Aligning design decisions with business goals and user needs to drive product success.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-white/60">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
<path></path>
</svg>
<span className="font-light tracking-tighter font-sans" style={{}}>Roadmapping, metrics, stakeholder alignment</span>
</div>
</div>
</article>

<article className="group break-inside-avoid mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
<div className="p-6">
<div className="flex items-center gap-3 mb-4">
<div className="h-10 w-10 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-xl flex items-center justify-center">
<svg className="h-5 w-5 text-pink-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</div>
<span className="px-2 py-1 rounded-md bg-pink-500/20 text-xs text-pink-400 font-light tracking-tighter font-sans" style={{}}>Collaboration</span>
</div>
<h3 className="text-base text-white font-light tracking-tighter font-sans" style={{}}>Cross-functional Leadership</h3>
<p className="text-sm text-white/70 mt-2 font-light tracking-tighter font-sans" style={{}}>Leading design initiatives across engineering, product, and business teams to deliver cohesive solutions.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-white/60">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12"></circle>
<polyline points="12,6 12,12 16,14"></polyline>
</svg>
<span className="font-light tracking-tighter font-sans" style={{}}>Design sprints, workshops, mentoring</span>
</div>
</div>
</article>

<article className="group break-inside-avoid mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
<div className="p-6">
<div className="flex items-center gap-3 mb-4">
<div className="h-10 w-10 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-xl flex items-center justify-center">
<svg className="h-5 w-5 text-yellow-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
<rect height="18" rx="2" width="18"></rect>
<path></path>
</svg>
</div>
<span className="px-2 py-1 rounded-md bg-yellow-500/20 text-xs text-yellow-400 font-light tracking-tighter font-sans" style={{}}>Development</span>
</div>
<h3 className="text-base text-white font-light tracking-tighter font-sans" style={{}}>Frontend Fundamentals</h3>
<p className="text-sm text-white/70 mt-2 font-light tracking-tighter font-sans" style={{}}>Understanding development constraints and possibilities to create implementable designs.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-white/60">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12"></circle>
<path></path>
<path></path>
</svg>
<span className="font-light tracking-tighter font-sans" style={{}}>HTML/CSS, React basics, design tokens</span>
</div>
</div>
</article>
</div>
</section>

<section className="scroll-fade-in py-16 text-center">
<blockquote className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-white font-pt-serif font-semibold tracking-tighter max-w-5xl mx-auto">
                "Good design is <span className="text-zinc-400">invisible</span>. Great design is <span className="text-transparent bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text">unforgettable</span>."
            </blockquote>
<cite className="block mt-6 text-lg text-zinc-400 font-light tracking-tighter font-sans">— Joe Sparano</cite>
</section>

<section className="scroll-fade-in sm:p-8 bg-zinc-900/50 border-zinc-800 border rounded-3xl pt-6 pr-6 pb-6 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start">

<div className="flex flex-col justify-between min-h-full">
<div className="">
<span className="text-sm text-zinc-500 font-light tracking-tighter font-sans" style={{}}>Portfolio®</span>
<h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] text-zinc-100 mt-2 font-pt-serif font-light tracking-tighter" style={{}}>Featured work.</h2>

<div className="mt-8 hidden sm:grid grid-cols-3 gap-6 text-zinc-600">
<div className="flex items-center gap-2">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path><path></path>
</svg>
<span className="text-sm font-light tracking-tighter font-sans" style={{}}>Mobile Apps</span>
</div>
<div className="flex items-center gap-2">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path><path></path>
</svg>
<span className="text-sm font-light tracking-tighter font-sans" style={{}}>Web Platforms</span>
</div>
<div className="flex items-center gap-2">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path><path></path>
</svg>
<span className="text-sm font-light tracking-tighter font-sans" style={{}}>Design Systems</span>
</div>
</div>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="">
<p className="text-sm text-zinc-100 font-light tracking-tighter font-sans" style={{}}>Available for new projects</p>
<p className="mt-1 text-sm text-zinc-400 font-light tracking-tighter font-sans" style={{}}>Let's create something amazing together.</p>
<button className="mt-4 inline-flex items-center gap-2 h-10 px-4 rounded-full bg-zinc-100 text-zinc-900 text-sm hover:bg-zinc-200 transition font-light tracking-tighter font-sans" style={{}}>
                                Get in touch
                                
                            </button>
</div>
<p className="text-base text-zinc-300 leading-relaxed sm:text-right font-light tracking-tighter font-sans" style={{}}>
                            I partner with <span className="text-zinc-100 font-light tracking-tighter font-sans" style={{}}>forward-thinking teams</span> to design products that solve real problems and create lasting impact.
                        </p>
</div>
</div>

<div className="grid grid-cols-2 gap-4 h-[320px] relative overflow-hidden" style={{mask: `linear-gradient(to bottom, black 60%, transparent 100%)`}}>

<article className="relative overflow-hidden h-[200px] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 rounded-2xl">
<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9cd1d4fc-703c-4e4d-a54e-9c08b0644568_800w.jpg)] bg-cover"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-zinc-700">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="2" ry="2" width="14"></rect>
<path></path>
</svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 border border-zinc-800 font-light tracking-tighter font-sans" style={{}}>FinTech</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg leading-tight font-light tracking-tighter font-sans" style={{}}>Banking App</p>
<p className="text-xs text-zinc-300 font-light tracking-tighter font-sans" style={{}}>Mobile • 2024</p>
</div>
</article>

<article className="relative overflow-hidden h-[200px] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 rounded-2xl">
<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/aaccc7c2-5ffc-4028-9a09-3207d25c6310_800w.jpg)] bg-cover"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-zinc-700">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20"></rect>
<path></path>
</svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 border border-zinc-800 font-light tracking-tighter font-sans" style={{}}>Healthcare</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg leading-tight font-light tracking-tighter font-sans" style={{}}>Patient Portal</p>
<p className="text-xs text-zinc-300 font-light tracking-tighter font-sans" style={{}}>Web • 2023</p>
</div>
</article>

<article className="relative overflow-hidden h-[200px] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 rounded-2xl">
<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4f501489-877e-4f0b-b5a1-b3169b5f0ce1_800w.jpg)] bg-cover"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-zinc-700">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 border border-zinc-800 font-light tracking-tighter font-sans" style={{}}>Design System</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg leading-tight font-light tracking-tighter font-sans" style={{}}>Component Library</p>
<p className="text-xs text-zinc-300 font-light tracking-tighter font-sans" style={{}}>System • 2023</p>
</div>
</article>

<article className="relative overflow-hidden h-[200px] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 rounded-2xl">
<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ec0c68fa-cafb-4fe2-894e-0d9f5bbd7e29_800w.jpg)] bg-cover"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-zinc-700">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 border border-zinc-800 font-light tracking-tighter font-sans" style={{}}>EdTech</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg leading-tight font-light tracking-tighter font-sans" style={{}}>Learning Platform</p>
<p className="text-xs text-zinc-300 font-light tracking-tighter font-sans" style={{}}>Web • 2024</p>
</div>
</article>
</div>
</div>
</section>

<section className="scroll-fade-in py-16 text-center">
<blockquote className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-white font-pt-serif font-semibold tracking-tighter max-w-5xl mx-auto">
                "The best way to find out if you can trust somebody is to <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">trust them</span>."
            </blockquote>
<cite className="block mt-6 text-lg text-zinc-400 font-light tracking-tighter font-sans">— Ernest Hemingway</cite>
</section>

<section className="scroll-fade-in sm:p-8 bg-gradient-to-r from-zinc-900 to-zinc-800 border-zinc-800 border rounded-3xl pt-6 pr-6 pb-6 pl-6" id="about">
<div className="flex items-center gap-2 text-sm text-zinc-400">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<circle cx="9" cy="7"></circle>
<path></path>
</svg>
<span className="font-light tracking-tighter font-sans" style={{}}>About</span>
</div>
<div className="mt-2">
<h2 className="text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] text-white font-pt-serif font-light tracking-tighter" style={{}}>Experience.</h2>
<p className="mt-1 text-sm sm:text-base text-zinc-400 font-light tracking-tighter font-sans" style={{}}>5 years crafting digital experiences</p>
</div>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

<article className="sm:p-6 flex flex-col min-h-[420px] bg-zinc-800/50 border border-zinc-800 rounded-2xl p-5 backdrop-blur-lg justify-between">
<div className="space-y-5">
<div className="flex items-end gap-2">
<span className="text-5xl sm:text-6xl text-white font-pt-serif font-light tracking-tighter" style={{}}>5+</span>
<span className="text-zinc-400 text-base font-light tracking-tighter font-sans" style={{}}>years</span>
</div>
<p className="text-sm text-zinc-300 font-light tracking-tighter font-sans" style={{}}>I've designed digital products for <span className="text-white font-light tracking-tighter font-sans" style={{}}>startups and Fortune 500s</span>, focusing on user-centered solutions.</p>
<div className="flex items-center gap-3">
<span className="text-sm text-white font-light tracking-tighter font-sans" style={{}}>Product Designer</span>
</div>
<div className="flex items-center gap-2">
<div className="h-7 w-7 bg-gradient-to-br from-zinc-700 to-zinc-800 border border-zinc-700 rounded-full flex items-center justify-center">
<svg className="h-3 w-3 text-zinc-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18"></rect>
<path></path>
</svg>
</div>
<div className="h-7 w-7 bg-gradient-to-br from-zinc-700 to-zinc-800 border border-zinc-700 -ml-2 rounded-full flex items-center justify-center">
<svg className="h-3 w-3 text-zinc-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<circle cx="9" cy="7"></circle>
<path></path>
</svg>
</div>
<div className="h-7 w-7 bg-gradient-to-br from-zinc-700 to-zinc-800 border border-zinc-700 -ml-2 rounded-full flex items-center justify-center">
<svg className="h-3 w-3 text-zinc-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="2" ry="2" width="14"></rect>
<path></path>
</svg>
</div>
<span className="inline-flex items-center justify-center -ml-1 h-7 px-2 rounded-full bg-white text-zinc-900 text-xs font-light tracking-tighter font-sans" style={{}}>50+ projects</span>
</div>
<div className="flex items-center gap-1 text-green-500">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path><path></path>
</svg>
<span className="text-xs text-zinc-400 font-light tracking-tighter font-sans" style={{}}>Based in Montreal</span>
</div>
</div>
<button className="mt-6 h-11 w-full rounded-full bg-white text-zinc-900 text-sm hover:bg-zinc-100 transition font-light tracking-tighter font-sans" style={{}}>
                        View full resume
                    </button>
</article>

<div className="grid grid-rows-[auto_1fr] gap-4">
<article className="flex bg-zinc-800/50 border border-zinc-800 rounded-2xl p-4 backdrop-blur-lg items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 bg-gradient-to-br from-blue-500 to-blue-600 border border-zinc-700 rounded-md flex items-center justify-center text-white text-sm font-light tracking-tighter font-sans" style={{}}>
                                MS
                            </div>
<div>
<p className="text-sm leading-tight text-white font-light tracking-tighter font-sans" style={{}}>Michael Stevens</p>
<p className="text-xs text-zinc-400 font-light tracking-tighter font-sans" style={{}}>VP Product</p>
</div>
</div>
</article>
<article className="sm:p-6 flex flex-col min-h-[420px] bg-zinc-800/50 border border-zinc-800 rounded-2xl p-5 backdrop-blur-lg justify-between">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 text-green-500">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</div>
</div>
<p className="text-2xl sm:text-3xl text-right leading-snug text-white font-pt-serif font-light tracking-tighter" style={{}}>Cynthia transformed our user experience completely. Exceptional design thinking and execution.</p>
</article>
</div>
<div className="grid grid-rows-[1fr_auto] gap-4">
<article className="flex flex-col min-h-[420px] bg-zinc-800/50 border border-zinc-800 rounded-2xl p-6 backdrop-blur-lg justify-between">
<p className="text-2xl sm:text-3xl text-center leading-snug text-white font-pt-serif font-light tracking-tighter" style={{}}>Her attention to user research and detail elevated our entire product strategy.</p>
<div className="mt-6 flex items-center justify-between">
<div className="flex items-center gap-1 text-green-500">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</div>
</div>
</article>
<article className="flex gap-3 bg-zinc-800/50 border border-zinc-800 rounded-2xl p-4 backdrop-blur-lg items-center">
<div className="h-9 w-9 bg-gradient-to-br from-purple-500 to-purple-600 border border-zinc-700 rounded-md flex items-center justify-center text-white text-sm font-light tracking-tighter font-sans" style={{}}>
                            AK
                        </div>
<div className="">
<p className="text-sm leading-tight text-white font-light tracking-tighter font-sans" style={{}}>Alex Kim</p>
<p className="text-xs text-zinc-400 font-light tracking-tighter font-sans" style={{}}>Head of Design</p>
</div>
</article>
</div>
<div className="grid grid-rows-[auto_1fr] gap-4">
<article className="flex bg-zinc-800/50 border border-zinc-800 rounded-2xl p-4 backdrop-blur-lg items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 bg-gradient-to-br from-orange-500 to-orange-600 border border-zinc-700 rounded-md flex items-center justify-center text-white text-sm font-light tracking-tighter font-sans" style={{}}>
                                EP
                            </div>
<div>
<p className="text-sm leading-tight text-white font-light tracking-tighter font-sans" style={{}}>Emma Parker</p>
<p className="text-xs text-zinc-400 font-light tracking-tighter font-sans" style={{}}>CEO</p>
</div>
</div>
</article>
<article className="sm:p-6 flex flex-col min-h-[420px] bg-zinc-800/50 border border-zinc-800 rounded-2xl p-5 backdrop-blur-lg justify-between">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 text-green-500">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</div>
</div>
<p className="text-2xl sm:text-3xl text-right leading-snug text-white font-pt-serif font-light tracking-tighter" style={{}}>Outstanding designer who brings both creativity and strategic thinking to every project.</p>
</article>
</div>
</div>
</section>

<section className="scroll-fade-in py-16 text-center">
<blockquote className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-white font-pt-serif font-semibold tracking-tighter max-w-5xl mx-auto">
                "Simplicity is the ultimate <span className="text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text">sophistication</span>."
            </blockquote>
<cite className="block mt-6 text-lg text-zinc-400 font-light tracking-tighter font-sans">— Leonardo da Vinci</cite>
</section>

<section className="scroll-fade-in sm:p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6" id="process">

<div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600 to-purple-800 border border-white/10 p-6 sm:p-8">
<div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] items-center gap-4 sm:gap-8">
<p className="text-[64px] sm:text-[96px] lg:text-[120px] leading-none text-white/95 font-pt-serif font-light tracking-tighter" style={{}}>4</p>
<div className="">
<h3 className="sm:text-3xl text-2xl text-white font-pt-serif font-light tracking-tighter" style={{}}>step design process</h3>
<p className="mt-2 text-sm sm:text-base text-white/80 font-light tracking-tighter font-sans" style={{}}>From research to launch—systematic and user-centered.</p>
</div>
</div>

<div className="pointer-events-none absolute right-6 top-6 hidden sm:block">
<div className="flex flex-col gap-2">
<div className="flex justify-end gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-violet-200/80"></span>
</div>
<div className="flex justify-end gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-violet-200/70"></span>
<span className="h-1.5 w-1.5 rounded-full bg-violet-200/80"></span>
</div>
<div className="flex justify-end gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-violet-200/60"></span>
<span className="h-1.5 w-1.5 rounded-full bg-violet-200/70"></span>
<span className="h-1.5 w-1.5 rounded-full bg-violet-200/80"></span>
</div>
<div className="flex justify-end gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-violet-200/50"></span>
<span className="h-1.5 w-1.5 rounded-full bg-violet-200/60"></span>
<span className="h-1.5 w-1.5 rounded-full bg-violet-200/70"></span>
<span className="h-1.5 w-1.5 rounded-full bg-violet-200/80"></span>
</div>
<div className="flex justify-end gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-violet-200/40"></span>
<span className="h-1.5 w-1.5 rounded-full bg-violet-200/50"></span>
<span className="h-1.5 w-1.5 rounded-full bg-violet-200/60"></span>
<span className="h-1.5 w-1.5 rounded-full bg-violet-200/70"></span>
<span className="h-1.5 w-1.5 rounded-full bg-violet-200/80"></span>
</div>
</div>
</div>
</div>

<div className="mt-6 grid grid-cols-1 gap-4">

<article className="rounded-2xl bg-zinc-900/70 border border-zinc-800 p-5 sm:p-6 backdrop-blur">
<div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-4 sm:gap-6">
<div className="">
<p className="text-xl sm:text-2xl text-zinc-100 font-pt-serif font-light tracking-tighter" style={{}}>Research & Discovery</p>
</div>
<div className="flex flex-col items-center">
<span className="text-xs text-violet-400 font-light tracking-tighter font-sans" style={{}}>01</span>
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full ring-2 ring-violet-400/60 bg-zinc-950 mt-1">
<span className="h-2 w-2 rounded-full bg-white/90"></span>
</span>
</div>
<div className="text-left">
<p className="text-sm text-zinc-400 font-light tracking-tighter font-sans" style={{}}>User interviews, competitive analysis, and stakeholder alignment</p>
</div>
</div>
</article>

<article className="rounded-2xl bg-zinc-900/70 border border-zinc-800 p-5 sm:p-6 backdrop-blur">
<div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-4 sm:gap-6">
<div className="">
<p className="text-xl sm:text-2xl text-zinc-100 font-pt-serif font-light tracking-tighter" style={{}}>Ideate & Wireframe</p>
</div>
<div className="flex flex-col items-center">
<span className="text-xs text-violet-400 font-light tracking-tighter font-sans" style={{}}>02</span>
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full ring-2 ring-violet-400/60 bg-zinc-950 mt-1">
<span className="h-2 w-2 rounded-full bg-white/90"></span>
</span>
</div>
<div className="text-left">
<p className="text-sm text-zinc-400 font-light tracking-tighter font-sans" style={{}}>Concept development and low-fidelity prototyping</p>
</div>
</div>
</article>

<article className="rounded-2xl bg-zinc-900/70 border border-zinc-800 p-5 sm:p-6 backdrop-blur">
<div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-4 sm:gap-6">
<div className="">
<p className="text-xl sm:text-2xl text-zinc-100 font-pt-serif font-light tracking-tighter" style={{}}>Design & Test</p>
</div>
<div className="flex flex-col items-center">
<span className="text-xs text-violet-400 font-light tracking-tighter font-sans" style={{}}>03</span>
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full ring-2 ring-violet-400/60 bg-zinc-950 mt-1">
<span className="h-2 w-2 rounded-full bg-white/90"></span>
</span>
</div>
<div className="text-left">
<p className="text-sm text-zinc-400 font-light tracking-tighter font-sans" style={{}}>High-fidelity designs with user testing and iteration</p>
</div>
</div>
</article>

<article className="rounded-2xl bg-zinc-900/70 border border-zinc-800 p-5 sm:p-6 backdrop-blur">
<div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-4 sm:gap-6">
<div className="">
<p className="text-xl sm:text-2xl text-zinc-100 font-pt-serif font-light tracking-tighter" style={{}}>Deliver & Support</p>
</div>
<div className="flex flex-col items-center">
<span className="text-xs text-violet-400 font-light tracking-tighter font-sans" style={{}}>04</span>
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full ring-2 ring-violet-400/60 bg-zinc-950 mt-1">
<span className="h-2 w-2 rounded-full bg-white/90"></span>
</span>
</div>
<div className="text-left">
<p className="text-sm text-zinc-400 font-light tracking-tighter font-sans" style={{}}>Hand-off to development with ongoing design support</p>
</div>
</div>
</article>
</div>

<div className="mt-6 flex items-center justify-center">
<a className="inline-flex items-center gap-2 text-sm sm:text-base text-zinc-100 underline decoration-zinc-700 underline-offset-4 hover:text-white font-light tracking-tighter font-sans" href="#contact" style={{}}>
                    Let's work together
                    <svg className="h-4 w-4" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path></path><path></path>
</svg>
</a>
</div>
</section>

<section className="scroll-fade-in py-16 text-center">
<blockquote className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-white font-pt-serif font-semibold tracking-tighter max-w-5xl mx-auto">
                "The details are not the details. <span className="text-zinc-400">They make</span> <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">the design</span>."
            </blockquote>
<cite className="block mt-6 text-lg text-zinc-400 font-light tracking-tighter font-sans">— Charles Eames</cite>
</section>

<section className="scroll-fade-in sm:p-8 bg-zinc-900/50 bg-[url(https://cdn.midjourney.com/b031659e-2274-4e39-9be7-2bfd51385a8e/0_0.png?w=800&q=80)] bg-cover border-zinc-800 border rounded-3xl pt-6 pr-6 pb-0 pl-6" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

<div className="">
<h3 className="text-4xl text-zinc-100 font-pt-serif font-light tracking-tighter" style={{}}>
                        Ready to create something <span className="underline decoration-zinc-600 underline-offset-4 font-pt-serif font-light tracking-tighter" style={{}}>exceptional together</span>?
                    </h3>
<div className="mt-6 flex items-center gap-3">
<div className="h-10 w-10 bg-gradient-to-br from-violet-500 to-purple-600 border border-zinc-700 rounded-full flex items-center justify-center text-white text-sm font-light tracking-tighter font-sans" style={{}}>
                            CL
                        </div>
<div>
<p className="text-sm text-zinc-100 font-light tracking-tighter font-sans" style={{}}>Cynthia Labelle</p>
<p className="text-xs text-zinc-500 font-light tracking-tighter font-sans" style={{}}>Product Designer</p>
</div>
</div>
<div className="mt-10 space-y-2">
<p className="text-sm text-zinc-400 font-light tracking-tighter font-sans" style={{}}>Currently available for new projects</p>
<a className="inline-flex items-center gap-3 text-2xl sm:text-3xl text-zinc-100 underline decoration-zinc-600 underline-offset-4 font-pt-serif font-light tracking-tighter" href="mailto:hello@cynthialabelle.com" style={{}}>
<span className="inline-flex h-7 w-7 items-center justify-center text-zinc-900 bg-zinc-100 rounded-full">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path><path></path>
</svg>
</span>
                            hello@cynthialabelle.com
                        </a>
</div>
</div>

<div className="bg-neutral-950/70 border-zinc-800 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<h4 className="text-2xl sm:text-3xl text-zinc-100 font-pt-serif font-light tracking-tighter" style={{}}>Let's Connect</h4>
<form className="mt-6 space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="">
<input className="w-full focus:border-zinc-400 outline-none placeholder-zinc-500 text-sm text-zinc-100 bg-transparent border-zinc-700 border-b pt-3 pb-3" placeholder="Your name *" type="text" />
</div>
<div className="">
<input className="w-full bg-transparent border-b border-zinc-700 focus:border-zinc-400 outline-none py-3 text-sm text-zinc-100 placeholder-zinc-500" placeholder="Email *" type="email" />
</div>
</div>
<div className="">
<input className="w-full bg-transparent border-b border-zinc-700 focus:border-zinc-400 outline-none py-3 text-sm text-zinc-100 placeholder-zinc-500" placeholder="Company" type="text" />
</div>
<div className="">
<textarea className="w-full bg-transparent border-b border-zinc-700 focus:border-zinc-400 outline-none py-3 text-sm text-zinc-100 placeholder-zinc-500 resize-none" placeholder="Tell me about your project *" rows="4"></textarea>
</div>
<div className="flex items-center gap-4">
<button className="inline-flex items-center justify-between gap-3 px-4 py-2.5 rounded-full bg-zinc-100 text-zinc-900 text-sm hover:bg-zinc-200 transition font-light tracking-tighter font-sans" style={{}} type="submit">
                                Send message
                                <span className="inline-flex h-2 w-2 rounded-full bg-zinc-900"></span>
</button>
<p className="text-sm text-zinc-500 font-light tracking-tighter font-sans" style={{}}>I'll get back to you within 24 hours.</p>
</div>
</form>
<div className="grid grid-cols-2 gap-8 mt-10">
<div className="">
<p className="text-xs text-zinc-500 font-light tracking-tighter font-sans" style={{}}>Connect</p>
<ul className="mt-3 space-y-2">
<li className="">
<a className="inline-flex items-center gap-2 text-lg text-zinc-100 hover:underline underline-offset-4 font-light tracking-tighter font-sans" href="#" style={{}}>
                                        LinkedIn
                                        <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path><path></path><path></path>
</svg>
</a>
</li>
<li className="">
<a className="inline-flex items-center gap-2 text-lg text-zinc-100 hover:underline underline-offset-4 font-light tracking-tighter font-sans" href="#" style={{}}>
                                        Dribbble
                                        <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path><path></path><path></path>
</svg>
</a>
</li>
<li className="">
<a className="inline-flex items-center gap-2 text-lg text-zinc-100 hover:underline underline-offset-4 font-light tracking-tighter font-sans" href="#" style={{}}>
                                        Behance
                                        <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path><path></path><path></path>
</svg>
</a>
</li>
</ul>
</div>
<div className="">
<p className="text-xs text-zinc-500 font-light tracking-tighter font-sans" style={{}}>Location</p>
<div className="mt-3">
<p className="text-lg text-zinc-100 font-light tracking-tighter font-sans" style={{}}>Montreal, QC</p>
<p className="text-sm text-zinc-400 mt-1 font-light tracking-tighter font-sans" style={{}}>Available for remote work</p>
<p className="text-sm text-zinc-400 font-light tracking-tighter font-sans" style={{}}>EST timezone</p>
</div>
</div>
</div>
</div>
</div>
<div className="mt-10 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-sm font-light tracking-tighter font-sans" style={{}}>
                        CL
                    </div>
<span className="text-sm font-light tracking-tighter font-sans" style={{}}>Cynthia Labelle</span>
</div>
<p className="text-xs text-zinc-500 font-light tracking-tighter font-sans" style={{}}>© <span className="font-light tracking-tighter font-sans" style={{}}>2024</span> Cynthia Labelle — All rights reserved</p>
</div>
</section>
</main>


    </>
  );
}
