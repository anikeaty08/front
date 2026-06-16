import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Mobile menu toggle
      document.getElementById('mobileMenuBtn').addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.toggle('hidden');
      });

      // Initialize icons
      lucide.createIcons();

      // Smooth scroll for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            e.preventDefault();
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });

      // Phone carousel: smooth snap + tab controls
      const appCarousel = document.getElementById('appCarousel');
      const screens = appCarousel ? Array.from(appCarousel.children) : [];

      function goToScreen(name) {
        if (!appCarousel) return;
        let index = 0;
        if (name === 'cards') index = 1;
        if (name === 'activity') index = 2;
        const target = screens[index];
        if (!target) return;
        target.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        appCarousel.dataset.activeScreen = name;
        updateScreenTabs(name);
        updateDots(index);
      }

      function updateScreenTabs(active) {
        document.querySelectorAll('button[data-screen]').forEach(btn => {
          const isActive = btn.dataset.screen === active;
          btn.classList.toggle('bg-slate-900/80', isActive);
          btn.classList.toggle('bg-slate-950/80', !isActive);
          btn.classList.toggle('border-slate-700/80', isActive);
          btn.classList.toggle('border-slate-800/80', !isActive);
          btn.classList.toggle('text-slate-100', isActive);
          btn.classList.toggle('text-slate-300', !isActive);
        });
      }

      function updateDots(index) {
        const dots = document.querySelectorAll('[data-app-dot]');
        dots.forEach((dot, i) => {
          dot.classList.toggle('w-4', i === index);
          dot.classList.toggle('bg-sky-400/90', i === index);
          dot.classList.toggle('w-1.5', i !== index);
          dot.classList.toggle('bg-slate-600', i !== index);
        });
      }

      document.querySelectorAll('button[data-screen]').forEach(btn => {
        btn.addEventListener('click', () => {
          goToScreen(btn.dataset.screen);
        });
      });

      // Allow small tab inside Home header to jump to cards on mobile
      document.querySelectorAll('[data-screen-target]').forEach(btn => {
        btn.addEventListener('click', () => {
          goToScreen(btn.dataset.screenTarget);
        });
      });

      if (appCarousel) {
        let scrollTimeout;
        appCarousel.addEventListener('scroll', () => {
          window.clearTimeout(scrollTimeout);
          scrollTimeout = window.setTimeout(() => {
            let nearestIndex = 0;
            let nearestDistance = Infinity;
            const containerRect = appCarousel.getBoundingClientRect();
            screens.forEach((screen, i) => {
              const rect = screen.getBoundingClientRect();
              const center = rect.left - containerRect.left + rect.width / 2;
              const distance = Math.abs(center - appCarousel.clientWidth / 2);
              if (distance < nearestDistance) {
                nearestDistance = distance;
                nearestIndex = i;
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="sticky top-0 z-50 bg-slate-950/70 border-slate-800/80 border-b backdrop-blur-xl">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<nav className="flex pt-4 pb-4 items-center justify-between">
<div className="opacity-0 animate-fade-in">
<a className="flex items-center gap-2 text-xl font-semibold tracking-tight font-space-grotesk" href="#" style={{}}>RYZE<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-sky-400 to-blue-500 text-slate-950 text-sm font-semibold">
                R
              </span><span className="hidden sm:inline text-xs font-medium text-sky-400/80 ml-1">
                ryzepay.io
              </span></a>
</div>
<div className="hidden md:flex items-center gap-8 opacity-0 animate-fade-in delay-200">
<a className="flex items-center gap-1 transition-colors hover:text-white text-sm text-slate-200/70 font-geist" href="#product">
  Product
  <svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
<a className="flex items-center gap-1 transition-colors hover:text-white text-sm text-slate-200/70 font-geist" href="#how-it-works">
              How it works
            </a>
<a className="text-sm transition-colors font-geist text-slate-200/70 hover:text-white" href="#developers" style={{}}>
              Developers
            </a>
<a className="text-sm transition-colors font-geist text-slate-200/70 hover:text-white" href="#pricing" style={{}}>
              Pricing
            </a>
</div>
<div className="flex items-center gap-3 opacity-0 animate-fade-in delay-300">
<a className="hidden sm:inline-block transition-colors hover:text-white text-sm text-slate-200/70 font-geist" href="#">
              Log in
            </a>
<a className="inline-flex items-center transition-all hover:bg-sky-400 shadow-sky-500/40 text-sm font-medium text-slate-950 font-geist bg-sky-500 border-sky-400/80 border rounded-lg pt-2 pr-4 pb-2 pl-4 shadow-sm" href="#">
              Get early access
            </a>
<button className="md:hidden p-2 rounded-lg transition-colors hover:bg-slate-800/70 border border-slate-700/60" id="mobileMenuBtn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>
<div className="md:hidden hidden flex-col gap-4 pb-6 border-t pt-4 border-slate-800/70" id="mobileMenu">
<a className="flex items-center gap-2 text-sm transition-colors font-geist text-slate-200/80 hover:text-white" href="#product" style={{}}>
<svg className="lucide lucide-layers w-4 h-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
            Product
          </a>
<a className="flex items-center gap-2 text-sm transition-colors font-geist text-slate-200/80 hover:text-white" href="#how-it-works" style={{}}>
<svg className="lucide lucide-workflow w-4 h-4" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
            How it works
          </a>
<a className="flex items-center gap-2 text-sm transition-colors font-geist text-slate-200/80 hover:text-white" href="#developers" style={{}}>
<svg className="lucide lucide-code w-4 h-4" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
            Developers
          </a>
<a className="flex items-center gap-2 text-sm transition-colors font-geist text-slate-200/80 hover:text-white" href="#pricing" style={{}}>
<svg className="lucide lucide-credit-card w-4 h-4" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
            Pricing
          </a>
<a className="text-sm transition-colors font-geist text-slate-200/80 hover:text-white" href="#" style={{}}>
            Log in
          </a>
</div>
</div>
</header>
<main className="">

<section className="relative isolate lg:pt-20 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9),#020617)] pt-8 overflow-hidden">
<div className="mx-auto max-w-5xl px-4 sm:px-6 pb-20 lg:pb-32 text-center lg:px-8 relative z-10">
<div className="animate-slide-up delay-400 opacity-0">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm mb-8 font-geist bg-slate-900/70 border-sky-500/30 text-sky-100/80" style={{}}>
<svg className="lucide lucide-sparkles w-4 h-4 text-sky-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              Top up crypto, spend anywhere with virtual cards
            </div>
</div>
<h1 className="sm:text-5xl lg:text-7xl leading-tight animate-slide-up delay-500 text-4xl font-semibold tracking-tight font-space-grotesk opacity-0">
            Turn your crypto into
            <br className="hidden sm:inline"/>
<span className="bg-clip-text text-transparent font-space-grotesk bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-sky-300 via-blue-400 to-sky-500" style={{}}>
              ready-to-swipe money
            </span>
</h1>
<p className="mt-8 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed opacity-0 animate-slide-up delay-600 font-geist text-slate-200/80" style={{}}>
            RYZE lets you top up with crypto, generate virtual debit cards in
            seconds, and pay IRL with Apple Pay, Google Pay, and subscriptions
            worldwide. No waiting. No friction.
          </p>
<div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-slide-up delay-700">
<a className="inline-flex items-center gap-2 transition-all transform hover:scale-105 hover:shadow-[0_0_40px_rgba(56,189,248,0.4)] text-base font-medium font-geist bg-gradient-to-r from-sky-500 via-blue-500 to-sky-400 rounded-lg pt-4 pr-8 pb-4 pl-8 text-slate-950 shadow-sm shadow-sky-500/60" href="#" style={{}}>
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              Get your first card in 60s
            </a>
<a className="inline-flex items-center gap-2 rounded-lg border px-8 py-4 text-base font-medium transition-all font-geist border-slate-700/80 hover:bg-slate-900/80 text-slate-100/90" href="#product" style={{}}>
<svg className="lucide lucide-play w-5 h-5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
              See how RYZE works
            </a>
</div>

<div className="relative mt-16 lg:mt-24 opacity-0 animate-scale-in delay-800">
<div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">

<div className="w-72 h-44 relative overflow-hidden bg-slate-900/80 rounded-2xl border border-sky-500/40 card-glow phone-card-3d phone-card-3d-secondary-left">
<div className="absolute inset-0 bg-gradient-to-br from-sky-500/25 via-slate-900/60 to-blue-500/20" style={{}}></div>
<button className="relative h-full flex flex-col pt-6 pr-6 pb-6 pl-6 justify-between w-full text-left ui-pressable">
<div className="flex justify-between items-start">
<div className="flex items-center gap-1">
<span className="text-xs font-space-grotesk tracking-[0.18em] uppercase text-sky-300/70">
                        RYZE
                      </span>
</div>
<svg className="lucide lucide-wifi w-6 h-6 text-sky-200/70" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
</div>
<div className="">
<p className="text-lg font-geist-mono tracking-wider" style={{}}>
                      •••• •••• •••• 4829
                    </p>
<div className="flex justify-between items-end mt-2">
<div>
<p className="text-xs font-geist text-slate-300/60" style={{}}>
                          BALANCE (USDC)
                        </p>
<p className="text-sm font-medium font-geist text-sky-100" style={{}}>
                          $3,420.15
                        </p>
</div>
<div className="text-right">
<p className="text-xs font-geist text-slate-300/60" style={{}}>
                          VIRTUAL • APPLE PAY
                        </p>
<p className="text-sm font-medium font-geist text-sky-200" style={{}}>
                          Instant top up
                        </p>
</div>
</div>
</div>
</button>
</div>

<div className="w-80 h-52 rounded-2xl relative overflow-hidden border border-sky-500/80 phone-card-3d phone-card-3d-main">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(191,219,254,0.45),transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.95),#020617)]" style={{}}></div>
<button className="relative p-7 h-full flex flex-col justify-between w-full text-left rounded-2xl phone-main-card phone-main-card-glow ui-pressable">
<div className="absolute -top-24 -left-10 h-40 w-40 rounded-full bg-sky-400/70 opacity-50 phone-abstract-blur pointer-events-none"></div>
<div className="absolute -bottom-24 -right-10 h-44 w-44 rounded-full bg-blue-500/80 opacity-60 phone-abstract-blur pointer-events-none"></div>
<div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_10%_0%,rgba(240,249,255,0.25),transparent_55%),radial-gradient(circle_at_90%_120%,rgba(59,130,246,0.45),transparent_60%)] opacity-90"></div>
<div className="relative flex justify-between items-start">
<div className="flex flex-col gap-1">
<span className="text-[11px] font-space-grotesk tracking-[0.24em] text-sky-50/90 uppercase">
                        RYZE VIRTUAL
                      </span>
<span className="text-[10px] font-geist text-sky-100/85">
                        TAP-READY • POWERED BY CRYPTO
                      </span>
</div>
<div className="flex items-center gap-2 text-slate-100/80">
<div className="h-8 w-8 rounded-full bg-slate-900/20 flex items-center justify-center border border-sky-100/40">
<svg className="lucide lucide-contactless w-4 h-4" data-lucide="contactless" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 8a6 6 0 0 1 6-6"></path><path d="M2 16a14 14 0 0 0 14-14"></path><path d="M2 12a10 10 0 0 0 10-10"></path></svg>
</div>
<div className="h-8 w-8 rounded-full bg-slate-900/20 flex items-center justify-center border border-sky-100/40">
<svg className="lucide lucide-smartphone-nfc w-4 h-4" data-lucide="smartphone-nfc" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="1" width="7" x="2" y="6"></rect><path d="M13 12h3"></path><path d="M13 12a3 3 0 0 1 0-6"></path><path d="M13 12a3 3 0 0 0 0 6"></path></svg>
</div>
</div>
</div>
<div className="relative mt-4">
<p className="text-2xl font-geist-mono tracking-[0.28em] text-slate-50">
                      •••• •••• •••• 7391
                    </p>
<div className="flex justify-between items-end mt-4">
<div>
<p className="text-[11px] font-geist text-sky-100/80" style={{}}>
                          EXPIRES
                        </p>
<p className="text-base font-medium font-geist text-slate-50" style={{}}>
                          12/27
                        </p>
</div>
<div className="text-right">
<p className="text-[11px] font-geist text-sky-100/80" style={{}}>
                          CARDHOLDER
                        </p>
<p className="text-base font-semibold font-geist text-slate-50" style={{}}>
                          Alex Morgan
                        </p>
</div>
</div>
</div>
</button>
</div>

<div className="w-72 h-44 rounded-2xl glass card-glow phone-card-3d phone-card-3d-secondary-right relative overflow-hidden border border-indigo-500/50">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 via-slate-900/70 to-sky-500/20"></div>
<button className="relative p-6 h-full flex flex-col justify-between w-full text-left ui-pressable">
<div className="flex justify-between items-start">
<div className="flex flex-col gap-1">
<span className="text-xs font-space-grotesk tracking-[0.18em] text-indigo-100/90 uppercase">
                        SUBS CARD
                      </span>
<span className="text-[10px] text-slate-300/70 font-geist">
                        NETFLIX • SPOTIFY • AI TOOLS
                      </span>
</div>
<svg className="lucide lucide-smartphone w-6 h-6 text-indigo-100/80" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<div className="">
<p className="text-lg font-geist-mono tracking-wider" style={{}}>
                      •••• •••• •••• 5067
                    </p>
<div className="flex justify-between items-end mt-2">
<div className="">
<p className="text-xs text-slate-300/70 font-geist" style={{}}>
                          LIMIT / MONTH
                        </p>
<p className="text-sm font-medium font-geist text-indigo-100" style={{}}>
                          $150.00
                        </p>
</div>
<div className="text-right">
<p className="text-xs font-geist text-slate-300/70" style={{}}>
                          STATUS
                        </p>
<p className="text-sm font-medium font-geist text-emerald-300" style={{}}>
                          Active • Auto-Renew
                        </p>
</div>
</div>
</div>
</button>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:40px_40px] opacity-60 pointer-events-none"></div>
</section>

<section className="relative py-20 lg:py-24 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),transparent_55%),#020617] border-y border-slate-800/70 overflow-hidden" id="waitlist">
<div className="absolute inset-0 opacity-40 pointer-events-none bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
<div className="sm:px-6 lg:px-8 z-10 max-w-5xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="text-center mb-10">
<p className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs mb-5 font-medium bg-slate-900/80 border-sky-500/40 text-sky-100/90 tracking-tight">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Launching January 2026 • Limited early access
            </p>
<h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4 font-semibold">
              Be first in line when RYZE goes live
            </h2>
<p className="sm:text-lg text-base font-medium text-slate-200/85 max-w-2xl mr-auto ml-auto">
              Join a small group of early users who get priority onboarding,
              boosted limits, and direct input into the product.
            </p>
</div>
<div className="grid lg:grid-cols-[1.2fr,1fr] gap-10 gap-x-10 gap-y-10 items-center">
<form className="glass sm:px-6 sm:py-6 text-center w-full max-w-xl border-sky-500/40 border rounded-2xl mr-auto ml-auto pt-5 pr-5 pb-5 pl-5 shadow-[0_0_60px_rgba(56,189,248,0.35)]">
<div className="flex flex-col sm:flex-row gap-3 items-stretch">
<input className="placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/80 focus:border-sky-500/80 text-sm text-slate-100 bg-slate-950/70 w-full border-slate-700/80 border rounded-lg pt-3 pr-4 pb-3 pl-4" placeholder="you@wallet.xyz" required="" style={{}} type="email"/>
<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 via-blue-500 to-sky-400 hover:from-sky-400 hover:via-sky-500 hover:to-sky-300 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(56,189,248,0.5)] transition-transform duration-150 hover:scale-[1.02]" type="submit">
                  Join waitlist
                  <svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</button>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left text-xs text-slate-300">
<div className="flex items-center gap-2">
<span className="h-6 w-6 rounded-full bg-slate-900/90 flex items-center justify-center">
<svg className="lucide lucide-zap w-3.5 h-3.5 text-sky-300" data-lucide="zap" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</span>
<span className="">60-second onboarding at launch</span>
</div>
<div className="flex items-center gap-2">
<span className="h-6 w-6 rounded-full bg-slate-900/90 flex items-center justify-center">
<svg className="lucide lucide-shield-check w-3.5 h-3.5 text-emerald-300" data-lucide="shield-check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</span>
<span className="">No spam, no sharing, ever</span>
</div>
<div className="flex items-center gap-2">
<span className="h-6 w-6 rounded-full bg-slate-900/90 flex items-center justify-center">
<svg className="lucide lucide-gift w-3.5 h-3.5 text-amber-300" data-lucide="gift" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
</span>
<span className="">Early-access perks &amp; higher limits</span>
</div>
</div>
</form>
<div className="space-y-4">
</div>
</div>
</div>
</section>

<section className="relative py-14 lg:py-18 bg-slate-950/70 border-y border-slate-800/70 hidden lg:block" id="how-it-works">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight mb-6 font-space-grotesk" style={{}}>
                From wallet to tap in three steps
              </h2>
<p className="text-lg mb-8 font-geist text-slate-200/80" style={{}}>
                RYZE abstracts away the complexity of crypto payments, so you
                can just top up, create a card, and start spending.
              </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="h-8 w-8 rounded-full bg-sky-500/20 border border-sky-500/60 flex items-center justify-center text-xs font-medium text-sky-200 font-geist">
                    1
                  </div>
<div>
<h3 className="text-base font-semibold mb-1 font-geist">
                      Top up with crypto
                    </h3>
<p className="text-sm font-geist text-slate-300/80">
                      Deposit USDC, USDT, or other supported assets directly
                      from your favorite wallet or exchange.
                    </p>
</div>
</div>
<div className="flex gap-4">
<div className="h-8 w-8 rounded-full bg-sky-500/20 border border-sky-500/60 flex items-center justify-center text-xs font-medium text-sky-200 font-geist">
                    2
                  </div>
<div>
<h3 className="text-base font-semibold mb-1 font-geist">
                      Generate a virtual card
                    </h3>
<p className="text-sm font-geist text-slate-300/80">
                      Create single-use or persistent cards, set limits and
                      rules, and assign them to wallets or subscriptions.
                    </p>
</div>
</div>
<div className="flex gap-4">
<div className="h-8 w-8 rounded-full bg-sky-500/20 border border-sky-500/60 flex items-center justify-center text-xs font-medium text-sky-200 font-geist">
                    3
                  </div>
<div>
<h3 className="text-base font-semibold mb-1 font-geist">
                      Add to Apple Pay / Google Pay
                    </h3>
<p className="text-sm font-geist text-slate-300/80">
                      Link to your mobile wallet and start tapping to pay in
                      stores, apps, or online—everywhere cards are accepted.
                    </p>
</div>
</div>
</div>
</div>
<div className="glass rounded-2xl p-6 sm:p-8">
<div className="flex items-center justify-between mb-6">
<div>
<p className="text-xs uppercase tracking-[0.18em] text-slate-400 font-space-grotesk">
                    Live activity
                  </p>
<p className="text-2xl mt-1 font-space-grotesk text-slate-50">
                    $1,248.32
                  </p>
<p className="text-xs text-slate-400 font-geist">
                    Spent this week
                  </p>
</div>
<div className="w-16 h-16 rounded-full bg-sky-500/15 border border-sky-500/40 flex items-center justify-center">
<svg className="lucide lucide-activity text-sky-300 w-7 h-7" data-lucide="activity" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-3">
<span className="h-8 w-8 rounded-full bg-slate-900/90 flex items-center justify-center text-[11px] font-medium text-slate-200 font-geist">
                      AP
                    </span>
<div>
<p className="font-geist text-slate-100 text-sm">
                        Apple Pay • Grocery
                      </p>
<p className="text-xs text-slate-400 font-geist">
                        Virtual Card • RYZE Wallet
                      </p>
</div>
</div>
<div className="text-right">
<p className="font-geist text-slate-100 text-sm">- $82.40</p>
<p className="text-xs text-emerald-300 font-geist">Approved</p>
</div>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-3">
<span className="h-8 w-8 rounded-full bg-slate-900/90 flex items-center justify-center text-[11px] font-medium text-slate-200 font-geist">
                      SP
                    </span>
<div>
<p className="font-geist text-slate-100 text-sm">
                        Spotify • Subscription
                      </p>
<p className="text-xs text-slate-400 font-geist">
                        Subs Card • Auto-renew
                      </p>
</div>
</div>
<div className="text-right">
<p className="font-geist text-slate-100 text-sm">- $12.99</p>
<p className="text-xs text-emerald-300 font-geist">Paid</p>
</div>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-3">
<span className="h-8 w-8 rounded-full bg-slate-900/90 flex items-center justify-center text-[11px] font-medium text-slate-200 font-geist">
                      NF
                    </span>
<div>
<p className="font-geist text-slate-100 text-sm">
                        Netflix • Subscription
                      </p>
<p className="text-xs text-slate-400 font-geist">
                        Subs Card • Limit reached
                      </p>
</div>
</div>
<div className="text-right">
<p className="font-geist text-slate-100 text-sm">- $18.99</p>
<p className="text-xs text-amber-300 font-geist">Card paused</p>
</div>
</div>
<div className="mt-6 flex items-center justify-between">
<p className="text-xs text-slate-400 font-geist">
                    Funded by USDC on Arbitrum • Live FX optimized
                  </p>
<button className="px-3 py-1.5 rounded-md border border-sky-500/40 text-[11px] font-geist text-sky-100/90 hover:bg-sky-500/10 transition-colors">
                    View details
                  </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 lg:py-20 bg-slate-950/80 border-y border-slate-800/80">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-10">
<p className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs mb-5 font-medium bg-slate-900/80 border-sky-500/40 text-sky-100/90 tracking-tight">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse"></span>
              RYZE mobile experience — tap through the app
            </p>
<h2 className="text-3xl sm:text-4xl tracking-tight mb-3 font-space-grotesk">
              Your RYZE control center, in your pocket
            </h2>
<p className="text-sm sm:text-base max-w-2xl mx-auto font-geist text-slate-300/85">
              Tap, swipe, and hold to preview how you’ll manage cards, top up
              crypto, set limits, and track every transaction in a few seconds.
            </p>
</div>
<div className="flex flex-col items-center gap-6">
<div className="relative w-[260px] sm:w-[280px] aspect-[9/19] rounded-[2.8rem] border border-sky-900/70 bg-gradient-to-br from-sky-950 via-slate-950 to-blue-950 shadow-[0_0_60px_rgba(15,23,42,0.95)] flex items-center justify-center overflow-hidden">

<div className="pointer-events-none absolute -inset-10 opacity-60">
<div className="absolute -top-16 left-1/2 -translate-x-1/2 h-28 w-40 rounded-full bg-sky-500/40 blur-3xl"></div>
<div className="absolute bottom-[-80px] right-[-40px] h-40 w-40 rounded-full bg-blue-500/35 blur-3xl"></div>
<div className="absolute top-1/2 -translate-y-1/2 -left-16 h-36 w-36 rounded-full bg-sky-300/25 blur-3xl"></div>
</div>

<div className="absolute inset-[8px] rounded-[2.2rem] bg-gradient-to-br from-sky-950/95 via-slate-950/95 to-blue-950/95 border border-sky-900/80 overflow-hidden">
<div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1 rounded-full bg-slate-900/90">
<span className="h-1.5 w-10 rounded-full bg-slate-700/80"></span>
<span className="h-2 w-2 rounded-full bg-slate-700/90"></span>
</div>

<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,64,175,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,64,175,0.38)_1px,transparent_1px)] bg-[size:26px_26px] opacity-40"></div>
<div className="absolute -top-16 right-[-20px] h-32 w-32 rounded-full bg-sky-500/25 blur-3xl"></div>
<div className="absolute bottom-[-30px] left-[-40px] h-40 w-40 rounded-[40%] bg-gradient-to-tr from-sky-500/25 via-blue-500/30 to-indigo-500/25 blur-3xl"></div>
</div>

