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
      

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-gradient-to-br from-rose-400/20 via-orange-300/10 to-transparent blur-[120px] pointer-events-none -z-10 rounded-full"></div>

<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-medium tracking-tighter flex items-center gap-2 group" href="/">
<div className="w-8 h-8 bg-gradient-to-br from-rose-500 to-orange-500 text-white rounded-lg flex items-center justify-center text-sm tracking-tighter shadow-sm group-hover:shadow-md transition-all">PD</div>
</a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-semibold text-zinc-700 hover:text-rose-600 transition-colors" href="/menus/">Menu</a>
<a className="text-sm font-semibold text-zinc-700 hover:text-rose-600 transition-colors" href="/private-events/">Private Events</a>
<a className="text-sm font-semibold text-zinc-700 hover:text-rose-600 transition-colors" href="/location/s-and-t-hospitality/">Hours &amp; Location</a>
<a className="text-sm font-semibold text-zinc-700 hover:text-rose-600 transition-colors" href="/about/">About</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-sm font-semibold text-zinc-700 hover:text-rose-600 transition-colors mr-2" href="tel:6085191836">
<iconify-icon className="text-lg text-rose-500" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    608-519-1836
                </a>
<a className="bg-rose-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-rose-700 transition-all shadow-md shadow-rose-600/20 tracking-tight" href="https://order.toasttab.com/online/pizzeria-dolorosa-115-4th-street-north" target="_blank">
                    Order Online
                </a>
</div>
</div>
</header>
<main className="flex-grow pt-32 pb-24">

<section className="max-w-6xl mx-auto px-6 mb-32 flex flex-col lg:flex-row items-center gap-16 relative">
<div className="flex-1 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-rose-200/60 mb-8 backdrop-blur-sm shadow-sm">
<iconify-icon className="text-sm text-rose-500" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-semibold text-rose-700">115 4th St North, La Crosse, WI</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-zinc-900 leading-tight mb-6">
                    Hand crafted pizzas. Absolute precision.
                </h1>
<p className="text-lg text-zinc-600 max-w-xl mb-10 font-normal mx-auto lg:mx-0">
                    Locally sourced ingredients, natural sourdough, and organic Italian wine. Experience pizza crafted with uncompromising technique in the heart of La Crosse.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<a className="w-full sm:w-auto bg-rose-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-rose-700 transition-all shadow-md shadow-rose-600/20 text-center" href="https://order.toasttab.com/online/pizzeria-dolorosa-115-4th-street-north" target="_blank">
                        Order for Pickup
                    </a>
<a className="w-full sm:w-auto bg-white text-zinc-900 border border-zinc-200 px-6 py-3 rounded-full text-sm font-medium hover:border-rose-200 hover:text-rose-600 hover:bg-rose-50/50 transition-all shadow-sm text-center" href="/menus/">
                        View Menus
                    </a>
</div>
</div>

<div className="flex-1 w-full grid grid-cols-2 gap-4">
<div className="col-span-2 h-64 md:h-80 rounded-2xl overflow-hidden border border-zinc-200/50 bg-zinc-100 shadow-xl shadow-zinc-200/50">
<img alt="Pizza on wooden table" className="w-full h-full object-cover" src="https://images.getbento.com/accounts/0fa2e4572ff927742efe054c168ec105/media/images/32001PizzeriaDolorosa-Corrected-18.jpg?w=1200&amp;fit=crop&amp;auto=compress,format"/>
</div>
<div className="h-48 md:h-64 rounded-2xl overflow-hidden border border-zinc-200/50 bg-zinc-100 shadow-lg shadow-zinc-200/40">
<img alt="Organic Wine" className="w-full h-full object-cover" src="https://images.getbento.com/accounts/0fa2e4572ff927742efe054c168ec105/media/images/37944PizzeriaDolorosa-Corrected-60.jpg?w=800&amp;fit=crop&amp;auto=compress,format"/>
</div>
<div className="h-48 md:h-64 rounded-2xl overflow-hidden border border-zinc-200/50 bg-zinc-100 shadow-lg shadow-zinc-200/40">
<img alt="Fresh Food" className="w-full h-full object-cover" src="https://images.getbento.com/accounts/0fa2e4572ff927742efe054c168ec105/media/images/70940PizzeriaDolorosa-31.jpg?w=800&amp;fit=crop&amp;auto=compress,format"/>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-24 py-16 border-t border-zinc-200/50">
<div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
<div className="flex-1 w-full aspect-[4/3] rounded-3xl overflow-hidden border border-zinc-200/50 bg-zinc-100 relative group shadow-xl shadow-zinc-200/40">
<img alt="Hand Crafted Pizzas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.getbento.com/accounts/0fa2e4572ff927742efe054c168ec105/media/images/67522PizzeriaDolorosa-49.jpg?w=1200&amp;fit=crop&amp;auto=compress,format"/>
</div>
<div className="flex-1">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-zinc-900">The Menu</h2>
<p className="text-lg text-zinc-500 mb-8 font-normal">
                        Locally sourced ingredients, prepared fresh daily. From our signature sourdough bases to our carefully curated Italian wine list, every detail is considered.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-rose-600 border-b border-rose-600/30 pb-1 hover:text-rose-700 hover:border-rose-700 transition-colors" href="/menus/">
                        Explore our offerings
                        <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-24">
