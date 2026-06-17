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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="bg-neutral-100 text-neutral-950 h-8 w-8 rounded flex items-center justify-center font-medium tracking-tighter text-sm group-hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300">
                    BF
                </div>
<span className="text-sm font-medium tracking-tight text-neutral-100">BookFlow PH</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-neutral-400">
<a className="hover:text-neutral-100 transition-colors" href="#">Features</a>
<a className="hover:text-neutral-100 transition-colors" href="#">Integrations</a>
<a className="hover:text-neutral-100 transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-neutral-400 hover:text-neutral-100 transition-colors hidden sm:block" href="#">Log in</a>
<a className="bg-neutral-100 hover:bg-neutral-200 text-neutral-950 text-xs font-medium px-4 py-2 rounded-full transition-all duration-300" href="#">
                    Get Started
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] opacity-30 pointer-events-none">
<div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
<div className="absolute top-0 right-1/4 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
</div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="flex flex-col items-center text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-indigo-300 mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    Now optimized for FB Messenger &amp; Viber
                </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-6 max-w-4xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                    Your 24/7 Front Desk, <br/> running on Autopilot.
                </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl font-light leading-relaxed mb-10">
                    The AI assistant that handles bookings, inquiries, and cancellations across Messenger, Viber, and SMS. No extra staff needed.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-white text-neutral-950 font-medium text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group">
                        Start Automation
                        <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="w-full sm:w-auto h-12 px-8 rounded-full border border-neutral-800 text-neutral-300 font-medium text-sm hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                        View Demo
                    </button>
</div>
<p className="mt-6 text-xs text-neutral-500 font-normal">
                    No credit card required • 5-minute setup
                </p>
</div>

<div className="relative max-w-4xl mx-auto">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-blue-500/20 rounded-2xl blur opacity-50"></div>
<div className="relative bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl">

<div className="flex items-center px-4 py-3 border-b border-white/5 bg-neutral-900/50">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="mx-auto text-xs font-medium text-neutral-500 flex items-center gap-1">
<span className="iconify" data-icon="lucide:message-circle" data-width="10"></span>
                            m.me/your-business
                        </div>
</div>
<div className="grid md:grid-cols-2 h-[400px]">

<div className="p-6 border-r border-white/5 hidden md:flex flex-col bg-neutral-900/50">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-white">Today's Schedule</h3>
<span className="iconify text-neutral-500" data-icon="lucide:calendar" data-width="16"></span>
</div>
<div className="space-y-3">
<div className="p-3 rounded-lg bg-neutral-800/50 border border-white/5 flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-xs font-medium">MT</div>
<div>
<div className="text-sm text-neutral-200">Miguel Tan</div>
<div className="text-xs text-neutral-500">Haircut • 2:00 PM</div>
</div>
<div className="ml-auto text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded">Confirmed</div>
</div>
<div className="p-3 rounded-lg bg-neutral-800/50 border border-white/5 flex items-center gap-3 opacity-60">
<div className="h-8 w-8 rounded-full bg-pink-500/10 text-pink-400 flex items-center justify-center text-xs font-medium">AS</div>
<div>
<div className="text-sm text-neutral-200">Ana Santos</div>
<div className="text-xs text-neutral-500">Consultation • 3:30 PM</div>
</div>
</div>
</div>
<div className="mt-auto">
<div className="text-xs text-neutral-500 mb-2">Recent Activity</div>
<div className="flex gap-2">
<div className="px-2 py-1 rounded bg-neutral-800 border border-white/5 text-[10px] text-neutral-400">Pinaalalahanan</div>
<div className="px-2 py-1 rounded bg-neutral-800 border border-white/5 text-[10px] text-neutral-400">Inquiry answered</div>
</div>
</div>
</div>

<div className="flex flex-col bg-neutral-950">
<div className="flex-1 p-6 space-y-4 overflow-y-auto">

<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex-shrink-0 flex items-center justify-center">
<span className="iconify text-neutral-400" data-icon="lucide:user" data-width="14"></span>
</div>
<div className="bg-neutral-800 text-neutral-200 text-sm px-4 py-2 rounded-2xl rounded-tl-none max-w-[85%] font-light">
                                        Hi po! May available slot pa kayo for facial this Saturday?
                                    </div>
</div>

<div className="flex gap-3 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-indigo-600 flex-shrink-0 flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:sparkles" data-width="14"></span>
</div>
<div className="bg-indigo-600/10 border border-indigo-500/20 text-indigo-100 text-sm px-4 py-2 rounded-2xl rounded-tr-none max-w-[85%] font-light">
                                        Hello! Yes po, meron pa kaming slots ng 10:00 AM at 2:30 PM. Ano pong mas okay sa inyo?
                                    </div>
</div>

<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex-shrink-0 flex items-center justify-center">
<span className="iconify text-neutral-400" data-icon="lucide:user" data-width="14"></span>
</div>
<div className="bg-neutral-800 text-neutral-200 text-sm px-4 py-2 rounded-2xl rounded-tl-none max-w-[85%] font-light">
                                        10:00 AM na lang po thanks.
                                    </div>
</div>

<div className="flex gap-3 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-indigo-600 flex-shrink-0 flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:sparkles" data-width="14"></span>
</div>
<div className="bg-indigo-600/10 border border-indigo-500/20 text-indigo-100 text-sm px-4 py-2 rounded-2xl rounded-tr-none max-w-[85%] font-light">
                                        Sige po! Booked na kayo for Saturday, 10:00 AM. Magpapadala kami ng reminder before your sched. Salamat!
                                    </div>
