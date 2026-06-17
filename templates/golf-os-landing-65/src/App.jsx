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
      

<header className="fixed top-0 w-full z-50 bg-[#F6F3EE]/90 backdrop-blur-md border-b border-[#003C2E]/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-2xl font-bold tracking-tight text-[#003C2E] flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-[#003C2E] rounded-lg flex items-center justify-center text-[#C5A065]">
<i className="w-5 h-5" data-lucide="aperture"></i>
</div>
                GolfVault
            </a>

<nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#003C2E]/80">
<a className="hover:text-[#003C2E] transition-colors" href="#vision">Vision</a>
<a className="hover:text-[#003C2E] transition-colors" href="#digital-twin">Digital Twin</a>
<a className="hover:text-[#003C2E] transition-colors" href="#ia-parcours">AI Course Recon</a>
<a className="hover:text-[#003C2E] transition-colors" href="#features">Features</a>
<a className="hover:text-[#003C2E] transition-colors" href="#pricing">Pricing</a>
</nav>

<div className="flex items-center gap-4">
<button className="hidden md:block px-5 py-2.5 bg-[#C5A065] hover:bg-[#b08d55] text-white text-sm font-semibold rounded-full transition-colors shadow-lg shadow-[#C5A065]/20">
                    Request Access
                </button>

<button className="lg:hidden text-[#003C2E]">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div className="relative z-10 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#003C2E]/5 border border-[#003C2E]/10">
<span className="w-2 h-2 rounded-full bg-[#C5A065] animate-pulse"></span>
<span className="text-xs font-semibold text-[#003C2E] tracking-wide uppercase">Early Access</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-[#003C2E] leading-[1.1]">
                    GolfVault — <br/>
<span className="text-opacity-60 text-[#003C2E]">The modern golfer's OS.</span>
</h1>
<p className="text-lg lg:text-xl text-gray-600 max-w-lg leading-relaxed">
                    Digital Twin, Course AI, Social Graph, Dynamic Bag. Your entire golfing life, unified in a single system.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<button className="px-8 py-4 bg-[#003C2E] text-white text-sm font-semibold rounded-full hover:bg-[#002a20] transition-all shadow-xl shadow-[#003C2E]/20 flex items-center justify-center gap-2">
                        Discover Product <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="px-8 py-4 bg-transparent border border-[#003C2E]/20 text-[#003C2E] text-sm font-semibold rounded-full hover:bg-[#003C2E]/5 transition-all flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="scan-face"></i> View Digital Twin
                    </button>
</div>
<p className="text-xs text-gray-400 font-medium pt-4">Designed for passionate golfers, clubs, pros &amp; brands.</p>
</div>

<div className="relative z-10 flex justify-center lg:justify-end">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#C5A065]/20 to-transparent rounded-full blur-3xl -z-10"></div>

<div className="relative w-[300px] h-[600px] bg-white rounded-[48px] border-[8px] border-[#111827] shadow-2xl overflow-hidden z-20">

<div className="absolute top-0 inset-x-0 h-7 bg-[#111827] w-1/2 mx-auto rounded-b-2xl z-30"></div>

<div className="h-full w-full bg-[#F6F3EE] pt-12 pb-6 px-4 flex flex-col gap-4 overflow-hidden relative">

<div className="flex justify-between items-center mb-2">
<div>
<p className="text-[10px] text-gray-500 font-medium">Good Morning, Thomas</p>
<p className="text-lg font-bold text-[#003C2E] tracking-tight">Home</p>
</div>
<div className="w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center border border-gray-100">
<img alt="Avatar" className="w-6 h-6" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
</div>

<div className="bg-[#003C2E] text-white p-4 rounded-2xl relative overflow-hidden shadow-lg hover-card-up">
<div className="absolute right-0 top-0 w-32 h-32 bg-[#C5A065] opacity-20 rounded-full blur-2xl translate-x-10 -translate-y-10"></div>
<div className="flex items-center gap-2 mb-3">
<i className="w-3 h-3 text-[#C5A065]" data-lucide="sparkles"></i>
<span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A065]">AI Suggestion</span>
</div>
<h3 className="text-sm font-semibold mb-1">Pebble Beach</h3>
<p className="text-[10px] text-white/70 mb-3">Perfect conditions tomorrow. Marc is available.</p>
<div className="flex items-center justify-between mt-2">
<span className="text-lg font-bold">09:10</span>
<button className="bg-white text-[#003C2E] text-[10px] font-bold px-3 py-1.5 rounded-lg">Book Now</button>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm">
<p className="text-[9px] text-gray-400 uppercase font-bold mb-1">Index</p>
<div className="flex items-baseline gap-1">
<span className="text-xl font-bold text-[#003C2E]">11.4</span>
<span className="text-[9px] text-green-600 bg-green-50 px-1 rounded">↓ 0.8</span>
</div>
</div>
<div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm">
<p className="text-[9px] text-gray-400 uppercase font-bold mb-1">Last Score</p>
<div className="flex items-baseline gap-1">
<span className="text-xl font-bold text-[#003C2E]">82</span>
<span className="text-[9px] text-gray-400">+10</span>
</div>
</div>
</div>

