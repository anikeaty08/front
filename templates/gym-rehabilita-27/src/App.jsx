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



        // Initialize Lucide icons
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
      

<header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl border-b bg-black/70 border-neutral-800/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-medium tracking-tight uppercase flex items-center gap-2 text-white hover:text-amber-500 transition-colors" href="#">
<i className="w-6 h-6" data-lucide="dumbbell" strokeWidth="1.5"></i>
                LEVO
            </a>
<nav className="hidden md:flex items-center gap-8 text-base font-normal text-neutral-400">
<a className="transition-colors hover:text-white" href="#about">About</a>
<a className="transition-colors hover:text-white" href="#services">Services</a>
<a className="transition-colors hover:text-white" href="#gallery">Gallery</a>
<a className="transition-colors hover:text-white" href="#pricing">Memberships</a>
<a className="transition-colors hover:text-white" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-base font-medium rounded-full transition-colors text-black bg-white hover:bg-neutral-200" href="#contact">
                    Book Session
                </a>
<button className="md:hidden text-neutral-100 hover:text-amber-500 transition-colors">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</header>
<main>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6 min-h-[90vh] flex flex-col justify-center border-b border-neutral-800/50">
<div className="absolute inset-0 z-0">
<img alt="Gym Background" className="w-full h-full object-cover grayscale opacity-20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
</div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium mb-8 border-amber-500/30 bg-amber-500/10 text-amber-500">
<span className="w-2 h-2 rounded-full animate-pulse bg-amber-500"></span>
                    Premium Facility in Kuwait City
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 leading-tight text-white">
                    Rebuild.<br/>Strengthen. <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">Elevate.</span>
</h1>
<p className="text-base md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    An elite environment fusing raw strength training with specialized clinical rehabilitation. Designed for those who demand more from their bodies.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 text-base font-medium rounded-full transition-all flex items-center justify-center gap-2 group text-black bg-white hover:bg-neutral-200" href="#pricing">
                        Explore Memberships
                        <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 text-base font-medium border rounded-full transition-colors flex items-center justify-center gap-2 text-white bg-black/50 backdrop-blur-sm border-neutral-700 hover:bg-neutral-900" href="#gallery">
                        View Facility
                    </a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-black" id="about">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 text-white">Bridging the gap between recovery and peak performance.</h2>
<p className="text-base text-neutral-400 mb-6 leading-relaxed">
                        At Levo, we believe that true fitness encompasses both structural integrity and muscular strength. Our facility is uniquely designed to serve athletes recovering from injury as well as individuals pushing their physical limits.
                    </p>
<p className="text-base text-neutral-400 mb-8 leading-relaxed">
                        Guided by certified physiotherapists and elite personal trainers, our evidence-based approach ensures every movement serves a purpose.
                    </p>
<div className="grid grid-cols-2 gap-8 pt-8 border-t border-neutral-800">
<div>
<div className="text-4xl font-medium tracking-tight mb-2 text-white">15+</div>
<div className="text-sm text-amber-500 font-medium uppercase tracking-wider">Expert Staff</div>
</div>
<div>
<div className="text-4xl font-medium tracking-tight mb-2 text-white">10k</div>
<div className="text-sm text-amber-500 font-medium uppercase tracking-wider">Sq Ft Facility</div>
</div>
</div>
</div>
<div className="relative group">
<div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl transition-transform group-hover:translate-x-2 group-hover:translate-y-2 bg-amber-500/20 border border-amber-500/30"></div>
<img alt="Levo Gym Training" className="relative z-10 rounded-2xl object-cover w-full h-[600px] grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-neutral-800/50 bg-neutral-950" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-white">Integrated Health Solutions</h2>
<p className="text-base text-neutral-400 max-w-xl mx-auto">Comprehensive programs tailored to your specific biomechanical needs and performance goals.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-10 rounded-2xl border transition-all duration-300 group cursor-pointer border-neutral-800 bg-black hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]">
<div className="w-14 h-14 rounded-full border flex items-center justify-center mb-8 group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500 transition-colors bg-neutral-900 border-neutral-800 text-white">
<i className="w-6 h-6" data-lucide="dumbbell" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4 text-white">Strength &amp; Conditioning</h3>
<p className="text-base text-neutral-400 leading-relaxed mb-8">State-of-the-art equipment and functional training spaces designed to build raw power, endurance, and agility.</p>
<span className="text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all text-amber-500">
                            Learn more <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</span>
