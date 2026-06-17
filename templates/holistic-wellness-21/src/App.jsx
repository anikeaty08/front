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



        // Initialize Lucide Icons
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
      

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">

<div className="w-8 h-8 rounded-full bg-[#cdff00] flex items-center justify-center">
<div className="w-3 h-3 bg-black rounded-full"></div>
</div>
<span className="font-serif text-2xl tracking-tight font-medium">eyeam</span>
</div>
<div className="hidden md:flex items-center gap-8 text-base text-gray-600 font-medium">
<a className="hover:text-black transition-colors" href="#">Shop</a>
<a className="hover:text-black transition-colors" href="#">Our Story</a>
<a className="hover:text-black transition-colors" href="#">Rituals</a>
<a className="hover:text-black transition-colors" href="#">Journal</a>
</div>
<button className="bg-black text-white px-6 py-2.5 rounded-full text-base font-medium hover:bg-[#cdff00] hover:text-black transition-all duration-300 border border-transparent hover:border-black/10">
                Get Started
            </button>
</div>
</nav>

<section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#cdff00]/20 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/4"></div>
<div className="max-w-4xl mx-auto text-center px-6 mb-16">
<span className="inline-block py-1 px-4 rounded-full border border-gray-200 bg-gray-50 text-sm font-medium tracking-wide uppercase text-gray-500 mb-6">
                Psycho-dermatology meets Ritual
            </span>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight font-medium text-black mb-8">
                It's not just skincare.<br/>
<span className="italic text-gray-500">It's soulcare.</span>
</h1>
<p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed mb-10">
                Align your mind, body, and skin. A holistic system combining clinical actives with breathwork and affirmations.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-[#cdff00] text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-[#bceb00] transition-colors shadow-[0_10px_30px_rgba(205,255,0,0.4)]">
                    Start Your 14-Day Trial
                </button>
<button className="w-full sm:w-auto px-8 py-4 rounded-full text-lg font-medium border border-gray-200 hover:border-black transition-colors flex items-center justify-center gap-2 group">
<i className="w-5 h-5 group-hover:fill-black transition-all" data-lucide="play-circle"></i>
                    Watch the Ritual
                </button>
</div>
<p className="mt-4 text-sm text-gray-400">14-day free trial • Cancel anytime</p>
</div>

<div className="max-w-6xl mx-auto px-6 relative">

<div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 aspect-[16/9] md:aspect-[21/9]">
<img alt="Woman applying skincare" className="absolute inset-0 w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent"></div>

<div className="absolute bottom-[-50px] left-10 md:left-20 w-48 md:w-64">
<img alt="Serum Bottle" className="rounded-2xl shadow-lg border-4 border-white rotate-[-6deg]" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-x-1/3 md:translate-y-1/4 w-[90%] md:w-[420px] bg-white rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.1)] border border-gray-100 p-8 z-20">

