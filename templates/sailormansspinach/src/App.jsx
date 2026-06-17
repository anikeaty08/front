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
      

<nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8">
<div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl md:rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300">

<a className="flex-shrink-0 group relative overflow-hidden" href="#">
<img alt="Logo" className="h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-105" src="https://static.wixstatic.com/media/c5c800_fdc26635e04b46c1940a4346d04c6deb~mv2.png/v1/fill/w_406,h_157,al_c,q_85/Screenshot%202025-07-18%20162953_edited.png"/>
</a>

<div className="hidden md:flex items-center gap-1 bg-[#2F2E2E]/5 rounded-full p-1">
<a className="px-5 py-2 rounded-full text-xs font-heading font-bold bg-white shadow-sm text-[#2F2E2E] transition-all" href="#">HOME</a>
<a className="px-5 py-2 rounded-full text-xs font-heading font-bold text-gray-500 hover:text-[#2F2E2E] hover:bg-white/50 transition-all" href="#">ABOUT</a>
<a className="px-5 py-2 rounded-full text-xs font-heading font-bold text-gray-500 hover:text-[#2F2E2E] hover:bg-white/50 transition-all" href="#">ORDER</a>
<a className="px-5 py-2 rounded-full text-xs font-heading font-bold text-gray-500 hover:text-[#2F2E2E] hover:bg-white/50 transition-all" href="#">STORY</a>
</div>

<div className="flex items-center gap-3">
<button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors group">
<span className="iconify text-gray-600 group-hover:text-black transition-colors" data-icon="lucide:user" data-width="18"></span>
<span className="text-xs font-bold uppercase tracking-wide">Login</span>
</button>
<a className="bg-[#2F2E2E] text-white px-6 py-2.5 rounded-full font-heading font-bold text-xs tracking-wider hover:bg-[#F9DB79] hover:text-[#2F2E2E] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#2F2E2E]/10" href="#">
                    ORDER NOW
                </a>
</div>
</div>
</nav>
<main className="pt-24 md:pt-32">

