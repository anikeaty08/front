import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function openLightbox(src) {
            const lightbox = document.getElementById('lightbox');
            const img = document.getElementById('lightbox-img');
            img.src = src;
            lightbox.classList.add('active');
        }

        // Close lightbox on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.getElementById('lightbox').classList.remove('active');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="lightbox" onclick="this.classList.remove('active')">
<img alt="Powiększone zdjęcie" id="lightbox-img" src=""/>
</div>
<header className="fixed top-0 w-full z-50 backdrop-blur-md border-b bg-black/80 border-slate-900">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="index.html">
<img alt="Architekon Logo" className="h-12" src="logo.png"/>
</a>
<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-100 transition-colors" href="#o-firmie">O firmie</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-100 transition-colors" href="#oferta">Oferta</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-100 transition-colors" href="#realizacje">Realizacje</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-100 transition-colors" href="generated-page (2).html">Pakiety</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-100 transition-colors" href="generated-page (3).html">Inwentaryzacje</a>
</nav>
<div className="lg:hidden">
<button className="text-slate-100 p-2" id="menu-toggle">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
<a className="hidden sm:inline-flex px-4 py-2 text-sm font-medium rounded-none text-black bg-slate-100 hover:bg-slate-200" href="#kontakt">Kontakt</a>
</div>
<div className="hidden lg:hidden border-t border-slate-900 bg-black/95 backdrop-blur-lg" id="mobile-menu">
<nav className="flex flex-col items-end gap-4 p-6">
<a className="text-sm font-medium text-slate-500 hover:text-slate-100 transition-colors text-right" href="#o-firmie">O firmie</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-100 transition-colors text-right" href="#oferta">Oferta</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-100 transition-colors text-right" href="#realizacje">Realizacje</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-100 transition-colors text-right" href="generated-page (2).html">Pakiety</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-100 transition-colors text-right" href="generated-page (3).html">Inwentaryzacje</a>
</nav>
</div>
</header>
<main className="pt-24">

<section className="lg:py-24 max-w-7xl mx-auto px-6 py-16">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-none border mb-6 bg-slate-950 border-slate-800">
<span className="w-2 h-2 rounded-none bg-green-500"></span>
<span className="text-xs font-medium uppercase text-slate-400">Usługi Projektowe Adam Śliwka</span>
</div>
<h1 className="text-5xl lg:text-6xl font-medium tracking-tight mb-6 leading-[1.1] text-slate-100">Projektujemy funkcjonalną <br/> <span className="text-slate-600">przestrzeń do życia.</span></h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg">Tworzymy nowoczesne projekty budowlane, nadzorujemy inwestycje i urzeczywistniamy wizje naszych inwestorów przy użyciu najnowszych technologii.</p>
<div className="flex flex-wrap gap-4">
<a className="px-6 py-3 text-sm font-medium border rounded-none text-slate-100 bg-black border-slate-800 hover:border-slate-600 transition-all" href="#oferta">Zobacz ofertę</a>
<a className="px-6 py-3 text-sm font-medium text-slate-500 hover:text-slate-100 transition-colors" href="generated-page (2).html">Pakiety usług →</a>
</div>
</div>
<div className="relative h-[400px] lg:h-[500px] rounded-none overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">

<video autoplay="" className="absolute inset-0 w-full h-full object-cover" id="hero-video" muted="" playsinline="" preload="auto" webkit-playsinline="">
<source src="video2.mp4" type="video/mp4"/>
</video>
</div>
</div>
</section>

<section className="border-y border-slate-900 bg-slate-950/50" id="o-firmie">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800 text-center md:text-left">
<div className="px-4">
<h3 className="text-2xl font-semibold mb-2 text-slate-100">Kompleksowość</h3>
<p className="text-sm text-slate-500">Od pierwszej kreski koncepcyjnej, przez projekt budowlany, aż po finalny nadzór inwestorski.</p>
</div>
<div className="px-4 pt-8 md:pt-0">
<h3 className="text-2xl font-semibold mb-2 text-slate-100">Uprawnienia</h3>
<p className="text-sm text-slate-500">Posiadamy pełne uprawnienia do projektowania i kierowania robotami w wielu branżach.</p>
</div>
<div className="px-4 pt-8 md:pt-0">
<h3 className="text-2xl font-semibold mb-2 text-slate-100">Dialog</h3>
<p className="text-sm text-slate-500">Najważniejszy jest dla nas inwestor. Słuchamy potrzeb i przekuwamy je w funkcjonalną architekturę.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="oferta">
<div className="mb-12">
<h2 className="text-3xl font-medium tracking-tight mb-4 text-slate-100">Zakres działalności</h2>
<p className="text-slate-500 max-w-2xl">Zapewniamy profesjonalne wsparcie projektowe w pełnym zakresie branżowym.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-6 rounded-none border border-slate-800 bg-black hover:border-slate-600 transition-all group">
<div className="w-12 h-12 rounded-none flex items-center justify-center mb-4 bg-slate-900 text-slate-100 group-hover:bg-slate-100 group-hover:text-black transition-colors"><span className="iconify" data-icon="lucide:home" data-width="24"></span></div>
<h3 className="font-medium mb-2 text-slate-100">Domy i Mieszkania</h3>
<p className="text-xs text-slate-500">Unikalne projekty domów jednorodzinnych, wielorodzinnych oraz profesjonalne adaptacje projektów gotowych.</p>
</div>
<div className="p-6 rounded-none border border-slate-800 bg-black hover:border-slate-600 transition-all group">
<div className="w-12 h-12 rounded-none flex items-center justify-center mb-4 bg-slate-900 text-slate-100 group-hover:bg-slate-100 group-hover:text-black transition-colors"><span className="iconify" data-icon="lucide:building-2" data-width="24"></span></div>
<h3 className="font-medium mb-2 text-slate-100">Użyteczność i Przemysł</h3>
<p className="text-xs text-slate-500">Projektowanie budynków użyteczności publicznej, hal, obiektów usługowych oraz infrastruktury przemysłowej.</p>
</div>
<a className="p-6 rounded-none border border-slate-800 bg-black hover:border-slate-600 transition-all group block text-left" href="generated-page (3).html">
<div className="w-12 h-12 rounded-none flex items-center justify-center mb-4 bg-slate-900 text-slate-100 group-hover:bg-slate-100 group-hover:text-black transition-colors"><span className="iconify" data-icon="lucide:ruler" data-width="24"></span></div>
<h3 className="font-medium mb-2 text-slate-100">Inwentaryzacje</h3>
<p className="text-xs text-slate-500">Precyzyjne pomiary, ekspertyzy stanu technicznego oraz inwentaryzacje zabytków.</p>
</a>
<div className="p-6 rounded-none border border-slate-800 bg-black hover:border-slate-600 transition-all group">
<div className="w-12 h-12 rounded-none flex items-center justify-center mb-4 bg-slate-900 text-slate-100 group-hover:bg-slate-100 group-hover:text-black transition-colors"><span className="iconify" data-icon="lucide:hard-hat" data-width="24"></span></div>
<h3 className="font-medium mb-2 text-slate-100">Nadzór</h3>
<p className="text-xs text-slate-500">Pełnienie funkcji kierownika budowy oraz kompleksowy nadzór autorski i inwestorski.</p>
</div>
</div>
</section>

