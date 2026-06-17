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
      

<header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-green-600 text-2xl" icon="solar:shield-leaf-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-semibold text-lg tracking-tighter text-slate-900">GREENSHIELD</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-green-600 transition-colors" href="#">Services</a>
<a className="hover:text-green-600 transition-colors" href="#">Service Area</a>
<a className="hover:text-green-600 transition-colors" href="#">Reviews</a>
<a className="hover:text-green-600 transition-colors" href="#">About Us</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-green-600 transition-colors" href="tel:#">
<iconify-icon className="text-lg" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
                    (555) 123-4567
                </a>
<a className="inline-flex items-center justify-center rounded-full bg-green-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-green-700 transition-all focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2" href="#">
                    Get a Free Quote
                </a>
</div>
</div>
</header>
<main>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-50/50 via-white to-white"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="max-w-3xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-medium mb-8">
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
                        Top Rated Local Pest Control
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6">
                        Effective, Eco-Friendly Pest Control for Your Home &amp; Family
                    </h1>
<p className="text-lg sm:text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Protect your property with Green Shield. We provide safe, reliable, and guaranteed pest management solutions tailored to your unique needs. Don't let pests take over.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-4 text-base font-medium text-white shadow-sm hover:bg-green-700 transition-all focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2" href="#">
                            Schedule Free Inspection
                        </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white border border-slate-200 px-8 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 transition-all focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2" href="tel:#">
<iconify-icon className="mr-2 text-xl" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
                            Call (555) 123-4567
                        </a>
</div>
<div className="mt-14 pt-8 border-t border-slate-100 flex flex-wrap justify-center gap-8 sm:gap-12 opacity-70 grayscale">
<div className="flex items-center gap-2 text-sm font-medium text-slate-500">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
                            Licensed &amp; Insured
                        </div>
<div className="flex items-center gap-2 text-sm font-medium text-slate-500">
<iconify-icon className="text-xl" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
                            Eco-Friendly Products
                        </div>
<div className="flex items-center gap-2 text-sm font-medium text-slate-500">
<iconify-icon className="text-xl" icon="solar:medal-star-linear" strokeWidth="1.5"></iconify-icon>
                            100% Satisfaction Guarantee
                        </div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Comprehensive Pest Solutions</h2>
<p className="text-slate-500 text-base">We handle everything from common household nuisances to complex infestations with targeted, effective treatments.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-slate-100 hover:shadow-lg transition-shadow duration-300 group">
<div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-green-600" icon="solar:bug-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">General Pest Control</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Complete protection against ants, spiders, roaches, and other common invaders. Regular maintenance keeps them away for good.</p>
<a className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700" href="#">
                            Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="bg-white rounded-2xl p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-slate-100 hover:shadow-lg transition-shadow duration-300 group">
<div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-green-600" icon="solar:mouse-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Rodent Control</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Safe and effective trapping, removal, and exclusion services to ensure mice and rats cannot re-enter your property.</p>
<a className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700" href="#">
                            Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="bg-white rounded-2xl p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-slate-100 hover:shadow-lg transition-shadow duration-300 group">
<div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-green-600" icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Termite Inspections</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Thorough inspections and preventative treatments to protect your home's structure from costly termite damage.</p>
<a className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700" href="#">
                            Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="bg-white rounded-2xl p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-slate-100 hover:shadow-lg transition-shadow duration-300 group">
<div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-green-600" icon="solar:droplets-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Mosquito Reduction</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Reclaim your backyard with our seasonal barrier treatments that significantly reduce mosquito populations around your home.</p>
<a className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700" href="#">
                            Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="bg-white rounded-2xl p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-slate-100 hover:shadow-lg transition-shadow duration-300 group">
<div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-green-600" icon="solar:bed-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Bed Bug Treatment</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Discreet, aggressive treatments to eradicate bed bugs at all life stages, helping you sleep soundly again.</p>
<a className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700" href="#">
                            Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="bg-white rounded-2xl p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-slate-100 hover:shadow-lg transition-shadow duration-300 group">
<div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-green-600" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Commercial Pest Control</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Customized plans for businesses, restaurants, and property managers to keep facilities compliant and pest-free.</p>
<a className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700" href="#">
                            Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Why Choose Green Shield?</h2>
<p className="text-slate-500 text-base mb-8 leading-relaxed">
                            We believe in doing things right the first time. Our team is dedicated to providing superior service, utilizing the latest eco-friendly methods to ensure the safety of your family, pets, and the environment.
                        </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-2xl text-green-500" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-slate-900">The Green Shield Guarantee</h4>
