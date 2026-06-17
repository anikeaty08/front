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



        function generateCode() {
            const nameInput = document.getElementById('input-name');
            const locInput = document.getElementById('input-location');
            
            // Simple validation
            if(!nameInput.value || !locInput.value) {
                nameInput.style.borderColor = "#991b1b";
                setTimeout(() => nameInput.style.borderColor = "#333", 2000);
                return;
            }

            // Generate Random Code
            const randomNum = Math.floor(1000 + Math.random() * 9000);
            const code = `NSB-${randomNum}`;
            document.getElementById('generated-code-display').innerText = code;

            // Transition
            const page1 = document.getElementById('page-one');
            const page2 = document.getElementById('page-two');

            // Fade out page 1
            page1.style.opacity = '0';
            page1.style.transition = 'opacity 0.5s ease';
            
            setTimeout(() => {
                page1.style.display = 'none';
                page2.style.display = 'flex';
                window.scrollTo(0,0);
            }, 500);
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
      

<header className="mb-12 text-center tracking-[0.2em] uppercase text-xs text-neutral-500 font-medium z-10">
        Northsidebaby Official
    </header>

<main className="w-full max-w-lg px-6 relative z-10 pb-20" id="app-container">

<div className="flex flex-col items-center" id="page-one">

<div className="text-center mb-10 space-y-3">
<h1 className="text-2xl font-serif tracking-tight text-white/90">NSB Confidential</h1>
<p className="text-xs leading-relaxed text-neutral-400 font-light max-w-xs mx-auto">
                    A private music membership for the dedicated few. Access select experiences, backstage insights, and high-priority opportunities connected to Northsidebaby.
                </p>
</div>

<div className="relative w-full h-[320px] flex justify-center items-center mb-12 stage-container">

<div className="absolute bottom-[40px] w-40 h-64 spotlight-beam pointer-events-none opacity-60"></div>

<div className="card-wrapper z-20" id="main-card">

<div className="card-face flex flex-col items-center justify-between py-5 px-6 gold-border">

<div className="corner-ornament tl"></div>
<div className="corner-ornament tr"></div>
<div className="corner-ornament bl"></div>
<div className="corner-ornament br"></div>

<div className="w-full flex justify-between items-center opacity-90">
<span className="text-[0.55rem] tracking-[0.2em] uppercase text-neutral-300 font-medium">VIP Access</span>
<span className="text-[0.55rem] tracking-[0.1em] uppercase text-neutral-400">No. <span className="text-white">0000</span></span>
</div>

<div className="flex flex-col items-center justify-center flex-grow">
<h2 className="text-5xl font-serif gold-text tracking-tighter" style={{textShadow: '0 4px 10px rgba(0,0,0,0.5)'}}>NSB</h2>
<div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-2 mb-1"></div>
<span className="text-[0.5rem] uppercase tracking-[0.3em] text-neutral-400">Confidential</span>
</div>

<div className="w-full text-center space-y-1">
<div className="text-[0.6rem] uppercase tracking-[0.2em] text-white font-medium">Backstage Pass</div>
<div className="text-[0.45rem] uppercase tracking-[0.15em] text-[#D4AF37]">Backstage Crew</div>
</div>
</div>

<div className="card-face card-back flex flex-col p-6 gold-border">

<div className="h-8 bg-neutral-950 w-[120%] -ml-4 mb-4 mt-2"></div>
<div className="flex items-start gap-4 mt-1">

<div className="w-16 h-16 bg-neutral-800 border border-neutral-700 flex items-center justify-center grayscale opacity-50">
<iconify-icon className="text-neutral-500" icon="solar:user-linear" width="24"></iconify-icon>
</div>

<div className="flex-1 space-y-3">
<div className="space-y-1">
<span className="text-[0.4rem] uppercase tracking-widest text-neutral-500 block">Name</span>
<div className="h-[1px] w-full bg-neutral-700"></div>
</div>
<div className="space-y-1">
<span className="text-[0.4rem] uppercase tracking-widest text-neutral-500 block">Location</span>
<div className="h-[1px] w-full bg-neutral-700"></div>
</div>
<div className="space-y-1">
<span className="text-[0.4rem] uppercase tracking-widest text-neutral-500 block">Date Issued</span>
<div className="h-[1px] w-20 bg-neutral-700"></div>
</div>
</div>
</div>
<div className="mt-auto text-center">
<p className="text-[0.35rem] text-neutral-600 tracking-wider uppercase">Authorized for internal use only. Non-transferable.</p>
</div>
</div>
</div>

<div className="absolute bottom-[50px] w-32 h-4 floating-shadow blur-md"></div>

<div className="absolute bottom-0 w-48 h-12 rounded-[100%] pedestal z-10 border-t border-white/5"></div>
</div>

<div className="w-full mb-16 fade-in" style={{animationDelay: '0.2s'}}>
<h3 className="text-sm font-medium text-white tracking-wide mb-6 border-b border-neutral-800 pb-2">What NSB Confidential Includes</h3>
<p className="text-xs text-neutral-400 font-light leading-6 mb-6">
                    NSB Confidential is an exclusive music membership created for dedicated supporters of Northsidebaby. Membership provides priority access to private music-related experiences and confidential opportunities.
                </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#D4AF37] mt-0.5" icon="solar:star-linear" width="16"></iconify-icon>
<span className="text-xs text-neutral-300 font-light">Eligibility for meet &amp; greet opportunities</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#D4AF37] mt-0.5" icon="solar:videocamera-record-linear" width="16"></iconify-icon>
<span className="text-xs text-neutral-300 font-light">Access to virtual calls and video calls when available</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#D4AF37] mt-0.5" icon="solar:music-note-linear" width="16"></iconify-icon>
<span className="text-xs text-neutral-300 font-light">Early or confidential music updates &amp; priority notifications</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#D4AF37] mt-0.5" icon="solar:shield-keyhole-linear" width="16"></iconify-icon>
<span className="text-xs text-neutral-300 font-light">Exclusive fan-only access not available to the public</span>
</li>
</ul>
<p className="text-[0.65rem] text-neutral-500 italic text-center">
                    Access is limited and issued individually through the NSB Confidential system.
                </p>
</div>

<div className="w-full bg-neutral-900/30 p-8 border border-neutral-800 rounded-sm fade-in" style={{animationDelay: '0.4s'}}>
<div className="space-y-6">
<div className="space-y-1">
<label className="text-[0.6rem] uppercase tracking-widest text-neutral-500">Full Name</label>
<input className="w-full bg-transparent text-sm text-white py-2 font-light input-underline" id="input-name" placeholder="Enter your full name" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[0.6rem] uppercase tracking-widest text-neutral-500">Location</label>
<input className="w-full bg-transparent text-sm text-white py-2 font-light input-underline" id="input-location" placeholder="City, Country" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[0.6rem] uppercase tracking-widest text-neutral-500">Reference ID</label>
<input className="w-full bg-transparent text-sm text-neutral-400 py-2 font-light input-underline cursor-not-allowed opacity-60" readonly="" type="text" value="REF-INTERNAL-99"/>
</div>
<button className="w-full mt-4 bg-white text-black py-3.5 text-xs font-medium uppercase tracking-widest hover:bg-neutral-200 transition-colors duration-300 flex justify-center items-center gap-2" onclick="generateCode()">
<span>Generate NSB Code</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden-page flex flex-col items-center pt-8" id="page-two">
<div className="text-center mb-8 fade-in">
<iconify-icon className="text-[#D4AF37] mb-4" icon="solar:verified-check-linear" width="32"></iconify-icon>
<h2 className="text-lg font-medium text-white tracking-tight">Code Generated</h2>
<p className="text-xs text-neutral-400 mt-2">Your NSB Confidential access is ready for activation.</p>
</div>

<div className="relative w-full h-[240px] flex justify-center items-center mb-10 fade-in" style={{animationDelay: '0.2s'}}>

<div className="w-[300px] h-[189px] relative rounded-xl overflow-hidden shadow-2xl">

<div className="absolute inset-0 flex flex-col items-center justify-between py-5 px-6 gold-border" style={{background: 'radial-gradient(circle at center, #1a1a1a 0%, #080808 100%)'}}>
<div className="corner-ornament tl"></div>
<div className="corner-ornament tr"></div>
<div className="corner-ornament bl"></div>
<div className="corner-ornament br"></div>
<div className="w-full flex justify-between items-center opacity-90">
<span className="text-[0.5rem] tracking-[0.2em] uppercase text-neutral-300 font-medium">VIP Access</span>
<span className="text-[0.5rem] tracking-[0.1em] uppercase text-neutral-400">No. <span className="text-white">4729</span></span>
</div>
<div className="flex flex-col items-center justify-center flex-grow">
<h2 className="text-4xl font-serif gold-text tracking-tighter" style={{textShadow: '0 4px 10px rgba(0,0,0,0.5)'}}>NSB</h2>
<div className="h-[1px] w-10 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-2 mb-1"></div>
<span className="text-[0.4rem] uppercase tracking-[0.3em] text-neutral-400">Confidential</span>
</div>
<div className="w-full text-center space-y-1">
<div className="text-[0.55rem] uppercase tracking-[0.2em] text-white font-medium">Backstage Pass</div>
<div className="text-[0.4rem] uppercase tracking-[0.15em] text-[#D4AF37]">Backstage Crew</div>
</div>
</div>
</div>
</div>

<div className="w-full max-w-xs text-center space-y-6 fade-in" style={{animationDelay: '0.4s'}}>
<div className="flex justify-between items-center border-b border-neutral-800 pb-4">
<span className="text-xs text-neutral-400 font-light">NSB Confidential Card Fee</span>
<span className="text-sm font-medium text-white">$300.00</span>
</div>
<div className="bg-[#111] border border-[#333] p-6 rounded-sm relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
<span className="text-[0.6rem] uppercase tracking-widest text-neutral-500 block mb-2">Your Unique Code</span>
<div className="text-2xl font-mono text-[#D4AF37] tracking-wider" id="generated-code-display">NSB-4729</div>
</div>
<div className="bg-neutral-900/50 p-4 rounded text-left border border-neutral-800/50">
<div className="flex gap-3">
<iconify-icon className="text-neutral-500 shrink-0" icon="solar:info-circle-linear" width="16"></iconify-icon>
<p className="text-[0.65rem] text-neutral-400 leading-relaxed font-light">
<span className="text-white font-normal">INSTRUCTIONS:</span> Screenshot this page or copy the code above. Send it directly to NSB Management via DM to complete registration and card activation.
                        </p>
</div>
</div>
</div>
</div>
</main>
<footer className="fixed bottom-6 text-[0.55rem] text-neutral-700 tracking-widest uppercase z-0">
        © 2024 Northsidebaby. All Rights Reserved.
    </footer>


    </>
  );
}
