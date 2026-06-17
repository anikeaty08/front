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

        function handleSubmit(e) {
            e.preventDefault();
            const btn = document.getElementById('submitBtn');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = 'Sending...';
            btn.classList.add('opacity-75', 'cursor-not-allowed');
            
            setTimeout(() => {
                btn.innerHTML = 'Message Sent!';
                btn.classList.remove('bg-[#8B4513]', 'hover:bg-[#a05a2c]');
                btn.classList.add('bg-[#228B22]', 'hover:bg-[#1a6b1a]', 'text-white');
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.classList.remove('bg-[#228B22]', 'hover:bg-[#1a6b1a]', 'text-white', 'opacity-75', 'cursor-not-allowed');
                    btn.classList.add('bg-[#8B4513]', 'hover:bg-[#a05a2c]', 'text-[#FFD700]');
                    e.target.reset();
                    lucide.createIcons();
                }, 3000);
            }, 1500);
        }
    
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
      

<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-[#FDFBF7]/90 border-b border-[#8B4513]/10">
<div className="max-w-screen-2xl mx-auto px-6 h-24 flex items-center justify-between">

<a className="block group cursor-pointer" href="#">

<img alt="BRA'S Beer Logo" className="h-16 w-auto object-contain transition-transform group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/781bbf5c-bf3f-4008-ac84-e1b14021b2ef_320w.png?w=800&amp;q=80"/>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-xs font-semibold uppercase tracking-widest text-[#5c3a21] hover:text-[#8B4513] transition-colors" href="#heritage">Heritage</a>
<a className="text-xs font-semibold uppercase tracking-widest text-[#5c3a21] hover:text-[#8B4513] transition-colors" href="#products">Products</a>
<a className="text-xs font-semibold uppercase tracking-widest text-[#5c3a21] hover:text-[#8B4513] transition-colors" href="#distribution">Distribution</a>
<a className="text-xs font-semibold uppercase tracking-widest text-[#5c3a21] hover:text-[#8B4513] transition-colors" href="#news">News</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-xs font-semibold bg-[#8B4513] text-[#FFD700] px-6 py-3 rounded-full hover:bg-[#5c3a21] transition-all hover:scale-105 shadow-lg shadow-[#8B4513]/20" href="#locator">
<span>Find a Store</span>
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</a>
<button className="md:hidden text-[#8B4513]">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</header>

<section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden flex flex-col justify-center">

<div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFD700] rounded-full blur-[120px] mix-blend-multiply"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#8B4513] rounded-full blur-[120px] mix-blend-multiply"></div>
</div>
<div className="relative z-10 max-w-screen-xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="fade-enter space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B4513]/5 border border-[#8B4513]/10 text-[#8B4513] text-xs font-semibold uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-[#228B22]"></span>
                    Premium Sorghum Brew
                </div>
<h1 className="md:text-7xl lg:text-8xl leading-[0.9] text-5xl font-semibold text-[#8B4513] tracking-tighter">
                    Tastes Like <br/>
<span className="text-gradient-gold">Home.</span>
</h1>
<p className="text-[#5c3a21] text-base md:text-lg max-w-lg leading-relaxed font-medium">
                    A Lekker Legacy in every sip. BRA'S Beer blends generations of brewing knowledge with pure sorghum to bring you the authentic taste of South Africa.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="flex items-center justify-center gap-2 bg-[#8B4513] text-[#FFD700] px-8 py-4 rounded-lg font-semibold text-sm transition-transform hover:-translate-y-1 hover:shadow-xl shadow-[#8B4513]/20" href="#products">
                        Discover BRA'S Beer
                        <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="flex items-center justify-center gap-2 bg-white border border-[#8B4513]/20 text-[#8B4513] px-8 py-4 rounded-lg font-semibold text-sm hover:bg-[#FDFBF7] transition-colors" href="#distribution">
                        Become a Distributor
                    </a>
</div>
</div>

<div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden bg-[#e8e4dc] border border-[#8B4513]/10 shadow-2xl flex items-center justify-center group">

<div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" style={{}}></div>

<div className="relative w-64 md:w-80 h-auto aspect-[3/5] transition-transform duration-700 group-hover:scale-105 z-10">

<img alt="BRA'S Beer Carton" className="w-full h-full object-contain drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d043590e-1224-4c85-8851-4c4128e3afa1_800w.png?w=800&amp;q=80"/>
</div>

<div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur border border-[#8B4513]/10 px-4 py-3 rounded-xl shadow-lg animate-bounce duration-[3000ms] z-20">
<div className="flex items-center gap-3">
<div className="bg-[#228B22]/10 p-2 rounded-lg text-[#228B22]">
<svg className="lucide lucide-leaf w-4 h-4" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<div>
<p className="text-xs font-bold text-[#8B4513]">100% Natural</p>
<p className="text-[10px] text-[#5c3a21]">No Preservatives</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-[#8B4513]/10" id="heritage">
<div className="max-w-screen-2xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-4xl md:text-5xl font-semibold text-[#8B4513] tracking-tight mb-4">Join the <span className="text-[#FFD700]">#SipTheHeritage</span></h2>
<p className="text-[#5c3a21] text-sm md:text-base leading-relaxed">
                        More than just a beer, BRA'S Beer is a celebration of Ubuntu. We honor the African brewing traditions passed down through generations.
                    </p>
</div>
<button className="text-xs font-bold uppercase tracking-widest text-[#8B4513] border-b border-[#8B4513] pb-1 hover:text-[#FFD700] hover:border-[#FFD700] transition-colors">
                    Read Our Story
                </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#8B4513]/10 border border-[#8B4513]/10 rounded-2xl overflow-hidden">

<div className="bg-[#FDFBF7] p-8 md:p-10 hover:bg-[#fafaf5] transition-colors group relative overflow-hidden">
<div className="absolute top-4 right-4 w-12 h-12 opacity-10 grayscale group-hover:grayscale-0 transition-all">
<img alt="Small Carton" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/58525d10-d92a-4f36-beb7-d45bbda6b7be_1600w.png?w=800&amp;q=80"/>
</div>
<svg className="lucide lucide-history w-8 h-8 text-[#FFD700] mb-6 stroke-[1.5]" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
<h3 className="text-3xl font-semibold text-[#8B4513] mb-2">50+</h3>
<p className="text-xs font-semibold uppercase tracking-wider text-[#5c3a21]">Years of Heritage</p>
<p className="text-xs text-neutral-500 mt-4 leading-relaxed">Rooted in deep brewing knowledge passed down.</p>
</div>

<div className="bg-[#FDFBF7] p-8 md:p-10 hover:bg-[#fafaf5] transition-colors group relative overflow-hidden">
<div className="absolute top-4 right-4 w-12 h-12 opacity-10 grayscale group-hover:grayscale-0 transition-all">
<img alt="Small Carton" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e752b521-de4d-4042-9c15-a5c9f49cc138_320w.png"/>
</div>
<svg className="lucide lucide-users w-8 h-8 text-[#FFD700] mb-6 stroke-[1.5]" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<h3 className="text-3xl font-semibold text-[#8B4513] mb-2">Ubuntu</h3>
<p className="text-xs font-semibold uppercase tracking-wider text-[#5c3a21]">Community Spirit</p>
<p className="text-xs text-neutral-500 mt-4 leading-relaxed">Brewed to bring people together for every occasion.</p>
</div>

<div className="bg-[#FDFBF7] p-8 md:p-10 hover:bg-[#fafaf5] transition-colors group relative overflow-hidden">
<div className="absolute top-4 right-4 w-12 h-12 opacity-10 grayscale group-hover:grayscale-0 transition-all">
<img alt="Small Carton" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a3aa8cb7-d57f-463c-9ede-a3247d168574_320w.png"/>
</div>
<svg className="lucide lucide-droplet w-8 h-8 text-[#FFD700] mb-6 stroke-[1.5]" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
<h3 className="text-3xl font-semibold text-[#8B4513] mb-2">Daily</h3>
<p className="text-xs font-semibold uppercase tracking-wider text-[#5c3a21]">Fresh Brewing</p>
<p className="text-xs text-neutral-500 mt-4 leading-relaxed">Fermented to perfection and delivered fresh.</p>
</div>

<div className="bg-[#FDFBF7] p-8 md:p-10 hover:bg-[#fafaf5] transition-colors group relative overflow-hidden">
<div className="absolute top-4 right-4 w-12 h-12 opacity-10 grayscale group-hover:grayscale-0 transition-all">
<img alt="Small Carton" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cc267ca-8000-4d57-94b1-4217e06d4005_320w.png"/>
</div>
<svg className="lucide lucide-recycle w-8 h-8 text-[#228B22] mb-6 stroke-[1.5]" data-lucide="recycle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"></path><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"></path><path d="m14 16-3 3 3 3"></path><path d="M8.293 13.596 7.196 9.5 3.1 10.598"></path><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"></path><path d="m13.378 9.633 4.096 1.098 1.097-4.096"></path></svg>
<h3 className="text-3xl font-semibold text-[#8B4513] mb-2">100%</h3>
<p className="text-xs font-semibold uppercase tracking-wider text-[#5c3a21]">Recyclable Carton</p>
<p className="text-xs text-neutral-500 mt-4 leading-relaxed">Sustainability in every 1L pack of BRA'S Beer.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#1a1a1a] text-[#f5f5dc] relative overflow-hidden" id="products">

<div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
<div className="max-w-screen-xl mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-5 relative group">
<div className="absolute inset-0 bg-[#FFD700] rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
<div className="relative bg-gradient-to-b from-[#2a2a2a] to-[#111] border border-white/10 rounded-2xl p-8 md:p-12 aspect-[4/5] flex items-center justify-center">

<div className="relative w-full h-full flex items-center justify-center">
<img alt="BRA'S Beer 1L Carton" className="w-auto h-full max-h-[450px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/11fb878e-4272-4d27-aaec-9ca2e3389fb1_1600w.png?w=800&amp;q=80"/>
</div>
</div>
</div>

<div className="lg:col-span-7 space-y-10">
<div>
<span className="text-[#FFD700] text-xs font-bold uppercase tracking-widest mb-2 block">Our Flagship</span>
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6">BRA'S Beer<br/>Traditional Sorghum</h2>
<p className="text-neutral-400 text-lg leading-relaxed max-w-xl">
                            Rich, creamy, and fermented to perfection. Our 1-litre carton packs the punch of tradition with the convenience of modern living.
                        </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 border-t border-white/10 pt-8">
<div>
<h4 className="text-white font-medium mb-2 flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-[#FFD700]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Sorghum &amp; Maize
                            </h4>
<p className="text-sm text-neutral-500">Locally sourced grains for authentic flavor profile.</p>
</div>
<div>
<h4 className="text-white font-medium mb-2 flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-[#FFD700]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Live Fermentation
                            </h4>
<p className="text-sm text-neutral-500">Active cultures for that distinct zing and foam.</p>
</div>
<div>
<h4 className="text-white font-medium mb-2 flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-[#FFD700]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Rich in Energy
                            </h4>
<p className="text-sm text-neutral-500">A nutritious source of energy and B-vitamins.</p>
</div>
<div>
<h4 className="text-white font-medium mb-2 flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-[#FFD700]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 1 Litre Carton
                            </h4>
<p className="text-sm text-neutral-500">Convenient, resealable, and perfect for sharing.</p>
</div>
</div>
<div className="flex items-center gap-6 pt-4">
<button className="bg-[#FFD700] hover:bg-[#e6c200] text-[#8B4513] px-8 py-4 rounded-lg font-bold text-sm transition-all hover:scale-105">
                            Order Now
                        </button>
<a className="text-sm text-white hover:text-[#FFD700] transition-colors flex items-center gap-2" href="#process">
                            See how it's made <svg className="lucide lucide-arrow-down w-4 h-4" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#FDFBF7]" id="process">
<div className="max-w-screen-xl mx-auto">
<div className="mb-16">
<span className="text-[#228B22] text-xs font-bold uppercase tracking-widest mb-2 block">Purity in Every Drop</span>
<h2 className="text-3xl md:text-5xl font-semibold text-[#8B4513] tracking-tight">The Brewing Process</h2>
</div>
<div className="space-y-4">

<div className="group border border-[#8B4513]/10 bg-white rounded-xl p-6 md:p-8 hover:border-[#8B4513]/30 transition-all cursor-default shadow-sm hover:shadow-md flex items-center gap-6">
<div className="hidden sm:block w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-100">
<img alt="Grains" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://dummyimage.com/200x200/transparent/8B4513?text=Grains"/>
</div>
<div>
<div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
<span className="text-[#8B4513]/50 font-mono font-bold">01</span>
<h3 className="text-xl font-semibold text-[#1a1a1a]">Sourcing the Grain</h3>
</div>
<p className="text-sm text-[#5c3a21]/70 leading-relaxed max-w-2xl">We select only the finest grade sorghum and maize from local South African farmers, ensuring quality starts from the soil.</p>
</div>
</div>

<div className="group border border-[#8B4513]/10 bg-white rounded-xl p-6 md:p-8 hover:border-[#8B4513]/30 transition-all cursor-default shadow-sm hover:shadow-md flex items-center gap-6">
<div className="hidden sm:block w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-100">
<img alt="Boiling" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://dummyimage.com/200x200/transparent/8B4513?text=Boiling"/>
</div>
<div>
<div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
<span className="text-[#8B4513]/50 font-mono font-bold">02</span>
<h3 className="text-xl font-semibold text-[#1a1a1a]">Mashing &amp; Boiling</h3>
</div>
<p className="text-sm text-[#5c3a21]/70 leading-relaxed max-w-2xl">The grains are cooked at precise temperatures to release sugars and starches, creating the perfect base for fermentation.</p>
</div>
</div>

<div className="group border border-[#8B4513]/10 bg-white rounded-xl p-6 md:p-8 hover:border-[#8B4513]/30 transition-all cursor-default shadow-sm hover:shadow-md flex items-center gap-6">
<div className="hidden sm:block w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-100">
<img alt="Fermentation" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://dummyimage.com/200x200/transparent/8B4513?text=Fermentation"/>
</div>
<div>
<div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
<span className="text-[#8B4513]/50 font-mono font-bold">03</span>
<h3 className="text-xl font-semibold text-[#1a1a1a]">Fermentation</h3>
</div>
<p className="text-sm text-[#5c3a21]/70 leading-relaxed max-w-2xl">The magic happens here. We allow the brew to ferment naturally, developing that distinct sour profile and rich texture.</p>
</div>
</div>

<div className="group border border-[#8B4513]/10 bg-white rounded-xl p-6 md:p-8 hover:border-[#8B4513]/30 transition-all cursor-default shadow-sm hover:shadow-md flex items-center gap-6">
<div className="hidden sm:block w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-100">
<img alt="Packaging" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://dummyimage.com/200x200/transparent/8B4513?text=Packaging"/>
</div>
<div>
<div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
<span className="text-[#8B4513]/50 font-mono font-bold">04</span>
<h3 className="text-xl font-semibold text-[#1a1a1a]">Packaging</h3>
</div>
<p className="text-sm text-[#5c3a21]/70 leading-relaxed max-w-2xl">Immediately packaged into our sterile 1-litre cartons to lock in freshness and taste for your enjoyment.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-[#8B4513]/10 bg-white" id="distribution">
<div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div className="">
<span className="text-[#FFD700] text-xs font-bold uppercase tracking-widest mb-2 block">Business Opportunity</span>
<h2 className="text-4xl md:text-5xl font-semibold text-[#8B4513] tracking-tight mb-6">Distribute BRA'S Beer</h2>
<p className="text-[#5c3a21] text-base leading-relaxed mb-8">
                    Join our growing network of distributors. Whether you have a retail outlet, a tavern, or a logistics fleet, BRA'S Beer offers a profitable partnership model.
                </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-[#228B22]/10 flex items-center justify-center text-[#228B22]"><svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-sm font-medium text-[#1a1a1a]">Competitive wholesale pricing</span>
</li>
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-[#228B22]/10 flex items-center justify-center text-[#228B22]"><svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-sm font-medium text-[#1a1a1a]">Marketing support &amp; signage</span>
</li>
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-[#228B22]/10 flex items-center justify-center text-[#228B22]"><svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-sm font-medium text-[#1a1a1a]">Dedicated account manager</span>
</li>
</ul>
<a className="inline-flex items-center gap-2 text-sm font-bold text-[#8B4513] border-b-2 border-[#8B4513] pb-1 hover:text-[#FFD700] hover:border-[#FFD700] transition-colors" href="#contact">
                    Apply to be a Distributor <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="bg-[#FDFBF7] rounded-2xl border border-[#8B4513]/10 p-6 shadow-lg flex flex-col h-[500px]" id="locator">
<div className="mb-4">
<h3 className="text-lg font-bold text-[#8B4513] mb-4">Where to Buy BRA'S Beer</h3>
<div className="relative">
<svg className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full bg-white border border-[#8B4513]/10 rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#8B4513] transition-colors text-[#5c3a21]" placeholder="Enter your suburb or code..." type="text"/>
</div>
</div>

<div className="flex-1 bg-[#e5e0d8] rounded-lg relative overflow-hidden group">

<img className="w-full h-full object-cover opacity-30 grayscale" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&amp;fit=crop&amp;q=80&amp;w=1000&amp;sat=-100"/>

<div className="absolute top-1/3 left-1/4 w-8 h-8 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform z-10">
<div className="w-8 h-8 bg-[#8B4513] rounded-full flex items-center justify-center text-white shadow-xl border-2 border-white">
<img alt="Pin" className="w-full h-full object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b110630-a759-4f83-a0c2-1545abd2d201_320w.png"/>
</div>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white px-3 py-1 rounded shadow text-[10px] font-bold whitespace-nowrap hidden group-hover:block text-[#8B4513]">BRA'S Depot JHB</div>
</div>
<div className="absolute top-2/3 right-1/3 w-8 h-8 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform">
<div className="w-8 h-8 bg-[#8B4513] rounded-full flex items-center justify-center text-white shadow-xl border-2 border-white">
<img alt="Pin" className="w-full h-full object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dfc7f8ea-374b-4749-b05f-0e74d5c5d728_320w.png"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#FDFBF7]" id="news">
<div className="max-w-screen-2xl mx-auto">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl md:text-4xl font-semibold text-[#8B4513] tracking-tight">Latest News</h2>
<a className="hidden md:flex text-xs font-semibold text-[#5c3a21] hover:text-[#8B4513] items-center gap-1" href="#">
                    View Archive <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="group cursor-pointer">
<div className="aspect-[16/9] bg-neutral-200 rounded-lg overflow-hidden mb-4 relative">
<div className="absolute inset-0 bg-[#8B4513]/20 group-hover:bg-[#8B4513]/0 transition-colors z-10"></div>
<img alt="News Image" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79c1f966-ef8d-48ce-b7ff-21cdd3034b2d_800w.jpg"/>
</div>
<span className="text-[10px] font-bold text-[#FFD700] uppercase tracking-widest bg-[#8B4513] px-2 py-0.5 rounded-sm">Events</span>
<h3 className="text-lg font-semibold text-[#1a1a1a] mt-3 group-hover:text-[#8B4513] transition-colors">Soweto Heritage Festival Recap</h3>
<p className="text-xs text-[#5c3a21] mt-2 line-clamp-2">BRA'S Beer was proud to be the official beverage partner for this year's celebration of culture.</p>
</article>

<article className="group cursor-pointer">
<div className="aspect-[16/9] bg-neutral-200 rounded-lg overflow-hidden mb-4 relative">
<div className="absolute inset-0 bg-[#8B4513]/20 group-hover:bg-[#8B4513]/0 transition-colors z-10"></div>
<img alt="News Image" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d7c36fc-0d8d-46a4-ac8a-a5c12049c4c6_800w.png"/>
</div>
<span className="text-[10px] font-bold text-[#228B22] uppercase tracking-widest bg-[#228B22]/10 px-2 py-0.5 rounded-sm">Sustainability</span>
<h3 className="text-lg font-semibold text-[#1a1a1a] mt-3 group-hover:text-[#8B4513] transition-colors">Our New Eco-Friendly Carton</h3>
<p className="text-xs text-[#5c3a21] mt-2 line-clamp-2">Moving towards a greener future with 100% recyclable materials starting next month.</p>
</article>

<article className="group cursor-pointer">
<div className="aspect-[16/9] bg-neutral-200 rounded-lg overflow-hidden mb-4 relative">
<div className="absolute inset-0 bg-[#8B4513]/20 group-hover:bg-[#8B4513]/0 transition-colors z-10"></div>
<img alt="News Image" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/50c6d569-1567-42fe-9988-41d179c583ed_800w.jpg" style={{}}/>
</div>
<span className="text-[10px] font-bold text-[#8B4513] uppercase tracking-widest bg-[#8B4513]/10 px-2 py-0.5 rounded-sm">Community</span>
<h3 className="text-lg font-semibold text-[#1a1a1a] mt-3 group-hover:text-[#8B4513] transition-colors">Empowering Local Farmers</h3>
<p className="text-xs text-[#5c3a21] mt-2 line-clamp-2">How our procurement process supports small-scale maize and sorghum farmers.</p>
</article>
</div>
</div>
</section>

<section className="bg-[#1a1a1a] text-white py-24 px-6 border-t border-white/5" id="contact">
<div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="space-y-8">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">Let's Connect</h2>
<p className="text-neutral-400 max-w-sm">Whether you want to stock BRA'S Beer or just want to say hello, we'd love to hear from you.</p>
<div className="space-y-4 pt-4">
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#FFD700] group-hover:bg-[#FFD700] group-hover:text-[#8B4513] transition-colors">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<a className="text-sm font-medium hover:text-[#FFD700] transition-colors" href="mailto:sales@myurbanafrica.co.za">sales@myurbanafrica.co.za</a>
</div>
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#FFD700] group-hover:bg-[#FFD700] group-hover:text-[#8B4513] transition-colors">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<a className="text-sm font-medium hover:text-[#FFD700] transition-colors" href="tel:+27123456789">+27 (0) 12 345 6789</a>
</div>
</div>
</div>

<form className="bg-[#222] p-8 rounded-2xl border border-white/5 shadow-2xl space-y-6" onsubmit="handleSubmit(event)">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs uppercase font-bold text-neutral-500 tracking-wider">First Name</label>
<input className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FFD700] transition-colors placeholder:text-neutral-700" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase font-bold text-neutral-500 tracking-wider">Email</label>
<input className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FFD700] transition-colors placeholder:text-neutral-700" required="" type="email"/>
</div>
</div>
<div className="space-y-3">
<label className="text-xs uppercase font-bold text-neutral-500 tracking-wider">I am interested in</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<label className="cursor-pointer relative">
<input className="custom-checkbox hidden" name="interest" type="checkbox"/>
<div className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg border border-white/10 bg-[#1a1a1a] text-xs text-neutral-400 hover:border-white/20 transition-all select-none">
<svg className="lucide lucide-check w-3 h-3 hidden text-[#FFD700]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Distribution
                            </div>
</label>
<label className="cursor-pointer relative">
<input className="custom-checkbox hidden" name="interest" type="checkbox"/>
<div className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg border border-white/10 bg-[#1a1a1a] text-xs text-neutral-400 hover:border-white/20 transition-all select-none">
<svg className="lucide lucide-check w-3 h-3 hidden text-[#FFD700]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Retail
                            </div>
</label>
<label className="cursor-pointer relative">
<input className="custom-checkbox hidden" name="interest" type="checkbox"/>
<div className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg border border-white/10 bg-[#1a1a1a] text-xs text-neutral-400 hover:border-white/20 transition-all select-none">
<svg className="lucide lucide-check w-3 h-3 hidden text-[#FFD700]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> General
                            </div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase font-bold text-neutral-500 tracking-wider">Message</label>
<textarea className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FFD700] transition-colors placeholder:text-neutral-700 resize-none" rows="4"></textarea>
</div>
<button className="w-full bg-[#8B4513] hover:bg-[#a05a2c] text-[#FFD700] py-4 rounded-lg font-bold uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-2" id="submitBtn" type="submit">
                    Send Enquiry <svg className="lucide lucide-send w-3 h-3" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</form>
</div>
</section>

<footer className="bg-[#111] border-t border-white/10 pt-16 pb-8 px-6">
<div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div>
<div className="flex items-center gap-2 mb-6">
<img alt="BRA'S Beer Logo" className="h-10 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dfc7f8ea-374b-4749-b05f-0e74d5c5d728_320w.png?w=800&amp;q=80" style={{}}/>
</div>
<p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
                    Authentic South African sorghum beer, brewed with heritage, passion and the spirit of Ubuntu.
                </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
<div className="flex flex-col gap-3">
<h4 className="text-xs font-bold text-white uppercase tracking-widest mb-1">Explore</h4>
<a className="text-xs text-neutral-500 hover:text-[#FFD700] transition-colors" href="#products">Products</a>
<a className="text-xs text-neutral-500 hover:text-[#FFD700] transition-colors" href="#heritage">Heritage</a>
<a className="text-xs text-neutral-500 hover:text-[#FFD700] transition-colors" href="#distribution">Distribution</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-bold text-white uppercase tracking-widest mb-1">Legal</h4>
<a className="text-xs text-neutral-500 hover:text-[#FFD700] transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-neutral-500 hover:text-[#FFD700] transition-colors" href="#">Terms of Use</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-bold text-white uppercase tracking-widest mb-1">Social</h4>
<a className="text-xs text-neutral-500 hover:text-[#FFD700] transition-colors" href="#">Facebook</a>
<a className="text-xs text-neutral-500 hover:text-[#FFD700] transition-colors" href="#">Instagram</a>
<a className="text-xs text-neutral-500 hover:text-[#FFD700] transition-colors" href="#">LinkedIn</a>
</div>
</div>
</div>
<div className="max-w-screen-2xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-neutral-600 uppercase tracking-widest">© 2023 BRA'S Beer Traditional Sorghum. All Rights Reserved.</p>
<div className="flex items-center gap-2 text-[10px] text-neutral-600 uppercase tracking-widest">
<span>Proudly South African</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#FFD700]"></span>
</div>
</div>
</footer>


    </>
  );
}
