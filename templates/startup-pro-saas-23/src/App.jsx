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



        // Initialize Lucide icons
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
      

<nav className="fixed w-full z-50 top-0 border-b border-zinc-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">
<div className="flex items-center gap-1">
<span className="text-2xl font-semibold tracking-tight text-zinc-900">StartUp</span>
<span className="text-base font-medium text-zinc-400">pro</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-base font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#services">Services</a>
<a className="text-base font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#team">Team</a>
<a className="text-base font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#portfolio">Portfolio</a>
<a className="text-base font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-base font-medium text-zinc-900 hover:text-zinc-600 transition-colors" href="#">Sign in</a>
<a className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2.5 text-base font-medium text-white hover:bg-zinc-800 transition-colors" href="#">
                        Download
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
<h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight text-zinc-900 sm:text-7xl">
                Publish your ideas in <span className="text-zinc-400">minutes.</span>
</h1>
<p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-500">
                A modern framework for building beautiful websites. Write less code, achieve more, and deploy instantly with our intuitive tools.
            </p>
<div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 py-3.5 text-lg font-medium text-white hover:bg-zinc-800 transition-all shadow-sm" href="#">
                    Start building
                    <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-8 py-3.5 text-lg font-medium text-zinc-900 hover:bg-zinc-50 hover:border-zinc-300 transition-all" href="#video">
<i className="w-5 h-5" data-lucide="play-circle" strokeWidth="1.5"></i>
                    Watch demo
                </a>
</div>
</div>

<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
</section>

<section className="py-24 bg-zinc-50/50 border-t border-zinc-100" id="services">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="max-w-2xl text-left">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Our best services</h2>
<p className="mt-4 text-lg text-zinc-500">Everything you need to build and scale your digital presence.</p>
</div>
<div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group relative rounded-2xl border border-zinc-200 bg-white p-8 hover:shadow-md hover:border-zinc-300 transition-all">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900 mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="layout" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">Modern Design</h3>
<p className="text-lg text-zinc-500 leading-relaxed">Crebitate tunica mandato obscuro Polam prope indumentis virtutum.</p>
</div>

<div className="group relative rounded-2xl border border-zinc-200 bg-white p-8 hover:shadow-md hover:border-zinc-300 transition-all">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900 mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="code-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">Web Development</h3>
<p className="text-lg text-zinc-500 leading-relaxed">Miaci vastabant nec tamen ultro celeri sinmo vantur celeri.</p>
</div>

<div className="group relative rounded-2xl border border-zinc-200 bg-white p-8 hover:shadow-md hover:border-zinc-300 transition-all">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900 mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="bar-chart-3" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">Search Optimization</h3>
<p className="text-lg text-zinc-500 leading-relaxed">Retentabant virtutum humanitatis dubitatur ingenuos dubitatur.</p>
</div>

<div className="group relative rounded-2xl border border-zinc-200 bg-white p-8 hover:shadow-md hover:border-zinc-300 transition-all">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900 mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">Custom Solutions</h3>
<p className="text-lg text-zinc-500 leading-relaxed">Laeva successorio limes coregna porrigitur ut efficaciae propre.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950 text-white selection:bg-white selection:text-zinc-900">
<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
<h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">Modern &amp; Awesome</h2>
<p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 leading-relaxed">
                Here you will write information about yourself or your business. With the inline rich-text editor in edit mode you can edit this text, add fonts, style italic, bold type, larger or smaller text, images &amp; links.
            </p>
<div className="mt-10">
<a className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-lg font-medium text-zinc-900 hover:bg-zinc-100 transition-colors" href="#">
                    Hire us today
                </a>
</div>
</div>
</section>

<section className="py-24" id="team">
<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Our best members</h2>
<p className="mt-4 text-lg text-zinc-500">The people behind the magic.</p>
<div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">

