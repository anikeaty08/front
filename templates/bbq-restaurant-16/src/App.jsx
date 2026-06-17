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
      

<header className="sticky top-0 z-50 border-b border-neutral-900 bg-neutral-950/80 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<a className="text-xl font-semibold tracking-tighter text-neutral-50 flex items-center gap-2" href="#">
<iconify-icon className="text-orange-500" icon="solar:flame-linear" strokeWidth="1.5"></iconify-icon>
                SERGES
            </a>
<nav className="hidden md:flex gap-8 text-sm font-medium">
<a className="text-neutral-400 hover:text-orange-400 transition-colors" href="#about">Our Story</a>
<a className="text-neutral-400 hover:text-orange-400 transition-colors" href="#values">Values</a>
<a className="text-neutral-400 hover:text-orange-400 transition-colors" href="#menu">Menu</a>
<a className="text-neutral-400 hover:text-orange-400 transition-colors" href="#contact">Contact</a>
</nav>
<a className="hidden md:inline-flex items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 px-4 py-2 text-xs font-medium text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors" href="#menu">
                Order Now
            </a>
<button className="md:hidden text-neutral-400 hover:text-white">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</header>
<main className="flex-grow">

<section className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:py-40 flex flex-col items-center text-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-3 py-1 text-xs font-medium text-orange-400 mb-8 backdrop-blur-sm">
<iconify-icon icon="solar:fire-square-linear" strokeWidth="1.5"></iconify-icon> Authentic Post-Oak Smokehouse
                </div>
<h1 className="max-w-4xl mx-auto text-4xl font-semibold tracking-tight text-neutral-50 sm:text-6xl lg:text-7xl">
                    Slow smoked perfection, <br className="hidden sm:block"/> crafted with patience.
                </h1>
<p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-neutral-400 leading-relaxed font-[300]">
                    Welcome to Serges BBQ. We bring premium wood, time-honored techniques, and modern flavor profiles together to create an unforgettable culinary experience, fresh from the pit daily.
                </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto rounded-md bg-orange-600 px-6 py-3 text-sm font-medium text-white hover:bg-orange-500 transition-colors shadow-[0_0_20px_rgba(234,88,12,0.2)]" href="#menu">Explore Menu</a>
<a className="w-full sm:w-auto rounded-md border border-neutral-800 bg-transparent px-6 py-3 text-sm font-medium text-neutral-300 hover:bg-neutral-900 transition-colors" href="#about">Read Our Story</a>
</div>
</div>
</section>

<section className="border-t border-neutral-900 bg-neutral-950" id="about">
<div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-neutral-50 sm:text-4xl mb-6">The Serges Story</h2>
<div className="space-y-6 text-neutral-400 leading-relaxed text-sm sm:text-base font-[300]">
<p>Founded on a simple principle: patience yields the best results. Serges BBQ started as a backyard obsession, experimenting relentlessly with different woods, dry rubs, and fluctuating temperatures just to find the perfect bark and smoke ring.</p>
<p>What makes us unique isn't just our uncompromising 14-hour smoke process. It's our dedication to sourcing local, ethically raised meats and developing proprietary spice blends that bridge traditional Southern BBQ heritage with refined, modern culinary sensibilities. We don't cut corners, and we don't rush the fire.</p>
</div>
</div>

<div className="aspect-square rounded-2xl border border-neutral-800 bg-neutral-900/50 relative overflow-hidden flex items-center justify-center group">
<div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
<iconify-icon className="text-7xl text-neutral-800 group-hover:text-neutral-700 transition-colors duration-700" icon="solar:chef-hat-linear" strokeWidth="1"></iconify-icon>

<div className="absolute top-4 left-4 h-2 w-2 rounded-full bg-orange-500/50"></div>
<div className="absolute bottom-4 right-4 h-2 w-2 rounded-full bg-neutral-700"></div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-900 bg-neutral-950" id="values">
<div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-50 sm:text-4xl">Our Core Philosophy</h2>
<p className="mt-4 text-neutral-400 text-sm sm:text-base font-[300]">The principles that guide our pitmasters every single day, from the first spark to the final slice.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="rounded-xl border border-neutral-800/60 bg-neutral-900/20 p-8 hover:border-orange-500/30 hover:bg-neutral-900/40 transition-all duration-300">
<div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20">
<iconify-icon className="text-xl" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-100 mb-2">Mission</h3>
<p className="text-neutral-400 text-sm leading-relaxed font-[300]">To serve our community uncompromising, artisanal BBQ by honoring traditional slow-smoking techniques while innovating with bold, unforgettable flavors to serve our customers the highest quality meal every day.</p>
</div>

