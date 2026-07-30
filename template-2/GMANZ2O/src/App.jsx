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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

    document.addEventListener('DOMContentLoaded', () => {
      // Initialize open states
      document.querySelectorAll('#faq [data-accordion-item]').forEach(item => {
        const open = item.hasAttribute('data-open');
        const btn = item.querySelector('[data-accordion="faq"]');
        const a = item.querySelector('[data-qa="a"]');
        const plus = item.querySelector('[data-icon="plus"]');
        const minus = item.querySelector('[data-icon="minus"]');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        a.classList.toggle('hidden', !open);
        plus.classList.toggle('hidden', open);
        minus.classList.toggle('hidden', !open);
      });

      // Toggle behavior
      document.querySelectorAll('#faq [data-accordion="faq"]').forEach(btn => {
        btn.addEventListener('click', () => {
          const item = btn.closest('[data-accordion-item]');
          const content = item.querySelector('[data-qa="a"]');
          const plus = item.querySelector('[data-icon="plus"]');
          const minus = item.querySelector('[data-icon="minus"]');
          const expanded = btn.getAttribute('aria-expanded') === 'true';
          btn.setAttribute('aria-expanded', String(!expanded));
          content.classList.toggle('hidden');
          plus.classList.toggle('hidden');
          minus.classList.toggle('hidden');
        });
      });

      // Render icons (safe to call multiple times)
      if (window.lucide && typeof lucide.createIcons === 'function') {
        lucide.createIcons();
      }
    });
  
}

{

    (function () {
      function initPricing() {
        const root = document.getElementById('pricing');
        if (!root) return;

        const amountEl = root.querySelector('[data-amount]');
        const periodEl = root.querySelector('[data-period]');
        const deliveryKeyEl = root.querySelector('[data-delivery-key]');
        const deliveryValEl = root.querySelector('[data-delivery-val]');
        const btnProject = root.querySelector('[data-mode-button="project"]');
        const btnMonthly = root.querySelector('[data-mode-button="monthly"]');
        const upsellSwitch = root.querySelector('[data-upsell-switch]');
        const upsellKnob = root.querySelector('[data-upsell-knob]');

        const prices = { project: 3200, monthly: 4500 };
        const addon = 1850;
        const state = { mode: 'project', upsell: false };

        function money(n) {
          return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
        }

        function render() {
          const base = prices[state.mode];
          const total = base + (state.upsell ? addon : 0);
          amountEl.textContent = money(total);
          periodEl.textContent = state.mode === 'project' ? '/project' : '/month';
          deliveryKeyEl.textContent = state.mode === 'project' ? 'Timeline' : 'Commitment';
          deliveryValEl.textContent = state.mode === 'project' ? '4–6 weeks' : '3 month minimum';

          // Segmented control visuals
          btnProject.classList.toggle('bg-white', state.mode === 'project');
          btnProject.classList.toggle('text-gray-900', state.mode === 'project');
          btnProject.classList.toggle('text-white/80', state.mode !== 'project');

          btnMonthly.classList.toggle('bg-white', state.mode === 'monthly');
          btnMonthly.classList.toggle('text-gray-900', state.mode === 'monthly');
          btnMonthly.classList.toggle('text-white/80', state.mode !== 'monthly');

          // Upsell switch visuals
          upsellSwitch.setAttribute('aria-checked', state.upsell ? 'true' : 'false');
          upsellSwitch.classList.toggle('bg-white', state.upsell);
          upsellSwitch.classList.toggle('bg-white/10', !state.upsell);
          upsellKnob.classList.toggle('translate-x-5', state.upsell);
          upsellKnob.classList.toggle('translate-x-0', !state.upsell);
        }

        btnProject.addEventListener('click', () => { state.mode = 'project'; render(); });
        btnMonthly.addEventListener('click', () => { state.mode = 'monthly'; render(); });
        upsellSwitch.addEventListener('click', () => { state.upsell = !state.upsell; render(); });

        render();
        if (window.lucide && typeof lucide.createIcons === 'function') lucide.createIcons();
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPricing, { once: true });
      } else {
        initPricing();
      }
    })();
  
}

{

        // Render Lucide icons
        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();
        });

        // Live local time
        const timeEl = document.getElementById('localTime');
        function updateClock() {
            const d = new Date();
            const hh = String(d.getHours()).padStart(2, '0');
            const mm = String(d.getMinutes()).padStart(2, '0');
            const ss = String(d.getSeconds()).padStart(2, '0');
            timeEl.textContent = `${hh}:${mm}:${ss}`;
        }
        updateClock();
        setInterval(updateClock, 1000);

        // Year
        document.getElementById('year').textContent = new Date().getFullYear();
    
}
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
      

<div className="fixed inset-0 -z-10">

<div className="absolute inset-0 opacity-[0.4] bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:16px_16px]"></div>

<div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] [background-size:120px_1px,1px_120px]"></div>

<div className="absolute inset-0 bg-gradient-to-b from-gray-50/60 via-transparent to-gray-50/60"></div>
</div>