</div>

<div className="p-10 rounded-2xl border transition-all duration-300 group cursor-pointer border-neutral-800 bg-black hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]">
<div className="w-14 h-14 rounded-full border flex items-center justify-center mb-8 group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500 transition-colors bg-neutral-900 border-neutral-800 text-white">
<i className="w-6 h-6" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4 text-white">Clinical Physiotherapy</h3>
<p className="text-base text-neutral-400 leading-relaxed mb-8">Targeted rehabilitation programs for post-surgery recovery, chronic pain management, and injury prevention.</p>
<span className="text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all text-amber-500">
                            Learn more <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</span>
</div>

<div className="p-10 rounded-2xl border transition-all duration-300 group cursor-pointer border-neutral-800 bg-black hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]">
<div className="w-14 h-14 rounded-full border flex items-center justify-center mb-8 group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500 transition-colors bg-neutral-900 border-neutral-800 text-white">
<i className="w-6 h-6" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4 text-white">1-on-1 Personal Training</h3>
<p className="text-base text-neutral-400 leading-relaxed mb-8">Dedicated coaching focusing on technique correction, customized programming, and accountability tracking.</p>
<span className="text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all text-amber-500">
                            Learn more <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-black" id="gallery">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-white">The Environment</h2>
<p className="text-base max-w-xl text-neutral-400">Take a look inside our premium facility designed for focus, effort, and recovery. High-performance equipment curated for optimal results.</p>
</div>
<button className="px-6 py-2.5 text-base font-medium border rounded-full transition-colors w-max text-white border-neutral-700 hover:bg-neutral-900">
                        View Full Gallery
                    </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="relative group overflow-hidden rounded-xl aspect-[4/3]">
<img alt="Free Weights Area" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div>
<h3 className="text-xl font-medium tracking-tight text-white mb-1">Free Weights Area</h3>
<p className="text-sm text-neutral-300">Premium calibrated plates and racks</p>
</div>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl aspect-[4/3] lg:col-span-2">
<img alt="Cardio Zone" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div>
<h3 className="text-xl font-medium tracking-tight text-white mb-1">Cardio &amp; Performance Zone</h3>
<p className="text-sm text-neutral-300">Unpowered treadmills and assault bikes with city views</p>
</div>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl aspect-[4/3] lg:col-span-2">
<img alt="Personal Training" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div>
<h3 className="text-xl font-medium tracking-tight text-white mb-1">1-on-1 Coaching</h3>
<p className="text-sm text-neutral-300">Form correction and personalized programming</p>
</div>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl aspect-[4/3]">
<img alt="Clinical Rehab Area" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div>
<h3 className="text-xl font-medium tracking-tight text-white mb-1">Clinical Therapy Rooms</h3>
<p className="text-sm text-neutral-300">Private spaces for recovery and assessment</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y bg-neutral-950 border-neutral-800/50" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-white">Membership Plans</h2>
<p className="text-base text-neutral-400 max-w-xl mx-auto">Transparent pricing. No hidden fees. Choose the tier that aligns with your goals.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">

<div className="p-8 rounded-3xl border border-neutral-800 bg-black">
<div className="text-sm font-medium text-neutral-500 mb-4 uppercase tracking-wider">Access</div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-5xl font-medium tracking-tight text-white">KD 45</span>
<span className="text-base text-neutral-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 text-base text-neutral-400">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-white" data-lucide="check-circle" strokeWidth="1.5"></i> Full gym access
                            </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-white" data-lucide="check-circle" strokeWidth="1.5"></i> Locker room &amp; amenities
                            </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-white" data-lucide="check-circle" strokeWidth="1.5"></i> 1 Group class per week
                            </li>
<li className="flex items-center gap-3 text-neutral-700">
<i className="w-5 h-5" data-lucide="x-circle" strokeWidth="1.5"></i> Physiotherapy consultation
                            </li>
</ul>
<button className="w-full py-3.5 text-base font-medium border rounded-full transition-colors text-white border-neutral-700 hover:bg-neutral-900">Select Plan</button>
</div>

