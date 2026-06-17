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
background: '#071119',
surface: '#000a0c',
primary: '#005A3D',
primaryLight: '#009E73',
accent: '#00c3c3',
text: '#d1d5db',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}

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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-white/5 bg-[#071119]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primaryLight to-primary flex items-center justify-center text-white font-semibold tracking-tighter">EM</div>
<span className="text-white font-medium tracking-tight">Email Magnet</span>
</div>
<div className="hidden md:flex gap-8 text-sm font-normal text-gray-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm text-gray-300 hover:text-white transition-colors" href="#">Log in</a>
<button className="bg-white text-black px-5 py-2.5 rounded-3xl text-sm font-semibold hover:bg-gray-100 transition-colors">
                    Install Now
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] animate-color-change opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute top-20 right-0 w-[500px] h-[500px] animate-color-change-delayed opacity-15 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs font-medium mb-8 backdrop-blur-sm">
<iconify-icon className="text-primaryLight" icon="lucide:sparkles" strokeWidth="1.5" width="12"></iconify-icon>
<span>AI trained on 10,000+ top campaigns</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.15] max-w-4xl mb-6">
                AI That Knows Your Store. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Popups That Just Work.</span>
</h1>
<p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 font-normal leading-relaxed">
                Create high-converting Shopify popups in 60 seconds using simple chat commands. No design skills. No manual A/B testing. Just results.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-16">
<button className="bg-white text-black px-8 py-3.5 rounded-3xl text-base font-semibold hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2">
                    Generate My First Popup
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="bg-transparent border border-gray-700 text-white px-8 py-3.5 rounded-3xl text-base font-medium hover:border-gray-500 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="lucide:play-circle" strokeWidth="1.5" width="18"></iconify-icon>
                    Watch Demo
                </button>
</div>

<div className="w-full max-w-4xl relative group perspective-1000">
<div className="absolute -inset-1 animate-color-change rounded-t-2xl opacity-20 blur transition duration-1000 group-hover:opacity-40"></div>
<div className="relative bg-surface border border-white/10 rounded-t-2xl p-4 md:p-8 shadow-2xl overflow-hidden">

<div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="mx-auto text-xs text-gray-500 font-mono">Email Magnet AI Editor</div>
</div>
<div className="flex flex-col gap-4 text-left font-normal text-sm md:text-base">

<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-xs text-white border border-white/10">AI</div>
<div className="bg-gray-800/50 text-gray-200 px-4 py-2.5 rounded-2xl rounded-tl-none max-w-md border border-white/5">
                                I've analyzed your store. It looks like you're selling sustainable sneakers. Want me to create a "10% Off" popup targeting new visitors?
                            </div>
</div>

<div className="flex items-start gap-3 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs text-white">Me</div>
<div className="bg-primary/20 text-primaryLight px-4 py-2.5 rounded-2xl rounded-tr-none max-w-md border border-primary/20">
                                Yes, make it dark mode with green accents. Add a countdown timer.
                            </div>
</div>

<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-xs text-white border border-white/10">AI</div>
<div className="flex flex-col gap-3 max-w-lg w-full">
<div className="bg-gray-800/50 text-gray-200 px-4 py-2.5 rounded-2xl rounded-tl-none border border-white/5">
                                    Done! Here is your high-converting popup. Ready to publish?
                                </div>

<div className="bg-[#071119] border border-white/10 rounded-xl p-6 relative overflow-hidden shadow-lg group-hover:shadow-primary/20 transition-all duration-500">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px]"></div>
<div className="relative z-10 flex flex-col md:flex-row gap-6 items-center">
<div className="w-full md:w-1/2">
<h3 className="text-2xl text-white font-semibold tracking-tight mb-2">Get 10% Off</h3>
<p className="text-gray-400 text-xs mb-4">Your sustainable journey starts here.</p>
<div className="flex gap-2">
<input className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs w-full" placeholder="Email address" type="email"/>
<button className="bg-primaryLight text-white px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap">Unlock</button>
</div>
<div className="mt-3 flex items-center gap-1 text-[10px] text-accent">
<iconify-icon icon="lucide:timer" width="12"></iconify-icon>
                                                Offer ends in 14:59
                                            </div>
