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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:drop-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-2xl font-semibold tracking-tight text-red-600">রক্তচাই</span>
</div>

<nav className="hidden md:flex space-x-8">
<a className="text-base font-medium text-slate-600 hover:text-red-600 transition-colors" href="#">কিভাবে কাজ করে</a>
<a className="text-base font-medium text-slate-600 hover:text-red-600 transition-colors" href="#">ডোনার হোন</a>
<a className="text-base font-medium text-slate-600 hover:text-red-600 transition-colors" href="#">যোগাযোগ</a>
</nav>

<div className="flex items-center">
<a className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-red-600 hover:bg-red-700 shadow-sm shadow-red-200 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" href="#">
                        রক্ত চাই
                    </a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-24 lg:pb-32">

<div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

<div className="lg:col-span-5 text-center lg:text-left mb-16 lg:mb-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 mb-6">
<span className="flex w-2 h-2 rounded-full bg-red-500"></span>
<span className="text-xs font-medium text-red-600">সময়মতো রক্ত পাওয়াই পারে একটি জীবন বাঁচাতে</span>
</div>
<h1 className="text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.15] mb-6">
                        জরুরি রক্তের <br className="hidden lg:block"/>
<span className="text-red-600">প্রয়োজন?</span>
</h1>
<p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        আপনার রক্তের অনুরোধ দ্রুত পৌঁছে যায় উপযুক্ত ডোনারদের কাছে। সহজ যোগাযোগের মাধ্যমে স্বল্প সময়ে রক্তের ব্যবস্থা করুন।
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<a className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-full text-white bg-red-600 hover:bg-red-700 shadow-md shadow-red-200 transition-all gap-2" href="#">
<iconify-icon icon="solar:bell-bing-linear" strokeWidth="1.5" width="22"></iconify-icon>
                            এখনই রক্ত চাই
                        </a>
<a className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-full text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all" href="#">
                            ডোনার হোন
                        </a>
</div>
</div>

<div className="lg:col-span-7 relative">
<div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="absolute w-[80%] h-[80%] border border-red-100 rounded-full"></div>
<div className="absolute w-[60%] h-[60%] border border-red-200/50 rounded-full animate-ping-slow"></div>
<div className="absolute w-[40%] h-[40%] border border-red-300/30 rounded-full animate-ping-slow animation-delay-1000"></div>
</div>

<div className="relative w-72 h-[32rem] bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border-[6px] border-slate-50 flex flex-col overflow-hidden z-20">

<div className="absolute top-0 inset-x-0 h-6 flex justify-center z-30">
<div className="w-24 h-5 bg-slate-50 rounded-b-xl"></div>
</div>

<div className="pt-10 pb-4 px-5 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
<div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
<iconify-icon icon="solar:user-linear" width="18"></iconify-icon>
</div>
<div className="w-20 h-2 bg-slate-200 rounded-full"></div>
<iconify-icon className="text-slate-400" icon="solar:menu-dots-linear" width="20"></iconify-icon>
</div>

<div className="flex-1 p-5 bg-slate-50/50 flex flex-col gap-4 relative">

<div className="w-full h-32 bg-slate-100 rounded-2xl relative overflow-hidden border border-slate-200/60">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
<div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30 mb-1 z-10">
<iconify-icon className="text-white" icon="solar:map-point-linear" width="18"></iconify-icon>
</div>
<div className="w-4 h-1.5 bg-slate-300 rounded-[100%] blur-[2px]"></div>
</div>
</div>

<div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-3 relative transform -translate-y-8 z-20">
<div className="flex justify-between items-start">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-red-500"></span>
<span className="text-xs font-medium text-red-600">জরুরি প্রয়োজন</span>
</div>
<span className="text-xs text-slate-400">২ মিনিট আগে</span>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-500 font-semibold text-base">O+</div>
<div>
<div className="w-24 h-3 bg-slate-200 rounded-full mb-2"></div>
<div className="w-16 h-2 bg-slate-100 rounded-full"></div>
</div>
</div>
<div className="w-full pt-2 mt-1 border-t border-slate-50">
<div className="w-full py-2 bg-red-600 rounded-xl text-center text-white text-xs font-medium">যোগাযোগ করুন</div>
</div>
</div>
</div>
</div>

