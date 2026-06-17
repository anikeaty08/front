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
      

<div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
<div className="w-full max-w-[1300px] h-full flex justify-between px-6">
<div className="w-px h-full bg-black/[0.03]"></div>
<div className="w-px h-full bg-black/[0.03] hidden sm:block"></div>
<div className="w-px h-full bg-black/[0.03] hidden md:block"></div>
<div className="w-px h-full bg-black/[0.03] hidden lg:block"></div>
<div className="w-px h-full bg-black/[0.03]"></div>
</div>
</div>

<div className="relative z-10 w-full overflow-hidden">

<div className="bg-[#111] text-zinc-300 py-2.5 text-center text-sm flex justify-center items-center gap-2">
            Ask more from CRM. Ask Attio. <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
<button className="absolute right-4 top-2 text-zinc-500 hover:text-white"><i className="w-4 h-4" data-lucide="x" strokeWidth="1.5"></i></button>
</div>

<header className="sticky top-0 z-50 bg-[#fcfcfc]/80 backdrop-blur-md border-b border-black/[0.04]">
<div className="max-w-[1300px] mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 text-xl font-semibold tracking-tight" href="#">
<svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.85-6.878l1.733-1.734c.905-.905 1.558-1.558 1.558-2.67 0-1.282-.916-2.126-2.203-2.126-1.233 0-2.072.77-2.316 1.84h-1.63c.273-1.868 1.76-3.153 3.946-3.153 2.15 0 3.868 1.34 3.868 3.44 0 1.53-.878 2.373-2.022 3.518l-1.127 1.13v.163h3.3v1.59h-5.107v-2zM12 18a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" fill="black"></path></svg>
                        attio
                    </a>
<nav className="hidden md:flex items-center gap-6 text-lg text-zinc-600">
<a className="hover:text-black flex items-center gap-1" href="#">Platform <i className="w-4 h-4 text-zinc-400" data-lucide="chevron-down" strokeWidth="1.5"></i></a>
<a className="hover:text-black flex items-center gap-1" href="#">Resources <i className="w-4 h-4 text-zinc-400" data-lucide="chevron-down" strokeWidth="1.5"></i></a>
<a className="hover:text-black" href="#">Customers</a>
<a className="hover:text-black" href="#">Pricing</a>
</nav>
</div>
<div className="flex items-center gap-4 text-lg">
<a className="text-zinc-600 hover:text-black hidden sm:block" href="#">Sign in</a>
<a className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-zinc-800 transition-colors" href="#">Start for free</a>
</div>
</div>
</header>

<section className="pt-24 pb-16 px-6 max-w-[1100px] mx-auto text-center border-b border-black/[0.04]">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10 bg-white text-sm text-zinc-600 mb-8 cursor-pointer hover:bg-zinc-50 transition-colors">
                Meet the Developer Platform, now with MCP <i className="w-3.5 h-3.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
<h1 className="text-6xl sm:text-7xl font-semibold tracking-tight text-black mb-6 leading-tight">
                Customer <br/> relationship magic.
            </h1>
<p className="text-xl sm:text-2xl text-zinc-500 mb-10 tracking-tight">
                Attio is the AI CRM for GTM.
            </p>
<div className="flex items-center justify-center gap-4 mb-20">
<a className="bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-zinc-800 transition-colors shadow-lg shadow-black/10" href="#">Start for free</a>
<a className="bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold border border-black/10 hover:bg-zinc-50 transition-colors" href="#">Talk to sales</a>
</div>

<div className="inline-flex bg-zinc-100 p-1 rounded-xl mb-12">
<button className="px-6 py-2 rounded-lg text-lg text-zinc-500 hover:text-black transition-colors">Ask Attio</button>
<button className="px-6 py-2 rounded-lg text-lg text-zinc-500 hover:text-black transition-colors">Data model</button>
<button className="px-6 py-2 rounded-lg text-lg text-zinc-500 hover:text-black transition-colors">Workflows</button>
<button className="px-6 py-2 rounded-lg text-lg text-black bg-white shadow-sm font-semibold transition-colors">Reporting</button>
</div>

<div className="relative w-full rounded-2xl bg-white border border-black/[0.08] shadow-2xl shadow-black/[0.03] overflow-hidden text-left text-sm flex flex-col h-[500px]">

<div className="flex items-center justify-between px-4 py-3 border-b border-black/[0.04] bg-zinc-50/50">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-md bg-zinc-200 flex items-center justify-center"><i className="w-3.5 h-3.5 text-zinc-500" data-lucide="layers" strokeWidth="1.5"></i></div>
<span className="font-semibold text-base">Basepoint</span>
<i className="w-4 h-4 text-zinc-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<div className="flex items-center gap-4 text-zinc-500">
<div className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="bar-chart-2" strokeWidth="1.5"></i> Reports</div>
<div className="text-black font-semibold">Business Metrics</div>
<div className="w-px h-4 bg-zinc-300"></div>
<i className="w-4 h-4" data-lucide="help-circle" strokeWidth="1.5"></i>
</div>
</div>

<div className="flex flex-1 overflow-hidden">

