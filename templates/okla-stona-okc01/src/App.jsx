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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full z-0"><iframe frameborder="0" height="100%" src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/" width="100%"></iframe></div></div>

<nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-sm border-b border-[#C9A24F]/10">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">
<div className="text-2xl tracking-tighter font-light" style={{fontFamily: '\'Playfair Display\', serif'}}>
<span className="text-[#F3EFEA]">Okla</span><span className="text-[#C9A24F]"> ⭐ </span><span className="text-[#F3EFEA]">Stona</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="hover:text-[#C9A24F] transition-colors text-sm text-[#F3EFEA]/70" href="#story">The Buffalo Story</a>
<a className="hover:text-[#C9A24F] transition-colors text-sm text-[#F3EFEA]/70" href="#craft">The Process</a>
<a className="text-sm text-[#F3EFEA]/70 hover:text-[#C9A24F] transition-colors" href="#dispensaries">For Dispensaries</a>
<a className="text-sm text-[#F3EFEA]/70 hover:text-[#C9A24F] transition-colors" href="#connoisseur">For Connoisseurs</a>
<a className="hover:bg-[#BF6836]/90 transition-all text-sm text-[#F3EFEA] bg-[#BF6836] rounded pt-2.5 pr-5 pb-2.5 pl-5" href="#contact" style={{}}>Connect</a>
</div>
<button className="md:hidden">
<svg className="lucide lucide-menu w-6 h-6 text-[#C9A24F]" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
<div className="absolute inset-0 z-0">
<img alt="Flat rolling prairie" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1920&amp;q=80"/>
<div className="bg-gradient-to-b from-[#0D0D0D]/60 via-[#0D0D0D]/80 to-[#0D0D0D] absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 lg:px-8 text-center max-w-5xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 relative">
<div className="mb-6">
<p className="text-sm uppercase tracking-widest text-[#C9A24F] mb-4 font-light">Where The Buffalo Roams</p>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8 leading-[1.1]" style={{fontFamily: '\'Playfair Display\', serif', fontWeight: '600'}}>
<span className="text-[#F3EFEA]">Smooth Pull.</span><br/>
<span className="text-[#C9A24F]">Perfect Finish.</span>
</h1>
<p className="text-lg md:text-xl text-[#F3EFEA]/80 max-w-3xl mx-auto mb-6 leading-relaxed font-light">
                The buffalo doesn't move fast — and neither do we.
            </p>
<p className="md:text-lg leading-relaxed text-base text-[#A67C52] max-w-2xl mr-auto mb-12 ml-auto">Every Okla ⭐ Stona pack is built through patience, care and hard work.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-[#BF6836] hover:bg-[#BF6836]/90 text-[#F3EFEA] rounded transition-all text-base font-normal inline-flex items-center justify-center gap-2 group" href="#dispensaries">
<span>I'm a Dispensary</span>
<svg className="lucide lucide-arrow-down w-4 h-4 group-hover:translate-y-0.5 transition-transform" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#C9A24F] hover:bg-[#C9A24F]/10 text-[#C9A24F] rounded transition-all text-base font-normal inline-flex items-center justify-center gap-2 group" href="#connoisseur">
<span>I'm a Connoisseur</span>
<svg className="lucide lucide-arrow-down w-4 h-4 group-hover:translate-y-0.5 transition-transform" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</a>
</div>
</div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
<svg className="lucide lucide-chevron-down w-6 h-6 text-[#C9A24F]/50" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</section>

<section className="md:py-32 pt-24 pb-24 relative" id="story">
<div className="max-w-6xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="">
<p className="text-sm uppercase tracking-widest text-[#C9A24F] mb-4 font-light">Rooted in Oklahoma</p>
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 leading-tight" style={{fontFamily: '\'Playfair Display\', serif', fontWeight: '600'}}>
                        Where The Buffalo Roams
                    </h2>
<p className="text-lg text-[#F3EFEA]/70 mb-6 leading-relaxed">
                        Rooted in Oklahoma soil and soul. Freedom, presence, and patience — that's the pace we move at.
                    </p>
<p className="leading-relaxed text-base text-[#A67C52] mb-8" style={{}}>Like the buffalo that once moved across these plains, we understand that the best things aren't rushed. Every flower is a testament to the land we call home, crafted with the same deliberate care that nature itself demands.</p>
<div className="border-l-2 border-[#C9A24F] pl-6">
<p className="text-[#C9A24F] italic text-lg" style={{fontFamily: '\'Playfair Display\', serif'}}>
                            "Patience isn't waiting. It's presence in every moment of the process."
                        </p>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] rounded overflow-hidden">
<img alt="Oklahoma landscape" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a5b14d54-9f80-400a-af12-d93b3ca5c9c8_1600w.jpg"/>
</div>
<div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#BF6836]/20 rounded -z-10"></div>
</div>
</div>
</div>
</section>

<section className="md:py-32 pt-24 pb-24 relative" id="dispensaries">
<div className="max-w-6xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<div className="aspect-square rounded overflow-hidden relative">
<img alt="Dispensary interior" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d6da9097-3a23-4f88-b911-be8f80b01538_1600w.jpg"/>
</div>
</div>
<div className="order-1 md:order-2">
<p className="text-sm uppercase tracking-widest text-[#C9A24F] mb-4 font-light">Wholesale Partners</p>
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 leading-tight" style={{fontFamily: '\'Playfair Display\', serif', fontWeight: '600'}}>
                        For Dispensaries
                    </h2>
<p className="leading-relaxed text-lg text-[#F3EFEA]/70 mb-6">
                        Your best customers notice the difference.<br/>
                        The finish, the consistency, the burn — it all adds up to quality.<br/>
                        Okla ⭐ Stona doesn’t rely on flashy labels to make our mark.<br/>
                        It moves because the quality speaks first.
                    </p>
<p className="text-sm text-[#F3EFEA]/60 italic mb-6">We can’t supply every store — and that’s the point.</p>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-[#BF6836]/20 flex items-center justify-center mt-1 flex-shrink-0">
<svg className="lucide lucide-check w-3 h-3 text-[#BF6836]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<h4 className="text-[#F3EFEA] mb-1 font-normal">Competitive Wholesale Pricing</h4>
<p className="text-sm text-[#F3EFEA]/60">Margins that work for your business</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-[#BF6836]/20 flex items-center justify-center mt-1 flex-shrink-0">
<svg className="lucide lucide-check w-3 h-3 text-[#BF6836]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<h4 className="text-[#F3EFEA] mb-1 font-normal">Consistent Supply Chain</h4>
<p className="text-sm text-[#F3EFEA]/60">Reliable delivery across Oklahoma</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-[#BF6836]/20 flex items-center justify-center mt-1 flex-shrink-0">
<svg className="lucide lucide-check w-3 h-3 text-[#BF6836]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<h4 className="text-[#F3EFEA] mb-1 font-normal">Brand Recognition</h4>
<p className="text-sm text-[#F3EFEA]/60">Customers ask for us by name</p>
</div>
</div>
</div>
<a className="inline-flex items-center gap-2 px-8 py-4 bg-[#BF6836] hover:bg-[#BF6836]/90 text-[#F3EFEA] rounded transition-all group" href="#contact">
<span className="">Request Distribution</span>
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>


<section className="py-24 md:py-32 bg-[#4A2E14]/10 relative" id="connoisseur">
<div className="max-w-6xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="">
<p className="text-sm uppercase tracking-widest text-[#C9A24F] mb-4 font-light">For The Discerning</p>
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 leading-tight" style={{fontFamily: '\'Playfair Display\', serif', fontWeight: '600'}}>
                        For Connoisseurs
                    </h2>
<p className="text-lg text-[#F3EFEA]/70 mb-6 leading-relaxed">
                        You know quality when you taste it. You appreciate the difference between rushed and refined.
                    </p>
<p className="text-base text-[#A67C52] leading-relaxed mb-8">
                        Okla ⭐ Stona isn't for everyone. It's for those who understand that the best experiences come from patience, precision, and pride in craft. Find us at select dispensaries across Oklahoma.
                    </p>
<div className="bg-[#0D0D0D] border border-[#C9A24F]/20 rounded-lg p-6 mb-8">
<h4 className="text-xl mb-4 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif', fontWeight: '600'}}>
                            What To Expect
                        </h4>
<ul className="space-y-3 text-[#F3EFEA]/70">
<li className="flex items-start gap-2">
<span className="text-[#C9A24F] mt-1">●</span>
<span>Smooth, even burn from first light to last</span>
</li>
<li className="flex items-start gap-2">
<span className="text-[#C9A24F] mt-1">●</span>
<span>Rich, full-bodied flavor profile</span>
</li>
<li className="flex items-start gap-2">
<span className="text-[#C9A24F] mt-1">●</span>
<span>Zero harshness, maximum satisfaction</span>
</li>
</ul>
</div>
<a className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-[#C9A24F] hover:bg-[#C9A24F]/10 text-[#C9A24F] rounded transition-all group" href="#contact">
<span>Find Near You</span>
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</a>
</div>
<div className="relative">
<div className="aspect-[4/5] rounded overflow-hidden">


<img alt="Buffalo character enjoying a session among lush plants" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a1252761-75fc-43fc-9184-fd3df7346c24_1600w.png"/>
</div>
<div className="absolute -top-6 -right-6 w-48 h-48 bg-[#C9A24F]/20 rounded -z-10"></div>
</div>
</div>
</div>
</section><section className="md:py-32 bg-[#4A2E14]/10 pt-24 pb-24 relative" id="craft">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<p className="text-sm uppercase tracking-widest text-[#C9A24F] mb-4 font-light">The Process</p>
<h2 className="md:text-5xl lg:text-6xl text-4xl tracking-tight mb-6" style={{fontFamily: '"Playfair Display", serif', fontWeight: '600'}}>Built Through Character</h2>
<p className="text-lg text-[#F3EFEA]/70 max-w-2xl mx-auto">
                    Every step is intentional. Every detail matters.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-[#0D0D0D] border border-[#C9A24F]/10 rounded-lg p-8 hover:border-[#C9A24F]/30 transition-all">
<div className="mb-6">
<div className="w-12 h-12 rounded-full bg-[#BF6836]/10 flex items-center justify-center mb-4">
<svg className="lucide lucide-leaf w-6 h-6 text-[#BF6836]" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<h3 className="text-2xl mb-3 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif', fontWeight: '600'}}>Precision Selection</h3>
</div>
<p className="text-[#F3EFEA]/70 leading-relaxed">
                        Hand-selected flower from Oklahoma's finest cultivators. We don't compromise on quality at any stage.
                    </p>
</div>
<div className="bg-[#0D0D0D] border border-[#C9A24F]/10 rounded-lg p-8 hover:border-[#C9A24F]/30 transition-all">
<div className="mb-6">
<div className="w-12 h-12 rounded-full bg-[#C9A24F]/10 flex items-center justify-center mb-4">
<svg className="lucide lucide-droplet w-6 h-6 text-[#C9A24F]" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
</div>
<h3 className="text-2xl mb-3 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif', fontWeight: '600'}}>Perfect Moisture</h3>
</div>
<p className="text-[#F3EFEA]/70 leading-relaxed">
                        Calibrated humidity for that smooth pull every time. No harshness. No compromise.
                    </p>
</div>
<div className="bg-[#0D0D0D] border border-[#C9A24F]/10 rounded-lg p-8 hover:border-[#C9A24F]/30 transition-all">
<div className="mb-6">
<div className="w-12 h-12 rounded-full bg-[#A67C52]/10 flex items-center justify-center mb-4">
<svg className="lucide lucide-sparkles w-6 h-6 text-[#A67C52]" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="text-2xl tracking-tight mb-3" style={{fontFamily: '"Playfair Display", serif', fontWeight: '600'}}>Hand Trimmed</h3>
</div>
<p className="leading-relaxed text-[#F3EFEA]/70" style={{}}>Hand trimmed buds that maintains shape and maximizes aroma.</p>
</div>
</div>
</div>
</section>

<section className="md:py-32 pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="relative aspect-[21/9] rounded-lg overflow-hidden">

<div className="absolute inset-0 bg-center bg-cover" style={{backgroundImage: 'url(\'provided-buffalo-image.jpg\')'}}></div>

<div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-transparent"></div>
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(60% 60% at 50% 70%, rgba(13,13,13,0.5) 0%, rgba(13,13,13,0.2) 45%, rgba(13,13,13,0) 100%)'}}></div>
<div className="flex sm:p-12 text-6xl text-center h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3f03313d-968f-4051-a60d-47104a37a08a_1600w.jpg?w=800&amp;q=80)] bg-cover z-10 pt-8 pr-8 pb-8 pl-6 relative items-end justify-center">
<div className="">
<p className="1 lg:text-5xl md:text-5xl text-3xl tracking-wide text-justify relative shadow" style={{fontFamily: '\'Playfair Display\', serif', fontWeight: '600'}}>
                            The buffalo doesn't move fast.
                        </p>
<p className="text-3xl text-[#C9A24F]">And neither do we.</p>
</div>
</div>
</div>

</div>
</section>

<section className="md:py-32 bg-[#4A2E14]/10 pt-24 pb-24 relative" id="contact">
<div className="max-w-4xl mx-auto px-6 lg:px-8">
<div className="text-center mb-12 space-y-3">
<p className="uppercase text-sm font-light text-[#C9A24F] tracking-widest">Get In Touch</p>
<h2 className="text-4xl md:text-5xl tracking-tight" style={{fontFamily: '\'Playfair Display\', serif', fontWeight: '600'}}>
                    Let's Connect
                </h2>
<p className="text-lg text-[#F3EFEA]/75 leading-relaxed max-w-2xl mx-auto" style={{textWrap: 'balance'}}>
                    Whether you're a dispensary or a connoisseur, we'd love to hear from you.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-8 mb-12">
<div className="bg-[#0D0D0D] border border-[#C9A24F]/10 rounded-lg p-8 hover:border-[#C9A24F]/30 transition-all">
<div className="w-12 h-12 rounded-full bg-[#BF6836]/10 flex items-center justify-center mb-4">
<svg className="lucide lucide-store w-6 h-6 text-[#BF6836]" data-lucide="store" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></svg>
</div>
<h3 className="text-xl mb-3 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif', fontWeight: '600'}}>Dispensary Inquiries</h3>
<p className="text-[#F3EFEA]/75 mb-4 text-base leading-relaxed" style={{textWrap: 'pretty'}}>
                        Interested in stocking Okla ⭐ Stona at your location?
                    </p>
<a className="text-[#C9A24F] hover:text-[#C9A24F]/80 transition-colors inline-flex items-center gap-2 text-sm" href="mailto:wholesale@oklastona.com">
<span>wholesale@oklastona.com</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="hover:border-[#C9A24F]/30 transition-all bg-center bg-[#0D0D0D] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/af790e39-b8d2-4fbd-9423-d86699805a22_800w.png)] bg-contain border-[#C9A24F]/10 border rounded-lg pt-8 pr-8 pb-8 pl-8">
</div></div></div></section>
    </>
  );
}
