import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const boxes = [
            { size: 2.5, price: 197, vol: 7, title: "Mały (2,5 m²)", desc: "Rower, 10-15 kartonów, opony, narty.", icon: "solar:bicycle-linear" },
            { size: 4, price: 257, vol: 11, title: "Standard (4 m²)", desc: "Mały remont, meble z jednego pokoju, pralka.", icon: "solar:sofa-linear" },
            { size: 5, price: 297, vol: 14, title: "Standard+ (5 m²)", desc: "Motocykl, meble z kawalerki, sprzęt sportowy.", icon: "solar:wheel-angle-linear" },
            { size: 7, price: 397, vol: 19, title: "Średni (7 m²)", desc: "Mieszkanie 30m², archiwum firmowe.", icon: "solar:document-text-linear" },
            { size: 9, price: 487, vol: 25, title: "Optymalny (9 m²)", desc: "Mieszkanie 2-pokojowe, duża przeprowadzka.", icon: "solar:home-smile-linear" },
            { size: 14, price: 637, vol: 33, title: "Duży (14 m²)", desc: "Całe mieszkanie 50m², towar e-commerce (6-8 palet).", icon: "solar:box-minimalistic-linear" },
            { size: 21, price: 837, vol: 58, title: "XXL (21 m²)", desc: "Dom jednorodzinny, magazyn sklepowy.", icon: "solar:warehouse-linear" },
            { size: 28.5, price: 987, vol: 76, title: "Maxi (28,5 m²)", desc: "Duży dom, sprzęt budowlany, duży magazyn.", icon: "solar:city-linear" },
        ];

        let currentBox = boxes[4]; // Default to 9m2

        function renderSelector() {
            const container = document.getElementById('size-selector');
            container.innerHTML = boxes.map(box => `
                <button onclick="selectBox(${box.size})" 
                    class="px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2
                    ${currentBox.size === box.size 
                        ? 'bg-[#00478A] text-white border-[#00478A] shadow-lg shadow-[#00478A]/20 transform scale-105' 
                        : 'bg-white text-slate-600 border-slate-200 hover:border-[#009FE3] hover:text-[#009FE3]'}">
                    ${box.size} m²
                </button>
            `).join('');
        }

        function renderDisplay() {
            const display = document.getElementById('calc-display');
            const priceDisplay = document.getElementById('price-display');
            
            // Animate Price
            priceDisplay.textContent = `${currentBox.price} zł`;
            
            display.innerHTML = `
                <div class="fade-enter-active">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-16 h-16 bg-[#F8FAFF] rounded-2xl flex items-center justify-center text-[#00478A]">
                            <iconify-icon icon="${currentBox.icon}" width="32"></iconify-icon>
                        </div>
                        <div>
                            <h3 class="text-3xl font-semibold text-[#0F172A] tracking-tight">${currentBox.title}</h3>
                            <p class="text-slate-500">Objętość ok. ${currentBox.vol} m³</p>
                        </div>
                    </div>
                    <div class="bg-[#F8FAFF] p-6 rounded-2xl border border-slate-100 mb-6">
                        <span class="text-xs uppercase tracking-wider text-slate-400 font-semibold">Co się zmieści?</span>
                        <p class="text-lg text-slate-700 mt-2 font-medium">${currentBox.desc}</p>
                    </div>
                    <!-- Visual bar -->
                    <div class="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                        <div class="bg-[#009FE3] h-full rounded-full transition-all duration-500" style="width: ${(currentBox.size / 28.5) * 100}%"></div>
                    </div>
                    <div class="flex justify-between text-xs text-slate-400 mt-2">
                        <span>Mały (2.5)</span>
                        <span>Maxi (28.5)</span>
                    </div>
                </div>
            `;
        }

        function selectBox(size) {
            currentBox = boxes.find(b => b.size === size);
            renderSelector();
            renderDisplay();
        }

        // Init
        window.addEventListener('DOMContentLoaded', () => {
            renderSelector();
            renderDisplay();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 bg-[#00478A] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#00478A]/20 transition-transform group-hover:scale-105">
<iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xl font-medium tracking-tight text-[#00478A]">Magazynownia.pl</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-[#00478A] transition-colors" href="#calculator">Kalkulator</a>
<a className="hover:text-[#00478A] transition-colors" href="#pricing">Boksy i Ceny</a>
<a className="hover:text-[#00478A] transition-colors" href="#faq">FAQ</a>
<a className="hover:text-[#00478A] transition-colors" href="#contact">Kontakt</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#00478A]" href="tel:+48000000000">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
<span>+48 000 000 000</span>
</a>
<a className="bg-[#009FE3] hover:bg-[#008AC5] text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-all shadow-lg shadow-[#009FE3]/20 hover:shadow-[#009FE3]/40 active:scale-95 flex items-center gap-2" href="#pricing">
                    Wynajmij boks
                    <iconify-icon className="" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Magazyn kontenery Warszawa" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 to-[#0F172A]/70 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="text-white space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-medium tracking-wide uppercase text-[#009FE3]">
<span className="w-2 h-2 rounded-full bg-[#009FE3] animate-pulse"></span>
                    Warszawa · Białołęka · 24/7
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
                    Bezpieczny magazyn <br/>
<span className="text-slate-300">dostępny 24/7</span>
</h1>
<p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed font-light">
                    Wynajmij boks już od <span className="text-white font-medium">197 zł</span> miesięcznie. Elastyczna umowa, monitoring i ubezpieczenie w cenie. Rezerwacja online w 3 minuty.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-[#009FE3] hover:bg-[#008AC5] text-white px-8 py-4 rounded-2xl text-base font-medium transition-all shadow-xl shadow-[#009FE3]/25 hover:-translate-y-1 flex items-center justify-center gap-2" href="#calculator">
<iconify-icon icon="solar:calculator-minimalistic-linear" width="20"></iconify-icon>
                        Sprawdź ceny i wybierz
                    </a>
<a className="glass-dark hover:bg-white/10 text-white px-8 py-4 rounded-2xl text-base font-medium transition-all flex items-center justify-center gap-2 backdrop-blur-md" href="tel:+48000000000">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                        Zadzwoń teraz
                    </a>
</div>
<div className="flex items-center gap-6 pt-4 text-sm font-medium text-slate-300">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#F59E0B]" icon="solar:star-bold"></iconify-icon>
<span>4,8/5 Google</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#009FE3]" icon="solar:shield-check-linear"></iconify-icon>
<span>Monitoring 24h</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#009FE3]" icon="solar:file-check-linear"></iconify-icon>
<span>Ubezpieczenie</span>
</div>
</div>
</div>

<div className="hidden lg:block relative">
<div className="absolute -inset-4 bg-[#009FE3]/20 blur-3xl rounded-full"></div>
<img alt="Interior of container" className="relative rounded-3xl border border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 object-cover h-[500px] w-full" src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce" style={{animationDuration: '3s'}}>
<div className="w-12 h-12 rounded-full bg-[#EDF4FB] flex items-center justify-center text-[#00478A]">
<iconify-icon icon="solar:key-minimalistic-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-500 uppercase tracking-wide">Dostęp</div>
<div className="text-lg font-semibold text-[#0F172A]">Bez ograniczeń</div>
</div>
</div>
</div>
</div>
</section>

<div className="bg-white border-b border-slate-100 py-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#00478A]" icon="solar:shop-linear" width="32"></iconify-icon>
<span className="font-medium text-lg">Polska Firma</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#00478A]" icon="solar:calendar-linear" width="32"></iconify-icon>
<span className="font-medium text-lg">22 lata doświadczenia</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#00478A]" icon="solar:shield-check-linear" width="32"></iconify-icon>
<span className="font-medium text-lg">Teren chroniony</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#00478A]" icon="solar:clock-circle-linear" width="32"></iconify-icon>
<span className="font-medium text-lg">Wjazd 24/7</span>
</div>
</div>
</div>
</div>

<section className="py-24 bg-white relative overflow-hidden" id="calculator">
<div className="absolute top-0 right-0 w-1/3 h-full bg-[#EDF4FB]/50 skew-x-12 translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<span className="text-[#009FE3] font-medium tracking-wide uppercase text-sm">Kalkulator powierzchni</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mt-3 text-[#0F172A]">Znajdź idealny boks dla siebie</h2>
<p className="text-slate-500 mt-4 text-lg max-w-2xl mx-auto">Wybierz metraż, aby zobaczyć, co się zmieści i sprawdzić cenę.</p>
</div>
<div className="bg-white rounded-[32px] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col lg:flex-row">

<div className="lg:w-2/5 p-8 md:p-12 bg-[#F8FAFF] border-r border-slate-100">
<h3 className="text-xl font-medium mb-6">Wybierz rozmiar (m²):</h3>
<div className="grid grid-cols-2 gap-3" id="size-selector">
<button className="px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 bg-white text-slate-600 border-slate-200 hover:border-[#009FE3] hover:text-[#009FE3]" onclick="selectBox(2.5)">
                    2.5 m²
                </button>
<button className="px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 bg-white text-slate-600 border-slate-200 hover:border-[#009FE3] hover:text-[#009FE3]" onclick="selectBox(4)">
                    4 m²
                </button>
<button className="px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 bg-white text-slate-600 border-slate-200 hover:border-[#009FE3] hover:text-[#009FE3]" onclick="selectBox(5)">
                    5 m²
                </button>
<button className="px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 bg-white text-slate-600 border-slate-200 hover:border-[#009FE3] hover:text-[#009FE3]" onclick="selectBox(7)">
                    7 m²
                </button>
<button className="px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 bg-[#00478A] text-white border-[#00478A] shadow-lg shadow-[#00478A]/20 transform scale-105" onclick="selectBox(9)">
                    9 m²
                </button>
<button className="px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 bg-white text-slate-600 border-slate-200 hover:border-[#009FE3] hover:text-[#009FE3]" onclick="selectBox(14)">
                    14 m²
                </button>
<button className="px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 bg-white text-slate-600 border-slate-200 hover:border-[#009FE3] hover:text-[#009FE3]" onclick="selectBox(21)">
                    21 m²
                </button>
<button className="px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 bg-white text-slate-600 border-slate-200 hover:border-[#009FE3] hover:text-[#009FE3]" onclick="selectBox(28.5)">
                    28.5 m²
                </button>
</div>
<div className="mt-8 p-4 bg-[#EDF4FB] rounded-xl border border-[#009FE3]/10">
<div className="flex gap-3">
<iconify-icon className="text-[#009FE3] shrink-0 mt-1" icon="solar:info-circle-linear" width="20"></iconify-icon>
<p className="text-sm text-slate-600">Potrzebujesz pomocy w wyborze? Zadzwoń, doradzimy: <span className="font-medium text-[#00478A]">+48 000 000 000</span></p>
</div>
</div>
</div>

<div className="lg:w-3/5 p-8 md:p-12 flex flex-col justify-between relative">
<div className="transition-all duration-300" id="calc-display">
<div className="fade-enter-active">
<div className="flex items-center gap-4 mb-6">
<div className="w-16 h-16 bg-[#F8FAFF] rounded-2xl flex items-center justify-center text-[#00478A]">
<iconify-icon icon="solar:home-smile-linear" width="32"></iconify-icon>
</div>
<div>
<h3 className="text-3xl font-semibold text-[#0F172A] tracking-tight">Optymalny (9 m²)</h3>
<p className="text-slate-500">Objętość ok. 25 m³</p>
</div>
</div>
<div className="bg-[#F8FAFF] p-6 rounded-2xl border border-slate-100 mb-6">
<span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Co się zmieści?</span>
<p className="text-lg text-slate-700 mt-2 font-medium">Mieszkanie 2-pokojowe, duża przeprowadzka.</p>
</div>

<div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
<div className="bg-[#009FE3] h-full rounded-full transition-all duration-500" style={{width: '31.57894736842105%'}}></div>
</div>
<div className="flex justify-between text-xs text-slate-400 mt-2">
<span>Mały (2.5)</span>
<span>Maxi (28.5)</span>
</div>
</div>
</div>
<div className="mt-8 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="">
<span className="block text-sm text-slate-400 font-medium uppercase tracking-wide">Cena miesięczna</span>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold text-[#00478A]" id="price-display">487 zł</span>
<span className="text-slate-500">brutto</span>
</div>
</div>
<a className="w-full sm:w-auto bg-[#009FE3] hover:bg-[#008AC5] text-white px-8 py-4 rounded-xl text-lg font-medium transition-all shadow-lg shadow-[#009FE3]/20 text-center" href="#contact">
                            Rezerwuję ten boks
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F8FAFF]" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0F172A]">Pełna oferta boksów</h2>
<p className="text-slate-500 mt-2 text-lg">Przejrzyste ceny. Brak ukrytych kosztów.</p>
</div>
<div className="hidden md:block">
<span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200 text-sm font-medium text-slate-600">
<iconify-icon className="text-[#009FE3]" icon="solar:bill-check-linear"></iconify-icon>
                        Ceny brutto (zawierają VAT)
                    </span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6">

<div className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-[#009FE3] hover:shadow-xl hover:shadow-[#009FE3]/5 transition-all duration-300 relative flex flex-col">
<div className="relative h-44 overflow-hidden">
<img alt="Rower, kartony, narty" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&amp;q=80&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-slate-600 text-xs font-semibold px-2.5 py-1 rounded-lg">Mały</span>
<div className="absolute bottom-3 left-3 flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
<iconify-icon icon="solar:box-linear" width="18"></iconify-icon>
</div>
<span className="text-white text-sm font-medium">~7 m³</span>
</div>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-2xl font-semibold text-[#0F172A] tracking-tight">2,5 m²</h3>
<p className="text-sm text-slate-500 mb-4">Objętość: ~7 m³</p>
<ul className="text-sm text-slate-600 space-y-2 mb-6">
<li className="flex gap-2 items-center"><iconify-icon className="text-[#009FE3] shrink-0" icon="solar:check-circle-linear"></iconify-icon> Rower, opony</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-[#009FE3] shrink-0" icon="solar:check-circle-linear"></iconify-icon> Kartony, narty</li>
</ul>
<div className="border-t border-slate-100 pt-4 mt-auto">
<div className="text-2xl font-semibold text-[#00478A] mb-3">197 zł <span className="text-sm font-normal text-slate-400">/mc</span></div>
<a className="block w-full text-center py-2.5 rounded-xl border border-slate-200 font-medium text-slate-600 hover:bg-[#009FE3] hover:text-white hover:border-[#009FE3] transition-colors" href="#contact">Wybierz</a>
</div>
</div>
</div>

<div className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-[#009FE3] hover:shadow-xl hover:shadow-[#009FE3]/5 transition-all duration-300 relative flex flex-col">
<div className="relative h-44 overflow-hidden">
<img alt="Meble z pokoju, sprzęt sportowy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=600&amp;q=80&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-slate-600 text-xs font-semibold px-2.5 py-1 rounded-lg">Standard</span>
<div className="absolute bottom-3 left-3 flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
<iconify-icon icon="solar:box-linear" width="18"></iconify-icon>
</div>
<span className="text-white text-sm font-medium">~11 m³</span>
</div>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-2xl font-semibold text-[#0F172A] tracking-tight">4 m²</h3>
<p className="text-sm text-slate-500 mb-4">Objętość: ~11 m³</p>
<ul className="text-sm text-slate-600 space-y-2 mb-6">
<li className="flex gap-2 items-center"><iconify-icon className="text-[#009FE3] shrink-0" icon="solar:check-circle-linear"></iconify-icon> Mały remont</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-[#009FE3] shrink-0" icon="solar:check-circle-linear"></iconify-icon> Sprzęt sportowy</li>
</ul>
<div className="border-t border-slate-100 pt-4 mt-auto">
<div className="text-2xl font-semibold text-[#00478A] mb-3">257 zł <span className="text-sm font-normal text-slate-400">/mc</span></div>
<a className="block w-full text-center py-2.5 rounded-xl border border-slate-200 font-medium text-slate-600 hover:bg-[#009FE3] hover:text-white hover:border-[#009FE3] transition-colors" href="#contact">Wybierz</a>
</div>
</div>
</div>

<div className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-[#009FE3] hover:shadow-xl hover:shadow-[#009FE3]/5 transition-all duration-300 relative flex flex-col">
<div className="relative h-44 overflow-hidden">
<img alt="Motocykl, meble z kawalerki" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&amp;q=80&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-slate-600 text-xs font-semibold px-2.5 py-1 rounded-lg">Standard+</span>
<div className="absolute bottom-3 left-3 flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
<iconify-icon icon="solar:box-linear" width="18"></iconify-icon>
</div>
<span className="text-white text-sm font-medium">~14 m³</span>
</div>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-2xl font-semibold text-[#0F172A] tracking-tight">5 m²</h3>
<p className="text-sm text-slate-500 mb-4">Objętość: ~14 m³</p>
<ul className="text-sm text-slate-600 space-y-2 mb-6">
<li className="flex gap-2 items-center"><iconify-icon className="text-[#009FE3] shrink-0" icon="solar:check-circle-linear"></iconify-icon> Motocykl</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-[#009FE3] shrink-0" icon="solar:check-circle-linear"></iconify-icon> Meble z kawalerki</li>
</ul>
<div className="border-t border-slate-100 pt-4 mt-auto">
<div className="text-2xl font-semibold text-[#00478A] mb-3">297 zł <span className="text-sm font-normal text-slate-400">/mc</span></div>
<a className="block w-full text-center py-2.5 rounded-xl border border-slate-200 font-medium text-slate-600 hover:bg-[#009FE3] hover:text-white hover:border-[#009FE3] transition-colors" href="#contact">Wybierz</a>
</div>
</div>
</div>

<div className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-[#009FE3] hover:shadow-xl hover:shadow-[#009FE3]/5 transition-all duration-300 relative flex flex-col">
<div className="relative h-44 overflow-hidden">
<img alt="Mieszkanie 30m², archiwum" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&amp;q=80&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-slate-600 text-xs font-semibold px-2.5 py-1 rounded-lg">Średni</span>
<div className="absolute bottom-3 left-3 flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
<iconify-icon icon="solar:box-linear" width="18"></iconify-icon>
</div>
<span className="text-white text-sm font-medium">~19 m³</span>
</div>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-2xl font-semibold text-[#0F172A] tracking-tight">7 m²</h3>
<p className="text-sm text-slate-500 mb-4">Objętość: ~19 m³</p>
<ul className="text-sm text-slate-600 space-y-2 mb-6">
<li className="flex gap-2 items-center"><iconify-icon className="text-[#009FE3] shrink-0" icon="solar:check-circle-linear"></iconify-icon> Mieszkanie 30 m²</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-[#009FE3] shrink-0" icon="solar:check-circle-linear"></iconify-icon> Archiwum firmowe</li>
</ul>
<div className="border-t border-slate-100 pt-4 mt-auto">
<div className="text-2xl font-semibold text-[#00478A] mb-3">397 zł <span className="text-sm font-normal text-slate-400">/mc</span></div>
<a className="block w-full text-center py-2.5 rounded-xl border border-slate-200 font-medium text-slate-600 hover:bg-[#009FE3] hover:text-white hover:border-[#009FE3] transition-colors" href="#contact">Wybierz</a>
</div>
</div>
</div>

<div className="group bg-white rounded-3xl overflow-hidden border-2 border-[#009FE3] shadow-2xl shadow-[#009FE3]/10 relative flex flex-col transform md:-translate-y-2">
<div className="absolute -top-0 left-1/2 -translate-x-1/2 z-10 bg-[#009FE3] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-b-lg">Najpopularniejszy</div>
<div className="relative h-44 overflow-hidden">
<img alt="Mieszkanie 2-pokojowe, meble, AGD" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&amp;q=80&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#009FE3]/40 to-transparent"></div>
<span className="absolute top-3 right-3 bg-[#009FE3] text-white text-xs font-semibold px-2.5 py-1 rounded-lg">Optymalny</span>
<div className="absolute bottom-3 left-3 flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
<iconify-icon icon="solar:container-linear" width="18"></iconify-icon>
</div>
<span className="text-white text-sm font-medium">~25 m³</span>
</div>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-2xl font-semibold text-[#00478A] tracking-tight">9 m²</h3>
<p className="text-sm text-slate-500 mb-4">Objętość: ~25 m³</p>
<ul className="text-sm text-slate-600 space-y-2 mb-6">
<li className="flex gap-2 items-center"><iconify-icon className="text-[#009FE3] shrink-0" icon="solar:check-circle-bold"></iconify-icon> Mieszkanie 2-pok</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-[#009FE3] shrink-0" icon="solar:check-circle-bold"></iconify-icon> Meble, AGD, kartony</li>
</ul>
<div className="border-t border-slate-100 pt-4 mt-auto">
<div className="text-2xl font-semibold text-[#00478A] mb-3">487 zł <span className="text-sm font-normal text-slate-400">/mc</span></div>
<a className="block w-full text-center py-2.5 rounded-xl bg-[#009FE3] text-white font-medium hover:bg-[#008AC5] transition-colors shadow-md shadow-[#009FE3]/20" href="#contact">Wybierz</a>
</div>
</div>
</div>

<div className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-[#009FE3] hover:shadow-xl hover:shadow-[#009FE3]/5 transition-all duration-300 relative flex flex-col">
<div className="relative h-44 overflow-hidden">
<img alt="Palety, e-commerce, duża przeprowadzka" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&amp;q=80&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-slate-600 text-xs font-semibold px-2.5 py-1 rounded-lg">Biznes</span>
<div className="absolute bottom-3 left-3 flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
<iconify-icon icon="solar:warehouse-linear" width="18"></iconify-icon>
</div>
<span className="text-white text-sm font-medium">~33 m³</span>
</div>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-2xl font-semibold text-[#0F172A] tracking-tight">14 m²</h3>
<p className="text-sm text-slate-500 mb-4">Objętość: ~33 m³</p>
<ul className="text-sm text-slate-600 space-y-2 mb-6">
<li className="flex gap-2 items-center"><iconify-icon className="text-[#009FE3] shrink-0" icon="solar:check-circle-linear"></iconify-icon> Duża przeprowadzka</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-[#009FE3] shrink-0" icon="solar:check-circle-linear"></iconify-icon> Palety, e-commerce</li>
</ul>
<div className="border-t border-slate-100 pt-4 mt-auto">
<div className="text-2xl font-semibold text-[#00478A] mb-3">637 zł <span className="text-sm font-normal text-slate-400">/mc</span></div>
<a className="block w-full text-center py-2.5 rounded-xl border border-slate-200 font-medium text-slate-600 hover:bg-[#009FE3] hover:text-white hover:border-[#009FE3] transition-colors" href="#contact">Wybierz</a>
</div>
</div>
</div>

<div className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-[#009FE3] hover:shadow-xl hover:shadow-[#009FE3]/5 transition-all duration-300 relative flex flex-col">
<div className="relative h-44 overflow-hidden">
<img alt="Dom jednorodzinny, magazyn sklepowy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&amp;q=80&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-slate-600 text-xs font-semibold px-2.5 py-1 rounded-lg">XXL</span>
<div className="absolute bottom-3 left-3 flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
<iconify-icon icon="solar:warehouse-linear" width="18"></iconify-icon>
</div>
<span className="text-white text-sm font-medium">~58 m³</span>
</div>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-2xl font-semibold text-[#0F172A] tracking-tight">21 m²</h3>
<p className="text-sm text-slate-500 mb-4">Objętość: ~58 m³</p>
<ul className="text-sm text-slate-600 space-y-2 mb-6">
<li className="flex gap-2 items-center"><iconify-icon className="text-[#009FE3] shrink-0" icon="solar:check-circle-linear"></iconify-icon> Dom jednorodzinny</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-[#009FE3] shrink-0" icon="solar:check-circle-linear"></iconify-icon> Magazyn sklepowy</li>
</ul>
<div className="border-t border-slate-100 pt-4 mt-auto">
<div className="text-2xl font-semibold text-[#00478A] mb-3">837 zł <span className="text-sm font-normal text-slate-400">/mc</span></div>
<a className="block w-full text-center py-2.5 rounded-xl border border-slate-200 font-medium text-slate-600 hover:bg-[#009FE3] hover:text-white hover:border-[#009FE3] transition-colors" href="#contact">Wybierz</a>
</div>
</div>
</div>

<div className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-[#009FE3] hover:shadow-xl hover:shadow-[#009FE3]/5 transition-all duration-300 relative flex flex-col">
<div className="relative h-44 overflow-hidden">
<img alt="Duży dom, duży magazyn firmowy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1595246140625-573b715d11d3?w=600&amp;q=80&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-slate-600 text-xs font-semibold px-2.5 py-1 rounded-lg">Maxi</span>
<div className="absolute bottom-3 left-3 flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
<iconify-icon icon="solar:warehouse-linear" width="18"></iconify-icon>
</div>
<span className="text-white text-sm font-medium">~76 m³</span>
</div>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-2xl font-semibold text-[#0F172A] tracking-tight">28,5 m²</h3>
<p className="text-sm text-slate-500 mb-4">Objętość: ~76 m³</p>
<ul className="text-sm text-slate-600 space-y-2 mb-6">
<li className="flex gap-2 items-center"><iconify-icon className="text-[#009FE3] shrink-0" icon="solar:check-circle-linear"></iconify-icon> Duży dom</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-[#009FE3] shrink-0" icon="solar:check-circle-linear"></iconify-icon> Sprzęt budowlany</li>
</ul>
<div className="border-t border-slate-100 pt-4 mt-auto">
<div className="text-2xl font-semibold text-[#00478A] mb-3">987 zł <span className="text-sm font-normal text-slate-400">/mc</span></div>
<a className="block w-full text-center py-2.5 rounded-xl border border-slate-200 font-medium text-slate-600 hover:bg-[#009FE3] hover:text-white hover:border-[#009FE3] transition-colors" href="#contact">Wybierz</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="md:w-1/3">
<span className="text-[#009FE3] font-medium tracking-wide uppercase text-sm">Proces</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-2 text-[#0F172A]">Jak zacząć?</h2>
<p className="text-slate-500 mt-4 text-lg">Maksimum wygody, minimum formalności. Wszystko załatwisz zdalnie lub na miejscu.</p>
</div>
<div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="relative">
<div className="w-16 h-16 bg-[#F8FAFF] rounded-2xl flex items-center justify-center text-[#009FE3] mb-4 border border-[#009FE3]/10">
<span className="text-2xl font-bold">1</span>
</div>
<h3 className="text-lg font-semibold mb-2">Wybierz rozmiar</h3>
<p className="text-slate-500 text-sm">Skorzystaj z kalkulatora lub zadzwoń do nas po poradę.</p>
</div>
<div className="relative">
<div className="absolute top-8 -left-4 w-8 h-[2px] bg-slate-100 hidden md:block"></div>
<div className="w-16 h-16 bg-[#F8FAFF] rounded-2xl flex items-center justify-center text-[#009FE3] mb-4 border border-[#009FE3]/10">
<span className="text-2xl font-bold">2</span>
</div>
<h3 className="text-lg font-semibold mb-2">Podpisz umowę</h3>
<p className="text-slate-500 text-sm">Szybkie formalności online. Otrzymujesz fakturę i kod.</p>
</div>
<div className="relative">
<div className="absolute top-8 -left-4 w-8 h-[2px] bg-slate-100 hidden md:block"></div>
<div className="w-16 h-16 bg-[#F8FAFF] rounded-2xl flex items-center justify-center text-[#009FE3] mb-4 border border-[#009FE3]/10">
<span className="text-2xl font-bold">3</span>
</div>
<h3 className="text-lg font-semibold mb-2">Wjeżdżasz 24/7</h3>
<p className="text-slate-500 text-sm">Otrzymujesz indywidualny kod dostępu do bramy i kontenera.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F8FAFF]">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-12 text-[#0F172A]">Kiedy potrzebujesz magazynu?</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all group">
<div className="w-12 h-12 bg-[#EDF4FB] rounded-xl flex items-center justify-center text-[#00478A] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:home-smile-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Przeprowadzka</h3>
<p className="text-sm text-slate-500">Przechowaj meble i kartony w bezpiecznym miejscu na czas zmiany mieszkania.</p>
</div>
<div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all group">
<div className="w-12 h-12 bg-[#EDF4FB] rounded-xl flex items-center justify-center text-[#00478A] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:hammer-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Remont</h3>
<p className="text-sm text-slate-500">Zwolnij przestrzeń dla ekipy remontowej, chroniąc swoje rzeczy przed kurzem.</p>
</div>
<div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all group">
<div className="w-12 h-12 bg-[#EDF4FB] rounded-xl flex items-center justify-center text-[#00478A] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:cart-large-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">E-commerce</h3>
<p className="text-sm text-slate-500">Idealne rozwiązanie dla sklepów internetowych potrzebujących elastycznego magazynu.</p>
</div>
<div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all group">
<div className="w-12 h-12 bg-[#EDF4FB] rounded-xl flex items-center justify-center text-[#00478A] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Brak miejsca</h3>
<p className="text-sm text-slate-500">Narty, rowery, opony, ozdoby świąteczne – odzyskaj przestrzeń w domu.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0F172A]">Dlaczego my?</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-3xl overflow-hidden border border-slate-200">

<div className="p-8 bg-slate-50 text-center md:border-r border-slate-200">
<h3 className="font-semibold text-slate-600 mb-6">Piwnica / Garaż</h3>
<ul className="space-y-4 text-sm text-slate-500">
<li className="flex items-center justify-center gap-2"><iconify-icon className="text-red-400" icon="solar:close-circle-linear"></iconify-icon> Wilgoć i kurz</li>
<li className="flex items-center justify-center gap-2"><iconify-icon className="text-red-400" icon="solar:close-circle-linear"></iconify-icon> Ryzyko kradzieży</li>
</ul>
</div>

<div className="p-8 bg-white relative z-10 scale-105 shadow-2xl shadow-slate-200/50 border-x border-slate-100 rounded-t-2xl md:rounded-none">
<div className="absolute top-0 left-0 w-full h-1 bg-[#009FE3]"></div>
<h3 className="font-bold text-[#00478A] text-xl mb-6 text-center">Magazynownia.pl</h3>
<ul className="space-y-4 text-sm font-medium text-slate-700">
<li className="flex items-center gap-3"><iconify-icon className="text-[#009FE3] text-lg" icon="solar:check-circle-bold"></iconify-icon> Sucho i szczelnie</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#009FE3] text-lg" icon="solar:check-circle-bold"></iconify-icon> Monitoring 24/7</li>
</ul>
</div>

<div className="p-8 bg-slate-50 text-center md:border-l border-slate-200">
<h3 className="font-semibold text-slate-600 mb-6">Magazyn w hali</h3>
<ul className="space-y-4 text-sm text-slate-500">
<li className="flex items-center justify-center gap-2"><iconify-icon className="text-red-400" icon="solar:close-circle-linear"></iconify-icon> Wysoka cena</li>
<li className="flex items-center justify-center gap-2"><iconify-icon className="text-red-400" icon="solar:close-circle-linear"></iconify-icon> Utrudniony dojazd</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0F172A] relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00478A] rounded-full blur-[120px] opacity-20"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#009FE3] rounded-full blur-[120px] opacity-10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-16 text-center">Standard bezpieczeństwa i wygody</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-dark p-8 rounded-2xl hover:bg-white/5 transition-all">
<iconify-icon className="text-[#009FE3] mb-4" icon="solar:shield-check-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-2">Bezpieczeństwo</h3>
<p className="text-slate-400 text-sm leading-relaxed">Teren ogrodzony, oświetlony i monitorowany systemem kamer CCTV. Solidne kłódki w standardzie.</p>
</div>

<div className="glass-dark p-8 rounded-2xl hover:bg-white/5 transition-all">
<iconify-icon className="text-[#009FE3] mb-4" icon="solar:key-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-2">Dostęp 24/7</h3>
<p className="text-slate-400 text-sm leading-relaxed">Automatyczna brama na kod GSM. Przyjeżdżasz kiedy chcesz, również w nocy i święta.</p>
</div>

<div className="glass-dark p-8 rounded-2xl hover:bg-white/5 transition-all">
<iconify-icon className="text-[#009FE3] mb-4" icon="solar:calendar-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-2">Elastyczność</h3>
<p className="text-slate-400 text-sm leading-relaxed">Umowa na czas nieokreślony z krótkim okresem wypowiedzenia. Możesz zmienić rozmiar boksu w trakcie.</p>
</div>

<div className="glass-dark p-8 rounded-2xl hover:bg-white/5 transition-all">
<iconify-icon className="text-[#009FE3] mb-4" icon="solar:umbrella-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-2">Ubezpieczenie</h3>
<p className="text-slate-400 text-sm leading-relaxed">Polisa ubezpieczeniowa jest wliczona w cenę najmu. Twoje mienie jest chronione.</p>
</div>

<div className="glass-dark p-8 rounded-2xl hover:bg-white/5 transition-all">
<iconify-icon className="text-[#009FE3] mb-4" icon="solar:cloud-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-2">Sucho i czysto</h3>
<p className="text-slate-400 text-sm leading-relaxed">Kontenery morskie są hermetyczne i posiadają system wentylacji. 100% ochrony przed deszczem.</p>
</div>

<div className="glass-dark p-8 rounded-2xl hover:bg-white/5 transition-all">
<iconify-icon className="text-[#009FE3] mb-4" icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-2">Wsparcie klienta</h3>
<p className="text-slate-400 text-sm leading-relaxed">Jesteśmy lokalną firmą. Zawsze możesz do nas zadzwonić i porozmawiać z człowiekiem.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-12 text-[#0F172A]">Częste pytania</h2>
<div className="space-y-4">
<details className="group bg-[#F8FAFF] rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer transition-all hover:bg-[#EDF4FB]">
<summary className="flex items-center justify-between font-medium text-lg text-[#0F172A]">
                        Jak szybko mogę wynająć boks?
                        <iconify-icon className="text-slate-400 transition group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-slate-600 mt-4 leading-relaxed">Nawet w 15 minut. Formalności załatwiamy online lub telefonicznie. Po opłaceniu startowego czynszu otrzymujesz kod dostępu SMS-em.</p>
</details>
<details className="group bg-[#F8FAFF] rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer transition-all hover:bg-[#EDF4FB]">
<summary className="flex items-center justify-between font-medium text-lg text-[#0F172A]">
                        Jaki jest minimalny okres najmu?
                        <iconify-icon className="text-slate-400 transition group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-slate-600 mt-4 leading-relaxed">Minimalny okres to 1 miesiąc. Umowa przedłuża się automatycznie, a okres wypowiedzenia wynosi 14 dni.</p>
</details>
<details className="group bg-[#F8FAFF] rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer transition-all hover:bg-[#EDF4FB]">
<summary className="flex items-center justify-between font-medium text-lg text-[#0F172A]">
                        Czy mogę podjechać samochodem pod sam boks?
                        <iconify-icon className="text-slate-400 transition group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-slate-600 mt-4 leading-relaxed">Tak! Nasz plac jest utwardzony i zaprojektowany tak, abyś mógł zaparkować bezpośrednio przy drzwiach swojego kontenera. To ogromne ułatwienie przy rozładunku.</p>
</details>
<details className="group bg-[#F8FAFF] rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer transition-all hover:bg-[#EDF4FB]">
<summary className="flex items-center justify-between font-medium text-lg text-[#0F172A]">
                        Jakie są formy płatności?
                        <iconify-icon className="text-slate-400 transition group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-slate-600 mt-4 leading-relaxed">Akceptujemy przelewy tradycyjne, BLIK oraz płatności kartą. Wystawiamy faktury VAT.</p>
</details>
</div>
</div>
</section>

<section className="py-24 bg-[#F8FAFF]">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-[#0F172A]">Galeria obiektu</h2>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px] md:h-[500px]">
<div className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative group">
<img alt="Magazyny zewnętrzne" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1595246140625-573b715d11d3?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
<span className="text-white font-medium">Szerokie alejki dojazdowe</span>
</div>
</div>
<div className="rounded-3xl overflow-hidden relative group">
<img alt="Brama wjazdowa" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1628139535687-0b29c9b1420d?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-3xl overflow-hidden relative group">
<img alt="Wnętrze" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="md:col-span-2 rounded-3xl overflow-hidden relative group">
<img alt="Bezpieczeństwo" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<span className="text-[#009FE3] font-medium tracking-wide uppercase text-sm">O nas</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-2 mb-6 text-[#0F172A]">Lokalnie, bezpiecznie, po ludzku.</h2>
<div className="space-y-4 text-lg text-slate-600 leading-relaxed">
<p>Magazynownia.pl to odpowiedź na rosnący problem braku przestrzeni w Warszawie. Działamy na Białołęce od 2004 roku, początkowo jako firma logistyczna, a od 2020 roku również jako operator Self Storage.</p>
<p className="">Nie jesteśmy wielką korporacją. Jesteśmy zespołem ludzi, którzy wierzą, że wynajem magazynu powinien być prosty jak zakupy online, ale bezpieczny jak skrytka bankowa.</p>
</div>
</div>
<div className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
<div className="bg-[#F8FAFF] p-6 rounded-2xl text-center border border-slate-100">
<div className="text-4xl font-bold text-[#00478A] mb-1">150+</div>
<div className="text-sm text-slate-500">Zadowolonych klientów</div>
</div>
<div className="bg-[#F8FAFF] p-6 rounded-2xl text-center border border-slate-100">
<div className="text-4xl font-bold text-[#00478A] mb-1">24h</div>
<div className="text-sm text-slate-500">Dostępność obiektu</div>
</div>
<div className="bg-[#F8FAFF] p-6 rounded-2xl text-center border border-slate-100">
<div className="text-4xl font-bold text-[#00478A] mb-1">99%</div>
<div className="text-sm text-slate-500">Obłożenie w sezonie</div>
</div>
<div className="bg-[#F8FAFF] p-6 rounded-2xl text-center border border-slate-100">
<div className="text-4xl font-bold text-[#00478A] mb-1">8</div>
<div className="text-sm text-slate-500">Wariantów wielkości</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F8FAFF] overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-[#0F172A]">Co mówią klienci?</h2>
<div className="flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x">
<div className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-3xl border border-slate-100 snap-center">
<div className="flex text-[#F59E0B] mb-4 text-sm">★★★★★</div>
<p className="text-slate-600 mb-6 leading-relaxed">"Rewelacja. Wynająłem kontener na czas remontu mieszkania. Wszystko suche, czyste. Bardzo dobry kontakt z właścicielem."</p>
<div className="font-semibold text-[#0F172A]">Tomasz K.</div>
<div className="text-xs text-slate-400">Google Reviews</div>
</div>
<div className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-3xl border border-slate-100 snap-center">
<div className="flex text-[#F59E0B] mb-4 text-sm">★★★★★</div>
<p className="text-slate-600 mb-6 leading-relaxed">"Prowadzę mały sklep internetowy i ten magazyn to strzał w dziesiątkę. Cena bezkonkurencyjna w porównaniu do hal."</p>
<div className="font-semibold text-[#0F172A]">Anna M.</div>
<div className="text-xs text-slate-400">Google Reviews</div>
</div>
<div className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-3xl border border-slate-100 snap-center">
<div className="flex text-[#F59E0B] mb-4 text-sm">★★★★★</div>
<p className="text-slate-600 mb-6 leading-relaxed">"Bardzo podoba mi się możliwość podjechania autem pod same drzwi. Oszczędność kręgosłupa! Polecam."</p>
<div className="font-semibold text-[#0F172A]">Marek W.</div>
<div className="text-xs text-slate-400">Google Reviews</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-[#00478A] rounded-[40px] overflow-hidden text-white flex flex-col lg:flex-row shadow-2xl shadow-[#00478A]/20">
<div className="lg:w-1/2 p-12 lg:p-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Zarezerwuj boks</h2>
<p className="text-slate-300 mb-10 text-lg">Wypełnij formularz lub zadzwoń. Oddzwonimy w ciągu 30 minut.</p>
<form className="space-y-4">
<input className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-slate-400 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all" placeholder="Imię i nazwisko" type="text"/>
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-slate-400 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all" placeholder="Telefon" type="tel"/>
<select className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all appearance-none cursor-pointer">
<option className="text-slate-900">Wybierz rozmiar</option>
<option className="text-slate-900">2.5 m²</option>
<option className="text-slate-900">4 m²</option>
<option className="text-slate-900">9 m²</option>
<option className="text-slate-900">14 m²</option>
</select>
</div>
<textarea className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-slate-400 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all" placeholder="Wiadomość (opcjonalnie)" rows="3"></textarea>
<button className="w-full bg-[#009FE3] hover:bg-[#008AC5] text-white font-medium py-4 rounded-xl transition-all shadow-lg mt-2">Wyślij zapytanie</button>
</form>
<div className="mt-10 flex flex-col gap-4 text-slate-300 text-sm">
<div className="flex items-center gap-3">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
<span>+48 000 000 000</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
<span>ul. Przykładowa 12, 03-000 Warszawa Białołęka</span>
</div>
</div>
</div>
<div className="lg:w-1/2 bg-slate-200 relative min-h-[400px]">

<div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400">
<div className="text-center">
<iconify-icon className="opacity-50 mb-2" icon="solar:map-point-bold-duotone" width="64"></iconify-icon>
<span className="block font-medium">Mapa Google</span>
</div>
</div>
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39088.66578051421!2d20.976378!3d52.316825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ec6a251025dc1%3A0x6336336336336336!2sBia%C5%82o%C5%82%C4%99ka%2C%20Warszawa!5e0!3m2!1spl!2spl!4v1600000000000!5m2!1spl!2spl" style={{border: '0', filter: 'grayscale(100%)', mixBlendMode: 'multiply'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-1">
<a className="flex items-center gap-2 mb-6 text-[#00478A]" href="#">
<iconify-icon icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
<span className="text-xl font-bold tracking-tight">Magazynownia.pl</span>
</a>
<p className="text-sm text-slate-500 leading-relaxed">
                        Twoja dodatkowa przestrzeń w Warszawie. Bezpiecznie, tanio i z dostępem 24/7.
                    </p>
</div>
<div>
<h4 className="font-semibold text-[#0F172A] mb-4">Oferta</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-[#009FE3]" href="#">Dla Ciebie</a></li>
<li><a className="hover:text-[#009FE3]" href="#">Dla Firmy</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-[#0F172A] mb-4">Firma</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-[#009FE3]" href="#">O nas</a></li>
<li><a className="hover:text-[#009FE3]" href="#">Regulamin</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-[#0F172A] mb-4">Kontakt</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li>+48 000 000 000</li>
<li>kontakt@magazynownia.pl</li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
<p>© 2026 Magazynownia.pl. Wszelkie prawa zastrzeżone.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<iconify-icon className="hover:text-[#00478A] cursor-pointer" icon="solar:facebook-linear" width="20"></iconify-icon>
<iconify-icon className="hover:text-[#00478A] cursor-pointer" icon="solar:instagram-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</footer>



    </>
  );
}