<div className="w-56 border-r border-black/[0.04] bg-zinc-50/30 p-3 flex flex-col gap-1 overflow-y-auto">
<div className="flex items-center justify-between text-zinc-500 px-2 py-1.5 rounded-md hover:bg-zinc-100">
<span className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="zap" strokeWidth="1.5"></i> Quick Actions</span>
<span className="text-xs bg-white border border-zinc-200 px-1 rounded">⌘K</span>
</div>
<div className="mt-2 text-xs font-semibold text-zinc-400 px-2 mb-1">WORKSPACE</div>
<div className="flex flex-col gap-0.5 text-zinc-600">
<div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-zinc-100"><i className="w-4 h-4" data-lucide="home" strokeWidth="1.5"></i> Home</div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-zinc-100"><i className="w-4 h-4" data-lucide="bell" strokeWidth="1.5"></i> Notifications</div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-zinc-100"><i className="w-4 h-4" data-lucide="check-square" strokeWidth="1.5"></i> Tasks</div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-zinc-100"><i className="w-4 h-4" data-lucide="file-text" strokeWidth="1.5"></i> Notes</div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-zinc-100"><i className="w-4 h-4" data-lucide="mail" strokeWidth="1.5"></i> Emails</div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-zinc-100"><i className="w-4 h-4" data-lucide="phone" strokeWidth="1.5"></i> Calls</div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-zinc-100 text-black font-semibold"><i className="w-4 h-4" data-lucide="bar-chart" strokeWidth="1.5"></i> Reports</div>
</div>
</div>

<div className="flex-1 flex flex-col min-w-0">
<div className="flex items-center justify-between p-3 border-b border-black/[0.04]">
<div className="flex items-center gap-2 bg-white border border-black/[0.08] px-3 py-1.5 rounded-lg shadow-sm">
<i className="w-4 h-4 text-zinc-500" data-lucide="building" strokeWidth="1.5"></i> Top companies <i className="w-3.5 h-3.5 text-zinc-400 ml-1" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<div className="flex items-center gap-3 text-zinc-500">
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="filter" strokeWidth="1.5"></i> Sorted by <span className="text-black">Last email interaction</span></span>
<div className="w-px h-4 bg-zinc-300"></div>
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="settings-2" strokeWidth="1.5"></i> View settings</span>
</div>
</div>
<div className="flex-1 overflow-auto bg-white">
<table className="w-full text-left whitespace-nowrap">
<thead>
<tr className="border-b border-black/[0.04] text-zinc-500">
<th className="font-normal px-4 py-3 w-10"><input className="rounded border-zinc-300 w-4 h-4" type="checkbox"/></th>
<th className="font-normal px-4 py-3">Company</th>
<th className="font-normal px-4 py-3">Domains</th>
<th className="font-normal px-4 py-3">Associated deals</th>
<th className="font-normal px-4 py-3">ICP Fit</th>
<th className="font-normal px-4 py-3">Estimated ARR</th>
</tr>
</thead>
<tbody className="text-zinc-800">

