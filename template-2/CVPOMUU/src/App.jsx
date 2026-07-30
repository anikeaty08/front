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
      

<header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-neutral-900/60 border-b border-neutral-800" id="navbar">
<nav className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8 py-3">

<a className="text-2xl tracking-tight font-semibold text-neutral-100 hover:text-[#C1FC02] transition-colors" href="#home">PD</a>

<ul className="hidden md:flex gap-6 text-sm font-medium">
<li><a className="nav-link" href="#services">Services</a></li>
<li><a className="nav-link" href="#projects">Projects</a></li>
<li><a className="nav-link" href="#process">Process</a></li>
<li><a className="nav-link" href="#about">About</a></li>
<li><a className="nav-link" href="#blog">Blog</a></li>
<li><a className="nav-link" href="#contact">Contact</a></li>
</ul>

<a className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#C1FC02]/40 hover:bg-[#C1FC02]/10 transition" href="#contact">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="rocket"></i><span>Get Started</span>
</a>

<button className="md:hidden p-2 rounded-md hover:bg-neutral-800/40" id="menuBtn">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i>
</button>
</nav>

<div className="hidden md:hidden px-4 pb-4" id="mobileMenu">
<ul className="flex flex-col gap-4 text-sm font-medium">
<li><a className="nav-link" href="#services">Services</a></li>
<li><a className="nav-link" href="#projects">Projects</a></li>
<li><a className="nav-link" href="#process">Process</a></li>
<li><a className="nav-link" href="#about">About</a></li>
<li><a className="nav-link" href="#blog">Blog</a></li>
<li><a className="nav-link" href="#contact">Contact</a></li>
</ul>
</div>
</header>

<div className="h-16"></div>

<section className="relative overflow-hidden" id="home">

