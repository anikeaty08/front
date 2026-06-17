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
fontFamily: {
sans: ['Noto Sans Bengali', 'Inter', 'sans-serif'],
mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
},
colors: {
brand: {
50: '#eff6ff',
100: '#dbeafe',
500: '#3b82f6',
600: '#2563eb',
900: '#1e3a8a',
}
}
}
}
}



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
      

<nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:wallet-money-linear" width="20"></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tight uppercase text-slate-800" style={{letterSpacing: '0.1em'}}>ShohojFee</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#features">ফিচারসমূহ</a>
<a className="hover:text-slate-900 transition-colors" href="#how-it-works">কীভাবে কাজ করে</a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">প্রাইসিং</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900" href="#">লগিন</a>
<a className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm" href="#">ফ্রি ট্রায়াল শুরু করুন</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
<div className="absolute inset-0 bg-grid opacity-50 z-0 mask-image:linear-gradient(to_bottom,white,transparent)"></div>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-medium mb-6">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                নতুন: স্বয়ংক্রিয় হোয়াটসঅ্যাপ রিমাইন্ডার
            </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight md:leading-tight">
                কোচিংয়ের ফি কালেকশন ও <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">এসএমএস ম্যানেজমেন্ট</span> এখন পানির মতো সহজ
            </h1>
<p className="mt-6 text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                খাতা-কলমের ঝামেলা ভুলে যান। এক ক্লিকে ফি এন্ট্রি, ডিউ লিস্ট চেক এবং অভিভাবকদের কাছে অটোমেটিক এসএমএস পাঠিয়ে সময় ও টাকা দুটোই বাঁচান।
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-brand-600 text-white px-6 py-3 rounded-full text-base font-medium hover:bg-brand-700 transition-colors shadow-sm flex items-center justify-center gap-2" href="#">
                    ফ্রি অ্যাকাউন্ট খুলুন
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-6 py-3 rounded-full text-base font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2" href="#">
<iconify-icon icon="solar:play-circle-linear"></iconify-icon>
                    ডেস্কবোর্ড দেখুন
                </a>
</div>

<div className="mt-16 mx-auto max-w-4xl bg-white border border-slate-200/60 rounded-2xl shadow-2xl shadow-slate-200/50 overflow-hidden transform md:-rotate-1 hover:rotate-0 transition-transform duration-500">
<div className="h-10 border-b border-slate-100 flex items-center px-4 gap-2 bg-slate-50/50">
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
</div>
<div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
<div className="col-span-1 border-r border-slate-100 pr-6 hidden md:block">
<div className="space-y-4">
<div className="h-8 bg-slate-100 rounded-md w-3/4"></div>
<div className="h-8 bg-slate-50 rounded-md w-full"></div>
<div className="h-8 bg-slate-50 rounded-md w-5/6"></div>
<div className="h-8 bg-slate-50 rounded-md w-full"></div>
</div>
</div>
<div className="col-span-2 space-y-4">
<div className="flex justify-between items-center mb-6">
<div>
<h3 className="text-lg font-medium tracking-tight text-slate-800">আজকের ফি কালেকশন</h3>
<p className="text-xs text-slate-400 mt-1">১২ জন স্টুডেন্ট পেমেন্ট করেছে</p>
</div>
<div className="text-xl font-semibold text-brand-600 tracking-tight">৳ ১৫,৫০০</div>
</div>

<div className="flex items-center justify-between p-3 border border-slate-100 rounded-xl bg-slate-50/30">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-medium text-sm">RA</div>
<div>
<div className="text-sm font-medium text-slate-800">রাকিব হাসান</div>
<div className="text-xs text-slate-500">ক্লাস ১০ • বিজ্ঞান</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-emerald-600">৳ ১,২০০</div>
<div className="text-xs text-slate-400">SMS Sent ✓</div>
</div>
</div>

