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
      

<nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<span className="text-sm font-semibold tracking-tight uppercase">Zuzana Vančíková</span>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#about">O mně</a>
<a className="hover:text-stone-900 transition-colors" href="#process">Jak to funguje</a>
<a className="hover:text-stone-900 transition-colors" href="#portfolio">Portfolio</a>
<a className="hover:text-stone-900 transition-colors" href="#pricing">Ceník</a>
</div>
<a className="hidden md:inline-flex items-center gap-2 bg-stone-900 text-white px-4 py-2 text-xs font-medium uppercase tracking-wide rounded hover:bg-stone-800 transition-colors" href="#contact">
<span>Rezervovat</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</nav>

<section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
<div className="order-2 lg:order-1 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white shadow-sm">
<span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
<span className="text-xs font-medium text-stone-600 uppercase tracking-wide">Přijímám nové zakázky</span>
</div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tighter leading-[1.1] text-stone-900">
                    Rodiny. <span className="text-stone-400">Děti.</span> <br/>
                    Psi. <span className="italic font-normal text-stone-500">Spolu.</span>
</h1>
<p className="text-lg lg:text-xl text-stone-600 leading-relaxed max-w-lg">
                    Jen tak. Bez póz. Bez stresu. V pohybu. Venku.
                    Chcete zhmotnit vzpomínky, ale focení vnímáte jako stres? 
                    Pojďme to změnit.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex justify-center items-center gap-2 bg-amber-300 hover:bg-amber-400 text-stone-900 px-8 py-4 text-sm font-semibold uppercase tracking-wide transition-all duration-200 rounded" href="#contact">
<span>Chci fotky</span>
<iconify-icon icon="solar:camera-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 bg-white border border-stone-200 hover:border-stone-300 text-stone-600 px-8 py-4 text-sm font-medium uppercase tracking-wide transition-colors duration-200 rounded" href="#process">
<span>Více info</span>
</a>
</div>
<div className="pt-8 border-t border-stone-200 flex items-center gap-8">
<div className="flex flex-col">
<span className="text-2xl font-semibold tracking-tight">Rudice</span>
<span className="text-xs text-stone-500 uppercase">Moravský kras</span>
</div>
<div className="w-px h-10 bg-stone-200"></div>
<div className="flex flex-col">
<span className="text-2xl font-semibold tracking-tight">20min</span>
<span className="text-xs text-stone-500 uppercase">od Brna</span>
</div>
</div>
</div>
<div className="order-1 lg:order-2 relative group">
<div className="absolute inset-0 bg-stone-200 rotate-3 rounded-2xl transition-transform group-hover:rotate-6 duration-500"></div>
<div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
<img alt="Woman with dog by lake" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-stone-100" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tighter uppercase mb-4">Foto Procházka</h2>
<p className="text-stone-500 max-w-xl mx-auto">Vyberte si variantu, která vám nejlépe sedí. Vždy obdržíte online galerii a tištěnou fotoknihu.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">

<div className="p-8 rounded-2xl bg-stone-50 border border-stone-200 hover:border-amber-300 transition-colors duration-300 flex flex-col relative overflow-hidden group">
<div className="mb-6">
<h3 className="text-lg font-semibold uppercase tracking-wide mb-2">Základní</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight">2 900</span>
<span className="text-sm text-stone-500">Kč</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-stone-600">
<iconify-icon className="text-amber-500 shrink-0 text-lg" icon="solar:clock-circle-linear"></iconify-icon>
<span>cca 2 hodinové focení v přírodě</span>
</li>
<li className="flex items-start gap-3 text-sm text-stone-600">
<iconify-icon className="text-amber-500 shrink-0 text-lg" icon="solar:gallery-linear"></iconify-icon>
<span>Online galerie plná fotografií</span>
</li>
<li className="flex items-start gap-3 text-sm text-stone-600">
<iconify-icon className="text-amber-500 shrink-0 text-lg" icon="solar:book-linear"></iconify-icon>
<span><strong>Fotokniha</strong> vzpomínek Spolu</span>
</li>
</ul>
<a className="w-full block text-center bg-white border border-stone-200 text-stone-900 py-3 rounded text-sm font-medium uppercase tracking-wide hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-colors" href="#contact">
                        Vybrat základní
                    </a>
