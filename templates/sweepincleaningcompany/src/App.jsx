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
      

<nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-zinc-50/80 border-b border-zinc-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<div className="flex text-sm font-semibold text-zinc-50 tracking-tighter bg-zinc-900 w-8 h-8 rounded-lg items-center justify-center">
<iconify-icon height="18" icon="ph:broom-light" width="18"></iconify-icon>
</div>
<span className="hidden sm:block text-lg font-semibold tracking-tighter">
              Sweepin
            </span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
              How it Works
            </a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
              Professionals
            </a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
              Pricing
            </a>
</div>

<div className="flex items-center space-x-4">
<a className="hidden sm:block text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors" href="#">
              Sign In
            </a>
<a className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-zinc-900 hover:bg-zinc-800 transition-colors shadow-sm" href="#">
              Book a Cleaning
            </a>
</div>
</div>
</div>
</nav>

<main className="overflow-hidden pt-24 pb-32 relative">
<div className="absolute inset-0 bg-grid pointer-events-none z-0"></div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-zinc-600 bg-zinc-100 border border-zinc-200 mb-8 cursor-pointer hover:bg-zinc-200 transition-colors">
<span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
          Now expanding network in major metropolitan areas
        </div>
<h1 className="md:text-7xl leading-tight text-5xl font-semibold text-zinc-900 tracking-tighter max-w-4xl mr-auto ml-auto">
          Spotless spaces.
          <br/>
<span className="text-zinc-400">Managed flawlessly.</span>
</h1>
<p className="mt-6 text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed">
          We bridge the gap between discerning homeowners and top-tier cleaning
          professionals. Rigorously vetted, fully insured, and managed by us.
          You simply enjoy the result.
        </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-zinc-900 hover:bg-zinc-800 transition-colors shadow-sm gap-2" href="#">
            Schedule Now
            <iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-zinc-200 text-base font-medium rounded-lg text-zinc-900 bg-white hover:bg-zinc-50 transition-colors shadow-sm" href="#">
            View Pricing
          </a>
</div>

<div className="mt-16 pt-8 border-t border-zinc-200/50 flex flex-col items-center">
<p className="text-xs text-zinc-400 font-medium tracking-wide uppercase mb-4">
            Trusted by over 5,000 households
          </p>
<div className="flex items-center gap-1 text-zinc-900">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<span className="ml-2 text-sm font-medium">4.9/5 Average Rating</span>
</div>
</div>
</div>
</main>

<section className="bg-white border-zinc-100 border-t pt-24 pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="md:text-4xl text-3xl font-semibold text-zinc-900 tracking-tighter">
            Why choose Sweepin?
          </h2>
<p className="mt-4 text-lg text-zinc-500">
            We handle the sourcing, vetting, and quality control. You get a
            premium service without the hassle of managing individual
            contractors.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
<div className="w-12 h-12 rounded-lg bg-white border border-zinc-200 flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-zinc-900" height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">
              Vetted Professionals
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              Only the top 5% of applicants pass our strict background checks,
              skill assessments, and interview processes.
            </p>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
<div className="w-12 h-12 rounded-lg bg-white border border-zinc-200 flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-zinc-900" height="24" icon="solar:calendar-mark-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">
              Seamless Scheduling
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              Book, reschedule, or cancel with a few clicks. Our management
              system ensures someone is always available when you need them.
            </p>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
<div className="w-12 h-12 rounded-lg bg-white border border-zinc-200 flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-zinc-900" height="24" icon="solar:medal-ribbon-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">
              Quality Guarantee
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              We hold funds in escrow until the job is completed to our exact
              standards. If you're not satisfied, we make it right.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-zinc-900 mb-12">
          How the network works
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon height="120" icon="solar:smartphone-update-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<span className="text-xs font-semibold tracking-wide text-zinc-400 uppercase mb-2 block">
                Step 1
              </span>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-4">
                Request a Service
              </h3>
<p className="text-sm text-zinc-500 max-w-md">
                Input your details, home size, and preferred schedule. Our
                system calculates an instant, transparent price with no hidden
                fees.
              </p>
</div>
</div>
<div className="p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm">
<span className="text-xs font-semibold tracking-wide text-zinc-400 uppercase mb-2 block">
              Step 2
            </span>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-4">
              We Assign a Pro
            </h3>
<p className="text-sm text-zinc-500">
              Our algorithm matches your specific needs with the perfect,
              highly-rated professional from our vetted network.
            </p>
</div>
<div className="p-8 rounded-2xl bg-zinc-900 text-white shadow-sm flex flex-col justify-between">
<div>
<span className="text-xs font-medium tracking-wide text-zinc-400 uppercase mb-2 block">
                Step 3
              </span>
<h3 className="text-xl font-semibold tracking-tight text-zinc-50 mb-4">
                Relax &amp; Enjoy
              </h3>
<p className="text-sm text-zinc-400">
                Your space is cleaned to perfection. Payment is handled
                automatically only after the job is completed successfully.
              </p>
</div>
<div className="mt-8 flex items-center justify-between border-t border-zinc-800 pt-4">
<span className="text-sm text-zinc-300">Ready to start?</span>
<iconify-icon className="text-white" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
<div className="lg:col-span-2 p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center justify-between">
<div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-2">
                Dedicated Account Manager
              </h3>
<p className="text-sm text-zinc-500 max-w-sm">
                Every recurring booking comes with a dedicated human manager to
                handle special requests and ensure consistency.
              </p>
</div>
<div className="hidden sm:flex w-16 h-16 rounded-full bg-zinc-50 border border-zinc-200 items-center justify-center">
<iconify-icon className="text-zinc-400" height="32" icon="solar:user-hand-up-linear" width="32"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative overflow-hidden border-t border-zinc-100">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-zinc-900 mb-6">
          Experience the standard of managed clean.
        </h2>
<p className="text-lg text-zinc-500 mb-10 max-w-2xl mx-auto">
          Join thousands of homeowners who have outsourced their cleaning
          management to our network of professionals.
        </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-zinc-900 hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-900/20" href="#">
            Book Your First Cleaning
          </a>
<a className="inline-flex items-center justify-center px-8 py-4 border border-zinc-200 text-base font-medium rounded-lg text-zinc-900 bg-white hover:bg-zinc-50 transition-colors" href="#">
            Talk to Sales
          </a>
</div>
<p className="mt-6 text-xs text-zinc-400">
          Cancel anytime. 100% satisfaction guaranteed.
        </p>
</div>
</section>

<footer className="bg-zinc-50 border-t border-zinc-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center mb-12">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-zinc-900 flex items-center justify-center text-zinc-50 font-semibold tracking-tighter text-xs">
<iconify-icon height="14" icon="ph:broom-light" width="14"></iconify-icon>
</div>
<span className="font-medium tracking-tight text-sm text-zinc-900">
              Sweepin
            </span>
</div>
<div className="flex space-x-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon height="20" icon="solar:twitter-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon height="20" icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-200/60">
<p className="text-xs text-zinc-500">
            © 2023 Sweepin. All rights reserved.
          </p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="text-xs text-zinc-500 hover:text-zinc-900" href="#">
              Privacy Policy
            </a>
<a className="text-xs text-zinc-500 hover:text-zinc-900" href="#">
              Terms of Service
            </a>
<a className="text-xs text-zinc-500 hover:text-zinc-900" href="#">
              Become a Pro
            </a>
</div>
</div>
</div>
</footer>

    </>
  );
}
