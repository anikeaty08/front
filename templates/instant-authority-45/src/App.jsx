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
navy: '#0A1020',
brand: {
light: '#bee8ff',
mid: '#3ea1d8',
dark: '#036194',
},
gold: '#E6B325',
subtext: '#B0B7C3'
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
animation: {
'blob': 'blob 7s infinite',
'scroll': 'scroll 20s linear infinite',
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



                    const videoCards = [1,2,3,4,5,6,1,2,3,4,5,6]; // Simulating multiple items
                    videoCards.forEach(i => {
                        document.write(`
                            <div class="flex-shrink-0 w-32 md:w-48 video-card rounded-xl bg-gray-800/50 border border-white/10 relative overflow-hidden group hover:border-brand-mid/50 transition-colors cursor-pointer">
                                <div class="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
                                    <iconify-icon icon="solar:play-circle-linear" class="text-4xl text-white opacity-80 group-hover:scale-110 transition-transform"></iconify-icon>
                                </div>
                                <div class="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                                    <p class="text-xs text-white font-medium">Client Result #${i}</p>
                                    <p class="text-[10px] text-gray-400">"Incredible ROI..."</p>
                                </div>
                            </div>
                        `);
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-dark rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
<div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-mid rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-brand-light rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob animation-delay-4000"></div>
</div>

<header className="fixed top-0 w-full z-50 glass border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-gold text-xl" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-xs font-medium tracking-wide text-white/90">100% Money-Back Guarantee</span>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-subtext hidden sm:block">Offer Ends Soon:</span>
<div className="flex gap-1 text-xs font-mono text-gold bg-gold/10 px-2 py-1 rounded border border-gold/20">
<span>00</span>:<span>47</span>:<span>12</span>
</div>
</div>
</div>
</header>

<section className="relative z-10 pt-32 pb-20 px-4 text-center overflow-hidden">
<div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-mid/30 bg-brand-dark/10 backdrop-blur-md mx-auto mb-4">
<div className="w-1.5 h-1.5 rounded-full bg-brand-mid animate-pulse"></div>
<span className="text-xs font-medium text-brand-light tracking-wide uppercase">Accepting New Clients</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1]">
                Instant Authority Within <br/>
<span className="text-gradient-gold">48 Hours</span>
</h1>
<p className="text-lg md:text-xl text-subtext font-light max-w-2xl mx-auto leading-relaxed">
                Get featured on <span className="text-white font-medium">USA News, NY Weekly, Tech Bullion</span> and more. 
                Establish immediate trust, crush objections, and dominate your niche.
            </p>
<div className="pt-8 pb-12">
<button className="group relative px-8 py-4 bg-white text-navy font-semibold rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
<span className="relative flex items-center gap-2">
                        Get Featured Now
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
<p className="mt-4 text-xs text-subtext flex items-center justify-center gap-1">
<iconify-icon className="text-gold" icon="solar:star-circle-linear"></iconify-icon>
                    Rated 4.9/5 by 500+ Agencies
                </p>
</div>
</div>

<div className="mt-10 max-w-7xl mx-auto relative marquee-mask">
<div className="flex gap-4 animate-scroll w-[200%]">



</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-navy/50 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-4 text-center">
<p className="text-xs font-medium text-subtext tracking-widest uppercase mb-6">Trusted by 10,000+ Business Owners Worldwide</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-2xl font-serif font-bold tracking-tight text-white">Forbes</span>
<span className="text-2xl font-sans font-black tracking-tighter text-white">USA NEWS</span>
<span className="text-2xl font-serif italic font-semibold text-white">NY Weekly</span>
<span className="text-xl font-mono font-bold text-white tracking-widest">TECHBULLION</span>
<span className="text-2xl font-serif font-bold text-white">Medium</span>
</div>
</div>
</section>

<section className="py-24 px-4 relative z-10">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 text-brand-mid text-xs font-semibold tracking-wider uppercase">
<iconify-icon icon="solar:danger-triangle-linear"></iconify-icon>
                    The Problem
                </div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
                    In 2026, Being "Good" Isn’t Enough. You Must Be <span className="text-gradient">"The Answer."</span>
</h2>
<div className="space-y-4 text-subtext font-light text-base md:text-lg leading-relaxed">
<p>Traditional marketing is saturated. With 80% of consumers now relying on AI-generated answers for purchase decisions, appearing in "ground truth" news sources is the only way to remain visible.</p>
<p>If AI assistants like ChatGPT don't find your brand in reputable news archives, your business effectively doesn't exist to modern searchers.</p>
</div>
</div>

<div className="relative glass-card rounded-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500">
<div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-dark rounded-full filter blur-[60px] opacity-40"></div>
<div className="space-y-4">

<div className="bg-navy/80 rounded-lg p-4 border border-white/5">
<div className="flex gap-2 mb-2">
<div className="w-3 h-3 rounded-full bg-red-500/20"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20"></div>
</div>
<div className="h-2 w-1/3 bg-white/10 rounded mb-4"></div>
<div className="space-y-2">
<div className="h-2 w-full bg-white/5 rounded"></div>
<div className="h-2 w-5/6 bg-white/5 rounded"></div>
<div className="h-2 w-4/6 bg-white/5 rounded"></div>
</div>
</div>
<div className="flex items-center justify-center py-2">
<iconify-icon className="text-subtext text-xl animate-bounce" icon="solar:arrow-down-linear"></iconify-icon>
</div>

<div className="bg-gradient-to-r from-brand-dark/20 to-brand-mid/20 rounded-lg p-4 border border-brand-mid/30 relative overflow-hidden">
<div className="absolute inset-0 bg-brand-mid/5 animate-pulse-slow"></div>
<div className="relative z-10 flex items-start gap-4">
<div className="mt-1 p-2 bg-brand-mid/20 rounded-md text-brand-light">
<iconify-icon className="text-xl" icon="solar:verified-check-bold"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-white">Authority Established</h4>
<p className="text-xs text-brand-light mt-1">Brand verified in trusted news archives.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-navy relative border-t border-white/5">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center mb-16 max-w-3xl mx-auto">
<span className="text-brand-mid text-xs font-semibold tracking-wider uppercase">Phase #1: Seeding the Authority Baseline</span>
<h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-white">
                    A Professional Editorial Service Managed From Concept → Draft → <span className="text-brand-light">Guaranteed Publishing.</span>
</h2>
<p className="mt-4 text-subtext">(No More Random Press Release BS)</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card p-6 rounded-xl hover:border-brand-mid/40 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-mid/20 transition-colors">
<iconify-icon className="text-2xl text-white group-hover:text-brand-light" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Fact-Based Article Creation</h3>
<p className="text-sm text-subtext leading-relaxed">Our team writes a 600–1,000 word article highlighting your specific expertise and unique brand journey.</p>
</div>

<div className="glass-card p-6 rounded-xl hover:border-brand-mid/40 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-mid/20 transition-colors">
<iconify-icon className="text-2xl text-white group-hover:text-brand-light" icon="solar:global-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Strategic Media Distribution</h3>
<p className="text-sm text-subtext leading-relaxed">Publication on high-authority news platforms tailored to your specific industry niche.</p>
</div>

<div className="glass-card p-6 rounded-xl hover:border-brand-mid/40 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-mid/20 transition-colors">
<iconify-icon className="text-2xl text-white group-hover:text-brand-light" icon="solar:link-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Search Connectivity</h3>
<p className="text-sm text-subtext leading-relaxed">High Domain Authority (DA) backlinks that provide long-term search engine positioning for your primary website.</p>
</div>

<div className="glass-card p-6 rounded-xl hover:border-brand-mid/40 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-mid/20 transition-colors">
<iconify-icon className="text-2xl text-white group-hover:text-brand-light" icon="solar:medal-star-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Visual Trust Signals</h3>
<p className="text-sm text-subtext leading-relaxed">A custom "As Featured In" banner to enhance trust on your landing pages and social profiles.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-4">
<div className="max-w-4xl mx-auto bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl p-1 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent blur-sm"></div>
<div className="bg-navy rounded-xl p-8 md:p-12 relative z-10">
<div className="text-center mb-10">
<h3 className="text-2xl md:text-3xl font-semibold text-white">The 2026 Bonus Stack</h3>
<p className="text-subtext mt-2">Everything you need to leverage your new authority.</p>
</div>
<div className="space-y-4 mb-10">

<div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/5">
<iconify-icon className="text-gold text-2xl mt-1" icon="solar:gift-linear"></iconify-icon>
<div>
<h4 className="font-semibold text-white text-lg">Bonus 1: The Viral Visibility Framework</h4>
<p className="text-sm text-subtext">Strategy for maximizing article reach.</p>
</div>
</div>

<div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/5">
<iconify-icon className="text-gold text-2xl mt-1" icon="solar:wad-of-money-linear"></iconify-icon>
<div>
<h4 className="font-semibold text-white text-lg">Bonus 2: PR to Revenue Roadmap</h4>
<p className="text-sm text-subtext">Converting news mentions into high-ticket client acquisitions.</p>
</div>
</div>

<div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/5">
<iconify-icon className="text-gold text-2xl mt-1" icon="solar:user-circle-linear"></iconify-icon>
<div>
<h4 className="font-semibold text-white text-lg">Bonus 3: Done-For-You AI Drafting Access</h4>
<p className="text-sm text-subtext">Full access to our proprietary PR Agents for continuous future pitches.</p>
</div>
</div>
</div>
<div className="text-center border-t border-white/10 pt-8">
<p className="text-subtext mb-2 text-sm">Total Value: <span className="line-through opacity-50">$497</span></p>
<div className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Today Only <span className="text-gold">$89</span>
</div>
<a className="inline-block w-full md:w-auto px-10 py-4 bg-gold hover:bg-yellow-400 text-navy font-bold rounded-lg transition-colors shadow-lg shadow-gold/20" href="#checkout">
                        Claim Your PR Package
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-navy relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4">
<div className="flex items-center justify-center gap-2 mb-12">
<iconify-icon className="text-[#00b67a] text-3xl" icon="solar:star-bold"></iconify-icon>
<span className="text-2xl font-bold text-white">Trustpilot</span>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-card p-6 rounded-xl">
<div className="flex gap-1 text-[#00b67a] mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<h4 className="text-white font-semibold mb-2">"Published in 6 days"</h4>
<p className="text-sm text-subtext">"I was skeptical, but the team delivered. My article was live on USA News within a week. The logo looks great on my site."</p>
<p className="text-xs text-subtext mt-4 font-medium opacity-60">Sarah J. - Marketing Coach</p>
</div>

<div className="glass-card p-6 rounded-xl">
<div className="flex gap-1 text-[#00b67a] mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<h4 className="text-white font-semibold mb-2">"Doubled my bookings"</h4>
<p className="text-sm text-subtext">"Used the 'As Seen On' banner on my landing page and conversion rates jumped instantly. ROI is insane."</p>
<p className="text-xs text-subtext mt-4 font-medium opacity-60">Mike T. - Real Estate Agent</p>
</div>

<div className="glass-card p-6 rounded-xl">
<div className="flex gap-1 text-[#00b67a] mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<h4 className="text-white font-semibold mb-2">"Fast and Professional"</h4>
<p className="text-sm text-subtext">"The writing was surprisingly good. I only made one small edit. Very hands-off experience."</p>
<p className="text-xs text-subtext mt-4 font-medium opacity-60">Elena R. - Consultant</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-navy/50" id="checkout">
<div className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
<div className="bg-gradient-to-r from-brand-dark to-brand-mid p-6">
<h2 className="text-xl font-semibold text-white flex items-center gap-2">
<iconify-icon icon="solar:cart-large-minimalistic-linear"></iconify-icon>
                    Review Your Order Summary
                </h2>
</div>
<div className="p-6 md:p-8 space-y-6">

<div className="flex justify-between items-center pb-6 border-b border-white/10">
<div>
<h3 className="text-white font-medium">One Top-Tier Article Written &amp; Featured</h3>
<p className="text-xs text-subtext mt-1">Includes all bonuses &amp; distribution.</p>
</div>
<div className="text-right">
<span className="block text-white font-bold text-xl">$89.90</span>
</div>
</div>

<div className="bg-brand-mid/10 border-2 border-dashed border-brand-mid/30 rounded-lg p-4 relative">
<div className="absolute -top-3 left-4 bg-gold text-navy text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">Special Offer</div>
<label className="flex items-start gap-4 cursor-pointer custom-checkbox">
<div className="relative flex items-center">
<input className="peer sr-only" id="bump-offer" type="checkbox"/>
<div className="w-6 h-6 border-2 border-white/20 rounded bg-navy transition-all flex items-center justify-center">
<svg className="hidden w-4 h-4 text-navy pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</div>
<div className="flex-1">
<p className="text-white font-semibold text-sm">
<span className="text-red-400 font-bold">Yes!</span> Add a Second Article + Get 1 Extra FREE for Just $69.9!
                            </p>
<p className="text-xs text-subtext mt-1 leading-relaxed">
<strong>3x Triple your brand footprint instantly.</strong> Receive a second + third professional feature for 50% OFF in different major outlets with 3 custom-designed social media kits. (Buy 1 Get 1 Free: Normally $197 – Available for Only $69 at checkout).
                            </p>
</div>
</label>
</div>

<button className="w-full bg-gold hover:bg-yellow-400 text-navy font-bold text-lg py-4 rounded-lg transition-all shadow-lg mt-4 flex items-center justify-center gap-2">
<iconify-icon icon="solar:card-linear"></iconify-icon>
                    Complete Order
                </button>
<div className="flex items-center justify-center gap-2 text-xs text-subtext opacity-60">
<iconify-icon icon="solar:lock-password-linear"></iconify-icon>
                    Secure 256-bit SSL Encrypted Payment
                </div>
</div>
</div>
</section>


<section className="py-24 px-4 bg-[#050810] border-t border-white/5">
<div className="max-w-4xl mx-auto text-center space-y-8">
<div className="inline-block px-3 py-1 rounded bg-red-500/10 text-red-400 text-xs font-bold tracking-widest uppercase mb-4">Wait! Don't Close This Page</div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
                Would you like to secure <span className="text-gold">Authority status</span> for the entire year?
            </h2>
<p className="text-lg text-subtext max-w-2xl mx-auto leading-relaxed">
                One article starts the spark. A 20-day blitz builds an everlasting fire. 🔥 Upgrade to Premium Authority Program for just <span className="text-white font-bold">$497 ONE-TIME</span>. We will handle 20+ professional features over the next 20 days.
            </p>
<div className="p-6 bg-white/5 rounded-xl border border-white/10 max-w-2xl mx-auto">
<p className="text-sm text-subtext mb-4">Massively helps in assisting your brand as the "Source of Truth" for AI models and search engines year-round. (Increases chances of getting on Forbes later).</p>
<div className="flex flex-col md:flex-row gap-4 justify-center">
<button className="px-8 py-3 bg-brand-mid hover:bg-brand-light text-navy font-bold rounded-lg transition-colors flex-1">
                        YES, UPGRADE MY PLAN (ONE-CLICK)
                    </button>
<button className="px-8 py-3 bg-transparent border border-white/20 text-subtext hover:text-white rounded-lg transition-colors text-sm">
                        No thanks, I'm not interested.
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-navy">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-semibold text-white text-center mb-12 tracking-tight">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group bg-white/5 rounded-lg border border-white/5 overflow-hidden open:bg-white/10 transition-colors">
<summary className="flex items-center justify-between p-5 cursor-pointer list-none text-white font-medium">
                        What Is The Timeline For Publication?
                        <iconify-icon className="transition-transform group-open:rotate-180 text-subtext" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-subtext text-sm leading-relaxed border-t border-white/5 mt-2">
                        Most features live within 3 business days. This timeframe includes professional writing, your editorial review, and final distribution to our media partners.
                    </div>
</details>

<details className="group bg-white/5 rounded-lg border border-white/5 overflow-hidden open:bg-white/10 transition-colors">
<summary className="flex items-center justify-between p-5 cursor-pointer list-none text-white font-medium">
                        Is Professional Writing Included In The Cost?
                        <iconify-icon className="transition-transform group-open:rotate-180 text-subtext" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-subtext text-sm leading-relaxed border-t border-white/5 mt-2">
                        Yes. This is a fully managed service. Our writers research your brand and craft the narrative for you, ensuring it meets the high standards required by news affiliates.
                    </div>
</details>

<details className="group bg-white/5 rounded-lg border border-white/5 overflow-hidden open:bg-white/10 transition-colors">
<summary className="flex items-center justify-between p-5 cursor-pointer list-none text-white font-medium">
                        Can I use the news logos on my website?
                        <iconify-icon className="transition-transform group-open:rotate-180 text-subtext" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-subtext text-sm leading-relaxed border-t border-white/5 mt-2">
                        Yes. Once your article is published on the affiliates of major networks (ABC, NBC, FOX, etc.), you have the permanent right to use those logos as a trust signal on your marketing materials.
                    </div>
</details>
</div>
</div>
</section>

<footer className="py-8 border-t border-white/5 text-center text-xs text-subtext/50 bg-navy">
<p>© 2026 Instant Authority PR. All rights reserved.</p>
</footer>

    </>
  );
}