<div aria-live="polite" className="absolute inset-5 pt-6 pb-4 px-4 flex overflow-x-auto snap-x snap-mandatory gap-4 hide-scrollbar" data-active-screen="home" id="appCarousel">

<div className="min-w-full snap-center shrink-0 flex flex-col justify-between transition-transform duration-300">
<div className="flex items-center justify-between mb-4">
<div className="ui-pressable rounded-lg px-2 py-1 bg-slate-900/60 border border-sky-900/80">
<p className="text-[11px] text-sky-200 font-geist">
                          RYZE Wallet
                        </p>
<p className="text-xl font-space-grotesk text-slate-50 tracking-tight">
                          $3,420.15
                        </p>
</div>
<div className="flex flex-col items-end gap-1">
<button className="px-2.5 py-1 rounded-full bg-sky-500/15 border border-sky-400/70 text-[10px] font-geist text-sky-50 flex items-center gap-1 ui-pressable">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                          Live
                        </button>
<button className="px-2 py-1 rounded-full bg-slate-900/90 border border-slate-700/70 text-[10px] font-geist text-slate-300 flex items-center gap-1 ui-pressable md:hidden" data-screen-target="cards" type="button">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                          Cards
                        </button>
</div>
</div>
<div className="space-y-3">
<button className="glass rounded-xl p-3 border border-sky-500/40 w-full text-left ui-pressable" type="button">
<div className="flex justify-between items-center mb-1">
<p className="text-[10px] text-sky-200 font-geist">
                            Primary virtual card
                          </p>
