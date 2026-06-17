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
      

<nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded flex items-center justify-center">
<span className="text-white font-semibold text-xs">S</span>
</div>
<span className="text-white font-semibold tracking-tighter text-lg">SCALEONE</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#process">The System</a>
<a className="hover:text-white transition-colors" href="#results">Results</a>
</div>
<a className="hidden md:block bg-white text-black px-4 py-2 rounded text-sm font-medium hover:bg-neutral-200 transition-colors" href="#contact">
                Book Audit
            </a>

<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 mesh-bg">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative max-w-4xl mx-auto text-center space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-4">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Accepting new clients for Q4
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1]">
                Scale revenue. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 glow-text">Automate sales.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
                We help forward-thinking businesses generate revenue and reclaim time through data-driven paid advertising and custom AI CRM ecosystems.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
<button className="w-full md:w-auto bg-white text-black px-8 py-3 rounded text-sm font-medium hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group">
                    Start Scaling
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="w-full md:w-auto px-8 py-3 rounded text-sm font-medium text-white border border-white/10 hover:bg-white/5 transition-colors">
                    View Case Studies
                </button>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-black/50 overflow-hidden py-8 relative">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
<div className="flex whitespace-nowrap animate-marquee">

<div className="flex items-center gap-16 px-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2"><i className="w-6 h-6" data-lucide="triangle"></i><span className="font-semibold tracking-widest text-lg">VERTEX</span></div>
<div className="flex items-center gap-2"><i className="w-6 h-6" data-lucide="circle"></i><span className="font-semibold tracking-widest text-lg">ORBIT</span></div>
<div className="flex items-center gap-2"><i className="w-6 h-6" data-lucide="hexagon"></i><span className="font-semibold tracking-widest text-lg">NEXUS</span></div>
<div className="flex items-center gap-2"><i className="w-6 h-6" data-lucide="box"></i><span className="font-semibold tracking-widest text-lg">CUBE</span></div>
<div className="flex items-center gap-2"><i className="w-6 h-6" data-lucide="layers"></i><span className="font-semibold tracking-widest text-lg">STACK</span></div>
<div className="flex items-center gap-2"><i className="w-6 h-6" data-lucide="zap"></i><span className="font-semibold tracking-widest text-lg">BOLT</span></div>
</div>
<div className="flex items-center gap-16 px-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2"><i className="w-6 h-6" data-lucide="triangle"></i><span className="font-semibold tracking-widest text-lg">VERTEX</span></div>
<div className="flex items-center gap-2"><i className="w-6 h-6" data-lucide="circle"></i><span className="font-semibold tracking-widest text-lg">ORBIT</span></div>
<div className="flex items-center gap-2"><i className="w-6 h-6" data-lucide="hexagon"></i><span className="font-semibold tracking-widest text-lg">NEXUS</span></div>
<div className="flex items-center gap-2"><i className="w-6 h-6" data-lucide="box"></i><span className="font-semibold tracking-widest text-lg">CUBE</span></div>
<div className="flex items-center gap-2"><i className="w-6 h-6" data-lucide="layers"></i><span className="font-semibold tracking-widest text-lg">STACK</span></div>
<div className="flex items-center gap-2"><i className="w-6 h-6" data-lucide="zap"></i><span className="font-semibold tracking-widest text-lg">BOLT</span></div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">Core Capabilities</h2>
<p className="text-neutral-400">Two pillars of modern growth. One unified strategy.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group glass p-8 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-600/20 transition-all"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="trending-up"></i>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Lead Generation</h3>
<p className="text-neutral-400 mb-6 leading-relaxed">
                            Stop relying on referrals. We engineer predictable revenue streams using high-intent paid advertising on Meta, Google, and LinkedIn.
                        </p>
<ul className="space-y-3 text-sm text-neutral-300">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-indigo-400" data-lucide="check"></i> Multi-channel campaign management
                            </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-indigo-400" data-lucide="check"></i> Creative testing &amp; optimization
                            </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-indigo-400" data-lucide="check"></i> Data-driven audience targeting
                            </li>
