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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
slate: {
850: '#151e2e',
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}

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
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 glass-card border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-slate-900 flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:infinity-linear" width="20"></iconify-icon>
</div>
                OUSSAMA.AI
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#about">About</a>
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#process">Process</a>
<a className="bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-blue-500/20 text-xs" href="#booking">
                    Book Strategy Call
                </a>
</div>
<button className="md:hidden text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-slate-50 to-transparent opacity-70 -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium tracking-wide">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    Accepting New Clients Worldwide
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-slate-900">
                    AI-Powered Sales Systems That Turn Visitors Into <span className="gradient-text">Paying Clients</span>.
                </h1>
<p className="text-lg text-slate-500 max-w-lg leading-relaxed font-light">
                    I build automated sales infrastructures for businesses in Morocco and worldwide. Stop chasing leads—let systems capture, nurture, and close them for you.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all hover:shadow-xl hover:shadow-blue-900/10 hover:-translate-y-0.5" href="#booking">
                        Book a Free Strategy Call
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-all hover:border-slate-300" href="#process">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                        See How It Works
                    </a>
</div>

<div className="pt-8 flex items-center gap-4 text-sm text-slate-500">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-600">IT</div>
<div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-600">RE</div>
<div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-600">SA</div>
</div>
<p>Trusted by serious businesses ready to scale.</p>
</div>
</div>

<div className="relative hidden lg:block h-[500px]">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-slate-50 rounded-3xl border border-slate-100"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-full max-w-md h-full py-12 flex flex-col justify-between">

