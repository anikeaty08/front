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
      

<a className="fixed bottom-6 left-6 z-50 group" href="https://wa.me/905382000802" target="_blank">
<div className="w-14 h-14 rounded-full glass-btn flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#25D366] group-hover:border-[#25D366] group-hover:scale-110 shadow-lg shadow-black/50">
<iconify-icon height="26" icon="solar:chat-round-line-linear" strokeWidth="1.5" width="26"></iconify-icon>
</div>
<span className="absolute left-16 top-1/2 -translate-y-1/2 bg-zinc-900 border border-white/10 px-3 py-1 rounded-lg text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">WhatsApp</span>
</a>
<a className="fixed bottom-6 right-6 z-50 group" href="tel:+905382000802">
<div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] shadow-lg shadow-black/50">
<iconify-icon height="26" icon="solar:phone-calling-linear" strokeWidth="1.5" width="26"></iconify-icon>
</div>
<span className="absolute right-16 top-1/2 -translate-y-1/2 bg-zinc-900 border border-white/10 px-3 py-1 rounded-lg text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Hemen Ara</span>
</a>

<nav className="fixed top-0 left-0 w-full z-40 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-medium tracking-tighter text-white flex items-center gap-2" href="#">
<div className="w-5 h-5 bg-white rounded-md flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
                AURA DIGITAL
            </a>
<div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#services">Hizmetler</a>
<a className="hover:text-white transition-colors" href="#approach">Yaklaşım</a>
<a className="hover:text-white transition-colors" href="#results">Başarı Hikayeleri</a>
<a className="hover:text-white transition-colors" href="#faq">SSS</a>
</div>
<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors hidden sm:block" href="https://wa.me/905382000802">
                Teklif Al
            </a>
</div>
</nav>
<main className="pt-32 pr-6 pb-20 pl-6">

<section className="text-center max-w-5xl mx-auto mb-32 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 bg-white/5 border border-white/10 rounded-full mb-8 py-1.5 px-4 hover:bg-white/10 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                2024 Dijital Büyüme Programı
            </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tighter mb-6">
                Performans odaklı<br/>
<span className="gradient-text">dijital büyüme partneriniz.</span>
</h1>
<p className="text-lg font-light text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Veri analitiği, yaratıcı tasarım ve ileri teknoloji reklam stratejilerini birleştirerek markanız için ölçülebilir sonuçlar ve yüksek yatırım getirisi (ROI) sağlıyoruz.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group text-sm font-medium text-black bg-white rounded-full py-3.5 px-8" href="https://wa.me/905382000802">
                    Ücretsiz Analiz Başlat
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 border border-white/10 bg-white/5 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-colors" href="#services">
                    Hizmetleri Keşfet
                </a>
</div>
</section>

<section className="max-w-6xl mx-auto mb-32 border-y border-white/5 py-12 bg-white/[0.01]">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
<div className="px-4">
<h3 className="md:text-4xl text-3xl font-medium text-white tracking-tight mb-1">₺50M+</h3>
<p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Yönetilen Yıllık Ciro</p>
</div>
<div className="px-4">
<h3 className="md:text-4xl text-3xl font-medium text-white tracking-tight mb-1">%300+</h3>
<p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Ortalama ROAS Artışı</p>
</div>
<div className="px-4">
<h3 className="md:text-4xl text-3xl font-medium text-white tracking-tight mb-1">12+</h3>
<p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Sektör Deneyimi</p>
</div>
<div className="px-4">
<h3 className="md:text-4xl text-3xl font-medium text-white tracking-tight mb-1">45+</h3>
<p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Global Marka</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto mb-32" id="services">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Uçtan Uca Dijital Hizmetler</h2>
<p className="text-zinc-400 max-w-xl mx-auto">Markanızın ihtiyacı olan tüm dijital disiplinleri tek bir çatı altında, entegre bir şekilde yönetiyoruz.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-3xl col-span-1 md:col-span-2 relative overflow-hidden group">
<div className="relative z-10">
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
<iconify-icon height="24" icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium">En Çok Tercih Edilen</span>
</div>
<h3 className="text-2xl font-medium text-white mb-4">Performans Pazarlama (Ads)</h3>
<p className="text-zinc-400 leading-relaxed mb-8 max-w-lg">
                            Reklam bütçenizi en verimli şekilde kullanarak maksimum dönüşüm elde etmenizi sağlıyoruz. Yapay zeka destekli optimizasyon araçlarımızla maliyetleri düşürüyor, ciroyu artırıyoruz.
                        </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Google Ads (Search, Shopping, Display)
                                </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Meta Ads (Facebook &amp; Instagram)
                                </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    TikTok &amp; LinkedIn Reklamları
                                </li>
