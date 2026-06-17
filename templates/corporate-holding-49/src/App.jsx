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
      

<div className="bg-[#0B1120] text-slate-400 text-xs py-2 relative z-20 hidden md:block">
<div className="max-w-[1440px] mx-auto px-6 flex justify-between items-center">
<span>Ulaanbaatar, MN 14:02 PM</span>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Танилцуулга</a>
<a className="hover:text-white transition-colors" href="#">Ажлын байр</a>
<a className="hover:text-white transition-colors" href="#">Салбар байршил</a>
<a className="hover:text-white transition-colors" href="#">Худалдан авалт</a>
<span className="text-slate-600">|</span>
<span className="text-white">EN</span>
<a className="flex items-center gap-1 hover:text-white transition-colors" href="#">
<i className="w-3 h-3" data-lucide="search"></i>
                    E-SHOP
                </a>
</div>
</div>
</div>

<div className="relative w-full h-[600px] lg:h-[700px] overflow-hidden">

<header className="absolute top-0 left-0 w-full z-30 pt-4 md:pt-6">
<div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
<i className="w-6 h-6 fill-current" data-lucide="star"></i>
</div>
</div>

<nav className="hidden lg:flex items-center bg-white/5 backdrop-blur-md rounded-full px-8 py-3 gap-8 shadow-2xl">
<a className="text-white text-sm font-medium hover:text-blue-200 transition-colors" href="#">Бидний тухай</a>
<a className="text-white text-sm font-medium hover:text-blue-200 transition-colors" href="#">Бизнесүүд</a>
<a className="text-white text-sm font-medium hover:text-blue-200 transition-colors" href="#">Брэндүүд</a>
<a className="text-white text-sm font-medium hover:text-blue-200 transition-colors" href="#">Нийлүүлэгчид</a>
<a className="text-white text-sm font-medium hover:text-blue-200 transition-colors" href="#">Нийгмийн хариуцлага</a>
</nav>

<button className="lg:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</header>

<div className="absolute inset-0 bg-slate-900">
<img alt="Office" className="w-full h-full object-cover opacity-50 mix-blend-overlay" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2301&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 to-transparent"></div>
</div>
<div className="relative z-10 max-w-[1440px] mx-auto px-6 h-full flex flex-col justify-center pt-20">
<h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold tracking-tight leading-[1.1] mb-6 max-w-3xl drop-shadow-lg">
                Монголын Бизнесийн <br/>
<span className="text-blue-400">Ирээдүйг Тэргүүлнэ</span>
</h1>
<p className="text-lg text-slate-300 max-w-xl mb-10 leading-relaxed">
                Монголын томоохон салбаруудыг холбосон нэгдсэн экосистем. Инноваци, найдвартай үйлчилгээ, тогтвортой өсөлтөд чиглэсэн манлайлагч байгууллага.
            </p>
<div className="flex flex-wrap gap-4">
<a className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-sm flex items-center gap-2 transition-all shadow-lg shadow-blue-600/30" href="#">
                    Our Leadership
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<button className="w-12 h-12 rounded-full bg-white/5 backdrop-blur flex items-center justify-center text-white hover:bg-white/10 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<button className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>

<section className="py-24 bg-slate-50">
<div className="max-w-[1440px] mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Бизнесийн чиглэлүүд</h2>
<p className="text-lg text-slate-500 max-w-2xl mx-auto">Монголын зах зээлийн олон салбарт тогтвортой үнэ цэнэ бүтээж байна.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group text-center h-full flex flex-col items-center">
<div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-inner">
<i className="w-7 h-7" data-lucide="landmark"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Санхүүгийн бизнес</h3>
<p className="text-base text-slate-500 leading-relaxed">Санхүү, даатгал, төлбөрийн ухаалаг шийдлүүд.</p>
</div>

<div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group text-center h-full flex flex-col items-center">
<div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-inner">
<i className="w-7 h-7" data-lucide="shopping-bag"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Борлуулалт, үйлчилгээ</h3>
<p className="text-base text-slate-500 leading-relaxed">Худалдаа, үйлчилгээний өргөн сүлжээ.</p>
</div>

<div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group text-center h-full flex flex-col items-center">
<div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-inner">
<i className="w-7 h-7" data-lucide="container"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Экспорт, импорт</h3>
<p className="text-base text-slate-500 leading-relaxed">Олон улсын брэндийн импорт, түгээлт.</p>
</div>