<div className="max-w-4xl mx-auto px-4 text-center py-24 sm:py-32">
<h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-neutral-50 animate-fadeInUp">Crafting <span className="text-[#C1FC02]">AI-Driven</span> Web Experiences</h1>
<p className="animate-fadeInUp delay-75 text-lg text-neutral-400 mt-6">PixelDrafters blends artificial intelligence with award-winning design to build products that stand out and scale.</p>
<a className="mt-10 inline-flex items-center gap-2 px-8 py-3 rounded-md bg-[#C1FC02] text-neutral-900 font-semibold hover:bg-[#c1fc02]/80 transition animate-fadeInUp delay-150" href="#services">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="sparkle"></i> Get Started
      </a>
</div>

<div className="absolute inset-0 -z-10">
<div className="absolute -top-24 -left-24 w-96 h-96 bg-[#C1FC02]/10 blur-3xl rounded-full"></div>
<div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-[#C1FC02]/5 blur-2xl rounded-full"></div>
</div>

<div className="border-t border-neutral-800 py-10">
<div className="max-w-5xl mx-auto px-4 flex flex-wrap items-center justify-center gap-8 opacity-80">
<span className="text-xs uppercase tracking-widest text-neutral-500">Featured in</span>
<span className="text-xl font-semibold">TechCrunch</span>
<span className="text-xl font-semibold">ProductHunt</span>
<span className="text-xl font-semibold">Forbes</span>
<span className="text-xl font-semibold">HackerNews</span>
</div>
</div>

<div className="max-w-6xl mx-auto px-4 py-20">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-50 mb-12 text-center">What our partners say</h2>
<div className="flex gap-8 overflow-hidden" id="testimonialTrack">

<div className="min-w-[20rem] max-w-sm bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow hover:scale-[1.03] transition">
<img alt="" className="w-16 h-16 object-cover rounded-full mb-4" src="https://images.unsplash.com/photo-1615464684446-95b73066d285?w=320&q=80" />
<p className="text-neutral-300 mb-4">“PixelDrafters tripled our conversion rate in under 6 weeks.”</p>
<span className="text-sm font-medium text-[#C1FC02]">Sarah P.• Growth @ BloomApp</span>
</div>

<div className="min-w-[20rem] max-w-sm bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow hover:scale-[1.03] transition">
<img alt="" className="w-16 h-16 object-cover rounded-full mb-4" src="https://images.unsplash.com/photo-1474176857210-7287d38d27c6?w=320&q=80" />
<p className="text-neutral-300 mb-4">“Their AI-driven A/B testing blew my mind.”</p>
<span className="text-sm font-medium text-[#C1FC02]">Mark Z.• CMO @ Quantify</span>
</div>
<div className="min-w-[20rem] max-w-sm bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow hover:scale-[1.03] transition">
<img alt="" className="w-16 h-16 object-cover rounded-full mb-4" src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=320&q=80" />
<p className="text-neutral-300 mb-4">“A seamless blend of design and tech excellence.”</p>
<span className="text-sm font-medium text-[#C1FC02]">Linda K.• Founder @ Stellar</span>
</div>
</div>
</div>

<div className="max-w-6xl mx-auto px-4 py-20" id="processCards">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-50 text-center mb-12">Our Process</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="group bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-[#C1FC02] transition">
<i className="w-8 h-8 stroke-[1.5] text-[#C1FC02] mb-4" data-lucide="search"></i>
<h3 className="font-semibold mb-2">Research</h3>
<p className="text-neutral-400 text-sm">Deep-dive into data and user needs.</p>
</div>
<div className="group bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-[#C1FC02] transition">
<i className="w-8 h-8 stroke-[1.5] text-[#C1FC02] mb-4" data-lucide="pen-tool"></i>
<h3 className="font-semibold mb-2">Create</h3>
<p className="text-neutral-400 text-sm">AI-assisted ideation & prototyping.</p>
</div>
<div className="group bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-[#C1FC02] transition">
<i className="w-8 h-8 stroke-[1.5] text-[#C1FC02] mb-4" data-lucide="cpu"></i>
<h3 className="font-semibold mb-2">Application</h3>
<p className="text-neutral-400 text-sm">Full-stack build with best-in-class tech.</p>
</div>
<div className="group bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-[#C1FC02] transition">
<i className="w-8 h-8 stroke-[1.5] text-[#C1FC02] mb-4" data-lucide="send"></i>
<h3 className="font-semibold mb-2">Delivery</h3>
<p className="text-neutral-400 text-sm">Launch, iterate, & scale with confidence.</p>
</div>
</div>
</div>

<div className="max-w-6xl mx-auto px-4 py-20 border-y border-neutral-800">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-50 text-center mb-12">Why PixelDrafters</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:-translate-y-1 transition">
<i className="w-7 h-7 stroke-[1.5] text-[#C1FC02] mb-3" data-lucide="zap"></i>
<h3 className="font-semibold mb-2">AI Superpowers</h3>
<p className="text-sm text-neutral-400">Machine-learning insights that outpace competition.</p>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:-translate-y-1 transition">
<i className="w-7 h-7 stroke-[1.5] text-[#C1FC02] mb-3" data-lucide="palette"></i>
<h3 className="font-semibold mb-2">Pixel-Perfect</h3>
<p className="text-sm text-neutral-400">Award-winning UI that converts & delights.</p>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:-translate-y-1 transition">
<i className="w-7 h-7 stroke-[1.5] text-[#C1FC02] mb-3" data-lucide="trending-up"></i>
<h3 className="font-semibold mb-2">Growth Obsessed</h3>
<p className="text-sm text-neutral-400">Data-driven CRO & growth marketing baked in.</p>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:-translate-y-1 transition">
<i className="w-7 h-7 stroke-[1.5] text-[#C1FC02] mb-3" data-lucide="shield-check"></i>
<h3 className="font-semibold mb-2">Secure by Design</h3>
<p className="text-sm text-neutral-400">Enterprise-grade security & compliance standards.</p>
</div>
</div>
</div>

<div className="max-w-4xl mx-auto px-4 py-24 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-neutral-50 mb-6">Our Mission</h2>
<p className="text-xl text-neutral-400">Empower ambitious brands to unlock exponential digital growth through the fusion of artificial intelligence and world-class design.</p>
</div>

<div className="max-w-6xl mx-auto px-4 py-24" id="pricing">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-50 text-center mb-12">Pricing Plans</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 flex flex-col hover:shadow-lg transition">
<h3 className="font-semibold text-xl mb-4">Starter</h3>
<p className="text-4xl font-semibold mb-4">$0</p>
<ul className="space-y-2 text-sm text-neutral-400 flex-1">
<li>Basic AI audit</li>
<li>1 landing page</li>
<li>Email support</li>
</ul>
<a className="mt-6 inline-flex justify-center items-center px-4 py-2 bg-neutral-800 rounded-md hover:bg-neutral-700 transition" href="#contact">Choose</a>
</div>

<div className="relative bg-neutral-900 border-2 border-[#C1FC02] rounded-xl p-8 flex flex-col hover:shadow-xl transition scale-105">
<span className="absolute -top-3 right-6 bg-[#C1FC02] text-neutral-900 text-xs font-semibold px-3 py-1 rounded-full">Recommended</span>
<h3 className="font-semibold text-xl mb-4">Pro</h3>
<p className="text-4xl font-semibold mb-4">$299</p>
<ul className="space-y-2 text-sm text-neutral-400 flex-1">
<li>Full website (up to 10 pages)</li>
<li>AI copywriting</li>
<li>A/B testing suite</li>
<li>Priority support</li>
</ul>
<a className="mt-6 inline-flex justify-center items-center px-4 py-2 bg-[#C1FC02] text-neutral-900 rounded-md hover:bg-[#c1fc02]/80 transition" href="#contact">Choose</a>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 flex flex-col hover:shadow-lg transition">
<h3 className="font-semibold text-xl mb-4">Enterprise</h3>
<p className="text-4xl font-semibold mb-4">Custom</p>
<ul className="space-y-2 text-sm text-neutral-400 flex-1">
<li>Unlimited pages & features</li>
<li>Dedicated AI engineer</li>
<li>24/7 white-glove support</li>
</ul>
<a className="mt-6 inline-flex justify-center items-center px-4 py-2 bg-neutral-800 rounded-md hover:bg-neutral-700 transition" href="#contact">Contact Sales</a>
</div>
</div>
</div>

<div className="max-w-4xl mx-auto px-4 py-24">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-50 text-center mb-12">FAQs</h2>
<div className="space-y-4">

<details className="group border border-neutral-800 rounded-lg p-4">
<summary className="flex justify-between items-center cursor-pointer font-medium">How long does a typical project take? <i className="w-4 h-4 stroke-[1.5] group-open:rotate-180 transition" data-lucide="chevron-down"></i></summary>
<p className="mt-2 text-sm text-neutral-400">Most projects launch within 4-6 weeks, depending on scope.</p>
</details>

<details className="group border border-neutral-800 rounded-lg p-4">
<summary className="flex justify-between items-center cursor-pointer font-medium">Do you offer post-launch support? <i className="w-4 h-4 stroke-[1.5] group-open:rotate-180 transition" data-lucide="chevron-down"></i></summary>
<p className="mt-2 text-sm text-neutral-400">Yes, every plan includes 30 days of free support. Ongoing retainers available.</p>
</details>
<details className="group border border-neutral-800 rounded-lg p-4">
<summary className="flex justify-between items-center cursor-pointer font-medium">Is my data secure? <i className="w-4 h-4 stroke-[1.5] group-open:rotate-180 transition" data-lucide="chevron-down"></i></summary>
<p className="mt-2 text-sm text-neutral-400">We follow industry best practices with encryption, backups, and compliance checks.</p>
</details>
<details className="group border border-neutral-800 rounded-lg p-4">
<summary className="flex justify-between items-center cursor-pointer font-medium">What stack do you use? <i className="w-4 h-4 stroke-[1.5] group-open:rotate-180 transition" data-lucide="chevron-down"></i></summary>
<p className="mt-2 text-sm text-neutral-400">Modern JS/TS frameworks, serverless, and headless CMSs—always project-appropriate.</p>
</details>
<details className="group border border-neutral-800 rounded-lg p-4">
<summary className="flex justify-between items-center cursor-pointer font-medium">Can you migrate my existing site? <i className="w-4 h-4 stroke-[1.5] group-open:rotate-180 transition" data-lucide="chevron-down"></i></summary>
<p className="mt-2 text-sm text-neutral-400">Absolutely, without losing SEO equity or uptime.</p>
</details>
<details className="group border border-neutral-800 rounded-lg p-4">
<summary className="flex justify-between items-center cursor-pointer font-medium">Do you work internationally? <i className="w-4 h-4 stroke-[1.5] group-open:rotate-180 transition" data-lucide="chevron-down"></i></summary>
<p className="mt-2 text-sm text-neutral-400">Yes, our team is distributed across 5+ time zones.</p>
</details>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 py-24" id="services">
<h2 className="text-4xl font-semibold tracking-tight text-neutral-50 mb-12 text-center">Services</h2>
<div className="grid md:grid-cols-2 gap-8 mb-20">
<div>
<h3 className="text-2xl font-semibold mb-4 text-[#C1FC02]">Web Development</h3>
<p className="text-neutral-400 mb-6">Custom websites, PWAs, and e-commerce platforms engineered with performance and scale in mind.</p>
<canvas className="w-full h-60" id="webChart"></canvas>
</div>
<div>
<h3 className="text-2xl font-semibold mb-4 text-[#C1FC02]">AI-Powered Marketing</h3>
<p className="text-neutral-400 mb-6">Predictive analytics and dynamic content generation to maximize ROI.</p>
<ul className="space-y-2 text-sm">
<li className="flex gap-2"><i className="w-4 h-4 stroke-[1.5] text-[#C1FC02]" data-lucide="check"></i> Automated customer segments</li>
<li className="flex gap-2"><i className="w-4 h-4 stroke-[1.5] text-[#C1FC02]" data-lucide="check"></i> 24/7 conversational chatbots</li>
<li className="flex gap-2"><i className="w-4 h-4 stroke-[1.5] text-[#C1FC02]" data-lucide="check"></i> Multi-channel attribution</li>
</ul>
</div>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-[#C1FC02] transition">
<i className="w-6 h-6 stroke-[1.5] text-[#C1FC02] mb-4" data-lucide="layers"></i>
<h4 className="font-semibold mb-2">Headless CMS</h4>
<p className="text-sm text-neutral-400">Flexible content architecture for multi-device publishing.</p>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-[#C1FC02] transition">
<i className="w-6 h-6 stroke-[1.5] text-[#C1FC02] mb-4" data-lucide="globe"></i>
<h4 className="font-semibold mb-2">SEO & CRO</h4>
<p className="text-sm text-neutral-400">AI-powered keyword insights and conversion optimization.</p>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-[#C1FC02] transition">
<i className="w-6 h-6 stroke-[1.5] text-[#C1FC02] mb-4" data-lucide="credit-card"></i>
<h4 className="font-semibold mb-2">E-Commerce</h4>
<p className="text-sm text-neutral-400">Scalable storefronts, secure payments, and analytics.</p>
</div>
</div>
</section>

<section className="bg-neutral-950 border-t border-neutral-800" id="projects">
<div className="max-w-7xl mx-auto px-4 py-24">
<h2 className="text-4xl font-semibold tracking-tight text-neutral-50 mb-16 text-center">Projects</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group relative rounded-xl overflow-hidden border border-neutral-800" href="#">
<img alt="" className="w-full h-60 object-cover group-hover:scale-110 transition" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
<div className="absolute bottom-4 left-4">
<h3 className="font-semibold text-lg">Orbit SaaS</h3>
<p className="text-sm text-neutral-400">Enterprise dashboard revamp</p>
</div>
</a>
<a className="group relative rounded-xl overflow-hidden border border-neutral-800" href="#">
<img alt="" className="w-full h-60 object-cover group-hover:scale-110 transition" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
<div className="absolute bottom-4 left-4">
<h3 className="font-semibold text-lg">Nova E-Com</h3>
<p className="text-sm text-neutral-400">AI-driven storefront</p>
</div>
</a>
<a className="group relative rounded-xl overflow-hidden border border-neutral-800" href="#">
<img alt="" className="w-full h-60 object-cover group-hover:scale-110 transition" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
<div className="absolute bottom-4 left-4">
<h3 className="font-semibold text-lg">Lumen Analytics</h3>
<p className="text-sm text-neutral-400">Realtime data pipeline</p>
</div>
</a>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 py-24" id="process">
<h2 className="text-4xl font-semibold tracking-tight text-neutral-50 mb-16 text-center">The PixelDrafters Framework</h2>

<ol className="relative border-l border-neutral-800 pl-6 space-y-12">
<li>
<div className="absolute -left-[9px] top-0 bg-[#C1FC02] w-4 h-4 rounded-full border-4 border-neutral-950"></div>
<h3 className="font-semibold mb-2">Discovery Sprint</h3>
<p className="text-neutral-400 text-sm">Stakeholder interviews, data scraping & AI analysis.</p>
</li>
<li>
<div className="absolute -left-[9px] bg-[#C1FC02] w-4 h-4 rounded-full border-4 border-neutral-950"></div>
<h3 className="font-semibold mb-2">Design & Prototype</h3>
<p className="text-neutral-400 text-sm">Lo-fi to hi-fi flows using AI-assisted design systems.</p>
</li>
<li>
<div className="absolute -left-[9px] bg-[#C1FC02] w-4 h-4 rounded-full border-4 border-neutral-950"></div>
<h3 className="font-semibold mb-2">Iterative Build</h3>
<p className="text-neutral-400 text-sm">Agile sprints, continuous integration & QA.</p>
</li>
<li>
<div className="absolute -left-[9px] bg-[#C1FC02] w-4 h-4 rounded-full border-4 border-neutral-950"></div>
<h3 className="font-semibold mb-2">Launch & Scale</h3>
<p className="text-neutral-400 text-sm">Performance monitoring, A/B testing, and growth loops.</p>
</li>
</ol>
</section>

<section className="bg-neutral-950 border-t border-neutral-800" id="about">
<div className="max-w-6xl mx-auto px-4 py-24">
<h2 className="text-4xl font-semibold tracking-tight text-neutral-50 mb-12 text-center">About Us</h2>
<p className="max-w-3xl mx-auto text-neutral-400 text-center mb-16">We’re a collective of engineers, designers, and growth hackers driven by a single obsession: building the future faster with AI.</p>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
<div className="flex flex-col items-center">
<img alt="" className="w-32 h-32 rounded-full object-cover mb-4" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<h3 className="font-semibold">Ava Sparks</h3>
<span className="text-sm text-neutral-400">CEO & Co-Founder</span>
</div>
<div className="flex flex-col items-center">
<img alt="" className="w-32 h-32 rounded-full object-cover mb-4" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<h3 className="font-semibold">Luca Reyes</h3>
<span className="text-sm text-neutral-400">CTO</span>
</div>
<div className="flex flex-col items-center">
<img alt="" className="w-32 h-32 rounded-full object-cover mb-4" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<h3 className="font-semibold">Maya Chen</h3>
<span className="text-sm text-neutral-400">Head of Design</span>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-4 py-24" id="contact">
<h2 className="text-4xl font-semibold tracking-tight text-neutral-50 mb-12 text-center">Let’s Build Something Incredible</h2>
<form className="grid sm:grid-cols-2 gap-6">
<input className="bg-neutral-900 border border-neutral-800 rounded-md p-3 focus:ring-2 focus:ring-[#C1FC02]" placeholder="Name" type="text" />
<input className="bg-neutral-900 border border-neutral-800 rounded-md p-3 focus:ring-2 focus:ring-[#C1FC02]" placeholder="Email" type="email" />
<input className="bg-neutral-900 border border-neutral-800 rounded-md p-3 focus:ring-2 focus:ring-[#C1FC02]" placeholder="Company" type="text" />
<input className="bg-neutral-900 border border-neutral-800 rounded-md p-3 focus:ring-2 focus:ring-[#C1FC02]" placeholder="Budget (USD)" type="text" />
<textarea className="sm:col-span-2 bg-neutral-900 border border-neutral-800 rounded-md p-3 focus:ring-2 focus:ring-[#C1FC02]" placeholder="Tell us about your project" rows="5"></textarea>
<button className="sm:col-span-2 inline-flex justify-center items-center gap-2 px-8 py-3 bg-[#C1FC02] text-neutral-900 font-semibold rounded-md hover:bg-[#c1fc02]/80 transition" type="submit">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="send"></i> Send Message
      </button>
</form>
</section>

<section className="bg-neutral-950 border-t border-neutral-800" id="blog">
<div className="max-w-6xl mx-auto px-4 py-24">
<h2 className="text-4xl font-semibold tracking-tight text-neutral-50 mb-16 text-center">Insights & Resources</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-[#C1FC02] transition" href="#post-ai-ux">
<img className="w-full h-40 object-cover group-hover:scale-110 transition" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="p-5">
<h3 className="font-semibold mb-2">Designing with AI: UX in 2024</h3>
<p className="text-xs text-neutral-400">5 min read • Jan 12, Continuing…</p></div></a></div></div></section>
    </>
  );
}
