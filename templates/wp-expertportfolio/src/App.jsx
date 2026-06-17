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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white">
<span className="font-medium text-sm">WP</span>
</div>
<span className="font-medium text-lg tracking-tight text-gray-900">DevStudio</span>
</div>

<div className="hidden md:flex space-x-8">
<a className="text-sm font-normal text-gray-500 hover:text-gray-900 transition-colors" href="#services">Services</a>
<a className="hover:text-gray-900 transition-colors text-sm font-normal text-gray-500" href="#testimonials">Reviews</a>
<a className="hover:text-gray-900 transition-colors text-sm font-normal text-gray-500" href="#about">About</a>
</div>

<div className="flex items-center gap-4">
</div>
</div>
</div>
</nav>

<section className="md:pt-40 md:pb-28 pt-32 pb-20">
<div className="text-center max-w-4xl mr-auto ml-auto pr-4 pl-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-600 mb-8 animate-fade-in-up">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                Available for new projects
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-gray-900 mb-6 leading-[1.1]">
                High-converting websites for <span className="text-gray-400">local businesses.</span>
</h1>
<p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                I build fast, SEO-friendly WordPress websites specifically designed to help gyms, shops, and startups get more customers.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="sm:w-auto hover:bg-gray-800 transition-all transform hover:-translate-y-0.5 shadow-gray-200 text-sm font-medium text-white bg-gray-900 w-full rounded-lg pt-3.5 pr-8 pb-3.5 pl-8 shadow-lg" href="#contact">Demo Website</a>
</div>

<div className="border-gray-100 border-t mt-16 pt-8">
<p className="text-xs text-gray-400 mb-6 font-medium uppercase tracking-widest">Trusted by small businesses</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-lg font-semibold text-gray-400 flex items-center gap-1"><iconify-icon icon="solar:dumbbells-linear"></iconify-icon> IRON GYM</span>
<span className="text-lg font-semibold text-gray-400 flex items-center gap-1"><iconify-icon className="" icon="solar:cup-hot-linear"></iconify-icon> BREW CAFE</span>
<span className="text-lg font-semibold text-gray-400 flex items-center gap-1"><iconify-icon icon="solar:buildings-2-linear"></iconify-icon> URB REALTY</span>
<span className="text-lg font-semibold text-gray-400 flex items-center gap-1"><iconify-icon icon="solar:shop-2-linear"></iconify-icon> LOCAL MARKET</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50/50 border-t border-b border-gray-100" id="services">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-4">Services tailored for growth</h2>
<p className="text-gray-500 max-w-xl text-lg font-light">Everything you need to launch a professional online presence without the technical headache.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:monitor-smartphone-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-3">WordPress Development</h3>
<p className="text-sm text-gray-500 leading-relaxed">Custom, easy-to-manage websites built on the world's most popular platform.</p>
</div>

<div className="group p-8 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300">
<div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:cart-large-2-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-3">Local Business Sites</h3>
<p className="text-sm text-gray-500 leading-relaxed">Perfect for Gyms, Cafes, and Shops. Includes maps, hours, and click-to-call.</p>
</div>

<div className="group p-8 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300">
<div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:rocket-2-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-3">Landing Pages</h3>
<p className="text-sm text-gray-500 leading-relaxed">High-conversion single pages designed specifically for ad campaigns.</p>
</div>

<div className="group p-8 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300">
<div className="w-12 h-12 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:graph-up-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-3">SEO Setup</h3>
<p className="text-sm text-gray-500 leading-relaxed">Basic on-page SEO to ensure your customers can actually find you on Google.</p>
</div>

<div className="group p-8 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300">
<div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:refresh-circle-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-3">Website Redesign</h3>
<p className="text-sm text-gray-500 leading-relaxed">Modernize your old, slow website with a fresh, mobile-responsive look.</p>
</div>

<div className="p-8 bg-gray-900 rounded-xl flex flex-col justify-center items-center text-center shadow-lg">
<h3 className="text-lg font-medium text-white mb-2">Need something else?</h3>
<p className="text-sm text-gray-400 mb-6">Let's discuss your specific needs.</p>
<a className="inline-flex items-center gap-2 text-white border border-white/20 px-4 py-2 rounded-lg text-sm hover:bg-white/10 transition-colors" href="#contact">
                        Contact Me <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="bg-white pt-20 pb-20" id="about">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row gap-16 items-center">
<div className="md:w-1/2">
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-6">Why work with me?</h2>
<p className="text-gray-500 mb-8 font-light leading-relaxed">
                        I don't just write code; I understand business. Your website is an investment, and my job is to ensure it pays off. I prioritize speed, security, and ease of use.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1">
<iconify-icon className="text-gray-900" icon="solar:bolt-circle-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="font-medium text-gray-900">Blazing Fast Speed</h4>
<p className="text-sm text-gray-500 mt-1">Google loves fast sites, and so do your customers. I optimize every line of code.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1">
<iconify-icon className="text-gray-900" icon="solar:devices-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="font-medium text-gray-900">Mobile First Design</h4>
<p className="text-sm text-gray-500 mt-1">Over 70% of local searches happen on mobile. Your site will look perfect on any device.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1">
<iconify-icon className="text-gray-900" icon="solar:user-hand-up-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="font-medium text-gray-900">Easy to Manage</h4>
<p className="text-sm text-gray-500 mt-1">I build with WordPress so you can easily update text and images yourself.</p>
</div>
</div>
</div>
</div>
<div className="md:w-1/2 w-full">

