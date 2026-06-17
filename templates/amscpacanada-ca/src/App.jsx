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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
<i className="text-white w-5 h-5" data-lucide="calculator" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-2xl font-semibold tracking-tight text-white leading-none">AMS<span className="text-blue-500">.</span></span>
<span className="text-xs tracking-widest text-slate-400 font-medium uppercase mt-0.5">CPA Canada</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-base font-medium text-slate-300 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-base font-medium text-slate-300 hover:text-white transition-colors" href="#about">Firm</a>
<a className="text-base font-medium text-slate-300 hover:text-white transition-colors" href="#calculator">Tools</a>
<a className="text-base font-medium text-slate-300 hover:text-white transition-colors" href="#testimonials">Clients</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-base font-medium text-slate-300 hover:text-white transition-colors" href="tel:7789178846">
<i className="w-4 h-4" data-lucide="phone" strokeWidth="1.5"></i>
                    (778) 917-8846
                </a>
<a className="px-5 py-2.5 rounded-full bg-white text-slate-900 text-base font-medium hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#contact">
                    Book Consultation
                </a>
</div>
</div>
</nav>

<section className="relative pt-40 pb-32 overflow-hidden lg:min-h-screen flex items-center justify-center">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/20 blur-[120px] mix-blend-screen animate-[pulse_8s_ease-in-out_infinite]"></div>
<div className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-indigo-900/20 blur-[100px] mix-blend-screen animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default">
<div className="flex gap-0.5 text-yellow-500">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-slate-200">4.9 Rating (100+ Reviews)</span>
<div className="w-1 h-1 rounded-full bg-slate-600 mx-1"></div>
<span className="text-base text-slate-400 flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="map-pin" strokeWidth="1.5"></i> Kelowna, BC
                </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-8 leading-[1.1]">
                Precision Accounting.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400">Powerful Growth.</span>
</h1>
<p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Helping modern businesses and individuals maximize profits, minimize tax liabilities, and scale confidently across Canada and the US.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-lg font-medium transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 group" href="#contact">
                    Schedule Consultation
                    <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-lg font-medium transition-all backdrop-blur-md flex items-center justify-center gap-2" href="tel:7789178846">
<i className="w-5 h-5" data-lucide="phone-call" strokeWidth="1.5"></i>
                    Call (778) 917-8846
                </a>
</div>
</div>
</section>

<section className="relative z-20 -mt-16 max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-slate-900/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-2xl">
<span className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-2">100+</span>
<span className="text-lg text-slate-400 font-medium">Corporate Clients</span>
</div>
<div className="bg-slate-900/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
<span className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-2">USA &amp; CA</span>
<span className="text-lg text-slate-400 font-medium">Cross-Border Expertise</span>
</div>
<div className="bg-slate-900/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-2xl">
<span className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-2">99%</span>
<span className="text-lg text-slate-400 font-medium">Client Retention Rate</span>
</div>
</div>
</section>

<section className="py-32 bg-slate-950 relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Elevating financial strategy for the modern enterprise.</h2>
<p className="text-xl text-slate-400 mb-8 font-light leading-relaxed">
                        AMS CPA is a top-tier Chartered Professional Accounting firm based in Kelowna, BC. We move beyond traditional compliance to deliver strategic, proactive financial advisory. Whether you are a local startup or managing cross-border operations, our tailored strategies ensure you keep more of what you earn.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-lg text-slate-300">
<div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
<i className="w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
                            Certified Professional Accountants
                        </li>
<li className="flex items-center gap-3 text-lg text-slate-300">
<div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
<i className="w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
                            Personalized tax reduction strategies
                        </li>
<li className="flex items-center gap-3 text-lg text-slate-300">
<div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
<i className="w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
                            Fast, reliable, and meticulously accurate
                        </li>
</ul>
<a className="inline-flex items-center gap-2 text-lg text-blue-400 font-medium hover:text-blue-300 transition-colors" href="#services">
                        Explore our services <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="relative h-[500px] w-full rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 overflow-hidden shadow-2xl p-8 flex flex-col justify-between">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full"></div>

