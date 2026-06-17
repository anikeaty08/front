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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:globe" data-strokeWidth="1.5"></span>
</div>
<span className="text-slate-900 font-semibold tracking-tighter text-lg">PREMOTE</span>
</a>
<div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-slate-900 transition-colors" href="#platform">Platform</a>
<a className="hover:text-slate-900 transition-colors" href="#customers">Customers</a>
<a className="hover:text-slate-900 transition-colors" href="#resources">Resources</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Sign in</a>
<a className="text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20" href="#">Book Demo</a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden mesh-gradient">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl mx-auto text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    New: Automated A1 Certificate Processing
                </div>
<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                    Work from anywhere, <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">compliantly.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10 max-w-2xl mx-auto">
                    Premote orchestrates the complex web of tax, visa, and social security risks for workations, business travel, and cross-border assignments.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 flex items-center justify-center gap-2" href="#">
                        Start Risk Assessment
                        <span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5"></span>
</a>
<a className="w-full sm:w-auto px-8 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2" href="#">
<span className="iconify" data-icon="lucide:play-circle" data-strokeWidth="1.5"></span>
                        How it works
                    </a>
</div>
</div>

<div className="relative max-w-5xl mx-auto">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-20"></div>
<div className="relative bg-white rounded-xl border border-slate-200 shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[2/1] group">

<div className="border-b border-slate-100 bg-slate-50/50 p-4 flex items-center justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
</div>
<div className="h-2 w-32 bg-slate-200 rounded-full"></div>
</div>

<div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 h-full bg-slate-50/30">

<div className="hidden md:flex flex-col gap-4">
<div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-slate-100">
<span className="iconify text-indigo-600" data-icon="lucide:layout-dashboard"></span>
<div className="h-2 w-20 bg-slate-200 rounded"></div>
</div>
<div className="flex items-center gap-3 p-3 text-slate-400">
<span className="iconify" data-icon="lucide:users"></span>
<div className="h-2 w-16 bg-slate-200 rounded"></div>
</div>
<div className="flex items-center gap-3 p-3 text-slate-400">
<span className="iconify" data-icon="lucide:map"></span>
<div className="h-2 w-24 bg-slate-200 rounded"></div>
</div>
</div>

<div className="md:col-span-2 flex flex-col gap-6">

<div className="glass-card p-5 rounded-lg flex items-start gap-4 animate-fade-in-up">
<div className="p-2 bg-green-100 text-green-700 rounded-full">
<span className="iconify" data-icon="lucide:check-circle-2" width="20"></span>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-1">Trip Approved: London to Lisbon</h3>
<p className="text-xs text-slate-500 mb-3">Employee: Sarah Jenkins • Duration: 28 Days • Risk Level: Low</p>
<div className="flex gap-2">
<span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-200">Visa: Not Required</span>
<span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-200">Tax: &lt; 183 Days</span>
</div>
</div>
</div>

<div className="flex-1 bg-white rounded-lg border border-slate-100 p-4 shadow-sm relative overflow-hidden">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">

<svg className="w-full h-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" viewbox="0 0 400 100">
<path className="opacity-30" d="M 50 50 Q 200 -20 350 50" fill="none" stroke="#6366f1" stroke-dasharray="4 4" strokeWidth="2"></path>
<circle cx="50" cy="50" fill="#6366f1" r="4"></circle>
<circle cx="350" cy="50" fill="#6366f1" r="4">
<animate attributename="r" dur="2s" repeatcount="indefinite" values="4;8;4"></animate>
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="1;0.5;1"></animate>
</circle>
</svg>
</div>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-md shadow border border-slate-100 text-xs font-medium text-slate-600 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                                    Global Monitoring Active
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-12 border-b border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-slate-400 mb-8 tracking-wide uppercase">Trusted by forward-thinking global teams</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 font-semibold text-slate-900 text-lg"><span className="w-6 h-6 bg-slate-900 rounded-full"></span> ACME Corp</div>
<div className="flex items-center gap-2 font-semibold text-slate-900 text-lg"><span className="w-6 h-6 border-2 border-slate-900 rounded"></span> Vertex</div>
<div className="flex items-center gap-2 font-semibold text-slate-900 text-lg"><span className="w-6 h-6 bg-slate-900 transform rotate-45"></span> Layers</div>
<div className="flex items-center gap-2 font-semibold text-slate-900 text-lg"><span className="w-6 h-6 border-2 border-slate-900 rounded-full"></span> Sisyphus</div>
<div className="flex items-center gap-2 font-semibold text-slate-900 text-lg"><span className="w-6 h-6 bg-slate-900 rounded-tr-xl"></span> Circool</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Compliance on Autopilot</h2>
<p className="text-lg text-slate-500">We replace spreadsheets and expensive legal consultations with an intelligent engine that monitors risk in real-time.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="space-y-24">

<div className="group">
<div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-indigo-600 shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:shield-check" width="24"></span>
</div>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-3">Pre-trip Risk Assessments</h3>
<p className="text-slate-500 leading-relaxed mb-6">
                            Before an employee books a ticket, Premote analyzes the destination, duration, and citizenship. We instantly flag visa requirements, permanent establishment risks, and social security obligations.
                        </p>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-center gap-3">
<span className="iconify text-green-500" data-icon="lucide:check"></span>
                                Instant Visa Eligibility Checks
                            </li>
