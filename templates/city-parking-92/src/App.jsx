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



      // State
      const state = {
        tier: 'standard',
        rate: { standard: 2, premium: 3 },
        sms: 0.5,
        hours: 1
      };

      // Elements
      const tierButtons = document.querySelectorAll('.tier-btn');
      const hourButtons = document.querySelectorAll('.hr-btn');
      const rateLabel = document.getElementById('rateLabel');
      const durationLabel = document.getElementById('durationLabel');
      const summaryTier = document.getElementById('summaryTier');
      const summaryHours = document.getElementById('summaryHours');
      const summaryRate = document.getElementById('summaryRate');
      const smsFee = document.getElementById('smsFee');
      const totalFee = document.getElementById('totalFee');

      function setActiveTier(tier){
        tierButtons.forEach(btn=>{
          const is = btn.getAttribute('data-tier') === tier;
          btn.classList.toggle('bg-white/10', is);
          btn.classList.toggle('text-white', is);
          btn.classList.toggle('text-white/70', !is);
          btn.classList.toggle('bg-transparent', !is);
        });
      }

      function setActiveHour(h){
        hourButtons.forEach(btn=>{
          const is = Number(btn.getAttribute('data-hour')) === h;
          btn.classList.toggle('bg-white', is);
          btn.classList.toggle('text-black', is);
          btn.classList.toggle('text-white/80', !is);
          btn.classList.toggle('bg-transparent', !is);
        });
      }

      function money(n){
        return (Math.round((n + Number.EPSILON) * 100) / 100).toString().replace(/\.0+$/,'').replace(/(\.\d*[1-9])0+$/,'$1');
      }

      function render(){
        // labels
        rateLabel.textContent = `AED ${state.rate[state.tier]}/hr`;
        const hrLabel = state.hours === 1 ? '1 hour' : `${state.hours} hours`;
        durationLabel.textContent = hrLabel;

        summaryTier.textContent = state.tier.charAt(0).toUpperCase() + state.tier.slice(1);
        summaryHours.textContent = state.hours;
        summaryRate.textContent = `AED ${state.rate[state.tier]}/hr`;
        smsFee.textContent = money(state.sms);

        const total = state.hours * state.rate[state.tier] + state.sms;
        totalFee.textContent = money(total);

        setActiveTier(state.tier);
        setActiveHour(state.hours);
      }

      // Events
      tierButtons.forEach(btn=>{
        btn.addEventListener('click', ()=>{
          state.tier = btn.getAttribute('data-tier');
          render();
          lucide.createIcons();
        });
      });

      hourButtons.forEach(btn=>{
        btn.addEventListener('click', ()=>{
          state.hours = Number(btn.getAttribute('data-hour'));
          render();
        });
      });

      // Initialize icons and UI
      document.addEventListener('DOMContentLoaded', ()=>{
        lucide.createIcons();
        render();
        // demo start time
        const startTime = document.getElementById('startTime');
        const now = new Date();
        const fmt = (d)=> d.toLocaleTimeString([], {hour:'numeric', minute:'2-digit'});
        const end = new Date(now.getTime() + state.hours*60*60*1000);
        startTime.textContent = `Now • ${fmt(now)} – ${fmt(end)}`;
      });

      // Update end time when hours change
      const observer = new MutationObserver(()=>{
        const now = new Date();
        const end = new Date(now.getTime() + state.hours*60*60*1000);
        const fmt = (d)=> d.toLocaleTimeString([], {hour:'numeric', minute:'2-digit'});
        const startTime = document.getElementById('startTime');
        startTime.textContent = `Now • ${fmt(now)} – ${fmt(end)}`;
      });
      observer.observe(document.getElementById('durationLabel'), { childList: true });

    
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
      
<div className="mx-auto max-w-md min-h-screen flex flex-col">

