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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            const observerOptions = {
                root: null,
                rootMargin: "0px",
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll(".fade-up, .fade-in, .image-reveal").forEach(el => {
                observer.observe(el);
            });
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
      

<div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none fade-up visible">
<nav className="glass-nav border border-slate-200/60 rounded-full px-2 py-2 flex items-center gap-2 sm:gap-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] pointer-events-auto">
<a className="pl-4 text-lg font-medium tracking-tighter text-slate-900 uppercase" href="#">
                A.R.
            </a>
<div className="hidden md:flex items-center space-x-1">
<a className="px-4 py-2 rounded-full text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-white/80 transition-all uppercase tracking-widest" href="#work">Work</a>
<a className="px-4 py-2 rounded-full text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-white/80 transition-all uppercase tracking-widest" href="#about">About</a>
<a className="px-4 py-2 rounded-full text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-white/80 transition-all uppercase tracking-widest" href="#services">Services</a>
<a className="px-4 py-2 rounded-full text-xs font-medium text-slate-500 hover:text-slate-900 hover:bg-white/80 transition-all uppercase tracking-widest" href="#journal">Journal</a>
</div>
<a className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-medium bg-slate-900 text-white hover:bg-slate-800 transition-colors uppercase tracking-widest" href="#contact">
                Hire Me
            </a>
<button className="md:hidden pr-4 text-slate-600 hover:text-slate-900 transition-colors">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</nav>
</div>

<section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 px-6 max-w-[1600px] mx-auto w-full overflow-hidden">
<div className="flex flex-col items-center text-center z-10 relative">
<div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm mb-10 fade-up">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 relative">
<span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
</span>
<span className="text-xs font-medium tracking-widest uppercase text-slate-600">Accepting Clients</span>
</div>
<h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tighter text-slate-900 uppercase leading-[0.85] mb-8 fade-up stagger-1">
                Visual <span className="text-slate-300">Poetry</span><br/>
                In Motion
            </h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl font-light leading-relaxed fade-up stagger-2 mb-16">
                Capturing the fleeting moments that define a generation. Visual storytelling through a lens of raw authenticity and structured elegance, based in Paris &amp; NY.
            </p>
</div>

<div className="w-full max-w-6xl mx-auto rounded-[2rem] overflow-hidden h-[50vh] lg:h-[70vh] relative fade-up stagger-3 image-reveal shadow-2xl shadow-slate-200/50">
<div className="absolute inset-0 bg-slate-900/10 z-10 mix-blend-overlay"></div>
<img alt="Portrait" className="absolute inset-0 w-full h-full object-cover object-center filter grayscale-[30%] hover:grayscale-0 transition-all duration-1000 scale-105" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<section className="py-12 max-w-[1600px] mx-auto w-full px-6 fade-up">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="p-8 rounded-2xl bg-white border border-slate-100 flex flex-col items-center justify-center gap-3 hover-lift cursor-pointer">
<span className="text-xs font-medium text-slate-400 uppercase tracking-widest">Instagram</span>
<span className="text-sm font-medium text-slate-900 tracking-tight">@alexareed</span>
</div>
<div className="p-8 rounded-2xl bg-white border border-slate-100 flex flex-col items-center justify-center gap-3 hover-lift cursor-pointer">
<span className="text-xs font-medium text-slate-400 uppercase tracking-widest">Behance</span>
<span className="text-sm font-medium text-slate-900 tracking-tight">Alexa Studio</span>
</div>
<div className="p-8 rounded-2xl bg-white border border-slate-100 flex flex-col items-center justify-center gap-3 hover-lift cursor-pointer">
<span className="text-xs font-medium text-slate-400 uppercase tracking-widest">Location</span>
<span className="text-sm font-medium text-slate-900 tracking-tight">Paris, FR</span>
</div>
<div className="p-8 rounded-2xl bg-slate-900 flex flex-col items-center justify-center gap-3 hover-lift cursor-pointer group">
<span className="text-xs font-medium text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors">Est.</span>
<span className="text-sm font-medium text-white tracking-tight">2012</span>
</div>
</div>
</section>

<section className="py-24 lg:py-32 max-w-[1600px] mx-auto w-full px-6" id="about">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
<div className="lg:col-span-5 lg:sticky lg:top-32 h-fit fade-up">
<h2 className="text-4xl lg:text-6xl font-medium tracking-tighter text-slate-900 uppercase leading-[0.9] mb-8">
                    Vision &amp;<br/>Approach
                </h2>
<div className="text-slate-300">
<iconify-icon height="48" icon="solar:target-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
</div>
<div className="lg:col-span-7 space-y-8 fade-up stagger-1">
<p className="text-2xl lg:text-3xl font-light text-slate-800 leading-snug tracking-tight">
                    Alexa Reed is a freelance fashion photographer and creative director based in Paris. With over a decade of experience, she has collaborated with top-tier brands and publications.
                </p>
<div className="h-px w-full bg-slate-200 my-8"></div>
<p className="text-lg text-slate-500 font-light leading-relaxed">
                    Welcome to my digital archive. I'm a visual artist who loves turning abstract concepts into tangible stories. For the past 12 years, I've been obsessed with the interplay of light, raw emotion, and the structured beauty of both high fashion and urban landscapes.
                </p>
<a className="inline-flex items-center text-slate-900 font-medium text-sm uppercase tracking-widest mt-8 group" href="#contact">
                    Learn more about my process
                    <iconify-icon className="ml-3 group-hover:translate-x-2 transition-transform duration-300" height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 max-w-[1600px] mx-auto w-full px-6" id="services">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-10 rounded-[2rem] bg-white border border-slate-100 hover-lift group fade-up relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 text-slate-100 group-hover:text-slate-50 transition-colors duration-500">
<iconify-icon height="120" icon="solar:gallery-linear" strokeWidth="1" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<span className="text-xs font-medium text-slate-400 mb-6 block tracking-widest">01</span>
<h3 className="text-2xl font-medium tracking-tighter text-slate-900 mb-4">Art Direction</h3>
<p className="text-sm font-light text-slate-500 leading-relaxed">Comprehensive visual storytelling for campaigns and brand identities, overseeing every touchpoint for consistency.</p>
</div>
</div>

<div className="p-10 rounded-[2rem] bg-white border border-slate-100 hover-lift group fade-up stagger-1 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 text-slate-100 group-hover:text-slate-50 transition-colors duration-500">
<iconify-icon height="120" icon="solar:camera-linear" strokeWidth="1" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<span className="text-xs font-medium text-slate-400 mb-6 block tracking-widest">02</span>
<h3 className="text-2xl font-medium tracking-tighter text-slate-900 mb-4">Editorial Photography</h3>
<p className="text-sm font-light text-slate-500 leading-relaxed">Crafting compelling narratives through high-end fashion and portrait photography for print and digital publications.</p>
</div>
</div>

<div className="p-10 rounded-[2rem] bg-white border border-slate-100 hover-lift group fade-up stagger-2 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 text-slate-100 group-hover:text-slate-50 transition-colors duration-500">
<iconify-icon height="120" icon="solar:videocamera-linear" strokeWidth="1" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<span className="text-xs font-medium text-slate-400 mb-6 block tracking-widest">03</span>
<h3 className="text-2xl font-medium tracking-tighter text-slate-900 mb-4">Commercial Campaigns</h3>
<p className="text-sm font-light text-slate-500 leading-relaxed">Delivering high-impact visuals designed to elevate brand perception and drive engagement across global markets.</p>
</div>
</div>

<div className="p-10 rounded-[2rem] bg-slate-900 text-white hover-lift group fade-up stagger-3 flex flex-col justify-between">
<div>
<span className="text-xs font-medium text-slate-400 mb-6 block tracking-widest">Explore</span>
<h3 className="text-2xl font-medium tracking-tighter text-white mb-4">View All Services</h3>
<p className="text-sm font-light text-slate-400 leading-relaxed">Discover the full spectrum of creative capabilities and specialized consulting offerings.</p>
</div>
<div className="mt-8 flex justify-end text-white">
<iconify-icon className="group-hover:rotate-45 transition-transform duration-500" height="40" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-[1600px] mx-auto w-full px-6" id="work">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 fade-up">
<h2 className="text-5xl lg:text-7xl font-medium tracking-tighter text-slate-900 uppercase leading-[0.9]">
                Selected<br/>Works
            </h2>
<p className="text-lg text-slate-500 font-light max-w-sm pb-2">A curated collection of recent projects spanning fashion, editorial, and commercial photography.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10">

<div className="md:col-span-7 fade-up img-scale-hover group block cursor-pointer">
<div className="relative rounded-[2rem] overflow-hidden bg-slate-100 aspect-[4/5] lg:aspect-[4/3] image-reveal">
<div className="absolute inset-0 bg-slate-900/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<img alt="Project 1" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
<div className="text-white">
<span className="text-xs font-medium mb-2 block uppercase tracking-widest text-white/80">Editorial / 24</span>
<h3 className="text-3xl font-medium tracking-tighter">Neon Reverie</h3>
</div>
<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
<iconify-icon height="24" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="md:col-span-5 md:mt-32 fade-up stagger-1 img-scale-hover group block cursor-pointer">
<div className="relative rounded-[2rem] overflow-hidden bg-slate-100 aspect-[4/5] image-reveal">
<div className="absolute inset-0 bg-slate-900/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<img alt="Project 2" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
<div className="text-white">
<span className="text-xs font-medium mb-2 block uppercase tracking-widest text-white/80">Portrait / 23</span>
<h3 className="text-3xl font-medium tracking-tighter">Blue Silence</h3>
</div>
<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
<iconify-icon height="24" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="md:col-span-5 fade-up img-scale-hover group block cursor-pointer">
<div className="relative rounded-[2rem] overflow-hidden bg-slate-100 aspect-[4/5] image-reveal">
<div className="absolute inset-0 bg-slate-900/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<img alt="Project 3" className="object-cover w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
<div className="text-white">
<span className="text-xs font-medium mb-2 block uppercase tracking-widest text-white/80">Commercial / 24</span>
<h3 className="text-3xl font-medium tracking-tighter">Desert Geometry</h3>
</div>
<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
<iconify-icon height="24" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="md:col-span-7 md:mt-[-8rem] fade-up stagger-1 img-scale-hover group block cursor-pointer">
<div className="relative rounded-[2rem] overflow-hidden bg-slate-100 aspect-[4/5] lg:aspect-[4/3] image-reveal">
<div className="absolute inset-0 bg-slate-900/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<img alt="Project 4" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
<div className="text-white">
<span className="text-xs font-medium mb-2 block uppercase tracking-widest text-white/80">Art Direction / 23</span>
<h3 className="text-3xl font-medium tracking-tighter">Porcelain Mood</h3>
</div>
<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
<iconify-icon height="24" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
<div className="mt-16 flex justify-center fade-up">
<a className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-slate-200 text-sm font-medium text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 uppercase tracking-widest group" href="#">
                View Complete Archive
                <iconify-icon className="ml-3 group-hover:translate-x-1 transition-transform" height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="journal">
<div className="max-w-[1600px] mx-auto w-full px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 fade-up">
<h2 className="text-4xl lg:text-6xl font-medium tracking-tighter text-slate-900 uppercase leading-[0.9]">
                    Latest<br/>Insights
                </h2>
</div>
<div className="flex flex-col fade-up stagger-1">

<a className="py-10 border-b border-slate-100 group flex flex-col md:flex-row md:items-center justify-between gap-6 hover:px-6 transition-all duration-500" href="#">
<div className="flex-1">
<span className="text-xs font-medium text-slate-400 mb-4 block uppercase tracking-widest">Process</span>
<h3 className="text-2xl lg:text-4xl font-medium tracking-tighter text-slate-900 mb-3 group-hover:text-slate-500 transition-colors">The Architecture of a Fashion Campaign</h3>
</div>
<div className="flex items-center gap-6">
<span className="text-sm font-light text-slate-400">Oct 12, 2023</span>
<div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-300">
<iconify-icon height="20" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</a>

<a className="py-10 border-b border-slate-100 group flex flex-col md:flex-row md:items-center justify-between gap-6 hover:px-6 transition-all duration-500" href="#">
<div className="flex-1">
<span className="text-xs font-medium text-slate-400 mb-4 block uppercase tracking-widest">Gear &amp; Tech</span>
<h3 className="text-2xl lg:text-4xl font-medium tracking-tighter text-slate-900 mb-3 group-hover:text-slate-500 transition-colors">Why I Still Shoot Medium Format Film</h3>
</div>
<div className="flex items-center gap-6">
<span className="text-sm font-light text-slate-400">Sep 28, 2023</span>
<div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-300">
<iconify-icon height="20" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</a>

<a className="py-10 border-b border-slate-100 group flex flex-col md:flex-row md:items-center justify-between gap-6 hover:px-6 transition-all duration-500" href="#">
<div className="flex-1">
<span className="text-xs font-medium text-slate-400 mb-4 block uppercase tracking-widest">Inspiration</span>
<h3 className="text-2xl lg:text-4xl font-medium tracking-tighter text-slate-900 mb-3 group-hover:text-slate-500 transition-colors">Finding Color in Brutalist Spaces</h3>
</div>
<div className="flex items-center gap-6">
<span className="text-sm font-light text-slate-400">Sep 05, 2023</span>
<div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-300">
<iconify-icon height="20" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</a>
</div>
</div>
</section>

<footer className="mt-auto bg-slate-900 text-white pt-24 pb-8 overflow-hidden relative rounded-t-[3rem]" id="contact">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/50 via-slate-900 to-slate-900"></div>
<div className="max-w-[1600px] mx-auto w-full px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 fade-up">
<div>
<span className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6 block">Initialize Connection</span>
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tighter mb-8 leading-[1.1]">
                        Let's create<br/>something iconic.
                    </h2>
<a className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-slate-900 font-medium text-sm uppercase tracking-widest hover:bg-slate-200 transition-colors" href="mailto:hello@alexareed.studio">
                        HELLO@ALEXAREED.STUDIO
                    </a>
</div>
<div className="flex flex-col lg:items-end justify-end space-y-6">
<a className="text-2xl font-light text-slate-300 hover:text-white transition-colors flex items-center gap-4 group" href="#">
                        Instagram
                        <iconify-icon className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" height="24" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
<a className="text-2xl font-light text-slate-300 hover:text-white transition-colors flex items-center gap-4 group" href="#">
                        LinkedIn
                        <iconify-icon className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" height="24" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
<a className="text-2xl font-light text-slate-300 hover:text-white transition-colors flex items-center gap-4 group" href="#">
                        Behance
                        <iconify-icon className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" height="24" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
</div>
</div>

<div className="w-full flex justify-center mb-12 fade-in">
<h2 className="text-[14vw] font-medium tracking-tighter text-slate-800 uppercase leading-[0.75] text-center w-full select-none">
                    ALEXA<br/>REED
                </h2>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500 uppercase tracking-widest fade-in">
<p>© 2024 Alexa Reed Studio.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Style Guide</a>
<a className="hover:text-white transition-colors" href="#">Licenses</a>
<a className="hover:text-white transition-colors" href="#">Changelog</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