<div className="flex flex-col items-center">
<div className="h-48 w-48 overflow-hidden rounded-full border border-zinc-200 bg-zinc-100">
<img alt="Team member" className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<h3 className="mt-8 text-xl font-medium tracking-tight text-zinc-900">1st Name</h3>
<p className="mt-2 text-lg text-zinc-500 text-center max-w-xs">Crebitate tunica mandato obscuro Polam prope indumentis.</p>
</div>

<div className="flex flex-col items-center">
<div className="h-48 w-48 overflow-hidden rounded-full border border-zinc-200 bg-zinc-100">
<img alt="Team member" className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<h3 className="mt-8 text-xl font-medium tracking-tight text-zinc-900">2nd Name</h3>
<p className="mt-2 text-lg text-zinc-500 text-center max-w-xs">Miaci vastabant nec tamen ultro celeri sinmo vantur celeri.</p>
</div>

<div className="flex flex-col items-center">
<div className="h-48 w-48 overflow-hidden rounded-full border border-zinc-200 bg-zinc-100">
<img alt="Team member" className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<h3 className="mt-8 text-xl font-medium tracking-tight text-zinc-900">3rd Name</h3>
<p className="mt-2 text-lg text-zinc-500 text-center max-w-xs">Retentabant virtutum humanitatis dubitatur ingenuos dubitatur.</p>
</div>
</div>
<div className="mt-16">
<a className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-6 py-2.5 text-base font-medium text-zinc-900 hover:bg-zinc-50 transition-colors" href="#">
                    View all services
                </a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-y border-zinc-200" id="portfolio">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Portfolio</h2>
<p className="mt-4 text-lg text-zinc-500">Some fine art and recent projects.</p>
</div>
<a className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-2.5 text-base font-medium text-white hover:bg-zinc-800 transition-colors" href="#">
                    See them all
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="aspect-video lg:aspect-square rounded-2xl bg-gradient-to-br from-zinc-200 to-zinc-100 border border-zinc-200 overflow-hidden relative group">
<img alt="Portfolio 1" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-video lg:aspect-square rounded-2xl bg-gradient-to-br from-zinc-200 to-zinc-100 border border-zinc-200 overflow-hidden relative group">
<img alt="Portfolio 2" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-video lg:aspect-square rounded-2xl bg-gradient-to-br from-zinc-200 to-zinc-100 border border-zinc-200 overflow-hidden relative group">
<img alt="Portfolio 3" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-video lg:aspect-square rounded-2xl bg-gradient-to-br from-zinc-200 to-zinc-100 border border-zinc-200 overflow-hidden relative group">
<img alt="Portfolio 4" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-video lg:aspect-square rounded-2xl bg-gradient-to-br from-zinc-200 to-zinc-100 border border-zinc-200 overflow-hidden relative group">
<img alt="Portfolio 5" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-video lg:aspect-square rounded-2xl bg-gradient-to-br from-zinc-200 to-zinc-100 border border-zinc-200 overflow-hidden relative group">
<img alt="Portfolio 6" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Testimonials</h2>
<p className="mt-4 text-lg text-zinc-500">What our clients say about us.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="rounded-2xl border border-zinc-200 p-10 flex flex-col items-center text-center">
<i className="w-10 h-10 text-zinc-400 mb-6" data-lucide="smile" strokeWidth="1.5"></i>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-4">"Modern, easy and user friendly"</h3>
<div className="flex gap-1 mb-6 text-zinc-900">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-zinc-500 leading-relaxed mb-8 flex-grow">
                        It's very easy to create a modern, beautiful website with this theme. The support is great, too. I received answers to my questions within a couple hours.
                    </p>
<p className="text-base font-medium text-zinc-900">IgnazSchels</p>
</div>

<div className="rounded-2xl border border-zinc-200 p-10 flex flex-col items-center text-center">
<div className="h-12 w-12 rounded-full overflow-hidden mb-6 border border-zinc-200">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=128&amp;q=80"/>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-4">"Very good flexible theme"</h3>
<div className="flex gap-1 mb-6 text-zinc-900">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-zinc-500 leading-relaxed mb-8 flex-grow">
                        This theme is flexible and easy to customise. I think it fits well a lot of people with different needs. Recommended!
                    </p>
