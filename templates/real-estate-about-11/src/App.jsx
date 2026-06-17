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
      

<nav className="border-b border-zinc-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter text-zinc-900 flex items-center gap-2" href="#">
<span className="w-6 h-6 bg-zinc-900 text-white rounded-sm flex items-center justify-center text-xs">EI</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Properties</a>
<a className="text-zinc-900" href="#">About</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Contact</a>
</div>
<a className="text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-md hover:bg-zinc-800 transition-colors hidden md:inline-block" href="#">
                View Portfolio
            </a>
</div>
</nav>
<main>

<section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 -z-10">
<img alt="Luxury Real Estate Background" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>

<div className="absolute inset-0 bg-white/85"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50/90 backdrop-blur-sm border border-amber-100 text-amber-700 text-xs font-medium mb-8">
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
                    Premier Real Estate Agency
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900 max-w-4xl mx-auto leading-tight">
                    About Elmajdoub Immobilier
                </h1>
<p className="mt-6 text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto font-normal">
                    Local expertise. Honest guidance. Real results. We navigate the market so you don't have to.
                </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-zinc-800 transition-colors shadow-sm" href="#">
                        Browse Properties
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white/90 backdrop-blur-sm text-zinc-900 border border-zinc-200 px-6 py-3 rounded-md text-sm font-medium hover:bg-zinc-50 transition-colors" href="#">
                        Contact Us
                    </a>
</div>
</div>
</section>

<section className="border-y border-zinc-100 bg-zinc-50/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center md:text-left divide-x-0 md:divide-x divide-zinc-200">
<div className="md:px-6 first:pl-0">
<p className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900">15+</p>
<p className="mt-2 text-sm text-zinc-500 font-medium">Years Experience</p>
</div>
<div className="md:px-6">
<p className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900">200+</p>
<p className="mt-2 text-sm text-zinc-500 font-medium">Clients Served</p>
</div>
<div className="md:px-6">
<p className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900">20–50</p>
<p className="mt-2 text-sm text-zinc-500 font-medium">Curated Properties</p>
</div>
<div className="md:px-6">
<p className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 text-amber-700">#1</p>
<p className="mt-2 text-sm text-zinc-500 font-medium">Local Market Specialists</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-6 leading-tight">
                            Built on Trust.<br/>Rooted in Community.
                        </h2>
<div className="space-y-6 text-base text-zinc-500 leading-relaxed">
<p>
                                Founded over a decade ago, Elmajdoub Immobilier was established with a singular vision: to elevate the real estate experience through unwavering integrity and profound local insight. We recognized that buying or selling a property is more than a transaction; it's a pivotal life decision.
                            </p>
<p>
                                Over the years, we have organically grown our portfolio and our team, always prioritizing quality over quantity. Our curated selection of properties and our bespoke approach ensure that every client receives the focused attention and expert guidance they deserve in today's dynamic market.
                            </p>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-zinc-100/50 rounded-2xl transform rotate-2"></div>
<img alt="Modern luxury property interior" className="relative rounded-xl w-full h-auto object-cover shadow-sm border border-zinc-200/50" loading="lazy" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-zinc-50/50 border-t border-zinc-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16 md:text-center">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Why Clients Choose Us</h2>
<p className="mt-4 text-base text-zinc-500 max-w-2xl mx-auto">Our reputation is built on delivering exceptional service at every stage of the journey.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

<div className="flex flex-col">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-amber-600 mb-5 shadow-sm">
<iconify-icon className="text-xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2 tracking-tight">Local Expertise</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Deeply rooted in the community. We know the neighborhoods, market trends, and hidden gems.
                        </p>
</div>

<div className="flex flex-col">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-amber-600 mb-5 shadow-sm">
<iconify-icon className="text-xl" icon="solar:eye-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2 tracking-tight">Transparency</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Clear communication and honest advice. No hidden fees, no unwelcome surprises.
                        </p>
</div>

<div className="flex flex-col">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-amber-600 mb-5 shadow-sm">
<iconify-icon className="text-xl" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2 tracking-tight">Client-First Approach</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Your goals are our priority. We tailor our strategies to match your specific real estate needs.
                        </p>
</div>

<div className="flex flex-col">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-amber-600 mb-5 shadow-sm">
<iconify-icon className="text-xl" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2 tracking-tight">Fast Response</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Agile and accessible. We move quickly to secure opportunities in a competitive landscape.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16 md:text-center">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Trusted by Homeowners</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-white border border-zinc-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between">
<div>
<div className="flex items-center gap-1 text-amber-500 mb-6 text-sm">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<blockquote className="text-base text-zinc-600 leading-relaxed mb-8">
                                "The level of professionalism and local knowledge is unmatched. They found us our dream home within weeks and made the closing process entirely seamless."
                            </blockquote>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Sarah Jenkins</p>
<p className="text-xs text-zinc-500 mt-1">First-time Buyer</p>
</div>
</div>

<div className="p-8 rounded-2xl bg-white border border-zinc-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between">
<div>
<div className="flex items-center gap-1 text-amber-500 mb-6 text-sm">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<blockquote className="text-base text-zinc-600 leading-relaxed mb-8">
                                "Selling a property can be stressful, but the team at Elmajdoub provided complete transparency. They secured an excellent price and handled everything."
                            </blockquote>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Michael &amp; Elena Rostova</p>
<p className="text-xs text-zinc-500 mt-1">Property Sellers</p>
</div>
</div>

<div className="p-8 rounded-2xl bg-white border border-zinc-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between">
<div>
<div className="flex items-center gap-1 text-amber-500 mb-6 text-sm">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<blockquote className="text-base text-zinc-600 leading-relaxed mb-8">
                                "As an investor, I rely on accurate data and fast responses. Their curated properties and market insights have been invaluable to growing my portfolio."
                            </blockquote>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">David Chen</p>
<p className="text-xs text-zinc-500 mt-1">Real Estate Investor</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 border-t border-zinc-100 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-amber-50/50 rounded-full blur-3xl -z-10"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">
                    Ready to Take the Next Step?
                </h2>
<p className="text-lg text-zinc-500 mb-10 max-w-2xl mx-auto">
                    Whether buying, renting, or investing — we’re here to help you navigate the market with confidence.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-zinc-800 transition-colors shadow-sm" href="#">
                        Browse Available Properties
                    </a>
<a className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white text-zinc-900 border border-zinc-200 px-6 py-3 rounded-md text-sm font-medium hover:bg-zinc-50 transition-colors" href="#">
                        Speak With Our Team
                        <iconify-icon icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-100 py-12 text-center">
<p className="text-sm text-zinc-400">© 2024 Elmajdoub Immobilier. All rights reserved.</p>
</footer>

    </>
  );
}