<header className="max-w-7xl sm:px-6 mr-auto ml-auto pt-6 pr-4 pl-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs sm:text-sm tracking-tight text-gray-600 font-geist">STUDIO/ <span className="tabular-nums font-geist" id="localTime">23:19:22</span></span>
</div>
<div className="hidden sm:flex items-center gap-2 text-gray-400">
<svg className="lucide lucide-grip-horizontal w-4 h-4 stroke-1.5" data-lucide="grip-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="9"></circle><circle cx="19" cy="9"></circle><circle cx="5" cy="9"></circle><circle cx="12" cy="15"></circle><circle cx="19" cy="15"></circle><circle cx="5" cy="15"></circle></svg>
</div>
<a className="group inline-flex items-center gap-2 hover:bg-gray-800 text-sm font-medium text-white tracking-tight bg-gray-900 border-gray-200 border rounded-full pt-2 pr-4 pb-2 pl-4" href="#contact">
<span className="font-geist">Start Project</span>
<svg className="lucide lucide-arrow-right w-4 h-4 stroke-1.5 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</a>
</div>
</header>

<section className="max-w-7xl sm:px-6 mt-8 mr-auto mb-8 ml-auto pr-4 pl-4">
<div className="relative sm:mt-16 shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] bg-white border-white/20 border rounded-[40px] mt-10">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
<h1 className="leading-none select-none text-gray-900 tracking-tight">
<div className="flex gap-8 items-start">
<div className="flex-1">
<span className="block text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[9vw] font-semibold" style={{overflow: `hidden`, letterSpacing: `-0.15em`}}>
<span className="font-geist tracking-tighter" style={{display: `inline-block`, animation: `0.8s ease-out 0s 1 normal forwards running letterSlideIn`, transform: `translateY(-100%)`, opacity: `0`}}>S</span>
<span className="font-geist tracking-tighter" style={{display: `inline-block`, animation: `0.8s ease-out 0.1s 1 normal forwards running letterSlideIn`, transform: `translateY(-100%)`, opacity: `0`}}>T</span>
<span className="font-geist tracking-tighter" style={{display: `inline-block`, animation: `0.8s ease-out 0.2s 1 normal forwards running letterSlideIn`, transform: `translateY(-100%)`, opacity: `0`}}>U</span>
<span className="font-geist tracking-tighter" style={{display: `inline-block`, animation: `0.8s ease-out 0.3s 1 normal forwards running letterSlideIn`, transform: `translateY(-100%)`, opacity: `0`}}>D</span>
<span className="font-geist tracking-tighter" style={{display: `inline-block`, animation: `0.8s ease-out 0.4s 1 normal forwards running letterSlideIn`, transform: `translateY(-100%)`, opacity: `0`}}>I</span>
<span className="font-geist tracking-tighter" style={{display: `inline-block`, animation: `0.8s ease-out 0.5s 1 normal forwards running letterSlideIn`, transform: `translateY(-100%)`, opacity: `0`}}>O</span>
</span>
</div>
<div className="w-80 hidden lg:block pt-8">
<div className="space-y-4">
<div className="flex items-center gap-2 text-sm text-gray-600">
<svg className="lucide lucide-map-pin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="10"></circle></svg>
<span className="font-geist">San Francisco, CA</span>
</div>
<div className="flex items-center gap-2 text-sm text-gray-600">
<svg className="lucide lucide-users" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="9" cy="7"></circle><path></path><path></path></svg>
<span className="font-geist">12 Team Members</span>
</div>
<div className="flex items-center gap-2 text-sm text-gray-600">
<svg className="lucide lucide-award" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="8"></circle></svg>
<span className="font-geist">200+ Projects Delivered</span>
</div>
<div className="flex items-center gap-2 text-sm text-gray-600">
<svg className="lucide lucide-calendar" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><rect height="18" rx="2" width="18"></rect><path></path></svg>
<span className="font-geist">Est. 2016</span>
</div>
<div className="border-gray-200 border-t pt-4">
<p className="leading-relaxed text-sm text-gray-500 font-geist">
            A creative design studio specializing in brand identity, digital products, and strategic design solutions for forward-thinking companies.
          </p>
</div>
</div>
</div>
</div>

