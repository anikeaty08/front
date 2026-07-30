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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/flowingribbon-TlkEaNrvCCNZuJBNJN3LXpRF" width="100%"></iframe></div>
<div className="min-h-screen flex pt-10 pr-4 pb-10 pl-4 items-center justify-center">
<div className="w-full max-w-7xl backdrop-blur-sm border rounded-[24px] shadow-xl overflow-hidden bg-white/90 border-neutral-200" style={{}}>

<nav className="flex items-center justify-between px-8 lg:px-12 py-6">
<div className="flex items-center space-x-2">
<div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-md" style={{}}></div>
<span className="text-lg font-semibold">agentsly</span>
</div>
<ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
<li className="relative text-neutral-900" style={{}}>
            Home
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-neutral-900" style={{}}></span>
</li>
<li className="cursor-pointer flex items-center text-neutral-600 hover:text-neutral-900" style={{}}>
            Why Agentsly <i className="w-4 h-4 ml-1" data-lucide="chevron-down"></i>
</li>
<li className="cursor-pointer text-neutral-600 hover:text-neutral-900" style={{}}>Features</li>
<li className="cursor-pointer flex items-center text-neutral-600 hover:text-neutral-900" style={{}}>
            Resources <i className="w-4 h-4 ml-1" data-lucide="chevron-down"></i>
</li>
<li className="cursor-pointer text-neutral-600 hover:text-neutral-900" style={{}}>Pricing</li>
</ul>
<div className="flex items-center space-x-4">
<button className="hidden md:block text-sm font-medium text-neutral-700 hover:text-neutral-900" style={{}}>Sign in</button>
<button className="relative group px-4 py-2 rounded-full text-sm font-medium focus:outline-none">
<span className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 blur-sm opacity-80 group-hover:opacity-100 transition duration-300 ease-out via-blue-600 to-cyan-600" style={{}}></span>
<span className="relative flex items-center gap-2 z-10 bg-gradient-to-br via-blue-500/90 to-cyan-500/90 rounded-full px-4 py-2 shadow-[inset_0_1px_2px_rgba(255,255,255,.25),0_4px_12px_rgba(0,0,0,.4)] ring-1 from-indigo-400/90 ring-white/20 text-white" style={{}}>
              Get access
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</span>
</button>
</div>
</nav>

<section className="px-8 lg:px-12 pb-12 lg:pb-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

<div className="relative flex flex-col justify-center">
<div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br backdrop-hue-rotate-15 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.6),transparent)] from-indigo-400/40 via-indigo-300/20 to-indigo-200/10" style={{}}></div>
<span className="inline-flex items-center text-xs font-medium px-3 py-1.5 border rounded-full w-max mb-6 backdrop-blur-sm bg-white/70 border-neutral-200" style={{}}>
              Your unfair advantage
              <i className="w-3 h-3 ml-1" data-lucide="arrow-right"></i>
</span>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-xl text-neutral-900" style={{}}>
              Close more,
              <span className="italic" style={{fontFamily: `'Playfair Display',serif`}}>work less</span>
              with Agentsly
            </h1>
<p className="mt-6 text-lg max-w-lg text-neutral-700" style={{}}>
              Never miss a lead, never waste a follow-up. Agentsly qualifies, nurtures and closes deals while you sleep.
            </p>

<div className="flex gap-8 mt-8 mb-8">
<div className="">
<p className="text-2xl font-semibold">1.9K<span className="text-indigo-500" style={{}}>+</span></p>
<p className="text-xs uppercase tracking-wider text-neutral-500" style={{}}>Agents Onboard</p>
</div>
<div className="">
<p className="text-2xl font-semibold">3x<span className="text-indigo-500" style={{}}>+</span></p>
<p className="text-xs uppercase tracking-wider text-neutral-500" style={{}}>Higher Conversions</p>
</div>
<div className="">
<p className="text-2xl font-semibold">24/7</p>
<p className="text-xs uppercase tracking-wider text-neutral-500" style={{}}>Follow-up</p>
</div>
</div>

<div className="flex items-center gap-4 mb-6">
<div className="flex -space-x-2">
<img alt="" className="w-8 h-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/32?img=12" style={{}} />
<img alt="" className="w-8 h-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/32?img=22" style={{}} />
<img alt="" className="w-8 h-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/32?img=32" style={{}} />
<img alt="" className="w-8 h-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/32?img=42" style={{}} />
</div>
<span className="text-xs text-neutral-500" style={{}}>Join them today</span>
</div>
<div className="flex items-center space-x-4">
<button className="relative group px-6 py-3 rounded-full text-sm font-medium focus:outline-none">
<span className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 blur-sm opacity-80 group-hover:opacity-100 transition duration-300 ease-out via-blue-600 to-cyan-600" style={{}}></span>
<span className="relative flex items-center gap-2 z-10 shadow-[inset_0_1px_2px_rgba(255,255,255,.25),0_4px_12px_rgba(0,0,0,.4)] ring-1 bg-gradient-to-br via-blue-500/90 to-cyan-500/90 rounded-full pt-3 pr-6 pb-3 pl-6 ring-white/20 text-white from-indigo-400/90" style={{}}>
                  Get started
                </span>
