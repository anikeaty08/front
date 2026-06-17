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



        // Initialize Lucide Icons
        lucide.createIcons();

        // Mobile Menu Toggle Logic
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const closeMenuBtn = document.getElementById('close-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const body = document.body;

        function toggleMenu() {
            const isClosed = mobileMenu.classList.contains('translate-x-full');
            if (isClosed) {
                mobileMenu.classList.remove('translate-x-full');
                body.style.overflow = 'hidden'; // Prevent background scrolling
            } else {
                mobileMenu.classList.add('translate-x-full');
                body.style.overflow = '';
            }
        }

        mobileMenuBtn.addEventListener('click', toggleMenu);
        closeMenuBtn.addEventListener('click', toggleMenu);
    
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
      

<header className="sticky top-0 z-50 flex w-full border-b-2 border-black bg-[#faf8f5] h-20 md:h-24">

<div className="flex-shrink-0 w-32 md:w-48 bg-yellow-200 border-r-2 border-black flex flex-col justify-center px-4 md:px-8">
<a className="flex flex-col leading-none" href="#">
<span className="text-2xl md:text-4xl font-semibold tracking-tight text-black">mini</span>
<span className="text-2xl md:text-4xl font-semibold tracking-tight text-black">no.</span>
</a>
<span className="hidden md:block text-xs font-medium tracking-widest mt-2 uppercase text-gray-800">Premium<br/>Baby<br/>Accessories</span>
</div>

<nav className="hidden lg:flex flex-grow items-center justify-center">
<ul className="flex h-full items-center">
<li className="h-full"><a className="flex items-center h-full px-6 text-sm font-semibold tracking-wide uppercase hover:bg-black hover:text-white transition-colors" href="#">Shop All</a></li>
<li className="h-1/3 w-[2px] bg-black"></li>
<li className="h-full"><a className="flex items-center h-full px-6 text-sm font-semibold tracking-wide uppercase hover:bg-black hover:text-white transition-colors" href="#">Feeding</a></li>
<li className="h-1/3 w-[2px] bg-black"></li>
<li className="h-full"><a className="flex items-center h-full px-6 text-sm font-semibold tracking-wide uppercase hover:bg-black hover:text-white transition-colors" href="#">Travel</a></li>
<li className="h-1/3 w-[2px] bg-black"></li>
<li className="h-full"><a className="flex items-center h-full px-6 text-sm font-semibold tracking-wide uppercase hover:bg-black hover:text-white transition-colors" href="#">Nursery</a></li>
<li className="h-1/3 w-[2px] bg-black"></li>
<li className="h-full"><a className="flex items-center h-full px-6 text-sm font-semibold tracking-wide uppercase hover:bg-black hover:text-white transition-colors" href="#">Toys</a></li>
<li className="h-1/3 w-[2px] bg-black"></li>
<li className="h-full"><a className="flex items-center h-full px-6 text-sm font-semibold tracking-wide uppercase hover:bg-black hover:text-white transition-colors" href="#">About</a></li>
</ul>
</nav>

<div className="ml-auto flex border-l-2 border-black">
<button className="hidden md:flex items-center gap-3 px-8 text-sm font-semibold tracking-wide uppercase hover:bg-gray-100 transition-colors border-r-2 border-black">
                Search <i className="w-3 h-3 fill-black" data-lucide="circle"></i>
</button>
<button className="flex items-center gap-3 px-6 md:px-8 bg-red-200 text-sm font-semibold tracking-wide uppercase hover:bg-red-300 transition-colors">
<span className="hidden md:inline">Cart (0)</span>
<div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center text-white">
<i className="w-4 h-4 md:w-5 md:h-5" data-lucide="shopping-bag" strokeWidth="1.5"></i>
</div>
</button>

<button className="lg:hidden flex items-center justify-center px-6 border-l-2 border-black hover:bg-gray-100" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</header>

<div className="fixed inset-0 bg-yellow-200 z-[60] transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col border-l-2 border-black" id="mobile-menu">
<div className="flex justify-between items-center h-20 border-b-2 border-black px-6 bg-[#faf8f5]">
<span className="text-2xl font-semibold tracking-tight">Menu</span>
<button className="p-2 border-2 border-black hover:bg-black hover:text-white transition-colors" id="close-menu-btn">
<i className="w-6 h-6" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<div className="flex flex-col h-full overflow-y-auto">
<a className="p-6 text-3xl font-semibold tracking-tight border-b-2 border-black hover:bg-black hover:text-white transition-colors" href="#">Shop All</a>
<a className="p-6 text-3xl font-semibold tracking-tight border-b-2 border-black hover:bg-black hover:text-white transition-colors" href="#">Feeding</a>
<a className="p-6 text-3xl font-semibold tracking-tight border-b-2 border-black hover:bg-black hover:text-white transition-colors" href="#">Travel</a>
<a className="p-6 text-3xl font-semibold tracking-tight border-b-2 border-black hover:bg-black hover:text-white transition-colors" href="#">Nursery</a>
<a className="p-6 text-3xl font-semibold tracking-tight border-b-2 border-black hover:bg-black hover:text-white transition-colors" href="#">Toys</a>
<a className="p-6 text-3xl font-semibold tracking-tight hover:bg-black hover:text-white transition-colors" href="#">About</a>
</div>
</div>

<section className="w-full border-b-2 border-black flex flex-col lg:flex-row relative z-10 bg-[#faf8f5]">

<div className="w-full lg:w-[40%] flex flex-col border-b-2 lg:border-b-0 lg:border-r-2 border-black">
<div className="p-8 md:p-12 lg:p-16 flex-grow flex flex-col justify-center">
<h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tight leading-[1.05] mb-8">
                    Thoughtful <br/>Essentials <br/>For Little <br/>Moments.
                </h1>
<div className="w-full h-[2px] bg-black mb-8"></div>
<p className="text-lg md:text-xl text-gray-800 mb-10 max-w-md font-medium">
                    Premium baby accessories crafted with care, for comfort that lasts every day.
                </p>
<a className="group flex items-center gap-4 w-max" href="#">
<span className="text-sm font-semibold tracking-wide uppercase">Shop Collection</span>
<div className="w-10 h-10 bg-red-400 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border border-black">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</a>
</div>

<div className="bg-purple-200 border-t-2 border-black p-6 flex items-center gap-4">
<div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center bg-white flex-shrink-0">
<i className="w-5 h-5" data-lucide="smile" strokeWidth="1.5"></i>
</div>
<p className="text-xs font-semibold tracking-widest uppercase">Free shipping on orders over $75</p>
</div>
</div>

<div className="w-full lg:w-[45%] relative border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-[#faf8f5] pt-12 md:pt-24 px-8 md:px-16 flex flex-col justify-end min-h-[60vh] lg:min-h-0">

<div className="absolute top-8 left-8 md:top-16 md:left-12 z-20 w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#faf8f5] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center spin-slow">
<svg className="w-full h-full animate-[spin_10s_linear_infinite]" viewbox="0 0 100 100">
<path d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" id="circlePath"></path>
<text className="text-[10px] font-semibold tracking-widest uppercase fill-black">
<textpath href="#circlePath" startoffset="0%">
                            DESIGNED FOR COMFORT * MADE FOR EVERYDAY *
                        </textpath>
</text>
</svg>
<div className="absolute inset-0 flex items-center justify-center text-red-400">
<i className="w-10 h-10 md:w-12 md:h-12" data-lucide="asterisk" strokeWidth="1.5"></i>
</div>
</div>

<div className="bg-red-400 w-full h-[80%] rounded-t-[200px] border-2 border-black overflow-hidden relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
<img alt="Cute baby in a white knit beanie" className="w-full h-full object-cover object-top mix-blend-multiply opacity-90" src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>

<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[110%] max-w-2xl bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-30">
<div className="grid grid-cols-2 md:grid-cols-4 divide-x-2 divide-y-2 md:divide-y-0 divide-black">
<div className="p-4 md:p-6 flex flex-col items-center text-center gap-3 hover:bg-gray-50 transition-colors">
<i className="w-6 h-6 md:w-8 md:h-8" data-lucide="leaf" strokeWidth="1.5"></i>
<span className="text-xs font-semibold tracking-widest uppercase leading-tight">Safe<br/>Materials</span>
</div>
<div className="p-4 md:p-6 flex flex-col items-center text-center gap-3 hover:bg-gray-50 transition-colors">
<i className="w-6 h-6 md:w-8 md:h-8" data-lucide="heart" strokeWidth="1.5"></i>
<span className="text-xs font-semibold tracking-widest uppercase leading-tight">Modern<br/>&amp; Minimal</span>
</div>
<div className="p-4 md:p-6 flex flex-col items-center text-center gap-3 hover:bg-gray-50 transition-colors">
<i className="w-6 h-6 md:w-8 md:h-8" data-lucide="gift" strokeWidth="1.5"></i>
<span className="text-xs font-semibold tracking-widest uppercase leading-tight">Perfect<br/>For Gifting</span>
</div>
<div className="p-4 md:p-6 flex flex-col items-center text-center gap-3 hover:bg-gray-50 transition-colors">
<i className="w-6 h-6 md:w-8 md:h-8" data-lucide="shield-check" strokeWidth="1.5"></i>
<span className="text-xs font-semibold tracking-widest uppercase leading-tight">Trusted By<br/>Parents</span>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-[20%] flex flex-col border-b-2 lg:border-b-0 border-black pt-16 lg:pt-0">

<div className="bg-sky-200 border-b-2 border-black p-8 flex flex-col justify-between flex-grow min-h-[200px]">
<p className="text-sm font-semibold tracking-widest uppercase leading-relaxed text-black">
                    Carefully <br/>Curated. <br/><br/>Premium Quality. <br/>Modern Design.
                </p>
<i className="w-8 h-8 mt-8" data-lucide="plus" strokeWidth="1.5"></i>
</div>

<div className="bg-yellow-200 border-b-2 border-black p-8 flex items-center justify-center flex-grow-[2] min-h-[250px] relative overflow-hidden group">
<div className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity"></div>

<div className="relative w-full h-full flex items-center justify-center">
<img alt="Minimalist baby product" className="w-3/4 h-3/4 object-contain filter contrast-125 drop-shadow-xl group-hover:scale-105 transition-transform duration-500 rounded-2xl mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>

<div className="bg-purple-200 p-8 flex justify-between items-end h-32 md:h-40">
<div className="text-5xl font-medium rotate-90 transform origin-left text-black">=)</div>
<i className="w-8 h-8 text-black animate-bounce" data-lucide="arrow-down" strokeWidth="1.5"></i>
</div>
</div>

