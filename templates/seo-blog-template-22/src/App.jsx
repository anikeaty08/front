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



        // Clone posts to home page on load
        document.addEventListener('DOMContentLoaded', () => {
            const allPosts = document.querySelectorAll('#all-posts-container .post-card');
            const homeContainer = document.getElementById('home-posts-container');
            // Add first 4 posts to home
            for (let i = 0; i < 4 && i < allPosts.length; i++) {
                homeContainer.appendChild(allPosts[i].cloneNode(true));
            }
        });

        // Navigation logic
        function navigate(viewId) {
            // Hide all views
            document.querySelectorAll('.page-view').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('block');
            });
            
            // Show target view
            const targetView = document.getElementById(viewId);
            if(targetView) {
                targetView.classList.remove('hidden');
                targetView.classList.add('block');
            }

            // Update Header Nav active states
            const navLinks = document.querySelectorAll('header nav .nav-link');
            navLinks.forEach(link => {
                link.classList.remove('text-zinc-900');
                link.classList.add('text-zinc-500');
                
                // Very basic active state matching
                if (
                    (viewId === 'view-home' && link.textContent === 'Ana Sayfa') ||
                    (viewId === 'view-articles' && (link.textContent === 'Makaleler' || link.textContent === 'Rehberler')) ||
                    (viewId === 'view-about' && link.textContent === 'Hakkımda')
                ) {
                    link.classList.remove('text-zinc-500');
                    link.classList.add('text-zinc-900');
                }
            });

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
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
      

<header className="sticky top-0 z-50 bg-zinc-50/80 backdrop-blur-md border-b border-zinc-200/50">
<div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-semibold text-lg tracking-tighter text-zinc-900 flex items-center gap-2" href="javascript:void(0)" onclick="navigate('view-home')">
                OD<span className="text-zinc-400 font-normal tracking-normal text-sm hidden sm:inline-block">| SEO Blog</span>
</a>
<nav className="hidden md:flex items-center gap-6">
<a className="nav-link text-sm font-medium text-zinc-900 transition-colors" href="javascript:void(0)" onclick="navigate('view-home')">Ana Sayfa</a>
<a className="nav-link text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="javascript:void(0)" onclick="navigate('view-articles')">Makaleler</a>
<a className="nav-link text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="javascript:void(0)" onclick="navigate('view-articles')">Rehberler</a>
<a className="nav-link text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="javascript:void(0)" onclick="navigate('view-about')">Hakkımda</a>
</nav>
<div className="flex items-center gap-4">
<button className="text-zinc-500 hover:text-zinc-900 transition-colors flex items-center">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="md:hidden text-zinc-500 hover:text-zinc-900 transition-colors flex items-center">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</header>

<main className="flex-grow">

<div className="page-view block max-w-4xl mx-auto px-6 py-16 md:py-24" id="view-home">

<section className="mb-20">
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-4 max-w-2xl leading-tight">
                    Arama motorlarında görünürlüğünüzü artıracak stratejiler.
                </h1>
<p className="text-base md:text-lg text-zinc-500 mb-8 max-w-xl leading-relaxed">
                    Oğulcan Demirer'in kaleminden teknik SEO, içerik stratejileri ve güncel arama motoru algoritmaları üzerine derinlemesine analizler ve rehberler.
                </p>
<div className="flex flex-col sm:flex-row gap-3 max-w-md">
<div className="relative flex-grow">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-2.5 bg-white border border-zinc-200 rounded-xl text-sm shadow-sm placeholder-zinc-400 focus:outline-none focus:border-zinc-300 focus:ring-1 focus:ring-zinc-300 transition-all" placeholder="E-posta bültenine katılın" type="email"/>
</div>
<button className="bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium py-2.5 px-5 rounded-xl transition-colors shadow-sm flex-shrink-0">
                        Abone Ol
                    </button>
