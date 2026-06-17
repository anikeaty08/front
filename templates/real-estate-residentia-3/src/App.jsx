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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');


document.write(new Date().getFullYear())
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
      

<nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center gap-2">
<iconify-icon className="text-amber-700 text-2xl" icon="solar:buildings-linear"></iconify-icon>
<span className="font-semibold tracking-tight text-lg text-stone-900 uppercase">Desert Rose</span>
</div>
<div className="hidden sm:flex items-center gap-6 text-sm">
<span className="flex items-center gap-1.5 text-stone-500">
<iconify-icon className="text-amber-700 text-base" icon="solar:clock-circle-linear"></iconify-icon>
                        Open 24 Hours
                    </span>
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors bg-stone-900 text-white rounded-lg hover:bg-stone-800 shadow-sm gap-2" href="tel:0580429429">
<iconify-icon className="text-base" icon="solar:phone-linear"></iconify-icon>
                        058 042 9429
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-stone-100">
<div className="absolute inset-0 z-0">
<img alt="Modern Compound" className="w-full h-full object-cover opacity-[0.15]" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80" style={{filter: 'grayscale(20%)'}}/>
<div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white"></div>
</div>
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium mb-8">
<span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
                Available 24/7 for Inquiries
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-900 mb-6 max-w-4xl mx-auto leading-tight">
                Premium Living at Desert Rose Compound
            </h1>
<p className="text-lg text-stone-500 mb-10 max-w-2xl mx-auto">
                Comfortable, secure, and modern living in Al Khobar. Experience a community designed for families and professionals seeking quality and convenience.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base font-medium transition-colors bg-stone-900 text-white rounded-xl hover:bg-stone-800 shadow-md gap-2" href="tel:0580429429">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
                    Call Now to Move In
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base font-medium transition-colors bg-white text-stone-900 border border-stone-200 rounded-xl hover:bg-stone-50 gap-2" href="#availability">
                    Check Availability
                </a>
</div>
</div>
</section>

<section className="py-8 bg-stone-50 border-b border-stone-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-stone-100 shadow-sm w-full md:w-auto">
<div className="flex gap-1 text-amber-500 text-lg">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-stone-900">Rated 3.8★ on Google</p>
<p className="text-xs text-stone-500">Based on 171 Reviews</p>
</div>
</div>
<div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
<div className="flex items-center gap-2 text-stone-600">
<iconify-icon className="text-amber-700 text-xl" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-sm font-medium">Secure Community</span>
</div>
<div className="flex items-center gap-2 text-stone-600">
<iconify-icon className="text-amber-700 text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-sm font-medium">Family Friendly</span>
</div>
<div className="flex items-center gap-2 text-stone-600">
<iconify-icon className="text-amber-700 text-xl" icon="solar:wrench-linear"></iconify-icon>
<span className="text-sm font-medium">24/7 Maintenance</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-6">Designed for Comfort and Peace of Mind</h2>
<p className="text-base text-stone-500 mb-6 leading-relaxed">
                        Desert Rose Compound offers an exceptional living experience in the heart of Al Khobar. Designed to cater to families and professionals, our properties provide a blend of modern amenities, robust security, and a welcoming community atmosphere.
                    </p>
<p className="text-base text-stone-500 mb-10 leading-relaxed">
                        We understand that your home is your sanctuary. That's why our dedicated management team is available around the clock, 24/7, to ensure your needs are met promptly and efficiently.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center border border-amber-100">
<iconify-icon className="text-amber-700 text-xl" icon="solar:shield-keyhole-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-stone-900">Gated Security</h3>
<p className="text-xs text-stone-500 mt-1">24/7 guarded access and surveillance.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center border border-amber-100">
<iconify-icon className="text-amber-700 text-xl" icon="solar:routing-2-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-stone-900">Prime Location</h3>
<p className="text-xs text-stone-500 mt-1">Al Rakah Al Janubiyah, easy access to city.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center border border-amber-100">
<iconify-icon className="text-amber-700 text-xl" icon="solar:home-smile-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-stone-900">Family Environment</h3>
<p className="text-xs text-stone-500 mt-1">Safe spaces and parks for children.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center border border-amber-100">
<iconify-icon className="text-amber-700 text-xl" icon="solar:parking-circle-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-stone-900">Reserved Parking</h3>
<p className="text-xs text-stone-500 mt-1">Ample secure parking for residents.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-stone-100 rounded-3xl translate-x-4 translate-y-4"></div>
<img alt="Compound Exterior" className="relative z-10 rounded-3xl w-full h-[500px] object-cover shadow-sm border border-stone-200" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 border-y border-stone-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-4">A Glimpse Into Your Next Home</h2>
<p className="text-base text-stone-500">Modern interiors, well-maintained exteriors, and a community built for peaceful living.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<img alt="Living Area" className="w-full h-64 object-cover rounded-2xl shadow-sm border border-stone-200" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<img alt="Exterior Walkway" className="w-full h-64 object-cover rounded-2xl shadow-sm border border-stone-200" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<img alt="Bedroom" className="w-full h-64 object-cover rounded-2xl shadow-sm border border-stone-200" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</section>