<div className="p-8 rounded-3xl border border-amber-500 relative shadow-2xl shadow-amber-500/10 transform md:-translate-y-4 bg-black">
<div className="absolute top-0 right-8 -translate-y-1/2 px-4 py-1.5 text-sm font-medium rounded-full uppercase tracking-wider bg-amber-500 text-black">Popular</div>
<div className="text-sm font-medium mb-4 uppercase tracking-wider text-amber-500">Performance</div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-5xl font-medium tracking-tight text-white">KD 85</span>
<span className="text-base text-neutral-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 text-base text-neutral-300">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-amber-500" data-lucide="check-circle" strokeWidth="1.5"></i> 24/7 Full gym access
                            </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-amber-500" data-lucide="check-circle" strokeWidth="1.5"></i> Unlimited group classes
                            </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-amber-500" data-lucide="check-circle" strokeWidth="1.5"></i> 2 PT sessions per month
                            </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-amber-500" data-lucide="check-circle" strokeWidth="1.5"></i> 1 Physiotherapy check-up
                            </li>
</ul>
<button className="w-full py-3.5 text-base font-medium rounded-full transition-colors bg-white text-black hover:bg-neutral-200">Select Plan</button>
</div>

<div className="p-8 rounded-3xl border border-neutral-800 bg-black">
<div className="text-sm font-medium text-neutral-500 mb-4 uppercase tracking-wider">Clinical</div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-5xl font-medium tracking-tight text-white">Custom</span>
</div>
<ul className="space-y-4 mb-8 text-base text-neutral-400">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-white" data-lucide="check-circle" strokeWidth="1.5"></i> Initial bio-assessment
                            </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-white" data-lucide="check-circle" strokeWidth="1.5"></i> Tailored recovery plan
                            </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-white" data-lucide="check-circle" strokeWidth="1.5"></i> 1-on-1 physio sessions
                            </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-white" data-lucide="check-circle" strokeWidth="1.5"></i> Progress tracking
                            </li>
</ul>
<button className="w-full py-3.5 text-base font-medium border rounded-full transition-colors text-white border-neutral-700 hover:bg-neutral-900">Contact Us</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 overflow-hidden bg-black">
<div className="max-w-7xl mx-auto text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-white">Client Outcomes</h2>
</div>
<div className="flex gap-6 overflow-x-auto no-scrollbar pb-8 px-6 md:px-0 max-w-7xl mx-auto snap-x">
<div className="min-w-[300px] md:min-w-[400px] p-8 rounded-2xl border snap-center border-neutral-800 bg-neutral-950">
<div className="flex gap-1 mb-6 text-amber-500">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-base italic mb-8 text-neutral-300">"Following knee surgery, I needed a place that understood rehab isn't just stretching. The team at Levo integrated strength work perfectly. I'm stronger than before my injury."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full flex items-center justify-center font-medium text-sm text-neutral-400 bg-neutral-900 border border-neutral-800">FA</div>
<div>
<div className="text-base font-medium text-white">Fahad A.</div>
<div className="text-sm text-neutral-500">Rehab Client</div>
</div>
</div>
</div>
<div className="min-w-[300px] md:min-w-[400px] p-8 rounded-2xl border snap-center border-neutral-800 bg-neutral-950">
<div className="flex gap-1 mb-6 text-amber-500">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-base italic mb-8 text-neutral-300">"The equipment here is top-tier. Clean aesthetic, no distractions, just pure focus. The personal trainers actually correct form and program logically."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full flex items-center justify-center font-medium text-sm text-neutral-400 bg-neutral-900 border border-neutral-800">SM</div>
<div>
<div className="text-base font-medium text-white">Sara M.</div>
<div className="text-sm text-neutral-500">Performance Member</div>
</div>
</div>
</div>
<div className="min-w-[300px] md:min-w-[400px] p-8 rounded-2xl border snap-center border-neutral-800 bg-neutral-950">
<div className="flex gap-1 mb-6 text-amber-500">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-base italic mb-8 text-neutral-300">"Best facility in Kuwait City hands down. The integration of clinical staff with gym floor trainers creates a seamless experience for anyone serious about health."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full flex items-center justify-center font-medium text-sm text-neutral-400 bg-neutral-900 border border-neutral-800">YK</div>
<div>
<div className="text-base font-medium text-white">Yousef K.</div>
<div className="text-sm text-neutral-500">Access Member</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-neutral-800/50 bg-neutral-950">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

