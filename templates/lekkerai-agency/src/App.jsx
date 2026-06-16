import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


  (function () {
    const style = document.createElement("style");
    style.textContent = `
      .animate-on-scroll { animation-play-state: paused !important; }
      .animate-on-scroll.animate { animation-play-state: running !important; }
    `;
    document.head.appendChild(style);

    const once = true;
    if (!window.__inViewIO) {
      window.__inViewIO = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            if (once) window.__inViewIO.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: "0px 0px -10% 0px" });
    }
    window.initInViewAnimations = function (selector = ".animate-on-scroll") {
      document.querySelectorAll(selector).forEach((el) => {
        window.__inViewIO.observe(el);
      });
    };
    document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
  })();



  // Mobile menu logic
  const mobileBtn = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (mobileBtn) {
    mobileBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // Placeholder logic
      alert('Mobile menu'); 
    });
  }

  // Initialize icons
  lucide.createIcons();
  
  // Year
  document.getElementById('year').textContent = new Date().getFullYear();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component -z-10 w-full h-[1040px] absolute top-0" data-alpha-mask="80" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="vTTCp5g4cVl9nwjlT56Z"></div></div>
<style className="">
  @keyframes fadeSlideIn {
    0% {
      opacity: 0;
      transform: translateY(30px);
      filter: blur(8px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0px);
    }
  }
</style>


<div className="overflow-y-auto transition-opacity duration-500 w-full h-full" id="landing-view">
<header className="relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">

<nav className="flex mt-6 items-center justify-between">
<a className="flex items-center gap-2" href="/">

<span className="text-xl font-bold tracking-tighter font-geist text-white">Ignyt<span className="text-emerald-500">.</span>Labs</span>
</a>
<div className="hidden md:flex md:gap-x-2 bg-white/5 border-white/10 border rounded-full pt-1 pr-1 pb-1 pl-1 backdrop-blur-lg gap-x-2 gap-y-1 items-center">
<a className="hover:text-white text-sm font-medium text-white/80 font-geist pt-2 pr-3 pb-2 pl-3" href="#services">Services</a>
<a className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-geist" href="#process">Process</a>
<a className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-geist" href="#testimonials">Work</a>
<div className="relative inline-block group text-xs rounded-full">
<a className="animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] relative z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] text-white bg-neutral-900/60 border-white/20 border pt-3 pr-6 pb-3 pl-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] text-xs rounded-full cursor-pointer inline-flex" href="#contact">
<span className="relative z-10 inline-flex items-center gap-2 font-medium text-xs rounded-full font-geist">Get in Touch</span>
<span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transition-[left,right] duration-500 ease-out group-hover:left-0 group-hover:right-0 text-xs rounded-full"></span>
<span aria-hidden="true" className="glow pointer-events-none absolute inset-0 -z-10 text-xs rounded-full" style={{transform: 'scale(0.95) translate(0px, -24px)'}}></span>
</a>
</div>
</div>
<button className="md:hidden inline-flex text-sm font-medium font-geist bg-white/5 border-white/10 border rounded-lg pt-2 pr-3 pb-2 pl-3 backdrop-blur gap-x-2 gap-y-2 items-center" id="mobileMenuToggle">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
            Menu
          </button>
</nav>

<section className="sm:pt-20 md:pt-48 md:pb-24 text-center max-w-5xl z-10 mr-auto ml-auto pt-20 pb-32 relative">
<h1 className="sm:text-6xl md:text-7xl [animation:fadeSlideIn_1s_ease-out_0.2s_forwards] text-4xl tracking-tighter font-geist opacity-0 max-w-5xl mr-auto ml-auto">
            We Turn Ideas Into <br/>World-Class Products.
          </h1>
<p className="sm:text-lg [animation:fadeSlideIn_1s_ease-out_0.3s_both] text-base font-normal text-white/70 font-geist max-w-2xl mt-6 mr-auto ml-auto">
            We are a full-cycle product development agency that helps founders and businesses build software that matters. From concept to launch, we are your technical partner.
          </p>
