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
      
  lucide.createIcons();



    lucide.createIcons();

    /* Staggered animation on load */
    window.addEventListener('load', () => {
      document.querySelectorAll('[data-animate]').forEach((el, i) => {
        el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out');
        setTimeout(() => {
          el.classList.remove('opacity-0', 'translate-y-8');
        }, 200 * i + 150);
      });
    });

    /* Scroll-to-top visibility */
    const scrollBtn = document.getElementById('scrollToTop');
    window.addEventListener('scroll', () => {
      window.scrollY > 600 ? scrollBtn.classList.remove('hidden') : scrollBtn.classList.add('hidden');
    });
    scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    /* ROI Calculator Logic */
    const sliders = {
      hours: document.getElementById('hours'),
      cost: document.getElementById('cost'),
      savings: document.getElementById('savings'),
      impl: document.getElementById('impl')
    };
    const labels = {
      hours: document.getElementById('hoursVal'),
      cost: document.getElementById('costVal'),
      savings: document.getElementById('savingsVal'),
      impl: document.getElementById('implVal'),
      annualSavings: document.getElementById('annualSavings'),
      breakEven: document.getElementById('breakEven'),
      roiPct: document.getElementById('roiPct')
    };

    /* Init Chart */
    const ctx = document.getElementById('roiChart').getContext('2d');
    const roiChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: Array.from({ length: 12 }, (_, i) => `M${i + 1}`),
        datasets: [
          {
            label: 'Manual Cost',
            data: [],
            borderColor: '#38bdf8',
            backgroundColor: 'transparent',
            tension: 0.35,
            borderWidth: 2
          },
          {
            label: 'Automated Cost',
            data: [],
            borderColor: '#14b8a6',
            backgroundColor: 'transparent',
            tension: 0.35,
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { labels: { color: '#ffffff', font: { size: 12 } } } },
        scales: {
          x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
          y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } }
        }
      }
    });

    function formatMoney(v) {
      return `$${v.toLocaleString()}`;
    }

    function recalc() {
      /* Update live slider labels */
      labels.hours.textContent = sliders.hours.value;
      labels.cost.textContent = sliders.cost.value;
      labels.savings.textContent = sliders.savings.value;
      labels.impl.textContent = sliders.impl.value;

      const hoursPW = +sliders.hours.value;
      const hourly = +sliders.cost.value;
      const savePct = +sliders.savings.value / 100;
      const implCost = +sliders.impl.value;

      /* Calculations */
      const annualManual = hoursPW * 52 * hourly;
      const annualAuto = annualManual * (1 - savePct);
      const annualSavings = annualManual - annualAuto;

      const breakEvenMonths = Math.ceil(implCost / (annualSavings / 12));
      const roi = ((annualSavings - implCost) / implCost) * 100;

      /* Update text */
      labels.annualSavings.textContent = formatMoney(Math.round(annualSavings));
      labels.breakEven.textContent = isFinite(breakEvenMonths) && breakEvenMonths > 0 ? breakEvenMonths : '--';
      labels.roiPct.textContent = `${Math.round(roi)}%`;

      /* Prepare chart data */
      const monthlyManual = annualManual / 12;
      const monthlyAuto = annualAuto / 12;
      roiChart.data.datasets[0].data = Array(12).fill(Math.round(monthlyManual));
      roiChart.data.datasets[1].data = Array.from({ length: 12 }, (_, i) =>
        Math.round(monthlyAuto + (implCost / 12))
      );
      roiChart.update();
    }

    /* Event listeners */
    Object.values(sliders).forEach(slider => slider.addEventListener('input', recalc));

    /* Initial computation */
    recalc();
  
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10 hue-rotate-15 blur-md"><iframe frameborder="0" height="100%" src="https://my.spline.design/untitled-f680ea749fc30deeb5eff5a8b15b2f63" width="100%"></iframe></div>

