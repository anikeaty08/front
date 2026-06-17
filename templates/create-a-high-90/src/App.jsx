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
      

<nav className="absolute top-0 w-full z-50">
<div className="mx-auto max-w-7xl px-6 py-6 sm:px-8 flex justify-between items-center">
<a className="text-xl font-semibold tracking-tighter text-neutral-900" href="#">FRMR.</a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-blue-50/50 to-transparent -z-10"></div>
<div className="mx-auto max-w-7xl px-6 sm:px-8">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-6">
<span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                        Coming to Framer Marketplace
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.1] mb-6">
                        Ship stunning Framer sites, <span className="text-neutral-400">faster than ever.</span>
</h1>
<p className="text-lg text-neutral-500 mb-10 max-w-lg leading-relaxed font-light">
                        An exclusive collection of premium, highly-customizable components designed for modern SaaS and creator portfolios.
                    </p>

<form className="waitlist-input-group flex w-full max-w-md items-center gap-x-2 rounded-full border border-neutral-200 bg-white p-1.5 shadow-sm">
<div className="relative flex-grow pl-4">
<div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-neutral-400">
<iconify-icon height="18" icon="solar:letter-linear" width="18"></iconify-icon>
</div>
<input className="w-full bg-transparent pl-8 pr-4 py-2 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none" placeholder="Enter your email address" required="" type="email"/>
</div>
<button className="flex-none rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-neutral-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2" type="submit">
                            Join Waitlist
                        </button>
</form>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-400 font-light">
<iconify-icon height="16" icon="solar:shield-check-linear" width="16"></iconify-icon>
                        No spam. Unsubscribe anytime. Early access only.
                    </div>
</div>

<div className="relative mx-auto w-full max-w-lg lg:max-w-none">
<div className="absolute -inset-x-4 -inset-y-4 z-0 bg-gradient-to-tr from-blue-100/40 to-purple-100/40 opacity-70 blur-3xl rounded-full"></div>
<div className="relative z-10 rounded-2xl border border-neutral-200/80 bg-white/60 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] overflow-hidden">

<div className="border-b border-neutral-100/80 bg-white/40 px-4 py-3 flex items-center gap-2">
<div className="h-2.5 w-2.5 rounded-full bg-neutral-200"></div>
<div className="h-2.5 w-2.5 rounded-full bg-neutral-200"></div>
<div className="h-2.5 w-2.5 rounded-full bg-neutral-200"></div>
</div>

<div className="p-6 grid gap-5">

<div className="flex justify-between items-center mb-2">
<div className="h-4 w-1/4 rounded-md bg-neutral-200/80"></div>
<div className="h-8 w-24 rounded-full bg-blue-50 border border-blue-100"></div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="h-32 rounded-xl border border-neutral-100 bg-white shadow-sm p-4 flex flex-col justify-end">
<div className="h-3 w-3/4 rounded bg-neutral-100 mb-2"></div>
<div className="h-2 w-1/2 rounded bg-neutral-100"></div>
</div>
<div className="h-32 rounded-xl border border-neutral-100 bg-white shadow-sm p-4 flex flex-col justify-end">
<div className="h-3 w-2/3 rounded bg-neutral-100 mb-2"></div>
<div className="h-2 w-1/3 rounded bg-neutral-100"></div>
</div>
</div>

<div className="space-y-3 mt-2">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-neutral-100"></div>
<div className="space-y-1.5 flex-1">
<div className="h-2 w-full rounded bg-neutral-100"></div>
<div className="h-2 w-4/5 rounded bg-neutral-100"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-neutral-200/50 bg-white/30 py-12">
<div className="mx-auto max-w-7xl px-6 sm:px-8">
<p className="text-center text-sm font-medium text-neutral-400 mb-8 tracking-tight">JOINED BY DESIGNERS FROM TOP TEAMS</p>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center divide-x divide-neutral-200/50">
<div className="flex flex-col gap-1">
<span className="text-3xl font-semibold tracking-tight text-neutral-900">2.5k+</span>
<span className="text-sm text-neutral-500 font-light">Early Adopters</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-3xl font-semibold tracking-tight text-neutral-900">120+</span>
<span className="text-sm text-neutral-500 font-light">Ready Components</span>
</div>
<div className="flex flex-col gap-1 col-span-2 md:col-span-1 border-t md:border-t-0 border-neutral-200/50 pt-8 md:pt-0">
<span className="text-3xl font-semibold tracking-tight text-neutral-900">100%</span>
<span className="text-sm text-neutral-500 font-light">Native to Framer</span>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32">
<div className="mx-auto max-w-7xl px-6 sm:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-4">Designed for modern workflows</h2>
<p className="text-base text-neutral-500 font-light">Everything you need to build high-end websites without starting from scratch. Copy, paste, and customize.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 lg:gap-8">

