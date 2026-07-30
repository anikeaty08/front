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
      
      // Icons
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();

        // Year
        const yr = document.getElementById('yr');
        if (yr) yr.textContent = new Date().getFullYear();

        // Modal handlers
        const modal = document.getElementById('joinModal');
        const openers = document.querySelectorAll('[data-open-join]');
        const closer = document.getElementById('closeJoin');
        const applyStateWrap = document.getElementById('applyStateWrap');
        const applyState = document.getElementById('applyState');

        function openModal(selectedState) {
          modal.classList.remove('hidden');
          if (selectedState) {
            applyStateWrap.classList.remove('hidden');
            applyState.value = selectedState;
          } else {
            applyStateWrap.classList.add('hidden');
            applyState.value = '';
          }
          setTimeout(() => lucide.createIcons(), 0);
        }
        function closeModal() {
          modal.classList.add('hidden');
        }
        openers.forEach(btn => btn.addEventListener('click', () => openModal(null)));
        if (closer) closer.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
          if (e.target === modal) closeModal();
        });

        // States Data
        const states = [
          "Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno",
          "Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","Gombe","Imo","Jigawa",
          "Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa","Niger",
          "Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara","FCT"
        ];

        // Example fixed remaining slots (0..100) to cover Open/Few/Full mix
        const remainingMap = {
          "Abia": 87, "Adamawa": 12, "Akwa Ibom": 0, "Anambra": 44, "Bauchi": 100,
          "Bayelsa": 5, "Benue": 73, "Borno": 21, "Cross River": 68, "Delta": 9,
          "Ebonyi": 0, "Edo": 34, "Ekiti": 57, "Enugu": 2, "Gombe": 80, "Imo": 29,
          "Jigawa": 0, "Kaduna": 66, "Kano": 18, "Katsina": 61, "Kebbi": 47,
          "Kogi": 0, "Kwara": 53, "Lagos": 14, "Nasarawa": 96, "Niger": 26,
          "Ogun": 0, "Ondo": 71, "Osun": 38, "Oyo": 7, "Plateau": 85, "Rivers": 3,
          "Sokoto": 64, "Taraba": 42, "Yobe": 0, "Zamfara": 51, "FCT": 23
        };

        const grid = document.getElementById('stateGrid');

        function statusFor(rem) {
          if (rem === 0) return { label: 'Full', color: 'bg-white/20', stateClass: 'opacity-60', joinDisabled: true };
          if (rem <= 30) return { label: 'Few Left', color: 'bg-amber-400/90', stateClass: '', joinDisabled: false };
          return { label: 'Open', color: 'bg-emerald-400/90', stateClass: '', joinDisabled: false };
        }

        states.forEach(name => {
          const remaining = remainingMap[name] ?? Math.max(0, 100 - Math.floor(Math.random()*101));
          const st = statusFor(remaining);

          const card = document.createElement('div');
          card.className = `glass state-card rounded-2xl p-5 border border-white/10 shadow-card transition-transform ${st.stateClass}`;

          card.innerHTML = `
            <div class="flex items-start justify-between gap-4">
              <div>
                <h4 class="text-lg font-medium tracking-tight">${name}</h4>
                <div class="mt-1 flex items-center gap-2 text-sm text-white/70">
                  <span class="status-dot ${st.color}"></span>
                  <span>${st.label}</span>
                </div>
              </div>
              <div class="text-right">
                <div class="text-xs text-white/60">Slots Remaining</div>
                <div class="text-xl font-semibold tracking-tight">${remaining}/100</div>
              </div>
            </div>
            <div class="mt-5 grid grid-cols-2 gap-3">
              <button ${st.joinDisabled ? 'disabled' : ''} class="px-3 py-2 rounded-lg text-sm font-medium tracking-tight ${st.joinDisabled ? 'bg-white/5 text-white/40 cursor-not-allowed' : 'btn-primary'}">Join Now</button>
              <a href="#book" class="glass px-3 py-2 rounded-lg text-sm text-center">Book a Meeting</a>
            </div>
          `;

          const joinBtn = card.querySelector('button');
          if (!st.joinDisabled) {
            joinBtn.addEventListener('click', () => openModal(name));
          }
          grid.appendChild(card);
        });

        // Form handling (demo)
        const form = document.getElementById('joinForm');
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const btn = form.querySelector('button[type="submit"], button:not([type])');
          btn.disabled = true;
          btn.textContent = 'Submitting...';
          setTimeout(() => {
            btn.textContent = 'Submitted ✓';
            setTimeout(() => {
              btn.disabled = false;
              btn.textContent = 'Submit Application';
              modal.classList.add('hidden');
              form.reset();
              applyState.value = '';
            }, 1000);
          }, 900);
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
      

