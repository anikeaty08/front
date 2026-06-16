import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
50: '#fafafa',
100: '#f4f4f5',
200: '#e4e4e7',
300: '#d4d4d8',
400: '#a1a1aa',
500: '#71717a',
600: '#52525b',
700: '#3f3f46',
800: '#27272a',
900: '#18181b',
950: '#09090b',
}
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out',
'slide-up': 'slideUp 0.6s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Accordion Logic
        function toggleAccordion(button) {
            const item = button.parentElement;
            
            // Close others (optional, comment out if you want multiple open)
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('accordion-active')) {
                    otherItem.classList.remove('accordion-active');
                }
            });

            // Toggle current
            item.classList.toggle('accordion-active');
        }

        // Calculator Logic
        const revenueSlider = document.getElementById('revenue-slider');
        const feeSlider = document.getElementById('fee-slider');
        const revenueDisplay = document.getElementById('revenue-display');
        const feeDisplay = document.getElementById('fee-display');
        const totalLossDisplay = document.getElementById('total-loss');
        const monthlyLossText = document.getElementById('monthly-loss-text');

        function formatCurrency(value) {
            return new Intl.NumberFormat('cs-CZ', { style: 'currency', currency: 'CZK', maximumFractionDigits: 0 }).format(value);
        }

        function calculate() {
            const revenue = parseInt(revenueSlider.value);
            const feePercent = parseInt(feeSlider.value);
            
            const monthlyLoss = revenue * (feePercent / 100);
            const yearlyLoss = monthlyLoss * 12;

            revenueDisplay.textContent = formatCurrency(revenue);
            feeDisplay.textContent = feePercent + ' %';
            
            totalLossDisplay.textContent = formatCurrency(yearlyLoss);
            monthlyLossText.innerHTML = `Odvádíte přibližně <strong>${formatCurrency(yearlyLoss)}</strong> ročně. To je <strong>${formatCurrency(monthlyLoss)}</strong> každý měsíc, jen za zprostředkování.`;
        }

        revenueSlider.addEventListener('input', calculate);
        feeSlider.addEventListener('input', calculate);

        // Initial calculation
        calculate();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/10">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white tracking-tighter font-semibold text-lg uppercase" href="#">
                HMweby
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#kalkulator">Kalkulátor</a>
<a className="hover:text-white transition-colors" href="#rozdil">Srovnání</a>
<a className="hover:text-white transition-colors" href="#ukazky">Ukázky</a>
<a className="hover:text-white transition-colors" href="#cenik">Ceník</a>
</div>
<a className="bg-white text-zinc-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors" href="#kontakt">
                Konzultace
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden bg-zinc-950 text-white">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="relative max-w-5xl mx-auto px-6 text-center z-10 animate-slide-up">
<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight">
                Booking.com si bere 15–20 % z každé rezervace.<br className="hidden sm:block"/>
<span className="text-zinc-500 text-3xl sm:text-4xl md:text-5xl">Já vám pomůžu dostat hosty přímo k vám.</span>
</h1>
<p className="sm:text-xl text-lg font-normal text-zinc-400 max-w-2xl mr-auto mb-10 ml-auto">bez provizí třetím stranám.</p>
<a className="inline-flex items-center gap-2 bg-white text-zinc-900 px-6 py-3 rounded-full text-base font-semibold hover:bg-zinc-200 transition-colors" href="#kalkulator">
                Spočítat, kolik platím Bookingu
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>

<div className="relative mt-16 sm:mt-24 mx-auto max-w-4xl px-6 group z-10 animate-slide-up" style={{animationDelay: '0.2s'}}>
<div className="rounded-xl ring-1 ring-white/10 bg-zinc-900/50 p-2 shadow-2xl backdrop-blur-sm transition-transform duration-700 ease-out group-hover:scale-[1.02]">
<div className="rounded-lg bg-zinc-950 overflow-hidden aspect-[16/10] relative border border-white/10">

<div className="h-8 bg-zinc-900 border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="mx-auto bg-zinc-800 rounded px-4 py-0.5 text-xs text-zinc-400 font-mono tracking-tight">vaspenzion.cz</div>
</div>

<div className="absolute inset-x-0 bottom-0 top-8 overflow-y-auto overflow-x-hidden scrollbar-hide scroll-smooth">