</ul>
</div>
</div>

<div className="group glass p-8 rounded-2xl border border-white/5 hover:border-pink-500/30 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-pink-600/20 transition-all"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="bot"></i>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">AI Sales Automation</h3>
<p className="text-neutral-400 mb-6 leading-relaxed">
                            Convert leads while you sleep. We build custom CRM systems powered by AI to nurture prospects, book meetings, and follow up automatically.
                        </p>
<ul className="space-y-3 text-sm text-neutral-300">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-pink-400" data-lucide="check"></i> Automated lead nurturing flows
                            </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-pink-400" data-lucide="check"></i> AI-powered conversational agents
                            </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-pink-400" data-lucide="check"></i> Seamless CRM integration
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950/50 relative border-y border-white/5" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<span className="text-purple-400 text-xs font-semibold tracking-wider uppercase mb-2 block">Our Methodology</span>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">The Growth Engine</h2>
</div>
<div className="relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-neutral-800 via-indigo-500/50 to-neutral-800 -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">

<div className="group relative">
<div className="h-full flex flex-col items-center text-center p-6 bg-black border border-white/10 rounded-xl hover:border-indigo-500 transition-colors duration-300">
<div className="w-14 h-14 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white mb-4 shadow-[0_0_15px_rgba(99,102,241,0.3)] group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="megaphone"></i>
</div>
<div className="text-xs font-mono text-indigo-400 mb-2">STAGE 01</div>
<h4 className="text-lg font-medium text-white mb-2">Paid Advertising</h4>
<p className="text-sm text-neutral-500">High-volume traffic generation via Meta &amp; Google Ads targeted at ideal buyer personas.</p>
</div>
</div>

<div className="group relative">
<div className="h-full flex flex-col items-center text-center p-6 bg-black border border-white/10 rounded-xl hover:border-purple-500 transition-colors duration-300">
<div className="w-14 h-14 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white mb-4 shadow-[0_0_15px_rgba(168,85,247,0.3)] group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="layout"></i>
</div>
<div className="text-xs font-mono text-purple-400 mb-2">STAGE 02</div>
<h4 className="text-lg font-medium text-white mb-2">Landing Page</h4>
<p className="text-sm text-neutral-500">High-converting assets designed to capture interest and qualify prospects instantly.</p>
</div>
</div>

<div className="group relative">
<div className="h-full flex flex-col items-center text-center p-6 bg-black border border-white/10 rounded-xl hover:border-pink-500 transition-colors duration-300">
<div className="w-14 h-14 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white mb-4 shadow-[0_0_15px_rgba(236,72,153,0.3)] group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="database"></i>
</div>
<div className="text-xs font-mono text-pink-400 mb-2">STAGE 03</div>
<h4 className="text-lg font-medium text-white mb-2">CRM Integration</h4>
<p className="text-sm text-neutral-500">Centralized lead data management ensuring zero leakage and organized pipelines.</p>
</div>
</div>

<div className="group relative">
<div className="h-full flex flex-col items-center text-center p-6 bg-black border border-white/10 rounded-xl hover:border-emerald-500 transition-colors duration-300">
<div className="w-14 h-14 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white mb-4 shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="sparkles"></i>
</div>
<div className="text-xs font-mono text-emerald-400 mb-2">STAGE 04</div>
<h4 className="text-lg font-medium text-white mb-2">AI Automation</h4>
<p className="text-sm text-neutral-500">Immediate SMS/Email follow-ups and AI booking agents to close deals faster.</p>
</div>
</div>
</div>
</div>

<div className="mt-20 p-8 glass rounded-2xl border border-white/5 max-w-4xl mx-auto">
<div className="flex items-center justify-between mb-8">
<div>
<h4 className="text-white font-medium">Efficiency Impact</h4>
<p className="text-xs text-neutral-500">Comparing traditional methods vs ScaleOne System</p>
</div>
<div className="flex gap-4 text-xs">
<div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-neutral-700"></div>Manual</div>
<div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-indigo-500"></div>AI ScaleOne</div>
</div>
</div>
<div className="space-y-6">

