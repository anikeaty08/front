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

        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
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
      

<nav className="fixed w-full z-50 transition-all duration-300 bg-[#0F0B08]/90 backdrop-blur-md border-b border-white/10 reveal active">
<div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-[#E8DCC8] text-2xl tracking-tight font-newsreader font-light" style={{}}>Café Botanica</span>
</div>
<div className="hidden md:flex items-center gap-10">
<a className="text-[#E8DCC8]/80 hover:text-[#E8DCC8] text-lg font-normal transition-colors font-poppins" href="#" style={{}}>Home</a>
<a className="text-[#E8DCC8]/80 hover:text-[#E8DCC8] text-lg font-normal transition-colors font-poppins" href="#" style={{}}>Menu</a>
<a className="text-[#E8DCC8]/80 hover:text-[#E8DCC8] text-lg font-normal transition-colors font-poppins" href="#" style={{}}>Origins</a>
<a className="hover:text-[#E8DCC8] transition-colors text-lg font-normal text-[#E8DCC8]/80 font-poppins" href="#" style={{}}>Spaces</a>
</div>
<div className="flex items-center gap-6">
<button className="text-[#E8DCC8] hover:text-white transition-colors">
<svg className="lucide lucide-search w-5 h-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button className="text-[#E8DCC8] hover:text-white transition-colors">
<svg className="lucide lucide-shopping-bag w-5 h-5" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</button>
<a className="hidden md:block text-[#0F0B08] bg-[#E8DCC8] px-6 py-2.5 rounded-full text-base font-medium hover:bg-white transition-all font-poppins" href="#" style={{}}>Sign In</a>
</div>
</div>
</nav>

<section className="min-h-screen flex overflow-hidden bg-[#0F0B08] pt-24 relative items-center">

<div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2A1F18] via-[#0F0B08] to-[#0F0B08] opacity-60 w-1/2 h-full absolute top-0 right-0 reveal delay-500"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 z-10 w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12 items-center">
<div className="space-y-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm reveal delay-100">
<span className="w-2 h-2 rounded-full bg-[#C8A67B]"></span>
<span className="text-[#E8DCC8] text-sm tracking-wide uppercase font-poppins" style={{}}>New Seasonal Blend</span>
</div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-6xl text-[#F5F2EB] tracking-tight font-newsreader font-light reveal delay-200" style={{}}>
                    Discover The <br/>
<span className="text-[#C8A67B] font-newsreader font-light" style={{}}>Art</span> Of Perfect <br/>
                    Coffee.
                </h1>
<p className="leading-relaxed text-xl font-light text-[#9A948D] max-w-lg font-poppins reveal delay-300" style={{}}>
                    Experience the rich and bold flavors of our exquisite coffee blends. Crafted to awaken your senses and start your day right.
                </p>
<div className="flex flex-col sm:flex-row gap-5 reveal delay-400">
<button className="bg-[#F5F2EB] text-[#0F0B08] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#C8A67B] transition-all flex items-center justify-center gap-2 group font-poppins" style={{}}>
                        Order Now
                        <svg className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="border border-[#F5F2EB]/20 text-[#F5F2EB] px-8 py-4 rounded-full text-lg font-medium hover:bg-white/5 transition-all font-poppins" style={{}}>
                        Explore Menu
                    </button>
</div>
<div className="flex gap-12 pt-8 border-t border-white/10 reveal delay-500">
<div>
<p className="text-3xl text-[#F5F2EB] tracking-tight font-newsreader font-light" style={{}}>50+</p>
<p className="text-[#9A948D] text-sm uppercase tracking-wider mt-1 font-poppins" style={{}}>Varieties</p>
</div>
<div>
<p className="text-3xl text-[#F5F2EB] tracking-tight font-newsreader font-light" style={{}}>20k+</p>
<p className="text-[#9A948D] text-sm uppercase tracking-wider mt-1 font-poppins" style={{}}>Served</p>
</div>
<div className="">
<p className="text-3xl text-[#F5F2EB] tracking-tight font-newsreader font-light" style={{}}>4.9</p>
<p className="text-[#9A948D] text-sm uppercase tracking-wider mt-1 font-poppins" style={{}}>Rating</p>
</div>
</div>
</div>
<div className="relative h-full flex items-center justify-center lg:justify-end reveal delay-300">

<div className="absolute w-[500px] h-[500px] border border-white/5 rounded-full animate-[spin_60s_linear_infinite]"></div>
<div className="absolute w-[400px] h-[400px] border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
<img alt="Coffee Splash" className="z-20 opacity-90 mix-blend-lighten w-full max-w-lg object-contain border-0 relative drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/60bbaaa1-764b-4bd2-b3ef-c4f51ba28e43_1600w.webp"/>

<div className="absolute top-20 left-10 w-12 h-12 bg-[url('https://cdn-icons-png.flaticon.com/512/751/751621.png')] bg-contain opacity-40 blur-[1px]"></div>
<div className="absolute bottom-32 right-20 w-8 h-8 bg-[url('https://cdn-icons-png.flaticon.com/512/751/751621.png')] bg-contain opacity-30 blur-[2px] rotate-45"></div>
</div>
</div>
</section>

<section className="py-24 bg-[#F5F2EB]">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div className="reveal delay-100">
<h2 className="text-5xl text-[#0F0B08] tracking-tight mb-4 font-newsreader font-light" style={{}}>Popular Selections</h2>
<p className="text-xl text-[#5A544F] font-light max-w-md font-poppins" style={{}}>Curated favorites from our master roasters, brewed to absolute perfection.</p>
</div>
<div className="flex gap-2 mt-6 md:mt-0 reveal delay-200">
<button className="p-3 border border-[#0F0B08]/10 rounded-full hover:bg-[#0F0B08] hover:text-white transition-all disabled:opacity-50">
<svg className="lucide lucide-chevron-left w-6 h-6" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="p-3 border border-[#0F0B08]/10 rounded-full hover:bg-[#0F0B08] hover:text-white transition-all">
<svg className="lucide lucide-chevron-right w-6 h-6" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group bg-white p-6 rounded-2xl border border-[#0F0B08]/5 hover:border-[#C8A67B]/30 hover:shadow-xl hover:shadow-[#C8A67B]/5 transition-all duration-300 reveal delay-100">
<div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-xl bg-[#F5F2EB]">
<img alt="Cappuccino" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-sm font-poppins" style={{}}>$5.50</div>
</div>
<h3 className="text-3xl text-[#0F0B08] tracking-tight mb-2 font-newsreader font-light" style={{}}>Classic Cappuccino</h3>
<p className="text-lg text-[#5A544F] font-light mb-6 font-poppins" style={{}}>Rich espresso topped with equal parts steamed milk and milk foam.</p>
<button className="w-full py-3 border border-[#0F0B08] text-[#0F0B08] rounded-lg text-lg font-medium hover:bg-[#0F0B08] hover:text-white transition-colors flex items-center justify-center gap-2 font-poppins" style={{}}>
                        Add to Order
                    </button>
</div>

<div className="group bg-[#0F0B08] p-6 rounded-2xl border border-white/5 hover:border-[#C8A67B]/30 hover:shadow-xl hover:shadow-[#C8A67B]/5 transition-all duration-300 relative overflow-hidden reveal delay-200">
<div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-xl bg-white/5">
<img alt="Americano" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1517959105821-eaf2591984ca?w=800&amp;q=80"/>
<div className="absolute top-4 right-4 bg-[#2A2420] text-white px-3 py-1 rounded-full text-sm font-medium border border-white/10 font-poppins" style={{}}>$4.00</div>
</div>
<h3 className="text-3xl text-white tracking-tight mb-2 font-newsreader font-light" style={{}}>Signature Americano</h3>
<p className="text-lg text-[#9A948D] font-light mb-6 font-poppins" style={{}}>Espresso diluted with hot water, giving it a similar strength to coffee.</p>
<button className="w-full py-3 bg-[#C8A67B] text-[#0F0B08] rounded-lg text-lg font-medium hover:bg-white transition-colors flex items-center justify-center gap-2 font-poppins" style={{}}>
                        Add to Order
                    </button>
</div>

<div className="group bg-white p-6 rounded-2xl border border-[#0F0B08]/5 hover:border-[#C8A67B]/30 hover:shadow-xl hover:shadow-[#C8A67B]/5 transition-all duration-300 reveal delay-300">
<div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-xl bg-[#F5F2EB]">
<img alt="Espresso" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/da38b196-0cfd-47e7-8532-2aa1c689c254_800w.jpg"/>
<div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-sm font-poppins" style={{}}>$3.50</div>
</div>
<h3 className="text-3xl text-[#0F0B08] tracking-tight mb-2 font-newsreader font-light" style={{}}>Double Espresso</h3>
<p className="text-lg text-[#5A544F] font-light mb-6 font-poppins" style={{}}>Strong, concentrated coffee served in small shots for pure energy.</p>
<button className="w-full py-3 border border-[#0F0B08] text-[#0F0B08] rounded-lg text-lg font-medium hover:bg-[#0F0B08] hover:text-white transition-colors flex items-center justify-center gap-2 font-poppins" style={{}}>
                        Add to Order
                    </button>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#EBE5DA] pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="relative order-2 lg:order-1 reveal delay-100">

<div className="absolute -top-6 -left-6 w-full h-full border border-[#0F0B08] rounded-sm z-0"></div>
<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C8A67B]/20 rounded-full z-0 blur-2xl"></div>
<div className="relative z-10 overflow-hidden rounded-sm shadow-2xl">
<img alt="Latte Art" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-5xl lg:text-6xl text-[#0F0B08] tracking-tight mb-8 font-newsreader font-light reveal delay-200" style={{}}>Coffee Heaven  In Every Cup.</h2>
<div className="space-y-6 text-[#5A544F]">
<p className="text-xl font-light leading-relaxed font-poppins reveal delay-300" style={{}}>
                            Every bean tells a story of its origin. From the misty mountains of Ethiopia to the lush plantations of Colombia, we source only the top 1% of Arabica beans. 
                        </p>
<p className="text-xl font-light leading-relaxed font-poppins reveal delay-400" style={{}}>
                            Our baristas are artisans, trained in the precise science of extraction and the delicate art of milk texturing. At Café Botanica, we don't just serve coffee; we curate an experience.
                        </p>
</div>
<div className="mt-10 flex items-center gap-8 reveal delay-500">
<button className="bg-[#0F0B08] text-[#F5F2EB] px-8 py-4 rounded-sm text-lg font-medium hover:bg-[#C8A67B] transition-colors font-poppins" style={{}}>
                            Read Our Story
                        </button>
<div className="flex -space-x-4">
<img alt="" className="w-12 h-12 object-cover bg-center border-[#EBE5DA] border-2 rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=320&amp;q=80"/>
<img alt="" className="w-12 h-12 object-cover bg-center border-[#EBE5DA] border-2 rounded-full" src="https://images.unsplash.com/photo-1727019451358-8d3a281b5590?w=320&amp;q=80"/>
<img alt="" className="w-12 h-12 object-cover bg-center border-[#EBE5DA] border-2 rounded-full" src="https://images.unsplash.com/photo-1594470643046-8255fe0a2911?w=320&amp;q=80"/>
<div className="w-12 h-12 rounded-full border-2 border-[#EBE5DA] bg-white flex items-center justify-center text-xs font-semibold text-[#0F0B08] font-poppins" style={{}}>+2k</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F5F2EB] pt-24 pb-24">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-5xl text-[#0F0B08] tracking-tight mb-16 font-newsreader font-light reveal delay-100" style={{}}>What Our Customers Say</h2>
<div className="relative reveal delay-200">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
<img alt="Reviewer" className="w-20 h-20 object-cover bg-center border-[#F5F2EB] border-4 rounded-full shadow-lg" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=320&amp;q=80"/>
</div>
<div className="bg-[#0F0B08] rounded-2xl p-12 pt-16 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C8A67B] to-transparent opacity-50"></div>
<div className="flex justify-center gap-1 text-[#C8A67B] mb-6">
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-2xl text-[#F5F2EB] leading-relaxed mb-8 font-newsreader font-light" style={{}}>
                        "I have tasted coffee in many places, but Café Botanica is on another level. The combination of atmosphere and the extraordinary bold flavors is unmatched. I will order from here for all my coffee needs."
                    </p>
<h4 className="text-[#F5F2EB] text-lg font-medium tracking-wide font-poppins" style={{}}>Madeline Hayden</h4>
<span className="text-[#9A948D] text-sm uppercase tracking-wider font-poppins" style={{}}>Coffee Enthusiast</span>
</div>
</div>
</div>
</section>

<section className="bg-[#0F0B08] border-white/10 border-t pt-20 pb-20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
<div className="reveal delay-100">
<h2 className="text-4xl text-[#F5F2EB] tracking-tight mb-4 font-newsreader font-light" style={{}}>Stay Up To Date On  News And Offers.</h2>
<p className="text-lg text-[#9A948D] font-light font-poppins" style={{}}>Join 15,000+ others and get exclusive access.</p>
</div>
<div className="reveal delay-200">
<form className="flex flex-col sm:flex-row gap-4">
<div className="flex-grow relative">
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-[#F5F2EB] placeholder-[#9A948D] focus:outline-none focus:border-[#C8A67B] focus:ring-1 focus:ring-[#C8A67B] transition-all" placeholder="Enter your email address" type="email"/>
</div>
<button className="bg-[#C8A67B] text-[#0F0B08] px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#F5F2EB] transition-colors flex items-center justify-center" type="submit">
<svg className="lucide lucide-arrow-right w-6 h-6" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</form>
<p className="text-[#5A544F] text-sm mt-4 font-poppins" style={{}}>By subscribing you agree to our Terms &amp; Privacy Policy.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/10 pt-16">
<div className="space-y-6 reveal delay-100">
<span className="text-[#E8DCC8] text-3xl tracking-tight font-newsreader font-light" style={{}}>Café Botanica</span>
<p className="text-[#9A948D] text-lg font-light leading-relaxed font-poppins" style={{}}>
                        Crafting the perfect cup since 2010. Dedicated to sustainable sourcing and artisanal roasting.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#E8DCC8] hover:bg-[#C8A67B] hover:text-[#0F0B08] transition-all" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#E8DCC8] hover:bg-[#C8A67B] hover:text-[#0F0B08] transition-all" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#E8DCC8] hover:bg-[#C8A67B] hover:text-[#0F0B08] transition-all" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
</div>
</div>
<div className="reveal delay-200">
<h4 className="text-[#F5F2EB] text-lg font-medium mb-6 font-poppins" style={{}}>Contact Us</h4>
<div className="space-y-4">
<a className="block text-[#9A948D] text-lg hover:text-[#C8A67B] transition-colors font-poppins" href="mailto:hello@cafebotanica.com" style={{}}>hello@cafebotanica.com</a>
<a className="block text-[#9A948D] text-lg hover:text-[#C8A67B] transition-colors font-poppins" href="tel:+1234567890" style={{}}>(555) 123-4567</a>
<p className="text-[#9A948D] text-lg font-poppins" style={{}}>123 Artisan Ave,Portland, OR 97209</p>
</div>
</div>
<div className="reveal delay-300">
<h4 className="text-[#F5F2EB] text-lg font-medium mb-6 font-poppins" style={{}}>Company</h4>
<ul className="space-y-4">
<li className=""><a className="text-[#9A948D] text-lg hover:text-[#C8A67B] transition-colors font-poppins" href="#" style={{}}>About Us</a></li>
<li className=""><a className="text-[#9A948D] text-lg hover:text-[#C8A67B] transition-colors font-poppins" href="#" style={{}}>Careers</a></li>
<li><a className="text-[#9A948D] text-lg hover:text-[#C8A67B] transition-colors font-poppins" href="#" style={{}}>Locations</a></li>
<li><a className="text-[#9A948D] text-lg hover:text-[#C8A67B] transition-colors font-poppins" href="#" style={{}}>Blog</a></li>
</ul>
</div>
<div className="relative overflow-hidden rounded-lg group cursor-pointer reveal delay-400">
<img alt="Latte Art" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-80" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-xl italic text-[#F5F2EB] font-serif border-[#C8A67B] border-b">#CafeBotanica</span>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 reveal delay-500">
<p className="text-[#5A544F] text-base font-poppins" style={{}}>© 2024 Café Botanica. All rights reserved.</p>
<div className="flex gap-8">
<a className="text-[#5A544F] text-base hover:text-[#9A948D] transition-colors font-poppins" href="#" style={{}}>Privacy</a>
<a className="text-[#5A544F] text-base hover:text-[#9A948D] transition-colors font-poppins" href="#" style={{}}>Terms</a>
<a className="text-[#5A544F] text-base hover:text-[#9A948D] transition-colors font-poppins" href="#" style={{}}>Sitemap</a>
</div>
</div>
</div>
</section>


    </>
  );
}