<div className="rounded-xl border border-neutral-800/60 bg-neutral-900/20 p-8 hover:border-orange-500/30 hover:bg-neutral-900/40 transition-all duration-300">
<div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20">
<iconify-icon className="text-xl" icon="solar:eye-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-100 mb-2">Vision</h3>
<p className="text-neutral-400 text-sm leading-relaxed font-[300]">To become the region's premier destination for craft barbecue over the next 5 years, expanding our reach and shipping capabilities while maintaining the intimate, unpretentious quality of a neighborhood smokehouse.</p>
</div>
</div>

<div className="mt-6 rounded-xl border border-neutral-800/60 bg-neutral-900/20 p-8">
<div className="flex items-center gap-3 mb-6 border-b border-neutral-800 pb-4">
<iconify-icon className="text-xl text-neutral-500" icon="solar:checklist-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-medium tracking-tight text-neutral-100">Current Objectives</h3>
</div>
<ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-neutral-400 font-[300]">
<li className="flex gap-3 items-start group">
<iconify-icon className="text-base text-orange-500 mt-0.5 group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<span>Launch our signature line of bottled sauces and dry rubs for nationwide e-commerce shipping.</span>
</li>
<li className="flex gap-3 items-start group">
<iconify-icon className="text-base text-orange-500 mt-0.5 group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<span>Achieve a 100% locally sourced, ethically raised supply chain for our prime briskets by Q3.</span>
</li>
<li className="flex gap-3 items-start group">
<iconify-icon className="text-base text-orange-500 mt-0.5 group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<span>Expand our catering operations to accommodate large-scale corporate events and weddings.</span>
</li>
</ul>
</div>
</div>
</section>

<section className="border-t border-neutral-900 bg-neutral-950" id="menu">
<div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-neutral-50 sm:text-4xl">From The Pit</h2>
<p className="mt-4 text-neutral-400 text-sm sm:text-base max-w-xl font-[300]">Smoked fresh daily. Limited quantities available. When it's gone, it's gone.</p>
</div>
<div className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-3 py-1.5 text-xs font-medium text-neutral-400 border border-neutral-800">
<iconify-icon icon="solar:info-circle-linear"></iconify-icon> Priced per 1/2 lb unless noted
                    </div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16">

<div>
<h3 className="text-sm font-medium text-neutral-500 uppercase tracking-widest border-b border-neutral-800 pb-3 mb-6">
                            Prime Meats
                        </h3>
<div className="space-y-6">
<div className="flex justify-between items-start gap-4 group cursor-default">
<div className="pr-4 bg-neutral-950 z-10">
<h4 className="text-base font-medium text-neutral-200 group-hover:text-orange-400 transition-colors">Texas Style Brisket</h4>
<p className="text-xs text-neutral-500 mt-1 font-[300]">14-hour post-oak smoked, salt &amp; pepper rub.</p>
</div>
<div className="border-b border-neutral-800 border-dotted flex-grow translate-y-[14px] absolute w-full left-0 hidden sm:block z-0"></div>
<span className="text-base font-medium text-neutral-100 whitespace-nowrap bg-neutral-950 pl-4 z-10">$16.00</span>
</div>
<div className="flex justify-between items-start gap-4 group cursor-default relative">
<div className="pr-4 bg-neutral-950 z-10">
<h4 className="text-base font-medium text-neutral-200 group-hover:text-orange-400 transition-colors">Pulled Pork Shoulder</h4>
<p className="text-xs text-neutral-500 mt-1 font-[300]">Hickory smoked, mopped with apple cider vinegar.</p>
</div>
<div className="border-b border-neutral-800 border-dotted flex-grow translate-y-[14px] absolute w-full left-0 hidden sm:block z-0"></div>
<span className="text-base font-medium text-neutral-100 whitespace-nowrap bg-neutral-950 pl-4 z-10">$11.00</span>
</div>
<div className="flex justify-between items-start gap-4 group cursor-default relative">
<div className="pr-4 bg-neutral-950 z-10">
<h4 className="text-base font-medium text-neutral-200 group-hover:text-orange-400 transition-colors">Smoked Turkey Breast</h4>
<p className="text-xs text-neutral-500 mt-1 font-[300]">Cherry wood smoked, brined for 24 hours.</p>
</div>
<div className="border-b border-neutral-800 border-dotted flex-grow translate-y-[14px] absolute w-full left-0 hidden sm:block z-0"></div>
<span className="text-base font-medium text-neutral-100 whitespace-nowrap bg-neutral-950 pl-4 z-10">$12.50</span>
</div>
<div className="flex justify-between items-start gap-4 group cursor-default relative">
<div className="pr-4 bg-neutral-950 z-10 flex items-center gap-2">
<h4 className="text-base font-medium text-neutral-200 group-hover:text-orange-400 transition-colors">Beef Dino Ribs</h4>
<span className="text-[10px] font-medium bg-neutral-800 text-neutral-300 px-1.5 py-0.5 rounded">Sat/Sun Only</span>
</div>
<div className="border-b border-neutral-800 border-dotted flex-grow translate-y-[14px] absolute w-full left-0 hidden sm:block z-0"></div>
<span className="text-base font-medium text-neutral-100 whitespace-nowrap bg-neutral-950 pl-4 z-10">$32.00</span>
</div>
</div>
</div>

