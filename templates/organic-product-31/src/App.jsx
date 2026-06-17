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
      

<nav className="sticky top-0 z-50 bg-[#F9F8F4]/90 backdrop-blur-md border-b border-[#E8E4D9]">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">

<button className="md:hidden text-[#4A4A4A]">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
<span className="text-xl font-medium tracking-tight font-serif text-[#2F3E30]">RASARTH</span>
</div>
<div className="hidden md:flex gap-8 text-sm font-normal text-[#4A4A4A]">
<a className="hover:text-[#2F3E30] transition-colors" href="#">Our Origins</a>
<a className="hover:text-[#2F3E30] transition-colors" href="#">Shop Pantry</a>
<a className="hover:text-[#2F3E30] transition-colors" href="#">Recipes</a>
</div>
<div className="flex items-center gap-5">
<svg className="lucide lucide-search w-5 h-5 text-[#4A4A4A] stroke-[1.5]" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<div className="relative">
<svg className="lucide lucide-shopping-bag w-5 h-5 text-[#4A4A4A] stroke-[1.5]" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-[#2F3E30] rounded-full"></span>
</div>
</div>
</div>
</nav>

<main className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-16 lg:pt-12">
<div className="lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16">

<div className="lg:col-span-7 flex flex-col gap-4">

<div className="aspect-[4/3] w-full bg-[#F0EFE9] rounded-lg overflow-hidden relative group">
<img alt="A2 Gir Cow Ghee Jar" className="object-center transition-transform duration-700 ease-out group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1706881811929-9c7454f9eda7?w=1600&amp;q=80"/>
</div>

<div className="grid grid-cols-4 gap-4">
<button className="aspect-square rounded-md overflow-hidden ring-1 ring-[#2F3E30] opacity-100 transition-opacity">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1706881811933-91780526cdc1?w=320&amp;q=80"/>
</button>

<button className="aspect-square rounded-md overflow-hidden opacity-60 hover:opacity-100 transition-opacity">
<img alt="Ghee Texture Close up" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1706881811917-6590b1054050?w=320&amp;q=80"/>
</button>

<button className="aspect-square rounded-md overflow-hidden opacity-60 hover:opacity-100 transition-opacity">
<img alt="Traditional Churning" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1706881811917-6590b1054050?w=320&amp;q=80"/>
</button>

<button className="aspect-square rounded-md overflow-hidden opacity-60 hover:opacity-100 transition-opacity">
<img alt="Indian Kitchen Cooking" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1706881811931-12e3692a20b2?w=320&amp;q=80"/>
</button>
</div>
</div>

<div className="lg:col-span-5 lg:mt-0 mt-8 relative">
<div className="sticky top-24 space-y-8">

<div className="space-y-3 border-b border-[#E8E4D9] pb-6">
<div className="flex items-center gap-2">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#E8E4D9] text-[#5C5C5C]">
                                Best Seller
                            </span>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-[#7D6A58] bg-orange-50/50">
                                Single Origin
                            </span>
</div>
<h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#1A1A1A]">
                            Traditional A2 Gir Cow Ghee
                        </h1>
<p className="text-base text-[#5C5C5C] font-normal leading-relaxed">
                            Hand-churned using the Bilona method for a grainy texture and nutty aroma. Pure, golden nourishment for your family.
                        </p>
<div className="flex items-center gap-2 mt-2">
<div className="flex text-[#D97706]">
<svg className="lucide lucide-star w-4 h-4 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-sm text-[#5C5C5C] hover:underline cursor-pointer">4.9 (1,240 Reviews)</span>
</div>
</div>

<div className="">
<div className="flex items-baseline gap-3">
<span className="text-2xl font-medium text-[#1A1A1A]">₹1,850</span>
<span className="text-base text-[#9CA3AF] line-through font-light">₹2,100</span>
<span className="text-sm text-[#2F3E30] font-medium">Inclusive of all taxes</span>
</div>
</div>

<div className="space-y-3">
<label className="text-sm font-medium text-[#4A4A4A]">Select Size</label>
<div className="grid grid-cols-3 gap-3">
<button className="border border-[#E8E4D9] rounded-lg py-3 px-4 text-sm hover:border-[#2F3E30] transition-colors text-[#5C5C5C]">
                                250ml
                            </button>
<button className="border-2 border-[#2F3E30] bg-[#2F3E30]/5 rounded-lg py-3 px-4 text-sm font-medium text-[#1A1A1A] relative flex justify-center">
                                500ml
                                <span className="absolute -top-2 bg-[#2F3E30] text-white text-[10px] px-1.5 py-0.5 rounded">Most Popular</span>
</button>
<button className="border border-[#E8E4D9] rounded-lg py-3 px-4 text-sm hover:border-[#2F3E30] transition-colors text-[#5C5C5C]">
                                1 Litre
                            </button>
</div>
</div>

<div className="space-y-4 pt-2">
<div className="flex gap-4">

<div className="flex items-center border border-[#E8E4D9] rounded-lg w-32 justify-between px-3 h-12">
<button className="text-[#5C5C5C] hover:text-[#1A1A1A] text-lg">-</button>
<span className="text-base font-medium text-[#1A1A1A]">1</span>
<button className="text-[#5C5C5C] hover:text-[#1A1A1A] text-lg">+</button>
</div>

<button className="flex-1 bg-[#2F3E30] hover:bg-[#243025] text-white font-medium rounded-lg h-12 shadow-sm transition-all duration-300 flex items-center justify-center gap-2 group">
<span>Add to Cart</span>
<svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="flex items-center justify-center gap-4 text-xs text-[#5C5C5C] pt-2">
<span className="flex items-center gap-1.5">
<svg className="lucide lucide-check-circle w-3.5 h-3.5 text-[#2F3E30]" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                                Lab Tested
                            </span>
<span className="w-1 h-1 rounded-full bg-[#E8E4D9]"></span>
<span className="flex items-center gap-1.5">
<svg className="lucide lucide-leaf w-3.5 h-3.5 text-[#2F3E30]" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
                                No Preservatives
                            </span>
<span className="w-1 h-1 rounded-full bg-[#E8E4D9]"></span>
<span className="flex items-center gap-1.5">
<svg className="lucide lucide-truck w-3.5 h-3.5 text-[#2F3E30]" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
                                Farm to Jar
                            </span>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="bg-[#EFECE6] py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
<div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
<div className="w-12 h-12 rounded-full bg-[#E4DFCFA] flex items-center justify-center shrink-0 border border-[#D6CEC0]">
<svg className="lucide lucide-heart w-6 h-6 text-[#7D6A58] stroke-[1.25]" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
<div>
<h3 className="font-serif text-lg font-medium text-[#2F3E30] mb-1">Heart Healthy Fats</h3>
<p className="text-sm text-[#5C5C5C] leading-relaxed">Rich in Omega-3s and butyric acid, supporting gut health and easier digestion compared to regular butter.</p>
</div>
</div>
<div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
<div className="w-12 h-12 rounded-full bg-[#E4DFCFA] flex items-center justify-center shrink-0 border border-[#D6CEC0]">
<svg className="lucide lucide-sprout w-6 h-6 text-[#7D6A58] stroke-[1.25]" data-lucide="sprout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"></path><path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"></path><path d="M5 21h14"></path></svg>
</div>
<div>
<h3 className="font-serif text-lg font-medium text-[#2F3E30] mb-1">Traditional Bilona Method</h3>
<p className="text-sm text-[#5C5C5C] leading-relaxed">Curd is churned two ways (clockwise &amp; anti-clockwise) to extract butter, then slow-heated.</p>
</div>
</div>
<div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
<div className="w-12 h-12 rounded-full bg-[#E4DFCFA] flex items-center justify-center shrink-0 border border-[#D6CEC0]">
<svg className="lucide lucide-award w-6 h-6 text-[#7D6A58] stroke-[1.25]" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<div>
<h3 className="font-serif text-lg font-medium text-[#2F3E30] mb-1">Authentic A2 Milk</h3>
<p className="text-sm text-[#5C5C5C] leading-relaxed">Sourced strictly from free-grazing Gir cows, ensuring pure A2 protein free from hormones.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#F9F8F4]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-x-12 gap-y-12 items-center">
<div className="order-2 md:order-1 relative rounded-lg overflow-hidden">
<img alt="Traditional Village Process" className="grayscale-[10%] hover:grayscale-0 transition-all duration-700 w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1706881811935-9ffbcd5a1049?w=1600&amp;q=80"/>
<div className="bg-gradient-to-t from-black/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6 text-white/90 text-sm font-medium">
<svg className="lucide lucide-map-pin inline w-4 h-4 mr-1" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Sourced from Gujarat, India
                    </div>
</div>
<div className="order-1 md:order-2 space-y-6">
<h2 className="text-3xl font-serif text-[#2F3E30] tracking-tight">Slow churned. <br/>Never rushed.</h2>
<p className="text-[#5C5C5C] leading-relaxed">
                        In an era of machine-processed oils, we take a step back. Our process begins before dawn. The milk from free-grazing Gir cows is boiled and set to curd in earthen pots. 
                    </p>
<p className="text-[#5C5C5C] leading-relaxed">
                        The curd is then hand-churned using the wooden Bilona, separating the makhan (butter). This butter is slowly heated over a low flame to evaporate the water, leaving behind pure, golden danedar ghee.
                    </p>
<div className="pt-4">
<a className="inline-flex items-center text-[#7D6A58] font-medium border-b border-[#7D6A58]/30 pb-0.5 hover:text-[#2F3E30] hover:border-[#2F3E30] transition-all" href="#">
                            Read the full story <svg className="lucide lucide-arrow-right w-4 h-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="border-[#E8E4D9] border-t pt-16 pb-16">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-serif text-[#1A1A1A] text-center mb-10 tracking-tight">Transparency in every spoon</h2>
<div className="bg-white rounded-xl border border-[#E8E4D9] divide-y divide-[#E8E4D9]">

<div className="p-5 flex items-center justify-between cursor-pointer hover:bg-stone-50 transition-colors group">
<div>
<span className="block text-sm font-medium text-[#1A1A1A]">Ingredients</span>
<span className="block text-sm text-[#5C5C5C] mt-1">100% Clarified Butter from A2 Cow Milk</span>
</div>
<svg className="lucide lucide-plus w-5 h-5 text-[#9CA3AF] group-hover:text-[#1A1A1A]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>

<div className="p-5 flex items-center justify-between cursor-pointer hover:bg-stone-50 transition-colors group">
<div className="">
<span className="block text-sm font-medium text-[#1A1A1A]">Nutrition Facts (Per 100g)</span>
<span className="block text-sm text-[#5C5C5C] mt-1">Energy: 898 Kcal • Fat: 99.8g • Protein: 0g</span>
</div>
<svg className="lucide lucide-plus w-5 h-5 text-[#9CA3AF] group-hover:text-[#1A1A1A]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>

<div className="p-5 flex items-center justify-between cursor-pointer hover:bg-stone-50 transition-colors group">
<div className="">
<span className="block text-sm font-medium text-[#1A1A1A]">Storage Instructions</span>
<span className="block text-sm text-[#5C5C5C] mt-1">Store in a cool, dry place. Use a dry spoon.</span>
</div>
<svg className="lucide lucide-plus w-5 h-5 text-[#9CA3AF] group-hover:text-[#1A1A1A]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#F5F4EF]">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between mb-10">
<h2 className="text-2xl font-serif text-[#1A1A1A] tracking-tight">Stories from Indian Kitchens</h2>
<a className="text-sm font-medium text-[#5C5C5C] hover:text-[#1A1A1A]" href="#">View all reviews</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-lg border border-[#E8E4D9] shadow-sm">
<div className="flex text-[#D97706] mb-3">
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-[#4A4A4A] text-sm leading-relaxed mb-4">
                        "Reminds me of my grandmother's ghee. The aroma when I put it on hot rotis is unmistakable. Finally found something authentic."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#E8E4D9] flex items-center justify-center text-xs font-medium text-[#7D6A58]">RK</div>
<div>
<p className="text-xs font-medium text-[#1A1A1A]">Rajesh K.</p>
<p className="text-[10px] text-[#9CA3AF]">Verified Buyer • Mumbai</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-lg border border-[#E8E4D9] shadow-sm">
<div className="flex text-[#D97706] mb-3">
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-[#4A4A4A] text-sm leading-relaxed mb-4">
                        "I use it for my baby's dal khichdi. The texture is grainy (danedar) just like homemade ghee. Highly recommend for health conscious families."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#E8E4D9] flex items-center justify-center text-xs font-medium text-[#7D6A58]">SM</div>
<div>
<p className="text-xs font-medium text-[#1A1A1A]">Sneha M.</p>
<p className="text-[10px] text-[#9CA3AF]">Verified Buyer • Bangalore</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-lg border border-[#E8E4D9] shadow-sm">
<div className="flex text-[#D97706] mb-3">
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current stroke-none" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-[#4A4A4A] text-sm leading-relaxed mb-4">
                        "The packaging was excellent, zero leakage. The taste is subtle and not overpowering. Will definitely subscribe."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#E8E4D9] flex items-center justify-center text-xs font-medium text-[#7D6A58]">AD</div>
<div>
<p className="text-xs font-medium text-[#1A1A1A]">Amit D.</p>
<p className="text-[10px] text-[#9CA3AF]">Verified Buyer • Delhi</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#2F3E30] text-[#E8E4D9] py-16">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm font-light">
<div className="space-y-4">
<span className="text-xl font-serif font-medium tracking-tight text-white">RASARTH</span>
<p className="opacity-80 leading-relaxed max-w-xs">
                    Bringing the wisdom of traditional Indian food processing back to your modern kitchen. Honest, organic, and earth-friendly.
                </p>
</div>
<div>
<h4 className="font-medium text-white mb-4">Shop</h4>
<ul className="space-y-2 opacity-80">
<li><a className="hover:text-white hover:underline decoration-1 underline-offset-4" href="#">Ghee &amp; Oils</a></li>
<li><a className="hover:text-white hover:underline decoration-1 underline-offset-4" href="#">Spices &amp; Masalas</a></li>
<li><a className="hover:text-white hover:underline decoration-1 underline-offset-4" href="#">Dry Fruits</a></li>
<li><a className="hover:text-white hover:underline decoration-1 underline-offset-4" href="#">Gift Boxes</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-white mb-4">Company</h4>
<ul className="space-y-2 opacity-80">
<li><a className="hover:text-white hover:underline decoration-1 underline-offset-4" href="#">Our Story</a></li>
<li><a className="hover:text-white hover:underline decoration-1 underline-offset-4" href="#">Sustainability</a></li>
<li><a className="hover:text-white hover:underline decoration-1 underline-offset-4" href="#">Contact Us</a></li>
<li><a className="hover:text-white hover:underline decoration-1 underline-offset-4" href="#">Lab Reports</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-white mb-4">Stay Connected</h4>
<div className="flex items-center border-b border-white/20 pb-2 mb-4">
<input className="bg-transparent border-none text-white placeholder-white/40 focus:ring-0 w-full p-0 text-sm" placeholder="Your email address" type="email"/>
<button className="text-white hover:opacity-80">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="flex gap-4 opacity-80">
<svg className="lucide lucide-instagram w-5 h-5 cursor-pointer hover:text-white" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<svg className="lucide lucide-facebook w-5 h-5 cursor-pointer hover:text-white" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
<svg className="lucide lucide-twitter w-5 h-5 cursor-pointer hover:text-white" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
<p>© 2024 Rasarth Organics. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a href="#">Privacy Policy</a>
<a href="#">Terms of Service</a>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 w-full bg-white border-t border-[#E8E4D9] p-4 lg:hidden z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
<div className="flex gap-4 items-center">
<div className="flex-1">
<p className="text-xs text-[#5C5C5C]">A2 Gir Cow Ghee</p>
<p className="font-medium text-[#1A1A1A]">₹1,850</p>
</div>
<button className="bg-[#2F3E30] text-white px-8 py-3 rounded-lg font-medium text-sm w-auto shadow-sm">
                Add to Cart
            </button>
</div>
</div>


    </>
  );
}
