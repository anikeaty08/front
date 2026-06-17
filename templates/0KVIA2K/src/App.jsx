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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



    const checkbox = document.querySelector('.toggle-checkbox');
  const container = document.querySelector('.toggle-container');
  const button = document.querySelector('.toggle-button');
  
  function applyState() {
    const checked = checkbox.checked;
    if (checked) {
      container.style.backgroundColor = '#3b82f6';
      button.style.left = '1.5rem';
    } else {
      container.style.backgroundColor = '#e5e7eb';
      button.style.left = '0.125rem';
    }
    checkbox.setAttribute('aria-pressed', checked ? 'true' : 'false');
  }
  
  checkbox.addEventListener('change', applyState);
  applyState();
  


      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        const toggle = document.getElementById('billingToggle');
        const knob = document.getElementById('toggleKnob');
        let yearly = false;

        function updatePrices() {
          document.querySelectorAll('[data-price]').forEach(el => {
            const monthly = el.getAttribute('data-monthly');
            const yearlyPrice = el.getAttribute('data-yearly');
            el.textContent = yearly ? '$' + yearlyPrice : '$' + monthly;
          });
          document.querySelectorAll('[data-billed-note]').forEach(el => {
            el.textContent = yearly ? el.getAttribute('data-yearly-note') : el.getAttribute('data-monthly-note');
          });
        }

        toggle.addEventListener('click', () => {
          yearly = !yearly;
          if (yearly) {
            knob.style.transform = 'translateX(28px)';
            toggle.style.background = 'rgba(99,102,241,0.35)';
          } else {
            knob.style.transform = 'translateX(0)';
            toggle.style.background = 'rgba(255,255,255,0.08)';
          }
          updatePrices();
        });

        updatePrices();
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
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="Cp839hKFEhq3vBXM2ZqP"></div>
</div>

<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[820px] rounded-full blur-[120px] opacity-40" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(99,102,241,0.35) 0%, rgba(236,72,153,0.15) 45%, rgba(17,17,17,0) 70%)'}}></div>
</div>

<header className="relative z-20">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex items-center justify-between py-6">
<div className="flex items-center gap-3">
<svg className="w-[92px] h-[36px] text-white" fill="none" height="36" viewbox="0 0 92 36" width="92" xmlns="http://www.w3.org/2000/svg"><path d="M18.8834 4.66666C17.4168 4.66666 16.2168 5.86666 16.2168 7.33332V11.56L18.8834 14.2267L21.5501 11.56V7.33332C21.5501 6.59999 21.2568 5.93332 20.7634 5.43999C20.2834 4.95999 19.6168 4.66666 18.8834 4.66666Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M16.2168 24.44V28.6666C16.2168 30.1333 17.4168 31.3333 18.8834 31.3333C20.3501 31.3333 21.5501 30.1333 21.5501 28.6666V24.44L18.8834 21.7733L16.2168 24.44Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M12.4434 15.3333H8.21675C6.75008 15.3333 5.55008 16.5333 5.55008 18C5.55008 19.4667 6.75008 20.6667 8.21675 20.6667H12.4434L15.1101 18L12.4434 15.3333Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M29.5502 15.3333H25.3235L22.6569 18L25.3235 20.6667H29.5502C30.2835 20.6667 30.9502 20.3733 31.4302 19.88C31.9235 19.4 32.2169 18.7333 32.2169 18C32.2169 16.5333 31.0169 15.3333 29.5502 15.3333Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M28.3101 23.6533L22.6568 18L18.8834 21.7733L24.5368 27.4267C25.5768 28.4667 27.2701 28.4667 28.3101 27.4267C29.3501 26.3867 29.3501 24.6933 28.3101 23.6533Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M13.2301 8.57329C12.7101 8.05329 12.0301 7.78662 11.3367 7.78662C10.6567 7.78662 9.97673 8.05329 9.45673 8.57329C8.41673 9.61329 8.41673 11.3066 9.45673 12.3466L15.1101 18L18.8834 14.2266L13.2301 8.57329Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M9.45673 27.4266C8.41673 26.3866 8.41673 24.6933 9.45673 23.6533L24.5367 8.5733C25.5767 7.5333 27.2701 7.5333 28.3101 8.5733C29.3501 9.6133 29.3501 11.3066 28.3101 12.3466L13.2301 27.4266C12.1901 28.4666 10.4967 28.4666 9.45673 27.4266Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-white/80 hover:text-white" href="#">Product</a>
<a className="text-sm font-medium text-white" href="#">Pricing</a>
<a className="text-sm font-medium text-white/80 hover:text-white" href="#">Resources</a>
<a className="text-sm font-medium text-white/80 hover:text-white" href="#">Updates</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<a className="text-sm font-medium text-white/80 hover:text-white" href="#">Sign in</a>
<button className="group relative inline-flex items-center justify-center rounded-full text-xs font-semibold tracking-tight text-white/80 hover:text-white transition-all" style={{boxShadow: 'inset 0 0 0 1px rgba(99, 102, 241, 0.3)', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.6) 0%, rgba(79, 70, 229, 0.4) 50%, rgba(99, 102, 241, 0.2) 100%)', backdropFilter: 'blur(12px)', border: '0.5px solid rgba(99,102,241,0.2)', padding: '10px 16px'}}>
<span className="relative z-10 text-sm font-normal">Sign Up</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all group-hover:opacity-80" style={{background: 'linear-gradient(90deg, rgba(99,102,241,0) 0%, rgba(99,102,241,1) 50%, rgba(99,102,241,0) 100%)'}}></span>
</button>
</div>
<button className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 p-2">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-3xl text-center pt-10 sm:pt-16">
<span className="inline-flex items-center gap-2 text-xs font-medium text-white/90 bg-white/5 border border-white/10 rounded-full px-3 py-1">
<svg className="lucide lucide-credit-card w-4 h-4" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
            Transparent pricing. 14‑day free trial.
          </span>
<h1 className="mt-4 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white/90">
            Simple, predictable pricing
          </h1>
<p className="mt-4 text-base sm:text-lg text-white/60">
            Scale from idea to impact with plans designed for solo builders up to global teams.
          </p>

<div className="flex gap-3 mt-8 items-center justify-center">
<span className="text-sm text-white/70">Monthly</span>
<div className="toggle-wrapper relative flex justify-center items-center bg-gradient-to-b from-gray-300 to-gray-200 rounded-lg p-0.5 shadow-inner text-2xl">
<input aria-label="Toggle" aria-pressed="false" className="toggle-checkbox focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 rounded-md absolute z-10 w-full h-full opacity-0 cursor-pointer" style={{appearance: 'none', borderRadius: 'inherit', font: 'inherit'}} type="checkbox"/>
<div className="toggle-container flex items-center relative rounded-md w-12 h-6 bg-gray-200 transition-colors duration-400" style={{boxShadow: 'rgba(255, 255, 255, 0.2) 0px 0px 1px 2px inset, rgba(0, 0, 0, 0.4) 0px 1px 2px inset', backgroundColor: 'rgb(229, 231, 235)'}}>
<div className="toggle-button flex justify-center items-center absolute left-0.5 rounded-md w-5 h-5 bg-gray-200 transition-all duration-400" style={{boxShadow: 'rgba(0, 0, 0, 0.1) 0px -1px 1px 2px inset, rgba(0, 0, 0, 0.2) 0px -2px 1px inset, rgba(255, 255, 255, 0.3) 0px 3px 1px inset, rgba(0, 0, 0, 0.5) 0px 2px 2px', left: '0.125rem'}}>
<div className="toggle-button-circles-container grid grid-cols-3 gap-0.5 absolute mx-auto">
<div className="toggle-button-circle rounded-full w-0.5 h-0.5 bg-gradient-radial from-gray-100 to-gray-400"></div>
<div className="toggle-button-circle rounded-full w-0.5 h-0.5 bg-gradient-radial from-gray-100 to-gray-400"></div>
<div className="toggle-button-circle rounded-full w-0.5 h-0.5 bg-gradient-radial from-gray-100 to-gray-400"></div>
<div className="toggle-button-circle rounded-full w-0.5 h-0.5 bg-gradient-radial from-gray-100 to-gray-400"></div>
<div className="toggle-button-circle rounded-full w-0.5 h-0.5 bg-gradient-radial from-gray-100 to-gray-400"></div>
<div className="toggle-button-circle rounded-full w-0.5 h-0.5 bg-gradient-radial from-gray-100 to-gray-400"></div>
<div className="toggle-button-circle rounded-full w-0.5 h-0.5 bg-gradient-radial from-gray-100 to-gray-400"></div>
<div className="toggle-button-circle rounded-full w-0.5 h-0.5 bg-gradient-radial from-gray-100 to-gray-400"></div>
<div className="toggle-button-circle rounded-full w-0.5 h-0.5 bg-gradient-radial from-gray-100 to-gray-400"></div>
<div className="toggle-button-circle rounded-full w-0.5 h-0.5 bg-gradient-radial from-gray-100 to-gray-400"></div>
<div className="toggle-button-circle rounded-full w-0.5 h-0.5 bg-gradient-radial from-gray-100 to-gray-400"></div>
<div className="toggle-button-circle rounded-full w-0.5 h-0.5 bg-gradient-radial from-gray-100 to-gray-400"></div>
</div>
</div>
</div>

