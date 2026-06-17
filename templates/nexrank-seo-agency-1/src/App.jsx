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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-violet-600/10 rounded-full blur-[128px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white">
<span className="font-medium tracking-tighter text-lg">N</span>
</div>
<span className="text-lg font-medium tracking-tight text-white group-hover:text-indigo-400 transition-colors">NexRank</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#services">Hizmetler</a>
<a className="hover:text-white transition-colors" href="#process">Süreç</a>
<a className="hover:text-white transition-colors" href="#results">Başarılar</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium px-4 py-2 rounded-full transition-all hover:scale-105" href="#audit">
<span>Analiz İste</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 px-6">
<div className="max-w-5xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                SEO 2.0 Algoritma Güncellemesi Yayında
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 leading-tight">
                Organik trafiğinizi <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">bilimsel verilerle</span> büyütün.
            </h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Tahminlere değil, verilere dayalı SEO stratejileri. Markanızın dijital görünürlüğünü artırmak için teknik analiz ve içerik zekasını birleştiriyoruz.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-950 rounded-full font-medium text-sm hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:rocket-2-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Hemen Başlayın
                </button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 border border-slate-800 text-white rounded-full font-medium text-sm hover:border-slate-700 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:presentation-graph-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Örnek Raporu İncele
                </button>
</div>
</div>

<div className="mt-20 max-w-6xl mx-auto">
<div className="relative rounded-xl border border-white/10 bg-slate-900/50 backdrop-blur-xl p-4 shadow-2xl shadow-indigo-500/10">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

<div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4 px-2">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="h-2 w-32 bg-slate-800 rounded-full"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2">

<div className="p-6 rounded-lg bg-slate-800/30 border border-white/5">
<div className="flex items-center gap-2 text-slate-400 text-xs font-medium mb-2">
<iconify-icon icon="solar:chart-2-linear" width="16"></iconify-icon>
                            ORGANİK TRAFİK
                        </div>
<div className="text-3xl text-white font-medium tracking-tight mb-2">+124%</div>
<div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-indigo-500 h-full w-[70%]"></div>
</div>
</div>

<div className="p-6 rounded-lg bg-slate-800/30 border border-white/5">
<div className="flex items-center gap-2 text-slate-400 text-xs font-medium mb-2">
<iconify-icon icon="solar:ranking-linear" width="16"></iconify-icon>
                            SIRALAMA ARTIŞI
                        </div>
<div className="text-3xl text-white font-medium tracking-tight mb-2">3.2k</div>
<div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-emerald-500 h-full w-[85%]"></div>
</div>
</div>

<div className="p-6 rounded-lg bg-slate-800/30 border border-white/5">
<div className="flex items-center gap-2 text-slate-400 text-xs font-medium mb-2">
<iconify-icon icon="solar:link-circle-linear" width="16"></iconify-icon>
                            YENİ BACKLINK
                        </div>
<div className="text-3xl text-white font-medium tracking-tight mb-2">842</div>
<div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-violet-500 h-full w-[45%]"></div>
</div>
</div>
</div>

<div className="mt-8 flex items-end justify-between gap-2 h-48 px-2 opacity-80">
<div className="w-full bg-slate-800/40 rounded-t-sm h-[20%] hover:bg-indigo-500/40 transition-all duration-500"></div>
<div className="w-full bg-slate-800/40 rounded-t-sm h-[35%] hover:bg-indigo-500/40 transition-all duration-500"></div>
<div className="w-full bg-slate-800/40 rounded-t-sm h-[25%] hover:bg-indigo-500/40 transition-all duration-500"></div>
<div className="w-full bg-slate-800/40 rounded-t-sm h-[50%] hover:bg-indigo-500/40 transition-all duration-500"></div>
<div className="w-full bg-slate-800/40 rounded-t-sm h-[45%] hover:bg-indigo-500/40 transition-all duration-500"></div>
<div className="w-full bg-slate-800/40 rounded-t-sm h-[60%] hover:bg-indigo-500/40 transition-all duration-500"></div>
<div className="w-full bg-slate-800/40 rounded-t-sm h-[55%] hover:bg-indigo-500/40 transition-all duration-500"></div>
<div className="w-full bg-indigo-500 rounded-t-sm h-[85%] shadow-[0_0_20px_rgba(99,102,241,0.5)]"></div>
</div>
</div>
</div>
</main>

<section className="py-10 border-y border-white/5 bg-slate-900/30">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm text-slate-500 mb-8 font-medium">SEKTÖR LİDERİ 50+ MARKANIN GÜVENDİĞİ AJANS</p>
<div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">
<span className="text-xl font-bold tracking-tighter text-white">ACME</span>
<span className="text-xl font-bold tracking-tighter text-white">stripe</span>
<span className="text-xl font-bold tracking-tighter text-white">intercom</span>
<span className="text-xl font-bold tracking-tighter text-white">linear</span>
<span className="text-xl font-bold tracking-tighter text-white">vercel</span>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="services">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Bütüncül SEO Çözümleri</h2>
<p className="text-slate-400 text-lg max-w-xl">Web sitenizin ihtiyacı olan tüm teknik ve içerik optimizasyonlarını tek bir çatı altında sunuyoruz.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/50 border border-white/10 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] group-hover:bg-indigo-500/20 transition-all duration-700"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Teknik SEO &amp; Audit</h3>
<p className="text-slate-400 font-light leading-relaxed max-w-md">Google botlarının sitenizi anlamasını engelleyen tüm teknik sorunları tarar ve düzeltiriz. Core Web Vitals optimizasyonu, crawl budget yönetimi ve site mimarisi.</p>
</div>
</div>

