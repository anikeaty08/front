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
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
    })
    .from(".hero-illustration", {
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    }, "-=0.6");

    // Subtle Float Animation
    gsap.to(".hero-icon-float", {
        y: -8,
        duration: 3,
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
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      });
    });

    // Services Cards Stagger
    gsap.from(".services-grid > div", {
        scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%"
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out"
    });

    // Footer Scroll Animation Trigger
    gsap.utils.toArray(".animate-on-scroll").forEach(el => {
      ScrollTrigger.create({
        trigger: "#footer",
        start: "top 90%",
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
      

<nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center relative z-50">
<div className="flex items-center gap-2">
<span className="text-3xl font-bold tracking-tight">
        TRST.
      </span>
</div>
<div className="hidden lg:flex items-center gap-10 text-base font-semibold text-zinc-800 bg-white px-8 py-3 rounded-xl border-2 border-[#1C1E1D] brutalist-shadow">
<a className="hover:text-[#6a8a70] transition-colors" href="#services">Services</a>
<a className="hover:text-[#6a8a70] transition-colors" href="#seo">SEO</a>
<a className="hover:text-[#6a8a70] transition-colors" href="#ppc">PPC</a>
<a className="hover:text-[#6a8a70] transition-colors" href="#case-studies">Case Studies</a>
</div>
<div className="hidden lg:block">
<a className="bg-[#9BB8A1] border-2 border-[#1C1E1D] rounded-xl px-6 py-3 text-[#1C1E1D] font-semibold text-base brutalist-shadow" href="#contact">
        Get Started
      </a>
</div>

<button className="lg:hidden text-[#1C1E1D] bg-white p-2 border-2 border-[#1C1E1D] rounded-lg brutalist-shadow">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</nav>

<section className="max-w-7xl mx-auto px-6 py-12 lg:py-24 relative">
<div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
<div className="max-w-xl hero-content">
<div className="inline-block bg-white border-2 border-[#1C1E1D] px-4 py-2 rounded-lg font-semibold text-sm mb-6 brutalist-shadow">
          Trusted Digital Authority
        </div>
<h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6 text-[#1C1E1D]">
          Explode Your <br/>
<span className="text-[#6a8a70]">Digital Growth</span>
</h1>
<p className="text-lg text-zinc-600 mb-10 leading-relaxed font-normal">
          We build digital frameworks that grab attention, establish market authority, and generate measurable ROI with complete transparency.
        </p>
<div className="flex flex-col sm:flex-row gap-4 font-semibold">
<button className="bg-[#1C1E1D] text-white text-lg px-8 py-4 rounded-xl brutalist-shadow border-2 border-[#1C1E1D] flex justify-center items-center gap-3 group">
            Book a Consultation
            <iconify-icon className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
<a className="bg-white text-[#1C1E1D] text-lg px-8 py-4 rounded-xl brutalist-shadow border-2 border-[#1C1E1D] flex justify-center items-center gap-3" href="#services">
            Review Our Work
          </a>
</div>
</div>

<div className="relative w-full h-[450px] lg:h-[550px] flex items-center justify-center hidden md:flex hero-illustration">
<div className="absolute inset-0 flex items-center justify-center">

<div className="absolute w-[85%] h-[80%] bg-[#9BB8A1] border-2 border-[#1C1E1D] rounded-2xl transform rotate-2 brutalist-shadow translate-x-3 translate-y-3"></div>

<div className="absolute w-[85%] h-[80%] bg-white border-2 border-[#1C1E1D] rounded-2xl p-8 flex flex-col z-10 brutalist-shadow bg-[#FAFAFA]">

<div className="flex justify-between items-center border-b-2 border-zinc-200 pb-4 mb-8">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-zinc-300"></div>
<div className="w-3 h-3 rounded-full bg-zinc-300"></div>
<div className="w-3 h-3 rounded-full bg-zinc-300"></div>
</div>
<div className="text-sm font-semibold tracking-tight uppercase text-zinc-500">Market Capture</div>
</div>

<div className="flex-1 flex items-end justify-between gap-4 relative px-4">
<div className="w-1/4 h-[30%] bg-[#E8ECE9] border-2 border-[#1C1E1D] rounded-t-lg relative group hover:bg-zinc-200 transition-colors"></div>
<div className="w-1/4 h-[55%] bg-[#D5E0D7] border-2 border-[#1C1E1D] rounded-t-lg relative group hover:bg-zinc-200 transition-colors"></div>
<div className="w-1/4 h-[75%] bg-[#9BB8A1] border-2 border-[#1C1E1D] rounded-t-lg relative">
<iconify-icon className="absolute -top-12 left-1/2 -translate-x-1/2 text-4xl text-[#1C1E1D] hero-icon-float" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div className="w-1/4 h-[100%] bg-[#1C1E1D] border-2 border-[#1C1E1D] rounded-t-lg relative">
<div className="absolute -top-6 -right-6 bg-white border-2 border-[#1C1E1D] px-3 py-1.5 rounded-lg font-bold text-sm tracking-tight brutalist-shadow z-20">
                  +214%
                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full overflow-hidden bg-[#9BB8A1] border-y-2 border-[#1C1E1D] py-3 mt-8 relative z-20">
<div className="flex whitespace-nowrap w-[200%]">
<div className="animate-marquee flex gap-12 text-lg font-semibold tracking-tight uppercase items-center text-[#1C1E1D] w-1/2 justify-around">
<span>Strategic Authority</span> <iconify-icon icon="solar:star-circle-linear"></iconify-icon>
<span>Brand Trust</span> <iconify-icon icon="solar:star-circle-linear"></iconify-icon>
<span>Technical SEO</span> <iconify-icon icon="solar:star-circle-linear"></iconify-icon>
<span>Targeted Acquisition</span> <iconify-icon icon="solar:star-circle-linear"></iconify-icon>
<span>Editorial Content</span> <iconify-icon icon="solar:star-circle-linear"></iconify-icon>
</div>
<div className="animate-marquee flex gap-12 text-lg font-semibold tracking-tight uppercase items-center text-[#1C1E1D] w-1/2 justify-around">
<span>Strategic Authority</span> <iconify-icon icon="solar:star-circle-linear"></iconify-icon>
<span>Brand Trust</span> <iconify-icon icon="solar:star-circle-linear"></iconify-icon>
<span>Technical SEO</span> <iconify-icon icon="solar:star-circle-linear"></iconify-icon>
<span>Targeted Acquisition</span> <iconify-icon icon="solar:star-circle-linear"></iconify-icon>
<span>Editorial Content</span> <iconify-icon icon="solar:star-circle-linear"></iconify-icon>
</div>
</div>
</div>

<section className="py-12 bg-white border-b-2 border-[#1C1E1D] overflow-hidden relative">
<div className="max-w-7xl mx-auto px-6 text-center mb-8">
<p className="text-xs font-semibold tracking-widest uppercase text-zinc-400">Trusted by established institutions</p>
</div>
<div className="flex whitespace-nowrap w-[200%] opacity-70 hover:opacity-100 transition-opacity duration-300">

<div className="animate-marquee-slow flex justify-around items-center w-1/2 grayscale transition-all duration-500">
<span className="text-3xl font-bold tracking-tight text-zinc-800 mx-10">NETFLIX</span>
<span className="text-4xl font-semibold tracking-tight text-zinc-800 lowercase mx-10">zoom</span>
<div className="flex flex-col items-center mx-10">
<span className="text-4xl font-medium tracking-tight text-zinc-800 lowercase leading-none">amazon</span>
</div>
<span className="text-3xl font-bold tracking-tight text-zinc-800 italic mx-10" style={{fontFamily: 'Georgia, serif'}}>dribbble</span>
<span className="text-4xl font-bold tracking-tight text-zinc-800 mx-10">Spotify</span>
<span className="text-4xl font-semibold tracking-tight text-zinc-800 mx-10">Uber</span>
<span className="text-4xl font-bold tracking-tight text-zinc-800 mx-10">Dropbox</span>
</div>

<div className="animate-marquee-slow flex justify-around items-center w-1/2 grayscale transition-all duration-500">
<span className="text-3xl font-bold tracking-tight text-zinc-800 mx-10">NETFLIX</span>
<span className="text-4xl font-semibold tracking-tight text-zinc-800 lowercase mx-10">zoom</span>
<div className="flex flex-col items-center mx-10">
<span className="text-4xl font-medium tracking-tight text-zinc-800 lowercase leading-none">amazon</span>
</div>
<span className="text-3xl font-bold tracking-tight text-zinc-800 italic mx-10" style={{fontFamily: 'Georgia, serif'}}>dribbble</span>
<span className="text-4xl font-bold tracking-tight text-zinc-800 mx-10">Spotify</span>
<span className="text-4xl font-semibold tracking-tight text-zinc-800 mx-10">Uber</span>
<span className="text-4xl font-bold tracking-tight text-zinc-800 mx-10">Dropbox</span>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="services">

<div className="grid lg:grid-cols-12 gap-10 items-center mb-16 fade-up-element">
<div className="lg:col-span-8">
<div className="inline-block bg-[#9BB8A1] text-[#1C1E1D] font-semibold px-4 py-2 border-2 border-[#1C1E1D] rounded-lg mb-6 brutalist-shadow">
          Methodology
        </div>
<h2 className="text-3xl lg:text-5xl font-bold tracking-tight leading-tight text-[#1C1E1D]">
          Comprehensive digital frameworks designed for established brands.
        </h2>
</div>

<div className="lg:col-span-4 flex justify-center lg:justify-end relative">
<div className="w-40 h-40 bg-white border-2 border-[#1C1E1D] rounded-2xl brutalist-shadow flex flex-col items-center justify-center relative z-10 group">
<iconify-icon className="text-6xl text-[#1C1E1D]" icon="solar:shield-check-linear"></iconify-icon>
</div>

<div className="absolute w-40 h-40 bg-[#D5E0D7] border-2 border-[#1C1E1D] rounded-2xl translate-x-3 translate-y-3"></div>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 services-grid">

<div className="bg-white p-8 rounded-xl border-2 border-[#1C1E1D] brutalist-shadow flex flex-col justify-between h-full group transition-transform hover:-translate-y-1">
<div>
<iconify-icon className="text-5xl mb-6 text-[#1C1E1D]" icon="solar:magnifer-zoom-in-linear"></iconify-icon>
<h3 className="text-2xl font-bold tracking-tight leading-tight mb-4">Search Engine<br/>Optimization</h3>
<p className="text-sm text-zinc-600 leading-relaxed mb-6 font-normal">Technical architecture and editorial strategies to capture high-intent search market share.</p>
</div>
<a className="flex items-center gap-3 text-sm font-semibold mt-auto text-[#1C1E1D] border-t-2 border-zinc-100 pt-4" href="#seo">
          Read Framework
          <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-[#9BB8A1] p-8 rounded-xl border-2 border-[#1C1E1D] brutalist-shadow flex flex-col justify-between h-full group transition-transform hover:-translate-y-1">
<div>
<iconify-icon className="text-5xl mb-6 text-[#1C1E1D]" icon="solar:mouse-circle-linear"></iconify-icon>
<h3 className="text-2xl font-bold tracking-tight leading-tight mb-4 text-[#1C1E1D]">Targeted<br/>Acquisition</h3>
<p className="text-sm text-[#1C1E1D] opacity-80 leading-relaxed mb-6 font-normal">Precision-targeted ad campaigns designed for capital efficiency and measurable growth.</p>
</div>
<a className="flex items-center gap-3 text-sm font-semibold mt-auto text-[#1C1E1D] border-t-2 border-[#1C1E1D]/20 pt-4" href="#ppc">
          Read Framework
          <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-[#1C1E1D] text-white p-8 rounded-xl border-2 border-[#1C1E1D] brutalist-shadow flex flex-col justify-between h-full group transition-transform hover:-translate-y-1">
<div>
<iconify-icon className="text-5xl mb-6 text-[#9BB8A1]" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<h3 className="text-2xl font-bold tracking-tight leading-tight mb-4">Audience<br/>Development</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6 font-normal">Cultivating loyal, high-value communities through sophisticated content and positioning.</p>
</div>
<a className="flex items-center gap-3 text-sm font-semibold mt-auto text-white border-t-2 border-zinc-800 pt-4" href="#social">
          Read Framework
          <iconify-icon className="text-lg text-[#9BB8A1]" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-xl border-2 border-[#1C1E1D] brutalist-shadow flex flex-col justify-between h-full group transition-transform hover:-translate-y-1">
<div>
<iconify-icon className="text-5xl mb-6 text-[#1C1E1D]" icon="solar:letter-opened-linear"></iconify-icon>
<h3 className="text-2xl font-bold tracking-tight leading-tight mb-4">Lifecycle<br/>Marketing</h3>
<p className="text-sm text-zinc-600 leading-relaxed mb-6 font-normal">Data-driven email and retention strategies to maximize customer lifetime value.</p>
</div>
<a className="flex items-center gap-3 text-sm font-semibold mt-auto text-[#1C1E1D] border-t-2 border-zinc-100 pt-4" href="#email">
          Read Framework
          <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-xl border-2 border-[#1C1E1D] brutalist-shadow flex flex-col justify-between h-full group transition-transform hover:-translate-y-1">
<div>
<iconify-icon className="text-5xl mb-6 text-[#1C1E1D]" icon="solar:pen-new-square-linear"></iconify-icon>
<h3 className="text-2xl font-bold tracking-tight leading-tight mb-4">Editorial<br/>Content</h3>
<p className="text-sm text-zinc-600 leading-relaxed mb-6 font-normal">High-caliber content creation that establishes brand authority and industry leadership.</p>
</div>
<a className="flex items-center gap-3 text-sm font-semibold mt-auto text-[#1C1E1D] border-t-2 border-zinc-100 pt-4" href="#content">
          Read Framework
          <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-xl border-2 border-[#1C1E1D] brutalist-shadow flex flex-col justify-between h-full group transition-transform hover:-translate-y-1">
<div>
<iconify-icon className="text-5xl mb-6 text-[#1C1E1D]" icon="solar:chart-square-linear"></iconify-icon>
<h3 className="text-2xl font-bold tracking-tight leading-tight mb-4">Analytics &amp;<br/>Intelligence</h3>
<p className="text-sm text-zinc-600 leading-relaxed mb-6 font-normal">Rigorous data tracking and reporting structures for clear, actionable insights.</p>
</div>
<a className="flex items-center gap-3 text-sm font-semibold mt-auto text-[#1C1E1D] border-t-2 border-zinc-100 pt-4" href="#analytics">
          Read Framework
          <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>


<section className="max-w-7xl mx-auto px-6 py-20 border-t-2 border-zinc-200" id="seo">
<div className="grid lg:grid-cols-2 gap-16 items-center fade-up-element">
<div className="order-2 lg:order-1 relative h-[350px]">
<div className="absolute inset-0 bg-white border-2 border-[#1C1E1D] rounded-xl brutalist-shadow p-8 flex flex-col justify-between z-10">
<div className="w-full h-1/2 bg-[#F5F6F4] border-2 border-zinc-200 rounded-lg p-5 flex gap-5">
<div className="w-10 h-10 bg-zinc-200 rounded-lg shrink-0"></div>
<div className="flex-1 space-y-4">
<div className="w-3/4 h-3 bg-zinc-300 rounded"></div>
<div className="w-1/2 h-3 bg-zinc-200 rounded"></div>
</div>
</div>
<div className="w-full h-[35%] bg-[#D5E0D7] border-2 border-[#1C1E1D] rounded-lg p-5 flex items-center justify-between">
<span className="text-lg font-bold tracking-tight text-[#1C1E1D]">Position 01</span>
<iconify-icon className="text-3xl text-[#1C1E1D]" icon="solar:chart-square-linear"></iconify-icon>
</div>
</div>
<div className="absolute inset-0 bg-[#9BB8A1] border-2 border-[#1C1E1D] rounded-xl translate-x-3 translate-y-3"></div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 text-sm text-[#6a8a70] font-semibold mb-4 uppercase tracking-widest">
<iconify-icon className="text-lg" icon="solar:magnifer-zoom-in-linear"></iconify-icon> Technical Architecture
        </div>
<h2 className="text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-5">
          Capture high-intent traffic with structural precision.
        </h2>
<p className="text-base text-zinc-600 leading-relaxed font-normal mb-8">
          We deploy data-backed methodologies, comprehensive technical audits, and authoritative link acquisition to secure top-tier visibility in critical search categories.
        </p>
<ul className="space-y-4 mb-8 font-medium text-sm text-[#1C1E1D]">
<li className="flex items-center gap-3"><iconify-icon className="text-xl text-[#6a8a70]" icon="solar:check-circle-linear"></iconify-icon> Platform Audits &amp; Remediation</li>
<li className="flex items-center gap-3"><iconify-icon className="text-xl text-[#6a8a70]" icon="solar:check-circle-linear"></iconify-icon> Semantic Content Structuring</li>
<li className="flex items-center gap-3"><iconify-icon className="text-xl text-[#6a8a70]" icon="solar:check-circle-linear"></iconify-icon> Authority Building Protocol</li>
</ul>
<button className="bg-white text-[#1C1E1D] text-sm font-semibold px-6 py-3 rounded-lg brutalist-shadow border-2 border-[#1C1E1D] hover:bg-zinc-50 transition-colors">
          Review SEO Framework
        </button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20 border-t-2 border-zinc-200 bg-white rounded-2xl my-10 border-2 border-[#1C1E1D] brutalist-shadow" id="ppc">
<div className="grid lg:grid-cols-2 gap-16 items-center fade-up-element">
<div>
<div className="inline-flex items-center gap-2 text-sm text-[#6a8a70] font-semibold mb-4 uppercase tracking-widest">
<iconify-icon className="text-lg" icon="solar:mouse-circle-linear"></iconify-icon> Capital Allocation
        </div>
<h2 className="text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-5">
          Maximize acquisition efficiency.
        </h2>
<p className="text-base text-zinc-600 leading-relaxed font-normal mb-8">
          We build hyper-targeted, analytically sound campaigns across search and social channels, turning media spend into reliable and predictable revenue streams.
        </p>
<ul className="space-y-4 mb-8 font-medium text-sm text-[#1C1E1D]">
<li className="flex items-center gap-3"><iconify-icon className="text-xl text-[#6a8a70]" icon="solar:check-circle-linear"></iconify-icon> Search Engine Marketing</li>
<li className="flex items-center gap-3"><iconify-icon className="text-xl text-[#6a8a70]" icon="solar:check-circle-linear"></iconify-icon> Multi-Touch Retargeting</li>
<li className="flex items-center gap-3"><iconify-icon className="text-xl text-[#6a8a70]" icon="solar:check-circle-linear"></iconify-icon> Conversion Yield Optimization</li>
</ul>
<button className="bg-[#1C1E1D] text-white text-sm font-semibold px-6 py-3 rounded-lg brutalist-shadow border-2 border-[#1C1E1D] hover:bg-zinc-800 transition-colors">
          Explore Acquisition Strategy
        </button>
</div>
<div className="relative h-[350px]">
<div className="absolute inset-0 bg-[#FAFAFA] border-2 border-[#1C1E1D] rounded-xl brutalist-shadow p-8 flex flex-col justify-center gap-6 z-10">
<div className="flex justify-between items-center border-b-2 border-zinc-200 pb-4">
<span className="text-sm font-semibold tracking-tight text-zinc-500 uppercase">Yield Analysis</span>
<span className="bg-[#9BB8A1] px-2 py-1 rounded text-xs font-bold border border-[#1C1E1D]">Active</span>
</div>
<div className="flex items-end gap-3 h-40 pt-4">
<div className="w-1/4 bg-zinc-200 h-[20%] border-2 border-[#1C1E1D] rounded-t-sm"></div>
<div className="w-1/4 bg-zinc-300 h-[45%] border-2 border-[#1C1E1D] rounded-t-sm"></div>
<div className="w-1/4 bg-zinc-400 h-[65%] border-2 border-[#1C1E1D] rounded-t-sm"></div>
<div className="w-1/4 bg-[#9BB8A1] h-[100%] border-2 border-[#1C1E1D] rounded-t-sm relative">
<iconify-icon className="absolute -top-8 left-1/2 -translate-x-1/2 text-2xl text-[#1C1E1D]" icon="solar:target-linear"></iconify-icon>
</div>
</div>
</div>
<div className="absolute inset-0 bg-[#D5E0D7] border-2 border-[#1C1E1D] rounded-xl translate-x-3 translate-y-3"></div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24 mt-12" id="contact">
<div className="bg-[#1C1E1D] text-white p-10 lg:p-14 rounded-2xl border-2 border-[#1C1E1D] brutalist-shadow-green flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden fade-up-element">
<div className="max-w-2xl relative z-10">
<h3 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Ready to establish market dominance?</h3>
<p className="text-base text-zinc-400 font-normal leading-relaxed">
          Schedule a consultation with our strategic directors to discuss how our frameworks can be applied to scale your organization.
        </p>
</div>
<button className="bg-[#9BB8A1] text-[#1C1E1D] text-base font-semibold px-8 py-4 rounded-xl border-2 border-[#1C1E1D] whitespace-nowrap hover:bg-white transition-colors relative z-10 w-full md:w-auto text-center shadow-[4px_4px_0px_0px_#FFFFFF]">
        Request Consultation
      </button>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20 border-t-2 border-zinc-200" id="case-studies">
<div className="fade-up-element mb-12 max-w-3xl">
<div className="inline-flex items-center gap-2 text-sm text-[#6a8a70] font-semibold mb-4 uppercase tracking-widest">
<iconify-icon className="text-lg" icon="solar:folder-with-files-linear"></iconify-icon> Applied Methodology
      </div>
<h2 className="text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
        Documented outcomes of our strategic implementation.
      </h2>
</div>
<div className="grid lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-xl border-2 border-[#1C1E1D] brutalist-shadow flex flex-col justify-between min-h-[300px] transform transition-transform hover:-translate-y-1">
<p className="text-sm leading-relaxed text-zinc-600 font-normal mb-8">
          Deployed targeted acquisition models for a regional logistics provider, resulting in a <span className="text-[#1C1E1D] font-bold">42% reduction</span> in CPA and a <span className="text-[#1C1E1D] font-bold">2.5x increase</span> in qualified pipeline volume.
        </p>
<a className="flex items-center gap-2 text-[#6a8a70] text-sm font-semibold group border-t-2 border-zinc-100 pt-4 mt-auto" href="#">
          View Case Study 
          <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-xl border-2 border-[#1C1E1D] brutalist-shadow flex flex-col justify-between min-h-[300px] transform transition-transform hover:-translate-y-1">
<p className="text-sm leading-relaxed text-zinc-600 font-normal mb-8">
          Structured a comprehensive technical SEO overhaul for a SaaS platform, securing <span className="text-[#1C1E1D] font-bold">tier-1 placement</span> for core terms and a <span className="text-[#1C1E1D] font-bold">185% lift</span> in organic conversions.
        </p>
<a className="flex items-center gap-2 text-[#6a8a70] text-sm font-semibold group border-t-2 border-zinc-100 pt-4 mt-auto" href="#">
          View Case Study 
          <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-xl border-2 border-[#1C1E1D] brutalist-shadow flex flex-col justify-between min-h-[300px] transform transition-transform hover:-translate-y-1">
<p className="text-sm leading-relaxed text-zinc-600 font-normal mb-8">
          Executed an editorial lifecycle strategy for a D2C brand, increasing cohort retention by <span className="text-[#1C1E1D] font-bold">34%</span> and expanding average LTV within six months.
        </p>
<a className="flex items-center gap-2 text-[#6a8a70] text-sm font-semibold group border-t-2 border-zinc-100 pt-4 mt-auto" href="#">
          View Case Study 
          <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="bg-[#161817] pt-20 pb-10 border-t-2 border-[#1C1E1D]" id="footer">
<div className="animate-on-scroll max-w-7xl mr-auto ml-auto pr-6 pl-6" style={{animation: 'fadeSlideIn 0.8s ease-out 0.1s both', animationPlayState: 'paused'}}>
<div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-8 mb-16 w-full">

<div className="col-span-1 md:col-span-12 flex gap-3 md:gap-4 animate-on-scroll pb-4 items-baseline" style={{animation: 'fadeSlideIn 1s ease-out 0.2s both', animationPlayState: 'paused'}}>
<h1 className="text-5xl md:text-7xl tracking-tight font-bold text-white select-none">
            TRST.
          </h1>
<span className="text-sm font-semibold text-[#9BB8A1] tracking-widest uppercase border border-[#9BB8A1] px-2 py-1 rounded relative -top-1">
            Intelligence
          </span>
</div>

<div className="col-span-1 md:col-span-12 grid grid-cols-1 lg:grid-cols-12 animate-on-scroll mt-2 gap-x-12 gap-y-12 border-t border-zinc-800 pt-12" style={{animation: 'fadeSlideIn 0.8s ease-out 0.3s both', animationPlayState: 'paused'}}>

<div className="col-span-1 lg:col-span-5 flex flex-col items-start justify-between gap-8">
<p className="text-lg text-zinc-400 font-normal leading-relaxed max-w-sm">
              Establishing digital authority and engineering measurable growth for leading brands.
            </p>
<div className="flex items-center gap-4">
<button className="bg-white hover:bg-[#9BB8A1] text-[#1C1E1D] px-6 py-3 rounded-lg text-sm font-semibold transition-colors duration-300 border-2 border-white">
                Contact Strategy Team
              </button>
</div>
</div>

<div className="col-span-1 lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:pl-10 w-full">

<div className="flex flex-col gap-5">
<span className="text-xs uppercase tracking-widest text-[#9BB8A1] font-semibold border-b border-zinc-800 pb-2">
                Navigation
              </span>
<ul className="flex flex-col gap-3">
<li><a className="text-sm text-zinc-300 hover:text-white transition-colors font-medium" href="#">Platform</a></li>
<li><a className="text-sm text-zinc-300 hover:text-white transition-colors font-medium" href="#about">Methodology</a></li>
<li><a className="text-sm text-zinc-300 hover:text-white transition-colors font-medium" href="#case-studies">Documentation</a></li>
</ul>
</div>

<div className="flex flex-col gap-5">
<span className="text-xs uppercase tracking-widest text-[#9BB8A1] font-semibold border-b border-zinc-800 pb-2">
                Expertise
              </span>
<ul className="flex flex-col gap-3">
<li><a className="text-sm text-zinc-300 hover:text-white transition-colors font-medium" href="#seo">Architecture</a></li>
<li><a className="text-sm text-zinc-300 hover:text-white transition-colors font-medium" href="#social">Editorial</a></li>
<li><a className="text-sm text-zinc-300 hover:text-white transition-colors font-medium" href="#ppc">Acquisition</a></li>
</ul>
</div>

<div className="flex flex-col gap-5">
<span className="text-xs uppercase tracking-widest text-[#9BB8A1] font-semibold border-b border-zinc-800 pb-2">
                Network
              </span>
<ul className="flex flex-col gap-3">
<li><a className="text-sm text-zinc-300 hover:text-white transition-colors font-medium" href="#">LinkedIn</a></li>
<li><a className="text-sm text-zinc-300 hover:text-white transition-colors font-medium" href="#">Twitter / X</a></li>
<li><a className="text-sm text-zinc-300 hover:text-white transition-colors font-medium" href="#">Publications</a></li>
</ul>
</div>

<div className="flex flex-col gap-5">
<span className="text-xs uppercase tracking-widest text-[#9BB8A1] font-semibold border-b border-zinc-800 pb-2">
                Compliance
              </span>
<ul className="flex flex-col gap-3">
<li><a className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors font-medium" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors font-medium" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row animate-on-scroll border-t border-zinc-800 pt-6 gap-x-4 gap-y-4 items-center justify-between" style={{animation: 'fadeSlideIn 1s ease-out 0.5s both', animationPlayState: 'paused'}}>
<p className="text-sm text-zinc-500 font-medium tracking-tight">
          © 2024 TRST Intelligence. All rights reserved.
        </p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:global-linear"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