<header className="w-full z-20 sticky top-0 backdrop-blur-md/40 bg-black/40 border-b border-white/10 transition-all duration-700 ease-out" data-animate="" style={{}}>
<div className="max-w-7xl flex lg:px-12 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<svg className="transition-all duration-200 group-hover:scale-105 w-[32px] h-[32px]" fill="none" height="32" strokeWidth="2" style={{width: '32px', height: '32px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 28 40" width="32" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="bbGrad" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="white" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="#7c66a2"></stop>
</lineargradient>
</defs>
<rect className="" fill="url(#bbGrad)" height="40" rx="6" width="28"></rect>
<path className="" d="M7 10h14v4H7zM7 18h14v4H7zM7 26h14v4H7z" fill="white"></path>
</svg>
<span className="text-lg font-extrabold font-poppins" style={{}}>BIGBLOCK</span>
</a>

<nav aria-label="Main navigation" className="hidden md:flex items-center gap-10">
<a className="text-sm font-medium hover:text-teal-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded" href="#" style={{}}>Services</a>
<a className="text-sm font-medium hover:text-teal-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded" href="#" style={{}}>Process</a>
<a className="text-sm font-medium hover:text-teal-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded" href="#roi" style={{}}>ROI Calculator</a>
</nav>

<a className="relative inline-flex items-center justify-center overflow-hidden shadow-teal-500/40 hover:shadow-teal-400/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 text-sm font-medium bg-gradient-to-br from-[#18D4B2] to-[#093040]/60 rounded-none pt-3 pr-8 pb-3 pl-8 shadow" href="#" style={{}}>
        Call to Action
      </a>

<button className="md:hidden p-2 rounded hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300" style={{}}>
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</header>

<section className="relative isolate flex items-center justify-center text-center overflow-hidden transition-all duration-700 ease-out" data-animate="">
<div className="absolute inset-0 -z-10"></div><img alt="Abstract server racks and AI overlay" className="absolute inset-0 -z-10 h-full w-full opacity-25 md:opacity-40"/>
<div className="absolute inset-0 -z-10 relative"></div>
<div className="max-w-4xl md:py-48 flex flex-col gap-10 pt-32 pr-6 pb-32 pl-6 items-center">
<h1 className="text-[46px] md:text-6xl leading-tight text-5xl font-extrabold tracking-tight" style={{}}>AI Infrastructure &amp;
Automations</h1><p className="max-w-xl md:text-xl text-lg text-teal-600/80 mr-auto ml-auto" style={{}}>Automate your workflows, amplify your results.</p>
<div className="flex flex-col sm:flex-row gap-4 mt-8">
<a className="inline-flex items-center gap-2 shadow-teal-500/40 hover:-translate-y-0.5 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 text-sm font-medium bg-gradient-to-br from-[#18D4B2] to-[#093040]/60 rounded-none pt-4 pr-10 pb-4 pl-10 shadow" href="#" style={{}}>
          Book Your Free Consultation
          <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 hover:border-teal-400/60 hover:text-teal-300 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 text-sm font-medium border-white/20 border rounded-none pt-4 pr-10 pb-4 pl-10" href="#" style={{}}>
          Learn More
          <svg className="lucide lucide-info w-4 h-4" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</a>
</div>
</div>
</section>

<main className="max-w-7xl flex flex-col gap-20 mr-auto ml-auto pt-20 pr-4 pb-20 pl-4">

<div className="grid lg:grid-cols-2 gap-10">

<div className="relative flex flex-col md:flex-row rounded-2xl border border-white/20 overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/5 via-white/2 to-white/5 hover:border-teal-300/40 transition-all duration-300 duration-700 ease-out" data-animate="" style={{}}>
<div className="flex-1 flex flex-col gap-6 pt-12 pr-12 pb-12 pl-12 justify-center">
<h2 className="text-white text-[26px] tracking-tight leading-tight font-semibold" style={{}}>Seamless Integrations</h2>
<p className="text-sm leading-6 text-teal-600/80" style={{}}>Connect 500+ tools instantly to centralize data and eliminate silos.</p>
<a className="inline-flex items-center gap-2 self-start shadow-black/40 hover:shadow-teal-500/20 transition-all text-sm font-medium text-white bg-gradient-to-tr from-[#18D4B2] to-[#093040]/60 border-transparent border rounded-none pt-3 pr-8 pb-3 pl-8 shadow" href="#" style={{}}>
            Explore AI
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="relative md:w-72 h-60 md:h-auto flex-none overflow-hidden">
<img alt="Team collaborating with AI tools" className="absolute inset-0 w-full h-full mix-blend-screen opacity-90 object-cover grayscale" src="https://storage.googleapis.com/msgsndr/eTJrGCmGNjpLgwT5cueI/media/68760b04cd094524fa5eca48.png?w=800&amp;q=80"/>
</div>
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.25),transparent_60%)]"></div>
</div>

