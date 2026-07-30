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
      
// Lucide icons
lucide.createIcons({strokeWidth:1.5});

// Scroll cue
document.getElementById('scrollCue').addEventListener('click',()=>window.scrollBy({top:600,behavior:'smooth'}));

// Hero mind map using Chart.js Radar
const ctx=document.getElementById('mindMap').getContext('2d');
new Chart(ctx,{type:'radar',data:{labels:['Research','Notes','Citations','AI','Sharing','Integrations'],datasets:[{data:[90,85,95,88,80,75],backgroundColor:'rgba(59,130,246,0.15)',borderColor:'#3b82f6',borderWidth:2,pointRadius:3}]},options:{plugins:{legend:{display:false}},scales:{r:{grid:{color:'rgba(255,255,255,0.05)'},angleLines:{color:'rgba(255,255,255,0.05)'},ticks:{display:false},min:0,max:100}}}});

// Fade / Slide in on scroll
const observer=new IntersectionObserver((entries)=>entries.forEach(e=>e.isIntersecting&&e.target.classList.add('opacity-100','translate-y-0')),{threshold:0.15});
document.querySelectorAll('[data-animate]').forEach(el=>{el.classList.add('opacity-0','translate-y-6','transition','duration-700');observer.observe(el);});

// Demo gallery dots
const demoMap={1:'https://images.unsplash.com/photo-1587560699334-4ecf0a6cce6d?auto=format&fit=crop&w=900&q=80',2:'https://images.unsplash.com/photo-1581091870620-fc85de28f01b?auto=format&fit=crop&w=900&q=80',3:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80'};
document.querySelectorAll('[data-demo]').forEach(btn=>btn.addEventListener('click',e=>{const id=e.currentTarget.dataset.demo;document.getElementById('demoImg').src=demoMap[id];document.querySelectorAll('[data-demo]').forEach(b=>b.classList.toggle('bg-white/70',b.dataset.demo===id));}));

// Benefit card toggle
document.querySelectorAll('.benefit-card').forEach(card=>card.addEventListener('click',()=>card.querySelector('.benefit-extra').classList.toggle('hidden')));

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item=>item.querySelector('button').addEventListener('click',()=>{item.querySelector('.faq-content').classList.toggle('hidden');item.querySelector('i').classList.toggle('rotate-180');}));

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
      

<header className="fixed inset-x-0 top-0 z-20 backdrop-blur bg-gray-950/70 border-b border-gray-800">
<nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<a className="text-lg font-semibold tracking-tight text-white" href="#">atlas</a>
<ul className="hidden md:flex items-center space-x-8 text-sm">
<li><a className="hover:text-blue-400 transition-colors" href="#features">Features</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#pricing">Pricing</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#testimonials">Stories</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#faq">FAQ</a></li>
</ul>
<a className="rounded-md border border-blue-600/70 bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-blue-500/90" href="#">Try free</a>
</nav>
</header>

<section className="relative pt-36 pb-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800">
<div className="mx-auto flex max-w-7xl flex-col-reverse gap-14 px-6 md:flex-row md:items-center">

<div className="w-full md:w-1/2" data-animate="fade">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">transform scattered information into actionable, compounding knowledge.</h1>
<p className="mt-6 text-lg leading-relaxed text-gray-400">Atlas connects your notes, documents, and research into a living mind-map—so insights surface when you need them, not when you remember them.</p>
<div className="mt-10 flex items-center gap-4">
<a className="rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow transition hover:shadow-xl hover:bg-blue-500/90 focus:outline-none focus:ring-2 focus:ring-blue-400" href="#">Start free trial</a>
<button className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition" id="scrollCue">
<i className="w-5 h-5" data-lucide="chevron-down"></i><span className="text-sm">Scroll</span>
</button>
</div>
</div>

<div className="relative mx-auto w-full md:w-1/2" data-animate="fade" style={{minHeight: `320px`}}>
<div className="rounded-xl border border-gray-800 bg-gray-900/60 backdrop-blur-lg p-6 shadow-md">
<canvas height="320" id="mindMap"></canvas>
</div>
</div>
</div>
</section>

