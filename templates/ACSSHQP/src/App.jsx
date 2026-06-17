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

    // ROI Calculator
    const form = document.getElementById('roi-form');
    const result = document.getElementById('roi-result');
    const savingsValue = document.getElementById('savings-value');
    let roiChart;

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const emp = +form.emp.value || 1;
      const hours = +form.hours.value || 1;
      const rate = +form.rate.value || 10;
      // Assume avg 35% time saved with automation
      const saved = emp * hours * 52 * rate * 0.35;
      savingsValue.textContent = saved.toLocaleString();
      result.classList.remove('hidden');
      // Chart
      const ctx = document.getElementById('roiChart').getContext('2d');
      if (roiChart) roiChart.destroy();
      roiChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Saved', 'Remaining'],
          datasets: [{
            data: [saved, emp * hours * 52 * rate - saved],
            backgroundColor: ['#22d3ee', '#334155'],
            borderWidth: 0,
          }]
        },
        options: {
          cutout: '70%',
          plugins: { legend: {display: false} },
          responsive: false
        }
      });
    });

    // Contact Form (Demo)
    document.getElementById('lead-form').onsubmit = function(e){
      e.preventDefault();
      document.getElementById('lead-msg').textContent = "Thanks! We'll reach out within 1 business day.";
      this.reset();
    };
  
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/unchained-d3hHCgdWho7a8ATGzKtB11TU" width="100%"></iframe></div>

<header className="sticky top-0 z-30 border-b backdrop-blur bg-neutral-950/90 border-neutral-800" style={{}}>
<div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<span className="text-xl font-semibold tracking-tight font-sans">Connects</span>
</div>
<nav className="hidden md:flex items-center gap-7">
<a className="text-sm font-medium transition text-neutral-300 hover:text-indigo-400 font-sans" href="#services" style={{}}>Services</a>
<a className="text-sm font-medium transition text-neutral-300 hover:text-indigo-400 font-sans" href="#process" style={{}}>Process</a>
<a className="text-sm font-medium transition text-neutral-300 hover:text-indigo-400 font-sans" href="#benefits" style={{}}>Benefits</a>
<a className="text-sm font-medium transition text-neutral-300 hover:text-indigo-400 font-sans" href="#about" style={{}}>About</a>
<a className="ml-2 px-5 py-2 rounded-lg font-medium bg-gradient-to-tr to-blue-500 shadow hover:shadow-lg transition from-indigo-400 text-neutral-950 font-sans" href="#contact" style={{}}>Get Free Analysis</a>
</nav>
</div>
</header>

<section className="relative w-full lg:py-32 pt-20 pb-20">
<div className="max-w-7xl grid lg:grid-cols-2 gap-16 mr-auto ml-auto pr-4 pl-4 items-center">
<div className="">
<h1 className="md:text-5xl lg:text-6xl xl:text-7xl gradient-text text-4xl tracking-tight mb-5 font-sans font-semibold" style={{}}>Identify &amp; Eliminate Bottlenecks  <br className="hidden md:block"/><span className="text-indigo-300 font-sans font-semibold" style={{}}>Costing You Time &amp; Money</span></h1>
<p className="text-lg md:text-xl mb-7 max-w-xl font-normal text-neutral-200 font-sans" style={{}}>
          We analyze your business operations, pinpoint costly constraints, and implement automation to deliver measurable results—reduced costs, saved hours, and enhanced efficiency.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
<a className="cta-glow hover:scale-105 transition font-medium bg-gradient-to-tr to-blue-500 rounded-lg pt-3 pr-7 pb-3 pl-7 shadow-md text-neutral-950 from-indigo-400 font-sans" href="#contact" style={{}}>Get Your Free Bottleneck Analysis</a>
<a className="flex items-center gap-2 px-5 py-3 rounded-lg border transition font-medium border-indigo-400/60 text-indigo-300 hover:bg-neutral-900/40 font-sans" href="#roi" style={{}}>
<svg className="lucide lucide-calculator w-5 h-5" data-lucide="calculator" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg> Calculate Your Potential Savings
          </a>
