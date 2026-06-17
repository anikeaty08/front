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
      

<nav className="fixed w-full z-50 top-0 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white">
<iconify-icon icon="solar:soundwave-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-semibold text-lg text-slate-900 tracking-tight">Voxora AI</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#product">Product</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#solutions">Solutions</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#resources">Resources</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Log in</a>
<a className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-full transition-all shadow-lg shadow-slate-200 flex items-center gap-2 group" href="#">
                    Get Started
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden mesh-gradient">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
<div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
<span className="text-xs font-medium text-slate-600 tracking-wide uppercase">V2.0 Model Live</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                        Next-Generation Voice AI for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Modern World</span>
</h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg">
                        Create ultra-realistic AI voices in seconds. Perfect for creators, developers, and enterprises building the next wave of audio experiences.
                    </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<button className="px-8 py-3.5 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all shadow-xl shadow-indigo-100 flex items-center gap-2">
                            Start Free Trial
                        </button>
<button className="px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-all flex items-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                            Book Demo
                        </button>
</div>
<div className="mt-8 flex items-center gap-4 text-sm text-slate-400">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white"></div>
</div>
<p>Trusted by 10,000+ creators</p>
</div>
</div>
<div className="relative float-element">
<div className="relative w-full aspect-square max-w-lg mx-auto bg-gradient-to-br from-white to-slate-50 rounded-3xl border border-slate-100 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] p-8 flex flex-col items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-white/40 backdrop-blur-sm z-0"></div>
<div className="relative z-10 w-full flex flex-col items-center gap-8">
<div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 shadow-lg shadow-indigo-200 flex items-center justify-center text-white mb-4">
<iconify-icon icon="solar:microphone-3-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<div className="flex items-center justify-center gap-1.5 h-24 w-full px-8">
<div className="w-2 bg-indigo-400 bar"></div>
<div className="w-2 bg-purple-400 bar"></div>
<div className="w-2 bg-indigo-500 bar"></div>
<div className="w-2 bg-blue-400 bar"></div>
<div className="w-2 bg-indigo-300 bar"></div>
<div className="w-2 bg-purple-500 bar"></div>
<div className="w-2 bg-indigo-600 bar"></div>
<div className="w-2 bg-blue-500 bar"></div>
</div>
<div className="w-full bg-white/80 rounded-xl p-4 border border-slate-100 flex items-center justify-between shadow-sm">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
<iconify-icon icon="solar:play-linear" width="16"></iconify-icon>
</div>
<div className="space-y-1">
<div className="h-1.5 w-24 bg-slate-200 rounded-full"></div>
<div className="h-1.5 w-16 bg-slate-100 rounded-full"></div>
</div>
</div>
<span className="text-xs font-mono text-slate-400">00:24 / 01:30</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">Powering voice for innovative teams</p>
<div className="flex flex-wrap justify-center gap-12 lg:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 font-semibold text-xl text-slate-800"><iconify-icon icon="solar:atom-linear"></iconify-icon> ACME</div>
<div className="flex items-center gap-2 font-semibold text-xl text-slate-800"><iconify-icon icon="solar:infinity-linear"></iconify-icon> Loop</div>
<div className="flex items-center gap-2 font-semibold text-xl text-slate-800"><iconify-icon icon="solar:layers-linear"></iconify-icon> Stack</div>
<div className="flex items-center gap-2 font-semibold text-xl text-slate-800"><iconify-icon icon="solar:planet-linear"></iconify-icon> Orbit</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50" id="product">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Product Capabilities</h2>
<p className="text-slate-500 text-lg">Powerful tools designed for developers and creators. Generate, clone, and integrate effortlessly.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:user-speak-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Ultra-Realistic Voices</h3>
<p className="text-sm text-slate-500 leading-relaxed">Access a library of over 500+ neural voices that capture human emotion and intonation.</p>
</div>
<div className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-purple-100 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:copy-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Instant Voice Cloning</h3>
<p className="text-sm text-slate-500 leading-relaxed">Clone any voice with just 30 seconds of audio. Perfect for personalized content at scale.</p>
</div>
<div className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:globe-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Multi-Language Support</h3>
<p className="text-sm text-slate-500 leading-relaxed">Generate speech in 60+ languages and accents instantly with native-level fluency.</p>
</div>
<div className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:code-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Robust API</h3>
<p className="text-sm text-slate-500 leading-relaxed">Developer-first API with ultra-low latency, designed for real-time applications.</p>
</div>
<div className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-orange-100 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Real-Time Generation</h3>
<p className="text-sm text-slate-500 leading-relaxed">Streaming capability allows for instant playback, minimizing wait times for users.</p>
</div>
<div className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-pink-100 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:tuning-4-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Fine-Grained Control</h3>
<p className="text-sm text-slate-500 leading-relaxed">Adjust pitch, speed, and emotion to get exactly the performance you need.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="solutions">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-slate-50 skew-x-12 opacity-50 z-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<span className="text-indigo-600 font-semibold tracking-wide text-sm uppercase mb-2 block">Use Cases</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Solutions for every industry</h2>
</div>
<a className="text-slate-600 font-medium hover:text-indigo-600 transition-colors flex items-center gap-2" href="#">
                    View all solutions
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group relative overflow-hidden rounded-3xl bg-slate-900 p-8 md:p-10 transition-all hover:shadow-2xl hover:shadow-slate-200">
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white mb-6 border border-white/20">
<iconify-icon icon="solar:clapperboard-play-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Content Creation</h3>
<p className="text-slate-400 leading-relaxed mb-8 max-w-sm">Scale your video production with AI voiceovers. Dub content into multiple languages automatically to reach global audiences.</p>
<ul className="space-y-3 text-sm text-slate-300 mb-8">
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> YouTube &amp; Social Media</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Podcasts &amp; Audiobooks</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Documentary Narration</li>
</ul>
<button className="text-white font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                            Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-200 p-8 md:p-10 transition-all hover:border-indigo-200">
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-900 mb-6 border border-slate-200 shadow-sm">
<iconify-icon icon="solar:gamepad-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Gaming &amp; Interactive</h3>
<p className="text-slate-500 leading-relaxed mb-8 max-w-sm">Create dynamic, infinite dialogue for NPCs without recording studios. Enhance immersion with real-time generated responses.</p>
<ul className="space-y-3 text-sm text-slate-600 mb-8">
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> Dynamic NPC Dialogue</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> VR/AR Experiences</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> Interactive Storytelling</li>
</ul>
<button className="text-slate-900 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                            Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-200 p-8 md:p-10 transition-all hover:border-indigo-200">
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-900 mb-6 border border-slate-200 shadow-sm">
<iconify-icon icon="solar:book-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Education &amp; E-Learning</h3>
<p className="text-slate-500 leading-relaxed mb-8 max-w-sm">Make learning accessible by converting text materials into engaging audio lessons. Personalized feedback in natural voices.</p>
<ul className="space-y-3 text-sm text-slate-600 mb-8">
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> Language Learning</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> Accessibility Tools</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> Corporate Training</li>
</ul>
<button className="text-slate-900 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                            Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 md:p-10 transition-all hover:border-indigo-200 shadow-lg shadow-slate-100">
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6">
<iconify-icon icon="solar:buildings-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Enterprise &amp; CX</h3>
<p className="text-slate-500 leading-relaxed mb-8 max-w-sm">Humanize your customer support with natural sounding IVR and conversational AI agents that operate 24/7.</p>
<ul className="space-y-3 text-sm text-slate-600 mb-8">
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> Brand Voice Consistency</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> Scalable Localization</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> Automated Support</li>
</ul>
<button className="text-slate-900 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                            Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden">
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Experience the magic yourself</h2>
<p className="text-slate-500 mb-8">Type anything below and hear our AI bring it to life with stunning realism.</p>
<div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 p-6">
<div className="mb-4 flex items-center justify-between">
<div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-200 cursor-pointer hover:bg-slate-100">
<div className="w-5 h-5 rounded-full bg-indigo-500"></div>
<span className="text-sm font-medium text-slate-700">Sarah (American, Soft)</span>
<iconify-icon className="text-slate-400 ml-1" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<textarea className="w-full h-32 p-0 border-none bg-transparent resize-none focus:ring-0 text-slate-700 text-lg leading-relaxed placeholder-slate-300" placeholder="Type something here to convert to speech..."></textarea>
<div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-2">
<div className="text-xs text-slate-400 font-medium">32 / 500 chars</div>
<button className="px-6 py-2.5 bg-slate-900 text-white rounded-lg font-medium text-sm hover:bg-indigo-600 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
                                Generate Audio
                            </button>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-purple-50 rounded-full blur-3xl opacity-60"></div>
