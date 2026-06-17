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
      

<div className="fixed inset-0 z-0">

<img alt="Forest Background" className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-b from-[#020402]/80 via-[#020402]/90 to-[#020402]"></div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
</div>

<nav className="fixed top-0 w-full z-50 h-20 transition-all duration-300 glass-nav">
<div className="flex h-full max-w-7xl mx-auto px-6 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400">
<iconify-icon icon="lucide:bot" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-display font-semibold text-lg text-white tracking-tight">WebMonkey</span>
</a>

<div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 bg-white/5 px-6 py-2 rounded-full border border-white/5 backdrop-blur-md">
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#services">Usługi</a>
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#process">Proces</a>
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#about">O nas</a>
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#projects">Projekty</a>
</div>

<a className="hidden sm:flex items-center gap-2 bg-white text-black hover:bg-gray-200 transition-colors px-5 py-2 rounded-full group" href="#contact">
<span className="text-xs font-semibold tracking-wide">Kontakt</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 flex flex-col items-center justify-center min-h-screen sm:min-h-0">
<div className="max-w-4xl mx-auto text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/30 border border-green-500/30 text-green-400 mb-8 animate-fade-in-up">
<span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
<span className="text-[10px] font-medium uppercase tracking-widest">Digital Agency v2.0</span>
</div>

<h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-8">
                Przetrwają tylko <br/>
<span className="text-gradient-jungle">najlepiej przystosowani.</span>
</h1>

<p className="max-w-xl mx-auto text-sm sm:text-base text-gray-400 font-light leading-relaxed mb-10">
                W dżungli internetu Twój biznes potrzebuje przewodnika. Tworzymy strony, strategie i identyfikacje wizualne, które pozwalają zdominować ekosystem cyfrowy.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white font-medium text-sm py-3 px-8 rounded-full transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                    Rozpocznij Projekt
                </button>
<button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 text-gray-300 hover:text-white transition-colors text-sm font-medium">
<iconify-icon icon="lucide:play-circle" width="18"></iconify-icon>
                    Zobacz Showreel
                </button>
</div>
</div>

<div className="absolute top-1/2 left-10 hidden xl:block animate-float" style={{animationDelay: '1s'}}>
<div className="glass-panel p-4 rounded-xl flex items-center gap-3">
<div className="bg-green-500/20 p-2 rounded-lg text-green-400"><iconify-icon icon="lucide:trending-up"></iconify-icon></div>
<div>
<div className="text-xs text-gray-400">ROI</div>
<div className="text-sm font-semibold text-white">+240%</div>
</div>
</div>
</div>
<div className="absolute bottom-20 right-10 hidden xl:block animate-float" style={{animationDelay: '2s'}}>
<div className="glass-panel p-4 rounded-xl flex items-center gap-3">
<div className="bg-blue-500/20 p-2 rounded-lg text-blue-400"><iconify-icon icon="lucide:users"></iconify-icon></div>
<div>
<div className="text-xs text-gray-400">Zasięg</div>
<div className="text-sm font-semibold text-white">1.2M+</div>
</div>
</div>
</div>
</main>

<div className="relative z-10 w-full py-10 border-y border-white/5 bg-[#020402]/50 backdrop-blur-sm overflow-hidden">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020402] to-transparent z-20"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020402] to-transparent z-20"></div>
<div className="flex w-fit animate-scroll hover:[animation-play-state:paused]">
<div className="flex items-center gap-20 px-10 text-gray-500">
<iconify-icon icon="lucide:codesandbox" width="32"></iconify-icon>
<iconify-icon icon="lucide:figma" width="32"></iconify-icon>
<iconify-icon icon="lucide:framer" width="32"></iconify-icon>
<iconify-icon icon="lucide:github" width="32"></iconify-icon>
<iconify-icon icon="lucide:gitlab" width="32"></iconify-icon>
<iconify-icon icon="lucide:chrome" width="32"></iconify-icon>
<iconify-icon icon="lucide:slack" width="32"></iconify-icon>

<iconify-icon icon="lucide:codesandbox" width="32"></iconify-icon>
<iconify-icon icon="lucide:figma" width="32"></iconify-icon>
<iconify-icon icon="lucide:framer" width="32"></iconify-icon>
<iconify-icon icon="lucide:github" width="32"></iconify-icon>
<iconify-icon icon="lucide:gitlab" width="32"></iconify-icon>
<iconify-icon icon="lucide:chrome" width="32"></iconify-icon>
<iconify-icon icon="lucide:slack" width="32"></iconify-icon>
</div>
</div>
</div>

<section className="relative z-10 py-32 px-6" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="font-display text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">
                        Narzędzia <span className="text-gray-600">Ewolucji</span>
</h2>
<p className="text-gray-400 max-w-md text-sm leading-relaxed">
                        Kompleksowe rozwiązania marketingowe i technologiczne dostosowane do nowoczesnego rynku.
                    </p>
