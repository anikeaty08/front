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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



      function switchBilling(plan) {
        const monthlyToggle = document.getElementById('monthly-toggle');
        const yearlyToggle = document.getElementById('yearly-toggle');
        const priceAmounts = document.querySelectorAll('.price-amount');
        const billingPeriods = document.querySelectorAll('.billing-period');
        
        if (plan === 'monthly') {
          monthlyToggle.classList.add('active', 'bg-blue-500', 'text-white');
          monthlyToggle.classList.remove('text-neutral-300');
          yearlyToggle.classList.remove('active', 'bg-blue-500', 'text-white');
          yearlyToggle.classList.add('text-neutral-300');
          
          priceAmounts.forEach(price => {
            price.textContent = price.dataset.monthly;
          });
          billingPeriods.forEach(period => {
            period.textContent = 'per month';
          });
        } else {
          yearlyToggle.classList.add('active', 'bg-blue-500', 'text-white');
          yearlyToggle.classList.remove('text-neutral-300');
          monthlyToggle.classList.remove('active', 'bg-blue-500', 'text-white');
          monthlyToggle.classList.add('text-neutral-300');
          
          priceAmounts.forEach(price => {
            price.textContent = price.dataset.yearly;
          });
          billingPeriods.forEach(period => {
            period.textContent = 'per year';
          });
        }
      }
    


    // Tab switching
    const tabs = document.querySelectorAll('.tech-tab');
    const contents = document.querySelectorAll('.tech-content');
    
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        contents.forEach(content => {
          if (content.id === target) {
            content.classList.remove('hidden');
          } else {
            content.classList.add('hidden');
          }
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
      

<div className="aura-background-component top-0 w-full -z-10 absolute h-[900px] saturate-0" data-alpha-mask="70" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 70%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="tCcBHRpF4pd3u3hQXCm5"><div data-us-text="id-fkt21obbim6ccx5w978tpp" style={{width: '1515.52px', top: '269.366px', left: '266.24px', fontSize: '368.64px', lineHeight: '361.267px', letterSpacing: '-11.6942px', fontFamily: 'Outfit', fontWeight: '400', textAlign: 'center', position: 'absolute', wordBreak: 'break-word', transform: 'rotateZ(0deg)', color: 'transparent', zIndex: '2'}}>IMAGI</div><div data-us-text="id-lzjgqxbjhenjt8oojyoy7" style={{width: '1845.89px', top: '264.667px', left: '101.057px', fontSize: '368.64px', lineHeight: '370.665px', letterSpacing: '-11.6942px', fontFamily: 'Outfit', fontWeight: '400', textAlign: 'center', position: 'absolute', wordBreak: 'break-word', transform: 'rotateZ(0deg)', color: 'transparent', zIndex: '2'}}>IMAGI</div><div data-us-text="id-vmgkwzcihbqobf97ibagi" style={{width: '1515.52px', top: '269.366px', left: '266.24px', fontSize: '368.64px', lineHeight: '361.267px', letterSpacing: '-11.6942px', fontFamily: 'Outfit', fontWeight: '400', textAlign: 'center', position: 'absolute', wordBreak: 'break-word', transform: 'rotateZ(0deg)', color: 'transparent', zIndex: '2'}}>IMAGI</div><div data-us-text="id-pcnnznb1ehloiad3ctkio" style={{width: '1845.89px', top: '264.667px', left: '101.057px', fontSize: '368.64px', lineHeight: '370.665px', letterSpacing: '-11.6942px', fontFamily: 'Outfit', fontWeight: '400', textAlign: 'center', position: 'absolute', wordBreak: 'break-word', transform: 'rotateZ(0deg)', color: 'transparent', zIndex: '2'}}>IMAGI</div><div data-us-text="id-j9r1rmagiukmr6q4fa4zpj" style={{width: '1515.52px', top: '269.366px', left: '266.24px', fontSize: '368.64px', lineHeight: '361.267px', letterSpacing: '-11.6942px', fontFamily: 'Outfit', fontWeight: '400', textAlign: 'center', position: 'absolute', wordBreak: 'break-word', transform: 'rotateZ(0deg)', color: 'transparent', zIndex: '2'}}>IMAGI</div><div data-us-text="id-ofybp120d3bbi5dz3qrbg" style={{width: '1845.89px', top: '264.667px', left: '101.057px', fontSize: '368.64px', lineHeight: '370.665px', letterSpacing: '-11.6942px', fontFamily: 'Outfit', fontWeight: '400', textAlign: 'center', position: 'absolute', wordBreak: 'break-word', transform: 'rotateZ(0deg)', color: 'transparent', zIndex: '2'}}>IMAGI</div><div data-us-text="id-keyup46dpaoyoem1dxy5i" style={{width: '1515.52px', top: '269.366px', left: '266.24px', fontSize: '368.64px', lineHeight: '361.267px', letterSpacing: '-11.6942px', fontFamily: 'Outfit', fontWeight: '400', textAlign: 'center', position: 'absolute', wordBreak: 'break-word', transform: 'rotateZ(0deg)', color: 'transparent', zIndex: '2'}}>IMAGI</div><div data-us-text="id-m2whoxjvqtmriar4pcdr" style={{width: '1845.89px', top: '264.667px', left: '101.057px', fontSize: '368.64px', lineHeight: '370.665px', letterSpacing: '-11.6942px', fontFamily: 'Outfit', fontWeight: '400', textAlign: 'center', position: 'absolute', wordBreak: 'break-word', transform: 'rotateZ(0deg)', color: 'transparent', zIndex: '2'}}>IMAGI</div></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b bg-black/80 border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b7b62de7-6452-47f2-8d54-a6a4e9b58f09_320w.png)] bg-cover rounded-full" href="#"></a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm transition-colors text-zinc-300 hover:text-white" href="#features">Features</a>
<a className="text-sm transition-colors text-zinc-300 hover:text-white" href="#integrations">Integrations</a>
<a className="text-sm transition-colors text-zinc-300 hover:text-white" href="#pricing">Pricing</a>
<a className="text-sm transition-colors text-zinc-300 hover:text-white" href="#">Docs</a>
</div>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<button className="group inline-flex min-w-[100px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.1] font-semibold tracking-tight rounded-full pt-2 pr-4 pb-2 pl-4 relative items-center justify-center hover:text-white text-white/70" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)', background: 'radial-gradient(ellipse at bottom,rgba(71,81,92,1) 0%,rgba(0,0,0,1) 100%)'}}>
<span className="text-sm font-normal z-10 relative">Sign Up</span>

<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
</div>
</div>
</div>
</nav>

<section className="z-10 pt-24 relative" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 75%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 75%, transparent)'}}>
<div className="sm:px-6 lg:px-8 sm:pt-16 bg-center max-w-6xl bg-cover mt-0 mr-auto ml-auto pr-4 pl-4">
<div className="flex flex-col text-center mr-auto ml-auto space-y-6 items-center">
<div className="mb-2">
<span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur border-white/10 bg-white/5 text-zinc-200">
<svg className="h-3.5 w-3.5 text-violet-300" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
            New: AI Recaps for threads
          </span>
</div>
<h1 className="sm:text-6xl md:text-7xl text-4xl font-light tracking-tighter text-white">
          Conversations that move work forward
        </h1>
<p className="max-w-2xl sm:text-lg text-base text-zinc-300">
          Realtime messaging, channels, voice notes, and AI summaries—secure by default and lightning fast across devices.
        </p>