<div className="relative z-10 bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<div className="flex items-center justify-between mb-8">
<div>
<h4 className="font-semibold text-slate-900">Generated Audio</h4>
<p className="text-xs text-slate-500">Just now</p>
</div>
<button className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-600 shadow-sm hover:scale-105 transition-transform">
<iconify-icon icon="solar:download-minimalistic-linear"></iconify-icon>
</button>
</div>
<div className="flex items-end justify-between h-24 gap-1 mb-6 px-2">
<div className="w-1.5 bg-indigo-200 rounded-full h-[40%]"></div>
<div className="w-1.5 bg-indigo-300 rounded-full h-[70%]"></div>
<div className="w-1.5 bg-indigo-500 rounded-full h-[100%]"></div>
<div className="w-1.5 bg-indigo-400 rounded-full h-[60%]"></div>
<div className="w-1.5 bg-indigo-200 rounded-full h-[30%]"></div>
<div className="w-1.5 bg-purple-200 rounded-full h-[50%]"></div>
<div className="w-1.5 bg-purple-400 rounded-full h-[80%]"></div>
<div className="w-1.5 bg-purple-500 rounded-full h-[90%]"></div>
<div className="w-1.5 bg-purple-300 rounded-full h-[50%]"></div>
<div className="w-1.5 bg-indigo-200 rounded-full h-[30%]"></div>
<div className="w-1.5 bg-indigo-400 rounded-full h-[60%]"></div>
<div className="w-1.5 bg-indigo-500 rounded-full h-[90%]"></div>
<div className="w-1.5 bg-indigo-300 rounded-full h-[50%]"></div>
<div className="w-1.5 bg-indigo-200 rounded-full h-[40%]"></div>
<div className="w-1.5 bg-slate-200 rounded-full h-[20%]"></div>
<div className="w-1.5 bg-slate-200 rounded-full h-[20%]"></div>
<div className="w-1.5 bg-slate-200 rounded-full h-[20%]"></div>
</div>
<div className="flex items-center gap-4">
<button className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
<iconify-icon icon="solar:play-bold" width="20"></iconify-icon>
</button>
<div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="w-2/3 h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
</div>
<span className="text-xs font-mono text-slate-500">00:08</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Simple, transparent pricing</h2>
<p className="text-slate-500">Start for free, scale as you grow.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">

