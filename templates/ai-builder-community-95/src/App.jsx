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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



    (function() {
      const menuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      const hamburgerIcon = document.getElementById('hamburger-icon');
      const closeIcon = document.getElementById('close-icon');
      
      if (menuButton && mobileMenu && hamburgerIcon && closeIcon) {
        menuButton.addEventListener('click', function() {
          const isMenuOpen = !mobileMenu.classList.contains('hidden');
          
          if (isMenuOpen) {
            // Close menu
            mobileMenu.classList.add('hidden');
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
          } else {
            // Open menu
            mobileMenu.classList.remove('hidden');
            hamburgerIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
          }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
          if (!menuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.add('hidden');
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
          }
        });

        // Close menu on window resize to desktop size
        window.addEventListener('resize', function() {
          if (window.innerWidth >= 768) { // md breakpoint
            mobileMenu.classList.add('hidden');
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
          }
        });
      }
    })();
  


    document.addEventListener('DOMContentLoaded', () => {
      const targetEl = document.querySelector('[data-element-id="aura-emftr7nkh"]');
      if (!targetEl) return;

      const animateElements = targetEl.querySelectorAll('[data-animate]');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateElements.forEach(element => {
              // Remove animation start states to trigger the transition
              element.classList.remove('opacity-0', 'translate-y-8', 'blur-md');
            });
            // Stop observing once the animation has been triggered
            observer.unobserve(targetEl);
          }
        });
      }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
      });

      observer.observe(targetEl);
    });
  


    document.addEventListener('DOMContentLoaded', () => {
      const targetEl = document.getElementById('problem');
      if (!targetEl) return;

      const animateElements = targetEl.querySelectorAll('[data-animate]');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateElements.forEach(element => {
              // Remove animation start states to trigger the transition
              element.classList.remove('opacity-0', 'translate-y-8', 'blur-md');
            });
            // Stop observing once the animation has been triggered
            observer.unobserve(targetEl);
          }
        });
      }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
      });

      observer.observe(targetEl);
    });
  


    document.addEventListener('DOMContentLoaded', () => {
      const targetEl = document.getElementById('what-it-is');
      if (!targetEl) return;

      const animateElements = targetEl.querySelectorAll('[data-animate]');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateElements.forEach(element => {
              // Remove animation start states to trigger the transition
              element.classList.remove('opacity-0', 'translate-y-8', 'blur-md');
            });
            // Stop observing once the animation has been triggered
            observer.unobserve(targetEl);
          }
        });
      }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
      });

      observer.observe(targetEl);
    });
  


    document.addEventListener('DOMContentLoaded', () => {
      const targetEl = document.getElementById('aura-emfs7mn0g');
      if (!targetEl) return;

      const cards = targetEl.children;
      const cardElements = Array.from(cards).filter(el => el.tagName !== 'SCRIPT');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            cardElements.forEach(card => {
              card.classList.remove('opacity-0', 'translate-y-8', 'blur-md');
            });
            observer.unobserve(targetEl);
          }
        });
      }, {
        threshold: 0.1
      });

      observer.observe(targetEl);
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
      

<div className="aura-background-component top-0 w-full -z-10 absolute h-[1000px]"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="ty3N7ZPaIU7KlWixQFIc"></div>
</div>
<header className="relative z-50">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex pt-8 pb-8 items-center justify-between">

<a className="inline-flex items-center justify-center font-geist font-bold text-xl tracking-tight text-neutral-900" href="/">
        Solve <span className="text-blue-600 ml-1">Assembly</span>
</a>

<nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600">
<a className="hover:text-neutral-900 transition-colors font-geist" href="#problem">The Problem</a>
<a className="hover:text-neutral-900 transition-colors font-geist" href="#what-it-is">What It Is</a><a className="hover:text-neutral-900 transition-colors font-geist" href="#how-it-works">How It Works</a>
<a className="inline-flex items-center gap-2 hover:bg-neutral-800 transition-colors font-medium text-white font-geist bg-neutral-900 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="#waitlist">
          Join Waitlist
          <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</nav>

<button aria-label="Toggle menu" className="md:hidden inline-flex hover:bg-neutral-100 transition-colors bg-neutral-50 w-10 h-10 rounded-full items-center justify-center" id="mobile-menu-button">
<svg className="text-neutral-900" fill="none" height="20" id="hamburger-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h18"></path>
<path d="M3 6h18"></path>
<path className="" d="M3 18h18"></path>
</svg>
<svg className="text-neutral-900 hidden" data-icon-replaced="true" fill="none" height="20" id="close-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M18 6 6 18"></path>
<path className="" d="M6 6l12 12"></path>
</svg>
</button>
</div>

