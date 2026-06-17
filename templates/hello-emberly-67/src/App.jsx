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



// Configure Tailwind
tailwind.config = {
theme: {
extend: {
colors: {
navy: {
950: '#020617',
900: '#0f172a',
},
ember: {
400: '#fbbf24',
500: '#f59e0b',
600: '#d97706',
}
}
}
}
};

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
      

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#fbbf24] opacity-[0.06] blur-[120px] rounded-full animate-pulse-slow"></div>

<div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#d97706] opacity-[0.04] blur-[150px] rounded-full"></div>

<div className="absolute inset-0 bg-grid mask-image-gradient"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-[#fbbf24]/10 bg-[#020617]/80 backdrop-blur-xl transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-24 flex items-center justify-between">
<div aria-label="Hello Emberly Home" className="flex items-center gap-3 group cursor-pointer">

<div className="relative w-8 h-8">
<div className="absolute inset-0 rounded-full border border-[#fbbf24] opacity-80"></div>
<div className="absolute inset-2 rounded-full bg-[#fbbf24] opacity-40 blur-sm"></div>
</div>
<span className="text-[#f8fafc] font-medium text-xl tracking-tight">Hello Emberly</span>
</div>
<div className="hidden md:flex items-center gap-10 text-base font-medium text-slate-400">
<a className="hover:text-[#fbbf24] transition-colors focus-ring rounded-lg px-2 py-1" href="#">Philosophy</a>
<a className="hover:text-[#fbbf24] transition-colors focus-ring rounded-lg px-2 py-1" href="#">Safety</a>
<a className="hover:text-[#fbbf24] transition-colors focus-ring rounded-lg px-2 py-1" href="#">Community</a>
</div>
<div className="flex items-center gap-4">
<button className="px-6 py-3 bg-[#fbbf24] hover:bg-[#f59e0b] text-[#020617] text-sm font-semibold rounded-full transition-all shadow-[0_0_20px_rgba(251,191,36,0.2)] hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] focus-ring">
                    Begin a conversation
                </button>
</div>
</div>
</nav>

<main className="relative z-10 pt-40 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-center text-center">

<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#fbbf24]/20 bg-[#fbbf24]/5 text-[#fbbf24] text-xs uppercase tracking-widest font-medium mb-10 animate-float">
<span className="w-1.5 h-1.5 rounded-full bg-[#fbbf24] animate-pulse"></span>
            A quiet sanctuary
        </div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-[#f8fafc] tracking-tight leading-[1.1] mb-8 max-w-5xl">
            You are never <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] via-[#fcd34d] to-[#fbbf24]/60">alone in a village.</span>
</h1>
<p className="text-slate-300 text-xl md:text-2xl max-w-2xl mb-12 font-light leading-relaxed">
            A gentle companion for connection, memory, and purpose. 
            Rediscover the warmth of shared presence.
        </p>

<div className="flex flex-col sm:flex-row gap-6 mb-24">
<button className="px-8 py-4 bg-[#fbbf24] hover:bg-[#f59e0b] text-[#020617] text-lg font-medium rounded-full transition-all shadow-[0_0_25px_rgba(251,191,36,0.25)] hover:shadow-[0_0_40px_rgba(251,191,36,0.4)] hover:-translate-y-1 focus-ring">
                Begin a conversation
            </button>
<button className="px-8 py-4 bg-transparent border border-slate-700 hover:border-[#fbbf24]/50 text-slate-300 hover:text-white text-lg font-medium rounded-full transition-all focus-ring">
                Learn about our village
            </button>
</div>

<div className="relative w-full max-w-4xl h-[400px] md:h-[500px] mt-10">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-amber-500 opacity-[0.03] blur-[80px] rounded-full"></div>

<div className="absolute inset-0 flex items-center justify-center">

<div className="w-48 h-48 rounded-full border border-[#fbbf24]/20 bg-[#fbbf24]/5 backdrop-blur-md flex items-center justify-center relative z-10 animate-float shadow-[0_0_60px_rgba(251,191,36,0.1)]">
<div className="w-32 h-32 rounded-full border border-[#fbbf24]/10 bg-gradient-to-br from-[#fbbf24]/10 to-transparent"></div>
</div>

<div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm animate-float" style={{animationDelay: '1s'}}></div>

<div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm animate-float" style={{animationDelay: '2s'}}></div>

<div className="absolute w-[500px] h-[500px] rounded-full border border-white/5 rotate-12 opacity-30"></div>
<div className="absolute w-[450px] h-[450px] rounded-full border border-[#fbbf24]/10 -rotate-6 opacity-40"></div>
</div>
</div>
</main>

<section className="py-32 px-6 max-w-6xl mx-auto border-t border-white/5">
<div className="mb-20 text-center">
<h2 className="text-3xl md:text-4xl font-medium text-[#f8fafc] tracking-tight mb-4">We walk together.</h2>
<p className="text-slate-400 text-lg">Grounded in the wisdom of community and shared history.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-card-warm p-10 rounded-3xl group hover:border-[#fbbf24]/30 transition-all duration-500">
<div className="w-14 h-14 rounded-full bg-[#fbbf24]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
<span className="iconify text-[#fbbf24]" data-icon="lucide:circles" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-2xl font-medium text-[#f8fafc] mb-4">Shared Presence</h3>
<p className="text-lg text-slate-400 leading-relaxed">
                    Isolation fades when we gather. Experience a sense of belonging that honors who you are today, not just who you were.
                </p>
</div>

<div className="glass-card-warm p-10 rounded-3xl group hover:border-[#fbbf24]/30 transition-all duration-500">
<div className="w-14 h-14 rounded-full bg-[#fbbf24]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
<span className="iconify text-[#fbbf24]" data-icon="lucide:book-open" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-2xl font-medium text-[#f8fafc] mb-4">Living Stories</h3>
<p className="text-lg text-slate-400 leading-relaxed">
                    Your memories are a legacy. We provide a gentle space to recount, preserve, and cherish the narratives of your life.
                </p>
</div>

<div className="glass-card-warm p-10 rounded-3xl group hover:border-[#fbbf24]/30 transition-all duration-500">
<div className="w-14 h-14 rounded-full bg-[#fbbf24]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
<span className="iconify text-[#fbbf24]" data-icon="lucide:sparkles" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-2xl font-medium text-[#f8fafc] mb-4">Quiet Purpose</h3>
<p className="text-lg text-slate-400 leading-relaxed">
                    Engage at your own pace. Find meaning in contribution, conversation, and the simple act of being heard.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">

<div className="absolute inset-0 bg-[#fbbf24]/[0.02]"></div>
<div className="max-w-5xl mx-auto relative z-10">
<div className="glass-card p-12 md:p-16 rounded-[2rem] border border-[#fbbf24]/10">
<div className="flex flex-col md:flex-row gap-16 items-center">
<div className="flex-1">
<h2 className="text-3xl md:text-4xl font-medium text-white mb-8 tracking-tight">A Sanctuary, Not a System.</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full border border-[#fbbf24]/40 flex items-center justify-center shrink-0">
<span className="iconify text-[#fbbf24]" data-icon="lucide:check" data-width="14"></span>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">Private and Respectful</h4>
<p className="text-slate-400 leading-relaxed">Your stories stay within the village. We are not a social network.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full border border-[#fbbf24]/40 flex items-center justify-center shrink-0">
<span className="iconify text-[#fbbf24]" data-icon="lucide:check" data-width="14"></span>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">Human-First Design</h4>
<p className="text-slate-400 leading-relaxed">No confusing interfaces. Use your voice or simple touches.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full border border-[#fbbf24]/40 flex items-center justify-center shrink-0">
<span className="iconify text-[#fbbf24]" data-icon="lucide:check" data-width="14"></span>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">Dignity at the Core</h4>
<p className="text-slate-400 leading-relaxed">We are not medical care. We are a space for living.</p>
</div>
</li>
</ul>
</div>

<div className="flex-1 w-full flex justify-center">
<div className="relative w-64 h-64">
<div className="absolute inset-0 bg-[#fbbf24] opacity-10 blur-[60px] rounded-full"></div>
<div className="absolute inset-0 border border-[#fbbf24]/20 rounded-full flex items-center justify-center">
<div className="w-48 h-48 border border-[#fbbf24]/30 rounded-full flex items-center justify-center">
<div className="w-32 h-32 bg-[#fbbf24]/10 rounded-full flex items-center justify-center backdrop-blur-sm">
<span className="iconify text-[#fbbf24]" data-icon="lucide:shield-check" data-width="48" style={{strokeWidth: '1'}}></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-6xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-slate-300 text-sm mb-8">
<span className="iconify" data-icon="lucide:mic" data-width="16"></span>
<span>Voice-First Interaction</span>
</div>
<h3 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-8">
            "Just speak. We are listening."
        </h3>
<p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Technology should fade into the background. Hello Emberly is designed to be as natural as sitting by a fire with a friend.
        </p>
</section>

<section className="py-32 px-6 relative">
<div className="max-w-4xl mx-auto text-center relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#fbbf24] opacity-[0.05] blur-[100px] rounded-full"></div>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-8 relative z-10">
                The village is waiting for you.
            </h2>
<div className="flex flex-col items-center gap-6 relative z-10">
<button className="bg-[#fbbf24] text-[#020617] text-lg px-10 py-4 rounded-full font-semibold hover:bg-[#f59e0b] transition-all shadow-[0_0_30px_rgba(251,191,36,0.3)] focus-ring">
                    Begin a conversation
                </button>
<p className="text-slate-500 text-sm mt-4">Free to join. Private by design.</p>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020617] pt-20 pb-12">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-2 h-2 rounded-full bg-[#fbbf24]"></div>
<span className="text-white font-medium tracking-tight">Hello Emberly</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed">
                        Restoring the village, one story at a time.
                    </p>
</div>

<div className="col-span-1 md:col-span-3 flex flex-wrap gap-12 md:gap-24 justify-end">
<div>
<h4 className="text-[#fbbf24] text-xs font-semibold uppercase tracking-widest mb-6">Philosophy</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Our Mission</a></li>
<li><a className="hover:text-white transition-colors" href="#">Science of Connection</a></li>
<li><a className="hover:text-white transition-colors" href="#">Ethical AI</a></li>
</ul>
</div>
<div>
<h4 className="text-[#fbbf24] text-xs font-semibold uppercase tracking-widest mb-6">Support</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Accessibility</a></li>
<li><a className="hover:text-white transition-colors" href="#">Safety Center</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-xs text-slate-600">© 2024 Hello Emberly. Built with dignity and care.</p>
<div className="flex items-center gap-2 opacity-50">
<span className="iconify text-[#fbbf24]" data-icon="lucide:heart" data-width="12"></span>
<span className="text-[10px] text-slate-500 uppercase tracking-widest">Designed for humans</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