<header className="relative z-20">
<div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl ring-glow flex items-center justify-center" style={{background: `radial-gradient(80% 80% at 30% 20%, rgba(0,229,255,0.25), rgba(124,92,255,0.15))`, border: `1px solid rgba(255,255,255,0.06)`}}>
<i className="w-5 h-5 text-cyan-300" data-lucide="shield"></i>
</div>
<span className="text-xl font-semibold tracking-tight">Finabox</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
<a className="hover:text-white transition-colors" href="#definition">Definition</a>
<a className="hover:text-white transition-colors" href="#responsibilities">Responsibilities</a>
<a className="hover:text-white transition-colors" href="#benefits">Benefits</a>
<a className="hover:text-white transition-colors" href="#governance">Governance</a>
<a className="hover:text-white transition-colors" href="#states">States</a>
</nav>
<div className="flex items-center gap-3">
<a className="glass px-4 py-2 rounded-lg text-sm text-white/90 hover:text-white transition-colors" href="#book">Book a Meeting</a>
<button className="btn-primary px-4 py-2 rounded-lg text-sm font-medium tracking-tight" data-open-join="">Join Now</button>
</div>
</div>
</header>

<section className="relative overflow-hidden">

<div className="absolute inset-0 grid-mask"></div>
<div aria-hidden="true" className="pointer-events-none">
<div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-30" style={{background: `radial-gradient(50% 50% at 50% 50%, rgba(0,229,255,0.9) 0%, rgba(0,229,255,0) 60%)`}}></div>
<div className="absolute -top-24 right-0 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-25" style={{background: `radial-gradient(50% 50% at 50% 50%, rgba(124,92,255,0.8) 0%, rgba(124,92,255,0) 60%)`}}></div>
</div>

<div className="absolute inset-x-0 top-0 h-[520px] hero-grid"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-12 md:pt-24 md:pb-20">
<div className="max-w-3xl">
<span className="badge px-3 py-1 rounded-full text-xs">New Program • 2025 Cohort</span>
<h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-gradient">
            Become a Certified Finabox Agent
          </h1>
<p className="mt-5 text-lg md:text-xl text-white/80 max-w-2xl">
            Redefine financial communication in your state and earn commissions while making banking more secure.
          </p>
<div className="mt-8 flex flex-wrap items-center gap-3">
<button className="btn-primary px-5 py-3 rounded-xl font-medium tracking-tight shadow-card" data-open-join="">
              Join Now
            </button>
<a className="glass px-5 py-3 rounded-xl text-white/90 hover:text-white font-medium tracking-tight" href="#book">
              Book a Meeting
            </a>
</div>
<div className="mt-10 flex items-center gap-6 text-sm text-white/60">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-cyan-300" data-lucide="badge-check"></i>
<span>Official Certification</span>
</div>
<div className="hidden sm:flex items-center gap-2">
<i className="w-4 h-4 text-violet-300" data-lucide="sparkles"></i>
<span>Blue/Cyan Security-Grade Stack</span>
</div>
</div>
</div>