<div className="hidden lg:flex w-16 bg-black text-white items-center justify-center py-12">
<span className="writing-vertical text-xs font-semibold tracking-[0.3em] uppercase whitespace-nowrap rotate-180">
                The details make all the difference.
            </span>
</div>
</section>

<div className="w-full bg-black text-white py-4 border-b-2 border-black overflow-hidden flex whitespace-nowrap">
<div className="animate-marquee flex gap-12 items-center">
<span className="text-xl font-semibold tracking-widest uppercase">100% Food-Grade Silicone</span>
<i className="w-5 h-5 fill-white" data-lucide="star" strokeWidth="1.5"></i>
<span className="text-xl font-semibold tracking-widest uppercase">BPA &amp; Phthalate Free</span>
<i className="w-5 h-5 fill-white" data-lucide="star" strokeWidth="1.5"></i>
<span className="text-xl font-semibold tracking-widest uppercase">Dishwasher Safe</span>
<i className="w-5 h-5 fill-white" data-lucide="star" strokeWidth="1.5"></i>
<span className="text-xl font-semibold tracking-widest uppercase">Sustainable Packaging</span>
<i className="w-5 h-5 fill-white" data-lucide="star" strokeWidth="1.5"></i>

<span className="text-xl font-semibold tracking-widest uppercase">100% Food-Grade Silicone</span>
<i className="w-5 h-5 fill-white" data-lucide="star" strokeWidth="1.5"></i>
<span className="text-xl font-semibold tracking-widest uppercase">BPA &amp; Phthalate Free</span>
<i className="w-5 h-5 fill-white" data-lucide="star" strokeWidth="1.5"></i>
<span className="text-xl font-semibold tracking-widest uppercase">Dishwasher Safe</span>
<i className="w-5 h-5 fill-white" data-lucide="star" strokeWidth="1.5"></i>
<span className="text-xl font-semibold tracking-widest uppercase">Sustainable Packaging</span>
</div>
</div>