<header className="relative">
<div className="absolute inset-0">
<img alt="" className="h-44 w-full object-cover opacity-50" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-neutral-950"></div>
</div>
<div className="relative z-10 px-4 pt-3 flex items-center justify-between">
<button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/40 backdrop-blur-md">
<i className="h-5 w-5" data-lucide="chevron-left"></i>
</button>
<div className="text-center">
<h1 className="text-2xl tracking-tight font-semibold">City Parking</h1>
<div className="mt-1 flex items-center gap-1.5 text-xs text-white/70 justify-center">
<i className="h-3.5 w-3.5" data-lucide="map-pin"></i>
<span>Abu Dhabi • Zone S</span>
</div>
</div>
<button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/40 backdrop-blur-md">
<i className="h-5 w-5" data-lucide="bell"></i>
</button>
</div>
<div className="relative z-10 px-4 pb-4 mt-6">
<div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/40 p-2 backdrop-blur-md">
<div className="shrink-0 rounded-xl bg-white/10 p-2.5">
<i className="h-5 w-5 text-white" data-lucide="navigation"></i>
</div>
<div className="flex-1">
<p className="text-xs text-white/60">Current location</p>
<p className="text-sm font-medium">Al Danah, Sector S-12</p>
</div>
<button className="rounded-xl bg-white text-black px-3 py-2 text-xs font-medium">Change</button>
</div>
</div>
</header>

<main className="flex-1 px-4 space-y-4 -mt-2">

<section className="rounded-2xl border border-white/10 bg-neutral-900/60 p-3">
<div className="flex items-center justify-between mb-2">
<h2 className="text-lg tracking-tight font-semibold">Select Area</h2>
<span className="text-xs text-white/60" id="rateLabel">AED 2/hr</span>
</div>
<div className="grid grid-cols-2 gap-2">
<button className="tier-btn group inline-flex items-center justify-center gap-2 rounded-xl px-3 py-3 border border-white/10 bg-white/10 text-white transition" data-tier="standard">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-black">
<i className="h-3.5 w-3.5" data-lucide="badge-check"></i>
</span>
<span className="text-sm font-medium">Standard</span>
</button>
<button className="tier-btn group inline-flex items-center justify-center gap-2 rounded-xl px-3 py-3 border border-white/10 bg-transparent text-white/70 transition" data-tier="premium">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-fuchsia-500/20 text-fuchsia-300">
<i className="h-3.5 w-3.5" data-lucide="sparkles"></i>
</span>
<span className="text-sm font-medium">Premium</span>
</button>
</div>
</section>

<section className="rounded-2xl border border-white/10 bg-neutral-900/60 p-3">
<div className="flex items-center justify-between mb-2">
<h2 className="text-lg tracking-tight font-semibold">Duration</h2>
<span className="text-xs text-white/60" id="durationLabel">1 hour</span>
</div>
<div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
<button className="hr-btn px-3 py-2 rounded-xl border border-white/10 bg-white text-black text-sm font-medium" data-hour="1">1</button>
<button className="hr-btn px-3 py-2 rounded-xl border border-white/10 text-white/80 text-sm" data-hour="2">2</button>
<button className="hr-btn px-3 py-2 rounded-xl border border-white/10 text-white/80 text-sm" data-hour="3">3</button>
<button className="hr-btn px-3 py-2 rounded-xl border border-white/10 text-white/80 text-sm" data-hour="4">4</button>
<button className="hr-btn px-3 py-2 rounded-xl border border-white/10 text-white/80 text-sm" data-hour="5">5</button>
<button className="hr-btn px-3 py-2 rounded-xl border border-white/10 text-white/80 text-sm" data-hour="6">6</button>
<button className="hr-btn px-3 py-2 rounded-xl border border-white/10 text-white/80 text-sm" data-hour="12">12</button>
<button className="hr-btn px-3 py-2 rounded-xl border border-white/10 text-white/80 text-sm" data-hour="24">24</button>
</div>
<div className="mt-3 flex items-center justify-between rounded-xl bg-black/40 border border-white/5 p-2">
<div className="flex items-center gap-2">
<div className="rounded-lg bg-white/10 p-2"><i className="h-4 w-4" data-lucide="clock-8"></i></div>
<div>
<p className="text-xs text-white/60">Start</p>
<p className="text-sm font-medium" id="startTime">Now • 8:00 AM – 12:00 AM</p>
</div>
</div>
<button className="text-xs text-white/80 underline underline-offset-4">Schedule</button>
</div>
</section>

