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
      
document.addEventListener('DOMContentLoaded', () => {
  const slidesData = [
    {
      src: 'file:///Users/barbarabolimowska/Downloads/landing_page_real_estate.webp',
      alt: 'Landing page Real Estate'
    },
    {
      src: 'file:///Users/barbarabolimowska/Downloads/landing_page_dla_dewelopera3.webp',
      alt: 'Landing page dla dewelopera 3'
    },
    {
      src: 'file:///Users/barbarabolimowska/Downloads/landing_page_dla_dewelopera2.webp',
      alt: 'Landing page dla dewelopera 2'
    },
    {
      src: 'file:///Users/barbarabolimowska/Downloads/landing_page_dla_dewelopera1-2.webp',
      alt: 'Landing page dla dewelopera 1'
    }
  ];
  const track = document.getElementById('carousel-track');
  const dotsContainer = document.getElementById('pagination-dots');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  let current = 0, perView = 3;

  const updateView = () => {
    perView = window.innerWidth < 768 ? 1
            : window.innerWidth < 1024 ? 2
            : 3;
    track.querySelectorAll('.slide').forEach(s => s.style.flex = `0 0 ${100/perView}%`);
    createDots();
    goTo(0, false);
  };

  const createSlides = () => {
    slidesData.forEach(({src, alt}) => {
      const div = document.createElement('div');
      div.className = 'slide p-2';
      div.innerHTML = `<img src="${src}" alt="${alt}" class="w-full h-64 object-cover rounded-xl shadow-md">`;
      track.appendChild(div);
    });
  };

  const createDots = () => {
    dotsContainer.innerHTML = '';
    for (let i = 0; i <= slidesData.length - perView; i++) {
      const btn = document.createElement('button');
      btn.className = 'w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-slate-400';
      btn.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(btn);
    }
  };

  const goTo = (idx, animate = true) => {
    current = Math.max(0, Math.min(idx, slidesData.length - perView));
    if (!animate) track.classList.remove('duration-300');
    track.style.transform = `translateX(-${current * 100 / perView}%)`;
    if (!animate) { track.offsetHeight; track.classList.add('duration-300'); }
    Array.from(dotsContainer.children).forEach((d, i) => {
      d.classList.toggle('bg-pink-400 scale-125', i === current);
    });
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current >= slidesData.length - perView;
  };

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));
  window.addEventListener('resize', updateView);

  createSlides();
  updateView();
});



// Initialize Lucide icons
lucide.createIcons();

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
      

<header className="bg-gradient-hero relative overflow-hidden">
<div className="absolute inset-0 bg-black/20"></div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-20">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="home"></i>
</div>
<div>
<h1 className="text-xl font-bold text-white">Twój UX</h1>
<p className="text-xs text-slate-300">Real Estate Design</p>
</div>
</div>
<nav className="hidden md:flex items-center space-x-8">
<a className="text-slate-200 hover:text-white transition-colors" href="#">Start</a>
<a className="text-slate-200 hover:text-white transition-colors" href="#">Projekty</a>
<a className="text-slate-200 hover:text-white transition-colors" href="#">O mnie</a>
<a className="text-slate-200 hover:text-white transition-colors" href="#">Kontakt</a>
</nav>
<div className="flex items-center space-x-4">
<div className="text-right">
<p className="text-xs text-slate-300">Szybki kontakt</p>
<p className="text-white font-semibold">+48 535 805 700</p>
</div>
<div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
</div>
</div>
</div>
</header>

