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
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
navy: '#1F3B73',
coral: '#FF5A3D',
coralHover: '#E54D32',
}
}
}
}



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
      

<div className="fixed top-0 w-full z-50 flex flex-col shadow-sm">

<div className="bg-navy text-white text-xs sm:text-sm py-2 px-4 text-center font-medium tracking-wide">
<span className="mr-1">🔥</span> Limited Time Offer — Save Up to ₹7,000 on Your WordPress Website! Deposit must be paid within 5 business days. 
            <a className="underline underline-offset-2 hover:text-coral transition-colors ml-1" href="#quote">Claim Offer →</a>
</div>

<header className="bg-white/95 backdrop-blur-sm border-b border-slate-100 py-3 px-4 sm:px-6 lg:px-8 w-full transition-all">
<div className="max-w-7xl mx-auto flex justify-between items-center">

<a className="flex items-center gap-1 text-xl tracking-tighter" href="#">
<span className="font-semibold text-navy">GROWTH</span><span className="font-medium text-coral">DIGITAL</span>
</a>

<div className="flex items-center gap-4 sm:gap-6">
<a className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-navy transition-colors" href="tel:+910000000000">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Call Us
                    </a>
<a className="bg-coral hover:bg-coralHover text-white text-xs sm:text-sm font-medium py-2 px-4 rounded-md transition-colors shadow-sm" href="#quote">
                        Get a Free Quote
                    </a>
</div>
</div>
</header>
</div>

<section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-24 lg:pb-32 overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="max-w-2xl">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-navy leading-[1.1] mb-6">
                    Professional WordPress Websites Built to Grow Your Business
                </h1>
<p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                    Growth Digital is a leading WordPress web design company delivering fast, mobile-friendly, and high-converting websites for businesses across India. From startups to established brands — we build WordPress sites that work.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="inline-flex justify-center items-center bg-coral hover:bg-coralHover text-white text-sm font-medium py-3 px-6 rounded-md transition-colors shadow-sm" href="#quote">
                        Get My Free Quote
                    </a>
<a className="inline-flex justify-center items-center bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm font-medium py-3 px-6 rounded-md transition-colors" href="#pricing">
                        View Packages &amp; Pricing ↓
                    </a>
</div>

<div className="flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm text-slate-600 font-medium border-t border-slate-100 pt-6">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-amber-400" icon="solar:star-fall-linear" width="18"></iconify-icon>
                        Google 5-Star Rated
                    </div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-emerald-500" icon="solar:shield-check-linear" width="18"></iconify-icon>
                        15+ Years Experience
                    </div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-navy" icon="solar:smartphone-linear" width="18"></iconify-icon>
                        100% Mobile Responsive
                    </div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-slate-400" icon="solar:lock-password-linear" width="18"></iconify-icon>
                        50% Upfront, 50% on Completion
                    </div>
</div>
</div>

<div className="relative w-full h-[400px] sm:h-[500px] flex items-center justify-center lg:justify-end perspective-1000">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[85%] sm:w-[80%] h-[280px] sm:h-[380px] bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">

<div className="bg-slate-100 border-b border-slate-200 h-8 flex items-center px-3 gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="ml-4 bg-white border border-slate-200 h-5 w-48 rounded text-[8px] text-slate-400 flex items-center px-2 flex-1 mx-4 max-w-sm">yourbusiness.com</div>
</div>

<div className="flex-1 bg-slate-50 p-4 sm:p-6 flex flex-col gap-4">
<div className="flex justify-between items-center mb-2">
<div className="w-16 h-4 bg-slate-200 rounded"></div>
<div className="flex gap-2"><div className="w-8 h-2 bg-slate-200 rounded"></div><div className="w-8 h-2 bg-slate-200 rounded"></div></div>
</div>
<div className="w-2/3 h-8 sm:h-12 bg-slate-200 rounded mb-2"></div>
<div className="w-1/2 h-4 bg-slate-200 rounded"></div>
<div className="w-24 h-8 bg-coral/20 rounded mt-2"></div>
</div>
</div>