<div className="flex flex-wrap mt-6 mb-0 pb-[54px] gap-x-3 gap-y-3 items-center justify-center">
<button className="button" type="button">
<div className="points_wrapper">
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
</div>
<span className="inner">Get Started <svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg></span>
<style className="">
              .button {
                cursor: pointer;
                position: relative;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
                transition: all 0.25s ease;
                background: radial-gradient(65.28% 65.28% at 50% 100%,
                    rgba(34, 211, 238, 0.8) 0%,
                    rgba(34, 211, 238, 0) 100%),
                  linear-gradient(0deg, #2563eb, #2563eb);
                border-radius: 9999px;
                border: none;
                outline: none;
                padding: 12px 18px;
                min-height: 48px;
                min-width: 102px;
              }
            
              .button::before,
              .button::after {
                content: "";
                position: absolute;
                transition: all 0.5s ease-in-out;
                z-index: 0;
              }
            
              .button::before {
                inset: 1px;
                background: linear-gradient(177.95deg,
                    rgba(255, 255, 255, 0.19) 0%,
                    rgba(255, 255, 255, 0) 100%);
                border-radius: 9999px;
              }
            
              .button::after {
                inset: 2px;
                background: radial-gradient(65.28% 65.28% at 50% 100%,
                    rgba(34, 211, 238, 0.8) 0%,
                    rgba(34, 211, 238, 0) 100%),
                  linear-gradient(0deg, #2563eb, #2563eb);
                border-radius: 9999px;
              }
            
              .button:active {
                transform: scale(0.95);
              }
            
              .points_wrapper {
                overflow: hidden;
                width: 100%;
                height: 100%;
                pointer-events: none;
                position: absolute;
                z-index: 1;
              }
            
              .points_wrapper .point {
                bottom: -10px;
                position: absolute;
                animation: floating-points infinite ease-in-out;
                pointer-events: none;
                width: 2px;
                height: 2px;
                background-color: #fff;
                border-radius: 9999px;
              }
            
              @keyframes floating-points {
                0% {
                  transform: translateY(0);
                }
                85% {
                  opacity: 0;
                }
                100% {
                  transform: translateY(-55px);
                  opacity: 0;
                }
              }
            
              .points_wrapper .point:nth-child(1) {
                left: 10%;
                opacity: 1;
                animation-duration: 2.35s;
                animation-delay: 0.2s;
              }
            
              .points_wrapper .point:nth-child(2) {
                left: 30%;
                opacity: 0.7;
                animation-duration: 2.5s;
                animation-delay: 0.5s;
              }
            
              .points_wrapper .point:nth-child(3) {
                left: 25%;
                opacity: 0.8;
                animation-duration: 2.2s;
                animation-delay: 0.1s;
              }
            
              .points_wrapper .point:nth-child(4) {
                left: 44%;
                opacity: 0.6;
                animation-duration: 2.05s;
              }
            
              .points_wrapper .point:nth-child(5) {
                left: 50%;
                opacity: 1;
                animation-duration: 1.9s;
              }
            
              .points_wrapper .point:nth-child(6) {
                left: 75%;
                opacity: 0.5;
                animation-duration: 1.5s;
                animation-delay: 1.5s;
              }
            
              .points_wrapper .point:nth-child(7) {
                left: 88%;
                opacity: 0.9;
                animation-duration: 2.2s;
                animation-delay: 0.2s;
              }
            
              .points_wrapper .point:nth-child(8) {
                left: 58%;
                opacity: 0.8;
                animation-duration: 2.25s;
                animation-delay: 0.2s;
              }
            
              .points_wrapper .point:nth-child(9) {
                left: 98%;
                opacity: 0.6;
                animation-duration: 2.6s;
                animation-delay: 0.1s;
              }
            
              .points_wrapper .point:nth-child(10) {
                left: 65%;
                opacity: 1;
                animation-duration: 2.5s;
                animation-delay: 0.2s;
              }
            
              .inner {
                z-index: 2;
                gap: 6px;
                position: relative;
                width: 100%;
                color: white;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 16px;
                font-weight: 500;
                line-height: 1.5;
                transition: color 0.2s ease-in-out;
              }
            
              .inner svg.icon {
                width: 18px;
                height: 18px;
                transition: transform 0.3s ease;
                stroke: white;
                fill: none;
              }
            
              .button:hover svg.icon {
                transform: translateX(2px);
              }
            
              .button:hover svg.icon path {
                animation: dash 0.8s linear forwards;
              }
            
              @keyframes dash {
                0% {
                  stroke-dasharray: 0, 20;
                  stroke-dashoffset: 0;
                }
                50% {
                  stroke-dasharray: 10, 10;
                  stroke-dashoffset: -5;
                }
                100% {
                  stroke-dasharray: 20, 0;
                  stroke-dashoffset: -10;
                }
              }
            </style>
</button>
<a className="inline-flex items-center gap-2 text-sm font-medium border rounded-full pt-2.5 pr-5 pb-2.5 pl-5 backdrop-blur-lg hover:bg-white/5 text-zinc-200 border-white/10" href="#">
<svg className="h-4 w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
            See how it works
          </a>
</div>
</div>

<div className="overflow-hidden window-shadow bg-[#0e0f14] w-full h-full max-w-6xl max-h-[700px] border-white/10 border rounded-xl">

<div className="traffic-lights flex bg-[#1c1d26] border-white/5 border-b items-center">
<div className="flex gap-2 pr-4 pl-4 gap-x-2 gap-y-2">
<div className="traffic-light close"></div>
<div className="traffic-light minimize"></div>
<div className="traffic-light maximize"></div>
</div>
<div className="flex-1 text-center pr-20">
<span className="text-xs font-medium text-slate-400">Query</span>
</div>
</div>

<div className="h-[calc(100%-44px)] flex">

<aside className="w-64 flex flex-col sidebar-bg border-r border-white/5">

<div className="flex items-center gap-3 px-5 py-4 border-b border-white/5">
<svg className="lucide lucide-bot w-5 h-5 text-blue-500" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 8V4H8"></path>
<rect className="" height="12" rx="2" width="16" x="4" y="8"></rect>
<path className="" d="M2 14h2"></path>
<path className="" d="M20 14h2"></path>
<path className="" d="M15 13v2"></path>
<path className="" d="M9 13v2"></path>
</svg>
<h1 className="font-semibold text-base text-white">Sonai</h1>
<button className="ml-auto p-1.5 rounded-md transition-colors hover:bg-white/5">
<svg className="lucide lucide-settings w-4 h-4 text-slate-400" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
<circle className="" cx="12" cy="12" r="3"></circle>
</svg>
</button>
</div>

<div className="flex items-center gap-3 px-5 py-3">
<img alt="User avatar" className="w-7 h-7 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/bd911a8c-0e75-4ab6-b048-7770f2843c83_320w.webp"/>
<span className="text-sm font-medium text-white">Sonai</span>
</div>

<div className="px-5 pb-3">
<div className="relative">
<input className="w-full rounded-md bg-[#0e0f14] text-xs placeholder-slate-500 py-1.5 pl-7 pr-3 border focus:border-blue-500/50 focus:outline-none transition-all border-white/5" placeholder="Search chats..." type="text"/>
<svg className="lucide lucide-search absolute left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m21 21-4.34-4.34"></path>
<circle className="" cx="11" cy="11" r="8"></circle>
</svg>
</div>
</div>

<nav className="flex-1 overflow-y-auto px-3 space-y-5 py-2">
<div className="">
<h3 className="px-2 mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            Features
          </h3>
<ul className="space-y-0.5">
<li className="">
<a className="flex items-center gap-2.5 px-2 py-1.5 rounded-md transition-colors text-xs hover:bg-white/5 text-slate-300" href="#">
<svg className="lucide lucide-layout-grid w-4 h-4" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="7" rx="1" width="7" x="3" y="3"></rect>
<rect className="" height="7" rx="1" width="7" x="14" y="3"></rect>
<rect className="" height="7" rx="1" width="7" x="14" y="14"></rect>
<rect className="" height="7" rx="1" width="7" x="3" y="14"></rect>
</svg>
                Dashboard
              </a>
</li>
<li className="">
<a className="flex items-center gap-2.5 px-2 py-1.5 rounded-md bg-blue-500/15 text-xs font-medium text-blue-400" href="#">
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
</svg>
                AI Chat
              </a>
</li>
<li className="">
<a className="flex items-center gap-2.5 px-2 py-1.5 rounded-md transition-colors text-xs hover:bg-white/5 text-slate-300" href="#">
<svg className="lucide lucide-book w-4 h-4" data-lucide="book" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path>
</svg>
                Library
              </a>
</li>
<li className="">
<a className="flex items-center gap-2.5 px-2 py-1.5 rounded-md transition-colors text-xs hover:bg-white/5 text-slate-300" href="#">
<svg className="lucide lucide-package w-4 h-4" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
<path className="" d="M12 22V12"></path>
<polyline className="" points="3.29 7 12 12 20.71 7"></polyline>
<path className="" d="m7.5 4.27 9 5.15"></path>
</svg>
                Plugins
              </a>
</li>
</ul>
</div>
<div className="">
<h3 className="px-2 mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            Recent
          </h3>
<ul className="space-y-0.5 text-xs">
<li className="">
<a className="block truncate px-2 py-1.5 rounded-md transition-colors hover:bg-white/5 text-slate-300" href="#">
                Retro style image generation with...
              </a>
</li>
<li className="">
<a className="block truncate px-2 py-1.5 rounded-md transition-colors hover:bg-white/5 text-slate-300" href="#">
                Text for a business solution for a...
              </a>
</li>
<li className="">
<a className="block truncate px-2 py-1.5 rounded-md transition-colors hover:bg-white/5 text-slate-300" href="#">
                Making a healthy eating plan
              </a>
</li>
<li className="">
<a className="block truncate px-2 py-1.5 rounded-md transition-colors hover:bg-white/5 text-slate-300" href="#">
                Video rendering and generation...
              </a>
</li>
</ul>
</div>
</nav>

<div className="p-3 bg-gradient-to-br from-blue-500/20 via-indigo-500/20 m-3 rounded-lg border border-blue-500/20 to-purple-600/20" style={{}}>
<h4 className="text-xs font-semibold mb-1.5 text-white">
          Invite Teammates
        </h4>
<p className="text-[10px] mb-2 text-slate-300">
          Add team members to collaborate.
        </p>
<div className="flex -space-x-1.5 mb-2">
<img className="w-5 h-5 rounded-full border border-[#1c1d26] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ca687bcc-f3d6-4ed6-9efe-e0fd4cbe69a9_320w.webp"/>
<img className="w-5 h-5 rounded-full border border-[#1c1d26] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d74688b7-be82-48a3-9cec-f76b3dab7664_320w.webp"/>
<img className="w-5 h-5 rounded-full border border-[#1c1d26] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ce224171-c77b-4f9d-bcb4-78d291d25746_320w.webp"/>
</div>
<button className="w-full text-center text-[10px] py-1.5 rounded-md font-medium transition-colors bg-white/10 hover:bg-white/15 text-white">
                Invite
              </button>
</div>
</aside>

<section className="flex-1 flex flex-col bg-[#0e0f14]">

<header className="px-6 py-4 border-b border-white/5">
<h2 className="text-lg font-semibold tracking-tight text-white">
          Chat with Command D+
        </h2>
<p className="text-[11px] mt-0.5 text-slate-400">
          Interactive tool for web searches, sourcing, research, drafting,
          debugging and beyond
        </p>
</header>

<div className="flex-1 overflow-y-auto p-6 star-bg">
<div className="flex flex-col items-start gap-2 mb-6 group relative" data-message-id="msg-1">
<span className="text-[10px] text-slate-500 font-medium">
                  Sonai
                </span>
<div className="bg-[#1a1b23] text-sm p-3.5 rounded-xl rounded-tl-sm max-w-lg border text-slate-100 border-white/5">
            A surreal scene with a large floating rock in a foggy minimal
            environment...
          </div>
<button className="absolute -right-6 top-8 p-1 rounded-md transition-colors opacity-0 group-hover:opacity-100 hover:bg-white/10" onclick="removeMessage('msg-1')">
<svg className="lucide lucide-x w-3.5 h-3.5 text-slate-400 hover:text-red-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M18 6 6 18"></path>
<path className="" d="m6 6 12 12"></path>
</svg>
</button>
</div>
<div className="flex gap-4 items-start mb-6 group relative" data-message-id="msg-2">
<div className="flex flex-col items-center gap-2">
<div className="rounded-lg overflow-hidden shadow-xl border border-white/10">
<img className="h-44 w-32 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/97468273-333f-45d7-8939-24c254816fef_320w.webp"/>
</div>
<div className="flex gap-1.5">
<button className="p-1.5 rounded-md transition-colors group hover:bg-white/10">
<svg className="lucide lucide-heart w-3.5 h-3.5 group-hover:text-red-400 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
<button className="p-1.5 rounded-md transition-colors group hover:bg-white/10" onclick="regenerateOutput('msg-2')">
<svg className="lucide lucide-refresh-cw w-3.5 h-3.5 group-hover:text-white text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
<path className="" d="M21 3v5h-5"></path>
<path className="" d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
<path className="" d="M8 16H3v5"></path>
</svg>
</button>
<button className="p-1.5 rounded-md transition-colors group hover:bg-white/10">
<svg className="lucide lucide-copy w-3.5 h-3.5 group-hover:text-white text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="14" rx="2" ry="2" width="14" x="8" y="8"></rect>
<path className="" d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
</svg>
</button>
<button className="p-1.5 rounded-md transition-colors group hover:bg-white/10" onclick="downloadOutput('msg-2')">
<svg className="lucide lucide-download w-3.5 h-3.5 group-hover:text-white text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline className="" points="7 10 12 15 17 10"></polyline>
<line className="" x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</button>
</div>
</div>
<div className="bg-[#1a1b23] text-sm p-3.5 rounded-xl rounded-tl-sm max-w-md border text-slate-100 border-white/5">
            Here is the floating rock in a foggy minimal environment. The
            scene captures a mystical atmosphere with soft lighting and
            ethereal qualities.
          </div>
<button className="absolute -right-6 top-2 p-1 rounded-md transition-colors opacity-0 group-hover:opacity-100 hover:bg-white/10" onclick="removeMessage('msg-2')">
<svg className="lucide lucide-x w-3.5 h-3.5 text-slate-400 hover:text-red-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M18 6 6 18"></path>
<path className="" d="m6 6 12 12"></path>
</svg>
</button>
</div>
<div className="flex gap-2 mb-4">
<span className="inline-flex items-center gap-1.5 bg-[#242633] rounded-md px-2.5 py-1 text-[10px] border text-white border-white/10">
<svg className="lucide lucide-box w-3 h-3" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
<path className="" d="m3.3 7 8.7 5 8.7-5"></path>
<path className="" d="M12 22V12"></path>
</svg>
                  3D Object
                </span>
<span className="inline-flex items-center gap-1.5 bg-[#242633] rounded-md px-2.5 py-1 text-[10px] border text-white border-white/10">
<svg className="lucide lucide-file-text w-3 h-3" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path className="" d="M14 2v4a2 2 0 0 0 2 2h4"></path>
<path className="" d="M10 9H8"></path>
<path className="" d="M16 13H8"></path>
<path className="" d="M16 17H8"></path>
</svg>
                  Documentation
                </span>
</div>
</div>

<div className="border-t p-5 bg-[#0e0f14] border-white/5">
<div className="flex items-center gap-2 bg-[#1a1b23] rounded-lg px-3 border focus-within:border-blue-500/50 transition-colors border-white/5">
<input accept="image/*,text/*,.txt,.md,.pdf,.doc,.docx" className="hidden" id="file-input" multiple="" onchange="handleFileSelect(event)" type="file"/>
<button className="p-1.5 rounded-md transition-colors hover:bg-white/10" onclick="document.getElementById('file-input').click()">
<svg className="lucide lucide-paperclip w-4 h-4 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
</svg>
</button>
<input className="flex-1 border-none focus:ring-0 focus:outline-none placeholder-slate-500 text-sm bg-transparent pt-2.5 pb-2.5 text-white" id="message-input" onkeydown="if(event.key === 'Enter') sendMessage()" placeholder="Message Sonai..." type="text"/>
<button className="p-1.5 rounded-md bg-blue-500 transition-colors text-white hover:bg-blue-600" onclick="sendMessage()">
<svg className="lucide lucide-send w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
<path className="" d="m21.854 2.147-10.94 10.939"></path>
</svg>
</button>
</div>
<div className="mt-2 flex flex-wrap gap-2" id="file-previews"></div>
<p className="mt-2 text-[10px] text-slate-500 text-center">
          Sonai may display inaccurate information. Please verify details.
        </p>
</div>
</section>

<aside className="w-64 sidebar-bg border-l flex flex-col overflow-hidden border-white/5">

<header className="px-5 py-4 border-b flex items-center gap-2 border-white/5">
<h3 className="text-sm font-semibold flex-1 text-white">AI Module</h3>
<select className="text-[11px] bg-[#0e0f14] rounded-md border py-1 px-2 focus:outline-none focus:border-blue-500/50 text-white border-white/10">
<option>Sonai 3.5</option>
<option>Sonai 4</option>
</select>
</header>

<div className="flex border-b border-white/5">
<button className="flex-1 py-2.5 text-[10px] font-semibold tracking-wider relative transition-colors text-white hover:bg-white/5">
                TOOLS
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-500"></span>
</button>
<button className="flex-1 py-2.5 text-[10px] font-semibold tracking-wider transition-colors text-slate-400 hover:bg-white/5 hover:text-white">
                FILES
              </button>
</div>

<div className="flex-1 overflow-y-auto pt-4 pr-5 pb-4 pl-5 space-y-6">

<div className="">
<div className="flex items-center gap-2 mb-3">
<h4 className="text-xs font-semibold flex-1 text-white">
              Your Projects
            </h4>
<button className="text-[10px] bg-blue-500/20 px-2 py-0.5 rounded hover:bg-blue-500/30 transition-colors text-blue-400">
                    New
                  </button>
</div>
<ul className="space-y-2 text-xs">
<li className="">
<label className="flex items-center gap-2 cursor-pointer group">
<input className="w-3.5 h-3.5 focus:ring-blue-500 focus:ring-offset-0 text-blue-500 bg-transparent rounded border-slate-600" type="checkbox"/>
<span className="group-hover:text-white transition-colors text-slate-300">
                        Team Project
                      </span>
</label>
</li>
<li className="">
<details className="group" open="">
<summary className="flex items-center gap-2 cursor-pointer list-none">
<input className="w-3.5 h-3.5 rounded text-blue-500 focus:ring-blue-500 focus:ring-offset-0 bg-transparent border-slate-600" type="checkbox"/>
<span className="font-medium flex-1 text-white">
                          Personal Project
                        </span>
<svg className="lucide lucide-chevron-down w-3.5 h-3.5 transition-transform group-open:rotate-180 text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<ul className="mt-1.5 pl-5 space-y-1 text-[11px] text-slate-400">
<li className="cursor-pointer transition-colors hover:text-slate-300">
                    Retro style image generation wit...
                  </li>
<li className="cursor-pointer transition-colors hover:text-slate-300">
                    Text for a business solution for a...
                  </li>
</ul>
</details>
</li>
<li className="">
<label className="flex items-center gap-2 cursor-pointer group">
<input className="w-3.5 h-3.5 rounded text-blue-500 focus:ring-blue-500 focus:ring-offset-0 bg-transparent border-slate-600" type="checkbox"/>
<span className="group-hover:text-white transition-colors text-slate-300">
                        Custom Project
                      </span>
</label>
</li>
</ul>
</div>

<div className="">
<h4 className="text-xs font-semibold mb-3 text-white">
    Integrate Apps
  </h4>
<ul className="space-y-3 text-xs">
<li className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="w-4 h-4 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="1.5" width="3" x="13" y="2"></rect>
<path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path>
<rect height="8" rx="1.5" width="3" x="8" y="14"></rect>
<path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path>
<rect height="3" rx="1.5" width="8" x="14" y="13"></rect>
<path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path>
<rect height="3" rx="1.5" width="8" x="2" y="8"></rect>
<path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path>
</svg>
<span className="text-slate-300">Slack</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" onchange="this.nextElementSibling.classList.toggle('bg-blue-500'); this.nextElementSibling.classList.toggle('bg-slate-700'); this.nextElementSibling.firstElementChild.style.transform = this.checked ? 'translateX(20px)' : 'translateX(0)';" type="checkbox"/>
<span className="relative inline-block w-10 h-5 bg-blue-500 rounded-full transition-colors">
<span className="absolute left-0.5 top-0.5 w-4 h-4 rounded-full transition-transform bg-white" style={{transform: 'translateX(20px)'}}></span>
</span>
</label>
</li>
<li className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="w-4 h-4 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
<rect height="12" rx="2" width="14" x="2" y="6"></rect>
</svg>
<span className="text-slate-300">Zoom</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" onchange="this.nextElementSibling.classList.toggle('bg-blue-500'); this.nextElementSibling.classList.toggle('bg-slate-700'); this.nextElementSibling.firstElementChild.style.transform = this.checked ? 'translateX(20px)' : 'translateX(0)';" type="checkbox"/>
<span className="relative inline-block w-10 h-5 bg-blue-500 rounded-full transition-colors">
<span className="absolute left-0.5 top-0.5 w-4 h-4 rounded-full transition-transform bg-white" style={{transform: 'translateX(20px)'}}></span>
</span>
</label>
</li>
<li className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="w-4 h-4 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
<rect height="14" rx="2" width="20" x="2" y="6"></rect>
</svg>
<span className="text-slate-300">Upwork</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" onchange="this.nextElementSibling.classList.toggle('bg-blue-500'); this.nextElementSibling.classList.toggle('bg-slate-700'); this.nextElementSibling.firstElementChild.style.transform = this.checked ? 'translateX(20px)' : 'translateX(0)';" type="checkbox"/>
<span className="inline-block transition-colors w-10 h-5 rounded-full relative bg-slate-700">
<span className="absolute left-0.5 top-0.5 w-4 h-4 rounded-full transition-transform bg-white" style={{transform: 'translateX(0)'}}></span>
</span>
</label>
</li>
</ul>
</div>
</div>
</aside>
</div>
</div>
</div>
</section>

<section className="z-10 pt-24 pb-24 relative" id="integrations">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="animate-in text-center">
<span className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] ring-1 uppercase tracking-tight bg-blue-400/10 text-blue-300 ring-blue-300/20">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path></svg>
          Integrations
        </span>
<h2 className="sm:text-5xl text-4xl font-semibold tracking-tight mt-4" style={{maskImage: 'linear-gradient(90deg, transparent, black 0%, black 50%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 0%, black 50%, transparent)'}}>
      Connect your entire tech stack
    </h2>
<p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-neutral-300">
      One platform, infinite possibilities. Sync with all your favorite tools.
    </p>
</div>
<div className="relative mx-auto mt-12 max-w-4xl">
<div className="animate-in stagger-delay-1 flex items-center justify-center gap-6 sm:gap-10 flex-wrap">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="h-5 w-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</span>
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="h-5 w-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="1.5" width="3" x="13" y="2"></rect><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path><rect height="8" rx="1.5" width="3" x="8" y="14"></rect><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path><rect height="3" rx="1.5" width="8" x="14" y="13"></rect><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path><rect height="3" rx="1.5" width="8" x="2" y="8"></rect><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path></svg>
</span>
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="h-5 w-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><rect height="9" width="3" x="7" y="7"></rect><rect height="5" width="3" x="14" y="7"></rect></svg>
</span>
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="h-5 w-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
</span>
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="h-5 w-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</span>
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="h-5 w-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
</span>
</div>
<div className="animate-in stagger-delay-2 relative mt-6 h-64">
<svg className="absolute inset-0 w-full h-full" fill="none" viewbox="0 0 900 360">
<circle cx="150" cy="30" fill="#3B82F6" filter="url(#glow)" r="4">
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle cx="270" cy="30" fill="#3B82F6" filter="url(#glow)" r="4">
<animate attributename="opacity" begin="0.2s" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle cx="390" cy="30" fill="#3B82F6" filter="url(#glow)" r="4">
<animate attributename="opacity" begin="0.4s" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle cx="510" cy="30" fill="#3B82F6" filter="url(#glow)" r="4">
<animate attributename="opacity" begin="0.6s" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle cx="630" cy="30" fill="#3B82F6" filter="url(#glow)" r="4">
<animate attributename="opacity" begin="0.8s" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle cx="750" cy="30" fill="#3B82F6" filter="url(#glow)" r="4">
<animate attributename="opacity" begin="1s" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<path d="M450 300 C 450 200, 300 120, 150 30" fill="none" stroke="#3B82F6" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '600', strokeDashoffset: '600'}}>
<animate attributename="stroke-dashoffset" begin="0s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="600;0;600"></animate>
</path>
<path d="M450 300 C 450 210, 360 130, 270 30" fill="none" stroke="#3B82F6" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '520', strokeDashoffset: '520'}}>
<animate attributename="stroke-dashoffset" begin="0.2s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="520;0;520"></animate>
</path>
<path d="M450 300 C 450 150, 420 80, 390 30" fill="none" stroke="#3B82F6" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '450', strokeDashoffset: '450'}}>
<animate attributename="stroke-dashoffset" begin="0.4s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="450;0;450"></animate>
</path>
<path d="M450 300 C 450 150, 480 80, 510 30" fill="none" stroke="#3B82F6" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '450', strokeDashoffset: '450'}}>
<animate attributename="stroke-dashoffset" begin="0.6s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="450;0;450"></animate>
</path>
<path d="M450 300 C 450 210, 540 130, 630 30" fill="none" stroke="#3B82F6" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '520', strokeDashoffset: '520'}}>
<animate attributename="stroke-dashoffset" begin="0.8s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="520;0;520"></animate>
</path>
<path d="M450 300 C 450 200, 600 120, 750 30" fill="none" stroke="#3B82F6" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '600', strokeDashoffset: '600'}}>
<animate attributename="stroke-dashoffset" begin="1s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="600;0;600"></animate>
</path>
</svg>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2">
<span className="inline-flex h-12 w-12 items-center justify-center rounded-xl ring-2 bg-blue-400/20 ring-blue-300/40" style={{boxShadow: '0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59,130,246,0.3)'}}>
<svg className="h-6 w-6 text-blue-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</span>
</div>
</div>
</div>
<div className="animate-in stagger-delay-3 mx-auto mt-12 max-w-4xl">
<div className="flex items-center justify-center gap-3 flex-wrap text-sm">
<div className="inline-flex items-center gap-2">
<svg className="h-4 w-4 text-blue-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="8" rx="2" width="8" x="3" y="3"></rect>
<path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
<rect height="8" rx="2" width="8" x="13" y="13"></rect>
</svg>
<span className="font-medium">Instant sync</span>
</div>
<div className="hidden sm:block w-24 h-px border-t border-dashed border-blue-300/40"></div>
<div className="inline-flex items-center gap-2">
<svg className="h-4 w-4 text-blue-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
</path>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="font-medium">Enterprise security</span>
</div>
<div className="hidden sm:block w-24 h-px border-t border-dashed border-blue-300/40"></div>
<div className="inline-flex items-center gap-2">
<svg className="h-4 w-4 text-blue-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 14 4-4"></path>
<path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
</svg>
<span className="font-medium">Real-time updates</span>
</div>
</div>
</div>
</div>
</section><section className="z-10 bg-neutral-950 pt-24 pb-24 relative">