</ul>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Remarketing &amp; Retargeting Kurguları
                                </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Merchant Center Optimizasyonu
                                </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Data Studio Raporlama
                                </li>
</ul>
</div>
</div>
<div className="absolute right-0 top-0 w-96 h-96 bg-blue-600/5 blur-[100px] pointer-events-none"></div>
</div>

<div className="glass-panel p-8 rounded-3xl flex flex-col relative overflow-hidden group">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
<iconify-icon height="24" icon="solar:camera-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Sosyal Medya &amp; Kreatif</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                        Markanızın sesini oluşturuyor, etkileşim odaklı içeriklerle topluluk yönetimi yapıyoruz.
                    </p>
<div className="mt-auto space-y-3 border-t border-white/5 pt-6">
<div className="flex items-center gap-2 text-xs text-zinc-300">
<iconify-icon className="text-purple-400" icon="solar:videocamera-record-linear"></iconify-icon>
                            Reels &amp; TikTok Prodüksiyonu
                        </div>
<div className="flex items-center gap-2 text-xs text-zinc-300">
<iconify-icon className="text-purple-400" icon="solar:users-group-rounded-linear"></iconify-icon>
                            Topluluk Yönetimi
                        </div>
<div className="flex items-center gap-2 text-xs text-zinc-300">
<iconify-icon className="text-purple-400" icon="solar:star-linear"></iconify-icon>
                            Influencer Marketing
                        </div>
</div>
</div>

<div className="glass-panel p-8 rounded-3xl flex flex-col relative overflow-hidden group">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
<iconify-icon height="24" icon="solar:laptop-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Web &amp; E-Ticaret</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                        Hızlı, SEO uyumlu ve satışa dönüştüren modern web arayüzleri geliştiriyoruz.
                    </p>
<div className="mt-auto space-y-3 border-t border-white/5 pt-6">
<div className="flex items-center gap-2 text-xs text-zinc-300">
<iconify-icon className="text-emerald-400" icon="solar:cart-large-linear"></iconify-icon>
                            Shopify / WooCommerce / İkas
                        </div>
<div className="flex items-center gap-2 text-xs text-zinc-300">
<iconify-icon className="text-emerald-400" icon="solar:code-linear"></iconify-icon>
                            Özel Yazılım &amp; UI/UX
                        </div>
<div className="flex items-center gap-2 text-xs text-zinc-300">
<iconify-icon className="text-emerald-400" icon="solar:server-linear"></iconify-icon>
                            Hız &amp; Dönüşüm Optimizasyonu
                        </div>
</div>
</div>

<div className="glass-panel p-8 rounded-3xl col-span-1 md:col-span-2 relative overflow-hidden group">
<div className="relative z-10 flex flex-col md:flex-row gap-8">
<div className="flex-1">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6">
<iconify-icon height="24" icon="solar:magnifer-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-4">SEO &amp; İçerik Pazarlaması</h3>
<p className="text-zinc-400 leading-relaxed">
                                Google aramalarında organik olarak üst sıralarda yer alın. Teknik SEO, içerik stratejisi ve otorite çalışmalarıyla kalıcı trafik sağlıyoruz.
                            </p>
</div>
<div className="flex-1 bg-white/5 rounded-2xl p-6 border border-white/5">
<h4 className="text-white text-sm font-medium mb-4">Kapsam:</h4>
<div className="grid grid-cols-2 gap-y-4 gap-x-2">
<div className="flex items-center gap-2 text-xs text-zinc-400">
<span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                                    Teknik SEO Analizi
                                </div>
<div className="flex items-center gap-2 text-xs text-zinc-400">
<span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                                    Blog Yönetimi
                                </div>
<div className="flex items-center gap-2 text-xs text-zinc-400">
<span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                                    Backlink İnşası
                                </div>
<div className="flex items-center gap-2 text-xs text-zinc-400">
<span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                                    Yerel SEO (Haritalar)
                                </div>
<div className="flex items-center gap-2 text-xs text-zinc-400">
<span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                                    Anahtar Kelime Planı
                                </div>
