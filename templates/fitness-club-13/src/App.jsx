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
      
<div className="film-grain"></div>

<div className="preloader fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070709]">
<div className="preloader-word font-mono-custom text-2xl tracking-[0.2rem] text-white uppercase font-light">EVOLVE</div>
<div className="absolute bottom-0 left-0 h-[1px] bg-[#1797A6] preloader-line"></div>
</div>

<nav className="fixed top-0 w-full z-50 mix-blend-difference px-8 py-6 flex justify-between items-center">
<div className="flex items-center gap-2">

<svg fill="none" height="32" viewbox="0 0 200 200" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M40 50L130 50L150 70L80 70L60 110L120 110L100 150L40 150L40 50Z" fill="#e5e7eb"></path>
<path d="M70 150L130 150L160 90L100 90L70 150Z" fill="#1797A6"></path>
</svg>
<span className="font-sans font-medium text-xl tracking-tight text-white uppercase">Fitnexus</span>
</div>
<button className="font-mono-custom text-xs uppercase tracking-[0.1rem] text-white/70 hover:text-white transition-colors flex items-center gap-2 group">
            Menu
            <div className="flex flex-col gap-[3px]">
<span className="w-6 h-[1px] bg-white group-hover:w-4 transition-all duration-300"></span>
<span className="w-4 h-[1px] bg-white group-hover:w-6 transition-all duration-300"></span>
</div>
</button>
</nav>

<section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Athlete" className="w-full h-full object-cover opacity-20 filter grayscale contrast-150" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/60 to-transparent"></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(23,151,166,0.1),transparent_50%)]"></div>
</div>
<div className="relative z-10 text-center flex flex-col items-center mt-16 px-4">
<h1 className="font-sans text-[3rem] md:text-[6rem] lg:text-[8rem] font-medium tracking-tighter leading-[0.85] text-white">
                THIS IS WHERE
            </h1>
<h2 className="font-display italic text-[2.5rem] md:text-[5rem] lg:text-[7rem] text-[#1797A6] tracking-tight leading-[1] mt-2 pr-4">
                Mumbai Gets Dangerous.
            </h2>
<p className="font-mono-custom text-xs md:text-sm tracking-[0.25rem] uppercase text-white/50 mt-12 mb-16">
                12 disciplines. One address. Zero excuses.
            </p>
<div className="flex flex-col sm:flex-row gap-6 items-center">
<a className="btn-pulse relative group overflow-hidden bg-[#1797A6] text-[#070709] px-8 py-4 font-sans font-medium text-lg tracking-tight rounded-none" href="#trial">
<span className="relative z-10">CLAIM YOUR FREE TRIAL</span>
<div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
</a>
<a className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors font-sans font-medium text-lg tracking-tight" href="#tour">
<span className="w-8 h-[1px] bg-white/30 group-hover:w-12 group-hover:bg-white transition-all duration-300"></span>
                    TAKE THE TOUR
                </a>
</div>
</div>
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
<div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent overflow-hidden">
<div className="w-full h-1/2 bg-[#1797A6] animate-[bounce_2s_infinite]"></div>
</div>
</div>
</section>

<section className="relative py-40 overflow-hidden bg-[#070709] border-t border-white/5">

<div className="absolute top-1/2 -translate-y-1/2 left-0 w-[200%] flex whitespace-nowrap opacity-5 pointer-events-none">
<div className="animate-marquee font-display text-[10rem] font-medium tracking-tighter uppercase leading-none">
                PERFORM · RECOVER · DOMINATE · REPEAT · PERFORM · RECOVER · 
            </div>
<div className="animate-marquee font-display text-[10rem] font-medium tracking-tighter uppercase leading-none">
                PERFORM · RECOVER · DOMINATE · REPEAT · PERFORM · RECOVER · 
            </div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
<p className="font-sans text-2xl md:text-[2.5rem] leading-[1.3] tracking-tight text-white/90 font-light">
                Most places give you equipment. <span className="text-[#1797A6]">We give you transformation.</span> A space engineered for the athlete in every body — whether you're chasing a podium or just chasing better. Gym, pool, courts, ring, wall, mat, spa. Everything you need to break through, built under one roof in the heart of Mumbai.
            </p>
