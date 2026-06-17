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



    lucide.createIcons()
    // basic mobile toggle
    const btn=document.getElementById('mobileBtn')
    btn?.addEventListener('click',()=>alert('Mobile menu placeholder'))
  
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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-sm">
<nav className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-8 py-4 text-sm">

<a className="flex items-center gap-2" href="#">
<i className="w-6 h-6" data-lucide="layers"></i>
<span className="font-semibold tracking-tight">Company</span>
</a>

<ul className="hidden lg:flex items-center gap-8">
<li><a className="hover:text-black/70" href="#">Product</a></li>
<li><a className="hover:text-black/70" href="#">Pricing</a></li>
<li><a className="hover:text-black/70" href="#">Blog</a></li>
<li>
<button className="group relative flex items-center gap-1 hover:text-black/70">
            More
            <i className="w-4 h-4 transition-transform group-hover:-rotate-90" data-lucide="chevron-down"></i>
</button>
</li>
</ul>

<div className="ml-auto hidden lg:flex items-center gap-4">
<a className="rounded border border-gray-900 px-5 py-2 text-sm hover:bg-gray-50 transition" href="#">Login</a>
<a className="rounded bg-gray-900 text-white px-5 py-2 text-sm hover:bg-gray-800 transition" href="#">Sign up</a>
</div>

<button className="lg:hidden" id="mobileBtn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</nav>
</header>

<section className="mx-auto max-w-3xl px-8 py-28 text-center">
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Contact us</h1>
<p className="mt-6 text-lg text-gray-600">We’d love to hear from you. Here’s how you can reach us…</p>
</section>

<section className="mx-auto max-w-7xl px-8">
<div className="grid gap-12 md:grid-cols-3">

<div className="flex flex-col items-center text-center gap-6">
<div className="rounded-full border border-gray-200 p-4">
<i className="w-8 h-8" data-lucide="briefcase"></i>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight">Sales</h3>
<p className="mt-2 text-sm text-gray-600">Questions about pricing, or need a demo?</p>
</div>
<a className="rounded border border-gray-900 px-6 py-3 text-sm hover:bg-gray-50 transition" href="#">Contact sales</a>
</div>
<div className="flex flex-col items-center text-center gap-6">
<div className="rounded-full border border-gray-200 p-4">
<i className="w-8 h-8" data-lucide="life-buoy"></i>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight">Help &amp; Support</h3>
<p className="mt-2 text-sm text-gray-600">Need a hand? We’re here for you.</p>
</div>
<a className="rounded border border-gray-900 px-6 py-3 text-sm hover:bg-gray-50 transition" href="#">Get support</a>
</div>
<div className="flex flex-col items-center text-center gap-6">
<div className="rounded-full border border-gray-200 p-4">
<i className="w-8 h-8" data-lucide="mic"></i>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight">Media &amp; Press</h3>
<p className="mt-2 text-sm text-gray-600">Press inquiries, brand assets &amp; more.</p>
</div>
<a className="rounded border border-gray-900 px-6 py-3 text-sm hover:bg-gray-50 transition" href="#">Get press kit</a>
</div>
</div>
</section>

<section className="mx-auto max-w-3xl px-8 py-28 text-center border-y mt-24">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">General enquiries</h2>
<p className="mt-6 text-lg text-gray-600">
      For partnership opportunities or anything else, email us at
      <a className="underline hover:text-gray-800" href="mailto:hello@company.com">hello@company.com</a>
</p>
</section>

<section className="mx-auto max-w-7xl px-8 py-28">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold tracking-tight">Our locations</h2>
<p className="mt-4 text-gray-600">Come by for a coffee or a chat.</p>
</div>
<div className="grid gap-16 lg:grid-cols-2">