<div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
<div className="flex-1 w-full aspect-[4/3] rounded-3xl overflow-hidden border border-zinc-200/50 bg-zinc-100 relative group shadow-xl shadow-zinc-200/40">
<img alt="Private Events" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.getbento.com/accounts/0fa2e4572ff927742efe054c168ec105/media/images/37939PizzeriaDolorosa-10.jpg?w=1200&amp;fit=crop&amp;auto=compress,format"/>
</div>
<div className="flex-1">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-zinc-900">Private Events</h2>
<p className="text-lg text-zinc-500 mb-8 font-normal">
                        We'd love to host your next event. Whether it's an intimate gathering or a large celebration, our space in La Crosse provides the perfect backdrop for unforgettable moments.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-rose-600 border-b border-rose-600/30 pb-1 hover:text-rose-700 hover:border-rose-700 transition-colors" href="/private-events/">
                        Inquire Now
                        <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 mb-16 text-center bg-gradient-to-b from-rose-50/50 to-white border border-rose-100/60 rounded-3xl p-12 shadow-xl shadow-rose-100/40">
<h2 className="text-2xl font-medium tracking-tight mb-3 text-zinc-900">Stay in the loop</h2>
<p className="text-sm text-zinc-500 mb-8">Sign up for updates on seasonal menu drops and exclusive events.</p>
<form className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
<input className="w-full bg-white border border-zinc-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 transition-all shadow-sm" placeholder="Email address" required="" type="email"/>
<button className="w-full sm:w-auto bg-rose-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-rose-700 transition-all shadow-md shadow-rose-600/20 shrink-0" type="button">
                    Subscribe
                </button>
</form>
</section>
</main>

<footer className="bg-white border-t border-zinc-200/80 pt-16 pb-8 mt-auto relative">
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="text-xl font-medium tracking-tighter flex items-center gap-2 mb-4">
<div className="w-8 h-8 bg-gradient-to-br from-rose-500 to-orange-500 text-white rounded-lg flex items-center justify-center text-sm tracking-tighter shadow-sm">PD</div>
                        Pizzeria Dolorosa
                    </div>
<p className="text-sm text-zinc-500 max-w-sm mb-6">Italian food, organic wine, and sourdough pizza in La Crosse, WI. Locally sourced, meticulously crafted.</p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600 transition-all" href="https://www.instagram.com/pizzeriadolorosa" target="_blank">
<iconify-icon className="text-xl" icon="solar:camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600 transition-all" href="https://www.facebook.com/profile.php?id=100089738736894" target="_blank">
<iconify-icon className="text-xl" icon="solar:globus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600 transition-all" href="mailto:contact@pizzeriadolorosa.com">
<iconify-icon className="text-xl" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
<div>
<h5 className="text-sm font-semibold text-zinc-900 mb-4 tracking-tight">Location &amp; Contact</h5>
<ul className="space-y-3">
<li>
<a className="text-sm text-zinc-500 hover:text-rose-600 transition-colors flex items-start gap-2" href="https://maps.google.com/?q=115+4th+St+N,+La+Crosse,+WI+54601,+USA" target="_blank">
<iconify-icon className="text-base mt-0.5 shrink-0" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>115 4th St North<br/>La Crosse, WI 54601</span>
</a>
</li>
<li>
<a className="text-sm text-zinc-500 hover:text-rose-600 transition-colors flex items-center gap-2" href="tel:6085191836">
<iconify-icon className="text-base shrink-0" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                608-519-1836
                            </a>
</li>
</ul>
</div>
<div>
<h5 className="text-sm font-semibold text-zinc-900 mb-4 tracking-tight">Company</h5>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-rose-600 transition-colors" href="/menus/">Menu</a></li>
<li><a className="text-sm text-zinc-500 hover:text-rose-600 transition-colors" href="/private-events/">Private Events</a></li>
<li><a className="text-sm text-zinc-500 hover:text-rose-600 transition-colors" href="/contact-1/">Careers / Jobs</a></li>
<li><a className="text-sm text-zinc-500 hover:text-rose-600 transition-colors" href="/contact/">Contact Us</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-100">
<p className="text-xs text-zinc-400 mb-4 md:mb-0">© 2024 S and T Hospitality / Pizzeria Dolorosa. All rights reserved.</p>
<div className="flex items-center gap-6 text-xs text-zinc-400">
<a className="hover:text-zinc-900 transition-colors" href="/about/">About</a>
<a className="hover:text-zinc-900 transition-colors" href="/location/s-and-t-hospitality/">Hours</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
