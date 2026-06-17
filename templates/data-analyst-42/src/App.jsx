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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-sm font-semibold tracking-tighter uppercase" href="#">Sunny Singh<span className="text-zinc-400">.</span></a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#about">About</a>
<a className="hover:text-zinc-900 transition-colors" href="#expertise">Expertise</a>
<a className="hover:text-zinc-900 transition-colors" href="#work">Work</a>
<a className="hover:text-zinc-900 transition-colors" href="#contact">Contact</a>
</div>
<a className="px-4 py-2 text-xs font-medium bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-colors" href="#contact">
                Get in touch
            </a>
</div>
</nav>

<section className="pt-32 pb-24 md:pt-48 md:pb-32 px-6">
<div className="max-w-5xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-100 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-500"></span>
</span>
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Based in Bangalore</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.1] mb-8 text-zinc-900">
                Translating raw data into <br className="hidden md:block"/>
<span className="text-zinc-400">business intelligence.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl leading-relaxed font-light mb-12">
                Senior Data Analyst with 6+ years of experience transforming complex datasets into actionable strategic insights. Passionate about predictive modeling and visualization.
            </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
<div className="flex items-center gap-4">
<div className="flex -space-x-2">

<div className="w-8 h-8 rounded-full bg-zinc-100 border border-white flex items-center justify-center text-[10px] text-zinc-500">PY</div>
<div className="w-8 h-8 rounded-full bg-zinc-100 border border-white flex items-center justify-center text-[10px] text-zinc-500">SQL</div>
<div className="w-8 h-8 rounded-full bg-zinc-100 border border-white flex items-center justify-center text-[10px] text-zinc-500">TB</div>
</div>
<span className="text-sm text-zinc-500 font-medium">Core Stack</span>
</div>
<div className="h-px w-8 bg-zinc-200 hidden sm:block"></div>
<div className="flex gap-6">
<div>
<span className="block text-2xl font-semibold tracking-tight text-zinc-900">6+</span>
<span className="text-xs text-zinc-500 uppercase tracking-wide">Years Exp.</span>
</div>
<div>
<span className="block text-2xl font-semibold tracking-tight text-zinc-900">50+</span>
<span className="text-xs text-zinc-500 uppercase tracking-wide">Projects</span>
</div>
</div>
</div>
</div>
</section>
<div className="w-full h-px bg-zinc-100"></div>

<section className="py-24 px-6 bg-zinc-50/50" id="about">
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
<div>
<h2 className="text-2xl font-medium tracking-tight mb-6">The Analytical Approach</h2>
<p className="text-zinc-500 leading-relaxed mb-6">
                    I don't just extract numbers; I construct narratives. In a world drowning in data, clarity is the most valuable currency. My methodology combines rigorous statistical analysis with an intuitive understanding of business logic.
                </p>
<p className="text-zinc-500 leading-relaxed">
                    Over the last six years, I have helped startups and enterprises in Bangalore and beyond optimize their operations, forecast trends, and unlock revenue streams hidden within their logs.
                </p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-6 bg-white border border-zinc-100 rounded-lg">
<span className="iconify text-zinc-800 w-6 h-6 mb-4" data-icon="lucide:bar-chart-2" data-strokeWidth="1.5"></span>
<h3 className="font-medium text-sm mb-2">Visualization</h3>
<p className="text-xs text-zinc-400 leading-normal">Tableau, PowerBI, Looker. Making complex data accessible.</p>
</div>
<div className="p-6 bg-white border border-zinc-100 rounded-lg">
<span className="iconify text-zinc-800 w-6 h-6 mb-4" data-icon="lucide:database" data-strokeWidth="1.5"></span>
<h3 className="font-medium text-sm mb-2">Engineering</h3>
<p className="text-xs text-zinc-400 leading-normal">SQL, BigQuery, Snowflake. Robust pipelines &amp; warehousing.</p>
</div>
<div className="p-6 bg-white border border-zinc-100 rounded-lg">
<span className="iconify text-zinc-800 w-6 h-6 mb-4" data-icon="lucide:code-2" data-strokeWidth="1.5"></span>
<h3 className="font-medium text-sm mb-2">Analysis</h3>
<p className="text-xs text-zinc-400 leading-normal">Python (Pandas, NumPy), R. Statistical modeling &amp; cleaning.</p>
</div>
<div className="p-6 bg-white border border-zinc-100 rounded-lg">
<span className="iconify text-zinc-800 w-6 h-6 mb-4" data-icon="lucide:brain-circuit" data-strokeWidth="1.5"></span>
<h3 className="font-medium text-sm mb-2">Strategy</h3>
<p className="text-xs text-zinc-400 leading-normal">A/B Testing, KPI Definition, Market Forecasting.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="work">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight mb-12">Professional Trajectory</h2>
<div className="space-y-0">

