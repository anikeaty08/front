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

            // 5. Button Reveal
            gsap.to("#hero-cta", {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 1,
                ease: "power3.out"
            });
            
             // 6. Footer Parallax
            gsap.fromTo(".parallax-footer-text", 
                { y: "-20%" },
                { 
                    y: "10%", 
                    ease: "none",
                    scrollTrigger: {
                        trigger: "footer",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
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
      

<nav className="fixed top-0 w-full z-50 bg-[#F3F1EB]/80 backdrop-blur-md border-b border-[#1A2E22]/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="hidden md:flex space-x-8 text-sm font-medium text-[#1A2E22]/70">
<a className="hover:text-[#1A2E22] transition-colors" href="#">Catalog</a>
<a className="hover:text-[#1A2E22] transition-colors" href="#">How It Works</a>
<a className="hover:text-[#1A2E22] transition-colors" href="#">FAQ</a>
</div>

<div className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
<iconify-icon className="text-[#1A2E22]" icon="solar:t-shirt-linear" width="24"></iconify-icon>
<span className="text-xl font-medium tracking-tighter uppercase">BrandWear</span>
</div>

<div className="flex items-center space-x-6">
<a className="text-sm font-medium hidden md:block" href="#">Login</a>
<button className="bg-[#1A2E22] text-[#F3F1EB] px-5 py-2 rounded-full text-xs font-medium tracking-wide hover:bg-opacity-90 transition-all flex items-center gap-2 group">
                        Get a Custom Quote
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

<div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 opacity-0 animate-fade-in" style={{animationFillMode: 'forwards'}}>
<div className="flex -space-x-2">
<img alt="Partner" className="w-6 h-6 rounded-full border border-[#F3F1EB] object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&amp;auto=format&amp;fit=crop&amp;q=60"/>
<img alt="Partner" className="w-6 h-6 rounded-full border border-[#F3F1EB] object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&amp;auto=format&amp;fit=crop&amp;q=60"/>
<img alt="Partner" className="w-6 h-6 rounded-full border border-[#F3F1EB] object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
<span className="text-xs font-medium tracking-wide uppercase text-[#1A2E22]/60">Trusted by 500+ top brands</span>
</div>

<div className="text-center max-w-4xl mx-auto mb-16">
<h1 className="reveal-text text-5xl md:text-7xl serif-font leading-[1.1] font-light tracking-tight mb-6">
                Premium Custom Apparel <br/> Your Team Will Actually <br/> Want to Wear.
            </h1>
<p className="text-lg text-[#1A2E22]/70 max-w-xl mx-auto leading-relaxed reveal-para delay-300">
                Stop wasting budget on "closet-filler" swag. 
                <span className="md:block">We design and deliver high-quality, retail-grade custom apparel that builds culture and scales your brand.</span>
</p>
<div className="mt-8 opacity-0" id="hero-cta">
<button className="bg-[#1A2E22] text-[#F3F1EB] px-8 py-3 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-xl shadow-[#1A2E22]/10">
                    Get a Custom Quote
                </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[500px]">

<div className="md:col-span-4 rounded-2xl overflow-hidden relative group h-[300px] md:h-full parallax-wrapper">
<img alt="Premium Apparel Detail" className="w-full h-[120%] object-cover parallax-img" src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 text-white z-10">
<p className="text-xs font-medium bg-black/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 inline-flex items-center gap-1">
<iconify-icon icon="solar:tag-linear"></iconify-icon>
                        Retail Quality
                    </p>
</div>
</div>

<div className="md:col-span-4 bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm border border-[#1A2E22]/5">
<div className="">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-full bg-[#F3F1EB] flex items-center justify-center">
<img alt="T-Shirt" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<iconify-icon className="text-[#1A2E22]/20 text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="serif-font text-2xl mb-1">Premium Corporate Gear</h3>
<p className="text-xs text-[#1A2E22]/60">Retail-grade fit and finish. Built to last.</p>
</div>
<div className="space-y-3 mt-8">
<div className="flex justify-between text-xs border-b border-gray-100 pb-2">
<span className="text-gray-500">Brands</span>
<span className="font-medium">Patagonia, Nike, Bella+Canvas</span>
</div>
<div className="flex justify-between text-xs border-b border-gray-100 pb-2">
<span className="text-gray-500">Decoration</span>
<span className="font-medium">High-Density Embroidery</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-gray-500">Turnaround</span>
<span className="font-medium">10-14 Business Days</span>
</div>
</div>
</div>

<div className="md:col-span-4 rounded-2xl overflow-hidden relative group h-[300px] md:h-full parallax-wrapper">
<img alt="Team wearing apparel" className="w-full h-[120%] object-cover parallax-img" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 text-white max-w-[80%] z-10">
<p className="serif-font text-xl leading-tight">Apparel as a strategic investment in culture and brand equity.</p>
</div>
</div>
</div>
</main>

<section className="py-24 px-4 bg-white border-y border-[#1A2E22]/5">
<div className="max-w-4xl mx-auto text-center">
<h2 className="reveal-text serif-font text-3xl md:text-5xl leading-tight font-light text-[#1A2E22] tracking-tight">
                “BrandWear is the premier partner for high-growth companies that view custom apparel as a strategic investment, not just a line item.”
            </h2>
</div>
</section>

<section className="py-20 max-w-7xl mx-auto px-4">
<div className="flex items-end justify-between mb-10">
<div>
<h3 className="serif-font text-3xl mb-2 reveal-text">Key Benefits</h3>
<p className="text-sm text-[#1A2E22]/60">The BrandWear Difference.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-[#1A2E22]/10 flex items-center justify-center hover:bg-[#1A2E22] hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-[#1A2E22]/10 flex items-center justify-center hover:bg-[#1A2E22] hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto hide-scrollbar pb-10">

<div className="min-w-[200px] group cursor-pointer">
<div className="w-full aspect-square bg-white rounded-2xl mb-4 flex items-center justify-center p-0 group-hover:shadow-xl transition-all border border-[#1A2E22]/5 relative overflow-hidden">
<img alt="Premium Fabric" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-white text-xs font-medium bg-white/20 backdrop-blur px-3 py-1 rounded-full">Sourcing</span>
</div>
</div>
<h4 className="font-medium">Retail Standards</h4>
<p className="text-xs text-[#1A2E22]/50">The same brands your employees buy.</p>
</div>

<div className="min-w-[280px] cursor-pointer">
<div className="w-full aspect-square bg-[#1A2E22] rounded-2xl mb-4 flex items-center justify-center p-0 shadow-2xl relative overflow-hidden">
<img alt="Embroidery Detail" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
<p className="text-white text-xs leading-relaxed">
<span className="font-semibold block mb-1">Brand Consistency</span>
                            Precision PANTONE® color matching and high-density embroidery.
                        </p>
</div>
</div>
<h4 className="font-medium">Brand Consistency</h4>
<p className="text-xs text-[#1A2E22]/50">Expert embellishment techniques.</p>
</div>

<div className="min-w-[200px] group cursor-pointer">
<div className="w-full aspect-square bg-white rounded-2xl mb-4 flex items-center justify-center p-0 group-hover:shadow-xl transition-all border border-[#1A2E22]/5 relative overflow-hidden">
<img alt="Warehousing" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="font-medium">Zero Inventory Stress</h4>
<p className="text-xs text-[#1A2E22]/50">Optional warehousing &amp; individual fulfillment.</p>
</div>

<div className="min-w-[200px] group cursor-pointer">
<div className="w-full aspect-square bg-white rounded-2xl mb-4 flex items-center justify-center p-0 group-hover:shadow-xl transition-all border border-[#1A2E22]/5 relative overflow-hidden">
<img alt="Color Swatches" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="font-medium">Dedicated Support</h4>
<p className="text-xs text-[#1A2E22]/50">A direct line to an apparel expert.</p>
</div>
</div>
</section>

<section className="relative h-[600px] md:h-[800px] w-full overflow-hidden parallax-wrapper">
<img alt="Screen Printing Workshop" className="absolute inset-0 w-full h-[120%] object-cover parallax-img" src="https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A2E22] via-[#1A2E22]/40 to-transparent opacity-90 z-0"></div>
<div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
<h2 className="reveal-text text-white serif-font text-4xl md:text-6xl mb-12 text-center">
                How It Works. <br/> Concept to Delivery.
            </h2>

<div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl transform translate-y-12 opacity-0 fade-up-element">
<div className="flex justify-between items-center mb-6">
<div className="text-white/80 text-xs uppercase tracking-wider">Streamlined Process</div>
<iconify-icon className="text-white" icon="solar:verified-check-bold"></iconify-icon>
</div>
<div className="space-y-6">
<div>
<div className="flex justify-between text-white text-sm mb-2">
<span>Curated Selection</span>
<span className="text-green-300">Step 1</span>
</div>
<div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-green-200 to-green-400 w-[100%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-white text-sm mb-2">
<span>Design Consult &amp; Approval</span>
<span className="text-green-300">Step 2 &amp; 3</span>
</div>
<div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-green-200 to-green-400 w-[100%]"></div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full bg-white border border-white flex items-center justify-center">
<iconify-icon className="text-[#1A2E22] text-xs" icon="solar:box-bold"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-stone-200 border border-white flex items-center justify-center">
<iconify-icon className="text-[#1A2E22] text-xs" icon="solar:routing-2-bold"></iconify-icon>
</div>
</div>
<div className="text-right">
<div className="text-white text-2xl font-serif">Step 4</div>
<div className="text-white/60 text-[10px]">Bulk or On-Demand Delivery</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-4">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-[#1A2E22]/10 pb-6">
<h2 className="reveal-text serif-font text-4xl md:text-5xl">Frequently Asked Questions</h2>
<div className="flex space-x-6 text-sm font-medium mt-6 md:mt-0 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
<button className="text-[#1A2E22] border-b-2 border-[#1A2E22] pb-1 whitespace-nowrap">Ordering</button>
<button className="text-[#1A2E22]/40 hover:text-[#1A2E22] transition-colors pb-1 whitespace-nowrap">Shipping</button>
<button className="text-[#1A2E22]/40 hover:text-[#1A2E22] transition-colors pb-1 whitespace-nowrap">Customization</button>
<button className="text-[#1A2E22]/40 hover:text-[#1A2E22] transition-colors pb-1 whitespace-nowrap">Support</button>
</div>
</div>
<div className="grid md:grid-cols-2 gap-16">

<div className="space-y-0">

<div className="group py-8 border-b border-[#1A2E22]/10 cursor-pointer">
<h3 className="serif-font text-3xl group-hover:text-[#1A2E22]/70 transition-colors">What is the minimum order quantity?</h3>
<p className="text-sm text-[#1A2E22]/60 mt-2">Our standard MOQ starts at 24 pieces per design to ensure we can provide the best wholesale pricing and decoration quality.</p>
</div>

<div className="group py-8 border-b border-[#1A2E22]/10 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
<h3 className="serif-font text-3xl">Can we mix sizes and styles?</h3>
<p className="text-sm text-[#1A2E22]/60 mt-2">Absolutely. As long as the logo design and ink/thread colors remain the same, you can mix sizes and even garment types (e.g., hoodies and tees) to meet our 24-piece minimum.</p>
</div>

<div className="group py-8 border-b border-[#1A2E22]/10 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
<h3 className="serif-font text-3xl">Do you offer employee storefronts?</h3>
<p className="text-sm text-[#1A2E22]/60 mt-2">Yes! For companies with 100+ employees, we can build a white-labeled portal where new hires can select their preferred size and style upon joining.</p>
</div>

<div className="group py-8 border-b border-[#1A2E22]/10 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
<h3 className="serif-font text-3xl">What is the typical turnaround?</h3>
<p className="text-sm text-[#1A2E22]/60 mt-2">Standard production is 10-14 business days after proof approval. We also offer expedited "Rush" services for events with a 5-day turnaround.</p>
</div>

<div className="group py-8 border-b border-[#1A2E22]/10 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
<h3 className="serif-font text-3xl">Can I see a sample first?</h3>
<p className="text-sm text-[#1A2E22]/60 mt-2">We provide digital mockups for all orders. Physical "blank" samples can be ordered for sizing, and "decorated" samples are available for orders exceeding 250 units.</p>
</div>
</div>

<div className="hidden md:grid grid-cols-2 gap-4">
<div className="parallax-wrapper rounded-2xl overflow-hidden h-64">
<img alt="T-shirts" className="w-full h-[120%] object-cover parallax-img" src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="parallax-wrapper rounded-2xl overflow-hidden h-64 mt-12">
<img alt="Jackets" className="w-full h-[120%] object-cover parallax-img" src="https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="mt-12 flex flex-wrap gap-3">
<span className="px-4 py-2 rounded-full border border-[#1A2E22]/20 text-xs font-medium hover:bg-[#1A2E22] hover:text-white transition-colors cursor-pointer flex items-center gap-2">
<iconify-icon className="text-green-600" icon="solar:check-circle-bold"></iconify-icon>
                MOQ: 24 Pieces
            </span>
<span className="px-4 py-2 rounded-full border border-[#1A2E22]/20 text-xs font-medium hover:bg-[#1A2E22] hover:text-white transition-colors cursor-pointer flex items-center gap-2">
<iconify-icon className="text-green-600" icon="solar:check-circle-bold"></iconify-icon>
                Pantone Matching
            </span>
<span className="px-4 py-2 rounded-full border border-[#1A2E22]/20 text-xs font-medium hover:bg-[#1A2E22] hover:text-white transition-colors cursor-pointer flex items-center gap-2">
<iconify-icon className="text-green-600" icon="solar:check-circle-bold"></iconify-icon>
                White-Label Portals
            </span>
</div>
</section>

<section className="text-[#F3F1EB] bg-[#1A2E22] pt-24 pb-24">
<div className="max-w-7xl mx-auto px-4 md:grid md:grid-cols-2 gap-16 items-center">
<div className="mb-12 md:mb-0">
<h2 className="reveal-text serif-font text-4xl md:text-5xl mb-6 text-white">Ready to upgrade <br/>your company's look?</h2>
<p className="text-white/60 text-lg mb-8 max-w-md">Join 500+ brands that trust BrandWear for their team gear. We apply expert embroidery and screen printing techniques to ensure your brand looks as professional as it operates.</p>
<div className="grid grid-cols-3 gap-4 mt-12">
<img alt="Fabric Selection" className="h-24 w-full object-cover rounded-lg opacity-60 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1620799140089-22a30bbcc32f?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<img alt="Printing Process" className="h-24 w-full object-cover rounded-lg opacity-60 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<img alt="Finishes" className="h-24 w-full object-cover rounded-lg opacity-60 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="relative">
<div className="absolute -top-10 -right-10 text-[10rem] font-serif text-white/5 select-none pointer-events-none">01</div>

<div className="bg-[#F3F1EB] text-[#1A2E22] rounded-3xl p-8 max-w-sm mx-auto shadow-2xl relative z-10 transform hover:-translate-y-2 transition-transform duration-300">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-full bg-[#1A2E22] text-white flex items-center justify-center">
<iconify-icon icon="solar:rocket-linear"></iconify-icon>
</div>
<div className="px-3 py-1 bg-stone-200 rounded-full text-[10px] font-bold uppercase tracking-wide">Get Started</div>
</div>
<h3 className="text-xl font-semibold mb-2">Start Your Project</h3>
<p className="text-xs text-[#1A2E22]/60 mb-6">We handle everything from design consultation to individual employee dropshipping.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="mt-0.5 text-green-700" icon="solar:check-read-linear"></iconify-icon>
<span className="">Curated Garment Selection</span>
</li>
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="mt-0.5 text-green-700" icon="solar:check-read-linear"></iconify-icon>
<span className="">Design &amp; Perfect Placement</span>
</li>
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="mt-0.5 text-green-700" icon="solar:check-read-linear"></iconify-icon>
<span>Bulk or On-Demand Delivery</span>
</li>
</ul>
<button className="w-full bg-[#1A2E22] text-white py-3 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all">Get a Custom Quote</button>

<div className="mt-6 flex justify-center">
<p className="text-[10px] text-[#1A2E22]/50">Mockups typically provided within 24h</p>
</div>
</div>

<div className="mt-8 flex justify-between gap-4 text-xs text-white/40 max-w-sm mx-auto">
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">Browse Catalog</div>
<div className="flex gap-x-2 gap-y-2 items-center">Talk to Sales</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F3F1EB] pt-24 pb-24">
<div className="text-center mb-16 px-4">
<span className="border border-[#1A2E22]/20 px-3 py-1 rounded-full text-[10px] uppercase tracking-wide">Testimonials</span>
<h2 className="reveal-text serif-font text-3xl md:text-4xl mt-6 mb-4">Gear that transforms culture.</h2>
<p className="text-[#1A2E22]/60 text-sm">See how BrandWear is upgrading company swag everywhere.</p>
</div>
<div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl border border-[#1A2E22]/5">
<div className="flex gap-1 text-[#1A2E22] mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<h4 className="font-serif text-lg mb-2">Impeccable quality</h4>
<p className="text-sm text-[#1A2E22]/70 leading-relaxed mb-6">
                    "The Patagonia fleece jackets arrived and our team loves them. The embroidery is incredibly detailed and perfectly matches our brand colors."
                </p>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-[#1A2E22]/5">
<div className="flex items-center gap-2">
<span className="font-bold text-xl">5.0</span>
<span className="text-[10px] text-[#1A2E22]/50">Google Reviews</span>
</div>
<iconify-icon className="text-[#1A2E22]" icon="simple-icons:google" width="20"></iconify-icon>
</div>
</div>

<div className="bg-[#1A2E22] rounded-2xl overflow-hidden relative group h-[400px] md:h-auto text-white">
<img alt="Team" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mb-4 cursor-pointer hover:bg-white hover:text-[#1A2E22] transition-colors">
<iconify-icon className="ml-1" icon="solar:play-bold"></iconify-icon>
</div>
<p className="font-serif text-xl leading-snug mb-2">"Setting up the employee storefront for our new hires was a game changer."</p>
<p className="text-xs text-white/70">Camila R., Head of People</p>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-[#1A2E22]/5 flex flex-col">
<div className="mb-4">
<h4 className="font-serif text-lg mb-2">Premium Support</h4>
<p className="text-sm text-[#1A2E22]/70">
                        "The dedicated account management makes ordering so easy. Quality is always top-notch, far beyond standard promotional items."
                    </p>
</div>
<div className="mt-auto">
<div className="flex gap-2 mb-4 overflow-hidden">
<img alt="Detail" className="w-16 h-16 rounded-lg object-cover" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="Detail" className="w-16 h-16 rounded-lg object-cover" src="https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-3">
<img alt="User" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div className="text-xs">
<div className="font-bold">Julia M.</div>
<div className="text-[#1A2E22]/50">Office Manager</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="overflow-hidden bg-[#1A2E22] text-[#F3F1EB] pt-32 pb-0 relative">
<div className="max-w-7xl mx-auto px-4 relative z-10">
<div className="grid md:grid-cols-4 gap-12 mb-24">
<div className="md:col-span-1">
<p className="text-xs font-bold uppercase tracking-widest mb-6 text-[#F3F1EB]/40">BrandWear</p>
<p className="text-3xl font-serif mb-6 leading-tight tracking-tight">Apparel that builds culture and scales your brand.</p>
<div className="flex gap-4">
<button className="text-xs font-medium bg-[#F3F1EB] text-[#1A2E22] px-5 py-2.5 rounded-full hover:bg-white transition-colors">Start Project</button>
</div>
</div>
<div className="md:col-span-1">
<p className="text-xs font-bold uppercase tracking-widest mb-6 text-[#F3F1EB]/40">Contact</p>
<a className="block text-lg font-serif mb-2 hover:opacity-70 transition-opacity tracking-tight" href="mailto:hello@brandwear.com">hello@brandwear.com</a>
<p className="text-sm text-[#F3F1EB]/60 mb-6">+1 (800) 555-0199</p>
<p className="text-[10px] text-[#F3F1EB]/40 leading-relaxed">
                        123 Apparel Way<br/>
                        Austin, TX<br/>
                        USA
                    </p>
</div>
<div className="md:col-span-2 flex flex-col md:flex-row justify-end gap-12 md:gap-24 text-sm font-medium">
<div className="flex flex-col gap-4">
<span className="text-xs font-bold uppercase tracking-widest text-[#F3F1EB]/40 mb-2">Explore</span>
<a className="hover:text-[#F3F1EB]/70 transition-colors" href="#">Apparel Catalog</a>
<a className="hover:text-[#F3F1EB]/70 transition-colors" href="#">How It Works</a>
<a className="hover:text-[#F3F1EB]/70 transition-colors" href="#">Company Storefronts</a>
<a className="hover:text-[#F3F1EB]/70 transition-colors" href="#">FAQ</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-bold uppercase tracking-widest text-[#F3F1EB]/40 mb-2">Legal</span>
<a className="hover:text-[#F3F1EB]/70 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-[#F3F1EB]/70 transition-colors" href="#">Terms of Service</a>
<p className="text-[#F3F1EB]/30 text-xs mt-2 w-32">© 2024 BrandWear. All rights reserved. Not a retail store. B2B wholesale only.</p>
</div>
</div>
</div>
</div>

<div className="w-full text-center leading-none overflow-hidden border-t border-[#F3F1EB]/5">
<h1 className="text-[20vw] leading-[0.75] font-serif text-[#F3F1EB]/5 tracking-tighter select-none pointer-events-none -mb-[0.05em] pt-4 parallax-footer-text">
                BRANDWEAR
            </h1>
</div>
</footer>



    </>
  );
}