</div>
<p className="text-xs text-zinc-400 mt-3 flex items-center gap-1.5">
<iconify-icon icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Spam yok, sadece değerli içerikler.
                </p>
</section>

<section>
<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
<div>
<h2 className="text-xl font-semibold tracking-tight text-zinc-900">Son Yazılar</h2>
<p className="text-sm text-zinc-500 mt-1">SEO dünyasındaki en son güncellemeler ve taktikler.</p>
</div>
<a className="text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors flex items-center gap-1 group" href="javascript:void(0)" onclick="navigate('view-articles')">
                        Tümünü gör 
                        <iconify-icon className="text-base group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="home-posts-container">

</div>
</section>
</div>

<div className="page-view hidden max-w-3xl mx-auto px-6 py-16 md:py-24" id="view-post">
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 mb-8 flex items-center gap-2 transition-colors group" onclick="navigate('view-home')">
<iconify-icon className="text-base group-hover:-translate-x-0.5 transition-transform" icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Geri dön
            </button>
<div className="flex flex-wrap items-center gap-3 mb-6">
<span className="inline-flex items-center px-2 py-1 rounded-md bg-zinc-100 text-zinc-600 text-xs font-medium">
                    Teknik SEO
                </span>
<span className="text-xs text-zinc-400 flex items-center gap-1">
<iconify-icon icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon> 24 Ekim 2023
                </span>
<span className="text-xs text-zinc-400 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> 5 dk okuma
                </span>
</div>
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-8 leading-tight">
                Core Web Vitals Optimizasyonu: 2024 Rehberi
            </h1>
<div className="space-y-6 text-zinc-600 text-base leading-relaxed">
<p className="text-lg text-zinc-500 mb-8">
                    Sayfa hızı ve kullanıcı deneyimi metriklerinin (LCP, FID, CLS) detaylı analizi ve iyileştirme yöntemleri. Google'ın son güncellemeleriyle birlikte değişen ağırlık faktörlerini inceliyoruz.
                </p>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mt-12 mb-4">LCP (Largest Contentful Paint) İyileştirmeleri</h2>
<p>
                    LCP, sayfanın ana içeriğinin yüklenme süresini ölçer. İyi bir kullanıcı deneyimi için bu sürenin 2.5 saniyenin altında olması gerekir. Görselleri optimize etmek, kritik CSS'i satır içi (inline) eklemek ve sunucu yanıt sürelerini iyileştirmek en etkili yöntemlerdir.
                </p>
<ul className="list-disc pl-5 space-y-2 my-6">
<li>Görsel sıkıştırma algoritmalarını (WebP, AVIF) etkin bir şekilde kullanın.</li>
<li>CDN (İçerik Dağıtım Ağı) yapılandırmanızı gözden geçirin ve önbelleğe almayı artırın.</li>
<li>Kritik olmayan JavaScript dosyalarını erteleyin (defer/async kullanımı).</li>
</ul>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mt-12 mb-4">CLS (Cumulative Layout Shift) Çözümleri</h2>
<p>
                    Kullanıcı sayfada gezinirken beklenmedik düzen kaymalarını önlemek, dönüşüm oranlarını doğrudan etkiler. Görseller ve reklam alanları için her zaman en/boy (width/height) oranlarını belirleyin.
                </p>
<blockquote className="border-l-2 border-zinc-900 pl-4 py-1 italic text-zinc-900 my-8">
                    "İyi bir SEO stratejisi, sadece arama motorlarını değil, aynı zamanda kullanıcıyı merkeze alan sağlam teknik altyapılarla mümkündür."
                </blockquote>
<p>
                    Bu rehberde bahsettiğimiz teknikleri sistemli bir şekilde uygulayarak, organik trafik performansınızda ve dönüşüm oranlarınızda kalıcı bir artış yakalayabilirsiniz. Teknik SEO'nun bir kerelik değil, sürekli bir süreç olduğunu unutmayın.
                </p>