<span className="inline-flex items-center gap-1 text-[9px] text-sky-100">
                            Tap for details
                            <svg className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</span>
</div>
<p className="text-sm font-geist-mono tracking-wider text-slate-50">
                          •••• •••• •••• 7391
                        </p>
<div className="mt-2 flex items-center justify-between text-[10px] text-slate-100 font-geist">
<span className="inline-flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                            Apple Pay • Active
                          </span>
<span className="text-emerald-300">
                            $820.12 available
                          </span>
</div>
</button>
<div className="grid grid-cols-2 gap-2 text-[11px] font-geist">
<button className="rounded-lg bg-gradient-to-br from-sky-600/90 to-blue-500/90 border border-sky-300/70 px-2 py-2 flex flex-col items-start gap-1 text-slate-50 ui-pressable" data-screen="cards" type="button">
<span className="inline-flex items-center gap-1">
<svg className="lucide lucide-credit-card w-3.5 h-3.5" data-lucide="credit-card" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
                            New card
                          </span>
<span className="text-sky-100/90">60 seconds</span>
</button>
<button className="rounded-lg bg-slate-900/90 border border-slate-800/90 px-2 py-2 flex flex-col items-start gap-1 text-slate-50 ui-pressable" type="button">
<span className="inline-flex items-center gap-1">
<svg className="lucide lucide-arrow-up-circle w-3.5 h-3.5" data-lucide="arrow-up-circle" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m16 12-4-4-4 4"></path><path d="M12 16V8"></path></svg>
                            Top up
                          </span>
