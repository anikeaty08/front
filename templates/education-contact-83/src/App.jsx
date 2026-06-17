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
      

<header className="bg-white border-b border-gray-100 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center">
<a className="font-heading text-xl tracking-tighter text-[#b54bfb] font-bold uppercase" href="#">
                        TBWWIOC
                    </a>
</div>

<nav className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-gray-600 hover:text-[#b54bfb] transition-colors" href="#">About</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#b54bfb] transition-colors" href="#">TBWWIOC Experience</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#b54bfb] transition-colors" href="#">Admissions</a>
<a className="text-sm font-medium text-[#b54bfb]" href="#">Contact</a>
<a className="ml-4 px-5 py-2 text-sm font-medium text-white bg-[#b54bfb] rounded-md hover:bg-opacity-90 transition-all shadow-sm" href="#">
                        Login
                    </a>
</nav>

<div className="flex items-center md:hidden">
<button className="text-gray-500 hover:text-gray-700 focus:outline-none" type="button">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</div>
</header>

<section className="relative bg-[#b54bfb] text-white">
<div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
<h1 className="font-heading text-4xl sm:text-5xl tracking-tight mb-6">
                Contact Us
            </h1>
<p className="max-w-2xl text-lg sm:text-xl text-purple-50 font-light leading-relaxed">
                Wish to enquire about admissions, syllabus, or anything else? You can walk in during office hours, give us a call or simply submit the form here.
            </p>
</div>
</section>

<main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

<div className="lg:col-span-5 space-y-10">
<div className="prose prose-purple">
<h2 className="font-heading text-2xl tracking-tight text-gray-900 mb-6 pb-2 border-b border-gray-200">
                        Get in Touch
                    </h2>
</div>

<div className="flex items-start">
<div className="flex-shrink-0">
<div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#ded2fd] text-[#b54bfb]">
<span className="iconify" data-icon="lucide:map-pin" data-width="24" strokeWidth="1.5"></span>
</div>
</div>
<div className="ml-4">
<h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Address</h3>
<p className="mt-1 text-base text-gray-600 font-light">Accra, Ghana</p>
</div>
</div>

<div className="flex items-start">
<div className="flex-shrink-0">
<div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#ded2fd] text-[#b54bfb]">
<span className="iconify" data-icon="lucide:phone" data-width="24" strokeWidth="1.5"></span>
</div>
</div>
<div className="ml-4">
<h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Phone</h3>
<p className="mt-1 text-base text-gray-600 font-light">+1 4049448544 (US)</p>
<p className="text-base text-gray-600 font-light">+233 59 102 3739 (Ghana)</p>
</div>
</div>

<div className="flex items-start">
<div className="flex-shrink-0">
<div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#ded2fd] text-[#b54bfb]">
<span className="iconify" data-icon="lucide:message-circle" data-width="24" strokeWidth="1.5"></span>
</div>
</div>
<div className="ml-4">
<h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">WhatsApp</h3>
<p className="mt-1 text-base text-gray-600 font-light">+1 (404) 944-8544</p>
</div>
</div>

<div className="flex items-start">
<div className="flex-shrink-0">
<div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#ded2fd] text-[#b54bfb]">
<span className="iconify" data-icon="lucide:mail" data-width="24" strokeWidth="1.5"></span>
</div>
</div>
<div className="ml-4">
<h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Email</h3>
<a className="mt-1 text-base text-[#b54bfb] hover:underline font-light" href="mailto:admissions@tbwwioc.com">admissions@tbwwioc.com</a>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 sm:p-10">
<h2 className="font-heading text-2xl tracking-tight text-gray-900 mb-8">
                        Send Us a Message
                    </h2>
<form action="#" className="space-y-6" method="POST">

<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Full name</label>
<input className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#b54bfb] focus:ring-[#b54bfb] sm:text-sm py-3 px-4 bg-gray-50 border transition-colors outline-none" id="name" name="name" placeholder="Enter your full name" type="text"/>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email address</label>
<input className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#b54bfb] focus:ring-[#b54bfb] sm:text-sm py-3 px-4 bg-gray-50 border transition-colors outline-none" id="email" name="email" placeholder="you@example.com" type="email"/>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="subject">Subject</label>
<select className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#b54bfb] focus:ring-[#b54bfb] sm:text-sm py-3 px-4 bg-gray-50 border transition-colors outline-none appearance-none" id="subject" name="subject">
<option>General Inquiry</option>
<option>Admissions</option>
<option>Partnership</option>
</select>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">Your message</label>
<textarea className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#b54bfb] focus:ring-[#b54bfb] sm:text-sm py-3 px-4 bg-gray-50 border transition-colors outline-none" id="message" name="message" placeholder="How can we help you?" rows="5"></textarea>
</div>

<div>
<button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-[#b54bfb] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b54bfb] transition-all" type="submit">
                                Submit
                            </button>
</div>
</form>
</div>
</div>
</div>
</main>

<footer className="bg-gray-900 text-white border-t border-gray-800 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div className="space-y-4">
<h3 className="font-heading text-lg tracking-tight font-semibold text-[#ded2fd]">
                        The B.L.A.C.K.W.O.O.D Worldwide Institute of Change
                    </h3>
<p className="text-gray-400 text-sm font-light">
                        Accra, Ghana
                    </p>
</div>

<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-b border-gray-800 pb-2 inline-block">Main Office</h4>
<ul className="space-y-3 text-sm text-gray-400 font-light">
<li className="flex items-center">
<span className="iconify mr-2 text-[#ded2fd]" data-icon="lucide:phone" data-width="16"></span>
                            +1 (404) 944-8544
                        </li>
<li className="flex items-center">
<span className="iconify mr-2 text-[#ded2fd]" data-icon="lucide:clock" data-width="16"></span>
                            8:00 a.m. – 4:00 p.m.
                        </li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-b border-gray-800 pb-2 inline-block">Attendance</h4>
<ul className="space-y-3 text-sm text-gray-400 font-light">
<li className="flex items-center">
<span className="iconify mr-2 text-[#ded2fd]" data-icon="lucide:phone" data-width="16"></span>
                            +1 (404) 944-8544
                        </li>
<li className="flex items-center">
<span className="iconify mr-2 text-[#ded2fd]" data-icon="lucide:mail" data-width="16"></span>
                            administrations@tbwwioc.com
                        </li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-b border-gray-800 pb-2 inline-block">Links</h4>
<ul className="space-y-2 text-sm text-gray-400 font-light">
<li><a className="hover:text-[#b54bfb] transition-colors" href="#">About</a></li>
<li><a className="hover:text-[#b54bfb] transition-colors" href="#">TBWWIOC Experience</a></li>
<li><a className="hover:text-[#b54bfb] transition-colors" href="#">Admissions</a></li>
<li><a className="hover:text-[#b54bfb] transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-[#b54bfb] transition-colors" href="#">Login</a></li>
</ul>
</div>
</div>

<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light">
<p>Copyright © 2026 TBWWIOC</p>
<p className="mt-2 md:mt-0">Powered by BNBGraphics</p>
</div>
</div>
</footer>

    </>
  );
}