<section className="py-16 bg-gray-900">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-3 gap-6 md:grid-cols-6 items-center grayscale hover:grayscale-0 transition">
<img alt="" className="object-contain h-10 opacity-80" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<img alt="" className="object-contain h-10 opacity-80" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<img alt="" className="object-contain h-10 opacity-80" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<img alt="" className="object-contain h-10 opacity-80" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<img alt="" className="object-contain h-10 opacity-80" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<img alt="" className="object-contain h-10 opacity-80" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
</div>
</div>
</section>

<section className="py-24 bg-gray-950">
<div className="mx-auto max-w-7xl grid gap-12 px-6 md:grid-cols-2">
<div className="space-y-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">The modern knowledge worker is drowning in tabs, tools, and fleeting notes.</h2>
<ul className="space-y-4 text-gray-300">
<li className="flex gap-3">
<i className="w-5 h-5 text-red-500" data-lucide="x-circle"></i>
<span>Critical insights remain siloed inside documents.</span>
</li>
<li className="flex gap-3">
<i className="w-5 h-5 text-red-500" data-lucide="x-circle"></i>
<span>Search never finds what you know exists—somewhere.</span>
</li>
<li className="flex gap-3">
<i className="w-5 h-5 text-red-500" data-lucide="x-circle"></i>
<span>Your second brain forgets faster than your first.</span>
</li>
</ul>
</div>
<div className="relative" data-animate="slide">
<img alt="" className="rounded-lg border border-gray-800 shadow-lg" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-blue-500/10 pointer-events-none"></div>
</div>
</div>
</section>

<section className="py-24 bg-gray-900" id="features">
<div className="mx-auto max-w-7xl px-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Old way vs Atlas</h2>
<div className="mt-12 grid md:grid-cols-2 gap-8">
<div className="rounded-lg border border-gray-800 bg-gray-850 p-8 shadow">
<h3 className="font-medium text-gray-200 mb-4 flex items-center gap-2"><i className="w-5 h-5" data-lucide="archive"></i>Legacy tools</h3>
<ul className="space-y-3 text-gray-400">
<li>Isolated folders & notes</li>
<li>No context, no citations</li>
<li>Searching ≠ finding</li>
</ul>
</div>
<div className="relative rounded-lg border border-blue-600/40 bg-blue-600/10 p-8 shadow-lg overflow-hidden">
<h3 className="font-medium text-blue-100 mb-4 flex items-center gap-2"><i className="w-5 h-5 text-blue-500" data-lucide="brain"></i>Atlas</h3>
<ul className="space-y-3 text-blue-100/80">
<li>Living network of ideas & sources</li>
<li>Instant citations & traceability</li>
<li>Knowledge compounds over time</li>
</ul>
<div className="pointer-events-none absolute inset-0 flex justify-center items-center">
<svg className="opacity-20" height="260" width="260">
<circle cx="130" cy="130" fill="none" r="120" stroke="#3b82f6" strokeDasharray="4 4"></circle>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-950">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-12 md:grid-cols-2">
<div className="space-y-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">See Atlas surface insights in real time.</h2>
<p className="text-gray-400">Click through a sample project and watch Atlas connect the dots between scattered PDFs, web articles, and meeting transcripts.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500" data-lucide="zap"></i>
<span><strong className="font-medium text-gray-200">Import</strong> drag-and-drop docs, notes, and links.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500" data-lucide="wand-2"></i>
<span><strong className="font-medium text-gray-200">Synthesize</strong> Atlas reveals patterns and citations automatically.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500" data-lucide="rocket"></i>
<span><strong className="font-medium text-gray-200">Activate</strong> export structured briefs or share live maps.</span>
</li>
</ul>
</div>