</div>
<div className="mt-16 pt-8 border-t border-zinc-200">
<h3 className="text-base font-semibold tracking-tight text-zinc-900 mb-4">Bu yazıyı paylaş</h3>
<div className="flex gap-3">
<button aria-label="Linki kopyala" className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 bg-white transition-all shadow-sm hover:shadow-md">
<iconify-icon icon="solar:link-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button aria-label="X'te paylaş" className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 bg-white transition-all shadow-sm hover:shadow-md">
<iconify-icon icon="solar:hashtag-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>

<div className="page-view hidden max-w-4xl mx-auto px-6 py-16 md:py-24" id="view-articles">
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-4">Tüm Makaleler</h1>
<p className="text-base md:text-lg text-zinc-500 mb-12">SEO ve dijital pazarlama üzerine yazdığım tüm içerikler, rehberler ve vaka analizleri.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="all-posts-container">

<article className="post-card group relative bg-white border border-zinc-200 rounded-2xl p-6 hover:border-zinc-300 hover:shadow-sm transition-all duration-200 flex flex-col h-full">
<a className="absolute inset-0 z-10" href="javascript:void(0)" onclick="navigate('view-post')"><span className="sr-only">Makaleyi Oku</span></a>
<div className="flex items-center gap-3 mb-4">
<span className="inline-flex items-center px-2 py-1 rounded-md bg-zinc-100 text-zinc-600 text-xs font-medium">Teknik SEO</span>
<span className="text-xs text-zinc-400 flex items-center gap-1"><iconify-icon icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon> 24 Ekim 2023</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2 group-hover:text-zinc-600 transition-colors">Core Web Vitals Optimizasyonu: 2024 Rehberi</h3>
<p className="text-sm text-zinc-500 line-clamp-3 mb-6 flex-grow">Sayfa hızı ve kullanıcı deneyimi metriklerinin (LCP, FID, CLS) detaylı analizi ve iyileştirme yöntemleri. Google'ın son güncellemeleriyle birlikte değişen ağırlık faktörlerini inceliyoruz.</p>
<div className="flex items-center text-sm font-medium text-zinc-900 mt-auto">
                        Yazıyı oku <iconify-icon className="ml-1 text-base text-zinc-400 group-hover:text-zinc-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</article>
<article className="post-card group relative bg-white border border-zinc-200 rounded-2xl p-6 hover:border-zinc-300 hover:shadow-sm transition-all duration-200 flex flex-col h-full">
<a className="absolute inset-0 z-10" href="javascript:void(0)" onclick="navigate('view-post')"><span className="sr-only">Makaleyi Oku</span></a>
<div className="flex items-center gap-3 mb-4">
<span className="inline-flex items-center px-2 py-1 rounded-md bg-zinc-100 text-zinc-600 text-xs font-medium">İçerik Stratejisi</span>
<span className="text-xs text-zinc-400 flex items-center gap-1"><iconify-icon icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon> 18 Ekim 2023</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2 group-hover:text-zinc-600 transition-colors">Semantik Arama ve Entite (Entity) Optimizasyonu</h3>
<p className="text-sm text-zinc-500 line-clamp-3 mb-6 flex-grow">Anahtar kelime yoğunluğunun ötesine geçin. Arama motorlarının içeriği nasıl anladığını ve entiteler arası ilişkileri kullanarak otoritenizi nasıl artırabileceğinizi öğrenin.</p>
<div className="flex items-center text-sm font-medium text-zinc-900 mt-auto">
                        Yazıyı oku <iconify-icon className="ml-1 text-base text-zinc-400 group-hover:text-zinc-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</article>
