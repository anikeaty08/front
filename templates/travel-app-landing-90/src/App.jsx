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
      

<div className="fixed inset-0 z-0 pointer-events-none gradient-mesh"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-white font-semibold tracking-tighter text-lg flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white text-[10px] font-bold">
              A
            </div>
            ABASCO TRAVELS
          </a>
<div className="hidden md:flex items-center gap-6 text-sm">
<a className="hover:text-white transition-colors" href="#">Flights</a>
<a className="hover:text-white transition-colors" href="#">Stays</a>
<a className="hover:text-white transition-colors" href="#">
              Experiences
            </a>
<a className="hover:text-white transition-colors" href="#">Business</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex text-sm hover:text-white transition-colors">
            Log in
          </button>
<button className="bg-white text-slate-950 px-4 py-2 rounded-full text-xs font-medium hover:bg-slate-200 transition-colors">
            Download App
          </button>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-xs font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
            v2.0 is now live
          </div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1]">
            Travel smarter,
            <br/>
<span className="text-slate-500">not harder.</span>
</h1>
<p className="text-lg text-slate-400 max-w-md leading-relaxed">
            The all-in-one platform for modern explorers. Book flights, automate
            itineraries, and track expenses with AI-driven precision.
          </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="flex items-center justify-center gap-2 bg-white text-slate-950 px-6 py-3.5 rounded-lg text-sm font-medium hover:bg-slate-200 transition-all active:scale-95">
<iconify-icon icon="lucide:apple" strokeWidth="1.5" width="18"></iconify-icon>
              App Store
            </button>
<button className="flex items-center justify-center gap-2 glass-panel text-white px-6 py-3.5 rounded-lg text-sm font-medium hover:bg-white/10 transition-all active:scale-95">
<iconify-icon icon="lucide:play" strokeWidth="1.5" width="18"></iconify-icon>
              Watch Demo
            </button>
</div>
<div className="pt-8 flex items-center gap-4 text-xs text-slate-500">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-white text-[10px]">
                JD
              </div>
<div className="w-8 h-8 rounded-full border-2 border-slate-950 bg-slate-700 flex items-center justify-center text-white text-[10px]">
                AS
              </div>
<div className="w-8 h-8 rounded-full border-2 border-slate-950 bg-slate-600 flex items-center justify-center text-white text-[10px]">
                +2k
              </div>
</div>
<p>Trusted by 2,000+ travelers this week</p>
</div>
</div>

<div className="relative">

<div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-3xl rounded-full opacity-50"></div>

<div className="relative glass-panel rounded-2xl p-6 border border-white/10 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-700 ease-out">

<div className="flex justify-between items-center mb-8">
<div className="flex flex-col">
<span className="text-xs text-slate-400 uppercase tracking-widest">
                  Boarding Pass
                </span>
<span className="text-white font-medium tracking-tight">
                  NYC → TYO
                </span>
</div>
<div className="h-8 w-8 rounded bg-white/10 flex items-center justify-center text-white">
<iconify-icon icon="lucide:plane" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>

<div className="relative h-32 mb-8 flex items-center justify-between px-4">
<div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-700 border-t border-dashed border-slate-500"></div>
<div className="relative z-10 bg-slate-950 border border-slate-700 p-2 rounded-lg flex flex-col items-center">
<span className="text-2xl font-medium text-white tracking-tight">
                  JFK
                </span>
<span className="text-[10px] text-slate-500">10:45 AM</span>
</div>
<div className="relative z-10 bg-slate-900 border border-cyan-500/50 p-1.5 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]">
<iconify-icon className="text-cyan-400 rotate-90" icon="lucide:plane" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="relative z-10 bg-slate-950 border border-slate-700 p-2 rounded-lg flex flex-col items-center">
<span className="text-2xl font-medium text-white tracking-tight">
                  HND
                </span>
<span className="text-[10px] text-slate-500">02:15 PM</span>
</div>
</div>

<div className="grid grid-cols-3 gap-4">
<div className="glass-panel p-3 rounded-lg text-center">
<div className="text-[10px] text-slate-500 uppercase">Gate</div>
<div className="text-white font-medium">A12</div>
</div>
<div className="glass-panel p-3 rounded-lg text-center">
<div className="text-[10px] text-slate-500 uppercase">Seat</div>
<div className="text-white font-medium">4F</div>
</div>
<div className="glass-panel p-3 rounded-lg text-center bg-cyan-500/10 border-cyan-500/20">
<div className="text-[10px] text-cyan-400 uppercase">Class</div>
<div className="text-cyan-100 font-medium">Biz</div>
</div>
</div>
</div>

<div className="absolute -bottom-6 -left-6 glass-panel p-4 rounded-xl flex items-center gap-4 shadow-xl animate-bounce" style={{animationDuration: '3s'}}>
<div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
<iconify-icon icon="lucide:check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm text-white font-medium">Flight On Time</div>
<div className="text-xs text-slate-400">Boarding in 15 mins</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 px-6 relative">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl lg:text-4xl font-medium text-white tracking-tight mb-4">
            Engineered for travel.
          </h2>
<p className="text-slate-400 max-w-2xl">
            We've removed the friction from planning. Our intelligent engine
            handles the logistics so you can focus on the experience.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-panel glass-panel-hover p-8 rounded-2xl transition-all duration-300 group">
<div className="h-12 w-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:map" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Smart Itineraries
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Automatically syncs with your calendar. AI suggests gaps for
              leisure based on your location and preferences.
            </p>
</div>

