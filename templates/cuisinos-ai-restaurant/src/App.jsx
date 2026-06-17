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
sans: ['Urbanist', 'sans-serif'],
},
colors: {
slate: {
400: '#a5b4fc', /* Soft Pastel Periwinkle Text */
500: '#818cf8',
850: '#2d2b42', /* Lighter Pastel Dark */
900: '#232136', /* Rose Pine Base (Deep Pastel Purple-Black) */
950: '#191724', /* Darker Base */
},
teal: {
400: '#9ccfd8', /* Pastel Foam/Mint */
500: '#31748f', /* Muted Teal */
900: '#1f2d3d',
},
indigo: {
500: '#ebbcba', /* Pastel Rose/Pink for glows */
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-900/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="text-white text-lg font-semibold tracking-tighter flex items-center gap-2" href="#">
<span className="iconify text-teal-400" data-icon="lucide:layers" data-width="20"></span>
            CuisinOS
          </a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#features">
            Features
          </a>
<a className="hover:text-white transition-colors" href="#ai">AI Engine</a>
<a className="hover:text-white transition-colors" href="#architecture">
            Architecture
          </a>
<a className="hover:text-white transition-colors" href="#pricing">
            Pricing
          </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium hover:text-white transition-colors" href="#">
            Sign in
          </a>
<a className="bg-white text-slate-900 text-xs font-semibold px-4 py-2 rounded-full hover:bg-slate-200 transition-colors tracking-tight" href="#">
            Get Started
          </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-teal-400 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
          v2.0 with Voice AI is now live
        </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 text-glow leading-[1.1]">
          Orchestrate your restaurant
          <br className="hidden md:block"/>
          with
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
            AI precision
          </span>
          .
        </h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          The unified operating system for modern hospitality. Reduce order
          errors by 40% and sync your kitchen, front-of-house, and customers in
          real-time.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<a className="h-12 px-8 flex items-center justify-center rounded-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold transition-all btn-glow text-sm" href="#">
            Start Free Trial
          </a>
<button className="h-12 px-8 flex items-center justify-center rounded-full glass-panel hover:bg-white/5 text-white font-medium transition-all text-sm gap-2 group">
<span className="iconify group-hover:scale-110 transition-transform" data-icon="lucide:play-circle" data-width="18"></span>
            Watch Product Tour
          </button>
</div>

<div className="relative max-w-5xl mx-auto animate-float">

<div className="glass-panel-dark rounded-xl border border-white/10 p-1 shadow-2xl relative z-10 overflow-hidden">
<div className="bg-slate-900 rounded-lg p-4 h-[300px] md:h-[500px] w-full flex gap-4">

<div className="w-16 md:w-48 hidden sm:flex flex-col gap-4 border-r border-white/5 pr-4">
<div className="h-8 w-8 rounded bg-teal-500/20 mb-4"></div>
<div className="h-2 w-24 bg-white/10 rounded"></div>
<div className="h-2 w-20 bg-white/10 rounded"></div>
<div className="h-2 w-28 bg-white/10 rounded"></div>
</div>

<div className="flex-1 flex flex-col gap-6">
<div className="flex justify-between items-center border-b border-white/5 pb-4">
<div className="h-6 w-32 bg-white/10 rounded"></div>
<div className="flex gap-2">
<div className="h-8 w-8 rounded-full bg-white/5"></div>
<div className="h-8 w-24 rounded bg-teal-500 text-[10px] text-slate-900 flex items-center justify-center font-bold">
                      LIVE SYNC
                    </div>
</div>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="h-24 rounded bg-white/5 border border-white/5 p-3">
<div className="text-xs text-slate-500 mb-2">Revenue</div>
<div className="text-xl text-white font-medium">$12,405</div>
</div>
<div className="h-24 rounded bg-white/5 border border-white/5 p-3">
<div className="text-xs text-slate-500 mb-2">Active Orders</div>
<div className="text-xl text-teal-400 font-medium">24</div>
</div>
<div className="h-24 rounded bg-white/5 border border-white/5 p-3">
<div className="text-xs text-slate-500 mb-2">Avg Prep Time</div>
<div className="text-xl text-white font-medium">14m</div>
</div>
</div>

<div className="flex-1 rounded bg-white/5 border border-white/5 relative flex items-end justify-between px-4 pb-4 gap-2">
<div className="w-full bg-teal-500/20 h-[40%] rounded-t"></div>
<div className="w-full bg-teal-500/40 h-[70%] rounded-t"></div>
<div className="w-full bg-teal-500/30 h-[50%] rounded-t"></div>
<div className="w-full bg-teal-500/60 h-[85%] rounded-t"></div>
<div className="w-full bg-teal-500/50 h-[60%] rounded-t"></div>
</div>
</div>
</div>
</div>

<div className="absolute -right-4 md:-right-12 top-20 w-48 md:w-64 glass-panel bg-slate-800 p-4 rounded-lg shadow-2xl border border-white/10 z-20 hidden md:block">
<div className="flex justify-between items-center mb-3">
<span className="text-xs font-mono text-slate-400">#ORD-492</span>
<span className="text-[10px] bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded uppercase font-bold tracking-wider">
                Cooking
              </span>
</div>
<div className="space-y-2 mb-3">
<div className="h-2 w-3/4 bg-white/20 rounded"></div>
<div className="h-2 w-1/2 bg-white/10 rounded"></div>
</div>
<div className="flex items-center gap-2 text-[10px] text-teal-400">
<span className="iconify" data-icon="lucide:clock" data-width="12"></span>
              12:04 PM
            </div>
</div>

<div className="absolute -left-4 md:-left-8 bottom-12 w-40 md:w-56 glass-panel bg-slate-900 p-3 rounded-[2rem] shadow-2xl border border-white/10 z-20 hidden md:block">
<div className="flex justify-center mb-4">
<div className="w-12 h-1 bg-white/10 rounded-full"></div>
</div>
<div className="space-y-3">
<div className="bg-white/5 p-2 rounded-lg rounded-tl-none">
<p className="text-[10px] text-slate-300">
                  I'd like a vegan burger, no onions.
                </p>
</div>
<div className="bg-teal-500/10 p-2 rounded-lg rounded-tr-none border border-teal-500/20">
<p className="text-[10px] text-teal-200">
                  Got it. One Vegan Burger, no onions added to cart.
                </p>
</div>
<div className="h-8 w-full bg-teal-500 rounded-full mt-2 flex items-center justify-center text-[10px] text-slate-900 font-bold">
                Place Order
              </div>
</div>
</div>
</div>

<div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-sm font-medium">
<span className="iconify" data-icon="lucide:shield-check"></span>
            Enterprise Security
          </div>
<div className="flex items-center gap-2 text-sm font-medium">
<span className="iconify" data-icon="lucide:zap"></span>
            Real-time Sync
          </div>
<div className="flex items-center gap-2 text-sm font-medium">
<span className="iconify" data-icon="lucide:database"></span>
            Automated Backups
          </div>
<div className="flex items-center gap-2 text-sm font-medium">
<span className="iconify" data-icon="lucide:globe"></span>
            99.99% Uptime
          </div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950/50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">
              Eliminate the friction of disconnected systems.
            </h2>
<p className="text-slate-400 mb-8 leading-relaxed">
              Restaurants suffer from fragmented tools—POS doesn't talk to the
              kitchen, inventory lags behind sales, and customers wait for
              service. CuisinOS unifies everything.
            </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 min-w-[20px] text-red-400">
<span className="iconify" data-icon="lucide:x-circle" data-width="20"></span>
</div>
<span className="text-slate-400">
                  Manual order entry errors costing 5-10% revenue
                </span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 min-w-[20px] text-red-400">
<span className="iconify" data-icon="lucide:x-circle" data-width="20"></span>
</div>
<span className="text-slate-400">
                  Chaos in the kitchen due to lost paper tickets
                </span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 min-w-[20px] text-teal-400">
<span className="iconify" data-icon="lucide:check-circle" data-width="20"></span>
</div>
<span className="text-white">
                  Unified database with real-time updates for all roles
                </span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 min-w-[20px] text-teal-400">
<span className="iconify" data-icon="lucide:check-circle" data-width="20"></span>
</div>
<span className="text-white">
                  Direct Customer-to-Kitchen digital pipeline
                </span>
</li>
</ul>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-transparent rounded-2xl blur-2xl"></div>
<div className="relative glass-panel rounded-2xl p-8 border border-white/10">
<div className="flex items-center justify-center h-full">
<div className="grid grid-cols-2 gap-4 w-full">
<div className="bg-slate-900/80 p-6 rounded-xl border border-white/5 flex flex-col items-center text-center">
<span className="iconify text-teal-400 mb-3" data-icon="lucide:users" data-width="32"></span>
<div className="text-sm font-medium text-white">
                      Staff Coordination
                    </div>
<div className="text-xs text-teal-400 mt-1">
                      +35% Efficiency
                    </div>
</div>
<div className="bg-slate-900/80 p-6 rounded-xl border border-white/5 flex flex-col items-center text-center">
<span className="iconify text-teal-400 mb-3" data-icon="lucide:trending-up" data-width="32"></span>
<div className="text-sm font-medium text-white">
                      Table Turnover
                    </div>
<div className="text-xs text-teal-400 mt-1">+25% Speed</div>
</div>
<div className="col-span-2 bg-slate-900/80 p-6 rounded-xl border border-white/5 flex flex-col items-center text-center">
<span className="iconify text-teal-400 mb-3" data-icon="lucide:zap" data-width="32"></span>
<div className="text-sm font-medium text-white">
                      Order Processing Time
                    </div>
<div className="text-xs text-teal-400 mt-1">
                      Reduced from 4m to 45s
                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="features">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
          One platform. Six synchronized roles.
        </h2>
<p className="text-slate-400 max-w-2xl mx-auto">
          Every stakeholder in your restaurant gets a dedicated, purpose-built
          interface that talks to the central brain.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group glass-panel rounded-2xl p-6 border border-white/10 hover:border-teal-500/30 transition-all hover:-translate-y-1">
<div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-500/20 transition-colors">
<span className="iconify" data-icon="lucide:bar-chart-3" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Manager Portal</h3>
<p className="text-sm text-slate-400 mb-4 leading-relaxed">
            Control center for menu CRUD, floor plan editing, staff shifts, and
            real-time financial analytics.
          </p>
<div className="h-32 bg-slate-900/50 rounded-lg border border-white/5 w-full relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTIwIDIwaDIwdjIwSDIwVjIweiIgZmlsbD0iIzMzMyIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-20"></div>
</div>
</div>

<div className="group glass-panel rounded-2xl p-6 border border-white/10 hover:border-teal-500/30 transition-all hover:-translate-y-1">
<div className="h-10 w-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-4 group-hover:bg-orange-500/20 transition-colors">
<span className="iconify" data-icon="lucide:user-check" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Waiter Terminal</h3>
<p className="text-sm text-slate-400 mb-4 leading-relaxed">
            Interactive floor plan, instant table assignment, and notifications
            when dishes are ready.
          </p>
<div className="h-32 bg-slate-900/50 rounded-lg border border-white/5 w-full flex items-center justify-center">
<div className="grid grid-cols-3 gap-2 w-3/4 opacity-50">
<div className="h-8 w-8 bg-green-500/20 rounded-full border border-green-500/30"></div>
<div className="h-8 w-8 bg-red-500/20 rounded-full border border-red-500/30"></div>
<div className="h-8 w-8 bg-slate-700/50 rounded-full border border-white/10"></div>
</div>
</div>
</div>

<div className="group glass-panel rounded-2xl p-6 border border-white/10 hover:border-teal-500/30 transition-all hover:-translate-y-1">
<div className="h-10 w-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 mb-4 group-hover:bg-red-500/20 transition-colors">
<span className="iconify" data-icon="lucide:flame" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">
            Kitchen Display (KDS)
          </h3>
<p className="text-sm text-slate-400 mb-4 leading-relaxed">
            Digital order queue with priority sorting, allergen alerts, and
            drag-and-drop status updates.
          </p>
<div className="h-32 bg-slate-900/50 rounded-lg border border-white/5 w-full p-2 space-y-2">
<div className="h-6 w-full bg-slate-800 rounded border-l-2 border-red-500"></div>
<div className="h-6 w-full bg-slate-800 rounded border-l-2 border-yellow-500"></div>
<div className="h-6 w-full bg-slate-800 rounded border-l-2 border-green-500"></div>
</div>
</div>

<div className="group glass-panel rounded-2xl p-6 border border-white/10 hover:border-teal-500/30 transition-all hover:-translate-y-1">
<div className="h-10 w-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 mb-4 group-hover:bg-teal-500/20 transition-colors">
<span className="iconify" data-icon="lucide:smartphone" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Customer App</h3>
<p className="text-sm text-slate-400 mb-4 leading-relaxed">
            QR login, AI chat ordering, visual menus, and digital wallet
            payments directly from the table.
          </p>
<div className="h-32 bg-slate-900/50 rounded-lg border border-white/5 w-full flex justify-center pt-2 overflow-hidden">
<div className="w-16 h-32 bg-black rounded-t-xl border-t border-x border-white/20"></div>
</div>
</div>

<div className="group glass-panel rounded-2xl p-6 border border-white/10 hover:border-teal-500/30 transition-all hover:-translate-y-1">
<div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 group-hover:bg-purple-500/20 transition-colors">
<span className="iconify" data-icon="lucide:credit-card" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">POS &amp; Cashier</h3>
<p className="text-sm text-slate-400 mb-4 leading-relaxed">
            Split payments, invoicing, cash register sessions, and Z-reports
            integrated with orders.
          </p>
<div className="h-32 bg-slate-900/50 rounded-lg border border-white/5 w-full flex items-center justify-center">
<span className="text-2xl font-mono text-white">$42.50</span>
</div>
</div>

<div className="group glass-panel rounded-2xl p-6 border border-white/10 hover:border-teal-500/30 transition-all hover:-translate-y-1">
<div className="h-10 w-10 rounded-lg bg-slate-500/10 flex items-center justify-center text-slate-300 mb-4 group-hover:bg-slate-500/20 transition-colors">
<span className="iconify" data-icon="lucide:shield" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Admin Platform</h3>
<p className="text-sm text-slate-400 mb-4 leading-relaxed">
            Multi-location management, global audit logs, role-based access
            control, and platform settings.
          </p>
<div className="h-32 bg-slate-900/50 rounded-lg border border-white/5 w-full flex flex-col gap-2 p-3">
<div className="h-2 w-full bg-slate-700 rounded-full"></div>
<div className="h-2 w-2/3 bg-slate-700 rounded-full"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 border-y border-white/5" id="ai">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-medium text-teal-400 mb-6">
<span className="iconify" data-icon="lucide:sparkles" data-width="14"></span>
              Powered by Hugging Face Models
            </div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
              Not just a menu.
              <br/>
              A conversational assistant.
            </h2>
<p className="text-slate-400 mb-8 text-lg">
              CuisinOS leverages advanced NLP and computer vision to transform
              how customers order. It's like having your best waiter at every
              table, instantly.
            </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center text-teal-400 border border-white/10 shrink-0">
<span className="iconify" data-icon="lucide:mic" data-width="16"></span>
</div>
<div>
<h4 className="text-white font-medium">Voice Command Ordering</h4>
<p className="text-sm text-slate-500 mt-1">
                    Customers can speak their order naturally. "I'll have the
                    steak, medium rare, with extra fries instead of salad."
                  </p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center text-teal-400 border border-white/10 shrink-0">
<span className="iconify" data-icon="lucide:camera" data-width="16"></span>
</div>
<div>
<h4 className="text-white font-medium">Visual Recognition</h4>
<p className="text-sm text-slate-500 mt-1">
                    Point the camera at a dish to see ingredients, allergens,
                    and instantly add it to the cart.
                  </p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center text-teal-400 border border-white/10 shrink-0">
<span className="iconify" data-icon="lucide:brain-circuit" data-width="16"></span>
</div>
<div>
<h4 className="text-white font-medium">Smart Upselling</h4>
<p className="text-sm text-slate-500 mt-1">
                    AI analyzes preferences to suggest the perfect wine pairing
                    or dessert, increasing average ticket size.
                  </p>
</div>
</div>
</div>
</div>
<div className="lg:w-1/2 w-full">

<div className="bg-slate-950 border border-white/10 rounded-2xl p-6 shadow-2xl max-w-sm mx-auto relative">

<div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-4">
<div className="h-10 w-10 rounded-full bg-gradient-to-tr from-teal-400 to-blue-500"></div>
<div>
<div className="text-sm font-medium text-white">CuisinOS AI</div>
<div className="text-xs text-teal-400">
                    Online • Reply time: instant
                  </div>
</div>
</div>

<div className="space-y-4 mb-6">
<div className="flex gap-3">
<div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none text-xs text-slate-300 max-w-[85%] border border-white/5">
                    Welcome back, Alex! Would you like to order the usual Spicy
                    Tuna Roll to start?
                  </div>
</div>
<div className="flex gap-3 justify-end">
<div className="bg-teal-600 p-3 rounded-2xl rounded-tr-none text-xs text-white max-w-[85%]">
                    Not today. I'm looking for something gluten-free and spicy.
                  </div>
</div>
<div className="flex gap-3">
<div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none text-xs text-slate-300 max-w-[85%] border border-white/5">
<p className="mb-2">
                      I recommend the
                      <strong>Thai Basil Chicken</strong>
                      . It's gluten-free and has a 3-chili spice rating.
                    </p>
<div className="h-24 bg-slate-900 rounded-lg mt-2 border border-white/5 relative overflow-hidden group cursor-pointer">
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-xs font-semibold text-white">
                          Add to Order $18
                        </span>
</div>
</div>
</div>
</div>
</div>

<div className="relative">
<input className="w-full bg-slate-900 border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-teal-500/50" placeholder="Type or speak..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 bg-teal-500 rounded-full flex items-center justify-center text-slate-900 hover:bg-teal-400">
<span className="iconify" data-icon="lucide:arrow-up" data-width="16"></span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-b border-white/5" id="architecture">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12">

<div>
<h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
<span className="iconify text-teal-400" data-icon="lucide:activity" data-width="24"></span>
              Real-Time Architecture
            </h3>
<p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Built on Supabase Realtime and WebSockets. Changes made on a
              waiter's tablet reflect instantly on the kitchen display and
              manager's dashboard without page reloads.
            </p>
<div className="glass-panel p-4 rounded-xl border border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
<span>Client (Tablet)</span>
<span className="h-px flex-1 bg-gradient-to-r from-transparent via-teal-500/50 to-transparent mx-2 relative">
<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-teal-400 rounded-full animate-ping"></span>
</span>
<span>Server (DB)</span>
</div>
</div>

<div>
<h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
<span className="iconify text-teal-400" data-icon="lucide:lock" data-width="24"></span>
              Enterprise Security
            </h3>
<p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Data isolation via Row-Level Security (RLS). Strict Role-Based
              Access Control (RBAC) ensures kitchen staff can't access financial
              records. GDPR compliant.
            </p>
<div className="grid grid-cols-2 gap-4">
<div className="flex items-center gap-2 text-xs text-slate-300">
<span className="iconify text-teal-400" data-icon="lucide:check" data-width="14"></span>
                JWT Sessions
              </div>
<div className="flex items-center gap-2 text-xs text-slate-300">
<span className="iconify text-teal-400" data-icon="lucide:check" data-width="14"></span>
                Audit Logs
              </div>
<div className="flex items-center gap-2 text-xs text-slate-300">
<span className="iconify text-teal-400" data-icon="lucide:check" data-width="14"></span>
                PIN Auth
              </div>
<div className="flex items-center gap-2 text-xs text-slate-300">
<span className="iconify text-teal-400" data-icon="lucide:check" data-width="14"></span>
                Daily Backups
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">
            Simple, transparent pricing.
          </h2>
<div className="flex justify-center items-center gap-3 text-sm font-medium">
<span className="text-slate-400">Monthly</span>
<button className="w-12 h-6 bg-teal-500 rounded-full relative">
<span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></span>
</button>
<span className="text-white">
              Annual
              <span className="text-teal-400 text-xs ml-1">(Save 20%)</span>
</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="glass-panel p-8 rounded-2xl border border-white/5 flex flex-col">
<h3 className="text-lg font-medium text-white mb-2">Starter</h3>
<div className="text-3xl font-bold text-white mb-6">
              $99
              <span className="text-sm font-normal text-slate-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-teal-400" data-icon="lucide:check"></span>
                1 Location
              </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-teal-400" data-icon="lucide:check"></span>
                Core POS &amp; Kitchen
              </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-teal-400" data-icon="lucide:check"></span>
                Limited AI Queries
              </li>
</ul>
<a className="w-full py-3 rounded-lg border border-white/10 hover:bg-white/5 text-center text-sm font-medium text-white transition-colors" href="#">
              Start Free Trial
            </a>
</div>

<div className="glass-panel-dark p-8 rounded-2xl border border-teal-500/30 shadow-[0_0_50px_-20px_rgba(20,184,166,0.2)] flex flex-col relative scale-105">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
              MOST POPULAR
            </div>
<h3 className="text-lg font-medium text-white mb-2">Professional</h3>
<div className="text-3xl font-bold text-white mb-6">
              $249
              <span className="text-sm font-normal text-slate-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<span className="iconify text-teal-400" data-icon="lucide:check"></span>
                Up to 3 Locations
              </li>
<li className="flex items-center gap-3 text-sm text-white">
<span className="iconify text-teal-400" data-icon="lucide:check"></span>
                Unlimited AI Chat
              </li>
<li className="flex items-center gap-3 text-sm text-white">
<span className="iconify text-teal-400" data-icon="lucide:check"></span>
                Advanced Analytics
              </li>
<li className="flex items-center gap-3 text-sm text-white">
<span className="iconify text-teal-400" data-icon="lucide:check"></span>
                Priority Support
              </li>
</ul>
<a className="w-full py-3 rounded-lg bg-teal-500 hover:bg-teal-400 text-center text-sm font-bold text-slate-900 transition-colors" href="#">
              Get Started
            </a>
</div>

<div className="glass-panel p-8 rounded-2xl border border-white/5 flex flex-col">
<h3 className="text-lg font-medium text-white mb-2">Enterprise</h3>
<div className="text-3xl font-bold text-white mb-6">Custom</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-teal-400" data-icon="lucide:check"></span>
                Unlimited Locations
              </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-teal-400" data-icon="lucide:check"></span>
                Custom Integrations
              </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-teal-400" data-icon="lucide:check"></span>
                White-label App
              </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="iconify text-teal-400" data-icon="lucide:check"></span>
                Dedicated Success Manager
              </li>
</ul>
<a className="w-full py-3 rounded-lg border border-white/10 hover:bg-white/5 text-center text-sm font-medium text-white transition-colors" href="#">
              Contact Sales
            </a>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-slate-950/30">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-semibold text-white text-center mb-12">
          Trusted by tech-forward restaurants
        </h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-6 bg-slate-900 rounded-xl border border-white/5">
<p className="text-slate-400 text-sm mb-4 leading-relaxed">
              "Since switching to CuisinOS, our table turnover improved by 25%.
              The kitchen is calmer, and the AI upsell features actually work."
            </p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 bg-slate-700 rounded-full"></div>
<div>
<div className="text-sm font-medium text-white">Sarah Jenkins</div>
<div className="text-xs text-slate-500">Owner, The Urban Plate</div>
</div>
</div>
</div>
<div className="p-6 bg-slate-900 rounded-xl border border-white/5">
<p className="text-slate-400 text-sm mb-4 leading-relaxed">
              "The real-time sync is a game changer. No more running back and
              forth to check if an order is ready. It just works."
            </p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 bg-slate-700 rounded-full"></div>
<div>
<div className="text-sm font-medium text-white">Marco Rossi</div>
<div className="text-xs text-slate-500">Manager, Bistro 42</div>
</div>
</div>
</div>
<div className="p-6 bg-slate-900 rounded-xl border border-white/5">
<p className="text-slate-400 text-sm mb-4 leading-relaxed">
              "Finally, a system that includes the customer app natively. We
              didn't have to buy a separate tool for QR ordering."
            </p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 bg-slate-700 rounded-full"></div>
<div>
<div className="text-sm font-medium text-white">David Chen</div>
<div className="text-xs text-slate-500">
                  Founder, Noodle House Chain
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 max-w-4xl mx-auto px-6">
<h2 className="text-2xl font-semibold text-white text-center mb-10">
        Frequently Asked Questions
      </h2>
<div className="space-y-4">
<details className="group bg-slate-900 rounded-lg border border-white/5 p-4 open:bg-slate-800/50">
<summary className="flex justify-between items-center cursor-pointer list-none font-medium text-white">
            Do I need special hardware?
            <span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down"></span>
</span>
</summary>
<div className="text-slate-400 text-sm mt-3 leading-relaxed">
            No. CuisinOS is a web-based application (PWA). It runs on any device
            with a browser: iPads, Android tablets, laptops, and even
            smartphones.
          </div>
</details>
<details className="group bg-slate-900 rounded-lg border border-white/5 p-4 open:bg-slate-800/50">
<summary className="flex justify-between items-center cursor-pointer list-none font-medium text-white">
            Can I export my data?
            <span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down"></span>
</span>
</summary>
<div className="text-slate-400 text-sm mt-3 leading-relaxed">
            Yes, absolutely. You own your data. You can export sales reports,
            customer data, and inventory logs to CSV, Excel, or PDF at any time.
          </div>
</details>
<details className="group bg-slate-900 rounded-lg border border-white/5 p-4 open:bg-slate-800/50">
<summary className="flex justify-between items-center cursor-pointer list-none font-medium text-white">
            What happens if the internet goes down?
            <span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down"></span>
</span>
</summary>
<div className="text-slate-400 text-sm mt-3 leading-relaxed">
            We have a robust offline mode for core functions like taking orders.
            Data syncs automatically once the connection is restored.
          </div>
</details>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-teal-500/5"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[100px] -z-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl font-semibold text-white tracking-tight mb-6">
          Ready to upgrade your restaurant's OS?
        </h2>
<p className="text-slate-400 text-lg mb-10">
          Join hundreds of forward-thinking restaurateurs. No credit card
          required for the trial.
        </p>
<form className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
<input className="flex-1 bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-500" placeholder="Enter your work email" type="email"/>
<button className="bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-colors" type="button">
            Request Demo
          </button>
</form>
<p className="mt-4 text-xs text-slate-500">
          By continuing, you agree to our Terms of Service.
        </p>
</div>
</section>

<footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
<div className="col-span-2">
<a className="text-white text-lg font-semibold tracking-tighter flex items-center gap-2 mb-4" href="#">
<span className="iconify text-teal-400" data-icon="lucide:layers" data-width="20"></span>
              CuisinOS
            </a>
<p className="text-slate-500 text-sm max-w-xs mb-6">
              The AI-powered operating system for the next generation of
              hospitality.
            </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="20"></span>
</a>
<a className="text-slate-400 hover:text-white" href="#">
<span className="iconify" data-icon="lucide:github" data-width="20"></span>
</a>
<a className="text-slate-400 hover:text-white" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="20"></span>
</a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Product</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li>
<a className="hover:text-teal-400 transition-colors" href="#">
                  Features
                </a>
</li>
<li>
<a className="hover:text-teal-400 transition-colors" href="#">
                  Pricing
                </a>
</li>
<li>
<a className="hover:text-teal-400 transition-colors" href="#">
                  Integrations
                </a>
</li>
<li>
<a className="hover:text-teal-400 transition-colors" href="#">
                  Changelog
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li>
<a className="hover:text-teal-400 transition-colors" href="#">
                  Documentation
                </a>
</li>
<li>
<a className="hover:text-teal-400 transition-colors" href="#">
                  API Reference
                </a>
</li>
<li>
<a className="hover:text-teal-400 transition-colors" href="#">
                  Blog
                </a>
</li>
<li>
<a className="hover:text-teal-400 transition-colors" href="#">
                  Community
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li>
<a className="hover:text-teal-400 transition-colors" href="#">
                  About
                </a>
</li>
<li>
<a className="hover:text-teal-400 transition-colors" href="#">
                  Careers
                </a>
</li>
<li>
<a className="hover:text-teal-400 transition-colors" href="#">
                  Legal
                </a>
</li>
<li>
<a className="hover:text-teal-400 transition-colors" href="#">
                  Contact
                </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">
            © 2024 CuisinOS Inc. All rights reserved.
          </p>
<div className="flex gap-6 text-xs text-slate-600">
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
