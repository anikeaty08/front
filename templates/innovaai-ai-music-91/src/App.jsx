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
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute inset-0 grid-bg opacity-40"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-indigo-900/20 blur-[120px] rounded-full"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030304]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-fuchsia-500 rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="waves" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-white">InnovaAI</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">About Us</a>
</div>
<div className="flex items-center gap-6">
<a className="hidden md:block text-sm font-medium hover:text-white transition-colors" href="#">Log in</a>
<button className="text-xs font-medium bg-white/10 hover:bg-white/20 border border-white/10 rounded-full px-5 py-2 transition-all text-white">
                    Get Started
                </button>
</div>
</div>
</nav>

<header className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-indigo-300 mb-8 hover:bg-white/10 cursor-pointer transition-colors">
<span>Start Your Journey with InnovaAI Music</span>
<i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                Transform Music Creation <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">with Powerful AI</span>
<span className="align-top text-2xl text-indigo-400">+</span>
</h1>
<p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
                Discover the future of music production with InnovaAI. Effortlessly create, edit, and perfect your tracks using state-of-the-art algorithms.
            </p>
<button className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-600 text-white font-medium text-sm hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.5)] transition-all">
                Get Started for Free
            </button>
</div>

<div className="mt-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card rounded-3xl p-6 relative overflow-hidden group">
<div className="flex justify-between items-start mb-8">
<div>
<div className="text-3xl font-medium text-white tracking-tight">1,632</div>
<div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Clicks</div>
</div>
<div className="w-8 h-1 bg-white/20 rounded-full"></div>
</div>

<div className="h-24 w-full relative mb-6">
<svg className="w-full h-full stroke-indigo-500 fill-indigo-500/10" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0,40 L0,30 C10,30 10,10 20,15 C30,20 30,5 40,10 C50,15 50,25 60,20 C70,15 70,35 80,25 C90,15 90,5 100,0 L100,40 Z"></path>
</svg>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1a1a1c] border border-white/10 px-3 py-1 rounded-full text-xs flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span> Popular
                    </div>
</div>
<h3 className="text-base font-medium text-white mb-2">Popularity Insights</h3>
<p className="text-sm text-gray-400 leading-relaxed">Gain insights into current trends and analyze the popularity of different genres.</p>
</div>

<div className="glass-card rounded-3xl p-6 relative overflow-hidden">
<div className="flex justify-center items-center gap-4 mb-10 mt-4">
<div className="w-12 h-14 border border-white/10 rounded-lg bg-white/5 flex flex-col items-center justify-center gap-1">
<div className="w-6 h-1 bg-white/20 rounded-full"></div>
<div className="w-4 h-1 bg-white/20 rounded-full"></div>
<span className="text-[10px] text-gray-400 font-bold mt-1">DOC</span>
</div>
<div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center">
<i className="w-4 h-4 text-indigo-400" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
<div className="w-12 h-14 border border-indigo-500/30 rounded-lg bg-indigo-500/10 flex flex-col items-center justify-center gap-1">
<i className="w-4 h-4 text-indigo-400" data-lucide="music" strokeWidth="1.5"></i>
<span className="text-[10px] text-indigo-300 font-bold mt-1">MP3</span>
</div>
</div>

<div className="flex items-end justify-center gap-1 h-8 mb-6 opacity-50">
<div className="w-1 bg-indigo-500 h-2 rounded-full animate-pulse"></div>
<div className="w-1 bg-indigo-500 h-4 rounded-full"></div>
<div className="w-1 bg-indigo-500 h-6 rounded-full animate-pulse delay-75"></div>
<div className="w-1 bg-indigo-500 h-3 rounded-full"></div>
<div className="w-1 bg-indigo-500 h-8 rounded-full animate-pulse delay-100"></div>
<div className="w-1 bg-indigo-500 h-4 rounded-full"></div>
<div className="w-1 bg-indigo-500 h-2 rounded-full"></div>
</div>
<h3 className="text-base font-medium text-white mb-2">Versatile File Conversion</h3>
<p className="text-sm text-gray-400 leading-relaxed">Effortlessly convert your music into various formats to ensure compatibility.</p>
</div>

