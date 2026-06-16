import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/80" style={{transition: 'all 0.3s ease'}}>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16 relative">
<a className="flex items-center gap-2 cursor-pointer" href="#" onclick="showPage('home')">
<div className="w-8 h-8 rounded-lg gradient-border flex items-center justify-center">
<span className="text-white font-semibold text-sm">O</span>
</div>
<span className="font-semibold text-lg tracking-tight text-gray-900">orbita</span>
</a>
<button className="toggle-mobile p-2 rounded-lg hover:bg-gray-50" onclick="toggleMobileNav()">
<iconify-icon icon="solar:hamburger-menu-linear" style={{color: '#374151', strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
<div className="nav-desktop flex items-center gap-1" id="navMenu">
<a className="nav-link active-link px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 cursor-pointer rounded-lg hover:bg-gray-50 transition-colors" data-page="home" onclick="showPage('home')">Ana Sayfa</a>
<a className="nav-link px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 cursor-pointer rounded-lg hover:bg-gray-50 transition-colors" data-page="services" onclick="showPage('services')">Hizmetler</a>
<a className="nav-link px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 cursor-pointer rounded-lg hover:bg-gray-50 transition-colors" data-page="references" onclick="showPage('references')">Referanslar</a>
<a className="nav-link px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 cursor-pointer rounded-lg hover:bg-gray-50 transition-colors" data-page="blog" onclick="showPage('blog')">Blog</a>
<a className="nav-link px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 cursor-pointer rounded-lg hover:bg-gray-50 transition-colors" data-page="contact" onclick="showPage('contact')">İletişim</a>
</div>
<div className="hidden md:flex items-center gap-3">
<a className="cursor-pointer text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30" onclick="showPage('contact')">
                        Teklif Al
                    </a>
</div>
</div>
</div>
</nav>

<div className="page active" id="page-home">

<section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
<div className="hero-glow" style={{top: '-200px', right: '-200px'}}></div>
<div className="hero-glow" style={{bottom: '-300px', left: '-200px', opacity: '0.5'}}></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
<div className="max-w-4xl mx-auto text-center fade-in">
<div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-medium mb-8">
<span className="w-1.5 h-1.5 bg-indigo-500 rounded-full pulse-dot"></span>
                        Dijital Performansınızı Yükseltin
                    </div>
<h1 className="sm:text-5xl lg:text-7xl leading-tight text-4xl font-bold text-gray-900 tracking-tight">Oğulcan Demirer <span className="gradient-text"> dijital pazarlama</span> stratejileri</h1>
<p className="mt-6 text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
                        SEO, Google Ads ve sosyal medya yönetimi ile markanızı büyütüyor, ölçülebilir sonuçlar elde ediyoruz.
                    </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30" onclick="showPage('contact')">
                            Ücretsiz Analiz
                            <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 hover:border-gray-300 px-8 py-3.5 rounded-xl transition-all hover:shadow-sm" onclick="showPage('services')">
                            Hizmetlerimiz
                        </a>
</div>
</div>

<div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4">
<div className="stat-card rounded-2xl p-6 text-center">
<div className="text-3xl lg:text-4xl font-bold tracking-tight gradient-text">250+</div>
<div className="mt-1 text-sm text-gray-500 font-medium">Aktif Müşteri</div>
</div>
<div className="stat-card rounded-2xl p-6 text-center">
<div className="text-3xl lg:text-4xl font-bold tracking-tight gradient-text">%340</div>
<div className="mt-1 text-sm text-gray-500 font-medium">Ortalama ROI</div>
</div>
<div className="stat-card rounded-2xl p-6 text-center">
<div className="text-3xl lg:text-4xl font-bold tracking-tight gradient-text">50M+</div>
<div className="mt-1 text-sm text-gray-500 font-medium">Reklam Bütçesi Yönetimi</div>
</div>
<div className="stat-card rounded-2xl p-6 text-center">
<div className="text-3xl lg:text-4xl font-bold tracking-tight gradient-text">8+</div>
<div className="mt-1 text-sm text-gray-500 font-medium">Yıllık Deneyim</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-gray-100 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<p className="text-xs font-medium text-gray-400 text-center uppercase tracking-widest mb-8">Güvenilir markalar tarafından tercih ediliyor</p>
</div>
<div className="flex gap-12 items-center overflow-hidden">
<div className="flex gap-12 items-center marquee">
<span className="text-2xl font-bold tracking-tight text-gray-200 whitespace-nowrap">TechVista</span>
<span className="text-2xl font-bold tracking-tight text-gray-200 whitespace-nowrap">ModaCo</span>
<span className="text-2xl font-bold tracking-tight text-gray-200 whitespace-nowrap">GreenEnergy</span>
<span className="text-2xl font-bold tracking-tight text-gray-200 whitespace-nowrap">HealthPlus</span>
<span className="text-2xl font-bold tracking-tight text-gray-200 whitespace-nowrap">FinanceHub</span>
<span className="text-2xl font-bold tracking-tight text-gray-200 whitespace-nowrap">EduSmart</span>
<span className="text-2xl font-bold tracking-tight text-gray-200 whitespace-nowrap">FoodKing</span>
<span className="text-2xl font-bold tracking-tight text-gray-200 whitespace-nowrap">AutoDrive</span>
<span className="text-2xl font-bold tracking-tight text-gray-200 whitespace-nowrap">TechVista</span>
<span className="text-2xl font-bold tracking-tight text-gray-200 whitespace-nowrap">ModaCo</span>
<span className="text-2xl font-bold tracking-tight text-gray-200 whitespace-nowrap">GreenEnergy</span>
<span className="text-2xl font-bold tracking-tight text-gray-200 whitespace-nowrap">HealthPlus</span>
<span className="text-2xl font-bold tracking-tight text-gray-200 whitespace-nowrap">FinanceHub</span>
<span className="text-2xl font-bold tracking-tight text-gray-200 whitespace-nowrap">EduSmart</span>
<span className="text-2xl font-bold tracking-tight text-gray-200 whitespace-nowrap">FoodKing</span>
<span className="text-2xl font-bold tracking-tight text-gray-200 whitespace-nowrap">AutoDrive</span>
</div>
</div>
</section>

<section className="py-20 lg:py-28">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<p className="text-sm font-medium text-indigo-500 mb-3">Hizmetlerimiz</p>
<h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Büyümeniz için ihtiyacınız olan her şey</h2>
<p className="mt-4 text-base text-gray-500 leading-relaxed">Kapsamlı dijital pazarlama hizmetlerimizle online varlığınızı güçlendirin.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="card-hover bg-white border border-gray-100 rounded-2xl p-8 cursor-pointer" onclick="showPage('services')">
<div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-6">
<iconify-icon icon="solar:magnifer-linear" style={{color: '#6366f1', strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900">SEO Optimizasyonu</h3>
<p className="mt-3 text-sm text-gray-500 leading-relaxed">Arama motorlarında üst sıralara çıkın, organik trafiğinizi katlamalı olarak artırın.</p>
<div className="mt-6 flex items-center gap-1 text-sm font-medium text-indigo-500">
                            Detayları Gör
                            <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
<div className="card-hover bg-white border border-gray-100 rounded-2xl p-8 cursor-pointer" onclick="showPage('services')">
<div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center mb-6">
<iconify-icon icon="solar:target-linear" style={{color: '#8b5cf6', strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900">Google Ads</h3>
<p className="mt-3 text-sm text-gray-500 leading-relaxed">Yüksek dönüşüm oranlarıyla reklam bütçenizden maksimum verim alın.</p>
<div className="mt-6 flex items-center gap-1 text-sm font-medium text-violet-500">
                            Detayları Gör
                            <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
<div className="card-hover bg-white border border-gray-100 rounded-2xl p-8 cursor-pointer" onclick="showPage('services')">
<div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-6">
<iconify-icon icon="solar:share-circle-linear" style={{color: '#a855f7', strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900">Sosyal Medya Yönetimi</h3>
<p className="mt-3 text-sm text-gray-500 leading-relaxed">Markanızın sosyal medya varlığını profesyonel içeriklerle büyütün.</p>
<div className="mt-6 flex items-center gap-1 text-sm font-medium text-purple-500">
                            Detayları Gör
                            <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-gray-50/50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<p className="text-sm font-medium text-indigo-500 mb-3">Nasıl Çalışıyoruz?</p>
<h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">4 adımda dijital dönüşüm</h2>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center">
<div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 font-semibold text-sm flex items-center justify-center mx-auto mb-4">01</div>
<h4 className="font-semibold text-gray-900 mb-2">Analiz</h4>
<p className="text-sm text-gray-500 leading-relaxed">Mevcut dijital varlığınızı ve rakiplerinizi detaylı analiz ediyoruz.</p>
</div>
<div className="text-center">
<div className="w-12 h-12 rounded-full bg-violet-100 text-violet-600 font-semibold text-sm flex items-center justify-center mx-auto mb-4">02</div>
<h4 className="font-semibold text-gray-900 mb-2">Strateji</h4>
<p className="text-sm text-gray-500 leading-relaxed">Veriye dayalı, ölçeklenebilir pazarlama stratejisi oluşturuyoruz.</p>
</div>
<div className="text-center">
<div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 font-semibold text-sm flex items-center justify-center mx-auto mb-4">03</div>
<h4 className="font-semibold text-gray-900 mb-2">Uygulama</h4>
<p className="text-sm text-gray-500 leading-relaxed">Onaylanan stratejiyi uzman ekibimizle hayata geçiriyoruz.</p>
</div>
<div className="text-center">
<div className="w-12 h-12 rounded-full bg-fuchsia-100 text-fuchsia-600 font-semibold text-sm flex items-center justify-center mx-auto mb-4">04</div>
<h4 className="font-semibold text-gray-900 mb-2">Optimizasyon</h4>
<p className="text-sm text-gray-500 leading-relaxed">Sürekli izleme ve A/B testleriyle performansı artırıyoruz.</p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<p className="text-sm font-medium text-indigo-500 mb-3">Müşteri Yorumları</p>
<h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Müşterilerimiz ne diyor?</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="card-hover bg-white border border-gray-100 rounded-2xl p-8">
<div className="flex gap-1 mb-4">
<iconify-icon icon="solar:star-bold" style={{color: '#f59e0b'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#f59e0b'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#f59e0b'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#f59e0b'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#f59e0b'}} width="16"></iconify-icon>
</div>
<p className="text-sm text-gray-600 leading-relaxed">"Orbita ile çalışmaya başladıktan 3 ay sonra organik trafiğimiz %180 arttı. SEO konusundaki uzmanlıkları gerçekten etkileyici."</p>
<div className="mt-6 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold text-sm">AK</div>
<div>
<div className="text-sm font-medium text-gray-900">Ahmet Kaya</div>
<div className="text-xs text-gray-400">CEO, TechVista</div>
</div>
</div>
</div>
<div className="card-hover bg-white border border-gray-100 rounded-2xl p-8">
<div className="flex gap-1 mb-4">
<iconify-icon icon="solar:star-bold" style={{color: '#f59e0b'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#f59e0b'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#f59e0b'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#f59e0b'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#f59e0b'}} width="16"></iconify-icon>
</div>
<p className="text-sm text-gray-600 leading-relaxed">"Google Ads yönetiminde mükemmellerler. Reklam harcamalarımız aynı kalırken dönüşüm oranımız 4 kat arttı."</p>
<div className="mt-6 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 font-semibold text-sm">SY</div>
<div>
<div className="text-sm font-medium text-gray-900">Selin Yılmaz</div>
<div className="text-xs text-gray-400">CMO, ModaCo</div>
</div>
</div>
</div>
<div className="card-hover bg-white border border-gray-100 rounded-2xl p-8">
<div className="flex gap-1 mb-4">
<iconify-icon icon="solar:star-bold" style={{color: '#f59e0b'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#f59e0b'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#f59e0b'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#f59e0b'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#f59e0b'}} width="16"></iconify-icon>
</div>
<p className="text-sm text-gray-600 leading-relaxed">"Sosyal medya hesaplarımız Orbita sayesinde tamamen profesyonel bir görünüme kavuştu. Takipçi sayımız 10 kat arttı."</p>
<div className="mt-6 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-semibold text-sm">MD</div>
<div>
<div className="text-sm font-medium text-gray-900">Mehmet Demir</div>
<div className="text-xs text-gray-400">Kurucu, FoodKing</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 lg:py-16 bg-white border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12 bg-gray-50 border border-gray-100 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
<div className="relative z-10 flex-1">
<div className="inline-flex items-center gap-2 text-indigo-600 bg-white border border-gray-100 px-3 py-1.5 rounded-full text-xs font-medium mb-6 shadow-sm">
<iconify-icon icon="solar:diploma-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                            Orbita Akademi
                        </div>
<h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">Kapsamlı SEO Eğitimi</h2>
<p className="mt-4 text-sm lg:text-base text-gray-500 leading-relaxed max-w-2xl">
                            Ajans deneyimiyle harmanlanmış, sıfırdan ileri seviyeye uygulamalı SEO eğitimi. Kendi projenizi yönetmeyi veya profesyonel bir kariyere adım atmayı öğrenin.
                        </p>
<div className="mt-8 flex flex-wrap items-center gap-5 text-sm font-medium text-gray-600">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
<iconify-icon icon="solar:check-read-linear" style={{color: '#6366f1', strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
                                Birebir Mentörlük
                            </div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
<iconify-icon icon="solar:check-read-linear" style={{color: '#6366f1', strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
                                Gerçek Proje Deneyimi
                            </div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
<iconify-icon icon="solar:check-read-linear" style={{color: '#6366f1', strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
                                Katılım Sertifikası
                            </div>
</div>
</div>
<div className="relative z-10 w-full md:w-auto flex-shrink-0 flex flex-col items-center md:items-end gap-3">
<a className="cursor-pointer w-full md:w-auto inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 px-8 py-4 rounded-xl transition-all shadow-lg shadow-gray-900/10 hover:shadow-gray-900/20" onclick="showPage('contact')">
                            Eğitim Detayları
                            <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<span className="text-xs text-gray-400">Kontenjan sınırlıdır</span>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="relative bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 rounded-3xl p-10 lg:p-16 text-center overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50"></div>
<div className="relative">
<h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">Dijital büyümenize bugün başlayın</h2>
<p className="mt-4 text-base text-indigo-100 max-w-xl mx-auto">Ücretsiz dijital analiz raporunuzu alın ve markanızın potansiyelini keşfedin.</p>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50 px-8 py-3.5 rounded-xl transition-all" onclick="showPage('contact')">
                                Ücretsiz Teklif Al
                                <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page" id="page-services">
<section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto">
<p className="text-sm font-medium text-indigo-500 mb-3">Hizmetlerimiz</p>
<h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-gray-900">Dijital pazarlamanın tüm alanlarında uzmanız</h1>
<p className="mt-5 text-lg text-gray-500 font-light">Veriye dayalı stratejilerle markanızı büyütüyor, ölçülebilir sonuçlar sunuyoruz.</p>
</div>
</div>
</section>

<section className="py-16 lg:py-24" id="seo">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div>
<div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full text-xs font-medium mb-6">
<iconify-icon icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                            SEO Optimizasyonu
                        </div>
<h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Arama motorlarında zirveye çıkın</h2>
<p className="mt-4 text-base text-gray-500 leading-relaxed">Teknik SEO, içerik stratejisi ve link building çalışmalarıyla web sitenizi arama motorlarının en üst sıralarına taşıyoruz.</p>
<div className="mt-8 space-y-4">
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon icon="solar:check-read-linear" style={{color: '#22c55e', strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Teknik SEO Audit</div>
<div className="text-sm text-gray-500">Site hızı, mobile uyumluluk, crawl hataları ve teknik sorunları tespit edip çözüyoruz.</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon icon="solar:check-read-linear" style={{color: '#22c55e', strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">İçerik Stratejisi</div>
<div className="text-sm text-gray-500">Anahtar kelime araştırması ve SEO uyumlu içerik planlaması yapıyoruz.</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon icon="solar:check-read-linear" style={{color: '#22c55e', strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Link Building</div>
<div className="text-sm text-gray-500">Kaliteli backlink profili oluşturarak domain otoritenizi güçlendiriyoruz.</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon icon="solar:check-read-linear" style={{color: '#22c55e', strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Aylık Raporlama</div>
<div className="text-sm text-gray-500">Detaylı performans raporları ile ilerlemenizi şeffaf şekilde takip edin.</div>
</div>
</div>
</div>
</div>
<div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-3xl p-8 lg:p-10">
<div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
<div className="flex items-center justify-between mb-6">
<span className="text-sm font-medium text-gray-900">Organik Trafik</span>
<span className="text-xs font-medium text-green-600 bg-green-50 px-2.5 py-1 rounded-full">+180%</span>
</div>
<div className="flex items-end gap-1.5 h-32">
<div className="flex-1 bg-indigo-100 rounded-t-md" style={{height: '20%'}}></div>
<div className="flex-1 bg-indigo-100 rounded-t-md" style={{height: '25%'}}></div>
<div className="flex-1 bg-indigo-200 rounded-t-md" style={{height: '35%'}}></div>
<div className="flex-1 bg-indigo-200 rounded-t-md" style={{height: '30%'}}></div>
<div className="flex-1 bg-indigo-300 rounded-t-md" style={{height: '50%'}}></div>
<div className="flex-1 bg-indigo-300 rounded-t-md" style={{height: '55%'}}></div>
<div className="flex-1 bg-indigo-400 rounded-t-md" style={{height: '65%'}}></div>
<div className="flex-1 bg-indigo-400 rounded-t-md" style={{height: '60%'}}></div>
<div className="flex-1 bg-indigo-500 rounded-t-md" style={{height: '80%'}}></div>
<div className="flex-1 bg-indigo-500 rounded-t-md" style={{height: '85%'}}></div>
<div className="flex-1 bg-indigo-600 rounded-t-md" style={{height: '90%'}}></div>
<div className="flex-1 bg-indigo-600 rounded-t-md" style={{height: '100%'}}></div>
</div>
<div className="flex items-center justify-between mt-3">
<span className="text-xs text-gray-400">Oca</span>
<span className="text-xs text-gray-400">Ara</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mt-4">
<div className="bg-white rounded-xl p-4 border border-gray-100">
<div className="text-2xl font-bold tracking-tight text-gray-900">1.2K</div>
<div className="text-xs text-gray-500 mt-1">Anahtar Kelime Top 10</div>
</div>
<div className="bg-white rounded-xl p-4 border border-gray-100">
<div className="text-2xl font-bold tracking-tight text-gray-900">62</div>
<div className="text-xs text-gray-500 mt-1">Domain Otorite</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-gray-50/50" id="google-ads">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="order-2 lg:order-1 bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-8 lg:p-10">
<div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-gray-900">Kampanya Performansı</span>
<span className="text-xs font-medium text-violet-600 bg-violet-50 px-2.5 py-1 rounded-full">Son 30 gün</span>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between">
<span className="text-xs text-gray-500">Gösterim</span>
<span className="text-sm font-semibold text-gray-900">2.4M</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5"><div className="bg-violet-500 h-1.5 rounded-full" style={{width: '92%'}}></div></div>
<div className="flex items-center justify-between">
<span className="text-xs text-gray-500">Tıklama</span>
<span className="text-sm font-semibold text-gray-900">184K</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5"><div className="bg-purple-500 h-1.5 rounded-full" style={{width: '76%'}}></div></div>
<div className="flex items-center justify-between">
<span className="text-xs text-gray-500">Dönüşüm</span>
<span className="text-sm font-semibold text-gray-900">12.8K</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5"><div className="bg-fuchsia-500 h-1.5 rounded-full" style={{width: '68%'}}></div></div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mt-4">
<div className="bg-white rounded-xl p-4 border border-gray-100">
<div className="text-2xl font-bold tracking-tight text-gray-900">₺4.2</div>
<div className="text-xs text-gray-500 mt-1">Ort. CPC</div>
</div>
<div className="bg-white rounded-xl p-4 border border-gray-100">
<div className="text-2xl font-bold tracking-tight text-gray-900">%7.6</div>
<div className="text-xs text-gray-500 mt-1">Dönüşüm Oranı</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 px-3 py-1.5 rounded-full text-xs font-medium mb-6">
<iconify-icon icon="solar:target-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                            Google Ads
                        </div>
<h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Reklam bütçenizden maksimum verim</h2>
<p className="mt-4 text-base text-gray-500 leading-relaxed">Google Arama, Alışveriş, Display ve YouTube reklamlarıyla hedef kitlenize ulaşın ve yüksek ROI elde edin.</p>
<div className="mt-8 space-y-4">
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon icon="solar:check-read-linear" style={{color: '#22c55e', strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Arama Ağı Reklamları</div>
<div className="text-sm text-gray-500">Satın alma niyeti yüksek kullanıcılara arama sonuçlarında ulaşın.</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon icon="solar:check-read-linear" style={{color: '#22c55e', strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Google Shopping</div>
<div className="text-sm text-gray-500">E-ticaret ürünlerinizi görsel reklamlarla öne çıkarın.</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon icon="solar:check-read-linear" style={{color: '#22c55e', strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Remarketing</div>
<div className="text-sm text-gray-500">Sitenizi ziyaret eden kullanıcıları yeniden hedefleyin.</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon icon="solar:check-read-linear" style={{color: '#22c55e', strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">A/B Test &amp; Optimizasyon</div>
<div className="text-sm text-gray-500">Sürekli test ve iyileştirmelerle en yüksek performansı sağlayın.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24" id="social-media">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div>
<div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-3 py-1.5 rounded-full text-xs font-medium mb-6">
<iconify-icon icon="solar:share-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                            Sosyal Medya Yönetimi
                        </div>
<h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Sosyal medyada fark yaratın</h2>
<p className="mt-4 text-base text-gray-500 leading-relaxed">Instagram, Facebook, LinkedIn, TikTok ve X platformlarında profesyonel içerik üretimi ve topluluk yönetimi yapıyoruz.</p>
<div className="mt-8 space-y-4">
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon icon="solar:check-read-linear" style={{color: '#22c55e', strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">İçerik Üretimi</div>
<div className="text-sm text-gray-500">Markanıza özel görsel ve metin içerikleri profesyonel ekibimizle üretiyoruz.</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon icon="solar:check-read-linear" style={{color: '#22c55e', strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Topluluk Yönetimi</div>
<div className="text-sm text-gray-500">Yorum, DM ve etkileşim yönetimi ile topluluğunuzu büyütüyoruz.</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon icon="solar:check-read-linear" style={{color: '#22c55e', strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Sosyal Medya Reklamları</div>
<div className="text-sm text-gray-500">Hedefli reklam kampanyaları ile doğru kitleye ulaşın.</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon icon="solar:check-read-linear" style={{color: '#22c55e', strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Influencer Marketing</div>
<div className="text-sm text-gray-500">Doğru influencer eşleştirmesiyle marka bilinirliğinizi artırın.</div>
</div>
</div>
</div>
</div>
<div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-3xl p-8 lg:p-10">
<div className="grid grid-cols-2 gap-4">
<div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
<div className="flex items-center gap-2 mb-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
<iconify-icon icon="solar:camera-linear" style={{color: 'white', strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-600">Instagram</span>
</div>
<div className="text-2xl font-bold tracking-tight text-gray-900">284K</div>
<div className="text-xs text-green-600 font-medium mt-1">+24% bu ay</div>
</div>
<div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
<div className="flex items-center gap-2 mb-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
<iconify-icon icon="solar:link-circle-linear" style={{color: 'white', strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-600">LinkedIn</span>
</div>
<div className="text-2xl font-bold tracking-tight text-gray-900">52K</div>
<div className="text-xs text-green-600 font-medium mt-1">+18% bu ay</div>
</div>
<div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
<div className="flex items-center gap-2 mb-3">
<div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center">
<iconify-icon icon="solar:music-note-linear" style={{color: 'white', strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-600">TikTok</span>
</div>
<div className="text-2xl font-bold tracking-tight text-gray-900">1.2M</div>
<div className="text-xs text-green-600 font-medium mt-1">+45% bu ay</div>
</div>
<div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
<div className="flex items-center gap-2 mb-3">
<div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
<iconify-icon icon="solar:chat-round-like-linear" style={{color: 'white', strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-600">Facebook</span>
</div>
<div className="text-2xl font-bold tracking-tight text-gray-900">128K</div>
<div className="text-xs text-green-600 font-medium mt-1">+12% bu ay</div>
</div>
</div>
<div className="mt-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-gray-900">Toplam Etkileşim</span>
<span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full">+32%</span>
</div>
<div className="text-3xl font-bold tracking-tight text-gray-900">4.8M</div>
<div className="text-xs text-gray-400 mt-1">Son 30 günde</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-gray-50/50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<p className="text-sm font-medium text-indigo-500 mb-3">Fiyatlandırma</p>
<h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">İhtiyacınıza uygun paketler</h2>
<p className="mt-4 text-base text-gray-500">Her bütçeye uygun çözümlerimizle dijital dönüşümünüzü başlatın.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
<div className="card-hover bg-white border border-gray-200 rounded-2xl p-8">
<div className="text-sm font-medium text-gray-500 mb-1">Başlangıç</div>
<div className="text-3xl font-bold tracking-tight text-gray-900">₺8.900<span className="text-base font-normal text-gray-400">/ay</span></div>
<p className="text-sm text-gray-500 mt-2">Küçük işletmeler için ideal başlangıç paketi.</p>
<div className="mt-6 space-y-3">
<div className="flex items-center gap-2 text-sm text-gray-600"><iconify-icon icon="solar:check-circle-linear" style={{color: '#6366f1', strokeWidth: '1.5'}} width="18"></iconify-icon>Temel SEO optimizasyonu</div>
<div className="flex items-center gap-2 text-sm text-gray-600"><iconify-icon icon="solar:check-circle-linear" style={{color: '#6366f1', strokeWidth: '1.5'}} width="18"></iconify-icon>2 sosyal medya hesabı</div>
<div className="flex items-center gap-2 text-sm text-gray-600"><iconify-icon icon="solar:check-circle-linear" style={{color: '#6366f1', strokeWidth: '1.5'}} width="18"></iconify-icon>Aylık 12 içerik</div>
<div className="flex items-center gap-2 text-sm text-gray-600"><iconify-icon icon="solar:check-circle-linear" style={{color: '#6366f1', strokeWidth: '1.5'}} width="18"></iconify-icon>Aylık rapor</div>
</div>
<a className="cursor-pointer mt-8 w-full inline-flex items-center justify-center text-sm font-medium border border-gray-200 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-xl transition-all" onclick="showPage('contact')">Teklif Al</a>
</div>
<div className="card-hover bg-gradient-to-b from-indigo-600 to-violet-600 border border-indigo-500 rounded-2xl p-8 relative shadow-xl shadow-indigo-500/20">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">Popüler</div>
<div className="text-sm font-medium text-indigo-200 mb-1">Profesyonel</div>
<div className="text-3xl font-bold tracking-tight text-white">₺18.900<span className="text-base font-normal text-indigo-200">/ay</span></div>
<p className="text-sm text-indigo-200 mt-2">Hızlı büyümek isteyen firmalar için.</p>
<div className="mt-6 space-y-3">
<div className="flex items-center gap-2 text-sm text-indigo-100"><iconify-icon icon="solar:check-circle-linear" style={{color: 'white', strokeWidth: '1.5'}} width="18"></iconify-icon>Kapsamlı SEO çalışması</div>
<div className="flex items-center gap-2 text-sm text-indigo-100"><iconify-icon icon="solar:check-circle-linear" style={{color: 'white', strokeWidth: '1.5'}} width="18"></iconify-icon>Google Ads yönetimi</div>
<div className="flex items-center gap-2 text-sm text-indigo-100"><iconify-icon icon="solar:check-circle-linear" style={{color: 'white', strokeWidth: '1.5'}} width="18"></iconify-icon>4 sosyal medya hesabı</div>
<div className="flex items-center gap-2 text-sm text-indigo-100"><iconify-icon icon="solar:check-circle-linear" style={{color: 'white', strokeWidth: '1.5'}} width="18"></iconify-icon>Aylık 24 içerik</div>
<div className="flex items-center gap-2 text-sm text-indigo-100"><iconify-icon icon="solar:check-circle-linear" style={{color: 'white', strokeWidth: '1.5'}} width="18"></iconify-icon>Haftalık rapor</div>
</div>
<a className="cursor-pointer mt-8 w-full inline-flex items-center justify-center text-sm font-medium bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-xl transition-all" onclick="showPage('contact')">Teklif Al</a>
</div>
<div className="card-hover bg-white border border-gray-200 rounded-2xl p-8">
<div className="text-sm font-medium text-gray-500 mb-1">Kurumsal</div>
<div className="text-3xl font-bold tracking-tight text-gray-900">Özel<span className="text-base font-normal text-gray-400"> fiyat</span></div>
<p className="text-sm text-gray-500 mt-2">Büyük ölçekli projeler için özel çözümler.</p>
<div className="mt-6 space-y-3">
<div className="flex items-center gap-2 text-sm text-gray-600"><iconify-icon icon="solar:check-circle-linear" style={{color: '#6366f1', strokeWidth: '1.5'}} width="18"></iconify-icon>Tüm hizmetler dahil</div>
<div className="flex items-center gap-2 text-sm text-gray-600"><iconify-icon icon="solar:check-circle-linear" style={{color: '#6366f1', strokeWidth: '1.5'}} width="18"></iconify-icon>Özel hesap yöneticisi</div>
<div className="flex items-center gap-2 text-sm text-gray-600"><iconify-icon icon="solar:check-circle-linear" style={{color: '#6366f1', strokeWidth: '1.5'}} width="18"></iconify-icon>Sınırsız içerik</div>
<div className="flex items-center gap-2 text-sm text-gray-600"><iconify-icon icon="solar:check-circle-linear" style={{color: '#6366f1', strokeWidth: '1.5'}} width="18"></iconify-icon>7/24 destek</div>
<div className="flex items-center gap-2 text-sm text-gray-600"><iconify-icon icon="solar:check-circle-linear" style={{color: '#6366f1', strokeWidth: '1.5'}} width="18"></iconify-icon>Özel strateji toplantıları</div>
</div>
<a className="cursor-pointer mt-8 w-full inline-flex items-center justify-center text-sm font-medium border border-gray-200 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-xl transition-all" onclick="showPage('contact')">İletişime Geç</a>
</div>
</div>
</div>
</section>
</div>

<div className="page" id="page-references">
<section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto">
<p className="text-sm font-medium text-indigo-500 mb-3">Referanslar</p>
<h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-gray-900">Başarı hikayeleri</h1>
<p className="mt-5 text-lg text-gray-500 font-light">250+ markanın dijital büyüme hikayesinin arkasındaki güç olmanın gururunu yaşıyoruz.</p>
</div>
</div>
</section>

<section className="pb-20">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-6">
<div className="card-hover bg-white border border-gray-100 rounded-2xl overflow-hidden">
<div className="bg-gradient-to-br from-indigo-50 to-violet-50 p-8 lg:p-10">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-xl font-bold tracking-tight text-indigo-600">TV</div>
<div>
<div className="font-semibold text-gray-900">TechVista</div>
<div className="text-xs text-gray-500">Teknoloji / SaaS</div>
</div>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="bg-white/80 rounded-xl p-4 text-center">
<div className="text-2xl font-bold tracking-tight text-indigo-600">+320%</div>
<div className="text-xs text-gray-500 mt-1">Organik Trafik</div>
</div>
<div className="bg-white/80 rounded-xl p-4 text-center">
<div className="text-2xl font-bold tracking-tight text-indigo-600">+180%</div>
<div className="text-xs text-gray-500 mt-1">Lead Artışı</div>
</div>
<div className="bg-white/80 rounded-xl p-4 text-center">
<div className="text-2xl font-bold tracking-tight text-indigo-600">-45%</div>
<div className="text-xs text-gray-500 mt-1">CPA Düşüşü</div>
</div>
</div>
</div>
<div className="p-8">
<p className="text-sm text-gray-600 leading-relaxed">"6 aylık SEO ve Google Ads çalışmamız sonucunda TechVista'nın B2B lead sayısı %180 artarken, müşteri edinme maliyeti %45 düştü."</p>
<div className="mt-4 flex gap-2">
<span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">SEO</span>
<span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">Google Ads</span>
<span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">İçerik Pazarlama</span>
</div>
</div>
</div>
<div className="card-hover bg-white border border-gray-100 rounded-2xl overflow-hidden">
<div className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 lg:p-10">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-xl font-bold tracking-tight text-violet-600">MC</div>
<div>
<div className="font-semibold text-gray-900">ModaCo</div>
<div className="text-xs text-gray-500">E-Ticaret / Moda</div>
</div>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="bg-white/80 rounded-xl p-4 text-center">
<div className="text-2xl font-bold tracking-tight text-violet-600">+410%</div>
<div className="text-xs text-gray-500 mt-1">ROAS</div>
</div>
<div className="bg-white/80 rounded-xl p-4 text-center">
<div className="text-2xl font-bold tracking-tight text-violet-600">+250%</div>
<div className="text-xs text-gray-500 mt-1">Gelir Artışı</div>
</div>
<div className="bg-white/80 rounded-xl p-4 text-center">
<div className="text-2xl font-bold tracking-tight text-violet-600">85K</div>
<div className="text-xs text-gray-500 mt-1">Yeni Müşteri</div>
</div>
</div>
</div>
<div className="p-8">
<p className="text-sm text-gray-600 leading-relaxed">"Google Shopping ve sosyal medya reklamlarıyla ModaCo'nun online satışlarını 3.5 kat artırdık. ROAS %410'a ulaştı."</p>
<div className="mt-4 flex gap-2">
<span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">Google Ads</span>
<span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">Sosyal Medya</span>
</div>
</div>
</div>
<div className="card-hover bg-white border border-gray-100 rounded-2xl overflow-hidden">
<div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 lg:p-10">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-xl font-bold tracking-tight text-green-600">GE</div>
<div>
<div className="font-semibold text-gray-900">GreenEnergy</div>
<div className="text-xs text-gray-500">Enerji / Sürdürülebilirlik</div>
</div>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="bg-white/80 rounded-xl p-4 text-center">
<div className="text-2xl font-bold tracking-tight text-green-600">Top 3</div>
<div className="text-xs text-gray-500 mt-1">SEO Sıralama</div>
</div>
<div className="bg-white/80 rounded-xl p-4 text-center">
<div className="text-2xl font-bold tracking-tight text-green-600">+520%</div>
<div className="text-xs text-gray-500 mt-1">Web Trafiği</div>
</div>
<div className="bg-white/80 rounded-xl p-4 text-center">
<div className="text-2xl font-bold tracking-tight text-green-600">+200%</div>
<div className="text-xs text-gray-500 mt-1">Form Dolumu</div>
</div>
</div>
</div>
<div className="p-8">
<p className="text-sm text-gray-600 leading-relaxed">"Güneş enerjisi sektöründe en rekabetçi anahtar kelimelerde top 3 sıralama elde ettik. Web trafiği %520 arttı."</p>
<div className="mt-4 flex gap-2">
<span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">SEO</span>
<span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">İçerik Stratejisi</span>
</div>
</div>
</div>
<div className="card-hover bg-white border border-gray-100 rounded-2xl overflow-hidden">
<div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 lg:p-10">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-xl font-bold tracking-tight text-orange-600">FK</div>
<div>
<div className="font-semibold text-gray-900">FoodKing</div>
<div className="text-xs text-gray-500">Yiyecek &amp; İçecek</div>
</div>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="bg-white/80 rounded-xl p-4 text-center">
<div className="text-2xl font-bold tracking-tight text-orange-600">500K</div>
<div className="text-xs text-gray-500 mt-1">Takipçi</div>
</div>
<div className="bg-white/80 rounded-xl p-4 text-center">
<div className="text-2xl font-bold tracking-tight text-orange-600">%8.4</div>
<div className="text-xs text-gray-500 mt-1">Etkileşim Oranı</div>
</div>
<div className="bg-white/80 rounded-xl p-4 text-center">
<div className="text-2xl font-bold tracking-tight text-orange-600">2M</div>
<div className="text-xs text-gray-500 mt-1">Aylık Erişim</div>
</div>
</div>
</div>
<div className="p-8">
<p className="text-sm text-gray-600 leading-relaxed">"Sosyal medya stratejimizle FoodKing'in Instagram takipçi sayısı 50K'dan 500K'ya, etkileşim oranı ise sektör ortalamasının 3 katına çıktı."</p>
<div className="mt-4 flex gap-2">
<span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">Sosyal Medya</span>
<span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">İçerik Üretimi</span>
<span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">Influencer</span>
</div>
</div>
</div>
</div>

<div className="mt-20 text-center">
<p className="text-sm font-medium text-gray-400 mb-8">Ve daha birçok marka...</p>
<div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
<span className="text-xl font-bold tracking-tight text-gray-200">HealthPlus</span>
<span className="text-xl font-bold tracking-tight text-gray-200">FinanceHub</span>
<span className="text-xl font-bold tracking-tight text-gray-200">EduSmart</span>
<span className="text-xl font-bold tracking-tight text-gray-200">AutoDrive</span>
<span className="text-xl font-bold tracking-tight text-gray-200">PetWorld</span>
<span className="text-xl font-bold tracking-tight text-gray-200">TravelX</span>
<span className="text-xl font-bold tracking-tight text-gray-200">StyleHouse</span>
<span className="text-xl font-bold tracking-tight text-gray-200">DataCore</span>
</div>
</div>
</div>
</section>
</div>

<div className="page" id="page-blog">
<section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto">
<p className="text-sm font-medium text-indigo-500 mb-3">Blog</p>
<h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-gray-900">Dijital pazarlama dünyasından içgörüler</h1>
<p className="mt-5 text-lg text-gray-500 font-light">Sektör trendleri, stratejiler ve uzman görüşlerini paylaşıyoruz.</p>
</div>
</div>
</section>

<section className="pb-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="card-hover bg-gradient-to-br from-indigo-50 to-violet-50 rounded-3xl overflow-hidden cursor-pointer">
<div className="grid lg:grid-cols-2 gap-0">
<div className="p-8 lg:p-12 flex flex-col justify-center">
<div className="flex items-center gap-2 mb-4">
<span className="text-xs font-medium text-indigo-600 bg-indigo-100 px-2.5 py-1 rounded-full">Öne Çıkan</span>
<span className="text-xs text-gray-500">15 Ocak 2025</span>
</div>
<h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-gray-900">2025'te SEO: Yapay Zeka Çağında Arama Motoru Optimizasyonu</h2>
<p className="mt-4 text-base text-gray-600 leading-relaxed">Google'ın AI destekli arama deneyimi, SEO stratejilerini kökten değiştiriyor. 2025'te organik trafiğinizi artırmak için bilmeniz gereken her şey.</p>
<div className="mt-6 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-700 font-semibold text-xs">EÖ</div>
<div>
<div className="text-sm font-medium text-gray-900">Emre Özdemir</div>
<div className="text-xs text-gray-500">SEO Uzmanı · 8 dk okuma</div>
</div>
</div>
</div>
<div className="bg-gradient-to-br from-indigo-100 to-violet-100 min-h-64 flex items-center justify-center">
<iconify-icon icon="solar:magnifer-linear" style={{color: 'rgba(99,102,241,0.3)', strokeWidth: '1.5'}} width="80"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="pb-20">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<article className="card-hover bg-white border border-gray-100 rounded-2xl overflow-hidden cursor-pointer">
<div className="bg-gradient-to-br from-violet-50 to-purple-50 h-48 flex items-center justify-center">
<iconify-icon icon="solar:target-linear" style={{color: 'rgba(139,92,246,0.4)', strokeWidth: '1.5'}} width="48"></iconify-icon>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="text-xs font-medium text-violet-600 bg-violet-50 px-2 py-0.5 rounded-full">Google Ads</span>
<span className="text-xs text-gray-400">10 Ocak 2025</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 leading-snug">Performance Max Kampanyaları: Bilmeniz Gereken 10 Strateji</h3>
<p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2">Google'ın en güçlü kampanya türü Performance Max ile ROAS'ınızı nasıl maksimize edebilirsiniz?</p>
<div className="mt-4 text-sm font-medium text-indigo-500 flex items-center gap-1">
                                Devamını Oku
                                <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
</div>
</article>
<article className="card-hover bg-white border border-gray-100 rounded-2xl overflow-hidden cursor-pointer">
<div className="bg-gradient-to-br from-pink-50 to-rose-50 h-48 flex items-center justify-center">
<iconify-icon icon="solar:share-circle-linear" style={{color: 'rgba(236,72,153,0.4)', strokeWidth: '1.5'}} width="48"></iconify-icon>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="text-xs font-medium text-pink-600 bg-pink-50 px-2 py-0.5 rounded-full">Sosyal Medya</span>
<span className="text-xs text-gray-400">5 Ocak 2025</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 leading-snug">Instagram Reels Algoritması: 2025 Güncelleme Rehberi</h3>
<p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2">Yeni algoritma değişiklikleriyle Reels içeriklerinizin erişimini nasıl artırabilirsiniz?</p>
<div className="mt-4 text-sm font-medium text-indigo-500 flex items-center gap-1">
                                Devamını Oku
                                <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
</div>
</article>
<article className="card-hover bg-white border border-gray-100 rounded-2xl overflow-hidden cursor-pointer">
<div className="bg-gradient-to-br from-emerald-50 to-teal-50 h-48 flex items-center justify-center">
<iconify-icon icon="solar:chart-2-linear" style={{color: 'rgba(16,185,129,0.4)', strokeWidth: '1.5'}} width="48"></iconify-icon>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Analitik</span>
<span className="text-xs text-gray-400">28 Aralık 2024</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 leading-snug">GA4 ile Gelişmiş Dönüşüm Takibi Nasıl Yapılır?</h3>
<p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2">Google Analytics 4'ün gelişmiş özelliklerini kullanarak dönüşüm hunisini optimize edin.</p>
<div className="mt-4 text-sm font-medium text-indigo-500 flex items-center gap-1">
                                Devamını Oku
                                <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
</div>
</article>
<article className="card-hover bg-white border border-gray-100 rounded-2xl overflow-hidden cursor-pointer">
<div className="bg-gradient-to-br from-blue-50 to-cyan-50 h-48 flex items-center justify-center">
<iconify-icon icon="solar:link-minimalistic-2-linear" style={{color: 'rgba(59,130,246,0.4)', strokeWidth: '1.5'}} width="48"></iconify-icon>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">SEO</span>
<span className="text-xs text-gray-400">20 Aralık 2024</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 leading-snug">Backlink Stratejisi: Kaliteli Link Kazanmanın Modern Yolları</h3>
<p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2">Doğal ve kaliteli backlink profili oluşturmak için güncel stratejiler ve ipuçları.</p>
<div className="mt-4 text-sm font-medium text-indigo-500 flex items-center gap-1">
                                Devamını Oku
                                <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
</div>
</article>
<article className="card-hover bg-white border border-gray-100 rounded-2xl overflow-hidden cursor-pointer">
<div className="bg-gradient-to-br from-amber-50 to-orange-50 h-48 flex items-center justify-center">
<iconify-icon icon="solar:pen-new-round-linear" style={{color: 'rgba(245,158,11,0.4)', strokeWidth: '1.5'}} width="48"></iconify-icon>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">İçerik</span>
<span className="text-xs text-gray-400">15 Aralık 2024</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 leading-snug">Dönüşüm Odaklı İçerik Yazımı: Pratik Rehber</h3>
<p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2">Satış hunisinin her aşaması için etkili içerik yazma teknikleri ve örnekler.</p>
<div className="mt-4 text-sm font-medium text-indigo-500 flex items-center gap-1">
                                Devamını Oku
                                <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
</div>
</article>
<article className="card-hover bg-white border border-gray-100 rounded-2xl overflow-hidden cursor-pointer">
<div className="bg-gradient-to-br from-red-50 to-pink-50 h-48 flex items-center justify-center">
<iconify-icon icon="solar:play-circle-linear" style={{color: 'rgba(239,68,68,0.4)', strokeWidth: '1.5'}} width="48"></iconify-icon>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-0.5 rounded-full">Video</span>
<span className="text-xs text-gray-400">8 Aralık 2024</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 leading-snug">YouTube Shorts vs TikTok: Hangisi Daha Etkili?</h3>
<p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2">Kısa form video platformlarının karşılaştırması ve markanız için doğru strateji.</p>
<div className="mt-4 text-sm font-medium text-indigo-500 flex items-center gap-1">
                                Devamını Oku
                                <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
</div>
</article>
</div>
</div>
</section>
</div>

<div className="page" id="page-contact">
<section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<p className="text-sm font-medium text-indigo-500 mb-3">İletişim</p>
<h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-gray-900">Projenizi birlikte büyütelim</h1>
<p className="mt-5 text-lg text-gray-500 font-light">Ücretsiz dijital analiz raporunuzu almak için formu doldurun, 24 saat içinde dönüş yapalım.</p>
</div>
<div className="grid lg:grid-cols-5 gap-12">

<div className="lg:col-span-2 space-y-6">
<div className="bg-gray-50 rounded-2xl p-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
<iconify-icon icon="solar:phone-linear" style={{color: '#6366f1', strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Telefon</div>
<div className="text-sm text-gray-500">+90 (212) 555 0199</div>
</div>
</div>
</div>
<div className="bg-gray-50 rounded-2xl p-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
<iconify-icon icon="solar:letter-linear" style={{color: '#6366f1', strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">E-posta</div>
<div className="text-sm text-gray-500">info@orbita.digital</div>
</div>
</div>
</div>
<div className="bg-gray-50 rounded-2xl p-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
<iconify-icon icon="solar:map-point-linear" style={{color: '#6366f1', strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Adres</div>
<div className="text-sm text-gray-500">Levent, Büyükdere Cad. No:185<br/>Şişli / İstanbul</div>
</div>
</div>
</div>
<div className="bg-gray-50 rounded-2xl p-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
<iconify-icon icon="solar:clock-circle-linear" style={{color: '#6366f1', strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Çalışma Saatleri</div>
<div className="text-sm text-gray-500">Pazartesi - Cuma: 09:00 - 18:00</div>
</div>
</div>
</div>
<div className="flex items-center gap-3 pt-4">
<a className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-indigo-50 flex items-center justify-center transition-colors" href="#">
<iconify-icon icon="solar:chat-round-like-linear" style={{color: '#6366f1', strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-indigo-50 flex items-center justify-center transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" style={{color: '#6366f1', strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-indigo-50 flex items-center justify-center transition-colors" href="#">
<iconify-icon icon="solar:link-circle-linear" style={{color: '#6366f1', strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-indigo-50 flex items-center justify-center transition-colors" href="#">
<iconify-icon icon="solar:music-note-linear" style={{color: '#6366f1', strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>

<div className="lg:col-span-3">
<form className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-10" id="contactForm" onsubmit="handleSubmit(event)">
<div className="grid sm:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Ad Soyad</label>
<input className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all" placeholder="Adınız Soyadınız" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Şirket</label>
<input className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all" placeholder="Şirket Adı" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">E-posta</label>
<input className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all" placeholder="ornek@sirket.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
<input className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all" placeholder="+90 (5XX) XXX XXXX" type="tel"/>
</div>
</div>
<div className="mt-5">
<label className="block text-sm font-medium text-gray-700 mb-2">İlgilendiğiniz Hizmet</label>
<div className="relative">
<select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 appearance-none bg-white cursor-pointer transition-all focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10">
<option value="">Seçiniz</option>
<option value="seo">SEO Optimizasyonu</option>
<option value="google-ads">Google Ads Yönetimi</option>
<option value="social-media">Sosyal Medya Yönetimi</option>
<option value="seo-egitimi">SEO Eğitimi</option>
<option value="all">Tüm Hizmetler</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{color: '#9ca3af', strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
</div>
<div className="mt-5">
<label className="block text-sm font-medium text-gray-700 mb-2">Aylık Bütçeniz</label>
<div className="relative">
<select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 appearance-none bg-white cursor-pointer transition-all focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10">
<option value="">Seçiniz</option>
<option value="5k-10k">₺5.000 - ₺10.000</option>
<option value="10k-25k">₺10.000 - ₺25.000</option>
<option value="25k-50k">₺25.000 - ₺50.000</option>
<option value="50k+">₺50.000+</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{color: '#9ca3af', strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
</div>
<div className="mt-5">
<label className="block text-sm font-medium text-gray-700 mb-2">Mesajınız</label>
<textarea className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all resize-none" placeholder="Projeniz hakkında kısaca bilgi verin..." rows="4"></textarea>
</div>
<button className="mt-6 w-full inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30" id="submitBtn" type="submit">
                                Teklif Talep Et
                                <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<div className="hidden mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-sm text-green-700 text-center" id="successMsg">
<iconify-icon className="mr-1" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                                Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağız.
                            </div>
</form>
</div>
</div>
</div>
</section>
</div>

<footer className="bg-gray-950 text-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 rounded-lg gradient-border flex items-center justify-center">
<span className="text-white font-semibold text-sm">O</span>
</div>
<span className="font-semibold text-lg tracking-tight text-white">orbita</span>
</div>
<p className="text-sm text-gray-400 leading-relaxed">Veriye dayalı dijital pazarlama stratejileri ile markanızı büyütüyoruz.</p>
<div className="flex items-center gap-3 mt-6">
<a className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors" href="#">
<iconify-icon icon="solar:chat-round-like-linear" style={{color: '#a1a1aa', strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" style={{color: '#a1a1aa', strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors" href="#">
<iconify-icon icon="solar:link-circle-linear" style={{color: '#a1a1aa', strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-semibold text-sm text-white mb-4">Hizmetler</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-400 hover:text-white cursor-pointer transition-colors" onclick="showPage('services')">SEO Optimizasyonu</a></li>
<li><a className="text-sm text-gray-400 hover:text-white cursor-pointer transition-colors" onclick="showPage('services')">Google Ads</a></li>
<li><a className="text-sm text-gray-400 hover:text-white cursor-pointer transition-colors" onclick="showPage('services')">Sosyal Medya</a></li>
<li><a className="text-sm text-gray-400 hover:text-white cursor-pointer transition-colors" onclick="showPage('services')">İçerik Pazarlama</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm text-white mb-4">Şirket</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-400 hover:text-white cursor-pointer transition-colors" onclick="showPage('home')">Hakkımızda</a></li>
<li><a className="text-sm text-gray-400 hover:text-white cursor-pointer transition-colors" onclick="showPage('references')">Referanslar</a></li>
<li><a className="text-sm text-gray-400 hover:text-white cursor-pointer transition-colors" onclick="showPage('blog')">Blog</a></li>
<li><a className="text-sm text-gray-400 hover:text-white cursor-pointer transition-colors" onclick="showPage('contact')">İletişim</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm text-white mb-4">İletişim</h4>
<ul className="space-y-3">
<li className="text-sm text-gray-400">+90 (212) 555 0199</li>
<li className="text-sm text-gray-400">info@orbita.digital</li>
<li className="text-sm text-gray-400">Levent, Şişli / İstanbul</li>
</ul>
</div>
</div>
<div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-500">© 2025 Orbita Dijital. Tüm hakları saklıdır.</p>
<div className="flex items-center gap-6">
<a className="text-xs text-gray-500 hover:text-gray-300 transition-colors" href="#">Gizlilik Politikası</a>
</div></div></div></footer>
    </>
  );
}
