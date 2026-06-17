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
      

<section className="relative bg-gradient-to-b from-[#4a3423] to-[#2d1e13] text-stone-100 overflow-hidden">

<nav className="absolute top-0 w-full z-20">
<div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
<div className="flex items-center gap-2">
<i className="w-6 h-6 text-amber-500" data-lucide="coffee" strokeWidth="1.5"></i>
<span className="text-lg font-semibold tracking-tight uppercase">Therma Brew</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-amber-400 transition-colors" href="#">Home</a>
<a className="hover:text-amber-400 transition-colors" href="#">About</a>
<a className="hover:text-amber-400 transition-colors" href="#">Shop</a>
<a className="hover:text-amber-400 transition-colors" href="#">Contact</a>
</div>
<div className="flex items-center gap-4">
<button className="hover:text-amber-400 transition-colors"><i className="w-5 h-5" data-lucide="search" strokeWidth="1.5"></i></button>
<button className="hover:text-amber-400 transition-colors"><i className="w-5 h-5" data-lucide="user" strokeWidth="1.5"></i></button>
<button className="hover:text-amber-400 transition-colors"><i className="w-5 h-5" data-lucide="shopping-bag" strokeWidth="1.5"></i></button>
</div>
</div>
</nav>

<div className="absolute top-1/4 left-0 w-full text-center pointer-events-none z-0">
<h1 className="text-[12vw] font-semibold text-stone-100/10 tracking-tighter leading-none select-none">TEMPERATURE</h1>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32 flex flex-col md:flex-row items-center gap-12">
<div className="w-full md:w-1/2 flex flex-col items-start z-10">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight mb-6 text-white uppercase">
                    Display<br/>Coffee<br/>Mug
                </h2>
<p className="text-lg text-stone-300 mb-10 max-w-md">
                    Stay in control of every sip with our Temperature Display Coffee Mug, designed to keep your drink warm.
                </p>
<button className="bg-white text-[#4a3423] hover:bg-stone-100 transition-colors px-8 py-3.5 rounded-full font-medium text-base shadow-sm">
                    Shop Now
                </button>
</div>
<div className="w-full md:w-1/2 relative h-[400px] md:h-[600px] flex justify-center items-center">

<div className="absolute w-64 h-96 bg-gradient-to-tr from-stone-800 to-stone-700 rounded-[2rem] shadow-2xl transform -rotate-12 translate-x-12 z-10 border border-stone-600/50"></div>
<div className="absolute w-56 h-80 bg-gradient-to-b from-[#b47b4d] to-[#8c5a31] rounded-[2rem] shadow-xl transform rotate-6 -translate-x-12 z-0 border border-amber-900/50"></div>
</div>
</div>
</section>

<div className="bg-stone-950 text-stone-200 py-3 overflow-hidden border-y border-stone-800">
<div className="flex items-center whitespace-nowrap animate-marquee gap-8 px-4 w-max">
<span className="text-sm font-medium tracking-widest uppercase">Display Coffee Mug</span>
<i className="w-4 h-4 text-amber-600" data-lucide="sparkle" strokeWidth="1.5"></i>
<span className="text-sm font-medium tracking-widest uppercase">Smart Tea Infuser</span>
<i className="w-4 h-4 text-amber-600" data-lucide="sparkle" strokeWidth="1.5"></i>
<span className="text-sm font-medium tracking-widest uppercase">Tumbler 40oz</span>
<i className="w-4 h-4 text-amber-600" data-lucide="sparkle" strokeWidth="1.5"></i>
<span className="text-sm font-medium tracking-widest uppercase">Cup Warmer</span>
<i className="w-4 h-4 text-amber-600" data-lucide="sparkle" strokeWidth="1.5"></i>
<span className="text-sm font-medium tracking-widest uppercase">Display Coffee Mug</span>
<i className="w-4 h-4 text-amber-600" data-lucide="sparkle" strokeWidth="1.5"></i>
<span className="text-sm font-medium tracking-widest uppercase">Smart Tea Infuser</span>
</div>
</div>

