import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


  lucide.createIcons();



  lucide.createIcons();
  
  // Mobile menu
  const menuBtn = document.getElementById('menuBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  
  menuBtn.addEventListener('click', () => mobileMenu.classList.add('open'));
  closeMenuBtn.addEventListener('click', () => mobileMenu.classList.remove('open'));
  mobileLinks.forEach(link => link.addEventListener('click', () => mobileMenu.classList.remove('open')));
  
  // FAQ functionality
  document.querySelectorAll('.faq-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.faq-item');
      const content = item.querySelector('.faq-content');
      const icon = item.querySelector('.faq-icon');
      const isOpen = content.style.display === 'block';
      
      if (isOpen) {
        content.style.display = 'none';
        icon.setAttribute('data-lucide', 'plus');
      } else {
        content.style.display = 'block';
        icon.setAttribute('data-lucide', 'minus');
      }
      lucide.createIcons();
    });
  });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component -z-10 w-full h-[800px] absolute top-0 saturate-200 brightness-200" data-alpha-mask="70" style={{maskImage: 'linear-gradient(transparent, black 0%, black 70%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full" style={{}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="yWZ2Tbe094Fsjgy9NRnD"></div>

</div></div>I'll help you adapt this AI Image Generation landing page into an AI Travel Itinerary Concierge page. Let me transform the key elements while maintaining the sleek design aesthetic.

<meta charset="utf-8" className="" style={{display: 'none'}}/>
<meta className="" content="width=device-width, initial-scale=1.0" name="viewport" style={{display: 'none'}}/>
<title className="">TravelAI - Your AI Travel Itinerary Concierge</title>


<style className="">
@keyframes fadeInUp {
from { opacity: 0; transform: translateY(20px); }
to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; }
.animate-delay-200 { animation-delay: 0.2s; opacity: 0; }
.animate-delay-300 { animation-delay: 0.3s; opacity: 0; }
.nav-link::after { content: ''; position: absolute; left: 0; top: 100%; width: 0; height: 2px; background: #10b981; transition: width 0.3s; }
.nav-link:hover::after { width: 100%; }
.mobile-menu { transform: translateX(100%); transition: transform 0.3s ease-out; }
.mobile-menu.open { transform: translateX(0); }
@keyframes smoothCarousel {
0% { transform: translateX(0); }
100% { transform: translateX(-50%); }
}
.carousel-wrapper {
animation: smoothCarousel 40s linear infinite;
}
.carousel-wrapper:hover {
animation-play-state: paused;
}
@keyframes marquee-rtl {
0% { transform: translateX(0); }
100% { transform: translateX(-50%); }
}
@keyframes marquee-ltr {
0% { transform: translateX(-50%); }
100% { transform: translateX(0); }
}
</style>

<div className="fixed inset-0 -z-10" style={{}}>
<div className="bg-gradient-to-br from-indigo-950/20 via-slate-950/40 to-indigo-950/20 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
</div>

<div className="gradient-blur">
<div className=""></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
<style>
  .gradient-blur {
    position: fixed;
    z-index: 5;
    inset: 0 0 auto 0;
    height: 12%;
    pointer-events: none;
  }
  .gradient-blur>div,
  .gradient-blur::before,
  .gradient-blur::after {
    position: absolute;
    inset: 0;
  }
  .gradient-blur::before {
    content: "";
    z-index: 1;
    backdrop-filter: blur(0.5px);
    mask: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%);
  }
  .gradient-blur>div:nth-of-type(1) {
    z-index: 2;
    backdrop-filter: blur(1px);
    mask: linear-gradient(to top, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%);
  }
  .gradient-blur>div:nth-of-type(2) {
    z-index: 3;
    backdrop-filter: blur(2px);
    mask: linear-gradient(to top, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%);
  }
  .gradient-blur>div:nth-of-type(3) {
    z-index: 4;
    backdrop-filter: blur(4px);
    mask: linear-gradient(to top, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%);
  }
  .gradient-blur>div:nth-of-type(4) {
    z-index: 5;
    backdrop-filter: blur(8px);
    mask: linear-gradient(to top, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%);
  }
  .gradient-blur>div:nth-of-type(5) {
    z-index: 6;
    backdrop-filter: blur(16px);
    mask: linear-gradient(to top, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%);
  }
  .gradient-blur>div:nth-of-type(6) {
    z-index: 7;
    backdrop-filter: blur(32px);
    mask: linear-gradient(to top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%);
  }
  .gradient-blur::after {
    content: "";
    z-index: 8;
    backdrop-filter: blur(64px);
    mask: linear-gradient(to top, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%);
  }
</style>

<header className="sticky z-20 top-0">
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<a className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[150px] h-[30px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7ff394b9-ee65-4919-9a47-9f047cf002a2_800w.webp)] bg-cover rounded invert" href="#"></a>
<nav className="hidden gap-6 md:flex gap-x-6 gap-y-6 items-center">
<a className="nav-link hover:text-white text-sm text-slate-300 relative" href="#features" style={{}}>Features</a>
<a className="nav-link relative text-sm text-slate-300 hover:text-white" href="#how" style={{}}>How it Works</a>
<a className="nav-link relative text-sm text-slate-300 hover:text-white" href="#testimonials" style={{}}>Reviews</a>
<a className="nav-link relative text-sm text-slate-300 hover:text-white" href="#faq" style={{}}>FAQ</a>
<a className="inline-flex items-center gap-2 transition-colors hover:bg-indigo-500/20 text-sm text-white bg-indigo-500/10 ring-indigo-500/30 ring-1 rounded-full pt-2 pr-4 pb-2 pl-4" href="#cta">
        Start Planning <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</nav>
