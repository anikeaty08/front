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
      

<div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 text-white py-2 overflow-hidden">
<div className="banner-scroll whitespace-nowrap flex items-center gap-8">
<span className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:book-open" data-width="16" style={{strokeWidth: '1.5'}}></span>
                🎉 عبدل احد لائبریری میں خوش آمدید! 🎉
            </span>
<span className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5'}}></span>
                سینکڑوں دلچسپ کہانیاں مفت پڑھیں
            </span>
<span className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:headphones" data-width="16" style={{strokeWidth: '1.5'}}></span>
                آڈیو کہانیاں بھی دستیاب ہیں
            </span>
<span className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:heart" data-width="16" style={{strokeWidth: '1.5'}}></span>
                بچوں کی بہترین تربیت کے لیے
            </span>
</div>
</div>

<header className="bg-white/80 backdrop-blur-sm border-b border-amber-100 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-200">
<span className="text-white font-bold text-lg tracking-tighter">عا</span>
</div>
<div>
<span className="text-xl font-semibold text-gray-900 tracking-tight">عبدل احد لائبریری</span>
<p className="text-xs text-amber-600">بچوں کی کہانیاں اور نظمیں</p>
</div>
</div>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-gray-900 font-medium hover:text-amber-600 transition" href="#">گھر</a>
<a className="text-sm text-gray-600 hover:text-amber-600 transition" href="#">کہانیاں</a>
<a className="text-sm text-gray-600 hover:text-amber-600 transition" href="#">نظمیں</a>
<a className="text-sm text-gray-600 hover:text-amber-600 transition" href="#">ہمارے بارے</a>
</nav>

<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center bg-gray-100 rounded-full px-4 py-2 gap-2">
<span className="iconify text-gray-400" data-icon="lucide:search" data-width="18" style={{strokeWidth: '1.5'}}></span>
<input className="bg-transparent text-sm outline-none w-32 text-right" placeholder="تلاش کریں..." type="text"/>
</div>
<button className="md:hidden">
<span className="iconify text-gray-700" data-icon="lucide:menu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>
</header>

<section className="relative bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500 overflow-hidden">
<div className="absolute inset-0 opacity-20">
<div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full"></div>
<div className="absolute bottom-10 left-20 w-24 h-24 bg-white rounded-full"></div>
<div className="absolute top-20 left-1/3 w-16 h-16 bg-white rounded-full"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative">
<div className="flex flex-col md:flex-row items-center justify-between gap-8">
<div className="text-center md:text-right">
<div className="inline-flex items-center gap-2 bg-white/20 text-white rounded-full px-4 py-2 text-sm mb-6 backdrop-blur-sm">
<span className="iconify" data-icon="lucide:sparkles" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>نئی کہانیاں ہر ہفتے</span>
</div>
<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
                        عبدل احد لائبریری
                    </h1>