<section className="max-w-7xl mx-auto px-6 py-20 border-b border-stone-200">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-[#f4ece4] text-[#8c5a31] flex items-center justify-center mb-6">
<i className="w-7 h-7" data-lucide="truck" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-stone-900 mb-2">Free And Fast Delivery</h3>
<p className="text-lg text-stone-500">Free delivery for all orders over $50</p>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-[#f4ece4] text-[#8c5a31] flex items-center justify-center mb-6">
<i className="w-7 h-7" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-stone-900 mb-2">24/7 Customer Service</h3>
<p className="text-lg text-stone-500">Friendly 24/7 customer support</p>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-[#f4ece4] text-[#8c5a31] flex items-center justify-center mb-6">
<i className="w-7 h-7" data-lucide="headphones" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-stone-900 mb-2">Money Back Guarantee</h3>
<p className="text-lg text-stone-500">We return money within 30 days</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<h2 className="text-4xl font-semibold tracking-tight text-center text-stone-900 mb-24 uppercase">Our Products</h2>
<div className="flex flex-col gap-32">

<div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
<div className="w-full md:w-1/2 flex flex-col items-start">
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-stone-900 mb-6 uppercase leading-tight">
                        Temperature<br/>Display<br/>Coffee Mug
                    </h3>
<p className="text-lg text-stone-600 mb-10 leading-relaxed">
                        Enjoy coffee at the perfect temperature with our Temperature Display Mug, showing you the warmth of every sip. Never too hot, never too cold—just right every time.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="inline-flex items-center justify-between gap-4 bg-[#a46d3e] hover:bg-[#8c5a31] transition-colors text-white rounded-full py-2.5 pl-6 pr-2.5 font-medium shadow-sm">
                            Shop Now
                            <span className="bg-white text-[#a46d3e] rounded-full p-1.5"><i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i></span>
</button>
<button className="inline-flex items-center justify-between gap-4 border border-stone-300 hover:border-stone-400 bg-transparent text-stone-800 transition-colors rounded-full py-2.5 pl-6 pr-2.5 font-medium">
                            Learn More
                            <span className="bg-[#a46d3e] text-white rounded-full p-1.5"><i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i></span>
</button>
</div>
</div>
<div className="w-full md:w-1/2 aspect-[4/3] md:aspect-square bg-[#c3905c] rounded-[2rem] overflow-hidden relative shadow-inner">
<img alt="Coffee Mug" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-80" src="https://images.unsplash.com/photo-1618365908648-e71bd5716cba?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-16 lg:gap-24">
<div className="w-full md:w-1/2 flex flex-col items-start">
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-stone-900 mb-6 uppercase leading-tight">
                        Smart<br/>Tea Infuser
                    </h3>
<p className="text-lg text-stone-600 mb-10 leading-relaxed">
                        Brew your tea perfectly with our Smart Tea Infuser, designed for precise flavor control. Enjoy every cup just the way you like it.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="inline-flex items-center justify-between gap-4 bg-[#a46d3e] hover:bg-[#8c5a31] transition-colors text-white rounded-full py-2.5 pl-6 pr-2.5 font-medium shadow-sm">
                            Shop Now
                            <span className="bg-white text-[#a46d3e] rounded-full p-1.5"><i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i></span>
</button>
<button className="inline-flex items-center justify-between gap-4 border border-stone-300 hover:border-stone-400 bg-transparent text-stone-800 transition-colors rounded-full py-2.5 pl-6 pr-2.5 font-medium">
                            Learn More
                            <span className="bg-[#a46d3e] text-white rounded-full p-1.5"><i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i></span>
</button>
</div>
</div>
<div className="w-full md:w-1/2 aspect-[4/3] md:aspect-square bg-[#d9a06b] rounded-[2rem] overflow-hidden relative shadow-inner">
<img alt="Tea Infuser" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-70" src="https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
<div className="w-full md:w-1/2 flex flex-col items-start">
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-stone-900 mb-6 uppercase leading-tight">
                        Tumbler 40oz<br/>Coffee Mug
                    </h3>
<p className="text-lg text-stone-600 mb-10 leading-relaxed">
                        Stay caffeinated all day long! Our 40oz Insulated Tumbler is the ultimate companion for your coffee cravings.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="inline-flex items-center justify-between gap-4 bg-[#a46d3e] hover:bg-[#8c5a31] transition-colors text-white rounded-full py-2.5 pl-6 pr-2.5 font-medium shadow-sm">
                            Shop Now
                            <span className="bg-white text-[#a46d3e] rounded-full p-1.5"><i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i></span>
</button>
<button className="inline-flex items-center justify-between gap-4 border border-stone-300 hover:border-stone-400 bg-transparent text-stone-800 transition-colors rounded-full py-2.5 pl-6 pr-2.5 font-medium">
                            Learn More
                            <span className="bg-[#a46d3e] text-white rounded-full p-1.5"><i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i></span>
</button>
</div>
</div>
<div className="w-full md:w-1/2 aspect-[4/3] md:aspect-square bg-[#9d6635] rounded-[2rem] overflow-hidden relative shadow-inner">
<img alt="Tumbler" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60" src="https://images.unsplash.com/photo-1574341996561-9f20109db8c5?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-16 lg:gap-24">
<div className="w-full md:w-1/2 flex flex-col items-start">
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-stone-900 mb-6 uppercase leading-tight">
                        Cup<br/>Warmer
                    </h3>
<p className="text-lg text-stone-600 mb-10 leading-relaxed">
                        Stay caffeinated all day long! Our 40oz Coffee Mug is the ultimate companion for your coffee cravings.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="inline-flex items-center justify-between gap-4 bg-[#a46d3e] hover:bg-[#8c5a31] transition-colors text-white rounded-full py-2.5 pl-6 pr-2.5 font-medium shadow-sm">
                            Shop Now
                            <span className="bg-white text-[#a46d3e] rounded-full p-1.5"><i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i></span>
</button>
<button className="inline-flex items-center justify-between gap-4 border border-stone-300 hover:border-stone-400 bg-transparent text-stone-800 transition-colors rounded-full py-2.5 pl-6 pr-2.5 font-medium">
                            Learn More
                            <span className="bg-[#a46d3e] text-white rounded-full p-1.5"><i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i></span>
</button>
</div>
</div>
<div className="w-full md:w-1/2 aspect-[4/3] md:aspect-square bg-[#b47b4d] rounded-[2rem] overflow-hidden relative shadow-inner">
<img alt="Cup Warmer" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-70" src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
<div className="w-full md:w-1/2 flex flex-col items-start">
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-stone-900 mb-6 uppercase leading-tight">
                        Insulated<br/>Coffee Mug
                    </h3>
<p className="text-lg text-stone-600 mb-10 leading-relaxed">
                        Sip in style, stay refreshed! Our insulated coffee mug keeps your Coffee hot or cold for hours.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="inline-flex items-center justify-between gap-4 bg-[#a46d3e] hover:bg-[#8c5a31] transition-colors text-white rounded-full py-2.5 pl-6 pr-2.5 font-medium shadow-sm">
                            Shop Now
                            <span className="bg-white text-[#a46d3e] rounded-full p-1.5"><i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i></span>
</button>
<button className="inline-flex items-center justify-between gap-4 border border-stone-300 hover:border-stone-400 bg-transparent text-stone-800 transition-colors rounded-full py-2.5 pl-6 pr-2.5 font-medium">
                            Learn More
                            <span className="bg-[#a46d3e] text-white rounded-full p-1.5"><i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i></span>
</button>
</div>
</div>
<div className="w-full md:w-1/2 aspect-[4/3] md:aspect-square bg-[#c59463] rounded-[2rem] overflow-hidden relative shadow-inner">
<img alt="Insulated Mug" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-80" src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>
</div>
</section>

<div className="bg-stone-950 text-stone-200 py-3 overflow-hidden">
<div className="flex items-center whitespace-nowrap animate-marquee gap-8 px-4 w-max">
<span className="text-sm font-medium tracking-widest uppercase">Tumbler 40oz</span>
<i className="w-4 h-4 text-amber-600" data-lucide="sparkle" strokeWidth="1.5"></i>
<span className="text-sm font-medium tracking-widest uppercase">Cup Warmer</span>
<i className="w-4 h-4 text-amber-600" data-lucide="sparkle" strokeWidth="1.5"></i>
<span className="text-sm font-medium tracking-widest uppercase">Display Coffee Mug</span>
<i className="w-4 h-4 text-amber-600" data-lucide="sparkle" strokeWidth="1.5"></i>
<span className="text-sm font-medium tracking-widest uppercase">Smart Tea Infuser</span>
<i className="w-4 h-4 text-amber-600" data-lucide="sparkle" strokeWidth="1.5"></i>
<span className="text-sm font-medium tracking-widest uppercase">Tumbler 40oz</span>
<i className="w-4 h-4 text-amber-600" data-lucide="sparkle" strokeWidth="1.5"></i>
<span className="text-sm font-medium tracking-widest uppercase">Cup Warmer</span>
</div>
</div>

<section className="max-w-7xl mx-auto px-6 py-24">
<h2 className="text-4xl font-semibold tracking-tight text-center text-stone-900 mb-16 uppercase">Client Review</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white border border-stone-200 rounded-2xl p-8 shadow-sm flex flex-col justify-between">
<div>
<div className="flex gap-1 mb-4 text-amber-400">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-stone-600 mb-8 leading-relaxed">
                        I'm amazed at how well the tea infuser works. It brews the perfect cup of tea, and I love that it's so easy to clean!
                    </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-stone-100">
<div className="w-10 h-10 rounded-full bg-[#d28b4c] text-white flex items-center justify-center font-medium text-lg">O</div>
<div>
<h4 className="font-semibold text-stone-900 text-sm">Olivia</h4>
<p className="text-xs text-stone-500">7 Months ago</p>
</div>
</div>
</div>

<div className="bg-white border border-stone-200 rounded-2xl p-8 shadow-md ring-1 ring-amber-700/10 flex flex-col justify-between transform -translate-y-2">
<div>
<div className="flex gap-1 mb-4 text-amber-400">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-stone-600 mb-8 leading-relaxed">
                        The quality of Therma Brew products is outstanding. My tumbler has been through the wash multiple times and still looks brand new!
                    </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-stone-100">
<div className="w-10 h-10 rounded-full bg-[#c07c3e] text-white flex items-center justify-center font-medium text-lg">A</div>
<div>
<h4 className="font-semibold text-stone-900 text-sm">Ava</h4>
<p className="text-xs text-stone-500">6 Months ago</p>
</div>
</div>
</div>

<div className="bg-white border border-stone-200 rounded-2xl p-8 shadow-sm flex flex-col justify-between">
<div>
<div className="flex gap-1 mb-4 text-amber-400">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-stone-600 mb-8 leading-relaxed">
                        This insulated mug is fantastic! Not only does it keep my drinks hot, but it also fits in my bag without leaking.
                    </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-stone-100">
<div className="w-10 h-10 rounded-full bg-[#9e5d26] text-white flex items-center justify-center font-medium text-lg">E</div>
<div>
<h4 className="font-semibold text-stone-900 text-sm">Ethan</h4>
<p className="text-xs text-stone-500">6 Months ago</p>
</div>
</div>
</div>

<div className="bg-white border border-stone-200 rounded-2xl p-8 shadow-sm flex flex-col justify-between hidden lg:flex">
<div>
<div className="flex gap-1 mb-4 text-amber-400">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-stone-300" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-stone-600 mb-8 leading-relaxed">
                        I can't recommend the tea infuser enough! It's made my tea drinking experience so much better with its easy-to-use design.
                    </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-stone-100">
<div className="w-10 h-10 rounded-full bg-[#b8804e] text-white flex items-center justify-center font-medium text-lg">L</div>
<div>
<h4 className="font-semibold text-stone-900 text-sm">Liam</h4>
<p className="text-xs text-stone-500">6 Months ago</p>
</div>
</div>
</div>
</div>

<div className="flex justify-center items-center gap-2 mt-12">
<button className="w-8 h-2 rounded-full bg-[#4a3423]"></button>
<button className="w-2 h-2 rounded-full border border-[#4a3423] bg-transparent hover:bg-stone-200"></button>
<button className="w-2 h-2 rounded-full border border-[#4a3423] bg-transparent hover:bg-stone-200"></button>
<button className="w-2 h-2 rounded-full border border-[#4a3423] bg-transparent hover:bg-stone-200"></button>
<button className="w-2 h-2 rounded-full border border-[#4a3423] bg-transparent hover:bg-stone-200"></button>
</div>
</section>

<footer className="bg-[#2d1e13] text-stone-400 pt-20 pb-8">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
<div className="lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<i className="w-6 h-6 text-amber-500" data-lucide="coffee" strokeWidth="1.5"></i>
<span className="text-xl font-semibold tracking-tight uppercase text-white">Therma Brew</span>
</div>
<div className="flex gap-4 mt-8">
<a className="w-10 h-10 rounded-full border border-stone-600 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full border border-stone-600 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-6 text-sm">Quick links</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-amber-400 transition-colors" href="#">Home</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">Shop</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6 text-sm">Company</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-amber-400 transition-colors" href="#">Login/Sign up</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">Terms of Services</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">Refund policy</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6 text-sm">Contact Info</h4>
<p className="text-sm leading-relaxed">
                    Email: thermabrew@website-mails.com
                </p>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs">© 2025, Therma Brew</p>
<div className="flex gap-2">

<div className="h-6 w-10 bg-stone-800 rounded flex items-center justify-center"><i className="w-3 h-3" data-lucide="credit-card" strokeWidth="1.5"></i></div>
<div className="h-6 w-10 bg-stone-800 rounded flex items-center justify-center"><i className="w-3 h-3" data-lucide="wallet" strokeWidth="1.5"></i></div>
<div className="h-6 w-10 bg-stone-800 rounded flex items-center justify-center"><i className="w-3 h-3" data-lucide="nfc" strokeWidth="1.5"></i></div>
<div className="h-6 w-10 bg-stone-800 rounded flex items-center justify-center"><i className="w-3 h-3" data-lucide="banknote" strokeWidth="1.5"></i></div>
<div className="h-6 w-10 bg-stone-800 rounded flex items-center justify-center"><i className="w-3 h-3" data-lucide="circle-dollar-sign" strokeWidth="1.5"></i></div>
</div>
</div>
</footer>


    </>
  );
}
