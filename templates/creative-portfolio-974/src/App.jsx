import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



/*
Sequence animation on scroll when visible. Requires Animation Keyframe. Usage:
1) Insert this code in the <head> along with the Animation Keyframe code.
2) Add to Tailwind Classes: [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll
*/
(function () {
// Inject CSS for paused/running states
const style = document.createElement("style");
style.textContent = `
/* Default: paused */
.animate-on-scroll { animation-play-state: paused !important; }
/* Activated by JS */
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el); // observing twice is a no-op
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



  (function() {
    const container = document.getElementById('card-grid-container');
    const cards = container.querySelectorAll('.card-item');
    let activeCard = null;
    
    cards.forEach((card, index) => {
      card.addEventListener('click', function(e) {
        e.stopPropagation();
        
        if (activeCard === card) {
          // Reset if clicking the same card
          resetCards();
          return;
        }
        
        // Reset all cards first
        cards.forEach((c) => {
          c.style.filter = 'blur(8px)';
          c.style.opacity = '0.4';
          c.style.transform = '';
          c.style.position = 'relative';
          c.style.zIndex = '1';
          c.style.transition = 'all 0.7s ease-out';
        });
        
        // Center and focus the clicked card
        card.style.filter = 'blur(0px)';
        card.style.opacity = '1';
        card.style.transform = 'translate(0, 0) rotate(0deg) scale(1.15)';
        card.style.position = 'relative';
        card.style.zIndex = '10';
        card.style.transition = 'all 0.7s ease-out';
        
        activeCard = card;
      });
    });
    
    // Click outside to reset
    document.addEventListener('click', function(e) {
      if (activeCard && !container.contains(e.target)) {
        resetCards();
      }
    });
    
    function resetCards() {
      cards.forEach((c) => {
        c.style.filter = '';
        c.style.opacity = '';
        c.style.transform = '';
        c.style.position = '';
        c.style.zIndex = '';
      });
      activeCard = null;
    }
  })();
  


  (function () {
    const el = document.getElementById('processRadar');
    if (!el || !window.Chart) return;
    const ctx = el.getContext('2d');
    const gradient = el.getContext('2d').createLinearGradient(0, 0, 0, 160);
    gradient.addColorStop(0, 'rgba(168, 85, 247, 0.45)');
    gradient.addColorStop(1, 'rgba(168, 85, 247, 0.05)');

    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['System', 'Process', 'Speed', 'Manual', 'Repetition'],
        datasets: [{
          label: 'Analysis',
          data: [85, 70, 45, 90, 76],
          backgroundColor: gradient,
          borderColor: 'rgba(168, 85, 247, 0.7)',
          borderWidth: 1,
          pointBackgroundColor: '#a855f7',
          pointBorderColor: 'transparent',
          pointRadius: 2
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        elements: { line: { borderJoinStyle: 'round' } },
        scales: {
          r: {
            beginAtZero: true,
            suggestedMax: 100,
            angleLines: { color: 'rgba(255,255,255,0.06)' },
            grid: { color: 'rgba(255,255,255,0.06)' },
            pointLabels: { color: 'rgba(229,229,229,0.9)', font: { size: 10, family: 'Inter' } },
            ticks: { display: false }
          }
        }
      }
    });
  })();



      // Initialize lucide icons
      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({
          attrs: {
            'stroke-width': 1.5
          }
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="0WrRbFIPaKoWVkiQWBG0"></div>
</div>
<div className="" id="wrapper">

<div className="gradient-blur">
<div></div>
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
      height: 20%;
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
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 12.5%,
          rgba(0, 0, 0, 1) 25%,
          rgba(0, 0, 0, 0) 37.5%);
    }

    .gradient-blur>div:nth-of-type(1) {
      z-index: 2;
      backdrop-filter: blur(1px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 12.5%,
          rgba(0, 0, 0, 1) 25%,
          rgba(0, 0, 0, 1) 37.5%,
          rgba(0, 0, 0, 0) 50%);
    }

    .gradient-blur>div:nth-of-type(2) {
      z-index: 3;
      backdrop-filter: blur(2px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 25%,
          rgba(0, 0, 0, 1) 37.5%,
          rgba(0, 0, 0, 1) 50%,
          rgba(0, 0, 0, 0) 62.5%);
    }

    .gradient-blur>div:nth-of-type(3) {
      z-index: 4;
      backdrop-filter: blur(4px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 37.5%,
          rgba(0, 0, 0, 1) 50%,
          rgba(0, 0, 0, 1) 62.5%,
          rgba(0, 0, 0, 0) 75%);
    }

    .gradient-blur>div:nth-of-type(4) {
      z-index: 5;
      backdrop-filter: blur(8px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 50%,
          rgba(0, 0, 0, 1) 62.5%,
          rgba(0, 0, 0, 1) 75%,
          rgba(0, 0, 0, 0) 87.5%);
    }

    .gradient-blur>div:nth-of-type(5) {
      z-index: 6;
      backdrop-filter: blur(16px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 62.5%,
          rgba(0, 0, 0, 1) 75%,
          rgba(0, 0, 0, 1) 87.5%,
          rgba(0, 0, 0, 0) 100%);
    }

    .gradient-blur>div:nth-of-type(6) {
      z-index: 7;
      backdrop-filter: blur(32px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 75%,
          rgba(0, 0, 0, 1) 87.5%,
          rgba(0, 0, 0, 1) 100%);
    }

    .gradient-blur::after {
      content: "";
      z-index: 8;
      backdrop-filter: blur(64px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 87.5%,
          rgba(0, 0, 0, 1) 100%);
    }
  </style>
</div>

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 opacity-60" style="background:
        radial-gradient(800px 400px at 20% 10%, rgba(59,130,246,.16), transparent 60%),
        radial-gradient(800px 400px at 80% 10%, rgba(249,115,22,.14), transparent 60%),
        radial-gradient(1000px 600px at 50% 100%, rgba(0,0,0,.08), transparent 70%)"></div>
</div>

<header className="fixed z-50 top-0 right-0 left-0">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex h-16 items-center justify-between">

<a className="inline-flex items-center gap-2.5 transition-colors hover:text-neutral-200 text-lg font-semibold text-white tracking-tight" href="#">AI Integration</a>

<nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
<a className="hover:text-white transition-colors font-sans" href="#">Features</a>
<a className="hover:text-white transition-colors flex items-center gap-2 font-sans" href="#">
      Start Creating
    </a>
<a className="hover:text-white transition-colors font-sans" href="#">Plans</a>
<a className="hover:text-white transition-colors font-sans" href="#">Support</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900/60 text-neutral-200 ring-1 ring-white/10 backdrop-blur hover:bg-neutral-900 transition border-gradient before:rounded-full">
<svg className="lucide lucide-user w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(229, 229, 229)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</button>
<button aria-label="Menu" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900/60 text-neutral-200 ring-1 ring-white/10 backdrop-blur hover:bg-neutral-900 transition border-gradient before:rounded-full">
<svg className="lucide lucide-menu w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(229, 229, 229)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</header>

<main className="relative">
<section className="sm:pb-28 sm:pt-36 max-w-7xl mr-auto ml-auto pt-36 pr-6 pb-28 pl-6">

<div className="relative">
<div className="sm:px-0 sm:py-0 lg:px-0 pt-0 pr-0 pb-0 pl-0">

<div className="mx-auto max-w-3xl text-center" style={{animation: 'fadeSlideIn 1s ease-out 0.1s both'}}>
<h1 className="leading-[1.06] sm:text-6xl lg:text-7xl text-4xl font-semibold tracking-tighter pr-4px pl-4px relative">Web &amp; Brand Design<span className="block bg-clip-text font-semibold text-transparent tracking-tighter bg-gradient-to-r from-white to-neutral-400 py-2" style={{color: 'rgba(0, 0, 0, 0)', position: 'static'}}>AI  Integration</span></h1>
</div>

<div className="mx-auto mt-10 max-w-5xl px-2">
</div>

<div className="sm:mt-12 max-w-5xl mt-12 mr-auto ml-auto relative" style={{animation: 'fadeSlideIn 1s ease-out 0.3s both'}}>

<div className="-top-5 sm:-top-7 sm:left-[16%] z-50 absolute left-[12%]">
<div className="relative">
<span className="inline-flex items-center gap-2 border-gradient before:rounded-full text-sm font-medium text-white bg-blue-600 rounded-full pt-1.5 pr-3.5 pb-1.5 pl-3.5 shadow-md">designer<svg className="lucide lucide-arrow-up-right lucide-at-sign w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="arrow-up-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span>
<span className="absolute -bottom-1 left-6 h-2 w-2 rotate-45 bg-blue-600"></span>
</div>
</div>

<div className="-top-4 sm:-top-6 sm:right-[14%] z-50 absolute right-[10%]">
<div className="relative">
<span className="inline-flex items-center gap-2 border-gradient before:rounded-full text-sm font-medium text-white bg-orange-500 rounded-full pt-1.5 pr-3.5 pb-1.5 pl-3.5 shadow-md">artist<svg className="lucide lucide-arrow-up-right lucide-at-sign w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="arrow-up-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span>
<span className="absolute -bottom-1 left-6 h-2 w-2 rotate-45 bg-orange-500"></span>
</div>
</div>

<div className="flex justify-center">
<div className="grid grid-cols-6 sm:gap-4 gap-x-3 gap-y-3" id="card-grid-container">

<div className="card-item col-span-2 sm:col-span-1 self-end transform -rotate-8 translate-y-3 sm:translate-y-5 transition-all duration-700 ease-out cursor-pointer hover:scale-105" data-card-index="0">
<div className="aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-lg border-gradient before:rounded-2xl transition-shadow duration-500 hover:shadow-2xl">
<img alt="Artwork card" className="bg-center w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/72a7ce34-9b2f-4293-aff1-a5cac46b5f3c_800w.webp"/>
</div>
</div>

<div className="card-item col-span-2 sm:col-span-1 self-end transform -rotate-2 translate-y-5 sm:translate-y-7 transition-all duration-700 ease-out cursor-pointer hover:scale-105" data-card-index="1">
<div className="aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-lg border-gradient before:rounded-2xl transition-shadow duration-500 hover:shadow-2xl">
<img alt="3D render card" className="w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c430d894-0b9a-4c2f-a12e-b3fd9c70a707_800w.webp"/>
</div>
</div>

<div className="card-item col-span-2 sm:col-span-1 self-end transform rotate-3 translate-y-2 transition-all duration-700 ease-out cursor-pointer hover:scale-105" data-card-index="2">
<div className="aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-lg border-gradient before:rounded-2xl transition-shadow duration-500 hover:shadow-2xl">
<img alt="Minimal shapes card" className="w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4d672ed1-9059-4d03-9993-dd4c178947d3_800w.webp"/>
</div>
</div>

<div className="card-item col-span-2 sm:col-span-1 self-end transform rotate-0 -translate-y-1 transition-all duration-700 ease-out cursor-pointer hover:scale-105" data-card-index="3">
<div className="aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-lg border-gradient before:rounded-2xl transition-shadow duration-500 hover:shadow-2xl">
<img alt="Abstract red card" className="w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4d78ceda-d84d-446b-847b-0b346d974d41_800w.webp"/>
</div>
</div>

<div className="card-item col-span-2 sm:col-span-1 self-end transform -rotate-2 translate-y-3 transition-all duration-700 ease-out cursor-pointer hover:scale-105" data-card-index="4">
<div className="aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-lg border-gradient before:rounded-2xl transition-shadow duration-500 hover:shadow-2xl">
<img alt="Mountains card" className="w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1b525526-71e5-4493-962f-aa758f0bd085_800w.webp"/>
</div>
</div>

<div className="card-item col-span-2 sm:col-span-1 self-end transform rotate-6 translate-y-6 transition-all duration-700 ease-out cursor-pointer hover:scale-105" data-card-index="5">
<div className="aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-lg border-gradient before:rounded-2xl transition-shadow duration-500 hover:shadow-2xl">
<img alt="Green minimal card" className="w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ef34397-c7cf-417e-aa9f-e279bac8c59d_800w.webp"/>
</div>
</div>

</div>
</div>
</div>

<p className="text-base text-neutral-300 text-center max-w-xl mt-8 mr-auto ml-auto" style={{animation: 'fadeSlideIn 1s ease-out 0.5s both'}}>Build your portfolio, connect with collectors, and share your creative journey with a vibrant global community.</p>

<div className="mt-8 flex items-center justify-center gap-4" style={{animation: 'fadeSlideIn 1s ease-out 0.7s both'}}>
<button className="group inline-flex lg:h-11 leading-none -tracking-[0.02em] outline outline-1 outline-white/10 hover:outline-white/20 transition-all duration-500 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-blue-400/50 text-base font-semibold text-white h-10 max-w-[300px] rounded-full pr-6 pl-6 relative items-center justify-center border-gradient before:rounded-full" rel="noopener noreferrer" target="_blank">

<span aria-hidden="true" className="absolute -inset-px h-full w-full overflow-hidden rounded-full" style={{opacity: '1'}}>

<span className="absolute inset-0 rounded-full" style={{background: 'linear-gradient(140deg, rgba(15,15,17,1) 0%, rgba(30,30,33,1) 35%, rgba(45,45,50,1) 70%, rgba(20,20,22,1) 100%)'}}></span>

<span className="absolute -top-[52px] right-1 size-20 bg-blue-400 opacity-15 mix-blend-lighten blur-[35px] rounded-full"></span>
<span className="absolute top-0 right-1 h-[28px] w-20 bg-blue-300 opacity-20 mix-blend-lighten blur-[25px] rounded-full"></span>
<span className="absolute -bottom-[42px] -left-[19px] size-20 bg-purple-400 opacity-10 mix-blend-lighten blur-[40px] rounded-full"></span>

<span className="absolute inset-0 overflow-hidden rounded-full">
<span className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/15 opacity-0 skew-x-12 blur-sm transition-all duration-700 group-hover:opacity-30 group-hover:translate-x-[220%] rounded-full"></span>
</span>

<span className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-full"></span>
</span>

<span aria-hidden="true" className="z-20 blur-[1px] w-full h-full rounded-full absolute top-0 left-0">
<span className="-top-px -left-px z-20 w-full h-full rounded-full absolute" style={{boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.12)'}}></span>
</span>

<span className="relative z-10 flex items-center gap-1.5 text-[14px] leading-none font-normal -tracking-[0.04em] lg:text-base text-white/95 rounded-full font-sans">
    Get started today
  </span>

<span className="pointer-events-none absolute inset-0 ring-0 ring-blue-400/0 transition-[ring,opacity] duration-500 group-hover:ring-4 group-hover:opacity-25 rounded-full"></span>
</button>
<a className="inline-flex items-center gap-2 rounded-full bg-neutral-800/60 px-5 py-3 text-sm font-medium text-neutral-100 ring-1 ring-white/10 hover:bg-neutral-800 border-gradient before:rounded-full font-sans" href="#">
                View Examples
                <svg className="lucide lucide-external-link h-4 w-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</div>
</div>
</div>

</section>

<div className="mx-auto max-w-7xl px-6">
<div className="h-px w-full bg-white/10"></div>
</div>
</main><section className="sm:pt-24 sm:pb-24 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both] max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 animate">
<div className="animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both] text-center max-w-2xl mr-auto ml-auto">
<span className="inline-flex items-center ring-1 ring-white/10 border-gradient before:rounded-full text-xs text-neutral-300 bg-neutral-900/70 rounded-full pt-1 pr-3 pb-1 pl-3">
      How We Work
    </span>
<h2 className="sm:text-5xl md:text-6xl leading-[1.1] text-4xl font-semibold tracking-tight mt-6">
      Transform Your Workflow in Three Steps
    </h2>
<p className="text-base text-neutral-300 mt-4 font-sans">
      From initial discovery to full deployment, we guide you through every stage of your automation journey.
    </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-12 gap-x-6 gap-y-6">

<div className="sm:p-8 border-gradient before:rounded-2xl animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both] bg-neutral-900/50 ring-white/10 ring-1 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full pointer-events-none">
</div>
<span className="inline-flex items-center text-xs text-neutral-300 bg-neutral-800/70 ring-1 ring-white/10 rounded-full px-2.5 py-1 font-sans">
        Phase 1
      </span>
<h3 className="mt-4 text-2xl sm:text-3xl tracking-tight font-sans font-semibold">Discovery &amp; Analysis</h3>
<p className="mt-2 text-sm sm:text-base text-neutral-300 font-sans">
        We dive deep into your operations to identify bottlenecks and opportunities for intelligent automation.
      </p>
<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="rounded-xl bg-neutral-900/60 ring-1 ring-white/10 p-4 border-gradient before:rounded-xl">
<div className="relative">
<div className="aspect-square">
<canvas className="" height="451" id="processRadar" style={{display: 'block', boxSizing: 'border-box', height: '225px', width: '225px'}} width="451"></canvas>
</div>
<div className="mt-3 text-xs text-neutral-400 font-sans">
              Evaluating operational metrics…
            </div>
</div>
</div>

<div className="grid gap-2">
<div className="flex items-center justify-between rounded-lg bg-neutral-900/60 ring-1 ring-white/10 px-3 py-2">
<div className="flex items-center gap-2">
<svg className="w-4 h-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
<span className="text-sm font-sans">Infrastructure audit</span>
</div>
<span className="text-[10px] text-neutral-400 font-sans">Complete</span>
</div>
<div className="flex items-center justify-between rounded-lg bg-neutral-900/60 ring-1 ring-white/10 px-3 py-2">
<div className="flex items-center gap-2">
<svg className="w-4 h-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3h7v7H3z"></path>
<path d="M14 3h7v7h-7z"></path>
<path d="M14 14h7v7h-7z"></path>
<path d="M3 14h7v7H3z"></path>
</svg>
<span className="text-sm font-sans">Workflow mapping</span>
</div>
<span className="text-[10px] text-neutral-400 font-sans">In Progress</span>
</div>
<div className="flex items-center justify-between rounded-lg bg-neutral-900/60 ring-1 ring-white/10 px-3 py-2">
<div className="flex items-center gap-2">
<svg className="w-4 h-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h18"></path>
<path d="M12 3v18"></path>
</svg>
<span className="text-sm font-sans">Performance analysis</span>
</div>
<span className="text-[10px] text-neutral-400 font-sans">Critical</span>
</div>
<div className="flex items-center justify-between rounded-lg bg-neutral-900/60 ring-1 ring-white/10 px-3 py-2">
<div className="flex items-center gap-2">
<svg className="w-4 h-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m7 11 2-2 2 2 2-2 2 2"></path>
<path d="M5 19h14"></path>
</svg>
<span className="text-sm font-sans">Time consumption</span>
</div>
<span className="text-[10px] text-neutral-400 font-sans">85%</span>
</div>
<div className="flex items-center justify-between rounded-lg bg-neutral-900/60 ring-1 ring-white/10 px-3 py-2">
<div className="flex items-center gap-2">
<svg className="w-4 h-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9l10 13L22 9 12 2 2 9z"></path>
<path d="M12 22V8"></path>
</svg>
<span className="text-sm font-sans">Automation potential</span>
</div>
<span className="text-[10px] text-neutral-400 font-sans">Very High</span>
</div>
</div>
</div>
</div>

<div className="sm:p-8 border-gradient before:rounded-2xl bg-neutral-900/50 ring-white/10 ring-1 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.4s_both]">
<div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full pointer-events-none">
</div>
<span className="inline-flex items-center text-xs text-neutral-300 bg-neutral-800/70 ring-1 ring-white/10 rounded-full px-2.5 py-1 font-sans">
        Phase 2
      </span>
<h3 className="mt-4 text-2xl sm:text-3xl tracking-tight font-sans font-semibold">Build &amp; Integrate</h3>
<p className="mt-2 text-sm sm:text-base text-neutral-300 font-sans">
        Our engineers create custom solutions that seamlessly integrate with your existing systems and processes.
      </p>
<div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-4">

<div className="md:col-span-1 flex md:flex-col gap-2">
<button aria-label="Files" className="h-9 w-9 inline-flex items-center justify-center rounded-lg bg-neutral-900/60 ring-1 ring-white/10 hover:bg-neutral-900 transition border-gradient before:rounded-lg">
<svg className="w-4 h-4 text-neutral-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 7V5a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v2"></path><path d="M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7"></path></svg>
</button>
<button aria-label="Search" className="h-9 w-9 inline-flex items-center justify-center rounded-lg bg-neutral-900/60 ring-1 ring-white/10 hover:bg-neutral-900 transition border-gradient before:rounded-lg">
<svg className="w-4 h-4 text-neutral-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</button>
<button aria-label="Settings" className="h-9 w-9 inline-flex items-center justify-center rounded-lg bg-neutral-900/60 ring-1 ring-white/10 hover:bg-neutral-900 transition border-gradient before:rounded-lg">
<svg className="w-4 h-4 text-neutral-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v2"></path><path d="M12 19v2"></path><path d="M4.93 4.93l1.41 1.41"></path><path d="M17.66 17.66l1.41 1.41"></path><path d="M3 12h2"></path><path d="M19 12h2"></path><path d="M6.34 17.66l1.41-1.41"></path><path d="M16.24 7.76l1.41-1.41"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>

<div className="md:col-span-4">
<div className="rounded-xl bg-neutral-950/70 ring-1 ring-white/10 overflow-hidden border-gradient before:rounded-xl">
<div className="flex items-center gap-2 px-4 py-2 bg-neutral-900/70 ring-0">
<span className="h-2.5 w-2.5 rounded-full bg-red-500/70"></span>
<span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70"></span>
<span className="h-2.5 w-2.5 rounded-full bg-green-500/70"></span>
<span className="ml-auto text-[10px] text-neutral-400 font-sans">workflow_engine.py</span>
</div>
<pre className="text-[12px] leading-6 px-4 py-4 overflow-auto text-neutral-200 font-sans"><span className="text-500 font-sans"># Intelligent workflow processor</span>
<span className="text-purple-400 font-sans">class</span> <span className="text-sky-300 font-sans">WorkflowEngine</span>:
    <span className="text-purple-400 font-sans">def</span> <span className="text-emerald-300 font-sans">process_task</span>(self, task):
        <span className="text-purple-400 font-sans">if</span> task.priority <span className="text-purple-400 font-sans">==</span> <span className="text-emerald-300 font-sans">'high'</span>:
            <span className="text-purple-400 font-sans">return</span> self.fast_track(task)

<span className="text-purple-400 font-sans">def</span> <span className="text-emerald-300 font-sans">optimize</span>(data):
    cleaned <span className="text-purple-400 font-sans">=</span> [x.process() <span className="text-purple-400 font-sans">for</span> x <span className="text-purple-400 font-sans">in</span> data]
    <span className="text-purple-400 font-sans">return</span> <span className="text-sky-300 font-sans">optimize_batch</span>(cleaned)
            </pre>
</div>
<div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
<div className="flex items-center gap-2 rounded-lg bg-neutral-900/60 ring-1 ring-white/10 px-3 py-2">
<svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 2H6a2 2 0 0 0-2 2v16l4-2 4 2 4-2 4 2V8z"></path>
</svg>
<span className="text-xs text-neutral-300 font-sans">Modular design</span>
</div>
<div className="flex items-center gap-2 rounded-lg bg-neutral-900/60 ring-1 ring-white/10 px-3 py-2">
<svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 7h-9"></path>
<path d="M14 17H5"></path>
<circle cx="17" cy="17" r="3"></circle>
<circle cx="7" cy="7" r="3"></circle>
</svg>
<span className="text-xs text-neutral-300 font-sans">Easy integration</span>
</div>
<div className="flex items-center gap-2 rounded-lg bg-neutral-900/60 ring-1 ring-white/10 px-3 py-2">
<svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m7 11 2-2 2 2 2-2 2 2"></path>
<path d="M5 19h14"></path>
</svg>
<span className="text-xs text-neutral-300 font-sans">Boost efficiency</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section className="sm:px-6 lg:px-8 sm:pb-20 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-20 pl-4">
<div className="text-center max-w-4xl mr-auto ml-auto">
<span className="inline-flex items-center gap-2 sm:px-4 sm:py-2 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both] text-xs font-medium text-violet-300 bg-violet-500/15 border-violet-400/30 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3">Creative Community</span>
<h2 className="sm:mt-6 sm:text-4xl lg:text-5xl xl:text-6xl animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both] text-3xl font-semibold tracking-tight mt-6">Join 50,000+ creative professionals from 180+ countries</h2>
<p className="sm:mt-4 sm:text-base animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both] text-sm font-normal text-neutral-300 mt-3">Connect with designers, artists, photographers, and creative innovators building exceptional portfolios and growing their careers.</p>
<div className="sm:mt-6 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.4s_both] mt-6">
<a className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-4 sm:px-6 py-2 sm:py-3 text-sm font-semibold text-white shadow-lg hover:bg-violet-400 transition-colors" href="#">
        Join Our Community
        <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
<div className="relative mt-8 sm:mt-12">
<style>
      @keyframes marquee-left {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-50%);
        }
      }
    </style>
<div className="mx-auto max-w-6xl overflow-hidden" style={{maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent), linear-gradient(to top, transparent, black 15%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent), linear-gradient(to top, transparent, black 15%)', maskComposite: 'intersect', WebkitMaskComposite: 'destination-in'}}>
<div className="flex w-max" style={{animation: 'marquee-left 80s linear infinite', willChange: 'transform'}}>
<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 sm:gap-4 flex-shrink-0 sm:pr-4 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.6s_both] pr-4 gap-x-2 gap-y-2">
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de692cd3-6ed5-40da-b589-663e89889a1c_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/42dfe760-aef6-44a2-bff9-70aa005c5961_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c18d9fac-84d4-4727-95df-38b04c62ac05_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c3e3fffd-33c5-442f-924a-7bc1032b2c0f_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/31996fe3-f9da-42d7-bf65-2cc5d5417271_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5989c16d-4aa3-4351-bfdb-fac959736459_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c39c735-18f1-4b74-aa61-180fbb2b4770_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cf90a7bf-fee3-4a9d-887b-c46bfea61ba8_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6209234e-73ff-4176-bf91-c05fa95cc596_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3f4ec54c-12b4-4eb2-a0c3-1d78cb6c9e02_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8cfa0961-8c53-4d57-b87c-3b8eaffcd08b_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/42f0787e-2f7f-4ae7-9c64-3f1d597bf1b8_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c8701b7a-a3f2-4ad0-95be-f2f027c8e390_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83ca20c0-64e5-412d-9c79-224a4ae90b74_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c920d31f-46c8-4f39-957b-9a8d8e511a1a_800w.jpg"/></div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-4 flex-shrink-0 pr-2 sm:pr-4">
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de692cd3-6ed5-40da-b589-663e89889a1c_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/42dfe760-aef6-44a2-bff9-70aa005c5961_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c18d9fac-84d4-4727-95df-38b04c62ac05_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c3e3fffd-33c5-442f-924a-7bc1032b2c0f_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9a421cf7-e975-430b-88c5-f554775493e1_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0c82a12e-5af1-47d3-963d-65c3987dd2be_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e63aa468-ae44-4756-84db-fcacd6cec9e2_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cf90a7bf-fee3-4a9d-887b-c46bfea61ba8_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6209234e-73ff-4176-bf91-c05fa95cc596_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3f4ec54c-12b4-4eb2-a0c3-1d78cb6c9e02_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8cfa0961-8c53-4d57-b87c-3b8eaffcd08b_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/42f0787e-2f7f-4ae7-9c64-3f1d597bf1b8_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a160135e-dfe8-4d26-b2e5-2915ebe6f3a2_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9a3ff98a-df58-478d-a4ae-f3c6d3f3ba61_800w.jpg"/></div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5"><img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7063bc06-62fe-4811-b5fa-4b1e09b26a81_800w.jpg"/></div>
</div>
</div>
</div>
</div>
</section><section className="sm:pt-24 sm:pb-24 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both] max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="text-center max-w-3xl mr-auto ml-auto">
<span className="inline-flex items-center rounded-full bg-neutral-900/70 ring-1 ring-white/10 px-3 py-1 text-xs text-neutral-300 border-gradient before:rounded-full font-sans">
      Client Success Stories
    </span>
<h2 className="sm:text-5xl md:text-6xl leading-[1.1] text-4xl tracking-tight mt-6 font-sans font-semibold">
      What Our Clients Are Saying
    </h2>
<p className="text-base text-neutral-300 mt-4 font-sans">
      Discover how creative professionals are transforming their portfolios with our platform.
    </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-12">

<div className="relative rounded-2xl ring-1 ring-white/10 bg-neutral-900/60 sm:p-8 pt-6 pr-6 pb-6 pl-6 border-gradient before:rounded-2xl animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both] bg-[radial-gradient(900px_220px_at_95%_120%,rgba(168,85,247,0.18),transparent)]">
<div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full pointer-events-none"></div>
<div className="flex items-center gap-1 text-amber-400">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="mt-4 text-base sm:text-lg text-neutral-200 font-sans">
        "This platform completely changed how I present my work. The intuitive interface and beautiful layouts helped me land three major clients in the first month alone."
      </p>
<div className="mt-6 flex items-center gap-3">
<img alt="Marcus Chen" className="ring-white/10 ring-1 w-10 h-10 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca2dff12-04ff-4713-9404-e3cb60f16c8a_320w.jpg"/>
<div className="">
<p className="text-sm font-sans font-medium text-neutral-100">Marcus Chen</p>
<p className="text-xs text-neutral-400 font-sans">UI/UX Designer at Creative Studio</p>
</div>
</div>
</div>

<div className="relative rounded-2xl ring-1 ring-white/10 bg-neutral-900/60 sm:p-8 pt-6 pr-6 pb-6 pl-6 border-gradient before:rounded-2xl animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.25s_both] bg-[radial-gradient(900px_220px_at_95%_120%,rgba(168,85,247,0.18),transparent)]">
<div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full pointer-events-none"></div>
<div className="flex items-center gap-1 text-amber-400">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="mt-4 text-base sm:text-lg text-neutral-200 font-sans">
        "Finally, a portfolio platform that understands photographers. The galleries are stunning and my images have never looked better. My bookings increased by 60%."
      </p>
<div className="mt-6 flex items-center gap-3">
<img alt="Isabella Rodriguez" className="w-10 h-10 object-cover ring-white/10 ring-1 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f461de65-1971-4615-aa18-9a8586b86561_320w.webp"/>
<div className="">
<p className="text-sm font-sans font-medium text-neutral-100">Isabella Rodriguez</p>
<p className="text-xs text-neutral-400 font-sans">Freelance Photographer</p>
</div>
</div>
</div>

<div className="relative rounded-2xl ring-1 ring-white/10 bg-neutral-900/60 sm:p-8 pt-6 pr-6 pb-6 pl-6 border-gradient before:rounded-2xl animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both] bg-[radial-gradient(900px_220px_at_95%_120%,rgba(168,85,247,0.18),transparent)]">
<div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full pointer-events-none"></div>
<div className="flex items-center gap-1 text-amber-400">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="mt-4 text-base sm:text-lg text-neutral-200 font-sans">
        "As an illustrator, showing my process is crucial. The customizable project pages let me tell the full story behind each piece. It's a game changer."
      </p>
<div className="mt-6 flex items-center gap-3">
<img alt="Alex Thompson" className="w-10 h-10 object-cover ring-white/10 ring-1 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eca707cc-a5b7-439a-b4fd-247f6106c2e1_320w.jpg"/>
<div className="">
<p className="text-sm font-sans font-medium text-neutral-100">Alex Thompson</p>
<p className="text-xs text-neutral-400 font-sans">Digital Illustrator &amp; Artist</p>
</div>
</div>
</div>

<div className="relative rounded-2xl ring-1 ring-white/10 bg-neutral-900/60 sm:p-8 pt-6 pr-6 pb-6 pl-6 border-gradient before:rounded-2xl animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.35s_both] bg-[radial-gradient(900px_220px_at_95%_120%,rgba(168,85,247,0.18),transparent)]">
<div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full pointer-events-none"></div>
<div className="flex items-center gap-1 text-amber-400">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="mt-4 text-base sm:text-lg text-neutral-200 font-sans">
        "I moved my entire studio portfolio here and couldn't be happier. The client feedback has been overwhelmingly positive—they love the clean, modern aesthetic."
      </p>
<div className="mt-6 flex items-center gap-3">
<img alt="Sarah Kim" className="ring-1 ring-white/10 w-10 h-10 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66d0dc63-851b-4e89-a6a3-cab612c98a06_320w.webp"/>
<div>
<p className="text-sm font-sans font-medium text-neutral-100">Sarah Kim</p>
<p className="text-xs text-neutral-400 font-sans">Creative Director at Nexus Design</p>
</div>
</div>
</div>
</div>
</section><section className="sm:pt-24 sm:pb-24 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both] max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="text-center max-w-3xl mr-auto ml-auto">
<span className="inline-flex items-center rounded-full bg-neutral-900/70 ring-1 ring-white/10 px-3 py-1 text-xs text-neutral-300 border-gradient before:rounded-full font-sans">
      Simple Pricing
    </span>
<h2 className="sm:text-5xl md:text-6xl leading-[1.1] text-4xl tracking-tight mt-6 font-sans font-semibold">
      Choose Your Perfect Plan
    </h2>
<p className="text-base text-neutral-300 mt-4 font-sans">
      Start free and scale as you grow. All plans include our core features.
    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12">

<div className="relative rounded-2xl ring-1 ring-white/10 bg-neutral-900/60 sm:p-8 pt-6 pr-6 pb-6 pl-6 border-gradient before:rounded-2xl animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
<div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full pointer-events-none"></div>
<h3 className="text-xl font-sans font-semibold">Starter</h3>
<p className="text-sm text-neutral-400 mt-2 font-sans">Perfect for getting started</p>
<div className="mt-6">
<span className="text-5xl tracking-tight font-sans font-semibold">$0</span>
<span className="text-neutral-400 text-base font-sans">/month</span>
</div>
<ul className="mt-8 space-y-3">
<li className="flex items-center gap-3 text-sm text-neutral-300 font-sans">
<svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
          5 projects
        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-sans">
<svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Basic templates
        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-sans">
<svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Community support
        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-sans">
<svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
          1GB storage
        </li>
</ul>
<button className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-neutral-800/60 px-5 py-3 text-sm font-medium text-neutral-100 ring-1 ring-white/10 hover:bg-neutral-800 border-gradient before:rounded-full transition font-sans">
        Get Started
      </button>
</div>

<div className="relative rounded-2xl ring-1 ring-violet-400/30 bg-neutral-900/60 sm:p-8 pt-6 pr-6 pb-6 pl-6 border-gradient before:rounded-2xl animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.25s_both] bg-[radial-gradient(900px_220px_at_50%_50%,rgba(168,85,247,0.22),transparent)] md:scale-105 shadow-2xl shadow-violet-500/20">
<div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent rounded-full pointer-events-none"></div>
<div className="absolute -top-3 left-1/2 -translate-x-1/2">
<span className="inline-flex items-center rounded-full bg-violet-500 px-3 py-1 text-xs font-medium text-white font-sans">Most Popular</span>
</div>
<h3 className="text-xl font-sans font-semibold">Pro</h3>
<p className="text-sm text-neutral-400 mt-2 font-sans">For serious creatives</p>
<div className="mt-6">
<span className="text-5xl tracking-tight font-sans font-semibold">$19</span>
<span className="text-neutral-400 text-base font-sans">/month</span>
</div>
<ul className="mt-8 space-y-3">
<li className="flex items-center gap-3 text-sm text-neutral-300 font-sans">
<svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Unlimited projects
        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-sans">
<svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Premium templates
        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-sans">
<svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Priority support
        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-sans">
<svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
          100GB storage
        </li>
</ul>
<button className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-400 transition shadow-lg shadow-violet-500/30 font-sans">
        Start Pro Trial
      </button>
</div>

<div className="relative rounded-2xl ring-1 ring-white/10 bg-neutral-900/60 sm:p-8 pt-6 pr-6 pb-6 pl-6 border-gradient before:rounded-2xl animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both]">
<div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full pointer-events-none"></div>
<h3 className="text-xl font-sans font-semibold">Enterprise</h3>
<p className="text-sm text-neutral-400 mt-2 font-sans">For teams and agencies</p>
<div className="mt-6">
<span className="text-5xl tracking-tight font-sans font-semibold">$49</span>
<span className="text-neutral-400 text-base font-sans">/month</span>
</div>
<ul className="mt-8 space-y-3">
<li className="flex items-center gap-3 text-sm text-neutral-300 font-sans">
<svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Everything in Pro
        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-sans">
<svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Team collaboration
        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-sans">
<svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
          White-label options
        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-sans">
<svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
          1TB storage
        </li>
</ul>
<button className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-neutral-800/60 px-5 py-3 text-sm font-medium text-neutral-100 ring-1 ring-white/10 hover:bg-neutral-800 border-gradient before:rounded-full transition font-sans">
        Contact Sales
      </button>
</div>
</div>
</section><div className="mx-auto max-w-7xl px-6">
<div className="h-px w-full bg-white/10"></div>
</div><section className="sm:pt-24 sm:pb-24 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both] max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="relative rounded-3xl ring-1 ring-white/10 bg-neutral-900/60 sm:p-16 pt-12 pr-6 pb-12 pl-6 border-gradient before:rounded-3xl overflow-hidden bg-[radial-gradient(900px_400px_at_50%_50%,rgba(168,85,247,0.2),transparent)]">
<div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full pointer-events-none"></div>

<div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
<div className="relative text-center max-w-3xl mx-auto">
<h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight font-sans font-semibold">
        Ready to showcase your work?
      </h2>
<p className="text-base sm:text-lg text-neutral-300 mt-6 font-sans">
        Join thousands of creative professionals who trust our platform to present their best work. Start building your portfolio today.
      </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group inline-flex lg:h-12 leading-none -tracking-[0.02em] outline outline-1 outline-white/10 hover:outline-white/20 transition-all duration-500 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-blue-400/50 text-base font-semibold text-white h-11 w-full sm:w-auto rounded-full pr-8 pl-8 relative items-center justify-center border-gradient before:rounded-full" rel="noopener noreferrer" target="_blank">
<span aria-hidden="true" className="absolute -inset-px h-full w-full overflow-hidden rounded-full">
<span className="absolute inset-0 rounded-full" style={{background: 'linear-gradient(140deg, rgba(15,15,17,1) 0%, rgba(30,30,33,1) 35%, rgba(45,45,50,1) 70%, rgba(20,20,22,1) 100%)'}}></span>
<span className="absolute -top-[52px] right-1 size-20 bg-blue-400 opacity-15 mix-blend-lighten blur-[35px] rounded-full"></span>
<span className="absolute top-0 right-1 h-[28px] w-20 bg-blue-300 opacity-20 mix-blend-lighten blur-[25px] rounded-full"></span>
<span className="absolute -bottom-[42px] -left-[19px] size-20 bg-purple-400 opacity-10 mix-blend-lighten blur-[40px] rounded-full"></span>
<span className="absolute inset-0 overflow-hidden rounded-full">
<span className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/15 opacity-0 skew-x-12 blur-sm transition-all duration-700 group-hover:opacity-30 group-hover:translate-x-[220%] rounded-full"></span>
</span>
<span className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-full"></span>
</span>
<span aria-hidden="true" className="z-20 blur-[1px] w-full h-full rounded-full absolute top-0 left-0">
<span className="-top-px -left-px z-20 w-full h-full rounded-full absolute" style={{boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.12)'}}></span>
</span>
<span className="relative z-10 flex items-center gap-2 text-[15px] leading-none font-medium -tracking-[0.04em] text-white/95 rounded-full font-sans">
            Start for Free
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
<span className="pointer-events-none absolute inset-0 ring-0 ring-blue-400/0 transition-[ring,opacity] duration-500 group-hover:ring-4 group-hover:opacity-25 rounded-full"></span>
</button>
<a className="inline-flex items-center gap-2 rounded-full bg-transparent px-6 py-3 text-sm font-medium text-neutral-300 ring-1 ring-white/10 hover:bg-white/5 transition w-full sm:w-auto justify-center font-sans" href="#">
          View Live Examples
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</div>
<p className="text-xs text-neutral-400 mt-6 font-sans">
        No credit card required • Free forever • Upgrade anytime
      </p>
</div>
</div>
</section><footer className="border-t border-white/10 bg-black">
<div className="max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-8 pl-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 pb-12">

<div className="col-span-2">
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e2bb527-bd5b-49c0-ab02-6df2869bcd3a_1600w.png)] bg-cover rounded" href="#"></a>
<p className="mt-4 text-sm text-neutral-400 max-w-xs font-sans">
          The professional platform for creative portfolios. Showcase your work beautifully.
        </p>
<div className="flex items-center gap-3 mt-6">
<a aria-label="Twitter" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900/60 text-neutral-300 ring-1 ring-white/10 hover:bg-neutral-900 transition" href="#">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900/60 text-neutral-300 ring-1 ring-white/10 hover:bg-neutral-900 transition" href="#">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900/60 text-neutral-300 ring-1 ring-white/10 hover:bg-neutral-900 transition" href="#">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a aria-label="GitHub" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900/60 text-neutral-300 ring-1 ring-white/10 hover:bg-neutral-900 transition" href="#">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>

<div>
<h3 className="text-sm font-semibold text-white font-sans">Product</h3>
<ul className="mt-4 space-y-3">
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Features</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Templates</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Pricing</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Integrations</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-semibold text-white font-sans">Resources</h3>
<ul className="mt-4 space-y-3">
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Documentation</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Help Center</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Blog</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Community</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-semibold text-white font-sans">Company</h3>
<ul className="mt-4 space-y-3">
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">About</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Careers</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Contact</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Partners</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-semibold text-white font-sans">Legal</h3>
<ul className="mt-4 space-y-3">
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Privacy</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Terms</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Security</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Cookies</a></li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-white/10">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-sm text-neutral-400 font-sans">
          © 2024 Creative Platform. All rights reserved.
        </p>
<div className="flex items-center gap-6">
<a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Status</a>
<a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Sitemap</a>
<a className="text-sm text-neutral-400 hover:text-white transition font-sans" href="#">Accessibility</a>
</div>
</div>
</div>
</div>
</footer><div className="mx-auto max-w-7xl px-6">
<div className="h-px w-full bg-white/10"></div>
</div>


    </>
  );
}