<div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex-1">
<p className="text-[10px] text-gray-400 font-bold uppercase mb-3">Network Activity</p>
<div className="flex gap-3 items-start mb-4 border-b border-gray-50 pb-3">
<div className="w-8 h-8 rounded-full bg-gray-100 flex-shrink-0 overflow-hidden">
<img alt="User" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Annie"/>
</div>
<div>
<p className="text-xs font-semibold text-[#003C2E]">Julie</p>
<p className="text-[10px] text-gray-500">Practice • "Wedge Session"</p>
</div>
</div>
<div className="flex gap-3 items-start">
<div className="w-8 h-8 rounded-full bg-gray-100 flex-shrink-0 overflow-hidden">
<img alt="User" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Bob"/>
</div>
<div>
<p className="text-xs font-semibold text-[#003C2E]">Marc</p>
<p className="text-[10px] text-gray-500">Royal St. George's • Score 79</p>
</div>
</div>
</div>

<div className="absolute bottom-4 left-4 right-4 h-14 bg-[#003C2E] rounded-full flex justify-around items-center px-2 shadow-2xl z-40">
<i className="w-5 h-5 text-[#C5A065]" data-lucide="home"></i>
<i className="w-5 h-5 text-white/40" data-lucide="calendar"></i>
<i className="w-8 h-8 text-white fill-current" data-lucide="plus-circle"></i>
<i className="w-5 h-5 text-white/40" data-lucide="users"></i>
<i className="w-5 h-5 text-white/40" data-lucide="user"></i>
</div>
</div>
</div>

<div className="absolute top-20 -right-4 bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100 animate-bounce" style={{animationDuration: '3s'}}>
<span className="text-xs font-semibold text-[#003C2E] flex items-center gap-2"><i className="w-4 h-4 text-[#C5A065]" data-lucide="scan-face"></i> Digital Twin</span>
</div>
<div className="absolute bottom-40 -left-12 bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100 animate-bounce" style={{animationDuration: '4s'}}>
<span className="text-xs font-semibold text-[#003C2E] flex items-center gap-2"><i className="w-4 h-4 text-[#C5A065]" data-lucide="map"></i> AI Course Recon</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div className="space-y-8">
<div className="inline-block p-3 bg-red-50 rounded-2xl mb-4">
<i className="w-6 h-6 text-red-500" data-lucide="alert-triangle"></i>
</div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#003C2E]">Golf is ultra-data...<br/>but totally fragmented.</h2>
<p className="text-gray-600">Today, your golf life is scattered across 6 apps, 3 systems, PDFs, emails, and paper scorecards.</p>
<ul className="space-y-4 pt-4">
<li className="flex gap-3 items-start">
<i className="w-5 h-5 text-red-400 shrink-0 mt-0.5" data-lucide="x"></i>
<span className="text-sm text-gray-700">Dispersed data (TrackMan, Arccos, Garmin...)</span>
</li>
<li className="flex gap-3 items-start">
<i className="w-5 h-5 text-red-400 shrink-0 mt-0.5" data-lucide="x"></i>
<span className="text-sm text-gray-700">Games organized via chaotic WhatsApp groups</span>
</li>
<li className="flex gap-3 items-start">
<i className="w-5 h-5 text-red-400 shrink-0 mt-0.5" data-lucide="x"></i>
<span className="text-sm text-gray-700">No structured social graph for golf</span>
</li>
<li className="flex gap-3 items-start">
<i className="w-5 h-5 text-red-400 shrink-0 mt-0.5" data-lucide="x"></i>
<span className="text-sm text-gray-700">No global view of your progression</span>
</li>
</ul>
</div>

<div className="space-y-8 relative">