<div className="glass-card rounded-3xl p-6 relative overflow-hidden">
<div className="flex justify-between items-start mb-6">
<div>
<div className="text-3xl font-medium text-white tracking-tight">68%</div>
<div className="flex items-center gap-2 mt-1">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
<div className="text-xs text-gray-500">Engagement rate</div>
</div>
</div>
<div className="w-8 h-1 bg-white/20 rounded-full"></div>
</div>
<div className="flex items-end gap-2 h-24 mb-6 px-2">
<div className="w-full bg-white/5 rounded-t-sm h-[40%] border-t border-x border-white/10 relative group hover:bg-white/10 transition-colors"></div>
<div className="w-full bg-white/5 rounded-t-sm h-[60%] border-t border-x border-white/10 relative group hover:bg-white/10 transition-colors"></div>
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[80%] border-t border-x border-indigo-500/50 relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] bg-white text-black px-1.5 py-0.5 rounded font-bold">68%</div>
</div>
<div className="w-full bg-white/5 rounded-t-sm h-[30%] border-t border-x border-white/10 relative group hover:bg-white/10 transition-colors"></div>
</div>
<h3 className="text-base font-medium text-white mb-2">High Accuracy Rate</h3>
<p className="text-sm text-gray-400 leading-relaxed">Benefit from state-of-the-art AI algorithms that deliver high accuracy.</p>
</div>
</div>
</header>

<section className="border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 py-12">
<p className="text-center text-sm text-gray-500 mb-8">Trusted by thousands from worldwide</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-xl font-semibold"><i data-lucide="infinity" strokeWidth="2"></i> afterpay</div>
<div className="flex items-center gap-2 text-xl font-semibold"><i data-lucide="triangle" strokeWidth="2"></i> Amplitude</div>
<div className="flex items-center gap-2 text-xl font-semibold tracking-widest">SONOS</div>
<div className="flex items-center gap-2 text-xl font-semibold"><i data-lucide="zap" strokeWidth="2"></i> maze</div>
<div className="flex items-center gap-2 text-xl font-semibold"><i data-lucide="droplet" strokeWidth="2"></i> drips</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
<div className="relative group">
<div className="w-12 h-0.5 bg-indigo-500 mb-6 group-hover:w-full transition-all duration-500 ease-out"></div>
<span className="text-xs font-medium text-gray-500 mb-2 block">01.</span>
<h3 className="text-lg font-medium text-white mb-3">Create Sound Track</h3>
<p className="text-sm text-gray-400 leading-relaxed">Begin by uploading an existing track or start composing from scratch using InnovaAI.</p>
</div>
<div className="relative group">
<div className="w-12 h-0.5 bg-gray-700 mb-6 group-hover:w-full group-hover:bg-indigo-500 transition-all duration-500 ease-out"></div>
<span className="text-xs font-medium text-gray-500 mb-2 block">02.</span>
<h3 className="text-lg font-medium text-white mb-3">Leverage AI-Powered</h3>
<p className="text-sm text-gray-400 leading-relaxed">Advanced AI algorithms to generate unique melodies and harmonies that fit your style.</p>
</div>
<div className="relative group">
<div className="w-12 h-0.5 bg-gray-700 mb-6 group-hover:w-full group-hover:bg-indigo-500 transition-all duration-500 ease-out"></div>
<span className="text-xs font-medium text-gray-500 mb-2 block">03.</span>
<h3 className="text-lg font-medium text-white mb-3">Customize Your Music</h3>
<p className="text-sm text-gray-400 leading-relaxed">AI-generated music by adjusting notes, rhythms, and dynamics to match your vision.</p>
</div>
<div className="relative group">
<div className="w-12 h-0.5 bg-gray-700 mb-6 group-hover:w-full group-hover:bg-indigo-500 transition-all duration-500 ease-out"></div>
<span className="text-xs font-medium text-gray-500 mb-2 block">04.</span>
<h3 className="text-lg font-medium text-white mb-3">Collaboration</h3>
<p className="text-sm text-gray-400 leading-relaxed">Work with other musicians or producers in real-time, sharing ideas and changes.</p>
</div>
</div>
</section>

