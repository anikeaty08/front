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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-2">
<i className="w-6 h-6 text-zinc-900" data-lucide="activity"></i>
<span className="text-xl font-medium tracking-tight">Kolasko</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Home</a>
<a className="hover:text-zinc-900 transition-colors" href="#">About</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Services</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Process</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Testimonials</a>
</div>
<a className="group flex items-center gap-2 bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all" href="#">
                Book Consultation
                <div className="bg-zinc-700 rounded-full p-0.5 group-hover:bg-zinc-600 transition-colors">
<i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</div>
</a>
</div>
</nav>

<header className="pt-24 pb-6 px-4 md:px-6">
<div className="max-w-7xl mx-auto relative rounded-[2.5rem] overflow-hidden min-h-[85vh] flex flex-col justify-between p-8 md:p-16">

<div className="absolute inset-0 z-0">
<img alt="Active senior man hiking" className="w-full h-full object-cover object-top opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/95242fa5-95dc-41c2-bd55-0c2c0a064c0d_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-r from-stone-300/40 via-transparent to-transparent mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-stone-400/20 to-transparent"></div>
</div>

<div className="relative z-10 max-w-2xl mt-12">
<h1 className="text-5xl md:text-7xl font-medium text-white leading-[1.1] tracking-tight mb-6 drop-shadow-sm">
                    Reclaim Your Strength &amp; Vitality After 50
                </h1>
<p className="text-lg md:text-xl text-stone-100 mb-8 max-w-lg font-light leading-relaxed">
                    Personalized longevity coaching tailored for the physiology of men over 50. Build muscle, optimize energy, and live independently.
                </p>
<a className="inline-flex items-center gap-3 bg-white text-zinc-900 px-6 py-3.5 rounded-full text-sm font-medium hover:bg-zinc-100 transition-colors" href="#">
                    Start Your Longevity Journey
                    <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>

<div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-6 mt-12">

<div className="flex items-center gap-4 text-white">
<span className="text-sm font-medium mr-4">Explore</span>
<button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 backdrop-blur-sm transition-colors">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<button className="w-12 h-12 rounded-full bg-white text-zinc-900 flex items-center justify-center hover:bg-zinc-100 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>

<div className="bg-white/20 backdrop-blur-md border border-white/30 p-4 rounded-2xl max-w-xs w-full">
<div className="relative h-32 rounded-xl overflow-hidden mb-3">
<img alt="Man running" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/46314e67-b6bd-4afb-9525-56f0f12e001b_800w.jpg"/>
</div>
<p className="text-xs text-white/90 leading-relaxed font-medium">
                        "I feel stronger at 55 than I did at 40. The protocol changed my life."
                    </p>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-3">
<span className="text-sm font-medium text-zinc-500">The Reality</span>
</div>
<div className="md:col-span-9">
<h2 className="text-3xl md:text-5xl font-normal leading-[1.2] tracking-tight text-zinc-900">
                    Aging doesn't have to mean decline. <span className="text-zinc-400">Most men accept fatigue and weakness as inevitable —</span> but with the right strategy, your best years are still ahead.
                </h2>
</div>
</div>
</section>

<section className="px-6 pb-24 max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="relative group rounded-[2rem] overflow-hidden h-[400px]">
<img alt="Andrew Kolasko Coaching" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-2xl text-white font-medium mb-2">500+ Men Guided</h3>
<p className="text-zinc-300 text-sm mb-6 leading-relaxed">
                        Helping fathers and grandfathers build routines for strength, mobility, and hormonal health.
                    </p>
<div className="flex items-center justify-between">
<button className="bg-white text-zinc-900 px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-zinc-100 transition-colors">
                            Meet Andrew
                            <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
<i className="text-white fill-white rotate-180 w-4 h-4" data-lucide="triangle"></i>
</div>
</div>
</div>

<div className="bg-zinc-100 rounded-[2rem] p-8 flex flex-col justify-between h-[400px]">
<div className="text-7xl font-medium tracking-tighter text-zinc-900">92%</div>
<div>
<h3 className="text-xl font-medium text-zinc-900 mb-2">Of Clients Report</h3>
<p className="text-zinc-600 text-lg leading-relaxed">
                        Significantly increased energy levels and libido within the first 6 weeks of the protocol.
                    </p>
</div>
</div>