</div>
<div className="inline-flex gap-2 text-xs border-emerald-400/20 border rounded-full pt-1 pr-3 pb-1 pl-3 backdrop-blur items-center" style={{background: 'rgba(16, 185, 129, 0.08)', color: 'rgb(110,231,183)'}}>
<svg className="lucide lucide-badge-percent w-3.5 h-3.5" data-lucide="badge-percent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m15 9-6 6"></path><path d="M9 9h.01"></path><path d="M15 15h.01"></path></svg>
<span className="">Yearly — Save 20%</span>
</div>
</div>

<div className="mt-6 flex items-center justify-center gap-3 text-sm text-white/50">
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
            No hidden fees. Cancel anytime.
          </div>
</div>
</div>
</section>

<section className="relative mt-10 sm:mt-14">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

<article className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900/70 to-neutral-950/80 backdrop-blur-xl p-5 sm:p-6">
<div className="flex items-center justify-between text-xs">
<div className="inline-flex items-center gap-2 text-white/60">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-neutral-950/80 ring-1 ring-white/10 text-white/80">01</span>
<span>Starter</span>
</div>
</div>
<div className="mt-4">
<h3 className="text-2xl font-medium tracking-tight">Starter</h3>
<p className="text-sm text-white/60 mt-1">For individuals and side projects.</p>
<div className="mt-5 flex items-baseline gap-1">
<span className="text-3xl font-medium tracking-tight" data-monthly="29" data-price="" data-yearly="23">$23</span>
<span className="text-sm text-white/50">/mo</span>
</div>
<p className="text-xs text-white/40" data-billed-note="" data-monthly-note="Billed monthly" data-yearly-note="Billed yearly ($276)">Billed yearly ($276)</p>
<button className="mt-5 inline-flex items-center justify-center gap-2 h-11 w-full rounded-full bg-white/90 text-neutral-900 text-sm font-normal hover:bg-white transition">
                Get Started
                <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
<div className="mt-6">
<p className="text-xs text-white/60">Includes:</p>
<ul className="mt-3 space-y-3">
<li className="flex items-start gap-3">
<span className="mt-0.5 h-5 w-5 rounded-full bg-neutral-900/70 border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/80">Up to 5 projects</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 h-5 w-5 rounded-full bg-neutral-900/70 border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/80">10GB storage</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 h-5 w-5 rounded-full bg-neutral-900/70 border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/80">Community support</span>
</li>
</ul>
</div>
</article>

<article className="relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-b from-neutral-900/80 to-neutral-950/90 backdrop-blur-xl p-5 sm:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
<div className="absolute right-4 top-4">
<span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] border border-indigo-400/30" style={{background: 'rgba(99, 102, 241, 0.12)', color: 'rgb(165,180,252)'}}>
<svg className="lucide lucide-sparkles w-3.5 h-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                Most popular
              </span>
</div>
<div className="flex items-center justify-between text-xs">
<div className="inline-flex items-center gap-2 text-white/60">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-neutral-950/80 ring-1 ring-indigo-500/20 text-white/80">02</span>
<span>Team</span>
</div>
</div>
<div className="mt-4">
<h3 className="text-2xl font-medium tracking-tight">Team</h3>
<p className="text-sm text-white/60 mt-1">For growing teams shipping weekly.</p>
<div className="mt-5 flex items-baseline gap-1">
<span className="text-3xl font-medium tracking-tight" data-monthly="79" data-price="" data-yearly="63">$63</span>
<span className="text-sm text-white/50">/mo</span>
</div>
<p className="text-xs text-white/40" data-billed-note="" data-monthly-note="Billed monthly" data-yearly-note="Billed yearly ($756)">Billed yearly ($756)</p>
<button className="mt-5 inline-flex items-center justify-center gap-2 h-11 w-full rounded-full bg-white/90 text-neutral-900 text-sm font-normal hover:bg-white transition">
                Start Team
                <svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</button>
</div>
<div className="mt-6">
<p className="text-xs text-white/60">Everything in Starter, plus:</p>
<ul className="mt-3 space-y-3">
<li className="flex items-start gap-3">
<span className="mt-0.5 h-5 w-5 rounded-full bg-neutral-900/70 border border-indigo-500/20 flex items-center justify-center">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/80">Unlimited projects &amp; collaborators</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 h-5 w-5 rounded-full bg-neutral-900/70 border border-indigo-500/20 flex items-center justify-center">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/80">100GB storage on global edge</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 h-5 w-5 rounded-full bg-neutral-900/70 border border-indigo-500/20 flex items-center justify-center">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/80">Priority email &amp; live chat</span>
</li>
</ul>
</div>
</article>

<article className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900/70 to-neutral-950/80 backdrop-blur-xl p-5 sm:p-6">
<div className="flex items-center justify-between text-xs">
<div className="inline-flex items-center gap-2 text-white/60">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-neutral-950/80 ring-1 ring-white/10 text-white/80">03</span>
<span className="">Business</span>
</div>
</div>
<div className="mt-4">
<h3 className="text-2xl font-medium tracking-tight">Business</h3>
<p className="text-sm text-white/60 mt-1">For fast‑moving orgs with scale.</p>
<div className="mt-5 flex items-baseline gap-1">
<span className="text-3xl font-medium tracking-tight" data-monthly="199" data-price="" data-yearly="159">$159</span>
<span className="text-sm text-white/50">/mo</span>
</div>
<p className="text-xs text-white/40" data-billed-note="" data-monthly-note="Billed monthly" data-yearly-note="Billed yearly ($1,908)">Billed yearly ($1,908)</p>
<button className="mt-5 inline-flex items-center justify-center gap-2 h-11 w-full rounded-full bg-white/90 text-neutral-900 text-sm font-normal hover:bg-white transition">
                Start Business
                <svg className="lucide lucide-rocket w-4 h-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</button>
</div>
<div className="mt-6">
<p className="text-xs text-white/60">Everything in Team, plus:</p>
<ul className="mt-3 space-y-3">
<li className="flex items-start gap-3">
<span className="mt-0.5 h-5 w-5 rounded-full bg-neutral-900/70 border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/80">Advanced access controls &amp; roles</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 h-5 w-5 rounded-full bg-neutral-900/70 border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/80">Custom environments &amp; approvals</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 h-5 w-5 rounded-full bg-neutral-900/70 border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/80">Analytics &amp; audit exports</span>
</li>
</ul>
</div>
</article>

