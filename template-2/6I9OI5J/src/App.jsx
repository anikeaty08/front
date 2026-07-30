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

    (function () {
      const el = document.getElementById('day3Chart');
      if (!el) return;
      function makeChart() {
        if (!window.Chart) return;
        const ctx = el.getContext('2d');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Spec', 'Design', 'Build'],
            datasets: [{
              data: [20, 45, 70],
              borderColor: 'rgb(59,130,246)',
              backgroundColor: 'rgba(59,130,246,0.18)',
              pointBackgroundColor: 'rgb(59,130,246)',
              pointBorderColor: 'rgba(255,255,255,0.4)',
              borderWidth: 2,
              tension: 0.35,
              fill: true,
              pointRadius: 2.5
            }]
          },
          options: {
            responsive: true,
            plugins: { legend: { display: false }, tooltip: { enabled: true } },
            scales: {
              y: {
                beginAtZero: true,
                ticks: { color: '#9CA3AF', callback: (v)=> v + '%' },
                grid: { color: 'rgba(255,255,255,0.06)' },
                suggestedMax: 100
              },
              x: {
                ticks: { color: '#9CA3AF' },
                grid: { display: false }
              }
            }
          }
        });
      }
      if (window.Chart) {
        makeChart();
      } else {
        window.addEventListener('load', makeChart);
      }
    })();
  
}

{

      (function () {
        // Copy prompt
        const copyBtn = document.getElementById('day4-copy');
        copyBtn?.addEventListener('click', () => {
          const txt = document.getElementById('day4-prompt')?.textContent?.trim() || '';
          navigator.clipboard?.writeText(txt);
          copyBtn.classList.add('ring-blue-400');
          setTimeout(()=>copyBtn.classList.remove('ring-blue-400'), 700);
        });

        // Run demo
        const runBtn = document.getElementById('day4-run');
        runBtn?.addEventListener('click', () => {
          const issue = document.getElementById('day4-issue')?.value || '';
          const cost = document.getElementById('day4-cost')?.value || '';
          try {
            function formatSummary(input) {
              const issue = typeof input.issue === 'string' && input.issue.trim() ? input.issue.trim() : 'Unknown issue';
              const costNum = typeof input.cost === 'number' ? input.cost : Number(input.cost);
              const cost = Number.isFinite(costNum) ? costNum : 0;
              const tierHint = cost > 150 ? 'Consider Pro for detailed steps.' : 'Free plan covers basics.';
              return `Issue: ${issue} • Estimated cost: $${cost.toFixed(0)} — ${tierHint}`;
            }
            const out = formatSummary({ issue, cost });
            const el = document.getElementById('day4-output');
            if (el) {
              el.textContent = out;
              el.classList.remove('text-gray-300');
              el.classList.add('text-emerald-300');
            }
          } catch (e) {
            const el = document.getElementById('day4-output');
            if (el) {
              el.textContent = 'Error running demo.';
              el.classList.remove('text-emerald-300');
              el.classList.add('text-rose-300');
            }
          }
        });

        // Chart.js donut
        function makeDay4Chart() {
          if (!window.Chart) return;
          const el = document.getElementById('day4Chart');
          if (!el) return;
          const ctx = el.getContext('2d');
          new Chart(ctx, {
            type: 'doughnut',
            data: {
              labels: ['Free', 'Pro'],
              datasets: [{
                data: [65, 35],
                backgroundColor: ['rgba(148,163,184,0.6)','rgba(16,185,129,0.7)'],
                borderColor: ['rgba(148,163,184,0.2)','rgba(16,185,129,0.2)'],
                borderWidth: 1,
                hoverOffset: 4
              }]
            },
            options: {
              responsive: true,
              plugins: {
                legend: {
                  display: true,
                  labels: { color: '#9CA3AF', boxWidth: 10, padding: 12 }
                },
                tooltip: { enabled: true }
              },
              cutout: '62%'
            }
          });
        }
        if (window.Chart) {
          makeDay4Chart();
        } else {
          window.addEventListener('load', makeDay4Chart);
        }
      })();
    
}

{

      // Current year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Mobile nav toggle
      const navToggle = document.getElementById('nav-toggle');
      const mobilePanel = document.getElementById('mobile-panel');
      const overlay = mobilePanel?.querySelector('[data-close-overlay]');
      const openIcon = navToggle?.querySelector('[data-lucide="menu"]');
      const closeIcon = navToggle?.querySelector('[data-lucide="x"]');
      const mobileLinks = mobilePanel?.querySelectorAll('[data-mobile-link]') || [];

      function closeMobile() {
        mobilePanel.classList.remove('opacity-100','pointer-events-auto');
        mobilePanel.classList.add('opacity-0','pointer-events-none');
        navToggle.setAttribute('aria-expanded','false');
        openIcon?.classList.remove('hidden');
        closeIcon?.classList.add('hidden');
      }
      function openMobile() {
        mobilePanel.classList.remove('opacity-0','pointer-events-none');
        mobilePanel.classList.add('opacity-100','pointer-events-auto');
        navToggle.setAttribute('aria-expanded','true');
        openIcon?.classList.add('hidden');
        closeIcon?.classList.remove('hidden');
      }

      navToggle?.addEventListener('click', () => {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        expanded ? closeMobile() : openMobile();
      });
      overlay?.addEventListener('click', closeMobile);
      mobileLinks.forEach(link => link.addEventListener('click', closeMobile));

      // Smooth scroll for internal links
      document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
          const id = a.getAttribute('href');
          if (id.length > 1) {
            const target = document.querySelector(id);
            if (target) {
              e.preventDefault();
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              history.pushState(null, '', id);
            }
          }
        });
      });

      // Scroll progress bar
      const progress = document.getElementById('scroll-progress');
      function updateProgress() {
        const doc = document.documentElement;
        const scrollTop = window.scrollY || doc.scrollTop;
        const height = doc.scrollHeight - doc.clientHeight;
        const percent = height > 0 ? (scrollTop / height) * 100 : 0;
        progress.style.width = percent + '%';
      }
      window.addEventListener('scroll', updateProgress);
      window.addEventListener('resize', updateProgress);
      updateProgress();

      // Header show/hide on scroll
      const header = document.getElementById('site-header');
      let lastY = window.scrollY;
      function handleHeader() {
        const y = window.scrollY;
        if (y < 16) {
          header.classList.remove('-translate-y-full');
          return;
        }
        if (y > lastY + 4) {
          header.classList.add('-translate-y-full');
        } else if (y < lastY - 4) {
          header.classList.remove('-translate-y-full');
        }
        lastY = y;
      }
      window.addEventListener('scroll', handleHeader);
      // Reveal header on load
      requestAnimationFrame(() => header.classList.remove('-translate-y-full'));

      // Active nav link highlighting
      const sections = ['#why','#outcomes','#agenda','#apply','#faq'].map(id => document.querySelector(id)).filter(Boolean);
      const navLinks = Array.from(document.querySelectorAll('[data-nav-link]'));
      const byHref = (href) => navLinks.find(a => a.getAttribute('href') === href);
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const id = '#' + entry.target.id;
          const link = byHref(id);
          if (!link) return;
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            navLinks.forEach(l => l.classList.remove('text-white'));
            link.classList.add('text-white');
          }
        });
      }, { threshold: [0.5] });
      sections.forEach(s => observer.observe(s));

      // Initialize Lucide (optional, for any data-lucide icons)
      if (window.lucide?.createIcons) {
        window.lucide.createIcons();
      }
    
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/radialglass-20RYcJn9wbsEb5QEYkazHjpb" width="100%"></iframe></div>

<div className="fixed top-0 left-0 h-[2px] bg-gradient-to-r w-0 z-[60] from-blue-400 to-purple-400" id="scroll-progress" style={{width: `0%`}}></div>

<header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b transition-transform duration-300 will-change-transform bg-black/70 border-white/5 -translate-y-full" id="site-header">
<nav className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8">
<div className="h-full flex items-center justify-between">

<a className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md" href="#overview">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.06)] to-indigo-600">
<svg aria-hidden="true" className="w-[18px] h-[18px]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
<path></path>
</svg>
</span>
<span className="text-lg font-geist tracking-tighter" style={{fontFamily: `"Plus Jakarta Sans", Inter, sans-serif`}}>AI Product Sprint</span>
</a>

<div className="hidden md:flex items-center gap-1 rounded-full border px-2 border-white/10 bg-black/30">
<a className="px-3 py-2 text-sm transition font-geist tracking-tighter text-gray-300 hover:text-white text-white" data-nav-link="" href="#why" style={{}}>Why</a>
<a className="px-3 py-2 text-sm transition font-geist tracking-tighter text-gray-300 hover:text-white" data-nav-link="" href="#outcomes" style={{}}>Outcomes</a>
<a className="px-3 py-2 text-sm transition font-geist tracking-tighter text-gray-300 hover:text-white" data-nav-link="" href="#agenda" style={{}}>Agenda</a>
<a className="px-3 py-2 text-sm transition font-geist tracking-tighter text-gray-300 hover:text-white" data-nav-link="" href="#apply" style={{}}>Apply</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 font-geist tracking-tighter bg-gray-100 text-black hover:bg-gray-200" href="#apply" style={{}}>
              Join the Sprint
              <svg className="lucide lucide-rocket w-4 h-4" data-lucide="rocket" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
