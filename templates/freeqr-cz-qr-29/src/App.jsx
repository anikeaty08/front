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
                const answer = button.nextElementSibling;
                const icon = button.querySelector('.faq-icon svg');
                
                // Toggle current
                const isOpen = answer.classList.contains('grid-rows-[1fr]');
                
                // Close all
                document.querySelectorAll('.faq-answer').forEach(el => {
                    el.classList.remove('grid-rows-[1fr]');
                    el.classList.add('grid-rows-[0fr]');
                });
                document.querySelectorAll('.faq-icon svg').forEach(el => {
                    el.style.transform = 'rotate(0deg)';
                });

                if (!isOpen) {
                    answer.classList.remove('grid-rows-[0fr]');
                    answer.classList.add('grid-rows-[1fr]');
                    icon.style.transform = 'rotate(45deg)';
                }
            }
        


        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();
            
            // Intro Animation Removal
            setTimeout(() => {
                const intro = document.getElementById('intro');
                intro.style.display = 'none';
                document.body.style.overflow = 'auto'; // Unlock scroll
                
                // Add class to trigger entrance animations
                document.body.classList.add('loaded');
            }, 3000); 
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
      

<div className="fixed top-0 w-full h-screen -z-10" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="relative w-full h-[900px] -z-10 bg-gradient-to-b from-purple-900/20 via-blue-900/30 to-black/40 brightness-50 saturate-50"></div>
</div>
<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" style={{backgroundColor: '#080808'}}>
<div className="roof-light"></div>
<div className="light-beam"></div>
<div className="orb orb-1"></div>
<div className="orb orb-2"></div>
<div className="absolute inset-0 stars z-0"></div>
<div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-cover bg-center bg-[url(default)]"></div>
</div>

<div className="fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center intro-overlay" id="intro" style={{display: 'none'}}>
<div className="absolute inset-0 overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse"></div>
</div>
<h1 className="relative z-10 text-4xl sm:text-6xl font-semibold tracking-tighter text-white intro-text-wrapper">
<span style={{animationDelay: '0.2s'}}>Free</span><span className="text-indigo-400" style={{animationDelay: '0.3s'}}>Qr</span><span className="text-slate-600" style={{animationDelay: '0.5s'}}>.cz</span>
</h1>
</div>

<nav className="relative z-50 border-b border-white/5 bg-slate-950/20 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-2 animate-enter opacity-0">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
<svg className="lucide lucide-qr-code w-5 h-5" data-lucide="qr-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="5" x="3" y="3"></rect><rect height="5" rx="1" width="5" x="16" y="3"></rect><rect height="5" rx="1" width="5" x="3" y="16"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3"></path><path d="M21 21v.01"></path><path d="M12 7v3a2 2 0 0 1-2 2H7"></path><path d="M3 12h.01"></path><path d="M12 3h.01"></path><path d="M12 16v.01"></path><path d="M16 12h1"></path><path d="M21 12v.01"></path><path d="M12 21v-1"></path></svg>
</div>
<span className="text-lg font-medium tracking-tight text-white">Free<span className="text-slate-500">Qr</span></span>
</div>
<div className="flex items-center gap-6 animate-enter delay-100 opacity-0">
<div className="hidden sm:flex items-center gap-4 text-xs font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">Docs</a>
<a className="hover:text-white transition-colors" href="#">API</a>
</div>
<a className="text-xs font-medium bg-white text-slate-950 px-4 py-2 rounded-full hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#">
                        Sign In
                    </a>
</div>
</div>
</div>
</nav>

<main className="sm:px-6 lg:px-8 lg:py-20 z-10 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4 relative">

<div className="text-center max-w-2xl mx-auto mb-16 animate-enter delay-200 opacity-0 relative z-10">
<div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-medium tracking-wide uppercase mb-6 hover:bg-indigo-500/20 transition-colors cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                v2.0 Now Available
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-6">
                Generate <span className="gradient-text">intelligent QRs</span> instantly.
            </h1>
<p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed max-w-lg mx-auto">
                Create custom, high-resolution QR codes for links, text, crypto, and more. 
                Completely free, no sign-up required.
            </p>