</div>
<div className="h-px w-24 bg-gradient-to-r from-green-500 to-transparent hidden md:block mb-6"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group glass-panel p-8 rounded-2xl hover:border-green-500/30 transition-all duration-500 hover:-translate-y-1">
<div className="w-10 h-10 rounded-lg bg-green-900/20 border border-green-500/20 flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:monitor" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-display font-medium text-white mb-3">Web Development</h3>
<p className="text-gray-500 text-sm leading-relaxed mb-6">
                        Szybkie, responsywne i zoptymalizowane pod kątem SEO strony internetowe, które konwertują odwiedzających w klientów.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-xs text-gray-400">
<iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> Landing Pages
                        </li>
<li className="flex items-center gap-2 text-xs text-gray-400">
<iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> E-commerce (Shopify/Woo)
                        </li>
<li className="flex items-center gap-2 text-xs text-gray-400">
<iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> Web Applications
                        </li>
</ul>
</div>

<div className="group glass-panel p-8 rounded-2xl hover:border-green-500/30 transition-all duration-500 hover:-translate-y-1">
<div className="w-10 h-10 rounded-lg bg-green-900/20 border border-green-500/20 flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:bar-chart-3" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-display font-medium text-white mb-3">Digital Marketing</h3>
<p className="text-gray-500 text-sm leading-relaxed mb-6">
                        Strategie oparte na danych. Prowadzimy kampanie w Google Ads i Social Media, które przynoszą realny zwrot z inwestycji.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-xs text-gray-400">
<iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> Google Ads &amp; SEO
                        </li>
<li className="flex items-center gap-2 text-xs text-gray-400">
<iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> Social Media Management
                        </li>
<li className="flex items-center gap-2 text-xs text-gray-400">
<iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> Content Marketing
                        </li>
</ul>
</div>

<div className="group glass-panel p-8 rounded-2xl hover:border-green-500/30 transition-all duration-500 hover:-translate-y-1">
<div className="w-10 h-10 rounded-lg bg-green-900/20 border border-green-500/20 flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:palette" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-display font-medium text-white mb-3">Branding &amp; Design</h3>
<p className="text-gray-500 text-sm leading-relaxed mb-6">
                        Tworzymy spójne systemy identyfikacji wizualnej, które zapadają w pamięć i budują zaufanie do marki.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-xs text-gray-400">
<iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> Logo &amp; Identity
                        </li>
<li className="flex items-center gap-2 text-xs text-gray-400">
<iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> UI/UX Design
                        </li>
