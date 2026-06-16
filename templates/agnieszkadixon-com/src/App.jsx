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
      

<nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="font-serif text-xl tracking-tighter text-stone-900 z-50 hover:opacity-70 transition-opacity" href="#">
                A.D.
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#about">O mnie</a>
<a className="hover:text-stone-900 transition-colors" href="#work">Oferta</a>
<a className="hover:text-stone-900 transition-colors" href="#writing">Blog</a>
<a className="hover:text-stone-900 transition-colors" href="#contact">Kontakt</a>
<span className="h-4 w-px bg-stone-300 mx-2"></span>
<button className="text-stone-900">PL</button>
<button className="text-stone-400 hover:text-stone-600">EN</button>
</div>
<button className="md:hidden text-stone-900">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
<div className="md:col-span-8">
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight text-stone-900 mb-8">
                    Agnieszka Dixon<br/>
<span className="italic text-stone-600">przestrzeń dla myśli.</span>
</h1>
<p className="text-lg md:text-xl font-light text-stone-600 max-w-2xl leading-relaxed">
                    Tutaj możesz wpisać krótkie wprowadzenie o tym, czym się zajmujesz. To miejsce na Twoją główną myśl przewodnią lub misję zawodową.
                </p>
<div className="mt-12 flex gap-4 text-sm font-medium tracking-wide uppercase text-stone-400">
<span className="flex items-center gap-2"><span className="iconify" data-icon="lucide:arrow-right-circle" data-width="18" strokeWidth="1.5"></span> Konsultacje</span>
<span className="flex items-center gap-2"><span className="iconify" data-icon="lucide:pen-tool" data-width="18" strokeWidth="1.5"></span> Projekty</span>
</div>
</div>
<div className="md:col-span-4">
<div className="aspect-[3/4] w-full bg-stone-200 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 ease-out">

<img alt="Agnieszka Dixon" className="object-cover w-full h-full opacity-90" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</header>
<div className="w-full h-px bg-stone-200"></div>

<section className="py-20 md:py-32 px-6 max-w-7xl mx-auto" id="about">
<div className="grid grid-cols-1 md:grid-cols-12 gap-16">
<div className="md:col-span-4">
<h2 className="font-serif text-3xl tracking-tight text-stone-900 mb-6">O mnie</h2>
<div className="text-stone-500 font-light text-sm leading-7 space-y-4">
<p>
                        W tym miejscu opisz swoje doświadczenie, podejście do pracy lub historię, która doprowadziła Cię do tego punktu. Tekst powinien być zwięzły, ale osobisty.
                    </p>
</div>
</div>
<div className="md:col-span-8 space-y-12">
<div>
<h3 className="font-serif text-2xl tracking-tight text-stone-900 mb-6 flex items-center gap-3">
<span className="iconify" data-icon="lucide:briefcase" data-width="24" strokeWidth="1.5"></span>
                        Doświadczenie
                    </h3>
<div className="border-l border-stone-200 ml-3 pl-8 space-y-10">
<div className="relative group">
<div className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full border border-stone-300 bg-stone-50 group-hover:bg-stone-300 transition-colors"></div>
<span className="text-xs font-medium text-stone-400 mb-1 block">Obecnie</span>
<h4 className="text-lg font-medium text-stone-900">Twój obecny projekt / Rola</h4>
<p className="text-stone-600 font-light mt-1">Lokalizacja lub Online</p>
</div>
<div className="relative group">
<div className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full border border-stone-300 bg-stone-50 group-hover:bg-stone-300 transition-colors"></div>
<span className="text-xs font-medium text-stone-400 mb-1 block">Przeszłość</span>
<h4 className="text-lg font-medium text-stone-900">Poprzednie stanowisko</h4>
<p className="text-stone-600 font-light mt-1">Nazwa Firmy / Instytucji</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-stone-900 text-stone-100 py-24 px-6 relative overflow-hidden" id="work">
<div className="absolute inset-0 opacity-10 pointer-events-none">
<svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-6 text-white">
                        Obszary działania
                    </h2>