</h1>
<div className="mt-6 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
<div className="border-black/5 border-t pt-5">
<div className="flex items-start gap-3">
<svg className="lucide lucide-award stroke-1.5 mt-0.5 w-[20px] h-[20px]" data-lucide="award" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" style={{width: `20px`, height: `20px`, color: `rgb(212, 212, 212)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="8"></circle></svg>
<div className="">
<p className="text-sm font-medium tracking-tight text-gray-900 font-geist">Based in San Francisco</p>
<p className="text-xs text-gray-500 mt-1 font-geist">California • Working globally</p>
</div>
</div>
</div>
<div className="border-black/5 border-t pt-5">
<div className="flex items-start gap-3">
<svg className="lucide lucide-award stroke-1.5 mt-0.5 w-[20px] h-[20px]" data-lucide="award" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" style={{width: `20px`, height: `20px`, color: `rgb(212, 212, 212)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="8"></circle></svg>
<div className="">
<p className="text-sm font-medium tracking-tight text-gray-900 font-geist">Full-Service Design Studio</p>
<p className="text-xs text-gray-500 mt-1 font-geist">Brand • Digital • Strategy</p>
</div>
</div>
</div>
<div className="border-t border-black/5 pt-5">
<div className="flex items-start gap-3">
<svg className="lucide lucide-award stroke-1.5 mt-0.5 w-[20px] h-[20px]" data-lucide="award" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" style={{width: `20px`, height: `20px`, color: `rgb(212, 212, 212)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="8"></circle></svg>
<div className="">
<p className="text-sm font-medium tracking-tight text-gray-900 font-geist">Award-Winning Team</p>
<p className="text-xs text-gray-500 mt-1 font-geist">15+ industry recognitions</p>
</div>
</div>
</div>
</div>
<div className="sm:mt-10 mt-8">
<div className="relative overflow-hidden bg-white/5 border-white/10 border rounded-2xl">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none"></div>
<img alt="Creative team working on design projects" className="w-full h-[52vh] sm:h-[60vh] object-cover" loading="eager" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b1c8bd29-43a2-426c-9dd1-916b14f8554d_3840w.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent pointer-events-none"></div>
<div className="absolute inset-0 flex items-end">
<div className="w-full sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="max-w-3xl">
<h2 className="text-3xl sm:text-4xl lg:text-7xl text-white font-geist tracking-tighter drop-shadow-lg">Design that moves brands forward</h2>
<p className="sm:text-lg leading-relaxed text-lg font-normal text-white/90 font-geist mt-3 drop-shadow-sm">
      We craft brand identities, digital products, and strategic campaigns for ambitious teams. From concept to launch, our studio blends clarity, utility, and aesthetics to create work that performs and endures. Explore a curated reel of recent collaborations and outcomes.
    </p>
<div className="mt-4">
<a className="inline-flex items-center gap-2 hover:bg-white/15 transition-all duration-300 text-sm font-medium text-white tracking-tight bg-white/8 border-white/15 border rounded-full pt-2 pr-4 pb-2 pl-4 shadow-sm backdrop-blur-sm" href="#showreel">
<svg className="lucide lucide-play w-4 h-4 stroke-1.5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="font-geist">Watch Showreel</span>
</a>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
<div className="rounded-xl bg-white/6 backdrop-blur-sm border border-white/10 p-3 shadow-sm hover:bg-white/10 transition-all duration-300">
<div className="text-xl font-semibold tracking-tight text-white font-geist drop-shadow-sm">200+</div>
<p className="text-[11px] text-white/80 mt-0.5 font-geist">Projects Delivered</p>
</div>
<div className="rounded-xl bg-white/6 backdrop-blur-sm border border-white/10 p-3 shadow-sm hover:bg-white/10 transition-all duration-300">
<div className="text-xl font-semibold tracking-tight text-white font-geist drop-shadow-sm">50+</div>
<p className="text-[11px] text-white/80 mt-0.5 font-geist">Clients Worldwide</p>
</div>
<div className="rounded-xl bg-white/6 backdrop-blur-sm border border-white/10 p-3 shadow-sm hover:bg-white/10 transition-all duration-300">
<div className="text-xl font-semibold tracking-tight text-white font-geist drop-shadow-sm">8</div>
<p className="text-[11px] text-white/80 mt-0.5 font-geist">Years in Practice</p>
</div>
<div className="rounded-xl bg-white/6 backdrop-blur-sm border border-white/10 p-3 shadow-sm hover:bg-white/10 transition-all duration-300">
<div className="text-xl font-semibold tracking-tight text-white font-geist drop-shadow-sm">12</div>
<p className="text-[11px] text-white/80 mt-0.5 font-geist">Team Members</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 sm:mt-20 mt-8 mr-auto mb-8 ml-auto pr-4 pl-4">
<div className="relative overflow-hidden rounded-[40px] border border-white/20 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl sm:text-2xl text-gray-900 font-geist tracking-tighter">Recent Work</h2>
<a className="text-sm text-gray-700 hover:text-gray-900 inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1.5 border border-white/20" href="#">
<span className="font-geist">View all</span>
<svg className="lucide lucide-arrow-up-right w-4 h-4 stroke-1.5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">

<article className="group overflow-hidden bg-white/80 border-black/5 border rounded-xl backdrop-blur-sm">
<div className="relative aspect-[16/10]">
<img alt="Modern brand identity design" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ce4a30c0-92e5-44c5-9ae4-49b73739f76e_800w.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center gap-2 text-xs text-gray-500">
<svg className="lucide lucide-palette w-4 h-4 stroke-1.5" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="13.5" cy="6.5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" fill="currentColor"></circle></svg>
<span className="font-geist">Brand Identity</span>
</div>
<h3 className="mt-2 text-base font-semibold tracking-tight text-gray-900 font-geist">Vertex Brand System</h3>
<p className="text-sm text-gray-600 font-geist mt-1">Complete visual identity for fintech startup.</p>
</div>
</article>

<article className="group rounded-xl overflow-hidden border border-black/5 bg-white/80 backdrop-blur-sm">
<div className="relative aspect-[16/10]">
<img alt="Digital product design" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8a77358e-e157-495a-9eeb-4cbf66ca6511_800w.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center gap-2 text-xs text-gray-500">
<svg className="lucide lucide-monitor w-4 h-4 stroke-1.5" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20"></rect><line></line><line></line></svg>
<span className="font-geist">Digital Product</span>
</div>
<h3 className="mt-2 text-base font-semibold tracking-tight text-gray-900 font-geist">Atlas Dashboard</h3>
<p className="text-sm text-gray-600 font-geist mt-1">Enterprise SaaS platform redesign.</p>
</div>
</article>

