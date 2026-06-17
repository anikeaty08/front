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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0A0A0B]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/20">
<i className="text-white w-5 h-5" data-lucide="cpu"></i>
</div>
<span className="text-lg font-medium tracking-tight text-white">AI UK <span className="text-slate-500">SOLUTIONS</span></span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal hover:text-white transition-colors" href="#">Platform</a>
<a className="text-sm font-normal hover:text-white transition-colors" href="#">Solutions</a>
<a className="text-sm font-normal hover:text-white transition-colors" href="#">Research</a>
<a className="text-sm font-normal hover:text-white transition-colors" href="#">Company</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-normal hover:text-white transition-colors" href="#">Log in</a>
<a className="px-4 py-2 text-sm font-medium text-white bg-white/10 border border-white/10 rounded-full hover:bg-white/15 transition-all" href="#">
                    Contact Sales
                </a>
</div>
</div>
</nav>

<section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 rounded-[100%] blur-[120px] -z-10 opacity-50 pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Now available for London Enterprise
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-8">
                The future of intelligence,<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">engineered in Britain.</span>
</h1>
<p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                Deploy sovereign AI infrastructure tailored for the UK market. We build scalable neural networks that power the next generation of British industry.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-black text-base font-medium rounded-full hover:bg-slate-200 transition-colors flex items-center justify-center gap-2" href="#">
                    Start Building <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-8 py-4 text-white text-base font-medium rounded-full border border-white/10 hover:bg-white/5 transition-colors flex items-center justify-center gap-2" href="#">
<i className="w-4 h-4" data-lucide="message-square"></i> Book Demo
                </a>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 py-12">
<p className="text-center text-sm font-medium text-slate-500 mb-8">TRUSTED BY INNOVATORS ACROSS THE UK</p>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center opacity-50 grayscale">

<div className="flex justify-center"><svg className="h-6 w-auto" fill="currentColor" viewbox="0 0 100 30"><rect height="20" rx="4" width="20" x="10" y="5"></rect><rect height="20" rx="4" width="20" x="35" y="5"></rect><rect height="20" rx="4" width="20" x="60" y="5"></rect></svg></div>
<div className="flex justify-center"><svg className="h-8 w-auto" fill="currentColor" viewbox="0 0 100 30"><circle cx="20" cy="15" r="10"></circle><rect height="10" width="40" x="35" y="10"></rect></svg></div>
<div className="flex justify-center"><svg className="h-7 w-auto" fill="currentColor" viewbox="0 0 100 30"><path d="M10 25 L20 5 L30 25 H10 Z"></path><rect height="8" width="40" x="35" y="18"></rect></svg></div>
<div className="flex justify-center"><svg className="h-6 w-auto" fill="currentColor" viewbox="0 0 100 30"><rect height="25" width="15" x="10" y="2"></rect><circle cx="40" cy="15" r="8"></circle></svg></div>
<div className="hidden lg:flex justify-center"><svg className="h-7 w-auto" fill="currentColor" viewbox="0 0 100 30"><path d="M10 15 Q25 5 40 15 T70 15"></path></svg></div>
</div>
</div>
</section>

<section className="py-32 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Built for scale.</h2>
<p className="text-xl text-slate-400 max-w-2xl font-light">
                    Our proprietary algorithms process petabytes of data with unparalleled efficiency, specifically optimized for the financial and healthcare sectors.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl group hover:border-blue-500/30 transition-all duration-300">
<div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
<i className="text-blue-400 w-6 h-6" data-lucide="brain-circuit"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Neural Processing</h3>
<p className="text-lg text-slate-400 leading-relaxed font-light">
                        Advanced LLMs capable of understanding complex context and nuance within UK legal and financial frameworks.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:border-blue-500/30 transition-all duration-300">
<div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
<i className="text-purple-400 w-6 h-6" data-lucide="network"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Predictive Analytics</h3>
<p className="text-lg text-slate-400 leading-relaxed font-light">
                        Forecast market trends and consumer behavior with 99.8% accuracy using our proprietary prediction engine.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:border-blue-500/30 transition-all duration-300">
<div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
<i className="text-cyan-400 w-6 h-6" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Sovereign Security</h3>
<p className="text-lg text-slate-400 leading-relaxed font-light">
                        GDPR compliant by design. Your data never leaves the UK borders, ensured by our localized data centers.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<div className="inline-block px-3 py-1 mb-6 rounded-full border border-blue-500/30 text-blue-400 text-xs font-medium">
                    INFRASTRUCTURE
                </div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                    Real-time insights,<br/>delivered instantly.
                </h2>
