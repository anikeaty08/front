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
    


      document.addEventListener("DOMContentLoaded",function(){const observer=new IntersectionObserver((entries,obs)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.remove("opacity-0","translate-y-8");obs.unobserve(entry.target)}})},{threshold:0.1});document.querySelectorAll(".reveal").forEach(el=>observer.observe(el))});
    
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
      

<nav className="fixed w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5 supports-[backdrop-filter]:bg-[#020617]/60">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white group-hover:rotate-3 transition-transform shadow-[0_0_15px_rgba(37,99,235,0.5)]">
<i className="w-5 h-5" data-lucide="activity"></i>
</div>
<span className="text-white font-semibold tracking-tight text-xl">
            saasfeedback.ai
          </span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#features">
            Product
          </a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#how-it-works">
            How it works
          </a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#pricing">
            Pricing
          </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">
            Sign in
          </a>
<a className="bg-white hover:bg-slate-100 text-slate-900 px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-white/10" href="#">
            Get Started
          </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-[#020617]">

<div className="absolute inset-0 pointer-events-none">

<div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-blue-500/20 via-indigo-500/5 to-transparent blur-[80px] rounded-full animate-beam"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020617] to-[#020617]"></div>

<div className="absolute top-20 left-[20%] w-1 h-1 bg-blue-400 rounded-full animate-twinkle" style={{animationDelay: '0s'}}></div>
<div className="absolute top-40 right-[15%] w-1.5 h-1.5 bg-indigo-300 rounded-full animate-twinkle" style={{animationDelay: '1s'}}></div>
<div className="absolute top-32 left-[35%] w-0.5 h-0.5 bg-white rounded-full animate-twinkle" style={{animationDelay: '2s'}}></div>
<div className="absolute bottom-40 right-[25%] w-1 h-1 bg-cyan-400 rounded-full animate-twinkle" style={{animationDelay: '1.5s'}}></div>
<div className="absolute top-1/4 left-[10%] w-1 h-1 bg-blue-500 rounded-full animate-twinkle" style={{animationDelay: '0.5s'}}></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium mb-8 backdrop-blur-md shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] hover:bg-blue-900/40 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
          Now available for Early Access
        </div>

<h1 className="text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-8 max-w-4xl mx-auto drop-shadow-2xl reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
          Stop guessing why users
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
            churn.
          </span>
</h1>
<p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto reveal opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100">
          The warm-call feedback engine for PLG SaaS. We call users after key
          product events to uncover revenue signals. No sales team, no surveys.
        </p>

<div className="flex flex-col sm:flex-row justify-center gap-4 mb-20 reveal opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200">
<button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-medium transition-all shadow-[0_0_30px_-10px_rgba(37,99,235,0.6)] hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.8)] hover:-translate-y-1">
            Start Free Trial
            <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-full font-medium transition-all hover:-translate-y-1 backdrop-blur-sm">
<i className="w-5 h-5 text-slate-400" data-lucide="play-circle"></i>
            See Demo
          </button>
</div>

<div className="relative mx-auto max-w-4xl animate-float reveal opacity-0 transition-opacity duration-1000 delay-300">

<div className="absolute -inset-1 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-3xl blur-2xl opacity-20"></div>

<div className="relative bg-[#0B1120]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl ring-1 ring-white/10">
<div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

<div className="bg-[#0f172a] rounded-xl overflow-hidden border border-white/5 relative">

<div className="h-10 bg-[#1e293b]/50 border-b border-white/5 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
</div>
<div className="mx-auto w-1/3 h-5 bg-[#1e293b] rounded-full"></div>
</div>

<div className="p-8 md:p-12 flex flex-col items-center">

<div className="w-full max-w-md bg-[#1e293b]/50 border border-white/10 rounded-2xl p-6 relative">

<div className="absolute -right-12 -top-6 bg-white p-3 rounded-xl shadow-xl shadow-black/20 border border-slate-100 animate-bounce hidden md:block" style={{animationDuration: '3s'}}>
<div className="flex items-center gap-3">
<div className="bg-green-100 p-1.5 rounded-lg text-green-600">
<i className="w-4 h-4" data-lucide="banknote"></i>
</div>
<div>
<p className="text-[10px] text-slate-500 font-medium leading-none mb-1">
                          Revenue Signal
                        </p>
<p className="text-xs font-bold text-slate-900 leading-none">
                          $2,400 Opportunity
                        </p>
</div>
</div>
</div>

<div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center border border-white/10 shadow-lg shadow-blue-500/20">
<span className="text-sm font-bold text-white">ES</span>
</div>
<div className="text-left">
<h3 className="text-base font-semibold text-white leading-tight">
                          Emilia Smith
                        </h3>
<p className="text-xs text-slate-400">
                          Churned • 2 days ago
                        </p>
</div>
</div>
<div className="px-3 py-1 bg-red-500/10 text-red-400 text-xs font-medium rounded-full border border-red-500/20">
                      High Risk
                    </div>
</div>

<div className="bg-[#020617] rounded-xl p-4 border border-white/5 shadow-inner mb-6">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                        AI Interview
                      </span>
