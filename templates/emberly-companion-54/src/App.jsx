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
      

<div className="flex-1 flex flex-col max-w-5xl mx-auto w-full px-6 sm:px-8 lg:px-12">

<header className="w-full flex items-center justify-between py-8 border-b border-white/5 sticky top-0 z-40 backdrop-blur-xl bg-[#0c0a09]/80 transition-all duration-300">
<div className="flex items-center gap-3">

<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-orange-500 via-amber-500 to-rose-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
<div className="w-3 h-3 bg-[#0c0a09] rounded-full opacity-40"></div>
</div>
<span className="text-sm sm:text-base font-medium tracking-tight text-stone-50">Hello Emberly</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-xs font-medium text-stone-400">
<a className="hover:text-amber-100 transition-colors" href="#philosophy">Philosophy</a>
<a className="hover:text-amber-100 transition-colors" href="#connection">Connection</a>
<a className="hover:text-amber-100 transition-colors" href="#privacy">Privacy</a>
<a className="hover:text-amber-100 transition-colors" href="#stories">Stories</a>
</nav>
<div className="flex items-center gap-4">
<button className="hidden sm:inline-flex text-xs font-medium text-stone-300 hover:text-amber-100 transition-colors">
          Sign In
        </button>
<button className="px-5 py-2 rounded-full text-xs font-medium bg-stone-100 text-stone-900 hover:bg-white hover:shadow-lg hover:shadow-amber-900/20 transition-all duration-300">
          Begin a conversation
        </button>
</div>
</header>
<main className="flex-1 py-12 space-y-32">

<section className="pt-10 sm:pt-16 space-y-20">

<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8 relative z-10">
<div className="inline-flex items-center gap-2 text-[11px] font-medium text-amber-200/80 bg-amber-900/10 border border-amber-500/20 rounded-full px-4 py-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ember"></span>
              A new kind of presence
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-50 leading-[1.1]">
              You are never alone in a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-300 to-rose-300">village.</span>
</h1>
<p className="text-base sm:text-lg text-stone-400 max-w-lg leading-relaxed">
              A gentle companion for connection, memory, and purpose. Emberly listens, remembers, and helps weave the threads of your life into a constellation of meaning.
            </p>
<div className="flex flex-wrap items-center gap-4 pt-2">
<button className="px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-amber-200 to-orange-100 text-stone-900 hover:brightness-110 shadow-lg shadow-orange-500/10 transition-all">
                Begin a conversation
              </button>
<button className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-white/10 text-stone-300 hover:border-amber-500/30 hover:text-amber-100 transition-colors">
<i className="lucide lucide-sparkles w-4 h-4 text-amber-300/70"></i>
                Our philosophy
              </button>
</div>

