import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600 group-hover:bg-teal-100 transition-colors">
<iconify-icon icon="solar:heart-pulse-linear" width="20"></iconify-icon>
</div>
<span className="text-base font-semibold tracking-tight text-slate-900">[NÁZEV FYZIO]</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-teal-600 transition-colors" href="#sluzby">Služby</a>
<a className="hover:text-teal-600 transition-colors" href="#prubeh">Průběh</a>
<a className="hover:text-teal-600 transition-colors" href="#reference">Reference</a>
<a className="hover:text-teal-600 transition-colors" href="#kontakt">Kontakt</a>
</div>
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium tracking-wide text-white transition-colors bg-teal-600 rounded-lg hover:bg-teal-700 focus:ring-2 focus:ring-offset-2 focus:ring-teal-600 shadow-sm" href="tel:+420123456789">
<iconify-icon className="mr-2" icon="solar:phone-linear" width="18"></iconify-icon>
                Zavolat
            </a>
</div>
</nav>

<section className="lg:pt-40 lg:pb-32 overflow-hidden bg-white pt-32 pb-20 relative">
<div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

<div className="max-w-xl">
<h1 className="sm:text-5xl lg:text-6xl leading-[1.1] text-4xl font-semibold text-slate-900 tracking-tight mb-6">Pohyb bez <span className="text-teal-600">bolesti</span></h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">
                    Fyzioterapie v [Město] zaměřená na odstranění bolesti zad, rehabilitaci po úrazech a komplexní péči o pohybový aparát.
                </p>
<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-white transition-all bg-teal-600 rounded-xl hover:bg-teal-700 shadow-lg shadow-teal-600/20" href="tel:+420123456789">
<iconify-icon className="mr-2" icon="solar:phone-linear" width="20"></iconify-icon>
                        Zavolat a objednat
                    </a>
<div className="hidden sm:block text-sm text-slate-500 font-medium">
                        nebo volejte <span className="text-slate-900">+420 123 456 789</span>
</div>
</div>
</div>

<div className="relative w-full aspect-square sm:aspect-video lg:aspect-square bg-slate-100 rounded-3xl overflow-hidden border border-slate-200">

<img alt="Fyzioterapie" className="object-cover w-full h-full opacity-90" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-200 bg-slate-50" id="sluzby">
<div className="max-w-5xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Služby a péče</h2>
</div>
<div className="grid sm:grid-cols-2 gap-6">

<div className="p-8 bg-white border border-slate-200 rounded-2xl hover:border-teal-200 transition-colors">
<div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6">
<iconify-icon icon="solar:accessibility-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Fyzioterapie zad</h3>
<p className="text-slate-500 leading-relaxed">Odstranění akutních i chronických bolestí páteře pomocí moderních technik.</p>
</div>

<div className="p-8 bg-white border border-slate-200 rounded-2xl hover:border-teal-200 transition-colors">
<div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6">
<iconify-icon icon="solar:adhesive-plaster-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Rehabilitace po úrazech</h3>
<p className="text-slate-500 leading-relaxed">Bezpečný návrat k pohybu a sportu po operacích či zraněních.</p>
</div>

<div className="p-8 bg-white border border-slate-200 rounded-2xl hover:border-teal-200 transition-colors">
<div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6">
<iconify-icon icon="solar:stretching-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Individuální cvičení</h3>
<p className="text-slate-500 leading-relaxed">Cílené cvičení pro správné držení těla a posílení oslabených svalů.</p>
</div>