<div className="group py-8 border-t border-zinc-100 flex flex-col md:flex-row md:items-start justify-between gap-4 hover:bg-zinc-50 transition-colors px-4 -mx-4 rounded-lg">
<div className="md:w-1/4">
<span className="text-xs font-mono text-zinc-400">2021 — Present</span>
<h3 className="font-medium text-zinc-900 mt-1">Lead Data Analyst</h3>
<p className="text-sm text-zinc-500 mt-1">FinTech Solutions, Bangalore</p>
</div>
<div className="md:w-1/2">
<p className="text-zinc-600 text-sm leading-relaxed mb-4">
                            Spearheading a team of 4 analysts. Designed a real-time fraud detection dashboard reducing risk by 18%. Optimized SQL queries for the core ledger reducing reporting latency by 40%.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-zinc-100 text-zinc-600 text-[10px] uppercase tracking-wide rounded border border-zinc-200">Python</span>
<span className="px-2 py-1 bg-zinc-100 text-zinc-600 text-[10px] uppercase tracking-wide rounded border border-zinc-200">Snowflake</span>
<span className="px-2 py-1 bg-zinc-100 text-zinc-600 text-[10px] uppercase tracking-wide rounded border border-zinc-200">Tableau</span>
</div>
</div>
<div className="md:w-1/12 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
<span className="iconify text-zinc-400" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5"></span>
</div>
</div>

<div className="group py-8 border-t border-zinc-100 flex flex-col md:flex-row md:items-start justify-between gap-4 hover:bg-zinc-50 transition-colors px-4 -mx-4 rounded-lg">
<div className="md:w-1/4">
<span className="text-xs font-mono text-zinc-400">2019 — 2021</span>
<h3 className="font-medium text-zinc-900 mt-1">Data Analyst</h3>
<p className="text-sm text-zinc-500 mt-1">E-Com Giant, Bangalore</p>
</div>
<div className="md:w-1/2">
<p className="text-zinc-600 text-sm leading-relaxed mb-4">
                            Analyzed customer churn patterns across 2M+ users. Developed automated reporting pipelines using Python and Airflow. Collaborated with marketing to improve campaign ROI by 12%.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-zinc-100 text-zinc-600 text-[10px] uppercase tracking-wide rounded border border-zinc-200">SQL</span>
<span className="px-2 py-1 bg-zinc-100 text-zinc-600 text-[10px] uppercase tracking-wide rounded border border-zinc-200">PowerBI</span>
<span className="px-2 py-1 bg-zinc-100 text-zinc-600 text-[10px] uppercase tracking-wide rounded border border-zinc-200">Airflow</span>
</div>
</div>
<div className="md:w-1/12 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
<span className="iconify text-zinc-400" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5"></span>
</div>
</div>

<div className="group py-8 border-t border-zinc-100 border-b flex flex-col md:flex-row md:items-start justify-between gap-4 hover:bg-zinc-50 transition-colors px-4 -mx-4 rounded-lg">
<div className="md:w-1/4">
<span className="text-xs font-mono text-zinc-400">2017 — 2019</span>
<h3 className="font-medium text-zinc-900 mt-1">Junior Analyst</h3>
<p className="text-sm text-zinc-500 mt-1">DataStream Inc.</p>
</div>
<div className="md:w-1/2">
<p className="text-zinc-600 text-sm leading-relaxed mb-4">
                            Assisted in maintaining data integrity for client databases. Created weekly performance reports and cleaned datasets for senior modelers.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-zinc-100 text-zinc-600 text-[10px] uppercase tracking-wide rounded border border-zinc-200">Excel</span>
<span className="px-2 py-1 bg-zinc-100 text-zinc-600 text-[10px] uppercase tracking-wide rounded border border-zinc-200">MySQL</span>
</div>
</div>
<div className="md:w-1/12 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
<span className="iconify text-zinc-400" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5"></span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-900 text-zinc-100" id="expertise">
<div className="max-w-5xl mx-auto">
<div className="flex items-end justify-between mb-12">
<h2 className="text-3xl font-medium tracking-tight">Selected Case Studies</h2>
<a className="text-xs text-zinc-400 hover:text-white transition-colors flex items-center gap-1" href="#">
                    View GitHub <span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative bg-zinc-800/50 border border-zinc-700/50 rounded-xl overflow-hidden hover:border-zinc-600 transition-all duration-300">