<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute left-1/2 -translate-x-1/2 -top-16 w-[42rem] h-[42rem] rounded-full bg-gradient-to-b via-blue-500/10 to-transparent blur-3xl from-indigo-600/15"></div>
</div>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">

<div className="text-center mb-16">
<span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur mb-4 border-white/10 bg-white/5 text-zinc-200">
<svg className="h-3.5 w-3.5 text-blue-300" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
        Powerful Features
      </span>
<h2 className="sm:text-5xl text-4xl font-semibold text-white tracking-tight" style={{maskImage: 'linear-gradient(90deg, transparent, black 0%, black 40%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 0%, black 40%, transparent)'}}>Transform your workflow</h2>
<p className="mt-4 text-lg max-w-2xl mx-auto text-neutral-300">Enterprise-grade features designed for modern teams who demand excellence.</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

<div className="group overflow-hidden sm:p-8 transition-all duration-300 hover:border-white/20 bg-white/5 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 1px)', backgroundSize: '14px 14px'}}></div>
<div className="relative flex w-10 h-10 ring-1 rounded-full shadow-lg items-center justify-center ring-white/20 bg-slate-50/5">
<svg className="w-5 h-5 text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 18V5"></path>
<path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path>
<path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
<path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
<path d="M18 18a4 4 0 0 0 2-7.464"></path>
<path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
<path d="M6 18a4 4 0 0 1-2-7.464"></path>
<path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
</svg>
</div>
<h3 className="relative sm:text-3xl text-2xl font-semibold tracking-tight mt-5">Lightning Fast</h3>
<p className="relative mt-2 text-sm sm:text-base text-white/70">Experience real-time collaboration with sub-50ms latency across global teams.</p>

