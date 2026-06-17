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
      

<div className="grain fixed inset-0 z-50 h-full w-full opacity-20 pointer-events-none mix-blend-overlay"></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/10 backdrop-blur-md bg-black/70">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-xl font-medium tracking-tighter hover:text-[#ccff00] transition-colors duration-300" href="#">
                ZBC<span className="text-[#ff00ff]">.</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight">
<a className="hover:text-[#ccff00] transition-colors" href="#home">HOME</a>
<a className="hover:text-[#ff00ff] transition-colors" href="#shop">SHOP</a>
<a className="hover:text-[#ccff00] transition-colors" href="#lore">LORE</a>
<a className="hover:text-[#ff00ff] transition-colors" href="#dispatch">DISPATCH</a>
<a className="border border-white/20 px-4 py-1.5 rounded-full hover:bg-[#ccff00] hover:text-black hover:border-[#ccff00] transition-all duration-300" href="#hq">HQ</a>
</div>
<button className="md:hidden text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<section className="min-h-screen flex flex-col border-white/10 border-b pt-16 relative items-center justify-center" id="home">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff00ff] rounded-full blur-[120px] opacity-10 pointer-events-none">
</div>
<div className="z-10 text-center max-w-5xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="inline-flex items-center gap-2 border border-[#ccff00]/30 bg-[#ccff00]/5 px-3 py-1 rounded-full mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ccff00] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#ccff00]"></span>
</span>
<span className="text-[10px] font-mono tracking-widest text-[#ccff00] uppercase">System Override Initiated</span>
</div>
<h1 className="md:text-9xl leading-none text-6xl font-medium tracking-tighter mb-6" style={{}}>ZIO
            <span className="text-[#ccff00]">BRAT</span> <span className="italic text-[#ff00ff] font-serif" style={{}}>CLUB</span>
</h1>
<p className="md:text-xl text-lg text-neutral-400 tracking-tight font-mono max-w-xl mr-auto mb-10 ml-auto">you can't cancel what was promised x</p>
<div className="flex flex-col md:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center">
<a className="group relative px-8 py-3 bg-[#ccff00] text-black font-semibold tracking-tight overflow-hidden" href="#shop">
<div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
</div>
<span className="relative flex items-center gap-2">
                        SECURE THE DRIP
                        <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</a>
<a className="px-8 py-3 border border-white/20 hover:border-[#ff00ff] hover:text-[#ff00ff] transition-colors font-medium tracking-tight" href="#lore">
                READ THE LORE
            </a>
</div>
</div>

<div className="overflow-hidden bg-black/50 w-full border-white/10 border-t border-b pt-3 pb-3 absolute bottom-0 backdrop-blur-sm">
<div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] flex gap-8 text-xs font-mono uppercase tracking-widest text-neutral-500">
<span>/// UNAPOLOGETIC ///</span>
<span className="text-[#ff00ff]">LOUD &amp; PROUD</span>
<span className="">/// ZIO BRAT CLUB ///</span>
<span className="text-[#ccff00]">EST. 5786</span>
<span className="">/// SORRY NOT SORRY ///</span>
<span className="">/// UNAPOLOGETIC ///</span>
<span className="text-[#ff00ff]">LOUD &amp; PROUD</span>
<span>/// ZIO BRAT CLUB ///</span>
<span className="text-[#ccff00]">EST. 5784</span>
<span>/// NOT SORRY ///</span>
<span>/// UNAPOLOGETIC ///</span>
<span className="text-[#ff00ff]">LOUD &amp; PROUD</span>
<span>/// ZIO BRAT CLUB ///</span>
<span className="text-[#ccff00]">EST. 5784</span>
<span>/// NOT SORRY ///</span>
</div>
</div>
</section>
<style className="">
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
    </style>

<section className="border-white/10 border-b pt-32 pb-32 relative bg-neutral-950" id="lore">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20">
<span className="text-[#ccff00] font-mono text-xs tracking-widest uppercase mb-4 block">The Archives</span>
<h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-none mb-8">
                    THE ZBC <br/>
