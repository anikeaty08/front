import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) lucide.createIcons();

        const menuBtn = document.getElementById('menuBtn');
        const mobileNav = document.getElementById('mobileNav');
        if (menuBtn && mobileNav) {
          menuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('hidden');
          });
        }

        // Close mobile nav when clicking outside
        document.addEventListener('click', (e) => {
          if (mobileNav && menuBtn && !menuBtn.contains(e.target) && !mobileNav.contains(e.target)) {
            mobileNav.classList.add('hidden');
          }
        });

        const y = document.getElementById('y');
        if (y) y.textContent = new Date().getFullYear();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="aNQ1HJcO2IvNyDCGls8J"></div>
</div>
<a className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-emerald-900 focus:px-4 focus:py-2 font-geist" href="#main" style={{}}>Skip to content</a>

<header className="fixed top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 z-50 flex justify-center">
<div className="mx-auto max-w-7xl w-full">
<div className="mx-auto w-fit rounded-full border border-white/15 bg-emerald-950/90 backdrop-blur-xl shadow-2xl shadow-emerald-900/20">
<div className="flex h-10 sm:h-12 pr-2 sm:pr-3 pl-1 items-center justify-between">

<a className="inline-flex items-center justify-center bg-center sm:w-[80px] sm:h-[40px] mix-blend-screen w-[60px] h-[32px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f42391d8-fe30-4ac9-bb07-714f17de6a67_320w.jpg)] bg-cover rounded-full" href="/home"></a>

<nav className="hidden md:flex items-center gap-4 lg:gap-6 mx-6 lg:mx-8">
<a className="hover:text-emerald-200 transition-colors text-xs font-medium text-slate-200/80 font-geist" href="/platform">Platform</a>
<a className="hover:text-emerald-200 transition-colors text-xs font-medium text-slate-200/80 font-geist" href="/neural">Neural Engine</a>
<a className="hover:text-emerald-200 transition-colors text-xs font-medium text-slate-200/80 font-geist" href="/analytics">Analytics</a>
<a className="hover:text-emerald-200 transition-colors text-xs font-medium text-slate-200/80 font-geist" href="/pricing">Pricing</a>
</nav>

<div className="hidden md:flex items-center gap-2">
<button className="inline-flex gap-1.5 lg:px-4 shadow-emerald-900/25 hover:bg-emerald-100 transition-all text-xs font-medium text-emerald-950 font-geist bg-emerald-200 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 shadow-lg items-center cursor-pointer" onclick="window.location.href='/start'" role="button">
<svg className="lucide lucide-zap" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon></svg>
                Start Training
              </button>
</div>

<button className="md:hidden inline-flex items-center justify-center rounded-full p-1.5 text-slate-200 hover:bg-white/10 transition" id="menuBtn">
<svg className="lucide lucide-menu" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</div>
</div>

<div className="md:hidden hidden mt-2" id="mobileNav">
<div className="mx-auto w-fit rounded-2xl border border-white/15 bg-emerald-950/95 backdrop-blur-xl shadow-2xl shadow-emerald-900/20">
<nav className="flex flex-col gap-1 p-4 min-w-48">
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10 transition-colors font-geist" href="#">Platform</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10 transition-colors font-geist" href="#">Neural Engine</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10 transition-colors font-geist" href="#">Analytics</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10 transition-colors font-geist" href="#">Pricing</a>
<div className="mt-2 pt-2 border-t border-white/10">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-200 px-3 py-2 text-sm font-medium text-emerald-950 hover:bg-emerald-100 transition-all font-geist">
<svg className="lucide lucide-zap" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon></svg>
                  Start Training
                </button>
</div>
</nav>
</div>
</div>
</div>
</header>

<main className="sm:pt-20 pt-16">
<section className="relative overflow-hidden">
<div className="sm:px-6 lg:px-8 lg:pt-24 lg:pb-32 sm:pt-16 sm:pb-20 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-16 pl-4">
<div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20 relative items-center">

