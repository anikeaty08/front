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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 bg-dark/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white">
<svg className="lucide lucide-aperture w-5 h-5" data-lucide="aperture" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>
</div>
<span className="text-xl font-medium text-white tracking-tight">Cvdaw</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-gray-400">
<a className="hover:text-white transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#">About Us</a>
<a className="hover:text-white transition-colors" href="#">Services</a>
<a className="hover:text-white transition-colors" href="#">Projects</a>
<a className="hover:text-white transition-colors" href="#">Blog</a>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex gap-3 text-gray-400">
<svg className="lucide lucide-instagram w-4 h-4 hover:text-white cursor-pointer transition-colors" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<svg className="lucide lucide-linkedin w-4 h-4 hover:text-white cursor-pointer transition-colors" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
<svg className="lucide lucide-twitter w-4 h-4 hover:text-white cursor-pointer transition-colors" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</div>
<button className="bg-accent hover:bg-rose-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors">
                    Let's Talk
                </button>
</div>
</div>
</nav>

<section className="overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute top-20 left-0 text-[10rem] font-bold leading-none text-outline opacity-20 select-none whitespace-nowrap pointer-events-none tracking-tighter">
            WEB DESIGNER
        </div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div className="space-y-2">
<span className="text-accent text-sm font-medium tracking-widest uppercase">Hello</span>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tight">I'm Animesh Mondal <br/> <span className="text-accent">Web Designer</span></h1>
</div>
<p className="text-lg text-gray-400 max-w-lg leading-relaxed font-light">
                    A personal portfolio is a collection of your work, achievements, and skills that highlights your abilities and professional growth. It serves as a visual proof of your expertise.
                </p>
<div className="flex items-center gap-4">
<button className="group border border-white/20 hover:border-accent text-white px-8 py-3 rounded-full text-sm font-medium transition-all flex items-center gap-2">
                        View Portfolio
                        <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform text-accent" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] w-full max-w-md mx-auto bg-zinc-800 rounded-2xl overflow-hidden relative group">

<div className="bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 absolute top-0 right-0 bottom-0 left-0"></div>

<img alt="Profile Picture" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-8 left-8 z-20">
<p className="text-white text-xl font-medium">Alex Smith</p>
<p className="text-gray-400 text-sm">Framer &amp; WordPress Expert</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-black/50">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center text-center gap-3">
<svg className="lucide lucide-monitor w-8 h-8 text-accent" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
<div>
<h3 className="text-white font-medium text-lg">Web Design</h3>
<p className="text-sm text-gray-500">120 Projects</p>
</div>
</div>
<div className="flex flex-col items-center text-center gap-3">
<svg className="lucide lucide-pen-tool w-8 h-8 text-accent" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
<div>
<h3 className="text-white font-medium text-lg">UI/UX Design</h3>
<p className="text-sm text-gray-500">241 Projects</p>
</div>
</div>
<div className="flex flex-col items-center text-center gap-3">
<svg className="lucide lucide-lightbulb w-8 h-8 text-accent" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
<div>
<h3 className="text-white font-medium text-lg">Web Research</h3>
<p className="text-sm text-gray-500">240 Projects</p>
</div>
</div>
<div className="flex flex-col items-center text-center gap-3">
<svg className="lucide lucide-target w-8 h-8 text-accent" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<div>
<h3 className="text-white font-medium text-lg">Marketing</h3>
<p className="text-sm text-gray-500">331 Projects</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-8">

<div className="bg-gradient-to-br from-rose-950 to-card border border-white/5 rounded-2xl p-12 flex flex-col justify-center relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10">
<div className="flex items-baseline gap-2 mb-2">
<span className="text-7xl font-medium text-accent tracking-tighter">25</span>
<span className="text-3xl text-white font-medium">Years Of</span>
</div>
<h3 className="text-3xl text-white font-medium mb-6 tracking-tight">Experience</h3>
<p className="text-gray-400 text-lg leading-relaxed max-w-md font-light">
                        Business consulting consultants provide expert advice and guide businesses to help them improve their performance efficiency.
                    </p>
</div>
</div>