</div>

<div className="p-8 rounded-2xl bg-stone-900 text-white border border-stone-800 flex flex-col relative overflow-hidden shadow-xl">
<div className="absolute top-0 right-0 bg-amber-300 text-stone-900 text-[10px] font-bold px-3 py-1 uppercase tracking-wider rounded-bl-lg">Doporučeno</div>
<div className="mb-6">
<h3 className="text-lg font-semibold uppercase tracking-wide mb-2 text-stone-200">Rozšířená</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight">3 900</span>
<span className="text-sm text-stone-400">Kč</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-stone-300">
<iconify-icon className="text-amber-300 shrink-0 text-lg" icon="solar:clock-circle-linear"></iconify-icon>
<span>cca 3 hodinové focení (klidnější tempo)</span>
</li>
<li className="flex items-start gap-3 text-sm text-stone-300">
<iconify-icon className="text-amber-300 shrink-0 text-lg" icon="solar:gallery-linear"></iconify-icon>
<span>Online galerie plná fotografií</span>
</li>
<li className="flex items-start gap-3 text-sm text-stone-300">
<iconify-icon className="text-amber-300 shrink-0 text-lg" icon="solar:book-linear"></iconify-icon>
<span><strong>Fotokniha</strong> vzpomínek Spolu</span>
</li>
<li className="flex items-start gap-3 text-sm text-stone-300">
<iconify-icon className="text-amber-300 shrink-0 text-lg" icon="solar:heart-linear"></iconify-icon>
<span>Více času na aklimatizaci dětí/psů</span>
</li>
</ul>
<a className="w-full block text-center bg-amber-300 text-stone-900 py-3 rounded text-sm font-semibold uppercase tracking-wide hover:bg-amber-400 transition-colors" href="#contact">
                        Vybrat rozšířenou
                    </a>
</div>
</div>
<p className="text-center text-xs text-stone-400 mt-8 italic">
                * Přesnou trasu navrhuji individuálně dle vašich potřeb.
            </p>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen" id="process">
<div className="bg-stone-100 p-8 lg:p-24 flex flex-col justify-center">
<div className="max-w-md mx-auto">
<div className="flex items-center gap-3 mb-6 text-amber-500">
<iconify-icon icon="solar:user-hand-up-linear" width="24"></iconify-icon>
<span className="text-xs font-bold uppercase tracking-widest text-stone-500">Filozofie</span>
</div>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tighter uppercase mb-6">Fotím to, <br/>co miluji</h2>
<div className="prose prose-stone text-stone-600 space-y-6">
<p>
                        Jsem Zuzka. Máma dvou dětí a milovnice psů. Vím, jaké to je být máma a vím, jaké to je žít se psy.
                    </p>
<p>
                        Děti neberu jako "objekty". Jsou to živé bytosti s vlastním rytmem. Cítím, kdy navázat kontakt, nebo kdy ustoupit. 
                        Prošla jsem kynologií i záchranářským výcvikem - rozumím řeči psů.
                    </p>
<blockquote className="border-l-2 border-amber-300 pl-4 italic text-stone-800 font-medium">
                        "Fotím tak, aby se děti i psi cítili bezpečně. S odstupem. Bez tlaku. Bez očekávání."
                    </blockquote>
<p>
                        Děti můžou běhat, křičet. Psi můžou tahat, válet se v blátě. To vše je v pořádku. To vše patří k životu.
                    </p>
</div>
</div>
</div>
<div className="bg-white p-8 lg:p-24 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-stone-200">
<div className="max-w-md mx-auto w-full">
<div className="flex items-center gap-3 mb-6 text-amber-500">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
<span className="text-xs font-bold uppercase tracking-widest text-stone-500">Průběh</span>
</div>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tighter uppercase mb-10">Jak to probíhá</h2>
<div className="relative pl-8 space-y-10 border-l border-stone-200">