<section className="rounded-2xl border border-white/10 bg-neutral-900/60 p-3">
<div className="flex items-center justify-between mb-2">
<h2 className="text-lg tracking-tight font-semibold">Vehicle Plate</h2>
<button className="text-xs text-white/70 inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="scan-line"></i>
              Scan
            </button>
</div>
<div className="grid grid-cols-3 gap-2">
<div className="col-span-1">
<label className="text-xs text-white/60">Emirate</label>
<div className="mt-1 flex items-center rounded-xl border border-white/10 bg-black/50 p-2.5">
<img alt="" className="h-4 w-6 rounded-sm mr-2" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<span className="text-sm font-medium">DXB</span>
</div>
</div>
<div className="col-span-1">
<label className="text-xs text-white/60">Code</label>
<input className="mt-1 w-full rounded-xl border border-white/10 bg-black/50 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-white/20" id="plateCode" maxlength="3" value="AA"/>
</div>
<div className="col-span-1">
<label className="text-xs text-white/60">Number</label>
<input className="mt-1 w-full rounded-xl border border-white/10 bg-black/50 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-white/20" id="plateNumber" maxlength="6" value="73609"/>
</div>
</div>
</section>

<section className="rounded-2xl border border-white/10 bg-neutral-900/60 p-3">
<div className="flex items-center gap-2 mb-2">
<div className="rounded-lg bg-white/10 p-2"><i className="h-4 w-4" data-lucide="receipt"></i></div>
<h2 className="text-lg tracking-tight font-semibold">Summary</h2>
</div>
<div className="rounded-xl border border-white/5 bg-black/30 p-3 space-y-2">
<div className="flex justify-between text-sm">
<span className="text-white/70">Area</span>
<span className="font-medium" id="summaryTier">Standard</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-white/70">Hours</span>
<span className="font-medium" id="summaryHours">1</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-white/70">Rate</span>
<span className="font-medium" id="summaryRate">AED 2/hr</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-white/70">Messaging</span>
<span className="font-medium">AED <span id="smsFee">0.5</span></span>
</div>
<div className="border-t border-white/10 my-1"></div>
<div className="flex justify-between text-base tracking-tight font-semibold">
<span>Total</span>
<span>AED <span id="totalFee">2.5</span></span>
</div>
</div>
<p className="mt-3 text-[13px] text-white/60 leading-5">
            Timings: 8:00 AM – 12:00 AM. Please verify the confirmation message to ensure your parking is active and compliant with the zone rules.
          </p>
</section>
<div className="h-20"></div>
</main>

<div className="sticky bottom-0 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-transparent pt-2">
<div className="px-4 pb-4">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-white to-white/90 text-black px-4 py-4 text-base tracking-tight font-semibold shadow-[0_0_0_1px_rgba(255,255,255,0.15)] active:scale-[0.99] transition" id="continueBtn">
<i className="h-5 w-5" data-lucide="car"></i>
            Start Parking
          </button>
</div>

<nav className="px-4 pb-4">
<div className="grid grid-cols-4 gap-3 rounded-2xl border border-white/10 bg-neutral-900/70 p-2">
<button className="flex flex-col items-center gap-1 rounded-xl py-2 bg-white/10">
<i className="h-5 w-5" data-lucide="home"></i>
<span className="text-[11px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 rounded-xl py-2">
<i className="h-5 w-5 text-white/70" data-lucide="clock"></i>
<span className="text-[11px] text-white/70">History</span>
</button>
<button className="flex flex-col items-center gap-1 rounded-xl py-2">
<i className="h-5 w-5 text-white/70" data-lucide="credit-card"></i>
<span className="text-[11px] text-white/70">Wallet</span>
</button>
<button className="flex flex-col items-center gap-1 rounded-xl py-2">
<i className="h-5 w-5 text-white/70" data-lucide="ellipsis"></i>
<span className="text-[11px] text-white/70">More</span>
</button>
</div>
</nav>
</div>
</div>


    </>
  );
}
