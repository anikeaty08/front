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



// Initialize Lucide icons
lucide.createIcons();

// Add additional hover effects and interactions
document.addEventListener('DOMContentLoaded', function() {
  // Add subtle pulse animation to buttons
  const buttons = document.querySelectorAll('button, a');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.filter = 'brightness(1.1)';
    });
    button.addEventListener('mouseleave', function() {
      this.style.filter = 'brightness(1)';
    });
  });
  
  // Add interactive feedback to cards
  const cards = document.querySelectorAll('.bg-white\\/10');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
    });
    card.addEventListener('mouseleave', function() {
      this.style.boxShadow = '';
    });
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
      
<div className="spline-container fixed top-0 w-full h-screen -z-10 animate-hidden animate-fade-in-scale delay-100">
<iframe className="" frameborder="0" height="100%" src="https://my.spline.design/animatedbackgroundgradientforweb-jvJDeBWjMvShkjPKxPRUswLq" width="100%"></iframe>
</div>
<main className="max-w-7xl sm:px-6 lg:px-8 mt-16 mr-auto mb-16 ml-auto pr-4 pl-4">
<section className="relative rounded-[32px] overflow-hidden shadow-2xl bg-neutral-900 animate-hidden animate-fade-in-scale delay-300">

<nav className="absolute top-6 left-1/2 -translate-x-1/2 flex space-x-4 animate-hidden animate-fade-in-down delay-500">
<button className="flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur border text-sm transition bg-white/10 hover:bg-white/20 border-white/20 text-white animate-hidden animate-slide-in-blur delay-600">
<svg className="w-[16px] h-[16px]" data-lucide="layout" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
<span>Spaces</span>
</button>
<button className="flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur border text-sm transition bg-white/10 hover:bg-white/20 border-white/20 text-white animate-hidden animate-slide-in-blur delay-700">
<svg className="w-[16px] h-[16px]" data-lucide="cpu" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>Gadgets</span>
</button>
<button className="flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur border text-sm transition bg-white/10 hover:bg-white/20 border-white/20 text-white animate-hidden animate-slide-in-blur delay-800">
<svg className="w-[16px] h-[16px]" data-lucide="user" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span>Members</span>
</button>
<button className="flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur border text-sm transition bg-white/10 hover:bg-white/20 border-white/20 text-white animate-hidden animate-slide-in-blur delay-900">
<svg className="w-[16px] h-[16px]" data-lucide="settings" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Control</span>
</button>
</nav>

<div className="grid md:grid-cols-2 gap-8 lg:gap-12 md:pt-40 lg:px-16 sm:pb-[22rem] pt-28 pr-8 pb-72 pl-8 items-center">

<div className="text-white">
<h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold tracking-tight animate-hidden animate-fade-in-left delay-700">
          REIMAGINE LIVING<br />
          WITH <span className="font-bold text-cyan-400 tracking-tight animate-hidden animate-fade-in-left delay-900">AURA<br />HOME OS</span>
</h1>
<p className="max-w-md leading-relaxed text-base text-white/80 mt-6 animate-hidden animate-fade-in-left delay-1000">
          All your household tech—united in one elegant dashboard. Adjust lighting, manage climate and safeguard your space from anywhere.
        </p>
<div className="mt-8 flex flex-wrap items-center gap-4 animate-hidden animate-fade-in-up delay-1200">
<a className="inline-flex items-center space-x-2 rounded-full px-6 py-3 font-medium shadow transition bg-white text-neutral-900 hover:bg-neutral-200 transform hover:scale-105" href="#">
<svg className="w-[20px] h-[20px]" data-lucide="download" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<span>Get the app</span>
</a>
<a className="inline-flex items-center space-x-2 rounded-full border px-6 py-3 font-medium transition border-white/30 text-white hover:bg-white/10 transform hover:scale-105" href="#">
<svg className="w-[20px] h-[20px]" data-lucide="play-circle" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
<span className="">See it in action</span>
</a>
</div>
</div>

<div className="animate-hidden animate-fade-in-right delay-800">
<img alt="Futuristic Living Room" className="w-full h-auto object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300" src="https://cdn.midjourney.com/8a5b6a8e-81b4-451a-9353-210cf7c9a013/0_0.png?w=800&q=80" />
</div>
</div>

<div className="absolute inset-x-0 bottom-8 px-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">

