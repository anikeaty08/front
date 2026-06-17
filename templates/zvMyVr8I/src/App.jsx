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



    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  
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
      
<div className="relative overflow-hidden py-16 min-h-screen flex flex-col">

<div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center mb-12">
<span className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-blue-100 via-emerald-100 to-purple-100 dark:from-blue-900 dark:via-emerald-900 dark:to-purple-900 text-xs font-semibold text-blue-700 dark:text-blue-300 tracking-wider uppercase transition">
        Get in Touch
      </span>
<h1 className="mb-6 text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
        Let's Start a <span className="text-blue-600 dark:text-blue-400">Conversation</span>
</h1>
<p className="mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300 font-inter font-normal leading-snug">
        Have questions about our platform or services?<br/>
        Our team is ready to help you find the perfect solution.
      </p>
</div>

<div className="max-w-7xl mx-auto px-6 w-full">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="relative p-6 rounded-2xl border border-gray-100/80 dark:border-white/10 bg-white dark:bg-black shadow-lg dark:shadow-xl lg:col-span-2">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:5px_5px] rounded-2xl"></div>
</div>
<div className="relative">
<h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send us a message</h2>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="name">Name</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-neutral-900 text-gray-900 dark:text-white font-inter focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-600 transition-all" id="name" name="name" placeholder="Your name" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="email">Email</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-neutral-900 text-gray-900 dark:text-white font-inter focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-600 transition-all" id="email" name="email" placeholder="your@email.com" type="email"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="subject">Subject</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-neutral-900 text-gray-900 dark:text-white font-inter focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-600 transition-all" id="subject" name="subject" placeholder="How can we help?" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="message">Message</label>
<textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-neutral-900 text-gray-900 dark:text-white font-inter focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-600 transition-all resize-none" id="message" name="message" placeholder="Tell us what you need..." rows="5"></textarea>
</div>
<div>
<button className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold bg-blue-600 text-white hover:bg-blue-700 transition shadow-lg shadow-blue-100 dark:shadow-blue-900/20" type="submit">
                  Send Message
                </button>
</div>
</form>
</div>
</div>

<div className="space-y-6 lg:col-span-1">

<div className="group relative p-5 rounded-2xl border border-gray-100/80 dark:border-white/10 bg-white dark:bg-black hover:shadow-xl hover:-translate-y-1 shadow dark:shadow-lg transition-all duration-300">
<div className="relative flex flex-col space-y-3">
<div className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="space-y-2">
<h3 className="font-semibold text-gray-900 dark:text-gray-100 tracking-tight text-lg">
                  Locations
                </h3>
<div className="space-y-3 font-inter text-gray-600 dark:text-gray-300">
<p className="flex items-start">
<span className="block font-medium mr-2">New York:</span>
<span>100 Broadway St, NY 10010</span>
</p>
<p className="flex items-start">
<span className="block font-medium mr-2">London:</span>
<span>24 Oxford Street, London</span>
</p>
</div>
</div>
</div>
</div>

<div className="group relative p-5 rounded-2xl border border-gray-100/80 dark:border-white/10 bg-white dark:bg-black hover:shadow-xl hover:-translate-y-1 shadow dark:shadow-lg transition-all duration-300">
<div className="relative flex flex-col space-y-3">
<div className="w-10 h-10 rounded-xl flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="space-y-2">
<h3 className="font-semibold text-gray-900 dark:text-gray-100 tracking-tight text-lg">
                  Contact Info
                </h3>
<div className="space-y-3 font-inter text-gray-600 dark:text-gray-300">
<p className="flex items-center">
<span className="block font-medium mr-2">Email:</span>
<a className="text-blue-600 dark:text-blue-400 hover:underline" href="mailto:hello@company.com">hello@company.com</a>
</p>
<p className="flex items-center">
<span className="block font-medium mr-2">Phone:</span>
<a className="hover:text-blue-600 dark:hover:text-blue-400" href="tel:+1-202-555-0184">+1 (202) 555-0184</a>
</p>
</div>
</div>
</div>
</div>

<div className="group relative p-5 rounded-2xl border border-gray-100/80 dark:border-white/10 bg-white dark:bg-black hover:shadow-xl hover:-translate-y-1 shadow dark:shadow-lg transition-all duration-300">
<div className="relative flex flex-col space-y-3">
<div className="w-10 h-10 rounded-xl flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="space-y-2">
<h3 className="font-semibold text-gray-900 dark:text-gray-100 tracking-tight text-lg">
                  Business Hours
                </h3>
<div className="space-y-2 font-inter text-gray-600 dark:text-gray-300">
<p className="flex justify-between">
<span>Monday - Friday:</span>
<span className="font-medium">9:00 AM - 6:00 PM</span>
</p>
<p className="flex justify-between">
<span>Saturday:</span>
<span className="font-medium">10:00 AM - 4:00 PM</span>
</p>
<p className="flex justify-between">
<span>Sunday:</span>
<span className="font-medium">Closed</span>
</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
