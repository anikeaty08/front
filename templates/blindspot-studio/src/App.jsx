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
      

<div className="fixed inset-0 z-0 pointer-events-none flex justify-center items-start overflow-hidden">
<div className="w-full max-w-screen-xl aspect-square bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,transparent_60%)]"></div>
</div>

<nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-zinc-950/60 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-zinc-50 font-medium tracking-tighter text-lg flex items-center gap-2" href="#">
<iconify-icon className="text-xl" icon="solar:record-circle-linear" strokeWidth="1.5"></iconify-icon>
                BLINDSPOT.
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal tracking-wide">
<a className="hover:text-zinc-50 transition-colors" href="#expertise">Expertise</a>
<a className="hover:text-zinc-50 transition-colors" href="#process">Process</a>
<a className="hover:text-zinc-50 transition-colors" href="#results">Results</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-zinc-950 bg-zinc-50 rounded-full hover:bg-zinc-200 transition-colors tracking-wide" href="#contact">
                Book Audit
            </a>
<button className="md:hidden text-zinc-50">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>
<main className="flex flex-col md:pt-48 w-full z-10 pt-32 relative items-center">

<section className="flex flex-col text-center w-full max-w-5xl mr-auto ml-auto pr-6 pb-32 pl-6 items-center">
<div className="inline-flex gap-2 animate-fade-in text-xs text-zinc-400 bg-white/5 border-white/10 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">For Entrepreneurs &amp; Visionary Brands<span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span></div>
<h1 className="bg-clip-text leading-[1.1] animate-fade-in delay-100 md:text-7xl lg:text-8xl text-5xl font-medium text-transparent tracking-tighter bg-gradient-to-b from-white to-zinc-500 max-w-5xl max-h-max my-10 pt-8 pb-8">
    Level up your image to another league.
</h1>
<p className="md:text-lg leading-relaxed animate-fade-in delay-200 text-base font-normal text-zinc-400 max-w-2xl mb-10">
                We provide high-end photography and video content. We identify the blind spots in your visual presence and transform them into undeniable assets.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in delay-300">
<a className="sm:w-auto hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 text-sm font-medium text-zinc-950 bg-zinc-50 w-full rounded-full pt-3 pr-6 pb-3 pl-6" href="#contact">
                    Start with an Audit
                    <iconify-icon className="" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="sm:w-auto hover:bg-white/5 transition-all flex items-center justify-center text-sm font-medium text-zinc-50 bg-transparent w-full border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6" href="/#expertise">
    Explore our formats
</a>
</div>
</section>

