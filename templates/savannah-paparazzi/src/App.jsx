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
      

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-[#F9F5EF] backdrop-blur-sm">
<div className="text-xl md:text-2xl font-serif font-bold tracking-tight uppercase border border-white/20 px-4 py-2">Sav Paparazzi</div>
<button className="md:hidden text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<div className="hidden md:flex gap-10 text-xs font-medium tracking-[0.2em] uppercase items-center">
<a className="hover:text-[#C9A84C] transition-colors" href="#">Experience</a>
<a className="hover:text-[#C9A84C] transition-colors" href="#">Cities</a>
<a className="hover:text-[#C9A84C] transition-colors" href="#">Packages</a>
<a className="border border-[#F9F5EF] hover:bg-[#F9F5EF] hover:text-black px-6 py-2 transition-all duration-300" href="#">Book Now</a>
</div>
</nav>

<section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden">

<div className="absolute inset-0 z-0 bg-[#050505]">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#050505] to-[#050505] opacity-80"></div>

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%221%22/%3E%3C/svg%3E\')'}}></div>
</div>

<div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 pt-20">
<div className="flex flex-col items-center text-center">
<div className="flex items-center gap-4 mb-6 animate-pulse">
<div className="w-2 h-2 rounded-full bg-[#ff0000] shadow-[0_0_10px_#ff0000]"></div>
<span className="text-[#C9A84C] text-[10px] font-bold tracking-[0.3em] uppercase">Now Recording</span>
</div>
<h1 className="font-serif font-light text-7xl md:text-9xl lg:text-[10rem] leading-[0.8] tracking-tight mb-8">
<span className="block text-[#F9F5EF]">Become the</span>
<span className="block font-bold italic text-gradient-gold">Headliner.</span>
</h1>
<p className="text-[#8A7E6E] text-lg md:text-xl font-normal leading-relaxed max-w-lg mb-12 mx-auto">
                    Luxury transport. Professional paparazzi team. <br className="hidden md:block"/>Your night out, documented like a cover story.
                </p>
<div className="flex flex-col md:flex-row gap-6 items-center">
<button className="bg-[#C9A84C] text-[#050505] font-semibold text-sm px-10 py-4 uppercase tracking-widest hover:bg-[#F9F5EF] transition-all duration-300 shadow-[0_0_30px_rgba(201,168,76,0.3)] hover:shadow-[0_0_50px_rgba(201,168,76,0.5)] hover:-translate-y-1">
                        Check Availability
                    </button>
<button className="text-[#F9F5EF] border-b border-[#F9F5EF]/30 hover:border-[#C9A84C] hover:text-[#C9A84C] pb-1 text-xs uppercase tracking-widest transition-colors">
                        View The Gallery
                    </button>
</div>
</div>
</div>

<div className="absolute bottom-10 left-0 w-full border-y border-[#F9F5EF]/10 bg-[#050505]/50 backdrop-blur-md py-3 z-20">
<div className="marquee-container">
<div className="marquee-content text-[#F9F5EF] text-xs font-bold tracking-[0.2em] uppercase">
                    Seen in Savannah <span className="text-[#C9A84C] mx-4">✦</span> Seen in Asheville <span className="text-[#C9A84C] mx-4">✦</span> Seen in Charlotte <span className="text-[#C9A84C] mx-4">✦</span> 24 Hour Delivery <span className="text-[#C9A84C] mx-4">✦</span> Viral Content <span className="text-[#C9A84C] mx-4">✦</span> Seen in Savannah <span className="text-[#C9A84C] mx-4">✦</span> Seen in Asheville <span className="text-[#C9A84C] mx-4">✦</span> Seen in Charlotte <span className="text-[#C9A84C] mx-4">✦</span> 24 Hour Delivery <span className="text-[#C9A84C] mx-4">✦</span> Viral Content <span className="text-[#C9A84C] mx-4">✦</span>
