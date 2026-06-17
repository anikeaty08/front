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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-white flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white text-xs font-bold">A</div>
                ADLACY
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors" href="#features">ফিচার</a>
<a className="hover:text-white transition-colors" href="#comparison">পার্থক্য</a>
<a className="hover:text-white transition-colors" href="#pricing">প্রাইসিং</a>
</div>
<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors" href="#register">
                রেজিস্ট্রেশন করুন
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-indigo-300 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                ইন্সট্যান্ট টপ-আপ &amp; ফুল কন্ট্রোল
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1] mb-6">
                নিজের ক্রেডিট নিজেই <br/>
<span className="text-gradient-primary">আপডেট করুন</span>
</h1>
<p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
                অপেক্ষা নয় — এখন থেকে নিজের অ্যাড স্পেন্ড আপনি নিজেই পরিচালনা করুন। মাল্টিপল অ্যাকাউন্ট, আনলিমিটেড স্পেন্ডিং — সবই এক স্মার্ট প্যানেলে।
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
<a className="shine-effect w-full sm:w-auto h-12 px-8 rounded-full bg-white text-black font-medium flex items-center justify-center gap-2 hover:scale-105 transition-transform" href="#register">
                    এখনই রেজিস্ট্রেশন করুন
                    <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="w-full sm:w-auto h-12 px-8 rounded-full border border-white/10 bg-white/5 text-white font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors" href="#demo">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                    ডেমো ভিডিও দেখুন
                </a>
</div>
<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-gray-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:shield-check-linear"></iconify-icon>
                    সিকিউর পেমেন্ট
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:headset-linear"></iconify-icon>
                    24/7 সাপোর্ট
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:users-group-rounded-linear"></iconify-icon>
                    ট্রাস্টেড 1200+ অ্যাডভার্টাইজার
                </div>
</div>
</div>
</section>

<section className="py-20 px-6 border-t border-white/5" id="features">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">কেন আমাদের প্যানেল?</h2>
<p className="text-gray-400">নিচের মূল সুবিধাগুলো আপনার কাজকে দ্রুত, নিরাপদ ও স্কেলেবল করে তুলবে।</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl group hover:border-indigo-500/30 transition-colors">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">ইন্সট্যান্ট টপ-আপ</h3>
<p className="text-gray-400 text-sm leading-relaxed">
                        এক ক্লিকেই অ্যাড অ্যাকাউন্ট টপ-আপ। কোনো এজেন্সির জন্য অপেক্ষা করতে হবে না।
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:border-indigo-500/30 transition-colors">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:card-reciept-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">আনলিমিটেড স্পেন্ডিং</h3>
<p className="text-gray-400 text-sm leading-relaxed">
                        আপনার প্রয়োজন যত, তত স্পেন্ড। কোনো ডেইলি লিমিটেশন নেই, বিজনেস স্কেল করুন স্বাধীনভাবে।
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:border-indigo-500/30 transition-colors">
<div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:widget-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">মাল্টিপল অ্যাকাউন্ট</h3>
<p className="text-gray-400 text-sm leading-relaxed">
                        সব অ্যাড অ্যাকাউন্ট এক প্যানেল থেকে পরিচালনা করুন। বিজনেস ম্যানেজার অ্যাক্সেস প্যানেল থেকেই।
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white/[0.02]">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
<div className="flex-1 space-y-8">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
                    ওয়ালেট সুবিধা — <br/>
<span className="text-gray-500">আপনার পেমেন্ট, আপনার কন্ট্রোল</span>
</h2>
<p className="text-gray-400 text-lg">
                    আপনার ইচ্ছামত পেমেন্ট করে ওয়ালেটে যোগ করুন। যখন যেই অ্যাড অ্যাকাউন্টে প্রয়োজন — সাথে সাথে টপ-আপ করে নিন। এতে সময় বাঁচে, অ্যাড বন্ধ হওয়ার ঝামেলাও থাকে না।
                </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
<div className="flex items-center gap-3 text-gray-300">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
                        রিয়েল-টাইম ব্যালান্স
                    </div>
<div className="flex items-center gap-3 text-gray-300">
<iconify-icon className="text-green-500" icon="solar:calculator-linear"></iconify-icon>
                        অটো হিসাব
                    </div>
