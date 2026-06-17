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
      

<div className="lines fixed top-0 left-0 right-0 h-full m-auto pointer-events-none z-0" style={{width: '90vw'}}>
<div className="line line-anim line-1 absolute w-px h-full top-0 left-1/2" style={{marginLeft: '-22.5vw', background: 'rgba(255,255,255,0.1)'}}></div>
<div className="line line-anim line-2 absolute w-px h-full top-0 left-1/2" style={{background: 'rgba(255,255,255,0.1)'}}></div>
<div className="line line-anim line-3 absolute w-px h-full top-0 left-1/2" style={{marginLeft: '22.5vw', background: 'rgba(255,255,255,0.1)'}}></div>
</div>

<header className="relative z-10 sm:px-6 md:px-10 animate-slideDown bg-zinc-950 w-full max-w-7xl border-zinc-50/10 border rounded-3xl mt-6 mr-auto ml-auto pt-4 pr-4 pb-4 pl-4">
<div className="flex flex-col md:flex-row gap-4 items-center justify-between">
<div className="flex items-center gap-3">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1040d3ec-8da2-47f6-b134-1341261ccfb9_320w.jpg)] bg-cover rounded" href="#"></a>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
<a className="hover:text-white transition-colors hover:scale-105 duration-200 font-medium" href="/work" id="aura-emfmwytp4">Work</a>
<a className="hover:text-white transition-colors hover:scale-105 duration-200 font-medium" href="/about" id="aura-emfmwz1ev">About</a>
<a className="hover:text-white transition-colors hover:scale-105 duration-200 font-medium" href="/services" id="aura-emfmwz65k">Services</a>
<a className="hover:text-white transition-colors hover:scale-105 duration-200 font-medium" href="/contact" id="aura-emfmwzalf">Contact</a>
</nav>
<a className="" href="#work" onmousedown="this.style.transform='scale(0.9)'" onmouseout="this.querySelector('span').style.backgroundColor='rgb(5, 6, 45)'" onmouseover="this.querySelector('span').style.background='none'" onmouseup="this.style.transform='scale(1)'" style={{alignItems: 'center', backgroundImage: 'linear-gradient(144deg, rgb(175, 64, 255), rgb(91, 66, 243) 50%, rgb(0, 221, 235))', border: '0px', borderRadius: '8px', boxShadow: 'rgba(151, 65, 252, 0.2) 0px 15px 30px -5px', boxSizing: 'border-box', color: 'rgb(255, 255, 255)', display: 'inline-flex', fontSize: '14px', justifyContent: 'center', lineHeight: '1em', maxWidth: '100%', minWidth: 'auto', padding: '3px', textDecoration: 'none', userSelect: 'none', touchAction: 'manipulation', whiteSpace: 'nowrap', cursor: 'pointer', height: '50px', marginTop: '0', transform: 'scale(1)', width: 'auto'}}>
<span className="" style={{background: 'none rgb(5, 6, 45)', padding: '16px 24px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>Resume</span>
</a>
</div>
</header>

<section className="relative z-10 sm:p-8 animate-scaleIn animation-delay-200 bg-neutral-900/60 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ee9b32bb-e72d-47cb-a983-ddf26a66cef2_1600w.jpg)] max-w-7xl bg-cover border-white/10 border rounded-3xl mt-24 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 backdrop-blur" style={{height: '600px'}}>

<div className="absolute inset-0 overflow-hidden -z-10 rounded-3xl">
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-950 via-slate-900 to-neutral-950 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c06498e9-85e2-4173-a1f6-86b1267897f0_1600w.jpg)] bg-cover invisible">
<div data-us-project="OMO2zbNkRGUqAVYhB4jD" style={{width: '100%', height: '100%', position: 'absolute', top: '0', left: '0', zIndex: '-1'}}></div>
</div>
<div className="absolute -left-20 -top-24 bg-transparent w-[70%] h-[140%] blur-3xl rotate-12 invisible" style={{left: '0', transform: 'translateX(0) rotate(12deg)'}}>
</div>
<div className="absolute -left-20 -top-24 bg-transparent w-[70%] h-[140%] blur-3xl rotate-12 invisible" style={{left: '0', transform: 'translateX(0) rotate(12deg)'}}>
<div aria-hidden="true" className="pointer-events-none select-none absolute bottom-6 left-6" style={{letterSpacing: '-0.02em'}}>
<span className="block leading-none" style={{fontWeight: '600', fontSize: 'min(20vw, 280px)', lineHeight: '0.8', color: 'rgba(125, 211, 252, 0.5)'}}>BRIND</span>
</div>
</div>

<div aria-hidden="true" className="pointer-events-none select-none absolute bottom-6 left-6 animate-fadeIn animation-delay-600" style={{letterSpacing: '-0.02em'}}>
<span className="block leading-none" style={{fontWeight: '600', fontSize: 'min(20vw, 280px)', lineHeight: '0.8', color: 'rgba(125, 211, 252, 0.5)'}}>BRIND</span>
</div>
</div>

<div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">

<div className="lg:col-span-7">
<h1 className="text-[44px] sm:text-6xl md:text-7xl leading-[1.05] font-light text-zinc-100 tracking-tighter animate-fadeInLeft animation-delay-300">Building Digital Experiences That Captivate</h1>
</div>