<div className="animate-hidden animate-slide-in-blur delay-1100 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 text-white bg-white/10 border-white/20 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur" id="aura-emd3b0unw">
<div className="flex items-center mb-2 space-x-2">
<div className="w-8 h-8 flex bg-white/20 rounded-full items-center justify-center">
<svg className="w-[16px] h-[16px]" data-lucide="zap" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
</svg>
</div>
<h3 className="text-sm font-semibold tracking-tight">Power Draw</h3>
</div>
<div className="text-xs text-right mb-4">912 kWh</div>
<div className="flex h-24 space-x-2 items-end" style={{background: `linear-gradient(to top, rgba(34,211,238,0.3), transparent)`, borderRadius: `0.5rem`}}>
<div className="w-4 transition-all duration-500 hover:bg-white/50 bg-white/30 rounded-t-full" style={{height: `30%`}}></div>
<div className="w-4 rounded-t-full bg-white/40 transition-all duration-500 hover:bg-white/60" style={{height: `45%`}}></div>
<div className="w-4 rounded-t-full bg-white/60 transition-all duration-500 hover:bg-white/80" style={{height: `60%`}}></div>
<div className="w-4 rounded-t-full bg-white/80 transition-all duration-500 hover:bg-white" style={{height: `78%`}}></div>
<div className="w-4 rounded-t-full bg-white transition-all duration-500" style={{height: `52%`}}></div>
</div>
<div className="flex justify-between text-[10px] mt-2 opacity-70">
<span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span>
</div>
</div>

<div className="flex flex-col animate-hidden animate-slide-in-blur delay-1200 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 text-white bg-white/10 border-white/20 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur justify-start">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 flex bg-white/20 rounded-full items-center justify-center">
<svg className="w-[20px] h-[20px]" data-lucide="door-closed" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"></path><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"></path><path d="M12 4v6"></path><path d="M2 18h20"></path></svg>
</div>
<div className="">
<div className="text-sm font-semibold">Entry Hub</div>
<div className="text-xs text-white/70">Locked</div>
</div>
</div>
<div className="mt-4 border-t border-white/20 pt-3 text-xs text-white/70 font-medium leading-tight tracking-tight space-y-2">
<div className="flex items-center space-x-2">
<i className="w-4 h-4" data-lucide="info" strokeWidth="2" style={{color: `white`}}></i>
<span className="">Status: Secure</span>
</div>
<div className="flex items-center space-x-2">
<i className="w-4 h-4" data-lucide="calendar" strokeWidth="2" style={{color: `white`}}></i>
<span className="">Last accessed: Today, 9:45 AM</span>
</div>
<div className="flex items-center space-x-2">
<i className="w-4 h-4" data-lucide="user-check" strokeWidth="2" style={{color: `white`}}></i>
<span className="">Authorized users: 3</span>
</div>
</div>
</div>

<div className="flex flex-col animate-hidden animate-slide-in-blur delay-1300 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 text-white bg-white/10 border-white/20 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur justify-start">
<div className="flex justify-between items-start">
<div className="flex space-x-3 items-center">
<div className="w-10 h-10 flex bg-white/20 rounded-full items-center justify-center">
<svg className="w-[20px] h-[20px]" data-lucide="wind" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
</div>
<div className="">
<div className="text-sm font-semibold">Climate Flow</div>
<div className="text-xs text-white/70">Air Quality: Good</div>
</div>
</div>

<label className="relative inline-flex items-center cursor-pointer">
<input checked className="sr-only peer" type="checkbox" />
<span className="w-10 h-5 rounded-full peer peer-checked:bg-indigo-500 transition-all duration-300 bg-white/30"></span>
<span className="absolute left-1 top-1 w-3 h-3 rounded-full peer-checked:translate-x-5 transition-all duration-300 bg-white"></span>
</label>
</div>
<div className="mt-4 border-t border-white/20 pt-3 text-xs text-white/70 font-medium leading-tight tracking-tight space-y-1">
<div className="">Temperature: 22°C</div>
<div className="">Humidity: 50%</div>
<div className="">CO₂ Level: 400 ppm</div>
<div className="">Fan Speed: Medium</div>
</div>
</div>

<div className="animate-hidden animate-slide-in-blur delay-1400 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 text-white bg-white/10 border-white/20 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur">
<div className="flex space-x-3 items-center">
<svg className="w-[32px] h-[32px]" data-lucide="sun" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `32px`, height: `32px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path className="" d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path className="" d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path className="" d="m19.07 4.93-1.41 1.41"></path></svg>
<div className="">
<div className="text-3xl leading-none font-semibold tracking-tight">22<span className="text-xl align-top">°C</span></div>
<div className="text-xs text-white/70">Sunny</div>
</div>
</div>
<div className="mt-4 border-t border-white/20 pt-3 text-xs text-white/70 font-medium leading-tight tracking-tight">
<div className="">Humidity: 45%</div>
<div className="">Wind: 12 km/h NW</div>
<div className="">UV Index: Moderate</div>
</div>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