<div className="grid grid-cols-2 gap-6">
<div className="bg-card border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
<h3 className="text-3xl font-medium text-white mb-1">20k+</h3>
<p className="text-sm text-gray-400">Projects Complete</p>
</div>
<div className="bg-card border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
<h3 className="text-3xl font-medium text-white mb-1">10k+</h3>
<p className="text-sm text-gray-400">Natural Products</p>
</div>
<div className="bg-card border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
<h3 className="text-3xl font-medium text-white mb-1">200+</h3>
<p className="text-sm text-gray-400">Clients Reviews</p>
</div>
<div className="bg-card border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
<h3 className="text-3xl font-medium text-white mb-1">2k+</h3>
<p className="text-sm text-gray-400">Satisfied Clients</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-accent text-xs font-semibold tracking-widest uppercase mb-2 block">Latest Service</span>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-4">Inspiring The World One Project</h2>
<p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">Business consulting consultants provide expert advice and guide businesses to help them improve their performance.</p>
</div>
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-6">

<div className="group p-6 rounded-2xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5 cursor-pointer">
<div className="flex items-center gap-4 mb-3">
<span className="text-sm font-mono text-gray-500 group-hover:text-accent">01</span>
<h3 className="text-xl font-medium text-white">Success Architects</h3>
</div>
<p className="text-gray-400 text-lg font-light pl-9 group-hover:text-gray-300">
                            Business consulting consultants provide expert advice and guide the a businesses to help them.
                        </p>
</div>

<div className="group p-6 rounded-2xl bg-white/5 border border-white/10 cursor-pointer">
<div className="flex items-center gap-4 mb-3">
<span className="text-sm font-mono text-accent">02</span>
<h3 className="text-xl font-medium text-white">Success Architects</h3>
</div>
<p className="text-gray-300 text-lg font-light pl-9">
                            Business consulting consultants provide expert advice and guide the a businesses to help them.
                        </p>
</div>

<div className="group p-6 rounded-2xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5 cursor-pointer">
<div className="flex items-center gap-4 mb-3">
<span className="text-sm font-mono text-gray-500 group-hover:text-accent">03</span>
<h3 className="text-xl font-medium text-white">Success Architects</h3>
</div>
<p className="text-gray-400 text-lg font-light pl-9 group-hover:text-gray-300">
                            Business consulting consultants provide expert advice and guide the a businesses to help them.
                        </p>
</div>
</div>
<div className="relative flex justify-center">
<div className="w-full max-w-md aspect-square rounded-full bg-zinc-800 relative overflow-hidden flex items-center justify-center">

<div className="absolute w-20 h-20 bg-accent rounded-full bottom-10 right-10 mix-blend-overlay"></div>
<div className="absolute w-32 h-32 border border-accent rounded-full bottom-20 left-10 opacity-50"></div>
<div className="text-gray-600 font-light">Abstract Visual</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/5">
<div className="text-center mb-16">
<span className="text-accent text-xs font-semibold tracking-widest uppercase mb-2 block">Education &amp; Experience</span>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-4">Empowering Creativity Through</h2>
</div>
<div className="grid lg:grid-cols-2 gap-16">

<div>
<div className="flex items-center gap-4 mb-8">
<h3 className="text-2xl font-medium text-white">Education</h3>
<div className="h-[1px] bg-white/10 flex-1"></div>
</div>
<div className="space-y-8">
<div className="group border border-white/5 p-6 rounded-xl hover:bg-white/5 transition-colors">
<div className="flex justify-between items-start mb-2">
<h4 className="text-lg font-medium text-white">Trainer</h4>
<span className="text-xs text-gray-500 font-mono">2005-2009</span>
</div>
<p className="text-gray-400 text-base font-light">A personal portfolio is a curated collection of an individual's professional work.</p>
</div>
<div className="group border border-white/5 p-6 rounded-xl hover:bg-white/5 transition-colors">
<div className="flex justify-between items-start mb-2">
<h4 className="text-lg font-medium text-white">Design Assistant</h4>
<span className="text-xs text-gray-500 font-mono">2008-2012</span>
</div>
<p className="text-gray-400 text-base font-light">A personal portfolio is a curated collection of an individual's professional work.</p>
</div>
</div>
<div className="flex items-center gap-4 mb-8 mt-12">
<h3 className="text-2xl font-medium text-white">Experiences</h3>
<div className="h-[1px] bg-white/10 flex-1"></div>
</div>
<div className="border-l border-white/10 pl-8 space-y-10">
<div className="relative">
<span className="absolute -left-[37px] top-1 w-4 h-4 bg-dark border-2 border-accent rounded-full"></span>
<span className="text-xs text-gray-500 mb-1 block">2014-2018</span>
<h4 className="text-lg font-medium text-white mb-2">Sakib</h4>
<p className="text-sm text-gray-400 font-medium mb-2">UI/UX Designer</p>
<p className="text-gray-500 text-base font-light">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
</div>
<div className="relative">
<span className="absolute -left-[37px] top-1 w-4 h-4 bg-dark border-2 border-gray-600 rounded-full"></span>
<span className="text-xs text-gray-500 mb-1 block">2014-2018</span>
<h4 className="text-lg font-medium text-white mb-2">Mugli Team</h4>
<p className="text-sm text-gray-400 font-medium mb-2">Senior Designer</p>
<p className="text-gray-500 text-base font-light">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
</div>
</div>
</div>