<p className="text-base font-medium text-zinc-900">FreeRangeCreative</p>
</div>
</div>
<div className="mt-10 flex justify-center gap-3">
<button className="w-3 h-3 rounded-full bg-zinc-900"></button>
<button className="w-3 h-3 rounded-full bg-zinc-200"></button>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50/50 border-t border-zinc-200" id="pricing">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Our Pricing</h2>
<p className="mt-4 text-lg text-zinc-500">Simple, transparent pricing for everyone.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="rounded-3xl border border-zinc-200 bg-white p-8 flex flex-col">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900">
<i className="w-6 h-6" data-lucide="download" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900">Starter</h3>
<div className="mt-4 flex items-baseline text-4xl font-semibold tracking-tight text-zinc-900">
                        Free
                    </div>
<p className="mt-4 text-lg text-zinc-500 border-b border-zinc-100 pb-6 mb-6">Perfect for side projects and small experiments.</p>
<ul className="flex flex-col gap-4 flex-grow mb-8 text-lg text-zinc-600">
<li className="flex items-center gap-3"><i className="w-5 h-5 text-zinc-900" data-lucide="check" strokeWidth="1.5"></i> Cognomentum regna</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-zinc-900" data-lucide="check" strokeWidth="1.5"></i> Efficaciae crebritate</li>
</ul>
<a className="w-full inline-flex justify-center rounded-full border border-zinc-200 bg-white px-6 py-3 text-base font-medium text-zinc-900 hover:bg-zinc-50 transition-colors" href="#">
                        Get started
                    </a>
</div>

<div className="rounded-3xl border-2 border-zinc-900 bg-white p-8 flex flex-col relative shadow-xl">
<div className="absolute top-0 right-8 -translate-y-1/2">
<span className="bg-zinc-900 text-white text-xs font-medium px-3 py-1 rounded-full uppercase tracking-widest">Popular</span>
</div>
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 text-white">
<i className="w-6 h-6" data-lucide="gift" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900">Professional</h3>
<div className="mt-4 flex items-baseline text-4xl font-semibold tracking-tight text-zinc-900">
                        €15<span className="text-lg font-normal text-zinc-500 ml-1">/mo</span>
</div>
<p className="mt-4 text-lg text-zinc-500 border-b border-zinc-100 pb-6 mb-6">For professionals and growing businesses.</p>
<ul className="flex flex-col gap-4 flex-grow mb-8 text-lg text-zinc-600">
<li className="flex items-center gap-3"><i className="w-5 h-5 text-zinc-900" data-lucide="check" strokeWidth="1.5"></i> Virtutum humanitatis</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-zinc-900" data-lucide="check" strokeWidth="1.5"></i> Dubitatur ingenuos</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-zinc-900" data-lucide="check" strokeWidth="1.5"></i> Dubitatur miaci</li>
</ul>
<a className="w-full inline-flex justify-center rounded-full bg-zinc-900 px-6 py-3 text-base font-medium text-white hover:bg-zinc-800 transition-colors" href="#">
                        Order now
                    </a>
</div>

