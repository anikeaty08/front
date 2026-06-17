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



        document.getElementById('nsbForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const page1 = document.getElementById('page-1');
            const page2 = document.getElementById('page-2');
            const btn = this.querySelector('button');
            const btnText = btn.querySelector('span');

            // Button Loading State
            btnText.innerText = "Generating...";
            btn.style.opacity = "0.7";
            btn.style.cursor = "wait";

            setTimeout(() => {
                // Fade out Page 1
                page1.style.opacity = '0';
                
                setTimeout(() => {
                    // Switch Pages
                    page1.classList.add('page-hidden');
                    page2.classList.remove('page-hidden');
                    page2.style.display = 'flex'; // Ensure flex layout
                    
                    // Trigger reflow
                    void page2.offsetWidth;

                    // Fade in Page 2
                    page2.style.opacity = '1';
                    
                }, 800); // Wait for fade out
            }, 1000); // Artificial processing delay
        });
    
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
      

<main className="w-full max-w-2xl px-6 py-12 flex flex-col items-center relative z-20" id="page-1">

<header className="w-full flex justify-between items-center mb-16 animate-fade-up">
<div className="text-xs tracking-[0.2em] text-neutral-400 uppercase font-medium">NSB Confidential</div>
<div className="text-[10px] tracking-widest text-amber-200 border border-amber-900/30 bg-amber-900/10 px-2 py-1 uppercase">Members Only</div>
</header>

<h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white text-center mb-6 animate-fade-up delay-100">
            Private Access.<br/>
<span className="text-neutral-500 font-light">Dedicated to Northsidebaby.</span>
</h1>
<div className="text-sm text-neutral-400 text-center max-w-md mx-auto leading-relaxed mb-12 animate-fade-up delay-200">
            An exclusive music membership providing priority access to select experiences, confidential updates, and opportunities.
        </div>

<div className="scene mb-16 animate-fade-up delay-300">
<div className="light-beam"></div>
<div className="card-container">

<div className="card-face">
<div className="ornamental-border"></div>

<div className="absolute top-6 left-6 text-[8px] uppercase tracking-[0.2em] text-amber-200 font-serif">Membership</div>
<div className="absolute top-6 right-6 text-[8px] uppercase tracking-[0.2em] text-amber-200 font-semibold border border-amber-500/50 px-1.5 py-0.5">VIP Access</div>

<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
<h2 className="text-5xl font-bold tracking-tighter text-gold-gradient drop-shadow-md">NSB</h2>
<div className="w-12 h-[1px] bg-amber-500/50 my-2"></div>
<p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">Confidential</p>
</div>

<div className="absolute bottom-6 w-full px-6 flex justify-between items-end">
<div>
<div className="text-[6px] text-neutral-500 uppercase tracking-widest mb-1">Status</div>
<div className="text-[9px] text-amber-100 uppercase tracking-widest font-serif">Backstage Crew</div>
</div>
<div className="text-right">
<div className="text-[6px] text-neutral-500 uppercase tracking-widest mb-1">Clearance</div>
<div className="text-[9px] text-amber-100 uppercase tracking-widest font-serif">Backstage Pass</div>
</div>
</div>

<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>
</div>

<div className="card-face card-back relative p-6 flex flex-col justify-between">
<div className="ornamental-border opacity-50"></div>
<div className="flex items-start gap-4 mt-2 relative z-10">

<div className="w-16 h-20 bg-neutral-900 border border-neutral-700 flex items-center justify-center">
<iconify-icon className="text-neutral-600 text-2xl" icon="solar:user-linear"></iconify-icon>
</div>

<div className="flex-1 space-y-3 pt-1">
<div>
<div className="text-[6px] uppercase tracking-widest text-neutral-500 mb-1">Name</div>
<div className="w-full h-[1px] bg-neutral-700"></div>
</div>
<div>
<div className="text-[6px] uppercase tracking-widest text-neutral-500 mb-1">Location</div>
<div className="w-full h-[1px] bg-neutral-700"></div>
</div>
<div>
<div className="text-[6px] uppercase tracking-widest text-neutral-500 mb-1">Date Issued</div>
<div className="w-full h-[1px] bg-neutral-700"></div>
</div>
</div>
</div>
<div className="text-center pb-2 relative z-10">
<p className="text-[6px] text-neutral-600 uppercase tracking-wider">Property of NSB Management. Non-transferable.</p>
</div>
</div>
</div>
<div className="display-base"></div>
</div>

<div className="w-full max-w-md animate-fade-up delay-500">
<h3 className="text-lg font-medium text-white mb-6 animate-underline inline-block">What NSB Confidential Includes</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-8">
                NSB Confidential is an exclusive music membership created for dedicated supporters of Northsidebaby. Membership provides priority access to private music-related experiences and confidential opportunities.
            </p>
