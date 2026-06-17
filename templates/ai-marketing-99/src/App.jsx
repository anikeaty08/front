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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
<div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-sm tracking-widest font-medium text-neutral-400 hover:text-white transition-colors" href="#">GROWTHSTERAI</a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-light text-neutral-400 hover:text-white transition-colors" href="#">FEATURES</a>
<a className="text-sm font-light text-neutral-400 hover:text-white transition-colors" href="#">HOW IT WORKS</a>
</div>
</div>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
<span className="text-sm font-light tracking-widest">GROWTHSTERAI</span>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-light text-neutral-400 hover:text-white transition-colors" href="#">USE CASES</a>
<a className="text-sm font-light text-neutral-400 hover:text-white transition-colors" href="#">PRICING</a>
<a className="text-sm font-light text-neutral-400 hover:text-white transition-colors" href="#">BLOG</a>
<a className="bg-white text-black px-4 py-1.5 text-sm font-medium hover:bg-neutral-200 transition-colors" href="#">GET EARLY ACCESS</a>
</div>
</div>
</nav>

<section className="relative pt-40 pb-20 overflow-hidden flex flex-col items-center">

<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] rounded-full border border-white/10 hero-ring z-0 opacity-50"></div>
<div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[780px] h-[780px] md:w-[1180px] md:h-[1180px] rounded-full border border-white/5 z-0 opacity-30"></div>
<div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 flex flex-col items-center">
<div className="w-full flex justify-between items-start mb-16 text-xs font-light text-neutral-500 tracking-widest uppercase">
<span>Now in Early Access</span>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-center leading-[0.9] text-glow mb-8 uppercase">
                Marketing Made<br/>Unstoppable.
            </h1>
<div className="flex items-center gap-3 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-full px-5 py-2 mb-8">
<i className="w-4 h-4 text-neutral-400" data-lucide="cpu" strokeWidth="1.5"></i>
<span className="text-sm font-light text-neutral-300">The all-in-one AI marketing platform</span>
</div>
<p className="text-lg md:text-xl font-light text-neutral-400 text-center max-w-2xl leading-relaxed mb-12">
                GrowthsterAI gives your team the AI tools to write ads, automate campaigns, track performance, and dominate search — all from one platform. No subscriptions stacking up. No tool-switching. Just measurable growth.
            </p>
<div className="flex items-center gap-4">
<a className="bg-white text-black px-8 py-3 text-base font-medium hover:bg-neutral-200 transition-colors" href="#">Get Early Access</a>
<a className="px-8 py-3 text-base font-light text-neutral-300 hover:text-white transition-colors" href="#">See How It Works →</a>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-black">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
<div className="p-8 flex items-start justify-between group hover:bg-white/[0.02] transition-colors cursor-default">
<div>
<div className="flex items-center gap-2 mb-6 text-neutral-500">
<i className="w-4 h-4" data-lucide="zap" strokeWidth="1.5"></i>
<span className="text-xs tracking-widest uppercase">01</span>
</div>
<div className="text-4xl font-extralight tracking-tight mb-2">10x</div>
<div className="text-sm font-light text-neutral-400 uppercase tracking-widest">Faster content creation</div>
</div>
<div className="px-2 py-1 text-[10px] border border-white/10 text-neutral-500 tracking-widest uppercase">vs Manual</div>
</div>
<div className="p-8 flex items-start justify-between group hover:bg-white/[0.02] transition-colors cursor-default">
<div>
<div className="flex items-center gap-2 mb-6 text-neutral-500">
<i className="w-4 h-4" data-lucide="clock" strokeWidth="1.5"></i>
<span className="text-xs tracking-widest uppercase">02</span>
</div>
<div className="text-4xl font-extralight tracking-tight mb-2">20+</div>
<div className="text-sm font-light text-neutral-400 uppercase tracking-widest">Hours saved per team/week</div>
</div>
</div>
<div className="p-8 flex items-start justify-between group hover:bg-white/[0.02] transition-colors cursor-default">
<div>
<div className="flex items-center gap-2 mb-6 text-neutral-500">
<i className="w-4 h-4" data-lucide="layers" strokeWidth="1.5"></i>
<span className="text-xs tracking-widest uppercase">03</span>
</div>
<div className="text-4xl font-extralight tracking-tight mb-2">1,000+</div>
<div className="text-sm font-light text-neutral-400 uppercase tracking-widest">Campaigns manageable</div>
</div>
<div className="w-8 h-8 rounded bg-neutral-900 border border-white/5 flex items-center justify-center">
<i className="w-4 h-4 text-neutral-500" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 flex justify-center text-center bg-black">
<h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight max-w-5xl leading-tight uppercase">
<span className="text-neutral-500">STOP JUGGLING TOOLS.</span> START DRIVING RESULTS WITH THE <span className="border border-white/20 px-3 py-1 bg-white/5 inline-block mx-2">ALL-IN-ONE</span> PLATFORM THAT TURNS AI INTO MEASURABLE GROWTH.
        </h2>