<div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
<span className="text-base text-slate-400 font-medium tracking-wide">YTD Growth</span>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-slate-700"></div>
<div className="w-2 h-2 rounded-full bg-slate-700"></div>
<div className="w-2 h-2 rounded-full bg-slate-700"></div>
</div>
</div>
<div className="flex items-end gap-4 h-48 border-b border-white/5 pb-4">
<div className="w-full bg-white/5 rounded-t-lg h-[30%] relative group hover:bg-white/10 transition-colors"><div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs text-white bg-slate-800 px-2 py-1 rounded transition-opacity">Q1</div></div>
<div className="w-full bg-white/5 rounded-t-lg h-[45%] relative group hover:bg-white/10 transition-colors"><div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs text-white bg-slate-800 px-2 py-1 rounded transition-opacity">Q2</div></div>
<div className="w-full bg-blue-500/20 rounded-t-lg h-[70%] border-t border-blue-500/50 relative group hover:bg-blue-500/30 transition-colors"><div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs text-white bg-blue-600 px-2 py-1 rounded transition-opacity">Q3</div></div>
<div className="w-full bg-gradient-to-t from-blue-600/50 to-blue-400 rounded-t-lg h-[90%] shadow-[0_0_15px_rgba(59,130,246,0.5)] relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-white bg-blue-600 px-2 py-1 rounded">Q4</div></div>
</div>
<div className="mt-8 flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
<i className="w-5 h-5" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-sm text-slate-400">Tax Savings Optimized</div>
<div className="text-lg text-white font-medium">+$142,500</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white text-slate-900 rounded-t-[3rem] relative z-20" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Comprehensive Financial Architecture</h2>
<p className="text-xl text-slate-600 font-light">From daily accounting to complex cross-border tax strategies, we provide the framework for your financial success.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:shadow-xl transition-shadow duration-300 group">
<div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-900 mb-8 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
<i className="w-6 h-6" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-6">Business Services</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-lg text-slate-600">
<i className="w-5 h-5 text-slate-300 mt-0.5 shrink-0" data-lucide="minus" strokeWidth="1.5"></i>
                            Corporate Tax Filing &amp; Strategy
                        </li>
<li className="flex items-start gap-3 text-lg text-slate-600">
<i className="w-5 h-5 text-slate-300 mt-0.5 shrink-0" data-lucide="minus" strokeWidth="1.5"></i>
                            Full Cycle Accounting &amp; Payroll
                        </li>
<li className="flex items-start gap-3 text-lg text-slate-600">
<i className="w-5 h-5 text-slate-300 mt-0.5 shrink-0" data-lucide="minus" strokeWidth="1.5"></i>
                            CRA Audits &amp; Representation
                        </li>
<li className="flex items-start gap-3 text-lg text-slate-600">
<i className="w-5 h-5 text-slate-300 mt-0.5 shrink-0" data-lucide="minus" strokeWidth="1.5"></i>
                            Business Startup Structuring
                        </li>
</ul>
</div>

<div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:shadow-xl transition-shadow duration-300 group">
<div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-900 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 group-hover:border-blue-600">
<i className="w-6 h-6" data-lucide="file-text" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-6">Tax Services</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-lg text-slate-600">
<i className="w-5 h-5 text-blue-300 mt-0.5 shrink-0" data-lucide="minus" strokeWidth="1.5"></i>
                            US &amp; Canada Cross-Border Tax
                        </li>
<li className="flex items-start gap-3 text-lg text-slate-600">
<i className="w-5 h-5 text-slate-300 mt-0.5 shrink-0" data-lucide="minus" strokeWidth="1.5"></i>
                            Personal Tax Planning &amp; Prep
                        </li>
<li className="flex items-start gap-3 text-lg text-slate-600">
<i className="w-5 h-5 text-slate-300 mt-0.5 shrink-0" data-lucide="minus" strokeWidth="1.5"></i>
                            Business Tax Returns
                        </li>
<li className="flex items-start gap-3 text-lg text-slate-600">
<i className="w-5 h-5 text-slate-300 mt-0.5 shrink-0" data-lucide="minus" strokeWidth="1.5"></i>
                            GST/PST Compliance
                        </li>
</ul>
</div>

<div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:shadow-xl transition-shadow duration-300 group">
<div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-900 mb-8 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
<i className="w-6 h-6" data-lucide="pie-chart" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-6">Financial Advisory</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-lg text-slate-600">
<i className="w-5 h-5 text-slate-300 mt-0.5 shrink-0" data-lucide="minus" strokeWidth="1.5"></i>
                            Financial Management
                        </li>
<li className="flex items-start gap-3 text-lg text-slate-600">
<i className="w-5 h-5 text-slate-300 mt-0.5 shrink-0" data-lucide="minus" strokeWidth="1.5"></i>
                            Mergers &amp; Acquisitions
                        </li>
<li className="flex items-start gap-3 text-lg text-slate-600">
<i className="w-5 h-5 text-slate-300 mt-0.5 shrink-0" data-lucide="minus" strokeWidth="1.5"></i>
                            Operational Consulting
                        </li>
<li className="flex items-start gap-3 text-lg text-slate-600">
<i className="w-5 h-5 text-slate-300 mt-0.5 shrink-0" data-lucide="minus" strokeWidth="1.5"></i>
                            Financial Statements Prep
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-950 border-t border-white/5 relative overflow-hidden" id="calculator">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Tax Optimization Simulator</h2>
<p className="text-xl text-slate-400 font-light">Discover potential savings by utilizing advanced corporate structuring.</p>
</div>
<div className="bg-[#0f172a] border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl backdrop-blur-xl">
<div className="grid md:grid-cols-2 gap-12">