<section className="py-24 px-6 md:px-12 lg:px-24 border-b-2 border-black bg-[#faf8f5]">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Curated <br/>Categories</h2>
<a className="text-sm font-semibold tracking-widest uppercase border-b-2 border-black pb-1 hover:text-red-500 hover:border-red-500 transition-colors" href="#">View Directory</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group block border-2 border-black bg-white hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300" href="#">
<div className="aspect-square bg-sky-100 p-8 flex items-center justify-center border-b-2 border-black overflow-hidden">
<img alt="Feeding" className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500 mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-6 flex justify-between items-center bg-white">
<span className="text-xl font-semibold tracking-tight">Feeding</span>
<i className="w-6 h-6" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</a>

<a className="group block border-2 border-black bg-white hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300" href="#">
<div className="aspect-square bg-yellow-100 p-8 flex items-center justify-center border-b-2 border-black overflow-hidden">
<img alt="Nursery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 mix-blend-multiply" src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-6 flex justify-between items-center bg-white">
<span className="text-xl font-semibold tracking-tight">Nursery</span>
<i className="w-6 h-6" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</a>

<a className="group block border-2 border-black bg-white hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300" href="#">
<div className="aspect-square bg-purple-100 p-8 flex items-center justify-center border-b-2 border-black overflow-hidden">
<img alt="Toys" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 mix-blend-multiply" src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-6 flex justify-between items-center bg-white">
<span className="text-xl font-semibold tracking-tight">Play</span>
<i className="w-6 h-6" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</a>