<div className="flex items-center justify-between p-3 border border-slate-100 rounded-xl bg-slate-50/30">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-medium text-sm">SM</div>
<div>
<div className="text-sm font-medium text-slate-800">সাদিয়া মির্জা</div>
<div className="text-xs text-slate-500">ক্লাস ৯ • কমার্স</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-emerald-600">৳ ১,৫০০</div>
<div className="text-xs text-slate-400">SMS Sent ✓</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-slate-200/50">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">যে সমস্যাগুলো প্রতিদিন আপনার সময় নষ্ট করছে</h2>
<p className="mt-4 text-sm md:text-base text-slate-500">কোচিং পরিচালনা করতে গিয়ে বেশিরভাগ পরিচালক এই সমস্যাগুলোর সম্মুখীন হন।</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
<div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mb-4">
<iconify-icon icon="solar:document-broken" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-800 mb-2 tracking-tight">খাতা মেইনটেইন করার ঝামেলা</h3>
<p className="text-sm text-slate-500 leading-relaxed">হাজারো স্টুডেন্টের হিসাব খাতায় লিখে রাখা কষ্টকর। খাতা হারিয়ে গেলে বা নষ্ট হলে সব হিসাব শেষ।</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
<div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center mb-4">
<iconify-icon icon="solar:wallet-money-broken" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-800 mb-2 tracking-tight">বকেয়া ফি ট্র্যাকিং</h3>
<p className="text-sm text-slate-500 leading-relaxed">কে টাকা দিয়েছে আর কে দেয় নি, মাস শেষে এই হিসাব মেলাতে গিয়ে ঘণ্টার পর ঘণ্টা সময় নষ্ট হয়।</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
<div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center mb-4">
<iconify-icon icon="solar:smartphone-update-broken" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-800 mb-2 tracking-tight">অভিভাবকদের সাথে যোগাযোগ</h3>
<p className="text-sm text-slate-500 leading-relaxed">স্টুডেন্ট ফি দিলেও অভিভাবকরা অনেক সময় তা জানেন না। ম্যানুয়ালি সবাইকে এসএমএস করা বিরক্তিকর।</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="features">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-6">একটি প্ল্যাটফর্ম, সব সমস্যার সমাধান</h2>
<p className="text-base text-slate-500 mb-8 leading-relaxed">ShohojFee ডিজাইন করা হয়েছে আপনার প্রতিদিনের কাজগুলোকে স্বয়ংক্রিয় করার জন্য।</p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
<iconify-icon icon="solar:letter-broken" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-slate-800">অটোমেটিক কনফার্মেশন এসএমএস</h4>
<p className="text-sm text-slate-500 mt-1">ফি রিসিভ করার সাথে সাথেই অভিভাবকের নাম্বারে ব্র্যান্ড নেম সহ কনফার্মেশন মেসেজ চলে যাবে।</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
<iconify-icon icon="solar:danger-circle-broken" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-slate-800">এক ক্লিকে ডিউ রিমাইন্ডার</h4>
<p className="text-sm text-slate-500 mt-1">মাস শেষে যাদের ফি বকেয়া আছে, ফিল্টার করে সবাইকে এক ক্লিকে রিমাইন্ডার এসএমএস পাঠান।</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
<iconify-icon icon="solar:chart-square-broken" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-slate-800">দৈনিক ও মাসিক রিপোর্ট</h4>
<p className="text-sm text-slate-500 mt-1">আজ কত কালেকশন হলো বা এই মাসে কত টাকা আয় হলো, সবকিছুর ডিটেইলস রিপোর্ট দেখুন ড্যাশবোর্ডে।</p>
</div>
</div>
</div>
</div>
<div className="flex-1 w-full bg-slate-50 rounded-3xl p-8 border border-slate-200/50 flex justify-center items-center">

<div className="w-64 bg-white border-4 border-slate-800 rounded-[2.5rem] p-4 shadow-xl relative overflow-hidden h-96">

<div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-800 rounded-full"></div>
<div className="mt-8 space-y-4">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600">
<iconify-icon icon="solar:user-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-slate-800">ShohojFee</div>
<div className="text-[10px] text-slate-400">11:45 AM</div>
</div>
</div>

<div className="bg-slate-100 rounded-2xl rounded-tl-none p-3 text-xs text-slate-700 leading-relaxed max-w-[85%]">
                                Dear Parent, We have received BDT 1500 for Rakib Hasan's March tuition fee. Thanks - Genius Coaching.
                            </div>