<article className="group rounded-xl overflow-hidden border border-black/5 bg-white/80 backdrop-blur-sm">
<div className="relative aspect-[16/10]">
<img alt="Website design" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f45ce15d-81e2-4b65-88ee-bf4636d661cc_1600w.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center gap-2 text-xs text-gray-500">
<svg className="lucide lucide-globe w-4 h-4 stroke-1.5" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path><path></path></svg>
<span className="font-geist">Web Design</span>
</div>
<h3 className="mt-2 text-base font-semibold tracking-tight text-gray-900 font-geist">Nexus E-commerce</h3>
<p className="mt-1 text-sm text-gray-600 font-geist">Modern shopping experience for lifestyle brand.</p>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 sm:mt-20 mt-8 mr-auto mb-8 ml-auto pr-4 pl-4" id="about">
<div className="relative overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] bg-white border-white/20 border rounded-[40px]">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative">
<div className="flex border-white/10 border-b pt-6 pr-6 pb-6 pl-6 items-end justify-between">
<h2 className="text-2xl sm:text-3xl text-gray-900 font-geist tracking-tighter">About Studio</h2>
<p className="hidden sm:block text-xs text-gray-500 font-geist">Story, team, achievements</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 border-t border-black/5">

<div className="md:col-span-3 md:border-b-0 md:border-r border-white/10 border-b pt-6 pr-6 pb-6 pl-6">
<p className="text-sm text-gray-500 font-geist">Creative Design Studio</p>
<p className="mt-1 text-lg font-medium tracking-tight text-gray-900 font-geist">Studio Meridian</p>
<div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
<svg className="lucide lucide-map-pin w-4 h-4 stroke-1.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="10"></circle></svg>
<span className="font-geist">San Francisco, CA • Remote‑friendly</span>
</div>
</div>

<div className="relative md:col-span-6 md:row-span-2 md:border-b-0 md:border-r border-white/10 border-b">
<div className="relative aspect-[16/10] md:aspect-[9/10] lg:aspect-[16/10]">
<img alt="Creative team collaborating in modern studio space" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3bbbf364-3029-4f9e-9987-eb90d946b1b1_1600w.jpg" />
<div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent pointer-events-none"></div>

<div className="hidden md:block absolute inset-0 pointer-events-none">
<div className="absolute top-5 right-5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm p-4 ring-1 ring-white/10">
<div className="text-2xl lg:text-3xl text-white font-geist tracking-tighter drop-shadow-sm">200+</div>
<p className="text-[11px] text-white/80 mt-0.5 font-geist">Projects Delivered</p>
</div>
<div className="absolute bottom-5 left-5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm p-4 ring-1 ring-white/10">
<div className="text-2xl lg:text-3xl text-white font-geist tracking-tighter drop-shadow-sm">8</div>
<p className="text-[11px] text-white/80 mt-0.5 font-geist">Years in Business</p>
</div>
<div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm p-4 ring-1 ring-white/10">
<div className="text-2xl lg:text-3xl text-white font-geist tracking-tighter drop-shadow-sm">12</div>
<p className="text-[11px] text-white/80 mt-0.5 font-geist">Team Members</p>
</div>
</div>
</div>
</div>

<div className="p-6 md:col-span-3 border-b md:border-b-0">
<div className="text-3xl text-gray-900 font-geist tracking-tighter">15+</div>
<p className="text-xs text-gray-500 mt-1 font-geist">Industry Awards</p>
</div>

<div className="md:col-span-3 md:border-t md:border-r border-black/5 border-t pt-6 pr-6 pb-6 pl-6">
<p className="text-sm text-gray-600 leading-relaxed font-geist">
                            We're a passionate team of designers, strategists, and creative problem-solvers. We help brands tell their stories through thoughtful design and digital experiences that connect with audiences.
                        </p>
<div className="mt-4 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-white bg-gray-900 hover:bg-gray-800 rounded-full px-3 py-1.5 border border-white/10">
<svg className="lucide lucide-users w-4 h-4 stroke-1.5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="9" cy="7"></circle></svg>
<span className="font-geist">Meet the Team</span>
</div>
</div>

<div className="md:col-span-3 border-black/5 border-t pt-6 pr-6 pb-6 pl-6">
<div className="text-3xl text-gray-900 font-geist tracking-tighter">50+</div>
<p className="text-xs text-gray-500 mt-1 font-geist">Happy Clients</p>
</div>
</div>