<span className="text-neutral-700">MANIFESTO</span>
</h2>
<div className="h-px w-full bg-white/10"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24 items-start">
<div className="md:col-span-3 sticky top-24">
<span className="font-mono text-5xl text-neutral-800">01</span>
<h3 className="text-xl font-bold text-white mt-2 tracking-tight">THE ORIGIN STORY</h3>
<div className="mt-4 inline-block border border-[#ff00ff]/30 text-[#ff00ff] px-2 py-1 text-[10px] font-mono rounded uppercase">File Corrupted... Restored</div>
</div>
<div className="md:col-span-9 space-y-6 text-lg md:text-xl font-light text-neutral-400 leading-relaxed">
<p>
                        It started as a slur. You know the one. <span className="text-white font-medium">"Zio."</span>
</p>
<p>
                        Thrown into comment sections, spray-painted on synagogue walls, whispered in "polite" society to avoid saying the quiet part out loud. It was meant to be a scarlet letter. A shorthand for "you don't belong here." A way to make our history, our indigenous roots, and our pride feel dirty.
                    </p>
<p>
                        They wanted us to shrink. To apologize. To be the "Good Jew" who nods along while history is rewritten by people who learned geopolitics from a 15-second dance app.
                    </p>
<div className="border-l-2 border-[#ccff00] pl-6 py-2 my-8">
<p className="text-2xl text-white font-medium italic tracking-tight">
                            "But here's the thing about trying to shame a people who have survived empires: We have a very specific sense of humor."
                        </p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24 items-start">
<div className="md:col-span-3 sticky top-24">
<span className="font-mono text-5xl text-neutral-800">02</span>
<h3 className="text-xl font-bold text-white mt-2 tracking-tight">THE RECLAMATION</h3>
<div className="mt-4 inline-block border border-[#ccff00]/30 text-[#ccff00] px-2 py-1 text-[10px] font-mono rounded uppercase">Status: Active</div>
</div>
<div className="md:col-span-9 space-y-6 text-lg md:text-xl font-light text-neutral-400 leading-relaxed">
<p>
                        We looked at the word "Zio" and decided: <span className="text-white">It's kinda cute, actually.</span>
</p>
<p>
                        It sounds like a high-speed train. Or a futuristic currency. Or a really exclusive club. So we took it. We dipped it in neon, wrapped it in irony, and stamped it on the highest quality merch we could find. 
                    </p>
<p>
<span className="text-[#ff00ff] font-medium">ZioBratClub</span> isn't just a brand; it's a tactical response. If you're going to label us, make sure you spell it right. We are taking the oldest hate in the book and turning it into the loudest drip on the block.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
<div className="md:col-span-3 sticky top-24">
<span className="font-mono text-5xl text-neutral-800">03</span>
<h3 className="text-xl font-bold text-white mt-2 tracking-tight">THE BRAT ETHOS</h3>
<div className="mt-4 inline-block border border-white/20 text-white px-2 py-1 text-[10px] font-mono rounded uppercase">Priority: High</div>
</div>
<div className="md:col-span-9 space-y-8">
<p className="text-lg md:text-xl font-light text-neutral-400 leading-relaxed">
                        The "Nice Jewish Girl" era is officially over. She was polite. She explained herself. She tried to bridge gaps with people burning bridges.
                    </p>
<p className="text-lg md:text-xl font-light text-neutral-400 leading-relaxed">
                        The <span className="text-[#ccff00] font-medium">Zio Brat</span> doesn't explain. She exists.
                    </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 mt-12">