<div className="relative bg-gray-50 rounded-2xl p-8 border border-gray-100 aspect-square flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>

<div className="relative w-64 bg-white rounded-lg shadow-xl border border-gray-100 p-4 transform rotate-[-3deg] z-10">
<div className="h-4 w-12 bg-gray-100 rounded mb-4"></div>
<div className="h-2 w-full bg-gray-50 rounded mb-2"></div>
<div className="h-2 w-3/4 bg-gray-50 rounded mb-2"></div>
<div className="flex gap-2 mt-4">
<div className="h-20 w-1/2 bg-blue-50 rounded"></div>
<div className="h-20 w-1/2 bg-gray-50 rounded"></div>
</div>
</div>
<div className="absolute w-64 bg-white rounded-lg shadow-lg border border-gray-100 p-4 transform translate-x-8 translate-y-8 rotate-[2deg] opacity-80 z-0">
<div className="flex justify-between items-center mb-4">
<div className="h-4 w-12 bg-gray-100 rounded"></div>
<div className="h-6 w-16 bg-green-100 rounded text-xs text-green-600 flex items-center justify-center">Active</div>
</div>
<div className="h-2 w-full bg-gray-50 rounded mb-2"></div>
<div className="h-2 w-full bg-gray-50 rounded mb-2"></div>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="py-20 bg-gray-50/50 border-t border-b border-gray-100" id="testimonials">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-12 text-center">What clients say</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
<div className="flex text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-gray-600 mb-6 text-sm leading-relaxed">"The website is fantastic. We've seen a 40% increase in gym sign-ups since launch. Very professional and easy to work with."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-medium text-gray-600 text-xs">JS</div>
<div>
<p className="text-sm font-medium text-gray-900">John Smith</p>
<p className="text-xs text-gray-400">Owner, PowerFit Gym</p>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
<div className="flex text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-gray-600 mb-6 text-sm leading-relaxed">"Super fast delivery. He understood exactly what our startup needed. The SEO setup was a huge bonus for us."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-medium text-gray-600 text-xs">SL</div>
<div>
<p className="text-sm font-medium text-gray-900">Sarah Lee</p>
<p className="text-xs text-gray-400">Founder, EcoStyle</p>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
<div className="flex text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-gray-600 mb-6 text-sm leading-relaxed">"Redesigned our old slow site into something modern and quick. Communication was excellent throughout the process."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-medium text-gray-600 text-xs">MR</div>
<div>
<p className="text-sm font-medium text-gray-900">Mike Ross</p>
<p className="text-xs text-gray-400">Manager, Local Cafe</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-20 pb-20" id="contact">
<div className="sm:px-6 lg:px-8 max-w-4xl mr-auto ml-auto pr-4 pl-4">
<div className="bg-gray-900 rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden relative">

<div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-gray-800 opacity-50 blur-3xl"></div>
<div className="-ml-16 -mb-16 bg-gray-800 opacity-50 w-64 h-64 rounded-full absolute bottom-0 left-0 blur-3xl"></div>
<div className="relative z-10 grid md:grid-cols-2 gap-12">
<div className="">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Start Your Project</h2>
<p className="text-gray-400 mb-8 font-light leading-relaxed">
                            Ready to grow your business? Fill out the form or message me on WhatsApp. I usually reply within 2 hours.
                        </p>
<div className="space-y-4">
<a className="flex items-center gap-3 hover:text-white transition-colors text-white/80" href="/wpexpert85@gmail.com">wpexpert85@gmail.com</a>
</div>
<div className="mt-8 pt-8 border-t border-gray-800">
</div>
</div>
<form className="space-y-4">
<div className="">
<label className="block text-xs font-medium text-gray-400 mb-1">Name</label>
<input className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white/50 focus:border-white/50 transition-all text-sm" placeholder="John Doe" type="text"/>
</div>
<div className="">
<label className="block text-xs font-medium text-gray-400 mb-1">Email</label>
<input className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white/50 focus:border-white/50 transition-all text-sm" placeholder="john@company.com" type="email"/>
</div>
<div className="">
<label className="block text-xs font-medium text-gray-400 mb-1">Project Type</label>
<div className="relative">
<select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-white/50 focus:border-white/50 transition-all text-sm appearance-none">
<option>Business Website</option>
<option>eCommerce Store</option>
<option>Landing Page</option>
<option>Website Redesign</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="">
<label className="block text-xs font-medium text-gray-400 mb-1">Message</label>
<textarea className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white/50 focus:border-white/50 transition-all text-sm" placeholder="Tell me about your business..." rows="3"></textarea>
</div>
<button className="hover:bg-gray-100 transition-all text-sm font-medium text-gray-900 bg-white w-full rounded-lg mt-2 pt-3 pb-3" type="submit">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 pt-16 pb-8">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gray-900 rounded flex items-center justify-center text-white">
<span className="font-medium text-xs">WP</span>
</div>
<span className="font-medium text-sm text-gray-900">DevStudio</span>
</div>
<div className="flex gap-6">
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="mt-8 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
<p>© 2023 WP DevStudio. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-gray-600" href="#">Privacy Policy</a>
<a className="hover:text-gray-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