<div className="bg-slate-100 rounded-2xl rounded-tl-none p-3 text-xs text-slate-700 leading-relaxed max-w-[85%] mt-4">
                                Reminder: BDT 1500 is due for April tuition fee. Kindly pay by 10th. - Genius Coaching.
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white" id="how-it-works">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">খুব সহজেই ব্যবহার শুরু করুন</h2>
<p className="mt-4 text-sm md:text-base text-slate-400">কোনো টেকনিক্যাল নলেজ ছাড়াই যে কেউ ব্যবহার করতে পারবেন।</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-[1px] bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 -z-10 w-2/3 mx-auto"></div>
<div className="text-center relative">
<div className="w-20 h-20 mx-auto bg-slate-800 rounded-2xl flex items-center justify-center text-2xl font-semibold text-brand-400 mb-6 border border-slate-700 shadow-inner">১</div>
<h3 className="text-lg font-medium mb-2 tracking-tight">স্টুডেন্ট অ্যাড করুন</h3>
<p className="text-sm text-slate-400 leading-relaxed">স্টুডেন্টের নাম, ব্যাচ এবং অভিভাবকের মোবাইল নাম্বার দিয়ে প্রোফাইল তৈরি করুন।</p>
</div>
<div className="text-center relative">
<div className="w-20 h-20 mx-auto bg-slate-800 rounded-2xl flex items-center justify-center text-2xl font-semibold text-brand-400 mb-6 border border-slate-700 shadow-inner">২</div>
<h3 className="text-lg font-medium mb-2 tracking-tight">পেমেন্ট রিসিভ করুন</h3>
<p className="text-sm text-slate-400 leading-relaxed">স্টুডেন্ট টাকা দিলে ড্যাশবোর্ড থেকে অ্যামাউন্ট এন্ট্রি করে সাবমিট বাটনে ক্লিক করুন।</p>
</div>
<div className="text-center relative">
<div className="w-20 h-20 mx-auto bg-slate-800 rounded-2xl flex items-center justify-center text-2xl font-semibold text-brand-400 mb-6 border border-slate-700 shadow-inner">৩</div>
<h3 className="text-lg font-medium mb-2 tracking-tight">অটো এসএমএস যাবে</h3>
<p className="text-sm text-slate-400 leading-relaxed">ব্যাস! আপনার আর কোনো কাজ নেই। সিস্টেম নিজে থেকেই কনফার্মেশন মেসেজ পাঠিয়ে দেবে।</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="pricing">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">আপনার প্রয়োজন অনুযায়ী প্যাকেজ বেছে নিন</h2>
<p className="mt-4 text-sm md:text-base text-slate-500">লুকানো কোনো চার্জ নেই। আনলিমিটেড স্টুডেন্ট ডাটাবেস।</p>

<div className="mt-8 flex items-center justify-center gap-3 text-sm">
<span className="text-slate-600 font-medium">মাসিক বিলিং</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-600"></div>
</label>
<span className="text-slate-900 font-medium">বাৎসরিক বিলিং <span className="ml-1 text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium">২ মাস ফ্রি</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">

<div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col">
<h3 className="text-lg font-medium text-slate-800 tracking-tight">বেসিক</h3>
<p className="text-sm text-slate-500 mt-2 mb-6">নতুন বা ছোট কোচিংয়ের জন্য উপযুক্ত</p>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight text-slate-900">৳ ৪৯৯</span>
<span className="text-sm text-slate-500">/ মাস</span>
</div>
<ul className="space-y-4 mb-8 flex-1 text-sm text-slate-600">
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            আনলিমিটেড স্টুডেন্ট অ্যাড
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            ফি কালেকশন ও হিস্ট্রি
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            ২০০ টি ফ্রি এসএমএস/মাস
                        </li>
<li className="flex items-center gap-3 text-slate-400">
<iconify-icon className="text-slate-300 text-lg" icon="solar:close-circle-linear"></iconify-icon>
                            অটোমেটিক ডিউ রিমাইন্ডার
                        </li>
</ul>
<a className="block w-full text-center py-2.5 px-4 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors text-sm" href="#">শুরু করুন</a>
</div>

