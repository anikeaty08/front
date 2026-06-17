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
      

<section className="relative bg-blueprint pt-20 pb-32 px-4 md:px-6 overflow-hidden">
<div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">

<div className="text-center max-w-5xl mx-auto mb-12">
<h1 className="text-3xl md:text-5xl lg:text-[56px] font-semibold text-white tracking-tight leading-[1.1] mb-8">
                    How to Acquire Your First (or Next) 100+ Unit Multifamily Property in the Next 12 Months
                </h1>
<p className="text-slate-300 text-sm md:text-lg max-w-3xl mx-auto font-light leading-relaxed">
                    Use OPM to get your first apartment deal under contract, then follow our proven roadmap to <span className="text-[#CC9B3F] font-medium">turn that deal into a portfolio that can actually set you free.</span>
</p>
</div>

<div className="w-full max-w-4xl bg-[#0f2a42] rounded-xl overflow-hidden shadow-2xl shadow-blue-900/40 border border-[#2a5a8a] mb-12">

<div className="bg-[#153454] py-3 px-4 flex items-center justify-center gap-2 text-white text-xs md:text-sm font-medium border-b border-[#2a5a8a]/30">
<iconify-icon height="20" icon="solar:headphones-round-sound-linear" width="20"></iconify-icon>
<span>Headphones In and <span className="text-[#CC9B3F] underline decoration-[#CC9B3F]/50 underline-offset-2">Sound Up</span> For Best Experience</span>
</div>

<div className="relative aspect-video group cursor-pointer bg-[#0a1c2e]">

