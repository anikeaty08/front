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
      

<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-600/20">
<i className="w-5 h-5 text-white" data-lucide="bot" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">BotBuilder</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Features</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Templates</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">API</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Pricing</a>
</div>
<div className="hidden md:flex items-center gap-3">
<a className="text-xs font-medium text-slate-600 hover:text-slate-900 px-3 py-2" href="#">Log in</a>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-xs px-4 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-lg">
                    Build for free
                </button>
</div>
<div className="md:hidden">
<button className="text-slate-500 hover:text-slate-900 transition-colors">
<i className="w-5 h-5" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</nav>

<section className="pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-50/50 via-white to-white -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium mb-6 hover:bg-slate-100 transition-colors cursor-pointer">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                        v2.0: Now with Visual Drag &amp; Drop
                    </div>
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
                        Build WhatsApp bots in <span className="text-emerald-600">minutes</span>, not days.
                    </h1>
<p className="text-lg text-slate-500 leading-relaxed mb-8 pr-4">
                        Create powerful, AI-driven chatbots for WhatsApp without writing a single line of code. Automate sales, support, and marketing instantly.
                    </p>
<div className="flex flex-wrap gap-4 items-center">
<button className="bg-emerald-600 hover:bg-emerald-700 text-white h-12 px-6 rounded-full font-medium transition-all shadow-lg shadow-emerald-200 hover:shadow-emerald-300 flex items-center gap-2">
                            Start Building Now <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="group h-12 px-6 rounded-full font-medium text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300 bg-white transition-all flex items-center gap-2">
<i className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" data-lucide="play-circle" strokeWidth="1.5"></i> View Demo
                        </button>
</div>
<div className="mt-10 flex items-center gap-4 text-xs text-slate-400">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-medium text-slate-600">AB</div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-medium text-slate-600">CK</div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-[10px] font-medium text-slate-600">LM</div>
</div>
<p>Join 10,000+ makers building bots</p>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center lg:justify-end">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-50"></div>

<div className="absolute right-0 top-12 w-[480px] h-[400px] bg-white rounded-xl border border-slate-200 shadow-2xl shadow-slate-200/50 hidden lg:block overflow-hidden opacity-90 backdrop-blur-sm">
<div className="p-3 border-b border-slate-100 flex justify-between items-center bg-slate-50/80">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
</div>
<div className="flex items-center gap-2 px-2 py-1 bg-white rounded border border-slate-200">
<i className="w-3 h-3 text-emerald-600" data-lucide="git-branch" strokeWidth="1.5"></i>
<span className="text-[10px] text-slate-500 font-mono">flow-builder/onboarding</span>
</div>
</div>
<div className="p-0 relative h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">

<div className="absolute top-8 left-8 w-40 bg-white rounded-lg border border-slate-200 shadow-md p-3">
<div className="flex justify-between mb-2">
<span className="text-[10px] font-semibold text-slate-700">Trigger</span>
<i className="w-3 h-3 text-amber-500" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<div className="text-[10px] bg-slate-50 p-1.5 rounded text-slate-500 border border-slate-100">User sends "Hello"</div>
<div className="absolute -bottom-1 left-1/2 w-2 h-2 bg-emerald-500 rounded-full border-2 border-white translate-y-1/2 -translate-x-1/2"></div>
</div>
<div className="absolute top-24 left-1/2 w-[1px] h-12 bg-slate-300 -translate-x-1/2"></div>
<div className="absolute top-36 left-1/2 -translate-x-1/2 w-48 bg-white rounded-lg border-2 border-emerald-500 shadow-lg p-3 z-10">
<div className="flex justify-between mb-2">
<span className="text-[10px] font-semibold text-slate-700">Send Message</span>
<i className="w-3 h-3 text-emerald-500" data-lucide="message-square" strokeWidth="1.5"></i>
</div>
<div className="text-[10px] bg-emerald-50 p-1.5 rounded text-emerald-800 border border-emerald-100 mb-1">
                                    Welcome to PizzaBot! 🍕<br/>Tap 'Order' to start.
                                </div>
<div className="flex gap-1 mt-2">
<div className="bg-slate-100 text-[9px] px-2 py-1 rounded text-slate-500">Button: Order</div>
</div>
<div className="absolute -top-1 left-1/2 w-2 h-2 bg-slate-300 rounded-full border-2 border-white -translate-y-1/2 -translate-x-1/2"></div>
</div>
</div>
</div>

<div className="relative bg-white border-[6px] border-slate-900 rounded-[2.5rem] shadow-2xl w-[280px] h-[560px] overflow-hidden z-10 lg:-mr-8 transform lg:rotate-[-3deg] hover:rotate-0 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">

