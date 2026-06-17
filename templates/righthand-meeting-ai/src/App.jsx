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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-3 cursor-pointer group select-none">
<div className="relative text-gray-900">

<img alt="Righthand Logo" className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<span className="text-xl font-semibold tracking-tight text-gray-900 font-manrope">righthand</span>
</div>

<div className="hidden md:flex items-center gap-8 text-[14px] font-medium text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#">How It Works</a>
<a className="hover:text-gray-900 transition-colors" href="#">Features</a>
<a className="hover:text-gray-900 transition-colors" href="#">Trust &amp; Safety</a>
<a className="hover:text-gray-900 transition-colors" href="#">Integrations</a>
<a className="hover:text-gray-900 transition-colors" href="#">About</a>
<a className="hover:text-gray-900 transition-colors" href="#">FAQ</a>
</div>

<div className="flex items-center gap-4">
<a className="text-[14px] font-medium text-gray-900 hover:text-gray-600 transition-colors px-2" href="#">Log in</a>
<button className="bg-black text-white px-5 py-2.5 rounded-full text-[14px] font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-black/5">
                    Get Early Access
                </button>
</div>
</div>
</nav>

<main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="animate-fade-up">
<h1 className="text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight leading-[1.1] mb-6">
                    Your righthand shows up when you <span className="text-gray-400">can't.</span>
</h1>
<p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-lg font-normal">
                    Your AI meeting twin that joins calls for you, speaks your update, answers factual questions, and sends a clean recap.
                </p>
<div className="flex flex-wrap items-center gap-4 mb-8">
<button className="bg-black text-white px-8 py-3.5 rounded-full text-[15px] font-medium hover:bg-gray-800 transition-transform hover:-translate-y-0.5 shadow-xl shadow-black/10">
                        Get Early Access
                    </button>
<button className="bg-white text-gray-900 border border-gray-200 px-8 py-3.5 rounded-full text-[15px] font-medium hover:bg-gray-50 transition-colors">
                        See How It Works
                    </button>
</div>
<div className="flex items-center gap-2 text-sm text-gray-500">
<div className="w-2 h-2 rounded-full border border-gray-400"></div>
                    Always disclosed. Never impersonates.
                </div>
</div>

<div className="animate-fade-up delay-100 relative">

<div className="bg-white rounded-2xl shadow-2xl shadow-gray-200/50 p-3 border border-gray-100 relative z-10">

<div className="grid grid-cols-2 gap-2 mb-3">

<div className="aspect-video bg-gray-100 rounded-lg relative overflow-hidden flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-gray-200"></div>
<div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-white font-medium">Sarah (Product)</div>
</div>

<div className="aspect-video bg-[#0a0a0c] rounded-lg relative overflow-hidden flex items-center justify-center border border-gray-800">

<div className="relative w-24 h-24 flex items-center justify-center">
<div className="absolute inset-0 border border-teal-500/30 rounded-full animate-[pulse-soft_2s_infinite]"></div>
<div className="w-2 h-2 bg-teal-400 rounded-full shadow-[0_0_15px_rgba(45,212,191,0.6)]"></div>
</div>
<div className="absolute bottom-2 left-2 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-white font-medium">
<div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div>
                                Anoop's righthand (AI Assistant)
                            </div>
</div>

<div className="aspect-video bg-gray-100 rounded-lg relative overflow-hidden flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-gray-200"></div>
<div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-white font-medium">David (Eng)</div>
</div>

<div className="aspect-video bg-gray-100 rounded-lg relative overflow-hidden flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-gray-200"></div>
<div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-white font-medium">Maria (Design)</div>
</div>
</div>

<div className="h-12 border-t border-gray-100 flex items-center justify-center gap-4">
<div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-100 cursor-pointer">
<i className="w-4 h-4 text-gray-600" data-lucide="mic"></i>
</div>
<div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-100 cursor-pointer">
<i className="w-4 h-4 text-gray-600" data-lucide="video"></i>
</div>
<div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 cursor-pointer shadow-lg shadow-red-500/20">
<i className="w-4 h-4" data-lucide="phone-off"></i>
</div>
</div>
</div>

<div className="absolute -inset-4 bg-gradient-to-tr from-teal-50 to-purple-50 rounded-3xl -z-10 blur-2xl opacity-60"></div>
</div>
</div>
</main>