<a className="group block border-2 border-black bg-white hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300" href="#">
<div className="aspect-square bg-red-100 p-8 flex items-center justify-center border-b-2 border-black overflow-hidden">
<img alt="On The Go" className="w-full h-full object-cover rounded-t-full group-hover:scale-110 transition-transform duration-500 mix-blend-multiply" src="https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-6 flex justify-between items-center bg-white">
<span className="text-xl font-semibold tracking-tight">On The Go</span>
<i className="w-6 h-6" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</a>
</div>
</section>

<section className="py-24 border-b-2 border-black bg-[#faf8f5] overflow-hidden">
<div className="px-6 md:px-12 lg:px-24 mb-12">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">The <br/>Essentials.</h2>
</div>

<div className="flex overflow-x-auto gap-6 px-6 md:px-12 lg:px-24 pb-8 pt-4 no-scrollbar cursor-grab active:cursor-grabbing snap-x snap-mandatory">

<div className="snap-start flex-shrink-0 w-[280px] md:w-[320px] bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group">
<div className="h-[300px] bg-stone-100 border-b-2 border-black p-6 relative">
<div className="absolute top-4 left-4 bg-yellow-300 border-2 border-black px-3 py-1 text-[10px] font-semibold tracking-widest uppercase z-10">Bestseller</div>
<img alt="Product" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-6 flex flex-col gap-4">
<div>
<p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Feeding</p>
<h3 className="text-lg font-semibold tracking-tight leading-tight">Silicone Catch Bib</h3>
</div>
<div className="flex justify-between items-center mt-2">
<span className="text-xl font-semibold">$24.00</span>
<button className="w-10 h-10 rounded-full border-2 border-black bg-red-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="snap-start flex-shrink-0 w-[280px] md:w-[320px] bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group">
<div className="h-[300px] bg-sky-50 border-b-2 border-black p-6 relative">
<img alt="Product" className="w-full h-full object-cover rounded-full mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-6 flex flex-col gap-4">
<div>
<p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Play</p>
<h3 className="text-lg font-semibold tracking-tight leading-tight">Wooden Teether Ring</h3>
</div>
<div className="flex justify-between items-center mt-2">
<span className="text-xl font-semibold">$18.00</span>
<button className="w-10 h-10 rounded-full border-2 border-black bg-sky-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="snap-start flex-shrink-0 w-[280px] md:w-[320px] bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group">
<div className="h-[300px] bg-purple-50 border-b-2 border-black p-6 relative">
<img alt="Product" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-6 flex flex-col gap-4">
<div>
<p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Nursery</p>
<h3 className="text-lg font-semibold tracking-tight leading-tight">Organic Muslin Swaddle</h3>
</div>
<div className="flex justify-between items-center mt-2">
<span className="text-xl font-semibold">$32.00</span>
<button className="w-10 h-10 rounded-full border-2 border-black bg-purple-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="snap-start flex-shrink-0 w-[280px] md:w-[320px] bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group flex flex-col justify-center items-center bg-yellow-100 hover:bg-yellow-200 transition-colors cursor-pointer">
<div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center bg-white mb-4">
<i className="w-6 h-6" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-semibold tracking-tight">View All Products</span>
</div>
</div>
</section>

