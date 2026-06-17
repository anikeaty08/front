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
      
    /* ---------------- Icons ---------------- */
    lucide.createIcons();

    /* ---------------- Theme Switcher ---------------- */
    const themeToggle = document.getElementById('themeToggle');
    const root       = document.documentElement;
    if (localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      root.classList.add('dark');
    }
    themeToggle.addEventListener('click', () => {
      root.classList.toggle('dark');
      localStorage.theme = root.classList.contains('dark') ? 'dark' : 'light';
      lucide.createIcons();
    });

    /* ---------------- Vanilla Tilt (cards) ---------------- */
    document.querySelectorAll('.tilt-card').forEach(el => {
      VanillaTilt.init(el, {max: 8, speed: 400, glare: true, 'max-glare': 0.15});
    });

    /* ---------------- Ripple effect for buttons ---------------- */
    document.querySelectorAll('button').forEach(btn=>{
      btn.addEventListener('click', e=>{
        const circle = document.createElement('span');
        const diameter = Math.max(btn.clientWidth, btn.clientHeight);
        circle.style.width  = circle.style.height = `${diameter}px`;
        circle.style.left   = `${e.clientX - btn.getBoundingClientRect().left - diameter/2}px`;
        circle.style.top    = `${e.clientY - btn.getBoundingClientRect().top  - diameter/2}px`;
        circle.classList.add('absolute','rounded-full','bg-white/40','animate-ping','pointer-events-none');
        btn.style.position = 'relative';
        btn.appendChild(circle);
        setTimeout(()=>circle.remove(),600);
      });
    });

    /* ---------------- Confetti on CTA ---------------- */
    document.getElementById('confettiBtn').addEventListener('click', ()=> {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    });

    /* ---------------- Chart.js ---------------- */
    const ctx = document.getElementById('statsChart').getContext('2d');
    new Chart(ctx,{
      type:'line',
      data:{
        labels:['Jan','Feb','Mar','Apr','May','Jun'],
        datasets:[{
          label:'Training Load',
          data:[40,48,52,45,60,70],
          borderColor:'#6366F1',
          backgroundColor:'rgba(99,102,241,.15)',
          tension:.4,
          fill:true
        }]
      },
      options:{
        responsive:true,
        maintainAspectRatio:false,
        plugins:{legend:{display:false}},
        scales:{
          x:{ticks:{color:'#9CA3AF'},grid:{color:'rgba(0,0,0,.05)'}},
          y:{ticks:{color:'#9CA3AF'},grid:{color:'rgba(0,0,0,.05)'}}
        }
      }
    });

    /* ---------------- Scroll-Reveal Animations ---------------- */
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries)=> {
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('opacity-100','translate-y-0','translate-x-0','scale-100');
          observer.unobserve(entry.target);
        }
      });
    },{threshold:0.12});
    revealEls.forEach(el=>{
      el.classList.add('opacity-0','translate-y-8','scale-95','transition-all','duration-700','ease-out');
      observer.observe(el);
    });

    /* ---------------- Nav link hover underline ---------------- */
    document.querySelectorAll('.nav-link').forEach(a=>{
      a.classList.add('relative','after:absolute','after:h-[2px]','after:bg-indigo-600','after:w-0','after:-bottom-1','after:left-0','after:transition-all');
      a.addEventListener('mouseenter',()=>a.after.style.width='100%');
      a.addEventListener('mouseleave',()=>a.after.style.width='0');
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
      

<div className="pointer-events-none fixed -z-50 inset-0 overflow-hidden">
<div className="absolute w-96 h-96 top-[-6rem] left-[-6rem] rounded-full bg-indigo-500/10 blur-3xl animate-pulse"></div>
<div className="absolute w-80 h-80 bottom-[-4rem] right-[-4rem] rounded-full bg-fuchsia-500/10 blur-3xl animate-pulse"></div>
</div>

<header className="sticky top-0 z-50 backdrop-blur px-6 lg:px-24">
<nav className="flex items-center justify-between py-4 border-b border-neutral-200 dark:border-neutral-800">
<a className="flex items-center gap-2" href="#">
<i className="w-6 h-6 text-indigo-600 dark:text-indigo-500" data-lucide="shield"></i>
<span className="text-lg font-semibold tracking-tight">SquadKeepers</span>
</a>
<ul className="hidden md:flex items-center gap-8 text-sm">
<li><a className="nav-link" href="#features">Features</a></li>
<li><a className="nav-link" href="#analytics">Analytics</a></li>
<li><a className="nav-link" href="#pricing">Pricing</a></li>
<li><a className="nav-link" href="#contact">Contact</a></li>
</ul>
<div className="flex items-center gap-3">

<button aria-label="Toggle theme" className="p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors" id="themeToggle">
<i className="w-5 h-5 hidden dark:inline" data-lucide="sun"></i>
<i className="w-5 h-5 inline dark:hidden" data-lucide="moon"></i>
</button>
<button className="hidden md:inline-flex btn-outline">Log In</button>
<button className="btn-primary">Get Started</button>
</div>
</nav>
</header>

<section className="relative overflow-hidden pt-28 pb-36 px-6 lg:px-24">

<div className="pointer-events-none absolute inset-0 -z-10">
<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" src="https://images.unsplash.com/photo-1527761939622-9119094630cf?w=1600&amp;q=80&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/90 to-white dark:from-neutral-900/95 dark:via-neutral-950/95 dark:to-neutral-950"></div>
</div>
<div className="max-w-4xl mx-auto text-center relative">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-sky-500 bg-clip-text text-transparent animate-gradient">
        Keep Your Squad in Sync
      </h1>
<p className="max-w-xl mx-auto text-neutral-600 dark:text-neutral-400 mb-10">
        One platform to manage rosters, schedules and real-time performance analytics—built for modern teams.
      </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="btn-primary flex-shrink-0 animate-bounce-slow">
          Get Started <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="btn-outline flex-shrink-0">
<i className="w-4 h-4" data-lucide="play-circle"></i> Watch Demo
        </button>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-24 border-t border-neutral-200 dark:border-neutral-800" id="features">
<div className="max-w-3xl mx-auto text-center mb-16 reveal fade-up">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Everything You Need</h2>
<p className="text-neutral-600 dark:text-neutral-400">
        From roster management to in-depth statistics, we streamline every aspect of team coordination.
      </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

<div className="tilt-card reveal fade-up delay-100">
<i className="feature-icon" data-lucide="users"></i>
<h3 className="feature-title">Roster Control</h3>
<p className="feature-desc">Manage player profiles, positions and availability in one intuitive dashboard.</p>
</div>
<div className="tilt-card reveal fade-up delay-200">
<i className="feature-icon" data-lucide="calendar"></i>
<h3 className="feature-title">Smart Scheduling</h3>
<p className="feature-desc">Automated training and game schedules that sync with every device.</p>
</div>
<div className="tilt-card reveal fade-up delay-300">
<i className="feature-icon" data-lucide="activity"></i>
<h3 className="feature-title">Performance Metrics</h3>
<p className="feature-desc">Track on-field stats and get actionable insights to improve strategy.</p>
</div>
<div className="tilt-card reveal fade-up delay-400">
<i className="feature-icon" data-lucide="clock"></i>
<h3 className="feature-title">Real-Time Updates</h3>
<p className="feature-desc">Instant notifications for lineup changes, injuries or tactical tweaks.</p>
</div>
<div className="tilt-card reveal fade-up delay-500">
<i className="feature-icon" data-lucide="file-text"></i>
<h3 className="feature-title">Match Reports</h3>
<p className="feature-desc">Generate match summaries, heatmaps and player ratings in seconds.</p>
</div>
<div className="tilt-card reveal fade-up delay-600">
<i className="feature-icon" data-lucide="cloud"></i>
<h3 className="feature-title">Secure Cloud</h3>
<p className="feature-desc">All data encrypted and stored safely so nothing gets lost mid-season.</p>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-24 border-t border-neutral-200 dark:border-neutral-800" id="analytics">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal fade-right">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Data-Driven Decisions</h2>
<p className="text-neutral-600 dark:text-neutral-400 mb-8">
          Visualize player workload, attendance and performance trends in real time so coaches can focus on strategy, not spreadsheets.
        </p>
<ul className="space-y-4">
<li className="list-item"><i className="list-icon" data-lucide="check-circle"></i> Automated data collection from wearables and apps.</li>
<li className="list-item"><i className="list-icon" data-lucide="check-circle"></i> Custom dashboards for different staff members.</li>
<li className="list-item"><i className="list-icon" data-lucide="check-circle"></i> Export insights straight to PDF or CSV.</li>
</ul>
</div>
<div className="relative reveal fade-left">
<div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 bg-neutral-100/70 dark:bg-neutral-900/40 shadow-lg">
<div className="relative w-full h-72">
<canvas id="statsChart"></canvas>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-24 border-t border-neutral-200 dark:border-neutral-800" id="pricing">
<div className="max-w-3xl mx-auto text-center mb-16 reveal fade-up">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Simple Pricing</h2>
<p className="text-neutral-600 dark:text-neutral-400">No hidden fees. Upgrade or cancel anytime.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="pricing-card reveal fade-up delay-100">
<h3 className="pricing-title">Starter</h3>
<p className="pricing-price">$29<span className="pricing-period">/mo</span></p>
<ul className="pricing-list">
<li className="pricing-item">Up to 30 players</li>
<li className="pricing-item">Basic analytics</li>
<li className="pricing-item">Email support</li>
</ul>
<button className="btn-outline mt-auto w-full">Choose Plan</button>
</div>

<div className="pricing-card border-2 border-indigo-600 dark:border-indigo-500 relative shadow-xl reveal fade-up delay-200">
<div className="absolute -top-3 right-4 bg-indigo-600 dark:bg-indigo-500 px-3 py-1 rounded-full text-xs font-medium text-white">Popular</div>
<h3 className="pricing-title">Pro Club</h3>
<p className="pricing-price">$79<span className="pricing-period">/mo</span></p>
<ul className="pricing-list">
<li className="pricing-item">Unlimited players</li>
<li className="pricing-item">Advanced analytics</li>
<li className="pricing-item">Priority support</li>
</ul>
<button className="btn-primary mt-auto w-full">Choose Plan</button>
</div>

<div className="pricing-card reveal fade-up delay-300">
<h3 className="pricing-title">Elite</h3>
<p className="pricing-price">Custom</p>
<ul className="pricing-list">
<li className="pricing-item">Dedicated account manager</li>
<li className="pricing-item">On-site onboarding</li>
<li className="pricing-item">Custom integrations</li>
</ul>
<button className="btn-outline mt-auto w-full">Contact Sales</button>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-24 border-t border-neutral-200 dark:border-neutral-800">
<div className="max-w-4xl mx-auto text-center reveal fade-zoom">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Power Up Your Season</h2>
<p className="text-neutral-600 dark:text-neutral-400 mb-10">Join thousands of coaches already elevating their squads.</p>
<button className="btn-primary mx-auto" id="confettiBtn">
        Start Free Trial <i className="w-4 h-4" data-lucide="rocket"></i>
</button>
</div>
</section>

<footer className="py-16 px-6 lg:px-24 border-t border-neutral-200 dark:border-neutral-800" id="contact">
<div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-16">
<div className="col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<i className="w-6 h-6 text-indigo-600 dark:text-indigo-500" data-lucide="shield"></i>
<span className="text-lg font-semibold tracking-tight">SquadKeepers</span>
</a>
<p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Level up your club with unified squad-management tools built for performance and growth.
        </p>
</div>
<div>
<h4 className="footer-head">Product</h4>
<ul className="footer-list">
<li><a className="footer-link" href="#features">Features</a></li>
<li><a className="footer-link" href="#analytics">Analytics</a></li>
<li><a className="footer-link" href="#pricing">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="footer-head">Company</h4>
<ul className="footer-list">
<li><a className="footer-link" href="#">About Us</a></li>
<li><a className="footer-link" href="#">Careers</a></li>
<li><a className="footer-link" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-600">
<span>© 2024 SquadKeepers. All rights reserved.</span>
<div className="flex gap-4">
<a className="footer-link" href="#">Privacy</a>
<a className="footer-link" href="#">Terms</a>
<a className="footer-link" href="#">Status</a>
</div>
</div>
</footer>




<style>
    .btn-primary{ @apply inline-flex items-center gap-2 px-7 py-3 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 transition-colors text-sm font-medium rounded-md shadow text-white; }
    .btn-outline{ @apply inline-flex items-center gap-2 px-7 py-3 border border-neutral-300 dark:border-neutral-700 rounded-md hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-indigo-500 dark:hover:text-indigo-400 transition-all text-sm font-medium; }
    .feature-icon{ @apply w-8 h-8 text-indigo-600 dark:text-indigo-500 mb-4; }
    .feature-title{ @apply text-lg font-medium mb-2; }
    .feature-desc{ @apply text-sm text-neutral-600 dark:text-neutral-400; }
    .tilt-card{ @apply group border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 hover:border-indigo-600 dark:hover:border-indigo-500 transition-colors bg-white/60 dark:bg-neutral-900/40 backdrop-blur; }
    .pricing-card{ @apply flex flex-col border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 bg-white/60 dark:bg-neutral-900/40 backdrop-blur; }
    .pricing-title{ @apply text-lg font-medium mb-4; }
    .pricing-price{ @apply text-4xl font-semibold tracking-tight mb-6; }
    .pricing-period{ @apply text-base font-normal text-neutral-600 dark:text-neutral-400; }
    .pricing-list{ @apply space-y-3 mb-8 text-sm; }
    .pricing-item{ @apply flex items-center gap-2; }
    .pricing-item::before{ content:'✔'; @apply text-indigo-600 dark:text-indigo-500; }
    .footer-head{ @apply text-sm font-medium mb-3; }
    .footer-list{ @apply space-y-2 text-neutral-600 dark:text-neutral-400 text-sm; }
    .footer-link{ @apply hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors; }
    .list-item{ @apply flex items-start gap-3; }
    .list-icon{ @apply w-5 h-5 text-indigo-600 dark:text-indigo-500 mt-1; }
    /* Gradient text animation */
    @keyframes gradientShift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
    .animate-gradient{background-size:200% 200%;animation:gradientShift 6s ease infinite;}
    /* Slow bounce for main CTA */
    @keyframes bounce-slow{0%,100%{transform:translateY(-3%)}50%{transform:translateY(3%)}}
    .animate-bounce-slow{animation:bounce-slow 3s infinite;}
    /* Fade variants */
    .fade-up   {transform:translateY(2rem);}
    .fade-left {transform:translateX(2rem);}
    .fade-right{transform:translateX(-2rem);}
    .fade-zoom {transform:scale(.85);}
  </style>

    </>
  );
}