<div className="glass-panel glass-panel-hover p-8 rounded-2xl transition-all duration-300 group">
<div className="h-12 w-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Real-time Updates
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Instant notifications for gate changes, delays, or upgrade
              opportunities pushed directly to your device.
            </p>
</div>

<div className="glass-panel glass-panel-hover p-8 rounded-2xl transition-all duration-300 group">
<div className="h-12 w-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:pie-chart" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Expense Tracking
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Scan receipts and categorize expenses automatically. Export
              reports for reimbursement in seconds.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-slate-950/50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-2xl font-medium text-white tracking-tight">
              Trending Destinations
            </h2>
<p className="text-sm text-slate-500 mt-2">
              Curated selections for the upcoming season.
            </p>
</div>
<div className="flex gap-2">
<button className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
<iconify-icon icon="lucide:arrow-left" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Tokyo" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-40" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
<div className="absolute bottom-0 p-6 w-full">
<div className="flex justify-between items-end">
<div>
<h3 className="text-xl font-medium text-white tracking-tight">
                    Tokyo
                  </h3>
<p className="text-xs text-slate-300">Japan</p>
</div>
<span className="text-white font-mono bg-white/10 backdrop-blur px-2 py-1 rounded text-xs">
                  $850
                </span>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Paris" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-40" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
<div className="absolute bottom-0 p-6 w-full">
<div className="flex justify-between items-end">
<div>
<h3 className="text-xl font-medium text-white tracking-tight">
                    Paris
                  </h3>
<p className="text-xs text-slate-300">France</p>
</div>
<span className="text-white font-mono bg-white/10 backdrop-blur px-2 py-1 rounded text-xs">
                  $620
                </span>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Cinque Terre" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
<div className="absolute bottom-0 p-6 w-full">
<div className="flex justify-between items-end">
<div>
<h3 className="text-xl font-medium text-white tracking-tight">
                    Cinque Terre
                  </h3>
<p className="text-xs text-slate-300">Italy</p>
</div>
<span className="text-white font-mono bg-white/10 backdrop-blur px-2 py-1 rounded text-xs">
                  $740
                </span>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer">
<img alt="New York" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
<div className="absolute bottom-0 p-6 w-full">
<div className="flex justify-between items-end">
<div>
<h3 className="text-xl font-medium text-white tracking-tight">
                    New York
                  </h3>
<p className="text-xs text-slate-300">USA</p>
</div>
<span className="text-white font-mono bg-white/10 backdrop-blur px-2 py-1 rounded text-xs">
                  $390
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-left">
<div className="text-4xl font-medium text-white tracking-tight mb-1">
            10k+
          </div>
<div className="text-sm text-slate-500">Active Users</div>
</div>
<div className="text-center md:text-left">
<div className="text-4xl font-medium text-white tracking-tight mb-1">
            150+
          </div>
<div className="text-sm text-slate-500">Countries Covered</div>
</div>
<div className="text-center md:text-left">
<div className="text-4xl font-medium text-white tracking-tight mb-1">
            4.9
          </div>
<div className="text-sm text-slate-500">App Store Rating</div>
</div>
<div className="text-center md:text-left">
<div className="text-4xl font-medium text-white tracking-tight mb-1">
            24/7
          </div>
<div className="text-sm text-slate-500">Concierge Support</div>
</div>
</div>
</section>

<section className="px-6 pb-24">
<div className="max-w-7xl mx-auto">
<div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-white/5 p-12 lg:p-24 text-center">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950/0 to-slate-950/0"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl lg:text-5xl font-medium text-white tracking-tight mb-6">
              Ready for takeoff?
            </h2>
<p className="text-slate-400 mb-8 text-lg">
              Join thousands of travelers who have upgraded their journey. Start
              your free trial today.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 w-full sm:w-auto min-w-[300px] transition-colors" placeholder="Enter your email" type="email"/>
<button className="bg-white text-slate-950 px-6 py-3 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors w-full sm:w-auto">
                Get Started
              </button>
</div>
<p className="text-xs text-slate-600 mt-4">
              No credit card required for 14-day trial.
            </p>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8 px-6 text-sm">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-white font-semibold tracking-tighter text-lg flex items-center gap-2 mb-4" href="#">
<div className="w-5 h-5 rounded bg-slate-800 flex items-center justify-center text-white text-[9px] font-bold">
                A
              </div>
              ABASCO TRAVELS
            </a>
<p className="text-slate-500 max-w-xs mb-6">
              Making travel seamless, intelligent, and enjoyable for everyone,
              everywhere.
            </p>
<div className="flex flex-col gap-2 mb-6 text-slate-500">
<div className="flex items-start gap-2">
<iconify-icon className="mt-0.5 shrink-0" icon="lucide:map-pin" strokeWidth="1.5" width="16"></iconify-icon>
<span>7H Commercial Plaza</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="shrink-0" icon="lucide:phone" strokeWidth="1.5" width="16"></iconify-icon>
<span>0300 5606767</span>
</div>
</div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:instagram" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:linkedin" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Product</h4>
<ul className="space-y-2 text-slate-500">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Features
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Integrations
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Pricing
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Changelog
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-slate-500">
<li>
<a className="hover:text-white transition-colors" href="#">About</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">Blog</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Careers
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Contact
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Resources</h4>
<ul className="space-y-2 text-slate-500">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Community
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Help Center
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Privacy
                </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-slate-600 text-xs">
            © 2024 Abasco Travels Inc. All rights reserved.
          </div>
<div className="flex gap-6 text-xs text-slate-500">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
              System Operational
            </div>
</div>
</div>
</div>
</footer>

    </>
  );
}