<div className="mt-14 md:mt-24 grid md:grid-cols-2 gap-8 items-center">
<div className="order-2 md:order-1">
<div className="glass rounded-2xl p-6 shadow-card">
<div className="flex items-center gap-3 text-sm text-white/70">
<i className="w-4 h-4 text-cyan-300" data-lucide="activity"></i>
<span>Agent Performance Snapshot</span>
</div>
<div className="mt-5 grid grid-cols-3 gap-4">
<div className="glass rounded-xl p-4">
<div className="text-xs text-white/60">Registered Users</div>
<div className="mt-1 text-2xl font-semibold tracking-tight">1,284</div>
<div className="mt-1 text-xs text-emerald-300/90">+12% this week</div>
</div>
<div className="glass rounded-xl p-4">
<div className="text-xs text-white/60">Commission</div>
<div className="mt-1 text-2xl font-semibold tracking-tight">₦842k</div>
<div className="mt-1 text-xs text-emerald-300/90">+8% this week</div>
</div>
<div className="glass rounded-xl p-4">
<div className="text-xs text-white/60">Active States</div>
<div className="mt-1 text-2xl font-semibold tracking-tight">37</div>
<div className="mt-1 text-xs text-cyan-300/90">Nationwide</div>
</div>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<div className="relative">
<img alt="Abstract financial network" className="rounded-2xl ring-glow shadow-card object-cover w-full h-[360px]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="absolute inset-0 rounded-2xl" style={{background: `radial-gradient(60% 40% at 70% 20%, rgba(0,229,255,0.18), transparent 60%)`}}></div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="definition">
<div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
<div className="grid md:grid-cols-2 gap-10 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">What is a Finabox Agent?</h2>
<p className="mt-4 text-white/80 text-lg">
              Agents are certified Finabox partners who act as local representatives, onboarding users, providing support,
              and driving adoption in their state.
            </p>
<div className="mt-6 flex items-center gap-4">
<div className="badge px-3 py-1 rounded-full text-xs">Trusted Locally</div>
<div className="badge px-3 py-1 rounded-full text-xs">Audited Annually</div>
</div>
</div>
<div className="glass rounded-2xl p-6 shadow-card">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl flex items-center justify-center ring-glow" style={{background: `radial-gradient(60% 60% at 30% 20%, rgba(0,229,255,0.18), rgba(124,92,255,0.12))`, border: `1px solid rgba(255,255,255,0.06)`}}>
<i className="w-6 h-6 text-violet-300" data-lucide="users"></i>
</div>
<div className="flex-1">
<h3 className="font-semibold tracking-tight">Community & Connection</h3>
<p className="text-white/70 text-sm mt-1">
                  You become the trusted face of secure financial messaging—bridging banks, customers, and Finabox.
                </p>
<img alt="Community connection" className="mt-4 rounded-xl object-cover w-full h-40 ring-glow shadow-card" src="https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1600&auto=format&fit=crop" />
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="responsibilities">
<div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Core Responsibilities</h2>
<p className="mt-3 text-white/70 max-w-2xl">Operate with clarity, integrity, and measurable impact across your state.</p>
<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="glass rounded-2xl p-5 shadow-card">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-cyan-300" data-lucide="user-plus"></i>
<h3 className="font-medium tracking-tight">Onboard customers</h3>
</div>
<p className="text-sm text-white/70 mt-3">Register users, verify identities, and help them activate secure alerts.</p>
</div>
<div className="glass rounded-2xl p-5 shadow-card">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-violet-300" data-lucide="graduation-cap"></i>
<h3 className="font-medium tracking-tight">Educate communities</h3>
</div>
<p className="text-sm text-white/70 mt-3">Host meetups and share best practices for safer banking communication.</p>
</div>
<div className="glass rounded-2xl p-5 shadow-card">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-cyan-300" data-lucide="headphones"></i>
<h3 className="font-medium tracking-tight">Provide first-level support</h3>
</div>
<p className="text-sm text-white/70 mt-3">Resolve basic issues and escalate verified cases to Finabox.</p>
</div>
<div className="glass rounded-2xl p-5 shadow-card">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-violet-300" data-lucide="megaphone"></i>
<h3 className="font-medium tracking-tight">Act as ambassadors</h3>
</div>
<p className="text-sm text-white/70 mt-3">Represent Finabox with professionalism and brand consistency.</p>
</div>
</div>
</div>
</section>