<section className="bg-zinc-900/20 w-full border-white/5 border-t pt-24 pb-24" id="expertise">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
<div className="">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-zinc-50 mb-4">Content that commands authority.</h2>
<p className="text-sm text-zinc-400 max-w-md">Tailored high-end visual production designed specifically for the platforms where your audience lives.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl bg-zinc-950 border border-white/5 hover:border-white/10 transition-colors overflow-hidden flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[24rem]">
<div className="group-hover:opacity-100 transition-opacity cursor-pointer bg-gradient-to-b from-transparent to-zinc-900/50 opacity-0 bg-[url(https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&amp;q=80)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0" onclick="window.location.href='https://discreet-voyager-trip-flow.base44.app'" role="button">
</div>
<iconify-icon className="text-3xl text-zinc-500 mb-8" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
<div className="relative z-10 mt-auto">
<h3 className="text-xl font-medium tracking-tight text-zinc-50 mb-2">Websites &amp; Platforms</h3>
<p className="text-sm text-zinc-50">Immersive photography and hero videos that build immediate trust the second a client lands on your page.</p>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-zinc-950 border border-white/5 hover:border-white/10 transition-colors overflow-hidden flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[24rem]">
<div className="group-hover:opacity-100 transition-opacity bg-center bg-gradient-to-b from-transparent to-zinc-900/50 opacity-0 bg-[url(https://images.unsplash.com/photo-1638896671106-f44068694064?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0" onclick="window.location.href='https://www.instagram.com/reel/DPLpfKgiA5T/?utm_source=ig_web_copy_link&amp;igsh=MzRlODBiNWFlZA=='" role="button"></div>
<iconify-icon className="text-3xl text-zinc-500 mb-8" icon="solar:smartphone-linear" strokeWidth="1.5"></iconify-icon>
<div className="relative z-10 mt-auto">
<h3 className="text-xl font-medium tracking-tight text-zinc-50 mb-2">IG &amp; TikTok</h3>
<p className="text-sm text-zinc-50">Short-form, high-retention vertical video and striking stills designed for the algorithmic feed.</p>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-zinc-950 border border-white/5 hover:border-white/10 transition-colors overflow-hidden flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[24rem]">
<div className="group-hover:opacity-100 transition-opacity cursor-pointer bg-center bg-gradient-to-b from-transparent to-zinc-900/50 opacity-0 bg-[url(https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0" onclick="window.location.href='https://www.instagram.com/reel/DM9xuPYocqb/?utm_source=ig_web_copy_link&amp;igsh=MzRlODBiNWFlZA=='" role="button"></div>
<iconify-icon className="text-3xl text-zinc-500 mb-8" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
<div className="relative z-10 mt-auto">
<h3 className="text-xl font-medium text-zinc-50 tracking-tight mb-2">Performance Ads</h3>
<p className="text-sm text-zinc-50">Direct-response visual assets crafted not just to look good, but to convert and scale your numbers.</p>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 w-full pt-24 pb-24" id="process">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16 md:mb-24">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-zinc-50 mb-4">Our Blueprint.</h2>
<p className="text-sm md:text-base text-zinc-400">A systematic approach to uncovering potential and delivering undeniable results.</p>
</div>
<div className="relative">

<div className="absolute left-[27px] md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-white/20 via-white/5 to-transparent -translate-x-1/2 hidden sm:block"></div>
<div className="space-y-12 md:space-y-24">