<div className="flex flex-col sm:flex-row [animation:fadeSlideIn_1s_ease-out_0.4s_both] mt-8 gap-x-3 gap-y-3 items-center justify-center">
<a className="group relative inline-flex min-w-[140px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] overflow-hidden font-semibold text-neutral-400 tracking-tight bg-neutral-800 border-neutral-600 border rounded-full pt-[12px] pr-[20px] pb-[12px] pl-[20px] items-center justify-center" href="#contact">
<span className="relative z-10 font-medium rounded-full transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md font-geist">Get in Touch</span>
<span className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium opacity-0 rounded-full blur-md font-geist">Start Now</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent via-neutral-200 to-transparent rounded-full blur-[2px]"></span>
</a>
<a className="inline-flex items-center gap-2 hover:bg-white/10 text-base font-medium text-white/90 bg-white/5 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur font-geist" href="#testimonials">
              See our work
            </a>
</div>
</section>
</div>
</header>

<section className="z-10 sm:px-6 lg:px-8 max-w-7xl mt-12 mr-auto ml-auto pr-6 pb-16 pl-6 relative">
<p className="[animation:fadeSlideIn_1s_ease-out_0.5s_both] text-sm font-medium text-white/50 text-center mb-6 font-geist">Trusted by forward-thinking companies</p>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-8 items-center justify-items-center [animation:fadeSlideIn_1s_ease-out_0.6s_both]">

<div className="inline-flex items-center justify-center font-geist font-bold text-lg text-white/40">ACME Inc</div>
<div className="inline-flex items-center justify-center font-geist font-bold text-lg text-white/40">Vertex</div>
<div className="inline-flex items-center justify-center font-geist font-bold text-lg text-white/40">NEXUS</div>
<div className="inline-flex items-center justify-center font-geist font-bold text-lg text-white/40">Horizon</div>
<div className="inline-flex items-center justify-center font-geist font-bold text-lg text-white/40">Starlight</div>
<div className="inline-flex items-center justify-center font-geist font-bold text-lg text-white/40">Echo</div>
</div>
</section>

