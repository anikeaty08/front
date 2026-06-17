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



        lucide.createIcons();
    
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
      

<nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
<div className="flex items-center gap-12">
<a className="flex items-center gap-2" href="#">
<span className="font-serif text-2xl italic font-semibold">FlowBot</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
<a className="hover:text-gray-900 transition-colors" href="#">Link One</a>
<a className="hover:text-gray-900 transition-colors" href="#">Link Two</a>
<a className="hover:text-gray-900 transition-colors" href="#">Link Three</a>
<a className="flex items-center gap-1 hover:text-gray-900 transition-colors" href="#">
                        Link Four 
                        <svg className="lucide lucide-chevron-down h-4 w-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all">
                    Button
                </button>
</div>
</div>
</nav>

<section className="md:pt-32 md:pb-20 pt-24 pb-12">
<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
<h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight text-gray-900 md:text-7xl">
                WhatsApp automation for <br/> African businesses
            </h1>
<p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
                Build powerful chatbots without writing a single line of code. Transform customer communication with AI-driven workflows that work hard while you rest.
            </p>
<div className="mt-10 flex items-center justify-center gap-4">
<button className="bg-gray-900 text-white px-8 py-3.5 rounded-lg text-base font-medium hover:bg-gray-800 transition-all">
                    Preorder
                </button>
<button className="bg-white text-gray-900 border border-gray-200 px-8 py-3.5 rounded-lg text-base font-medium hover:bg-gray-50 transition-all">
                    Button
                </button>
</div>

<div className="mt-20 relative mx-auto max-w-5xl overflow-hidden rounded-xl bg-gray-400 aspect-video flex items-center justify-center group cursor-pointer shadow-sm">
<div className="h-20 w-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
<svg className="lucide lucide-play h-8 w-8 text-white fill-current" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
</div>
</section>

<section className="md:py-32 pt-24 pb-24">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">

<div className="aspect-square w-full rounded-2xl bg-gray-200 flex items-center justify-center">
<svg className="lucide lucide-image h-20 w-20 text-gray-400" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect className="" height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</div>

<div className="">
<span className="text-sm font-semibold text-gray-900">Broadcast</span>
<h2 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
                        Reach every customer instantly
                    </h2>
<p className="mt-6 text-lg text-gray-600 leading-relaxed">
                        Send targeted messages to thousands of customers with a single click. Segment audiences and deliver personalized communication that drives engagement.
                    </p>
<div className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-100 pt-10">
<div className="">
<div className="text-4xl font-semibold tracking-tight text-gray-900">90%</div>
<div className="mt-2 text-sm text-gray-600">SMEs improve customer response rates</div>
</div>
<div className="">
<div className="text-4xl font-semibold tracking-tight text-gray-900">5x</div>
<div className="mt-2 text-sm text-gray-600">Faster communication compared to traditional methods</div>
</div>
</div>
<div className="mt-10 flex items-center gap-6">
<button className="bg-white text-gray-900 border border-gray-200 px-6 py-3 rounded-lg text-base font-medium hover:bg-gray-50 transition-all">
                            Get started
                        </button>
<a className="group flex items-center gap-2 text-base font-medium text-gray-900 hover:text-gray-600" href="#">
                            Learn more <svg className="lucide lucide-chevron-right h-4 w-4 transition-transform group-hover:translate-x-1" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 bg-gray-50/50 pt-24 pb-24">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">

<div className="order-2 lg:order-1">
<span className="text-sm font-semibold text-gray-900">WhatsApp Flows</span>
<h2 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
                        Native forms directly in the chat
                    </h2>
<p className="mt-6 text-lg text-gray-600 leading-relaxed">
                        Say goodbye to external links. Collect orders, bookings, and customer details with rich, native forms that users fill out without ever leaving WhatsApp.
                    </p>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