<section className="py-24 bg-slate-100 text-black" id="realizacje">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 flex justify-between items-end">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-4">Wybrane realizacje</h2>
<p className="text-slate-600">Zobacz nasze najciekawsze projekty oddane do użytku.</p>
</div>
<a className="text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all" href="#">Pełna galeria <span className="iconify" data-icon="lucide:arrow-right"></span></a>
</div>
<div className="grid md:grid-cols-3 gap-4">
<div className="group relative overflow-hidden rounded-none aspect-[4/3] bg-slate-200 shadow-lg cursor-zoom-in gallery-item" onclick="openLightbox('5.jpg')">
<img alt="Realizacja 5" className="w-full h-full object-cover transition-all duration-700" src="5.jpg"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 bg-white/95 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
<p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Projekt Architektoniczny</p>
<p className="text-sm font-semibold">Nowoczesna bryła budynku</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-none aspect-[4/3] bg-slate-200 shadow-lg cursor-zoom-in gallery-item" onclick="openLightbox('6.jpg')">
<img alt="Realizacja 6" className="w-full h-full object-cover transition-all duration-700" src="6.jpg"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 bg-white/95 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
<p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Wnętrza i Detal</p>
<p className="text-sm font-semibold">Funkcjonalne rozwiązania</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-none aspect-[4/3] bg-slate-200 shadow-lg cursor-zoom-in gallery-item" onclick="openLightbox('komisariat.jpg')">
<img alt="Komisariat Rzeczny" className="w-full h-full object-cover transition-all duration-700" src="komisariat.jpg"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 bg-white/95 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
<p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Budownictwo Użyteczności Publicznej</p>
<p className="text-sm font-semibold">Komisariat Rzeczny - realizacja</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-black py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="mb-16">
<h2 className="text-4xl font-medium tracking-tight mb-4 text-slate-100">Nasza wizja w ruchu</h2>
<div className="w-20 h-1 bg-slate-800 mx-auto rounded-none"></div>
</div>
<div className="relative group max-w-5xl mx-auto">
<div className="absolute -inset-4 bg-gradient-to-r from-slate-900 to-slate-800 rounded-none blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
<div className="relative aspect-video rounded-none overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover scale-[1.02] opacity-80" id="reveal-video" loop="" muted="" playsinline="" preload="auto" webkit-playsinline="">
<source src="video1.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="kontakt">
<div className="rounded-none p-8 lg:p-12 bg-slate-950 border border-slate-900 text-center shadow-2xl">
<h2 className="text-3xl font-medium text-slate-100 mb-6">Rozpocznijmy współpracę</h2>
<p className="text-slate-500 mb-10 max-w-xl mx-auto text-lg">Masz wizję swojego wymarzonego domu lub inwestycji? Skontaktuj się z nami, aby omówić szczegóły i otrzymać wstępną wycenę.</p>
<div className="flex flex-wrap justify-center gap-12 mb-12">
<div className="text-center group cursor-pointer">
<p className="text-xs uppercase tracking-widest text-slate-600 mb-2 font-bold group-hover:text-slate-400 transition-colors">Zadzwoń do biura</p>
<p className="text-slate-100 text-xl font-semibold">+48 123 456 789</p>
</div>
<div className="text-center group cursor-pointer">
<p className="text-xs uppercase tracking-widest text-slate-600 mb-2 font-bold group-hover:text-slate-400 transition-colors">Napisz e-mail</p>
<p className="text-slate-100 text-xl font-semibold">kontakt@architekon.pl</p>
</div>
</div>
<a className="inline-flex items-center gap-2 px-12 py-4 bg-slate-100 text-black font-bold rounded-none hover:bg-slate-200 hover:scale-105 transition-all shadow-xl" href="mailto:kontakt@architekon.pl">Wyślij wiadomość bezpośrednią</a>
</div>
</section>
</main>
<footer className="py-16 bg-black border-t border-slate-900 text-center text-xs text-slate-600">
<div className="max-w-7xl mx-auto px-6">
<img alt="Architekon Logo" className="h-12 mx-auto mb-8" src="logo.png"/>
<p>© 2023 Usługi Projektowe Adam Śliwka.</p>
</div>
</footer>



    </>
  );
}