<section className="z-10 sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-8 pr-6 pb-20 pl-6 relative" id="services">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div className="">
<p className="text-sm font-medium text-emerald-500 font-geist [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">Our Expertise</p>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-geist tracking-tighter [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">Everything you need<br/>to build and scale.</h2>
<p className="mt-3 text-base text-white/70 font-geist [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll max-w-xl">We provide end-to-end product development services, from initial design to complex engineering.</p>
</div>
</div>
<div className="grid gap-6 md:grid-cols-3 gap-x-6 gap-y-6">

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll group hover:bg-white/[0.07] transition-colors md:col-span-1">
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 h-full flex flex-col">
<div className="flex items-center justify-between mb-6">
<div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
<svg className="lucide lucide-pen-tool text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19 7-7 3 3-7 7-3-3z"></path><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="m2 2 7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
</div>
<h3 className="text-xl font-medium tracking-tight font-geist text-white">Product Design</h3>
<p className="mt-3 text-sm text-white/70 font-geist leading-relaxed">UI/UX Design, Prototyping, and Design Systems. We design interfaces that are intuitive, beautiful, and conversion-focused.</p>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 [animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll group hover:bg-white/[0.07] transition-colors md:col-span-1">
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 h-full flex flex-col">
<div className="flex items-center justify-between mb-6">
<div className="p-2 bg-purple-500/10 border border-purple-500/20 rounded-lg">
<svg className="lucide lucide-code-2 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
</div>
<h3 className="text-xl font-medium tracking-tight font-geist text-white">Web Development</h3>
<p className="mt-3 text-sm text-white/70 font-geist leading-relaxed">Modern web applications built with React, Next.js, and Node. Scalable, fast, and SEO-ready architecture.</p>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 [animation:fadeSlideIn_1s_ease-out_0.7s_both] animate-on-scroll group hover:bg-white/[0.07] transition-colors md:col-span-1">
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 h-full flex flex-col">
<div className="flex items-center justify-between mb-6">
<div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
<svg className="lucide lucide-smartphone text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
</div>
<h3 className="text-xl font-medium tracking-tight font-geist text-white">Mobile Development</h3>
<p className="mt-3 text-sm text-white/70 font-geist leading-relaxed">Native and Cross-platform mobile apps using React Native and Flutter. High performance experiences for iOS and Android.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:col-span-3 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll mt-6">
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>

<div className="absolute right-0 top-0 h-full w-2/3 bg-[url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop)] bg-cover opacity-30 mix-blend-screen transition-transform duration-700 group-hover:scale-105"></div>
<div className="p-8 sm:p-12 relative z-20 h-full flex flex-col justify-center max-w-2xl">
<div className="flex items-center gap-2 mb-4">
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/15 px-2 py-0.5 text-[11px] font-medium text-emerald-200 font-geist">End-to-End Service</span>
</div>
<h3 className="text-3xl sm:text-4xl font-geist tracking-tighter">AI &amp; Blockchain Integration</h3>
<p className="mt-4 text-base sm:text-lg text-white/70 font-geist">We stay ahead of the curve. Whether it's integrating LLMs into your workflow or building decentralized applications, our engineers are experts in emerging technologies.</p>
<div className="mt-8">
<a className="inline-flex items-center gap-2 text-sm font-medium text-black bg-white rounded-lg px-4 py-2 hover:bg-neutral-200 transition font-geist" href="#contact">
                Discuss Your Tech Stack
                <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.02] border-y border-white/5 relative" id="process">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-geist tracking-tighter">How We Work</h2>
<p className="mt-4 text-white/60 font-geist">A proven methodology to ship software efficiently.</p>
</div>
<div className="relative grid md:grid-cols-4 gap-8">

<div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

<div className="relative flex flex-col items-center text-center animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
<div className="w-16 h-16 rounded-full bg-black border border-white/20 flex items-center justify-center relative z-10 mb-6 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<span className="text-xl font-bold font-geist text-white">01</span>
</div>
<h3 className="text-xl font-medium text-white font-geist mb-2">Discovery</h3>
<p className="text-sm text-white/60 font-geist leading-relaxed max-w-xs">We analyze your requirements, market, and goals to create a technical roadmap.</p>
</div>

<div className="relative flex flex-col items-center text-center animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both]">
<div className="w-16 h-16 rounded-full bg-black border border-white/20 flex items-center justify-center relative z-10 mb-6 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<span className="text-xl font-bold font-geist text-white">02</span>
</div>
<h3 className="text-xl font-medium text-white font-geist mb-2">Design</h3>
<p className="text-sm text-white/60 font-geist leading-relaxed max-w-xs">We create high-fidelity prototypes and UI/UX flows that align with your brand.</p>
</div>

<div className="relative flex flex-col items-center text-center animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.4s_both]">
<div className="w-16 h-16 rounded-full bg-black border border-emerald-500/50 flex items-center justify-center relative z-10 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
<span className="text-xl font-bold font-geist text-emerald-400">03</span>
</div>
<h3 className="text-xl font-medium text-white font-geist mb-2">Development</h3>
<p className="text-sm text-white/60 font-geist leading-relaxed max-w-xs">Our engineers build your product using agile sprints, ensuring code quality and speed.</p>
</div>

<div className="relative flex flex-col items-center text-center animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.5s_both]">
<div className="w-16 h-16 rounded-full bg-black border border-white/20 flex items-center justify-center relative z-10 mb-6 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<span className="text-xl font-bold font-geist text-white">04</span>
</div>
<h3 className="text-xl font-medium text-white font-geist mb-2">Launch</h3>
<p className="text-sm text-white/60 font-geist leading-relaxed max-w-xs">We deploy your product, set up analytics, and ensure a smooth go-to-market strategy.</p>
</div>
</div>
</div>
</section>

<section className="relative py-24 border-y border-white/5 bg-white/[0.02]">
<div className="sm:px-6 lg:px-8 max-w-4xl mr-auto ml-auto pr-6 pl-6 text-center">
<h2 className="text-xs font-semibold tracking-wider text-emerald-500 uppercase font-geist animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">Our Philosophy</h2>
<h3 className="mt-4 text-3xl sm:text-5xl font-geist tracking-tighter text-white animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
          Built for Speed and Quality.
        </h3>
<div className="mt-10 relative bg-neutral-900/50 border border-white/10 rounded-2xl p-8 sm:p-12 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both]">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
<div className="flex flex-col gap-2">
<span className="text-4xl font-bold font-geist text-white">100+</span>
<span className="text-sm text-white/50 font-geist">Projects Shipped</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-4xl font-bold font-geist text-white">5+</span>
<span className="text-sm text-white/50 font-geist">Years Experience</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-4xl font-bold font-geist text-white">100%</span>
<span className="text-sm text-white/50 font-geist">Client Satisfaction</span>
</div>
</div>
<p className="mt-8 relative text-lg sm:text-xl text-white/80 font-geist leading-relaxed">
             We don't just write code; we solve business problems. Our team is dedicated to building products that scale, perform, and drive revenue.
           </p>
</div>
</div>
</section>

<section className="sm:p-8 sm:ml-8 sm:mr-8 sm:mb-10 mt-10 mr-8 mb-10 ml-8 pt-6 pr-6 pb-6 pl-6" id="testimonials">
<div className="relative">

<div className="relative max-w-5xl mx-auto text-center [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span className="text-xs font-normal font-geist">Testimonials</span>
</div>
<h2 className="text-[40px] sm:text-6xl leading-[0.95] text-white mt-4 font-geist tracking-tighter">What our clients say</h2>
</div>

<div className="relative max-w-[1200px] mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

<article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll flex flex-col h-full hover:bg-white/[0.07] transition-colors duration-300">
<p className="text-white/80 font-geist leading-relaxed mb-6">"Ignyt Labs transformed our vision into a reality. Their attention to detail and technical expertise is unmatched. Highly recommended for any serious founder."</p>
<div className="mt-auto flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-neutral-700 flex items-center justify-center font-bold text-white text-xs">JD</div>
<div>
<h4 className="text-sm font-medium text-white font-geist">John Doe</h4>
<p className="text-xs text-white/50 font-geist">CEO, TechStart</p>
</div>
</div>
</article>

<article className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-emerald-900/10 backdrop-blur-xl p-8 [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll flex flex-col h-full hover:bg-emerald-900/20 transition-colors duration-300">
<p className="text-white/80 font-geist leading-relaxed mb-6">"The speed of delivery was incredible. They built our MVP in 4 weeks and it was robust enough to handle thousands of users on day one."</p>
<div className="mt-auto flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-emerald-800 flex items-center justify-center font-bold text-emerald-100 text-xs">SJ</div>
<div>
<h4 className="text-sm font-medium text-white font-geist">Sarah Jenkins</h4>
<p className="text-xs text-white/50 font-geist">Founder, AppFlow</p>
</div>
</div>
</article>

<article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll flex flex-col h-full hover:bg-white/[0.07] transition-colors duration-300">
<p className="text-white/80 font-geist leading-relaxed mb-6">"A true partner. They didn't just build what we asked for; they challenged our assumptions and improved the product significantly."</p>
<div className="mt-auto flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-neutral-700 flex items-center justify-center font-bold text-white text-xs">MR</div>
<div>
<h4 className="text-sm font-medium text-white font-geist">Mike Ross</h4>
<p className="text-xs text-white/50 font-geist">CTO, DataCorp</p>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="overflow-hidden bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/278bbef6-c861-4ed8-b799-a4713ff032b4_3840w.jpg)] bg-cover relative py-24" id="contact">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
<div className="sm:px-6 lg:px-8 max-w-3xl mr-auto ml-auto pr-4 pl-4 relative z-10">
<div className="text-center mb-10 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
<span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70 backdrop-blur font-geist">Contact</span>
<h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-geist tracking-tighter text-white">Ready to build something great?</h2>
<p className="mt-4 text-lg text-white/70 font-geist">Let's discuss your project and how we can help you succeed.</p>
</div>
<form className="bg-black/50 border border-white/10 p-6 sm:p-10 rounded-2xl backdrop-blur-xl animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
<div className="col-span-1">
<label className="block text-xs font-medium text-white/60 mb-2 font-geist" htmlFor="name">Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition font-geist placeholder-white/20" id="name" placeholder="Your Name" type="text"/>
</div>
<div className="col-span-1">
<label className="block text-xs font-medium text-white/60 mb-2 font-geist" htmlFor="email">Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition font-geist placeholder-white/20" id="email" placeholder="john@company.com" type="email"/>
</div>
<div className="col-span-1">
<label className="block text-xs font-medium text-white/60 mb-2 font-geist" htmlFor="service">Service Required</label>
<div className="relative">
<select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition font-geist appearance-none" id="service">
<option className="bg-black text-white/70">Select Service</option>
<option className="bg-black">Product Design</option>
<option className="bg-black">Web Development</option>
<option className="bg-black">Mobile App</option>
<option className="bg-black">Consulting</option>
</select>
<svg className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-white/40" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="col-span-1">
<label className="block text-xs font-medium text-white/60 mb-2 font-geist" htmlFor="budget">Project Budget</label>
<div className="relative">
<select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition font-geist appearance-none" id="budget">
<option className="bg-black text-white/70">Select Range</option>
<option className="bg-black">$10k - $25k</option>
<option className="bg-black">$25k - $50k</option>
<option className="bg-black">$50k+</option>
</select>
<svg className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-white/40" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="col-span-1 sm:col-span-2">
<label className="block text-xs font-medium text-white/60 mb-2 font-geist" htmlFor="message">Project Details</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition font-geist placeholder-white/20" id="message" placeholder="Tell us about your idea..." rows="4"></textarea>
</div>
</div>
<div className="mt-8 text-center">
<button className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500 px-8 py-4 text-sm font-semibold text-black hover:bg-emerald-400 transition font-geist shadow-[0_0_30px_rgba(16,185,129,0.3)] w-full sm:w-auto justify-center" type="button">
                    Send Message
                    <svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
</button>
</div>
</form>
</div>
</section>

<footer className="xl:mt-0 border-white/10 border-t relative bg-black">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid gap-8 md:grid-cols-4">
<div className="md:col-span-2">
<a className="flex items-center gap-2" href="/">
<span className="text-lg font-bold tracking-tighter font-geist text-white">Ignyt<span className="text-emerald-500">.</span>Labs</span>
</a>
<p className="mt-4 text-sm text-white/70 max-w-md font-geist">Helping ambitious founders and companies build world-class digital products.</p>
</div>
<div className="">
<h4 className="text-sm font-semibold tracking-tight font-geist">Company</h4>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li className=""><a className="hover:text-white font-geist" href="#services">Services</a></li>
<li><a className="hover:text-white font-geist" href="#process">How we work</a></li>
<li><a className="hover:text-white font-geist" href="#contact">Contact</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold tracking-tight font-geist">Legal</h4>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li className=""><a className="hover:text-white font-geist" href="#">Privacy Policy</a></li>
<li className=""><a className="hover:text-white font-geist" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
<p className="text-xs text-white/50 font-geist">© <span className="font-geist" id="year">2025</span> Ignyt Labs. All Rights Reserved.</p>
</div>
</div>
</footer>
</div>



    </>
  );
}