<div>
<svg className="lucide lucide-clipboard-list h-8 w-8 text-gray-900" data-lucide="clipboard-list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>
<h3 className="mt-4 text-lg font-medium text-gray-900">Seamless inputs</h3>
<p className="mt-2 text-base text-gray-600">Use drop-downs, date pickers, and text fields for structured data collection.</p>
</div>
<div>
<svg className="lucide lucide-trending-up h-8 w-8 text-gray-900" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<h3 className="mt-4 text-lg font-medium text-gray-900">Higher completion</h3>
<p className="mt-2 text-base text-gray-600">Reduce drop-offs significantly by keeping the entire experience in-app.</p>
</div>
</div>
<div className="mt-10 flex items-center gap-6">
<button className="bg-white text-gray-900 border border-gray-200 px-6 py-3 rounded-lg text-base font-medium hover:bg-gray-50 transition-all">
                            Get started
                        </button>
<a className="group flex items-center gap-2 text-base font-medium text-gray-900 hover:text-gray-600" href="#">
                            Learn more <svg className="lucide lucide-chevron-right h-4 w-4 transition-transform group-hover:translate-x-1" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>

<div className="order-1 lg:order-2 aspect-square w-full rounded-2xl bg-gray-200 flex items-center justify-center">
<svg className="lucide lucide-layout-template h-20 w-20 text-gray-400" data-lucide="layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">

<div className="aspect-square w-full rounded-2xl bg-gray-200 flex items-center justify-center">
<svg className="lucide lucide-image h-20 w-20 text-gray-400" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</div>

<div>
<span className="text-sm font-semibold text-gray-900">AI chat</span>
<h2 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
                        Intelligent conversations that understand context
                    </h2>
<p className="mt-6 text-lg text-gray-600 leading-relaxed">
                        Deploy AI agents that communicate naturally and solve customer problems with human-like understanding.
                    </p>
<div className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-100 pt-10">
<div>
<div className="text-4xl font-semibold tracking-tight text-gray-900">10+</div>
<div className="mt-2 text-sm text-gray-600">Languages supported for global communication</div>
</div>
<div>
<div className="text-4xl font-semibold tracking-tight text-gray-900">95%</div>
<div className="mt-2 text-sm text-gray-600">Customer satisfaction with AI-powered interactions</div>
</div>
</div>
<div className="mt-10 flex items-center gap-6">
<button className="bg-white text-gray-900 border border-gray-200 px-6 py-3 rounded-lg text-base font-medium hover:bg-gray-50 transition-all">
                            Get started
                        </button>
<a className="group flex items-center gap-2 text-base font-medium text-gray-900 hover:text-gray-600" href="#">
                            Learn more <svg className="lucide lucide-chevron-right h-4 w-4 transition-transform group-hover:translate-x-1" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-sm font-semibold text-gray-900">Capabilities</span>
<h2 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
                    Intelligent tools for modern  businesses
                </h2>
<p className="mt-6 text-lg text-gray-600">Unlock powerful communication strategies designed for African entrepreneurs</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="md:row-span-2 rounded-xl border border-gray-200 p-8 flex flex-col justify-between bg-gray-50">
<div className="aspect-video w-full rounded-lg bg-gray-200 mb-8 flex items-center justify-center">
<svg className="lucide lucide-image h-12 w-12 text-gray-400" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</div>
<div>
<span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Platform</span>
<h3 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900">Transform customer interactions with smart technology</h3>
<p className="mt-4 text-base text-gray-600">Leverage AI-driven tools that simplify complex communication challenges</p>
<div className="mt-8 flex gap-4">
<button className="bg-white text-gray-900 border border-gray-200 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50">Explore</button>
<a className="flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-gray-600" href="#">Learn <svg className="lucide lucide-chevron-right h-3 w-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></a>
</div>
</div>
</div>

<div className="rounded-xl border border-gray-200 p-8 hover:shadow-sm transition-shadow">
<svg className="lucide lucide-target h-8 w-8 text-gray-900 mb-6" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<h3 className="text-xl font-medium tracking-tight text-gray-900">Optimize customer engagement strategies</h3>
<p className="mt-3 text-base text-gray-600">Create personalized communication experiences</p>
<a className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-gray-600" href="#">Learn <svg className="lucide lucide-chevron-right h-3 w-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></a>
</div>