<p className="text-sm text-slate-500 mt-1">If pests return between your scheduled treatments, we'll come back and retreat at no additional cost to you.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-2xl text-green-500" icon="solar:user-id-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-slate-900">Expert Technicians</h4>
<p className="text-sm text-slate-500 mt-1">Our technicians are state-licensed, highly trained, and undergo continuous education on the latest pest control technologies.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-2xl text-green-500" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-slate-900">Eco-Conscious Approach</h4>
<p className="text-sm text-slate-500 mt-1">We utilize Integrated Pest Management (IPM) practices, focusing on long-term prevention with minimal environmental impact.</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
<div className="flex items-center justify-between mb-8">
<h3 className="text-xl font-medium tracking-tight text-slate-900">What Our Customers Say</h3>
<div className="flex text-yellow-400 text-lg">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="space-y-4">

<div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
<p className="text-sm text-slate-600 italic mb-4">"Green Shield was fantastic! The technician was polite, explained everything thoroughly, and we haven't seen a single ant since they left. Highly recommend their services to anyone."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-medium text-xs">ST</div>
<span className="text-sm font-medium text-slate-900">Sarah T.</span>
</div>
</div>

<div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
<p className="text-sm text-slate-600 italic mb-4">"I love that they focus on eco-friendly products. It gives me peace of mind knowing it's safe for my dog, and it actually works better than the harsh chemicals other companies used."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-medium text-xs">MR</div>
<span className="text-sm font-medium text-slate-900">Mike R.</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-green-600 text-white overflow-hidden relative">
<div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Ready for a Pest-Free Home?</h2>
<p className="text-green-100 text-base mb-8 max-w-2xl mx-auto">Get a free, no-obligation inspection and customized treatment plan today.</p>
<a className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-medium text-green-700 shadow-sm hover:bg-slate-50 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600" href="#">
                    Get Your Free Quote
                </a>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="w-full md:w-1/3 text-center md:text-left">
<div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-6 mx-auto md:mx-0">
<iconify-icon className="text-2xl text-green-600" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Proudly Serving the Community</h2>
<p className="text-slate-500 text-base mb-6">
                            We provide fast, reliable pest control services across the region. As local experts, we know exactly what pests are active in our area and how to stop them.
                        </p>
</div>
<div className="w-full md:w-2/3">
<div className="flex flex-wrap gap-3 justify-center md:justify-start">

<span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-green-300 hover:bg-green-50 transition-colors cursor-default">Springfield</span>
<span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-green-300 hover:bg-green-50 transition-colors cursor-default">Shelbyville</span>
<span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-green-300 hover:bg-green-50 transition-colors cursor-default">Capital City</span>
<span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-green-300 hover:bg-green-50 transition-colors cursor-default">Ogdenville</span>
<span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-green-300 hover:bg-green-50 transition-colors cursor-default">North Haverbrook</span>
<span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-green-300 hover:bg-green-50 transition-colors cursor-default">Cypress Creek</span>
<span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-green-300 hover:bg-green-50 transition-colors cursor-default">West Springfield</span>
<span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-green-300 hover:bg-green-50 transition-colors cursor-default">And Surrounding Areas</span>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-green-500 text-2xl" icon="solar:shield-leaf-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-semibold text-lg tracking-tighter text-white">GREENSHIELD</span>
</div>
<p className="text-sm text-slate-400 mb-4">Eco-friendly pest control solutions protecting your home, family, and the environment.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Services</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-green-400 transition-colors" href="#">General Pest Control</a></li>
<li><a className="hover:text-green-400 transition-colors" href="#">Rodent Exclusion</a></li>
<li><a className="hover:text-green-400 transition-colors" href="#">Termite Protection</a></li>
<li><a className="hover:text-green-400 transition-colors" href="#">Mosquito Treatments</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-green-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-green-400 transition-colors" href="#">Service Areas</a></li>
<li><a className="hover:text-green-400 transition-colors" href="#">Reviews</a></li>
<li><a className="hover:text-green-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Contact</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-2">
<iconify-icon className="text-green-500" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
                            (555) 123-4567
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-green-500" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
                            info@greenshield.com
                        </li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
<p>© 2023 Green Shield Pest Control. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-0 inset-x-0 p-4 bg-white border-t border-slate-200 z-50 md:hidden flex gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
<a className="flex-1 inline-flex items-center justify-center rounded-lg bg-slate-100 px-4 py-3 text-sm font-medium text-slate-900 active:bg-slate-200" href="tel:#">
<iconify-icon className="mr-2 text-lg" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
            Call
        </a>
<a className="flex-[2] inline-flex items-center justify-center rounded-lg bg-green-600 px-4 py-3 text-sm font-medium text-white active:bg-green-700" href="#">
            Get Free Quote
        </a>
</div>

    </>
  );
}