<div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group text-center h-full flex flex-col items-center">
<div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-inner">
<i className="w-7 h-7" data-lucide="hard-hat"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Барилга, үл хөдлөх</h3>
<p className="text-base text-slate-500 leading-relaxed">Барилга, үл хөдлөх хөрөнгийн хөгжүүлэлт.</p>
</div>

<div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group text-center h-full flex flex-col items-center">
<div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-inner">
<i className="w-7 h-7" data-lucide="cpu"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Технологийн бизнес</h3>
<p className="text-base text-slate-500 leading-relaxed">Дижитал болон технологийн шийдлүүд.</p>
</div>

<div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group text-center h-full flex flex-col items-center">
<div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-inner">
<i className="w-7 h-7" data-lucide="plane"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Тээвэр зууч</h3>
<p className="text-base text-slate-500 leading-relaxed">Тээвэр, логистикийн иж бүрэн үйлчилгээ.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-[1440px] mx-auto px-6">

<div className="flex flex-wrap gap-8 border-b border-slate-100 mb-12 pb-2">
<button className="text-blue-600 font-medium border-b-2 border-blue-600 pb-2 -mb-2.5">Дижитал шилжилт</button>
<button className="text-slate-500 font-medium hover:text-slate-800 transition-colors pb-2">Инноваци &amp; Технологи</button>
<button className="text-slate-500 font-medium hover:text-slate-800 transition-colors pb-2">Ирээдүйн мэргэжилтнүүд</button>
<button className="text-slate-500 font-medium hover:text-slate-800 transition-colors pb-2">Тогтвортой хөгжил</button>
<button className="text-slate-500 font-medium hover:text-slate-800 transition-colors pb-2">Компанийн засаглал</button>
</div>

<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
<div className="max-w-3xl">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Илүү хурдтай, ухаалаг үйлчилгээ</h2>
<p className="text-lg text-slate-500">Бид худалдаа, санхүү, логистик, технологийн салбарт дижитал шийдлүүдийг нэвтрүүлж, үйлчлүүлэгчдэдээ илүү хэмнэлттэй, найдвартай үйлчилгээ хүргэдэг.</p>
</div>
<a className="text-blue-600 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all whitespace-nowrap" href="#">
                    View all news <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

<div className="group cursor-pointer">
<div className="aspect-video bg-slate-100 rounded-xl overflow-hidden mb-6 shadow-sm">
<img alt="News" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=2232&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-xs text-slate-400 font-medium mb-3">2023-09-03</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Батсүмбэр суманд бага сургууль барих санаачилга</h3>
<p className="text-base text-slate-500 mb-4 line-clamp-3">Төв аймгийн Батсүмбэр сумын хүүхдүүдийг гарт нь ойр, чанартай боловсролоор хангах шинэ бага сургууль барих төслийг дэмжин.</p>
<span className="text-blue-600 text-sm font-medium inline-flex items-center gap-1">Read more <i className="w-3 h-3" data-lucide="chevron-right"></i></span>
</div>

<div className="group cursor-pointer">
<div className="aspect-video bg-slate-100 rounded-xl overflow-hidden mb-6 shadow-sm">
<img alt="News" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&amp;w=2338&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-xs text-slate-400 font-medium mb-3">2023-10-11</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Ирээдүйн мэргэжилтнүүдийг дэмжих "NOMIN Scholarship"</h3>
<p className="text-base text-slate-500 mb-4 line-clamp-3">Худалдаа, бизнес, санхүү, IT, инженерчлэлийн чиглэлээр оюутнуудад тэтгэлэг олгож, чанартай боловсролыг дэмжих хөтөлбөрийг жил бүр.</p>
<span className="text-blue-600 text-sm font-medium inline-flex items-center gap-1">Read more <i className="w-3 h-3" data-lucide="chevron-right"></i></span>
</div>

