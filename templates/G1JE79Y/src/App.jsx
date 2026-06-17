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



    lucide.createIcons({strokeWidth:1.5});

    // Intersection Observer (kept from original)
    const observer = new IntersectionObserver(entries=>{
      entries.forEach(e=>e.isIntersecting&&e.target.classList.add('in-view'));
    },{threshold:.1,rootMargin:'0px 0px -50px 0px'});
    document.querySelectorAll('.animate-on-scroll').forEach(el=>observer.observe(el));

    // Fly-wheel logic
    const overlay=document.getElementById('flywheel-overlay');
    const btn=document.getElementById('flywheel-btn');
    const close=document.getElementById('close-flywheel');
    const items=[...overlay.querySelectorAll('.fly-item')];
    const radius=160;
    function positionItems(){
      items.forEach((item,i)=>{
        const angle=(2*Math.PI/items.length)*i;
        const x=Math.cos(angle)*radius;
        const y=Math.sin(angle)*radius;
        item.style.transform=`translate(-50%,-50%) translate(${x}px,${y}px)`;
      });
    }
    positionItems();
    btn.addEventListener('click',()=>overlay.classList.remove('hidden'));
    close.addEventListener('click',()=>overlay.classList.add('hidden'));
    overlay.addEventListener('click',e=>{if(e.target===overlay)overlay.classList.add('hidden')});
    window.addEventListener('resize',positionItems);
  
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
      

<header className="fixed inset-x-0 top-0 z-50 glass-border fade-in">
<div className="max-w-6xl flex mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-[url(https://images.unsplash.com/photo-1513039464749-94912b3841ce?w=320&amp;q=80)] bg-cover rounded-md"></div>
<span className="font-medium text-gray-200">Peter Treyz</span>
</div>
<nav className="flex items-center gap-8 text-sm text-gray-400">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#projects">Projects</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</nav>
</div>
</header>

<section className="min-h-screen flex flex-col bg-[url(https://images.unsplash.com/photo-1530053969600-caed2596d242?w=2560&amp;q=80)] bg-cover pt-24 pr-6 pl-6 items-center justify-center">
<h1 className="md:text-7xl slide-up delay-400 text-4xl font-normal text-gray-50 tracking-tight font-serif text-center mb-4">Treyz Consulting</h1>
<p className="max-w-md fade-in delay-600 text-2xl text-green-50 text-center mb-12">Building exceptional digital products with clean code &amp; thoughtful design.</p>

<button className="glass-border hover:bg-white/10 hover:scale-105 active:scale-95 transition-all rounded-full px-16 py-6 text-xl font-medium flex items-center gap-3 select-none" id="flywheel-btn">
<svg className="w-6 h-6" data-lucide="sparkles"></svg>
      Explore Offerings
    </button>
</section>

<div className="fixed inset-0 hidden items-center justify-center bg-black/70 backdrop-blur z-50" id="flywheel-overlay">
<div className="relative w-[420px] h-[420px]">

<button className="absolute top-1.5 right-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors" id="close-flywheel">
<svg className="w-5 h-5 text-gray-300" data-lucide="x"></svg>
</button>

<div className="fly-item glass-card w-28 h-28 rounded-xl flex flex-col items-center justify-center text-center text-sm text-gray-200 fade-scale">
<svg className="w-6 h-6 mb-1" data-lucide="terminal"></svg>
        Websites
      </div>
<div className="fly-item glass-card w-28 h-28 rounded-xl flex flex-col items-center justify-center text-center text-sm text-gray-200 fade-scale">
<svg className="w-6 h-6 mb-1" data-lucide="smartphone"></svg>
        Mobile Apps
      </div>
<div className="fly-item glass-card w-28 h-28 rounded-xl flex flex-col items-center justify-center text-center text-sm text-gray-200 fade-scale">
<svg className="w-6 h-6 mb-1" data-lucide="pen-tool"></svg>
        UI/UX Design
      </div>
<div className="fly-item glass-card w-28 h-28 rounded-xl flex flex-col items-center justify-center text-center text-sm text-gray-200 fade-scale">
<svg className="w-6 h-6 mb-1" data-lucide="bar-chart-3"></svg>
        Data Viz
      </div>
<div className="fly-item glass-card w-28 h-28 rounded-xl flex flex-col items-center justify-center text-center text-sm text-gray-200 fade-scale">
<svg className="w-6 h-6 mb-1" data-lucide="shopping-cart"></svg>
        E-commerce
      </div>
<div className="fly-item glass-card w-28 h-28 rounded-xl flex flex-col items-center justify-center text-center text-sm text-gray-200 fade-scale">
<svg className="w-6 h-6 mb-1" data-lucide="rocket"></svg>
        MVP Launch
      </div>
</div>
</div>


<section className="max-w-4xl mx-auto py-24 px-6" id="about">

</section>

<section className="pt-24 pb-24" id="projects">

</section>

<section className="bg-neutral-950 py-24" id="contact">

</section>
<footer className="bg-neutral-950 text-center py-8">
<div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8"></div>
<p className="text-sm text-gray-500">© 2024 Jane Doe</p>
</footer>


    </>
  );
}