<section className="py-24 bg-white" id="availability">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-stone-900 rounded-3xl overflow-hidden shadow-xl">
<div className="grid grid-cols-1 lg:grid-cols-5">

<div className="p-8 md:p-12 lg:col-span-3">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800 border border-stone-700 text-stone-300 text-xs font-medium mb-6">
<iconify-icon className="text-amber-500" icon="solar:bolt-linear"></iconify-icon>
                            Fast Response Guaranteed
                        </div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-2">Request Availability</h2>
<p className="text-sm text-stone-400 mb-8">Fill out the form below or call us directly. Our team is available 24/7 to assist you.</p>
<form className="space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-stone-300">Full Name</label>
<input className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-600/50 focus:border-amber-600/50 transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-stone-300">Phone Number</label>
<input className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-600/50 focus:border-amber-600/50 transition-all" placeholder="05X XXX XXXX" type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-stone-300">Message (Optional)</label>
<textarea className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-600/50 focus:border-amber-600/50 transition-all resize-none" placeholder="I'm interested in a 2-bedroom unit..." rows="3"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium transition-colors bg-white text-stone-900 rounded-xl hover:bg-stone-100 gap-2 mt-4" type="button">
<iconify-icon className="text-lg" icon="solar:plain-linear"></iconify-icon>
                                Send Request
                            </button>
</form>
</div>

<div className="bg-stone-800 p-8 md:p-12 lg:col-span-2 flex flex-col justify-between border-l border-stone-700/50">
<div>
<h3 className="text-xl font-medium tracking-tight text-white mb-6">Contact Details</h3>
<div className="space-y-6">
<a className="flex items-start gap-4 group" href="tel:0580429429">
<div className="w-10 h-10 rounded-full bg-stone-700 flex items-center justify-center group-hover:bg-amber-600 transition-colors">
<iconify-icon className="text-white text-lg" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-stone-400 font-medium mb-1">Call Us 24/7</p>
<p className="text-base text-white font-medium group-hover:text-amber-500 transition-colors">058 042 9429</p>
</div>
</a>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-stone-700 flex items-center justify-center">
<iconify-icon className="text-white text-lg" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-stone-400 font-medium mb-1">Location</p>
<p className="text-sm text-white leading-relaxed">Al Rakah Al Janubiyah,<br/>Al Khobar 34226,<br/>Saudi Arabia</p>
</div>
</div>
</div>
</div>
<div className="mt-10 rounded-xl overflow-hidden h-40 border border-stone-700 relative bg-stone-900 flex items-center justify-center">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#d6d3d1 1px, transparent 1px)', backgroundSize: '16px 16px'}}></div>
<div className="relative z-10 flex flex-col items-center gap-2">
<iconify-icon className="text-3xl text-stone-500" icon="solar:map-bold"></iconify-icon>
<span className="text-xs font-medium text-stone-400">Al Rakah Al Janubiyah</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 border-t border-stone-200">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-stone-900 mb-6">Ready to Move In?</h2>
<p className="text-lg text-stone-500 mb-10">Don't wait. Contact us today to secure your new home at Desert Rose Compound. We are available right now to take your call.</p>
<a className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium transition-colors bg-stone-900 text-white rounded-2xl hover:bg-stone-800 shadow-xl shadow-stone-900/10 gap-3 group" href="tel:0580429429">
<div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon className="text-white text-sm" icon="solar:phone-bold"></iconify-icon>
</div>
                Call 058 042 9429 – Available 24/7
            </a>
</div>
</section>

<footer className="bg-white py-12 border-t border-stone-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-amber-700 text-xl" icon="solar:buildings-linear"></iconify-icon>
<span className="font-semibold tracking-tight text-sm text-stone-900 uppercase">Desert Rose Compound</span>
</div>
<div className="flex items-center gap-6 text-sm text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="tel:0580429429">058 042 9429</a>
<span>•</span>
<span>Al Rakah Al Janubiyah, Al Khobar</span>
</div>
<p className="text-xs text-stone-400">
                ©  Desert Rose. All rights reserved.
            </p>
</div>
</footer>

<div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-stone-200 z-50 sm:hidden">
<a className="w-full flex items-center justify-center px-4 py-3.5 text-base font-medium transition-colors bg-stone-900 text-white rounded-xl shadow-lg gap-2 active:bg-stone-800" href="tel:0580429429">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
            Call Now – 24/7
        </a>
</div>

    </>
  );
}