<div className="bg-white/5 border-white/10 border rounded-2xl mt-6 pt-4 pr-4 pb-4 pl-4">
<div className="absolute inset-0 rounded-2xl bg-gradient-to-b to-transparent pointer-events-none from-blue-600/10 via-indigo-700/10"></div>

<div className="relative flex items-center justify-between gap-2">
<div className="w-8 h-8 rounded-full ring-1 flex items-center justify-center bg-white/10 ring-white/10 text-white/90">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
<path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
</svg>
</div>
<div className="w-8 h-8 rounded-full ring-1 flex items-center justify-center bg-white/10 ring-white/10 text-white/90">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="5" r="3"></circle>
<circle cx="6" cy="12" r="3"></circle>
<circle cx="18" cy="19" r="3"></circle>
<line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
<line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
</svg>
</div>
<div className="w-8 h-8 rounded-full ring-1 flex items-center justify-center bg-white/10 ring-white/10 text-white/90">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l4 2"></path>
<circle className="" cx="12" cy="12" r="10"></circle>
</svg>
</div>
<div className="w-8 h-8 rounded-full ring-1 flex items-center justify-center bg-white/10 ring-white/10 text-white/90">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
<div className="w-8 h-8 rounded-full ring-1 flex items-center justify-center bg-white/10 ring-white/10 text-white/90">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
</div>
</div>