<div className="relative flex flex-col md:flex-row-reverse rounded-2xl border border-white/20 overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/5 via-white/2 to-white/5 hover:border-teal-300/40 transition-all duration-300 duration-700 ease-out" data-animate="" style={{}}>
<div className="flex-1 flex flex-col gap-6 pt-12 pr-12 pb-12 pl-12 justify-center">
<h2 className="text-white text-[26px] tracking-tight leading-tight font-semibold" style={{}}>Custom Automation</h2>
<p className="text-sm leading-6 text-teal-600/80" style={{}}>Tailor-made workflows that remove repetitive tasks and reduce errors.</p>
<a className="inline-flex items-center gap-2 self-start shadow-black/40 hover:shadow-teal-500/20 transition-all text-sm font-medium text-white bg-gradient-to-tr from-[#18D4B2] to-[#093040]/60 border-transparent border rounded pt-3 pr-8 pb-3 pl-8 shadow-lg" href="#" style={{}}>
            Explore AI
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="relative md:w-80 h-60 md:h-auto flex-none overflow-hidden">
<img alt="Automated robotic arm" className="absolute inset-0 w-full h-full mix-blend-color-dodge opacity-90 object-cover" src="https://storage.googleapis.com/msgsndr/eTJrGCmGNjpLgwT5cueI/media/68760b04cd09458fdb5eca47.jpeg?w=800&amp;q=80"/>
</div>
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,95,109,0.25),transparent_60%)]"></div>
</div>
</div>

<div className="relative flex flex-col md:flex-row rounded-2xl border border-white/20 overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/5 via-white/2 to-white/5 hover:border-teal-300/40 transition-all duration-300 duration-700 ease-out" data-animate="" style={{}}>
<div className="relative md:w-1/2 h-60 md:h-auto overflow-hidden">
<iframe allowfullscreen="" className="absolute inset-0 w-full h-full mix-blend-lighten opacity-90 object-cover grayscale" frameborder="0" loading="lazy" src="https://my.spline.design/nexbotrobotcharacterconcept-kLwr8f6hgKgaa5gmU6oB00Si" title="Developer working on AI-driven SaaS"></iframe>
</div><div className="flex-1 flex flex-col gap-6 pt-12 pr-12 pb-12 pl-12 justify-center">
<h2 className="text-white text-[26px] tracking-tight leading-tight font-semibold" style={{}}>AI-Driven SaaS Development</h2>
<p className="text-sm leading-6 text-teal-600/80" style={{}}>Launch intelligent applications faster with embedded AI assistants.</p>
<a className="inline-flex items-center gap-2 self-start shadow-black/40 hover:shadow-teal-500/20 transition-all text-sm font-medium text-white bg-gradient-to-tr from-[#18D4B2] to-[#093040]/60 border-transparent border rounded-none pt-3 pr-8 pb-3 pl-8 shadow" href="#" style={{}}>
          Explore AI
          <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="pointer-events-none absolute inset-0 scale-100"></div>
</div>
</main>