</section>

<section className="border-t border-white/5 bg-[#030303] py-24">
<div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-20 items-start">

<div className="lg:sticky lg:top-32">
<h3 className="text-3xl md:text-4xl font-light tracking-tight mb-12 uppercase">HOW IT WORKS</h3>
<div className="space-y-4 mb-12">
<div className="border border-white/10 p-4 flex items-center gap-4 group cursor-pointer hover:border-white/30 transition-colors bg-white/5">
<span className="text-neutral-500 text-sm font-mono">01</span>
<div className="flex-1 text-sm font-light uppercase tracking-widest">Connect Your Channels</div>
</div>
<div className="border border-white/5 p-4 flex items-center gap-4 group cursor-pointer hover:border-white/30 transition-colors">
<span className="text-neutral-500 text-sm font-mono">02</span>
<div className="flex-1 text-sm font-light uppercase tracking-widest text-neutral-400 group-hover:text-white">Generate With AI</div>
</div>
<div className="border border-white/5 p-4 flex items-center gap-4 group cursor-pointer hover:border-white/30 transition-colors">
<span className="text-neutral-500 text-sm font-mono">03</span>
<div className="flex-1 text-sm font-light uppercase tracking-widest text-neutral-400 group-hover:text-white">Launch Campaigns</div>
</div>
</div>
<div className="relative w-full aspect-video border border-white/10 overflow-hidden bg-neutral-900 group">
<img alt="Data Analysis" className="w-full h-full object-cover opacity-50 mix-blend-luminosity group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 flex items-center gap-2">
<div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
<span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Optimizing Workspace...</span>
</div>
</div>
</div>

<div className="space-y-40 lg:mt-16">

<div className="relative">
<div className="absolute -left-12 top-0 text-9xl font-extralight text-white/5 select-none hidden lg:block -mt-8 -ml-8 tracking-tighter">01</div>
<div className="relative z-10">
<h4 className="text-3xl font-light tracking-tight mb-6">Connect Your Channels</h4>
<p className="text-lg font-light text-neutral-400 leading-relaxed mb-8 max-w-2xl">
                            Link your ad accounts, website, and marketing platforms in minutes. GrowthsterAI pulls everything into one intelligent workspace automatically.
                        </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-base font-light text-neutral-300">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-600"></div>
                                Platform Integration
                            </li>
<li className="flex items-center gap-3 text-base font-light text-neutral-300">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-600"></div>
                                Data Sync
                            </li>
<li className="flex items-center gap-3 text-base font-light text-neutral-300">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                                Ready State
                            </li>
</ul>
</div>
</div>

<div className="relative">
<div className="absolute -left-12 top-0 text-9xl font-extralight text-white/5 select-none hidden lg:block -mt-8 -ml-8 tracking-tighter">02</div>
<div className="relative z-10">
<h4 className="text-3xl font-light tracking-tight mb-6">Generate With AI</h4>
<p className="text-lg font-light text-neutral-400 leading-relaxed mb-8 max-w-2xl">
                            Use AI to instantly produce high-converting ad copy, campaign strategies, SEO content, and performance reports — on demand, in seconds.
                        </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-base font-light text-neutral-300">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                                Ad Copy Creation
                            </li>
<li className="flex items-center gap-3 text-base font-light text-neutral-300">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                                SEO Optimization
                            </li>
<li className="flex items-center gap-3 text-base font-light text-neutral-300">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                                A/B Variant Testing
                            </li>
</ul>
</div>
</div>

<div className="relative">
<div className="absolute -left-12 top-0 text-9xl font-extralight text-white/5 select-none hidden lg:block -mt-8 -ml-8 tracking-tighter">03</div>
<div className="relative z-10">
<h4 className="text-3xl font-light tracking-tight mb-6">Launch Campaigns</h4>
<p className="text-lg font-light text-neutral-400 leading-relaxed mb-8 max-w-2xl">
                            Deploy campaigns across every channel with one click. AI handles targeting, scheduling, and budget distribution automatically.
                        </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-base font-light text-neutral-300">
<div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                                Multi-Channel Deployment
                            </li>
<li className="flex items-center gap-3 text-base font-light text-neutral-300">
<div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                                Budget Allocation
                            </li>
