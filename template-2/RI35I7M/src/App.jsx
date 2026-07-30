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



  document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();

    /* particles */
    particlesJS("particles-js",{
      particles:{number:{value:60,density:{enable:true,value_area:1000}},color:{value:"#ffffff"},opacity:{value:0.12},size:{value:1.5,random:true},line_linked:{enable:false},move:{enable:true,speed:0.35}},
      interactivity:{events:{hover:{enable:false}}},
      retina_detect:true
    });

    /* chart */
    const ctx=document.getElementById("textureChart");
    if(ctx){
      new Chart(ctx,{
        type:"line",
        data:{
          labels:["2021","2022","2023","2024"],
          datasets:[{
            data:[1024,2048,3072,4096],
            borderColor:"#14b8a6",
            backgroundColor:"rgba(20,184,166,0.2)",
            fill:true,
            tension:0.3,
            pointRadius:4,
            pointHoverRadius:6,
            pointBackgroundColor:"#14b8a6",
            borderWidth:2
          }]
        },
        options:{
          responsive:true,maintainAspectRatio:false,
          plugins:{legend:{display:false}},
          scales:{
            x:{grid:{display:false},ticks:{color:"#64748b",font:{size:12,weight:"500"}}},
            y:{beginAtZero:true,grid:{color:"rgba(255,255,255,0.07)",borderDash:[4,4]},ticks:{color:"#64748b",font:{size:12,weight:"500"},stepSize:1024,callback:v=>v>=1000?(v/1000)+"K":v}}
          }
        }
      });
    }
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
      

