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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
mono: ['"JetBrains Mono"', 'monospace'],
},
colors: {
bg: {
main: '#0a0a0f',
secondary: '#0d0d14',
card: 'rgba(15, 15, 22, 0.6)'
},
primary: {
DEFAULT: '#3b82f6',
hover: '#2563eb',
glow: 'rgba(59, 130, 246, 0.5)'
}
},
backgroundImage: {
'cosmic-gradient': 'radial-gradient(ellipse at 50% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 60%)',
'card-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
'glow-conic': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



        // Initialize Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Simple scroll reveal
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        entry.target.classList.remove('opacity-0', 'translate-y-10');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('section > div').forEach(el => {
                el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
                observer.observe(el);
            });
        });
    
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
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-cosmic-gradient opacity-80"></div>
<div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px]"></div>
<div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px]"></div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-bg-main/80 backdrop-blur-lg">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<span className="font-sans font-semibold text-lg tracking-tight">MedyaGem</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
<a className="hover:text-white transition-colors" href="#services">Hizmetler</a>
<a className="hover:text-white transition-colors" href="#click_fraud_protection">Koruma</a>
<a className="hover:text-white transition-colors" href="#pricing">Paketler</a>
<a className="hover:text-white transition-colors" href="#faq">SSS</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-white/70 hover:text-white" href="#">Giriş</a>
<a className="text-sm font-semibold bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors" href="#cta_banner">
                    Teklif Al
                </a>
</div>
</div>
</nav>
<main className="relative z-10 pt-32 pb-20">

<section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32" id="hero">
<div className="flex flex-col gap-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 w-fit">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-xs font-medium text-blue-400">Yeni: ClickCease Entegrasyonu</span>
</div>
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
                    Google Ads ile <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Müşteri Kazanın</span>
</h1>
<p className="text-lg text-white/60 leading-relaxed max-w-lg">
                    MedyaGem, işletmenizin dijital dünyada öne çıkmasını sağlar. Web sitesi kurulumu, Google Ads yönetimi ve sahte tıklama engelleme ile reklam bütçenizi koruyoruz.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mt-2">
<button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2">
                        Ücretsiz Analiz Al <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="layout-grid"></i> Hizmetlerimiz
                    </button>
</div>
<div className="mt-8 pt-8 border-t border-white/5">
<p className="text-xs text-white/40 mb-4 font-mono">GÜVENİLEN İŞLETMELER</p>
<div className="flex gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-1"><i className="w-5 h-5" data-lucide="hexagon"></i><span className="font-semibold text-sm">TechFlow</span></div>
<div className="flex items-center gap-1"><i className="w-5 h-5" data-lucide="triangle"></i><span className="font-semibold text-sm">Delta Yapı</span></div>
<div className="flex items-center gap-1"><i className="w-5 h-5" data-lucide="circle"></i><span className="font-semibold text-sm">Orbital</span></div>
<div className="flex items-center gap-1"><i className="w-5 h-5" data-lucide="square"></i><span className="font-semibold text-sm">Kare İnşaat</span></div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-20"></div>
<div className="relative rounded-xl bg-[#0d1117] border border-white/10 code-window overflow-hidden">

<div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-white/5">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
<div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
<div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
</div>
<div className="text-xs text-white/40 font-mono">dashboard.tsx</div>
<div className="w-12"></div>
</div>

<div className="p-6 font-mono text-xs sm:text-sm leading-6 overflow-hidden">
<div className="flex">
<div className="text-white/20 select-none pr-4 text-right border-r border-white/5 mr-4">
                                1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12<br/>13
                            </div>
<div className="text-white/80">
<span className="token-keyword">import</span> { <span className="text-white">GoogleAds</span> } <span className="token-keyword">from</span> <span className="token-string">'@medyagem/sdk'</span>;<br/><br/>
<span className="token-keyword">export const</span> <span className="token-function">OptimizationStrategy</span> = <span className="token-keyword">async</span> () =&gt; {<br/>
                                  <span className="token-keyword">const</span> <span className="text-white">campaign</span> = <span className="token-keyword">await</span> <span className="text-white">GoogleAds</span>.<span className="token-function">getCampaign</span>({<br/>
                                    id: <span className="token-string">'CM_849201'</span>,<br/>
                                    target: <span className="token-string">'Yerel Hizmetler'</span><br/>
                                  });<br/><br/>
                                  <span className="token-comment">// Sahte tıklamaları engelle</span><br/>
                                  <span className="token-keyword">if</span> (<span className="text-white">campaign</span>.fraudRisk &gt; <span className="token-number">0.8</span>) {<br/>
                                    <span className="token-keyword">return</span> <span className="text-white">Protection</span>.<span className="token-function">blockIP</span>(<span className="text-white">visitor</span>.ip);<br/>
                                  }<br/><br/>
                                  <span className="token-keyword">return</span> <span className="text-white">campaign</span>.<span className="token-function">maximizeConversions</span>();<br/>
                                }
                            </div>
