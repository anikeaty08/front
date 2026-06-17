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
      

<aside className="w-16 lg:w-64 border-r border-gray-200 bg-white flex flex-col justify-between hidden md:flex z-20">
<div>
<div className="h-16 flex items-center px-4 lg:px-6 border-b border-gray-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-black text-white rounded-md flex items-center justify-center font-medium tracking-tighter text-sm">
                        OD
                    </div>
<span className="hidden lg:block font-medium tracking-tight text-sm">Oğulcan Demirer</span>
</div>
</div>
<nav className="p-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-900 bg-gray-50 rounded-md group" href="#">
<iconify-icon className="text-lg" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="hidden lg:block">İçerik Editörü</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors group" href="#">
<iconify-icon className="text-lg text-gray-400 group-hover:text-gray-900" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="hidden lg:block">SEO Analizi</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors group" href="#">
<iconify-icon className="text-lg text-gray-400 group-hover:text-gray-900" icon="solar:documents-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span className="hidden lg:block">Yazılarım</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors group" href="#">
<iconify-icon className="text-lg text-gray-400 group-hover:text-gray-900" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
<span className="hidden lg:block">Aboneler</span>
</a>
</nav>
</div>
<div className="p-4 border-t border-gray-100">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
<span className="hidden lg:block">Ayarlar</span>
</a>
</div>
</aside>

<main className="flex-1 flex flex-col md:flex-row h-full overflow-hidden">

<section className="flex-1 flex flex-col h-full bg-white border-r border-gray-200 relative">

<div className="h-16 border-b border-gray-100 flex items-center justify-between px-6 bg-white shrink-0">
<div className="flex items-center gap-2 text-gray-400 text-xs">
<span>Taslaklar</span>
<iconify-icon className="text-gray-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-gray-900 font-medium">Yeni Blog Yazısı</span>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-gray-400 font-mono">Kaydedildi</span>
<button className="bg-black text-white hover:bg-gray-800 transition-colors px-4 py-1.5 rounded-md text-xs font-medium tracking-tight shadow-sm">
                        Yayınla
                    </button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-8 lg:p-12">
<div className="max-w-2xl mx-auto space-y-8">

<input className="w-full text-4xl font-medium tracking-tight text-gray-900 placeholder:text-gray-300 border-none outline-none bg-transparent p-0" placeholder="Yazı Başlığı..." type="text" value="2024 SEO Trendleri: Teknik Optimizasyon"/>

<div className="p-4 bg-gray-50 rounded-lg border border-gray-100 space-y-4">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center gap-1">
<iconify-icon icon="solar:magnifer-linear"></iconify-icon> SEO Metadata
                            </span>
<div className="flex items-center gap-1 text-emerald-600 text-xs font-medium bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
<span>Skor: 92/100</span>
</div>
</div>
<div className="grid gap-4">
<div>
<label className="block text-xs text-gray-500 mb-1.5">Permalink</label>
<div className="flex items-center text-sm text-gray-400 border border-gray-200 rounded-md px-3 py-2 bg-white">
<span>ogulcan.com/blog/</span>
<input className="text-gray-900 outline-none ml-1 w-full bg-transparent font-medium" type="text" value="2024-seo-teknik-optimizasyon"/>
</div>
</div>
<div>
<label className="block text-xs text-gray-500 mb-1.5">Meta Açıklaması (Description)</label>
<textarea className="w-full text-sm text-gray-900 border border-gray-200 rounded-md px-3 py-2 bg-white outline-none focus:border-gray-400 transition-colors resize-none h-20 placeholder:text-gray-300">Google'ın son güncellemeleriyle değişen teknik SEO gereksinimleri ve 2024 stratejileri hakkında kapsamlı rehber.</textarea>
</div>
</div>
</div>

<div className="prose prose-sm max-w-none text-gray-600 space-y-4">
<div className="flex items-center gap-2 border-b border-gray-100 pb-2 mb-4 text-gray-400">
<button className="hover:text-gray-900"><iconify-icon className="text-lg" icon="solar:text-bold-linear"></iconify-icon></button>
<button className="hover:text-gray-900"><iconify-icon className="text-lg" icon="solar:text-italic-linear"></iconify-icon></button>
<button className="hover:text-gray-900"><iconify-icon className="text-lg" icon="solar:link-linear"></iconify-icon></button>
<div className="w-px h-4 bg-gray-200 mx-1"></div>
<button className="hover:text-gray-900"><iconify-icon className="text-lg" icon="solar:list-check-linear"></iconify-icon></button>
<button className="hover:text-gray-900 text-gray-900"><iconify-icon className="text-lg" icon="solar:gallery-linear"></iconify-icon></button>
</div>
<p className="leading-relaxed">Arama motoru optimizasyonu dünyası sürekli evriliyor. Core Web Vitals metriklerinin önem kazanmasıyla birlikte, sayfa hızı ve kullanıcı deneyimi artık sıralama faktörlerinin merkezinde yer alıyor.</p>
<div className="my-6 border-l-2 border-gray-900 pl-4 italic text-gray-800">
                            "SEO artık sadece anahtar kelime değil, kullanıcı niyetini anlamak ve teknik mükemmelliktir."
                        </div>
