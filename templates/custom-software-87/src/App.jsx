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



        // Initialize Icons
        lucide.createIcons();

        // Scroll Reveal Script
        document.addEventListener('DOMContentLoaded', () => {
            const reveals = document.querySelectorAll('.reveal');

            const revealOnScroll = () => {
                const windowHeight = window.innerHeight;
                const elementVisible = 100;

                reveals.forEach((reveal) => {
                    const elementTop = reveal.getBoundingClientRect().top;
                    if (elementTop < windowHeight - elementVisible) {
                        reveal.classList.add('active');
                    }
                });
            };

            window.addEventListener('scroll', revealOnScroll);
            // Trigger once on load
            revealOnScroll();
        });
    
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
      

<header className="fixed inset-x-0 top-0 z-50 glass-nav transition-all duration-300">
<nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
<div className="flex lg:flex-1">
<a className="-m-1.5 p-1.5 font-semibold tracking-tighter text-xl uppercase text-gray-900 flex items-center gap-1 group" href="#/">
                    Zore<span className="text-[#0043ff] group-hover:animate-pulse text-2xl">.</span>Digital
                </a>
</div>
<div className="hidden lg:flex lg:gap-x-10">
<a className="text-sm font-medium leading-6 text-gray-900 hover:text-[#0043ff] transition-colors" href="#/">Home</a>
<a className="text-sm font-medium leading-6 text-gray-600 hover:text-[#0043ff] transition-colors" href="#/mvp">MVP</a>
<a className="text-sm font-medium leading-6 text-gray-600 hover:text-[#0043ff] transition-colors" href="#/development">Development</a>
<a className="text-sm font-medium leading-6 text-gray-600 hover:text-[#0043ff] transition-colors" href="#/product">Product</a>
<a className="text-sm font-medium leading-6 text-gray-600 hover:text-[#0043ff] transition-colors" href="#/about">About</a>
</div>
<div className="hidden lg:flex lg:flex-1 lg:justify-end">
<a className="text-sm font-semibold leading-6 text-gray-900 group flex items-center" href="#/contact">
                    Contact <span aria-hidden="true" className="ml-1 block transition-transform group-hover:translate-x-1">→</span>
</a>
</div>
<div className="flex lg:hidden">
<button className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" type="button">
<span className="sr-only">Open main menu</span>
<i className="h-6 w-6" data-lucide="menu"></i>
</button>
</div>
</nav>
</header>
<main>

<div className="relative isolate pt-14 overflow-hidden">

<div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
<div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
<div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
<div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}></div>
</div>
<div className="bg-grid py-24 sm:py-32 lg:pb-40 relative z-10">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
<div className="reveal delay-100">
<div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800 mb-6 hover:bg-blue-100 transition-colors cursor-default">
<span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                                Now accepting new startup partners
                            </div>
</div>
<h1 className="reveal delay-200 text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl text-balance drop-shadow-sm">
                            Software Development for Startups Aiming for <span className="text-[#0043ff] relative whitespace-nowrap">
<span className="relative z-10">Growth</span>
<svg className="absolute bottom-2 left-0 -z-10 h-3 w-full text-blue-200" preserveaspectratio="none" viewbox="0 0 100 10"><path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path></svg>
</span>
</h1>
<p className="reveal delay-300 mt-6 text-lg leading-8 text-gray-600 text-balance">
                            We create digital products for ambitious startup founders. From MVP to market launch, we turn complex problems into elegant, scalable code.
                        </p>
