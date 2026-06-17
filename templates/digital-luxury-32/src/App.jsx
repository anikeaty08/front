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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        // Icons
        lucide.createIcons();

        // Mobile Menu Logic
        const menuBtn = document.getElementById('open-menu');
        const closeBtn = document.getElementById('close-menu');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            const isClosed = mobileMenu.classList.contains('translate-x-full');
            if (isClosed) {
                mobileMenu.classList.remove('translate-x-full');
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.classList.add('translate-x-full');
                document.body.style.overflow = 'auto';
            }
        }

        menuBtn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);
        
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

        // Sticky Nav Blur Effect
        const nav = document.getElementById('sticky-nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('bg-white/70', 'backdrop-blur-md', 'shadow-sm');
            } else {
                nav.classList.remove('bg-white/70', 'backdrop-blur-md', 'shadow-sm');
            }
        });

        // Intersection Observer for Reveal Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Optional: stop observing once visible
                    // observer.unobserve(entry.target); 
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-up-element, .blur-reveal').forEach(el => {
            observer.observe(el);
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ty3N7ZPaIU7KlWixQFIc"></div>

</div></div>

<div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-xl transform translate-x-full flex flex-col items-center justify-center space-y-8" id="mobile-menu">
<button className="absolute top-6 right-6 p-2 text-slate-600 hover:text-sky-600 transition-colors" id="close-menu">
<svg className="lucide lucide-x w-8 h-8" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<a className="mobile-link text-3xl font-light tracking-tight hover:text-sky-600 transition-colors" href="#home">Home</a>
<a className="mobile-link text-3xl font-light tracking-tight hover:text-sky-600 transition-colors" href="#about">About</a>
<a className="mobile-link text-3xl font-light tracking-tight hover:text-sky-600 transition-colors" href="#roadmap">Roadmap</a>
<a className="mobile-link text-3xl font-light tracking-tight hover:text-sky-600 transition-colors" href="#blog">Blog</a>
<a className="mobile-link text-3xl font-light tracking-tight hover:text-sky-600 transition-colors" href="#contact">Contact</a>
</div>

<nav className="fixed top-0 left-0 w-full z-40 transition-all duration-300 lg:hidden" id="sticky-nav">
<div className="flex justify-between items-center px-6 py-4">
<span className="text-2xl font-semibold tracking-tighter text-sky-900">XX</span>
<button className="p-2 text-slate-600" id="open-menu">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<main className="">

<section className="relative min-h-screen w-full lg:h-screen flex flex-col lg:grid lg:grid-cols-12 overflow-hidden bg-white" id="home">

<div className="lg:col-span-3 h-full flex flex-col justify-between p-8 lg:p-12 border-r border-sky-100 z-10 bg-white/80 backdrop-blur-sm fade-up-element visible">
<div className="hidden lg:block">
<h1 className="text-7xl font-semibold text-blue-600 tracking-tighter">X X</h1>
</div>

<div className="hidden lg:flex flex-col flex-grow pt-12 pb-12 space-y-4 items-center justify-center">
<div className="flex flex-col uppercase text-xs font-medium text-zinc-950 tracking-[0.3em] text-center space-y-6">
<span>D</span><span className="">I</span><span>S</span><span>R</span><span>U</span><span className="">P</span><span className="">T</span>
</div>
</div>
<div className="mt-auto hidden lg:block">
<p className="leading-relaxed text-sm font-light text-left bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/10 to-white/0 max-w-[200px]">
                        You have great compassion and seek to create a more humane society. Driven by intuition.
                    </p>
<div className="uppercase text-xs font-semibold text-gray-950 tracking-widest mt-8">
                        Disposition / Future
                    </div>
</div>
</div>

<div className="lg:col-span-6 h-[50vh] lg:h-full relative overflow-hidden group fade-up-element visible" style={{transitionDelay: '100ms'}}>

<img alt="High Fashion Model" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter saturate-[0.8] contrast-[1.1]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-sky-900/10 mix-blend-overlay"></div>