</a>
<button aria-controls="mobile-panel" aria-expanded="false" className="md:hidden p-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-900" id="nav-toggle">
<svg aria-hidden="true" className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
<svg aria-hidden="true" className="lucide lucide-x w-5 h-5 hidden" data-lucide="x" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-40 pointer-events-none opacity-0" id="mobile-panel">
<div className="absolute inset-0 bg-black/60" data-close-overlay=""></div>
<div className="absolute inset-x-0 top-0 p-3 transition-all">
<div className="rounded-2xl border backdrop-blur-xl shadow-2xl overflow-hidden border-white/10 bg-gray-950/95">
<div className="p-2">
<a className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-geist tracking-tighter hover:bg-white/5 text-white" data-mobile-link="" href="#why" style={{}}>
                Why
                <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</a>
<a className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-geist tracking-tighter hover:bg-white/5" data-mobile-link="" href="#outcomes" style={{}}>
                Outcomes
                <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</a>
<a className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-geist tracking-tighter hover:bg-white/5" data-mobile-link="" href="#agenda" style={{}}>
                Agenda
                <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</a>
<a className="mt-2 inline-flex w-full items-center justify-center gap-2 px-4 py-2 rounded-full text-sm transition-all font-geist tracking-tighter bg-blue-400 hover:bg-blue-300" data-mobile-link="" href="#apply" style={{}}>
                Join the Sprint
                <svg className="lucide lucide-rocket w-4 h-4" data-lucide="rocket" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
</a>
</div>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden sm:pt-28 pt-24 pb-16" id="overview">

<div className="absolute inset-0 -z-10">
<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_60%)]"></div>
<div className="absolute -bottom-40 right-1/3 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.14),transparent_60%)]"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-10">
<div className="flex-1 text-center lg:text-left">
<h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight font-semibold font-geist" style={{fontFamily: `"Plus Jakarta Sans", Inter, sans-serif`, fontWeight: `600`}}>
              The AI Product Sprint: Design, Build & Launch a Live App in 5 Days.
            </h1>
<p className="mt-6 text-lg max-w-2xl mx-auto lg:mx-0 font-geist tracking-tighter text-gray-300" style={{}}>
              Stop just <span className="font-geist tracking-tighter" style={{}}>using</span> AI and start <span className="font-geist tracking-tighter" style={{}}>building with it</span>. This is a live, hands-on sprint where I will guide you from a blank canvas to a deployed, AI-powered application. You will learn to leverage a full suite of AI tools for research, branding, design, and even code.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 font-geist tracking-tighter bg-blue-400 text-black hover:bg-blue-300" href="#apply" style={{}}>
                Join the Sprint
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</a>
<a className="inline-flex items-center gap-2 transition-all border rounded-full px-5 py-3 backdrop-blur-lg font-geist tracking-tighter hover:bg-white/10 text-gray-100 bg-white/5 border-white/10" href="#agenda" style={{}}>
                See the plan
                <svg className="lucide lucide-calendar-range w-4 h-4" data-lucide="calendar-range" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18"></rect><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>
</a>
</div>
<p className="mt-3 text-sm font-geist tracking-tighter text-gray-400" style={{}}>Limited spots. The next sprint begins [Date].</p>
</div>

<div className="flex-1 w-full">
<div className="relative w-full max-w-xl mx-auto">
<div className="relative overflow-hidden border rounded-2xl shadow-2xl backdrop-blur bg-gray-900/50 border-white/10">
<div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/40">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="lucide lucide-cpu w-4.5 h-4.5" data-lucide="cpu" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><rect height="16" rx="2" width="16"></rect><rect height="8" rx="1" width="8"></rect></svg>
</span>
<p className="text-sm font-geist tracking-tighter" style={{}}>AI Car Diagnostic App</p>
</div>
<span className="inline-flex items-center gap-1.5 ring-1 ring-emerald-400/20 text-xs text-emerald-300 tracking-tighter font-geist bg-emerald-400/10 rounded-md pt-1 pr-2 pb-1 pl-2" style={{}}>
<svg className="lucide lucide-cloud w-3.5 h-3.5" data-lucide="cloud" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `14px`, height: `14px`, color: `rgb(110, 231, 183)`}} viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><line></line></svg>
                    Live
                  </span>
</div>
<div className="p-4 grid sm:grid-cols-2 gap-4">
<div className="rounded-xl border p-4 border-white/10 bg-black/30">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md ring-1 bg-white/5 ring-white/10">
<svg className="lucide lucide-car w-4 h-4" data-lucide="car" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="7" cy="17"></circle><path></path><circle cx="17" cy="17"></circle></svg>
</span>
<p className="text-sm font-geist tracking-tighter" style={{}}>Describe your issue</p>
</div>
<div className="mt-3 rounded-lg border p-3 border-white/10 bg-white/5">
<p className="text-xs font-geist tracking-tighter text-gray-400" style={{}}>Prompt</p>
<p className="text-sm mt-1 font-geist tracking-tighter text-gray-100" style={{}}>“High‑pitched squeal when braking, worse in rain.”</p>
</div>
<button className="mt-3 inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-md transition font-geist tracking-tighter bg-blue-400 text-black hover:bg-blue-300" style={{}}>
                      Analyze
                      <svg className="lucide lucide-sparkles w-3.5 h-3.5" data-lucide="sparkles" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="4" cy="20"></circle></svg>
</button>
</div>
<div className="rounded-xl border p-4 border-white/10 bg-black/30">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md ring-1 bg-white/5 ring-white/10">
<svg className="lucide lucide-stethoscope w-4 h-4" data-lucide="stethoscope" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><circle cx="20" cy="10"></circle></svg>
</span>
<p className="text-sm font-geist tracking-tighter" style={{}}>AI diagnosis</p>
</div>
<ul className="mt-3 space-y-2 text-sm">
<li className="flex items-start gap-2 font-geist tracking-tighter" style={{}}>
<svg className="lucide lucide-check mt-0.5 w-4 h-4 text-emerald-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                        Likely brake wear indicator contacting rotor.
                      </li>
<li className="flex items-start gap-2 font-geist tracking-tighter" style={{}}>
<svg className="lucide lucide-check mt-0.5 w-4 h-4 text-emerald-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                        Risk: Low–Medium. Inspect pads and rotors.
                      </li>
<li className="flex items-start gap-2 font-geist tracking-tighter" style={{}}>
<svg className="lucide lucide-wrench mt-0.5 w-4 h-4 text-indigo-300" data-lucide="wrench" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                        DIY steps + shop estimate provided.
                      </li>
</ul>
</div>
</div>
</div>
<div className="absolute -inset-x-6 -bottom-6 -z-10 h-32 bg-gradient-to-t to-transparent from-black"></div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-950 pt-16 pb-16" id="why">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-8">
<div className="border-b border-white/10 pb-6">
<p className="text-sm uppercase font-geist tracking-tighter text-blue-300/90">The Game Has Changed</p>
<h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl tracking-tight font-semibold font-geist" style={{fontFamily: `"Plus Jakarta Sans", Inter, sans-serif`, fontWeight: `600`}}>
            Are You Building at the Speed of AI?
          </h2>
<p className="mt-4 font-geist tracking-tighter text-gray-300">
            The old way of building products is too slow. Long research cycles, waiting for designers, and depending on overloaded engineering teams means your best ideas never see the light of day. The AI revolution isn't just about chatbots; it's about a fundamental shift in how we create.
          </p>
</div>
<div className="mt-6 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
<img alt="Collaborative team building an AI product rapidly" className="w-full h-56 sm:h-72 lg:h-80 object-cover" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&q=80" />
</div>
</div>

<aside className="lg:col-span-4">
<div className="lg:h-full lg:border-l border-white/10 lg:pl-6">
<ul className="mt-6 text-sm text-gray-300 divide-y divide-white/10">
<li className="flex gap-3 tracking-tighter font-geist pt-4 pb-4 items-start">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-rose-500/10 ring-1 ring-rose-500/30 text-rose-300">
<svg className="lucide lucide-x-circle w-3.5 h-3.5" data-lucide="x-circle" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path><path></path></svg>
</span>
<div className="flex-1">
    You're a PM or designer with a vision, but you're tired of the hand-off process and want to build and iterate yourself.
  </div>
</li>
<li className="py-4 flex items-start gap-3 font-geist tracking-tighter">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-rose-500/10 ring-1 ring-rose-500/30 text-rose-300">
<svg className="lucide lucide-x-circle w-3.5 h-3.5" data-lucide="x-circle" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path><path></path></svg>
</span>
              You're a founder who needs to move at lightning speed, validating ideas and shipping an impressive MVP without a massive budget.
            </li>
<li className="py-4 flex items-start gap-3 font-geist tracking-tighter">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-rose-500/10 ring-1 ring-rose-500/30 text-rose-300">
<svg className="lucide lucide-x-circle w-3.5 h-3.5" data-lucide="x-circle" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path><path></path></svg>
</span>
              You're using tools like ChatGPT, but you know you're only scratching the surface of what's possible with AI in product development.
            </li>
<li className="py-4 flex items-start gap-3 font-geist tracking-tighter">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-rose-500/10 ring-1 ring-rose-500/30 text-rose-300">
<svg className="lucide lucide-x-circle w-3.5 h-3.5" data-lucide="x-circle" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path><path></path></svg>
</span>
              You want to prove you're at the forefront of the industry, a true AI-native builder, not just a manager or theorist.
            </li>
</ul>
</div>
</aside>
</div>
</div>
</section>

