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
sans: ['"Nunito Sans"', 'sans-serif'],
},
colors: {
brand: {
50: '#fff0f3',
100: '#ffe3e8',
500: '#ea093e', // Ana Marka Rengi
600: '#c90532',
900: '#1a1a1a',
}
},
spacing: {
'128': '32rem',
}
}
}
}

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
      

<div className="bg-brand-500 text-white text-xs font-medium text-center py-2 px-4 tracking-wide">
        300 TL ve üzeri siparişlerde <span className="opacity-90 font-semibold">KARGO BEDAVA</span>
</div>

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16 gap-4">

<button className="lg:hidden text-gray-500 hover:text-brand-500 transition-colors" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<a className="flex-shrink-0 flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center text-white rotate-3 group-hover:rotate-0 transition-transform duration-300">
<span className="font-bold text-lg">O</span>
</div>
<span className="text-lg font-bold tracking-tight text-gray-900 hidden sm:block">Oyuncak<span className="text-brand-500">Mağazası</span></span>
</a>

<div className="hidden lg:flex flex-1 max-w-xl mx-8">
<div className="relative w-full group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-brand-500 transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl leading-5 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-brand-500 focus:border-brand-500 sm:text-sm transition-all duration-200" placeholder="LEGO, Barbie, Hot Wheels ara..." type="text"/>
</div>
</div>

<div className="flex items-center gap-2 sm:gap-4">
<button className="lg:hidden p-2 text-gray-500 hover:text-brand-500 transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<a className="p-2 text-gray-500 hover:text-brand-500 hover:bg-brand-50 rounded-full transition-all duration-200 relative group" href="#">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="hidden sm:inline-block text-xs font-medium ml-1 group-hover:text-brand-600">Hesabım</span>
</a>
<a className="p-2 text-gray-500 hover:text-brand-500 hover:bg-brand-50 rounded-full transition-all duration-200 relative" href="#">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-500 rounded-full ring-2 ring-white"></span>
</a>
<a className="p-2 text-gray-900 hover:text-brand-500 hover:bg-brand-50 rounded-full transition-all duration-200 relative flex items-center gap-1" href="#">
<div className="relative">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full ring-2 ring-white">0</span>
</div>
<span className="hidden sm:block text-sm font-semibold ml-1">₺0,00</span>
</a>
</div>
</div>
</div>

<div className="hidden lg:hidden border-t border-gray-100 bg-white absolute w-full left-0 top-16 shadow-lg" id="mobile-menu">
<div className="px-4 py-2 space-y-1">
<a className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50" href="#">Oyuncak Araba</a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50" href="#">Bebekler</a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50" href="#">Yapı Oyuncakları</a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50" href="#">Kutu Oyunları</a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50" href="#">Dış Mekan</a>
</div>
</div>
</header>

<nav className="hidden lg:block border-b border-gray-200 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center space-x-8 overflow-x-auto scrollbar-hide py-3">
<a className="text-sm font-medium text-brand-500 border-b-2 border-brand-500 pb-2.5 -mb-3 whitespace-nowrap" href="#">Tüm Ürünler</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap" href="#">Oyuncak Araba</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap" href="#">Bebekler</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap" href="#">LEGO &amp; Yapı</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap" href="#">Anne &amp; Bebek</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap" href="#">Nerf &amp; Silah</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap" href="#">Kutu Oyunları</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap" href="#">Eğitici</a>
</div>
</div>
</nav>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">

<section className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-8 relative overflow-hidden rounded-3xl group bg-gray-100 h-[400px] md:h-[500px]">
<img alt="Lego Hero" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://oyuncakmagazasi.com.tr/wp-content/uploads/2024/08/lbg.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 sm:p-12">
<span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full mb-4 border border-white/30">YENİ SEZON</span>
<h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4 leading-[1.1]">
                        LEGO Dünyasını<br/>Keşfetmeye Hazır mısın?
                    </h1>
<p className="text-gray-200 text-lg mb-8 max-w-md">Hayal gücünün sınırlarını zorlayan setlerde avantajlı fiyatlar.</p>
<a className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:gap-3" href="#">
                        Alışverişe Başla
                        <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="md:col-span-4 flex flex-col gap-6 h-[400px] md:h-[500px]">