<div className="rounded-xl border border-gray-200 p-8 hover:shadow-sm transition-shadow">
<svg className="lucide lucide-users h-8 w-8 text-gray-900 mb-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<h3 className="text-xl font-medium tracking-tight text-gray-900">Enhance business communication effectiveness</h3>
<p className="mt-3 text-base text-gray-600">Build responsive and intelligent interaction models</p>
<a className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-gray-600" href="#">More <svg className="lucide lucide-chevron-right h-3 w-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></a>
</div>

<div className="rounded-xl border border-gray-200 p-8 bg-gray-50 flex flex-col justify-between">
<div className="aspect-video w-full rounded-lg bg-gray-200 mb-6 flex items-center justify-center">
<svg className="lucide lucide-image h-8 w-8 text-gray-400" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</div>
<div>
<span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Capabilities</span>
<h3 className="mt-2 text-xl font-medium tracking-tight text-gray-900">Streamline your communication workflow</h3>
<p className="mt-3 text-base text-gray-600">Design intelligent paths that adapt to customer needs</p>
<a className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-gray-600" href="#">Discover <svg className="lucide lucide-chevron-right h-3 w-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></a>
</div>
</div>

<div className="lg:col-span-2 rounded-xl border border-gray-200 p-8">
<div className="aspect-[21/9] w-full rounded-lg bg-gray-200 mb-8 flex items-center justify-center">
<svg className="lucide lucide-image h-12 w-12 text-gray-400" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</div>
<div>
<span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Core</span>
<h3 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900">Comprehensive performance tracking</h3>
<p className="mt-4 text-base text-gray-600 max-w-xl">Monitor and analyze chatbot performance with advanced insights and actionable metrics</p>
<div className="mt-8 flex gap-4">
<button className="bg-white text-gray-900 border border-gray-200 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50">Get started</button>
<a className="flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-gray-600" href="#">More <svg className="lucide lucide-chevron-right h-3 w-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 text-center bg-gray-50/50">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<span className="text-sm font-semibold text-gray-900">Integrations</span>
<h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Connect with your favorite  business tools</h2>
<p className="mt-4 text-lg text-gray-600">Seamlessly integrate FlowBot with your existing business ecosystem.</p>
<div className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-8 items-center grayscale opacity-70 hover:opacity-100 transition-opacity">

<div className="flex items-center gap-2 text-xl font-bold font-sans"><svg className="lucide lucide-box fill-black" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg> Webflow</div>
<div className="flex items-center gap-2 text-xl font-bold font-sans"><svg className="lucide lucide-box fill-black" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg> Relume</div>
<div className="flex items-center gap-2 text-xl font-bold font-sans"><svg className="lucide lucide-box fill-black" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg> Webflow</div>
<div className="flex items-center gap-2 text-xl font-bold font-sans"><svg className="lucide lucide-box fill-black" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg> Relume</div>
</div>
<div className="mt-12 flex justify-center gap-4">
<button className="bg-white text-gray-900 border border-gray-200 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all">
                    Explore integrations
                </button>
<a className="flex items-center gap-1 text-sm font-medium text-gray-900 px-5 py-2.5" href="#">
                    See all tools <svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-24 md:py-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="text-center">
<span className="text-sm font-semibold text-gray-900">Pricing</span>
<h2 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
                    Simple, transparent pricing for  every business
                </h2>
<p className="mt-6 text-lg text-gray-600">Choose a plan that grows with your business needs.</p>
<div className="mt-8 flex justify-center">
<div className="relative flex items-center rounded-lg border border-gray-200 bg-white p-1">
<button className="rounded-md bg-gray-900 px-4 py-1.5 text-sm font-medium text-white shadow-sm">Monthly</button>
<button className="rounded-md border-transparent px-4 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900">Yearly</button>
</div>
</div>
</div>
<div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">

