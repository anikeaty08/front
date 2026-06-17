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
      

<main className="w-full max-w-[480px] px-6 flex flex-col items-center justify-center flex-grow">

<div className="text-center mb-8">
<div className="flex flex-col items-center">

<div className="h-[64px] flex items-center justify-center mb-6">
<span className="logo-tracking text-4xl font-semibold uppercase flex items-center">
<span className="text-[#1E3A5F]">Ivory</span>
<span className="text-[#C9A96E]">made</span>
</span>
</div>

<h1 className="text-3xl font-semibold text-[#1E293B] tracking-tight mb-3">
                    Digital Dental Lab Ordering
                </h1>

<p className="text-base font-normal text-[#64748B] max-w-[360px] leading-relaxed">
                    Submit orders, review designs, track shipments — all in one place
                </p>
</div>
</div>

<div className="w-full max-w-[360px] space-y-4">

<button className="hover:bg-[#2D5F8A] transition-all duration-200 flex group text-sm font-semibold text-white bg-[#1E3A5F] w-full h-[44px] rounded-[8px] shadow-md items-center justify-center" onclick="window.location.href='/09-dashboard'" role="button">Sign Up<iconify-icon className="ml-2 text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></button>

<button className="w-full h-[44px] bg-transparent border border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#EBF2FA] text-sm font-semibold rounded-[8px] transition-all duration-200 flex items-center justify-center">
                Log In
            </button>
</div>

<div className="mt-12 flex items-center space-x-6 grayscale opacity-40">
<div className="flex items-center text-xs font-medium tracking-widest uppercase">
<iconify-icon className="mr-1 text-sm" icon="solar:verified-check-linear"></iconify-icon>
                B2B Certified
            </div>
<div className="flex items-center text-xs font-medium tracking-widest uppercase">
<iconify-icon className="mr-1 text-sm" icon="solar:shield-check-linear"></iconify-icon>
                Secure
            </div>
</div>
</main>

<footer className="w-full p-6 text-center">
<p className="text-xs font-medium text-[#94A3B8] tracking-wide">
            © 2026 IVORYMADE. ALL RIGHTS RESERVED.
        </p>
</footer>

<div className="fixed top-0 left-0 w-full h-1 bg-[#C9A96E]"></div>
<div className="fixed top-12 -left-24 w-64 h-64 bg-[#C9A96E] opacity-[0.03] rounded-full blur-3xl pointer-events-none"></div>
<div className="fixed bottom-12 -right-24 w-80 h-80 bg-[#1E3A5F] opacity-[0.03] rounded-full blur-3xl pointer-events-none"></div>

    </>
  );
}