</div>
</div>

<div className="absolute bottom-6 right-6 w-48 bg-[#0d1117]/90 backdrop-blur border border-white/10 rounded-lg p-3 shadow-2xl">
<div className="text-[10px] text-white/50 mb-2 uppercase tracking-wider">Aylık Dönüşüm</div>
<div className="flex items-end justify-between h-12 gap-1">
<div className="w-full bg-blue-500/20 rounded-sm h-[30%]"></div>
<div className="w-full bg-blue-500/30 rounded-sm h-[50%]"></div>
<div className="w-full bg-blue-500/40 rounded-sm h-[40%]"></div>
<div className="w-full bg-blue-500/60 rounded-sm h-[70%]"></div>
<div className="w-full bg-blue-500 rounded-sm h-[85%] relative">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] text-blue-400 font-bold">+124%</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5" id="services">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="md:col-span-1">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Dijital Pazarlama<br/>Ortağınız</h2>
<p className="text-white/60 text-sm leading-relaxed mb-8">
                        İşletmenizi büyütmek için ihtiyacınız olan tüm araçlar tek bir çatı altında. Veri odaklı stratejiler ile sonuç üretiyoruz.
                    </p>
<a className="text-sm font-medium text-blue-400 hover:text-blue-300 inline-flex items-center gap-1" href="#contact">
                        Tüm hizmetleri gör <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">

<div className="flex flex-col gap-3 group">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-2 group-hover:bg-blue-500/20 transition-colors">
<i className="w-5 h-5" data-lucide="globe"></i>
</div>
<h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">Web Sitesi Kurulumu</h3>
<p className="text-sm text-white/50 leading-relaxed">SEO uyumlu, mobil öncelikli profesyonel web siteleri ile dijital vitrininizi oluşturun.</p>
</div>

<div className="flex flex-col gap-3 group">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-2 group-hover:bg-purple-500/20 transition-colors">
<i className="w-5 h-5" data-lucide="target"></i>
</div>
<h3 className="text-lg font-medium text-white group-hover:text-purple-400 transition-colors">Google Ads Yönetimi</h3>
<p className="text-sm text-white/50 leading-relaxed">ROI odaklı reklam kampanyaları ve sürekli optimizasyon ile maliyetleri düşürün.</p>
</div>

<div className="flex flex-col gap-3 group">
<div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 mb-2 group-hover:bg-green-500/20 transition-colors">
<i className="w-5 h-5" data-lucide="shield"></i>
</div>
<h3 className="text-lg font-medium text-white group-hover:text-green-400 transition-colors">Sahte Tıklama Engelleme</h3>
<p className="text-sm text-white/50 leading-relaxed">ClickCease entegrasyonu ile bot trafiğini engelleyerek bütçenizi koruyun.</p>
</div>

<div className="flex flex-col gap-3 group">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-2 group-hover:bg-orange-500/20 transition-colors">
<i className="w-5 h-5" data-lucide="search"></i>
</div>
<h3 className="text-lg font-medium text-white group-hover:text-orange-400 transition-colors">SEO Optimizasyonu</h3>
<p className="text-sm text-white/50 leading-relaxed">Yerel aramalarda üst sıralarda yer alarak organik müşteri trafiğinizi artırın.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="click_fraud_protection">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Sahte Tıklamalardan Korunun</h2>
<p className="text-white/60">
                        Reklam bütçenizin %20'sine kadarı sahte tıklamalarla boşa gidebilir. MedyaGem'in gelişmiş koruma sistemi ile paranızı koruyun.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card rounded-xl p-8 hover:bg-white/[0.08] transition-all group">
<div className="h-48 mb-6 rounded-lg bg-black/40 border border-white/5 overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-full max-w-[200px] font-mono text-xs">
<div className="flex justify-between text-red-400 mb-1">
<span>Tespit Edildi</span>
<span>Bot_v2.1</span>
</div>
<div className="w-full bg-white/10 h-1 rounded overflow-hidden">
<div className="bg-red-500 h-full w-[90%]"></div>
</div>
<div className="mt-2 text-white/40">IP: 192.168.1.X (Engellendi)</div>
</div>
</div>
</div>
<h3 className="text-xl font-medium mb-2 group-hover:text-blue-400 transition-colors">Gerçek Zamanlı Tespit</h3>
<p className="text-sm text-white/50">Şüpheli tıklamalar anında tespit edilir ve saniyeler içinde Google Ads listesinden engellenir.</p>
</div>