<div className="flex bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d66fa2f5-64f0-4de3-ac06-e660b9102deb_3840w.png)] bg-auto absolute top-0 right-0 bottom-0 left-0 space-x-0">
</div>
</div>

<div className="lg:col-span-3 flex flex-col lg:p-12 fade-up-element z-10 bg-white/80 h-full border-sky-100 border-l pt-8 pr-8 pb-8 pl-8 backdrop-blur-sm justify-between visible" style={{transitionDelay: '200ms'}}>

<nav className="hidden lg:flex flex-row w-full space-x-8 items-center justify-center">
<a className="hover:text-sky-600 transition-colors uppercase text-xs font-medium tracking-widest max-w-lg" href="#about">About</a>
<a className="text-xs font-medium tracking-widest hover:text-sky-600 transition-colors uppercase" href="#roadmap">Roadmap</a>
<a className="text-xs font-medium tracking-widest hover:text-sky-600 transition-colors uppercase" href="#blog">Stories</a>
<a className="text-xs font-medium tracking-widest hover:text-sky-600 transition-colors uppercase" href="#contact">Contact</a>
<div>
<i className="w-6 h-6 text-slate-800" data-lucide="menu-left"></i>
</div>
</nav>

<div className="lg:hidden mt-8">
<h2 className="text-3xl font-light tracking-tight text-slate-900 leading-tight">
                        Redefining the <span className="text-sky-600 font-medium">Digital Luxury</span>
</h2>
</div>

<div className="mt-auto flex flex-col items-end text-right">
<h2 className="text-4xl lg:text-6xl font-semibold tracking-tighter text-slate-900 leading-none">
                        PURE  FORM
                    </h2>
<div className="flex space-x-4 mt-8">
<a className="text-slate-400 hover:text-sky-600 transition-colors" href="#"><svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-slate-400 hover:text-sky-600 transition-colors" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-slate-400 hover:text-sky-600 transition-colors" href="#"><svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-sky-100 bg-sky-50/50">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium tracking-widest text-slate-400 uppercase mb-8">As seen in</p>
<div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<svg className="h-6 text-slate-800" fill="currentColor" viewbox="0 0 100 30"><path d="M10,15 L20,5 L30,15 L20,25 Z M40,5 H50 V25 H40 Z M60,5 H90 V10 H65 V20 H90 V25 H60 Z"></path></svg>
<svg className="h-6 text-slate-800" fill="currentColor" viewbox="0 0 100 30"><circle cx="15" cy="15" r="10"></circle> <rect height="20" width="10" x="35" y="5"></rect> <rect height="5" width="40" x="55" y="5"></rect></svg>
<svg className="h-5 text-slate-800" fill="currentColor" viewbox="0 0 100 30"><path d="M10,25 L20,5 L30,25 M45,5 L45,25 M60,5 H90 M60,15 H80 M60,25 H90" stroke="currentColor" strokeWidth="3"></path></svg>
<svg className="h-7 text-slate-800" fill="currentColor" viewbox="0 0 100 30"><rect height="10" width="20" x="5" y="10"></rect> <circle cx="50" cy="15" r="8"></circle> <rect height="20" width="5" x="75" y="5"></rect></svg>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative overflow-hidden" id="about">
<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl"></div>
<div className="max-w-4xl mx-auto px-6 text-center fade-up-element blur-reveal">
<h2 className="lg:text-6xl leading-[1.1] text-4xl font-medium text-slate-900 tracking-tight mb-8">XX is a design practice rooted in clarity and restraint.
We create digital environments that prioritize meaning over excess — reducing complexity to reveal what truly matters.

No noise.
Just signal.</h2>
<p className="text-lg lg:text-xl font-light text-slate-500 leading-relaxed max-w-2xl mx-auto">
                    XX is not just a platform; it is a disposition. We strip away the non-essential to reveal the pure utility and beauty of your data. No noise. Just signal.
                </p>
<div className="mt-12">
<button className="btn-neu px-8 py-4 rounded-full text-sm font-medium tracking-wide text-sky-900 uppercase">
                        Our Philosophy
                    </button>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="roadmap">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 fade-up-element">