<section className="border-b-2 border-black flex flex-col lg:flex-row bg-white">
<div className="w-full lg:w-1/2 border-b-2 lg:border-b-0 lg:border-r-2 border-black overflow-hidden relative min-h-[500px]">
<img alt="Baby nursery detail" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>

<div className="absolute bottom-8 right-8 bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-4">
<i className="w-8 h-8 text-green-500" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-sm font-semibold tracking-widest uppercase">Safety First</span>
</div>
</div>
<div className="w-full lg:w-1/2 bg-yellow-300 p-12 lg:p-24 flex flex-col justify-center relative">

<i className="absolute top-12 right-12 w-12 h-12 text-black opacity-20" data-lucide="sparkles" strokeWidth="1.5"></i>
<h2 className="text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-8">
                Designed for the <br/>messy, beautiful <br/>reality of parenting.
            </h2>
<p className="text-lg md:text-xl text-gray-800 font-medium mb-10 max-w-lg">
                We believe baby products shouldn't compromise on aesthetics. Our collection bridges the gap between functional necessities and modern design.
            </p>
<div className="flex flex-wrap gap-4">
<div className="bg-white border-2 border-black px-6 py-3 rounded-full text-sm font-semibold tracking-widest uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Aesthetic</div>
<div className="bg-white border-2 border-black px-6 py-3 rounded-full text-sm font-semibold tracking-widest uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Durable</div>
<div className="bg-white border-2 border-black px-6 py-3 rounded-full text-sm font-semibold tracking-widest uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Practical</div>
</div>
</div>
</section>