<p className="text-lg font-light text-stone-300 mb-8 leading-relaxed">
                        Opis głównych usług lub produktów, które oferujesz swoim klientom. Skup się na korzyściach i wartości, jaką wnosisz.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3">
<span className="iconify text-stone-400 mt-1" data-icon="lucide:check" data-width="18"></span>
<span className="text-stone-300 font-light text-sm">Usługa lub cecha numer jeden</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-stone-400 mt-1" data-icon="lucide:check" data-width="18"></span>
<span className="text-stone-300 font-light text-sm">Usługa lub cecha numer dwa</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-stone-400 mt-1" data-icon="lucide:check" data-width="18"></span>
<span className="text-stone-300 font-light text-sm">Usługa lub cecha numer trzy</span>
</li>
</ul>
<a className="group inline-flex items-center gap-3 text-white border-b border-white pb-1 hover:text-stone-300 hover:border-stone-300 transition-all" href="#contact">
                        Umów się na rozmowę
                        <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="relative h-[400px] w-full bg-stone-800 flex items-center justify-center overflow-hidden">
<img alt="Workspace" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="border border-white/20 p-8 text-center bg-stone-900/50 backdrop-blur-sm">
<span className="block text-3xl font-serif italic mb-2">„Wizja”</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-5xl mx-auto" id="writing">
<div className="flex items-end justify-between mb-16 border-b border-stone-200 pb-4">
<h2 className="font-serif text-3xl tracking-tight text-stone-900">Aktualności</h2>
</div>
<div className="space-y-2">

<a className="group block p-6 -mx-6 rounded-lg hover:bg-white hover:shadow-sm hover:shadow-stone-200/50 transition-all duration-300 border border-transparent hover:border-stone-100" href="#">
<div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
<h3 className="text-xl font-medium text-stone-800 group-hover:text-black tracking-tight">Tytuł Twojego najnowszego artykułu</h3>
<span className="text-xs font-mono text-stone-400 shrink-0">DATA</span>
</div>
<p className="mt-2 text-stone-500 font-light text-sm max-w-2xl group-hover:text-stone-600">
                    Krótki opis lub fragment tekstu. To miejsce, aby podzielić się swoimi przemyśleniami ze światem.
                </p>
<div className="mt-4 flex gap-2">
<span className="px-2 py-0.5 bg-stone-100 text-stone-500 text-[10px] uppercase tracking-wider rounded">Kategoria</span>
</div>
</a>

<a className="group block p-6 -mx-6 rounded-lg hover:bg-white hover:shadow-sm hover:shadow-stone-200/50 transition-all duration-300 border border-transparent hover:border-stone-100" href="#">
<div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
<h3 className="text-xl font-medium text-stone-800 group-hover:text-black tracking-tight">Kolejny ważny temat</h3>
<span className="text-xs font-mono text-stone-400 shrink-0">DATA</span>
</div>
<p className="mt-2 text-stone-500 font-light text-sm max-w-2xl group-hover:text-stone-600">
                    Kolejne przemyślenia, aktualności z życia zawodowego lub ciekawe linki.
                </p>
</a>
</div>
</section>

<footer className="bg-stone-50 border-t border-stone-200 py-20 px-6" id="contact">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
<div>
<a className="font-serif text-2xl tracking-tighter text-stone-900 block mb-6" href="#">A.D.</a>
<p className="text-sm font-light text-stone-500 max-w-xs mb-8">
                    Agnieszka Dixon<br/>
                    Twoja profesjonalna stopka.
                </p>
<div className="flex gap-4">
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="20"></span>
</a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="20"></span>
</a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:mail" data-width="20"></span>
</a>
</div>
</div>
<div className="grid grid-cols-2 gap-12 text-sm font-light text-stone-500">
<div className="flex flex-col gap-3">
<span className="font-medium text-stone-900 mb-1">Kontakt</span>
<a className="hover:text-stone-800 transition-colors" href="mailto:kontakt@agnieszkadixon.com">kontakt@agnieszkadixon.com</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-200 text-xs text-stone-400 flex flex-col md:flex-row justify-between gap-4">
<span>© 2024 Agnieszka Dixon. Wszelkie prawa zastrzeżone.</span>
</div>
</footer>

    </>
  );
}