<button className="md:hidden rounded-lg p-2 text-slate-200 hover:bg-white/5 transition-colors" id="menuBtn" style={{}}>
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<aside className="mobile-menu fixed z-50 bg-slate-950/95 w-[80%] max-w-sm border-white/10 border-l pt-6 pr-6 pb-6 pl-6 top-0 right-0 bottom-0 backdrop-blur" id="mobileMenu" style={{}}>
<div className="flex items-center justify-between">
<span className="font-semibold">TravelAI</span>
<button className="rounded-lg p-2 text-slate-200 hover:bg-white/5 transition-colors" id="closeMenuBtn" style={{}}>
<svg className="lucide lucide-x h-6 w-6" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<ul className="mt-6 space-y-4">
<li><a className="mobile-link block rounded-lg px-2 py-2 text-slate-300 hover:bg-white/5 hover:text-white transition-colors" href="#features" style={{}}>Features</a></li>
<li><a className="mobile-link block rounded-lg px-2 py-2 text-slate-300 hover:bg-white/5 hover:text-white transition-colors" href="#how" style={{}}>How it Works</a></li>
<li><a className="mobile-link block rounded-lg px-2 py-2 text-slate-300 hover:bg-white/5 hover:text-white transition-colors" href="#testimonials" style={{}}>Reviews</a></li>
<li><a className="mobile-link block rounded-lg px-2 py-2 text-slate-300 hover:bg-white/5 hover:text-white transition-colors" href="#faq" style={{}}>FAQ</a></li>
</ul>
<a className="mobile-link mt-6 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm ring-1 transition-colors bg-indigo-500/10 ring-indigo-500/30 hover:bg-indigo-500/20" href="#cta" style={{}}>
      Start Planning <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</aside>
</header>

<section className="max-w-7xl mr-auto ml-auto pt-16 pb-36 relative">
<div className="text-center max-w-3xl mr-auto ml-auto">
<div className="inline-flex items-center gap-2 border rounded-full px-4 py-2 mb-6 bg-indigo-500/10 border-indigo-500/20" style={{}}>
<svg className="lucide lucide-sparkles w-4 h-4 text-indigo-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-sm text-indigo-200">You already plan trips a lot </span>
</div>
<h1 className="leading-tight sm:text-6xl lg:text-7xl text-5xl font-medium text-zinc-100 tracking-tighter pb-4" style={{maskImage: 'linear-gradient(130deg, transparent, black 45%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(130deg, transparent, black 45%, black 70%, transparent)'}}>
      Your AI Travel<br/>Itinerary Concierge
    </h1>
<p className="text-lg text-slate-300 max-w-2xl mt-6 mr-auto ml-auto">
      Chat your travel style, get instant personalized itineraries. Smart replanning based on local attractions and weather. Earn through partnership affiliates.
    </p>
<div className="flex flex-wrap gap-3 mt-10 gap-x-3 gap-y-3 items-center justify-center">
<div className="inline-block bg-transparent">
<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap'); @property --gradient-angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; } @property --gradient-angle-offset { syntax: "<angle>"; initial-value: 0deg; inherits: false; } @property --gradient-percent { syntax: "<percentage>"; initial-value: 20%; inherits: false; } @property --gradient-shine { syntax: "<color>"; initial-value: #8484ff; inherits: false; } .shiny-cta { --gradient-angle: 0deg; --gradient-angle-offset: 0deg; --gradient-percent: 20%; --gradient-shine: #8484ff; --shadow-size: 2px; position: relative; overflow: hidden; border-radius: 9999px; padding: 1.25rem 2.5rem; font-size: 1.125rem; line-height: 1.2; font-weight: 500; color: #ffffff; background: linear-gradient(#000000, #000000) padding-box, conic-gradient( from calc(var(--gradient-angle) - var(--gradient-angle-offset)), transparent 0%, #1d4ed8 5%, var(--gradient-shine) 15%, #1d4ed8 30%, transparent 40%, transparent 100% ) border-box; border: 2px solid transparent; box-shadow: inset 0 0 0 1px #1a1818; outline: none; transition: --gradient-angle-offset 800ms cubic-bezier(0.25, 1, 0.5, 1), --gradient-percent 800ms cubic-bezier(0.25, 1, 0.5, 1), --gradient-shine 800ms cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s; cursor: pointer; isolation: isolate; outline-offset: 4px; font-family: 'Inter', 'Helvetica Neue', sans-serif; z-index: 0; animation: border-spin 2.5s linear infinite; } @keyframes border-spin { to { --gradient-angle: 360deg; } } .shiny-cta:active { transform: translateY(1px); } .shiny-cta::before { content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 0; --size: calc(100% - 6px); --position: 2px; --space: 4px; width: var(--size); height: var(--size); background: radial-gradient(circle at var(--position) var(--position), white 0.5px, transparent 0) padding-box; background-size: var(--space) var(--space); background-repeat: space; mask-image: conic-gradient( from calc(var(--gradient-angle) + 45deg), black, transparent 10% 90%, black ); border-radius: inherit; opacity: 0.4; pointer-events: none; } .shiny-cta::after { content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 1; width: 100%; aspect-ratio: 1; background: linear-gradient(-50deg, transparent, #1d4ed8, transparent); mask-image: radial-gradient(circle at bottom, transparent 40%, black); opacity: 0.6; animation: shimmer 4s linear infinite; animation-play-state: running; } .shiny-cta span { position: relative; z-index: 2; display: inline-block; } .shiny-cta span::before { content: ''; pointer-events: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: -1; --size: calc(100% + 1rem); width: var(--size); height: var(--size); box-shadow: inset 0 -1ex 2rem 4px #1d4ed8; opacity: 0; border-radius: inherit; transition: opacity 800ms cubic-bezier(0.25, 1, 0.5, 1); animation: breathe 4.5s linear infinite; } @keyframes shimmer { to { transform: translate(-50%, -50%) rotate(360deg);} } @keyframes breathe { 0%, 100% { transform: translate(-50%, -50%) scale(1);} 50% { transform: translate(-50%, -50%) scale(1.20);} }
  </style>