<span className="text-slate-400">USDC • USDT</span>
</button>
</div>
<div className="grid grid-cols-3 gap-2 text-[10px] font-geist mt-2">
<button className="rounded-lg bg-slate-900/95 border border-slate-800/90 px-2 py-2 flex flex-col items-start gap-0.5 ui-pressable" type="button">
<span className="text-slate-300 inline-flex items-center gap-1">
                            Analytics
                          </span>
<span className="text-slate-500">Today / Week</span>
</button>
<button className="rounded-lg bg-slate-900/95 border border-slate-800/90 px-2 py-2 flex flex-col items-start gap-0.5 ui-pressable" type="button">
<span className="text-slate-300 inline-flex items-center gap-1">
                            Wallet
                          </span>
<span className="text-slate-500">Crypto &amp; fiat</span>
</button>
<button className="rounded-lg bg-slate-900/95 border border-slate-800/90 px-2 py-2 flex flex-col items-start gap-0.5 ui-pressable" data-screen="cards" type="button">
<span className="text-slate-300 inline-flex items-center gap-1">
                            RYZE Card
                          </span>
<span className="text-slate-500">Manage</span>
</button>
</div>
</div>
<div className="mt-4 space-y-1.5 text-[11px] font-geist text-slate-400">
<button className="w-full flex items-center justify-between ui-pressable rounded-lg px-2 py-1 bg-slate-900/60 border border-slate-800/80" data-screen="activity" type="button">
<span>Apple Pay • Grocery</span>
<span className="text-slate-200">- $24.80</span>
</button>
<button className="w-full flex items-center justify-between ui-pressable rounded-lg px-2 py-1 bg-slate-900/60 border border-slate-800/80" data-screen="activity" type="button">
<span>Spotify • Subs card</span>
<span className="text-slate-200">- $12.99</span>
</button>
</div>
</div>

