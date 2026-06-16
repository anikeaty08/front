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
      

<header className="fixed top-0 w-full z-50 bg-[#1A1C19]/90 backdrop-blur-md border-b border-[#2E332C] transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center">
<a className="text-xl font-semibold text-[#FDFBF7] tracking-tighter" href="/#">Just Book</a>
</div>

<nav className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-[#B0B0AA] hover:text-[#FDFBF7] transition-colors" href="#discover" style={{}}>Odkrywaj</a>
<a className="text-sm font-medium text-[#B0B0AA] hover:text-[#FDFBF7] transition-colors" href="#business" style={{}}>Dla Biznesu</a>
<a className="text-sm font-medium text-[#B0B0AA] hover:text-[#FDFBF7] transition-colors" href="#pricing" style={{}}>Cennik</a>
</nav>

<div className="flex items-center space-x-4">
<a className="text-sm font-medium text-[#B0B0AA] hover:text-[#FDFBF7] transition-colors hidden sm:block" href="#" style={{}}>
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
<img alt="Background" className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c5cce0a-cb35-4d87-87c9-4ea2ff0aae4c_1600w.jpg" style={{}}/>
<div className="absolute inset-0 bg-[#1A1C19]/70 backdrop-blur-[1px]"></div>
<div className="bg-gradient-to-b from-[#1A1C19]/80 via-transparent to-[#1A1C19] absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="sm:mt-0 text-center w-full max-w-4xl z-10 mt-10 relative">
<h1 className="sm:text-5xl md:text-6xl text-4xl font-semibold text-[#FDFBF7] tracking-tight font-playfair mb-4">Najlepsze
  salony w Twoim mieście.   Wolne terminy na wyciągnięcie ręki</h1>
<p className="sm:text-xl text-lg font-normal text-[#B0B0AA] font-playfair max-w-2xl mr-auto mb-10 ml-auto">Znajdź wolny termin i zarezerwuj w sekundę</p>

<div className="p-2 rounded-2xl sm:rounded-full shadow-xl shadow-[#000000]/40 border border-[#2E332C] flex flex-col sm:flex-row items-center max-w-3xl mx-auto transition-shadow hover:shadow-2xl hover:shadow-[#2D5A27]/10 bg-[#242722]">

<div className="flex-1 w-full flex items-center px-4 py-3 sm:py-2 border-b sm:border-b-0 sm:border-r border-[#2E332C] group">
<iconify-icon className="text-[#D4AF37] mr-3 text-xl" icon="solar:magnifer-linear"></iconify-icon>
<div className="text-left w-full">
<label className="block uppercase text-xs font-semibold text-green-700 tracking-wide">Usługa</label>
<input className="w-full text-sm text-[#FDFBF7] placeholder-[#6E726B] focus:outline-none bg-transparent font-medium" placeholder="Masaż, fizjoterapia..." type="text"/>
</div>
</div>

<div className="flex-1 w-full flex items-center px-4 py-3 sm:py-2 border-b sm:border-b-0 sm:border-r border-[#2E332C] group">
<iconify-icon className="text-[#D4AF37] mr-3 text-xl" icon="solar:map-point-linear"></iconify-icon>
<div className="text-left w-full">
<label className="block uppercase text-xs font-semibold text-green-700 tracking-wide">Gdzie</label>
<input className="w-full text-sm text-[#FDFBF7] placeholder-[#6E726B] focus:outline-none bg-transparent font-medium" placeholder="Warszawa" type="text"/>
</div>
</div>

<div className="flex-1 flex sm:py-2 group w-full pt-3 pr-4 pb-3 pl-4 items-center">
<iconify-icon className="text-[#D4AF37] mr-3 text-xl" icon="solar:calendar-linear"></iconify-icon>
<div className="text-left w-full">
<label className="block uppercase text-xs font-semibold text-green-700 tracking-wide">Kiedy</label>
<input className="w-full text-sm text-[#FDFBF7] placeholder-[#6E726B] focus:outline-none bg-transparent font-medium" placeholder="Wybierz termin" type="text"/>
</div>
</div>

<div className="p-2 w-full sm:w-auto">
<button className="w-full sm:w-auto bg-[#2D5A27] hover:bg-[#23461F] rounded-xl sm:rounded-full px-8 py-3.5 text-sm font-medium transition-all shadow-lg shadow-[#2D5A27]/20 flex items-center justify-center gap-2 text-white" style={{}}>
                            Szukaj
                        </button>
</div>
</div>
<p className="mt-6 text-sm text-[#B0B0AA] flex items-center justify-center gap-2">
<iconify-icon className="text-[#2D5A27]" icon="solar:check-circle-linear"></iconify-icon>
<span className="font-medium" style={{}}>Potwierdzenie rezerwacji w 30 sekund.</span>
</p>
</div>
</section>

<section className="py-12 border-b border-[#2E332C]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex overflow-x-auto gap-10 sm:justify-center hide-scroll pb-4 gap-x-10 gap-y-10">

<a className="group flex flex-col items-center min-w-[80px] cursor-pointer" href="#">
<div className="flex group-hover:border-[#2D5A27] group-hover:text-[#2D5A27] transition-all text-[#B0B0AA] bg-[#242722] w-16 h-16 border-[#2E332C] border rounded-full shadow-sm items-center justify-center">
<iconify-icon icon="solar:sparkles-linear" width="28"></iconify-icon>
<iconify-icon className="" height="28" icon="solar:body-shape-outline" style={{color: 'rgb(45, 90, 39)'}} width="28"></iconify-icon></div>
<span className="mt-3 text-sm font-medium text-[#B0B0AA] group-hover:text-[#2D5A27]" style={{}}>Estetyka</span>
</a>

<a className="group flex flex-col items-center min-w-[80px] cursor-pointer" href="#">
<div className="w-16 h-16 rounded-full border border-[#2E332C] flex items-center justify-center text-[#B0B0AA] group-hover:border-[#2D5A27] group-hover:text-[#2D5A27] transition-all shadow-sm bg-[#242722]">
<iconify-icon className="" height="28" icon="solar:heart-pulse-linear" style={{color: 'rgb(45, 90, 39)'}} width="28"></iconify-icon>
</div>
<span className="mt-3 text-sm font-medium text-[#B0B0AA] group-hover:text-[#2D5A27]" style={{}}>Fizjoterapia</span>
</a>

<a className="group flex flex-col items-center min-w-[80px] cursor-pointer" href="#">
<div className="w-16 h-16 rounded-full border border-[#2E332C] flex items-center justify-center text-[#B0B0AA] group-hover:border-[#2D5A27] group-hover:text-[#2D5A27] transition-all shadow-sm bg-[#242722]">
<iconify-icon className="" icon="solar:bath-linear" width="28"></iconify-icon>
</div>
<span className="mt-3 text-sm font-medium text-[#B0B0AA] group-hover:text-[#2D5A27]" style={{}}>Masaż</span>
</a>

<a className="group flex flex-col items-center min-w-[80px] cursor-pointer" href="#">
<div className="w-16 h-16 rounded-full border border-[#2E332C] flex items-center justify-center text-[#B0B0AA] group-hover:border-[#2D5A27] group-hover:text-[#2D5A27] transition-all shadow-sm bg-[#242722]">
<iconify-icon className="" icon="solar:cosmetic-linear" width="28"></iconify-icon>
</div>
<span className="mt-3 text-sm font-medium text-[#B0B0AA] group-hover:text-[#2D5A27]" style={{}}>Kosmetologia</span>
</a>

<a className="group flex flex-col items-center min-w-[80px] cursor-pointer" href="#">
<div className="w-16 h-16 rounded-full border border-[#2E332C] flex items-center justify-center text-[#B0B0AA] group-hover:border-[#2D5A27] group-hover:text-[#2D5A27] transition-all shadow-sm bg-[#242722]">
<iconify-icon className="" icon="solar:meditation-round-linear" width="28"></iconify-icon>
</div>
<span className="mt-3 text-sm font-medium text-[#B0B0AA] group-hover:text-[#2D5A27]" style={{}}>Joga &amp; Mind</span>
</a>
</div>
</div>
</section>

<section className="sm:py-24 pt-16 pb-16" id="discover">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-10">
<div className="">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#FDFBF7]" style={{}}>Wyjątkowe miejsca</h2>
<p className="mt-2 text-[#B0B0AA] font-normal" style={{}}>Odkryj kliniki i salony o najwyższym standardzie.</p>
</div>
<a className="hidden sm:flex items-center text-[#2D5A27] font-medium hover:text-[#23461F] transition-colors text-sm" href="#" style={{}}>
                        Zobacz wszystkie <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group rounded-xl border border-[#2E332C] overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-[#D4AF37]/30 bg-[#242722]">
<div className="relative h-56 overflow-hidden">
<img alt="Salon" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-semibold text-[#FDFBF7] flex items-center gap-1 shadow-sm bg-[#242722]/95" style={{}}>
<iconify-icon className="text-[#D4AF37]" icon="solar:star-bold"></iconify-icon> 5.0
                            </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-[#FDFBF7] group-hover:text-[#2D5A27] transition-colors" style={{}}>Aura Medical Clinic</h3>
</div>
<p className="text-sm text-[#B0B0AA] flex items-center gap-1 mb-4" style={{}}>
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Mokotów, Warszawa
                            </p>
<div className="pt-4 border-t border-[#2E332C] flex items-center justify-between">
<span className="text-xs font-medium text-[#FDFBF7] bg-[#2E332C] px-2.5 py-1 rounded" style={{}}>Medycyna estetyczna</span>
<button className="text-sm font-semibold text-[#2D5A27] hover:text-[#D4AF37] transition-colors" style={{}}>Zarezerwuj</button>
</div>
</div>
</div>

<div className="group rounded-xl border border-[#2E332C] overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-[#D4AF37]/30 bg-[#242722]">
<div className="relative h-56 overflow-hidden">
<img alt="Salon" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-semibold text-[#FDFBF7] flex items-center gap-1 shadow-sm bg-[#242722]/95" style={{}}>
<iconify-icon className="text-[#D4AF37]" icon="solar:star-bold"></iconify-icon> 4.9
                            </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-[#FDFBF7] group-hover:text-[#2D5A27] transition-colors" style={{}}>Holistic Space</h3>
</div>
<p className="text-sm text-[#B0B0AA] flex items-center gap-1 mb-4" style={{}}>
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Śródmieście, Warszawa
                            </p>
<div className="pt-4 border-t border-[#2E332C] flex items-center justify-between">
<span className="text-xs font-medium text-[#FDFBF7] bg-[#2E332C] px-2.5 py-1 rounded" style={{}}>Masaż &amp; Fizjo</span>
<button className="text-sm font-semibold text-[#2D5A27] hover:text-[#D4AF37] transition-colors" style={{}}>Zarezerwuj</button>
</div>
</div>
</div>

<div className="group rounded-xl border border-[#2E332C] overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-[#D4AF37]/30 bg-[#242722]">
<div className="relative h-56 overflow-hidden">
<img alt="Salon" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-semibold text-[#FDFBF7] flex items-center gap-1 shadow-sm bg-[#242722]/95" style={{}}>
<iconify-icon className="text-[#D4AF37]" icon="solar:star-bold"></iconify-icon> 5.0
                            </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-[#FDFBF7] group-hover:text-[#2D5A27] transition-colors" style={{}}>Botanica Day Spa</h3>
</div>
<p className="text-sm text-[#B0B0AA] flex items-center gap-1 mb-4" style={{}}>
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Wilanów, Warszawa
                            </p>
<div className="pt-4 border-t border-[#2E332C] flex items-center justify-between">
<span className="text-xs font-medium text-[#FDFBF7] bg-[#2E332C] px-2.5 py-1 rounded" style={{}}>SPA</span>
<button className="text-sm font-semibold text-[#2D5A27] hover:text-[#D4AF37] transition-colors" style={{}}>Zarezerwuj</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-[#2E332C] bg-[#1A1C19]" id="business">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
<div className="mb-12 lg:mb-0">
<span className="inline-block py-1 px-3 rounded-full bg-[#2D5A27]/20 text-[#2D5A27] text-xs font-bold tracking-wide uppercase mb-4" style={{}}>
                            Dla Profesjonalistów
                        </span>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#FDFBF7] mb-6" style={{}}>
                            Technologia w służbie <br/> Twojego spokoju.
                        </h2>
<p className="text-lg text-[#B0B0AA] mb-8 font-light leading-relaxed" style={{}}>
                            Zautomatyzuj proces rezerwacji i płatności, abyś mógł skupić się na tym, co najważniejsze – komforcie Twoich pacjentów i klientów.
                        </p>
<ul className="space-y-5 mb-10">
<li className="flex items-start">
<div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D5A27]/20 flex items-center justify-center mt-0.5">
<iconify-icon className="text-[#2D5A27] text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="ml-4 text-base text-[#B0B0AA]" style={{}}>Dedykowane rozwiązania dla gabinetów premium.</span>
</li>
<li className="flex items-start">
<div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D5A27]/20 flex items-center justify-center mt-0.5">
<iconify-icon className="text-[#2D5A27] text-sm" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<span className="ml-4 text-base text-[#B0B0AA]" style={{}}>Bezpieczne i szybkie płatności <span className="font-semibold text-[#FDFBF7]" style={{}}>PayU</span>.</span>
</li>
<li className="flex items-start">
<div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#2D5A27]/20 flex items-center justify-center mt-0.5">
<iconify-icon className="text-[#2D5A27] text-sm" icon="solar:calendar-mark-linear"></iconify-icon>
</div>
<span className="ml-4 text-base text-[#B0B0AA]" style={{}}>Inteligentny kalendarz eliminujący luki.</span>
</li>
</ul>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg bg-[#2D5A27] hover:bg-[#23461F] transition-all shadow-xl shadow-[#2D5A27]/15 text-white" href="#" style={{}}>
                                Rozpocznij 14-dniowy okres próbny
                            </a>
</div>
</div>
<div className="relative">

<div className="relative mx-auto border-[#000000] bg-[#000000] border-[8px] rounded-t-[2.5rem] h-[400px] w-full max-w-[350px] md:max-w-[400px] shadow-2xl">
<div className="h-[32px] w-[3px] bg-[#000000] absolute -left-[10px] top-[72px] rounded-l-lg"></div>
<div className="h-[46px] w-[3px] bg-[#000000] absolute -left-[10px] top-[124px] rounded-l-lg"></div>
<div className="rounded-[2rem] overflow-hidden w-full h-full bg-[#1A1C19] relative">
<img alt="Admin Panel" className="w-full h-full object-cover opacity-70" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-0 left-0 right-0 bg-[#1A1C19]/95 backdrop-blur-md p-6 border-t border-[#2E332C]">
<div className="flex items-center justify-between mb-2">
<div className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider" style={{}}>Dzisiejszy utarg</div>
<div className="text-xs font-bold text-[#2D5A27] bg-[#2D5A27]/20 px-2 py-0.5 rounded" style={{}}>+15%</div>
</div>
<div className="text-3xl font-semibold text-[#FDFBF7] mb-1" style={{}}>3 450 zł</div>
<div className="text-xs text-[#B0B0AA]" style={{}}>7 opłaconych wizyt (PayU)</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-b border-[#2E332C]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-2xl sm:text-3xl font-semibold text-[#FDFBF7]" style={{}}>Dlaczego just-book?</h2>
<p className="mt-4 text-[#B0B0AA] max-w-2xl mx-auto" style={{}}>Standard premium na każdym etapie obsługi.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-[#242722] text-[#2D5A27] flex items-center justify-center mb-6 border border-[#2E332C]">
<iconify-icon icon="solar:clock-circle-linear" width="30"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#FDFBF7] mb-3" style={{}}>Czas to luksus</h3>
<p className="leading-relaxed text-sm text-[#B0B0AA] max-w-xs">
                            Rezerwacja w mniej niż minutę, bez dzwonienia i oczekiwania.
                        </p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-[#242722] text-[#2D5A27] flex items-center justify-center mb-6 border border-[#2E332C]">
<iconify-icon className="" icon="solar:shield-check-linear" width="30"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#FDFBF7] mb-3" style={{}}>Bezpieczeństwo</h3>
<p className="text-[#B0B0AA] text-sm leading-relaxed max-w-xs" style={{}}>
                            Zweryfikowane placówki i szyfrowane płatności PayU.
                        </p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-[#242722] text-[#2D5A27] flex items-center justify-center mb-6 border border-[#2E332C]">
<iconify-icon icon="solar:bell-bing-linear" width="30"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#FDFBF7] mb-3" style={{}}>Dyskretne przypomnienia</h3>
<p className="text-[#B0B0AA] text-sm leading-relaxed max-w-xs" style={{}}>
                            Subtelne powiadomienie SMS o nadchodzącej wizycie.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1A1C19]" id="pricing">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">

<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-[#FDFBF7] tracking-tight" style={{}}>Buduj swój system</h2>
<p className="mt-4 text-[#B0B0AA]" style={{}}>Krok 1: Wybierz pakiet bazowy. Krok 2: Dobierz wtyczki.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">

<div className="border border-[#2E332C] rounded-2xl p-8 hover:border-[#2D5A27]/30 transition-colors relative bg-[#242722] flex flex-col">
<h3 className="text-lg font-semibold text-[#FDFBF7]" style={{}}>Light</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-bold text-[#FDFBF7] tracking-tight">79 zł</span>
<span className="ml-1 text-sm font-medium text-[#B0B0AA]" style={{}}>/mies.</span>
</div>
<p className="mt-2 text-xs text-[#2D5A27] font-medium bg-[#2D5A27]/20 inline-block px-2 py-1 rounded w-fit" style={{}}>Dla startujących</p>
<p className="mt-4 text-sm text-[#B0B0AA]" style={{}}>Podstawowy kalendarz i rezerwacje.</p>
<ul className="mt-6 space-y-3 mb-8 flex-grow">
<li className="flex items-start text-sm text-[#B0B0AA]" style={{}}>
<iconify-icon className="text-[#2D5A27] mr-2 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                Kalendarz wizyt
                            </li>
<li className="flex items-start text-sm text-[#B0B0AA]" style={{}}>
<iconify-icon className="text-[#2D5A27] mr-2 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                Widget na stronę
                            </li>
<li className="flex items-start text-sm text-[#B0B0AA]" style={{}}>
<iconify-icon className="text-[#2D5A27] mr-2 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                50 powiadomień email
                            </li>
</ul>
<button className="w-full text-[#FDFBF7] hover:bg-[#2E332C] font-medium py-3 rounded-lg text-sm border border-[#2E332C] transition-colors bg-[#242722]" style={{}}>
                            Wybierz Light
                        </button>
</div>

<div className="border-2 border-[#D4AF37] rounded-2xl p-8 shadow-2xl shadow-[#D4AF37]/10 relative transform md:-translate-y-4 bg-[#2E332C] flex flex-col">
<div className="absolute top-0 right-0 -mt-3 -mr-3">
<span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-bold bg-[#D4AF37] uppercase tracking-wide shadow-sm text-black" style={{}}>
                                Bestseller
                            </span>
</div>
<h3 className="text-lg font-semibold text-[#D4AF37]" style={{}}>Premium</h3>
<div className="flex mt-4 items-baseline">
<span className="text-4xl font-bold text-[#FDFBF7] tracking-tight">99 zł</span>
<span className="ml-1 text-sm font-medium text-[#B0B0AA]" style={{}}>/mies.</span>
</div>
<p className="mt-2 text-xs text-[#B0B0AA]" style={{}}>Optymalny dla salonu.</p>
<ul className="mt-6 space-y-3 mb-8 flex-grow">
<li className="flex items-start text-sm text-[#FDFBF7] font-medium" style={{}}>
<iconify-icon className="text-[#D4AF37] mr-2 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                                Wszystko co w Light
                            </li>
<li className="flex items-start text-sm text-[#B0B0AA]" style={{}}>
<iconify-icon className="text-[#2D5A27] mr-2 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                Płatności online PayU
                            </li>
<li className="flex items-start text-sm text-[#B0B0AA]" style={{}}>
<iconify-icon className="text-[#2D5A27] mr-2 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                Przypomnienia SMS (100 szt.)
                            </li>
</ul>
<button className="w-full bg-[#2D5A27] hover:bg-[#23461F] font-medium py-3 rounded-lg text-sm shadow-md shadow-[#2D5A27]/20 transition-colors text-white" style={{}}>
                            Wybierz Premium
                        </button>
</div>

<div className="border border-[#2E332C] rounded-2xl p-8 hover:border-[#2D5A27]/30 transition-colors bg-[#242722] flex flex-col">
<h3 className="text-lg font-semibold text-[#FDFBF7]" style={{}}>Luxury</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-bold tracking-tight text-[#FDFBF7]" style={{}}>149 zł</span>
<span className="ml-1 text-sm font-medium text-[#B0B0AA]" style={{}}>/mies.</span>
</div>
<p className="mt-2 text-xs text-[#B0B0AA]" style={{}}>Pełna automatyzacja i prestiż.</p>
<ul className="mt-6 space-y-3 mb-8 flex-grow">
<li className="flex items-start text-sm text-[#B0B0AA]" style={{}}>
<iconify-icon className="text-[#2D5A27] mr-2 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                Dedykowany opiekun 24/7
                            </li>
<li className="flex items-start text-sm text-[#B0B0AA]" style={{}}>
<iconify-icon className="text-[#2D5A27] mr-2 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                API i własna domena
                            </li>
<li className="flex items-start text-sm text-[#B0B0AA]" style={{}}>
<iconify-icon className="text-[#2D5A27] mr-2 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                Nielimitowane SMS
                            </li>
</ul>
<button className="w-full text-[#FDFBF7] hover:bg-[#2E332C] font-medium py-3 rounded-lg text-sm border border-[#2E332C] transition-colors bg-[#242722]" style={{}}>
                            Wybierz Luxury
                        </button>
</div>
</div>

<div className="max-w-5xl mx-auto border-t border-[#2E332C] pt-16">
<div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
<div className="">
<span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wide mb-2 block" style={{}}>Marketplace Wtyczek</span>
<h3 className="text-2xl font-semibold text-[#FDFBF7]" style={{}}>Rozszerz możliwości</h3>
<p className="text-[#B0B0AA] mt-2 text-sm" style={{}}>Płać tylko za to, czego rzeczywiście używasz. Aktywuj jednym kliknięciem.</p>
</div>

<div className="flex gap-2">
<span className="px-3 py-1 rounded-full bg-[#FDFBF7] text-[#1A1C19] text-xs font-medium cursor-pointer">Wszystkie</span>
<span className="px-3 py-1 rounded-full bg-[#2E332C] text-[#B0B0AA] hover:bg-[#3A3F36] text-xs font-medium cursor-pointer transition-colors">Marketing</span>
<span className="px-3 py-1 rounded-full bg-[#2E332C] text-[#B0B0AA] hover:bg-[#3A3F36] text-xs font-medium cursor-pointer transition-colors">Zarządzanie</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group border border-[#2E332C] p-5 rounded-xl bg-[#242722] hover:shadow-md transition-all">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-[#1A1C19] flex items-center justify-center text-[#2D5A27] border border-[#2E332C]">
<iconify-icon icon="solar:chart-2-linear" width="20"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-semibold text-[#FDFBF7] bg-[#2E332C] px-2 py-1 rounded" style={{}}>+10 zł</span>

<div className="relative inline-flex items-center cursor-pointer">
<div className="w-9 h-5 bg-[#3A3F36] rounded-full peer-checked:bg-[#2D5A27] transition-colors group-hover:bg-[#4A4F46]"></div>
<div className="w-3 h-3 bg-[#FDFBF7] rounded-full absolute left-1 transition-transform"></div>
</div>
</div>
</div>
<h4 className="text-sm font-semibold text-[#FDFBF7] mb-1" style={{}}>Zaawansowane Raporty</h4>
<p className="text-xs text-[#B0B0AA] leading-relaxed" style={{}}>Analiza retencji klientów, efektywności pracowników i prognozy przychodów.</p>
</div>

<div className="group border border-[#2E332C] p-5 rounded-xl bg-[#242722] hover:shadow-md transition-all">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-[#1A1C19] flex items-center justify-center text-[#2D5A27] border border-[#2E332C]">
<iconify-icon icon="solar:user-id-linear" width="20"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-semibold text-[#FDFBF7] bg-[#2E332C] px-2 py-1 rounded" style={{}}>+10 zł</span>
<div className="relative inline-flex items-center cursor-pointer">
<div className="w-9 h-5 bg-[#3A3F36] rounded-full transition-colors group-hover:bg-[#4A4F46]"></div>
<div className="w-3 h-3 bg-[#FDFBF7] rounded-full absolute left-1"></div>
</div>
</div>
</div>
<h4 className="text-sm font-semibold text-[#FDFBF7] mb-1" style={{}}>Historia Pacjenta 360°</h4>
<p className="text-xs text-[#B0B0AA] leading-relaxed" style={{}}>Szczegółowa karta zabiegowa, wgrywanie zdjęć przed/po i notatki prywatne.</p>
</div>

<div className="group border border-[#2E332C] p-5 rounded-xl bg-[#242722] hover:shadow-md transition-all">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-[#1A1C19] flex items-center justify-center text-[#2D5A27] border border-[#2E332C]">
<iconify-icon icon="solar:box-linear" width="20"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-semibold text-[#FDFBF7] bg-[#2E332C] px-2 py-1 rounded" style={{}}>+15 zł</span>
<div className="relative inline-flex items-center cursor-pointer">
<div className="w-9 h-5 bg-[#3A3F36] rounded-full transition-colors group-hover:bg-[#4A4F46]"></div>
<div className="w-3 h-3 bg-[#FDFBF7] rounded-full absolute left-1"></div>
</div>
</div>
</div>
<h4 className="text-sm font-semibold text-[#FDFBF7] mb-1" style={{}}>Magazyn i Produkty</h4>
<p className="text-xs text-[#B0B0AA] leading-relaxed" style={{}}>Kontrola stanów magazynowych, zużycie materiałów i sprzedaż detaliczna.</p>
</div>

<div className="group border border-[#2E332C] p-5 rounded-xl bg-[#242722] hover:shadow-md transition-all">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-[#1A1C19] flex items-center justify-center text-[#2D5A27] border border-[#2E332C]">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-semibold text-[#FDFBF7] bg-[#2E332C] px-2 py-1 rounded" style={{}}>+20 zł</span>
<div className="relative inline-flex items-center cursor-pointer">
<div className="w-9 h-5 bg-[#3A3F36] rounded-full transition-colors group-hover:bg-[#4A4F46]"></div>
<div className="w-3 h-3 bg-[#FDFBF7] rounded-full absolute left-1"></div>
</div>
</div>
</div>
<h4 className="text-sm font-semibold text-[#FDFBF7] mb-1" style={{}}>Marketing SMS+</h4>
<p className="text-xs text-[#B0B0AA] leading-relaxed" style={{}}>Kampanie automatyczne: życzenia urodzinowe, przypomnienia o powrocie.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#111210] border-t border-[#2E332C] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="text-xl font-semibold tracking-tighter text-[#2D5A27] mb-4 block" href="#" style={{}}>just-book</a>
<p className="text-sm text-[#B0B0AA] mb-6" style={{}}>
                            Platforma rezerwacji dla wymagających. Łączymy spokój z technologią.
                        </p>
<div className="flex space-x-4">
<a className="text-[#6E726B] hover:text-[#2D5A27] transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-[#6E726B] hover:text-[#2D5A27] transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-[#6E726B] hover:text-[#2D5A27] transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-[#FDFBF7] uppercase tracking-wider mb-4" style={{}}>Firma</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#B0B0AA] hover:text-[#2D5A27] transition-colors" href="#" style={{}}>O nas</a></li>
<li><a className="text-sm text-[#B0B0AA] hover:text-[#2D5A27] transition-colors" href="#" style={{}}>Kariera</a></li>
<li><a className="text-sm text-[#B0B0AA] hover:text-[#2D5A27] transition-colors" href="#" style={{}}>Kontakt</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-[#FDFBF7] uppercase tracking-wider mb-4" style={{}}>Prawne</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#B0B0AA] hover:text-[#2D5A27] transition-colors" href="#" style={{}}>Regulamin</a></li>
<li><a className="text-sm text-[#B0B0AA] hover:text-[#2D5A27] transition-colors" href="#" style={{}}>Polityka prywatności</a></li>
<li><a className="text-sm text-[#B0B0AA] hover:text-[#2D5A27] transition-colors" href="#" style={{}}>Cookies</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-[#FDFBF7] uppercase tracking-wider mb-4" style={{}}>Newsletter</h4>
<p className="text-sm text-[#B0B0AA] mb-4" style={{}}>Odbierz poradnik: "Budowanie marki premium w branży beauty".</p>
<form className="flex flex-col gap-2">
<input className="w-full px-4 py-2.5 text-sm border border-[#2E332C] rounded-lg focus:outline-none focus:border-[#2D5A27] focus:ring-1 focus:ring-[#2D5A27] placeholder-[#6E726B] bg-[#242722] text-[#FDFBF7]" placeholder="Twój email" type="email"/>
<button className="w-full px-4 py-2.5 text-sm font-medium bg-[#FDFBF7] hover:bg-[#EAE8E4] rounded-lg transition-colors text-[#1A1C19]" style={{}} type="submit">
                                Zapisz się
                            </button>
</form>
</div>
</div>
<div className="border-t border-[#2E332C] pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-xs text-[#6E726B]" style={{}}>© 2023 just-book. Wszystkie prawa zastrzeżone.</p>
</div>
</div>
</footer>
</main>

    </>
  );
}