<svg className="opacity-80 w-[320px] h-[24px] max-w-[320px] mt-6 mr-auto ml-auto relative" data-icon-replaced="true" fill="none" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '320px', height: '24px'}} viewbox="0 0 320 100">
<path d="M20 5 C60 40, 120 40, 160 85" opacity="0.7" stroke="url(#g1)" strokeWidth="1.2"></path>
<path d="M85 5 C110 40, 140 40, 160 85" opacity="0.7" stroke="url(#g1)" strokeWidth="1.2"></path>
<path d="M150 5 C155 40, 160 40, 160 85" opacity="0.7" stroke="url(#g1)" strokeWidth="1.2"></path>
<path d="M235 5 C210 40, 180 40, 160 85" opacity="0.7" stroke="url(#g1)" strokeWidth="1.2"></path>
<path d="M300 5 C260 40, 200 40, 160 85" opacity="0.7" stroke="url(#g1)" strokeWidth="1.2"></path>
<defs>
</defs>
</svg>
<div className="relative mx-auto mt-2 w-10 h-10 rounded-full bg-gradient-to-b from-blue-500 ring-1 shadow-xl flex items-center justify-center to-indigo-700 ring-white/20">
<svg className="w-4.5 h-4.5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="3"></circle>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl border p-6 sm:p-8 transition-all duration-300 border-white/10 bg-white/5 hover:border-white/20">
<div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 1px)', backgroundSize: '14px 14px'}}></div>
<div className="relative flex w-10 h-10 ring-1 rounded-full shadow-lg items-center justify-center ring-white/20 bg-slate-50/5">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="3"></circle>
<path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.36-6.36-1.42 1.42M6.06 17.94l-1.42 1.42m12.72 0-1.42-1.42M6.06 6.06 4.64 4.64"></path>
</svg>
</div>
<h3 className="relative mt-5 text-2xl sm:text-3xl font-semibold tracking-tight">Smart Security</h3>
<p className="relative mt-2 text-sm sm:text-base text-white/70">Enterprise-grade encryption with SOC 2 Type II compliance and advanced threat protection.</p>

<div className="bg-white/5 border-white/10 border rounded-2xl mt-6 pt-4 pr-4 pb-4 pl-4">
<div className="absolute inset-0 rounded-2xl bg-gradient-to-b to-transparent pointer-events-none from-indigo-600/10 via-blue-700/10"></div>
<div className="relative grid grid-cols-3 gap-2 text-[11px] sm:text-xs">
<span className="px-2.5 py-1 rounded-full border bg-white/5 border-white/10 text-white/80">Encrypted</span>
<span className="px-2.5 py-1 rounded-full border bg-white/5 border-white/10 text-white/70">GDPR</span>
<span className="px-2.5 py-1 rounded-full border bg-white/5 border-white/10 text-white/70">SOC 2</span>
<span className="px-2.5 py-1 rounded-full border bg-white/5 border-white/10 text-white/60">2FA</span>
<span className="px-2.5 py-1 rounded-full border bg-white/5 border-white/10 text-white/70">ISO 27001</span>
<span className="px-2.5 py-1 rounded-full border bg-white/5 border-white/10 text-white/60">Audit Logs</span>
<span className="px-2.5 py-1 rounded-full border bg-white/5 border-white/10 text-white/70">SSO</span>
<span className="px-2.5 py-1 rounded-full border bg-white/5 border-white/10 text-white/70">HIPAA</span>
<span className="px-2.5 py-1 rounded-full border bg-white/5 border-white/10 text-white/70">Verified</span>
</div>

</div>
</div>

<div className="group relative overflow-hidden rounded-3xl border p-6 sm:p-8 transition-all duration-300 border-white/10 bg-white/5 hover:border-white/20">
<div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 1px)', backgroundSize: '14px 14px'}}></div>
<div className="relative flex w-10 h-10 ring-1 rounded-full shadow-lg items-center justify-center ring-white/20 bg-slate-50/5">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="M19 9l-5 5-4-4-3 3"></path>
</svg>
</div>
<h3 className="relative mt-5 text-2xl sm:text-3xl font-semibold tracking-tight">Infinite Scale</h3>
<p className="relative mt-2 text-sm sm:text-base text-white/70">From startups to Fortune 500—built to handle millions of messages without breaking a sweat.</p>

<div className="bg-white/5 border-white/10 border rounded-2xl mt-6 pt-4 pr-4 pb-4 pl-4">
<div className="absolute inset-0 rounded-2xl bg-gradient-to-b to-transparent pointer-events-none from-blue-600/10 via-indigo-700/10"></div>
<div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r border text-xs sm:text-sm shadow-md from-blue-600/30 to-indigo-600/30 border-white/10 text-white">
<span className="w-2 h-2 rounded-full ring-1 bg-white/80 ring-white/40"></span>
            Global Infrastructure
          </div>

<div className="relative mt-4 rounded-xl ring-1 px-3 py-3 flex items-center gap-3 bg-black/40 ring-white/10">
<button className="shrink-0 w-9 h-9 rounded-full bg-gradient-to-b from-blue-500 ring-1 flex items-center justify-center shadow-md to-indigo-600 ring-white/20 text-white">
<svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="M19 9l-5 5-4-4-3 3"></path>
</svg>
</button>

<div className="flex-1 flex items-end gap-1">
<div className="w-1 rounded-full h-3 bg-blue-400/60"></div>
<div className="w-1 rounded-full h-6 bg-blue-400/70"></div>
<div className="w-1 rounded-full h-4 bg-blue-400/60"></div>
<div className="w-1 rounded-full h-8 bg-blue-400/80"></div>
<div className="w-1 rounded-full h-3 bg-blue-400/50"></div>
<div className="w-1 rounded-full h-6 bg-blue-400/70"></div>
<div className="w-1 rounded-full h-4 bg-blue-400/60"></div>
<div className="w-1 rounded-full h-7 bg-blue-400/80"></div>
<div className="w-1 rounded-full h-3 bg-blue-400/50"></div>
<div className="w-1 rounded-full h-5 bg-blue-400/70"></div>
<div className="w-1 rounded-full h-4 bg-blue-400/60"></div>
<div className="w-1 rounded-full h-7 bg-blue-400/80"></div>
<div className="w-1 rounded-full h-3 bg-blue-400/50"></div>
<div className="w-1 rounded-full h-6 bg-blue-400/70"></div>
<div className="w-1 rounded-full h-4 bg-blue-400/60"></div>
</div>
<div className="shrink-0 w-2.5 h-6 rounded-full bg-gradient-to-b from-blue-500 to-indigo-600"></div>
</div>
</div>
</div>
</div>

