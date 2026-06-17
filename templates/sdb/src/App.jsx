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
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Cormorant Garamond', 'serif'],
},
colors: {
brand: {
bg: '#1a1a3e',
purple: '#6b3fa0',
gold: '#d4a853',
light: '#f5f0eb',
dark: '#0a0a1a'
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener('DOMContentLoaded', () => {
        const nav = document.querySelector('nav');
        const onScroll = () => {
          if (window.scrollY > 20) {
            nav.classList.add('bg-brand-bg/60', 'backdrop-blur-xl', 'border-white/5');
            nav.classList.remove('bg-transparent', 'border-transparent');
          } else {
            nav.classList.remove('bg-brand-bg/60', 'backdrop-blur-xl', 'border-white/5');
            nav.classList.add('bg-transparent', 'border-transparent');
          }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
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
      

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
<div className="absolute top-0 left-1/4 w-[50vw] aspect-square bg-brand-purple/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-0 right-1/4 w-[60vw] aspect-square bg-brand-gold/5 rounded-full blur-[150px]"></div>

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#f5f0eb 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-transparent bg-transparent transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 md:gap-3 shrink-0 transition-opacity hover:opacity-80" href="#">
<img alt="Soul Design Blueprint" className="h-[60px] md:h-[70px] w-auto object-contain" src="https://i.imgur.com/Jx1RxcK.png"/>
<span className="font-serif text-xl md:text-2xl tracking-tight font-medium text-brand-light whitespace-nowrap">
            Soul Design Blueprint
          </span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-light text-brand-light/70">
<a className="hover:text-brand-light transition-colors" href="#blueprint">
            What's Included
          </a>
<a className="hover:text-brand-light transition-colors" href="#how-it-works">
            How It Works
          </a>
<a className="hover:text-brand-light transition-colors" href="#reviews">
            Reviews
          </a>
<a className="hover:text-brand-light transition-colors" href="#faq">
            FAQ
          </a>
</div>
<a className="hidden md:inline-flex items-center justify-center text-xs px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-gold/50 transition-all font-light text-brand-light" href="#pricing">
          Get Started
        </a>
<button className="md:hidden text-brand-light text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">

<div className="absolute inset-0 z-0 pointer-events-none">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-lighten" loop="" muted="" playsinline="">
<source src="https://i.imgur.com/UCUkCVP.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-gradient-to-b from-brand-bg/60 via-transparent to-brand-bg"></div>
<div className="absolute inset-0 bg-brand-bg/20"></div>
</div>
<div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/20 bg-brand-gold/5 mb-8 backdrop-blur-sm">
<iconify-icon className="text-brand-gold text-xs" icon="solar:stars-linear"></iconify-icon>
<span className="text-brand-gold uppercase tracking-widest text-xs font-medium">
            Finally Decode the Blueprint You Were Born With
          </span>
</div>
<h1 className="font-serif text-5xl md:text-7xl tracking-tighter font-medium leading-tight mb-8 text-brand-light drop-shadow-lg">
          Your Soul Has a Design.
          <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light via-brand-light to-brand-light/50">
            I Reveal It.
          </span>
</h1>
<p className="font-sans text-lg md:text-xl text-brand-light/90 font-light max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-md">
          Human Design + Prisma Energy Reading woven together into a deeply
          personal Soul Blueprint with a custom podcast, spiritual body
          portrait, guided meditation, and the clarity you've been searching
          for.
        </p>
<div className="flex flex-col items-center gap-4">
<a className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-light text-brand-bg font-medium text-sm transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(245,240,235,0.2)]" href="#pricing">
            Discover Your Blueprint
            <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<span className="text-xs text-brand-light/70 font-light tracking-wide flex items-center gap-2 drop-shadow-sm">
<iconify-icon icon="solar:box-linear"></iconify-icon>
            ✦ Delivered in 5–7 days · 100% personalized to your unique energy
          </span>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce z-10">
<span className="text-[0.65rem] tracking-widest uppercase text-brand-light/70">
          Scroll
        </span>
<iconify-icon className="text-sm" icon="solar:arrow-down-linear"></iconify-icon>
</div>
</section>

<section className="py-24 px-6 relative border-t border-white/5" id="problem">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:w-1/2">
<span className="text-brand-purple uppercase tracking-widest text-xs font-medium block mb-4">
            Sound Familiar?
          </span>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight font-medium text-brand-light mb-6">
            You've Done the Work.
            <br/>
            But Something Still Feels Off.
          </h2>
<p className="font-sans text-base text-brand-light/60 font-light leading-relaxed">
            You've read the books. Tried the meditations. Maybe even pulled your
            own Human Design chart and stared at it wondering what half of it
            means. You know there's something deeper a pattern, a purpose, a
            design but no one has connected the dots in a way that actually
            lands.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

<div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center mb-6 border border-brand-purple/20 group-hover:scale-110 transition-transform">
<iconify-icon className="text-brand-purple text-xl" icon="solar:volume-cross-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl tracking-tight font-medium mb-3">
              Lost in the Noise
            </h3>
<p className="text-sm text-brand-light/60 font-light leading-relaxed">
              You've consumed so much spiritual content that nothing feels
              personal anymore. Generic readings. Cookie-cutter advice. None of
              it sounds like you.
            </p>
</div>

<div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center mb-6 border border-brand-gold/20 group-hover:scale-110 transition-transform">
<iconify-icon className="text-brand-gold text-xl" icon="solar:plug-circle-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl tracking-tight font-medium mb-3">
              Disconnected from Your Energy
            </h3>
<p className="text-sm text-brand-light/60 font-light leading-relaxed">
              You feel pulled in a hundred directions. You say yes when your
              body says no. You hustle when you should be waiting. You're living
              someone else's strategy.
            </p>
</div>

<div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform">
<iconify-icon className="text-blue-400 text-xl" icon="solar:eye-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl tracking-tight font-medium mb-3">
              Craving Real Clarity
            </h3>
<p className="text-sm text-brand-light/60 font-light leading-relaxed">
              You don't need another horoscope. You need a mirror one that
              reflects your actual energetic design and tells you exactly how to
              work with it, not against it.
            </p>
</div>

<div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mb-6 border border-red-500/20 group-hover:scale-110 transition-transform">
<iconify-icon className="text-red-400 text-xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl tracking-tight font-medium mb-3">
              Relationship Blind Spots
            </h3>
<p className="text-sm text-brand-light/60 font-light leading-relaxed">
              If you're in a partnership, you feel the friction but can't name
              it. You love each other but keep running into the same invisible
              walls.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative flex flex-col items-center text-center">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
<iconify-icon className="text-9xl scale-[3] text-brand-light" icon="solar:atom-linear"></iconify-icon>
</div>
<div className="max-w-3xl mx-auto relative z-10">
<h2 className="font-serif text-3xl md:text-5xl tracking-tight font-medium text-brand-light mb-8 leading-tight">
          What If You Had a Complete Map
          <br/>
          of Your Soul's Design?
        </h2>
<p className="font-sans text-lg text-brand-light/70 font-light leading-relaxed">
          Not a surface-level personality quiz. Not a vague astrology post. A
          full, multi-dimensional blueprint that merges ancient wisdom systems
          synthesized into something you can actually feel, hear, and use every
          single day.
          <span className="text-brand-light font-medium">
            That's exactly what I built.
          </span>
</p>
</div>
</section>

<section className="py-24 px-6 relative bg-white/[0.01] border-y border-white/5" id="blueprint">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<span className="text-brand-gold uppercase tracking-widest text-xs font-medium block mb-4">
            The Soul Design Blueprint
          </span>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight font-medium text-brand-light mb-6">
            Three Powerful Systems.
            <br/>
            One Unified Blueprint.
          </h2>
<p className="font-sans text-base text-brand-light/60 font-light max-w-2xl mx-auto leading-relaxed">
            I don't just hand you a chart and wish you luck. I run your energy
            through distinct lenses, then weave them into something no one else
            on the planet has ever received.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">

<div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center p-6">
<div className="w-24 h-24 rounded-full bg-brand-bg border border-white/10 flex items-center justify-center mb-8 relative shadow-[0_0_30px_rgba(255,255,255,0.03)]">
<div className="absolute inset-0 rounded-full border border-brand-light/5 scale-110"></div>
<iconify-icon className="text-brand-light/80 text-3xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<span className="text-brand-light/40 uppercase tracking-widest text-xs font-medium mb-2">
              Pillar 1
            </span>
<h3 className="font-serif text-2xl tracking-tight font-medium mb-2">
              Human Design Chart Analysis
            </h3>
<h4 className="text-brand-gold text-sm font-light mb-4 italic">
              Your Energetic Architecture
            </h4>
<p className="text-sm text-brand-light/60 font-light leading-relaxed">
              Your type, strategy, authority, profile, defined and undefined
              centers decoded in plain language. This is the structural
              blueprint of how you're designed to move through the world, make
              decisions, and interact with others.
            </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center p-6">
<div className="w-24 h-24 rounded-full bg-brand-bg border border-brand-purple/30 flex items-center justify-center mb-8 relative shadow-[0_0_40px_rgba(107,63,160,0.15)]">
<div className="absolute inset-0 rounded-full border border-brand-purple/10 scale-110"></div>
<iconify-icon className="text-brand-purple text-3xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<span className="text-brand-light/40 uppercase tracking-widest text-xs font-medium mb-2">
              Pillar 2
            </span>
<h3 className="font-serif text-2xl tracking-tight font-medium mb-2">
              Prisma Energy Reading
            </h3>
<h4 className="text-brand-purple text-sm font-light mb-4 italic">
              Your Soul's Frequency Signature
            </h4>
<p className="text-sm text-brand-light/60 font-light leading-relaxed">
              A deep intuitive reading based on a proprietary framework that
              maps your energetic frequency, emotional patterns, and spiritual
              gifts. This is the color and texture your chart alone can't
              capture.
            </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center p-6">
<div className="w-24 h-24 rounded-full bg-brand-bg border border-white/10 flex items-center justify-center mb-8 relative shadow-[0_0_30px_rgba(255,255,255,0.03)]">
<div className="absolute inset-0 rounded-full border border-brand-light/5 scale-110"></div>
<iconify-icon className="text-brand-light/80 text-3xl" icon="solar:cpu-linear"></iconify-icon>
</div>
<span className="text-brand-light/40 uppercase tracking-widest text-xs font-medium mb-2">
              Pillar 3
            </span>
<h3 className="font-serif text-2xl tracking-tight font-medium mb-2">
              Integrated Soul Blueprint
            </h3>
<h4 className="text-brand-light/80 text-sm font-light mb-4 italic">
              Where Ancient Meets Intelligent
            </h4>
<p className="text-sm text-brand-light/60 font-light leading-relaxed">
              I feed both your Human Design analysis and Prisma reading into an
              advanced synthesis framework that finds the hidden connections,
              recurring themes, and actionable insights between the two
              producing a unified blueprint.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="how-it-works">
<div className="max-w-4xl mx-auto">
<div className="mb-20">
<span className="text-brand-light/50 uppercase tracking-widest text-xs font-medium block mb-4">
            Your Journey
          </span>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight font-medium text-brand-light mb-6">
            From Birth Data to Soul Blueprint
            <br/>
            in 5 Simple Steps
          </h2>
</div>
<div className="relative">

<div className="absolute left-6 md:left-[2.35rem] top-4 bottom-4 w-px bg-gradient-to-b from-red-500/30 via-green-500/30 to-violet-500/30"></div>
<div className="flex flex-col gap-12">

<div className="relative flex gap-6 md:gap-10 items-start group">
<div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-brand-bg border border-red-500/30 flex items-center justify-center shrink-0 relative z-10 shadow-[0_0_20px_rgba(239,68,68,0.1)] group-hover:scale-105 transition-transform">
<span className="font-serif text-lg md:text-2xl text-red-400">
                  1
                </span>
</div>
<div className="pt-2 md:pt-6">
<h3 className="font-serif text-xl md:text-2xl tracking-tight font-medium mb-2 text-brand-light group-hover:text-red-300 transition-colors">
                  Share Your Details
                </h3>
<p className="text-sm md:text-base text-brand-light/60 font-light leading-relaxed">
                  Provide your birth date, time, and location. That's all I need
                  to pull your unique Human Design chart and begin your Prisma
                  reading.
                </p>
</div>
</div>

<div className="relative flex gap-6 md:gap-10 items-start group">
<div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-brand-bg border border-orange-500/30 flex items-center justify-center shrink-0 relative z-10 shadow-[0_0_20px_rgba(249,115,22,0.1)] group-hover:scale-105 transition-transform">
<span className="font-serif text-lg md:text-2xl text-orange-400">
                  2
                </span>
</div>
<div className="pt-2 md:pt-6">
<h3 className="font-serif text-xl md:text-2xl tracking-tight font-medium mb-2 text-brand-light group-hover:text-orange-300 transition-colors">
                  I Generate Your Chart &amp; Reading
                </h3>
<p className="text-sm md:text-base text-brand-light/60 font-light leading-relaxed">
                  Your Human Design chart is calculated and analyzed.
                  Simultaneously, your Prisma energy reading is channeled based
                  on the same birth data and energetic signature.
                </p>
</div>
</div>

<div className="relative flex gap-6 md:gap-10 items-start group">
<div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-brand-bg border border-yellow-500/30 flex items-center justify-center shrink-0 relative z-10 shadow-[0_0_20px_rgba(234,179,8,0.1)] group-hover:scale-105 transition-transform">
<span className="font-serif text-lg md:text-2xl text-yellow-400">
                  3
                </span>
</div>
<div className="pt-2 md:pt-6">
<h3 className="font-serif text-xl md:text-2xl tracking-tight font-medium mb-2 text-brand-light group-hover:text-yellow-300 transition-colors">
                  Deep Synthesis
                </h3>
<p className="text-sm md:text-base text-brand-light/60 font-light leading-relaxed">
                  Both readings are mapped through my comprehensive synthesis
                  framework, which cross-references patterns, highlights hidden
                  alignments, and produces your unified Soul Design Blueprint a
                  document unlike anything you've ever received.
                </p>
</div>
</div>

<div className="relative flex gap-6 md:gap-10 items-start group">
<div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-brand-bg border border-green-500/30 flex items-center justify-center shrink-0 relative z-10 shadow-[0_0_20px_rgba(34,197,94,0.1)] group-hover:scale-105 transition-transform">
<span className="font-serif text-lg md:text-2xl text-green-400">
                  4
                </span>
</div>
<div className="pt-2 md:pt-6">
<h3 className="font-serif text-xl md:text-2xl tracking-tight font-medium mb-2 text-brand-light group-hover:text-green-300 transition-colors">
                  Your Personalized Podcast &amp; Blueprint Video is Born
                </h3>
<p className="text-sm md:text-base text-brand-light/60 font-light leading-relaxed">
                  Your complete blueprint is transformed into a private,
                  custom-generated video &amp; podcast episode a deeply personal
                  experience narrated just for you. Listen on your commute,
                  during meditation, or anytime you need to reconnect with your
                  design.
                </p>
</div>
</div>

<div className="relative flex gap-6 md:gap-10 items-start group">
<div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-brand-bg border border-violet-500/30 flex items-center justify-center shrink-0 relative z-10 shadow-[0_0_20px_rgba(139,92,246,0.1)] group-hover:scale-105 transition-transform">
<span className="font-serif text-lg md:text-2xl text-violet-400">
                  5
                </span>
</div>
<div className="pt-2 md:pt-6">
<h3 className="font-serif text-xl md:text-2xl tracking-tight font-medium mb-2 text-brand-light group-hover:text-violet-300 transition-colors">
                  Your Full Bundle is Delivered
                </h3>
<p className="text-sm md:text-base text-brand-light/60 font-light leading-relaxed">
                  You receive everything: your Soul Design Blueprint document,
                  your private podcast, your spiritual body portrait with
                  activated chakra colors, a custom guided meditation, and
                  integration prompts to start living in alignment immediately.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative bg-white/[0.01] border-t border-white/5" id="pricing">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-stretch justify-center">

<div className="flex-1 max-w-lg bg-brand-bg border border-white/10 rounded-3xl p-8 relative flex flex-col overflow-hidden group hover:border-white/20 transition-colors">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"></div>
<div className="relative z-10">
<span className="text-brand-light/50 uppercase tracking-widest text-xs font-medium block mb-4">
              For You
            </span>
<h3 className="font-serif text-3xl tracking-tight font-medium text-brand-light mb-2">
              The Soul Design Blueprint
            </h3>
<p className="text-sm text-brand-light/60 font-light mb-8 h-10">
              Everything you need to understand, embody, and live your unique
              energetic design.
            </p>
<div className="mb-8 pb-8 border-b border-white/10">
<div className="flex items-end gap-3 mb-1">
<span className="text-sm text-brand-light/40 line-through decoration-red-500/50">
                  $444
                </span>
<span className="font-serif text-5xl tracking-tighter text-brand-light">
                  $222
                </span>
</div>
<span className="text-brand-gold text-xs font-medium uppercase tracking-widest">
                Introductory Launch Price
              </span>
</div>
<div className="space-y-4 mb-10 flex-grow">
<div className="flex items-start gap-3">
<iconify-icon className="text-brand-light/40 text-lg mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-brand-light/80 font-light leading-relaxed">
<strong className="font-medium text-brand-light">
                    Full Human Design Chart Analysis
                  </strong>
                  Your type, strategy, authority, profile, channels, and gates
                  explained in depth
                </span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-brand-light/40 text-lg mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-brand-light/80 font-light leading-relaxed">
<strong className="font-medium text-brand-light">
                    Complete Prisma Energy Reading
                  </strong>
                  Your frequency signature, emotional patterns, soul gifts, and
                  growth edges
                </span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-brand-light/40 text-lg mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-brand-light/80 font-light leading-relaxed">
<strong className="font-medium text-brand-light">
                    Integrated Soul Blueprint
                  </strong>
                  A unified document weaving both systems into one actionable,
                  personalized roadmap
                </span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-brand-light/40 text-lg mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-brand-light/80 font-light leading-relaxed">
<strong className="font-medium text-brand-light">
                    Private Soul Design Podcast
                  </strong>
                  ~20-30 minute audio deep-dive into your blueprint, created
                  exclusively for you
                </span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-brand-light/40 text-lg mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-brand-light/80 font-light leading-relaxed">
<strong className="font-medium text-brand-light">
                    Spiritual Body Portrait
                  </strong>
                  Custom digital image of your energetic body with chakras
                  illuminated
                </span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-brand-light/40 text-lg mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-brand-light/80 font-light leading-relaxed">
<strong className="font-medium text-brand-light">
                    Guided Alignment Meditation
                  </strong>
                  Personalized around your specific energy centers
                </span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-brand-light/40 text-lg mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-brand-light/80 font-light leading-relaxed">
<strong className="font-medium text-brand-light">
                    Integration Guide
                  </strong>
                  Journal prompts, daily practices, and decision frameworks
                </span>
</div>
</div>
<a className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-medium text-brand-light mt-auto" href="#">
              Get My Soul Blueprint
              <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<p className="text-center text-xs text-brand-light/40 font-light mt-4">
              Delivered digitally within 5–7 days · Lifetime access
            </p>
</div>
</div>

<div className="flex-1 max-w-lg bg-[#1f1938] border border-brand-purple/30 rounded-3xl p-8 relative flex flex-col overflow-hidden shadow-[0_0_50px_rgba(107,63,160,0.1)] group hover:border-brand-purple/50 transition-colors">

<div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
<div className="absolute top-4 right-4 bg-brand-purple/20 text-brand-purple border border-brand-purple/30 text-[0.65rem] uppercase tracking-widest px-2 py-1 rounded-full font-medium">
            Best Value
          </div>
<div className="relative z-10">
<span className="text-brand-purple uppercase tracking-widest text-xs font-medium block mb-4">
              For Partners
            </span>
<h3 className="font-serif text-3xl tracking-tight font-medium text-brand-light mb-2">
              Couples Edition
            </h3>
<p className="text-sm text-brand-light/60 font-light mb-8 h-10">
              Two complete individual blueprints + a powerful relationship
              synthesis revealing how your designs interact.
            </p>
<div className="mb-8 pb-8 border-b border-white/10">
<div className="flex items-end gap-3 mb-1">
<span className="text-sm text-brand-light/40 line-through decoration-red-500/50">
                  $555
                </span>
<span className="font-serif text-5xl tracking-tighter text-brand-light">
                  $333
                </span>
</div>
<span className="text-green-400 text-xs font-medium uppercase tracking-widest">
                Save $222
              </span>
</div>
<p className="text-xs text-brand-light/50 font-light leading-relaxed mb-6 italic">
              Every relationship has an invisible energetic dynamic. I
              synthesize both blueprints together to map your relationship's
              energetic landscape.
            </p>
<div className="space-y-4 mb-10 flex-grow">
<div className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
<iconify-icon className="text-brand-purple text-xl shrink-0" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<span className="text-sm text-brand-light/90 font-light leading-relaxed">
<strong className="font-medium text-brand-light">
                    2x Full Individual Blueprints
                  </strong>
                  Everything in the solo package for each partner
                </span>
</div>
<div className="pt-2">
<span className="text-xs uppercase tracking-widest text-brand-light/40 font-medium">
                  Couples Bonus:
                </span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-brand-purple/70 text-lg mt-0.5 shrink-0" icon="solar:star-fall-linear"></iconify-icon>
<span className="text-sm text-brand-light/80 font-light leading-relaxed">
<strong className="font-medium text-brand-light">
                    Couples Soul Design Report
                  </strong>
                  Electromagnetic connections, compromise areas, communication
                  styles mapped
                </span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-brand-purple/70 text-lg mt-0.5 shrink-0" icon="solar:star-fall-linear"></iconify-icon>
<span className="text-sm text-brand-light/80 font-light leading-relaxed">
<strong className="font-medium text-brand-light">
                    Couples Podcast Episode
                  </strong>
                  Dedicated relationship-focused episode for both to listen
                  together
                </span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-brand-purple/70 text-lg mt-0.5 shrink-0" icon="solar:star-fall-linear"></iconify-icon>
<span className="text-sm text-brand-light/80 font-light leading-relaxed">
<strong className="font-medium text-brand-light">
                    Relationship Watch List
                  </strong>
                  Specific patterns/triggers to be aware of and navigation
                  strategies
                </span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-brand-purple/70 text-lg mt-0.5 shrink-0" icon="solar:star-fall-linear"></iconify-icon>
<span className="text-sm text-brand-light/80 font-light leading-relaxed">
<strong className="font-medium text-brand-light">
                    Couples Integration Ritual
                  </strong>
                  Shared practice to deepen alignment and intimacy
                </span>
</div>
</div>
<a className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-brand-light text-brand-bg hover:bg-brand-gold transition-colors text-sm font-medium mt-auto" href="#">
              Get Our Couples Blueprint
              <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<p className="text-center text-xs text-brand-light/40 font-light mt-4">
              Delivered within 7–10 days · Lifetime access
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">
<div className="max-w-5xl mx-auto text-center">
<span className="text-brand-light/50 uppercase tracking-widest text-xs font-medium block mb-4">
          See What's Possible
        </span>
<h2 className="font-serif text-3xl md:text-5xl tracking-tight font-medium text-brand-light mb-6">
          A Glimpse Inside Your Blueprint
        </h2>
<p className="font-sans text-base text-brand-light/60 font-light max-w-2xl mx-auto leading-relaxed mb-16">
          Every Soul Design Blueprint is one of a kind. Here's a taste of what
          yours could look and sound like.
        </p>

<div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl md:rounded-[2.5rem] bg-white/[0.02] border border-white/5 overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-brand-gold/5 opacity-50"></div>

<div className="relative z-10 w-full max-w-md bg-brand-bg/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-brand-purple/20 flex items-center justify-center mb-4 border border-brand-purple/30">
<iconify-icon className="text-brand-light text-2xl translate-x-0.5" icon="solar:play-linear"></iconify-icon>
</div>
<div className="text-sm font-medium text-brand-light mb-1">
              Your Soul Design Podcast
            </div>

<div className="w-full flex items-center gap-3 text-[0.65rem] text-brand-light/40 font-mono">
<span>04:12</span>
<div className="flex-grow h-1 bg-white/10 rounded-full overflow-hidden">
<div className="w-1/3 h-full bg-gradient-to-r from-brand-purple to-brand-gold rounded-full"></div>
</div>
<span>24:00</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative border-t border-white/5 bg-white/[0.01]">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<span className="text-brand-light/50 uppercase tracking-widest text-xs font-medium block mb-4">
            Your Guide
          </span>
<h2 className="font-serif text-3xl md:text-5xl tracking-tight font-medium text-brand-light">
            Built by Someone Who Couldn't
            <br/>
            Stop Asking "What If?"
          </h2>
</div>
<div className="flex flex-col md:flex-row gap-8 items-center justify-center max-w-4xl mx-auto mb-16">
<div className="w-32 h-32 rounded-3xl bg-white/5 border border-white/10 shrink-0 flex items-center justify-center overflow-hidden">
<img alt="Danielle" className="w-full h-full object-cover" src="https://media.licdn.com/dms/image/v2/D4D03AQFJ8sq9AUOmuQ/profile-displayphoto-shrink_200_200/B4DZbA3HxxHEAY-/0/1746992397953?e=2147483647&amp;v=beta&amp;t=RC2of_JNKA-8gENvuGxliOZb1nGas2x41NOyx1nlOXI"/>
</div>
<div className="text-center md:text-left">
<h3 className="font-serif text-3xl tracking-tight font-medium mb-1">
              Danielle
            </h3>
<p className="text-brand-light/50 text-xs uppercase tracking-widest mb-4">
              Human Design Analyst, Prisma Reader &amp; Synthesis Architect
            </p>
<p className="text-sm text-brand-light/70 font-light leading-relaxed">
              I developed my Prisma reading methodology after years of studying
              energy work and frequency-based modalities. My readings go beyond
              the chart they capture the feeling, the frequency, and the
              soul-level story that makes you you. When I combined Prisma with
              Human Design and my unique synthesis framework, the results were
              beyond anything either system could produce alone.
            </p>
</div>
</div>
<div className="p-8 rounded-2xl bg-brand-light/5 border border-brand-light/10 text-center max-w-3xl mx-auto">
<p className="font-serif text-xl md:text-2xl text-brand-light font-medium leading-relaxed italic">
            "I built the Soul Design Blueprint because I believe everyone
            deserves to understand the energy they were born with not in vague,
            generic terms, but in vivid, actionable detail. This is personal.
            This is powerful. And I pour everything I have into every single
            blueprint I create."
          </p>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="reviews">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<span className="text-brand-gold uppercase tracking-widest text-xs font-medium block mb-4">
            What People Are Saying
          </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col">
<div className="flex gap-1 mb-6">
<iconify-icon className="text-brand-gold text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-brand-gold text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-brand-gold text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-brand-gold text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-brand-gold text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-brand-light/80 font-light leading-relaxed mb-6 flex-grow">
              "I've had Human Design readings before, but nothing like this. The
              way the Prisma reading filled in the gaps and then the deep
              synthesis wove it all together I literally cried listening to my
              podcast. It was like someone finally saw me."
            </p>
<div className="text-xs font-medium text-brand-light/50 tracking-wide uppercase">
              Jonathan, Austin
            </div>
</div>

<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col">
<div className="flex gap-1 mb-6">
<iconify-icon className="text-brand-gold text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-brand-gold text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-brand-gold text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-brand-gold text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-brand-gold text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-brand-light/80 font-light leading-relaxed mb-6 flex-grow">
              "My partner and I did the Couples Edition and it was a
              game-changer. We finally understood why we kept having the same
              argument. The relationship watch list alone was worth every
              penny."
            </p>
<div className="text-xs font-medium text-brand-light/50 tracking-wide uppercase">
              Rebecca, Austin
            </div>
</div>

<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col">
<div className="flex gap-1 mb-6">
<iconify-icon className="text-brand-gold text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-brand-gold text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-brand-gold text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-brand-gold text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-brand-gold text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-brand-light/80 font-light leading-relaxed mb-6 flex-grow">
              "The spiritual body portrait is now my phone wallpaper. Every time
              I see it, I remember who I actually am underneath all the noise.
              This is the most meaningful thing I've ever invested in for
              myself."
            </p>
<div className="text-xs font-medium text-brand-light/50 tracking-wide uppercase">
              Sara, Austin
            </div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative border-t border-white/5" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="font-serif text-3xl md:text-5xl tracking-tight font-medium text-brand-light mb-12 text-center">
          Questions? I've Got Answers.
        </h2>
<div className="space-y-2">

<details className="group bg-white/[0.01] border border-white/5 rounded-2xl transition-all duration-300 open:bg-white/[0.03]">
<summary className="flex justify-between items-center font-sans text-base p-6 cursor-pointer list-none text-brand-light hover:text-brand-gold transition-colors font-medium">
              What do I need to get started?
              <span className="transition-transform duration-300 group-open:rotate-180 text-brand-light/50">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-brand-light/60 text-sm font-light leading-relaxed">
              Just your birth date, birth time (as exact as possible), and birth
              location. If you're ordering the Couples Edition, I'll need this
              for both partners.
            </div>
</details>

<details className="group bg-white/[0.01] border border-white/5 rounded-2xl transition-all duration-300 open:bg-white/[0.03]">
<summary className="flex justify-between items-center font-sans text-base p-6 cursor-pointer list-none text-brand-light hover:text-brand-gold transition-colors font-medium">
              How accurate is the synthesis process?
              <span className="transition-transform duration-300 group-open:rotate-180 text-brand-light/50">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-brand-light/60 text-sm font-light leading-relaxed">
              The synthesis doesn't invent anything it analyzes the patterns,
              correlations, and connections between your Human Design chart and
              Prisma reading. Think of it as a comprehensive analytical
              framework that can see across both systems simultaneously and
              highlight what matters most. Every blueprint is then carefully
              reviewed for quality and coherence.
            </div>
</details>

<details className="group bg-white/[0.01] border border-white/5 rounded-2xl transition-all duration-300 open:bg-white/[0.03]">
<summary className="flex justify-between items-center font-sans text-base p-6 cursor-pointer list-none text-brand-light hover:text-brand-gold transition-colors font-medium">
              What if I don't know my exact birth time?
              <span className="transition-transform duration-300 group-open:rotate-180 text-brand-light/50">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-brand-light/60 text-sm font-light leading-relaxed">
              Birth time matters most for your Human Design chart. If you're
              unsure, I recommend checking your birth certificate. If you only
              have an approximate time, I can still work with that I'll note any
              areas where timing could shift the reading.
            </div>
</details>

<details className="group bg-white/[0.01] border border-white/5 rounded-2xl transition-all duration-300 open:bg-white/[0.03]">
<summary className="flex justify-between items-center font-sans text-base p-6 cursor-pointer list-none text-brand-light hover:text-brand-gold transition-colors font-medium">
              How long until I receive my blueprint?
              <span className="transition-transform duration-300 group-open:rotate-180 text-brand-light/50">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-brand-light/60 text-sm font-light leading-relaxed">
              Individual blueprints are delivered within 5–7 days. Couples
              blueprints take 7–10 days since they include additional synthesis
              work.
            </div>
</details>

<details className="group bg-white/[0.01] border border-white/5 rounded-2xl transition-all duration-300 open:bg-white/[0.03]">
<summary className="flex justify-between items-center font-sans text-base p-6 cursor-pointer list-none text-brand-light hover:text-brand-gold transition-colors font-medium">
              What format does everything come in?
              <span className="transition-transform duration-300 group-open:rotate-180 text-brand-light/50">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-brand-light/60 text-sm font-light leading-relaxed">
              Your blueprint document is delivered as a beautifully designed
              PDF. Your podcast is an MP3 audio file. Your spiritual body
              portrait is a high-resolution digital image. Your meditation is an
              audio file. Everything is delivered digitally via email with
              lifetime access.
            </div>
</details>

<details className="group bg-white/[0.01] border border-white/5 rounded-2xl transition-all duration-300 open:bg-white/[0.03]">
<summary className="flex justify-between items-center font-sans text-base p-6 cursor-pointer list-none text-brand-light hover:text-brand-gold transition-colors font-medium">
              Is this religious?
              <span className="transition-transform duration-300 group-open:rotate-180 text-brand-light/50">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-brand-light/60 text-sm font-light leading-relaxed">
              No. The Soul Design Blueprint draws from Human Design, energy
              work, and advanced synthesis frameworks. It's spiritual but not
              affiliated with any religion. People of all faiths and no faith
              find deep value in understanding their energetic design.
            </div>
</details>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden border-t border-white/5">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] aspect-square bg-brand-purple/20 rounded-full blur-[100px] pointer-events-none z-0"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="font-serif text-4xl md:text-6xl tracking-tighter font-medium text-brand-light mb-8 leading-tight">
          Your Soul Already Knows.
          <br/>
          It's Time Your Mind Caught Up.
        </h2>
<p className="font-sans text-base md:text-lg text-brand-light/70 font-light max-w-2xl mx-auto leading-relaxed mb-12">
          You weren't designed to live someone else's life. You weren't designed
          to make decisions that drain you, stay in patterns that don't serve
          you, or wonder why you feel out of alignment. Your design is waiting.
          Let me reveal it.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 hover:border-brand-gold/50 transition-all font-medium text-sm flex items-center justify-center gap-2" href="#pricing">
<span className="text-brand-light/50 line-through text-xs mr-1">
              $444
            </span>
            Individual $222
            <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-light text-brand-bg hover:bg-brand-gold transition-colors font-medium text-sm flex items-center justify-center gap-2" href="#pricing">
<span className="text-brand-bg/50 line-through text-xs mr-1">$555</span>
            Couples $333
            <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="py-10 px-6 border-t border-white/5 bg-brand-bg relative z-10">
<div className="max-w-7xl mx-auto flex flex-col gap-10">
<div className="flex flex-col xl:flex-row items-center justify-between gap-8">
<div className="flex flex-col md:flex-row items-center gap-4">
<a className="flex flex-col md:flex-row items-center gap-2 md:gap-4 shrink-0" href="#">
<img alt="Soul Design Blueprint" className="h-32 md:h-40 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" src="https://i.imgur.com/Jx1RxcK.png"/>
<span className="font-serif text-3xl md:text-4xl tracking-tight font-medium text-brand-light whitespace-nowrap mt-2 md:mt-0">
                Soul Design Blueprint
              </span>
</a>
</div>
<div className="flex items-center gap-6 text-brand-light/50 text-xl">
<a className="hover:text-brand-light transition-colors" href="#">
<iconify-icon icon="solar:camera-linear"></iconify-icon>
</a>
<a className="hover:text-brand-light transition-colors" href="#">
<iconify-icon icon="solar:videocamera-record-linear"></iconify-icon>
</a>
<a className="hover:text-brand-light transition-colors" href="#">
<iconify-icon icon="solar:play-stream-linear"></iconify-icon>
</a>
</div>
<div className="flex flex-wrap justify-center items-center gap-6 text-xs text-brand-light/40 font-light">
<a className="hover:text-brand-light transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-brand-light transition-colors" href="#">
              Terms of Service
            </a>
</div>
</div>
<div className="text-center w-full">
<span className="text-brand-light/30 text-xs">
            © 2025 Soul Design Blueprint. All rights reserved.
          </span>
</div>
</div>
</footer>


    </>
  );
}