<div className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-8 hover:border-gray-300 transition-colors">
<div>
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold text-gray-900">Starter plan</h3>
<svg className="lucide lucide-box h-6 w-6 text-gray-900" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</div>
<div className="mt-6 flex items-baseline">
<span className="text-4xl font-bold tracking-tight text-gray-900">$19</span>
<span className="text-sm font-medium text-gray-600">/mo</span>
</div>
<p className="text-sm text-gray-600 mb-4">Includes:</p>
<ul className="space-y-4 text-sm text-gray-600">
<li className="flex gap-3"><svg className="lucide lucide-check h-5 w-5 flex-none text-gray-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Basic chatbot workflows</li>
<li className="flex gap-3"><svg className="lucide lucide-check h-5 w-5 flex-none text-gray-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 100 monthly messages</li>
<li className="flex gap-3"><svg className="lucide lucide-check h-5 w-5 flex-none text-gray-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Email support</li>
</ul>
</div>
<button className="mt-8 block w-full rounded-lg bg-gray-900 px-4 py-3 text-center text-sm font-medium text-white hover:bg-gray-800">Get started</button>
</div>

<div className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-8 hover:border-gray-300 transition-colors ring-1 ring-gray-900/5">
<div>
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold text-gray-900">Business plan</h3>
<svg className="lucide lucide-box h-6 w-6 text-gray-900" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</div>
<div className="mt-6 flex items-baseline">
<span className="text-4xl font-bold tracking-tight text-gray-900">$29</span>
<span className="text-sm font-medium text-gray-600">/mo</span>
</div>
<p className="text-sm text-gray-600 mb-4">Includes:</p>
<ul className="space-y-4 text-sm text-gray-600">
<li className="flex gap-3"><svg className="lucide lucide-check h-5 w-5 flex-none text-gray-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Advanced workflow builder</li>
<li className="flex gap-3"><svg className="lucide lucide-check h-5 w-5 flex-none text-gray-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 500 monthly messages</li>
<li className="flex gap-3"><svg className="lucide lucide-check h-5 w-5 flex-none text-gray-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Priority support</li>
</ul>
</div>
<button className="mt-8 block w-full rounded-lg bg-gray-900 px-4 py-3 text-center text-sm font-medium text-white hover:bg-gray-800">Get started</button>
</div>

<div className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-8 hover:border-gray-300 transition-colors">
<div>
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold text-gray-900">Enterprise plan</h3>
<svg className="lucide lucide-box h-6 w-6 text-gray-900" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</div>
<div className="mt-6 flex items-baseline">
<span className="text-4xl font-bold tracking-tight text-gray-900">$49</span>
<span className="text-sm font-medium text-gray-600">/mo</span>
</div>
<p className="text-sm text-gray-600 mb-4">Includes:</p>
<ul className="space-y-4 text-sm text-gray-600">
<li className="flex gap-3"><svg className="lucide lucide-check h-5 w-5 flex-none text-gray-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Unlimited workflows</li>
<li className="flex gap-3"><svg className="lucide lucide-check h-5 w-5 flex-none text-gray-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Unlimited messages</li>
<li className="flex gap-3"><svg className="lucide lucide-check h-5 w-5 flex-none text-gray-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Dedicated support</li>
</ul>
</div>
<button className="mt-8 block w-full rounded-lg bg-gray-900 px-4 py-3 text-center text-sm font-medium text-white hover:bg-gray-800">Contact sales</button>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<h2 className="mb-16 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">What our customers say</h2>
<p className="mb-12 max-w-xl text-lg text-gray-600">Real stories from businesses transforming communication across Africa</p>
<div className="grid grid-cols-1 gap-8 md:grid-cols-3">

<div className="border border-gray-200 p-8 rounded-xl h-full flex flex-col justify-between">
<div>
<div className="flex gap-1 mb-6">
<svg className="lucide lucide-star h-5 w-5 fill-gray-900 text-gray-900" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-5 w-5 fill-gray-900 text-gray-900" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-5 w-5 fill-gray-900 text-gray-900" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-5 w-5 fill-gray-900 text-gray-900" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-5 w-5 fill-gray-900 text-gray-900" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-base text-gray-800 leading-relaxed">"FlowBot helped us reduce customer response time by 70%. It's like having an extra team member."</p>
</div>
<div className="mt-8 flex items-center gap-4">
<div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
<svg className="lucide lucide-image h-6 w-6" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</div>
<div>
<div className="font-semibold text-gray-900">Michael Okonkwo</div>
<div className="text-sm text-gray-600">Founder, Lagos Retail</div>
</div>
</div>
</div>