<section className="px-6 max-w-7xl mx-auto mb-24">
<div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12 lg:p-20 overflow-hidden relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

<div>
<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight leading-tight mb-8">
                        The world's first AI meeting twin.
                    </h2>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
<div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
</div>
<span className="text-gray-500 text-lg">Not just a notetaker</span>
</li>
<li className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
<div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
</div>
<span className="text-gray-500 text-lg">Not just a transcript tool</span>
</li>
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
<i className="w-3.5 h-3.5 text-teal-600 stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-gray-900 font-medium text-lg">A presence partner that represents you</span>
</li>
</ul>
</div>

<div className="relative h-64 lg:h-80 flex items-center justify-center">

<div className="absolute top-0 right-10 w-64 h-40 bg-white rounded-xl shadow-lg border border-gray-100 transform rotate-6 opacity-60"></div>

<div className="absolute top-4 right-20 w-72 h-44 bg-white rounded-xl shadow-xl border border-gray-100 transform -rotate-3 z-10">
<div className="p-4 border-b border-gray-50 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-gray-200"></div>
<div className="w-20 h-2 bg-gray-100 rounded-full"></div>
</div>
</div>

<div className="absolute top-12 right-28 w-80 h-48 bg-white rounded-xl shadow-2xl border border-gray-100 transform -rotate-6 z-20 p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-full bg-black flex items-center justify-center relative">
<div className="absolute inset-0 rounded-full border border-teal-500/50 animate-ping opacity-20"></div>
<div className="w-2 h-2 bg-teal-400 rounded-full"></div>
</div>
<div className="px-2 py-1 bg-teal-50 text-teal-700 text-[10px] font-semibold rounded uppercase tracking-wide">Covered by righthand</div>
</div>
<div className="space-y-2">
<div className="w-full h-2 bg-gray-100 rounded-full"></div>
<div className="w-2/3 h-2 bg-gray-100 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 max-w-7xl mx-auto mb-32">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-gray-300 transition-colors">
<div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-900 mb-6">
<i className="w-5 h-5" data-lucide="calendar"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-4">Prepare in seconds</h3>
<ul className="space-y-3">
<li className="flex items-start gap-2.5 text-sm text-gray-500">
<span className="w-1 h-1 rounded-full bg-gray-300 mt-2"></span>
                        Connect calendar
                    </li>
<li className="flex items-start gap-2.5 text-sm text-gray-500">
<span className="w-1 h-1 rounded-full bg-gray-300 mt-2"></span>
                        Add text or voice update
                    </li>
<li className="flex items-start gap-2.5 text-sm text-gray-500">
<span className="w-1 h-1 rounded-full bg-gray-300 mt-2"></span>
                        Attach docs or slides
                    </li>
</ul>
</div>

<div className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-gray-300 transition-colors">
<div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-900 mb-6">
<i className="w-5 h-5" data-lucide="video"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-4">Your righthand joins</h3>
<ul className="space-y-3">
<li className="flex items-start gap-2.5 text-sm text-gray-500">
<span className="w-1 h-1 rounded-full bg-gray-300 mt-2"></span>
                        Visible as &lt;Name&gt;'s righthand
                    </li>
<li className="flex items-start gap-2.5 text-sm text-gray-500">
<span className="w-1 h-1 rounded-full bg-gray-300 mt-2"></span>
                        Delivers update
                    </li>
<li className="flex items-start gap-2.5 text-sm text-gray-500">
<span className="w-1 h-1 rounded-full bg-gray-300 mt-2"></span>
                        Answers factual questions
                    </li>
<li className="flex items-start gap-2.5 text-sm text-gray-500">
<span className="w-1 h-1 rounded-full bg-gray-300 mt-2"></span>
                        Defers decisions
                    </li>
</ul>
</div>

<div className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-gray-300 transition-colors">
<div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-900 mb-6">
<i className="w-5 h-5" data-lucide="file-text"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-4">Get a smart recap</h3>
<ul className="space-y-3">
<li className="flex items-start gap-2.5 text-sm text-gray-500">
<span className="w-1 h-1 rounded-full bg-gray-300 mt-2"></span>
                        Summary &amp; Decisions
                    </li>