</div>
<div className="w-full md:w-1/2 h-32 bg-gray-800 rounded-lg flex items-center justify-center border border-white/5">
<iconify-icon className="text-gray-600" icon="lucide:image" width="32"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-[#050c12]">
<div className="max-w-7xl mx-auto px-6 py-10">
<p className="text-center text-xs font-medium text-gray-500 mb-8 uppercase tracking-widest">Trusted by fast-growing brands</p>
<div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-white font-semibold text-lg"><iconify-icon icon="lucide:triangle"></iconify-icon> APEX</div>
<div className="flex items-center gap-2 text-white font-semibold text-lg"><iconify-icon icon="lucide:hexagon"></iconify-icon> VOLT</div>
<div className="flex items-center gap-2 text-white font-semibold text-lg"><iconify-icon icon="lucide:circle"></iconify-icon> ORBIT</div>
<div className="flex items-center gap-2 text-white font-semibold text-lg"><iconify-icon icon="lucide:box"></iconify-icon> CUBE</div>
<div className="flex items-center gap-2 text-white font-semibold text-lg"><iconify-icon icon="lucide:zap"></iconify-icon> SPARK</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6 leading-[1.3]">The "Silent Killer" of Ecommerce Revenue</h2>
<p className="text-gray-400 text-lg mb-6 font-normal leading-relaxed">
                        Most store owners focus on traffic, but ignore retention. The harsh reality is that the vast majority of your paid traffic leaves without a trace.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 mt-1" icon="lucide:x-circle" width="20"></iconify-icon>
<span className="text-gray-300">Generic popups are annoying and ignored</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 mt-1" icon="lucide:x-circle" width="20"></iconify-icon>
<span className="text-gray-300">Design tools are too complex for quick edits</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 mt-1" icon="lucide:x-circle" width="20"></iconify-icon>
<span className="text-gray-300">Manual A/B testing takes weeks of data</span>
</li>
</ul>
</div>
<div className="bg-surface rounded-t-2xl border-t border-white/10 p-10 md:p-16 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent pointer-events-none"></div>
<div className="text-[120px] md:text-[160px] font-bold text-white leading-none tracking-tighter opacity-90">97<span className="text-4xl align-top mt-8 inline-block">%</span></div>
<p className="text-xl text-gray-400 mt-4">of visitors leave without buying</p>
<p className="text-sm text-gray-600 mt-2">Source: Baymard Institute Average</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050c12] relative" id="features">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Features that feel like magic</h2>
<p className="text-gray-400">Everything you need to capture leads, powered by advanced AI.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-surface border-t border-white/10 rounded-t-2xl p-8 hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primaryLight mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:message-square" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Conversational Builder</h3>
<p className="text-gray-400 leading-relaxed font-normal">Just ask for what you want. "Make the button bigger," "Change to Christmas theme," or "Add a countdown."</p>
</div>

<div className="bg-surface border-t border-white/10 rounded-t-2xl p-8 hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:wand-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Auto-Optimizing</h3>
<p className="text-gray-400 leading-relaxed font-normal">Our AI automatically tests headlines and colors against 10M+ data points to find the winner.</p>
</div>

<div className="bg-surface border-t border-white/10 rounded-t-2xl p-8 hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Instant Publish</h3>
<p className="text-gray-400 leading-relaxed font-normal">One click connects directly to your Shopify theme. No code injection or developer needed.</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">From Zero to Leads in 4 Steps</h2>
</div>
<div className="grid md:grid-cols-4 gap-4 relative">

<div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-primaryLight to-gray-800 -z-10 opacity-30"></div>

<div className="relative">
<div className="w-16 h-16 rounded-full bg-[#071119] border border-primaryLight flex items-center justify-center text-primaryLight font-bold text-xl mb-6 shadow-[0_0_15px_rgba(0,158,115,0.3)]">1</div>
<h4 className="text-lg font-semibold text-white mb-2">Install App</h4>
<p className="text-sm text-gray-400">Connect Email Magnet to your Shopify store with one click permissions.</p>
</div>

<div className="relative">
<div className="w-16 h-16 rounded-full bg-[#071119] border border-gray-700 flex items-center justify-center text-white font-bold text-xl mb-6">2</div>
<h4 className="text-lg font-semibold text-white mb-2">AI Analysis</h4>
<p className="text-sm text-gray-400">Our brain scans your products and brand style to suggest campaigns.</p>
</div>

<div className="relative">
<div className="w-16 h-16 rounded-full bg-[#071119] border border-gray-700 flex items-center justify-center text-white font-bold text-xl mb-6">3</div>
<h4 className="text-lg font-semibold text-white mb-2">Chat &amp; Edit</h4>
<p className="text-sm text-gray-400">Refine the design using natural language. "Make it more urgent."</p>
</div>

