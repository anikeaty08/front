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
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
gray: {
50: '#f9fafb',
100: '#f3f4f6',
200: '#e5e7eb',
300: '#d1d5db',
400: '#9ca3af',
500: '#6b7280',
600: '#4b5563',
700: '#374151',
800: '#1f2937',
900: '#111827',
}
}
}
}
}



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
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-white/20 transition-all duration-300">
<div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-xl font-medium tracking-tight text-neutral-900 flex items-center gap-2" href="#start">
                MEDIMO INSTYTUT
            </a>

<div className="hidden md:flex items-center gap-10">
<a className="text-sm font-normal text-neutral-600 transition-colors hover:text-neutral-900 uppercase tracking-wide" href="#uslugi">Usługi</a>
<a className="text-sm font-normal text-neutral-600 transition-colors hover:text-neutral-900 uppercase tracking-wide" href="#o-nas">O Instytucie</a>
<a className="text-sm font-normal text-neutral-600 transition-colors hover:text-neutral-900 uppercase tracking-wide" href="#opinie">Opinie</a>
<a className="text-sm font-normal text-neutral-600 transition-colors hover:text-neutral-900 uppercase tracking-wide" href="#faq">FAQ</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden lg:block text-sm font-medium text-neutral-900" href="tel:+48748670000">+48 74 867 00 00</a>
<a className="hidden md:flex items-center gap-2 text-xs font-medium py-3 px-6 rounded-full transition-all bg-neutral-900 hover:bg-neutral-800 text-white shadow-lg uppercase tracking-wide" href="#kontakt">
<span>Umów Wizytę</span>
</a>
<button className="md:hidden text-neutral-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative h-screen w-full flex items-center justify-center overflow-hidden" id="start">

<div className="hero-video-container bg-neutral-100">
<video autoplay="" className="hero-video" loop="" muted="" playsinline="" poster="https://images.pexels.com/photos/4046316/pexels-photo-4046316.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1">
<source src="https://videos.pexels.com/video-files/5091624/5091624-uhd_2560_1440_25fps.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
</div>

<div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 pt-20">
<div className="max-w-4xl">
<span className="inline-block py-1 px-3 rounded-full bg-white/50 backdrop-blur-sm border border-white/60 text-[10px] font-medium tracking-widest uppercase text-neutral-800 mb-6">
                    Instytut Zdrowia i Urody w Kłodzku
                </span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-neutral-900 leading-[0.95] mb-8">
                    Twoje Zdrowie <br/>
<span className="text-neutral-500/80 italic font-light">Zasługuje</span> Na Najlepsze.
                </h1>
<p className="text-lg md:text-xl font-light text-neutral-700 max-w-lg mb-10 leading-relaxed">
                    Zaawansowana stomatologia i medycyna estetyczna na styku nauki i piękna. Doświadcz opieki na światowym poziomie w sercu Kłodzka.
                </p>
<div className="flex flex-col sm:flex-row gap-5">
<a className="inline-flex justify-center items-center gap-3 px-8 py-4 rounded-full font-medium text-sm transition-all bg-neutral-900 text-white hover:bg-neutral-800 hover:scale-105 duration-300 shadow-xl" href="#kontakt">
                        Umów Wizytę
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-3 px-8 py-4 rounded-full font-medium text-sm transition-all bg-white/40 backdrop-blur-md border border-white/60 text-neutral-900 hover:bg-white/60" href="#uslugi">
                        Poznaj Zabiegi
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
<a href="#uslugi">
<iconify-icon className="text-neutral-400 hover:text-neutral-900 transition-colors" icon="solar:arrow-down-linear" width="24"></iconify-icon>
</a>
</div>
</section>

<section className="bg-white border-b border-neutral-100">
<div className="max-w-[1400px] mx-auto px-6 py-16">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 divide-x divide-neutral-100">
<div className="pl-4 first:pl-0">
<h3 className="text-4xl font-normal text-neutral-900 tracking-tight">Trzy</h3>
<p className="text-xs text-neutral-500 font-medium uppercase tracking-widest mt-2">Filary Zdrowia</p>
</div>
<div className="pl-12">
<h3 className="text-4xl font-normal text-neutral-900 tracking-tight">10k+</h3>
<p className="text-xs text-neutral-500 font-medium uppercase tracking-widest mt-2">Zadowolonych Pacjentów</p>
</div>
<div className="pl-12">
<h3 className="text-4xl font-normal text-neutral-900 tracking-tight">Nowoczesność</h3>
<p className="text-xs text-neutral-500 font-medium uppercase tracking-widest mt-2">Światowe Standardy</p>
</div>
<div className="pl-12">
<h3 className="text-4xl font-normal text-neutral-900 tracking-tight">Kłodzko</h3>
<p className="text-xs text-neutral-500 font-medium uppercase tracking-widest mt-2">Twoja Lokalizacja</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white scroll-mt-20" id="uslugi">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-5xl font-normal tracking-tight mb-6 text-neutral-900">
                        Kompleksowa Opieka
                    </h2>