<button className="shiny-cta focus:outline-none">
<span className="">Chat to Plan Trip</span>
</button>
</div>
<a className="inline-flex items-center gap-2 hover:bg-white/5 transition-colors text-sm text-white border-white/10 border rounded-full pt-3 pr-5 pb-3 pl-5 backdrop-blur-2xl" href="#how">
        See How It Works <svg className="lucide lucide-play-circle h-4 w-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</a>
</div>
</div>
</section>

<div className="flex xl:pt-0 xl:pb-0 sm:pl-4 sm:pr-4 sm:pt-20 w-screen pt-20 pr-2 pb-40 pl-2 items-center justify-center" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 35%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 35%, transparent)'}}>
<div className="flex flex-col overflow-hidden xl:bg-neutral-900/20 bg-neutral-900 w-full h-[700px] max-w-7xl max-h-[95vh] border-neutral-800 border rounded-xl shadow-2xl backdrop-blur-xl">

<div className="flex border-neutral-700/50 border-b pt-3 pr-4 pb-3 pl-4 backdrop-blur items-center justify-between" style={{background: 'rgba(40, 40, 40, 0.5)'}}>
<div className="flex items-center gap-2">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-neutral-600" style={{}}></div>
<div className="w-3 h-3 rounded-full bg-neutral-600" style={{}}></div>
<div className="w-3 h-3 rounded-full bg-neutral-600" style={{}}></div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="p-1 rounded hover:bg-neutral-700/50" style={{}}>
<svg className="lucide lucide-more-horizontal h-4 w-4 text-neutral-400" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>

<div className="flex-1 flex overflow-hidden">

<aside className="flex flex-col w-64 border-neutral-800/50 border-r" style={{background: 'rgba(30, 30, 30, 0.8)'}}>
<div className="p-4 border-b border-neutral-800/50" style={{}}>
<div className="flex items-center gap-2">
<svg className="lucide lucide-plane text-slate-50/50 w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
<span className="font-semibold">TravelAI</span>
</div>
<div className="text-xs text-neutral-500 mt-0.5" style={{}}>Your AI Trip Planner</div>
</div>
<nav className="flex-1 overflow-y-auto">
<div className="pt-3 pr-3 pl-3">
<a className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-white bg-indigo-500/20" style={{}}>
<svg className="lucide lucide-message-circle h-4 w-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
              New Trip
            </a>
<a className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-neutral-300 hover:bg-neutral-800/50" style={{}}>
<svg className="lucide lucide-map h-4 w-4" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
              My Itineraries
            </a>
<a className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-neutral-300 hover:bg-neutral-800/50" style={{}}>
<svg className="lucide lucide-bookmark h-4 w-4" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
              Saved Places
            </a>
<a className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-neutral-300 hover:bg-neutral-800/50" style={{}}>
<svg className="lucide lucide-compass h-4 w-4" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
              Explore
            </a>
</div>
<div className="px-3 pt-4">
<div className="text-[11px] uppercase tracking-wide text-neutral-500 mb-2 px-2" style={{}}>Recent Trips</div>
<a className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-neutral-300 hover:bg-neutral-800/50" style={{}}>
<svg className="lucide lucide-map-pin h-4 w-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Tokyo Adventure
            </a>
<a className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-neutral-300 hover:bg-neutral-800/50" style={{}}>
<svg className="lucide lucide-map-pin h-4 w-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Paris Romance
            </a>
<a className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-neutral-300 hover:bg-neutral-800/50" style={{}}>
<svg className="lucide lucide-map-pin h-4 w-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Bali Retreat
            </a>
</div>
</nav>
<div className="border-t border-neutral-800/50 p-3" style={{}}>
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-neutral-400" style={{}}>AI Credits</span>
<span className="text-xs font-medium text-white">8 / 10</span>
</div>
<div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden" style={{}}>
<div className="h-full bg-gradient-to-r to-indigo-500 from-indigo-500" style={{width: '80%'}}></div>
</div>
<button className="mt-2 w-full rounded-md px-3 py-1.5 text-sm font-medium text-white hover:bg-neutral-700/70 bg-neutral-700" style={{}}>
            Upgrade Plan
          </button>
</div>
</aside>

<main className="flex-1 flex flex-col xl:bg-neutral-950/80" style={{}}>
<div className="flex items-center justify-between border-b border-neutral-800/50 px-5 py-3" style={{background: 'rgba(30, 30, 30, 0.5)'}}>
<div className="flex items-center gap-3">
<h1 className="text-lg font-semibold tracking-tight">Plan Your Trip</h1>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm text-neutral-300 hover:bg-neutral-800/50" style={{}}>
<svg className="lucide lucide-cloud-sun h-4 w-4" data-lucide="cloud-sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="M20 12h2"></path><path d="m19.07 4.93-1.41 1.41"></path><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"></path><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"></path></svg>
              Weather
            </button>
<button className="p-2 rounded-md hover:bg-neutral-800/50" style={{}}>
<svg className="lucide lucide-more-horizontal h-5 w-5 text-neutral-300" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-5 space-y-4">

<div className="flex gap-3">
<div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-indigo-500/20" style={{}}>
<svg className="lucide lucide-bot w-4 h-4 text-indigo-400" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="flex-1">
<div className="bg-neutral-800/50 rounded-2xl px-4 py-3 max-w-lg" style={{}}>
<p className="text-sm text-neutral-200" style={{}}>Hi! I'm your AI travel concierge. Tell me about your ideal trip and I'll create a personalized itinerary for you. Where would you like to go?</p>
</div>
</div>
</div>

<div className="flex gap-3 justify-end">
<div className="flex-1 flex justify-end">
<div className="rounded-2xl px-4 py-3 max-w-lg bg-indigo-500/20" style={{}}>
<p className="text-sm text-neutral-100" style={{}}>I want to visit Tokyo for 5 days. I love food, culture, and some modern experiences.</p>
</div>
</div>
<div className="flex-shrink-0 w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center" style={{}}>
<svg className="lucide lucide-user w-4 h-4 text-neutral-300" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
</div>