<section className="py-20 max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">Experience the Seamless<br/>Music Journey with InnovaAI</h2>
<p className="text-gray-400 max-w-2xl mx-auto text-base">Discover the future of music production. Effortlessly create, edit and perfect.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="lg:col-span-2 glass-card rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
<div className="flex-1 w-full relative">

<div className="bg-[#111] rounded-xl p-4 border border-white/10 shadow-2xl w-full max-w-sm mx-auto">
<div className="flex justify-center gap-1 relative h-32">

<div className="w-8 h-full bg-white rounded-b-md"></div>
<div className="w-8 h-full bg-white rounded-b-md"></div>
<div className="w-8 h-full bg-white rounded-b-md active-key shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
<div className="w-8 h-full bg-white rounded-b-md"></div>
<div className="w-8 h-full bg-white rounded-b-md"></div>
<div className="w-8 h-full bg-white rounded-b-md"></div>
<div className="w-8 h-full bg-white rounded-b-md"></div>

<div className="absolute left-[24px] top-0 w-5 h-20 bg-black rounded-b-md border border-gray-800 z-10"></div>
<div className="absolute left-[58px] top-0 w-5 h-20 bg-black rounded-b-md border border-gray-800 z-10"></div>
<div className="absolute left-[128px] top-0 w-5 h-20 bg-black rounded-b-md border border-gray-800 z-10"></div>
<div className="absolute left-[162px] top-0 w-5 h-20 bg-black rounded-b-md border border-gray-800 z-10"></div>
<div className="absolute left-[196px] top-0 w-5 h-20 bg-black rounded-b-md border border-gray-800 z-10"></div>
</div>
<div className="flex justify-center mt-4 gap-2">
<div className="h-1 w-1 rounded-full bg-indigo-500 animate-pulse"></div>
<div className="h-1 w-20 bg-gray-800 rounded-full overflow-hidden">
<div className="h-full w-1/2 bg-indigo-500"></div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 blur-[80px] -z-10"></div>
</div>
<div className="flex-1 text-left">
<h3 className="text-2xl font-semibold text-white mb-3">Automatic Melody Generation</h3>
<p className="text-gray-400 text-sm leading-relaxed mb-6">Leverage advanced AI algorithms to generate unique and inspiring melodies tailored to your selected genre and mood.</p>
<button className="px-5 py-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-medium">Learn More</button>
</div>
</div>

<div className="glass-card rounded-3xl p-8 min-h-[400px] flex flex-col justify-end relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-2/3 flex items-center justify-center">
<div className="w-64 h-32 border border-white/5 rounded-lg bg-white/[0.02] flex items-center justify-center relative">
<div className="absolute top-1/2 left-8 w-1 h-1 bg-white/50 rounded-full"></div>
<div className="absolute top-1/2 right-8 w-1 h-1 bg-white/50 rounded-full"></div>
<div className="w-12 h-10 border border-indigo-500/50 rounded bg-indigo-500/10 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.3)]">
<i className="w-4 h-4 text-indigo-400 ml-0.5" data-lucide="play" fill="currentColor" strokeWidth="1.5"></i>
</div>
</div>
</div>
<h3 className="text-xl font-semibold text-white mb-2 relative z-10">Beat Synchronization</h3>
<p className="text-gray-400 text-sm mb-6 relative z-10">Sync your beats perfectly with AI assistance.</p>
<button className="w-fit px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/10 transition-colors relative z-10">Learn More</button>
</div>