<p className="leading-relaxed">Bu yazıda, sitenizin taranabilirliğini artırmak için kullanabileceğiniz modern tekniklerden ve JavaScript framework'lerinin SEO üzerindeki etkilerinden bahsedeceğiz.</p>
<div className="h-32 bg-gray-50 rounded-lg border border-dashed border-gray-200 flex items-center justify-center gap-2 text-gray-400 cursor-pointer hover:bg-gray-100 transition-colors">
<iconify-icon className="text-2xl" icon="solar:gallery-add-linear"></iconify-icon>
<span className="text-sm font-medium">Görsel Yükle</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full lg:w-[480px] bg-gray-50 border-l border-gray-200 flex flex-col h-full overflow-hidden hidden md:flex">

<div className="h-16 border-b border-gray-200/50 flex items-center justify-between px-6 bg-gray-50/80 backdrop-blur-sm shrink-0 z-10">
<span className="text-xs font-medium tracking-wider text-gray-500 uppercase">Canlı Önizleme (Mobile/Desktop)</span>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<div className="w-2 h-2 rounded-full bg-amber-400"></div>
<div className="w-2 h-2 rounded-full bg-emerald-400"></div>
</div>
</div>

<div className="flex-1 overflow-y-auto">
<div className="min-h-full bg-white shadow-sm max-w-[90%] mx-auto my-6 border border-gray-200 rounded-xl overflow-hidden">

<header className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
<div className="text-sm font-semibold tracking-tight text-gray-900">ogulcan.</div>
<nav className="flex gap-4 text-xs font-medium text-gray-500">
<a className="text-gray-900" href="#">Blog</a>
<a className="hover:text-gray-900" href="#">Hakkımda</a>
<a className="hover:text-gray-900" href="#">İletişim</a>
</nav>
</header>

<div className="p-6 md:p-8 space-y-12">

<div className="space-y-2">
<h1 className="text-lg font-medium tracking-tight text-gray-900">SEO, Büyüme ve Minimalizm Üzerine Notlar</h1>
<p className="text-sm text-gray-500 leading-relaxed">Dijital dünyada görünürlük elde etmek için teknik ipuçları ve kişisel deneyimlerimi paylaşıyorum.</p>
</div>

<div className="space-y-8">

<article className="group cursor-pointer">
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] font-medium uppercase tracking-wide text-gray-400">Bugün</span>
<span className="w-1 h-1 bg-gray-300 rounded-full"></span>
<span className="text-[10px] font-medium uppercase tracking-wide text-blue-600">Teknik SEO</span>
</div>
<h2 className="text-base font-medium text-gray-900 group-hover:text-gray-600 transition-colors mb-2 tracking-tight">2024 SEO Trendleri: Teknik Optimizasyon</h2>
<p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">Google'ın son güncellemeleriyle değişen teknik SEO gereksinimleri ve 2024 stratejileri hakkında kapsamlı rehber.</p>
<div className="mt-3 flex items-center gap-1 text-xs font-medium text-gray-900 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                                    Devamını Oku <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</article>

<article className="group cursor-pointer">
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] font-medium uppercase tracking-wide text-gray-400">12 Eki</span>
<span className="w-1 h-1 bg-gray-300 rounded-full"></span>
<span className="text-[10px] font-medium uppercase tracking-wide text-purple-600">Analitik</span>
</div>
<h2 className="text-base font-medium text-gray-900 group-hover:text-gray-600 transition-colors mb-2 tracking-tight">GA4 ile Dönüşüm Takibi Nasıl Yapılır?</h2>
<p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">Veri odaklı kararlar almak için Google Analytics 4 üzerinde özel olaylar ve dönüşüm hunileri kurma rehberi.</p>
</article>

<article className="group cursor-pointer">
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] font-medium uppercase tracking-wide text-gray-400">28 Eyl</span>
<span className="w-1 h-1 bg-gray-300 rounded-full"></span>
<span className="text-[10px] font-medium uppercase tracking-wide text-gray-500">Kariyer</span>
</div>
<h2 className="text-base font-medium text-gray-900 group-hover:text-gray-600 transition-colors mb-2 tracking-tight">Dijital Pazarlama Uzmanı Olmak</h2>
<p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">Sektöre yeni başlayanlar için yol haritası, öğrenilmesi gereken araçlar ve mindset değişimi.</p>
</article>
</div>

<div className="pt-8 border-t border-gray-100">
<h3 className="text-sm font-medium text-gray-900 mb-2">Haftalık SEO Bülteni</h3>
<p className="text-xs text-gray-500 mb-4">Spam yok, sadece kaliteli içerik.</p>
<form className="flex gap-2">
<input className="flex-1 bg-gray-50 border border-gray-200 rounded text-xs px-3 py-2 outline-none focus:border-gray-900 transition-colors" placeholder="email@adresiniz.com" type="email"/>
<button className="bg-gray-900 text-white text-xs font-medium px-4 py-2 rounded hover:bg-black transition-colors">Abone Ol</button>
</form>
</div>
<footer className="pt-8 pb-4 text-center">
<p className="text-[10px] text-gray-400">© 2024 Oğulcan Demirer.</p>
</footer>
</div>
</div>
</div>
</section>
</main>

<div className="fixed bottom-4 right-4 md:hidden z-50">
<button className="bg-black text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:pen-new-square-linear"></iconify-icon>
</button>
</div>

    </>
  );
}