<div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-neutral-200 shadow-lg z-50 hidden" id="mobile-menu">
<nav className="pt-6 pr-6 pb-6 pl-6 space-y-4">
<a className="block hover:text-neutral-900 transition-colors text-base text-neutral-600 font-geist pt-2 pb-2" href="#problem">The Problem</a>
<a className="block hover:text-neutral-900 transition-colors text-base text-neutral-600 font-geist pt-2 pb-2" href="#what-it-is">What It Is</a>
<a className="block hover:text-neutral-900 transition-colors text-base text-neutral-600 font-geist pt-2 pb-2" href="#how-it-works">How It Works</a>
<div className="pt-4 border-t border-neutral-200">
<a className="inline-flex items-center gap-2 hover:bg-neutral-800 transition-colors justify-center font-medium text-white font-geist bg-neutral-900 w-full rounded-full pt-3 pr-4 pb-3 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="#waitlist">
            Join Waitlist
            <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</nav>
</div>
</div>

</header>
<main className="">
<section className="sm:px-8 max-w-7xl mr-auto ml-auto pr-6 pb-16 pl-6 pt-10">
<div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">

<div className="w-full" data-element-id="aura-emftr7nkh">

<div className="flex gap-3 mb-8 items-center justify-center opacity-0 translate-y-8 blur-md transition-all duration-700 ease-out" data-animate="">
<div className="flex -space-x-2">
<img alt="Member avatar 1" className="ring-2 ring-white w-7 h-7 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5aa0d46a-9a98-4044-bce9-68ec849538ef_320w.jpg"/>
<img alt="Member avatar 2" className="w-7 h-7 object-cover ring-white ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a847bbaa-3964-40c8-ad91-98b3d6429867_320w.jpg" style={{}}/>
<img alt="Member avatar 3" className="w-7 h-7 object-cover ring-white ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/054cd9f9-ea66-4ac7-8e45-659730cfc5a3_320w.jpg" style={{}}/>
</div>
<p className="text-sm text-neutral-600 font-geist">
      Pre-Launch — <span className="font-medium text-neutral-900 font-geist">30+ builders</span> already in
    </p>
</div>

<h1 className="sm:text-5xl md:text-[64px] leading-[1.05] text-4xl font-medium tracking-tighter font-geist mb-6 opacity-0 translate-y-8 blur-md transition-all duration-700 ease-out delay-150" data-animate="" data-element-id="aura-emftr7mpt">
    Stop Building AI Agents Alone.<br/>
<span className="text-blue-600">Build Them Together.</span>
</h1>
<p className="sm:text-lg leading-relaxed text-base text-neutral-600 font-geist mb-10 opacity-0 translate-y-8 blur-md transition-all duration-700 ease-out delay-300 max-w-2xl mx-auto" data-animate="">
    Solve Assembly is a hands-on builder group for marketers, consultants, and builders using Claude Code and agentic AI. Twice a month, we get on a live call and build together. Share skills, frameworks, recipes, and workflows — and go faster than you ever could solo.
  </p>

<div className="flex items-center justify-center gap-5 mb-16 opacity-0 translate-y-8 blur-md transition-all duration-700 ease-out delay-[450ms]" data-animate="">
<a className="group inline-flex items-center hover:bg-neutral-800 transition-colors font-medium text-white bg-neutral-900 rounded-full pt-3 pr-3 pb-3 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="#waitlist">
<span className="font-geist">Join the Waitlist</span>
<span className="ml-3 inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 group-hover:bg-white/15">
<iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</a>
<a className="inline-flex items-center gap-2 text-neutral-900 font-medium hover:opacity-80 font-geist" href="#how-it-works">
      Learn More
      <iconify-icon height="20" icon="solar:play-circle-linear" width="20"></iconify-icon>
</a>
</div>

</div>
</div>
</section>

<section className="sm:p-8 sm:py-8 relative bg-white max-w-7xl border-black/5 border rounded-3xl mt-12 mr-auto mb-20 ml-auto pt-12 pr-6 pb-12 pl-6" id="problem">

