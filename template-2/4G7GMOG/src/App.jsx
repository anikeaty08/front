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
      

<div className="spline-container">
<iframe frameborder="0" height="100%" src="https://my.spline.design/retrofuturismbganimation-Lb3VtL1bNaYUnirKNzn0FvaW/" width="100%"></iframe>
</div>

<nav className="container mx-auto px-6 py-6 content">
<div className="flex items-center justify-between">
<div className="flex items-center">
<svg className="h-8 w-8 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
<path className="" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
</svg>
<span className="ml-3 text-xl tracking-tight font-medium">Visionary</span>
</div>
<div className="hidden md:flex space-x-10 text-sm">
<a className="hover:text-indigo-300 transition-colors" href="#">Work</a>
<a className="hover:text-indigo-300 transition-colors" href="#">Services</a>
<a className="hover:text-indigo-300 transition-colors" href="#">About</a>
<a className="hover:text-indigo-300 transition-colors" href="#">Contact</a>
</div>
<div>
<button className="text-sm border border-indigo-500/30 rounded-md px-4 py-2 hover:bg-indigo-500/10 transition-all">
          Let's Talk
        </button>
</div>
</div>
</nav>
<div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent content"></div>
<div className="relative overflow-hidden">

<div className="container md:py-32 content mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">
<div className="mb-12">
<h1 className="md:text-7xl lg:text-8xl leading-tight text-5xl font-light tracking-tighter mb-6"><span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Design</span>that shapes the future</h1>
<p className="md:text-2xl max-w-2xl text-xl text-gray-300 tracking-wide font-extralight mr-auto mb-8 ml-auto">Candra kalahan</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

<a aria-label="View our work" className="flip-container" href="#work" tabindex="0">
<div className="flipper">
<div className="flip-face front">
<span>View our work</span>
</div>
<div className="flip-face back">
<svg className="h-6 w-6 mr-2 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>Explore now</span>
</div>
</div>
</a>

<button className="bg-transparent border border-indigo-500/30 rounded-md px-6 py-3 hover:bg-indigo-500/10 transition-all mt-4 sm:mt-0">
              Our process
            </button>
</div>
</div>
</div>
<div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent my-16"></div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
<div>
<p className="text-2xl font-light mb-1 tracking-tight">Brand Identity</p>
<p className="text-gray-400 font-extralight">Crafting unique visual languages</p>
</div>
<div>
<p className="text-2xl font-light mb-1 tracking-tight">UI/UX Design</p>
<p className="text-gray-400 font-extralight">Intuitive digital experiences</p>
</div>
<div>
<p className="text-2xl font-light mb-1 tracking-tight">Web Development</p>
<p className="text-gray-400 font-extralight">Cutting-edge technology</p>
</div>
<div>
<p className="text-2xl font-light mb-1 tracking-tight">Motion Design</p>
<p className="text-gray-400 font-extralight">Bringing ideas to life</p>
</div>
</div>
</div>
</div>

<div className="relative z-20 bg-[#101112] text-white py-24 px-4 sm:px-8 lg:px-0 font-sans">
<div className="max-w-6xl mx-auto w-full">

<div className="text-center mb-12">
<h2 className="text-4xl font-bold mb-3">Choose your perfect plan</h2>
<p className="text-gray-400 max-w-2xl mx-auto">Select the option that works best for you and your team. All plans include a 14-day free trial.</p>
</div>

<div className="flex justify-center items-center mb-10 space-x-3">
<span className="text-gray-300">Monthly</span>
<button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
<span className="translate-x-6 inline-block h-4 w-4 rounded-full bg-white transition"></span>
</button>
<span className="text-gray-300">Annual <span className="text-green-500 text-xs">Save 20%</span></span>
</div>

<div className="grid md:grid-cols-3 gap-6 mb-16">

<div className="bg-[#17181A] rounded-xl p-8 border border-[#26282C] hover:border-[#36383C] transition-all flex flex-col h-full">
<div className="mb-6">
<h3 className="text-xl font-semibold">Starter</h3>
<p className="mt-2 text-gray-400">Perfect for individuals and small projects</p>
</div>
<div className="mb-6">
<span className="text-4xl font-bold">$9</span>
<span className="text-gray-400">/month</span>
</div>
<ul className="space-y-3 mb-8 flex-grow">
<li className="flex items-start">
<svg className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd"></path>
</svg>
<span>5 projects</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd"></path>
</svg>
<span>2 team members</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd"></path>
</svg>
<span>5GB storage</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd"></path>
</svg>
<span>Basic analytics</span>
</li>
<li className="flex items-start text-gray-500">
<svg className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" fillRule="evenodd"></path>
</svg>
<span>Priority support</span>
</li>
</ul>
<button className="w-full py-3 border border-[#36383C] rounded-lg font-medium hover:bg-[#26282C] transition-colors">
            Get started
          </button>
