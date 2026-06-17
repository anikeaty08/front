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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white">
<iconify-icon icon="solar:smile-circle-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">HappyLearn</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#features">Features</a>
<a className="hover:text-slate-900 transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-slate-900 transition-colors" href="#reviews">For Parents</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Sign in</a>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-full transition-all hover:scale-105 active:scale-95 flex items-center gap-2" href="#">
                    Start Free
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-20 right-0 -mr-20 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl opacity-60"></div>
<div className="absolute bottom-0 left-0 -ml-20 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl opacity-60"></div>
</div>
<div className="max-w-6xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 mb-8 animate-float">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                Now available on iPad &amp; Android
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                Spark a lifetime <br className="hidden md:block"/> of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">curiosity.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                The safe, ad-free learning playground for kids aged 4–8. Engaging games designed by educators to build math, reading, and logic skills.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2 hover:-translate-y-1">
<iconify-icon icon="solar:apple-linear" width="20"></iconify-icon>
<span>App Store</span>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2 hover:-translate-y-1">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
<span>Google Play</span>
</button>
</div>

<div className="relative max-w-4xl mx-auto">

<div className="relative bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl shadow-slate-200 ring-1 ring-slate-900/5 rotate-1 hover:rotate-0 transition-transform duration-700 ease-out">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl z-20"></div>
<div className="bg-white rounded-[2rem] overflow-hidden aspect-[16/10] relative">

<div className="absolute inset-0 bg-orange-50 flex">

<div className="w-20 bg-white border-r border-slate-100 flex flex-col items-center py-6 gap-6">
<div className="w-10 h-10 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center">
<iconify-icon icon="solar:home-smile-linear" width="24"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full text-slate-400 flex items-center justify-center">
<iconify-icon icon="solar:gamepad-linear" width="24"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full text-slate-400 flex items-center justify-center">
<iconify-icon icon="solar:book-2-linear" width="24"></iconify-icon>
</div>
</div>

<div className="flex-1 p-8">
<div className="flex justify-between items-center mb-8">
<div>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">Adventure Island</h3>
<p className="text-slate-500 text-sm">Level 3 • Mathematics</p>
</div>
<div className="flex gap-2">
<div className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold flex items-center gap-1">
<iconify-icon icon="solar:star-linear"></iconify-icon> 240
                                        </div>
</div>
</div>

<div className="grid grid-cols-3 gap-4">
<div className="aspect-square bg-purple-100 rounded-2xl flex flex-col items-center justify-center gap-2 group cursor-pointer hover:bg-purple-200 transition-colors">
<iconify-icon className="text-purple-600 text-4xl group-hover:scale-110 transition-transform" icon="solar:calculator-minimalistic-linear"></iconify-icon>
<span className="text-sm font-medium text-purple-900">Numbers</span>
</div>
<div className="aspect-square bg-blue-100 rounded-2xl flex flex-col items-center justify-center gap-2 group cursor-pointer hover:bg-blue-200 transition-colors">
<iconify-icon className="text-blue-600 text-4xl group-hover:scale-110 transition-transform" icon="solar:book-bookmark-minimalistic-linear"></iconify-icon>
<span className="text-sm font-medium text-blue-900">Reading</span>
</div>
<div className="aspect-square bg-green-100 rounded-2xl flex flex-col items-center justify-center gap-2 group cursor-pointer hover:bg-green-200 transition-colors">
<iconify-icon className="text-green-600 text-4xl group-hover:scale-110 transition-transform" icon="solar:palette-linear"></iconify-icon>
<span className="text-sm font-medium text-green-900">Art</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<p className="mt-12 text-sm text-slate-400 font-medium">Trusted by over 10,000+ parents worldwide</p>
<div className="flex justify-center gap-6 mt-4 opacity-50 grayscale">

<span className="text-lg font-bold tracking-tight">Parenting<span className="font-light">Mag</span></span>
<span className="text-lg font-bold tracking-tight">KIDS<span className="font-light">Tech</span></span>
<span className="text-lg font-bold tracking-tight">EDU<span className="font-light">Daily</span></span>
</div>
</div>
</header>

<section className="py-24 bg-slate-50/50 border-y border-slate-100" id="how-it-works">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Learning made simple</h2>
<p className="text-slate-500 max-w-xl mx-auto">Get started in minutes. We've designed the experience to be intuitive for you and engaging for them.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-20 right-20 h-0.5 bg-gradient-to-r from-slate-200 via-slate-200 to-slate-200 -z-10"></div>

<div className="relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 border border-blue-100">
<iconify-icon icon="solar:user-plus-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Create a Profile</h3>
<p className="text-sm text-slate-500 leading-relaxed">Set up a personalized avatar and select your child's age to tailor the curriculum.</p>
</div>

<div className="relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 border border-orange-100">
<iconify-icon icon="solar:gamepad-charge-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Play &amp; Learn</h3>
<p className="text-sm text-slate-500 leading-relaxed">Kids explore islands of knowledge through interactive puzzles, games, and stories.</p>
</div>

<div className="relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 border border-green-100">
<iconify-icon icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Track Growth</h3>
<p className="text-sm text-slate-500 leading-relaxed">Receive weekly reports on progress, strengths, and areas for encouragement.</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">A universe of knowledge</h2>
<p className="text-slate-500 max-w-md">Our curriculum covers essential early learning standards wrapped in engaging gameplay.</p>
</div>
<a className="text-slate-900 font-medium flex items-center gap-1 hover:gap-2 transition-all" href="#">
                    View all subjects <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 bg-slate-50 rounded-[2rem] border border-slate-100 p-8 flex flex-col justify-between group overflow-hidden relative hover:border-slate-200 transition-colors">
