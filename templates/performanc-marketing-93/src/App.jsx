import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head||document.body).appendChild(i)}}();
    


    (function () {
      const style = document.createElement("style");
      style.textContent = `
        .animate-on-scroll { animation-play-state: paused !important; }
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
        }, { threshold: 0.15, rootMargin: "0px 0px -10% 0px" });
      }
      window.initInViewAnimations = function (selector = ".animate-on-scroll") {
        document.querySelectorAll(selector).forEach((el) => {
          window.__inViewIO.observe(el);
        });
      };
      document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
    })();
  


    // Mobile menu logic
    const mobileBtn = document.getElementById('mobileMenuToggle');

    if (mobileBtn) {
      mobileBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Mobile menu clicked');
      });
    }

    // Initialize icons with 1.5 stroke width
    lucide.createIcons({ attrs: { 'stroke-width': '1.5' } });

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component -z-10 w-full h-[1040px] absolute top-0">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="vTTCp5g4cVl9nwjlT56Z"></div>

</div>
<style>
    @keyframes fadeSlideIn {
      0% { opacity: 0; transform: translateY(30px); filter: blur(8px); }
      100% { opacity: 1; transform: translateY(0); filter: blur(0px); }
    }
  </style>


<div className="h-full overflow-y-auto w-full transition-opacity duration-500" id="landing-view">
<header className="relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">

<nav className="flex mt-6 items-center justify-between">
<a aria-label="X.O. Continental home" className="flex items-center gap-3" href="/">

<svg aria-label="X.O. Continental logo" className="w-[36px] h-[36px]" data-icon-replaced="true" fill="none" role="img" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '36px', height: '36px'}} viewbox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
<title>X.O. Continental</title>
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="gold" x1="0" x2="90" y1="0" y2="90">
<stop stop-color="#D6B05A"></stop>
<stop offset="1" stop-color="#B8892D"></stop>
</lineargradient>
</defs>

<g fill="none" opacity="0.95" stroke="url(#gold)" strokeLinecap="round" strokeWidth="6">
<path d="M45 9 A36 36 0 0 1 72 21"></path>
<path d="M81 45 A36 36 0 0 1 69 72"></path>
<path d="M45 81 A36 36 0 0 1 18 69"></path>
<path d="M9 45 A36 36 0 0 1 21 18"></path>
</g>

<g fill="url(#gold)" opacity="0.98">
<polygon points="45,7 52,39 45,33 38,39"></polygon>
<polygon points="83,45 51,52 57,45 51,38"></polygon>
<polygon points="45,83 38,51 45,57 52,51"></polygon>
<polygon points="7,45 39,38 33,45 39,52"></polygon>
<polygon points="66,19 54,40 50,36 54,32"></polygon>
<polygon points="71,66 50,54 54,50 58,54"></polygon>
<polygon points="24,71 36,50 40,54 36,58"></polygon>
<polygon points="19,24 40,36 36,40 32,36"></polygon>
<circle cx="45" cy="45" fill="#E6C77A" opacity="0.9" r="3.5"></circle>
</g>
</svg>
<span className="sr-only">X.O. Continental</span>
</a>
<div className="hidden md:flex md:gap-x-2 bg-white/5 border-white/10 border rounded-full pt-1 pr-1 pb-1 pl-1 backdrop-blur-lg gap-y-1 items-center">
<a className="hover:text-white text-sm font-medium text-white/80 font-geist pt-2 pr-3 pb-2 pl-3" href="#manifesto">Approach</a>
<a className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-geist" href="#ecosystem">Services</a>
<a className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-geist" href="#pricing">Plans</a>
<div className="relative inline-block group text-xs rounded-full">
<a className="animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] relative z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] text-white bg-neutral-900/60 border-white/20 border pt-3 pr-6 pb-3 pl-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] text-xs rounded-full cursor-pointer inline-flex" href="#application">
<span className="relative z-10 inline-flex items-center gap-2 font-medium text-xs rounded-full font-geist">Book a Call</span>
<span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transition-[left,right] duration-500 ease-out group-hover:left-0 group-hover:right-0 text-xs rounded-full"></span>
<span aria-hidden="true" className="glow pointer-events-none absolute inset-0 -z-10 text-xs rounded-full" style={{transform: 'scale(0.95) translate(0px, -24px)'}}></span>
</a>
</div>
</div>
<button className="md:hidden inline-flex text-sm font-medium font-geist bg-white/5 border-white/10 border rounded-lg pt-2 pr-3 pb-2 pl-3 backdrop-blur gap-x-2 gap-y-2 items-center" id="mobileMenuToggle">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
            Menu
          </button>
</nav>

<section className="sm:pt-20 md:pt-48 md:pb-24 text-center max-w-5xl z-10 mr-auto ml-auto pt-20 pb-32 relative">
<h1 className="sm:text-6xl md:text-7xl [animation:fadeSlideIn_1s_ease-out_0.2s_forwards] text-4xl tracking-tighter font-geist opacity-0 max-w-5xl mr-auto ml-auto">
            Grow with Performance.<br/>Powered by X.O. Continental.
          </h1>
<p className="sm:text-lg [animation:fadeSlideIn_1s_ease-out_0.3s_both] text-base font-normal text-white/70 font-geist max-w-2xl mt-6 mr-auto ml-auto">
            We help ambitious brands turn attention into predictable revenue with full-funnel digital marketing: strategy, creative, media, and conversion.
          </p>
<div className="flex flex-col sm:flex-row [animation:fadeSlideIn_1s_ease-out_0.4s_both] mt-8 gap-x-3 gap-y-3 items-center justify-center">
<a className="group relative inline-flex min-w-[140px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] overflow-hidden font-semibold text-neutral-400 tracking-tight bg-neutral-800 border-neutral-600 border rounded-full pt-3 pr-5 pb-3 pl-5 items-center justify-center" href="#application">
<span className="relative z-10 font-medium rounded-full transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md font-geist">Get a Growth Audit</span>
<span className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium opacity-0 rounded-full blur-md font-geist">Book a Call</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent via-neutral-200 to-transparent rounded-full blur-sm"></span>
</a>
<a className="inline-flex items-center gap-2 hover:bg-white/10 text-base font-medium text-white/90 bg-white/5 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur font-geist" href="#ecosystem">
              View Services
            </a>
</div>
</section>
</div>
</header>

<section className="z-10 sm:px-6 lg:px-8 max-w-7xl mt-12 mr-auto ml-auto pr-6 pb-16 pl-6 relative">
<p className="[animation:fadeSlideIn_1s_ease-out_0.5s_both] text-sm font-medium text-white/50 text-center mb-6 font-geist">Trusted by founders and teams scaling across channels</p>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-8 items-center justify-items-center [animation:fadeSlideIn_1s_ease-out_0.6s_both]">
<div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d052699d-f578-4c01-9806-f5b6c8609489_320w.png)] bg-cover rounded invert opacity-60 hover:opacity-100 transition-opacity"></div>
<div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3185425e-0207-434a-9554-cdb5bd455ea5_320w.png)] bg-cover rounded opacity-60 hover:opacity-100 transition-opacity"></div>
<div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c26c041-308e-4034-9227-5a6c57d94f4d_1600w.png)] bg-cover rounded opacity-60 hover:opacity-100 transition-opacity"></div>
<div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8de253ef-3c06-4a22-8e14-1a6a9d8580d5_320w.png)] bg-cover rounded opacity-60 hover:opacity-100 transition-opacity"></div>
<div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d3f4a52-05b5-4539-987a-d4b1ff330ef1_1600w.png)] bg-cover rounded opacity-60 hover:opacity-100 transition-opacity"></div>
<div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e561d59c-a675-431e-a035-187a88fbe4c2_1600w.png)] bg-cover rounded opacity-60 hover:opacity-100 transition-opacity"></div>
</div>
</section>

<section className="relative py-24 border-y border-white/5 bg-white/[0.02]" id="manifesto">
<div className="sm:px-6 lg:px-8 max-w-4xl mr-auto ml-auto pr-6 pl-6 text-center">
<h2 className="text-xs font-semibold tracking-wider text-emerald-500 uppercase font-geist animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">Our Approach</h2>
<h3 className="mt-4 text-3xl sm:text-5xl font-geist tracking-tighter text-white animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
          Marketing Without Measurement<br/>Is Just Noise.
        </h3>
<div className="mt-10 relative bg-neutral-900/50 border border-white/10 rounded-2xl p-8 sm:p-12 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both]">
<svg aria-hidden="true" className="absolute top-6 left-6 h-8 w-8 text-white/20 transform -translate-x-2 -translate-y-2" fill="currentColor" viewbox="0 0 32 32">
<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
</svg>
<p className="relative text-lg sm:text-xl text-white/80 font-geist leading-relaxed">
            X.O. Continental builds growth systems that connect creative, media, and conversion. We launch fast, measure everything, and optimize weekly so your acquisition cost drops while revenue compounds.
          </p>
<div className="mt-6 flex items-center justify-center gap-3">
<div className="h-px w-12 bg-white/20"></div>
<span className="text-sm font-medium text-white/50 font-geist">X.O. Continental Growth Team</span>
<div className="h-px w-12 bg-white/20"></div>
</div>
</div>
</div>
</section>

<section className="relative py-24 overflow-hidden">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-geist tracking-tighter">What Makes X.O. Continental Different</h2>
<p className="mt-4 text-white/60 font-geist max-w-2xl mx-auto">Fewer assumptions. More experiments. Clear reporting and measurable outcomes.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col gap-6 opacity-60 grayscale transition hover:opacity-80 hover:grayscale-0">
<h3 className="text-xl font-medium text-white/50 font-geist">Typical Marketing</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-white/50">
<svg className="lucide lucide-x h-5 w-5 text-red-500/50" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="font-geist">Vanity metrics over revenue</span>
</li>
<li className="flex items-center gap-3 text-white/50">
<svg className="lucide lucide-x h-5 w-5 text-red-500/50" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="font-geist">Monthly updates, slow iterations</span>
</li>
<li className="flex items-center gap-3 text-white/50">
<svg className="lucide lucide-x h-5 w-5 text-red-500/50" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="font-geist">Creatives without testing</span>
</li>
<li className="flex items-center gap-3 text-white/50">
<svg className="lucide lucide-x h-5 w-5 text-red-500/50" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="font-geist">Unclear tracking and attribution</span>
</li>
</ul>
</div>
<div className="relative p-8 rounded-2xl border border-emerald-500/30 bg-emerald-900/10 flex flex-col gap-6 shadow-[0_0_50px_-12px_rgba(16,185,129,0.2)]">
<div className="absolute -top-3 -right-3">
<span className="relative flex h-6 w-6">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-6 w-6 bg-emerald-500 items-center justify-center">
<svg className="lucide lucide-check h-3.5 w-3.5 text-black" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</span>
</div>
<h3 className="text-xl font-medium text-white font-geist">X.O. Continental</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-white">
<div className="bg-emerald-500/20 p-1 rounded-full">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-geist font-medium">Weekly testing &amp; iteration</span>
</li>
<li className="flex items-center gap-3 text-white">
<div className="bg-emerald-500/20 p-1 rounded-full">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-geist font-medium">Full-funnel tracking &amp; reporting</span>
</li>
<li className="flex items-center gap-3 text-white">
<div className="bg-emerald-500/20 p-1 rounded-full">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-geist font-medium">Creative built for performance</span>
</li>
<li className="flex items-center gap-3 text-white">
<div className="bg-emerald-500/20 p-1 rounded-full">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-geist font-medium">Growth roadmap aligned to ROI</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<footer className="xl:mt-0 border-white/10 border-t relative bg-black">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid gap-8 md:grid-cols-4">
<div className="md:col-span-2">
<a aria-label="X.O. Continental home" className="flex items-center gap-3" href="/">

<svg aria-label="X.O. Continental logo" className="h-7 w-auto" fill="none" role="img" viewbox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
<title>X.O. Continental</title>
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="gold-footer" x1="0" x2="90" y1="0" y2="90">
<stop stop-color="#D6B05A"></stop>
<stop offset="1" stop-color="#B8892D"></stop>
</lineargradient>
</defs>
<g fill="none" opacity="0.95" stroke="url(#gold-footer)" strokeLinecap="round" strokeWidth="6">
<path d="M45 9 A36 36 0 0 1 72 21"></path>
<path d="M81 45 A36 36 0 0 1 69 72"></path>
<path d="M45 81 A36 36 0 0 1 18 69"></path>
<path d="M9 45 A36 36 0 0 1 21 18"></path>
</g>
<g fill="url(#gold-footer)" opacity="0.98">
<polygon points="45,7 52,39 45,33 38,39"></polygon>
<polygon points="83,45 51,52 57,45 51,38"></polygon>
<polygon points="45,83 38,51 45,57 52,51"></polygon>
<polygon points="7,45 39,38 33,45 39,52"></polygon>
<polygon points="66,19 54,40 50,36 54,32"></polygon>
<polygon points="71,66 50,54 54,50 58,54"></polygon>
<polygon points="24,71 36,50 40,54 36,58"></polygon>
<polygon points="19,24 40,36 36,40 32,36"></polygon>
<circle cx="45" cy="45" fill="#E6C77A" opacity="0.9" r="3.5"></circle>
</g>
</svg>
<span className="sr-only">X.O. Continental</span>
</a>
<p className="mt-4 text-sm text-white/70 max-w-md font-geist">
              X.O. Continental is a performance-driven digital marketing company helping brands scale with strategy, creative, media buying, and conversion optimization.
            </p>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight font-geist">Company</h4>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li><a className="hover:text-white font-geist" href="#manifesto">Approach</a></li>
<li><a className="hover:text-white font-geist" href="#ecosystem">Services</a></li>
<li><a className="hover:text-white font-geist" href="#pricing">Plans</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight font-geist">Legal</h4>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li><a className="hover:text-white font-geist" href="#">Terms of Service</a></li>
<li><a className="hover:text-white font-geist" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
<p className="text-xs text-white/50 font-geist">© <span className="font-geist" id="year">2025</span> X.O. Continental. All Rights Reserved.</p>
</div>
</div>
</footer>
</div>


    </>
  );
}
