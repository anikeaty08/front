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
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
slate: {
850: '#1e293b',
900: '#0f172a',
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'slide-up': 'slideUp 0.8s ease-out forwards',
'fade-in': 'fadeIn 1s ease-out forwards',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
slideUp: {
'0%': { transform: 'translateY(20px)', opacity: '0' },
'100%': { transform: 'translateY(0)', opacity: '1' },
},
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
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
      

<nav className="fixed top-0 w-full z-50 glass border-b border-slate-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white font-bold text-sm tracking-tighter">X2</div>
<span className="font-semibold text-lg tracking-tight text-slate-900">X2O.ai</span>
</div>
<div className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#problem">Problem</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#solution">Solution</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#how-it-works">How it Works</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center space-x-4">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 hidden sm:block" href="#">Log in</a>
<a className="px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-200/50" href="#">Get Started</a>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 -z-10 gradient-bg opacity-50"></div>
<div className="absolute inset-0 -z-10 grid-bg opacity-[0.4]"></div>

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl -z-10 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

<div className="lg:col-span-7 text-center lg:text-left space-y-8 animate-slide-up">
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                        While you slept,<br/>
                        your AI just <span className="gradient-text">booked an appointment.</span>
</h1>
<p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        Capture leads instantly on WhatsApp using human-like AI. Qualify prospects, handle objections, and schedule meetings 24/7 without lifting a finger.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-900/10 flex items-center justify-center gap-2" href="#">
                            Start Free Trial
                            <span className="iconify" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-all hover:border-slate-300 flex items-center justify-center gap-2" href="#">
<span className="text-blue-600" data-icon="lucide:play-circle" data-width="18"></span>
                            View Demo
                        </a>
</div>
<p className="text-sm text-slate-500 flex items-center justify-center lg:justify-start gap-2">
<span className="iconify text-green-500" data-icon="lucide:check-circle-2" data-width="16"></span>
                        No credit card required • 14-day free trial
                    </p>

<div className="pt-8 border-t border-slate-200/60 mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">Trusted By</div>
<span className="iconify text-slate-800" data-icon="simple-icons:meta" data-width="24"></span>
<span className="iconify text-slate-800" data-icon="simple-icons:ycombinator" data-width="24"></span>
<span className="iconify text-slate-800" data-icon="simple-icons:stripe" data-width="40"></span>
<div className="flex items-center gap-1 border border-slate-300 rounded px-2 py-0.5">
<span className="iconify text-green-600" data-icon="lucide:shield-check" data-width="14"></span>
<span className="text-xs font-mono text-slate-600">SOC2</span>
</div>
</div>
</div>

<div className="lg:col-span-5 mt-16 lg:mt-0 relative flex justify-center perspective-1000">
<div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] shadow-2xl border-[8px] border-slate-800 animate-float overflow-hidden z-10">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20"></div>

<div className="w-full h-full bg-[#E5DDD5] overflow-hidden relative flex flex-col">

<div className="bg-[#075E54] h-20 px-4 pt-8 flex items-center gap-3 shadow-sm z-10">
<span className="iconify text-white" data-icon="lucide:arrow-left" data-width="20"></span>
<div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:bot" data-width="20"></span>
</div>
<div className="flex flex-col">
<span className="text-white text-sm font-medium">X2O Assistant</span>
<span className="text-white/80 text-[10px]">Online</span>
</div>
</div>

<div className="flex-1 p-4 flex flex-col space-y-4 overflow-hidden relative">

<div className="absolute inset-0 opacity-[0.06] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat"></div>

<div className="relative z-10 flex flex-col gap-3">

<div className="self-end bg-[#DCF8C6] p-3 rounded-lg rounded-tr-none shadow-sm max-w-[85%] chat-anim-1">
<p className="text-[13px] text-slate-800">Hi, can I book a demo for next Tuesday?</p>
<div className="flex justify-end mt-1">
<span className="text-[10px] text-slate-500">10:42 AM</span>
<span className="iconify text-blue-500 ml-1" data-icon="lucide:check-check" data-width="12"></span>
</div>
</div>