<div className="max-w-3xl mx-auto text-center transition-all duration-700 ease-out" data-animate="">
<span className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-3 block font-geist">The Problem</span>
<h2 className="sm:text-5xl lg:text-6xl leading-[1.05] text-4xl font-medium text-neutral-900 tracking-tighter font-geist">You're figuring it all out from scratch</h2>
<p className="sm:text-lg text-base text-neutral-600 mt-4 font-geist max-w-2xl mx-auto">Every agent, every workflow, every automation — built solo, debugged solo, shipped solo. Meanwhile, someone else already solved what you're stuck on last week.</p>
</div>

<div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">

<article className="bg-white rounded-3xl ring-1 ring-black/5 shadow-lg overflow-hidden transition-all duration-700 ease-out delay-150 p-6 sm:p-8" data-animate="">
<div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-6">
<iconify-icon className="text-blue-600" height="24" icon="solar:settings-minimalistic-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 font-geist">Rebuilding the wheel</h3>
<p className="text-sm text-neutral-600 mt-2 font-geist leading-relaxed">You spend hours building an agent that connects ClickUp to Google Ads — not knowing five other builders already cracked it.</p>
</div>
</article>

<article className="bg-white rounded-3xl ring-1 ring-black/5 shadow-lg overflow-hidden transition-all duration-700 ease-out delay-300 p-6 sm:p-8" data-animate="">
<div className="h-12 w-12 rounded-full bg-neutral-100 flex items-center justify-center mb-6">
<iconify-icon className="text-neutral-700" height="24" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 font-geist">No one to troubleshoot with</h3>
<p className="text-sm text-neutral-600 mt-2 font-geist leading-relaxed">When something breaks at 11pm, you're on your own. No Slack group has people doing exactly what you're doing at your level.</p>
</div>
</article>

<article className="bg-white rounded-3xl ring-1 ring-black/5 shadow-lg overflow-hidden transition-all duration-700 ease-out delay-[450ms] p-6 sm:p-8" data-animate="">
<div className="h-12 w-12 rounded-full bg-green-50 flex items-center justify-center mb-6">
<iconify-icon className="text-green-600" height="24" icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 font-geist">Moving slower than you should</h3>
<p className="text-sm text-neutral-600 mt-2 font-geist leading-relaxed">Solo builders hit walls that a 10-minute conversation with the right person would eliminate. Speed is a multiplayer advantage.</p>
</div>
</article>
</div>

<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 ease-out delay-[600ms]" data-animate="">
<div className="bg-neutral-100/50 ring-black/5 ring-1 rounded-3xl pt-6 pr-6 pb-6 pl-6">
<p className="text-3xl font-semibold tracking-tight text-neutral-900 font-geist">2</p>
<p className="text-sm text-neutral-600 mt-1 font-geist">live sessions per month</p>
</div>
<div className="bg-neutral-100/50 ring-black/5 ring-1 rounded-3xl pt-6 pr-6 pb-6 pl-6">
<p className="text-3xl font-semibold tracking-tight text-neutral-900 font-geist">30+</p>
<p className="text-sm text-neutral-600 mt-1 font-geist">active builders inside</p>
</div>
<div className="bg-neutral-100/50 ring-black/5 ring-1 rounded-3xl pt-6 pr-6 pb-6 pl-6">
<p className="text-3xl font-semibold tracking-tight text-neutral-900 font-geist">100%</p>
<p className="text-sm text-neutral-600 mt-1 font-geist">hands-on collaboration</p>
</div>
<div className="bg-neutral-100/50 ring-black/5 ring-1 rounded-3xl pt-6 pr-6 pb-6 pl-6">
<p className="text-3xl font-semibold text-neutral-900 tracking-tight font-geist">Invite</p>
<p className="text-sm text-neutral-600 font-geist mt-1">only curated group</p>
</div>
</div>

</section>

<section className="sm:px-8 mt-20 mb-20" id="what-it-is">
<div className="sm:py-28 max-w-7xl mr-auto ml-auto pt-20 pb-20">
<div className="sm:p-8 sm:py-8 bg-neutral-100/50 border-neutral-200/50 border rounded-3xl pt-6 pr-6 pb-6 pl-6">