<div className="glass-card rounded-xl p-8 hover:bg-white/[0.08] transition-all group">
<div className="h-48 mb-6 rounded-lg bg-black/40 border border-white/5 overflow-hidden relative flex items-center justify-center">
<div className="relative w-24 h-24">
<div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-spin-slow"></div>
<div className="absolute inset-4 rounded-full border-2 border-blue-500/40"></div>
<i className="absolute inset-0 m-auto text-blue-500 w-8 h-8" data-lucide="shield-check"></i>
</div>
</div>
<h3 className="text-xl font-medium mb-2 group-hover:text-blue-400 transition-colors">IP ve Cihaz Engelleme</h3>
<p className="text-sm text-white/50">Bot trafiği, rakip tıklamaları ve tıklama çiftlikleri otomatik olarak filtrelenir.</p>
</div>

<div className="glass-card rounded-xl p-8 hover:bg-white/[0.08] transition-all group">
<div className="h-48 mb-6 rounded-lg bg-black/40 border border-white/5 overflow-hidden relative p-4 flex items-end justify-center gap-2">
<div className="w-8 bg-blue-500/20 h-[40%] rounded-t-sm"></div>
<div className="w-8 bg-blue-500/20 h-[60%] rounded-t-sm"></div>
<div className="w-8 bg-green-500/80 h-[80%] rounded-t-sm relative group-hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-shadow"></div>
<div className="w-8 bg-blue-500/20 h-[50%] rounded-t-sm"></div>
</div>
<h3 className="text-xl font-medium mb-2 group-hover:text-blue-400 transition-colors">Tasarruf Raporu</h3>
<p className="text-sm text-white/50">Ay sonunda ne kadar bütçenin sahte tıklamalardan kurtarıldığını detaylıca görün.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="why_MedyaGem">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
<div className="order-2 lg:order-1">
<div className="relative rounded-xl bg-[#0d1117] border border-white/10 overflow-hidden shadow-2xl">
<div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-white/5">
<div className="text-xs text-white/40 font-mono">yerel-seo-analiz.json</div>
</div>
<div className="p-6 font-mono text-xs">
<div className="text-white/80">
                                {<br/>
                                  <span className="token-string">"sektör"</span>: <span className="token-string">"Sıhhi Tesisat"</span>,<br/>
                                  <span className="token-string">"konum"</span>: <span className="token-string">"İstanbul, Anadolu Yakası"</span>,<br/>
                                  <span className="token-string">"rekabet"</span>: <span className="token-string">"Yüksek"</span>,<br/>
                                  <span className="token-string">"strateji"</span>: {<br/>
                                    <span className="token-string">"odak"</span>: [<span className="token-string">"Acil Tesisatçı"</span>, <span className="token-string">"Su Kaçağı"</span>],<br/>
                                    <span className="token-string">"bütçe_optimizasyonu"</span>: <span className="token-keyword">true</span><br/>
                                  }<br/>
                                }
                            </div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
<i className="w-6 h-6" data-lucide="map-pin"></i>
</div>
<h3 className="text-3xl font-semibold tracking-tight mb-4">Yerel İşletme Uzmanlığı</h3>
<p className="text-white/60 leading-relaxed mb-6">
                        Tesisat, klima, elektrik ve tadilat gibi yerel hizmet sektörlerinde kanıtlanmış başarı. Sektörünüzün dinamiklerini, müşterilerinizin ne aradığını ve rakiplerinizin ne yaptığını çok iyi biliyoruz.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-white/80">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i> Bölgesel anahtar kelime analizi
                        </li>
<li className="flex items-center gap-3 text-sm text-white/80">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i> Çağrı odaklı reklam kurgusu
                        </li>
</ul>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6">
<i className="w-6 h-6" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-3xl font-semibold tracking-tight mb-4">Şeffaf Raporlama</h3>
<p className="text-white/60 leading-relaxed mb-6">
                        Paranızın nereye gittiğini bilmek hakkınız. Anlaşılabilir, net ve sonuç odaklı raporlar sunuyoruz. Karmaşık terimler yerine, ne kadar harcadınız ve ne kadar kazandınız sorusuna yanıt veriyoruz.
                    </p>
<button className="text-sm font-medium text-white hover:text-purple-400 transition-colors inline-flex items-center gap-2">
                        Örnek raporu incele <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<div>