<section className="py-16" id="outcomes">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<p className="text-sm uppercase font-geist tracking-tighter text-blue-300/90" style={{}}>Become an AI‑Native Builder</p>
<h2 className="mt-2 text-3xl lg:text-4xl tracking-tight font-semibold font-geist" style={{fontFamily: `"Plus Jakarta Sans", Inter, sans-serif`, fontWeight: `600`}}>
            Master the Full AI-Powered Workflow. Not Just Theory—Live Execution.
          </h2>
<p className="mt-4 font-geist tracking-tighter text-gray-300" style={{}}>
            This is not a course. It's a live, intensive sprint. You will learn the complete, end-to-end process of building a modern product by leveraging AI at every single step.
          </p>
<p className="mt-2 font-geist tracking-tighter text-gray-300" style={{}}>
            We will take a validated startup idea—an <span className="font-geist tracking-tighter text-gray-100" style={{}}>AI Car Diagnostic App</span>—and build it from the ground up.
          </p>
</div>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="group rounded-xl border p-5 transition-colors border-white/10 bg-black/40 hover:bg-black/50">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-800">
<svg className="lucide lucide-globe w-5 h-5 text-gray-300" data-lucide="globe" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path><path></path></svg>
</div>
<h3 className="mt-4 text-lg font-geist tracking-tighter" style={{}}>A Live, Deployed AI Application</h3>
<p className="text-sm text-gray-400 tracking-tighter font-geist mt-2" style={{}}>Your own product, on the internet, that you built from scratch.</p>
</div>
<div className="group rounded-xl border p-5 transition-colors border-white/10 bg-black/40 hover:bg-black/50">
<div className="w-10 h-10 flex bg-gray-800 rounded-lg items-center justify-center">
<svg className="w-5 h-5 text-gray-300" data-lucide="tool" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</div>
<h3 className="mt-4 text-lg font-geist tracking-tighter" style={{}}>A Full-Stack AI Toolbelt</h3>
<ul className="mt-2 space-y-2 text-sm text-gray-300">
<li className="flex gap-2 tracking-tighter font-geist items-start" style={{}}>
<svg className="lucide lucide-search mt-0.5 w-4 h-4 text-blue-300" data-lucide="search" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="11" cy="11"></circle></svg>
                Research & Strategy: with Perplexity & ChatGPT-4.
              </li>
<li className="flex items-start gap-2 font-geist tracking-tighter" style={{}}>
<svg className="lucide lucide-image mt-0.5 w-4 h-4 text-indigo-300" data-lucide="image" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18"></rect><circle cx="9" cy="9"></circle><path></path></svg>
                Branding & Assets: with Midjourney.
              </li>
<li className="flex items-start gap-2 font-geist tracking-tighter" style={{}}>
<svg className="lucide lucide-layout mt-0.5 w-4 h-4 text-violet-300" data-lucide="layout" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18"></rect><path></path><path></path></svg>
                UI/UX Design: with Uizard & Visily.
              </li>
<li className="flex items-start gap-2 font-geist tracking-tighter" style={{}}>
<svg className="lucide lucide-code-2 mt-0.5 w-4 h-4 text-emerald-300" data-lucide="code-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
                Development & Code: with Bubble & AI Coding Assistants like Cursor.
              </li>
</ul>
</div>
<div className="group transition-colors hover:bg-black/50 bg-black/40 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-800">
<svg className="lucide lucide-briefcase w-5 h-5 text-gray-300" data-lucide="briefcase" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><rect height="14" rx="2" width="20"></rect></svg>
</div>
<h3 className="mt-4 text-lg font-geist tracking-tighter" style={{}}>A Career-Defining Portfolio Piece</h3>
<p className="text-sm text-gray-400 tracking-tighter font-geist mt-2" style={{}}>Demonstrate you can lead the entire product lifecycle with modern tools.</p>
</div>
<div className="group rounded-xl border p-5 transition-colors border-white/10 bg-black/40 hover:bg-black/50">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-800">
<svg className="lucide lucide-repeat w-5 h-5 text-gray-300" data-lucide="repeat" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
</div>
<h3 className="mt-4 text-lg font-geist tracking-tighter" style={{}}>The AI Sprint Framework</h3>
<p className="mt-2 text-sm font-geist tracking-tighter text-gray-400" style={{}}>A repeatable system to turn any idea into a product in days, not months.</p>
</div>
</div>
<div className="mt-8 rounded-2xl border bg-gradient-to-b p-5 border-white/10 from-gray-950 to-black">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="lucide lucide-badge-check w-4.5 h-4.5 text-emerald-300" data-lucide="badge-check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</span>
<div className="">
<p className="text-sm font-geist tracking-tighter" style={{}}>By the end of this 5-day sprint, you will have:</p>
</div>
</div>
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all font-geist tracking-tighter bg-blue-400 text-black hover:bg-blue-300" href="#apply" style={{}}>
              Reserve your spot
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</a>
</div>
<div className="mt-4 grid md:grid-cols-2 lg:grid-cols-4 gap-3">
<div className="rounded-lg border p-3 border-white/10 bg-white/5">
<div className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5 w-4 h-4 text-emerald-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<p className="text-sm font-geist tracking-tighter" style={{}}>A Live, Deployed AI Application</p>
</div>
</div>
<div className="rounded-lg border p-3 border-white/10 bg-white/5">
<div className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5 w-4 h-4 text-emerald-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<p className="text-sm font-geist tracking-tighter" style={{}}>A Full-Stack AI Toolbelt</p>
</div>
</div>
<div className="rounded-lg border p-3 border-white/10 bg-white/5">
<div className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5 w-4 h-4 text-emerald-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<p className="text-sm font-geist tracking-tighter" style={{}}>A Career-Defining Portfolio Piece</p>
</div>
</div>
<div className="rounded-lg border p-3 border-white/10 bg-white/5">
<div className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5 w-4 h-4 text-emerald-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<p className="text-sm font-geist tracking-tighter" style={{}}>The AI Sprint Framework</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-950 pt-16 pb-16" id="agenda">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div className="">
<p className="uppercase text-sm text-blue-300/90 tracking-tighter font-geist" style={{}}>GO FROM IDEA TO A WORKING PRODUCT</p>
<h2 className="mt-2 text-3xl lg:text-4xl tracking-tight font-semibold font-geist" style={{fontFamily: `"Plus Jakarta Sans", Inter, sans-serif`, fontWeight: `600`}}>
              Your Daily Mission: From Idea to Launch
            </h2>
<p className="mt-3 max-w-2xl font-geist tracking-tighter text-gray-300" style={{}}>Each day, we'll tackle a critical stage of the product sprint in a 1-hour live, hands-on session.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border transition-all hover:scale-[1.02] font-geist tracking-tighter bg-white/5 text-gray-100 hover:bg-white/10 border-white/10" href="#apply" style={{}}>
            Join next cohort
            <svg className="lucide lucide-calendar-plus w-4 h-4" data-lucide="calendar-plus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path></svg>
</a>
</div>
<div className="mt-8 grid lg:grid-cols-5 gap-4">

<div className="bg-black/40 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between">
<span className="text-xs px-2 py-1 rounded-full border font-geist tracking-tighter bg-white/5 border-white/10" style={{}}>Day 1</span>
<svg className="lucide lucide-target w-4 h-4 text-blue-300" data-lucide="target" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><circle cx="12" cy="12"></circle><circle cx="12" cy="12"></circle></svg>
</div>
<h3 className="mt-3 text-lg font-geist tracking-tighter" style={{}}>AI-Powered Strategy & Branding</h3>
<p className="mt-2 text-sm font-geist tracking-tighter text-gray-400" style={{}}>We'll use Perplexity for deep market research and Midjourney to generate a unique brand identity and logo for our app.</p>
</div>

<div className="rounded-xl border p-5 border-white/10 bg-black/40">
<div className="flex items-center justify-between">
<span className="text-xs px-2 py-1 rounded-full border font-geist tracking-tighter bg-white/5 border-white/10" style={{}}>Day 2</span>
<svg className="lucide lucide-layout-dashboard w-4 h-4 text-indigo-300" data-lucide="layout-dashboard" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7"></rect><rect height="5" rx="1" width="7"></rect><rect height="9" rx="1" width="7"></rect><rect height="5" rx="1" width="7"></rect></svg>
</div>
<h3 className="mt-3 text-lg font-geist tracking-tighter" style={{}}>AI-Generated Design & UX</h3>
<p className="mt-2 text-sm font-geist tracking-tighter text-gray-400" style={{}}>We'll feed our brand assets and user stories into AI UI tools like Uizard to generate the core screens and build a clickable prototype.</p>
</div>

<div className="rounded-xl border p-5 border-white/10 bg-black/40">
<div className="flex items-center justify-between">
<span className="text-xs px-2 py-1 rounded-full border font-geist tracking-tighter bg-white/5 border-white/10" style={{}}>Day 3</span>
<svg className="lucide lucide-smartphone w-4 h-4 text-violet-300" data-lucide="smartphone" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14"></rect><path></path></svg>
</div>
<h3 className="mt-3 text-lg font-geist tracking-tighter" style={{}}>No-Code Frontend Assembly</h3>
<p className="mt-2 text-sm font-geist tracking-tighter text-gray-400" style={{}}>We'll move into Bubble to rapidly build our polished, responsive frontend based on the AI-generated designs.</p>
</div>