<div className="glass-card rounded-3xl p-8 min-h-[400px] flex flex-col justify-end relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-2/3 flex items-center justify-center">

<div className="w-full h-full flex items-center justify-center">
<div className="absolute w-64 h-32 border-t border-white/10 rounded-t-full top-[30%]"></div>
<div className="absolute w-48 h-24 border-t border-white/10 rounded-t-full top-[40%]"></div>
<div className="relative z-10 flex gap-2">
<span className="w-2 h-8 bg-indigo-500 rounded-full animate-pulse"></span>
<span className="w-2 h-12 bg-fuchsia-500 rounded-full"></span>
<span className="w-2 h-6 bg-indigo-500 rounded-full animate-pulse delay-75"></span>
</div>
</div>
</div>
<h3 className="text-xl font-semibold text-white mb-2 relative z-10">Smart Mixing</h3>
<p className="text-gray-400 text-sm mb-6 relative z-10">Automated mixing and mastering for professional sound.</p>
<button className="w-fit px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/10 transition-colors relative z-10">Learn More</button>
</div>
</div>
</section>

<section className="py-20 max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold text-white tracking-tight mb-4">Unlock a World of <br/> Musical Possibilities</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card rounded-2xl p-6 hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-indigo-900/30 flex items-center justify-center mb-4 text-indigo-400 group-hover:text-indigo-300">
<i className="w-5 h-5" data-lucide="music-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-base font-medium text-white mb-2">Create Inspiring Melodies</h3>
<p className="text-xs text-gray-500 leading-relaxed">With the AI Melody Generator, you can generate unique and captivating melodies based on your style.</p>
</div>

<div className="glass-card rounded-2xl p-6 hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-purple-900/30 flex items-center justify-center mb-4 text-purple-400 group-hover:text-purple-300">
<i className="w-5 h-5" data-lucide="sliders" strokeWidth="1.5"></i>
</div>
<h3 className="text-base font-medium text-white mb-2">Automated Mixing Mastering</h3>
<p className="text-xs text-gray-500 leading-relaxed">Achieve professional-grade sound quality with automated mixing and mastering tools.</p>
</div>

<div className="glass-card rounded-2xl p-6 hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-blue-900/30 flex items-center justify-center mb-4 text-blue-400 group-hover:text-blue-300">
<i className="w-5 h-5" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-base font-medium text-white mb-2">Real-Time Collaboration</h3>
<p className="text-xs text-gray-500 leading-relaxed">Work seamlessly with other musicians in real-time, regardless of location.</p>
</div>

<div className="glass-card rounded-2xl p-6 hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-pink-900/30 flex items-center justify-center mb-4 text-pink-400 group-hover:text-pink-300">
<i className="w-5 h-5" data-lucide="file-audio" strokeWidth="1.5"></i>
</div>
<h3 className="text-base font-medium text-white mb-2">Multi-Format File Converter</h3>
<p className="text-xs text-gray-500 leading-relaxed">Convert your audio files into any format you need quickly and efficiently.</p>
</div>

<div className="glass-card rounded-2xl p-6 hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-emerald-900/30 flex items-center justify-center mb-4 text-emerald-400 group-hover:text-emerald-300">
<i className="w-5 h-5" data-lucide="mic-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-base font-medium text-white mb-2">Virtual Instrument</h3>
<p className="text-xs text-gray-500 leading-relaxed">Access a vast library of virtual instruments to enhance your music production.</p>
</div>