<div className="absolute left-4 sm:left-12 bottom-4 sm:bottom-12 w-[140px] sm:w-[180px] h-[280px] sm:h-[360px] bg-white rounded-[24px] shadow-xl border-4 border-slate-800 overflow-hidden flex flex-col z-10">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-slate-800 rounded-b-xl"></div>
<div className="flex-1 bg-slate-50 p-4 mt-6 flex flex-col gap-3">
<div className="w-12 h-3 bg-slate-200 rounded mb-2"></div>
<div className="w-full h-16 bg-slate-200 rounded"></div>
<div className="w-3/4 h-3 bg-slate-200 rounded"></div>
<div className="w-1/2 h-3 bg-slate-200 rounded"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-navy mb-4">
                    Why Choose a WordPress Website for Your Business?
                </h2>
<p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    As a trusted WordPress website design company, Growth Digital builds websites that are fast, secure, SEO-ready, and easy to manage. Whether you're a local business, a service provider, or a growing brand, our affordable website design for small business packages give you everything you need to establish a strong online presence — without the agency price tag.
                </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

<div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-4 items-start transition-shadow hover:shadow-md">
<div className="w-12 h-12 rounded-lg bg-orange-50 text-coral flex items-center justify-center">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-navy mb-1.5 tracking-tight">Fast &amp; SEO-Optimised</h3>
<p className="text-xs sm:text-sm text-slate-500 leading-relaxed">Built for speed and search engine visibility</p>
</div>
</div>

<div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-4 items-start transition-shadow hover:shadow-md">
<div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center">
<iconify-icon icon="solar:smartphone-update-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-navy mb-1.5 tracking-tight">100% Mobile Responsive</h3>
<p className="text-xs sm:text-sm text-slate-500 leading-relaxed">Looks perfect on every screen</p>
</div>
</div>

<div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-4 items-start transition-shadow hover:shadow-md">
<div className="w-12 h-12 rounded-lg bg-purple-50 text-purple-500 flex items-center justify-center">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-navy mb-1.5 tracking-tight">Full Admin Access</h3>
<p className="text-xs sm:text-sm text-slate-500 leading-relaxed">You own and control your site</p>
</div>
</div>

<div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-4 items-start transition-shadow hover:shadow-md">
<div className="w-12 h-12 rounded-lg bg-pink-50 text-pink-500 flex items-center justify-center">
<iconify-icon icon="solar:pallete-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-navy mb-1.5 tracking-tight">Custom or Premium Designs</h3>
<p className="text-xs sm:text-sm text-slate-500 leading-relaxed">Stand out from your competitors</p>
</div>
</div>

<div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-4 items-start transition-shadow hover:shadow-md">
<div className="w-12 h-12 rounded-lg bg-green-50 text-emerald-500 flex items-center justify-center">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-navy mb-1.5 tracking-tight">WhatsApp &amp; Call Buttons</h3>
<p className="text-xs sm:text-sm text-slate-500 leading-relaxed">Turn visitors into enquiries instantly</p>
</div>
</div>

<div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-4 items-start transition-shadow hover:shadow-md">
<div className="w-12 h-12 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
<iconify-icon icon="solar:shield-keyhole-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-navy mb-1.5 tracking-tight">Secure &amp; Reliable</h3>
<p className="text-xs sm:text-sm text-slate-500 leading-relaxed">Built with security and performance in mind</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-white" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-navy mb-4">
                    WordPress Website Packages — Transparent Pricing, No Hidden Costs
                </h2>
<p className="text-sm sm:text-base text-slate-500">
                    Choose the package that suits your business. All Limited Time Offer prices are valid only when deposit is paid within 5 business days of your quote.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">

<div className="border border-slate-200 rounded-2xl p-6 flex flex-col bg-white">
<h3 className="text-xl font-semibold text-navy tracking-tight mb-2">Startup</h3>
<div className="mb-6">
<span className="text-sm text-slate-400 line-through">₹12,990</span>
<div className="flex items-baseline gap-1 mt-1">
<span className="text-3xl font-semibold tracking-tight text-slate-900">₹8,990</span>
</div>
<div className="mt-2 inline-block bg-emerald-50 text-emerald-600 text-[10px] font-medium px-2 py-1 rounded border border-emerald-100 uppercase tracking-wide">
                            You Save: ₹4,000
                        </div>
</div>
<a className="w-full block text-center bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm font-medium py-2.5 rounded-md transition-colors mb-6" href="#quote">
                        Get Started →
                    </a>