</div>

<div className="relative isolate rounded-[2.5rem] p-4 sm:p-8 mb-24 animate-enter delay-300 opacity-0">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-7 space-y-6">

<div className="glass-panel rounded-2xl p-2">
<div className="grid grid-cols-4 sm:grid-cols-8 gap-1">
<div className="relative group">
<input checked="" className="tab-radio hidden peer" id="type-url" name="type" type="radio"/>
<label className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl cursor-pointer hover:bg-white/5 transition-all text-slate-400 peer-checked:text-white border border-transparent" htmlFor="type-url">
<svg className="lucide lucide-link w-5 h-5 group-hover:scale-110 transition-transform duration-300" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
<span className="text-[10px] font-medium">URL</span>
</label>
</div>
<div className="relative group">
<input className="tab-radio hidden peer" id="type-text" name="type" type="radio"/>
<label className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl cursor-pointer hover:bg-white/5 transition-all text-slate-400 peer-checked:text-white border border-transparent" htmlFor="type-text">
<svg className="lucide lucide-align-left w-5 h-5 group-hover:scale-110 transition-transform duration-300" data-lucide="align-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 5H3"></path><path d="M15 12H3"></path><path d="M17 19H3"></path></svg>
<span className="text-[10px] font-medium">Text</span>
</label>
</div>
<div className="relative group">
<input className="tab-radio hidden peer" id="type-email" name="type" type="radio"/>
<label className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl cursor-pointer hover:bg-white/5 transition-all text-slate-400 peer-checked:text-white border border-transparent" htmlFor="type-email">
<svg className="lucide lucide-mail w-5 h-5 group-hover:scale-110 transition-transform duration-300" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="text-[10px] font-medium">Email</span>
</label>
</div>
<div className="relative group">
<input className="tab-radio hidden peer" id="type-phone" name="type" type="radio"/>
<label className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl cursor-pointer hover:bg-white/5 transition-all text-slate-400 peer-checked:text-white border border-transparent" htmlFor="type-phone">
<svg className="lucide lucide-phone w-5 h-5 group-hover:scale-110 transition-transform duration-300" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="text-[10px] font-medium">Phone</span>
</label>
</div>
<div className="relative group">
<input className="tab-radio hidden peer" id="type-sms" name="type" type="radio"/>
<label className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl cursor-pointer hover:bg-white/5 transition-all text-slate-400 peer-checked:text-white border border-transparent" htmlFor="type-sms">
<svg className="lucide lucide-message-square w-5 h-5 group-hover:scale-110 transition-transform duration-300" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<span className="text-[10px] font-medium">SMS</span>
</label>
</div>
<div className="relative group">
<input className="tab-radio hidden peer" id="type-vcard" name="type" type="radio"/>
<label className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl cursor-pointer hover:bg-white/5 transition-all text-slate-400 peer-checked:text-white border border-transparent" htmlFor="type-vcard">
<svg className="lucide lucide-contact w-5 h-5 group-hover:scale-110 transition-transform duration-300" data-lucide="contact" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 2v2"></path><path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"></path><path d="M8 2v2"></path><circle cx="12" cy="11" r="3"></circle><rect height="18" rx="2" width="18" x="3" y="4"></rect></svg>
<span className="text-[10px] font-medium">vCard</span>
</label>
</div>
<div className="relative group">
<input className="tab-radio hidden peer" id="type-geo" name="type" type="radio"/>
<label className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl cursor-pointer hover:bg-white/5 transition-all text-slate-400 peer-checked:text-white border border-transparent" htmlFor="type-geo">
<svg className="lucide lucide-map-pin w-5 h-5 group-hover:scale-110 transition-transform duration-300" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-[10px] font-medium">Maps</span>
</label>
</div>
<div className="relative group">
<input className="tab-radio hidden peer" id="type-btc" name="type" type="radio"/>
<label className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl cursor-pointer hover:bg-white/5 transition-all text-slate-400 peer-checked:text-white border border-transparent" htmlFor="type-btc">
<svg className="lucide lucide-bitcoin w-5 h-5 group-hover:scale-110 transition-transform duration-300" data-lucide="bitcoin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"></path></svg>
<span className="text-[10px] font-medium">Crypto</span>
</label>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-indigo-500/10 rounded-lg ring-1 ring-inset ring-indigo-500/20">
<svg className="lucide lucide-link-2 w-5 h-5 text-indigo-400" data-lucide="link-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>
</div>
<h3 className="text-sm font-medium text-white">Target Content</h3>
</div>
<div className="space-y-4">
<div className="group">
<label className="block text-xs font-medium text-slate-400 mb-2 group-focus-within:text-indigo-400 transition-colors">Website URL</label>
<div className="relative">
<input className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all hover:bg-slate-900/80" placeholder="https://example.com" type="text"/>
<div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-focus-within:opacity-100 transition-opacity">
<svg className="lucide lucide-arrow-right w-4 h-4 text-indigo-500" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="glass-panel rounded-2xl p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-white flex items-center gap-2">
<svg className="lucide lucide-palette w-4 h-4 text-slate-400" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg> Appearance
                                </h3>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
