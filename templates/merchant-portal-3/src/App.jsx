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



        lucide.createIcons();

        // Text animation logic
        const words = [
            "digital payments.",
            "global commerce.",
            "online business.",
            "seamless checkouts.",
            "financial growth."
        ];
        
        let currentIndex = 0;
        const animatedText = document.getElementById('animated-text');

        setInterval(() => {
            // Fade out and slide down
            animatedText.classList.remove('opacity-100', 'translate-y-0');
            animatedText.classList.add('opacity-0', 'translate-y-4');
            
            setTimeout(() => {
                // Change text
                currentIndex = (currentIndex + 1) % words.length;
                animatedText.textContent = words[currentIndex];
                
                // Fade in and slide to original position
                animatedText.classList.remove('opacity-0', 'translate-y-4');
                animatedText.classList.add('opacity-100', 'translate-y-0');
            }, 500); // Wait for fade out transition
        }, 3000); // Interval between changes
    
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
      
<div className="flex min-h-screen w-full flex-col lg:flex-row">

<div className="relative hidden lg:flex lg:w-3/5 flex-col justify-between overflow-hidden bg-slate-950 p-12 xl:p-20">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950"></div>
<div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
<div className="absolute bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-blue-400/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full justify-center max-w-2xl mx-auto w-full">

<div className="mb-16 flex items-center gap-3 text-white">
<div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg shadow-blue-500/20 ring-1 ring-white/10">
<i className="w-5 h-5 text-white" data-lucide="zap" strokeWidth="1.5"></i>
<div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-slate-950"></div>
</div>
<span className="text-3xl font-semibold tracking-tight">Fiuu</span>
</div>

<div className="space-y-6">
<h1 className="text-5xl xl:text-6xl font-semibold text-white tracking-tight leading-[1.1]">
                        Powering the future of <br/>
<span className="inline-block transition-all duration-500 opacity-100 translate-y-0 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300" id="animated-text">digital payments.</span>
</h1>
<p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                        Fiuu provides cutting-edge payment solutions for merchants worldwide. Our secure merchant portal gives you complete control over your transactions and business operations.
                    </p>
</div>
</div>

<div className="relative z-10 mt-auto pt-12 flex items-center justify-between text-base text-slate-500 w-full max-w-2xl mx-auto">
<p>© 2026 Fiuu. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-slate-300 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-300 transition-colors" href="#">Terms</a>
</div>
</div>
</div>

<div className="flex-1 flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-16 xl:px-24 bg-white relative z-20 shadow-[-20px_0_40px_-15px_rgba(0,0,0,0.05)] lg:rounded-l-3xl">
<div className="mx-auto w-full max-w-[400px]">

<div className="lg:hidden mb-12 flex items-center gap-3">
<div className="relative flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-blue-600 to-blue-800 shadow-sm ring-1 ring-slate-900/5">
<i className="w-4 h-4 text-white" data-lucide="zap" strokeWidth="1.5"></i>
<div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
</div>
<span className="text-2xl font-semibold tracking-tight text-slate-900">Fiuu</span>
</div>

<div className="mb-10 text-center lg:text-left">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Merchant Portal</h2>
<p className="text-base text-slate-500">Sign in to access your account</p>
</div>

<form action="#" className="space-y-5" method="POST">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="merchant-id">Merchant ID</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<i className="w-5 h-5" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<input className="block w-full rounded-xl border-slate-200 bg-white pl-10 pr-4 py-3 text-base text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-base sm:leading-6 transition-all duration-200 outline-none hover:ring-slate-300" id="merchant-id" name="merchant-id" placeholder="Enter your Merchant ID" type="text" value="luqmanui_Dev"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="email">Email address</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<input autocomplete="email" className="block w-full rounded-xl border-slate-200 bg-white pl-10 pr-4 py-3 text-base text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-base sm:leading-6 transition-all duration-200 outline-none hover:ring-slate-300" id="email" name="email" placeholder="name@company.com" type="email" value="luqmanui@domain.com"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="password">Password</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<i className="w-5 h-5" data-lucide="lock" strokeWidth="1.5"></i>
</div>
<input autocomplete="current-password" className="block w-full rounded-xl border-slate-200 bg-white pl-10 pr-4 py-3 text-base text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-base sm:leading-6 transition-all duration-200 outline-none hover:ring-slate-300" id="password" name="password" placeholder="••••••••" type="password" value="password123"/>
</div>
</div>
<div className="pt-4">
<button className="w-full flex justify-center items-center gap-2 py-3 px-4 rounded-xl text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition-all duration-200 active:scale-[0.98]" type="submit">
                            Sign in to portal
                            <i className="w-4 h-4 text-slate-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</form>

<div className="mt-8 pt-8 border-t border-slate-100 flex flex-col items-center gap-4 text-base">
<a className="font-medium text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1.5 group" href="#">
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" data-lucide="key-round" strokeWidth="1.5"></i>
                        Forgot or expired password?
                    </a>
<a className="font-medium text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1.5 group" href="#">
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" data-lucide="refresh-cw" strokeWidth="1.5"></i>
                        Resend credentials
                    </a>
</div>
</div>
</div>
</div>


    </>
  );
}