<span className="text-xs font-medium text-slate-400">
                        01:42
                      </span>
</div>
<div className="flex items-center gap-1 h-8 justify-center">
<div className="w-1 h-3 bg-blue-500 rounded-full animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="w-1 h-5 bg-blue-500 rounded-full animate-[pulse_1.2s_ease-in-out_infinite]"></div>
<div className="w-1 h-8 bg-blue-400 rounded-full animate-[pulse_0.8s_ease-in-out_infinite]"></div>
<div className="w-1 h-12 bg-blue-400 rounded-full animate-[pulse_1.5s_ease-in-out_infinite]"></div>
<div className="w-1 h-6 bg-blue-500 rounded-full animate-[pulse_1.1s_ease-in-out_infinite]"></div>
<div className="w-1 h-4 bg-blue-600 rounded-full animate-[pulse_0.9s_ease-in-out_infinite]"></div>
<div className="w-1 h-8 bg-blue-400 rounded-full animate-[pulse_1.3s_ease-in-out_infinite]"></div>
<div className="w-1 h-10 bg-blue-400 rounded-full animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="w-1 h-5 bg-blue-500 rounded-full animate-[pulse_1.4s_ease-in-out_infinite]"></div>
<div className="w-1 h-3 bg-blue-600 rounded-full animate-[pulse_1.1s_ease-in-out_infinite]"></div>
</div>
</div>

<div className="flex items-start gap-3">
<div className="mt-1 min-w-[24px]">
<i className="w-5 h-5 text-indigo-400 fill-indigo-400/20" data-lucide="sparkles"></i>
</div>
<div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-3 w-full text-left">
<p className="text-sm text-slate-300 leading-relaxed">
<span className="font-semibold text-indigo-300">
                          AI Insight:
                        </span>
                        User liked the interface but found reporting
                        insufficient. Mentioned competitor
                        <span className="text-white underline decoration-indigo-500/50">
                          DataFlow
                        </span>
                        .
                      </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-20 border-t border-white/5 pt-10">
<p className="text-sm font-medium text-slate-500 mb-8 tracking-wide uppercase">
            Trusted by forward-thinking teams
          </p>
<div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 text-slate-500 hover:text-slate-400 transition-colors duration-500">
<svg className="h-8 w-auto" fill="currentColor" viewbox="0 0 100 30">
<path d="M10,15 L20,5 L30,15 L20,25 Z M40,5 H50 V25 H40 Z M60,5 H90 V10 H65 V12 H85 V17 H65 V25 H60 Z"></path>
</svg>
<svg className="h-7 w-auto" fill="currentColor" viewbox="0 0 100 30">
<circle cx="15" cy="15" r="10"></circle>
<rect height="20" width="20" x="35" y="5"></rect>
<rect height="20" width="20" x="65" y="5"></rect>
</svg>
<svg className="h-8 w-auto" fill="currentColor" viewbox="0 0 100 30">
<path d="M10,25 L20,5 L30,25 M50,5 L50,25 M70,5 L90,5 M80,5 L80,25" stroke="currentColor" strokeWidth="3"></path>
</svg>
<svg className="h-6 w-auto" fill="currentColor" viewbox="0 0 100 30">
<rect height="20" rx="5" width="20" x="10" y="5"></rect>
<circle cx="50" cy="15" r="10"></circle>
<path d="M80,5 L90,25 L100,5"></path>
</svg>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
</section>

<section className="py-24 bg-white relative z-10" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-3xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-6 reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
            Intelligence without the headcount.
          </h2>
<p className="text-xl text-slate-500 reveal opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100">
            Scale your user research from 5 calls a month to 500. We automate
            the entire feedback loop so you can focus on shipping.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="md:col-span-2 bg-slate-50 rounded-2xl p-8 border border-slate-200 overflow-hidden relative group hover:border-blue-200 transition-colors reveal opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-64 h-64 text-blue-600" data-lucide="phone-call"></i>
</div>
<div className="relative z-10">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
<i className="w-6 h-6 text-blue-600" data-lucide="phone"></i>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Autonomous Outreach
              </h3>
<p className="text-slate-500 max-w-md">
                Our AI agents trigger calls instantly when a user churns or
                drops off. Polite, professional, and persistent enough to get
                the truth.
              </p>
<div className="mt-8 p-4 bg-white rounded-lg border border-slate-200 shadow-sm inline-block">
<div className="flex items-center gap-3 text-sm">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
<span className="text-slate-600">
                    Calling user +1 (555) 019-2834...
                  </span>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 relative group hover:border-indigo-200 transition-colors reveal opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
<i className="w-6 h-6 text-indigo-600" data-lucide="bar-chart-3"></i>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Revenue Signals
            </h3>
<p className="text-slate-500 mb-8">
              Identify high-value leads hiding in your churned user list.
            </p>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-lg shadow-sm">
<span className="text-sm text-slate-600">Price Objection</span>
<span className="text-xs bg-slate-100 px-2 py-0.5 rounded text-slate-500">
                  42%
                </span>