<div className="min-w-full snap shrink-0 flex flex-col justify-between transition-transform duration-300">
<div className="flex items-center justify-between mb-4">
<p className="text-[11px] text-slate-200 font-geist">
                        Card controls
                      </p>
<button className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-900/80 border border-slate-700/80 text-[10px] text-sky-200 font-geist ui-pressable" type="button">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                        Swipe to manage
                      </button>
</div>
<button className="glass rounded-xl p-3 border border-sky-500/40 mb-3 w-full text-left ui-pressable" type="button">
<div className="flex items-center justify-between mb-2">
<p className="text-[11px] text-slate-200 font-geist">
                          Subs Card • AI Tools
                        </p>
<span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-[10px] text-emerald-300 font-geist">
                          Active
                        </span>
</div>
<p className="text-sm font-geist-mono tracking-wider text-slate-50 mb-2">
                        •••• •••• •••• 5067
                      </p>
<div className="grid grid-cols-3 gap-2 text-[10px] font-geist text-slate-300">
<div className="rounded-lg bg-slate-900/90 border border-slate-800/90 px-2 py-1.5 flex flex-col gap-0.5">
<span className="text-slate-400">Limit</span>
<span className="text-slate-100">$150 / mo</span>
</div>
<div className="rounded-lg bg-slate-900/90 border border-slate-800/90 px-2 py-1.5 flex flex-col gap-0.5">
<span className="text-slate-400">Spent</span>
<span className="text-amber-200">$132.40</span>
</div>
<div className="rounded-lg bg-slate-900/90 border border-slate-800/90 px-2 py-1.5 flex flex-col gap-0.5">
<span className="text-slate-400">Next reset</span>
<span className="text-slate-100">12 days</span>
</div>
</div>
</button>
<div className="space-y-2 text-[11px] font-geist">
<button className="w-full rounded-lg bg-slate-900/95 border border-slate-800/90 px-3 py-2 flex items-center justify-between text-slate-200 ui-pressable" type="button">
<span className="inline-flex items-center gap-1">
                          Freeze card
                        </span>