<section className="relative" id="benefits">
<div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Agent Benefits</h2>
<p className="mt-3 text-white/70 max-w-2xl">Designed to reward performance and long-term impact.</p>
<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
<div className="glass rounded-2xl p-5 shadow-card">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-cyan-300" data-lucide="badge-check"></i>
<h3 className="font-medium tracking-tight">Official Finabox Certification</h3>
</div>
<p className="text-sm text-white/70 mt-2">Get verified status and digital credential.</p>
</div>
<div className="glass rounded-2xl p-5 shadow-card">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-violet-300" data-lucide="tickets"></i>
<h3 className="font-medium tracking-tight">100 Exclusive Slots per State</h3>
</div>
<p className="text-sm text-white/70 mt-2">Operate with territorial clarity and focus.</p>
</div>
<div className="glass rounded-2xl p-5 shadow-card">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-cyan-300" data-lucide="percent"></i>
<h3 className="font-medium tracking-tight">50% Commission Earnings</h3>
</div>
<p className="text-sm text-white/70 mt-2">Earn as you grow adoption in your state.</p>
</div>
<div className="glass rounded-2xl p-5 shadow-card">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-violet-300" data-lucide="wrench"></i>
<h3 className="font-medium tracking-tight">Training & Tools Provided</h3>
</div>
<p className="text-sm text-white/70 mt-2">Onboarding, playbooks, and outreach kits.</p>
</div>
<div className="glass rounded-2xl p-5 shadow-card">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-cyan-300" data-lucide="crown"></i>
<h3 className="font-medium tracking-tight">Free Finabox Premium</h3>
</div>
<p className="text-sm text-white/70 mt-2">Enjoy full product access for your operations.</p>
</div>
</div>
</div>
</section>

<section className="relative" id="governance">
<div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
<div className="glass rounded-2xl p-6 md:p-8 shadow-card flex flex-col md:flex-row items-start md:items-center gap-6">
<div className="w-14 h-14 rounded-2xl ring-glow flex items-center justify-center" style={{background: `radial-gradient(60% 60% at 40% 30%, rgba(0,229,255,0.18), rgba(124,92,255,0.12))`, border: `1px solid rgba(255,255,255,0.06)`}}>
<i className="w-7 h-7 text-cyan-300" data-lucide="shield-check"></i>
</div>
<div className="flex-1">
<h3 className="text-2xl font-semibold tracking-tight">Governance</h3>
<p className="mt-2 text-white/80">
              Agents follow a strict code of conduct, pay ₦20,000 annual license fee, and must renew annually based on compliance.
            </p>
</div>
<div className="flex items-center gap-3">
<a className="glass px-4 py-2 rounded-lg text-sm" href="#policy">View Policy</a>
<button className="btn-primary px-4 py-2 rounded-lg text-sm font-medium tracking-tight" data-open-join="">Apply</button>
</div>
</div>
</div>
</section>

<section className="relative" id="states">
<div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Choose Your State</h2>
<p className="mt-2 text-white/70">36 states + FCT. 100 slots each. Secure your position early.</p>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 text-sm text-white/70">
<span className="status-dot bg-emerald-400/90"></span> <span>Open</span>
</div>
<div className="flex items-center gap-2 text-sm text-white/70">
<span className="status-dot bg-amber-400/90"></span> <span>Few Left</span>
</div>
<div className="flex items-center gap-2 text-sm text-white/70">
<span className="status-dot bg-white/20"></span> <span>Full</span>
</div>
</div>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" id="stateGrid"></div>
</div>
</section>

<section className="relative" id="join">
<div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
<div className="grid md:grid-cols-2 gap-10 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Secure Your Slot Today</h2>
<p className="mt-3 text-white/80 text-lg">
              Fill a quick form to apply as a Finabox Agent in your state.
            </p>