<div className="text-center opacity-0 translate-y-8 blur-md transition-all duration-700 ease-out" data-animate="">
<span className="inline-flex items-center ring-1 ring-neutral-200 text-sm font-medium text-neutral-600 font-geist bg-white rounded-full pt-1 pr-3 pb-1 pl-3">What Solve Assembly Is</span>
<h2 className="sm:text-5xl lg:text-6xl text-4xl font-normal text-neutral-900 tracking-tighter font-geist mt-4">A hands-on builder group.</h2>
<p className="text-neutral-600 font-geist mt-3">Not a community. Not a mastermind.</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mt-10 items-start">

<div className="lg:col-span-5 opacity-0 translate-y-8 blur-md transition-all duration-700 ease-out delay-150" data-animate="">
<div className="bg-white rounded-[28px] ring-1 ring-black/5 overflow-hidden shadow-lg">

<div className="bg-neutral-900 p-6 sm:p-8">
<p className="text-white/90 text-sm font-geist">Solve Assembly</p>
<p className="mt-2 text-white text-4xl sm:text-5xl font-semibold tracking-tight font-geist">Included</p>
<p className="mt-2 text-white/80 text-sm font-geist">For all accepted waitlist members</p>
</div>

<div className="p-5 sm:p-6">
<div className="sm:p-5 bg-neutral-100/50 ring-black/5 ring-1 rounded-2xl pt-4 pr-4 pb-4 pl-4">
<h3 className="text-neutral-900 font-semibold tracking-tight font-geist">The Builder Group: Maximizing Your AI Workflows</h3>
<p className="text-neutral-700 text-sm mt-2 font-geist">Solve Assembly is where marketers, consultants, and builders who use Claude Code and other AI tools come together to build agentic AI — live, on camera, together. Twice a month.</p>
<div className="mt-3 flex items-center gap-3">
<div className="flex -space-x-2">
<img alt="Participant 1" className="ring-2 ring-white w-7 h-7 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e36aef18-f0f2-42d8-bcc3-86e5433f18f9_320w.jpg"/>
<img alt="Participant 2" className="w-7 h-7 object-cover ring-white ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79e0a89c-b04e-4a65-b214-cc33e9601ecb_320w.jpg"/>
<img alt="Participant 3" className="w-7 h-7 object-cover ring-white ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/075e4814-03ac-46d1-bfeb-bb23651c0d08_320w.jpg"/>
</div>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs text-neutral-700 ring-1 ring-black/10 font-geist">
                30+ accepted
              </span>
</div>
</div>

<div className="mt-6">
<p className="text-xs uppercase tracking-wider text-neutral-500 font-medium font-geist">What's included</p>
<ul className="mt-3 space-y-3">
<li className="flex items-start gap-3 text-neutral-900 text-sm font-geist">
<iconify-icon className="text-blue-600 mt-0.5 flex-shrink-0" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                Live Build Sessions
              </li>
<li className="flex items-start gap-3 text-neutral-900 text-sm font-geist">
<iconify-icon className="text-blue-600 mt-0.5 flex-shrink-0" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                Shared Library
              </li>
<li className="flex items-start gap-3 text-neutral-900 text-sm font-geist">
<iconify-icon className="text-blue-600 mt-0.5 flex-shrink-0" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                Co-Build Together
              </li>
<li className="flex items-start gap-3 text-neutral-900 text-sm font-geist">
<iconify-icon className="text-blue-600 mt-0.5 flex-shrink-0" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                Curated Group
              </li>
</ul>
</div>
</div>

<div className="pr-5 pb-5 pl-5">
<a className="inline-flex items-center justify-center hover:bg-neutral-800 transition text-sm font-medium text-white font-geist bg-blue-600 w-full h-12 rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] hover:bg-blue-700 transition-colors" href="#waitlist">
            Get Invited
            <iconify-icon className="ml-2" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="lg:col-span-1 flex items-center justify-center opacity-0 translate-y-8 blur-md transition-all duration-700 ease-out delay-300" data-animate="">
<div className="h-full w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent min-h-96 hidden lg:block"></div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent lg:hidden"></div>
</div>

<div className="lg:col-span-6 space-y-4">

<button className="hover:bg-neutral-50 transition flex text-left bg-white w-full ring-black/5 ring-1 rounded-2xl pt-4 pr-5 pb-4 pl-5 shadow-lg items-center justify-between opacity-0 translate-y-8 blur-md transition-all duration-700 ease-out delay-[450ms]" data-animate="" type="button">
<div className="min-w-0">
<p className="text-neutral-900 font-medium tracking-tight font-geist flex items-center gap-2">
<iconify-icon className="text-amber-500" height="20" icon="solar:bolt-linear" width="20"></iconify-icon> Live Build Sessions
          </p>
