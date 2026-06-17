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
      
<header className="border-b border-gray-100">
<div className="container mx-auto px-6 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center">
<a className="text-2xl font-bold text-indigo-600" href="#">angle</a>
<nav className="hidden ml-10 md:flex space-x-8">
<a className="text-sm font-medium text-gray-700 hover:text-indigo-600" href="#">Features</a>
<a className="text-sm font-medium text-gray-700 hover:text-indigo-600" href="#">Components</a>
<a className="text-sm font-medium text-indigo-600 border-b-2 border-indigo-600" href="#">Pricing</a>
<a className="text-sm font-medium text-gray-700 hover:text-indigo-600" href="#">Documentation</a>
</nav>
</div>
<div className="flex items-center space-x-4">
<a className="hidden md:inline-block text-sm font-medium text-gray-700 hover:text-indigo-600" href="#">Sign in</a>
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700" href="#">Get started</a>
</div>
</div>
</div>
</header>
<section className="bg-gray-50 py-20">
<div className="container mx-auto px-6">
<div className="text-center max-w-3xl mx-auto">
<h1 className="text-4xl font-bold mb-6">Simple, transparent pricing</h1>
<p className="text-xl text-gray-600 mb-10">Choose the perfect plan for your project needs with no hidden fees.</p>
<div className="flex justify-center mb-8">
<div className="inline-flex p-1 bg-gray-100 rounded-lg">
<button className="px-4 py-2 text-sm font-medium bg-white rounded-md shadow-sm">Monthly</button>
<button className="px-4 py-2 text-sm font-medium text-gray-700">Annual (Save 20%)</button>
</div>
</div>
</div>
</div>
</section>
<section className="py-16 -mt-10">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition p-8">
<h3 className="text-xl font-semibold mb-2">Starter</h3>
<p className="text-gray-600 mb-6">Perfect for small projects and individual developers</p>
<div className="mb-6">
<span className="text-4xl font-bold">$29</span>
<span className="text-gray-600">/month</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start">
<i className="fas fa-check text-green-500 mt-1 mr-3"></i>
<span>50+ UI components</span>
</li>
<li className="flex items-start">
<i className="fas fa-check text-green-500 mt-1 mr-3"></i>
<span>Basic templates</span>
</li>
<li className="flex items-start">
<i className="fas fa-check text-green-500 mt-1 mr-3"></i>
<span>Community support</span>
</li>
<li className="flex items-start text-gray-400">
<i className="fas fa-times mt-1 mr-3"></i>
<span>Advanced components</span>
</li>
<li className="flex items-start text-gray-400">
<i className="fas fa-times mt-1 mr-3"></i>
<span>Priority support</span>
</li>
</ul>
<a className="block w-full py-3 px-4 text-center font-medium border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50" href="#">Get started</a>
</div>

<div className="bg-white rounded-lg border-2 border-indigo-600 shadow-md p-8 relative">
<div className="absolute top-0 right-6 transform -translate-y-1/2 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</div>
<h3 className="text-xl font-semibold mb-2">Pro</h3>
<p className="text-gray-600 mb-6">Ideal for teams and professional projects</p>
<div className="mb-6">
<span className="text-4xl font-bold">$79</span>
<span className="text-gray-600">/month</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start">
<i className="fas fa-check text-green-500 mt-1 mr-3"></i>
<span>150+ UI components</span>
</li>
<li className="flex items-start">
<i className="fas fa-check text-green-500 mt-1 mr-3"></i>
<span>Premium templates</span>
</li>
<li className="flex items-start">
<i className="fas fa-check text-green-500 mt-1 mr-3"></i>
<span>Advanced components</span>
</li>
<li className="flex items-start">
<i className="fas fa-check text-green-500 mt-1 mr-3"></i>
<span>Email support</span>
</li>
<li className="flex items-start text-gray-400">
<i className="fas fa-times mt-1 mr-3"></i>
<span>Source files</span>
</li>
</ul>
<a className="block w-full py-3 px-4 text-center font-medium bg-indigo-600 text-white rounded-md hover:bg-indigo-700" href="#">Get started</a>
</div>