<div>
<h3 className="text-sm font-medium text-neutral-500 uppercase tracking-widest border-b border-neutral-800 pb-3 mb-6">
                            Services &amp; Experiences
                        </h3>
<div className="space-y-6">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group rounded-lg border border-neutral-800/50 p-4 hover:border-neutral-700 transition-colors">
<div>
<h4 className="text-sm font-medium text-neutral-200">Event Catering</h4>
<p className="text-xs text-neutral-500 mt-1 font-[300]">Full service buffet setup for 50+ guests. Includes meats, sides, and staff.</p>
</div>
<span className="text-xs font-medium text-orange-400 whitespace-nowrap bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded">Starting at $25/pp</span>
</div>
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group rounded-lg border border-neutral-800/50 p-4 hover:border-neutral-700 transition-colors">
<div>
<h4 className="text-sm font-medium text-neutral-200">Pitmaster Masterclass</h4>
<p className="text-xs text-neutral-500 mt-1 font-[300]">4-hour hands-on brisket trimming, fire management, and smoking workshop.</p>
</div>
<span className="text-xs font-medium text-neutral-300 whitespace-nowrap bg-neutral-800 border border-neutral-700 px-2.5 py-1 rounded">$199/person</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-900 bg-neutral-950" id="contact">
<div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

<div className="lg:col-span-5">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-50">Get in Touch</h2>
<p className="mt-4 text-neutral-400 text-sm sm:text-base mb-10 font-[300]">Have questions about catering availability, dietary restrictions, or just want to talk smoke? Reach out to our team.</p>
<div className="space-y-6">
<div className="flex items-center gap-4 text-neutral-300">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400">
<iconify-icon className="text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-xs text-neutral-500 mb-0.5">Professional Inquiries</p>
<a className="text-sm font-medium hover:text-orange-400 transition-colors" href="mailto:hello@sergesbbq.com">hello@sergesbbq.com</a>
</div>
</div>
<div className="flex items-center gap-4 text-neutral-300">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400">
<iconify-icon className="text-xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-xs text-neutral-500 mb-0.5">Location</p>
<span className="text-sm font-medium">123 Smokehouse Row, Austin, TX 78704</span>
</div>
</div>
</div>

<div className="mt-12 pt-8 border-t border-neutral-900">
<h3 className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-4">Follow the smoke</h3>
<div className="flex gap-3">
<a aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-all" href="#">
<iconify-icon className="text-xl" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a aria-label="Twitter / X" className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-all" href="#">
<iconify-icon className="text-xl" icon="solar:hashtag-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-all" href="#">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6 sm:p-8">
<form className="space-y-5">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400">First Name</label>
<input className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-200 placeholder-neutral-600 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all" placeholder="John" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400">Last Name</label>
<input className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-200 placeholder-neutral-600 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400">Email Address</label>
<input className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-200 placeholder-neutral-600 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400">Inquiry Type</label>

<div className="relative">
<select className="w-full appearance-none rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-200 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all">
<option value="general">General Question</option>
<option value="catering">Catering Event</option>
<option value="masterclass">Masterclass Booking</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400">Message</label>
<textarea className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-200 placeholder-neutral-600 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all resize-none" placeholder="Tell us about your event or question..." rows="4"></textarea>
</div>

<div className="pt-2">
<label className="flex items-start gap-3 cursor-pointer group w-fit">
<div className="relative flex items-center justify-center w-4 h-4 mt-0.5 rounded border border-neutral-700 bg-neutral-950 group-hover:border-neutral-500 transition-colors shrink-0">
<input className="peer sr-only" type="checkbox"/>
<iconify-icon className="absolute text-orange-500 opacity-0 peer-checked:opacity-100 transition-opacity text-sm" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="text-xs text-neutral-500 select-none font-[300]">Subscribe to smokehouse updates, secret menu drops, and holiday pre-orders.</span>
</label>
</div>
<button className="w-full mt-4 rounded-md bg-neutral-100 px-4 py-2.5 text-sm font-medium text-neutral-900 hover:bg-white transition-colors" type="button">
                                    Send Message
                                </button>
</form>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-neutral-900 bg-neutral-950 py-8">
<div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="text-lg font-semibold tracking-tighter text-neutral-50 flex items-center gap-2">
                SERGES
            </div>
<p className="text-xs text-neutral-600 font-[300]">© 2024 Serges BBQ. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