<div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
<h3 className="text-lg font-medium text-slate-900 mb-2">Starter</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold text-slate-900">$0</span>
<span className="text-slate-400">/mo</span>
</div>
<p className="text-sm text-slate-500 mb-6">Perfect for trying out Voxora AI.</p>
<button className="w-full py-2.5 rounded-lg border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors mb-8">Get Started</button>
<ul className="space-y-4 text-sm text-slate-600">
<li className="flex items-center gap-3"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> 10 mins of generation</li>
<li className="flex items-center gap-3"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Standard voices</li>
<li className="flex items-center gap-3"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Personal use</li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 border-2 border-indigo-500 shadow-xl shadow-indigo-100 relative">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Pro</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold text-slate-900">$29</span>
<span className="text-slate-400">/mo</span>
</div>
<p className="text-sm text-slate-500 mb-6">For creators and professionals.</p>
<button className="w-full py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors mb-8 shadow-lg shadow-indigo-200">Start Free Trial</button>
<ul className="space-y-4 text-sm text-slate-600">
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-500" icon="solar:check-circle-bold"></iconify-icon> 5 hours of generation</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-500" icon="solar:check-circle-bold"></iconify-icon> Instant Voice Cloning</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-500" icon="solar:check-circle-bold"></iconify-icon> Commercial rights</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-500" icon="solar:check-circle-bold"></iconify-icon> Priority support</li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
<h3 className="text-lg font-medium text-slate-900 mb-2">Enterprise</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold text-slate-900">Custom</span>
</div>
<p className="text-sm text-slate-500 mb-6">For large teams and high volume.</p>
<button className="w-full py-2.5 rounded-lg border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors mb-8">Contact Sales</button>
<ul className="space-y-4 text-sm text-slate-600">
<li className="flex items-center gap-3"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Unlimited generation</li>
<li className="flex items-center gap-3"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> API Access</li>
<li className="flex items-center gap-3"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Dedicated account manager</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="resources">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between mb-12">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Resources</h2>
<a className="text-indigo-600 text-sm font-medium hover:underline" href="#">View all resources</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<a className="group block bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300" href="#">
<div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-900 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:file-text-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Documentation</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Detailed guides, API references, and code samples to help you integrate Voxora.</p>
<span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide flex items-center gap-1">Read Docs <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</a>