<ul className="flex-1 space-y-3 text-xs text-slate-600">
<li className="flex items-start gap-2"><iconify-icon className="text-coral shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> Up to 5 Pages</li>
<li className="flex items-start gap-2"><iconify-icon className="text-coral shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> Basic Template Design</li>
<li className="flex items-start gap-2"><iconify-icon className="text-coral shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> 2 Banner Slides</li>
<li className="flex items-start gap-2"><iconify-icon className="text-coral shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> Up to 12 Photos</li>
<li className="flex items-start gap-2 text-slate-400"><iconify-icon className="shrink-0 mt-0.5" icon="solar:minus-circle-linear" width="16"></iconify-icon> Gallery Section</li>
<li className="flex items-start gap-2 text-slate-400"><iconify-icon className="shrink-0 mt-0.5" icon="solar:minus-circle-linear" width="16"></iconify-icon> FAQ Section</li>
<li className="flex items-start gap-2"><iconify-icon className="text-coral shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> Contact &amp; WhatsApp Forms</li>
<li className="flex items-start gap-2"><iconify-icon className="text-coral shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> Social Media Links</li>
<li className="flex items-start gap-2"><iconify-icon className="text-coral shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> Full Admin Access</li>
<li className="pt-4 mt-4 border-t border-slate-100 flex items-start gap-2"><iconify-icon className="text-slate-400 shrink-0 mt-0.5" icon="solar:clock-circle-linear" width="16"></iconify-icon> Delivery: 10–20 Days</li>
<li className="flex items-start gap-2"><iconify-icon className="text-slate-400 shrink-0 mt-0.5" icon="solar:pen-linear" width="16"></iconify-icon> 2 Revisions included</li>
<li className="flex items-start gap-2"><iconify-icon className="text-slate-400 shrink-0 mt-0.5" icon="solar:wallet-linear" width="16"></iconify-icon> 100% upfront required</li>
<li className="pt-4 mt-4 border-t border-slate-100 flex flex-col gap-1 text-slate-500">
<span>Hosting Only: <span className="font-medium">₹3,490/yr</span></span>
<span>Host + Domain: <span className="font-medium">₹3,990/yr</span></span>
</li>
</ul>
</div>

<div className="relative border-2 border-navy rounded-2xl p-6 flex flex-col bg-white shadow-lg md:-mt-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-navy text-white text-[10px] font-semibold tracking-widest uppercase py-1 px-3 rounded-full flex items-center gap-1 shadow-sm">
<iconify-icon className="text-amber-400" icon="solar:star-bold"></iconify-icon> Most Popular
                    </div>
<h3 className="text-xl font-semibold text-navy tracking-tight mb-2">Growth</h3>
<div className="mb-6">
<span className="text-sm text-slate-400 line-through">₹19,990</span>
<div className="flex items-baseline gap-1 mt-1">
<span className="text-3xl font-semibold tracking-tight text-slate-900">₹14,990</span>
</div>
<div className="mt-2 inline-block bg-emerald-50 text-emerald-600 text-[10px] font-medium px-2 py-1 rounded border border-emerald-100 uppercase tracking-wide">
                            You Save: ₹5,000
                        </div>
</div>
<a className="w-full block text-center bg-coral hover:bg-coralHover text-white text-sm font-medium py-2.5 rounded-md transition-colors shadow-sm mb-6" href="#quote">
                        Get Started →
                    </a>
<ul className="flex-1 space-y-3 text-xs text-slate-700">
<li className="flex items-start gap-2"><iconify-icon className="text-coral shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> <span className="font-medium">Up to 7 Pages</span></li>
<li className="flex items-start gap-2"><iconify-icon className="text-coral shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> <span className="font-medium">Premium Template Design</span></li>
<li className="flex items-start gap-2"><iconify-icon className="text-coral shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> 3 Banner Slides</li>
<li className="flex items-start gap-2"><iconify-icon className="text-coral shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> Up to 20 Photos</li>
<li className="flex items-start gap-2"><iconify-icon className="text-coral shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> Gallery Section included</li>
<li className="flex items-start gap-2"><iconify-icon className="text-coral shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> FAQ Section included</li>
<li className="flex items-start gap-2"><iconify-icon className="text-coral shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> Contact &amp; WhatsApp Forms</li>
<li className="flex items-start gap-2"><iconify-icon className="text-coral shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> Social Media Links</li>
<li className="flex items-start gap-2"><iconify-icon className="text-coral shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> Full Admin Access</li>
<li className="pt-4 mt-4 border-t border-slate-100 flex items-start gap-2"><iconify-icon className="text-slate-400 shrink-0 mt-0.5" icon="solar:clock-circle-linear" width="16"></iconify-icon> Delivery: 20–30 Days</li>
<li className="flex items-start gap-2"><iconify-icon className="text-slate-400 shrink-0 mt-0.5" icon="solar:pen-linear" width="16"></iconify-icon> 3 Revisions included</li>
<li className="flex items-start gap-2"><iconify-icon className="text-slate-400 shrink-0 mt-0.5" icon="solar:wallet-linear" width="16"></iconify-icon> 50% upfront required</li>
<li className="pt-4 mt-4 border-t border-slate-100 flex flex-col gap-1 text-slate-600">
<span>Hosting Only: <span className="font-medium">₹4,490/yr</span></span>
<span>Host + Domain: <span className="font-medium">₹4,990/yr</span></span>
</li>
</ul>
</div>