</button>
<button className="px-6 py-3 text-sm font-medium border rounded-full flex items-center bg-white border-neutral-300 hover:bg-neutral-50 text-neutral-900" style={{}}>
                Demo <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="flex items-center justify-center">
<div className="w-full max-w-md border rounded-2xl shadow-lg overflow-hidden bg-white border-neutral-200" style={{}}>
<div className="p-6 flex items-center space-x-4 border-b border-neutral-100" style={{}}>
<img alt="avatar" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2.5&w=96&h=96&q=80" />
<div className="">
<h3 className="text-sm font-medium text-neutral-900" style={{}}>Alex Rodriguez</h3>
<p className="text-sm text-neutral-500" style={{}}>Health Insurance Agent</p>
</div>
</div>
<div className="px-6 py-4 space-y-4">
<div className="flex items-center text-sm text-neutral-600" style={{}}>
<i className="w-4 h-4 mr-2" data-lucide="users"></i>
                  1,247 Active leads
                </div>
<div className="flex items-center text-sm text-neutral-600" style={{}}>
<i className="w-4 h-4 mr-2" data-lucide="message-circle"></i>
                  Auto-qualifying prospects
                </div>
<div className="flex items-center text-sm text-neutral-600" style={{}}>
<i className="w-4 h-4 mr-2" data-lucide="clock"></i>
                  24/7 Response time
                </div>
</div>
<div className="px-6 py-4 bg-neutral-50" style={{}}>
<h4 className="text-sm font-medium mb-4 text-neutral-800" style={{}}>Recent Activity</h4>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-2 h-2 bg-green-500 rounded-full" style={{}}></div>
<span className="text-sm text-neutral-700" style={{}}>Lead qualified</span>
</div>
<span className="text-xs text-neutral-500" style={{}}>2 min ago</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-2 h-2 bg-indigo-500 rounded-full" style={{}}></div>
<span className="text-sm text-neutral-700" style={{}}>Follow-up sent</span>
</div>
<span className="text-xs text-neutral-500" style={{}}>5 min ago</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-2 h-2 bg-green-500 rounded-full" style={{}}></div>
<span className="text-sm text-neutral-700" style={{}}>Deal closed</span>
</div>
<span className="text-xs text-neutral-500" style={{}}>12 min ago</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-8 lg:px-12 py-16 border-t border-neutral-200" style={{}}>
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold mb-4 text-neutral-900" style={{}}>Why Agentsly?</h2>
<p className="text-lg max-w-2xl mx-auto text-neutral-600" style={{}}>Automate your entire sales process from lead capture to closing</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 bg-indigo-100" style={{}}>
<i className="w-6 h-6 text-indigo-600" data-lucide="zap" style={{}}></i>
</div>
<h3 className="text-lg font-semibold mb-2">Instant Response</h3>
<p className="text-sm text-neutral-600" style={{}}>Answer prospects in seconds and keep conversations hot</p>
</div>
<div className="text-center">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 bg-green-100" style={{}}>
<i className="w-6 h-6 text-green-600" data-lucide="brain" style={{}}></i>
</div>
<h3 className="text-lg font-semibold mb-2">AI-Powered</h3>
<p className="text-sm text-neutral-600" style={{}}>Qualifies, nurtures and recommends the best plan automatically</p>
</div>
<div className="text-center">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 bg-cyan-100" style={{}}>
<i className="w-6 h-6 text-cyan-600" data-lucide="plug" style={{}}></i>
</div>
<h3 className="text-lg font-semibold mb-2">Easy Integration</h3>
<p className="text-sm text-neutral-600" style={{}}>Seamlessly integrates with your existing CRM and tools</p>
</div>
<div className="text-center">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 bg-orange-100" style={{}}>
<i className="w-6 h-6 text-orange-600" data-lucide="trending-up" style={{}}></i>
</div>
<h3 className="text-lg font-semibold mb-2">3x Conversions</h3>
<p className="text-sm text-neutral-600" style={{}}>Convert more leads with automated follow-ups</p>
</div>
</div>
</section>

<section className="px-8 lg:px-12 py-16 text-center bg-gradient-to-r from-indigo-50 to-blue-50" style={{}}>
<h2 className="text-3xl font-semibold mb-4 text-neutral-900" style={{}}>Ready to dominate Open Enrollment?</h2>
<p className="text-lg mb-8 max-w-2xl mx-auto text-neutral-600" style={{}}>Join 1,900+ agents who are already closing more deals with less effort</p>
<button className="relative group px-8 py-4 rounded-full text-sm font-medium focus:outline-none">
<span className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 blur-sm opacity-80 group-hover:opacity-100 transition duration-300 ease-out via-blue-600 to-cyan-600" style={{}}></span>
<span className="relative flex items-center gap-2 z-10 bg-gradient-to-br via-blue-500/90 to-cyan-500/90 rounded-full px-8 py-4 shadow-[inset_0_1px_2px_rgba(255,255,255,.25),0_4px_12px_rgba(0,0,0,.4)] ring-1 from-indigo-400/90 ring-white/20 text-white" style={{}}>
            Get started today
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</span>
</button>
</section>
</div>
</div>


    </>
  );
}