<div className="h-full bg-zinc-800 relative flex items-center justify-center">
<div className="text-center p-8">
<div className="w-32 h-6 bg-zinc-700 rounded-full mx-auto mb-6"></div>
<div className="w-64 h-10 bg-zinc-600 rounded mb-4 mx-auto"></div>
<div className="w-48 h-4 bg-zinc-700 rounded mx-auto mb-8"></div>
<div className="w-32 h-10 bg-white rounded-full mx-auto"></div>
</div>
</div>
<div className="h-full bg-zinc-900 p-8 grid grid-cols-2 gap-4">
<div className="bg-zinc-800 rounded-lg h-48"></div>
<div className="bg-zinc-800 rounded-lg h-48"></div>
</div>
</div>

<div className="absolute inset-0 top-8 bg-zinc-950/20 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
<div className="bg-zinc-900/80 backdrop-blur text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 border border-white/10 shadow-xl">
<iconify-icon icon="solar:mouse-circle-linear" width="20"></iconify-icon>
                            Najeďte pro náhled
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-zinc-200" id="kalkulator">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Kolik ročně odvádíte Bookingu?</h2>
<p className="text-base sm:text-lg text-zinc-500 mb-12">Zadejte vaše čísla — výsledek vás možná překvapí.</p>
<div className="bg-zinc-50 rounded-2xl p-6 sm:p-10 border border-zinc-200 shadow-sm text-left">
<div className="mb-8">
<div className="flex justify-between items-end mb-4">
<label className="text-sm font-semibold text-zinc-900" htmlFor="revenue-slider">Průměrná měsíční tržba z Bookingu</label>
<span className="text-xl font-semibold text-zinc-900" id="revenue-display">100 000 Kč</span>
</div>
<input className="w-full" id="revenue-slider" max="1000000" min="10000" step="5000" type="range" value="100000"/>
</div>
<div className="mb-10">
<div className="flex justify-between items-end mb-4">
<label className="text-sm font-semibold text-zinc-900" htmlFor="fee-slider">Provize portálu (%)</label>
<span className="text-xl font-semibold text-zinc-900" id="fee-display">15 %</span>
</div>
<input className="w-full" id="fee-slider" max="25" min="10" step="1" type="range" value="15"/>
</div>
<div className="pt-8 border-t border-zinc-200 text-center">
<p className="text-sm font-medium text-zinc-500 mb-2">Ročně přicházíte o</p>
<div className="text-5xl sm:text-6xl font-semibold tracking-tight text-zinc-900 mb-6" id="total-loss">180 000 Kč</div>
<p className="text-sm text-zinc-500 mb-8 max-w-md mx-auto" id="monthly-loss-text">Odvádíte přibližně  ročně. To je  každý měsíc, jen za zprostředkování.</p>
<a className="inline-flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-zinc-800 transition-colors" href="#kontakt">
                        Chcete vědět, jak to změnit? Napište mi
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50" id="rozdil">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Proč mít vlastní rezervační web</h2>
<p className="text-base text-zinc-500 max-w-2xl mx-auto">Vlastní web nedoplňuje Booking. Má funkce a výhody, které vám zprostředkovatel nikdy nedá.</p>
</div>

<div className="grid md:grid-cols-2 gap-6 mb-16">

<div className="bg-white rounded-2xl p-8 border border-zinc-200">
<div className="flex items-center gap-3 mb-6 pb-6 border-b border-zinc-100">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500">
<iconify-icon icon="solar:buildings-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight">Rezervační portály</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-zinc-400 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
                            15–20 % z každé rezervace
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-zinc-400 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
                            Hosté neznají vaše jméno, znají portál
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-zinc-400 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
                            Žádné vlastní akce ani balíčky
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-zinc-400 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
                            Recenze patří Bookingu, ne vám
                        </li>
</ul>
</div>

<div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 text-white shadow-xl">
<div className="flex items-center gap-3 mb-6 pb-6 border-b border-zinc-800">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white">
<iconify-icon icon="solar:star-fall-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight">Váš vlastní web</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="font-medium text-white">0 % provize</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Přímý vztah s hostem
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Romantický pobyt, last minute, věrnostní sleva
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Vaše příběhy, vaše fotky, vaše pravidla
                        </li>
</ul>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-zinc-200 flex flex-col md:flex-row items-center gap-8 mb-24">
<div className="flex-1">
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">Virtuální prohlídka</h3>
<p className="text-sm text-zinc-600 leading-relaxed">
                        Hosté si projdou váš penzion ještě dřív, než zarezervují. Získají dokonalou představu o prostoru, čistotě a atmosféře. Booking tohle neumožní nikdy.
                    </p>