<div className="rounded-xl border p-5 border-white/10 bg-black/40">
<div className="flex items-center justify-between">
<span className="text-xs px-2 py-1 rounded-full border font-geist tracking-tighter bg-white/5 border-white/10" style={{}}>Day 4</span>
<svg className="lucide lucide-brain-circuit w-4 h-4 text-emerald-300" data-lucide="brain-circuit" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><circle cx="16" cy="13"></circle><circle cx="18" cy="3"></circle><circle cx="20" cy="21"></circle><circle cx="20" cy="8"></circle></svg>
</div>
<h3 className="mt-3 text-lg font-geist tracking-tighter" style={{}}>AI-Assisted Backend & Code</h3>
<p className="mt-2 text-sm font-geist tracking-tighter text-gray-400" style={{}}>The core of the sprint. We'll connect to the OpenAI API and use an AI Coding Assistant like Cursor to write custom logic and functions, making our app truly intelligent.</p>
</div>

<div className="rounded-xl border p-5 border-white/10 bg-black/40">
<div className="flex items-center justify-between">
<span className="text-xs px-2 py-1 rounded-full border font-geist tracking-tighter bg-white/5 border-white/10" style={{}}>Day 5</span>
<svg className="lucide lucide-rocket w-4 h-4 text-amber-300" data-lucide="rocket" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
</div>
<h3 className="mt-3 text-lg font-geist tracking-tighter" style={{}}>Launch, Test & Iterate</h3>
<p className="mt-2 text-sm font-geist tracking-tighter text-gray-400" style={{}}>We'll connect all the pieces, run final tests, implement a monetization feature, and deploy the application to a live URL.</p>
</div>
</div>
</div>
</section><section className="bg-gray-950 pt-16 pb-16" id="day1">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-7">
<p className="text-sm uppercase text-blue-300/90 font-geist tracking-tighter">Day 1 Deep Dive</p>
<h2 className="mt-2 text-3xl lg:text-4xl tracking-tight font-semibold font-geist" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`, fontWeight: `600`}}>AI‑Powered Research & Strategy</h2>
<div className="mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-geist tracking-tighter bg-white/5 border-white/10 text-gray-200">
<svg className="lucide lucide-target w-3.5 h-3.5" data-lucide="target" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><circle cx="12" cy="12"></circle><circle cx="12" cy="12"></circle></svg>
          Framework Focus: Research & Marketing
        </div>
<div className="mt-6 space-y-4">
<div className="">
<p className="text-xs font-geist tracking-tighter text-gray-400">Live Action</p>
<ul className="mt-2 space-y-2">
<li className="flex items-start gap-3 font-geist tracking-tighter text-sm text-gray-300">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 shrink-0">
<svg className="lucide lucide-search w-3.5 h-3.5 text-blue-300" data-lucide="search" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="11" cy="11"></circle></svg>
</span>
                Use Perplexity to run a rapid Competitive Analysis: competitors, positioning, pricing, and feature gaps.
              </li>
<li className="flex items-start gap-3 font-geist tracking-tighter text-sm text-gray-300">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 shrink-0">
<svg className="lucide lucide-users w-3.5 h-3.5 text-indigo-300" data-lucide="users" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="9" cy="7"></circle></svg>
</span>
                Generate User Personas (goals, pain points, technical level) to guide UX and messaging.
              </li>
<li className="flex items-start gap-3 font-geist tracking-tighter text-sm text-gray-300">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 shrink-0">
<svg className="lucide lucide-palette w-3.5 h-3.5 text-emerald-300" data-lucide="palette" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="13.5" cy="6.5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" fill="currentColor"></circle></svg>
</span>
                Translate insights into brand directions with Midjourney: mood boards, logo concepts, and color systems.
              </li>
</ul>
</div>
<div className="rounded-lg border border-white/10 bg-black/40 p-4">
<div className="flex items-center justify-between">
<p className="text-xs text-gray-400 font-geist tracking-tighter">AI Prompt Example</p>
<button className="inline-flex items-center gap-1.5 text-[11px] rounded-md px-2 py-1 ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition text-gray-300" onClick={(e) => { navigator.clipboard?.writeText(document.getElementById('day1-prompt')?.textContent?.trim()) }} type="button">
<svg className="lucide lucide-copy w-3 h-3" data-lucide="copy" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14"></rect><path></path></svg>
                Copy
              </button>
</div>
<pre className="mt-2 text-[13px] leading-relaxed font-geist-mono text-gray-100 whitespace-pre-wrap" id="day1-prompt">"Generate 3 distinct user personas for an AI car diagnostic app, including their pain points, goals, and technical skill level."</pre>
</div>
</div>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 font-geist tracking-tighter bg-blue-400 text-black hover:bg-blue-300" href="#apply">
            Join Day 1 Session
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</a>
<a className="inline-flex items-center gap-2 transition-all border rounded-full px-5 py-3 backdrop-blur-lg font-geist tracking-tighter hover:bg-white/10 text-gray-100 bg-white/5 border-white/10" href="#agenda">
            Back to Agenda
            <svg className="lucide lucide-calendar-range w-4 h-4" data-lucide="calendar-range" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18"></rect><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>
</a>
</div>
</div>

<div className="lg:col-span-5">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
<img alt="Research to brand identity workflow" className="w-full h-72 sm:h-80 object-cover" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&q=80" />
<div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
<div className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-xs ring-1 ring-white/10 bg-white/10 text-gray-200">
<svg className="lucide lucide-zap w-3.5 h-3.5 text-amber-300" data-lucide="zap" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
              Research → Brand in 60 minutes
            </div>
</div>

<div className="absolute left-4 -bottom-6 sm:left-6 sm:-bottom-8">
<div className="rounded-xl border border-white/10 bg-black/80 backdrop-blur p-4 w-[260px] shadow-2xl">
<p className="text-xs font-geist tracking-tighter text-gray-300">You’ll walk away with:</p>
<ul className="mt-2 space-y-1.5 text-sm font-geist tracking-tighter text-gray-100">
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5 w-3.5 h-3.5 text-emerald-300" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                  Competitive landscape matrix
                </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5 w-3.5 h-3.5 text-emerald-300" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                  3 validated user personas
                </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5 w-3.5 h-3.5 text-emerald-300" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                  Brand moodboard + logo drafts
                </li>
</ul>
</div>
</div>
</div>
</div>

<div className="lg:hidden"></div>
</div>
</div>
</section><section className="bg-gray-950 pt-16 pb-16" id="day1">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-7">
<p className="text-sm uppercase text-blue-300/90 font-geist tracking-tighter">Day 2 Deep Dive</p>
<h2 className="mt-2 text-3xl lg:text-4xl tracking-tight font-semibold font-geist" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`, fontWeight: `600`}}>AI‑Generated Product Specs & Design</h2>
<div className="mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-geist tracking-tighter bg-white/5 border-white/10 text-gray-200">
<svg className="lucide lucide-target w-3.5 h-3.5" data-lucide="target" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><circle cx="12" cy="12"></circle><circle cx="12" cy="12"></circle></svg>
          Framework Focus: Product
        </div>
<div className="mt-6 space-y-4">
<div className="">
<p className="text-xs font-geist tracking-tighter text-gray-400">Live Action</p>
<ul className="mt-2 space-y-2">
<li className="flex items-start gap-3 font-geist tracking-tighter text-sm text-gray-300">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 shrink-0">
<svg className="lucide lucide-file-text w-3.5 h-3.5 text-blue-300" data-lucide="file-text" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path></svg>
</span>
                We’ll use ChatGPT‑4 to write detailed Feature Specs and user stories.
              </li>
<li className="flex items-start gap-3 font-geist tracking-tighter text-sm text-gray-300">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 shrink-0">
<svg className="lucide lucide-layout w-3.5 h-3.5 text-indigo-300" data-lucide="layout" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18"></rect><path></path><path></path></svg>
</span>
                Then we’ll feed those specs into Uizard to generate core app screens and a clickable prototype.
              </li>
</ul>
</div>
<div className="rounded-lg border border-white/10 bg-black/40 p-4">
<div className="flex items-center justify-between">
<p className="text-xs text-gray-400 font-geist tracking-tighter">AI Prompt Example</p>
<button className="inline-flex items-center gap-1.5 text-[11px] rounded-md px-2 py-1 ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition text-gray-300" onClick={(e) => { navigator.clipboard?.writeText(document.getElementById('day1-prompt')?.textContent?.trim()) }} type="button">
<svg className="lucide lucide-copy w-3 h-3" data-lucide="copy" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14"></rect><path></path></svg>
                Copy
              </button>
</div>
<pre className="mt-2 text-[13px] leading-relaxed font-geist-mono text-gray-100 whitespace-pre-wrap" id="day1-prompt">"Based on these feature specs, design a 3-screen mobile app UI: a simple input screen, a detailed results screen, and a user profile page."</pre>
</div>
</div>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 font-geist tracking-tighter bg-blue-400 text-black hover:bg-blue-300" href="#apply">
            Join Day 2 Session
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</a>
<a className="inline-flex items-center gap-2 transition-all border rounded-full px-5 py-3 backdrop-blur-lg font-geist tracking-tighter hover:bg-white/10 text-gray-100 bg-white/5 border-white/10" href="#agenda">
            Back to Agenda
            <svg className="lucide lucide-calendar-range w-4 h-4" data-lucide="calendar-range" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18"></rect><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>
</a>
</div>
</div>