</div>

<div className="bg-[#17181A] rounded-xl p-8 border border-blue-600 shadow-lg shadow-blue-900/20 relative flex flex-col h-full transform scale-105 z-10">
<div className="absolute -top-4 left-0 right-0 flex justify-center">
<span className="bg-blue-600 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">Most Popular</span>
</div>
<div className="mb-6">
<h3 className="text-xl font-semibold">Pro</h3>
<p className="mt-2 text-gray-400">Best for growing teams and businesses</p>
</div>
<div className="mb-6">
<span className="text-4xl font-bold">$29</span>
<span className="text-gray-400">/month</span>
</div>
<ul className="space-y-3 mb-8 flex-grow">
<li className="flex items-start">
<svg className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd"></path>
</svg>
<span>Unlimited projects</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd"></path>
</svg>
<span>10 team members</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd"></path>
</svg>
<span>50GB storage</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd"></path>
</svg>
<span>Advanced analytics</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd"></path>
</svg>
<span>Priority support</span>
</li>
</ul>
<button className="w-full py-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Get started
          </button>
</div>

<div className="bg-[#17181A] rounded-xl p-8 border border-[#26282C] hover:border-[#36383C] transition-all flex flex-col h-full">
<div className="mb-6">
<h3 className="text-xl font-semibold">Enterprise</h3>
<p className="mt-2 text-gray-400">Advanced features for large organizations</p>
</div>
<div className="mb-6">
<span className="text-4xl font-bold">$99</span>
<span className="text-gray-400">/month</span>
</div>
<ul className="space-y-3 mb-8 flex-grow">
<li className="flex items-start">
<svg className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd"></path>
</svg>
<span>Unlimited everything</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd"></path>
</svg>
<span>Dedicated account manager</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd"></path>
</svg>
<span>500GB storage</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd"></path>
</svg>
<span>Custom reporting</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd"></path>
</svg>
<span>24/7 premium support</span>
</li>
</ul>
<button className="w-full py-3 border border-[#36383C] rounded-lg font-medium hover:bg-[#26282C] transition-colors">
            Contact sales
          </button>
</div>
</div>

<div className="overflow-hidden rounded-xl border border-[#26282C]">
<div className="bg-[#17181A] p-6">
<h3 className="text-xl font-semibold">Compare all plan features</h3>
</div>
<table className="w-full">
<thead className="bg-[#1D1E20] text-left">
<tr>
<th className="py-4 px-6 text-gray-400 font-medium">Features</th>
<th className="py-4 px-6 text-gray-400 font-medium">Starter</th>
<th className="py-4 px-6 text-gray-400 font-medium">Pro</th>
<th className="py-4 px-6 text-gray-400 font-medium">Enterprise</th>
</tr>
</thead>
<tbody className="divide-y divide-[#26282C]">
<tr className="bg-[#17181A]">
<td className="py-4 px-6 border-r border-[#26282C]">Projects</td>
<td className="py-4 px-6 border-r border-[#26282C]">5</td>
<td className="py-4 px-6 border-r border-[#26282C]">Unlimited</td>
<td className="py-4 px-6">Unlimited</td>
</tr>
<tr className="bg-[#17181A]">
<td className="py-4 px-6 border-r border-[#26282C]">Team members</td>
<td className="py-4 px-6 border-r border-[#26282C]">2</td>
<td className="py-4 px-6 border-r border-[#26282C]">10</td>
<td className="py-4 px-6">Unlimited</td>
</tr>
<tr className="bg-[#17181A]">
<td className="py-4 px-6 border-r border-[#26282C]">Storage</td>
<td className="py-4 px-6 border-r border-[#26282C]">5GB</td>
<td className="py-4 px-6 border-r border-[#26282C]">50GB</td>
<td className="py-4 px-6">500GB</td>
</tr>
<tr className="bg-[#17181A]">
<td className="py-4 px-6 border-r border-[#26282C]">Support</td>
<td className="py-4 px-6 border-r border-[#26282C]">Email</td>
<td className="py-4 px-6 border-r border-[#26282C]">Priority</td>
<td className="py-4 px-6">24/7 Premium</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

    </>
  );
}