<div className="relative flex-1 overflow-hidden rounded-3xl group bg-gray-100">
<img alt="Hot Wheels" className="absolute inset-0 w-full h-full object-contain p-4 bg-orange-50 transition-transform duration-500 group-hover:scale-110" src="https://oyuncakmagazasi.com.tr/wp-content/uploads/2024/09/Group-24.png"/>
<div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/40"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-1">Hot Wheels</h3>
<p className="text-gray-600 text-sm mb-3">Hız tutkunları için özel seri.</p>
<span className="text-brand-500 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">İncele <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</div>
<div className="relative flex-1 overflow-hidden rounded-3xl group bg-gray-100">
<img alt="Funko Pop" className="absolute inset-0 w-full h-full object-contain p-4 bg-purple-50 transition-transform duration-500 group-hover:scale-110" src="https://oyuncakmagazasi.com.tr/wp-content/uploads/2024/12/1-4.png"/>
<div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/40"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-1">Funko Pop!</h3>
<p className="text-gray-600 text-sm mb-3">Favori karakterlerin koleksiyonu.</p>
<span className="text-brand-500 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">İncele <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-bold tracking-tight text-gray-900">Popüler Kategoriler</h2>
<a className="text-sm font-semibold text-brand-500 hover:text-brand-600 flex items-center gap-1" href="#">
                    Tümünü Gör <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">

<a className="flex flex-col items-center gap-3 min-w-[100px] group" href="#">
<div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-brand-50 group-hover:text-brand-500 transition-colors duration-300 shadow-sm border border-gray-100">
<iconify-icon icon="solar:wheel-angle-linear" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<span className="text-sm font-semibold text-gray-700 group-hover:text-brand-500 transition-colors">Araçlar</span>
</a>
<a className="flex flex-col items-center gap-3 min-w-[100px] group" href="#">
<div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-brand-50 group-hover:text-brand-500 transition-colors duration-300 shadow-sm border border-gray-100">
<iconify-icon icon="solar:user-hand-up-linear" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<span className="text-sm font-semibold text-gray-700 group-hover:text-brand-500 transition-colors">Bebekler</span>
</a>
<a className="flex flex-col items-center gap-3 min-w-[100px] group" href="#">
<div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-brand-50 group-hover:text-brand-500 transition-colors duration-300 shadow-sm border border-gray-100">
<iconify-icon icon="solar:widget-2-linear" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<span className="text-sm font-semibold text-gray-700 group-hover:text-brand-500 transition-colors">Yapı</span>
</a>
<a className="flex flex-col items-center gap-3 min-w-[100px] group" href="#">
<div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-brand-50 group-hover:text-brand-500 transition-colors duration-300 shadow-sm border border-gray-100">
<iconify-icon icon="solar:gamepad-linear" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<span className="text-sm font-semibold text-gray-700 group-hover:text-brand-500 transition-colors">Oyunlar</span>
</a>
<a className="flex flex-col items-center gap-3 min-w-[100px] group" href="#">
<div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-brand-50 group-hover:text-brand-500 transition-colors duration-300 shadow-sm border border-gray-100">
<iconify-icon icon="solar:mask-happly-linear" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<span className="text-sm font-semibold text-gray-700 group-hover:text-brand-500 transition-colors">Peluşlar</span>
</a>
<a className="flex flex-col items-center gap-3 min-w-[100px] group" href="#">
<div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-brand-50 group-hover:text-brand-500 transition-colors duration-300 shadow-sm border border-gray-100">
<iconify-icon icon="solar:rocket-2-linear" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<span className="text-sm font-semibold text-gray-700 group-hover:text-brand-500 transition-colors">Açık Hava</span>
</a>
<a className="flex flex-col items-center gap-3 min-w-[100px] group" href="#">
<div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-brand-50 group-hover:text-brand-500 transition-colors duration-300 shadow-sm border border-gray-100">
<iconify-icon icon="solar:music-note-slider-linear" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<span className="text-sm font-semibold text-gray-700 group-hover:text-brand-500 transition-colors">Müzik</span>
</a>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-8">
<div>
<h2 className="text-2xl font-bold tracking-tight text-gray-900">Çok Satanlar</h2>
<p className="text-sm text-gray-500 mt-1">Haftanın en popüler ürünlerini keşfedin.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-600 transition-colors">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-600 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">