<div className="bg-black p-8 hover:bg-neutral-900 transition-colors group">
<span className="font-mono text-xs text-[#ff00ff] mb-2 block">Rule 01</span>
<h4 className="text-xl font-medium text-white mb-2 reveal-text">UNAPOLOGETIC PRESENCE</h4>
<p className="text-sm text-neutral-500">We occupy space. Physically, digitally, spiritually. We don't ask for permission to exist in our own story.</p>
</div>
<div className="bg-black p-8 hover:bg-neutral-900 transition-colors group">
<span className="font-mono text-xs text-[#ccff00] mb-2 block">Rule 02</span>
<h4 className="text-xl font-medium text-white mb-2 reveal-text">RADICAL JOY</h4>
<p className="text-sm text-neutral-500">They want us miserable. They want us afraid. The biggest "f**k you" is to be happy, thriving, and fabulous.</p>
</div>
<div className="bg-black p-8 hover:bg-neutral-900 transition-colors group">
<span className="font-mono text-xs text-[#ccff00] mb-2 block">Rule 03</span>
<h4 className="text-xl font-medium text-white mb-2 reveal-text">FACTS OVER FEELINGS</h4>
<p className="text-sm text-neutral-500">We have 3,000 years of receipts. We read the books they ban. We know who we are.</p>
</div>
<div className="bg-black p-8 hover:bg-neutral-900 transition-colors group">
<span className="font-mono text-xs text-[#ff00ff] mb-2 block">Rule 04</span>
<h4 className="text-xl font-medium text-white mb-2 reveal-text">LOUD &amp; PROUD</h4>
<p className="text-sm text-neutral-500">Wear the Star. Speak the language. Post the flag. If it triggers them, that's a them problem.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-white/10 border-b pt-24 pb-24" id="shop">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
<div className="">
<span className="text-[#ccff00] font-mono text-xs tracking-widest uppercase mb-2 block">The Armory</span>
<h2 className="text-4xl font-medium tracking-tighter">WEAR YOUR PROMISE</h2>
</div>
<a className="text-sm font-medium border-b border-[#ff00ff] pb-0.5 hover:text-[#ff00ff] transition-colors" href="#">VIEW ALL COLLECTION</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">

<div className="group relative bg-black p-8 hover:bg-neutral-900/50 transition-colors">
<div className="aspect-square flex overflow-hidden bg-neutral-900 mb-6 relative items-center justify-center">
<svg aria-hidden="true" className="iconify text-neutral-700 group-hover:text-white transition-colors iconify--lucide" data-icon="lucide:shirt" data-width="64" height="64" role="img" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div className="absolute top-2 right-2 bg-[#ff00ff] text-black text-[10px] font-bold px-2 py-0.5 uppercase tracking-wide">New</div>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="group-hover:text-[#ccff00] transition-colors text-lg font-medium text-white tracking-tight" style={{}}>HOT GIRL COLONISER</h3>
<p className="text-sm text-neutral-500 mt-1" style={{}}></p>
</div>
<span className="text-sm font-mono">$120</span>
</div>
</div>

<div className="group relative bg-black p-8 hover:bg-neutral-900/50 transition-colors">
<div className="aspect-square bg-neutral-900 mb-6 flex items-center justify-center relative overflow-hidden">
<svg aria-hidden="true" className="iconify text-neutral-700 group-hover:text-white transition-colors iconify--lucide" data-icon="lucide:zap" data-width="64" height="64" role="img" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path className="" d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="group-hover:text-[#ccff00] transition-colors text-lg font-medium text-white tracking-tight" style={{}}>MK X CU TOTE BAG</h3>
<p className="text-sm text-neutral-500 mt-1" style={{}}></p>
</div>
<span className="font-mono text-sm">$28</span>
</div>
</div>