<div className="self-start bg-white p-3 rounded-lg rounded-tl-none shadow-sm w-16 chat-anim-2 hidden-after-anim absolute top-[50px]">
<div className="flex gap-1">
<div className="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
<div className="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
<div className="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
</div>
</div>

<div className="self-start bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] chat-anim-3">
<p className="text-[13px] text-slate-800">I can help with that! I have slots available at 10 AM or 2 PM EST. Which works better?</p>
<span className="text-[10px] text-slate-400 mt-1 block">10:42 AM</span>
</div>

<div className="self-end bg-[#DCF8C6] p-3 rounded-lg rounded-tr-none shadow-sm max-w-[85%] chat-anim-4">
<p className="text-[13px] text-slate-800">2 PM works perfectly.</p>
<div className="flex justify-end mt-1">
<span className="text-[10px] text-slate-500">10:43 AM</span>
<span className="iconify text-blue-500 ml-1" data-icon="lucide:check-check" data-width="12"></span>
</div>
</div>

<div className="self-center mt-4 bg-white/90 backdrop-blur border border-green-200 p-4 rounded-xl shadow-lg w-full transform transition-all duration-700 delay-[5000ms] opacity-0 translate-y-4" style={{animation: 'popIn 0.6s ease-out 5.5s forwards'}}>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
<span className="iconify text-green-600" data-icon="lucide:calendar-check" data-width="16"></span>
</div>
<div>
<p className="text-xs font-semibold text-slate-800">Confirmed!</p>
<p className="text-[10px] text-slate-500">Tue, Oct 24 • 2:00 PM EST</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -right-8 top-20 bg-white p-3 rounded-lg shadow-lg flex items-center gap-2 animate-bounce z-20" style={{animationDuration: '3s'}}>
<span className="iconify text-green-500" data-icon="lucide:message-circle" data-width="20"></span>
<div className="text-xs font-medium text-slate-700">Lead Qualified</div>
</div>
<div className="absolute -left-8 bottom-32 bg-white p-3 rounded-lg shadow-lg flex items-center gap-2 animate-bounce z-20" style={{animationDuration: '4s', animationDelay: '1s'}}>
<span className="iconify text-blue-500" data-icon="lucide:calendar" data-width="20"></span>
<div className="text-xs font-medium text-slate-700">Meeting Set</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-4 text-center">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">Integrates seamlessly with</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale transition-all duration-300 hover:grayscale-0">
<div className="flex items-center gap-2">
<span className="iconify text-[#25D366]" data-icon="simple-icons:whatsapp" data-width="24"></span>
<span className="font-semibold text-slate-700">WhatsApp</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-[#00A1E0]" data-icon="simple-icons:salesforce" data-width="28"></span>
<span className="font-semibold text-slate-700">Salesforce</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-[#FF5C35]" data-icon="simple-icons:hubspot" data-width="24"></span>
<span className="font-semibold text-slate-700">HubSpot</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-[#6559CC]" data-icon="simple-icons:slack" data-width="24"></span>
<span className="font-semibold text-slate-700">Slack</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-[#4285F4]" data-icon="simple-icons:googlecalendar" data-width="24"></span>
<span className="font-semibold text-slate-700">Calendar</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="problem">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                        The "dumb chatbot" era is over.<br/>
<span className="text-slate-400">Stop losing leads to bad UX.</span>
</h2>
<p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        Traditional chatbots feel robotic, get stuck in loops, and frustrate your high-value prospects. You spend money on ads, only to have a bot drop the ball when it matters most.
                    </p>
<div className="space-y-4">
<div className="flex gap-4 items-start">
<div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
<span className="iconify text-red-500" data-icon="lucide:x" data-width="20"></span>
</div>
<div>
<h4 className="font-semibold text-slate-900">Rigid Logic Trees</h4>
<p className="text-sm text-slate-500">If the customer goes off-script, the bot fails.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
<span className="iconify text-red-500" data-icon="lucide:clock" data-width="20"></span>
</div>
<div>
<h4 className="font-semibold text-slate-900">Slow Hand-offs</h4>
<p className="text-sm text-slate-500">Wait times kill conversion rates instantly.</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
<div className="bg-slate-50 border-b border-slate-100 p-4 grid grid-cols-3 gap-4">
<div className="col-span-1 text-xs font-semibold text-slate-500 uppercase">Capability</div>
<div className="col-span-1 text-xs font-semibold text-slate-500 uppercase text-center">Others</div>
<div className="col-span-1 text-xs font-semibold text-blue-600 uppercase text-center">What You Need</div>
</div>
<div className="divide-y divide-slate-100">

<div className="p-4 grid grid-cols-3 gap-4 hover:bg-slate-50 transition-colors items-center">
<div className="text-sm font-medium text-slate-900">Context Awareness</div>
<div className="flex justify-center"><span className="iconify text-red-400" data-icon="lucide:x" data-width="18"></span></div>
<div className="flex justify-center"><div className="bg-green-100 text-green-600 p-1 rounded-full"><span className="iconify" data-icon="lucide:check" data-width="16"></span></div></div>
</div>

<div className="p-4 grid grid-cols-3 gap-4 hover:bg-slate-50 transition-colors items-center">
<div className="text-sm font-medium text-slate-900">Human-like Tone</div>
<div className="flex justify-center"><span className="iconify text-red-400" data-icon="lucide:x" data-width="18"></span></div>
<div className="flex justify-center"><div className="bg-green-100 text-green-600 p-1 rounded-full"><span className="iconify" data-icon="lucide:check" data-width="16"></span></div></div>
</div>

<div className="p-4 grid grid-cols-3 gap-4 hover:bg-slate-50 transition-colors items-center">
<div className="text-sm font-medium text-slate-900">Instant Booking</div>
<div className="flex justify-center"><span className="iconify text-red-400" data-icon="lucide:x" data-width="18"></span></div>
<div className="flex justify-center"><div className="bg-green-100 text-green-600 p-1 rounded-full"><span className="iconify" data-icon="lucide:check" data-width="16"></span></div></div>
</div>

<div className="p-4 grid grid-cols-3 gap-4 hover:bg-slate-50 transition-colors items-center">
<div className="text-sm font-medium text-slate-900">Handling Objections</div>
<div className="flex justify-center"><span className="iconify text-red-400" data-icon="lucide:x" data-width="18"></span></div>
<div className="flex justify-center"><div className="bg-green-100 text-green-600 p-1 rounded-full"><span className="iconify" data-icon="lucide:check" data-width="16"></span></div></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden" id="solution">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent opacity-60"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="text-center mb-16">
<span className="text-blue-600 font-medium text-sm tracking-wider uppercase">The X2O Difference</span>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mt-2">Turning Conversations into Revenue</h2>
</div>
<div className="grid md:grid-cols-2 gap-8 lg:gap-12">

<div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 opacity-80 hover:opacity-100 transition-opacity">
<div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
<span className="iconify text-red-500" data-icon="lucide:alert-circle" data-width="20"></span>
<h3 className="font-medium text-slate-500">Standard Chatbot</h3>
</div>
<div className="space-y-4">
<div className="flex gap-3">
<div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center shrink-0">
<span className="iconify text-slate-500" data-icon="lucide:bot" data-width="16"></span>
</div>
<div className="bg-slate-100 p-3 rounded-lg rounded-tl-none text-sm text-slate-600">
                                Select an option from the menu: 1. Sales, 2. Support
                            </div>
</div>
<div className="flex gap-3 flex-row-reverse">
<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
<span className="iconify text-blue-500" data-icon="lucide:user" data-width="16"></span>
</div>
<div className="bg-blue-50 p-3 rounded-lg rounded-tr-none text-sm text-slate-800">
                                I want to know about pricing for enterprise.
                            </div>
</div>
<div className="flex gap-3">
<div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center shrink-0">
<span className="iconify text-slate-500" data-icon="lucide:bot" data-width="16"></span>
</div>
<div className="bg-slate-100 p-3 rounded-lg rounded-tl-none text-sm text-slate-600 border-l-2 border-red-400">
                                Sorry, I didn't understand. Please type "Menu".
                            </div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-xl shadow-blue-900/5 border border-blue-100 p-6 relative overflow-hidden ring-1 ring-blue-100">
<div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-100 to-transparent -z-0"></div>
<div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4 relative z-10">
<span className="iconify text-blue-600" data-icon="lucide:sparkles" data-width="20"></span>
<h3 className="font-semibold text-slate-900">X2O AI Agent</h3>
</div>
<div className="space-y-4 relative z-10">
<div className="flex gap-3">
<div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-violet-600 rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/30">
<span className="iconify text-white" data-icon="lucide:bot" data-width="16"></span>
</div>
<div className="bg-white border border-slate-100 shadow-sm p-3 rounded-lg rounded-tl-none text-sm text-slate-800">
                                How can I help you grow your business today?
                            </div>
</div>
<div className="flex gap-3 flex-row-reverse">
<div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
<span className="iconify text-slate-500" data-icon="lucide:user" data-width="16"></span>
</div>
<div className="bg-slate-50 p-3 rounded-lg rounded-tr-none text-sm text-slate-700">
                                I want to know about pricing for enterprise.
                            </div>
</div>
<div className="flex gap-3">
<div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-violet-600 rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/30">
<span className="iconify text-white" data-icon="lucide:bot" data-width="16"></span>
</div>
<div className="bg-blue-50 border border-blue-100 p-3 rounded-lg rounded-tl-none text-sm text-slate-800">
<p>Our Enterprise plan starts at $999/mo and includes unlimited seats. Would you like to schedule a quick call with our Sales Director to discuss custom volume discounts?</p>
<div className="mt-2 flex gap-2">
<button className="text-xs bg-white border border-blue-200 text-blue-600 px-2 py-1 rounded shadow-sm hover:bg-blue-50">Yes, book call</button>
<button className="text-xs bg-white border border-slate-200 text-slate-600 px-2 py-1 rounded shadow-sm hover:bg-slate-50">Send PDF</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="how-it-works">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-20">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">Setup in minutes, not months</h2>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-200 -z-10"></div>
<div className="grid md:grid-cols-3 gap-12">

<div className="relative group">
<div className="w-24 h-24 mx-auto bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center shadow-sm group-hover:-translate-y-2 transition-transform duration-300 mb-6 z-10">
<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
<span className="iconify" data-icon="lucide:file-text" data-width="24"></span>
</div>
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">1</div>
</div>
<h3 className="text-xl font-semibold text-center text-slate-900 mb-2">Upload Knowledge</h3>
<p className="text-center text-slate-500 text-sm">Simply upload PDFs, website URLs, or past chat logs. X2O learns your business instantly.</p>

<div className="mt-6 mx-auto w-4/5 bg-slate-50 rounded border border-slate-200 p-2 text-[10px] font-mono text-slate-400">
                            &gt; Uploading "pricing.pdf"...<br/>
                            &gt; Parsing data...<br/>
<span className="text-green-600">&gt; Ready.</span>
</div>
</div>

<div className="relative group">
<div className="w-24 h-24 mx-auto bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center shadow-sm group-hover:-translate-y-2 transition-transform duration-300 mb-6 z-10">
<div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600">
<span className="iconify" data-icon="lucide:puzzle" data-width="24"></span>
</div>
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">2</div>
</div>
<h3 className="text-xl font-semibold text-center text-slate-900 mb-2">Connect Channels</h3>
<p className="text-center text-slate-500 text-sm">One-click integration with WhatsApp Business API, Instagram, or embedded web chat.</p>
</div>

<div className="relative group">
<div className="w-24 h-24 mx-auto bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center shadow-sm group-hover:-translate-y-2 transition-transform duration-300 mb-6 z-10">
<div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600">
<span className="iconify" data-icon="lucide:rocket" data-width="24"></span>
</div>
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">3</div>
</div>
<h3 className="text-xl font-semibold text-center text-slate-900 mb-2">Go Live</h3>
<p className="text-center text-slate-500 text-sm">Watch as X2O starts handling conversations, qualifying leads, and booking meetings.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800 aspect-video group cursor-pointer">

<div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-all z-20">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
<span className="iconify text-white ml-1" data-icon="lucide:play" data-width="32"></span>
</div>
</div>

<div className="p-6 h-full flex flex-col">
<div className="flex items-center justify-between mb-4 border-b border-slate-700 pb-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="text-xs text-slate-400 font-mono">X2O Dashboard</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-slate-700/50 p-4 rounded h-24"></div>
<div className="bg-slate-700/50 p-4 rounded h-24"></div>
<div className="bg-slate-700/50 p-4 rounded h-32 col-span-2"></div>
</div>
</div>
</div>

<div>
<h2 className="text-3xl font-semibold tracking-tight mb-2">Real Results</h2>
<p className="text-slate-400 mb-10">Average performance improvements across 500+ active businesses.</p>
<div className="grid grid-cols-2 gap-6">

<div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
<div className="flex justify-between items-start mb-4">
<span className="text-slate-400 text-sm">Response Time</span>
<span className="iconify text-blue-400" data-icon="lucide:zap" data-width="20"></span>
</div>
<div className="text-3xl font-bold gradient-text">2s</div>
<div className="text-xs text-slate-500 mt-1">From 4 hours avg</div>
</div>

<div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
<div className="flex justify-between items-start mb-4">
<span className="text-slate-400 text-sm">Conversion</span>
<span className="iconify text-green-400" data-icon="lucide:trending-up" data-width="20"></span>
</div>
<div className="text-3xl font-bold text-white">+40%</div>
<div className="text-xs text-slate-500 mt-1">Lead to Meeting</div>
</div>

<div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
<div className="flex justify-between items-start mb-4">
<span className="text-slate-400 text-sm">Cost / Lead</span>
<span className="iconify text-purple-400" data-icon="lucide:dollar-sign" data-width="20"></span>
</div>
<div className="text-3xl font-bold text-white">-65%</div>
<div className="text-xs text-slate-500 mt-1">Support Overhead</div>
</div>

<div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
<div className="flex justify-between items-start mb-4">
<span className="text-slate-400 text-sm">Availability</span>
<span className="iconify text-yellow-400" data-icon="lucide:globe" data-width="20"></span>
</div>
<div className="text-3xl font-bold text-white">24/7</div>
<div className="text-xs text-slate-500 mt-1">No downtime</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-4 text-center mb-12">
<h2 className="text-3xl font-semibold text-slate-900">How Lead Gen Works</h2>
<p className="text-slate-600 mt-2">Automated qualification flow that feels human.</p>
</div>
<div className="max-w-xl mx-auto px-4">
<div className="relative space-y-8 before:absolute before:inset-0 before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-blue-100 bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
<span className="iconify text-blue-600" data-icon="lucide:message-square" data-width="24"></span>
</div>
<div className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] bg-white p-4 rounded-xl border border-slate-100 shadow-lg md:group-odd:mr-8 md:group-even:ml-8">
<h3 className="font-semibold text-slate-900 text-sm">Prospect Clicks Ad</h3>
<p className="text-xs text-slate-500">Redirects to WhatsApp immediately.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-violet-100 bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
<span className="iconify text-violet-600" data-icon="lucide:brain-circuit" data-width="24"></span>
</div>
<div className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] bg-white p-4 rounded-xl border border-slate-100 shadow-lg md:group-odd:mr-8 md:group-even:ml-8">
<h3 className="font-semibold text-slate-900 text-sm">AI Qualifies</h3>
<p className="text-xs text-slate-500">Ask budget, timeline, and needs.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-green-100 bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
<span className="iconify text-green-600" data-icon="lucide:calendar-check" data-width="24"></span>
</div>
<div className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] bg-white p-4 rounded-xl border border-green-100 shadow-lg md:group-odd:mr-8 md:group-even:ml-8">
<h3 className="font-semibold text-slate-900 text-sm">Meeting Booked</h3>
<p className="text-xs text-slate-500">Synced to your Google/Outlook calendar.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">Simple, transparent pricing</h2>
<p className="text-slate-600 mt-4">Start for free, scale as you grow.</p>
</div>

<div className="max-w-lg mx-auto mb-16">
<div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl p-1 shadow-xl">
<div className="bg-white rounded-xl p-6 text-center">
<h3 className="font-bold text-lg text-slate-900">Try X2O free for 14 days</h3>
<p className="text-slate-500 text-sm mb-4">No credit card required. Full feature access.</p>
<button className="w-full py-2 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors">Start Free Trial</button>
</div>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8 items-start">

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
<h3 className="text-lg font-semibold text-slate-900">Starter</h3>
<div className="mt-4 mb-6">
<span className="text-4xl font-bold text-slate-900">$299</span>
<span className="text-slate-500">/mo</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-2 text-sm text-slate-600">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="16"></span>
                            1,000 Conversations/mo
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="16"></span>
                            1 WhatsApp Number
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="16"></span>
                            Email Support
                        </li>
</ul>
<button className="w-full py-2.5 border border-slate-200 rounded-lg text-slate-700 font-medium hover:bg-slate-50">Choose Starter</button>
</div>

<div className="bg-white rounded-2xl p-8 border-2 border-blue-600 shadow-xl relative transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Most Popular</div>
<h3 className="text-lg font-semibold text-slate-900">Growth</h3>
<div className="mt-4 mb-6">
<span className="text-4xl font-bold text-slate-900">$599</span>
<span className="text-slate-500">/mo</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-2 text-sm text-slate-600">
<span className="iconify text-blue-600" data-icon="lucide:check" data-width="16"></span>
                            10,000 Conversations/mo
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<span className="iconify text-blue-600" data-icon="lucide:check" data-width="16"></span>
                            3 WhatsApp Numbers
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<span className="iconify text-blue-600" data-icon="lucide:check" data-width="16"></span>
                            CRM Integrations (HubSpot)
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<span className="iconify text-blue-600" data-icon="lucide:check" data-width="16"></span>
                            Priority Support
                        </li>
</ul>
<button className="w-full py-2.5 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700 shadow-lg shadow-blue-500/30">Choose Growth</button>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
<h3 className="text-lg font-semibold text-slate-900">Scale</h3>
<div className="mt-4 mb-6">
<span className="text-4xl font-bold text-slate-900">$999</span>
<span className="text-slate-500">/mo</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-2 text-sm text-slate-600">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="16"></span>
                            Unlimited Conversations
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="16"></span>
                            API Access
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="16"></span>
                            Dedicated Account Manager
                        </li>
</ul>
<button className="w-full py-2.5 border border-slate-200 rounded-lg text-slate-700 font-medium hover:bg-slate-50">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-2xl mx-auto px-4">
<div className="relative bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-200">
<span className="iconify text-slate-200 absolute top-8 left-8" data-icon="lucide:quote" data-width="48"></span>
<blockquote className="relative z-10 text-xl font-medium text-slate-800 text-center leading-relaxed">
                    "I didn't just build this with AI. I built it <span className="text-blue-600">for AI</span>. That's the difference. We focused on creating the most natural conversation flow possible."
                </blockquote>
<div className="mt-8 flex items-center justify-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">

<div className="w-full h-full bg-gradient-to-tr from-slate-400 to-slate-300"></div>
</div>
<div className="text-left">
<div className="font-semibold text-slate-900 text-sm">Alex Chen</div>
<div className="text-xs text-slate-500">Founder, X2O.ai</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-slate-900 -z-20"></div>
<div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-900/50 to-purple-900/50"></div>
<div className="absolute inset-0 -z-10 opacity-20" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="max-w-4xl mx-auto px-4 text-center">
<h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">Ready to automate your growth?</h2>
<p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">Join 500+ companies booking appointments on autopilot. Set up takes less than 15 minutes.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-900 font-semibold text-lg hover:bg-slate-100 transition-all hover:scale-105" href="#">
                    Start Free Trial
                </a>
<a className="w-full sm:w-auto px-8 py-4 rounded-full border border-slate-600 text-white font-medium hover:bg-white/10 transition-all" href="#">
                    Talk to Sales
                </a>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white font-bold text-xs">X2</div>
<span className="text-slate-100 font-semibold">X2O.ai</span>
</div>
<div className="text-sm">
                © 2024 X2O Inc. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="20"></span></a>
</div>
</div>
</footer>

    </>
  );
}