<li className="flex items-start gap-2.5 text-sm text-gray-500">
<span className="w-1 h-1 rounded-full bg-gray-300 mt-2"></span>
                        Action Items
                    </li>
<li className="flex items-start gap-2.5 text-sm text-gray-500">
<span className="w-1 h-1 rounded-full bg-gray-300 mt-2"></span>
                        Audio digest
                    </li>
</ul>
</div>
</div>
</section>

<section className="px-6 max-w-7xl mx-auto mb-32">
<div className="flex flex-col lg:flex-row items-center justify-between gap-16">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight leading-tight mb-8">
                    For people whose time is fully booked.
                </h2>
<div className="flex flex-wrap gap-3">
<span className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 bg-gray-50">Executives</span>
<span className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 bg-gray-50">Consultants</span>
<span className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 bg-gray-50">Remote Teams</span>
<span className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 bg-gray-50">Founders</span>
<span className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 bg-gray-50">Freelancers</span>
</div>
</div>
<div className="w-full lg:w-[500px] h-[300px] bg-[#05050A] rounded-2xl shadow-2xl p-6 relative overflow-hidden flex flex-col justify-center items-center">

<div className="grid grid-cols-2 gap-4 w-full max-w-sm">
<div className="h-20 bg-gray-800/50 rounded-lg"></div>
<div className="h-20 bg-gray-800/50 rounded-lg"></div>
<div className="h-28 bg-teal-900/20 rounded-lg border border-teal-500/20 relative flex items-center justify-center">
<div className="w-8 h-8 bg-black rounded-full flex items-center justify-center relative">
<div className="absolute inset-0 rounded-full border border-teal-500 animate-ping opacity-50"></div>
<div className="w-2 h-2 bg-teal-400 rounded-full"></div>
</div>
</div>
<div className="h-28 bg-gray-800/50 rounded-lg"></div>
</div>
</div>
</div>
</section>

<section className="px-6 max-w-7xl mx-auto mb-24">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">

<div>
<div className="text-teal-600 mb-3"><i className="w-5 h-5" data-lucide="user-check"></i></div>
<h4 className="text-sm font-bold text-gray-900 mb-1">Stand-In Mode</h4>
<p className="text-xs text-gray-500 leading-relaxed">Attends when you can't.</p>
</div>

<div>
<div className="text-teal-600 mb-3"><i className="w-5 h-5" data-lucide="mic-2"></i></div>
<h4 className="text-sm font-bold text-gray-900 mb-1">Real-Time Voice</h4>
<p className="text-xs text-gray-500 leading-relaxed">Speaks your updates naturally.</p>
</div>

<div>
<div className="text-teal-600 mb-3"><i className="w-5 h-5" data-lucide="file-text"></i></div>
<h4 className="text-sm font-bold text-gray-900 mb-1">Live Transcription</h4>
<p className="text-xs text-gray-500 leading-relaxed">Captures every word.</p>
</div>

<div>
<div className="text-teal-600 mb-3"><i className="w-5 h-5" data-lucide="clock"></i></div>
<h4 className="text-sm font-bold text-gray-900 mb-1">Smart Deferral</h4>
<p className="text-xs text-gray-500 leading-relaxed">Knows when to say 'I'll ask'.</p>
</div>

<div>
<div className="text-teal-600 mb-3"><i className="w-5 h-5" data-lucide="calendar-x"></i></div>
<h4 className="text-sm font-bold text-gray-900 mb-1">Conflict Detection</h4>
<p className="text-xs text-gray-500 leading-relaxed">Suggests coverage automatically.</p>
</div>

<div>
<div className="text-teal-600 mb-3"><i className="w-5 h-5" data-lucide="brain-circuit"></i></div>
<h4 className="text-sm font-bold text-gray-900 mb-1">Context Retrieval</h4>
<p className="text-xs text-gray-500 leading-relaxed">Answers from your docs.</p>
</div>

<div>
<div className="text-teal-600 mb-3"><i className="w-5 h-5" data-lucide="layers"></i></div>
<h4 className="text-sm font-bold text-gray-900 mb-1">Structured Recaps</h4>
<p className="text-xs text-gray-500 leading-relaxed">Perfect summaries, every time.</p>
</div>