<div className="flex flex-col gap-8">
<div className="bg-zinc-800 rounded-2xl w-full h-[400px]"></div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-card border border-white/5 p-6 flex items-center justify-center rounded-xl hover:border-white/10 transition-colors">
<div className="flex items-center gap-2 text-gray-300 font-medium">
<svg className="lucide lucide-waves w-5 h-5" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg> Linear
                        </div>
</div>
<div className="bg-card border border-white/5 p-6 flex items-center justify-center rounded-xl hover:border-white/10 transition-colors">
<div className="flex items-center gap-2 text-gray-300 font-medium">
<svg className="lucide lucide-framer w-5 h-5" data-lucide="framer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"></path></svg> Framer
                        </div>
</div>
<div className="bg-card border border-white/5 p-6 flex items-center justify-center rounded-xl hover:border-white/10 transition-colors">
<div className="flex items-center gap-2 text-gray-300 font-medium">
<svg className="lucide lucide-box w-5 h-5" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg> Notion
                        </div>
</div>
<div className="bg-card border border-white/5 p-6 flex items-center justify-center rounded-xl hover:border-white/10 transition-colors">
<div className="flex items-center gap-2 text-gray-300 font-medium">
<svg className="lucide lucide-slack w-5 h-5" data-lucide="slack" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="1.5" width="3" x="13" y="2"></rect><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path><rect height="8" rx="1.5" width="3" x="8" y="14"></rect><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path><rect height="3" rx="1.5" width="8" x="14" y="13"></rect><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path><rect height="3" rx="1.5" width="8" x="2" y="8"></rect><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path></svg> Slack
                        </div>
</div>
<div className="bg-card border border-white/5 p-6 flex items-center justify-center rounded-xl hover:border-white/10 transition-colors">
<div className="flex items-center gap-2 text-gray-300 font-medium">
<span className="font-serif italic">M</span> Medium
                        </div>
</div>
<div className="bg-card border border-white/5 p-6 flex items-center justify-center rounded-xl hover:border-white/10 transition-colors">
<div className="flex items-center gap-2 text-gray-300 font-medium">
                            Upwork
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-accent text-xs font-semibold tracking-widest uppercase mb-2 block">Latest Portfolio</span>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-4">Transforming Ideas Into Exceptional</h2>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="bg-zinc-800 rounded-2xl aspect-[4/3] mb-6 overflow-hidden relative border border-white/5 group-hover:border-white/20 transition-all">
<div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="flex justify-between items-end">
<div>
<h3 className="text-xl font-medium text-white mb-1 group-hover:text-accent transition-colors">Digital Transformation Advisors</h3>
<p className="text-gray-500 text-sm">Development Coaches</p>
</div>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all">
<svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-zinc-800 rounded-2xl aspect-[4/3] mb-6 overflow-hidden relative border border-white/5 group-hover:border-white/20 transition-all">
<div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="flex justify-between items-end">
<div>
<h3 className="text-xl font-medium text-white mb-1 group-hover:text-accent transition-colors">Creative Agency Web</h3>
<p className="text-gray-500 text-sm">Framer Development</p>
</div>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all">
<svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-zinc-800 rounded-2xl aspect-[4/3] mb-6 overflow-hidden relative border border-white/5 group-hover:border-white/20 transition-all">
<div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="flex justify-between items-end">
<div>
<h3 className="text-xl font-medium text-white mb-1 group-hover:text-accent transition-colors">E-commerce Solution</h3>
<p className="text-gray-500 text-sm">Wordpress &amp; Woo</p>
</div>
<div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center">
<svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-zinc-800 rounded-2xl aspect-[4/3] mb-6 overflow-hidden relative border border-white/5 group-hover:border-white/20 transition-all">
<div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="flex justify-between items-end">
<div>
<h3 className="text-xl font-medium text-white mb-1 group-hover:text-accent transition-colors">Finance Dashboard</h3>
<p className="text-gray-500 text-sm">UI/UX Design</p>
</div>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all">
<svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<span className="text-accent text-xs font-semibold tracking-widest uppercase mb-4 block">My Skill</span>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-16">Elevated Designs PersonalizedThe Best Experiences</h2>
<div className="space-y-0">

