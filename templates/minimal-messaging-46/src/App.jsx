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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter flex items-center gap-2 z-50" href="#">
                Aura
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#philosophy">Philosophy</a>
<a className="hover:text-neutral-900 transition-colors" href="#features">Features</a>
<a className="hover:text-neutral-900 transition-colors" href="#privacy">Privacy</a>
</div>
<a className="bg-neutral-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-neutral-800 transition-all duration-300 active:scale-95" href="#">
                Download
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center z-10 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-medium text-neutral-600 mb-8 animate-fade-up">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Aura 1.0 is now available
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-neutral-900 mb-6 max-w-4xl animate-fade-up delay-100 leading-[1.1]">
                Focus on the <br/> <span className="text-neutral-400">conversation.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-500 font-normal max-w-2xl mb-10 leading-relaxed tracking-tight animate-fade-up delay-200">
                Aura strips away the noise. No stories, no feeds, no clutter. Just you and the people who matter most in a pure, encrypted space.
            </p>
<div className="flex flex-col md:flex-row items-center gap-4 animate-fade-up delay-300">
<button className="h-12 px-8 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/20 active:scale-95 flex items-center gap-2">
                    Start Chatting
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-full bg-white border border-neutral-200 text-neutral-600 font-medium hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-300 flex items-center gap-2">
<iconify-icon icon="lucide:play-circle" strokeWidth="1.5" width="18"></iconify-icon>
                    Watch the Film
                </button>
</div>
</div>

<div className="mt-20 max-w-5xl mx-auto px-6 relative animate-fade-up delay-300">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-100 to-violet-100 opacity-50 rounded-full blur-3xl -z-10"></div>
<div className="bg-white rounded-[2.5rem] shadow-2xl border border-neutral-200 overflow-hidden relative mx-auto max-w-[360px] md:max-w-3xl aspect-[9/16] md:aspect-[16/10]">

<div className="bg-white/90 backdrop-blur-md border-b border-neutral-100 p-4 md:p-6 flex items-center justify-between sticky top-0 z-20">
<div className="flex items-center gap-4">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
<span className="text-sm font-semibold tracking-tight text-neutral-900">Sarah M.</span>
<span className="text-[10px] font-medium text-neutral-400">Active now</span>
</div>
<iconify-icon className="text-neutral-400" icon="lucide:info" strokeWidth="1.5" width="20"></iconify-icon>
</div>

<div className="p-6 md:p-10 flex flex-col gap-6 h-full bg-white relative">

<div className="flex justify-center my-4">
<span className="text-[10px] font-medium text-neutral-400 bg-neutral-50 px-3 py-1 rounded-full">Today 9:41 AM</span>
</div>

<div className="flex items-end gap-3 max-w-[85%] self-start group">
<div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-xs font-semibold text-neutral-500">S</div>
<div className="bg-neutral-100 rounded-2xl rounded-bl-sm px-5 py-3 text-sm md:text-base text-neutral-800 leading-relaxed relative">
                            Did you see the new interface designs?
                        </div>
</div>

<div className="flex items-end gap-3 max-w-[85%] self-end flex-row-reverse group">
<div className="bg-blue-600 rounded-2xl rounded-br-sm px-5 py-3 text-sm md:text-base text-white leading-relaxed shadow-sm shadow-blue-500/20">
                            Yes! They look incredibly clean. The reduction of clutter really helps focus.
                        </div>
</div>

<div className="flex items-end gap-3 max-w-[85%] self-start group">
<div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-xs font-semibold text-neutral-500">S</div>
<div className="bg-neutral-100 rounded-2xl rounded-bl-sm px-5 py-3 text-sm md:text-base text-neutral-800 leading-relaxed">
                            Exactly. It feels like taking a breath of fresh air.
                        </div>
</div>

<div className="flex items-end gap-3 self-start">
<div className="w-8 h-8 rounded-full bg-white"></div> 
<div className="bg-neutral-50 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
<span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce"></span>
<span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce delay-100"></span>
<span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce delay-200"></span>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full bg-white border-t border-neutral-100 p-4 md:p-6 z-20">
<div className="flex items-center gap-3 bg-neutral-50 rounded-full px-2 py-2 border border-transparent focus-within:border-blue-500/30 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-500/10 transition-all duration-300">
<button className="w-8 h-8 flex items-center justify-center rounded-full text-neutral-400 hover:text-neutral-600 transition-colors">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<input className="bg-transparent flex-1 outline-none text-sm text-neutral-800 placeholder-neutral-400 h-8" disabled="" placeholder="iMessage" type="text"/>
<button className="w-8 h-8 flex items-center justify-center rounded-full text-blue-600 hover:bg-blue-50 transition-colors">
<iconify-icon icon="lucide:arrow-up" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-neutral-900 mb-4">Less is infinitely more.</h2>
<p className="text-neutral-500 max-w-lg mx-auto">We removed the features that distract you to perfect the ones that connect you.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-[2rem] shadow-sm border border-neutral-100 flex flex-col justify-between h-96 group hover:shadow-md transition-all duration-500">
<div>
<div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-neutral-900 mb-2">Zero-Knowledge Privacy</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                            Messages are encrypted on your device. We couldn't read them even if we wanted to. No trackers, no ads.
                        </p>
