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
      
<footer className="pt-16 pb-8 gradient-bg">
<div className="container mx-auto px-4">

<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

<div className="md:col-span-1">
<div className="flex items-center space-x-2 mb-6">
<div className="w-8 h-8 rounded-md bg-cyan-500 flex items-center justify-center">
<svg className="h-5 w-5 text-white" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
</svg>
</div>
<span className="font-light text-xl">AnalyticsPro</span>
</div>
<p className="text-slate-400 text-sm mb-6">Powerful analytics for data-driven teams. Make better decisions with real-time insights.</p>
<div className="flex space-x-4">
<a className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500/20 transition-colors" href="#">
<svg className="text-slate-300" fill="currentColor" height="16" viewbox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
</svg>
</a>
<a className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500/20 transition-colors" href="#">
<svg className="text-slate-300" fill="currentColor" height="16" viewbox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
</svg>
</a>
<a className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500/20 transition-colors" href="#">
<svg className="text-slate-300" fill="currentColor" height="16" viewbox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
</svg>
</a>
<a className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500/20 transition-colors" href="#">
<svg className="text-slate-300" fill="currentColor" height="16" viewbox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
</svg>
</a>
</div>
</div>

<div>
<h4 className="text-white font-semibold mb-4">Product</h4>
<ul className="space-y-2">
<li><a className="text-slate-400 hover:text-cyan-400 transition-colors text-sm" href="#">Features</a></li>
<li><a className="text-slate-400 hover:text-cyan-400 transition-colors text-sm" href="#">Integrations</a></li>
<li><a className="text-slate-400 hover:text-cyan-400 transition-colors text-sm" href="#">Pricing</a></li>
<li><a className="text-slate-400 hover:text-cyan-400 transition-colors text-sm" href="#">Changelog</a></li>
<li><a className="text-slate-400 hover:text-cyan-400 transition-colors text-sm" href="#">Documentation</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-4">Resources</h4>
<ul className="space-y-2">
<li><a className="text-slate-400 hover:text-cyan-400 transition-colors text-sm" href="#">Blog</a></li>
<li><a className="text-slate-400 hover:text-cyan-400 transition-colors text-sm" href="#">Case Studies</a></li>
<li><a className="text-slate-400 hover:text-cyan-400 transition-colors text-sm" href="#">Webinars</a></li>
<li><a className="text-slate-400 hover:text-cyan-400 transition-colors text-sm" href="#">Help Center</a></li>
<li><a className="text-slate-400 hover:text-cyan-400 transition-colors text-sm" href="#">Community</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-4">Company</h4>
<ul className="space-y-2">
<li><a className="text-slate-400 hover:text-cyan-400 transition-colors text-sm" href="#">About Us</a></li>
<li><a className="text-slate-400 hover:text-cyan-400 transition-colors text-sm" href="#">Careers</a></li>
<li><a className="text-slate-400 hover:text-cyan-400 transition-colors text-sm" href="#">Contact</a></li>
<li><a className="text-slate-400 hover:text-cyan-400 transition-colors text-sm" href="#">Privacy Policy</a></li>
<li><a className="text-slate-400 hover:text-cyan-400 transition-colors text-sm" href="#">Terms of Service</a></li>
</ul>
</div>
</div>

<div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6 mb-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
<div className="md:col-span-2">
<h4 className="text-lg font-semibold mb-2">Stay up to date</h4>
<p className="text-slate-400 text-sm">Get the latest news and articles to your inbox every month.</p>
</div>
<div>
<div className="flex">
<input className="bg-slate-900 border border-slate-700 rounded-l-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-cyan-500 text-sm" placeholder="Your email" type="email"/>
<button className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-4 py-2 rounded-r-md transition-colors text-sm">
                Subscribe
              </button>
</div>
</div>
</div>
</div>

<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-slate-500 text-sm mb-4 md:mb-0">© 2023 AnalyticsPro. All rights reserved.</p>
<div className="flex space-x-6">
<a className="text-slate-500 hover:text-cyan-400 transition-colors text-sm" href="#">Privacy</a>
<a className="text-slate-500 hover:text-cyan-400 transition-colors text-sm" href="#">Terms</a>
<a className="text-slate-500 hover:text-cyan-400 transition-colors text-sm" href="#">Cookies</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