<article className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900/70 to-neutral-950/80 backdrop-blur-xl p-5 sm:p-6">
<div className="flex items-center justify-between text-xs">
<div className="inline-flex items-center gap-2 text-white/60">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-neutral-950/80 ring-1 ring-white/10 text-white/80">04</span>
<span className="">Enterprise</span>
</div>
</div>
<div className="mt-4">
<h3 className="text-2xl font-medium tracking-tight">Enterprise</h3>
<p className="text-sm text-white/60 mt-1">Security, scale, and support.</p>
<div className="mt-5 flex items-baseline gap-1">
<span className="text-3xl font-medium tracking-tight">Custom</span>
</div>
<p className="text-xs text-white/40">Let’s design a plan for your needs</p>
<button className="mt-5 inline-flex items-center justify-center gap-2 h-11 w-full rounded-full bg-white/20 text-white text-sm font-normal hover:bg-white/30 transition border border-white/20">
                Contact Sales
                <svg className="lucide lucide-messages-square w-4 h-4" data-lucide="messages-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path></svg>
</button>
</div>
<div className="mt-6">
<p className="text-xs text-white/60">Everything in Business, plus:</p>
<ul className="mt-3 space-y-3">
<li className="flex items-start gap-3">
<span className="mt-0.5 h-5 w-5 rounded-full bg-neutral-900/70 border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/80">SSO/SAML, SCIM &amp; audit trails</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 h-5 w-5 rounded-full bg-neutral-900/70 border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/80">Dedicated infrastructure &amp; 99.9% SLA</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 h-5 w-5 rounded-full bg-neutral-900/70 border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-white/80">24/7 phone support &amp; CSM</span>
</li>
</ul>
</div>
</article>
</div>

<div className="sm:p-6 bg-white/5 border-white/10 border rounded-2xl mt-10 pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg">
<div className="flex items-center justify-between gap-6 flex-wrap">
<div className="min-w-[240px]">
<div className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[10px] border border-white/15 text-white/80" style={{background: 'rgba(255,255,255,0.04)'}}>
<svg className="lucide lucide-puzzle w-3.5 h-3.5" data-lucide="puzzle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path></svg>
                Optional add‑ons
              </div>
<h3 className="mt-3 text-xl font-semibold tracking-tight">Power features on any plan</h3>
<p className="text-sm text-white/60 mt-1">Add capacity and controls as you grow.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">
<div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4">
<div className="flex items-center gap-2 text-sm">
<svg className="lucide lucide-lock w-4 h-4 text-indigo-300" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  Role-based approvals
                </div>
<p className="text-xs text-white/50 mt-2">Granular workflows with review gates.</p>
<div className="mt-3 text-sm text-white/80">$49/mo</div>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4">
<div className="flex items-center gap-2 text-sm">
<svg className="lucide lucide-globe w-4 h-4 text-indigo-300" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                  Extra regions
                </div>
<p className="text-xs text-white/50 mt-2">Latency‑optimized regional routing.</p>
<div className="mt-3 text-sm text-white/80">$25/mo per region</div>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4">
<div className="flex items-center gap-2 text-sm">
<svg className="lucide lucide-database w-4 h-4 text-indigo-300" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
                  Storage packs
                </div>
<p className="text-xs text-white/50 mt-2">+100GB pooled storage.</p>
<div className="mt-3 text-sm text-white/80">$15/mo</div>
</div>
</div>
</div>
</div>

<div className="mt-10">
<div className="flex items-center justify-between">
<h3 className="text-2xl font-semibold tracking-tight">Compare all plans</h3>
<a className="text-sm text-white/70 hover:text-white inline-flex items-center gap-2" href="#">
      View detailed features
      <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="overflow-hidden border-white/10 border rounded-2xl mt-4 backdrop-blur-lg">
<div className="hidden lg:grid grid-cols-5 text-sm bg-white/5 sticky top-0 z-10">
<div className="px-4 py-3 text-white/70 font-medium">Features</div>
<div className="px-4 py-3 text-center">
<div className="text-white/70 font-medium">Starter</div>
<div className="text-xs text-white/50 mt-1">$29/mo</div>
</div>
<div className="px-4 py-3 text-center border-l border-r border-indigo-500/20 bg-gradient-to-b from-indigo-600/5 to-transparent">
<div className="text-white font-medium">Team</div>
<div className="text-xs text-indigo-300 mt-1">$79/mo</div>
<div className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 text-[10px] rounded-full bg-indigo-500/20 text-indigo-300">
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
          Popular
        </div>
</div>
<div className="px-4 py-3 text-center">
<div className="text-white/70 font-medium">Business</div>
<div className="text-xs text-white/50 mt-1">$199/mo</div>
</div>
<div className="px-4 py-3 text-center">
<div className="text-white/70 font-medium">Enterprise</div>
<div className="text-xs text-white/50 mt-1">Custom</div>
</div>
</div>

<div className="divide-y divide-white/10">

<div className="">
<div className="border-white/5 border-b pt-3 pr-4 pb-3 pl-4">
<h4 className="text-sm font-medium text-white/80 flex items-center gap-2">
<svg className="lucide lucide-layers w-4 h-4 text-indigo-300" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
            Core Features
          </h4>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5">
<div className="px-4 py-4 text-sm bg-white/[0.02] font-medium">Projects</div>
<div className="px-4 py-4 text-sm text-center">5</div>
<div className="px-4 py-4 text-sm text-center border-l border-r border-indigo-500/10 bg-indigo-500/[0.02]">Unlimited</div>
<div className="px-4 py-4 text-sm text-center">Unlimited</div>
<div className="px-4 py-4 text-sm text-center">Unlimited</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5">
<div className="px-4 py-4 text-sm bg-white/[0.02] font-medium">Team members</div>
<div className="px-4 py-4 text-sm text-center">3</div>
<div className="px-4 py-4 text-sm text-center border-l border-r border-indigo-500/10 bg-indigo-500/[0.02]">Unlimited</div>
<div className="px-4 py-4 text-sm text-center">Unlimited</div>
<div className="px-4 py-4 text-sm text-center">Unlimited</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5">
<div className="px-4 py-4 text-sm bg-white/[0.02] font-medium">Storage</div>
<div className="px-4 py-4 text-sm text-center">10GB</div>
<div className="px-4 py-4 text-sm text-center border-l border-r border-indigo-500/10 bg-indigo-500/[0.02]">100GB</div>
<div className="px-4 py-4 text-sm text-center">500GB</div>
<div className="px-4 py-4 text-sm text-center">Custom</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5">
<div className="px-4 py-4 text-sm bg-white/[0.02] font-medium">API requests/month</div>
<div className="px-4 py-4 text-sm text-center">10K</div>
<div className="px-4 py-4 text-sm text-center border-l border-r border-indigo-500/10 bg-indigo-500/[0.02]">100K</div>
<div className="px-4 py-4 text-sm text-center">1M</div>
<div className="px-4 py-4 text-sm text-center">Unlimited</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5">
<div className="px-4 py-4 text-sm bg-white/[0.02] font-medium">Build minutes/month</div>
<div className="px-4 py-4 text-sm text-center">500</div>
<div className="px-4 py-4 text-sm text-center border-l border-r border-indigo-500/10 bg-indigo-500/[0.02]">3,000</div>
<div className="px-4 py-4 text-sm text-center">10,000</div>
<div className="px-4 py-4 text-sm text-center">Unlimited</div>
</div>
</div>