<p className="text-neutral-500 font-light text-lg max-w-xl">
                        Nasze trzy główne filary to gwarancja bezpieczeństwa i doskonałych rezultatów. Specjalizujemy się w pełnym zakresie usług dla Twojego zdrowia i urody.
                    </p>
</div>
<a className="group flex items-center gap-2 text-sm font-medium transition-colors text-neutral-900 hover:text-neutral-600" href="#kontakt">
<span className="border-b border-neutral-900 pb-0.5 group-hover:border-neutral-600">Skonsultuj Plan Leczenia</span>
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative overflow-hidden rounded-2xl bg-neutral-50 aspect-[4/5] md:aspect-[3/4]">
<img alt="Zaawansowana Stomatologia" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.pexels.com/photos/384555/pexels-photo-384555.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end">
<div>
<h3 className="text-2xl font-normal tracking-tight text-white mb-2">Zaawansowana Stomatologia</h3>
<p className="text-white/80 text-sm font-light">Implantologia, Protetyka, Ortodoncja</p>
</div>
<div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-neutral-50 aspect-[4/5] md:aspect-[3/4]">
<img alt="Medycyna Estetyczna" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.pexels.com/photos/5069454/pexels-photo-5069454.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end">
<div>
<h3 className="text-2xl font-normal tracking-tight text-white mb-2">Medycyna Estetyczna</h3>
<p className="text-white/80 text-sm font-light">Modelowanie, Anti-aging, Lasery</p>
</div>
<div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-neutral-50 aspect-[4/5] md:aspect-[3/4]">
<img alt="Diagnostyka" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.pexels.com/photos/4167544/pexels-photo-4167544.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end">
<div>
<h3 className="text-2xl font-normal tracking-tight text-white mb-2">Diagnostyka</h3>
<p className="text-white/80 text-sm font-light">Tomografia 3D, RTG cyfrowe</p>
</div>
<div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 scroll-mt-20" id="o-nas">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-20">
<div className="w-full lg:w-1/2 order-2 lg:order-1">
<div className="relative group">
<div className="absolute -inset-4 bg-white rounded-3xl rotate-2 opacity-50 transition-transform group-hover:rotate-1"></div>
<img alt="Zespół Medimo" className="relative w-full h-auto rounded-2xl shadow-sm object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f1e96af5-9f33-4537-99ef-4656f1cfaf77_1600w.jpg"/>
</div>
</div>
<div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-8">
<div className="space-y-4">
<span className="text-xs font-medium uppercase tracking-widest text-neutral-400">O Instytucie</span>
<h2 className="text-4xl md:text-5xl font-normal text-neutral-900 tracking-tight leading-tight">Medimo Instytut</h2>
</div>
<p className="text-lg text-neutral-600 font-light leading-relaxed">
                        Jesteśmy nowoczesnym instytutem w Kłodzku, łączącym zaawansowaną wiedzę medyczną z pasją do naturalnego piękna. Nasz doświadczony zespół specjalistów korzysta z innowacyjnych technologii, aby zapewnić najwyższe standardy leczenia stomatologicznego i zabiegów medycyny estetycznej.
                    </p>
<div className="grid grid-cols-2 gap-8 border-t border-neutral-200 pt-8 mt-8">
<div>
<span className="block text-3xl font-normal tracking-tight text-neutral-900">#1</span>
<span className="text-sm text-neutral-500">Wybór w Kłodzku</span>
</div>
<div>
<span className="block text-3xl font-normal tracking-tight text-neutral-900">Premium</span>
<span className="text-sm text-neutral-500">Jakość Opieki</span>
</div>
</div>
<div className="pt-4">
<a className="inline-flex justify-center items-center gap-2 border-b-2 border-neutral-900 pb-1 font-medium text-sm transition-colors text-neutral-900 hover:text-neutral-600" href="#kontakt">
                            Skontaktuj się z nami
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden bg-white scroll-mt-20" id="opinie">
<div className="max-w-[1400px] mx-auto px-6">
<h2 className="text-3xl font-normal tracking-tight mb-16 text-center text-neutral-900">Historie Pacjentów</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-10 rounded-3xl bg-neutral-50 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
<div>
<div className="flex gap-1 mb-6 text-neutral-900">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="font-light text-lg leading-relaxed text-neutral-700">"Wizyta w Medimo Instytut to czysta przyjemność. Profesjonalne podejście do pacjenta, najnowocześniejszy sprzęt i ogromna wiedza. Moje leczenie implantologiczne przebiegło bezboleśnie."</p>
</div>
<div className="mt-8 border-t border-neutral-200 pt-6">
<span className="text-sm font-medium text-neutral-900 uppercase tracking-wide">Anna M.</span>
</div>
</div>