<h3 className="text-3xl font-medium tracking-tight text-slate-900">Roadmap</h3>
<p className="text-slate-400 font-light mt-2 md:mt-0">The path forward</p>
</div>
<div className="relative border-l border-sky-100 ml-4 md:ml-0 md:border-l-0 md:border-t md:grid md:grid-cols-4 gap-8">

<div className="pl-8 pb-12 md:pl-0 md:pt-12 relative fade-up-element hover:bg-sky-50/50 transition-colors p-4 rounded-lg">
<div className="absolute -left-[5px] top-0 md:-top-[5px] md:left-4 w-2.5 h-2.5 bg-sky-500 rounded-full ring-4 ring-white"></div>
<span className="text-xs font-semibold tracking-wider text-sky-600 uppercase">Q1 2024</span>
<h4 className="text-xl font-medium text-slate-900 mt-2">Foundation</h4>
<p className="text-slate-500 font-light mt-2 text-sm">Core infrastructure deployment and security audits completion.</p>
</div>

<div className="pl-8 pb-12 md:pl-0 md:pt-12 relative fade-up-element" style={{transitionDelay: '100ms'}}>
<div className="absolute -left-[5px] top-0 md:-top-[5px] md:left-4 w-2.5 h-2.5 bg-slate-300 rounded-full ring-4 ring-white"></div>
<span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Q2 2024</span>
<h4 className="text-xl font-medium text-slate-900 mt-2">Integration</h4>
<p className="text-slate-500 font-light mt-2 text-sm">API release for partners and first public beta access.</p>
</div>

<div className="pl-8 pb-12 md:pl-0 md:pt-12 relative fade-up-element" style={{transitionDelay: '200ms'}}>
<div className="absolute -left-[5px] top-0 md:-top-[5px] md:left-4 w-2.5 h-2.5 bg-slate-200 rounded-full ring-4 ring-white"></div>
<span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Q3 2024</span>
<h4 className="text-xl font-medium text-slate-900 mt-2">Expansion</h4>
<p className="text-slate-500 font-light mt-2 text-sm">Global scaling nodes and multi-language support implementation.</p>
</div>

<div className="pl-8 pb-0 md:pl-0 md:pt-12 relative fade-up-element" style={{transitionDelay: '300ms'}}>
<div className="absolute -left-[5px] top-0 md:-top-[5px] md:left-4 w-2.5 h-2.5 bg-slate-200 rounded-full ring-4 ring-white"></div>
<span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Q4 2024</span>
<h4 className="text-xl font-medium text-slate-900 mt-2">Ecosystem</h4>
<p className="text-slate-500 font-light mt-2 text-sm">Launch of the developer marketplace and governance token.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-sky-50 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<h3 className="text-3xl font-medium tracking-tight text-slate-900 mb-12 fade-up-element">Voices</h3>

<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 no-scrollbar fade-up-element">

<div className="snap-center shrink-0 w-[85vw] md:w-[400px] glass-card p-8 rounded-2xl relative">
<div className="absolute top-8 right-8 text-4xl font-serif text-sky-200">"</div>
<p className="text-lg text-slate-700 font-light leading-relaxed mb-6">
                            "The attention to detail is unparalleled. XX transformed how we visualize our metrics."
                        </p>
<div className="flex justify-between items-end border-t border-sky-100/50 pt-6">
<div>
<h5 className="text-sm font-semibold text-slate-900">Sarah Jenkins</h5>
<span className="text-xs text-slate-500">CTO, FinLayer</span>
</div>
<div className="flex flex-col items-end">
<span className="text-2xl font-medium text-sky-600">34%</span>
<span className="text-[10px] uppercase tracking-wider text-slate-400">Efficiency Lift</span>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[400px] glass-card p-8 rounded-2xl relative">
<div className="absolute top-8 right-8 text-4xl font-serif text-sky-200">"</div>
<p className="text-lg text-slate-700 font-light leading-relaxed mb-6">
                            "Minimalism isn't just an aesthetic here; it's a functional revolution for our workflow."
                        </p>