<div className="flex items-center gap-2 text-xs text-zinc-400">
<span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                                    Rakip Analizi
                                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto mb-32" id="approach">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-16 text-center">Nasıl Çalışıyoruz?</h2>
<div className="relative">
<div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>

<div className="flex flex-col md:flex-row items-center justify-between mb-16 relative">
<div className="md:w-1/2 md:pr-12 md:text-right pl-20 md:pl-0 mb-6 md:mb-0">
<h3 className="text-xl font-medium text-white mb-2">1. Analiz &amp; Strateji</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Sektör, rakip ve hedef kitle analizi yaparak markanızın mevcut durumunu röntgenliyor, büyüme haritasını çıkarıyoruz.</p>
</div>
<div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-zinc-900 border-4 border-black ring-1 ring-white/20 flex items-center justify-center text-white text-xs z-10">01</div>
<div className="md:w-1/2 md:pl-12 pl-20">
<div className="flex gap-2">
<span className="text-[10px] uppercase tracking-wide border border-white/10 px-2 py-1 rounded text-zinc-500">SWOT</span>
<span className="text-[10px] uppercase tracking-wide border border-white/10 px-2 py-1 rounded text-zinc-500">Persona</span>
<span className="text-[10px] uppercase tracking-wide border border-white/10 px-2 py-1 rounded text-zinc-500">KPI</span>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center justify-between mb-16 relative">
<div className="md:w-1/2 md:pl-12 md:text-left pl-20 md:pl-0 mb-6 md:mb-0">
<h3 className="text-xl font-medium text-white mb-2">2. Kurulum &amp; Entegrasyon</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Reklam hesapları, piksel kodları, analitik araçları ve web sitesi altyapısını kusursuz veri akışı için hazırlıyoruz.</p>
</div>
<div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-zinc-900 border-4 border-black ring-1 ring-white/20 flex items-center justify-center text-white text-xs z-10">02</div>
<div className="md:w-1/2 md:pr-12 pl-20 text-right">
<div className="flex gap-2 justify-end md:justify-end justify-start">
<span className="text-[10px] uppercase tracking-wide border border-white/10 px-2 py-1 rounded text-zinc-500">GTM</span>
<span className="text-[10px] uppercase tracking-wide border border-white/10 px-2 py-1 rounded text-zinc-500">Pixel</span>
<span className="text-[10px] uppercase tracking-wide border border-white/10 px-2 py-1 rounded text-zinc-500">Feed</span>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between mb-16 relative">
<div className="md:w-1/2 md:pr-12 md:text-right pl-20 md:pl-0 mb-6 md:mb-0">
<h3 className="text-xl font-medium text-white mb-2">3. Yönetim &amp; Optimizasyon</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Kampanyaları canlıya alıyor, A/B testleri ile sürekli iyileştiriyor ve maliyetleri düşürerek performansı artırıyoruz.</p>
</div>
<div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-zinc-900 border-4 border-black ring-1 ring-white/20 flex items-center justify-center text-white text-xs z-10">03</div>
<div className="md:w-1/2 md:pl-12 pl-20">
<div className="flex gap-2">
<span className="text-[10px] uppercase tracking-wide border border-white/10 px-2 py-1 rounded text-zinc-500">A/B Test</span>
<span className="text-[10px] uppercase tracking-wide border border-white/10 px-2 py-1 rounded text-zinc-500">Scale</span>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center justify-between relative">
<div className="md:w-1/2 md:pl-12 md:text-left pl-20 md:pl-0 mb-6 md:mb-0">
<h3 className="text-xl font-medium text-white mb-2">4. Raporlama</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Şeffaf ve anlaşılır raporlarla paranızın nereye gittiğini ve ne kadar getiri sağladığını net bir şekilde sunuyoruz.</p>
</div>
<div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-zinc-900 border-4 border-black ring-1 ring-white/20 flex items-center justify-center text-white text-xs z-10">04</div>
<div className="md:w-1/2 md:pr-12 pl-20 text-right">
<div className="flex gap-2 justify-end md:justify-end justify-start">
<span className="text-[10px] uppercase tracking-wide border border-white/10 px-2 py-1 rounded text-zinc-500">Weekly</span>
<span className="text-[10px] uppercase tracking-wide border border-white/10 px-2 py-1 rounded text-zinc-500">Monthly</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto mb-32" id="faq">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-12 text-center">Sıkça Sorulan Sorular</h2>
<div className="space-y-4">
<details className="group glass-panel rounded-2xl">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium select-none">
                        Reklam bütçemi nasıl belirlemeliyim?
                        <iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                        Bütçe, hedeflerinize (satış, form, bilinirlik) ve sektördeki rekabet durumuna göre belirlenir. Başlangıçta minimum test bütçeleriyle veriyi toplar, kârlılığı gördükçe bütçeyi kademeli olarak artırırız (Scale etme).
                    </div>
