import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<span className="font-semibold text-sm tracking-tighter">S</span>
</div>
<div className="flex flex-col">
<span className="text-slate-900 font-semibold tracking-tight leading-none text-base group-hover:opacity-80 transition-opacity">
              SKD
            </span>
<span className="text-slate-400 text-xs tracking-widest font-medium uppercase leading-none mt-0.5">
              Safety &amp; Performance
            </span>
</div>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors" href="#">
            Ana Sayfa
          </a>
<div className="relative group h-20 flex items-center">
<button className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
              Hakkımızda
              <iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</button>

<div className="absolute top-full left-0 w-48 bg-white border border-slate-100 shadow-lg rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2">
<a className="block px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors" href="#">
                Uzmanlık
              </a>
<a className="block px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors" href="#">
                Kalite &amp; Güven
              </a>
</div>
</div>
<div className="relative group h-20 flex items-center">
<button className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
              Test Hizmetleri
              <iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</button>

<div className="absolute top-full left-0 w-56 bg-white border border-slate-100 shadow-lg rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2">
<a className="block px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors" href="#">
                Yıkayıcı Cihazlar
              </a>
<a className="block px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors" href="#">
                Soğutucu Cihazlar
              </a>
<a className="block px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors" href="#">
                Pişirici Cihazlar
              </a>
<a className="block px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors" href="#">
                Safety Laboratuvarı
              </a>
</div>
</div>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">
            İletişim
          </a>
</nav>

<div className="hidden md:flex items-center gap-4">
<button className="text-slate-400 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
<div className="h-4 w-px bg-slate-200"></div>
<a className="text-xs font-semibold text-slate-900 tracking-tight" href="#">
            EN
          </a>
</div>

<label className="md:hidden p-2 text-slate-600 cursor-pointer" htmlFor="mobile-menu-toggle">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</label>
<input className="hidden" id="mobile-menu-toggle" type="checkbox"/>
</div>

<div className="hidden md:hidden bg-white border-t border-slate-100 absolute w-full left-0 h-screen overflow-y-auto pb-20" id="mobile-menu">
<div className="p-6 flex flex-col gap-6">
<a className="text-lg font-medium text-slate-900" href="#">Ana Sayfa</a>
<details className="group">
<summary className="flex justify-between items-center text-lg font-medium text-slate-600 list-none cursor-pointer">
              Hakkımızda
              <iconify-icon className="transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="pl-4 mt-4 flex flex-col gap-3 border-l border-slate-100 ml-1">
<a className="text-base text-slate-500" href="#">Uzmanlık</a>
<a className="text-base text-slate-500" href="#">
                Kalite &amp; Güven
              </a>
</div>
</details>
<details className="group">
<summary className="flex justify-between items-center text-lg font-medium text-slate-600 list-none cursor-pointer">
              Laboratuvarlarımız
              <iconify-icon className="transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="pl-4 mt-4 flex flex-col gap-3 border-l border-slate-100 ml-1">
<a className="text-base text-slate-500" href="#">Yıkayıcı Cihazlar</a>
<a className="text-base text-slate-500" href="#">Soğutucu Cihazlar</a>
<a className="text-base text-slate-500" href="#">Pişirici Cihazlar</a>
<a className="text-base text-slate-500" href="#">
                Safety Laboratuvarı
              </a>
</div>
</details>
<a className="text-lg font-medium text-slate-600" href="#">İletişim</a>
<a className="text-lg font-medium text-slate-900 mt-4" href="#">EN</a>
</div>
</div>
</header>

<main className="pt-20">

<section className="relative py-24 lg:py-32 overflow-hidden">

<div className="absolute inset-0 z-0">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] opacity-60"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl">
<div className="flex items-center gap-2 mb-6">
<span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">
                Endüstriyel Test ve Belgelendirme
              </span>
</div>
<h1 className="text-5xl lg:text-7xl font-medium text-slate-900 tracking-tight leading-[1.1] mb-8">
              Global Standartlarda
              <br className="hidden lg:block"/>
              Güvenlik ve Performans
            </h1>
<p className="text-lg lg:text-xl text-slate-500 leading-relaxed max-w-2xl mb-10 font-light">
              Ürünlerinizin güvenliğini, enerji verimliliğini ve performansını
              uluslararası normlara (IEC/EN) uygun olarak doğruluyor,
              sertifikasyon süreçlerinize hız ve güven katıyoruz.
            </p>
<div className="flex flex-wrap items-center gap-4">
<a className="h-12 px-6 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium flex items-center gap-2 transition-all" href="#">
                Test Hizmetlerini İnceleyin
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="h-12 px-6 rounded-full bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-sm font-medium flex items-center transition-all" href="#">
                Teklif Alın
              </a>
</div>
</div>
</div>
</section>