<div className="flex justify-between items-end border-t border-sky-100/50 pt-6">
<div>
<h5 className="text-sm font-semibold text-slate-900">David Ross</h5>
<span className="text-xs text-slate-500">Founder, Omni</span>
</div>
<div className="flex flex-col items-end">
<span className="text-2xl font-medium text-sky-600">2.5x</span>
<span className="text-[10px] uppercase tracking-wider text-slate-400">Speed Increase</span>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[400px] glass-card p-8 rounded-2xl relative">
<div className="absolute top-8 right-8 text-4xl font-serif text-sky-200">"</div>
<p className="text-lg text-slate-700 font-light leading-relaxed mb-6">
                            "Finally, a luxury approach to B2B software. It feels like driving a high-performance car."
                        </p>
<div className="flex justify-between items-end border-t border-sky-100/50 pt-6">
<div>
<h5 className="text-sm font-semibold text-slate-900">Elena Wu</h5>
<span className="text-xs text-slate-500">Director, Apex</span>
</div>
<div className="flex flex-col items-end">
<span className="text-2xl font-medium text-sky-600">98/100</span>
<span className="text-[10px] uppercase tracking-wider text-slate-400">NPS Score</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="blog">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-16 fade-up-element">
<h3 className="text-3xl font-medium tracking-tight text-slate-900">Journal</h3>
<a className="text-sm text-sky-600 hover:text-sky-800 transition-colors flex items-center gap-2" href="#">View all <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<article className="group cursor-pointer fade-up-element">
<div className="aspect-[4/3] bg-sky-100 mb-4 overflow-hidden rounded-lg">
<img alt="Office" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/761941af-4608-43b4-83a6-c1a8c200e7d2_800w.webp"/>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-sky-500"></span>
<span className="text-xs text-slate-400 uppercase tracking-widest">Design</span>
</div>
<h4 className="text-lg font-medium text-slate-900 group-hover:text-sky-600 transition-colors">The Architecture of Silence</h4>
<p className="text-sm text-slate-500 font-light mt-2 line-clamp-2">Why removing features is harder than adding them.</p>
</article>

<article className="group cursor-pointer fade-up-element" style={{transitionDelay: '100ms'}}>
<div className="aspect-[4/3] bg-sky-100 mb-4 overflow-hidden rounded-lg">
<img alt="Tech" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d054162-66db-44cb-a5f0-ee3189556a9d_800w.webp"/>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-sky-500"></span>
<span className="text-xs text-slate-400 uppercase tracking-widest">Tech</span>
</div>
<h4 className="text-lg font-medium text-slate-900 group-hover:text-sky-600 transition-colors">Scaling without Breaking</h4>
<p className="text-sm text-slate-500 font-light mt-2 line-clamp-2">Strategies for maintaining velocity during hypergrowth.</p>
</article>

<article className="group cursor-pointer fade-up-element" style={{transitionDelay: '200ms'}}>
<div className="aspect-[4/3] bg-sky-100 mb-4 overflow-hidden rounded-lg">
<img alt="Abstract" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/798d4971-1edd-4ebf-94ca-6135a1343641_800w.webp"/>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-sky-500"></span>
<span className="text-xs text-slate-400 uppercase tracking-widest">Vision</span>
</div>
<h4 className="text-lg font-medium text-slate-900 group-hover:text-sky-600 transition-colors">Blue Ocean Strategy</h4>
<p className="text-sm text-slate-500 font-light mt-2 line-clamp-2">Navigating competitive markets with calm precision.</p>
</article>

<article className="group cursor-pointer fade-up-element" style={{transitionDelay: '300ms'}}>
<div className="aspect-[4/3] bg-sky-100 mb-4 overflow-hidden rounded-lg">
<img alt="Code" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df20a772-3bb2-4537-b5ac-e2ebc1421345_800w.webp"/>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-sky-500"></span>
<span className="text-xs text-slate-400 uppercase tracking-widest">Engineering</span>
</div>
<h4 className="text-lg font-medium text-slate-900 group-hover:text-sky-600 transition-colors">Rust in Production</h4>
<p className="text-sm text-slate-500 font-light mt-2 line-clamp-2">Lessons learned from porting our core engine.</p>
</article>
</div>
</div>
</section>