<div className="absolute top-1/4 -right-6 lg:-right-12 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-30 animate-[bounce_4s_infinite]">
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
<iconify-icon icon="solar:check-circle-linear" width="24"></iconify-icon>
</div>
<div className="pr-2">
<p className="text-xs font-medium text-slate-800">ডোনার পাওয়া গেছে</p>
<p className="text-xs text-slate-500">ঢাকা মেডিকেল</p>
</div>
</div>
<div className="absolute bottom-1/4 -left-6 lg:-left-10 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-30 animate-[bounce_5s_infinite_reverse]">
<div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
<iconify-icon icon="solar:bell-linear" width="24"></iconify-icon>
</div>
<div className="pr-2">
<p className="text-xs font-medium text-slate-800">নতুন রিকোয়েস্ট</p>
<p className="text-xs text-slate-500">আপনার কাছাকাছি</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-red-600 py-6 border-y border-red-700">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
<div className="flex items-center gap-4 text-white">
<div className="p-2 bg-red-500 rounded-full hidden sm:block">
<iconify-icon icon="solar:danger-triangle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight">প্রতি মিনিট গুরুত্বপূর্ণ</h3>
<p className="text-sm text-red-100 mt-0.5">সময়মতো রক্ত না পেলে জীবন ঝুঁকিতে পড়তে পারে।</p>
</div>
</div>
<a className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-red-600 text-sm font-medium rounded-full hover:bg-red-50 transition-colors whitespace-nowrap" href="#">
<iconify-icon icon="solar:magnifer-linear" width="18"></iconify-icon>
                    এখনই ডোনার খুঁজুন
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-sm font-medium text-red-600 tracking-wide uppercase mb-2">কিভাবে কাজ করে</h2>
<p className="text-3xl font-semibold text-slate-900 tracking-tight">মাত্র ৩টি সহজ ধাপে রক্ত খুঁজে নিন</p>
</div>
<div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">

<div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-20 h-20 mx-auto bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm mb-6 group hover:bg-red-50 transition-colors">
<iconify-icon className="text-slate-400 group-hover:text-red-500 transition-colors" icon="solar:clipboard-text-linear" width="36"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">১. রক্তের অনুরোধ করুন</h3>
<p className="text-sm text-slate-600 leading-relaxed px-4">প্রয়োজনীয় তথ্য দিয়ে খুব সহজে রক্তের অনুরোধ জমা দিন প্ল্যাটফর্মে।</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-20 h-20 mx-auto bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm mb-6 group hover:bg-red-50 transition-colors">
<iconify-icon className="text-slate-400 group-hover:text-red-500 transition-colors" icon="solar:routing-2-linear" width="36"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">২. ডোনারদের নোটিফাই করা হবে</h3>
<p className="text-sm text-slate-600 leading-relaxed px-4">আপনার লোকেশন অনুযায়ী মিল থাকা ডোনারদের কাছে alert পৌঁছে যাবে।</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-20 h-20 mx-auto bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm mb-6 group hover:bg-red-50 transition-colors">
<iconify-icon className="text-slate-400 group-hover:text-red-500 transition-colors" icon="solar:phone-calling-linear" width="36"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">৩. যোগাযোগ করুন</h3>
<p className="text-sm text-slate-600 leading-relaxed px-4">ডোনারের সম্মতি পেলে সরাসরি যোগাযোগ করে দ্রুত রক্তের ব্যবস্থা করুন।</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
<div className="max-w-xl">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">জরুরি সময়ে রক্ত খোঁজার সহজ সমাধান</h2>
<p className="text-base text-slate-600">আপনার অনুরোধ দ্রুত পৌঁছে যায় উপযুক্ত ডোনারদের কাছে। সহজ যোগাযোগের মাধ্যমে স্বল্প সময়ে রক্তের ব্যবস্থা করুন।</p>
</div>
<div className="hidden lg:block">
<a className="text-sm font-medium text-red-600 hover:text-red-700 flex items-center gap-1" href="#">
                        আরও জানুন <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mb-4">
<iconify-icon className="text-orange-500" icon="solar:bolt-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">দ্রুত ডোনার খুঁজুন</h3>
<p className="text-sm text-slate-500">লোকেশন ভিত্তিক সার্চিং এর মাধ্যমে আপনার আশেপাশের ডোনারদের দ্রুত খুঁজে বের করুন।</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
<iconify-icon className="text-blue-500" icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">সময় বাঁচান</h3>
<p className="text-sm text-slate-500">সোশ্যাল মিডিয়ায় পোস্ট করে অপেক্ষার বদলে সরাসরি আগ্রহী ডোনারদের সাথে যুক্ত হোন।</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">সহজ ব্যবহার</h3>
<p className="text-sm text-slate-500">কোনো জটিল প্রক্রিয়া নেই। মাত্র কয়েকটি ক্লিকেই তৈরি করুন আপনার রক্তের রিকোয়েস্ট।</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center mb-4">
<iconify-icon className="text-purple-500" icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">দ্রুত যোগাযোগ</h3>
<p className="text-sm text-slate-500">নিরাপদ উপায়ে ডোনারের ফোন নম্বর সংগ্রহ করে সরাসরি কথা বলে কনফার্ম করুন।</p>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
<span className="text-sm font-medium text-slate-400 tracking-wide uppercase">নিরাপদ ও নির্ভরযোগ্য</span>
<div className="h-4 w-px bg-slate-200 hidden md:block"></div>
<div className="flex flex-wrap justify-center gap-6 md:gap-8">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:lock-password-linear" width="18"></iconify-icon>
<span className="text-sm font-medium text-slate-600">আপনার তথ্য সুরক্ষিত</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:shield-check-linear" width="18"></iconify-icon>
<span className="text-sm font-medium text-slate-600">স্প্যাম-মুক্ত যোগাযোগ</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:verify-linear" width="18"></iconify-icon>
<span className="text-sm font-medium text-slate-600">যাচাইকৃত অনুরোধ</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-red-50 overflow-hidden">