<div className="bg-zinc-100 rounded-[2rem] p-8 flex flex-col justify-between h-[400px]">
<div className="text-7xl font-medium tracking-tighter text-zinc-900">15+ Yrs</div>
<div>
<h3 className="text-xl font-medium text-zinc-900 mb-2">Specialized Experience</h3>
<p className="text-zinc-600 text-lg leading-relaxed">
                        Dedicated exclusively to men's health, longevity science, and functional strength training.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-zinc-50 px-6 py-24">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
<div>
<span className="text-sm font-medium text-zinc-500 block mb-4">Core Pillars</span>
<div className="flex gap-2">
<button className="px-5 py-2 rounded-full bg-zinc-900 text-white text-sm font-medium">Strength</button>
<button className="px-5 py-2 rounded-full border border-zinc-200 text-zinc-600 text-sm font-medium hover:border-zinc-900 transition-colors">Nutrition</button>
<button className="px-5 py-2 rounded-full border border-zinc-200 text-zinc-600 text-sm font-medium hover:border-zinc-900 transition-colors">Mindset</button>
</div>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight max-w-md text-right">
                    Practical Support for Your Longevity
                </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-7 bg-white p-2 rounded-[2.5rem] border border-zinc-100 shadow-sm">
<div className="relative h-[400px] rounded-[2rem] overflow-hidden group">
<img alt="Strength Training" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/65584d73-1533-44e1-8621-08b1b76a30f7_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10"></div>
</div>
<div className="p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div>
<h3 className="text-2xl font-medium text-zinc-900 mb-2">Functional Strength Training</h3>
<p className="text-zinc-500 max-w-sm">Customized workouts designed to build muscle mass, protect joints, and improve balance.</p>
</div>
<div className="flex items-center gap-4">
<span className="font-medium text-zinc-400">01</span>
<button className="w-12 h-12 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:bg-zinc-800 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>

<div className="lg:col-span-5 bg-[#F4F2ED] rounded-[2.5rem] p-8 flex flex-col justify-between min-h-[400px]">
<div>
<h3 className="text-2xl font-medium text-zinc-900 mb-4">Nutritional Optimization</h3>
<p className="text-zinc-600 leading-relaxed mb-8">
                            Simple, sustainable nutrition plans that fuel your body, reduce inflammation, and support healthy testosterone levels.
                        </p>
</div>
<div className="relative">
<div className="flex items-center gap-4 overflow-hidden rounded-2xl h-48 w-full">
<img alt="Healthy Food" className="w-1/2 h-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&amp;w=2653&amp;auto=format&amp;fit=crop"/>
<img alt="Preparation" className="w-1/2 h-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<button className="absolute -right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-zinc-900 shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-zinc-900 mb-4">
                Discover Practical Stepsfor Longevity
            </h2>
</div>
<div className="space-y-0">

<div className="group border-t border-zinc-200 py-12 flex flex-col md:flex-row md:items-center gap-8 md:gap-20">
<div className="w-full md:w-1/4">
<span className="text-sm font-medium text-zinc-400 mb-2 block">[01]</span>
<h3 className="text-3xl font-medium text-zinc-900">Initial Assessment</h3>
</div>
<div className="w-full md:w-1/3">
<div className="aspect-[4/3] rounded-2xl overflow-hidden">
<img alt="Consultation" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&amp;w=2680&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="w-full md:w-1/3">
<p className="text-lg text-zinc-600 leading-relaxed">
                        We analyze your current health markers, mobility, daily routine, and habits to identify the biggest opportunities for rapid improvement.
                    </p>
</div>
</div>

<div className="group border-t border-zinc-200 py-12 flex flex-col md:flex-row md:items-center gap-8 md:gap-20">
<div className="w-full md:w-1/4">
<span className="text-sm font-medium text-zinc-400 mb-2 block">[02]</span>
<h3 className="text-3xl font-medium text-zinc-900">Personalized Plan</h3>
</div>
<div className="w-full md:w-1/3">
<div className="aspect-[4/3] rounded-2xl overflow-hidden">
<img alt="Planning" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="w-full md:w-1/3">
<p className="text-lg text-zinc-600 leading-relaxed">
                        Create a simple, actionable plan for exercise, nutrition, and stress management that fits into your lifestyle without overwhelming you.
                    </p>
</div>
</div>

<div className="group border-t border-b border-zinc-200 py-12 flex flex-col md:flex-row md:items-center gap-8 md:gap-20">
<div className="w-full md:w-1/4">
<span className="text-sm font-medium text-zinc-400 mb-2 block">[03]</span>
<h3 className="text-3xl font-medium text-zinc-900">Progress Review</h3>
</div>
<div className="w-full md:w-1/3">
<div className="aspect-[4/3] rounded-2xl overflow-hidden">
<img alt="Progress" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="w-full md:w-1/3">
<p className="text-lg text-zinc-600 leading-relaxed">
                        Monthly evaluations to track improvements in strength and biomarkers, adjusting the plan to ensure continuous progress.
                    </p>