<div className="md:hidden border-t border-white/10 grid grid-cols-3">
<div className="p-4 text-center border-r border-white/10">
<div className="text-xl font-semibold tracking-tight text-gray-900 font-geist">200+</div>
<p className="text-[11px] text-gray-500 mt-0.5 font-geist">Projects</p>
</div>
<div className="p-4 text-center border-r border-white/10">
<div className="text-xl font-semibold tracking-tight text-gray-900 font-geist">8</div>
<p className="text-[11px] text-gray-500 mt-0.5 font-geist">Years</p>
</div>
<div className="p-4 text-center">
<div className="text-xl font-semibold tracking-tight text-gray-900 font-geist">12</div>
<p className="text-[11px] text-gray-500 mt-0.5 font-geist">Team</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 sm:mt-20 mt-8 mr-auto mb-8 ml-auto pr-4 pl-4" id="services">
<div className="relative overflow-hidden rounded-[40px] border border-white/20 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative">
<div className="flex border-white/10 border-b pt-6 pr-6 pb-6 pl-6 items-end justify-between">
<h2 className="text-2xl sm:text-3xl text-gray-900 font-geist tracking-tighter">Services</h2>
<div className="hidden sm:flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium tracking-tight text-gray-700 bg-gray-100 hover:bg-gray-200 border border-white/20" href="#">
<svg className="lucide lucide-download w-3.5 h-3.5 stroke-1.5" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
<span className="font-geist">Services Guide</span>
</a>
</div>
</div>

<div className="sm:p-8 border-white/10 border-b pt-6 pr-6 pb-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
<div className="md:col-span-1">
<div className="text-3xl sm:text-4xl text-gray-400 tabular-nums font-geist tracking-tighter">1</div>
</div>
<div className="md:col-span-8">
<ul className="space-y-2">
<li className="flex items-start gap-2 text-sm text-gray-700">
<svg className="lucide lucide-check w-3.5 h-3.5 stroke-1.5 mt-0.5 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="font-geist">Logo Design & Visual Identity</span>
</li>
<li className="flex items-start gap-2 text-sm text-gray-700">
<svg className="lucide lucide-check w-3.5 h-3.5 stroke-1.5 mt-0.5 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="font-geist">Brand Guidelines & Typography Systems</span>
</li>
<li className="flex items-start gap-2 text-sm text-gray-700">
<svg className="lucide lucide-check w-3.5 h-3.5 stroke-1.5 mt-0.5 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="font-geist">Marketing Collateral & Print Design</span>
</li>
</ul>
<div className="mt-4 flex items-center gap-3">
<div className="aspect-[4/3] w-24 sm:w-28 rounded-md overflow-hidden border border-white/20">
<img alt="Brand identity materials" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a9c8b9c0-3bcd-4910-8076-82f53f9a6acd_800w.jpg" />
</div>
<div className="aspect-[4/3] w-24 sm:w-28 rounded-md overflow-hidden border border-white/20">
<img alt="Logo design concepts" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/00f75d26-1523-4d97-b303-ce380c94d0e7_800w.jpg" />
</div>
<div className="aspect-[4/3] w-24 sm:w-28 rounded-md overflow-hidden border border-white/20">
<img alt="Business stationery" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/41f44e91-a4d8-4042-8253-0c6a79be833b_800w.jpg" />
</div>
</div>
</div>
<div className="md:col-span-3 md:text-right">
<h3 className="text-lg sm:text-xl tracking-tight font-semibold text-gray-900 font-geist">Brand Identity</h3>
<p className="text-xs text-gray-500 mt-1 font-geist">Visual systems that tell your story</p>
</div>
</div>
</div>

<div className="sm:p-8 border-black/5 border-t pt-6 pr-6 pb-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
<div className="md:col-span-1">
<div className="text-3xl sm:text-4xl text-gray-400 tabular-nums font-geist tracking-tighter">2</div>
</div>
<div className="md:col-span-8">
<ul className="space-y-2">
<li className="flex items-start gap-2 text-sm text-gray-700">
<svg className="lucide lucide-check w-3.5 h-3.5 stroke-1.5 mt-0.5 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="font-geist">UI/UX Design & Prototyping</span>
</li>
<li className="flex gap-2 text-sm text-gray-700 items-start">
<svg className="lucide lucide-check w-3.5 h-3.5 stroke-1.5 mt-0.5 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="font-geist">Responsive Web Design</span>
</li>
<li className="flex items-start gap-2 text-sm text-gray-700">
<svg className="lucide lucide-check w-3.5 h-3.5 stroke-1.5 mt-0.5 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="font-geist">Mobile App Design</span>
</li>
</ul>
<div className="mt-4 flex items-center gap-3">
<div className="aspect-[16/10] w-28 sm:w-32 rounded-md overflow-hidden border border-white/20">
<img alt="Website design mockups" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2787ba90-ce87-4cab-9679-6f97ebd85857_800w.jpg" />
</div>
<div className="aspect-[16/10] w-28 sm:w-32 rounded-md overflow-hidden border border-white/20">
<img alt="Mobile app interface" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ab172164-87bf-46ed-b6da-dcf1239c01d0_800w.jpg" />
</div>
</div>
</div>
<div className="md:col-span-3 md:text-right">
<h3 className="text-lg sm:text-xl tracking-tight font-semibold text-gray-900 font-geist">Digital Design</h3>
<p className="text-xs text-gray-500 mt-1 font-geist">User experiences that delight</p>
</div>
</div>
</div>