<div className="bg-white/[0.02]">
<div className="px-4 py-3 border-b border-white/5">
<h4 className="text-sm font-medium text-white/80 flex items-center gap-2">
<svg className="lucide lucide-code w-4 h-4 text-indigo-300" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
            Development &amp; Integration
          </h4>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5">
<div className="px-4 py-4 text-sm bg-white/[0.02] font-medium">Version control integration</div>
<div className="px-4 py-4 text-sm flex justify-center"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div className="px-4 py-4 text-sm flex justify-center border-l border-r border-indigo-500/10 bg-indigo-500/[0.02]"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div className="px-4 py-4 text-sm flex justify-center"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div className="px-4 py-4 text-sm flex justify-center"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5">
<div className="px-4 py-4 text-sm bg-white/[0.02] font-medium">Custom domains</div>
<div className="px-4 py-4 text-sm text-center">1</div>
<div className="px-4 py-4 text-sm text-center border-l border-r border-indigo-500/10 bg-indigo-500/[0.02]">5</div>
<div className="px-4 py-4 text-sm text-center">25</div>
<div className="px-4 py-4 text-sm text-center">Unlimited</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5">
<div className="px-4 py-4 text-sm bg-white/[0.02] font-medium">Environment branches</div>
<div className="px-4 py-4 text-sm text-center">3</div>
<div className="px-4 py-4 text-sm text-center border-l border-r border-indigo-500/10 bg-indigo-500/[0.02]">10</div>
<div className="px-4 py-4 text-sm text-center">50</div>
<div className="px-4 py-4 text-sm text-center">Unlimited</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5">
<div className="px-4 py-4 text-sm bg-white/[0.02] font-medium">Serverless functions</div>
<div className="px-4 py-4 text-sm flex justify-center"><svg className="lucide lucide-x w-4 h-4 text-white/30" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></div>
<div className="px-4 py-4 text-sm flex justify-center border-l border-r border-indigo-500/10 bg-indigo-500/[0.02]"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div className="px-4 py-4 text-sm flex justify-center"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div className="px-4 py-4 text-sm flex justify-center"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5">
<div className="px-4 py-4 text-sm bg-white/[0.02] font-medium">Webhooks</div>
<div className="px-4 py-4 text-sm text-center">5</div>
<div className="px-4 py-4 text-sm text-center border-l border-r border-indigo-500/10 bg-indigo-500/[0.02]">25</div>
<div className="px-4 py-4 text-sm text-center">100</div>
<div className="px-4 py-4 text-sm text-center">Unlimited</div>
</div>
</div>

<div className="bg-white/[0.02]">
<div className="px-4 py-3 border-b border-white/5">
<h4 className="text-sm font-medium text-white/80 flex items-center gap-2">
<svg className="lucide lucide-bar-chart-3 w-4 h-4 text-indigo-300" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
            Analytics &amp; Monitoring
          </h4>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5">
<div className="px-4 py-4 text-sm bg-white/[0.02] font-medium">Real-time analytics</div>
<div className="px-4 py-4 text-sm text-center">Basic</div>
<div className="px-4 py-4 text-sm text-center border-l border-r border-indigo-500/10 bg-indigo-500/[0.02]">Advanced</div>
<div className="px-4 py-4 text-sm text-center">Advanced</div>
<div className="px-4 py-4 text-sm text-center">Enterprise</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5">
<div className="px-4 py-4 text-sm bg-white/[0.02] font-medium">Data retention</div>
<div className="px-4 py-4 text-sm text-center">7 days</div>
<div className="px-4 py-4 text-sm text-center border-l border-r border-indigo-500/10 bg-indigo-500/[0.02]">30 days</div>
<div className="px-4 py-4 text-sm text-center">90 days</div>
<div className="px-4 py-4 text-sm text-center">Custom</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5">
<div className="px-4 py-4 text-sm bg-white/[0.02] font-medium">Custom dashboards</div>
<div className="px-4 py-4 text-sm flex justify-center"><svg className="lucide lucide-x w-4 h-4 text-white/30" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></div>
<div className="px-4 py-4 text-sm text-center border-l border-r border-indigo-500/10 bg-indigo-500/[0.02]">3</div>
<div className="px-4 py-4 text-sm text-center">10</div>
<div className="px-4 py-4 text-sm text-center">Unlimited</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5">
<div className="px-4 py-4 text-sm bg-white/[0.02] font-medium">Performance monitoring</div>
<div className="px-4 py-4 text-sm flex justify-center"><svg className="lucide lucide-x w-4 h-4 text-white/30" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></div>
<div className="px-4 py-4 text-sm flex justify-center border-l border-r border-indigo-500/10 bg-indigo-500/[0.02]"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div className="px-4 py-4 text-sm flex justify-center"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div className="px-4 py-4 text-sm flex justify-center"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
</div>
</div>

<div className="bg-white/[0.02]">
<div className="px-4 py-3 border-b border-white/5">
<h4 className="text-sm font-medium text-white/80 flex items-center gap-2">
<svg className="lucide lucide-shield-check w-4 h-4 text-indigo-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
            Security &amp; Compliance
          </h4>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5">
<div className="px-4 py-4 text-sm bg-white/[0.02] font-medium">SSL certificates</div>
<div className="px-4 py-4 text-sm flex justify-center"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div className="px-4 py-4 text-sm flex justify-center border-l border-r border-indigo-500/10 bg-indigo-500/[0.02]"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div className="px-4 py-4 text-sm flex justify-center"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div className="px-4 py-4 text-sm flex justify-center"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5">
<div className="px-4 py-4 text-sm bg-white/[0.02] font-medium">Two-factor authentication</div>
<div className="px-4 py-4 text-sm flex justify-center"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div className="px-4 py-4 text-sm flex justify-center border-l border-r border-indigo-500/10 bg-indigo-500/[0.02]"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div className="px-4 py-4 text-sm flex justify-center"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div className="px-4 py-4 text-sm flex justify-center"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5">
<div className="px-4 py-4 text-sm bg-white/[0.02] font-medium">SSO / SAML</div>
<div className="px-4 py-4 text-sm flex justify-center"><svg className="lucide lucide-x w-4 h-4 text-white/30" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></div>
<div className="px-4 py-4 text-sm flex justify-center border-l border-r border-indigo-500/10 bg-indigo-500/[0.02]"><svg className="lucide lucide-x w-4 h-4 text-white/30" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></div>
<div className="px-4 py-4 text-sm flex justify-center"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div className="px-4 py-4 text-sm flex justify-center"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5">
<div className="px-4 py-4 text-sm bg-white/[0.02] font-medium">Role-based permissions</div>
<div className="px-4 py-4 text-sm text-center">Basic</div>
<div className="px-4 py-4 text-sm text-center border-l border-r border-indigo-500/10 bg-indigo-500/[0.02]">Advanced</div>
<div className="px-4 py-4 text-sm text-center">Advanced</div>
<div className="px-4 py-4 text-sm text-center">Granular</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5">
<div className="px-4 py-4 text-sm bg-white/[0.02] font-medium">Audit logs</div>
<div className="px-4 py-4 text-sm flex justify-center"><svg className="lucide lucide-x w-4 h-4 text-white/30" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></div>
<div className="px-4 py-4 text-sm flex justify-center border-l border-r border-indigo-500/10 bg-indigo-500/[0.02]"><svg className="lucide lucide-x w-4 h-4 text-white/30" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></div>
<div className="px-4 py-4 text-sm flex justify-center"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div className="px-4 py-4 text-sm flex justify-center"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5">
<div className="px-4 py-4 text-sm bg-white/[0.02] font-medium">Compliance (SOC 2, GDPR)</div>
<div className="px-4 py-4 text-sm flex justify-center"><svg className="lucide lucide-x w-4 h-4 text-white/30" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></div>
<div className="px-4 py-4 text-sm flex justify-center border-l border-r border-indigo-500/10 bg-indigo-500/[0.02]"><svg className="lucide lucide-x w-4 h-4 text-white/30" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></div>
<div className="px-4 py-4 text-sm text-center">GDPR</div>
<div className="px-4 py-4 text-sm text-center">Full</div>
</div>
</div>

