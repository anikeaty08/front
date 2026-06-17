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
      

<nav className="fixed top-0 z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
<a className="flex items-center gap-2" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white">
<span className="font-semibold tracking-tighter text-sm">K</span>
</div>
<span className="text-lg font-semibold tracking-tight text-zinc-900">kaganai</span>
</a>
<div className="hidden items-center gap-8 md:flex">
<a className="text-sm font-medium text-zinc-500 transition hover:text-zinc-900" href="#">Çözümler</a>
<a className="text-sm font-medium text-zinc-500 transition hover:text-zinc-900" href="#">Referanslar</a>
<a className="text-sm font-medium text-zinc-500 transition hover:text-zinc-900" href="#">Fiyatlandırma</a>
<a className="text-sm font-medium text-zinc-900" href="#">Kaynaklar</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden text-sm font-medium text-zinc-900 md:block" href="#">Giriş Yap</a>
<a className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800" href="#">
                    Ücretsiz Dene
                </a>
</div>
</div>
</nav>
<main className="pt-32 pb-24">

<div className="mx-auto max-w-7xl px-6 text-center">
<h1 className="mb-6 text-5xl font-medium tracking-tight text-zinc-900 md:text-6xl lg:text-7xl">
                KAYNAKLAR
            </h1>
<p className="mx-auto max-w-2xl text-lg font-light text-zinc-500 leading-relaxed">
                Yapay zeka destekli teşvik motorumuz hakkında bilmeniz gereken her şey. KOSGEB, TÜBİTAK ve Ticaret Bakanlığı desteklerine en hızlı erişim rehberi.
            </p>
</div>

<div className="mx-auto mt-20 max-w-7xl px-6">
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

<a className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition duration-300 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-100/50" href="#roi">
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-50 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-semibold tracking-tight text-zinc-900">Yatırım Getirisi (ROI)</h3>
<p className="text-sm text-zinc-500 leading-relaxed">KaganAI kullanarak manuel aramaya kıyasla ne kadar tasarruf edeceğinizi hesaplayın.</p>
</a>

<a className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition duration-300 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-100/50" href="#faq">
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-50 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-semibold tracking-tight text-zinc-900">Sıkça Sorulanlar</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Platform kullanımı, veri kaynakları ve üyelik modelleri hakkında yanıtlar.</p>
</a>

<a className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition duration-300 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-100/50" href="#">
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-50 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-semibold tracking-tight text-zinc-900">Başarı Hikayeleri</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Müşterilerimizin Türkiye teşvik ekosistemindeki başarılarını inceleyin.</p>
</a>

<a className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition duration-300 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-100/50" href="#">
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-50 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:headphones-round-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-semibold tracking-tight text-zinc-900">Destek Talebi</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Teknik bir sorun mu var? Ekibimizle iletişime geçin.</p>
</a>
</div>
</div>

<div className="mx-auto mt-12 max-w-7xl px-6">
<div className="grid grid-cols-1 gap-6 md:grid-cols-3">

<div className="relative col-span-1 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 md:col-span-2">
<div className="flex h-full flex-col justify-between p-8">
<div className="z-10">
<h3 className="text-xl font-medium tracking-tight text-zinc-900">Video Eğitimleri İzleyin</h3>
<p className="mt-2 text-sm text-zinc-500">Platformun nasıl çalıştığını 2 dakikada öğrenin.</p>
</div>
<div className="mt-8 flex items-center gap-4">
<button className="flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                                Eğitimi Başlat
                            </button>
</div>
</div>

<div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-200/50 via-transparent to-transparent opacity-50"></div>
</div>

<div className="col-span-1 flex flex-col justify-center rounded-2xl border border-zinc-200 bg-white p-8">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-900">
<iconify-icon icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900">Kullanım Kılavuzu</h3>
<p className="mt-2 mb-6 text-sm text-zinc-500">Detaylı dokümantasyon ve PDF rehberler.</p>
<a className="group flex w-full items-center justify-between rounded-lg border border-zinc-200 px-4 py-3 text-sm font-medium transition hover:border-zinc-900 hover:bg-zinc-50" href="#">
<span>PDF İndir</span>
<iconify-icon className="text-zinc-400 transition group-hover:text-zinc-900" icon="solar:download-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="mx-auto mt-32 max-w-7xl px-6" id="roi">
<div className="mb-16 text-center">
<span className="mb-3 inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-600">Verimlilik</span>
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 md:text-4xl">Yatırım Getirinizi (ROI) Keşfedin</h2>
<p className="mx-auto mt-4 max-w-2xl text-zinc-500">
                    KaganAI, geleneksel yöntemlere göre hibe ve teşvik araştırmalarında harcanan zamanı %88'e varan oranda azaltır.
                </p>
</div>

<div className="grid grid-cols-1 gap-8 md:grid-cols-3">

<div className="rounded-2xl border border-zinc-200 bg-white p-8">
<h4 className="text-sm font-medium text-zinc-500">Yıllık Tasarruf (TL)</h4>
<div className="mt-2 flex items-baseline gap-2">
<span className="text-3xl font-semibold tracking-tight text-zinc-900">₺187.200</span>
<span className="text-xs font-medium text-green-600">+%400</span>
</div>

