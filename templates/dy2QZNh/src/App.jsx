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
      
<footer className="relative w-full z-10 overflow-hidden pt-16 pb-8 mt-24">

<div className="pointer-events-none select-none absolute z-0 top-0 left-1/2 -translate-x-1/2 w-full h-full">
<div className="absolute -top-32 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>
<div className="absolute -bottom-24 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
</div>

<div className="relative glass max-w-6xl mx-auto rounded-2xl px-6 py-10 flex flex-col md:flex-row md:justify-between items-center md:items-start gap-8 md:gap-12">
<div className="flex flex-col items-center md:items-start">
<a className="flex items-center gap-2 mb-4" href="/">
<span className="inline-block w-9 h-9 rounded-full bg-gradient-to-br from-purple-400 to-purple-700 flex items-center justify-center shadow-md text-2xl font-extrabold text-white">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
<span className="text-xl font-semibold tracking-tight bg-gradient-to-br from-purple-200 to-purple-500 bg-clip-text text-transparent">Lumino</span>
</a>
<p className="text-sm text-purple-200 max-w-xs mb-6 text-center md:text-left">
          Powering tomorrow's digital experiences with brilliance and elegance.
        </p>
<div className="flex gap-3 mt-2 text-purple-400">
<a aria-label="Twitter" className="hover:text-purple-200 transition" href="#"><svg className="h-5 w-5" fill="currentColor" viewbox="0 0 24 24"><path d="M19.633 7.997c.013.176.013.353.013.53 0 5.387-4.099 11.605-11.604 11.605A11.561 11.561 0 010 18.29c.373.044.734.074 1.12.074a8.189 8.189 0 005.065-1.737 4.102 4.102 0 01-3.834-2.85c.25.04.5.065.765.065.37 0 .734-.049 1.08-.147A4.092 4.092 0 01.8 8.582v-.05a4.119 4.119 0 001.853.522A4.099 4.099 0 01.812 5.847c0-.02 0-.042.002-.062a11.653 11.653 0 008.457 4.287A4.62 4.62 0 0122 5.924a8.215 8.215 0 002.018-.559 4.108 4.108 0 01-1.803 2.268 8.233 8.233 0 002.368-.648 8.897 8.897 0 01-2.062 2.112z"></path></svg></a>
<a aria-label="GitHub" className="hover:text-purple-200 transition" href="#"><svg className="h-5 w-5" fill="currentColor" viewbox="0 0 24 24"><path d="M12 .29a12 12 0 00-3.797 23.401c.6.11.82-.26.82-.577v-2.17c-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.332-1.756-1.332-1.756-1.09-.744.084-.729.084-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.306 3.495.999.106-.775.418-1.307.76-1.608-2.665-.301-5.466-1.332-5.466-5.933 0-1.31.469-2.381 1.236-3.222-.123-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.301 1.23a11.502 11.502 0 016.002 0c2.292-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.873.119 3.176.77.841 1.235 1.912 1.235 3.222 0 4.61-2.805 5.629-5.476 5.925.429.369.813 1.096.813 2.211v3.285c0 .32.217.694.825.576A12 12 0 0012 .29"></path></svg></a>
<a aria-label="LinkedIn" className="hover:text-purple-200 transition" href="#"><svg className="h-5 w-5" fill="currentColor" viewbox="0 0 24 24"><path d="M19 0h-14a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5v-14a5 5 0 00-5-5zm-11 19h-3v-9h3zm-1.5-10.268a1.752 1.752 0 110-3.505 1.752 1.752 0 010 3.505zm15.5 10.268h-3v-4.5c0-1.07-.02-2.450-1.492-2.450-1.495 0-1.725 1.166-1.725 2.372v4.578h-3v-9h2.88v1.23h.04a3.157 3.157 0 012.847-1.568c3.042 0 3.605 2.003 3.605 4.612v4.726z"></path></svg></a>
</div>
</div>
<nav className="flex flex-col md:flex-row gap-9 w-full md:w-auto md:justify-end text-center md:text-left">
<div>
<div className="text-xs font-semibold uppercase tracking-widest mb-3 text-purple-400">Product</div>
<ul className="space-y-2">
<li><a className="text-purple-200 hover:text-purple-50 transition" href="#">Features</a></li>
<li><a className="text-purple-200 hover:text-purple-50 transition" href="#">Pricing</a></li>
<li><a className="text-purple-200 hover:text-purple-50 transition" href="#">Integrations</a></li>
<li><a className="text-purple-200 hover:text-purple-50 transition" href="#">Updates</a></li>
</ul>
</div>
<div>
<div className="text-xs font-semibold uppercase tracking-widest mb-3 text-purple-400">Company</div>
<ul className="space-y-2">
<li><a className="text-purple-200 hover:text-purple-50 transition" href="#">About</a></li>
<li><a className="text-purple-200 hover:text-purple-50 transition" href="#">Careers</a></li>
<li><a className="text-purple-200 hover:text-purple-50 transition" href="#">Blog</a></li>
<li><a className="text-purple-200 hover:text-purple-50 transition" href="#">Contact</a></li>
</ul>
</div>
<div>
<div className="text-xs font-semibold uppercase tracking-widest mb-3 text-purple-400">Resources</div>
<ul className="space-y-2">
<li><a className="text-purple-200 hover:text-purple-50 transition" href="#">Docs</a></li>
<li><a className="text-purple-200 hover:text-purple-50 transition" href="#">Community</a></li>
<li><a className="text-purple-200 hover:text-purple-50 transition" href="#">Support</a></li>
<li><a className="text-purple-200 hover:text-purple-50 transition" href="#">Security</a></li>
</ul>
</div>
</nav>
</div>
<div className="mt-10 text-center text-xs text-purple-200 relative z-10">
<span>© 2024 Lumino. All rights reserved.</span>
</div>
</footer>

    </>
  );
}