<section className="py-24 bg-sky-50/50">
<div className="max-w-3xl mx-auto px-6">
<h3 className="text-3xl font-medium tracking-tight text-slate-900 mb-12 text-center fade-up-element">Frequently Asked</h3>
<div className="space-y-4">

<details className="group bg-white rounded-lg border border-sky-100 p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer fade-up-element">
<summary className="flex items-center justify-between font-medium text-slate-900 group-hover:text-sky-700 transition-colors">
<span className="">What makes XX different from traditional platforms?</span>
<svg className="lucide lucide-plus w-5 h-5 text-slate-400 transition-transform group-open:rotate-45" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</summary>
<p className="mt-4 text-slate-500 text-sm font-light leading-relaxed">
                            We focus on "Subtraction by Design". While others add clutter, we refine. Our engine is built for speed and visual clarity, prioritizing the metrics that actually drive business decisions.
                        </p>
</details>

<details className="group bg-white rounded-lg border border-sky-100 p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer fade-up-element">
<summary className="flex items-center justify-between font-medium text-slate-900 group-hover:text-sky-700 transition-colors">
<span>Is there an enterprise API available?</span>
<svg className="lucide lucide-plus w-5 h-5 text-slate-400 transition-transform group-open:rotate-45" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</summary>
<p className="mt-4 text-slate-500 text-sm font-light leading-relaxed">
                            Yes. Our API is first-class. Everything you see in the dashboard is built on top of the same endpoints we provide to our enterprise customers. Documentation is available in the developer portal.
                        </p>
</details>

<details className="group bg-white rounded-lg border border-sky-100 p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer fade-up-element">
<summary className="flex items-center justify-between font-medium text-slate-900 group-hover:text-sky-700 transition-colors">
<span>How do you handle data privacy?</span>
<svg className="lucide lucide-plus w-5 h-5 text-slate-400 transition-transform group-open:rotate-45" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</summary>
<p className="mt-4 text-slate-500 text-sm font-light leading-relaxed">
                            Security is our baseline. We employ end-to-end encryption and are SOC2 Type II compliant. Your data never trains our models without explicit consent.
                        </p>
</details>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-12 border-t border-sky-100" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 fade-up-element">
<div className="col-span-1 lg:col-span-2">
<h2 className="text-4xl font-semibold tracking-tighter text-sky-600 mb-6">XX</h2>
<p className="text-slate-500 font-light max-w-sm mb-8">
                            Crafting the future of digital interaction with precision, elegance, and speed.
                        </p>
<button className="btn-neu px-6 py-3 rounded-lg text-sm font-medium text-slate-700">
                            Start a Project
                        </button>
</div>
<div>
<h5 className="text-sm font-semibold text-slate-900 uppercase tracking-widest mb-6">Sitemap</h5>
<ul className="space-y-4">
<li><a className="text-sm text-slate-500 hover:text-sky-600 transition-colors" href="#home">Home</a></li>
<li><a className="text-sm text-slate-500 hover:text-sky-600 transition-colors" href="#about">About</a></li>
<li><a className="text-sm text-slate-500 hover:text-sky-600 transition-colors" href="#roadmap">Roadmap</a></li>
<li><a className="text-sm text-slate-500 hover:text-sky-600 transition-colors" href="#blog">Journal</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-semibold text-slate-900 uppercase tracking-widest mb-6">Social</h5>
<ul className="space-y-4">
<li><a className="text-sm text-slate-500 hover:text-sky-600 transition-colors" href="#">Twitter</a></li>
<li><a className="text-sm text-slate-500 hover:text-sky-600 transition-colors" href="#">LinkedIn</a></li>
<li><a className="text-sm text-slate-500 hover:text-sky-600 transition-colors" href="#">Instagram</a></li>
<li><a className="text-sm text-slate-500 hover:text-sky-600 transition-colors" href="#">GitHub</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100 text-xs text-slate-400 font-light">
<p>© 2024 XX Inc. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