<div className="space-y-4 mb-12">
<div className="flex items-start opacity-0 animate-fade-up" style={{animationDelay: '600ms', animationFillMode: 'forwards'}}>
<div className="custom-bullet"></div>
<p className="text-sm text-neutral-300">Eligibility for meet &amp; greet opportunities</p>
</div>
<div className="flex items-start opacity-0 animate-fade-up" style={{animationDelay: '700ms', animationFillMode: 'forwards'}}>
<div className="custom-bullet"></div>
<p className="text-sm text-neutral-300">Access to virtual calls and video calls when available</p>
</div>
<div className="flex items-start opacity-0 animate-fade-up" style={{animationDelay: '800ms', animationFillMode: 'forwards'}}>
<div className="custom-bullet"></div>
<p className="text-sm text-neutral-300">Early or confidential music updates</p>
</div>
<div className="flex items-start opacity-0 animate-fade-up" style={{animationDelay: '900ms', animationFillMode: 'forwards'}}>
<div className="custom-bullet"></div>
<p className="text-sm text-neutral-300">Priority notifications for releases and announcements</p>
</div>
<div className="flex items-start opacity-0 animate-fade-up" style={{animationDelay: '1000ms', animationFillMode: 'forwards'}}>
<div className="custom-bullet"></div>
<p className="text-sm text-neutral-300">Exclusive fan-only access not available to the public</p>
</div>
</div>
<p className="text-xs text-neutral-600 italic mb-12">
                Access is limited and issued individually through the NSB Confidential system.
            </p>

<form className="w-full mb-12" id="nsbForm">
<div className="input-group">
<input className="input-field" id="fullname" placeholder=" " required="" type="text"/>
<label className="input-label" htmlFor="fullname">Full Name</label>
</div>
<div className="input-group">
<input className="input-field" id="location" placeholder=" " required="" type="text"/>
<label className="input-label" htmlFor="location">Location</label>
</div>
<div className="input-group">
<input className="input-field" id="refid" placeholder=" " required="" type="text"/>
<label className="input-label" htmlFor="refid">Reference ID (Optional)</label>
</div>
<button className="w-full mt-8 border border-neutral-700 hover:border-amber-200 text-neutral-300 hover:text-amber-100 py-4 px-6 text-xs uppercase tracking-[0.2em] transition-all duration-500 ease-out group relative overflow-hidden" type="submit">
<span className="relative z-10">Generate NSB Code</span>
<div className="absolute inset-0 bg-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</button>
</form>
</div>
</main>

<main className="page-hidden w-full min-h-screen flex flex-col items-center justify-center px-6 py-12 relative z-20" id="page-2">

<div className="text-center mb-12 animate-fade-up">
<iconify-icon className="text-amber-200 text-4xl mb-4 opacity-80" icon="solar:verified-check-linear"></iconify-icon>
<h2 className="text-2xl font-medium tracking-tight text-white mb-2">Code Generated</h2>
<p className="text-sm text-neutral-400">Your unique confidential access credential is ready.</p>
</div>

<div className="relative w-[340px] h-[200px] mb-12 animate-fade-up delay-100 transform scale-100 transition-transform hover:scale-[1.02] duration-700">

<div className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl shadow-amber-900/10 border border-neutral-800 bg-neutral-950">
<div className="ornamental-border"></div>
<div className="absolute top-6 left-6 text-[8px] uppercase tracking-[0.2em] text-amber-200 font-serif">Membership</div>
<div className="absolute top-6 right-6 text-[8px] uppercase tracking-[0.2em] text-amber-200 font-semibold border border-amber-500/50 px-1.5 py-0.5">VIP Access</div>
<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
<h2 className="text-5xl font-bold tracking-tighter text-gold-gradient">NSB</h2>
<div className="w-12 h-[1px] bg-amber-500/50 my-2"></div>
<p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">Confidential</p>
</div>
<div className="absolute bottom-6 w-full px-6 flex justify-between items-end">
<div>
<div className="text-[6px] text-neutral-500 uppercase tracking-widest mb-1">Status</div>
<div className="text-[9px] text-amber-100 uppercase tracking-widest font-serif">Backstage Crew</div>
</div>
<div className="text-right">
<div className="text-[6px] text-neutral-500 uppercase tracking-widest mb-1">Clearance</div>
<div className="text-[9px] text-amber-100 uppercase tracking-widest font-serif">Backstage Pass</div>
</div>
</div>
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>
</div>
</div>

<div className="mb-8 text-center animate-fade-up delay-200">
<p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">NSB Confidential Card Fee</p>
<p className="text-2xl font-serif text-white">$300.00</p>
</div>

<div className="w-full max-w-xs mb-8 animate-fade-up delay-300">
<div className="w-full border border-dashed border-neutral-700 bg-neutral-900/30 py-6 text-center">
<span className="text-3xl font-mono tracking-widest text-amber-100">NSB-4729</span>
</div>
</div>

<div className="max-w-sm text-center animate-fade-up delay-500">
<p className="text-xs text-neutral-400 leading-relaxed">
<span className="text-white font-medium">Action Required:</span> Screenshot or copy the code above and send it directly to <span className="text-amber-200">NSB Management</span> to complete registration and activate your card.
            </p>
</div>

<div className="mt-16 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
<p className="text-[10px] text-center uppercase tracking-widest text-neutral-600 mb-4">Card Reverse View</p>
<div className="relative w-[280px] h-[165px] bg-neutral-900 border border-neutral-800 rounded-lg p-5 flex flex-col justify-between">
<div className="ornamental-border opacity-30"></div>
<div className="flex items-start gap-3 mt-1 relative z-10">
<div className="w-12 h-16 bg-neutral-950 border border-neutral-800 flex items-center justify-center">
<iconify-icon className="text-neutral-700" icon="solar:user-linear"></iconify-icon>
</div>
<div className="flex-1 space-y-2 pt-1">
<div><div className="w-full h-[1px] bg-neutral-800 mt-3"></div></div>
<div><div className="w-full h-[1px] bg-neutral-800 mt-3"></div></div>
<div><div className="w-full h-[1px] bg-neutral-800 mt-3"></div></div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