<section className="max-w-7xl flex flex-col gap-16 transition-all duration-700 ease-out mr-auto ml-auto pt-24 pr-4 pb-24 pl-4" data-animate="" id="roi">
<div className="max-w-3xl flex flex-col gap-6 text-center mr-auto ml-auto">
<h2 className="md:text-5xl text-4xl font-extrabold tracking-tight" style={{}}>Plug AI into your own data &amp;
over 500 integrations</h2>
</div>
</section><section className="max-w-7xl flex flex-col gap-16 transition-all duration-700 ease-out mr-auto ml-auto pt-24 pr-4 pb-24 pl-4" data-animate="" id="roi">
<div className="max-w-3xl flex flex-col gap-6 text-center mr-auto ml-auto">
<h2 className="md:text-5xl text-4xl font-extrabold tracking-tight" style={{}}>Our Process</h2>
</div>
<p className="text-lg text-teal-600/80 text-center px-40" style={{}}>Discover how BB Systems empowers your enterprise with tailored AI-driven automation solutions that streamline processes, enhance accuracy, and accelerate growth.</p></section><section className="max-w-[1460px] flex flex-col gap-10 mr-auto ml-auto pt-12 pr-4 pb-12 pl-4 items-start justify-center">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-full">
<div className="flex flex-col items-start bg-white/5 backdrop-blur-lg rounded-xl p-10 border border-white/10 hover:border-teal-400 transition w-full max-w-sm" style={{}}>
<svg className="lucide lucide-activity w-10 h-10 mb-6 text-teal-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
<h3 className="text-2xl font-medium tracking-tight mb-3" style={{}}>Intelligent Workflow Design</h3>
<p className="text-sm text-teal-600/80" style={{}}>Craft dynamic automations that adapt to your business logic, reducing manual intervention and boosting operational efficiency.</p>
</div>
<div className="flex flex-col items-start bg-white/5 backdrop-blur-lg rounded-xl p-10 border border-white/10 hover:border-teal-400 transition w-full max-w-sm" style={{}}>
<svg className="lucide lucide-cpu w-10 h-10 mb-6 text-teal-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" ry="2" width="16" x="4" y="4"></rect><rect height="6" width="6" x="9" y="9"></rect><line x1="9" x2="9" y1="1" y2="4"></line><line x1="15" x2="15" y1="1" y2="4"></line><line x1="9" x2="9" y1="20" y2="23"></line><line x1="15" x2="15" y1="20" y2="23"></line><line x1="20" x2="23" y1="9" y2="9"></line><line x1="20" x2="23" y1="14" y2="14"></line><line x1="1" x2="4" y1="9" y2="9"></line><line x1="1" x2="4" y1="14" y2="14"></line></svg>
<h3 className="text-2xl font-medium tracking-tight mb-3" style={{}}>Advanced AI Processing</h3>
<p className="text-sm text-teal-600/80" style={{}}>Leverage the power of AI to analyze data, predict trends, and make decisions that enhance your business outcomes.</p>
</div>
<div className="flex flex-col items-start bg-white/5 backdrop-blur-lg rounded-xl p-10 border border-white/10 hover:border-teal-400 transition w-full max-w-sm" style={{}}>
<svg className="lucide lucide-server w-10 h-10 mb-6 text-teal-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} xmlns="http://www.w3.org/2000/svg"><rect className="" height="20" rx="2" ry="2" width="20" x="2" y="2"></rect><line x1="6" x2="6" y1="6" y2="6"></line><line x1="18" x2="18" y1="6" y2="6"></line><line x1="6" x2="18" y1="10" y2="10"></line><line x1="6" x2="18" y1="14" y2="14"></line><line x1="6" x2="18" y1="18" y2="18"></line></svg>
<h3 className="text-2xl font-medium tracking-tight mb-3" style={{}}>Reliable Cloud Infrastructure</h3>
<p className="text-sm text-teal-600/80" style={{}}>Benefit from scalable, secure cloud environments that ensure your automation workflows run smoothly 24/7.</p>
</div>
<div className="flex flex-col items-start bg-white/5 backdrop-blur-lg rounded-xl p-10 border border-white/10 hover:border-teal-400 transition w-full max-w-sm" style={{}}>
<svg className="lucide lucide-users w-10 h-10 mb-6 text-teal-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-3-3.87"></path><path d="M9 21v-2a4 4 0 0 1 3-3.87"></path><circle cx="12" cy="7" r="4"></circle></svg>
<h3 className="text-2xl font-medium tracking-tight mb-3" style={{}}>Dedicated Support Team</h3>
<p className="text-sm text-teal-600/80" style={{}}>Our experts are available to assist with setup, customization, and ongoing optimization of your automation solutions.</p>
</div>
<div className="flex flex-col items-start bg-white/5 backdrop-blur-lg rounded-xl p-10 border border-white/10 hover:border-teal-400 transition w-full max-w-sm" style={{}}>
<svg className="lucide lucide-shield w-10 h-10 mb-6 text-teal-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
<h3 className="text-2xl font-medium tracking-tight mb-3" style={{}}>Enterprise-Grade Security</h3>
<p className="text-sm text-teal-600/80" style={{}}>Protect your data with industry-leading security protocols and compliance standards built into every automation.</p>
</div>
<div className="flex flex-col items-start bg-white/5 backdrop-blur-lg rounded-xl p-10 border border-white/10 hover:border-teal-400 transition w-full max-w-sm" style={{}}>
<svg className="lucide lucide-bar-chart-2 w-10 h-10 mb-6 text-teal-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="18" y1="20" y2="10"></line><line x1="12" x2="12" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="14"></line></svg>
<h3 className="text-2xl font-medium tracking-tight mb-3" style={{}}>Insightful Analytics</h3>
<p className="text-sm text-teal-600/80" style={{}}>Track performance and ROI with comprehensive dashboards and real-time reporting tailored to your goals.</p>
</div>
</div>
</section><section className="max-w-7xl flex flex-col gap-16 transition-all duration-700 ease-out mr-auto ml-auto pt-24 pr-4 pb-24 pl-4" data-animate="" id="roi">
<div className="text-center max-w-3xl mx-auto flex flex-col gap-6">
<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight" style={{}}>ROI Calculator</h2>
<p className="text-lg text-teal-600/80" style={{}}>Estimate your yearly savings and break-even point by automating repetitive tasks with BB Systems.</p>
</div>
<div className="grid md:grid-cols-2 gap-12">