<section className="bg-gradient-hero py-20 relative overflow-hidden">
<div className="absolute inset-0 bg-black/20"></div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="text-center lg:text-left">
<div className="glass-morphism inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm text-white mb-8">
<div className="w-2 h-2 bg-pink-500 rounded-full"></div>
<span>UX Designer • Nieruchomości</span>
</div>
<h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
Sprzedaj swoją inwestycję deweloperską nawet <span className="text-gradient">2x szybciej!</span>
</h1>
<p className="text-xl text-slate-300 mb-8 max-w-2xl">
Zamień pozwolenie na budowę w kolejkę realnych klientów. Projektuję strony internetowe i prowadzę kampanie reklamowe, które generują kwalifikowane zapytania od kupujących.
</p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-12">
<div className="flex items-center space-x-3">
<div className="glass-morphism p-3 rounded-full">
<i className="w-6 h-6 text-pink-400" data-lucide="rocket"></i>
</div>
<div>
<p className="text-2xl font-bold text-gradient">2x</p>
<p className="text-sm text-slate-400">Szybsza sprzedaż</p>
</div>
</div>
<div className="flex items-center space-x-3">
<div className="glass-morphism p-3 rounded-full">
<i className="w-6 h-6 text-orange-400" data-lucide="users"></i>
</div>
<div>
<p className="text-2xl font-bold text-gradient">500+</p>
<p className="text-sm text-slate-400">Kwalifikowanych leadów</p>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-colors flex items-center space-x-2">
<span>Zamów bezpłatną konsultację</span>
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<div className="flex items-center space-x-3">
<div className="glass-morphism p-3 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
<i className="w-5 h-5 text-white" data-lucide="linkedin"></i>
</div>
<div className="glass-morphism p-3 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
<i className="w-5 h-5 text-white" data-lucide="message-circle"></i>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="relative rounded-2xl overflow-hidden shadow-2xl">
<img alt="Nowoczesny dom" className="w-full h-96 object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 transform -rotate-3">
<p className="font-bold text-lg">+300%</p>
<p className="text-sm text-slate-600">ROI</p>
</div>
<div className="absolute bottom-6 right-6 bg-green-500/90 backdrop-blur-sm text-white rounded-xl px-4 py-2 transform rotate-2">
<p className="font-semibold flex items-center space-x-2">
<i className="w-4 h-4" data-lucide="check-circle"></i>
<span>Sprzedane!</span>
</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
<i className="w-4 h-4" data-lucide="bar-chart"></i>
<span>Konkretne wyniki</span>
</div>
<h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
Wyniki, które mówią same za siebie
</h2>
<p className="text-lg text-slate-600 max-w-2xl mx-auto">
Metryki biznesowe pokazujące skuteczność naszych rozwiązań UX/UI
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
<div className="bg-gradient-to-br from-pink-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
<i className="w-8 h-8 text-white" data-lucide="trending-up"></i>
</div>
<h3 className="text-3xl font-bold text-gradient mb-2">300%</h3>
<h4 className="text-lg font-semibold text-slate-900 mb-2">Wzrost sprzedaży</h4>
<p className="text-sm text-slate-600">Średni wzrost sprzedaży po wdrożeniu</p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
<div className="bg-gradient-to-br from-blue-600 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
<i className="w-8 h-8 text-white" data-lucide="mouse-pointer-click"></i>
</div>
<h3 className="text-3xl font-bold text-gradient mb-2">60%</h3>
<h4 className="text-lg font-semibold text-slate-900 mb-2">Wyższy CTR</h4>
<p className="text-sm text-slate-600">Wzrost kliknięć w kampaniach</p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
<div className="bg-gradient-to-br from-green-500 to-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
<i className="w-8 h-8 text-white" data-lucide="dollar-sign"></i>
</div>
<h3 className="text-3xl font-bold text-gradient mb-2">5x</h3>
<h4 className="text-lg font-semibold text-slate-900 mb-2">Lepszy ROI</h4>
<p className="text-sm text-slate-600">Zwrot z inwestycji w UX design</p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
<div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
<i className="w-8 h-8 text-white" data-lucide="users"></i>
</div>
<h3 className="text-3xl font-bold text-gradient mb-2">1200+</h3>
<h4 className="text-lg font-semibold text-slate-900 mb-2">Leadów miesięcznie</h4>
<p className="text-sm text-slate-600">Generowanych przez nasze strony</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
<i className="w-4 h-4" data-lucide="settings"></i>
<span>Nasze usługi</span>
</div>
<h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
Kompletne rozwiązania dla Twojej inwestycji
</h2>
<p className="text-lg text-slate-600 max-w-2xl mx-auto">
Od projektowania po kampanie reklamowe - wszystko w jednym miejscu
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
<div className="bg-pink-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-pink-600" data-lucide="palette"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4">UX/UI Design</h3>
<p className="text-slate-600 mb-6">Nowoczesne, responsywne strony internetowe zaprojektowane pod maksymalną konwersję i user experience.</p>
<div className="space-y-2">
<div className="flex items-center space-x-2 text-sm text-slate-600">
<i className="w-4 h-4 text-green-500" data-lucide="check"></i>
<span>Responsive design</span>
</div>
<div className="flex items-center space-x-2 text-sm text-slate-600">
<i className="w-4 h-4 text-green-500" data-lucide="check"></i>
<span>Optymalizacja konwersji</span>
</div>
<div className="flex items-center space-x-2 text-sm text-slate-600">
<i className="w-4 h-4 text-green-500" data-lucide="check"></i>
<span>Nowoczesny wygląd</span>
</div>
</div>
</div>
<div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
<div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-blue-600" data-lucide="megaphone"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4">Kampanie reklamowe</h3>
<p className="text-slate-600 mb-6">Skuteczne kampanie Google Ads i Facebook Ads, które generują kwalifikowane leady od potencjalnych nabywców.</p>
<div className="space-y-2">
<div className="flex items-center space-x-2 text-sm text-slate-600">
<i className="w-4 h-4 text-green-500" data-lucide="check"></i>
<span>Google Ads</span>
</div>
<div className="flex items-center space-x-2 text-sm text-slate-600">
<i className="w-4 h-4 text-green-500" data-lucide="check"></i>
<span>Facebook Ads</span>
</div>
<div className="flex items-center space-x-2 text-sm text-slate-600">
<i className="w-4 h-4 text-green-500" data-lucide="check"></i>
<span>Optymalizacja ROI</span>
</div>
</div>
</div>
<div className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
<div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-green-600" data-lucide="bar-chart"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4">Analityka i optymalizacja</h3>
<p className="text-slate-600 mb-6">Ciągłe monitorowanie wyników, A/B testing i optymalizacja w celu maksymalizacji konwersji.</p>
<div className="space-y-2">
<div className="flex items-center space-x-2 text-sm text-slate-600">
<i className="w-4 h-4 text-green-500" data-lucide="check"></i>
<span>Google Analytics</span>
</div>
<div className="flex items-center space-x-2 text-sm text-slate-600">
<i className="w-4 h-4 text-green-500" data-lucide="check"></i>
<span>A/B Testing</span>
</div>
<div className="flex items-center space-x-2 text-sm text-slate-600">
<i className="w-4 h-4 text-green-500" data-lucide="check"></i>
<span>Raporty miesięczne</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 sm:py-28 bg-slate-50" id="projekty">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-base font-semibold leading-7 text-pink-500">Portfolio</h2>
<p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Zobacz moje przykładowe projekty landing pages dla Real Estate
      </p>