<div className="border border-slate-200 rounded-2xl p-6 flex flex-col bg-white">
<h3 className="text-xl font-semibold text-navy tracking-tight mb-2">Expand</h3>
<div className="mb-6">
<span className="text-sm text-slate-400 line-through">₹29,990</span>
<div className="flex items-baseline gap-1 mt-1">
<span className="text-3xl font-semibold tracking-tight text-slate-900">₹22,990</span>
</div>
<div className="mt-2 inline-block bg-emerald-50 text-emerald-600 text-[10px] font-medium px-2 py-1 rounded border border-emerald-100 uppercase tracking-wide">
                            You Save: ₹7,000
                        </div>
</div>
<a className="w-full block text-center bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm font-medium py-2.5 rounded-md transition-colors mb-6" href="#quote">
                        Get Started →
                    </a>
<ul className="flex-1 space-y-3 text-xs text-slate-600">
<li className="flex items-start gap-2"><iconify-icon className="text-coral shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> <span className="font-medium">Up to 12 Pages</span></li>
<li className="flex items-start gap-2"><iconify-icon className="text-coral shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> <span className="font-medium">Premium Template Design</span></li>
<li className="flex items-start gap-2"><iconify-icon className="text-coral shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> 4 Banner Slides</li>
<li className="flex items-start gap-2"><iconify-icon className="text-coral shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> Up to 40 Photos</li>
<li className="flex items-start gap-2"><iconify-icon className="text-coral shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> Gallery Section included</li>
<li className="flex items-start gap-2"><iconify-icon className="text-coral shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> FAQ Section included</li>
<li className="flex items-start gap-2"><iconify-icon className="text-coral shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> Contact &amp; WhatsApp Forms</li>
<li className="flex items-start gap-2"><iconify-icon className="text-coral shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> Social Media Links</li>
<li className="flex items-start gap-2"><iconify-icon className="text-coral shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> Full Admin Access</li>
<li className="pt-4 mt-4 border-t border-slate-100 flex items-start gap-2"><iconify-icon className="text-slate-400 shrink-0 mt-0.5" icon="solar:clock-circle-linear" width="16"></iconify-icon> Delivery: 30–40 Days</li>
<li className="flex items-start gap-2"><iconify-icon className="text-slate-400 shrink-0 mt-0.5" icon="solar:pen-linear" width="16"></iconify-icon> 4 Revisions included</li>
<li className="flex items-start gap-2"><iconify-icon className="text-slate-400 shrink-0 mt-0.5" icon="solar:wallet-linear" width="16"></iconify-icon> 50% upfront required</li>
<li className="pt-4 mt-4 border-t border-slate-100 flex flex-col gap-1 text-slate-500">
<span>Hosting Only: <span className="font-medium">₹5,490/yr</span></span>
<span>Host + Domain: <span className="font-medium">₹5,990/yr</span></span>
</li>
</ul>
</div>

<div className="border border-slate-200 rounded-2xl p-6 flex flex-col bg-slate-50/50">
<h3 className="text-xl font-semibold text-navy tracking-tight mb-2">Custom</h3>
<div className="mb-6">
<span className="text-sm text-transparent select-none line-through block">₹0</span>
<div className="flex items-baseline gap-1 mt-1">
<span className="text-2xl font-semibold tracking-tight text-slate-900">Quote Based</span>
</div>
<div className="mt-2 inline-block text-transparent select-none text-[10px] px-2 py-1">
                            Spacer
                        </div>