<div>
<label className="block text-xs font-medium text-slate-400 mb-3">Foreground Color</label>
<div className="flex flex-wrap gap-3">
<div className="relative">
<input checked="" className="color-radio hidden" id="c-black" name="color" type="radio"/>
<label className="block w-8 h-8 rounded-full bg-black border border-white/20 cursor-pointer transition-transform hover:scale-105" htmlFor="c-black"></label>
</div>
<div className="relative">
<input className="color-radio hidden" id="c-indigo" name="color" type="radio"/>
<label className="block w-8 h-8 rounded-full bg-indigo-500 cursor-pointer transition-transform hover:scale-105 shadow-[0_0_10px_rgba(99,102,241,0.5)]" htmlFor="c-indigo"></label>
</div>
<div className="relative">
<input className="color-radio hidden" id="c-rose" name="color" type="radio"/>
<label className="block w-8 h-8 rounded-full bg-rose-500 cursor-pointer transition-transform hover:scale-105 shadow-[0_0_10px_rgba(244,63,94,0.5)]" htmlFor="c-rose"></label>
</div>
<div className="relative">
<input className="color-radio hidden" id="c-custom" name="color" type="radio"/>
<label className="block w-8 h-8 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border border-white/10 flex items-center justify-center cursor-pointer transition-transform hover:scale-105 group" htmlFor="c-custom">
<svg className="lucide lucide-plus w-4 h-4 text-slate-400 group-hover:text-white transition-colors" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</label>
</div>
</div>
</div>
<div className="">
<label className="block text-xs font-medium text-slate-400 mb-3">Pattern Style</label>
<div className="flex gap-2 bg-slate-900/50 p-1 rounded-lg border border-white/5">
<button className="flex-1 py-2 text-xs font-medium text-white bg-white/10 rounded shadow-sm transition-all hover:bg-white/15">Square</button>
<button className="flex-1 py-2 text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded transition-all">Dots</button>
<button className="flex-1 py-2 text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded transition-all">Rounded</button>
</div>
</div>
</div>
</div>
<div className="glass-panel rounded-2xl p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-white flex items-center gap-2">
<svg className="lucide lucide-maximize w-4 h-4 text-slate-400" data-lucide="maximize" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M21 8V5a2 2 0 0 0-2-2h-3"></path><path d="M3 16v3a2 2 0 0 0 2 2h3"></path><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg> Dimensions
                                </h3>