<div className="flex flex-col gap-8">

<div className="">
<div className="flex items-center justify-between mb-3">
<label className="text-sm font-medium" htmlFor="hours" style={{}}>Manual hours per week</label>
<span className="text-sm font-semibold text-teal-300" id="hoursVal" style={{}}>20</span>
</div>
<input className="w-full h-2 rounded-full bg-white/20 accent-teal-400 cursor-pointer" id="hours" max="80" min="1" style={{}} type="range" value="20"/>
</div>
<div className="">
<div className="flex items-center justify-between mb-3">
<label className="text-sm font-medium" htmlFor="cost" style={{}}>Hourly cost ($)</label>
<span className="text-sm font-semibold text-teal-300" id="costVal" style={{}}>40</span>
</div>
<input className="w-full h-2 rounded-full bg-white/20 accent-teal-400 cursor-pointer" id="cost" max="150" min="5" style={{}} type="range" value="40"/>
</div>
<div className="">
<div className="flex items-center justify-between mb-3">
<label className="text-sm font-medium" htmlFor="savings" style={{}}>Automation savings (%)</label>
<span className="text-sm font-semibold text-teal-300" id="savingsVal" style={{}}>60</span>
</div>
<input className="w-full h-2 rounded-full bg-white/20 accent-teal-400 cursor-pointer" id="savings" max="100" min="10" step="5" style={{}} type="range" value="60"/>
</div>
<div className="">
<div className="flex items-center justify-between mb-3">
<label className="text-sm font-medium" htmlFor="impl" style={{}}>Implementation cost ($)</label>
<span className="text-sm font-semibold text-teal-300" id="implVal" style={{}}>10000</span>
</div>
<input className="w-full h-2 rounded-full bg-white/20 accent-teal-400 cursor-pointer" id="impl" max="50000" min="1000" step="500" style={{}} type="range" value="10000"/>
</div>
</div>

<div className="flex flex-col gap-10">