<div className="flex gap-3">
<div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-indigo-500/20" style={{}}>
<svg className="lucide lucide-bot w-4 h-4 text-indigo-400" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="flex-1">
<div className="bg-neutral-800/50 rounded-2xl px-4 py-3 max-w-2xl" style={{}}>
<p className="text-sm text-neutral-200 mb-3" style={{}}>Perfect! Here's your personalized Tokyo itinerary:</p>
<div className="space-y-3">
<div className="bg-neutral-900/50 rounded-lg p-3 border border-neutral-700/50" style={{}}>
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-calendar w-4 h-4 text-indigo-400" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-xs font-medium text-indigo-400" style={{}}>Day 1</span>
</div>
<p className="text-sm text-neutral-300" style={{}}>Morning: Tsukiji Fish Market • Lunch: Sushi Dai • Afternoon: Senso-ji Temple • Evening: Shibuya Crossing</p>
</div>
<div className="bg-neutral-900/50 rounded-lg p-3 border border-neutral-700/50" style={{}}>
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-calendar w-4 h-4 text-indigo-400" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-xs font-medium text-indigo-400" style={{}}>Day 2</span>
</div>
<p className="text-sm text-neutral-300" style={{}}>Morning: Meiji Shrine • Lunch: Harajuku Street Food • Afternoon: teamLab Borderless • Evening: Roppongi</p>
</div>
<div className="flex gap-2 mt-3">
<button className="flex-1 flex items-center justify-center gap-2 border rounded-lg px-3 py-2 text-xs font-medium transition-colors bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 border-indigo-500/30" style={{}}>
<svg className="lucide lucide-download w-3 h-3" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                      Export
                    </button>
<button className="flex-1 flex items-center justify-center gap-2 bg-neutral-700/50 hover:bg-neutral-700 text-neutral-200 border border-neutral-600 rounded-lg px-3 py-2 text-xs font-medium transition-colors" style={{}}>
<svg className="lucide lucide-refresh-cw w-3 h-3" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
                      Replan
                    </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-neutral-800/50 p-4" style={{background: 'rgba(30, 30, 30, 0.5)'}}>
<div className="rounded-lg border border-neutral-700 bg-neutral-800/40 focus-within:ring-2 focus-within:ring-indigo-500/40" style={{}}>
<div className="px-4 py-3">
<textarea className="placeholder-neutral-500 focus:outline-none resize-none text-sm bg-transparent w-full" placeholder="Tell me about your travel preferences..." rows="2"></textarea>
</div>
<div className="flex items-center justify-between border-t border-neutral-700/50 px-4 py-3" style={{}}>
<div className="flex items-center gap-2">
<button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs text-neutral-300 hover:bg-neutral-700/50 border border-neutral-700" style={{}}>
<svg className="lucide lucide-map-pin h-3.5 w-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  Add Location
                </button>
<button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs text-neutral-300 hover:bg-neutral-700/50 border border-neutral-700" style={{}}>
<svg className="lucide lucide-calendar-days h-3.5 w-3.5" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
                  Dates
                </button>
</div>
<button className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700" style={{}}>
<svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                Send
              </button>
</div>
</div>
</div>
</main>
</div>
</div>
</div>

<section className="max-w-7xl z-10 mt-8 mr-auto mb-16 ml-auto pt-16 pr-4 pb-6 pl-4 relative">
<div className="text-center">
<p className="uppercase text-sm font-medium text-slate-400 tracking-wide" style={{}}>
      Trusted travel partners &amp; affiliates
    </p>
</div>
<div className="overflow-hidden mt-6 relative">
<div className="" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<div className="flex carousel-wrapper gap-x-6 lg:gap-x-20">
<div className="flex gap-6 shrink-0 gap-x-6 lg:gap-x-20">
<div className="w-[150px] h-[40px] bg-white/5 rounded-lg flex items-center justify-center text-xs text-neutral-400" style={{}}>Booking.com</div>
<div className="w-[150px] h-[40px] bg-white/5 rounded-lg flex items-center justify-center text-xs text-neutral-400" style={{}}>Expedia</div>
<div className="w-[150px] h-[40px] bg-white/5 rounded-lg flex items-center justify-center text-xs text-neutral-400" style={{}}>Airbnb</div>
<div className="w-[120px] h-[40px] bg-white/5 rounded-lg flex items-center justify-center text-xs text-neutral-400" style={{}}>Skyscanner</div>
<div className="w-[120px] h-[40px] bg-white/5 rounded-lg flex items-center justify-center text-xs text-neutral-400" style={{}}>Viator</div>
<div className="w-[150px] h-[40px] bg-white/5 rounded-lg flex items-center justify-center text-xs text-neutral-400" style={{}}>GetYourGuide</div>
</div>
<div className="flex shrink-0 gap-x-6 lg:gap-x-20">
<div className="w-[150px] h-[40px] bg-white/5 rounded-lg flex items-center justify-center text-xs text-neutral-400" style={{}}>Booking.com</div>
<div className="w-[150px] h-[40px] bg-white/5 rounded-lg flex items-center justify-center text-xs text-neutral-400" style={{}}>Expedia</div>
<div className="w-[150px] h-[40px] bg-white/5 rounded-lg flex items-center justify-center text-xs text-neutral-400" style={{}}>Airbnb</div>
<div className="w-[100px] h-[40px] bg-white/5 rounded-lg flex items-center justify-center text-xs text-neutral-400" style={{}}>Skyscanner</div>
<div className="w-[100px] h-[40px] bg-white/5 rounded-lg flex items-center justify-center text-xs text-neutral-400" style={{}}>Viator</div>
<div className="w-[150px] h-[40px] bg-white/5 rounded-lg flex items-center justify-center text-xs text-neutral-400" style={{}}>GetYourGuide</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-24 pb-20 pr-6 pl-6" id="features">
<div className="text-center mb-16">
<h2 className="text-4xl sm:text-5xl font-medium text-white tracking-tighter">How TravelAI Works</h2>
<p className="mt-4 text-lg text-slate-400" style={{}}>Three simple steps to your perfect trip</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 gap-x-8 gap-y-8">

