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
darkMode: 'class',
theme: {
extend: {
colors: {
brand: {
50: '#f0fdfa',
100: '#ccfbf1',
500: '#14b8a6', // Teal accent
600: '#0d9488',
900: '#134e4a',
950: '#042f2e',
}
}
}
}
}



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
      

<div className="fixed bottom-0 w-full bg-zinc-950/80 backdrop-blur-md border-t border-zinc-800 py-3 px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 z-50 text-xs md:text-sm">
<div className="flex items-center gap-2 text-zinc-400">
<i className="w-4 h-4 text-brand-500" data-lucide="cookie"></i>
<span>
          We use cookies to enhance your experience.
          <a className="text-zinc-200 hover:underline" href="#">Cookie Policy</a>
          .
        </span>
</div>
<div className="flex items-center gap-3">
<button className="text-zinc-400 hover:text-white transition-colors font-medium">
          Decline
        </button>
<button className="bg-zinc-100 text-zinc-900 hover:bg-white px-4 py-1.5 rounded-full font-medium transition-all shadow-[0_0_10px_rgba(255,255,255,0.1)]">
          Accept
        </button>
</div>
</div>

<nav className="fixed top-0 w-full z-40 bg-black/50 backdrop-blur-lg border-b border-white/5 px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
<i className="w-4 h-4" data-lucide="sparkles"></i>
</div>
<span className="font-semibold text-white tracking-tight text-lg">
          Nova
        </span>
</div>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
<a className="text-white hover:text-brand-400 transition-colors" href="#login">
          Login
        </a>
<a className="hover:text-white transition-colors" href="#feed">
          Explore Feed
        </a>
<a className="hover:text-white transition-colors" href="#">Creators</a>
</div>
<div className="flex items-center gap-3">
<button className="md:hidden text-zinc-400 hover:text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
<a className="hidden md:block bg-zinc-100 text-zinc-950 px-4 py-2 rounded-full text-sm font-medium hover:bg-white transition-all" href="#login">
          Get Started
        </a>
</div>
</nav>

<div className="min-h-screen flex flex-col md:flex-row pt-16" id="login">

<div className="relative w-full md:w-1/2 bg-zinc-950 flex flex-col items-center justify-center p-8 md:p-12 overflow-hidden border-b md:border-b-0 md:border-r border-zinc-900 group">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black opacity-80"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-900/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-brand-900/20 transition-all duration-1000"></div>
<div className="contrast-150 opacity-20 mix-blend-overlay w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] absolute top-0 right-0 brightness-100"></div>
<div className="relative z-10 text-center max-w-lg space-y-6">
<h1 className="text-5xl md:text-6xl font-semibold text-white tracking-tight leading-tight">
            Fuel your
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-200 to-brand-500">
              Creative Journey
            </span>
</h1>
<p className="text-lg text-zinc-400 leading-relaxed font-light">
            Join millions of creators on Nova. Monetize your passion, connect
            with fans, and build your digital empire.
          </p>
<div className="flex items-center justify-center gap-4 pt-4">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-zinc-950 grayscale hover:grayscale-0 transition-all" src="https://i.pravatar.cc/100?img=1"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-zinc-950 grayscale hover:grayscale-0 transition-all" src="https://i.pravatar.cc/100?img=5"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-zinc-950 grayscale hover:grayscale-0 transition-all" src="https://i.pravatar.cc/100?img=8"/>
<div className="w-10 h-10 rounded-full border-2 border-zinc-950 bg-zinc-800 flex items-center justify-center text-xs text-white font-medium">
                +2k
              </div>
</div>
<span className="text-sm text-zinc-500">creators joined today</span>
</div>
</div>

<a className="absolute bottom-8 flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors animate-bounce" href="#feed">
<span className="text-xs uppercase tracking-widest">
            Scroll to Explore
          </span>
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</a>
</div>

<div className="w-full md:w-1/2 bg-black flex flex-col items-center justify-center p-6 md:p-12 relative">
<div className="w-full max-w-sm space-y-8">
<div className="text-center md:text-left">
<h3 className="text-2xl font-semibold text-white tracking-tight">
              Welcome back
            </h3>
<p className="text-zinc-500 mt-2 text-sm">
              Enter your details to access your dashboard.
            </p>
</div>

<div className="grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 py-2.5 rounded-lg transition-all group">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
</svg>
<span className="text-sm font-medium">X (Twitter)</span>
</button>
<button className="flex items-center justify-center gap-2 bg-white text-black hover:bg-zinc-200 border border-transparent py-2.5 rounded-lg transition-all">
<svg className="w-5 h-5" fill="none" viewbox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</svg>
<span className="text-sm font-medium">Google</span>
</button>
</div>
<div className="relative">
<div className="absolute inset-0 flex items-center">
<span className="w-full border-t border-zinc-800"></span>
</div>
<div className="relative flex justify-center text-xs uppercase">
<span className="bg-black px-2 text-zinc-600 tracking-widest">
                Or continue with email
              </span>
</div>
</div>
<form className="space-y-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 ml-1">
                Email address
              </label>
<input className="w-full bg-zinc-900/50 text-white border border-zinc-800 rounded-lg px-4 py-3 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-sm placeholder:text-zinc-600" placeholder="name@example.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 ml-1">
                Password
              </label>
<div className="relative">
<input className="w-full bg-zinc-900/50 text-white border border-zinc-800 rounded-lg px-4 py-3 pr-10 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all text-sm placeholder:text-zinc-600" placeholder="••••••••" type="password"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300" type="button">
<i className="w-4 h-4" data-lucide="eye"></i>
</button>
</div>
</div>
<button className="w-full bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-medium py-3 rounded-lg text-sm shadow-[0_0_20px_rgba(20,184,166,0.2)] transition-all transform hover:scale-[1.01] active:scale-[0.99]" type="button">
              Sign In
            </button>
</form>
<p className="text-center text-zinc-500 text-sm">
            Don't have an account?
            <a className="text-brand-500 hover:underline font-medium" href="#">
              Sign up free
            </a>
</p>
</div>
</div>
</div>



    </>
  );
}
