import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function switchPage(pageId) {
            // Hide all sections
            const sections = document.querySelectorAll('.page-section');
            sections.forEach(section => {
                section.classList.add('hidden');
            });

            // Show target section
            const target = document.getElementById(pageId);
            if (target) {
                target.classList.remove('hidden');
                // Re-trigger animation
                target.classList.remove('fade-in');
                void target.offsetWidth; // trigger reflow
                target.classList.add('fade-in');
                
                // Scroll to top
                window.scrollTo(0, 0);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center cursor-pointer" onclick="switchPage('home')">
<span className="text-xl font-semibold tracking-tighter text-slate-900">LUMINA</span>
</div>

<div className="hidden md:flex space-x-8">
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" onclick="switchPage('services')">Hizmetler</button>
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" onclick="switchPage('blog')">Blog</button>
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" onclick="switchPage('about')">Hakkımızda</button>
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" onclick="switchPage('careers')">Kariyer</button>
</div>

<div className="hidden md:flex items-center space-x-4">
<button className="text-slate-400 hover:text-indigo-600 transition-colors" onclick="switchPage('admin')" title="Admin Paneli">
<iconify-icon icon="solar:shield-user-linear" width="20"></iconify-icon>
</button>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium px-4 py-2 rounded-full transition-all shadow-sm" onclick="switchPage('contact')">
                        İletişime Geç
                    </button>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-500 hover:text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<main className="pt-24 pb-12 min-h-screen">

<section className="page-section fade-in" id="home">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-center py-20 lg:py-32">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                        SEO Odaklı Dijital Büyüme
                    </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                        Dijital varlığınızı <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">performansa</span> dönüştürün.
                    </h1>
<p className="max-w-2xl mx-auto text-lg text-slate-500 mb-10 leading-relaxed">
                        Veri odaklı stratejiler ve minimalist tasarım anlayışıyla markanızın dijital dünyadaki ayak izini derinleştiriyoruz.
                    </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-slate-900 text-white px-8 py-3 rounded-full font-medium text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2" onclick="switchPage('contact')">
                            Projenizi Başlatın
                            <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="bg-white border border-slate-200 text-slate-700 px-8 py-3 rounded-full font-medium text-sm hover:bg-slate-50 transition-colors" onclick="switchPage('services')">
                            Hizmetleri İncele
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
<div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
<iconify-icon className="text-indigo-500 mb-4" icon="solar:chart-2-linear" width="32"></iconify-icon>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight">%240</h3>
<p className="text-sm text-slate-500 mt-1">Ortalama ROI artışı</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
<iconify-icon className="text-purple-500 mb-4" icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight">500+</h3>
<p className="text-sm text-slate-500 mt-1">Mutlu müşteri</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
<iconify-icon className="text-blue-500 mb-4" icon="solar:globe-linear" width="32"></iconify-icon>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight">12</h3>
<p className="text-sm text-slate-500 mt-1">Global ödül</p>
</div>
</div>

<div className="border-t border-slate-200 py-20 text-center">
<iconify-icon className="text-slate-300 mb-6 mx-auto" icon="solar:quote-up-linear" width="40"></iconify-icon>
<p className="text-2xl font-medium text-slate-900 tracking-tight max-w-3xl mx-auto mb-6">"Lumina ile çalışmak, sadece bir ajansla değil, işimizin kalbinde yer alan bir strateji ortağıyla çalışmak gibiydi. Sonuçlar beklentimizin çok ötesinde."</p>
<div className="flex items-center justify-center gap-3">
<div className="w-8 h-8 bg-slate-200 rounded-full overflow-hidden">
<img alt="CEO" className="w-full h-full object-cover grayscale" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
</div>
<div className="text-left">
<p className="text-sm font-medium text-slate-900">Ahmet Yılmaz</p>
<p className="text-xs text-slate-500">CEO, TechStart</p>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden fade-in" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="mb-16">
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-4">Hizmetlerimiz</h2>
<p className="text-lg text-slate-500 max-w-2xl">Bütünsel dijital pazarlama çözümleriyle markanızı bir adım öne taşıyoruz.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 cursor-pointer">
<div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">SEO Optimizasyonu</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Arama motorlarında organik görünürlüğünüzü artırın, kalıcı trafik elde edin.</p>
<span className="text-xs font-medium text-indigo-600 flex items-center gap-1">
                            Detaylı Bilgi <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300 cursor-pointer">
<div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Performans Pazarlama</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Google Ads ve Meta reklamları ile dönüşüm odaklı kampanyalar yönetiyoruz.</p>
<span className="text-xs font-medium text-purple-600 flex items-center gap-1">
                            Detaylı Bilgi <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 cursor-pointer">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">İçerik Stratejisi</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Hedef kitlenizi etkileyen, marka sadakati yaratan hikayeler oluşturuyoruz.</p>
<span className="text-xs font-medium text-blue-600 flex items-center gap-1">
                            Detaylı Bilgi <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 cursor-pointer">
<div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:code-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Web Geliştirme</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Hızlı, modern ve dönüşüm odaklı web siteleri tasarlıyor ve kodluyoruz.</p>
<span className="text-xs font-medium text-emerald-600 flex items-center gap-1">
                            Detaylı Bilgi <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 cursor-pointer">
<div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:chat-round-line-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Sosyal Medya</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Topluluk yönetimi ve yaratıcı içeriklerle markanızın sosyal sesini güçlendirin.</p>
<span className="text-xs font-medium text-orange-600 flex items-center gap-1">
                            Detaylı Bilgi <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-500/5 transition-all duration-300 cursor-pointer">
<div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600 mb-6 group-hover:bg-rose-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Veri Analitiği</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Karmaşık verileri anlamlı içgörülere dönüştürerek karar süreçlerinizi iyileştirin.</p>
<span className="text-xs font-medium text-rose-600 flex items-center gap-1">
                            Detaylı Bilgi <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</div>
</section>

<section className="page-section hidden fade-in" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
<div>
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">Şeffaflık ve Veri Bizim DNA'mızda Var.</h2>
<div className="space-y-4 text-slate-500 text-lg">
<p>Lumina, geleneksel ajans modellerini reddeden, teknoloji ve yaratıcılığı birleştiren yeni nesil bir dijital performans ajansıdır.</p>
<p>Amacımız karmaşık dijital dünyayı müşterilerimiz için basitleştirmek ve ölçülebilir, sürdürülebilir büyüme sağlamaktır.</p>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-3xl blur-2xl opacity-50"></div>
<div className="relative bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
<div className="flex items-center gap-4 mb-6">
<div className="h-10 w-10 bg-indigo-600 rounded-full flex items-center justify-center text-white">
<iconify-icon icon="solar:bolt-linear" width="20"></iconify-icon>
</div>
<div>
<div className="font-medium text-slate-900">Hızlı Uygulama</div>
<div className="text-xs text-slate-500">Çevik metodoloji</div>
</div>
</div>
<div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden mb-2">
<div className="h-full bg-indigo-600 w-3/4 rounded-full"></div>
</div>
<div className="flex justify-between text-xs text-slate-500">
<span>Proje İlerlemesi</span>
<span>%75</span>
</div>
</div>
</div>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8">Takımımız</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

<div className="text-center">
<div className="w-24 h-24 mx-auto bg-slate-200 rounded-full overflow-hidden mb-4 grayscale hover:grayscale-0 transition-all">
<img className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=1"/>
</div>
<div className="font-medium text-slate-900">Selin Demir</div>
<div className="text-xs text-slate-500">Kurucu Ortak</div>
</div>
<div className="text-center">
<div className="w-24 h-24 mx-auto bg-slate-200 rounded-full overflow-hidden mb-4 grayscale hover:grayscale-0 transition-all">
<img className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=2"/>
</div>
<div className="font-medium text-slate-900">Mert Kaya</div>
<div className="text-xs text-slate-500">Head of SEO</div>
</div>
<div className="text-center">
<div className="w-24 h-24 mx-auto bg-slate-200 rounded-full overflow-hidden mb-4 grayscale hover:grayscale-0 transition-all">
<img className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=3"/>
</div>
<div className="font-medium text-slate-900">Ayşe Yılmaz</div>
<div className="text-xs text-slate-500">Kreatif Direktör</div>
</div>
<div className="text-center">
<div className="w-24 h-24 mx-auto bg-slate-200 rounded-full overflow-hidden mb-4 grayscale hover:grayscale-0 transition-all">
<img className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=4"/>
</div>
<div className="font-medium text-slate-900">Caner Erkin</div>
<div className="text-xs text-slate-500">Yazılım Geliştirici</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden fade-in" id="careers">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-4">Geleceği Birlikte Tasarlayalım</h2>
<p className="text-lg text-slate-500">Yetenekli, meraklı ve veri tutkunu ekip arkadaşları arıyoruz.</p>
</div>
<div className="space-y-4">

<div className="bg-white border border-slate-200 p-6 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between hover:border-indigo-300 transition-colors group">
<div>
<h3 className="text-lg font-medium text-slate-900">Senior SEO Uzmanı</h3>
<div className="flex gap-3 text-xs text-slate-500 mt-2">
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> İstanbul / Hibrit</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Tam Zamanlı</span>
</div>
</div>
<button className="mt-4 md:mt-0 text-sm font-medium text-slate-900 border border-slate-200 bg-slate-50 px-4 py-2 rounded-lg group-hover:bg-slate-900 group-hover:text-white transition-all">Başvur</button>
</div>

<div className="bg-white border border-slate-200 p-6 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between hover:border-indigo-300 transition-colors group">
<div>
<h3 className="text-lg font-medium text-slate-900">UI/UX Tasarımcı</h3>
<div className="flex gap-3 text-xs text-slate-500 mt-2">
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Uzaktan</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Tam Zamanlı</span>
</div>
</div>
<button className="mt-4 md:mt-0 text-sm font-medium text-slate-900 border border-slate-200 bg-slate-50 px-4 py-2 rounded-lg group-hover:bg-slate-900 group-hover:text-white transition-all">Başvur</button>
</div>

<div className="bg-white border border-slate-200 p-6 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between hover:border-indigo-300 transition-colors group">
<div>
<h3 className="text-lg font-medium text-slate-900">İçerik Pazarlama Stajyeri</h3>
<div className="flex gap-3 text-xs text-slate-500 mt-2">
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> İstanbul</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Yarı Zamanlı</span>
</div>
</div>
<button className="mt-4 md:mt-0 text-sm font-medium text-slate-900 border border-slate-200 bg-slate-50 px-4 py-2 rounded-lg group-hover:bg-slate-900 group-hover:text-white transition-all">Başvur</button>
</div>
</div>
</div>
</section>

<section className="page-section hidden fade-in" id="blog">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-10">Güncel İçgörüler</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="flex flex-col group cursor-pointer">
<div className="h-48 bg-slate-200 rounded-xl overflow-hidden mb-4 relative">
<div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/0 transition-colors"></div>

<div className="w-full h-full bg-gradient-to-tr from-indigo-50 to-slate-100 flex items-center justify-center">
<iconify-icon className="text-slate-300" icon="solar:gallery-wide-linear" width="48"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-2 mb-3">
<span className="text-[10px] uppercase font-semibold tracking-wider text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">SEO</span>
<span className="text-xs text-slate-400">12 Ekim 2023</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">2024 SEO Trendleri: Yapay Zeka Etkisi</h3>
<p className="text-sm text-slate-500 line-clamp-2">Google'ın son algoritmaları ve yapay zeka entegrasyonunun arama sonuçlarına etkisi.</p>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="h-48 bg-slate-200 rounded-xl overflow-hidden mb-4 relative">
<div className="w-full h-full bg-gradient-to-tr from-purple-50 to-slate-100 flex items-center justify-center">
<iconify-icon className="text-slate-300" icon="solar:chart-square-linear" width="48"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-2 mb-3">
<span className="text-[10px] uppercase font-semibold tracking-wider text-purple-600 bg-purple-50 px-2 py-1 rounded-md">Analytics</span>
<span className="text-xs text-slate-400">08 Ekim 2023</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">GA4'e Geçiş Sonrası Dönüşüm Takibi</h3>
<p className="text-sm text-slate-500 line-clamp-2">Universal Analytics sonrası GA4 ile e-ticaret verilerinizi nasıl doğru okursunuz?</p>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="h-48 bg-slate-200 rounded-xl overflow-hidden mb-4 relative">
<div className="w-full h-full bg-gradient-to-tr from-blue-50 to-slate-100 flex items-center justify-center">
<iconify-icon className="text-slate-300" icon="solar:hashtag-square-linear" width="48"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-2 mb-3">
<span className="text-[10px] uppercase font-semibold tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded-md">Sosyal Medya</span>
<span className="text-xs text-slate-400">25 Eylül 2023</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Instagram Algoritması Nasıl Çalışıyor?</h3>
<p className="text-sm text-slate-500 line-clamp-2">Reels ve gönderi erişimlerinizi artırmak için bilmeniz gereken teknik detaylar.</p>
</article>
</div>
</div>
</section>

<section className="page-section hidden fade-in" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">Bir sonraki büyük projenizi konuşalım.</h2>
<p className="text-lg text-slate-500 mb-10">Formu doldurun, strateji ekibimiz 24 saat içinde size dönüş yapsın.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900">Email</h4>
<p className="text-sm text-slate-500">hello@lumina.agency</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900">Ofis</h4>
<p className="text-sm text-slate-500">Levent 199, İstanbul</p>
</div>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Adınız</label>
<input className="custom-input w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white" placeholder="Adınız" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Soyadınız</label>
<input className="custom-input w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white" placeholder="Soyadınız" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Email</label>
<input className="custom-input w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white" placeholder="ornek@sirket.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-2">Hizmet Seçimi</label>
<div className="grid grid-cols-2 gap-3">
<label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
<input className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" type="checkbox"/>
                                        SEO
                                    </label>
<label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
<input className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" type="checkbox"/>
                                        Reklam
                                    </label>
<label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
<input className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" type="checkbox"/>
                                        Yazılım
                                    </label>
<label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
<input className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" type="checkbox"/>
                                        Tasarım
                                    </label>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Mesajınız</label>
<textarea className="custom-input w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white" placeholder="Projenizden bahsedin..." rows="4"></textarea>
</div>
<button className="w-full bg-slate-900 text-white font-medium text-sm py-2.5 rounded-lg hover:bg-slate-800 transition-colors" type="button">Gönder</button>
</form>
</div>
</div>
</div>
</section>

<section className="page-section hidden fade-in" id="admin">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
<div className="flex flex-col lg:flex-row gap-6">

<div className="w-full lg:w-64 flex-shrink-0">
<div className="bg-white border border-slate-200 rounded-xl p-4 sticky top-24">
<div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-2">Yönetim</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium bg-indigo-50 text-indigo-700 rounded-lg" href="#">
<iconify-icon icon="solar:widget-linear"></iconify-icon> Dashboard
                                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg" href="#">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> Müşteriler
                                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg" href="#">
<iconify-icon icon="solar:document-add-linear"></iconify-icon> Blog Yazıları
                                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg" href="#">
<iconify-icon icon="solar:inbox-linear"></iconify-icon> Mesajlar <span className="ml-auto bg-red-100 text-red-600 text-[10px] px-1.5 py-0.5 rounded-full">3</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg" href="#">
<iconify-icon icon="solar:settings-linear"></iconify-icon> Ayarlar
                                </a>
</nav>
</div>
</div>

<div className="flex-1 space-y-6">

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs text-slate-500">Aylık Ziyaretçi</p>
<h4 className="text-2xl font-semibold text-slate-900 mt-1">45,231</h4>
</div>
<span className="text-emerald-600 text-xs font-medium bg-emerald-50 px-2 py-1 rounded-md flex items-center gap-1">
<iconify-icon icon="solar:trending-up-linear"></iconify-icon> +12%
                                    </span>
</div>
<div className="h-1 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-[65%]"></div>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs text-slate-500">Aktif Lead</p>
<h4 className="text-2xl font-semibold text-slate-900 mt-1">128</h4>
</div>
<span className="text-emerald-600 text-xs font-medium bg-emerald-50 px-2 py-1 rounded-md flex items-center gap-1">
<iconify-icon icon="solar:trending-up-linear"></iconify-icon> +5%
                                    </span>
</div>
<div className="h-1 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-purple-500 w-[45%]"></div>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs text-slate-500">Dönüşüm Oranı</p>
<h4 className="text-2xl font-semibold text-slate-900 mt-1">%3.2</h4>
</div>
<span className="text-rose-600 text-xs font-medium bg-rose-50 px-2 py-1 rounded-md flex items-center gap-1">
<iconify-icon icon="solar:trending-down-linear"></iconify-icon> -0.4%
                                    </span>
</div>
<div className="h-1 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-orange-500 w-[32%]"></div>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
<div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
<h3 className="text-sm font-semibold text-slate-900">Son Başvurular</h3>
<button className="text-xs text-indigo-600 font-medium">Tümünü Gör</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50/50 text-slate-500 text-xs uppercase tracking-wider">
<th className="px-6 py-3 font-medium">İsim</th>
<th className="px-6 py-3 font-medium">Hizmet</th>
<th className="px-6 py-3 font-medium">Durum</th>
<th className="px-6 py-3 font-medium">Tarih</th>
<th className="px-6 py-3 font-medium">İşlem</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-slate-100">
<tr>
<td className="px-6 py-4 font-medium text-slate-900">Mehmet Öztürk</td>
<td className="px-6 py-4 text-slate-500">SEO Danışmanlığı</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-50 text-yellow-700">Beklemede</span>
</td>
<td className="px-6 py-4 text-slate-500">Bugün</td>
<td className="px-6 py-4">
<button className="text-slate-400 hover:text-slate-600"><iconify-icon icon="solar:menu-dots-bold"></iconify-icon></button>
</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-slate-900">Zeynep Kaya</td>
<td className="px-6 py-4 text-slate-500">Web Tasarım</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700">Onaylandı</span>
</td>
<td className="px-6 py-4 text-slate-500">Dün</td>
<td className="px-6 py-4">
<button className="text-slate-400 hover:text-slate-600"><iconify-icon icon="solar:menu-dots-bold"></iconify-icon></button>
</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-slate-900">Global Tech A.Ş.</td>
<td className="px-6 py-4 text-slate-500">Kurumsal Kimlik</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600">İnceleniyor</span>
</td>
<td className="px-6 py-4 text-slate-500">22 Eki</td>
<td className="px-6 py-4">
<button className="text-slate-400 hover:text-slate-600"><iconify-icon icon="solar:menu-dots-bold"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<span className="text-xl font-semibold tracking-tighter text-slate-900 block mb-4">LUMINA</span>
<p className="text-sm text-slate-500 leading-relaxed">
                        Veri odaklı dijital pazarlama ajansı. Markanızı görünür kılıyor, büyütüyoruz.
                    </p>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Hizmetler</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#" onclick="switchPage('services')">SEO &amp; SEM</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#" onclick="switchPage('services')">Sosyal Medya</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#" onclick="switchPage('services')">İçerik Pazarlama</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#" onclick="switchPage('services')">Web Geliştirme</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Kurumsal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#" onclick="switchPage('about')">Hakkımızda</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#" onclick="switchPage('careers')">Kariyer</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#" onclick="switchPage('blog')">Blog</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#" onclick="switchPage('contact')">İletişim</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Bülten</h4>
<p className="text-xs text-slate-500 mb-3">Dijital trendlerden haberdar olun.</p>
<div className="flex gap-2">
<input className="custom-input bg-slate-50 border border-slate-200 text-xs px-3 py-2 rounded-md w-full focus:bg-white" placeholder="Email" type="email"/>
<button className="bg-slate-900 text-white text-xs font-medium px-3 py-2 rounded-md hover:bg-slate-800">Kayıt</button>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2023 Lumina Agency. Tüm hakları saklıdır.</p>
<div className="flex space-x-4 text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
