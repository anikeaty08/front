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
      

<div className="aura-background-component top-0 w-full -z-10 absolute saturate-200 opacity-60 h-[800px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/celestialflowabstractdigitalform-ObUlVgj70g2y4bbx5vBKSfxN/" width="100%"></iframe></div></div>

<nav className="w-full py-8 px-6 lg:px-12 flex items-center justify-between relative z-50 max-w-[1600px] mx-auto">
<a className="text-3xl font-serif font-medium text-[#FF7F66] tracking-tight" href="#">Lumina</a>
<div className="hidden lg:flex items-center gap-8 bg-white px-8 py-3 rounded-full shadow-sm border border-gray-100">
<a className="text-xs font-medium tracking-widest uppercase text-slate-500 hover:text-[#FF7F66] transition-colors" href="#">Studio</a>
<a className="text-xs font-medium tracking-widest uppercase text-slate-500 hover:text-[#FF7F66] transition-colors" href="#">Work</a>
<a className="text-xs font-medium tracking-widest uppercase text-slate-500 hover:text-[#FF7F66] transition-colors" href="#">Awards</a>
<a className="text-xs font-medium tracking-widest uppercase text-slate-500 hover:text-[#FF7F66] transition-colors" href="#">Connect</a>
</div>
<div className="flex items-center gap-6">
<a className="hidden md:block text-xs font-medium tracking-widest uppercase text-slate-500" href="#">Sign In</a>
<button className="w-10 h-10 rounded-full border border-[#FF7F66] text-[#FF7F66] flex items-center justify-center hover:bg-[#FF7F66] hover:text-white transition-colors">
<svg aria-hidden="true" className="lucide lucide-user w-5 h-5 stroke-[1.5]" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</button>
</div>
</nav>

<section className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 pb-20 pt-10 lg:pt-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="space-y-10">
<h1 className="text-6xl lg:text-7xl xl:text-8xl font-serif text-[#43436A] leading-[1.1] tracking-tight">
                    Crafting Digital <br/>
<span className="italic font-light">&amp;</span> Visual Stories.
                </h1>
<div className="flex items-start gap-6 max-w-lg">
<div className="w-12 h-12 flex-shrink-0 bg-indigo-50 rounded-xl flex items-center justify-center text-[#5D5D81]">
<svg aria-hidden="true" className="lucide lucide-bar-chart-2 w-6 h-6 stroke-[1.5]" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</div>
<p className="text-lg leading-relaxed text-slate-500">
                        We transform abstract ideas into tangible digital experiences. Elevating brands through strategic motion and timeless design.
                    </p>
</div>
<div className="flex items-center gap-8 pt-4">
<a className="px-8 py-4 rounded-full border border-[#FF7F66] text-[#43436A] font-medium text-xs tracking-widest uppercase hover:bg-[#FF7F66] hover:text-white transition-colors flex items-center gap-3" href="#">
                        Explore Work <svg aria-hidden="true" className="lucide lucide-chevron-right w-4 h-4 stroke-[1.5]" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
<div className="flex gap-4 pt-12">
<div className="w-3 h-3 rounded-full bg-[#FF7F66] ring-4 ring-[#FF7F66]/20"></div>
<div className="w-3 h-3 rounded-full bg-gray-200"></div>
<div className="w-3 h-3 rounded-full bg-gray-200"></div>
<div className="w-3 h-3 rounded-full bg-gray-200"></div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 py-24">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-4 flex flex-col justify-center space-y-8">
<span className="text-xs font-medium tracking-[0.2em] text-[#FF7F66] uppercase">Expertise</span>
<h2 className="text-5xl font-serif text-[#43436A] tracking-tight leading-tight">
                    Solutions for  Every Medium.
                </h2>
<div className="w-12 h-0.5 bg-[#FF7F66]"></div>
<p className="text-lg text-slate-500 leading-relaxed">
                    From pixel-perfect interfaces to immersive brand identities, we build comprehensive design systems that scale with your ambition.
                </p>