<div className="group relative">
<div className="aspect-square w-full overflow-hidden rounded-2xl bg-white border border-gray-100 relative mb-4">
<span className="absolute top-3 left-3 bg-red-50 text-red-600 text-[10px] font-bold px-2 py-1 rounded-full z-10">-35%</span>
<div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2">
<button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-400 hover:text-brand-500 transition-colors">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<img alt="Toycraft RC" className="h-full w-full object-contain object-center group-hover:scale-105 transition-transform duration-500 p-4" src="https://oyuncakmagazasi.com.tr/wp-content/uploads/2025/01/1_org_zoom-1-280x280.webp"/>
</div>
<h3 className="text-sm font-semibold text-gray-900 truncate">Toycraft 80 Km/H 1:8 Elektirikli RC Araba</h3>
<p className="mt-1 text-xs text-gray-500">Kumandalı Araba</p>
<div className="mt-2 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs text-gray-400 line-through font-medium">10.799 TL</span>
<span className="text-lg font-bold text-brand-500">6.999 TL</span>
</div>
<button className="w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-brand-500 transition-colors shadow-lg shadow-gray-200">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="group relative">
<div className="aspect-square w-full overflow-hidden rounded-2xl bg-white border border-gray-100 relative mb-4">
<img alt="Goojitzu" className="h-full w-full object-contain object-center group-hover:scale-105 transition-transform duration-500 p-4" src="https://oyuncakmagazasi.com.tr/wp-content/uploads/2024/09/26579_Goojitzu_Cursed_Goo_Sea_Tekli_Paket_GJT49000-280x280.jpg"/>
<div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2">
<button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-400 hover:text-brand-500 transition-colors">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
</button>
</div>
</div>
<h3 className="text-sm font-semibold text-gray-900 truncate">Goojitzu Cursed Goo Sea Tekli Paket</h3>
<p className="mt-1 text-xs text-gray-500">Figür Oyuncaklar</p>
<div className="mt-2 flex items-center justify-between">
<span className="text-lg font-bold text-gray-900">999 TL</span>
<button className="w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-brand-500 transition-colors shadow-lg shadow-gray-200">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="group relative">
<div className="aspect-square w-full overflow-hidden rounded-2xl bg-white border border-gray-100 relative mb-4">
<span className="absolute top-3 left-3 bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-1 rounded-full z-10">YENİ</span>
<img alt="Lego Ferrari" className="h-full w-full object-contain object-center group-hover:scale-105 transition-transform duration-500 p-4" src="https://oyuncakmagazasi.com.tr/wp-content/uploads/2025/03/599be_LEGO_Speed_Champions_Ferrari_SF24_F1_Yaris_Arabasi-280x280.jpg"/>
</div>
<h3 className="text-sm font-semibold text-gray-900 truncate">LEGO Speed Champions Ferrari SF-24 F1</h3>
<p className="mt-1 text-xs text-gray-500">LEGO</p>
<div className="mt-2 flex items-center justify-between">
<span className="text-lg font-bold text-gray-900">1.499 TL</span>
<button className="w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-brand-500 transition-colors shadow-lg shadow-gray-200">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="group relative">
<div className="aspect-square w-full overflow-hidden rounded-2xl bg-white border border-gray-100 relative mb-4">
<span className="absolute top-3 left-3 bg-red-50 text-red-600 text-[10px] font-bold px-2 py-1 rounded-full z-10">-16%</span>
<img alt="Hot Wheels" className="h-full w-full object-contain object-center group-hover:scale-105 transition-transform duration-500 p-4" src="https://oyuncakmagazasi.com.tr/wp-content/uploads/2024/09/1_org_zoom-2-1-280x280.webp"/>
</div>
<h3 className="text-sm font-semibold text-gray-900 truncate">Hot Wheels Premium Fast &amp; Furious 5’li Set</h3>
<p className="mt-1 text-xs text-gray-500">Model Arabalar</p>
<div className="mt-2 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs text-gray-400 line-through font-medium">4.499 TL</span>
<span className="text-lg font-bold text-brand-500">3.799 TL</span>
</div>
<button className="w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-brand-500 transition-colors shadow-lg shadow-gray-200">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="border-t border-gray-100 pt-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-500 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:stopwatch-linear" width="28"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-gray-900">Hızlı Kargo</h4>
<p className="text-sm text-gray-500 mt-1 leading-relaxed">Hafta içi 24 saat içinde kargoda.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:box-linear" width="28"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-gray-900">Ücretsiz Kargo</h4>
<p className="text-sm text-gray-500 mt-1 leading-relaxed">300 TL ve üzeri siparişlerde geçerli.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-2xl bg-green-50 text-green-500 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:card-linear" width="28"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-gray-900">Güvenli Ödeme</h4>
<p className="text-sm text-gray-500 mt-1 leading-relaxed">256-bit SSL ile korunan ödemeler.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-500 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-gray-900">Orijinal Ürün</h4>
<p className="text-sm text-gray-500 mt-1 leading-relaxed">Tüm ürünlerimiz lisanslı ve orijinaldir.</p>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-gray-200 pt-16 pb-8 mt-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
<div className="space-y-4">
<a className="flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center text-white">
<span className="font-bold text-lg">O</span>
</div>
<span className="text-lg font-bold tracking-tight text-gray-900">Oyuncak<span className="text-brand-500">Mağazası</span></span>
</a>
<p className="text-sm text-gray-500 leading-relaxed">
                        Çocukların hayal dünyasını geliştiren en yeni ve popüler oyuncaklar burada. Güvenli alışveriş ve hızlı teslimat garantisiyle.
                    </p>
