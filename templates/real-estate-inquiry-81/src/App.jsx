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
      
<div className="w-full max-w-2xl">

<div className="flex justify-center mb-12">
<span className="text-xl font-semibold tracking-tighter uppercase">RE</span>
</div>

<div className="glass-effect border border-zinc-200/60 rounded-3xl p-8 md:p-12 shadow-sm">
<div className="mb-10 space-y-2">
<h1 className="text-3xl font-semibold tracking-tight text-zinc-900">Let's find your home.</h1>
<p className="text-base text-zinc-500 font-normal">Tell us what you're looking for.</p>
</div>
<form action="#" className="space-y-8">

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="relative group">
<div className="absolute left-0 top-3 text-zinc-400 group-focus-within:text-zinc-900 transition-colors">
<iconify-icon icon="solar:user-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<input className="block w-full pl-8 py-2 bg-transparent border-b border-zinc-200 focus:border-zinc-900 outline-none transition-all text-sm font-normal" id="name" placeholder=" " type="text"/>
<label className="absolute left-8 top-2 text-sm text-zinc-400 pointer-events-none transition-all duration-300 origin-left" htmlFor="name">Full Name</label>
</div>
<div className="relative group">
<div className="absolute left-0 top-3 text-zinc-400 group-focus-within:text-zinc-900 transition-colors">
<iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<input className="block w-full pl-8 py-2 bg-transparent border-b border-zinc-200 focus:border-zinc-900 outline-none transition-all text-sm font-normal" id="email" placeholder=" " type="email"/>
<label className="absolute left-8 top-2 text-sm text-zinc-400 pointer-events-none transition-all duration-300 origin-left" htmlFor="email">Email Address</label>
</div>
</div>

<div className="relative group">
<div className="absolute left-0 top-3 text-zinc-400 group-focus-within:text-zinc-900 transition-colors">
<iconify-icon icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<input className="block w-full pl-8 py-2 bg-transparent border-b border-zinc-200 focus:border-zinc-900 outline-none transition-all text-sm font-normal" id="phone" placeholder=" " type="tel"/>
<label className="absolute left-8 top-2 text-sm text-zinc-400 pointer-events-none transition-all duration-300 origin-left" htmlFor="phone">Phone Number</label>
</div>

<div className="relative group">
<div className="absolute left-0 top-3 text-zinc-400 group-focus-within:text-zinc-900 transition-colors">
<iconify-icon icon="solar:home-2-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<textarea className="block w-full pl-8 py-2 bg-transparent border-b border-zinc-200 focus:border-zinc-900 outline-none transition-all text-sm font-normal resize-none" id="message" placeholder=" " rows="4"></textarea>
<label className="absolute left-8 top-2 text-sm text-zinc-400 pointer-events-none transition-all duration-300 origin-left" htmlFor="message">How can we help you?</label>
</div>

<div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="relative flex items-center">
<input className="peer h-5 w-5 appearance-none rounded-md border border-zinc-300 bg-white checked:bg-zinc-900 checked:border-zinc-900 transition-all cursor-pointer" id="consent" type="checkbox"/>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 left-1 pointer-events-none" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<label className="text-xs text-zinc-500 font-normal cursor-pointer select-none" htmlFor="consent">I agree to the privacy policy</label>
</div>
<button className="w-full md:w-auto px-10 py-4 bg-zinc-900 text-white rounded-full text-sm font-medium hover:bg-zinc-800 transition-all active:scale-95 flex items-center justify-center gap-2 group" type="submit">
                        Inquire Now
                        <iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</button>
</div>
</form>
</div>

<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
<div className="space-y-1">
<p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Office</p>
<p className="text-sm text-zinc-600 font-normal">Real Estate HQ, NY 10013</p>
</div>
<div className="space-y-1 text-center md:text-left">
<p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Direct</p>
<p className="text-sm text-zinc-600 font-normal">+1 (555) 000-REAL</p>
</div>
<div className="space-y-1 text-right">
<p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Connect</p>
<div className="flex justify-end gap-4">
<a className="text-zinc-600 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-600 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="solar:chat-round-line-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

    </>
  );
}