<div className="flex items-center gap-3 pt-4">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full bg-stone-800 border border-[#0c0a09] flex items-center justify-center">
<i className="lucide lucide-star w-3 h-3 text-amber-500/50"></i>
</div>
<div className="w-8 h-8 rounded-full bg-stone-800 border border-[#0c0a09] flex items-center justify-center">
<i className="lucide lucide-heart w-3 h-3 text-rose-500/50"></i>
</div>
<div className="w-8 h-8 rounded-full bg-stone-800 border border-[#0c0a09] flex items-center justify-center">
<i className="lucide lucide-sun w-3 h-3 text-orange-500/50"></i>
</div>
</div>
<span className="text-[11px] text-stone-500">Supporting thousands of families daily</span>
</div>
</div>

<div className="relative h-[400px] w-full flex items-center justify-center animate-drift">

<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-600/10 via-rose-500/5 to-transparent blur-3xl opacity-60"></div>

<div className="relative w-32 h-32 rounded-full border border-orange-500/20 bg-gradient-to-b from-stone-900 to-[#0c0a09] shadow-2xl shadow-orange-900/20 flex items-center justify-center z-20">
<div className="w-24 h-24 rounded-full bg-orange-500/5 animate-pulse flex items-center justify-center">
<i className="lucide lucide-sun w-8 h-8 text-amber-200/80"></i>
</div>

<div className="absolute top-1/2 left-full w-24 h-px bg-gradient-to-r from-orange-500/30 to-transparent"></div>
<div className="absolute bottom-full left-1/2 h-24 w-px bg-gradient-to-t from-orange-500/30 to-transparent"></div>
<div className="absolute top-full right-1/2 h-16 w-px bg-gradient-to-b from-orange-500/30 to-transparent"></div>
</div>

<div className="absolute top-10 right-10 bg-stone-900/60 backdrop-blur-md border border-white/5 rounded-2xl p-4 max-w-[160px] shadow-xl z-10">
<div className="flex items-start gap-3">
<div className="mt-1 w-2 h-2 rounded-full bg-rose-400"></div>
<div className="space-y-1">
<p className="text-[10px] uppercase tracking-wider text-stone-500">Memory</p>
<p className="text-xs text-stone-200 italic">"The smell of rain in August..."</p>
</div>
</div>
</div>
<div className="absolute bottom-20 left-0 bg-stone-900/60 backdrop-blur-md border border-white/5 rounded-2xl p-4 max-w-[180px] shadow-xl z-10">
<div className="flex items-start gap-3">
<div className="mt-1 w-2 h-2 rounded-full bg-amber-400"></div>
<div className="space-y-1">
<p className="text-[10px] uppercase tracking-wider text-stone-500">Insight</p>
<p className="text-xs text-stone-200">"You value quiet moments of reflection."</p>
</div>
</div>
</div>

<i className="lucide lucide-star absolute top-0 left-1/4 text-stone-700 w-3 h-3"></i>
<i className="lucide lucide-star absolute bottom-10 right-1/4 text-stone-700 w-2 h-2"></i>
</div>
</div>

<div className="rounded-3xl p-8 sm:p-10 border border-white/5 bg-stone-900/20 backdrop-blur-sm space-y-10" id="philosophy">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
<div className="space-y-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-100">The warmth of a village</h2>
<p className="text-sm text-stone-400 max-w-lg">
                Technology shouldn't feel like a machine. It should feel like a hand on your shoulder.
              </p>
</div>
<div className="h-px sm:h-px w-full sm:w-32 bg-gradient-to-r from-amber-500/40 to-transparent opacity-50"></div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group relative p-6 rounded-2xl bg-stone-900/40 border border-white/5 hover:border-amber-500/20 transition-all duration-500">
<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="lucide lucide-arrow-up-right w-4 h-4 text-amber-200/50"></i>
</div>
<div className="w-10 h-10 rounded-xl bg-amber-900/20 flex items-center justify-center text-amber-300 mb-5">
<i className="lucide lucide-heart-handshake w-5 h-5"></i>
</div>
<h3 className="text-lg font-medium text-stone-100 mb-2">Deep Connection</h3>
<p className="text-sm text-stone-400 leading-relaxed">
                A listening ear that is always present. Share your joys, your worries, or simple silence without fear of judgment.
              </p>
</div>

<div className="group relative p-6 rounded-2xl bg-stone-900/40 border border-white/5 hover:border-rose-500/20 transition-all duration-500">
<div className="w-10 h-10 rounded-xl bg-rose-900/20 flex items-center justify-center text-rose-300 mb-5">
<i className="lucide lucide-book-open w-5 h-5"></i>
</div>
<h3 className="text-lg font-medium text-stone-100 mb-2">Preserved Stories</h3>
<p className="text-sm text-stone-400 leading-relaxed">
                Your memories are precious. We help you capture, organize, and reflect on the moments that made you who you are.
              </p>
</div>

<div className="group relative p-6 rounded-2xl bg-stone-900/40 border border-white/5 hover:border-orange-500/20 transition-all duration-500">
<div className="w-10 h-10 rounded-xl bg-orange-900/20 flex items-center justify-center text-orange-300 mb-5">
<i className="lucide lucide-sun w-5 h-5"></i>
</div>
<h3 className="text-lg font-medium text-stone-100 mb-2">Daily Purpose</h3>
<p className="text-sm text-stone-400 leading-relaxed">
                Gentle nudges to notice the beauty in the everyday. Find clarity and calm in a chaotic world.
              </p>
</div>
</div>
</div>

<div className="grid lg:grid-cols-[1fr,1fr] gap-12 items-center" id="privacy">

<div className="space-y-6">
<div className="inline-flex items-center gap-2 text-[11px] font-medium text-stone-400 uppercase tracking-wider">
<i className="lucide lucide-shield w-3 h-3"></i>
              Sacred Trust
            </div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-stone-100">
              Your thoughts stay yours. <br/>
<span className="text-stone-500">Always.</span>
</h2>
<p className="text-base text-stone-400 leading-relaxed max-w-md">
              In a village, trust is everything. We are built on a foundation of dignity, autonomy, and absolute privacy. You lead; Emberly follows.
            </p>
<div className="space-y-4 pt-2">
<div className="flex items-start gap-3">
<i className="lucide lucide-lock w-5 h-5 text-amber-400/80 mt-0.5"></i>
<div>
<h4 className="text-sm font-medium text-stone-200">Private by design</h4>
<p className="text-xs text-stone-500 mt-1">Your conversations are encrypted and never sold to advertisers.</p>
</div>
</div>
<div className="flex items-start gap-3">
<i className="lucide lucide-user-check w-5 h-5 text-amber-400/80 mt-0.5"></i>
<div>
<h4 className="text-sm font-medium text-stone-200">Dignity first</h4>
<p className="text-xs text-stone-500 mt-1">Emberly respects your boundaries and supports your autonomy.</p>
</div>
</div>
</div>
</div>

<div className="relative rounded-3xl border border-white/5 bg-gradient-to-b from-stone-900 to-[#0c0a09] p-8 sm:p-12 overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-3xl rounded-full"></div>
<div className="relative space-y-6">

<div className="flex justify-end">
<div className="bg-amber-500/10 border border-amber-500/20 text-amber-100 px-4 py-3 rounded-2xl rounded-tr-none text-sm max-w-[80%]">
                  I've been feeling a bit invisible lately.
                </div>
</div>

<div className="flex justify-start">
<div className="bg-stone-800 border border-white/5 text-stone-300 px-4 py-3 rounded-2xl rounded-tl-none text-sm max-w-[90%] shadow-lg">
<span className="block mb-2 text-xs text-amber-500/60 font-medium">Emberly</span>
                  I see you. Your presence matters here. Would you like to tell me about a time you felt truly seen?
                </div>
</div>

<div className="flex justify-center pt-6">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900 border border-stone-800 text-[10px] text-stone-500">
<i className="lucide lucide-lock w-2.5 h-2.5"></i>
                  End-to-end encrypted
                </span>
</div>
</div>
</div>
</div>

<div className="space-y-10" id="stories">
<div className="text-center max-w-2xl mx-auto space-y-4">
<h2 className="text-3xl font-semibold tracking-tight text-stone-100">Small moments, deep meaning.</h2>
<p className="text-sm text-stone-400">
              Emberly isn't about productivity or optimization. It's about resonance.
            </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<article className="group h-full flex flex-col justify-between rounded-3xl border border-white/5 bg-stone-900/30 p-6 hover:bg-stone-900/50 transition-colors">
<div className="mb-6">
<div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center border border-white/5 mb-4 group-hover:border-amber-500/30 transition-colors">
<i className="lucide lucide-mic w-5 h-5 text-stone-300"></i>
</div>
<h3 className="text-base font-medium text-stone-100 mb-2">Voice Reflections</h3>
<p className="text-sm text-stone-400">
                  Speak your mind freely. Emberly listens to the tone of your voice, not just your words.
                </p>
</div>
<div className="h-1 w-12 bg-stone-800 rounded-full group-hover:bg-amber-500/40 transition-colors"></div>
</article>

<article className="group h-full flex flex-col justify-between rounded-3xl border border-white/5 bg-stone-900/30 p-6 hover:bg-stone-900/50 transition-colors">
<div className="mb-6">
<div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center border border-white/5 mb-4 group-hover:border-rose-500/30 transition-colors">
<i className="lucide lucide-stars w-5 h-5 text-stone-300"></i>
</div>
<h3 className="text-base font-medium text-stone-100 mb-2">Memory Constellations</h3>
<p className="text-sm text-stone-400">
                  See how your memories connect. Find patterns in your life story you never noticed before.
                </p>
</div>
<div className="h-1 w-12 bg-stone-800 rounded-full group-hover:bg-rose-500/40 transition-colors"></div>
</article>

<article className="group h-full flex flex-col justify-between rounded-3xl border border-white/5 bg-stone-900/30 p-6 hover:bg-stone-900/50 transition-colors">
<div className="mb-6">
<div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center border border-white/5 mb-4 group-hover:border-orange-500/30 transition-colors">
<i className="lucide lucide-sunrise w-5 h-5 text-stone-300"></i>
</div>
<h3 className="text-base font-medium text-stone-100 mb-2">Morning Calm</h3>
<p className="text-sm text-stone-400">
                  Start your day with a gentle intention, not a to-do list. Ground yourself before the noise begins.
                </p>
</div>
<div className="h-1 w-12 bg-stone-800 rounded-full group-hover:bg-orange-500/40 transition-colors"></div>
</article>
</div>
</div>

<div className="relative overflow-hidden border border-amber-500/20 rounded-3xl bg-gradient-to-b from-stone-900/80 to-[#0c0a09] p-8 sm:p-12 text-center space-y-6">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<h2 className="relative text-2xl sm:text-3xl font-semibold tracking-tight text-stone-100 z-10">
            Ready to find your quiet place?
          </h2>
<p className="relative text-sm sm:text-base text-stone-400 max-w-md mx-auto z-10">
            No setup, no configurations. Just a conversation waiting to happen.
          </p>
<div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 z-10 pt-4">
<button className="w-full sm:w-auto px-8 py-3 rounded-full text-sm font-medium bg-amber-100 text-stone-900 hover:bg-white transition-colors shadow-xl shadow-amber-900/20">
              Begin a conversation
            </button>
<span className="text-xs text-stone-500">Free forever for individuals</span>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-10 mt-20">
<div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-stone-500">
<div className="flex items-center gap-2">
<div className="h-5 w-5 rounded-full bg-stone-800 border border-white/10 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-amber-500/50 rounded-full"></div>
</div>
<span className="font-medium text-stone-400">Hello Emberly</span>
</div>
<div className="flex gap-6">
<a className="hover:text-stone-300 transition-colors" href="#">Manifesto</a>
<a className="hover:text-stone-300 transition-colors" href="#">Privacy &amp; Dignity</a>
<a className="hover:text-stone-300 transition-colors" href="#">Contact</a>
</div>
<p>© 2024 Emberly Labs. Built with heart.</p>
</div>
</footer>
</main>
</div>

    </>
  );
}