<div className="flex items-center gap-3 text-gray-300">
<iconify-icon className="text-green-500" icon="solar:shield-keyhole-linear"></iconify-icon>
                        সিকিউর ট্রানজাকশন
                    </div>
<div className="flex items-center gap-3 text-gray-300">
<iconify-icon className="text-green-500" icon="solar:clock-circle-linear"></iconify-icon>
                        ইনস্ট্যান্ট ইউসেজ
                    </div>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-2 text-indigo-400 font-medium hover:text-indigo-300 transition-colors border-b border-indigo-400/30 pb-0.5" href="#register">
                        ওয়ালেট ব্যবহার শুরু করুন
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="flex-1 w-full relative">

<div className="relative w-full aspect-[4/3] bg-[#111] border border-white/10 rounded-2xl p-6 overflow-hidden shadow-2xl">
<div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
<div className="text-sm text-gray-400">Current Balance</div>
<div className="text-2xl font-mono text-white">$1,250.00</div>
</div>
<div className="space-y-3">
<div className="h-12 w-full bg-white/5 rounded-lg flex items-center px-4 justify-between">
<div className="w-24 h-2 bg-gray-700 rounded"></div>
<div className="w-12 h-2 bg-green-500/50 rounded"></div>
</div>
<div className="h-12 w-full bg-white/5 rounded-lg flex items-center px-4 justify-between">
<div className="w-32 h-2 bg-gray-700 rounded"></div>
<div className="w-16 h-2 bg-gray-600 rounded"></div>
</div>
<div className="h-12 w-full bg-white/5 rounded-lg flex items-center px-4 justify-between opacity-50">
<div className="w-20 h-2 bg-gray-700 rounded"></div>
<div className="w-10 h-2 bg-gray-600 rounded"></div>
</div>
</div>

<div className="absolute bottom-6 right-6 bg-indigo-600 text-white text-xs px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon>
                        Top-up Successful
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="comparison">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Adlacy বনাম অন্যান্য এজেন্সি</h2>
<p className="text-gray-400 mt-4">পার্থক্যটি নিজেই দেখুন</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-gradient-to-b from-indigo-900/20 to-transparent border border-indigo-500/30 p-8 rounded-2xl relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-indigo-500"></div>
<h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
<iconify-icon className="text-indigo-500" icon="solar:star-bold"></iconify-icon>
                        Adlacy
                    </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-gray-300">
<iconify-icon className="text-indigo-400 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>৩০ মিনিটে এড একাউন্ট রেডি করে একসেস</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<iconify-icon className="text-indigo-400 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>মাত্র ৫ মিনিটে ক্রেডিট আপডেট (সপ্তাহের ৭ দিন)</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<iconify-icon className="text-indigo-400 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>ক্লায়েন্টের বিজনেসের/পেজের নামে এড একাউন্ট</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<iconify-icon className="text-indigo-400 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>মাল্টিপল ব্যাংক একাউন্টে পেমেন্ট সুবিধা &amp; ইনভয়েস</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<iconify-icon className="text-indigo-400 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>এসএমএস এবং ওয়েবপোর্টাল নোটিফিকেশন</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<iconify-icon className="text-indigo-400 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>কাস্টমার ডাটা শতভাগ নিরাপত্তা &amp; আনলিমিটেড ক্রেডিট</span>
</li>
</ul>
</div>

<div className="glass-panel p-8 rounded-2xl opacity-80">
<h3 className="text-2xl font-semibold text-gray-400 mb-8 flex items-center gap-2">
                        অন্যান্য এজেন্সি
                    </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-gray-500">
<iconify-icon className="text-red-900/50 mt-0.5 shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<span>টাকা দিয়ে অপেক্ষায় থাকতে হবে</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-500">
<iconify-icon className="text-red-900/50 mt-0.5 shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<span>পারসোনাল একাউন্টে পেমেন্ট নিবে (ঝুঁকিপূর্ণ)</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-500">
<iconify-icon className="text-red-900/50 mt-0.5 shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<span>ইনভয়েস এবং মানি রিসিপ্ট দিবে না</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-500">
<iconify-icon className="text-red-900/50 mt-0.5 shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<span>লিমিটেড ক্রেডিট &amp; ডলার লোড অনিশ্চয়তা</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-500">
<iconify-icon className="text-red-900/50 mt-0.5 shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<span>শেয়ারড একাউন্ট ও কাস্টমার ডাটা ঝুঁকি</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-500">
<iconify-icon className="text-red-900/50 mt-0.5 shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<span>সীমিত সময় সাপোর্ট</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="px-6 py-12">
<div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-gray-900 to-black border border-white/10 p-8 md:p-12 text-center relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 blur-[80px] rounded-full pointer-events-none"></div>
<h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                আপনি কি ভেরিফাইড এড একাউন্ট দিয়ে ফেসবুকে প্রোমোশন করতে চান?
            </h2>
