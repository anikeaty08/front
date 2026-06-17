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
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="text-xl font-semibold tracking-tighter text-zinc-900 flex items-center gap-1" href="#">
<span className="iconify text-rose-500" data-height="20" data-icon="lucide:heart-handshake" data-strokeWidth="1.5" data-width="20"></span>
                    KINDRED
                </a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#features">Manifesto</a>
<a className="hover:text-zinc-900 transition-colors" href="#safety">Safety</a>
<a className="hover:text-zinc-900 transition-colors" href="#stories">Stories</a>
<a className="hover:text-zinc-900 transition-colors" href="#pricing">Membership</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 hidden sm:block" href="#">Log in</a>
<a className="bg-zinc-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-zinc-800 transition-all flex items-center gap-2 shadow-lg shadow-zinc-200" href="#">
                    Get App
                    <span className="iconify" data-height="14" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="14"></span>
</a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
<div className="absolute top-20 left-10 w-96 h-96 bg-rose-100/50 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-pulse"></div>
<div className="absolute top-40 right-10 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col items-start max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white/50 backdrop-blur-sm text-xs font-medium text-zinc-600 mb-6">
<span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                    Now live in New York &amp; London
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-zinc-900 leading-[1.1] mb-6">
                    Dating designed to be <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">deleted.</span>
</h1>
<p className="text-lg text-zinc-500 mb-8 leading-relaxed max-w-lg">
                    Stop swiping on faces and start connecting with people. Kindred uses deep compatibility matching to help you find a relationship that lasts.
                </p>
<div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
<button className="flex items-center justify-center gap-3 bg-zinc-900 text-white px-6 py-3.5 rounded-full font-medium hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200/50 active:scale-95">
<span className="iconify" data-height="20" data-icon="lucide:apple" data-strokeWidth="1.5" data-width="20"></span>
                        App Store
                    </button>
<button className="flex items-center justify-center gap-3 bg-white border border-zinc-200 text-zinc-900 px-6 py-3.5 rounded-full font-medium hover:bg-zinc-50 transition-all active:scale-95">
<span className="iconify" data-height="20" data-icon="lucide:play-circle" data-strokeWidth="1.5" data-width="20"></span>
                        Google Play
                    </button>
</div>
<div className="mt-8 flex items-center gap-4 text-sm text-zinc-500">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full border-2 border-white bg-zinc-200 flex items-center justify-center overflow-hidden"><span className="iconify text-zinc-400" data-icon="lucide:user" data-width="16"></span></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-zinc-300 flex items-center justify-center overflow-hidden"><span className="iconify text-zinc-400" data-icon="lucide:user" data-width="16"></span></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-zinc-400 flex items-center justify-center overflow-hidden"><span className="iconify text-zinc-400" data-icon="lucide:user" data-width="16"></span></div>
</div>
<span>Over 10,000+ matches made this week</span>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center select-none">

<div className="relative w-72 h-[550px] bg-white rounded-[2.5rem] border-[8px] border-zinc-900/5 shadow-2xl rotate-[-6deg] z-10 overflow-hidden transform hover:rotate-0 transition-transform duration-700 ease-out">

<div className="w-full h-full bg-zinc-50 flex flex-col relative">

<div className="absolute inset-x-4 top-4 bottom-24 bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
<div className="h-3/4 bg-zinc-200 relative group">

<div className="absolute inset-0 bg-gradient-to-tr from-rose-100 to-orange-100 flex items-center justify-center text-rose-300">
<span className="iconify" data-icon="lucide:image" data-strokeWidth="1" data-width="48"></span>
</div>
<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/40 to-transparent">
<h3 className="text-white font-semibold text-xl">Sarah, 27</h3>
<p className="text-white/90 text-sm flex items-center gap-1">
<span className="iconify" data-icon="lucide:map-pin" data-width="12"></span> 2 miles away
                                    </p>
</div>
</div>
<div className="p-4">
<div className="flex flex-wrap gap-2 mb-2">
<span className="px-2 py-1 rounded-md bg-zinc-100 text-zinc-600 text-xs font-medium">Design</span>
<span className="px-2 py-1 rounded-md bg-zinc-100 text-zinc-600 text-xs font-medium">Hiking</span>
<span className="px-2 py-1 rounded-md bg-zinc-100 text-zinc-600 text-xs font-medium">Sushi</span>
</div>
<p className="text-zinc-500 text-xs leading-relaxed"> looking for someone who laughs at their own jokes...</p>
</div>
</div>

