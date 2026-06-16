import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 glass border-b border-[#23243A]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-20 items-center">
<div className="flex-shrink-0 flex items-center">
<a className="text-xl font-bold tracking-tighter text-white" href="index.html">
                        MODERNÍ<span className="text-[#6F3BFF]">PROVOZOVNA</span>
</a>
</div>
<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-[#B8B9C9] hover:text-white transition-colors" href="sluzby.html">Služby</a>
<a className="text-sm font-medium text-[#B8B9C9] hover:text-white transition-colors" href="realizace.html">Realizace</a>
<a className="text-sm font-medium text-[#B8B9C9] hover:text-white transition-colors" href="katalog.html">Katalog</a>
<a className="text-sm font-medium text-[#B8B9C9] hover:text-white transition-colors" href="o-nas.html">O nás</a>
<a className="px-5 py-2.5 rounded-full bg-[#111226] border border-[#23243A] text-white text-sm font-medium hover:border-[#6F3BFF] transition-all" href="kontakt.html">Kontakt</a>
<a className="px-5 py-2.5 rounded-full bg-[#6F3BFF] text-white text-sm font-semibold hover:bg-[#5829CC] shadow-[0_0_15px_rgba(111,59,255,0.4)] transition-all" href="kontakt.html">Konzultace</a>
</div>
<div className="md:hidden flex items-center">
<button className="text-white hover:text-[#6F3BFF]" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-[#0B0B10] border-b border-[#23243A]" id="mobile-menu">
<div className="px-4 pt-4 pb-6 space-y-4">
<a className="block text-base font-medium text-[#B8B9C9]" href="sluzby.html">Služby</a>
<a className="block text-base font-medium text-[#B8B9C9]" href="realizace.html">Realizace</a>
<a className="block text-base font-medium text-[#B8B9C9]" href="katalog.html">Katalog</a>
<a className="block text-base font-medium text-[#B8B9C9]" href="o-nas.html">O nás</a>
<a className="block w-full text-center px-4 py-3 rounded-lg bg-[#6F3BFF] text-white font-semibold" href="kontakt.html">Domluvit konzultaci</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#6F3BFF] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                Prostor, který prodává <br className="hidden md:block"/> a dává smysl.
            </h1>
<p className="text-lg md:text-xl text-[#B8B9C9] max-w-2xl mx-auto mb-10 leading-relaxed">
                Specializujeme se na návrhy a realizace moderních optik a retailových interiérů. Od prvního nákresu po předání klíčů.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#6F3BFF] text-white font-semibold text-base hover:bg-[#5829CC] shadow-[0_0_20px_rgba(111,59,255,0.4)] transition-all flex items-center justify-center gap-2" href="kontakt.html">
                    Domluvit konzultaci <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#111226] border border-[#23243A] text-white font-medium text-base hover:border-[#B89CFF] transition-all flex items-center justify-center gap-2" href="katalog.html">
                    Prohlédnout katalog
                </a>
</div>
</div>
</section>

<section className="py-20 border-t border-[#23243A]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-3 gap-8 text-center">
<div className="p-6">
<div className="w-12 h-12 bg-[#111226] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#23243A]">
<i className="w-6 h-6 text-[#B89CFF]" data-lucide="layout-grid"></i>
</div>
<h3 className="text-xl font-semibold mb-2 text-white">Chaos v prostoru</h3>
<p className="text-[#B8B9C9]">Zákazníci bloudí, zboží není vidět. My vnášíme do chaosu řád a logiku.</p>
</div>
<div className="p-6">
<div className="w-12 h-12 bg-[#111226] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#23243A]">
<i className="w-6 h-6 text-[#B89CFF]" data-lucide="trending-up"></i>
</div>
<h3 className="text-xl font-semibold mb-2 text-white">Nízké konverze</h3>
<p className="text-[#B8B9C9]">Interiér neprodává. Měníme pasivní regály na aktivní prodejní nástroje.</p>
</div>
<div className="p-6">
<div className="w-12 h-12 bg-[#111226] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#23243A]">
<i className="w-6 h-6 text-[#B89CFF]" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-semibold mb-2 text-white">Důvěra značky</h3>
<p className="text-[#B8B9C9]">Zastaralý vzhled snižuje hodnotu zboží. Vytváříme prémiový dojem.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0F0F16]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Komplexní řešení</h2>
<p className="text-[#B8B9C9]">Nejsme jen dodavatelé nábytku. Jsme partneři pro váš růst.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-[#111226] border border-[#23243A] p-8 rounded-2xl card-hover group">
<i className="w-8 h-8 text-[#6F3BFF] mb-6" data-lucide="pen-tool"></i>
<h3 className="text-lg font-semibold text-white mb-3">Koncept a návrh</h3>
<p className="text-sm text-[#B8B9C9] mb-6">Analýza potřeb, dispoziční řešení a 3D vizualizace vašeho nového prostoru.</p>
<a className="text-sm font-medium text-[#B89CFF] group-hover:text-white flex items-center gap-1" href="sluzby.html">Zjistit víc <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>

<div className="bg-[#111226] border border-[#23243A] p-8 rounded-2xl card-hover group">
<i className="w-8 h-8 text-[#6F3BFF] mb-6" data-lucide="ruler"></i>
<h3 className="text-lg font-semibold text-white mb-3">Projekt a koordinace</h3>
<p className="text-sm text-[#B8B9C9] mb-6">Technická dokumentace, jednání s úřady a řízení profesí na stavbě.</p>
<a className="text-sm font-medium text-[#B89CFF] group-hover:text-white flex items-center gap-1" href="sluzby.html">Zjistit víc <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>

<div className="bg-[#111226] border border-[#23243A] p-8 rounded-2xl card-hover group">
<i className="w-8 h-8 text-[#6F3BFF] mb-6" data-lucide="box"></i>
<h3 className="text-lg font-semibold text-white mb-3">Vybavení a moduly</h3>
<p className="text-sm text-[#B8B9C9] mb-6">Dodávka specializovaných prodejních systémů, osvětlení a doplňků.</p>
<a className="text-sm font-medium text-[#B89CFF] group-hover:text-white flex items-center gap-1" href="sluzby.html">Zjistit víc <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>

<div className="bg-[#111226] border border-[#23243A] p-8 rounded-2xl card-hover group">
<i className="w-8 h-8 text-[#6F3BFF] mb-6" data-lucide="hammer"></i>
<h3 className="text-lg font-semibold text-white mb-3">Realizace a montáž</h3>
<p className="text-sm text-[#B8B9C9] mb-6">Finální fit-out, truhlářská výroba a odborná instalace na místě.</p>
<a className="text-sm font-medium text-[#B89CFF] group-hover:text-white flex items-center gap-1" href="sluzby.html">Zjistit víc <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-[#23243A]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-bold tracking-tight mb-2">Vybrané realizace</h2>
<p className="text-[#B8B9C9]">Prohlédněte si výsledky naší práce.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-[#B89CFF] hover:text-white transition-colors" href="realizace.html">Další realizace <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-[#1A1B2E] rounded-2xl mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10] to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4">
<span className="text-xs font-bold text-[#6F3BFF] uppercase tracking-wider bg-[#111226] px-2 py-1 rounded">Optika</span>
</div>
</div>
<h3 className="text-lg font-semibold group-hover:text-[#6F3BFF] transition-colors">Optika Novák, Brno</h3>
<p className="text-sm text-[#B8B9C9]">Kompletní rebranding a rekonstrukce prodejny.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-[#1A1B2E] rounded-2xl mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10] to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4">
<span className="text-xs font-bold text-[#35D07F] uppercase tracking-wider bg-[#111226] px-2 py-1 rounded">Showroom</span>
</div>
</div>
<h3 className="text-lg font-semibold group-hover:text-[#6F3BFF] transition-colors">TechStore, Praha</h3>
<p className="text-sm text-[#B8B9C9]">Návrh experience zóny a modulárního nábytku.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-[#1A1B2E] rounded-2xl mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10] to-transparent opacity-60"></div>
<div className="absolute bottom-4 left-4">
<span className="text-xs font-bold text-[#C9A46D] uppercase tracking-wider bg-[#111226] px-2 py-1 rounded">Retail</span>
</div>
</div>
<h3 className="text-lg font-semibold group-hover:text-[#6F3BFF] transition-colors">Boutique Concept, Ostrava</h3>
<p className="text-sm text-[#B8B9C9]">Luxusní interiér s důrazem na osvětlení.</p>
</div>
</div>
<div className="mt-8 text-center md:hidden">
<a className="btn-secondary inline-flex items-center gap-2 text-white border border-[#23243A] px-6 py-3 rounded-full" href="realizace.html">Další realizace <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
</div>
</section>

<section className="py-16 bg-[#111226] border-y border-[#23243A]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<div className="text-3xl font-bold text-white mb-1">7+ let</div>
<div className="text-xs text-[#B8B9C9] uppercase tracking-wide">Praxe v oboru</div>
</div>
<div>
<div className="text-3xl font-bold text-white mb-1">50+</div>
<div className="text-xs text-[#B8B9C9] uppercase tracking-wide">Realizací</div>
</div>
<div>
<div className="text-3xl font-bold text-white mb-1">CZ/SK</div>
<div className="text-xs text-[#B8B9C9] uppercase tracking-wide">Působnost</div>
</div>
<div>
<div className="text-3xl font-bold text-white mb-1">100%</div>
<div className="text-xs text-[#B8B9C9] uppercase tracking-wide">Garance termínů</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#0B0B10] border-t border-[#23243A] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-12 mb-16">
<div>
<h2 className="text-3xl font-bold tracking-tight mb-4">Chceš provozovnu, která funguje?</h2>
<p className="text-[#B8B9C9] mb-8 max-w-md">Nezávazně probereme vaše představy, rozpočet a možnosti. Žádné obchodní klišé, jen upřímná rada.</p>
<a className="px-8 py-4 rounded-full bg-[#6F3BFF] text-white font-semibold hover:bg-[#5829CC] shadow-[0_0_20px_rgba(111,59,255,0.4)] transition-all inline-block" href="kontakt.html">
                        Domluvit konzultaci
                    </a>
</div>
<div className="grid grid-cols-2 gap-8">
<div>
<h4 className="text-white font-semibold mb-4">Navigace</h4>
<ul className="space-y-3 text-[#B8B9C9] text-sm">
<li><a className="hover:text-white" href="sluzby.html">Služby</a></li>
<li><a className="hover:text-white" href="realizace.html">Realizace</a></li>
<li><a className="hover:text-white" href="katalog.html">Katalog</a></li>
<li><a className="hover:text-white" href="o-nas.html">O nás</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Kontakt</h4>
<ul className="space-y-3 text-[#B8B9C9] text-sm">
<li>info@moderniprovozovna.cz</li>
<li>+420 123 456 789</li>
<li>Praha / Brno / Bratislava</li>
</ul>
</div>
</div>
</div>
<div className="border-t border-[#23243A] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#6B6C7E]">
<p>© 2024 Moderní Provozovna. Všechna práva vyhrazena.</p>
<div className="flex space-x-4 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Ochrana soukromí</a>
<a className="hover:text-white" href="#">Obchodní podmínky</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