<div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl shadow-brand-900/10 flex flex-col relative transform md:-translate-y-2">
<div className="absolute top-0 right-8 transform -translate-y-1/2">
<span className="bg-gradient-to-r from-brand-500 to-indigo-500 text-white text-[10px] uppercase font-medium tracking-wider px-3 py-1 rounded-full">জনপ্রিয়</span>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">প্রিমিয়াম</h3>
<p className="text-sm text-slate-400 mt-2 mb-6">প্রফেশনাল কোচিং সেন্টারের জন্য</p>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight text-white">৳ ৯৯৯</span>
<span className="text-sm text-slate-400">/ মাস</span>
</div>
<ul className="space-y-4 mb-8 flex-1 text-sm text-slate-300">
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            বেসিক এর সকল ফিচার
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            ১০০০ টি ফ্রি এসএমএস/মাস
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            অটোমেটিক ডিউ রিমাইন্ডার
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            হোয়াটসঅ্যাপ ইন্টিগ্রেশন
                        </li>
</ul>
<a className="block w-full text-center py-2.5 px-4 rounded-xl bg-brand-600 text-white font-medium hover:bg-brand-500 transition-colors text-sm border border-brand-500" href="#">শুরু করুন</a>
</div>
</div>
<p className="text-center text-xs text-slate-400 mt-8">অতিরিক্ত এসএমএস কিনতে পারবেন মাত্র ০.২৫ টাকা/এসএমএস রেটে।</p>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 text-center mb-16">যাঁরা ব্যবহার করছেন তাঁদের মতামত</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl">
<div className="flex gap-1 text-amber-400 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-6">"আগে মাস শেষে ফি কালেকশনের হিসাব মেলাতে মেলাতে রাত পার হয়ে যেত। এখন সফটওয়্যারেই সব হিসাব থাকে, আর স্টুডেন্টরাও রিমাইন্ডার পেয়ে সময়মত ফি দিয়ে দেয়।"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-sm font-medium">SA</div>
<div>
<div className="text-sm font-medium text-slate-900">শরিফুল ইসলাম</div>
<div className="text-xs text-slate-500">পরিচালক, জিনিয়াস একাডেমি</div>
</div>
</div>
</div>

<div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl">
<div className="flex gap-1 text-amber-400 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-6">"এসএমএস ফিচারটি অসাধারণ। অভিভাবকরা এখন অনেক খুশি কারণ তারা পেমেন্ট করার সাথে সাথেই মেসেজ পেয়ে যান। আমাদের প্রফেশনালিজম অনেক বেড়েছে।"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-sm font-medium">MA</div>
<div>
<div className="text-sm font-medium text-slate-900">মাহমুদুল হাসান</div>
<div className="text-xs text-slate-500">ফাউন্ডার, সাইন্স কেয়ার</div>
</div>
</div>
</div>

<div className="hidden lg:block p-6 bg-slate-50 border border-slate-100 rounded-2xl">
<div className="flex gap-1 text-amber-400 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-6">"মোবাইল থেকে খুব সহজেই চালানো যায়, কোনো অ্যাপ ইন্সটল করার দরকার নেই। খুব ইউজার ফ্রেন্ডলি একটি সিস্টেম। প্রাইসিংটাও বেশ সাশ্রয়ী মনে হয়েছে।"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-sm font-medium">RN</div>
<div>
<div className="text-sm font-medium text-slate-900">রুমানা নাজনীন</div>
<div className="text-xs text-slate-500">প্রিন্সিপাল, কিডস টিউটোরিয়াল</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-slate-200/50">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 text-center mb-10">সাধারণ জিজ্ঞাসা (FAQ)</h2>
<div className="space-y-4">

<details className="group bg-white border border-slate-200 rounded-xl px-6 py-4 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm">
<summary className="flex justify-between items-center font-medium text-slate-800 text-sm md:text-base outline-none">
                        কীভাবে সফটওয়্যারটি ব্যবহার শুরু করব?
                        <span className="transition-transform duration-300 group-open:-rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-slate-500 mt-4 text-sm leading-relaxed">
                        উপরে "ফ্রি ট্রায়াল শুরু করুন" বাটনে ক্লিক করে একটি অ্যাকাউন্ট খুলুন। এরপর আপনার কোচিংয়ের নাম দিয়ে লগিন করলেই স্টুডেন্ট অ্যাড করা শুরু করতে পারবেন।
                    </p>