<div className="group cursor-pointer">
<div className="aspect-video bg-slate-100 rounded-xl overflow-hidden mb-6 shadow-sm">
<img alt="News" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&amp;w=2340&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-xs text-slate-400 font-medium mb-3">2023-11-20</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Онлайн худалдааг шинэ түвшинд гаргасан Nomin.mn</h3>
<p className="text-base text-slate-500 mb-4 line-clamp-3">MAGENTO 2.4 платформ дээр суурилсан Nomin-ийн цахим хуудасны систем нь нэгэн зэрэг олон мянган хэрэглэгчийн үйлчлүүлэг.</p>
<span className="text-blue-600 text-sm font-medium inline-flex items-center gap-1">Read more <i className="w-3 h-3" data-lucide="chevron-right"></i></span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-blue-600 text-white">
<div className="max-w-[1440px] mx-auto px-6">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Тогтвортой өсөлт, үнэ цэнэ</h2>
<p className="text-blue-100 text-lg">Номин Холдинг нь бизнесийн шилдэг туршлага, чанарын стандартад тулгуурлан тогтвортой, ашигтай өсөлтийг бий болгож байна.</p>
</div>
<div className="flex gap-3">
<button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded flex items-center justify-center transition-colors">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<button className="w-10 h-10 bg-white text-blue-600 rounded flex items-center justify-center transition-colors shadow-lg shadow-black/10">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-xl shadow-2xl shadow-blue-900/20">
<div className="text-4xl font-bold text-blue-600 mb-8">34</div>
<div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">ЖИЛИЙН ТҮҮХ</div>
</div>

<div className="bg-white p-8 rounded-xl shadow-2xl shadow-blue-900/20">
<div className="text-4xl font-bold text-blue-600 mb-8">+ 6,200</div>
<div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">АЖИЛЧИД</div>
</div>

<div className="bg-white p-8 rounded-xl shadow-2xl shadow-blue-900/20">
<div className="text-4xl font-bold text-blue-600 mb-8">+ 260</div>
<div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">ИМПОРТЫН БРЭНДҮҮД</div>
</div>

<div className="bg-white p-8 rounded-xl shadow-2xl shadow-blue-900/20 relative overflow-hidden group">
<div className="text-4xl font-bold text-blue-600 mb-8">4,5%</div>
<div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">ИМПОРТЫН ЗАХ ЗЭЭЛ</div>
<div className="absolute right-4 bottom-4 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-[1440px] mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Улс даяарх үйл ажиллагаа</h2>
<p className="text-lg text-slate-500 max-w-2xl mx-auto mb-16">НОМИН Холдинг нь Монгол Улсын <span className="font-bold text-slate-900">14</span> аймаг, бүс нутагт нийт <span className="font-bold text-slate-900">18</span> салбараар дамжуулан агуулах худалдаа болон супермаркетын үйл ажиллагааг явуулж байна.</p>

<div className="relative w-full max-w-4xl mx-auto aspect-[16/9] bg-white rounded-2xl shadow-2xl shadow-slate-200/50 p-8">

<svg className="w-full h-full" fill="none" viewbox="0 0 800 400">
<path d="M150,150 C180,120 250,120 300,150 S 400,200 450,180 S 550,150 600,180 S 700,200 650,250 S 550,300 450,280 S 300,320 250,280 S 100,250 150,150 Z" fill="#f8fafc"></path>

<g className="text-blue-500">
<circle cx="200" cy="200" fill="currentColor" r="4"></circle>
<text fill="#94a3b8" fontSize="10" text-anchor="middle" x="200" y="220">Ховд</text>
<circle cx="300" cy="150" fill="currentColor" r="4"></circle>
<text fill="#94a3b8" fontSize="10" text-anchor="middle" x="300" y="170">Увс</text>
<circle cx="450" cy="180" fill="#2563EB" opacity="0.2" r="8"></circle>
<circle cx="450" cy="180" fill="#2563EB" r="4"></circle>
<text fill="#0f172a" fontSize="12" font-weight="bold" text-anchor="middle" x="450" y="205">Улаанбаатар</text>
<circle cx="550" cy="180" fill="currentColor" r="4"></circle>
<text fill="#94a3b8" fontSize="10" text-anchor="middle" x="550" y="200">Хэнтий</text>
<circle cx="600" cy="220" fill="currentColor" r="4"></circle>
<text fill="#94a3b8" fontSize="10" text-anchor="middle" x="600" y="240">Сүхбаатар</text>
</g>
</svg>
<div className="absolute bottom-6 right-8 text-right bg-white/90 backdrop-blur p-4 rounded-lg shadow-lg">
<div className="text-sm font-bold text-slate-700">Агуулах: 1</div>
<div className="text-sm font-bold text-slate-700">Супермаркет: 2</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">Why Choose <span className="text-blue-600">NOMIN Holding</span>?</h2>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">
                    NOMIN Holding нь тогтвортой өсөлт, ил тод засаглал, инновацид суурилсан бизнесийн экосистемийг бүрдүүлж, хөрөнгө оруулагч, түнш, хэрэглэгч бүрт урт хугацааны үнэ цэнийг бий болгодог.
                </p>
<button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-sm mb-10 transition-colors uppercase tracking-wide shadow-lg shadow-blue-600/30">
                    Investor Portal
                </button>
