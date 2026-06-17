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
        SocioSpark
      </span>
</div>
<div className="hidden lg:flex items-center gap-10 text-lg font-bold text-zinc-800 bg-white px-8 py-3 rounded-full border-2 border-black brutalist-shadow">
<a className="hover:text-[#88cc33] transition-colors" href="#services">Services</a>
<a className="hover:text-[#88cc33] transition-colors" href="#seo">SEO</a>
<a className="hover:text-[#88cc33] transition-colors" href="#ppc">PPC</a>
<a className="hover:text-[#88cc33] transition-colors" href="#case-studies">Case Studies</a>
</div>
<div className="hidden lg:block">
<a className="bg-[#B9FF66] border-2 border-black rounded-xl px-8 py-4 text-black font-bold text-lg brutalist-shadow" href="#contact">
        Get Started
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
          We make brands go crazy online
        </div>
<h1 className="text-6xl lg:text-[5.5rem] font-bold tracking-tighter leading-[0.9] mb-8 uppercase">
          Explode Your <br/>
<span className="text-transparent bg-clip-text" style={{WebkitTextStroke: '2px black', color: '#B9FF66'}}>Digital Growth</span>
</h1>
<p className="text-2xl text-zinc-800 mb-10 leading-snug font-medium">
          We don't just market. We build digital empires that grab attention, crush competitors, and generate massive ROI.
        </p>
<div className="flex flex-col sm:flex-row gap-6 font-bold">
<button className="bg-black text-[#B9FF66] text-xl px-10 py-5 rounded-2xl brutalist-shadow border-2 border-black flex justify-center items-center gap-3 group">
            Book a Call
            <iconify-icon className="text-2xl group-hover:rotate-45 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
<a className="bg-white text-black text-xl px-10 py-5 rounded-2xl brutalist-shadow border-2 border-black flex justify-center items-center gap-3" href="#services">
            See Our Work
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
<div className="text-xl font-bold tracking-tighter uppercase">Traffic Growth</div>
</div>

<div className="flex-1 flex items-end justify-between gap-4 relative">
<div className="w-1/4 h-[30%] bg-zinc-100 border-4 border-black rounded-t-xl relative group hover:bg-zinc-200 transition-colors"></div>
<div className="w-1/4 h-[50%] bg-zinc-100 border-4 border-black rounded-t-xl relative group hover:bg-zinc-200 transition-colors"></div>
<div className="w-1/4 h-[75%] bg-[#B9FF66] border-4 border-black rounded-t-xl relative">
<iconify-icon className="absolute -top-16 left-1/2 -translate-x-1/2 text-[3rem] text-black hero-icon-float" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div className="w-1/4 h-[100%] bg-black border-4 border-black rounded-t-xl relative">
<div className="absolute -top-8 -right-8 bg-white border-4 border-black px-4 py-2 rounded-full font-black text-xl tracking-tighter brutalist-shadow rotate-12 z-20">
                  +428%
                </div>
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
<span>Digital Strategy</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
<span>Social Media</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
<span>SEO</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
<span>PPC Campaigns</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
<span>Content Creation</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
<span>Web Design</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<div className="animate-marquee flex gap-10 text-3xl md:text-5xl font-black tracking-tighter uppercase items-center text-black w-1/2 justify-around">
<span>Digital Strategy</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
<span>Social Media</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
<span>SEO</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
<span>PPC Campaigns</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
<span>Content Creation</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
<span>Web Design</span> <iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>

<section className="py-16 bg-white border-b-4 border-black overflow-hidden relative">
<div className="max-w-7xl mx-auto px-6 text-center mb-10">
<p className="text-sm font-bold tracking-widest uppercase text-zinc-500">Trusted by industry leaders</p>
</div>
<div className="flex whitespace-nowrap w-[200%] opacity-80 hover:opacity-100 transition-opacity duration-300">

