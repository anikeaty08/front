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
      

<div className="relative w-full max-w-5xl bg-[#fcfcfb] shadow-2xl overflow-hidden flex flex-col items-center justify-center p-8 md:p-16" style={{aspectRatio: '1.414 / 1', minHeight: '700px'}}>

<div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none" style={{backgroundImage: 'repeating-linear-gradient(45deg, #0f172a 0, #0f172a 1px, transparent 1px, transparent 12px)'}}></div>

<div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-[0.03] overflow-hidden">
<span className="text-9xl font-semibold tracking-tighter text-slate-900 transform -rotate-12 scale-150 select-none" style={{fontFamily: '\'Cinzel\', serif'}}>NMEX</span>
</div>

<div className="absolute inset-6 border-[3px] border-slate-900 z-10 pointer-events-none"></div>
<div className="absolute inset-8 border border-amber-700/60 z-10 pointer-events-none"></div>


<div className="absolute top-5 left-5 w-6 h-6 border-t-[3px] border-l-[3px] border-amber-700 z-10 pointer-events-none"></div>
<div className="absolute top-7 left-7 w-4 h-4 border-t border-l border-slate-900 z-10 pointer-events-none"></div>

<div className="absolute top-5 right-5 w-6 h-6 border-t-[3px] border-r-[3px] border-amber-700 z-10 pointer-events-none"></div>
<div className="absolute top-7 right-7 w-4 h-4 border-t border-r border-slate-900 z-10 pointer-events-none"></div>

<div className="absolute bottom-5 left-5 w-6 h-6 border-b-[3px] border-l-[3px] border-amber-700 z-10 pointer-events-none"></div>
<div className="absolute bottom-7 left-7 w-4 h-4 border-b border-l border-slate-900 z-10 pointer-events-none"></div>

<div className="absolute bottom-5 right-5 w-6 h-6 border-b-[3px] border-r-[3px] border-amber-700 z-10 pointer-events-none"></div>
<div className="absolute bottom-7 right-7 w-4 h-4 border-b border-r border-slate-900 z-10 pointer-events-none"></div>

<div className="relative z-20 flex flex-col items-center w-full h-full text-center">

<div className="flex flex-col items-center mb-8 mt-4">

<div className="w-16 h-16 rounded-full border border-amber-700 flex items-center justify-center mb-5 bg-white shadow-sm relative">
<div className="absolute inset-[3px] border border-slate-900/20 rounded-full"></div>
<span className="font-semibold text-slate-900 tracking-tighter text-base" style={{fontFamily: '\'Cinzel\', serif'}}>NMEX</span>
</div>

<h2 className="text-xs font-semibold tracking-[0.2em] text-slate-900 uppercase" style={{fontFamily: '\'Inter\', sans-serif'}}>NMEX</h2>
<p className="text-xs tracking-[0.25em] text-slate-600 uppercase mt-2" style={{fontFamily: '\'Inter\', sans-serif'}}>Verification &amp; Authorization Services</p>
</div>

<div className="mb-8 w-full flex flex-col items-center">
<h1 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight uppercase" style={{fontFamily: '\'Cinzel\', serif'}}>Certificate</h1>
<div className="w-16 border-t border-amber-700 mt-5 mb-5 opacity-80"></div>
<h3 className="text-xs tracking-[0.15em] text-slate-700 uppercase" style={{fontFamily: '\'Inter\', sans-serif'}}>Certification of Compliance &amp; Documentation Finalization</h3>
</div>

<div className="mb-10 w-full flex flex-col items-center">
<p className="text-sm text-slate-500 italic mb-4" style={{fontFamily: '\'Merriweather\', serif'}}>Presented to</p>

<h2 className="text-4xl text-slate-900 tracking-normal" style={{fontFamily: '\'Great Vibes\', cursive'}}>Sharday Charley SW</h2>

<div className="flex items-center justify-center mt-6 w-full max-w-xs opacity-60">
<div className="h-[1px] w-full bg-slate-300"></div>
<div className="w-2 h-2 rounded-full bg-amber-700 mx-3 flex-shrink-0"></div>
<div className="h-[1px] w-full bg-slate-300"></div>
</div>
</div>

<div className="max-w-3xl mx-auto space-y-5 mb-14 px-4 md:px-12">
<p className="text-sm md:text-base leading-relaxed text-slate-800 text-center font-light" style={{fontFamily: '\'Merriweather\', serif'}}>
                    This certificate confirms that the registered vehicle documentation, compliance verification, and administrative processing associated with the asset record have been successfully reviewed and finalized within the NMEX registry system.
                </p>
<p className="text-sm md:text-base leading-relaxed text-slate-800 text-center font-light" style={{fontFamily: '\'Merriweather\', serif'}}>
                    The document certifies that the record indicates the asset has successfully completed the required compliance procedures within the registry framework.
                </p>
</div>

<div className="w-full max-w-4xl flex flex-row justify-between items-end mt-auto px-4 md:px-12 mb-4">

<div className="text-left flex flex-col items-start w-64">
<p className="text-xs text-slate-500 italic mb-10" style={{fontFamily: '\'Merriweather\', serif'}}>Authorized By</p>

<div className="w-full border-b border-slate-900 mb-3 relative flex items-end">
<span className="absolute bottom-1 left-4 text-2xl text-slate-800 opacity-80 select-none tracking-normal" style={{fontFamily: '\'Great Vibes\', cursive'}}>Daniel R. Hoffman</span>
</div>

<p className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-1" style={{fontFamily: '\'Inter\', sans-serif'}}>Daniel R Hoffman</p>
<p className="text-xs text-slate-600 tracking-wide mb-1" style={{fontFamily: '\'Inter\', sans-serif'}}>Authorization Officer</p>
<p className="text-xs text-slate-500" style={{fontFamily: '\'Inter\', sans-serif'}}>NMEX Verification &amp; Authorization Services</p>
</div>

<div className="relative flex items-center justify-center w-32 h-32">

<div className="absolute inset-0 bg-amber-700 flex items-center justify-center shadow-lg" style={{clipPath: 'polygon(50% 0%, 61% 11%, 76% 8%, 82% 23%, 97% 28%, 94% 43%, 100% 57%, 86% 67%, 87% 83%, 72% 87%, 64% 100%, 48% 95%, 34% 100%, 26% 86%, 11% 83%, 13% 67%, 0% 55%, 5% 40%, 0% 25%, 15% 18%, 22% 4%, 38% 9%)'}}>

<div className="w-28 h-28 bg-[#fcfcfb] rounded-full flex flex-col items-center justify-center border border-amber-700/50 shadow-inner">
<span className="text-sm font-semibold tracking-tighter text-slate-900 mt-1" style={{fontFamily: '\'Cinzel\', serif'}}>NMEX</span>
<iconify-icon className="text-amber-700 my-1" icon="solar:verified-check-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-xs tracking-wider text-slate-700 uppercase text-center leading-tight scale-90" style={{fontFamily: '\'Inter\', sans-serif'}}>Registry<br/>Verified</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-12 left-12 text-xs text-slate-400/80 tracking-widest z-10 uppercase" style={{fontFamily: '\'Inter\', sans-serif'}}>
                Ref: NMX-VAC-9382-74A
            </div>
<div className="absolute bottom-12 right-12 text-xs text-slate-400/80 tracking-widest z-10 uppercase" style={{fontFamily: '\'Inter\', sans-serif'}}>
                Framework Sec. 04
            </div>
</div>
</div>

    </>
  );
}
