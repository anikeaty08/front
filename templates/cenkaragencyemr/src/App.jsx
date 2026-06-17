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
      

<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-[#050505]/80 backdrop-blur-md">
<div className="flex h-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 text-lg font-semibold text-white tracking-tighter" href="#">Cenkar Agency</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors duration-200" href="#hizmetler">Hizmetler</a>
<a className="hover:text-white transition-colors duration-200" href="#yaklasim">Sistem</a>
<a className="hover:text-white transition-colors duration-200" href="https://www.instagram.com/reel/DUqR9qFiIlA/?igsh=MXVwYTV2ZHhjOXZxeg==">Memnuniyet</a>
</nav>
<a className="hidden md:flex items-center justify-center hover:bg-zinc-200 transition-colors duration-200 text-sm font-medium text-black bg-white h-9 rounded-md pr-4 pl-4" href="https://calendar.app.google/TyFZmUv8EjXWyVgL9">
                Görüşme Planla
            </a>
<button className="md:hidden text-zinc-400 hover:text-white">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</header>
<main className="flex-grow pt-16">

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">

<img alt="Beautiful nature landscape" className="z-0 opacity-40 mix-blend-luminosity w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/70 to-[#050505] z-0 pointer-events-none"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/[0.05] blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.1] bg-white/[0.03] text-xs font-normal text-zinc-300 mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Yeni Müşteri Alımına Açık
                </div>
<h1 className="leading-tight md:text-6xl text-4xl font-medium text-purple-500 tracking-tight border-slate-800 ring-slate-400 mb-6">Özel Stratejilerle İşletmenizi Bir Adım Öne Taşıyalım</h1>
<p className="md:text-lg leading-relaxed text-base font-light text-zinc-300 max-w-2xl mr-auto mb-10 ml-auto">Merhaba, ben Emre Cenk. Performans odaklı dijital pazarlama stratejileri, veri analizi ve büyüme odaklı reklam yönetimi ile markanızın cirosunu artırıyorum.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="sm:w-auto flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors duration-200 text-sm font-normal text-black bg-white w-full h-11 rounded-md pr-6 pl-6" href="https://wa.me/905422598660?text=Merhaba%20hesab%C4%B1mla%20ilgili%20%C3%BCcretsiz%20analiz%20istiyorum">
                        Ücretsiz Analiz İsteyin
                        <iconify-icon className="" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-10 border-y border-white/[0.08] bg-white/[0.01]">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/[0.08]">
<div className="text-center pr-4 pl-4">
<div className="md:text-3xl text-2xl font-semibold text-white tracking-tight mb-1">2.66 TL</div>
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Sonuç Başı Maliyet</div>
</div>
<div className="text-center px-4">
<div className="md:text-3xl text-2xl font-semibold text-white tracking-tight mb-1">3+</div>
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Yıllık Tecrübe</div>
</div>
<div className="text-center px-4">
<div className="md:text-3xl text-2xl font-semibold text-white tracking-tight mb-1">3+</div>
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Büyütülen Marka</div>
</div>
<div className="text-center px-4">
<div className="md:text-3xl text-2xl font-semibold text-white tracking-tight mb-1">%100</div>
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Ort. ROAS Artışı</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6 relative" id="hizmetler">
<div className="max-w-6xl mr-auto ml-auto">
<div className="mb-16 md:text-center">
<h2 className="md:text-4xl text-3xl font-semibold text-purple-900 tracking-tight mb-4">Uzmanlık Alanlarım</h2>
<p className="text-base text-zinc-400 max-w-xl md:mx-auto font-light">Tıklamalardan ziyade dönüşüme ve karlılığa odaklanan, veriye dayalı stratejiler üretiyorum.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300">
<div className="w-12 h-12 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white mb-6">
<iconify-icon className="text-2xl" icon="solar:target-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-3">Sosyal Medya Reklamları</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light mb-6">Meta (Instagram &amp; Facebook), TikTok ve LinkedIn platformlarında hedef kitle odaklı, yüksek dönüşümlü reklam kampanyaları kurguluyor ve optimize ediyorum.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-zinc-500">
<iconify-icon className="text-zinc-300" icon="solar:check-circle-linear"></iconify-icon> Piksel Kurulumu &amp; Takibi
                            </li>
