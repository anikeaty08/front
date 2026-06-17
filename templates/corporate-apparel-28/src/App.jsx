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



        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            // 1. Text Splitter Utility
            const splitTextElements = document.querySelectorAll(".reveal-text");
            splitTextElements.forEach(element => {
                const text = element.innerText;
                const words = text.split(" ");
                let newHtml = "";
                words.forEach(word => {
                    newHtml += `<span class="word-wrapper"><span class="word">${word}</span></span> `;
                });
                element.innerHTML = newHtml;
            });

            // 2. Reveal Animation
            const revealElements = document.querySelectorAll(".reveal-text");
            revealElements.forEach(element => {
                const words = element.querySelectorAll(".word");
                gsap.to(words, {
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    },
                    y: 0,
                    duration: 1.2,
                    ease: "power4.out",
                    stagger: 0.04
                });
            });

            // 3. Parallax Image Effect
            const parallaxWrappers = document.querySelectorAll(".parallax-wrapper");
            parallaxWrappers.forEach(wrapper => {
                const img = wrapper.querySelector(".parallax-img");
                if (img) {
                    gsap.fromTo(img, 
                        { y: "-10%" },
                        { 
                            y: "10%", 
                            ease: "none",
                            scrollTrigger: {
                                trigger: wrapper,
                                start: "top bottom",
                                end: "bottom top",
                                scrub: true
                            }
                        }
                    );
                }
            });

            // 4. Fade Up Miscellaneous Elements
            gsap.utils.toArray(".fade-up-element").forEach(element => {
                gsap.to(element, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%"
                    }
                });
            });

            // 5. Hero Button Reveal
            gsap.to("#hero-cta", {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 1,
                ease: "power3.out"
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
      

<nav className="fixed top-0 w-full z-50 bg-[#F8FAFC]/80 backdrop-blur-md border-b border-[#0A192F]/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center gap-2">
<iconify-icon className="text-[#2563EB]" icon="solar:layers-linear" width="24"></iconify-icon>
<span className="text-lg font-semibold tracking-tight">BrandWear</span>
</div>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#0A192F]/70">
<a className="hover:text-[#0A192F] transition-colors" href="#">Products</a>

<div className="relative group cursor-pointer h-16 flex items-center">
<span className="flex items-center gap-1 hover:text-[#0A192F] transition-colors">
                            Industries <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
<div className="absolute top-14 left-1/2 -translate-x-1/2 w-48 bg-white border border-[#0A192F]/5 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 flex flex-col">
<a className="px-3 py-2 text-xs hover:bg-[#F8FAFC] rounded-lg transition-colors text-[#0A192F]" href="#">Technology</a>
<a className="px-3 py-2 text-xs hover:bg-[#F8FAFC] rounded-lg transition-colors text-[#0A192F]" href="#">Logistics</a>
<a className="px-3 py-2 text-xs hover:bg-[#F8FAFC] rounded-lg transition-colors text-[#0A192F]" href="#">Finance</a>
</div>
</div>
<a className="hover:text-[#0A192F] transition-colors" href="#">Process</a>
<a className="hover:text-[#0A192F] transition-colors" href="#">Calculator</a>
<a className="hover:text-[#0A192F] transition-colors" href="#">Blog</a>
</div>

<div className="flex items-center space-x-6">
<a className="text-sm font-medium hidden md:block hover:text-[#2563EB] transition-colors" href="#">Log In</a>
<button className="bg-[#2563EB] text-white px-5 py-2.5 rounded-full text-xs font-medium tracking-wide hover:bg-opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-[#2563EB]/20 group">
                        Start Your Custom Quote
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

<div className="text-center max-w-4xl mx-auto mb-16 mt-8">
<h1 className="reveal-text text-5xl md:text-7xl serif-font leading-[1.05] font-light tracking-tight mb-6 text-[#0A192F]">
                Premium Corporate Apparel.<br/>Global Fulfillment.
            </h1>
<p className="text-lg text-[#0A192F]/60 max-w-2xl mx-auto leading-relaxed reveal-para delay-300">
                Elevate your company culture with high-end branded gear. From luxury outerwear to eco-friendly basics, we handle everything from design to global kitting.
            </p>
<div className="mt-8 opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4" id="hero-cta">
<button className="bg-[#2563EB] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-xl shadow-[#2563EB]/20 w-full sm:w-auto">
                    Start Your Custom Quote
                </button>
<button className="bg-white border border-[#0A192F]/10 text-[#0A192F] px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#F8FAFC] transition-colors w-full sm:w-auto">
                    Explore Catalog
                </button>
</div>
</div>

<div className="flex flex-col items-center justify-center mb-16 opacity-0 animate-fade-in delay-500">
<p className="text-[10px] font-semibold tracking-widest uppercase text-[#0A192F]/40 mb-6">Join 500+ Industry Leaders</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-[#0A192F]/30">
<iconify-icon className="hover:text-[#0A192F] transition-colors" icon="simple-icons:vercel" width="28"></iconify-icon>
<iconify-icon className="hover:text-[#0A192F] transition-colors" icon="simple-icons:stripe" width="40"></iconify-icon>
<iconify-icon className="hover:text-[#0A192F] transition-colors" icon="simple-icons:github" width="32"></iconify-icon>
<iconify-icon className="hover:text-[#0A192F] transition-colors" icon="simple-icons:dropbox" width="32"></iconify-icon>
<iconify-icon className="hover:text-[#0A192F] transition-colors hidden sm:block" icon="simple-icons:uber" width="36"></iconify-icon>
</div>
</div>

<div className="w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden relative group parallax-wrapper shadow-2xl shadow-[#0A192F]/10 border border-[#0A192F]/5">
<img alt="Diverse professional team wearing custom apparel" className="w-full h-[120%] object-cover parallax-img" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white z-10 flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
<iconify-icon icon="solar:tag-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium">Premium Quarter-Zips</p>
<p className="text-xs text-white/70">Custom embroidered for Q3 Offsite</p>
</div>
</div>
</div>
</main>

<section className="py-24 px-4 bg-white border-y border-[#0A192F]/5">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="reveal-text serif-font text-3xl md:text-5xl leading-tight font-light text-[#0A192F] tracking-tight mb-6">
                    More than just merch.
                </h2>
<p className="text-sm md:text-base text-[#0A192F]/60 leading-relaxed">
                    We transform how companies approach branded apparel. By combining retail-quality garments with an advanced global fulfillment network, we eliminate the logistical headaches of outfitting a modern, distributed workforce.
                </p>
</div>

<div className="grid md:grid-cols-3 gap-6">

<div className="bg-[#F8FAFC] p-8 rounded-2xl border border-[#0A192F]/5 hover:shadow-lg transition-shadow duration-300">
<div className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center mb-6">
<iconify-icon icon="solar:leaf-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl mb-3 text-[#0A192F]">Eco-Conscious</h3>
<p className="text-sm text-[#0A192F]/60 leading-relaxed">
                        Sustainable fabrics and carbon-neutral shipping options. We prioritize garments made from recycled materials and organic cotton.
                    </p>
</div>

<div className="bg-[#F8FAFC] p-8 rounded-2xl border border-[#0A192F]/5 hover:shadow-lg transition-shadow duration-300">
<div className="w-12 h-12 rounded-full bg-blue-100 text-[#2563EB] flex items-center justify-center mb-6">
<iconify-icon icon="solar:star-fall-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl mb-3 text-[#0A192F]">Premium Brands</h3>
<p className="text-sm text-[#0A192F]/60 leading-relaxed">
                        Co-brand with names your team actually wants to wear. Access retail-exclusive lines from Patagonia, North Face, and Nike.
                    </p>
</div>

<div className="bg-[#F8FAFC] p-8 rounded-2xl border border-[#0A192F]/5 hover:shadow-lg transition-shadow duration-300">
<div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mb-6">
<iconify-icon icon="solar:global-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl mb-3 text-[#0A192F]">Global Fulfillment</h3>
<p className="text-sm text-[#0A192F]/60 leading-relaxed">
                        Say goodbye to the swag closet. We handle individual kitting, address collection, and customs clearance to 150+ countries.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-4">
<div className="mb-16 md:text-center">
<span className="text-[#2563EB] text-[10px] font-semibold tracking-widest uppercase mb-4 block">How It Works</span>
<h2 className="reveal-text serif-font text-4xl md:text-5xl tracking-tight text-[#0A192F]">End-to-End Simplicity.</h2>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#0A192F]/10 to-transparent"></div>

<div className="relative pt-8 md:pt-0">
<div className="w-12 h-12 rounded-full bg-white border border-[#0A192F]/10 text-[#0A192F] font-serif text-xl flex items-center justify-center mb-6 relative z-10 md:mx-auto shadow-sm">1</div>
<div className="md:text-center">
<h3 className="font-medium text-lg mb-2">Design &amp; Curation</h3>
<p className="text-sm text-[#0A192F]/60">Our team curates a custom lookbook based on your brand guidelines and budget constraints.</p>
</div>
</div>

<div className="relative pt-8 md:pt-0">
<div className="w-12 h-12 rounded-full bg-white border border-[#0A192F]/10 text-[#0A192F] font-serif text-xl flex items-center justify-center mb-6 relative z-10 md:mx-auto shadow-sm">2</div>
<div className="md:text-center">
<h3 className="font-medium text-lg mb-2">Production &amp; Kitting</h3>
<p className="text-sm text-[#0A192F]/60">We embellish items with pristine quality and assemble personalized welcome kits or event packs.</p>
</div>
</div>

<div className="relative pt-8 md:pt-0">
<div className="w-12 h-12 rounded-full bg-[#0A192F] text-white font-serif text-xl flex items-center justify-center mb-6 relative z-10 md:mx-auto shadow-lg">3</div>
<div className="md:text-center">
<h3 className="font-medium text-lg mb-2">Global Distribution</h3>
<p className="text-sm text-[#0A192F]/60">Employees choose their sizes via a custom portal. We ship directly to their doorstep worldwide.</p>
</div>
</div>
</div>
</section>

<section className="relative h-[600px] md:h-[700px] w-full overflow-hidden parallax-wrapper my-12">
<img alt="Warehouse setup" className="absolute inset-0 w-full h-[120%] object-cover parallax-img" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/80 to-[#0A192F]/40 z-0"></div>
<div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
<h2 className="reveal-text text-white serif-font text-3xl md:text-5xl mb-4 text-center tracking-tight">
                Plan your next initiative.
            </h2>
<p className="text-white/70 text-sm mb-12 text-center max-w-md">Use our quick estimator tool to forecast budgets for onboarding kits, event swag, or company stores.</p>

<div className="w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl transform translate-y-8 opacity-0 fade-up-element relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2563EB] to-blue-400"></div>
<div className="flex justify-between items-center mb-8">
<div className="text-white font-medium">Budget Estimator</div>
<iconify-icon className="text-white/50 text-xl" icon="solar:calculator-linear"></iconify-icon>
</div>
<div className="space-y-6">

<div>
<div className="flex justify-between text-white text-xs font-medium mb-4">
<span>Team Size</span>
<span className="text-[#2563EB] bg-white/10 px-2 py-0.5 rounded-full">250 Employees</span>
</div>
<input className="w-full" max="1000" min="50" type="range" value="250"/>
</div>

<div className="pt-2">
<div className="text-white text-xs font-medium mb-3">Quality Tier</div>
<div className="grid grid-cols-3 gap-2">
<button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white text-[10px] py-2 rounded-lg transition-colors">Essential</button>
<button className="bg-[#2563EB] border border-[#2563EB] text-white text-[10px] py-2 rounded-lg transition-colors font-medium">Premium</button>
<button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white text-[10px] py-2 rounded-lg transition-colors">Luxury</button>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
<div>
<div className="text-white/60 text-[10px] uppercase tracking-wider mb-1">Est. Kit Price</div>
<div className="text-white text-3xl font-serif">~$145<span className="text-sm font-sans text-white/50">/ea</span></div>
</div>
<button className="bg-white text-[#0A192F] px-5 py-2.5 rounded-full text-xs font-medium hover:bg-gray-100 transition-colors">
                        Launch Tool
                    </button>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24">
<div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-5 relative">
<div className="w-full aspect-[4/5] rounded-3xl overflow-hidden relative">
<img alt="Sarah J." className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#0A192F]/10 mix-blend-multiply"></div>
</div>

<div className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-12 bg-white p-4 rounded-2xl shadow-xl border border-[#0A192F]/5 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#F8FAFC] flex items-center justify-center text-green-600">
<iconify-icon icon="solar:check-circle-bold" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-[#0A192F]">14 Countries</p>
<p className="text-[10px] text-[#0A192F]/50">Successfully Delivered</p>
</div>
</div>
</div>
<div className="md:col-span-6 md:col-start-7">
<iconify-icon className="text-[#2563EB]/20 mb-6" icon="solar:quote-left-bold-duotone" width="48"></iconify-icon>
<h2 className="reveal-text serif-font text-3xl md:text-5xl leading-tight text-[#0A192F] mb-8">
                    "Global kitting was an absolute nightmare until BrandWear. They seamlessly delivered premium onboarding kits to our remote team across 14 countries."
                </h2>
<div className="border-t border-[#0A192F]/10 pt-6">
<p className="font-medium text-[#0A192F]">Sarah J.</p>
<p className="text-sm text-[#0A192F]/60">Director of People, FinTech Solutions</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F8FAFC] border-t border-[#0A192F]/5">
<div className="max-w-3xl mx-auto px-4">
<div className="text-center mb-12">
<h2 className="reveal-text serif-font text-3xl md:text-4xl text-[#0A192F] mb-4">Frequently Asked Questions</h2>
<p className="text-sm text-[#0A192F]/60">Everything you need to know about our process and capabilities.</p>
</div>
<div className="space-y-4">

<details className="group bg-white rounded-2xl border border-[#0A192F]/5 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm hover:border-[#0A192F]/20 transition-colors">
<summary className="flex justify-between items-center font-medium p-6 text-sm text-[#0A192F]">
<span>What is your minimum order quantity (MOQ)?</span>
<span className="transition-transform group-open:rotate-180 text-[#0A192F]/40">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-[#0A192F]/60 text-sm p-6 pt-0 leading-relaxed border-t border-transparent group-open:border-[#0A192F]/5">
                        Our standard minimum order is 50 units for fully custom decorated apparel. However, for premium brand partnerships or specific high-end outerwear pieces, MOQs can sometimes be negotiated down to 25 units.
                    </div>
</details>

<details className="group bg-white rounded-2xl border border-[#0A192F]/5 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm hover:border-[#0A192F]/20 transition-colors">
<summary className="flex justify-between items-center font-medium p-6 text-sm text-[#0A192F]">
<span>Do you ship internationally?</span>
<span className="transition-transform group-open:rotate-180 text-[#0A192F]/40">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-[#0A192F]/60 text-sm p-6 pt-0 leading-relaxed border-t border-transparent group-open:border-[#0A192F]/5">
                        Yes, we handle end-to-end global fulfillment. We ship to over 150 countries, navigating local customs, taxes, and duties so your employees receive their gear without any surprise fees.
                    </div>
</details>

<details className="group bg-white rounded-2xl border border-[#0A192F]/5 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm hover:border-[#0A192F]/20 transition-colors">
<summary className="flex justify-between items-center font-medium p-6 text-sm text-[#0A192F]">
<span>Can employees pick their own sizes?</span>
<span className="transition-transform group-open:rotate-180 text-[#0A192F]/40">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-[#0A192F]/60 text-sm p-6 pt-0 leading-relaxed border-t border-transparent group-open:border-[#0A192F]/5">
                        Absolutely. We can deploy a custom branded popup store where your team can log in, select their preferred fits, sizes, and enter their home delivery address securely.
                    </div>
</details>

<details className="group bg-white rounded-2xl border border-[#0A192F]/5 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm hover:border-[#0A192F]/20 transition-colors">
<summary className="flex justify-between items-center font-medium p-6 text-sm text-[#0A192F]">
<span>What brands do you offer?</span>
<span className="transition-transform group-open:rotate-180 text-[#0A192F]/40">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-[#0A192F]/60 text-sm p-6 pt-0 leading-relaxed border-t border-transparent group-open:border-[#0A192F]/5">
                        We partner with top-tier retail brands including Patagonia, The North Face, Nike, Marine Layer, Bellroy, and Yeti, ensuring your corporate gifts are items people genuinely want to keep.
                    </div>
</details>

<details className="group bg-white rounded-2xl border border-[#0A192F]/5 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm hover:border-[#0A192F]/20 transition-colors">
<summary className="flex justify-between items-center font-medium p-6 text-sm text-[#0A192F]">
<span>How long does production take?</span>
<span className="transition-transform group-open:rotate-180 text-[#0A192F]/40">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-[#0A192F]/60 text-sm p-6 pt-0 leading-relaxed border-t border-transparent group-open:border-[#0A192F]/5">
                        Standard production takes about 15-20 business days after digital mockups are approved. Global shipping times vary by destination but generally add 3-7 days.
                    </div>
</details>
</div>
</div>
</section>

<section className="bg-[#0A192F] text-white py-32 relative overflow-hidden">

<div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB] rounded-full blur-[120px] opacity-20 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-[120px] opacity-20 -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-4 text-center relative z-10">
<h2 className="reveal-text serif-font text-5xl md:text-6xl mb-6 tracking-tight">Ready to elevate your <br/>employer brand?</h2>
<p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
                Stop settling for generic promotional products. Build a cohesive, premium experience for your global team today.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-[#2563EB] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all shadow-xl shadow-[#2563EB]/20">
                    Start Your Custom Quote
                </button>
<button className="bg-white/5 border border-white/20 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-white/10 transition-colors backdrop-blur-sm">
                    Talk to an Expert
                </button>
</div>
</div>
</section>

<footer className="bg-[#F8FAFC] pt-16 pb-8 border-t border-[#0A192F]/5 text-[#0A192F]">
<div className="max-w-7xl mx-auto px-4">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-[#2563EB]" icon="solar:layers-linear" width="24"></iconify-icon>
<span className="text-lg font-semibold tracking-tight">BrandWear</span>
</div>
<p className="text-xs text-[#0A192F]/60 max-w-xs">Premium corporate apparel and global fulfillment for modern teams.</p>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-widest text-[#0A192F]/40 mb-4">Platform</h4>
<ul className="space-y-3 text-sm text-[#0A192F]/70">
<li><a className="hover:text-[#2563EB] transition-colors" href="#">Products</a></li>
<li><a className="hover:text-[#2563EB] transition-colors" href="#">Process</a></li>
<li><a className="hover:text-[#2563EB] transition-colors" href="#">Global Kitting</a></li>
<li><a className="hover:text-[#2563EB] transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-widest text-[#0A192F]/40 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-[#0A192F]/70">
<li><a className="hover:text-[#2563EB] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#2563EB] transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-[#2563EB] transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-[#2563EB] transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<h4 className="text-xs font-semibold uppercase tracking-widest text-[#0A192F]/40 mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-[#0A192F]/70">
<li><a className="hover:text-[#2563EB] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#2563EB] transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-[#2563EB] transition-colors" href="#">Return Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-[#0A192F]/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-[#0A192F]/40">© 2024 BrandWear Inc. All rights reserved.</p>
<div className="flex gap-4 text-[#0A192F]/40">
<a className="hover:text-[#2563EB] transition-colors" href="#"><iconify-icon icon="simple-icons:linkedin" width="16"></iconify-icon></a>
<a className="hover:text-[#2563EB] transition-colors" href="#"><iconify-icon icon="simple-icons:twitter" width="16"></iconify-icon></a>
<a className="hover:text-[#2563EB] transition-colors" href="#"><iconify-icon icon="simple-icons:instagram" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