<div className="flex gap-4 pt-2">
<a className="text-gray-400 hover:text-brand-500 transition-colors" href="#"><iconify-icon icon="mdi:instagram" width="20"></iconify-icon></a>
<a className="text-gray-400 hover:text-brand-500 transition-colors" href="#"><iconify-icon icon="mdi:facebook" width="20"></iconify-icon></a>
<a className="text-gray-400 hover:text-brand-500 transition-colors" href="#"><iconify-icon icon="mdi:twitter" width="20"></iconify-icon></a>
<a className="text-gray-400 hover:text-brand-500 transition-colors" href="#"><iconify-icon icon="mdi:youtube" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-bold text-gray-900 mb-4 tracking-tight">Kategoriler</h4>
<ul className="space-y-2.5">
<li><a className="text-sm text-gray-500 hover:text-brand-500 transition-colors" href="#">Oyuncak Araba</a></li>
<li><a className="text-sm text-gray-500 hover:text-brand-500 transition-colors" href="#">Bebekler</a></li>
<li><a className="text-sm text-gray-500 hover:text-brand-500 transition-colors" href="#">Yapı Oyuncakları</a></li>
<li><a className="text-sm text-gray-500 hover:text-brand-500 transition-colors" href="#">Anne Bebek</a></li>
<li><a className="text-sm text-gray-500 hover:text-brand-500 transition-colors" href="#">Oyuncak Silah</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-gray-900 mb-4 tracking-tight">Bilgilendirme</h4>
<ul className="space-y-2.5">
<li><a className="text-sm text-gray-500 hover:text-brand-500 transition-colors" href="#">Hakkımızda</a></li>
<li><a className="text-sm text-gray-500 hover:text-brand-500 transition-colors" href="#">Çerez Politikası</a></li>
<li><a className="text-sm text-gray-500 hover:text-brand-500 transition-colors" href="#">Mesafeli Satış Sözleşmesi</a></li>
<li><a className="text-sm text-gray-500 hover:text-brand-500 transition-colors" href="#">İptal ve İade</a></li>
<li><a className="text-sm text-gray-500 hover:text-brand-500 transition-colors" href="#">Kişisel Verilerin Korunması</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-gray-900 mb-4 tracking-tight">İletişim</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-500 mt-0.5" icon="solar:map-point-linear" width="18"></iconify-icon>
<span className="text-sm text-gray-500">İstanbul, Türkiye</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-500" icon="solar:phone-calling-linear" width="18"></iconify-icon>
<span className="text-sm text-gray-500">+90 501 675 78 96</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-500" icon="solar:letter-linear" width="18"></iconify-icon>
<span className="text-sm text-gray-500">info@oyuncakmagazasi.com.tr</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-400">© 2024 Oyuncak Mağazası. Tüm hakları saklıdır.</p>
<img alt="Payment Methods" className="h-5 opacity-70 grayscale hover:grayscale-0 transition-all" src="https://oyuncakmagazasi.com.tr/wp-content/uploads/2024/07/banka_logolar.webp"/>
</div>
</div>
</footer>

    </>
  );
}