<div className="absolute bottom-6 left-0 w-full px-8 flex justify-between items-center">
<button className="w-14 h-14 rounded-full bg-white shadow-lg shadow-zinc-200 border border-zinc-100 text-zinc-400 flex items-center justify-center hover:text-rose-500 hover:scale-110 transition-all">
<span className="iconify" data-icon="lucide:x" data-strokeWidth="2" data-width="24"></span>
</button>
<button className="w-14 h-14 rounded-full bg-rose-500 shadow-lg shadow-rose-200 text-white flex items-center justify-center hover:bg-rose-600 hover:scale-110 transition-all">
<span className="iconify" data-fill="currentColor" data-icon="lucide:heart" data-strokeWidth="2" data-width="24"></span>
</button>
</div>
</div>
</div>

<div className="absolute w-64 h-96 bg-white rounded-3xl border border-zinc-100 shadow-xl rotate-[6deg] -z-0 top-20 right-10 opacity-60"></div>

<div className="absolute top-32 -right-4 bg-white/90 backdrop-blur-md border border-zinc-100 shadow-xl rounded-xl p-4 flex items-center gap-3 z-20 animate-bounce" style={{animationDuration: '3s'}}>
<div className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:message-circle-heart" data-width="20"></span>
</div>
<div>
<p className="text-xs font-medium text-zinc-900">New Message</p>
<p className="text-[10px] text-zinc-500">James sent you a voice note</p>
</div>
</div>
</div>
</div>
</header>

<section className="py-12 border-y border-zinc-100 bg-zinc-50/50">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-zinc-400 mb-8 uppercase tracking-widest">Featured In</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale">

<span className="text-xl font-bold tracking-tighter">Vogue</span>
<span className="text-xl font-bold tracking-tighter">GQ</span>
<span className="text-xl font-bold tracking-tighter italic">Wired</span>
<span className="text-xl font-bold tracking-tighter">Monocle</span>
<span className="text-xl font-bold tracking-tighter font-serif">The New York Times</span>
</div>
</div>
</section>

<section className="py-24 bg-white" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Not just another algorithm.</h2>
<p className="text-zinc-500 text-lg">We prioritize psychological compatibility over superficial stats, ensuring your dates lead to real conversations.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 hover:shadow-lg hover:shadow-zinc-100 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-rose-500" data-icon="lucide:fingerprint" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">Identity Verified</h3>
<p className="text-zinc-500 leading-relaxed">Mandatory photo verification and social checks ensure everyone is exactly who they say they are.</p>
</div>

<div className="group p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 hover:shadow-lg hover:shadow-zinc-100 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-orange-500" data-icon="lucide:sparkles" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">Smart Prompts</h3>
<p className="text-zinc-500 leading-relaxed">Forget "Hey". Our contextual prompts help you start conversations that actually go somewhere.</p>
</div>

<div className="group p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 hover:shadow-lg hover:shadow-zinc-100 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-purple-500" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">Private Mode</h3>
<p className="text-zinc-500 leading-relaxed">Control who sees your profile. Only show up for people you've already liked or matched with.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-100 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="relative order-2 lg:order-1">
<div className="relative w-full aspect-square max-w-md mx-auto">

<div className="absolute inset-0 bg-white rounded-3xl shadow-xl border border-zinc-100 z-10 flex flex-col p-6">
<div className="flex items-center justify-between mb-6">
<h4 className="font-semibold text-zinc-900">Recent Activity</h4>
<span className="iconify text-zinc-400" data-icon="lucide:more-horizontal" data-width="20"></span>
</div>
<div className="space-y-4">

<div className="flex items-center gap-4 p-3 rounded-xl bg-zinc-50 border border-zinc-100">
<div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-semibold text-xs">A</div>
<div className="flex-1">
<p className="text-sm font-medium text-zinc-900">Alex liked your photo</p>
<p className="text-xs text-zinc-500">2 mins ago</p>
</div>
<div className="w-2 h-2 rounded-full bg-rose-500"></div>
</div>

