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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        (function(){
            const words=['Grow.', 'Convert.', 'Scale.', 'Succeed.'];
            let currentWordIndex=0;
            let currentWord='';
            let isDeleting=false;
            const wordElement=document.getElementById('word-carousel');
            if(!wordElement)return;
            
            function type(){
                const fullWord=words[currentWordIndex];
                if(isDeleting){
                    currentWord=fullWord.substring(0,currentWord.length-1);
                }else{
                    currentWord=fullWord.substring(0,currentWord.length+1);
                }
                wordElement.textContent=currentWord;
                let typeSpeed=80;
                if(isDeleting) typeSpeed/=2;
                
                if(!isDeleting && currentWord===fullWord){
                    typeSpeed=1500;
                    isDeleting=true;
                }else if(isDeleting && currentWord===''){
                    isDeleting=false;
                    currentWordIndex++;
                    if(currentWordIndex===words.length) {
                        currentWordIndex = 0;
                    }
                    typeSpeed=500;
                }
                setTimeout(type,typeSpeed);
            }
            wordElement.textContent='';
            setTimeout(type,1000);
        })();

        document.addEventListener("DOMContentLoaded", () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

            document.querySelectorAll('.reveal-up').forEach((el) => {
                el.style.animationPlayState = 'paused';
                observer.observe(el);
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
      
<div className="absolute top-0 left-0 w-full h-[80vh] -z-10 bg-gradient-to-b from-white to-[#FAFAFA] animate-bg-intro border-b border-[#0A0A0A]/5">

<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#2EB850]/[0.03] blur-[100px]"></div>
</div>
<div className="w-full max-w-7xl flex flex-col relative min-h-[90vh]">

<header className="md:px-8 flex z-50 w-full pt-8 pr-6 pb-6 pl-6 relative items-center justify-between animate-header-intro">
<div className="font-semibold text-lg tracking-tighter text-[#0A0A0A] uppercase font-instrument">
                IDEOXPERT
            </div>
<nav className="hidden gap-x-8 md:flex bg-white/60 backdrop-blur-md px-6 py-2.5 rounded-full border border-[#0A0A0A]/5 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
<a className="text-xs font-medium text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors" href="#home">Home</a>
<a className="text-xs font-medium text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors" href="#services">Services</a>
<a className="text-xs font-medium text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors" href="#process">Process</a>
<a className="text-xs font-medium text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors" href="#portfolio">Portfolio</a>
<a className="text-xs font-medium text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-6">
<a className="inline-flex items-center justify-center text-white px-5 py-2.5 rounded-full text-xs font-medium transition-all shadow-[0_2px_8px_rgba(46,184,80,0.25)] hover:shadow-[0_4px_12px_rgba(46,184,80,0.35)] hover:-translate-y-0.5 bg-[#2EB850]" href="#contact">
                    Get in Touch
                </a>
</div>
</header>

<main className="flex-grow flex flex-col lg:flex-row items-center justify-between pt-24 lg:pt-16 pb-32 px-6 relative z-10 gap-16 lg:gap-8 w-full">

<div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#0A0A0A]/5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] text-xs font-medium text-[#0A0A0A]/60 mb-8 animate-title-intro">
<span className="w-1.5 h-1.5 rounded-full bg-[#2EB850] animate-pulse"></span>
                    Available for new projects
                </div>
<h1 className="leading-[1.05] md:text-6xl text-5xl lg:text-7xl font-semibold text-[#0A0A0A] tracking-tighter font-instrument animate-title-intro">
                    Websites that make your business
                    <br className="hidden lg:block"/>
<span className="inline-block border-r-[3px] border-[#2EB850] pr-1 animate-blink text-[#2EB850]" id="word-carousel">G</span>
</h1>
<p className="md:text-lg leading-relaxed animate-subtitle-intro text-base font-medium text-[#0A0A0A]/50 font-inter max-w-lg mt-6">
                    Whether you're launching a new venture or upgrading an existing brand, we design, build, and optimize digital experiences that attract visitors and generate leads.
                </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 animate-btn-intro w-full sm:w-auto justify-center lg:justify-start">
<a className="inline-flex items-center justify-center transition-all hover:-translate-y-0.5 text-sm font-medium text-white rounded-full px-8 py-3.5 shadow-[0_4px_14px_rgba(46,184,80,0.25)] hover:shadow-[0_6px_20px_rgba(46,184,80,0.3)] bg-[#2EB850]" href="#contact">
                        Get Free Consultation
                    </a>
<a className="inline-flex items-center justify-center transition-all hover:-translate-y-0.5 text-sm font-medium text-[#0A0A0A] rounded-full px-8 py-3.5 bg-white border border-[#0A0A0A]/10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:bg-[#FAFAFA]" href="#portfolio">
                        View Portfolio
                    </a>
</div>
</div>

<div className="w-full lg:w-[45%] flex justify-center lg:justify-end animate-header-intro relative">
<div className="relative w-full max-w-md aspect-square">
<div className="absolute inset-0 bg-gradient-to-tr from-[#2EB850]/10 to-transparent rounded-full blur-3xl"></div>

<div className="absolute right-0 lg:-right-4 top-10 w-4/5 bg-white/80 backdrop-blur-xl border border-[#0A0A0A]/10 shadow-[0_20px_40px_rgba(0,0,0,0.04)] rounded-2xl p-6 transition-transform hover:-translate-y-2 duration-500 z-20">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#FAFAFA] border border-[#0A0A0A]/5 flex items-center justify-center">
<iconify-icon className="text-[#2EB850]" icon="solar:chart-2-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-1.5">
<div className="w-20 h-1.5 bg-[#0A0A0A]/15 rounded-full"></div>
<div className="w-12 h-1 bg-[#0A0A0A]/10 rounded-full"></div>
</div>
</div>
<div className="px-2 py-1 bg-[#2EB850]/10 text-[#2EB850] text-xs font-semibold rounded-md border border-[#2EB850]/20">+124%</div>
</div>
<div className="w-full h-32 bg-[#FAFAFA] rounded-xl border border-[#0A0A0A]/5 flex items-end p-3 gap-2">
<div className="w-1/6 h-[30%] bg-[#2EB850]/20 rounded-t-sm"></div>
<div className="w-1/6 h-[45%] bg-[#2EB850]/40 rounded-t-sm"></div>
<div className="w-1/6 h-[35%] bg-[#2EB850]/30 rounded-t-sm"></div>
<div className="w-1/6 h-[65%] bg-[#2EB850]/60 rounded-t-sm"></div>
<div className="w-1/6 h-[80%] bg-[#2EB850]/80 rounded-t-sm"></div>
<div className="w-1/6 h-full bg-[#2EB850] rounded-t-sm shadow-[0_0_12px_rgba(46,184,80,0.3)]"></div>
</div>
</div>

<div className="absolute left-0 lg:-left-8 bottom-12 w-2/3 bg-white/90 backdrop-blur-md border border-[#0A0A0A]/10 shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-2xl p-5 transition-transform hover:-translate-y-2 duration-500 z-30 delay-100">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-[#FAFAFA] border border-[#0A0A0A]/5 flex items-center justify-center">
<iconify-icon className="text-[#0A0A0A]/60" icon="solar:mouse-circle-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-1.5 w-full">
<div className="w-1/2 h-1.5 bg-[#0A0A0A]/15 rounded-full"></div>
<div className="w-1/3 h-1 bg-[#0A0A0A]/10 rounded-full"></div>
</div>
</div>
<div className="flex gap-2">
<div className="w-full h-8 rounded-lg bg-[#0A0A0A]/5 border border-[#0A0A0A]/5 flex items-center justify-center">
<div className="w-1/2 h-1 bg-[#0A0A0A]/10 rounded-full"></div>
</div>
<div className="w-10 shrink-0 h-8 rounded-lg bg-[#2EB850] shadow-[0_2px_8px_rgba(46,184,80,0.25)] flex items-center justify-center text-white">
<iconify-icon className="text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

<section className="w-full bg-white py-32 md:py-40 px-6 flex justify-center relative z-20 border-t border-[#0A0A0A]/5" id="services">
<div className="max-w-7xl w-full flex flex-col items-center">
<h2 className="text-3xl md:text-5xl font-semibold text-[#0A0A0A] text-center max-w-3xl tracking-tight leading-tight reveal-up font-instrument" style={{animationPlayState: 'paused'}}>
                Expert Services Tailored for You
            </h2>
<p className="mt-6 text-base text-[#0A0A0A]/50 text-center max-w-2xl leading-relaxed font-inter reveal-up delay-100" style={{animationPlayState: 'paused'}}>
                We provide end-to-end digital solutions to establish and scale your online presence, seamlessly integrating with your goals.
            </p>
<div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">

<div className="bg-white rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-[#0A0A0A]/5 flex flex-col gap-6 w-full reveal-up delay-100 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1" style={{animationPlayState: 'paused'}}>
<div className="w-12 h-12 rounded-xl bg-[#FAFAFA] border border-[#0A0A0A]/5 flex items-center justify-center text-[#2EB850]">
<iconify-icon className="text-2xl" icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col gap-2">
<h3 className="text-lg font-semibold text-[#0A0A0A] tracking-tight font-instrument">Website Development</h3>
<p className="text-sm text-[#0A0A0A]/50 leading-relaxed font-inter">
                            Custom built solutions using modern tech stacks. Scalable architectures tailored exactly to your business logic.
                        </p>
</div>
</div>

<div className="bg-white rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-[#0A0A0A]/5 flex flex-col gap-6 w-full reveal-up delay-200 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1" style={{animationPlayState: 'paused'}}>
<div className="w-12 h-12 rounded-xl bg-[#FAFAFA] border border-[#0A0A0A]/5 flex items-center justify-center text-[#2EB850]">
<iconify-icon className="text-2xl" icon="solar:cart-large-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col gap-2">
<h3 className="text-lg font-semibold text-[#0A0A0A] tracking-tight font-instrument">CMS &amp; E-Commerce</h3>
<p className="text-sm text-[#0A0A0A]/50 leading-relaxed font-inter">
                            Easy to manage, scalable, and beautifully designed WordPress and Shopify websites that convert visitors into buyers.
                        </p>
</div>
</div>

<div className="bg-white rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-[#0A0A0A]/5 flex flex-col gap-6 w-full reveal-up delay-300 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1" style={{animationPlayState: 'paused'}}>
<div className="w-12 h-12 rounded-xl bg-[#FAFAFA] border border-[#0A0A0A]/5 flex items-center justify-center text-[#2EB850]">
<iconify-icon className="text-2xl" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col gap-2">
<h3 className="text-lg font-semibold text-[#0A0A0A] tracking-tight font-instrument">SEO Optimization</h3>
<p className="text-sm text-[#0A0A0A]/50 leading-relaxed font-inter">
                            On-page &amp; Off-page strategies to rank higher on search engines, ensuring your target audience finds you first.
                        </p>
</div>
</div>

<div className="bg-white rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-[#0A0A0A]/5 flex flex-col gap-6 w-full reveal-up delay-300 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1" style={{animationPlayState: 'paused'}}>
<div className="w-12 h-12 rounded-xl bg-[#FAFAFA] border border-[#0A0A0A]/5 flex items-center justify-center text-[#2EB850]">
<iconify-icon className="text-2xl" icon="solar:airbuds-case-charge-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col gap-2">
<h3 className="text-lg font-semibold text-[#0A0A0A] tracking-tight font-instrument">Landing Page Service</h3>
<p className="text-sm text-[#0A0A0A]/50 leading-relaxed font-inter">
                            High-conversion marketing pages designed specifically to capture leads, drive targeted campaigns, and maximize ROI.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#FAFAFA] py-32 md:py-40 px-6 flex justify-center relative z-20 border-t border-[#0A0A0A]/5" id="portfolio">
<div className="max-w-7xl w-full flex flex-col items-center">
<h2 className="text-3xl md:text-5xl font-semibold text-[#0A0A0A] text-center max-w-3xl tracking-tight leading-tight reveal-up delay-100 font-instrument" style={{animationPlayState: 'paused'}}>
                Featured Live Projects
            </h2>
<p className="mt-6 text-base text-[#0A0A0A]/50 text-center max-w-2xl leading-relaxed font-inter reveal-up delay-100" style={{animationPlayState: 'paused'}}>
                Click any image to preview the live website or view project details.
            </p>

<div className="mt-16 w-full grid grid-cols-1 md:grid-cols-3 gap-8 reveal-up delay-200" style={{animationPlayState: 'paused'}}>

<div className="flex flex-col gap-5 group cursor-pointer">
<div className="overflow-hidden rounded-2xl border border-[#0A0A0A]/5 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
<img alt="Corporate Business Website Preview" className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex items-center justify-between px-1">
<h3 className="text-base font-semibold text-[#0A0A0A] tracking-tight font-instrument">Fintech Dashboard App</h3>
<span className="text-xs font-medium text-[#0A0A0A]/40 group-hover:text-[#2EB850] transition-colors flex items-center gap-1">
                            View Project <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>

<div className="flex flex-col gap-5 group cursor-pointer">
<div className="overflow-hidden rounded-2xl border border-[#0A0A0A]/5 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
<img alt="E-Commerce Website Preview" className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex items-center justify-between px-1">
<h3 className="text-base font-semibold text-[#0A0A0A] tracking-tight font-instrument">Premium E-Commerce</h3>
<span className="text-xs font-medium text-[#0A0A0A]/40 group-hover:text-[#2EB850] transition-colors flex items-center gap-1">
                            View Project <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>

<div className="flex flex-col gap-5 group cursor-pointer">
<div className="overflow-hidden rounded-2xl border border-[#0A0A0A]/5 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
<img alt="Service Website Preview" className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex items-center justify-between px-1">
<h3 className="text-base font-semibold text-[#0A0A0A] tracking-tight font-instrument">Consulting Agency</h3>
<span className="text-xs font-medium text-[#0A0A0A]/40 group-hover:text-[#2EB850] transition-colors flex items-center gap-1">
                            View Project <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</div>

<div className="w-full max-w-4xl mt-32 reveal-up delay-300" style={{animationPlayState: 'paused'}}>
<h3 className="text-xl md:text-2xl font-semibold text-[#0A0A0A] mb-8 font-instrument tracking-tight">
                    Portfolio List (6 Websites Completed)
                </h3>
<div className="flex flex-col border-t border-[#0A0A0A]/5">

<div className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-[#0A0A0A]/5 gap-4 hover:px-6 transition-all duration-300 -mx-6 px-6 cursor-pointer hover:bg-white/50 rounded-xl">
<div>
<h4 className="text-base font-semibold text-[#0A0A0A] font-instrument group-hover:text-[#2EB850] transition-colors">Business Website</h4>
<p className="text-sm text-[#0A0A0A]/50 font-inter mt-1">Corporate &amp; Company website establishing professional credibility.</p>
</div>
<div className="shrink-0 text-sm font-medium text-[#0A0A0A]/30 group-hover:text-[#0A0A0A] transition-colors flex items-center gap-1.5">
                            Live Preview <iconify-icon className="text-base" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-[#0A0A0A]/5 gap-4 hover:px-6 transition-all duration-300 -mx-6 px-6 cursor-pointer hover:bg-white/50 rounded-xl">
<div>
<h4 className="text-base font-semibold text-[#0A0A0A] font-instrument group-hover:text-[#2EB850] transition-colors">E-commerce Website</h4>
<p className="text-sm text-[#0A0A0A]/50 font-inter mt-1">Online Store Design tailored for conversions and high sales.</p>
</div>
<div className="shrink-0 text-sm font-medium text-[#0A0A0A]/30 group-hover:text-[#0A0A0A] transition-colors flex items-center gap-1.5">
                            Live Preview <iconify-icon className="text-base" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-[#0A0A0A]/5 gap-4 hover:px-6 transition-all duration-300 -mx-6 px-6 cursor-pointer hover:bg-white/50 rounded-xl">
<div>
<h4 className="text-base font-semibold text-[#0A0A0A] font-instrument group-hover:text-[#2EB850] transition-colors">Service-Based Website</h4>
<p className="text-sm text-[#0A0A0A]/50 font-inter mt-1">Agency/Consulting Website designed to generate immediate client leads.</p>
</div>
<div className="shrink-0 text-sm font-medium text-[#0A0A0A]/30 group-hover:text-[#0A0A0A] transition-colors flex items-center gap-1.5">
                            Live Preview <iconify-icon className="text-base" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-[#0A0A0A]/5 gap-4 hover:px-6 transition-all duration-300 -mx-6 px-6 cursor-pointer hover:bg-white/50 rounded-xl">
<div>
<h4 className="text-base font-semibold text-[#0A0A0A] font-instrument group-hover:text-[#2EB850] transition-colors">WordPress Blog Website</h4>
<p className="text-sm text-[#0A0A0A]/50 font-inter mt-1">Content &amp; Blogging Platform optimized for readership and ads.</p>
</div>
<div className="shrink-0 text-sm font-medium text-[#0A0A0A]/30 group-hover:text-[#0A0A0A] transition-colors flex items-center gap-1.5">
                            Live Preview <iconify-icon className="text-base" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-[#0A0A0A]/5 gap-4 hover:px-6 transition-all duration-300 -mx-6 px-6 cursor-pointer hover:bg-white/50 rounded-xl">
<div>
<h4 className="text-base font-semibold text-[#0A0A0A] font-instrument group-hover:text-[#2EB850] transition-colors">Landing Page Website</h4>
<p className="text-sm text-[#0A0A0A]/50 font-inter mt-1">High-conversion marketing page built for specific ad campaigns.</p>
</div>
<div className="shrink-0 text-sm font-medium text-[#0A0A0A]/30 group-hover:text-[#0A0A0A] transition-colors flex items-center gap-1.5">
                            Live Preview <iconify-icon className="text-base" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-[#0A0A0A]/5 gap-4 hover:px-6 transition-all duration-300 -mx-6 px-6 cursor-pointer hover:bg-white/50 rounded-xl">
<div>
<h4 className="text-base font-semibold text-[#0A0A0A] font-instrument group-hover:text-[#2EB850] transition-colors">SEO Optimized Website</h4>
<p className="text-sm text-[#0A0A0A]/50 font-inter mt-1">Performance-focused business site built to dominate search rankings.</p>
</div>
<div className="shrink-0 text-sm font-medium text-[#0A0A0A]/30 group-hover:text-[#0A0A0A] transition-colors flex items-center gap-1.5">
                            Live Preview <iconify-icon className="text-base" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-white py-32 md:py-40 px-6 flex justify-center relative z-20 border-t border-[#0A0A0A]/5" id="process">
<div className="max-w-7xl w-full flex flex-col items-center">
<h2 className="text-3xl md:text-5xl font-semibold text-[#0A0A0A] text-center max-w-3xl tracking-tight leading-tight reveal-up font-instrument" style={{animationPlayState: 'paused'}}>
                From Idea to Launch. In Weeks, Not Months.
            </h2>
<p className="mt-6 text-base text-[#0A0A0A]/50 text-center max-w-2xl leading-relaxed font-inter reveal-up delay-100" style={{animationPlayState: 'paused'}}>
                A simple, transparent process. We keep things clear, efficient, and focused on your goals.
            </p>
<div className="mt-20 w-full relative reveal-up delay-200 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8" style={{animationPlayState: 'paused'}}>

<div className="flex flex-col relative pt-2 md:pt-0 pl-8 md:pl-0 border-l border-[#0A0A0A]/10 md:border-l-0 md:border-t md:pt-8 group hover:border-[#0A0A0A]/30 transition-colors">
<div className="absolute left-[-5px] md:left-0 top-0 md:top-[-5px] w-2.5 h-2.5 rounded-full bg-[#0A0A0A]/20 group-hover:bg-[#2EB850] transition-colors ring-4 ring-white"></div>
<span className="text-xs font-medium text-[#0A0A0A]/40 tracking-widest uppercase mb-3 font-inter">Step 01</span>
<h3 className="text-lg font-semibold text-[#0A0A0A] mb-2 tracking-tight font-instrument">Consultation</h3>
<p className="text-sm text-[#0A0A0A]/50 font-inter leading-relaxed">
                        We listen, ask the right questions, and understand your goals, audience, and technical requirements.
                    </p>
</div>

<div className="flex flex-col relative pt-2 md:pt-0 pl-8 md:pl-0 border-l border-[#0A0A0A]/10 md:border-l-0 md:border-t md:pt-8 group hover:border-[#0A0A0A]/30 transition-colors">
<div className="absolute left-[-5px] md:left-0 top-0 md:top-[-5px] w-2.5 h-2.5 rounded-full bg-[#0A0A0A]/20 group-hover:bg-[#2EB850] transition-colors ring-4 ring-white"></div>
<span className="text-xs font-medium text-[#0A0A0A]/40 tracking-widest uppercase mb-3 font-inter">Step 02</span>
<h3 className="text-lg font-semibold text-[#0A0A0A] mb-2 tracking-tight font-instrument">Design Mockup</h3>
<p className="text-sm text-[#0A0A0A]/50 font-inter leading-relaxed">
                        Creating a visual blueprint and wireframes of your new website, ensuring it aligns perfectly with your brand.
                    </p>
</div>

<div className="flex flex-col relative pt-2 md:pt-0 pl-8 md:pl-0 border-l border-[#0A0A0A]/10 md:border-l-0 md:border-t md:pt-8 group hover:border-[#0A0A0A]/30 transition-colors">
<div className="absolute left-[-5px] md:left-0 top-0 md:top-[-5px] w-2.5 h-2.5 rounded-full bg-[#0A0A0A]/20 group-hover:bg-[#2EB850] transition-colors ring-4 ring-white"></div>
<span className="text-xs font-medium text-[#0A0A0A]/40 tracking-widest uppercase mb-3 font-inter">Step 03</span>
<h3 className="text-lg font-semibold text-[#0A0A0A] mb-2 tracking-tight font-instrument">Development</h3>
<p className="text-sm text-[#0A0A0A]/50 font-inter leading-relaxed">
                        Building the site with clean, scalable code, integrating necessary CMS and third-party tools.
                    </p>
</div>

<div className="flex flex-col relative pt-2 md:pt-0 pl-8 md:pl-0 border-l border-transparent md:border-l-0 md:border-t md:border-[#0A0A0A]/10 md:pt-8 group hover:border-[#0A0A0A]/30 transition-colors">
<div className="absolute left-[-5px] md:left-0 top-0 md:top-[-5px] w-2.5 h-2.5 rounded-full bg-[#0A0A0A]/20 group-hover:bg-[#2EB850] transition-colors ring-4 ring-white"></div>
<span className="text-xs font-medium text-[#0A0A0A]/40 tracking-widest uppercase mb-3 font-inter">Step 04</span>
<h3 className="text-lg font-semibold text-[#0A0A0A] mb-2 tracking-tight font-instrument">Launch</h3>
<p className="text-sm text-[#0A0A0A]/50 font-inter leading-relaxed">
                        Rigorous testing across all devices. Once approved, we push it live and hand over the keys.
                    </p>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#0A0A0A] py-24 md:py-32 px-6 flex justify-center relative z-20 overflow-hidden">
<div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#2EB850]/10 blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-12 reveal-up relative z-10" style={{animationPlayState: 'paused'}}>
<div className="max-w-2xl">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight font-instrument">
                    Get a <span className="text-[#2EB850]">FREE</span> Website Audit
                </h2>
<p className="mt-6 text-base text-white/60 leading-relaxed font-inter max-w-xl">
                    Discover exactly what's holding your current website back from converting visitors into customers. No strings attached.
                </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0 mt-8 md:mt-0">
<a className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-medium transition-all bg-white hover:bg-neutral-200 text-[#0A0A0A] hover:-translate-y-0.5" href="#contact">
                    Claim Your Free Offer
                </a>
</div>
</div>
</section>

<section className="w-full bg-white py-32 md:py-40 px-6 flex justify-center relative z-20" id="contact">
<div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 reveal-up" style={{animationPlayState: 'paused'}}>

<div className="flex flex-col justify-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#0A0A0A] font-instrument mb-6">Let's Build Something Great</h2>
<p className="text-base text-[#0A0A0A]/50 mb-12 font-inter leading-relaxed max-w-md">Fill out the form and we'll get back to you within 24 hours to schedule your free consultation.</p>
<div className="space-y-8">
<div className="flex items-start gap-5">
<div className="w-10 h-10 rounded-full bg-[#FAFAFA] border border-[#0A0A0A]/5 flex items-center justify-center text-[#2EB850] shrink-0">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold tracking-tight text-[#0A0A0A] font-instrument">100% Satisfaction Guarantee</h4>
<p className="mt-1 text-sm text-[#0A0A0A]/50 font-inter">We revise until you are completely happy with the design.</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-10 h-10 rounded-full bg-[#FAFAFA] border border-[#0A0A0A]/5 flex items-center justify-center text-[#2EB850] shrink-0">
<iconify-icon className="text-xl" icon="solar:headphones-round-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold tracking-tight text-[#0A0A0A] font-instrument">Ongoing Support</h4>
<p className="mt-1 text-sm text-[#0A0A0A]/50 font-inter">We don't just launch and leave. We are here when you need us.</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-10 h-10 rounded-full bg-[#FAFAFA] border border-[#0A0A0A]/5 flex items-center justify-center text-[#2EB850] shrink-0">
<iconify-icon className="text-xl" icon="solar:shield-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold tracking-tight text-[#0A0A0A] font-instrument">Money-Back Guarantee</h4>
<p className="mt-1 text-sm text-[#0A0A0A]/50 font-inter">We ensure quality work and client satisfaction. If we fail to meet agreed requirements, your investment is protected with a money-back guarantee.</p>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 md:p-10 rounded-2xl border border-[#0A0A0A]/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
<form action="#" className="space-y-5" method="POST">
<div>
<label className="block text-xs font-medium text-[#0A0A0A]/60 mb-1.5 font-inter" htmlFor="name">Full Name</label>
<input className="w-full px-4 py-3 bg-transparent border border-[#0A0A0A]/15 rounded-xl text-sm text-[#0A0A0A] focus:border-[#0A0A0A] outline-none transition-colors placeholder:text-[#0A0A0A]/20 font-inter shadow-sm" id="name" name="name" placeholder="John Doe" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-[#0A0A0A]/60 mb-1.5 font-inter" htmlFor="email">Email Address</label>
<input className="w-full px-4 py-3 bg-transparent border border-[#0A0A0A]/15 rounded-xl text-sm text-[#0A0A0A] focus:border-[#0A0A0A] outline-none transition-colors placeholder:text-[#0A0A0A]/20 font-inter shadow-sm" id="email" name="email" placeholder="john@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-[#0A0A0A]/60 mb-1.5 font-inter" htmlFor="phone">Phone Number</label>
<input className="w-full px-4 py-3 bg-transparent border border-[#0A0A0A]/15 rounded-xl text-sm text-[#0A0A0A] focus:border-[#0A0A0A] outline-none transition-colors placeholder:text-[#0A0A0A]/20 font-inter shadow-sm" id="phone" name="phone" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
</div>
<div className="relative">
<label className="block text-xs font-medium text-[#0A0A0A]/60 mb-1.5 font-inter" htmlFor="business_type">Business Type</label>
<select className="appearance-none w-full px-4 py-3 bg-transparent border border-[#0A0A0A]/15 rounded-xl text-sm text-[#0A0A0A] focus:border-[#0A0A0A] outline-none transition-colors font-inter shadow-sm bg-white" id="business_type" name="business_type">
<option disabled="" selected="" value="">Select an option</option>
<option value="startup">Startup</option>
<option value="existing">Existing Business</option>
<option value="ecommerce">E-commerce</option>
<option value="other">Other</option>
</select>
<div className="absolute right-4 top-[34px] text-[#0A0A0A]/40 pointer-events-none">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-medium text-[#0A0A0A]/60 mb-1.5 font-inter" htmlFor="message">Message</label>
<textarea className="w-full px-4 py-3 bg-transparent border border-[#0A0A0A]/15 rounded-xl text-sm text-[#0A0A0A] focus:border-[#0A0A0A] outline-none transition-colors placeholder:text-[#0A0A0A]/20 resize-none font-inter shadow-sm" id="message" name="message" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<div className="flex flex-col gap-3 pt-4 w-full">
<button className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-white bg-[#0A0A0A] rounded-full hover:bg-[#0A0A0A]/80 transition-colors shadow-sm" type="submit">
                            Send Message
                        </button>
<a className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#0A0A0A] bg-white rounded-full hover:bg-[#FAFAFA] transition-colors border border-[#0A0A0A]/10 shadow-[0_2px_8px_rgba(0,0,0,0.02)]" href="https://wa.me/1234567890" target="_blank">
<iconify-icon className="text-lg text-[#2EB850]" icon="solar:phone-calling-linear"></iconify-icon>
                            Chat on WhatsApp
                        </a>
</div>
</form>
</div>
</div>
</section>

<footer className="w-full bg-[#FAFAFA] pt-16 pb-8 px-6 flex justify-center relative z-20 border-t border-[#0A0A0A]/5">
<div className="max-w-7xl w-full flex flex-col">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
<div className="font-semibold text-lg tracking-tighter text-[#0A0A0A] uppercase font-instrument">
                    IDEOXPERT
                </div>
<div className="flex flex-wrap justify-center gap-8 text-xs font-medium text-[#0A0A0A]/50 font-inter">
<a className="hover:text-[#0A0A0A] transition-colors" href="#home">Home</a>
<a className="hover:text-[#0A0A0A] transition-colors" href="#services">Services</a>
<a className="hover:text-[#0A0A0A] transition-colors" href="#portfolio">Portfolio</a>
<a className="hover:text-[#0A0A0A] transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-6 text-[#0A0A0A]/40 shrink-0">
<a aria-label="Facebook" className="hover:text-[#0A0A0A] transition-colors" href="#" target="_blank">
<iconify-icon className="text-xl" icon="solar:round-facebook-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a aria-label="LinkedIn" className="hover:text-[#0A0A0A] transition-colors" href="#" target="_blank">
<iconify-icon className="text-xl" icon="solar:buildings-2-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a aria-label="Email" className="hover:text-[#0A0A0A] transition-colors" href="mailto:info@ideoxpert.com">
<iconify-icon className="text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
<div className="w-full h-px bg-[#0A0A0A]/5 mb-8"></div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#0A0A0A]/40 font-inter">
<p>Copyright © 2024 IdeoXpert Digital Agency</p>
<div className="flex flex-wrap justify-center gap-6">
<a className="hover:text-[#0A0A0A] transition-colors" href="#">Terms of Use</a>
<a className="hover:text-[#0A0A0A] transition-colors" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
