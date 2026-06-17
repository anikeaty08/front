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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-[#FF6B35] opacity-[0.08] blur-[120px] rounded-full mix-blend-screen"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-[#FF6B35] opacity-[0.05] blur-[150px] rounded-full mix-blend-screen"></div>
</div>

<nav className="fixed w-full z-50 top-0 left-0 glass-panel border-b-0 border-white/5">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="text-xl font-bold tracking-tighter uppercase">Scale<span className="text-[#FF6B35]">Your</span>Brand</div>
<a className="hidden md:inline-flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#FF6B35] hover:text-white transition-all duration-300" href="#booking">
                Book Call
                <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0)_70%)]"></div>
<div className="max-w-6xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF6B35]/30 bg-[#FF6B35]/10 text-[#FF6B35] text-xs font-semibold uppercase tracking-wider mb-8 fade-in" style={{animationDelay: '0.1s'}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B35] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B35]"></span>
</span>
                New Case Study Available
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[1.1] mb-8 fade-in text-white" style={{animationDelay: '0.2s'}}>
                We help businesses find their <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-zinc-500">winning content format</span> to average <span className="text-[#FF6B35] text-glow">50k views</span> per video.
            </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed fade-in" style={{animationDelay: '0.4s'}}>
<strong className="text-white">Winning Format:</strong> A repeatable video style that consistently averages 50k views that you can post whenever you feel like to get more customers in 90 days.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 fade-in" style={{animationDelay: '0.6s'}}>
<a className="group relative px-8 py-4 bg-[#FF6B35] text-white text-lg font-semibold rounded-full overflow-hidden transition-all hover:scale-105 orange-glow-box" href="#vsl">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
<span className="relative flex items-center gap-2">
                        Watch How We Do It 
                        <span className="iconify" data-icon="lucide:arrow-down" data-width="20"></span>
</span>
</a>
<p className="text-xs text-zinc-500 mt-4 md:mt-0">No email required • Instant Access</p>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-black/50 backdrop-blur-sm overflow-hidden">
<div className="text-center mb-8">
<p className="text-sm font-medium text-zinc-400 tracking-widest uppercase">We've worked with</p>
</div>
<div className="relative w-full overflow-hidden whitespace-nowrap group">
<div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#050505] to-transparent"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#050505] to-transparent"></div>
<div className="inline-block animate-scroll hover:[animation-play-state:paused]">

<div className="inline-flex items-center gap-16 mx-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<span className="text-xl font-bold font-serif">AIRPRENEUR</span>
<span className="text-xl font-bold tracking-tighter">DOAC</span>
<span className="text-xl font-bold italic">Whop</span>
<span className="text-xl font-bold">BREZ</span>
<span className="text-xl font-semibold tracking-tight">SAM ONUHA</span>
<span className="text-xl font-bold uppercase">ThePassionateFew</span>
<span className="text-xl font-bold">PackLeaderDogs</span>
<span className="text-xl font-light tracking-widest">WILLCHANGELIVES</span>
<span className="text-xl font-bold">DAVID OMARI</span>
<span className="text-xl font-bold tracking-tight">DANIEL ILES</span>
<span className="text-xl font-bold serif">ERIC COOPER</span>
<span className="text-xl font-semibold">ALEXIS MAI</span>
<span className="text-xl font-bold">TOM LEWIS</span>
<span className="text-xl font-bold">SHINOBI SIGNALS</span>
<span className="text-xl font-bold italic">TheMindsetGuyy</span>
</div>

<div className="inline-flex items-center gap-16 mx-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<span className="text-xl font-bold font-serif">AIRPRENEUR</span>
<span className="text-xl font-bold tracking-tighter">DOAC</span>
<span className="text-xl font-bold italic">Whop</span>
<span className="text-xl font-bold">BREZ</span>
<span className="text-xl font-semibold tracking-tight">SAM ONUHA</span>
<span className="text-xl font-bold uppercase">ThePassionateFew</span>
<span className="text-xl font-bold">PackLeaderDogs</span>
<span className="text-xl font-light tracking-widest">WILLCHANGELIVES</span>
<span className="text-xl font-bold">DAVID OMARI</span>
<span className="text-xl font-bold tracking-tight">DANIEL ILES</span>
<span className="text-xl font-bold serif">ERIC COOPER</span>
<span className="text-xl font-semibold">ALEXIS MAI</span>
<span className="text-xl font-bold">TOM LEWIS</span>
<span className="text-xl font-bold">SHINOBI SIGNALS</span>
<span className="text-xl font-bold italic">TheMindsetGuyy</span>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="vsl">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-10">
<span className="text-[#FF6B35] font-semibold tracking-tight uppercase text-sm mb-2 block">Important Presentation</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white">Watch This 15-Minute Breakdown</h2>
</div>
<div className="relative group">

<div className="absolute -inset-1 bg-gradient-to-r from-[#FF6B35] to-purple-600 rounded-2xl opacity-30 blur-lg group-hover:opacity-50 transition duration-1000"></div>

<div className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 aspect-video shadow-2xl">

<div className="absolute inset-0 flex flex-col items-center justify-center bg-[url('https://images.unsplash.com/photo-1626544827763-d516dce335ca?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center">
<div className="absolute inset-0 bg-black/60"></div>
<button className="relative z-10 group/btn">
<div className="w-24 h-24 bg-[#FF6B35] rounded-full flex items-center justify-center pl-2 shadow-[0_0_40px_rgba(255,107,53,0.6)] animate-pulse-glow group-hover/btn:scale-110 transition-transform duration-300">
<span className="iconify text-white" data-height="40" data-icon="lucide:play" data-width="40"></span>
</div>
</button>
<p className="relative z-10 mt-6 text-white font-medium tracking-wide">Click to Play</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/20">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-semibold text-white mb-16 max-w-2xl">
                For businesses and brands struggling with...
            </h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="glass-panel p-8 rounded-2xl hover:border-[#FF6B35]/50 transition-colors duration-300 group">
<div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 text-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:trending-up" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold mb-4">Inconsistent views and leads</h3>
<p className="text-zinc-400 leading-relaxed text-sm">
                        Sales are up only when views are up. We help you find a winning format that consistently allows you to average high views to make organic more predictable.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:border-[#FF6B35]/50 transition-colors duration-300 group">
<div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 text-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:target" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold mb-4">Converting their audience</h3>
<p className="text-zinc-400 leading-relaxed text-sm">
                        Founders know either how to target or go viral, rarely both. We transform your messaging, positioning and CTAs so you can actually close your leads.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:border-[#FF6B35]/50 transition-colors duration-300 group">
<div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 text-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:zap" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold mb-4">Operations &amp; Consistency</h3>
<p className="text-zinc-400 leading-relaxed text-sm">
                        Most founders overthink or work too slow. We systemize your entire content creation process so that you can post 4-7x a week.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-[#FF6B35] opacity-[0.05] blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">How We Solve This</h2>
<div className="h-1 w-20 bg-[#FF6B35] mx-auto rounded-full"></div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="relative bg-zinc-900 border border-zinc-800 p-8 rounded-2xl overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="text-8xl font-bold text-white">1</span>
</div>
<div className="relative z-10">
<span className="iconify text-[#FF6B35] mb-6" data-icon="lucide:flask-conical" data-width="32"></span>
<h3 className="text-2xl font-semibold mb-4">Formats Testing System</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                            We systematically find and test content formats customized to you until we find your <span className="text-white font-medium">winning format</span> (averages 50k+ views and drives leads).
                        </p>
</div>
</div>

<div className="relative bg-zinc-900 border border-zinc-800 p-8 rounded-2xl overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="text-8xl font-bold text-white">2</span>
</div>
<div className="relative z-10">
<span className="iconify text-[#FF6B35] mb-6" data-icon="lucide:file-text" data-width="32"></span>
<h3 className="text-2xl font-semibold mb-4">DFY Scripting</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                            We handle any research and script it out fully / bullet listed so all you need to do is show up and record (we've found this increases output by 4x on average).
                        </p>
</div>
</div>

<div className="relative bg-zinc-900 border border-zinc-800 p-8 rounded-2xl overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="text-8xl font-bold text-white">3</span>
</div>
<div className="relative z-10">
<span className="iconify text-[#FF6B35] mb-6" data-icon="lucide:clapperboard" data-width="32"></span>
<h3 className="text-2xl font-semibold mb-4">DWY Consulting</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                            We'll consult on everything else (filming, recording up, b roll, general content strategy) ensuring your execution matches the strategy.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] border-y border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
<div className="lg:w-1/2">
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-8 leading-tight">
                    Why 40+ businesses have worked with us
                </h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<span className="iconify text-[#FF6B35]" data-icon="lucide:check-circle-2" data-width="24"></span>
</div>
<div>
<h4 className="text-lg font-semibold text-white mb-2">Revenue Focused Content</h4>
<p className="text-zinc-400 text-sm">Our top priority is always to attract high quality leads to your business, not tire kickers who'll never buy.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<span className="iconify text-[#FF6B35]" data-icon="lucide:crosshair" data-width="24"></span>
</div>
<div>
<h4 className="text-lg font-semibold text-white mb-2">Constraint Based Strategy</h4>
<p className="text-zinc-400 text-sm">We focus on the 80/20 of content strategy by ruthlessly finding and testing new formats, rather than obsessing over editing or lighting.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<span className="iconify text-[#FF6B35]" data-icon="lucide:rocket" data-width="24"></span>
</div>
<div>
<h4 className="text-lg font-semibold text-white mb-2">Get Results While You Learn</h4>
<p className="text-zinc-400 text-sm">We do 80% of the work. We're basically giving you a winning creative you can put a ton of ad spend behind for an amazing CPL.</p>
</div>
</div>
</div>
</div>
<div className="lg:w-1/2 w-full">
<div className="grid grid-cols-2 gap-4">
<div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 text-center animate-float" style={{animationDelay: '0s'}}>
<span className="block text-4xl md:text-5xl font-bold text-white mb-2">40+</span>
<span className="text-zinc-500 text-sm uppercase tracking-wide">Happy Clients</span>
</div>
<div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 text-center animate-float" style={{animationDelay: '1s'}}>
<span className="block text-4xl md:text-5xl font-bold text-[#FF6B35] mb-2">50k+</span>
<span className="text-zinc-500 text-sm uppercase tracking-wide">Avg Views</span>
</div>
<div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 text-center col-span-2 animate-float" style={{animationDelay: '2s'}}>
<span className="block text-4xl md:text-5xl font-bold text-white mb-2">90 Days</span>
<span className="text-zinc-500 text-sm uppercase tracking-wide">To Results</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-4xl font-semibold text-[#FF6B35] text-center mb-16">How the offer works</h2>
<div className="relative border-l border-zinc-800 ml-6 md:ml-0 md:pl-8 space-y-16">

<div className="relative pl-8 md:pl-0">
<div className="absolute -left-[9px] md:-left-[41px] top-0 w-4 h-4 rounded-full bg-[#FF6B35] shadow-[0_0_15px_rgba(255,107,53,0.5)]"></div>
<h3 className="text-2xl font-semibold text-white mb-4">1. Research → Brand Positioning</h3>
<div className="glass-panel p-6 rounded-xl">
<p className="text-zinc-400 text-sm leading-relaxed">
                            Most content coaches are overly focused on 'copying proven videos'. The real secret is in the market research. We understand your business and your avatar deeply THEN do research on your top competitors. These 2 areas will highlight the gap in the market, which creates your positioning. By doing this first, every single piece of content isn't only getting eyeballs but also building associations to create a brand that sells long term.
                        </p>
</div>
</div>

<div className="relative pl-8 md:pl-0">
<div className="absolute -left-[9px] md:-left-[41px] top-0 w-4 h-4 rounded-full bg-[#FF6B35] shadow-[0_0_15px_rgba(255,107,53,0.5)]"></div>
<h3 className="text-2xl font-semibold text-white mb-4">2. Testing Formats</h3>
<div className="glass-panel p-6 rounded-xl">
<p className="text-zinc-400 text-sm leading-relaxed">
                            Every week, we'll test 1-3 formats with 2-3 videos each. We are aggressively creating, posting and getting market feedback. Most coaches only follow 1 approach (reaction videos, talking heads, etc), but we create ORIGINAL formats based on your niche, avatar and market. This gives us the highest chance of finding a winning format. You'll notice a format originator always gets the best results.
                        </p>
</div>
</div>

<div className="relative pl-8 md:pl-0">
<div className="absolute -left-[9px] md:-left-[41px] top-0 w-4 h-4 rounded-full bg-[#FF6B35] shadow-[0_0_15px_rgba(255,107,53,0.5)]"></div>
<h3 className="text-2xl font-semibold text-white mb-4">3. Weekly Batching NOT Monthly</h3>
<div className="glass-panel p-6 rounded-xl">
<p className="text-zinc-400 text-sm leading-relaxed">
                            Every week, new formats go viral, you have new stories and experiences, and we have more data on what works for you. Hence why we NEVER batch months of content if we don't know what works. At the testing phase to find your winning format, you need fast feedback loops and execution.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] relative overflow-hidden" id="booking">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-black pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<h2 className="text-4xl md:text-5xl font-semibold text-[#FF6B35] mb-4 text-glow">Book Your FREE Strategy Call</h2>
<p className="text-white text-lg">Limited spots available - Apply now</p>
</div>
<div className="w-full h-[700px] glass-panel rounded-2xl border border-[#FF6B35]/30 overflow-hidden shadow-[0_0_50px_-10px_rgba(255,107,53,0.15)] relative">

<div className="absolute inset-0 flex items-center justify-center -z-10">
<span className="iconify animate-spin text-zinc-700" data-icon="lucide:loader-2" data-width="40"></span>
</div>

<iframe frameborder="0" height="100%" src="https://calendly.com/d/cpj9-j8w-cc8" width="100%"></iframe>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/10">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-4xl font-semibold text-white text-center mb-12">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group glass-panel rounded-lg open:border-[#FF6B35]/50 transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-lg text-white">
                        What's your pricing?
                        <span className="transition group-open:rotate-180">
<span className="iconify text-[#FF6B35]" data-icon="lucide:chevron-down" data-width="24"></span>
</span>
</summary>
<div className="text-zinc-400 mt-0 px-6 pb-6 text-sm leading-relaxed">
                        Flat fee upfront, flat fee upon hitting the outcome (average 50k+ views per video or generating agreed upon result) with a money back guaranteed if we don't hit it.
                    </div>
</details>

<details className="group glass-panel rounded-lg open:border-[#FF6B35]/50 transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-lg text-white">
                        How can you promise 50k+ views?
                        <span className="transition group-open:rotate-180">
<span className="iconify text-[#FF6B35]" data-icon="lucide:chevron-down" data-width="24"></span>
</span>
</summary>
<div className="text-zinc-400 mt-0 px-6 pb-6 text-sm leading-relaxed">
                        We can't. Every business and person is different. We use proven content strategy and frameworks and try our best. That's why we offer a money back guarantee. We don't believe in making money if you don't.
                    </div>
</details>

<details className="group glass-panel rounded-lg open:border-[#FF6B35]/50 transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-lg text-white">
                        How many hours do I need?
                        <span className="transition group-open:rotate-180">
<span className="iconify text-[#FF6B35]" data-icon="lucide:chevron-down" data-width="24"></span>
</span>
</summary>
<div className="text-zinc-400 mt-0 px-6 pb-6 text-sm leading-relaxed">
                        You'll need to allocate 10-15 hours per week (1-2 per day) to record and communicate. If organic is currently not a priority and you're looking for someone to just give you videos without doing any work. This is not for you.
                    </div>
</details>

<details className="group glass-panel rounded-lg open:border-[#FF6B35]/50 transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-lg text-white">
                        What if I'm just starting out?
                        <span className="transition group-open:rotate-180">
<span className="iconify text-[#FF6B35]" data-icon="lucide:chevron-down" data-width="24"></span>
</span>
</summary>
<div className="text-zinc-400 mt-0 px-6 pb-6 text-sm leading-relaxed">
                        We can still work with you but we can't offer you the guarantee / promise. In this case we'll offer you the promised amount of deliverables aka 3 months of 28 videos.
                    </div>
</details>

<details className="group glass-panel rounded-lg open:border-[#FF6B35]/50 transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-lg text-white">
                        What am I expected to do?
                        <span className="transition group-open:rotate-180">
<span className="iconify text-[#FF6B35]" data-icon="lucide:chevron-down" data-width="24"></span>
</span>
</summary>
<div className="text-zinc-400 mt-0 px-6 pb-6 text-sm leading-relaxed">
                        Record before every sunday of receiving scripts. Have an editor (or we can edit for you for a fee). Communicate within 36 hours. Weekly meeting. Give us all needed resources (sales calls, program, sops, etc).
                    </div>
</details>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 text-center">
<p className="text-zinc-600 text-sm">© 2024 ScaleYourBrand. All rights reserved.</p>
</footer>

    </>
  );
}