<div className="lg:col-span-5">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
<img alt="Specs to prototype workflow" className="w-full h-72 sm:h-80 object-cover" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&q=80" />
<div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
<div className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-xs ring-1 ring-white/10 bg-white/10 text-gray-200">
<svg className="lucide lucide-zap w-3.5 h-3.5 text-amber-300" data-lucide="zap" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
              Specs → Prototype in 60 minutes
            </div>
</div>

<div className="absolute left-4 -bottom-6 sm:left-6 sm:-bottom-8">
<div className="rounded-xl border border-white/10 bg-black/80 backdrop-blur p-4 w-[260px] shadow-2xl">
<p className="text-xs font-geist tracking-tighter text-gray-300">You’ll walk away with:</p>
<ul className="mt-2 space-y-1.5 text-sm font-geist tracking-tighter text-gray-100">
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5 w-3.5 h-3.5 text-emerald-300" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                  Detailed feature spec document
                </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5 w-3.5 h-3.5 text-emerald-300" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                  User stories mapped to screens
                </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5 w-3.5 h-3.5 text-emerald-300" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                  Clickable 3‑screen prototype
                </li>
</ul>
</div>
</div>
</div>
</div>

<div className="lg:hidden"></div>
</div>
</div>
</section><section className="bg-gray-950 pt-16 pb-16" id="day3">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-gray-950 to-black/40 p-5">
<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
<div className="flex items-start sm:items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 ring-white/10 bg-white/5">
<svg className="lucide lucide-smartphone w-4 h-4 text-indigo-300" data-lucide="smartphone" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14"></rect><path></path></svg>
</span>
<div className="">
<p className="text-xs uppercase text-blue-300/90 font-geist tracking-tighter">Day 3 Deep Dive</p>
<h2 className="mt-1 text-2xl sm:text-3xl lg:text-4xl tracking-tight font-semibold font-geist" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`, fontWeight: `600`}}>No‑Code Frontend Build & MVP Roadmap</h2>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-2">
<div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-geist tracking-tighter bg-white/5 border-white/10 text-gray-200">
<svg className="lucide lucide-target w-3.5 h-3.5" data-lucide="target" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><circle cx="12" cy="12"></circle><circle cx="12" cy="12"></circle></svg>
            Framework Focus: Product (MVP Roadmap)
          </div>
<div className="flex gap-2">
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 font-geist tracking-tighter bg-blue-400 text-black hover:bg-blue-300" href="#apply">
              Join Day 3 Session
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</a>
<a className="inline-flex items-center gap-2 transition-all border rounded-full px-4 py-2 backdrop-blur-lg font-geist tracking-tighter hover:bg-white/10 text-gray-100 bg-white/5 border-white/10" href="#agenda">
              Back to Agenda
              <svg className="lucide lucide-calendar-range w-4 h-4" data-lucide="calendar-range" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18"></rect><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>
</a>
</div>
</div>
</div>
</div>

<div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

<div className="lg:col-span-5 space-y-4">
<div className="rounded-2xl border border-white/10 bg-black/40 p-5">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-bolt w-4 h-4 text-amber-300" data-lucide="bolt" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
</span>
<p className="text-sm font-geist tracking-tighter text-gray-100">Live Action</p>
</div>
<p className="mt-3 text-sm font-geist tracking-tighter text-gray-300">
            We’ll translate our AI‑generated designs into a pixel‑perfect, responsive frontend using <span className="text-white">Bubble</span>. We’ll focus on building the core features defined in our <span className="text-white">MVP Roadmap</span>, ensuring we build what matters most, first.
          </p>
<ul className="mt-3 space-y-2 text-sm font-geist tracking-tighter text-gray-300">
<li className="flex items-start gap-2">
<svg className="lucide lucide-layout-template mt-0.5 w-3.5 h-3.5 text-indigo-300" data-lucide="layout-template" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18"></rect><rect height="7" rx="1" width="9"></rect><rect height="7" rx="1" width="5"></rect></svg>
              Implement responsive page + components from the design system.
            </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-plug mt-0.5 w-3.5 h-3.5 text-blue-300" data-lucide="plug" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
              Wire core flows: input ➝ AI call ➝ results view.
            </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-route mt-0.5 w-3.5 h-3.5 text-emerald-300" data-lucide="route" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19"></circle><path></path><circle cx="18" cy="5"></circle></svg>
              Ship “Must‑have” features first; defer non‑critical polish to later.
            </li>
</ul>
</div>

<div className="grid grid-cols-3 gap-3">
<div className="rounded-xl border border-white/10 bg-white/5 p-3">
<p className="text-[11px] font-geist tracking-tighter text-gray-400">Screens</p>
<p className="mt-1 text-lg font-geist tracking-tight text-white">3</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-3">
<p className="text-[11px] font-geist tracking-tighter text-gray-400">Core flows</p>
<p className="mt-1 text-lg font-geist tracking-tight text-white">2</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-3">
<p className="text-[11px] font-geist tracking-tighter text-gray-400">MVP scope</p>
<p className="mt-1 text-lg font-geist tracking-tight text-emerald-300">70%</p>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-black/40 p-4">
<div className="flex items-center justify-between">
<p className="text-xs font-geist tracking-tighter text-gray-400">MVP Progress</p>
<span className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] ring-1 ring-white/10 bg-white/5 text-gray-300">
<svg className="lucide lucide-sparkles w-3 h-3" data-lucide="sparkles" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="4" cy="20"></circle></svg>
              Auto‑updated
            </span>
</div>
<div className="mt-3">
<canvas className="" height="242" id="day3Chart" style={{display: `block`, boxSizing: `border-box`, height: `121px`, width: `458px`}} width="917"></canvas>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-layout-dashboard w-4 h-4 text-blue-300" data-lucide="layout-dashboard" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7"></rect><rect height="5" rx="1" width="7"></rect><rect height="9" rx="1" width="7"></rect><rect height="5" rx="1" width="7"></rect></svg>
</span>
<p className="text-sm font-geist tracking-tighter text-gray-100">MVP Roadmap</p>
</div>
<span className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] ring-1 ring-white/10 bg-emerald-400/10 text-emerald-300">
<svg className="lucide lucide-check-circle w-3 h-3" data-lucide="check-circle" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
              Prioritized
            </span>
</div>
<div className="mt-4 overflow-x-auto">
<div className="min-w-[700px] grid grid-cols-3 gap-4">

<div className="rounded-xl border border-white/10 bg-black/40">
<div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/10 ring-1 ring-emerald-400/20 text-emerald-300">
<svg className="lucide lucide-flag w-3.5 h-3.5" data-lucide="flag" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</span>
<p className="text-xs font-geist tracking-tighter text-gray-100">Must‑Have</p>
</div>
<span className="text-[11px] font-geist tracking-tighter text-gray-400">Now</span>
</div>
<ul className="p-3 space-y-2">
<li className="rounded-lg border border-white/10 bg-white/5 p-3">
<div className="flex items-center justify-between">
<p className="text-sm font-geist tracking-tighter text-white">Input screen (issue prompt)</p>
<span className="text-[11px] rounded px-2 py-0.5 bg-blue-400/10 text-blue-300 ring-1 ring-blue-400/20">UI</span>
</div>
</li>
<li className="rounded-lg border border-white/10 bg-white/5 p-3">
<div className="flex items-center justify-between">
<p className="text-sm font-geist tracking-tighter text-white">AI call workflow</p>
<span className="text-[11px] rounded px-2 py-0.5 bg-indigo-400/10 text-indigo-300 ring-1 ring-indigo-400/20">Logic</span>
</div>
</li>
<li className="rounded-lg border border-white/10 bg-white/5 p-3">
<div className="flex items-center justify-between">
<p className="text-sm font-geist tracking-tighter text-white">Results screen (diagnosis)</p>
<span className="text-[11px] rounded px-2 py-0.5 bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20">Core</span>
</div>
</li>
</ul>
</div>

<div className="rounded-xl border border-white/10 bg-black/40">
<div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-blue-500/10 ring-1 ring-blue-400/20 text-blue-300">
<svg className="lucide lucide-circle-dot w-3.5 h-3.5" data-lucide="circle-dot" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><circle cx="12" cy="12"></circle></svg>
</span>
<p className="text-xs font-geist tracking-tighter text-gray-100">Should‑Have</p>
</div>
<span className="text-[11px] font-geist tracking-tighter text-gray-400">Next</span>
</div>
<ul className="p-3 space-y-2">
<li className="rounded-lg border border-white/10 bg-white/5 p-3">
<div className="flex items-center justify-between">
<p className="text-sm font-geist tracking-tighter text-white">Saved history + share</p>
<span className="text-[11px] rounded px-2 py-0.5 bg-gray-400/10 text-gray-300 ring-1 ring-white/10">UX</span>
</div>
</li>
<li className="rounded-lg border border-white/10 bg-white/5 p-3">
<div className="flex items-center justify-between">
<p className="text-sm font-geist tracking-tighter text-white">Auth (email or magic link)</p>
<span className="text-[11px] rounded px-2 py-0.5 bg-violet-400/10 text-violet-300 ring-1 ring-violet-400/20">Access</span>
</div>
</li>
<li className="rounded-lg border border-white/10 bg-white/5 p-3">
<div className="flex items-center justify-between">
<p className="text-sm font-geist tracking-tighter text-white">Error & empty states</p>
<span className="text-[11px] rounded px-2 py-0.5 bg-amber-400/10 text-amber-300 ring-1 ring-amber-400/20">Quality</span>
</div>
</li>
</ul>
</div>

<div className="rounded-xl border border-white/10 bg-black/40">
<div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gray-500/10 ring-1 ring-white/10 text-gray-300">
<svg className="lucide lucide-clock w-3.5 h-3.5" data-lucide="clock" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
</span>
<p className="text-xs font-geist tracking-tighter text-gray-100">Later</p>
</div>
<span className="text-[11px] font-geist tracking-tighter text-gray-400">Backlog</span>
</div>
<ul className="p-3 space-y-2">
<li className="rounded-lg border border-white/10 bg-white/5 p-3">
<div className="flex items-center justify-between">
<p className="text-sm font-geist tracking-tighter text-white">Payments / upgrade</p>
<span className="text-[11px] rounded px-2 py-0.5 bg-rose-400/10 text-rose-300 ring-1 ring-rose-400/20">Monetize</span>
</div>
</li>
<li className="rounded-lg border border-white/10 bg-white/5 p-3">
<div className="flex items-center justify-between">
<p className="text-sm font-geist tracking-tighter text-white">Telemetry & analytics</p>
<span className="text-[11px] rounded px-2 py-0.5 bg-teal-400/10 text-teal-300 ring-1 ring-teal-400/20">Insights</span>
</div>
</li>
<li className="rounded-lg border border-white/10 bg-white/5 p-3">
<div className="flex items-center justify-between">
<p className="text-sm font-geist tracking-tighter text-white">Guided onboarding</p>
<span className="text-[11px] rounded px-2 py-0.5 bg-gray-400/10 text-gray-300 ring-1 ring-white/10">Growth</span>
</div>
</li>
</ul>
</div>
</div>
</div>

<div className="mt-4 relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
<img alt="No-code build environment preview" className="w-full h-64 sm:h-72 object-cover" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&q=80" />
<div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
<div className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-xs ring-1 ring-white/10 bg-white/10 text-gray-200">
<svg className="lucide lucide-zap w-3.5 h-3.5 text-amber-300" data-lucide="zap" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                Design ➝ Build in 60 minutes
              </div>
</div>
</div>
</div>
</div>
</div>
</div>



</section><section className="bg-gray-950 pt-16 pb-16" id="day4">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-gray-950 to-black/40 p-5">
<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
<div className="flex items-start sm:items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 ring-white/10 bg-white/5">
<svg className="lucide lucide-server-cog w-4 h-4 text-emerald-300" data-lucide="server-cog" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>
</span>
<div className="">
<p className="text-xs uppercase text-blue-300/90 font-geist tracking-tighter">Day 4 Deep Dive</p>
<h2 className="mt-1 text-2xl sm:text-3xl lg:text-4xl tracking-tight font-semibold font-geist" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`, fontWeight: `600`}}>AI‑Assisted Backend & Business Logic</h2>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-2">
<div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-geist tracking-tighter bg-emerald-400/10 border-emerald-400/20 text-emerald-300">
<svg className="lucide lucide-badge-dollar-sign w-3.5 h-3.5" data-lucide="badge-dollar-sign" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
            Framework Focus: Business (Pricing Strategy)
          </div>