<div className="space-y-4">
<div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5" data-lucide="bar-chart-3"></i>
</div>
<span className="text-slate-700 font-medium text-lg">Монголын зах зээл дэх тэргүүлэгч байр суурь</span>
<i className="w-4 h-4 text-slate-300 ml-auto" data-lucide="arrow-right"></i>
</div>
<div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5" data-lucide="pie-chart"></i>
</div>
<span className="text-slate-700 font-medium text-lg">Тогтвортой өсөлт ба санхүүгийн ил тод байдал</span>
<i className="w-4 h-4 text-slate-300 ml-auto" data-lucide="arrow-right"></i>
</div>
</div>
</div>

<div className="bg-[#0B1120] rounded-2xl p-8 md:p-12 relative overflow-hidden text-white shadow-2xl">
<div className="absolute top-0 right-0 p-8">
<div className="w-14 h-14 bg-white/10 backdrop-blur rounded-full flex items-center justify-center">
<i className="w-6 h-6 text-white fill-current" data-lucide="bell"></i>
</div>
</div>
<h3 className="text-2xl font-semibold mb-2">Career Announcements</h3>
<p className="text-slate-400 text-sm mb-10">Нээлттэй ажлын байр</p>
<div className="space-y-8 relative z-10">

<div className="border-l-2 border-blue-600 pl-6 py-1">
<div className="text-xs text-blue-400 mb-1 font-semibold tracking-wide">14.11.2023</div>
<div className="font-semibold text-lg mb-2">Маркетингийн мэргэжилтэн</div>
<a className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors" href="#">Read more <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>

<div className="border-l-2 border-slate-700 hover:border-blue-600 transition-colors pl-6 py-1 cursor-pointer group">
<div className="text-xs text-slate-500 group-hover:text-blue-400 mb-1 font-semibold tracking-wide transition-colors">14.11.2023</div>
<div className="font-semibold text-lg mb-2">Санхүүгийн шинжээч</div>
<a className="text-xs text-slate-400 group-hover:text-white flex items-center gap-1 transition-colors" href="#">Read more <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>

<div className="border-l-2 border-slate-700 hover:border-blue-600 transition-colors pl-6 py-1 cursor-pointer group">
<div className="text-xs text-slate-500 group-hover:text-blue-400 mb-1 font-semibold tracking-wide transition-colors">ДАДАЛГА</div>
<div className="font-semibold text-lg mb-2">Шинэ төгсөгчийн дадлага</div>
<a className="text-xs text-slate-400 group-hover:text-white flex items-center gap-1 transition-colors" href="#">Read more <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>
</div>
<div className="mt-12 flex gap-4">
<button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-blue-900/50">View all job openings</button>
</div>
</div>
</div>
</section>

<section className="bg-white">
<div className="grid grid-cols-1 lg:grid-cols-2 h-full">
<div className="h-[500px] lg:h-auto relative">
<img alt="Team" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-10 md:p-20 flex flex-col justify-center">
<h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-8">LIFE IN <span className="text-blue-600">NOMIN</span></h2>
<p className="text-lg text-slate-500 leading-relaxed mb-8">
                    "НОМИН Холдинг" ХХК нь ажилтан бүрд ажиллангaa суралцах, өөрийгөө хөгжүүлэх, карьераа өсгөх, худалдаа, санхүү, үйлдвэрлэл, инженер, технологийн салбарын туршлага хуримтлуулах, хувь нэмрээ оруулж хөгжүүлэх болон өрсөлдөхүйц цалин хөлсөөр хангагдах боломжийг бүрдүүлж ажилтан төвтэй бодлого баримталдаг.
                </p>
<div className="mb-16">
<button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg shadow-blue-200">View Openings</button>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
<div>
<div className="text-3xl font-bold text-slate-900">6200+</div>
<div className="text-xs text-slate-400 uppercase font-semibold mt-2">АЖИЛЧИД</div>
</div>
<div>
<div className="text-3xl font-bold text-slate-900">18</div>
<div className="text-xs text-slate-400 uppercase font-semibold mt-2">САЛБАР</div>
</div>
<div>
<div className="text-3xl font-bold text-slate-900">30+</div>
<div className="text-xs text-slate-400 uppercase font-semibold mt-2">ЖИЛ</div>
</div>
<div>
<div className="text-3xl font-bold text-slate-900">4.5%</div>
<div className="text-xs text-slate-400 uppercase font-semibold mt-2">ЗАХ ЗЭЭЛ</div>
</div>
</div>
</div>
</div>
</section>

