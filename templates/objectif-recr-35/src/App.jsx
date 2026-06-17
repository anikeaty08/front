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



        document.addEventListener('DOMContentLoaded', () => {
            const slides = document.querySelectorAll('.slide-item');
            const bars = document.querySelectorAll('.progress-bar .bar');
            let currentIndex = 0;
            const intervalTime = 5000; // 5 seconds

            // Initialize first bar
            bars[0].style.width = '100%';
            bars[0].parentElement.parentElement.children[0].classList.add('active');

            function showSlide(index) {
                // Reset all slides
                slides.forEach(slide => slide.classList.remove('active'));
                
                // Reset animations on bars
                bars.forEach(bar => {
                    bar.style.animation = 'none';
                    bar.style.width = '0%';
                });

                // Activate current slide
                slides[index].classList.add('active');
                
                // Animate current bar
                // Trigger reflow to restart animation
                void bars[index].offsetWidth; 
                bars[index].style.animation = `progress ${intervalTime/1000}s linear`;
                
                // Fill previous bars completely to show progress history
                for(let i = 0; i < index; i++) {
                    bars[i].style.width = '100%';
                }
            }

            // Start the loop
            showSlide(0);

            setInterval(() => {
                currentIndex = (currentIndex + 1) % slides.length;
                showSlide(currentIndex);
            }, intervalTime);
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
      

<div className="w-full lg:w-1/2 h-full flex flex-col justify-between overflow-y-auto relative z-20 bg-white">

<div className="px-8 py-8 md:px-12 lg:px-24">
<a className="flex items-center gap-3 w-fit group" href="#">
<div className="w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center text-white text-xs font-semibold tracking-wide shadow-md group-hover:scale-105 transition-transform duration-300">OA</div>
<span className="font-semibold text-slate-900 tracking-tight">OrgAnic AI</span>
</a>
</div>

<div className="px-8 md:px-12 lg:px-24 max-w-xl mx-auto w-full flex-1 flex flex-col justify-center">
<div className="mb-8">
<h1 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-2">Bon retour parmi nous</h1>
<p className="text-slate-500 text-sm">Entrez vos identifiants pour accéder à votre espace.</p>
</div>

<div className="grid grid-cols-2 gap-4 mb-8">
<button className="flex items-center justify-center gap-2 border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 rounded-lg py-2.5 transition-all duration-200 group">
<svg className="w-5 h-5" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg>
<span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Google</span>
</button>
<button className="flex items-center justify-center gap-2 border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 rounded-lg py-2.5 transition-all duration-200 group">
<svg className="w-5 h-5 text-slate-900" fill="currentColor" viewbox="0 0 24 24"><path clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill-rule="evenodd"></path></svg>
<span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">GitHub</span>
</button>
</div>

<div className="relative flex py-2 items-center mb-8">
<div className="flex-grow border-t border-slate-200"></div>
<span className="flex-shrink-0 mx-4 text-xs font-medium text-slate-400 uppercase tracking-wider">ou par email</span>
<div className="flex-grow border-t border-slate-200"></div>
</div>

<form className="space-y-5">
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5 ml-0.5" htmlFor="email">Email professionnel</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg className="w-4 h-4 text-slate-400 group-focus-within:text-slate-600 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path></svg>
</div>
<input className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#EF6741]/10 focus:border-[#EF6741] focus:bg-white transition-all shadow-sm" id="email" placeholder="nom@entreprise.com" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5 ml-0.5" htmlFor="password">Mot de passe</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg className="w-4 h-4 text-slate-400 group-focus-within:text-slate-600 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<input className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#EF6741]/10 focus:border-[#EF6741] focus:bg-white transition-all shadow-sm" id="password" placeholder="••••••••" required="" type="password"/>
</div>
</div>
<div className="flex items-center justify-between pt-1">
<label className="flex items-center gap-2 cursor-pointer group">
<input className="appearance-none w-4 h-4 border border-slate-300 rounded bg-white checked:bg-slate-900 checked:border-slate-900 focus:ring-2 focus:ring-offset-1 focus:ring-slate-900/20 custom-checkbox transition-all cursor-pointer" type="checkbox"/>
<span className="text-xs text-slate-600 group-hover:text-slate-800 transition-colors">Se souvenir de moi</span>
</label>
<a className="text-xs font-medium text-slate-500 hover:text-[#EF6741] transition-colors" href="#">Mot de passe oublié ?</a>
</div>
<button className="w-full bg-[#0F172A] hover:bg-slate-800 text-white font-medium py-3 rounded-lg shadow-lg hover:shadow-xl shadow-slate-900/10 transition-all duration-300 flex items-center justify-center gap-2 group" type="submit">
<span>Se connecter</span>
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</form>
<p className="text-center mt-8 text-sm text-slate-500">
                Pas encore de compte ? 
                <a className="font-medium text-[#EF6741] hover:text-[#F2367B] transition-colors relative inline-block" href="#">
                    Créer un compte
                    <span className="absolute -bottom-0.5 left-0 w-full h-px bg-[#EF6741] scale-x-0 transition-transform origin-left hover:scale-x-100"></span>
</a>
</p>
</div>

<div className="px-8 py-6 md:px-12 lg:px-24">
<div className="flex flex-wrap gap-4 text-xs text-slate-400">
<a className="hover:text-slate-600 transition-colors" href="#">Conditions</a>
<span>•</span>
<a className="hover:text-slate-600 transition-colors" href="#">Confidentialité</a>
<span>•</span>
<a className="hover:text-slate-600 transition-colors" href="#">Aide</a>
</div>
</div>
</div>

<div className="hidden lg:flex w-1/2 h-full mesh-gradient relative items-center justify-center overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-brand opacity-10 rounded-full blur-[120px] pointer-events-none"></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

<div className="relative w-[420px] h-[500px] flex items-center justify-center" id="slider-container">

<div className="slide-item active flex flex-col items-center justify-center">

<div className="w-full bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl ring-1 ring-white/5 mb-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
<svg className="lucide lucide-activity" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
</div>
<div>
<div className="text-sm font-semibold text-white">Performances</div>
<div className="text-xs text-slate-400">Temps réel</div>
</div>
</div>
<div className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] font-mono text-emerald-400 animate-pulse">LIVE</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="bg-white/5 rounded-xl p-4 border border-white/5">
<div className="text-slate-400 text-xs mb-1">Nouveaux Leads</div>
<div className="text-2xl font-bold text-white mb-1">1,284</div>
<div className="flex items-center gap-1 text-[10px] text-emerald-400">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg> +12.5%
                            </div>
</div>
<div className="bg-white/5 rounded-xl p-4 border border-white/5">
<div className="text-slate-400 text-xs mb-1">Portée Organique</div>
<div className="text-2xl font-bold text-white mb-1">45.2k</div>
<div className="flex items-center gap-1 text-[10px] text-emerald-400">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg> +24.1%
                            </div>
</div>
</div>
<div className="relative h-24 flex items-end justify-between gap-1 px-1">
<div className="w-full bg-slate-700/50 rounded-t-sm h-[30%]"></div>
<div className="w-full bg-slate-700/50 rounded-t-sm h-[45%]"></div>
<div className="w-full bg-slate-700/50 rounded-t-sm h-[35%]"></div>
<div className="w-full bg-slate-700/50 rounded-t-sm h-[55%]"></div>
<div className="w-full bg-gradient-brand rounded-t-sm h-[75%] shadow-[0_0_15px_rgba(239,103,65,0.3)] relative"></div>
<div className="w-full bg-slate-700/50 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-slate-700/50 rounded-t-sm h-[65%]"></div>
</div>
</div>

<div className="flex items-start gap-4 max-w-sm mx-auto">
<div className="w-10 h-10 rounded-full border-2 border-slate-800 bg-slate-900 flex items-center justify-center text-white text-xs font-bold">MK</div>
<div>
<div className="flex text-[#EF6741] mb-1.5 w-16">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-sm font-medium text-slate-300 italic mb-2">"L'analytique en temps réel a transformé notre prise de décision marketing."</p>
<div className="text-xs font-semibold text-white">Marc K. <span className="text-slate-500 font-normal">CMO, TechFlow</span></div>
</div>
</div>
</div>

<div className="slide-item flex flex-col items-center justify-center">
<div className="w-full bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl ring-1 ring-white/5 mb-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
<svg className="lucide lucide-kanban" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 5v11"></path><path d="M12 5v6"></path><path d="M18 5v14"></path></svg>
</div>
<div>
<div className="text-sm font-semibold text-white">Sprint Q4</div>
<div className="text-xs text-slate-400">3 tâches en cours</div>
</div>
</div>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-slate-700 border border-slate-900"></div>
<div className="w-6 h-6 rounded-full bg-slate-600 border border-slate-900"></div>
<div className="w-6 h-6 rounded-full bg-slate-500 border border-slate-900 flex items-center justify-center text-[8px] text-white">+2</div>
</div>
</div>
<div className="space-y-3">
<div className="bg-white/5 p-3 rounded-lg border border-white/5 hover:bg-white/10 transition-colors flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<span className="text-sm text-slate-200">Design System Update</span>
</div>
<span className="text-[10px] px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/20">WIP</span>
</div>
<div className="bg-white/5 p-3 rounded-lg border border-white/5 hover:bg-white/10 transition-colors flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-purple-500"></div>
<span className="text-sm text-slate-200">API Integration</span>
</div>
<span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/20">Review</span>
</div>
<div className="bg-white/5 p-3 rounded-lg border border-white/5 hover:bg-white/10 transition-colors flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-sm text-slate-200">Q3 Report Export</span>
</div>
<span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/20">Done</span>
</div>
<div className="bg-white/5 p-3 rounded-lg border border-white/5 hover:bg-white/10 transition-colors flex items-center justify-between opacity-50">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-slate-500"></div>
<span className="text-sm text-slate-200">Landing Page Copy</span>
</div>
<span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-500/20 text-slate-300 border border-slate-500/20">Todo</span>
</div>
</div>
</div>

<div className="flex items-start gap-4 max-w-sm mx-auto">
<div className="w-10 h-10 rounded-full border-2 border-slate-800 bg-slate-900 flex items-center justify-center text-white text-xs font-bold">SL</div>
<div>
<div className="flex text-[#EF6741] mb-1.5 w-16">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-sm font-medium text-slate-300 italic mb-2">"La collaboration n'a jamais été aussi fluide. Une vue d'ensemble parfaite."</p>
<div className="text-xs font-semibold text-white">Sarah L. <span className="text-slate-500 font-normal">PM, Innovate Inc</span></div>
</div>
</div>
</div>

<div className="slide-item flex flex-col items-center justify-center">
<div className="w-full bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl ring-1 ring-white/5 mb-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="p-2 bg-gradient-brand rounded-lg text-white shadow-lg shadow-pink-500/20">
<svg className="lucide lucide-sparkles" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
</div>
<div>
<div className="text-sm font-semibold text-white">Assistant IA</div>
<div className="text-xs text-slate-400">Toujours disponible</div>
</div>
</div>
</div>
<div className="space-y-4 font-sans">

<div className="flex justify-end">
<div className="bg-slate-800 text-slate-200 text-sm py-2 px-4 rounded-2xl rounded-tr-sm max-w-[85%] border border-slate-700">
                                Analyse la croissance du dernier trimestre.
                            </div>
</div>

<div className="flex justify-start items-start gap-3">
<div className="w-6 h-6 rounded-full bg-gradient-brand flex-shrink-0 mt-1"></div>
<div className="bg-white/10 text-slate-200 text-sm py-3 px-4 rounded-2xl rounded-tl-sm max-w-[90%] border border-white/5">
<p className="mb-2">Voici les points clés du T3 :</p>
<ul className="list-disc list-inside space-y-1 text-slate-300 text-xs mb-3">
<li>Revenus : <span className="text-emerald-400 font-medium">+22%</span> vs T2</li>
<li>Fidélisation : <span className="text-emerald-400 font-medium">94%</span> (Record)</li>
<li>Coût d'acquisition : <span className="text-emerald-400 font-medium">-15%</span></li>
</ul>
<div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[78%]"></div>
</div>
</div>
</div>

<div className="flex justify-start items-center gap-3">
<div className="w-6 h-6 rounded-full bg-gradient-brand opacity-50 flex-shrink-0"></div>
<div className="flex gap-1">
<div className="w-1.5 h-1.5 bg-slate-600 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
<div className="w-1.5 h-1.5 bg-slate-600 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
<div className="w-1.5 h-1.5 bg-slate-600 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
</div>
</div>
</div>
</div>

<div className="flex items-start gap-4 max-w-sm mx-auto">
<div className="w-10 h-10 rounded-full border-2 border-slate-800 bg-slate-900 flex items-center justify-center text-white text-xs font-bold">JD</div>
<div>
<div className="flex text-[#EF6741] mb-1.5 w-16">
<svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-3 h-3 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-sm font-medium text-slate-300 italic mb-2">"L'IA comprend exactement ce dont j'ai besoin, quand j'en ai besoin."</p>
<div className="text-xs font-semibold text-white">John D. <span className="text-slate-500 font-normal">Founder, StartUp</span></div>
</div>
</div>
</div>

<div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
<div className="w-12 h-1 rounded-full bg-slate-800 overflow-hidden progress-bar relative">
<div className="bar h-full bg-slate-500 rounded-full absolute left-0 top-0"></div>
</div>
<div className="w-12 h-1 rounded-full bg-slate-800 overflow-hidden progress-bar relative">
<div className="bar h-full bg-slate-500 rounded-full absolute left-0 top-0"></div>
</div>
<div className="w-12 h-1 rounded-full bg-slate-800 overflow-hidden progress-bar relative">
<div className="bar h-full bg-slate-500 rounded-full absolute left-0 top-0"></div>
</div>
</div>
</div>
</div>


    </>
  );
}