<li className="flex items-center gap-3 text-base font-light text-neutral-300">
<div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                                Live Monitoring
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 bg-black py-32">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex justify-between items-end mb-16">
<div>
<h3 className="text-4xl font-light tracking-tight uppercase mb-2">CAPABILITIES</h3>
<p className="text-sm font-light text-neutral-500 tracking-widest uppercase">/ FEATURES / PLATFORM</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">

<div className="relative group overflow-hidden border border-white/5 bg-neutral-900 lg:col-span-2 lg:row-span-2">
<img alt="AI Copy" className="w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-50 transition-all duration-700" src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&amp;w=2606&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<p className="text-sm font-light text-neutral-400 uppercase tracking-widest mb-2">01 // Generate</p>
<h4 className="text-2xl font-light tracking-tight mb-2 uppercase">AI Ad Copy &amp; Content</h4>
<p className="text-base font-light text-neutral-300 max-w-md hidden md:block">Generate high-converting ad copy, social posts, email sequences, and landing pages in seconds.</p>
</div>
</div>

<div className="relative group overflow-hidden border border-white/5 bg-neutral-900">
<img alt="Automation" className="w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-50 transition-all duration-700" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<p className="text-xs font-light text-neutral-400 uppercase tracking-widest mb-1">02 // Deploy</p>
<h4 className="text-xl font-light tracking-tight uppercase">Campaign Automation</h4>
</div>
</div>

<div className="relative group overflow-hidden border border-white/5 bg-neutral-900">
<img alt="Analytics" className="w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-50 transition-all duration-700" src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<p className="text-xs font-light text-neutral-400 uppercase tracking-widest mb-1">03 // Track</p>
<h4 className="text-xl font-light tracking-tight uppercase">Analytics &amp; Reporting</h4>
</div>
</div>

<div className="relative group overflow-hidden border border-white/5 bg-neutral-900 lg:col-span-2">
<img alt="SEO" className="w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-50 transition-all duration-700" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 md:top-1/2 md:-translate-y-1/2 md:bottom-auto">
<p className="text-xs font-light text-neutral-400 uppercase tracking-widest mb-1">04 // Optimize</p>
<h4 className="text-2xl font-light tracking-tight uppercase">SEO &amp; Growth Optimization</h4>
</div>
</div>

