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



// Initialize Lucide icons after DOM loads
document.addEventListener('DOMContentLoaded', function() {
lucide.createIcons();
});



      // Auto-play intro video and fade out overlay when done
      document.addEventListener('DOMContentLoaded', function() {
        const introVideo = document.getElementById('introVideo');
        const introOverlay = document.getElementById('introOverlay');

        if (introVideo && introOverlay) {
          // Try to play the video
          introVideo.play().catch(function(error) {
            console.log('Autoplay prevented:', error);
            // If autoplay fails, hide overlay immediately
            introOverlay.style.opacity = '0';
            setTimeout(function() {
              introOverlay.style.display = 'none';
            }, 1500);
          });

          // When video ends, fade out overlay
          introVideo.addEventListener('ended', function() {
            introOverlay.style.opacity = '0';
            setTimeout(function() {
              introOverlay.style.display = 'none';
            }, 1500);
          });

          // Fallback: hide overlay after 10 seconds if video doesn't end
          setTimeout(function() {
            if (introOverlay.style.display !== 'none') {
              introOverlay.style.opacity = '0';
              setTimeout(function() {
                introOverlay.style.display = 'none';
              }, 1500);
            }
          }, 10000);
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
      
<div id="introOverlay" style={{position: 'fixed', inset: '0', zIndex: '9999', transition: 'opacity 1.5s ease-out'}}>
<video autoplay="" id="introVideo" muted="" playsinline="" style={{width: '100%', height: '100%', objectFit: 'cover'}}>
<source src="https://cdn.streamable.com/video/mp4/rgjoc5.mp4" type="video/mp4"/>
</video>
</div>

<section className="relative min-h-screen emerald-gradient overflow-hidden">

<div className="absolute top-8 left-8 w-32 h-32 border-l-2 border-t-2 border-amber-600/30 z-20"></div>
<div className="absolute top-8 right-8 w-32 h-32 border-r-2 border-t-2 border-amber-600/30 z-20"></div>
<div className="absolute bottom-8 left-8 w-32 h-32 border-l-2 border-b-2 border-amber-600/30 z-20"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rotate-slow opacity-10 pointer-events-none z-0">
<svg className="w-full h-full" viewbox="0 0 400 400">
<circle cx="200" cy="200" fill="none" r="180" stroke="#D4AF37" stroke-dasharray="10 5" strokeWidth="0.5"></circle>
<circle cx="200" cy="200" fill="none" r="160" stroke="#D4AF37" stroke-dasharray="3 7" strokeWidth="0.3"></circle>
<circle cx="200" cy="200" fill="none" r="140" stroke="#D4AF37" strokeWidth="0.5"></circle>
</svg>
</div>

<div className="absolute inset-0">
<div style={{position: 'relative', width: '100%', height: '100%', overflow: 'hidden'}}>
<iframe allow="fullscreen; autoplay" allowfullscreen="" height="100%" src="https://streamable.com/e/6ufjr0?nocontrols=1&amp;autoplay=1&amp;muted=1&amp;loop=1" style={{border: 'none', width: '100%', height: '100%', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%) scale(1.5)', overflow: 'hidden', pointerEvents: 'none'}} width="100%"></iframe>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-emerald-950/70 via-emerald-950/50 to-emerald-950/80"></div>
</div>

<div className="absolute inset-0 z-15 pointer-events-none overflow-hidden">
<div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/40 rounded-full float" style={{animationDelay: '0s'}}></div>
<div className="absolute top-1/3 right-1/3 w-1 h-1 bg-amber-300/50 rounded-full float" style={{animationDelay: '0.5s'}}></div>
<div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-amber-400/30 rounded-full float" style={{animationDelay: '1s'}}></div>
<div className="absolute top-2/3 right-1/4 w-1 h-1 bg-amber-300/40 rounded-full float" style={{animationDelay: '1.5s'}}></div>
</div>

<nav className="absolute top-0 left-0 right-0 z-30 px-6 md:px-12 lg:px-20 py-6 md:py-8">
<div className="flex items-center justify-between max-w-7xl mx-auto">
<a className="relative" href="#">
<span className="serif text-xl md:text-2xl font-medium tracking-tight gold-text-gradient">
              DARMONI
            </span>
<span className="absolute -bottom-1 left-0 w-full h-px shimmer"></span>
</a>
<div className="hidden md:flex items-center gap-10">
<a className="serif text-sm tracking-wide text-amber-100/70 hover:text-amber-200 transition-colors duration-300 relative group" href="#maison">
              Maison
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-400/50 group-hover:w-full transition-all duration-300"></span>
</a>
<a className="serif text-sm tracking-wide text-amber-100/70 hover:text-amber-200 transition-colors duration-300 relative group" href="#philosophy">
              Philosophy
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-400/50 group-hover:w-full transition-all duration-300"></span>
</a>
<a className="serif text-sm tracking-wide text-amber-100/70 hover:text-amber-200 transition-colors duration-300 relative group" href="#consultation">
              Consultation
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-400/50 group-hover:w-full transition-all duration-300"></span>
</a>
</div>
<button className="md:hidden text-amber-200/80" onclick="toggleMobileMenu()">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-emerald-950 z-50 hidden flex-col items-center justify-center gap-8" id="mobileMenu">
<button className="absolute top-6 right-6 text-amber-200/80" onclick="toggleMobileMenu()">
<i className="w-6 h-6" data-lucide="x"></i>
</button>
<a className="serif text-2xl text-amber-100/90" href="#maison" onclick="toggleMobileMenu()">
          Maison
        </a>
<a className="serif text-2xl text-amber-100/90" href="#philosophy" onclick="toggleMobileMenu()">
          Philosophy
        </a>
<a className="serif text-2xl text-amber-100/90" href="#consultation" onclick="toggleMobileMenu()">
          Consultation
        </a>
</div>

<div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6 text-center">
<div className="max-w-4xl mx-auto fade-in" style={{animationDelay: '0.3s'}}>

<div className="flex items-center justify-center gap-4 mb-8">
<span className="w-16 h-px bg-gradient-to-r from-transparent to-amber-500/50"></span>
<span className="text-amber-400/60 text-2xl">✦</span>
<span className="w-16 h-px bg-gradient-to-l from-transparent to-amber-500/50"></span>
</div>
<p className="sans text-xs tracking-[0.4em] text-amber-300/60 uppercase mb-6">
            Est. MCMXLVIII
          </p>
<h1 className="serif text-4xl md:text-6xl lg:text-7xl font-light text-amber-50 tracking-tight leading-tight mb-6 md:mb-8">
<span className="block">Jewellery That Lives</span>
<span className="block italic text-amber-200/90">Through Moments</span>
</h1>
<p className="sans text-sm md:text-base font-light text-amber-100/50 max-w-xl mx-auto mb-12 md:mb-14 leading-relaxed tracking-wide">
            Symbols of unity, crafted for those who value depth and time.
          </p>
<a className="group inline-flex items-center gap-4 border border-amber-400/30 text-amber-100/90 serif text-sm tracking-widest px-10 py-4 hover:bg-amber-400/10 hover:border-amber-400/50 transition-all duration-500" href="#maison">
<span>Enter the Maison</span>
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>

<div className="flex items-center justify-center gap-4 mt-12">
<span className="w-8 h-px bg-amber-500/30"></span>
<span className="text-amber-400/40 text-sm">◆</span>
<span className="w-8 h-px bg-amber-500/30"></span>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 float">
<div className="flex flex-col items-center gap-3">
<span className="sans text-xs tracking-widest text-amber-300/40 uppercase">
              Descend
            </span>
<div className="w-px h-12 bg-gradient-to-b from-amber-400/40 to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="bg-antique py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 relative filigree-bg" id="maison">

<div className="absolute top-0 left-0 right-0 h-px art-deco-line"></div>
<div className="max-w-7xl mx-auto relative">

<div className="text-center mb-20">
<div className="decorative-divider max-w-xs mx-auto mb-6">
<span className="text-amber-600/60 text-xl">❧</span>
</div>
<p className="sans text-xs tracking-[0.3em] text-emerald-800/50 uppercase">
            Chapter I
          </p>
</div>
<div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-center">

<div className="hidden lg:flex lg:col-span-1 items-center justify-center">
<span className="serif text-sm tracking-widest text-emerald-800/30 rotate-180" style={{writingMode: 'vertical-rl'}}>
              MAISON DARMONI
            </span>
</div>

<div className="lg:col-span-5 order-2 lg:order-1">
<div className="relative vintage-frame p-4">
<div className="aspect-[3/4] overflow-hidden border-4 border-amber-700/20">
<img alt="Woman with ring in warm light" className="w-full h-full object-cover grayscale-[30%] sepia-[20%] contrast-[0.95] hover:grayscale-0 hover:sepia-0 transition-all duration-700" src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&amp;q=80"/>
</div>

<div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-amber-600/40"></div>
<div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-amber-600/40"></div>
<div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-amber-600/40"></div>
<div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-amber-600/40"></div>
</div>

<p className="serif text-xs italic text-emerald-800/40 text-center mt-4">
              The Atelier, Winter 1948
            </p>
</div>

<div className="lg:col-span-5 order-1 lg:order-2 lg:pl-8">
<h2 className="serif text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-emerald-900 mb-8 md:mb-10">
              Created to Become
              <br/>
<span className="italic text-amber-700">a Relic</span>
</h2>

<div className="w-24 h-px bg-gradient-to-r from-amber-600/60 to-transparent mb-8"></div>
<div className="space-y-6 sans text-sm md:text-base font-light text-emerald-800/80 leading-relaxed">
<p className="first-letter:text-4xl first-letter:font-serif first-letter:text-amber-700 first-letter:float-left first-letter:mr-2 first-letter:leading-none">
                Maison Darmoni was born from a belief that jewellery is not
                merely worn — it is lived. Each piece we create carries the
                weight of intention, the patience of skilled hands, and the
                quiet hope that it will witness your most profound moments.
              </p>
<p>
                We do not design for trends. We design for decades. For hands
                that will hold, for fingers that will trace the contours of
                memory. A ring from our atelier is not an accessory; it is a
                companion to your story.
              </p>
<div className="bg-emerald-900/5 border-l-2 border-amber-600/40 pl-6 py-4 mt-8">
<p className="serif text-lg md:text-xl text-emerald-900 italic">
                  "Украшение, которое становится реликвией."
                </p>
<p className="sans text-xs text-emerald-800/50 mt-2 tracking-wider">
                  — A jewel that becomes a relic
                </p>
</div>
</div>
</div>

<div className="hidden lg:flex lg:col-span-1 items-center justify-center">
<div className="w-px h-48 bg-gradient-to-b from-transparent via-amber-600/30 to-transparent"></div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-px art-deco-line"></div>
</section>

<section className="bg-emerald-forest py-24 md:py-32 lg:py-48 px-6 md:px-12 lg:px-20 relative overflow-hidden" id="philosophy">

<div className="absolute inset-0">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-800/30 rounded-full blur-3xl"></div>
</div>

<div className="absolute inset-0 opacity-5">
<div className="w-full h-full" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(212,175,55,0.5) 1px, transparent 0)', backgroundSize: '50px 50px'}}></div>
</div>
<div className="max-w-5xl mx-auto relative z-10">

<div className="text-center mb-20 md:mb-28">
<div className="inline-flex items-center gap-6 mb-8">
<span className="w-20 h-px bg-gradient-to-r from-transparent to-amber-500/40"></span>
<span className="text-amber-400/50">✦ ✦ ✦</span>
<span className="w-20 h-px bg-gradient-to-l from-transparent to-amber-500/40"></span>
</div>
<p className="sans text-xs tracking-[0.3em] text-amber-300/40 uppercase mb-4">
            Chapter II
          </p>
<h2 className="serif text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-amber-50">
            Chronicles of
            <span className="italic text-amber-300">Craft</span>
</h2>
</div>

<div className="relative">

<div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px">
<div className="w-full h-full beam-line pulse-glow"></div>
</div>

<div className="space-y-0">

<div className="relative flex items-center">
<div className="w-1/2 pr-12 text-right">
<div className="inline-block">
<span className="serif text-6xl md:text-7xl font-light text-amber-500/20">
                    I
                  </span>
</div>
</div>
<div className="absolute left-1/2 -translate-x-1/2 z-10">
<div className="w-12 h-12 rotate-45 border border-amber-500/50 bg-emerald-950 flex items-center justify-center">
<i className="w-4 h-4 text-amber-400 -rotate-45" data-lucide="sparkle"></i>
</div>
</div>
<div className="w-1/2 pl-12">
<h3 className="serif text-xl md:text-2xl text-amber-100 mb-2">
                  Spark
                </h3>
<p className="sans text-sm text-amber-100/50 font-light leading-relaxed max-w-xs">
                  An emotion, a story, a promise waiting to take form in
                  precious metal.
                </p>
</div>
</div>

<div className="h-20 md:h-28"></div>

<div className="relative flex items-center">
<div className="w-1/2 pr-12 text-right">
<h3 className="serif text-xl md:text-2xl text-amber-100 mb-2">
                  Sketch
                </h3>
<p className="sans text-sm text-amber-100/50 font-light leading-relaxed max-w-xs ml-auto">
                  Lines that translate feeling into form, drawn by patient
                  hands.
                </p>
</div>
<div className="absolute left-1/2 -translate-x-1/2 z-10">
<div className="w-12 h-12 rotate-45 border border-amber-500/50 bg-emerald-950 flex items-center justify-center">
<i className="w-4 h-4 text-amber-400 -rotate-45" data-lucide="pen-tool"></i>
</div>
</div>
<div className="w-1/2 pl-12">
<span className="serif text-6xl md:text-7xl font-light text-amber-500/20">
                  II
                </span>
</div>
</div>

<div className="h-20 md:h-28"></div>

<div className="relative flex items-center">
<div className="w-1/2 pr-12 text-right">
<span className="serif text-6xl md:text-7xl font-light text-amber-500/20">
                  III
                </span>
</div>
<div className="absolute left-1/2 -translate-x-1/2 z-10">
<div className="w-12 h-12 rotate-45 border border-amber-500/50 bg-emerald-950 flex items-center justify-center">
<i className="w-4 h-4 text-amber-400 -rotate-45" data-lucide="flame"></i>
</div>
</div>
<div className="w-1/2 pl-12">
<h3 className="serif text-xl md:text-2xl text-amber-100 mb-2">
                  Craft
                </h3>
<p className="sans text-sm text-amber-100/50 font-light leading-relaxed max-w-xs">
                  Metal, fire, stone — shaped in the quiet of the atelier.
                </p>
</div>
</div>

<div className="h-20 md:h-28"></div>

<div className="relative flex items-center">
<div className="w-1/2 pr-12 text-right">
<h3 className="serif text-xl md:text-2xl text-amber-100 mb-2">
                  Blessing
                </h3>
<p className="sans text-sm text-amber-100/50 font-light leading-relaxed max-w-xs ml-auto">
                  Final inspection, a ritual before closure. A moment of
                  reverence.
                </p>
</div>
<div className="absolute left-1/2 -translate-x-1/2 z-10">
<div className="w-12 h-12 rotate-45 border border-amber-500/50 bg-emerald-950 flex items-center justify-center">
<i className="w-4 h-4 text-amber-400 -rotate-45" data-lucide="eye"></i>
</div>
</div>
<div className="w-1/2 pl-12">
<span className="serif text-6xl md:text-7xl font-light text-amber-500/20">
                  IV
                </span>
</div>
</div>

<div className="h-20 md:h-28"></div>

<div className="relative flex items-center">
<div className="w-1/2 pr-12 text-right">
<span className="serif text-6xl md:text-7xl font-light text-amber-500/20">
                  V
                </span>
</div>
<div className="absolute left-1/2 -translate-x-1/2 z-10">
<div className="w-14 h-14 rotate-45 border-2 border-amber-400/70 bg-emerald-900 flex items-center justify-center breathe">
<i className="w-5 h-5 text-amber-300 -rotate-45" data-lucide="gem"></i>
</div>
</div>
<div className="w-1/2 pl-12">
<h3 className="serif text-xl md:text-2xl text-amber-100 mb-2">
                  Relic
                </h3>
<p className="sans text-sm text-amber-100/50 font-light leading-relaxed max-w-xs">
                  The piece leaves the atelier to live a new life on your hand.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-emerald-rich py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 relative overflow-hidden">

<div className="absolute inset-0 opacity-5">
<div className="w-full h-full" style={{backgroundImage: 'repeating-linear-gradient(45deg, #D4AF37 0px, #D4AF37 1px, transparent 1px, transparent 80px)'}}></div>
</div>
<div className="max-w-7xl mx-auto relative z-10">

<div className="text-center mb-16 md:mb-24">
<div className="inline-flex items-center gap-6 mb-6">
<span className="block w-12 h-12 border border-amber-400/30 rotate-45"></span>
</div>
<p className="sans text-xs tracking-[0.3em] text-amber-300/40 uppercase mb-4">
            Chapter III
          </p>
<h2 className="serif text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-amber-50">
            Moments in
            <span className="italic text-amber-300">Gold</span>
</h2>
</div>

<div className="grid grid-cols-12 gap-4 md:gap-6">

<div className="col-span-12 md:col-span-7 row-span-2 spotlight-card group cursor-pointer">
<div className="relative h-full min-h-80 md:min-h-[500px] overflow-hidden border border-amber-400/20">
<img alt="Ring detail" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale-[40%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/20 to-transparent"></div>

<div className="absolute top-4 left-4 w-16 h-16 border-l border-t border-amber-400/40"></div>
<div className="absolute bottom-4 right-4 w-16 h-16 border-r border-b border-amber-400/40"></div>
<div className="absolute bottom-8 left-8">
<span className="serif text-xl md:text-2xl text-amber-100 italic">
                  Velvet Quiet
                </span>
<p className="sans text-xs text-amber-200/50 mt-1 tracking-wider">
                  The Grand Collection
                </p>
</div>
</div>
</div>

<div className="col-span-6 md:col-span-5 spotlight-card group cursor-pointer">
<div className="relative h-48 md:h-60 overflow-hidden border border-amber-400/20">
<img alt="Hands with jewelry" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale-[40%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent"></div>
<span className="absolute bottom-4 left-4 serif text-sm text-amber-100 italic">
                Echo of Gold
              </span>
</div>
</div>
<div className="col-span-6 md:col-span-5 spotlight-card group cursor-pointer">
<div className="relative h-48 md:h-60 overflow-hidden border border-amber-400/20">
<img alt="Ring macro" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale-[40%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent"></div>
<span className="absolute bottom-4 left-4 serif text-sm text-amber-100 italic">
                Light &amp; Shadow
              </span>
</div>
</div>

<div className="col-span-12 md:col-span-4 spotlight-card group cursor-pointer">
<div className="relative h-48 md:h-64 overflow-hidden border border-amber-400/20">
<img alt="Fabric and ring" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale-[40%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent"></div>
<span className="absolute bottom-4 left-4 serif text-sm text-amber-100 italic">
                A Promise
              </span>
</div>
</div>
<div className="col-span-12 md:col-span-8 spotlight-card group cursor-pointer">
<div className="relative h-48 md:h-64 overflow-hidden border border-amber-400/20">
<img alt="Jewelry on velvet" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale-[40%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent"></div>
<div className="absolute top-4 right-4 w-12 h-12 border border-amber-400/30 rotate-45"></div>
<span className="absolute bottom-4 left-4 serif text-lg text-amber-100 italic">
                In the Dark
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-emerald-950 py-40 md:py-52 lg:py-64 px-6 md:px-12 lg:px-20 relative overflow-hidden">

<div className="absolute inset-12 md:inset-20 border border-amber-500/10"></div>
<div className="absolute inset-16 md:inset-28 border border-amber-500/5"></div>

<div className="absolute top-16 left-16 md:top-28 md:left-28">
<svg className="text-amber-500/30" height="60" viewbox="0 0 60 60" width="60">
<path d="M0 60 C0 30, 30 0, 60 0" fill="none" stroke="currentColor" strokeWidth="1"></path>
<circle cx="55" cy="5" fill="currentColor" r="3"></circle>
</svg>
</div>
<div className="absolute top-16 right-16 md:top-28 md:right-28 rotate-90">
<svg className="text-amber-500/30" height="60" viewbox="0 0 60 60" width="60">
<path d="M0 60 C0 30, 30 0, 60 0" fill="none" stroke="currentColor" strokeWidth="1"></path>
<circle cx="55" cy="5" fill="currentColor" r="3"></circle>
</svg>
</div>
<div className="absolute bottom-16 left-16 md:bottom-28 md:left-28 -rotate-90">
<svg className="text-amber-500/30" height="60" viewbox="0 0 60 60" width="60">
<path d="M0 60 C0 30, 30 0, 60 0" fill="none" stroke="currentColor" strokeWidth="1"></path>
<circle cx="55" cy="5" fill="currentColor" r="3"></circle>
</svg>
</div>
<div className="absolute bottom-16 right-16 md:bottom-28 md:right-28 rotate-180">
<svg className="text-amber-500/30" height="60" viewbox="0 0 60 60" width="60">
<path d="M0 60 C0 30, 30 0, 60 0" fill="none" stroke="currentColor" strokeWidth="1"></path>
<circle cx="55" cy="5" fill="currentColor" r="3"></circle>
</svg>
</div>
<div className="max-w-4xl mx-auto text-center relative z-10">

<span className="serif text-8xl md:text-9xl text-amber-500/20 leading-none">
          "
        </span>
<blockquote className="serif text-2xl md:text-4xl lg:text-5xl font-light text-amber-50 tracking-tight leading-relaxed -mt-8 md:-mt-12">
          История, которая живёт
          <br/>
<span className="text-amber-300">на вашей руке.</span>
</blockquote>
<div className="mt-10 flex items-center justify-center gap-4">
<span className="w-12 h-px bg-amber-500/40"></span>
<span className="text-amber-400/60">✦</span>
<span className="w-12 h-px bg-amber-500/40"></span>
</div>
<p className="mt-6 sans text-sm text-amber-200/40 tracking-widest uppercase">
          A story that lives on your hand
        </p>
</div>
</section>

<section className="bg-parchment py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 relative filigree-bg" id="consultation">

<div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none overflow-hidden">
<span className="serif text-[30rem] font-light tracking-tighter text-emerald-900">
          D
        </span>
</div>
<div className="max-w-4xl mx-auto relative z-10">

<div className="text-center mb-16">
<div className="inline-flex items-center gap-6 mb-6">
<span className="w-20 h-px bg-gradient-to-r from-transparent to-amber-600/40"></span>
<span className="text-amber-600/50">❧</span>
<span className="w-20 h-px bg-gradient-to-l from-transparent to-amber-600/40"></span>
</div>
<p className="sans text-xs tracking-[0.3em] text-emerald-800/50 uppercase">
            Chapter IV
          </p>
</div>

<div className="relative">

<div className="absolute -inset-4 border border-amber-600/20"></div>
<div className="absolute -inset-2 border border-amber-600/10"></div>
<div className="bg-gradient-to-br from-amber-50/80 to-amber-100/60 p-10 md:p-16 lg:p-20 border border-amber-600/30 relative">

<div className="absolute -top-3 -left-3 w-6 h-6 bg-parchment border border-amber-600/40 rotate-45"></div>
<div className="absolute -top-3 -right-3 w-6 h-6 bg-parchment border border-amber-600/40 rotate-45"></div>
<div className="absolute -bottom-3 -left-3 w-6 h-6 bg-parchment border border-amber-600/40 rotate-45"></div>
<div className="absolute -bottom-3 -right-3 w-6 h-6 bg-parchment border border-amber-600/40 rotate-45"></div>
<div className="text-center">
<h2 className="serif text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-emerald-900 mb-4">
                Your Ring
                <span className="italic text-amber-700">Chooses You</span>
</h2>
<div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent mx-auto my-8"></div>
<p className="sans text-sm md:text-base font-light text-emerald-800/70 leading-relaxed max-w-xl mx-auto mb-12">
                A consultation with Maison Darmoni is an intimate conversation —
                not a transaction. We invite you to share your story, and
                together we will find the piece that is meant to accompany your
                journey.
              </p>

<div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-14">
<div className="flex items-start gap-4 text-left p-4 bg-white/40 border border-amber-600/10">
<span className="serif text-2xl text-amber-600/60">I.</span>
<span className="sans text-sm text-emerald-800/70 font-light">
                    We listen to your story and intentions
                  </span>
</div>
<div className="flex items-start gap-4 text-left p-4 bg-white/40 border border-amber-600/10">
<span className="serif text-2xl text-amber-600/60">II.</span>
<span className="sans text-sm text-emerald-800/70 font-light">
                    We guide you through silhouettes and stones
                  </span>
</div>
<div className="flex items-start gap-4 text-left p-4 bg-white/40 border border-amber-600/10">
<span className="serif text-2xl text-amber-600/60">III.</span>
<span className="sans text-sm text-emerald-800/70 font-light">
                    We refine sizing for decades of comfort
                  </span>
</div>
<div className="flex items-start gap-4 text-left p-4 bg-white/40 border border-amber-600/10">
<span className="serif text-2xl text-amber-600/60">IV.</span>
<span className="sans text-sm text-emerald-800/70 font-light">
                    We create your eternal companion
                  </span>
</div>
</div>
<button className="group inline-flex items-center gap-4 border-2 border-emerald-900/60 text-emerald-900 serif text-sm tracking-widest px-12 py-5 hover:bg-emerald-900 hover:text-amber-50 transition-all duration-500" onclick="openModal()">
<span>Book a Private Session</span>
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-warm-parchment py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-amber-700/20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="w-8 h-8 bg-warm-parchment border border-amber-600/30 rotate-45"></div>
</div>
<div className="max-w-6xl mx-auto">

<div className="text-center mb-16">
<p className="sans text-xs tracking-[0.3em] text-emerald-800/40 uppercase mb-4">
            Chapter V
          </p>
<h2 className="serif text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-emerald-900">
            Stories of
            <span className="italic">Unity</span>
</h2>
<div className="flex items-center justify-center gap-4 mt-6">
<span className="w-16 h-px bg-amber-600/30"></span>
<span className="text-amber-600/50">◆</span>
<span className="w-16 h-px bg-amber-600/30"></span>
</div>
</div>

<div className="grid md:grid-cols-3 gap-8">

<div className="group relative">
<div className="absolute inset-0 border border-amber-600/20 translate-x-2 translate-y-2"></div>
<div className="relative bg-white/80 p-8 md:p-10 border border-amber-600/30 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
<span className="serif text-5xl text-amber-600/20 absolute top-4 right-6">
                I
              </span>
<h3 className="serif text-xl text-emerald-900 mb-4 relative">
                Their Winter Promise
              </h3>
<div className="w-12 h-px bg-amber-600/40 mb-4"></div>
<p className="sans text-sm text-emerald-800/60 font-light leading-relaxed relative">
                They came in with a story about a lost ring. They left with a
                new one that carried both memories — the old and the new, woven
                into gold.
              </p>
</div>
</div>

<div className="group relative">
<div className="absolute inset-0 border border-amber-600/20 translate-x-2 translate-y-2"></div>
<div className="relative bg-white/80 p-8 md:p-10 border border-amber-600/30 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
<span className="serif text-5xl text-amber-600/20 absolute top-4 right-6">
                II
              </span>
<h3 className="serif text-xl text-emerald-900 mb-4 relative">
                The Quiet Celebration
              </h3>
<div className="w-12 h-px bg-amber-600/40 mb-4"></div>
<p className="sans text-sm text-emerald-800/60 font-light leading-relaxed relative">
                Twenty years together, no fanfare. Just two rings redesigned
                from the original bands, now carrying the weight of two decades.
              </p>
</div>
</div>

<div className="group relative">
<div className="absolute inset-0 border border-amber-600/20 translate-x-2 translate-y-2"></div>
<div className="relative bg-white/80 p-8 md:p-10 border border-amber-600/30 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
<span className="serif text-5xl text-amber-600/20 absolute top-4 right-6">
                III
              </span>
<h3 className="serif text-xl text-emerald-900 mb-4 relative">
                A Mother's Gift
              </h3>
<div className="w-12 h-px bg-amber-600/40 mb-4"></div>
<p className="sans text-sm text-emerald-800/60 font-light leading-relaxed relative">
                She wanted something her daughter would wear every day —
                something simple, yet impossible to forget. Something that
                whispered of home.
              </p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-emerald-950 py-20 md:py-28 px-6 md:px-12 lg:px-20 relative">

<div className="absolute top-0 left-0 right-0">
<div className="h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
</div>
<div className="max-w-7xl mx-auto">

<div className="grid md:grid-cols-3 gap-12 md:gap-8 items-center">

<div className="text-center md:text-left">
<div className="inline-block relative">
<span className="serif text-2xl tracking-tight gold-text-gradient">
                DARMONI
              </span>
<span className="absolute -bottom-1 left-0 w-full h-px shimmer"></span>
</div>
<p className="sans text-xs tracking-widest text-amber-200/30 mt-3 uppercase">
              Jewellery Maison • Est. 1948
            </p>
</div>

<nav className="flex items-center justify-center gap-8 md:gap-12">
<a className="group" href="#maison">
<span className="sans text-xs tracking-widest text-amber-100/40 hover:text-amber-200/80 transition-colors uppercase">
                Maison
              </span>
</a>
<span className="text-amber-500/30">◆</span>
<a className="group" href="#philosophy">
<span className="sans text-xs tracking-widest text-amber-100/40 hover:text-amber-200/80 transition-colors uppercase">
                Philosophy
              </span>
</a>
<span className="text-amber-500/30">◆</span>
<a className="group" href="#consultation">
<span className="sans text-xs tracking-widest text-amber-100/40 hover:text-amber-200/80 transition-colors uppercase">
                Consultation
              </span>
</a>
</nav>

<div className="flex items-center justify-center md:justify-end gap-6">
<a className="w-10 h-10 border border-amber-500/20 flex items-center justify-center text-amber-400/50 hover:text-amber-300 hover:border-amber-400/40 transition-all" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 border border-amber-500/20 flex items-center justify-center text-amber-400/50 hover:text-amber-300 hover:border-amber-400/40 transition-all" href="#">
<i className="w-4 h-4" data-lucide="mail"></i>
</a>
</div>
</div>

<div className="mt-16 mb-8">
<div className="flex items-center gap-4">
<div className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-500/20"></div>
<span className="text-amber-500/30 text-sm">✦</span>
<div className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-500/20"></div>
</div>
</div>

<div className="text-center">
<p className="sans text-xs text-amber-100/20 tracking-wide">
            © MMXXIV Maison Darmoni. All rights reserved.
          </p>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden" id="consultationModal">
<div className="modal-overlay absolute inset-0" onclick="closeModal()"></div>
<div className="relative z-10 min-h-screen flex items-center justify-center p-6">
<div className="bg-parchment w-full max-w-lg relative border-2 border-amber-600/30">

<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 bg-parchment">
<span className="text-amber-600/50">❧</span>
</div>
<div className="p-10 md:p-12">
<button className="absolute top-6 right-6 text-emerald-800/40 hover:text-emerald-800 transition-colors" onclick="closeModal()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
<h3 className="serif text-2xl md:text-3xl font-light tracking-tight text-emerald-900 mb-2">
              Request a Consultation
            </h3>
<p className="sans text-sm text-emerald-800/50 font-light mb-8">
              Write to us as you would to an old friend.
            </p>
<div className="w-16 h-px bg-amber-600/40 mb-8"></div>
<form className="space-y-6">
<div>
<label className="block sans text-xs tracking-widest text-emerald-800/50 uppercase mb-2">
                  Your Name
                </label>
<input className="w-full bg-transparent border-b border-emerald-800/20 focus:border-amber-600 outline-none py-2 sans text-sm text-emerald-900 transition-colors" placeholder="Enter your name" type="text"/>
</div>
<div>
<label className="block sans text-xs tracking-widest text-emerald-800/50 uppercase mb-2">
                  Email
                </label>
<input className="w-full bg-transparent border-b border-emerald-800/20 focus:border-amber-600 outline-none py-2 sans text-sm text-emerald-900 transition-colors" placeholder="your@email.com" type="email"/>
</div>
<div>
<label className="block sans text-xs tracking-widest text-emerald-800/50 uppercase mb-2">
                  Preferred Date
                </label>
<input className="w-full bg-transparent border-b border-emerald-800/20 focus:border-amber-600 outline-none py-2 sans text-sm text-emerald-900 transition-colors" placeholder="e.g., Next week, December" type="text"/>
</div>
<div>
<label className="block sans text-xs tracking-widest text-emerald-800/50 uppercase mb-2">
                  Tell Us Your Story
                </label>
<textarea className="w-full bg-transparent border-b border-emerald-800/20 focus:border-amber-600 outline-none py-2 sans text-sm text-emerald-900 transition-colors resize-none" placeholder="What brings you to Maison Darmoni?" rows="4"></textarea>
</div>
<button className="w-full mt-4 border-2 border-emerald-900/60 text-emerald-900 serif text-sm tracking-widest px-8 py-4 hover:bg-emerald-900 hover:text-amber-50 transition-all duration-500" type="submit">
                Send Request
              </button>
</form>
</div>
</div>
</div>
</div>


    =
    

    </>
  );
}