</div>
<a className="w-full block text-center bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm font-medium py-2.5 rounded-md transition-colors mb-6" href="#quote">
                        Request a Quote →
                    </a>
<ul className="flex-1 space-y-3 text-xs text-slate-600">
<li className="flex items-start gap-2"><iconify-icon className="text-slate-400 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> Pages as required</li>
<li className="flex items-start gap-2"><iconify-icon className="text-slate-400 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> <span className="font-medium">Fully Custom Design</span></li>
<li className="flex items-start gap-2"><iconify-icon className="text-slate-400 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> Custom features &amp; integrations</li>
<li className="flex items-start gap-2"><iconify-icon className="text-slate-400 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> Advanced SEO setup</li>
<li className="flex items-start gap-2"><iconify-icon className="text-slate-400 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> E-commerce capable</li>
<li className="pt-4 mt-4 border-t border-slate-200 flex items-start gap-2"><iconify-icon className="text-slate-400 shrink-0 mt-0.5" icon="solar:clock-circle-linear" width="16"></iconify-icon> Delivery depends on scope</li>
<li className="flex items-start gap-2"><iconify-icon className="text-slate-400 shrink-0 mt-0.5" icon="solar:pen-linear" width="16"></iconify-icon> Revisions tailored to project</li>
</ul>
</div>
</div>

<div className="mt-12 flex flex-col lg:flex-row gap-6">

<div className="lg:w-1/3 bg-blue-50/50 border border-blue-100 rounded-xl p-5">
<h4 className="text-sm font-semibold text-navy flex items-center gap-2 mb-3">
<iconify-icon className="text-blue-500" icon="solar:shield-check-linear" width="20"></iconify-icon>
                        Optional: Website Care Plan
                    </h4>
<p className="text-xs text-slate-600 mb-3">Keep your WordPress site running smoothly for just <span className="font-semibold text-navy">₹490/month</span>.</p>
<ul className="text-xs text-slate-600 space-y-1.5 ml-1 border-l-2 border-blue-200 pl-3">
<li>• Plugin &amp; security updates</li>
<li>• Regular backup checks</li>
<li>• 2 small text/photo edits per month</li>
</ul>
</div>

<div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-[11px] text-slate-500">
<div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
<span className="font-semibold text-slate-700 block mb-1">Additional Charges (If Required):</span>
                        Extra Page: ₹2,290 | Blog/Articles Setup: ₹4,990 | Extra Images/Slides: ₹490 each | Content Writing: ₹590–₹990/page | Paid plugins quoted separately. Revisions outside allowance: ₹750–₹1,500 each.
                    </div>
<div className="bg-orange-50/50 rounded-xl p-4 border border-orange-100/50">
<span className="font-semibold text-coral flex items-center gap-1 mb-1"><iconify-icon icon="solar:danger-triangle-linear" width="14"></iconify-icon> Important Notes:</span>
                        Limited Time Offer valid only if deposit is paid within 5 business days of quote. Free plugins only unless quoted. One revision = one combined list of changes submitted at a time.
                    </div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-navy mb-12 text-center">
                Why Growth Digital is Your Trusted WordPress Web Design Agency
            </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center">
<div className="w-14 h-14 mx-auto rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-navy mb-4 shadow-sm">
<iconify-icon icon="solar:cup-star-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-navy mb-2 tracking-tight">15+ Years Experience</h3>
<p className="text-xs text-slate-500 leading-relaxed px-2">WordPress specialists with a proven track record delivering results.</p>
</div>
<div className="text-center">
<div className="w-14 h-14 mx-auto rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-navy mb-4 shadow-sm">
<iconify-icon icon="solar:lightbulb-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-navy mb-2 tracking-tight">Premium Design Quality</h3>
<p className="text-xs text-slate-500 leading-relaxed px-2">From clean basic templates to fully custom unique designs.</p>
</div>
<div className="text-center">
<div className="w-14 h-14 mx-auto rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-navy mb-4 shadow-sm">
<iconify-icon icon="solar:headset-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-navy mb-2 tracking-tight">Dedicated Support</h3>
<p className="text-xs text-slate-500 leading-relaxed px-2">We're with you from the initial brief all the way to launch day.</p>
</div>
<div className="text-center">
<div className="w-14 h-14 mx-auto rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-navy mb-4 shadow-sm">
<iconify-icon icon="solar:tag-price-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-navy mb-2 tracking-tight">Affordable Pricing</h3>
<p className="text-xs text-slate-500 leading-relaxed px-2">The most competitive website design packages for SMBs in India.</p>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-navy mb-12 text-center">
                Trusted by Businesses Across India
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-600 italic mb-6 flex-1 leading-relaxed">
                        "Growth Digital delivered our WordPress website on time and within budget. Clean design, fast loading, and our enquiry rate has doubled since launch."
                    </p>