<div className="absolute -top-24 -right-24 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<span className="inline-block py-1 px-3 rounded-full bg-white text-xs font-medium text-red-600 mb-6 border border-red-100 shadow-sm">
                ডোনার হিসেবে যুক্ত হোন
            </span>
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">একটি রক্তদান, একটি জীবন</h2>
<p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
                আপনার দেওয়া রক্ত কারো জীবনের আশা হতে পারে। আজই ডোনার হিসেবে যুক্ত হয়ে অন্যের পাশে দাঁড়ান এবং একটি সুস্থ সমাজ গঠনে অংশ নিন।
            </p>
<div className="flex flex-col items-center gap-3">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-red-600 hover:bg-red-700 shadow-md shadow-red-200 transition-all" href="#">
                    ডোনার হোন
                </a>
<span className="text-xs text-slate-500">রেজিস্ট্রেশন করতে মাত্র ১ মিনিট সময় লাগবে</span>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">কে এই প্ল্যাটফর্মটি তৈরি করেছেন?</h2>
</div>
<div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:gap-12">

<div className="flex-shrink-0 relative">
<div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg bg-slate-200">
<img alt="Creator Portrait" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100">
<iconify-icon className="text-slate-400" icon="solar:pen-linear" width="16"></iconify-icon>
</div>
</div>

<div className="text-center md:text-left flex-1">
<h3 className="text-xl font-semibold text-slate-900 mb-1">জনাব ডিজাইনার</h3>
<p className="text-sm text-red-600 font-medium mb-4">UX Designer / Product Designer</p>
<p className="text-base text-slate-600 leading-relaxed mb-6">
                        "আমি একজন UX Designer, এবং জরুরি সময়ে রক্ত খুঁজে পাওয়ার বাস্তব সমস্যাকে সহজভাবে সমাধান করার লক্ষ্য থেকে এই প্ল্যাটফর্মটি ডিজাইন করেছি। বাংলাদেশের চিকিৎসা ব্যবস্থায় রক্তের জরুরি প্রয়োজনে মানুষের যে অসহায়ত্ব তৈরি হয়, তা দূর করতে প্রযুক্তির সঠিক ব্যবহার নিশ্চিত করাই আমার মূল উদ্দেশ্য।"
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-red-600 transition-colors" href="#">
                        যোগাযোগ করুন <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-xl font-semibold tracking-tight mb-8">সহায়তা প্রয়োজন?</h2>
<div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16">
<a className="flex items-center gap-3 group" href="tel:+880123456789">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-red-600 transition-colors">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<div className="text-left">
<p className="text-xs text-slate-400 mb-0.5">আমাদের কল করুন</p>
<p className="text-sm font-medium">+৮৮০ ১২৩-৪৫৬-৭৮৯</p>
</div>
</a>
<div className="hidden sm:block w-px h-10 bg-slate-800"></div>
<a className="flex items-center gap-3 group" href="mailto:support@roktochai.com">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-red-600 transition-colors">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div className="text-left">
<p className="text-xs text-slate-400 mb-0.5">ইমেইল করুন</p>
<p className="text-sm font-medium">support@roktochai.com</p>
</div>
</a>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

<div className="md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:drop-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">রক্তচাই</span>
</div>
<p className="text-sm text-slate-500 max-w-sm leading-relaxed">
                        জরুরি সময়ে দ্রুত রক্ত খুঁজে পাওয়ার একটি সহজ ও নির্ভরযোগ্য প্ল্যাটফর্ম। আমাদের লক্ষ্য প্রযুক্তির মাধ্যমে জীবন বাঁচানোর প্রক্রিয়াকে সহজ করা।
                    </p>
</div>

<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">প্লাটফর্ম</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-red-600 transition-colors" href="#">আমাদের সম্পর্কে</a></li>
<li><a className="text-sm text-slate-500 hover:text-red-600 transition-colors" href="#">কিভাবে কাজ করে</a></li>
<li><a className="text-sm text-slate-500 hover:text-red-600 transition-colors" href="#">ডোনার হোন</a></li>
<li><a className="text-sm text-slate-500 hover:text-red-600 transition-colors" href="#">যোগাযোগ</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">লিগ্যাল</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">গোপনীয়তা নীতি</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">শর্তাবলী</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">নিরাপত্তা</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-slate-500">
                    © ২০২৪ রক্তচাই • সর্বস্বত্ব সংরক্ষিত
                </p>
<div className="flex items-center gap-4">
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<span className="sr-only">Facebook</span>
<iconify-icon icon="solar:globus-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