<div className="group rounded-2xl border border-neutral-200/60 bg-white p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] hover:-translate-y-1">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
<iconify-icon height="24" icon="solar:layers-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2 tracking-tight">Modular Design</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">Components are built independently, allowing you to mix and match seamlessly without breaking the layout.</p>
</div>

<div className="group rounded-2xl border border-neutral-200/60 bg-white p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] hover:-translate-y-1">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
<iconify-icon height="24" icon="solar:pallete-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2 tracking-tight">Global Styling</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">Connected to Framer's color and typography variables. Change the entire theme with just a few clicks.</p>
</div>

<div className="group rounded-2xl border border-neutral-200/60 bg-white p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] hover:-translate-y-1">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
<iconify-icon height="24" icon="solar:smartphone-update-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2 tracking-tight">Fully Responsive</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">Every component is meticulously optimized for desktop, tablet, and mobile breakpoints out of the box.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-neutral-100">
<div className="mx-auto max-w-7xl px-6 sm:px-8">
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-12 text-center">How it works</h2>
<div className="grid md:grid-cols-3 gap-10 relative">

<div className="hidden md:block absolute top-6 left-[15%] right-[15%] h-[1px] bg-neutral-200 -z-10"></div>
<div className="flex flex-col items-center text-center bg-white relative">
<div className="h-12 w-12 rounded-full border border-neutral-200 bg-neutral-50 flex items-center justify-center text-lg font-medium text-neutral-900 mb-6 shadow-sm">1</div>
<h4 className="text-base font-medium text-neutral-900 mb-2">Browse Library</h4>
<p className="text-sm text-neutral-500 font-light">Find the perfect component for your section from our organized categories.</p>
</div>
<div className="flex flex-col items-center text-center bg-white relative">
<div className="h-12 w-12 rounded-full border border-neutral-200 bg-neutral-50 flex items-center justify-center text-lg font-medium text-neutral-900 mb-6 shadow-sm">2</div>
<h4 className="text-base font-medium text-neutral-900 mb-2">Copy &amp; Paste</h4>
<p className="text-sm text-neutral-500 font-light">Simply copy the component and paste it directly into your Framer canvas.</p>
</div>
<div className="flex flex-col items-center text-center bg-white relative">
<div className="h-12 w-12 rounded-full border border-neutral-200 bg-neutral-50 flex items-center justify-center text-lg font-medium text-neutral-900 mb-6 shadow-sm">3</div>
<h4 className="text-base font-medium text-neutral-900 mb-2">Customize</h4>
<p className="text-sm text-neutral-500 font-light">Tweak the properties, swap images, and adjust text to fit your brand.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32">
<div className="mx-auto max-w-4xl px-6 sm:px-8">
<div className="rounded-3xl bg-neutral-900 px-6 py-16 sm:p-16 text-center shadow-xl relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent opacity-50"></div>
<div className="relative z-10">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
                        Ready to elevate your designs?
                    </h2>
<p className="text-base text-neutral-400 mb-10 max-w-lg mx-auto font-light">
                        Join the waitlist today to get early access and an exclusive launch discount.
                    </p>
<form className="waitlist-input-group mx-auto flex w-full max-w-md items-center gap-x-2 rounded-full border border-neutral-700 bg-neutral-800/50 p-1.5 shadow-sm backdrop-blur-sm">
<div className="relative flex-grow pl-4">
<div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-neutral-500">
<iconify-icon height="18" icon="solar:letter-linear" width="18"></iconify-icon>
</div>
<input className="w-full bg-transparent pl-8 pr-4 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none" placeholder="Your email address" required="" type="email"/>
</div>
<button className="flex-none rounded-full bg-white px-6 py-2.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900" type="submit">
                            Get Early Access
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="mt-auto border-t border-neutral-200/60 bg-[#FAFAFA] py-10">
<div className="mx-auto max-w-7xl px-6 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<span className="text-base font-semibold tracking-tighter text-neutral-900">FRMR.</span>
<span className="text-neutral-300">|</span>
<span className="text-xs text-neutral-500 font-light">© 2024 All rights reserved.</span>
</div>
<div className="flex items-center gap-5 text-neutral-400">
<a className="hover:text-neutral-900 transition-colors" href="#">
<iconify-icon height="20" icon="solar:programming-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-neutral-900 transition-colors" href="#">
<iconify-icon height="20" icon="solar:pen-new-square-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-neutral-900 transition-colors" href="#">
<iconify-icon height="20" icon="solar:link-circle-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