<tr className="border-b border-black/[0.02] hover:bg-zinc-50/50">
<td className="px-4 py-3"><input className="rounded border-zinc-300 w-4 h-4" type="checkbox"/></td>
<td className="px-4 py-3 font-semibold flex items-center gap-2"><div className="w-5 h-5 bg-black rounded flex items-center justify-center text-white text-xs">V</div> Vercel</td>
<td className="px-4 py-3"><span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded border border-blue-100">vercel.com</span></td>
<td className="px-4 py-3 text-zinc-500">2 deals</td>
<td className="px-4 py-3"><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-semibold">Excellent</span></td>
<td className="px-4 py-3 text-zinc-500">$100M-$250M</td>
</tr>
<tr className="border-b border-black/[0.02] hover:bg-zinc-50/50">
<td className="px-4 py-3"><input className="rounded border-zinc-300 w-4 h-4" type="checkbox"/></td>
<td className="px-4 py-3 font-semibold flex items-center gap-2"><div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center text-white text-xs">D</div> DigitalOcean</td>
<td className="px-4 py-3"><span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded border border-blue-100">digitalocean.com</span></td>
<td className="px-4 py-3 text-zinc-500">1 deal</td>
<td className="px-4 py-3"><span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-semibold">Medium</span></td>
<td className="px-4 py-3 text-zinc-500">$500M-$1B</td>
</tr>
<tr className="border-b border-black/[0.02] hover:bg-zinc-50/50">
<td className="px-4 py-3"><input className="rounded border-zinc-300 w-4 h-4" type="checkbox"/></td>
<td className="px-4 py-3 font-semibold flex items-center gap-2"><div className="w-5 h-5 bg-zinc-800 rounded flex items-center justify-center text-white text-xs"><i className="w-3 h-3" data-lucide="github"></i></div> GitHub</td>
<td className="px-4 py-3"><span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded border border-blue-100">github.com</span></td>
<td className="px-4 py-3 text-zinc-500">3 deals</td>
<td className="px-4 py-3"><span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-xs font-semibold">Good</span></td>
<td className="px-4 py-3 text-zinc-500">$1B-$10B</td>
</tr>
<tr className="border-b border-black/[0.02] hover:bg-zinc-50/50">
<td className="px-4 py-3"><input className="rounded border-zinc-300 w-4 h-4" type="checkbox"/></td>
<td className="px-4 py-3 font-semibold flex items-center gap-2"><div className="w-5 h-5 bg-[#635BFF] rounded flex items-center justify-center text-white text-xs">S</div> Stripe</td>
<td className="px-4 py-3"><span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded border border-blue-100">stripe.com</span></td>
<td className="px-4 py-3 text-zinc-500">1 deal</td>
<td className="px-4 py-3"><span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-xs font-semibold">Good</span></td>
<td className="px-4 py-3 text-zinc-500">$1B-$10B</td>
</tr>
<tr className="border-b border-black/[0.02] hover:bg-zinc-50/50">
<td className="px-4 py-3"><input className="rounded border-zinc-300 w-4 h-4" type="checkbox"/></td>
<td className="px-4 py-3 font-semibold flex items-center gap-2"><div className="w-5 h-5 bg-pink-500 rounded flex items-center justify-center text-white text-xs">F</div> Figma</td>
<td className="px-4 py-3"><span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded border border-blue-100">figma.com</span></td>
<td className="px-4 py-3 text-zinc-500">2 deals</td>
<td className="px-4 py-3"><span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-xs font-semibold">Good</span></td>
<td className="px-4 py-3 text-zinc-500">$250M-$500M</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-black/[0.04]">
<div className="max-w-[1000px] mx-auto px-6 py-12 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
<div className="text-xl font-semibold tracking-tight flex items-center gap-1"><i className="w-6 h-6" data-lucide="circle-dashed"></i> Granola</div>
<div className="text-xl font-semibold tracking-tight flex items-center gap-1"><i className="w-6 h-6" data-lucide="wind"></i> Flow</div>
<div className="text-xl font-semibold tracking-tight flex items-center gap-1"><i className="w-6 h-6" data-lucide="headphones"></i> Listen</div>
<div className="text-xl font-semibold tracking-tight flex items-center gap-1"><i className="w-6 h-6" data-lucide="eye"></i> Obvious</div>
<div className="text-xl font-semibold tracking-tight flex items-center gap-1"><i className="w-6 h-6" data-lucide="box"></i> Modal</div>
<div className="text-xl font-semibold tracking-tight flex items-center gap-1 border-2 border-current p-1">USV</div>
</div>
</section>

<section className="py-24 px-6 border-b border-black/[0.04]">
<div className="max-w-[1200px] mx-auto">
<div className="flex items-center justify-between text-xs text-zinc-400 font-semibold uppercase tracking-widest mb-16">
<span>[01] Powerful Platform</span>
<span>Item 1 - 4</span>
</div>
<div className="grid lg:grid-cols-12 gap-16">

<div className="lg:col-span-4 flex flex-col gap-24 relative">

<div className="sticky top-32">
<h2 className="text-4xl font-semibold tracking-tight mb-6 leading-snug">
<span className="text-black">GTM at full throttle.</span> <span className="text-zinc-400">Execute your revenue strategy with precision. Design powerful workflows, deploy AI, integrate your data and build detailed reports — all in one platform.</span>
</h2>
</div>

<div className="flex flex-col gap-12 mt-32">
<div>
<h3 className="text-xl font-semibold text-black mb-3">Automate everything</h3>
<p className="text-lg text-zinc-500 mb-4 leading-relaxed">You're in control. Automate even the most complex business processes with our powerful, intelligent automation engine.</p>
<a className="inline-flex items-center gap-1 text-lg font-semibold text-zinc-800 hover:text-black group" href="#">Explore automations <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i></a>
</div>
<div>
<h3 className="text-xl font-semibold text-black mb-3">Deploy AI</h3>
<p className="text-lg text-zinc-500 mb-4 leading-relaxed">Search and create with Ask Attio, connect your stack with MCP, or put agents to work on complex tasks like prospecting and lead scoring.</p>
<a className="inline-flex items-center gap-1 text-lg font-semibold text-zinc-800 hover:text-black group" href="#">Explore AI <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i></a>
</div>
<div>
<h3 className="text-xl font-semibold text-black mb-3">Connect any type of data</h3>
<p className="text-lg text-zinc-500 mb-4 leading-relaxed">Sync product data, billing data, and everything in between, for a real-time single source of truth for your business.</p>
<a className="inline-flex items-center gap-1 text-lg font-semibold text-zinc-800 hover:text-black group" href="#">Explore data <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i></a>
</div>
<div>
<h3 className="text-xl font-semibold text-black mb-3">Powerful reporting</h3>
<p className="text-lg text-zinc-500 mb-4 leading-relaxed">Create real-time, detailed reports that scale with your data. Visualize, customize, and get deep insights in seconds — not hours.</p>
<a className="inline-flex items-center gap-1 text-lg font-semibold text-zinc-800 hover:text-black group" href="#">Explore reporting <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i></a>
</div>
</div>
</div>

<div className="lg:col-span-8 relative">

<div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-200 -translate-x-1/2 hidden md:block"></div>
<div className="grid md:grid-cols-2 gap-6 relative z-10">

