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



        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();

            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal');
            elements.forEach(el => observer.observe(el));
        });
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-[#f5f0e6] rounded-full blur-[120px] mix-blend-multiply opacity-60"></div>
<div className="absolute top-[10%] right-[-10%] w-[60%] h-[60%] bg-[#ccfbf1] rounded-full blur-[100px] mix-blend-multiply opacity-40 animate-drift"></div>
<div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-[#ffedd5] rounded-full blur-[100px] mix-blend-multiply opacity-50 animate-drift" style={{animationDelay: '2s'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-[#e7e5e4]/60 bg-[#fdfbf7]/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tight text-stone-900 flex items-center gap-2" href="#">
                elemento.
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#services">Services</a>
<a className="hover:text-stone-900 transition-colors" href="#signal-engine">Signal Engine</a>
<a className="hover:text-stone-900 transition-colors" href="#timeline">Protocol</a>
<a className="hover:text-stone-900 transition-colors" href="#about">About</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium bg-[#292524] text-[#fdfbf7] px-4 py-2 rounded-lg hover:bg-stone-800 transition-colors shadow-sm shadow-stone-300/50" href="#contact">
                    Book a Call
                </a>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-0 px-6 flex flex-col items-center justify-center">

<div className="absolute inset-0 z-[-1] bg-grid-stone opacity-[0.4] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="max-w-4xl mx-auto text-center reveal active relative">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0ede6] border border-[#e7e5e4] text-teal-800 text-xs font-medium mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
</span>
                CRM CONSULTING + AI
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-stone-900 mb-6 leading-[1.1]">
                We build CRMs that tell your team <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-stone-600 to-stone-500">what to do next.</span>
</h1>
<p className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
                Implementation, optimization, and intelligent automation for teams who've outgrown their CRM setup.
            </p>
<div className="text-xs font-semibold text-stone-400 mb-10 tracking-widest uppercase">
                Salesforce · HubSpot · Attio
            </div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-20">
<button className="w-full sm:w-auto px-8 py-3 bg-[#292524] text-[#fdfbf7] rounded-xl font-medium shadow-xl shadow-stone-900/10 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group">
                    Book a Discovery Call
                    <i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</main>

<div className="relative z-10 w-full flex justify-center py-0 reveal delay-100">
<div className="h-32 w-px bg-stone-200 relative overflow-hidden">
<div className="animate-beam"></div>
</div>
</div>

<section className="pb-16 pt-0 px-6 relative z-10">
<div className="max-w-2xl mx-auto text-center reveal delay-200">

<div className="flex justify-center -mt-3 mb-6">
<div className="w-6 h-6 rounded-full bg-[#fdfbf7] border border-stone-200 flex items-center justify-center relative z-20 shadow-sm">
<div className="w-2 h-2 rounded-full bg-teal-500/50"></div>
</div>
</div>
<div className="p-8 md:p-12 bg-white/60 backdrop-blur-md border border-[#e7e5e4] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500/20 to-transparent opacity-50"></div>
<div className="relative z-10">
<p className="text-lg md:text-xl text-stone-600 leading-relaxed font-light mb-6">
                        Your team logs calls, updates records, sends emails, and runs reports. Hours of work goes into the CRM every day. But when someone asks <span className="font-medium text-stone-800">"who should we be calling right now?"</span> — the answer isn't in there. Not really.
                    </p>
<p className="text-lg md:text-xl text-stone-600 leading-relaxed font-light mb-8">
                        The data exists. Every interaction, every meeting note, every email. The patterns are sitting in plain sight — who's going cold, who's ready to move, who needs a check-in. But nothing in the system connects those dots.
                    </p>
<p className="text-xl md:text-2xl text-stone-900 font-medium tracking-tight flex items-center justify-center gap-2">
                        That's the gap we close.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 border-t border-[#e7e5e4]/50" id="services">
<div className="max-w-6xl mx-auto">
<div className="mb-16 reveal">
<div className="text-xs font-bold text-teal-700 tracking-widest uppercase mb-3">What We Do</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-4">From data entry to decision-making.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[auto]">
<div className="bg-white rounded-2xl border border-[#e7e5e4] p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group reveal">
<div className="absolute top-0 right-0 p-12 bg-[#f0fdfa] rounded-bl-[100px] -mr-10 -mt-10 group-hover:bg-[#ccfbf1] transition-colors"></div>
<div className="inline-block px-2 py-1 bg-stone-100 rounded text-[10px] font-bold text-stone-500 mb-6 border border-stone-200">FOUNDATION</div>
<div className="relative z-10">
<div className="w-12 h-12 bg-[#faf9f6] border border-[#e7e5e4] rounded-xl flex items-center justify-center text-stone-900 shadow-sm mb-4">
<i className="w-6 h-6 text-stone-700" data-lucide="layers"></i>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-2">CRM Implementation &amp; Optimization</h3>
<p className="text-stone-500 text-sm leading-relaxed mb-6">
                            Your CRM should be the system your team opens first every morning — not the one they avoid updating until Friday. We build Salesforce orgs (and HubSpot and Attio environments) that are structured for how your team actually works: clean data models, automation that eliminates repetitive tasks, and workflows that guide people instead of burying them in queues.
                            <br/><br/>
                            Seven years in the Salesforce ecosystem — NPSP, CPQ, Revenue Cloud, custom Apex, Lightning Web Components — means we've seen what breaks at scale and we build to avoid it.
                        </p>
<ul className="space-y-2 text-sm text-stone-600">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-teal-600" data-lucide="check-circle-2"></i>
                                New implementations &amp; platform migrations
                            </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-teal-600" data-lucide="check-circle-2"></i>
                                Data cleanup &amp; architecture redesign
                            </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-teal-600" data-lucide="check-circle-2"></i>
                                Workflow automation &amp; process optimization
                            </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-teal-600" data-lucide="check-circle-2"></i>
                                Custom development (Apex, LWC, API integrations)
                            </li>
</ul>
</div>
</div>
<div className="bg-white rounded-2xl border border-[#e7e5e4] p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden reveal delay-100">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-50 via-transparent to-transparent opacity-50"></div>
<div className="inline-block px-2 py-1 bg-teal-50 rounded text-[10px] font-bold text-teal-700 mb-6 border border-teal-100">INTELLIGENCE LAYER</div>
<div className="relative z-10">
<div className="w-12 h-12 bg-[#faf9f6] border border-[#e7e5e4] rounded-xl flex items-center justify-center text-stone-900 shadow-sm mb-4">
<i className="w-6 h-6 text-stone-700" data-lucide="wand-2"></i>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-2">Intelligent Automation</h3>
<p className="text-stone-500 text-sm leading-relaxed mb-6">
                            This is where your CRM starts working for you instead of the other way around. Most consultants stop at configuration — fields, page layouts, reports. We go further. We build AI layers that analyze your team's logged activity, score engagement patterns, detect relationship risk, and surface the 5 actions your team should take today — out of the 50 they're currently ignoring.
                            <br/><br/>
                            Every implementation we do is architected with this layer in mind. Even if you're not ready for AI today, your data model will be.
                        </p>
<ul className="space-y-2 text-sm text-stone-600">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-teal-600" data-lucide="check-circle-2"></i>
                                AI-powered signal generation &amp; prioritization
                            </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-teal-600" data-lucide="check-circle-2"></i>
                                Sentiment analysis on emails &amp; interactions
                            </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-teal-600" data-lucide="check-circle-2"></i>
                                Automated engagement scoring &amp; risk detection
                            </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-teal-600" data-lucide="check-circle-2"></i>
                                Smart alerts that replace manual task lists
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 border-t border-[#e7e5e4]/50 bg-[#faf9f6]/30">
<div className="max-w-6xl mx-auto">
<div className="mb-16 reveal">
<div className="text-xs font-bold text-teal-700 tracking-widest uppercase mb-3">Who We Work With</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-4">Two kinds of teams. One shared problem.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white rounded-2xl border border-[#e7e5e4] p-8 shadow-sm hover:shadow-md transition-shadow reveal flex flex-col">
<div className="w-12 h-12 bg-[#faf9f6] border border-[#e7e5e4] rounded-xl flex items-center justify-center text-stone-900 shadow-sm mb-6">
<i className="w-6 h-6 text-stone-700" data-lucide="users"></i>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-4 tracking-tight">Nonprofit Advancement Teams</h3>

<p className="text-base font-medium text-stone-800 mb-6 leading-relaxed">
                        You manage major gift prospects, planned giving donors, or alumni relationships on Salesforce NPSP.
                    </p>

<ul className="space-y-3 text-sm text-stone-600 mb-8">
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-teal-600 mt-1 shrink-0" data-lucide="arrow-right"></i>
<span>Your team logs interactions but the system can't answer "who's ready for an ask?"</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-teal-600 mt-1 shrink-0" data-lucide="arrow-right"></i>
<span>Cultivation stages go stale because nobody flags when relationships cool</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-teal-600 mt-1 shrink-0" data-lucide="arrow-right"></i>
<span>Institutional knowledge lives in people's heads, not in the CRM</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-teal-600 mt-1 shrink-0" data-lucide="arrow-right"></i>
<span>Spreadsheets fill the gaps your system should be covering</span>
</li>
</ul>

<p className="mt-auto pt-6 text-sm font-medium text-stone-700 border-t border-stone-100/50">
                        We build the CRM and intelligence layer that makes those questions answerable in seconds.
                    </p>
</div>

<div className="bg-white rounded-2xl border border-[#e7e5e4] p-8 shadow-sm hover:shadow-md transition-shadow reveal delay-100 flex flex-col">
<div className="w-12 h-12 bg-[#faf9f6] border border-[#e7e5e4] rounded-xl flex items-center justify-center text-stone-900 shadow-sm mb-6">
<i className="w-6 h-6 text-stone-700" data-lucide="trending-up"></i>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-4 tracking-tight">GTM Teams at Growth-Stage Companies</h3>

<p className="text-base font-medium text-stone-800 mb-6 leading-relaxed">
                        You're running revenue operations across sales, CS, or account management on Salesforce, HubSpot, or Attio.
                    </p>

<ul className="space-y-3 text-sm text-stone-600 mb-8">
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-teal-600 mt-1 shrink-0" data-lucide="arrow-right"></i>
<span>Reps are drowning in tasks while pipeline data stays unreliable</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-teal-600 mt-1 shrink-0" data-lucide="arrow-right"></i>
<span>Leads go cold because nobody noticed the drop in engagement</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-teal-600 mt-1 shrink-0" data-lucide="arrow-right"></i>
<span>Renewals slip because the health score lives in someone's head</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-teal-600 mt-1 shrink-0" data-lucide="arrow-right"></i>
<span>Your team spends more time on data entry than selling</span>
</li>
</ul>

<p className="mt-auto pt-6 text-sm font-medium text-stone-700 border-t border-stone-100/50">
                        We restructure your CRM and build automation that flags risk, scores engagement, and prioritizes outreach before things fall through the cracks.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 bg-[#faf9f6]/50 border-t border-[#e7e5e4]/50" id="signal-engine">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
<div className="lg:col-span-1 reveal">
<div className="text-xs font-bold text-teal-700 tracking-widest uppercase mb-3">Signal Engine</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-6">Proof, not promises.</h2>
<p className="text-stone-500 text-sm leading-relaxed mb-6">
                        We didn't just tell our clients "your CRM could be smarter" — we built the thing that makes it smarter. Signal Engine is a working AI layer on Salesforce that replaces undifferentiated task queues with prioritized signals. It reads email, meeting notes, and CRM activity, then tells your team exactly who needs attention, why now, and what to do about it.
                    </p>
<p className="text-stone-500 text-sm leading-relaxed mb-6">
                        It's currently in pilot. It exists because we believe a CRM that only records what happened is a CRM that's failing its team.
                    </p>
</div>
<div className="lg:col-span-2 reveal delay-200">

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-stone-200 via-teal-100/50 to-stone-200 rounded-2xl opacity-30 blur-lg transition duration-1000 group-hover:opacity-50"></div>
<div className="relative bg-[#fdfbf7] border border-[#e7e5e4] rounded-xl shadow-2xl shadow-stone-200/40 overflow-hidden">
<div className="h-10 border-b border-[#e7e5e4] flex items-center px-4 gap-2 bg-[#f5f5f0]/50">
<div className="w-3 h-3 rounded-full bg-[#e7e5e4]"></div>
<div className="w-3 h-3 rounded-full bg-[#e7e5e4]"></div>
<div className="w-3 h-3 rounded-full bg-[#e7e5e4]"></div>
<div className="flex-1 text-center text-[10px] text-stone-400 font-medium tracking-wide">SIGNAL ENGINE — PILOT</div>
</div>
<div className="flex flex-col md:flex-row h-[500px] md:h-[450px]">

<div className="w-full md:w-56 border-r border-[#e7e5e4] bg-[#faf9f6] p-4 hidden md:flex flex-col gap-1">
<div className="text-xs font-semibold text-stone-400 mb-2 px-2 tracking-tight uppercase">Views</div>
<div className="flex items-center gap-3 px-3 py-2 bg-white border border-[#e7e5e4] shadow-sm rounded-lg text-sm font-medium text-stone-800">
<i className="w-4 h-4 text-teal-700" data-lucide="bell"></i>
                                        Priority Signals
                                    </div>
<div className="flex items-center gap-3 px-3 py-2 text-stone-500 hover:bg-[#f0ede6] rounded-lg text-sm transition-colors">
<i className="w-4 h-4" data-lucide="users"></i>
                                        Portfolios
                                    </div>
<div className="mt-auto">
<div className="p-3 bg-[#f0ede6] rounded-lg border border-[#e7e5e4]/50">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></div>
<span className="text-xs font-medium text-stone-600">Engine Online</span>
</div>
</div>
</div>
</div>

<div className="flex-1 p-6 bg-white relative overflow-y-auto">
<div className="flex justify-between items-end mb-6">
<div>
<h3 className="text-lg font-medium text-stone-900 tracking-tight">Today's Signals</h3>
<p className="text-xs text-stone-500 mt-1">3 prioritized actions detected.</p>
</div>
</div>
<div className="space-y-3">

<div className="p-4 rounded-lg border border-teal-200 bg-[#f0fdfa]/50 hover:bg-[#f0fdfa] transition-colors group cursor-pointer">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-700 uppercase tracking-wide">Going Quiet</span>
<span className="text-sm font-semibold text-stone-900">David Chen</span>
</div>
<span className="text-xs text-stone-400">2h ago</span>
</div>
<p className="text-sm text-stone-600 mb-0">127 days since last engagement. Relationship risk increasing. Draft outreach ready.</p>
</div>

<div className="p-4 rounded-lg border border-[#e7e5e4] bg-white hover:border-teal-200 hover:bg-[#f0fdfa]/30 transition-colors group cursor-pointer">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700 uppercase tracking-wide">Ready to Move</span>
<span className="text-sm font-semibold text-stone-900">Michael Torres</span>
</div>
<span className="text-xs text-stone-400">4h ago</span>
</div>
<p className="text-sm text-stone-600 mb-0">Engagement and capacity aligned. Sentiment trending positive for 3 months. Time to make the ask.</p>
</div>

<div className="p-4 rounded-lg border border-[#e7e5e4] bg-white hover:border-teal-200 hover:bg-[#f0fdfa]/30 transition-colors group cursor-pointer">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-700 uppercase tracking-wide">Relationship Cooling</span>
<span className="text-sm font-semibold text-stone-900">Rebecca Liu</span>
</div>
<span className="text-xs text-stone-400">6h ago</span>
</div>
<p className="text-sm text-stone-600 mb-0">Response time doubled since October. Sentiment dropped from 8 to 5. Recommend low-pressure check-in.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 border-t border-[#e7e5e4]/50 overflow-hidden bg-white/40 backdrop-blur-sm" id="timeline">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-24 reveal">
<div className="text-xs font-bold text-teal-700 tracking-widest uppercase mb-3">Deployment Protocol</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-stone-900">How we engage</h2>
</div>

<div className="relative px-4 md:px-0">

<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-stone-200 transform md:-translate-x-1/2 overflow-hidden h-full">
<div className="animate-beam"></div>
</div>
<div className="space-y-16 relative">

<div className="relative flex flex-col md:flex-row items-center w-full reveal">

<div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full border-[3px] border-teal-500 bg-white z-30 transform -translate-x-[9px] md:-translate-x-1/2 shadow-[0_0_0_4px_#ffffff]"></div>

<div className="pl-16 md:pl-0 md:w-1/2 md:pr-16 md:text-right w-full">
<div className="bg-white p-8 rounded-2xl border border-teal-100/60 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)] hover:border-teal-300 transition-all duration-300 group">
<div className="flex flex-row md:flex-row-reverse items-center justify-start md:justify-start gap-3 mb-4">
<span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold bg-stone-100 text-stone-500 uppercase border border-stone-200 tracking-wide">Weeks 1-2</span>
<i className="w-5 h-5 text-teal-600" data-lucide="scan-line"></i>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3 tracking-tight group-hover:text-teal-800 transition-colors">You stop guessing what's broken.</h3>
<p className="text-sm text-stone-500 leading-relaxed font-normal">
                                    We audit your CRM, interview your team, and map every gap between what the system does and what your people actually need. We look at your data model, your workflows, your adoption patterns, and where deals or relationships are dying. You get a technical blueprint and a prioritized fix list — before we write a single line of code.
                                </p>
</div>
</div>

<div className="hidden md:block md:w-1/2"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center w-full reveal">

<div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full border-[3px] border-stone-200 bg-white z-30 transform -translate-x-[9px] md:-translate-x-1/2 shadow-[0_0_0_4px_#ffffff]"></div>

<div className="hidden md:block md:w-1/2"></div>

<div className="pl-16 md:pl-16 md:w-1/2 w-full text-left">
<div className="bg-white p-8 rounded-2xl border border-teal-100/60 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)] hover:border-teal-300 transition-all duration-300 group">
<div className="flex items-center gap-3 mb-4">
<i className="w-5 h-5 text-teal-600" data-lucide="database"></i>
<span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold bg-stone-100 text-stone-500 uppercase border border-stone-200 tracking-wide">Weeks 3-5</span>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3 tracking-tight group-hover:text-teal-800 transition-colors">Your data starts making sense.</h3>
<p className="text-sm text-stone-500 leading-relaxed font-normal">
                                    We rebuild the core. Clean data models, migrated records, proper permissions, automation that eliminates the repetitive work your team hates. The CRM goes from a cluttered system people resent updating to a structured tool they can actually navigate. This is where most implementations stop. We're just getting started.
                                </p>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center w-full reveal">

<div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full border-[3px] border-stone-200 bg-white z-30 transform -translate-x-[9px] md:-translate-x-1/2 shadow-[0_0_0_4px_#ffffff]"></div>

<div className="pl-16 md:pl-0 md:w-1/2 md:pr-16 md:text-right w-full">
<div className="bg-white p-8 rounded-2xl border border-teal-100/60 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)] hover:border-teal-300 transition-all duration-300 group">
<div className="flex flex-row md:flex-row-reverse items-center justify-start md:justify-start gap-3 mb-4">
<span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold bg-stone-100 text-stone-500 uppercase border border-stone-200 tracking-wide">Weeks 6-7</span>
<i className="w-5 h-5 text-teal-600" data-lucide="cpu"></i>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3 tracking-tight group-hover:text-teal-800 transition-colors">Your CRM starts talking back.</h3>
<p className="text-sm text-stone-500 leading-relaxed font-normal">
                                    We activate the intelligence layer — automation rules, AI triggers, engagement scoring, and signal dashboards that tell your team what to do next. Your team stops scrolling through 47 identical tasks. Your account managers stop guessing who's at risk. The system surfaces what matters and hides what doesn't.
                                </p>
</div>
</div>

<div className="hidden md:block md:w-1/2"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center w-full reveal">

<div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full border-[3px] border-stone-200 bg-white z-30 transform -translate-x-[9px] md:-translate-x-1/2 shadow-[0_0_0_4px_#ffffff]"></div>

<div className="hidden md:block md:w-1/2"></div>

<div className="pl-16 md:pl-16 md:w-1/2 w-full text-left">
<div className="bg-white p-8 rounded-2xl border border-teal-100/60 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)] hover:border-teal-300 transition-all duration-300 group">
<div className="flex items-center gap-3 mb-4">
<i className="w-5 h-5 text-teal-600" data-lucide="flag"></i>
<span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold bg-stone-100 text-stone-500 uppercase border border-stone-200 tracking-wide">Week 8</span>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3 tracking-tight group-hover:text-teal-800 transition-colors">Your team runs it without us.</h3>
<p className="text-sm text-stone-500 leading-relaxed font-normal">
                                    Live training sessions, documentation, and full handover. We don't disappear after deployment — we stay until your team can operate, troubleshoot, and evolve the system on their own. The goal is independence, not dependency.
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 border-t border-[#e7e5e4]/50 bg-[#faf9f6]/50 relative z-10 reveal">
<div className="max-w-4xl mx-auto">
<div className="grid grid-cols-3 gap-8">
<div className="text-center">
<div className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-1">7+</div>
<div className="text-xs text-stone-500 font-medium uppercase tracking-wide">Years in Salesforce</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-1">3</div>
<div className="text-xs text-stone-500 font-medium uppercase tracking-wide">CRM Platforms</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-1">1</div>
<div className="text-xs text-stone-500 font-medium uppercase tracking-wide">AI Product in Pilot</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 px-6 overflow-hidden reveal" id="about">
<div className="relative z-10 max-w-3xl mx-auto">
<div className="text-xs font-bold text-teal-700/80 tracking-widest uppercase mb-6">About</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-800 mb-8">Your CRM becomes a decision-making tool, not a reporting tool.</h2>
<div className="space-y-6 text-lg text-stone-500 font-light leading-relaxed">
<p>
                    Most CRM implementations end at dashboards. The consultant configures your fields, builds your reports, trains your team on where to click, and leaves. Six months later, adoption is dropping, data quality is degrading, and your team is back to spreadsheets and gut instinct.
                </p>
<p>
                    We build differently. Every system we deliver is architected so that AI and automation can sit on top of it — clean data models, structured activity capture, interaction logging that's ready for sentiment analysis and engagement scoring. The implementation isn't the end. It's the foundation.
                </p>
<p>
                    Signal Engine is the product that came from this philosophy. It's a working AI layer on Salesforce that turns logged activity into prioritized action. It exists because we believe your CRM should tell your team what to do — not just record what they did.
                </p>
<p>
                    We work across Salesforce, HubSpot, and Attio because the right platform depends on your team, your budget, and your workflow — not on which vendor pays the highest referral fee.
                </p>
</div>
<div className="mt-16 p-8 bg-white/40 backdrop-blur-md border border-stone-200/50 rounded-2xl shadow-sm">
<h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-6">This works best when...</h4>
<ul className="space-y-3 text-sm text-stone-500 font-light">
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-teal-600 mt-0.5" data-lucide="check-circle-2"></i>
<span>Your team is already logging activity — even inconsistently. We need something to work with.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-teal-600 mt-0.5" data-lucide="check-circle-2"></i>
<span>Someone on your leadership team owns the outcome, not just the budget.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-teal-600 mt-0.5" data-lucide="check-circle-2"></i>
<span>You're willing to change a workflow that isn't working, not just add a tool on top of it.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-teal-600 mt-0.5" data-lucide="check-circle-2"></i>
<span>You actually want to act on what the data tells you.</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-28 px-6 relative z-10 border-t border-[#e7e5e4]/50 overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[80%] bg-[#fdfbf7] rounded-full blur-[80px]"></div>
<div className="absolute top-[20%] right-[-10%] w-[60%] h-[80%] bg-[#ccfbf1] rounded-full blur-[120px] mix-blend-multiply opacity-40"></div>
</div>
<div className="max-w-6xl mx-auto">
<div className="mb-16 reveal">
<div className="text-xs font-bold text-teal-700 tracking-widest uppercase mb-3">Common Questions</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-stone-900">Before you book a call.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal delay-100">

<div className="bg-white rounded-2xl p-8 md:p-10 border border-[#e5e5e5] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg hover:shadow-stone-200/40 transition-all duration-300 h-full flex flex-col justify-start">
<h3 className="text-lg font-semibold text-stone-900 mb-4 leading-tight">What platforms do you work with?</h3>
<p className="text-base text-stone-500 leading-relaxed">
                        Salesforce is our primary platform — we've spent 7+ years in the ecosystem across NPSP, CPQ, Revenue Cloud, and custom development. We also implement HubSpot and Attio when they're the better fit for a team's size, budget, and workflow. We'll tell you which one you actually need.
                    </p>
</div>

<div className="bg-white rounded-2xl p-8 md:p-10 border border-[#e5e5e5] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg hover:shadow-stone-200/40 transition-all duration-300 h-full flex flex-col justify-start">
<h3 className="text-lg font-semibold text-stone-900 mb-4 leading-tight">How long does a typical engagement take?</h3>
<p className="text-base text-stone-500 leading-relaxed">
                        Most implementations run 6–8 weeks from kickoff to handover. That includes a diagnostic phase, the core build, intelligence layer activation, and training. Smaller optimizations can be faster. We scope everything before we start so there are no surprises.
                    </p>
</div>

<div className="bg-white rounded-2xl p-8 md:p-10 border border-[#e5e5e5] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg hover:shadow-stone-200/40 transition-all duration-300 h-full flex flex-col justify-start">
<h3 className="text-lg font-semibold text-stone-900 mb-4 leading-tight">Do I need to be ready for AI right now?</h3>
<p className="text-base text-stone-500 leading-relaxed">
                        No. Every CRM we build is architected so that AI and automation can sit on top of it when you're ready — clean data models, structured activity logging, proper interaction capture. You get a CRM that works today and is ready for intelligence tomorrow.
                    </p>
</div>

<div className="bg-white rounded-2xl p-8 md:p-10 border border-[#e5e5e5] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg hover:shadow-stone-200/40 transition-all duration-300 h-full flex flex-col justify-start">
<h3 className="text-lg font-semibold text-stone-900 mb-4 leading-tight">What does a discovery call look like?</h3>
<p className="text-base text-stone-500 leading-relaxed">
                        30 minutes. No pitch deck, no demo, no pressure. We ask about your current CRM setup, what's working, what's not, and what your team actually needs. If we can help, we'll tell you how. If we can't, we'll tell you that too.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10 border-t border-[#e7e5e4]/50 reveal" id="contact">

<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 text-stone-900">Let's figure out what your CRM <br/>should actually be doing.</h2>
<p className="text-stone-500 text-lg mb-12 max-w-xl mx-auto font-light leading-relaxed">
                30-minute discovery call. No pitch deck. Just an honest conversation about what's working, what's broken, and whether we can help.
            </p>
<div className="flex flex-col items-center justify-center gap-6">
<button className="w-full sm:w-auto px-8 py-4 bg-[#292524] text-[#fdfbf7] rounded-xl font-medium shadow-xl shadow-stone-900/5 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group">
                    Book a Discovery Call
                    <i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</button>
<a className="text-xs text-stone-400 font-medium hover:text-stone-600 transition-colors" href="mailto:hello@elmnto.com">
                    Or email us at hello@elmnto.com
                </a>
</div>
</div>
</section>

<footer className="relative z-10 pt-0 pb-10 border-t border-[#e7e5e4]/50">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between pt-8">
<div className="text-stone-400 font-semibold tracking-tight text-lg mb-4 md:mb-0">elemento.</div>
<div className="flex gap-8 text-sm font-medium text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#services">Services</a>
<a className="hover:text-stone-900 transition-colors" href="#about">About</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