</div>
<div className="w-full md:w-1/2 bg-zinc-100 rounded-xl aspect-video flex items-center justify-center border border-zinc-200 relative overflow-hidden group cursor-pointer">
<iconify-icon className="text-zinc-400 group-hover:scale-110 transition-transform" icon="solar:panorama-linear" width="48"></iconify-icon>
<div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-zinc-900">360° Náhled</div>
</div>
</div>

<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Jak to funguje v praxi</h2>
<div className="inline-flex bg-zinc-200/50 p-1 rounded-full mt-4">
<button className="px-6 py-2 rounded-full text-sm font-semibold bg-white shadow-sm text-zinc-900">Pohled hosta</button>

</div>
</div>
<div className="grid lg:grid-cols-2 gap-12 items-start">

<div>
<h3 className="text-lg font-semibold tracking-tight mb-6 flex items-center gap-2">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
                        Pro hosta: Rychle a jasně
                    </h3>
<div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-200 before:to-transparent">
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-zinc-100 text-zinc-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-sm font-semibold">1</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-white border border-zinc-200 shadow-sm">
<h4 className="text-sm font-semibold mb-1">Vybere termín</h4>
<p className="text-xs text-zinc-500">Kalendář přímo na webu. Vidí obsazenost v reálném čase, žádné přesměrování.</p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-zinc-100 text-zinc-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-sm font-semibold">2</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-white border border-zinc-200 shadow-sm">
<h4 className="text-sm font-semibold mb-1">Vyplní kontakt</h4>
<p className="text-xs text-zinc-500">Jednoduchý formulář — jméno, email, osoby. Žádná registrace, žádný účet.</p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-zinc-100 text-zinc-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-sm font-semibold">3</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-white border border-zinc-200 shadow-sm">
<h4 className="text-sm font-semibold mb-1">Dostane potvrzení</h4>
<p className="text-xs text-zinc-500">Automaticky emailem hned po odeslání. S detaily a kontaktem přímo na vás.</p>
</div>
</div>
</div>
</div>

<div className="bg-zinc-950 rounded-2xl p-4 sm:p-6 shadow-2xl border border-zinc-800 text-white">
<h3 className="text-lg font-semibold tracking-tight mb-6 flex items-center gap-2 text-white">
<iconify-icon icon="solar:laptop-linear" width="20"></iconify-icon>
                        Pro vás: Plná kontrola
                    </h3>

<div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden text-sm">
<div className="border-b border-zinc-800 p-4 flex justify-between items-center bg-zinc-900/50">
<span className="font-semibold tracking-tight">Přehled rezervací</span>
<span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded-full border border-emerald-500/20">Aktivní systém</span>
</div>
<div className="p-4 space-y-3">

<div className="flex items-center justify-between p-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50">
<div>
<div className="font-medium text-white">Nováková Jana</div>
<div className="text-xs text-zinc-400 mt-0.5">12. - 15. Srpen • 2 osoby</div>
</div>
<div className="text-right">
<div className="text-xs text-emerald-400 font-medium mb-1">Potvrzeno</div>
<div className="text-xs text-zinc-500">Notifikace odeslána</div>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50">
<div>
<div className="font-medium text-white">Petr Dvořák</div>
<div className="text-xs text-zinc-400 mt-0.5">20. - 22. Srpen • 4 osoby</div>
</div>
<div className="text-right">
<div className="text-xs text-amber-400 font-medium mb-1">Čeká na platbu</div>
<div className="text-xs text-zinc-500">Záloha 50%</div>
</div>
</div>
</div>
<div className="bg-zinc-800/30 p-4 border-t border-zinc-800 text-xs text-zinc-400 flex gap-4">
<div className="flex items-center gap-1"><iconify-icon icon="solar:bell-linear"></iconify-icon> SMS Upozornění</div>
<div className="flex items-center gap-1"><iconify-icon icon="solar:document-linear"></iconify-icon> Export do Excelu</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-zinc-200 overflow-hidden" id="ukazky">
<div className="max-w-6xl mx-auto px-6 mb-12">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Ukázky práce</h2>
<p className="text-base text-zinc-500 max-w-2xl">Kvalita zpracování a důraz na čistý design, který prodává atmosféru.</p>
</div>

<div className="flex overflow-x-auto snap-x snap-mandatory pb-12 px-6 gap-6 max-w-7xl mx-auto scrollbar-hide">

<div className="snap-center shrink-0 w-[85vw] sm:w-[600px] flex flex-col gap-4">
<div className="bg-zinc-100 rounded-2xl aspect-[4/3] border border-zinc-200 overflow-hidden relative group">