</div>
<div className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-lg shadow-sm">
<span className="text-sm text-slate-600">Missing Feature</span>
<span className="text-xs bg-slate-100 px-2 py-0.5 rounded text-slate-500">
                  28%
                </span>
</div>
<div className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-lg shadow-sm">
<span className="text-sm text-slate-600">Competitor</span>
<span className="text-xs bg-slate-100 px-2 py-0.5 rounded text-slate-500">
                  15%
                </span>
</div>
</div>
</div>

<div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-purple-200 transition-colors reveal opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
<i className="w-6 h-6 text-purple-600" data-lucide="brain-circuit"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">
              AI Synthesis
            </h3>
<p className="text-slate-500">
              We turn hours of audio into concise summaries, sentiment analysis,
              and actionable feature requests.
            </p>
</div>

<div className="md:col-span-2 bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col md:flex-row items-center gap-8 hover:border-slate-300 transition-colors reveal opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300">
<div className="flex-1">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
<i className="w-6 h-6 text-slate-700" data-lucide="plug"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">
                Seamless Integration
              </h3>
<p className="text-slate-500">
                Connects with your stack in minutes. Push insights directly to
                Slack, Linear, or HubSpot.
              </p>
</div>
<div className="flex gap-4 opacity-75">

<div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center">
<i className="w-8 h-8 text-slate-800" data-lucide="slack"></i>
</div>
<div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center">
<i className="w-8 h-8 text-orange-500" data-lucide="database"></i>
</div>
<div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center">
<i className="w-8 h-8 text-blue-500" data-lucide="trello"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12 text-center relative">

<div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-slate-200 via-blue-200 to-slate-200 z-0"></div>
<div className="relative z-10 reveal opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100">
<div className="w-16 h-16 mx-auto bg-white border-2 border-slate-100 text-slate-900 rounded-full flex items-center justify-center text-xl font-semibold mb-6 shadow-sm">
              1
            </div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">
              Connect Data
            </h3>
<p className="text-slate-500 text-base">
              Sync your segment events or CRM triggers to define who to call.
            </p>
</div>
<div className="relative z-10 reveal opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200">
<div className="w-16 h-16 mx-auto bg-white border-2 border-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-semibold mb-6 shadow-lg shadow-blue-100">
              2
            </div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">
              AI Calls User
            </h3>
<p className="text-slate-500 text-base">
              Our voice AI conducts a natural, empathetic interview.
            </p>
</div>
<div className="relative z-10 reveal opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300">
<div className="w-16 h-16 mx-auto bg-white border-2 border-slate-100 text-slate-900 rounded-full flex items-center justify-center text-xl font-semibold mb-6 shadow-sm">
              3
            </div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">
              Get Insights
            </h3>
<p className="text-slate-500 text-base">
              Receive structured data, recordings, and revenue alerts instantly.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight text-center mb-12 reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
          Frequently Asked Questions
        </h2>
<div className="space-y-4 reveal opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100">
<details className="group bg-white rounded-xl border border-slate-200 open:border-blue-200 transition-all">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-slate-900 list-none">
<span>Does the AI sound robotic?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 leading-relaxed">
              Not at all. We use state-of-the-art voice synthesis with ultra-low
              latency. Most users believe they are speaking with a human support
              specialist.
            </div>
</details>
<details className="group bg-white rounded-xl border border-slate-200 open:border-blue-200 transition-all">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-slate-900 list-none">
<span>Can I customize the script?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 leading-relaxed">
              Yes. You set the goal of the call (e.g., "Find out why they
              cancelled"), and the AI adapts the conversation dynamically based
              on user responses.
            </div>
</details>
<details className="group bg-white rounded-xl border border-slate-200 open:border-blue-200 transition-all">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-slate-900 list-none">
<span>Is it compliant with regulations?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 leading-relaxed">
              We are fully GDPR and CCPA compliant. The AI identifies itself as
              a virtual assistant at the start of every call.
            </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-[#020617] text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-8">
          Ready to uncover hidden revenue?
        </h2>
<p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          Stop letting users slip away silently. Start getting the feedback you
          need to build a product people pay for.
        </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg shadow-blue-900/50 text-lg hover:-translate-y-0.5">
            Get Started for Free
          </button>
<button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full font-medium transition-all text-lg">
            Book a Demo
          </button>
</div>
<p className="mt-6 text-sm text-slate-500">
          No credit card required · 14-day free trial
        </p>
</div>
</section>

<footer className="bg-white py-12 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-blue-600" data-lucide="activity"></i>
<span className="text-slate-900 font-semibold tracking-tight">
            saasfeedback.ai
          </span>
</div>
<div className="text-slate-500 text-sm">
          © 2024 saasfeedback.ai Inc. All rights reserved.
        </div>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-slate-600" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a className="text-slate-400 hover:text-slate-600" href="#">
<i className="w-5 h-5" data-lucide="github"></i>
</a>
<a className="text-slate-400 hover:text-slate-600" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
</div>
</div>
</footer>



    </>
  );
}