<div className="flex gap-2">
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 font-geist tracking-tighter bg-blue-400 text-black hover:bg-blue-300" href="#apply">
              Join Day 4 Session
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</a>
<a className="inline-flex items-center gap-2 transition-all border rounded-full px-4 py-2 backdrop-blur-lg font-geist tracking-tighter hover:bg-white/10 text-gray-100 bg-white/5 border-white/10" href="#agenda">
              Back to Agenda
              <svg className="lucide lucide-calendar-range w-4 h-4" data-lucide="calendar-range" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18"></rect><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>
</a>
</div>
</div>
</div>
</div>

<div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

<div className="lg:col-span-7 space-y-4">

<div className="rounded-2xl border border-white/10 bg-black/40 p-5">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-bot w-4 h-4 text-indigo-300" data-lucide="bot" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><rect height="12" rx="2" width="16"></rect><path></path><path></path><path></path><path></path></svg>
</span>
<p className="text-sm font-geist tracking-tighter text-gray-100">Live Action</p>
</div>
<p className="mt-3 text-sm font-geist tracking-tighter text-gray-300">
            The magic happens. We’ll connect our app to the <span className="text-white">OpenAI API</span>. Using an AI Coding Assistant like <span className="text-white">Cursor</span>, we’ll write backend logic to process user input and implement a simple <span className="text-white">Pricing Strategy</span> with a “Pro” feature.
          </p>
<div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
<div className="rounded-xl border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-blue-500/10 ring-1 ring-blue-400/20 text-blue-300">
<svg className="lucide lucide-key-round w-3.5 h-3.5" data-lucide="key-round" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="16.5" cy="7.5" fill="currentColor"></circle></svg>
</span>
<p className="text-xs font-geist tracking-tighter text-gray-100">Connect OpenAI</p>
</div>
<p className="mt-2 text-[12px] text-gray-400 font-geist tracking-tighter">Securely store keys, test a completions endpoint.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-violet-500/10 ring-1 ring-violet-400/20 text-violet-300">
<svg className="lucide lucide-square-code w-3.5 h-3.5" data-lucide="square-code" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><rect height="18" rx="2" width="18"></rect></svg>
</span>
<p className="text-xs font-geist tracking-tighter text-gray-100">Write business logic</p>
</div>
<p className="mt-2 text-[12px] text-gray-400 font-geist tracking-tighter">Generate functions with Cursor and refine.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/10 ring-1 ring-emerald-400/20 text-emerald-300">
<svg className="lucide lucide-badge-dollar-sign w-3.5 h-3.5" data-lucide="badge-dollar-sign" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</span>
<p className="text-xs font-geist tracking-tighter text-gray-100">Add “Pro” feature</p>
</div>
<p className="mt-2 text-[12px] text-gray-400 font-geist tracking-tighter">Gate advanced steps behind a simple plan.</p>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-wallet w-4 h-4 text-emerald-300" data-lucide="wallet" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</span>
<p className="text-sm font-geist tracking-tighter text-gray-100">Pricing Strategy</p>
</div>
<span className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] ring-1 ring-white/10 bg-white/5 text-gray-300">
              Simple testable tiers
            </span>
</div>
<div className="mt-4 grid sm:grid-cols-2 gap-3">
<div className="rounded-xl border border-white/10 bg-black/40 p-4">
<div className="flex items-center justify-between">
<p className="text-sm font-geist tracking-tighter text-gray-100">Free</p>
<span className="text-[11px] rounded px-2 py-0.5 bg-gray-400/10 text-gray-300 ring-1 ring-white/10">Starter</span>
</div>
<ul className="mt-3 space-y-2 text-sm font-geist tracking-tighter text-gray-300">
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5 w-3.5 h-3.5 text-emerald-300" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                  Basic diagnosis summary
                </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5 w-3.5 h-3.5 text-emerald-300" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                  Estimated cost range
                </li>
</ul>
</div>
<div className="rounded-xl border border-white/10 bg-gradient-to-b from-emerald-500/10 to-transparent p-4">
<div className="flex items-center justify-between">
<p className="text-sm font-geist tracking-tighter text-white">Pro</p>
<span className="text-[11px] rounded px-2 py-0.5 bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20">Upgrade</span>
</div>
<ul className="mt-3 space-y-2 text-sm font-geist tracking-tighter text-gray-200">
<li className="flex items-start gap-2">
<svg className="lucide lucide-stars mt-0.5 w-3.5 h-3.5 text-emerald-300" data-lucide="stars" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="4" cy="20"></circle></svg>
                  Step‑by‑step repair guidance
                </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-clock mt-0.5 w-3.5 h-3.5 text-emerald-300" data-lucide="clock" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
                  Shop time estimate + parts list
                </li>
</ul>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-black/40 p-4">
<div className="flex items-center justify-between">
<p className="text-xs font-geist tracking-tighter text-gray-400">Projected Plan Split</p>
<span className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] ring-1 ring-white/10 bg-white/5 text-gray-300">
<svg className="lucide lucide-bar-chart-2 w-3 h-3" data-lucide="bar-chart-2" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><line></line><line></line><line></line></svg>
              Sample data
            </span>
</div>
<div className="mt-3">
<canvas className="" height="1330" id="day4Chart" style={{display: `block`, boxSizing: `border-box`, height: `665px`, width: `665px`}} width="1330"></canvas>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="lg:sticky lg:top-24 space-y-4">
<div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
<div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-black/40">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md ring-1 ring-white/10 bg-white/5">
<svg className="lucide lucide-file-code-2 w-4 h-4 text-violet-300" data-lucide="file-code-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
</span>
<p className="text-sm font-geist tracking-tighter text-gray-100">Backend function (demo)</p>
</div>
<span className="text-[11px] font-geist tracking-tighter text-gray-400">JavaScript</span>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<p className="text-xs text-gray-400 font-geist tracking-tighter">AI Prompt Example (for the code)</p>
<button className="inline-flex items-center gap-1.5 text-[11px] rounded-md px-2 py-1 ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition text-gray-300" id="day4-copy" type="button">
<svg className="lucide lucide-copy w-3 h-3" data-lucide="copy" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14"></rect><path></path></svg>
                  Copy
                </button>
