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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animations
    const heroTl = gsap.timeline();
    heroTl.from(".hero-content > *", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.5)"
    })
    .from(".hero-illustration", {
        scale: 0.9,
        rotation: 5,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.6");

    // Floating Icon in Hero
    gsap.to(".hero-icon-float", {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // Generic Fade Up for Sections
    gsap.utils.toArray(".fade-up-element").forEach(element => {
      gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: "top 85%"
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    });

    // Services Cards Stagger
    gsap.from(".services-grid > div", {
        scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%"
        },
        y: 80,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "back.out(1.2)"
    });

    // Footer Scroll Animation Trigger
    gsap.utils.toArray(".animate-on-scroll").forEach(el => {
      ScrollTrigger.create({
        trigger: "#footer",
        start: "top 85%",
        onEnter: () => {
          el.style.animationPlayState = 'running';
        }
      });
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
      

<nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center relative z-50">
<div className="flex items-center gap-2">
<span className="text-4xl font-bold tracking-tighter">
        ZeroToProd
      </span>
</div>
<div className="hidden lg:flex items-center gap-10 text-lg font-bold text-zinc-800 bg-white px-8 py-3 rounded-full border-2 border-black brutalist-shadow">
<a className="hover:text-[#88cc33] transition-colors" href="#roadmaps">Roadmaps</a>
<a className="hover:text-[#88cc33] transition-colors" href="#workflows">Workflows</a>
<a className="hover:text-[#88cc33] transition-colors" href="#templates">Prompts</a>
<a className="hover:text-[#88cc33] transition-colors" href="#success-stories">Success Stories</a>
</div>
<div className="hidden lg:block">
<a className="bg-[#B9FF66] border-2 border-black rounded-xl px-8 py-4 text-black font-bold text-lg brutalist-shadow" href="#get-started">
        Start Building
      </a>
</div>

<button className="lg:hidden text-black bg-white p-2 border-2 border-black rounded-lg brutalist-shadow">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</nav>

<section className="max-w-7xl mx-auto px-6 py-12 lg:py-20 relative">
<div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="max-w-xl hero-content">
<div className="inline-block bg-white border-2 border-black px-4 py-2 rounded-full font-bold mb-6 transform -rotate-2 brutalist-shadow">
          Ship faster with AI
        </div>
<h1 className="text-6xl lg:text-[5.5rem] font-bold tracking-tighter leading-[0.9] mb-8 uppercase">
          Turn Ideas Into <br/>
<span className="text-transparent bg-clip-text" style={{WebkitTextStroke: '2px black', color: '#B9FF66'}}>Real Products</span>
</h1>
<p className="text-2xl text-zinc-800 mb-10 leading-snug font-medium">
          Learn how to go from idea → MVP → production using modern AI coding workflows. Step-by-step roadmaps to build, launch, and ship faster.
        </p>
<div className="flex flex-col sm:flex-row gap-6 font-bold">
<button className="bg-black text-[#B9FF66] text-xl px-10 py-5 rounded-2xl brutalist-shadow border-2 border-black flex justify-center items-center gap-3 group">
            Start Building
            <iconify-icon className="text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:rocket-linear"></iconify-icon>
</button>
<a className="bg-white text-black text-xl px-10 py-5 rounded-2xl brutalist-shadow border-2 border-black flex justify-center items-center gap-3" href="#roadmaps">
            View Roadmaps
          </a>
</div>
</div>

<div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center hidden md:flex hero-illustration">
<div className="absolute inset-0 flex items-center justify-center">

<div className="absolute w-[85%] h-[75%] bg-[#B9FF66] border-4 border-black rounded-[30px] transform rotate-6 brutalist-shadow translate-x-4 translate-y-4"></div>

<div className="absolute w-[85%] h-[75%] bg-white border-4 border-black rounded-[30px] p-8 flex flex-col z-10 brutalist-shadow">

<div className="flex justify-between items-center border-b-4 border-black pb-4 mb-6">
<div className="flex gap-2">
<div className="w-4 h-4 rounded-full bg-zinc-200 border-2 border-black"></div>
<div className="w-4 h-4 rounded-full bg-zinc-200 border-2 border-black"></div>
<div className="w-4 h-4 rounded-full bg-zinc-200 border-2 border-black"></div>
</div>
<div className="text-xl font-bold tracking-tighter uppercase">Deployment Status</div>
</div>

<div className="flex-1 flex items-end justify-between gap-4 relative">
<div className="w-1/4 h-[30%] bg-zinc-100 border-4 border-black rounded-t-xl relative group hover:bg-zinc-200 transition-colors flex items-center justify-center"><span className="font-bold rotate-[-90deg]">Idea</span></div>
<div className="w-1/4 h-[50%] bg-zinc-100 border-4 border-black rounded-t-xl relative group hover:bg-zinc-200 transition-colors flex items-center justify-center"><span className="font-bold rotate-[-90deg]">Prompt</span></div>
<div className="w-1/4 h-[75%] bg-[#B9FF66] border-4 border-black rounded-t-xl relative flex items-center justify-center">
<iconify-icon className="absolute -top-16 left-1/2 -translate-x-1/2 text-[3rem] text-black hero-icon-float" icon="solar:code-square-linear"></iconify-icon>
<span className="font-bold rotate-[-90deg]">MVP</span>
</div>
<div className="w-1/4 h-[100%] bg-black border-4 border-black rounded-t-xl relative flex items-center justify-center">
<div className="absolute -top-8 -right-8 bg-white border-4 border-black px-4 py-2 rounded-full font-black text-xl tracking-tighter brutalist-shadow rotate-12 z-20">
                  Shipped 🚀
                </div>
<span className="font-bold rotate-[-90deg] text-[#B9FF66]">Production</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full overflow-hidden bg-[#B9FF66] border-y-4 border-black py-4 mt-12 transform -rotate-1 relative z-20 shadow-[0_8px_0_0_rgba(0,0,0,1)]">
<div className="flex whitespace-nowrap w-[200%]">
<div className="animate-marquee flex gap-10 text-3xl md:text-5xl font-black tracking-tighter uppercase items-center text-black w-1/2 justify-around">
<span>Vibe Coding</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
<span>AI Agents</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
<span>Next.js</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
<span>Cursor Workflows</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
<span>Prompt Engineering</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
<span>Ship Fast</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<div className="animate-marquee flex gap-10 text-3xl md:text-5xl font-black tracking-tighter uppercase items-center text-black w-1/2 justify-around">
<span>Vibe Coding</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
<span>AI Agents</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
<span>Next.js</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
<span>Cursor Workflows</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
<span>Prompt Engineering</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
<span>Ship Fast</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>

<section className="py-16 bg-white border-b-4 border-black overflow-hidden relative">
<div className="max-w-7xl mx-auto px-6 text-center mb-10">
<p className="text-sm font-bold tracking-widest uppercase text-zinc-500">Powered by modern tech stacks</p>
</div>
<div className="flex whitespace-nowrap w-[200%] opacity-80 hover:opacity-100 transition-opacity duration-300">

<div className="animate-marquee-slow flex justify-around items-center w-1/2 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-5xl font-black tracking-tighter text-black transform scale-y-110 mx-10">OpenAI</span>
<span className="text-5xl font-bold tracking-tighter text-black mx-10">Vercel</span>
<div className="flex flex-col items-center mx-10 text-black">
<span className="text-5xl font-semibold tracking-tighter leading-none">Cursor</span>
</div>
<span className="text-4xl font-black tracking-widest text-black italic mx-10">Next.js</span>
<span className="text-5xl font-black tracking-tighter text-[#1DB954] mx-10">Supabase</span>
<span className="text-5xl font-bold tracking-tighter text-[#635BFF] mx-10">Stripe</span>
<span className="text-5xl font-black tracking-tighter text-black mx-10">GitHub</span>
</div>

<div className="animate-marquee-slow flex justify-around items-center w-1/2 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-5xl font-black tracking-tighter text-black transform scale-y-110 mx-10">OpenAI</span>
<span className="text-5xl font-bold tracking-tighter text-black mx-10">Vercel</span>
<div className="flex flex-col items-center mx-10 text-black">
<span className="text-5xl font-semibold tracking-tighter leading-none">Cursor</span>
</div>
<span className="text-4xl font-black tracking-widest text-black italic mx-10">Next.js</span>
<span className="text-5xl font-black tracking-tighter text-[#1DB954] mx-10">Supabase</span>
<span className="text-5xl font-bold tracking-tighter text-[#635BFF] mx-10">Stripe</span>
<span className="text-5xl font-black tracking-tighter text-black mx-10">GitHub</span>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="roadmaps">

<div className="grid lg:grid-cols-12 gap-10 items-center mb-20 fade-up-element">
<div className="lg:col-span-8">
<div className="inline-block bg-[#B9FF66] text-black font-bold px-4 py-2 border-2 border-black rounded-lg mb-6 transform -rotate-2">
          Core Roadmaps
        </div>
<h2 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight">
          Learn how to build real applications from idea to production using AI.
        </h2>
</div>

<div className="lg:col-span-4 flex justify-center lg:justify-end relative">
<div className="w-48 h-48 bg-white border-4 border-black rounded-full brutalist-shadow flex flex-col items-center justify-center relative z-10 group">
<iconify-icon className="text-[5rem] text-black group-hover:scale-110 transition-transform duration-300" icon="solar:map-arrow-up-linear"></iconify-icon>
</div>

<div className="absolute w-48 h-48 bg-[#B9FF66] border-4 border-black rounded-full translate-x-4 translate-y-4"></div>

<iconify-icon className="absolute -top-4 right-10 text-4xl text-black rotate-12 z-20 animate-pulse" icon="solar:star-fall-linear"></iconify-icon>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 services-grid">

<div className="bg-zinc-100 p-8 rounded-[30px] border-4 border-black brutalist-shadow flex flex-col justify-between min-h-[320px] group transition-colors hover:bg-[#B9FF66]">
<div>
<iconify-icon className="text-[3.5rem] mb-6 text-black group-hover:rotate-12 transition-transform" icon="solar:code-square-linear"></iconify-icon>
<h3 className="text-3xl font-black tracking-tighter leading-tight mb-4">Build an<br/>AI SaaS</h3>
</div>
<a className="flex items-center gap-4 text-xl font-bold mt-auto group-hover:text-black" href="#workflows">
<div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center bg-white group-hover:bg-black group-hover:text-[#B9FF66] transition-colors">
<iconify-icon className="text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
          Start Roadmap
        </a>
</div>

<div className="bg-[#B9FF66] p-8 rounded-[30px] border-4 border-black brutalist-shadow flex flex-col justify-between min-h-[320px] group transition-colors hover:bg-black hover:text-white">
<div>
<iconify-icon className="text-[3.5rem] mb-6 text-black group-hover:text-white group-hover:rotate-12 transition-all" icon="solar:plug-circle-linear"></iconify-icon>
<h3 className="text-3xl font-black tracking-tighter leading-tight mb-4">Build a Chrome<br/>Extension</h3>
</div>
<a className="flex items-center gap-4 text-xl font-bold mt-auto" href="#workflows">
<div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center bg-white text-black group-hover:border-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
          Start Roadmap
        </a>
</div>

<div className="bg-black text-white p-8 rounded-[30px] border-4 border-black brutalist-shadow flex flex-col justify-between min-h-[320px] group transition-colors hover:bg-zinc-800">
<div>
<iconify-icon className="text-[3.5rem] mb-6 text-[#B9FF66] group-hover:rotate-12 transition-transform" icon="solar:bolt-circle-linear"></iconify-icon>
<h3 className="text-3xl font-black tracking-tighter leading-tight mb-4">Build an<br/>AI Agent</h3>
</div>
<a className="flex items-center gap-4 text-xl font-bold mt-auto text-[#B9FF66]" href="#workflows">
<div className="w-12 h-12 rounded-full border-2 border-zinc-700 flex items-center justify-center bg-zinc-900 group-hover:border-[#B9FF66] transition-colors">
<iconify-icon className="text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
          Start Roadmap
        </a>
</div>

<div className="bg-zinc-100 p-8 rounded-[30px] border-4 border-black brutalist-shadow flex flex-col justify-between min-h-[320px] group transition-colors hover:bg-[#B9FF66]">
<div>
<iconify-icon className="text-[3.5rem] mb-6 text-black group-hover:rotate-12 transition-transform" icon="solar:window-frame-linear"></iconify-icon>
<h3 className="text-3xl font-black tracking-tighter leading-tight mb-4">Startup<br/>Landing Page</h3>
</div>
<a className="flex items-center gap-4 text-xl font-bold mt-auto group-hover:text-black" href="#workflows">
<div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center bg-white group-hover:bg-black group-hover:text-[#B9FF66] transition-colors">
<iconify-icon className="text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
          Start Roadmap
        </a>
</div>

<div className="bg-[#B9FF66] p-8 rounded-[30px] border-4 border-black brutalist-shadow flex flex-col justify-between min-h-[320px] group transition-colors hover:bg-black hover:text-white">
<div>
<iconify-icon className="text-[3.5rem] mb-6 text-black group-hover:text-white group-hover:rotate-12 transition-all" icon="solar:book-bookmark-linear"></iconify-icon>
<h3 className="text-3xl font-black tracking-tighter leading-tight mb-4">Prompt<br/>Libraries</h3>
</div>
<a className="flex items-center gap-4 text-xl font-bold mt-auto" href="#templates">
<div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center bg-white text-black group-hover:border-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
          View Prompts
        </a>
</div>

<div className="bg-black text-white p-8 rounded-[30px] border-4 border-black brutalist-shadow flex flex-col justify-between min-h-[320px] group transition-colors hover:bg-zinc-800">
<div>
<iconify-icon className="text-[3.5rem] mb-6 text-[#B9FF66] group-hover:rotate-12 transition-transform" icon="solar:magic-stick-3-linear"></iconify-icon>
<h3 className="text-3xl font-black tracking-tighter leading-tight mb-4">AI Tool<br/>Workflows</h3>
</div>
<a className="flex items-center gap-4 text-xl font-bold mt-auto text-[#B9FF66]" href="#workflows">
<div className="w-12 h-12 rounded-full border-2 border-zinc-700 flex items-center justify-center bg-zinc-900 group-hover:border-[#B9FF66] transition-colors">
<iconify-icon className="text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
          Learn Workflows
        </a>
</div>
</div>
</section>


<section className="max-w-7xl mx-auto px-6 py-24 border-t-4 border-black border-dashed" id="workflows">
<div className="grid lg:grid-cols-2 gap-16 items-center fade-up-element">
<div className="order-2 lg:order-1 relative h-[400px]">
<div className="absolute inset-0 bg-white border-4 border-black rounded-[30px] brutalist-shadow p-8 flex flex-col justify-between z-10">
<div className="w-full h-1/2 bg-zinc-100 border-4 border-black rounded-xl p-4 flex gap-4">
<div className="w-12 h-12 bg-zinc-300 rounded-full border-2 border-black shrink-0 flex items-center justify-center"><iconify-icon className="text-2xl" icon="solar:code-circle-linear"></iconify-icon></div>
<div className="flex-1 space-y-3">
<div className="w-3/4 h-4 bg-zinc-300 rounded"></div>
<div className="w-1/2 h-4 bg-zinc-300 rounded"></div>
</div>
</div>
<div className="w-full h-[40%] bg-[#B9FF66] border-4 border-black rounded-xl p-4 flex items-center justify-between">
<span className="text-2xl font-black uppercase tracking-tighter">0 Errors</span>
<iconify-icon className="text-4xl text-black" icon="solar:check-circle-bold"></iconify-icon>
</div>
</div>
<div className="absolute inset-0 bg-black border-4 border-black rounded-[30px] translate-x-4 translate-y-4"></div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 bg-black text-[#B9FF66] font-bold px-4 py-2 border-2 border-black rounded-full mb-6">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> AI Coding Workflows
        </div>
<h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight mb-6">
          Master vibe coding with Cursor &amp; Copilot.
        </h2>
<p className="text-xl text-zinc-700 font-medium mb-8">
          Learn how to leverage AI tools to write boilerplate, debug complex issues, and scaffold entire applications in minutes instead of weeks.
        </p>
<ul className="space-y-4 mb-10 font-bold text-lg">
<li className="flex items-center gap-3"><iconify-icon className="text-2xl text-[#B9FF66] bg-black rounded-full" icon="solar:check-circle-linear"></iconify-icon> Cursor best practices</li>
<li className="flex items-center gap-3"><iconify-icon className="text-2xl text-[#B9FF66] bg-black rounded-full" icon="solar:check-circle-linear"></iconify-icon> Advanced prompting techniques</li>
<li className="flex items-center gap-3"><iconify-icon className="text-2xl text-[#B9FF66] bg-black rounded-full" icon="solar:check-circle-linear"></iconify-icon> Next.js &amp; modern frameworks</li>
</ul>
<button className="bg-[#B9FF66] text-black text-xl font-bold px-8 py-4 rounded-xl brutalist-shadow border-2 border-black hover:bg-white transition-colors">
          Explore Workflows
        </button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t-4 border-black border-dashed bg-zinc-100 rounded-[50px] my-10 border-x-4 border-b-4 brutalist-shadow">
<div className="grid lg:grid-cols-2 gap-16 items-center fade-up-element">
<div>
<div className="inline-flex items-center gap-2 bg-[#B9FF66] text-black font-bold px-4 py-2 border-2 border-black rounded-full mb-6">
<iconify-icon icon="solar:map-arrow-up-linear"></iconify-icon> Step-by-step Roadmaps
        </div>
<h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight mb-6">
          From idea to production without the guesswork.
        </h2>
<p className="text-xl text-zinc-700 font-medium mb-8">
          Follow structured paths designed for indie hackers and beginners. We break down the exact steps to launch your product using AI tools.
        </p>
<ul className="space-y-4 mb-10 font-bold text-lg">
<li className="flex items-center gap-3"><iconify-icon className="text-2xl text-[#B9FF66] bg-black rounded-full" icon="solar:check-circle-linear"></iconify-icon> Idea validation &amp; MVP scoping</li>
<li className="flex items-center gap-3"><iconify-icon className="text-2xl text-[#B9FF66] bg-black rounded-full" icon="solar:check-circle-linear"></iconify-icon> Database &amp; Auth setup</li>
<li className="flex items-center gap-3"><iconify-icon className="text-2xl text-[#B9FF66] bg-black rounded-full" icon="solar:check-circle-linear"></iconify-icon> Deployment &amp; Scaling</li>
</ul>
<button className="bg-black text-white text-xl font-bold px-8 py-4 rounded-xl brutalist-shadow border-2 border-black hover:bg-zinc-800 transition-colors">
          Start a Roadmap
        </button>
</div>
<div className="relative h-[400px]">
<div className="absolute inset-0 bg-white border-4 border-black rounded-[30px] brutalist-shadow p-8 flex flex-col justify-center gap-6 z-10">
<div className="flex justify-between items-center border-b-4 border-black pb-4">
<span className="text-xl font-bold uppercase">MVP Progress</span>
<span className="bg-[#B9FF66] px-3 py-1 rounded border-2 border-black font-bold">Building</span>
</div>
<div className="flex items-end gap-2 h-40">
<div className="w-1/4 bg-[#B9FF66] h-[30%] border-2 border-black rounded-t"></div>
<div className="w-1/4 bg-[#B9FF66] h-[60%] border-2 border-black rounded-t"></div>
<div className="w-1/4 bg-zinc-800 h-[80%] border-2 border-black rounded-t relative">
<iconify-icon className="absolute -top-10 left-1/2 -translate-x-1/2 text-3xl text-white" icon="solar:cursor-click-linear"></iconify-icon>
</div>
<div className="w-1/4 bg-zinc-200 h-[20%] border-2 border-black rounded-t relative"></div>
</div>
</div>
<div className="absolute inset-0 bg-[#B9FF66] border-4 border-black rounded-[30px] translate-x-4 translate-y-4"></div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t-4 border-black border-dashed" id="templates">
<div className="grid lg:grid-cols-2 gap-16 items-center fade-up-element">
<div className="order-2 lg:order-1 relative h-[400px]">
<div className="absolute inset-0 bg-[#B9FF66] border-4 border-black rounded-[30px] brutalist-shadow p-8 flex items-center justify-center z-10">
<div className="w-[60%] h-[90%] bg-white border-4 border-black rounded-[20px] p-4 flex flex-col gap-4">
<div className="flex items-center gap-3 border-b-2 border-zinc-200 pb-3">
<div className="w-10 h-10 bg-black rounded-full border-2 border-black flex items-center justify-center text-white"><iconify-icon icon="solar:user-linear"></iconify-icon></div>
<div>
<div className="w-20 h-3 bg-zinc-300 rounded mb-1"></div>
<div className="w-12 h-2 bg-zinc-200 rounded"></div>
</div>
</div>
<div className="flex-1 bg-zinc-100 border-2 border-black rounded-xl flex items-center justify-center relative overflow-hidden">
<iconify-icon className="text-6xl text-black" icon="solar:code-square-linear"></iconify-icon>
<div className="absolute bottom-2 right-2 bg-black text-white px-2 py-1 text-xs font-bold rounded border-2 border-black">Ready to deploy</div>
</div>
</div>
</div>
<div className="absolute inset-0 bg-black border-4 border-black rounded-[30px] translate-x-4 translate-y-4"></div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 bg-black text-white font-bold px-4 py-2 border-2 border-black rounded-full mb-6">
<iconify-icon icon="solar:code-square-linear"></iconify-icon> Templates &amp; Prompts
        </div>
<h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight mb-6">
          Don't start from scratch. Use our battle-tested prompts.
        </h2>
<p className="text-xl text-zinc-700 font-medium mb-8">
          Access a massive library of prompts and code templates optimized for AI generation to kickstart your next big idea.
        </p>
<ul className="space-y-4 mb-10 font-bold text-lg">
<li className="flex items-center gap-3"><iconify-icon className="text-2xl text-[#B9FF66] bg-black rounded-full" icon="solar:check-circle-linear"></iconify-icon> SaaS starter kits</li>
<li className="flex items-center gap-3"><iconify-icon className="text-2xl text-[#B9FF66] bg-black rounded-full" icon="solar:check-circle-linear"></iconify-icon> System prompts for Agents</li>
<li className="flex items-center gap-3"><iconify-icon className="text-2xl text-[#B9FF66] bg-black rounded-full" icon="solar:check-circle-linear"></iconify-icon> Component libraries</li>
</ul>
<button className="bg-white text-black text-xl font-bold px-8 py-4 rounded-xl brutalist-shadow border-4 border-black hover:bg-[#B9FF66] transition-colors">
          Browse Library
        </button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24" id="get-started">
<div className="bg-zinc-100 p-10 lg:p-16 rounded-[40px] border-4 border-black brutalist-shadow flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden fade-up-element">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-[#B9FF66] border-4 border-black rounded-full opacity-50 z-0"></div>
<div className="max-w-2xl relative z-10">
<h3 className="text-4xl lg:text-5xl font-black tracking-tighter mb-6">Stop planning. Start building.</h3>
<p className="text-xl text-zinc-700 font-medium">
          Join thousands of developers, indie hackers, and students shipping real products using ZeroToProd.
        </p>
</div>
<button className="bg-black text-white text-xl font-bold px-10 py-5 rounded-2xl brutalist-shadow border-4 border-black whitespace-nowrap hover:bg-zinc-800 transition-colors relative z-10 w-full md:w-auto text-center flex items-center justify-center gap-3">
        Get Started Now
        <iconify-icon className="text-2xl" icon="solar:rocket-linear"></iconify-icon>
</button>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20 border-t-4 border-black border-dashed" id="success-stories">
<div className="fade-up-element mb-16 max-w-3xl">
<div className="inline-block bg-white text-black font-bold px-4 py-2 border-2 border-black rounded-lg mb-6 transform rotate-2 brutalist-shadow">
        Success Stories
      </div>
<h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight">
        See what builders are shipping with ZeroToProd.
      </h2>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="bg-black text-white p-10 rounded-[30px] border-4 border-black shadow-[8px_8px_0_0_#B9FF66] flex flex-col justify-between min-h-[350px] transform transition-transform hover:-translate-y-2">
<p className="text-xl leading-relaxed text-zinc-300 font-medium mb-8">
          A beginner developer used our AI SaaS roadmap to build and launch a document summarizer in a weekend, getting their <span className="text-[#B9FF66] font-bold">first 100 users</span> in days.
        </p>
<a className="flex items-center gap-3 text-[#B9FF66] text-xl font-bold group" href="#">
          Read Story 
          <iconify-icon className="text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="bg-black text-white p-10 rounded-[30px] border-4 border-black shadow-[8px_8px_0_0_#B9FF66] flex flex-col justify-between min-h-[350px] transform transition-transform hover:-translate-y-2">
<p className="text-xl leading-relaxed text-zinc-300 font-medium mb-8">
          An indie hacker leveraged our Cursor workflows to build a complex AI Agent, reducing their dev time from <span className="text-[#B9FF66] font-bold">weeks to just 3 days</span>.
        </p>
<a className="flex items-center gap-3 text-[#B9FF66] text-xl font-bold group" href="#">
          Read Story 
          <iconify-icon className="text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="bg-black text-white p-10 rounded-[30px] border-4 border-black shadow-[8px_8px_0_0_#B9FF66] flex flex-col justify-between min-h-[350px] transform transition-transform hover:-translate-y-2">
<p className="text-xl leading-relaxed text-zinc-300 font-medium mb-8">
          A hackathon team used our Next.js templates and prompt library to win <span className="text-[#B9FF66] font-bold">first place</span> with a fully functional AI web application.
        </p>
<a className="flex items-center gap-3 text-[#B9FF66] text-xl font-bold group" href="#">
          Read Story 
          <iconify-icon className="text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="bg-black pt-20 pb-10" id="footer">
<div className="animate-on-scroll max-w-7xl mr-auto ml-auto pr-6 pl-6" style={{animation: 'fadeSlideIn 0.8s ease-out 0.1s both', animationPlayState: 'paused'}}>
<div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-8 mb-16 w-full">

<div className="col-span-1 md:col-span-12 flex gap-3 md:gap-5 animate-on-scroll pb-4 gap-x-3 gap-y-3 items-baseline" style={{animation: 'fadeSlideIn 1s ease-out 0.2s both', animationPlayState: 'paused'}}>
<h1 className="text-6xl md:text-9xl lg:text-[10rem] leading-[0.8] tracking-tighter font-black text-white select-none">
            ZeroToProd
          </h1>
<span className="text-xl md:text-3xl font-bold text-[#B9FF66] tracking-tighter relative -top-1 md:-top-3 border-2 border-[#B9FF66] px-3 py-1 rounded-full transform rotate-3">
            PLATFORM
          </span>
</div>

<div className="col-span-1 md:col-span-12 grid grid-cols-1 lg:grid-cols-12 animate-on-scroll mt-2 gap-x-12 gap-y-12 border-t-4 border-zinc-800 pt-16" style={{animation: 'fadeSlideIn 0.8s ease-out 0.3s both', animationPlayState: 'paused'}}>

<div className="col-span-1 lg:col-span-5 flex flex-col items-start justify-between gap-10">
<p className="text-2xl text-zinc-400 font-bold tracking-tight leading-relaxed max-w-md">
              Let’s build something great together. We're ready to scale your ideas to production.
            </p>
<div className="flex items-center gap-4">
<button className="bg-[#B9FF66] hover:bg-white text-black px-8 py-4 rounded-xl text-lg font-black transition-colors duration-300 border-4 border-[#B9FF66] hover:border-white tracking-tighter">
                Start Building Free
              </button>
<button className="w-16 h-16 rounded-xl bg-zinc-800 hover:bg-[#B9FF66] text-white hover:text-black flex items-center justify-center transition-colors duration-300 group border-4 border-zinc-800 hover:border-[#B9FF66]">
<iconify-icon className="text-3xl group-hover:rotate-45 transition-transform" icon="solar:arrow-up-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="col-span-1 lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-10 lg:pl-10 w-full">

<div className="flex flex-col gap-6">
<span className="text-[13px] uppercase tracking-widest text-[#B9FF66] font-black border-b-2 border-zinc-800 pb-2">
                Platform
              </span>
<ul className="flex flex-col gap-4">
<li><a className="text-lg text-white hover:text-[#B9FF66] transition-colors font-bold tracking-tight" href="#">Home</a></li>
<li><a className="text-lg text-white hover:text-[#B9FF66] transition-colors font-bold tracking-tight" href="#roadmaps">Roadmaps</a></li>
<li><a className="text-lg text-white hover:text-[#B9FF66] transition-colors font-bold tracking-tight" href="#success-stories">Success Stories</a></li>
</ul>
</div>

<div className="flex flex-col gap-6">
<span className="text-[13px] uppercase tracking-widest text-[#B9FF66] font-black border-b-2 border-zinc-800 pb-2">
                Resources
              </span>
<ul className="flex flex-col gap-4">
<li><a className="text-lg text-white hover:text-[#B9FF66] transition-colors font-bold tracking-tight" href="#workflows">Workflows</a></li>
<li><a className="text-lg text-white hover:text-[#B9FF66] transition-colors font-bold tracking-tight" href="#templates">Prompts</a></li>
<li><a className="text-lg text-white hover:text-[#B9FF66] transition-colors font-bold tracking-tight" href="#">Blog</a></li>
</ul>
</div>

<div className="flex flex-col gap-6">
<span className="text-[13px] uppercase tracking-widest text-[#B9FF66] font-black border-b-2 border-zinc-800 pb-2">
                Social
              </span>
<ul className="flex flex-col gap-4">
<li><a className="text-lg text-white hover:text-[#B9FF66] transition-colors font-bold tracking-tight" href="#">GitHub</a></li>
<li><a className="text-lg text-white hover:text-[#B9FF66] transition-colors font-bold tracking-tight" href="#">Twitter</a></li>
<li><a className="text-lg text-white hover:text-[#B9FF66] transition-colors font-bold tracking-tight" href="#">Discord</a></li>
</ul>
</div>

<div className="flex flex-col gap-6">
<span className="text-[13px] uppercase tracking-widest text-[#B9FF66] font-black border-b-2 border-zinc-800 pb-2">
                Legal
              </span>
<ul className="flex flex-col gap-4">
<li><a className="text-lg text-zinc-500 hover:text-white transition-colors font-bold tracking-tight" href="#">Privacy Policy</a></li>
<li><a className="text-lg text-zinc-500 hover:text-white transition-colors font-bold tracking-tight" href="#">Terms of Use</a></li>
</ul>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row animate-on-scroll border-t-4 border-zinc-900 pt-8 gap-x-4 gap-y-4 items-center justify-between" style={{animation: 'fadeSlideIn 1s ease-out 0.5s both', animationPlayState: 'paused'}}>
<p className="text-base text-zinc-500 font-bold tracking-tight">
          © 2024 ZeroToProd. All rights reserved.
        </p>
<div className="flex gap-6">
<a className="text-white hover:text-[#B9FF66] transition-transform hover:scale-110" href="#">
<iconify-icon className="text-3xl" icon="solar:code-square-linear"></iconify-icon>
</a>
<a className="text-white hover:text-[#B9FF66] transition-transform hover:scale-110" href="#">
<iconify-icon className="text-3xl" icon="solar:global-linear"></iconify-icon>
</a>
<a className="text-white hover:text-[#B9FF66] transition-transform hover:scale-110" href="#">
<iconify-icon className="text-3xl" icon="solar:chat-round-dots-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