<span className="text-xs font-mono text-slate-400 bg-slate-900/50 px-2 py-1 rounded">2000 x 2000 px</span>
</div>
<div className="space-y-6">
<div className="">
<div className="flex justify-between text-xs text-slate-400 mb-2">
<span>Resolution</span>
<span>High Quality</span>
</div>
<input className="w-full" max="4000" min="100" type="range" value="2000"/>
</div>
<div className="">
<div className="flex justify-between text-xs text-slate-400 mb-2">
<span>Quiet Zone (Margin)</span>
<span>2 Blocks</span>
</div>
<input className="w-full" max="5" min="0" type="range" value="2"/>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 lg:sticky lg:top-24">
<div className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-purple-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
<h2 className="text-sm font-medium text-slate-400 mb-6 uppercase tracking-widest text-xs relative z-10">Live Preview</h2>
<div className="relative z-10 bg-white p-6 rounded-2xl shadow-2xl shadow-indigo-500/10 mb-8 transition-transform duration-500 hover:scale-[1.02] hover:rotate-1">
<div className="w-48 h-48 sm:w-64 sm:h-64 bg-white flex flex-wrap content-start">
<svg className="w-full h-full text-slate-900 fill-current" viewbox="0 0 100 100">
<path className="" d="M0,0 h30 v30 h-30 z M5,5 v20 h20 v-20 z M10,10 h10 v10 h-10 z M70,0 h30 v30 h-30 z M75,5 v20 h20 v-20 z M80,10 h10 v10 h-10 z M0,70 h30 v30 h-30 z M5,75 v20 h20 v-20 z M10,80 h10 v10 h-10 z M40,10 h10 v10 h-10 z M50,20 h20 v20 h-20 z M10,40 h10 v10 h-10 z M80,50 h10 v10 h-10 z M40,60 h20 v10 h-20 z M70,70 h20 v10 h-20 z M35,35 h5 v5 h-5 z M45,45 h5 v5 h-5 z M65,65 h5 v5 h-5 z"></path>
</svg>
</div>
</div>
<div className="w-full space-y-4 relative z-10">

<div className="btn-wrapper">
<button aria-label="Generate" className="btn px-3 py-2 md:px-4 md:py-2 focus:outline-none" title="Generate" type="button">
<svg aria-hidden="true" className="btn-svg" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<div className="txt-wrapper">
<div className="txt-1">
<span className="btn-letter">G</span><span className="btn-letter">e</span><span className="btn-letter">r</span><span className="btn-letter">a</span><span className="btn-letter">t</span><span className="btn-letter">e</span>
</div>
<div className="txt-2">
<span className="btn-letter">G</span><span className="btn-letter">e</span><span className="btn-letter">n</span><span className="btn-letter">e</span><span className="btn-letter">r</span><span className="btn-letter">a</span><span className="btn-letter">t</span><span className="btn-letter">i</span><span className="btn-letter">n</span><span className="btn-letter">g</span>
</div>
</div>
</button>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="py-3 px-4 bg-slate-800/50 hover:bg-slate-800 border border-white/10 text-white rounded-xl font-medium text-xs transition-colors flex items-center justify-center gap-2">
<svg className="lucide lucide-file-code w-3.5 h-3.5 text-slate-400" data-lucide="file-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 12.5 8 15l2 2.5"></path><path d="m14 12.5 2 2.5-2 2.5"></path></svg> SVG Vector
                                </button>
<button className="py-3 px-4 bg-slate-800/50 hover:bg-slate-800 border border-white/10 text-white rounded-xl font-medium text-xs transition-colors flex items-center justify-center gap-2">
<svg className="lucide lucide-printer w-3.5 h-3.5 text-slate-400" data-lucide="printer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path><rect height="8" rx="1" width="12" x="6" y="14"></rect></svg> Print PDF
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="py-24 animate-enter delay-500 opacity-0 relative border-t border-white/5">
<div className="text-center mb-16">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1]">
<span className="text-slate-400">Simple Steps to</span>
<span className="block">QR Mastery</span>
</h2>
<p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-400 font-light leading-relaxed">
                    Get started in minutes and take full control of your digital links. From selection to download, everything is built for speed.
                </p>
</div>
<div className="relative mt-24 mb-24 items-center justify-center">