<div className="mt-10 sm:mt-12 border-t pt-8 border-white/10">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="flex items-start gap-3">
<span className="inline-flex w-9 h-9 ring-1 items-center justify-center rounded-full ring-white/15 bg-white/5">
<svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="10"></circle>
<path className="" d="M12 6v6l4 2"></path>
</svg>
</span>
<div className="">
<p className="text-sm font-medium text-white/90">99.99% Uptime</p>
<p className="text-sm mt-1 text-white/60">Always available when you need it.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="inline-flex w-9 h-9 ring-1 items-center justify-center rounded-full ring-white/15 bg-white/5">
<svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="3"></circle>
<path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.36-6.36-1.42 1.42M6.06 17.94l-1.42 1.42m12.72 0-1.42-1.42M6.06 6.06 4.64 4.64"></path>
</svg>
</span>
<div className="">
<p className="text-sm font-medium text-white/90">AI-Powered</p>
<p className="text-sm mt-1 text-white/60">Smart suggestions and automation.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="inline-flex w-9 h-9 ring-1 items-center justify-center rounded-full ring-white/15 bg-white/5">
<svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m3 7 9-4 9 4-9 4-9-4Z"></path>
<path d="m3 17 9 4 9-4"></path>
<path d="m3 12 9 4 9-4"></path>
</svg>
</span>
<div className="">
<p className="text-sm font-medium text-white/90">Universal Sync</p>
<p className="text-sm mt-1 text-white/60">Seamless across all devices.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="inline-flex w-9 h-9 ring-1 items-center justify-center rounded-full ring-white/15 bg-white/5">
<svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="M19 9l-5 5-4-4-3 3"></path>
</svg>
</span>
<div>
<p className="text-sm font-medium text-white/90">Built to Scale</p>
<p className="text-sm mt-1 text-white/60">From 10 to 10,000+ users.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-b from-black to-neutral-900/50 z-10 pt-24 pb-24 relative" id="features">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16">
<span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur mb-4 border-white/10 bg-white/5 text-zinc-200">
<svg className="h-3.5 w-3.5 text-blue-300" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
          Features
        </span>
<h2 className="sm:text-5xl text-4xl font-semibold text-white tracking-tight" style={{maskImage: 'linear-gradient(90deg, transparent, black 0%, black 50%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 0%, black 50%, transparent)'}}>Built for modern teams</h2>
<p className="mt-4 text-lg max-w-2xl mx-auto text-neutral-300">Everything you need to collaborate effectively and stay organized</p>
</div>
<div className="grid gap-12 lg:grid-cols-2 gap-x-12 gap-y-12">
<section className="bg-white/5 border-white/10 border ring-white/5 ring-1 rounded-3xl shadow-2xl backdrop-blur-md">
<div className="grid grid-cols-1 gap-6 sm:grid-cols-[1.1fr_1fr] sm:gap-8 sm:p-8 pt-6 pr-6 pb-6 pl-6">

<div className="relative rounded-2xl border border-white/10 bg-white/5 p-5 ring-1 ring-white/5">
<div className="flex items-center gap-3 text-neutral-300">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h.01"></path><path d="M3 18h.01"></path><path d="M3 6h.01"></path><path d="M8 12h13"></path><path d="M8 18h13"></path><path d="M8 6h13"></path></svg>
<span className="text-sm font-medium">All workspaces</span>
</div>
<div className="mt-4 flex items-center gap-3 text-neutral-400">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-sm font-normal">My workspaces</span>
</div>
<div className="my-5 h-px w-full bg-white/10"></div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10">
<svg className="h-4 w-4 text-white/90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<div>
<div className="text-sm font-medium">Nebula Co.</div>
<div className="text-xs text-neutral-400">Team</div>
</div>
</div>
<div className="mt-4 space-y-2">
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-3">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-neutral-400/80"></span>
<span className="text-sm font-medium text-white">Platform Core</span>
</div>
</div>
<div className="rounded-lg border border-white/10 p-3">
<div className="flex items-center gap-3 text-neutral-300">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-neutral-500/60"></span>
<span className="text-sm font-normal">Brand Studio</span>
</div>
</div>
</div>
</div>
</div>

<div className="relative hidden min-h-[280px] select-none sm:block">
<div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5 ring-1 ring-white/5"></div>
<div className="absolute left-5 right-5 top-5 grid grid-cols-1 gap-3 opacity-60">
<div className="h-20 rounded-xl border border-white/10 bg-white/5"></div>
<div className="h-20 rounded-xl border border-white/10 bg-white/5"></div>
<div className="h-20 rounded-xl border border-white/10 bg-white/5"></div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent rounded-2xl">
<div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
<div className="flex items-center justify-between gap-4">
<div className="min-w-0">
<h3 className="text-sm font-semibold tracking-tight text-white">Platform Core</h3>
<p className="mt-1 truncate text-xs text-neutral-300">12 active projects · 48 members</p>
</div>
<button className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white ring-1 ring-white/10 hover:bg-white/15">
<span>Open</span>
<svg className="h-4 w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
<div className="border-t border-white/10 px-6 py-6 sm:px-8 sm:py-8">
<h2 className="text-3xl font-semibold tracking-tight">Workspaces Per Company</h2>
<p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-400">
            Keep teams focused by organizing initiatives into multiple workspaces for each company. Create dedicated spaces for platform work, brand efforts, research, and more.
          </p>
</div>
</section>
<div className="relative">
<div className="transition-all duration-500 hover:ring-white/20 hover:bg-neutral-900/60 bg-neutral-900/40 max-w-xl rounded-3xl ring-white/10 ring-1 mr-auto ml-auto pt-8 pr-8 pb-8 pl-8 relative">
<div className="flex items-start gap-4">
<div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
<svg className="h-5 w-5 text-indigo-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<div className="flex-1">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Team messaging, reimagined.</h1>
<p className="mt-1.5 text-sm sm:text-base text-slate-400">Connect your team with channels, threads, and real-time updates.</p>
</div>
</div>
<div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 ring-1 ring-white/10">
<div className="relative">
<img alt="Team collaboration preview" className="h-40 w-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/94f2605f-aafc-46b9-8db9-4d8c0a2bcb08_1600w.jpg"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-fuchsia-500/10"></div>
</div>
</div>
<div className="mt-6 flex items-start gap-3">
<img alt="User avatar" className="h-8 w-8 rounded-full ring-1 ring-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/21428aa7-0968-48fc-8d33-048fa6a25fd2_320w.jpg"/>
<div className="flex-1">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-white/90">Jordan</span>
<span className="text-xs text-slate-400">2:43 PM</span>
</div>
<p className="mt-1 text-sm leading-relaxed text-slate-300">
                Just deployed the latest updates to production. Everything looks great!
              </p>
<div className="mt-3 rounded-xl border border-white/10 bg-white/5 ring-1 ring-white/10">
<div className="flex items-center justify-between px-3 py-2">
<div className="flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded bg-indigo-400/20 ring-1 ring-indigo-300/30">
<svg className="h-3.5 w-3.5 text-indigo-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</span>
<span className="text-xs text-slate-400">deploy.chatsync.app</span>
</div>
<div className="flex items-center gap-2">
<button className="rounded-md p-1.5 text-slate-300/70 hover:bg-white/5 hover:text-slate-200">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
</button>
<button className="rounded-md p-1.5 text-slate-300/70 hover:bg-white/5 hover:text-slate-200">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
</div>
<div className="border-t border-white/10 px-3 py-3">
<h3 className="text-sm font-medium text-white/90 tracking-tight">Production Deployment</h3>
<p className="mt-0.5 text-xs text-slate-400">Deployed by jordan.dev</p>
</div>
<div className="border-t border-white/10 px-3 py-2">
<div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
<span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 ring-1 ring-white/10">
<svg className="h-3.5 w-3.5 text-slate-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                      Status: Live
                    </span>
<span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 ring-1 ring-white/10">
<svg className="h-3.5 w-3.5 text-slate-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                      v2.4.1
                    </span>
<span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 ring-1 ring-white/10">
<img alt="User avatar" className="h-3.5 w-3.5 rounded-full ring-1 ring-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/21428aa7-0968-48fc-8d33-048fa6a25fd2_320w.jpg"/>
                      Jordan — Deploy fix
                    </span>
</div>
</div>
</div>
</div>
</div>
<div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-2 ring-1 ring-white/10">
<div className="flex items-center gap-2">
<button aria-label="Add attachment" className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-300/80 hover:bg-white/5 hover:text-slate-200">
<svg className="h-4.5 w-4.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path></svg>
</button>
<input className="flex-1 bg-transparent text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none" placeholder="Type your message..." type="text"/>
<button className="hidden sm:inline-flex items-center gap-1 rounded-lg bg-white/5 px-2.5 py-1.5 text-xs text-slate-200 ring-1 ring-white/10 hover:bg-white/10">
                GIF
              </button>
<button aria-label="Insert emoji" className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-300/80 hover:bg-white/5 hover:text-slate-200">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</button>
<button className="inline-flex hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/40 text-xs font-medium text-white bg-blue-500/90 h-8 rounded-lg px-3 gap-x-2 gap-y-2 items-center">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                Send
              </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section className="bg-gradient-to-b from-black to-neutral-900/50 z-10 pt-24 pb-24 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="grid gap-12 lg:grid-cols-2">