<div className="group relative bg-black p-8 hover:bg-neutral-900/50 transition-colors">
<div className="aspect-square bg-neutral-900 mb-6 flex items-center justify-center relative overflow-hidden">
<svg aria-hidden="true" className="iconify text-neutral-700 group-hover:text-white transition-colors iconify--lucide" data-icon="lucide:crown" data-width="64" height="64" role="img" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294zM5 21h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div className="absolute top-2 right-2 bg-[#ccff00] text-black text-[10px] font-bold px-2 py-0.5 uppercase tracking-wide">Bestseller</div>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="group-hover:text-[#ccff00] transition-colors text-lg font-medium text-white tracking-tight" style={{}}>SLUTTY LITTLE ZIONIST</h3>
<p className="text-sm text-neutral-500 mt-1" style={{}}></p>
</div>
<span className="font-mono text-sm">$85</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/10 bg-neutral-950" id="dispatch">
<div className="max-w-7xl mx-auto px-6">
<span className="text-[#ff00ff] font-mono text-xs tracking-widest uppercase mb-6 block">Intel Drop</span>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<article className="group cursor-pointer">
<div className="h-[1px] w-full bg-gradient-to-r from-white/30 to-transparent mb-6 group-hover:from-[#ccff00] transition-colors duration-500"></div>
<div className="flex justify-between items-baseline mb-3">
<span className="font-mono text-xs text-neutral-500">SYS.DATE: 24.10.15</span>
<span className="font-mono text-xs border border-white/20 px-2 py-0.5 rounded-full text-neutral-400">MANIFESTO</span>
</div>
<h3 className="group-hover:text-[#ccff00] transition-colors text-2xl font-medium tracking-tight mb-3">Why "Nice Jewish Girl" is Out and "Zio Brat" is In</h3>
<p className="leading-relaxed font-light text-neutral-400">
                        We are done being polite about our existence. Read why assimilation is boring and audacity is the new tradition.
                    </p>
