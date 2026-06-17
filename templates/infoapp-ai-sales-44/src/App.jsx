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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
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
      

<div className="fixed inset-0 bg-grid z-[-1] pointer-events-none"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-[120px] z-[-1] pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-3 group select-none" href="#">
<div className="grid grid-cols-3 gap-[3px]">
<div className="w-2.5 h-2.5 rounded-[2px] bg-yellow-500"></div>
<div className="w-2.5 h-2.5 rounded-[2px] bg-purple-600"></div>
<div className="w-2.5 h-2.5 rounded-[2px] bg-orange-500"></div>
<div className="w-2.5 h-2.5 rounded-[2px] bg-lime-500"></div>
<div className="w-2.5 h-2.5 rounded-[2px] bg-red-600"></div>
<div className="w-2.5 h-2.5 rounded-[2px] bg-blue-600"></div>
</div>
<div className="flex items-baseline tracking-tighter">
<span className="text-2xl font-[800] text-white tracking-tighter">Info</span>
<span className="text-2xl font-normal text-white">App</span>
<span className="text-[10px] text-gray-400 font-medium ml-0.5 -translate-y-2">TM</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors" href="#why">Why InfoApp</a>
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="mailto:contact@infoapp.com">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors hidden sm:block" href="#">Login</a>
<a className="text-sm font-semibold bg-[#d4fe8b] text-black px-4 py-2 rounded-full hover:bg-[#bef264] transition-all hover:scale-105 shadow-[0_0_20px_rgba(212,254,139,0.3)]" href="#">
                    Start Free
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4fe8b] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4fe8b]"></span>
</span>
<span className="text-xs font-medium text-[#d4fe8b] tracking-wide uppercase">New: Outlook 365 Integration</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-6 text-white max-w-4xl mx-auto">
            Accelerate your daily tasks with <span className="text-lime-gradient font-semibold">AI</span>
</h1>
<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Use AI to minimize the effort of writing emails, updating the CRM, and finding the right content. <span className="text-white font-medium">Save up to 2 hours of work each day.</span>
</p>
<div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
<button className="h-12 px-8 rounded-full bg-[#d4fe8b] text-black font-semibold hover:bg-[#bef264] transition-all flex items-center gap-2 shadow-[0_0_25px_rgba(212,254,139,0.4)]">
<span>Start Free Trial</span>
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<button className="group h-12 px-8 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-all flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
<i className="w-3 h-3 ml-0.5 fill-white" data-lucide="play"></i>
</div>
<span>Watch Demo</span>
</button>
</div>

<div className="relative w-full max-w-5xl mx-auto aspect-[16/9] md:aspect-[21/9] bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden shadow-2xl">

<div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/20"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20"></div>
</div>
<div className="mx-auto w-1/3 h-5 bg-white/5 rounded text-[10px] flex items-center justify-center text-gray-500 font-mono">infoapp.com/dashboard</div>
</div>

<div className="p-8 grid grid-cols-12 gap-6 h-full">

<div className="col-span-3 hidden md:flex flex-col gap-4 border-r border-white/5 pr-6">
<div className="h-8 w-3/4 bg-white/10 rounded animate-pulse"></div>
<div className="space-y-2 mt-4">
<div className="h-4 w-full bg-white/5 rounded"></div>
<div className="h-4 w-5/6 bg-white/5 rounded"></div>
<div className="h-4 w-4/6 bg-white/5 rounded"></div>
</div>
</div>

<div className="col-span-12 md:col-span-9 flex flex-col items-center justify-center relative">
<div className="absolute inset-0 bg-gradient-to-tr from-[#d4fe8b]/5 to-transparent rounded-full blur-3xl"></div>