<div className="group transition-all hover:bg-indigo-500/5 hover:border-indigo-500/30 bg-white/5 border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8" style={{maskImage: 'linear-gradient(210deg, transparent, black 40%, black 60%, transparent)', WebkitMaskImage: 'linear-gradient(210deg, transparent, black 40%, black 60%, transparent)'}}>
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-indigo-500/10" style={{}}>
<svg className="lucide lucide-message-square w-6 h-6 text-indigo-400" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3">Chat Your Style</h3>
<p className="text-slate-400 text-sm leading-relaxed" style={{}}>Simply describe your travel preferences, budget, and interests. Our AI understands your style and creates itineraries that match your personality.</p>
</div>

<div className="group transition-all hover:bg-indigo-500/5 hover:border-indigo-500/30 bg-white/5 border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8" style={{maskImage: 'linear-gradient(220deg, transparent, black 20%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(220deg, transparent, black 20%, black 80%, transparent)'}}>
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-indigo-500/10" style={{}}>
<svg className="lucide lucide-map w-6 h-6 text-indigo-400" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3">Auto Itinerary</h3>
<p className="text-slate-400 text-sm leading-relaxed" style={{}}>Get instant, detailed day-by-day plans with attractions, restaurants, and activities. Smart scheduling optimized for distance and timing.</p>
</div>

<div className="group transition-all hover:bg-indigo-500/5 hover:border-indigo-500/30 bg-white/5 border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8" style={{maskImage: 'linear-gradient(220deg, transparent, black 20%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(220deg, transparent, black 20%, black 80%, transparent)'}}>
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-indigo-500/10" style={{}}>
<svg className="lucide lucide-cloud-sun w-6 h-6 text-indigo-400" data-lucide="cloud-sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="M20 12h2"></path><path d="m19.07 4.93-1.41 1.41"></path><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"></path><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3">Smart Replanning</h3>
<p className="text-slate-400 text-sm leading-relaxed" style={{}}>Real-time adjustments based on weather forecasts and local events. Your itinerary adapts automatically to changing conditions.</p>
</div>
</div>

<div className="md:p-12 bg-white/5 border-white/10 border rounded-2xl mt-16 pt-8 pr-8 pb-8 pl-8" style={{maskImage: 'linear-gradient(210deg, transparent, black 60%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(210deg, transparent, black 60%, black 100%, transparent)'}}>
<div className="grid md:grid-cols-2 gap-8">
<div className="">
<h3 className="text-2xl font-semibold mb-6">Partnership Revenue</h3>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-indigo-500/20" style={{}}>
<svg className="lucide lucide-check w-3 h-3 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<p className="text-sm text-slate-300" style={{}}><span className="font-medium text-white">Hotel Bookings:</span> Earn up to 12% commission on hotel reservations</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-indigo-500/20" style={{}}>
<svg className="lucide lucide-check w-3 h-3 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<p className="text-sm text-slate-300" style={{}}><span className="font-medium text-white">Activity Tours:</span> Affiliate revenue from GetYourGuide &amp; Viator</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-indigo-500/20" style={{}}>
<svg className="lucide lucide-check w-3 h-3 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<p className="text-sm text-slate-300" style={{}}><span className="font-medium text-white">Flight Bookings:</span> Partner commissions from Skyscanner integrations</p>
</div>
</div>
</div>
</div>
<div className="">
<h3 className="text-2xl font-semibold mb-6">Smart Features</h3>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-indigo-500/20" style={{}}>
<svg className="lucide lucide-zap w-3 h-3 text-indigo-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div>
<p className="text-sm text-slate-300" style={{}}><span className="font-medium text-white">Live Weather:</span> Real-time weather integration for smart replanning</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-indigo-500/20" style={{}}>
<svg className="lucide lucide-zap w-3 h-3 text-indigo-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div>
<p className="text-sm text-slate-300" style={{}}><span className="font-medium text-white">Local Events:</span> Auto-discover festivals, concerts, and local happenings</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-indigo-500/20" style={{}}>
<svg className="lucide lucide-zap w-3 h-3 text-indigo-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div>
<p className="text-sm text-slate-300" style={{}}><span className="font-medium text-white">Mobile Export:</span> Download itineraries for offline access on the go</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section className="max-w-7xl mx-auto px-6 py-24">
<div className="mb-12">
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-medium text-white/50 uppercase tracking-widest">Services</span>
<div className="h-px flex-1 bg-white/10"></div>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">What TravelAI Offers</h2>
<p className="lg:text-lg leading-relaxed text-base text-neutral-300 mb-8" style={{}}>From personalized itineraries to smart bookings, we provide comprehensive travel planning services powered by cutting-edge AI technology.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-x-8 gap-y-8">

<div className="group hover:bg-white/10 transition-all duration-500 overflow-hidden bg-neutral-800/40 rounded-xl relative" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)'}}>

<div className="relative overflow-hidden bg-neutral-900/90 h-80 border-white/10 border rounded-xl" style={{}}>

<div className="relative z-10 mx-auto mt-6 w-[88%] h-[76%] rounded-xl bg-neutral-950 border border-white/15 shadow-[0_32px_80px_rgba(0,0,0,0.7)]" style={{}}>

<div className="flex items-center justify-between p-4 border-b border-white/5">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-stone-500/80"></div>
<div className="w-3 h-3 rounded-full bg-stone-500/80"></div>
<div className="w-3 h-3 rounded-full bg-stone-500/80"></div>
</div>
<p className="text-xs text-white/60">Trip Planner</p>
</div>

