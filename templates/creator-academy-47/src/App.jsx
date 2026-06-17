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



                    // Encapsulated logic for Newsletter Card
                


        // Icon initialization
        lucide.createIcons();

        // Global handler for buttons (though individual card logic handles specifics)
        function startChallenge(type) {
            console.log(`User initiated challenge: ${type}`);
            // Simulate button loading state
            const btns = document.querySelectorAll('button');
            btns.forEach(btn => {
                const originalText = btn.innerHTML;
                btn.onclick = (e) => {
                    const button = e.currentTarget;
                    button.classList.add('opacity-75', 'cursor-wait');
                    setTimeout(() => {
                        button.classList.remove('opacity-75', 'cursor-wait');
                        alert(`Starting ${type.toUpperCase()} module environment...`);
                    }, 600);
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
      

<header className="sticky z-50 bg-black/50 w-full border-white/5 border-b top-0 backdrop-blur-md">
<div className="flex max-w-7xl mr-auto ml-auto pt-5 pr-6 pb-5 pl-6 items-center justify-between">

<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-white text-black rounded flex items-center justify-center">
<svg className="lucide lucide-zap w-5 h-5 fill-current" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight text-white uppercase">Alex Rivers</span>
</div>

<div className="flex items-center gap-6">

<a className="group flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-layout-dashboard w-4 h-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span className="">Dashboard</span>
</a>

<a className="group flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
<span className="">Join Whatsapp Channel</span>
</a>

<a className="group flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-life-buoy w-4 h-4 group-hover:animate-spin-slow" data-lucide="life-buoy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path><circle cx="12" cy="12" r="4"></circle></svg>
<span className="">Support Center</span>
</a>
</div>
</div>
</header>
<main className="flex-grow md:py-24 w-full max-w-6xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">

<div className="text-center mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 mb-8">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="uppercase text-xs font-medium text-zinc-400 tracking-widest">Welcome to Project Enfield!</span>
</div>
<h1 className="md:text-6xl leading-[1.1] text-4xl font-semibold text-white tracking-tight mb-4">Turn learning into experience<br className=""/> <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-600">through Project Enfield!</span></h1>
</div>

<div className="flex flex-col">



<div className="shine-effect group overflow-hidden md:grid md:grid-cols-12 hover:border-zinc-700 transition-colors duration-300 cursor-pointer bg-[#0a0a0a] border-white/10 border rounded-2xl relative" id="card-news" onclick="window.location.href='https://project-enfield.udyomi.com/projects/project-enfield/lessons/featured-video-project-enfield/'" role="button">

<div className="md:col-span-5 md:h-auto overflow-hidden md:border-b-0 md:border-r bg-zinc-900 h-64 z-10 border-white/5 border-b relative">
<img alt="Newsletter" className="group-hover:scale-105 transition-transform duration-700 z-10 opacity-100 mix-blend-overlay w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aee402cb-a7e5-4509-996c-59be8a3d8ce8_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-amber-900/20 to-transparent"></div>
<div className="flex flex-col z-10 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 items-start justify-end">
<div className="mt-4 inline-flex items-center gap-2 bg-red-600 px-3 py-1 rounded-md">
<span className="text-xs font-semibold text-white uppercase tracking-wide">Live Challenge</span>
</div>
</div>
</div>

<div className="md:col-span-7 md:p-12 flex flex-col pt-8 pr-8 pb-8 pl-8 justify-center">
<div className="flex items-start gap-5 mb-6">
<div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-lg shadow-amber-900/20">
<svg className="lucide lucide-mail w-6 h-6 text-black fill-black/10" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div className="">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-2">Project Enfield</h2>
<p className="leading-relaxed text-lg text-zinc-400">You’re now one step closer to building real skills and completing a full live project. We’re excited to have you on this journey.</p>
</div>
</div>
<div className="pl-[4.25rem]">
<button className="group/btn inline-flex gap-2 hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium text-white border-zinc-700 border rounded-full pt-3 pr-6 pb-3 pl-6 gap-x-2 gap-y-2 items-center" onclick="startChallenge('news')">
<span className="">Continue Learning</span>
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover/btn:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>


</div>
</div>
</main>

<footer className="w-full border-t border-white/10 bg-[#050505] pt-16 pb-12">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">

<div className="max-w-md">
<div className="flex items-center gap-3 mb-6">
<div className="w-6 h-6 bg-white text-black rounded flex items-center justify-center">
<svg className="lucide lucide-zap w-3 h-3 fill-current" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-base font-semibold tracking-tight text-white uppercase">Alex Rivers</span>
</div>
<p className="text-zinc-500 text-lg leading-relaxed">
                        Empowering the next generation of digital entrepreneurs with real skills, no fluff, and actionable frameworks. Build wealth on your own terms.
                    </p>
</div>

<div className="flex flex-col gap-4">
<h4 className="text-white font-semibold text-lg">Resources</h4>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Technical Support</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Student Login</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Privacy Policy</a>
</div>
</div>

<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-zinc-600 text-sm">© 2024 Alex Rivers School. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><svg className="lucide lucide-youtube w-5 h-5" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