<li className="flex items-center gap-2 text-xs text-zinc-500">
<iconify-icon className="text-zinc-300" icon="solar:check-circle-linear"></iconify-icon> Yeniden Hedefleme (Retargeting)
                            </li>
<li className="flex items-center gap-2 text-xs text-zinc-500">
<iconify-icon className="text-zinc-300" icon="solar:check-circle-linear"></iconify-icon> A/B Testleri
                            </li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300">
<div className="w-12 h-12 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white mb-6">
<iconify-icon className="text-2xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-3">Google Ads Yönetimi</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light mb-6">Arama Ağı, Maksimum Performans (PMax), Görüntülü ve YouTube reklamları ile satın alma niyeti yüksek kullanıcıları markanızla buluşturuyorum.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-zinc-500">
<iconify-icon className="text-zinc-300" icon="solar:check-circle-linear"></iconify-icon> Anahtar Kelime Stratejisi
                            </li>
<li className="flex items-center gap-2 text-xs text-zinc-500">
<iconify-icon className="text-zinc-300" icon="solar:check-circle-linear"></iconify-icon> Kalite Puanı Optimizasyonu
                            </li>
<li className="flex items-center gap-2 text-xs text-zinc-500">
<iconify-icon className="text-zinc-300" icon="solar:check-circle-linear"></iconify-icon> Dönüşüm İzleme Ayarları
                            </li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300">
<div className="w-12 h-12 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white mb-6">
<iconify-icon className="text-2xl" icon="solar:tuning-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-3">CRO &amp; Strateji Danışmanlığı</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light mb-6">Trafiği sadece artırmakla kalmıyor, web sitenize gelen ziyaretçilerin müşteriye dönüşme oranlarını (CRO) analiz ederek iyileştiriyorum.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-zinc-500">
<iconify-icon className="text-zinc-300" icon="solar:check-circle-linear"></iconify-icon> Funnel (Huni) Analizi
                            </li>
<li className="flex items-center gap-2 text-xs text-zinc-500">
<iconify-icon className="text-zinc-300" icon="solar:check-circle-linear"></iconify-icon> Kullanıcı Deneyimi (UX) İncelemesi
                            </li>
<li className="flex items-center gap-2 text-xs text-zinc-500">
<iconify-icon className="text-zinc-300" icon="solar:check-circle-linear"></iconify-icon> Kapsamlı Raporlama
                            </li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-white/[0.08] border-t pt-24 pr-6 pb-24 pl-6" id="yaklasim">
<div className="max-w-4xl mr-auto ml-auto">
<div className="mb-16">
<h2 className="md:text-4xl text-3xl font-semibold text-purple-900 tracking-tight mb-4">
  Nasıl Çalışıyorum?
  <span className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-base tracking-normal font-medium w-full">