</div>
<pre className="mt-2 text-[13px] leading-relaxed font-geist-mono text-gray-100 whitespace-pre-wrap" id="day4-prompt">"Write a javascript function that takes a JSON object with 'issue' and 'cost' and formats it into a user-friendly summary string."</pre>
<div className="mt-4 rounded-lg border border-white/10 bg-black/40 p-3">
<pre className="text-[12.5px] leading-relaxed font-geist-mono text-gray-100 whitespace-pre" id="day4-code">function formatSummary(input) {"{"}
  const issue = typeof input.issue === 'string' && input.issue.trim() ? input.issue.trim() : 'Unknown issue';
  const costNum = typeof input.cost === 'number' ? input.cost : Number(input.cost);
  const cost = Number.isFinite(costNum) ? costNum : 0;
  const tierHint = cost {">"} 150 ? 'Consider Pro for detailed steps.' : 'Free plan covers basics.';
  return `Issue: ${"{"}issue{"}"} • Estimated cost: $${"{"}cost.toFixed(0){"}"} — ${"{"}tierHint{"}"}`;
{"}"}</pre>
</div>

<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
<div className="sm:col-span-2">
<label className="sr-only" htmlFor="day4-issue">Issue</label>
<input className="w-full px-3 py-2 rounded-md bg-black/40 border border-white/10 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" id="day4-issue" placeholder="e.g. Squeal when braking" type="text" />
</div>
<div>
<label className="sr-only" htmlFor="day4-cost">Cost</label>
<input className="w-full px-3 py-2 rounded-md bg-black/40 border border-white/10 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" id="day4-cost" placeholder="120" type="number" />
</div>
</div>
<button className="mt-3 inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-md transition font-geist tracking-tighter bg-blue-400 text-black hover:bg-blue-300" id="day4-run">
                Run demo
                <svg className="lucide lucide-play w-3.5 h-3.5" data-lucide="play" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
<div className="mt-3 rounded-md border border-white/10 bg-white/5 p-3 text-[13px] font-geist tracking-tighter text-gray-300" id="day4-output">Output will appear here...</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
<img alt="Play video: Backend & business logic wiring walkthrough" aria-label="Play video: Backend & business logic wiring walkthrough" className="w-full h-64 sm:h-72 object-cover cursor-pointer transition hover:scale-[1.02]" data-video-placeholder="true" data-video-url="https://www.w3schools.com/html/mov_bbb.mp4" decoding="async" loading="lazy" onClick={(e) => { window.open(e.currentTarget.dataset.videoUrl,'_blank') }} role="button" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&q=80" title="Play video" />
<div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
<div className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-xs ring-1 ring-white/10 bg-white/10 text-gray-200">
<svg className="lucide lucide-zap w-3.5 h-3.5 text-amber-300" data-lucide="zap" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                Logic ➝ Pricing in 60 minutes
              </div>
</div>
</div>
</div>
</div>
</div>


</div>
</section><section className="bg-gray-950 pt-16 pb-16" id="day5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-gray-950 to-black/40 p-5">
<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
<div className="flex items-start sm:items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 ring-white/10 bg-white/5">
<svg className="lucide lucide-megaphone w-4 h-4 text-amber-300" data-lucide="megaphone" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</span>
<div className="">
<p className="text-xs uppercase text-blue-300/90 font-geist tracking-tighter">Day 5 Deep Dive</p>
<h2 className="mt-1 text-2xl sm:text-3xl lg:text-4xl tracking-tight font-semibold font-geist" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`, fontWeight: `600`}}>GTM Strategy & Live Deployment</h2>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-2">
<div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-geist tracking-tighter bg-amber-400/10 border-amber-400/20 text-amber-300">
<svg className="lucide lucide-briefcase w-3.5 h-3.5" data-lucide="briefcase" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path></path><rect height="14" rx="2" width="20"></rect></svg>
            Framework Focus: Business (GTM Strategy)
          </div>
<div className="flex gap-2">
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 font-geist tracking-tighter bg-blue-400 text-black hover:bg-blue-300" href="#apply">
              Join Day 5 Session
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</a>
<a className="inline-flex items-center gap-2 transition-all border rounded-full px-4 py-2 backdrop-blur-lg font-geist tracking-tighter hover:bg-white/10 text-gray-100 bg-white/5 border-white/10" href="#agenda">
              Back to Agenda
              <svg className="lucide lucide-calendar-range w-4 h-4" data-lucide="calendar-range" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18"></rect><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>
</a>
</div>
</div>
</div>
</div>

<div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

<div className="lg:col-span-7 space-y-4">

<div className="rounded-2xl border border-white/10 bg-black/40 p-5">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-megaphone w-4 h-4 text-amber-300" data-lucide="megaphone" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</span>
<p className="text-sm font-geist tracking-tighter text-gray-100">Live Action</p>
</div>
<p className="mt-3 text-sm font-geist tracking-tighter text-gray-300">
            We'll use AI to draft a simple <span className="text-white">Go‑To‑Market (GTM) Strategy</span> and a launch announcement. Then, after final testing, we will hit the deploy button in <span className="text-white">Bubble</span> and push our application to a live public URL. You built a product. It's live.
          </p>

<div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
<div className="rounded-xl border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-sky-500/10 ring-1 ring-sky-400/20 text-sky-300">
<svg className="lucide lucide-share-2 w-3.5 h-3.5" data-lucide="share-2" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5"></circle><circle cx="6" cy="12"></circle><circle cx="18" cy="19"></circle><line></line><line></line></svg>
</span>
<p className="text-xs font-geist tracking-tighter text-gray-100">Channels & Audience</p>
</div>
<p className="mt-2 text-[12px] text-gray-400 font-geist tracking-tighter">Product Hunt, X/LinkedIn, niche communities.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-violet-500/10 ring-1 ring-violet-400/20 text-violet-300">
<svg className="lucide lucide-file-text w-3.5 h-3.5" data-lucide="file-text" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path></svg>
</span>
<p className="text-xs font-geist tracking-tighter text-gray-100">Launch Assets</p>
</div>
<p className="mt-2 text-[12px] text-gray-400 font-geist tracking-tighter">AI‑drafted announcement, visuals, and tagline.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/10 ring-1 ring-emerald-400/20 text-emerald-300">
<svg className="lucide lucide-bar-chart-2 w-3.5 h-3.5" data-lucide="bar-chart-2" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><line></line><line></line><line></line></svg>
</span>
<p className="text-xs font-geist tracking-tighter text-gray-100">Metrics to Watch</p>
</div>
<p className="mt-2 text-[12px] text-gray-400 font-geist tracking-tighter">Sign‑ups, activation rate, Pro conversions.</p>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-rocket w-4 h-4 text-amber-300" data-lucide="rocket" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
</span>
<p className="text-sm font-geist tracking-tighter text-gray-100">Deployment Checklist</p>
</div>
<span className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] ring-1 ring-white/10 bg-white/5 text-gray-300">Final pass</span>
</div>
<ul className="mt-4 space-y-2 text-sm font-geist tracking-tighter text-gray-300">
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5 w-3.5 h-3.5 text-emerald-300" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
              QA core flows: input → AI call → results
            </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5 w-3.5 h-3.5 text-emerald-300" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
              Set environment variables / API keys
            </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5 w-3.5 h-3.5 text-emerald-300" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
              Connect custom domain (optional)
            </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5 w-3.5 h-3.5 text-emerald-300" data-lucide="check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
              Deploy to live URL and verify status
            </li>
</ul>
</div>
</div>

<div className="lg:col-span-5 space-y-4">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
<div className="relative h-64 sm:h-72">
<img alt="GTM strategy and deployment walk-through" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&q=80" />
<div className="absolute inset-0 bg-black/40"></div>
<button className="absolute inset-0 m-auto h-16 w-16 sm:h-18 sm:w-18 inline-flex items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur hover:bg-white/20 transition" type="button">
<svg className="lucide lucide-play w-6 h-6 text-white" data-lucide="play" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
<div className="absolute inset-x-0 top-0 p-3 flex items-center justify-between">
<span className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-xs ring-1 ring-white/10 bg-black/40 text-gray-200">
<svg className="lucide lucide-video w-3 h-3" data-lucide="video" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path></path><rect height="12" rx="2" width="14"></rect></svg>
                Session Walkthrough
              </span>
</div>
<div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
<div className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-xs ring-1 ring-white/10 bg-white/10 text-gray-200">
                GTM ➝ Deploy in 60 minutes
              </div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-black/40 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/10 ring-1 ring-emerald-400/20 text-emerald-300">
<svg className="lucide lucide-globe w-3.5 h-3.5" data-lucide="globe" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path><path></path></svg>
</span>
<p className="text-sm font-geist tracking-tighter text-gray-100">Live URL</p>
</div>
<span className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] ring-1 ring-white/10 bg-white/5 text-gray-300">Ready to launch</span>
</div>
<div className="mt-3 rounded-md border border-white/10 bg-white/5 px-3 py-2 flex items-center justify-between">
<p className="text-[13px] font-geist tracking-tighter text-gray-200">https://yourapp-demo.live</p>
<span className="ml-3 inline-flex items-center gap-1.5 text-[11px] rounded px-2 py-1 ring-1 ring-white/10 bg-black/40 text-gray-300">
<svg className="lucide lucide-copy w-3 h-3" data-lucide="copy" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14"></rect><path></path></svg>
              Copy
            </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16" id="apply">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border bg-gradient-to-b p-6 border-blue-400/30 from-gray-900/80 to-black">
<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
<div className="max-w-2xl">
<h3 className="text-2xl sm:text-3xl tracking-tight font-semibold font-geist" style={{fontFamily: `"Plus Jakarta Sans", Inter, sans-serif`, fontWeight: `600`}}>Ready to become an AI-native builder?</h3>
<p className="mt-2 font-geist tracking-tighter text-gray-300" style={{}}>Join the next live cohort and ship a real, AI-powered application in 5 days.</p>
<p className="mt-1 text-sm font-geist tracking-tighter text-gray-400" style={{}}>Limited spots. The next sprint begins [Date].</p>
<ul className="mt-4 grid sm:grid-cols-3 gap-2 text-sm text-gray-300">
<li className="flex items-center gap-2 font-geist tracking-tighter" style={{}}>
<svg className="lucide lucide-video w-3.5 h-3.5 text-gray-300" data-lucide="video" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path></path><rect height="12" rx="2" width="14"></rect></svg>
                  Daily live sessions
                </li>
<li className="flex items-center gap-2 font-geist tracking-tighter" style={{}}>
<svg className="lucide lucide-files w-3.5 h-3.5 text-gray-300" data-lucide="files" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
                  Templates & assets
                </li>
<li className="flex items-center gap-2 font-geist tracking-tighter" style={{}}>
<svg className="lucide lucide-messages-square w-3.5 h-3.5 text-gray-300" data-lucide="messages-square" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
                  Q&A + community
                </li>
</ul>
</div>
<div className="w-full lg:w-auto">
<div className="rounded-xl border p-4 border-white/10 bg-white/5">
<div className="flex items-center gap-2 text-sm font-geist tracking-tighter text-gray-300" style={{}}>
<svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
                  5 days · 60 min/day
                </div>
<div className="mt-2 flex items-center gap-2 text-sm font-geist tracking-tighter text-gray-300">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><rect height="18" rx="2" width="18"></rect><path></path></svg>
                  Next cohort starts: <span className="ml-1 text-white">[Date]</span>
</div>
<div className="mt-2 flex items-center gap-2 text-sm font-geist tracking-tighter text-gray-300">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="9" cy="7"></circle></svg>
                  Limited seats · Small group
                </div>
<form action="#" className="mt-4 space-y-3" method="post">
<div>
<label className="sr-only" htmlFor="name">Name</label>
<div className="relative">
<span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round"></path></svg>
</span>
<input className="w-full pl-9 pr-3 py-2 rounded-md bg-black/40 border border-white/10 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" id="name" name="name" placeholder="Your name" required type="text" />
</div>
</div>
<div>
<label className="sr-only" htmlFor="email">Email</label>
<div className="relative">
<span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round"></path></svg>
</span>
<input className="w-full pl-9 pr-3 py-2 rounded-md bg-black/40 border border-white/10 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" id="email" name="email" placeholder="you@example.com" required type="email" />
</div>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-geist tracking-tighter transition-all bg-blue-400 text-black hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500" type="submit">
                    Apply now
                    <svg className="lucide lucide-rocket w-4 h-4" data-lucide="rocket" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
</button>
<p className="text-[12px] text-gray-400">You'll receive a confirmation and next steps within 24 hours.</p>
</form>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-gray-950" id="testimonials">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<p className="text-sm uppercase font-geist tracking-tighter text-blue-300/90">What Builders Say</p>
<h2 className="mt-2 text-3xl lg:text-4xl tracking-tight font-semibold font-geist" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`, fontWeight: `600`}}>Real outcomes in just one week</h2>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-4">
<figure className="rounded-xl border p-5 border-white/10 bg-black/40">
<div className="flex items-center gap-2 text-amber-300">
<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-xs font-geist tracking-tighter">Shipped in 5 days</span>
</div>
<blockquote className="mt-3 text-sm text-gray-300 font-geist tracking-tighter">I went from a vague idea to a working AI tool my team actually uses. The structure and momentum were game-changing.</blockquote>
<figcaption className="mt-4 flex items-center gap-3">
<span className="inline-flex h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600"></span>
<div>
<p className="text-sm font-geist tracking-tighter text-white">Maya K.</p>
<p className="text-xs text-gray-400">Product Manager</p>
</div>
</figcaption>
</figure>
<figure className="rounded-xl border p-5 border-white/10 bg-black/40">
<div className="flex items-center gap-2 text-amber-300">
<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-xs font-geist tracking-tighter">From idea to MVP</span>
</div>
<blockquote className="mt-3 text-sm text-gray-300 font-geist tracking-tighter">The sprint forced me to focus on outcomes. I launched a niche AI app and got my first 50 users in a week.</blockquote>
<figcaption className="mt-4 flex items-center gap-3">
<span className="inline-flex h-8 w-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600"></span>
<div>
<p className="text-sm font-geist tracking-tighter text-white">Jordan P.</p>
<p className="text-xs text-gray-400">Founder</p>
</div>
</figcaption>
</figure>
<figure className="rounded-xl border p-5 border-white/10 bg-black/40">
<div className="flex items-center gap-2 text-amber-300">
<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-xs font-geist tracking-tighter">Career boost</span>
</div>
<blockquote className="mt-3 text-sm text-gray-300 font-geist tracking-tighter">My portfolio piece from the sprint directly led to two interviews. It showed I can ship with AI, fast.</blockquote>
<figcaption className="mt-4 flex items-center gap-3">
<span className="inline-flex h-8 w-8 rounded-full bg-gradient-to-br from-rose-500 to-pink-600"></span>
<div>
<p className="text-sm font-geist tracking-tighter text-white">Samira L.</p>
<p className="text-xs text-gray-400">UX Designer</p>
</div>
</figcaption>
</figure>
</div>
</div>
</section>