<div className="text-xs font-semibold text-navy">— Sanjay T., Professional Services</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-600 italic mb-6 flex-1 leading-relaxed">
                        "We needed an affordable website design for our small business and Growth Digital exceeded every expectation. The team was professional and responsive throughout."
                    </p>
<div className="text-xs font-semibold text-navy">— Meera D., Retail Business Owner</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-600 italic mb-6 flex-1 leading-relaxed">
                        "As a WordPress web design agency, Growth Digital really knows their craft. The site looks amazing on mobile and has already started bringing in leads from Google."
                    </p>
<div className="text-xs font-semibold text-navy">— Vikram P., Trades Business</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-white relative overflow-hidden" id="quote">

<div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-slate-50 blur-3xl opacity-50 z-0"></div>
<div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-orange-50 blur-3xl opacity-50 z-0"></div>
<div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10">
<div className="text-center mb-10">
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-navy mb-3">
                    Get Your Free WordPress Website Quote
                </h2>
<p className="text-sm sm:text-base text-slate-500">
                    Fill in your details and we'll respond within 1 business day.
                </p>
</div>
<form action="#" className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200" method="POST">
<div className="space-y-5">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="name">Full Name <span className="text-coral">*</span></label>
<input className="w-full bg-white border border-slate-300 rounded-md px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-shadow placeholder:text-slate-400 shadow-sm" id="name" name="name" placeholder="John Doe" required="" type="text"/>
</div>

<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="business">Business Name <span className="text-coral">*</span></label>
<input className="w-full bg-white border border-slate-300 rounded-md px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-shadow placeholder:text-slate-400 shadow-sm" id="business" name="business" placeholder="Your Company Ltd" required="" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="email">Email Address <span className="text-coral">*</span></label>
<input className="w-full bg-white border border-slate-300 rounded-md px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-shadow placeholder:text-slate-400 shadow-sm" id="email" name="email" placeholder="john@example.com" required="" type="email"/>
</div>

<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="phone">Phone Number <span className="text-coral">*</span></label>
<input className="w-full bg-white border border-slate-300 rounded-md px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-shadow placeholder:text-slate-400 shadow-sm" id="phone" name="phone" placeholder="+91 00000 00000" required="" type="tel"/>
</div>
</div>

<div className="relative">
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="package">Which Package Are You Interested In?</label>
<select className="w-full bg-white border border-slate-300 rounded-md px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-shadow shadow-sm cursor-pointer pr-10" id="package" name="package">
<option value="not_sure">Not Sure — Need Advice</option>
<option value="startup">Startup Package (₹8,990)</option>
<option selected="" value="growth">Growth Package (₹14,990) - Most Popular</option>
<option value="expand">Expand Package (₹22,990)</option>
<option value="custom">Custom Design (Quote Based)</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 pt-6 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>

<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="project">Tell us about your website project (Optional)</label>
<textarea className="w-full bg-white border border-slate-300 rounded-md px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-shadow placeholder:text-slate-400 shadow-sm resize-y" id="project" name="project" placeholder="Briefly describe what your business does and what you need from your new website..." rows="3"></textarea>
</div>

<div className="pt-2">
<button className="w-full bg-coral hover:bg-coralHover text-white text-base font-medium py-3.5 px-6 rounded-md transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-coral/50 focus:ring-offset-2" type="submit">
                            Request My Free Quote
                        </button>
</div>
</div>
<p className="text-[11px] text-slate-400 text-center mt-5 flex items-center justify-center gap-1.5">
<iconify-icon icon="solar:lock-password-linear" width="14"></iconify-icon>
                    100% confidential. We never share your information.
                </p>
</form>
</div>
</section>

<section className="py-16 lg:py-24 bg-slate-50 border-t border-slate-100">
<div className="max-w-3xl mx-auto px-4 sm:px-6">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-navy mb-8 text-center">
                WordPress Website FAQs
            </h2>