<p className="text-xl text-slate-400 font-light mb-8">
                    Monitor your AI fleet performance in real-time through our dedicated dashboard. Track latency, token usage, and cost per request with granular precision.
                </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-lg text-slate-300">
<i className="text-blue-500 w-5 h-5" data-lucide="check-circle-2"></i>
<span>Latency under 50ms across UK regions</span>
</li>
<li className="flex items-center gap-3 text-lg text-slate-300">
<i className="text-blue-500 w-5 h-5" data-lucide="check-circle-2"></i>
<span>99.99% Uptime SLA Guarantee</span>
</li>
<li className="flex items-center gap-3 text-lg text-slate-300">
<i className="text-blue-500 w-5 h-5" data-lucide="check-circle-2"></i>
<span>Automated scaling during peak loads</span>
</li>
</ul>
</div>
<div className="lg:w-1/2 w-full relative">

<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-20"></div>
<div className="relative bg-[#0F1012] border border-white/10 rounded-xl overflow-hidden shadow-2xl">

<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-white/[0.02]">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>

<div className="p-8">
<div className="flex justify-between items-end mb-8">
<div>
<div className="text-xs text-slate-500 font-medium mb-1">TOTAL REQUESTS</div>
<div className="text-3xl font-mono text-white">2,405,192</div>
</div>
<div className="text-green-400 text-sm font-mono">+12.5%</div>
</div>

<div className="flex items-end gap-2 h-32 w-full">
<div className="w-full bg-blue-500/10 hover:bg-blue-500/30 h-[40%] rounded-sm transition-all"></div>
<div className="w-full bg-blue-500/10 hover:bg-blue-500/30 h-[60%] rounded-sm transition-all"></div>
<div className="w-full bg-blue-500/10 hover:bg-blue-500/30 h-[45%] rounded-sm transition-all"></div>
<div className="w-full bg-blue-500/10 hover:bg-blue-500/30 h-[70%] rounded-sm transition-all"></div>
<div className="w-full bg-blue-500/10 hover:bg-blue-500/30 h-[55%] rounded-sm transition-all"></div>
<div className="w-full bg-blue-500/10 hover:bg-blue-500/30 h-[80%] rounded-sm transition-all"></div>
<div className="w-full bg-blue-500/20 hover:bg-blue-500/40 h-[90%] rounded-sm transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)]"></div>
<div className="w-full bg-blue-500/10 hover:bg-blue-500/30 h-[65%] rounded-sm transition-all"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-y border-white/5 py-12 bg-white/[0.01]">
<div>
<div className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-2">100+</div>
<div className="text-sm text-slate-500 uppercase tracking-widest">Enterprise Clients</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-2">99%</div>
<div className="text-sm text-slate-500 uppercase tracking-widest">Accuracy Rate</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-2">24/7</div>
<div className="text-sm text-slate-500 uppercase tracking-widest">Expert Support</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-2">£50M</div>
<div className="text-sm text-slate-500 uppercase tracking-widest">Revenue Generated</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-blue-600/5"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6">Ready to transform your business?</h2>
<p className="text-xl text-slate-400 font-light mb-10 max-w-2xl mx-auto">
                Join the leading UK companies using our AI solutions to drive growth and efficiency.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-black text-base font-medium rounded-full hover:bg-slate-200 transition-colors" href="#">
                    Get Started Now
                </a>
<a className="w-full sm:w-auto px-8 py-4 text-white text-base font-medium rounded-full border border-white/10 hover:bg-white/5 transition-colors" href="#">
                    Contact Sales
                </a>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-[#050505] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-20">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<i className="text-blue-500 w-6 h-6" data-lucide="cpu"></i>
<span className="text-lg font-medium text-white">AI UK SOLUTIONS</span>
</div>
<p className="text-slate-500 text-lg leading-relaxed max-w-xs font-light">
                    Empowering British enterprise with cutting-edge artificial intelligence infrastructure.
                </p>
</div>
<div>
<h4 className="text-white font-medium mb-6">Product</h4>
<ul className="space-y-4 text-slate-500 text-sm">
<li><a className="hover:text-blue-400 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Company</h4>
<ul className="space-y-4 text-slate-500 text-sm">
<li><a className="hover:text-blue-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Legal</h4>
<ul className="space-y-4 text-slate-500 text-sm">
<li><a className="hover:text-blue-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-600 text-sm">© 2024 AI UK Solutions Ltd. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-slate-600 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-600 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="github"></i></a>
<a className="text-slate-600 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
</footer>


    </>
  );
}