<div className="relative group overflow-hidden border border-white/5 bg-neutral-900">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-black opacity-50"></div>
<div className="absolute inset-0 flex items-center justify-center text-white/5 group-hover:text-white/10 transition-colors">
<i className="w-32 h-32" data-lucide="layers" strokeWidth="0.5"></i>
</div>
<div className="absolute bottom-6 left-6 right-6">
<p className="text-xs font-light text-neutral-400 uppercase tracking-widest mb-1">05 // Workspace</p>
<h4 className="text-xl font-light tracking-tight uppercase">All-in-One Platform</h4>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 bg-[#030303] py-32">
<div className="max-w-[1400px] mx-auto px-6">
<h3 className="text-3xl md:text-4xl font-light tracking-tight text-center uppercase mb-16">
                FOUNDER <span className="text-neutral-500">FEEDBACK</span>
</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="border border-white/5 bg-black p-10 flex flex-col justify-between group hover:border-white/10 transition-colors">
<p className="text-base font-light text-neutral-300 leading-relaxed mb-12">
                        "We replaced four different marketing tools with GrowthsterAI in the first week. The AI copy alone saves our team over 15 hours every month — and the output is better than what we wrote manually."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-white flex items-center justify-center text-black font-medium text-lg">
                            S
                        </div>
<div>
<div className="text-sm font-medium tracking-wide uppercase">Sarah Lim</div>
<div className="text-xs font-light text-neutral-500 uppercase tracking-widest">Head of Growth, Momentum Agency</div>
</div>
</div>
</div>

<div className="border border-white/5 bg-black p-10 flex flex-col justify-between group hover:border-white/10 transition-colors">
<p className="text-base font-light text-neutral-300 leading-relaxed mb-12">
                        "Our campaign performance improved by 40% in the first 30 days. The automation does what used to take our entire team — and it does it better."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 border border-white/20 flex items-center justify-center text-white font-medium text-lg">
                            J
                        </div>
<div>
<div className="text-sm font-medium tracking-wide uppercase">James Okafor</div>
<div className="text-xs font-light text-neutral-500 uppercase tracking-widest">Founder &amp; CEO, BluePeak Labs</div>
</div>
</div>
</div>

<div className="border border-white/5 bg-black p-10 flex flex-col justify-between group hover:border-white/10 transition-colors">
<p className="text-base font-light text-neutral-300 leading-relaxed mb-12">
                        "The SEO recommendations alone are worth ten times what we pay. GrowthsterAI found keyword gaps we had been missing for months and fixed them in hours."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-neutral-800 flex items-center justify-center text-white font-medium text-lg">
                            P
                        </div>
<div>
<div className="text-sm font-medium tracking-wide uppercase">Priya Mehta</div>
<div className="text-xs font-light text-neutral-500 uppercase tracking-widest">Director of Marketing, Syntax Studio</div>
</div>
</div>
</div>
</div>
<div className="flex justify-center gap-2 mt-12">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
<div className="w-1.5 h-1.5 rounded-full bg-neutral-800"></div>
<div className="w-1.5 h-1.5 rounded-full bg-neutral-800"></div>
</div>
</div>
</section>

<section className="border-t border-white/5 bg-black py-40 relative overflow-hidden flex justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none"></div>
<div className="text-center relative z-10 px-6">
<h2 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 uppercase text-glow">
                READY TO <span className="text-neutral-500">GROW?</span>
</h2>
<p className="text-xl font-light text-neutral-400 mb-12 max-w-lg mx-auto">
                Join the waitlist today. Be among the first to experience the future of marketing — and lock in exclusive founding member pricing.
            </p>
<a className="inline-block bg-white text-black px-10 py-4 text-sm font-medium tracking-widest uppercase hover:bg-neutral-200 transition-colors" href="#">
                CLAIM YOUR EARLY ACCESS
            </a>
</div>
</section>

<section className="border-t border-white/5 bg-[#030303] pt-24 pb-8">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">

<div>
<h3 className="text-2xl font-light tracking-tight uppercase mb-6">JOIN THE WAITLIST</h3>
<p className="text-base font-light text-neutral-400 max-w-sm leading-relaxed mb-12">
                        Fill out your details to get early access. Our system will categorize your request and priority access will be granted within 24 hours.
                    </p>
<div className="space-y-4">
<div className="flex items-center gap-4 text-sm font-light text-neutral-300">
<i className="w-4 h-4 text-neutral-500" data-lucide="mail" strokeWidth="1.5"></i>
                            hello@growthsterai.com
                        </div>
<div className="flex items-center gap-4 text-sm font-light text-neutral-300">
<i className="w-4 h-4 text-neutral-500" data-lucide="map-pin" strokeWidth="1.5"></i>
                            Global // Node 01
                        </div>
</div>
</div>

<div>
<form className="space-y-8">
<div className="border-b border-white/10 pb-4">
<label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-2">NAME</label>
<input className="w-full bg-transparent border-none outline-none text-base font-light text-white placeholder-neutral-800" placeholder="Jane Doe" type="text"/>
</div>
<div className="border-b border-white/10 pb-4">
<label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-2">EMAIL ADDRESS</label>
<input className="w-full bg-transparent border-none outline-none text-base font-light text-white placeholder-neutral-800" placeholder="jane@company.com" type="email"/>
</div>
<div className="border-b border-white/10 pb-4">
<label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-2">COMPANY</label>
<input className="w-full bg-transparent border-none outline-none text-base font-light text-white placeholder-neutral-800" placeholder="Company Name" type="text"/>
</div>
<div className="pt-4">
<button className="flex items-center gap-2 text-sm tracking-widest uppercase font-medium hover:text-neutral-400 transition-colors" type="button">
                                REQUEST ACCESS <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</form>
</div>
</div>

<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-8">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
<span className="text-sm font-medium tracking-widest uppercase">GROWTHSTERAI</span>
</div>
<div className="hidden md:flex gap-6 text-[10px] uppercase tracking-widest text-neutral-500">
<a className="hover:text-white transition-colors" href="#">PRIVACY POLICY</a>
<a className="hover:text-white transition-colors" href="#">TERMS OF SERVICE</a>
</div>
</div>
<div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
<span className="text-[10px] uppercase tracking-widest text-neutral-600">
                        © 2025 GROWTHSTERAI, INC. // ALL RIGHTS RESERVED
                    </span>
<div className="flex items-center gap-6 text-[10px] uppercase tracking-widest text-neutral-500">
<a className="flex items-center gap-2 hover:text-white transition-colors" href="#">
<i className="w-3 h-3" data-lucide="twitter" strokeWidth="1.5"></i> TWITTER
                        </a>
<a className="flex items-center gap-2 hover:text-white transition-colors" href="#">
<i className="w-3 h-3" data-lucide="linkedin" strokeWidth="1.5"></i> LINKEDIN
                        </a>
<a className="flex items-center gap-2 hover:text-white transition-colors" href="#">
<i className="w-3 h-3" data-lucide="instagram" strokeWidth="1.5"></i> INSTAGRAM
                        </a>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
