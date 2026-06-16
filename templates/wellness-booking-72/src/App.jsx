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
      

<header className="fixed top-0 w-full z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#EBE5DA] transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center">
<a className="text-xl font-semibold text-[#2D5A27] tracking-tighter" href="/#">Just Book</a>
</div>

<nav className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-[#5D554A] hover:text-[#2D5A27] transition-colors" href="#discover" style={{}}>Odkrywaj</a>
<a className="text-sm font-medium text-[#5D554A] hover:text-[#2D5A27] transition-colors" href="#business" style={{}}>Dla Biznesu</a>
<a className="text-sm font-medium text-[#5D554A] hover:text-[#2D5A27] transition-colors" href="#pricing" style={{}}>Cennik</a>
</nav>

<div className="flex items-center space-x-4">
<a className="text-sm font-medium text-[#5D554A] hover:text-[#2A241E] transition-colors hidden sm:block" href="#" style={{}}>
                        Zaloguj się
                    </a>
<a className="inline-flex items-center justify-center px-5 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium bg-[#2D5A27] hover:bg-[#23461F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2D5A27] transition-all text-white" href="#business" style={{}}>
                        Dodaj salon
                    </a>
</div>
</div>
</div>
</header>
<main className="pt-16">

<section className="relative min-h-[600px] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Background" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9135951f-bf3a-47d0-b8e0-04b5cecefaac_1600w.webp"/>
<div className="absolute inset-0 bg-[#FDFBF7]/70 backdrop-blur-[1px]"></div>
<div className="bg-gradient-to-b from-[#FDFBF7]/80 via-transparent to-[#FDFBF7] absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-4xl w-full text-center mt-10 sm:mt-0">
<h1 className="sm:text-5xl md:text-6xl text-4xl font-semibold text-[#2A241E] tracking-tight font-playfair mb-4">Najlepsze
  salony w Twoim mieście.   Wolne terminy na wyciągnięcie ręki</h1>
<p className="sm:text-xl text-lg font-normal text-[#5D554A] font-playfair max-w-2xl mr-auto mb-10 ml-auto">Znajdź wolny termin i zarezerwuj w sekundę</p>

<div className="p-2 rounded-2xl sm:rounded-full shadow-xl shadow-[#2D5A27]/5 border border-[#EBE5DA] flex flex-col sm:flex-row items-center max-w-3xl mx-auto transition-shadow hover:shadow-2xl hover:shadow-[#2D5A27]/10 bg-white">

<div className="flex-1 w-full flex items-center px-4 py-3 sm:py-2 border-b sm:border-b-0 sm:border-r border-[#EBE5DA] group">
<iconify-icon className="text-[#C5A059] mr-3 text-xl" icon="solar:magnifer-linear"></iconify-icon>
<div className="text-left w-full">
<label className="block text-xs font-semibold text-[#2D5A27] uppercase tracking-wide" style={{}}>Usługa</label>
<input className="w-full text-sm text-[#2A241E] placeholder-[#9CA3AF] focus:outline-none bg-transparent font-medium" placeholder="Masaż, fizjoterapia..." type="text"/>
</div>
</div>

<div className="flex-1 w-full flex items-center px-4 py-3 sm:py-2 border-b sm:border-b-0 sm:border-r border-[#EBE5DA] group">
<iconify-icon className="text-[#C5A059] mr-3 text-xl" icon="solar:map-point-linear"></iconify-icon>
<div className="text-left w-full">
<label className="block text-xs font-semibold text-[#2D5A27] uppercase tracking-wide" style={{}}>Gdzie</label>
<input className="w-full text-sm text-[#2A241E] placeholder-[#9CA3AF] focus:outline-none bg-transparent font-medium" placeholder="Warszawa" type="text"/>
</div>
</div>

<div className="flex-1 w-full flex items-center px-4 py-3 sm:py-2 group">
<iconify-icon className="text-[#C5A059] mr-3 text-xl" icon="solar:calendar-linear"></iconify-icon>
<div className="text-left w-full">
<label className="block text-xs font-semibold text-[#2D5A27] uppercase tracking-wide" style={{}}>Kiedy</label>
<input className="w-full text-sm text-[#2A241E] placeholder-[#9CA3AF] focus:outline-none bg-transparent font-medium" placeholder="Wybierz termin" type="text"/>
</div>
</div>

<div className="p-2 w-full sm:w-auto">
<button className="w-full sm:w-auto bg-[#2D5A27] hover:bg-[#23461F] rounded-xl sm:rounded-full px-8 py-3.5 text-sm font-medium transition-all shadow-lg shadow-[#2D5A27]/20 flex items-center justify-center gap-2 text-white" style={{}}>
                            Szukaj
                        </button>
</div>
</div>
<p className="mt-6 text-sm text-[#5D554A] flex items-center justify-center gap-2">
<iconify-icon className="text-[#2D5A27]" icon="solar:check-circle-linear"></iconify-icon>
<span className="font-medium" style={{}}>Potwierdzenie rezerwacji w 30 sekund.</span>
</p>
</div>
</section>

<section className="py-12 border-b border-[#EBE5DA]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex overflow-x-auto gap-10 sm:justify-center hide-scroll pb-4 gap-x-10 gap-y-10">

<a className="group flex flex-col items-center min-w-[80px] cursor-pointer" href="#">
<div className="flex group-hover:border-[#2D5A27] group-hover:text-[#2D5A27] transition-all text-[#5D554A] bg-white w-16 h-16 border-[#EBE5DA] border rounded-full shadow-sm items-center justify-center">
<iconify-icon icon="solar:sparkles-linear" width="28"></iconify-icon>
<iconify-icon className="" height="28" icon="solar:body-shape-outline" style={{color: 'rgb(45, 90, 39)'}} width="28"></iconify-icon></div>
<span className="mt-3 text-sm font-medium text-[#5D554A] group-hover:text-[#2D5A27]" style={{}}>Estetyka</span>
</a>

<a className="group flex flex-col items-center min-w-[80px] cursor-pointer" href="#">
<div className="w-16 h-16 rounded-full border border-[#EBE5DA] flex items-center justify-center text-[#5D554A] group-hover:border-[#2D5A27] group-hover:text-[#2D5A27] transition-all shadow-sm bg-white">
<iconify-icon className="" height="28" icon="solar:heart-pulse-linear" style={{color: 'rgb(45, 90, 39)'}} width="28"></iconify-icon>
</div>
<span className="mt-3 text-sm font-medium text-[#5D554A] group-hover:text-[#2D5A27]" style={{}}>Fizjoterapia</span>
</a>

<a className="group flex flex-col items-center min-w-[80px] cursor-pointer" href="#">
<div className="w-16 h-16 rounded-full border border-[#EBE5DA] flex items-center justify-center text-[#5D554A] group-hover:border-[#2D5A27] group-hover:text-[#2D5A27] transition-all shadow-sm bg-white">
<iconify-icon className="" icon="solar:bath-linear" width="28"></iconify-icon>
</div>
<span className="mt-3 text-sm font-medium text-[#5D554A] group-hover:text-[#2D5A27]" style={{}}>Masaż</span>
</a>

<a className="group flex flex-col items-center min-w-[80px] cursor-pointer" href="#">
<div className="w-16 h-16 rounded-full border border-[#EBE5DA] flex items-center justify-center text-[#5D554A] group-hover:border-[#2D5A27] group-hover:text-[#2D5A27] transition-all shadow-sm bg-white">
<iconify-icon className="" icon="solar:cosmetic-linear" width="28"></iconify-icon>
</div>
<span className="mt-3 text-sm font-medium text-[#5D554A] group-hover:text-[#2D5A27]" style={{}}>Kosmetologia</span>
</a>

<a className="group flex flex-col items-center min-w-[80px] cursor-pointer" href="#">
<div className="w-16 h-16 rounded-full border border-[#EBE5DA] flex items-center justify-center text-[#5D554A] group-hover:border-[#2D5A27] group-hover:text-[#2D5A27] transition-all shadow-sm bg-white">
<iconify-icon icon="solar:meditation-round-linear" width="28"></iconify-icon>
</div>
<span className="mt-3 text-sm font-medium text-[#5D554A] group-hover:text-[#2D5A27]" style={{}}>Joga &amp; Mind</span>
</a>
</div>
</div>
</section>

<section className="sm:py-24 pt-16 pb-16" id="discover">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-10">
<div className="">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#2A241E]" style={{}}>Wyjątkowe miejsca</h2>
<p className="mt-2 text-[#5D554A] font-normal" style={{}}>Odkryj kliniki i salony o najwyższym standardzie.</p>
</div>
<a className="hidden sm:flex items-center text-[#2D5A27] font-medium hover:text-[#23461F] transition-colors text-sm" href="#" style={{}}>
                        Zobacz wszystkie <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group rounded-xl border border-[#EBE5DA] overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-[#C5A059]/30 bg-white">
<div className="relative h-56 overflow-hidden">
<img alt="Salon" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-semibold text-[#2A241E] flex items-center gap-1 shadow-sm bg-white/95" style={{}}>
<iconify-icon className="text-[#C5A059]" icon="solar:star-bold"></iconify-icon> 5.0
                            </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-[#2A241E] group-hover:text-[#2D5A27] transition-colors" style={{}}>Aura Medical Clinic</h3>
</div>
<p className="text-sm text-[#5D554A] flex items-center gap-1 mb-4" style={{}}>
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Mokotów, Warszawa
                            </p>
<div className="pt-4 border-t border-[#F2EFE9] flex items-center justify-between">
<span className="text-xs font-medium text-[#2A241E] bg-[#F2EFE9] px-2.5 py-1 rounded" style={{}}>Medycyna estetyczna</span>
<button className="text-sm font-semibold text-[#2D5A27] hover:text-[#C5A059] transition-colors" style={{}}>Zarezerwuj</button>
</div>
</div>
</div>

<div className="group rounded-xl border border-[#EBE5DA] overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-[#C5A059]/30 bg-white">
<div className="relative h-56 overflow-hidden">
<img alt="Salon" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-semibold text-[#2A241E] flex items-center gap-1 shadow-sm bg-white/95" style={{}}>
<iconify-icon className="text-[#C5A059]" icon="solar:star-bold"></iconify-icon> 4.9
                            </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-[#2A241E] group-hover:text-[#2D5A27] transition-colors" style={{}}>Holistic Space</h3>
</div>
<p className="text-sm text-[#5D554A] flex items-center gap-1 mb-4" style={{}}>
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Śródmieście, Warszawa
                            </p>
<div className="pt-4 border-t border-[#F2EFE9] flex items-center justify-between">
<span className="text-xs font-medium text-[#2A241E] bg-[#F2EFE9] px-2.5 py-1 rounded" style={{}}>Masaż &amp; Fizjo</span>
<button className="text-sm font-semibold text-[#2D5A27] hover:text-[#C5A059] transition-colors" style={{}}>Zarezerwuj</button>
</div>
</div>
</div>

<div className="group rounded-xl border border-[#EBE5DA] overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-[#C5A059]/30 bg-white">
<div className="relative h-56 overflow-hidden">
<img alt="Salon" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-semibold text-[#2A241E] flex items-center gap-1 shadow-sm bg-white/95" style={{}}>
<iconify-icon className="text-[#C5A059]" icon="solar:star-bold"></iconify-icon> 5.0
                            </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-[#2A241E] group-hover:text-[#2D5A27] transition-colors" style={{}}>Botanica Day Spa</h3>
</div>
<p className="text-sm text-[#5D554A] flex items-center gap-1 mb-4" style={{}}>
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Wilanów, Warszawa
                            </p>
<div className="pt-4 border-t border-[#F2EFE9] flex items-center justify-between">
<span className="text-xs font-medium text-[#2A241E] bg-[#F2EFE9] px-2.5 py-1 rounded" style={{}}>SPA</span>
<button className="text-sm font-semibold text-[#2D5A27] hover:text-[#C5A059] transition-colors" style={{}}>Zarezerwuj</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-[#EBE5DA] bg-white" id="business">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
<div className="mb-12 lg:mb-0">
<span className="inline-block py-1 px-3 rounded-full bg-[#2D5A27]/10 text-[#2D5A27] text-xs font-bold tracking-wide uppercase mb-4" style={{}}>
                            Dla Profesjonalistów
                        </span>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#2A241E] mb-6" style={{}}>
                            Technologia w służbie <br/> Twojego spokoju.
                        </h2>
<p className="text-lg text-[#5D554A] mb-8 font-light leading-relaxed" style={{}}>
                            Zautomatyzuj proces rezerwacji i płatności, abyś mógł skupić się na tym, co najważniejsze – komforcie Twoich pacjentów i klientów.
                        </p>
<ul className="space-y-5 mb-10">
<li className="flex items-start">
<div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D5A27]/10 flex items-center justify-center mt-0.5">
<iconify-icon className="text-[#2D5A27] text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="ml-4 text-base text-[#5D554A]" style={{}}>Dedykowane rozwiązania dla gabinetów premium.</span>
</li>
<li className="flex items-start">
<div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D5A27]/10 flex items-center justify-center mt-0.5">
<iconify-icon className="text-[#2D5A27] text-sm" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<span className="ml-4 text-base text-[#5D554A]" style={{}}>Bezpieczne i szybkie płatności <span className="font-semibold text-[#2A241E]" style={{}}>PayU</span>.</span>
</li>
<li className="flex items-start">
<div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D5A27]/10 flex items-center justify-center mt-0.5">
<iconify-icon className="text-[#2D5A27] text-sm" icon="solar:calendar-mark-linear"></iconify-icon>
</div>
<span className="ml-4 text-base text-[#5D554A]" style={{}}>Inteligentny kalendarz eliminujący luki.</span>
</li>
</ul>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg bg-[#2D5A27] hover:bg-[#23461F] transition-all shadow-xl shadow-[#2D5A27]/15 text-white" href="#" style={{}}>
                                Rozpocznij 14-dniowy okres próbny
                            </a>
</div>
</div>
<div className="relative">

<div className="relative mx-auto border-[#2A241E] bg-[#2A241E] border-[8px] rounded-t-[2.5rem] h-[400px] w-full max-w-[350px] md:max-w-[400px] shadow-2xl">
<div className="h-[32px] w-[3px] bg-[#2A241E] absolute -left-[10px] top-[72px] rounded-l-lg"></div>
<div className="h-[46px] w-[3px] bg-[#2A241E] absolute -left-[10px] top-[124px] rounded-l-lg"></div>
<div className="rounded-[2rem] overflow-hidden w-full h-full bg-[#FDFBF7] relative">
<img alt="Admin Panel" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-0 left-0 right-0 bg-[#FDFBF7]/95 backdrop-blur-md p-6 border-t border-[#EBE5DA]">
<div className="flex items-center justify-between mb-2">
<div className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider" style={{}}>Dzisiejszy utarg</div>
<div className="text-xs font-bold text-[#2D5A27] bg-[#2D5A27]/10 px-2 py-0.5 rounded" style={{}}>+15%</div>
</div>
<div className="text-3xl font-semibold text-[#2A241E] mb-1" style={{}}>3 450 zł</div>
<div className="text-xs text-[#5D554A]" style={{}}>7 opłaconych wizyt (PayU)</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-b border-[#EBE5DA]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-2xl sm:text-3xl font-semibold text-[#2A241E]" style={{}}>Dlaczego just-book?</h2>
<p className="mt-4 text-[#5D554A] max-w-2xl mx-auto" style={{}}>Standard premium na każdym etapie obsługi.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-[#F2EFE9] text-[#2D5A27] flex items-center justify-center mb-6 border border-[#EBE5DA]">
<iconify-icon icon="solar:clock-circle-linear" width="30"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#2A241E] mb-3" style={{}}>Czas to luksus</h3>
<p className="leading-relaxed text-sm text-[#5D554A] max-w-xs">
                            Rezerwacja w mniej niż minutę, bez dzwonienia i oczekiwania.
                        </p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-[#F2EFE9] text-[#2D5A27] flex items-center justify-center mb-6 border border-[#EBE5DA]">
<iconify-icon icon="solar:shield-check-linear" width="30"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#2A241E] mb-3" style={{}}>Bezpieczeństwo</h3>
<p className="text-[#5D554A] text-sm leading-relaxed max-w-xs" style={{}}>
                            Zweryfikowane placówki i szyfrowane płatności PayU.
                        </p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-[#F2EFE9] text-[#2D5A27] flex items-center justify-center mb-6 border border-[#EBE5DA]">
<iconify-icon icon="solar:bell-bing-linear" width="30"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#2A241E] mb-3" style={{}}>Dyskretne przypomnienia</h3>
<p className="text-[#5D554A] text-sm leading-relaxed max-w-xs" style={{}}>
                            Subtelne powiadomienie SMS o nadchodzącej wizycie.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="pricing">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">

<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-[#2A241E] tracking-tight" style={{}}>Buduj swój system</h2>
<p className="mt-4 text-[#5D554A]" style={{}}>Krok 1: Wybierz pakiet bazowy. Krok 2: Dobierz wtyczki.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">

<div className="border border-[#EBE5DA] rounded-2xl p-8 hover:border-[#2D5A27]/30 transition-colors relative bg-[#FDFBF7] flex flex-col">
<h3 className="text-lg font-semibold text-[#2A241E]" style={{}}>Light</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-bold text-[#2A241E] tracking-tight">79 zł</span>
<span className="ml-1 text-sm font-medium text-[#5D554A]" style={{}}>/mies.</span>
</div>
<p className="mt-2 text-xs text-[#2D5A27] font-medium bg-[#2D5A27]/10 inline-block px-2 py-1 rounded w-fit" style={{}}>Dla startujących</p>
<p className="mt-4 text-sm text-[#5D554A]" style={{}}>Podstawowy kalendarz i rezerwacje.</p>
<ul className="mt-6 space-y-3 mb-8 flex-grow">
<li className="flex items-start text-sm text-[#5D554A]" style={{}}>
<iconify-icon className="text-[#2D5A27] mr-2 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                Kalendarz wizyt
                            </li>
<li className="flex items-start text-sm text-[#5D554A]" style={{}}>
<iconify-icon className="text-[#2D5A27] mr-2 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                Widget na stronę
                            </li>
<li className="flex items-start text-sm text-[#5D554A]" style={{}}>
<iconify-icon className="text-[#2D5A27] mr-2 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                50 powiadomień email
                            </li>
</ul>
<button className="w-full text-[#2A241E] hover:bg-[#F2EFE9] font-medium py-3 rounded-lg text-sm border border-[#EBE5DA] transition-colors bg-white" style={{}}>
                            Wybierz Light
                        </button>
</div>

<div className="border-2 border-[#C5A059] rounded-2xl p-8 shadow-2xl shadow-[#C5A059]/10 relative transform md:-translate-y-4 bg-white flex flex-col">
<div className="absolute top-0 right-0 -mt-3 -mr-3">
<span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-bold bg-[#C5A059] uppercase tracking-wide shadow-sm text-white" style={{}}>
                                Bestseller
                            </span>
</div>
<h3 className="text-lg font-semibold text-[#C5A059]" style={{}}>Premium</h3>
<div className="flex mt-4 items-baseline">
<span className="text-4xl font-bold text-[#2A241E] tracking-tight">99 zł</span>
<span className="ml-1 text-sm font-medium text-[#5D554A]" style={{}}>/mies.</span>
</div>
<p className="mt-2 text-xs text-[#5D554A]" style={{}}>Optymalny dla salonu.</p>
<ul className="mt-6 space-y-3 mb-8 flex-grow">
<li className="flex items-start text-sm text-[#2A241E] font-medium" style={{}}>
<iconify-icon className="text-[#C5A059] mr-2 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                                Wszystko co w Light
                            </li>
<li className="flex items-start text-sm text-[#5D554A]" style={{}}>
<iconify-icon className="text-[#2D5A27] mr-2 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                Płatności online PayU
                            </li>
<li className="flex items-start text-sm text-[#5D554A]" style={{}}>
<iconify-icon className="text-[#2D5A27] mr-2 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                Przypomnienia SMS (100 szt.)
                            </li>
</ul>
<button className="w-full bg-[#2D5A27] hover:bg-[#23461F] font-medium py-3 rounded-lg text-sm shadow-md shadow-[#2D5A27]/20 transition-colors text-white" style={{}}>
                            Wybierz Premium
                        </button>
</div>

<div className="border border-[#EBE5DA] rounded-2xl p-8 hover:border-[#2D5A27]/30 transition-colors bg-[#FDFBF7] flex flex-col">
<h3 className="text-lg font-semibold text-[#2A241E]" style={{}}>Luxury</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-bold tracking-tight text-[#2A241E]" style={{}}>149 zł</span>
<span className="ml-1 text-sm font-medium text-[#5D554A]" style={{}}>/mies.</span>
</div>
<p className="mt-2 text-xs text-[#5D554A]" style={{}}>Pełna automatyzacja i prestiż.</p>
<ul className="mt-6 space-y-3 mb-8 flex-grow">
<li className="flex items-start text-sm text-[#5D554A]" style={{}}>
<iconify-icon className="text-[#2D5A27] mr-2 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                Dedykowany opiekun 24/7
                            </li>
<li className="flex items-start text-sm text-[#5D554A]" style={{}}>
<iconify-icon className="text-[#2D5A27] mr-2 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                API i własna domena
                            </li>
<li className="flex items-start text-sm text-[#5D554A]" style={{}}>
<iconify-icon className="text-[#2D5A27] mr-2 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                Nielimitowane SMS
                            </li>
</ul>
<button className="w-full text-[#2A241E] hover:bg-[#F2EFE9] font-medium py-3 rounded-lg text-sm border border-[#EBE5DA] transition-colors bg-white" style={{}}>
                            Wybierz Luxury
                        </button>
</div>
</div>

<div className="max-w-5xl mx-auto border-t border-[#EBE5DA] pt-16">
<div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
<div className="">
<span className="text-xs font-bold text-[#C5A059] uppercase tracking-wide mb-2 block" style={{}}>Marketplace Wtyczek</span>
<h3 className="text-2xl font-semibold text-[#2A241E]" style={{}}>Rozszerz możliwości</h3>
<p className="text-[#5D554A] mt-2 text-sm" style={{}}>Płać tylko za to, czego rzeczywiście używasz. Aktywuj jednym kliknięciem.</p>
</div>

<div className="flex gap-2">
<span className="px-3 py-1 rounded-full bg-[#2A241E] text-white text-xs font-medium cursor-pointer">Wszystkie</span>
<span className="px-3 py-1 rounded-full bg-[#F2EFE9] text-[#5D554A] hover:bg-[#EBE5DA] text-xs font-medium cursor-pointer transition-colors">Marketing</span>
<span className="px-3 py-1 rounded-full bg-[#F2EFE9] text-[#5D554A] hover:bg-[#EBE5DA] text-xs font-medium cursor-pointer transition-colors">Zarządzanie</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group border border-[#EBE5DA] p-5 rounded-xl bg-white hover:shadow-md transition-all">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-[#FDFBF7] flex items-center justify-center text-[#2D5A27] border border-[#EBE5DA]">
<iconify-icon icon="solar:chart-2-linear" width="20"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-semibold text-[#2A241E] bg-[#F2EFE9] px-2 py-1 rounded" style={{}}>+10 zł</span>

<div className="relative inline-flex items-center cursor-pointer">
<div className="w-9 h-5 bg-[#EBE5DA] rounded-full peer-checked:bg-[#2D5A27] transition-colors group-hover:bg-[#dcd6ca]"></div>
<div className="w-3 h-3 bg-white rounded-full absolute left-1 transition-transform"></div>
</div>
</div>
</div>
<h4 className="text-sm font-semibold text-[#2A241E] mb-1" style={{}}>Zaawansowane Raporty</h4>
<p className="text-xs text-[#5D554A] leading-relaxed" style={{}}>Analiza retencji klientów, efektywności pracowników i prognozy przychodów.</p>
</div>

<div className="group border border-[#EBE5DA] p-5 rounded-xl bg-white hover:shadow-md transition-all">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-[#FDFBF7] flex items-center justify-center text-[#2D5A27] border border-[#EBE5DA]">
<iconify-icon icon="solar:user-id-linear" width="20"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-semibold text-[#2A241E] bg-[#F2EFE9] px-2 py-1 rounded" style={{}}>+10 zł</span>
<div className="relative inline-flex items-center cursor-pointer">
<div className="w-9 h-5 bg-[#EBE5DA] rounded-full transition-colors group-hover:bg-[#dcd6ca]"></div>
<div className="w-3 h-3 bg-white rounded-full absolute left-1"></div>
</div>
</div>
</div>
<h4 className="text-sm font-semibold text-[#2A241E] mb-1" style={{}}>Historia Pacjenta 360°</h4>
<p className="text-xs text-[#5D554A] leading-relaxed" style={{}}>Szczegółowa karta zabiegowa, wgrywanie zdjęć przed/po i notatki prywatne.</p>
</div>

<div className="group border border-[#EBE5DA] p-5 rounded-xl bg-white hover:shadow-md transition-all">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-[#FDFBF7] flex items-center justify-center text-[#2D5A27] border border-[#EBE5DA]">
<iconify-icon icon="solar:box-linear" width="20"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-semibold text-[#2A241E] bg-[#F2EFE9] px-2 py-1 rounded" style={{}}>+15 zł</span>
<div className="relative inline-flex items-center cursor-pointer">
<div className="w-9 h-5 bg-[#EBE5DA] rounded-full transition-colors group-hover:bg-[#dcd6ca]"></div>
<div className="w-3 h-3 bg-white rounded-full absolute left-1"></div>
</div>
</div>
</div>
<h4 className="text-sm font-semibold text-[#2A241E] mb-1" style={{}}>Magazyn i Produkty</h4>
<p className="text-xs text-[#5D554A] leading-relaxed" style={{}}>Kontrola stanów magazynowych, zużycie materiałów i sprzedaż detaliczna.</p>
</div>

<div className="group border border-[#EBE5DA] p-5 rounded-xl bg-white hover:shadow-md transition-all">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-[#FDFBF7] flex items-center justify-center text-[#2D5A27] border border-[#EBE5DA]">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-semibold text-[#2A241E] bg-[#F2EFE9] px-2 py-1 rounded" style={{}}>+20 zł</span>
<div className="relative inline-flex items-center cursor-pointer">
<div className="w-9 h-5 bg-[#EBE5DA] rounded-full transition-colors group-hover:bg-[#dcd6ca]"></div>
<div className="w-3 h-3 bg-white rounded-full absolute left-1"></div>
</div>
</div>
</div>
<h4 className="text-sm font-semibold text-[#2A241E] mb-1" style={{}}>Marketing SMS+</h4>
<p className="text-xs text-[#5D554A] leading-relaxed" style={{}}>Kampanie automatyczne: życzenia urodzinowe, przypomnienia o powrocie.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#F2EFE9] border-t border-[#EBE5DA] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="text-xl font-semibold tracking-tighter text-[#2D5A27] mb-4 block" href="#" style={{}}>just-book</a>
<p className="text-sm text-[#5D554A] mb-6" style={{}}>
                            Platforma rezerwacji dla wymagających. Łączymy spokój z technologią.
                        </p>
<div className="flex space-x-4">
<a className="text-[#9CA3AF] hover:text-[#2D5A27] transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-[#9CA3AF] hover:text-[#2D5A27] transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-[#9CA3AF] hover:text-[#2D5A27] transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-[#2A241E] uppercase tracking-wider mb-4" style={{}}>Firma</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#5D554A] hover:text-[#2D5A27] transition-colors" href="#" style={{}}>O nas</a></li>
<li><a className="text-sm text-[#5D554A] hover:text-[#2D5A27] transition-colors" href="#" style={{}}>Kariera</a></li>
<li><a className="text-sm text-[#5D554A] hover:text-[#2D5A27] transition-colors" href="#" style={{}}>Kontakt</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-[#2A241E] uppercase tracking-wider mb-4" style={{}}>Prawne</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#5D554A] hover:text-[#2D5A27] transition-colors" href="#" style={{}}>Regulamin</a></li>
<li><a className="text-sm text-[#5D554A] hover:text-[#2D5A27] transition-colors" href="#" style={{}}>Polityka prywatności</a></li>
<li><a className="text-sm text-[#5D554A] hover:text-[#2D5A27] transition-colors" href="#" style={{}}>Cookies</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-[#2A241E] uppercase tracking-wider mb-4" style={{}}>Newsletter</h4>
<p className="text-sm text-[#5D554A] mb-4" style={{}}>Odbierz poradnik: "Budowanie marki premium w branży beauty".</p>
<form className="flex flex-col gap-2">
<input className="w-full px-4 py-2.5 text-sm border border-[#EBE5DA] rounded-lg focus:outline-none focus:border-[#2D5A27] focus:ring-1 focus:ring-[#2D5A27] placeholder-[#9CA3AF] bg-white" placeholder="Twój email" type="email"/>
<button className="w-full px-4 py-2.5 text-sm font-medium bg-[#2A241E] hover:bg-[#1a1612] rounded-lg transition-colors text-white" style={{}} type="submit">
                                Zapisz się
                            </button>
</form>
</div>
</div>
<div className="border-t border-[#EBE5DA] pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-xs text-[#9CA3AF]" style={{}}>© 2023 just-book. Wszystkie prawa zastrzeżone.</p>
</div>
</div>
</footer>
</main>

    </>
  );
}