<div className="animate-marquee-slow flex justify-around items-center w-1/2 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-5xl font-black tracking-tighter text-[#E50914] transform scale-y-110 mx-10">NETFLIX</span>
<span className="text-5xl font-bold tracking-tighter text-[#2D8CFF] lowercase mx-10">zoom</span>
<div className="flex flex-col items-center mx-10">
<span className="text-5xl font-semibold tracking-tighter text-black lowercase leading-none">amazon</span>
<svg className="w-24 text-[#FF9900] -mt-1" viewbox="0 0 100 20"><path d="M10,10 Q50,25 90,5 Q70,20 10,10 Z" fill="currentColor"></path></svg>
</div>
<span className="text-4xl font-black tracking-widest text-[#EA4C89] italic mx-10" style={{fontFamily: 'Georgia, serif'}}>dribbble</span>
<span className="text-5xl font-black tracking-tighter text-[#1DB954] mx-10">Spotify</span>
<span className="text-5xl font-bold tracking-tighter text-black mx-10">Uber</span>
<span className="text-5xl font-black tracking-tighter text-[#0061FF] mx-10">Dropbox</span>
</div>

<div className="animate-marquee-slow flex justify-around items-center w-1/2 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-5xl font-black tracking-tighter text-[#E50914] transform scale-y-110 mx-10">NETFLIX</span>
<span className="text-5xl font-bold tracking-tighter text-[#2D8CFF] lowercase mx-10">zoom</span>
<div className="flex flex-col items-center mx-10">
<span className="text-5xl font-semibold tracking-tighter text-black lowercase leading-none">amazon</span>
<svg className="w-24 text-[#FF9900] -mt-1" viewbox="0 0 100 20"><path d="M10,10 Q50,25 90,5 Q70,20 10,10 Z" fill="currentColor"></path></svg>
</div>
<span className="text-4xl font-black tracking-widest text-[#EA4C89] italic mx-10" style={{fontFamily: 'Georgia, serif'}}>dribbble</span>
<span className="text-5xl font-black tracking-tighter text-[#1DB954] mx-10">Spotify</span>
<span className="text-5xl font-bold tracking-tighter text-black mx-10">Uber</span>
<span className="text-5xl font-black tracking-tighter text-[#0061FF] mx-10">Dropbox</span>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="services">

<div className="grid lg:grid-cols-12 gap-10 items-center mb-20 fade-up-element">
<div className="lg:col-span-8">
<div className="inline-block bg-[#B9FF66] text-black font-bold px-4 py-2 border-2 border-black rounded-lg mb-6 transform -rotate-2">
          Our Services
        </div>
<h2 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight">
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online.
        </h2>
</div>

<div className="lg:col-span-4 flex justify-center lg:justify-end relative">
<div className="w-48 h-48 bg-white border-4 border-black rounded-full brutalist-shadow flex flex-col items-center justify-center relative z-10 group">
<iconify-icon className="text-[5rem] text-black group-hover:scale-110 transition-transform duration-300" icon="solar:target-linear"></iconify-icon>
</div>

<div className="absolute w-48 h-48 bg-[#B9FF66] border-4 border-black rounded-full translate-x-4 translate-y-4"></div>

<iconify-icon className="absolute -top-4 right-10 text-4xl text-black rotate-12 z-20 animate-pulse" icon="solar:star-fall-linear"></iconify-icon>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 services-grid">