<a className="group block bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300" href="#">
<div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-900 flex items-center justify-center mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Community Hub</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Join 50k+ developers and creators. Share your work, get feedback, and find inspiration.</p>
<span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide flex items-center gap-1">Join Discord <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</a>

<a className="group block bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300" href="#">
<div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-900 flex items-center justify-center mb-6 group-hover:bg-purple-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Blog &amp; Updates</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Latest news, product updates, and tutorials on how to get the most out of AI audio.</p>
<span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide flex items-center gap-1">Read Latest <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Loved by creators</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 text-sm leading-relaxed mb-6">"Voxora completely changed our content workflow. The voice quality is indistinguishable from human recordings."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100"></div>
<div>
<div className="text-sm font-semibold text-slate-900">Alex Chen</div>
<div className="text-xs text-slate-500">Product Designer</div>
</div>
</div>
</div>
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 text-sm leading-relaxed mb-6">"The API latency is incredibly low. We built a real-time conversational agent in under a week."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-pink-100"></div>
<div>
<div className="text-sm font-semibold text-slate-900">Sarah Miller</div>
<div className="text-xs text-slate-500">CTO, TechStart</div>
</div>
</div>
</div>
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 text-sm leading-relaxed mb-6">"Cloning my own voice was a bit scary because it sounded so real. Highly recommended for podcasters."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100"></div>
<div>
<div className="text-sm font-semibold text-slate-900">James Wilson</div>
<div className="text-xs text-slate-500">Podcaster</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight text-center mb-12">Frequently asked questions</h2>
<div className="space-y-4">
<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300">
<summary className="flex cursor-pointer items-center justify-between p-6 text-slate-900 font-medium">
                        Can I use the voices for commercial projects?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                        Yes! Our Pro and Enterprise plans come with full commercial rights for all generated audio, allowing you to use them in ads, YouTube videos, and products.
                    </div>
</details>
<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300">
<summary className="flex cursor-pointer items-center justify-between p-6 text-slate-900 font-medium">
                        How does voice cloning work?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                        You simply upload a 30-second to 1-minute sample of the voice you want to clone. Our AI analyzes the spectral features and creates a custom model instantly.
                    </div>
</details>
<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300">
<summary className="flex cursor-pointer items-center justify-between p-6 text-slate-900 font-medium">
                        Do you offer API access?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                        Yes, our API is available on the Enterprise plan and can be tested on the Pro plan. It supports streaming and is designed for low-latency applications.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white px-8 py-20 text-center">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-900 to-purple-900 opacity-50"></div>
<div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500 rounded-full blur-[100px] opacity-30"></div>
<div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500 rounded-full blur-[100px] opacity-30"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Ready to find your voice?</h2>
<p className="text-slate-300 text-lg mb-10">Join thousands of companies using Voxora AI to build the future of audio.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-100 transition-colors shadow-lg shadow-white/10">Start for free</button>
<button className="px-8 py-4 bg-transparent border border-slate-600 text-white rounded-full font-semibold hover:bg-white/5 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-slate-900 flex items-center justify-center text-white">
<iconify-icon icon="solar:soundwave-linear" width="14"></iconify-icon>
</div>
<span className="font-semibold text-lg text-slate-900 tracking-tight">Voxora AI</span>
</div>
<p className="text-sm text-slate-500 mb-6 max-w-xs">Building the most realistic voice synthesis technology for the next generation of creators.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="logos:twitter" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="logos:github-icon" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="logos:discord-icon" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Product</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-600" href="#">Features</a></li>
<li><a className="hover:text-indigo-600" href="#">Voice Library</a></li>
<li><a className="hover:text-indigo-600" href="#">API</a></li>
<li><a className="hover:text-indigo-600" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-600" href="#">Documentation</a></li>
<li><a className="hover:text-indigo-600" href="#">Community</a></li>
<li><a className="hover:text-indigo-600" href="#">Blog</a></li>
<li><a className="hover:text-indigo-600" href="#">Help Center</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-600" href="#">About</a></li>
<li><a className="hover:text-indigo-600" href="#">Careers</a></li>
<li><a className="hover:text-indigo-600" href="#">Legal</a></li>
<li><a className="hover:text-indigo-600" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-slate-400">© 2024 Voxora AI Inc. All rights reserved.</p>
<div className="flex gap-6 text-sm text-slate-400">
<a className="hover:text-slate-900" href="#">Privacy Policy</a>
<a className="hover:text-slate-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