<div className="mt-6 flex gap-3">
<button className="btn-primary px-5 py-3 rounded-xl font-medium tracking-tight" data-open-join="">Start Application</button>
<a className="glass px-5 py-3 rounded-xl" href="#book">Book a Meeting</a>
</div>
</div>
<div className="relative">
<img alt="Minimal gradient 3D" className="rounded-2xl ring-glow shadow-card w-full h-64 object-cover" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop" />
<div className="absolute inset-0 rounded-2xl" style={{background: `radial-gradient(70% 70% at 70% 30%, rgba(0,229,255,0.18), transparent 60%)`}}></div>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="max-w-6xl mx-auto px-6 pb-20">
<div className="glass rounded-2xl p-8 md:p-12 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight">Shape the Future of Financial Communication</h3>
<p className="mt-2 text-white/70">Lead with trust. Earn with impact.</p>
</div>
<button className="btn-primary px-6 py-3 rounded-xl font-medium tracking-tight" data-open-join="">Become an Agent</button>
</div>
</div>
</section>

<footer className="border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl ring-glow flex items-center justify-center" style={{background: `radial-gradient(80% 80% at 30% 20%, rgba(0,229,255,0.25), rgba(124,92,255,0.15))`, border: `1px solid rgba(255,255,255,0.06)`}}>
<i className="w-5 h-5 text-cyan-300" data-lucide="shield"></i>
</div>
<span className="text-sm text-white/70">© <span id="yr"></span> Finabox</span>
</div>
<div className="flex items-center gap-4 text-sm text-white/70" id="book">
<i className="w-4 h-4" data-lucide="calendar"></i>
<a className="hover:text-white" href="#">Schedule a meeting</a>
<span className="text-white/30">•</span>
<a className="hover:text-white" href="#">Support</a>
<span className="text-white/30">•</span>
<a className="hover:text-white" href="#">Privacy</a>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden" id="joinModal">
<div className="absolute inset-0 bg-black/60"></div>
<div className="relative max-w-lg mx-auto mt-24 md:mt-32 px-6">
<div className="glass rounded-2xl shadow-card p-6 md:p-7">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-2xl font-semibold tracking-tight">Apply as Finabox Agent</h3>
<p className="text-white/70 mt-1 text-sm">Quick form. We’ll review and get back within 3–5 business days.</p>
</div>
<button className="glass rounded-lg p-2" id="closeJoin">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<form className="mt-6 grid gap-4" id="joinForm">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="text-xs text-white/60">Full Name</label>
<input className="mt-1 w-full bg-transparent border border-white/10 rounded-lg px-3 py-2.5 focus:outline-none focus:border-cyan-400/60" placeholder="Jane Doe" required type="text" />
</div>
<div>
<label className="text-xs text-white/60">Phone</label>
<input className="mt-1 w-full bg-transparent border border-white/10 rounded-lg px-3 py-2.5 focus:outline-none focus:border-cyan-400/60" placeholder="+234 801 234 5678" required type="tel" />
</div>
</div>
<div>
<label className="text-xs text-white/60">Email</label>
<input className="mt-1 w-full bg-transparent border border-white/10 rounded-lg px-3 py-2.5 focus:outline-none focus:border-cyan-400/60" placeholder="you@example.com" required type="email" />
</div>
<div>
<label className="text-xs text-white/60">NIN</label>
<input className="mt-1 w-full bg-transparent border border-white/10 rounded-lg px-3 py-2.5 focus:outline-none focus:border-cyan-400/60" placeholder="12345678901" required type="text" />
</div>
<div className="hidden" id="applyStateWrap">
<label className="text-xs text-white/60">Applying for</label>
<input className="mt-1 w-full bg-transparent border border-white/10 rounded-lg px-3 py2.5 text-white/80" id="applyState" readOnly type="text" />
</div>
<button className="mt-2 btn-primary w-full py-3 rounded-xl font-medium tracking-tight">Submit Application</button>
<p className="text-xs text-white/50">By submitting, you agree to our policy and verification checks.</p>
</form>
</div>
</div>
</div>



    </>
  );
}