<div className="">
<div className="mb-4 flex flex-wrap items-center gap-2 text-xs" id="tech-tabs">
<button className="tech-tab active rounded-full px-3 py-1 font-medium transition-all duration-200" data-tab="technology">Technology</button>
<button className="tech-tab rounded-full px-3 py-1 font-medium ring-1 hover:scale-105 transition-all duration-200 bg-white/5 text-neutral-300 ring-white/10 hover:bg-white/10" data-tab="specs">Technical Specs</button>
<button className="tech-tab rounded-full px-3 py-1 font-medium ring-1 hover:scale-105 transition-all duration-200 bg-white/5 text-neutral-300 ring-white/10 hover:bg-white/10" data-tab="certifications">Certifications</button>
</div>
<div className="tech-content" id="technology">
<h3 className="sm:text-5xl text-4xl font-semibold text-white tracking-tight py-2" style={{maskImage: 'linear-gradient(90deg, transparent, black 0%, black 35%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 0%, black 35%, transparent)'}}>Enterprise‑grade messaging built for speed</h3>
<p className="mt-4 text-neutral-300">Advanced real-time infrastructure delivers instant message delivery across your entire team. Built for organizations that demand reliability at scale.</p>
</div>
<div className="tech-content hidden" id="specs">
<h3 className="text-4xl tracking-tight sm:text-5xl font-semibold text-white">Technical Specifications</h3>
<p className="mt-4 text-neutral-300">Precision engineered with cutting-edge infrastructure for professional communication workflows.</p>
<div className="mt-6 space-y-3">
<div className="flex justify-between py-2 border-b border-white/5">
<span className="text-sm text-neutral-400">Message Latency</span>
<span className="text-sm text-neutral-200">&lt;50ms</span>
</div>
<div className="flex justify-between py-2 border-b border-white/5">
<span className="text-sm text-neutral-400">Uptime SLA</span>
<span className="text-sm text-neutral-200">99.99%</span>
</div>
<div className="flex justify-between py-2 border-b border-white/5">
<span className="text-sm text-neutral-400">File Storage</span>
<span className="text-sm text-neutral-200">Unlimited</span>
</div>
</div>
</div>
<div className="tech-content hidden" id="certifications">
<h3 className="text-4xl tracking-tight sm:text-5xl font-semibold text-white">Security &amp; Compliance</h3>
<p className="mt-4 text-neutral-300">Meets and exceeds international standards for data security and privacy requirements.</p>
<div className="mt-6 grid gap-3 sm:grid-cols-2">
<div className="rounded-lg p-3 ring-1 bg-white/5 ring-white/10">
<div className="text-sm font-medium text-white">SOC 2 Type II</div>
<div className="text-xs text-neutral-400">Certified</div>
</div>
<div className="rounded-lg p-3 ring-1 bg-white/5 ring-white/10">
<div className="text-sm font-medium text-white">GDPR</div>
<div className="text-xs text-neutral-400">Compliant</div>
</div>
</div>
</div>
<div className="flex gap-4 mt-8 gap-x-4 gap-y-4">
<button className="button" type="button">
<div className="points_wrapper">
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
</div>
<span className="inner">Start Project <svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg></span>
<style>
    .button {
      cursor: pointer;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      transition: all 0.25s ease;
      background: radial-gradient(65.28% 65.28% at 50% 100%,
          rgba(34, 211, 238, 0.8) 0%,
          rgba(34, 211, 238, 0) 100%),
        linear-gradient(0deg, #2563eb, #2563eb);
      border-radius: 0.75rem;
      border: none;
      outline: none;
      padding: 12px 18px;
      min-height: 48px;
      min-width: 102px;
    }
  
    .button::before,
    .button::after {
      content: "";
      position: absolute;
      transition: all 0.5s ease-in-out;
      z-index: 0;
    }
  
    .button::before {
      inset: 1px;
      background: linear-gradient(177.95deg,
          rgba(255, 255, 255, 0.19) 0%,
          rgba(255, 255, 255, 0) 100%);
      border-radius: calc(0.75rem - 1px);
    }
  
    .button::after {
      inset: 2px;
      background: radial-gradient(65.28% 65.28% at 50% 100%,
          rgba(34, 211, 238, 0.8) 0%,
          rgba(34, 211, 238, 0) 100%),
        linear-gradient(0deg, #2563eb, #2563eb);
      border-radius: calc(0.75rem - 2px);
    }
  
    .button:active {
      transform: scale(0.95);
    }
  
    .points_wrapper {
      overflow: hidden;
      width: 100%;
      height: 100%;
      pointer-events: none;
      position: absolute;
      z-index: 1;
    }
  
    .points_wrapper .point {
      bottom: -10px;
      position: absolute;
      animation: floating-points infinite ease-in-out;
      pointer-events: none;
      width: 2px;
      height: 2px;
      background-color: #fff;
      border-radius: 9999px;
    }
  
    @keyframes floating-points {
      0% {
        transform: translateY(0);
      }
  
      85% {
        opacity: 0;
      }
  
      100% {
        transform: translateY(-55px);
        opacity: 0;
      }
    }
  
    .points_wrapper .point:nth-child(1) {
      left: 10%;
      opacity: 1;
      animation-duration: 2.35s;
      animation-delay: 0.2s;
    }
  
    .points_wrapper .point:nth-child(2) {
      left: 30%;
      opacity: 0.7;
      animation-duration: 2.5s;
      animation-delay: 0.5s;
    }
  
    .points_wrapper .point:nth-child(3) {
      left: 25%;
      opacity: 0.8;
      animation-duration: 2.2s;
      animation-delay: 0.1s;
    }
  
    .points_wrapper .point:nth-child(4) {
      left: 44%;
      opacity: 0.6;
      animation-duration: 2.05s;
    }
  
    .points_wrapper .point:nth-child(5) {
      left: 50%;
      opacity: 1;
      animation-duration: 1.9s;
    }
  
    .points_wrapper .point:nth-child(6) {
      left: 75%;
      opacity: 0.5;
      animation-duration: 1.5s;
      animation-delay: 1.5s;
    }
  
    .points_wrapper .point:nth-child(7) {
      left: 88%;
      opacity: 0.9;
      animation-duration: 2.2s;
      animation-delay: 0.2s;
    }
  
    .points_wrapper .point:nth-child(8) {
      left: 58%;
      opacity: 0.8;
      animation-duration: 2.25s;
      animation-delay: 0.2s;
    }
  
    .points_wrapper .point:nth-child(9) {
      left: 98%;
      opacity: 0.6;
      animation-duration: 2.6s;
      animation-delay: 0.1s;
    }
  
    .points_wrapper .point:nth-child(10) {
      left: 65%;
      opacity: 1;
      animation-duration: 2.5s;
      animation-delay: 0.2s;
    }
  
    .inner {
      z-index: 2;
      gap: 6px;
      position: relative;
      width: 100%;
      color: white;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.5;
      transition: color 0.2s ease-in-out;
    }
  
    .inner svg.icon {
      width: 18px;
      height: 18px;
      transition: transform 0.3s ease;
      stroke: white;
      fill: none;
    }
  
    .button:hover svg.icon {
      transform: translateX(2px);
    }
  
    .button:hover svg.icon path {
      animation: dash 0.8s linear forwards;
    }
  
    @keyframes dash {
      0% {
        stroke-dasharray: 0, 20;
        stroke-dashoffset: 0;
      }
  
      50% {
        stroke-dasharray: 10, 10;
        stroke-dashoffset: -5;
      }
  
      100% {
        stroke-dasharray: 20, 0;
        stroke-dashoffset: -10;
      }
    }
  </style>
</button>
</div>
</div>
<div className="relative">
<div className="transition-all duration-500 hover:ring-white/20 hover:bg-neutral-900/60 bg-neutral-900/40 max-w-md ring-white/10 ring-1 rounded-3xl mr-auto ml-auto pt-8 pr-8 pb-8 pl-8 relative">
<div className="relative aspect-square w-full">
<div className="absolute inset-0 rounded-2xl border border-dashed border-emerald-400/20"></div>
<div className="absolute inset-6 rounded-2xl border border-dashed border-cyan-400/20"></div>
<div className="absolute left-6 top-1/2 -translate-y-1/2 hover:scale-110 transition-transform duration-300 cursor-pointer group">
<div className="grid h-16 w-16 place-items-center rounded-full ring-1 group-hover:ring-emerald-400/40 group-hover:bg-neutral-800 transition-all duration-300 bg-neutral-900 ring-white/10">
<svg className="w-[24px] h-[24px] group-hover:text-emerald-400 transition-colors text-zinc-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<p className="mt-2 text-sm group-hover:text-emerald-200 transition-colors text-neutral-300">Real-time</p>
</div>
<div className="absolute right-6 top-1/2 -translate-y-1/2 text-right hover:scale-110 transition-transform duration-300 cursor-pointer group">
<div className="grid h-16 w-16 place-items-center rounded-full ring-1 group-hover:ring-emerald-400/40 group-hover:bg-neutral-800 transition-all duration-300 bg-neutral-900 ring-white/10">
<span className="text-xl font-semibold group-hover:text-emerald-400 transition-colors text-zinc-400">∞</span>
</div>
<p className="mt-2 text-sm group-hover:text-emerald-200 transition-colors text-neutral-300">Scalable</p>
</div>
<div className="absolute left-1/2 top-6 -translate-x-1/2 hover:scale-110 transition-transform duration-300 cursor-pointer group">
<div className="grid h-16 w-16 place-items-center rounded-full ring-1 group-hover:ring-emerald-400/40 group-hover:bg-neutral-800 transition-all duration-300 bg-neutral-900 ring-white/10">
<svg className="w-[24px] h-[24px] group-hover:text-emerald-400 transition-colors text-zinc-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<p className="mt-2 text-sm text-center w-28 -ml-6 group-hover:text-emerald-200 transition-colors text-neutral-300">Secure</p>
</div>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 hover:scale-110 transition-transform duration-300 cursor-pointer group">
<div className="grid h-16 w-16 place-items-center rounded-full ring-1 group-hover:ring-emerald-400/40 group-hover:bg-neutral-800 transition-all duration-300 bg-neutral-900 ring-white/10">
<span className="text-xl font-semibold group-hover:text-emerald-400 transition-colors text-zinc-400">AI</span>
</div>
<p className="mt-2 text-sm text-center w-32 -ml-8 group-hover:text-emerald-200 transition-colors text-neutral-300">Smart features</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section className="z-10 pt-24 pb-24 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-16">
<span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur mb-4 border-white/10 bg-white/5 text-zinc-200">
<svg className="h-3.5 w-3.5 text-blue-300" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
        Simple, Transparent Pricing
      </span>
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">Choose your plan</h2>
<p className="mt-4 text-lg max-w-2xl mx-auto text-neutral-300">Start free, scale as you grow. No hidden fees, cancel anytime.</p>

<div className="mt-6 inline-flex items-center gap-3 p-1 rounded-full border border-white/10 bg-white/5">
<button className="billing-toggle active transition-all text-sm font-medium text-white bg-blue-500 rounded-full pt-2 pr-4 pb-2 pl-4" id="monthly-toggle" onclick="switchBilling('monthly')">
          Monthly
        </button>
<button className="billing-toggle px-4 py-2 rounded-full text-sm font-medium transition-all text-neutral-300 hover:text-white" id="yearly-toggle" onclick="switchBilling('yearly')">
          Yearly
          <span className="ml-1 text-xs text-emerald-400">Save 20%</span>
</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-6xl mr-auto ml-auto gap-x-8 gap-y-8">

<div className="transform md:scale-105 shadow-blue-500/20 bg-gradient-to-b from-blue-500/10 to-indigo-600/10 border-blue-500/30 border-2 rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl">
<div className="mb-6">
<h3 className="text-xl font-semibold mb-2 text-white">Starter</h3>
<p className="text-sm text-neutral-400">For small teams getting started</p>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-2">
<span className="text-4xl font-semibold tracking-tight text-white price-amount" data-monthly="$0" data-yearly="$0">$0</span>
<span className="text-sm text-neutral-400 billing-period">per month</span>
</div>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-neutral-300">
<svg className="flex-shrink-0 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
            Up to 10 team members
          </li>
<li className="flex items-center gap-2 text-sm text-neutral-300">
<svg className="flex-shrink-0 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
            5GB file storage
          </li>
<li className="flex items-center gap-2 text-sm text-neutral-300">
<svg className="flex-shrink-0 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
            Basic integrations
          </li>
<li className="flex items-center gap-2 text-sm text-neutral-300">
<svg className="flex-shrink-0 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
            Community support
          </li>
</ul>
<button className="transition-all hover:bg-white/5 font-medium text-white w-full border-white/10 border rounded-full pt-3 pr-4 pb-3 pl-4">
          Get Started
        </button>
</div>

<div className="transform shadow-blue-500/20 overflow-hidden md:scale-105 bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-cyan-400 via-purple-500 to-cyan-400 border rounded-3xl ring-slate-50/5 ring-1 pt-8 pr-8 pb-8 pl-8 relative shadow-3xl" style={{borderColor: 'transparent'}}>
<div className="" style={{content: '\'\'', position: 'absolute', width: '100px', backgroundImage: 'linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255))', height: '130%', animation: 'rotBGimg 3s linear infinite', transition: 'all 0.2s linear', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}></div>
<div className="" style={{content: '\'\'', position: 'absolute', background: '#0e0f14', inset: '5px', borderRadius: '20px', zIndex: '1'}}></div>
<div className="z-10 relative">
<div className="mb-6">
<h3 className="text-xl font-semibold text-white mb-2">Pro</h3>
<p className="text-sm text-neutral-300">For growing teams and businesses</p>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-2">
<span className="text-4xl font-semibold tracking-tight text-white price-amount" data-monthly="$29" data-yearly="$279">$29</span>
<span className="text-sm text-neutral-300 billing-period">per month</span>
</div>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-white">
<svg className="flex-shrink-0 text-blue-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
              Unlimited team members
            </li>
<li className="flex items-center gap-2 text-sm text-white">
<svg className="flex-shrink-0 text-blue-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
              Unlimited storage
            </li>
<li className="flex items-center gap-2 text-sm text-white">
<svg className="flex-shrink-0 text-blue-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
              Advanced integrations
            </li>
<li className="flex items-center gap-2 text-sm text-white">
<svg className="flex-shrink-0 text-blue-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
              AI features included
            </li>
</ul>
<button className="hover:opacity-90 transition-all shadow-blue-500/30 font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 w-full rounded-full pt-3 pr-4 pb-3 pl-4 shadow-lg">
            Start Free Trial
          </button>
</div>
<style className="">
          @keyframes rotBGimg {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }
        </style>
</div>

<div className="transform md:scale-105 shadow-blue-500/20 bg-gradient-to-b from-blue-500/10 to-indigo-600/10 border-blue-500/30 border-2 rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl">
<div className="mb-6">
<h3 className="text-xl font-semibold mb-2 text-white">Enterprise</h3>
<p className="text-sm text-neutral-400">For large organizations</p>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-2">
<span className="text-4xl font-semibold tracking-tight text-white">Custom</span>
</div>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-neutral-300">
<svg className="flex-shrink-0 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
            Everything in Pro
          </li>
<li className="flex items-center gap-2 text-sm text-neutral-300">
<svg className="flex-shrink-0 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
            Custom integrations
          </li>
<li className="flex items-center gap-2 text-sm text-neutral-300">
<svg className="flex-shrink-0 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
            99.99% uptime SLA
          </li>
<li className="flex items-center gap-2 text-sm text-neutral-300">
<svg className="flex-shrink-0 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
            Dedicated support
          </li>
</ul>
<button className="transition-all hover:bg-white/5 font-medium text-white w-full border-white/10 border rounded-full pt-3 pr-4 pb-3 pl-4">
          Contact Sales
        </button>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-sm text-neutral-400">All plans include 14-day free trial. No credit card required.</p>
</div>

</div>
</section>

<section className="z-10 pt-24 pb-24 relative">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">Ready to transform your team communication?</h2>
<p className="mt-4 text-lg text-neutral-300">Join thousands of teams already using ChatSync</p>
<div className="flex gap-4 flex-wrap mt-8 gap-x-4 gap-y-4 justify-center">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<button className="group inline-flex min-w-[100px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.1] font-semibold tracking-tight rounded-full pt-3 pr-4 pb-3 pl-4 relative items-center justify-center hover:text-white text-white/70" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)', background: 'radial-gradient(ellipse at bottom,rgba(71,81,92,1) 0%,rgba(0,0,0,1) 100%)'}}>
<span className="z-10 text-sm font-normal relative">Get Started Free</span>

<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium border rounded-full px-6 py-3 transition-colors text-zinc-200 border-white/10 hover:bg-white/5" href="#">
          Schedule Demo
        </a>
</div>
</div>
</section>

<footer className="border-t py-12 bg-gray-950 border-white/10" style={{}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="">
<h3 className="text-sm font-semibold mb-4 text-white">Product</h3>
<ul className="space-y-2 text-sm text-neutral-400">
<li className=""><a className="transition-colors hover:text-white" href="#">Features</a></li>
<li className=""><a className="transition-colors hover:text-white" href="#">Integrations</a></li>
<li className=""><a className="transition-colors hover:text-white" href="#">Pricing</a></li>
</ul>
</div>
<div className="">
<h3 className="text-sm font-semibold mb-4 text-white">Company</h3>
<ul className="space-y-2 text-sm text-neutral-400">
<li className=""><a className="transition-colors hover:text-white" href="#">About</a></li>
<li className=""><a className="transition-colors hover:text-white" href="#">Blog</a></li>
<li className=""><a className="transition-colors hover:text-white" href="#">Careers</a></li>
</ul>
</div>
<div className="">
<h3 className="text-sm font-semibold mb-4 text-white">Resources</h3>
<ul className="space-y-2 text-sm text-neutral-400">
<li className=""><a className="transition-colors hover:text-white" href="#">Documentation</a></li>
<li className=""><a className="transition-colors hover:text-white" href="#">API</a></li>
<li><a className="transition-colors hover:text-white" href="#">Support</a></li>
</ul>
</div>
<div className="">
<h3 className="text-sm font-semibold mb-4 text-white">Legal</h3>
<ul className="space-y-2 text-sm text-neutral-400">
<li><a className="transition-colors hover:text-white" href="#">Privacy</a></li>
<li><a className="transition-colors hover:text-white" href="#">Terms</a></li>
<li><a className="transition-colors hover:text-white" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4 border-white/10">
<p className="text-sm text-neutral-400">© 2024 Sonai. All rights reserved.</p>
<div className="flex gap-6">
<a className="transition-colors text-neutral-400 hover:text-white" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="transition-colors text-neutral-400 hover:text-white" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