</details>
<details className="group bg-white border border-slate-200 rounded-xl px-6 py-4 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm">
<summary className="flex justify-between items-center font-medium text-slate-800 text-sm md:text-base outline-none">
                        প্যাকেজের ফ্রি এসএমএস শেষ হয়ে গেলে কী করব?
                        <span className="transition-transform duration-300 group-open:-rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-slate-500 mt-4 text-sm leading-relaxed">
                        ফ্রি লিমিট শেষ হয়ে গেলে আপনি ড্যাশবোর্ড থেকে খুব সহজেই এসএমএস ব্যালেন্স রিচার্জ করে নিতে পারবেন। প্রতি এসএমএস এর খরচ মাত্র ০.২৫ টাকা।
                    </p>
</details>
<details className="group bg-white border border-slate-200 rounded-xl px-6 py-4 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm">
<summary className="flex justify-between items-center font-medium text-slate-800 text-sm md:text-base outline-none">
                        আমার মোবাইল বা ল্যাপটপ থেকে কি এটি চালানো যাবে?
                        <span className="transition-transform duration-300 group-open:-rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-slate-500 mt-4 text-sm leading-relaxed">
                        হ্যাঁ, ShohojFee একটি ক্লাউড বেজড সফটওয়্যার। যেকোনো ইন্টারনেট যুক্ত মোবাইল, কম্পিউটার বা ল্যাপটপের ব্রাউজার থেকে এটি ব্যবহার করতে পারবেন।
                    </p>
</details>
<details className="group bg-white border border-slate-200 rounded-xl px-6 py-4 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm">
<summary className="flex justify-between items-center font-medium text-slate-800 text-sm md:text-base outline-none">
                        আমার ডাটা কি নিরাপদ থাকবে?
                        <span className="transition-transform duration-300 group-open:-rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-slate-500 mt-4 text-sm leading-relaxed">
                        অবশ্যই। আপনার কোচিংয়ের সমস্ত ডাটা সুরক্ষিত সার্ভারে এনক্রিপ্টেড অবস্থায় থাকে। শুধুমাত্র আপনি আপনার পাসওয়ার্ড দিয়ে সেগুলো দেখতে পারবেন।
                    </p>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">
<div className="absolute inset-0 bg-brand-50/50"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">আজই আপনার কোচিংকে ডিজিটাল করুন</h2>
<p className="text-base text-slate-600 mb-10 max-w-2xl mx-auto">১৪ দিনের ফ্রি ট্রায়াল দিয়ে নিজেই যাচাই করে দেখুন। ক্রেডিট কার্ডের কোনো প্রয়োজন নেই।</p>
<a className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20" href="#">
                ফ্রি ট্রায়াল শুরু করুন
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-brand-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:wallet-money-linear" width="14"></iconify-icon>
</div>
<span className="font-semibold text-sm tracking-tight uppercase text-slate-800" style={{letterSpacing: '0.1em'}}>ShohojFee</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed mb-4">কোচিং সেন্টারের ফি কালেকশন এবং এসএমএস ম্যানেজমেন্টের সবচেয়ে সহজ এবং আধুনিক সমাধান।</p>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">প্রোডাক্ট</h4>
<ul className="space-y-3 text-xs text-slate-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">ফিচারসমূহ</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">প্রাইসিং</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">এসএমএস রেট</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">সাপোর্ট</h4>
<ul className="space-y-3 text-xs text-slate-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">টিউটোরিয়াল ভিডিও</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">সচরাচর জিজ্ঞাসা</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">যোগাযোগ</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">যোগাযোগ</h4>
<ul className="space-y-3 text-xs text-slate-500">
<li className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:phone-linear"></iconify-icon>
                            +880 1234 567890
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:letter-linear"></iconify-icon>
                            hello@shohojfee.com
                        </li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© ২০২৪ ShohojFee. সর্বস্বত্ব সংরক্ষিত।</p>
<div className="flex gap-4 text-xs text-slate-400">
<a className="hover:text-slate-600" href="#">শর্তাবলী</a>
<a className="hover:text-slate-600" href="#">প্রাইভেসি পলিসি</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