<span className="inline-flex items-center gap-1 text-[10px] text-emerald-300">
<span className="h-3 w-5 rounded-full bg-slate-800 flex items-center px-0.5">
<span className="h-2.5 w-2.5 rounded-full bg-emerald-400 translate-x-[6px] transition-transform"></span>
</span>
                          On
                        </span>
</button>
<button className="w-full rounded-lg bg-slate-900/95 border border-slate-800/90 px-3 py-2 flex items-center justify-between text-slate-200 ui-pressable" type="button">
<span>Spending limits</span>
<span className="text-slate-500">$500 / day</span>
</button>
<button className="w-full rounded-lg bg-slate-900/95 border border-slate-800/90 px-3 py-2 flex items-center justify-between text-slate-200 ui-pressable" type="button">
<span>PIN &amp; CVV</span>
<span className="text-sky-300">Tap to reveal</span>
</button>
</div>
</div>

<div className="min-w-full snap-center shrink-0 flex flex-col justify-between transition-transform duration-300">
<div className="flex items-center justify-between mb-4">
<div className="ui-pressable rounded-lg px-2 py-1 bg-slate-900/60 border border-slate-800/80">
<p className="text-[11px] text-slate-400 font-geist">
                          Today
                        </p>
<p className="text-sm font-space-grotesk text-slate-50 tracking-tight">
                          Activity
                        </p>
