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



        lucide.createIcons({
            attrs: {
                "stroke-width": 1.5
            }
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
      

<div className="bg-[#4A3B32] text-stone-300 py-3 text-sm">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
<span className="opacity-90 tracking-wide">Experience the best Korean Head Spa in town. <a className="text-white hover:underline underline-offset-4 decoration-stone-400" href="#booking">Book Now</a></span>
<div className="flex items-center gap-6 text-xs font-medium tracking-wide uppercase">
<span className="flex items-center gap-2"><i className="w-3 h-3" data-lucide="phone"></i> (555) 123-4567</span>
<span className="flex items-center gap-2"><i className="w-3 h-3" data-lucide="clock"></i> Open Daily: 10am - 8pm</span>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-100">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-2 text-stone-900">
<div className="w-9 h-9 bg-[#7D8F7D] rounded-full flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="sparkles"></i>
</div>
<span className="text-xl font-medium tracking-tight">Calm &amp; Cozy.</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
<a className="text-stone-900" href="#">Home</a>
<a className="hover:text-stone-900 transition-colors" href="#about">About</a>
<a className="hover:text-stone-900 transition-colors" href="#headspa">Head Spa</a>
<a className="hover:text-stone-900 transition-colors" href="#massage">Massage &amp; Reflexology</a>
<a className="hover:text-stone-900 transition-colors" href="#faq">FAQ</a>
</div>
<button className="bg-[#4A3B32] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#3E2C22] transition-all flex items-center gap-2" onclick="document.getElementById('booking').scrollIntoView({behavior: 'smooth'})">
                Book Appointment
                <i className="w-4 h-4" data-lucide="calendar-check"></i>
</button>
</div>
</nav>

<header className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">

<img alt="Korean Head Spa" className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1620331301557-ca114637d7a2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/30 to-transparent"></div>
<div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center text-white">
<div className="max-w-3xl space-y-8">
<h1 className="text-5xl md:text-7xl font-medium leading-[1.1] tracking-tight">
                    Relax Your Scalp. <br/> Restore Your Body. <br/>
<span className="font-serif italic font-normal text-stone-200">Renew Your Mind.</span>
</h1>
<p className="text-lg md:text-xl text-stone-100 max-w-lg font-light leading-relaxed">
                    Experience therapeutic Korean Head Spa, reflexology, and massage designed to bring deep relaxation and total scalp wellness.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="bg-[#7D8F7D] text-white border border-transparent px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-[#6A7A6A] transition-colors flex items-center justify-center gap-2" onclick="document.getElementById('booking').scrollIntoView({behavior: 'smooth'})">
                        Book Your Session
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors flex items-center justify-center gap-2" onclick="document.getElementById('headspa').scrollIntoView({behavior: 'smooth'})">
                        View Services
                        <i className="w-4 h-4" data-lucide="eye"></i>
</button>
</div>
</div>
</div>
</header>

<section className="border-y border-stone-200 bg-white">
<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="flex items-start gap-4">
<div className="p-3 bg-stone-50 rounded-xl text-[#7D8F7D]">
<i className="w-6 h-6" data-lucide="droplets"></i>
</div>
<div>
<div className="font-medium text-stone-900 mb-1">Korean Head Spa</div>
<div className="text-sm text-stone-500 leading-relaxed">Specialized scalp therapy treatments for detox and growth.</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-stone-50 rounded-xl text-[#7D8F7D]">
<i className="w-6 h-6" data-lucide="heart-handshake"></i>
</div>
<div>
<div className="font-medium text-stone-900 mb-1">Caring Therapists</div>
<div className="text-sm text-stone-500 leading-relaxed">Experienced professionals dedicated to your comfort.</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-stone-50 rounded-xl text-[#7D8F7D]">
<i className="w-6 h-6" data-lucide="sparkles"></i>
</div>
<div>
<div className="font-medium text-stone-900 mb-1">Clean &amp; Private</div>
<div className="text-sm text-stone-500 leading-relaxed">A serene, hygienic environment for total peace of mind.</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-stone-50 rounded-xl text-[#7D8F7D]">
<i className="w-6 h-6" data-lucide="gem"></i>
</div>
<div>
<div className="font-medium text-stone-900 mb-1">Affordable Luxury</div>
<div className="text-sm text-stone-500 leading-relaxed">Premium wellness experiences &amp; VIP packages available.</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="about">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative">
<div className="grid grid-cols-2 gap-4">
<img alt="Spa Interior" className="rounded-2xl object-cover h-64 w-full shadow-lg" src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="relative pt-12">
<img alt="Relaxation" className="rounded-2xl object-cover h-64 w-full shadow-lg" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute -top-4 -right-4 bg-[#7D8F7D] text-white p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center w-32 h-32 text-center rotate-3">
<div className="text-xs uppercase tracking-wider mb-1">Rated</div>
<div className="flex text-white mb-1">★★★★★</div>
<div className="text-xs opacity-90">Best in City</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<span className="text-[#7D8F7D] text-sm font-medium tracking-wide flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#7D8F7D]"></span> About Calm &amp; Cozy
                </span>
<h2 className="text-4xl md:text-5xl font-medium text-stone-900 tracking-tight leading-tight">
                    Welcome to your sanctuary <span className="font-serif italic font-normal text-stone-500">of peace.</span>
</h2>
<p className="text-lg leading-relaxed text-stone-600">
                    At Calm &amp; Cozy Spa, we believe that true wellness begins with deep relaxation. We specialize in the art of the Korean Head Spa—a holistic therapy that blends scalp health with stress relief.
                </p>
<p className="text-stone-600 leading-relaxed">
                    Whether you are suffering from burnout, tension headaches, or simply need a break from the noise of daily life, our caring therapists are here to restore your balance. We treat the whole person, ensuring you leave feeling lighter, cleaner, and deeply rested.
                </p>
<div className="pt-2">
<a className="text-stone-900 font-medium underline underline-offset-4 decoration-[#7D8F7D] hover:decoration-stone-900 transition-all" href="#headspa">Explore our treatments</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F4F7F4]">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1 space-y-8">
<span className="text-[#7D8F7D] text-sm font-medium tracking-wide flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#7D8F7D]"></span> Korean Head Spa
                </span>
<h2 className="text-4xl md:text-5xl font-medium text-stone-900 tracking-tight leading-tight">
                    What is a <br/>
<span className="font-serif italic font-normal text-[#7D8F7D]">Korean Head Spa?</span>
</h2>
<p className="text-lg leading-relaxed text-stone-600">
                    More than just a hair wash, the Korean Head Spa is a multi-step therapeutic experience designed to detoxify your scalp and deeply relax your mind. It combines specialized scaling techniques with massage.
                </p>
<div className="space-y-4 pt-2">
<div className="flex items-center gap-3">
<div className="bg-[#7D8F7D] rounded-full p-1">
<i className="w-3 h-3 text-white" data-lucide="check"></i>
</div>
<span className="text-stone-700">Deep scalp cleansing &amp; detox (removes build-up)</span>
</div>
<div className="flex items-center gap-3">
<div className="bg-[#7D8F7D] rounded-full p-1">
<i className="w-3 h-3 text-white" data-lucide="check"></i>
</div>
<span className="text-stone-700">Improves blood circulation &amp; hair growth</span>
</div>
<div className="flex items-center gap-3">
<div className="bg-[#7D8F7D] rounded-full p-1">
<i className="w-3 h-3 text-white" data-lucide="check"></i>
</div>
<span className="text-stone-700">Reduces stress, migraines &amp; tension</span>
</div>
<div className="flex items-center gap-3">
<div className="bg-[#7D8F7D] rounded-full p-1">
<i className="w-3 h-3 text-white" data-lucide="check"></i>
</div>
<span className="text-stone-700">Full sensory relaxation (waterfall therapy, steam)</span>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<img alt="Head Spa Process" className="rounded-[2rem] shadow-2xl w-full object-cover h-[500px]" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="headspa">
<div className="text-center mb-16 space-y-4">
<span className="text-stone-500 text-sm font-medium tracking-wide">Our Menu</span>
<h2 className="text-4xl md:text-5xl font-medium text-stone-900 tracking-tight">
                Head Spa Services<br/>
<span className="font-serif italic font-normal text-stone-500">Cleanse. Treat. Relax.</span>
</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white border border-stone-200 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:border-[#7D8F7D] flex flex-col">
<div className="mb-6">
<span className="bg-stone-100 text-stone-600 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">Basic Care</span>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-2">60-Minute Head Spa</h3>
<div className="text-3xl font-serif text-[#7D8F7D] mb-6">$79</div>
<ul className="space-y-3 text-sm text-stone-600 mb-8 flex-1">
<li className="flex gap-2"><i className="w-4 h-4 text-[#7D8F7D] shrink-0" data-lucide="check"></i> Scalp check &amp; consultation</li>
<li className="flex gap-2"><i className="w-4 h-4 text-[#7D8F7D] shrink-0" data-lucide="check"></i> Warm eye mask</li>
<li className="flex gap-2"><i className="w-4 h-4 text-[#7D8F7D] shrink-0" data-lucide="check"></i> Signature scalp massage</li>
<li className="flex gap-2"><i className="w-4 h-4 text-[#7D8F7D] shrink-0" data-lucide="check"></i> Scalp shampoo</li>
<li className="flex gap-2"><i className="w-4 h-4 text-[#7D8F7D] shrink-0" data-lucide="check"></i> Leave-in hair essence</li>
</ul>
<a className="w-full block text-center bg-stone-100 text-stone-900 py-3 rounded-lg text-sm font-medium hover:bg-[#7D8F7D] hover:text-white transition-colors" href="#booking">Book This Treatment</a>
</div>

<div className="group bg-white border border-stone-200 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:border-[#7D8F7D] flex flex-col">
<div className="mb-6">
<span className="bg-stone-100 text-stone-600 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">Popular</span>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-2">70-Minute Head Spa</h3>
<div className="text-3xl font-serif text-[#7D8F7D] mb-6">$89</div>
<ul className="space-y-3 text-sm text-stone-600 mb-8 flex-1">
<li className="flex gap-2"><i className="w-4 h-4 text-[#7D8F7D] shrink-0" data-lucide="check"></i> Includes 60-min features</li>
<li className="flex gap-2"><i className="w-4 h-4 text-[#7D8F7D] shrink-0" data-lucide="check"></i> Zen point massage</li>
<li className="flex gap-2"><i className="w-4 h-4 text-[#7D8F7D] shrink-0" data-lucide="check"></i> <strong>Waterfall therapy</strong></li>
<li className="flex gap-2"><i className="w-4 h-4 text-[#7D8F7D] shrink-0" data-lucide="check"></i> Deep conditioning</li>
</ul>
<a className="w-full block text-center bg-stone-100 text-stone-900 py-3 rounded-lg text-sm font-medium hover:bg-[#7D8F7D] hover:text-white transition-colors" href="#booking">Book This Treatment</a>
</div>

<div className="group bg-[#4A3B32] border border-[#4A3B32] p-8 rounded-2xl shadow-xl transform scale-105 z-10 flex flex-col text-white">
<div className="mb-6">
<span className="bg-[#7D8F7D] text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">Best Seller</span>
</div>
<h3 className="text-xl font-medium text-white mb-2">100-Minute Head Spa</h3>
<div className="text-3xl font-serif text-[#7D8F7D] mb-6">$119</div>
<ul className="space-y-3 text-sm text-stone-300 mb-8 flex-1">
<li className="flex gap-2"><i className="w-4 h-4 text-[#7D8F7D] shrink-0" data-lucide="check"></i> Includes 70-min features</li>
<li className="flex gap-2"><i className="w-4 h-4 text-[#7D8F7D] shrink-0" data-lucide="check"></i> <strong>Scalp exfoliation</strong></li>
<li className="flex gap-2"><i className="w-4 h-4 text-[#7D8F7D] shrink-0" data-lucide="check"></i> Treatment scaling tonic</li>
<li className="flex gap-2"><i className="w-4 h-4 text-[#7D8F7D] shrink-0" data-lucide="check"></i> Steam lavender therapy</li>
<li className="flex gap-2"><i className="w-4 h-4 text-[#7D8F7D] shrink-0" data-lucide="check"></i> Aroma oil ampoule</li>
</ul>
<a className="w-full block text-center bg-[#7D8F7D] text-white py-3 rounded-lg text-sm font-medium hover:bg-white hover:text-[#4A3B32] transition-colors" href="#booking">Book This Treatment</a>
</div>

<div className="group bg-white border border-stone-200 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:border-[#7D8F7D] flex flex-col">
<div className="mb-6">
<span className="bg-stone-100 text-stone-600 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">Ultimate Luxury</span>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-2">130-Minute Premium</h3>
<div className="text-3xl font-serif text-[#7D8F7D] mb-6">$149</div>
<ul className="space-y-3 text-sm text-stone-600 mb-8 flex-1">
<li className="flex gap-2"><i className="w-4 h-4 text-[#7D8F7D] shrink-0" data-lucide="check"></i> Full 100-min experience</li>
<li className="flex gap-2"><i className="w-4 h-4 text-[#7D8F7D] shrink-0" data-lucide="check"></i> <strong>Foot reflexology</strong></li>
<li className="flex gap-2"><i className="w-4 h-4 text-[#7D8F7D] shrink-0" data-lucide="check"></i> Hand massage</li>
<li className="flex gap-2"><i className="w-4 h-4 text-[#7D8F7D] shrink-0" data-lucide="check"></i> Full Aromatherapy</li>
<li className="flex gap-2"><i className="w-4 h-4 text-[#7D8F7D] shrink-0" data-lucide="check"></i> Special ampoule</li>
</ul>
<a className="w-full block text-center bg-stone-100 text-stone-900 py-3 rounded-lg text-sm font-medium hover:bg-[#7D8F7D] hover:text-white transition-colors" href="#booking">Book This Treatment</a>
</div>
</div>
</section>

<section className="py-24 bg-[#F4F7F4]" id="massage">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 space-y-4">
<span className="text-[#7D8F7D] text-sm font-medium tracking-wide">Body Therapies</span>
<h2 className="text-4xl md:text-5xl font-medium text-stone-900 tracking-tight">
                    Massage &amp; Reflexology<br/>
<span className="font-serif italic font-normal text-stone-500">Restore your balance</span>
</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center hover:border-[#7D8F7D] transition-colors">
<div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[#7D8F7D]">
<i className="w-8 h-8" data-lucide="footprints"></i>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-4">Foot Reflexology</h3>
<p className="text-stone-500 text-sm mb-6">Targeted pressure points to relieve tension and improve organ function.</p>
<div className="space-y-2 mb-6">
<div className="flex justify-between items-center text-stone-700 font-medium border-b border-stone-100 pb-2">
<span>60 Minutes</span>
<span>$40</span>
</div>
<div className="flex justify-between items-center text-stone-700 font-medium pb-2">
<span>90 Minutes</span>
<span>$60</span>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center hover:border-[#7D8F7D] transition-colors">
<div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[#7D8F7D]">
<i className="w-8 h-8" data-lucide="refresh-cw"></i>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-4">Combo Reflexology</h3>
<p className="text-stone-500 text-sm mb-6">The perfect mix of foot reflexology and body massage for total relief.</p>
<div className="space-y-2 mb-6">
<div className="flex justify-between items-center text-stone-700 font-medium border-b border-stone-100 pb-2">
<span>60 Minutes</span>
<span>$50</span>
</div>
<div className="flex justify-between items-center text-stone-700 font-medium pb-2">
<span>90 Minutes</span>
<span>$75</span>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center hover:border-[#7D8F7D] transition-colors">
<div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[#7D8F7D]">
<i className="w-8 h-8" data-lucide="user"></i>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-4">Full Body Massage</h3>
<p className="text-stone-500 text-sm mb-6">Deep tissue or Swedish techniques to melt away muscle stress.</p>
<div className="space-y-2 mb-6">
<div className="flex justify-between items-center text-stone-700 font-medium border-b border-stone-100 pb-2">
<span>60 Minutes</span>
<span>$70</span>
</div>
<div className="flex justify-between items-center text-stone-700 font-medium pb-2">
<span>90 Minutes</span>
<span>$95</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#4A3B32] text-stone-200 py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm">
<div>
<span className="bg-[#7D8F7D] text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4 inline-block">Best Value</span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-2">Become a VIP Member</h2>
<p className="text-stone-300 max-w-xl">Commit to your wellness and save. Purchase a 5-session package and enjoy prioritizing your health.</p>
</div>
<div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
<div className="bg-white/10 p-6 rounded-xl border border-white/10 text-center w-full md:w-48">
<div className="text-sm uppercase tracking-wider mb-2 text-stone-400">VIP Foot Reflexology</div>
<div className="text-2xl font-serif text-white mb-1">5 Sessions</div>
<div className="text-xl font-bold text-[#7D8F7D]">$180</div>
</div>
<div className="bg-white/10 p-6 rounded-xl border border-white/10 text-center w-full md:w-48">
<div className="text-sm uppercase tracking-wider mb-2 text-stone-400">VIP Body Massage</div>
<div className="text-2xl font-serif text-white mb-1">5 Sessions</div>
<div className="text-xl font-bold text-[#7D8F7D]">$280</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="text-center mb-16 space-y-4">
<span className="text-[#7D8F7D] text-sm font-medium tracking-wide">The Process</span>
<h2 className="text-4xl md:text-5xl font-medium text-stone-900 tracking-tight">
                Your Spa Experience<br/>
<span className="font-serif italic font-normal text-stone-500">Step by Step</span>
</h2>
</div>
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-stone-200 -z-10"></div>
<div className="bg-white pt-4 text-center">
<div className="w-16 h-16 bg-[#F4F7F4] border-4 border-white rounded-full flex items-center justify-center mx-auto mb-6 text-[#7D8F7D] relative z-10 shadow-sm">
<span className="font-serif text-xl font-bold">1</span>
</div>
<h4 className="text-lg font-medium text-stone-900 mb-2">Consultation</h4>
<p className="text-stone-500 text-sm leading-relaxed">We check your scalp condition and discuss your stress levels.</p>
</div>
<div className="bg-white pt-4 text-center">
<div className="w-16 h-16 bg-[#F4F7F4] border-4 border-white rounded-full flex items-center justify-center mx-auto mb-6 text-[#7D8F7D] relative z-10 shadow-sm">
<span className="font-serif text-xl font-bold">2</span>
</div>
<h4 className="text-lg font-medium text-stone-900 mb-2">Scalp Analysis &amp; Prep</h4>
<p className="text-stone-500 text-sm leading-relaxed">Deep analysis followed by a warm eye mask to begin relaxation.</p>
</div>
<div className="bg-white pt-4 text-center">
<div className="w-16 h-16 bg-[#F4F7F4] border-4 border-white rounded-full flex items-center justify-center mx-auto mb-6 text-[#7D8F7D] relative z-10 shadow-sm">
<span className="font-serif text-xl font-bold">3</span>
</div>
<h4 className="text-lg font-medium text-stone-900 mb-2">The Treatment</h4>
<p className="text-stone-500 text-sm leading-relaxed">Cleansing, massage, scaling, and waterfall therapy ensue.</p>
</div>
<div className="bg-white pt-4 text-center">
<div className="w-16 h-16 bg-[#F4F7F4] border-4 border-white rounded-full flex items-center justify-center mx-auto mb-6 text-[#7D8F7D] relative z-10 shadow-sm">
<span className="font-serif text-xl font-bold">4</span>
</div>
<h4 className="text-lg font-medium text-stone-900 mb-2">Relaxed Finish</h4>
<p className="text-stone-500 text-sm leading-relaxed">Leave-in essence, drying, and aftercare advice for lasting results.</p>
</div>
</div>
</section>

<section className="py-24 bg-[#F4F7F4]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 space-y-4">
<span className="text-[#7D8F7D] text-sm font-medium tracking-wide">Testimonials</span>
<h2 className="text-4xl md:text-5xl font-medium text-stone-900 tracking-tight">
                    Heartfelt stories of<br/>
<span className="font-serif italic font-normal text-stone-500">relaxation &amp; relief</span>
</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
<div className="flex gap-1 text-[#7D8F7D] mb-4">★★★★★</div>
<p className="text-stone-600 text-sm leading-relaxed italic mb-6">"My first Korean Head Spa experience and it was incredible. The scalp massage relieved tension I didn't even know I had. My hair feels so light!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center text-stone-500 font-medium text-xs">JS</div>
<div className="text-sm font-medium text-stone-900">Jessica S.</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
<div className="flex gap-1 text-[#7D8F7D] mb-4">★★★★★</div>
<p className="text-stone-600 text-sm leading-relaxed italic mb-6">"I suffer from migraines and the 70-minute session was a lifesaver. The environment is so calm and cozy, just like the name."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center text-stone-500 font-medium text-xs">ML</div>
<div className="text-sm font-medium text-stone-900">Michael L.</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
<div className="flex gap-1 text-[#7D8F7D] mb-4">★★★★★</div>
<p className="text-stone-600 text-sm leading-relaxed italic mb-6">"The VIP Foot Reflexology package is the best investment I've made. The therapists are so skilled and attentive."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center text-stone-500 font-medium text-xs">AR</div>
<div className="text-sm font-medium text-stone-900">Amanda R.</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="booking">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl bg-white shadow-xl border border-stone-100">
<div className="p-12 lg:p-16 flex flex-col justify-center">
<h2 className="text-4xl font-medium text-stone-900 tracking-tight mb-2">
                        Time to unwind? <span className="font-serif italic font-normal text-stone-500">Book now.</span>
</h2>
<p className="text-stone-500 mb-8 text-lg">Take a break from the busy and step into serenity.</p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7D8F7D]" placeholder="First Name" type="text"/>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7D8F7D]" placeholder="Last Name" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7D8F7D]" placeholder="E-mail" type="email"/>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7D8F7D]" placeholder="Phone" type="tel"/>
</div>
<select className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm text-stone-500 focus:outline-none focus:ring-1 focus:ring-[#7D8F7D]">
<option>Select Service</option>
<option>60-Min Head Spa ($79)</option>
<option>70-Min Head Spa ($89)</option>
<option>100-Min Head Spa ($119)</option>
<option>130-Min Premium ($149)</option>
<option>Foot Reflexology</option>
<option>Full Body Massage</option>
</select>
<div className="relative">
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7D8F7D]" placeholder="Preferred Date" type="text"/>
<i className="absolute right-4 top-3.5 w-4 h-4 text-stone-400" data-lucide="calendar"></i>
</div>
<div className="flex gap-4 pt-2">
<button className="flex-1 bg-[#4A3B32] text-white px-6 py-3.5 rounded-lg text-sm font-medium hover:bg-[#3E2C22] transition-all" type="button">
                                Request Appointment
                            </button>
<button className="flex-1 bg-white border border-stone-200 text-stone-900 px-6 py-3.5 rounded-lg text-sm font-medium hover:bg-stone-50 transition-all flex items-center justify-center gap-2" type="button">
<i className="w-4 h-4" data-lucide="phone"></i> Call Now
                            </button>
</div>
</form>
</div>
<div className="relative h-96 lg:h-auto">
<img alt="Spa Room" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-8 left-8 bg-black/30 backdrop-blur-md p-4 rounded-xl text-white border border-white/10">
<div className="flex items-center gap-2 mb-1">
<i className="w-4 h-4" data-lucide="map-pin"></i>
<span className="text-xs font-medium">123 Wellness Blvd, Serenity City</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="phone"></i>
<span className="text-xs font-medium">(555) 123-4567</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-[#7D8F7D] text-sm font-medium tracking-wide">FAQ</span>
<h2 className="text-3xl md:text-4xl font-medium text-stone-900 tracking-tight mt-3">
                    Frequently Asked <span className="font-serif italic font-normal text-stone-500">Questions</span>
</h2>
</div>
<div className="space-y-4">
<details className="group bg-[#F4F7F4] rounded-lg p-4 open:pb-6 cursor-pointer" open="">
<summary className="flex justify-between items-center font-medium list-none text-stone-900">
<span>What should I expect from a Korean Head Spa?</span>
<span className="transition group-open:rotate-180">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="mt-4 text-stone-600 text-sm leading-relaxed border-t border-stone-200 pt-4">
                        Expect a multi-sensory experience involving deep scalp cleansing, scaling to remove buildup, a relaxing massage of the scalp and neck, and nourishing treatments. It is designed to be deeply relaxing and purifying.
                    </div>
</details>
<details className="group bg-[#F4F7F4] rounded-lg p-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium list-none text-stone-900">
<span>Is it good for stress and headaches?</span>
<span className="transition group-open:rotate-180">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="mt-4 text-stone-600 text-sm leading-relaxed border-t border-stone-200 pt-4">
                        Absolutely. The combination of warm steam, aromatherapy, and targeted pressure point massage (Reflexology/Zen points) helps release tension, improve circulation, and alleviate migraines.
                    </div>
</details>
<details className="group bg-[#F4F7F4] rounded-lg p-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium list-none text-stone-900">
<span>Do I need to prepare before my appointment?</span>
<span className="transition group-open:rotate-180">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="mt-4 text-stone-600 text-sm leading-relaxed border-t border-stone-200 pt-4">
                        Just come as you are! We provide robes and everything you need. It is recommended not to wash your hair immediately before, as we will be performing a deep cleanse.
                    </div>
</details>
<details className="group bg-[#F4F7F4] rounded-lg p-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium list-none text-stone-900">
<span>Can I book multiple services together?</span>
<span className="transition group-open:rotate-180">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="mt-4 text-stone-600 text-sm leading-relaxed border-t border-stone-200 pt-4">
                        Yes! Many clients combine our Head Spa treatments with a foot reflexology session or body massage for a full "head-to-toe" relaxation experience. See our 130-Minute Premium package for the ultimate combo.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-[#4A3B32] text-stone-300 py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row justify-between gap-12 border-b border-white/10 pb-12 mb-12">
<div className="space-y-6 max-w-sm">
<div className="flex items-center gap-2 text-white">
<div className="w-8 h-8 bg-[#7D8F7D] rounded-full flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="sparkles"></i>
</div>
<span className="text-xl font-medium tracking-tight">Calm &amp; Cozy Spa.</span>
</div>
<p className="text-sm text-stone-400 leading-relaxed">
                        Your destination for Korean Head Spa therapy and holistic relaxation. Restore balance to your mind and body.
                    </p>
<div className="space-y-2 text-sm">
<div className="flex items-center gap-2"><i className="w-4 h-4 text-[#7D8F7D]" data-lucide="map-pin"></i> 123 Wellness Blvd, Serenity City</div>
<div className="flex items-center gap-2"><i className="w-4 h-4 text-[#7D8F7D]" data-lucide="phone"></i> (555) 123-4567</div>
</div>
</div>
<div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">
<div>
<h4 className="text-white font-medium mb-4">Services</h4>
<ul className="space-y-2 text-sm text-stone-400">
<li><a className="hover:text-white" href="#">Korean Head Spa</a></li>
<li><a className="hover:text-white" href="#">Scalp Scaling</a></li>
<li><a className="hover:text-white" href="#">Reflexology</a></li>
<li><a className="hover:text-white" href="#">Full Body Massage</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-stone-400">
<li><a className="hover:text-white" href="#">About Us</a></li>
<li><a className="hover:text-white" href="#">Testimonials</a></li>
<li><a className="hover:text-white" href="#">Contact</a></li>
<li><a className="hover:text-white" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-stone-400">
<li><a className="hover:text-white" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white" href="#">Terms of Service</a></li>
<li><a className="hover:text-white" href="#">Cancellation Policy</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
<p>Copyright © 2024 Calm &amp; Cozy Spa. All Rights Reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
