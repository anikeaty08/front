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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:layers" data-strokeWidth="1.5" data-width="18"></span>
</div>
<span className="text-gray-900 font-semibold tracking-tight text-lg group-hover:opacity-80 transition-opacity">Aura.</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#products">Products</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#features">Why Aura</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#faq">FAQ</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-all shadow-sm hover:shadow-md" href="#products">
                    Get Access
                </a>
<button className="md:hidden text-gray-900">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="24"></span>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern -z-10"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-50/50 to-transparent blur-3xl -z-10 rounded-full opacity-60"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 mb-8 animate-fade-in-up">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-gray-600 uppercase tracking-wide">v2.0 Now Available</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-gray-900 tracking-tighter mb-6 leading-[1.1]">
                Master your craft with <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">premium resources.</span>
</h1>
<p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Curated digital assets, comprehensive courses, and high-fidelity templates designed to accelerate your workflow and increase your revenue.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-gray-900 text-white rounded-xl font-medium hover:bg-black transition-all hover:scale-[1.02] shadow-lg shadow-gray-200 flex items-center justify-center gap-2" href="#products">
                    Browse Products
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-gray-700 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-all hover:border-gray-300 flex items-center justify-center" href="#features">
                    Learn More
                </a>
</div>

<div className="mt-20 pt-10 border-t border-gray-100">
<p className="text-sm text-gray-400 mb-6 font-medium">TRUSTED BY CREATORS AT</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold tracking-tight text-gray-800 flex items-center gap-2"><span className="text-black" data-icon="lucide:triangle" data-width="20"></span> Vercel</span>
<span className="text-xl font-bold tracking-tight text-gray-800 flex items-center gap-2"><span className="text-black" data-icon="lucide:box" data-width="20"></span> Linear</span>
<span className="text-xl font-bold tracking-tight text-gray-800 flex items-center gap-2"><span className="text-black" data-icon="lucide:hexagon" data-width="20"></span> Stripe</span>
<span className="text-xl font-bold tracking-tight text-gray-800 flex items-center gap-2"><span className="text-black" data-icon="lucide:command" data-width="20"></span> Raycast</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12">

<div className="group">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
<span className="iconify text-gray-900 group-hover:text-blue-600 transition-colors" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">Instant Implementation</h3>
<p className="text-gray-500 leading-relaxed text-sm md:text-base">
                        Stop reinventing the wheel. Our assets are plug-and-play, saving you hundreds of hours of development and design time.
                    </p>
</div>

<div className="group">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-50 transition-colors">
<span className="iconify text-gray-900 group-hover:text-purple-600 transition-colors" data-icon="lucide:diamond" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">Enterprise Quality</h3>
<p className="text-gray-500 leading-relaxed text-sm md:text-base">
                        Built by industry veterans. Every pixel, line of code, and chapter is crafted to the standards of top-tier tech companies.
                    </p>
</div>

<div className="group">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-50 transition-colors">
<span className="iconify text-gray-900 group-hover:text-green-600 transition-colors" data-icon="lucide:trending-up" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">Revenue Focused</h3>
<p className="text-gray-500 leading-relaxed text-sm md:text-base">
                        Our products aren't just pretty. They are engineered to convert, engage, and retain your customers more effectively.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-200" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:flex justify-between items-end">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-4">Curated Digital Assets</h2>
<p className="text-gray-500 text-lg">Everything you need to scale your next project.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors" href="#">
                    View all products <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl p-2 border border-gray-200 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
<div className="bg-gray-100 rounded-xl h-48 w-full flex items-center justify-center relative overflow-hidden">
<span className="absolute top-3 right-3 bg-white/90 backdrop-blur text-xs font-semibold px-2 py-1 rounded-md text-gray-900 border border-gray-100 shadow-sm">Updated</span>
<div className="text-gray-300 group-hover:scale-110 transition-transform duration-500">
<span className="iconify" data-icon="lucide:layout-template" data-strokeWidth="1" data-width="64"></span>
</div>
</div>
<div className="p-4 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-gray-900 tracking-tight">SaaS UI Kit Pro</h3>
<span className="text-gray-900 font-medium">$49</span>
</div>
<p className="text-sm text-gray-500 mb-6 flex-1">A comprehensive Figma &amp; React library for building modern dashboards.</p>
<button className="w-full py-2.5 rounded-lg bg-white border border-gray-200 text-gray-900 font-medium text-sm hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all">
                            Buy Now
                        </button>
</div>
</div>

<div className="bg-white rounded-2xl p-2 border border-gray-200 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full relative ring-1 ring-gray-900/5">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full z-10">Most Popular</div>
<div className="bg-gradient-to-br from-gray-800 to-black rounded-xl h-48 w-full flex items-center justify-center relative overflow-hidden">
<div className="text-white/20 group-hover:scale-110 transition-transform duration-500">
<span className="iconify" data-icon="lucide:book-open" data-strokeWidth="1" data-width="64"></span>
</div>
</div>
<div className="p-4 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-gray-900 tracking-tight">The Founder's Playbook</h3>
<span className="text-gray-900 font-medium">$99</span>
</div>
<p className="text-sm text-gray-500 mb-6 flex-1">The definitive guide to bootstrapping from 0 to $10k MRR without funding.</p>
<button className="w-full py-2.5 rounded-lg bg-gray-900 text-white font-medium text-sm hover:bg-gray-800 transition-all shadow-md shadow-gray-200">
                            Get Instant Access
                        </button>
</div>
</div>