<section className="relative max-w-[95%] mx-auto rounded-[2.5rem] bg-[#FDF1EC] overflow-hidden min-h-[85vh] flex items-center">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F9DB79]/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/60 rounded-full blur-[80px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

<div className="md:col-span-7 flex flex-col justify-center text-center md:text-left space-y-8">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#2F2E2E]/10 self-center md:self-start mb-2">
<span className="w-2 h-2 rounded-full bg-[#F9DB79]"></span>
<span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">100% Natural Ingredients</span>
</div>
<h1 className="font-heading font-black text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.9] tracking-tighter text-[#2F2E2E]">
                        STRENGTH <br/>
<span className="relative inline-block">
                            MADE
                            <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#F9DB79]" preserveaspectratio="none" viewbox="0 0 100 10"><path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path></svg>
</span> <br/>
                        SIMPLE.
                    </h1>
<p className="font-hand text-2xl md:text-3xl text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed rotate-1">
                        "Whole-food smoothies crafted at dawn. <span className="bg-[#F9DB79]/30 px-1">Zero additives</span>. Just pure power."
                    </p>
<div className="flex flex-col md:flex-row gap-4 pt-6 items-center md:items-start">
<button className="group relative px-8 py-4 bg-[#2F2E2E] text-white rounded-full overflow-hidden shadow-2xl transition-all hover:scale-105 active:scale-95">
<span className="relative z-10 font-heading font-bold text-sm tracking-widest flex items-center gap-2">
                                SHOP BATCH #24 
                                <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right"></span>
</span>
<div className="absolute inset-0 bg-[#F9DB79] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<span className="font-heading font-bold text-sm tracking-widest text-[#2F2E2E] flex items-center gap-2">
                                    LET'S GO <span className="iconify" data-icon="lucide:arrow-right"></span>
</span>
</div>
</button>
<span className="text-xs font-bold text-gray-400 tracking-wide uppercase mt-2 md:mt-0 md:ml-4">
                            Ships Fresh Daily <br/> California, USA
                        </span>
</div>
</div>

<div className="md:col-span-5 relative h-[500px] flex items-center justify-center">

<div className="absolute w-[400px] h-[400px] border border-[#2F2E2E]/10 rounded-full animate-[spin_20s_linear_infinite] opacity-50">
<svg className="w-full h-full overflow-visible" viewbox="0 0 100 100">
<path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" id="circlePath"></path>
<text className="text-[5px] font-bold uppercase tracking-[2px] fill-[#2F2E2E]">
<textpath href="#circlePath" startoffset="0%">• Premium Nutrition • Fresh Pressed • No Additives</textpath>
</text>
</svg>
</div>
<img alt="Smoothie Bottle" className="relative z-10 w-full max-w-sm drop-shadow-2xl transform hover:-translate-y-4 transition-transform duration-700 ease-out" src="https://static.wixstatic.com/media/c5c800_50226895d21744449cf5b8efb3fd1d24~mv2.png/v1/fill/w_545,h_444,al_c,q_85/Screenshot%202025-07-16%20165732-Picsart-AiImageEnhancer.png"/>

<div className="absolute top-10 right-0 md:-right-10 bg-white p-4 rounded-xl shadow-xl z-20 rotate-6 hover:rotate-0 transition-transform duration-300">
<div className="flex items-center gap-2">
<span className="text-3xl">🌿</span>
<div>
<p className="text-[10px] text-gray-400 font-bold uppercase">Protein</p>
<p className="text-lg font-heading font-black">24g</p>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="py-10 border-b border-gray-100 overflow-hidden bg-white">
<div className="flex items-center gap-16 whitespace-nowrap animate-marquee">

<span className="text-4xl md:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#2F2E2E] to-gray-400 opacity-20">NO GUMS</span>
<span className="text-4xl md:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#2F2E2E] to-gray-400 opacity-20">NO FILLERS</span>
<span className="text-4xl md:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#2F2E2E] to-gray-400 opacity-20">COLD PRESSED</span>
<span className="text-4xl md:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#2F2E2E] to-gray-400 opacity-20">LAB TESTED</span>
<span className="text-4xl md:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#2F2E2E] to-gray-400 opacity-20">DAIRY FREE</span>

<span className="text-4xl md:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#2F2E2E] to-gray-400 opacity-20">NO GUMS</span>
<span className="text-4xl md:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#2F2E2E] to-gray-400 opacity-20">NO FILLERS</span>
<span className="text-4xl md:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#2F2E2E] to-gray-400 opacity-20">COLD PRESSED</span>
<span className="text-4xl md:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#2F2E2E] to-gray-400 opacity-20">LAB TESTED</span>
<span className="text-4xl md:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#2F2E2E] to-gray-400 opacity-20">DAIRY FREE</span>
</div>
</div>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="font-heading font-black text-5xl md:text-6xl text-[#2F2E2E] tracking-tighter mb-4">
                        NOT ENGINEERED.<br/>CRAFTED.
                    </h2>
<p className="font-hand text-2xl text-gray-500">The difference is in the details.</p>
</div>
<a className="group flex items-center gap-2 border-b border-[#2F2E2E] pb-1 hover:text-[#F9DB79] hover:border-[#F9DB79] transition-colors" href="#">
<span className="text-sm font-bold uppercase tracking-widest">Read our manifesto</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-up-right"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-[#F5F5F5] rounded-[2rem] p-10 md:p-14 relative overflow-hidden group hover:shadow-2xl hover:shadow-black/5 transition-all duration-500">
<div className="relative z-10 max-w-sm">
<div className="w-12 h-12 bg-[#F9DB79] rounded-full flex items-center justify-center mb-6 text-[#2F2E2E]">
<span className="iconify" data-icon="lucide:sprout" data-width="24"></span>
</div>
<h3 className="font-heading font-extrabold text-3xl mb-4 tracking-tight">Whole Fiber, Real Produce</h3>
<p className="text-gray-600 leading-relaxed text-lg">Whole fruits. Blanched vegetables. We retain the fiber most juices throw away. It's not just juice, it's food.</p>
</div>
<img alt="Bottle" className="absolute -bottom-20 -right-10 h-80 object-contain rotate-12 opacity-40 group-hover:opacity-100 group-hover:rotate-6 group-hover:-translate-y-4 transition-all duration-700 grayscale group-hover:grayscale-0" src="https://static.wixstatic.com/media/c5c800_d33d2b8c92904bcfb07f225ba3ef6059~mv2.png/v1/fill/w_185,h_434,al_c,q_85/Bottle%20image_edited_edited.png"/>
</div>

<div className="md:row-span-2 bg-[#2F2E2E] text-white rounded-[2rem] p-10 flex flex-col justify-between relative overflow-hidden group">
<div className="relative z-10">
<div className="w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center mb-6 text-white border border-white/20">
<span className="iconify" data-icon="lucide:thermometer-snowflake" data-width="24"></span>
</div>
<h3 className="font-heading font-extrabold text-3xl mb-4 tracking-tight">Cold-Pressed Base</h3>
<p className="text-gray-400 leading-relaxed">No heat. No pasteurization damage. We blend with cold-pressed juice to keep vitamins alive.</p>
</div>
<div className="mt-8 border-t border-white/10 pt-8">
<div className="flex items-center gap-4">
<div className="text-center">
<span className="block text-2xl font-bold text-[#F9DB79]">3°C</span>
<span className="text-[10px] uppercase tracking-widest text-gray-500">Temp</span>
</div>
<div className="h-8 w-px bg-white/10"></div>
<div className="text-center">
<span className="block text-2xl font-bold text-[#F9DB79]">100%</span>
<span className="text-[10px] uppercase tracking-widest text-gray-500">Nutrients</span>
</div>
</div>
</div>

<div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%221%22/%3E%3C/svg%3E\')'}}></div>
</div>

<div className="bg-white border border-gray-100 shadow-xl shadow-gray-100/50 rounded-[2rem] p-10 hover:border-[#F9DB79] transition-colors duration-300 group">
<div className="w-12 h-12 bg-[#FDF1EC] rounded-full flex items-center justify-center mb-6 text-[#2F2E2E] group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:chef-hat" data-width="24"></span>
</div>
<h3 className="font-heading font-extrabold text-2xl mb-3 tracking-tight">Hand-Churned</h3>
<p className="text-gray-600 text-sm leading-relaxed">No industrial mixers. Just slow, steady mixing like a baker folds batter.</p>
</div>

<div className="bg-white border border-gray-100 shadow-xl shadow-gray-100/50 rounded-[2rem] p-10 hover:border-[#F9DB79] transition-colors duration-300 group">
<div className="w-12 h-12 bg-[#FDF1EC] rounded-full flex items-center justify-center mb-6 text-[#2F2E2E] group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:recycle" data-width="24"></span>
</div>
<h3 className="font-heading font-extrabold text-2xl mb-3 tracking-tight">Zero Waste</h3>
<p className="text-gray-600 text-sm leading-relaxed">We bottle in reusable glass. Drink it. Return it. Repeat.</p>
</div>
</div>
</section>

<section className="w-full py-12">
<div className="max-w-7xl mx-auto px-6">
<div className="relative w-full rounded-[3rem] overflow-hidden bg-[#EAEAEA] aspect-[16/9] md:aspect-[21/9] group cursor-pointer shadow-2xl">

<img alt="Bottle" className="absolute -right-10 top-1/2 -translate-y-1/2 h-[120%] object-contain z-10 opacity-90 transition-transform duration-1000 group-hover:translate-x-4 group-hover:rotate-6" src="https://static.wixstatic.com/media/c5c800_adbcb8d5f1964fdcb0914ce0f67df167~mv2.png/v1/fill/w_312,h_1030,al_c,q_85/Bottle%20image_edited_edited_edited_edited.png"/>

<img alt="Video Background" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://static.wixstatic.com/media/c5c800_c9f9cacf720140e4b80d2f3c1b546be2f000.jpg/v1/fill/w_1920,h_1080,al_c,q_85/c5c800_c9f9cacf720140e4b80d2f3c1b546be2f000.jpg"/>

<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>

<div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20">
<div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 mb-8 group-hover:scale-110 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
<span className="iconify text-white ml-1" data-icon="lucide:play" data-width="32" style={{fill: 'white'}}></span>
</div>
<h2 className="font-heading font-black text-4xl md:text-6xl text-white tracking-tighter mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">THE PROCESS</h2>
<p className="font-hand text-2xl text-white/90 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">See how we blend strength.</p>
</div>

<img alt="Sticker" className="absolute bottom-10 left-10 w-32 md:w-48 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500 z-30 drop-shadow-lg" src="https://static.wixstatic.com/media/c5c800_9327ba12344d46ec9961a72f02745a10~mv2.png/v1/fill/w_276,h_348,al_c,q_85/Screenshot%202025-07-16%20173418_edited_edit.png"/>
</div>

<div className="flex justify-center -mt-8 relative z-30">
<img alt="Running Sailorman" className="h-10 md:h-14 opacity-90 mix-blend-multiply" src="https://static.wixstatic.com/media/c5c800_34eb452dfb784fd59c51b5ddf84839ae~mv2.png/v1/fill/w_482,h_60,al_c,lg_1,q_85/Running%20sailorman_edited_edited_edited_edited_edited_edited_edited_edited.png"/>
</div>
</div>
</section>

<section className="bg-[#2F2E2E] text-white py-16 mt-12 overflow-hidden relative">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-60 hover:opacity-100 transition-opacity duration-500">
<div className="flex flex-col items-center gap-4 group">
<img alt="Icon" className="h-12 object-contain brightness-0 invert group-hover:scale-110 transition-transform" src="https://static.wixstatic.com/media/c5c800_fa35e9f68ec34c308b88c85237f2675f~mv2.png/v1/fill/w_104,h_63,al_c,q_85/Screenshot%202025-07-17%20112428_edited.png"/>
<span className="text-xs font-bold tracking-widest uppercase">Certified Organic</span>
</div>
<div className="w-px h-12 bg-white/20 hidden md:block"></div>
<div className="flex flex-col items-center gap-4 group">
<img alt="Icon" className="h-12 object-contain brightness-0 invert group-hover:scale-110 transition-transform" src="https://static.wixstatic.com/media/c5c800_7581c74466794778b935231f3a17b076~mv2.png/v1/fill/w_109,h_63,al_c,q_85/Screenshot%202025-07-17%20112428_edited_edited.png"/>
<span className="text-xs font-bold tracking-widest uppercase">Keto Friendly</span>
</div>
<div className="w-px h-12 bg-white/20 hidden md:block"></div>
<div className="flex flex-col items-center gap-4 group">
<img alt="Icon" className="h-12 object-contain brightness-0 invert group-hover:scale-110 transition-transform" src="https://static.wixstatic.com/media/c5c800_fa35e9f68ec34c308b88c85237f2675f~mv2.png/v1/fill/w_109,h_63,al_c,q_85/Screenshot%202025-07-17%20112428_edited.png"/>
<span className="text-xs font-bold tracking-widest uppercase">Gluten Free</span>
</div>
<div className="w-px h-12 bg-white/20 hidden md:block"></div>
<div className="flex flex-col items-center gap-4 group">
<img alt="Icon" className="h-12 object-contain brightness-0 invert group-hover:scale-110 transition-transform" src="https://static.wixstatic.com/media/c5c800_7581c74466794778b935231f3a17b076~mv2.png/v1/fill/w_109,h_63,al_c,q_85/Screenshot%202025-07-17%20112428_edited_edited.png"/>
<span className="text-xs font-bold tracking-widest uppercase">Non-GMO</span>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-12 rounded-t-[3rem] -mt-8 relative z-10 border-t border-gray-100 shadow-[0_-20px_60px_rgba(0,0,0,0.05)]">
<div className="max-w-5xl mx-auto px-6 text-center">

<div className="mb-20">
<h2 className="font-heading font-black text-4xl md:text-5xl tracking-tight mb-8 text-[#2F2E2E]">
                        EMBARK ON THE JOURNEY.
                    </h2>
<a className="inline-flex items-center gap-3 bg-[#2F2E2E] text-white px-10 py-5 rounded-full font-heading font-bold tracking-widest hover:bg-[#F9DB79] hover:text-[#2F2E2E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1" href="#">
                        READ OUR STORY
                        <span className="iconify" data-icon="lucide:book-open"></span>
</a>
</div>

<div className="bg-[#FDF1EC] p-3 rounded-[2rem] max-w-lg mx-auto shadow-inner mb-20">
<form className="flex flex-col md:flex-row gap-2 bg-white rounded-[1.5rem] p-2 shadow-sm border border-gray-100">
<input className="flex-1 bg-transparent px-6 py-4 outline-none text-gray-800 placeholder-gray-400 font-medium" placeholder="enter your email address" type="email"/>
<button className="bg-[#2F2E2E] text-white px-8 py-3 rounded-[1.2rem] font-heading font-bold uppercase tracking-widest hover:bg-[#F9DB79] hover:text-[#2F2E2E] transition-colors" type="submit">
                            Join
                        </button>
</form>
<div className="mt-3 flex items-center justify-center gap-2">
<input className="accent-[#2F2E2E] rounded border-gray-300" id="sub" type="checkbox"/>
<label className="text-xs text-gray-500 font-medium" htmlFor="sub">Subscribe to newsletter</label>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left border-t border-gray-100 pt-12">
<div className="md:col-span-1">
<img alt="Logo" className="h-12 w-auto object-contain mb-4 grayscale opacity-50 hover:opacity-100 transition-opacity" src="https://static.wixstatic.com/media/c5c800_fdc26635e04b46c1940a4346d04c6deb~mv2.png/v1/fill/w_406,h_157,al_c,q_85/Screenshot%202025-07-18%20162953_edited.png"/>
<p className="text-xs text-gray-400 leading-relaxed">© 2025 Sailorman's Spinach.<br/>All rights reserved.</p>
</div>
<div className="space-y-4">
<h4 className="font-heading font-bold text-xs tracking-widest text-[#2F2E2E]">VISIT US</h4>
<p className="font-sans text-sm text-gray-500 hover:text-[#2F2E2E] transition-colors cursor-pointer">
                            500 Terry Francine St.<br/>San Francisco, CA 94158
                        </p>
</div>
<div className="space-y-4">
<h4 className="font-heading font-bold text-xs tracking-widest text-[#2F2E2E]">CONTACT</h4>
<a className="font-sans text-sm text-gray-500 hover:text-[#F9DB79] transition-colors block" href="mailto:info@mysite.com">info@mysite.com</a>
<p className="font-sans text-sm text-gray-500">123-456-7890</p>
</div>
<div className="flex items-start justify-start md:justify-end gap-4">
<a className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#2F2E2E] hover:text-white transition-all" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="18"></span></a>
<a className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#2F2E2E] hover:text-white transition-all" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="18"></span></a>
<a className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#2F2E2E] hover:text-white transition-all" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="18"></span></a>
</div>
</div>
</div>
</footer>
</main>

    </>
  );
}
