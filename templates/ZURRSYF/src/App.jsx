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
      

<header className="w-full border-b border-neutral-800 bg-neutral-900">
<div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-6">
<div className="flex items-center space-x-2">
<span className="text-2xl font-bold text-neutral-200 tracking-wide">Lyumio</span>
</div>
<nav className="hidden md:flex items-center space-x-8">
<a className="text-neutral-300 hover:text-neutral-100 font-medium transition" href="#features">Features</a>
<a className="hover:text-neutral-100 transition font-medium text-neutral-300" href="#solutions">Blog</a>
<a className="text-neutral-300 hover:text-neutral-100 font-medium transition" href="#pricing">Pricing</a>
<a className="text-neutral-300 hover:text-neutral-100 font-medium transition" href="#contact">Contact</a>
</nav>
<div className="hidden md:block">
<a className="hover:bg-emerald-700 transition font-semibold text-neutral-100 bg-violet-600 rounded-lg pt-2 pr-5 pb-2 pl-5 shadow" href="#demo">Book a Demo</a>
</div>
<button className="md:hidden text-neutral-400 focus:outline-none">
<span className="material-icons text-3xl">menu</span>
</button>
</div>
</header>

<section className="max-w-7xl flex flex-col md:flex-row items-center justify-between md:space-x-10 mr-auto ml-auto pt-20 pr-6 pb-20 pl-6">
<div className="flex-1 md:mb-0 mb-12">
<h1 className="text-4xl md:text-5xl font-bold mb-5 text-neutral-100 leading-tight">
        AI Chatbots that <span className="text-violet-600">Accelerate</span> Your Business
      </h1>
<p className="text-lg text-neutral-300 mb-8">
        Automate support, increase sales, and engage customers 24/7 with powerful, customizable chatbots built for modern enterprises.
      </p>
<form className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
</form>
</div>
<div className="flex-1 flex items-center justify-center">
<div className="relative w-full max-w-md">
<div className="absolute -inset-2 bg-emerald-900/20 rounded-2xl blur-2xl"></div>
<div className="relative bg-neutral-900 rounded-2xl border border-neutral-800 shadow-lg overflow-hidden">
<div className="p-6 flex flex-col space-y-3">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 flex items-center justify-center text-white bg-violet-600 rounded-full">
</div>
<span className="text-base font-semibold text-neutral-200">Lyumio AI</span>
</div>
<div className="text-sm text-neutral-200 bg-neutral-800/70 rounded-lg pt-4 pr-4 pb-4 pl-4">How much money will I save?</div>
<div className="flex space-x-2">
<div className="flex-1 text-sm text-neutral-300 bg-neutral-800/50 rounded-lg pt-4 pr-4 pb-4 pl-4">Can you integrate with Instagram?</div>
</div>
<div className="text-sm text-neutral-200 bg-neutral-800/70 rounded-lg pt-4 pr-4 pb-4 pl-4">Won't it start a tech revolution again?</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-neutral-800" id="features">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-bold text-neutral-100 text-center mb-6">Why Choose Lyumio?</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 shadow flex flex-col items-center text-center">
<span className="material-icons text-3xl text-violet-600 mb-3">bolt</span>
<h3 className="font-semibold text-neutral-200 text-lg mb-2">Instant AI Responses</h3>
<p className="text-neutral-400 text-base">Deliver fast, accurate answers to your customers around the clock, without manual intervention.</p>
</div>
<div className="flex flex-col items-center text-center bg-neutral-900 border-neutral-800 border rounded-xl pt-8 pr-8 pb-8 pl-8 shadow">
<span className="material-icons text-3xl text-purple-600 mb-3">integration_instructions</span>
<h3 className="font-semibold text-neutral-200 text-lg mb-2">Seamless Integrations</h3>
<p className="text-neutral-400 text-base">Connect with CRMs, websites, social platforms, and enterprise apps using robust APIs and plugins.</p>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 shadow flex flex-col items-center text-center">
<span className="material-icons text-3xl text-violet-600 mb-3">security</span>
<h3 className="font-semibold text-neutral-200 text-lg mb-2">Enterprise-Grade Security</h3>
<p className="text-neutral-400 text-base">Your data is protected with advanced encryption, role-based access, and strict compliance standards.</p>
</div>
</div>
</div>
</section>

<section className="bg-neutral-900 border-neutral-800 border-t pt-24 pb-24" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-bold text-neutral-100 mb-6 text-center">Solutions for Every Team</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="border border-neutral-800 rounded-lg bg-neutral-950 p-6">
<div className="flex items-center space-x-2 mb-3">
<span className="material-icons text-lg text-purple-600">support_agent</span>
<span className="text-neutral-200 font-semibold">Customer Support</span>
</div>
<div className="text-neutral-400 text-sm">
            Reduce ticket volume and resolve issues faster with AI-powered, self-service chatbots.
          </div>
</div>
<div className="border border-neutral-800 rounded-lg bg-neutral-950 p-6">
<div className="flex items-center space-x-2 mb-3">
<span className="material-icons text-lg text-violet-600">shopping_cart</span>
<span className="text-neutral-200 font-semibold">Sales Automation</span>
</div>
<div className="text-neutral-400 text-sm">
            Qualify leads, answer product questions, and book meetings automatically — so your sales team closes more deals.
          </div>