<div className="absolute inset-0 bg-gradient-to-br from-[#1C4064] to-[#0f2a42] opacity-50"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 bg-[#CC9B3F] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(204,155,63,0.4)] group-hover:bg-[#d4ab5a] group-hover:scale-105 transition-all duration-300 border-4 border-white/20">
<iconify-icon className="text-white ml-1" height="32" icon="solar:play-bold" width="32"></iconify-icon>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-black/80 to-transparent px-6 flex items-center justify-between pointer-events-none">
<div className="flex items-center gap-3">
<div className="h-1 w-32 bg-white/30 rounded-full overflow-hidden">
<div className="h-full w-1/3 bg-[#CC9B3F]"></div>
</div>
<span className="text-xs text-white font-medium">04:12 / 14:12</span>
</div>
</div>
</div>

<div className="bg-[#153454] py-3 px-4 flex items-center justify-center gap-2 text-white text-xs md:text-sm font-medium text-center border-t border-[#2a5a8a]/30">
<iconify-icon className="text-[#CC9B3F] hidden md:block" height="20" icon="solar:videocamera-record-linear" width="20"></iconify-icon>
<span>This Video Will <span className="text-[#CC9B3F] font-semibold">Answer 80% Of Your Questions</span> &amp; Save You Time</span>
</div>
</div>

<div className="flex flex-col items-center gap-3 mb-20">
<a className="bg-[#CC9B3F] hover:bg-[#d4ab5a] text-white text-lg md:text-xl font-semibold py-4 px-10 rounded-lg shadow-[0_0_25px_rgba(204,155,63,0.4)] flex items-center gap-3 transition-all transform hover:-translate-y-1 group" href="#application">
                    Book Your Free Warrior Strategy Call
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" height="24" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</a>
<span className="text-xs text-slate-400 font-medium tracking-wide uppercase">Talk with our team about your specific outcome</span>
</div>

<div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl mb-24">

<div className="bg-[#153454]/80 backdrop-blur-sm border border-[#2a5a8a] rounded-xl p-6 flex items-center gap-5 relative overflow-hidden group hover:border-[#CC9B3F]/50 transition-colors">
<div className="w-14 h-14 rounded-lg bg-[#CC9B3F]/10 flex items-center justify-center shrink-0 text-[#CC9B3F]">
<iconify-icon height="28" icon="solar:buildings-2-linear" width="28"></iconify-icon>
</div>
<div>
<div className="text-2xl font-semibold text-white mb-1">343+ Deals</div>
<div className="text-[11px] text-slate-300 uppercase tracking-wide font-medium">Verified Warrior Deals Closed</div>
</div>
</div>

<div className="bg-[#153454]/80 backdrop-blur-sm border border-[#2a5a8a] rounded-xl p-6 flex items-center gap-5 relative overflow-hidden group hover:border-[#CC9B3F]/50 transition-colors">
<div className="w-14 h-14 rounded-lg bg-[#CC9B3F]/10 flex items-center justify-center shrink-0 text-[#CC9B3F]">
<iconify-icon height="28" icon="solar:key-linear" width="28"></iconify-icon>
</div>
<div>
<div className="text-2xl font-semibold text-white mb-1">$2.1B+ Assets</div>
<div className="text-[11px] text-slate-300 uppercase tracking-wide font-medium">Controlled by Warrior Members</div>
</div>
</div>

<div className="bg-[#153454]/80 backdrop-blur-sm border border-[#2a5a8a] rounded-xl p-6 flex items-center gap-5 relative overflow-hidden group hover:border-[#CC9B3F]/50 transition-colors">
<div className="w-14 h-14 rounded-lg bg-[#CC9B3F]/10 flex items-center justify-center shrink-0 text-[#CC9B3F]">
<iconify-icon height="28" icon="solar:chart-square-linear" width="28"></iconify-icon>
</div>
<div>
<div className="text-2xl font-semibold text-white mb-1">2,000+ Doors</div>
<div className="text-[11px] text-slate-300 uppercase tracking-wide font-medium">Personally Owned by Rod Khleif</div>
</div>
</div>
</div>

<div className="w-full max-w-4xl" id="application">
<div className="text-center mb-10">
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">Ready to Build Your Multifamily Empire?</h2>
<p className="text-slate-300 text-lg font-light">Before we book your call, we need to make sure you're a good fit.</p>
</div>

<div className="bg-white rounded-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-[#2a5a8a]/30 overflow-hidden relative z-20">
<div className="p-8 md:p-12">

<div className="flex gap-4 mb-8">
<div className="bg-[#1C4064] text-white w-8 h-8 rounded flex items-center justify-center font-bold text-sm shrink-0 mt-1">1</div>
<h2 className="text-lg md:text-xl font-medium text-[#1C4064] leading-relaxed">
                                To confirm — you're filling this out because you want help acquiring multifamily apartment complexes through proven syndication strategies, correct? <span className="text-[#CC9B3F]">*</span>
</h2>
</div>

<div className="space-y-4 mb-10 pl-0 md:pl-12">
<label className="group flex items-center gap-4 p-4 rounded-lg bg-[#CC9B3F]/10 border-2 border-[#CC9B3F] cursor-pointer transition-all">
<div className="w-8 h-8 flex items-center justify-center bg-white border-2 border-[#CC9B3F] rounded text-sm font-bold text-[#CC9B3F]">A</div>
<span className="text-base text-[#1C4064] font-medium">Yes, I want to build a multifamily portfolio and generate lifetime cashflow</span>
</label>
<label className="group flex items-center gap-4 p-4 rounded-lg bg-slate-50 border-2 border-transparent hover:bg-slate-100 cursor-pointer transition-all">
<div className="w-8 h-8 flex items-center justify-center bg-white border-2 border-slate-300 rounded text-sm font-bold text-slate-400 group-hover:border-slate-400">B</div>
<span className="text-base text-slate-600">No, I'm going to leave this page immediately</span>
</label>
</div>

<div className="flex items-center justify-between pt-6 border-t border-slate-100">
<button className="bg-[#CC9B3F] hover:bg-[#d4ab5a] text-white font-semibold py-3 px-8 rounded-lg text-sm md:text-base transition-colors shadow-sm">
                                Next
                            </button>
<div className="flex items-center gap-2">
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-[#1C4064] hover:bg-slate-50 transition-colors">
<iconify-icon height="20" icon="solar:alt-arrow-up-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-[#1C4064] hover:bg-slate-50 transition-colors">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="mt-6 p-4 bg-[#CC9B3F]/10 border-l-4 border-[#CC9B3F] rounded-r text-slate-300 text-sm bg-[#153454]/50 backdrop-blur-sm">
<p className="font-bold mb-1 text-[#CC9B3F]">Typeform Embed Instructions:</p>
<p>Replace the sample question above with your actual Typeform/Jotform iframe embed code.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-white relative z-20">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<p className="text-xs font-semibold tracking-widest text-slate-500 mb-4 uppercase">Worked with 1400+ Investors</p>
<h2 className="text-3xl md:text-5xl font-semibold text-[#1C4064] tracking-tight">
                    HEAR THEIR STORIES
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

<div className="group cursor-pointer">
<div className="bg-slate-100 rounded-2xl border-2 border-transparent group-hover:border-[#CC9B3F] transition-all overflow-hidden aspect-video flex items-center justify-center relative">
<iconify-icon className="text-[#CC9B3F] opacity-80 group-hover:scale-110 transition-transform" height="48" icon="solar:play-circle-linear" width="48"></iconify-icon>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
<p className="text-white text-sm font-medium">Student Case Study #1</p>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-slate-100 rounded-2xl border-2 border-transparent group-hover:border-[#CC9B3F] transition-all overflow-hidden aspect-video flex items-center justify-center relative">
<iconify-icon className="text-[#CC9B3F] opacity-80 group-hover:scale-110 transition-transform" height="48" icon="solar:play-circle-linear" width="48"></iconify-icon>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
<p className="text-white text-sm font-medium">Student Case Study #2</p>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-slate-100 rounded-2xl border-2 border-transparent group-hover:border-[#CC9B3F] transition-all overflow-hidden aspect-video flex items-center justify-center relative">
<iconify-icon className="text-[#CC9B3F] opacity-80 group-hover:scale-110 transition-transform" height="48" icon="solar:play-circle-linear" width="48"></iconify-icon>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
<p className="text-white text-sm font-medium">Student Case Study #3</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#1C4064] py-24 px-4 text-white border-t border-[#2a5a8a]/30">
<div className="max-w-6xl mx-auto">
<div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start mb-20">

<div className="aspect-[3/4] bg-gradient-to-br from-[#2a5a8a] to-[#153454] rounded-2xl border border-white/10 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
<iconify-icon className="text-[#CC9B3F] relative z-10" height="80" icon="solar:user-speak-rounded-bold" width="80"></iconify-icon>
<p className="text-white/60 font-medium mt-4 relative z-10">[Rod Khleif Speaking on Stage]</p>
<div className="absolute inset-0 bg-blue-900/30"></div>
</div>

<div>
<p className="text-[#CC9B3F] font-semibold tracking-wide uppercase text-sm mb-4">Learn My $2.1 Billion ACT Framework</p>
<h2 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight mb-6">
                        #1 Most Powerful, Effective, &amp; Interactive Multifamily Mentorship Program In The World
                    </h2>
<div className="space-y-6 text-slate-300 font-light text-lg leading-relaxed">
<p>
                            Over the last 40 years, I've personally owned over 2,000 properties and built one of the most successful multifamily mentorship communities in America. Through the Warrior Program and my network, my students have generated over $2.1 BILLION in real estate transactions and now collectively own 260,000+ multifamily units.
                        </p>
<p>
                            I've worked with over 1,400 real estate investors in every situation imaginable—complete beginners with zero capital, burned-out W-2 professionals seeking freedom, experienced single-family investors ready to scale, and even active syndicators looking to 10X their portfolios. To put it bluntly, I am the industry-leading expert when it comes to acquiring, funding, and scaling profitable multifamily apartment complexes.
                        </p>
<p className="text-white font-medium border-l-4 border-[#CC9B3F] pl-4">
                            I will personally guide you through my battle-tested ACT Framework and give you direct access to our elite Warrior Community, proven deal flow systems, and private capital network—all for a fraction of what a single bad deal could cost you.
                        </p>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-10 border-t border-white/10">
<div>
<div className="text-2xl md:text-3xl font-semibold text-[#CC9B3F]">$2.1B+</div>
<div className="text-[10px] uppercase tracking-wide opacity-60 mt-1">Student Tx Volume</div>
</div>
<div>
<div className="text-2xl md:text-3xl font-semibold text-[#CC9B3F]">1,400+</div>
<div className="text-[10px] uppercase tracking-wide opacity-60 mt-1">Warriors Mentored</div>
</div>
<div>
<div className="text-2xl md:text-3xl font-semibold text-[#CC9B3F]">40x</div>
<div className="text-[10px] uppercase tracking-wide opacity-60 mt-1">Avg ROI</div>
</div>
<div>
<div className="text-2xl md:text-3xl font-semibold text-[#CC9B3F]">260k+</div>
<div className="text-[10px] uppercase tracking-wide opacity-60 mt-1">Units Acquired</div>
</div>
</div>

<div className="mt-10">
<a className="inline-flex items-center gap-2 bg-[#CC9B3F] hover:bg-[#d4ab5a] text-white text-base font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg shadow-[#CC9B3F]/20" href="#application">
                            Book a FREE Warrior Strategy Call
                            <iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="text-center mb-16">
<span className="inline-block bg-[#CC9B3F]/10 text-[#CC9B3F] border border-[#CC9B3F]/30 py-2 px-6 rounded-full text-xs font-semibold tracking-widest uppercase mb-8">
                    Become A Top 1% Multifamily Investor
                </span>
<h2 className="text-3xl md:text-4xl font-semibold mb-12 tracking-tight">WHAT YOU GET INSIDE THE WARRIOR MENTORSHIP PROGRAM</h2>
<div className="grid md:grid-cols-2 gap-6 text-left">

<div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors flex flex-col">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-[#CC9B3F] rounded-lg flex items-center justify-center text-xl font-bold text-white shrink-0">
<iconify-icon height="24" icon="solar:user-speak-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold">Private 1-on-1 Mentorship</h3>
</div>
<div className="text-slate-300 text-sm leading-relaxed space-y-4">
<p>Unlike other programs that use "professional coaches" with no real-world experience, every Warrior mentor is a battle-tested multifamily investor who personally owns 600+ units. You'll get paired with an elite coach who has closed deals, raised millions in capital, and scaled portfolios firsthand.</p>
<p>They'll review your deals before you submit LOIs, walk you through complex syndication structures, introduce you to capital partners, and help you avoid the costly mistakes that destroy 90% of new investors.</p>
</div>
</div>

<div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors flex flex-col">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-[#CC9B3F] rounded-lg flex items-center justify-center text-xl font-bold text-white shrink-0">
<iconify-icon height="24" icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold">The Complete ACT Framework System</h3>
</div>
<div className="text-slate-300 text-sm leading-relaxed space-y-3">
<p>The exact 3-pillar system that's helped Warriors acquire over 260,000 units:</p>
<ul className="space-y-2 pl-4 border-l border-white/10">
<li><span className="text-[#CC9B3F] font-medium">AWARENESS:</span> Master market analysis, deal sizes, and positioning.</li>
<li><span className="text-[#CC9B3F] font-medium">CLOSE:</span> Create deal-flow, master due diligence, and execute efficient closings.</li>
<li><span className="text-[#CC9B3F] font-medium">TRANSFORM:</span> Value-add strategies and system building for wealth creation.</li>
</ul>
<p className="italic text-slate-400 text-xs mt-2">Tested and proven by 343+ verified student deals.</p>
</div>
</div>

<div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors flex flex-col">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-[#CC9B3F] rounded-lg flex items-center justify-center text-xl font-bold text-white shrink-0">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold">Exclusive Warrior Community &amp; Network</h3>
</div>
<div className="text-slate-300 text-sm leading-relaxed space-y-3">
<p>You're getting adopted into a family of action-takers closing deals every week.</p>
<ul className="list-disc list-inside space-y-1 text-slate-400 marker:text-[#CC9B3F]">
<li>Private off-market deal pipeline sourcing</li>
<li>Weekly group coaching calls with Rod</li>
<li>Private community forum for partnerships</li>
<li>Direct intros to brokers, lenders, and attorneys</li>
</ul>
<p className="font-medium text-white mt-2">The network alone is worth 10X the investment.</p>
</div>
</div>

<div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors flex flex-col">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-[#CC9B3F] rounded-lg flex items-center justify-center text-xl font-bold text-white shrink-0">
<iconify-icon height="24" icon="solar:dollar-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold">Syndication &amp; Capital Raising Training</h3>
</div>
<div className="text-slate-300 text-sm leading-relaxed space-y-3">
<p>We'll show you exactly how to attract OTHER PEOPLE'S MONEY legally.</p>
<ul className="list-disc list-inside space-y-1 text-slate-400 marker:text-[#CC9B3F]">
<li>Proven investor presentation templates</li>
<li>Legal document templates (PPMs, operating agreements)</li>
<li>Scripts for investor conversations</li>
<li>Access to our private capital network</li>
</ul>
<p className="mt-2">Raise $500K, $1M, even $5M+ for your deals from Day 1.</p>
</div>
</div>

<div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors flex flex-col">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-[#CC9B3F] rounded-lg flex items-center justify-center text-xl font-bold text-white shrink-0">
<iconify-icon height="24" icon="solar:home-smile-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold">Value-Add Renovation Playbook</h3>
</div>
<div className="text-slate-300 text-sm leading-relaxed space-y-3">
<p>Force appreciation through strategic renovations to create massive wealth.</p>
<ul className="list-disc list-inside space-y-1 text-slate-400 marker:text-[#CC9B3F]">
<li>The exact unit upgrades that generate highest ROI</li>
<li>How to underwrite renovation budgets accurately</li>
<li>Contractor management systems</li>
<li>Refinance/Sell strategies to maximize IRR</li>
</ul>
<p className="mt-2">Learn how Warriors force equity creation instead of hoping for appreciation.</p>
</div>
</div>

<div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors flex flex-col">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-[#CC9B3F] rounded-lg flex items-center justify-center text-xl font-bold text-white shrink-0">
<iconify-icon height="24" icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold">Comprehensive Tools &amp; Templates</h3>
</div>
<div className="text-slate-300 text-sm leading-relaxed space-y-3">
<p>Instant access to the exact tools Rod and his top students use:</p>
<ul className="list-disc list-inside space-y-1 text-slate-400 marker:text-[#CC9B3F]">
<li>Underwriting spreadsheets with sensitivity analysis</li>
<li>Due diligence checklists (financial, legal, physical)</li>
<li>Market analysis and demographic tools</li>
<li>Property management RFP templates</li>
<li>Investor communication templates (Reports, K-1s)</li>
</ul>
<p className="mt-2 font-medium text-white">Everything is plug-and-play. Just copy what works.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-4 pb-32 pt-20 text-center">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold text-[#1C4064] mb-6 tracking-tight leading-tight">
                Ready To Build Your Multifamily Empire &amp; Create Lifetime Cashflow?
            </h2>
<div className="space-y-6 text-slate-600 text-lg mb-12 max-w-2xl mx-auto text-left md:text-center">
<p>
                    This isn't for tire-kickers or people looking for "passive" income without doing the work. The Warrior Program is for serious, action-oriented investors who are ready to do what it takes to build generational wealth.
                </p>
<p>
                    If that's you, the next step is simple: book your free strategy call. On this call, we'll diagnose what's holding you back and create a customized 12-month action plan.
                </p>
</div>
<a className="inline-flex items-center gap-3 bg-[#CC9B3F] text-white py-5 px-12 rounded-lg text-xl font-semibold shadow-[0_4px_20px_rgba(204,155,63,0.4)] transition-all hover:bg-[#d4ab5a] hover:-translate-y-1 hover:shadow-[0_6px_25px_rgba(204,155,63,0.5)] group" href="#application">
                Book Your Strategy Call Now
                <iconify-icon className="group-hover:translate-x-1 transition-transform" height="24" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</a>
<p className="mt-4 text-xs text-slate-400 font-medium uppercase tracking-wider">Limited Spots Available</p>
</div>
</section>

    </>
  );
}