<div className="bg-zinc-50 border border-black/[0.04] rounded-2xl p-6 h-[400px] flex flex-col items-center justify-center relative overflow-hidden group">
<div className="w-full max-w-xs relative">
<div className="bg-white border border-black/[0.08] shadow-sm rounded-lg p-3 text-sm flex items-center justify-between z-10 relative">
<div className="flex items-center gap-2"><div className="w-6 h-6 rounded bg-blue-100 text-blue-600 flex items-center justify-center"><i className="w-3 h-3" data-lucide="play"></i></div> Trigger</div>
<span className="text-zinc-400">When Deal updated</span>
</div>
<div className="w-px h-8 bg-zinc-300 mx-auto"></div>
<div className="bg-white border border-black/[0.08] shadow-sm rounded-lg p-3 text-sm flex items-center justify-between z-10 relative">
<div className="flex items-center gap-2"><div className="w-6 h-6 rounded bg-purple-100 text-purple-600 flex items-center justify-center"><i className="w-3 h-3" data-lucide="split"></i></div> Switch</div>
<span className="text-zinc-400">Condition</span>
</div>
<div className="flex justify-between px-10">
<div className="w-px h-8 bg-zinc-300"></div>
<div className="w-px h-8 bg-zinc-300"></div>
</div>
<div className="flex justify-between gap-4">
<div className="bg-white border border-black/[0.08] shadow-sm rounded-lg p-3 text-sm flex-1 text-center truncate">Upsell sequence</div>
<div className="bg-white border border-black/[0.08] shadow-sm rounded-lg p-3 text-sm flex-1 text-center truncate">Nurture sequence</div>
</div>
</div>
</div>

<div className="bg-zinc-50 border border-black/[0.04] rounded-2xl p-6 h-[400px] flex flex-col items-start relative overflow-hidden mt-12 md:mt-24">
<div className="w-full bg-white border border-black/[0.08] shadow-sm rounded-xl p-4 mb-4">
<div className="flex items-center gap-2 mb-3 text-sm font-semibold text-zinc-700">
<div className="w-2 h-2 rounded-full bg-green-500"></div> Onboarding hand-off
                                    </div>
<div className="h-2 w-3/4 bg-zinc-100 rounded mb-2"></div>
<div className="h-2 w-1/2 bg-zinc-100 rounded"></div>
</div>
<div className="w-full bg-white border border-black/[0.08] shadow-sm rounded-xl p-4 opacity-70 scale-95 origin-top">
<div className="flex items-center gap-2 mb-3 text-sm font-semibold text-zinc-700">
<div className="w-2 h-2 rounded-full bg-orange-500"></div> SQL lead routing
                                    </div>
<div className="h-2 w-full bg-zinc-100 rounded mb-2"></div>
</div>

<div className="absolute bottom-6 right-6 opacity-20">
<i className="w-16 h-16" data-lucide="box" strokeWidth="1"></i>
</div>
</div>

<div className="bg-zinc-50 border border-black/[0.04] rounded-2xl p-6 h-[400px] flex flex-col gap-4 relative overflow-hidden -mt-12 md:-mt-12">
<div className="bg-white border border-black/[0.08] shadow-sm rounded-lg p-4 text-sm relative">
<div className="font-semibold text-zinc-800 mb-1 flex justify-between">Activate PLG motion <span className="text-xs bg-zinc-100 px-1.5 py-0.5 rounded text-zinc-500">AI</span></div>
<p className="text-zinc-500 text-xs">Does this company sell software to other businesses?</p>
</div>
<div className="bg-white border border-black/[0.08] shadow-sm rounded-lg p-4 text-sm relative">
<div className="font-semibold text-zinc-800 mb-1 flex justify-between">Evaluate size of opportunity <span className="text-xs bg-zinc-100 px-1.5 py-0.5 rounded text-zinc-500">AI</span></div>
<p className="text-zinc-500 text-xs">Did the company raise any funds recently?</p>
</div>
<div className="bg-white border border-black/[0.08] shadow-sm rounded-lg p-4 text-sm relative">
<div className="font-semibold text-zinc-800 mb-1 flex justify-between">Identify key stakeholders <span className="text-xs bg-zinc-100 px-1.5 py-0.5 rounded text-zinc-500">AI</span></div>
<p className="text-zinc-500 text-xs">Who are the key stakeholders at the company?</p>
</div>
</div>

<div className="bg-zinc-50 border border-black/[0.04] rounded-2xl p-6 h-[400px] flex items-center justify-center relative overflow-hidden mt-12 md:mt-24">
<div className="grid grid-cols-3 gap-6 bg-white p-6 rounded-xl border border-black/[0.08] shadow-sm">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><i className="w-4 h-4" data-lucide="snowflake"></i></div>
<div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600"><i className="w-4 h-4" data-lucide="slack"></i></div>
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600"><i className="w-4 h-4" data-lucide="database"></i></div>
<div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600"><i className="w-4 h-4" data-lucide="figma"></i></div>
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white"><i className="w-4 h-4" data-lucide="github"></i></div>
<div className="w-8 h-8 rounded-full bg-[#635BFF]/10 flex items-center justify-center text-[#635BFF]"><i className="w-4 h-4" data-lucide="credit-card"></i></div>
</div>
</div>