<div className="flex items-center gap-4 p-3 rounded-xl bg-white border border-transparent hover:bg-zinc-50 transition-colors">
<div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-semibold text-xs">M</div>
<div className="flex-1">
<p className="text-sm font-medium text-zinc-900">Match with Marcus</p>
<p className="text-xs text-zinc-500">1 hour ago</p>
</div>
</div>

<div className="flex items-center gap-4 p-3 rounded-xl bg-white border border-transparent hover:bg-zinc-50 transition-colors">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-semibold text-xs">J</div>
<div className="flex-1">
<p className="text-sm font-medium text-zinc-900">Julia sent a voice note</p>
<p className="text-xs text-zinc-500">3 hours ago</p>
</div>
</div>
</div>

<div className="mt-auto">
<div className="flex items-end gap-2 h-24">
<div className="w-1/5 bg-zinc-100 rounded-t-lg h-[40%]"></div>
<div className="w-1/5 bg-zinc-100 rounded-t-lg h-[60%]"></div>
<div className="w-1/5 bg-rose-500 rounded-t-lg h-[85%] relative shadow-lg shadow-rose-200"></div>
<div className="w-1/5 bg-zinc-100 rounded-t-lg h-[50%]"></div>
<div className="w-1/5 bg-zinc-100 rounded-t-lg h-[65%]"></div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-zinc-200 rounded-3xl rotate-6 -z-0 scale-95 opacity-50"></div>
</div>
</div>

<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-200 bg-rose-50 text-xs font-medium text-rose-700 mb-6">
<span className="iconify" data-icon="lucide:activity" data-width="14"></span>
                    Data Driven
                </div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-6">See who truly gets you.</h2>
<p className="text-lg text-zinc-500 mb-8 leading-relaxed">
                    Our compatibility insights break down exactly why you matched. From lifestyle choices to communication styles, understand the "why" before you even say hello.
                </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="iconify text-green-500 mt-1" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="text-zinc-600">Personality trait analysis</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-green-500 mt-1" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="text-zinc-600">Relationship goal alignment</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-green-500 mt-1" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="text-zinc-600">Interest overlap highlighting</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="mb-8 flex justify-center text-rose-500">
<span className="iconify" data-icon="lucide:quote" data-strokeWidth="1" data-width="40"></span>
</div>
<h3 className="text-2xl md:text-4xl font-medium tracking-tight text-zinc-900 leading-snug mb-8">
                "I was skeptical of dating apps until Kindred. The conversations felt natural, not forced. Six months later, we're moving in together."
            </h3>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-200 to-orange-200 border-2 border-white shadow-sm"></div>
<div className="text-left">
<p className="text-sm font-semibold text-zinc-900">Morgan &amp; Alex</p>
<p className="text-xs text-zinc-500">Matched in Brooklyn, NY</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto bg-zinc-900 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden">

<div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Ready to find your person?</h2>
<p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">Join the community of people looking for real connections. Download Kindred today.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-white text-zinc-900 px-8 py-3.5 rounded-full font-medium hover:bg-zinc-100 transition-all flex items-center justify-center gap-2">
                        Download for iOS
                        <span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</button>
<button className="w-full sm:w-auto bg-zinc-800 text-white border border-zinc-700 px-8 py-3.5 rounded-full font-medium hover:bg-zinc-700 transition-all">
                        Get for Android
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-lg font-semibold tracking-tighter text-zinc-900 flex items-center gap-1 mb-4" href="#">
<span className="iconify text-rose-500" data-icon="lucide:heart-handshake" data-width="20"></span>
                        KINDRED
                    </a>
<p className="text-sm text-zinc-500 max-w-xs mb-6">
                        The dating app designed for people who are tired of dating apps. Built with care for human connection.
                    </p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="20"></span></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
</div>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">About</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Press</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-4 text-sm">Legal</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Cookie Policy</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Safety Tips</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-4 text-sm">Product</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Download</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Success Stories</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Kindred Premium</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-400">© 2024 Kindred Inc. All rights reserved.</p>
<div className="flex items-center gap-2 text-xs text-zinc-400">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                    All systems operational
                </div>
</div>
</div>
</footer>

    </>
  );
}