<div className="bg-white rounded-2xl p-2 border border-gray-200 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
<div className="bg-gray-100 rounded-xl h-48 w-full flex items-center justify-center relative overflow-hidden">
<div className="text-gray-300 group-hover:scale-110 transition-transform duration-500">
<span className="iconify" data-icon="lucide:workflow" data-strokeWidth="1" data-width="64"></span>
</div>
</div>
<div className="p-4 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-gray-900 tracking-tight">Notion OS System</h3>
<span className="text-gray-900 font-medium">$29</span>
</div>
<p className="text-sm text-gray-500 mb-6 flex-1">Organize your entire life and business with this advanced Notion template.</p>
<button className="w-full py-2.5 rounded-lg bg-white border border-gray-200 text-gray-900 font-medium text-sm hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all">
                            Buy Now
                        </button>
</div>
</div>
</div>
<div className="mt-8 text-center md:hidden">
<a className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors" href="#">
                    View all products <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-200" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight text-center mb-16">Loved by 10,000+ Creators</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
<div className="flex gap-1 text-yellow-500 mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<p className="text-gray-700 mb-6 leading-relaxed">"The ROI on the SaaS UI Kit is insane. I shipped my MVP in a weekend instead of a month. The design quality is top tier."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold text-gray-600">JD</div>
<div>
<p className="text-sm font-semibold text-gray-900">James Doe</p>
<p className="text-xs text-gray-500">Full Stack Developer</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
<div className="flex gap-1 text-yellow-500 mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<p className="text-gray-700 mb-6 leading-relaxed">"I've bought dozens of courses, but the Founder's Playbook is the only one that gave me actionable steps without the fluff."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold text-gray-600">SM</div>
<div>
<p className="text-sm font-semibold text-gray-900">Sarah Miller</p>
<p className="text-xs text-gray-500">Agency Owner</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
<div className="flex gap-1 text-yellow-500 mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<p className="text-gray-700 mb-6 leading-relaxed">"Clean code, well organized, and the design aesthetic is exactly what I was looking for. Aura sets the bar high."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold text-gray-600">MK</div>
<div>
<p className="text-sm font-semibold text-gray-900">Marcus King</p>
<p className="text-xs text-gray-500">Product Designer</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-200" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-gray-900 tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group border border-gray-200 rounded-xl bg-white open:ring-2 open:ring-gray-100 open:border-transparent transition-all">
<summary className="flex items-center justify-between p-6 cursor-pointer text-gray-900 font-medium select-none">
                        Do I get lifetime access?
                        <span className="iconify group-open:rotate-180 transition-transform duration-300 text-gray-400" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="px-6 pb-6 text-gray-500 leading-relaxed text-sm">
                        Yes! Once you purchase any product, you get unlimited lifetime access to the files and any future updates we release for that specific version.
                    </div>
</details>

<details className="group border border-gray-200 rounded-xl bg-white open:ring-2 open:ring-gray-100 open:border-transparent transition-all">
<summary className="flex items-center justify-between p-6 cursor-pointer text-gray-900 font-medium select-none">
                        Can I use this for client projects?
                        <span className="iconify group-open:rotate-180 transition-transform duration-300 text-gray-400" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="px-6 pb-6 text-gray-500 leading-relaxed text-sm">
                        Absolutely. You can use our assets for unlimited personal and commercial projects. The only restriction is that you cannot re-sell or redistribute the raw files themselves.
                    </div>
</details>

<details className="group border border-gray-200 rounded-xl bg-white open:ring-2 open:ring-gray-100 open:border-transparent transition-all">
<summary className="flex items-center justify-between p-6 cursor-pointer text-gray-900 font-medium select-none">
                        Is there a refund policy?
                        <span className="iconify group-open:rotate-180 transition-transform duration-300 text-gray-400" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="px-6 pb-6 text-gray-500 leading-relaxed text-sm">
                        Due to the digital nature of the products, we generally do not offer refunds. However, if you are truly unsatisfied or find a technical defect, please contact support and we will make it right.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-200">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight mb-6">Ready to upgrade your workflow?</h2>
<p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">Join thousands of designers and developers building better products, faster.</p>
<a className="inline-flex items-center justify-center px-10 py-4 bg-gray-900 text-white rounded-xl font-medium text-lg hover:bg-black transition-all hover:-translate-y-1 shadow-xl shadow-gray-300" href="#products">
                Get Started Now
            </a>
<p className="mt-6 text-sm text-gray-400">Secure payment via Stripe • Instant Access</p>
</div>
</section>

<footer className="bg-gray-950 text-white pt-20 pb-10 border-t border-gray-900">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-gray-950">
<span className="iconify" data-icon="lucide:layers" data-strokeWidth="1.5" data-width="18"></span>
</div>
<span className="font-semibold tracking-tight text-lg">Aura.</span>
</a>
<p className="text-gray-500 text-sm leading-relaxed">
                        Premium digital resources for the modern creator economy. Built with precision and care.
                    </p>
</div>
<div>
<h4 className="font-medium text-white mb-6">Products</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">UI Kits</a></li>
<li><a className="hover:text-white transition-colors" href="#">Templates</a></li>
<li><a className="hover:text-white transition-colors" href="#">Courses</a></li>
<li><a className="hover:text-white transition-colors" href="#">Icons</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-white mb-6">Company</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-white mb-6">Legal</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">License</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-gray-600 text-sm">© 2024 Aura Digital. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-gray-600 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="20"></span>
</a>
<a className="text-gray-600 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:github" data-width="20"></span>
</a>
<a className="text-gray-600 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="20"></span>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