<div className="glass-card rounded-2xl p-6 hover:bg-white/5 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-orange-900/30 flex items-center justify-center mb-4 text-orange-400 group-hover:text-orange-300">
<i className="w-5 h-5" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<h3 className="text-base font-medium text-white mb-2">Trend Analysis</h3>
<p className="text-xs text-gray-500 leading-relaxed">Analyze current music trends to keep your productions fresh and relevant.</p>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent"></div>
<div className="max-w-4xl mx-auto text-center px-6 relative z-10">
<h2 className="text-4xl font-semibold text-white tracking-tight mb-4">Connect with Your <br/> Favorite Tools</h2>
<p className="text-gray-400 text-sm mb-12">Discover the future of music production. Integrate seamlessly.</p>
<div className="grid grid-cols-4 md:grid-cols-6 gap-6 md:gap-8 justify-items-center">

<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-indigo-500/50 transition-all cursor-pointer">
<i className="w-6 h-6 text-gray-300" data-lucide="message-circle" strokeWidth="1.5"></i>
</div>
<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-indigo-500/50 transition-all cursor-pointer">
<i className="w-6 h-6 text-gray-300" data-lucide="apple" strokeWidth="1.5"></i>
</div>
<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-indigo-500/50 transition-all cursor-pointer">
<i className="w-6 h-6 text-gray-300" data-lucide="slack" strokeWidth="1.5"></i>
</div>
<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-indigo-500/50 transition-all cursor-pointer">
<i className="w-6 h-6 text-gray-300" data-lucide="instagram" strokeWidth="1.5"></i>
</div>
<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-indigo-500/50 transition-all cursor-pointer">
<i className="w-6 h-6 text-gray-300" data-lucide="twitter" strokeWidth="1.5"></i>
</div>
<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-indigo-500/50 transition-all cursor-pointer">
<i className="w-6 h-6 text-gray-300" data-lucide="github" strokeWidth="1.5"></i>
</div>
</div>

<div className="grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 justify-items-center mt-6 max-w-2xl mx-auto">
<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-indigo-500/50 transition-all cursor-pointer">
<i className="w-6 h-6 text-gray-300" data-lucide="figma" strokeWidth="1.5"></i>
</div>
<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-indigo-500/50 transition-all cursor-pointer">
<i className="w-6 h-6 text-gray-300" data-lucide="chrome" strokeWidth="1.5"></i>
</div>
<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-indigo-500/50 transition-all cursor-pointer">
<i className="w-6 h-6 text-gray-300" data-lucide="framer" strokeWidth="1.5"></i>
</div>
</div>
</div>
</section>

<section className="py-20 max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="glass-card rounded-3xl p-8 h-[500px] relative overflow-hidden flex items-center justify-center">

<div className="grid grid-cols-2 gap-4 relative z-10">
<div className="w-24 h-24 rounded-2xl bg-white/10 border border-white/10 flex flex-col items-center justify-center">
<div className="w-10 h-10 rounded-full bg-indigo-500/20 mb-2"></div>
<div className="w-12 h-2 bg-white/20 rounded-full"></div>
</div>
<div className="w-24 h-24 rounded-2xl bg-white/10 border border-white/10 flex flex-col items-center justify-center">
<div className="w-10 h-10 rounded-full bg-fuchsia-500/20 mb-2"></div>
<div className="w-12 h-2 bg-white/20 rounded-full"></div>
</div>
<div className="w-24 h-24 rounded-2xl bg-white/10 border border-white/10 flex flex-col items-center justify-center border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.3)]">
<div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center mb-2 font-bold">+</div>
</div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewbox="0 0 400 400">
<path d="M100,100 L200,200" stroke="white" stroke-dasharray="5,5"></path>
<path d="M300,100 L200,200" stroke="white" stroke-dasharray="5,5"></path>
</svg>
</div>

<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Transform the Way You Create Music Together</h2>
<p className="text-gray-400 leading-relaxed mb-8">Experience the power of real-time collaboration with InnovaAI, designed to bring musicians and producers closer than ever before. Our platform enables seamless, synchronous co-creation.</p>
<button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-600 text-white text-sm font-medium hover:opacity-90 transition-opacity">
                    Learn More
                </button>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.02] border-y border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-12">Hear from Our Users</h2>