<li className="flex items-center gap-2 text-xs text-gray-400">
<iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> Motion Graphics
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 border-t border-white/5 bg-[#020402]/80" id="about">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute inset-0 bg-green-500/20 blur-[100px] rounded-full opacity-30"></div>
<div className="relative glass-panel rounded-2xl overflow-hidden aspect-[4/3] border border-white/10">
<img alt="Team meeting" className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 right-6">
<div className="glass-panel p-4 rounded-xl flex items-center justify-between">
<div>
<p className="text-[10px] uppercase tracking-widest text-green-400 mb-1">Doświadczenie</p>
<p className="text-white font-display font-semibold">10+ Lat na rynku</p>
</div>
<div className="h-10 w-10 rounded-full bg-white text-black flex items-center justify-center">
<iconify-icon icon="lucide:arrow-up-right"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
<div>
<h2 className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
                    Nie jesteśmy tylko agencją. <br/>
<span className="text-gray-500">Jesteśmy partnerem w ekspedycji.</span>
</h2>
<div className="space-y-6 text-gray-400 text-sm md:text-base font-light leading-relaxed">
<p>
                        W WebMonkey wierzymy, że technologia powinna służyć naturze biznesu – wzrostowi. Nasz zespół to mieszanka kreatywnych projektantów i analitycznych strategów, którzy rozumieją, jak poruszać się w gęstwinie algorytmów.
                    </p>
<p>
                        Każdy projekt traktujemy jak nową wyprawę. Zbieramy dane, mapujemy teren konkurencji i wyznaczamy najkrótszą ścieżkę do celu, jakim jest sukces Twojej marki.
                    </p>
</div>
<div className="mt-10 flex gap-12">
<div>
<div className="text-3xl font-display font-semibold text-white mb-1">50+</div>
<div className="text-xs uppercase tracking-wider text-gray-500">Projektów</div>
</div>
<div>
<div className="text-3xl font-display font-semibold text-white mb-1">15</div>
<div className="text-xs uppercase tracking-wider text-gray-500">Specjalistów</div>
</div>
<div>
<div className="text-3xl font-display font-semibold text-white mb-1">3</div>
<div className="text-xs uppercase tracking-wider text-gray-500">Kraje</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6" id="projects">
<div className="max-w-7xl mx-auto">
<div className="flex items-center justify-between mb-12">
<h2 className="font-display text-3xl font-semibold text-white tracking-tight">Ostatnie Realizacje</h2>
<a className="text-xs font-medium text-green-400 hover:text-green-300 flex items-center gap-2" href="#">
                    Wszystkie projekty <iconify-icon icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 border border-white/10">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-white font-display font-medium text-lg">EcoTravel</h3>
<p className="text-gray-500 text-xs mt-1">Web Design &amp; Branding</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 group-hover:bg-white group-hover:text-black transition-all">
<iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 border border-white/10">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-white font-display font-medium text-lg">Neon Finance</h3>
<p className="text-gray-500 text-xs mt-1">App UI &amp; Development</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 group-hover:bg-white group-hover:text-black transition-all">
<iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 border border-white/10">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-white font-display font-medium text-lg">Jungle Coffee</h3>
<p className="text-gray-500 text-xs mt-1">Social Media Strategy</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 group-hover:bg-white group-hover:text-black transition-all">
<iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-20 border-t border-white/5 bg-[#020402]/90">
<div className="flex w-full overflow-hidden">
<div className="flex animate-scroll gap-6 px-6">

<div className="w-[400px] glass-panel p-8 rounded-2xl flex-shrink-0">
<div className="flex gap-1 text-green-500 mb-4 text-xs">
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
</div>
<p className="text-gray-300 text-sm leading-relaxed mb-6">"WebMonkey całkowicie odmienił nasz wizerunek. Strona ładuje się błyskawicznie, a sprzedaż wzrosła o 40% w pierwszym kwartale."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-700"></div>
<div>
<div className="text-white text-xs font-semibold">Tomasz Nowak</div>
<div className="text-gray-500 text-[10px] uppercase">CEO, TechFlow</div>
</div>
</div>
</div>

<div className="w-[400px] glass-panel p-8 rounded-2xl flex-shrink-0">
<div className="flex gap-1 text-green-500 mb-4 text-xs">
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
</div>
<p className="text-gray-300 text-sm leading-relaxed mb-6">"Profesjonalne podejście i świetny kontakt. Zespół rozumie potrzeby nowoczesnego marketingu."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-700"></div>
<div>
<div className="text-white text-xs font-semibold">Anna Kowalska</div>
<div className="text-gray-500 text-[10px] uppercase">Marketing Dir., GreenSpace</div>
</div>
</div>
</div>

<div className="w-[400px] glass-panel p-8 rounded-2xl flex-shrink-0">
<div className="flex gap-1 text-green-500 mb-4 text-xs">
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
</div>
<p className="text-gray-300 text-sm leading-relaxed mb-6">"Identyfikacja wizualna, którą stworzyli, idealnie oddaje charakter naszej marki. Polecam!"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-700"></div>
<div>
<div className="text-white text-xs font-semibold">Michał Wiśniewski</div>
<div className="text-gray-500 text-[10px] uppercase">Founder, StartupX</div>
</div>
</div>
</div>

<div className="w-[400px] glass-panel p-8 rounded-2xl flex-shrink-0">
<div className="flex gap-1 text-green-500 mb-4 text-xs">
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
</div>
<p className="text-gray-300 text-sm leading-relaxed mb-6">"WebMonkey całkowicie odmienił nasz wizerunek. Strona ładuje się błyskawicznie, a sprzedaż wzrosła o 40% w pierwszym kwartale."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-700"></div>
<div>
<div className="text-white text-xs font-semibold">Tomasz Nowak</div>
<div className="text-gray-500 text-[10px] uppercase">CEO, TechFlow</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 bg-[#020402] border-t border-white/10 pt-24 pb-12 px-6" id="contact">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-20">
<div className="max-w-2xl">
<h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                        Gotowy na cyfrową <br/> <span className="text-gray-600">ewolucję?</span>
</h2>
<p className="text-gray-400 text-lg font-light mb-8">
                        Zarezerwuj bezpłatną konsultację i zobacz, jak możemy pomóc Twojej firmie urosnąć.
                    </p>
<div className="flex gap-4">
<input className="bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm text-white focus:outline-none focus:border-green-500 w-full sm:w-80" placeholder="Twój adres email" type="email"/>
<button className="bg-white text-black font-semibold rounded-full px-8 py-3 text-sm hover:bg-gray-200 transition-colors whitespace-nowrap">
                            Wyślij
                        </button>
</div>
</div>
<div className="grid grid-cols-2 gap-12">
<div>
<h4 className="text-white font-medium mb-4">Social</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-green-400 transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-green-400 transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-green-400 transition-colors" href="#">Twitter / X</a></li>
<li><a className="hover:text-green-400 transition-colors" href="#">Dribbble</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Firma</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-green-400 transition-colors" href="#">O nas</a></li>
<li><a className="hover:text-green-400 transition-colors" href="#">Kariera</a></li>
<li><a className="hover:text-green-400 transition-colors" href="#">Kontakt</a></li>
<li><a className="hover:text-green-400 transition-colors" href="#">Polityka Prywatności</a></li>
</ul>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 uppercase tracking-wider">
<p>© 2024 WebMonkey Agency. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Systemy sprawne
                </div>
</div>
</div>
</footer>

    </>
  );
}