<p className="text-neutral-600 text-sm mt-1 font-geist">Twice a month on Google Meet. Not lectures. Not presentations. Hands-on building with other practitioners who are shipping real work.</p>
</div>
<iconify-icon className="text-neutral-400 flex-shrink-0" height="24" icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>

<div className="flex items-center px-5 opacity-0 translate-y-8 blur-md transition-all duration-700 ease-out delay-[500ms]" data-animate="">
<div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
</div>

<button className="hover:bg-neutral-50 transition flex text-left bg-white w-full ring-black/5 ring-1 rounded-2xl pt-4 pr-5 pb-4 pl-5 shadow-lg items-center justify-between opacity-0 translate-y-8 blur-md transition-all duration-700 ease-out delay-[550ms]" data-animate="" type="button">
<div className="min-w-0">
<p className="text-neutral-900 font-medium tracking-tight font-geist flex items-center gap-2">
<iconify-icon className="text-blue-500" height="20" icon="solar:book-bookmark-linear" width="20"></iconify-icon> Shared Library
          </p>
<p className="text-neutral-600 text-sm mt-1 font-geist">Skills, agents, workflows, and recipes contributed by members. Install what others have built. Share what you've created.</p>
</div>
<iconify-icon className="text-neutral-400 flex-shrink-0" height="24" icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>

<div className="flex items-center px-5 opacity-0 translate-y-8 blur-md transition-all duration-700 ease-out delay-[600ms]" data-animate="">
<div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
</div>

<button className="hover:bg-neutral-50 transition flex text-left bg-white w-full ring-black/5 ring-1 rounded-2xl pt-4 pr-5 pb-4 pl-5 shadow-lg items-center justify-between opacity-0 translate-y-8 blur-md transition-all duration-700 ease-out delay-[650ms]" data-animate="" type="button">
<div className="min-w-0">
<p className="text-neutral-900 font-medium tracking-tight font-geist flex items-center gap-2">
<iconify-icon className="text-green-500" height="20" icon="solar:handshake-linear" width="20"></iconify-icon> Co-Build Together
          </p>
<p className="text-neutral-600 text-sm mt-1 font-geist">Need an agent that connects your CRM to your ad platform? Post it. Chances are, five other members want the same thing.</p>
</div>
<iconify-icon className="text-neutral-400 flex-shrink-0" height="24" icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>

<div className="flex items-center px-5 opacity-0 translate-y-8 blur-md transition-all duration-700 ease-out delay-[700ms]" data-animate="">
<div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
</div>

<button className="hover:bg-neutral-50 transition flex text-left bg-white w-full ring-black/5 ring-1 rounded-2xl pt-4 pr-5 pb-4 pl-5 shadow-lg items-center justify-between opacity-0 translate-y-8 blur-md transition-all duration-700 ease-out delay-[750ms]" data-animate="" type="button">
<div className="min-w-0">
<p className="text-neutral-900 font-medium tracking-tight font-geist flex items-center gap-2">
<iconify-icon className="text-purple-500" height="20" icon="solar:target-linear" width="20"></iconify-icon> Curated Group
          </p>
<p className="text-neutral-600 text-sm mt-1 font-geist">Invitation only. Every member is a practitioner. No lurkers, no beginners asking what Claude Code is. Everyone builds.</p>
</div>
<iconify-icon className="text-neutral-400 flex-shrink-0" height="24" icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

</section>

<section className="lg:px-8 lg:py-24 sm:px-8 mt-20 mb-20 pt-20 pr-6 pb-20 pl-6">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-6 font-geist">
      Everything you need to build faster
    </h2>
<p className="text-neutral-600 text-lg leading-relaxed max-w-2xl mx-auto font-geist">
      Get access to the resources, people, and tools you need to stop building solo and start scaling your workflows.
    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" id="aura-emfs7mn0g">

