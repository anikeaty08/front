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



function toggleFaq(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector('svg');
  
  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    icon.style.transform = 'rotate(180deg)';
  } else {
    content.classList.add('hidden');
    icon.style.transform = 'rotate(0deg)';
  }
}



    lucide.createIcons({
      strokeWidth: 1.5
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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/322719de-f763-429e-9cc6-d2f032a9f8ec_3840w.jpg")'}}></div>

<div className="fixed inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '24px 24px'}}></div>

<div className="relative z-10 min-h-screen">

<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
<div className="max-w-4xl mx-auto border border-white/10 rounded-full px-6 py-3" style={{background: 'rgba(10, 11, 20, 0.9)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)'}}>
<div className="flex items-center justify-between">
<div className="flex items-center">
<span className="text-lg font-semibold tracking-tight text-white font-sans">Astrolux</span>
</div>
<ul className="hidden md:flex items-center gap-1 text-sm font-medium text-white/60">
<li className=""><a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5 font-sans" href="#">Missions</a></li>
<li className=""><a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5 font-sans" href="#">Technology</a></li>
<li className=""><a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5 font-sans" href="#">Training</a></li>
<li><a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5 font-sans" href="#">Travelers</a></li>
<li><a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5 font-sans" href="#">Support</a></li>
</ul>
<div className="flex items-center gap-2">
<button aria-label="Account" className="hover:bg-white/5 p-2 rounded-full transition-all duration-300 border border-white/5" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<svg className="w-4 h-4 stroke-[1.5] text-white/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</button>
<button aria-label="Bookings" className="relative hover:bg-white/5 p-2 rounded-full transition-all duration-300 border border-white/5" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<svg className="w-4 h-4 stroke-[1.5] text-white/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>
<span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center font-medium font-sans">1</span>
</button>
</div>
</div>
</div>
</nav>

<section className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

<div className="order-2 lg:order-1">
<div className="p-10 lg:p-12 shadow-2xl border border-white/10 rounded-3xl" style={{background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)'}}>

<div className="flex items-center gap-3 mb-8">
<div className="flex items-center gap-0.5">
<svg className="stroke-[1.5] fill-amber-400 w-[14px] h-[14px]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(251, 191, 36)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-3.5 h-3.5 stroke-[1.5] text-amber-400 fill-amber-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-3.5 h-3.5 stroke-[1.5] text-amber-400 fill-amber-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-3.5 h-3.5 stroke-[1.5] text-amber-400 fill-amber-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="w-3.5 h-3.5 stroke-[1.5] text-amber-400 fill-amber-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-xs font-medium text-white/50 font-sans">4.9 • 2,847 space travelers</span>
</div>

<h1 className="text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight mb-8 font-manrope font-medium">
              Experience the<br/>
<span className="text-blue-400 font-manrope font-medium">cosmos</span> firsthand.
            </h1>

<p className="text-lg text-white/60 leading-relaxed mb-12 font-sans">
              Embark on the ultimate adventure with our revolutionary space tourism flights. Safe, sustainable, and certified by leading space agencies worldwide.
            </p>

<div className="flex flex-col sm:flex-row gap-4 mb-16">
<button className="inline-flex items-center justify-center px-8 py-4 rounded-xl hover:bg-blue-500/10 text-white text-sm font-medium border border-blue-500/20 transition-all duration-300 hover:border-blue-500/30" style={{background: 'rgba(59, 130, 246, 0.08)'}}>
<span className="font-sans">Book Your Flight</span>
<svg className="w-4 h-4 stroke-[1.5] ml-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
</button>
<button className="inline-flex items-center justify-center px-8 py-4 rounded-xl hover:bg-white/5 text-white/80 text-sm font-medium border border-white/10 transition-all duration-300 hover:border-white/20" style={{background: 'rgba(255, 255, 255, 0.03)'}}>
<svg className="w-4 h-4 stroke-[1.5] mr-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
<span className="font-sans">Watch Launch</span>
</button>
</div>

<div className="grid grid-cols-3 gap-8">
<div className="text-center">
<div className="w-10 h-10 flex border-white/10 border rounded-xl mr-auto mb-3 ml-auto items-center justify-center" style={{background: 'rgba(255, 255, 255, 0.03)'}}>
<svg className="stroke-[1.5] w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m16 12-4-4-4 4"></path><path d="M12 16V8"></path></svg>
</div>
<div className="text-xs font-medium text-white/70 font-sans">Zero Gravity</div>
</div>
<div className="text-center">
<div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 border border-white/10" style={{background: 'rgba(255, 255, 255, 0.03)'}}>
<svg className="stroke-[1.5] w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 13a3 3 0 1 0-6 0"></path><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path><circle cx="12" cy="8" r="2"></circle></svg>
</div>
<div className="text-xs font-medium text-white/70 font-sans">Full Training</div>
</div>
<div className="text-center">
<div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 border border-white/10" style={{background: 'rgba(255, 255, 255, 0.03)'}}>
<svg className="stroke-[1.5] w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="text-xs font-medium text-white/70 font-sans">NASA Certified</div>
</div>
</div>
</div>
</div>

<div className="relative order-1 lg:order-2">
<div className="overflow-hidden border border-white/10 rounded-3xl shadow-2xl" style={{background: 'rgba(255, 255, 255, 0.03)'}}>

<div className="absolute top-8 left-8 flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium border border-white/20 z-10" style={{background: 'rgba(59, 130, 246, 0.15)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)'}}>
<div className="w-2 h-2 bg-blue-400 rounded-full"></div>
<span className="text-white font-sans">Next Launch: 2024</span>
</div>

<img alt="Astrolux Space Capsule" className="w-full h-[500px] lg:h-[650px] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a5708db3-4d0a-491c-a445-05df909c54a5_1600w.jpg" style={{}}/>

<div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-6">
<div className="border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6" style={{background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)'}}>
<div className="text-2xl text-white font-manrope font-medium">2.8K+</div>
<div className="text-sm text-white/60 mt-1 font-sans">Space Travelers</div>
</div>
<div className="rounded-2xl p-6 border border-white/10" style={{background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)'}}>
<div className="text-2xl text-white font-manrope font-medium">100%</div>
<div className="text-sm text-white/60 mt-1 font-sans">Safe Return Rate</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl lg:px-8 mr-auto ml-auto pr-6 pl-6 space-y-20 pb-24">
<div className="lg:p-16 border-white/10 border rounded-3xl pt-12 pr-12 pb-12 pl-12" style={{background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)'}}>
<div className="text-center mb-12">
<p className="uppercase text-sm font-medium text-white/40 tracking-wide mb-3 font-sans">Trusted Partners</p>
<h3 className="text-2xl text-white tracking-tight mb-4 font-manrope font-medium">Certified by Leading Space Agencies</h3>
<p className="text-base text-white/60 max-w-2xl mx-auto font-sans">Our space tourism program is officially certified and backed by the world's most trusted aerospace organizations, ensuring the highest safety standards for every mission.</p>
</div>
<div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
<div className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/10" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<span className="text-lg font-semibold text-white/60 hover:text-white/80 transition-colors duration-300 tracking-tight mb-2 font-sans">NASA</span>
<p className="text-xs text-white/40 font-sans">Safety Certification</p>
</div>
<div className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/10" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<span className="text-lg font-semibold text-white/60 hover:text-white/80 transition-colors duration-300 tracking-tight mb-2 font-sans">SPACEX</span>
<p className="text-xs text-white/40 font-sans">Launch Technology</p>
</div>
<div className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/10" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<span className="text-lg font-semibold text-white/60 hover:text-white/80 transition-colors duration-300 tracking-tight mb-2 font-sans">ESA</span>
<p className="text-xs text-white/40 font-sans">Mission Planning</p>
</div>
<div className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/10" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<span className="text-lg font-semibold text-white/60 hover:text-white/80 transition-colors duration-300 tracking-tight mb-2 font-sans">BOEING</span>
<p className="text-xs text-white/40 font-sans">Spacecraft Design</p>
</div>
<div className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/10" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<span className="text-lg font-semibold text-white/60 hover:text-white/80 transition-colors duration-300 tracking-tight mb-2 font-sans">BLUE ORIGIN</span>
<p className="text-xs text-white/40 font-sans">Propulsion Systems</p>
</div>
<div className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/10" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<span className="text-lg font-semibold text-white/60 hover:text-white/80 transition-colors duration-300 tracking-tight mb-2 font-sans">VIRGIN</span>
<p className="text-xs text-white/40 font-sans">Training Programs</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="text-center">
<div className="text-3xl text-white mb-2 font-manrope font-medium">99.8%</div>
<p className="text-sm text-white/60 font-sans">Mission Success Rate</p>
</div>
<div className="text-center">
<div className="text-3xl text-white mb-2 font-manrope font-medium">15+</div>
<p className="text-sm text-white/60 font-sans">Years Partnership</p>
</div>
<div className="text-center">
<div className="text-3xl text-white mb-2 font-manrope font-medium">500+</div>
<p className="text-sm text-white/60 font-sans">Joint Missions</p>
</div>
</div>
</div><title className="font-sans">Pricing Section</title><section className="max-w-7xl lg:px-8 mr-auto ml-auto pr-6 pl-6">
<div className="lg:p-16 border-white/10 border rounded-3xl pt-12 pr-12 pb-12 pl-12" style={{background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)'}}>
<div className="text-center mb-16">
<p className="uppercase text-sm font-medium text-white/40 tracking-wide mb-3 font-sans">Mission Packages</p>
<h3 className="text-3xl lg:text-4xl text-white tracking-tight mb-6 font-manrope font-medium">Choose Your Space Journey</h3>
<p className="text-lg text-white/60 max-w-3xl mx-auto font-sans">From suborbital flights to extended orbital missions, select the perfect adventure that matches your dreams and budget. All packages include comprehensive training and safety certification.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="relative rounded-2xl border border-white/10 p-8" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<div className="mb-8">
<h4 className="text-xl font-semibold text-white mb-2 font-sans">Suborbital Flight</h4>
<p className="text-sm text-white/60 mb-6 font-sans">Experience weightlessness and see Earth's curvature in this 15-minute journey to the edge of space.</p>
<div className="flex items-baseline gap-2">
<span className="text-4xl text-white font-manrope font-medium">$450K</span>
<span className="text-sm text-white/40 font-sans">per person</span>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<svg className="text-blue-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-white/70 font-sans">100km altitude flight</span>
</li>
<li className="flex items-center gap-3">
<svg className="text-blue-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-white/70 font-sans">4 minutes of weightlessness</span>
</li>
<li className="flex items-center gap-3">
<svg className="text-blue-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-white/70 font-sans">3-day training program</span>
</li>
<li className="flex items-center gap-3">
<svg className="text-blue-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-white/70 font-sans">Official astronaut certificate</span>
</li>
<li className="flex items-center gap-3">
<svg className="text-blue-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-white/70 font-sans">HD video recording</span>
</li>
</ul>
<button className="w-full py-4 px-6 rounded-xl text-sm font-medium text-white border border-white/20 hover:border-white/30 transition-all duration-300 hover:bg-white/5 font-sans" style={{background: 'rgba(255, 255, 255, 0.03)'}}>
          Reserve Your Seat
        </button>
</div>

<div className="relative rounded-2xl border border-blue-500/30 p-8" style={{background: 'rgba(59, 130, 246, 0.05)'}}>
<div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
<span className="px-4 py-1 text-xs font-medium text-white rounded-full border border-blue-500/30 font-sans" style={{background: 'rgba(59, 130, 246, 0.15)'}}>Most Popular</span>
</div>
<div className="mb-8">
<h4 className="text-xl font-semibold text-white mb-2 font-sans">Orbital Mission</h4>
<p className="text-sm text-white/60 mb-6 font-sans">Complete Earth orbits with extended zero gravity time and breathtaking views of our planet.</p>
<div className="flex items-baseline gap-2">
<span className="text-4xl text-white font-manrope font-medium">$2.5M</span>
<span className="text-sm text-white/40 font-sans">per person</span>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<svg className="text-blue-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-white/70 font-sans">3-day orbital flight</span>
</li>
<li className="flex items-center gap-3">
<svg className="text-blue-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-white/70 font-sans">48 Earth orbits</span>
</li>
<li className="flex items-center gap-3">
<svg className="text-blue-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-white/70 font-sans">6-week training program</span>
</li>
<li className="flex items-center gap-3">
<svg className="text-blue-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-white/70 font-sans">Professional space meals</span>
</li>
<li className="flex items-center gap-3">
<svg className="text-blue-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-white/70 font-sans">Science experiments participation</span>
</li>
</ul>
<button className="w-full py-4 px-6 rounded-xl text-sm font-medium text-white border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 font-sans" style={{background: 'rgba(59, 130, 246, 0.15)'}}>
          Book Mission
        </button>
</div>

<div className="relative rounded-2xl border border-white/10 p-8" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<div className="mb-8">
<h4 className="text-xl font-semibold text-white mb-2 font-sans">Lunar Flyby</h4>
<p className="text-sm text-white/60 mb-6 font-sans">The ultimate space adventure - journey around the Moon and witness views no human has seen for decades.</p>
<div className="flex items-baseline gap-2">
<span className="text-4xl text-white font-manrope font-medium">$55M</span>
<span className="text-sm text-white/40 font-sans">per person</span>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<svg className="text-blue-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-white/70 font-sans">8-day lunar mission</span>
</li>
<li className="flex items-center gap-3">
<svg className="flex-shrink-0 w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(96, 165, 250)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm text-white/70 font-sans">Moon flyby at 200km altitude</span>
</li>
<li className="flex items-center gap-3">
<svg className="text-blue-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-white/70 font-sans">6-month training program</span>
</li>
<li className="flex items-center gap-3">
<svg className="text-blue-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-white/70 font-sans">Luxury spacecraft accommodation</span>
</li>
<li className="flex items-center gap-3">
<svg className="text-blue-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-white/70 font-sans">Personal mission documentation</span>
</li>
</ul>
<button className="w-full py-4 px-6 rounded-xl text-sm font-medium text-white border border-white/20 hover:border-white/30 transition-all duration-300 hover:bg-white/5 font-sans" style={{background: 'rgba(255, 255, 255, 0.03)'}}>
          Join Waitlist
        </button>
</div>
</div>
<div className="text-center mt-16 pt-12 border-t border-white/10">
<p className="text-sm text-white/60 mb-6 font-sans">All packages include comprehensive insurance, medical clearance, and post-flight support. Payment plans available.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium text-white border border-white/20 hover:border-white/30 transition-all duration-300 hover:bg-white/5 font-sans" style={{background: 'rgba(255, 255, 255, 0.03)'}}>
<svg className="mr-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          Schedule Consultation
        </button>
<button className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium text-white/80 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5 font-sans" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<svg className="mr-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14,2 14,8 20,8"></polyline></svg>
          Download Brochure
        </button>
</div>
</div>
</div>
</section>
</section><section className="max-w-7xl lg:px-8 mr-auto ml-auto pr-6 pb-24 pl-6">
<div className="lg:p-16 border-white/10 border rounded-3xl pt-12 pr-12 pb-12 pl-12" style={{background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)'}}>
<div className="text-center mb-16">
<p className="uppercase text-sm font-medium text-white/40 tracking-wide mb-3 font-sans">Support</p>
<h3 className="text-3xl lg:text-4xl text-white tracking-tight mb-6 font-manrope font-medium">Frequently Asked Questions</h3>
<p className="text-lg text-white/60 max-w-3xl mx-auto font-sans">Everything you need to know about space tourism, training requirements, and the booking process.</p>
</div>
<div className="max-w-4xl mx-auto space-y-6">

<div className="rounded-2xl border border-white/10 overflow-hidden" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<button className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300" onclick="toggleFaq(this)">
<span className="text-lg font-medium text-white font-sans">What are the medical requirements for space travel?</span>
<svg className="text-white/60 transform transition-transform duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="px-8 pb-6 hidden">
<p className="text-white/70 leading-relaxed font-sans">All space travelers must pass a comprehensive medical examination including cardiovascular screening, blood pressure checks, and psychological evaluation. Most healthy adults between 18-65 can qualify. Our medical team will guide you through the entire clearance process, which typically takes 2-4 weeks.</p>
</div>
</div>

<div className="rounded-2xl border border-white/10 overflow-hidden" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<button className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300" onclick="toggleFaq(this)">
<span className="text-lg font-medium text-white font-sans">How long is the training program?</span>
<svg className="text-white/60 transform transition-transform duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="px-8 pb-6 hidden">
<p className="text-white/70 leading-relaxed font-sans">Training duration varies by mission type: 3 days for suborbital flights, 6 weeks for orbital missions, and 6 months for lunar flybys. Training includes zero-gravity simulation, spacecraft familiarization, emergency procedures, and physical conditioning. All training is conducted at our state-of-the-art facilities with experienced astronaut instructors.</p>
</div>
</div>

<div className="rounded-2xl border border-white/10 overflow-hidden" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<button className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300" onclick="toggleFaq(this)">
<span className="text-lg font-medium text-white font-sans">What safety measures are in place?</span>
<svg className="text-white/60 transform transition-transform duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="px-8 pb-6 hidden">
<p className="text-white/70 leading-relaxed font-sans">Our spacecraft feature triple-redundant safety systems, automated abort capabilities, and real-time mission monitoring. All vehicles are NASA-certified with a 100% safe return rate. Each mission includes experienced pilot crew, comprehensive insurance coverage, and 24/7 medical support throughout your journey.</p>
</div>
</div>

<div className="rounded-2xl border border-white/10 overflow-hidden" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<button className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300" onclick="toggleFaq(this)">
<span className="text-lg font-medium text-white font-sans">Can I bring personal items to space?</span>
<svg className="text-white/60 transform transition-transform duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="px-8 pb-6 hidden">
<p className="text-white/70 leading-relaxed font-sans">Yes, you can bring small personal items up to 2kg total weight. Popular choices include family photos, jewelry, or small mementos. All items must pass safety inspection and cannot contain liquids, electronics, or hazardous materials. We provide secure storage compartments and return certificates for items that traveled to space.</p>
</div>
</div>

<div className="rounded-2xl border border-white/10 overflow-hidden" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<button className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300" onclick="toggleFaq(this)">
<span className="text-lg font-medium text-white font-sans">What happens if weather delays the launch?</span>
<svg className="text-white/60 transform transition-transform duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="px-8 pb-6 hidden">
<p className="text-white/70 leading-relaxed font-sans">Launch windows are weather-dependent for safety reasons. If conditions aren't optimal, we'll reschedule to the next available window, typically within 24-72 hours. We provide complimentary accommodation, meals, and entertainment during delays. Your safety is our priority, and we never compromise on weather conditions.</p>
</div>
</div>

<div className="rounded-2xl border border-white/10 overflow-hidden" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<button className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300" onclick="toggleFaq(this)">
<span className="text-lg font-medium text-white font-sans">Are payment plans available?</span>
<svg className="text-white/60 transform transition-transform duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="px-8 pb-6 hidden">
<p className="text-white/70 leading-relaxed font-sans">Yes, we offer flexible payment plans with options for 12, 24, or 36-month schedules. A 20% deposit secures your booking, with the remainder spread over your chosen timeline. We also accept cryptocurrency payments and can arrange financing through our premium banking partners for qualified applicants.</p>
</div>
</div>
</div>
<div className="text-center mt-16 pt-12 border-t border-white/10">
<p className="text-sm text-white/60 mb-6 font-sans">Still have questions? Our space travel consultants are available 24/7 to help plan your journey.</p>
<button className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-medium text-white border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 font-sans" style={{background: 'rgba(59, 130, 246, 0.15)'}}>
<svg className="mr-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
        Contact Support
      </button>
</div>
</div>
</section><footer className="max-w-7xl lg:px-8 mr-auto ml-auto pr-6 pb-12 pl-6">
<div className="lg:p-16 border-white/10 border rounded-3xl pt-12 pr-12 pb-12 pl-12" style={{background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)'}}>
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1">
<div className="flex items-center mb-6">
<span className="text-xl font-semibold tracking-tight text-white font-sans">Astrolux</span>
</div>
<p className="text-sm text-white/60 leading-relaxed mb-8 font-sans">Pioneering the future of space tourism with safe, sustainable, and accessible journeys beyond Earth's atmosphere.</p>
<div className="flex items-center gap-4">
<a aria-label="Twitter" className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5" href="#" style={{background: 'rgba(255, 255, 255, 0.03)'}}>
<svg className="w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="LinkedIn" className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5" href="#" style={{background: 'rgba(255, 255, 255, 0.03)'}}>
<svg className="w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a aria-label="YouTube" className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5" href="#" style={{background: 'rgba(255, 255, 255, 0.03)'}}>
<svg className="w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
</div>
</div>

<div className="">
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide font-sans">Missions</h4>
<ul className="space-y-4">
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-sans" href="#">Suborbital Flights</a></li>
<li className=""><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-sans" href="#">Orbital Missions</a></li>
<li className=""><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-sans" href="#">Lunar Flyby</a></li>
<li className=""><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-sans" href="#">Space Station Visits</a></li>
<li className=""><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-sans" href="#">Private Charters</a></li>
</ul>
</div>

<div className="">
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide font-sans">Experience</h4>
<ul className="space-y-4">
<li className=""><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-sans" href="#">Training Programs</a></li>
<li className=""><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-sans" href="#">Medical Clearance</a></li>
<li className=""><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-sans" href="#">Safety Protocols</a></li>
<li className=""><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-sans" href="#">Traveler Stories</a></li>
<li className=""><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-sans" href="#">Photo Gallery</a></li>
</ul>
</div>

<div className="">
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide font-sans">Support</h4>
<ul className="space-y-4">
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-sans" href="#">Help Center</a></li>
<li className=""><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-sans" href="#">Contact Us</a></li>
<li className=""><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-sans" href="#">Booking Support</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-sans" href="#">Insurance</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-sans" href="#">Emergency Contacts</a></li>
</ul>
</div>
</div>

<div className="border-t border-white/10 pt-12 mb-12">
<div className="max-w-2xl mx-auto text-center">
<h4 className="text-lg font-medium text-white mb-4 font-sans">Stay Connected to the Stars</h4>
<p className="text-sm text-white/60 mb-8 font-sans">Get updates on launch dates, new mission packages, and exclusive space tourism insights.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<input className="flex-1 max-w-md px-4 py-3 rounded-xl text-sm text-white placeholder-white/40 border border-white/10 focus:border-blue-500/30 focus:outline-none transition-all duration-300" placeholder="Enter your email address" style={{background: 'rgba(255, 255, 255, 0.05)'}} type="email"/>
<button className="px-8 py-3 rounded-xl text-sm font-medium text-white border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 font-sans" style={{background: 'rgba(59, 130, 246, 0.15)'}}>
            Subscribe
          </button>
</div>
</div>
</div>

<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-wrap items-center gap-6 text-xs text-white/40">
<span className="font-sans">© 2024 Astrolux Space Tourism. All rights reserved.</span>
<a className="hover:text-white/60 transition-colors duration-300 font-sans" href="#">Privacy Policy</a>
<a className="hover:text-white/60 transition-colors duration-300 font-sans" href="#">Terms of Service</a>
<a className="hover:text-white/60 transition-colors duration-300 font-sans" href="#">Cookie Policy</a>
</div>
<div className="flex items-center gap-4 text-xs text-white/40">
<span className="flex items-center gap-2 font-sans">
<svg className="text-green-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
          NASA Certified
        </span>
<span className="flex items-center gap-2 font-sans">
<svg className="text-blue-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
          100% Safe
        </span>
</div>
</div>
</div>
</footer>
</div>



    </>
  );
}
