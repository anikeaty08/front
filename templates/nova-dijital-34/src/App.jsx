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



// Simple View Router
function toggleView(viewId) {
// Hide all main containers
document.getElementById('home-view').classList.add('hidden');
document.getElementById('blog-post-view').classList.add('hidden');
// Show requested view
const target = document.getElementById(viewId);
target.classList.remove('hidden');
// Scroll to top
window.scrollTo(0, 0);
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white text-lg font-medium tracking-tighter flex items-center gap-2" href="javascript:toggleView('home-view')">
<iconify-icon icon="solar:infinity-linear" strokeWidth="1.5" width="20"></iconify-icon>
                NOVA
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors duration-200" href="javascript:toggleView('home-view')" onclick="setTimeout(() =&gt; document.getElementById('services').scrollIntoView(), 100)">Hizmetler</a>
<a className="hover:text-white transition-colors duration-200" href="javascript:toggleView('home-view')" onclick="setTimeout(() =&gt; document.getElementById('process').scrollIntoView(), 100)">Süreç</a>
<a className="text-white transition-colors duration-200" href="javascript:toggleView('home-view')" onclick="setTimeout(() =&gt; document.getElementById('blog').scrollIntoView(), 100)">Blog</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex text-sm text-white font-medium bg-white/10 hover:bg-white/15 px-4 py-2 rounded-full border border-white/10 transition-all" href="#contact">
                    İletişime Geç
                </a>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<div id="home-view">

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 hero-glow pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 mb-8">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    SEO ve Performans Odaklı Büyüme
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-8 leading-[1.1]">
                    Markanızı dijital <br/>
<span className="text-gradient">dünyada ölçekleyin.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed mb-10">
                    Veri odaklı stratejiler, kusursuz tasarım ve modern teknoloji ile markanızın potansiyelini açığa çıkarıyoruz. Minimalist yaklaşım, maksimalist sonuçlar.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="#services">
                        Hizmetleri Keşfet
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3 bg-zinc-900 text-white font-medium rounded-full border border-zinc-800 hover:bg-zinc-800 transition-colors" href="#contact">
                        Ücretsiz Analiz
                    </a>
</div>
</div>

<div className="mt-20 max-w-6xl mx-auto px-4 md:px-6">
<div className="glass-panel rounded-xl p-1 md:p-2">
<div className="aspect-[16/9] md:aspect-[21/9] bg-zinc-900/50 rounded-lg overflow-hidden border border-white/5 relative flex items-center justify-center">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30"></div>
<div className="text-center">
<iconify-icon className="text-zinc-600 mb-4 mx-auto" icon="solar:graph-new-up-linear" width="48"></iconify-icon>
<p className="text-sm text-zinc-600 font-mono">analytics_dashboard_preview.tsx</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Bütünleşik Çözümler</h2>
<p className="text-zinc-500 max-w-md">Markanızın ihtiyacı olan tüm dijital yetenekler tek bir çatı altında.</p>
</div>
<a className="text-sm text-white border-b border-white/30 hover:border-white pb-1 transition-colors" href="#">Tüm hizmetleri görüntüle</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group glass-panel p-8 rounded-2xl hover:bg-white/5 transition duration-300">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:magnifer-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-3">SEO Optimizasyonu</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-6">Arama motorlarında organik görünürlüğünüzü artırın. Teknik SEO ve içerik stratejisi.</p>
</div>
<div className="group glass-panel p-8 rounded-2xl hover:bg-white/5 transition duration-300">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-3">Performans Pazarlama</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-6">Google Ads ve sosyal medya reklamları ile ölçülebilir ROI odaklı kampanyalar.</p>
</div>
<div className="group glass-panel p-8 rounded-2xl hover:bg-white/5 transition duration-300">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:smartphone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-3">Sosyal Medya</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-6">Marka kimliğinizi yansıtan yaratıcı içerikler ve topluluk yönetimi.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-zinc-900/20" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Veriye dayalı,<br/>şeffaf süreç yönetimi.</h2>
<p className="text-zinc-400 mb-8 leading-relaxed">
                            Karmaşık pazarlama jargonlarından uzak, sonuç odaklı bir çalışma prensibi benimsiyoruz.
                        </p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white text-xs font-mono">01</div>
<div className="w-px h-full bg-white/10 my-2"></div>
</div>
<div className="pb-8">
<h4 className="text-white font-medium mb-2">Keşif ve Analiz</h4>
<p className="text-sm text-zinc-500">Mevcut durumunuzu analiz eder, eksikleri belirleriz.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-xs font-mono">02</div>
</div>
<div>
<h4 className="text-white font-medium mb-2">Strateji Geliştirme</h4>
<p className="text-sm text-zinc-500">Hedef kitlenize uygun, bütçe dostu yol haritası.</p>
</div>
</div>
</div>
</div>
<div className="glass-panel rounded-2xl p-6 md:p-10 relative overflow-hidden">
<div className="absolute top-0 right-0 p-32 bg-emerald-500/10 blur-[100px] rounded-full"></div>
<div className="relative z-10 space-y-4">
<div className="flex items-center justify-between text-sm border-b border-white/5 pb-4">
<span className="text-zinc-400">Toplam Erişim</span>
<span className="text-white font-mono">+124.5%</span>
</div>
<div className="flex items-center justify-between text-sm border-b border-white/5 pb-4">
<span className="text-zinc-400">Dönüşüm Oranı</span>
<span className="text-white font-mono">4.85%</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative" id="blog">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Nova İçgörüleri</h2>
<p className="text-zinc-500 max-w-md">Dijital pazarlama dünyasından son trendler ve rehberler.</p>
</div>
<div className="flex items-center gap-2">
<button className="px-4 py-2 rounded-full border border-white/10 text-xs font-medium text-white bg-white/5">Tümü</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="group blog-card-hover cursor-pointer flex flex-col h-full" onclick="toggleView('blog-post-view')">
<div className="w-full aspect-[16/10] bg-zinc-900 rounded-xl overflow-hidden mb-6 border border-white/5 relative">
<div className="absolute top-4 left-4 z-10">
<span className="px-2 py-1 bg-black/60 backdrop-blur-md text-[10px] uppercase tracking-wider font-semibold text-white rounded border border-white/10">SEO</span>
</div>
<div className="w-full h-full blog-img transition-transform duration-500 bg-zinc-800 flex items-center justify-center relative">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-zinc-800"></div>
<iconify-icon className="text-white/10 relative z-10" icon="solar:magnifer-linear" width="48"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-3 text-xs text-zinc-500 mb-3 font-mono">
<span className="flex items-center gap-1"><iconify-icon icon="solar:calendar-linear"></iconify-icon> 12 Mayıs 2024</span>
<span>•</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 5 dk okuma</span>
</div>
<h3 className="text-xl font-medium text-zinc-200 mb-3 blog-title transition-colors leading-tight">2024 SEO Trendleri: Yapay Zeka Çağında Öne Çıkmak</h3>
<p className="text-sm text-zinc-500 leading-relaxed line-clamp-2 mb-4">Google'ın son algoritma güncellemeleri ve AI destekli arama deneyimi (SGE) markalar için ne anlama geliyor?</p>
<div className="mt-auto pt-4 flex items-center gap-2 text-sm text-white font-medium group-hover:translate-x-1 transition-transform">
                            Okumaya Devam Et <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</article>

<article className="group blog-card-hover cursor-pointer flex flex-col h-full" onclick="toggleView('blog-post-view')">
<div className="w-full aspect-[16/10] bg-zinc-900 rounded-xl overflow-hidden mb-6 border border-white/5 relative">
<div className="absolute top-4 left-4 z-10">
<span className="px-2 py-1 bg-black/60 backdrop-blur-md text-[10px] uppercase tracking-wider font-semibold text-white rounded border border-white/10">Sosyal Medya</span>
</div>
<div className="w-full h-full blog-img transition-transform duration-500 bg-zinc-800 flex items-center justify-center relative">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-zinc-800"></div>
<iconify-icon className="text-white/10 relative z-10" icon="solar:smartphone-linear" width="48"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-3 text-xs text-zinc-500 mb-3 font-mono">
<span className="flex items-center gap-1"><iconify-icon icon="solar:calendar-linear"></iconify-icon> 08 Mayıs 2024</span>
<span>•</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 3 dk okuma</span>
</div>
<h3 className="text-xl font-medium text-zinc-200 mb-3 blog-title transition-colors leading-tight">Kısa Video İçerik Stratejisi Nasıl Oluşturulur?</h3>
<p className="text-sm text-zinc-500 leading-relaxed line-clamp-2 mb-4">Reels ve TikTok için etkileşim odaklı içerik üretmenin altın kuralları.</p>
<div className="mt-auto pt-4 flex items-center gap-2 text-sm text-white font-medium group-hover:translate-x-1 transition-transform">
                            Okumaya Devam Et <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</article>

<article className="group blog-card-hover cursor-pointer flex flex-col h-full" onclick="toggleView('blog-post-view')">
<div className="w-full aspect-[16/10] bg-zinc-900 rounded-xl overflow-hidden mb-6 border border-white/5 relative">
<div className="absolute top-4 left-4 z-10">
<span className="px-2 py-1 bg-black/60 backdrop-blur-md text-[10px] uppercase tracking-wider font-semibold text-white rounded border border-white/10">Growth</span>
</div>
<div className="w-full h-full blog-img transition-transform duration-500 bg-zinc-800 flex items-center justify-center relative">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-zinc-800"></div>
<iconify-icon className="text-white/10 relative z-10" icon="solar:chart-square-linear" width="48"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-3 text-xs text-zinc-500 mb-3 font-mono">
<span className="flex items-center gap-1"><iconify-icon icon="solar:calendar-linear"></iconify-icon> 01 Mayıs 2024</span>
<span>•</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 7 dk okuma</span>
</div>
<h3 className="text-xl font-medium text-zinc-200 mb-3 blog-title transition-colors leading-tight">SaaS Şirketleri İçin B2B Pazarlama Rehberi</h3>
<p className="text-sm text-zinc-500 leading-relaxed line-clamp-2 mb-4">Kurumsal müşterilere ulaşmak için LinkedIn ve e-posta pazarlamasını entegre etme.</p>
<div className="mt-auto pt-4 flex items-center gap-2 text-sm text-white font-medium group-hover:translate-x-1 transition-transform">
                            Okumaya Devam Et <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 px-6" id="contact">
<div className="max-w-5xl mx-auto rounded-3xl relative overflow-hidden border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-12 md:p-24 text-center">
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter mb-6">Projenizi Başlatalım</h2>
<p className="text-zinc-400 max-w-xl mx-auto mb-10 text-lg">
                        Markanızın potansiyelini keşfetmeye hazır mısınız? Ücretsiz ön analiz için bize ulaşın.
                    </p>
<button className="w-full sm:w-auto bg-white text-black font-medium rounded-full px-8 py-4 hover:bg-zinc-200 transition-colors inline-flex items-center gap-2" type="button">
                        Hemen Analiz Talep Et
                        <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-zinc-800/20 via-transparent to-transparent pointer-events-none"></div>
</div>
</section>
</div>

<div className="hidden" id="blog-post-view">
<main className="pt-32 pb-24">

<div className="max-w-3xl mx-auto px-6 mb-12">
<div className="flex items-center gap-2 text-xs text-zinc-500 mb-8 font-medium">
<a className="hover:text-white transition-colors" href="javascript:toggleView('home-view')">Ana Sayfa</a>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<a className="hover:text-white transition-colors" href="#">Blog</a>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-emerald-500">SEO</span>
</div>
<h1 className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-tight mb-6">
                    2024 SEO Trendleri: Yapay Zeka Çağında Öne Çıkmak
                </h1>
<div className="flex items-center gap-6 text-sm text-zinc-400 border-b border-white/5 pb-8">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white font-semibold text-xs border border-white/10">
                            EK
                        </div>
<span>Emre Kaya</span>
</div>
<div className="w-px h-4 bg-white/10"></div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
<span>12 Mayıs 2024</span>
</div>
<div className="w-px h-4 bg-white/10"></div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
<span>5 dk okuma</span>
</div>
</div>
</div>

<div className="max-w-5xl mx-auto px-6 mb-16">
<div className="aspect-[21/9] w-full bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 relative">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent"></div>
<div className="w-full h-full flex items-center justify-center">

<div className="relative w-full h-full bg-zinc-900">
<div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTIwIDIwaDIwdjIwSDIwVjIwek0wIDIwaDIwdjIwSDBWMjB6IiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-white/20" icon="solar:magnifer-linear" width="80"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="hidden lg:block lg:col-span-2">
<div className="sticky top-32 flex flex-col gap-4 items-center">
<span className="text-xs font-medium text-zinc-500 mb-2 uppercase tracking-wider">Paylaş</span>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
<iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
<iconify-icon icon="solar:link-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="lg:col-span-8 prose">
<p className="text-lg text-zinc-300 font-light leading-relaxed mb-8">
                        Dijital pazarlama dünyası her zaman hareketli olmuştur, ancak 2024 yılı, yapay zekanın (AI) arama motorlarına entegrasyonu ile birlikte köklü bir değişimin başlangıcı olarak tarihe geçiyor. Geleneksel SEO taktikleri artık tek başına yeterli değil.
                    </p>
<h2>1. SGE (Search Generative Experience) ve Etkileri</h2>
<p>
                        Google'ın SGE'si, kullanıcıların sorgularına doğrudan arama sonuçları sayfasında (SERP) yapay zeka tarafından oluşturulmuş yanıtlar sunuyor. Bu durum, "sıfır tıklama" (zero-click) aramalarının artacağı anlamına geliyor. İçerik üreticileri için bu, sadece anahtar kelimelere odaklanmak yerine, AI'nın referans alabileceği derinlikte ve otoritede içerikler üretmeyi zorunlu kılıyor.
                    </p>
<blockquote>
                        "SEO artık sadece Google botları için değil, markanızın dijital ekosistemdeki otoritesini kanıtlamak için yapılan bir itibar yönetimidir."
                    </blockquote>
<h2>2. E-E-A-T Kavramının Önemi Artıyor</h2>
<p>
                        Deneyim (Experience), Uzmanlık (Expertise), Yetkinlik (Authoritativeness) ve Güvenilirlik (Trustworthiness). Google, AI tarafından üretilen spam içeriklerin artışıyla mücadele etmek için, insan deneyimine dayalı içerikleri ödüllendiriyor.
                    </p>
<ul>
<li><strong>Yazar Otoritesi:</strong> İçeriği kimin yazdığı artık daha önemli. Biyografiler ve LinkedIn profilleri SEO sinyali taşıyor.</li>
<li><strong>Kişisel Deneyim:</strong> "En iyi CRM yazılımları" yerine "CRM yazılımlarını denerken yaşadığım 5 sorun" gibi deneyim odaklı başlıklar öne çıkacak.</li>
</ul>
<h2>3. Teknik SEO ve Core Web Vitals</h2>
<p>
                        Kullanıcı deneyimi (UX) hala kral. Sayfa hızı, mobil uyumluluk ve görsel kararlılık (CLS), sıralama faktörleri arasındaki yerini koruyor. Özellikle JavaScript ağırlıklı modern web sitelerinde (Next.js, React vb.) sunucu taraflı işleme (SSR) hayati önem taşıyor.
                    </p>
<div className="bg-zinc-900 border border-white/10 rounded-xl p-6 my-8">
<h4 className="text-white font-medium mb-2 flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:info-circle-linear"></iconify-icon>
                            Uzman İpucu
                        </h4>
<p className="text-sm text-zinc-400 !mb-0">
                            İçeriklerinizi güncellerken sadece metne odaklanmayın. Video, infografik ve sesli içeriklerle (podcast) zenginleştirilmiş sayfalar, bekleme süresini (dwell time) artırarak SEO performansını doğrudan etkiler.
                        </p>
</div>
<h2>Sonuç</h2>
<p>
                        2024'te SEO, teknik bir kontrol listesinden çok bütünleşik bir marka stratejisine dönüşüyor. Algoritmaları kovalamak yerine, kullanıcılarınıza gerçek değer sunan, deneyime dayalı ve teknik olarak kusursuz bir dijital varlık inşa etmeye odaklanın.
                    </p>
</div>
</div>

<div className="max-w-5xl mx-auto px-6 mt-24 pt-12 border-t border-white/5">
<h3 className="text-2xl text-white font-medium mb-8">Sıradaki Yazılar</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<a className="group block glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors" href="#">
<span className="text-xs text-zinc-500 font-mono mb-2 block">Sosyal Medya</span>
<h4 className="text-lg text-white font-medium group-hover:text-emerald-400 transition-colors">Kısa Video İçerik Stratejisi Nasıl Oluşturulur?</h4>
</a>
<a className="group block glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors" href="#">
<span className="text-xs text-zinc-500 font-mono mb-2 block">Growth</span>
<h4 className="text-lg text-white font-medium group-hover:text-emerald-400 transition-colors">SaaS Şirketleri İçin B2B Pazarlama Rehberi</h4>
</a>
</div>
</div>

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 lg:hidden">
<button className="bg-white text-black font-medium px-6 py-3 rounded-full shadow-lg flex items-center gap-2 text-sm" onclick="toggleView('home-view')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
                     Ana Sayfaya Dön
                 </button>
</div>
</main>
</div>

<footer className="border-t border-white/5 bg-zinc-950 pt-20 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
<div className="col-span-2 lg:col-span-2">
<a className="text-white text-lg font-medium tracking-tighter flex items-center gap-2 mb-6" href="#">
<iconify-icon icon="solar:infinity-linear" width="20"></iconify-icon>
                        NOVA
                    </a>
<p className="text-sm text-zinc-500 max-w-xs mb-6">
                        İstanbul merkezli, global vizyona sahip yeni nesil dijital performans ajansı.
                    </p>
</div>

<div>
<h4 className="text-white font-medium mb-4 text-sm">Hizmetler</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-300 transition" href="#">SEO</a></li>
<li><a className="hover:text-zinc-300 transition" href="#">Sosyal Medya</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Şirket</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-300 transition" href="#">Hakkımızda</a></li>
<li><a className="hover:text-zinc-300 transition" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Yasal</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-300 transition" href="#">Gizlilik</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
<p className="text-xs text-zinc-600">© 2024 Nova Digital Agency.</p>
<div className="flex items-center gap-2 text-xs text-zinc-600">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Sistemler Operasyonel
                </div>
</div>
</div>
</footer>

    </>
  );
}