<div className="rounded-3xl border border-zinc-200 bg-white p-8 flex flex-col">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900">
<i className="w-6 h-6" data-lucide="gem" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900">Enterprise</h3>
<div className="mt-4 flex items-baseline text-4xl font-semibold tracking-tight text-zinc-900">
<span className="text-2xl text-zinc-400 line-through mr-2">€75</span>€45<span className="text-lg font-normal text-zinc-500 ml-1">/mo</span>
</div>
<p className="mt-4 text-lg text-zinc-500 border-b border-zinc-100 pb-6 mb-6">Dedicated support and advanced features.</p>
<ul className="flex flex-col gap-4 flex-grow mb-8 text-lg text-zinc-600">
<li className="flex items-center gap-3"><i className="w-5 h-5 text-zinc-900" data-lucide="check" strokeWidth="1.5"></i> Vastabant nec tamen</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-zinc-900" data-lucide="check" strokeWidth="1.5"></i> Ultro celeri sin</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-zinc-900" data-lucide="check" strokeWidth="1.5"></i> Retentabant dami</li>
</ul>
<a className="w-full inline-flex justify-center rounded-full border border-zinc-200 bg-white px-6 py-3 text-base font-medium text-zinc-900 hover:bg-zinc-50 transition-colors" href="#">
                        Contact sales
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-200">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Get in touch</h2>
<p className="mt-4 text-lg text-zinc-500">We are here to help and answer any question you might have.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-b border-zinc-200 pb-24">
<div className="flex flex-col items-center">
<i className="w-6 h-6 text-zinc-900 mb-4" data-lucide="phone" strokeWidth="1.5"></i>
<h4 className="text-base font-medium text-zinc-900 mb-2">Telephone</h4>
<p className="text-base text-zinc-500">+0 (12) 34 56 78</p>
</div>
<div className="flex flex-col items-center">
<i className="w-6 h-6 text-zinc-900 mb-4" data-lucide="clock" strokeWidth="1.5"></i>
<h4 className="text-base font-medium text-zinc-900 mb-2">Openings</h4>
<p className="text-base text-zinc-500">Mon - Fri: 9am - 6pm<br/>Sat: 9am - 2pm</p>
</div>
<div className="flex flex-col items-center">
<i className="w-6 h-6 text-zinc-900 mb-4" data-lucide="map-pin" strokeWidth="1.5"></i>
<h4 className="text-base font-medium text-zinc-900 mb-2">Address</h4>
<p className="text-base text-zinc-500">10 rue de Example<br/>75006 Paris, France</p>
</div>
<div className="flex flex-col items-center">
<i className="w-6 h-6 text-zinc-900 mb-4" data-lucide="mail" strokeWidth="1.5"></i>
<h4 className="text-base font-medium text-zinc-900 mb-2">E-mail</h4>
<a className="text-base text-zinc-500 hover:text-zinc-900 underline underline-offset-4" href="#">hello@startup.pro</a>
</div>
</div>

<div className="pt-24">
<div className="text-center mb-10">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Trusted by modern teams</h2>
</div>
<div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<i className="w-8 h-8 text-zinc-900" data-lucide="command" strokeWidth="1.5"></i>
<i className="w-8 h-8 text-zinc-900" data-lucide="figma" strokeWidth="1.5"></i>
<i className="w-8 h-8 text-zinc-900" data-lucide="framer" strokeWidth="1.5"></i>
<i className="w-8 h-8 text-zinc-900" data-lucide="github" strokeWidth="1.5"></i>
<i className="w-8 h-8 text-zinc-900" data-lucide="gitlab" strokeWidth="1.5"></i>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-200">
<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-8">Follow our journey</h2>
<div className="flex justify-center gap-8">
<a className="w-12 h-12 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 transition-all shadow-sm" href="#">
<i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="w-12 h-12 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 transition-all shadow-sm" href="#">
<i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a className="w-12 h-12 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 transition-all shadow-sm" href="#">
<i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<footer className="py-12 bg-white border-t border-zinc-200">
<div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-1">
<span className="text-xl font-semibold tracking-tight text-zinc-900">StartUp</span>
<span className="text-sm font-medium text-zinc-400">pro</span>
</div>
<p className="text-base text-zinc-500">© 2024 StartUp Pro. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-base text-zinc-500 hover:text-zinc-900" href="#">Privacy</a>
<a className="text-base text-zinc-500 hover:text-zinc-900" href="#">Terms</a>
</div>
</div>
</footer>


    </>
  );
}
