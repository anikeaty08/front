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



    lucide.createIcons()

    // Calculator Logic
    const btn  = document.getElementById('calcBtn')
    const out  = document.getElementById('savings')
    let chart
    const ctx = document.getElementById('savingsChart')
    btn.addEventListener('click', () => {
      const emp   = +document.getElementById('employees').value || 0
      const hours = +document.getElementById('hours').value || 0
      const annualHours = emp * hours * 52
      const savings = Math.round(annualHours * 0.3 * 20)
      out.textContent = '$' + savings.toLocaleString()
      if (chart) chart.destroy()
      chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Saved', 'Remaining Spend'],
          datasets: [{
            data: [savings, Math.max(1, savings / 0.3 - savings)],
            backgroundColor: ['#34d399', '#1f2937']
          }]
        },
        options: { plugins: { legend: { display: false } } }
      })
    })

    // PARALLAX BACKGROUND MOTION
    const bg = document.getElementById('parallax-bg')
    window.addEventListener('mousemove', e => {
      const x = (e.clientX / window.innerWidth  - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      bg.style.transform = `translate(${x}px, ${y}px) scale(1.1)`
    })
  
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

<div className="pointer-events-none fixed inset-0 -z-30 bg-[url('https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?auto=format&amp;fit=crop&amp;w=2100&amp;q=80')] bg-cover bg-center opacity-20" id="parallax-bg" style={{transform: 'translate(-4.43939px, -9.978px) scale(1.1)'}}>
</div>

<div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(#10b9810d_1px,transparent_1px)] [background-size:40px_40px]"></div>

<section className="relative overflow-hidden pt-24 pb-32">
<div className="absolute inset-0 -z-10">
<div className="w-[120%] h-[120%] -left-10 -top-10 absolute bg-gradient-to-tr via-cyan-500/10 blur-3xl from-neutral-400/10 to-cyan-600/10" style={{}}></div>
</div>
<div className="max-w-6xl mx-auto px-6 text-center space-y-8">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight bg-gradient-to-r bg-clip-text text-transparent animate-pulse from-neutral-400 to-cyan-400" style={{}}>Reinvent Your Operations with AI-Powered Automation.</h1>
<p className="text-lg md:text-xl max-w-2xl mx-auto text-indigo-300" style={{}}>Cut costs by up to 30% using no-code workflows, fast.</p>
<button className="relative inline-flex items-center gap-2 px-8 py-4 bg-neutral-500/20 hover:bg-neutral-500/30 transition-colors rounded-xl backdrop-blur-md border shadow-lg ring-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/60 border-neutral-400/30 ring-neutral-400/20" style={{}}>
<span className="font-medium text-neutral-200" style={{}}>Book a Free Automation Audit</span>
<svg className="lucide lucide-arrow-right w-5 h-5 text-emerald-200" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24 space-y-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">What We Automate</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative p-8 backdrop-blur-lg rounded-2xl border transition-all bg-white/5 border-white/10 hover:border-neutral-400/40" style={{}}>
<svg className="lucide lucide-workflow w-8 h-8 mb-6 text-emerald-400" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
<h3 className="text-xl font-medium mb-2">CRM Workflow Automation</h3>
<p className="text-indigo-400" style={{}}>Trigger, update, and nurture leads without lifting a finger.</p>
<span className="absolute inset-0 group-hover:bg-neutral-400/5 transition-colors bg-neutral-400/0 rounded-2xl" style={{}}></span>
</div>
<div className="group relative p-8 backdrop-blur-lg rounded-2xl border transition-all bg-white/5 border-white/10 hover:border-neutral-400/40" style={{}}>
<svg className="lucide lucide-zap w-8 h-8 mb-6 text-emerald-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<h3 className="text-xl font-medium mb-2">No-Code Integrations</h3>
<p className="text-indigo-400" style={{}}>Connect your favorite tools in minutes—no dev team required.</p>
<span className="absolute inset-0 rounded-2xl group-hover:bg-neutral-400/5 transition-colors bg-neutral-400/0" style={{}}></span>
</div>
<div className="group relative p-8 backdrop-blur-lg rounded-2xl border transition-all bg-white/5 border-white/10 hover:border-neutral-400/40" style={{}}>
<svg className="lucide lucide-cpu w-8 h-8 mb-6 text-emerald-400" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<h3 className="text-xl font-medium mb-2">Robotic Process Automation</h3>
<p className="text-indigo-400" style={{}}>Delegate repetitive tasks to reliable digital coworkers.</p>
<span className="absolute inset-0 rounded-2xl group-hover:bg-neutral-400/5 transition-colors bg-neutral-400/0" style={{}}></span>
</div>
<div className="group relative p-8 backdrop-blur-lg rounded-2xl border transition-all bg-white/5 border-white/10 hover:border-neutral-400/40" style={{}}>
<svg className="lucide lucide-bar-chart-3 w-8 h-8 mb-6 text-emerald-400" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<h3 className="text-xl font-medium mb-2">Dashboard &amp; Reporting</h3>
<p className="text-indigo-400" style={{}}>Real-time insights with zero spreadsheet hassle.</p>
<span className="absolute inset-0 rounded-2xl group-hover:bg-neutral-400/5 transition-colors bg-neutral-400/0" style={{}}></span>
</div>
<div className="group relative p-8 backdrop-blur-lg rounded-2xl border transition-all bg-white/5 border-white/10 hover:border-neutral-400/40" style={{}}>
<svg className="lucide lucide-package-check w-8 h-8 mb-6 text-emerald-400" data-lucide="package-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 16 2 2 4-4"></path><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path><path d="m7.5 4.27 9 5.15"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" x2="12" y1="22" y2="12"></line></svg>
<h3 className="text-xl font-medium mb-2">Inventory / Order Automation</h3>
<p className="text-indigo-400" style={{}}>Sync stock levels and orders across every system.</p>
<span className="absolute inset-0 rounded-2xl group-hover:bg-neutral-400/5 transition-colors bg-neutral-400/0" style={{}}></span>
</div>
</div>
</section>

<section className="relative overflow-hidden">
<div className="max-w-6xl mx-auto px-6 py-24">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16">Our Process</h2>
<ol className="relative border-l border-neutral-500/40 space-y-12" style={{}}>
<li className="ml-6">
<span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full ring-2 bg-neutral-400/30 ring-neutral-400/60" style={{}}></span>
<h3 className="text-xl font-medium">Discovery</h3>
<p className="mt-2 text-indigo-400" style={{}}>We uncover bottlenecks, goals, and quick-win opportunities.</p>
</li>
<li className="ml-6">
<span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full ring-2 bg-neutral-400/30 ring-neutral-400/60" style={{}}></span>
<h3 className="text-xl font-medium">Process Mapping</h3>
<p className="mt-2 text-indigo-400" style={{}}>Visualize every workflow and interaction for transparency.</p>
</li>
<li className="ml-6">
<span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full ring-2 bg-neutral-400/30 ring-neutral-400/60" style={{}}></span>
<h3 className="text-xl font-medium">Tool Selection</h3>
<p className="mt-2 text-indigo-400" style={{}}>We choose the best no-code and AI stack for your needs.</p>
</li>
<li className="ml-6">
<span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full ring-2 bg-neutral-400/30 ring-neutral-400/60" style={{}}></span>
<h3 className="text-xl font-medium">Automation Build</h3>
<p className="mt-2 text-indigo-400" style={{}}>Rapid implementation with rigorous QA and security checks.</p>
</li>
<li className="ml-6">
<span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full ring-2 bg-neutral-400/30 ring-neutral-400/60" style={{}}></span>
<h3 className="text-xl font-medium">Ongoing Optimization</h3>
<p className="mt-2 text-indigo-400" style={{}}>Continuous improvements, metrics tracking, and support.</p>
</li>
</ol>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24 space-y-16">
<div className="text-center space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">How Much Can Automation Save You?</h2>
<p className="max-w-2xl mx-auto text-indigo-400" style={{}}>Estimate annual savings in seconds.</p>
</div>
<div className="grid lg:grid-cols-2 gap-12">

<form className="space-y-6" id="calcForm">
<div className="">
<label className="block mb-2 text-sm"># of Employees</label>
<input className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-400/60 bg-white/5 border-white/10" id="employees" placeholder="50" style={{}} type="number"/>
</div>
<div className="">
<label className="block mb-2 text-sm">Manual Hours per Employee per Week</label>
<input className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-400/60 bg-white/5 border-white/10" id="hours" placeholder="10" style={{}} type="number"/>
</div>
<div className="">
<label className="block mb-2 text-sm">Current CRM / Tool</label>
<input className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-400/60 bg-white/5 border-white/10" id="tool" placeholder="HubSpot" style={{}} type="text"/>
</div>
<button className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-neutral-500/20 hover:bg-neutral-500/30 rounded-lg border backdrop-blur-md border-neutral-400/20" id="calcBtn" style={{}} type="button">
          Calculate Savings
          <svg className="lucide lucide-calculator w-5 h-5" data-lucide="calculator" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
</button>
</form>

<div className="flex flex-col items-center justify-center space-y-8">
<div className="w-full rounded-2xl border p-10 text-center bg-white/5 border-white/10" id="resultBox">
<p className="mb-4 text-indigo-400" style={{}}>Estimated Annual Savings</p>
<span className="text-5xl font-semibold tracking-tight text-neutral-400" id="savings" style={{}}>$0</span>
</div>
<div className="w-full max-w-md">
<div><canvas height="200" id="savingsChart"></canvas></div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24 space-y-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">2 Experts. 1 Mission. Endless Efficiency.</h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="border backdrop-blur-lg rounded-2xl p-8 flex items-center gap-6 bg-white/5 border-white/10">
<img alt="Founder" className="w-24 h-24 rounded-full object-cover ring-2 ring-neutral-400/60" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&amp;fit=crop&amp;w=200&amp;q=80" style={{}}/>
<div className="">
<h3 className="text-xl font-medium">Alex Rivera</h3>
<p className="mb-2 text-neutral-400" style={{}}>Software Engineer</p>
<p className="text-indigo-400" style={{}}>10+ years building scalable SaaS platforms &amp; automation scripts.</p>
</div>
</div>

<div className="border backdrop-blur-lg rounded-2xl p-8 flex items-center gap-6 bg-white/5 border-white/10">
<img alt="Founder" className="w-24 h-24 rounded-full object-cover ring-2 ring-neutral-400/60" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" style={{}}/>
<div>
<h3 className="text-xl font-medium">Jamie Chen</h3>
<p className="mb-2 text-neutral-400" style={{}}>CRM Analyst</p>
<p className="text-indigo-400" style={{}}>Specialist in CRM architecture, data migrations, and process design.</p>
</div>
</div>
</div>
</section>


<footer className="backdrop-blur-lg border-t py-16 px-6 bg-white/5 border-white/10">
<div className="max-w-4xl mx-auto text-center space-y-8">
<h2 className="text-3xl font-semibold tracking-tight">Ready to Start Automating?</h2>
<p className="max-w-xl mx-auto text-indigo-400" style={{}}>Book a free, no-obligation call with our automation experts.</p>
<form className="flex flex-col sm:flex-row justify-center gap-4">
<input className="w-full sm:w-auto rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-400/60 bg-indigo-900/60 border-white/10" placeholder="your@company.com" style={{}} type="email"/>
<button className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-500/20 hover:bg-neutral-500/30 rounded-lg border backdrop-blur-md border-neutral-400/20" style={{}}>
          Talk to an Expert
          <svg className="lucide lucide-send w-5 h-5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</form>
<p className="text-sm text-indigo-600/60" style={{}}>© 2024 Automation Startup. All rights reserved.</p>
</div>
</footer>



    </>
  );
}