</div>
<div className="mt-auto">
<div className="h-1 w-full bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-600 w-3/4 rounded-full"></div>
</div>
<div className="flex justify-between mt-2 text-[10px] text-neutral-400 font-medium tracking-wide uppercase">
<span>Security</span>
<span>Industry Leading</span>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-[2rem] shadow-sm border border-neutral-100 md:col-span-2 relative overflow-hidden group hover:shadow-md transition-all duration-500">
<div className="relative z-10 max-w-md">
<div className="w-12 h-12 rounded-2xl bg-neutral-900 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-neutral-900 mb-2">Instantaneous Sync</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-8">
                            Built on a custom lightweight protocol. Aura syncs across your iPhone, iPad, and Mac instantly without draining your battery.
                        </p>
</div>

<div className="absolute right-0 top-0 h-full w-1/2 opacity-50 hidden md:block">
<div className="absolute inset-0 bg-gradient-to-l from-white via-transparent to-transparent z-10"></div>
<div className="flex flex-col gap-4 p-8 transform rotate-12 translate-x-12 opacity-30 group-hover:translate-x-8 transition-transform duration-700">
<div className="w-full h-12 bg-neutral-100 rounded-xl"></div>
<div className="w-3/4 h-12 bg-neutral-100 rounded-xl ml-auto"></div>
<div className="w-5/6 h-12 bg-neutral-100 rounded-xl"></div>
</div>
</div>
</div>

<div className="bg-neutral-900 p-8 rounded-[2rem] shadow-lg border border-neutral-800 text-white md:col-span-2 relative overflow-hidden group">
<div className="relative z-10 flex flex-col h-full justify-between">
<div>
<div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-6 backdrop-blur-md">
<iconify-icon icon="lucide:feather" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Featherweight Design</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-md">
                                The interface recedes so your content stands out. We use system-native components for a feel that is familiar yet distinctly refined.
                            </p>
</div>
<div className="flex gap-4 mt-8">
<div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-medium backdrop-blur-sm">Native Swift</div>
<div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-medium backdrop-blur-sm">12MB Size</div>
</div>
</div>
<div className="absolute -right-10 -bottom-20 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full group-hover:bg-blue-500/30 transition-colors duration-500"></div>
</div>

<div className="bg-white p-8 rounded-[2rem] shadow-sm border border-neutral-100 flex flex-col justify-center items-center text-center group hover:shadow-md transition-all duration-500">
<div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-50 to-indigo-50 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-blue-600" icon="lucide:smartphone" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-neutral-900">Haptic Touch</h3>
<p className="text-xs text-neutral-400 mt-2">Feel every interaction.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-20">
<div className="md:w-1/2">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-neutral-900 mb-6 leading-tight">
                    Calm by default. <br/>
<span className="text-neutral-300">Quiet by design.</span>
</h2>
<p className="text-lg text-neutral-500 leading-relaxed mb-8">
                    In a world screaming for your attention, Aura whispers. We don't use red badges or aggressive notifications. You check messages when you want to, not when an algorithm tells you to.
                </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm font-medium text-neutral-700">
<iconify-icon className="text-blue-600" icon="lucide:check" strokeWidth="2" width="18"></iconify-icon>
                        No algorithmic feed
                    </li>
<li className="flex items-center gap-3 text-sm font-medium text-neutral-700">
<iconify-icon className="text-blue-600" icon="lucide:check" strokeWidth="2" width="18"></iconify-icon>
                        Silent delivery options
                    </li>
<li className="flex items-center gap-3 text-sm font-medium text-neutral-700">
<iconify-icon className="text-blue-600" icon="lucide:check" strokeWidth="2" width="18"></iconify-icon>
                        Black &amp; White mode for focus
                    </li>
</ul>
</div>
<div className="md:w-1/2 relative">

<div className="aspect-square rounded-[3rem] bg-neutral-50 overflow-hidden relative border border-neutral-100">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-64 h-64 rounded-full border border-neutral-200 flex items-center justify-center animate-[pulse_4s_ease-in-out_infinite]">
<div className="w-48 h-48 rounded-full border border-neutral-200 flex items-center justify-center">
<div className="w-32 h-32 rounded-full bg-gradient-to-b from-blue-50 to-white shadow-sm border border-neutral-100 flex items-center justify-center">
<iconify-icon className="text-blue-600 opacity-50" icon="lucide:moon" strokeWidth="1.5" width="32"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-100">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-neutral-900 mb-6">Return to simplicity.</h2>
<p className="text-neutral-500 mb-10 text-lg">Join the beta and reclaim your attention span.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 bg-neutral-50 border border-neutral-200 rounded-full px-6 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" placeholder="Enter your email" type="email"/>
<button className="bg-neutral-900 text-white rounded-full px-8 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors shadow-lg shadow-neutral-900/10" type="button">
                    Get Early Access
                </button>
</form>
<p className="text-xs text-neutral-400 mt-6">No spam. Unsubscribe anytime.</p>
</div>
</section>

<footer className="bg-white py-12 border-t border-neutral-100">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tighter">Aura</span>
<span className="text-xs text-neutral-400">© 2024</span>
</div>
<div className="flex gap-8">
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon icon="lucide:instagram" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon icon="lucide:github" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
<div className="flex gap-6 text-xs font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