<div className="px-5 pt-4">
<div className="space-y-3">
<div className="bg-[#ffffff]/20 w-8 h-2 rounded-full"></div>
<div className="bg-white/20 w-32 h-2 rounded-full"></div>
<div className="flex bg-white/5 w-full h-10 border-white/10 border rounded-lg pr-3 pl-3 items-center">
<div className="bg-[#ffffff]/20 w-6 h-2 rounded-full"></div>
</div>
<div className="grid grid-cols-3 gap-2 mt-4">
<div className="flex bg-white/5 h-12 border-white/10 border rounded-lg items-center justify-center">
<svg className="lucide lucide-map-pin w-4 h-4 text-white/30" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div className="h-12 rounded-lg bg-indigo-400/10 border border-indigo-400/20 flex items-center justify-center" style={{}}>
<svg className="lucide lucide-calendar w-4 h-4 text-indigo-400" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<div className="h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-compass w-4 h-4 text-white/30" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
</div>
</div>
</div>

<div className="absolute right-4 bottom-6">
<div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" style={{}}></div>
</div>
</div>
</div>

<div className="pt-6 pr-6 pb-6 pl-6">
<div className="flex mb-4 items-center justify-between">
<span className="text-lg font-semibold text-neutral-400 tracking-tight">01</span>
<svg className="lucide lucide-map text-neutral-400 w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-3">AI Itinerary Planning</h3>
<p className="text-white/60 leading-relaxed text-sm">Chat with our AI to create personalized day-by-day itineraries based on your preferences, budget, and travel style.</p>
</div>
</div>

<div className="group hover:bg-white/10 transition-all duration-500 overflow-hidden bg-neutral-800/40 rounded-xl relative" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 75%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 75%, transparent)'}}>

<div className="overflow-hidden bg-neutral-900/90 h-80 border-white/10 border rounded-xl relative">

<div className="relative z-10 bg-neutral-950 w-[88%] h-[76%] border-white/15 border rounded-xl mt-6 mr-auto ml-auto shadow-[0_32px_80px_rgba(0,0,0,0.7)]" style={{}}>

<div className="flex border-white/5 border-b pt-4 pr-4 pb-4 pl-4 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-stone-500/80"></div>
<div className="w-3 h-3 rounded-full bg-stone-500/80"></div>
<div className="w-3 h-3 rounded-full bg-stone-500/80"></div>
</div>
<p className="text-xs text-white/60">Weather Monitor</p>
</div>

<div className="px-5 pt-4">
<div className="space-y-4">

<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-blue-400/20 border border-blue-400/30 flex items-center justify-center" style={{}}>
<svg className="lucide lucide-cloud-rain w-5 h-5 text-blue-400" data-lucide="cloud-rain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M16 14v6"></path><path d="M8 14v6"></path><path d="M12 16v6"></path></svg>
</div>
<div className="flex-1">
<div className="bg-white/20 w-20 h-2 rounded-full mb-2"></div>
<div className="h-1.5 bg-[#ffffff]/20 w-16 rounded-full"></div>
</div>
</div>

<div className="flex bg-white/5 w-full h-10 border-white/10 border rounded-lg pr-3 pl-3 items-center">
<svg className="lucide lucide-alert-triangle text-neutral-500 w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
<div className="h-1.5 bg-[#ffffff]/10 w-24 rounded-full"></div>
</div>

<div className="space-y-2 pt-2">
<div className="bg-[#ffffff]/5 w-full h-6 border-neutral-400/20 border rounded-lg"></div>
<div className="bg-[#ffffff]/5 w-4/5 h-6 border-white/10 border rounded-lg"></div>
</div>
</div>
</div>

<div className="absolute right-5 bottom-5 text-blue-400 opacity-90" style={{}}>
<svg className="lucide lucide-cloud-sun w-5 h-5" data-lucide="cloud-sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="M20 12h2"></path><path d="m19.07 4.93-1.41 1.41"></path><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"></path><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"></path></svg>
</div>
</div>
</div>

<div className="pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-4">
<span className="text-lg font-semibold text-neutral-400 tracking-tight">02</span>
<svg className="lucide lucide-cloud-sun w-[20px] h-[20px] text-neutral-400" data-icon-replaced="true" data-lucide="cloud-sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="M20 12h2"></path><path d="m19.07 4.93-1.41 1.41"></path><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"></path><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"></path></svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-3">Smart Weather Replanning</h3>
<p className="text-white/60 leading-relaxed text-sm">Real-time weather monitoring automatically suggests indoor alternatives when rain is forecasted, keeping your trip on track.</p>
</div>
</div>

<div className="group hover:bg-white/10 transition-all duration-500 overflow-hidden bg-neutral-800/40 rounded-xl relative" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)'}}>

<div className="relative h-80 rounded-xl bg-neutral-900/90 border border-white/10 overflow-hidden" style={{}}>

<div className="relative z-10 bg-neutral-950 w-[88%] h-[76%] border-white/15 border rounded-xl mt-6 mr-auto ml-auto shadow-[0_32px_80px_rgba(0,0,0,0.7)]" style={{}}>

<div className="flex border-white/5 border-b pt-4 pr-4 pb-4 pl-4 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-stone-500/80"></div>
<div className="w-3 h-3 rounded-full bg-stone-500/80"></div>
<div className="w-3 h-3 rounded-full bg-stone-500/80"></div>
</div>
<p className="text-xs text-white/60">Bookings</p>
</div>