<div className="grid grid-cols-3 gap-4 text-center">
<div className="rounded-xl border border-white/15 p-6 backdrop-blur-md">
<p className="text-xs uppercase tracking-wide text-white/60" style={{}}>Annual Savings</p>
<p className="mt-2 text-xl font-semibold text-teal-300" id="annualSavings" style={{}}>$24,960</p>
</div>
<div className="rounded-xl border border-white/15 p-6 backdrop-blur-md">
<p className="text-xs uppercase tracking-wide text-white/60" style={{}}>Break-even (mo)</p>
<p className="mt-2 text-xl font-semibold text-teal-300" id="breakEven" style={{}}>5</p>
</div>
<div className="rounded-xl border border-white/15 p-6 backdrop-blur-md">
<p className="text-xs uppercase tracking-wide text-white/60" style={{}}>ROI %</p>
<p className="mt-2 text-xl font-semibold text-teal-300" id="roiPct" style={{}}>150%</p>
</div>
</div>

<div className="rounded-2xl border border-white/20 p-6 backdrop-blur-xl bg-gradient-to-br from-white/5 via-white/2 to-white/5" style={{}}>
<div className="h-72">
<div className="h-full">
<canvas className="" height="288" id="roiChart" style={{display: 'block', boxSizing: 'border-box', height: '288px', width: '550px'}} width="550"></canvas>
</div>
</div>
</div>
</div>
</div>
</section><section className="max-w-7xl flex flex-col gap-16 transition-all duration-700 ease-out mr-auto ml-auto pt-24 pr-4 pb-24 pl-4">
<div className="text-center max-w-3xl mx-auto flex flex-col gap-6">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight" style={{}}>Why Automate with BB Systems?</h2>
<p className="text-lg max-w-xl mx-auto text-teal-600/80" style={{}}>Leverage cutting-edge AI and seamless integrations to save time, reduce errors, and scale your business effortlessly.</p>
</div>
<div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
<div className="flex flex-col items-center bg-white/5 backdrop-blur-lg rounded-xl p-10 border border-white/10 hover:border-teal-400 transition" style={{}}>
<svg className="lucide lucide-clock w-10 h-10 mb-6 text-teal-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<h3 className="text-xl font-medium tracking-tight mb-2" style={{}}>Save Time</h3>
<p className="text-sm text-center text-teal-600/80" style={{}}>Automate repetitive tasks and regain 20+ hours per week for strategic work.</p>
</div>
<div className="flex flex-col items-center bg-white/5 backdrop-blur-lg rounded-xl p-10 border border-white/10 hover:border-teal-400 transition" style={{}}>
<svg className="lucide lucide-shield-check w-10 h-10 mb-6 text-teal-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} xmlns="http://www.w3.org/2000/svg"><path d="M9 12l2 2 4-4"></path><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"></path></svg>
<h3 className="text-xl font-medium tracking-tight mb-2" style={{}}>Reduce Errors</h3>
<p className="text-sm text-center text-teal-600/80" style={{}}>Minimize human error by automating complex workflows with precision.</p>
</div>
<div className="flex flex-col items-center bg-white/5 backdrop-blur-lg rounded-xl p-10 border border-white/10 hover:border-teal-400 transition" style={{}}>
<svg className="lucide lucide-trending-up w-10 h-10 mb-6 text-teal-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
<h3 className="text-xl font-medium tracking-tight mb-2" style={{}}>Scale Effortlessly</h3>
<p className="text-sm text-center text-teal-600/80" style={{}}>Expand your operations without increasing manual workload or overhead costs.</p>
</div>
</div>
</section><footer className="mt-24 w-full border-t border-white/10 pt-20 pb-12 px-4 lg:px-8 bg-gradient-to-b from-white/5/10 via-white/0 to-transparent" style={{}}>
<div className="max-w-7xl flex flex-col gap-16 mr-auto ml-auto">

<div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

<div className="flex-1 max-w-sm">
<div className="flex items-center gap-3">

<svg className="" fill="none" height="42" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '42px', height: '42px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="42" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-lg font-extrabold font-poppins" style={{}}>BIGBLOCK</span>
</div>
<p className="mt-6 text-sm leading-6 max-w-xs text-teal-600/80" style={{}}>
          Automate without limits. Build AI-driven workflows that super-charge your business and scale effortlessly.
        </p>