<div className="sm:p-8 border-black/5 border-t pt-6 pr-6 pb-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
<div className="md:col-span-1">
<div className="text-3xl sm:text-4xl text-gray-400 tabular-nums font-geist tracking-tighter">3</div>
</div>
<div className="md:col-span-8">
<ul className="space-y-2">
<li className="flex items-start gap-2 text-sm text-gray-700">
<svg className="lucide lucide-check w-3.5 h-3.5 stroke-1.5 mt-0.5 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="font-geist">Brand Strategy & Positioning</span>
</li>
<li className="flex items-start gap-2 text-sm text-gray-700">
<svg className="lucide lucide-check w-3.5 h-3.5 stroke-1.5 mt-0.5 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="font-geist">Creative Campaign Development</span>
</li>
<li className="flex items-start gap-2 text-sm text-gray-700">
<svg className="lucide lucide-check w-3.5 h-3.5 stroke-1.5 mt-0.5 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="font-geist">Content Strategy & Messaging</span>
</li>
</ul>
<div className="mt-4 flex items-center gap-3">
<div className="aspect-[16/10] w-32 sm:w-40 rounded-md overflow-hidden border border-white/20">
<img alt="Strategy workshop" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e1b23bf1-d8af-47dc-a35a-70e03d8cf014_800w.jpg" />
</div>
<div className="aspect-[16/10] w-32 sm:w-40 rounded-md overflow-hidden border border-white/20">
<img alt="Creative brainstorming" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b876c14b-5b29-40a0-b0db-bb155921890a_800w.jpg" />
</div>
</div>
</div>
<div className="md:col-span-3 md:text-right">
<h3 className="text-lg sm:text-xl tracking-tight font-semibold text-gray-900 font-geist">Strategy</h3>
<p className="text-xs text-gray-500 mt-1 font-geist">Strategic thinking meets creativity</p>
</div>
</div>
</div>
</div></div></section><section className="max-w-7xl sm:px-6 sm:mt-20 mt-8 mr-auto mb-8 ml-auto pr-4 pl-4" id="faq">
<div className="relative overflow-hidden rounded-[40px] border border-white/20 bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

<div className="md:col-span-5">
<h2 className="text-[56px] sm:text-[80px] leading-none font-semibold text-gray-900 tracking-tighter font-geist">Questions.</h2>
<p className="mt-3 text-sm sm:text-base text-gray-600 font-geist">
            Find answers to common questions about our services, processes, and how we can help transform your brand.
          </p>
<a className="mt-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium tracking-tight text-gray-700 bg-gray-100 hover:bg-gray-200 border border-white/20" href="#contact">
<span className="font-geist">Get in touch</span>
<svg className="lucide lucide-message-circle w-4 h-4 stroke-1.5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</a>
</div>

<div className="md:col-span-7">
<div className="space-y-3">

<div className="bg-white border-white/20 border rounded-2xl shadow-sm" data-accordion-item="" data-open="true">
<button aria-expanded="true" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-gray-900 font-geist">What's your design process like?</span>
<span className="shrink-0">
<svg className="lucide lucide-plus w-5 h-5 stroke-1.5 hidden" data-icon="plus" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<svg data-lucideminus="" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</span>
</button>
<div className="text-sm text-gray-600 font-geist pr-5 pb-5 pl-5" data-qa="a">
                We start with discovery to understand your goals and audience. Then we move through strategy, concept development, design iterations, and final delivery. You'll be involved at every key milestone with regular check-ins and feedback sessions.
              </div>
</div>

<div className="rounded-2xl border border-white/20 bg-white shadow-sm" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-gray-900 font-geist">Can you work with our existing brand guidelines?</span>
<span className="shrink-0">
<svg className="lucide lucide-plus w-5 h-5 stroke-1.5" data-icon="plus" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<svg className="lucide lucide-minus w-5 h-5 stroke-1.5 hidden" data-icon="minus" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-gray-600 font-geist hidden" data-qa="a">
                Absolutely. We can work within your current brand framework or help evolve it if needed. We'll audit your existing assets and either adapt them for new applications or recommend strategic updates to better serve your goals.
              </div>
</div>

<div className="rounded-2xl border border-white/20 bg-white shadow-sm" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-gray-900 font-geist">Do you offer revisions and feedback rounds?</span>
<span className="shrink-0">
<svg className="lucide lucide-plus w-5 h-5 stroke-1.5" data-icon="plus" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<svg className="lucide lucide-minus w-5 h-5 stroke-1.5 hidden" data-icon="minus" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-gray-600 font-geist hidden" data-qa="a">
                Yes, each phase includes structured feedback rounds. We typically allow 2–3 rounds of revisions per milestone to ensure the work meets your expectations. Major scope changes are discussed separately to maintain project timelines.
              </div>
</div>

<div className="rounded-2xl border border-white/20 bg-white shadow-sm" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-gray-900 font-geist">What industries do you specialize in?</span>
<span className="shrink-0">
<svg className="lucide lucide-plus w-5 h-5 stroke-1.5" data-icon="plus" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<svg className="lucide lucide-minus w-5 h-5 stroke-1.5 hidden" data-icon="minus" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-gray-600 font-geist hidden" data-qa="a">
                We work across technology, healthcare, finance, retail, and B2B services. Our approach is industry-agnostic but insight-driven—we dive deep into your market, competitors, and customer needs regardless of sector.
              </div>
</div>

<div className="rounded-2xl border border-white/20 bg-white shadow-sm" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-gray-900 font-geist">How do you handle project communication?</span>
<span className="shrink-0">
<svg className="lucide lucide-plus w-5 h-5 stroke-1.5" data-icon="plus" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<svg className="lucide lucide-minus w-5 h-5 stroke-1.5 hidden" data-icon="minus" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-gray-600 font-geist hidden" data-qa="a">
                You'll have a dedicated project lead as your main point of contact. We use shared workspaces for file sharing and feedback, plus scheduled check-ins via video calls. Updates are provided weekly or at each milestone.
              </div>