<div className="relative">
<div className="w-16 h-16 rounded-full bg-[#071119] border border-gray-700 flex items-center justify-center text-white font-bold text-xl mb-6">4</div>
<h4 className="text-lg font-semibold text-white mb-2">Go Live</h4>
<p className="text-sm text-gray-400">Publish instantly and watch your email list grow automatically.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050c12]">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-12 text-center">Why Merchants Love Email Magnet</h2>
<div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 bg-surface rounded-t-2xl border-t border-white/10 p-8 md:p-12 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white mb-6">
<iconify-icon icon="lucide:smartphone" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-4">Mobile-First By Default</h3>
<p className="text-gray-400 max-w-md">Google penalizes intrusive interstitials. Our AI ensures every popup is compliant, user-friendly, and responsive on all devices without you lifting a finger.</p>
</div>

<div className="mt-8 flex gap-4 justify-center md:justify-start">
<div className="w-24 h-48 bg-gray-800 rounded-lg border border-white/10 relative overflow-hidden shadow-xl">
<div className="absolute inset-x-2 top-10 h-24 bg-[#071119] rounded border border-primary/30 flex items-center justify-center">
<span className="text-[8px] text-primaryLight">Popup</span>
</div>
</div>
<div className="w-24 h-48 bg-gray-800 rounded-lg border border-white/10 relative overflow-hidden shadow-xl opacity-50 scale-90"></div>
</div>
</div>
</div>

<div className="bg-surface rounded-t-2xl border-t border-white/10 p-8 group hover:bg-white/5 transition-colors">
<div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white mb-4">
<iconify-icon icon="lucide:layers" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Theme Compatible</h3>
<p className="text-sm text-gray-400">Works perfectly with Dawn, Prestige, Impulse, and 100+ other Shopify themes.</p>
</div>

<div className="bg-surface rounded-t-2xl border-t border-white/10 p-8 group hover:bg-white/5 transition-colors">
<div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white mb-4">
<iconify-icon icon="lucide:bar-chart-3" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Smart Analytics</h3>
<p className="text-sm text-gray-400">Real-time dashboard showing impressions, clicks, and revenue generated.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-gradient-to-b from-[#071119] to-[#000a0c]">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">More Emails = More Revenue</h2>
<p className="text-gray-400 mb-12">Email marketing has the highest ROI of any channel ($42 for every $1 spent). Stop letting subscribers slip away.</p>
<div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
<div>
<div className="text-4xl md:text-5xl font-bold text-primaryLight mb-2">+15%</div>
<div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Conversion Rate</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-bold text-primaryLight mb-2">2.4x</div>
<div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Email List Growth</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-bold text-primaryLight mb-2">60s</div>
<div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Setup Time</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center gap-2 mb-10">
<iconify-icon className="text-yellow-500" fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
<iconify-icon className="text-yellow-500" fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
<iconify-icon className="text-yellow-500" fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
<iconify-icon className="text-yellow-500" fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
<iconify-icon className="text-yellow-500" fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
<span className="text-white ml-2 font-medium">Loved by merchants</span>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-surface rounded-t-2xl border-t border-white/10 p-8">
<p className="text-gray-300 text-lg mb-6 leading-relaxed">"I used to pay a designer $100 for every popup. Now I just tell Email Magnet what I want and it's done in seconds. The designs are incredibly clean."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-sm font-semibold text-white">SJ</div>
<div>
<div className="text-white text-sm font-semibold">Sarah Jenkins</div>
<div className="text-gray-500 text-xs">Founder, Earthly Goods</div>
</div>
</div>
</div>

<div className="bg-surface rounded-t-2xl border-t border-white/10 p-8">
<p className="text-gray-300 text-lg mb-6 leading-relaxed">"The A/B testing feature is a game changer. It automatically found that a green button worked better than my brand's black one."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-sm font-semibold text-white">MR</div>
<div>
<div className="text-white text-sm font-semibold">Mike Ross</div>
<div className="text-gray-500 text-xs">CMO, Urban Kicks</div>
</div>
</div>
</div>

<div className="bg-surface rounded-t-2xl border-t border-white/10 p-8">
<p className="text-gray-300 text-lg mb-6 leading-relaxed">"Installation was actually one click. It didn't mess up my theme code like other apps. Highly recommend for non-techies."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-sm font-semibold text-white">EL</div>
<div>
<div className="text-white text-sm font-semibold">Emma Liu</div>
<div className="text-gray-500 text-xs">Owner, Petal &amp; Stem</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050c12]" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6 text-center">Simple Pricing</h2>
<p className="text-gray-400 text-center mb-16">Start for free, scale as you grow.</p>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="bg-[#071119] rounded-2xl border border-white/10 p-10 flex flex-col relative">
<h3 className="text-xl font-semibold text-white mb-2">Starter</h3>
<div className="text-4xl font-bold text-white mb-6">$0<span className="text-lg text-gray-500 font-normal">/mo</span></div>
<p className="text-gray-400 mb-8 text-sm">Perfect for new stores just getting started.</p>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-primaryLight" icon="lucide:check"></iconify-icon> 500 views / month
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-primaryLight" icon="lucide:check"></iconify-icon> Standard templates
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-primaryLight" icon="lucide:check"></iconify-icon> Email support
                        </li>