<div className="relative z-10 w-full max-w-md p-6 bg-[#111] border border-white/10 rounded-xl shadow-xl backdrop-blur-sm">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-[#d4fe8b]/20 text-[#d4fe8b] flex items-center justify-center">
<i className="w-4 h-4" data-lucide="sparkles"></i>
</div>
<div className="text-sm font-medium text-white">AI Assistant Active</div>
</div>
<div className="space-y-3">
<div className="h-2 w-full bg-white/10 rounded"></div>
<div className="h-2 w-5/6 bg-white/10 rounded"></div>
<div className="h-2 w-3/4 bg-white/10 rounded"></div>
</div>
<div className="mt-6 flex gap-3">
<div className="h-8 px-4 bg-[#d4fe8b] rounded text-black text-xs font-bold flex items-center justify-center hover:bg-[#bef264] cursor-pointer transition-colors">Generate</div>
<div className="h-8 w-24 bg-white/10 rounded hover:bg-white/20 transition-colors"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="features">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">Three Powerful Engines. <span className="text-[#d4fe8b]">One Platform.</span></h2>
<p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">Streamline information capture, facilitate quicker understanding, and enable effective communication.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="bento-card col-span-1 rounded-3xl p-6 relative overflow-hidden group flex flex-col h-[680px]">
<div className="relative z-10 mb-8 px-2">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
<i className="w-5 h-5" data-lucide="pen-square"></i>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">AI Writer</h3>
</div>
<p className="text-gray-400 text-sm leading-relaxed">AI Portal to help with writing and replying to customer messages. Drafts emails in seconds.</p>
</div>

<div className="relative flex-1 w-full max-w-[280px] mx-auto bg-[#FFFFFF] rounded-t-3xl border-x-[6px] border-t-[6px] border-[#2a2a2a] shadow-2xl overflow-hidden flex flex-col">

<div className="h-8 flex justify-between items-center px-4 bg-white text-gray-800 text-[10px] font-bold border-b border-gray-100">
<div className="flex items-center gap-1">
<div className="w-2 h-2 bg-gradient-to-r from-yellow-400 via-purple-500 to-red-500 rounded-sm"></div>
<span>InfoApp</span>
</div>
<span className="text-gray-400 font-normal">Help</span>
</div>

<div className="flex text-[10px] font-semibold text-center border-b border-gray-100">
<div className="flex-1 py-2 text-gray-400 bg-gray-50">Request</div>
<div className="flex-1 py-2 text-purple-600 border-b-2 border-purple-600 bg-white">Response</div>
</div>

<div className="flex-1 p-4 bg-white flex flex-col">
<div className="text-[9px] text-gray-500 mb-2">Subject: Follow up</div>
<div className="text-[10px] leading-relaxed text-gray-800 font-medium">
<p className="mb-2">Hi Dave,</p>
<p className="mb-2">I spoke with you last Friday regarding InfoApp - Our AI-Powered Sales Assistant. You wanted me to follow up in a week or so.</p>
<p className="mb-2">I hope you come back refreshed - I have been there so many times 😉.</p>
<p className="mb-2">Thought I would send this as a preface to next week.</p>
<p className="mb-2">Best,<br/>Frank</p>
</div>

<div className="mt-auto pt-2 space-y-2">
<div className="flex gap-2 justify-end">
<div className="w-4 h-4 rounded text-gray-300 border border-gray-200 flex items-center justify-center"><i className="w-2 h-2" data-lucide="copy"></i></div>
<div className="w-4 h-4 rounded text-gray-300 border border-gray-200 flex items-center justify-center"><i className="w-2 h-2" data-lucide="rotate-ccw"></i></div>
</div>
<div className="grid grid-cols-2 gap-1.5">
<button className="py-1.5 rounded border border-purple-100 text-[8px] font-bold text-purple-600 hover:bg-purple-50">Reply</button>
<button className="py-1.5 rounded border border-purple-100 text-[8px] font-bold text-purple-600 hover:bg-purple-50">Summary</button>
<button className="py-1.5 rounded border border-purple-100 text-[8px] font-bold text-purple-600 hover:bg-purple-50">Rewrite</button>
<button className="py-1.5 rounded border border-purple-100 text-[8px] font-bold text-purple-600 hover:bg-purple-50">Grammar</button>
</div>
<button className="w-full py-1.5 mt-1 rounded bg-purple-50 text-purple-700 text-[8px] font-bold border border-purple-200">Summarize + Notes + Next Steps</button>
<div className="text-[8px] text-purple-400 text-center mt-1">Request left per 30 days: 1,912</div>
</div>
</div>

<div className="h-10 bg-purple-600 flex items-center justify-center text-white text-[9px] font-medium">
                        AI Writer Active
                    </div>
</div>
</div>

<div className="bento-card col-span-1 rounded-3xl p-6 relative overflow-hidden group flex flex-col h-[680px]">
<div className="relative z-10 mb-8 px-2">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
<i className="w-5 h-5" data-lucide="refresh-cw"></i>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">CRM Updater</h3>
</div>
<p className="text-gray-400 text-sm leading-relaxed">Uses AI to update the CRM quickly with summaries of messages, meeting discussions, and MEDDPICC.</p>
</div>

<div className="relative flex-1 w-full max-w-[280px] mx-auto bg-[#FFFFFF] rounded-t-3xl border-x-[6px] border-t-[6px] border-[#2a2a2a] shadow-2xl overflow-hidden flex flex-col">

<div className="h-8 flex justify-between items-center px-4 bg-white text-gray-800 text-[10px] font-bold border-b border-gray-100">
<div className="flex items-center gap-1">
<div className="w-2 h-2 bg-gradient-to-r from-yellow-400 via-purple-500 to-red-500 rounded-sm"></div>
<span>InfoApp</span>
</div>
<span className="text-gray-400 font-normal">Help</span>
</div>

<div className="px-4 py-3 border-b border-gray-50">
<h4 className="text-[10px] font-bold text-gray-800 uppercase tracking-wider">CRM Updater</h4>
</div>

<div className="flex-1 p-4 bg-white flex flex-col relative">

<div className="mb-4 bg-blue-50 border border-blue-100 rounded p-2 flex gap-2 items-start">
<i className="w-3 h-3 text-blue-500 mt-0.5 shrink-0" data-lucide="corner-left-down"></i>
<p className="text-[8px] text-blue-800 leading-tight">Highlight the text that you would like to capture and paste it into this window</p>
</div>
<div className="text-[10px] leading-relaxed text-gray-800 font-medium opacity-80">
<p className="mb-2">Hi Dave,</p>
<p className="mb-2">I spoke with you last Friday regarding InfoApp - Our AI-Powered Sales Assistant. You wanted me to follow up in a week.</p>
<p>Thought I would send this as a preface...</p>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-[9px] shadow-lg animate-bounce">
                            Paste Selection
                        </div>

<div className="mt-auto pt-2 space-y-2">
<div className="grid grid-cols-2 gap-1.5">
<button className="py-1.5 rounded border border-blue-100 text-[8px] font-bold text-blue-600 hover:bg-blue-50">Summarize Email</button>
<button className="py-1.5 rounded border border-blue-100 text-[8px] font-bold text-blue-600 hover:bg-blue-50">Summarize Notes</button>
</div>
<button className="w-full py-1.5 rounded bg-blue-50 text-blue-700 text-[8px] font-bold border border-blue-200">MEDDPICC Update</button>
<div className="text-[8px] text-blue-400 text-center mt-1">Request left per 30 days: 2,074</div>
</div>
</div>

<div className="h-10 bg-blue-500 flex items-center justify-center text-white text-[9px] font-medium">
                        CRM Linked
                    </div>
</div>
</div>

<div className="bento-card col-span-1 rounded-3xl p-6 relative overflow-hidden group flex flex-col h-[680px]">
<div className="relative z-10 mb-8 px-2">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400">
<i className="w-5 h-5" data-lucide="share-2"></i>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">Content Share</h3>
</div>
<p className="text-gray-400 text-sm leading-relaxed">By clicking keywords, InfoApp creates a trackable link containing the right content to share.</p>
</div>

<div className="relative flex-1 w-full max-w-[280px] mx-auto bg-[#FFFFFF] rounded-t-3xl border-x-[6px] border-t-[6px] border-[#2a2a2a] shadow-2xl overflow-hidden flex flex-col">

<div className="h-8 flex justify-between items-center px-4 bg-white text-gray-800 text-[10px] font-bold border-b border-gray-100">
<div className="flex items-center gap-1">
<div className="w-2 h-2 bg-gradient-to-r from-yellow-400 via-purple-500 to-red-500 rounded-sm"></div>
<span>InfoApp</span>
</div>
<span className="text-gray-400 font-normal">Help</span>
</div>

<div className="px-4 py-3 border-b border-gray-50">
<h4 className="text-[10px] font-bold text-gray-800 uppercase tracking-wider">Content Share</h4>
</div>

<div className="flex-1 p-4 bg-white flex flex-col">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 bg-black rounded flex items-center justify-center text-white font-bold text-[10px]">GC</div>
<div className="flex-1 border rounded px-2 py-1 text-[9px] text-gray-600 flex justify-between items-center">
                                 Go Crypto
                                 <i className="w-3 h-3 opacity-50" data-lucide="chevron-down"></i>
</div>
</div>
<div className="text-[9px] font-semibold text-gray-500 mb-2">Content Selected</div>

<div className="grid grid-cols-2 gap-2 mb-4">
<div className="aspect-square bg-gray-100 rounded border border-gray-200"></div>
<div className="aspect-square bg-gray-100 rounded border border-gray-200"></div>
<div className="aspect-square bg-gray-100 rounded border border-gray-200"></div>
<div className="aspect-square bg-gray-100 rounded border border-gray-200 opacity-50 border-dashed"></div>
</div>

<div className="mt-auto pt-2 space-y-2">
<div className="text-[9px] font-semibold text-gray-500">Controls</div>
<div className="grid grid-cols-2 gap-1.5">
<button className="py-2 rounded border border-green-500 bg-white text-[8px] font-bold text-green-600 shadow-sm">Create Content Link</button>
<button className="py-2 rounded border border-gray-200 text-[8px] font-bold text-gray-500 hover:bg-gray-50">+ Add to My Docs</button>
<button className="py-2 rounded border border-gray-200 text-[8px] font-bold text-gray-500 hover:bg-gray-50">Copy Last Link</button>
<button className="py-2 rounded border border-gray-200 text-[8px] font-bold text-gray-500 hover:bg-gray-50">+ Add Content</button>
</div>
</div>
</div>

<div className="h-10 bg-green-500 flex items-center justify-center text-white text-[9px] font-medium">
                        Content Ready
                    </div>
</div>
</div>

<div className="bento-card col-span-1 lg:col-span-3 rounded-3xl p-8 relative overflow-hidden group flex flex-col md:flex-row items-center gap-12">
<div className="flex-1 text-left relative z-10">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-orange-400">
<i className="w-7 h-7" data-lucide="globe"></i>
</div>
<h3 className="text-3xl font-medium text-white mb-4 tracking-tight">Follows you across the web</h3>
<p className="text-gray-400 text-lg leading-relaxed">Find the right content for your customer wherever you go on the web. Task windows that appear when you need them.</p>
</div>
<div className="w-full md:w-1/2 h-64 bg-[#111] border border-white/10 rounded-xl relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-grid opacity-30"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#0A0A0A] rounded border border-white/5 shadow-2xl flex flex-col overflow-hidden">
<div className="h-6 bg-white/5 border-b border-white/5 flex items-center gap-1 px-2">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
</div>
<div className="p-4 flex items-center justify-center h-full">
<div className="px-6 py-3 bg-[#d4fe8b] text-black text-sm font-bold rounded shadow-[0_0_30px_rgba(212,254,139,0.2)] transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                                Context Aware
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">Claim all these advantages</h2>
<div className="h-1 w-20 bg-[#d4fe8b] rounded-full"></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex items-center gap-3 hover:bg-white/5 transition-colors">
<i className="text-[#d4fe8b] w-6 h-6" data-lucide="trending-up"></i>
<span className="text-sm font-medium text-gray-300">Increase Revenue</span>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex items-center gap-3 hover:bg-white/5 transition-colors">
<i className="text-[#d4fe8b] w-6 h-6" data-lucide="clock"></i>
<span className="text-sm font-medium text-gray-300">More Time to Sell</span>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex items-center gap-3 hover:bg-white/5 transition-colors">
<i className="text-[#d4fe8b] w-6 h-6" data-lucide="bar-chart-3"></i>
<span className="text-sm font-medium text-gray-300">Actionable Analytics</span>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex items-center gap-3 hover:bg-white/5 transition-colors">
<i className="text-[#d4fe8b] w-6 h-6" data-lucide="library"></i>
<span className="text-sm font-medium text-gray-300">Unified Organization</span>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex items-center gap-3 hover:bg-white/5 transition-colors">
<i className="text-[#d4fe8b] w-6 h-6" data-lucide="file-check"></i>
<span className="text-sm font-medium text-gray-300">Content at Fingertips</span>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex items-center gap-3 hover:bg-white/5 transition-colors">
<i className="text-[#d4fe8b] w-6 h-6" data-lucide="user-circle"></i>
<span className="text-sm font-medium text-gray-300">Customer Customization</span>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex items-center gap-3 hover:bg-white/5 transition-colors">
<i className="text-[#d4fe8b] w-6 h-6" data-lucide="bell"></i>
<span className="text-sm font-medium text-gray-300">Follow-up Alerts</span>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex items-center gap-3 hover:bg-white/5 transition-colors">
<i className="text-[#d4fe8b] w-6 h-6" data-lucide="zap"></i>
<span className="text-sm font-medium text-gray-300">Automate Workflow</span>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex items-center gap-3 hover:bg-white/5 transition-colors">
<i className="text-[#d4fe8b] w-6 h-6" data-lucide="timer"></i>
<span className="text-sm font-medium text-gray-300">Faster Response Times</span>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex items-center gap-3 hover:bg-white/5 transition-colors">
<i className="text-[#d4fe8b] w-6 h-6" data-lucide="shield-check"></i>
<span className="text-sm font-medium text-gray-300">Credibility</span>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex items-center gap-3 hover:bg-white/5 transition-colors">
<i className="text-[#d4fe8b] w-6 h-6" data-lucide="users"></i>
<span className="text-sm font-medium text-gray-300">Align Sales &amp; Marketing</span>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex items-center gap-3 hover:bg-white/5 transition-colors">
<i className="text-[#d4fe8b] w-6 h-6" data-lucide="arrow-left-right"></i>
<span className="text-sm font-medium text-gray-300">Transfer Traction</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1">
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-bold">1</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Connect your Email</h3>
<p className="text-gray-400">Works directly within Web-Based Outlook 365 or Gmail. No complex installations.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-bold">2</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Build one for all</h3>
<p className="text-gray-400">Distribute an InfoApp to your team with one click. Review interactions in the dashboard.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-bold">3</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Keep communication open</h3>
<p className="text-gray-400">Engage the customer even after the meeting ends with updated content links.</p>
</div>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<div className="relative rounded-2xl bg-gradient-to-br from-white/10 to-transparent p-[1px]">
<div className="bg-[#0A0A0A] rounded-2xl p-8 border border-white/5">
<div className="flex flex-col items-center justify-center text-center py-12">
<div className="w-20 h-20 rounded-2xl bg-[#d4fe8b]/10 flex items-center justify-center text-[#d4fe8b] mb-6">
<i className="w-10 h-10" data-lucide="rocket"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-2">It takes minutes to set-up</h3>
<p className="text-gray-400 mb-6">Simply link your Content URLs to an InfoApp and send specific content that fits your customer’s need.</p>
<a className="text-[#d4fe8b] hover:underline flex items-center gap-1 group" href="#">
                                See Documentation <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto relative">
<div className="absolute inset-0 bg-gradient-to-r from-[#d4fe8b]/20 to-blue-500/20 blur-[100px] opacity-50 z-[-1]"></div>
<div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4fe8b] to-transparent opacity-50"></div>
<h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">Claim your <span className="text-[#d4fe8b]">Free Trial</span></h2>
<p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">Free Trial and Paid versions supported on Desktop and Laptop. Experience the future of sales workflow today.</p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<button className="w-full sm:w-auto h-14 px-10 rounded-full bg-[#d4fe8b] text-black text-lg font-semibold hover:bg-[#bef264] transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(212,254,139,0.3)]">
                        Start Free Now
                    </button>
<button className="w-full sm:w-auto h-14 px-10 rounded-full bg-white/5 border border-white/10 text-white text-lg font-medium hover:bg-white/10 transition-all">
                        See Pricing Plans
                    </button>
</div>
<p className="mt-8 text-sm text-gray-500">Still have questions? <a className="text-white underline decoration-gray-600 underline-offset-4 hover:decoration-[#d4fe8b] transition-all" href="mailto:contact@infoapp.com">Contact us</a></p>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

<div className="flex items-center gap-3 select-none scale-90 origin-left">
<div className="grid grid-cols-3 gap-[3px]">
<div className="w-2.5 h-2.5 rounded-[2px] bg-yellow-500"></div>
<div className="w-2.5 h-2.5 rounded-[2px] bg-purple-600"></div>
<div className="w-2.5 h-2.5 rounded-[2px] bg-orange-500"></div>
<div className="w-2.5 h-2.5 rounded-[2px] bg-lime-500"></div>
<div className="w-2.5 h-2.5 rounded-[2px] bg-red-600"></div>
<div className="w-2.5 h-2.5 rounded-[2px] bg-blue-600"></div>
</div>
<div className="flex items-baseline tracking-tighter">
<span className="text-2xl font-[800] text-gray-300 tracking-tighter">Info</span>
<span className="text-2xl font-normal text-gray-300">App</span>
<span className="text-[10px] text-gray-600 font-medium ml-0.5 -translate-y-2">TM</span>
</div>
</div>
<div className="flex gap-8 text-sm text-gray-500 font-medium">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="mailto:contact@infoapp.com">contact@infoapp.com</a>
</div>
<div className="text-sm text-gray-600">
                © 2023 InfoApp. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