<div>
<div className="flex justify-between text-sm text-neutral-400 mb-2">
<span>Lead Response Time</span>
<span className="text-green-400">-98%</span>
</div>
<div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden relative">
<div className="absolute top-0 left-0 h-full bg-neutral-600 w-full" style={{width: '80%'}}></div>
<div className="absolute top-0 left-0 h-full bg-indigo-500 w-full shadow-[0_0_10px_rgba(99,102,241,0.5)]" style={{width: '2%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-sm text-neutral-400 mb-2">
<span>Follow-up Consistency</span>
<span className="text-green-400">+300%</span>
</div>
<div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden relative">
<div className="absolute top-0 left-0 h-full bg-neutral-600 w-full" style={{width: '30%'}}></div>
<div className="absolute top-0 left-0 h-full bg-purple-500 w-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" style={{width: '95%'}}></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-black">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-12 text-center">Trusted by founders</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass p-6 rounded-xl border border-white/5 flex flex-col justify-between">
<div>
<div className="flex gap-1 text-yellow-500 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">
                            "ScaleOne completely revamped our lead flow. The AI CRM setup alone saved our sales team about 20 hours a week. The ROI was evident within the first month."
                        </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold text-white">JD</div>
<div>
<div className="text-white text-sm font-medium">James Dalton</div>
<div className="text-neutral-500 text-xs">CEO, TechFlow</div>
</div>
</div>
</div>

<div className="glass p-6 rounded-xl border border-white/5 flex flex-col justify-between">
<div>
<div className="flex gap-1 text-yellow-500 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">
                            "We were struggling to convert paid traffic. ScaleOne built a landing page funnel that actually converts, and the automation handles the rest. Highly recommended."
                        </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold text-white">AS</div>
<div>
<div className="text-white text-sm font-medium">Sarah Alistair</div>
<div className="text-neutral-500 text-xs">Marketing Dir, Apex</div>
</div>
</div>
</div>

<div className="glass p-6 rounded-xl border border-white/5 flex flex-col justify-between">
<div>
<div className="flex gap-1 text-yellow-500 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">
                            "The transparency is what I love. I see exactly where every dollar goes and the AI system ensures no lead is left behind. A true partner in growth."
                        </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold text-white">MK</div>
<div>
<div className="text-white text-sm font-medium">Marcus King</div>
<div className="text-neutral-500 text-xs">Founder, EstateAI</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-indigo-900/10"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative max-w-3xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Ready to scale your agency?</h2>
<p className="text-neutral-400 mb-10 text-lg">Join the forward-thinking businesses using ScaleOne to automate growth and save time.</p>
<form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto mb-8">
<input className="flex-1 bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Enter your email" type="email"/>
<button className="bg-white text-black font-medium px-6 py-3 rounded hover:bg-neutral-200 transition-colors" type="submit">
                    Get Started
                </button>
</form>
<p className="text-neutral-600 text-xs">No credit card required. Free audit included.</p>
</div>
</section>

<footer className="border-t border-white/5 bg-black pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-5 h-5 bg-neutral-800 rounded flex items-center justify-center">
<span className="text-white font-semibold text-[10px]">S</span>
</div>
<span className="text-white font-semibold tracking-tighter">SCALEONE</span>
</div>
<p className="text-neutral-500 text-sm">Automating the future of sales and marketing for modern businesses.</p>
</div>
<div>
<h5 className="text-white font-medium mb-4">Services</h5>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Paid Advertising</a></li>
<li><a className="hover:text-white transition-colors" href="#">Lead Generation</a></li>
<li><a className="hover:text-white transition-colors" href="#">AI CRM Setup</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sales Automation</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-medium mb-4">Company</h5>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-medium mb-4">Connect</h5>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-neutral-600">
<p>© 2024 ScaleOne Agency. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-neutral-400" href="#">Privacy Policy</a>
<a className="hover:text-neutral-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