</div>

<div className="rounded-2xl border border-white/20 bg-white shadow-sm" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-gray-900 font-geist">What happens after project completion?</span>
<span className="shrink-0">
<svg className="lucide lucide-plus w-5 h-5 stroke-1.5" data-icon="plus" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<svg className="lucide lucide-minus w-5 h-5 stroke-1.5 hidden" data-icon="minus" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-gray-600 font-geist hidden" data-qa="a">
                We provide 30 days of complimentary support for any technical issues or minor adjustments. Beyond that, we offer ongoing partnerships for continuous updates, new campaigns, or additional design needs as your business grows.
              </div>
</div>
</div>
</div>
</div>
</div>
</div>

</section><section className="max-w-7xl sm:px-6 sm:mt-20 mt-8 mr-auto mb-8 ml-auto pr-4 pl-4" id="pricing">
<div className="relative overflow-hidden rounded-[40px] border border-white/20 bg-neutral-950 text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)]">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-20%,rgba(255,255,255,0.08),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_120%,rgba(255,255,255,0.06),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.15]"></div>
</div>
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-2 text-sm text-white/70 font-geist">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<span className="font-geist">Transparent rates</span>
</div>
<div className="text-center mt-2">
<h2 className="text-[56px] sm:text-[80px] leading-none font-semibold tracking-tighter font-geist">Pricing.</h2>
<div className="inline-flex gap-1 ring-1 ring-white/10 bg-white/10 rounded-full mt-5 pt-1 pr-1 pb-1 pl-1 items-center">
<button className="text-sm text-gray-900 tracking-tight font-geist bg-white rounded-full pt-1.5 pr-3 pb-1.5 pl-3" data-mode-button="project" type="button">Fixed price</button>
<button className="text-sm tracking-tight font-geist rounded-full pt-1.5 pr-3 pb-1.5 pl-3 text-white/80" data-mode-button="monthly" type="button">Retainer</button>
</div>
</div>
<div className="ring-1 ring-white/10 sm:p-6 bg-white/5 rounded-3xl mt-8 pt-4 pr-4 pb-4 pl-4">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-stretch">

<div className="md:col-span-4">
<div className="h-full rounded-2xl bg-black/30 ring-1 ring-white/10 p-5 flex flex-col justify-between">
<div className="">
<p className="text-base font-medium tracking-tight font-geist">Need growth acceleration?</p>
<p className="mt-2 text-sm text-white/70 font-geist">Add strategic marketing and SEO optimization.</p>
</div>
<div className="mt-8 flex items-center justify-between">
<div className="text-sm font-geist">
<span className="text-white/90">+ $1,850</span>
</div>
<button aria-checked="false" className="inline-flex h-6 w-11 ring-1 ring-white/10 transition-colors duration-200 bg-white/10 rounded-full items-center" data-upsell-switch="" role="switch" type="button">
<span className="h-4 w-4 rounded-full bg-white transition-transform duration-200 translate-x-0" data-upsell-knob=""></span>
<span className="sr-only">Toggle Growth Package add-on</span>
</button>
</div>
</div>
</div>

<div className="md:col-span-4">
<div className="h-full rounded-2xl bg-black/30 ring-1 ring-white/10 p-5 flex flex-col">
<div className="flex-1">
<div className="flex items-end gap-2">
<div className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter tabular-nums font-geist" data-amount="">$3,200</div>
<div className="pb-2 text-white/60 text-base font-geist" data-period="">/project</div>
</div>
</div>
<div className="mt-8 pt-4 border-t border-white/10 text-xs text-white/70 flex items-center justify-between font-geist">
<span data-delivery-key="">Timeline</span>
<span data-delivery-val="">4–6 weeks</span>
</div>
</div>
</div>

<div className="md:col-span-4">
<div className="h-full rounded-2xl bg-black/30 ring-1 ring-white/10 p-5 flex flex-col">
<ul className="space-y-3">
<li className="flex items-start gap-2">
<svg className="lucide lucide-plus w-5 h-5 text-white/80" data-lucide="plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<span className="text-sm font-geist">Complete visual brand system</span>
</li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-plus w-5 h-5 text-white/80" data-lucide="plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<span className="text-sm font-geist">Custom website or digital product</span>
</li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-plus w-5 h-5 text-white/80" data-lucide="plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<span className="text-sm font-geist">Launch support and guidelines</span>
</li>
</ul>
<div className="mt-auto">
<a className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight text-gray-900 bg-white hover:bg-white/90 transition-colors border border-white/10" href="#contact">
<span className="font-geist">Start conversation</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>

<p className="mt-4 text-[11px] text-white/50 font-geist text-center">Clear pricing, no surprises. Every project is scoped individually for your unique needs.</p>
</div>
</div>

</section>

