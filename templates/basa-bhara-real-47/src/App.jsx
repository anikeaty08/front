import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        let isLoginView = false;
        
        function toggleAuth() {
            isLoginView = !isLoginView;
            document.getElementById('register-form').classList.toggle('hidden', isLoginView);
            document.getElementById('login-form').classList.toggle('hidden', !isLoginView);
            document.getElementById('auth-title').innerText = isLoginView ? 'একাউন্টে প্রবেশ করুন' : 'নতুন একাউন্ট তৈরি করুন';
            document.getElementById('auth-subtitle').innerText = isLoginView ? 'আপনার ইমেইল ও পাসওয়ার্ড দিয়ে লগইন করুন' : 'আপনার বিস্তারিত তথ্য দিয়ে রেজিস্ট্রেশন সম্পন্ন করুন';
        }

        function showHome() {
            document.getElementById('auth-section').classList.add('hidden');
            document.getElementById('home-section').classList.remove('hidden');
            document.getElementById('home-section').classList.add('flex');
            window.scrollTo(0, 0);
        }

        function logout() {
            document.getElementById('home-section').classList.add('hidden');
            document.getElementById('home-section').classList.remove('flex');
            document.getElementById('auth-section').classList.remove('hidden');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-screen flex flex-col items-center justify-center p-4" id="auth-section">
<div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
<div className="text-center mb-8">
<span className="text-2xl font-medium tracking-tight text-blue-600">বাসা ভাড়া</span>
<h1 className="text-xl font-medium tracking-tight text-gray-900 mt-4" id="auth-title">নতুন একাউন্ট তৈরি করুন</h1>
<p className="text-sm text-gray-500 mt-2" id="auth-subtitle">আপনার বিস্তারিত তথ্য দিয়ে রেজিস্ট্রেশন সম্পন্ন করুন</p>
</div>

<form className="flex flex-col gap-4" id="register-form" onsubmit="event.preventDefault(); showHome();">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">নাম</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">মোবাইল নাম্বার</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">ইমেইল</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">পাসওয়ার্ড</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" required="" type="password"/>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 text-sm font-medium transition-colors flex items-center justify-center gap-2 mt-2" type="submit">
<iconify-icon className="text-lg" icon="solar:user-plus-linear"></iconify-icon> রেজিস্ট্রেশন করুন
                </button>
<p className="text-center text-sm text-gray-500 mt-4">
                    আগে থেকেই একাউন্ট আছে? <button className="text-blue-600 font-medium hover:underline" onclick="toggleAuth()" type="button">লগইন করুন</button>
</p>
</form>

<form className="hidden flex flex-col gap-4" id="login-form" onsubmit="event.preventDefault(); showHome();">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">মোবাইল বা ইমেইল</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">পাসওয়ার্ড</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" required="" type="password"/>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 text-sm font-medium transition-colors flex items-center justify-center gap-2 mt-2" type="submit">
<iconify-icon className="text-lg" icon="solar:login-2-linear"></iconify-icon> লগইন করুন
                </button>
<p className="text-center text-sm text-gray-500 mt-4">
                    একাউন্ট নেই? <button className="text-blue-600 font-medium hover:underline" onclick="toggleAuth()" type="button">রেজিস্ট্রেশন করুন</button>
</p>
</form>
</div>
</div>

<div className="hidden flex-col min-h-screen" id="home-section">

<header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-2xl text-blue-600" icon="solar:home-angle-linear"></iconify-icon>
<span className="text-xl font-medium tracking-tight text-blue-600">বাসা ভাড়া</span>
</div>
<nav className="hidden lg:flex gap-8">
<a className="text-sm text-gray-500 hover:text-blue-600 transition-colors" href="#">এবাউট</a>
<a className="text-sm text-gray-900 font-medium hover:text-blue-600 transition-colors" href="#">ভাড়া খুঁজুন</a>
<a className="text-sm text-gray-500 hover:text-blue-600 transition-colors" href="#">মেসেজ</a>
<a className="text-sm text-gray-500 hover:text-blue-600 transition-colors" href="#post-ad">বিজ্ঞাপন দিন</a>
<a className="text-sm text-gray-500 hover:text-blue-600 transition-colors" href="#">কন্টাক্ট</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors shadow-sm gap-2" href="#post-ad">
<iconify-icon className="text-base" icon="solar:add-circle-linear"></iconify-icon> বিজ্ঞাপন দিন
                    </a>
<button className="w-9 h-9 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors" onclick="logout()">
<iconify-icon className="text-gray-600 text-lg" icon="solar:logout-linear"></iconify-icon>
</button>
</div>
</div>
</header>

<main className="flex-1 flex flex-col items-center pt-12 pb-24 w-full">

<div className="w-full max-w-7xl mx-auto px-4 flex flex-col items-center">
<h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-gray-900 text-center mb-8">পছন্দের বাসা খুঁজুন</h1>

<div className="w-full bg-white border border-gray-200 rounded-2xl shadow-sm p-4 md:p-6 mb-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-end">
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-500 ml-1">এরিয়া</label>
<div className="relative flex items-center px-3 py-2.5 bg-gray-50 rounded-xl border border-gray-200 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
<iconify-icon className="text-gray-400 text-lg" icon="solar:map-point-linear"></iconify-icon>
<input className="w-full bg-transparent border-none outline-none text-sm px-2 text-gray-900" placeholder="উত্তরা, মিরপুর..." type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-500 ml-1">সেক্টর / রোড</label>
<div className="relative flex items-center px-3 py-2.5 bg-gray-50 rounded-xl border border-gray-200 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
<iconify-icon className="text-gray-400 text-lg" icon="solar:routing-linear"></iconify-icon>
<input className="w-full bg-transparent border-none outline-none text-sm px-2 text-gray-900" placeholder="যেমন: সেক্টর ৪" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-500 ml-1">বাজেট (টাকা)</label>
<div className="relative flex items-center px-3 py-2.5 bg-gray-50 rounded-xl border border-gray-200 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
<iconify-icon className="text-gray-400 text-lg" icon="solar:wallet-linear"></iconify-icon>
<input className="w-full bg-transparent border-none outline-none text-sm px-2 text-gray-900" placeholder="সর্বোচ্চ ভাড়া" type="number"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-500 ml-1">বেড সংখ্যা</label>
<div className="relative flex items-center px-3 py-2.5 bg-gray-50 rounded-xl border border-gray-200 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
<iconify-icon className="text-gray-400 text-lg" icon="solar:bed-linear"></iconify-icon>
<select className="w-full bg-transparent border-none outline-none text-sm px-2 text-gray-900 cursor-pointer">
<option value="">যেকোনো</option>
<option>১ বেড</option>
<option>২ বেড</option>
<option>৩ বেড</option>
<option>৪+ বেড</option>
</select>
<iconify-icon className="text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-500 ml-1">বাসার ধরন</label>
<div className="relative flex items-center px-3 py-2.5 bg-gray-50 rounded-xl border border-gray-200 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
<iconify-icon className="text-gray-400 text-lg" icon="solar:home-2-linear"></iconify-icon>
<select className="w-full bg-transparent border-none outline-none text-sm px-2 text-gray-900 cursor-pointer">
<option value="">সব ধরন</option>
<option>ফ্যামিলি</option>
<option>ব্যাচেলর</option>
<option>সাবলেট</option>
<option>অফিস</option>
<option>গোডাউন</option>
</select>
<iconify-icon className="text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 text-sm font-medium transition-colors flex items-center justify-center gap-2 h-[42px] shadow-sm">
<iconify-icon className="text-lg" icon="solar:magnifer-linear"></iconify-icon> খুঁজুন
                        </button>
</div>
</div>

<div className="w-full">
<h2 className="text-xl font-medium tracking-tight text-gray-900 mb-6 px-1">সকল বাসার তালিকা</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md hover:border-blue-200 transition-all duration-300">
<div className="relative aspect-video bg-gray-100 overflow-hidden">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<span className="absolute top-3 left-3 px-2.5 py-1 bg-white/95 backdrop-blur-sm rounded-md border border-gray-200 text-xs font-medium text-blue-600 shadow-sm">ফ্যামিলি বাসা</span>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex justify-between items-end mb-3">
<h3 className="text-lg font-medium text-blue-600">৳২৫,০০০<span className="text-xs text-gray-500 font-normal">/মাস</span></h3>
</div>
<div className="space-y-1.5 mb-4">
<p className="text-sm text-gray-900 font-medium flex items-center gap-1.5">
<iconify-icon className="text-gray-400" icon="solar:map-point-linear"></iconify-icon> উত্তরা, ঢাকা
                                    </p>
<p className="text-xs text-gray-500 ml-5">সেক্টর ১০, রোড ৪, বাসা ১২</p>
</div>
<div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-4 text-xs text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-100">
<span className="flex items-center gap-1.5"><iconify-icon className="text-gray-400" icon="solar:bed-linear"></iconify-icon> ৩ বেড</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-gray-400" icon="solar:bath-linear"></iconify-icon> ৩ বাথ</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-gray-400" icon="solar:slider-vertical-linear"></iconify-icon> ২ বারান্দা</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-gray-400" icon="solar:ruler-linear"></iconify-icon> ১২০০ sqft</span>
</div>
<p className="text-xs text-gray-500 line-clamp-2 mb-5 leading-relaxed">সম্পূর্ণ টাইলস করা, ২৪ ঘন্টা সিকিউরিটি, গ্যাস ও পানি সুবিধা সহ সুন্দর পারিবারিক পরিবেশ। দক্ষিণমুখী ফ্ল্যাট।</p>
<div className="mt-auto flex items-center gap-2 pt-4 border-t border-gray-100">
<button className="flex-1 bg-blue-50 text-blue-600 hover:bg-blue-100 px-3 py-2.5 rounded-xl text-xs font-medium transition-colors flex items-center justify-center gap-1.5 border border-blue-100">
<iconify-icon className="text-base" icon="solar:phone-linear"></iconify-icon> 01711-XXXXXX
                                    </button>
<button className="w-10 h-10 flex shrink-0 items-center justify-center bg-green-50 text-green-600 hover:bg-green-100 rounded-xl transition-colors border border-green-100" title="WhatsApp Connected">
<iconify-icon className="text-lg" icon="solar:chat-round-dots-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md hover:border-blue-200 transition-all duration-300">
<div className="relative aspect-video bg-gray-100 overflow-hidden">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<span className="absolute top-3 left-3 px-2.5 py-1 bg-white/95 backdrop-blur-sm rounded-md border border-gray-200 text-xs font-medium text-blue-600 shadow-sm">ব্যাচেলর মেস</span>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex justify-between items-end mb-3">
<h3 className="text-lg font-medium text-blue-600">৳৬,৫০০<span className="text-xs text-gray-500 font-normal">/মাস</span></h3>
</div>
<div className="space-y-1.5 mb-4">
<p className="text-sm text-gray-900 font-medium flex items-center gap-1.5">
<iconify-icon className="text-gray-400" icon="solar:map-point-linear"></iconify-icon> ধানমন্ডি, ঢাকা
                                    </p>
<p className="text-xs text-gray-500 ml-5">রোড ১৫, শংকর</p>
</div>
<div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-4 text-xs text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-100">
<span className="flex items-center gap-1.5"><iconify-icon className="text-gray-400" icon="solar:bed-linear"></iconify-icon> ১ সিট</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-gray-400" icon="solar:bath-linear"></iconify-icon> ১ বাথ</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-gray-400" icon="solar:slider-vertical-linear"></iconify-icon> ১ বারান্দা</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-gray-400" icon="solar:ruler-linear"></iconify-icon> ২০০ sqft</span>
</div>
<p className="text-xs text-gray-500 line-clamp-2 mb-5 leading-relaxed">ওয়াইফাই, মিল ব্যবস্থা, এটাচড বাথরুম। নিরিবিলি পরিবেশ, ছাত্রদের জন্য উপযোগী।</p>
<div className="mt-auto flex items-center gap-2 pt-4 border-t border-gray-100">
<button className="flex-1 bg-blue-50 text-blue-600 hover:bg-blue-100 px-3 py-2.5 rounded-xl text-xs font-medium transition-colors flex items-center justify-center gap-1.5 border border-blue-100">
<iconify-icon className="text-base" icon="solar:phone-linear"></iconify-icon> 01819-XXXXXX
                                    </button>
<button className="w-10 h-10 flex shrink-0 items-center justify-center bg-green-50 text-green-600 hover:bg-green-100 rounded-xl transition-colors border border-green-100" title="WhatsApp Connected">
<iconify-icon className="text-lg" icon="solar:chat-round-dots-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md hover:border-blue-200 transition-all duration-300">
<div className="relative aspect-video bg-gray-100 overflow-hidden">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<span className="absolute top-3 left-3 px-2.5 py-1 bg-white/95 backdrop-blur-sm rounded-md border border-gray-200 text-xs font-medium text-blue-600 shadow-sm">অফিস স্পেস</span>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex justify-between items-end mb-3">
<h3 className="text-lg font-medium text-blue-600">৳৪০,০০০<span className="text-xs text-gray-500 font-normal">/মাস</span></h3>
</div>
<div className="space-y-1.5 mb-4">
<p className="text-sm text-gray-900 font-medium flex items-center gap-1.5">
<iconify-icon className="text-gray-400" icon="solar:map-point-linear"></iconify-icon> গুলশান ১, ঢাকা
                                    </p>
<p className="text-xs text-gray-500 ml-5">এভিনিউ রোড, ব্লক সি</p>
</div>
<div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-4 text-xs text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-100">
<span className="flex items-center gap-1.5"><iconify-icon className="text-gray-400" icon="solar:bed-linear"></iconify-icon> ২ রুম</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-gray-400" icon="solar:bath-linear"></iconify-icon> ২ বাথ</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-gray-400" icon="solar:slider-vertical-linear"></iconify-icon> ০ বারান্দা</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-gray-400" icon="solar:ruler-linear"></iconify-icon> ৮০০ sqft</span>
</div>
<p className="text-xs text-gray-500 line-clamp-2 mb-5 leading-relaxed">কমার্শিয়াল বিল্ডিং, লিফট ও জেনারেটর সুবিধা। আইটি ফার্ম বা ছোট কর্পোরেট অফিসের জন্য পারফেক্ট।</p>
<div className="mt-auto flex items-center gap-2 pt-4 border-t border-gray-100">
<button className="flex-1 bg-blue-50 text-blue-600 hover:bg-blue-100 px-3 py-2.5 rounded-xl text-xs font-medium transition-colors flex items-center justify-center gap-1.5 border border-blue-100">
<iconify-icon className="text-base" icon="solar:phone-linear"></iconify-icon> 01912-XXXXXX
                                    </button>
<button className="w-10 h-10 flex shrink-0 items-center justify-center bg-green-50 text-green-600 hover:bg-green-100 rounded-xl transition-colors border border-green-100" title="WhatsApp Connected">
<iconify-icon className="text-lg" icon="solar:chat-round-dots-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md hover:border-blue-200 transition-all duration-300">
<div className="relative aspect-video bg-gray-100 overflow-hidden">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<span className="absolute top-3 left-3 px-2.5 py-1 bg-white/95 backdrop-blur-sm rounded-md border border-gray-200 text-xs font-medium text-blue-600 shadow-sm">সাবলেট</span>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex justify-between items-end mb-3">
<h3 className="text-lg font-medium text-blue-600">৳৮,০০০<span className="text-xs text-gray-500 font-normal">/মাস</span></h3>
</div>
<div className="space-y-1.5 mb-4">
<p className="text-sm text-gray-900 font-medium flex items-center gap-1.5">
<iconify-icon className="text-gray-400" icon="solar:map-point-linear"></iconify-icon> মিরপুর ১০, ঢাকা
                                    </p>
<p className="text-xs text-gray-500 ml-5">গোলচত্বর সংলগ্ন</p>
</div>
<div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-4 text-xs text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-100">
<span className="flex items-center gap-1.5"><iconify-icon className="text-gray-400" icon="solar:bed-linear"></iconify-icon> ১ বেড</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-gray-400" icon="solar:bath-linear"></iconify-icon> ১ বাথ</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-gray-400" icon="solar:slider-vertical-linear"></iconify-icon> ১ বারান্দা</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-gray-400" icon="solar:ruler-linear"></iconify-icon> ২৫০ sqft</span>
</div>
<p className="text-xs text-gray-500 line-clamp-2 mb-5 leading-relaxed">কর্মজীবী মহিলা বা ছাত্রীর জন্য এটাচড বাথরুম সহ ছিমছাম রুম। আলো বাতাস পূর্ণ।</p>
<div className="mt-auto flex items-center gap-2 pt-4 border-t border-gray-100">
<button className="flex-1 bg-blue-50 text-blue-600 hover:bg-blue-100 px-3 py-2.5 rounded-xl text-xs font-medium transition-colors flex items-center justify-center gap-1.5 border border-blue-100">
<iconify-icon className="text-base" icon="solar:phone-linear"></iconify-icon> 01614-XXXXXX
                                    </button>
<button className="w-10 h-10 flex shrink-0 items-center justify-center bg-green-50 text-green-600 hover:bg-green-100 rounded-xl transition-colors border border-green-100" title="WhatsApp Connected">
<iconify-icon className="text-lg" icon="solar:chat-round-dots-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<section className="w-full mt-24 mb-8" id="post-ad">
<div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-10 w-full max-w-4xl mx-auto">
<div className="text-center mb-10">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-gray-900 mb-3">আপনার ফ্ল্যাট বাসা ভাড়া বা বিক্রি দিতে চান?</h2>
<p className="text-sm text-gray-500">নিচের ফর্মটি পূরণ করে আজই আপনার প্রপার্টির বিজ্ঞাপন দিন</p>
</div>
<form className="space-y-8">

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-gray-50 p-2 rounded-2xl border border-gray-200 w-max mx-auto">
<label className="cursor-pointer relative">
<input checked="" className="peer sr-only" name="ad_type" type="radio" value="rent"/>
<div className="px-6 py-2.5 rounded-xl text-sm font-medium text-gray-500 peer-checked:bg-blue-600 peer-checked:text-white peer-checked:shadow-sm transition-all flex items-center gap-2">
<iconify-icon icon="solar:home-smile-linear"></iconify-icon> ভাড়ার জন্য
                                    </div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="ad_type" type="radio" value="sale"/>
<div className="px-6 py-2.5 rounded-xl text-sm font-medium text-gray-500 peer-checked:bg-blue-600 peer-checked:text-white peer-checked:shadow-sm transition-all flex items-center gap-2">
<iconify-icon icon="solar:tag-price-linear"></iconify-icon> বিক্রির জন্য
                                    </div>
</label>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">

<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">লোকেশন (এরিয়া)</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="যেমন: উত্তরা" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">সেক্টর / ব্লক নাম্বার</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="যেমন: সেক্টর ৪" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">রোড নাম্বার</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="যেমন: রোড ৭" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">বাড়ি নাম্বার</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="যেমন: বাড়ি ১২" type="text"/>
</div>

<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">বাসার ধরন</label>
<div className="relative">
<select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all pr-10 cursor-pointer">
<option>ফ্যামিলি</option>
<option>ব্যাচেলর</option>
<option>সাবলেট</option>
<option>অফিস</option>
<option>গোডাউন</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">ভাড়া / মূল্য (টাকা)</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="যেমন: ১৫০০০" type="number"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">বেড সংখ্যা</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="যেমন: ২" type="number"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">স্কয়ার ফিট</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="যেমন: ১০০০" type="number"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">টয়লেট সংখ্যা</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="যেমন: ২" type="number"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">বারান্দা</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="যেমন: ২" type="number"/>
</div>
</div>

<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">মোবাইল নাম্বার</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="01XXX-XXXXXX" type="tel"/>
</div>
<div className="flex items-end pb-1">
<label className="flex items-center gap-2 cursor-pointer">
<div className="relative w-10 h-5 bg-gray-200 rounded-full peer-checked:bg-blue-600 transition-colors border border-gray-300">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5 shadow-sm"></div>
</div>
<span className="text-sm font-medium text-gray-700 flex items-center gap-1.5"><iconify-icon className="text-green-500" icon="solar:chat-round-dots-linear"></iconify-icon> WhatsApp কানেক্টেড</span>
</label>
</div>

<div className="md:col-span-2">
<label className="block text-xs font-medium text-gray-700 mb-1.5">বিস্তারিত বিবরণ</label>
<textarea className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none" placeholder="বাসার বিস্তারিত সুবিধা, নিয়মকানুন বা অন্যান্য তথ্য লিখুন..." rows="4"></textarea>
</div>
<div className="md:col-span-2">
<label className="block text-xs font-medium text-gray-700 mb-1.5">ছবি বা ভিডিও আপলোড</label>
<div className="w-full bg-gray-50 border border-dashed border-gray-300 rounded-xl px-4 py-8 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 hover:border-blue-400 transition-all group">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200 mb-3 group-hover:scale-105 transition-transform text-blue-600">
<iconify-icon className="text-xl" icon="solar:camera-add-linear"></iconify-icon>
</div>
<p className="text-sm font-medium text-gray-700">ক্লিক করে ফাইল নির্বাচন করুন</p>
<p className="text-xs text-gray-400 mt-1">PNG, JPG বা MP4 (সর্বোচ্চ ১০ MB)</p>
</div>
</div>
</div>
<div className="pt-4 flex justify-end">
<button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2 w-full md:w-auto shadow-sm" type="button">
<iconify-icon className="text-lg" icon="solar:plain-2-linear"></iconify-icon> বিজ্ঞাপন পোস্ট করুন
                                </button>
</div>
</form>
</div>
</section>
</div>
</main>

<footer className="border-t border-gray-200 bg-white py-8 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-xl text-blue-600" icon="solar:home-angle-linear"></iconify-icon>
<span className="text-sm font-medium tracking-tight text-blue-600">বাসা ভাড়া</span>
</div>
<p className="text-xs text-gray-500">© ২০২৪ বাসাভাড়া. সর্বস্বত্ব সংরক্ষিত.</p>
</div>
</footer>
</div>



    </>
  );
}