<div className="lg:col-span-5">
<p className="sm:text-base text-sm text-neutral-300 max-w-[42ch] animate-fadeInRight animation-delay-400">Our team blends strategy, design, and technology to craft memorable digital experiences that drive results.</p>
<div className="flex gap-6 animate-fadeInUp animation-delay-500 mt-5 items-center">
<a className="" href="#work" onmousedown="this.style.transform='scale(0.9)'" onmouseout="this.querySelector('span').style.backgroundColor='rgb(5, 6, 45)'" onmouseover="this.querySelector('span').style.background='none'" onmouseup="this.style.transform='scale(1)'" style={{alignItems: 'center', backgroundImage: 'linear-gradient(144deg, rgb(175, 64, 255), rgb(91, 66, 243) 50%, rgb(0, 221, 235))', border: '0px', borderRadius: '8px', boxShadow: 'rgba(151, 65, 252, 0.2) 0px 15px 30px -5px', boxSizing: 'border-box', color: 'rgb(255, 255, 255)', display: 'inline-flex', fontSize: '14px', justifyContent: 'center', lineHeight: '1em', maxWidth: '100%', minWidth: 'auto', padding: '3px', textDecoration: 'none', userSelect: 'none', touchAction: 'manipulation', whiteSpace: 'nowrap', cursor: 'pointer', height: '50px', marginTop: '1rem', transform: 'scale(0.9)', width: 'auto'}}>
<span className="" style={{background: 'none rgb(5, 6, 45)', padding: '16px 24px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>Book a call</span>
</a>
<a className="" href="#pricing" onmousedown="this.style.transform='scale(0.9)'" onmouseout="this.style.backgroundColor='rgba(255, 255, 255, 0.05)'" onmouseover="this.style.backgroundColor='rgba(255, 255, 255, 0.1)'" onmouseup="this.style.transform='scale(1)'" style={{alignItems: 'center', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', boxShadow: 'rgba(255, 255, 255, 0.05) 0px 1px 0px inset', boxSizing: 'border-box', color: 'rgb(255, 255, 255)', display: 'inline-flex', fontSize: '14px', justifyContent: 'center', lineHeight: '1em', maxWidth: '100%', minWidth: 'auto', padding: '3px', textDecoration: 'none', userSelect: 'none', touchAction: 'manipulation', whiteSpace: 'nowrap', cursor: 'pointer', height: '50px', marginTop: '1rem', transform: 'scale(1)', width: 'auto'}}>
<span className="" style={{padding: '16px 24px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>
      View pricing
      <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
</div>
</div>
</div>
</section>
<section className="relative z-10 sm:p-8 animate-scaleIn animation-delay-300 bg-zinc-950/10 w-full max-w-7xl border-white/10 border rounded-3xl mt-24 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 backdrop-blur">

<div className="flex gap-6 sm:px-0 pr-1 pl-1 items-center animate-fadeInUp">
<span className="inline-flex items-center gap-2 text-sm">
<span className="text-4xl font-medium text-white">Portfolio</span>
</span>
<span aria-hidden="true" aria-orientation="vertical" className="w-px h-10 bg-white/10" role="separator"></span>
<span className="text-sm text-neutral-300">featured work</span>
</div>
<div className="h-px bg-white/10 mt-4 animate-fadeIn animation-delay-100"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start relative z-10 mt-6 sm:mt-8">

<div className="flex flex-col min-h-full justify-between lg:col-span-5 animate-fadeInLeft animation-delay-200">
<div className="">
<h2 className="text-[44px] sm:text-6xl md:text-7xl leading-[1.05] font-light text-zinc-100 tracking-tighter">
          Creative solutions that make impact.
        </h2>

<div className="h-px bg-white/10 mt-6 animate-fadeIn animation-delay-300"></div>

<div className="mt-6 animate-fadeInUp animation-delay-400">
<p className="text-sm font-medium text-white tracking-tight">Skills &amp; Expertise</p>
<div className="mt-3 flex flex-wrap gap-2 stagger-animation">
<span className="inline-flex items-center gap-2 text-xs text-neutral-200 bg-white/5 border-white/10 border rounded-full py-1.5 px-3 hover:bg-white/10 transition-colors duration-200">
<svg className="lucide lucide-code w-3.5 h-3.5" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
              Frontend Development
            </span>
<span className="inline-flex items-center gap-2 text-xs text-neutral-200 bg-white/5 border-white/10 border rounded-full py-1.5 px-3 hover:bg-white/10 transition-colors duration-200">
<svg className="lucide lucide-palette w-3.5 h-3.5" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
              UI/UX Design
            </span>
<span className="inline-flex items-center gap-2 text-xs text-neutral-200 bg-white/5 border-white/10 border rounded-full py-1.5 px-3 hover:bg-white/10 transition-colors duration-200">
<svg className="lucide lucide-camera w-3.5 h-3.5" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
              Photography
            </span>
<span className="inline-flex items-center gap-2 text-xs text-neutral-200 bg-white/5 border-white/10 border rounded-full py-1.5 px-3 hover:bg-white/10 transition-colors duration-200">
<svg className="lucide lucide-layers w-3.5 h-3.5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
              Brand Identity
            </span>
</div>
</div>

<div className="mt-6 grid grid-cols-3 gap-4 stagger-animation">
<div className="hover-lift">
<div className="text-2xl font-semibold text-white">50+</div>
<div className="text-xs text-neutral-400">Projects</div>
</div>
<div className="hover-lift">
<div className="text-2xl font-semibold text-white">5</div>
<div className="text-xs text-neutral-400">Years</div>
</div>
<div className="hover-lift">
<div className="text-2xl font-semibold text-white">100%</div>
<div className="text-xs text-neutral-400">Satisfaction</div>
</div>
</div>
</div>
<div className="w-full mt-10 animate-fadeInUp animation-delay-500">
<div className="">
<p className="text-sm font-medium text-white tracking-tight">Available for projects</p>
<p className="text-sm text-neutral-300 max-w-sm mt-1">
            Crafting digital experiences with clean code, thoughtful design, and user-first approach.
          </p>
<div className="flex gap-6 animate-fadeInUp animation-delay-500 mt-5 items-center"><a className="" href="#work" onmousedown="this.style.transform='scale(0.9)'" onmouseout="this.querySelector('span').style.backgroundColor='rgb(5, 6, 45)'" onmouseover="this.querySelector('span').style.background='none'" onmouseup="this.style.transform='scale(1)'" style={{alignItems: 'center', backgroundImage: 'linear-gradient(144deg, rgb(175, 64, 255), rgb(91, 66, 243) 50%, rgb(0, 221, 235))', border: '0px', borderRadius: '8px', boxShadow: 'rgba(151, 65, 252, 0.2) 0px 15px 30px -5px', boxSizing: 'border-box', color: 'rgb(255, 255, 255)', display: 'inline-flex', fontSize: '14px', justifyContent: 'center', lineHeight: '1em', maxWidth: '100%', minWidth: 'auto', padding: '3px', textDecoration: 'none', userSelect: 'none', touchAction: 'manipulation', whiteSpace: 'nowrap', cursor: 'pointer', height: '50px', marginTop: '1rem', transform: 'scale(1)', width: 'auto'}}>
<span className="" style={{background: 'none rgb(5, 6, 45)', padding: '16px 24px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>View portfolio</span>
</a>
<a className="" href="#pricing" onmousedown="this.style.transform='scale(0.9)'" onmouseout="this.style.backgroundColor='rgba(255, 255, 255, 0.05)'" onmouseover="this.style.backgroundColor='rgba(255, 255, 255, 0.1)'" onmouseup="this.style.transform='scale(1)'" style={{alignItems: 'center', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', boxShadow: 'rgba(255, 255, 255, 0.05) 0px 1px 0px inset', boxSizing: 'border-box', color: 'rgb(255, 255, 255)', display: 'inline-flex', fontSize: '14px', justifyContent: 'center', lineHeight: '1em', maxWidth: '100%', minWidth: 'auto', padding: '3px', textDecoration: 'none', userSelect: 'none', touchAction: 'manipulation', whiteSpace: 'nowrap', cursor: 'pointer', height: '50px', marginTop: '1rem', transform: 'scale(1)', width: 'auto'}}>
<span className="" style={{padding: '16px 24px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>Start project<svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</a>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 animate-fadeInRight animation-delay-300">
<div className="grid grid-cols-2 md:grid-cols-3 gap-3 stagger-animation">

<div className="md:col-span-2 relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 group hover:border-white/20 transition-all duration-300 hover-lift">
<div className="aspect-[16/10] relative overflow-hidden">
<img alt="Creative web design project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d7050fd5-9b66-45d7-a30a-569d8f5e9017_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-2 backdrop-blur">
<svg className="lucide lucide-monitor h-3.5 w-3.5" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
                Web Design
              </span>
</div>
<button className="absolute top-3 right-3 inline-flex items-center justify-center h-8 w-8 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
<svg className="lucide lucide-external-link w-4 h-4 text-white" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
<div className="p-4">
<h3 className="text-base font-medium text-white tracking-tight">E-commerce Platform</h3>
<p className="text-sm text-neutral-400 mt-1">Modern marketplace with seamless UX</p>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 group hover:border-white/20 transition-all duration-300 hover-lift">
<div className="aspect-square relative overflow-hidden">
<img alt="Mobile app design" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fb6b509f-d7d6-4c5a-ab4e-9cc3661e184b_800w.jpg" style={{}}/>
<div className="aspect-square relative overflow-hidden bg-gradient-to-br from-blue-500/20 to-cyan-600/20 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fb6b509f-d7d6-4c5a-ab4e-9cc3661e184b_800w.jpg)] bg-cover"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-2 backdrop-blur">
<svg className="lucide lucide-smartphone w-3.5 h-3.5" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</span>
</div>
</div>
<div className="p-3">
<h3 className="text-sm font-medium text-white tracking-tight">Banking App</h3>
<p className="text-xs text-neutral-400 mt-1">Fintech mobile solution</p>
</div>
</div>

<div className="relative overflow-hidden group hover:border-white/20 transition-all duration-300 bg-neutral-900 border-white/10 border rounded-2xl hover-lift">
<div className="aspect-square relative overflow-hidden">
<img alt="Brand identity design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c987757e-3c22-4afb-8315-50113caa4754_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-2 backdrop-blur">
<svg className="lucide lucide-palette w-3.5 h-3.5" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</span>
</div>
</div>
<div className="p-3">
<h3 className="text-sm font-medium text-white tracking-tight">Brand Identity</h3>
<p className="text-xs text-neutral-400 mt-1">Complete visual system</p>
</div>
</div>

<div className="relative overflow-hidden group hover:border-white/20 transition-all duration-300 bg-neutral-900 border-white/10 border rounded-2xl hover-lift">
<div className="aspect-square relative overflow-hidden">
<img alt="Brand identity design" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6739d5c9-2ec9-43c0-94be-ec961704a2e0_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-2 backdrop-blur">
<svg className="lucide lucide-palette w-3.5 h-3.5" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</span>
</div>
</div>
<div className="p-3">
<h3 className="text-sm font-medium text-white tracking-tight">Brand Identity</h3>
<p className="text-xs text-neutral-400 mt-1">Complete visual system</p>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 group hover:border-white/20 transition-all duration-300 hover-lift">
<div className="aspect-square relative overflow-hidden bg-gradient-to-br from-amber-500/20 to-orange-600/20">
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-2 backdrop-blur">
<svg className="lucide lucide-play h-3.5 w-3.5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</span>
</div>

<div className="absolute inset-0 flex bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dcb7f82e-bf8a-4d5c-8c36-ce765f8a2932_800w.jpg)] bg-cover items-center justify-center">
<div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-play h-6 w-6 text-white ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
</div>
<div className="p-3">
<h3 className="text-sm font-medium text-white tracking-tight">Video Platform</h3>
<p className="text-xs text-neutral-400 mt-1">Streaming interface</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 sm:p-8 animate-scaleIn animation-delay-400 bg-zinc-950/60 w-full max-w-7xl border-white/10 border rounded-3xl mt-24 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 backdrop-blur">

<div className="flex gap-6 sm:px-0 pr-1 pl-1 items-center animate-fadeInUp">
<span className="inline-flex items-center gap-2 text-sm">
<span className="text-4xl font-medium text-zinc-100">Testimonials</span>
</span>
<span aria-hidden="true" aria-orientation="vertical" className="w-px bg-white/10 h-10" role="separator"></span>
<span className="text-sm text-zinc-400">client success stories</span>
</div>
<div className="h-px bg-white/10 mt-4 animate-fadeIn animation-delay-100"></div>
<div className="relative sm:mt-8 overflow-hidden sm:rounded-3xl border-0 rounded-none mt-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">

<div className="lg:col-span-6 animate-fadeInLeft animation-delay-200">

<h3 className="text-[44px] sm:text-6xl md:text-7xl leading-[1.05] font-light text-zinc-100 tracking-tighter">Clients love Brind</h3>
<p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-[48ch]">Trusted by innovative companies, delivering exceptional digital experiences that drive real results.</p>
<div className="mt-6 grid grid-cols-3 gap-3 stagger-animation">
<div className="sm:p-6 hover-lift bg-zinc-900/60 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5">
<div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">50+</div>
<div className="text-xs text-zinc-400 mt-1">Projects delivered</div>
</div>
<div className="rounded-2xl bg-zinc-900/60 border border-white/10 p-5 sm:p-6 hover-lift">
<div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">5</div>
<div className="text-xs text-zinc-400 mt-1">Years experience</div>
</div>
<div className="rounded-2xl bg-zinc-900/60 border border-white/10 p-5 sm:p-6 hover-lift">
<div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">100%</div>
<div className="text-xs text-zinc-400 mt-1">Client satisfaction</div>
</div>
</div>
<div className="h-px bg-white/10 mt-6 animate-fadeIn animation-delay-400"></div>

<div className="flex gap-6 animate-fadeInUp animation-delay-500 mt-5 items-center">
<a className="" href="#work" onmousedown="this.style.transform='scale(0.9)'" onmouseout="this.querySelector('span').style.backgroundColor='rgb(5, 6, 45)'" onmouseover="this.querySelector('span').style.background='none'" onmouseup="this.style.transform='scale(1)'" style={{alignItems: 'center', backgroundImage: 'linear-gradient(144deg, rgb(175, 64, 255), rgb(91, 66, 243) 50%, rgb(0, 221, 235))', border: '0px', borderRadius: '8px', boxShadow: 'rgba(151, 65, 252, 0.2) 0px 15px 30px -5px', boxSizing: 'border-box', color: 'rgb(255, 255, 255)', display: 'inline-flex', fontSize: '14px', justifyContent: 'center', lineHeight: '1em', maxWidth: '100%', minWidth: 'auto', padding: '3px', textDecoration: 'none', userSelect: 'none', touchAction: 'manipulation', whiteSpace: 'nowrap', cursor: 'pointer', height: '50px', marginTop: '1rem', transform: 'scale(1)', width: 'auto'}}>
<span className="" style={{background: 'none rgb(5, 6, 45)', padding: '16px 24px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>Book a call</span>
</a>
<a className="" href="#pricing" onmousedown="this.style.transform='scale(0.9)'" onmouseout="this.style.backgroundColor='rgba(255, 255, 255, 0.05)'" onmouseover="this.style.backgroundColor='rgba(255, 255, 255, 0.1)'" onmouseup="this.style.transform='scale(1)'" style={{alignItems: 'center', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', boxShadow: 'rgba(255, 255, 255, 0.05) 0px 1px 0px inset', boxSizing: 'border-box', color: 'rgb(255, 255, 255)', display: 'inline-flex', fontSize: '14px', justifyContent: 'center', lineHeight: '1em', maxWidth: '100%', minWidth: 'auto', padding: '3px', textDecoration: 'none', userSelect: 'none', touchAction: 'manipulation', whiteSpace: 'nowrap', cursor: 'pointer', height: '50px', marginTop: '1rem', transform: 'scale(1)', width: 'auto'}}>
<span className="" style={{padding: '16px 24px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>Start project<svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</a>
</div>
</div>

<div className="lg:col-span-6 animate-fadeInRight animation-delay-300 relative overflow-hidden h-[600px] rounded-3xl">
<style>
        @keyframes scroll-testimonials {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .testimonial-scroll-container {
          animation: scroll-testimonials 30s linear infinite;
          will-change: transform;
        }
        .testimonial-scroll-container:hover {
          animation-play-state: paused;
        }
      </style>
<div className="testimonial-scroll-container flex flex-col gap-6">

<article className="sm:p-8 bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-800/20 border-zinc-800/60 border rounded-3xl pt-6 pr-6 pb-6 pl-6 flex-shrink-0 hover-lift">
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="">
<div className="text-lg font-semibold text-zinc-100 tracking-tight">Sarah Thompson</div>
<div className="text-xs text-zinc-400 mt-0.5">CEO, TechFlow Solutions</div>
</div>
</div>
<div className="h-px bg-white/10 my-4"></div>
<div className="flex items-center gap-2 text-sm text-zinc-300">
<span className="text-zinc-200">5.0</span>
<div className="flex text-amber-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path className="" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
</div>
</div>
<p className="mt-3 text-sm sm:text-base text-zinc-300">
                "Working with Brind was exceptional. The team delivered a stunning website that perfectly captured our vision and significantly improved our user engagement."
              </p>
<div className="mt-4 flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-xs text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
<svg className="lucide lucide-trending-up w-3.5 h-3.5" data-lucide="trending-up" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                  +180% engagement
                </span>
<span className="text-xs text-zinc-500">Web Development</span>
</div>
</div>
</div>
</article>
<article className="sm:p-8 bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-800/20 border-zinc-800/60 border rounded-3xl pt-6 pr-6 pb-6 pl-6 flex-shrink-0 hover-lift">
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="">
<div className="text-lg font-semibold text-zinc-100 tracking-tight">Marcus Rodriguez</div>
<div className="text-xs text-zinc-400 mt-0.5">CTO, InnovateHub</div>
</div>
</div>
<div className="h-px bg-white/10 my-4"></div>
<div className="flex items-center gap-2 text-sm text-zinc-300">
<span className="text-zinc-200">5.0</span>
<div className="flex text-amber-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
</div>
</div>
<p className="mt-3 text-sm sm:text-base text-zinc-300">
                "The creative development process was seamless. Brind understood our technical requirements and delivered a solution that exceeded our expectations."
              </p>
<div className="mt-4 flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-xs text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">
<svg className="lucide lucide-smartphone w-3.5 h-3.5" data-lucide="smartphone" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
                  Mobile App
                </span>
<span className="text-xs text-zinc-500">Development</span>
</div>
</div>
</div>
</article>
<article className="sm:p-8 bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-800/20 border-zinc-800/60 border rounded-3xl pt-6 pr-6 pb-6 pl-6 flex-shrink-0 hover-lift">
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="">
<div className="text-lg font-semibold text-zinc-100 tracking-tight">Emma Chen</div>
<div className="text-xs text-zinc-400 mt-0.5">Creative Director, PixelCraft</div>
</div>
</div>
<div className="h-px bg-white/10 my-4"></div>
<div className="flex items-center gap-2 text-sm text-zinc-300">
<span className="text-zinc-200">5.0</span>
<div className="flex text-amber-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path className="" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4-756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
</div>
</div>
<p className="mt-3 text-sm sm:text-base text-zinc-300">
                "Outstanding attention to detail and creative vision. The brand identity work exceeded our expectations and truly captured our company's essence."
              </p>
<div className="mt-4 flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">
<svg className="lucide lucide-palette w-3.5 h-3.5" data-lucide="palette" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
                  Brand Design
                </span>
<span className="text-xs text-zinc-500">Visual Identity</span>
</div>
</div>
</div>
</article>
<article className="sm:p-8 bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-800/20 border-zinc-800/60 border rounded-3xl pt-6 pr-6 pb-6 pl-6 flex-shrink-0 hover-lift">
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="">
<div className="text-lg font-semibold text-zinc-100 tracking-tight">David Park</div>
<div className="text-xs text-zinc-400 mt-0.5">Founder, StartupLab</div>
</div>
</div>
<div className="h-px bg-white/10 my-4"></div>
<div className="flex items-center gap-2 text-sm text-zinc-300">
<span className="text-zinc-200">5.0</span>
<div className="flex text-amber-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
</div>
</div>
<p className="mt-3 text-sm sm:text-base text-zinc-300">
                "Fast turnaround, professional communication, and exceptional results. The full-stack solution helped us launch on time and under budget."
              </p>
<div className="mt-4 flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-xs text-orange-400 bg-orange-400/10 px-2 py-1 rounded-full">
<svg className="lucide lucide-code w-3.5 h-3.5" data-lucide="code" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
                  Full-Stack
                </span>
<span className="text-xs text-zinc-500">Development</span>
</div>
</div>
</div>
</article>

<article className="sm:p-8 bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-800/20 border-zinc-800/60 border rounded-3xl pt-6 pr-6 pb-6 pl-6 flex-shrink-0 hover-lift">
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="">
<div className="text-lg font-semibold text-zinc-100 tracking-tight">Sarah Thompson</div>
<div className="text-xs text-zinc-400 mt-0.5">CEO, TechFlow Solutions</div>
</div>
</div>
<div className="h-px bg-white/10 my-4"></div>
<div className="flex items-center gap-2 text-sm text-zinc-300">
<span className="text-zinc-200">5.0</span>
<div className="flex text-amber-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path className="" d="M106.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
</div>
</div>
<p className="mt-3 text-sm sm:text-base text-zinc-300">
                "Working with Brind was exceptional. The team delivered a stunning website that perfectly captured our vision and significantly improved our user engagement."
              </p>
<div className="mt-4 flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-xs text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
<svg className="lucide lucide-trending-up w-3.5 h-3.5" data-lucide="trending-up" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                  +180% engagement
                </span>
<span className="text-xs text-zinc-500">Web Development</span>
</div>
</div>
</div>
</article>
<article className="sm:p-8 bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-800/20 border-zinc-800/60 border rounded-3xl pt-6 pr-6 pb-6 pl-6 flex-shrink-0 hover-lift">
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="">
<div className="text-lg font-semibold text-zinc-100 tracking-tight">Marcus Rodriguez</div>
<div className="text-xs text-zinc-400 mt-0.5">CTO, InnovateHub</div>
</div><div className="h-px bg-white/10 my-4"></div>
<div className="flex items-center gap-2 text-sm text-zinc-300">
<span className="text-zinc-200">5.0</span>
<div className="flex text-amber-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
</div>
</div>
<p className="mt-3 text-sm sm:text-base text-zinc-300">
                "The creative development process was seamless. Brind understood our technical requirements and delivered a solution that exceeded our expectations."
              </p>
<div className="mt-4 flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-xs text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">
<svg className="lucide lucide-smartphone w-3.5 h-3.5" data-lucide="smartphone" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
                  Mobile App
                </span>
<span className="text-xs text-zinc-500">Development</span>
</div>
</div>
</div>
</div></article>
<article className="sm:p-8 bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-800/20 border-zinc-800/60 border rounded-3xl pt-6 pr-6 pb-6 pl-6 flex-shrink-0 hover-lift">
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="">
<div className="text-lg font-semibold text-zinc-100 tracking-tight">Emma Chen</div>
<div className="text-xs text-zinc-400 mt-0.5">Creative Director, PixelCraft</div>
</div>
</div>
<div className="h-px bg-white/10 my-4"></div>
<div className="flex items-center gap-2 text-sm text-zinc-300">
<span className="text-zinc-200">5.0</span>
<div className="flex text-amber-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4-756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
</div>
</div>
<p className="mt-3 text-sm sm:text-base text-zinc-300">
                "Outstanding attention to detail and creative vision. The brand identity work exceeded our expectations and truly captured our company's essence."
              </p>
<div className="mt-4 flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">
<svg className="lucide lucide-palette w-3.5 h-3.5" data-lucide="palette" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
                  Brand Design
                </span>
<span className="text-xs text-zinc-500">Visual Identity</span>
</div>
</div>
</div>
</article>
<article className="sm:p-8 bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-800/20 border-zinc-800/60 border rounded-3xl pt-6 pr-6 pb-6 pl-6 flex-shrink-0 hover-lift">
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="flex items-center justify-between">
<div>
<div className="text-lg font-semibold text-zinc-100 tracking-tight">David Park</div>
<div className="text-xs text-zinc-400 mt-0.5">Founder, StartupLab</div>
</div>
</div>
<div className="h-px bg-white/10 my-4"></div>
<div className="flex items-center gap-2 text-sm text-zinc-300">
<span className="text-zinc-200">5.0</span>
<div className="flex text-amber-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
</div>
</div>
<p className="mt-3 text-sm sm:text-base text-zinc-300">
                "Fast turnaround, professional communication, and exceptional results. The full-stack solution helped us launch on time and under budget."
              </p>
<div className="mt-4 flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-xs text-orange-400 bg-orange-400/10 px-2 py-1 rounded-full">
<svg className="lucide lucide-code w-3.5 h-3.5" data-lucide="code" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
                  Full-Stack
                </span>
<span className="text-xs text-zinc-500">Development</span>
</div>
</div>
</div>
</article>
</div>

<div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-zinc-950 via-zinc-950/90 to-transparent pointer-events-none z-10"></div>
<div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent pointer-events-none z-10"></div>
</div>
</div>
</div></section>

<section className="relative z-10 sm:p-8 animate-scaleIn animation-delay-500 bg-zinc-950/60 w-full max-w-7xl border-white/10 border rounded-3xl mt-24 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 backdrop-blur">

<div className="flex gap-6 sm:px-0 pr-1 pl-1 items-center animate-fadeInUp">
<span className="inline-flex items-center gap-2 text-sm">
<span className="text-4xl font-medium text-white">Services</span>
</span>
<span aria-hidden="true" aria-orientation="vertical" className="w-px bg-white/10 h-10" role="separator"></span>
<span className="text-sm text-neutral-300">what we offer</span>
</div>
<div className="h-px bg-white/10 mt-4 animate-fadeIn animation-delay-100"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 sm:gap-10 mt-6 sm:mt-8">

<div className="lg:col-span-6 animate-fadeInLeft animation-delay-200">

<h1 className="text-[44px] sm:text-6xl md:text-7xl leading-[1.05] font-light text-zinc-100 tracking-tighter">Let's Build Something Extraordinary</h1>

<div className="h-px bg-white/10 mt-6 animate-fadeIn animation-delay-300"></div>

<div className="mt-6 animate-fadeInUp animation-delay-400">
<div className="flex items-center gap-3">
<h3 className="text-2xl sm:text-3xl text-zinc-100 font-sans font-light tracking-tighter">Creative
            Development</h3>
<span className="inline-flex items-center rounded-full px-3 py-1 text-sm text-zinc-200 bg-white/5 ring-1 ring-white/10 font-sans hover:bg-white/10 transition-colors duration-200">Starting at $2,999</span>
</div>
<p className="text-zinc-400 text-sm sm:text-base mt-3 font-sans">Crafting digital experiences that captivate and
          convert your audience</p>
</div>

<div className="h-px bg-white/10 mt-6 animate-fadeIn animation-delay-500"></div>

<div className="mt-6 animate-fadeInUp animation-delay-600">
<div className="flex items-center gap-3">
<h3 className="text-2xl sm:text-3xl text-zinc-100 font-sans font-light tracking-tighter">Full-Stack
            Solutions</h3>
<span className="inline-flex items-center rounded-full px-3 py-1 text-sm text-zinc-200 bg-white/5 ring-1 ring-white/10 font-sans hover:bg-white/10 transition-colors duration-200">Starting at $5,999</span>
</div>
<p className="text-zinc-400 text-sm sm:text-base mt-3 font-sans">Complete digital solutions from strategy to
          deployment and beyond.</p>
</div>

<div className="flex gap-6 animate-fadeInUp animation-delay-500 mt-5 items-center">
<a className="" href="#work" onmousedown="this.style.transform='scale(0.9)'" onmouseout="this.querySelector('span').style.backgroundColor='rgb(5, 6, 45)'" onmouseover="this.querySelector('span').style.background='none'" onmouseup="this.style.transform='scale(1)'" style={{alignItems: 'center', backgroundImage: 'linear-gradient(144deg, rgb(175, 64, 255), rgb(91, 66, 243) 50%, rgb(0, 221, 235))', border: '0px', borderRadius: '8px', boxShadow: 'rgba(151, 65, 252, 0.2) 0px 15px 30px -5px', boxSizing: 'border-box', color: 'rgb(255, 255, 255)', display: 'inline-flex', fontSize: '14px', justifyContent: 'center', lineHeight: '1em', maxWidth: '100%', minWidth: 'auto', padding: '3px', textDecoration: 'none', userSelect: 'none', touchAction: 'manipulation', whiteSpace: 'nowrap', cursor: 'pointer', height: '50px', marginTop: '1rem', transform: 'scale(1)', width: 'auto'}}>
<span className="" style={{background: 'none rgb(5, 6, 45)', padding: '16px 24px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>View work</span>
</a>
<a className="" href="#pricing" onmousedown="this.style.transform='scale(0.9)'" onmouseout="this.style.backgroundColor='rgba(255, 255, 255, 0.05)'" onmouseover="this.style.backgroundColor='rgba(255, 255, 255, 0.1)'" onmouseup="this.style.transform='scale(1)'" style={{alignItems: 'center', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', boxShadow: 'rgba(255, 255, 255, 0.05) 0px 1px 0px inset', boxSizing: 'border-box', color: 'rgb(255, 255, 255)', display: 'inline-flex', fontSize: '14px', justifyContent: 'center', lineHeight: '1em', maxWidth: '100%', minWidth: 'auto', padding: '3px', textDecoration: 'none', userSelect: 'none', touchAction: 'manipulation', whiteSpace: 'nowrap', cursor: 'pointer', height: '50px', marginTop: '1rem', transform: 'scale(1)', width: 'auto'}}>
<span className="" style={{padding: '16px 24px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>Start project<svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</a>
</div>
</div>

<div className="lg:col-span-6 animate-fadeInRight animation-delay-300">
<div className="relative mx-auto w-full max-w-[860px] hover-lift" style={{filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.6))'}}>

<div className="rounded-[28px] bg-neutral-900/60 ring-1 ring-white/10 p-3">

<div className="relative overflow-hidden rounded-[22px] bg-neutral-950 border border-white/10">

<div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
<span className="h-3 w-3 rounded-full bg-zinc-700"></span>
<span className="h-3 w-3 rounded-full bg-zinc-700/70"></span>
<span className="h-3 w-3 rounded-full bg-zinc-700/50"></span>
</div>

<div className="p-4 sm:p-6">
<div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 stagger-animation">
<div className="relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900 hover:scale-105 transition-transform duration-300">
<img alt="Project preview 1" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e5607922-3e3a-4da8-958a-13f3bb19c07c_320w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/50"></div>
</div>
<div className="relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900 hover:scale-105 transition-transform duration-300">
<img alt="Project preview 2" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c7939795-f326-4a4c-9541-6cd5ee24e793_320w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/50"></div>
</div>
<div className="relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900 md:row-span-2 hover:scale-105 transition-transform duration-300">
<img alt="Project preview 3" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/62af90a3-7459-4c4f-be9c-04149b391218_320w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
</div>
<div className="relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900 hover:scale-105 transition-transform duration-300">
<img alt="Project preview 4" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5c3d7b58-631c-4dce-a85d-327c0dbb183b_320w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/50"></div>
</div>
<div className="relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900 hover:scale-105 transition-transform duration-300">
<img alt="Project preview 5" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fb6b509f-d7d6-4c5a-ab4e-9cc3661e184b_320w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/50"></div>
</div>
</div>
</div>

<div className="pointer-events-none absolute -right-24 bottom-0 w-72 h-72 rounded-full bg-white/10 blur-3xl">
</div>
<div className="pointer-events-none absolute -left-24 -top-24 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="relative z-10 sm:p-8 animate-scaleIn animation-delay-600 w-full max-w-7xl border-white/10 border rounded-3xl mt-24 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 backdrop-blur">

<div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
<div className="absolute left-0 bottom-0 w-[60%] h-[80%] rounded-[40%] bg-gradient-to-tr from-white/5 to-transparent blur-3xl">
</div>
</div>

<div className="flex items-center justify-center gap-4 text-neutral-400 text-sm animate-fadeInUp animation-delay-100">
<span className="h-px w-12 bg-white/10"></span>
<span className="italic font-sans">Reach out anytime</span>
<span className="h-px w-12 bg-white/10"></span>
</div>

<h2 className="mt-4 text-4xl sm:text-6xl text-white text-center font-sans font-light tracking-tighter animate-fadeInUp animation-delay-200" style={{}}>
    Let's Stay <span className="text-white/90 font-sans font-light tracking-tighter" style={{}}>Connected</span>
</h2>

<p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-xl mx-auto text-center font-sans animate-fadeInUp animation-delay-300">Got questions or want to
    collaborate? Feel free to reach out—We're open to new projects or just a casual chat!</p>

<div className="mt-6 flex justify-center animate-fadeInUp animation-delay-400">
<div className="flex gap-6 animate-fadeInUp animation-delay-500 mt-5 items-center">
<a className="" href="#work" onmousedown="this.style.transform='scale(0.9)'" onmouseout="this.querySelector('span').style.backgroundColor='rgb(5, 6, 45)'" onmouseover="this.querySelector('span').style.background='none'" onmouseup="this.style.transform='scale(1)'" style={{alignItems: 'center', backgroundImage: 'linear-gradient(144deg, rgb(175, 64, 255), rgb(91, 66, 243) 50%, rgb(0, 221, 235))', border: '0px', borderRadius: '8px', boxShadow: 'rgba(151, 65, 252, 0.2) 0px 15px 30px -5px', boxSizing: 'border-box', color: 'rgb(255, 255, 255)', display: 'inline-flex', fontSize: '14px', justifyContent: 'center', lineHeight: '1em', maxWidth: '100%', minWidth: 'auto', padding: '3px', textDecoration: 'none', userSelect: 'none', touchAction: 'manipulation', whiteSpace: 'nowrap', cursor: 'pointer', height: '50px', marginTop: '1rem', transform: 'scale(1)', width: 'auto'}}>
<span className="" style={{background: 'none rgb(5, 6, 45)', padding: '16px 24px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>Contact me</span>
</a>
</div>
</div>

<div className="mt-8 flex items-center justify-center gap-6 text-neutral-400 animate-fadeInUp animation-delay-500">
<a aria-label="X (Twitter)" className="p-2 rounded hover:bg-white/5 hover:text-white transition hover:scale-110 duration-200" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<span className="h-6 w-px bg-white/10"></span>
<a aria-label="Instagram" className="p-2 rounded hover:bg-white/5 hover:text-white transition hover:scale-110 duration-200" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<span className="h-6 w-px bg-white/10"></span>
<a aria-label="Facebook" className="p-2 rounded hover:bg-white/5 hover:text-white transition hover:scale-110 duration-200" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
</div>

<p className="mt-6 text-center animate-fadeInUp animation-delay-600">
<a className="text-sm text-neutral-300 underline underline-offset-4 hover:text-white font-sans hover:scale-105 inline-block transition-all duration-200" href="mailto:hello@brind.studio">hello@brind.studio</a>
</p>

<div className="mt-12 h-px bg-white/5 animate-fadeIn animation-delay-600"></div>
<div className="mt-6 flex items-center justify-between text-xs text-neutral-500 animate-fadeInUp animation-delay-600">
<p className="font-sans">© <span className="font-sans" id="year">2025</span> BRIND</p>
<div className="hidden sm:block text-neutral-500"></div>
</div>
</div>

    </>
  );
}