<div className="bg-white/[0.02]">
<div className="px-4 py-3 border-b border-white/5">
<h4 className="text-sm font-medium text-white/80 flex items-center gap-2">
<svg className="lucide lucide-headphones w-4 h-4 text-indigo-300" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
            Support &amp; Services
          </h4>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5">
<div className="px-4 py-4 text-sm bg-white/[0.02] font-medium">Support level</div>
<div className="px-4 py-4 text-sm text-center">Community</div>
<div className="px-4 py-4 text-sm text-center border-l border-r border-indigo-500/10 bg-indigo-500/[0.02]">Email + Chat</div>
<div className="px-4 py-4 text-sm text-center">Priority Support</div>
<div className="px-4 py-4 text-sm text-center">24/7 Phone + CSM</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5">
<div className="px-4 py-4 text-sm bg-white/[0.02] font-medium">Response time SLA</div>
<div className="px-4 py-4 text-sm text-center">Best effort</div>
<div className="px-4 py-4 text-sm text-center border-l border-r border-indigo-500/10 bg-indigo-500/[0.02]">24 hours</div>
<div className="px-4 py-4 text-sm text-center">4 hours</div>
<div className="px-4 py-4 text-sm text-center">1 hour</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5">
<div className="px-4 py-4 text-sm bg-white/[0.02] font-medium">Onboarding support</div>
<div className="px-4 py-4 text-sm flex justify-center"><svg className="lucide lucide-x w-4 h-4 text-white/30" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></div>
<div className="px-4 py-4 text-sm flex justify-center border-l border-r border-indigo-500/10 bg-indigo-500/[0.02]"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div className="px-4 py-4 text-sm flex justify-center"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div className="px-4 py-4 text-sm flex justify-center"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5">
<div className="px-4 py-4 text-sm bg-white/[0.02] font-medium">Dedicated success manager</div>
<div className="px-4 py-4 text-sm flex justify-center"><svg className="lucide lucide-x w-4 h-4 text-white/30" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></div>
<div className="px-4 py-4 text-sm flex justify-center border-l border-r border-indigo-500/10 bg-indigo-500/[0.02]"><svg className="lucide lucide-x w-4 h-4 text-white/30" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></div>
<div className="px-4 py-4 text-sm flex justify-center"><svg className="lucide lucide-x w-4 h-4 text-white/30" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></div>
<div className="px-4 py-4 text-sm flex justify-center"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5">
<div className="px-4 py-4 text-sm bg-white/[0.02] font-medium">Professional services</div>
<div className="px-4 py-4 text-sm flex justify-center"><svg className="lucide lucide-x w-4 h-4 text-white/30" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></div>
<div className="px-4 py-4 text-sm flex justify-center border-l border-r border-indigo-500/10 bg-indigo-500/[0.02]"><svg className="lucide lucide-x w-4 h-4 text-white/30" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></div>
<div className="px-4 py-4 text-sm text-center">Available</div>
<div className="px-4 py-4 text-sm flex justify-center"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
</div>
</div>
</div>
</div>
</div><section className="max-w-7xl sm:py-10 md:py-12 mr-auto ml-auto pt-8 pb-8">
<div className="flex items-center justify-between">
<div className="space-y-1">
<p className="text-xs sm:text-sm text-white/50">What people say</p>
<h2 className="text-2xl sm:text-3xl md:text-4xl tracking-tight font-semibold text-white/90">Testimonials</h2>
</div>
<div className="hidden sm:flex items-center gap-2 text-white/50">
<svg className="lucide lucide-quote w-4 h-4" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<span className="text-sm">Real feedback from teams</span>
</div>
</div>
<div className="relative mt-6 sm:mt-8 overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-b from-neutral-900/70 to-neutral-950/80 backdrop-blur-xl">
<div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-neutral-950 to-transparent z-10"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-neutral-950 to-transparent z-10"></div>

<div className="relative sm:py-8 pt-6 pb-6">
<div className="flex gap-4 sm:gap-5 will-change-transform animate-[marquee-ltr_45s_linear_infinite]">

<article className="shrink-0 w-[280px] sm:w-[360d-xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e0bbf4a4-5f58-4644-bea6-85d2fef73d4a_320w.jpg"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-white/90">Ava Thompson</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-emerald-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-white/60">@ava_builds</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-white/70">
            Smart Connect took minutes to wire into our stack and saved days of setup. The DX is top‑tier.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/27a2c31e-38f3-479f-a831-858e91b9bd84_320w.jpg"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-white/90">Noah Patel</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-emerald-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-white/60">@noah_ops</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-white/70">
            We shipped our analytics revamp 3× faster. The defaults are sensible and secure out of the box.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/86a541ae-1b5d-4597-8538-e55c0858f4ff_320w.jpg"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-white/90">Maya Kim</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-emerald-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-white/60">@mayak</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-white/70">
            The platform feels invisible—just fast, reliable pipelines and clean reporting.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-white/90">Ethan Garcia</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-emerald-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-white/60">@egarcia</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-white/70">
            Observability baked in. We finally trust our metrics for decision‑making.
          </p>
</article>

<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-white/90">Ava Thompson</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-emerald-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-white/60">@ava_builds</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-white/70">
            Smart Connect took minutes to wire into our stack and saved days of setup. The DX is top‑tier.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-white/90">Noah Patel</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-emerald-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-white/60">@noah_ops</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-white/70">
            We shipped our analytics revamp 3× faster. The defaults are sensible and secure out of the box.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-white/90">Maya Kim</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-emerald-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-white/60">@mayak</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-white/70">
            The platform feels invisible—just fast, reliable pipelines and clean reporting.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-white/90">Ethan Garcia</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-emerald-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-white/60">@egarcia</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-white/70">
            Observability baked in. We finally trust our metrics for decision‑making.
          </p>
</article>
</div>
</div>
<div className="border-t border-white/10"></div>

<div className="relative py-6 sm:py-8">
<div className="flex gap-4 sm:gap-5 will-change-transform animate-[marquee-rtl_45s_linear_infinite]">

<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] bg-neutral-900/60 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/358aaa92-ba50-4778-b2a2-7c8f7310e44c_320w.jpg"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-white/90">Priya Singh</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-emerald-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-white/60">@priya_dev</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-white/70">
            The automation suite trimmed our runbooks by half. The UI stays out of the way and just works.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] bg-neutral-900/60 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b6d79211-32f1-430e-96b3-9b4d857c1482_320w.jpg"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-white/90">Leo Martin</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-emerald-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-white/60">@leom</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-white/70">
            Enterprise SSO, audit logs, and usage analytics—without extra integration work. Huge win.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] bg-neutral-900/60 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ec17a2e2-e4f4-4164-b631-f074e640a0c1_320w.jpg"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-white/90">Sofia Alvarez</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-emerald-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-white/60">@sofialabs</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-white/70">
            From local dev to prod parity with one connection. Best onboarding we've had in years.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c0aab170-b3d3-4816-9435-0ac1e1d853a3_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-white/90">Jackson Lee</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-emerald-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-white/60">@jacksonlee</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-white/70">
            Clean API, helpful docs, and thoughtful error messages. It's the small things.
          </p>
</article>

