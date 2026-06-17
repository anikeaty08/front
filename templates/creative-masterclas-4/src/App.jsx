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

        // Simple logic for the slider
        const container = document.querySelector('.cursor-ew-resize');
        if(container) {
            const overlay = document.getElementById('slider-overlay');
            const handle = document.getElementById('slider-handle');
            const img = overlay.querySelector('img');

            container.addEventListener('mousemove', (e) => {
                const rect = container.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const percentage = (x / rect.width) * 100;
                
                if(percentage >= 0 && percentage <= 100) {
                    overlay.style.width = `${percentage}%`;
                    handle.style.left = `${percentage}%`;
                    // Keep image fixed relative to container to simulate reveal
                    img.style.width = `${(100/percentage) * 100}%`; 
                    // Wait, better css approach for img:
                    img.style.width = `${rect.width}px`;
                    img.style.transform = `translateX(0)`; 
                }
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-kolder-black/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-xl font-bold tracking-tighter uppercase z-50 relative" href="#">
                Kolder<span className="text-neutral-500">Creative</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight">
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Masterclass</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Student Work</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">About</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Log In</a>
<a className="bg-white text-black px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-colors font-semibold" href="#">
                    Join Now
                </a>
</div>

<button className="md:hidden text-white z-50">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

<div className="absolute inset-0 z-0">
<img alt="Background" className="w-full h-full object-cover opacity-40 scale-105" src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&amp;w=2942&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-kolder-black/20 via-kolder-black/60 to-kolder-black"></div>
<div className="contrast-150 opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] absolute top-0 right-0 bottom-0 left-0 brightness-100"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in-up">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-medium tracking-wide text-neutral-300 uppercase">New Modules Added</span>
</div>
<h1 className="md:text-8xl lg:text-9xl uppercase leading-[0.9] text-5xl font-bold text-white tracking-tightest mix-blend-difference mb-8">
                Master The Art<br className=""/>
<span className="text-neutral-500">Of Storytelling</span>
</h1>
<p className="max-w-xl text-neutral-400 text-sm md:text-lg font-light tracking-tight mb-10 leading-relaxed">
                The ultimate experience for creators. Learn the creative process of Sam Kolder, from filming and editing to sound design and color grading.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-semibold tracking-tight hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 group" href="#">
                    Start Learning
                    <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="w-full sm:w-auto px-8 py-4 border border-white/20 rounded-full font-medium tracking-tight hover:bg-white/5 transition-colors flex items-center justify-center gap-2" href="#">
<svg className="lucide lucide-play-circle w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                    Watch Trailer
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500">
<span className="text-[10px] uppercase tracking-widest">Scroll</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-neutral-500 to-transparent"></div>
</div>
</header>

<section className="py-12 border-y border-white/5 bg-neutral-900/20">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold tracking-tight">SONY</span>
<span className="text-xl font-bold tracking-tight">ADOBE</span>
<span className="text-xl font-bold tracking-tight">DJI</span>
<span className="text-xl font-bold tracking-tight">CANON</span>
<span className="text-xl font-bold tracking-tight">INSTAGRAM</span>
<span className="text-xl font-bold tracking-tight">RED</span>
</div>
</div>
</section>

<section className="py-32 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1 relative">
<div className="aspect-[4/5] rounded-2xl overflow-hidden relative group">
<img alt="Editing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?q=80&amp;w=2322&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-6 right-6 glass-panel px-4 py-2 rounded-lg">
<div className="text-xs text-neutral-400 uppercase tracking-wider mb-1">Timeline</div>
<div className="flex gap-1">
<div className="w-1 h-3 bg-blue-500 rounded-sm"></div>
<div className="w-4 h-3 bg-purple-500 rounded-sm"></div>
<div className="w-2 h-3 bg-green-500 rounded-sm"></div>
<div className="w-6 h-3 bg-neutral-700 rounded-sm"></div>
</div>
</div>
<div className="absolute bottom-6 left-6 right-6 glass-panel p-6 rounded-xl border-l-4 border-white">
<h3 className="text-lg font-semibold mb-1">Advanced Workflow</h3>
<p className="text-xs text-neutral-400">Learn how to organize and execute complex edits with speed.</p>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-6">The Curriculum</h2>
<h3 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-8 leading-[0.95]">
                        NOT JUST A COURSE.<br/>
<span className="text-neutral-600">A CAREER SHIFT.</span>
</h3>
<p className="text-neutral-400 text-lg font-light leading-relaxed mb-10">
                        Over 100+ video lessons taking you through the entire creative process. From concept development to the final export. This is the blueprint I wish I had when I started.
                    </p>
<div className="space-y-6">
<div className="group cursor-pointer border-b border-white/10 pb-6 hover:border-white/30 transition-colors">
<div className="flex justify-between items-center mb-2">
<h4 className="text-xl font-medium tracking-tight">01. Equipment &amp; Setup</h4>
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-neutral-600 group-hover:text-white transition-colors" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<p className="text-sm text-neutral-500 group-hover:text-neutral-400 transition-colors">Understanding cameras, drones, lenses, and building the perfect rig.</p>
</div>
<div className="group cursor-pointer border-b border-white/10 pb-6 hover:border-white/30 transition-colors">
<div className="flex justify-between items-center mb-2">
<h4 className="text-xl font-medium tracking-tight">02. Advanced Editing</h4>
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-neutral-600 group-hover:text-white transition-colors" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<p className="text-sm text-neutral-500 group-hover:text-neutral-400 transition-colors">Premiere Pro mastery, keyframing, masking, and seamless transitions.</p>
</div>
<div className="group cursor-pointer border-b border-white/10 pb-6 hover:border-white/30 transition-colors">
<div className="flex justify-between items-center mb-2">
<h4 className="text-xl font-medium tracking-tight">03. Sound Design</h4>
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-neutral-600 group-hover:text-white transition-colors" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<p className="text-sm text-neutral-500 group-hover:text-neutral-400 transition-colors">Creating immersive audio environments that drive emotion.</p>
</div>
<div className="group cursor-pointer border-b border-white/10 pb-6 hover:border-white/30 transition-colors">
<div className="flex justify-between items-center mb-2">
<h4 className="text-xl font-medium tracking-tight">04. Color Grading</h4>
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-neutral-600 group-hover:text-white transition-colors" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<p className="text-sm text-neutral-500 group-hover:text-neutral-400 transition-colors">Mastering Davinci Resolve, log footage, and creating your own LUTs.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-900/10">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-6">EVERYTHING YOU NEED</h2>
<p className="text-neutral-400 font-light">Tools, assets, and community access to accelerate your growth.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden bg-neutral-900 group border border-white/5">
<img alt="Community" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-10">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 text-black">
<svg className="lucide lucide-users w-6 h-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-2xl font-semibold mb-2 tracking-tight">Global Community</h3>
<p className="text-neutral-400 max-w-md font-light">Join 50,000+ creators from around the world. Share work, get feedback, and collaborate.</p>
</div>
</div>

<div className="md:col-span-1 relative rounded-3xl overflow-hidden bg-neutral-800 border border-white/5 p-8 group hover:bg-neutral-800/80 transition-colors">
<div className="flex justify-between items-start mb-8">
<div className="w-10 h-10 rounded-full bg-neutral-700/50 flex items-center justify-center text-white">
<svg className="lucide lucide-download w-5 h-5" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
<span className="text-xs font-bold bg-green-500/10 text-green-500 px-3 py-1 rounded-full border border-green-500/20">INCLUDED</span>
</div>
<h3 className="text-xl font-semibold mb-2 tracking-tight">Custom Assets</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">Access my personal library of LUTs, sound effects, overlays, and project files.</p>
</div>

<div className="md:col-span-1 relative rounded-3xl overflow-hidden bg-white text-black p-8 group border border-white/10">
<div className="absolute top-0 right-0 w-32 h-32 bg-neutral-200 rounded-full blur-3xl -mr-16 -mt-16 opacity-50"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-black mb-8">
<svg className="lucide lucide-award w-5 h-5" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<h3 className="text-xl font-bold mb-2 tracking-tight">Certification</h3>
<p className="text-sm text-neutral-600 font-medium leading-relaxed">Earn a certificate upon completion to showcase your expertise to clients.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-12">Transformation</h2>
<div className="relative max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden border border-white/10 select-none group cursor-ew-resize">

<div className="absolute inset-0">
<img alt="Before" className="w-full h-full object-cover grayscale contrast-75 brightness-75" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&amp;w=2948&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-6 left-6 bg-black/50 backdrop-blur px-3 py-1 rounded text-xs font-medium">RAW</div>
</div>

<div className="absolute inset-0 w-[50%] border-r border-white/50 bg-black overflow-hidden" id="slider-overlay" style={{width: '72.9353%'}}>
<img alt="After" className="absolute w-[200%] max-w-none h-full object-cover" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&amp;w=2948&amp;auto=format&amp;fit=crop" style={{left: '0px', width: '896px', transform: 'translateX(0px)'}}/>
<div className="absolute top-6 right-6 bg-white/90 text-black px-3 py-1 rounded text-xs font-bold">GRADED</div>
</div>

<div className="absolute inset-y-0 left-1/2 w-1 bg-white cursor-ew-resize flex items-center justify-center" id="slider-handle" style={{left: '72.9353%'}}>
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.5)]">
<svg className="lucide lucide-chevrons-left-right w-4 h-4 text-black" data-lucide="chevrons-left-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 7-5 5 5 5"></path><path d="m15 7 5 5-5 5"></path></svg>
</div>
</div>
</div>
<p className="mt-6 text-neutral-500 text-sm">Drag to see the difference color grading makes.</p>
</div>
</section>

<section className="py-32 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-5xl md:text-7xl font-bold tracking-tightest uppercase mb-8">Ready to createyour masterpiece?</h2>
<p className="text-lg text-neutral-400 mb-12 max-w-xl mx-auto">Join the new wave of filmmakers. Lifetime access to the course, future updates, and community.</p>
<div className="flex flex-col items-center gap-6">
<a className="px-10 py-5 bg-white text-black rounded-full text-lg font-bold tracking-tight hover:scale-[1.02] transition-transform shadow-[0_0_40px_rgba(255,255,255,0.2)]" href="#">
                    Get Full Access — $597
                </a>
<div className="flex items-center gap-2 text-sm text-neutral-500">
<svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">One-time payment, lifetime access</span>
</div>
</div>
<div className="mt-20 flex justify-center gap-8 grayscale opacity-30">
<svg className="lucide lucide-credit-card w-8 h-8" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
<div className="font-bold text-2xl tracking-tighter">PAYPAL</div>
<div className="font-bold text-2xl tracking-tighter">STRIPE</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-neutral-950 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
<div className="col-span-2 md:col-span-1">
<a className="text-xl font-bold tracking-tighter uppercase mb-6 block" href="#">Kolder</a>
<p className="text-neutral-500 text-sm leading-relaxed">Empowering the next generation of visual storytellers.</p>
</div>
<div className="">
<h4 className="text-white font-semibold mb-4">Platform</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li className=""><a className="hover:text-white transition-colors" href="#">Browse All Courses</a></li>
<li><a className="hover:text-white transition-colors" href="#">Student Gallery</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Company</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">About Sam</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Connect</h4>
<div className="flex gap-4 text-neutral-400">
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-youtube w-5 h-5" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a>
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-xs text-neutral-600">
<p>© 2024 Kolder Creative. All rights reserved.</p>
<div className="mt-4 md:mt-0">Designed with Precision</div>
</div>
</div>
</footer>


    </>
  );
}