<div className="pt-4 pr-5 pl-5 space-y-3">
<div className="flex items-center gap-2">
<svg className="lucide lucide-hotel w-4 h-4 text-neutral-400" data-lucide="hotel" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 22v-6.57"></path><path d="M12 11h.01"></path><path d="M12 7h.01"></path><path d="M14 15.43V22"></path><path d="M15 16a5 5 0 0 0-6 0"></path><path d="M16 11h.01"></path><path d="M16 7h.01"></path><path d="M8 11h.01"></path><path d="M8 7h.01"></path><rect height="20" rx="2" width="16" x="4" y="2"></rect></svg>
<div className="h-2 w-16 rounded-full bg-neutral-400/60" style={{}}></div>
<div className="h-2 w-8 rounded-full bg-white/30"></div>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-plane w-4 h-4 text-indigo-400" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
<div className="bg-[#ffffff]/20 w-20 h-2 rounded-full"></div>
</div>
<div className="pl-4 space-y-2">
<div className="h-8 w-full rounded-lg bg-gradient-to-r to-indigo-400/10 border flex items-center px-3 from-neutral-400/10 border-neutral-400/20" style={{}}>
<div className="flex gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-400" style={{}}></div>
<div className="w-1.5 h-1.5 rounded-full bg-indigo-400" style={{}}></div>
</div>
</div>
<div className="flex gap-3">
<div className="bg-[#ffffff]/20 w-12 h-2 rounded-full"></div>
<div className="h-2 w-6 rounded-full bg-neutral-400/60" style={{}}></div>
</div>
</div>

<div className="flex items-center gap-2 mt-4 px-3 py-2 rounded-lg border bg-neutral-400/10 border-neutral-400/20" style={{}}>
<svg className="lucide lucide-dollar-sign w-3 h-3 text-neutral-400" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
<span className="text-xs text-neutral-400" style={{}}>12% earned</span>
</div>
</div>

<div className="absolute right-4 bottom-6 opacity-90 text-neutral-400" style={{}}>
<svg className="lucide lucide-check-circle w-5 h-5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
</div>
</div>

<div className="pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-4">
<span className="text-lg font-semibold text-neutral-400 tracking-tight">03</span>
<svg className="lucide lucide-dollar-sign w-5 h-5 text-neutral-400/60" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-3">Booking &amp; Affiliates</h3>
<p className="text-white/60 leading-relaxed text-sm">Seamless integration with booking partners. Earn affiliate commissions on hotels, flights, and activities while providing value to users.</p>
</div>
</div>
</div>
</section>

<section className="sm:px-6 sm:py-10 md:py-12 lg:pl-8 lg:pr-8 max-w-7xl mr-auto ml-auto pt-8 pr-4 pb-8 pl-4" id="testimonials">
<div className="flex items-center justify-between mb-8">
<div className="space-y-1">
<p className="text-xs sm:text-sm text-zinc-400" style={{}}>What travelers say</p>
<h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight">Real Experiences</h2>
</div>
</div>
<div className="overflow-hidden sm:rounded-3xl relative">
<div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-slate-950 to-transparent z-10" style={{}}></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-slate-950 to-transparent z-10" style={{}}></div>
<div className="py-8 relative">
<div className="flex gap-5 will-change-transform animate-[marquee-ltr_45s_linear_infinite]">
<article className="shrink-0 w-[360px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5" style={{}}>
<div className="flex items-center gap-3">
<div className="size-9 rounded-full flex items-center justify-center bg-indigo-500/20" style={{}}>
<svg className="lucide lucide-user w-4 h-4 text-indigo-400" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100" style={{}}>Sarah Chen</span>
<svg className="lucide lucide-badge-check w-3.5 h-3.5 text-indigo-400" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400" style={{}}>@sarahexplores</p>
</div>
</div>
<p className="mt-4 text-sm text-zinc-300" style={{}}>
            TravelAI planned my entire Japan trip in minutes! The itinerary was perfect—it even adjusted when it rained in Kyoto. Worth every penny.
          </p>
</article>
<article className="shrink-0 w-[360px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5" style={{}}>
<div className="flex items-center gap-3">
<div className="size-9 rounded-full flex items-center justify-center bg-indigo-500/20" style={{}}>
<svg className="lucide lucide-user w-4 h-4 text-indigo-400" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100" style={{}}>Marcus Reid</span>
<svg className="lucide lucide-badge-check w-3.5 h-3.5 text-indigo-400" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400" style={{}}>@wandermarcus</p>
</div>
</div>
<p className="mt-4 text-sm text-zinc-300" style={{}}>
            The affiliate earnings are a nice bonus! I've already made back my subscription cost by booking through the recommended partners.
          </p>
</article>
<article className="shrink-0 w-[360px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5" style={{}}>
<div className="flex items-center gap-3">
<div className="size-9 rounded-full flex items-center justify-center bg-indigo-500/20" style={{}}>
<svg className="lucide lucide-user w-4 h-4 text-indigo-400" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100" style={{}}>Elena Rossi</span>
<svg className="lucide lucide-badge-check w-3.5 h-3.5 text-indigo-400" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400" style={{}}>@elenatravel</p>
</div>
</div>
<p className="mt-4 text-sm text-zinc-300" style={{}}>
            As someone who plans a lot of trips, this saves me hours. The AI knows my preferences now—every itinerary gets better!
          </p>
</article>
<article className="shrink-0 w-[360px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5" style={{}}>
<div className="flex items-center gap-3">
<div className="size-9 rounded-full flex items-center justify-center bg-indigo-500/20" style={{}}>
<svg className="lucide lucide-user w-4 h-4 text-indigo-400" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100" style={{}}>Sarah Chen</span>
<svg className="lucide lucide-badge-check w-3.5 h-3.5 text-indigo-400" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400" style={{}}>@sarahexplores</p>
</div>
</div>
<p className="mt-4 text-sm text-zinc-300" style={{}}>
            TravelAI planned my entire Japan trip in minutes! The itinerary was perfect—it even adjusted when it rained in Kyoto.
          </p>