<article className="post-card group relative bg-white border border-zinc-200 rounded-2xl p-6 hover:border-zinc-300 hover:shadow-sm transition-all duration-200 flex flex-col h-full">
<a className="absolute inset-0 z-10" href="javascript:void(0)" onclick="navigate('view-post')"><span className="sr-only">Makaleyi Oku</span></a>
<div className="flex items-center gap-3 mb-4">
<span className="inline-flex items-center px-2 py-1 rounded-md bg-zinc-100 text-zinc-600 text-xs font-medium">Off-Page SEO</span>
<span className="text-xs text-zinc-400 flex items-center gap-1"><iconify-icon icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon> 05 Ekim 2023</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2 group-hover:text-zinc-600 transition-colors">Modern Backlink İnşası: Zararlı Mı, Gerekli Mi?</h3>
<p className="text-sm text-zinc-500 line-clamp-3 mb-6 flex-grow">Spam backlink taktiklerinin öldüğü bu dönemde, dijital PR ve kaliteli içerik pazarlaması ile doğal yollardan nasıl otoriter bağlantılar elde edilebileceğini tartışıyoruz.</p>
<div className="flex items-center text-sm font-medium text-zinc-900 mt-auto">
                        Yazıyı oku <iconify-icon className="ml-1 text-base text-zinc-400 group-hover:text-zinc-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</article>
<article className="post-card group relative bg-white border border-zinc-200 rounded-2xl p-6 hover:border-zinc-300 hover:shadow-sm transition-all duration-200 flex flex-col h-full">
<a className="absolute inset-0 z-10" href="javascript:void(0)" onclick="navigate('view-post')"><span className="sr-only">Makaleyi Oku</span></a>
<div className="flex items-center gap-3 mb-4">
<span className="inline-flex items-center px-2 py-1 rounded-md bg-zinc-100 text-zinc-600 text-xs font-medium">E-ticaret SEO</span>
<span className="text-xs text-zinc-400 flex items-center gap-1"><iconify-icon icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon> 28 Eylül 2023</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2 group-hover:text-zinc-600 transition-colors">Kategori ve Ürün Sayfalarında Yapılandırılmış Veri Kullanımı</h3>
<p className="text-sm text-zinc-500 line-clamp-3 mb-6 flex-grow">Schema.org markup'ları ile arama sonuçlarında zengin snippet'ler (zengin sonuçlar) elde ederek organik tıklama oranlarınızı (CTR) dramatik ölçüde artırmanın yolları.</p>
<div className="flex items-center text-sm font-medium text-zinc-900 mt-auto">
                        Yazıyı oku <iconify-icon className="ml-1 text-base text-zinc-400 group-hover:text-zinc-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</article>
</div>
</div>

<div className="page-view hidden max-w-3xl mx-auto px-6 py-16 md:py-24" id="view-about">
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-8">Hakkımda</h1>
<div className="space-y-6 text-zinc-600 text-base leading-relaxed">
<p>
                    Merhaba, ben Oğulcan Demirer. 5 yılı aşkın süredir dijital pazarlama ve arama motoru optimizasyonu (SEO) alanlarında çalışıyorum.
                </p>
<p>
                    Amacım, markaların dijital görünürlüklerini veri odaklı ve sürdürülebilir stratejilerle maksimize etmek. Teknik SEO, içerik stratejisi ve veri analizi tutkuyla ilgilendiğim konuların başında geliyor. Kompleks algoritmik güncellemeleri anlaşılır ve uygulanabilir aksiyonlara dönüştürmeyi seviyorum.
                </p>
<p>
                    Bana her zaman aşağıdaki sosyal medya kanallarından ulaşabilirsiniz.
                </p>
</div>
</div>
</main>

<footer className="border-t border-zinc-200 mt-auto bg-white">
<div className="max-w-4xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-sm text-zinc-500">
<span className="font-semibold tracking-tighter text-zinc-900">OD</span>
<p>© 2024 Oğulcan Demirer. Tüm hakları saklıdır.</p>
</div>
<div className="flex items-center gap-4">
<a aria-label="Twitter" className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:hashtag-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a aria-label="LinkedIn" className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:user-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a aria-label="Email" className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</footer>



    </>
  );
}