<div className="pt-4">
<a className="inline-flex px-8 py-4 rounded-full border border-gray-300 text-[#43436A] font-medium text-xs tracking-widest uppercase hover:border-[#FF7F66] transition-colors" href="#">
                        View Services
                    </a>
</div>
</div>

<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2">

<div className="aspect-square flex flex-col group hover:bg-white transition-colors text-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a5122f84-43cb-4170-94c3-aded75f0d3ed_1600w.webp)] bg-cover bg-center border-gray-100 border-r border-b px-12 py-12 items-center justify-center">
<div className="text-[#43436A] mb-6 transform group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="iconify text-6xl iconify--solar" data-icon="solar:palette-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7.75 19a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75" fill="currentColor"></path><path d="M10 18V6c0-1.4 0-2.1-.272-2.635a2.5 2.5 0 0 0-1.093-1.093C8.1 2 7.4 2 6 2s-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C2 3.9 2 4.6 2 6v12c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C3.9 22 4.6 22 6 22s2.1 0 2.635-.273a2.5 2.5 0 0 0 1.093-1.092C10 20.1 10 19.4 10 18" fill="currentColor" opacity=".4"></path><path d="M10 8.243V18c0 .919 0 1.536-.077 2.003l3.299-3.299l5.838-6.09c.973-1.003 1.46-1.505 1.636-2.08a2.5 2.5 0 0 0-.011-1.503C20.5 6.458 20 5.958 19 4.959c-.9-.886-1.352-1.33-1.88-1.514a2.5 2.5 0 0 0-1.353-.085c-.547.118-1.049.502-2.053 1.27L13 5.243zm-1.997 13.68H8v.003z" fill="currentColor" opacity=".7"></path><path className="" d="M15.814 14H17.9c1.4 0 2.1 0 2.635.273a2.5 2.5 0 0 1 1.093 1.092C21.9 15.9 21.9 16.6 21.9 18s0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C20 22 19.3 22 17.9 22H6c.917 0 1.534 0 2-.077v.003l.003-.003c.245-.04.448-.102.632-.195a2.5 2.5 0 0 0 1.093-1.093c.093-.184.155-.387.195-.632l3.299-3.299z" fill="currentColor"></path></svg>
</div>
<span className="text-xs text-gray-400 mb-2 font-mono">01</span>
<h3 className="font-medium text-sm tracking-widest uppercase text-[#43436A]">Brand Identity</h3>
</div>

<div className="aspect-square flex flex-col group hover:bg-white transition-colors text-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8390ab01-f581-443c-bfd5-2c3eef12f3f7_1600w.webp)] bg-cover bg-center border-gray-100 border-b px-12 py-12 items-center justify-center">
<div className="text-[#43436A] mb-6 transform group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="iconify text-6xl iconify--solar" data-icon="solar:monitor-smartphone-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M22 15v3c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18v-3c0-1.886 0-2.828.586-3.414S16.114 11 18 11s2.828 0 3.414.586S22 13.114 22 15m-5.75 5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd"></path><path d="M8 17c-2.829 0-4.243 0-5.122-.879c-.569-.569-.807-1.363-.878-2.621V13h10.516v.5c-.016.437-.016.912-.016 1.41v3.18c0 .865 0 1.659.086 2.304c.096.711.32 1.463.939 2.08l.025.026H8A.75.75 0 0 1 8 21h3.25v-4z" fill="currentColor"></path><path d="M10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v.138c-.508-.333-1.069-.48-1.606-.551C19.75 9.5 18.955 9.5 18.09 9.5h-.18c-.865 0-1.659 0-2.304.087c-.711.095-1.463.32-2.08.938c-.588.588-.82 1.296-.924 1.975v.5H2v-.5c-.007-.45 0-.948 0-1.5v-1c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2" fill="currentColor" opacity=".5"></path></svg>
</div>
<span className="text-xs text-gray-400 mb-2 font-mono">02</span>
<h3 className="font-medium text-sm tracking-widest uppercase text-[#43436A]">Web &amp; Mobile</h3>
</div>

