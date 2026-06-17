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
      

<header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<a className="text-xl font-semibold tracking-tighter text-slate-900" href="#">SELECTRICAL</a>
</div>
<nav className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Level 2 Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Defect Notices</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Commercial</a>
</nav>
<div className="flex items-center space-x-4">
<a className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors" href="tel:1800123456">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    1800-SELECT
                </a>
<a className="hidden sm:inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2" href="#">
                    Get Instant Quote
                </a>
</div>
</div>
</header>

<section className="relative overflow-hidden bg-slate-50 pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-slate-200">
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 mb-8">
<span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
<span className="text-xs font-medium text-blue-800">Certified Level 2 ASP Providers</span>
</div>
<h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        Sydney's Premier Level 2 Electricians.
                    </h1>
<p className="mt-6 text-lg text-slate-500 font-normal leading-relaxed">
                        Authorized to work directly on the Ausgrid &amp; Endeavour Energy networks. Fast resolution for defect notices, power upgrades, and complex metering installations.
                    </p>
<div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
<a className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2" href="#">
                            Get Your Instant Quote
                        </a>
<a className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-8 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2" href="tel:1800123456">
<iconify-icon className="text-blue-600" icon="solar:phone-linear" strokeWidth="1.5" width="18"></iconify-icon> Call Now
                        </a>
</div>
</div>

<div className="relative mx-auto w-full max-w-lg lg:max-w-none">
<div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3]">
<img alt="Professional electrical work on distribution board" className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/10"></div>
</div>
</div>
</div>
</div>
</section>

<div className="border-b border-slate-200 bg-white py-8">
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-24">

<div className="flex flex-col items-center justify-center space-y-1">
<div className="flex text-yellow-400 gap-1">
<iconify-icon className="fill-current text-yellow-400" icon="solar:star-linear" strokeWidth="2" width="20"></iconify-icon>
<iconify-icon className="fill-current text-yellow-400" icon="solar:star-linear" strokeWidth="2" width="20"></iconify-icon>
<iconify-icon className="fill-current text-yellow-400" icon="solar:star-linear" strokeWidth="2" width="20"></iconify-icon>
<iconify-icon className="fill-current text-yellow-400" icon="solar:star-linear" strokeWidth="2" width="20"></iconify-icon>
<iconify-icon className="fill-current text-yellow-400" icon="solar:star-linear" strokeWidth="2" width="20"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<span className="text-sm font-semibold text-slate-900 tracking-tight">5.0</span>
<span className="text-xs font-medium text-slate-500">Google Reviews</span>
</div>
</div>
<div className="hidden md:block h-8 w-px bg-slate-200"></div>

<div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
<div className="flex items-center gap-2 text-slate-900">
<iconify-icon icon="solar:power-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xl font-semibold tracking-tighter">AUSGRID</span>
</div>
<div className="flex items-center gap-1 text-slate-900">
<iconify-icon className="text-orange-600" icon="solar:flame-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xl font-medium tracking-tight">origin</span>
</div>
<div className="flex items-center text-slate-900">
<span className="text-lg font-semibold tracking-tighter uppercase">Endeavour</span>
</div>
</div>
</div>
</div>
</div>

<section className="bg-white py-24 sm:py-32 relative">
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
<div className="mx-auto max-w-2xl lg:text-center">
<h2 className="text-sm font-medium leading-7 text-blue-600">Specialized Infrastructure</h2>
<p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Level 2 ASP Capabilities.</p>
<p className="mt-6 text-lg leading-8 text-slate-500 font-normal">Beyond standard electrical work. We hold the accreditations required to safely interact with the local supply network.</p>
</div>
<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
<div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">

<div className="flex flex-col p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-lg hover:border-slate-200 transition-all">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6">
<iconify-icon icon="solar:danger-triangle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Defect Notices</h3>
<p className="mt-4 flex-auto text-sm leading-7 text-slate-500 font-normal">Rapid response to clear network defect notices. We liaise directly with your energy provider to rectify safety issues and restore compliance immediately.</p>
</div>

<div className="flex flex-col p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-lg hover:border-slate-200 transition-all">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6">
<iconify-icon icon="solar:bolt-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Power Upgrades</h3>
<p className="mt-4 flex-auto text-sm leading-7 text-slate-500 font-normal">Seamlessly upgrade from single-phase to three-phase power. Essential for demanding modern machinery, high-capacity HVAC, and rapid EV infrastructure.</p>
</div>