<div className="absolute inset-0 bg-zinc-200">
<div className="h-12 bg-white border-b border-zinc-200 flex items-center px-4">
<div className="w-24 h-4 bg-zinc-300 rounded"></div>
</div>
<div className="p-8">
<div className="w-1/2 h-8 bg-zinc-300 rounded mb-4"></div>
<div className="w-1/3 h-4 bg-zinc-300 rounded"></div>
</div>
</div>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900">Horská chata Šumava (Ukázkový projekt)</h3>
<p className="text-sm text-zinc-500 mt-1">Cílem bylo vytvořit přehledný web s přímou rezervací a galerií, která prodává atmosféru horského klidu.</p>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] sm:w-[600px] flex flex-col gap-4">
<div className="bg-zinc-100 rounded-2xl aspect-[4/3] border border-zinc-200 overflow-hidden relative">
<div className="absolute inset-0 bg-zinc-800">
<div className="h-12 bg-zinc-900 border-b border-zinc-700 flex items-center justify-center">
<div className="w-8 h-2 bg-zinc-600 rounded-full mx-1"></div>
<div className="w-2 h-2 bg-zinc-600 rounded-full mx-1"></div>
</div>
<div className="p-8 text-center flex flex-col items-center justify-center h-full">
<div className="w-32 h-32 rounded-full bg-zinc-700 mb-6"></div>
<div className="w-48 h-6 bg-zinc-700 rounded"></div>
</div>
</div>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900">Vinařský penzion Morava</h3>
<p className="text-sm text-zinc-500 mt-1">Důraz na vizuál lokality, nabídku řízených degustací a snadnou rezervaci víkendových balíčků.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50" id="cenik">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Co přesně dostanete</h2>
<p className="text-base text-zinc-500">Žádné skryté poplatky. Vyberte si rozsah, který aktuálně potřebujete.</p>
</div>
<div className="space-y-4">

<div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden accordion-item">
<button className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none" onclick="toggleAccordion(this)">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-900">
<iconify-icon icon="solar:pen-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-zinc-900">Úroveň 1 — Grafický návrh</h3>
<p className="text-sm text-zinc-500 mt-0.5">8 000 – 12 000 Kč</p>
</div>
</div>
<iconify-icon className="text-zinc-400 accordion-icon transition-transform duration-300" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="accordion-content bg-zinc-50/50">
<div className="px-6 pb-6 pt-2">
<div className="text-sm text-zinc-600 mb-4">
<strong className="text-zinc-900 font-medium">Obsahuje:</strong> Vizuální návrh všech stránek (homepage, pokoje, galerie, kontakt), návrh loga nebo úprava stávajícího, výběr barev a fontů, grafické podklady připravené pro vývojáře, 2 kola úprav, předání souborů ve Figma nebo PDF.
                            </div>
<div className="text-sm text-zinc-500">
<span className="line-through">Neobsahuje:</span> kódování, hosting, doména, texty.
                            </div>
</div>
</div>
</div>

<div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden accordion-item text-white shadow-lg relative">
<div className="absolute top-0 right-0 bg-white text-zinc-900 text-xs font-semibold px-3 py-1 rounded-bl-lg">Nejčastější</div>
<button className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none" onclick="toggleAccordion(this)">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white">
<iconify-icon icon="solar:rocket-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-white">Úroveň 2 — Hotový web</h3>
<p className="text-sm text-zinc-400 mt-0.5">25 000 – 38 000 Kč</p>
</div>
</div>
<iconify-icon className="text-zinc-400 accordion-icon transition-transform duration-300" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="accordion-content bg-zinc-800/20">
<div className="px-6 pb-6 pt-2">
<div className="text-sm text-zinc-300 mb-4">
<strong className="text-white font-medium">Obsahuje:</strong> Grafický návrh na míru, vývoj a naprogramování, rezervační systém s kalendářem obsazenosti, automatické potvrzovací emaily hostům, administrace kde si sami měníte texty a fotky, mobilní verze, základní SEO, nastavení domény a hostingu, Google Analytics, zaškolení, technická podpora 3 měsíce zdarma.
                            </div>
<div className="text-sm text-zinc-500">
<span className="line-through">Neobsahuje:</span> focení, virtuální prohlídka, vícejazyčná verze.
                            </div>
