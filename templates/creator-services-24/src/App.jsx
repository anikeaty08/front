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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white text-lg font-medium tracking-tighter hover:opacity-80 transition-opacity flex items-center gap-2" href="#">
<iconify-icon className="text-indigo-400" height="20" icon="solar:creativity-linear" strokeWidth="1.5" width="20"></iconify-icon>
                CREATORAREA.COM
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#connect">Contact</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium px-4 py-2 rounded-full transition-all hover:scale-105" href="tel:9036742884">
<iconify-icon height="16" icon="solar:phone-calling-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>Call Now</span>
</a>

<button className="md:hidden text-white p-2">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-fuchsia-500/5 rounded-full blur-3xl -z-10"></div>
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Available for New Projects
            </div>
<h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter text-white mb-6 leading-[1.1]">
                Crafting digital <br/>
<span className="text-gradient-brand">masterpieces</span> for you.
            </h1>
<p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Professional video editing, photo retouching, and premium freelance content services. We transform raw ideas into stunning visual realities.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-black px-8 py-3.5 rounded-full font-medium text-sm tracking-tight hover:bg-slate-200 transition-colors shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]" href="tel:9036742884">
<iconify-icon height="18" icon="solar:phone-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    9036742884
                </a>
<a className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white px-8 py-3.5 rounded-full font-medium text-sm tracking-tight hover:bg-white/10 transition-all group" href="mailto:pradeepbadiger000@gmail.com">
<span>Email Us</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="py-24 px-6 relative" id="services">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-4">World-class services</h2>
<p className="text-slate-400 font-light">Comprehensive content solutions tailored for creators and businesses.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon height="28" icon="solar:clapperboard-play-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Video Editing</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                            Cinematic cuts, color grading, sound design, and motion graphics. We turn footage into compelling stories for YouTube, Reels, and Commercials.
                        </p>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-fuchsia-500/30 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon height="28" icon="solar:camera-minimalistic-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Photo Editing</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                            High-end retouching, manipulation, color correction, and background removal. Perfect for e-commerce, portfolios, and social media.
                        </p>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon height="28" icon="solar:laptop-3-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Freelance Services</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                            Need a custom project? From graphic design to content strategy, we offer flexible freelance solutions to meet your specific deadlines.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5 bg-white/[0.01]" id="process">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-6">Why creators choose <br/> <span className="text-slate-500">CreatorArea.</span></h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="mt-1">
<iconify-icon className="text-indigo-400" height="24" icon="solar:bolt-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1 tracking-tight">Fast Turnaround</h4>
<p className="text-sm text-slate-400 font-light">We respect your time. Get your edited content back quickly without compromising quality.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1">
<iconify-icon className="text-fuchsia-400" height="24" icon="solar:star-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1 tracking-tight">Premium Quality</h4>
<p className="text-sm text-slate-400 font-light">Attention to detail is our signature. Every pixel and frame is polished to perfection.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1">
<iconify-icon className="text-blue-400" height="24" icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1 tracking-tight">Direct Communication</h4>
<p className="text-sm text-slate-400 font-light">No middlemen. Connect directly via WhatsApp or Phone for instant updates.</p>
</div>
</div>
</div>
</div>
<div className="relative h-full min-h-[400px] w-full bg-gradient-to-tr from-slate-900 to-slate-800 rounded-3xl border border-white/5 p-8 flex flex-col justify-between overflow-hidden">

<div className="absolute top-0 right-0 p-8 opacity-20">
<iconify-icon height="120" icon="solar:palette-linear" strokeWidth="1" width="120"></iconify-icon>
</div>
<div className="relative z-10 space-y-4">
<div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl w-3/4">
<div className="h-2 w-1/3 bg-slate-600 rounded mb-2"></div>
<div className="h-2 w-full bg-slate-700 rounded opacity-50"></div>
</div>
<div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl w-3/4 ml-auto">
<div className="h-2 w-1/4 bg-indigo-500 rounded mb-2"></div>
<div className="h-2 w-2/3 bg-slate-700 rounded opacity-50"></div>
</div>
<div className="bg-indigo-500/10 backdrop-blur-md border border-indigo-500/20 p-4 rounded-xl w-3/4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white">
<iconify-icon height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<div className="text-xs text-indigo-200">Project Completed Successfully</div>
</div>
</div>
</div>
<div className="relative z-10 mt-8">
<p className="text-2xl text-white font-medium tracking-tighter">"CreatorArea transformed my raw footage into a viral masterpiece."</p>
<p className="mt-2 text-sm text-slate-500">Satisfied Client</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="connect">
<div className="max-w-4xl mx-auto">
<div className="relative rounded-[2.5rem] bg-gradient-to-b from-indigo-900/20 to-black border border-indigo-500/20 overflow-hidden px-6 py-16 md:px-16 md:py-20 text-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-indigo-500/10 blur-[100px] -z-10"></div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-6">Ready to start?</h2>
<p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto font-light">
                    Reach out directly. No forms, no waiting. <br/>
                    Connect with Pradeep instantly.
                </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
<a className="group flex items-center justify-between p-4 bg-white rounded-2xl hover:bg-slate-200 transition-colors" href="tel:9036742884">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
<iconify-icon height="20" icon="solar:phone-calling-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="text-left">
<div className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">Mobile</div>
<div className="text-black font-semibold tracking-tight text-sm">9036742884</div>
</div>
</div>
<iconify-icon className="text-black opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" height="20" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</a>
<a className="group flex items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-2xl hover:border-slate-600 transition-colors" href="mailto:pradeepbadiger000@gmail.com">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center">
<iconify-icon height="20" icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="text-left">
<div className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">Email</div>
<div className="text-white font-medium tracking-tight text-sm truncate max-w-[120px]">pradeepbadiger000</div>
</div>
</div>
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" height="20" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 px-6 bg-black">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-600" height="20" icon="solar:creativity-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-slate-500 font-medium tracking-tight text-sm">CREATORAREA.COM</span>
</div>
<div className="text-xs text-slate-600 font-light">
                © 2024 CreatorArea. All rights reserved.
            </div>
<div className="flex gap-4">
<a className="text-slate-600 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-600 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:videocamera-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