<p className="text-xl text-white/90 mb-2">بچوں کے لیے خوبصورت اردو کہانیاں</p>
<p className="text-base text-white/80 max-w-lg mb-8">
                        یہاں آپ کو سینکڑوں دلچسپ اور سبق آموز کہانیاں ملیں گی جو آپ کے بچوں کی تربیت میں مددگار ثابت ہوں گی
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
<button className="bg-white text-amber-600 px-8 py-3 rounded-full font-medium text-sm shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2">
<span>کہانیاں پڑھیں</span>
<span className="iconify" data-icon="lucide:book-open" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-medium text-sm border border-white/30 hover:bg-white/30 transition flex items-center justify-center gap-2">
<span>نظمیں سنیں</span>
<span className="iconify" data-icon="lucide:headphones" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
<div className="hidden md:block">
<div className="w-64 h-64 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/30">
<div className="text-center">
<span className="iconify text-white" data-icon="lucide:library" data-width="80" style={{strokeWidth: '1'}}></span>
<p className="text-white font-medium mt-4">500+ کہانیاں</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
<div>
<p className="text-2xl md:text-3xl font-semibold text-amber-600">500+</p>
<p className="text-sm text-gray-500">کہانیاں</p>
</div>
<div>
<p className="text-2xl md:text-3xl font-semibold text-amber-600">100+</p>
<p className="text-sm text-gray-500">نظمیں</p>
</div>
<div>
<p className="text-2xl md:text-3xl font-semibold text-amber-600">50K+</p>
<p className="text-sm text-gray-500">قارئین</p>
</div>
<div>
<p className="text-2xl md:text-3xl font-semibold text-amber-600">مفت</p>
<p className="text-sm text-gray-500">سب کچھ مفت</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="text-center mb-8">
<h2 className="text-2xl font-semibold text-gray-900 tracking-tight">کہانیوں کے زمرے</h2>
<p className="text-sm text-gray-500 mt-1">اپنی پسند کا زمرہ منتخب کریں</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-gradient-to-br from-rose-100 to-rose-50 rounded-2xl p-6 text-center hover:shadow-lg transition cursor-pointer group">
<div className="w-12 h-12 bg-rose-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition">
<span className="iconify text-white" data-icon="lucide:heart" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-medium text-gray-900 text-sm">اخلاقی کہانیاں</h3>
<p className="text-xs text-gray-500 mt-1">45 کہانیاں</p>
</div>
<div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-6 text-center hover:shadow-lg transition cursor-pointer group">
<div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition">
<span className="iconify text-white" data-icon="lucide:crown" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-medium text-gray-900 text-sm">شہزادے اور شہزادیاں</h3>
<p className="text-xs text-gray-500 mt-1">32 کہانیاں</p>
</div>
<div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-6 text-center hover:shadow-lg transition cursor-pointer group">
<div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition">
<span className="iconify text-white" data-icon="lucide:bird" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-medium text-gray-900 text-sm">جانوروں کی کہانیاں</h3>
<p className="text-xs text-gray-500 mt-1">58 کہانیاں</p>
</div>
<div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-6 text-center hover:shadow-lg transition cursor-pointer group">
<div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition">
<span className="iconify text-white" data-icon="lucide:wand-2" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-medium text-gray-900 text-sm">جادوئی کہانیاں</h3>
<p className="text-xs text-gray-500 mt-1">27 کہانیاں</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="flex items-center justify-between mb-8">
<div>
<h2 className="text-2xl font-semibold text-gray-900 tracking-tight">مقبول کہانیاں</h2>
<p className="text-sm text-gray-500 mt-1">بچوں کی پسندیدہ کہانیاں - ابھی پڑھیں!</p>
</div>
<a className="text-sm text-amber-600 hover:text-amber-700 flex items-center gap-1" href="#">
<span>سب دیکھیں</span>
<span className="iconify" data-icon="lucide:arrow-left" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group cursor-pointer">
<div className="h-48 bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center relative">
<span className="iconify text-white/80" data-icon="lucide:rabbit" data-width="80" style={{strokeWidth: '1'}}></span>
<div className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
<span className="iconify" data-icon="lucide:book-open" data-width="12" style={{strokeWidth: '1.5'}}></span>
                        مفت پڑھیں
                    </div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full">جانور</span>
<span className="text-xs text-gray-400">5 منٹ</span>
</div>
<h3 className="font-medium text-gray-900 text-lg mb-2 group-hover:text-amber-600 transition">خرگوش اور کچھوا</h3>
<p className="text-sm text-gray-500 line-clamp-2">ایک بار کی بات ہے، ایک جنگل میں ایک خرگوش رہتا تھا جو بہت تیز دوڑتا تھا...</p>
<div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
<div className="flex items-center gap-2">
<span className="iconify text-amber-500" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm text-gray-600">4.8</span>
</div>
<button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full text-xs font-medium flex items-center gap-1 transition">
<span className="iconify" data-icon="lucide:book-open" data-width="14" style={{strokeWidth: '1.5'}}></span>
                            پڑھیں
                        </button>
</div>
</div>
</article>

<article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group cursor-pointer">
<div className="h-48 bg-gradient-to-br from-rose-200 to-pink-300 flex items-center justify-center relative">
<span className="iconify text-white/80" data-icon="lucide:sparkles" data-width="80" style={{strokeWidth: '1'}}></span>
<div className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
<span className="iconify" data-icon="lucide:book-open" data-width="12" style={{strokeWidth: '1.5'}}></span>
                        مفت پڑھیں
                    </div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="bg-rose-100 text-rose-700 text-xs px-2 py-1 rounded-full">جادو</span>