<section className="border-b-2 border-black bg-[#faf8f5]">
<div className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black">
<div className="p-12 lg:p-16 flex flex-col items-start gap-6 hover:bg-sky-100 transition-colors">
<div className="w-14 h-14 bg-white border-2 border-black rounded-xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
<i className="w-6 h-6" data-lucide="droplets" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight">Easy to Clean</h3>
<p className="text-base text-gray-700 font-medium leading-relaxed">Simply wipe down or toss in the dishwasher. Our silicone resists stains and doesn't absorb water.</p>
</div>
<div className="p-12 lg:p-16 flex flex-col items-start gap-6 hover:bg-purple-100 transition-colors">
<div className="w-14 h-14 bg-white border-2 border-black rounded-xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
<i className="w-6 h-6" data-lucide="shield" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight">Non-Toxic</h3>
<p className="text-base text-gray-700 font-medium leading-relaxed">Rigorously tested to be free from BPA, PVC, Phthalates, Lead, and Cadmium. Safe to chew.</p>
</div>
<div className="p-12 lg:p-16 flex flex-col items-start gap-6 hover:bg-red-100 transition-colors">
<div className="w-14 h-14 bg-white border-2 border-black rounded-xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
<i className="w-6 h-6" data-lucide="sun" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight">Travel Ready</h3>
<p className="text-base text-gray-700 font-medium leading-relaxed">Flexible, lightweight, and compact. Roll them up and toss them in the diaper bag for on-the-go.</p>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-24 border-b-2 border-black bg-stone-100">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16 text-center">Loved by Parents.</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white border-2 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
<div>
<div className="flex gap-1 mb-6">
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg font-medium leading-relaxed mb-8">"Finally, baby items that don't clash with my living room. The quality is exceptional and the colors are gorgeous."</p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-purple-200 rounded-full border border-black flex items-center justify-center text-sm font-bold">S</div>
<div>
<p className="text-sm font-semibold uppercase tracking-widest">Sarah M.</p>
<p className="text-xs text-gray-500">Verified Buyer</p>
</div>
</div>
</div>

<div className="bg-red-50 border-2 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between transform lg:-translate-y-4">
<div>
<div className="flex gap-1 mb-6">
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg font-medium leading-relaxed mb-8">"The catch bib is a lifesaver. It actually stays open and catches the food. Plus, it cleans in seconds."</p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-sky-200 rounded-full border border-black flex items-center justify-center text-sm font-bold">J</div>
<div>
<p className="text-sm font-semibold uppercase tracking-widest">Jessica T.</p>
<p className="text-xs text-gray-500">Verified Buyer</p>
</div>
</div>
</div>

<div className="bg-white border-2 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
<div>
<div className="flex gap-1 mb-6">
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg font-medium leading-relaxed mb-8">"Bought these as a baby shower gift and they were the hit of the party. The packaging is as beautiful as the product."</p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-yellow-200 rounded-full border border-black flex items-center justify-center text-sm font-bold">E</div>
<div>
<p className="text-sm font-semibold uppercase tracking-widest">Emily R.</p>
<p className="text-xs text-gray-500">Verified Buyer</p>
</div>
</div>
</div>
</div>
</section>

<section className="h-[60vh] md:h-[80vh] border-b-2 border-black relative overflow-hidden group">
<img alt="Lifestyle" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-black/20"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 drop-shadow-md">Make it beautiful.</h2>
<a className="bg-white text-black px-8 py-4 text-sm font-semibold tracking-widest uppercase border-2 border-black hover:bg-yellow-300 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" href="#">
                Shop The Lookbook
            </a>
</div>
</section>