<p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                সম্পূর্ণ ডেডিকেটেড একাউন্ট পাচ্ছেন মাত্র <span className="text-white font-semibold">$১০</span> ডলার থেকে শুরু করে যেকোনো এমাউন্ট পেমেন্ট করে।
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                    আবেদন করুন
                </button>
<button className="border border-white/20 text-white px-8 py-3 rounded-full font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                    09647105511
                </button>
</div>
</div>
</section>

<section className="py-20 px-6 border-t border-white/5">
<div className="max-w-7xl mx-auto">
<h2 className="text-2xl font-semibold text-white mb-10">স্পেশাল সুবিধাসমূহ</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">

<div className="flex items-start gap-3 text-sm text-gray-400 hover:text-gray-200 transition-colors">
<iconify-icon className="text-indigo-500 mt-0.5" icon="solar:check-square-linear"></iconify-icon>
                    অনলাইনে আপনার কোম্পানির নামে ওয়েববেসড পোর্টাল
                </div>
<div className="flex items-start gap-3 text-sm text-gray-400 hover:text-gray-200 transition-colors">
<iconify-icon className="text-indigo-500 mt-0.5" icon="solar:check-square-linear"></iconify-icon>
                    মালিক, পার্টনার এবং স্টাফদের একসেস সুবিধা
                </div>
<div className="flex items-start gap-3 text-sm text-gray-400 hover:text-gray-200 transition-colors">
<iconify-icon className="text-indigo-500 mt-0.5" icon="solar:check-square-linear"></iconify-icon>
                    পৃথিবীর যেকোনো প্রান্তে বসে ক্রেডিট রিকুয়েস্ট
                </div>
<div className="flex items-start gap-3 text-sm text-gray-400 hover:text-gray-200 transition-colors">
<iconify-icon className="text-indigo-500 mt-0.5" icon="solar:check-square-linear"></iconify-icon>
                    রিয়েল টাইম পেমেন্ট নোটিফিকেশন (SMS/Email)
                </div>
<div className="flex items-start gap-3 text-sm text-gray-400 hover:text-gray-200 transition-colors">
<iconify-icon className="text-indigo-500 mt-0.5" icon="solar:check-square-linear"></iconify-icon>
                    বিজনেস ডকুমেন্টস রিলেটেড সহযোগিতা
                </div>
<div className="flex items-start gap-3 text-sm text-gray-400 hover:text-gray-200 transition-colors">
<iconify-icon className="text-indigo-500 mt-0.5" icon="solar:check-square-linear"></iconify-icon>
                    গ্রাফিক্স, ভিডিও এবং ল্যান্ডিং পেজ সাপোর্ট
                </div>
<div className="flex items-start gap-3 text-sm text-gray-400 hover:text-gray-200 transition-colors">
<iconify-icon className="text-indigo-500 mt-0.5" icon="solar:check-square-linear"></iconify-icon>
                    যেকোনো মাসের বা তারিখের একাউন্ট স্টেটমেন্ট
                </div>
<div className="flex items-start gap-3 text-sm text-gray-400 hover:text-gray-200 transition-colors">
<iconify-icon className="text-indigo-500 mt-0.5" icon="solar:check-square-linear"></iconify-icon>
                    সাপোর্ট টিকেট সিস্টেম
                </div>
<div className="flex items-start gap-3 text-sm text-gray-400 hover:text-gray-200 transition-colors">
<iconify-icon className="text-indigo-500 mt-0.5" icon="solar:check-square-linear"></iconify-icon>
                    পিক্সেল সেট-আপ ও সার্ভার সাইড ট্র্যাকিং
                </div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white/[0.02]">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-semibold text-white mb-6">কারা এই সার্ভিস ব্যবহার করবেন?</h2>