<div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition p-8">
<h3 className="text-xl font-semibold mb-2">Enterprise</h3>
<p className="text-gray-600 mb-6">For large teams and organizations</p>
<div className="mb-6">
<span className="text-4xl font-bold">$199</span>
<span className="text-gray-600">/month</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start">
<i className="fas fa-check text-green-500 mt-1 mr-3"></i>
<span>200+ UI components</span>
</li>
<li className="flex items-start">
<i className="fas fa-check text-green-500 mt-1 mr-3"></i>
<span>All templates</span>
</li>
<li className="flex items-start">
<i className="fas fa-check text-green-500 mt-1 mr-3"></i>
<span>Source files included</span>
</li>
<li className="flex items-start">
<i className="fas fa-check text-green-500 mt-1 mr-3"></i>
<span>Priority support</span>
</li>
<li className="flex items-start">
<i className="fas fa-check text-green-500 mt-1 mr-3"></i>
<span>Custom branding</span>
</li>
</ul>
<a className="block w-full py-3 px-4 text-center font-medium border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50" href="#">Contact sales</a>
</div>
</div>
</div>
</section>
<section className="py-16 bg-gray-50">
<div className="container mx-auto px-6">
<h2 className="text-3xl font-bold text-center mb-12">Frequently asked questions</h2>
<div className="max-w-3xl mx-auto space-y-6">
<div className="bg-white rounded-lg p-6 shadow-sm">
<h3 className="font-semibold text-lg mb-2">What's included in the license?</h3>
<p className="text-gray-600">Each license includes access to all UI components, templates, and updates for the duration of your subscription. You can use the components in unlimited projects.</p>
</div>
<div className="bg-white rounded-lg p-6 shadow-sm">
<h3 className="font-semibold text-lg mb-2">Can I use Angle for client projects?</h3>
<p className="text-gray-600">Yes, you can use Angle components in projects you build for clients. Each license allows usage within a single project.</p>
</div>
<div className="bg-white rounded-lg p-6 shadow-sm">
<h3 className="font-semibold text-lg mb-2">Do you offer refunds?</h3>
<p className="text-gray-600">We offer a 14-day money-back guarantee. If you're not satisfied with Angle, contact our support team within 14 days of purchase for a full refund.</p>
</div>
<div className="bg-white rounded-lg p-6 shadow-sm">
<h3 className="font-semibold text-lg mb-2">How do updates work?</h3>
<p className="text-gray-600">All plans include updates for the duration of your subscription. We regularly release new components, templates, and improvements.</p>
</div>
</div>
</div>
</section>
<section className="py-20">
<div className="container mx-auto px-6">
<div className="bg-indigo-600 rounded-2xl p-12 text-center">
<h2 className="text-3xl font-bold text-white mb-6">Need a custom solution?</h2>
<p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">We offer custom development services to help you build exactly what you need.</p>
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-indigo-600 bg-white rounded-md shadow-sm hover:bg-gray-50" href="#">
          Contact our team
        </a>
</div>
</div>
</section>
<footer className="bg-gray-900 text-white py-12">
<div className="container mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<h3 className="text-lg font-semibold mb-4">Product</h3>
<ul className="space-y-2">
<li><a className="text-gray-400 hover:text-white" href="#">Features</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">Pricing</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h3 className="text-lg font-semibold mb-4">Resources</h3>
<ul className="space-y-2">
<li><a className="text-gray-400 hover:text-white" href="#">Documentation</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">Tutorials</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">Support</a></li>
</ul>
</div>
<div>
<h3 className="text-lg font-semibold mb-4">Company</h3>
<ul className="space-y-2">
<li><a className="text-gray-400 hover:text-white" href="#">About</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">Contact</a></li>
</ul>
</div>
<div>
<h3 className="text-lg font-semibold mb-4">Legal</h3>
<ul className="space-y-2">
<li><a className="text-gray-400 hover:text-white" href="#">Privacy</a></li>
<li><a className="text-gray-400 hover:text-white" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 mt-12 pt-8 flex justify-between items-center">
<p className="text-gray-400">© 2023 Angle. All rights reserved.</p>
<div className="flex space-x-6">
<a className="text-gray-400 hover:text-white" href="#"><i className="fab fa-twitter"></i></a>
<a className="text-gray-400 hover:text-white" href="#"><i className="fab fa-github"></i></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