<div className="space-y-8">
<div>
<div className="flex justify-between items-center mb-4">
<label className="text-base font-medium text-slate-300">Annual Corporate Revenue</label>
<span className="text-lg text-white font-medium">$500,000</span>
</div>

<div className="relative h-2 bg-slate-800 rounded-full cursor-pointer">
<div className="absolute top-0 left-0 h-full w-[40%] bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
<div className="absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow-md border-2 border-blue-500 hover:scale-110 transition-transform"></div>
</div>
<div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
<span>$100k</span>
<span>$2M+</span>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-4">
<label className="text-base font-medium text-slate-300">Deductible Expenses</label>
<span className="text-lg text-white font-medium">$150,000</span>
</div>

<div className="relative h-2 bg-slate-800 rounded-full cursor-pointer">
<div className="absolute top-0 left-0 h-full w-[25%] bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
<div className="absolute top-1/2 left-[25%] -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow-md border-2 border-blue-500 hover:scale-110 transition-transform"></div>
</div>
</div>

<div className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl mt-4">
<div>
<div className="text-base font-medium text-white">Cross-Border Operations</div>
<div className="text-sm text-slate-400">Operating in US &amp; Canada</div>
</div>
<div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer shadow-inner">
<div className="absolute top-1 left-7 w-4 h-4 bg-white rounded-full transition-all shadow-sm"></div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-blue-900/50 to-slate-900 border border-blue-500/20 rounded-3xl p-8 flex flex-col justify-center text-center relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full"></div>
<div className="text-lg text-blue-200 font-medium mb-4 uppercase tracking-wider text-sm">Estimated Annual Savings</div>
<div className="text-6xl font-semibold tracking-tight text-white mb-6">$42,500<span className="text-2xl text-slate-400 font-normal">/yr</span></div>
<p className="text-base text-slate-400 mb-8 font-light">Based on standard small business deductions and corporate tax optimization strategies.</p>
<a className="w-full px-6 py-4 rounded-xl bg-white text-slate-900 text-lg font-medium hover:bg-slate-200 transition-colors shadow-lg flex items-center justify-center gap-2" href="#contact">
                            Claim Savings Strategy <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
<p className="text-center text-sm text-slate-500 mt-6 font-light">*This is a simplified estimation tool. Actual savings depend on specific financial situations.</p>
</div>
</section>

<section className="py-32 bg-slate-50 border-t border-slate-200 overflow-hidden" id="testimonials">
<div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row items-end justify-between gap-8">
<div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">Trusted by Industry Leaders</h2>
<p className="text-xl text-slate-600 font-light">Don't just take our word for it.</p>
</div>
<div className="flex gap-2">
<button className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-white hover:shadow-md transition-all">
<i className="w-5 h-5" data-lucide="arrow-left" strokeWidth="1.5"></i>
</button>
<button className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-white hover:shadow-md transition-all">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-12 w-full hide-scrollbar" style={{MsOverflowStyle: 'none', scrollbarWidth: 'none'}}>
<div className="min-w-[350px] w-[450px] bg-white p-10 rounded-3xl shadow-sm border border-slate-100 snap-center shrink-0">
<div className="flex gap-1 text-yellow-500 mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-xl text-slate-700 mb-8 leading-relaxed font-light">"I highly recommend AMS CPA for both personal and corporate taxes. They found deductions previous accountants completely missed. True professionals."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-semibold text-lg">JD</div>
<div>
<div className="text-base font-medium text-slate-900">James D.</div>
<div className="text-sm text-slate-500">Tech Startup Founder</div>
</div>
</div>
</div>
<div className="min-w-[350px] w-[450px] bg-white p-10 rounded-3xl shadow-sm border border-slate-100 snap-center shrink-0">
<div className="flex gap-1 text-yellow-500 mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-xl text-slate-700 mb-8 leading-relaxed font-light">"Managing operations in both BC and Washington State was a nightmare until AMS took over our cross-border tax strategy. Smooth, transparent, and brilliant."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-lg">SW</div>
<div>
<div className="text-base font-medium text-slate-900">Sarah W.</div>
<div className="text-sm text-slate-500">E-commerce Director</div>
</div>
</div>
</div>
<div className="min-w-[350px] w-[450px] bg-white p-10 rounded-3xl shadow-sm border border-slate-100 snap-center shrink-0">
<div className="flex gap-1 text-yellow-500 mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-xl text-slate-700 mb-8 leading-relaxed font-light">"They made our corporate tax filing stress-free and handled a complex CRA audit with ease. Best accounting firm in Kelowna, period."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-semibold text-lg">MR</div>
<div>
<div className="text-base font-medium text-slate-900">Michael R.</div>
<div className="text-sm text-slate-500">Real Estate Agency</div>
</div>
</div>
</div>
<div className="min-w-[350px] w-[450px] border border-transparent snap-center shrink-0"></div> 
</div>
</section>