<div className="relative bg-white rounded-[32px] p-8 ring-1 ring-neutral-200 hover:ring-neutral-300 hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06)] transition-all duration-700 ease-out opacity-0 translate-y-8 blur-md">
<div className="flex items-center gap-3 mb-6">
<div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
<iconify-icon className="text-blue-600" height="24" icon="solar:videocamera-record-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-xl font-medium text-neutral-900 font-geist">Live Sessions</h3>
<p className="text-sm text-neutral-500 font-geist">Core Offering</p>
</div>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1 mb-2">
<span className="text-3xl font-medium text-neutral-900 font-geist">Included</span>
</div>
<p className="text-sm text-neutral-600 font-geist">Two live calls per month on Google Meet. Share wins and troubleshoot blockers.</p>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-700 font-geist">
<iconify-icon className="text-green-600 flex-shrink-0" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
          Bi-monthly syncs
        </li>
<li className="flex items-center gap-3 text-sm text-neutral-700 font-geist">
<iconify-icon className="text-green-600 flex-shrink-0" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
          Co-build agents
        </li>
<li className="flex items-center gap-3 text-sm text-neutral-700 font-geist">
<iconify-icon className="text-green-600 flex-shrink-0" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
          Recordings &amp; Highlights
        </li>
</ul>
</div>

<div className="relative bg-white rounded-[32px] p-8 ring-1 ring-neutral-200 hover:ring-neutral-300 hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06)] transition-all duration-700 ease-out delay-150 opacity-0 translate-y-8 blur-md">
<div className="flex items-center gap-3 mb-6">
<div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
<iconify-icon className="text-green-600" height="24" icon="solar:folder-with-files-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-xl font-medium text-neutral-900 font-geist">Agent Vault</h3>
<p className="text-sm text-neutral-500 font-geist">Shared Library</p>
</div>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1 mb-2">
<span className="text-3xl font-medium text-neutral-900 font-geist">Included</span>
</div>
<p className="text-sm text-neutral-600 font-geist">A growing library of agents, skills, workflows, and recipes built by members.</p>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-700 font-geist">
<iconify-icon className="text-green-600 flex-shrink-0" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
          Installable tools
        </li>
<li className="flex items-center gap-3 text-sm text-neutral-700 font-geist">
<iconify-icon className="text-green-600 flex-shrink-0" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
          Tested by members
        </li>
<li className="flex items-center gap-3 text-sm text-neutral-700 font-geist">
<iconify-icon className="text-green-600 flex-shrink-0" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
          Searchable access
        </li>
</ul>
</div>

<div className="relative bg-neutral-900 rounded-[32px] pt-8 pr-8 pb-8 pl-8 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] transition-all duration-700 ease-out delay-300 opacity-0 translate-y-8 blur-md">
<div className="absolute -top-4 left-1/2 -translate-x-1/2">
<div className="text-xs font-medium text-neutral-900 font-geist bg-white border-black/10 border rounded-full pt-1.5 pr-4 pb-1.5 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
			Most Valued
			</div>
</div>
<div className="flex items-center gap-3 mb-6">
<div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
<iconify-icon className="text-neutral-900" height="24" icon="solar:clipboard-list-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-xl font-medium text-white font-geist">Request Board</h3>
<p className="text-sm text-neutral-400 font-geist">Collaboration</p>
</div>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1 mb-2">
<span className="text-3xl font-medium text-white font-geist">Included</span>
</div>
<p className="text-sm text-neutral-300 font-geist">Post what you want built. Other members who need the same thing rally around it.</p>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-white font-geist">
<iconify-icon className="text-neutral-400 flex-shrink-0" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
			Co-build vs Solo-build
			</li>
<li className="flex items-center gap-3 text-sm text-white font-geist">
<iconify-icon className="text-neutral-400 flex-shrink-0" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
			Pool resources
			</li>
<li className="flex items-center gap-3 text-sm text-white font-geist">
<iconify-icon className="text-neutral-400 flex-shrink-0" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
			Fast track deployment
			</li>
</ul>
</div>

<div className="relative hover:ring-neutral-300 hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06)] ring-neutral-200 ring-1 bg-white rounded-[32px] pt-8 pr-8 pb-8 pl-8 transition-all duration-700 ease-out delay-[450ms] opacity-0 translate-y-8 blur-md">
<div className="flex items-center gap-3 mb-6">
<div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
<iconify-icon className="text-amber-600" height="24" icon="solar:user-id-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-xl font-medium text-neutral-900 font-geist">Directory &amp; Async</h3>
<p className="text-sm text-neutral-500 font-geist">Network access</p>
</div>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1 mb-2">
<span className="text-3xl font-medium text-neutral-900 font-geist">Included</span>
</div>
<p className="text-sm text-neutral-600 font-geist">A private directory of every member, and async discussions between live calls.</p>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-700 font-geist">
<iconify-icon className="text-green-600 flex-shrink-0" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
          Find collaborators
        </li>