<div className="relative">
<div className="absolute -left-[37px] w-4 h-4 rounded-full bg-white border-2 border-stone-300 mt-1.5"></div>
<h3 className="font-medium text-stone-900 mb-2">Potkáme se v Rudici</h3>
<p className="text-sm text-stone-500">
                            Parkoviště v srdci Moravského krasu. Krátká instrukce, seznámení.
                        </p>
</div>

<div className="relative">
<div className="absolute -left-[37px] w-4 h-4 rounded-full bg-white border-2 border-stone-300 mt-1.5"></div>
<h3 className="font-medium text-stone-900 mb-2">Jdeme ven</h3>
<p className="text-sm text-stone-500">
                            Vybírám trasu. Děti a psi mají volnost. Pokud je vhodná chvíle, zastavíme. Pokud ne, jdeme dál.
                        </p>
</div>

<div className="relative">
<div className="absolute -left-[37px] w-4 h-4 rounded-full bg-amber-300 border-2 border-amber-300 mt-1.5 shadow-[0_0_0_4px_rgba(252,211,77,0.2)]"></div>
<h3 className="font-medium text-stone-900 mb-2">Vy jste spolu</h3>
<p className="text-sm text-stone-500">
                            Focení je procházkou. Nic nemusíte řídit. Jen jdete. Jste spolu. Já fotím.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#F9F6F2]">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<span className="text-xs font-bold tracking-widest text-stone-400 uppercase">Hodnoty</span>
<h2 className="text-3xl lg:text-4xl font-medium uppercase tracking-tighter mt-2">Co je pro mě <br/>důležité</h2>
</div>
<p className="text-stone-500 max-w-sm text-sm text-right md:text-left">
                    Principy, které utváří každý snímek. Důvod, proč jsou fotky takové, jaké jsou.
                </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-stone-200 border border-stone-200">