<div className="flex flex-col p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-lg hover:border-slate-200 transition-all">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6">
<iconify-icon icon="solar:smart-home-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Overhead &amp; Underground</h3>
<p className="mt-4 flex-auto text-sm leading-7 text-slate-500 font-normal">Installation, repair, and connection of service lines from the street network to your property, ensuring robust and weather-resistant power delivery.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 relative overflow-hidden">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
<div className="relative px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    Need a Level 2 Electrician immediately?
                </h2>
<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300 font-normal">
                    Get an instant quote online or call our dedicated dispatch team for emergency defect resolutions and rapid deployments.
                </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-slate-900 z-10" href="#">
                        Get Instant Quote
                    </a>
<a className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-md bg-white/10 px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 z-10" href="tel:1800123456">
                        Call 1800-SELECT
                    </a>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200">
<div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
<div className="xl:grid xl:grid-cols-3 xl:gap-8">
<div className="space-y-8">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:bolt-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-xl font-semibold tracking-tighter text-slate-900">SELECTRICAL</span>
</div>
<p className="text-sm leading-6 text-slate-500 font-normal max-w-xs">
                        Certified Level 2 ASP Electrical contractors delivering compliant, safe, and efficient power solutions.
                    </p>
<div className="flex space-x-6">
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<span className="sr-only">Facebook</span>
<iconify-icon icon="solar:link-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<span className="sr-only">Email</span>
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
<div className="md:grid md:grid-cols-2 md:gap-8">
<div>
<h3 className="text-sm font-semibold leading-6 text-slate-900">Services</h3>
<ul className="mt-6 space-y-4" role="list">
<li><a className="text-sm leading-6 text-slate-500 font-normal hover:text-blue-600 transition-colors" href="#">Defect Notice Repair</a></li>
<li><a className="text-sm leading-6 text-slate-500 font-normal hover:text-blue-600 transition-colors" href="#">3-Phase Upgrades</a></li>
<li><a className="text-sm leading-6 text-slate-500 font-normal hover:text-blue-600 transition-colors" href="#">Smart Metering</a></li>
<li><a className="text-sm leading-6 text-slate-500 font-normal hover:text-blue-600 transition-colors" href="#">Private Poles</a></li>
</ul>
</div>
<div className="mt-10 md:mt-0">
<h3 className="text-sm font-semibold leading-6 text-slate-900">Company</h3>
<ul className="mt-6 space-y-4" role="list">
<li><a className="text-sm leading-6 text-slate-500 font-normal hover:text-blue-600 transition-colors" href="#">About Us</a></li>
<li><a className="text-sm leading-6 text-slate-500 font-normal hover:text-blue-600 transition-colors" href="#">Accreditations</a></li>
<li><a className="text-sm leading-6 text-slate-500 font-normal hover:text-blue-600 transition-colors" href="#">Reviews</a></li>
<li><a className="text-sm leading-6 text-slate-500 font-normal hover:text-blue-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div>
<h3 className="text-sm font-semibold leading-6 text-slate-900">Service Areas</h3>
<p className="mt-2 text-sm leading-6 text-slate-500 font-normal">Providing ASP Level 2 services across the greater metropolitan grid.</p>
<div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-900">
<iconify-icon className="text-blue-600" icon="solar:map-point-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Sydney &amp; Surrounding Suburbs
                        </div>
</div>
</div>
</div>
<div className="mt-16 border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs leading-5 text-slate-400 font-normal">© 2026 Selectrical. Level 2 ASP Certified.</p>
<div className="flex gap-4 text-xs text-slate-400 font-normal">
<a className="hover:text-slate-900 transition-colors" href="#">Licensing Info</a>
<a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-8 right-8 z-50 hidden sm:block">
<a className="flex items-center justify-center rounded-full bg-slate-900 px-6 py-4 text-sm font-medium text-white shadow-xl hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300 ring-1 ring-white/10" href="#">
<span className="mr-2 h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
            Get Instant Quote
        </a>
</div>

<div className="fixed bottom-0 left-0 w-full z-50 flex sm:hidden bg-white border-t border-slate-200 p-4 gap-3 shadow-[0_-8px_16px_-4px_rgba(0,0,0,0.05)] pb-safe">
<a className="flex flex-1 items-center justify-center gap-2 rounded-md bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-800" href="tel:1800123456">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5" width="18"></iconify-icon>
            Call Now
        </a>
<a className="flex flex-1 items-center justify-center rounded-md bg-blue-600 px-4 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700" href="#">
            Instant Quote
        </a>
</div>

    </>
  );
}