<div className="absolute left-0 right-0 top-10 h-0.5 border-t border-dashed border-indigo-500/30 overflow-hidden">
<div className="absolute inset-0 h-full bg-gradient-to-r from-transparent via-indigo-400 via-fuchsia-400 to-transparent" style={{width: '200px', animation: 'connectionFlow 3s linear infinite'}}></div>
</div>
<div className="relative mx-auto mt-14 max-w-5xl px-6">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
<div className="flex flex-col items-center text-center">
<div className="h-20 w-full relative flex items-center justify-center">
<span className="inline-flex items-center justify-center font-medium text-white bg-gradient-to-tr from-indigo-500 to-purple-500 w-12 h-12 ring-slate-900/50 ring-8 rounded-full shadow-lg shadow-indigo-500/20">1</span>
</div>
<p className="leading-relaxed text-sm text-slate-300 max-w-xs mt-3">Select your desired content type</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="relative flex w-full h-20 items-center justify-center">
<span className="inline-flex items-center justify-center font-medium text-white bg-gradient-to-tr from-purple-600 to-pink-500 w-12 h-12 ring-slate-900/50 ring-8 rounded-full shadow-lg shadow-purple-500/20">2</span>
</div>
<p className="leading-relaxed text-sm text-slate-300 max-w-xs mt-3">Input your data securely</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="h-20 w-full relative flex items-center justify-center">
<span className="inline-flex items-center justify-center font-medium text-white bg-gradient-to-tr from-pink-500 to-orange-400 w-12 h-12 ring-slate-900/50 ring-8 rounded-full shadow-lg shadow-pink-500/20">3</span>
</div>
<p className="leading-relaxed text-sm text-slate-300 max-w-xs mt-3">Customize styles &amp; colors</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="h-20 w-full relative flex items-center justify-center">
<span className="inline-flex items-center justify-center font-medium text-white bg-gradient-to-tr from-orange-400 to-yellow-400 w-12 h-12 ring-slate-900/50 ring-8 rounded-full shadow-lg shadow-orange-500/20">4</span>
</div>
<p className="leading-relaxed text-sm text-slate-300 max-w-xs mt-3">Download high-quality SVG</p>
</div>
</div>
</div>
</div>
</div>

<div className="animate-enter delay-500 border-white/5 border-t pt-24 pb-24 relative">
<div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-4">
                        Connect <span className="text-slate-500">Everything.</span>
</h2>
<p className="text-slate-400 font-light text-base leading-relaxed">
                        From physical spaces to digital payments, bridge the gap with instant connectivity.
                    </p>
</div>
<div className="hidden md:block">
<a className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors group" href="#">
                        View all use cases 
                        <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative overflow-hidden rounded-2xl bg-white/5 p-8 border border-white/5 hover:border-white/10 transition-colors use-case-card cursor-default">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="icon-box w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-6 text-indigo-400 transition-transform duration-500 shadow-lg shadow-indigo-900/20">
<svg className="lucide lucide-utensils w-6 h-6" data-lucide="utensils" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Restaurants &amp; Menus</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                            Replace physical menus with contactless QR codes. Update items instantly without reprinting.
                        </p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-white/5 p-8 border border-white/5 hover:border-white/10 transition-colors use-case-card cursor-default">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="icon-box w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-6 text-purple-400 transition-transform duration-500 shadow-lg shadow-purple-900/20">
<svg className="lucide lucide-briefcase w-6 h-6" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Business Connect</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                            Share contact cards, direct customers to Google Maps, or link to your portfolio.
                        </p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-white/5 p-8 border border-white/5 hover:border-white/10 transition-colors use-case-card cursor-default">
<div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="icon-box w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-6 text-pink-400 transition-transform duration-500 shadow-lg shadow-pink-900/20">
<svg className="lucide lucide-ticket w-6 h-6" data-lucide="ticket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Events &amp; Tickets</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                            Streamline entry with scannable tickets or share invitations with RSVP links.
                        </p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-white/5 p-8 border border-white/5 hover:border-white/10 transition-colors use-case-card cursor-default">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="icon-box w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-6 text-cyan-400 transition-transform duration-500 shadow-lg shadow-cyan-900/20">
<svg className="lucide lucide-wifi w-6 h-6" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Instant WiFi</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                            Allow guests to join your network automatically. No more typing long passwords.
                        </p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-white/5 p-8 border border-white/5 hover:border-white/10 transition-colors use-case-card cursor-default">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="icon-box w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-6 text-blue-400 transition-transform duration-500 shadow-lg shadow-blue-900/20">
