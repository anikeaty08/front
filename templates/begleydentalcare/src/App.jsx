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



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
DEFAULT: '#0084a9', // Original Brand Color
50: '#f0f9fb',
100: '#dcedf5', // Original Background Light Blue
200: '#bce0ec',
600: '#0084a9',
700: '#006c8a',
900: '#003646',
},
slate: {
850: '#151f2e', // Darker text
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}



        lucide.createIcons();
    
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
      

<div className="bg-brand-600 text-white px-4 py-3 text-sm font-medium relative">
<div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="info"></i>
<span>Begley Dental has remained in the medical card scheme.</span>
</div>
<a className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded transition-colors text-xs uppercase tracking-wide flex items-center gap-1" href="medical_card_scheme.pdf">
                More Information <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="index.html">

<div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-brand-200 group-hover:scale-105 transition-transform">
<span className="font-bold text-xl">B</span>
</div>
<div className="flex flex-col">
<span className="font-semibold text-slate-900 text-lg tracking-tight leading-none">Begley Dental</span>
<span className="text-xs text-brand-600 font-medium">Dundalk, Co. Louth</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-brand-600 transition-colors" href="begley-dental-team.html">The Team</a>
<a className="hover:text-brand-600 transition-colors" href="begley-dental-services.html">Services</a>
<a className="hover:text-brand-600 transition-colors" href="begley-dental-gallery.html">Gallery</a>
<a className="hover:text-brand-600 transition-colors" href="begley-dental-prices.html">Prices</a>
<a className="bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-brand-600 transition-colors shadow-md shadow-slate-200" href="begley-dental-get-in-touch.html">Get in Touch</a>
</div>

<button className="md:hidden p-2 text-slate-600 hover:text-brand-600" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>

<div className="hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 p-6 flex flex-col gap-4 md:hidden shadow-xl" id="mobile-menu">
<a className="text-lg font-medium text-slate-900" href="begley-dental-team.html">The Team</a>
<a className="text-lg font-medium text-slate-900" href="begley-dental-services.html">Services</a>
<a className="text-lg font-medium text-slate-900" href="begley-dental-gallery.html">Gallery</a>
<a className="text-lg font-medium text-slate-900" href="begley-dental-prices.html">Prices</a>
<a className="text-lg font-medium text-brand-600" href="begley-dental-get-in-touch.html">Get in Touch</a>
</div>
</nav>

<section className="relative pt-16 pb-24 overflow-hidden">

<div className="absolute inset-0 bg-brand-50 -z-20"></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 -z-10"></div>
<div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-200 text-brand-700 text-xs font-semibold shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
</span>
                    Welcome Dr. David Curran to the Team
                </div>
<h1 className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.15]">
                    Professional care in a <br/>
<span className="text-brand-600">relaxed environment.</span>
</h1>
<p className="text-lg text-slate-500 leading-relaxed max-w-lg">
                    Here at Begley Dental we offer a broad range of high quality treatments. We cater for all ages and aim to provide complete patient satisfaction.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-brand-600 text-white px-6 py-3.5 rounded-lg font-medium hover:bg-brand-700 transition-all shadow-lg shadow-brand-200 hover:translate-y-[-2px]" href="tel:0429326801">
<i className="w-4 h-4" data-lucide="phone"></i> Call 042 9326801
                    </a>
<a className="inline-flex justify-center items-center gap-2 bg-white text-slate-700 border border-slate-200 px-6 py-3.5 rounded-lg font-medium hover:border-brand-300 hover:text-brand-600 transition-colors" href="begley-dental-services.html">
                        View Services
                    </a>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 translate-y-8">
<div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-white/50 relative group">

<img alt="Patient at Begley Dental" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</div>
<div className="space-y-4">
<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/50 relative group">

<img alt="Waiting Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/50 bg-white flex items-center justify-center p-6 text-center">

<div className="space-y-2">
<i className="w-10 h-10 text-brand-600 mx-auto" data-lucide="award"></i>
<p className="text-sm font-semibold text-slate-900">Award Winning<br/>Care</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-12 gap-12 lg:gap-16">

<div className="md:col-span-7 space-y-10">
<div>
<h2 className="text-2xl font-semibold text-slate-900 mb-6 tracking-tight">Why Choose Us?</h2>
<div className="prose prose-slate prose-lg text-slate-500">
<p className="mb-4">
                                At Begley Dental we focus on quality, pain-free treatment to meet your dental needs, providing efficient treatment in relaxed and friendly surroundings. We offer a wide range of services, from routine checkups to advanced cosmetic dentistry.
                            </p>