<div className="bg-white p-8 hover:bg-stone-50 transition-colors group">
<div className="w-10 h-10 rounded bg-stone-100 flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
<iconify-icon className="text-xl text-stone-600 group-hover:text-amber-600" icon="solar:leaf-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold uppercase tracking-wide mb-2">Přirozenost</h3>
<p className="text-xs text-stone-500 leading-relaxed">Žádné drastické úpravy. Jen čistá realita a krása okamžiku.</p>
</div>
<div className="bg-white p-8 hover:bg-stone-50 transition-colors group">
<div className="w-10 h-10 rounded bg-stone-100 flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
<iconify-icon className="text-xl text-stone-600 group-hover:text-amber-600" icon="solar:user-id-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold uppercase tracking-wide mb-2">Autentičnost</h3>
<p className="text-xs text-stone-500 leading-relaxed">Aby fotografie odrážely vás. Takové, jací skutečně jste.</p>
</div>
<div className="bg-white p-8 hover:bg-stone-50 transition-colors group">
<div className="w-10 h-10 rounded bg-stone-100 flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
<iconify-icon className="text-xl text-stone-600 group-hover:text-amber-600" icon="solar:gamepad-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold uppercase tracking-wide mb-2">Hra</h3>
<p className="text-xs text-stone-500 leading-relaxed">Zapomenout na povinnosti. Hrát si. Být teď a tady.</p>
</div>
<div className="bg-white p-8 hover:bg-stone-50 transition-colors group">
<div className="w-10 h-10 rounded bg-stone-100 flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
<iconify-icon className="text-xl text-stone-600 group-hover:text-amber-600" icon="solar:smile-circle-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold uppercase tracking-wide mb-2">Radost</h3>
<p className="text-xs text-stone-500 leading-relaxed">Fotím, protože mi to přináší radost. A chci ji předat vám.</p>
</div>
<div className="bg-white p-8 hover:bg-stone-50 transition-colors group">
<div className="w-10 h-10 rounded bg-stone-100 flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
<iconify-icon className="text-xl text-stone-600 group-hover:text-amber-600" icon="solar:heart-angle-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold uppercase tracking-wide mb-2">Respekt</h3>
<p className="text-xs text-stone-500 leading-relaxed">K vašim potřebám. K náladě dětí. K povaze psů.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-900 text-stone-200">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl lg:text-4xl font-medium text-white uppercase tracking-tighter mb-16 text-center">Příběhy klientů</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-stone-800/50 p-8 rounded-2xl border border-stone-700/50 hover:border-stone-600 transition-colors">
<div className="flex gap-1 text-amber-300 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-stone-300 mb-6">"Skvěle komunikuje s člověkem i se psem, má cit pro správné načasování a dar vytvářet příjemnou atmosféru."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center text-xs font-bold text-white">AS</div>
<span className="text-sm font-medium text-white">Anna S.</span>
</div>
</div>
<div className="bg-stone-800/50 p-8 rounded-2xl border border-stone-700/50 hover:border-stone-600 transition-colors md:scale-105 shadow-xl bg-stone-800 z-10">
<div className="flex gap-1 text-amber-300 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-stone-300 mb-6">"Žádný stres, jen pohoda. Fotky nás opravdu zachycují takové, jaké jsme. Písek si psí parťačka donesla až do pelechu!"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-600 flex items-center justify-center text-xs font-bold text-white">PH</div>
<span className="text-sm font-medium text-white">Petra H.</span>
</div>
</div>
<div className="bg-stone-800/50 p-8 rounded-2xl border border-stone-700/50 hover:border-stone-600 transition-colors">
<div className="flex gap-1 text-amber-300 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-stone-300 mb-6">"Lom je nádherné místo, jako z jiného světa. Výsledné fotky stojí za to, už nám zdobí zeď."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center text-xs font-bold text-white">MK</div>
<span className="text-sm font-medium text-white">Martina K.</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-12 px-6" id="contact">
<div className="max-w-4xl mx-auto text-center mb-20">
<span className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-4 block">Napište mi</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tighter uppercase mb-8">Kontakt</h2>
<div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-stone-600">
<a className="flex items-center gap-2 hover:text-stone-900 transition-colors group" href="tel:+420724779984">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
</div>
<span>+420 724 779 984</span>
</a>
<a className="flex items-center gap-2 hover:text-stone-900 transition-colors group" href="mailto:vancikova526@gmail.com">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</div>
<span>vancikova526@gmail.com</span>
</a>
<div className="flex items-center gap-2 text-stone-500">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
</div>
<span>Rudice, Moravský kras</span>
</div>
</div>
</div>

<div className="max-w-6xl mx-auto border-t border-stone-200 pt-16">
<div className="flex justify-between items-end mb-8">
<div>
<h3 className="font-medium text-lg">Instagram</h3>
<a className="text-stone-500 text-sm hover:text-stone-900" href="#">@zuzanavancikova_foto</a>
</div>
<button className="text-sm font-medium uppercase tracking-wide flex items-center gap-2 hover:gap-3 transition-all">
                    Sledovat <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="aspect-square bg-stone-100 rounded-lg overflow-hidden group relative">
<img className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0 grayscale-[20%]" src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&amp;w=500"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
</div>
<div className="aspect-square bg-stone-100 rounded-lg overflow-hidden group relative">
<img className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0 grayscale-[20%]" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&amp;w=500"/>
</div>
<div className="aspect-square bg-stone-100 rounded-lg overflow-hidden group relative">
<img className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0 grayscale-[20%]" src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&amp;w=500"/>
</div>
<div className="aspect-square bg-stone-100 rounded-lg overflow-hidden group relative">
<img className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0 grayscale-[20%]" src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&amp;w=500"/>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-stone-100 text-center">
<p className="text-[10px] text-stone-400 uppercase tracking-widest">© 2024 Zuzana Vančíková</p>
</div>
</footer>

    </>
  );
}