<div className="aspect-square flex flex-col overflow-hidden text-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0ff9537b-7012-4eb9-8005-d88f022e3ff6_1600w.webp)] bg-cover bg-center px-12 py-12 relative items-center justify-center">
<div className="text-white mb-6 z-10">
<svg aria-hidden="true" className="iconify text-6xl iconify--solar" data-icon="solar:videocamera-record-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m17 9.5l.658-.329c1.946-.973 2.92-1.46 3.63-1.02c.712.44.712 1.528.712 3.703v.292c0 2.176 0 3.263-.711 3.703c-.712.44-1.685-.047-3.63-1.02L17 14.5z" fill="currentColor"></path><path className="" clip-rule="evenodd" d="M2.908 5.462C2 6.57 2 8.212 2 11.5v1c0 3.287 0 4.931.908 6.038a4 4 0 0 0 .554.554C4.57 20 6.212 20 9.5 20c3.287 0 4.931 0 6.038-.908q.304-.25.554-.554C17 17.43 17 15.788 17 12.5v-1c0-3.287 0-4.931-.908-6.038a4 4 0 0 0-.554-.554C14.43 4 12.788 4 9.5 4c-3.287 0-4.931 0-6.038.908a4 4 0 0 0-.554.554" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M14 8.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" fill="currentColor"></path></svg>
</div>
<span className="text-xs text-white/70 mb-2 font-mono z-10">03</span>
<h3 className="font-medium text-sm tracking-widest uppercase text-white z-10">Motion Graphics</h3>

<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
</div>

<div className="aspect-square flex flex-col group hover:bg-white transition-colors text-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e34b0e00-3739-476b-9067-7569cc725774_1600w.webp)] bg-cover bg-center border-gray-100 border-r px-12 py-12 items-center justify-center">
<div className="text-[#43436A] mb-6 transform group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="iconify text-6xl iconify--solar" data-icon="solar:chat-round-line-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22" fill="currentColor" opacity=".5"></path><path d="M7.825 12.85a.825.825 0 0 0 0 1.65h6.05a.825.825 0 0 0 0-1.65zm0-3.85a.825.825 0 0 0 0 1.65h8.8a.825.825 0 0 0 0-1.65z" fill="currentColor"></path></svg>
</div>
<span className="text-xs text-gray-400 mb-2 font-mono">04</span>
<h3 className="font-medium text-sm tracking-widest uppercase text-[#43436A]">Social Strategy</h3>
</div>
</div>
</div>
</section><section className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 py-32 bg-white">
<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
<div className="max-w-2xl">
<span className="text-xs font-medium tracking-[0.2em] text-[#FF7F66] uppercase block mb-4">Methodology</span>
<h2 className="text-5xl lg:text-6xl font-serif text-[#43436A] tracking-tight leading-tight">
                    The Creative Lifecycle.
                </h2>
</div>
<div className="max-w-md">
<p className="text-lg text-slate-500 leading-relaxed">
                    Our process is designed to be as rigorous as it is creative. We transform complex problems into intuitive, high-performance digital narratives.
                </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100 overflow-hidden rounded-sm">