<div id="faq">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-8 text-white">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group rounded-xl border p-5 open:bg-neutral-900 transition-colors border-neutral-800 bg-black" open="">
<summary className="flex cursor-pointer items-center justify-between text-base font-medium text-white outline-none">
                                What are your operating hours?
                                <span className="transition group-open:rotate-180 text-neutral-500">
<i className="w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="mt-4 text-base text-neutral-400 leading-relaxed">
                                We are open 24/7 for Premium members. Standard access hours are 5:00 AM to 11:00 PM daily. Physiotherapy clinics operate by appointment from 8:00 AM to 8:00 PM.
                            </div>
</details>
<details className="group rounded-xl border p-5 open:bg-neutral-900 transition-colors border-neutral-800 bg-black">
<summary className="flex cursor-pointer items-center justify-between text-base font-medium text-white outline-none">
                                Do I need a referral for rehabilitation?
                                <span className="transition group-open:rotate-180 text-neutral-500">
<i className="w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="mt-4 text-base text-neutral-400 leading-relaxed">
                                No medical referral is required to book a consultation with our physiotherapy team, though we welcome clients sent by orthopedic specialists.
                            </div>
</details>
<details className="group rounded-xl border p-5 open:bg-neutral-900 transition-colors border-neutral-800 bg-black">
<summary className="flex cursor-pointer items-center justify-between text-base font-medium text-white outline-none">
                                Are locker rooms equipped with showers?
                                <span className="transition group-open:rotate-180 text-neutral-500">
<i className="w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="mt-4 text-base text-neutral-400 leading-relaxed">
                                Yes, we offer premium locker facilities including individual shower suites, towels, and essential grooming products.
                            </div>
</details>
</div>
</div>

<div id="blog">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white">Latest from Journal</h2>
<a className="text-sm font-medium text-amber-500 hover:text-amber-400 flex items-center gap-1" href="#">View all <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
<div className="space-y-6">
<article className="flex gap-5 group cursor-pointer items-center">
<img alt="Blog 1" className="w-28 h-28 object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="flex flex-col justify-center">
<span className="text-sm mb-2 text-neutral-500 font-medium">Oct 12, 2023 • Rehab</span>
<h3 className="text-lg font-medium mb-2 group-hover:text-amber-500 transition-colors text-white tracking-tight">The role of mobility in strength training</h3>
<p className="text-sm text-neutral-400 line-clamp-2">Understanding why stretching isn't enough to prevent injury under heavy loads.</p>
</div>
</article>
<article className="flex gap-5 group cursor-pointer items-center">
<img alt="Blog 2" className="w-28 h-28 object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="flex flex-col justify-center">
<span className="text-sm mb-2 text-neutral-500 font-medium">Sep 28, 2023 • Training</span>
<h3 className="text-lg font-medium mb-2 group-hover:text-amber-500 transition-colors text-white tracking-tight">Progressive overload explained</h3>
<p className="text-sm text-neutral-400 line-clamp-2">How to systematically increase demands on the musculoskeletal system.</p>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-black" id="contact">
<div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-16">
<div className="md:col-span-2">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-white">Get in Touch</h2>
<p className="text-base text-neutral-400 mb-10">Ready to start? Fill out the form or reach us directly at our Kuwait City location.</p>
<div className="space-y-8">
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-full border flex items-center justify-center shrink-0 bg-neutral-900 border-neutral-800 text-amber-500">
<i className="w-5 h-5" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div className="pt-1">
<h4 className="text-base font-medium mb-1 text-white">Location</h4>
<p className="text-base text-neutral-400">9XGH+G8H, Ahmad Al Jaber St,<br/>Kuwait City, Kuwait</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-full border flex items-center justify-center shrink-0 bg-neutral-900 border-neutral-800 text-amber-500">
<i className="w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div className="pt-1">
<h4 className="text-base font-medium mb-1 text-white">Phone</h4>
<p className="text-base text-neutral-400">+965 9415 9699</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-full border flex items-center justify-center shrink-0 bg-neutral-900 border-neutral-800 text-amber-500">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div className="pt-1">
<h4 className="text-base font-medium mb-1 text-white">Email</h4>
<p className="text-base text-neutral-400">info@levogym.com</p>
</div>
</div>
</div>
</div>
<div className="md:col-span-3 p-8 md:p-10 rounded-3xl border bg-neutral-950 border-neutral-800">
<form className="space-y-8">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
<div>
<label className="block text-sm font-medium mb-2 text-neutral-400">First Name</label>
<input className="w-full bg-transparent border-b py-2.5 text-base focus:outline-none focus:border-amber-500 transition-colors border-neutral-700 text-white placeholder:text-neutral-600" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-sm font-medium mb-2 text-neutral-400">Last Name</label>
<input className="w-full bg-transparent border-b py-2.5 text-base focus:outline-none focus:border-amber-500 transition-colors border-neutral-700 text-white placeholder:text-neutral-600" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium mb-2 text-neutral-400">Email Address</label>
<input className="w-full bg-transparent border-b py-2.5 text-base focus:outline-none focus:border-amber-500 transition-colors border-neutral-700 text-white placeholder:text-neutral-600" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium mb-2 text-neutral-400">Inquiry Type</label>
<div className="relative">
<select className="w-full bg-transparent border-b py-2.5 text-base focus:outline-none focus:border-amber-500 transition-colors appearance-none cursor-pointer border-neutral-700 text-white">
<option className="bg-neutral-900 text-white">Gym Membership</option>
<option className="bg-neutral-900 text-white">Physiotherapy Appointment</option>
<option className="bg-neutral-900 text-white">Personal Training</option>
<option className="bg-neutral-900 text-white">Other</option>
</select>
<i className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500 w-5 h-5" data-lucide="chevron-down"></i>
</div>
</div>
<div>
<label className="block text-sm font-medium mb-2 text-neutral-400">Message</label>
<textarea className="w-full bg-transparent border-b py-2.5 text-base focus:outline-none focus:border-amber-500 transition-colors resize-none border-neutral-700 text-white placeholder:text-neutral-600" placeholder="Tell us about your goals..." rows="3"></textarea>
</div>
<button className="w-full py-4 px-6 text-base font-medium rounded-full transition-colors text-black bg-white hover:bg-neutral-200" type="button">
                            Submit Request
                        </button>
