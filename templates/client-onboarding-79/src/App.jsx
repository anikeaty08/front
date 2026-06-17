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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
zinc: {
850: '#1f1f22',
950: '#09090b',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    document.addEventListener("DOMContentLoaded", () => {
      // 1. Text Splitting for Reveal Animations
      const splitTextElements = document.querySelectorAll(".reveal-text");
      splitTextElements.forEach((element) => {
        if (element.children.length === 0) {
          const text = element.innerText;
          const words = text.split(" ");
          element.innerHTML = words.map(word => `<span class="word-wrapper"><span class="word-inner">${word}&nbsp;</span></span>`).join("");
        } else {
          const wrapper = document.createElement("span");
          wrapper.className = "word-wrapper";
          const inner = document.createElement("span");
          inner.className = "word-inner";
          inner.innerHTML = element.innerHTML;
          element.innerHTML = "";
          wrapper.appendChild(inner);
          element.appendChild(wrapper);
        }
      });

      // 2. Logic to Show "Start technical submission" button
      // Simulate that the user is at step 3 or 4
      const clientCurrentStep = 3; 
      const techBtn = document.getElementById("tech-submission-btn");
      if (clientCurrentStep === 3 || clientCurrentStep === 4) {
        techBtn.classList.remove("hidden");
      }

      // 3. GSAP Timeline Sequence (4s per screen)
      const tl = gsap.timeline();

      // Screen 1: Hero (0s -> 4s)
      tl.fromTo("#screen-1 .word-inner", 
          { y: "120%" }, 
          { y: "0%", duration: 1, stagger: 0.05, ease: "power4.out" }
        )
        // Hold for 3s, then crossfade out
        .to("#screen-1", { autoAlpha: 0, duration: 1, ease: "power2.inOut" }, "+=3")

      // Screen 2: Philosophy (4s -> 8s)
        .to("#screen-2", { autoAlpha: 1, duration: 1, ease: "power2.inOut" }, "<")
        .fromTo("#screen-2 .word-inner", 
          { y: "120%" }, 
          { y: "0%", duration: 1, stagger: 0.05, ease: "power4.out" }, 
          "-=0.5"
        )
        .fromTo("#screen-2 .reveal-fade",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=0.5"
        )
        // Hold for 2s, then crossfade out
        .to("#screen-2", { autoAlpha: 0, duration: 1, ease: "power2.inOut" }, "+=2")

      // Screen 3: Onboarding (8s -> 12s)
        .to("#screen-3", { autoAlpha: 1, duration: 1, ease: "power2.inOut" }, "<")
        .fromTo("#screen-3 .word-inner", 
          { y: "120%" }, 
          { y: "0%", duration: 0.8, stagger: 0.05, ease: "power4.out" }, 
          "-=0.5"
        )
        .fromTo("#screen-3 .reveal-fade",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo("#screen-3 .reveal-list li",
          { opacity: 0, x: -15 },
          { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
          "-=0.6"
        )
        // Hold for 2s, then crossfade out
        .to("#screen-3", { autoAlpha: 0, duration: 1, ease: "power2.inOut" }, "+=2.2")

      // Screen 4: Final Split Screen (12s -> infinite)
        .to("#screen-4", { autoAlpha: 1, duration: 1, ease: "power2.inOut" }, "<")
        .fromTo("#screen-4-content", 
          { opacity: 0, y: 20 }, 
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, 
          "-=0.5"
        );
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
      

<div className="gradient-blur">
<div></div><div></div><div></div><div></div><div></div><div></div>
</div>

<nav className="fixed z-50 backdrop-blur-[2px] bg-white/50 w-full border-zinc-100/50 border-b top-0">
</nav>

<main className="relative w-full h-screen">

<div className="absolute inset-0 w-full h-full flex flex-col justify-center pt-20 z-10 bg-white" id="screen-1">
<header className="relative px-4 md:px-6 max-w-7xl mx-auto w-full h-full pb-6">
<div className="relative w-full h-[85vh] rounded-[2rem] overflow-hidden group">
<img alt="AI Interface" className="absolute inset-0 w-full h-full object-cover brightness-[0.6] scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e1d35ae4-0a86-443d-962c-2467763eb5be_3840w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
<div className="relative h-full flex flex-col justify-between p-8 md:p-12 text-white">
<div className="flex justify-between items-start">
<p className="text-xs font-medium tracking-wide opacity-80 flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                ALL SYSTEMS ONLINE
              </p>
<div className="flex gap-2">
<span className="text-xs font-medium bg-white/10 border-white/20 border rounded-full pt-1.5 pr-4 pb-1.5 pl-4 backdrop-blur-sm">
                  Intent Ads
                </span>
</div>
</div>
<div className="mt-auto mb-12">
<h1 className="reveal-text md:text-8xl leading-[0.9] text-6xl font-light tracking-tight"><span className="word-wrapper"><span className="word-inner"><span className="word-wrapper"><span className="word-inner">Google </span></span><span className="word-wrapper"><span className="word-inner">LeadGen </span></span><span className="word-wrapper"><span className="word-inner">Systems </span></span></span></span></h1>
<h1 className="font-serif italic font-normal text-zinc-200 text-6xl md:text-8xl mt-2 tracking-tight">
<span className="reveal-text"><span className="word-wrapper"><span className="word-inner"><span className="word-wrapper"><span className="word-inner">—Optimized </span></span></span></span></span>
</h1>
</div>
<div className="border-gradient rounded-full">
<div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-0 bg-black/40 backdrop-blur-xl rounded-full p-2 md:pl-8 items-center relative z-10">
<div className="border-r border-white/10 px-4 py-2 hidden md:block">
<p className="text-zinc-400 text-xs mb-1">Client</p>
<p className="text-sm font-medium">{{client}}</p>
</div>
<div className="border-r border-white/10 px-4 py-2 hidden md:block">
<p className="text-xs text-zinc-400 mb-1">Manager</p>
<p className="text-sm font-medium">{{fName}}</p>
</div>
<div className="border-r border-white/10 px-4 py-2 hidden md:block">
<p className="text-xs text-zinc-400 mb-1">Properties Onbaording</p>
<p className="text-sm font-medium">{{Onboarding Property count}}</p>
</div>
<div className="px-4 py-2 hidden md:block">
<p className="text-zinc-400 text-xs mb-1">Efficiency Gain</p>
<p className="text-sm font-medium text-green-400">+350% Scale</p>
</div>
<button className="bg-white text-black h-12 rounded-full flex items-center justify-between px-6 hover:bg-zinc-200 transition-colors w-full md:w-auto">
<span className="text-sm font-medium">View Progress Status</span>
<iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</header>
</div>

<div className="absolute inset-0 w-full h-full flex flex-col justify-center pt-20 z-10 bg-white opacity-0 invisible" id="screen-2">
<section className="max-w-7xl mx-auto px-6 w-full h-[85vh] flex flex-col justify-center">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-3">
<h3 className="reveal-text font-serif italic text-3xl text-zinc-400"><span className="word-wrapper"><span className="word-inner"><span className="word-wrapper"><span className="word-inner"> </span></span></span></span></h3>
</div>
<div className="md:col-span-9">
<h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-8">
<span className="reveal-text block"><span className="word-wrapper"><span className="word-inner"><span className="word-wrapper"><span className="word-inner"> </span></span></span></span></span>
<span className="reveal-text block"><span className="word-wrapper"><span className="word-inner"><span className="word-wrapper"><span className="word-inner"> </span></span></span></span></span>
<span className="reveal-text block"><span className="word-wrapper"><span className="word-inner"><span className="word-wrapper"><span className="word-inner">and deploys capital only where it produces  <span className="italic text-zinc-500 font-serif">predictable, compounding leasing performance</span> rather than vanity visibility.</span></span></span></span></span>
</h2>
<div className="flex flex-col md:flex-row gap-8 items-start justify-between">
<p className="text-zinc-500 text-lg max-w-xl leading-relaxed font-light reveal-fade">
                We accomplish this by preventing wasted spend on prospects who would have found you organically, while systematically uncovering net-new demand within each market and submarket to expand your true leasing opportunity.
              </p>
</div>
</div>
</div>
</section>
</div>

<div className="absolute inset-0 w-full h-full flex flex-col justify-center pt-24 pb-6 z-10 bg-white opacity-0 invisible" id="screen-3">
<section className="max-w-7xl mx-auto px-4 md:px-6 w-full h-full flex justify-center items-center">
<div className="w-full bg-zinc-50 rounded-[2rem] p-6 md:p-12 h-full overflow-y-auto">
<div className="flex justify-center mb-8">
<h3 className="reveal-text font-serif italic text-4xl text-zinc-900"><span className="word-wrapper"><span className="word-inner"><span className="word-wrapper"><span className="word-inner"> </span></span></span></span></h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-10">
<div className="md:col-span-4 reveal-fade">
<p className="text-zinc-500 text-lg font-light leading-relaxed">
                A clear, lightweight path from first call to production—built
                around your constraints, data, and security requirements.
              </p>
<div className="mt-8 border-gradient rounded-2xl">
<div className="bg-white rounded-2xl p-4 relative z-10 border border-zinc-200/60">
<p className="text-xs text-zinc-400 mb-1">Typical timeline</p>
<p className="text-sm font-medium text-zinc-900">
                    10–21 days to first deployment
                  </p>
</div>
</div>
</div>
<div className="md:col-span-8">
<ol className="space-y-4 reveal-list">
<li className="border border-zinc-200 bg-white rounded-2xl p-5 flex gap-4">
<div className="w-10 h-10 shrink-0 rounded-full bg-zinc-900 text-white flex items-center justify-center text-sm font-medium">1</div>
<div className="flex-1">
<div className="flex items-center justify-between gap-4">
<h4 className="text-lg font-medium tracking-tight">Discovery &amp; Audit</h4>
<span className="text-xs text-zinc-400 shrink-0">Day 0–2</span>
</div>
<p className="text-sm text-zinc-500 leading-relaxed mt-1">Define outcomes, map workflows, review stack, and identify highest-leverage automation opportunities.</p>
</div>
</li>
<li className="border border-zinc-200 bg-white rounded-2xl p-5 flex gap-4">
<div className="w-10 h-10 shrink-0 rounded-full bg-zinc-100 text-zinc-700 flex items-center justify-center text-sm font-medium">2</div>
<div className="flex-1">
<div className="flex items-center justify-between gap-4">
<h4 className="text-lg font-medium tracking-tight">Architecture &amp; Data Plan</h4>
<span className="text-xs text-zinc-400 shrink-0">Day 2–5</span>
</div>
<p className="text-sm text-zinc-500 leading-relaxed mt-1">Select model strategy, define permissions, evaluation approach, and deployment boundaries.</p>
</div>
</li>
<li className="border border-zinc-200 bg-white rounded-2xl p-5 flex gap-4">
<div className="w-10 h-10 shrink-0 rounded-full bg-zinc-100 text-zinc-700 flex items-center justify-center text-sm font-medium">3</div>
<div className="flex-1">
<div className="flex items-center justify-between gap-4">
<h4 className="text-lg font-medium tracking-tight">Prototype Agent</h4>
<span className="text-xs text-zinc-400 shrink-0">Day 5–10</span>
</div>
<p className="text-sm text-zinc-500 leading-relaxed mt-1">Build a working agent with guardrails, tool access, and a test harness on representative tasks.</p>
</div>
</li>
</ol>
</div>
</div>
</div>
</section>
</div>

<div className="flex flex-col md:px-6 bg-white opacity-0 invisible w-full h-full z-20 pt-24 pr-4 pb-6 pl-4 absolute top-0 right-0 bottom-0 left-0" id="screen-4">
<div className="max-w-7xl mx-auto w-full h-[85vh] flex flex-col md:flex-row gap-6">

<div className="md:w-1/2 flex flex-col bg-zinc-50 w-full border-zinc-100/60 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 shadow-inner items-center justify-center" id="screen-4-content">
<div className="text-center mb-10">
<h2 className="text-4xl md:text-5xl font-light tracking-tight text-zinc-900">
              Welcome, <span className="font-serif italic text-zinc-500">{{fName}}</span>
</h2>
</div>
<div className="flex flex-col gap-4 w-full max-w-[320px]">
<button className="hover:bg-zinc-800 transition-all shadow-zinc-900/10 flex gap-3 text-sm font-medium text-white bg-zinc-900 w-full rounded-full pt-4 pr-6 pb-4 pl-6 shadow-lg gap-x-3 gap-y-3 items-center justify-center">
              View your progress
              <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="border border-zinc-200 bg-white text-zinc-900 w-full py-4 px-6 rounded-full text-sm font-medium hover:bg-zinc-50 transition-colors flex items-center justify-center gap-3" id="tech-submission-btn">
              Start technical submission
              <iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon>
</button>
</div>
</div>

<div className="hidden md:block w-1/2 h-full rounded-[2rem] overflow-hidden relative shadow-lg">
<img alt="AI Interface" className="absolute inset-0 w-full h-full object-cover brightness-[0.6]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e1d35ae4-0a86-443d-962c-2467763eb5be_3840w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/20"></div>
<div className="absolute bottom-12 left-10 text-white pr-10">
<p className="text-xs font-medium tracking-wide opacity-80 flex items-center gap-2 mb-6">
<span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
              ALL SYSTEMS ONLINE
            </p>
<h1 className="text-5xl font-light tracking-tight leading-none mb-2">Google LeadGen</h1>
<h1 className="font-serif italic font-normal text-zinc-300 text-5xl tracking-tight">
              —Systems Optimized
            </h1>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