<div className="glass-card p-4 rounded-xl shadow-sm w-48 self-center animate-float" style={{animationDelay: '0s'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
<iconify-icon icon="solar:globe-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-400 uppercase tracking-wider">Traffic Source</div>
<div className="font-medium text-slate-800">Website</div>
</div>
</div>
</div>

<div className="absolute top-[22%] left-1/2 h-12 w-px border-l border-dashed border-slate-300 -translate-x-1/2"></div>

<div className="flex justify-between w-full px-2">

<div className="glass-card p-4 rounded-xl shadow-lg border-blue-100 w-48 animate-float" style={{animationDelay: '1s'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
<iconify-icon icon="solar:chat-round-dots-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-xs text-blue-600 uppercase tracking-wider font-semibold">Processing</div>
<div className="font-medium text-slate-800">AI Agent</div>
</div>
</div>
<div className="mt-3 space-y-2">
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-2/3"></div>
</div>
<div className="flex justify-between text-[10px] text-slate-400">
<span>Qualifying...</span>
<span>68%</span>
</div>
</div>
</div>

<div className="glass-card p-4 rounded-xl shadow-sm w-48 animate-float" style={{animationDelay: '2s'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
<iconify-icon icon="solar:database-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-400 uppercase tracking-wider">Storage</div>
<div className="font-medium text-slate-800">CRM Sync</div>
</div>
</div>
</div>
</div>

<svg className="absolute top-[40%] left-0 w-full h-24 pointer-events-none text-slate-300 z-0" style={{overflow: 'visible'}}>
<path d="M 224 0 L 224 30 L 100 30 L 100 60" fill="none" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1"></path>
<path d="M 224 0 L 224 30 L 348 30 L 348 60" fill="none" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1"></path>
<path d="M 100 150 L 100 180 L 224 180 L 224 210" fill="none" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1"></path>
<path d="M 348 150 L 348 180 L 224 180 L 224 210" fill="none" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1"></path>
</svg>

<div className="glass-card p-4 rounded-xl shadow-sm w-48 self-center bg-slate-900 border-slate-800 animate-float" style={{animationDelay: '0.5s'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-green-400">
<iconify-icon icon="solar:wad-of-money-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-400 uppercase tracking-wider">Outcome</div>
<div className="font-medium text-white">Revenue</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 py-24 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">Most businesses are leaking revenue.</h2>
<p className="text-slate-400 text-lg font-light">Without a system, you are relying on luck. Luck doesn't scale.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 mb-6">
<iconify-icon icon="solar:bell-off-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Slow Response Time</h3>
<p className="text-slate-400 leading-relaxed font-light">Leads go cold within 5 minutes. If you aren't replying instantly, your competitor is.</p>
</div>
<div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">No Follow-Up System</h3>
<p className="text-slate-400 leading-relaxed font-light">80% of sales happen after the 5th contact. Most businesses stop after one.</p>
</div>
<div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<div className="w-12 h-12 rounded-lg bg-slate-500/10 flex items-center justify-center text-slate-300 mb-6">
<iconify-icon icon="solar:clipboard-list-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Manual Data Entry</h3>
<p className="text-slate-400 leading-relaxed font-light">Wasting valuable hours copying data from email to spreadsheets instead of selling.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-blue-600 font-medium text-sm tracking-wider uppercase mb-2 block">The Architecture</span>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">From Chaos to Automated Machine</h2>
</div>

<div className="relative">

<div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent -translate-y-1/2 z-0"></div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">

<div className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="24"></iconify-icon>
</div>
<h4 className="font-semibold text-lg mb-2">1. Attraction</h4>
<p className="text-sm text-slate-500">Website &amp; Google Optimization captures high-intent traffic.</p>
</div>

<div className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:chat-line-linear" width="24"></iconify-icon>
</div>
<h4 className="font-semibold text-lg mb-2">2. AI Qualification</h4>
<p className="text-sm text-slate-500">24/7 Chat Agents engage and qualify visitors instantly.</p>
</div>

<div className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:server-path-linear" width="24"></iconify-icon>
</div>
<h4 className="font-semibold text-lg mb-2">3. Automation</h4>
<p className="text-sm text-slate-500">Data syncs to CRM &amp; follow-up sequences trigger automatically.</p>
</div>

<div className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h4 className="font-semibold text-lg mb-2">4. Conversion</h4>
<p className="text-sm text-slate-500">Sales team closes warm leads. Revenue scales.</p>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-slate-100 pt-12">
<div className="text-center">
<div className="text-4xl font-semibold tracking-tight text-slate-900 mb-2">24/7</div>
<div className="text-sm text-slate-500 font-medium">Lead Capture</div>
</div>
<div className="text-center">
<div className="text-4xl font-semibold tracking-tight text-slate-900 mb-2">&lt;1 min</div>
<div className="text-sm text-slate-500 font-medium">Response Time</div>
</div>
<div className="text-center">
<div className="text-4xl font-semibold tracking-tight text-slate-900 mb-2">100%</div>
<div className="text-sm text-slate-500 font-medium">Automated Follow-up</div>
</div>
<div className="text-center">
<div className="text-4xl font-semibold tracking-tight text-slate-900 mb-2">2.5x</div>
<div className="text-sm text-slate-500 font-medium">Avg Conversion Increase</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
<div className="relative bg-white rounded-2xl p-2 h-[450px] overflow-hidden shadow-sm">

<div className="w-full h-full bg-slate-200 rounded-xl flex items-center justify-center flex-col text-slate-400">
<iconify-icon icon="solar:user-circle-linear" width="64"></iconify-icon>
<span className="mt-4 text-sm font-medium">Professional Portrait Placeholder</span>
</div>
</div>

<div className="absolute bottom-8 -right-4 bg-white p-6 rounded-xl shadow-xl max-w-xs border border-slate-100 hidden md:block">
<p className="text-slate-900 font-medium text-lg leading-snug">"I don't sell websites. I build revenue systems."</p>
<div className="mt-4 flex items-center gap-2">
<div className="w-6 h-0.5 bg-blue-600"></div>
<span className="text-xs uppercase tracking-widest text-slate-400">Philosophy</span>
</div>
</div>
</div>
<div className="space-y-8">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">Helping businesses scale with intelligent automation.</h2>
<div className="space-y-4 text-slate-600 leading-relaxed font-light">
<p>
                        Hello, I'm Oussama. I bridge the gap between complex AI technology and practical business results. While most consultants talk about "trends", I focus on implementation.
                    </p>
<p>
                        My goal is simple: to remove the friction from your sales process. By implementing "Digital Sales Employees" (AI Agents), I ensure no lead is ever left behind, allowing you to focus on high-level strategy while your system prints revenue.
                    </p>
</div>

<div className="grid grid-cols-2 gap-4 pt-4">
<div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
<iconify-icon className="text-blue-600" icon="solar:bolt-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Workflow Design</span>
</div>
<div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
<iconify-icon className="text-blue-600" icon="solar:database-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">CRM Systems</span>
</div>
<div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
<iconify-icon className="text-blue-600" icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">AI Automation</span>
</div>
<div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
<iconify-icon className="text-blue-600" icon="solar:graph-up-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Conversion Opt.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Core Services</h2>
<p className="text-slate-500 max-w-xl">Modular solutions designed to integrate perfectly into your existing business structure.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all group bg-white">
<div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:sitemap-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 text-slate-900">AI Sales System Setup</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Complete infrastructure build. From high-converting landing pages to CRM integration and tracking pixels.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-slate-600">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Pipeline Architecture
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-600">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Tech Stack Integration
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all group bg-white relative overflow-hidden">
<div className="absolute top-0 right-0 p-3">
<span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Popular</span>
</div>
<div className="w-14 h-14 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chat-square-code-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 text-slate-900">AI Chat Agents</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Custom trained chatbots that act as SDRs. They answer questions, overcome objections, and book meetings on your calendar.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-slate-600">
<iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Website &amp; WhatsApp
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-600">
<iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Lead Qualification
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all group bg-white">
<div className="w-14 h-14 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:refresh-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 text-slate-900">Ongoing Optimization</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Systems need maintenance and improvement. We track conversions and tweak the AI logic to increase ROI monthly.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-slate-600">
<iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> A/B Testing
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-600">
<iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Scale Support
                        </li>
</ul>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-slate-900 font-medium hover:text-blue-600 transition-colors" href="#booking">
                    Let's Build Your Sales Machine
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="booking">
<div className="max-w-6xl mx-auto px-6">
<div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 flex flex-col lg:flex-row">

<div className="lg:w-1/3 p-10 bg-slate-900 text-white flex flex-col justify-between">
<div>
<h2 className="text-2xl font-semibold mb-6">Free 30-Minute AI Sales Strategy Call</h2>
<p className="text-slate-300 text-sm mb-8 font-light">
                            This is not a sales pitch. We will audit your current process and identify where automation can add revenue.
                        </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:clipboard-check-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-sm">System Audit</h4>
<p className="text-xs text-slate-400 mt-1">Identify current revenue leaks.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:lightbulb-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-sm">Opportunity Map</h4>
<p className="text-xs text-slate-400 mt-1">See exactly what to automate.</p>
</div>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-white/10">
<div className="flex items-center gap-2 text-xs text-slate-400">
<iconify-icon className="text-green-400" icon="solar:shield-check-linear"></iconify-icon>
                            No obligation. 100% Secure.
                        </div>
</div>
</div>

<div className="lg:w-2/3 p-4 md:p-8 bg-white min-h-[600px] flex flex-col items-center justify-center relative">

<div className="w-full max-w-md space-y-6">
<div className="flex items-center justify-between mb-8">
<h3 className="text-lg font-medium text-slate-900">Select a Date &amp; Time</h3>
<div className="flex gap-2 text-slate-400">
<iconify-icon className="cursor-pointer hover:text-slate-900" icon="solar:alt-arrow-left-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-900">October 2023</span>
<iconify-icon className="cursor-pointer hover:text-slate-900" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="grid grid-cols-7 gap-2 text-center text-sm mb-4">
<span className="text-xs text-slate-400">Mo</span><span className="text-xs text-slate-400">Tu</span><span className="text-xs text-slate-400">We</span><span className="text-xs text-slate-400">Th</span><span className="text-xs text-slate-400">Fr</span><span className="text-xs text-slate-400">Sa</span><span className="text-xs text-slate-400">Su</span>
<span className="p-2 text-slate-300">28</span><span className="p-2 text-slate-300">29</span><span className="p-2 text-slate-300">30</span><span className="p-2">1</span><span className="p-2">2</span><span className="p-2 text-slate-300">3</span><span className="p-2 text-slate-300">4</span>
<span className="p-2 hover:bg-blue-50 rounded-full cursor-pointer text-slate-900 font-medium">5</span><span className="p-2 hover:bg-blue-50 rounded-full cursor-pointer text-slate-900 font-medium">6</span><span className="p-2 hover:bg-blue-50 rounded-full cursor-pointer text-slate-900 font-medium">7</span><span className="p-2 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-500/30">8</span><span className="p-2 hover:bg-blue-50 rounded-full cursor-pointer text-slate-900 font-medium">9</span><span className="p-2 text-slate-300">10</span><span className="p-2 text-slate-300">11</span>
</div>
<div className="border-t border-slate-100 pt-6">
<p className="text-center text-sm text-slate-500 mb-4">Available times for Oct 8</p>
<div className="grid grid-cols-2 gap-3">
<button className="py-2 px-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 text-sm font-medium">10:00 AM</button>
<button className="py-2 px-4 border border-slate-200 text-slate-600 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors text-sm font-medium">11:30 AM</button>
<button className="py-2 px-4 border border-slate-200 text-slate-600 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors text-sm font-medium">02:00 PM</button>
<button className="py-2 px-4 border border-slate-200 text-slate-600 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors text-sm font-medium">04:30 PM</button>
</div>
</div>
</div>
<div className="absolute bottom-4 text-[10px] text-slate-400">Powered by Calendly (Mockup)</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-center md:text-left">
<a className="text-lg font-bold tracking-tighter text-slate-900 flex items-center justify-center md:justify-start gap-2 mb-2" href="#">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:infinity-linear" width="14"></iconify-icon>
</div>
                    OUSSAMA.AI
                </a>
<p className="text-sm text-slate-500">Building revenue systems for the modern age.</p>
</div>
<div className="flex gap-6 text-sm text-slate-600">
<a className="hover:text-slate-900" href="#">LinkedIn</a>
<a className="hover:text-slate-900" href="#">Twitter</a>
<a className="hover:text-slate-900" href="#">Email</a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 text-center text-xs text-slate-400">
            © 2023 Oussama AI Consulting. All rights reserved. Casablanca / Worldwide.
        </div>
</footer>

    </>
  );
}