<li className="flex items-center gap-3 text-sm text-neutral-700 font-geist">
<iconify-icon className="text-green-600 flex-shrink-0" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
          Search by niche
        </li>
<li className="flex items-center gap-3 text-sm text-neutral-700 font-geist">
<iconify-icon className="text-green-600 flex-shrink-0" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
          24/7 async chat
        </li>
</ul>
</div>
</div>

</section>

<section className="sm:p-8 bg-neutral-950 max-w-7xl rounded-3xl mt-8 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] relative overflow-hidden" id="how-it-works">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center relative z-10">

<div className="flex flex-col justify-center h-full">
<div className="">
<span className="text-sm font-normal text-zinc-300 font-geist">How It Works</span>
<h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] text-zinc-100 mt-2 font-geist font-medium tracking-tighter">Simple. Show up.<br/>Build. Share. Repeat.</h2>

<div className="mt-8 relative">
<div className="absolute inset-0 flex items-center">
<div className="w-full h-px bg-gradient-to-r from-white/10 via-white/20 to-transparent"></div>
</div>
</div>
<div className="mt-10 max-w-md">
<p className="text-base text-zinc-200 leading-relaxed font-geist">
              Our comprehensive approach combines
              <span className="font-medium text-zinc-100 font-geist">hands-on building</span>
              with an active group of practitioners to make sure you're never stuck for long.
            </p>
<a className="mt-8 inline-flex items-center gap-2 h-11 px-6 rounded-full bg-zinc-100 text-zinc-900 text-sm font-medium hover:bg-zinc-200 transition font-geist" href="#waitlist">
              Join the Waitlist
              <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="relative py-10 lg:py-0">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<article className="relative p-6 bg-zinc-900 border border-white/10 rounded-2xl">
<div className="mb-4">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 font-geist font-semibold text-sm">
                    1
                  </span>
</div>
<h3 className="text-white text-lg font-medium tracking-tight leading-tight font-geist mb-2">Get invited</h3>
<p className="text-sm text-zinc-400 font-geist">Solve Assembly is invitation only. Join the waitlist and we'll get you in.</p>
</article>

<article className="relative p-6 bg-zinc-900 border border-white/10 rounded-2xl">
<div className="mb-4">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 font-geist font-semibold text-sm">
                    2
                  </span>
</div>
<h3 className="text-white text-lg font-medium tracking-tight leading-tight font-geist mb-2">Join live build sessions</h3>
<p className="text-sm text-zinc-400 font-geist">Twice a month on Google Meet. We share what we're building and troubleshoot live.</p>
</article>

<article className="relative p-6 bg-zinc-900 border border-white/10 rounded-2xl">
<div className="mb-4">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 font-geist font-semibold text-sm">
                    3
                  </span>
</div>
<h3 className="text-white text-lg font-medium tracking-tight leading-tight font-geist mb-2">Share and install</h3>
<p className="text-sm text-zinc-400 font-geist">Every framework, recipe, skill, and agent gets shared in the group library.</p>
</article>

<article className="relative p-6 bg-zinc-900 border border-white/10 rounded-2xl">
<div className="mb-4">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 font-geist font-semibold text-sm">
                    4
                  </span>
</div>
<h3 className="text-white text-lg font-medium tracking-tight leading-tight font-geist mb-2">Go faster together</h3>
<p className="text-sm text-zinc-400 font-geist">What takes weeks alone takes hours with 30 builders behind you.</p>
</article>
</div>
</div>
</div>
</section>

<section className="bg-white mt-10" id="waitlist">
<div className="relative overflow-hidden mt-40 mb-20">

<div className="relative z-10 lg:px-8 sm:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-6">
<div className="sm:p-8 bg-neutral-50 ring-neutral-200 ring-1 rounded-[32px] pt-6 pr-6 pb-6 pl-6 shadow-lg">
<div className="flex items-center justify-between mb-6">
<div className="">
<p className="text-sm text-blue-600 font-medium font-geist uppercase tracking-wider">Join Solve Assembly</p>
<h3 className="mt-2 text-3xl sm:text-4xl font-medium tracking-tight text-neutral-900 font-geist">30 builders are already in. There's a seat for you.
                </h3>