<span className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 text-sm shrink-0">1</span>
<span className="text-zinc-300">Keşif ve Analiz</span>
</span>
<span className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 text-sm shrink-0">2</span>
<span className="text-zinc-300">Strateji Oluşturma ve Planlama</span>
</span>
<span className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 text-sm shrink-0">3</span>
<span className="text-zinc-300">Uygulama ve Optimizasyon</span>
</span>
<span className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 text-sm shrink-0">4</span>
<span className="text-zinc-300">Ölçüm ve Geliştirme</span>
</span>
</span>
</h2>
<p className="text-base font-light text-zinc-400">Başarı tesadüf değildir. Planlı, şeffaf ve ölçülebilir bir süreç yönetiyorum.</p>
</div>
<div className="space-y-8 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/[0.1] before:to-transparent">
<div className="flex md:justify-normal md:odd:flex-row-reverse group is-active relative items-center justify-between">
<div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/[0.2] bg-[#050505] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_8px_#050505] z-10 text-xs font-medium">1</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
<h4 className="text-base font-semibold tracking-tight text-white mb-2">Denetim ve Analiz</h4>
<p className="text-sm text-zinc-400 font-light">Mevcut hesaplarınızı inceler, zayıf ve güçlü yönleri belirler, sektör ve rakip analizi yaparım.</p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/[0.2] bg-[#050505] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_8px_#050505] z-10 text-xs font-medium">2</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
<h4 className="text-base font-semibold tracking-tight text-white mb-2">Strateji Kurulumu</h4>
<p className="text-sm text-zinc-400 font-light">Bütçenize ve hedeflerinize en uygun kanalları seçerek size özel, uçtan uca bir dijital pazarlama planı oluştururum.</p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/[0.2] bg-[#050505] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_8px_#050505] z-10 text-xs font-medium">3</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
<h4 className="text-base font-semibold tracking-tight text-white mb-2">Yayına Alma &amp; Optimizasyon</h4>
<p className="text-sm text-zinc-400 font-light">Kampanyaları devreye alır, günlük takiplerle bütçe israfını önler ve dönüşüm maliyetlerini düşürmek için sürekli optimize ederim.</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-white/[0.08] overflow-hidden border-t pt-32 pr-6 pb-32 pl-6 relative" id="iletisim" style={{maskImage: 'linear-gradient(150deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(150deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/[0.02] pointer-events-none"></div>
<div className="z-10 text-center max-w-3xl mr-auto ml-auto relative">
<h2 className="md:text-5xl text-3xl font-semibold text-purple-900 tracking-tight mb-6">Büyüme Yolculuğunuza Başlayın</h2>
<p className="text-base font-light text-zinc-400 max-w-xl mr-auto mb-10 ml-auto">Sınırlı sayıda markaya danışmanlık veriyorum. İşletmenizin potansiyelini değerlendirmek ve birlikte çalışıp çalışamayacağımızı görmek için aşağıdaki formu doldurun.</p>
<form className="max-w-md mx-auto space-y-4 text-left">
<div className="">
<label className="block space-y-3 text-sm font-medium text-zinc-300 mb-1.5">
<span className="block text-base font-bold text-purple-900 tracking-tight mb-4">İletişim Bilgileri</span>
<span className="flex items-center gap-3"><svg className="text-zinc-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> 0542 259 86 60</span>
<span className="flex items-center gap-3">
<svg className="text-zinc-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
    cenkaragency70@gmail.com
  </span>
<span className="flex items-center gap-3">
<svg className="text-zinc-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 15.007 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
    Kilis, Türkiye
  </span>
</label>
</div>
<div className="">
</div>
</form>
</div>
</section>
</main>

<footer className="border-white/[0.08] bg-[#050505] border-t pt-10 pr-6 pb-10 pl-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-col items-center md:items-start gap-2">
<span className="text-base font-bold text-zinc-500" style={{color: 'purple'}}>Emre Cenk</span><span className="text-base font-bold text-zinc-500 tracking-normal">Dijital Pazarlama &amp; Marka Danışmanı</span>
</div>
<div className="flex items-center gap-6 text-sm text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Ana Sayfa</a>
<a className="hover:text-white transition-colors" href="#hizmetler">Hizmetler</a>
<a className="hover:text-white transition-colors" href="#iletisim">İletişim</a>
</div>
<div className="flex items-center gap-4">
<a className="w-8 h-8 rounded-full border border-white/[0.1] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:link-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-white/[0.1] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>
<div className="border-white/[0.05] md:text-left flex flex-col md:flex-row text-xs text-zinc-600 text-center max-w-6xl border-t mt-8 mr-auto ml-auto pt-8 items-center justify-between">
<span className="">© 2026 cenkaragency.Tüm hakları saklıdır.</span>
<div className="mt-2 md:mt-0 space-x-4">
<a className="hover:text-zinc-400 transition-colors" href="https://docs.google.com/document/d/1qXu43OWVmgBq6zz8nr6WTvsbRl_4Wd1c21MyWioZbI0/edit?tab=t.0#heading=h.13wmqpf3vuww">Gizlilik Politikası</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Kullanım Şartları</a>
</div>
</div>
</footer>

    </>
  );
}