</div>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden accordion-item">
<button className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none" onclick="toggleAccordion(this)">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-900">
<iconify-icon icon="solar:crown-star-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-zinc-900">Úroveň 3 — Prémiový web</h3>
<p className="text-sm text-zinc-500 mt-0.5">55 000 – 75 000 Kč</p>
</div>
</div>
<iconify-icon className="text-zinc-400 accordion-icon transition-transform duration-300" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="accordion-content bg-zinc-50/50">
<div className="px-6 pb-6 pt-2">
<div className="text-sm text-zinc-600">
<strong className="text-zinc-900 font-medium">Obsahuje:</strong> Vše z úrovně 2, virtuální prohlídka penzionu, spolupráce s fotografem na profesionálním focení interiéru a okolí, anglická a německá jazyková verze, napojení na Google Hotel Ads, pokročilé SEO včetně lokálního vyhledávání, správa prvního měsíce zdarma, prioritní podpora 6 měsíců.
                            </div>
</div>
</div>
</div>

<div className="mt-8 pt-8 border-t border-zinc-200 grid sm:grid-cols-2 gap-4">
<div className="bg-white p-5 rounded-xl border border-zinc-200">
<h4 className="text-sm font-semibold text-zinc-900 mb-1">Technická péče</h4>
<p className="text-xs text-zinc-500 mb-3">1 200 – 1 800 Kč / měsíc</p>
<p className="text-xs text-zinc-600">Pravidelné zálohy webu, bezpečnostní aktualizace, monitoring rychlosti a dostupnosti, oprava chyb do 48 hodin.</p>
</div>
<div className="bg-white p-5 rounded-xl border border-zinc-200">
<h4 className="text-sm font-semibold text-zinc-900 mb-1">Aktivní správa</h4>
<p className="text-xs text-zinc-500 mb-3">2 800 – 4 500 Kč / měsíc</p>
<p className="text-xs text-zinc-600">Vše z technické péče + přidávání fotek, změny textů, přidávání akcí, měsíční report, jedna větší úprava měsíčně.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Jak to funguje</h2>
<p className="text-base text-zinc-500">Od prvního hovoru po spuštění webu — přehledně a bez překvapení.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">

<div className="hidden lg:block absolute top-6 left-12 right-12 h-px bg-zinc-200"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-zinc-900 text-white flex items-center justify-center font-semibold mb-6 border-4 border-white shadow-sm">1</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">Hovor zdarma</h3>
<p className="text-sm text-zinc-600">Řeknete mi o svém ubytování, já vysvětlím jak vám mohu pomoci. 30 minut, žádný závazek.</p>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-zinc-100 text-zinc-900 flex items-center justify-center font-semibold mb-6 border-4 border-white shadow-sm">2</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">Návrh a obsah</h3>
<p className="text-sm text-zinc-600">Připravím vizuální návrh přesně pro vaši cílovou skupinu a pomůžu s texty a fotkami.</p>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-zinc-100 text-zinc-900 flex items-center justify-center font-semibold mb-6 border-4 border-white shadow-sm">3</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">Ladění a úpravy</h3>
<p className="text-sm text-zinc-600">Projdeme web společně, upravíme co je potřeba tak, abyste byli 100% spokojeni.</p>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-zinc-100 text-zinc-900 flex items-center justify-center font-semibold mb-6 border-4 border-white shadow-sm">4</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">Spuštění</h3>
<p className="text-sm text-zinc-600">Web jde živě. Naučím vás jak přijímat rezervace, pracovat s administrací a co sledovat.</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-zinc-50 border-y border-zinc-200">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-xl font-semibold tracking-tight text-zinc-900 mb-8">Moje záruky pro vás</h2>
<div className="grid sm:grid-cols-3 gap-6">
<div className="p-4">
<iconify-icon className="text-zinc-900 mb-3" icon="solar:shield-check-linear" width="28"></iconify-icon>
<h3 className="text-sm font-semibold mb-2">Nezávazná konzultace</h3>
<p className="text-xs text-zinc-500">První hovor je vždy zdarma a bez tlaku na prodej.</p>
</div>
<div className="p-4">
<iconify-icon className="text-zinc-900 mb-3" icon="solar:wallet-linear" width="28"></iconify-icon>
<h3 className="text-sm font-semibold mb-2">Platba za výsledek</h3>
<p className="text-xs text-zinc-500">Platíte až po schválení úvodního návrhu. Pokud nesedne, nic neplatíte.</p>
</div>
<div className="p-4">
<iconify-icon className="text-zinc-900 mb-3" icon="solar:hand-shake-linear" width="28"></iconify-icon>
<h3 className="text-sm font-semibold mb-2">Jeden kontakt</h3>
<p className="text-xs text-zinc-500">Komunikujete celou dobu jen se mnou, ne s asistentem agentury.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
<div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl bg-zinc-100 shrink-0 overflow-hidden relative border border-zinc-200">

