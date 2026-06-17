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
      

<nav className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md">
<div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
<a className="text-sm font-medium tracking-tight text-zinc-900 uppercase" href="#">
                Alexandra Harrington
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#about">About</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#services">Services</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#blog">Blog</a>
<a className="px-4 py-2 text-xs font-medium bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-colors" href="#contact">Contact</a>
</div>
</div>
</nav>

<header className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40">
<div className="mx-auto max-w-6xl px-6">
<div className="max-w-3xl">
<h1 className="text-5xl md:text-6xl font-medium tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                    Investigative Services by Alexandra Harrington
                </h1>
<p className="text-lg md:text-xl text-zinc-500 leading-relaxed mb-10 max-w-2xl font-light">
                    For investigations you can trust, turn to Alexandra Harrington for trustworthy and discreet investigations tailored for you. If you need assistance, feel free to contact us.
                </p>
<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-zinc-900 rounded-md hover:bg-zinc-800 transition-all shadow-sm" href="#contact">
                        Get Your Free Consultation
                    </a>
<a className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-zinc-600 bg-zinc-50 border border-zinc-200 rounded-md hover:bg-zinc-100 transition-all" href="tel:+447435693766">
<span className="iconify" data-icon="lucide:phone" data-width="16"></span>
                        +44 7435 693 766
                    </a>
</div>
</div>
</div>
</header>

<section className="py-24 border-t border-zinc-100" id="about">
<div className="mx-auto max-w-6xl px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative aspect-[4/3] bg-zinc-100 rounded-lg overflow-hidden">

<img alt="Two business professionals engaged in a discussion" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div>
<h2 className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-3">About Alexandra Harrington</h2>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-6">Experienced Investigators</h3>
<p className="text-base text-zinc-600 leading-relaxed mb-6">
                        At Alexandra Harrington, we take pride in our team of seasoned private investigators. With years of experience across various fields, our experts provide investigations you can trust, ensuring you receive the best services possible.
                    </p>
<p className="text-base text-zinc-600 leading-relaxed mb-8">
                        For more information, feel free to contact us.
                    </p>
<a className="text-sm font-medium text-zinc-900 underline decoration-zinc-300 hover:decoration-zinc-900 underline-offset-4 transition-all" href="#contact">
                        Contact Us →
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50/50">
<div className="mx-auto max-w-6xl px-6">
<div className="mb-12">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900">Behind the scenes</h2>
<p className="text-sm text-zinc-500 mt-2">A glimpse into our investigative process.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

<div className="group relative aspect-square bg-white border border-zinc-200 rounded-md overflow-hidden">
<img alt="Security cameras" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="group relative aspect-square bg-white border border-zinc-200 rounded-md overflow-hidden">
<img alt="Professional woman smiling" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>

<div className="group relative aspect-square bg-white border border-zinc-200 rounded-md overflow-hidden">
<img alt="Investigator looking" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>

<div className="group relative aspect-square bg-white border border-zinc-200 rounded-md overflow-hidden">
<img alt="Investigation concept" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>

<div className="group relative aspect-square bg-white border border-zinc-200 rounded-md overflow-hidden">
<img alt="Reviewing documents" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>

<div className="group relative aspect-square bg-white border border-zinc-200 rounded-md overflow-hidden">
<img alt="Man discussing documents" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-100" id="contact">
<div className="mx-auto max-w-6xl px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-5 space-y-10">
<div>
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-4">Better yet, see us in person!</h2>
<p className="text-base text-zinc-600 mb-6">
                            At Alexandra Harrington, we love our customers, so feel free to contact us during normal business hours for Investigations You Can Trust.
                        </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 border border-zinc-200 bg-white px-4 py-2 rounded-md hover:bg-zinc-50 transition-colors" href="https://maps.google.com" target="_blank">
<span className="iconify" data-icon="lucide:map-pin" data-width="16"></span>
                            Get directions
                        </a>
</div>
<div className="space-y-6">
<div>
<h4 className="text-sm font-medium text-zinc-900 uppercase tracking-wide">Alexandra Harrington</h4>
<p className="text-sm text-zinc-500 mt-1">St Helier, Jersey. Channel Islands</p>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 uppercase tracking-wide">Contact</h4>
<p className="text-sm text-zinc-500 mt-1 flex items-center gap-2">
<span className="iconify" data-icon="lucide:phone" data-width="14"></span>
                                +44 7435 693 766
                            </p>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 uppercase tracking-wide">Hours</h4>
