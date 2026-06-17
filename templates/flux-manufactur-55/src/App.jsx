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
colors: {
slate: {
850: '#151e2e',
950: '#020617',
}
}
}
}
}
function toggleLogin(show) {
const modal = document.getElementById('loginModal');
const mainContent = document.getElementById('mainContent');
if (show) {
modal.classList.remove('hidden');
modal.classList.add('flex');
// Add blur and disable interaction on background
mainContent.classList.add('blur-[2px]', 'pointer-events-none', 'select-none', 'opacity-50');
} else {
modal.classList.add('hidden');
modal.classList.remove('flex');
// Remove blur and restore interaction
mainContent.classList.remove('blur-[2px]', 'pointer-events-none', 'select-none', 'opacity-50');
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
      

<div className="fixed inset-0 z-[100] hidden items-center justify-center p-4" id="loginModal">

<div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity" onclick="toggleLogin(false)"></div>

<div className="relative w-full max-w-[360px] bg-slate-950 border border-slate-800/60 shadow-2xl rounded-xl p-8 overflow-hidden animate-[fadeIn_0.2s_ease-out]">

<button className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors p-1 rounded-md hover:bg-slate-800/50" onclick="toggleLogin(false)">
<span className="iconify" data-icon="lucide:x" data-width="16"></span>
</button>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-indigo-500/20 blur-[60px] rounded-full pointer-events-none"></div>

<div className="relative z-10 text-center mb-8">
<div className="w-10 h-10 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded-lg flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-indigo-500/20">
<span className="iconify" data-icon="lucide:layers" data-width="20"></span>
</div>
<h2 className="text-xl font-medium text-white tracking-tight mb-2">Welcome back</h2>
<p className="text-xs text-slate-500">Enter your credentials to access the workspace.</p>
</div>

<button className="relative w-full h-10 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg flex items-center justify-center gap-2 transition-all group mb-6">
<svg className="w-4 h-4" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M23.52 12.29C23.52 11.43 23.44 10.71 23.3 10H12V14.51H18.57C18.32 15.99 17.43 17.96 15.38 19.34L15.36 19.53L18.92 22.25L19.17 22.28C21.38 20.25 22.69 17.21 22.69 13.56L22.68 13.43L23.52 12.29Z" fill="#4285F4"></path>
<path d="M12 24C15.24 24 17.96 22.93 19.93 21.11L16.37 18.39C15.26 19.14 13.8 19.64 12 19.64C8.83 19.64 6.14 17.5 5.18 14.64L5.01 14.65L1.39 17.38L1.33 17.52C3.33 21.46 7.42 24 12 24Z" fill="#34A853"></path>
<path d="M5.18 14.64C4.93 13.9 4.8 13.11 4.8 12.29C4.8 11.47 4.93 10.69 5.18 9.94L5.17 9.77L1.47 6.94L1.33 7.07C0.48 8.71 0 10.56 0 12.5C0 14.44 0.48 16.29 1.33 17.93L5.18 14.64Z" fill="#FBBC05"></path>
<path d="M12 4.94C14.28 4.94 15.84 5.93 16.71 6.76L20.03 3.52C17.95 1.58 15.23 0.58 12 0.58C7.42 0.58 3.33 3.12 1.33 7.07L5.18 9.94C6.14 7.08 8.83 4.94 12 4.94Z" fill="#EA4335"></path>
</svg>
<span className="text-xs font-medium text-slate-300 group-hover:text-white">Sign in with Google</span>
</button>

<div className="relative flex py-2 items-center mb-6">
<div className="flex-grow border-t border-slate-800"></div>
<span className="flex-shrink-0 mx-3 text-[10px] text-slate-600 uppercase tracking-widest font-medium">Or continue with</span>
<div className="flex-grow border-t border-slate-800"></div>
</div>

<form className="space-y-4">
<div className="space-y-1.5">
<label className="text-[10px] uppercase font-semibold tracking-wider text-slate-500 pl-1" htmlFor="email">Email address</label>
<div className="relative group">
<input className="w-full h-10 bg-slate-900/50 border border-slate-800 rounded-lg px-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" id="email" placeholder="name@company.com" type="email"/>
<div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-600 group-focus-within:text-indigo-500 transition-colors">
<span className="iconify" data-icon="lucide:mail" data-width="14"></span>
</div>
</div>
</div>
<div className="space-y-1.5">
<div className="flex items-center justify-between pl-1">
<label className="text-[10px] uppercase font-semibold tracking-wider text-slate-500" htmlFor="password">Password</label>
<a className="text-[10px] text-indigo-400 hover:text-indigo-300 transition-colors" href="#">Forgot password?</a>
</div>
<div className="relative group">
<input className="w-full h-10 bg-slate-900/50 border border-slate-800 rounded-lg px-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" id="password" placeholder="••••••••" type="password"/>
<div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-600 group-focus-within:text-indigo-500 transition-colors">
<span className="iconify" data-icon="lucide:lock" data-width="14"></span>
</div>
</div>
</div>
<button className="w-full h-10 bg-white text-black text-xs font-semibold rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 mt-2" type="button">
                    Sign in
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</form>

<div className="mt-8 text-center">
<p className="text-[11px] text-slate-500">
                    Don't have an account? 
                    <a className="text-slate-300 hover:text-white transition-colors font-medium" href="#">Sign up</a>
</p>
</div>
</div>
</div>

<div className="transition-blur duration-300" id="mainContent">

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:layers" data-width="12"></span>
</div>
<span className="text-slate-200 font-medium tracking-tight text-sm">FLUX</span>
</div>
<div className="flex items-center gap-4">

<button className="text-xs font-medium text-slate-300 hover:text-white transition-colors" onclick="toggleLogin(true)">Log in</button>
<button className="text-xs font-medium bg-white text-black px-3 py-1.5 rounded hover:bg-slate-200 transition-colors">Sign Up</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden min-h-screen">
<div className="absolute inset-0 bg-grid"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl mx-auto text-center mb-16">
<h1 className="text-5xl md:text-7xl font-medium text-slate-100 tracking-tighter mb-6">
                        Manufacturing logic,<br/>minus the spreadsheets.
                    </h1>
<p className="text-slate-500 text-lg font-light tracking-wide max-w-xl mx-auto">
                        The unified workspace for engineering teams. Manage, track, and deploy your hardware projects with precision.
                    </p>
<div className="mt-8 flex justify-center gap-3">
<button className="h-10 px-4 bg-white text-black text-xs font-semibold rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2">
                            Start Building
                            <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
<button className="h-10 px-4 bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium rounded-lg hover:bg-slate-800 transition-colors">
                            Documentation
                        </button>
</div>
</div>

<div className="relative max-w-5xl mx-auto dashboard-tilt">
<div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden ring-1 ring-white/5 h-[400px] shadow-2xl shadow-black/50">
<div className="h-10 border-b border-slate-800 bg-slate-900 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
</div>
</div>
<div className="p-6 grid grid-cols-4 gap-6 bg-slate-950/50 h-full">
<div className="border-r border-slate-800/50 pr-4 space-y-2">
<div className="h-8 bg-indigo-500/10 rounded w-full border border-indigo-500/20"></div>
<div className="h-8 bg-slate-800/30 rounded w-full"></div>
<div className="h-8 bg-slate-800/30 rounded w-full"></div>
<div className="h-8 bg-slate-800/30 rounded w-full"></div>
</div>
<div className="col-span-3 space-y-4">
<div className="flex justify-between items-center">
<div className="h-4 bg-slate-800/50 w-32 rounded"></div>
<div className="h-6 bg-slate-800/50 w-20 rounded"></div>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="h-24 bg-slate-900/80 border border-slate-800 rounded-lg p-3">
<div className="w-6 h-6 rounded bg-slate-800 mb-2"></div>
<div className="h-2 w-12 bg-slate-800 rounded"></div>
</div>
<div className="h-24 bg-slate-900/80 border border-slate-800 rounded-lg p-3">
<div className="w-6 h-6 rounded bg-slate-800 mb-2"></div>
<div className="h-2 w-12 bg-slate-800 rounded"></div>
</div>
<div className="h-24 bg-slate-900/80 border border-slate-800 rounded-lg p-3">
<div className="w-6 h-6 rounded bg-slate-800 mb-2"></div>
<div className="h-2 w-12 bg-slate-800 rounded"></div>
</div>
</div>
<div className="h-32 bg-slate-900/40 border border-slate-800 rounded-lg w-full mt-4"></div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

    </>
  );
}
