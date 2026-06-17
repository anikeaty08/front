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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter text-slate-900 flex items-center gap-1" href="#">
                A/V<span className="text-slate-400 text-sm">.</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#about">Philosophy</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#sectors">Sectors</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#portfolio">Portfolio</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors" href="#contact">
                Partner with us
            </a>
<button className="md:hidden text-slate-900">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-950 text-white overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-slate-800/40 rounded-[100%] blur-[100px] -z-10 pointer-events-none"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 text-xs font-medium text-slate-300 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    Fund IV closing at $2.5B
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-6">
                    Catalyzing growth for <br className="hidden md:block"/>
<span className="text-slate-400">visionary enterprises.</span>
</h1>
<p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed">
                    We provide strategic capital, operational frameworks, and global networks to transform middle-market companies into definitive industry leaders.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-colors" href="#about">
                        Explore our philosophy
                    </a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white border border-slate-800 rounded-lg hover:bg-slate-900 transition-colors group" href="#portfolio">
                        View portfolio 
                        <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">A legacy of deliberate <br/>value creation.</h2>
<p className="text-base text-slate-500 leading-relaxed mb-6">
                        Since 2008, A/V Partners has maintained a singular focus: partnering with exceptional management teams to build resilient, high-growth businesses. We go beyond financial engineering, integrating deeply with our portfolio companies to optimize operations, expand market reach, and accelerate technological adoption.
                    </p>
<p className="text-base text-slate-500 leading-relaxed">
                        Our disciplined approach relies on thematic sourcing, rigorous diligence, and a proprietary value creation playbook designed for sustainable, long-term impact.
                    </p>
</div>
<div className="grid grid-cols-2 gap-8">
<div className="pb-6 border-b border-slate-100">
<div className="text-4xl font-medium tracking-tight text-slate-900 mb-2">$8.2B</div>
<div className="text-sm font-medium text-slate-500">Assets Under Management</div>
</div>
<div className="pb-6 border-b border-slate-100">
<div className="text-4xl font-medium tracking-tight text-slate-900 mb-2">45+</div>
<div className="text-sm font-medium text-slate-500">Active Portfolio Companies</div>
</div>
<div className="pt-2">
<div className="text-4xl font-medium tracking-tight text-slate-900 mb-2">15</div>
<div className="text-sm font-medium text-slate-500">Years of Excellence</div>
</div>
<div className="pt-2">
<div className="text-4xl font-medium tracking-tight text-slate-900 mb-2">32%</div>
<div className="text-sm font-medium text-slate-500">Average Gross IRR</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="sectors">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Sectors we master.</h2>
<p className="text-base text-slate-500 max-w-2xl">We focus our expertise and capital on specific verticals where our operational partners have deep domain knowledge and proven track records.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-[0_2px_12px_rgb(0,0,0,0.02)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 mb-6 text-slate-700">
<iconify-icon height="24" icon="solar:cpu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-3">Enterprise Software</h3>
<p className="text-sm text-slate-500 leading-relaxed">Scaling B2B SaaS platforms, cybersecurity frameworks, and data infrastructure solutions.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-[0_2px_12px_rgb(0,0,0,0.02)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 mb-6 text-slate-700">
<iconify-icon height="24" icon="solar:heart-pulse-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-3">Healthcare Services</h3>
<p className="text-sm text-slate-500 leading-relaxed">Consolidating fragmented medical practices and advancing health-tech innovations.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-[0_2px_12px_rgb(0,0,0,0.02)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 mb-6 text-slate-700">
<iconify-icon height="24" icon="solar:chart-2-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-3">Financial Tech</h3>
<p className="text-sm text-slate-500 leading-relaxed">Modernizing legacy financial systems, payments architecture, and wealth management.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-[0_2px_12px_rgb(0,0,0,0.02)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 mb-6 text-slate-700">
<iconify-icon height="24" icon="solar:factory-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-3">Advanced Industrials</h3>
<p className="text-sm text-slate-500 leading-relaxed">Investing in automated manufacturing, specialty chemicals, and smart logistics networks.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative overflow-hidden" id="contact">
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Let's build together.</h2>
<p className="text-base text-slate-500">Whether you are a founder seeking partnership or an investor exploring opportunities, our team is ready to connect.</p>
</div>
<form className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">First Name</label>
<input className="w-full bg-transparent border-b border-slate-200 py-2 text-sm text-slate-900 placeholder-slate-300 focus:border-slate-900 focus:outline-none transition-colors appearance-none" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Last Name</label>
<input className="w-full bg-transparent border-b border-slate-200 py-2 text-sm text-slate-900 placeholder-slate-300 focus:border-slate-900 focus:outline-none transition-colors appearance-none" placeholder="Doe" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Work Email</label>
<input className="w-full bg-transparent border-b border-slate-200 py-2 text-sm text-slate-900 placeholder-slate-300 focus:border-slate-900 focus:outline-none transition-colors appearance-none" placeholder="john@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Company</label>
<input className="w-full bg-transparent border-b border-slate-200 py-2 text-sm text-slate-900 placeholder-slate-300 focus:border-slate-900 focus:outline-none transition-colors appearance-none" placeholder="Company Inc." type="text"/>
</div>
</div>

<div>
<label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Inquiry Type</label>
<div className="relative">
<select className="w-full bg-transparent border-b border-slate-200 py-2 text-sm text-slate-900 focus:border-slate-900 focus:outline-none transition-colors appearance-none cursor-pointer">
<option className="text-slate-300" disabled="" selected="" value="">Select an option</option>
<option value="investment">Seeking Investment</option>
<option value="lp">LP Relations</option>
<option value="career">Careers</option>
<option value="other">Other</option>
</select>
<iconify-icon className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Message</label>
<textarea className="w-full bg-transparent border-b border-slate-200 py-2 text-sm text-slate-900 placeholder-slate-300 focus:border-slate-900 focus:outline-none transition-colors appearance-none resize-none" placeholder="Tell us about your objectives..." rows="4"></textarea>
</div>
<div className="pt-4">
<button className="w-full md:w-auto px-8 py-3 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2" type="button">
                        Submit Inquiry
                        <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</form>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200/60 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-xl font-medium tracking-tighter text-slate-900">A/V.</span>
</div>
<div className="flex items-center gap-6 text-xs font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-slate-900 transition-colors" href="#">Investor Login</a>
</div>
<div className="text-xs text-slate-400">
                © 2023 A/V Partners LLC. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