<svg className="lucide lucide-share-2 w-6 h-6" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Social &amp; Bio</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                            Grow your following. Link to Instagram, TikTok, or your personal Linktree.
                        </p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-white/5 p-8 border border-white/5 hover:border-white/10 transition-colors use-case-card cursor-default">
<div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="icon-box w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-6 text-green-400 transition-transform duration-500 shadow-lg shadow-green-900/20">
<svg className="lucide lucide-credit-card w-6 h-6" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Easy Payments</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                            Accept crypto, Venmo, or PayPal. Scan to pay for seamless transactions.
                        </p>
</div>
</div>
</div>
</div>

</main>
<footer className="z-10 sm:px-6 lg:px-8 lg:py-16 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4 relative">

<section className="relative mb-24 lg:mb-32">
<div className="grid md:grid-cols-12 gap-x-6 gap-y-12 items-start">

<div className="md:col-span-7 space-y-12">

<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-medium tracking-wide uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                        Support
                    </div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight">
                        Common Questions
                    </h2>
<p className="text-slate-400 text-base leading-relaxed max-w-lg">
                        Everything you need to know about generating QR codes, customization options, and usage rights.
                    </p>
</div>

<div className="divide-y divide-white/5">

<div className="py-6">
<button className="faq-toggle group flex items-center justify-between w-full text-left focus:outline-none" data-faq="faq-1" onclick="toggleFaq(this)">
<span className="text-lg text-slate-200 font-medium group-hover:text-indigo-400 transition-colors">Is it really free?</span>
<span className="ml-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/5 group-hover:bg-white/10 transition-all text-slate-400 group-hover:text-white faq-icon">
<svg className="lucide lucide-plus transition-transform duration-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</button>
<div className="faq-answer grid grid-rows-[0fr] transition-all duration-300 ease-out" data-answer="faq-1">
<div className="overflow-hidden">
<p className="pt-4 text-slate-400 text-sm leading-relaxed">
                                    Yes, FreeQr is completely free to use for personal and commercial projects. There are no hidden fees, watermarks, or scan limits. We rely on donations and optional premium features to keep the service running.
                                </p>
</div>
</div>
</div>

<div className="py-6">
<button className="faq-toggle group flex items-center justify-between w-full text-left focus:outline-none" data-faq="faq-2" onclick="toggleFaq(this)">
<span className="text-lg text-slate-200 font-medium group-hover:text-indigo-400 transition-colors">Do the QR codes expire?</span>
<span className="ml-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/5 group-hover:bg-white/10 transition-all text-slate-400 group-hover:text-white faq-icon">
<svg className="lucide lucide-plus transition-transform duration-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</button>
<div className="faq-answer grid grid-rows-[0fr] transition-all duration-300 ease-out" data-answer="faq-2">
<div className="overflow-hidden">
<p className="pt-4 text-slate-400 text-sm leading-relaxed">
                                    Static QR codes (like Text, WiFi, vCard) never expire as the data is encoded directly into the image. Dynamic links created through our URL shortener are permanent as long as our service exists.
                                </p>
</div>
</div>
</div>

<div className="py-6">
<button className="faq-toggle group flex items-center justify-between w-full text-left focus:outline-none" data-faq="faq-3" onclick="toggleFaq(this)">
<span className="text-lg text-slate-200 font-medium group-hover:text-indigo-400 transition-colors">Can I track scan analytics?</span>
<span className="ml-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/5 group-hover:bg-white/10 transition-all text-slate-400 group-hover:text-white faq-icon">
<svg className="lucide lucide-plus transition-transform duration-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</button>
<div className="faq-answer grid grid-rows-[0fr] transition-all duration-300 ease-out" data-answer="faq-3">
<div className="overflow-hidden">
<p className="pt-4 text-slate-400 text-sm leading-relaxed">
                                    Currently, we focus on privacy and do not track users or scans. However, we are working on an optional privacy-preserving analytics dashboard for registered users in v2.1.
                                </p>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-5 relative">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 aspect-square sm:aspect-[4/5] lg:aspect-square group">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-transparent to-purple-500/20 opacity-50 mix-blend-overlay z-10 pointer-events-none"></div>