<div className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between group">
<div className="hidden md:block w-5/12 text-right pr-12">
<h3 className="text-xl font-medium tracking-tight text-zinc-50">1. The Audit</h3>
<p className="text-sm text-zinc-500 mt-2">We analyze your current visual identity to identify what potential we can blow up.</p>
</div>
<div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-zinc-950 border border-white/10 text-zinc-50 z-10 group-hover:border-zinc-500 transition-colors">
<iconify-icon className="text-2xl" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-full md:w-5/12 pl-20 md:pl-12 md:text-left pt-2 md:pt-0">
<h3 className="text-xl font-medium tracking-tight text-zinc-50 md:hidden mb-2">1. The Audit</h3>
<p className="text-sm text-zinc-500 md:hidden">We analyze your current visual identity to identify what potential we can blow up.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between group">
<div className="w-full md:w-5/12 pl-20 md:pl-0 md:pr-12 md:text-right pt-2 md:pt-0 order-2 md:order-1">
<h3 className="text-xl font-medium tracking-tight text-zinc-50 md:hidden mb-2">2. Strategy Meeting</h3>
<p className="text-sm text-zinc-500 md:hidden">A focused session to redefine what works for your specific client target and align our vision.</p>
</div>
<div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-zinc-950 border border-white/10 text-zinc-50 z-10 group-hover:border-zinc-500 transition-colors order-1 md:order-2">
<iconify-icon className="text-2xl" icon="solar:route-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="hidden md:block w-5/12 pl-12 order-3">
<h3 className="text-xl font-medium tracking-tight text-zinc-50">2. Strategy Meeting</h3>
<p className="text-sm text-zinc-500 mt-2">A focused session to redefine what works for your specific client target and align our vision.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between group">
<div className="hidden md:block w-5/12 text-right pr-12">
<h3 className="text-xl font-medium tracking-tight text-zinc-50">3. Content Creation</h3>
<p className="text-sm text-zinc-500 mt-2">Series of high-end productions. Choose between an ongoing monthly retainer or a powerful one-shot delivery.</p>
</div>
<div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-zinc-950 border border-white/10 text-zinc-50 z-10 group-hover:border-zinc-500 transition-colors">
<iconify-icon className="text-2xl" icon="solar:videocamera-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-full md:w-5/12 pl-20 md:pl-12 md:text-left pt-2 md:pt-0">
<h3 className="text-xl font-medium tracking-tight text-zinc-50 md:hidden mb-2">3. Content Creation</h3>
<p className="text-sm text-zinc-500 md:hidden">Series of high-end productions. Choose between an ongoing monthly retainer or a powerful one-shot delivery.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between group">
<div className="w-full md:w-5/12 pl-20 md:pl-0 md:pr-12 md:text-right pt-2 md:pt-0 order-2 md:order-1">
<h3 className="text-xl font-medium tracking-tight text-zinc-50 md:hidden mb-2">4. The Outcome</h3>
<p className="text-sm text-zinc-500 md:hidden">Real confidence from your target. Real results. Real numbers. One success.</p>
</div>
<div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-zinc-50 border border-zinc-50 text-zinc-950 z-10 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
<iconify-icon className="text-2xl" icon="solar:cup-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="hidden md:block w-5/12 pl-12 order-3">
<h3 className="text-xl font-medium tracking-tight text-zinc-50">4. The Outcome</h3>
<p className="text-sm text-zinc-500 mt-2">Real confidence from your target. Real results. Real numbers. One success.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 bg-zinc-900/10 w-full border-white/5 border-t pt-24 pb-24" id="results">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row md:items-end gap-6 mb-12 gap-x-6 gap-y-6 items-start justify-between">
<div className="">
<h2 className="md:text-5xl text-3xl font-medium text-zinc-50 tracking-tighter mb-4">Tangible results.</h2>
<p className="md:text-base text-sm text-zinc-400 max-w-lg">A glimpse into the high-end visual assets we've crafted. Real examples of what elevating your brand looks like.</p>
</div>
<div className="hidden md:flex gap-2">
<button className="px-5 py-2 text-xs font-medium bg-white/10 text-zinc-50 rounded-full border border-white/5 backdrop-blur-sm">All Work</button>
<button className="hover:text-zinc-50 hover:bg-white/5 transition-colors hover:border-white/5 text-xs font-medium text-zinc-400 border-transparent border rounded-full pt-2 pr-5 pb-2 pl-5">Video</button>
<button className="hover:text-zinc-50 hover:bg-white/5 transition-colors hover:border-white/5 cursor-pointer text-xs font-medium text-zinc-400 border-transparent border rounded-full pt-2 pr-5 pb-2 pl-5" onclick="window.location.href='/page'" role="button">Photography</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[20rem] md:auto-rows-[24rem] gap-x-4 gap-y-4">

<div className="group relative rounded-2xl bg-zinc-950 border border-white/5 overflow-hidden flex items-center justify-center">
<img alt="Brand Photography Placeholder" className="group-hover:opacity-80 transition-opacity duration-700 group-hover:grayscale-0 opacity-50 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1b5325de-0a73-4673-bc1e-f668450e43d6_800w.jpg"/>
<div className="absolute bottom-6 left-6 right-6 z-10">
<div className="inline-flex cursor-pointer text-xs font-medium text-zinc-300 bg-zinc-950/60 border-white/10 border rounded-full mb-3 pt-1 pr-3 pb-1 pl-3 backdrop-blur-md gap-x-1.5 gap-y-1.5 items-center" onclick="window.location.href='https://www.instagram.com/blindspot.motion/'" role="button">Explore</div>
<h3 className="text-lg font-medium text-zinc-50 tracking-tight">High-end Productions</h3>
</div><div className="bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="group relative rounded-2xl bg-zinc-950 border border-white/5 overflow-hidden flex items-center justify-center">
<img alt="Social Media Reel Placeholder" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/481dd8ea-7f5b-47db-bc09-6483cf2b1d89_800w.webp"/>
<div className="bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/40 opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-6 right-6 z-10">
</div>
<div className="absolute bottom-6 left-6 right-6 z-10">
<div className="inline-flex hover:bg-zinc-900/80 transition-colors cursor-pointer text-xs font-medium text-zinc-300 bg-zinc-950/60 border-white/10 border rounded-full mb-3 pt-1 pr-3 pb-1 pl-3 backdrop-blur-md gap-x-1.5 gap-y-1.5 items-center" onclick="window.location.href='https://www.instagram.com/p/DQEEFIWkpCA'" role="button">
<i className="w-3 h-3 text-zinc-300" data-lucide="play-circle"></i> IG Reel
            </div>