</div>
</div>
</div>
</section>

<section className="px-6 pb-24 max-w-7xl mx-auto">
<div className="relative rounded-[3rem] overflow-hidden h-[600px] flex items-center">
<img alt="Blue sky nature" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&amp;w=2674&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20"></div>
<div className="relative z-10 w-full px-8 md:px-16 flex flex-col md:flex-row justify-between items-center h-full py-20">
<div className="max-w-xl self-center">
<h2 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-6">
                        Feel Confident  With Your Health
                    </h2>
<p className="text-white/90 text-lg font-light mb-10 max-w-md">
                        Simple guidance and small daily steps to make your health easier, calmer, and more consistent.
                    </p>
<button className="bg-white text-zinc-900 px-6 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2 hover:bg-zinc-100 transition-colors">
                        Start Free Consultation
                        <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
<div className="mt-16 flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white/20" src="https://i.pravatar.cc/150?img=11"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white/20" src="https://i.pravatar.cc/150?img=13"/>
<div className="w-10 h-10 rounded-full border-2 border-white/20 bg-zinc-900 text-white flex items-center justify-center text-xs font-medium">4k+</div>
</div>
<p className="text-sm text-white/80 max-w-[150px] leading-tight">Join 4,000+ men improving their health</p>
</div>
</div>
<div className="hidden md:block h-full relative w-1/3">
<div className="absolute bottom-0 right-0 w-full h-[90%] rounded-t-[10rem] overflow-hidden border-4 border-white/20">
<img alt="Woman Yoga" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<span className="text-sm font-medium text-zinc-500 uppercase tracking-wide">Testimonial</span>
<h2 className="text-4xl md:text-5xl font-medium text-zinc-900 mt-3">What People Say</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

<div className="bg-zinc-50 p-8 rounded-[2rem]">
<div className="flex items-center gap-4 mb-6">
<img alt="Client" className="w-12 h-12 rounded-full object-cover" src="https://i.pravatar.cc/150?img=68"/>
<div>
<h4 className="font-medium text-zinc-900">Robert D.</h4>
<p className="text-xs text-zinc-500">Business Owner, 58</p>
</div>
</div>
<p className="text-zinc-600 text-sm leading-relaxed">
                        "Working with Andrew completely changed how I approach aging. His coaching gave me clarity and confidence, and within months my energy levels improved dramatically."
                    </p>
</div>

<div className="bg-white border border-zinc-100 shadow-xl p-8 rounded-[2rem] relative scale-105 z-10">
<div className="absolute top-6 right-6 bg-zinc-900 text-white text-[10px] uppercase font-bold px-2 py-1 rounded">CEO of Olyvo</div>
<div className="flex flex-col items-center text-center mb-6">
<img alt="Main Client" className="w-24 h-24 rounded-full object-cover mb-4" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-zinc-800 text-lg font-medium leading-relaxed text-center mb-8">
                        "The best investment I've made for my longevity. Andrew's approach is simple, direct, and delivers real physiological results."
                    </p>
<div className="flex justify-between items-center border-t border-zinc-100 pt-6">
<div className="text-center w-1/2 border-r border-zinc-100">
<div className="text-2xl font-bold text-zinc-900">96%</div>
<div className="text-xs text-zinc-500">Client Satisfaction</div>
</div>
<div className="text-center w-1/2">
<div className="text-2xl font-bold text-zinc-900">08+</div>
<div className="text-xs text-zinc-500">Years Younger</div>
</div>
</div>
</div>

<div className="bg-zinc-50 p-8 rounded-[2rem]">
<div className="flex items-center gap-4 mb-6">
<img alt="Client" className="w-12 h-12 rounded-full object-cover" src="https://i.pravatar.cc/150?img=12"/>
<div>
<h4 className="font-medium text-zinc-900">Daniel K.</h4>
<p className="text-xs text-zinc-500">Architect, 62</p>
</div>
</div>
<p className="text-zinc-600 text-sm leading-relaxed">
                        "As someone with previous injuries, I struggled with exercise. After working with Andrew, I not only improved my strength but also secured new confidence in my body."
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto bg-zinc-50 rounded-[3rem] mb-12">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-5">
<span className="text-sm font-medium text-zinc-500 mb-2 block">FAQ</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-6">
                    Your QuestionsAnswered
                </h2>
