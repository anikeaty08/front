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
      

<div aria-hidden="true" className="fixed inset-0 -z-10 flex justify-center pt-[20vh]">
<div className="w-[800px] h-[400px] bg-zinc-800/20 blur-[120px] rounded-full"></div>
</div>

<nav className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="text-white text-xl font-semibold tracking-tighter" href="#">EC</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors duration-200" href="#">Overview</a>
<a className="hover:text-white transition-colors duration-200" href="#">Expertise</a>
<a className="hover:text-white transition-colors duration-200" href="#">Insights</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200" href="#">Client Portal</a>
<button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors duration-200">
                    Connect
                </button>
</div>
</div>
</nav>

<main className="flex-grow flex flex-col items-center justify-center pt-24 pb-32 px-6">
<div className="max-w-4xl w-full text-center flex flex-col items-center">

<div className="flex flex-wrap items-center justify-center gap-3 mb-8">
<a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-medium text-zinc-400 hover:bg-white/[0.08] hover:text-zinc-200 transition-colors duration-200" href="#">
<iconify-icon icon="solar:global-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    empresaconfidencial.com
                </a>
<a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-medium text-zinc-400 hover:bg-white/[0.08] hover:text-zinc-200 transition-colors duration-200" href="mailto:empresaconfidencial33@gmail.com">
<iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    empresaconfidencial33@gmail.com
                </a>
</div>

<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-6 leading-tight">
                Empresa Confidencial
            </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-normal mb-12">
                Business Consulting and Services
            </p>

<div className="flex flex-wrap items-center justify-center gap-4 mb-16">

<div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.05] text-zinc-300">
<iconify-icon className="text-lg" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-left text-sm">
<div className="font-medium text-white">304K</div>
<div className="text-zinc-500 text-xs">Followers</div>
</div>
</div>

<div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.05] text-zinc-300">
<iconify-icon className="text-lg" icon="solar:case-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-left text-sm">
<div className="font-medium text-white">51-200</div>
<div className="text-zinc-500 text-xs">Employees</div>
</div>
</div>
</div>
</div>

<div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

<div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 hover:bg-white/[0.04] transition-colors duration-300">
<div className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center text-white mb-6 border border-white/[0.08]">
<iconify-icon className="text-xl" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Strategic Advisory</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                    Navigating complex market dynamics with data-backed insights and confidential strategic planning.
                </p>
</div>

<div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 hover:bg-white/[0.04] transition-colors duration-300">
<div className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center text-white mb-6 border border-white/[0.08]">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Discrete Operations</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                    Executing operational overhauls and sensitive corporate restructurings with maximum security.
                </p>
</div>

<div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 hover:bg-white/[0.04] transition-colors duration-300">
<div className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center text-white mb-6 border border-white/[0.08]">
<iconify-icon className="text-xl" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Growth Acceleration</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                    Scaling enterprises through proprietary frameworks and deep industry network leverage.
                </p>
</div>
</div>
</main>

<footer className="border-t border-white/[0.08] py-8 mt-auto">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
<div>
                © 2024 Empresa Confidencial. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