</article>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20" id="faq">
<div className="md:p-10 bg-zinc-500/5 border-white/10 border rounded-3xl ring-white/10 ring-1 pt-6 pr-6 pb-6 pl-6 shadow-2xl backdrop-blur-xl" style={{maskImage: 'linear-gradient(90deg, transparent, black 0%, black 75%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 0%, black 75%, transparent)'}}>
<div className="mb-8 flex items-center justify-between">
<div className="">
<h1 className="text-3xl sm:text-4xl font-medium text-white tracking-tight">Frequently Asked Questions</h1>
<p className="mt-1 text-sm text-slate-400" style={{}}>Everything you need to know about TravelAI</p>
</div>
</div>
<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
<div className="faq-item rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5">
<button className="faq-trigger flex text-left w-full gap-4 items-center justify-between" type="button">
<span className="text-base md:text-lg font-semibold leading-6 tracking-tight text-slate-100" style={{}}>How does TravelAI create itineraries?</span>
<span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10">
<svg className="lucide lucide-plus faq-icon h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</button>
<div className="faq-content mt-3 text-sm leading-6 text-slate-300" style={{display: 'none'}}>
          TravelAI uses advanced AI to analyze your preferences, travel style, and budget. It cross-references thousands of destinations, attractions, and reviews to create personalized itineraries that match your interests perfectly.
        </div>
</div>
<div className="faq-item rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5">
<button className="faq-trigger flex w-full items-center justify-between gap-4 text-left" type="button">
<span className="text-base md:text-lg font-semibold leading-6 tracking-tight text-slate-100" style={{}}>How does affiliate revenue work?</span>
<span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10">
<svg className="lucide lucide-plus faq-icon h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</button>
<div className="faq-content mt-3 text-sm leading-6 text-slate-300" style={{display: 'none'}}>
          When you book hotels, flights, or activities through our partner links, we earn a commission and share a portion with you. It's completely transparent—you see the same prices, but both you and we benefit from the bookings.
        </div>
</div>
<div className="faq-item rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5">
<button className="faq-trigger flex w-full items-center justify-between gap-4 text-left" type="button">
<span className="text-base md:text-lg font-semibold leading-6 tracking-tight text-slate-100" style={{}}>Can I modify AI-generated itineraries?</span>
<span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10">
<svg className="lucide lucide-plus faq-icon h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</button>
<div className="faq-content mt-3 text-sm leading-6 text-slate-300" style={{display: 'none'}}>
          Absolutely! All itineraries are fully customizable. You can add, remove, or rearrange activities, change timings, and ask the AI to regenerate specific days based on new preferences.
        </div>
</div>
<div className="faq-item rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5">
<button className="faq-trigger flex w-full items-center justify-between gap-4 text-left" type="button">
<span className="text-base md:text-lg font-semibold leading-6 tracking-tight text-slate-100" style={{}}>What happens if weather changes?</span>
<span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10">
<svg className="lucide lucide-plus faq-icon h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</button>
<div className="faq-content mt-3 text-sm leading-6 text-slate-300" style={{display: 'none'}}>
          TravelAI monitors weather forecasts in real-time. If rain or extreme weather is predicted, it automatically suggests indoor alternatives and can replan your day with a single click.
        </div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden my-10 relative" id="cta">
<div className="text-white max-w-7xl mr-auto ml-auto pr-0 pb-24 pl-0">
<div className="md:p-12 bg-gradient-to-br to-indigo-500/10 from-indigo-500/10 max-w-7xl border-indigo-500/20 border rounded-3xl ring-indigo-500/10 ring-1 mr-auto ml-auto pt-8 pr-8 pb-8 pl-8 shadow-2xl backdrop-blur-xl" style={{maskImage: 'linear-gradient(220deg, transparent, black 20%, black 40%, transparent)', WebkitMaskImage: 'linear-gradient(220deg, transparent, black 20%, black 40%, transparent)'}}>
<div className="text-center max-w-2xl mx-auto">
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">Ready to Plan Your Next Adventure?</h3>
<p className="mt-4 text-lg text-slate-300" style={{}}>Join thousands of travelers using AI to create perfect itineraries. Start planning in seconds.</p>
<div className="mt-8 flex gap-4 justify-center flex-wrap">
<button className="inline-flex items-center gap-2 transition-colors hover:bg-indigo-500/20 text-sm text-white bg-indigo-500/10 ring-indigo-500/30 ring-1 rounded-full pt-2 pr-4 pb-2 pl-4">
<svg className="lucide lucide-sparkles w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
            Start Planning Free
          </button>
<button className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/20 font-medium px-8 py-4 rounded-full transition-all">
<svg className="lucide lucide-play-circle w-5 h-5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
            Watch Demo
          </button>
</div>
<p className="mt-6 text-sm text-slate-400" style={{}}>No credit card required • Free 10 itinerary credits</p>
</div>
</div>
</div>
</section>

<footer className="border-white/10 border-t pt-16 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
<div className="space-y-4">
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<a className="inline-flex items-center justify-center bg-center mix-blend-normal w-[150px] h-[30px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7ff394b9-ee65-4919-9a47-9f047cf002a2_800w.webp)] bg-cover rounded invert" href="#"></a>
</div>
<p className="text-sm text-slate-400 max-w-xs" style={{}}>Your AI-powered travel concierge. Plan perfect trips in seconds with personalized itineraries.</p>
<div className="flex items-center gap-3">
<a className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white transition-colors" href="#" style={{}}>
<svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white transition-colors" href="#" style={{}}>
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white transition-colors" href="#" style={{}}>
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
</div>
<div>
<h3 className="text-sm font-semibold text-white mb-4">Product</h3>
<ul className="space-y-3">
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#features" style={{}}>Features</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#" style={{}}>Pricing</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#" style={{}}>API</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#" style={{}}>Partners</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-white mb-4">Company</h3>
<ul className="space-y-3">
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#" style={{}}>About</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#" style={{}}>Blog</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#" style={{}}>Careers</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#testimonials" style={{}}>Reviews</a></li>
</ul>
</div>
<div className="">
<h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
<ul className="space-y-3">
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#" style={{}}>Help Center</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#faq" style={{}}>FAQ</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#" style={{}}>Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-sm text-slate-400" style={{}}>© 2024 TravelAI. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#" style={{}}>Privacy Policy</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#" style={{}}>Terms of Service</a>
</div>
</div>
</div>
</footer>





.
    </>
  );
}