<div className="flex items-center gap-2 mt-1">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-sm font-medium text-zinc-900">Open today</span>
<span className="text-sm text-zinc-500">09:00 – 17:00</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="bg-white border border-zinc-200 rounded-xl p-8 shadow-sm">
<h3 className="text-xl font-medium text-zinc-900 mb-6">Drop us a line!</h3>
<form className="space-y-5">
<div className="grid grid-cols-1 gap-5">
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-700 ml-1">Name</label>
<input className="w-full rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2.5 text-sm outline-none focus:border-zinc-400 focus:ring-4 focus:ring-zinc-100 transition-all placeholder:text-zinc-400" placeholder="Full name" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-700 ml-1">Email<span className="text-red-500">*</span></label>
<input className="w-full rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2.5 text-sm outline-none focus:border-zinc-400 focus:ring-4 focus:ring-zinc-100 transition-all placeholder:text-zinc-400" placeholder="email@example.com" required="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-700 ml-1">Message</label>
<textarea className="w-full rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2.5 text-sm outline-none focus:border-zinc-400 focus:ring-4 focus:ring-zinc-100 transition-all placeholder:text-zinc-400" placeholder="How can we help?" rows="4"></textarea>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-700 ml-1">Attach Files</label>
<div className="file-drop-area w-full p-6 text-center rounded-lg cursor-pointer hover:bg-zinc-50 transition-colors">
<div className="flex flex-col items-center justify-center gap-2 text-zinc-400">
<span className="iconify" data-icon="lucide:paperclip" data-width="20"></span>
<span className="text-xs">Click or drag files here</span>
</div>
</div>
<p className="text-xs text-zinc-400 ml-1">Attachments (0)</p>
</div>
<div className="pt-2">
<p className="text-[10px] text-zinc-400 leading-tight mb-4">
                                    This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                                </p>
<div className="flex items-center gap-3">
<button className="px-5 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-md hover:bg-zinc-800 transition-all shadow-sm" type="submit">Send</button>
<button className="px-5 py-2.5 text-zinc-600 text-sm font-medium rounded-md hover:bg-zinc-100 transition-all" type="button">Cancel</button>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-900 text-white">
<div className="mx-auto max-w-2xl px-6 text-center">
<h3 className="text-2xl font-medium tracking-tight mb-3">Subscribe</h3>
<p className="text-zinc-400 text-sm mb-8">Get 10% off your first purchase when you sign up for our newsletter!</p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 px-4 py-3 bg-white/10 border border-white/10 rounded-md text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all" placeholder="Email address" type="email"/>
<button className="px-6 py-3 bg-white text-zinc-900 text-sm font-medium rounded-md hover:bg-zinc-100 transition-all" type="submit">Sign up</button>
</form>
</div>
</section>

<section className="py-24 border-b border-zinc-100" id="blog">
<div className="mx-auto max-w-6xl px-6">
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-10">Latest Updates</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<article className="flex flex-col group cursor-pointer">
<div className="h-64 w-full bg-zinc-100 rounded-lg overflow-hidden mb-5">

<img alt="Market Research" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<time className="text-xs font-medium text-zinc-400 mb-2">16 January 2026</time>
<h4 className="text-xl font-medium text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors">Market Research</h4>
<p className="text-sm text-zinc-500 line-clamp-2 mb-4">Insights into modern investigative techniques used in market analysis.</p>
<span className="text-sm font-medium text-zinc-900 flex items-center gap-1">
                        Continue Reading <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</span>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="h-64 w-full bg-zinc-100 rounded-lg overflow-hidden mb-5">

<img alt="Investigative Work" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<time className="text-xs font-medium text-zinc-400 mb-2">16 January 2026</time>
<h4 className="text-xl font-medium text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors">Investigative work</h4>
<p className="text-sm text-zinc-500 line-clamp-2 mb-4">Understanding the complexities of private investigation in the digital age.</p>
<span className="text-sm font-medium text-zinc-900 flex items-center gap-1">
                        Continue Reading <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</span>
</article>
</div>
</div>
</section>

<footer className="py-12 bg-white">
<div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<p className="text-xs text-zinc-400">Copyright © 2026 Alexandra Harrington - All Rights Reserved.</p>
</div>
<div className="flex items-center gap-6">
<a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Powered by</a>
<a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a>
</div>
</div>
</footer>

    </>
  );
}