<div className="mt-8 flex h-32 items-end justify-between gap-2">
<div className="group relative w-full rounded-t-sm bg-zinc-100 hover:bg-indigo-100 h-[10%] transition-all"></div>
<div className="group relative w-full rounded-t-sm bg-zinc-100 hover:bg-indigo-100 h-[25%] transition-all"></div>
<div className="group relative w-full rounded-t-sm bg-zinc-100 hover:bg-indigo-100 h-[45%] transition-all"></div>
<div className="group relative w-full rounded-t-sm bg-zinc-100 hover:bg-indigo-100 h-[65%] transition-all"></div>
<div className="group relative w-full rounded-t-sm bg-zinc-200 hover:bg-indigo-200 h-[85%] transition-all"></div>
<div className="group relative w-full rounded-t-sm bg-zinc-900 hover:bg-indigo-600 h-[100%] transition-all"></div>
</div>
<p className="mt-4 text-xs text-zinc-400 text-center">Aylık Arama Hacmi</p>
</div>

<div className="rounded-2xl border border-zinc-200 bg-white p-8">
<h4 className="text-sm font-medium text-zinc-500">Tasarruf Edilen Saat</h4>
<div className="mt-2 flex items-baseline gap-2">
<span className="text-3xl font-semibold tracking-tight text-zinc-900">7.200</span>
<span className="text-xs font-medium text-zinc-400">saat/yıl</span>
</div>

<div className="mt-8 flex h-32 items-end justify-between gap-2">
<div className="w-full rounded-t-sm bg-zinc-100 h-[5%]"></div>
<div className="w-full rounded-t-sm bg-zinc-100 h-[15%]"></div>
<div className="w-full rounded-t-sm bg-zinc-100 h-[30%]"></div>
<div className="w-full rounded-t-sm bg-zinc-100 h-[50%]"></div>
<div className="w-full rounded-t-sm bg-zinc-200 h-[75%]"></div>
<div className="w-full rounded-t-sm bg-zinc-900 h-[100%]"></div>
</div>
<p className="mt-4 text-xs text-zinc-400 text-center">İşlem Hacmi</p>
</div>

<div className="flex flex-col justify-center rounded-2xl border border-zinc-200 bg-zinc-900 p-8 text-white">
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
<iconify-icon icon="solar:cursor-linear" width="24"></iconify-icon>
</div>
<div className="text-6xl font-semibold tracking-tighter">
                        -88%
                    </div>
<p className="mt-4 text-zinc-300 leading-relaxed">
                        Geleneksel araçlara kıyasla %88 daha az tıklama. Konunuzu yazın veya yapıştırın, yapay zeka motorumuz gerisini halletsin.
                    </p>
</div>
</div>
</div>

<div className="mx-auto mt-32 max-w-3xl px-6" id="faq">
<h2 className="mb-12 text-center text-3xl font-medium tracking-tight text-zinc-900">Sıkça Sorulan Sorular</h2>
<div className="space-y-4">

<details className="group rounded-xl border border-zinc-200 bg-white [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 text-zinc-900">
<h3 className="font-medium">KaganAI tam olarak ne yapıyor?</h3>
<span className="ml-4 flex-shrink-0 transition duration-300 group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="border-t border-zinc-100 px-6 pb-6 pt-4 text-sm leading-relaxed text-zinc-500">
                        KaganAI, doğal dil işleme kullanan yapay zeka tabanlı bir teşvik arama aracıdır. Proje özetinizi veya fikrinizi girdiğinizde, size uygun devlet teşviklerini (TÜBİTAK, KOSGEB, Ticaret Bakanlığı vb.), potansiyel partnerleri ve projenizi geliştirecek bilgileri anında listeler. Semantik analiz sayesinde geleneksel anahtar kelime aramalarından çok daha kapsamlı sonuçlar sunar.
                    </div>
</details>

<details className="group rounded-xl border border-zinc-200 bg-white [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 text-zinc-900">
<h3 className="font-medium">Hangi programlar ve teşvikler dahil?</h3>
<span className="ml-4 flex-shrink-0 transition duration-300 group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="border-t border-zinc-100 px-6 pb-6 pt-4 text-sm leading-relaxed text-zinc-500">
                        Veritabanımız Türkiye'deki başlıca hibe ve teşvik programlarını kapsar. Bunlar arasında KOSGEB, TÜBİTAK TEYDEB/ARDEB, Ticaret Bakanlığı İhracat Destekleri, Sanayi ve Teknoloji Bakanlığı Yatırım Teşvikleri ve Avrupa Birliği (Horizon Europe) çağrıları bulunmaktadır. Veritabanımız günlük olarak güncellenmektedir.
                    </div>
</details>