<div className="flex justify-center mb-8">
<div className="bg-gray-100 p-1.5 rounded-full flex items-center relative">
<div className="absolute left-1.5 top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white rounded-full shadow-sm z-0"></div>
<button className="relative z-10 px-6 py-1.5 text-sm font-medium text-black">Monthly</button>
<button className="relative z-10 px-6 py-1.5 text-sm font-medium text-gray-500">Yearly</button>
</div>
</div>
<div className="text-center mb-8">
<div className="flex items-center justify-center gap-2 mb-2">
<span className="text-gray-400 line-through text-xl">$120</span>
<span className="bg-[#cdff00] text-black text-xs font-semibold px-2 py-0.5 rounded-md uppercase tracking-wider">Save 30%</span>
</div>
<div className="flex items-baseline justify-center gap-1">
<span className="text-6xl font-serif font-medium tracking-tight">$89</span>
<span className="text-gray-500">/year</span>
</div>
<p className="text-sm text-gray-400 mt-2">Billed annually after 14-day trial</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-[#cdff00] flex items-center justify-center mt-1 flex-shrink-0">
<i className="w-3 h-3 text-black" data-lucide="check"></i>
</div>
<span className="text-base text-gray-600">Full access to ritual library</span>
</li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-[#cdff00] flex items-center justify-center mt-1 flex-shrink-0">
<i className="w-3 h-3 text-black" data-lucide="check"></i>
</div>
<span className="text-base text-gray-600">Quarterly wellness box delivered</span>
</li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-[#cdff00] flex items-center justify-center mt-1 flex-shrink-0">
<i className="w-3 h-3 text-black" data-lucide="check"></i>
</div>
<span className="text-base text-gray-600">Personalized hormone tracking</span>
</li>
</ul>
<button className="w-full bg-black text-white py-4 rounded-xl text-lg font-medium hover:bg-[#cdff00] hover:text-black transition-all">
                    Start Free Trial
                </button>
</div>
</div>
</section>

<section className="py-12 border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm text-gray-400 uppercase tracking-widest mb-8">As seen in</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale">

<span className="font-serif text-2xl md:text-3xl font-bold italic">VOGUE</span>
<span className="font-serif text-2xl md:text-3xl font-bold">ELLE</span>
<span className="font-sans text-xl md:text-2xl font-bold tracking-tighter">mindbodygreen</span>
<span className="font-serif text-2xl md:text-3xl font-bold">Goop</span>
<span className="font-sans text-xl md:text-2xl font-bold tracking-tight">Refinery29</span>
</div>
</div>
</section>

<section className="py-32 bg-gray-50">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="flex justify-center gap-1 mb-6">
<i className="w-6 h-6 fill-[#cdff00] text-[#cdff00]" data-lucide="star"></i>
<i className="w-6 h-6 fill-[#cdff00] text-[#cdff00]" data-lucide="star"></i>
<i className="w-6 h-6 fill-[#cdff00] text-[#cdff00]" data-lucide="star"></i>
<i className="w-6 h-6 fill-[#cdff00] text-[#cdff00]" data-lucide="star"></i>
<i className="w-6 h-6 fill-[#cdff00] text-[#cdff00]" data-lucide="star"></i>
</div>
<h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight mb-8">
                "Eyeam completely changed my relationship with my skin. It's not just a routine, it's a reset button for my anxiety."
            </h2>
<div className="flex items-center justify-center gap-4">
<img alt="User" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="text-left">
<p className="font-medium text-black text-base">Sarah Jenkins</p>
<p className="text-sm text-gray-500">Verified Buyer</p>
</div>
</div>
</div>
</section>

<section className="py-32">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-24">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-6">The Eyeam Method</h2>
<p className="text-xl text-gray-600 max-w-2xl mx-auto">Three simple steps to bridge the gap between your emotions and your complexion.</p>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gray-200 to-transparent -z-10"></div>

<div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500">
<div className="w-24 h-24 bg-[#cdff00]/20 rounded-full flex items-center justify-center mb-8 mx-auto relative backdrop-blur-sm">
<span className="absolute -top-2 -right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-serif text-lg">1</span>
<i className="w-10 h-10 text-black stroke-[1.5]" data-lucide="sparkles"></i>
</div>
<h3 className="font-serif text-2xl mb-4 text-center">Affirm</h3>
<p className="text-gray-600 text-center leading-relaxed">
                        Scan the QR code on your product. Receive a daily affirmation and short breathwork audio tailored to your hormonal cycle.
                    </p>
</div>

<div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500">
<div className="w-24 h-24 bg-[#cdff00]/40 rounded-full flex items-center justify-center mb-8 mx-auto relative backdrop-blur-sm">
<span className="absolute -top-2 -right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-serif text-lg">2</span>
<i className="w-10 h-10 text-black stroke-[1.5]" data-lucide="droplet"></i>
</div>
<h3 className="font-serif text-2xl mb-4 text-center">Apply</h3>
<p className="text-gray-600 text-center leading-relaxed">
                        Apply our clinical-grade formulations. Ingredients like adaptogens and magnesium work transdermally to lower cortisol.
                    </p>
</div>

<div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500">
<div className="w-24 h-24 bg-[#cdff00] rounded-full flex items-center justify-center mb-8 mx-auto relative backdrop-blur-sm">
<span className="absolute -top-2 -right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-serif text-lg">3</span>
<i className="w-10 h-10 text-black stroke-[1.5]" data-lucide="sun"></i>
</div>
<h3 className="font-serif text-2xl mb-4 text-center">Align</h3>
<p className="text-gray-600 text-center leading-relaxed">
                        Complete the ritual. Experience the shift in your nervous system and the immediate glow on your skin.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#cdff00] relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
<div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-white rounded-full blur-[100px]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
<div>
<span className="text-black font-semibold tracking-wider uppercase mb-4 block">The Science</span>
<h2 className="font-serif text-5xl md:text-6xl text-black leading-[1.1] tracking-tight mb-8">
                    Inflammation isn't just skin deep.
                </h2>
<p className="text-xl text-black/80 mb-10 leading-relaxed max-w-lg">
                    Stress releases cortisol, which breaks down collagen and causes breakouts. Our products are formulated to interrupt this cycle.
                </p>
<div className="space-y-6">
<div className="flex items-center gap-4 p-4 bg-black/5 rounded-xl border border-black/5">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-black" data-lucide="activity"></i>
</div>
<div>
<h4 className="font-serif text-xl text-black">Lowers Cortisol</h4>
<p className="text-black/70 text-base">Clinically proven adaptogens.</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 bg-black/5 rounded-xl border border-black/5">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-black" data-lucide="shield-check"></i>
</div>
<div>
<h4 className="font-serif text-xl text-black">Repairs Barrier</h4>
<p className="text-black/70 text-base">Ceramides meet crystal infusion.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<img alt="Product Lifestyle" className="rounded-[2.5rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
<div className="flex items-center gap-2 mb-2">
<span className="text-4xl font-serif text-[#cdff00] drop-shadow-sm font-medium">94%</span>
</div>
<p className="text-sm font-medium text-gray-800">Of users reported better sleep quality after using Magnesium Butter.</p>
</div>
</div>
</div>
</section>

<section className="py-32">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-4">Holistic Essentials</h2>
<p className="text-xl text-gray-600">Clean formulations backed by clinical research.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-lg font-medium border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all" href="#">
                    View all products <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group">
<div className="relative aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden mb-6">
<span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase z-10">Best Seller</span>
<img alt="Magnesium Butter" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-2xl mb-1">Magnesium Sleepy Butter</h3>
<p className="text-gray-500 text-base mb-3">For deep rest &amp; muscle recovery</p>
</div>
<span className="font-medium text-lg">$38</span>
</div>
<button className="w-full py-3 rounded-xl border border-gray-200 font-medium hover:bg-black hover:text-white transition-colors mt-2">Add to Cart</button>
</div>

<div className="group">
<div className="relative aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden mb-6">
<img alt="Hormone Drops" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&amp;w=2680&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-2xl mb-1">Hormone Check Drops</h3>
<p className="text-gray-500 text-base mb-3">Adaptogens for PMS &amp; Mood</p>
</div>
<span className="font-medium text-lg">$42</span>
</div>
<button className="w-full py-3 rounded-xl border border-gray-200 font-medium hover:bg-black hover:text-white transition-colors mt-2">Add to Cart</button>
</div>

<div className="group">
<div className="relative aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden mb-6">
<img alt="Inflammaging Solution" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&amp;w=2666&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-2xl mb-1">Inflammaging Solution</h3>
<p className="text-gray-500 text-base mb-3">Redness reduction serum</p>
</div>
<span className="font-medium text-lg">$56</span>
</div>
<button className="w-full py-3 rounded-xl border border-gray-200 font-medium hover:bg-black hover:text-white transition-colors mt-2">Add to Cart</button>
</div>
</div>
</div>
</section>

<section className="py-32 bg-gray-900 text-white rounded-[3rem] mx-4 md:mx-6 overflow-hidden relative">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#cdff00] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-4">How much does peace of mind cost?</h2>
<p className="text-xl text-gray-400 mb-16">Let's compare Eyeam to other everyday purchases.</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

<div className="flex flex-col items-center">
<div className="h-48 w-full bg-white/5 rounded-2xl flex items-end justify-center pb-8 mb-6 relative overflow-hidden group hover:bg-white/10 transition-colors">
<div className="h-[30%] w-8 bg-gray-600 rounded-t-lg mx-auto"></div>
</div>
<h3 className="text-lg font-medium mb-1">Latte</h3>
<p className="text-[#cdff00] text-xl font-serif">$6.50 <span className="text-sm text-gray-500 font-sans">/ day</span></p>
</div>

<div className="flex flex-col items-center">
<div className="h-48 w-full bg-white/5 rounded-2xl flex items-end justify-center pb-8 mb-6 relative overflow-hidden group hover:bg-white/10 transition-colors">
<div className="h-[60%] w-8 bg-gray-500 rounded-t-lg mx-auto"></div>
</div>
<h3 className="text-lg font-medium mb-1">Therapy</h3>
<p className="text-[#cdff00] text-xl font-serif">$150 <span className="text-sm text-gray-500 font-sans">/ session</span></p>
</div>

<div className="flex flex-col items-center">
<div className="h-48 w-full bg-white/5 rounded-2xl flex items-end justify-center pb-8 mb-6 relative overflow-hidden group hover:bg-white/10 transition-colors">
<div className="h-[45%] w-8 bg-gray-600 rounded-t-lg mx-auto"></div>
</div>
<h3 className="text-lg font-medium mb-1">Spin Class</h3>
<p className="text-[#cdff00] text-xl font-serif">$35 <span className="text-sm text-gray-500 font-sans">/ class</span></p>
</div>

<div className="flex flex-col items-center transform md:scale-110 md:-translate-y-4">
<div className="h-56 w-full bg-gradient-to-b from-[#cdff00] to-[#a3cc00] rounded-2xl flex items-end justify-center pb-8 mb-6 relative overflow-hidden shadow-[0_0_40px_rgba(205,255,0,0.3)]">
<div className="absolute inset-0 flex items-center justify-center">
<span className="font-serif text-3xl text-black font-medium">Eyeam</span>
</div>
<div className="h-[15%] w-8 bg-black rounded-t-lg mx-auto opacity-20"></div>
</div>
<h3 className="text-lg font-medium mb-1 text-[#cdff00]">Eyeam Membership</h3>
<p className="text-white text-3xl font-serif font-medium">$0.24 <span className="text-sm text-gray-400 font-sans">/ day</span></p>
<p className="text-xs text-gray-500 mt-2">Billed annually</p>
</div>
</div>
<div className="mt-20">
<button className="bg-[#cdff00] text-black px-10 py-4 rounded-full text-lg font-medium hover:bg-white transition-all shadow-lg">
                    Start My Transformation
                </button>
</div>
</div>
</section>

<section className="py-32">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-20 items-center">
<div>
<h2 className="font-serif text-6xl md:text-8xl tracking-tighter mb-6">91%</h2>
<p className="text-xl text-gray-600 mb-12 border-l-4 border-[#cdff00] pl-6 py-2">
                        of participants felt a "significant shift" in their mood and skin brightness after just 7 days of the Eyeam ritual.
                    </p>
<h2 className="font-serif text-6xl md:text-8xl tracking-tighter mb-6">100k+</h2>
<p className="text-xl text-gray-600 mb-12 border-l-4 border-[#cdff00] pl-6 py-2">
                        Women have joined the Eyeam community to reclaim their hormonal health.
                    </p>
<p className="text-xs text-gray-400 mt-8">*Statistics from a 5-month long study using a cohort group of 50 participants.</p>
</div>
<div className="relative">
<div className="absolute inset-0 bg-[#cdff00] rounded-[3rem] rotate-3 opacity-20"></div>
<img alt="Happy woman" className="relative rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-32 bg-gray-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-6">We've helped people just like you <br/> become their <span className="bg-[#cdff00] px-2 italic">best self.</span></h2>
<button className="bg-[#ff4d4d] text-white px-8 py-3 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-red-600 transition-colors">
                    55% Off Yearly Plan
                </button>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
<div className="flex gap-1 mb-4">
<i className="w-4 h-4 fill-[#cdff00] text-[#cdff00]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#cdff00] text-[#cdff00]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#cdff00] text-[#cdff00]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#cdff00] text-[#cdff00]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#cdff00] text-[#cdff00]" data-lucide="star"></i>
</div>
<p className="text-gray-600 mb-6 leading-relaxed">
                        "I never thought skincare could affect my anxiety. The Sleepy Butter is now a non-negotiable part of my night. I sleep deeper and wake up glowing."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="font-medium text-sm">Leila F.</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 md:-mt-8">
<div className="flex gap-1 mb-4">
<i className="w-4 h-4 fill-[#cdff00] text-[#cdff00]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#cdff00] text-[#cdff00]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#cdff00] text-[#cdff00]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#cdff00] text-[#cdff00]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#cdff00] text-[#cdff00]" data-lucide="star"></i>
</div>
<p className="text-gray-600 mb-6 leading-relaxed">
                        "Trust me when I tell you I've tried it all. Eyeam is the only thing that managed my hormonal acne while making me feel calmer during my cycle."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="font-medium text-sm">Sophia C.</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
<div className="flex gap-1 mb-4">
<i className="w-4 h-4 fill-[#cdff00] text-[#cdff00]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#cdff00] text-[#cdff00]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#cdff00] text-[#cdff00]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#cdff00] text-[#cdff00]" data-lucide="star"></i>
<i className="w-4 h-4 fill-[#cdff00] text-[#cdff00]" data-lucide="star"></i>
</div>
<p className="text-gray-600 mb-6 leading-relaxed">
                        "I've never resonated with wellness apps, they are boring. This is different. The Love Language Lip Gloss + Affirmation combo is genius."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="font-medium text-sm">Amanda J.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#cdff00]/10 rounded-full blur-[100px] -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">

<div className="relative mx-auto w-64 md:w-80 rounded-[3rem] border-8 border-gray-900 bg-black overflow-hidden shadow-2xl">
<div className="absolute top-0 w-full h-8 bg-black z-20 rounded-t-[2.5rem] flex justify-center pt-2">
<div className="w-20 h-4 bg-gray-800 rounded-full"></div>
</div>
<img alt="App Screen" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1542204637-e67bc7d41e48?q=80&amp;w=1935&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black to-transparent">
<p className="text-[#cdff00] text-xs font-bold uppercase mb-2">Daily Affirmation</p>
<p className="text-white text-xl font-serif mb-4">"I am grounded, I am glowing, I am enough."</p>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
<i className="w-3 h-3 fill-white text-white" data-lucide="play"></i>
</div>
<div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
<div className="h-full w-1/3 bg-[#cdff00]"></div>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 md:order-2 text-center md:text-left">
<h2 className="font-serif text-5xl md:text-6xl tracking-tight mb-6">Personalize your <br/> content and <br/> <span className="text-[#cdff00] bg-black px-2">become your future self.</span></h2>
<p className="text-xl text-gray-600 mb-10 max-w-md mx-auto md:mx-0">
                    Join the movement. Start your free trial today and unlock the full library of rituals.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
<button className="bg-black text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#cdff00] hover:text-black transition-all">
                        Start Free Trial
                    </button>
<button className="px-10 py-4 rounded-full text-lg font-medium border border-gray-200 hover:border-black transition-all">
                        View Pricing
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 py-20">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12">
<div className="max-w-sm">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded-full bg-[#cdff00] flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
<span className="font-serif text-xl tracking-tight font-medium">eyeam</span>
</div>
<p className="text-gray-500 text-base leading-relaxed mb-8">
                        We are driven by a mission to help you live your future now. We believe your one shot at life should be spent living as the person you want to be.
                    </p>
<p className="font-serif text-xl italic text-black">Let's do it together.</p>
</div>
<div className="grid grid-cols-2 gap-16">
<div className="flex flex-col gap-4">
<a className="text-gray-500 hover:text-black transition-colors" href="#">Home</a>
<a className="text-gray-500 hover:text-black transition-colors" href="#">Gift</a>
<a className="text-gray-500 hover:text-black transition-colors" href="#">Contact</a>
<a className="text-gray-500 hover:text-black transition-colors" href="#">Sign Up</a>
</div>
<div className="flex flex-col gap-4">
<a className="text-gray-500 hover:text-black transition-colors" href="#">Terms</a>
<a className="text-gray-500 hover:text-black transition-colors" href="#">Privacy</a>
<a className="text-gray-500 hover:text-black transition-colors" href="#">Consent Preferences</a>
</div>
</div>
<div className="flex flex-col items-end">
<span className="text-xs text-gray-400 mb-4">Follow Us</span>
<a className="p-3 rounded-full bg-gray-50 hover:bg-[#cdff00] transition-colors" href="#">
<i className="w-5 h-5 text-black" data-lucide="instagram"></i>
</a>
<div className="h-20 w-[1px] bg-gray-200 my-4 mx-auto md:mx-0 mr-4"></div>
</div>
</div>
<div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
<p>© 2024 Eyeam Wellness. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-black" href="#">Terms</a>
<a className="hover:text-black" href="#">Privacy</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