</div>
<button className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-900/80 border border-slate-700/80 text-[10px] text-slate-300 font-geist ui-pressable" type="button">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                        Swipe for history
                      </button>
</div>
<div className="space-y-2 text-[11px] font-geist">
<button className="flex items-center justify-between rounded-lg bg-slate-900/95 border border-slate-800/90 px-3 py-2 w-full ui-pressable" type="button">
<div>
<p className="text-slate-100">Apple Pay • Coffee</p>
<p className="text-slate-500">
                            Virtual card • RYZE Wallet
                          </p>
</div>
<div className="text-right">
<p className="text-slate-100">- $4.60</p>
<p className="text-emerald-300">Approved</p>
</div>
</button>
<button className="flex items-center justify-between rounded-lg bg-slate-900/95 border border-slate-800/90 px-3 py-2 w-full ui-pressable" type="button">
<div>
<p className="text-slate-100">Netflix • Subscription</p>
<p className="text-slate-500">
                            Subs Card • Limit reached
                          </p>
</div>
<div className="text-right">
<p className="text-slate-100">- $18.99</p>
<p className="text-amber-300">Card paused</p>
</div>
</button>
<button className="flex items-center justify-between rounded-lg bg-slate-900/95 border border-slate-800/90 px-3 py-2 w-full ui-pressable" type="button">
<div>
<p className="text-slate-100">Top up • USDC</p>
<p className="text-slate-500">Arbitrum • Smart routing</p>
</div>
<div className="text-right">
<p className="text-emerald-300">+ $500.00</p>
<p className="text-slate-400">Confirmed</p>
</div>
</button>
<button className="w-full mt-3 rounded-lg bg-gradient-to-r from-sky-500/90 to-blue-500/90 text-slate-950 text-[11px] font-geist py-2 px-3 flex items-center justify-center gap-1 ui-pressable" type="button">
<span>View full analytics</span>
</button>
</div>
<div className="mt-3 flex items-center justify-between text-[10px] text-slate-500 font-geist">
<span>Swipe left or right to explore more</span>
<span className="flex -space-x-1.5">
<span className="h-1.5 w-4 rounded-full bg-sky-400" data-app-dot="0"></span>
<span className="h-1.5 w-1.5 rounded-full bg-slate-600" data-app-dot="1"></span>
<span className="h-1.5 w-1.5 rounded-full bg-slate-600" data-app-dot="2"></span>
</span>
</div>
</div>
</div>

<div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
<span className="h-1.5 rounded-full w-4 bg-sky-400/90" data-app-dot="0"></span>
<span className="h-1.5 rounded-full w-1.5 bg-slate-600" data-app-dot="1"></span>
<span className="h-1.5 w-1.5 rounded-full bg-slate-600" data-app-dot="2"></span>
</div>
</div>
</div>
<p className="text-[11px] sm:text-xs text-slate-500 font-geist text-center max-w-sm">
              Every card, tile, and row inside the phone is clickable or
              swipeable, giving a realistic feel of how the app will actually
              behave on-device.
            </p>
<div className="mt-2 flex items-center justify-center gap-2 text-[11px] sm:text-xs font-geist text-slate-400">
<button className="px-3 py-1.5 rounded-full border text-[11px] sm:text-xs flex items-center gap-1 active:scale-95 transition-all bg-slate-900/80 border-slate-700/80 text-slate-100 ui-pressable" data-screen="home" type="button">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                Home
              </button>
<button className="text-[11px] sm:text-xs active:scale-95 transition-all border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 bg-slate-950/80 border-slate-800/80 text-slate-300 ui-pressable" data-screen="cards" type="button">
                Ryze Card
              </button>
<button className="px-3 py-1.5 rounded-full border border-slate-800/80 bg-slate-950/80 text-slate-300 text-[11px] sm:text-xs active:scale-95 transition-all ui-pressable" data-screen="activity" type="button">
                Activity
              </button>
</div>
</div>
</div>
</section>

<section className="relative py-14 lg:py-18 bg-slate-950/90 border-y border-slate-800/80">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-8 lg:grid-cols-2 items-start">
<div className="space-y-4">
<p className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-medium bg-slate-900/80 border-sky-500/40 text-sky-100/90 tracking-tight">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Onboarding &amp; security
              </p>
<h2 className="text-2xl sm:text-3xl tracking-tight font-space-grotesk">
                Smooth, secure onboarding flows
              </h2>
<ul className="space-y-2 text-sm font-geist text-slate-300/85">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                  Email + password signup
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                  Biometric login (Face ID / Touch ID)
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                  Device verification &amp; security alerts
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                  Guided KYC flow (ID, selfie, proof of address)
                </li>
</ul>
</div>
<div className="space-y-4">
<p className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-medium bg-slate-900/80 border-sky-500/40 text-sky-100/90 tracking-tight">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                Designed for clarity
              </p>
<ul className="space-y-2 text-sm font-geist text-slate-300/85">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                  Unified home dashboard with crypto + fiat balances
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                  Quick actions: send, convert, add funds
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                  Conversion engine with live rates &amp; transparent fees
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                  Sub-accounts for savings, travel, and trading
                </li>
