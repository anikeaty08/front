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
      

<div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern opacity-60"></div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
<i className="text-indigo-400 w-4 h-4" data-lucide="audio-waveform"></i>
</div>
<span className="text-white font-medium tracking-tight text-sm">ACCESSLINE</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#industries">Industries</a>
<a className="hover:text-white transition-colors" href="#features">Capabilities</a>
<a className="hover:text-white transition-colors" href="#workflow">How it Works</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium hover:text-white transition-colors" href="#">Log in</a>
<a className="group relative px-4 py-2 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all overflow-hidden" href="#">
<span className="relative z-10 flex items-center gap-2">
                        Get Access
                        <i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</span>
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</a>
</div>
</div>
</nav>

<section className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-4xl mx-auto text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                The Front Desk That Never Sleeps
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                Never miss a call.<br/>
<span className="text-gradient-primary">AI Receptionist</span> for growth.
            </h1>
<p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Automate appointments, answer FAQs, and route calls with a human-like voice agent. 
                Seamlessly integrated with your existing CRM.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
                    Start Free Trial
                </button>
<button className="w-full sm:w-auto px-8 py-3 glass-card text-white rounded-lg font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="play"></i>
                    Listen to Demo
                </button>
</div>
</div>

<div className="max-w-5xl mx-auto relative mt-20 h-[600px] md:h-[500px] border border-white/5 rounded-2xl bg-[#080808]/50 backdrop-blur-sm overflow-hidden select-none">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

<svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0">
<defs>
<lineargradient id="lineGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#4f46e5', stopOpacity: '0.2'}}></stop>
<stop offset="50%" style={{stopColor: '#818cf8', stopOpacity: '0.8'}}></stop>
<stop offset="100%" style={{stopColor: '#c084fc', stopOpacity: '0.2'}}></stop>
</lineargradient>
</defs>

<path className="connector-line" d="M150,250 C250,250 250,150 400,150" fill="none" stroke="url(#lineGradient)" strokeWidth="2"></path>

<path className="connector-line" d="M600,150 C750,150 750,250 850,250" fill="none" stroke="url(#lineGradient)" strokeWidth="2"></path>

<path d="M600,150 C650,150 650,350 720,350" fill="none" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4 4" strokeWidth="1"></path>
</svg>

<svg className="block md:hidden absolute inset-0 w-full h-full pointer-events-none z-0">
<defs>
<lineargradient id="lineGradientMobile" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#4f46e5', stopOpacity: '0.2'}}></stop>
<stop offset="50%" style={{stopColor: '#818cf8', stopOpacity: '0.8'}}></stop>
<stop offset="100%" style={{stopColor: '#c084fc', stopOpacity: '0.2'}}></stop>
</lineargradient>
</defs>

<line className="connector-line" stroke="url(#lineGradientMobile)" strokeWidth="2" x1="50%" x2="50%" y1="110" y2="180"></line>

<line className="connector-line" stroke="url(#lineGradientMobile)" strokeWidth="2" x1="50%" x2="50%" y1="350" y2="400"></line>
</svg>

<div className="absolute top-[30px] md:top-[210px] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[50px] z-10 w-auto">
<div className="glass-card p-4 rounded-xl w-48 shadow-[0_0_30px_-10px_rgba(79,70,229,0.3)]">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-green-500/20 flex items-center justify-center text-green-400">
<i className="w-3 h-3" data-lucide="phone-incoming"></i>
</div>
<span className="text-xs font-medium text-white">Incoming Call</span>
</div>
<span className="text-[10px] text-neutral-500">+1 (555)...</span>
</div>
<div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-green-500 rounded-full"></div>
</div>
</div>
</div>

