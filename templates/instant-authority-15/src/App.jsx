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



        // Set a 4 hour timer
        let time = 4 * 60 * 60;
        const timerElement = document.getElementById('timer');
        
        setInterval(() => {
            const hours = Math.floor(time / 3600);
            const minutes = Math.floor((time % 3600) / 60);
            const seconds = time % 60;
            
            timerElement.textContent = 
                `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            if (time > 0) time--;
        }, 1000);
    
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
      

<div className="fixed top-0 w-full z-50 bg-[#0A1020]/90 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
<div className="flex items-center gap-2 text-xs md:text-sm font-medium text-white/80">
<iconify-icon className="text-[#E6B325]" icon="solar:shield-check-linear" width="18"></iconify-icon>
<span>100% Money-Back Guarantee</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-semibold tracking-wide uppercase text-white/60 hidden md:block">Offer Ends Soon:</span>
<div className="flex items-center gap-1 text-[#E6B325] font-mono font-semibold text-sm bg-[#E6B325]/10 px-2 py-1 rounded">
<iconify-icon icon="solar:clock-circle-linear" width="16"></iconify-icon>
<span id="timer">04:12:38</span>
</div>
</div>
</div>
</div>

<section className="relative pt-32 pb-20 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
<div className="absolute top-20 left-10 w-72 h-72 bg-[#036194] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
<div className="absolute top-20 right-10 w-72 h-72 bg-[#3ea1d8] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-[#E6B325] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
</div>
<div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">

<div className="w-full md:w-3/5 text-center md:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#3ea1d8] text-xs font-semibold tracking-wide uppercase mb-6">
<span className="w-2 h-2 rounded-full bg-[#E6B325] animate-pulse"></span>
                    Now Accepting New Clients
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 text-white">
                    Instant Authority <br/>
<span className="text-gradient-primary">Within 48 Hours</span>
</h1>
<p className="text-lg md:text-xl text-[#B0B7C3] mb-8 font-light max-w-2xl mx-auto md:mx-0">
                    Get featured on USA News, NY Weekly, and major outlets. Build unshakeable trust and dominate your niche.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
<a className="group relative px-8 py-4 bg-[#E6B325] text-[#0A1020] font-semibold text-lg rounded-lg overflow-hidden transition-all hover:scale-[1.02] gold-glow" href="#checkout">
<span className="relative z-10 flex items-center gap-2">
                            Get Featured Now
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="2" width="20"></iconify-icon>
</span>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</a>
<div className="flex items-center -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#0A1020]" src="https://i.pravatar.cc/100?img=1"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#0A1020]" src="https://i.pravatar.cc/100?img=3"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#0A1020]" src="https://i.pravatar.cc/100?img=5"/>
<div className="w-10 h-10 rounded-full bg-[#3ea1d8] flex items-center justify-center text-xs font-bold border-2 border-[#0A1020]">+2k</div>
</div>
</div>
</div>

<div className="w-full md:w-2/5 relative h-[500px] mask-image-gradient">
<div className="absolute inset-0 bg-gradient-to-b from-[#0A1020] via-transparent to-[#0A1020] z-20 pointer-events-none"></div>
<div className="grid grid-cols-2 gap-4 h-full overflow-hidden">

<div className="flex flex-col gap-4 animate-float">
<div className="glass-panel p-2 rounded-xl">
<div className="relative aspect-[9/16] bg-gray-800 rounded-lg overflow-hidden group">
<img className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=300"/>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-white text-4xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
<div className="absolute bottom-2 left-2 text-xs font-semibold">"Sales up 40%"</div>
</div>
</div>
<div className="glass-panel p-2 rounded-xl">
<div className="relative aspect-[9/16] bg-gray-800 rounded-lg overflow-hidden">
<img className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=300"/>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-white text-4xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
<div className="absolute bottom-2 left-2 text-xs font-semibold">"Instant Credibility"</div>
</div>
</div>
</div>

<div className="flex flex-col gap-4 animate-float-delayed">
<div className="glass-panel p-2 rounded-xl">
<div className="relative aspect-[9/16] bg-gray-800 rounded-lg overflow-hidden">
<img className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;q=80&amp;w=300"/>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-white text-4xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
<div className="absolute bottom-2 left-2 text-xs font-semibold">"Verified on IG"</div>
</div>
</div>
<div className="glass-panel p-2 rounded-xl">
<div className="relative aspect-[9/16] bg-gray-800 rounded-lg overflow-hidden">
<img className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=300"/>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-white text-4xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
<div className="absolute bottom-2 left-2 text-xs font-semibold">"ROI in 3 days"</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-[#0A1020] py-10 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 mb-8 text-center">
<p className="text-sm font-semibold tracking-widest uppercase text-[#B0B7C3]">Trusted by 10,000+ Business Owners Worldwide</p>
</div>
<div className="relative flex overflow-x-hidden group">
<div className="animate-scroll flex whitespace-nowrap gap-16 text-white/40 font-bold text-2xl tracking-tighter items-center">

<span>FORBES</span>
<span>ENTREPRENEUR</span>
<span>USA NEWS</span>
<span>NY WEEKLY</span>
<span>TECH BULLION</span>
<span>MEDIUM</span>
<span>ABC NEWS</span>
<span>FOX</span>
<span>FORBES</span>
<span>ENTREPRENEUR</span>
<span>USA NEWS</span>
<span>NY WEEKLY</span>
<span>TECH BULLION</span>
<span>MEDIUM</span>
<span>ABC NEWS</span>
<span>FOX</span>
</div>
<div aria-hidden="true" className="absolute top-0 animate-scroll flex whitespace-nowrap gap-16 text-white/40 font-bold text-2xl tracking-tighter items-center" style={{left: '100%'}}>
<span>FORBES</span>
<span>ENTREPRENEUR</span>
<span>USA NEWS</span>
<span>NY WEEKLY</span>
<span>TECH BULLION</span>
<span>MEDIUM</span>
<span>ABC NEWS</span>
<span>FOX</span>
<span>FORBES</span>
<span>ENTREPRENEUR</span>
<span>USA NEWS</span>
<span>NY WEEKLY</span>
<span>TECH BULLION</span>
<span>MEDIUM</span>
<span>ABC NEWS</span>
<span>FOX</span>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-3xl mx-auto px-4">
<div className="inline-flex items-center gap-2 text-[#E6B325] text-sm font-semibold mb-4">
<iconify-icon icon="solar:danger-triangle-linear" width="20"></iconify-icon>
                THE AUTHORITY GAP
            </div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-8">
                In 2026, Being "Good" Isn’t Enough. <br/>
<span className="text-white/50">You Must Be "The Answer."</span>
</h2>
<div className="prose prose-lg prose-invert text-[#B0B7C3]">
<p>
                    Traditional marketing is saturated. With 80% of consumers now relying on AI-generated answers for purchase decisions, appearing in "ground truth" news sources is the only way to remain visible.
                </p>
<p>
                    If AI assistants like ChatGPT don't find your brand in reputable news archives, your business effectively doesn't exist to modern searchers.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-[#0A1020] to-[#050914] relative">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center mb-16">
<span className="text-[#3ea1d8] font-semibold tracking-wider text-sm uppercase">Phase #1: Seeding the Authority Baseline</span>
<h2 className="text-3xl md:text-4xl font-semibold mt-3 text-white">PR To Dominate Authority</h2>
<p className="text-[#B0B7C3] mt-4 max-w-2xl mx-auto">A Professional Editorial Service Managed From Concept → Draft → Guaranteed Publishing. (No More Random Press Release BS)</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors">
<div className="w-12 h-12 bg-[#3ea1d8]/10 rounded-lg flex items-center justify-center text-[#3ea1d8] mb-4">
<iconify-icon icon="solar:document-add-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Fact-Based Article Creation</h3>
<p className="text-sm text-[#B0B7C3] leading-relaxed">Our team writes a 600–1,000 word article highlighting your specific expertise and unique brand journey.</p>
</div>

<div className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors">
<div className="w-12 h-12 bg-[#E6B325]/10 rounded-lg flex items-center justify-center text-[#E6B325] mb-4">
<iconify-icon icon="solar:global-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Strategic Media Distribution</h3>
<p className="text-sm text-[#B0B7C3] leading-relaxed">Publication on high-authority news platforms tailored to your specific industry niche.</p>
</div>

<div className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors">
<div className="w-12 h-12 bg-[#3ea1d8]/10 rounded-lg flex items-center justify-center text-[#3ea1d8] mb-4">
<iconify-icon icon="solar:link-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Search Connectivity</h3>
<p className="text-sm text-[#B0B7C3] leading-relaxed">High Domain Authority (DA) backlinks that provide long-term search engine positioning for your primary website, may help with AI ranking.</p>
</div>

<div className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors">
<div className="w-12 h-12 bg-[#E6B325]/10 rounded-lg flex items-center justify-center text-[#E6B325] mb-4">
<iconify-icon icon="solar:medal-star-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Visual Trust Signals</h3>
<p className="text-sm text-[#B0B7C3] leading-relaxed">A custom "As Featured In" banner to enhance trust on your landing pages and social profiles.</p>
</div>
</div>
</div>
</section>

<section className="py-20 relative overflow-hidden">

<div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-[#036194]/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-4">
<div className="glass-panel rounded-3xl p-8 md:p-12 border border-[#E6B325]/20 relative">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E6B325] text-[#0A1020] px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    The 2026 Bonus Stack
                </div>
<div className="space-y-6 mt-4">
<div className="flex items-start gap-4">
<iconify-icon className="text-[#E6B325] mt-1 flex-shrink-0" icon="solar:check-circle-bold" width="24"></iconify-icon>
<div>
<h4 className="text-lg font-semibold text-white">Bonus 1: The Viral Visibility Framework</h4>
<p className="text-sm text-[#B0B7C3]">Strategy for maximizing article reach.</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#E6B325] mt-1 flex-shrink-0" icon="solar:check-circle-bold" width="24"></iconify-icon>
<div>
<h4 className="text-lg font-semibold text-white">Bonus 2: PR to Revenue Roadmap</h4>
<p className="text-sm text-[#B0B7C3]">Converting news mentions into high-ticket client acquisitions.</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#E6B325] mt-1 flex-shrink-0" icon="solar:check-circle-bold" width="24"></iconify-icon>
<div>
<h4 className="text-lg font-semibold text-white">Bonus 3: Done-For-You AI Drafting Access</h4>
<p className="text-sm text-[#B0B7C3]">Full access to our proprietary PR Agents for continuous future pitches on demand.</p>
</div>
</div>
</div>
<div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<div className="text-sm text-[#B0B7C3] line-through">Normally $497</div>
<div className="text-4xl font-semibold text-white">Today Only <span className="text-[#E6B325]">$89</span></div>
</div>
<a className="w-full md:w-auto px-8 py-4 bg-[#E6B325] text-[#0A1020] font-semibold rounded-lg text-center hover:bg-[#d4a015] transition-colors" href="#checkout">
                        Claim Bonus Offer
                    </a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#050914]">
<div className="max-w-7xl mx-auto px-4">
<div className="flex items-center justify-center gap-2 mb-12">
<iconify-icon className="text-[#00b67a] text-3xl" icon="solar:star-bold"></iconify-icon>
<span className="text-xl font-semibold">Trustpilot</span>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-lg text-[#0A1020]">
<div className="flex text-[#00b67a] mb-3">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<h4 className="font-bold text-sm mb-2">"Published in 6 days"</h4>
<p className="text-sm text-gray-600">I was skeptical but the team delivered. My article was live on NY Weekly in less than a week.</p>
<div className="mt-4 text-xs text-gray-400">Sarah J., Life Coach</div>
</div>

<div className="bg-white p-6 rounded-lg text-[#0A1020]">
<div className="flex text-[#00b67a] mb-3">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<h4 className="font-bold text-sm mb-2">"Doubled my bookings"</h4>
<p className="text-sm text-gray-600">The 'As Seen On' banner is magic. Conversion rate on my landing page went from 2% to 4.5%.</p>
<div className="mt-4 text-xs text-gray-400">Mark T., Agency Owner</div>
</div>

<div className="bg-white p-6 rounded-lg text-[#0A1020]">
<div className="flex text-[#00b67a] mb-3">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<h4 className="font-bold text-sm mb-2">"Best $89 Investment"</h4>
<p className="text-sm text-gray-600">Better than ads. This is permanent real estate on the internet. Highly recommend.</p>
<div className="mt-4 text-xs text-gray-400">Elena R., Consultant</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="checkout">
<div className="max-w-2xl mx-auto px-4">
<div className="glass-panel border-t-4 border-t-[#E6B325] rounded-xl p-8 shadow-2xl">
<h3 className="text-2xl font-semibold text-white mb-6 text-center">Review Your Order Summary</h3>

<div className="flex justify-between items-center py-4 border-b border-white/10">
<div>
<h4 className="font-medium text-white">One Top-Tier Article Written &amp; Featured</h4>
<p className="text-xs text-[#B0B7C3]">Includes Strategy, Writing, &amp; Placement</p>
</div>
<div className="font-semibold text-xl text-white">$89.90</div>
</div>

<div className="mt-8 bg-[#E6B325]/5 border-2 border-dashed border-[#E6B325]/40 rounded-lg p-5">
<label className="checkbox-wrapper flex gap-4 cursor-pointer relative group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-6 h-6 border-2 border-[#B0B7C3] rounded flex items-center justify-center bg-transparent transition-colors mt-1 shrink-0 peer-focus:ring-2 peer-focus:ring-[#E6B325]">
<svg className="w-4 h-4 text-[#0A1020] hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<div>
<div className="font-bold text-[#E6B325] text-lg">Yes! Add a Second Article + Get 1 Extra FREE for Just $69.9!</div>
<p className="text-sm text-white/90 mt-1"><span className="font-semibold text-[#E6B325]">3x Triple your brand footprint instantly.</span> Receive a second + third professional feature for 50% OFF in different major outlets with 3 custom-designed social media kits to showcase your triple wins. (Buy 1 Get 1 Free: Normally $197 – Available for Only $69 at checkout).</p>
</div>
</label>
</div>
<div className="mt-8">
<button className="w-full py-5 bg-[#E6B325] text-[#0A1020] text-xl font-bold rounded-lg hover:bg-[#d4a015] shadow-lg shadow-[#E6B325]/20 transition-all transform hover:-translate-y-1">
                        COMPLETE SECURE ORDER
                    </button>
<div className="flex justify-center items-center gap-4 mt-4 text-[#B0B7C3] opacity-60">
<iconify-icon icon="solar:lock-password-linear"></iconify-icon>
<span className="text-xs">256-Bit SSL Encrypted Payment</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-[#036194]/10 border-y border-[#036194]/20">
<div className="max-w-3xl mx-auto px-4 text-center">
<div className="inline-block bg-[#0A1020] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">Wait! One-Time Upgrade</div>
<h2 className="text-3xl font-semibold text-white mb-6">
                Would you like to secure Authority status for the entire year?
            </h2>
<div className="bg-[#0A1020] p-6 rounded-xl border border-white/5 mb-8 text-left">
<p className="text-[#B0B7C3] mb-4">
<span className="text-white font-semibold">One article starts the spark. A 20-day blitz builds an everlasting fire. 🔥</span>
                    Upgrade to Premium Authority Program for just <span className="text-[#E6B325] font-bold">$497 ONE-TIME</span>. We will handle 20+ professional features over the next 20 days.
                </p>
<p className="text-[#B0B7C3]">
                    Massively helps in assisting your brand as the "Source of Truth" for AI models and search engines year-round.
                </p>
</div>
<div className="flex flex-col gap-4 max-w-md mx-auto">
<button className="w-full py-4 bg-[#3ea1d8] text-white font-bold rounded-lg hover:bg-[#348bbd] transition-colors">
                    YES, UPGRADE MY PLAN (ONE-CLICK)
                </button>
<button className="text-sm text-[#B0B7C3] hover:text-white underline">
                    No thanks, I'm not interested in beating my competition for now.
                </button>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-4">
<h2 className="text-3xl font-semibold text-center mb-12">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group glass-panel rounded-lg">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-white">
<span>What Is The Timeline For Publication?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-[#B0B7C3] p-5 pt-0 text-sm leading-relaxed">
                    Most features live within 3 business days. This timeframe includes professional writing, your editorial review, and final distribution to our media partners.
                </div>
</details>

<details className="group glass-panel rounded-lg">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-white">
<span>Is Professional Writing Included In The Cost?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-[#B0B7C3] p-5 pt-0 text-sm leading-relaxed">
                    Yes. This is a fully managed service. Our writers research your brand and craft the narrative for you, ensuring it meets the high standards required by news affiliates.
                </div>
</details>

<details className="group glass-panel rounded-lg">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-white">
<span>Can I use the news logos on my website?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-[#B0B7C3] p-5 pt-0 text-sm leading-relaxed">
                    Yes. Once your article is published on the affiliates of major networks (ABC, NBC, FOX, etc.), you have the permanent right to use those logos as a trust signal on your marketing materials.
                </div>
</details>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-[#0A1020]">
<div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
<div>
<h3 className="text-2xl font-semibold text-white mb-6">What’s Included:</h3>
<ul className="space-y-4">
<li className="flex gap-3 text-sm text-[#B0B7C3]">
<iconify-icon className="text-[#3ea1d8] flex-shrink-0 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span><strong className="text-white">1x Guaranteed Major News Feature:</strong> Placement on high-authority outlets (USA News, NY Weekly, Medium, etc.) to instantly build 10/10 trust.</span>
</li>
<li className="flex gap-3 text-sm text-[#B0B7C3]">
<iconify-icon className="text-[#3ea1d8] flex-shrink-0 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span><strong className="text-white">Professional Storytelling:</strong> We write a 750–1,250 word high-impact article highlighting your business strengths.</span>
</li>
<li className="flex gap-3 text-sm text-[#B0B7C3]">
<iconify-icon className="text-[#3ea1d8] flex-shrink-0 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span><strong className="text-white">Full Editorial Control:</strong> Review and request revisions. Nothing goes live until it perfectly represents your brand.</span>
</li>
<li className="flex gap-3 text-sm text-[#B0B7C3]">
<iconify-icon className="text-[#3ea1d8] flex-shrink-0 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span><strong className="text-white">SEO Dominance:</strong> Secure high-DA backlinks to rank higher on Google and crush your competitors.</span>
</li>
</ul>
</div>
<div>
<h3 className="text-2xl font-semibold text-[#E6B325] mb-6">FREE EXCLUSIVE BONUSES (2026 Exclusive):</h3>
<ul className="space-y-4">
<li className="glass-panel p-4 rounded-lg flex items-start gap-3">
<iconify-icon className="text-[#E6B325] text-xl mt-1" icon="solar:gift-linear"></iconify-icon>
<div>
<strong className="text-white block text-sm">PR to Profit Blueprint</strong>
<span className="text-xs text-[#B0B7C3]">The exact system to convert media mentions into measurable revenue.</span>
</div>
</li>
<li className="glass-panel p-4 rounded-lg flex items-start gap-3">
<iconify-icon className="text-[#E6B325] text-xl mt-1" icon="solar:gift-linear"></iconify-icon>
<div>
<strong className="text-white block text-sm">The Media Vault</strong>
<span className="text-xs text-[#B0B7C3]">"As Seen In" secrets and our guide to landing TV, Radio, and Podcast interviews for $0.</span>
</div>
</li>
</ul>
</div>
</div>
</section>

<footer className="py-10 border-t border-white/5 text-center text-xs text-gray-600">
<p>© 2024 Instant Authority. All rights reserved.</p>
</footer>



    </>
  );
}