<div className="bg-white p-10 lg:p-12 flex flex-col h-full group hover:bg-[#FAFAFA] transition-colors duration-500">
<div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-[#5D5D81] mb-12 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="lucide lucide-compass w-6 h-6 stroke-[1.5]" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="flex items-baseline gap-4 mb-6">
<span className="text-xs font-mono text-[#FF7F66] font-medium">01</span>
<h3 className="text-2xl font-serif text-[#43436A] tracking-tight">Discovery</h3>
</div>
<div className="w-8 h-0.5 bg-[#FF7F66] mb-8 transition-all duration-500 group-hover:w-16"></div>
<p className="text-slate-500 leading-relaxed text-sm">
                    We deep-dive into your brand DNA, user behavior, and market landscape to establish a strategic foundation for every pixel.
                </p>
</div>

<div className="bg-white p-10 lg:p-12 flex flex-col h-full group hover:bg-[#FAFAFA] transition-colors duration-500">
<div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-[#5D5D81] mb-12 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="lucide lucide-layers w-6 h-6 stroke-[1.5]" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<div className="flex items-baseline gap-4 mb-6">
<span className="text-xs font-mono text-[#FF7F66] font-medium">02</span>
<h3 className="text-2xl font-serif text-[#43436A] tracking-tight">Visualizing</h3>
</div>
<div className="w-8 h-0.5 bg-[#FF7F66] mb-8 transition-all duration-500 group-hover:w-16"></div>
<p className="text-slate-500 leading-relaxed text-sm">
                    Translating strategy into visual language. We build comprehensive design systems that ensure consistency across all touchpoints.
                </p>
</div>

<div className="bg-white p-10 lg:p-12 flex flex-col h-full group hover:bg-[#FAFAFA] transition-colors duration-500">
<div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-[#5D5D81] mb-12 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="lucide lucide-cpu w-6 h-6 stroke-[1.5]" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<div className="flex items-baseline gap-4 mb-6">
<span className="text-xs font-mono text-[#FF7F66] font-medium">03</span>
<h3 className="text-2xl font-serif text-[#43436A] tracking-tight">Execution</h3>
</div>
<div className="w-8 h-0.5 bg-[#FF7F66] mb-8 transition-all duration-500 group-hover:w-16"></div>
<p className="text-slate-500 leading-relaxed text-sm">
                    Where motion and code meet. Our technical team builds robust, scalable solutions that bring the static vision to life.
                </p>
</div>

<div className="bg-white p-10 lg:p-12 flex flex-col h-full group hover:bg-[#FAFAFA] transition-colors duration-500">
<div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-[#5D5D81] mb-12 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="lucide lucide-zap w-6 h-6 stroke-[1.5]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="flex items-baseline gap-4 mb-6">
<span className="text-xs font-mono text-[#FF7F66] font-medium">04</span>
<h3 className="text-2xl font-serif text-[#43436A] tracking-tight">Evolution</h3>
</div>
<div className="w-8 h-0.5 bg-[#FF7F66] mb-8 transition-all duration-500 group-hover:w-16"></div>
<p className="text-slate-500 leading-relaxed text-sm">
                    Launch is just the beginning. We monitor, optimize, and iterate to ensure the project continues to perform at its peak.
                </p>
</div>
</div>
<div className="mt-20 flex justify-center">
<div className="inline-flex items-center gap-4 bg-[#FAFAFA] px-6 py-4 rounded-full border border-gray-100">
<span className="text-xs font-medium text-slate-400 uppercase tracking-widest">Ready to start?</span>
<a className="text-xs font-semibold text-[#FF7F66] uppercase tracking-widest hover:translate-x-1 transition-transform inline-flex items-center gap-2" href="#">
                    Let's Talk <svg aria-hidden="true" className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="overflow-hidden w-full pt-24 pb-24">
<div className="max-w-[1600px] mx-auto px-6 lg:px-12 mb-12 flex items-end justify-between">
<div className="">
<span className="text-xs font-medium tracking-[0.2em] text-[#FF7F66] uppercase block mb-4">Selected Work</span>
<h2 className="text-5xl lg:text-6xl font-serif text-[#43436A] tracking-tight">
                    Making Ideas  Come to Life.
                </h2>
</div>
<div className="hidden md:flex items-baseline gap-4 font-serif">
<span className="text-7xl text-[#43436A]">01</span>
<span className="text-4xl text-gray-300">/ 09</span>
</div>
</div>
<div className="relative w-full h-[500px] lg:h-[600px] group">

<div className="absolute inset-0 w-full h-full bg-[#E5E0D8]">
<img alt="Abstract Art" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7f65e15e-948a-4d3e-9f34-a22e812f9c9e_3840w.webp"/>
</div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FFF8F0] rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-[#4A3B32]">
<div className="text-[#4A3B32] text-[10px] tracking-[0.3em] uppercase rotate-[-15deg] mb-2 font-bold">Cold Brew</div>
<div className="text-[#8B2635] text-7xl">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:cup-hot-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M6.977 1.327a.75.75 0 0 1 .175 1.046l-.386.541c.626.474.765 1.364.306 2.007l-.41.576a.75.75 0 0 1-1.222-.871l.386-.542a1.457 1.457 0 0 1-.306-2.007l.411-.575a.75.75 0 0 1 1.046-.175m4 0a.75.75 0 0 1 .175 1.046l-.386.541c.626.474.765 1.364.306 2.007l-.41.576a.75.75 0 1 1-1.222-.871l.386-.542a1.457 1.457 0 0 1-.306-2.007l.411-.575a.75.75 0 0 1 1.046-.175m4 0a.75.75 0 0 1 .175 1.046l-.386.541c.626.474.765 1.364.306 2.007l-.41.576a.75.75 0 1 1-1.222-.871l.386-.542a1.457 1.457 0 0 1-.306-2.007l.411-.575a.75.75 0 0 1 1.046-.175" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path className="" d="M9.613 22h.774c2.66 0 3.991 0 4.856-.81c.67-.626.874-1.564 1.015-3.19H3.742c.14 1.626.344 2.564 1.014 3.19c.865.81 2.196.81 4.856.81" fill="currentColor" opacity=".5"></path><path clip-rule="evenodd" d="M3.284 11.266c-.133-2-.2-2.999.393-3.632C4.27 7 5.272 7 7.276 7h5.449c2.003 0 3.005 0 3.598.634c.162.173.275.374.35.616H17a4.75 4.75 0 1 1 0 9.5h-.722l-.02.25H3.742a86 86 0 0 1-.116-1.6zm13.1 4.984H17a3.25 3.25 0 0 0 0-6.5h-.2c-.012.43-.045.93-.084 1.516z" fill="currentColor" fill-rule="evenodd"></path></svg>
</div>
<div className="text-[#8B2635] text-lg font-bold tracking-widest uppercase mt-2 font-serif">Barista</div>
</div>

<button className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg z-20">
<svg aria-hidden="true" className="lucide lucide-chevron-left w-6 h-6 text-[#43436A] stroke-[1.5]" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 w-16 h-16 bg-[#FF7F66] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg z-20">
<svg aria-hidden="true" className="lucide lucide-chevron-right stroke-[1.5] w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>

<div className="max-w-[1600px] mx-auto px-6 lg:px-12 mt-16 grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-6">
<p className="leading-relaxed text-lg text-slate-500 max-w-xl">
                    Curabitur nisi nisi, varius ac lectus sed, eleifend ultrices nibh nam sit amet eros mauris. Cras non ligula sed metus aliquet mollis nec sed tellus.
                </p>
<div className="mt-8">
<a className="inline-flex px-8 py-4 rounded-full border border-gray-300 text-[#43436A] font-medium text-xs tracking-widest uppercase hover:border-[#FF7F66] transition-colors" href="#">
                        Case Study
                    </a>
</div>
</div>
<div className="md:col-span-3">
<span className="text-[10px] font-bold text-[#FF7F66] uppercase tracking-widest mb-4 block">Category</span>
<p className="text-lg text-[#43436A]">Brand Identity &amp; Packaging Design</p>
<div className="w-8 h-0.5 bg-[#FF7F66] mt-6"></div>
</div>
<div className="md:col-span-3">
<span className="text-[10px] font-bold text-[#FF7F66] uppercase tracking-widest mb-4 block">Client</span>
<p className="text-lg text-[#43436A]">Cusco Coffee Roasters</p>
<div className="w-8 h-0.5 bg-[#FF7F66] mt-6"></div>
</div>
</div>
</section>

<section className="bg-[#FF7F66] py-20 w-full">
<div className="lg:px-12 flex flex-col lg:flex-row gap-12 max-w-[1600px] mr-auto ml-auto pr-6 pl-6 gap-x-12 gap-y-12 items-center justify-between">
<h2 className="text-4xl font-serif text-white tracking-tight shrink-0">Our Clients</h2>
<div className="flex flex-wrap gap-12 lg:gap-20 opacity-80 gap-x-12 gap-y-12 items-center justify-center">

<div className="text-white text-5xl"><svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:atom-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M16.471 16.471c4.939-4.939 6.94-10.944 4.471-13.413c-2.469-2.47-8.474-.468-13.413 4.47c-4.939 4.94-6.94 10.945-4.471 13.414c2.47 2.47 8.475.468 13.413-4.47" fill="currentColor" opacity=".3"></path><path className="" d="M7.529 16.471C2.59 11.533.589 5.527 3.058 3.058c2.469-2.47 8.474-.468 13.413 4.47c4.939 4.94 6.94 10.945 4.471 13.414c-2.47 2.47-8.475.468-13.413-4.47" fill="currentColor" opacity=".3"></path><path d="M14.5 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" fill="currentColor"></path></svg></div>
<div className="text-5xl text-white"><svg aria-hidden="true" className="iconify iconify--solar w-[48px] h-[48px]" data-icon="solar:bicycling-bold-duotone" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{width: '48px', height: '48px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M17 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0" fill="currentColor"></path><path className="" clip-rule="evenodd" d="m12.161 7.115l.613.609c.91.903 1.226 1.2 1.606 1.356s.813.17 2.095.17H18.5a.75.75 0 0 1 0 1.5h-2.167c-1.083 0-1.836 0-2.525-.283c-.69-.284-1.223-.815-1.99-1.58l-.102-.1l-.577-.573c-.409-.406-.66-.653-.86-.803a.8.8 0 0 0-.185-.11l-.01.006a.8.8 0 0 0-.152.135c-.17.185-.372.472-.7.946l-1.228 1.767c-.334.482-.537.777-.652 1.007a.8.8 0 0 0-.076.204l.007.008a.8.8 0 0 0 .165.125c.218.135.546.28 1.083.515l1.516.66c.648.284 1.194.522 1.615.768c.446.262.824.572 1.077 1.035c.254.464.311.949.29 1.466c-.019.487-.113 1.076-.224 1.774l-.064.401a.75.75 0 1 1-1.481-.236l.057-.359c.12-.752.198-1.252.214-1.64c.015-.367-.033-.549-.108-.686c-.075-.136-.202-.275-.52-.46c-.334-.197-.797-.4-1.496-.705l-1.475-.644l-.047-.02c-.476-.208-.905-.395-1.226-.593c-.348-.215-.69-.515-.827-1c-.137-.486-.004-.92.18-1.286c.168-.336.435-.72.732-1.148l.028-.041L8 7.532l.028-.04c.291-.42.554-.798.806-1.07c.275-.296.63-.57 1.125-.615s.893.16 1.217.402c.298.222.624.546.986.906" fill="currentColor" fill-rule="evenodd"></path><path clip-rule="evenodd" d="M18 14.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5m-12-1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5" fill="currentColor" fill-rule="evenodd" opacity=".5"></path></svg></div>
<div className="text-white text-5xl"><svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:crown-star-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="m21.838 11.126l-.229 2.436c-.378 4.012-.567 6.019-1.75 7.228C18.678 22 16.906 22 13.36 22h-2.72c-3.545 0-5.317 0-6.5-1.21s-1.371-3.216-1.749-7.228l-.23-2.436c-.18-1.912-.27-2.869.058-3.264a1 1 0 0 1 .675-.367c.476-.042 1.073.638 2.268 1.998c.618.704.927 1.055 1.271 1.11a.92.92 0 0 0 .562-.09c.319-.16.53-.595.955-1.464l2.237-4.584C10.989 2.822 11.39 2 12 2s1.011.822 1.813 2.465l2.237 4.584c.424.87.636 1.304.955 1.464c.176.089.37.12.562.09c.344-.055.653-.406 1.271-1.11c1.195-1.36 1.792-2.04 2.268-1.998a1 1 0 0 1 .675.367c.327.395.237 1.352.057 3.264" fill="currentColor" opacity=".5"></path><path className="" d="m12.952 12.699l-.098-.176c-.38-.682-.57-1.023-.854-1.023s-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532s.164.577.667 1.165l.13.152c.143.167.215.25.247.354s.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.136.399-.136s.202.046.399.136l.178.082c.691.319 1.037.477 1.267.303s.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438s.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354" fill="currentColor"></path></svg></div>
<div className="text-white text-5xl"><svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:infinity-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M2.75 12a4.25 4.25 0 0 1 6.8-3.4a.75.75 0 1 0 .901-1.2A5.75 5.75 0 1 0 7 17.75c.784 0 1.464-.143 2.064-.435s1.079-.714 1.489-1.215c.66-.804 1.196-1.894 1.776-3.074l.339-.689a.755.755 0 0 0-.339-1.008a.745.745 0 0 0-1.003.337l-.366.743c-.584 1.183-1.027 2.082-1.567 2.74c-.307.375-.624.64-.986.817s-.81.284-1.407.284A4.25 4.25 0 0 1 2.75 12" fill="currentColor" fill-rule="evenodd"></path><path d="M12.67 12.335a.755.755 0 0 0-.34-1.006a.746.746 0 0 0-.975.284q.162-.323.316-.639c.58-1.18 1.117-2.27 1.776-3.074c.41-.501.89-.923 1.49-1.215S16.217 6.25 17 6.25a5.75 5.75 0 1 1-3.45 10.35a.75.75 0 0 1 .9-1.2A4.25 4.25 0 1 0 17 7.75c-.596 0-1.045.107-1.406.284c-.363.176-.68.442-.987.816c-.54.66-.983 1.558-1.567 2.741q-.174.355-.369.744z" fill="currentColor" opacity=".5"></path></svg></div>
</div>
<a className="px-8 py-3 rounded-full border border-white/40 text-white font-medium text-xs tracking-widest uppercase hover:bg-white hover:text-[#FF7F66] transition-colors shrink-0" href="#">
                View All
            </a>
</div>
</section>

<section className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 py-32">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">

<div className="lg:col-span-3 flex flex-col justify-between h-full">
<div className="">
<span className="text-xs font-medium tracking-[0.2em] text-[#FF7F66] uppercase block mb-4">Insights</span>
<h2 className="text-4xl lg:text-5xl font-serif text-[#43436A] tracking-tight mb-8">Latest Updates</h2>
<div className="w-12 h-0.5 bg-[#FF7F66] mb-12"></div>
</div>
<div className="space-y-6">
<h3 className="text-lg font-serif text-[#43436A]">Subscribe for updates</h3>
<p className="text-sm text-slate-500">Curated design insights weekly.</p>
<form className="space-y-4">
<input className="w-full bg-transparent border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-[#FF7F66] transition-colors" placeholder="Enter your email" type="email"/>
<button className="w-full py-3 rounded-full border border-gray-300 text-[#43436A] text-xs font-medium tracking-widest uppercase hover:border-[#FF7F66] transition-colors flex items-center justify-center gap-2" type="submit">
                            Subscribe <svg aria-hidden="true" className="lucide lucide-chevron-right w-3 h-3 stroke-[1.5]" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</form>
</div>
</div>

<div className="lg:col-span-5 relative flex justify-center items-center py-8">

<div className="absolute inset-0 bg-gray-50 transform rotate-3 rounded shadow-sm z-0 w-[95%] mx-auto h-[95%] top-[2.5%]"></div>

<div className="bg-white shadow-2xl p-10 lg:p-14 relative z-10 rounded-sm w-full h-full flex flex-col justify-between min-h-[500px]">
<span className="text-xs text-slate-400 font-mono mb-8 block">01.</span>
<div className="">
<h3 className="text-3xl lg:text-4xl font-serif text-[#43436A] leading-tight mb-4">
                            While Others Talk,  We Listen.
                        </h3>
<span className="text-xs text-[#FF7F66] font-medium uppercase tracking-widest mb-8 block">Oct. 16, 2024</span>
<p className="leading-relaxed text-lg text-slate-500 mb-8">We believe the most profound solutions emerge from deep listening. Our process prioritizes your unique brand story, ensuring every aesthetic choice is anchored in strategic intent and visual clarity.</p>
</div>
<div className="w-12 h-0.5 bg-[#FF7F66] mb-6"></div>
<a className="text-xs font-bold text-[#FF7F66] tracking-widest uppercase flex items-center gap-2 hover:gap-4 transition-all" href="#">
                        Read Full Article <svg aria-hidden="true" className="lucide lucide-chevron-right w-3 h-3 stroke-[1.5]" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>

<div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end gap-6">
<button className="w-16 h-16 bg-[#FF7F66] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
<svg aria-hidden="true" className="lucide lucide-chevron-right w-6 h-6 text-white stroke-[1.5]" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<button className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
<svg aria-hidden="true" className="lucide lucide-chevron-left w-6 h-6 text-slate-400 stroke-[1.5]" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<div className="mt-12">
<a className="inline-flex px-8 py-4 rounded-full border border-gray-300 text-[#43436A] font-medium text-xs tracking-widest uppercase hover:border-[#FF7F66] transition-colors items-center gap-3" href="#">
                        All Articles <svg aria-hidden="true" className="lucide lucide-chevron-right w-3 h-3 stroke-[1.5]" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</div>
</section>

<footer className="w-full mt-12">
<div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12 flex flex-col md:flex-row items-center justify-between border-t border-gray-100">
<a className="text-2xl font-serif font-medium text-[#FF7F66] mb-6 md:mb-0" href="#">Lumina</a>
<div className="flex gap-8 mb-6 md:mb-0">
<a className="text-[10px] font-bold tracking-widest uppercase text-slate-500 hover:text-[#FF7F66]" href="#">Home</a>
<a className="text-[10px] font-bold tracking-widest uppercase text-slate-500 hover:text-[#FF7F66]" href="#">Products</a>
<a className="text-[10px] font-bold tracking-widest uppercase text-slate-500 hover:text-[#FF7F66]" href="#">Awards</a>
<a className="text-[10px] font-bold tracking-widest uppercase text-slate-500 hover:text-[#FF7F66]" href="#">Contact</a>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-400 text-sm hover:bg-indigo-100 cursor-pointer"><svg aria-hidden="true" className="lucide lucide-facebook w-3 h-3" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></div>
<div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-400 text-sm hover:bg-indigo-100 cursor-pointer"><svg aria-hidden="true" className="lucide lucide-twitter w-3 h-3" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></div>
<div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-400 text-sm hover:bg-indigo-100 cursor-pointer"><svg aria-hidden="true" className="lucide lucide-instagram w-3 h-3" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></div>
</div>
</div>
<div className="w-full py-12 px-6 lg:px-12 bg-orange-500">
<div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center text-white/80 text-xs">
<div className="mb-4 md:mb-0">
<p className="">© 2024 Lumina Studio.</p>
<p>All rights reserved.</p>
</div>
<div className="flex gap-12">
<div className="">
<span className="block opacity-60 mb-1">General inquiries:</span>
<a className="hover:text-white transition-colors" href="mailto:hello@lumina.studio">hello@lumina.studio</a>
</div>
<div>
<span className="block opacity-60 mb-1">Press inquiries:</span>
<a className="hover:text-white transition-colors" href="mailto:press@lumina.studio">press@lumina.studio</a>
</div>
</div>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Use</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