<div className="absolute inset-0 flex items-center justify-center text-zinc-300">
<iconify-icon icon="solar:user-circle-linear" width="64"></iconify-icon>
</div>
</div>
<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Kdo za tím stojí</h2>
<div className="space-y-4 text-sm text-zinc-600 leading-relaxed">
<p>
                        Jsem webový designér z České republiky. Baví mě pomáhat malým ubytovatelům soutěžit s velkými portály na jejich vlastních podmínkách.
                    </p>
<p>
                        Vím, že majitelé penzionů nemají čas řešit složité IT systémy. Potřebují řešení, které prostě funguje a přináší rezervace. Na rozdíl od velkých agentur pracuji jen já — znáte mě od prvního hovoru až po spuštění a máte jistotu osobního přístupu.
                    </p>
<p>
                        Když zrovna nekóduji weby, pravděpodobně mě najdete někde na horách s batohem.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-200">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-10 text-center">Často kladené otázky</h2>
<div className="space-y-3">
<div className="bg-white border border-zinc-200 rounded-xl overflow-hidden accordion-item">
<button className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm font-semibold text-zinc-900">Musím zrušit Booking?</span>
<iconify-icon className="text-zinc-400 accordion-icon transition-transform duration-300 shrink-0" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="accordion-content">
<div className="px-6 pb-4 pt-1 text-sm text-zinc-600">
                            Ne, web funguje souběžně. Cílem není okamžitě odříznout Booking, ale postupně zvyšovat podíl přímých rezervací, za které neplatíte provizi.
                        </div>
</div>
</div>
<div className="bg-white border border-zinc-200 rounded-xl overflow-hidden accordion-item">
<button className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm font-semibold text-zinc-900">Co když nemám dobré fotky?</span>
<iconify-icon className="text-zinc-400 accordion-icon transition-transform duration-300 shrink-0" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="accordion-content">
<div className="px-6 pb-4 pt-1 text-sm text-zinc-600">
                            Poradím vám, jak na to, nebo vám přímo doporučím prověřeného fotografa ve vašem okolí. Fotky prodávají, takže to vyřešíme jako první.
                        </div>
</div>
</div>
<div className="bg-white border border-zinc-200 rounded-xl overflow-hidden accordion-item">
<button className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm font-semibold text-zinc-900">Jak dlouho trvá vytvoření webu?</span>
<iconify-icon className="text-zinc-400 accordion-icon transition-transform duration-300 shrink-0" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="accordion-content">
<div className="px-6 pb-4 pt-1 text-sm text-zinc-600">
                            Obvykle 3 až 6 týdnů od dodání všech podkladů. Vždy záleží na velikosti webu a rychlosti naší vzájemné komunikace.
                        </div>
</div>
</div>
<div className="bg-white border border-zinc-200 rounded-xl overflow-hidden accordion-item">
<button className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm font-semibold text-zinc-900">Budu moct web sám upravovat?</span>
<iconify-icon className="text-zinc-400 accordion-icon transition-transform duration-300 shrink-0" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="accordion-content">
<div className="px-6 pb-4 pt-1 text-sm text-zinc-600">
                            Ano. K webu dostanete jednoduchou administraci. Zvládnete si sami upravit texty, nahrát nové fotky nebo změnit ceník bez nutnosti znát kódování.
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950 text-center px-6" id="kontakt">
<div className="max-w-2xl mx-auto">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
                Přestaňte platit provize.<br/>Začněme hovorem.
            </h2>
<p className="text-zinc-400 mb-10 text-base">
                Zabere to 30 minut. Zjistíme, jestli vám vlastní web dává finanční smysl.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">

<a className="w-full sm:w-auto bg-white text-zinc-900 px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors" href="mailto:ahoj@hmweby.cz">
                    Domluvit nezávaznou konzultaci
                </a>
</div>
<div className="mt-8">
<a className="text-xs text-zinc-500 hover:text-white transition-colors flex items-center justify-center gap-1" href="#kalkulator">
                    Ještě nejste připraveni? Spočítejte si kolik platíte Bookingu 
                    <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="bg-zinc-950 border-t border-white/10 py-8 text-center">
<p className="text-xs text-zinc-600">
            © 2024 HMweby. Všechna práva vyhrazena.
        </p>
</footer>



    </>
  );
}