<div className="relative rounded-xl bg-[#0d1117] border border-white/10 p-6 shadow-2xl">
<div className="flex items-center justify-between mb-6">
<h4 className="text-sm font-medium text-white">Performans Özeti</h4>
<div className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded">Canlı</div>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center p-3 rounded bg-white/5">
<div className="text-sm text-white/60">Harcama</div>
<div className="text-sm font-mono font-medium">₺4,250.00</div>
</div>
<div className="flex justify-between items-center p-3 rounded bg-white/5">
<div className="text-sm text-white/60">Dönüşüm</div>
<div className="text-sm font-mono font-medium text-green-400">84 Adet</div>
</div>
<div className="flex justify-between items-center p-3 rounded bg-white/5">
<div className="text-sm text-white/60">Maliyet / Dönüşüm</div>
<div className="text-sm font-mono font-medium">₺50.59</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5" id="pricing">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Size Uygun Paketler</h2>
<p className="text-white/60">İhtiyacınıza ve bütçenize en uygun çözümü seçin</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-card rounded-2xl p-8 flex flex-col">
<h3 className="text-xl font-medium mb-2">Başlangıç</h3>
<p className="text-sm text-white/50 mb-6">Yeni başlayan işletmeler için</p>
<div className="text-2xl font-bold mb-8">Teklif Al</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white/70">
<i className="w-4 h-4 text-white/30" data-lucide="check"></i> Google Ads Kurulumu
                        </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<i className="w-4 h-4 text-white/30" data-lucide="check"></i> Temel Anahtar Kelime
                        </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<i className="w-4 h-4 text-white/30" data-lucide="check"></i> Aylık Raporlama
                        </li>
</ul>
<a className="w-full py-3 rounded-lg border border-white/10 hover:bg-white/5 text-center text-sm font-medium transition-colors" href="#contact">
                        İletişime Geç
                    </a>
</div>

<div className="relative rounded-2xl p-8 flex flex-col bg-[#0d1117] border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.1)]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        En Popüler
                    </div>
<h3 className="text-xl font-medium mb-2 text-white">Profesyonel</h3>
<p className="text-sm text-white/50 mb-6">Büyümek isteyenler için</p>
<div className="text-2xl font-bold mb-8 text-blue-400">Teklif Al</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white/90">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i> Google Ads + Koruma
                        </li>
<li className="flex items-center gap-3 text-sm text-white/90">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i> Haftalık Optimizasyon
                        </li>
<li className="flex items-center gap-3 text-sm text-white/90">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i> Detaylı Raporlama
                        </li>
<li className="flex items-center gap-3 text-sm text-white/90">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i> WhatsApp Destek
                        </li>
</ul>
<a className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-center text-sm font-medium transition-colors shadow-lg shadow-blue-500/25" href="#contact">
                        Hemen Başla
                    </a>
</div>

<div className="glass-card rounded-2xl p-8 flex flex-col">
<h3 className="text-xl font-medium mb-2">Kurumsal</h3>
<p className="text-sm text-white/50 mb-6">Tam kapsamlı çözüm</p>
<div className="text-2xl font-bold mb-8">Teklif Al</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white/70">
<i className="w-4 h-4 text-white/30" data-lucide="check"></i> Tüm Profesyonel Özellikler
                        </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<i className="w-4 h-4 text-white/30" data-lucide="check"></i> Web Sitesi Dahil
                        </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<i className="w-4 h-4 text-white/30" data-lucide="check"></i> SEO &amp; Sosyal Medya
                        </li>
</ul>
<a className="w-full py-3 rounded-lg border border-white/10 hover:bg-white/5 text-center text-sm font-medium transition-colors" href="#contact">
                        İletişime Geç
                    </a>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-24" id="faq">
<h2 className="text-3xl font-semibold tracking-tight mb-12 text-center">Sık Sorulan Sorular</h2>
<div className="space-y-4">
<details className="group glass-card rounded-lg open:bg-white/[0.03] transition-all">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-white/90">Google Ads ne kadar sürede sonuç verir?</span>
<span className="transition group-open:rotate-180">
<i className="w-4 h-4 text-white/50" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-white/60 leading-relaxed">
                        Reklamlar anında yayınlanır ve ilk sonuçlar genellikle 24-48 saat içinde görülür. Ancak kampanyanın tam performansına ulaşması ve yapay zeka öğrenimi için 2-4 haftalık bir optimizasyon süreci öneriyoruz.
                    </div>