<div className="md:row-span-2 p-8 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-white/20 transition-colors relative group">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
<iconify-icon icon="solar:graph-new-up-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">İçerik Stratejisi</h3>
<p className="text-slate-400 font-light leading-relaxed mb-8">Kullanıcı niyetine (Search Intent) odaklanan, semantik olarak zenginleştirilmiş içerik planlaması.</p>

<div className="space-y-3 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
<div className="h-2 w-full bg-slate-800 rounded-full"></div>
<div className="h-2 w-3/4 bg-slate-800 rounded-full"></div>
<div className="h-2 w-5/6 bg-slate-800 rounded-full"></div>
</div>
</div>

<div className="p-8 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-white/20 transition-colors">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
<iconify-icon icon="solar:link-round-angle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Otoriter Backlink</h3>
<p className="text-slate-400 text-sm font-light">Domain otoritenizi artıracak doğal bağlantı ağı.</p>
</div>

<div className="p-8 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-white/20 transition-colors">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
<iconify-icon icon="solar:smartphone-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Mobil Uyumluluk</h3>
<p className="text-slate-400 text-sm font-light">Mobil-öncelikli indeksleme için tam uyumluluk.</p>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/20 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
<div className="flex-1">
<div className="inline-block px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium mb-6">Şeffaf Raporlama</div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">
                    Karmaşık verileri <br/>anlamlı içgörülere dönüştürüyoruz.
                </h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0 mt-1">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Gerçek Zamanlı Takip</h4>
<p className="text-slate-400 text-sm font-light mt-1">Sıralama değişikliklerini anlık olarak panelinizden izleyin.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0 mt-1">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Rakip Analizi</h4>
<p className="text-slate-400 text-sm font-light mt-1">Rakiplerinizin stratejilerini deşifre edin ve önüne geçin.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0 mt-1">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">ROI Odaklı Yaklaşım</h4>
<p className="text-slate-400 text-sm font-light mt-1">Sadece trafiğe değil, dönüşüme odaklanan stratejiler.</p>
</div>
</div>
</div>
</div>
<div className="flex-1 w-full">
<div className="relative bg-slate-950 border border-white/10 rounded-xl p-6 md:p-10">
<div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-[64px]"></div>

<div className="space-y-4 relative z-10">
<div className="flex justify-between text-xs text-slate-500 border-b border-white/5 pb-2 uppercase tracking-wider font-semibold">
<span>Anahtar Kelime</span>
<span>Sıralama</span>
<span>Hacim</span>
</div>

<div className="flex justify-between items-center group">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-slate-200 text-sm font-medium">seo ajansı</span>
</div>
<div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                                #1 <iconify-icon icon="solar:arrow-up-linear" width="12"></iconify-icon>
</div>
<span className="text-slate-400 text-sm">12.5K</span>
</div>

<div className="flex justify-between items-center group">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-slate-200 text-sm font-medium">dijital pazarlama</span>
</div>
<div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                                #3 <iconify-icon icon="solar:arrow-up-linear" width="12"></iconify-icon>
</div>
<span className="text-slate-400 text-sm">8.2K</span>
</div>

<div className="flex justify-between items-center group">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-slate-600"></div>
<span className="text-slate-200 text-sm font-medium">web tasarım</span>
</div>
<div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                                #5 <span className="text-xs">-</span>
</div>
<span className="text-slate-400 text-sm">22.1K</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="audit">
<div className="max-w-xl mx-auto relative z-10">
<div className="text-center mb-10">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Siteniz ne kadar sağlıklı?</h2>
<p className="text-slate-400">Ücretsiz ön analiz raporu için bilgilerinizi bırakın. Ekibimiz 24 saat içinde size özel bir strateji ile dönüş yapsın.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="group">
<label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">Ad Soyad</label>
<input className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="group">
<label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">Web Sitesi</label>
<input className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="https://" type="url"/>
</div>
</div>
<div className="group">
<label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">E-posta</label>
<input className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="ornek@sirket.com" type="email"/>
</div>
<div className="py-2">
<label className="custom-checkbox flex items-center gap-3 cursor-pointer group">
<input className="peer hidden" type="checkbox"/>
<div className="w-5 h-5 rounded border border-white/20 bg-slate-900 flex items-center justify-center transition-all group-hover:border-indigo-500/50">
<svg className="hidden w-3 h-3 text-white pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-sm text-slate-400 select-none">Teknik analiz raporunu da istiyorum.</span>
</label>
</div>
<button className="w-full bg-white text-slate-950 font-medium py-3.5 rounded-lg hover:bg-indigo-50 transition-all flex items-center justify-center gap-2" type="button">
                    Analizi Gönder
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-white text-xs font-bold">N</div>
<span className="text-white font-medium tracking-tight">NexRank</span>
</div>
<p className="text-slate-500 text-sm font-light max-w-xs">
                        Veri odaklı dijital büyüme ortağınız. İstanbul merkezli global SEO ajansı.
                    </p>
</div>
<div className="flex gap-16 text-sm">
<div>
<h4 className="text-white font-medium mb-4">Şirket</h4>
<ul className="space-y-2 text-slate-500 font-light">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Hakkımızda</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Kariyer</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">İletişim</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Kaynaklar</h4>
<ul className="space-y-2 text-slate-500 font-light">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">SEO Rehberi</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Araçlar</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
<span className="text-xs text-slate-600 font-light">© 2024 NexRank Agency. Tüm hakları saklıdır.</span>
<div className="flex gap-4 text-slate-500">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