<div className="flex flex-col gap-8">
<div className="aspect-video rounded-lg bg-gray-100 ring-1 ring-inset ring-gray-200"></div>
<div className="">
<h3 className="text-2xl font-semibold tracking-tight">Sydney</h3>
<p className="mt-2 text-gray-600 text-sm">123 Sample St, Sydney NSW 2000 AU</p>
<a className="group mt-4 inline-flex items-center gap-1 text-sm font-medium hover:text-gray-800" href="#">
            Get directions
            <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="chevron-right"></i>
</a>
</div>
</div>

<div className="flex flex-col gap-8">
<div className="aspect-video rounded-lg bg-gray-100 ring-1 ring-inset ring-gray-200"></div>
<div>
<h3 className="text-2xl font-semibold tracking-tight">New York</h3>
<p className="mt-2 text-gray-600 text-sm">123 Sample St, New York NY 10000 USA</p>
<a className="group mt-4 inline-flex items-center gap-1 text-sm font-medium hover:text-gray-800" href="#">
            Get directions
            <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="chevron-right"></i>
</a>
</div>
</div>
</div>
</section>

<footer className="border-t bg-white/50">
<div className="mx-auto max-w-7xl px-8 py-20 grid gap-24 lg:grid-cols-[500px_1fr]">

<div>
<div className="flex items-center gap-2">
<i className="w-6 h-6" data-lucide="layers"></i>
<span className="font-semibold tracking-tight">Company</span>
</div>
<p className="mt-6 text-sm text-gray-600 max-w-sm">
          Join our newsletter to stay up to date on features and releases.
        </p>
<form className="mt-6 flex max-w-sm">
<input className="flex-1 rounded-l border border-gray-900/20 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="Enter your email" required="" type="email"/>
<button className="rounded-r border border-gray-900 bg-white px-5 py-3 text-sm hover:bg-gray-50 transition" type="submit">Subscribe</button>
</form>
<p className="mt-4 max-w-sm text-[12px] text-gray-500">
          By subscribing you agree to our <a className="underline" href="#">Privacy Policy</a>.
        </p>
</div>

<div className="grid gap-12 sm:grid-cols-3 text-sm">

<div>
<h4 className="font-semibold tracking-tight">Column One</h4>
<ul className="mt-4 space-y-3">
<li><a className="hover:text-gray-800" href="#">Link One</a></li>
<li><a className="hover:text-gray-800" href="#">Link Two</a></li>
<li><a className="hover:text-gray-800" href="#">Link Three</a></li>
<li><a className="hover:text-gray-800" href="#">Link Four</a></li>
<li><a className="hover:text-gray-800" href="#">Link Five</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold tracking-tight">Column Two</h4>
<ul className="mt-4 space-y-3">
<li><a className="hover:text-gray-800" href="#">Link Six</a></li>
<li><a className="hover:text-gray-800" href="#">Link Seven</a></li>
<li><a className="hover:text-gray-800" href="#">Link Eight</a></li>
<li><a className="hover:text-gray-800" href="#">Link Nine</a></li>
<li><a className="hover:text-gray-800" href="#">Link Ten</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold tracking-tight">Follow Us</h4>
<ul className="mt-4 space-y-3">
<li className="flex items-center gap-3">
<i className="w-4 h-4" data-lucide="facebook"></i> <a className="hover:text-gray-800" href="#">Facebook</a>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4" data-lucide="instagram"></i> <a className="hover:text-gray-800" href="#">Instagram</a>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4" data-lucide="twitter"></i> <a className="hover:text-gray-800" href="#">X</a>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4" data-lucide="linkedin"></i> <a className="hover:text-gray-800" href="#">LinkedIn</a>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4" data-lucide="youtube"></i> <a className="hover:text-gray-800" href="#">YouTube</a>
</li>
</ul>
</div>
</div>
</div>

<div className="border-t">
<div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-6 px-8 py-6 text-xs">
<p className="">© 2024 Company. All rights reserved.</p>
<div className="flex gap-6">
<a className="underline hover:text-gray-800" href="#">Privacy Policy</a>
<a className="underline hover:text-gray-800" href="#">Terms of Service</a>
<a className="underline hover:text-gray-800" href="#">Cookies Settings</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