</div>
<div className="flex items-center gap-6 mt-4">
<div>
<p className="text-2xl text-indigo-300 font-sans font-semibold" style={{}}>35%</p>
<p className="text-xs uppercase tracking-wider text-neutral-400 font-sans" style={{}}>Avg. Cost Reduction</p>
</div>
<div className="h-8 w-px mx-2 bg-neutral-800" style={{}}></div>
<div className="">
<p className="text-2xl text-indigo-300 font-sans font-semibold" style={{}}>1000+</p>
<p className="text-xs uppercase tracking-wider text-neutral-400 font-sans" style={{}}>Employee Hours Saved</p>
</div>
</div>
</div>

</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-20 pr-4 pb-20 pl-4" id="problem">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="">
<h2 className="text-3xl md:text-4xl tracking-tight mb-3 font-sans font-semibold" style={{}}>Is Your Business <span className="gradient-text font-sans font-semibold" style={{}}>Losing Money</span> to Bottlenecks?</h2>
<p className="mb-5 text-lg text-neutral-300 font-sans" style={{}}>Most B2B companies lose 15-25% of operational capacity to process delays, manual work, and system inefficiencies. These bottlenecks go unnoticed but cost you thousands each month.</p>
<ul className="space-y-2 ml-2 text-base text-neutral-400" style={{}}>
<li className="flex gap-2 items-center font-sans"><svg className="lucide lucide-arrow-right-circle w-5 h-5 text-cyan-300" data-lucide="arrow-right-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m12 16 4-4-4-4"></path><path d="M8 12h8"></path></svg> Sales stuck in CRM limbo</li>
<li className="flex gap-2 items-center font-sans"><svg className="lucide lucide-arrow-right-circle w-5 h-5 text-cyan-300" data-lucide="arrow-right-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m12 16 4-4-4-4"></path><path d="M8 12h8"></path></svg> Customer service backlogs &amp; manual tickets</li>
<li className="flex gap-2 items-center font-sans"><svg className="lucide lucide-arrow-right-circle w-5 h-5 text-cyan-300" data-lucide="arrow-right-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m12 16 4-4-4-4"></path><path d="M8 12h8"></path></svg> Data entry, reporting &amp; invoice delays</li>
<li className="flex gap-2 items-center font-sans"><svg className="lucide lucide-arrow-right-circle w-5 h-5 text-cyan-300" data-lucide="arrow-right-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m12 16 4-4-4-4"></path><path d="M8 12h8"></path></svg> HR, admin, and inventory slowdowns</li>
</ul>
</div>
<div className="relative glass flex flex-col rounded-2xl pt-8 pr-8 pb-8 pl-8 items-center">
<svg className="lucide lucide-alert-circle w-10 h-10 mb-2 text-rose-400" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
<p className="text-xl font-semibold mb-2 text-neutral-100 font-sans" style={{}}>Did you know?</p>
<p className="mb-3 text-neutral-300 font-sans" style={{}}>The average business loses <span className="font-medium text-indigo-300 font-sans" style={{}}>up to 22% of payroll</span> to process bottlenecks and manual work.</p>
<div className="mt-5 rounded-xl p-4 w-full text-center bg-neutral-800/60" style={{}}>
<span className="font-semibold text-lg text-indigo-300 font-sans" style={{}}>Uncover your hidden costs.<br/>Start your free bottleneck assessment.</span>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 py-20" id="services">
<h2 className="text-3xl md:text-4xl tracking-tight mb-10 text-center font-sans font-semibold" style={{}}>Our Services</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="glass feature-card card-hover flex flex-col rounded-2xl pt-7 pr-7 pb-7 pl-7 items-start">
<svg className="lucide lucide-search w-8 h-8 mb-2 text-cyan-300" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<h3 className="text-lg font-semibold tracking-tight mb-1 font-sans">Bottleneck Analysis &amp; Identification</h3>
<p className="text-sm mb-2 text-neutral-300 font-sans" style={{}}>We map your workflows, measure impact, and reveal hidden constraints.</p>
<span className="text-xs text-neutral-400 font-sans" style={{}}>Process mapping, data analysis, reporting</span>
</div>
<div className="glass rounded-2xl p-7 feature-card card-hover flex flex-col items-start">
<svg className="lucide lucide-zap w-8 h-8 mb-2 text-emerald-300" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<h3 className="font-semibold text-lg tracking-tight mb-1 font-sans">Process Optimization &amp; Automation</h3>
<p className="text-sm mb-2 text-neutral-300 font-sans" style={{}}>Automate manual work, integrate tools, and streamline operations.</p>
<span className="text-xs text-neutral-400 font-sans" style={{}}>Workflow automation, AI, RPA, integrations</span>
</div>
<div className="glass rounded-2xl p-7 feature-card card-hover flex flex-col items-start">
<svg className="lucide lucide-database w-8 h-8 mb-2 text-indigo-300" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
<h3 className="font-semibold text-lg tracking-tight mb-1 font-sans">CRM Integration &amp; Optimization</h3>
<p className="text-sm mb-2 text-neutral-300 font-sans" style={{}}>Eliminate CRM data silos, duplicates &amp; sales process delays.</p>
<span className="text-xs text-neutral-400 font-sans" style={{}}>CRM setup, automation, deduplication</span>
</div>
</div>
<div className="divider my-10"></div>
<div className="grid md:grid-cols-2 gap-8">
<div className="glass rounded-2xl p-7 feature-card card-hover flex flex-col items-start">
<svg className="lucide lucide-workflow w-8 h-8 mb-2 text-fuchsia-300" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
<h3 className="font-semibold text-lg tracking-tight mb-1 font-sans">Workflow Automation</h3>
<p className="text-sm mb-2 text-neutral-300 font-sans" style={{}}>Connect systems for seamless, error-free operations.</p>
<span className="text-xs text-neutral-400 font-sans" style={{}}>APIs, connectors, triggers</span>
</div>
<div className="glass rounded-2xl p-7 feature-card card-hover flex flex-col items-start">
<svg className="lucide lucide-trending-down w-8 h-8 mb-2 text-rose-300" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
<h3 className="font-semibold text-lg tracking-tight mb-1 font-sans">Cost Reduction Consulting</h3>
<p className="text-sm mb-2 text-neutral-300 font-sans" style={{}}>Strategic advice to maximize savings and ROI.</p>
<span className="text-xs text-neutral-400 font-sans" style={{}}>ROI modeling, performance tracking</span>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 py-20" id="process">
<h2 className="text-3xl md:text-4xl tracking-tight mb-10 text-center font-sans font-semibold" style={{}}>Our Process: From Bottleneck to Competitive Edge</h2>
<div className="grid md:grid-cols-4 gap-6 text-center">
<div>
<div className="flex items-center justify-center mb-3">
<div className="w-12 h-12 rounded-full flex items-center justify-center border bg-indigo-700/10 border-indigo-400/30" style={{}}>
<svg className="lucide lucide-compass w-7 h-7 text-cyan-300" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
</div>
<h4 className="font-medium tracking-tight mb-1 font-sans">1. Discovery</h4>
<p className="text-xs text-neutral-400 font-sans" style={{}}>Deep-dive into your business and goals.</p>
<div className="step-line mx-auto"></div>
</div>
<div className="">
<div className="flex items-center justify-center mb-3">
<div className="w-12 h-12 rounded-full flex items-center justify-center border bg-blue-700/10 border-blue-400/30" style={{}}>
<svg className="lucide lucide-search-check w-7 h-7 text-blue-300" data-lucide="search-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 11 2 2 4-4"></path><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</div>
</div>
<h4 className="font-medium tracking-tight mb-1 font-sans">2. Analysis</h4>
<p className="text-xs text-neutral-400 font-sans" style={{}}>Map, measure, and prioritize constraints.</p>
<div className="step-line mx-auto"></div>
</div>
<div className="">
<div className="flex items-center justify-center mb-3">
<div className="w-12 h-12 rounded-full flex items-center justify-center border bg-blue-700/10 border-blue-400/30" style={{}}>
<svg className="lucide lucide-cpu w-7 h-7 text-emerald-300" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
</div>
<h4 className="font-medium tracking-tight mb-1 font-sans">3. Optimization</h4>
<p className="text-xs text-neutral-400 font-sans" style={{}}>Develop and deploy automation solutions.</p>
<div className="step-line mx-auto"></div>
</div>
<div className="">
<div className="flex items-center justify-center mb-3">
<div className="w-12 h-12 rounded-full flex items-center justify-center border bg-blue-700/10 border-blue-400/30" style={{}}>
<svg className="lucide lucide-trending-up w-7 h-7 text-indigo-300" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
</div>
<h4 className="font-medium tracking-tight mb-1 font-sans">4. Enhancement</h4>
<p className="text-xs text-neutral-400 font-sans" style={{}}>Document results. Monitor and scale impact.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 py-20" id="benefits">
<h2 className="text-3xl md:text-4xl tracking-tight mb-10 text-center font-sans font-semibold" style={{}}>Results You Can Measure</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="glass rounded-2xl p-7 feature-card card-hover flex flex-col items-center text-center">
<svg className="lucide lucide-clock w-8 h-8 mb-2 text-cyan-300" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<h3 className="font-semibold text-lg tracking-tight mb-1 font-sans">Employee Hour Savings</h3>
<p className="text-sm text-neutral-300 font-sans" style={{}}>Reduce manual work by up to <span className="font-medium text-indigo-300 font-sans" style={{}}>50%</span> and repurpose your team's time.</p>
</div>
<div className="glass rounded-2xl p-7 feature-card card-hover flex flex-col items-center text-center">
<svg className="lucide lucide-dollar-sign w-8 h-8 mb-2 text-emerald-300" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
<h3 className="font-semibold text-lg tracking-tight mb-1 font-sans">Cost Reduction</h3>
<p className="text-sm text-neutral-300 font-sans" style={{}}>Achieve <span className="font-medium text-indigo-300 font-sans" style={{}}>10-40% reduction</span> in operational costs with targeted automation.</p>
</div>
<div className="glass rounded-2xl p-7 feature-card card-hover flex flex-col items-center text-center">
<svg className="lucide lucide-activity w-8 h-8 mb-2 text-indigo-300" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<h3 className="font-semibold text-lg tracking-tight mb-1 font-sans">Enhanced Efficiency</h3>
<p className="text-sm text-neutral-300 font-sans" style={{}}>Smoother workflows, faster processes, and fewer errors across your business.</p>
</div>
</div>
<div className="mt-14 flex flex-col md:flex-row gap-10 items-center justify-center">
<div className="w-full max-w-sm glass rounded-2xl p-8 flex flex-col items-center">
<h4 className="font-semibold mb-2 text-lg tracking-tight font-sans">ROI Calculator</h4>
<p className="text-xs mb-4 text-neutral-400 font-sans" style={{}}>Estimate your annual savings from automation</p>
<form className="w-full space-y-3" id="roi-form">
<div className="">
<label className="block text-xs mb-1 text-neutral-400 font-sans" htmlFor="emp" style={{}}>Employees in process</label>
<input className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none bg-neutral-900 border-neutral-700 text-neutral-100" id="emp" max="1000" min="1" style={{}} type="number" value="10"/>
</div>
<div className="">
<label className="block text-xs mb-1 text-neutral-400 font-sans" htmlFor="hours" style={{}}>Hours per employee/week</label>
<input className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none bg-neutral-900 border-neutral-700 text-neutral-100" id="hours" max="60" min="1" style={{}} type="number" value="10"/>
</div>
<div className="">
<label className="block text-xs mb-1 text-neutral-400 font-sans" htmlFor="rate" style={{}}>Avg. hourly wage ($)</label>
<input className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none bg-neutral-900 border-neutral-700 text-neutral-100" id="rate" max="500" min="10" style={{}} type="number" value="30"/>
</div>
<div className="pt-1">
<button className="w-full py-2 rounded-lg bg-gradient-to-tr to-blue-500 font-medium shadow hover:scale-105 transition from-indigo-400 text-neutral-950 font-sans" style={{}} type="submit">Calculate Savings</button>
</div>
</form>
<div className="w-full text-center mt-5 hidden" id="roi-result">
<div className="text-2xl mb-1 text-indigo-300 font-sans font-semibold" style={{}}>$<span className="font-sans font-semibold" id="savings-value" style={{}}>0</span></div>
<div className="text-xs text-neutral-400 font-sans" style={{}}>Estimated annual savings</div>
<canvas className="mt-2" height="80" id="roiChart"></canvas>
</div>
</div>
<div className="w-full max-w-lg">
<div className="glass rounded-2xl p-8 text-center flex flex-col justify-center h-full">
<h4 className="font-semibold mb-2 text-lg tracking-tight font-sans">Before &amp; After: Real Impact</h4>
<div className="flex flex-col sm:flex-row gap-8 items-center justify-center mt-4">
<div>
<span className="text-xs text-neutral-400 font-sans" style={{}}>Before</span>
<div className="text-2xl text-blue-300 font-sans font-semibold" style={{}}>8+ days</div>
<div className="text-xs text-neutral-400 font-sans" style={{}}>Invoice Processing</div>
</div>
<svg className="lucide lucide-arrow-right w-6 h-6 text-cyan-300" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<div>
<span className="text-xs text-neutral-400 font-sans" style={{}}>After</span>
<div className="text-2xl text-blue-300 font-sans font-semibold" style={{}}>1 day</div>
<div className="text-xs text-neutral-400 font-sans" style={{}}>Automated Workflow</div>
</div>
</div>
<div className="mt-6">
<a className="font-medium hover:underline transition text-indigo-300 font-sans" href="#contact" style={{}}>See more case studies</a>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 py-20" id="about">
<h2 className="text-3xl md:text-4xl tracking-tight mb-8 text-center font-sans font-semibold" style={{}}>Meet Your Optimization Team</h2>
<div className="flex flex-col md:flex-row gap-8 justify-center items-center">
<div className="glass rounded-2xl p-7 flex-1 flex gap-6 items-center max-w-md w-full card-hover">
<div className="flex-shrink-0">
<svg className="lucide lucide-code w-12 h-12 text-blue-400" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-semibold tracking-tight font-sans">Kazem – Software Developer</h3>
<p className="text-sm mb-1 text-neutral-300 font-sans" style={{}}>Technical implementation, automation, and integration expertise to turn insights into action.</p>
<span className="text-xs text-neutral-400 font-sans" style={{}}>Process automation, custom apps, system connectors</span>
</div>
</div>
<div className="glass rounded-2xl p-7 flex-1 flex gap-6 items-center max-w-md w-full card-hover">
<div className="flex-shrink-0">
<svg className="lucide lucide-layout-dashboard w-12 h-12 text-cyan-400" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
</div>
<div className="">
<h3 className="text-lg font-semibold tracking-tight font-sans">Amr – CRM Analyst</h3>
<p className="text-sm mb-1 text-neutral-300 font-sans" style={{}}>Process analysis, workflow design, and CRM optimization for maximum operational clarity.</p>
<span className="text-xs text-neutral-400 font-sans" style={{}}>CRM strategy, reporting, team enablement</span>
</div>
</div>
</div>
</section>