<div className="absolute top-[180px] md:top-[80px] left-1/2 -translate-x-1/2 z-20">
<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div className="relative glass-card bg-[#0a0a0a] p-6 rounded-xl w-64 border border-white/10">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
<i className="w-4 h-4" data-lucide="cpu"></i>
</div>
<div>
<div className="text-sm font-medium text-white">AI Core Agent</div>
<div className="text-[10px] text-neutral-500">Processing Intent</div>
</div>
</div>
<div className="space-y-2">
<div className="bg-neutral-900/50 p-2 rounded border border-white/5">
<p className="text-[10px] text-neutral-400">User:</p>
<p className="text-xs text-white">"I need to book a cleaning for Tuesday."</p>
</div>
<div className="bg-indigo-900/20 p-2 rounded border border-indigo-500/20">
<p className="text-[10px] text-indigo-300">AI Response:</p>
<p className="text-xs text-indigo-100">"I can help with that. Is 2 PM available?"</p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-[400px] md:top-[210px] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-[50px] z-10 w-auto">
<div className="glass-card p-4 rounded-xl w-48 shadow-[0_0_30px_-10px_rgba(192,132,252,0.3)]">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-purple-500/20 flex items-center justify-center text-purple-400">
<i className="w-3 h-3" data-lucide="calendar-plus"></i>
</div>
<span className="text-xs font-medium text-white">Booking</span>
</div>
<i className="w-3 h-3 text-green-400" data-lucide="check-circle"></i>
</div>
<div className="space-y-1">
<div className="flex justify-between text-[10px] text-neutral-400">
<span>Status</span>
<span className="text-white">Confirmed</span>
</div>
<div className="flex justify-between text-[10px] text-neutral-400">
<span>Sync</span>
<span className="text-white">Google Cal</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-[20px] md:bottom-[50px] left-1/2 -translate-x-1/2 md:translate-x-16">
<div className="glass-card px-3 py-2 rounded-lg flex items-center gap-2 border border-dashed border-white/20 whitespace-nowrap">
<i className="text-neutral-400 w-3 h-3" data-lucide="bell"></i>
<span className="text-[10px] text-neutral-400">SMS Notification Sent</span>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#050505]" id="industries">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Tailored for your industry.</h2>
<p className="text-neutral-400 max-w-xl mx-auto">Specialized agents trained on industry-specific workflows and knowledge bases.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card p-6 rounded-2xl group hover:bg-white/5 transition-all">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400">
<i className="w-5 h-5" data-lucide="stethoscope"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Private Clinics</h3>
<p className="text-xs text-neutral-400 leading-relaxed">
                        Handles patient intake, FAQs, and syncs appointments directly to Jane or Epic EMR systems securely.
                    </p>
</div>

<div className="glass-card p-6 rounded-2xl group hover:bg-white/5 transition-all">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400">
<i className="w-5 h-5" data-lucide="scale"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Legal Firms</h3>
<p className="text-xs text-neutral-400 leading-relaxed">
                        Qualifies incoming leads, screens solicitors, and schedules discovery calls automatically for partners.
                    </p>
</div>

<div className="glass-card p-6 rounded-2xl group hover:bg-white/5 transition-all">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400">
<i className="w-5 h-5" data-lucide="building-2"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Boutique Hotels</h3>
<p className="text-xs text-neutral-400 leading-relaxed">
                        Manages late-night inquiries, room service requests, and concierge bookings 24/7 without night staff.
                    </p>
</div>

<div className="glass-card p-6 rounded-2xl group hover:bg-white/5 transition-all">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400">
<i className="w-5 h-5" data-lucide="briefcase"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Any Business</h3>
<p className="text-xs text-neutral-400 leading-relaxed">
                        Perfect for any business that needs to handle leads, qualify prospects, and book meetings instantly.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="features">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Capable of handling <br/>any conversation.</h2>
<p className="text-neutral-400 max-w-xl">Our voice AI isn't just a chatbot. It's a fully integrated telephony agent designed for complex front-desk workflows.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl group relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
<i className="w-16 h-16 text-indigo-500" data-lucide="clock"></i>
</div>
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<i className="w-6 h-6" data-lucide="clock"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">24/7 Availability</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Never let a call go to voicemail. AccessLine answers every call instantly, day or night, ensuring you capture every lead.
                    </p>
</div>

<div className="glass-card p-8 rounded-2xl group relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
<i className="w-16 h-16 text-purple-500" data-lucide="users"></i>
</div>
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Natural Language</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Powered by LLMs, the agent understands context, interruptions, and nuance, providing a human-level conversational experience.
                    </p>
</div>

<div className="glass-card p-8 rounded-2xl group relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
<i className="w-16 h-16 text-pink-500" data-lucide="calendar"></i>
</div>
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<i className="w-6 h-6" data-lucide="calendar"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Smart Scheduling</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Direct integration with Google Calendar, Calendly, and EHR systems to book appointments in real-time without human intervention.
                    </p>
</div>

<div className="glass-card p-8 rounded-2xl md:col-span-2 flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<i className="w-6 h-6" data-lucide="git-branch"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Intelligent Call Routing</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">
                            The AI determines the caller's intent and can route complex issues to specific departments or human agents seamlessly, passing along full context.
                        </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm text-neutral-300">
<i className="w-4 h-4 text-indigo-400" data-lucide="check-circle"></i>
                                Custom forwarding rules
                            </li>
<li className="flex items-center gap-2 text-sm text-neutral-300">
<i className="w-4 h-4 text-indigo-400" data-lucide="check-circle"></i>
                                Live transcript handoff
                            </li>
</ul>
</div>
<div className="w-full md:w-1/2 bg-[#0a0a0a] border border-white/10 rounded-xl p-4 relative">