<div className="relative z-10">
<div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-4">
<iconify-icon icon="solar:calculator-linear" width="22"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Mathematical Thinking</h3>
<p className="text-slate-500 text-sm max-w-sm">From counting and patterns to simple arithmetic. We turn numbers into friends.</p>
</div>

<div className="absolute right-0 bottom-0 w-64 h-64 bg-purple-100/50 rounded-tl-[4rem] group-hover:scale-105 transition-transform duration-500">
<div className="absolute inset-0 flex items-center justify-center text-purple-300 opacity-50">
<span className="text-8xl font-bold tracking-tighter">123</span>
</div>
</div>
</div>

<div className="bg-slate-50 rounded-[2rem] border border-slate-100 p-8 flex flex-col justify-between group overflow-hidden relative hover:border-slate-200 transition-colors">
<div className="relative z-10">
<div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
<iconify-icon icon="solar:lightbulb-minimalistic-linear" width="22"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Logic &amp; Problem Solving</h3>
<p className="text-slate-500 text-sm">Puzzles that stretch critical thinking muscles.</p>
</div>
<div className="absolute -right-4 -bottom-4 w-32 h-32 bg-blue-100/50 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500"></div>
</div>

<div className="bg-slate-50 rounded-[2rem] border border-slate-100 p-8 flex flex-col justify-between group overflow-hidden relative hover:border-slate-200 transition-colors">
<div className="relative z-10">
<div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-4">
<iconify-icon icon="solar:notebook-minimalistic-linear" width="22"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Literacy &amp; Reading</h3>
<p className="text-slate-500 text-sm">Phonics, sight words, and story comprehension.</p>
</div>
<div className="absolute -right-4 -bottom-4 w-32 h-32 bg-orange-100/50 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500"></div>
</div>

<div className="md:col-span-2 bg-slate-50 rounded-[2rem] border border-slate-100 p-8 flex flex-col justify-between group overflow-hidden relative hover:border-slate-200 transition-colors">
<div className="relative z-10">
<div className="w-10 h-10 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4">
<iconify-icon icon="solar:palette-linear" width="22"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Creativity &amp; Arts</h3>
<p className="text-slate-500 text-sm max-w-sm">Drawing, coloring, and musical exploration to spark imagination.</p>
</div>
<div className="absolute right-0 bottom-0 w-64 h-64 bg-green-100/50 rounded-tl-[4rem] group-hover:scale-105 transition-transform duration-500">
<div className="absolute inset-0 flex items-center justify-center text-green-300 opacity-50">
<iconify-icon className="text-8xl" icon="solar:star-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="reviews">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">Designed for kids,<br/> trusted by parents.</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 text-slate-900">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900">100% Safe &amp; Ad-Free</h4>
<p className="text-sm text-slate-500 mt-1">A walled garden with no external links, ads, or hidden purchases. Your child is safe here.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 text-slate-900">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900">Screen Time Controls</h4>
<p className="text-sm text-slate-500 mt-1">Set daily limits and monitor usage effortlessly from your parent dashboard.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 text-slate-900">
<iconify-icon icon="solar:diploma-verified-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900">Curriculum Based</h4>
<p className="text-sm text-slate-500 mt-1">Aligned with early education standards to prepare them for school success.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-tr from-orange-100 to-purple-100 rounded-[2.5rem] -z-10 blur-xl opacity-60"></div>
<div className="bg-white rounded-[2rem] border border-slate-100 p-8 shadow-xl">
<div className="flex gap-1 text-orange-400 mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-xl text-slate-700 leading-relaxed mb-8">"My daughter used to struggle with numbers, but now she begs to play HappyLearn math games. It's incredible to see her having fun while actually learning."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>
<div>
<div className="font-semibold text-slate-900">Sarah Jenkins</div>
<div className="text-sm text-slate-500">Mother of a 6-year old</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-6xl mx-auto bg-slate-900 rounded-[2.5rem] px-6 py-20 text-center relative overflow-hidden">

<div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-20 -mt-20"></div>
<div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -mr-20 -mb-20"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Ready to start the adventure?</h2>
<p className="text-slate-400 text-lg mb-10">Join thousands of happy families. Try it free for 7 days, cancel anytime.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-900 font-medium hover:bg-slate-100 transition-all flex items-center justify-center gap-2 hover:scale-105">
                        Download for iOS
                    </button>
<button className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-800 text-white border border-slate-700 font-medium hover:bg-slate-700 transition-all flex items-center justify-center gap-2 hover:scale-105">
                        Download for Android
                    </button>
</div>
<p className="mt-6 text-xs text-slate-500">No credit card required for trial.</p>
</div>
</div>
</section>

<footer className="border-t border-slate-100 bg-white pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 rounded-lg bg-slate-900 flex items-center justify-center text-white">
<iconify-icon icon="solar:smile-circle-linear" width="14"></iconify-icon>
</div>
<span className="font-semibold text-slate-900 tracking-tight">HappyLearn</span>
</a>
<p className="text-sm text-slate-500">Making education accessible, safe, and fun for the next generation.</p>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Product</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="#">Features</a></li>
<li><a className="hover:text-slate-900" href="#">Pricing</a></li>
<li><a className="hover:text-slate-900" href="#">For Schools</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Support</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="#">Help Center</a></li>
<li><a className="hover:text-slate-900" href="#">Safety</a></li>
<li><a className="hover:text-slate-900" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="#">Privacy Policy</a></li>
<li><a className="hover:text-slate-900" href="#">Terms of Service</a></li>
<li><a className="hover:text-slate-900" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100 text-sm text-slate-400">
<p>© 2023 HappyLearn Inc. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-slate-900" href="#"><iconify-icon icon="solar:globe-linear" width="20"></iconify-icon></a>
<a className="hover:text-slate-900" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