</form>
</div>
</div>
</section>
</main>

<footer className="pt-16 pb-8 px-6 border-t bg-black text-white border-neutral-800">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-2xl font-medium tracking-tight uppercase flex items-center gap-2 mb-6" href="#">
<i className="w-6 h-6 text-amber-500" data-lucide="dumbbell" strokeWidth="1.5"></i>
                    LEVO
                </a>
<p className="text-sm leading-relaxed mb-6 text-neutral-400">
                    Elevating physical potential through integrated strength training and clinical rehabilitation.
                </p>
</div>
<div>
<h4 className="text-base font-medium mb-6 text-white">Facility</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li><a className="transition-colors hover:text-amber-500" href="#about">About Us</a></li>
<li><a className="transition-colors hover:text-amber-500" href="#services">Services</a></li>
<li><a className="transition-colors hover:text-amber-500" href="#pricing">Pricing</a></li>
<li><a className="transition-colors hover:text-amber-500" href="#gallery">Gallery</a></li>
</ul>
</div>
<div>
<h4 className="text-base font-medium mb-6 text-white">Support</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li><a className="transition-colors hover:text-amber-500" href="#faq">FAQ</a></li>
<li><a className="transition-colors hover:text-amber-500" href="#contact">Contact</a></li>
<li><a className="transition-colors hover:text-amber-500" href="#">Terms of Service</a></li>
<li><a className="transition-colors hover:text-amber-500" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-base font-medium mb-6 text-white">Social</h4>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center transition-colors text-neutral-400 hover:text-amber-500 hover:border-amber-500 bg-neutral-900" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center transition-colors text-neutral-400 hover:text-amber-500 hover:border-amber-500 bg-neutral-900" href="#">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 border-neutral-800">
<p className="text-sm text-neutral-500">© 2023 Levo Gym &amp; Rehabilitation Center. All rights reserved.</p>
<p className="text-sm text-neutral-500 flex items-center gap-1">
                Designed in Kuwait City
            </p>
</div>
</footer>

<a className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-2xl shadow-amber-500/20 hover:-translate-y-1 transition-all z-50 flex items-center justify-center group bg-amber-500 text-black" href="https://wa.me/96594159699" rel="noopener noreferrer" target="_blank">
<i className="w-6 h-6 group-hover:animate-pulse" data-lucide="message-circle" strokeWidth="1.5"></i>
</a>


    </>
  );
}