<div className="mt-10 flex gap-6">
<button aria-label="Twitter" className="p-2 rounded hover:bg-white/10 focus:outline-none" style={{}}>
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</button>
<button aria-label="GitHub" className="p-2 rounded hover:bg-white/10 focus:outline-none" style={{}}>
<svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</button>
<button aria-label="LinkedIn" className="p-2 rounded hover:bg-white/10 focus:outline-none" style={{}}>
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</button>
<button aria-label="Slack" className="p-2 rounded hover:bg-white/10 focus:outline-none" style={{}}>
<svg className="lucide lucide-slack w-5 h-5" data-lucide="slack" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="1.5" width="3" x="13" y="2"></rect><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path><rect height="8" rx="1.5" width="3" x="8" y="14"></rect><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path><rect height="3" rx="1.5" width="8" x="14" y="13"></rect><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path><rect height="3" rx="1.5" width="8" x="2" y="8"></rect><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path></svg>
</button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 flex-1 text-sm">

<div className="space-y-4">
<p className="font-semibold text-white tracking-tight" style={{}}>Company</p>
<ul className="space-y-2 text-white/70">
<li><a className="hover:text-teal-400" href="#" style={{}}>Careers</a></li>
<li className=""><a className="hover:text-teal-400" href="#" style={{}}>Contact</a></li>
<li className=""><a className="hover:text-teal-400" href="#" style={{}}>Press</a></li>
<li className=""><a className="hover:text-teal-400" href="#" style={{}}>Security</a></li>
</ul>
</div>

<div className="space-y-4">
<p className="font-semibold text-white tracking-tight" style={{}}>Resources</p>
<ul className="space-y-2 text-white/70">
<li className=""><a className="hover:text-teal-400" href="#" style={{}}>Case Studies</a></li>
<li className=""><a className="hover:text-teal-400" href="#" style={{}}>Docs</a></li>
<li><a className="hover:text-teal-400" href="#" style={{}}>Events</a></li>
<li className=""><a className="hover:text-teal-400" href="#" style={{}}>Blog</a></li>
</ul>
</div>

<div className="space-y-4">
<p className="font-semibold text-white tracking-tight" style={{}}>Compare</p>
<ul className="space-y-2 text-white/70">
<li><a className="hover:text-teal-400" href="#" style={{}}>Zapier vs BB</a></li>
<li><a className="hover:text-teal-400" href="#" style={{}}>Make vs BB</a></li>
<li className=""><a className="hover:text-teal-400" href="#" style={{}}>Self-host vs Cloud</a></li>
</ul>
</div>

<div className="space-y-4 hidden lg:block">
<p className="font-semibold text-white tracking-tight" style={{}}>Programs</p>
<ul className="space-y-2 text-white/70">
<li><a className="hover:text-teal-400" href="#" style={{}}>Affiliate</a></li>
<li><a className="hover:text-teal-400" href="#" style={{}}>Expert Partners</a></li>
<li><a className="hover:text-teal-400" href="#" style={{}}>User Testing</a></li>
</ul>
</div>
</div>
</div>

<div className="border-t border-white/10" style={{}}></div>

<div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/60">
<div className="flex flex-wrap gap-4">
<a className="hover:text-teal-400" href="#" style={{}}>Impressum</a>
<span className="opacity-30" style={{}}>|</span>
<a className="hover:text-teal-400" href="#" style={{}}>Legal</a>
<span className="opacity-30" style={{}}>|</span>
<a className="hover:text-teal-400" href="#" style={{}}>Privacy</a>
<span className="opacity-30" style={{}}>|</span>
<a className="hover:text-teal-400" href="#" style={{}}>Report a vulnerability</a>
</div>
<p className="whitespace-nowrap" style={{}}>© 2025 BB Systems · All rights reserved</p>
</div>
</div>
</footer>

<button aria-label="Scroll to top" className="fixed bottom-8 right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 shadow-lg text-teal-300" id="scrollToTop" style={{}}>
<svg className="lucide lucide-chevron-up w-5 h-5" data-lucide="chevron-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
</button>



    </>
  );
}