</div>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] py-16 border-b border-[#F9F5EF]/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center group">
<div className="text-4xl md:text-5xl font-serif font-bold text-[#F9F5EF] mb-2 group-hover:text-[#C9A84C] transition-colors">200+</div>
<div className="text-[10px] tracking-widest uppercase text-[#8A7E6E]">Nights Captured</div>
</div>
<div className="text-center group">
<div className="text-4xl md:text-5xl font-serif font-bold text-[#F9F5EF] mb-2 group-hover:text-[#C9A84C] transition-colors">24h</div>
<div className="text-[10px] tracking-widest uppercase text-[#8A7E6E]">Gallery Delivery</div>
</div>
<div className="text-center group">
<div className="text-4xl md:text-5xl font-serif font-bold text-[#F9F5EF] mb-2 group-hover:text-[#C9A84C] transition-colors">10k+</div>
<div className="text-[10px] tracking-widest uppercase text-[#8A7E6E]">Photos Taken</div>
</div>
<div className="text-center group">
<div className="text-4xl md:text-5xl font-serif font-bold text-[#F9F5EF] mb-2 group-hover:text-[#C9A84C] transition-colors">5.0</div>
<div className="text-[10px] tracking-widest uppercase text-[#8A7E6E]">Star Rating</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F9F5EF] text-[#050505] py-24 md:py-32 relative overflow-hidden">

<div className="absolute top-0 right-0 font-serif text-[40rem] leading-none opacity-[0.03] pointer-events-none select-none -mt-20 -mr-20">3</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-20">
<h2 className="font-serif font-bold text-6xl md:text-8xl tracking-tight leading-[0.9]">
                    Three Steps <br/><span className="text-[#C9A84C] italic">To Fame.</span>
</h2>
<div className="hidden md:block w-32 h-[1px] bg-[#050505] mb-8"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[#050505]">

<div className="border-b md:border-b-0 md:border-r border-[#050505] p-10 md:p-12 hover:bg-[#EAE5DD] transition-colors duration-500 group">
<div className="flex justify-between items-start mb-12">
<span className="text-xs font-bold border border-[#050505] rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-[#050505] group-hover:text-[#F9F5EF] transition-colors">1</span>
<iconify-icon className="text-[#C9A84C]" icon="solar:calendar-linear" width="32"></iconify-icon>
</div>
<h3 className="font-serif font-bold text-3xl mb-4">The Booking</h3>
<p className="text-[#5A5248] leading-relaxed text-sm">
                        Select your city and date. Choose your level of fame (package). Secure your night in under 2 minutes.
                    </p>
</div>

<div className="border-b md:border-b-0 md:border-r border-[#050505] p-10 md:p-12 hover:bg-[#EAE5DD] transition-colors duration-500 group">
<div className="flex justify-between items-start mb-12">
<span className="text-xs font-bold border border-[#050505] rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-[#050505] group-hover:text-[#F9F5EF] transition-colors">2</span>
<iconify-icon className="text-[#C9A84C]" icon="solar:camera-linear" width="32"></iconify-icon>
</div>
<h3 className="font-serif font-bold text-3xl mb-4">The Experience</h3>
<p className="text-[#5A5248] leading-relaxed text-sm">
                        Luxury transport arrives. The paparazzi team follows your every move. You just live your best life.
                    </p>
</div>

<div className="p-10 md:p-12 hover:bg-[#EAE5DD] transition-colors duration-500 group">
<div className="flex justify-between items-start mb-12">
<span className="text-xs font-bold border border-[#050505] rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-[#050505] group-hover:text-[#F9F5EF] transition-colors">3</span>
<iconify-icon className="text-[#C9A84C]" icon="solar:gallery-wide-linear" width="32"></iconify-icon>
</div>
<h3 className="font-serif font-bold text-3xl mb-4">The Delivery</h3>
<p className="text-[#5A5248] leading-relaxed text-sm">
                        Wake up to a full editorial gallery and viral-ready video reels before breakfast.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] py-24 md:py-32 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<span className="text-[#C9A84C] text-[10px] font-bold tracking-[0.3em] uppercase block mb-4">Select Your Status</span>
<h2 className="font-serif font-bold text-5xl md:text-7xl text-[#F9F5EF]">The Packages</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

<div className="bg-[#0A0A0A] border border-[#F9F5EF]/10 p-8 hover:border-[#F9F5EF]/30 transition-all duration-300">
<h3 className="font-serif font-bold text-[#F9F5EF] text-3xl mb-2">The Feature</h3>
<div className="text-[#C9A84C] font-serif text-5xl font-bold mb-6">$1,299</div>
<div className="h-px bg-[#F9F5EF]/10 mb-8"></div>
<ul className="space-y-5 mb-10">
<li className="text-[#8A7E6E] text-sm flex gap-3"><iconify-icon className="text-[#F9F5EF]" icon="solar:check-circle-linear"></iconify-icon> Luxury SUV Service</li>
<li className="text-[#8A7E6E] text-sm flex gap-3"><iconify-icon className="text-[#F9F5EF]" icon="solar:check-circle-linear"></iconify-icon> 3 Hours Coverage</li>
<li className="text-[#8A7E6E] text-sm flex gap-3"><iconify-icon className="text-[#F9F5EF]" icon="solar:check-circle-linear"></iconify-icon> 50+ Editorial Photos</li>
<li className="text-[#8A7E6E] text-sm flex gap-3"><iconify-icon className="text-[#F9F5EF]" icon="solar:check-circle-linear"></iconify-icon> Next Day Delivery</li>
</ul>
<button className="w-full border border-[#F9F5EF]/20 text-[#F9F5EF] py-4 text-xs uppercase tracking-widest hover:bg-[#F9F5EF] hover:text-[#050505] transition-all">Select Feature</button>
</div>

<div className="bg-[#0A0A0A] border border-[#C9A84C] p-8 md:p-12 relative transform md:-translate-y-4 shadow-[0_0_50px_rgba(201,168,76,0.1)]">
<div className="absolute top-0 right-0 bg-[#C9A84C] text-[#050505] text-[10px] font-bold uppercase tracking-widest px-4 py-2">Most Popular</div>
<h3 className="font-serif font-bold text-[#F9F5EF] text-4xl mb-2 italic">The Star</h3>
<div className="text-[#C9A84C] font-serif text-6xl font-bold mb-6">$1,899</div>
<div className="h-px bg-[#C9A84C]/30 mb-8"></div>
<ul className="space-y-5 mb-10">
<li className="text-[#F9F5EF] text-sm flex gap-3"><iconify-icon className="text-[#C9A84C]" icon="solar:star-linear"></iconify-icon> Mercedes Sprinter Limo</li>
<li className="text-[#F9F5EF] text-sm flex gap-3"><iconify-icon className="text-[#C9A84C]" icon="solar:star-linear"></iconify-icon> Photo + Video Team</li>
<li className="text-[#F9F5EF] text-sm flex gap-3"><iconify-icon className="text-[#C9A84C]" icon="solar:star-linear"></iconify-icon> 100+ Editorial Photos</li>
<li className="text-[#F9F5EF] text-sm flex gap-3"><iconify-icon className="text-[#C9A84C]" icon="solar:star-linear"></iconify-icon> 2 Viral TikTok Reels</li>
</ul>
<button className="w-full bg-[#C9A84C] text-[#050505] py-5 text-sm uppercase tracking-widest hover:bg-[#F9F5EF] transition-all font-semibold shadow-[0_0_20px_rgba(201,168,76,0.4)]">Book The Star</button>
</div>

<div className="bg-[#0A0A0A] border border-[#F9F5EF]/10 p-8 hover:border-[#F9F5EF]/30 transition-all duration-300">
<h3 className="font-serif font-bold text-[#F9F5EF] text-3xl mb-2">The Icon</h3>
<div className="text-[#C9A84C] font-serif text-5xl font-bold mb-6">$2,799</div>
<div className="h-px bg-[#F9F5EF]/10 mb-8"></div>
<ul className="space-y-5 mb-10">
<li className="text-[#8A7E6E] text-sm flex gap-3"><iconify-icon className="text-[#F9F5EF]" icon="solar:check-circle-linear"></iconify-icon> Premium Party Bus</li>
<li className="text-[#8A7E6E] text-sm flex gap-3"><iconify-icon className="text-[#F9F5EF]" icon="solar:check-circle-linear"></iconify-icon> 3 Shooters (Full Squad)</li>
<li className="text-[#8A7E6E] text-sm flex gap-3"><iconify-icon className="text-[#F9F5EF]" icon="solar:check-circle-linear"></iconify-icon> Unlimited Photos</li>
<li className="text-[#8A7E6E] text-sm flex gap-3"><iconify-icon className="text-[#F9F5EF]" icon="solar:check-circle-linear"></iconify-icon> Full Event Video Edit</li>
</ul>
<button className="w-full border border-[#F9F5EF]/20 text-[#F9F5EF] py-4 text-xs uppercase tracking-widest hover:bg-[#F9F5EF] hover:text-[#050505] transition-all">Select Icon</button>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] py-24">
<div className="max-w-[90rem] mx-auto px-6">
<div className="flex justify-between items-end mb-16">
<h2 className="font-serif font-bold text-5xl md:text-7xl text-[#F9F5EF]">Caught on <span className="text-[#C9A84C] italic">Camera.</span></h2>
<div className="hidden md:flex gap-2">
<button className="w-12 h-12 border border-[#F9F5EF]/20 flex items-center justify-center hover:bg-[#C9A84C] hover:text-black transition-colors"><iconify-icon icon="solar:arrow-left-linear"></iconify-icon></button>
<button className="w-12 h-12 border border-[#F9F5EF]/20 flex items-center justify-center hover:bg-[#C9A84C] hover:text-black transition-colors"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group relative aspect-[3/4] cursor-pointer bg-[#111]">
<div className="absolute inset-4 z-20 viewfinder pointer-events-none">
<div className="viewfinder-inner w-full h-full"></div>
</div>
<div className="absolute inset-0 bg-[#151515] flex items-center justify-center p-8 text-center transition-all duration-700 group-hover:bg-[#1a1a1a]">
<span className="text-[#F9F5EF]/40 text-[10px] tracking-widest uppercase font-mono">[ REC 00:14:02 ]<br/>Savannah Streets</span>
</div>
<div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="bg-[#C9A84C] text-[#050505] text-[9px] font-bold px-2 py-1 uppercase tracking-wider">Feature</span>
</div>
</div>

<div className="group relative aspect-[3/4] cursor-pointer bg-[#111]">
<div className="absolute inset-4 z-20 viewfinder pointer-events-none">
<div className="viewfinder-inner w-full h-full"></div>
</div>
<div className="absolute inset-0 bg-[#151515] flex items-center justify-center p-8 text-center transition-all duration-700 group-hover:bg-[#1a1a1a]">
<span className="text-[#F9F5EF]/40 text-[10px] tracking-widest uppercase font-mono">[ REC 00:22:15 ]<br/>Limo Send Off</span>
</div>
</div>

<div className="group relative aspect-[3/4] cursor-pointer bg-[#111]">
<div className="absolute inset-4 z-20 viewfinder pointer-events-none">
<div className="viewfinder-inner w-full h-full"></div>
</div>
<div className="absolute inset-0 bg-[#151515] flex items-center justify-center p-8 text-center transition-all duration-700 group-hover:bg-[#1a1a1a]">
<span className="text-[#F9F5EF]/40 text-[10px] tracking-widest uppercase font-mono">[ REC 01:05:40 ]<br/>Rooftop Toast</span>
</div>
</div>

<div className="group relative aspect-[3/4] cursor-pointer bg-[#111]">
<div className="absolute inset-4 z-20 viewfinder pointer-events-none">
<div className="viewfinder-inner w-full h-full"></div>
</div>
<div className="absolute inset-0 bg-[#151515] flex items-center justify-center p-8 text-center transition-all duration-700 group-hover:bg-[#1a1a1a]">
<span className="text-[#F9F5EF]/40 text-[10px] tracking-widest uppercase font-mono">[ REC 02:45:11 ]<br/>Flash Photography</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#C9A84C] py-20 overflow-hidden text-[#050505]">
<div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
<h2 className="font-serif font-bold text-4xl md:text-5xl">Gossip Column</h2>
<div className="flex gap-1">
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
</div>
</div>
<div className="marquee-container">
<div className="marquee-content flex gap-12 px-6">

<div className="bg-[#F9F5EF] p-8 w-[22rem] md:w-[28rem] flex-shrink-0 shadow-lg rotate-1 hover:rotate-0 transition-transform duration-300">
<p className="font-serif text-lg italic leading-relaxed mb-6">"I've been to five bachelorettes this year. None of them came close to this. We felt like we were literally in a magazine."</p>
<p className="text-xs font-bold uppercase tracking-widest">— Madeleine K., Savannah</p>
</div>

<div className="bg-[#F9F5EF] p-8 w-[22rem] md:w-[28rem] flex-shrink-0 shadow-lg -rotate-1 hover:rotate-0 transition-transform duration-300">
<p className="font-serif text-lg italic leading-relaxed mb-6">"The gallery was in our inbox before we checked out. The arrival moment was worth every single penny."</p>
<p className="text-xs font-bold uppercase tracking-widest">— Courtney R., Charlotte</p>
</div>

<div className="bg-[#F9F5EF] p-8 w-[22rem] md:w-[28rem] flex-shrink-0 shadow-lg rotate-1 hover:rotate-0 transition-transform duration-300">
<p className="font-serif text-lg italic leading-relaxed mb-6">"Book it. Don't think about it. Just book it. Our highlight reel got 50k views on TikTok."</p>
<p className="text-xs font-bold uppercase tracking-widest">— Sarah J., Asheville</p>
</div>

<div className="bg-[#F9F5EF] p-8 w-[22rem] md:w-[28rem] flex-shrink-0 shadow-lg rotate-1 hover:rotate-0 transition-transform duration-300">
<p className="font-serif text-lg italic leading-relaxed mb-6">"I've been to five bachelorettes this year. None of them came close to this. We felt like we were literally in a magazine."</p>
<p className="text-xs font-bold uppercase tracking-widest">— Madeleine K., Savannah</p>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] py-24 md:py-32">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-serif font-bold text-5xl md:text-6xl text-[#F9F5EF] text-center mb-16">The Tour Dates</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#F9F5EF]/10">