<div className="group border-b border-white/10 py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.02] transition-colors px-4 -mx-4">
<div className="flex items-center gap-6">
<div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
<svg className="lucide lucide-landmark w-6 h-6" data-lucide="landmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 18v-7"></path><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"></path><path d="M14 18v-7"></path><path d="M18 18v-7"></path><path d="M3 22h18"></path><path d="M6 18v-7"></path></svg>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-1">UI/Visual Design</h3>
<p className="text-xs text-gray-500 font-mono">21 Done</p>
</div>
</div>
<p className="text-gray-400 text-base font-light max-w-md">A personal portfolio is a curated collection of an individual's professional work, showcasing their skills.</p>
<a className="text-xs font-semibold text-white tracking-widest uppercase flex items-center gap-2 group-hover:text-accent transition-colors" href="#">
                        Read More <svg className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>

<div className="group border-b border-white/10 py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.02] transition-colors px-4 -mx-4">
<div className="flex items-center gap-6">
<div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
<svg className="lucide lucide-layout-grid w-6 h-6" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-1">Branding Design</h3>
<p className="text-xs text-gray-500 font-mono">32 Done</p>
</div>
</div>
<p className="text-gray-400 text-base font-light max-w-md">A personal portfolio is a curated collection of an individual's professional work, showcasing their skills.</p>
<a className="text-xs font-semibold text-white tracking-widest uppercase flex items-center gap-2 group-hover:text-accent transition-colors" href="#">
                        Read More <svg className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>

<div className="group border-b border-white/10 py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.02] transition-colors px-4 -mx-4">
<div className="flex items-center gap-6">
<div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
<svg className="lucide lucide-bar-chart-2 w-6 h-6" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-1">Motion Design</h3>
<p className="text-xs text-gray-500 font-mono">20 Done</p>
</div>
</div>
<p className="text-gray-400 text-base font-light max-w-md">A personal portfolio is a curated collection of an individual's professional work, showcasing their skills.</p>
<a className="text-xs font-semibold text-white tracking-widest uppercase flex items-center gap-2 group-hover:text-accent transition-colors" href="#">
                        Read More <svg className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div className="flex justify-center md:justify-start">
<button className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white hover:bg-rose-600 transition-colors">
<svg className="lucide lucide-arrow-left w-5 h-5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
</div>
<div className="flex justify-end gap-4">
<div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-white hover:border-accent transition-colors cursor-pointer">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8 mt-12">

<div className="bg-card border border-white/5 rounded-2xl p-10 relative">
<svg className="lucide lucide-quote w-12 h-12 text-accent/20 absolute top-8 right-8 rotate-180" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<h3 className="text-2xl font-medium text-white mb-6 leading-normal tracking-tight">
                    "A Personal Portfolio Is A Curated Collection Of An Individual's Professional Work, Showcasing Their Skills, Experience."
                </h3>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-800"></div>
<div>
<p className="text-white font-medium">Cameron Williamson</p>
<p className="text-xs text-gray-500">UI/UX Designer</p>
</div>
</div>
<div className="mt-8 text-accent">
<svg className="lucide lucide-quote w-8 h-8 rotate-180 inline-block stroke-[3px]" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<svg className="lucide lucide-quote w-8 h-8 rotate-180 inline-block ml-1 stroke-[3px] opacity-50" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
</div>

<div className="bg-card border border-white/5 rounded-2xl p-10 relative opacity-60 hover:opacity-100 transition-opacity">
<svg className="lucide lucide-quote w-12 h-12 text-accent/20 absolute top-8 right-8 rotate-180" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<h3 className="text-2xl font-medium text-white mb-6 leading-normal tracking-tight">
                    "A Personal Portfolio Is A Curated Collection Of An Individual's Professional Work, Showcasing Their Skills, Experience."
                </h3>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-800"></div>