<div className="relative">
<div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg shadow-indigo-900/50">
<i className="w-5 h-5 fill-current" data-lucide="quote" strokeWidth="1.5"></i>
</div>
<blockquote className="text-xl md:text-2xl font-medium text-white mb-8 leading-relaxed">
                    "InnovaAI has completely revolutionized my songwriting process. The AI melody generator is incredibly intuitive and helps me come up with fresh ideas in minutes."
                </blockquote>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-gray-700 border-2 border-indigo-500 mb-3 overflow-hidden">

<div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-700"></div>
</div>
<div className="text-base font-semibold text-white">Jane Doe</div>
<div className="text-sm text-gray-500">Music Producer, NY</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold text-white tracking-tight mb-4">Tailored Solutions for <br/> Every Need</h2>
<p className="text-gray-400 text-sm">Choose the plan that best fits your creative journey.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-card rounded-3xl p-8 flex flex-col">
<h3 className="text-lg font-medium text-white mb-2">Basic Plan</h3>
<p className="text-xs text-gray-500 mb-6 h-8">For individuals and hobbyists.</p>
<div className="text-4xl font-semibold text-white mb-8">$29 <span className="text-sm font-normal text-gray-500">/mo</span></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-indigo-500" data-lucide="check-circle-2"></i> Send up to 10,000 emails
                    </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-indigo-500" data-lucide="check-circle-2"></i> Basic analytics
                    </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-indigo-500" data-lucide="check-circle-2"></i> 1 User account
                    </li>
</ul>
<button className="w-full py-3 rounded-full bg-white/10 text-white font-medium text-sm hover:bg-white/20 transition-colors">Select This Plan</button>
</div>

<div className="glass-card rounded-3xl p-8 flex flex-col border-indigo-500/50 bg-indigo-900/10 relative">
<div className="absolute top-0 right-0 m-6 px-3 py-1 bg-white text-indigo-900 text-[10px] font-bold uppercase tracking-wider rounded-full">Popular</div>
<h3 className="text-lg font-medium text-white mb-2">Professional Plan</h3>
<p className="text-xs text-gray-500 mb-6 h-8">For serious creators and pros.</p>
<div className="text-4xl font-semibold text-white mb-8">$49 <span className="text-sm font-normal text-gray-500">/mo</span></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-indigo-400" data-lucide="check-circle-2"></i> Everything in Basic
                    </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-indigo-400" data-lucide="check-circle-2"></i> Advanced AI tools
                    </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-indigo-400" data-lucide="check-circle-2"></i> Unlimited projects
                    </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-indigo-400" data-lucide="check-circle-2"></i> Priority support
                    </li>
</ul>
<button className="w-full py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium text-sm hover:shadow-lg transition-all">Select This Plan</button>
</div>

<div className="glass-card rounded-3xl p-8 flex flex-col">
<h3 className="text-lg font-medium text-white mb-2">Enterprise Plan</h3>
<p className="text-xs text-gray-500 mb-6 h-8">For large teams and studios.</p>
<div className="text-4xl font-semibold text-white mb-8">$129 <span className="text-sm font-normal text-gray-500">/mo</span></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-indigo-500" data-lucide="check-circle-2"></i> Custom solutions
                    </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-indigo-500" data-lucide="check-circle-2"></i> Dedicated account manager
                    </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-indigo-500" data-lucide="check-circle-2"></i> 24/7 Support
                    </li>
</ul>
<button className="w-full py-3 rounded-full bg-white/10 text-white font-medium text-sm hover:bg-white/20 transition-colors">Select This Plan</button>
</div>
</div>
</section>

<section className="py-20 max-w-3xl mx-auto px-6">
<h2 className="text-4xl font-semibold text-white tracking-tight mb-12">Frequently Asked <br/> Questions</h2>
<div className="space-y-4">
<details className="group glass-card rounded-xl">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-white list-none">
                    What is an AI Image Editor?
                    <span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-gray-400 mt-2 px-6 pb-6 text-sm leading-relaxed">
                    An AI Image Editor uses artificial intelligence to automatically enhance, retouch, and apply creative effects to your photos, making image editing faster and easier.
                </div>