</ul>
</div>
</div>
</div>
</section>
<section className="lg:pb-20 pt-14 pb-16 relative" id="developers">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
<div className="lg:col-span-2">
<div className="glass rounded-2xl p-8 lg:p-12">
<div className="flex items-center gap-2 mb-6">
<div className="flex items-center gap-1 text-amber-300">
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-xs font-geist tracking-tight text-amber-200/90">
                      Loved by crypto-native teams
                    </span>
</div>
<span className="text-xs font-geist text-slate-400" style={{}}>
                    Developer-first APIs &amp; dashboards
                  </span>
</div>
<h3 className="text-2xl lg:text-3xl mb-6 leading-tight font-space-grotesk" style={{}}>
                  "RYZE is the missing piece between our treasury and our users"
                </h3>
<p className="text-lg leading-relaxed mb-8 font-geist text-slate-200/85" style={{}}>
                  We plugged RYZE into our backend in a weekend. Now we can
                  issue virtual cards on demand, settle in stablecoins, and let
                  users spend crypto in the real world without touching banking
                  rails. Our support tickets for payments dropped by 60%.
                </p>
<div className="flex items-center gap-4">
<img alt="Marcus Johnson" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=320&amp;q=80"/>
<div className="">
<p className="font-medium font-geist" style={{}}>
                      Marcus Johnson
                    </p>
<p className="text-sm font-geist text-slate-400" style={{}}>
                      CTO at LayerZero Labs
                    </p>
</div>
</div>
</div>
</div>
<div className="space-y-8" id="pricing">
</div>
</div>
</div>
</section>
</main>
<footer className="relative mt-24 border-t border-slate-800/80 bg-slate-950/80">
<div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="">
<h4 className="font-semibold mb-4 font-geist text-slate-100" style={{}}>
              Product
            </h4>
<div className="space-y-3">
<a className="block text-sm transition-colors font-geist text-slate-400 hover:text-slate-100" href="#product" style={{}}>
                Virtual cards
              </a>
<a className="block text-sm transition-colors font-geist text-slate-400 hover:text-slate-100" href="#product" style={{}}>
                Crypto top ups
              </a>
<a className="block text-sm transition-colors font-geist text-slate-400 hover:text-slate-100" href="#product" style={{}}>
                Subscriptions
              </a>
<a className="block text-sm transition-colors font-geist text-slate-400 hover:text-slate-100" href="#product" style={{}}>
                Wallet integration
              </a>
</div>
</div>
<div className="">
<h4 className="font-semibold mb-4 font-geist text-slate-100" style={{}}>
              Developers
            </h4>
<div className="space-y-3">
<a className="block text-sm transition-colors font-geist text-slate-400 hover:text-slate-100" href="#developers" style={{}}>
                API docs
              </a>
<a className="block text-sm transition-colors font-geist text-slate-400 hover:text-slate-100" href="#developers" style={{}}>
                SDKs
              </a>
<a className="block text-sm transition-colors font-geist text-slate-400 hover:text-slate-100" href="#developers" style={{}}>
                Webhooks
              </a>
<a className="block text-sm transition-colors font-geist text-slate-400 hover:text-slate-100" href="#developers" style={{}}>
                Sandbox
              </a>
</div>
</div>
<div className="">
<h4 className="font-semibold mb-4 font-geist text-slate-100" style={{}}>
              Company
            </h4>
<div className="space-y-3">
<a className="block text-sm transition-colors font-geist text-slate-400 hover:text-slate-100" href="#" style={{}}>
                About
              </a>
<a className="block text-sm transition-colors font-geist text-slate-400 hover:text-slate-100" href="#" style={{}}>
                Careers
              </a>
<a className="block text-sm transition-colors font-geist text-slate-400 hover:text-slate-100" href="#" style={{}}>
                Blog
              </a>
<a className="block text-sm transition-colors font-geist text-slate-400 hover:text-slate-100" href="#" style={{}}>
                Press
              </a>
</div>
</div>
<div>
<h4 className="font-semibold mb-4 font-geist text-slate-100" style={{}}>
              Support
            </h4>
<div className="space-y-3">
<a className="block text-sm transition-colors font-geist text-slate-400 hover:text-slate-100" href="#" style={{}}>
                Help Center
              </a>
<a className="block text-sm transition-colors font-geist text-slate-400 hover:text-slate-100" href="#" style={{}}>
                Contact
              </a>
<a className="block text-sm transition-colors font-geist text-slate-400 hover:text-slate-100" href="#" style={{}}>
                Status
              </a>
<a className="block text-sm transition-colors font-geist text-slate-400 hover:text-slate-100" href="#" style={{}}>
                Security
              </a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pt-8 border-t border-slate-800/80">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-sky-500 to-blue-500 text-slate-950 text-xs font-semibold font-space-grotesk">
              R
            </span>
<span className="font-semibold font-space-grotesk tracking-tight text-slate-100" style={{}}>
              RYZE
            </span>
<span className="text-xs text-slate-500 ml-1 font-geist">
              ryzepay.io
            </span>
</div>
<p className="text-sm font-geist text-slate-500" style={{}}>
            © 2024 RYZE Labs. All rights reserved.
          </p>
<div className="flex items-center gap-6">
<a className="transition-colors text-slate-500 hover:text-sky-300" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="transition-colors text-slate-500 hover:text-sky-300" href="#">
<svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="transition-colors text-slate-500 hover:text-sky-300" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
<p className="text-xs font-geist text-slate-500 md:text-right md:ml-6">
            Public launch planned for January 2026 • Join the waitlist above to
            be notified.
          </p>
</div>
</div>
</footer>

    </>
  );
}