</details>
<details className="group glass-card rounded-lg open:bg-white/[0.03] transition-all">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-white/90">Sahte tıklama koruması nasıl çalışır?</span>
<span className="transition group-open:rotate-180">
<i className="w-4 h-4 text-white/50" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-white/60 leading-relaxed">
                        Gelişmiş algoritmalarımız; IP adresi, cihaz kimliği, VPN kullanımı ve tıklama davranışlarını analiz eder. Bot trafiği veya rakiplerden gelen kötü niyetli tıklamaları tespit ederek bu kaynakları Google Ads'de otomatik olarak engeller.
                    </div>
</details>
<details className="group glass-card rounded-lg open:bg-white/[0.03] transition-all">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-white/90">Minimum reklam bütçesi ne kadar olmalı?</span>
<span className="transition group-open:rotate-180">
<i className="w-4 h-4 text-white/50" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-white/60 leading-relaxed">
                        Bütçe sektöre ve rekabete göre değişir. Ancak yerel hizmet işletmeleri için anlamlı veriler elde etmek ve dönüşüm sağlamak adına aylık minimum 3.000-5.000 TL arası bir başlangıç bütçesi öneriyoruz.
                    </div>
</details>
<details className="group glass-card rounded-lg open:bg-white/[0.03] transition-all">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-white/90">Sözleşme zorunlu mu?</span>
<span className="transition group-open:rotate-180">
<i className="w-4 h-4 text-white/50" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-white/60 leading-relaxed">
                        Hayır, uzun vadeli bağlayıcı sözleşmeler yapmıyoruz. Aylık çalışma modeliyle ilerliyoruz. Ancak SEO ve dijital pazarlama süreçlerinin doğası gereği, kalıcı başarı için minimum 3 aylık bir çalışma periyodu tavsiye ediyoruz.
                    </div>
</details>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-12" id="cta_banner">
<div className="relative rounded-2xl overflow-hidden p-12 text-center bg-gradient-to-b from-blue-900/20 to-bg-secondary border border-white/10">
<div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-blue-500/10 blur-[80px]"></div>
<h2 className="relative text-3xl md:text-5xl font-semibold tracking-tight mb-6">Dijital Büyümenize<br/>Bugün Başlayın</h2>
<p className="relative text-white/60 max-w-xl mx-auto mb-10 text-lg">
                    Ücretsiz hesap analizi ve strateji görüşmesi için hemen iletişime geçin. Rakiplerinizin önüne geçme zamanı.
                </p>
<div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-base hover:bg-gray-100 transition-colors shadow-lg">
                        Ücretsiz Analiz Al
                    </button>
<button className="px-8 py-4 rounded-lg font-semibold text-base text-white border border-white/10 hover:bg-white/5 transition-colors">
                        Bize Ulaşın
                    </button>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-[#050508] pt-20 pb-10 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white">
<i className="w-3 h-3" data-lucide="zap"></i>
</div>
<span className="font-semibold text-white">MedyaGem</span>
</div>
<p className="text-sm text-white/40 leading-relaxed mb-6">
                        İstanbul merkezli dijital pazarlama ajansı. Veri odaklı çözümlerle işinizi büyütüyoruz.
                    </p>
<div className="flex gap-4">
<a className="text-white/40 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-white/40 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-white/40 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="youtube"></i></a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-6">Hizmetler</h4>
<ul className="space-y-3 text-sm text-white/40">
<li><a className="hover:text-blue-400 transition-colors" href="#">Google Ads</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Web Tasarım</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">SEO</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Sahte Tıklama Koruması</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-6">Kurumsal</h4>
<ul className="space-y-3 text-sm text-white/40">
<li><a className="hover:text-blue-400 transition-colors" href="#">Hakkımızda</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">SSS</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">İletişim</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-6">İletişim</h4>
<ul className="space-y-3 text-sm text-white/40">
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-1 shrink-0" data-lucide="map-pin"></i>
                            Sultanbeyli, İstanbul
                        </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 shrink-0" data-lucide="mail"></i>
                            info@medyagem.com
                        </li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-white/20">© 2025 MedyaGem Dijital Pazarlama. Tüm hakları saklıdır.</p>
<div className="flex gap-6 text-xs text-white/20">
<a className="hover:text-white/40" href="#">Gizlilik Politikası</a>
<a className="hover:text-white/40" href="#">Kullanım Şartları</a>
</div>
</div>
</div>

<div className="w-full overflow-hidden leading-none select-none pointer-events-none opacity-[0.03]">
<div className="text-[15vw] font-bold text-center text-white tracking-tighter -mb-[5vw]">
                MedyaGem
            </div>
</div>
</footer>


    </>
  );
}