<div className="p-10 rounded-3xl bg-neutral-50 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
<div className="">
<div className="flex gap-1 mb-6 text-neutral-900">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="font-light text-lg leading-relaxed text-neutral-700">"Zabiegi medycyny estetycznej wykonane z niezwykłym wyczuciem. Zespół doskonale potrafi doradzić, stawiając na naturalny efekt i pełne bezpieczeństwo. Polecam każdemu."</p>
</div>
<div className="mt-8 border-t border-neutral-200 pt-6">
<span className="text-sm font-medium text-neutral-900 uppercase tracking-wide">Katarzyna W.</span>
</div>
</div>

<div className="p-10 rounded-3xl bg-neutral-50 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
<div>
<div className="flex gap-1 mb-6 text-neutral-900">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="font-light text-lg leading-relaxed text-neutral-700">"Nigdy wcześniej nie spotkałem się z tak dokładną diagnostyką. Tomografia na miejscu zaoszczędziła mi mnóstwo czasu, a lekarz wszystko dokładnie wytłumaczył. Najwyższy poziom."</p>
</div>
<div className="mt-8 border-t border-neutral-200 pt-6">
<span className="text-sm font-medium text-neutral-900 uppercase tracking-wide">Piotr S.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-100 bg-white scroll-mt-20" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-normal tracking-tight mb-12 text-center text-neutral-900">Często Zadawane Pytania</h2>
<div className="space-y-4">
<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 rounded-xl cursor-pointer border transition-colors bg-white border-neutral-200 hover:bg-neutral-50">
<h2 className="text-base font-normal text-neutral-900">Czy oferujecie bezpłatne konsultacje wstępne?</h2>
<span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
<iconify-icon className="absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity text-neutral-400" icon="solar:add-circle-linear" width="20"></iconify-icon>
<iconify-icon className="absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity text-neutral-900" icon="solar:minus-circle-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-2 text-neutral-600 text-sm font-light leading-relaxed">
                        W Medimo Instytut cenimy precyzję. Nasze konsultacje są w pełni merytoryczne i obejmują profesjonalną diagnostykę, na podstawie której ustalamy kosztorys oraz szczegółowy plan leczenia. O szczegóły i koszty wizyt zapytaj naszą rejestrację.
                    </div>
</details>
<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 rounded-xl cursor-pointer border transition-colors bg-white border-neutral-200 hover:bg-neutral-50">
<h2 className="text-base font-normal text-neutral-900">Jakim sprzętem diagnostycznym dysponujecie?</h2>
<span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
<iconify-icon className="absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity text-neutral-400" icon="solar:add-circle-linear" width="20"></iconify-icon>
<iconify-icon className="absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity text-neutral-900" icon="solar:minus-circle-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-2 text-neutral-600 text-sm font-light leading-relaxed">
                        Nasza klinika wyposażona jest w najnowocześniejsze technologie, w tym Tomografię 3D (CBCT), cyfrowe aparaty RTG oraz zaawansowane skanery wewnątrzustne. Dzięki temu pełna diagnostyka odbywa się na miejscu.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white scroll-mt-20" id="aktualnosci">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex items-center justify-between mb-12">