<p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
        Każdy projekt to nowa historia – zobacz, jak przekładam Figma na kod.
      </p>
</div>
<div className="relative w-full overflow-hidden">
<div className="flex transition-transform duration-300 ease-in-out" id="carousel-track">

</div>

<button className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white disabled:opacity-50" id="prev-btn">
<svg className="w-8 h-8 stroke-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white disabled:opacity-50" id="next-btn">
<svg className="w-8 h-8 stroke-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>

<div className="flex justify-center items-center gap-2 mt-8" id="pagination-dots"></div>
</div>
</div>
</section>


<section className="py-20 bg-gradient-hero relative overflow-hidden">
<div className="absolute inset-0 bg-black/20"></div>
<div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight">
Gotowy na zwiększenie sprzedaży?
</h2>
<p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
Skontaktuj się z nami już dziś i otrzymaj bezpłatną konsultację oraz wycenę projektu.
</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-colors flex items-center space-x-2">
<span>Zamów konsultację</span>
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<a className="glass-morphism text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors flex items-center space-x-2" href="tel:+48535805700">
<i className="w-5 h-5" data-lucide="phone"></i>
<span>+48 535 805 700</span>
</a>
</div>
</div>
</section>

<footer className="bg-slate-900 text-white py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center space-x-3 mb-6">
<div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="home"></i>
</div>
<div>
<h3 className="text-xl font-bold">Twój UX</h3>
<p className="text-slate-400">Real Estate Design</p>
</div>
</div>
<p className="text-slate-400 mb-6 max-w-md">
Specjalizujemy się w projektowaniu stron internetowych i kampaniach reklamowych dla deweloperów. Pomagamy sprzedawać nieruchomości szybciej i efektywniej.
</p>
<div className="flex items-center space-x-4">
<div className="glass-morphism p-3 rounded-full hover:bg-white/10 transition-colors cursor-pointer">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</div>
<div className="glass-morphism p-3 rounded-full hover:bg-white/10 transition-colors cursor-pointer">
<i className="w-5 h-5" data-lucide="facebook"></i>
</div>
<div className="glass-morphism p-3 rounded-full hover:bg-white/10 transition-colors cursor-pointer">
<i className="w-5 h-5" data-lucide="instagram"></i>
</div>
</div>
</div>
<div>
<h4 className="font-semibold mb-4">Usługi</h4>
<ul className="space-y-2 text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">UX/UI Design</a></li>
<li><a className="hover:text-white transition-colors" href="#">Kampanie reklamowe</a></li>
<li><a className="hover:text-white transition-colors" href="#">Analityka</a></li>
<li><a className="hover:text-white transition-colors" href="#">Optymalizacja</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4">Kontakt</h4>
<ul className="space-y-2 text-slate-400">
<li className="flex items-center space-x-2">
<i className="w-4 h-4" data-lucide="phone"></i>
<span>+48 535 805 700</span>
</li>
<li className="flex items-center space-x-2">
<i className="w-4 h-4" data-lucide="mail"></i>
<span>kontakt@twojux.pl</span>
</li>
<li className="flex items-center space-x-2">
<i className="w-4 h-4" data-lucide="map-pin"></i>
<span>Warszawa, Polska</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
<p>© 2024 Twój UX. Wszystkie prawa zastrzeżone.</p>
</div>
</div>
</footer>


    </>
  );
}