<section className="py-16" id="faq">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<p className="text-sm uppercase font-geist tracking-tighter text-blue-300/90">FAQ</p>
<h2 className="mt-2 text-3xl lg:text-4xl tracking-tight font-semibold font-geist" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`, fontWeight: `600`}}>Answers to common questions</h2>
</div>
<div className="mt-8 grid md:grid-cols-2 gap-4">
<details className="group rounded-xl border p-5 border-white/10 bg-black/40 open:bg-black/50">
<summary className="flex cursor-pointer items-center justify-between gap-4">
<span className="text-sm font-geist tracking-tighter text-white">Do I need to know how to code?</span>
<span className="shrink-0 rounded-md border border-white/10 bg-white/5 p-1 text-gray-400 group-open:rotate-180 transition-transform">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round"></path></svg>
</span>
</summary>
<p className="mt-3 text-sm text-gray-300 font-geist tracking-tighter">No. We’ll use no‑code tools and AI coding assistants. You’ll learn just enough code to connect APIs and add logic where needed.</p>
</details>
<details className="group rounded-xl border p-5 border-white/10 bg-black/40 open:bg-black/50">
<summary className="flex cursor-pointer items-center justify-between gap-4">
<span className="text-sm font-geist tracking-tighter text-white">What if I can’t attend live?</span>
<span className="shrink-0 rounded-md border border-white/10 bg-white/5 p-1 text-gray-400 group-open:rotate-180 transition-transform">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round"></path></svg>
</span>
</summary>
<p className="mt-3 text-sm text-gray-300 font-geist tracking-tighter">All sessions are recorded and shared within 24 hours. You’ll also get step‑by‑step notes and templates.</p>
</details>
<details className="group rounded-xl border p-5 border-white/10 bg-black/40 open:bg-black/50">
<summary className="flex cursor-pointer items-center justify-between gap-4">
<span className="text-sm font-geist tracking-tighter text-white">Which tools and APIs do we use?</span>
<span className="shrink-0 rounded-md border border-white/10 bg-white/5 p-1 text-gray-400 group-open:rotate-180 transition-transform">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round"></path></svg>
</span>
</summary>
<p className="mt-3 text-sm text-gray-300 font-geist tracking-tighter">Perplexity, Midjourney, Uizard/Visily, Bubble, and OpenAI API. We’ll also demo Cursor and other assistants for coding.</p>
</details>
<details className="group rounded-xl border p-5 border-white/10 bg-black/40 open:bg-black/50">
<summary className="flex cursor-pointer items-center justify-between gap-4">
<span className="text-sm font-geist tracking-tighter text-white">Is there a certificate?</span>
<span className="shrink-0 rounded-md border border-white/10 bg-white/5 p-1 text-gray-400 group-open:rotate-180 transition-transform">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round"></path></svg>
</span>
</summary>
<p className="mt-3 text-sm text-gray-300 font-geist tracking-tighter">Yes. You’ll receive a completion badge and, more importantly, a live project link you can showcase.</p>
</details>
</div>
</div>
</section>

<footer className="pt-12 pb-8 border-t border-white/10 bg-gray-950/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<a className="inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md" href="#overview">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600"></span>
<span className="text-sm font-geist tracking-tighter text-white">AI Product Sprint</span>
</a>
<nav className="flex items-center gap-4 text-sm">
<a className="text-gray-400 hover:text-white transition" href="#why">Why</a>
<a className="text-gray-400 hover:text-white transition" href="#outcomes">Outcomes</a>
<a className="text-gray-400 hover:text-white transition" href="#agenda">Agenda</a>
<a className="text-gray-400 hover:text-white transition" href="#apply">Apply</a>
<a className="text-gray-400 hover:text-white transition" href="#faq">FAQ</a>
</nav>
</div>
<div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<p className="text-xs text-gray-500">© <span id="year">2025</span> AI Product Sprint. All rights reserved.</p>
<p className="text-xs text-gray-500">Built live with modern AI tools.</p>
</div>
</div>
</footer>



    </>
  );
}