<div className="flex gap-1.5 mb-3">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
</div>
<div className="space-y-2 font-mono text-[10px] text-neutral-400">
<div className="flex justify-between">
<span className="text-purple-400">if</span>
<span>(intent == <span className="text-green-400">"emergency"</span>)</span>
</div>
<div className="pl-4">
<span className="text-blue-400">route_to</span>(<span className="text-yellow-400">doctor_on_call</span>);
                            </div>
<div className="flex justify-between">
<span className="text-purple-400">else if</span>
<span>(intent == <span className="text-green-400">"billing"</span>)</span>
</div>
<div className="pl-4">
<span className="text-blue-400">transfer</span>(<span className="text-yellow-400">finance_dept</span>);
                            </div>
<div>
<span className="text-purple-400">else</span>
</div>
<div className="pl-4">
<span className="text-blue-400">handle_with_ai</span>();
                            </div>
</div>
</div>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col justify-center items-center text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5"></div>
<h3 className="text-5xl font-medium text-white mb-2 tracking-tight">0s</h3>
<p className="text-sm text-neutral-400">Hold time for your customers.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative bg-[#050505]" id="workflow">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16">
<div className="w-full md:w-1/3">
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">Setup in minutes,<br/> not months.</h2>
<div className="space-y-8 relative">

<div className="absolute left-6 top-8 bottom-8 w-px bg-white/10 z-0"></div>

<div className="relative z-10 flex gap-6">
<div className="w-12 h-12 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center shrink-0 text-white font-medium">1</div>
<div>
<h4 className="text-white font-medium mb-1">Connect your number</h4>
<p className="text-sm text-neutral-400">Forward calls from your existing line or get a new number instantly.</p>
</div>
</div>

<div className="relative z-10 flex gap-6">
<div className="w-12 h-12 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center shrink-0 text-white font-medium">2</div>
<div>
<h4 className="text-white font-medium mb-1">Customize Knowledge</h4>
<p className="text-sm text-neutral-400">Upload FAQs, pricing, and business hours. The AI learns instantly.</p>
</div>
</div>

<div className="relative z-10 flex gap-6">
<div className="w-12 h-12 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center shrink-0 text-white font-medium">3</div>
<div>
<h4 className="text-white font-medium mb-1">Integrate Tools</h4>
<p className="text-sm text-neutral-400">Connect to your CRM and Calendar with one-click OAuth integrations.</p>
</div>
</div>
</div>
</div>
<div className="w-full md:w-2/3">
<div className="glass-card rounded-2xl p-1 border border-white/10 h-full min-h-[400px] relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-10 bg-[#0a0a0a] border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="mt-10 p-8 grid grid-cols-2 gap-4">

<div className="col-span-2 mb-4">
<div className="text-xs font-medium text-neutral-500 mb-2 uppercase tracking-wide">Voice Configuration</div>
<div className="h-2 bg-neutral-800 rounded w-full mb-2"></div>
<div className="h-2 bg-neutral-800 rounded w-2/3"></div>
</div>
<div className="bg-neutral-900/50 rounded p-4 border border-white/5">
<div className="flex items-center gap-2 mb-2">
<i className="w-3 h-3 text-indigo-400" data-lucide="settings"></i>
<span className="text-xs text-white">Tone</span>
</div>
<div className="flex gap-2">
<div className="px-2 py-1 rounded bg-indigo-500/20 text-[10px] text-indigo-300 border border-indigo-500/20">Professional</div>
<div className="px-2 py-1 rounded bg-neutral-800 text-[10px] text-neutral-400 border border-white/5">Friendly</div>
</div>
</div>
<div className="bg-neutral-900/50 rounded p-4 border border-white/5">
<div className="flex items-center gap-2 mb-2">
<i className="w-3 h-3 text-green-400" data-lucide="shield-check"></i>
<span className="text-xs text-white">Security</span>
</div>
<div className="text-[10px] text-neutral-400">HIPAA Compliant Mode <span className="text-green-400">Active</span></div>
</div>
<div className="col-span-2 bg-neutral-900/50 rounded p-4 border border-white/5 mt-2">
<div className="flex justify-between items-center mb-4">
<span className="text-xs text-white font-medium">Live Call Analytics</span>
<span className="text-[10px] text-neutral-500">Real-time</span>
</div>
<div className="flex items-end gap-1 h-16 w-full px-2">
<div className="w-full bg-indigo-500/20 h-[40%] rounded-t"></div>
<div className="w-full bg-indigo-500/30 h-[70%] rounded-t"></div>
<div className="w-full bg-indigo-500/50 h-[50%] rounded-t"></div>
<div className="w-full bg-indigo-500/40 h-[80%] rounded-t"></div>
<div className="w-full bg-indigo-500/20 h-[30%] rounded-t"></div>
<div className="w-full bg-indigo-500/60 h-[90%] rounded-t"></div>
<div className="w-full bg-indigo-500/30 h-[60%] rounded-t"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-[#050505] border-t border-white/5" id="pricing">
<div className="absolute inset-0 bg-gradient-to-t from-indigo-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-4">Transparent Investment</h2>
<p className="text-lg text-neutral-400 mb-16 max-w-xl mx-auto">
                Scale your operations without the headcount.
            </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="glass-card p-1 rounded-2xl flex flex-col h-full hover:border-white/20 transition-colors">
<div className="bg-[#0a0a0a] rounded-xl p-8 border border-white/5 h-full flex flex-col">
<div className="text-left">
<div className="text-sm font-medium text-neutral-400 mb-2">Starter</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-medium text-white">$49</span>
<span className="text-sm text-neutral-500">/mo</span>
</div>
</div>
<ul className="text-left space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-white mt-0.5" data-lucide="check"></i>
<span>300 AI Voice Minutes</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-white mt-0.5" data-lucide="check"></i>
<span>1 Phone Number</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-white mt-0.5" data-lucide="check"></i>
<span>Basic Call Forwarding</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-white mt-0.5" data-lucide="check"></i>
<span>Standard Voices</span>
</li>
</ul>
<button className="w-full py-3 bg-[#111] border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                            Start Free Trial
                        </button>
</div>
</div>

<div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-indigo-500 to-purple-600 shadow-2xl shadow-indigo-500/10">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
<div className="bg-[#0a0a0a] rounded-xl p-8 h-full flex flex-col">
<div className="text-left">
<div className="text-sm font-medium text-indigo-400 mb-2">Professional</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-medium text-white">$149</span>
<span className="text-sm text-neutral-500">/mo</span>
</div>
</div>
<ul className="text-left space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-white">
<i className="w-4 h-4 text-indigo-400 mt-0.5" data-lucide="check"></i>
<span>1,000 AI Voice Minutes</span>
</li>
<li className="flex items-start gap-3 text-sm text-white">
<i className="w-4 h-4 text-indigo-400 mt-0.5" data-lucide="check"></i>
<span>3 Phone Numbers</span>
</li>
<li className="flex items-start gap-3 text-sm text-white">
<i className="w-4 h-4 text-indigo-400 mt-0.5" data-lucide="check"></i>
<span>CRM Integrations (HubSpot)</span>
</li>
<li className="flex items-start gap-3 text-sm text-white">
<i className="w-4 h-4 text-indigo-400 mt-0.5" data-lucide="check"></i>
<span>Custom Knowledge Base</span>
</li>
<li className="flex items-start gap-3 text-sm text-white">
<i className="w-4 h-4 text-indigo-400 mt-0.5" data-lucide="check"></i>
<span>Calendar Sync</span>
</li>
</ul>
<button className="w-full py-3 bg-white text-black font-medium rounded-lg hover:bg-neutral-200 transition-colors">
                            Get Started
                        </button>
</div>
</div>

<div className="glass-card p-1 rounded-2xl flex flex-col h-full hover:border-white/20 transition-colors">
<div className="bg-[#0a0a0a] rounded-xl p-8 border border-white/5 h-full flex flex-col">
<div className="text-left">
<div className="text-sm font-medium text-neutral-400 mb-2">Enterprise</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-medium text-white">Custom</span>
</div>
</div>
<ul className="text-left space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-white mt-0.5" data-lucide="check"></i>
<span>Unlimited Minutes (Volume)</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-white mt-0.5" data-lucide="check"></i>
<span>Unlimited Numbers</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-white mt-0.5" data-lucide="check"></i>
<span>Full API Access</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-white mt-0.5" data-lucide="check"></i>
<span>Dedicated Account Manager</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-white mt-0.5" data-lucide="check"></i>
<span>HIPAA &amp; SOC2 Compliance</span>
</li>
</ul>
<button className="w-full py-3 bg-[#111] border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                            Contact Sales
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-[#020202] pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<i className="w-3 h-3" data-lucide="audio-waveform"></i>
</div>
<span className="text-white font-medium tracking-tight text-sm">ACCESSLINE</span>
</div>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Building the future of telephony with intelligent voice agents.
                    </p>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Product</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Resources</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-white transition-colors" href="#">Community</a></li>
<li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Legal</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-[10px] text-neutral-600">
                    © 2024 AccessLine Inc. All rights reserved.
                </div>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-neutral-500 hover:text-white" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
<a className="text-neutral-500 hover:text-white" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