<div className="p-8 bg-white border border-slate-200 rounded-2xl hover:border-teal-200 transition-colors">
<div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6">
<iconify-icon icon="solar:clipboard-list-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Konzultace</h3>
<p className="text-slate-500 leading-relaxed">Odborná diagnostika pohybového aparátu a návrh léčebného postupu.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200">
<div className="max-w-5xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-12">Proč zvolit naši péči</h2>
<div className="grid sm:grid-cols-3 gap-8 text-left">
<div className="flex gap-4">
<div className="mt-1 text-teal-600">
<iconify-icon icon="solar:check-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-1">Osobní přístup</h4>
<p className="text-sm text-slate-500">Dostatek času na každého klienta a řešení na míru.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 text-teal-600">
<iconify-icon icon="solar:check-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-1">Klidné prostředí</h4>
<p className="text-sm text-slate-500">Moderní a diskrétní prostory pro váš maximální komfort.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 text-teal-600">
<iconify-icon icon="solar:check-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-1">Odbornost</h4>
<p className="text-sm text-slate-500">Vysokoškolské vzdělání a neustálé vzdělávání v oboru.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-200 bg-slate-50" id="prubeh">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Jak probíhá návštěva</h2>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-6 left-[15%] right-[15%] h-px bg-slate-200"></div>
<div className="relative flex flex-col items-center text-center">
<div className="w-12 h-12 bg-white border-2 border-teal-100 text-teal-600 rounded-full flex items-center justify-center font-semibold text-lg mb-6 z-10">1</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Vyšetření</h3>
<p className="text-sm text-slate-500">Důkladná diagnostika a nalezení skutečné příčiny vašeho problému.</p>
</div>
<div className="relative flex flex-col items-center text-center">
<div className="w-12 h-12 bg-white border-2 border-teal-100 text-teal-600 rounded-full flex items-center justify-center font-semibold text-lg mb-6 z-10">2</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Terapie</h3>
<p className="text-sm text-slate-500">Aplikace vhodných manuálních a fyzioterapeutických metod přímo v ordinaci.</p>
</div>
<div className="relative flex flex-col items-center text-center">
<div className="w-12 h-12 bg-white border-2 border-teal-100 text-teal-600 rounded-full flex items-center justify-center font-semibold text-lg mb-6 z-10">3</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Doporučení</h3>
<p className="text-sm text-slate-500">Sestavení plánu cviků na doma a ukázka prevence do budoucna.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-200 bg-white" id="reference">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-12 text-center">Co říkají klienti</h2>
<div className="grid md:grid-cols-2 gap-6">
<div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
<iconify-icon className="text-teal-200 mb-4" icon="solar:chat-square-quote-linear" width="32"></iconify-icon>
<p className="text-slate-600 leading-relaxed mb-6">„Skvělý a profesionální přístup. Dlouhodobá bolest zad po pár návštěvách a cvičeních zcela zmizela. Velmi doporučuji všem.“</p>
<p className="font-medium text-slate-900">— Jan N.</p>
</div>
<div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
<iconify-icon className="text-teal-200 mb-4" icon="solar:chat-square-quote-linear" width="32"></iconify-icon>
<p className="text-slate-600 leading-relaxed mb-6">„Úžasná péče po operaci kolene. Díky citlivému přístupu a jasně vysvětleným cvikům jsem se vrátil ke sportu mnohem dříve.“</p>
<p className="font-medium text-slate-900">— Eva K.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-slate-300" id="kontakt">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Objednejte se</h2>
<p className="text-slate-400">Přijímáme nové klienty. Zavolejte a domluvíme termín.</p>
</div>
<div className="grid md:grid-cols-2 gap-12 bg-slate-800 rounded-3xl p-8 sm:p-12 border border-slate-700">

<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-teal-400 shrink-0">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Telefon</p>
<p className="text-lg text-white font-medium">+420 123 456 789</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-teal-400 shrink-0">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Email</p>
<p className="text-base text-white">info@fyzio-nazev.cz</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-teal-400 shrink-0">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Adresa</p>
<p className="text-base text-white">Ulice 123/4<br/>[Město], 123 45</p>
</div>
</div>
</div>

<div className="flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-4 text-white font-medium">
<iconify-icon className="text-teal-400" icon="solar:clock-circle-linear" width="20"></iconify-icon>
                            Otevírací doba
                        </div>
<div className="space-y-3 text-sm">
<div className="flex justify-between border-b border-slate-700 pb-2">
<span>Pondělí - Čtvrtek</span>
<span className="text-white">8:00 - 18:00</span>
</div>
<div className="flex justify-between border-b border-slate-700 pb-2">
<span>Pátek</span>
<span className="text-white">8:00 - 14:00</span>
</div>
<div className="flex justify-between pb-2">
<span>Víkendy</span>
<span className="text-slate-500">Zavřeno</span>
</div>
</div>
</div>
<div className="mt-10">
<a className="w-full py-4 px-6 bg-teal-600 hover:bg-teal-500 text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2" href="tel:+420123456789">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
                            Zavolat a domluvit termín
                        </a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-8">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-teal-600" icon="solar:heart-pulse-linear" width="16"></iconify-icon>
<span className="text-sm font-semibold tracking-tight text-slate-900">[NÁZEV FYZIO]</span>
</div>
<div className="text-sm text-slate-500 flex gap-6">
<span>+420 123 456 789</span>
<span>[Město]</span>
</div>
<p className="text-xs text-slate-400">© 2024 [Název]. Všechna práva vyhrazena.</p>
</div>
</footer>

    </>
  );
}