<div className="max-w-[1440px] mx-auto px-6 -mt-10 lg:-mt-20 relative z-10 mb-20">
<div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col md:flex-row items-center gap-8 max-w-3xl mx-auto lg:ml-auto lg:mr-20">
<div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
<i className="w-8 h-8" data-lucide="credit-card"></i>
</div>
<div className="flex-1 text-center md:text-left">
<h4 className="text-xl font-semibold text-slate-900">NOMIN Bonus Card</h4>
<p className="text-base text-slate-500 mt-2">Earn 3-10% bonus points on every purchase across our network. The biggest loyalty program in the region.</p>
</div>
<a className="text-blue-600 font-medium whitespace-nowrap hover:text-blue-700" href="#">Learn details →</a>
</div>
</div>

<section className="bg-[#0f172a] text-white py-24 relative overflow-hidden">
<div className="max-w-[1440px] mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-6">● ӨӨРИЙН ХУДАЛДАН АВАЛТЫГ ИЛҮҮ УХААЛГААР УДИРД</div>
<h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                        НОМИН Бонус <br/>
                        карттайгаар илүү <br/>
<span className="text-blue-500">хэмнэлттэй</span>, илүү <br/>
                        ашигтай
                    </h2>
<p className="text-slate-400 max-w-md mb-10 text-lg leading-relaxed">
                        НОМИН-ийн бүх сүлжээнд нэг картаар худалдан авалт хийж, бонус оноо цуглуулан дараагийн худалдан авалтад ашиглах боломж.
                    </p>
<button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium text-sm flex items-center gap-2 transition-colors shadow-lg shadow-blue-900">
                        Бонус карт авах
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<div className="relative h-[450px]">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-md">

<div className="absolute top-12 left-12 w-full aspect-[1.58] bg-blue-900/40 rounded-2xl backdrop-blur-sm transform rotate-6 scale-95 z-0"></div>

<div className="relative w-full aspect-[1.58] bg-gradient-to-br from-blue-600 to-blue-900 rounded-2xl shadow-2xl p-8 md:p-10 flex flex-col justify-between overflow-hidden z-10">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-400/30 rounded-full blur-3xl"></div>
<div className="flex justify-between items-start">
<div className="flex items-center gap-3">
<i className="w-8 h-8 text-white" data-lucide="aperture"></i>
<span className="font-bold text-lg tracking-widest text-white/90">NOMIN</span>
</div>
<span className="text-[10px] bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">BONUS CARD</span>
</div>
<div>
<div className="text-xl tracking-widest mb-4 font-mono text-white/90">9231 8192 0000 ....</div>
<div className="flex justify-between items-end">
<div>
<div className="text-[10px] text-blue-200 uppercase mb-1">CARD HOLDER</div>
<div className="text-sm font-semibold tracking-wide">SARAH JENKINS</div>
</div>
<div className="font-bold text-2xl italic text-white/90">VISA</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-[1440px] mx-auto px-6 mt-20">
<div className="bg-white rounded-2xl p-8 md:p-10 flex flex-col lg:flex-row gap-12 lg:divide-x-0">
<div className="flex-1 text-center lg:text-left">
<div className="text-4xl font-bold text-slate-900">1M+</div>
<div className="text-sm text-slate-500 mt-2 font-medium">Сар бүрийн идэвхтэй хэрэглэгч</div>
</div>
<div className="flex-1 lg:pl-8 text-center lg:text-left">
<div className="text-4xl font-bold text-slate-900">14M+</div>
<div className="text-sm text-slate-500 mt-2 font-medium">Цуглуулсан бонус оноо</div>
</div>
<div className="flex-[1.5] lg:pl-8 bg-blue-600 rounded-xl p-8 text-white relative overflow-hidden shadow-xl shadow-blue-600/30">
<div className="relative z-10 flex justify-between items-end">
<div>
<div className="text-3xl font-bold">34,892</div>
<div className="text-sm text-blue-100 mt-1">Шинэ хэрэглэгчид (Өнөөдөр)</div>
</div>
<div className="text-xl font-bold">78%</div>
</div>
<div className="absolute bottom-0 left-0 h-1.5 bg-white/20 w-full">
<div className="h-full bg-white w-[78%] rounded-r-full"></div>
</div>
</div>
</div>
</div>
</section>