<div>
<p className="text-white font-medium">Sakib Hasan</p>
<p className="text-xs text-gray-500">Marketing CEO</p>
</div>
</div>
<div className="mt-8 text-accent">
<svg className="lucide lucide-quote w-8 h-8 rotate-180 inline-block stroke-[3px]" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<svg className="lucide lucide-quote w-8 h-8 rotate-180 inline-block ml-1 stroke-[3px] opacity-50" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-accent text-xs font-semibold tracking-widest uppercase mb-2 block">Blog And News</span>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-4">Elevating Personal Branding TheThrough Powerful Portfolios</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="bg-zinc-800 rounded-xl aspect-[4/3] overflow-hidden mb-6 relative">
<div className="absolute top-4 left-4 bg-black/80 backdrop-blur text-white text-xs px-3 py-1 rounded-full flex items-center gap-2 border border-white/10">
<svg className="lucide lucide-user w-3 h-3" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Mesbah
                            <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                            April 10
                        </div>
</div>
<h3 className="text-xl font-medium text-white mb-4 group-hover:text-accent transition-colors">Inspiring the World. One Project at a Time for the man</h3>
<div className="flex items-center text-xs font-bold text-white tracking-widest uppercase gap-1 group-hover:gap-2 transition-all">
                        Read More <svg className="lucide lucide-chevron-right w-3 h-3 text-accent" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-zinc-800 rounded-xl aspect-[4/3] overflow-hidden mb-6 relative">
<div className="absolute top-4 left-4 bg-black/80 backdrop-blur text-white text-xs px-3 py-1 rounded-full flex items-center gap-2 border border-white/10">
<svg className="lucide lucide-user w-3 h-3" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Mesbah
                            <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                            April 10
                        </div>
</div>
<h3 className="text-xl font-medium text-white mb-4 group-hover:text-accent transition-colors">Inspiring the World. One Project at a Time for the man</h3>
<div className="flex items-center text-xs font-bold text-white tracking-widest uppercase gap-1 group-hover:gap-2 transition-all">
                        Read More <svg className="lucide lucide-chevron-right w-3 h-3 text-accent" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-zinc-800 rounded-xl aspect-[4/3] overflow-hidden mb-6 relative">
<div className="absolute top-4 left-4 bg-black/80 backdrop-blur text-white text-xs px-3 py-1 rounded-full flex items-center gap-2 border border-white/10">
<svg className="lucide lucide-user w-3 h-3" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Mesbah
                            <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                            April 10
                        </div>
</div>
<h3 className="text-xl font-medium text-white mb-4 group-hover:text-accent transition-colors">Inspiring the World. One Project at a Time for the man</h3>
<div className="flex items-center text-xs font-bold text-white tracking-widest uppercase gap-1 group-hover:gap-2 transition-all">
                        Read More <svg className="lucide lucide-chevron-right w-3 h-3 text-accent" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black pt-24 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 mb-24">
<div className="space-y-8">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white">
<svg className="lucide lucide-aperture w-3 h-3" data-lucide="aperture" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>
</div>
<span className="text-lg font-medium text-white tracking-tight">Cvdaw</span>
</div>
<h2 className="text-5xl md:text-6xl font-medium text-white tracking-tight leading-tight">
                        Get Ready <span className="text-gray-500">To</span><br/>
                        Create Great
                    </h2>
<div className="relative max-w-md">
<input className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-accent transition-colors" placeholder="Email Address" type="email"/>
<button className="absolute right-0 top-4 text-white hover:text-accent transition-colors">
<svg className="lucide lucide-send w-5 h-5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</div>
</div>
<div className="grid grid-cols-2 gap-8 lg:pl-20">
<div>
<h4 className="text-white font-medium mb-6">Quick links</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-accent transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Service</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Blog Post</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Contact</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li className="flex items-center gap-2"><svg className="lucide lucide-mail w-4 h-4 text-accent" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg> nafiz125@gmail.com</li>
<li className="flex items-start gap-2"><svg className="lucide lucide-map-pin w-4 h-4 text-accent mt-1" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> 3891 Ranchview Dr. Richardson</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-phone w-4 h-4 text-accent" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> 01245789321, 012457895146</li>
</ul>
<div className="flex gap-4 mt-8">
<a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-colors" href="#"><svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-colors" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-colors" href="#"><svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-colors" href="#"><svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
<p>© themes-park 2024 | All Rights Reserved</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Trams &amp; Condition</a>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Contact Us</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