<img alt="FAQ Abstract" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none"></div>
<div className="absolute bottom-8 left-8 right-8 z-20">
<div className="backdrop-blur-md bg-white/5 border border-white/10 p-4 rounded-xl shadow-2xl">
<p className="text-white text-sm font-medium mb-1">Need help?</p>
<p className="text-slate-400 text-xs">Contact our support team anytime.</p>
<a className="mt-3 inline-flex items-center text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors" href="#">
                                Support Center <svg className="lucide lucide-arrow-right ml-1" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>

</section>

<div className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-slate-900/40 backdrop-blur-md p-8 sm:p-12">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>
<div className="relative z-10 grid gap-12 lg:grid-cols-5">

<div className="lg:col-span-2">
<a className="flex items-center gap-2 mb-6 w-fit" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
<svg className="lucide lucide-qr-code" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="5" x="3" y="3"></rect><rect height="5" rx="1" width="5" x="16" y="3"></rect><rect height="5" rx="1" width="5" x="3" y="16"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3"></path><path d="M21 21v.01"></path><path d="M12 7v3a2 2 0 0 1-2 2H7"></path><path d="M3 12h.01"></path><path d="M12 3h.01"></path><path d="M12 16v.01"></path><path d="M16 12h1"></path><path d="M21 12v.01"></path><path d="M12 21v-1"></path></svg>
</div>
<span className="text-lg font-medium tracking-tight text-white">Free<span className="text-slate-500">Qr</span></span>
</a>
<p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">
                    Generate custom, high-resolution QR codes instantly for any use case. Completely free, open source, and privacy-focused.
                </p>
<div className="flex items-center gap-3">
<a className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all hover:scale-105" href="#">
<svg className="lucide lucide-twitter" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all hover:scale-105" href="#">
<svg className="lucide lucide-github" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all hover:scale-105" href="#">
<svg className="lucide lucide-mail" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path></svg>
</a>
</div>
</div>

<div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
<div className="space-y-4">
<h3 className="text-sm font-semibold text-white tracking-wide uppercase opacity-90">Product</h3>
<ul className="space-y-3">
<li className=""><a className="text-sm text-slate-400 hover:text-indigo-400 transition-colors" href="#">Features</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-indigo-400 transition-colors" href="#">Templates</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-indigo-400 transition-colors" href="#">Pricing</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-indigo-400 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div className="space-y-4">
<h3 className="text-sm font-semibold text-white tracking-wide uppercase opacity-90">Resources</h3>
<ul className="space-y-3">
<li><a className="text-sm text-slate-400 hover:text-indigo-400 transition-colors" href="#">Documentation</a></li>
<li><a className="text-sm text-slate-400 hover:text-indigo-400 transition-colors" href="#">API Reference</a></li>
<li><a className="text-sm text-slate-400 hover:text-indigo-400 transition-colors" href="#">Guides</a></li>
<li><a className="text-sm text-slate-400 hover:text-indigo-400 transition-colors" href="#">Status</a></li>
</ul>
</div>
<div className="space-y-4">
<h3 className="text-sm font-semibold text-white tracking-wide uppercase opacity-90">Company</h3>
<ul className="space-y-3">
<li><a className="text-sm text-slate-400 hover:text-indigo-400 transition-colors" href="#">About</a></li>
<li><a className="text-sm text-slate-400 hover:text-indigo-400 transition-colors" href="#">Blog</a></li>
<li className=""><a className="text-sm text-slate-400 hover:text-indigo-400 transition-colors" href="#">Legal</a></li>
<li><a className="text-sm text-slate-400 hover:text-indigo-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>
<div className="relative z-10 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-500">© 2024 FreeQr.cz. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-xs font-medium text-slate-500 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-xs font-medium text-slate-500 hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="text-xs font-medium text-slate-500 hover:text-white transition-colors" href="#">Cookie Policy</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