<div className="bg-blue-600 py-12">
<div className="max-w-[1440px] mx-auto px-6">
<div className="flex flex-col items-center mb-8 text-white text-center">
<h3 className="text-xl font-semibold opacity-90">Шуурхай холбоосууд</h3>
</div>
<div className="flex flex-wrap justify-center gap-4">
<a className="px-6 py-4 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-sm font-medium transition-colors flex items-center gap-2 shadow-lg shadow-blue-900/10" href="#">
                    Санхүүгийн бизнес <i className="w-3 h-3 opacity-50" data-lucide="arrow-right"></i>
</a>
<a className="px-6 py-4 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-sm font-medium transition-colors flex items-center gap-2 shadow-lg shadow-blue-900/10" href="#">
                    Борлуулалт <br className="hidden md:block"/>үйлчилгээ <i className="w-3 h-3 opacity-50" data-lucide="arrow-right"></i>
</a>
<a className="px-6 py-4 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-sm font-medium transition-colors flex items-center gap-2 shadow-lg shadow-blue-900/10" href="#">
                    Экспорт, Импорт <i className="w-3 h-3 opacity-50" data-lucide="arrow-right"></i>
</a>
<a className="px-6 py-4 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-sm font-medium transition-colors flex items-center gap-2 shadow-lg shadow-blue-900/10" href="#">
                    Барилга, үл <br className="hidden md:block"/>хөдлөх хөрөнгө <i className="w-3 h-3 opacity-50" data-lucide="arrow-right"></i>
</a>
<a className="px-6 py-4 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-sm font-medium transition-colors flex items-center gap-2 shadow-lg shadow-blue-900/10" href="#">
                    Технологи <i className="w-3 h-3 opacity-50" data-lucide="arrow-right"></i>
</a>
<a className="px-6 py-4 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-sm font-medium transition-colors flex items-center gap-2 shadow-lg shadow-blue-900/10" href="#">
                    Агаарын тээвэр <i className="w-3 h-3 opacity-50" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>

<footer className="bg-slate-50 pt-20 pb-10">
<div className="max-w-[1440px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

<div>
<h4 className="font-bold text-slate-900 uppercase tracking-wide mb-6">СОШИАЛ СУВГУУД</h4>
<div className="flex gap-4">
<a className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-pink-600 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-red-600 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="youtube"></i></a>
<a className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-black hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="x"></i></a>
</div>
</div>

<div>
<h4 className="font-bold text-slate-900 uppercase tracking-wide mb-6">БИДНИЙ ТУХАЙ</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">Танилцуулга</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Ерөнхийлөгчийн мэндчилгээ</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Захирлууд</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Түүхэн замнал</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Шагнал, өргөмжлөл</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-slate-900 uppercase tracking-wide mb-6">БИДНИЙ БИЗНЕС</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">Бүтэц</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Борлуулалт</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Импорт / Экспорт</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Санхүү / Даатгал</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Барилга / Үл Хөдлөх</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Технологи</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-slate-900 uppercase tracking-wide mb-6">БУСАД</h4>
<ul className="space-y-3 text-sm text-slate-500 mb-8">
<li><a className="hover:text-blue-600 transition-colors" href="#">Ажлын байр</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Нийлүүлэгч</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Байршил</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Нийгмийн хариуцлага</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Архив</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Түгээмэл асуултууд</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Site Index</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Холбоо барих</a></li>
</ul>
<h4 className="font-bold text-slate-900 uppercase tracking-wide mb-4">ХОЛБОО БАРИХ</h4>
<div className="text-sm text-slate-500 space-y-1">
<p>Номин Юнайтэд</p>
<p>Хан-Уул дүүрэг,</p>
<p>Чингисийн өргөн чөлөө</p>
<p>Улаанбаатар 17042,</p>
<p>Монгол Улс, 210136, Ш / Ч-2316</p>
<p className="mt-4">Утас: 1800-2888</p>
<p>Fax: 976 7577-9999</p>
<p>Email: nomin@nomin.net</p>
</div>
</div>
</div>

<div className="pt-10 flex flex-col items-center justify-center">

<div className="text-slate-300 mb-4 opacity-70">
<svg fill="currentColor" height="60" viewbox="0 0 200 60" width="200">
<path d="M10,30 Q30,10 50,30 T90,30 T130,30" fill="none" stroke="currentColor" strokeWidth="2"></path>
<text fontFamily="serif" fontSize="24" font-style={{}} text-anchor="middle" x="100" y="50">Nomin Holding</text>
</svg>
</div>
<p className="text-xs text-slate-400">Copyright © 2024 NOMIN Holding. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