<p className="mb-6">
                                Treatment is provided in state-of-the-art surgeries with modern facilities. In addition, our treatment represents <strong>excellent value for money</strong>. A consumer association report recently found that Dundalk dentists provided the most reasonably priced treatment in the country.
                            </p>
</div>
</div>

<div className="bg-red-50 border border-red-100 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
<div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-red-500 shadow-sm shrink-0">

<i className="w-7 h-7" data-lucide="ambulance"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">Emergency Appointments</h3>
<p className="text-slate-600 text-sm">We endeavour to see emergency appointments as soon as possible.</p>
</div>
</div>

<div className="grid grid-cols-2 gap-4 mt-8">
<div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
<i className="w-6 h-6 text-brand-600 mb-3" data-lucide="smile"></i>
<h4 className="font-medium text-slate-900">Pain Free</h4>
<p className="text-xs text-slate-500 mt-1">Modern techniques for comfort.</p>
</div>
<div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
<i className="w-6 h-6 text-brand-600 mb-3" data-lucide="shield-check"></i>
<h4 className="font-medium text-slate-900">Quality Care</h4>
<p className="text-xs text-slate-500 mt-1">High standards assured.</p>
</div>
</div>
</div>

<div className="md:col-span-5 space-y-8">

<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
<h3 className="text-xl font-semibold text-slate-900 mb-6 tracking-tight">Get in Touch</h3>
<ul className="space-y-5">
<li className="flex items-start gap-4">
<i className="w-5 h-5 text-brand-600 mt-1" data-lucide="map-pin"></i>
<div>
<span className="block font-medium text-slate-900">Address</span>
<span className="text-sm text-slate-500">25 Anne Street, Dundalk,<br/>County Louth</span>
</div>
</li>
<li className="flex items-start gap-4">
<i className="w-5 h-5 text-brand-600 mt-1" data-lucide="phone"></i>
<div>
<span className="block font-medium text-slate-900">Phone</span>
<a className="text-sm text-slate-500 hover:text-brand-600 transition-colors" href="tel:0429326801">+353 (0)42 9326801</a>
</div>
</li>
<li className="flex items-start gap-4">
<i className="w-5 h-5 text-brand-600 mt-1" data-lucide="mail"></i>
<div>
<span className="block font-medium text-slate-900">Email</span>
<a className="text-sm text-slate-500 hover:text-brand-600 transition-colors" href="mailto:tracy@begleydental.ie">tracy@begleydental.ie</a>
</div>
</li>
<li className="flex items-start gap-4 pt-4 border-t border-slate-200">
<i className="w-5 h-5 text-brand-600 mt-1" data-lucide="clock"></i>
<div>
<span className="block font-medium text-slate-900">Opening Hours</span>
<p className="text-sm text-slate-500 mt-1">
                                        Monday-Friday: 8am-5pm.<br/>
<span className="text-xs opacity-75">Please check with Surgery</span>
</p>
</div>
</li>
</ul>
</div>

<div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 h-64 relative group">
<iframe className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" frameborder="0" height="100%" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=25+Anne+Street,+Dundalk,+County+Louth&amp;aq=&amp;ie=UTF8&amp;hq=&amp;hnear=25+Anne+St,+Dundalk,+County+Louth,+Ireland&amp;ll=54.000858,-6.405115&amp;spn=0.009384,0.03974&amp;z=14&amp;output=embed" width="100%">
</iframe>
<a className="absolute bottom-3 left-3 bg-white text-xs font-semibold px-3 py-1.5 rounded shadow text-slate-700 hover:text-brand-600" href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=25+Anne+Street,+Dundalk,+County+Louth&amp;aq=&amp;ie=UTF8&amp;hq=&amp;hnear=25+Anne+St,+Dundalk,+County+Louth,+Ireland&amp;ll=54.000858,-6.405115&amp;spn=0.009384,0.03974&amp;z=14" target="_blank">
                            View Larger Map
                        </a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm">
                © Begley Dental 2021. All rights reserved.
            </div>
<div className="flex items-center gap-6">
<a className="hover:text-white transition-colors text-sm" href="index.html">Home</a>
<a className="hover:text-white transition-colors text-sm" href="begley-dental-team.html">Team</a>
<a className="hover:text-white transition-colors text-sm" href="begley-dental-get-in-touch.html">Contact</a>
</div>
<div className="text-xs text-slate-600">
                Design and development by <a className="hover:text-slate-400 transition-colors" href="http://www.wileydesign.ie">wileydesign</a>
</div>
</div>
</footer>


    </>
  );
}