<div className="mt-4 flex items-center gap-2 text-sm text-[#ff00ff] opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                        Read Transmission <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</article>
<article className="group cursor-pointer">
<div className="h-[1px] w-full bg-gradient-to-r from-white/30 to-transparent mb-6 group-hover:from-[#ccff00] transition-colors duration-500"></div>
<div className="flex justify-between items-baseline mb-3">
<span className="font-mono text-xs text-neutral-500">SYS.DATE: 24.10.10</span>
<span className="font-mono text-xs border border-white/20 px-2 py-0.5 rounded-full text-neutral-400">FIELD REPORT</span>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3 group-hover:text-[#ccff00] transition-colors">Hummus is Ours: A Reclaimation Strategy</h3>
<p className="text-neutral-400 font-light leading-relaxed">
                        A tactical guide to enjoying chickpeas without the side of guilt. Spoiler: It tastes better when you own it.
                    </p>
<div className="mt-4 flex items-center gap-2 text-sm text-[#ff00ff] opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                        Read Transmission <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</article>
</div>
</div>
</section>

<section className="pt-24 pb-24" id="hq">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div className="flex flex-col justify-center">
<div className="relative">
<div className="absolute -left-6 top-0 bottom-0 w-1 bg-[#ccff00] rounded-full hidden lg:block"></div>
<svg aria-hidden="true" className="iconify text-[#ccff00] mb-6 iconify--lucide" data-icon="lucide:radar" data-width="48" height="48" role="img" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path className="" d="M19.07 4.93A10 10 0 0 0 6.99 3.34M4 6h.01M2.29 9.62a10 10 0 1 0 19.02-1.27"></path><path d="M16.24 7.76a6 6 0 1 0-8.01 8.91M12 18h.01m5.98-6.34a6 6 0 0 1-2.22 5.01"></path><circle cx="12" cy="12" r="2"></circle><path d="m13.41 10.59l5.66-5.66"></path></g></svg>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tighter mb-4">JOIN THE <br/> <span className="text-[#ccff00]">RANKS</span></h2>
<p className="text-lg font-light text-neutral-400 mb-8" style={{}}>Enlist for briefing updates, exclusive drops, and emergency calls to action. We don't spam, we strategize.</p>
</div>
<form className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-[#ccff00] to-[#ff00ff] opacity-20 group-hover:opacity-50 blur transition duration-500"></div>
<div className="relative flex flex-col sm:flex-row bg-black p-2 border border-white/10">
<div className="flex-grow flex items-center px-4">
<svg aria-hidden="true" className="iconify text-neutral-500 mr-3 iconify--lucide" data-icon="lucide:mail" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
<input className="w-full bg-transparent text-white placeholder-neutral-600 focus:outline-none py-3 font-mono text-sm tracking-wide" placeholder="ENTER YOUR EMAIL" type="email"/>
</div>
<button className="bg-white text-black font-semibold px-8 py-3 hover:bg-[#ccff00] transition-colors flex items-center justify-center gap-2 whitespace-nowrap tracking-tight" type="button">
                                ENLIST
                                <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<p className="mt-3 text-xs text-neutral-600 font-mono">
                            &gt; SECURE CONNECTION ESTABLISHED <br/>
                            &gt; NO SPIES ALLOWED
                        </p>
</form>
</div>

<div className="relative">
<div className="absolute inset-0 border border-white/5 bg-white/5 -rotate-1 rounded-xl pointer-events-none"></div>
<div className="relative bg-black border border-white/10 p-8 lg:p-10 shadow-2xl">
<div className="flex items-center justify-between mb-8">
<h3 className="text-2xl font-medium tracking-tight flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-[#ff00ff] animate-pulse"></span>
                                OPEN SECURE CHANNEL
                            </h3>
<span className="text-xs font-mono text-neutral-500 border border-neutral-800 px-2 py-1 rounded">ENCRYPTED</span>
</div>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider" htmlFor="c-name">Codename</label>
<input className="w-full bg-neutral-900/50 border border-white/10 p-2.5 text-sm text-white focus:outline-none focus:border-[#ff00ff] focus:bg-neutral-900 transition-all placeholder-neutral-700 rounded-sm" id="c-name" placeholder="Agent X" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider" htmlFor="c-topic">Topic</label>
<div className="relative">
<select className="focus:outline-none focus:border-[#ff00ff] focus:bg-neutral-900 transition-all appearance-none cursor-pointer text-sm text-white bg-neutral-900/50 w-full border-white/10 border rounded-sm pt-2.5 pr-2.5 pb-2.5 pl-2.5" id="c-topic">
<option>General Intel</option>
<option>Order Support</option>
<option>Hate Mail (lol)</option>
<option>Collab Request</option>
</select>
<svg aria-hidden="true" className="iconify absolute right-3 top-3 text-neutral-500 pointer-events-none iconify--lucide" data-icon="lucide:chevron-down" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider" htmlFor="c-email">Return Frequency (Email)</label>
<input className="w-full bg-neutral-900/50 border border-white/10 p-2.5 text-sm text-white focus:outline-none focus:border-[#ff00ff] focus:bg-neutral-900 transition-all placeholder-neutral-700 rounded-sm" id="c-email" placeholder="secure@server.net" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider" htmlFor="c-message">Transmission Data</label>
<textarea className="w-full bg-neutral-900/50 border border-white/10 p-2.5 text-sm text-white focus:outline-none focus:border-[#ff00ff] focus:bg-neutral-900 transition-all placeholder-neutral-700 rounded-sm resize-none" id="c-message" placeholder="Enter message payload..." rows="4"></textarea>
</div>
<button className="w-full bg-neutral-800 text-white border border-white/10 py-3 mt-2 text-sm font-medium tracking-wide hover:bg-[#ff00ff] hover:text-black hover:border-[#ff00ff] transition-all duration-300 flex items-center justify-center gap-2" type="button">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:send" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                TRANSMIT DATA
                            </button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 py-12 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<a className="text-lg font-medium tracking-tighter block mb-2" href="#">ZBC.</a>
<p className="text-xs text-neutral-600 font-mono">© 5786 ZioBratClub 
Propaganda Division.
Unauthorised distribution encouraged. </p>
</div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-[#ff00ff] transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="text-neutral-500 hover:text-[#ff00ff] transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-neutral-500 hover:text-[#ff00ff] transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-circle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</footer>

    </>
  );
}