</div>
<div className="border border-neutral-800 rounded-lg bg-neutral-950 p-6">
<div className="flex items-center space-x-2 mb-3">
<span className="material-icons text-lg text-purple-500">people</span>
<span className="text-neutral-200 font-semibold">Employee Productivity</span>
</div>
<div className="text-neutral-400 text-sm">
            Empower HR and IT teams with bots that answer routine questions and automate onboarding or support tasks.
          </div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-950 border-neutral-800 border-t pt-24 pb-24" id="pricing">
<div className="max-w-5xl mr-auto ml-auto pr-6 pl-6">
<h2 className="text-3xl font-bold text-neutral-100 text-center mb-7">Simple, Transparent Pricing</h2>
<div className="flex flex-col md:flex-row justify-center gap-8">
<div className="flex-1 bg-neutral-900 border border-neutral-800 rounded-xl p-8 flex flex-col items-center shadow">
<span className="text-xl font-bold text-neutral-200">Starter</span>
<div className="text-4xl font-extrabold text-purple-500 mt-3 mb-3">$49 <span className="text-base text-neutral-400 font-normal">/mo</span></div>
<ul className="text-neutral-300 mb-7 space-y-2 text-center">
<li className="">Up to 1,000 conversations</li>
<li className="">Email support</li>
<li>1 integration</li>
</ul>
<a className="w-full hover:bg-emerald-700 transition font-semibold text-neutral-100 text-center bg-violet-600 rounded pt-3 pb-3" href="#demo">Let's talk</a>
</div>
<div className="flex-1 flex flex-col items-center bg-gradient-to-b from-gray-900 to-black border-fuchsia-800 border-2 rounded-xl pt-8 pr-8 pb-8 pl-8 shadow scale-105">
<span className="text-xl font-bold text-neutral-200">Pro</span>
<div className="text-4xl font-extrabold text-purple-500 mt-3 mb-3">$199 <span className="text-base text-neutral-400 font-normal">/mo</span></div>
<ul className="text-neutral-300 mb-7 space-y-2 text-center">
<li className="">Unlimited conversations</li>
<li className="">24/7 priority support</li>
<li className="">All integrations</li>
<li className="">Custom branding</li>
</ul>
<a className="w-full hover:bg-emerald-700 transition font-semibold text-neutral-100 text-center bg-violet-600 rounded pt-3 pb-3" href="#demo">Book a Demo</a>
</div>
<div className="flex-1 bg-neutral-900 border border-neutral-800 rounded-xl p-8 flex flex-col items-center shadow">
<span className="text-xl font-bold text-neutral-200">Enterprise</span>
<div className="text-4xl font-extrabold text-purple-500 mt-3 mb-3">Custom</div>
<ul className="text-neutral-300 mb-7 space-y-2 text-center">
<li className="">Custom volumes</li>
<li className="">Dedicated manager</li>
<li className="">SSO, advanced security</li>
<li className="">Onboarding &amp; training</li>
</ul>
<a className="w-full hover:bg-neutral-700 transition font-semibold text-neutral-100 text-center bg-neutral-800 rounded pt-3 pb-3" href="#contact">Lorem Ipsum</a>
</div>
</div>
</div>
</section>

<section className="bg-neutral-900 border-neutral-800 border-t pt-24 pb-24" id="contact">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-bold text-neutral-100 mb-6 text-center">Let's Talk</h2>
<p className="text-neutral-400 mb-8 text-center">Ready to see how ChatBotX transforms your business? Fill out the form and our team will reach out within 1 business day.</p>
<form className="bg-neutral-950 border border-neutral-800 rounded-xl p-8 max-w-lg mx-auto space-y-6">
<div className="flex flex-col space-y-2">
<label className="text-neutral-200 font-medium" htmlFor="name">Full Name</label>
<input className="bg-neutral-900 border border-neutral-800 rounded px-4 py-3 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-emerald-500" id="name" placeholder="Your name" required="" type="text"/>
</div>
<div className="flex flex-col space-y-2">
<label className="text-neutral-200 font-medium" htmlFor="email">Work Email</label>
<input className="bg-neutral-900 border border-neutral-800 rounded px-4 py-3 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-emerald-500" id="email" placeholder="you@company.com" required="" type="email"/>
</div>
<div className="flex flex-col space-y-2">
<label className="text-neutral-200 font-medium" htmlFor="message">Message</label>
<textarea className="bg-neutral-900 border border-neutral-800 rounded px-4 py-3 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-emerald-500" id="message" placeholder="Tell us about your needs..." rows="4"></textarea>
</div>
<button className="w-full hover:bg-emerald-700 transition font-semibold text-neutral-100 bg-violet-600 rounded-lg pt-3 pb-3" type="submit">Send Message</button>
</form>
</div>
</section>

<footer className="bg-neutral-950 border-t border-neutral-800 py-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
<div className="flex items-center space-x-2 mb-4 md:mb-0">
<span className="text-lg font-bold text-neutral-200">Lyumio</span>
</div>
<div className="text-sm text-neutral-500">© 2025 Lyumio</div>
<div className="flex space-x-4 mt-4 md:mt-0">
<a className="hover:text-neutral-200 text-neutral-500" href="#"></a>
<a className="hover:text-neutral-200 text-neutral-500" href="#"><span className="material-icons">twitter</span></a>
<a className="hover:text-neutral-200 text-neutral-500" href="#"></a>
</div>
</div>
</footer>

    </>
  );
}