<p className="font-mono-custom text-xs tracking-[0.2rem] text-white/30 mt-16 uppercase">
                EST. 2024 · MUMBAI, INDIA
            </p>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
<div className="flex flex-col lg:flex-row gap-8">

<div className="group flex-1 relative h-[600px] overflow-hidden bg-[#0a0a0d] border border-white/5 p-8 flex flex-col justify-end hover:border-[#1797A6]/30 transition-colors duration-500">
<img alt="Gym" className="absolute inset-0 w-full h-full object-cover img-duotone opacity-40 group-hover:opacity-60" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0d] via-[#0a0a0d]/80 to-transparent"></div>
<div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="text-[#1797A6] mb-4"><i className="w-8 h-8" data-lucide="dumbbell" strokeWidth="1.5"></i></div>
<h3 className="font-display italic text-4xl text-white tracking-tight mb-2">Perform</h3>
<p className="font-sans text-lg text-white/60 mb-6 font-light">Push limits most people don't know they have.</p>
<ul className="font-mono-custom text-xs text-white/40 space-y-2 uppercase tracking-widest">
<li>Gym · MMA &amp; Boxing</li>
<li>Wall Climbing</li>
<li>Badminton &amp; Squash</li>
</ul>
</div>
</div>

<div className="group flex-1 relative h-[600px] overflow-hidden bg-[#0a0a0d] border border-white/5 p-8 flex flex-col justify-end hover:border-[#d97706]/30 transition-colors duration-500">
<img alt="Spa" className="absolute inset-0 w-full h-full object-cover img-duotone opacity-40 group-hover:opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0d] via-[#0a0a0d]/80 to-transparent"></div>
<div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="text-[#d97706] mb-4"><i className="w-8 h-8" data-lucide="droplets" strokeWidth="1.5"></i></div>
<h3 className="font-display italic text-4xl text-white tracking-tight mb-2">Recover</h3>
<p className="font-sans text-lg text-white/60 mb-6 font-light">Because greatness is built in the rest.</p>
<ul className="font-mono-custom text-xs text-white/40 space-y-2 uppercase tracking-widest">
<li>Sauna · Spa</li>
<li>Physiotherapy</li>
<li>Swimming Pool</li>
</ul>
</div>
</div>

<div className="group flex-1 relative h-[600px] overflow-hidden bg-[#0a0a0d] border border-white/5 p-8 flex flex-col justify-end hover:border-[#10b981]/30 transition-colors duration-500">
<img alt="Community" className="absolute inset-0 w-full h-full object-cover img-duotone opacity-40 group-hover:opacity-60" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0d] via-[#0a0a0d]/80 to-transparent"></div>
<div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="text-[#10b981] mb-4"><i className="w-8 h-8" data-lucide="users" strokeWidth="1.5"></i></div>
<h3 className="font-display italic text-4xl text-white tracking-tight mb-2">Connect</h3>
<p className="font-sans text-lg text-white/60 mb-6 font-light">Energy multiplies when it's shared.</p>
<ul className="font-mono-custom text-xs text-white/40 space-y-2 uppercase tracking-widest">
<li>Group Studio</li>
<li>Expert Coaching</li>
<li>Member Programmes</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
<div className="flex justify-between items-end mb-12">
<h2 className="font-sans text-4xl md:text-5xl font-medium tracking-tight text-white">12 Ways to Become Unstoppable</h2>
<a className="hidden md:flex items-center gap-2 text-[#1797A6] hover:text-white transition-colors font-mono-custom text-xs uppercase tracking-widest" href="#">
                View Full Arsenal <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-auto md:h-[900px]">

<div className="group relative md:col-span-2 md:row-span-2 overflow-hidden bg-[#111115] min-h-[400px]">
<img alt="Weight Floor" className="absolute inset-0 w-full h-full object-cover img-duotone" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-90"></div>
<div className="absolute top-6 left-6 font-mono-custom text-xs text-[#1797A6]">01</div>
<div className="absolute bottom-8 left-8 right-8">
<h3 className="font-sans text-3xl font-medium tracking-tight text-white mb-2">The Iron Floor</h3>
<p className="font-sans text-lg text-white/60 font-light opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">Where strength is built, not borrowed. 10,000 sq ft of pure performance.</p>
</div>
</div>

<div className="group relative md:col-span-2 md:row-span-1 overflow-hidden bg-[#111115] min-h-[300px]">
<img alt="Pool" className="absolute inset-0 w-full h-full object-cover img-duotone" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-90"></div>
<div className="absolute top-6 left-6 font-mono-custom text-xs text-[#1797A6]">02</div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="font-sans text-2xl font-medium tracking-tight text-white mb-1">Olympic Pool</h3>
<p className="font-sans text-lg text-white/60 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">25m temperature-controlled.</p>
</div>
</div>

<div className="group relative overflow-hidden bg-[#111115] min-h-[300px]">
<img alt="MMA" className="absolute inset-0 w-full h-full object-cover img-duotone" src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-90"></div>
<div className="absolute top-6 left-6 font-mono-custom text-xs text-[#1797A6]">03</div>
<div className="absolute bottom-6 left-6">
<h3 className="font-sans text-xl font-medium tracking-tight text-white">The Cage</h3>
</div>
</div>

<div className="group relative md:row-span-2 overflow-hidden bg-[#111115] min-h-[300px]">
<img alt="Climbing" className="absolute inset-0 w-full h-full object-cover img-duotone object-bottom" src="https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-90"></div>
<div className="absolute top-6 left-6 font-mono-custom text-xs text-[#1797A6]">04</div>
<div className="absolute bottom-6 left-6">
<h3 className="font-sans text-xl font-medium tracking-tight text-white">Summit Wall</h3>
</div>
</div>

<div className="group relative md:col-span-2 overflow-hidden bg-[#111115] min-h-[300px]">
<img alt="Sauna" className="absolute inset-0 w-full h-full object-cover img-duotone" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#070709] via-transparent to-transparent opacity-90"></div>
<div className="absolute top-6 left-6 font-mono-custom text-xs text-[#1797A6]">05</div>
<div className="absolute bottom-6 left-6 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:left-12">
<h3 className="font-sans text-2xl font-medium tracking-tight text-white mb-1">Thermal Spa</h3>
<p className="font-sans text-lg text-white/60 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">Nordic sauna &amp; ice baths.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-gradient-to-b from-[#070709] to-[#0a0a0d] border-y border-white/5 relative overflow-hidden">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1797A6]/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-32">
<div>
<div className="font-mono-custom text-5xl md:text-[4rem] text-white tracking-tighter mb-2">2,400<span className="text-[#1797A6]">+</span></div>
<div className="font-sans text-lg text-white/50 font-light">Members &amp; Growing</div>
</div>
<div>
<div className="font-mono-custom text-5xl md:text-[4rem] text-white tracking-tighter mb-2">18</div>
<div className="font-sans text-lg text-white/50 font-light">World-Class Coaches</div>
</div>
<div>
<div className="font-mono-custom text-5xl md:text-[4rem] text-white tracking-tighter mb-2">12</div>
<div className="font-sans text-lg text-white/50 font-light">Training Disciplines</div>
</div>
<div>
<div className="font-mono-custom text-5xl md:text-[4rem] text-white tracking-tighter mb-2">94<span className="text-[#1797A6]">%</span></div>
<div className="font-sans text-lg text-white/50 font-light">Member Retention</div>
</div>
</div>
<div className="max-w-4xl mx-auto text-center">
<p className="font-display italic text-3xl md:text-5xl text-white/90 tracking-tight leading-tight mb-12">
                    "I walked in expecting a gym. I found a community that forced me to elevate every single aspect of my life. Fitnexus isn't a membership, it's a standard."
                </p>
<div className="flex flex-col items-center gap-4">
<img alt="Member" className="w-16 h-16 rounded-full object-cover filter grayscale border border-white/20" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=150&amp;h=150&amp;q=80"/>
<div className="font-sans font-medium text-lg text-white">Rahul Verma</div>
<div className="font-mono-custom text-xs text-[#1797A6] uppercase tracking-widest">Triathlete · Member since 2022</div>
</div>
<div className="w-full max-w-xs mx-auto h-[1px] bg-white/10 mt-12 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-[#1797A6] w-1/3"></div> 
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 overflow-hidden">
<h2 className="font-sans text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">Taught by the Best. Period.</h2>
<p className="font-sans text-lg text-white/50 font-light mb-16">Every coach is a practitioner first, a teacher second.</p>
<div className="flex overflow-x-auto hide-scrollbar gap-6 pb-12 w-[100vw] -ml-6 px-6 md:-ml-12 md:px-12 snap-x">

<div className="group relative min-w-[300px] md:min-w-[400px] h-[500px] bg-[#111115] overflow-hidden snap-start shrink-0">
<img alt="Coach" className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex justify-between items-end mb-4">
<div>
<h3 className="font-sans text-2xl font-medium text-white tracking-tight">Sarah Chen</h3>
<div className="font-mono-custom text-xs text-[#1797A6] uppercase tracking-widest mt-1">Head of Strength</div>
</div>
<a className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white hover:text-[#1797A6]" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
</div>
<p className="font-display italic text-lg text-white/70">"Form dictates function. We build the foundation before we build the house."</p>
</div>
</div>
<div className="group relative min-w-[300px] md:min-w-[400px] h-[500px] bg-[#111115] overflow-hidden snap-start shrink-0">
<img alt="Coach" className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex justify-between items-end mb-4">
<div>
<h3 className="font-sans text-2xl font-medium text-white tracking-tight">Marcus Ray</h3>
<div className="font-mono-custom text-xs text-[#1797A6] uppercase tracking-widest mt-1">MMA Director</div>
</div>
<a className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white hover:text-[#1797A6]" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
</div>
<p className="font-display italic text-lg text-white/70">"Discipline weighs ounces. Regret weighs tons. Choose your weight."</p>
</div>
</div>
<div className="group relative min-w-[300px] md:min-w-[400px] h-[500px] bg-[#111115] overflow-hidden snap-start shrink-0">
<img alt="Coach" className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex justify-between items-end mb-4">
<div>
<h3 className="font-sans text-2xl font-medium text-white tracking-tight">Elena Rostova</h3>
<div className="font-mono-custom text-xs text-[#1797A6] uppercase tracking-widest mt-1">Recovery Specialist</div>
</div>
<a className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white hover:text-[#1797A6]" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
</div>
<p className="font-display italic text-lg text-white/70">"You don't grow when you train. You grow when you recover."</p>
</div>
</div>

<div className="min-w-[24px] md:min-w-[48px] shrink-0"></div>
</div>
</section>

<section className="py-32 bg-[#0a0a0d] relative" id="trial">
<div className="max-w-[1200px] mx-auto px-6 md:px-12">
<div className="text-center mb-20">
<h2 className="font-sans text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">Choose Your Level of Serious.</h2>
<p className="font-sans text-lg text-white/50 font-light">No lock-in contracts. Cancel anytime. First session always free.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

<div className="group border border-white/10 bg-[#070709]/50 backdrop-blur-sm p-8 hover:border-white/30 transition-colors duration-300 relative overflow-hidden">
<h3 className="font-mono-custom text-sm text-white/50 uppercase tracking-widest mb-6">Essential</h3>
<div className="flex items-baseline gap-2 mb-8">
<span className="font-sans text-5xl font-medium text-white tracking-tight">₹4k</span>
<span className="font-sans text-lg text-white/40 font-light">/mo</span>
</div>
<ul className="space-y-4 mb-10 font-sans text-lg text-white/70 font-light">
<li className="flex items-center gap-3"><i className="w-5 h-5 text-white/30" data-lucide="check" strokeWidth="1.5"></i> Single discipline access</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-white/30" data-lucide="check" strokeWidth="1.5"></i> Standard gym floor</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-white/30" data-lucide="check" strokeWidth="1.5"></i> Locker rooms</li>
</ul>
<button className="w-full py-4 border border-white/20 text-white font-sans font-medium text-lg tracking-tight hover:bg-white hover:text-black transition-colors duration-300">Start Essential</button>
</div>

<div className="group border border-[#1797A6]/50 bg-[#070709] p-10 md:scale-105 shadow-[0_0_40px_rgba(23,151,166,0.1)] relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#1797A6] to-transparent"></div>
<div className="absolute -top-4 -right-4 w-24 h-24 bg-[#1797A6]/20 blur-2xl rounded-full"></div>
<div className="flex justify-between items-center mb-6">
<h3 className="font-mono-custom text-sm text-[#1797A6] uppercase tracking-widest">Performance</h3>
<span className="text-[10px] font-mono-custom bg-[#1797A6]/10 text-[#1797A6] px-2 py-1 rounded-sm tracking-widest uppercase">Most Popular</span>
</div>
<div className="flex items-baseline gap-2 mb-8">
<span className="font-sans text-6xl font-medium text-white tracking-tight">₹8k</span>
<span className="font-sans text-lg text-white/40 font-light">/mo</span>
</div>
<ul className="space-y-4 mb-10 font-sans text-lg text-white/80 font-light">
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#1797A6]" data-lucide="check" strokeWidth="1.5"></i> Multi-discipline access</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#1797A6]" data-lucide="check" strokeWidth="1.5"></i> Unlimited group classes</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#1797A6]" data-lucide="check" strokeWidth="1.5"></i> Swimming pool access</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-[#1797A6]" data-lucide="check" strokeWidth="1.5"></i> Monthly body composition</li>
</ul>
<button className="w-full py-4 bg-[#1797A6] text-[#070709] font-sans font-medium text-lg tracking-tight hover:bg-[#14828f] transition-colors duration-300 shadow-[0_0_20px_rgba(23,151,166,0.3)]">Start Performance</button>
</div>

<div className="group border border-white/10 bg-[#070709]/50 backdrop-blur-sm p-8 hover:border-white/30 transition-colors duration-300 relative overflow-hidden">
<h3 className="font-mono-custom text-sm text-white/50 uppercase tracking-widest mb-6">Elite</h3>
<div className="flex items-baseline gap-2 mb-8">
<span className="font-sans text-5xl font-medium text-white tracking-tight">₹15k</span>
<span className="font-sans text-lg text-white/40 font-light">/mo</span>
</div>
<ul className="space-y-4 mb-10 font-sans text-lg text-white/70 font-light">
<li className="flex items-center gap-3"><i className="w-5 h-5 text-white/30" data-lucide="check" strokeWidth="1.5"></i> Total facility access</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-white/30" data-lucide="check" strokeWidth="1.5"></i> Spa &amp; Recovery Center</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-white/30" data-lucide="check" strokeWidth="1.5"></i> 2 PT sessions monthly</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-white/30" data-lucide="check" strokeWidth="1.5"></i> Physiotherapy consults</li>
</ul>
<button className="w-full py-4 border border-white/20 text-white font-sans font-medium text-lg tracking-tight hover:bg-white hover:text-black transition-colors duration-300">Apply for Elite</button>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 max-w-4xl mx-auto">
<h2 className="font-sans text-4xl md:text-5xl font-medium tracking-tight text-white mb-16 text-center">Everything you were about to Google.</h2>
<div className="space-y-2">
<details className="group bg-[#111115] border border-white/5 p-6 open:bg-[#16161c] transition-colors duration-300 cursor-pointer">
<summary className="flex justify-between items-center font-sans font-medium text-xl tracking-tight text-white/90 hover:text-white">
                    Do I need to be fit to join?
                    <i className="w-5 h-5 text-white/50 group-open:rotate-45 transition-transform duration-300" data-lucide="plus" strokeWidth="1.5"></i>
</summary>
<div className="pt-4 text-lg text-white/60 font-light leading-relaxed">
                    No. We build athletes from the ground up. Whether you're a seasoned competitor or stepping into a facility for the first time, our assessment process ensures you start exactly where you need to.
                </div>
</details>
<details className="group bg-[#111115] border border-white/5 p-6 open:bg-[#16161c] transition-colors duration-300 cursor-pointer">
<summary className="flex justify-between items-center font-sans font-medium text-xl tracking-tight text-white/90 hover:text-white">
                    What's included in a free trial?
                    <i className="w-5 h-5 text-white/50 group-open:rotate-45 transition-transform duration-300" data-lucide="plus" strokeWidth="1.5"></i>
</summary>
<div className="pt-4 text-lg text-white/60 font-light leading-relaxed">
                    Full access to the main floor, one group class of your choice, and a 30-minute consultation with a performance coach to map out your goals.
                </div>
</details>
<details className="group bg-[#111115] border border-white/5 p-6 open:bg-[#16161c] transition-colors duration-300 cursor-pointer">
<summary className="flex justify-between items-center font-sans font-medium text-xl tracking-tight text-white/90 hover:text-white">
                    Can I use multiple facilities in one visit?
                    <i className="w-5 h-5 text-white/50 group-open:rotate-45 transition-transform duration-300" data-lucide="plus" strokeWidth="1.5"></i>
</summary>
<div className="pt-4 text-lg text-white/60 font-light leading-relaxed">
                    Yes, on Performance and Elite tiers. You can lift, swim, and hit the sauna all in a single session. The facility is designed for cross-discipline flow.
                </div>
</details>
</div>
</section>

<section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-[#070709]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#1797A6]/20 blur-[100px] rounded-full animate-[breath-glow_6s_ease-in-out_infinite] pointer-events-none"></div>
<div className="relative z-10 flex flex-col items-center">
<h2 className="font-sans text-[4rem] md:text-[8rem] font-medium tracking-tighter leading-none text-white mb-6">
                Your first session<br/><span className="text-white/40 italic font-display">is on us.</span>
</h2>
<p className="font-mono-custom text-sm md:text-base tracking-[0.2rem] uppercase text-white/60 mb-12">
                Stop reading. Start training.
            </p>
<a className="group relative overflow-hidden bg-white text-[#070709] px-12 py-6 font-sans font-medium text-2xl tracking-tight rounded-none shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(23,151,166,0.4)] transition-all duration-500" href="#trial">
<span className="relative z-10 flex items-center gap-3">
                    BOOK MY FREE TRIAL
                    <i className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" data-lucide="arrow-right" strokeWidth="2"></i>
</span>
<div className="absolute inset-0 bg-[#1797A6] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
</a>
<div className="mt-16 flex items-center gap-6 font-sans text-lg text-white/50 font-light">
<a className="hover:text-white transition-colors flex items-center gap-2" href="#">
<i className="w-5 h-5" data-lucide="message-circle" strokeWidth="1.5"></i> +91 98765 43210
                </a>
<span className="w-1 h-1 bg-white/20 rounded-full"></span>
<a className="hover:text-white transition-colors flex items-center gap-2" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i> @fitnexus
                </a>
</div>
</div>
</section>

<footer className="border-t border-[#1797A6]/20 bg-[#070709] py-12 px-6 md:px-12">
<div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-50">
<svg fill="none" height="24" viewbox="0 0 200 200" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M40 50L130 50L150 70L80 70L60 110L120 110L100 150L40 150L40 50Z" fill="#e5e7eb"></path>
<path d="M70 150L130 150L160 90L100 90L70 150Z" fill="#e5e7eb"></path>
</svg>
<span className="font-sans font-medium text-lg tracking-tight text-white uppercase">Fitnexus</span>
</div>
<div className="flex gap-8 font-mono-custom text-xs uppercase tracking-widest text-white/40">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="font-sans text-sm text-white/30 font-light">
                © 2024 Fitnexus Studio. Mumbai.
            </div>
</div>
</footer>


    </>
  );
}