<div className="inline-block p-3 bg-[#003C2E]/5 rounded-2xl mb-4">
<i className="w-6 h-6 text-[#003C2E]" data-lucide="check-circle-2"></i>
</div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#003C2E]">GolfVault unifies everything<br/>in a single OS.</h2>
<p className="text-gray-600">A central infrastructure to manage your identity, your data, and your network.</p>
<div className="grid gap-4 pt-4">
<div className="bg-[#F6F3EE] p-4 rounded-2xl flex items-center gap-4 border border-[#003C2E]/5">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#C5A065] shadow-sm">1</div>
<span className="font-medium text-[#003C2E]">Unique Digital Twin per player</span>
</div>
<div className="bg-[#F6F3EE] p-4 rounded-2xl flex items-center gap-4 border border-[#003C2E]/5">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#C5A065] shadow-sm">1</div>
<span className="font-medium text-[#003C2E]">Dynamic Bag connected to stats</span>
</div>
<div className="bg-[#F6F3EE] p-4 rounded-2xl flex items-center gap-4 border border-[#003C2E]/5">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#C5A065] shadow-sm">1</div>
<span className="font-medium text-[#003C2E]">AI Course Recon™</span>
</div>
<div className="bg-[#F6F3EE] p-4 rounded-2xl flex items-center gap-4 border border-[#003C2E]/5">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#C5A065] shadow-sm">1</div>
<span className="font-medium text-[#003C2E]">Social Network based on compatibility</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F6F3EE] border-t border-[#003C2E]/5" id="vision">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#003C2E] mb-4">More than an app:<br/>Infrastructure for golf.</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 hover-card-up">
<div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
<i className="w-6 h-6" data-lucide="activity"></i>
</div>
<h3 className="text-lg font-bold text-[#003C2E] mb-2">The Strava of Golf</h3>
<p className="text-sm text-gray-600 leading-relaxed">
                        Unifies data and social. Transforms every round into a shareable and comparable story.
                    </p>
</div>

<div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 hover-card-up">
<div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 mb-6">
<i className="w-6 h-6" data-lucide="heart-pulse"></i>
</div>
<h3 className="text-lg font-bold text-[#003C2E] mb-2">The Apple Health of the Game</h3>
<p className="text-sm text-gray-600 leading-relaxed">
                        Centralizes metrics. Becomes the secure, single source of truth for your technical progression.
                    </p>
</div>

<div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 hover-card-up">
<div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
<i className="w-6 h-6" data-lucide="linkedin"></i>
</div>
<h3 className="text-lg font-bold text-[#003C2E] mb-2">The LinkedIn for Pros</h3>
<p className="text-sm text-gray-600 leading-relaxed">
                        Creates a standard golf identity. "Add me on GolfVault" becomes the new reflex.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="digital-twin">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20 items-center">

<div className="relative order-last lg:order-first flex justify-center">
<div className="absolute inset-0 bg-[#003C2E]/5 rounded-full blur-3xl transform scale-75"></div>

<div className="relative w-[320px] bg-[#111827] rounded-[40px] p-2 shadow-2xl border border-gray-800">
<div className="bg-white rounded-[32px] overflow-hidden h-[600px] relative">

<div className="bg-[#003C2E] p-6 pb-10">
<p className="text-center text-[#C5A065] text-xs font-bold uppercase tracking-widest mb-2">Digital Twin v2.1</p>
<div className="flex justify-center">
<div className="w-24 h-24 rounded-full border-4 border-[#C5A065]/30 bg-[#003C2E] flex items-center justify-center relative">
<div className="absolute inset-0 border-4 border-[#C5A065] rounded-full" style={{clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 70%)'}}></div>
<span className="text-2xl font-bold text-white">11.4</span>
</div>
</div>
</div>

<div className="bg-white -mt-6 rounded-t-[32px] p-6 relative z-10 h-full">
<div className="flex justify-center mb-6">

<svg className="w-48 h-48" viewbox="0 0 100 100">
<polygon fill="#F6F3EE" points="50,10 90,40 80,90 20,90 10,40" stroke="#E5E7EB" strokeWidth="1"></polygon>
<polygon fill="rgba(0, 60, 46, 0.1)" points="50,20 85,45 70,80 30,85 15,45" stroke="#003C2E" strokeWidth="2"></polygon>
<circle cx="50" cy="20" fill="#003C2E" r="2"></circle>
<text fill="#003C2E" fontSize="6" font-weight="bold" text-anchor="middle" x="50" y="15">Driving</text>
<text fill="#003C2E" fontSize="6" font-weight="bold" text-anchor="middle" x="95" y="45">Approach</text>
<text fill="#003C2E" fontSize="6" font-weight="bold" text-anchor="middle" x="80" y="98">Short</text>
<text fill="#003C2E" fontSize="6" font-weight="bold" text-anchor="middle" x="20" y="98">Putting</text>
<text fill="#003C2E" fontSize="6" font-weight="bold" text-anchor="middle" x="5" y="45">Mental</text>
</svg>
</div>
<div className="space-y-3">
<div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-bold text-gray-500 uppercase">Driving</span>
<span className="text-xs font-bold text-[#003C2E]">228m (avg)</span>
</div>
<div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
<div className="bg-[#003C2E] h-full w-[75%]"></div>
</div>
</div>
<div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-bold text-gray-500 uppercase">Putting &lt; 2m</span>
<span className="text-xs font-bold text-[#C5A065]">92% (Top 5%)</span>
</div>
<div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
<div className="bg-[#C5A065] h-full w-[92%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-8">
<div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#003C2E] mb-4">Your Golfing Twin,<br/>Living and Predictive.</h2>
<p className="text-lg text-gray-600">GolfVault models your game like a true data player, not just a simple scorecard.</p>
</div>
<div className="grid gap-6 border-l-2 border-[#F6F3EE] pl-6">
<div className="relative">
<span className="absolute -left-[31px] top-1 h-4 w-4 rounded-full border-4 border-white bg-gray-300"></span>
<h4 className="font-bold text-[#003C2E]">V1 — Foundations</h4>
<p className="text-sm text-gray-500">Average distances, GIR/FIR, dispersion, putting stats.</p>
</div>
<div className="relative">
<span className="absolute -left-[31px] top-1 h-4 w-4 rounded-full border-4 border-white bg-[#003C2E]"></span>
<h4 className="font-bold text-[#003C2E]">V2 — Advanced Analysis</h4>
<p className="text-sm text-gray-500">Strokes Gained, Heatmaps, Player Typology.</p>
</div>
<div className="relative">
<span className="absolute -left-[31px] top-1 h-4 w-4 rounded-full border-4 border-white bg-[#C5A065]"></span>
<h4 className="font-bold text-[#003C2E]">V4 — Predictive</h4>
<p className="text-sm text-gray-500">"Here is how you will play Sunday." Performance anticipation based on form.</p>
</div>
</div>
<div className="bg-[#F6F3EE] p-5 rounded-2xl">
<p className="text-sm font-medium text-[#003C2E]">Input Data:</p>
<div className="flex flex-wrap gap-2 mt-2">
<span className="px-3 py-1 bg-white rounded-lg text-xs font-semibold text-gray-600 border border-gray-200">Self-declared</span>
<span className="px-3 py-1 bg-white rounded-lg text-xs font-semibold text-gray-600 border border-gray-200">Garmin</span>
<span className="px-3 py-1 bg-white rounded-lg text-xs font-semibold text-gray-600 border border-gray-200">Arccos</span>
<span className="px-3 py-1 bg-white rounded-lg text-xs font-semibold text-gray-600 border border-gray-200">TrackMan</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#003C2E] text-white overflow-hidden relative" id="ia-parcours">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#C5A065 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A065]/10 border border-[#C5A065]/30">
<i className="w-4 h-4 text-[#C5A065]" data-lucide="bot"></i>
<span className="text-xs font-semibold text-[#C5A065] tracking-wide uppercase">AI Course Recon™</span>
</div>
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight">Course Recon<br/>by AI.</h2>
<p className="text-white/70 text-lg">Your Digital Twin + the course + weather + your form = a complete game plan to break your index.</p>
<div className="space-y-4">
<div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<div className="text-[#C5A065]"><i className="w-6 h-6" data-lucide="map-pin"></i></div>
<div>
<h4 className="font-bold text-sm">Before you play</h4>
<p className="text-xs text-white/60 mt-1">The AI generates a hole-by-hole plan based on your goal (Safe, Aggressive, Matchplay).</p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<div className="text-[#C5A065]"><i className="w-6 h-6" data-lucide="navigation"></i></div>
<div>
<h4 className="font-bold text-sm">During the game</h4>
<p className="text-xs text-white/60 mt-1">Club recommendations at the tee box and personalized danger zones.</p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<div className="text-[#C5A065]"><i className="w-6 h-6" data-lucide="bar-chart-2"></i></div>
<div>
<h4 className="font-bold text-sm">After the game</h4>
<p className="text-xs text-white/60 mt-1">"Plan vs Reality" comparison. "When you followed the plan: +3.2 strokes gained."</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-4 bg-[#C5A065]/20 rounded-[40px] blur-xl"></div>
<div className="bg-white text-[#111827] rounded-[32px] p-6 shadow-2xl relative">
<div className="flex justify-between items-center mb-6">
<div>
<h3 className="font-bold text-lg">Game Plan: Hole 7</h3>
<p className="text-xs text-gray-500">St Andrews • Par 4 • 342m</p>
</div>
<span className="bg-[#003C2E] text-white px-3 py-1 rounded-lg text-xs font-bold">Plan: Bogey Safe</span>
</div>

<div className="h-64 bg-gray-100 rounded-2xl mb-4 relative overflow-hidden border border-gray-200">

<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 50">
<path d="M0,25 Q50,15 100,25" fill="none" stroke="#a7f3d0" strokeWidth="20"></path>

<path d="M5,25 Q30,20 60,22" fill="none" stroke="#003C2E" stroke-dasharray="2,2" strokeWidth="1"></path>
<circle cx="60" cy="22" fill="#003C2E" r="2"></circle>
</svg>

<div className="absolute top-[40%] left-[60%] w-16 h-16 border-2 border-[#C5A065] rounded-full flex items-center justify-center opacity-80">
<span className="bg-white text-[10px] font-bold px-1 rounded shadow text-[#003C2E]">Driver</span>
</div>
</div>
<div className="bg-[#F6F3EE] p-4 rounded-xl border border-[#003C2E]/5">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-amber-500 shrink-0" data-lucide="alert-octagon"></i>
<div>
<p className="text-xs font-bold text-[#003C2E]">Danger Right (Bunker)</p>
<p className="text-[10px] text-gray-600">Your typical miss is a slice. Aim for the left edge of the fairway. Driver recommended (wind assist).</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F6F3EE]">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#003C2E]">Your bag becomes a system,<br/>not a list of clubs.</h2>
</div>
<div className="grid md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-[#003C2E]/5">

<div className="space-y-4">
<div className="flex justify-between items-center mb-4">
<h3 className="font-bold text-[#003C2E]">My Bag</h3>
<span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Consistency: 88%</span>
</div>

<div className="space-y-2">
<div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
<span className="w-8 font-bold text-gray-400 text-xs">DR</span>
<div className="flex-1 bg-white h-2 rounded-full overflow-hidden border border-gray-100"><div className="bg-[#003C2E] w-[95%] h-full"></div></div>
<span className="text-xs font-bold w-12 text-right">240m</span>
</div>
<div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
<span className="w-8 font-bold text-gray-400 text-xs">3W</span>
<div className="flex-1 bg-white h-2 rounded-full overflow-hidden border border-gray-100"><div className="bg-[#003C2E] w-[85%] h-full"></div></div>
<span className="text-xs font-bold w-12 text-right">215m</span>
</div>

<div className="flex items-center gap-2 py-1 px-2 bg-red-50 rounded border border-red-100">
<i className="w-3 h-3 text-red-500" data-lucide="arrow-up-down"></i>
<p className="text-[10px] text-red-600 font-bold">Major Gap Detected (25m)</p>
</div>
<div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
<span className="w-8 font-bold text-gray-400 text-xs">4H</span>
<div className="flex-1 bg-white h-2 rounded-full overflow-hidden border border-gray-100"><div className="bg-[#003C2E] w-[70%] h-full"></div></div>
<span className="text-xs font-bold w-12 text-right">190m</span>
</div>
</div>
</div>

<div className="flex flex-col justify-center space-y-6">
<div className="flex gap-4 items-start">
<div className="p-2 bg-[#C5A065]/10 rounded-lg text-[#C5A065]"><i className="w-5 h-5" data-lucide="sliders"></i></div>
<div>
<h4 className="font-bold text-[#003C2E] text-sm">Full Club Data</h4>
<p className="text-sm text-gray-600 mt-1">Brand, model, loft, shaft, and reliability score for each club.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="p-2 bg-[#C5A065]/10 rounded-lg text-[#C5A065]"><i className="w-5 h-5" data-lucide="alert-circle"></i></div>
<div>
<h4 className="font-bold text-[#003C2E] text-sm">Gapping Alerts</h4>
<p className="text-sm text-gray-600 mt-1">"Your 4H and 5I overlap." AI detects inconsistencies in your yardages.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="p-2 bg-[#C5A065]/10 rounded-lg text-[#C5A065]"><i className="w-5 h-5" data-lucide="shopping-bag"></i></div>
<div>
<h4 className="font-bold text-[#003C2E] text-sm">Gear Suggestions</h4>
<p className="text-sm text-gray-600 mt-1">"A 50° wedge would improve your scoring." Based on your actual data.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-[#003C2E]/5">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-[#C5A065] font-bold uppercase tracking-widest text-xs mb-2 block">Personal Assistant</span>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#003C2E]">A caddie in your pocket.</h2>
<p className="text-gray-600 mt-4 max-w-2xl mx-auto">GolfVault observes, understands, and suggests the next best action.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-[#F6F3EE] p-6 rounded-3xl border border-[#003C2E]/5 hover-card-up group">
<i className="w-8 h-8 text-[#003C2E] mb-4 group-hover:text-[#C5A065] transition-colors" data-lucide="clock"></i>
<h3 className="font-bold text-[#003C2E] mb-2">Optimized Tee Times</h3>
<p className="text-xs text-gray-600">"You play better in the morning → I suggest 8:30 AM at Saint Donat."</p>
</div>

<div className="bg-[#F6F3EE] p-6 rounded-3xl border border-[#003C2E]/5 hover-card-up group">
<i className="w-8 h-8 text-[#003C2E] mb-4 group-hover:text-[#C5A065] transition-colors" data-lucide="target"></i>
<h3 className="font-bold text-[#003C2E] mb-2">Targeted Practice</h3>
<p className="text-xs text-gray-600">"You're losing 3 shots on long putts this week → dedicated session."</p>
</div>

<div className="bg-[#F6F3EE] p-6 rounded-3xl border border-[#003C2E]/5 hover-card-up group">
<i className="w-8 h-8 text-[#003C2E] mb-4 group-hover:text-[#C5A065] transition-colors" data-lucide="users"></i>
<h3 className="font-bold text-[#003C2E] mb-2">Smart Organization</h3>
<p className="text-xs text-gray-600">Game proposals based on compatibility and your friends' availability.</p>
</div>

<div className="bg-[#F6F3EE] p-6 rounded-3xl border border-[#003C2E]/5 hover-card-up group">
<i className="w-8 h-8 text-[#003C2E] mb-4 group-hover:text-[#C5A065] transition-colors" data-lucide="wrench"></i>
<h3 className="font-bold text-[#003C2E] mb-2">Gear Advice</h3>
<p className="text-xs text-gray-600">"Your wedges are over-performing → exploit the 100–120m zone."</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#003C2E] text-white" id="features">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold mb-12 text-center">The Mobile Experience</h2>
<div className="grid md:grid-cols-4 gap-8">
<div className="text-center p-4">
<div className="w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center mb-4">
<i className="w-8 h-8 text-[#C5A065]" data-lucide="layout-dashboard"></i>
</div>
<h3 className="font-bold mb-2">Home OS</h3>
<p className="text-xs text-white/60">Central Dashboard. AI Suggestions, recent activity, and challenges.</p>
</div>
<div className="text-center p-4">
<div className="w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center mb-4">
<i className="w-8 h-8 text-[#C5A065]" data-lucide="calendar-days"></i>
</div>
<h3 className="font-bold mb-2">Agenda</h3>
<p className="text-xs text-white/60">Complete Calendar. Games, competitions, fittings.</p>
</div>
<div className="text-center p-4">
<div className="w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center mb-4">
<i className="w-8 h-8 text-[#C5A065]" data-lucide="network"></i>
</div>
<h3 className="font-bold mb-2">Network</h3>
<p className="text-xs text-white/60">Compatible players, groups, and smart invitations.</p>
</div>
<div className="text-center p-4">
<div className="w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center mb-4">
<i className="w-8 h-8 text-[#C5A065]" data-lucide="user-check"></i>
</div>
<h3 className="font-bold mb-2">Twin Profile</h3>
<p className="text-xs text-white/60">Golfing ID card, key stats, and real index.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-5xl mx-auto px-6 text-center mb-12">
<h2 className="text-3xl lg:text-4xl font-semibold text-[#003C2E] mb-6">The first real social network<br/>for golf.</h2>
</div>
<div className="max-w-2xl mx-auto px-6 space-y-4">

<div className="bg-[#F6F3EE] p-5 rounded-3xl border border-[#003C2E]/5 flex gap-4 items-start shadow-sm">
<div className="w-10 h-10 rounded-full bg-gray-200 shrink-0 overflow-hidden"><img alt="avatar" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marc"/></div>
<div className="flex-1">
<p className="text-sm text-[#003C2E]"><span className="font-bold">Marc</span> is playing <span className="font-semibold">Monthly Medal</span></p>
<p className="text-xs text-gray-500 mb-2">Sunday • Royal St. George's</p>
<button className="text-xs font-semibold text-[#C5A065]">Join Marc →</button>
</div>
</div>

<div className="bg-[#F6F3EE] p-5 rounded-3xl border border-[#003C2E]/5 flex gap-4 items-start shadow-sm">
<div className="w-10 h-10 rounded-full bg-gray-200 shrink-0 overflow-hidden"><img alt="avatar" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Julie"/></div>
<div className="flex-1">
<p className="text-sm text-[#003C2E]"><span className="font-bold">Julie</span> published a workout</p>
<div className="mt-2 bg-white p-3 rounded-xl border border-gray-100">
<div className="flex items-center gap-2 mb-1">
<span className="w-2 h-2 bg-green-500 rounded-full"></span>
<span className="text-xs font-bold text-gray-700">Wedging Progression</span>
</div>
<p className="text-xs text-gray-500 italic">"Finally found the key on intermediate distances!"</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F6F3EE]">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-[#003C2E] mb-12 text-center">A tool serving clubs,<br/>not against them.</h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
<h3 className="text-xl font-bold text-[#003C2E] mb-4 flex items-center gap-2">
<i className="w-5 h-5 text-[#C5A065]" data-lucide="flag"></i> For Clubs
                    </h3>
<ul className="space-y-3">
<li className="flex gap-2 text-sm text-gray-600"><i className="w-4 h-4 text-[#C5A065]" data-lucide="check"></i> Traffic &amp; attendance dashboard (v2).</li>
<li className="flex gap-2 text-sm text-gray-600"><i className="w-4 h-4 text-[#C5A065]" data-lucide="check"></i> Targeted visibility for competitions &amp; fittings.</li>
<li className="flex gap-2 text-sm text-gray-600"><i className="w-4 h-4 text-[#C5A065]" data-lucide="check"></i> Integration with members' real habits.</li>
</ul>
</div>
<div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
<h3 className="text-xl font-bold text-[#003C2E] mb-4 flex items-center gap-2">
<i className="w-5 h-5 text-[#C5A065]" data-lucide="graduation-cap"></i> For Pros
                    </h3>
<ul className="space-y-3">
<li className="flex gap-2 text-sm text-gray-600"><i className="w-4 h-4 text-[#C5A065]" data-lucide="check"></i> Student tracking via their Digital Twin.</li>
<li className="flex gap-2 text-sm text-gray-600"><i className="w-4 h-4 text-[#C5A065]" data-lucide="check"></i> History of rounds &amp; practice sessions.</li>
<li className="flex gap-2 text-sm text-gray-600"><i className="w-4 h-4 text-[#C5A065]" data-lucide="check"></i> Work plans based on real data.</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-y border-[#003C2E]/5">
<div className="max-w-7xl mx-auto px-6 text-center">
<h3 className="text-lg font-semibold text-[#003C2E] mb-8">Your data belongs to you. GolfVault organizes it.</h3>
<div className="flex flex-wrap justify-center gap-4 lg:gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-bold tracking-tight text-[#003C2E]">GARMIN</span>
<span className="text-xl font-bold tracking-tight text-[#003C2E]">arccos</span>
<span className="text-xl font-bold tracking-tight text-[#003C2E]">TRACKMAN</span>
<span className="text-xl font-bold tracking-tight text-[#003C2E]">SHOTSCOPE</span>
<span className="text-xl font-bold tracking-tight text-[#003C2E]">TOPTRACER</span>
</div>
<p className="text-xs text-gray-400 mt-8">Simple import via API, file, or capture. Strict data governance.</p>
</div>
</section>

<section className="py-24 bg-[#F6F3EE]" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-[#003C2E]">Simple Pricing.</h2>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-start">

<div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
<h3 className="text-lg font-bold text-[#003C2E] mb-2">Free</h3>
<p className="text-xs text-gray-500 mb-6">To start structuring your game.</p>
<ul className="space-y-3 mb-8">
<li className="text-sm flex gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i> Basic Stats</li>
<li className="text-sm flex gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i> Public Profile</li>
<li className="text-sm flex gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i> Simple Activity</li>
</ul>
<button className="w-full py-3 border border-[#003C2E] text-[#003C2E] rounded-xl font-semibold text-sm hover:bg-gray-50">Sign Up</button>
</div>

<div className="bg-[#003C2E] p-8 rounded-[32px] border border-[#003C2E] shadow-xl relative transform lg:-translate-y-4">
<div className="absolute top-0 right-0 bg-[#C5A065] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-[30px] uppercase tracking-wider">Popular</div>
<h3 className="text-lg font-bold text-white mb-2">GolfVault+</h3>
<p className="text-xs text-white/60 mb-6">The complete OS for performance.</p>
<ul className="space-y-3 mb-8 text-white/90">
<li className="text-sm flex gap-2"><i className="w-4 h-4 text-[#C5A065]" data-lucide="check"></i> Advanced Digital Twin</li>
<li className="text-sm flex gap-2"><i className="w-4 h-4 text-[#C5A065]" data-lucide="check"></i> AI Course Recon™</li>
<li className="text-sm flex gap-2"><i className="w-4 h-4 text-[#C5A065]" data-lucide="check"></i> AI Caddie</li>
<li className="text-sm flex gap-2"><i className="w-4 h-4 text-[#C5A065]" data-lucide="check"></i> Infinite History</li>
</ul>
<button className="w-full py-3 bg-[#C5A065] text-white rounded-xl font-semibold text-sm hover:bg-[#b08d55] shadow-lg shadow-[#C5A065]/20">Request Early Access</button>
</div>

<div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
<h3 className="text-lg font-bold text-[#003C2E] mb-2">Clubs &amp; Pros</h3>
<p className="text-xs text-gray-500 mb-6">Management and engagement tools.</p>
<ul className="space-y-3 mb-8">
<li className="text-sm flex gap-2"><i className="w-4 h-4 text-gray-400" data-lucide="check"></i> Club Dashboard</li>
<li className="text-sm flex gap-2"><i className="w-4 h-4 text-gray-400" data-lucide="check"></i> Player Insights</li>
<li className="text-sm flex gap-2"><i className="w-4 h-4 text-gray-400" data-lucide="check"></i> Marketing Tools</li>
</ul>
<button className="w-full py-3 border border-gray-200 text-gray-600 rounded-xl font-semibold text-sm hover:bg-gray-50">Contact Team</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-[#003C2E] mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-6">
<details className="group bg-[#F6F3EE] rounded-2xl p-6 cursor-pointer">
<summary className="flex justify-between items-center font-semibold text-[#003C2E] list-none">
                        Does GolfVault replace my current GPS app?
                        <span className="transition group-open:rotate-180"><i className="w-5 h-5" data-lucide="chevron-down"></i></span>
</summary>
<p className="text-sm text-gray-600 mt-4 leading-relaxed">
                        Not necessarily. You can continue using your usual GPS for distances. GolfVault focuses on analysis, preparation (AI), and social life, integrating with your existing data.
                    </p>
</details>
<details className="group bg-[#F6F3EE] rounded-2xl p-6 cursor-pointer">
<summary className="flex justify-between items-center font-semibold text-[#003C2E] list-none">
                        How do you retrieve my Garmin / Arccos data?
                        <span className="transition group-open:rotate-180"><i className="w-5 h-5" data-lucide="chevron-down"></i></span>
</summary>
<p className="text-sm text-gray-600 mt-4 leading-relaxed">
                        We use official APIs and standard export formats. Your data is imported, cleaned, and used to build your Digital Twin.
                    </p>
</details>
<details className="group bg-[#F6F3EE] rounded-2xl p-6 cursor-pointer">
<summary className="flex justify-between items-center font-semibold text-[#003C2E] list-none">
                        What is a golfing Digital Twin?
                        <span className="transition group-open:rotate-180"><i className="w-5 h-5" data-lucide="chevron-down"></i></span>
</summary>
<p className="text-sm text-gray-600 mt-4 leading-relaxed">
                        It's a living digital representation of your game. It knows your real distances, dispersion tendencies, and weaknesses, evolving with every round you log.
                    </p>
</details>
</div>
</div>
</section>

<footer className="bg-[#111827] text-white py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="text-2xl font-bold tracking-tight text-white flex items-center gap-2 mb-4" href="#">
<div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-[#111827]">
<i className="w-5 h-5" data-lucide="aperture"></i>
</div>
                        GolfVault
                    </a>
<p className="text-gray-400 text-sm max-w-sm">
                        The Modern Golfer's Operating System. Unify your data, your gear, and your network.
                    </p>
</div>
<div>
<h4 className="font-bold mb-4 text-[#C5A065]">Product</h4>
<ul className="space-y-2 text-sm text-gray-400">
<li><a className="hover:text-white" href="#">Digital Twin</a></li>
<li><a className="hover:text-white" href="#">AI Course Recon</a></li>
<li><a className="hover:text-white" href="#">Pricing</a></li>
<li><a className="hover:text-white" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4 text-[#C5A065]">Company</h4>
<ul className="space-y-2 text-sm text-gray-400">
<li><a className="hover:text-white" href="#">About</a></li>
<li><a className="hover:text-white" href="#">Partner Clubs</a></li>
<li><a className="hover:text-white" href="#">Investors</a></li>
<li><a className="hover:text-white" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
<p>© 2023 GolfVault Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Legal</a>
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