<div>
<div className="text-teal-600 mb-3"><i className="w-5 h-5" data-lucide="zap"></i></div>
<h4 className="text-sm font-bold text-gray-900 mb-1">Workflow Sync</h4>
<p className="text-xs text-gray-500 leading-relaxed">Push to Slack, Notion, Asana.</p>
</div>
</div>
</section>

<section className="px-6 max-w-7xl mx-auto mb-24">
<div className="bg-[#05050A] rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-wrap items-center gap-4 md:gap-8">
<div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/5">
<i className="w-3.5 h-3.5 text-teal-400" data-lucide="check-circle"></i>
<span className="text-xs font-medium text-white">Always Disclosed</span>
</div>
<div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/5">
<i className="w-3.5 h-3.5 text-teal-400" data-lucide="check-circle"></i>
<span className="text-xs font-medium text-white">Consent-First Voice</span>
</div>
<div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/5">
<i className="w-3.5 h-3.5 text-teal-400" data-lucide="check-circle"></i>
<span className="text-xs font-medium text-white">GDPR-Aligned</span>
</div>
</div>
<a className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1" href="#">
                View Trust &amp; Safety <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<section className="px-6 max-w-7xl mx-auto mb-24 text-center">
<h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-10">Works with your favorite tools</h4>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-lg font-bold text-gray-800">Zoom</span>
<span className="text-lg font-bold text-gray-800">Google Meet</span>
<span className="text-lg font-bold text-gray-800">Microsoft Teams</span>
<span className="text-lg font-bold text-gray-800">Slack</span>
<span className="text-lg font-bold text-gray-800">Asana</span>
<span className="text-lg font-bold text-gray-800">Notion</span>
<span className="text-lg font-bold text-gray-800">Gmail</span>
<span className="text-lg font-bold text-gray-800">Google Docs</span>
</div>
</section>

<section className="px-6 max-w-7xl mx-auto mb-20">
<div className="bg-[#F0F9FA] rounded-[3rem] py-24 px-6 text-center relative overflow-hidden">

<div className="absolute top-0 left-0 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>
<div className="relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight mb-8">
                    Never miss a meeting again.
                </h2>
<button className="bg-black text-white px-10 py-4 rounded-full text-[15px] font-medium hover:bg-gray-800 transition-transform hover:-translate-y-1 shadow-2xl shadow-black/10">
                    Get Early Access
                </button>
</div>
</div>
</section>

<footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
<div className="col-span-2">
<div className="flex items-center gap-3 mb-4">

<img alt="Righthand Logo" className="h-6 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<span className="font-bold text-gray-900 font-manrope">righthand</span>
</div>
<p className="text-xs text-gray-500 max-w-xs leading-relaxed">
                        Your AI meeting twin that joins calls for you, speaks your update, and sends a clean recap.
                    </p>
</div>
<div>
<h5 className="text-xs font-semibold text-gray-900 mb-4">Product</h5>
<ul className="space-y-3 text-xs text-gray-500">
<li><a className="hover:text-gray-900" href="#">How It Works</a></li>
<li><a className="hover:text-gray-900" href="#">Features</a></li>
<li><a className="hover:text-gray-900" href="#">Integrations</a></li>
<li><a className="hover:text-gray-900" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-semibold text-gray-900 mb-4">Company</h5>
<ul className="space-y-3 text-xs text-gray-500">
<li><a className="hover:text-gray-900" href="#">About</a></li>
<li><a className="hover:text-gray-900" href="#">Blog</a></li>
<li><a className="hover:text-gray-900" href="#">Careers</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-semibold text-gray-900 mb-4">Trust</h5>
<ul className="space-y-3 text-xs text-gray-500">
<li><a className="hover:text-gray-900" href="#">Trust &amp; Safety</a></li>
<li><a className="hover:text-gray-900" href="#">Privacy Policy</a></li>
<li><a className="hover:text-gray-900" href="#">Terms of Service</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-semibold text-gray-900 mb-4">Contact</h5>
<ul className="space-y-3 text-xs text-gray-500">
<li><a className="hover:text-gray-900" href="#">hello@righthand.ai</a></li>
<li><a className="hover:text-gray-900" href="#">Twitter / X</a></li>
<li><a className="hover:text-gray-900" href="#">LinkedIn</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
<p>© 2025 righthand ai. All rights reserved.</p>
<p>Your Meeting Twin</p>
</div>
</div>
</footer>


    </>
  );
}