<h3 className="text-lg font-medium tracking-tight text-zinc-50">Viral Brand Teaser</h3>
</div>
</div>

<div className="group relative rounded-2xl bg-zinc-950 border border-white/5 overflow-hidden flex items-center justify-center">
<img alt="Corporate Visuals" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-700" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
<div className="bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6 right-6 z-10">
<label className="cursor-pointer inline-flex gap-x-1.5 gap-y-1.5 items-center transition-colors hover:bg-zinc-900/80 text-xs font-medium text-zinc-300 bg-zinc-950/60 border-white/10 border rounded-full mb-3 pt-1 pr-3 pb-1 pl-3 relative backdrop-blur-md">
<input className="peer sr-only" type="checkbox"/>
<i className="w-3 h-3 text-zinc-300" data-lucide="image"></i> View Gallery
                
                <div className="absolute bottom-full left-0 mb-4 w-[240px] bg-zinc-950/95 border border-white/10 rounded-xl p-2 opacity-0 translate-y-2 pointer-events-none peer-checked:opacity-100 peer-checked:translate-y-0 peer-checked:pointer-events-auto transition-all duration-300 grid grid-cols-2 gap-2 backdrop-blur-xl shadow-2xl z-50">
<div className="aspect-square rounded-lg overflow-hidden relative border border-white/5">
<img alt="Corporate 1" className="w-full h-full object-cover absolute inset-0 hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/38121faf-4b30-42cf-80e9-0252f3a93a1b_800w.jpg"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden relative border border-white/5">
<img alt="Corporate 2" className="w-full h-full object-cover absolute inset-0 hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ef40f6f1-e8f3-4066-8059-202df2778bf1_320w.jpg"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden relative border border-white/5">
<img alt="Corporate 3" className="w-full h-full object-cover absolute inset-0 hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bcc3291f-70f6-45f0-98e1-3e91e1595676_320w.jpg"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden relative border border-white/5">
<img alt="Corporate 4" className="w-full h-full object-cover absolute inset-0 hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c40a22e2-1180-4efc-8975-55a742a2967c_800w.jpg"/>
</div>
</div>
</label>
<h3 className="text-lg font-medium tracking-tight text-zinc-50">Visuals for Companies</h3>
</div>
</div>