</div>
</div>
<form action="#" className="space-y-5" method="POST">
<div className="">
<label className="block text-sm text-neutral-700 mb-2 font-geist" htmlFor="ct-email">Email address<span className="text-neutral-400"> *</span></label>
<div className="relative">
<iconify-icon className="text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" height="20" icon="solar:letter-linear" width="20"></iconify-icon>
<input className="w-full pl-12 pr-4 py-3 text-base rounded-2xl ring-1 ring-neutral-200 focus:ring-2 focus:ring-blue-600 outline-none bg-white placeholder:text-neutral-400 font-geist" id="ct-email" name="email" placeholder="your.email@example.com" required="" type="email"/>
</div>
</div>
<div className="">
<label className="block text-sm text-neutral-700 mb-2 font-geist" htmlFor="ct-build">What are you currently building?</label>
<input className="w-full pl-4 pr-4 py-3 text-base rounded-2xl ring-1 ring-neutral-200 focus:ring-2 focus:ring-blue-600 outline-none bg-white placeholder:text-neutral-400 font-geist" id="ct-build" name="building" placeholder="e.g. Content automations, MCP integrations..." type="text"/>
</div>
<button className="inline-flex hover:bg-blue-700 transition-colors text-base font-medium text-white font-geist bg-blue-600 w-full rounded-2xl pt-4 pr-6 pb-4 pl-6 items-center justify-center" type="submit">
                Join the Waitlist
                <iconify-icon className="ml-2" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<p className="text-sm text-neutral-500 font-geist text-center">No spam. We'll reach out personally when your spot is ready.</p>
</form>
</div>
</div>

<div className="lg:col-span-6 lg:pl-8">
<div className="max-w-xl">
<h2 className="sm:text-5xl leading-[1.05] text-4xl font-medium text-neutral-900 tracking-tight font-geist">Builders who are done going solo.</h2>
<p className="sm:text-lg text-base text-neutral-600 mt-6 leading-relaxed font-geist">
              This group isn't for lurkers. It's for practitioners who want to share what they've built and benefit from what others build.
            </p>
<div className="mt-8 grid grid-cols-1 gap-5">
<div className="flex items-start gap-4">
<iconify-icon className="text-blue-600 flex-shrink-0 mt-0.5" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<p className="text-neutral-700 font-medium text-base font-geist">Marketers using Claude Code to automate campaigns, reporting, and client work</p>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-blue-600 flex-shrink-0 mt-0.5" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<p className="text-neutral-700 font-medium text-base font-geist">Consultants building AI agents to scale their practice beyond billable hours</p>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-blue-600 flex-shrink-0 mt-0.5" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<p className="text-neutral-700 font-medium text-base font-geist">Builders creating agentic workflows, MCP integrations, and custom skills</p>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-blue-600 flex-shrink-0 mt-0.5" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<p className="text-neutral-700 font-medium text-base font-geist">People who show up, contribute, and believe we go faster together</p>
</div>
</div>

<div className="mt-10">
<div className="inline-flex items-center gap-4 rounded-[28px] bg-white ring-1 ring-neutral-200 shadow-lg p-4">
<div className="w-12 h-12 bg-neutral-100 rounded-2xl flex items-center justify-center">
<iconify-icon className="text-neutral-600" height="24" icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>
<div className="min-w-0 pr-4">
<p className="text-sm text-neutral-500 leading-none font-geist">Group Organizer</p>
<p className="text-neutral-900 font-medium tracking-tight truncate mt-1 text-base font-geist">Solve Assembly Admin</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<footer className="sm:px-8 pt-16 pb-12">
<div className="relative overflow-hidden bg-white border border-black/5 rounded-3xl">
<div className="relative z-10 sm:p-8 md:p-12 pt-8 pr-4 pb-8 pl-4 flex flex-col items-center text-center">
<p className="text-sm text-black/60 font-geist mb-4">Built together, not alone.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<div className="flex items-center gap-4 text-sm text-black/60">
<span className="font-geist">© 2026 Solve Assembly</span>
<span className="hidden sm:inline text-black/20 font-geist">|</span>
<a className="hover:text-black transition font-geist" href="#privacy">Privacy</a>
<span className="text-black/20 font-geist">/</span>
<a className="hover:text-black transition font-geist" href="#terms">Terms</a>
</div>
</div>
</div>
</div>
</footer>
</section>
</main>

    </>
  );
}