</details>
<details className="group glass-panel rounded-2xl">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium select-none">
                        Hangi platformlarda reklam vermelisiniz?
                        <iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                        Bu tamamen hedef kitlenizin nerede olduğuyla ilgilidir. B2B işler için LinkedIn ve Google Search idealken, B2C e-ticaret markaları için Instagram, TikTok ve Google Shopping daha etkilidir. Analiz sonrası size özel medya planı sunuyoruz.
                    </div>
</details>
<details className="group glass-panel rounded-2xl">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium select-none">
                        SEO çalışmaları ne zaman sonuç verir?
                        <iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                        SEO uzun vadeli bir yatırımdır. Sektörel rekabete bağlı olarak ilk gözle görülür artışlar genellikle 3-6 ay arasında başlar, kalıcı otorite ve yüksek trafik ise 6-12 ay içinde oturur.
                    </div>
</details>
<details className="group glass-panel rounded-2xl">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium select-none">
                        Raporlama sıklığı nedir?
                        <iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                        Haftalık bazda yazılı durum değerlendirmesi, aylık bazda ise detaylı sunum toplantıları yapıyoruz. Ayrıca size özel oluşturduğumuz "Canlı Veri Paneli" (Looker Studio) üzerinden 7/24 reklam performansınızı anlık takip edebilirsiniz.
                    </div>
</details>
</div>
</section>

<section className="max-w-4xl mx-auto mb-32">
<div className="glass-panel rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden border border-white/10 group">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_70%)] pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-6">
                        Markanızı bir üst lige taşıyın.
                    </h2>
<p className="text-zinc-400 mb-10 max-w-lg mx-auto">
                        Potansiyelinizi gerçekleştirmek için beklemeyin. Ücretsiz ön analiz ve strateji görüşmesi için bize ulaşın.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-black text-sm font-medium rounded-full hover:scale-105 transition-all duration-300" href="tel:+905382000802">
<iconify-icon height="20" icon="solar:phone-calling-linear" width="20"></iconify-icon>
                            +90 538 200 08 02
                        </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-all duration-300" href="https://wa.me/905382000802">
<iconify-icon height="20" icon="solar:chat-round-line-linear" width="20"></iconify-icon>
                            WhatsApp'tan Yaz
                        </a>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto">
<div className="glass-panel p-2 rounded-[2.5rem] overflow-hidden relative">
<iframe allowfullscreen="" className="w-full h-[400px] md:h-[500px] rounded-[2rem] block map-filter" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.3149047306665!2d29.121873200000007!3d40.9526798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac68bd591c5bd%3A0xebe3a645da2c27c6!2sHilltown!5e0!3m2!1str!2str!4v1769285579093!5m2!1str!2str" style={{border: '0'}} width="100%"></iframe>
<div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl max-w-xs z-10 hidden md:block shadow-2xl">
<h4 className="text-white font-medium mb-1 flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:map-point-linear"></iconify-icon>
                        Ofis
                    </h4>
<p className="text-zinc-400 text-xs mb-3 pl-6">Hilltown, İstanbul</p>
<a className="text-xs font-medium text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors inline-block w-full text-center" href="https://maps.app.goo.gl/LvdA37DyUzKQj8k76" target="_blank">
                        Yol Tarifi Al
                    </a>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/5 py-12 mt-20 bg-black/50">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2 text-zinc-500 text-sm">
<span className="text-white font-medium tracking-tight">AURA DIGITAL</span>
<span className="">© 2024</span>
</div>
<p className="text-xs text-zinc-600 max-w-xs">Veri odaklı performans ve dijital pazarlama ajansı.</p>
</div>
<div className="flex flex-wrap gap-6 text-sm text-zinc-500">
<a className="hover:text-white transition-colors" href="/fikriorjinal/">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Hizmet Şartları</a>
<a className="hover:text-white transition-colors" href="#">Gizlilik</a>
</div>
</div>
</footer>

    </>
  );
}