<div className="group relative rounded-2xl bg-zinc-950 border border-white/5 overflow-hidden md:col-span-2 flex items-center justify-center">
<img alt="Product Photography Placeholder" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-80 transition-opacity duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/be7c6c5a-7896-47b6-a3d3-3274cf02fad7_1600w.jpg"/>
<div className="bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6 right-6 z-10">
<div className="inline-flex text-xs font-medium text-zinc-300 bg-zinc-950/60 border-white/10 border rounded-full mb-3 pt-1 pr-3 pb-1 pl-3 backdrop-blur-md gap-x-1.5 gap-y-1.5 items-center">Explore</div>
<h3 className="md:text-2xl text-xl font-medium text-zinc-50 tracking-tight">Details</h3>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 bg-zinc-950 w-full border-white/5 border-t pt-24 pb-24" id="trusted">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-12 md:mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-zinc-50 mb-4">They found their blind spot.</h2>
<p className="text-sm md:text-base text-zinc-400 max-w-lg">Visionary brands and industry leaders who trusted us to elevate their visual presence to another league.</p>
</div>
<div className="flex flex-wrap md:gap-x-12 md:gap-y-8 gap-x-8 gap-y-6 items-center">
<span className="text-xl md:text-2xl font-pt-serif tracking-[0.15em] text-zinc-600 hover:text-zinc-300 transition-colors cursor-default" style={{fontFamily: '\'LVMH\', \'PT Serif\', serif'}}>LVMH</span>
<span className="md:text-2xl uppercase hover:text-zinc-300 transition-colors cursor-default text-xl text-zinc-600 tracking-[0.2em] font-montserrat" style={{fontFamily: '\'Louis Vuitton\', \'Futura\', \'Montserrat\', sans-serif'}}>Louis Vuitton</span>
<span className="hover:text-zinc-300 transition-colors cursor-default md:text-3xl text-xl font-semibold text-zinc-600 font-cormorant" style={{fontFamily: '\'Nicolas Cochin\', \'Cormorant Garamond\', serif'}}>Dior</span>
<span className="text-xl md:text-2xl uppercase tracking-widest text-zinc-600 hover:text-zinc-300 transition-colors cursor-default" style={{fontFamily: '\'Memphis\', \'Courier New\', serif'}}>Hermès</span>
<span className="text-xl md:text-2xl font-playfair uppercase tracking-[0.15em] text-zinc-600 hover:text-zinc-300 transition-colors cursor-default" style={{fontFamily: '\'Didot\', \'Playfair Display\', serif'}}>Schiaparelli</span>
<span className="text-xl md:text-2xl font-playfair uppercase tracking-widest text-zinc-600 hover:text-zinc-300 transition-colors cursor-default" style={{fontFamily: '\'Didot\', \'Playfair Display\', serif'}}>VOGUE USA</span>
<span className="text-xl md:text-2xl font-oswald uppercase font-semibold text-zinc-600 hover:text-zinc-300 transition-colors cursor-default" style={{fontFamily: '\'Balenciaga\', \'Oswald\', sans-serif'}}>Balenciaga</span>
<span className="hover:text-zinc-300 transition-colors cursor-default md:text-2xl text-xl font-bold text-zinc-600 tracking-normal font-sans" style={{fontFamily: '\'Audi Type\', \'DM Sans\', sans-serif'}}>Audi</span>
<span className="uppercase hover:text-zinc-300 transition-colors cursor-default md:text-2xl text-xl font-light text-zinc-600 tracking-widest font-ibm-sans max-h-32 scale-100" style={{fontFamily: '\'911 Porscha\', \'Space Grotesk\', sans-serif'}}>Porsche</span>
<span className="text-xl md:text-2xl font-space-grotesk italic uppercase tracking-wider font-semibold text-zinc-600 hover:text-zinc-300 transition-colors cursor-default" style={{fontFamily: '\'Alpine\', \'Space Grotesk\', sans-serif'}}>Alpine</span>
<span className="text-xl md:text-2xl font-oswald italic uppercase font-bold text-zinc-600 hover:text-zinc-300 transition-colors cursor-default" style={{fontFamily: '\'Oswald\', sans-serif'}}>FIA WRC</span>
<span className="text-xl md:text-2xl font-montserrat uppercase tracking-widest font-semibold text-zinc-600 hover:text-zinc-300 transition-colors cursor-default" style={{fontFamily: '\'Montserrat\', sans-serif'}}>Air Liquide</span>
<span className="text-xl md:text-2xl font-medium tracking-tight text-zinc-600 hover:text-zinc-300 transition-colors cursor-default">Ingrecos</span>
<span className="text-xl md:text-2xl font-medium tracking-tight text-zinc-600 hover:text-zinc-300 transition-colors cursor-default">Owkin</span>
<span className="text-xl md:text-2xl font-medium tracking-tight text-zinc-600 hover:text-zinc-300 transition-colors cursor-default">Waiv</span>
<span className="text-xl md:text-2xl font-playfair lowercase font-bold italic text-zinc-600 hover:text-zinc-300 transition-colors cursor-default" style={{fontFamily: '\'Playfair Display\', serif'}}>Télérama</span>
<span className="text-xl md:text-2xl font-cormorant uppercase tracking-widest font-semibold text-zinc-600 hover:text-zinc-300 transition-colors cursor-default" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Samaritaine</span>
<span className="text-xl md:text-2xl font-bricolage uppercase font-bold italic tracking-tighter text-zinc-600 hover:text-zinc-300 transition-colors cursor-default" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif'}}>Orangina</span>
<span className="text-xl md:text-2xl font-medium tracking-tight text-zinc-600 hover:text-zinc-300 transition-colors cursor-default">Ilha Productions</span>
<span className="text-xl md:text-2xl font-medium tracking-tight text-zinc-600 hover:text-zinc-300 transition-colors cursor-default">Plug Influences</span>
<span className="text-2xl md:text-3xl font-work-sans lowercase font-bold tracking-tighter text-zinc-600 hover:text-zinc-300 transition-colors cursor-default" style={{fontFamily: '\'Futura PT\', \'Work Sans\', sans-serif'}}>ASOS</span>
<span className="text-sm md:text-base font-normal text-zinc-700 cursor-default">&amp; more.</span>
</div>
</div>
</section>