</ul>
<button className="w-full bg-white/5 text-white border border-white/10 py-3 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors">Start Free</button>
</div>

<div className="bg-surface rounded-2xl p-10 flex flex-col relative border border-primaryLight/50 shadow-[0_0_30px_rgba(0,158,115,0.1)]">
<div className="absolute top-0 right-0 bg-primaryLight text-black text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl uppercase tracking-wider">Popular</div>
<h3 className="text-xl font-semibold text-white mb-2">Growth</h3>
<div className="text-4xl font-bold text-white mb-6">$29<span className="text-lg text-gray-500 font-normal">/mo</span></div>
<p className="text-gray-400 mb-8 text-sm">For brands ready to scale revenue.</p>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-primaryLight" icon="lucide:check"></iconify-icon> Unlimited views
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-primaryLight" icon="lucide:check"></iconify-icon> AI Chat Builder (Unlimited)
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-primaryLight" icon="lucide:check"></iconify-icon> A/B Testing
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-primaryLight" icon="lucide:check"></iconify-icon> Remove Branding
                        </li>
</ul>
<button className="w-full bg-white text-black py-3 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors">Get Started</button>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-12 text-center">Common Questions</h2>
<div className="space-y-4">
<details className="group bg-surface rounded-t-2xl border-t border-white/10 overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-white transition-colors hover:text-primaryLight">
                    Will this slow down my store?
                    <iconify-icon className="transition-transform duration-300 group-open:rotate-180" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                    Absolutely not. Our script is ultra-lightweight (less than 5kb) and loads asynchronously, meaning it won't impact your Core Web Vitals or page load speed.
                </div>
</details>
<details className="group bg-surface rounded-t-2xl border-t border-white/10 overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-white transition-colors hover:text-primaryLight">
                    Does it work on mobile?
                    <iconify-icon className="transition-transform duration-300 group-open:rotate-180" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                    Yes, all popups generated by Email Magnet are fully responsive. We also ensure compliance with Google's mobile interstitial policies.
                </div>
</details>
<details className="group bg-surface rounded-t-2xl border-t border-white/10 overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-white transition-colors hover:text-primaryLight">
                    Is it GDPR compliant?
                    <iconify-icon className="transition-transform duration-300 group-open:rotate-180" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                    Yes. We include built-in features for consent checkboxes and double opt-in support to ensure you remain compliant with GDPR and CCPA regulations.
                </div>
</details>
<details className="group bg-surface rounded-t-2xl border-t border-white/10 overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-white transition-colors hover:text-primaryLight">
                    Can I remove the branding?
                    <iconify-icon className="transition-transform duration-300 group-open:rotate-180" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                    Yes, "Powered by Email Magnet" branding can be removed on our Growth plan and above.
                </div>
</details>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-8">Ready to grow your list?</h2>
<p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-normal">Join 2,000+ Shopify merchants using AI to capture leads without the design headache.</p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-6">
<button className="bg-white text-black px-10 py-4 rounded-3xl text-lg font-semibold hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                    Install on Shopify
                </button>
</div>
<p className="mt-6 text-sm text-gray-500">No credit card required • 14-day free trial</p>
</div>
</section>

<footer className="border-t border-white/10 bg-[#050c12] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-gradient-to-br from-primaryLight to-primary flex items-center justify-center text-white text-xs font-semibold">EM</div>
<span className="text-white font-medium">Email Magnet</span>
</div>
<p className="text-sm text-gray-500 mb-6">AI-powered popup builder for the modern ecommerce stack.</p>
<div className="flex gap-4 text-gray-400">
<iconify-icon className="hover:text-white cursor-pointer" icon="lucide:twitter" width="18"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer" icon="lucide:github" width="18"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer" icon="lucide:linkedin" width="18"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Product</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-primaryLight transition-colors" href="#">Features</a></li>
<li><a className="hover:text-primaryLight transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-primaryLight transition-colors" href="#">Templates</a></li>
<li><a className="hover:text-primaryLight transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Resources</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-primaryLight transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-primaryLight transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-primaryLight transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-primaryLight transition-colors" href="#">API Docs</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Legal</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-primaryLight transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-primaryLight transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-primaryLight transition-colors" href="#">GDPR</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-600">© 2024 Email Magnet AI. All rights reserved.</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs text-gray-500">Systems Operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