<span className="text-xs text-gray-400">8 منٹ</span>
</div>
<h3 className="font-medium text-gray-900 text-lg mb-2 group-hover:text-amber-600 transition">جادوئی چراغ</h3>
<p className="text-sm text-gray-500 line-clamp-2">علی کو ایک پرانا چراغ ملا جس میں ایک جن رہتا تھا...</p>
<div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
<div className="flex items-center gap-2">
<span className="iconify text-amber-500" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm text-gray-600">4.9</span>
</div>
<button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full text-xs font-medium flex items-center gap-1 transition">
<span className="iconify" data-icon="lucide:book-open" data-width="14" style={{strokeWidth: '1.5'}}></span>
                            پڑھیں
                        </button>
</div>
</div>
</article>

<article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group cursor-pointer">
<div className="h-48 bg-gradient-to-br from-blue-200 to-indigo-300 flex items-center justify-center relative">
<span className="iconify text-white/80" data-icon="lucide:crown" data-width="80" style={{strokeWidth: '1'}}></span>
<div className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
<span className="iconify" data-icon="lucide:book-open" data-width="12" style={{strokeWidth: '1.5'}}></span>
                        مفت پڑھیں
                    </div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">شہزادی</span>
<span className="text-xs text-gray-400">10 منٹ</span>
</div>
<h3 className="font-medium text-gray-900 text-lg mb-2 group-hover:text-amber-600 transition">نیک دل شہزادی</h3>
<p className="text-sm text-gray-500 line-clamp-2">ایک خوبصورت شہزادی تھی جو غریبوں کی مدد کرتی تھی...</p>
<div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
<div className="flex items-center gap-2">
<span className="iconify text-amber-500" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm text-gray-600">4.7</span>
</div>
<button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full text-xs font-medium flex items-center gap-1 transition">
<span className="iconify" data-icon="lucide:book-open" data-width="14" style={{strokeWidth: '1.5'}}></span>
                            پڑھیں
                        </button>
</div>
</div>
</article>

<article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group cursor-pointer">
<div className="h-48 bg-gradient-to-br from-green-200 to-emerald-300 flex items-center justify-center relative">
<span className="iconify text-white/80" data-icon="lucide:trees" data-width="80" style={{strokeWidth: '1'}}></span>
<div className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
<span className="iconify" data-icon="lucide:book-open" data-width="12" style={{strokeWidth: '1.5'}}></span>
                        مفت پڑھیں
                    </div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">اخلاقی</span>
<span className="text-xs text-gray-400">6 منٹ</span>
</div>
<h3 className="font-medium text-gray-900 text-lg mb-2 group-hover:text-amber-600 transition">سچا دوست</h3>
<p className="text-sm text-gray-500 line-clamp-2">دو دوست جنگل میں سفر کر رہے تھے۔ راستے میں انہیں ایک ریچھ ملا...</p>
<div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
<div className="flex items-center gap-2">
<span className="iconify text-amber-500" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm text-gray-600">4.6</span>
</div>
<button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full text-xs font-medium flex items-center gap-1 transition">
<span className="iconify" data-icon="lucide:book-open" data-width="14" style={{strokeWidth: '1.5'}}></span>
                            پڑھیں
                        </button>
</div>
</div>
</article>

<article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group cursor-pointer">
<div className="h-48 bg-gradient-to-br from-purple-200 to-violet-300 flex items-center justify-center relative">
<span className="iconify text-white/80" data-icon="lucide:moon" data-width="80" style={{strokeWidth: '1'}}></span>
<div className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
<span className="iconify" data-icon="lucide:book-open" data-width="12" style={{strokeWidth: '1.5'}}></span>
                        مفت پڑھیں
                    </div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">جادو</span>
<span className="text-xs text-gray-400">7 منٹ</span>
</div>
<h3 className="font-medium text-gray-900 text-lg mb-2 group-hover:text-amber-600 transition">چاند کا سفر</h3>
<p className="text-sm text-gray-500 line-clamp-2">ایک رات سارہ نے خواب دیکھا کہ وہ چاند پر پہنچ گئی...</p>
<div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
<div className="flex items-center gap-2">
<span className="iconify text-amber-500" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm text-gray-600">4.8</span>
</div>
<button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full text-xs font-medium flex items-center gap-1 transition">
<span className="iconify" data-icon="lucide:book-open" data-width="14" style={{strokeWidth: '1.5'}}></span>
                            پڑھیں
                        </button>
</div>
</div>
</article>

<article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group cursor-pointer">
<div className="h-48 bg-gradient-to-br from-cyan-200 to-teal-300 flex items-center justify-center relative">
<span className="iconify text-white/80" data-icon="lucide:fish" data-width="80" style={{strokeWidth: '1'}}></span>
<div className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
<span className="iconify" data-icon="lucide:book-open" data-width="12" style={{strokeWidth: '1.5'}}></span>
                        مفت پڑھیں
                    </div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded-full">جانور</span>