<div className="bg-zinc-50 border border-black/[0.04] rounded-2xl p-6 h-[400px] flex flex-col relative overflow-hidden md:col-span-2 mt-12">
<div className="flex gap-2 mb-6">
<span className="text-xs font-semibold px-2 py-1 bg-white border border-black/[0.08] rounded-md shadow-sm">7D</span>
<span className="text-xs text-zinc-500 px-2 py-1">30D</span>
<span className="text-xs text-zinc-500 px-2 py-1">3M</span>
<span className="text-xs text-zinc-500 px-2 py-1">12M</span>
<span className="text-xs text-zinc-500 px-2 py-1">All</span>
</div>
<div className="flex-1 flex items-end gap-4 px-4 pb-8 relative border-b border-l border-black/10">

<div className="absolute -left-2 top-0 bottom-0 flex flex-col justify-between text-[10px] text-zinc-400 py-4 items-end pr-2 w-10">
<span>$2.4M</span><span>$2.0M</span><span>$1.6M</span><span>$1.2M</span><span>$0.8M</span><span>$0.4M</span>
</div>

<div className="w-12 bg-blue-100 border border-blue-200 rounded-t-sm h-[30%]"></div>
<div className="w-12 bg-indigo-100 border border-indigo-200 rounded-t-sm h-[40%]"></div>
<div className="w-12 bg-purple-100 border border-purple-200 rounded-t-sm h-[60%]"></div>
<div className="w-12 bg-yellow-400 border border-yellow-500 rounded-t-sm h-[80%] relative group cursor-pointer">

<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white border border-black/10 shadow-lg rounded p-3 w-40 z-20 hidden group-hover:block">
<div className="text-sm font-semibold mb-1 text-black">Pro plan</div>
<div className="text-xs text-zinc-500 flex justify-between mb-1"><span>Time</span> <span className="text-black">July 2024</span></div>
<div className="text-xs text-zinc-500 flex justify-between"><span>Amount</span> <span className="text-black">$1,933,240.00</span></div>
</div>
</div>
<div className="w-12 bg-zinc-100 border border-zinc-200 rounded-t-sm h-[50%]"></div>