<footer className="max-w-7xl sm:px-6 sm:mt-24 mt-8 mr-auto mb-8 ml-auto pr-4 pl-4">
<div className="relative overflow-hidden sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] bg-white border-white/20 border rounded-[40px] pt-6 pr-6 pb-6 pl-6">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div className="">
<p className="text-sm text-gray-500 font-geist">Ready to create something amazing?</p>
<h3 className="mt-1 text-xl sm:text-2xl text-gray-900 font-geist tracking-tighter">Let's bring your vision to life.</h3>
</div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-gray-700 bg-gray-100 hover:bg-gray-200 border border-white/20" href="mailto:hello@studiomeridian.co">
<svg className="lucide lucide-mail w-4 h-4 stroke-1.5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><rect height="16" rx="2" width="20"></rect></svg>
<span className="font-geist">hello@studiomeridian.co</span>
</a>
<a className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-white bg-blue-600 hover:bg-blue-700 border border-white/10" href="#">
<svg className="lucide lucide-message-circle w-4 h-4 stroke-1.5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="font-geist">Start Project</span>
</a>
</div>
</div>
</div>
</div>
</footer><div className="max-w-7xl sm:px-6 sm:mt-10 mt-8 mr-auto mb-16 ml-auto pr-4 pl-4">
<div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-neutral-950 text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)] p-6 sm:p-8">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-20%,rgba(255,255,255,0.06),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_120%,rgba(255,255,255,0.05),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.15]"></div>
</div>
<div className="relative">
<h2 className="text-[16vw] sm:text-[12vw] lg:text-[9vw] leading-[0.9] font-semibold tracking-tighter font-geist">
<span className="block">Ready to build</span>
<span className="block text-white/60">something extraordinary?</span>
</h2>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="">
<p className="text-sm text-white/60 font-geist">Get Started</p>
<a className="mt-2 inline-flex items-center gap-3 text-xl sm:text-2xl font-medium tracking-tight text-white font-geist" href="mailto:hello@studiomeridian.co">
<svg className="lucide lucide-mail w-5 h-5 stroke-[1.5] flex-shrink-0" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><rect height="16" rx="2" width="20"></rect></svg>
<span className="break-all">hello@studiomeridian.co</span>
</a>
</div>

<div className="">
<p className="text-sm text-white/60 font-geist">Schedule a Call</p>
<a className="inline-flex items-center gap-2 hover:bg-white/90 transition-colors duration-200 text-sm font-medium text-gray-900 tracking-tight bg-white border-white/10 border rounded-full mt-2 pt-3 pr-5 pb-3 pl-5" href="#contact">
<svg className="lucide lucide-calendar" data-lucide="calendar" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><rect height="18" rx="2" width="18"></rect><path></path></svg>
<span className="font-geist">Book a Meeting</span>
</a>
</div>

<div className="">
<p className="text-sm text-white/60 font-geist">Follow Along</p>
<div className="flex flex-wrap gap-3 mt-2 items-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 tracking-tight bg-white border-white/10 border rounded-full pt-3 pr-4 pb-3 pl-4 hover:bg-white/90 transition-colors duration-200" href="#">
<svg className="lucide lucide-twitter" data-lucide="twitter" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="font-geist">2,843</span>
</a>
<a className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-900 border border-white/10 hover:bg-white/90 transition-colors duration-200" href="#">
<svg className="lucide lucide-instagram" data-lucide="instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20"></rect><path></path><line></line></svg>
</a>
<a className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-900 border border-white/10 hover:bg-white/90 transition-colors duration-200" href="#">
<svg className="lucide lucide-dribbble" data-lucide="dribbble" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path><path></path><path></path></svg>
</a>
<a className="inline-flex items-center justify-center w-12 h-12 text-gray-900 bg-white border-white/10 border rounded-full hover:bg-white/90 transition-colors duration-200" href="#">
<svg className="lucide lucide-behance" data-lucide="behance" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className=""></path><path className=""></path></svg>
</a>
<a className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-900 border border-white/10 hover:bg-white/90 transition-colors duration-200" href="#">
<svg className="lucide lucide-linkedin" data-lucide="linkedin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><rect height="12" width="4"></rect><circle cx="4" cy="4"></circle></svg>
</a>
</div>
</div>
</div>
<div className="mt-8 border-t border-white/10"></div>
<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="">
<p className="text-sm text-white/60 font-geist">Explore</p>
<div className="mt-3 grid grid-cols-2 gap-2 text-sm">
<a className="font-medium tracking-tight hover:underline font-geist" href="#work">Our Work</a>
<a className="font-medium tracking-tight hover:underline font-geist" href="#services">What We Do</a>
<a className="font-medium tracking-tight hover:underline font-geist" href="#pricing">Investment</a>
<a className="font-medium tracking-tight hover:underline font-geist" href="#blog">Insights</a>
</div>
</div>

<div className="">
<p className="text-sm text-white/60 font-geist">Fine Print</p>
<div className="mt-3 grid grid-cols-1 gap-2 text-sm">
<a className="font-medium tracking-tight hover:underline font-geist" href="#">Terms & Conditions</a>
<a className="font-medium tracking-tight hover:underline font-geist" href="#">Privacy Notice</a>
</div>
</div>
</div>
<p className="mt-6 text-center text-xs text-white/70 font-geist">© <span id="year">2025</span> Studio Meridian — Crafted with care in San Francisco</p>
</div>
</div>
</div>


    </>
  );
}
