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
      

<header className="w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-semibold text-lg tracking-tighter text-slate-900 flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-slate-900 rounded-sm flex items-center justify-center">
<span className="text-white text-xs font-medium tracking-widest">
              RE
            </span>
</div>
          ESTATE.
        </a>
<nav className="hidden sm:flex gap-6 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">
            Properties
          </a>
<a className="hover:text-slate-900 transition-colors" href="#">
            Services
          </a>
<a className="hover:text-slate-900 transition-colors" href="#">About</a>
</nav>
</div>
</header>
<main className="flex-grow">

<section className="sm:pt-32 sm:pb-24 overflow-hidden pt-24 pr-6 pb-16 pl-6 relative">

<div className="absolute inset-0 -z-10 bg-[#FAFAFA]">
<img alt="Luxury Real Estate Background" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAFAFA]/60 to-[#FAFAFA]"></div>
</div>
<div className="max-w-3xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/80 backdrop-blur-sm border border-slate-200 text-slate-600 text-xs font-medium mb-6">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
<span className="">Ready to guide your next move</span>
</div>
<h1 className="sm:text-5xl text-4xl font-semibold text-slate-900 tracking-tight mb-6">
            Let’s Find the Right Property for You
          </h1>
<p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you're looking to buy, rent, or invest — our team of
            dedicated professionals is ready to provide strategic guidance and
            exclusive access to the market.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="sm:w-auto inline-flex items-center justify-center gap-2 hover:bg-slate-800 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 text-sm font-medium text-white bg-slate-900 w-full rounded-lg pt-3 pr-6 pb-3 pl-6 shadow-sm" href="#">
<iconify-icon className="text-base" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
              Chat on WhatsApp
            </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-white border border-slate-200 px-6 py-3 text-sm font-medium text-slate-900 shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all" href="#inquiry-form">
<iconify-icon className="text-base" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
              Send Inquiry
            </a>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24" id="inquiry-form">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

<div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl shadow-[0_1px_3px_0_rgba(0,0,0,0.05),_0_1px_2px_0_rgba(0,0,0,0.02)] border border-slate-200/60">
<div className="mb-8">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">
                Inquiry Details
              </h2>
<p className="text-sm text-slate-500 mt-1">
                Please provide as much detail as possible so we can assign the
                right specialist to you.
              </p>
</div>
<form action="#" className="space-y-6" method="POST">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

<div>
<label className="block text-sm font-medium text-slate-700" htmlFor="name">
                    Full Name
                  </label>
<div className="mt-2">
<input autocomplete="name" className="block w-full rounded-lg border border-slate-200 bg-[#FAFAFA] px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100 transition-all" id="name" name="name" placeholder="Jane Doe" type="text"/>
</div>
</div>

<div className="">
<label className="block text-sm font-medium text-slate-700" htmlFor="phone">
                    Phone Number
                  </label>
<div className="mt-2">
<input autocomplete="tel" className="block w-full rounded-lg border border-slate-200 bg-[#FAFAFA] px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100 transition-all" id="phone" name="phone" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
</div>
</div>

<div>
<label className="block text-sm font-medium text-slate-700" htmlFor="email">
                  Email Address
                </label>
<div className="mt-2">
<input autocomplete="email" className="block w-full rounded-lg border border-slate-200 bg-[#FAFAFA] px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100 transition-all" id="email" name="email" placeholder="jane@example.com" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

<div>
<label className="block text-sm font-medium text-slate-700" htmlFor="inquiry-type">
                    Inquiry Type
                  </label>
<div className="relative mt-2">
<select className="block w-full rounded-lg border border-slate-200 bg-[#FAFAFA] px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:border-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100 transition-all cursor-pointer pr-10" id="inquiry-type" name="inquiry-type">
<option disabled="" selected="" value="">
                        Select an option
                      </option>
<option value="buying">Buying</option>
<option value="renting">Renting</option>
<option value="investment">Investment</option>
<option value="general">General Question</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="">
<label className="block text-sm font-medium text-slate-700 flex justify-between" htmlFor="budget">
                    Budget Range
                    <span className="text-slate-400 font-normal">Optional</span>
</label>
<div className="relative mt-2">
<select className="block w-full rounded-lg border border-slate-200 bg-[#FAFAFA] px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:border-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100 transition-all cursor-pointer pr-10" id="budget" name="budget">
<option disabled="" selected="" value="">
                        Select range
                      </option>
<option value="under-500k">Under $500k</option>
<option value="500k-1m">$500k - $1M</option>
<option value="1m-3m">$1M - $3M</option>
<option value="3m-plus">$3M+</option>
<option value="custom">
                        Custom (Specify in message)
                      </option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>

<div>
<label className="block text-sm font-medium text-slate-700 flex justify-between" htmlFor="location">
                  Preferred Location
                  <span className="text-slate-400 font-normal">Optional</span>
</label>
<div className="relative mt-2">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input className="block w-full rounded-lg border border-slate-200 bg-[#FAFAFA] pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100 transition-all" id="location" name="location" placeholder="Neighborhood, City, or Zip Code" type="text"/>
</div>
</div>

<div className="">
<label className="block text-sm font-medium text-slate-700" htmlFor="message">
                  Message
                </label>
<div className="mt-2">
<textarea className="block w-full rounded-lg border border-slate-200 bg-[#FAFAFA] px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100 transition-all resize-y" id="message" name="message" placeholder="Tell us about your requirements, specific properties you are interested in, or any questions you have." rows="4"></textarea>
</div>
</div>

<div className="pt-2">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-8 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition-all" type="submit">
                  Send Inquiry
                  <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</form>
</div>

<div className="lg:col-span-5 lg:pl-8 pt-4 lg:pt-0">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Usually responds within 1 hour
            </div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8">
              Talk to Our Team Directly
            </h2>
<div className="space-y-8">

<div className="flex gap-4 items-start group">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 group-hover:border-slate-300 group-hover:text-slate-900 transition-colors">
<iconify-icon className="text-lg" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<h3 className="text-sm font-medium text-slate-900">Phone</h3>
<p className="text-sm text-slate-500 mt-1 mb-2">
                    Mon-Fri from 8am to 6pm.
                  </p>
<a className="text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors" href="tel:+15550000000">
                    +1 (555) 000-0000
                  </a>
</div>
</div>

<div className="flex gap-4 items-start group">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 group-hover:border-slate-300 group-hover:text-slate-900 transition-colors">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">WhatsApp</h3>
<p className="text-sm text-slate-500 mt-1 mb-2">
                    Available for quick queries.
                  </p>
<a className="text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors" href="#">
                    Message us
                  </a>
</div>
</div>

<div className="flex gap-4 items-start group">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 group-hover:border-slate-300 group-hover:text-slate-900 transition-colors">
<iconify-icon className="text-lg" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">Email</h3>
<p className="text-sm text-slate-500 mt-1 mb-2">
                    We'll get back to you promptly.
                  </p>
<a className="text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors" href="mailto:hello@reestate.com">
                    hello@reestate.com
                  </a>
</div>
</div>

<div className="flex gap-4 items-start group">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 group-hover:border-slate-300 group-hover:text-slate-900 transition-colors">
<iconify-icon className="text-lg" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">Office</h3>
<p className="text-sm text-slate-500 mt-1">
                    100 Financial District Blvd
                    <br/>
                    Suite 400
                    <br/>
                    New York, NY 10005
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200/60 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
<iconify-icon className="text-2xl text-slate-300 mb-4" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm font-medium text-slate-500 tracking-wide uppercase">
            Trusted local real estate partner since 2010.
          </p>
</div>
</section>
</main>

    </>
  );
}