<div className="border border-gray-200 p-8 rounded-xl h-full flex flex-col justify-between">
<div>
<div className="flex gap-1 mb-6">
<svg className="lucide lucide-star h-5 w-5 fill-gray-900 text-gray-900" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-5 w-5 fill-gray-900 text-gray-900" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-5 w-5 fill-gray-900 text-gray-900" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-5 w-5 fill-gray-900 text-gray-900" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-5 w-5 fill-gray-900 text-gray-900" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-base text-gray-800 leading-relaxed">"Our restaurant now handles 3x more reservations with less effort. Simply incredible."</p>
</div>
<div className="mt-8 flex items-center gap-4">
<div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
<svg className="lucide lucide-image h-6 w-6" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</div>
<div>
<div className="font-semibold text-gray-900">Amina Diallo</div>
<div className="text-sm text-gray-600">Manager, Dakar Dining</div>
</div>
</div>
</div>

<div className="border border-gray-200 p-8 rounded-xl h-full flex flex-col justify-between">
<div>
<div className="flex gap-1 mb-6">
<svg className="lucide lucide-star h-5 w-5 fill-gray-900 text-gray-900" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-5 w-5 fill-gray-900 text-gray-900" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-5 w-5 fill-gray-900 text-gray-900" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-5 w-5 fill-gray-900 text-gray-900" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-5 w-5 fill-gray-900 text-gray-900" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-base text-gray-800 leading-relaxed">"As an e-commerce startup, FlowBot has been a game-changer for our customer support."</p>
</div>
<div className="mt-8 flex items-center gap-4">
<div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
<svg className="lucide lucide-image h-6 w-6" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</div>
<div>
<div className="font-semibold text-gray-900">Samuel Nkosi</div>
<div className="text-sm text-gray-600">CEO, Nairobi Online Store</div>
</div>
</div>
</div>
</div>
<div className="mt-12 flex items-center justify-between">
<div className="flex gap-2">
<div className="h-2 w-2 rounded-full bg-gray-900"></div>
<div className="h-2 w-2 rounded-full bg-gray-200"></div>
<div className="h-2 w-2 rounded-full bg-gray-200"></div>
<div className="h-2 w-2 rounded-full bg-gray-200"></div>
</div>
<div className="flex gap-4">
<button className="rounded-full border border-gray-200 p-3 hover:bg-gray-50">
<svg className="lucide lucide-arrow-left h-5 w-5 text-gray-900" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="rounded-full border border-gray-200 p-3 hover:bg-gray-50">
<svg className="lucide lucide-arrow-right h-5 w-5 text-gray-900" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6 lg:px-8">
<h2 className="text-center text-4xl font-semibold tracking-tight text-gray-900 mb-4">FAQs</h2>
<p className="text-center text-gray-600 mb-16">Got questions? We've got clear, straightforward answers about FlowBot.</p>
<div className="space-y-4">

<div className="border-b border-gray-200 pb-6">
<button className="flex w-full items-center justify-between py-2 text-left text-base font-semibold text-gray-900">
                    How does FlowBot work?
                    <svg className="lucide lucide-chevron-up h-5 w-5 text-gray-500" data-lucide="chevron-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
</button>
<div className="mt-4 text-base text-gray-600">
                    FlowBot is a no-code platform that allows you to build WhatsApp chatbots using a drag-and-drop interface. No programming skills required.
                </div>
</div>

<div className="border-b border-gray-200 pb-6 pt-4">
<button className="flex w-full items-center justify-between py-2 text-left text-base font-semibold text-gray-900">
                    What integrations are available?
                    <svg className="lucide lucide-chevron-up h-5 w-5 text-gray-500 rotate-180" data-lucide="chevron-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
</button>
<div className="mt-4 text-base text-gray-600">
                     We support integrations with popular CRM systems, spreadsheets, and can connect via webhooks to most business tools.
                </div>
</div>

<div className="border-b border-gray-200 pb-6 pt-4">
<button className="flex w-full items-center justify-between py-2 text-left text-base font-semibold text-gray-900">
                    Is my data secure?
                    <svg className="lucide lucide-chevron-up h-5 w-5 text-gray-500 rotate-180" data-lucide="chevron-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
