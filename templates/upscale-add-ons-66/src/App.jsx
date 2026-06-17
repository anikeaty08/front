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



tailwind.config = {
theme: {
extend: {
colors: {
upscale: {
black: '#000000',
charcoal: '#0A0A0A',
gold: '#D4AF37',
blue: '#00BFFF',
white: '#FFFFFF',
gray: '#333333',
green: '#10B981'
}
},
fontFamily: {
serif: ['Playfair Display', 'serif'],
sans: ['Montserrat', 'sans-serif'],
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'shine': 'shine 4s linear infinite',
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const reveals = document.querySelectorAll('.reveal');

            const revealOnScroll = () => {
                const windowHeight = window.innerHeight;
                const elementVisible = 100;

                reveals.forEach((reveal) => {
                    const elementTop = reveal.getBoundingClientRect().top;
                    if (elementTop < windowHeight - elementVisible) {
                        reveal.classList.add('active');
                    }
                });
            };

            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll(); // Trigger once on load
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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5 bg-black/90 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<span className="font-serif text-xl md:text-2xl text-upscale-gold tracking-tight">Upscale <span className="text-white">Realty Media</span></span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium uppercase tracking-widest text-gray-400 hover:text-upscale-blue transition-colors" href="#services">Services</a>
<a className="text-xs font-medium uppercase tracking-widest text-gray-400 hover:text-upscale-blue transition-colors" href="#retainers">Retainers</a>
<a className="text-xs font-medium uppercase tracking-widest text-gray-400 hover:text-upscale-blue transition-colors" href="#work">Our Work</a>
<a className="text-xs font-medium uppercase tracking-widest text-gray-400 hover:text-upscale-blue transition-colors" href="#why-us">Why Us</a>
</div>

<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold tracking-wider uppercase text-black bg-upscale-blue rounded-full hover:bg-white transition-all duration-300 blue-glow transform hover:scale-105" href="https://spiro.media/book">
          Book Now
        </a>

<button className="md:hidden text-white hover:text-upscale-blue transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Home" className="w-full h-full object-cover opacity-30 animate-[pulse-slow_8s_ease-in-out_infinite]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0a626434-60d5-4226-a152-c47346c8d38b_3840w.png" style={{}}/>
<div className="bg-gradient-to-t from-black via-black/80 to-black/40 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-upscale-blue/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center reveal active">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md hover:border-upscale-gold/50 transition-colors cursor-default">
<iconify-icon className="text-upscale-gold" icon="solar:cup-star-bold"></iconify-icon>
<span className="text-[10px] uppercase tracking-widest text-white font-medium">The #1 Media Partner for Modern Agents</span>
</div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] mb-6 text-white">
          Upscale Your Brand.
          <br/>
<span className="gold-text-gradient italic pr-2">Sell the Lifestyle.</span>
</h1>
<p className="text-gray-300 text-lg md:text-xl font-light max-w-3xl mx-auto mb-10 leading-relaxed">
          Top producers choose Upscale because we understand that in today's market, <strong>you</strong> are the brand. We don't just shoot listings; we engineer media that dominates the algorithm and sells your authority.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-10 py-4 bg-upscale-blue text-black font-bold tracking-wide text-sm rounded-full hover:bg-white transition-all duration-300 blue-glow flex items-center justify-center gap-2 group" href="#services">
            Book One-Off Shoot
            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-10 py-4 border border-white/20 bg-white/5 backdrop-blur-sm text-white font-medium tracking-wide text-sm rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2" href="#retainers">
            View Monthly Retainers
          </a>
</div>
</div>
</section>

<section className="bg-black border-white/5 border-t pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="reveal text-center mb-16">
<h2 className="font-serif text-4xl text-white mb-4">Why We Are The <span className="text-upscale-gold italic">Best Choice</span></h2>
<p className="text-gray-400 text-sm">We provide what other photographers miss: Strategy.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group glass-card p-6 rounded-3xl hover:border-upscale-blue/30 transition-all duration-500 reveal relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-upscale-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="relative w-24 h-48 mx-auto mb-6 bg-black border-[4px] border-neutral-800 rounded-[1.5rem] shadow-2xl overflow-hidden iphone-frame group-hover:scale-105 transition-transform duration-500">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-3 bg-black rounded-b-lg z-20"></div>
<div className="flex bg-neutral-900 w-full h-full items-center justify-center">
<iconify-icon className="text-upscale-gold text-3xl animate-pulse" icon="solar:user-circle-bold"></iconify-icon>
</div>

<div className="absolute bottom-2 right-2 flex flex-col gap-1">
<div className="w-3 h-3 rounded-full bg-white/20"></div>
<div className="w-3 h-3 rounded-full bg-white/20"></div>
</div>
</div>
<h3 className="text-lg font-serif text-white mb-2 text-center relative z-10">Agent-First Focus</h3>
<p className="text-xs text-gray-400 text-center leading-relaxed relative z-10">
               We know homes sell, but your brand brings the next client. We make YOU look like the authority.
             </p>
</div>

<div className="group glass-card p-6 rounded-3xl hover:border-upscale-blue/30 transition-all duration-500 reveal relative overflow-hidden delay-100">
<div className="absolute inset-0 bg-gradient-to-b from-upscale-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="relative w-24 h-48 mx-auto mb-6 bg-black border-[4px] border-neutral-800 rounded-[1.5rem] shadow-2xl overflow-hidden iphone-frame group-hover:scale-105 transition-transform duration-500">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-3 bg-black rounded-b-lg z-20"></div>
<div className="w-full h-full bg-neutral-900 relative">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>

<div className="absolute inset-0 flex items-center justify-center z-20">
<iconify-icon className="text-white text-2xl" icon="solar:play-bold"></iconify-icon>
</div>
</div>
</div>
<h3 className="text-lg font-serif text-white mb-2 text-center relative z-10">Algorithm-Ready</h3>
<p className="text-xs text-gray-400 text-center leading-relaxed relative z-10">
               We don't just deliver files; we deliver viral-ready reels optimized for TikTok &amp; IG engagement.
             </p>
</div>

<div className="group glass-card p-6 rounded-3xl hover:border-upscale-blue/30 transition-all duration-500 reveal relative overflow-hidden delay-200">
<div className="absolute inset-0 bg-gradient-to-b from-upscale-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="h-48 flex items-center justify-center mb-6">
<iconify-icon className="text-white text-6xl group-hover:scale-110 transition-transform duration-500" icon="solar:camera-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-serif text-white mb-2 text-center relative z-10">Luxury Standard</h3>
<p className="text-xs text-gray-400 text-center leading-relaxed relative z-10">
              High-end editorial photography that captures the lifestyle essence modern buyers demand.
            </p>
</div>

<div className="group glass-card p-6 rounded-3xl hover:border-upscale-blue/30 transition-all duration-500 reveal relative overflow-hidden delay-300">
<div className="absolute inset-0 bg-gradient-to-b from-upscale-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="relative w-24 h-48 mx-auto mb-6 bg-black border-[4px] border-neutral-800 rounded-[1.5rem] shadow-2xl overflow-hidden iphone-frame group-hover:scale-105 transition-transform duration-500">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-3 bg-black rounded-b-lg z-20"></div>
<div className="w-full h-full bg-neutral-900 flex items-center justify-center">
<iconify-icon className="text-upscale-blue text-3xl animate-spin-slow" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-serif text-white mb-2 text-center relative z-10">Full Tech Suite</h3>
<p className="text-xs text-gray-400 text-center leading-relaxed relative z-10">
              Interactive 3D tours and tools that show sellers you are on the cutting edge of tech.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-upscale-charcoal relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center reveal">
<h2 className="font-serif text-4xl md:text-5xl font-medium text-white mb-4 tracking-tight">
            Listing Packages
          </h2>
<p className="text-gray-400 font-light text-lg">
            Everything you need to go to market. <span className="text-upscale-blue">$0 due until close.</span>
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">

<div className="glass-card rounded-2xl p-6 border border-white/5 hover:border-white/20 transition-all duration-300 reveal flex flex-col h-full">
<h3 className="text-lg font-serif text-white mb-2">Foundation</h3>
<div className="text-3xl font-serif text-upscale-gold mb-6">$398</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-2 text-xs text-gray-300 font-light"><iconify-icon className="text-upscale-gold mt-0.5 min-w-[14px]" icon="solar:check-circle-linear"></iconify-icon> 30-38 MLS Photos</li>
<li className="flex items-start gap-2 text-xs text-gray-300 font-light"><iconify-icon className="text-upscale-gold mt-0.5 min-w-[14px]" icon="solar:check-circle-linear"></iconify-icon> Schematic Floor Plan</li>
<li className="flex items-start gap-2 text-xs text-gray-300 font-light"><iconify-icon className="text-upscale-gold mt-0.5 min-w-[14px]" icon="solar:check-circle-linear"></iconify-icon> 1 Branded Reel</li>
<li className="flex items-start gap-2 text-xs text-gray-300 font-light"><iconify-icon className="text-upscale-gold mt-0.5 min-w-[14px]" icon="solar:check-circle-linear"></iconify-icon> Basic Listing Microsite</li>
<li className="flex items-start gap-2 text-xs text-gray-300 font-light"><iconify-icon className="text-upscale-gold mt-0.5 min-w-[14px]" icon="solar:check-circle-linear"></iconify-icon> Starter Marketing Kit</li>
<li className="flex items-start gap-2 text-xs text-gray-300 font-light"><iconify-icon className="text-upscale-gold mt-0.5 min-w-[14px]" icon="solar:check-circle-linear"></iconify-icon> Bonus: 8-Tip Brand Guide</li>
</ul>
<a className="block w-full py-3 text-center border border-white/20 rounded-lg text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors" href="https://spiro.media/book">Book Now</a>
</div>

<div className="glass-card rounded-2xl p-6 border border-upscale-blue relative transform md:-translate-y-4 shadow-[0_0_40px_-20px_rgba(0,191,255,0.3)] reveal flex flex-col h-full bg-neutral-900">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-upscale-blue text-black px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">Most Popular</div>
<h3 className="text-xl font-serif text-white mb-2 mt-2">Builder</h3>
<div className="text-4xl font-serif text-upscale-blue mb-6">$598</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-2 text-xs text-white font-medium"><iconify-icon className="text-upscale-blue mt-0.5 min-w-[14px]" icon="solar:check-circle-bold"></iconify-icon> 55 MLS Photos (Adv. Retouch)</li>
<li className="flex items-start gap-2 text-xs text-white font-medium"><iconify-icon className="text-upscale-blue mt-0.5 min-w-[14px]" icon="solar:check-circle-bold"></iconify-icon> 10 Drone Photos + Clips</li>
<li className="flex items-start gap-2 text-xs text-white font-medium"><iconify-icon className="text-upscale-blue mt-0.5 min-w-[14px]" icon="solar:check-circle-bold"></iconify-icon> Viral Reel (Drone + Intro)</li>
<li className="flex items-start gap-2 text-xs text-white font-medium"><iconify-icon className="text-upscale-blue mt-0.5 min-w-[14px]" icon="solar:check-circle-bold"></iconify-icon> Interactive 3D Floor Plan</li>
<li className="flex items-start gap-2 text-xs text-white font-medium"><iconify-icon className="text-upscale-blue mt-0.5 min-w-[14px]" icon="solar:check-circle-bold"></iconify-icon> Virtual Twilight Option</li>
<li className="flex items-start gap-2 text-xs text-white font-medium"><iconify-icon className="text-upscale-blue mt-0.5 min-w-[14px]" icon="solar:check-circle-bold"></iconify-icon> Custom Listing Microsite</li>
</ul>
<a className="block w-full py-3 text-center bg-upscale-blue rounded-lg text-xs uppercase tracking-widest text-black font-bold hover:bg-white transition-colors blue-glow" href="https://spiro.media/book">Book Builder</a>
</div>

<div className="glass-card rounded-2xl p-6 border border-white/5 hover:border-white/20 transition-all duration-300 reveal flex flex-col h-full">
<h3 className="text-lg font-serif text-white mb-2">Accelerator</h3>
<div className="text-3xl font-serif text-upscale-gold mb-6">$998</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-2 text-xs text-gray-300 font-light"><iconify-icon className="text-white mt-0.5 min-w-[14px]" icon="solar:check-circle-linear"></iconify-icon> Unlimited MLS Photos</li>
<li className="flex items-start gap-2 text-xs text-gray-300 font-light"><iconify-icon className="text-white mt-0.5 min-w-[14px]" icon="solar:check-circle-linear"></iconify-icon> 10+ Drone Photos</li>
<li className="flex items-start gap-2 text-xs text-gray-300 font-light"><iconify-icon className="text-white mt-0.5 min-w-[14px]" icon="solar:check-circle-linear"></iconify-icon> Cinematic Listing Reel</li>
<li className="flex items-start gap-2 text-xs text-gray-300 font-light"><iconify-icon className="text-white mt-0.5 min-w-[14px]" icon="solar:check-circle-linear"></iconify-icon> Real Twilight Photography</li>
<li className="flex items-start gap-2 text-xs text-gray-300 font-light"><iconify-icon className="text-white mt-0.5 min-w-[14px]" icon="solar:check-circle-linear"></iconify-icon> Full Interactive Tools</li>
<li className="flex items-start gap-2 text-xs text-gray-300 font-light"><iconify-icon className="text-white mt-0.5 min-w-[14px]" icon="solar:check-circle-linear"></iconify-icon> Day-to-Night Video Teaser</li>
</ul>
<a className="block w-full py-3 text-center border border-white/20 rounded-lg text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors" href="https://spiro.media/book">Book Now</a>
</div>

<div className="glass-card rounded-2xl p-6 border border-white/5 hover:border-upscale-gold/30 transition-all duration-300 reveal flex flex-col h-full bg-gradient-to-b from-upscale-gold/10 to-transparent">
<h3 className="text-lg font-serif text-white mb-2">Pinnacle</h3>
<div className="text-3xl font-serif text-white mb-6">$1,998+</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-2 text-xs text-gray-300 font-light"><iconify-icon className="text-upscale-gold mt-0.5 min-w-[14px]" icon="solar:star-circle-bold"></iconify-icon> All Accelerator Features</li>
<li className="flex items-start gap-2 text-xs text-gray-300 font-light"><iconify-icon className="text-upscale-gold mt-0.5 min-w-[14px]" icon="solar:star-circle-bold"></iconify-icon> Full Day-to-Night Video</li>
<li className="flex items-start gap-2 text-xs text-gray-300 font-light"><iconify-icon className="text-upscale-gold mt-0.5 min-w-[14px]" icon="solar:star-circle-bold"></iconify-icon> Premium Agent On-Camera</li>
<li className="flex items-start gap-2 text-xs text-gray-300 font-light"><iconify-icon className="text-upscale-gold mt-0.5 min-w-[14px]" icon="solar:star-circle-bold"></iconify-icon> MLS Re-shoot Options</li>
<li className="flex items-start gap-2 text-xs text-gray-300 font-light"><iconify-icon className="text-upscale-gold mt-0.5 min-w-[14px]" icon="solar:star-circle-bold"></iconify-icon> Dedicated Brand Strategy</li>
<li className="flex items-start gap-2 text-xs text-gray-300 font-light"><iconify-icon className="text-upscale-gold mt-0.5 min-w-[14px]" icon="solar:star-circle-bold"></iconify-icon> Unlimited Revisions</li>
</ul>
<a className="block w-full py-3 text-center bg-upscale-gold text-black rounded-lg text-xs uppercase tracking-widest font-bold hover:bg-white transition-colors" href="https://spiro.media/book">Contact Us</a>
</div>
</div>
</div>
</section>

<div className="relative h-px w-full max-w-7xl mx-auto bg-gradient-to-r from-transparent via-upscale-gold to-transparent opacity-50 my-12"></div>

<section className="py-12 bg-black relative" id="retainers">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-upscale-gold/5 via-transparent to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal">
<h2 className="font-serif text-4xl md:text-5xl font-medium text-white mb-6">Dominate Your Market with <br/><span className="text-upscale-gold italic">Consistent Media</span></h2>
<p className="text-gray-400 font-light max-w-3xl mx-auto">
                    The best agents don't post randomly—they have a strategy. Our retainers give you the recurring, high-performance content you need to stay top-of-mind and win more listings.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

<div className="glass-card hover:border-upscale-blue transition-all duration-300 group reveal border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<h3 className="text-2xl font-serif text-white mb-1">Momentum Foundation</h3>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-4xl font-serif text-upscale-gold">$1,698</span>
<span className="text-sm text-gray-400">/ month</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-300"><iconify-icon className="text-white" icon="solar:check-circle-bold"></iconify-icon> 4 High-Performance Brand Videos</li>
<li className="flex items-center gap-3 text-sm text-gray-300"><iconify-icon className="text-white" icon="solar:check-circle-bold"></iconify-icon> Optimized for Reels/TikTok/Shorts</li>
<li className="flex items-center gap-3 text-sm text-gray-300"><iconify-icon className="text-white" icon="solar:check-circle-bold"></iconify-icon> Monthly Strategy &amp; Posting Plan</li>
<li className="flex items-center gap-3 text-sm text-gray-300"><iconify-icon className="text-white" icon="solar:check-circle-bold"></iconify-icon> Done-For-You Scripting</li>
<li className="flex items-center gap-3 text-sm text-gray-300"><iconify-icon className="text-white" icon="solar:check-circle-bold"></iconify-icon> Up to 2 Filming Locations</li>
</ul>
<a className="inline-block w-full py-4 text-center bg-upscale-blue rounded-xl text-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors blue-glow" href="https://spiro.media/book">Start Foundation Retainer</a>
</div>

<div className="hidden md:block">
<div className="relative w-32 h-64 bg-black border-[6px] border-neutral-800 rounded-[2rem] shadow-2xl overflow-hidden iphone-frame group-hover:-translate-y-2 transition-transform duration-500">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-4 bg-black rounded-b-lg z-20"></div>
<div className="flex bg-neutral-900 w-full h-full items-center justify-center">
<span className="text-[10px] uppercase text-gray-600 tracking-widest text-center pr-4 pl-4" style={{}}>Brand<br/>Story</span>
</div>
</div>
</div>
</div>
</div>

<div className="glass-card p-8 rounded-3xl border border-upscale-gold/50 bg-gradient-to-br from-upscale-gold/5 to-black relative shadow-[0_0_50px_-20px_rgba(212,175,55,0.2)] group reveal">
<div className="absolute top-0 right-0 bg-upscale-gold text-black text-[10px] font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-widest">Recommended</div>
<div className="flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<h3 className="text-2xl font-serif text-white mb-6">Momentum Builder</h3>

<div className="bg-neutral-900/50 rounded-xl p-5 border border-white/10 mb-6 relative overflow-hidden">

<div className="absolute top-0 left-0 w-1 h-full bg-red-500/20"></div>
<div className="mb-4 opacity-70">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-red-400 text-xs" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-[10px] uppercase tracking-widest text-red-300">The Old Way (Paying Per Shoot)</span>
</div>
<div className="flex justify-between items-center text-xs text-gray-400 font-mono">
<span className="line-through decoration-red-500/50">$598 x 4 Listings</span>
<span className="line-through decoration-red-500/50">$2,392/mo</span>
</div>
<p className="text-[10px] text-gray-400 mt-2 leading-snug italic">Inconsistent branding, multiple invoices, zero strategy.</p>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4"></div>

<div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500/10 via-transparent to-upscale-green/60"></div>
<div>
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-upscale-green text-xs" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-[10px] uppercase tracking-widest text-upscale-green font-bold">The Upscale Way</span>
</div>
<div className="flex justify-between items-baseline">
<div className="flex flex-col">
<span className="text-4xl font-serif text-upscale-gold">$1,998</span>
<span className="text-[10px] text-gray-400 uppercase tracking-wider">Per Month</span>
</div>
<span className="text-xs font-bold text-upscale-green bg-upscale-green/10 px-2 py-1 rounded border border-upscale-green/20">Save ~$400/mo</span>
</div>
</div>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-white"><iconify-icon className="text-upscale-gold" icon="solar:check-circle-bold"></iconify-icon> 5 Strategic Brand Videos</li>
<li className="flex items-center gap-3 text-sm text-white"><iconify-icon className="text-upscale-gold" icon="solar:check-circle-bold"></iconify-icon> All Foundation Features</li>
<li className="flex items-center gap-3 text-sm text-white"><iconify-icon className="text-upscale-gold" icon="solar:check-circle-bold"></iconify-icon> Drone Footage Included</li>
<li className="flex items-center gap-3 text-sm text-white"><iconify-icon className="text-upscale-gold" icon="solar:check-circle-bold"></iconify-icon> Up to 3 Filming Locations</li>
<li className="flex items-center gap-3 text-sm text-white"><iconify-icon className="text-upscale-gold" icon="solar:check-circle-bold"></iconify-icon> Priority Scheduling &amp; Trends</li>
</ul>
<a className="inline-block w-full py-4 text-center bg-upscale-gold text-black rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors" href="https://spiro.media/book">Start Builder Retainer</a>
</div>

<div className="hidden md:block self-center">
<div className="relative w-32 h-64 bg-black border-[6px] border-neutral-800 rounded-[2rem] shadow-2xl overflow-hidden iphone-frame group-hover:-translate-y-2 transition-transform duration-500">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-4 bg-black rounded-b-lg z-20"></div>
<div className="w-full h-full bg-neutral-900 relative">
<div className="absolute inset-0 bg-gradient-to-t from-upscale-gold/20 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-upscale-gold text-3xl" icon="solar:play-bold"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<p className="text-center text-xs text-gray-500 mt-8 font-light tracking-wide">
                $0 upfront setup • Cancel after commitment term • Designed for consistent growth
            </p>
</div>
</section>

<section className="py-16 bg-upscale-charcoal border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<h3 className="text-white font-serif text-2xl mb-8">A La Carte Services</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="glass-card p-4 rounded-xl hover:bg-white/5 transition-colors group">
<div className="flex justify-between items-center mb-2">
<iconify-icon className="text-upscale-blue" icon="solar:box-linear"></iconify-icon>
<span className="text-upscale-gold font-serif">$108</span>
</div>
<p className="text-xs text-gray-300">Schematic Floor Plan</p>
</div>
<div className="glass-card p-4 rounded-xl hover:bg-white/5 transition-colors group">
<div className="flex justify-between items-center mb-2">
<iconify-icon className="text-upscale-blue" icon="solar:drone-linear"></iconify-icon>
<span className="text-upscale-gold font-serif">$198</span>
</div>
<p className="text-xs text-gray-300">Drone Photo (10)</p>
</div>
<div className="glass-card p-4 rounded-xl hover:bg-white/5 transition-colors group">
<div className="flex justify-between items-center mb-2">
<iconify-icon className="text-upscale-blue" icon="solar:sofa-linear"></iconify-icon>
<span className="text-upscale-gold font-serif">$48</span>
</div>
<p className="text-xs text-gray-300">Virtual Staging (Per Photo)</p>
</div>
<div className="glass-card p-4 rounded-xl hover:bg-white/5 transition-colors group">
<div className="flex justify-between items-center mb-2">
<iconify-icon className="text-upscale-blue" icon="solar:moon-stars-linear"></iconify-icon>
<span className="text-upscale-gold font-serif">$38</span>
</div>
<p className="text-xs text-gray-300">Virtual Twilight (Per Photo)</p>
</div>
<div className="glass-card p-4 rounded-xl hover:bg-white/5 transition-colors group">
<div className="flex justify-between items-center mb-2">
<iconify-icon className="text-upscale-blue" icon="solar:videocamera-record-linear"></iconify-icon>
<span className="text-upscale-gold font-serif">$248</span>
</div>
<p className="text-xs text-gray-300">Social Reel + Drone</p>
</div>
<div className="glass-card p-4 rounded-xl hover:bg-white/5 transition-colors group">
<div className="flex justify-between items-center mb-2">
<iconify-icon className="text-upscale-blue" icon="solar:camera-linear"></iconify-icon>
<span className="text-upscale-gold font-serif">$998</span>
</div>
<p className="text-xs text-gray-300">Listing Video</p>
</div>
<div className="glass-card p-4 rounded-xl hover:bg-white/5 transition-colors group">
<div className="flex justify-between items-center mb-2">
<iconify-icon className="text-upscale-blue" icon="solar:sun-fog-linear"></iconify-icon>
<span className="text-upscale-gold font-serif">$348</span>
</div>
<p className="text-xs text-gray-300">Real Twilight Photos</p>
</div>
<div className="glass-card p-4 rounded-xl hover:bg-white/5 transition-colors group">
<div className="flex justify-between items-center mb-2">
<iconify-icon className="text-upscale-blue" icon="solar:fire-linear"></iconify-icon>
<span className="text-upscale-gold font-serif">$88</span>
</div>
<p className="text-xs text-gray-300">Trend Brand Pack</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative overflow-hidden" id="map">
<div className="flex flex-col md:flex-row gap-6 max-w-7xl mr-auto mb-12 ml-auto pr-6 pl-6 gap-x-6 gap-y-6 items-end justify-between">
<div className="reveal">
<h2 className="font-serif text-4xl font-medium text-white mb-2">Service Area</h2>
<p className="text-gray-400 text-sm font-light">Serving Los Angeles, Orange County, and Riverside.</p>
</div>
<div className="flex gap-4">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-upscale-blue animate-pulse"></span>
<span className="text-xs text-gray-300 uppercase tracking-wider">Active</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-upscale-gold"></span>
<span className="text-xs text-gray-300 uppercase tracking-wider">HQ</span>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 reveal">
<div className="relative w-full h-[400px] md:h-[500px] bg-[#111] rounded-3xl border border-white/10 overflow-hidden shadow-2xl group">

<div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-118.2437,34.0522,8.5,0/1200x600?access_token=PLACEHOLDER')] bg-cover bg-center grayscale opacity-60 group-hover:opacity-80 transition-opacity duration-700" style={{}}></div>

<div className="bg-gradient-to-tr from-black via-transparent to-black absolute top-0 right-0 bottom-0 left-0"></div>


<div className="absolute top-[40%] left-[45%] group/pin cursor-pointer">
<div className="relative flex items-center justify-center">
<div className="w-4 h-4 bg-upscale-gold rounded-full relative z-10 shadow-[0_0_20px_rgba(212,175,55,0.8)]"></div>
<div className="absolute w-12 h-12 bg-upscale-gold/30 rounded-full animate-ping"></div>

<div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-48 bg-black/90 backdrop-blur border border-upscale-gold rounded-xl p-3 opacity-0 group-hover/pin:opacity-100 transition-all duration-300 translate-y-2 group-hover/pin:translate-y-0 pointer-events-none z-20">
<h4 className="text-white font-serif text-sm mb-1">Los Angeles HQ</h4>
<p className="text-[10px] text-gray-400">Beverly Hills, Hollywood, Santa Monica coverage.</p>
</div>
</div>
</div>

<div className="absolute top-[65%] left-[60%] group/pin cursor-pointer">
<div className="relative flex items-center justify-center">
<div className="w-3 h-3 bg-upscale-blue rounded-full relative z-10 shadow-[0_0_20px_rgba(0,191,255,0.8)]"></div>
<div className="absolute w-8 h-8 bg-upscale-blue/30 rounded-full animate-pulse"></div>

<div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-40 bg-black/90 backdrop-blur border border-upscale-blue rounded-xl p-3 opacity-0 group-hover/pin:opacity-100 transition-all duration-300 translate-y-2 group-hover/pin:translate-y-0 pointer-events-none z-20">
<h4 className="text-white font-serif text-sm mb-1">Orange County</h4>
<p className="text-[10px] text-gray-400">Newport, Laguna, Irvine coverage.</p>
</div>
</div>
</div>

<div className="absolute top-[55%] left-[80%] group/pin cursor-pointer">
<div className="relative flex items-center justify-center">
<div className="w-3 h-3 bg-upscale-blue rounded-full relative z-10"></div>
<div className="absolute w-8 h-8 bg-upscale-blue/30 rounded-full animate-pulse delay-700"></div>

<div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-40 bg-black/90 backdrop-blur border border-upscale-blue rounded-xl p-3 opacity-0 group-hover/pin:opacity-100 transition-all duration-300 translate-y-2 group-hover/pin:translate-y-0 pointer-events-none z-20">
<h4 className="text-white font-serif text-sm mb-1">Riverside</h4>
<p className="text-[10px] text-gray-400">Inland Empire coverage.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-upscale-charcoal border-y border-white/5" id="why-us">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
<div className="flex-1 reveal">
<div className="w-16 h-1 bg-upscale-blue mb-8"></div>
<h2 className="font-serif text-4xl font-medium text-white mb-6 leading-tight">
            The #1 Choice for <br/> Modern Agents.
          </h2>
<p className="text-gray-400 font-light text-lg mb-8 leading-relaxed">
            Other photographers just take pictures of walls. We understand that in the new era of real estate, <strong>you are selling a lifestyle</strong>. We are the best choice because we partner with you to crack the social algorithms, build your personal brand, and scale your influence.
          </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-white"><iconify-icon className="text-upscale-gold text-lg" icon="solar:star-fall-bold"></iconify-icon> We understand social algorithms</li>
<li className="flex items-center gap-3 text-sm text-white"><iconify-icon className="text-upscale-gold text-lg" icon="solar:clock-circle-bold"></iconify-icon> Speed that matches your hustle (24h)</li>
<li className="flex items-center gap-3 text-sm text-white"><iconify-icon className="text-upscale-gold text-lg" icon="solar:users-group-rounded-bold"></iconify-icon> Proven to attract more leads</li>
</ul>
<a className="text-upscale-blue text-sm font-bold uppercase tracking-widest hover:text-white transition-colors inline-flex items-center gap-2" href="https://spiro.media/book">
            Start Elevating My Brand
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="flex-1 w-full relative reveal delay-200">

<div className="glass-card p-8 rounded-3xl border border-white/10 relative">
<div className="absolute -top-10 -right-10 w-32 h-32 bg-upscale-blue/20 rounded-full blur-3xl"></div>
<blockquote className="text-xl font-serif text-white italic leading-relaxed mb-6">
                 "Upscale is the only company that actually 'gets it'. They don't just send me photos, they give me a full brand kit that makes me look like the #1 agent in my market."
              </blockquote>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gray-700 rounded-full border border-white/20"></div> 
<div>
<div className="text-white font-medium text-sm">Top Producer</div>
<div className="text-upscale-gold text-xs uppercase tracking-wider">Los Angeles, CA</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black" id="work">
<div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
<div className="reveal">
<h2 className="font-serif text-4xl font-medium text-white mb-2">Our Work</h2>
<p className="text-gray-400 text-sm font-light">Media that moves the needle. Follow @upscaleshot.</p>
</div>
<a className="hidden md:block text-xs uppercase tracking-widest text-white border-b border-white/30 pb-1 hover:border-white transition-colors" href="https://instagram.com/upscaleshot">
          View Instagram
        </a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="group relative aspect-[9/16] bg-neutral-900 rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-upscale-blue/50 transition-all reveal">

<div className="absolute inset-2 border-[2px] border-white/5 rounded-xl pointer-events-none z-20"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 z-10"></div>
<div className="absolute bottom-4 left-4 z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<span className="text-white font-serif text-lg block">Bel Air</span>
<span className="text-upscale-gold text-[10px] uppercase tracking-widest">Reel</span>
</div>
<iconify-icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" icon="solar:play-circle-linear"></iconify-icon>
</div>

<div className="group relative aspect-[9/16] bg-neutral-900 rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-upscale-blue/50 transition-all reveal delay-100">
<div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-gray-700">
<iconify-icon icon="solar:gallery-wide-linear" size="32"></iconify-icon>
</div>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"></div>
<div className="absolute bottom-4 left-4 z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<span className="text-white font-serif text-lg block">Hollywood Hills</span>
<span className="text-upscale-gold text-[10px] uppercase tracking-widest">Photo</span>
</div>
</div>

<div className="group relative aspect-[9/16] bg-neutral-900 rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-upscale-blue/50 transition-all reveal delay-200">
<div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-gray-700">
<iconify-icon icon="solar:box-minimalistic-linear" size="32"></iconify-icon>
</div>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"></div>
<div className="absolute bottom-4 left-4 z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<span className="text-white font-serif text-lg block">Beverly Hills</span>
<span className="text-upscale-gold text-[10px] uppercase tracking-widest">3D Tour</span>
</div>
</div>

<div className="group relative aspect-[9/16] bg-neutral-900 rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-upscale-blue/50 transition-all reveal delay-300">
<div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-gray-700">
<iconify-icon icon="solar:play-circle-linear" size="32"></iconify-icon>
</div>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"></div>
<div className="absolute bottom-4 left-4 z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<span className="text-white font-serif text-lg block">Intro</span>
<span className="text-upscale-gold text-[10px] uppercase tracking-widest">Brand</span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black relative overflow-hidden border-t border-white/5" id="book">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-upscale-blue/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center reveal">
<h2 className="font-serif text-5xl md:text-6xl font-medium text-white mb-6">
          Ready to Ascend?
        </h2>
<p className="text-gray-400 font-light text-lg mb-12">
          Partner with the #1 media team for modern agents. Book in seconds—$0 upfront.
        </p>
<a className="inline-flex items-center justify-center px-12 py-6 text-sm font-bold tracking-widest uppercase text-black bg-upscale-blue rounded-full hover:bg-white transition-all duration-300 blue-glow gap-3 transform hover:scale-105" href="https://spiro.media/book">
          Book Now on Spiro
          <iconify-icon className="text-xl" icon="solar:calendar-add-linear"></iconify-icon>
</a>
<p className="mt-8 text-xs text-gray-600 tracking-wide">
          Secure scheduling powered by Spiro
        </p>
</div>
</section>

<footer className="bg-neutral-950 border-t border-white/5 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div>
<div className="flex items-center gap-2 mb-6">
<span className="text-upscale-gold font-serif text-2xl italic">Upscale</span>
<span className="text-white font-serif text-lg">Realty Media</span>
</div>
<p className="text-gray-500 text-sm max-w-xs leading-relaxed font-light">
              Elevating agents' personal brands in the modern social media era. Los Angeles based.
            </p>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-white text-xs uppercase tracking-widest mb-4">Company</h4>
<ul className="space-y-3 text-sm text-gray-500 font-light">
<li><a className="hover:text-upscale-gold transition-colors" href="#why-us">About</a></li>
<li><a className="hover:text-upscale-gold transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-upscale-gold transition-colors" href="https://spiro.media/book">Book Now</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs uppercase tracking-widest mb-4">Social</h4>
<ul className="space-y-3 text-sm text-gray-500 font-light">
<li><a className="hover:text-upscale-blue transition-colors flex items-center gap-2" href="https://instagram.com/upscaleshot"><iconify-icon icon="solar:instagram-linear"></iconify-icon> Instagram</a></li>
<li><a className="hover:text-upscale-blue transition-colors flex items-center gap-2" href="#"><iconify-icon icon="solar:videocamera-record-linear"></iconify-icon> TikTok</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-gray-600 font-light">
<p>© 2024 Upscale Realty Media. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-gray-400" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