<div className="p-8">
<div className="mb-6 flex justify-between items-start">
<span className="iconify text-zinc-400 w-8 h-8" data-icon="lucide:trending-up" data-strokeWidth="1.5"></span>
<span className="text-[10px] font-mono border border-zinc-600 px-2 py-1 rounded text-zinc-400">Predictive Analytics</span>
</div>
<h3 className="text-xl font-medium mb-2 group-hover:text-white transition-colors">Sales Forecasting Model</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                            A time-series forecasting model built with Python (Prophet) to predict quarterly sales volume, achieving 94% accuracy for a retail client.
                        </p>
<div className="flex gap-4 text-xs font-medium text-zinc-500">
<span>Python</span>
<span>Prophet</span>
<span>Pandas</span>
</div>
</div>
</div>

<div className="group relative bg-zinc-800/50 border border-zinc-700/50 rounded-xl overflow-hidden hover:border-zinc-600 transition-all duration-300">
<div className="p-8">
<div className="mb-6 flex justify-between items-start">
<span className="iconify text-zinc-400 w-8 h-8" data-icon="lucide:layout-dashboard" data-strokeWidth="1.5"></span>
<span className="text-[10px] font-mono border border-zinc-600 px-2 py-1 rounded text-zinc-400">Visualization</span>
</div>
<h3 className="text-xl font-medium mb-2 group-hover:text-white transition-colors">Supply Chain Dashboard</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                            Interactive Tableau dashboard monitoring real-time logistics data, flagging bottlenecks and reducing delivery delays by 15%.
                        </p>
<div className="flex gap-4 text-xs font-medium text-zinc-500">
<span>Tableau</span>
<span>SQL</span>
<span>ETL</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-zinc-100" id="contact">
<div className="max-w-5xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h2 className="text-4xl font-medium tracking-tight mb-6">Let's work together.</h2>
<p className="text-zinc-500 text-lg mb-12 font-light">
                        I'm currently available for freelance projects and senior full-time roles. If you have data that needs to speak, I can give it a voice.
                    </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center">
<span className="iconify text-zinc-600" data-icon="lucide:mail" data-strokeWidth="1.5"></span>
</div>
<div>
<span className="block text-xs text-zinc-400 uppercase tracking-wide">Email</span>
<a className="text-zinc-900 font-medium hover:underline" href="mailto:sk524722@gmail.com">sk524722@gmail.com</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center">
<span className="iconify text-zinc-600" data-icon="lucide:phone" data-strokeWidth="1.5"></span>
</div>
<div>
<span className="block text-xs text-zinc-400 uppercase tracking-wide">Phone</span>
<a className="text-zinc-900 font-medium hover:underline" href="tel:9087860399">9087860399</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center">
<span className="iconify text-zinc-600" data-icon="lucide:map-pin" data-strokeWidth="1.5"></span>
</div>
<div>
<span className="block text-xs text-zinc-400 uppercase tracking-wide">Location</span>
<span className="text-zinc-900 font-medium">Bangalore, India</span>
</div>
</div>
</div>
</div>

<div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-700 ml-1">First Name</label>
<input className="w-full bg-white border border-zinc-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all placeholder:text-zinc-300" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-700 ml-1">Last Name</label>
<input className="w-full bg-white border border-zinc-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all placeholder:text-zinc-300" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-700 ml-1">Email</label>
<input className="w-full bg-white border border-zinc-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all placeholder:text-zinc-300" placeholder="jane@company.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-700 ml-1">Message</label>
<textarea className="w-full bg-white border border-zinc-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all placeholder:text-zinc-300" placeholder="Tell me about your data needs..." rows="4"></textarea>
</div>
<button className="w-full bg-zinc-900 text-white font-medium text-sm py-2.5 rounded-md hover:bg-zinc-800 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2" type="button">
                            Send Message
                            <span className="iconify" data-icon="lucide:send" data-strokeWidth="1.5"></span>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="py-8 px-6 bg-white">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-400">© 2023 Sunny Singh. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-strokeWidth="1.5"></span>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-strokeWidth="1.5"></span>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:github" data-strokeWidth="1.5"></span>
</a>
</div>
</div>
</footer>

    </>
  );
}