<section className="px-6 pb-24">
<div className="max-w-7xl mx-auto">
<div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-200/50 bg-slate-100 aspect-[2/1] lg:aspect-[2.4/1]">

<img alt="SKD Laboratory Interior" className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
<p className="text-xs font-medium tracking-widest uppercase opacity-80 mb-2">
                Teknoloji ve Altyapı
              </p>
<p className="text-2xl md:text-3xl font-medium tracking-tight">
                Hassas Ölçüm ve İleri Güvenlik Analizleri
              </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
<div>
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-3">
                Test ve Analiz Çözümlerimiz
              </h2>
<p className="text-slate-500 max-w-md">
                Endüstriyel cihazlar için sunduğumuz kapsamlı performans ve
                güvenlik testleri.
              </p>
</div>
<a className="text-sm font-medium text-slate-900 hover:text-blue-600 flex items-center gap-1 transition-colors" href="#">
              Tümünü Görüntüle
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300" href="#">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:washing-machine-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                Yıkama Performans Testleri
              </h3>
<p className="text-sm text-slate-500 leading-relaxed">
                EN/IEC standartlarına uygun yıkama, durulama ve kurutma
                performansı analizleri.
              </p>
</a>

<a className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300" href="#">
<div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:snowflake-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                Enerji ve Soğutma Analizleri
              </h3>
<p className="text-sm text-slate-500 leading-relaxed">
                Enerji tüketimi, sıcaklık kararlılığı ve iklim sınıfı doğrulama
                testleri.
              </p>
</a>

<a className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300" href="#">
<div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:flame-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                Pişirme ve Isıl Güvenlik
              </h3>
<p className="text-sm text-slate-500 leading-relaxed">
                Isı dağılımı, pişirme homojenliği ve yüzey ısınma/güvenlik
                testleri.
              </p>
</a>

<a className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300" href="#">
<div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                LVD ve Mekanik Güvenlik
              </h3>
<p className="text-sm text-slate-500 leading-relaxed">
                Elektriksel güvenlik (LVD), kaçak akım, izolasyon ve mekanik
                dayanıklılık testleri.
              </p>
</a>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

<div className="lg:col-span-4">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
<span className="font-bold text-xs">S</span>
</div>
<span className="text-slate-900 font-semibold tracking-tight text-sm">
                SAFETY PERFORMANCE LAB
              </span>
</a>
<div className="flex flex-col gap-4">
<div className="flex gap-3 items-start">
<iconify-icon className="text-slate-400 mt-1 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<p className="text-sm text-slate-500 leading-relaxed">
                  Kemalpaşa OSB 9. Sk. No:13/1,
                  <br/>
                  35730 Kemalpaşa, İzmir
                </p>
</div>
<div className="flex gap-3 items-center">
<iconify-icon className="text-slate-400 shrink-0" icon="solar:letter-linear"></iconify-icon>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="mailto:ik@sk-design.com.tr">
                  ik@sk-design.com.tr
                </a>
</div>
<div className="flex gap-3 items-center">
<iconify-icon className="text-slate-400 shrink-0" icon="solar:phone-calling-linear"></iconify-icon>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="tel:+902325035665">
                  +90 232 503 56 65
                </a>
</div>
</div>
</div>

<div className="lg:col-span-2 lg:col-start-7">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-6">
              Kurumsal
            </h4>
<ul className="flex flex-col gap-3">
<li>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
                  Hakkımızda
                </a>
</li>
<li>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
                  Uzmanlık
                </a>
</li>
<li>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
                  Kalite Politikası
                </a>
</li>
</ul>
</div>

<div className="lg:col-span-2">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-6">
              Laboratuvar
            </h4>
<ul className="flex flex-col gap-3">
<li>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
                  Yıkayıcılar
                </a>
</li>
<li>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
                  Soğutucular
                </a>
</li>
<li>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
                  Pişiriciler
                </a>
</li>
<li>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
                  Güvenlik (Safety)
                </a>
</li>
</ul>
</div>

<div className="lg:col-span-2">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-6">
              Yasal
            </h4>
<ul className="flex flex-col gap-3">
<li>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
                  KVKK Politikası
                </a>
</li>
<li>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
                  Çerez Politikası
                </a>
</li>
<li>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
                  İletişim
                </a>
</li>
</ul>
</div>
</div>

<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-400">
            © 2024 Smart Kitchen Tasarım A.Ş. Tüm Hakları Saklıdır.
          </p>
<div className="flex items-center gap-4">
<a className="text-slate-400 hover:text-[#0077b5] transition-colors" href="https://www.linkedin.com/company/smartkitchendesign" target="_blank">
<span className="sr-only">LinkedIn</span>
<iconify-icon icon="solar:ufo-3-bold-duotone" style={{display: 'none'}} width="20"></iconify-icon>

<svg fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
</svg>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