<details className="group rounded-xl border border-zinc-200 bg-white [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 text-zinc-900">
<h3 className="font-medium">Semantik analiz nedir ve nasıl çalışır?</h3>
<span className="ml-4 flex-shrink-0 transition duration-300 group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="border-t border-zinc-100 px-6 pb-6 pt-4 text-sm leading-relaxed text-zinc-500">
                        Semantik analiz, yapay zekanın kelimelerin sadece yazılışını değil, anlamını ve bağlamını kavramasıdır. Örneğin "finansman" aradığınızda sistem bunu "hibe", "destek", "kredi" veya "fon" kavramlarıyla ilişkilendirebilir. KaganAI, girdiğiniz metni kelime kelime değil, bütünsel bir anlam olarak analiz eder ve en alakalı sonuçlarla eşleştirir.
                    </div>
</details>

<details className="group rounded-xl border border-zinc-200 bg-white [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 text-zinc-900">
<h3 className="font-medium">Hesabımı iş arkadaşlarımla paylaşabilir miyim?</h3>
<span className="ml-4 flex-shrink-0 transition duration-300 group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="border-t border-zinc-100 px-6 pb-6 pt-4 text-sm leading-relaxed text-zinc-500">
                        Kullanıcı lisanslarımız kişiye özeldir (named user license). Ancak, Kurumsal planlarımızda birden fazla kullanıcı tanımlama ve ekip içi proje paylaşımı özellikleri mevcuttur. Detaylar için fiyatlandırma sayfamızı inceleyebilirsiniz.
                    </div>
</details>

<details className="group rounded-xl border border-zinc-200 bg-white [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 text-zinc-900">
<h3 className="font-medium">Ücretsiz deneme süreci nasıl işliyor?</h3>
<span className="ml-4 flex-shrink-0 transition duration-300 group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="border-t border-zinc-100 px-6 pb-6 pt-4 text-sm leading-relaxed text-zinc-500">
                        KaganAI'yi 14 gün boyunca ücretsiz deneyebilirsiniz. Kredi kartı bilgisi gerekmez. Deneme süresince tüm arama özelliklerine erişebilir, platformun projenize uygunluğunu test edebilirsiniz.
                    </div>
</details>
</div>
</div>

<div className="mx-auto mt-32 max-w-4xl px-6 pb-12">
<div className="relative overflow-hidden rounded-3xl bg-zinc-900 px-6 py-16 text-center shadow-2xl md:px-12">
<div className="relative z-10">
<h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl">Size nasıl yardımcı olabiliriz?</h2>
<p className="mx-auto mt-4 max-w-lg text-zinc-400">
                        Ekibimiz sorularınızı yanıtlamak ve size özel bir demo sunmak için hazır.
                    </p>
<div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100" href="#">
                            İletişime Geçin
                        </a>
<a className="rounded-full border border-zinc-700 bg-transparent px-8 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800" href="#">
                            Demo Talep Et
                        </a>
</div>
</div>

<div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl"></div>
<div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"></div>
</div>
</div>
</main>

<footer className="border-t border-zinc-200 bg-zinc-50">
<div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
<div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
<div className="col-span-2 lg:col-span-2">
<a className="mb-4 flex items-center gap-2" href="#">
<div className="flex h-6 w-6 items-center justify-center rounded bg-zinc-900 text-white">
<span className="font-semibold tracking-tighter text-xs">K</span>
</div>
<span className="text-lg font-semibold tracking-tight text-zinc-900">kaganai</span>
</a>
<p className="max-w-xs text-sm text-zinc-500">
                        Türkiye'nin lider yapay zeka destekli hibe ve teşvik arama motoru. İşletmenizi büyütmek için doğru kaynakları bulun.
                    </p>
</div>
<div>
<h4 className="mb-4 text-sm font-semibold text-zinc-900">Platform</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">Nasıl Çalışır?</a></li>
<li><a className="hover:text-zinc-900" href="#">Fiyatlandırma</a></li>
<li><a className="hover:text-zinc-900" href="#">Başarı Hikayeleri</a></li>
<li><a className="hover:text-zinc-900" href="#">Güvenlik</a></li>
</ul>
</div>
<div>
<h4 className="mb-4 text-sm font-semibold text-zinc-900">Kaynaklar</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">Blog</a></li>
<li><a className="hover:text-zinc-900" href="#">Hibe Rehberi</a></li>
<li><a className="hover:text-zinc-900" href="#">ROI Hesaplama</a></li>
<li><a className="hover:text-zinc-900" href="#">Yardım Merkezi</a></li>
</ul>
</div>
<div>
<h4 className="mb-4 text-sm font-semibold text-zinc-900">Şirket</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">Hakkımızda</a></li>
<li><a className="hover:text-zinc-900" href="#">Kariyer</a></li>
<li><a className="hover:text-zinc-900" href="#">İletişim</a></li>
<li><a className="hover:text-zinc-900" href="#">Yasal</a></li>
</ul>
</div>
</div>
<div className="mt-12 border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-400">© 2024 KaganAI Teknoloji A.Ş. Tüm hakları saklıdır.</p>
<div className="flex gap-6">
<a className="text-zinc-400 hover:text-zinc-900" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-900" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-900" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