<header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-[#0e1014]/70 border-b border-white/10">
<div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6 md:px-10">
<a aria-label="Atlas3D home" className="text-white text-sm font-medium tracking-tight hover:opacity-90 transition" href="#">Atlas3D</a>
<nav aria-label="Primary" className="hidden lg:flex items-center gap-6 text-sm">
<a className="flex items-center gap-1 opacity-70 hover:opacity-100 transition animate-left" href="#"><i className="w-4 h-4" data-lucide="home"></i>Home</a>
<a className="flex items-center gap-1 opacity-70 hover:opacity-100 transition animate-left" href="#"><i className="w-4 h-4" data-lucide="image"></i>Showcase</a>
<a className="flex items-center gap-1 opacity-70 hover:opacity-100 transition animate-left" href="#"><i className="w-4 h-4" data-lucide="layers"></i>Templates</a>
<a className="flex items-center gap-1 opacity-70 hover:opacity-100 transition animate-left" href="#"><i className="w-4 h-4" data-lucide="users"></i>Community</a>
<a className="flex items-center gap-1 opacity-70 hover:opacity-100 transition animate-left" href="#"><i className="w-4 h-4" data-lucide="phone"></i>Contact</a>
</nav>
<button className="rounded-full bg-indigo-600 text-white px-5 py-2 text-sm font-medium hover:bg-indigo-500 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-300">
      Launch App
    </button>
</div>
</header>

<div className="min-h-screen w-full p-6 md:p-10 relative overflow-hidden pt-[88px]">
<div className="absolute inset-0 -z-10" id="particles-js"></div>

<section className="relative rounded-[28px] p-8 md:p-14 bg-gradient-to-br from-[#16181d] via-[#121418] to-[#0e1014] overflow-hidden ring-1 ring-white/5">
<div aria-hidden="true" className="absolute -left-40 -top-32 h-96 w-96 bg-indigo-600/20 blur-3xl rounded-full"></div>
<div className="grid md:grid-cols-2 gap-6 items-center mt-6 relative z-10">

<header className="space-y-6 animate-fade">
<h1 className="md:text-6xl leading-tight text-5xl font-semibold text-white tracking-tight">
          Craft Limitless<br />Worlds in Moments
        </h1>
<p className="max-w-md text-slate-400">
          Atlas3D converts a single prompt or sketch into a production-ready, fully textured 3D scene before your coffee cools.
        </p>

<div className="flex gap-6">

<a className="codepen-button" href="#">
<span>Request Access</span>
</a>
<button className="hover:bg-white/5 hover:border-white/20 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/30 text-sm font-medium text-white/90 border-white/10 border rounded-full py-3 px-8 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="play"></i>
            Watch Demo
          </button>
</div>
</header>

<figure className="flex justify-center md:justify-end animate-fade">
<img alt="Example 3D city generated with Atlas3D" className="w-full max-w-sm md:max-w-none h-[340px] md:h-[520px] object-cover rounded-2xl ring-1 ring-white/10 hover:scale-[1.03] transition-transform duration-300 shadow-lg" src="https://images.unsplash.com/photo-1647471922959-e5515db63a28?w=1080&q=80" />
</figure>
</div>
</section>

<section className="grid md:grid-cols-3 gap-6 mt-6">

<article aria-labelledby="release-title" className="animate-card rounded-2xl bg-[#1a1d22] p-8 ring-1 ring-white/5 hover:ring-indigo-500/40 transition hover:-translate-y-1.5 duration-300 focus-within:ring-indigo-500/60">
<header className="space-y-6">
<span className="uppercase text-xs font-medium tracking-widest text-indigo-400 flex items-center gap-1"><i className="w-4 h-4" data-lucide="zap"></i>Release</span>
<h3 className="font-semibold text-xl tracking-tight text-white" id="release-title">Realtime Co-Create is live</h3>
<p className="text-sm text-slate-400">Design scenes together with instant sync—no reloads needed.</p>
</header>
<ul className="mt-6 space-y-3 text-sm text-slate-400">
<li className="flex items-start gap-2"><i className="w-4 h-4 text-indigo-400" data-lucide="check-circle"></i>Cursor presence & author tags</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-indigo-400" data-lucide="check-circle"></i>Conflict-free mesh merging</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-indigo-400" data-lucide="check-circle"></i>Spatial voice built-in</li>
</ul>
<a className="inline-flex items-center gap-1 text-indigo-400 text-sm font-medium mt-6 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-400" href="#">
        View Changelog <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</article>

<article aria-labelledby="metrics-title" className="animate-card bg-[#1a1d22] ring-1 ring-white/5 hover:ring-teal-500/40 transition hover:-translate-y-1.5 duration-300 focus-within:ring-teal-500/60 rounded-2xl p-8">
<header className="space-y-6">
<span className="uppercase text-xs font-medium tracking-widest text-teal-400 flex items-center gap-1"><i className="w-4 h-4" data-lucide="flame"></i>Metrics</span>
<h3 className="font-semibold text-xl tracking-tight text-white" id="metrics-title">Textures now export in 4K</h3>
<p className="text-sm text-slate-400">Sharper maps delivered with zero extra compute cost.</p>
</header>
<div className="mt-6">
<h4 className="sr-only">Texture Resolution Growth</h4>
<div className="relative h-32 md:h-40">
<canvas id="textureChart"></canvas>
</div>
</div>
<p className="text-xs text-slate-500 mt-4">Source: internal benchmarking, May 2024</p>
</article>

<article aria-labelledby="community-title" className="animate-card rounded-2xl bg-[#1a1d22] p-8 ring-1 ring-white/5 hover:ring-pink-500/40 transition hover:-translate-y-1.5 duration-300 focus-within:ring-pink-500/60">
<header className="space-y-6">
<span className="uppercase text-xs font-medium tracking-widest text-pink-400 flex items-center gap-1"><i className="w-4 h-4" data-lucide="users"></i>Community</span>
<h3 className="font-semibold text-xl tracking-tight text-white" id="community-title">Creator Spotlight</h3>
<p className="text-sm text-slate-400">Honouring artists who redefined generative worlds this month.</p>
</header>
<div className="border-t border-white/5 mt-6 pt-6 space-y-4">
<div className="flex items-center gap-3">
<img alt="Ava Chen" className="w-10 h-10 rounded-full ring-2 ring-white/10" src="https://randomuser.me/api/portraits/women/68.jpg" />
<div>
<p className="text-sm text-white">Ava Chen</p>
<p className="text-xs text-slate-500">Neon Haven Pack • 132 likes</p>
</div>
</div>
<div className="flex items-center gap-3">
<img alt="Diego Morales" className="w-10 h-10 rounded-full ring-2 ring-white/10" src="https://randomuser.me/api/portraits/men/52.jpg" />
<div>
<p className="text-sm text-white">Diego Morales</p>
<p className="text-xs text-slate-500">Solar Wasteland Kit • 119 likes</p>
</div>
</div>
<div className="flex items-center gap-3">
<img alt="Priya Singh" className="w-10 h-10 rounded-full ring-2 ring-white/10" src="https://randomuser.me/api/portraits/women/12.jpg" />
<div>
<p className="text-sm text-white">Priya Singh</p>
<p className="text-xs text-slate-500">Cloudborne Isles • 107 likes</p>
</div>
</div>
</div>
<button className="mt-6 w-full rounded-lg bg-pink-600/20 text-pink-300 py-2 text-sm font-medium hover:bg-pink-600/30 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-pink-400">
        Follow All Creators
      </button>
</article>
</section>
</div>





    </>
  );
}