<li className="flex items-center gap-3">
<span className="iconify text-green-500" data-icon="lucide:check"></span>
                                PEO vs. Contractor Logic
                            </li>
<li className="flex items-center gap-3">
<span className="iconify text-green-500" data-icon="lucide:check"></span>
                                Posted Worker Directive (A1) Warnings
                            </li>
</ul>
</div>

<div className="group">
<div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-purple-600 shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:globe-2" width="24"></span>
</div>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-3">Shadow Payroll Tracking</h3>
<p className="text-slate-500 leading-relaxed mb-6">
                            Don't let tax liabilities surprise you. Premote automatically tracks days spent in each jurisdiction to alert you before tax residency thresholds are triggered.
                        </p>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-center gap-3">
<span className="iconify text-green-500" data-icon="lucide:check"></span>
                                183-Day Rule Monitoring
                            </li>
<li className="flex items-center gap-3">
<span className="iconify text-green-500" data-icon="lucide:check"></span>
                                State-to-State (US) Compliance
                            </li>
</ul>
</div>

<div className="group">
<div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-blue-600 shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:file-text" width="24"></span>
</div>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-3">Document Automation</h3>
<p className="text-slate-500 leading-relaxed mb-6">
                            Generate necessary compliance documents instantly. From A1 certificates in Europe to invitation letters for business visas globally.
                        </p>
</div>
</div>

<div className="relative hidden lg:block">
<div className="sticky top-32 space-y-8">

<div className="bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden transform transition-all hover:-translate-y-1">
<div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Live Assessment</span>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-50 text-red-700">High Risk Detected</span>
</div>
<div className="p-6">
<div className="flex items-center gap-4 mb-6">
<div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
<span className="iconify text-slate-400" data-icon="lucide:user"></span>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Markus E.</div>
<div className="text-xs text-slate-500">Proposed: Berlin (DE) ➔ New York (US)</div>
</div>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center text-sm p-3 bg-slate-50 rounded border border-slate-100">
<span className="text-slate-600">Duration</span>
<span className="font-medium text-slate-900">95 Days</span>
</div>
<div className="flex justify-between items-center text-sm p-3 bg-red-50 rounded border border-red-100">
<span className="text-red-700 font-medium">Payroll Trigger</span>
<span className="text-red-600 font-medium">Yes</span>
</div>
</div>
</div>
</div>

<div className="absolute top-12 left-8 w-full bg-slate-900 rounded-xl shadow-2xl overflow-hidden -z-10 opacity-40 scale-95">
<div className="p-6">
<div className="h-4 w-1/3 bg-slate-700 rounded mb-4"></div>
<div className="h-2 w-full bg-slate-800 rounded mb-2"></div>
<div className="h-2 w-2/3 bg-slate-800 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Built for the modern workforce</h2>
<p className="text-slate-500">Workations and digital nomad visas are rising. Premote ensures your policies keep up without blocking talent.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:shadow-lg transition-all duration-300 group">
<div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-slate-900 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:briefcase" width="20"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Business Trips</h3>
<p className="text-sm text-slate-500 leading-relaxed">Automate invitation letters and track days to prevent accidental tax residency.</p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:shadow-lg transition-all duration-300 group">
<div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-slate-900 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:palmtree" width="20"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Workations</h3>
<p className="text-sm text-slate-500 leading-relaxed">Enable employees to work from anywhere with clear guardrails on duration and location.</p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:shadow-lg transition-all duration-300 group">
<div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-slate-900 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:laptop-2" width="20"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Remote Hiring</h3>
<p className="text-sm text-slate-500 leading-relaxed">Assess the feasibility of hiring in a new country instantly before engaging a PEO.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative overflow-hidden">

<div className="absolute inset-0">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
</div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Ready to enable global mobility?</h2>
<p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
                Join hundreds of fast-growing companies using Premote to manage risk and empower their teams to work from anywhere.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-100 transition-all" href="#">
                    Get a Demo
                </a>
<a className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-700 text-white rounded-full font-semibold hover:bg-slate-800 transition-all" href="#">
                    View Pricing
                </a>
</div>
<div className="mt-12 flex items-center justify-center gap-6 text-sm text-slate-500">
<div className="flex items-center gap-2">
<span className="iconify text-green-400" data-icon="lucide:check-circle"></span> No credit card required
                </div>
<div className="flex items-center gap-2">
<span className="iconify text-green-400" data-icon="lucide:check-circle"></span> SOC2 Compliant
                </div>
</div>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-slate-900 flex items-center justify-center text-white text-xs">
<span className="iconify" data-icon="lucide:globe"></span>
</div>
<span className="text-slate-900 font-semibold tracking-tighter">PREMOTE</span>
</div>
<p className="text-sm text-slate-500 mb-6 max-w-xs">
                        The operating system for compliant global mobility. Tax, immigration, and labor law intelligence in one platform.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" width="20"></span></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" width="20"></span></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:github" width="20"></span></a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Product</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">Risk Assessment</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">A1 Automation</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Workation Policy</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Integrations</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Solutions</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">For HR Teams</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">For Finance</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Remote First</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Enterprise</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">About</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-100 text-xs text-slate-400">
<p>© 2024 Premote Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-900" href="#">Privacy Policy</a>
<a className="hover:text-slate-900" href="#">Terms of Service</a>
<a className="hover:text-slate-900" href="#">Cookie Settings</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