<div className="bg-[#075E54] h-8 w-full flex justify-between items-end px-5 pb-1">
<span className="text-[10px] text-white/90 font-medium">9:41</span>
<div className="flex gap-1 mb-0.5">
<div className="w-2.5 h-2.5 bg-white/90 rounded-full"></div>
<div className="w-2.5 h-2.5 border border-white/90 rounded-[1px]"></div>
</div>
</div>

<div className="bg-[#075E54] p-3 flex items-center gap-3 text-white shadow-md z-10 relative">
<i className="w-5 h-5" data-lucide="chevron-left" strokeWidth="1.5"></i>
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center relative shadow-sm">
<i className="w-5 h-5 text-emerald-700" data-lucide="chef-hat" strokeWidth="1.5"></i>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border border-[#075E54] rounded-full"></div>
</div>
<div className="flex-1">
<p className="text-xs font-semibold tracking-tight">PizzaBot 🍕</p>
<p className="text-[9px] opacity-80">Automated Business</p>
</div>
<div className="flex gap-3">
<i className="w-4 h-4 opacity-80" data-lucide="video" strokeWidth="1.5"></i>
<i className="w-4 h-4 opacity-80" data-lucide="phone" strokeWidth="1.5"></i>
</div>
</div>

<div className="bg-[#efe7dd] h-full p-3 space-y-3 overflow-y-auto pb-20 relative">

<div className="absolute inset-0 opacity-[0.4]" style={{backgroundImage: 'url(\'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png\')', backgroundSize: '300px'}}></div>
<div className="relative z-10 flex flex-col gap-3">

<div className="flex justify-center my-2">
<span className="bg-slate-200/80 backdrop-blur-sm text-slate-600 text-[9px] px-2 py-0.5 rounded-lg shadow-sm font-medium">Today</span>
</div>

<div className="flex justify-end">
<div className="bg-[#E7FFDB] p-2 rounded-lg rounded-tr-none shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] max-w-[85%] relative min-w-[60px]">
<p className="text-[11px] text-slate-900 leading-snug">I want to order a pizza</p>
<div className="flex justify-end items-center gap-0.5 mt-0.5">
<span className="text-[9px] text-slate-400/80">10:23 AM</span>
<i className="w-3 h-3 text-[#53bdeb]" data-lucide="check-check" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="flex justify-start">
<div className="bg-white p-2 rounded-lg rounded-tl-none shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] max-w-[85%] relative">
<p className="text-[11px] text-slate-900 leading-snug">Awesome! 🍕 What size would you like today?</p>
<span className="text-[9px] text-slate-400 block text-right mt-1">10:23 AM</span>
</div>
</div>

<div className="flex justify-start">
<div className="flex flex-col gap-1.5 w-[85%]">
<button className="bg-white text-emerald-600 text-[11px] font-medium py-2 rounded-lg shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] text-center hover:bg-slate-50 transition-colors">Small (10")</button>
<button className="bg-white text-emerald-600 text-[11px] font-medium py-2 rounded-lg shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] text-center hover:bg-slate-50 transition-colors">Medium (12")</button>
<button className="bg-white text-emerald-600 text-[11px] font-medium py-2 rounded-lg shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] text-center hover:bg-slate-50 transition-colors">Large (14")</button>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full bg-[#f0f2f5] px-2 py-2 flex items-center gap-2 border-t border-slate-200 z-20 pb-5">
<i className="w-5 h-5 text-slate-500" data-lucide="plus" strokeWidth="1.5"></i>
<div className="bg-white flex-1 rounded-lg px-3 py-1.5 shadow-sm border-none flex justify-between items-center">
<span className="text-[11px] text-slate-400">Message...</span>
<i className="w-4 h-4 text-slate-400" data-lucide="sticky-note" strokeWidth="1.5"></i>
</div>
<div className="w-8 h-8 rounded-full bg-[#00a884] flex items-center justify-center shadow-sm">
<i className="w-4 h-4 text-white" data-lucide="mic" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-slate-100 bg-slate-50/30">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-wider mb-8">Empowering businesses globally</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 font-semibold text-xl text-slate-800"><i className="w-5 h-5 fill-current" data-lucide="box"></i> Dropbox</div>
<div className="flex items-center gap-2 font-semibold text-xl text-slate-800"><i className="w-5 h-5 fill-current" data-lucide="hexagon"></i> Linear</div>
<div className="flex items-center gap-2 font-semibold text-xl text-slate-800"><i className="w-5 h-5 fill-current" data-lucide="command"></i> Vercel</div>
<div className="flex items-center gap-2 font-semibold text-xl text-slate-800"><i className="w-5 h-5 fill-current" data-lucide="cloud"></i> Salesforce</div>
<div className="flex items-center gap-2 font-semibold text-xl text-slate-800"><i className="w-5 h-5 fill-current" data-lucide="aperture"></i> Loom</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Everything you need to build</h2>
<p className="text-slate-500">From visual flows to complex API integrations, we give you the tools to automate your WhatsApp presence.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

<div className="md:col-span-2 md:row-span-2 bg-slate-50 rounded-3xl p-8 border border-slate-200 relative overflow-hidden group hover:border-emerald-300/50 transition-all duration-300">
<div className="relative z-10 max-w-sm">
<div className="w-10 h-10 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-4 shadow-sm">
<i className="w-5 h-5 text-emerald-600" data-lucide="workflow" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Visual Flow Builder</h3>
<p className="text-slate-500 text-sm leading-relaxed">Design complex conversation paths with a simple drag-and-drop interface. Map out user journeys, set triggers, and manage responses visually.</p>
</div>

<div className="absolute top-12 right-0 w-[50%] h-full md:translate-x-12 translate-y-12 group-hover:translate-y-8 transition-transform duration-500 ease-out">
<div className="bg-white border border-slate-200 rounded-tl-2xl shadow-xl p-4 h-full w-full">
<div className="flex flex-col gap-4">

<div className="bg-slate-50 border border-slate-200 p-3 rounded-lg w-48 shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] font-semibold text-slate-700">Start</span>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
</div>
<div className="h-1.5 w-24 bg-slate-200 rounded mb-1"></div>
<div className="h-1.5 w-16 bg-slate-200 rounded"></div>
</div>

<div className="h-6 w-[1px] bg-slate-300 ml-6"></div>

<div className="bg-white border-2 border-emerald-500 p-3 rounded-lg w-48 shadow-lg">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] font-semibold text-slate-900">Menu Options</span>
<i className="w-3 h-3 text-emerald-500" data-lucide="list" strokeWidth="1.5"></i>
</div>
<div className="space-y-1.5">
<div className="bg-emerald-50 text-emerald-700 text-[9px] px-2 py-1 rounded border border-emerald-100">1. Browse Products</div>
<div className="bg-slate-50 text-slate-500 text-[9px] px-2 py-1 rounded border border-slate-100">2. Track Order</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 relative overflow-hidden group hover:border-blue-300/50 transition-all duration-300">
<div className="relative z-10">
<div className="w-10 h-10 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-4 shadow-sm">
<i className="w-5 h-5 text-blue-500" data-lucide="webhook" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Powerful API</h3>
<p className="text-slate-500 text-sm">Connect your database via webhooks for dynamic responses.</p>
</div>
<div className="absolute bottom-4 right-4 opacity-10 transform rotate-12 group-hover:scale-110 transition-transform">
<i className="w-24 h-24 text-blue-600" data-lucide="code-2" strokeWidth="1.5"></i>
</div>
</div>

<div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 relative overflow-hidden text-white group">
<div className="relative z-10">
<div className="w-10 h-10 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center mb-4 shadow-inner">
<i className="w-5 h-5 text-emerald-400" data-lucide="bar-chart-3" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold mb-2">Live Analytics</h3>
<p className="text-slate-400 text-sm">Monitor open rates, CTR, and user retention in real-time.</p>
</div>

<div className="absolute bottom-0 left-0 w-full h-16 px-8 flex items-end gap-1 opacity-50">
<div className="w-1/5 h-[40%] bg-emerald-500/30 rounded-t-sm group-hover:h-[50%] transition-all duration-500 delay-75"></div>
<div className="w-1/5 h-[60%] bg-emerald-500/40 rounded-t-sm group-hover:h-[70%] transition-all duration-500 delay-100"></div>
<div className="w-1/5 h-[45%] bg-emerald-500/30 rounded-t-sm group-hover:h-[55%] transition-all duration-500 delay-150"></div>
<div className="w-1/5 h-[80%] bg-emerald-500/80 rounded-t-sm group-hover:h-[90%] transition-all duration-500 delay-200"></div>
<div className="w-1/5 h-[65%] bg-emerald-500/50 rounded-t-sm group-hover:h-[75%] transition-all duration-500 delay-300"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Connects with your stack</h2>
<p className="text-lg text-slate-500 mb-8">Your bot doesn't live in a silo. Integrate natively with the tools you use to run your business.</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
<div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
<i className="w-3 h-3 text-emerald-600" data-lucide="check" strokeWidth="2"></i>
</div>
<span>Sync leads to <strong>Salesforce</strong> &amp; <strong>HubSpot</strong></span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
<div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
<i className="w-3 h-3 text-emerald-600" data-lucide="check" strokeWidth="2"></i>
</div>
<span>Automate workflows with <strong>Zapier</strong></span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
<div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
<i className="w-3 h-3 text-emerald-600" data-lucide="check" strokeWidth="2"></i>
</div>
<span>Manage orders from <strong>Shopify</strong> &amp; <strong>WooCommerce</strong></span>
</li>
</ul>
<a className="inline-flex items-center gap-2 text-emerald-600 font-semibold mt-8 hover:text-emerald-700 transition-colors" href="#">
                        View all 50+ integrations <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-3 gap-4">

<div className="aspect-square bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer">
<i className="w-8 h-8 text-slate-400" data-lucide="database" strokeWidth="1.5"></i>
</div>
<div className="aspect-square bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer">
<i className="w-8 h-8 text-green-600" data-lucide="shopping-bag" strokeWidth="1.5"></i>
</div>
<div className="aspect-square bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer">
<i className="w-8 h-8 text-orange-500" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div className="aspect-square bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer">
<i className="w-8 h-8 text-purple-600" data-lucide="slack" strokeWidth="1.5"></i>
</div>

<div className="aspect-square bg-emerald-600 rounded-2xl shadow-xl shadow-emerald-200 border border-emerald-500 flex items-center justify-center scale-110 z-10">
<i className="w-10 h-10 text-white" data-lucide="bot" strokeWidth="1.5"></i>
</div>
<div className="aspect-square bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer">
<i className="w-8 h-8 text-blue-500" data-lucide="trello" strokeWidth="1.5"></i>
</div>
<div className="aspect-square bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer">
<i className="w-8 h-8 text-blue-400" data-lucide="users" strokeWidth="1.5"></i>
</div>
<div className="aspect-square bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer">
<i className="w-8 h-8 text-slate-600" data-lucide="cloud" strokeWidth="1.5"></i>
</div>
<div className="aspect-square bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer">
<i className="w-8 h-8 text-red-500" data-lucide="webhook" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-semibold text-slate-900 mb-10 text-center tracking-tight">Frequently Asked Questions</h2>
<div className="space-y-4">
<div className="border border-slate-200 rounded-xl p-5 hover:border-emerald-200 transition-colors cursor-pointer group bg-slate-50/50">
<div className="flex justify-between items-center">
<h3 className="font-medium text-slate-900 text-sm">Do I need coding skills to build a bot?</h3>
<i className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<div className="border border-slate-200 rounded-xl p-5 hover:border-emerald-200 transition-colors cursor-pointer group bg-slate-50/50">
<div className="flex justify-between items-center">
<h3 className="font-medium text-slate-900 text-sm">How do I get WhatsApp API access?</h3>
<i className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<div className="border border-slate-200 rounded-xl p-5 hover:border-emerald-200 transition-colors cursor-pointer group bg-slate-50/50">
<div className="flex justify-between items-center">
<h3 className="font-medium text-slate-900 text-sm">Can I broadcast marketing messages?</h3>
<i className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<div className="border border-slate-200 rounded-xl p-5 hover:border-emerald-200 transition-colors cursor-pointer group bg-slate-50/50">
<div className="flex justify-between items-center">
<h3 className="font-medium text-slate-900 text-sm">Is there a free trial?</h3>
<i className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 px-6">
<div className="max-w-5xl mx-auto bg-[#0A0F1C] rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden group">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-emerald-900/40 via-[#0A0F1C] to-[#0A0F1C] -z-10"></div>
<div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/20 blur-[120px] -z-10 rounded-full group-hover:bg-emerald-500/30 transition-colors duration-1000"></div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Ready to launch your bot?</h2>
<p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">Join 5,000+ businesses automating their customer interactions today. Build your first flow in minutes.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-white text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    Get Started for Free
                </button>
<button className="border border-slate-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/5 transition-colors">
                    Talk to Sales
                </button>
</div>
<p className="mt-8 text-xs text-slate-500">No credit card required • 14-day free trial • Cancel anytime</p>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-emerald-600 rounded flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="bot" strokeWidth="1.5"></i>
</div>
<span className="text-base font-semibold text-slate-900">BotBuilder</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed">The easiest way to build, deploy, and manage WhatsApp chatbots for your business.</p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Product</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">Flow Builder</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Templates</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Enterprise</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Resources</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Community</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Help Center</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100 gap-4">
<p className="text-xs text-slate-400">© 2024 BotBuilder AI Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter" strokeWidth="1.5"></i></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><i className="w-4 h-4" data-lucide="github" strokeWidth="1.5"></i></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin" strokeWidth="1.5"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