<div className="absolute -bottom-6 left-10 right-0 flex justify-around text-[10px] text-zinc-400">
<span>July</span><span>August</span><span>September</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-32 bg-[#fafafa] border border-black/[0.04] rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
<div className="z-10">
<h2 className="text-3xl font-semibold tracking-tight text-black mb-6">Start with a 14-day<br/>free trial of Pro.</h2>
<div className="flex items-center gap-4">
<a className="bg-black text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-zinc-800 transition-colors" href="#">Start for free</a>
<a className="text-lg font-semibold text-zinc-600 hover:text-black" href="#">See our plans</a>
</div>
</div>

<div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center opacity-30 pointer-events-none scale-150 origin-right">
<svg fill="none" height="100" stroke="black" strokeWidth="1" viewbox="0 0 400 100" width="400">
<path d="M50 50 L100 0 L200 0 L150 50 L200 100 L100 100 Z"></path>
<path d="M150 50 L200 0 L300 0 L250 50 L300 100 L200 100 Z"></path>
<path d="M250 50 L300 0 L400 0 L350 50 L400 100 L300 100 Z"></path>
</svg>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-black/[0.04] bg-gradient-to-b from-white to-transparent">
<div className="max-w-[1000px] mx-auto text-center">
<div className="flex items-center justify-between text-xs text-zinc-400 font-semibold uppercase tracking-widest mb-16 w-full max-w-[1200px] mx-auto absolute left-0 right-0 px-6 mt-[-60px]">
<span>[02] Adaptive Model</span>
<span>Data -&gt; Business</span>
</div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-500 mb-8 leading-snug max-w-3xl mx-auto">
                    A seismic shift in CRM flexibility. Attio's powerful data model adapts to how your business works, not the other way around. <span className="text-black">Your business model — perfectly reflected in your CRM.</span>
</h2>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-white text-sm text-black font-semibold mb-16 shadow-sm hover:bg-zinc-50 transition-colors">
                    Explore our data model
                </button>
<div className="flex flex-wrap justify-center gap-2 mb-16">
<span className="px-4 py-1.5 rounded-full border border-black/10 bg-white text-sm text-zinc-600">Scale-ups</span>
<span className="px-4 py-1.5 rounded-full border border-black/10 bg-zinc-100 text-black font-semibold">SaaS startups</span>
<span className="px-4 py-1.5 rounded-full border border-black/10 bg-white text-sm text-zinc-600">SMBs</span>
<span className="px-4 py-1.5 rounded-full border border-black/10 bg-white text-sm text-zinc-600">Investors</span>
</div>

<div className="relative w-full max-w-4xl mx-auto h-[400px] border border-black/[0.08] bg-white rounded-2xl shadow-xl shadow-black/[0.03] p-8 flex items-center justify-center overflow-hidden">

<svg className="absolute inset-0 w-full h-full pointer-events-none stroke-zinc-200" fill="none" strokeWidth="2">
<path d="M 200 150 C 300 150, 300 250, 400 250"></path>
<path d="M 700 150 C 600 150, 600 250, 500 250"></path>
</svg>
<div className="flex w-full justify-between items-start relative z-10">

<div className="w-64 bg-white border border-black/10 rounded-xl shadow-sm text-left">
<div className="px-4 py-3 border-b border-black/5 flex items-center justify-between bg-zinc-50 rounded-t-xl">
<div className="flex items-center gap-2 font-semibold text-sm"><div className="w-5 h-5 rounded bg-green-100 text-green-600 flex items-center justify-center"><i className="w-3 h-3" data-lucide="user"></i></div> User</div>
<span className="text-xs text-zinc-400 bg-white border border-zinc-200 px-1.5 rounded">Standard</span>
</div>
<div className="p-3 text-sm text-zinc-600 flex flex-col gap-2">
<div className="flex items-center gap-2"><i className="w-3.5 h-3.5 text-zinc-400" data-lucide="hash"></i> User ID</div>
<div className="flex items-center gap-2"><i className="w-3.5 h-3.5 text-zinc-400" data-lucide="activity"></i> Engagement score</div>
<div className="flex items-center gap-2"><i className="w-3.5 h-3.5 text-zinc-400" data-lucide="tag"></i> User type</div>
<div className="text-xs text-zinc-400 pl-6 mt-1">+ 8 More Attributes</div>
</div>
</div>

<div className="w-64 bg-white border border-black/10 rounded-xl shadow-lg text-left transform translate-y-12">
<div className="px-4 py-3 border-b border-black/5 flex items-center justify-between bg-zinc-50 rounded-t-xl">
<div className="flex items-center gap-2 font-semibold text-sm"><div className="w-5 h-5 rounded bg-blue-100 text-blue-600 flex items-center justify-center"><i className="w-3 h-3" data-lucide="users"></i></div> Person</div>
<span className="text-xs text-zinc-400 bg-white border border-zinc-200 px-1.5 rounded">Standard</span>
</div>
<div className="p-3 text-sm text-zinc-600 flex flex-col gap-2">
<div className="flex items-center gap-2"><i className="w-3.5 h-3.5 text-zinc-400" data-lucide="type"></i> Name</div>
<div className="flex items-center gap-2"><i className="w-3.5 h-3.5 text-zinc-400" data-lucide="mail"></i> Email</div>
<div className="flex items-center gap-2"><i className="w-3.5 h-3.5 text-zinc-400" data-lucide="building"></i> Company</div>
<div className="text-xs text-zinc-400 pl-6 mt-1">+ 12 More Attributes</div>
</div>
</div>

<div className="w-64 bg-white border border-black/10 rounded-xl shadow-sm text-left">
<div className="px-4 py-3 border-b border-black/5 flex items-center justify-between bg-zinc-50 rounded-t-xl">
<div className="flex items-center gap-2 font-semibold text-sm"><div className="w-5 h-5 rounded bg-purple-100 text-purple-600 flex items-center justify-center"><i className="w-3 h-3" data-lucide="target"></i></div> Deal</div>
<span className="text-xs text-zinc-400 bg-white border border-zinc-200 px-1.5 rounded">Standard</span>
</div>
<div className="p-3 text-sm text-zinc-600 flex flex-col gap-2">
<div className="flex items-center gap-2"><i className="w-3.5 h-3.5 text-zinc-400" data-lucide="type"></i> Deal name</div>
<div className="flex items-center gap-2"><i className="w-3.5 h-3.5 text-zinc-400" data-lucide="layout"></i> Workspace</div>
<div className="flex items-center gap-2"><i className="w-3.5 h-3.5 text-zinc-400" data-lucide="git-commit"></i> Stage</div>
<div className="text-xs text-zinc-400 pl-6 mt-1">+ 5 More Attributes</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-black/[0.04]">
<div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center gap-16">

<div className="w-64 h-64 shrink-0 rounded-full border border-black/10 bg-zinc-50 flex items-center justify-center p-8">
<svg className="w-full h-full text-zinc-300" fill="currentColor" viewbox="0 0 200 200"><path d="M100 0C44.77 0 0 44.77 0 100s44.77 100 100 100 100-44.77 100-100S155.23 0 100 0zm0 30c16.57 0 30 13.43 30 30s-13.43 30-30 30-30-13.43-30-30 13.43-30 30-30zm40 130H60v-10c0-22.09 17.91-40 40-40h0c22.09 0 40 17.91 40 40v10z"></path></svg>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 font-semibold text-lg mb-8 tracking-tight">
<i className="w-5 h-5 fill-black" data-lucide="triangle"></i> BRAVADO
                    </div>
<blockquote className="text-3xl text-black font-semibold tracking-tight leading-snug mb-8">
                        "Attio is the first CRM that feels truly modern. It's powerful, flexible, and fast to build with. There's nothing like it on the market."
                    </blockquote>
<div className="text-zinc-600 mb-8">
<span className="font-semibold text-black">Sahil Mansuri,</span> CEO &amp; Co-founder
                    </div>
<div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 border-t border-black/5 pt-6">
<span className="text-zinc-400">Bravado's favorite features</span>
<a className="flex items-center gap-1 hover:text-black" href="#"><i className="w-4 h-4" data-lucide="git-branch"></i> Workflows</a>
<a className="flex items-center gap-1 hover:text-black" href="#"><i className="w-4 h-4" data-lucide="target"></i> Deals</a>
<a className="flex items-center gap-1 hover:text-black" href="#"><i className="w-4 h-4" data-lucide="bar-chart-2"></i> Reports</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-black/[0.04]">
<div className="max-w-[1000px] mx-auto text-center relative">
<div className="flex items-center justify-between text-xs text-zinc-400 font-semibold uppercase tracking-widest mb-16 absolute top-0 left-0 right-0 mt-[-60px]">
<span>[03] Data Enrichment</span>
<span>Speed 1:1</span>
</div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-500 mb-8 leading-snug max-w-2xl mx-auto">
                    Build fast. Forget months of setup. Attio syncs immediately with your email and calendar, <span className="text-black">building a powerful CRM right before your eyes.</span>
</h2>
<button className="bg-black text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-zinc-800 transition-colors mb-12 shadow-md">
                    Start for free
                </button>
<div className="flex flex-wrap justify-center gap-2 mb-16">
<span className="px-4 py-1.5 rounded-full border border-black/10 bg-white text-sm text-zinc-600 flex items-center gap-2"><i className="w-3.5 h-3.5" data-lucide="mail"></i> Email events</span>
<span className="px-4 py-1.5 rounded-full border border-black/10 bg-white text-sm text-zinc-600 flex items-center gap-2"><i className="w-3.5 h-3.5" data-lucide="calendar"></i> Calendar events</span>
<span className="px-4 py-1.5 rounded-full border border-black/10 bg-white text-sm text-zinc-600 flex items-center gap-2"><i className="w-3.5 h-3.5" data-lucide="activity"></i> Segment events</span>
<span className="px-4 py-1.5 rounded-full border border-black/10 bg-white text-sm text-zinc-600 flex items-center gap-2"><i className="w-3.5 h-3.5" data-lucide="database"></i> Data sources</span>
</div>

<div className="w-full max-w-4xl mx-auto border border-black/[0.04] bg-white/50 backdrop-blur rounded-2xl p-6 h-[400px] flex gap-6">
<div className="w-1/4 border border-dashed border-zinc-200 rounded-xl h-full"></div>
<div className="w-1/2 border border-dashed border-zinc-200 rounded-xl h-full flex flex-col gap-4 p-4">
<div className="w-full h-12 bg-zinc-50 rounded-lg"></div>
<div className="w-full flex-1 bg-zinc-50 rounded-lg"></div>
</div>
<div className="w-1/4 flex flex-col gap-6">
<div className="border border-dashed border-zinc-200 rounded-xl flex-1"></div>
<div className="border border-dashed border-zinc-200 rounded-xl flex-1"></div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-black/[0.04] relative overflow-hidden">

<svg className="absolute bottom-0 right-0 w-full h-[150%] pointer-events-none opacity-50 z-0 text-blue-500" fill="none" preserveaspectratio="none" stroke="currentColor" strokeWidth="0.1" viewbox="0 0 100 100">
<path d="M 0 100 C 30 80, 70 20, 100 0"></path>
</svg>
<div className="max-w-[1000px] mx-auto relative z-10">
<div className="flex items-center justify-between text-xs text-zinc-400 font-semibold uppercase tracking-widest mb-16">
<span>[04] Built for Scale</span>
<span>Growth + Security</span>
</div>
<div className="max-w-xl mb-24">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-500 leading-snug">
                        The system of action for the next generation. <span className="text-black">Attio is built for scale. Our customers sort through millions of records with sub-50ms latency.</span>
</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12">
<div className="border-l border-black/10 pl-6">
<div className="text-3xl font-semibold text-black mb-1">1000000<span className="text-zinc-400">+</span></div>
<div className="text-zinc-500 text-sm">Customer records</div>
</div>
<div className="border-l border-black/10 pl-6">
<div className="text-3xl font-semibold text-black mb-1">1<span className="text-zinc-400">+</span></div>
<div className="text-zinc-500 text-sm">Countries</div>
</div>
<div className="border-l border-black/10 pl-6">
<div className="text-3xl font-semibold text-black mb-1">1<span className="text-zinc-400">+</span></div>
<div className="text-zinc-500 text-sm">Customers</div>
</div>
<div className="border-l border-black/10 pl-6">
<div className="text-3xl font-semibold text-black mb-1">1<span className="text-zinc-400">st</span></div>
<div className="text-zinc-500 text-sm">Uptime</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-b border-black/[0.04] bg-white">
<div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
<div className="max-w-md">
<h2 className="text-2xl font-semibold tracking-tight text-black mb-2">Scale with security. <span className="text-zinc-500">Attio is audited and certified by industry-leading third party standards.</span></h2>
<a className="inline-block mt-4 px-4 py-2 border border-black/10 rounded-lg text-sm font-semibold hover:bg-zinc-50 transition-colors" href="#">Talk to sales</a>
</div>
<div className="flex items-center gap-8 md:gap-16">
<div className="flex flex-col items-center gap-3 text-zinc-500">
<i className="w-10 h-10 text-zinc-300" data-lucide="shield-check" strokeWidth="1"></i>
<span className="text-xs font-semibold uppercase tracking-widest">GDPR</span>
</div>
<div className="flex flex-col items-center gap-3 text-zinc-500">
<i className="w-10 h-10 text-zinc-300" data-lucide="lock" strokeWidth="1"></i>
<span className="text-xs font-semibold uppercase tracking-widest">CCPA</span>
</div>
<div className="flex flex-col items-center gap-3 text-zinc-500">
<i className="w-10 h-10 text-zinc-300" data-lucide="check-circle" strokeWidth="1"></i>
<span className="text-xs font-semibold uppercase tracking-widest">ISO 27001</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-center">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black mb-8">
                thousands of companies.
            </h2>
<div className="flex justify-center items-center gap-4">
<a className="bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-zinc-800 transition-colors shadow-lg" href="#">Start for free</a>
<a className="bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold border border-black/10 hover:bg-zinc-50 transition-colors" href="#">Talk to sales</a>
</div>
</section>

<footer className="bg-black text-white pt-20 pb-10 px-6">
<div className="max-w-[1200px] mx-auto">
<div className="grid grid-cols-2 md:grid-cols-6 gap-12 mb-24">
<div className="col-span-2 flex flex-col justify-between">
<a className="flex items-center gap-2 text-xl font-semibold tracking-tight text-white mb-8" href="#">
<svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.85-6.878l1.733-1.734c.905-.905 1.558-1.558 1.558-2.67 0-1.282-.916-2.126-2.203-2.126-1.233 0-2.072.77-2.316 1.84h-1.63c.273-1.868 1.76-3.153 3.946-3.153 2.15 0 3.868 1.34 3.868 3.44 0 1.53-.878 2.373-2.022 3.518l-1.127 1.13v.163h3.3v1.59h-5.107v-2zM12 18a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" fill="white"></path></svg>
                            attio
                        </a>
</div>
<div>
<h4 className="font-semibold mb-6 text-sm">Platform</h4>
<ul className="flex flex-col gap-4 text-zinc-400 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Features <span className="bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded ml-1">NEW</span></a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Email extension</a></li>
<li><a className="hover:text-white transition-colors" href="#">iOS app</a></li>
<li><a className="hover:text-white transition-colors" href="#">Android app</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-6 text-sm">Import from</h4>
<ul className="flex flex-col gap-4 text-zinc-400 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Salesforce</a></li>
<li><a className="hover:text-white transition-colors" href="#">HubSpot</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pipedrive</a></li>
<li><a className="hover:text-white transition-colors" href="#">Zoho</a></li>
<li><a className="hover:text-white transition-colors" href="#">Excel</a></li>
<li><a className="hover:text-white transition-colors" href="#">CSV</a></li>
</ul>
<h4 className="font-semibold mb-6 mt-10 text-sm">Attio for</h4>
<ul className="flex flex-col gap-4 text-zinc-400 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Startups</a></li>
<li><a className="hover:text-white transition-colors" href="#">Deal flow</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-6 text-sm">Apps</h4>
<ul className="flex flex-col gap-4 text-zinc-400 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Gmail</a></li>
<li><a className="hover:text-white transition-colors" href="#">Outlook</a></li>
<li><a className="hover:text-white transition-colors" href="#">Segment</a></li>
<li><a className="hover:text-white transition-colors" href="#">Mailchimp</a></li>
<li><a className="hover:text-white transition-colors" href="#">Slack</a></li>
<li><a className="hover:text-white transition-colors" href="#">Outreach</a></li>
<li><a className="hover:text-white transition-colors" href="#">Mixmax</a></li>
<li><a className="hover:text-white transition-colors" href="#">Typeform</a></li>
<li><a className="hover:text-white transition-colors" href="#">Zapier</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-6 text-sm">Resources</h4>
<ul className="flex flex-col gap-4 text-zinc-400 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Startup program</a></li>
<li><a className="hover:text-white transition-colors" href="#">Help center</a></li>
<li><a className="hover:text-white transition-colors" href="#">Automation templates</a></li>
<li><a className="hover:text-white transition-colors" href="#">Developers</a></li>
<li><a className="hover:text-white transition-colors" href="#">System status</a></li>
<li><a className="hover:text-white transition-colors" href="#">Hire an expert</a></li>
<li><a className="hover:text-white transition-colors" href="#">Downloads</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between border-t border-zinc-800 pt-8 text-xs text-zinc-500">
<div className="flex items-center gap-4 mb-4 md:mb-0">
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="youtube"></i></a>
</div>
<div className="flex items-center gap-6">
<span>© 2024 Attio Ltd. All rights reserved.</span>
<a className="hover:text-white transition-colors" href="#">Terms &amp; Conditions</a>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">DPA</a>
</div>
</div>
</div>

<button className="fixed bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-xl hover:scale-105 transition-transform">
<i className="w-5 h-5 fill-current" data-lucide="message-square"></i>
</button>
</footer>
</div>


    </>
  );
}