<h2 className="text-3xl font-normal tracking-tight">Aktualności i Innowacje</h2>
<a className="text-sm font-medium border-b border-white/30 pb-1 transition-colors hover:text-white/70 hover:border-white/70" href="#kontakt">Zapytaj o szczegóły</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
<a className="group block" href="#kontakt">
<div className="overflow-hidden rounded-2xl mb-6 aspect-video bg-neutral-800">
<img alt="Innowacje Medimo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" src="https://cdn.prod.website-files.com/605eea74abaa953c37167749/698c2702232508e34c78f994_laser%20hair%20loss%20(2).jpg"/>
</div>
<div className="flex items-center gap-3 mb-3 text-xs font-medium uppercase tracking-widest text-neutral-400">
<span>Technologia</span>
<span className="w-1 h-1 rounded-full bg-neutral-400"></span>
<span>Nowość</span>
</div>
<h3 className="text-2xl font-normal tracking-tight mb-3 group-hover:text-neutral-300 transition-colors">Cyfrowe projektowanie uśmiechu</h3>
<p className="text-neutral-400 font-light">Zobacz swój nowy uśmiech jeszcze przed rozpoczęciem leczenia, dzięki zaawansowanej wizualizacji 3D.</p>
</a>
<a className="group block" href="#kontakt">
<div className="overflow-hidden rounded-2xl mb-6 aspect-video bg-neutral-800">
<img alt="Zabiegi Premium" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" src="https://cdn.prod.website-files.com/605eea74abaa953c37167749/698327944dffec8f170d38ad_laser%20hair%20loss.jpg"/>
</div>
<div className="flex items-center gap-3 mb-3 text-xs font-medium uppercase tracking-widest text-neutral-400">
<span>Estetyka</span>
<span className="w-1 h-1 rounded-full bg-neutral-400"></span>
<span>Premium</span>
</div>
<h3 className="text-2xl font-normal tracking-tight mb-3 group-hover:text-neutral-300 transition-colors">Kompleksowe terapie Anti-Aging</h3>
<p className="text-neutral-400 font-light">Odkryj innowacyjne połączenia zabiegów laserowych i kosmetologicznych w Medimo Instytut.</p>
</a>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-200 scroll-mt-20" id="kontakt">
<div className="max-w-[1400px] mx-auto px-6 py-20">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">

<div className="md:col-span-4 space-y-6">
<a className="text-xl font-normal tracking-tight text-neutral-900 block" href="#start">MEDIMO INSTYTUT</a>
<p className="text-sm text-neutral-500 leading-relaxed max-w-xs font-light">
                Twoje centrum zaawansowanej stomatologii i medycyny estetycznej. Doświadcz opieki na najwyższym poziomie w Kłodzku.
              </p>
<div className="space-y-2 pt-2">
<p className="text-sm font-medium text-neutral-900">ul. Przykładowa 12, 57-300 Kłodzko</p>
<p className="text-sm font-medium text-neutral-900">Tel: +48 74 867 00 00</p>
<p className="text-sm font-medium text-neutral-900">rejestracja@medimo-instytut.pl</p>
</div>
<div className="flex gap-4 pt-4">
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="md:col-span-2">
<h4 className="text-xs font-medium uppercase tracking-widest text-neutral-900 mb-6">Nawigacja</h4>
<ul className="space-y-4 text-sm text-neutral-500 font-light">
<li><a className="hover:text-neutral-900 transition-colors" href="#start">Start</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#uslugi">Nasze Usługi</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#o-nas">O Instytucie</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#opinie">Opinie</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-xs font-medium uppercase tracking-widest text-neutral-900 mb-6">Informacje</h4>
<ul className="space-y-4 text-sm text-neutral-500 font-light">
<li><a className="hover:text-neutral-900 transition-colors" href="#">Polityka Prywatności</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Regulamin</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Cennik</a></li>
</ul>
</div>

<div className="md:col-span-4">
<h4 className="text-xs font-medium uppercase tracking-widest text-neutral-900 mb-6">Zarezerwuj Termin</h4>
<p className="text-sm text-neutral-500 font-light mb-4">Zostaw swój numer telefonu, a nasza rejestracja oddzwoni do Ciebie w celu ustalenia terminu wizyty.</p>
<form className="flex flex-col gap-4" onsubmit="event.preventDefault();">
<div className="flex gap-2">
<input className="w-full px-0 py-2 bg-transparent border-b border-neutral-300 text-sm placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors" placeholder="Twój numer telefonu" type="tel"/>
<button className="text-neutral-900 hover:text-neutral-600 font-medium text-sm whitespace-nowrap">Wyślij</button>
</div>
<p className="text-xs text-neutral-400">Wysyłając formularz, akceptujesz politykę prywatności.</p>
</form>
</div>
</div>
<div className="mt-20 pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400">
<p>© 2023 Medimo Instytut Kłodzko. Wszelkie prawa zastrzeżone.</p>
<p>Stworzone z pasją do piękna</p>
</div>
</div>
</footer>

    </>
  );
}
