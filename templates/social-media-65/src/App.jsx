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



  // Scroll Animations Observer
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        scrollObserver.unobserve(entry.target); // Optional: only animate once
      }
    });
  }, { 
    threshold: 0.1, 
    rootMargin: '0px 0px -50px 0px' 
  });

  document.querySelectorAll('.scroll-animate, .pipeline-step').forEach(el => {
    scrollObserver.observe(el);
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
      

<div className="fixed inset-0 -z-20 bg-black"></div>
<div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

<nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium text-white tracking-tighter" href="#">VIRALITY</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Home</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#process">How It Works</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#proof">Results</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#footer">Contact</a>
</div>
<button className="bg-white text-black hover:bg-zinc-200 px-4 py-2 rounded-full text-xs font-medium transition-colors" onclick="document.getElementById('lead-modal').classList.remove('hidden')">
      I Want to Grow My Digital Presence
    </button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-600/20 rounded-full blur-[120px] glow-orb pointer-events-none -z-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 text-xs text-fuchsia-300 tracking-tight backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 shadow-[0_0_8px_#d946ef] animate-pulse"></span>
      Accelerate your growth today
    </div>
<h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.1] mb-6">
      Build Digital Authority and <br className="hidden md:block"/>
<span className="bg-gradient-to-r from-fuchsia-400 to-fuchsia-600 bg-clip-text text-transparent font-medium">Grow Your Instagram</span> <br className="hidden md:block"/>
      with Real Followers
    </h1>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
      Virality was developed to help brands, entrepreneurs, and influencers accelerate their growth through intelligent strategies focused on positioning, visibility, and social proof.
    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
<div className="flex flex-col items-start gap-3 text-sm text-zinc-300">
<div className="flex items-center gap-2">
<iconify-icon className="text-fuchsia-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Real and organic growth</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-fuchsia-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Zero bots or fake profiles</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-fuchsia-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Strategies used by top influencers</span>
</div>
</div>
<div className="flex flex-col items-start gap-3 text-sm text-zinc-300">
<div className="flex items-center gap-2">
<iconify-icon className="text-fuchsia-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Rapid growth in social proof</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-fuchsia-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Strategic positioning for your brand</span>
</div>
</div>
</div>
<div className="flex flex-col items-center gap-4">
<button className="group relative inline-flex items-center justify-center gap-2 bg-fuchsia-500 hover:bg-fuchsia-400 text-white px-8 py-4 rounded-full text-sm font-medium transition-all shadow-[0_0_20px_rgba(217,70,239,0.3)] hover:shadow-[0_0_30px_rgba(217,70,239,0.5)]" onclick="document.getElementById('lead-modal').classList.remove('hidden')">
        I Want to Grow My Digital Authority
        <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<span className="text-xs text-zinc-500">Access Virality's exclusive strategy</span>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5 bg-black" id="problem">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div className="scroll-animate sticky top-24">
<h2 className="text-xs text-fuchsia-400 tracking-widest uppercase mb-3 flex items-center gap-2">
<span className="w-8 h-px bg-fuchsia-500/50"></span> The Challenge
        </h2>
<h3 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-6 leading-snug">
          Growing on Instagram today requires more than just posting content
        </h3>
<div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
<p>
            Many people believe that growing on social networks only depends on posting content frequently. However, real and consistent growth happens when three elements work together: visibility, social proof, and strategic positioning.
          </p>
<p>
            Without these elements, even good content can be ignored by both the algorithm and the audience. That’s why many profiles spend months or even years trying to grow without achieving consistent results.
          </p>
</div>
<div className="mt-8 p-6 rounded-2xl bg-zinc-900/30 border border-white/5">
<p className="text-sm text-zinc-300 italic">
            "It’s not a lack of effort. Most of the time, the real problem is simply the absence of a clear and structured growth strategy."
          </p>
</div>
</div>
<div className="grid grid-cols-1 gap-4 scroll-animate">

<div className="p-6 rounded-2xl bg-zinc-950 border border-white/5 hover:border-white/10 transition-colors flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
<iconify-icon className="text-zinc-300 text-lg" icon="solar:graph-down-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-white mb-1">Slow growth</h4>
<p className="text-xs text-zinc-500">Months of effort translating to minimal follower increases and stagnant metrics.</p>
</div>
</div>
<div className="p-6 rounded-2xl bg-zinc-950 border border-white/5 hover:border-white/10 transition-colors flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
<iconify-icon className="text-zinc-300 text-lg" icon="solar:chat-round-line-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-white mb-1">Low engagement</h4>
<p className="text-xs text-zinc-500">High quality posts that receive little to no interaction from your target audience.</p>
</div>
</div>
<div className="p-6 rounded-2xl bg-zinc-950 border border-white/5 hover:border-white/10 transition-colors flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
<iconify-icon className="text-zinc-300 text-lg" icon="solar:radar-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-white mb-1">Limited reach</h4>
<p className="text-xs text-zinc-500">The algorithm restricts your content, making it nearly impossible to reach non-followers.</p>
</div>
</div>
<div className="p-6 rounded-2xl bg-zinc-950 border border-white/5 hover:border-white/10 transition-colors flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
<iconify-icon className="text-zinc-300 text-lg" icon="solar:crown-star-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-white mb-1">Difficulty becoming a recognized authority in the niche</h4>
<p className="text-xs text-zinc-500">Struggling to be recognized as an expert or leader within your specific market.</p>
</div>
</div>
<div className="p-6 rounded-2xl bg-zinc-950 border border-white/5 hover:border-white/10 transition-colors flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
<iconify-icon className="text-zinc-300 text-lg" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-white mb-1">Followers that don’t turn into real opportunities</h4>
<p className="text-xs text-zinc-500">An audience that consumes content but never converts into business or meaningful connections.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5 bg-[#050505]" id="solution">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20 scroll-animate">
<h2 className="text-xs text-fuchsia-400 tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
<span className="w-4 h-px bg-fuchsia-500/50"></span> The Solution <span className="w-4 h-px bg-fuchsia-500/50"></span>
</h2>
<h3 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-6">
        Virality was developed to accelerate your digital authority
      </h3>
<p className="text-sm text-zinc-400 leading-relaxed">
        Virality is a consultancy focused on helping profiles grow strategically in the digital space.
      </p>
<p className="text-sm text-zinc-400 leading-relaxed mt-4">
        Instead of using artificial methods that harm engagement and credibility, Virality uses strategies that connect your profile with new real audiences, increase your visibility, and strengthen your digital presence.
      </p>
<p className="text-sm text-zinc-400 leading-relaxed mt-4">
        The goal is not only to increase numbers but to build a strong, respected, and recognizable digital presence within your market.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-animate">

<div className="group p-8 rounded-3xl bg-zinc-950 border border-white/5 hover:border-fuchsia-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/5 rounded-bl-full blur-2xl transition-opacity opacity-0 group-hover:opacity-100"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-fuchsia-400 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:gift-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white mb-2">Strategic Giveaways</h4>
<p className="text-xs text-zinc-500 leading-relaxed">High-reach campaigns that connect your profile with new audiences.</p>
</div>

<div className="group p-8 rounded-3xl bg-zinc-950 border border-white/5 hover:border-fuchsia-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/5 rounded-bl-full blur-2xl transition-opacity opacity-0 group-hover:opacity-100"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-fuchsia-400 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:medal-star-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white mb-2">Digital Authority</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Strategies that strengthen your brand positioning.</p>
</div>

<div className="group p-8 rounded-3xl bg-zinc-950 border border-white/5 hover:border-fuchsia-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/5 rounded-bl-full blur-2xl transition-opacity opacity-0 group-hover:opacity-100"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-fuchsia-400 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white mb-2">Organic Growth</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Real followers who are interested in your content.</p>
</div>

<div className="group p-8 rounded-3xl bg-zinc-950 border border-white/5 hover:border-fuchsia-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/5 rounded-bl-full blur-2xl transition-opacity opacity-0 group-hover:opacity-100"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-fuchsia-400 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:verified-check-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white mb-2">Social Proof</h4>
<p className="text-xs text-zinc-500 leading-relaxed">More credibility and authority in your niche.</p>
</div>

<div className="group p-8 rounded-3xl bg-zinc-950 border border-white/5 hover:border-fuchsia-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/5 rounded-bl-full blur-2xl transition-opacity opacity-0 group-hover:opacity-100"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-fuchsia-400 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:target-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white mb-2">Strategic Positioning</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Strategies that strengthen your presence and highlight your profile in the market.</p>
</div>

<div className="group p-8 rounded-3xl bg-zinc-950 border border-white/5 hover:border-fuchsia-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/5 rounded-bl-full blur-2xl transition-opacity opacity-0 group-hover:opacity-100"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-fuchsia-400 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:user-speak-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white mb-2">Qualified Audience</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Real people who follow your content and connect with your brand.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5 bg-black overflow-hidden" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20 scroll-animate">
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-4">
        How Does Growth with Virality Work?
      </h2>
<p className="text-sm text-zinc-400 leading-relaxed">
        The growth process happens through a combination of strategic campaigns, positioning, and visibility. Each step is designed to strengthen your digital presence and accelerate your authority within your niche.
      </p>
</div>
<div className="relative max-w-4xl mx-auto scroll-animate">

<div className="pipeline-spine hidden md:block">
<div className="pipeline-beam"></div>
</div>

<div className="pipeline-step mb-16 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-center">
<div className="hidden md:block text-right pr-8">
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Step 1 — Profile Analysis</h3>
<p className="text-sm text-zinc-500">Analysis of your current positioning and growth potential.</p>
</div>
<div className="relative w-full md:w-auto h-16 md:h-auto flex items-center justify-start md:justify-center pl-6 md:pl-0 mb-4 md:mb-0">
<div className="md:hidden absolute left-[15px] top-0 bottom-[-4rem] w-px bg-white/10"></div>
<div className="step-node-ring w-8 h-8 md:relative absolute left-[4px] md:left-auto bg-black border-white/10 z-10">
<div className="step-node-dot"></div>
</div>
<div className="md:hidden ml-10">
<h3 className="text-lg font-medium text-white tracking-tight">Step 1 — Profile Analysis</h3>
<p className="text-xs text-zinc-500 mt-1">Analysis of your current positioning and growth potential.</p>
</div>
</div>
<div className="hidden md:block pl-8">
<div className="p-5 rounded-2xl bg-zinc-950 border border-white/5 flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
<div className="h-full bg-zinc-500 w-[100%]"></div>
</div>
<div className="text-[10px] font-mono text-zinc-500 mt-2 tracking-widest uppercase">Audit Complete</div>
</div>
</div>
</div>
</div>

<div className="pipeline-step mb-16 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-center">
<div className="hidden md:block pr-8">
<div className="p-5 rounded-2xl bg-zinc-950 border border-white/5 flex items-center gap-4 justify-end text-right">
<div className="flex-1">
<div className="flex justify-end gap-1 mb-2">
<div className="w-4 h-1 rounded-full bg-fuchsia-500/50"></div>
<div className="w-4 h-1 rounded-full bg-fuchsia-500/50"></div>
<div className="w-4 h-1 rounded-full bg-fuchsia-500"></div>
</div>
<div className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">Strategy Mapped</div>
</div>
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-fuchsia-400">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
</div>
</div>
<div className="relative w-full md:w-auto h-16 md:h-auto flex items-center justify-start md:justify-center pl-6 md:pl-0 mb-4 md:mb-0">
<div className="md:hidden absolute left-[15px] top-[-2rem] bottom-[-4rem] w-px bg-white/10"></div>
<div className="step-node-ring w-8 h-8 md:relative absolute left-[4px] md:left-auto bg-black border-white/10 z-10">
<div className="step-node-dot"></div>
</div>
<div className="md:hidden ml-10">
<h3 className="text-lg font-medium text-white tracking-tight">Step 2 — Strategic Planning</h3>
<p className="text-xs text-zinc-500 mt-1">Definition of visibility campaigns and growth strategies.</p>
</div>
</div>
<div className="hidden md:block pl-8 text-left">
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Step 2 — Strategic Planning</h3>
<p className="text-sm text-zinc-500">Definition of visibility campaigns and growth strategies.</p>
</div>
</div>

<div className="pipeline-step mb-16 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-center">
<div className="hidden md:block text-right pr-8">
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Step 3 — Growth Campaigns</h3>
<p className="text-sm text-zinc-500">Participation in high-reach campaigns.</p>
</div>
<div className="relative w-full md:w-auto h-16 md:h-auto flex items-center justify-start md:justify-center pl-6 md:pl-0 mb-4 md:mb-0">
<div className="md:hidden absolute left-[15px] top-[-2rem] bottom-[-4rem] w-px bg-white/10"></div>
<div className="step-node-ring w-8 h-8 md:relative absolute left-[4px] md:left-auto bg-black border-white/10 z-10">
<div className="step-node-dot"></div>
</div>
<div className="md:hidden ml-10">
<h3 className="text-lg font-medium text-white tracking-tight">Step 3 — Growth Campaigns</h3>
<p className="text-xs text-zinc-500 mt-1">Participation in high-reach campaigns.</p>
</div>
</div>
<div className="hidden md:block pl-8">
<div className="p-5 rounded-2xl bg-zinc-950 border border-fuchsia-500/20 shadow-[0_0_15px_rgba(217,70,239,0.05)] flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-500 border border-fuchsia-500/20">
<iconify-icon className="text-xl" icon="solar:rocket-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between text-[10px] font-mono text-zinc-400 mb-2 uppercase tracking-widest">
<span>Status</span>
<span className="text-fuchsia-400">Deploying</span>
</div>
<div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
<div className="h-full bg-fuchsia-500 w-[60%] shadow-[0_0_10px_#d946ef]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="pipeline-step mb-16 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-center">
<div className="hidden md:block pr-8">
<div className="p-5 rounded-2xl bg-zinc-950 border border-white/5 flex items-center gap-4 justify-end text-right">
<div className="flex-1">
<div className="flex flex-wrap justify-end gap-2 mb-2">
<span className="text-[9px] font-mono px-2 py-1 rounded border border-white/10 text-zinc-400">BIO</span>
<span className="text-[9px] font-mono px-2 py-1 rounded border border-white/10 text-zinc-400">CONTENT</span>
<span className="text-[9px] font-mono px-2 py-1 rounded border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300">NARRATIVE</span>
</div>
<div className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">Optimized</div>
</div>
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-300">
<iconify-icon className="text-xl" icon="solar:pen-linear"></iconify-icon>
</div>
</div>
</div>
<div className="relative w-full md:w-auto h-16 md:h-auto flex items-center justify-start md:justify-center pl-6 md:pl-0 mb-4 md:mb-0">
<div className="md:hidden absolute left-[15px] top-[-2rem] bottom-[-4rem] w-px bg-white/10"></div>
<div className="step-node-ring w-8 h-8 md:relative absolute left-[4px] md:left-auto bg-black border-white/10 z-10">
<div className="step-node-dot"></div>
</div>
<div className="md:hidden ml-10">
<h3 className="text-lg font-medium text-white tracking-tight">Step 4 — Positioning Optimization</h3>
<p className="text-xs text-zinc-500 mt-1">Improving narrative and digital presence.</p>
</div>
</div>
<div className="hidden md:block pl-8 text-left">
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Step 4 — Positioning Optimization</h3>
<p className="text-sm text-zinc-500">Improving narrative and digital presence.</p>
</div>
</div>

<div className="pipeline-step md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-center">
<div className="hidden md:block text-right pr-8">
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Step 5 — Authority Building</h3>
<p className="text-sm text-zinc-500">Your profile becomes recognized as a reference in your niche.</p>
</div>
<div className="relative w-full md:w-auto h-16 md:h-auto flex items-center justify-start md:justify-center pl-6 md:pl-0">
<div className="md:hidden absolute left-[15px] top-[-2rem] h-8 w-px bg-white/10"></div>
<div className="step-node-ring w-8 h-8 md:relative absolute left-[4px] md:left-auto bg-black border-fuchsia-500/50 z-10 shadow-[0_0_15px_rgba(217,70,239,0.2)]">
<div className="step-node-dot" style={{background: '#d946ef', boxShadow: '0 0 10px #d946ef'}}></div>
</div>
<div className="md:hidden ml-10">
<h3 className="text-lg font-medium text-white tracking-tight">Step 5 — Authority Building</h3>
<p className="text-xs text-zinc-500 mt-1">Your profile becomes recognized as a reference in your niche.</p>
</div>
</div>
<div className="hidden md:block pl-8">
<div className="p-5 rounded-2xl bg-zinc-950 border border-white/5 flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-300">
<iconify-icon className="text-xl" icon="solar:shield-star-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
<div className="h-full bg-zinc-300 w-[100%] shadow-[0_0_10px_#fff]"></div>
</div>
<div className="text-[10px] font-mono text-zinc-400 mt-2 tracking-widest uppercase flex items-center justify-between">
<span>Authority Status</span>
<span className="text-white">ESTABLISHED</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5 bg-[#050505]" id="proof">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 scroll-animate">
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-4">
        Profiles Already Accelerating Their Digital Authority
      </h2>
<p className="text-sm text-zinc-400 leading-relaxed">
        By participating in strategic campaigns and strengthening their positioning, profiles attract new audiences and increase their relevance in the market.
      </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 scroll-animate">

<div className="p-8 rounded-3xl bg-zinc-950 border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between">
<div className="mb-6">
<div className="flex text-fuchsia-500 mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<div className="w-full h-32 bg-zinc-900 rounded-xl flex items-center justify-center border border-white/5 mb-4">
<iconify-icon className="text-2xl text-zinc-700" icon="solar:gallery-wide-linear"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 leading-relaxed font-light text-center">
            [ Screenshot or Video Placement ]
          </p>
</div>
</div>

<div className="p-8 rounded-3xl bg-zinc-950 border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between">
<div className="mb-6">
<div className="flex text-fuchsia-500 mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<div className="w-full h-32 bg-zinc-900 rounded-xl flex items-center justify-center border border-white/5 mb-4">
<iconify-icon className="text-2xl text-zinc-700" icon="solar:play-circle-linear"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 leading-relaxed font-light text-center">
            [ Screenshot or Video Placement ]
          </p>
</div>
</div>

<div className="p-8 rounded-3xl bg-zinc-950 border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between">
<div className="mb-6">
<div className="flex text-fuchsia-500 mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<div className="w-full h-32 bg-zinc-900 rounded-xl flex items-center justify-center border border-white/5 mb-4">
<iconify-icon className="text-2xl text-zinc-700" icon="solar:gallery-wide-linear"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 leading-relaxed font-light text-center">
            [ Screenshot or Video Placement ]
          </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5 bg-black overflow-hidden" id="about">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-fuchsia-600/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16 items-center">
<div className="w-full md:w-1/2 scroll-animate">
<h2 className="text-xs text-fuchsia-400 tracking-widest uppercase mb-3 flex items-center gap-2">
<span className="w-8 h-px bg-fuchsia-500/50"></span> Our Story
        </h2>
<h3 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-6">
          Meet the People Behind Virality
        </h3>
<div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
<p>
            Virality was created with the goal of helping brands, influencers, and entrepreneurs build digital authority strategically.
          </p>
<p>
            From the beginning, the idea was clear: develop strategies that connect profiles with new real audiences, strengthen digital presence, and increase visibility in the market.
          </p>
<p>
            Over time, the methodology was refined to combine growth, positioning, and social proof into a process that consistently accelerates digital recognition.
          </p>
<p>
            Today, Virality works with profiles that want to position themselves as authorities in their niche and transform their digital presence into a strategic advantage.
          </p>
</div>
<div className="mt-8">
<button className="text-sm font-medium text-white border-b border-fuchsia-500 pb-1 hover:text-fuchsia-400 transition-colors" onclick="document.getElementById('lead-modal').classList.remove('hidden')">
            I Want to Grow My Digital Presence
          </button>
</div>
</div>
<div className="w-full md:w-1/2 scroll-animate flex justify-center">

<div className="relative w-72 h-72">
<div className="absolute inset-0 border border-white/10 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
<div className="w-3 h-3 bg-fuchsia-500 rounded-full absolute -top-1.5 shadow-[0_0_10px_#d946ef]"></div>
</div>
<div className="absolute inset-8 border border-white/5 rounded-full flex items-center justify-center animate-[spin_15s_linear_infinite_reverse]">
<div className="w-2 h-2 bg-zinc-500 rounded-full absolute -right-1"></div>
</div>
<div className="absolute inset-16 border border-white/5 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
<div className="w-2 h-2 bg-zinc-300 rounded-full absolute -bottom-1"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(217,70,239,0.15)]">
<iconify-icon className="text-2xl text-white" icon="solar:chart-line-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-16 border-t border-white/5 bg-[#030303] text-sm" id="footer">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-white/5 pb-12">
<div className="md:col-span-2">
<a className="text-lg font-medium text-white tracking-tighter mb-4 inline-block" href="#">VIRALITY</a>
<p className="text-zinc-500 leading-relaxed max-w-sm font-light text-xs">
          Virality is a consultancy specialized in strategic growth and digital authority. We help brands, entrepreneurs, and influencers strengthen their social media presence through positioning, visibility, and social proof strategies.
        </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 tracking-tight">Quick Links</h4>
<ul className="space-y-2 text-zinc-500 font-light text-xs">
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#process">How It Works</a></li>
<li><a className="hover:text-white transition-colors" href="#about">About Virality</a></li>
<li><a className="hover:text-white transition-colors" href="#footer">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 tracking-tight">Contact</h4>
<ul className="space-y-2 text-zinc-500 font-light text-xs">
<li><a className="hover:text-white transition-colors" href="mailto:contact@virality.com">Email: contact@virality.com</a></li>
<li><a className="hover:text-white transition-colors" href="#">Instagram: @virality</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600 font-light">
<div>
        © 2026 Virality — All rights reserved. Results may vary depending on the profile, niche, and strategy implementation.
      </div>
<div className="flex gap-4">
<a className="hover:text-zinc-300 transition-colors" href="#">Terms of Use</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden" id="lead-modal">

<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="document.getElementById('lead-modal').classList.add('hidden')"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">

<button className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors" onclick="document.getElementById('lead-modal').classList.add('hidden')">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<div className="p-8">
<div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-500 mb-6">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Fill Out the Form to Receive the Strategy</h3>
<p className="text-xs text-zinc-400 mb-8 leading-relaxed font-light">Enter your details below to learn more about participating in Virality’s strategic campaigns.</p>
<form className="space-y-4">
<div>
<label className="sr-only">Name</label>
<input className="w-full bg-zinc-900/50 border border-white/5 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-fuchsia-500/50 transition-colors font-light placeholder:text-zinc-600" placeholder="Name" type="text"/>
</div>
<div>
<label className="sr-only">Email</label>
<input className="w-full bg-zinc-900/50 border border-white/5 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-fuchsia-500/50 transition-colors font-light placeholder:text-zinc-600" placeholder="Email" type="email"/>
</div>
<div>
<label className="sr-only">Instagram</label>
<input className="w-full bg-zinc-900/50 border border-white/5 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-fuchsia-500/50 transition-colors font-light placeholder:text-zinc-600" placeholder="Instagram" type="text"/>
</div>
<div>
<label className="sr-only">Segment / Niche</label>
<div className="relative">
<select className="w-full bg-zinc-900/50 border border-white/5 rounded-lg px-4 py-3 text-sm text-zinc-400 focus:outline-none focus:border-fuchsia-500/50 transition-colors font-light appearance-none cursor-pointer">
<option disabled="" selected="" value="">Segment / Niche</option>
<option value="business">Business &amp; Entrepreneurship</option>
<option value="lifestyle">Lifestyle &amp; Fashion</option>
<option value="health">Health &amp; Fitness</option>
<option value="tech">Technology</option>
<option value="other">Other</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<button className="w-full bg-white hover:bg-zinc-200 text-black font-medium py-3 rounded-lg text-sm transition-colors mt-2" type="button">
          I Want to Participate
        </button>
</form>
<div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] text-zinc-500 font-light">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon>
        Your data is safe.
      </div>
</div>
</div>
</div>


    </>
  );
}