<div className="group relative p-12 border-b md:border-b-0 md:border-r border-[#F9F5EF]/10 text-center hover:bg-[#111] transition-colors">
<h3 className="text-[#F9F5EF] font-serif font-bold text-4xl mb-4">Savannah</h3>
<p className="text-[#8A7E6E] text-sm mb-8">Cobblestones &amp; Champagne</p>
<a className="inline-block text-[#C9A84C] text-xs uppercase tracking-[0.2em] border-b border-[#C9A84C] pb-1 hover:text-[#F9F5EF] hover:border-[#F9F5EF] transition-all" href="#">Book City</a>
</div>

<div className="group relative p-12 border-b md:border-b-0 md:border-r border-[#F9F5EF]/10 text-center hover:bg-[#111] transition-colors">
<h3 className="text-[#F9F5EF] font-serif font-bold text-4xl mb-4">Asheville</h3>
<p className="text-[#8A7E6E] text-sm mb-8">Mountain Rooftops</p>
<a className="inline-block text-[#C9A84C] text-xs uppercase tracking-[0.2em] border-b border-[#C9A84C] pb-1 hover:text-[#F9F5EF] hover:border-[#F9F5EF] transition-all" href="#">Book City</a>
</div>

<div className="group relative p-12 text-center hover:bg-[#111] transition-colors">
<h3 className="text-[#F9F5EF] font-serif font-bold text-4xl mb-4">Charlotte</h3>
<p className="text-[#8A7E6E] text-sm mb-8">Skyline Nights</p>
<a className="inline-block text-[#C9A84C] text-xs uppercase tracking-[0.2em] border-b border-[#C9A84C] pb-1 hover:text-[#F9F5EF] hover:border-[#F9F5EF] transition-all" href="#">Book City</a>
</div>
</div>
</div>
</section>

<footer className="bg-[#050505] pt-24 pb-12 border-t border-[#F9F5EF]/10 relative">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="font-serif font-bold text-[12vw] leading-[0.8] text-[#F9F5EF] opacity-10 select-none mb-12">SAVPAPA</h2>
<div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-[#F9F5EF]/10 pt-12">
<div className="text-[#F9F5EF] font-serif font-bold text-xl uppercase">Sav Paparazzi</div>
<div className="flex gap-8">
<a className="text-[#8A7E6E] text-[10px] tracking-widest uppercase hover:text-[#C9A84C] transition-colors" href="#">Instagram</a>
<a className="text-[#8A7E6E] text-[10px] tracking-widest uppercase hover:text-[#C9A84C] transition-colors" href="#">TikTok</a>
<a className="text-[#8A7E6E] text-[10px] tracking-widest uppercase hover:text-[#C9A84C] transition-colors" href="#">Contact</a>
</div>
<p className="text-[#8A7E6E] text-[10px] uppercase tracking-widest">© 2024 All Rights Reserved</p>
</div>
</div>
</footer>

    </>
  );
}