</div>
</div>

<div className="p-4 border-t border-white/5 bg-neutral-900/50">
<div className="flex gap-2 items-center bg-neutral-950 border border-neutral-800 rounded-full px-4 py-2">
<input className="bg-transparent border-none outline-none text-sm text-white flex-1 placeholder-neutral-600 font-light" disabled="" placeholder="Type a message..." type="text"/>
<span className="iconify text-neutral-600" data-icon="lucide:send" data-width="16"></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Complete Automation</h2>
<p className="text-neutral-400 font-light max-w-lg mx-auto">Focus on your business while our AI handles the inquiries. No more "How much?" and "Available pa po?" repeated 100 times.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-all duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="h-10 w-10 bg-neutral-800 rounded-lg flex items-center justify-center mb-6 text-indigo-400 border border-white/5">
<span className="iconify" data-icon="lucide:message-square" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Omnichannel Support</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                        Seamlessly integrates with Facebook Messenger, Viber, and SMS. Customers can book from the apps they use everyday.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-all duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="h-10 w-10 bg-neutral-800 rounded-lg flex items-center justify-center mb-6 text-purple-400 border border-white/5">
<span className="iconify" data-icon="lucide:clock" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">24/7 Availability</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                        Never miss a lead. The AI responds instantly, day or night, handling scheduling even when you're sleeping or busy.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-all duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="h-10 w-10 bg-neutral-800 rounded-lg flex items-center justify-center mb-6 text-blue-400 border border-white/5">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Zero Tech Skills</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                        Connect your calendar and FB Page. No complex flows to build. The AI understands Taglish and natural language.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
<div className="p-8 rounded-2xl bg-neutral-900/30 border border-white/5 flex flex-col sm:flex-row items-start sm:items-center gap-6">
<div className="flex-1">
<h3 className="text-lg font-medium text-white mb-2">Smart Reminders &amp; Cancellations</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                            Reduce no-shows by 80%. The system sends automatic reminders and handles rescheduling instantly so you don't lose the slot.
                        </p>
</div>
<div className="w-full sm:w-auto flex justify-center">

<div className="w-48 bg-neutral-950 border border-neutral-800 rounded-lg p-3 shadow-lg">
<div className="flex items-center gap-2 mb-2">
<span className="iconify text-green-500" data-icon="lucide:message-circle" data-width="12"></span>
<span className="text-[10px] text-neutral-500">Messages • Now</span>
</div>
<div className="text-[11px] text-neutral-300 leading-snug">
                                Hi Ma'am/Sir! Pa-remind lang po sa appointment niyo bukas @ 10AM. Reply YES to confirm.
                            </div>
</div>
</div>
</div>
<div className="p-8 rounded-2xl bg-neutral-900/30 border border-white/5 flex flex-col sm:flex-row items-start sm:items-center gap-6">
<div className="flex-1">
<h3 className="text-lg font-medium text-white mb-2">FAQ Handling</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                            "Hm po?" "Saan location?" Train the AI once on your FAQs, and it answers repetitive questions automatically.
                        </p>
</div>
<div className="w-full sm:w-auto flex justify-center">
<div className="h-12 w-12 bg-neutral-800 rounded-full flex items-center justify-center border border-white/10 relative">
<span className="iconify text-white" data-icon="lucide:help-circle" data-width="20"></span>
<div className="absolute -top-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-neutral-900 flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:check" data-width="8"></span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-neutral-900/20">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-2xl font-medium tracking-tight text-white mb-12">Works with your favorite tools</h2>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:facebook" data-width="24"></span>
<span className="text-lg font-semibold">Messenger</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:phone-call" data-width="24"></span>
<span className="text-lg font-semibold">Viber</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:calendar-days" data-width="24"></span>
<span className="text-lg font-semibold">G-Cal</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:smartphone" data-width="24"></span>
<span className="text-lg font-semibold">SMS</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:globe" data-width="24"></span>
<span className="text-lg font-semibold">Website</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-950 to-neutral-950 -z-10"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Ready to automate your front desk?</h2>
<p className="text-lg text-neutral-400 font-light mb-10 max-w-xl mx-auto">
                Join service businesses in the PH saving 10+ hours a week. Set up takes less than 5 minutes.
            </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
<input className="flex-1 bg-neutral-900 border border-neutral-700 text-white px-5 py-3 rounded-full outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-light placeholder:text-neutral-600" placeholder="Enter your email" type="email"/>
<button className="bg-white text-neutral-950 px-8 py-3 rounded-full font-medium hover:bg-neutral-200 transition-colors whitespace-nowrap" type="button">
                    Get Access
                </button>
</form>
<div className="text-xs text-neutral-600 flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:check-circle" data-width="12"></span>
                14-day free trial, cancel anytime.
            </div>
</div>
</section>

<footer className="border-t border-white/5 py-12 px-6 bg-neutral-950">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="bg-neutral-800 text-neutral-200 h-6 w-6 rounded flex items-center justify-center font-medium text-xs">BF</div>
<span className="text-sm text-neutral-500">© 2024 BookFlow PH</span>
</div>
<div className="flex gap-6 text-sm text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Facebook</a>
</div>
</div>
</footer>

    </>
  );
}