<section className="w-full max-w-5xl mx-auto px-6 py-24 md:py-32 mb-12" id="contact">
<div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-8 md:p-16 flex flex-col items-center text-center relative overflow-hidden">
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
<h2 className="z-10 md:text-5xl text-3xl font-medium text-zinc-50 tracking-tighter mb-6 relative">Ready to find yours?</h2>
<p className="z-10 md:text-base text-sm text-zinc-400 max-w-lg mb-10 relative">Stop blending in. Let's schedule your initial audit and map out exactly how to elevate your brand to the next level.</p>
<form className="z-10 flex flex-col gap-4 w-full max-w-md relative gap-x-4 gap-y-4">
<div className="flex flex-col gap-1 text-left">
<label className="text-xs font-medium text-zinc-400 pl-1" htmlFor="email">Work Email</label>
<input className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-zinc-50 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors" id="email" placeholder="hello@yourbrand.com" type="email"/>
</div>

<div className="flex items-center justify-between border border-white/10 rounded-xl p-3 bg-zinc-950 mt-2">
<span className="text-xs text-zinc-400 font-medium">Project Scope</span>
<div className="flex items-center gap-2">
<span className="text-xs text-zinc-500">One-Shot</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-300 after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-200 peer-checked:after:bg-zinc-950"></div>
</label>
<span className="text-xs text-zinc-100 font-medium">Monthly</span>
</div>
</div><button className="hover:bg-zinc-200 transition-colors flex cursor-pointer text-sm font-medium text-zinc-950 bg-zinc-50 w-full rounded-xl mt-4 pt-3 pr-6 pb-3 pl-6 gap-x-2 gap-y-2 items-center justify-center" onclick="window.location.href='/mail'" role="button" type="button">Request Audit<svg className="" data-icon-set="solar" data-solar="arrow-right-linear" height="14" style={{color: 'rgb(9, 9, 11)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path className="" d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg></button>
</form>
</div>
</section>
</main>

<footer className="w-full border-t border-white/5 bg-zinc-950 py-12 text-center md:text-left">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col gap-2">
<span className="text-zinc-50 font-medium tracking-tighter text-lg">BLINDSPOT.</span>
<span className="text-xs text-zinc-500">High-end content for the ambitious.</span>
</div>
<div className="flex gap-6 text-xs text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="/#">Instagram</a>
<a className="hover:text-zinc-300 transition-colors" href="#">TikTok</a>
<a className="hover:text-zinc-300 transition-colors" href="/#">Terms</a>
</div>
<div className="text-xs text-zinc-600">© 2026 Blind Spot Studio.</div>
</div>
</footer>

    </>
  );
}