<p className="text-zinc-600 mb-8 max-w-sm">
                    Answers to the most common questions about longevity coaching and men's health strategies.
                </p>
<button className="bg-zinc-900 text-white px-6 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2 hover:bg-zinc-800 transition-colors">
                    Contact Us
                    <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>
<div className="md:col-span-7 space-y-4">

<div className="bg-white p-6 rounded-2xl flex justify-between items-center cursor-pointer hover:shadow-sm transition-shadow">
<span className="font-medium text-zinc-900">Who can benefit from your coaching?</span>
<i className="w-5 h-5 text-zinc-400" data-lucide="plus"></i>
</div>

<div className="bg-white p-6 rounded-2xl cursor-pointer shadow-sm">
<div className="flex justify-between items-center mb-3">
<span className="font-medium text-zinc-900">Do I need to follow strict routines?</span>
<div className="bg-zinc-900 rounded p-0.5">
<i className="w-4 h-4 text-white" data-lucide="minus"></i>
</div>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">
                        No. All plans are tailored to your lifestyle and energy, focusing on small, sustainable changes rather than rigid, impossible rules.
                    </p>
</div>

<div className="bg-white p-6 rounded-2xl flex justify-between items-center cursor-pointer hover:shadow-sm transition-shadow">
<span className="font-medium text-zinc-900">How long are the coaching sessions?</span>
<i className="w-5 h-5 text-zinc-400" data-lucide="plus"></i>
</div>

<div className="bg-white p-6 rounded-2xl flex justify-between items-center cursor-pointer hover:shadow-sm transition-shadow">
<span className="font-medium text-zinc-900">Can I get support for old injuries?</span>
<i className="w-5 h-5 text-zinc-400" data-lucide="plus"></i>
</div>

<div className="bg-white p-6 rounded-2xl flex justify-between items-center cursor-pointer hover:shadow-sm transition-shadow">
<span className="font-medium text-zinc-900">How often do we check progress?</span>
<i className="w-5 h-5 text-zinc-400" data-lucide="plus"></i>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-950 text-white pt-20 pb-8 px-6 rounded-t-[3rem] mx-2">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 border-b border-white/10 pb-12">

<div className="col-span-1">
<div className="flex items-center gap-2 mb-6">
<i className="w-6 h-6 text-white" data-lucide="activity"></i>
<span className="text-xl font-medium tracking-tight">Kolasko</span>
</div>
</div>

<div className="col-span-1">
<h4 className="text-sm font-medium text-zinc-400 mb-6 uppercase tracking-wider">Quick Links</h4>
<ul className="space-y-4 text-sm text-zinc-300">
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Process</a></li>
<li><a className="hover:text-white transition-colors" href="#">Testimonial</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div className="col-span-1">
<h4 className="text-sm font-medium text-zinc-400 mb-6 uppercase tracking-wider">Contact</h4>
<ul className="space-y-4 text-sm text-zinc-300">
<li>+1 (212) 555-0123</li>
<li>Houston, Dallas, Austin</li>
<li>contact@kolasko.com</li>
</ul>
</div>

<div className="col-span-1">
<h4 className="text-sm font-medium text-zinc-400 mb-6 uppercase tracking-wider">Subscribe</h4>
<div className="bg-white rounded-full p-1 flex justify-between pl-4">
<input className="bg-transparent text-zinc-900 text-sm outline-none w-full placeholder-zinc-400" placeholder="Email" type="email"/>
<button className="bg-zinc-900 text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-zinc-800">Contact Us</button>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">
<div className="flex gap-6 mb-4 md:mb-0">
<a className="hover:text-zinc-300" href="#">Terms &amp; Condition</a>
<a className="hover:text-zinc-300" href="#">Privacy Policy</a>
</div>
<div className="flex gap-3 mb-4 md:mb-0">
<a className="bg-white text-zinc-900 p-1.5 rounded-full hover:bg-zinc-200" href="#"><i className="w-4 h-4 fill-current" data-lucide="facebook"></i></a>
<a className="bg-white text-zinc-900 p-1.5 rounded-full hover:bg-zinc-200" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="bg-white text-zinc-900 p-1.5 rounded-full hover:bg-zinc-200" href="#"><i className="w-4 h-4 fill-current" data-lucide="linkedin"></i></a>
</div>
<div>
                    © 2025 Kolasko. All Rights Reserved.
                </div>
</div>
</div>
</footer>


    </>
  );
}