</details>
<details className="group glass-card rounded-xl">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-white list-none">
                    How does the AI improve my photos?
                    <span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="plus"></i>
</span>
</summary>
</details>
<details className="group glass-card rounded-xl">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-white list-none">
                    Is my data safe when I upload images?
                    <span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="plus"></i>
</span>
</summary>
</details>
<details className="group glass-card rounded-xl">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-white list-none">
                    Can I manually adjust the edits made by the AI?
                    <span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="plus"></i>
</span>
</summary>
</details>
</div>
</section>

<section className="py-20 max-w-7xl mx-auto px-6">
<div className="glass-card rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden text-center md:text-left">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-900/30 to-transparent pointer-events-none"></div>
<div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
<div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Join the Future of Music <br/> Production Today</h2>
<p className="text-gray-400 mb-8 max-w-lg">Start your journey with InnovaAI and revolutionize your creative process with the power of artificial intelligence.</p>
<button className="px-8 py-3 rounded-full bg-gradient-to-r from-fuchsia-400 to-indigo-500 text-white font-medium text-sm hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.5)] transition-all">
                        Book a Demo
                    </button>
</div>

<div className="relative hidden md:block h-64">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-48 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl p-4 flex flex-col gap-3">
<div className="flex items-center gap-2 mb-2">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="flex gap-4">
<div className="w-20 h-20 bg-white/5 rounded-lg border border-white/5"></div>
<div className="flex-1 space-y-2">
<div className="w-full h-2 bg-white/10 rounded"></div>
<div className="w-2/3 h-2 bg-white/10 rounded"></div>
</div>
</div>
<div className="mt-auto flex items-center justify-between">
<div className="px-3 py-1 bg-indigo-500/20 text-indigo-400 text-[10px] rounded border border-indigo-500/20">AI Generating...</div>
<i className="w-4 h-4 text-green-500" data-lucide="check-circle"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020202] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-indigo-500 rounded flex items-center justify-center text-white">
<i className="w-3 h-3" data-lucide="waves" strokeWidth="2"></i>
</div>
<span className="text-lg font-semibold text-white">InnovaAI</span>
</div>
<p className="text-xs text-gray-500 leading-relaxed mb-6">
                        Discover the future of music production with InnovaAI. Effortlessly create, edit, and perfect your tracks.
                    </p>
<div className="flex gap-4">
<a className="text-gray-500 hover:text-white" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="text-gray-500 hover:text-white" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="text-gray-500 hover:text-white" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-gray-500 hover:text-white" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Menu</h4>
<ul className="space-y-3 text-xs text-gray-500">
<li><a className="hover:text-indigo-400" href="#">Home</a></li>
<li><a className="hover:text-indigo-400" href="#">Features</a></li>
<li><a className="hover:text-indigo-400" href="#">Pricing</a></li>
<li><a className="hover:text-indigo-400" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Info</h4>
<ul className="space-y-3 text-xs text-gray-500">
<li><a className="hover:text-indigo-400" href="#">Terms</a></li>
<li><a className="hover:text-indigo-400" href="#">Privacy Policy</a></li>
<li><a className="hover:text-indigo-400" href="#">Support</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Resources</h4>
<ul className="space-y-3 text-xs text-gray-500">
<li><a className="hover:text-indigo-400" href="#">Blogs</a></li>
<li><a className="hover:text-indigo-400" href="#">Testimonials</a></li>
<li><a className="hover:text-indigo-400" href="#">Brand Guide</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-[10px] text-gray-600">Copyright © 2024 InnovaAI. All Rights Reserved</div>
</div>
</div>
</footer>


    </>
  );
}