<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/480fa0bd-ee9a-4aa1-8f7a-5307cc4541f5_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-white/90">Priya Singh</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-emerald-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-white/60">@priya_dev</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-white/70">
            The automation suite trimmed our runbooks by half. The UI stays out of the way and just works.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e0bbf4a4-5f58-4644-bea6-85d2fef73d4a_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-white/90">Leo Martin</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-emerald-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-white/60">@leom</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-white/70">
            Enterprise SSO, audit logs, and usage analytics—without extra integration work. Huge win.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/27a2c31e-38f3-479f-a831-858e91b9bd84_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-white/90">Sofia Alvarez</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-emerald-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-white/60">@sofialabs</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-white/70">
            From local dev to prod parity with one connection. Best onboarding we've had in years.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b6d79211-32f1-430e-96b3-9b4d857c1482_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-white/90">Jackson Lee</span>
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-emerald-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-white/60">@jacksonlee</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-white/70">
            Clean API, helpful docs, and thoughtful error messages. It's the small things.
          </p>
</article>
</div>
</div>
</div>
<style>
    @keyframes marquee-rtl { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
    @keyframes marquee-ltr { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
    @media (prefers-reduced-motion: reduce) {
      .animate-\[marquee-rtl_45s_linear_infinite\],
      .animate-\[marquee-ltr_45s_linear_infinite\] { animation: none !important; }
    }
  </style>
</section>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
<div className="bg-neutral-900/60 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-lg">
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-full bg-white/5 border border-white/10 grid place-items-center">
<svg className="lucide lucide-help-circle w-4 h-4 text-indigo-300" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
</div>
<div className="">
<h4 className="text-lg font-semibold tracking-tight">Do you offer a free trial?</h4>
<p className="text-sm text-white/60 mt-2">Yes, every plan includes a 14‑day free trial with full features. No credit card required to start.</p>
</div>
</div>
</div>
<div className="bg-neutral-900/60 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-lg">
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-full bg-white/5 border border-white/10 grid place-items-center">
<svg className="lucide lucide-refresh-ccw w-4 h-4 text-indigo-300" data-lucide="refresh-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg>
</div>
<div className="">
<h4 className="text-lg font-semibold tracking-tight">Can I change plans later?</h4>
<p className="text-sm text-white/60 mt-2">Absolutely. Upgrade or downgrade anytime. Changes are prorated automatically.</p>
</div>
</div>
</div>
<div className="bg-neutral-900/60 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-lg">
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-full bg-white/5 border border-white/10 grid place-items-center">
<svg className="lucide lucide-shield-check w-4 h-4 text-indigo-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<h4 className="text-lg font-semibold tracking-tight">How do you handle security?</h4>
<p className="text-sm text-white/60 mt-2">We’re private by design with encryption in transit &amp; at rest, SSO/SAML, role‑based access and audit logs on higher tiers.</p>
</div>
</div>
</div>
<div className="bg-neutral-900/60 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-lg">
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-full bg-white/5 border border-white/10 grid place-items-center">
<svg className="lucide lucide-credit-card w-4 h-4 text-indigo-300" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<div className="">
<h4 className="text-lg font-semibold tracking-tight">Which payment methods are supported?</h4>
<p className="text-sm text-white/60 mt-2">All major cards, invoicing for Enterprise, and bank transfer on request.</p>
</div>
</div>
</div>
</div>

<div className="mt-12">
<div className="sm:p-10 ring-white/10 ring-1 rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-lg">
<div className="flex flex-col md:flex-row items-center justify-between gap-4">
<div className="">
<h3 className="text-2xl font-semibold tracking-tight">Have questions about the right plan?</h3>
<p className="text-sm text-white/70 mt-1">Our team will help you design the perfect setup.</p>
</div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full bg-white text-neutral-900 text-sm font-medium hover:opacity-90 transition" href="#">
                  Talk to Sales
                  <svg className="lucide lucide-messages-square w-4 h-4" data-lucide="messages-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition" href="#">
                  View Docs
                  <svg className="lucide lucide-book-open w-4 h-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</a>
</div>
</div>
</div>
<p className="mt-4 text-center text-xs text-white/50">By starting a trial you agree to our Terms and Privacy Policy.</p>
</div>
</div>
</section>

<footer className="max-w-7xl sm:px-6 mt-10 mr-auto mb-12 ml-auto pr-4 pl-4">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="grid lg:grid-cols-4 gap-10">

<div className="space-y-4">
<div className="flex items-center gap-2">
<svg className="" fill="none" height="36" viewbox="0 0 92 36" width="92" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M18.8834 4.66666C17.4168 4.66666 16.2168 5.86666 16.2168 7.33332V11.56L18.8834 14.2267L21.5501 11.56V7.33332C21.5501 6.59999 21.2568 5.93332 20.7634 5.43999C20.2834 4.95999 19.6168 4.66666 18.8834 4.66666Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path className="" d="M16.2168 24.44V28.6666C16.2168 30.1333 17.4168 31.3333 18.8834 31.3333C20.3501 31.3333 21.5501 30.1333 21.5501 28.6666V24.44L18.8834 21.7733L16.2168 24.44Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path className="" d="M12.4434 15.3333H8.21675C6.75008 15.3333 5.55008 16.5333 5.55008 18C5.55008 19.4667 6.75008 20.6667 8.21675 20.6667H12.4434L15.1101 18L12.4434 15.3333Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path className="" d="M29.5502 15.3333H25.3235L22.6569 18L25.3235 20.6667H29.5502C30.2835 20.6667 30.9502 20.3733 31.4302 19.88C31.9235 19.4 32.2169 18.7333 32.2169 18C32.2169 16.5333 31.0169 15.3333 29.5502 15.3333Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path className="" d="M28.3101 23.6533L22.6568 18L18.8834 21.7733L24.5368 27.4267C25.5768 28.4667 27.2701 28.4667 28.3101 27.4267C29.3501 26.3867 29.3501 24.6933 28.3101 23.6533Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path className="" d="M13.2301 8.57329C12.7101 8.05329 12.0301 7.78662 11.3367 7.78662C10.6567 7.78662 9.97673 8.05329 9.45673 8.57329C8.41673 9.61329 8.41673 11.3066 9.45673 12.3466L15.1101 18L18.8834 14.2266L13.2301 8.57329Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path className="" d="M9.45673 27.4266C8.41673 26.3866 8.41673 24.6933 9.45673 23.6533L24.5367 8.5733C25.5767 7.5333 27.2701 7.5333 28.3101 8.5733C29.3501 9.6133 29.3501 11.3066 28.3101 12.3466L13.2301 27.4266C12.1901 28.4666 10.4967 28.4666 9.45673 27.4266Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path className="" d="M84.6756 27C84.3509 27 83.9855 26.9675 83.5796 26.9025C83.1899 26.8376 82.8164 26.7564 82.4591 26.659C82.1181 26.5615 81.8502 26.456 81.6554 26.3423C81.5417 26.2774 81.4524 26.2124 81.3874 26.1475C81.3387 26.0663 81.3144 25.9364 81.3144 25.7578L81.1926 21.9337C81.1926 21.6089 81.2981 21.4465 81.5092 21.4465C81.6878 21.4465 81.8096 21.5927 81.8746 21.885L82.0938 22.8105C82.6459 25.1326 83.677 26.2936 85.1871 26.2936C85.9991 26.2936 86.6405 26.0257 87.1114 25.4898C87.5985 24.9377 87.8421 24.1664 87.8421 23.1759C87.8421 22.2178 87.5904 21.3247 87.087 20.4966C86.5999 19.6685 85.8123 18.8484 84.7244 18.0365C83.5227 17.1759 82.6459 16.3478 82.0938 15.5521C81.5417 14.7402 81.2656 13.8796 81.2656 12.9702C81.2656 11.7686 81.6797 10.8106 82.5079 10.0961C83.3522 9.36536 84.424 9 85.723 9C86.2102 9 86.6811 9.05683 87.1357 9.1705C87.5904 9.28417 87.9639 9.44655 88.2562 9.65764C88.3536 9.7226 88.4267 9.79567 88.4754 9.87686C88.5403 9.95805 88.5728 10.0636 88.5728 10.1935L88.6459 13.8714C88.6459 14.1475 88.5403 14.2855 88.3292 14.2855C88.1831 14.2855 88.0775 14.1718 88.0126 13.9445L87.8421 13.3356C87.4848 12.0852 87.1114 11.1759 86.7217 10.6076C86.3482 10.023 85.8042 9.73072 85.0897 9.73072C84.3915 9.73072 83.8313 9.95805 83.4091 10.4127C83.0031 10.8674 82.8001 11.5088 82.8001 12.3369C82.8001 13.0352 83.0275 13.7009 83.4821 14.3342C83.9368 14.9675 84.7325 15.7388 85.8692 16.6482C87.087 17.6387 87.972 18.5967 88.5241 19.5223C89.0924 20.4316 89.3766 21.4059 89.3766 22.4452C89.3766 23.3545 89.1736 24.1502 88.7677 24.8322C88.3617 25.5142 87.8015 26.05 87.087 26.4398C86.3888 26.8132 85.585 27 84.6756 27Z" fill="currentColor"></path>
<path className="" d="M75.2893 27C74.4124 27 73.633 26.797 72.951 26.3911C72.2852 25.9689 71.7656 25.3924 71.3921 24.6617C71.0186 23.9147 70.8319 23.0622 70.8319 22.1042V10.8512C70.8319 10.5102 70.7751 10.2828 70.6614 10.1692C70.564 10.0555 70.3448 9.96619 70.0038 9.90124L69.4435 9.80381C69.2324 9.75509 69.1269 9.65766 69.1269 9.51152C69.1269 9.3329 69.2487 9.24359 69.4923 9.24359H73.9496C74.1932 9.24359 74.315 9.34102 74.315 9.53588C74.315 9.68202 74.2257 9.77133 74.047 9.80381L73.3894 9.90124C73.0646 9.94995 72.8454 10.0393 72.7318 10.1692C72.6181 10.2991 72.5613 10.5345 72.5613 10.8755V22.1286C72.5613 23.3627 72.8373 24.3207 73.3894 25.0027C73.9415 25.6847 74.7128 26.0257 75.7033 26.0257C76.7101 26.0257 77.4895 25.6847 78.0416 25.0027C78.5937 24.3207 78.8698 23.3627 78.8698 22.1286V11.3627C78.8698 10.4858 78.5937 9.99866 78.0416 9.90124L77.384 9.80381C77.2054 9.77133 77.1161 9.68202 77.1161 9.53588C77.1161 9.34102 77.2378 9.24359 77.4814 9.24359H80.9889C81.2324 9.24359 81.3542 9.3329 81.3542 9.51152C81.3542 9.65766 81.2487 9.75509 81.0376 9.80381L80.4774 9.90124C79.9253 9.99866 79.6492 10.4777 79.6492 11.3383V22.1042C79.6492 23.5819 79.2514 24.7673 78.4557 25.6603C77.66 26.5534 76.6046 27 75.2893 27Z" fill="currentColor"></path>
<path className="" d="M58.2703 26.7808C58.108 26.7808 57.9943 26.7483 57.9293 26.6834C57.8644 26.6184 57.8319 26.5534 57.8319 26.4885C57.8319 26.3261 57.9537 26.2206 58.1973 26.1719L58.587 26.0988C59.1066 26.0014 59.5126 25.8471 59.8048 25.636C60.1134 25.4087 60.3732 25.0514 60.5843 24.5643L63.02 18.7673C63.1012 18.5886 63.1499 18.41 63.1661 18.2314C63.1986 18.0365 63.1661 17.8336 63.0687 17.6225L60.0241 10.8755C59.8617 10.502 59.6831 10.2504 59.4882 10.1205C59.3096 9.99055 59.1147 9.90936 58.9036 9.87688L58.4408 9.80381C58.181 9.75509 58.0511 9.64954 58.0511 9.48716C58.0511 9.32478 58.1891 9.24359 58.4652 9.24359H62.7521C63.0444 9.24359 63.1905 9.32478 63.1905 9.48716C63.1905 9.64954 63.0525 9.75509 62.7764 9.80381L62.3136 9.87688C62.0376 9.92559 61.8427 10.023 61.7291 10.1692C61.6316 10.3153 61.656 10.5508 61.8021 10.8755L64.1161 16.0636C64.181 16.2098 64.2541 16.2828 64.3353 16.2828C64.4327 16.2828 64.5139 16.2098 64.5789 16.0636L66.6736 11.1191C66.8197 10.7619 66.8684 10.502 66.8197 10.3397C66.771 10.161 66.6086 10.0393 66.3326 9.97431L65.6506 9.82816C65.3745 9.76321 65.2365 9.64954 65.2365 9.48716C65.2365 9.32478 65.3826 9.24359 65.6749 9.24359H69.4016C69.5802 9.24359 69.6939 9.27607 69.7426 9.34102C69.8075 9.38973 69.84 9.45469 69.84 9.53588C69.84 9.69826 69.7182 9.80381 69.4747 9.85252L69.0849 9.92559C68.679 9.99055 68.338 10.1448 68.0619 10.3884C67.7859 10.6157 67.5423 10.973 67.3312 11.4601L65.0173 16.8674C64.9361 17.0785 64.8874 17.2815 64.8711 17.4763C64.8711 17.6712 64.928 17.8823 65.0416 18.1096L68.1837 25.1489C68.3623 25.5386 68.541 25.7903 68.7196 25.9039C68.9144 26.0176 69.1093 26.0907 69.3042 26.1231L69.7669 26.1962C70.043 26.2449 70.181 26.3586 70.181 26.5372C70.181 26.6996 70.0349 26.7808 69.7426 26.7808H65.4314C65.1391 26.7808 64.9929 26.6834 64.9929 26.4885C64.9929 26.3424 65.1228 26.2449 65.3826 26.1962L65.8698 26.1231C66.1458 26.0907 66.3407 26.0014 66.4544 25.8552C66.568 25.6928 66.5599 25.4574 66.43 25.1489L63.9212 19.571C63.8563 19.4249 63.7751 19.3518 63.6776 19.3518C63.5965 19.3518 63.5234 19.4249 63.4584 19.571L61.2663 24.9053C61.1201 25.2625 61.0714 25.5304 61.1201 25.7091C61.1688 25.8714 61.3312 25.9851 61.6073 26.0501L62.2893 26.1962C62.5653 26.2612 62.7034 26.3748 62.7034 26.5372C62.7034 26.6996 62.5572 26.7808 62.2649 26.7808H58.2703Z" fill="currentColor"></path>
<path className="" d="M49.2578 26.7808C49.0142 26.7808 48.8925 26.6915 48.8925 26.5129C48.8925 26.3667 48.998 26.2693 49.2091 26.2206L49.7693 26.1231C50.1103 26.0582 50.3295 25.9689 50.427 25.8552C50.5406 25.7415 50.5975 25.5142 50.5975 25.1732V10.8512C50.5975 10.5102 50.5406 10.2828 50.427 10.1692C50.3295 10.0555 50.1103 9.96619 49.7693 9.90124L49.2091 9.80381C48.998 9.75509 48.8925 9.65766 48.8925 9.51152C48.8925 9.3329 49.0142 9.24359 49.2578 9.24359H57.4418C57.8153 9.24359 58.0183 9.43033 58.0508 9.80381L58.2456 13.8471C58.2781 14.1232 58.1726 14.2612 57.929 14.2612C57.7341 14.2612 57.6205 14.1556 57.588 13.9445L57.4418 13.0433C57.2632 11.9391 56.8979 11.1353 56.3458 10.632C55.7937 10.1123 55.0305 9.85252 54.0562 9.85252C53.4067 9.85252 52.952 9.94995 52.6922 10.1448C52.4486 10.3234 52.3268 10.6482 52.3268 11.1191V16.9892C52.3268 17.2165 52.4405 17.3302 52.6678 17.3302H53.8857C54.6002 17.3302 55.0386 16.9486 55.201 16.1854L55.4445 14.9675C55.5095 14.724 55.6475 14.6184 55.8586 14.6509C56.0372 14.6834 56.1265 14.8214 56.1265 15.065V20.5453C56.1265 20.7889 56.0372 20.9269 55.8586 20.9594C55.6475 20.9919 55.5095 20.8863 55.4445 20.6428L55.201 19.4493C55.0873 18.8809 54.9249 18.5074 54.7138 18.3288C54.519 18.1502 54.2348 18.0609 53.8613 18.0609H52.6678C52.4405 18.0609 52.3268 18.1746 52.3268 18.4019V24.5156C52.3268 25.1001 52.473 25.5223 52.7653 25.7821C53.0738 26.0419 53.6259 26.1719 54.4215 26.1719C55.2335 26.1719 55.9236 25.9689 56.4919 25.5629C57.0765 25.1407 57.4824 24.3613 57.7098 23.2246L58.0021 21.7876C58.0508 21.5765 58.1726 21.4709 58.3674 21.4709C58.5947 21.4709 58.6922 21.6089 58.6597 21.885L58.4161 26.2206C58.3837 26.594 58.1807 26.7808 57.8072 26.7808H49.2578Z" fill="currentColor"></path>
<path className="" d="M46.943 27C46.6831 27 46.4639 26.8051 46.2853 26.4154L39.6845 12.0934C39.6358 11.9797 39.5708 11.931 39.4896 11.9472C39.4247 11.9635 39.3922 12.0366 39.3922 12.1665V24.6861C39.3922 25.1407 39.4653 25.4898 39.6114 25.7334C39.7738 25.9608 40.058 26.1069 40.4639 26.1718L40.7806 26.2206C40.9917 26.2368 41.0972 26.3342 41.0972 26.5129C41.0972 26.6915 40.9754 26.7808 40.7319 26.7808H37.2488C37.0052 26.7808 36.8834 26.6915 36.8834 26.5129C36.8834 26.3342 36.989 26.2368 37.2001 26.2206L37.5167 26.1718C37.9389 26.1069 38.2312 25.9608 38.3936 25.7334C38.556 25.4898 38.6371 25.1407 38.6371 24.6861V10.8512C38.6371 10.5102 38.5803 10.2828 38.4666 10.1692C38.3692 10.0555 38.1338 9.96619 37.7603 9.90124L37.2001 9.80381C36.989 9.75509 36.8834 9.65766 36.8834 9.51152C36.8834 9.3329 37.0052 9.24359 37.2488 9.24359H39.855C40.261 9.24359 40.5451 9.42221 40.7075 9.77945L46.4558 22.4208C46.5045 22.5183 46.5614 22.5589 46.6263 22.5426C46.7075 22.5264 46.7481 22.4696 46.7481 22.3721V11.3383C46.7481 10.8187 46.6588 10.4615 46.4802 10.2666C46.3015 10.0555 46.0742 9.92559 45.7982 9.87688L45.3597 9.80381C45.1486 9.75509 45.0431 9.65766 45.0431 9.51152C45.0431 9.3329 45.1649 9.24359 45.4084 9.24359H48.8915C49.1351 9.24359 49.2569 9.3329 49.2569 9.51152C49.2569 9.69014 49.1513 9.78757 48.9402 9.80381L48.6236 9.85252C48.2014 9.91747 47.9091 10.0555 47.7467 10.2666C47.5844 10.4615 47.5032 10.8187 47.5032 11.3383V26.2206C47.5032 26.5129 47.4463 26.7158 47.3327 26.8295C47.2352 26.9432 47.1053 27 46.943 27Z" fill="currentColor"></path>
</svg>
</div>
<p className="text-sm leading-relaxed text-neutral-400 font-geist">
            Curated homes, verified sellers, and concierge support from first tour to closing. Move with confidence.
          </p>
<a className="inline-flex items-center gap-2 text-sm font-medium tracking-tight text-neutral-900 bg-white hover:bg-white/90 rounded-full px-3 py-1.5" href="#">
<span className="font-geist">Contact us</span>
<svg className="lucide lucide-arrow-right w-4 h-4 stroke-[1.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<div className="text-xs text-neutral-500 font-geist">support@estatevault.com</div>
</div>

<div className="">
<h4 className="text-xs tracking-wider text-neutral-300 uppercase font-geist">Company</h4>
<ul className="mt-3 space-y-2">
<li className=""><a className="text-sm text-neutral-300 hover:text-white font-geist" href="#">About</a></li>
<li className=""><a className="text-sm text-neutral-300 hover:text-white font-geist" href="#">Press</a></li>
<li><a className="text-sm text-neutral-300 hover:text-white font-geist" href="#">Careers</a></li>
<li><a className="text-sm text-neutral-300 hover:text-white font-geist" href="#">Partners</a></li>
<li className=""><a className="text-sm text-neutral-300 hover:text-white font-geist" href="#">Investor Relations</a></li>
</ul>
</div>

<div className="">
<h4 className="text-xs tracking-wider text-neutral-300 uppercase font-geist">Apps</h4>
<ul className="mt-3 space-y-2">
<li className=""><a className="text-sm text-neutral-300 hover:text-white font-geist" href="#">iOS App</a></li>
<li className=""><a className="text-sm text-neutral-300 hover:text-white font-geist" href="#">Android App</a></li>
<li><a className="text-sm text-neutral-300 hover:text-white font-geist" href="#">TV App</a></li>
<li><a className="text-sm text-neutral-300 hover:text-white font-geist" href="#">Virtual Reality</a></li>
</ul>
</div>

<div className="">
<h4 className="text-xs tracking-wider text-neutral-300 uppercase font-geist">Services</h4>
<ul className="mt-3 space-y-2">
<li className=""><a className="text-sm text-neutral-300 hover:text-white font-geist" href="#">Buy with EstateVault</a></li>
<li><a className="text-sm text-neutral-300 hover:text-white font-geist" href="#">Sell with EstateVault</a></li>
<li className=""><a className="text-sm text-neutral-300 hover:text-white font-geist" href="#">Concierge</a></li>
<li className=""><a className="text-sm text-neutral-300 hover:text-white font-geist" href="#">Agent Finder</a></li>
<li className=""><a className="text-sm text-neutral-300 hover:text-white font-geist" href="#">Neighborhood Guides</a></li>
</ul>
</div>
</div>


<div className="mt-6 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center gap-3 md:justify-between">
<nav className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-neutral-400 font-geist">
<a className="hover:text-neutral-200" href="#">Fair Housing Statement</a>
<span className="text-neutral-700">|</span>
<a className="hover:text-neutral-200" href="#">Privacy Policy</a>
<span className="text-neutral-700">|</span>
<a className="hover:text-neutral-200" href="#">Terms of Use</a>
<span className="text-neutral-700">|</span>
<a className="hover:text-neutral-200" href="#">Accessibility</a>
<span className="text-neutral-700">|</span>
<a className="hover:text-neutral-200" href="#">DMCA</a>
<span className="text-neutral-700">|</span>
<a className="hover:text-neutral-200" href="#">Sitemap</a>
</nav>
<div className="text-[11px] text-neutral-500 font-geist">© 2025 EstateVault, Inc. All rights reserved.</div>
</div>
</div>
</div>
</footer>




    </>
  );
}
