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



        // Simple Page Routing
        function showPage(pageId) {
            const pages = ['home', 'work', 'about', 'services', 'contact', 'blog'];
            pages.forEach(p => {
                const el = document.getElementById('page-' + p);
                if(el) el.classList.add('hidden');
            });
            const activePage = document.getElementById('page-' + pageId);
            if(activePage) {
                activePage.classList.remove('hidden');
                window.scrollTo(0,0);
            }
        }

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 80) {
                nav.classList.add('glass-nav');
                nav.classList.add('py-3');
            } else {
                nav.classList.remove('glass-nav');
                nav.classList.remove('py-3');
            }
        });

        // Mobile Menu
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        }

        // Add reveal animations on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100');
                    entry.target.classList.remove('translate-y-10');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('section > div').forEach(section => {
            section.classList.add('transition-all', 'duration-700', 'translate-y-10', 'opacity-0');
            observer.observe(section);
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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4" id="navbar">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<a className="text-2xl serif font-semibold tracking-tighter text-[#1A1A2E]" href="#" onclick="showPage('home')">OliviaTech</a>
<div className="hidden md:flex items-center space-x-10 text-sm font-medium">
<a className="hover:text-[#E8652A] transition-colors" href="#" onclick="showPage('work')">Work</a>
<a className="hover:text-[#E8652A] transition-colors" href="#" onclick="showPage('services')">Services</a>
<a className="hover:text-[#E8652A] transition-colors" href="#" onclick="showPage('about')">About</a>
<a className="hover:text-[#E8652A] transition-colors" href="#" onclick="showPage('blog')">Blog</a>
<a className="hover:text-[#E8652A] transition-colors" href="#" onclick="showPage('contact')">Contact</a>
<a className="amber-cta text-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest" href="#" onclick="showPage('contact')">Start a Project</a>
</div>

<button className="md:hidden text-[#1A1A2E]" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-[#FAF9F6] z-[60] flex-col items-center justify-center space-y-8 text-3xl serif hidden" id="mobile-menu">
<button className="absolute top-8 right-8" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
<a href="#" onclick="showPage('home'); toggleMobileMenu()">Home</a>
<a href="#" onclick="showPage('work'); toggleMobileMenu()">Work</a>
<a href="#" onclick="showPage('services'); toggleMobileMenu()">Services</a>
<a href="#" onclick="showPage('about'); toggleMobileMenu()">About</a>
<a href="#" onclick="showPage('contact'); toggleMobileMenu()">Contact</a>
</div>

<main id="content-area">

<section className="page-fade" id="page-home">

<section className="min-h-screen flex flex-col justify-center pt-20 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto w-full text-center md:text-left">
<p className="text-[11px] uppercase tracking-[0.1em] text-[#E8652A] font-semibold mb-6">For Founders &amp; Growing Startups</p>
<h1 className="text-5xl md:text-7xl leading-tight tracking-tight mb-8 max-w-4xl">
                        Your product is ready.<br/>
<span className="text-[#E8652A]/10 italic">Your digital presence isn't.</span>
</h1>
<p className="text-base md:text-lg text-[#4B5563] max-w-xl mb-10 leading-relaxed">
                        Most startups have a great idea but a slow website, a confusing app, and a checkout flow that leaks revenue. We fix all three — and build what's next.
                    </p>
<div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
<button className="amber-cta text-white px-10 py-4 rounded-full text-sm font-semibold w-full md:w-auto" onclick="showPage('work')">See Our Work</button>
<a className="flex items-center group text-sm font-semibold text-[#1A1A2E]" href="#process">
                            How We Work 
                            <iconify-icon className="ml-2 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="mt-20 marquee relative py-10">
<div className="marquee-content flex space-x-6">
<div className="w-64 h-80 bg-white rounded-2xl shadow-xl border border-[#E5E0D8] p-4 flex-shrink-0 card-lift">
<div className="w-full h-full bg-[#F0EDE8] rounded-lg flex items-center justify-center"><iconify-icon className="text-4xl opacity-20" icon="solar:smartphone-2-linear"></iconify-icon></div>
</div>
<div className="w-80 h-80 bg-white rounded-2xl shadow-xl border border-[#E5E0D8] p-4 flex-shrink-0 card-lift">
<div className="w-full h-full bg-[#F0EDE8] rounded-lg flex items-center justify-center"><iconify-icon className="text-4xl opacity-20" icon="solar:cart-large-linear"></iconify-icon></div>
</div>
<div className="w-96 h-80 bg-white rounded-2xl shadow-xl border border-[#E5E0D8] p-4 flex-shrink-0 card-lift">
<div className="w-full h-full bg-[#F0EDE8] rounded-lg flex items-center justify-center"><iconify-icon className="text-4xl opacity-20" icon="solar:chart-square-linear"></iconify-icon></div>
</div>

<div className="w-64 h-80 bg-white rounded-2xl shadow-xl border border-[#E5E0D8] p-4 flex-shrink-0 card-lift"></div>
<div className="w-80 h-80 bg-white rounded-2xl shadow-xl border border-[#E5E0D8] p-4 flex-shrink-0 card-lift"></div>
<div className="w-96 h-80 bg-white rounded-2xl shadow-xl border border-[#E5E0D8] p-4 flex-shrink-0 card-lift"></div>
</div>
</div>
<p className="text-center italic text-xs py-10 text-[#4B5563]">Scroll to see why 20+ startups chose us over bigger agencies.</p>
</section>

<section className="py-32 px-6 bg-[#F0EDE8]">
<div className="max-w-7xl mx-auto">
<p className="text-[11px] uppercase tracking-[0.1em] text-[#E8652A] font-semibold mb-4">The Problem</p>
<h2 className="text-4xl md:text-5xl tracking-tight mb-16 max-w-2xl">Bad digital products are expensive. You just haven't seen the invoice yet.</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white p-10 border-l-2 border-[#E8652A] card-lift">
<h3 className="text-xl mb-4">Your site loads in 4 seconds.</h3>
<p className="text-sm leading-relaxed">53% of users leave before it finishes. That's not a design problem — it's a revenue problem.</p>
</div>
<div className="bg-white p-10 border-l-2 border-[#E8652A] card-lift">
<h3 className="text-xl mb-4">Your app confuses new users.</h3>
<p className="text-sm leading-relaxed">If someone can't figure out your product in 60 seconds, they don't come back. Ever.</p>
</div>
<div className="bg-white p-10 border-l-2 border-[#E8652A] card-lift">
<h3 className="text-xl mb-4">Your checkout loses 7 in 10 buyers.</h3>
<p className="text-sm leading-relaxed">The average ecommerce cart abandonment rate is 70%. Most of it is fixable with the right build.</p>
</div>
</div>
<p className="text-center italic text-sm mt-16">This is exactly what we were built to solve.</p>
</div>
</section>

<section className="py-32 px-6 bg-[#FAF9F6]">
<div className="max-w-7xl mx-auto">
<p className="text-[11px] uppercase tracking-[0.1em] text-[#E8652A] font-semibold mb-4 text-center">What We Build</p>
<h2 className="text-4xl md:text-5xl tracking-tight mb-24 text-center">Every service is a transformation, not a deliverable.</h2>
<div className="space-y-40">

<div className="flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2 bg-[#F0EDE8] aspect-video rounded-2xl flex items-center justify-center p-12">
<iconify-icon className="opacity-10" icon="solar:clapperboard-edit-linear" width="64"></iconify-icon>
</div>
<div className="w-full md:w-1/2">
<span className="font-mono text-xs text-[#E8652A]">01 /</span>
<h3 className="text-3xl mt-2 mb-4">Websites &amp; Landing Pages</h3>
<p className="text-sm mb-6"><span className="font-semibold text-[#1A1A2E]">From slow generic pages</span> → To fast, trust-building websites that convert visitors.</p>
<ul className="space-y-3 text-sm">
<li className="flex items-center space-x-2"><span className="text-[#E8652A]">—</span> <span>Sub 2s load time</span></li>
<li className="flex items-center space-x-2"><span className="text-[#E8652A]">—</span> <span>Mobile-first responsive design</span></li>
<li className="flex items-center space-x-2"><span className="text-[#E8652A]">—</span> <span>SEO-ready architecture</span></li>
</ul>
<a className="mt-8 inline-block text-xs font-semibold border-b border-[#1A1A2E] pb-1 hover:text-[#E8652A] hover:border-[#E8652A] transition-all" href="#">See examples →</a>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-16">
<div className="w-full md:w-1/2 bg-[#F0EDE8] aspect-video rounded-2xl flex items-center justify-center p-12">
<iconify-icon className="opacity-10" icon="solar:shop-2-linear" width="64"></iconify-icon>
</div>
<div className="w-full md:w-1/2">
<span className="font-mono text-xs text-[#E8652A]">02 /</span>
<h3 className="text-3xl mt-2 mb-4">Ecommerce Apps</h3>
<p className="text-sm mb-6"><span className="font-semibold text-[#1A1A2E]">From leaky checkouts</span> → To smooth buying experiences that increase AOV.</p>
<ul className="space-y-3 text-sm">
<li className="flex items-center space-x-2"><span className="text-[#E8652A]">—</span> <span>Shopify / custom builds</span></li>
<li className="flex items-center space-x-2"><span className="text-[#E8652A]">—</span> <span>Payment gateway integration</span></li>
<li className="flex items-center space-x-2"><span className="text-[#E8652A]">—</span> <span>Cart recovery flows</span></li>
</ul>
<a className="mt-8 inline-block text-xs font-semibold border-b border-[#1A1A2E] pb-1" href="#">See examples →</a>
</div>
</div>
</div>
<div className="mt-32 text-center p-12 bg-[#F0EDE8] rounded-3xl">
<p className="text-lg serif mb-8">Not sure which one you need? Most of our clients start with a conversation.</p>
<button className="amber-cta text-white px-8 py-3 rounded-full text-xs font-semibold" onclick="showPage('contact')">Book a free 30-min call</button>
</div>
</div>
</section>

<section className="bg-[#1A1A2E] text-white py-32 px-6">
<div className="max-w-7xl mx-auto">
<p className="text-[11px] uppercase tracking-[0.1em] text-[#E8652A] font-semibold mb-4">Selected Work</p>
<h2 className="text-4xl md:text-5xl text-white tracking-tight mb-16">Products we've shipped.</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-gray-800 mb-6">
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-all duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="bg-white text-[#1A1A2E] px-6 py-2 rounded-full text-xs font-bold">View Case Study →</span>
</div>
</div>
<h4 className="text-xl serif mb-1">Realtorly</h4>
<p className="text-[#E8652A] font-semibold text-sm mb-2">2× faster load time</p>
<p className="text-xs text-gray-400">Web App · React · Next.js</p>
</div>
<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-gray-800 mb-6"></div>
<h4 className="text-xl serif mb-1">Nova AI</h4>
<p className="text-[#E8652A] font-semibold text-sm mb-2">3,000 users in first month</p>
<p className="text-xs text-gray-400">AI MVP · OpenAI · Tailwind</p>
</div>
<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-gray-800 mb-6"></div>
<h4 className="text-xl serif mb-1">LuxCart</h4>
<p className="text-[#E8652A] font-semibold text-sm mb-2">15% increase in conversion</p>
<p className="text-xs text-gray-400">Ecommerce · Shopify · Liquid</p>
</div>
</div>
<div className="mt-16 text-center">
<button className="text-sm border-b border-white/20 pb-1 hover:border-white transition-all" onclick="showPage('work')">See all 20+ projects →</button>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#FAF9F6]" id="process">
<div className="max-w-7xl mx-auto">
<p className="text-[11px] uppercase tracking-[0.1em] text-[#E8652A] font-semibold mb-4 text-center">How We Work</p>
<h2 className="text-4xl md:text-5xl tracking-tight mb-24 text-center">A process designed around your deadline, not ours.</h2>
<div className="relative">
<div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-[#E5E0D8] -translate-y-1/2"></div>
<div className="grid md:grid-cols-5 gap-12 relative z-10">

<div className="bg-[#FAF9F6] text-center md:text-left">
<div className="w-10 h-10 bg-[#E8652A] text-white rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6 text-sm font-bold">1</div>
<h4 className="text-lg serif mb-3">Discovery</h4>
<p className="text-xs mb-4 text-[#4B5563]">Deep dive into your goals, audience, and competitors.</p>
<p className="text-xs italic text-[#E8652A]">"I finally feel understood."</p>
</div>

<div className="bg-[#FAF9F6] text-center md:text-left">
<div className="w-10 h-10 bg-[#1A1A2E] text-white rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6 text-sm font-bold">2</div>
<h4 className="text-lg serif mb-3">Design</h4>
<p className="text-xs mb-4 text-[#4B5563]">Wireframes, UI design, technical blueprint.</p>
<p className="text-xs italic text-[#E8652A]">"I can see exactly what we're building."</p>
</div>

<div className="bg-[#FAF9F6] text-center md:text-left">
<div className="w-10 h-10 bg-[#1A1A2E] text-white rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6 text-sm font-bold">3</div>
<h4 className="text-lg serif mb-3">Development</h4>
<p className="text-xs mb-4 text-[#4B5563]">Agile sprints with weekly demos and Slack updates.</p>
<p className="text-xs italic text-[#E8652A]">"Progress is visible every week."</p>
</div>

<div className="bg-[#FAF9F6] text-center md:text-left">
<div className="w-10 h-10 bg-[#1A1A2E] text-white rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6 text-sm font-bold">4</div>
<h4 className="text-lg serif mb-3">QA</h4>
<p className="text-xs mb-4 text-[#4B5563]">Device testing, performance audits, bug sweeps.</p>
<p className="text-xs italic text-[#E8652A]">"It just works. On everything."</p>
</div>

<div className="bg-[#FAF9F6] text-center md:text-left">
<div className="w-10 h-10 bg-[#1A1A2E] text-white rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6 text-sm font-bold">5</div>
<h4 className="text-lg serif mb-3">Launch</h4>
<p className="text-xs mb-4 text-[#4B5563]">Deployment, SEO setup, post-launch support.</p>
<p className="text-xs italic text-[#E8652A]">"I can focus on my business."</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#F0EDE8]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2">
<p className="text-[11px] uppercase tracking-[0.1em] text-[#E8652A] font-semibold mb-4">The Person Behind It</p>
<h2 className="text-4xl md:text-5xl tracking-tight mb-8">Hi, I'm Pritam. I've been building on the internet since I could code.</h2>
<div className="space-y-4 text-sm leading-relaxed text-[#4B5563]">
<p>I started OliviaTech because I was tired of watching great startup ideas fail because of bad software. A slow website. A confusing onboarding. An app that looked like it was built in 2015.</p>
<p>Every project we take on, I ask one question: would I be proud to ship this? If the answer is no, we keep building.</p>
<p>We're a small team that punches well above our weight — and we like it that way.</p>
</div>
<div className="flex space-x-6 mt-10">
<a className="text-xl text-[#1A1A2E] hover:text-[#E8652A]" href="#"><iconify-icon icon="solar:link-linear"></iconify-icon></a>
<a className="text-xl text-[#1A1A2E] hover:text-[#E8652A]" href="#"><iconify-icon icon="solar:camera-linear"></iconify-icon></a>
<a className="text-xl text-[#1A1A2E] hover:text-[#E8652A]" href="#"><iconify-icon icon="solar:chat-round-line-linear"></iconify-icon></a>
</div>
</div>
<div className="w-full md:w-1/2">
<div className="aspect-[3/4] bg-[#E5E0D8] rounded-3xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">

<div className="absolute inset-0 flex items-center justify-center text-[#1A1A2E]/20 text-4xl serif">Pritam Priyadarsi</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#FAF9F6]">
<div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
<div className="space-y-6">
<p className="text-lg serif italic">"OliviaTech didn't just build our app; they helped us define how we talk to our customers. The speed is incredible."</p>
<div>
<p className="text-sm font-semibold text-[#1A1A2E]">Sarah Jenkins</p>
<p className="text-xs text-[#4B5563]">CEO, Flowbase</p>
</div>
</div>
<div className="space-y-6">
<p className="text-lg serif italic">"We saw a 40% jump in mobile conversions within two weeks of launching the new site. Pritam knows his stuff."</p>
<div>
<p className="text-sm font-semibold text-[#1A1A2E]">David Chen</p>
<p className="text-xs text-[#4B5563]">Founder, LuxeCommerce</p>
</div>
</div>
<div className="space-y-6">
<p className="text-lg serif italic">"Finally found a team that treats our project like their own startup. Highly recommended."</p>
<div>
<p className="text-sm font-semibold text-[#1A1A2E]">Mark Thompson</p>
<p className="text-xs text-[#4B5563]">CTO, Realm</p>
</div>
</div>
</div>
<div className="mt-20 text-center italic text-sm">
<span className="text-[#E8652A]">20+ clients. 100% of them came back for a second project.</span>
<button className="ml-4 font-semibold text-[#1A1A2E] border-b border-[#1A1A2E]" onclick="showPage('contact')">Become a client →</button>
</div>
</section>

<section className="bg-[#1A1A2E] text-white py-32 px-6">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-5xl md:text-6xl text-white tracking-tight mb-8">Tell us what's broken.<br/>We'll tell you how to fix it.</h2>
<p className="text-white/70 text-base mb-12">No sales pitch. No NDAs to start. Just a real conversation about your product and what it could become.</p>
<form className="space-y-6 text-left">
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-white/50">Describe your biggest digital problem in 2 sentences</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-sm h-32 focus:border-[#E8652A] transition-colors" placeholder="e.g. My app onboarding is confusing users and we are losing people at step 2."></textarea>
</div>
<div className="grid md:grid-cols-2 gap-6">
<input className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm" placeholder="Name" type="text"/>
<input className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm" placeholder="Email" type="email"/>
</div>
<button className="amber-cta w-full py-5 rounded-full text-sm font-bold uppercase tracking-widest">Send It →</button>
</form>
<div className="mt-12 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-10 text-[10px] uppercase tracking-widest text-white/40">
<span>— We reply within 24 hours</span>
<span>— First call is always free</span>
<span>— We've helped 20+ startups</span>
</div>
</div>
</section>
</section>

<section className="hidden page-fade py-32 px-6" id="page-work">
<div className="max-w-7xl mx-auto">
<h1 className="text-5xl md:text-6xl tracking-tight mb-6">Things we've built that we're proud of.</h1>
<p className="text-base mb-16 text-[#4B5563] max-w-2xl">A selection of our recent work across websites, apps, and AI products.</p>
<div className="flex flex-wrap gap-4 mb-16">
<button className="amber-cta text-white px-6 py-2 rounded-full text-xs">All</button>
<button className="bg-[#F0EDE8] hover:bg-[#E5E0D8] px-6 py-2 rounded-full text-xs transition-colors">Websites</button>
<button className="bg-[#F0EDE8] hover:bg-[#E5E0D8] px-6 py-2 rounded-full text-xs transition-colors">Ecommerce</button>
<button className="bg-[#F0EDE8] hover:bg-[#E5E0D8] px-6 py-2 rounded-full text-xs transition-colors">AI MVPs</button>
</div>
<div className="grid md:grid-cols-2 gap-12">
<div className="group">
<div className="aspect-video bg-[#F0EDE8] rounded-3xl mb-6 overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center text-[#1A1A2E]/10 serif text-3xl">Realtorly App</div>
</div>
<h3 className="text-2xl mb-2">Realtorly Real Estate</h3>
<p className="text-[#E8652A] font-bold text-lg mb-4">2.4s → 0.8s load time</p>
<div className="flex gap-2">
<span className="text-[10px] bg-[#E5E0D8] px-3 py-1 rounded-full uppercase">Web App</span>
<span className="text-[10px] bg-[#E5E0D8] px-3 py-1 rounded-full uppercase">Next.js</span>
</div>
</div>
<div className="group">
<div className="aspect-video bg-[#F0EDE8] rounded-3xl mb-6 overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center text-[#1A1A2E]/10 serif text-3xl">Nova SaaS</div>
</div>
<h3 className="text-2xl mb-2">Nova AI Platform</h3>
<p className="text-[#E8652A] font-bold text-lg mb-4">3k+ Users in 30 Days</p>
<div className="flex gap-2">
<span className="text-[10px] bg-[#E5E0D8] px-3 py-1 rounded-full uppercase">AI MVP</span>
<span className="text-[10px] bg-[#E5E0D8] px-3 py-1 rounded-full uppercase">OpenAI</span>
</div>
</div>
</div>
</div>
</section>

<section className="hidden page-fade py-32 px-6" id="page-about">
<div className="max-w-4xl mx-auto">
<p className="text-[11px] uppercase tracking-[0.1em] text-[#E8652A] font-semibold mb-4">Why we exist</p>
<h1 className="text-5xl md:text-6xl tracking-tight mb-12">We started OliviaTech because bad software was costing good founders everything.</h1>
<div className="space-y-12 text-base leading-relaxed">
<p>Building a company is hard enough. Fighting with your own technology shouldn't be part of the struggle. We saw too many visionary founders limited by generic templates and buggy code.</p>
<div className="py-12 border-y border-[#E5E0D8] space-y-10">
<div>
<h3 className="text-2xl mb-4">We ship things we'd use ourselves.</h3>
<p>Quality isn't a checkbox; it's the core of the product. If the experience feels clunky to us, it's not ready for your users.</p>
</div>
<div>
<h3 className="text-2xl mb-4">We communicate like humans.</h3>
<p>No corporate jargon. No hiding behind tickets. Just direct Slack access and honest conversations about what's working and what isn't.</p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
<div>
<p className="text-4xl serif text-[#1A1A2E]">20+</p>
<p className="text-xs uppercase tracking-widest text-[#4B5563]">Projects Delivered</p>
</div>
<div>
<p className="text-4xl serif text-[#1A1A2E]">2</p>
<p className="text-xs uppercase tracking-widest text-[#4B5563]">Years Building</p>
</div>
<div>
<p className="text-4xl serif text-[#1A1A2E]">98%</p>
<p className="text-xs uppercase tracking-widest text-[#4B5563]">Return Rate</p>
</div>
<div>
<p className="text-4xl serif text-[#1A1A2E]">1M+</p>
<p className="text-xs uppercase tracking-widest text-[#4B5563]">Users Reached</p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#FAF9F6] border-t border-[#E5E0D8] py-20 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-10 md:space-y-0">
<div>
<a className="text-2xl serif font-semibold tracking-tighter text-[#1A1A2E]" href="#">OliviaTech</a>
<p className="text-xs mt-4 text-[#4B5563]">oliviatechoffice@gmail.com</p>
</div>
<div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 text-xs font-semibold uppercase tracking-widest">
<a className="hover:text-[#E8652A]" href="#" onclick="showPage('work')">Work</a>
<a className="hover:text-[#E8652A]" href="#" onclick="showPage('services')">Services</a>
<a className="hover:text-[#E8652A]" href="#" onclick="showPage('about')">About</a>
<a className="hover:text-[#E8652A]" href="#" onclick="showPage('contact')">Contact</a>
</div>
</div>
<div className="mt-20 pt-8 border-t border-[#E5E0D8] flex flex-col md:flex-row justify-between items-center text-[10px] text-[#4B5563]/60 uppercase tracking-[0.2em]">
<p>© 2026 OliviaTech. Built with care in India.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a href="#">LinkedIn</a>
<a href="#">Instagram</a>
<a href="#">Twitter</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