<div className="bg-zinc-100 p-8 rounded-[30px] border-4 border-black brutalist-shadow flex flex-col justify-between min-h-[320px] group transition-colors hover:bg-[#B9FF66]">
<div>
<iconify-icon className="text-[3.5rem] mb-6 text-black group-hover:rotate-12 transition-transform" icon="solar:magnifer-zoom-in-linear"></iconify-icon>
<h3 className="text-3xl font-black tracking-tighter leading-tight mb-4">Search engine<br/>optimization</h3>
</div>
<a className="flex items-center gap-4 text-xl font-bold mt-auto group-hover:text-black" href="#seo">
<div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center bg-white group-hover:bg-black group-hover:text-[#B9FF66] transition-colors">
<iconify-icon className="text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
          Learn more
        </a>
</div>

<div className="bg-[#B9FF66] p-8 rounded-[30px] border-4 border-black brutalist-shadow flex flex-col justify-between min-h-[320px] group transition-colors hover:bg-black hover:text-white">
<div>
<iconify-icon className="text-[3.5rem] mb-6 text-black group-hover:text-white group-hover:rotate-12 transition-all" icon="solar:mouse-circle-linear"></iconify-icon>
<h3 className="text-3xl font-black tracking-tighter leading-tight mb-4">Pay-per-click<br/>advertising</h3>
</div>
<a className="flex items-center gap-4 text-xl font-bold mt-auto" href="#ppc">
<div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center bg-white text-black group-hover:border-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
          Learn more
        </a>
</div>

<div className="bg-black text-white p-8 rounded-[30px] border-4 border-black brutalist-shadow flex flex-col justify-between min-h-[320px] group transition-colors hover:bg-zinc-800">
<div>
<iconify-icon className="text-[3.5rem] mb-6 text-[#B9FF66] group-hover:rotate-12 transition-transform" icon="solar:smartphone-update-linear"></iconify-icon>
<h3 className="text-3xl font-black tracking-tighter leading-tight mb-4">Social Media<br/>Marketing</h3>
</div>
<a className="flex items-center gap-4 text-xl font-bold mt-auto text-[#B9FF66]" href="#social">
<div className="w-12 h-12 rounded-full border-2 border-zinc-700 flex items-center justify-center bg-zinc-900 group-hover:border-[#B9FF66] transition-colors">
<iconify-icon className="text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
          Learn more
        </a>
</div>

<div className="bg-zinc-100 p-8 rounded-[30px] border-4 border-black brutalist-shadow flex flex-col justify-between min-h-[320px] group transition-colors hover:bg-[#B9FF66]">
<div>
<iconify-icon className="text-[3.5rem] mb-6 text-black group-hover:rotate-12 transition-transform" icon="solar:letter-opened-linear"></iconify-icon>
<h3 className="text-3xl font-black tracking-tighter leading-tight mb-4">Email<br/>Marketing</h3>
</div>
<a className="flex items-center gap-4 text-xl font-bold mt-auto group-hover:text-black" href="#email">
<div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center bg-white group-hover:bg-black group-hover:text-[#B9FF66] transition-colors">
<iconify-icon className="text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
          Learn more
        </a>
</div>

<div className="bg-[#B9FF66] p-8 rounded-[30px] border-4 border-black brutalist-shadow flex flex-col justify-between min-h-[320px] group transition-colors hover:bg-black hover:text-white">
<div>
<iconify-icon className="text-[3.5rem] mb-6 text-black group-hover:text-white group-hover:rotate-12 transition-all" icon="solar:pen-new-square-linear"></iconify-icon>
<h3 className="text-3xl font-black tracking-tighter leading-tight mb-4">Content<br/>Creation</h3>
</div>
<a className="flex items-center gap-4 text-xl font-bold mt-auto" href="#content">
<div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center bg-white text-black group-hover:border-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
          Learn more
        </a>
</div>

<div className="bg-black text-white p-8 rounded-[30px] border-4 border-black brutalist-shadow flex flex-col justify-between min-h-[320px] group transition-colors hover:bg-zinc-800">
<div>
<iconify-icon className="text-[3.5rem] mb-6 text-[#B9FF66] group-hover:rotate-12 transition-transform" icon="solar:chart-square-linear"></iconify-icon>
<h3 className="text-3xl font-black tracking-tighter leading-tight mb-4">Analytics and<br/>Tracking</h3>
</div>
<a className="flex items-center gap-4 text-xl font-bold mt-auto text-[#B9FF66]" href="#analytics">
<div className="w-12 h-12 rounded-full border-2 border-zinc-700 flex items-center justify-center bg-zinc-900 group-hover:border-[#B9FF66] transition-colors">
<iconify-icon className="text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
          Learn more
        </a>
</div>
</div>
</section>


<section className="max-w-7xl mx-auto px-6 py-24 border-t-4 border-black border-dashed" id="seo">
<div className="grid lg:grid-cols-2 gap-16 items-center fade-up-element">
<div className="order-2 lg:order-1 relative h-[400px]">
<div className="absolute inset-0 bg-white border-4 border-black rounded-[30px] brutalist-shadow p-8 flex flex-col justify-between z-10">
<div className="w-full h-1/2 bg-zinc-100 border-4 border-black rounded-xl p-4 flex gap-4">
<div className="w-12 h-12 bg-zinc-300 rounded-full border-2 border-black shrink-0"></div>
<div className="flex-1 space-y-3">
<div className="w-3/4 h-4 bg-zinc-300 rounded"></div>
<div className="w-1/2 h-4 bg-zinc-300 rounded"></div>
</div>
</div>
<div className="w-full h-[40%] bg-[#B9FF66] border-4 border-black rounded-xl p-4 flex items-center justify-between">
<span className="text-2xl font-black uppercase tracking-tighter">Rank #1</span>
<iconify-icon className="text-4xl" icon="solar:medal-star-linear"></iconify-icon>
</div>
</div>
<div className="absolute inset-0 bg-black border-4 border-black rounded-[30px] translate-x-4 translate-y-4"></div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 bg-black text-[#B9FF66] font-bold px-4 py-2 border-2 border-black rounded-full mb-6">
<iconify-icon icon="solar:magnifer-zoom-in-linear"></iconify-icon> SEO Services
        </div>
<h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight mb-6">
          Dominate search results and capture high-intent traffic.
        </h2>
<p className="text-xl text-zinc-700 font-medium mb-8">
          We use data-driven strategies, technical audits, and high-quality link building to push your website to the top of Google. Stop hiding on page two.
        </p>
<ul className="space-y-4 mb-10 font-bold text-lg">
<li className="flex items-center gap-3"><iconify-icon className="text-2xl text-[#B9FF66] bg-black rounded-full" icon="solar:check-circle-linear"></iconify-icon> Technical SEO Audits</li>
<li className="flex items-center gap-3"><iconify-icon className="text-2xl text-[#B9FF66] bg-black rounded-full" icon="solar:check-circle-linear"></iconify-icon> On-Page Optimization</li>
<li className="flex items-center gap-3"><iconify-icon className="text-2xl text-[#B9FF66] bg-black rounded-full" icon="solar:check-circle-linear"></iconify-icon> Authority Link Building</li>
</ul>
<button className="bg-[#B9FF66] text-black text-xl font-bold px-8 py-4 rounded-xl brutalist-shadow border-2 border-black hover:bg-white transition-colors">
          Get a Free SEO Audit
        </button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t-4 border-black border-dashed bg-zinc-100 rounded-[50px] my-10 border-x-4 border-b-4 brutalist-shadow" id="ppc">
<div className="grid lg:grid-cols-2 gap-16 items-center fade-up-element">
<div>
<div className="inline-flex items-center gap-2 bg-[#B9FF66] text-black font-bold px-4 py-2 border-2 border-black rounded-full mb-6">
<iconify-icon icon="solar:mouse-circle-linear"></iconify-icon> PPC Campaigns
        </div>
<h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight mb-6">
          Maximize your ad spend with precision targeting.
        </h2>
<p className="text-xl text-zinc-700 font-medium mb-8">
          Stop wasting money on clicks that don't convert. We build hyper-targeted ad campaigns on Google and Meta that turn your budget into measurable revenue.
        </p>
<ul className="space-y-4 mb-10 font-bold text-lg">
<li className="flex items-center gap-3"><iconify-icon className="text-2xl text-[#B9FF66] bg-black rounded-full" icon="solar:check-circle-linear"></iconify-icon> Google Ads Management</li>
<li className="flex items-center gap-3"><iconify-icon className="text-2xl text-[#B9FF66] bg-black rounded-full" icon="solar:check-circle-linear"></iconify-icon> Retargeting Campaigns</li>
<li className="flex items-center gap-3"><iconify-icon className="text-2xl text-[#B9FF66] bg-black rounded-full" icon="solar:check-circle-linear"></iconify-icon> Conversion Rate Optimization</li>
</ul>
<button className="bg-black text-white text-xl font-bold px-8 py-4 rounded-xl brutalist-shadow border-2 border-black hover:bg-zinc-800 transition-colors">
          Start Advertising
        </button>
</div>
<div className="relative h-[400px]">
<div className="absolute inset-0 bg-white border-4 border-black rounded-[30px] brutalist-shadow p-8 flex flex-col justify-center gap-6 z-10">
<div className="flex justify-between items-center border-b-4 border-black pb-4">
<span className="text-xl font-bold uppercase">ROI Tracker</span>
<span className="bg-[#B9FF66] px-3 py-1 rounded border-2 border-black font-bold">Live</span>
</div>
<div className="flex items-end gap-2 h-40">
<div className="w-1/4 bg-zinc-200 h-[20%] border-2 border-black rounded-t"></div>
<div className="w-1/4 bg-zinc-300 h-[40%] border-2 border-black rounded-t"></div>
<div className="w-1/4 bg-zinc-800 h-[60%] border-2 border-black rounded-t"></div>
<div className="w-1/4 bg-[#B9FF66] h-[100%] border-2 border-black rounded-t relative">
<iconify-icon className="absolute -top-10 left-1/2 -translate-x-1/2 text-3xl" icon="solar:cursor-click-linear"></iconify-icon>
</div>
</div>
</div>
<div className="absolute inset-0 bg-[#B9FF66] border-4 border-black rounded-[30px] translate-x-4 translate-y-4"></div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t-4 border-black border-dashed" id="social">
<div className="grid lg:grid-cols-2 gap-16 items-center fade-up-element">
<div className="order-2 lg:order-1 relative h-[400px]">
<div className="absolute inset-0 bg-[#B9FF66] border-4 border-black rounded-[30px] brutalist-shadow p-8 flex items-center justify-center z-10">
<div className="w-[60%] h-[90%] bg-white border-4 border-black rounded-[20px] p-4 flex flex-col gap-4">
<div className="flex items-center gap-3 border-b-2 border-zinc-200 pb-3">
<div className="w-10 h-10 bg-black rounded-full border-2 border-black"></div>
<div>
<div className="w-20 h-3 bg-zinc-300 rounded mb-1"></div>
<div className="w-12 h-2 bg-zinc-200 rounded"></div>
</div>
</div>
<div className="flex-1 bg-zinc-100 border-2 border-black rounded-xl flex items-center justify-center relative overflow-hidden">
<iconify-icon className="text-6xl text-black" icon="solar:heart-angle-linear"></iconify-icon>
<div className="absolute bottom-2 right-2 bg-black text-white px-2 py-1 text-xs font-bold rounded border-2 border-black">10.5k Likes</div>
</div>
</div>
</div>
<div className="absolute inset-0 bg-black border-4 border-black rounded-[30px] translate-x-4 translate-y-4"></div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 bg-black text-white font-bold px-4 py-2 border-2 border-black rounded-full mb-6">
<iconify-icon icon="solar:smartphone-update-linear"></iconify-icon> Social Media
        </div>
<h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight mb-6">
          Build a loyal community that loves your brand.
        </h2>
<p className="text-xl text-zinc-700 font-medium mb-8">
          We don't just post. We create engaging, shareable content that sparks conversations and turns followers into passionate brand advocates.
        </p>
<ul className="space-y-4 mb-10 font-bold text-lg">
<li className="flex items-center gap-3"><iconify-icon className="text-2xl text-[#B9FF66] bg-black rounded-full" icon="solar:check-circle-linear"></iconify-icon> Community Management</li>
<li className="flex items-center gap-3"><iconify-icon className="text-2xl text-[#B9FF66] bg-black rounded-full" icon="solar:check-circle-linear"></iconify-icon> Viral Content Strategy</li>
<li className="flex items-center gap-3"><iconify-icon className="text-2xl text-[#B9FF66] bg-black rounded-full" icon="solar:check-circle-linear"></iconify-icon> Influencer Partnerships</li>
</ul>
<button className="bg-white text-black text-xl font-bold px-8 py-4 rounded-xl brutalist-shadow border-4 border-black hover:bg-[#B9FF66] transition-colors">
          Grow Your Audience
        </button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24" id="contact">
<div className="bg-zinc-100 p-10 lg:p-16 rounded-[40px] border-4 border-black brutalist-shadow flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden fade-up-element">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-[#B9FF66] border-4 border-black rounded-full opacity-50 z-0"></div>
<div className="max-w-2xl relative z-10">
<h3 className="text-4xl lg:text-5xl font-black tracking-tighter mb-6">Let's make things happen</h3>
<p className="text-xl text-zinc-700 font-medium">
          Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
        </p>
</div>
<button className="bg-black text-white text-xl font-bold px-10 py-5 rounded-2xl brutalist-shadow border-4 border-black whitespace-nowrap hover:bg-zinc-800 transition-colors relative z-10 w-full md:w-auto text-center">
        Get your free proposal
      </button>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20 border-t-4 border-black border-dashed" id="case-studies">
<div className="fade-up-element mb-16 max-w-3xl">
<div className="inline-block bg-white text-black font-bold px-4 py-2 border-2 border-black rounded-lg mb-6 transform rotate-2 brutalist-shadow">
        Case Studies
      </div>
<h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight">
        Explore Real-Life Examples of Our Proven Success.
      </h2>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="bg-black text-white p-10 rounded-[30px] border-4 border-black shadow-[8px_8px_0_0_#B9FF66] flex flex-col justify-between min-h-[350px] transform transition-transform hover:-translate-y-2">
<p className="text-xl leading-relaxed text-zinc-300 font-medium mb-8">
          For a local restaurant, we implemented a targeted PPC campaign that resulted in a <span className="text-[#B9FF66] font-bold">50% increase</span> in website traffic and a <span className="text-[#B9FF66] font-bold">25% increase</span> in sales.
        </p>
<a className="flex items-center gap-3 text-[#B9FF66] text-xl font-bold group" href="#">
          Read Case Study 
          <iconify-icon className="text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="bg-black text-white p-10 rounded-[30px] border-4 border-black shadow-[8px_8px_0_0_#B9FF66] flex flex-col justify-between min-h-[350px] transform transition-transform hover:-translate-y-2">
<p className="text-xl leading-relaxed text-zinc-300 font-medium mb-8">
          For a B2B software company, we developed an SEO strategy that resulted in a <span className="text-[#B9FF66] font-bold">first page ranking</span> for key keywords and a <span className="text-[#B9FF66] font-bold">200% increase</span> in organic traffic.
        </p>
<a className="flex items-center gap-3 text-[#B9FF66] text-xl font-bold group" href="#">
          Read Case Study 
          <iconify-icon className="text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="bg-black text-white p-10 rounded-[30px] border-4 border-black shadow-[8px_8px_0_0_#B9FF66] flex flex-col justify-between min-h-[350px] transform transition-transform hover:-translate-y-2">
<p className="text-xl leading-relaxed text-zinc-300 font-medium mb-8">
          For a national retail chain, we created a social media marketing campaign that increased followers by <span className="text-[#B9FF66] font-bold">25%</span> and generated a <span className="text-[#B9FF66] font-bold">20% increase</span> in online sales.
        </p>
<a className="flex items-center gap-3 text-[#B9FF66] text-xl font-bold group" href="#">
          Read Case Study 
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
            SocioSpark
          </h1>
<span className="text-xl md:text-3xl font-bold text-[#B9FF66] tracking-tighter relative -top-1 md:-top-3 border-2 border-[#B9FF66] px-3 py-1 rounded-full transform rotate-3">
            AGENCY
          </span>
</div>

<div className="col-span-1 md:col-span-12 grid grid-cols-1 lg:grid-cols-12 animate-on-scroll mt-2 gap-x-12 gap-y-12 border-t-4 border-zinc-800 pt-16" style={{animation: 'fadeSlideIn 0.8s ease-out 0.3s both', animationPlayState: 'paused'}}>

<div className="col-span-1 lg:col-span-5 flex flex-col items-start justify-between gap-10">
<p className="text-2xl text-zinc-400 font-bold tracking-tight leading-relaxed max-w-md">
              Let’s build something great together. We're ready to scale your brand to the moon.
            </p>
<div className="flex items-center gap-4">
<button className="bg-[#B9FF66] hover:bg-white text-black px-8 py-4 rounded-xl text-lg font-black transition-colors duration-300 border-4 border-[#B9FF66] hover:border-white tracking-tighter">
                Book a 15-min call
              </button>
<button className="w-16 h-16 rounded-xl bg-zinc-800 hover:bg-[#B9FF66] text-white hover:text-black flex items-center justify-center transition-colors duration-300 group border-4 border-zinc-800 hover:border-[#B9FF66]">
<iconify-icon className="text-3xl group-hover:rotate-45 transition-transform" icon="solar:arrow-up-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="col-span-1 lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-10 lg:pl-10 w-full">

<div className="flex flex-col gap-6">
<span className="text-[13px] uppercase tracking-widest text-[#B9FF66] font-black border-b-2 border-zinc-800 pb-2">
                Sitemap
              </span>
<ul className="flex flex-col gap-4">
<li><a className="text-lg text-white hover:text-[#B9FF66] transition-colors font-bold tracking-tight" href="#">Home</a></li>
<li><a className="text-lg text-white hover:text-[#B9FF66] transition-colors font-bold tracking-tight" href="#about">About</a></li>
<li><a className="text-lg text-white hover:text-[#B9FF66] transition-colors font-bold tracking-tight" href="#case-studies">Works</a></li>
</ul>
</div>

<div className="flex flex-col gap-6">
<span className="text-[13px] uppercase tracking-widest text-[#B9FF66] font-black border-b-2 border-zinc-800 pb-2">
                Services
              </span>
<ul className="flex flex-col gap-4">
<li><a className="text-lg text-white hover:text-[#B9FF66] transition-colors font-bold tracking-tight" href="#seo">SEO</a></li>
<li><a className="text-lg text-white hover:text-[#B9FF66] transition-colors font-bold tracking-tight" href="#social">Social Media</a></li>
<li><a className="text-lg text-white hover:text-[#B9FF66] transition-colors font-bold tracking-tight" href="#ppc">PPC Ads</a></li>
</ul>
</div>

<div className="flex flex-col gap-6">
<span className="text-[13px] uppercase tracking-widest text-[#B9FF66] font-black border-b-2 border-zinc-800 pb-2">
                Social
              </span>
<ul className="flex flex-col gap-4">
<li><a className="text-lg text-white hover:text-[#B9FF66] transition-colors font-bold tracking-tight" href="#">Instagram</a></li>
<li><a className="text-lg text-white hover:text-[#B9FF66] transition-colors font-bold tracking-tight" href="#">LinkedIn</a></li>
<li><a className="text-lg text-white hover:text-[#B9FF66] transition-colors font-bold tracking-tight" href="#">Twitter</a></li>
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
          © 2024 SocioSpark. All rights reserved.
        </p>
<div className="flex gap-6">
<a className="text-white hover:text-[#B9FF66] transition-transform hover:scale-110" href="#">
<iconify-icon className="text-3xl" icon="solar:planet-linear"></iconify-icon>
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