<section className="bg-red-400 border-b-2 border-black flex flex-col lg:flex-row">
<div className="w-full lg:w-1/2 p-12 lg:p-24 border-b-2 lg:border-b-0 lg:border-r-2 border-black flex flex-col justify-center text-white">
<i className="w-12 h-12 mb-8" data-lucide="mail" strokeWidth="1.5"></i>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">Join the <br/>mini family.</h2>
<p className="text-lg md:text-xl font-medium text-white/90 mb-0 max-w-md">Get 10% off your first order, plus early access to new colorways and drops.</p>
</div>
<div className="w-full lg:w-1/2 p-12 lg:p-24 bg-sky-200 flex items-center justify-center">
<form className="w-full max-w-md flex flex-col gap-4" onsubmit="event.preventDefault();">
<label className="text-sm font-semibold tracking-widest uppercase" htmlFor="email">Email Address</label>
<div className="flex flex-col sm:flex-row gap-4">
<input className="flex-grow bg-white border-2 border-black px-6 py-4 text-base focus:outline-none focus:ring-2 focus:ring-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] placeholder-gray-400" id="email" placeholder="hello@example.com" type="email"/>
<button className="bg-black text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase border-2 border-black hover:bg-yellow-300 hover:text-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap" type="submit">
                        Subscribe
                    </button>
</div>
<p className="text-xs font-medium mt-2 text-gray-700">By subscribing, you agree to our Terms &amp; Privacy Policy.</p>
</form>
</div>
</section>

<footer className="bg-[#faf8f5] pt-16 md:pt-24 pb-8 px-6 md:px-12 lg:px-24">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

<div className="flex flex-col col-span-1 lg:col-span-1">
<a className="flex flex-col leading-none mb-6" href="#">
<span className="text-5xl font-semibold tracking-tight text-black">mini</span>
<span className="text-5xl font-semibold tracking-tight text-black">no.</span>
</a>
<p className="text-base text-gray-700 font-medium max-w-xs mb-8">Thoughtful essentials for little moments. Designed for comfort, made for everyday.</p>
<div className="flex gap-4">
<a className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center hover:bg-sky-200 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center hover:bg-red-300 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="flex flex-col gap-4">
<h4 className="text-sm font-semibold tracking-widest uppercase mb-2">Shop</h4>
<a className="text-base text-gray-600 hover:text-black font-medium transition-colors" href="#">All Products</a>
<a className="text-base text-gray-600 hover:text-black font-medium transition-colors" href="#">Feeding</a>
<a className="text-base text-gray-600 hover:text-black font-medium transition-colors" href="#">Nursery</a>
<a className="text-base text-gray-600 hover:text-black font-medium transition-colors" href="#">On The Go</a>
<a className="text-base text-gray-600 hover:text-black font-medium transition-colors" href="#">Bundles</a>
<a className="text-base text-gray-600 hover:text-black font-medium transition-colors" href="#">Gift Cards</a>
</div>

<div className="flex flex-col gap-4">
<h4 className="text-sm font-semibold tracking-widest uppercase mb-2">Support</h4>
<a className="text-base text-gray-600 hover:text-black font-medium transition-colors" href="#">FAQ</a>
<a className="text-base text-gray-600 hover:text-black font-medium transition-colors" href="#">Shipping &amp; Returns</a>
<a className="text-base text-gray-600 hover:text-black font-medium transition-colors" href="#">Care Instructions</a>
<a className="text-base text-gray-600 hover:text-black font-medium transition-colors" href="#">Contact Us</a>
<a className="text-base text-gray-600 hover:text-black font-medium transition-colors" href="#">Wholesale</a>
</div>

<div className="flex flex-col gap-4">
<h4 className="text-sm font-semibold tracking-widest uppercase mb-2">About</h4>
<a className="text-base text-gray-600 hover:text-black font-medium transition-colors" href="#">Our Story</a>
<a className="text-base text-gray-600 hover:text-black font-medium transition-colors" href="#">Materials</a>
<a className="text-base text-gray-600 hover:text-black font-medium transition-colors" href="#">Journal</a>
<a className="text-base text-gray-600 hover:text-black font-medium transition-colors" href="#">Careers</a>
</div>
</div>

<div className="pt-8 border-t-2 border-black flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm font-medium text-gray-500">© 2024 mini no. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-sm font-medium text-gray-500 hover:text-black transition-colors" href="#">Privacy Policy</a>
<a className="text-sm font-medium text-gray-500 hover:text-black transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>


    </>
  );
}