<div className="bg-white rounded-2xl shadow-sm border border-slate-200 divide-y divide-slate-100 px-6">
<details className="group" open="">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none py-5 text-sm sm:text-base text-slate-800 pr-2 transition-colors hover:text-navy">
<span>How long does it take to build a WordPress website?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-slate-400 flex-shrink-0 ml-4">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 pb-5 text-sm leading-relaxed pr-6">
                        Depending on your package, delivery ranges from 10–20 days (Startup) up to 30–40 days (Expand). Custom projects are scoped individually based on requirements.
                    </div>
</details>
<details className="group">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none py-5 text-sm sm:text-base text-slate-800 pr-2 transition-colors hover:text-navy">
<span>Will I have full access to my website?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-slate-400 flex-shrink-0 ml-4">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 pb-5 text-sm leading-relaxed pr-6">
                        Yes. All WordPress packages include full admin access so you can manage your site, edit content, and add posts independently after handover.
                    </div>
</details>
<details className="group">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none py-5 text-sm sm:text-base text-slate-800 pr-2 transition-colors hover:text-navy">
<span>Is the Limited Time Offer price guaranteed?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-slate-400 flex-shrink-0 ml-4">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 pb-5 text-sm leading-relaxed pr-6">
                        The discounted price is guaranteed only when your deposit (100% for Startup, 50% for others) is received within 5 business days of your quote being sent.
                    </div>
</details>
<details className="group">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none py-5 text-sm sm:text-base text-slate-800 pr-2 transition-colors hover:text-navy">
<span>What does hosting include?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-slate-400 flex-shrink-0 ml-4">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 pb-5 text-sm leading-relaxed pr-6">
                        Hosting Only covers your website server space (from ₹3,490/year). Hosting + Domain Managed includes your domain registration, renewals, and DNS management (from ₹3,990/year).
                    </div>
</details>
<details className="group">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none py-5 text-sm sm:text-base text-slate-800 pr-2 transition-colors hover:text-navy">
<span>Do you use paid WordPress plugins?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-slate-400 flex-shrink-0 ml-4">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 pb-5 text-sm leading-relaxed pr-6">
                        We build primarily with robust free plugins to keep your ongoing costs low. If a specific premium plugin is required for advanced functionality, it will be quoted separately.
                    </div>
</details>
<details className="group">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none py-5 text-sm sm:text-base text-slate-800 pr-2 transition-colors hover:text-navy">
<span>Can I add more pages after the site is built?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-slate-400 flex-shrink-0 ml-4">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 pb-5 text-sm leading-relaxed pr-6">
                        Yes — you can add pages yourself via the admin panel, or we can design and build additional pages for you at ₹2,290 per page.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
<div className="bg-navy rounded-[2rem] p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-xl">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-6">
                    Ready to Launch Your WordPress Website?
                </h2>
<p className="text-sm sm:text-base text-slate-300 mb-10 leading-relaxed">
                    Growth Digital is a trusted WordPress website design company helping businesses across India establish a powerful online presence — on time and on budget.
                </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-8">
<a className="w-full sm:w-auto inline-flex justify-center items-center bg-coral hover:bg-coralHover text-white text-base font-medium py-3.5 px-8 rounded-md transition-all shadow-md" href="#quote">
                        Get My Free Quote Now
                    </a>
<a className="w-full sm:w-auto inline-flex justify-center items-center bg-transparent border border-slate-500 hover:border-white hover:bg-white/10 text-white text-sm font-medium py-3.5 px-8 rounded-md transition-all" href="tel:+910000000000">
                        Or call us: +91 00000 00000
                    </a>
</div>
<p className="text-xs sm:text-sm text-slate-400 flex items-center justify-center gap-1.5 bg-black/20 inline-flex py-1.5 px-3 rounded-full">
<iconify-icon className="text-coral" icon="solar:alarm-linear" width="16"></iconify-icon>
<span className="text-white">Save up to ₹7,000</span> — offer expires in 5 business days from quote date.
                </p>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-8 text-center text-xs text-slate-400">
<div className="max-w-7xl mx-auto px-4">
<p>© 2023 Growth Digital. All rights reserved. <br className="sm:hidden"/> Professional WordPress Web Design Agency India.</p>
</div>
</footer>

    </>
  );
}