<div className="space-y-4">
<div className="p-4 rounded-xl border border-white/5 bg-white/5 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
</div>
<span className="text-gray-300">যারা অ্যাড স্পেন্ড দ্রুত বাড়াতে চান</span>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-white/5 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:shop-linear"></iconify-icon>
</div>
<span className="text-gray-300">ই-কমার্স / এজেন্সি / মিডিয়া বাইয়ার</span>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-white/5 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:layers-linear"></iconify-icon>
</div>
<span className="text-gray-300">যাদের মাল্টিপল অ্যাড অ্যাকাউন্ট দরকার</span>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-white/5 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:tuning-square-2-linear"></iconify-icon>
</div>
<span className="text-gray-300">যারা ফুল কন্ট্রোল ও ইনস্ট্যান্ট এক্সেস চান</span>
</div>
</div>
</div>
<div className="h-full flex items-center justify-center">

<div className="relative w-72 h-72">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-full blur-[60px] opacity-40"></div>
<div className="absolute inset-0 border border-white/10 rounded-full flex items-center justify-center">
<div className="w-48 h-48 border border-white/10 rounded-full flex items-center justify-center">
<div className="w-24 h-24 bg-white/10 rounded-full backdrop-blur-xl"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl font-semibold text-center text-white mb-12">সচরাচর জিজ্ঞাসা (FAQ)</h2>
<div className="space-y-4">
<details className="group glass-panel rounded-xl overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none text-white font-medium">
                        অ্যাকাউন্ট ও পেমেন্ট কি সিকিউর?
                        <iconify-icon className="transition-transform group-open:rotate-180 text-gray-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                        হ্যাঁ, সব পেমেন্ট এনক্রিপ্টেড ও সিকিউর গেটওয়ের মাধ্যমে হয়। আমাদের সিস্টেম সম্পূর্ণ নিরাপদ এবং পরীক্ষিত।
                    </div>
</details>
<details className="group glass-panel rounded-xl overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none text-white font-medium">
                        রেজিস্ট্রেশনের পর কি সাথে সাথে অ্যাড অ্যাকাউন্ট পাব?
                        <iconify-icon className="transition-transform group-open:rotate-180 text-gray-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                        মাত্র ৩০ মিনিটে এড একাউন্ট রেডি করে একসেস দেয়া হয়।
                    </div>
</details>
<details className="group glass-panel rounded-xl overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none text-white font-medium">
                        টপ-আপ কি রিয়েল-টাইমে হয়?
                        <iconify-icon className="transition-transform group-open:rotate-180 text-gray-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                        জি, ওয়ালেটে ব্যালান্স থাকলে আপনি নিজেই যেকোনো সময় ইনস্ট্যান্ট টপ-আপ করতে পারবেন।
                    </div>
</details>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-black">
<div className="max-w-7xl mx-auto flex flex-col items-center text-center">
<div className="mb-8">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">আপনার অ্যাড স্পেন্ডকে আজই স্মার্ট করুন!</h2>
<p className="text-gray-400">ইন্সট্যান্ট টপ-আপ + ফুল কন্ট্রোল + স্মার্ট ড্যাশবোর্ড</p>
</div>
<a className="shine-effect px-8 py-3 rounded-full bg-white text-black font-semibold mb-12 hover:scale-105 transition-transform" href="#register">
                🔥 এখনই রেজিস্ট্রেশন করুন
            </a>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-t border-white/10 pt-8">
<div className="text-left">
<div className="text-white font-bold mb-2">Adlacy</div>
<p className="text-xs text-gray-500">আপনার বিশ্বস্ত অ্যাড ম্যানেজমেন্ট পার্টনার।</p>
</div>
<div className="text-left md:text-center">
<div className="text-sm text-gray-400 space-y-2">
<a className="block hover:text-white" href="#">Terms of Service</a>
<a className="block hover:text-white" href="#">Privacy Policy</a>
</div>
</div>
<div className="text-left md:text-right">
<p className="text-sm text-white mb-2">Contact Support</p>
<p className="text-xs text-gray-500">09647105511</p>
</div>
</div>
<div className="mt-8 text-xs text-gray-600">
                © 2023 Adlacy. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
