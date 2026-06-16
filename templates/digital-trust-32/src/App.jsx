import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
  }, []);

  return (
    <>
      

<nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center relative z-50">
<div className="flex items-center gap-2">
<span className="text-4xl font-black tracking-tighter">
        TRST.
      </span>
</div>
<div className="hidden lg:flex items-center gap-10 text-lg font-bold text-zinc-800 bg-white px-8 py-3 rounded-full border-2 border-black brutalist-shadow">
<a className="hover:text-[#88cc33] transition-colors" href="#topics">Topics</a>
<a className="hover:text-[#88cc33] transition-colors" href="#journal">Journal</a>
<a className="hover:text-[#88cc33] transition-colors" href="#frameworks">Frameworks</a>
<a className="hover:text-[#88cc33] transition-colors" href="#tool">Tool</a>
<a className="hover:text-[#88cc33] transition-colors" href="#advisory">Advisory</a>
</div>
<div className="hidden lg:block">
<a className="bg-[#B9FF66] border-2 border-black rounded-xl px-8 py-4 text-black font-bold text-lg brutalist-shadow hover:bg-white transition-colors" href="#newsletter">
        Join Newsletter
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
          The Digital Trust Signals Journal
        </div>
<h1 className="text-6xl lg:text-[5.5rem] font-black tracking-tighter leading-[0.9] mb-8 uppercase">
          Evaluate <br/>
<span className="text-transparent bg-clip-text" style={{WebkitTextStroke: '2px black', color: '#B9FF66'}}>Credibility</span>
</h1>
<p className="text-2xl text-zinc-800 mb-10 leading-snug font-medium">
          We publish explainers, teardowns, and frameworks that help you judge authenticity amid polished content, AI media, and influencer promotion.
        </p>
<div className="flex flex-col sm:flex-row gap-6 font-bold">
<a className="bg-black text-[#B9FF66] text-xl px-10 py-5 rounded-2xl brutalist-shadow border-2 border-black flex justify-center items-center gap-3 group" href="#journal">
            Explore the Journal
            <iconify-icon className="text-2xl group-hover:scale-110 transition-transform" icon="solar:book-bookmark-linear"></iconify-icon>
</a>
<a className="bg-white text-black text-xl px-10 py-5 rounded-2xl brutalist-shadow border-2 border-black flex justify-center items-center gap-3 hover:bg-zinc-50 transition-colors" href="#tool">
            Use the Scorecard
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
<div className="text-xl font-bold tracking-tighter uppercase">Trust Signal Score</div>
</div>

<div className="flex-1 flex items-end justify-between gap-4 relative">
<div className="w-1/4 h-[40%] bg-zinc-100 border-4 border-black rounded-t-xl relative group hover:bg-zinc-200 transition-colors">
<div className="absolute -top-8 w-full text-center font-bold text-sm">Disclosed</div>
</div>
<div className="w-1/4 h-[60%] bg-zinc-100 border-4 border-black rounded-t-xl relative group hover:bg-zinc-200 transition-colors">
<div className="absolute -top-8 w-full text-center font-bold text-sm">Sourced</div>
</div>
<div className="w-1/4 h-[85%] bg-[#B9FF66] border-4 border-black rounded-t-xl relative">
<iconify-icon className="absolute -top-16 left-1/2 -translate-x-1/2 text-[3rem] text-black hero-icon-float" icon="solar:shield-check-linear"></iconify-icon>
<div className="absolute -top-8 w-full text-center font-bold text-sm">Verified</div>
</div>
<div className="w-1/4 h-[100%] bg-black border-4 border-black rounded-t-xl relative">
<div className="absolute -top-8 -right-8 bg-white border-4 border-black px-4 py-2 rounded-full font-black text-xl tracking-tighter brutalist-shadow rotate-12 z-20">
                  92/100
                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full overflow-hidden bg-[#B9FF66] border-y-4 border-black py-4 mt-12 transform -rotate-1 relative z-20 shadow-[0_8px_0_0_rgba(0,0,0,1)]">
<div className="flex">
<div className="animate-marquee flex whitespace-nowrap gap-10 pr-10 text-3xl md:text-5xl font-black tracking-tighter uppercase items-center text-black flex-shrink-0">
<span>Influencer Disclosure</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
<span>AI Transparency</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
<span>Review Integrity</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
<span>Brand Honesty</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
<span>Reputation Recovery</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
<span>Creator Credibility</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<div className="animate-marquee flex whitespace-nowrap gap-10 pr-10 text-3xl md:text-5xl font-black tracking-tighter uppercase items-center text-black flex-shrink-0">
<span>Influencer Disclosure</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
<span>AI Transparency</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
<span>Review Integrity</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
<span>Brand Honesty</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
<span>Reputation Recovery</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
<span>Creator Credibility</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>

<section className="py-16 bg-white border-b-4 border-black overflow-hidden relative">
<div className="max-w-7xl mx-auto px-6 text-center mb-10">
<p className="text-sm font-bold tracking-widest uppercase text-zinc-500">Our Editorial Standards</p>
</div>
<div className="flex opacity-90 hover:opacity-100 transition-opacity duration-300">

<div className="animate-marquee-slow flex whitespace-nowrap gap-16 pr-16 items-center flex-shrink-0 transition-all duration-500">
<span className="text-4xl font-black tracking-tighter text-black uppercase border-2 border-black px-4 py-2 rounded-xl">Evidence-Based</span>
<span className="text-4xl font-black tracking-tighter text-[#B9FF66] uppercase border-2 border-black bg-black px-4 py-2 rounded-xl">Transparent Sourcing</span>
<span className="text-4xl font-black tracking-tighter text-black uppercase border-2 border-black px-4 py-2 rounded-xl">Independent Analysis</span>
<span className="text-4xl font-black tracking-tighter text-black uppercase border-2 border-black bg-[#B9FF66] px-4 py-2 rounded-xl">Public Criteria</span>
<span className="text-4xl font-black tracking-tighter text-black uppercase border-2 border-black px-4 py-2 rounded-xl">Objective Metrics</span>
</div>

<div className="animate-marquee-slow flex whitespace-nowrap gap-16 pr-16 items-center flex-shrink-0 transition-all duration-500">
<span className="text-4xl font-black tracking-tighter text-black uppercase border-2 border-black px-4 py-2 rounded-xl">Evidence-Based</span>
<span className="text-4xl font-black tracking-tighter text-[#B9FF66] uppercase border-2 border-black bg-black px-4 py-2 rounded-xl">Transparent Sourcing</span>
<span className="text-4xl font-black tracking-tighter text-black uppercase border-2 border-black px-4 py-2 rounded-xl">Independent Analysis</span>
<span className="text-4xl font-black tracking-tighter text-black uppercase border-2 border-black bg-[#B9FF66] px-4 py-2 rounded-xl">Public Criteria</span>
<span className="text-4xl font-black tracking-tighter text-black uppercase border-2 border-black px-4 py-2 rounded-xl">Objective Metrics</span>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="topics">

<div className="grid lg:grid-cols-12 gap-10 items-center mb-20 fade-up-element">
<div className="lg:col-span-8">
<div className="inline-block bg-[#B9FF66] text-black font-bold px-4 py-2 border-2 border-black rounded-lg mb-6 transform -rotate-2">
          What We Cover
        </div>
<h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight">
          Frameworks and analysis to help brands, creators, and consumers navigate the new trust economy.
        </h2>
</div>

<div className="lg:col-span-4 flex justify-center lg:justify-end relative">
<div className="w-48 h-48 bg-white border-4 border-black rounded-full brutalist-shadow flex flex-col items-center justify-center relative z-10 group">
<iconify-icon className="text-[5rem] text-black group-hover:scale-110 transition-transform duration-300" icon="solar:eye-scan-linear"></iconify-icon>
</div>

<div className="absolute w-48 h-48 bg-[#B9FF66] border-4 border-black rounded-full translate-x-4 translate-y-4"></div>

<iconify-icon className="absolute -top-4 right-10 text-4xl text-black rotate-12 z-20 animate-pulse" icon="solar:star-fall-linear"></iconify-icon>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 services-grid">
<div className="bg-zinc-100 p-8 rounded-[30px] border-4 border-black brutalist-shadow flex flex-col justify-between min-h-[320px] group transition-colors hover:bg-[#B9FF66]">
<div>
<iconify-icon className="text-[3.5rem] mb-6 text-black group-hover:rotate-12 transition-transform" icon="solar:robot-linear"></iconify-icon>
<h3 className="text-3xl font-black tracking-tighter leading-tight mb-4">AI Media<br/>Transparency</h3>
</div>
<a className="flex items-center gap-4 text-xl font-bold mt-auto group-hover:text-black" href="#journal">
<div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center bg-white group-hover:bg-black group-hover:text-[#B9FF66] transition-colors">
<iconify-icon className="text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
          View Teardowns
        </a>
</div>
<div className="bg-[#B9FF66] p-8 rounded-[30px] border-4 border-black brutalist-shadow flex flex-col justify-between min-h-[320px] group transition-colors hover:bg-black hover:text-white">
<div>
<iconify-icon className="text-[3.5rem] mb-6 text-black group-hover:text-white group-hover:rotate-12 transition-all" icon="solar:megaphone-linear"></iconify-icon>
<h3 className="text-3xl font-black tracking-tighter leading-tight mb-4">Influencer<br/>Disclosure</h3>
</div>
<a className="flex items-center gap-4 text-xl font-bold mt-auto" href="#journal">
<div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center bg-white text-black group-hover:border-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
          Read Guidelines
        </a>
</div>
<div className="bg-black text-white p-8 rounded-[30px] border-4 border-black brutalist-shadow flex flex-col justify-between min-h-[320px] group transition-colors hover:bg-zinc-800">
<div>
<iconify-icon className="text-[3.5rem] mb-6 text-[#B9FF66] group-hover:rotate-12 transition-transform" icon="solar:star-circle-linear"></iconify-icon>
<h3 className="text-3xl font-black tracking-tighter leading-tight mb-4">Review<br/>Integrity</h3>
</div>
<a className="flex items-center gap-4 text-xl font-bold mt-auto text-[#B9FF66]" href="#journal">
<div className="w-12 h-12 rounded-full border-2 border-zinc-700 flex items-center justify-center bg-zinc-900 group-hover:border-[#B9FF66] transition-colors">
<iconify-icon className="text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
          Read Analysis
        </a>
</div>
<div className="bg-zinc-100 p-8 rounded-[30px] border-4 border-black brutalist-shadow flex flex-col justify-between min-h-[320px] group transition-colors hover:bg-[#B9FF66]">
<div>
<iconify-icon className="text-[3.5rem] mb-6 text-black group-hover:rotate-12 transition-transform" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="text-3xl font-black tracking-tighter leading-tight mb-4">Brand<br/>Honesty</h3>
</div>
<a className="flex items-center gap-4 text-xl font-bold mt-auto group-hover:text-black" href="#journal">
<div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center bg-white group-hover:bg-black group-hover:text-[#B9FF66] transition-colors">
<iconify-icon className="text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
          Read Case Studies
        </a>
</div>
<div className="bg-[#B9FF66] p-8 rounded-[30px] border-4 border-black brutalist-shadow flex flex-col justify-between min-h-[320px] group transition-colors hover:bg-black hover:text-white">
<div>
<iconify-icon className="text-[3.5rem] mb-6 text-black group-hover:text-white group-hover:rotate-12 transition-all" icon="solar:history-linear"></iconify-icon>
<h3 className="text-3xl font-black tracking-tighter leading-tight mb-4">Reputation<br/>Recovery</h3>
</div>
<a className="flex items-center gap-4 text-xl font-bold mt-auto" href="#frameworks">
<div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center bg-white text-black group-hover:border-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
          View Playbooks
        </a>
</div>
<div className="bg-black text-white p-8 rounded-[30px] border-4 border-black brutalist-shadow flex flex-col justify-between min-h-[320px] group transition-colors hover:bg-zinc-800">
<div>
<iconify-icon className="text-[3.5rem] mb-6 text-[#B9FF66] group-hover:rotate-12 transition-transform" icon="solar:ruler-pen-linear"></iconify-icon>
<h3 className="text-3xl font-black tracking-tighter leading-tight mb-4">Creator<br/>Credibility</h3>
</div>
<a className="flex items-center gap-4 text-xl font-bold mt-auto text-[#B9FF66]" href="#frameworks">
<div className="w-12 h-12 rounded-full border-2 border-zinc-700 flex items-center justify-center bg-zinc-900 group-hover:border-[#B9FF66] transition-colors">
<iconify-icon className="text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
          View Frameworks
        </a>
</div>
</div>
</section>


<section className="max-w-7xl mx-auto px-6 py-24 border-t-4 border-black border-dashed" id="tool">
<div className="grid lg:grid-cols-2 gap-16 items-center fade-up-element">
<div className="order-2 lg:order-1 relative h-[400px]">
<div className="absolute inset-0 bg-white border-4 border-black rounded-[30px] brutalist-shadow p-8 flex flex-col justify-between z-10">
<div className="w-full h-[55%] bg-zinc-100 border-4 border-black rounded-xl p-5 flex flex-col gap-4">
<div className="flex justify-between items-center border-b-2 border-zinc-200 pb-2">
<span className="font-black text-lg uppercase">Signal Analysis</span>
<span className="text-xs bg-black text-white px-2 py-1 rounded">Live Check</span>
</div>
<div className="space-y-3 mt-2">
<div className="flex justify-between items-center gap-4">
<span className="font-bold text-sm w-24">Disclosure</span>
<div className="flex-1 h-3 bg-zinc-300 border-2 border-black rounded-full overflow-hidden">
<div className="w-[90%] h-full bg-[#B9FF66] border-r-2 border-black"></div>
</div>
</div>
<div className="flex justify-between items-center gap-4">
<span className="font-bold text-sm w-24">Authenticity</span>
<div className="flex-1 h-3 bg-zinc-300 border-2 border-black rounded-full overflow-hidden">
<div className="w-[75%] h-full bg-[#B9FF66] border-r-2 border-black"></div>
</div>
</div>
<div className="flex justify-between items-center gap-4">
<span className="font-bold text-sm w-24">Sources</span>
<div className="flex-1 h-3 bg-zinc-300 border-2 border-black rounded-full overflow-hidden">
<div className="w-[40%] h-full bg-red-400 border-r-2 border-black"></div>
</div>
</div>
</div>
</div>
<div className="w-full h-[35%] bg-[#B9FF66] border-4 border-black rounded-xl p-4 flex items-center justify-between">
<span className="text-2xl font-black uppercase tracking-tighter">Score: B+</span>
<iconify-icon className="text-4xl" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
<div className="absolute inset-0 bg-black border-4 border-black rounded-[30px] translate-x-4 translate-y-4"></div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 bg-black text-[#B9FF66] font-bold px-4 py-2 border-2 border-black rounded-full mb-6">
<iconify-icon icon="solar:calculator-linear"></iconify-icon> Trust Signal Scorecard
        </div>
<h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight mb-6">
          Evaluate campaign credibility in real-time.
        </h2>
<p className="text-xl text-zinc-700 font-medium mb-8">
          Our interactive scorecard helps marketers and PR teams measure the authenticity of content, claims, and creator partnerships before they go live. Identify risk areas and missing disclosures.
        </p>
<ul className="space-y-4 mb-10 font-bold text-lg">
<li className="flex items-center gap-3"><iconify-icon className="text-2xl text-[#B9FF66] bg-black rounded-full" icon="solar:check-circle-linear"></iconify-icon> Evidence Verification</li>
<li className="flex items-center gap-3"><iconify-icon className="text-2xl text-[#B9FF66] bg-black rounded-full" icon="solar:check-circle-linear"></iconify-icon> Disclosure Clarity Checks</li>
<li className="flex items-center gap-3"><iconify-icon className="text-2xl text-[#B9FF66] bg-black rounded-full" icon="solar:check-circle-linear"></iconify-icon> Manipulation Risk Assessment</li>
</ul>
<button className="bg-[#B9FF66] text-black text-xl font-bold px-8 py-4 rounded-xl brutalist-shadow border-2 border-black hover:bg-white transition-colors">
          Run a Trust Check
        </button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t-4 border-black border-dashed bg-zinc-100 rounded-[50px] my-10 border-x-4 border-b-4 brutalist-shadow" id="frameworks">
<div className="grid lg:grid-cols-2 gap-16 items-center fade-up-element">
<div>
<div className="inline-flex items-center gap-2 bg-[#B9FF66] text-black font-bold px-4 py-2 border-2 border-black rounded-full mb-6">
<iconify-icon icon="solar:documents-linear"></iconify-icon> Premium Reports
        </div>
<h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight mb-6">
          Deep-dive playbooks for the trust economy.
        </h2>
<p className="text-xl text-zinc-700 font-medium mb-8">
          Move beyond surface-level advice. Our premium reports provide detailed tear-downs, compliance checklists, and operational frameworks for digital credibility.
        </p>
<ul className="space-y-4 mb-10 font-bold text-lg">
<li className="flex items-center gap-3"><iconify-icon className="text-2xl text-[#B9FF66] bg-black rounded-full" icon="solar:check-circle-linear"></iconify-icon> The AI Transparency Playbook</li>
<li className="flex items-center gap-3"><iconify-icon className="text-2xl text-[#B9FF66] bg-black rounded-full" icon="solar:check-circle-linear"></iconify-icon> Creator Disclosure Guidelines</li>
<li className="flex items-center gap-3"><iconify-icon className="text-2xl text-[#B9FF66] bg-black rounded-full" icon="solar:check-circle-linear"></iconify-icon> Reputation Recovery Checklists</li>
</ul>
<button className="bg-black text-white text-xl font-bold px-8 py-4 rounded-xl brutalist-shadow border-2 border-black hover:bg-zinc-800 transition-colors">
          Explore Reports
        </button>
</div>
<div className="relative h-[400px]">
<div className="absolute inset-0 bg-white border-4 border-black rounded-[30px] brutalist-shadow p-8 flex flex-col justify-center gap-6 z-10">
<div className="flex justify-between items-center border-b-4 border-black pb-4">
<span className="text-xl font-bold uppercase">Playbook Access</span>
<span className="bg-[#B9FF66] px-3 py-1 rounded border-2 border-black font-bold text-sm">Available</span>
</div>
<div className="flex items-end gap-2 h-40">
<div className="w-1/4 bg-zinc-200 h-[40%] border-2 border-black rounded-t flex items-center justify-center font-bold text-xs">PDF</div>
<div className="w-1/4 bg-zinc-300 h-[60%] border-2 border-black rounded-t flex items-center justify-center font-bold text-xs">DOC</div>
<div className="w-1/4 bg-zinc-800 h-[80%] border-2 border-black rounded-t flex items-center justify-center font-bold text-xs text-white">XLS</div>
<div className="w-1/4 bg-[#B9FF66] h-[100%] border-2 border-black rounded-t relative flex items-center justify-center">
<iconify-icon className="absolute -top-10 left-1/2 -translate-x-1/2 text-4xl" icon="solar:folder-with-files-linear"></iconify-icon>
<span className="font-bold text-xs">ZIP</span>
</div>
</div>
</div>
<div className="absolute inset-0 bg-[#B9FF66] border-4 border-black rounded-[30px] translate-x-4 translate-y-4"></div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t-4 border-black border-dashed" id="advisory">
<div className="grid lg:grid-cols-2 gap-16 items-center fade-up-element">
<div className="order-2 lg:order-1 relative h-[400px]">
<div className="absolute inset-0 bg-[#B9FF66] border-4 border-black rounded-[30px] brutalist-shadow p-8 flex items-center justify-center z-10">
<div className="w-[70%] h-[90%] bg-white border-4 border-black rounded-[20px] p-5 flex flex-col gap-4">
<div className="flex items-center justify-between border-b-2 border-zinc-200 pb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-black rounded-full border-2 border-black flex items-center justify-center text-white">
<iconify-icon icon="solar:user-check-linear"></iconify-icon>
</div>
<div>
<div className="w-24 h-3 bg-zinc-300 rounded mb-1"></div>
<div className="w-16 h-2 bg-zinc-200 rounded"></div>
</div>
</div>
</div>
<div className="flex-1 bg-zinc-100 border-2 border-black rounded-xl flex flex-col items-center justify-center relative overflow-hidden gap-3">
<iconify-icon className="text-6xl text-black" icon="solar:shield-check-linear"></iconify-icon>
<span className="font-black tracking-tighter text-xl">Audit Complete</span>
<div className="absolute bottom-2 right-2 bg-black text-white px-2 py-1 text-xs font-bold rounded border-2 border-black">Verified</div>
</div>
</div>
</div>
<div className="absolute inset-0 bg-black border-4 border-black rounded-[30px] translate-x-4 translate-y-4"></div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 bg-black text-white font-bold px-4 py-2 border-2 border-black rounded-full mb-6">
<iconify-icon icon="solar:presentation-graph-linear"></iconify-icon> Advisory &amp; Workshops
        </div>
<h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight mb-6">
          Future-proof your brand's reputation strategy.
        </h2>
<p className="text-xl text-zinc-700 font-medium mb-8">
          We offer tailored trust audits, messaging reviews, and private workshops for teams navigating credibility crises, AI adoption, or complex creator partnerships.
        </p>
<ul className="space-y-4 mb-10 font-bold text-lg">
<li className="flex items-center gap-3"><iconify-icon className="text-2xl text-[#B9FF66] bg-black rounded-full" icon="solar:check-circle-linear"></iconify-icon> Brand Transparency Audits</li>
<li className="flex items-center gap-3"><iconify-icon className="text-2xl text-[#B9FF66] bg-black rounded-full" icon="solar:check-circle-linear"></iconify-icon> Messaging Credibility Reviews</li>
<li className="flex items-center gap-3"><iconify-icon className="text-2xl text-[#B9FF66] bg-black rounded-full" icon="solar:check-circle-linear"></iconify-icon> Private Team Workshops</li>
</ul>
<button className="bg-white text-black text-xl font-bold px-8 py-4 rounded-xl brutalist-shadow border-4 border-black hover:bg-[#B9FF66] transition-colors">
          Book a Trust Audit
        </button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24" id="newsletter">
<div className="bg-zinc-100 p-10 lg:p-16 rounded-[40px] border-4 border-black brutalist-shadow flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden fade-up-element">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-[#B9FF66] border-4 border-black rounded-full opacity-50 z-0"></div>
<div className="max-w-2xl relative z-10">
<h3 className="text-4xl lg:text-5xl font-black tracking-tighter mb-6">Stay ahead of trust trends.</h3>
<p className="text-xl text-zinc-700 font-medium">
          Join thousands of marketers, founders, and PR professionals receiving our weekly brief on digital trust signals, platform shifts, and credibility teardowns.
        </p>
</div>
<button className="bg-black text-white text-xl font-bold px-10 py-5 rounded-2xl brutalist-shadow border-4 border-black whitespace-nowrap hover:bg-zinc-800 transition-colors relative z-10 w-full md:w-auto text-center">
        Subscribe Free
      </button>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20 border-t-4 border-black border-dashed" id="journal">
<div className="fade-up-element mb-16 max-w-3xl">
<div className="inline-block bg-white text-black font-bold px-4 py-2 border-2 border-black rounded-lg mb-6 transform rotate-2 brutalist-shadow">
        The Journal
      </div>
<h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight">
        Sharp, credible analysis on digital trust.
      </h2>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="bg-black text-white p-10 rounded-[30px] border-4 border-black shadow-[8px_8px_0_0_#B9FF66] flex flex-col justify-between min-h-[350px] transform transition-transform hover:-translate-y-2 group">
<div>
<span className="text-[#B9FF66] font-bold text-sm tracking-widest uppercase mb-4 block">AI Transparency</span>
<p className="text-xl leading-relaxed text-zinc-100 font-bold tracking-tight mb-8">
            How to spot AI-generated corporate apologies: A breakdown of the linguistic signals that separate authentic accountability from prompt-generated PR.
          </p>
</div>
<a className="flex items-center gap-3 text-[#B9FF66] text-xl font-bold mt-auto border-t-2 border-zinc-800 pt-6" href="#">
          Read Article 
          <iconify-icon className="text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="bg-black text-white p-10 rounded-[30px] border-4 border-black shadow-[8px_8px_0_0_#B9FF66] flex flex-col justify-between min-h-[350px] transform transition-transform hover:-translate-y-2 group">
<div>
<span className="text-[#B9FF66] font-bold text-sm tracking-widest uppercase mb-4 block">Influencer Disclosure</span>
<p className="text-xl leading-relaxed text-zinc-100 font-bold tracking-tight mb-8">
            The FTC's new disclosure rules evaluated: Why 80% of top creators are still failing basic transparency checks, and how brands carry the risk.
          </p>
</div>
<a className="flex items-center gap-3 text-[#B9FF66] text-xl font-bold mt-auto border-t-2 border-zinc-800 pt-6" href="#">
          Read Article 
          <iconify-icon className="text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="bg-black text-white p-10 rounded-[30px] border-4 border-black shadow-[8px_8px_0_0_#B9FF66] flex flex-col justify-between min-h-[350px] transform transition-transform hover:-translate-y-2 group">
<div>
<span className="text-[#B9FF66] font-bold text-sm tracking-widest uppercase mb-4 block">Brand Honesty</span>
<p className="text-xl leading-relaxed text-zinc-100 font-bold tracking-tight mb-8">
            Rebuilding brand trust after a viral crisis: A step-by-step framework for acknowledging fault, demonstrating change, and restoring credibility.
          </p>
</div>
<a className="flex items-center gap-3 text-[#B9FF66] text-xl font-bold mt-auto border-t-2 border-zinc-800 pt-6" href="#">
          Read Article 
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
            TRST.
          </h1>
<span className="text-xl md:text-3xl font-bold text-[#B9FF66] tracking-tighter relative -top-1 md:-top-3 border-2 border-[#B9FF66] px-3 py-1 rounded-full transform rotate-3">
            JOURNAL
          </span>
</div>

<div className="col-span-1 md:col-span-12 grid grid-cols-1 lg:grid-cols-12 animate-on-scroll mt-2 gap-x-12 gap-y-12 border-t-4 border-zinc-800 pt-16" style={{animation: 'fadeSlideIn 0.8s ease-out 0.3s both', animationPlayState: 'paused'}}>

<div className="col-span-1 lg:col-span-5 flex flex-col items-start justify-between gap-10">
<p className="text-2xl text-zinc-400 font-bold tracking-tight leading-relaxed max-w-md">
              The authority on digital trust, authenticity, and credibility. Navigate the new online reality with confidence.
            </p>
<div className="flex items-center gap-4">
<a className="bg-[#B9FF66] hover:bg-white text-black px-8 py-4 rounded-xl text-lg font-black transition-colors duration-300 border-4 border-[#B9FF66] hover:border-white tracking-tighter" href="#newsletter">
                Subscribe to Newsletter
              </a>
<a className="w-16 h-16 rounded-xl bg-zinc-800 hover:bg-[#B9FF66] text-white hover:text-black flex items-center justify-center transition-colors duration-300 group border-4 border-zinc-800 hover:border-[#B9FF66]" href="#">
<iconify-icon className="text-3xl group-hover:rotate-45 transition-transform" icon="solar:arrow-up-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="col-span-1 lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-10 lg:pl-10 w-full">

<div className="flex flex-col gap-6">
<span className="text-[13px] uppercase tracking-widest text-[#B9FF66] font-black border-b-2 border-zinc-800 pb-2">
                Sitemap
              </span>
<ul className="flex flex-col gap-4">
<li><a className="text-lg text-white hover:text-[#B9FF66] transition-colors font-bold tracking-tight" href="#">Home</a></li>
<li><a className="text-lg text-white hover:text-[#B9FF66] transition-colors font-bold tracking-tight" href="#journal">Journal</a></li>
<li><a className="text-lg text-white hover:text-[#B9FF66] transition-colors font-bold tracking-tight" href="#frameworks">Frameworks</a></li>
<li><a className="text-lg text-white hover:text-[#B9FF66] transition-colors font-bold tracking-tight" href="#tool">Tool</a></li>
</ul>
</div>

<div className="flex flex-col gap-6">
<span className="text-[13px] uppercase tracking-widest text-[#B9FF66] font-black border-b-2 border-zinc-800 pb-2">
                Resources
              </span>
<ul className="flex flex-col gap-4">
<li><a className="text-lg text-white hover:text-[#B9FF66] transition-colors font-bold tracking-tight" href="#frameworks">Premium Reports</a></li>
<li><a className="text-lg text-white hover:text-[#B9FF66] transition-colors font-bold tracking-tight" href="#frameworks">Checklists</a></li>
<li><a className="text-lg text-white hover:text-[#B9FF66] transition-colors font-bold tracking-tight" href="#">Glossary</a></li>
</ul>
</div>

<div className="flex flex-col gap-6">
<span className="text-[13px] uppercase tracking-widest text-[#B9FF66] font-black border-b-2 border-zinc-800 pb-2">
                Advisory
              </span>
<ul className="flex flex-col gap-4">
<li><a className="text-lg text-white hover:text-[#B9FF66] transition-colors font-bold tracking-tight" href="#advisory">Trust Audits</a></li>
<li><a className="text-lg text-white hover:text-[#B9FF66] transition-colors font-bold tracking-tight" href="#advisory">Workshops</a></li>
<li><a className="text-lg text-white hover:text-[#B9FF66] transition-colors font-bold tracking-tight" href="#advisory">Messaging Review</a></li>
</ul>
</div>

<div className="flex flex-col gap-6">
<span className="text-[13px] uppercase tracking-widest text-[#B9FF66] font-black border-b-2 border-zinc-800 pb-2">
                Legal
              </span>
<ul className="flex flex-col gap-4">
<li><a className="text-lg text-zinc-500 hover:text-white transition-colors font-bold tracking-tight" href="#">Editorial Standards</a></li>
<li><a className="text-lg text-zinc-500 hover:text-white transition-colors font-bold tracking-tight" href="#">Privacy Policy</a></li>
<li><a className="text-lg text-zinc-500 hover:text-white transition-colors font-bold tracking-tight" href="#">Terms of Use</a></li>
</ul>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row animate-on-scroll border-t-4 border-zinc-900 pt-8 gap-x-4 gap-y-4 items-center justify-between" style={{animation: 'fadeSlideIn 1s ease-out 0.5s both', animationPlayState: 'paused'}}>
<p className="text-base text-zinc-500 font-bold tracking-tight">
          © 2024 TRST.com. All rights reserved.
        </p>
<div className="flex gap-6">
<a className="text-white hover:text-[#B9FF66] transition-transform hover:scale-110" href="#">
<iconify-icon className="text-3xl" icon="solar:letter-linear"></iconify-icon>
</a>
<a className="text-white hover:text-[#B9FF66] transition-transform hover:scale-110" href="#">
<iconify-icon className="text-3xl" icon="solar:hashtag-linear"></iconify-icon>
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