<button className="button cursor-pointer mt-1" onclick="window.location.href='/start';window.location.href='/start';window.location.href='/start'" role="button" style={{cursor: 'pointer', border: 'none', background: 'rgb(0, 0, 0)', color: 'rgb(255, 255, 255)', width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', position: 'absolute', display: 'grid', placeContent: 'center', fontWeight: '600', top: '-50px', right: '-50px', zIndex: '20'}}>
<p className="button__text" style={{position: 'absolute', inset: '0', animation: 'text-rotation 8s linear infinite'}}>
<span style={{-Index: '0', position: 'absolute', transform: 'rotate(calc(19deg * var(--index)))', inset: '7px'}}>S</span>
<span style={{-Index: '1', position: 'absolute', transform: 'rotate(calc(19deg * var(--index)))', inset: '7px'}}>T</span>
<span style={{-Index: '2', position: 'absolute', transform: 'rotate(calc(19deg * var(--index)))', inset: '7px'}}>A</span>
<span style={{-Index: '3', position: 'absolute', transform: 'rotate(calc(19deg * var(--index)))', inset: '7px'}}>R</span>
<span className="" style={{-Index: '4', position: 'absolute', transform: 'rotate(calc(19deg * var(--index)))', inset: '7px'}}>T</span>
<span className="" style={{-Index: '5', position: 'absolute', transform: 'rotate(calc(19deg * var(--index)))', inset: '7px'}}> </span>
<span style={{-Index: '6', position: 'absolute', transform: 'rotate(calc(19deg * var(--index)))', inset: '7px'}}></span>
<span style={{-Index: '7', position: 'absolute', transform: 'rotate(calc(19deg * var(--index)))', inset: '78', position: 'absolute', transform: 'rotate(calc(19deg * var(--index)))', inset: '7px'}}>•</span>
<span className="" style={{-Index: '9', position: 'absolute', transform: 'rotate(calc(19deg * var(--index)))', inset: '7px'}}>J</span>
<span className="" style={{-Index: '10', position: 'absolute', transform: 'rotate(calc(19deg * var(--index)))', inset: '7px'}}>O</span>
<span style={{-Index: '11', position: 'absolute', transform: 'rotate(calc(19deg * var(--index)))', inset: '7px'}}>U</span>
<span style={{-Index: '12', position: 'absolute', transform: 'rotate(calc(19deg * var(--index)))', inset: '7px'}}>R</span>
<span className="" style={{-Index: '13', position: 'absolute', transform: 'rotate(calc(19deg * var(--index)))', inset: '7px'}}>N</span>
<span className="" style={{-Index: '14', position: 'absolute', transform: 'rotate(calc(19deg * var(--index)))', inset: '7px'}}>E</span>
<span className="" style={{-Index: '15', position: 'absolute', transform: 'rotate(calc(19deg * var(--index)))', inset: '7px'}}>Y</span>
<span className="" style={{-Index: '16', position: 'absolute', transform: 'rotate(calc(19deg * var(--index)))', inset: '7px'}}> </span>
<span className="" style={{-Index: '17', position: 'absolute', transform: 'rotate(calc(19deg * var(--index)))', inset: '7px'}}>•</span>
</p>
<div className="button__circle" style={{position: 'relative', width: '40px', height: '40px', overflow: 'hidden', background: '#fff', color: '#000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<svg className="button__icon" fill="none" style={{}} viewbox="0 0 14 15" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor"></path>
</svg>
<svg className="button__icon button__icon--copy" fill="none" style={{position: 'absolute', transform: 'translate(-150%, 150%)'}} viewbox="0 0 14 15" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor"></path>
</svg>
</div>
</button>
<style>
    @keyframes text-rotation {
      to {
        rotate: 360deg;
      }
    }
    .button:hover {
      background: #f9e828 !important;
      color: #000 !important;
      transform: scale(1.05) !important;
    }
    .button:hover .button__icon {
      color: #000 !important;
      transform: translate(150%, -150%) !important;
    }
    .button:hover .button__icon--copy {
      transform: translate(0) !important;
    }
  </style>

<div className="lg:text-left text-center">

<div className="inline-flex gap-2 sm:px-4 sm:py-2 sm:text-sm sm:mb-6 text-xs font-medium text-emerald-200 font-geist bg-emerald-400/10 opacity-0 border-emerald-300/20 border rounded-full mb-4 pt-1.5 pr-3 pb-1.5 pl-3 blur-lg translate-y-8 items-center" style={{animation: 'fadeSlideUnblur 0.8s ease-out 0.2s forwards'}}>
<svg className="lucide lucide-brain-cog lucide-brain w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="brain-cog" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(167, 243, 208)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m10.852 14.772-.383.923"></path><path d="m10.852 9.228-.383-.923"></path><path d="m13.148 14.772.382.924"></path><path d="m13.531 8.305-.383.923"></path><path d="m14.772 10.852.923-.383"></path><path d="m14.772 13.148.923.383"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 0 0-5.63-1.446 3 3 0 0 0-.368 1.571 4 4 0 0 0-2.525 5.771"></path><path d="M17.998 5.125a4 4 0 0 1 2.525 5.771"></path><path d="M19.505 10.294a4 4 0 0 1-1.5 7.706"></path><path d="M4.032 17.483A4 4 0 0 0 11.464 20c.18-.311.892-.311 1.072 0a4 4 0 0 0 7.432-2.516"></path><path d="M4.5 10.291A4 4 0 0 0 6 18"></path><path d="M6.002 5.125a3 3 0 0 0 .4 1.375"></path><path d="m9.228 10.852-.923-.383"></path><path d="m9.228 13.148-.923.383"></path><circle cx="12" cy="12" r="3"></circle></svg>
    Neural Enhancement Platform
  </div>
<h1 className="sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] text-4xl tracking-tighter font-geist">
<span className="inline-block opacity-0 blur-md translate-y-12" style={{animation: 'fadeSlideUnblur 1s ease-out 0.6s forwards'}}>Amplify</span>
<span className="inline-block opacity-0 blur-md translate-y-12" style={{animation: 'fadeSlideUnblur 1s ease-out 0.8s forwards'}}>Your</span><br className="hidden sm:block"/>
<span className="text-emerald-200 tracking-tighter font-geist inline-block opacity-0 blur-lg translate-y-16" style={{animation: 'fadeSlideUnblur 1.2s ease-out 1.0s forwards'}}>Mental</span>
<span className="text-emerald-200 tracking-tighter font-geist inline-block opacity-0 blur-lg translate-y-16" style={{animation: 'fadeSlideUnblur 1.2s ease-out 1.2s forwards'}}>Power</span>
</h1>
<p className="leading-relaxed sm:text-lg lg:text-xl lg:max-w-xl sm:mt-6 lg:mx-0 text-base font-medium text-slate-300/90 font-geist opacity-0 max-w-2xl mt-4 mr-auto ml-auto blur-md translate-y-8" style={{animation: 'fadeSlideUnblur 1s ease-out 1.6s forwards'}}>
    Transform your cognitive capacity with AI-powered neural training. Unlock peak focus, enhanced creativity, and accelerated learning through personalized brain optimization.
  </p>
<div className="sm:mt-10 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 lg:justify-start mt-8 items-center justify-center opacity-0 translate-y-12" style={{animation: 'fadeSlideIn 0.8s ease-out 2.0s forwards'}}>
<button className="group relative inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white overflow-hidden font-semibold text-white/70 tracking-tight bg-white/5 border-white/10 border rounded-full pt-[12px] pr-[20px] pb-[12px] pl-[20px] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] items-center justify-center" onclick="window.location.href='/start'" role="button">

<span className="flex items-center gap-3 relative z-10 font-medium transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md font-geist rounded-full">Begin Neural Training <svg className="lucide lucide-arrow-right w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(241, 245, 249)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>

<span className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium font-geist opacity-0 rounded-full blur-md">It's free</span>

<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[2px] rounded-full"></span>

<span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t from-white/10 via-white/5 to-transparent rounded-full"></span>
</button>
<div className="flex items-center gap-3 mt-1 opacity-0 translate-x-8" style={{animation: 'fadeSlideInRight 0.8s ease-out 2.3s forwards'}}>
<div className="flex -space-x-2">
<div className="bg-emerald-400 w-8 sm:w-10 h-8 sm:h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ccc88e1c-938b-4c71-94b9-4e2ce53cf265_320w.jpg)] bg-cover rounded-full opacity-0 scale-90" style={{animation: 'fadeScaleIn 0.6s ease-out 2.5s forwards'}}></div>
<div className="bg-emerald-400 w-8 sm:w-10 h-8 sm:h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f4ecf837-1837-43c6-ad0f-c9931be02bb5_320w.jpg)] bg-cover rounded-full opacity-0 scale-90" style={{animation: '0.6s ease-out 2.7s 1 normal forwards running fadeScaleIn'}}></div>
<div className="bg-emerald-400 w-8 sm:w-10 h-8 sm:h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_320w.jpg)] bg-cover rounded-full opacity-0 scale-90" style={{animation: 'fadeScaleIn 0.6s ease-out 2.9s forwards'}}></div>
</div>
<div className="text-xs sm:text-sm font-geist opacity-0 translate-y-4" style={{animation: 'fadeSlideUp 0.6s ease-out 3.1s forwards'}}>
<div className="text-slate-200 font-medium font-geist">25.8K+ minds enhanced</div>
<div className="text-slate-400 text-xs font-geist">avg 4.2x cognitive boost</div>
</div>
</div>
</div>
<style>
    @keyframes fadeSlideUnblur {
      0% {
        opacity: 0;
        transform: translateY(2rem);
        filter: blur(12px);
      }
      50% {
        opacity: 0.7;
        filter: blur(4px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
        filter: blur(0);
      }
    }

    @keyframes fadeSlideIn {
      0% {
        opacity: 0;
        transform: translateY(3rem);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeSlideInRight {
      0% {
        opacity: 0;
        transform: translateX(2rem);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes fadeSlideUp {
      0% {
        opacity: 0;
        transform: translateY(1rem);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeScaleIn {
      0% {
        opacity: 0;
        transform: scale(0.8);
      }
      60% {
        transform: scale(1.05);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
  </style>
</div>

<div className="sm:max-w-md animate-in fade-in duration-1000 w-full max-w-sm mr-auto ml-auto relative xl:left-16">
<div className="flex flex-col aspect-[3/5] hover:scale-[1.02] sm:hover:scale-[1.03] transition-all duration-300 hover:shadow-3xl group sm:p-6 lg:p-10 bg-center relative overflow-hidden animate-in slide-in-from-bottom duration-700 delay-200 sm:rounded-3xl sm:pt-8 sm:pr-8 sm:pb-8 sm:pl-8 text-white w-full bg-[url(https://cdn.midjourney.com/ae1b3dd4-c5e4-4081-8c95-3b8972906e83/0_0.png)] bg-cover ring-cyan-400/10 ring-1 rounded-2xl pt-6 pr-6 pb-6 pl-6 justify-between" onmouseenter="(function(el){const v=el.querySelector('video'); if(v){v.currentTime=0; v.play().catch(()=&gt;{});}})(this)" onmouseleave="(function(el){const v=el.querySelector('video'); if(v){v.pause(); v.currentTime=0;}})(this)" style={{boxShadow: 'rgba(0, 0, 0, 0.5) 0px 25px 50px -12px, rgba(34, 211, 238, 0.12) 0px 0px 0px 1px'}}>
<div aria-hidden="true" className="absolute inset-0 pointer-events-none">
<video className="w-full h-full object-cover opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-all duration-300" loop="" muted="" playsinline="" preload="metadata" src="https://cdn.midjourney.com/video/9278d030-479c-4a65-9765-709a29643442/0.mp4" webkit-playsinline=""></video>
<div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="space-y-4 sm:space-y-6 relative z-10 animate-in slide-in-from-top duration-700 delay-400">
<div className="flex items-center justify-between">
<svg className="lucide lucide-activity sm:w-8 sm:h-8 group-hover:scale-110 transition-transform w-[24px] h-[24px] text-slate-50" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline className="" points="22,12 18,12 15,21 9,3 6,12 2,12"></polyline></svg>
<span className="sm:px-3 sm:py-1.5 text-xs font-medium text-cyan-200 font-inter bg-cyan-400/20 rounded-full pt-1 pr-2 pb-1 pl-2">Active Session</span>
</div>
<div className="animate-in slide-in-from-left duration-700 delay-500">
<p className="text-xl sm:text-2xl lg:text-3xl tracking-tight font-geist">Focus Deep State</p>
<p className="sm:text-base sm:mt-2 text-sm text-slate-50 font-inter mt-1">Neural Flow Training</p>
</div>
<div className="relative animate-in slide-in-from-right duration-700 delay-600">
<div className="absolute top-0 right-0 text-right">
<p className="sm:text-2xl text-xl text-slate-50 font-geist">12 min</p>
<p className="sm:text-sm text-xs font-light text-slate-50 font-inter">remaining</p>
</div>
</div>
</div>
<div className="relative z-10 animate-in slide-in-from-bottom duration-700 delay-700 border-stone-600/50 border-t pt-4 sm:pt-6 space-y-3 sm:space-y-4">
<p className="leading-relaxed text-xs sm:text-sm text-slate-50 font-inter font-light font-geist">
          Advanced brainwave synchronization for peak cognitive performance and sustained attention.
        </p>
<div className="flex justify-between items-center animate-in fade-in duration-700 delay-800">
<div className="flex items-center gap-2">
<span className="text-xs tracking-wider font-inter font-semibold font-geist">GAMMA WAVES</span>
<svg className="lucide lucide-check-circle w-3 sm:w-4 h-3 sm:h-4 text-cyan-200" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22,4 12,14.01 9,11.01"></polyline></svg>
</div>
<a className="text-cyan-200 text-xs sm:text-sm hover:underline hover:text-cyan-100 transition-colors font-inter font-medium font-geist" href="#">Continue training</a>
</div>
</div>
</div>
</div>
</div>

<div className="sm:mt-20 lg:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-16">
<div className="text-center">
<div className="text-3xl sm:text-4xl text-emerald-200 tracking-tighter font-geist">97%</div>
<div className="text-sm font-medium text-slate-400 font-geist mt-1">Cognitive enhancement</div>
</div>
<div className="text-center">
<div className="text-3xl sm:text-4xl text-emerald-200 tracking-tighter font-geist">3.5hrs</div>
<div className="text-sm font-medium text-slate-400 font-geist mt-1">Peak focus daily</div>
</div>
<div className="text-center">
<div className="text-3xl sm:text-4xl text-emerald-200 tracking-tighter font-geist">420%</div>
<div className="text-sm font-medium text-slate-400 mt-1 font-geist">Learning acceleration</div>
</div>
</div>
</div>
</section>

<div className="w-full pt-6 pr-6 pb-6 pl-6">
<div className="text-center">
<p className="uppercase text-sm font-medium text-white/50 tracking-wide">Powering the world’s most focused product teams
    </p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 mt-6 justify-items-center items-center">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/75e4001a-b289-4167-a867-36117043b6be_320w.jpg)] bg-cover rounded" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5cf997e6-5859-4fcf-8a53-e5e092946c24_320w.jpg)] bg-cover rounded" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/73e97ea2-70df-4f3a-b2b8-4b56b34a3c41_320w.jpg)] bg-cover rounded" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f749ee45-790a-4188-a597-318f494deafd_320w.jpg)] bg-cover rounded" href="#" style={{}}></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d0be6d4e-20c8-4b38-9f16-cfee38392a6b_320w.jpg)] bg-cover rounded" href="#" style={{}}></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a88b5d6e-a467-4bc9-9e3a-8ac6ac068f98_320w.jpg)] bg-cover rounded" href="#"></a>
</div>
</div><section className="sm:px-6 lg:px-8 sm:pb-20 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="mx-auto max-w-4xl text-center">
<span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-medium text-emerald-200 font-geist">Capabilities</span>
<h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight font-geist">
      How we help you <span className="italic text-emerald-200">grow</span>
</h2>
</div>
<div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">

<div className="group sm:rounded-2xl sm:p-8 hover:bg-white/10 transition-colors text-slate-100 bg-white/5 border-white/10 border ring-white/10 ring-1 rounded-xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-xl cursor-pointer" onclick="window.location.href='/neural'" role="button">
<div className="sm:rounded-2xl sm:p-8 sm:mb-6 bg-white/5 h-[300px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3c468a5b-bac3-4c46-bbd7-11259371d88f_800w.jpg)] bg-cover ring-white/10 ring-1 rounded-xl mb-4 pt-6 pr-6 pb-6 pl-6">
</div>
<h3 className="text-lg sm:text-xl font-semibold tracking-tight font-geist">Creative Production</h3>
<p className="mt-2 text-sm font-medium text-slate-300/90 leading-relaxed font-geist">
        Short-form video, UGC, motion design, and visuals engineered to earn attention and drive shares.
      </p>
</div>

<div className="group rounded-xl sm:rounded-2xl border border-white/10 ring-1 ring-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 text-slate-100 hover:bg-white/10 transition-colors">
<div className="sm:rounded-2xl sm:p-8 sm:mb-6 ring-white/10 ring-1 bg-white/5 h-[300px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cfbb535a-374f-4d18-8ede-0f154e2cb923_800w.jpg)] bg-cover rounded-xl mb-4 pt-6 pr-6 pb-6 pl-6">
</div>
<h3 className="text-lg sm:text-xl font-semibold tracking-tight font-geist">Social Media Ops</h3>
<p className="mt-2 text-sm font-medium text-slate-300/90 leading-relaxed font-geist">
        Strategy, content calendar, publishing, community, and inbox—managed end‑to‑end.
      </p>
</div>

<div className="group sm:rounded-2xl sm:p-8 hover:bg-white/10 transition-colors text-slate-100 bg-white/5 border-white/10 border ring-white/10 ring-1 rounded-xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-xl cursor-pointer" onclick="window.location.href='/analytics'" role="button">
<div className="sm:rounded-2xl sm:p-8 sm:mb-6 bg-white/5 h-[300px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/11fc5b28-a0e3-4b98-890b-6f181d24bd1b_800w.jpg)] bg-cover ring-white/10 ring-1 rounded-xl mb-4 pt-6 pr-6 pb-6 pl-6" style={{}}>
</div>
<h3 className="text-lg sm:text-xl font-semibold tracking-tight font-geist">Performance Ads</h3>
<p className="leading-relaxed text-sm font-medium text-slate-300/90 font-geist mt-2">
        Full‑funnel campaigns across Meta, TikTok, and YouTube—optimized for CPA and ROAS.
      </p>
</div>
</div>
<div className="mt-8 sm:mt-10 text-center">
<a className="inline-flex items-center gap-2 sm:px-6 sm:py-3 hover:bg-white/15 hover:border-emerald-300/30 transition-colors text-sm font-semibold text-slate-100 font-geist bg-white/10 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4" href="/pricing">
      See full offering
      <svg className="lucide lucide-arrow-right w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(241, 245, 249)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</section><section className="sm:px-6 lg:px-8 sm:pb-20 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="mx-auto max-w-4xl text-center">
<span className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/15 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-medium text-violet-300 font-geist">Global Network</span>
<h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tighter font-geist">Join 50,000+ cognitive pioneers from 180+ countries</h2>
<p className="mt-3 sm:mt-4 text-sm sm:text-base font-medium text-slate-300/90 font-geist">Connect with neuroscience researchers, peak performers, and cognitive enhancement enthusiasts pushing the boundaries of human potential.</p>
<div className="mt-4 sm:mt-6">
<a className="inline-flex items-center gap-2 sm:px-6 sm:py-3 shadow-emerald-900/25 hover:bg-violet-400 transition-colors text-sm font-semibold text-white font-geist bg-violet-500 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-lg" href="/start">
              Join Neural Network
              <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="relative mt-8 sm:mt-12">
<style>
                @keyframes marquee-left {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
            </style>
<div className="mx-auto max-w-6xl overflow-hidden" style={{maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent), linear-gradient(to top, transparent, black 15%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent), linear-gradient(to top, transparent, black 15%)', maskComposite: 'intersect', WebkitMaskComposite: 'destination-in'}}>
<div className="flex w-max" style={{animation: 'marquee-left 80s linear infinite', willChange: 'transform'}}>
<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-4 flex-shrink-0 pr-2 sm:pr-4">
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_800w.jpg" style={{}}/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/de692cd3-6ed5-40da-b589-663e89889a1c_800w.jpg" style={{}}/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/42dfe760-aef6-44a2-bff9-70aa005c5961_800w.jpg" style={{}}/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c18d9fac-84d4-4727-95df-38b04c62ac05_800w.jpg" style={{}}/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c3e3fffd-33c5-442f-924a-7bc1032b2c0f_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/31996fe3-f9da-42d7-bf65-2cc5d5417271_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5989c16d-4aa3-4351-bfdb-fac959736459_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6c39c735-18f1-4b74-aa61-180fbb2b4770_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cf90a7bf-fee3-4a9d-887b-c46bfea61ba8_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6209234e-73ff-4176-bf91-c05fa95cc596_800w.jpg" style={{outline: 'rgb(245, 158, 11) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3f4ec54c-12b4-4eb2-a0c3-1d78cb6c9e02_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8cfa0961-8c53-4d57-b87c-3b8eaffcd08b_800w.jpg" style={{}}/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/42f0787e-2f7f-4ae7-9c64-3f1d597bf1b8_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c8701b7a-a3f2-4ad0-95be-f2f027c8e390_800w.jpg" style={{}}/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/83ca20c0-64e5-412d-9c79-224a4ae90b74_800w.jpg" style={{}}/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c920d31f-46c8-4f39-957b-9a8d8e511a1a_800w.jpg"/></div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-4 flex-shrink-0 pr-2 sm:pr-4">
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_800w.jpg" style={{}}/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/de692cd3-6ed5-40da-b589-663e89889a1c_800w.jpg" style={{}}/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/42dfe760-aef6-44a2-bff9-70aa005c5961_800w.jpg" style={{}}/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c18d9fac-84d4-4727-95df-38b04c62ac05_800w.jpg" style={{}}/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c3e3fffd-33c5-442f-924a-7bc1032b2c0f_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9a421cf7-e975-430b-88c5-f554775493e1_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0c82a12e-5af1-47d3-963d-65c3987dd2be_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e63aa468-ae44-4756-84db-fcacd6cec9e2_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cf90a7bf-fee3-4a9d-887b-c46bfea61ba8_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6209234e-73ff-4176-bf91-c05fa95cc596_800w.jpg" style={{outline: 'rgb(245, 158, 11) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3f4ec54c-12b4-4eb2-a0c3-1d78cb6c9e02_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8cfa0961-8c53-4d57-b87c-3b8eaffcd08b_800w.jpg" style={{}}/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/42f0787e-2f7f-4ae7-9c64-3f1d597bf1b8_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a160135e-dfe8-4d26-b2e5-2915ebe6f3a2_800w.jpg" style={{}}/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9a3ff98a-df58-478d-a4ae-f3c6d3f3ba61_800w.jpg" style={{}}/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7063bc06-62fe-4811-b5fa-4b1e09b26a81_800w.jpg"/></div>
</div>
</div>
</div>
</div>
</section>
<section className="sm:px-6 lg:px-8 sm:pb-20 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="max-w-2xl mr-auto ml-auto">
<div className="relative sm:rounded-3xl bg-white/5 ring-white/10 ring-1 rounded-2xl shadow-2xl backdrop-blur-xl">

<div className="hidden sm:block absolute -top-4 -right-4">
<div className="rounded-2xl bg-emerald-950 text-white p-3 ring-1 ring-white/10 shadow-lg">
<svg className="lucide lucide-notebook-tabs lucide-asterisk w-[18px] h-[18px]" data-icon-replaced="true" data-lucide="notebook-tabs" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '18px', height: '18px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2 6h4"></path><path d="M2 10h4"></path><path d="M2 14h4"></path><path d="M2 18h4"></path><rect height="20" rx="2" width="16" x="4" y="2"></rect><path d="M15 2v20"></path><path d="M15 7h5"></path><path d="M15 12h5"></path><path d="M15 17h5"></path></svg>
</div>
</div>

<div className="sm:pt-10 sm:pr-8 sm:pb-10 sm:pl-8 pt-8 pr-6 pb-8 pl-6">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 sm:px-4 py-1.5 text-xs font-medium text-slate-200 font-geist">Our vision</span>
<h2 className="sm:mt-6 sm:text-5xl lg:text-6xl text-3xl font-normal text-slate-100 tracking-tight font-geist mt-4">
          Unlocking human potential through <span className="italic text-emerald-200">neural</span> enhancement
        </h2>
<div className="mt-4 sm:mt-6 max-w-3xl text-slate-300/90 font-geist">
<p className="text-sm sm:text-base font-medium leading-relaxed">We partner with visionaries who understand that cognitive enhancement is the next frontier of human evolution.</p>
<p className="mt-3 sm:mt-4 text-sm sm:text-base font-medium leading-relaxed">Not just temporary performance boosts, but sustainable neural optimization that transforms how you think, learn, and create.</p>
<p className="mt-3 sm:mt-4 text-sm sm:text-base font-medium leading-relaxed">For us, neural training is the foundation of everything.</p>
<p className="mt-3 sm:mt-4 text-sm sm:text-base font-medium leading-relaxed">Our approach integrates neuroscience, AI, and personalized protocols. We handle the complexity so you can focus on achieving peak performance.</p>
<p className="mt-3 sm:mt-4 text-sm sm:text-base font-medium leading-relaxed">If you're ready to unlock your mind's true potential, we're here to guide you.</p>
<div className="mt-6 sm:mt-8 inline-flex items-center gap-2">
<span className="inline-flex items-center justify-center rounded-xl bg-emerald-950 text-white w-8 h-8 ring-1 ring-white/10">
<svg className="lucide lucide-brain-cog lucide-brain w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="brain-cog" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m10.852 14.772-.383.923"></path><path d="m10.852 9.228-.383-.923"></path><path d="m13.148 14.772.382.924"></path><path d="m13.531 8.305-.383.923"></path><path d="m14.772 10.852.923-.383"></path><path d="m14.772 13.148.923.383"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 0 0-5.63-1.446 3 3 0 0 0-.368 1.571 4 4 0 0 0-2.525 5.771"></path><path d="M17.998 5.125a4 4 0 0 1 2.525 5.771"></path><path d="M19.505 10.294a4 4 0 0 1-1.5 7.706"></path><path d="M4.032 17.483A4 4 0 0 0 11.464 20c.18-.311.892-.311 1.072 0a4 4 0 0 0 7.432-2.516"></path><path d="M4.5 10.291A4 4 0 0 0 6 18"></path><path d="M6.002 5.125a3 3 0 0 0 .4 1.375"></path><path d="m9.228 10.852-.923-.383"></path><path d="m9.228 13.148-.923.383"></path><circle cx="12" cy="12" r="3"></circle></svg>
</span>
<span className="text-sm sm:text-base font-semibold text-slate-100 font-geist">enhanced</span>
</div>
</div>
</div>
</div>
</div>
</section><section className="sm:px-6 lg:px-8 sm:pb-20 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="mx-auto max-w-4xl text-center">
<span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-medium text-emerald-200 font-geist">Success Stories</span>
<h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tighter font-geist">Transforming minds worldwide</h2>
<p className="mt-3 sm:mt-4 text-sm sm:text-base font-medium text-slate-300/90 font-geist">From Fortune 500 executives to Olympic athletes, discover how neural enhancement is revolutionizing human performance.</p>
</div>
<div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-3 sm:gap-y-4 text-slate-200">
<div className="inline-flex items-center gap-2 opacity-80">
<svg className="lucide lucide-building w-4 sm:w-5 h-4 sm:h-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="16" x="4" y="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
<span className="text-xs sm:text-sm font-medium font-geist">Microsoft</span>
</div>
<div className="inline-flex items-center gap-2 opacity-80">
<svg className="lucide lucide-zap w-4 sm:w-5 h-4 sm:h-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon></svg>
<span className="text-xs sm:text-sm font-medium font-geist">Tesla</span>
</div>
<div className="inline-flex items-center gap-2 opacity-80">
<svg className="lucide lucide-cpu w-4 sm:w-5 h-4 sm:h-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" rx="1" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
<span className="text-xs sm:text-sm font-medium font-geist">Google AI</span>
</div>
<div className="inline-flex items-center gap-2 opacity-80">
<svg className="lucide lucide-trending-up w-4 sm:w-5 h-4 sm:h-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="22,7 13.5,15.5 8.5,10.5 2,17"></polyline><polyline points="16,7 22,7 22,13"></polyline></svg>
<span className="text-xs sm:text-sm font-medium font-geist">Goldman Sachs</span>
</div>
</div>
<div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
<div className="group rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 hover:bg-white/10 transition-colors">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-100 font-geist">"Mind-blowing results"</h3>
<p className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-slate-300/90 leading-relaxed font-geist">Increased my focus span by 300% within 30 days. The neural feedback is incredibly precise and personalized.</p>
<div className="mt-4 sm:mt-6 flex items-center gap-2 sm:gap-3">
<img alt="Avatar" className="h-6 sm:h-8 w-6 sm:w-8 rounded-full object-cover ring-1 ring-white/20" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/65f9f4c9-5fee-4509-9f80-76d4e0d127b3_320w.jpg" style={{}}/>
<div>
<div className="text-xs sm:text-sm font-medium text-slate-200 font-geist">Elena M.</div>
<div className="text-xs text-slate-400 font-geist">Neuroscientist</div>
</div>
</div>
</div>
<div className="group rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 hover:bg-white/10 transition-colors">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-100 font-geist">"Peak performance unlocked"</h3>
<p className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-slate-300/90 leading-relaxed font-geist">My cognitive endurance during competitions improved dramatically. This technology is revolutionary.</p>
<div className="mt-4 sm:mt-6 flex items-center gap-2 sm:gap-3">
<img alt="Avatar" className="h-6 sm:h-8 w-6 sm:w-8 rounded-full object-cover ring-1 ring-white/20" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4f995362-9751-4d89-86fa-a5f7c03be905_800w.jpg"/>
<div className="">
<div className="text-xs sm:text-sm font-medium text-slate-200 font-geist">Marcus K.</div>
<div className="text-xs text-slate-400 font-geist">Chess Grandmaster</div>
</div>
</div>
</div>
<div className="group rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 hover:bg-white/10 transition-colors">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-100 font-geist">"Learning accelerated"</h3>
<p className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-slate-300/90 leading-relaxed font-geist">Mastered advanced calculus in weeks instead of months. The neural pathways optimization is incredible.</p>
<div className="mt-4 sm:mt-6 flex items-center gap-2 sm:gap-3">
<img alt="Avatar" className="h-6 sm:h-8 w-6 sm:w-8 rounded-full object-cover ring-1 ring-white/20" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f61cc77a-f10a-4d52-afbc-b97c21efdff6_320w.jpg"/>
<div className="">
<div className="text-xs sm:text-sm font-medium text-slate-200 font-geist">Aria L.</div>
<div className="text-xs text-slate-400 font-geist">MIT Student</div>
</div>
</div>
</div>
<div className="group rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 hover:bg-white/10 transition-colors">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-100 font-geist">"Creative breakthrough"</h3>
<p className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-slate-300/90 leading-relaxed font-geist">Enhanced my creative flow states beyond what I thought possible. Ideas come effortlessly now.</p>
<div className="mt-4 sm:mt-6 flex items-center gap-2 sm:gap-3">
<img alt="Avatar" className="h-6 sm:h-8 w-6 sm:w-8 rounded-full object-cover ring-1 ring-white/20" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b982e2b7-311b-45e8-bf84-8ad0e40aaf73_320w.jpg"/>
<div>
<div className="text-xs sm:text-sm font-medium text-slate-200 font-geist">David R.</div>
<div className="text-xs text-slate-400 font-geist">Creative Director</div>
</div>
</div>
</div>
</div>
<div className="mt-8 sm:mt-10 text-center">
<a className="inline-flex items-center gap-2 hover:text-teal-200 transition-colors text-sm font-medium text-teal-300 font-geist" href="/pricing">
            Read all success stories
            <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-emerald-950/50">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-8 sm:pt-12 pr-4 pb-8 sm:pb-12 pl-4">
<div className="flex flex-col gap-6 sm:gap-8 sm:flex-row items-center justify-between">
<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[60px] sm:w-[80px] h-[32px] sm:h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f42391d8-fe30-4ac9-bb07-714f17de6a67_320w.jpg)] bg-cover rounded" href="#"></a>
<p className="text-xs sm:text-sm font-medium text-slate-400 font-geist text-center sm:text-left">© <span className="font-geist" id="y">2025</span> FlowMind Technologies. Cognitive enhancement through AI.</p>
</div>
<div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
<a className="text-xs sm:text-sm font-medium text-slate-300 hover:text-emerald-200 transition-colors font-geist" href="#">Neural Privacy</a>
<a className="text-xs sm:text-sm font-medium text-slate-300 hover:text-emerald-200 transition-colors font-geist" href="#">Research Ethics</a>
<a className="inline-flex items-center gap-2 sm:px-4 sm:py-2 sm:text-sm hover:bg-white/10 hover:border-emerald-300/30 transition-all text-xs font-medium text-slate-200 font-geist bg-white/5 border-white/10 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3" href="/pricing">
              24/7 Support
              <svg className="lucide lucide-headphones" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
