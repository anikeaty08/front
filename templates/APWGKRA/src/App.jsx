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
      
// Init year
document.getElementById('year').textContent = new Date().getFullYear();

// Lucide icons
lucide.createIcons();

// ParticlesJS
particlesJS('particles-js',{
  "particles":{"number":{"value":60},"color":{"value":"#7c3aed"},"shape":{"type":"circle"},"opacity":{"value":0.15},"size":{"value":3},"move":{"speed":1}},
  "interactivity":{"events":{"onhover":{"enable":true,"mode":"repulse"}}}
});

// Chart.js
const ctx=document.getElementById('growthChart');
new Chart(ctx,{type:'line',data:{labels:['Q1','Q2','Q3','Q4'],datasets:[{label:'Users (k)',data:[50,200,630,1500],borderColor:'#7c3aed',borderWidth:2,fill:false,tension:.4}]},options:{plugins:{legend:{display:false}},scales:{y:{grid:{color:'#334155'},ticks:{color:'#94a3b8'}},x:{grid:{display:false},ticks:{color:'#94a3b8'}}}}});

// Staggered Reveal
const observer=new IntersectionObserver(entries=>{
  entries.forEach((entry,idx)=>{
    if(entry.isIntersecting){
      setTimeout(()=>entry.target.classList.remove('opacity-0','translate-y-6'), idx*60);
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.1});
document.querySelectorAll('[data-animate]').forEach(el=>{
  el.classList.add('opacity-0','translate-y-6','transition','duration-700');
  observer.observe(el);
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
      

<div className="fixed inset-0 -z-10" id="particles-js"></div>

<header className="backdrop-blur bg-zinc-900/60 border-b border-zinc-800 sticky top-0">
<div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
<h1 className="text-lg font-semibold tracking-tight">Germaine Chin</h1>
<nav className="space-x-6 hidden md:flex">
<a className="hover:text-purple-400 transition" href="#about">About</a>
<a className="hover:text-purple-400 transition" href="#experience">Experience</a>
<a className="hover:text-purple-400 transition" href="#insights">Insights</a>
<a className="hover:text-purple-400 transition" href="#contact">Contact</a>
</nav>
<button className="md:hidden" onclick="document.getElementById('mobile').classList.toggle('hidden')">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
<div className="px-6 pt-4 pb-6 space-y-3 md:hidden hidden" id="mobile">
<a className="block hover:text-purple-400" href="#about">About</a>
<a className="block hover:text-purple-400" href="#experience">Experience</a>
<a className="block hover:text-purple-400" href="#insights">Insights</a>
<a className="block hover:text-purple-400" href="#contact">Contact</a>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0 blur-2xl opacity-40 bg-gradient-to-br from-purple-600 via-indigo-500 to-fuchsia-600"></div>
<div className="relative mx-auto max-w-4xl px-6 py-24 flex flex-col items-center text-center space-y-8">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight drop-shadow-lg" data-animate="">Germaine Chin</h2>
<p className="max-w-xl text-lg md:text-xl text-zinc-300" data-animate="" style={{transitionDelay: '120ms'}}>Product Manager focused on transforming bold ideas into delightful, data-driven experiences.</p>
<a className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-medium px-6 py-3 rounded-lg transition" data-animate="" href="#contact" style={{transitionDelay: '240ms'}}>Let’s Talk <i className="w-5 h-5" data-lucide="arrow-right"></i></a>
</div>
</section>

<section className="mx-auto max-w-5xl px-6 py-20 space-y-10" id="about">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight" data-animate="">About Germaine</h2>
<p className="text-zinc-300 leading-relaxed" data-animate="" style={{transitionDelay: '120ms'}}>
    Over the last decade, I’ve launched 30+ products that serve more than 15 million users globally. My craft lives at the intersection of design, engineering, and business—balancing vision, velocity, and value to unlock sustainable growth.
  </p>
<div className="grid sm:grid-cols-2 gap-8">
<div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800" data-animate="" style={{transitionDelay: '180ms'}}>
<i className="w-6 h-6 text-purple-400 mb-4" data-lucide="user-check"></i>
<h3 className="text-xl font-semibold mb-2">Leadership</h3>
<p className="text-zinc-400">Scaled cross-functional teams of 5 → 40 while keeping empathy and experimentation at the core.</p>
</div>
<div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800" data-animate="" style={{transitionDelay: '240ms'}}>
<i className="w-6 h-6 text-purple-400 mb-4" data-lucide="bar-chart-3"></i>
<h3 className="text-xl font-semibold mb-2">Data &amp; Growth</h3>
<p className="text-zinc-400">10× revenue in 18 months by instrumenting analytics pipelines and rapid A/B testing loops.</p>
</div>
</div>
</section>

<section className="bg-zinc-900/40 border-t border-b border-zinc-800" id="experience">
<div className="mx-auto max-w-5xl px-6 py-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12" data-animate="">Past Experience</h2>
<ol className="relative border-l border-zinc-700 pl-8 space-y-16">

<li className="group" data-animate="" style={{transitionDelay: '120ms'}}>
<span className="absolute -left-[11px] flex items-center justify-center w-5 h-5 bg-purple-600 rounded-full"></span>
<div className="p-6 bg-zinc-800/60 rounded-lg backdrop-blur border border-zinc-700">
<div className="flex justify-between items-center">
<h3 className="text-xl font-semibold">Lead Product Manager – FinEdge</h3>
<span className="text-sm text-zinc-400">2021–Present</span>
</div>
<p className="text-zinc-400 mt-2">Owned the end-to-end lifecycle of a neobank platform from concept to 1 M MAU.</p>
</div>
</li>

<li className="group" data-animate="" style={{transitionDelay: '240ms'}}>
<span className="absolute -left-[11px] flex items-center justify-center w-5 h-5 bg-purple-600 rounded-full"></span>
<div className="p-6 bg-zinc-800/60 rounded-lg backdrop-blur border border-zinc-700">
<div className="flex justify-between items-center">
<h3 className="text-xl font-semibold">Senior PM – Orbit Analytics</h3>
<span className="text-sm text-zinc-400">2017–2021</span>
</div>
<p className="text-zinc-400 mt-2">Launched machine-learning dashboards that reduced insights latency by 80 %.</p>
</div>
</li>

<li className="group" data-animate="" style={{transitionDelay: '360ms'}}>
<span className="absolute -left-[11px] flex items-center justify-center w-5 h-5 bg-purple-600 rounded-full"></span>
<div className="p-6 bg-zinc-800/60 rounded-lg backdrop-blur border border-zinc-700">
<div className="flex justify-between items-center">
<h3 className="text-xl font-semibold">Product Analyst – NovaPay</h3>
<span className="text-sm text-zinc-400">2014–2017</span>
</div>
<p className="text-zinc-400 mt-2">Defined KPI frameworks &amp; migrated legacy infra, saving $1.2 M annually.</p>
</div>
</li>
</ol>
</div>
</section>

<section className="mx-auto max-w-5xl px-6 py-20" id="insights">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12" data-animate="">Impact Metrics</h2>
<div className="flex flex-col md:flex-row gap-8">
<div className="flex-1 space-y-4" data-animate="" style={{transitionDelay: '120ms'}}>
<p className="text-lg text-zinc-300">A snapshot of user growth across the last three launches.</p>
<ul className="space-y-2">
<li className="flex items-center gap-3"><i className="w-5 h-5 text-green-400" data-lucide="trending-up"></i><span>15 M total users</span></li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-blue-400" data-lucide="clock"></i><span>3→1 month average time-to-market</span></li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-amber-400" data-lucide="dollar-sign"></i><span>$25 M ARR influence</span></li>
</ul>
</div>
<div className="flex-1 bg-zinc-900/60 rounded-xl border border-zinc-800 p-6" data-animate="" style={{transitionDelay: '240ms'}}>
<div><canvas height="240" id="growthChart"></canvas></div>
</div>
</div>
</section>

<section className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-t border-zinc-800" id="contact">
<div className="mx-auto max-w-3xl px-6 py-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8" data-animate="">Get in Touch</h2>
<form className="space-y-6" data-animate="" style={{transitionDelay: '120ms'}}>
<div>
<label className="block text-sm mb-1" htmlFor="name">Name</label>
<input className="w-full bg-zinc-800 placeholder-zinc-500 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition" id="name" required="" type="text"/>
</div>
<div>
<label className="block text-sm mb-1" htmlFor="email">Email</label>
<input className="w-full bg-zinc-800 placeholder-zinc-500 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition" id="email" required="" type="email"/>
</div>
<div>
<label className="block text-sm mb-1" htmlFor="message">Message</label>
<textarea className="w-full bg-zinc-800 placeholder-zinc-500 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition" id="message" required="" rows="5"></textarea>
</div>
<button className="bg-purple-600 hover:bg-purple-500 text-white font-medium px-6 py-3 rounded-lg transition inline-flex gap-2" type="submit">Send Message <i className="w-5 h-5" data-lucide="send"></i></button>
</form>
</div>
</section>

<footer className="border-t border-zinc-800 py-8 text-center text-zinc-500 text-sm">
  © <span id="year"></span> Germaine Chin. Built with passion.
</footer>






    </>
  );
}
