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
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-radial from-indigo-900/20 via-black to-black opacity-50 blur-3xl pointer-events-none z-0"></div>
<div className="fixed top-0 inset-0 bg-grid pointer-events-none z-0"></div>

<nav className="relative z-10 w-full border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded flex items-center justify-center text-black">
<span className="text-xs font-bold">M</span>
</div>
<span className="text-sm font-medium tracking-tight text-white uppercase">Mac Consulting</span>
</div>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="https://www.youtube.com/" target="_blank">YouTube Channel</a>
</div>
</nav>

<main className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 py-20 lg:py-32">

<div className="max-w-3xl w-full mx-auto text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                New: 3-Part Packaged System
            </div>

<h1 className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 mb-6">
                Automate your <br className="hidden sm:block"/> agency growth.
            </h1>

<p className="text-lg sm:text-xl text-zinc-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Access the 3 separate systems I use to scale: <span className="text-zinc-200 font-normal">Content, Qualifier, and Lead Acquisition</span>. The complete architecture for high-ticket consulting.
            </p>

<div className="w-full max-w-md mx-auto bg-zinc-900/30 border border-white/10 rounded-2xl p-1 shadow-2xl backdrop-blur-xl">
<div className="flex flex-col gap-2 p-4">
<div className="flex flex-col text-left gap-1 mb-2">
<label className="text-xs font-medium text-zinc-500 ml-1" htmlFor="name">Full Name</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-indigo-400 transition-colors">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input className="w-full bg-black/50 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" id="name" placeholder="Enter your name" type="text"/>
</div>
</div>
<div className="flex flex-col text-left gap-1 mb-4">
<label className="text-xs font-medium text-zinc-500 ml-1" htmlFor="email">Email Address</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-indigo-400 transition-colors">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input className="w-full bg-black/50 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" id="email" placeholder="name@company.com" type="email"/>
</div>
</div>
<a className="group relative w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-zinc-200 font-medium text-sm py-3 rounded-lg transition-all active:scale-[0.98]" href="https://www.notion.so/Packaged-systems-30c1d3c0d8708033bdf6fb60a6e7833b?source=copy_link" target="_blank">
<span>Access the Packaged Systems</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>

<div className="absolute inset-0 -z-10 bg-white/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
</a>
<p className="text-center text-[10px] text-zinc-600 mt-3">
                        Instant access via Notion. No spam, unsubscribe anytime.
                    </p>
</div>
</div>

<div className="mt-16 pt-16 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

<div className="group">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300 mb-4 group-hover:border-indigo-500/30 group-hover:text-indigo-400 transition-colors">
<iconify-icon icon="solar:clapperboard-text-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium text-sm mb-2">Content System</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                        Scripts and frameworks to position your agency as the authority. Never run out of ideas again.
                    </p>
</div>

<div className="group">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300 mb-4 group-hover:border-indigo-500/30 group-hover:text-indigo-400 transition-colors">
<iconify-icon icon="solar:tuning-square-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium text-sm mb-2">Qualifier System</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                        Automate the vetting process. Filter out low-quality leads before they ever reach your calendar.
                    </p>
</div>

<div className="group">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300 mb-4 group-hover:border-indigo-500/30 group-hover:text-indigo-400 transition-colors">
<iconify-icon icon="solar:magnet-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium text-sm mb-2">Lead Acquisition</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                        The exact inbound architecture. Copy-paste my lead flow templates directly into your workflow.
                    </p>
</div>
</div>
</div>
</main>

<footer className="relative z-10 w-full py-8 border-t border-white/5">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 opacity-50">
<div className="w-4 h-4 bg-zinc-800 rounded flex items-center justify-center text-zinc-400">
<span className="text-[8px] font-bold">M</span>
</div>
<span className="text-xs font-medium text-zinc-500 uppercase tracking-tight">Mac Consulting © 2024</span>
</div>
<div className="flex items-center gap-6">
<a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="text-zinc-500 hover:text-[#FF0000] transition-colors" href="https://www.youtube.com/" target="_blank">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-[#1DA1F2] transition-colors" href="#">
<iconify-icon icon="solar:plain-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