<div className="relative overflow-hidden rounded-xl border border-gray-800 shadow" data-animate="fade">
<img alt="" className="w-full h-full object-cover" id="demoImg" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div className="absolute inset-0 bg-black/20"></div>
<div className="absolute bottom-4 right-4 flex gap-2">
<button className="h-2 w-2 rounded-full bg-white/70 hover:bg-white transition" data-demo="1"></button>
<button className="h-2 w-2 rounded-full bg-white/40 hover:bg-white transition" data-demo="2"></button>
<button className="h-2 w-2 rounded-full bg-white/40 hover:bg-white transition" data-demo="3"></button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-900" id="benefits">
<div className="mx-auto max-w-7xl px-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-12">Why teams choose Atlas</h2>
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
<div className="benefit-card relative rounded-xl border border-gray-800 bg-gray-850 p-6 shadow cursor-pointer transition hover:shadow-lg" data-animate="slide">
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-blue-500" data-lucide="link"></i>
<h3 className="font-medium text-gray-200">Compounding memory</h3>
</div>
<p className="mt-4 text-gray-400 benefit-extra hidden">Atlas remembers every source & context, letting future projects build on today’s insights automatically.</p>
</div>
<div className="benefit-card relative rounded-xl border border-gray-800 bg-gray-850 p-6 shadow cursor-pointer transition hover:shadow-lg">
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-blue-500" data-lucide="quote"></i>
<h3 className="font-medium text-gray-200">Source-of-truth citations</h3>
</div>
<p className="mt-4 text-gray-400 benefit-extra hidden">Never lose track of where information comes from—each node links straight back to original material.</p>
</div>
<div className="benefit-card relative rounded-xl border border-gray-800 bg-gray-850 p-6 shadow cursor-pointer transition hover:shadow-lg">
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-blue-500" data-lucide="users"></i>
<h3 className="font-medium text-gray-200">Human–AI collaboration</h3>
</div>
<p className="mt-4 text-gray-400 benefit-extra hidden">Pair human judgment with AI pattern recognition to uncover deeper insights, faster.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-950">
<div className="mx-auto max-w-7xl px-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white text-center mb-16">Just three steps</h2>
<div className="grid md:grid-cols-3 gap-10">
<div className="flex flex-col items-center text-center">
<div className="rounded-full p-4 border border-blue-500 text-blue-500"><i className="w-8 h-8" data-lucide="upload"></i></div>
<h3 className="mt-6 font-medium text-gray-200">Connect</h3>
<p className="mt-3 text-gray-400 max-w-xs">Drop in documents, links, and notes from anywhere.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="rounded-full p-4 border border-blue-500 text-blue-500"><i className="w-8 h-8" data-lucide="merge"></i></div>
<h3 className="mt-6 font-medium text-gray-200">Synthesize</h3>
<p className="mt-3 text-gray-400 max-w-xs">Atlas creates a living, interactive map of ideas & citations.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="rounded-full p-4 border border-blue-500 text-blue-500"><i className="w-8 h-8" data-lucide="share"></i></div>
<h3 className="mt-6 font-medium text-gray-200">Activate</h3>
<p className="mt-3 text-gray-400 max-w-xs">Turn insights into briefs, reports, or API-powered automations.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-900" id="testimonials">
<div className="mx-auto max-w-7xl px-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-12">People talking about Atlas</h2>
<div className="grid gap-8 md:grid-cols-2">
<div className="relative rounded-lg border border-gray-800 bg-gray-850 p-8 shadow">
<p className="text-gray-300 italic">“Atlas turned a month of desk research into a weekend project—and the footnotes wrote themselves.”</p>
<div className="mt-6 flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<div>
<p className="font-medium text-gray-200">Ava Chen</p>
<p className="text-sm text-gray-400">Founder @ Winglet</p>
</div>
</div>
</div>
<div className="relative rounded-lg border border-gray-800 bg-gray-850 p-8 shadow">
<p className="text-gray-300 italic">“Our consultants add Atlas to every project kickoff—client delight doubled, hours saved tripled.”</p>
<div className="mt-6 flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=72&q=80" />
<div>
<p className="font-medium text-gray-200">Jordan Steele</p>
<p className="text-sm text-gray-400">Principal @ Halo Advisory</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-950" id="pricing">
<div className="mx-auto max-w-7xl px-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-12 text-center">Simple, transparent pricing</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="rounded-xl border border-gray-800 bg-gray-900 p-8 shadow flex flex-col">
<h3 className="font-medium text-gray-200 mb-4">Starter</h3>
<p className="text-4xl font-semibold text-white">$0<span className="text-lg font-normal text-gray-400">/mo</span></p>
<ul className="mt-6 space-y-3 text-gray-400 flex-1">
<li>Up to 200 notes & 1 project</li>
<li>Email support</li>
</ul>
<a className="mt-8 rounded-md border border-blue-600/70 bg-blue-600 px-4 py-2 text-sm font-medium text-white text-center hover:bg-blue-500/90 transition" href="#">Get started</a>
</div>
<div className="rounded-xl border-2 border-blue-600 bg-gray-900 p-8 shadow-lg flex flex-col">
<h3 className="font-medium text-gray-200 mb-4">Pro</h3>
<p className="text-4xl font-semibold text-white">$24<span className="text-lg font-normal text-gray-400">/mo</span></p>
<ul className="mt-6 space-y-3 text-gray-400 flex-1">
<li>Unlimited projects & notes</li>
<li>AI synthesis up to 2M tokens/mo</li>
<li>Priority support</li>
</ul>
<a className="mt-8 rounded-md border border-blue-600/70 bg-blue-600 px-4 py-2 text-sm font-medium text-white text-center hover:bg-blue-500/90 transition" href="#">Start free trial</a>
</div>
<div className="rounded-xl border border-gray-800 bg-gray-900 p-8 shadow flex flex-col">
<h3 className="font-medium text-gray-200 mb-4">Enterprise</h3>
<p className="text-4xl font-semibold text-white">Custom</p>
<ul className="mt-6 space-y-3 text-gray-400 flex-1">
<li>SSO & advanced security</li>
<li>Dedicated onboarding</li>
<li>On-prem or private cloud</li>
</ul>
<a className="mt-8 rounded-md border border-blue-600/70 bg-blue-600 px-4 py-2 text-sm font-medium text-white text-center hover:bg-blue-500/90 transition" href="#">Contact sales</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-900" id="faq">
<div className="mx-auto max-w-4xl px-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-12 text-center">Frequently asked</h2>
<div className="space-y-4">
<div className="faq-item border border-gray-800 rounded-lg">
<button className="w-full flex justify-between items-center p-6">
<span className="font-medium text-gray-200">How safe is my data?</span>
<i className="w-5 h-5 text-gray-400 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="faq-content px-6 pb-6 hidden">
<p className="text-gray-400">All data is encrypted at rest & in transit. Enterprise plans offer siloed hosting & on-prem deployment.</p>
</div>
</div>
<div className="faq-item border border-gray-800 rounded-lg">
<button className="w-full flex justify-between items-center p-6">
<span className="font-medium text-gray-200">Can I cancel anytime?</span>
<i className="w-5 h-5 text-gray-400 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="faq-content px-6 pb-6 hidden">
<p className="text-gray-400">Absolutely—your subscription runs until the end of the current billing cycle, no hidden fees.</p>
</div>
</div>
<div className="faq-item border border-gray-800 rounded-lg">
<button className="w-full flex justify-between items-center p-6">
<span className="font-medium text-gray-200">Does Atlas work offline?</span>
<i className="w-5 h-5 text-gray-400 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="faq-content px-6 pb-6 hidden">
<p className="text-gray-400">You can create & browse notes offline; AI features require connectivity for processing.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-blue-600 text-white">
<div className="mx-auto max-w-5xl px-6 text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Start building your living knowledge network</h2>
<p className="mt-4 text-lg text-blue-50">Join thousands of researchers, founders, and consultants leveling up their insight velocity with Atlas.</p>
<a className="mt-8 inline-block rounded-md bg-white px-6 py-3 text-sm font-medium text-blue-600 shadow transition hover:bg-gray-100" href="#">Try Atlas free</a>
</div>
</section>

<footer className="bg-gray-950 border-t border-gray-800 text-gray-400">
<div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
<div>
<p className="text-lg font-semibold tracking-tight text-white">atlas</p>
<p className="mt-4 text-sm">Made for deep thinkers.<br />© 2024 Atlas Inc.</p>
</div>
<div>
<h3 className="font-medium text-gray-200 mb-4">Product</h3>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-gray-100" href="#features">Features</a></li>
<li><a className="hover:text-gray-100" href="#pricing">Pricing</a></li>
<li><a className="hover:text-gray-100" href="#faq">FAQs</a></li>
</ul>
</div>
<div>
<h3 className="font-medium text-gray-200 mb-4">Company</h3>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-gray-100" href="#">About</a></li>
<li><a className="hover:text-gray-100" href="#">Blog</a></li>
<li><a className="hover:text-gray-100" href="#">Careers</a></li>
</ul>
</div>
<div>
<h3 className="font-medium text-gray-200 mb-4">Stay in loop</h3>
<form className="flex gap-2">
<input className="w-full rounded-md bg-gray-850 border border-gray-700 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Email" type="email" />
<button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500/90 transition">→</button>
</form>
</div>
</div>
</footer>



    </>
  );
}