<div className="reveal delay-500 mt-10 flex items-center gap-x-6">
<a className="group relative overflow-hidden rounded-md bg-[#0043ff] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 hover:bg-blue-600 hover:shadow-blue-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300 transform hover:-translate-y-0.5" href="#/contact">
<span className="relative z-10">Get Started</span>
<div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
</a>
<a className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-2 group transition-all hover:text-[#0043ff]" href="#/mvp">
                                Learn more <i className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:text-[#0043ff]" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="reveal delay-700 mt-16 flow-root sm:mt-24">
<div className="animate-float -m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 backdrop-blur-sm">
<img alt="App screenshot" className="rounded-md shadow-2xl ring-1 ring-gray-900/10 w-full h-[300px] lg:h-[600px] object-cover opacity-90 grayscale-[10%] transition-all duration-700 hover:grayscale-0" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&amp;fit=crop&amp;q=80&amp;w=2564"/>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white py-24 sm:py-32 relative">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl lg:text-center reveal">
<h2 className="text-base font-semibold leading-7 text-[#0043ff] uppercase tracking-wide">Expertise</h2>
<p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl text-balance">Developing MVPs and Custom SaaS Software</p>
<p className="mt-6 text-lg leading-8 text-gray-600 text-balance">
                        Comprehensive support from idea to market launch. We bridge the gap between concept and execution.
                    </p>
</div>
<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">

<div className="reveal flex flex-col border border-gray-100 p-6 rounded-2xl bg-white hover:border-blue-100 card-hover-effect group">
<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 mb-2">
<div className="h-8 w-8 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-[#0043ff] transition-colors duration-300">
<i className="h-4 w-4 text-[#0043ff] group-hover:text-white transition-colors duration-300" data-lucide="code-2"></i>
</div>
                                Customized Software
                            </dt>
<dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
<p className="flex-auto">Tailored solutions for web, mobile, and cross-platform applications designed for your specific needs.</p>
</dd>
</div>

<div className="reveal flex flex-col border border-gray-100 p-6 rounded-2xl bg-white hover:border-blue-100 card-hover-effect group delay-100">
<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 mb-2">
<div className="h-8 w-8 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-[#0043ff] transition-colors duration-300">
<i className="h-4 w-4 text-[#0043ff] group-hover:text-white transition-colors duration-300" data-lucide="layers"></i>
</div>
                                Extensive Stack
                            </dt>
<dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
<p className="flex-auto">Leveraging modern technologies (React, Node, Python) to build robust, scalable, and secure products.</p>
</dd>
</div>

<div className="reveal flex flex-col border border-gray-100 p-6 rounded-2xl bg-white hover:border-blue-100 card-hover-effect group delay-200">
<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 mb-2">
<div className="h-8 w-8 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-[#0043ff] transition-colors duration-300">
<i className="h-4 w-4 text-[#0043ff] group-hover:text-white transition-colors duration-300" data-lucide="zap"></i>
</div>
                                Agile Methodology
                            </dt>
<dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
<p className="flex-auto">Rapid development cycles and adaptation to ensure faster time-to-market for your MVP.</p>
</dd>
</div>

<div className="reveal flex flex-col border border-gray-100 p-6 rounded-2xl bg-white hover:border-blue-100 card-hover-effect group">
<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 mb-2">
<div className="h-8 w-8 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-[#0043ff] transition-colors duration-300">
<i className="h-4 w-4 text-[#0043ff] group-hover:text-white transition-colors duration-300" data-lucide="trending-up"></i>
</div>
                                MVP Scaling
                            </dt>
<dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
<p className="flex-auto">Strategic development from initial concept validation to full-scale product growth.</p>
</dd>
</div>

<div className="reveal flex flex-col border border-gray-100 p-6 rounded-2xl bg-white hover:border-blue-100 card-hover-effect group delay-100">
<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 mb-2">
<div className="h-8 w-8 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-[#0043ff] transition-colors duration-300">
<i className="h-4 w-4 text-[#0043ff] group-hover:text-white transition-colors duration-300" data-lucide="shield-check"></i>
</div>
                                Quality Assurance
                            </dt>
<dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
<p className="flex-auto">Rigorous testing protocols to ensure your software is reliable, secure, and bug-free.</p>
</dd>
</div>

<div className="reveal flex flex-col border border-gray-100 p-6 rounded-2xl bg-white hover:border-blue-100 card-hover-effect group delay-200">
<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 mb-2">
<div className="h-8 w-8 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-[#0043ff] transition-colors duration-300">
<i className="h-4 w-4 text-[#0043ff] group-hover:text-white transition-colors duration-300" data-lucide="piggy-bank"></i>
</div>
                                Cost Efficiency
                            </dt>
<dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
<p className="flex-auto">Optimized development processes to deliver maximum value without compromising quality.</p>
</dd>
</div>
</dl>
</div>
</div>
</div>

<div className="reveal bg-gradient-to-b from-gray-50 to-white border-y border-gray-100">
<div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 flex flex-col items-center text-center">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Have an idea? Let's talk.</h2>
<div className="mt-8 flex items-center justify-center gap-x-6">
<a className="rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5" href="https://calendly.com/av-zore/30min">
                        Pick a Slot
                    </a>
</div>
</div>
</div>

<div className="overflow-hidden bg-white py-24 sm:py-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
<div className="px-4 lg:px-0 lg:pr-4 lg:pt-4 reveal">
<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
<h2 className="text-base font-semibold leading-7 text-[#0043ff] uppercase tracking-wide">Workflow</h2>
<p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">How We Support Your Vision</p>
<p className="mt-6 text-lg leading-8 text-gray-600">Working with Zore.Digital, you receive all-around services to implement your ideas for building SaaS products.</p>
<dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
<div className="relative pl-14 group hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300">
<dt className="inline font-semibold text-gray-900">
<div className="absolute left-2 top-4 flex h-8 w-8 items-center justify-center rounded-lg bg-[#0043ff]/10 group-hover:bg-[#0043ff] transition-colors duration-300">
<i className="h-5 w-5 text-[#0043ff] group-hover:text-white transition-colors" data-lucide="rocket"></i>
</div>
                                        Building an MVP.
                                    </dt>
<dd className="inline"> We help pre-seed and early startups build a Minimum Viable Product in the shortest time possible to validate market fit.</dd>
</div>
<div className="relative pl-14 group hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300">
<dt className="inline font-semibold text-gray-900">
<div className="absolute left-2 top-4 flex h-8 w-8 items-center justify-center rounded-lg bg-[#0043ff]/10 group-hover:bg-[#0043ff] transition-colors duration-300">
<i className="h-5 w-5 text-[#0043ff] group-hover:text-white transition-colors" data-lucide="users"></i>
</div>
                                        Team Augmentation.
                                    </dt>
<dd className="inline"> We expand your core team with our augmentation service, increasing your capacity with battle-tested outsourced staff.</dd>
</div>
<div className="relative pl-14 group hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300">
<dt className="inline font-semibold text-gray-900">
<div className="absolute left-2 top-4 flex h-8 w-8 items-center justify-center rounded-lg bg-[#0043ff]/10 group-hover:bg-[#0043ff] transition-colors duration-300">
<i className="h-5 w-5 text-[#0043ff] group-hover:text-white transition-colors" data-lucide="code-2"></i>
</div>
                                        Custom Development.
                                    </dt>
<dd className="inline"> Our multidisciplinary team helps established businesses embrace digital transformation and develop new SaaS products.</dd>
</div>
</dl>
</div>
</div>
<div className="sm:px-6 lg:px-0 reveal delay-200">
<div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none transition-transform hover:scale-[1.01] duration-500">
<div aria-hidden="true" className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-gray-100 opacity-20 ring-1 ring-inset ring-white"></div>
<div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
<img alt="Product screenshot" className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10 shadow-2xl" height="1442" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=2670" width="2432"/>
</div>
<div aria-hidden="true" className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"></div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-[#0B0F19] py-24 sm:py-32 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#0043ff] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
<div className="mx-auto max-w-2xl lg:mx-0 reveal">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">What We Can Build For You</h2>
<p className="mt-6 text-lg leading-8 text-gray-400">Our multidisciplinary team of veteran software developers and designers working on the edge of digital technologies.</p>
</div>
<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
<div className="reveal flex flex-col group cursor-default">
<dt className="text-base font-semibold leading-7 text-white flex items-center gap-3 group-hover:text-blue-300 transition-colors">
<i className="h-5 w-5 text-[#0043ff] group-hover:scale-110 transition-transform" data-lucide="cloud"></i> SaaS Products
                            </dt>
<dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-400 group-hover:text-gray-300 transition-colors">
<p className="flex-auto">Software as a service to help you generate recurring revenue from your ideas.</p>
</dd>
</div>
<div className="reveal flex flex-col group cursor-default delay-75">
<dt className="text-base font-semibold leading-7 text-white flex items-center gap-3 group-hover:text-blue-300 transition-colors">
<i className="h-5 w-5 text-[#0043ff] group-hover:scale-110 transition-transform" data-lucide="monitor"></i> Web Applications
                            </dt>
<dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-400 group-hover:text-gray-300 transition-colors">
<p className="flex-auto">Intuitive, fast-loading web applications for multiple industries.</p>
</dd>
</div>
<div className="reveal flex flex-col group cursor-default delay-150">
<dt className="text-base font-semibold leading-7 text-white flex items-center gap-3 group-hover:text-blue-300 transition-colors">
<i className="h-5 w-5 text-[#0043ff] group-hover:scale-110 transition-transform" data-lucide="smartphone"></i> Mobile Applications
                            </dt>
<dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-400 group-hover:text-gray-300 transition-colors">
<p className="flex-auto">Native (iOS, Android) or hybrid mobile apps and optimization of existing apps.</p>
</dd>
</div>
<div className="reveal flex flex-col group cursor-default">
<dt className="text-base font-semibold leading-7 text-white flex items-center gap-3 group-hover:text-blue-300 transition-colors">
<i className="h-5 w-5 text-[#0043ff] group-hover:scale-110 transition-transform" data-lucide="database"></i> Legacy Enhancement
                            </dt>
<dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-400 group-hover:text-gray-300 transition-colors">
<p className="flex-auto">Improving current products or creating new ones on the basis of existing frameworks.</p>
</dd>
</div>
<div className="reveal flex flex-col group cursor-default delay-75">
<dt className="text-base font-semibold leading-7 text-white flex items-center gap-3 group-hover:text-blue-300 transition-colors">
<i className="h-5 w-5 text-[#0043ff] group-hover:scale-110 transition-transform" data-lucide="bot"></i> AI &amp; LLM Integration
                            </dt>
<dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-400 group-hover:text-gray-300 transition-colors">
<p className="flex-auto">Integrate Large Language Models (LLM) to leverage AI technology for your products.</p>
</dd>
</div>
<div className="reveal flex flex-col group cursor-default delay-150">
<dt className="text-base font-semibold leading-7 text-white flex items-center gap-3 group-hover:text-blue-300 transition-colors">
<i className="h-5 w-5 text-[#0043ff] group-hover:scale-110 transition-transform" data-lucide="cpu"></i> Smart Tech Solutions
                            </dt>
<dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-400 group-hover:text-gray-300 transition-colors">
<p className="flex-auto">AR/VR applications, IoT or blockchain solutions to keep you ahead.</p>
</dd>
</div>
</dl>
</div>
</div>
</div>

<div className="bg-white py-24 sm:py-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="reveal">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">About Us</h2>
<p className="mt-6 text-lg text-gray-600">
                            At Zore.Digital, we have a close-knit, geographically distributed core team of UX designers and developers from Europe and Ukraine. With 50+ years of combined experience, we foster a culture where founders and creators share common values.
                        </p>
<p className="mt-4 text-base text-gray-600">
                            We care about each other and inspire to change the world even when it seems impossible.
                        </p>
<div className="mt-8 border-l-4 border-[#0043ff] pl-6 italic text-gray-500">
                            "Code is just the tool. Impact is the goal."
                        </div>
</div>
<div className="grid grid-cols-2 gap-4 reveal delay-200">
<img alt="Team working" className="rounded-xl shadow-lg object-cover h-48 w-full transform transition-transform hover:scale-105 duration-500" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<img alt="Meeting" className="rounded-xl shadow-lg object-cover h-48 w-full translate-y-8 transform transition-transform hover:scale-105 duration-500 hover:translate-y-7" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>
</div>

<div className="bg-gray-50 py-24 sm:py-32 border-y border-gray-100">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl lg:text-center mb-16 reveal">
<h2 className="text-base font-semibold leading-7 text-[#0043ff] uppercase tracking-wide">Process</h2>
<p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Get Started with Zore.Digital</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="reveal bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-900/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
<div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-[#0043ff] transition-colors duration-300">
<i className="h-6 w-6 text-[#0043ff] group-hover:text-white transition-colors" data-lucide="message-square"></i>
</div>
<h3 className="text-lg font-semibold text-gray-900">1. Free Consultation</h3>
<p className="mt-2 text-sm text-gray-600">We meet to discuss your ideas and how we can help you build custom software.</p>
</div>

<div className="reveal bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-900/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group delay-75">
<div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-[#0043ff] transition-colors duration-300">
<i className="h-6 w-6 text-[#0043ff] group-hover:text-white transition-colors" data-lucide="search"></i>
</div>
<h3 className="text-lg font-semibold text-gray-900">2. Discovery Session</h3>
<p className="mt-2 text-sm text-gray-600">We test and validate your ideas to make sure your project is viable.</p>
</div>

<div className="reveal bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-900/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group delay-150">
<div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-[#0043ff] transition-colors duration-300">
<i className="h-6 w-6 text-[#0043ff] group-hover:text-white transition-colors" data-lucide="pen-tool"></i>
</div>
<h3 className="text-lg font-semibold text-gray-900">3. UI/UX Design</h3>
<p className="mt-2 text-sm text-gray-600">We create wireframes and clickable investor-grade prototypes.</p>
</div>

<div className="reveal bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-900/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
<div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-[#0043ff] transition-colors duration-300">
<i className="h-6 w-6 text-[#0043ff] group-hover:text-white transition-colors" data-lucide="code"></i>
</div>
<h3 className="text-lg font-semibold text-gray-900">4. Development</h3>
<p className="mt-2 text-sm text-gray-600">Agile implementation to ensure transparency and a superior end product.</p>
</div>

<div className="reveal bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-900/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group delay-75">
<div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-[#0043ff] transition-colors duration-300">
<i className="h-6 w-6 text-[#0043ff] group-hover:text-white transition-colors" data-lucide="life-buoy"></i>
</div>
<h3 className="text-lg font-semibold text-gray-900">5. Support</h3>
<p className="mt-2 text-sm text-gray-600">Continuous support to ensure your custom-built software functions seamlessly.</p>
</div>
</div>
</div>
</div>

<div className="bg-white py-24 sm:py-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="max-w-3xl mb-16 reveal">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Industries We Work With</h2>
<p className="mt-4 text-gray-500">Catering to diverse niches in innovative and creative ways.</p>
</div>
<div className="space-y-24">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal">
<div className="order-2 lg:order-1">
<h3 className="text-2xl font-medium text-gray-900">Logistics and Transportation</h3>
<p className="mt-4 text-base leading-7 text-gray-600">Solutions to optimize fleet management, warehousing, order processing and other logistics-related functions.</p>
<a className="mt-4 inline-flex items-center text-sm font-semibold text-[#0043ff] hover:underline" href="#">Explore Logistics <i className="ml-1 h-4 w-4" data-lucide="arrow-right"></i></a>
</div>
<div className="order-1 lg:order-2 rounded-2xl overflow-hidden bg-gray-100 hover:shadow-2xl transition-shadow duration-500">
<img alt="Logistics" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal">
<div className="order-1 lg:order-1 rounded-2xl overflow-hidden bg-gray-100 hover:shadow-2xl transition-shadow duration-500">
<img alt="Healthcare" className="w-full h-64 object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="order-2 lg:order-2">
<h3 className="text-2xl font-medium text-gray-900">Healthcare</h3>
<p className="mt-4 text-base leading-7 text-gray-600">Streamlined patient experience and full compliance with medical data regulations for providers and telemedicine.</p>
<a className="mt-4 inline-flex items-center text-sm font-semibold text-[#0043ff] hover:underline" href="#">Explore Healthcare <i className="ml-1 h-4 w-4" data-lucide="arrow-right"></i></a>
</div>
</div>
</div>
</div>
</div>

<div className="bg-gray-50 py-24 sm:py-32 border-t border-gray-100">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<h2 className="text-center text-lg font-semibold leading-8 text-gray-900 reveal">Trusted by innovative teams</h2>
<div className="reveal delay-100 mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
<span className="col-span-2 lg:col-span-1 max-h-12 w-full object-contain text-center font-bold text-gray-400 text-xl tracking-tight opacity-60 hover:opacity-100 transition-opacity cursor-default">TRANSISTOR</span>
<span className="col-span-2 lg:col-span-1 max-h-12 w-full object-contain text-center font-bold text-gray-400 text-xl tracking-tight opacity-60 hover:opacity-100 transition-opacity cursor-default">Reform</span>
<span className="col-span-2 lg:col-span-1 max-h-12 w-full object-contain text-center font-bold text-gray-400 text-xl tracking-tight opacity-60 hover:opacity-100 transition-opacity cursor-default">TUPLE</span>
<span className="col-span-2 lg:col-span-1 max-h-12 w-full object-contain text-center font-bold text-gray-400 text-xl tracking-tight opacity-60 hover:opacity-100 transition-opacity cursor-default">SavvyCal</span>
<span className="col-span-2 lg:col-span-1 max-h-12 w-full object-contain text-center font-bold text-gray-400 text-xl tracking-tight opacity-60 hover:opacity-100 transition-opacity cursor-default">STATAMIC</span>
</div>
</div>
</div>

<section className="bg-[#0B0F19] py-24 sm:py-32 relative overflow-hidden">
<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="flex flex-col reveal">
<div className="text-[#0043ff] mb-6"><i className="h-8 w-8" data-lucide="quote"></i></div>
<blockquote className="text-lg font-medium leading-8 text-white">
                            "We needed to scale our successful web product to mobile platforms quickly, and Zore.Digital was the perfect partner. They delivered a high-quality cross-platform MVP in just 10 weeks."
                        </blockquote>
<div className="mt-8 flex items-center gap-x-4">
<div className="h-10 w-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 border border-gray-500"></div>
<div className="text-sm">
<div className="font-semibold text-white">Yevhenii Kozlov</div>
<div className="text-gray-400">CEO of Bookimed</div>
</div>
</div>
</div>
<div className="flex flex-col border-t border-white/10 pt-16 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0 reveal delay-200">
<div className="text-[#0043ff] mb-6"><i className="h-8 w-8" data-lucide="quote"></i></div>
<blockquote className="text-lg font-medium leading-8 text-white">
                            "Finding a partner who understands the need for speed was everything. Zore.Digital team grasped our concept for the Business Match social app immediately and delivered an exceptional MVP."
                        </blockquote>
<div className="mt-8 flex items-center gap-x-4">
<div className="h-10 w-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 border border-gray-500"></div>
<div className="text-sm">
<div className="font-semibold text-white">Andrii Ostapchuk</div>
<div className="text-gray-400">CEO of Young Business Club</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="bg-white py-24 sm:py-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl reveal">FAQs</h2>
<div className="mt-16 max-w-2xl lg:max-w-none">
<dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
<div className="reveal">
<dt className="text-base font-semibold leading-7 text-gray-900">Why does a startup need a software development company?</dt>
<dd className="mt-2 text-base leading-7 text-gray-600">Engaging an MVP development company provides startups with the necessary expertise to validate the core idea, build prototypes for investors and develop a Minimum Viable Product quickly.</dd>
</div>
<div className="reveal delay-75">
<dt className="text-base font-semibold leading-7 text-gray-900">Should I hire a developer or a software development company?</dt>
<dd className="mt-2 text-base leading-7 text-gray-600">Hiring a web application development agency offers the benefit of working with a close-knit team of experts leveraging their experience in building MVPs and full-scale products.</dd>
</div>
<div className="reveal delay-150">
<dt className="text-base font-semibold leading-7 text-gray-900">How to choose a software development company?</dt>
<dd className="mt-2 text-base leading-7 text-gray-600">Check their process, experience and testimonials. Get in touch with their team to learn more about how they can help you implement your ideas.</dd>
</div>
<div className="reveal delay-200">
<dt className="text-base font-semibold leading-7 text-gray-900">How much does it cost?</dt>
<dd className="mt-2 text-base leading-7 text-gray-600">Costs depend on scope and complexity. Reach out to our team for a free consultation to get an accurate estimate for your custom software.</dd>
</div>
</dl>
</div>
</div>
</div>

<div className="bg-[#0043ff] relative overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-shimmer"></div>
<div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 relative z-10">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl text-balance reveal">
                    Launch Your App with Us
                </h2>
<div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-blue-100 lg:max-w-none lg:grid-cols-2 reveal delay-100">
<p>Startups and entrepreneurs leverage our expertise to build MVPs for SaaS applications, web and mobile apps. We help you streamline product launches and secure investor confidence.</p>
<p>Our strategy is programmed for the rapid development of bold ideas. Find out more about how we can help you implement your ideas.</p>
</div>
<div className="mt-10 flex gap-x-6 reveal delay-200">
<a className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#0043ff] shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transform transition-transform hover:scale-105" href="https://calendly.com/av-zore/30min">
                        Book a Free Consultation
                    </a>
</div>
</div>
</div>
</main>
<footer className="bg-white border-t border-gray-100">
<div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 lg:px-8">
<p className="text-center text-xs leading-5 text-gray-500">© 2024 Zore.Digital. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