<span className="text-xs text-gray-400">5 منٹ</span>
</div>
<h3 className="font-medium text-gray-900 text-lg mb-2 group-hover:text-amber-600 transition">سنہری مچھلی</h3>
<p className="text-sm text-gray-500 line-clamp-2">ایک غریب مچھیرے کو سنہری مچھلی ملی جو بولتی تھی...</p>
<div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
<div className="flex items-center gap-2">
<span className="iconify text-amber-500" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm text-gray-600">4.9</span>
</div>
<button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full text-xs font-medium flex items-center gap-1 transition">
<span className="iconify" data-icon="lucide:book-open" data-width="14" style={{strokeWidth: '1.5'}}></span>
                            پڑھیں
                        </button>
</div>
</div>
</article>
</div>

<div className="text-center mt-10">
<button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-full font-medium text-sm transition flex items-center gap-2 mx-auto">
<span>مزید کہانیاں دیکھیں</span>
<span className="iconify" data-icon="lucide:chevron-down" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</section>

<section className="bg-gradient-to-r from-amber-500 to-orange-600 py-12 my-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-center justify-between gap-8">
<div className="text-white text-center md:text-right">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">آڈیو کہانیاں سنیں</h2>
<p className="text-amber-100 text-sm md:text-base max-w-md">اب آپ کے بچے سوتے وقت کہانیاں سن سکتے ہیں۔ پیاری آوازوں میں دلچسپ کہانیاں۔</p>
</div>
<div className="flex items-center gap-4">
<button className="bg-white text-amber-600 px-6 py-3 rounded-full font-medium text-sm hover:bg-amber-50 transition flex items-center gap-2">
<span className="iconify" data-icon="lucide:play" data-width="18" style={{strokeWidth: '1.5'}}></span>
<span>ابھی سنیں</span>
</button>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center">
<div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
<span className="iconify text-white" data-icon="lucide:mail" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-3">نئی کہانیوں کی خبر پائیں</h2>
<p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">ہر ہفتے نئی کہانیاں اپنے ای میل پر حاصل کریں</p>
<div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 px-4 py-3 rounded-full bg-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-amber-500 text-sm text-right" placeholder="اپنا ای میل لکھیں" type="email"/>
<button className="bg-amber-500 text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-amber-600 transition">
                    سبسکرائب
                </button>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
<span className="text-white font-bold text-lg tracking-tighter">عا</span>
</div>
<span className="text-lg font-semibold text-gray-900">عبدل احد لائبریری</span>
</div>
<p className="text-sm text-gray-500">بچوں کے لیے بہترین اردو کہانیوں کا مجموعہ</p>
</div>
<div>
<h4 className="font-medium text-gray-900 mb-4 text-sm">روابط</h4>
<ul className="space-y-2">
<li><a className="text-sm text-gray-500 hover:text-amber-600" href="#">ہمارے بارے</a></li>
<li><a className="text-sm text-gray-500 hover:text-amber-600" href="#">رابطہ کریں</a></li>
<li><a className="text-sm text-gray-500 hover:text-amber-600" href="#">شرائط</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-gray-900 mb-4 text-sm">زمرے</h4>
<ul className="space-y-2">
<li><a className="text-sm text-gray-500 hover:text-amber-600" href="#">اخلاقی کہانیاں</a></li>
<li><a className="text-sm text-gray-500 hover:text-amber-600" href="#">جانوروں کی کہانیاں</a></li>
<li><a className="text-sm text-gray-500 hover:text-amber-600" href="#">نظمیں</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-gray-900 mb-4 text-sm">سوشل میڈیا</h4>
<div className="flex gap-3">
<a className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-amber-100 transition" href="#">
<span className="iconify text-gray-600" data-icon="lucide:facebook" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-amber-100 transition" href="#">
<span className="iconify text-gray-600" data-icon="lucide:youtube" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-amber-100 transition" href="#">
<span className="iconify text-gray-600" data-icon="lucide:instagram" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</div>
<div className="border-t border-gray-100 mt-8 pt-8 text-center">
<p className="text-sm text-gray-400">© 2024 عبدل احد لائبریری۔ جملہ حقوق محفوظ ہیں۔</p>
</div>
</div>
</footer>

    </>
  );
}