</button>
<div className="mt-4 text-base text-gray-600 hidden">
                    We use bank-level encryption and follow strict data protection guidelines to ensure your information remains confidential.
                </div>
</div>

<div className="border-b border-gray-200 pb-6 pt-4">
<button className="flex w-full items-center justify-between py-2 text-left text-base font-semibold text-gray-900">
                    Can I try before purchasing?
                    <svg className="lucide lucide-chevron-up h-5 w-5 text-gray-500 rotate-180" data-lucide="chevron-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
</button>
<div className="mt-4 text-base text-gray-600 hidden">
                    Yes, we offer a free trial that lets you explore core features and build your first chatbot workflow.
                </div>
</div>

<div className="border-b border-gray-200 pb-6 pt-4">
<button className="flex w-full items-center justify-between py-2 text-left text-base font-semibold text-gray-900">
                    What support is available?
                    <svg className="lucide lucide-chevron-up h-5 w-5 text-gray-500 rotate-180" data-lucide="chevron-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
</button>
<div className="mt-4 text-base text-gray-600 hidden">
                    We provide email support for all plans, with priority and dedicated support for business and enterprise customers.
                </div>
</div>
</div>
<div className="mt-20 text-center">
<h3 className="text-2xl font-semibold text-gray-900">Still have questions?</h3>
<p className="mt-4 text-gray-600">Our team is ready to help you find the right solution</p>
<button className="mt-8 border border-gray-200 bg-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-gray-50">
                Contact
            </button>
</div>
</section>

<footer className="border-t border-gray-200 pt-16 pb-12 bg-white">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 lg:col-span-2">
<a className="font-serif text-3xl italic font-semibold text-gray-900" href="#">FlowBot</a>
<h2 className="mt-6 text-4xl font-semibold tracking-tight text-gray-900">
                        Transform your <br/> business <br/> communication
                    </h2>
<p className="mt-6 text-sm text-gray-600 max-w-sm">
                        FlowBot empowers African businesses with intelligent, seamless communication solutions
                    </p>
<div className="mt-8 flex gap-4">
<button className="bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800">Start now</button>
<button className="bg-white text-gray-900 border border-gray-200 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50">Connect</button>
</div>
</div>
<div className="grid grid-cols-2 gap-8 col-span-1 lg:col-span-2">
<div>
<ul className="space-y-4">
<li><a className="text-sm font-semibold text-gray-900 hover:text-gray-600" href="#">Product</a></li>
<li><a className="text-sm font-semibold text-gray-900 hover:text-gray-600" href="#">Features</a></li>
<li><a className="text-sm font-semibold text-gray-900 hover:text-gray-600" href="#">Pricing</a></li>
</ul>
</div>
<div>
<ul className="space-y-4">
<li><a className="text-sm font-semibold text-gray-900 hover:text-gray-600" href="#">Resources</a></li>
<li><a className="text-sm font-semibold text-gray-900 hover:text-gray-600" href="#">Blog</a></li>
<li><a className="text-sm font-semibold text-gray-900 hover:text-gray-600" href="#">Community</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-500">© 2025 FlowBot. All rights reserved</p>
<div className="flex gap-6">
<a className="text-xs text-gray-500 hover:text-gray-900 underline underline-offset-4" href="#">Privacy policy</a>
<a className="text-xs text-gray-500 hover:text-gray-900 underline underline-offset-4" href="#">Terms of service</a>
<a className="text-xs text-gray-500 hover:text-gray-900 underline underline-offset-4" href="#">Cookie settings</a>
</div>
<div className="flex gap-4">
<svg className="lucide lucide-facebook h-4 w-4 text-gray-900 cursor-pointer" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
<svg className="lucide lucide-instagram h-4 w-4 text-gray-900 cursor-pointer" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<svg className="lucide lucide-twitter h-4 w-4 text-gray-900 cursor-pointer" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
<svg className="lucide lucide-linkedin h-4 w-4 text-gray-900 cursor-pointer" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
<svg className="lucide lucide-youtube h-4 w-4 text-gray-900 cursor-pointer" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</div>
</div>
</div>
</footer>


    </>
  );
}