<section className="w-full border-y pt-16 pb-16 border-neutral-800" style={{}}>
<div className="max-w-3xl mx-auto px-4 text-center flex flex-col items-center">
<h2 className="text-2xl md:text-3xl tracking-tight mb-5 font-sans font-semibold" style={{}}>Ready to <span className="gradient-text font-sans font-semibold" style={{}}>Turn Bottlenecks Into Advantages?</span></h2>
<p className="mb-7 text-neutral-300 font-sans" style={{}}>Get a free, no-obligation bottleneck assessment and see how much your business could save with automation.</p>
<a className="px-8 py-3 rounded-lg font-medium bg-gradient-to-tr to-blue-500 shadow-lg cta-glow hover:scale-105 transition from-indigo-400 text-neutral-950 font-sans" href="#contact" style={{}}>Get Your Free Analysis</a>
<div className="mt-6 flex flex-col md:flex-row gap-4 items-center justify-center">
<a className="flex items-center gap-2 font-medium hover:underline text-indigo-300 font-sans" href="#roi" style={{}}><svg className="lucide lucide-calculator w-5 h-5" data-lucide="calculator" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg> Calculate Your Savings</a>
<a className="flex items-center gap-2 font-medium hover:underline text-neutral-400 hover:text-indigo-300 font-sans" href="#contact" style={{}}><svg className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> Schedule Consultation</a>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 py-20" id="contact">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="">
<h2 className="text-3xl md:text-4xl tracking-tight mb-4 font-sans font-semibold" style={{}}>Get Started With a <span className="gradient-text font-sans font-semibold" style={{}}>Free Bottleneck Assessment</span></h2>
<p className="mb-4 text-neutral-300 font-sans" style={{}}>We’ll analyze your process, uncover your biggest constraints, and deliver a personalized improvement plan—free.</p>
<ul className="text-sm space-y-1 ml-2 mb-3 text-neutral-400" style={{}}>
<li className="font-sans">✓ No obligation, no pressure</li>
<li className="font-sans">✓ Actionable report delivered in 3 days</li>
<li className="font-sans">✓ 100% confidential</li>
</ul>
<div className="mt-6 flex gap-3">
<a className="px-5 py-2 rounded-lg border transition font-medium border-indigo-400/60 text-indigo-300 hover:bg-neutral-900/40 font-sans" href="#roi" style={{}}>Calculate Your Savings</a>
</div>
</div>
<form autocomplete="off" className="glass rounded-2xl p-8 max-w-md w-full mx-auto shadow" id="lead-form">
<h4 className="font-semibold mb-3 text-lg tracking-tight font-sans">Request Your Free Analysis</h4>
<div className="mb-3">
<label className="block text-xs mb-1 text-neutral-400 font-sans" htmlFor="name" style={{}}>Full Name</label>
<input className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none bg-neutral-900 border-neutral-700 text-neutral-100" id="name" required="" style={{}} type="text"/>
</div>
<div className="mb-3">
<label className="block text-xs mb-1 text-neutral-400 font-sans" htmlFor="email" style={{}}>Business Email</label>
<input className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none bg-neutral-900 border-neutral-700 text-neutral-100" id="email" required="" style={{}} type="email"/>
</div>
<div className="mb-3">
<label className="block text-xs mb-1 text-neutral-400 font-sans" htmlFor="company" style={{}}>Company Name</label>
<input className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none bg-neutral-900 border-neutral-700 text-neutral-100" id="company" required="" style={{}} type="text"/>
</div>
<div className="mb-4">
<label className="block text-xs mb-1 text-neutral-400 font-sans" htmlFor="message" style={{}}>Biggest operational challenge?</label>
<textarea className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none bg-neutral-900 border-neutral-700 text-neutral-100" id="message" rows="2" style={{}}></textarea>
</div>
<button className="w-full py-2 rounded-lg bg-gradient-to-tr to-blue-500 font-medium shadow hover:scale-105 transition from-indigo-400 text-neutral-950 font-sans" style={{}} type="submit">Request Assessment</button>
<div className="mt-3 text-xs text-center" id="lead-msg"></div>
</form>
</div>
</section>

<footer className="border-t py-8 bg-neutral-950 border-neutral-800" style={{}}>
<div className="max-w-7xl flex flex-col md:flex-row gap-6 mr-auto ml-auto pr-4 pl-4 items-center justify-between">
<div className="flex gap-3 items-center">
<span className="font-medium text-neutral-200 font-sans" style={{}}>Connects</span>
</div>
<div className="flex gap-4 items-center justify-center">
<a className="transition text-neutral-400 hover:text-indigo-400" href="#" style={{}}></a>
<a className="transition text-neutral-400 hover:text-indigo-400" href="#" style={{}}></a>
</div>
<div className="md:mt-0 text-xs text-neutral-500 mt-2 font-sans" style={{}}>© 2024 Connects. All rights reserved.</div>
</div>
</footer>


    </>
  );
}