<section className="py-32 bg-slate-950 relative" id="contact">
<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 z-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl">

<div className="flex flex-col justify-between">
<div>
<div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 border border-blue-500/20">Get Started</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Ready to optimize your financial future?</h2>
<p className="text-xl text-slate-400 font-light mb-12">Book a consultation with our senior partners. We'll analyze your current structure and identify immediate opportunities for growth and tax reduction.</p>
<div className="space-y-8 mb-12">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-slate-300">
<i className="w-5 h-5" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-lg font-medium text-white mb-1">Office Location</div>
<div className="text-base text-slate-400 font-light">1925 Enterprise Way Unit 107<br/>Kelowna, BC V1Y 9N5</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-slate-300">
<i className="w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-lg font-medium text-white mb-1">Direct Line</div>
<a className="text-base text-slate-400 font-light hover:text-white transition-colors" href="tel:7789178846">(778) 917-8846</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-slate-300">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-lg font-medium text-white mb-1">Email</div>
<a className="text-base text-slate-400 font-light hover:text-white transition-colors" href="mailto:info@amsconsultant.ca">info@amsconsultant.ca</a>
</div>
</div>
</div>
</div>
</div>

<div className="bg-[#020617] rounded-3xl p-8 border border-white/5 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full"></div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2">Book in 30 Seconds</h3>
<p className="text-base text-slate-400 font-light mb-8">Select a time that works for you.</p>
<form className="space-y-5 relative z-10">
<div className="grid grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-slate-400 mb-2">First Name</label>
<input className="w-full appearance-none bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-base text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-400 mb-2">Last Name</label>
<input className="w-full appearance-none bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-base text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
<input className="w-full appearance-none bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-base text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="john@company.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-400 mb-2">Service Needed</label>
<div className="relative">
<select className="w-full appearance-none bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-base text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer">
<option className="bg-slate-900" value="">Corporate Taxes</option>
<option className="bg-slate-900" value="">US/Canada Cross-Border</option>
<option className="bg-slate-900" value="">Personal Taxes</option>
<option className="bg-slate-900" value="">Advisory &amp; Consulting</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-400">
<i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</div>

<label className="flex items-start gap-3 mt-4 cursor-pointer group">
<div className="relative flex items-center justify-center w-5 h-5 mt-0.5">
<input className="peer appearance-none w-5 h-5 border border-white/20 rounded bg-white/5 checked:bg-blue-600 checked:border-blue-600 transition-all cursor-pointer focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950" type="checkbox"/>
<i className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" data-lucide="check" strokeWidth="3"></i>
</div>
<span className="text-sm text-slate-400 font-light group-hover:text-slate-300 transition-colors">I agree to receive communications regarding my inquiry.</span>
</label>
<button className="w-full px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-lg font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)] mt-4" type="button">
                            Confirm Appointment
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
<i className="text-white w-4 h-4" data-lucide="calculator" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-white leading-none">AMS<span className="text-blue-500">.</span></span>
</a>
<p className="text-sm text-slate-400 font-light leading-relaxed mb-6">Premium Chartered Professional Accounting services for modern enterprises across Canada and the US.</p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div>
<h4 className="text-base font-medium text-white mb-6">Services</h4>
<ul className="space-y-4">
<li><a className="text-sm text-slate-400 hover:text-white transition-colors font-light" href="#">Corporate Taxes</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors font-light" href="#">US/Canada Cross-Border</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors font-light" href="#">Financial Advisory</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors font-light" href="#">CRA Audits</a></li>
</ul>
</div>
<div>
<h4 className="text-base font-medium text-white mb-6">Company</h4>
<ul className="space-y-4">
<li><a className="text-sm text-slate-400 hover:text-white transition-colors font-light" href="#">About Firm</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors font-light" href="#">Partners</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors font-light" href="#">Careers</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors font-light" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-base font-medium text-white mb-6">Legal</h4>
<ul className="space-y-4">
<li><a className="text-sm text-slate-400 hover:text-white transition-colors font-light" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors font-light" href="#">Terms of Service</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors font-light" href="#">Disclaimer</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-500 font-light">© 2024 AMS CPA Canada. All rights reserved.</p>
<div className="flex items-center gap-2 text-xs text-slate-500 font-light">
                    Designed for <span className="font-medium text-slate-300">Financial Excellence</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
