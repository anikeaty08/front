import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
esg: {
dark: '#163300',
light: '#E2F6D5',
accent: '#77C744',
gray: '#F5F5F5',
}
},
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
backgroundImage: {
'card-gradient': 'linear-gradient(180deg, #E2F6D5 0%, #FFFFFF 100%)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



                (function() {
                const triggerBtn = document.getElementById('nav-trigger-btn');
                const dropdown = document.getElementById('nav-dropdown-card');
                let isOpen = false;

                function toggleMenu(event) {
                    if(event) event.stopPropagation();
                    isOpen = !isOpen;

                    if (isOpen) {
                        dropdown.classList.remove('opacity-0', 'invisible', 'scale-95', 'translate-y-2');
                        dropdown.classList.add('opacity-100', 'visible', 'scale-100', 'translate-y-0');
                        triggerBtn.classList.add('bg-white', 'text-esg-dark');
                        triggerBtn.classList.remove('text-white', 'bg-black/20');
                    } else {
                        dropdown.classList.add('opacity-0', 'invisible', 'scale-95', 'translate-y-2');
                        dropdown.classList.remove('opacity-100', 'visible', 'scale-100', 'translate-y-0');
                        triggerBtn.classList.remove('bg-white', 'text-esg-dark');
                        triggerBtn.classList.add('text-white', 'bg-black/20');
                    }
                }

                if(triggerBtn) triggerBtn.addEventListener('click', toggleMenu);
                document.addEventListener('click', function(event) {
                    if (isOpen && dropdown && triggerBtn && !dropdown.contains(event.target) && !triggerBtn.contains(event.target)) {
                        toggleMenu();
                    }
                });
            })();
            


                (function() {
                    const track = document.getElementById('hero-scroll-track');
                    const card = document.getElementById('morphing-card');
                    const initialContent = document.getElementById('hero-initial-content');
                    const finalHeader = document.getElementById('final-header');

                    function getConfig() {
                        const width = window.innerWidth;
                        const isMobile = width < 768;
                        return {
                            finalWidth: isMobile ? width * 0.92 : Math.min(width * 0.95, 1600),
                            finalHeight: isMobile ? 400 : 600,
                            finalRadius: isMobile ? 24 : 40,
                            finalTopMargin: isMobile ? 180 : 380
                        };
                    }
                    
                    function handleScroll() {
                        if (!track || !card) return;
                        const config = getConfig();
                        const rect = track.getBoundingClientRect();
                        const endScroll = track.offsetHeight - window.innerHeight;
                        let scrolled = -rect.top; 
                        
                        let progress = Math.max(0, Math.min(scrolled / (endScroll * 0.6), 1));
                        
                        const windowWidth = window.innerWidth;
                        const currentWidth = windowWidth - (progress * (windowWidth - config.finalWidth));
                        const windowHeight = window.innerHeight;
                        const currentHeight = windowHeight - (progress * (windowHeight - config.finalHeight));
                        const currentMargin = progress * config.finalTopMargin;
                        const currentRadius = progress * config.finalRadius;

                        card.style.width = `${currentWidth}px`;
                        card.style.height = `${currentHeight}px`;
                        card.style.borderRadius = `${currentRadius}px`;
                        card.style.marginTop = `${currentMargin}px`;
                        
                        if (initialContent) {
                            initialContent.style.opacity = Math.max(0, 1 - (progress * 3));
                        }
                        
                        let headerOpacity = 0;
                        if (progress > 0.5) {
                            headerOpacity = (progress - 0.5) * 2;
                        }
                        if (finalHeader) {
                            finalHeader.style.opacity = Math.min(headerOpacity, 1);
                        }
                    }

                    window.addEventListener('scroll', handleScroll, { passive: true });
                    window.addEventListener('resize', handleScroll, { passive: true });
                    handleScroll();
                })();
            


                function switchTab(tabName) {
                    const tabs = ['history', 'values'];
                    tabs.forEach(t => {
                        const content = document.getElementById('block-' + t);
                        const btn = document.querySelector(`button[data-tab="${t}"]`);
                        
                        if (t === tabName) {
                            content.classList.remove('hidden');
                            btn.className = "tab-btn px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 bg-white text-slate-900 shadow-sm shadow-black/5";
                        } else {
                            content.classList.add('hidden');
                            btn.className = "tab-btn px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 text-slate-500 hover:text-slate-900 hover:bg-white/50";
                        }
                    });
                }
            
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="z-50 pointer-events-none w-full absolute top-0 left-0" id="global-nav">

<a className="pointer-events-auto hover:opacity-80 transition-opacity absolute top-8 left-8 flex items-center gap-4 z-10" href="#">
<div className="flex text-esg-dark bg-white w-20 h-20 rounded-full items-center justify-center">
<iconify-icon className="" icon="solar:leaf-bold" width="48"></iconify-icon>
</div>
<span className="text-4xl md:text-5xl font-bold text-white tracking-tight font-sans">EkoVerum</span>
</a>

<div className="fixed pointer-events-auto z-50 transition-transform duration-500 ease-in-out top-6 right-6 gap-x-6 gap-y-6" id="smart-nav-root" style={{transform: 'translateY(0px)'}}>
<div className="flex gap-3 relative gap-x-6 gap-y-6 items-center">

<div className="js-nav-item hidden md:flex gap-6 transition-all duration-300 hover:bg-black/50 hover:border-white/20 bg-black/20 h-12 border border-white/10 rounded-full pr-6 pl-6 backdrop-blur-sm gap-x-6 gap-y-6 items-center">
<div className="flex gap-6 gap-x-6 gap-y-6 items-center">
<a className="hover:text-esg-accent transition-colors text-base font-medium text-white/90" href="#home">Start</a>
<a className="hover:text-esg-accent transition-colors text-base font-medium text-white/90" href="#about">O nas</a>
<a className="hover:text-esg-accent transition-colors text-base font-medium text-white/90" href="#offer">Oferta</a>
</div>
<div className="w-px h-4 bg-white/20"></div>
<a className="hover:text-esg-accent transition-colors text-base font-medium text-white" href="#contact">Kontakt</a>
</div>

<button className="z-50 js-nav-item flex md:hidden hover:bg-black/50 hover:border-white/20 transition-all duration-300 active:scale-95 text-white bg-black/20 w-12 h-12 border border-white/10 rounded-full relative backdrop-blur-sm items-center justify-center" id="nav-trigger-btn">
<iconify-icon icon="solar:hamburger-menu-linear" id="nav-icon" width="24"></iconify-icon>
</button>

<div className="flex flex-col transform transition-all duration-300 origin-top-right bg-[#163300]/90 opacity-0 w-[300px] border-white/10 border rounded-[32px] mt-4 pt-4 pr-4 pb-4 pl-4 absolute top-full right-0 shadow-2xl backdrop-blur-2xl translate-y-2 scale-95 invisible" id="nav-dropdown-card">
<div className="flex flex-col">
<a className="group flex items-center justify-between hover:bg-white/5 transition-colors border-b border-white/5 py-3 px-5 rounded-xl" href="#home">
<span className="group-hover:text-esg-accent transition-colors text-lg font-medium text-white/90">Start</span>
</a>
<a className="group flex items-center justify-between hover:bg-white/5 transition-colors border-b border-white/5 py-3 px-5 rounded-xl" href="#about">
<span className="group-hover:text-esg-accent transition-colors text-lg font-medium text-white/90">O nas</span>
</a>
<a className="group flex items-center justify-between hover:bg-white/5 transition-colors border-b border-white/5 py-3 px-5 rounded-xl" href="#offer">
<span className="group-hover:text-esg-accent transition-colors text-lg font-medium text-white/90">Oferta</span>
</a>
<a className="group flex items-center justify-between hover:bg-white/5 transition-colors rounded-xl pt-3 pr-5 pb-3 pl-5" href="#contact">
<span className="group-hover:text-esg-accent transition-colors text-lg font-medium text-white/90">Kontakt</span>
</a>
</div>
</div>


</div>
</div>
</nav>
<main className="">

<header className="bg-esg-dark w-full h-[300vh] relative" id="hero-scroll-track">
<div className="sticky flex flex-col overflow-hidden z-10 w-full h-screen top-0 items-center justify-start">

<div className="z-10 flex flex-col transition-opacity duration-300 text-center w-full pr-6 pl-6 absolute top-[15%] items-center" id="final-header" style={{opacity: '1'}}>
<h1 className="cursor-text md:text-7xl text-4xl font-semibold text-white tracking-tight mb-6">Profesjonalne doradztwo<br/><span className="text-esg-accent inline-block mt-2">środowiskowe</span></h1>
<p className="cursor-text text-esg-light/80 md:text-xl leading-relaxed text-lg font-normal max-w-2xl mr-auto ml-auto">
  Raporty OOŚ, KIP, pozwolenia i analizy środowiskowe dla zakładów <br/>i inwestycji przemysłowych.</p>
<div className="mt-8 flex gap-4">
<a className="bg-esg-accent hover:bg-white hover:text-esg-dark text-esg-dark font-semibold py-3 px-8 rounded-full transition-all duration-300" href="#offer">Nasze Usługi</a>
<a className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-3 px-8 rounded-full transition-all duration-300" href="#contact">Kontakt</a>
</div>
</div>

<div className="relative bg-black overflow-hidden shadow-2xl z-20" id="morphing-card" style={{width: '1368px', height: '600px', borderRadius: '40px', marginTop: '380px'}}>
<img alt="Nature and Industry" className="opacity-80 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&amp;w=2641&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/30"></div>
<div className="flex flex-col md:pb-[120px] pb-[80px] absolute top-0 right-0 bottom-0 left-0 justify-end" id="hero-initial-content" style={{opacity: '0'}}>
<div className="md:px-12 lg:px-20 w-full max-w-[1600px] mr-auto ml-auto pr-6 pl-6">
<div className="inline-flex items-center gap-3 mb-6 opacity-90">
<span className="uppercase text-xs font-semibold text-white/90 tracking-[0.2em] md:text-lg">EKOVERUM</span>
</div>
<h2 className="leading-tight cursor-text md:text-5xl lg:text-8xl text-3xl font-medium text-white tracking-tight text-left">
  Środowisko w inwestycjach <br/>i działalności przemysłowej.</h2>
</div>
</div>
</div>
</div>


</header>

<div className="relative z-30 bg-white -mt-32 rounded-t-[3rem] md:rounded-t-[5rem] overflow-hidden shadow-[0_-20px_60px_rgba(0,0,0,0.5)]">

<section className="text-esg-dark w-full border-gray-100 border-b pt-20 pb-20 relative">
<div className="md:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col items-center justify-center gap-12 pt-8">
<h2 className="text-2xl md:text-3xl font-semibold text-center tracking-tight text-slate-800">Dlaczego warto nam zaufać?</h2>

<div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 text-slate-600">
<div className="flex flex-col items-center gap-3">
<iconify-icon className="text-esg-dark" icon="solar:shield-check-linear" width="48"></iconify-icon>
<span className="font-semibold text-lg tracking-tight">Zgodność z Prawem</span>
</div>
<div className="flex flex-col items-center gap-3">
<iconify-icon className="text-esg-dark" icon="solar:clock-circle-linear" width="48"></iconify-icon>
<span className="font-semibold text-lg tracking-tight">Terminowość</span>
</div>
<div className="flex flex-col items-center gap-3">
<iconify-icon className="text-esg-dark" icon="solar:diploma-verified-linear" width="48"></iconify-icon>
<span className="font-semibold text-lg tracking-tight">Ekspercka Wiedza</span>
</div>
<div className="flex flex-col items-center gap-3">
<iconify-icon className="text-esg-dark" icon="solar:hand-shake-linear" width="48"></iconify-icon>
<span className="font-semibold text-lg tracking-tight">Indywidualne Podejście</span>
</div>
</div>
</div>
</div>
</section>

<section className="text-esg-dark md:px-12 bg-white pt-24 pr-6 pb-40 pl-6 relative" id="offer">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-7xl mr-auto ml-auto">

<div className="flex flex-col justify-start gap-8 lg:sticky lg:top-32 h-fit lg:self-start">
<div className="inline-flex items-center gap-2 px-3 py-1 w-fit rounded-full bg-esg-light text-esg-dark text-xs font-bold uppercase tracking-wider border border-esg-dark/10">
                            Usługi
                        </div>
<h2 className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.1]">
                            Nasza oferta
                        </h2>
<div className="flex flex-col gap-6 mt-2">
<p className="md:text-xl leading-relaxed text-lg font-medium text-slate-700">
                                EkoVerum wspiera przedsiębiorstwa w zarządzaniu aspektami środowiskowymi zarówno na etapie realizacji inwestycji, jak i w trakcie bieżącej działalności operacyjnej.
                            </p>
<p className="md:text-lg leading-relaxed text-base text-slate-600">
                                Zapewniamy przygotowanie dokumentacji środowiskowej, wsparcie w procesach administracyjnych oraz pomoc w spełnianiu obowiązków regulacyjnych.
                            </p>
<p className="md:text-lg leading-relaxed text-base text-slate-600">
                                Nasze działania koncentrują się na minimalizacji ryzyk oraz zapewnieniu zgodności działalności z wymaganiami środowiskowymi.
                            </p>
</div>
</div>

<div className="flex flex-col gap-8">

<div className="bg-slate-50 hover:bg-[#E2F6D5] transition-all duration-500 ease-out p-10 rounded-[40px] border border-transparent hover:border-[#E2F6D5] shadow-sm hover:shadow-lg flex flex-col gap-8 relative overflow-hidden group hover:-translate-y-2">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-esg-dark shadow-sm shrink-0">
<iconify-icon icon="solar:document-text-linear" width="32"></iconify-icon>
</div>
<div className="space-y-6 relative z-10">
<h3 className="text-3xl font-semibold tracking-tight text-esg-dark">Dokumentacja środowiskowa</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-esg-accent mt-0.5 shrink-0 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-slate-600 font-medium leading-snug">Karty Informacyjne Przedsięwzięcia (KIP)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-esg-accent mt-0.5 shrink-0 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-slate-600 font-medium leading-snug">Raporty Oddziaływania na Środowisko (OOŚ)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-esg-accent mt-0.5 shrink-0 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span className="leading-snug font-medium text-slate-600">Analizy oddziaływania</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-esg-accent mt-0.5 shrink-0 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span className="leading-snug font-medium text-slate-600">Analizy porealizacyjne</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-esg-accent mt-0.5 shrink-0 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span className="leading-snug font-medium text-slate-600">Zgłoszenia</span>
</li>
</ul>
</div>
</div>

<div className="bg-slate-50 hover:bg-[#E2F6D5] transition-all duration-500 ease-out p-10 rounded-[40px] border border-transparent hover:border-[#E2F6D5] shadow-sm hover:shadow-lg flex flex-col gap-8 relative overflow-hidden group hover:-translate-y-2">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-esg-dark shadow-sm shrink-0">
<iconify-icon className="" icon="solar:checklist-minimalistic-linear" width="32"></iconify-icon>
</div>
<div className="space-y-6 relative z-10">
<h3 className="text-esg-dark text-3xl font-semibold tracking-tight">Decyzje i pozwolenia</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-esg-accent mt-0.5 shrink-0 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span className="leading-snug font-medium text-slate-600">Decyzje środowiskowe</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-esg-accent mt-0.5 shrink-0 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span className="leading-snug font-medium text-slate-600">Pozwolenia emisyjne</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-esg-accent mt-0.5 shrink-0 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span className="leading-snug font-medium text-slate-600">Pozwolenia wodnoprawne</span>
</li>
</ul>
</div>
</div>

<div className="bg-slate-50 hover:bg-[#E2F6D5] transition-all duration-500 ease-out p-10 rounded-[40px] border border-transparent hover:border-[#E2F6D5] shadow-sm hover:shadow-lg flex flex-col gap-8 relative overflow-hidden group hover:-translate-y-2">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-esg-dark shadow-sm shrink-0">
<iconify-icon icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
</div>
<div className="space-y-6 relative z-10">
<h3 className="text-3xl font-semibold tracking-tight text-esg-dark">Obsługa środowiskowa firm</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-esg-accent mt-0.5 shrink-0 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span className="leading-snug font-medium text-slate-600">Audytowanie</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-esg-accent mt-0.5 shrink-0 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span className="leading-snug font-medium text-slate-600">Raportowanie i sprawozdawczość</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-esg-accent mt-0.5 shrink-0 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span className="leading-snug font-medium text-slate-600">Bieżące wsparcie środowiskowe</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>
</div>

<section className="md:rounded-t-[5rem] -mt-16 text-[#E2F6D5] bg-[#163300] z-30 rounded-t-[3rem] pt-32 pb-32 relative">
<div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/10 text-esg-accent text-xs font-bold uppercase tracking-wider border border-white/10">
                    Proces Współpracy
                </div>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-white">Jak działamy?</h2>
<p className="text-lg md:text-xl font-light opacity-80 max-w-2xl mx-auto mb-20">
                    Przejrzyste etapy realizacji usług, od analizy po finalną decyzję.
                </p>

<div className="w-full overflow-x-auto pb-12 hide-scrollbar">
<div className="min-w-[800px] flex flex-col items-center">

<div className="border border-[#E2F6D5]/30 rounded-2xl px-8 py-4 bg-[#1F4400] relative z-10 hover:border-[#E2F6D5] transition-colors w-64">
<div className="text-esg-accent font-bold text-sm uppercase mb-2">Krok 1</div>
<span className="text-lg font-medium tracking-tight text-white">Analiza Wstępna</span>
<p className="text-xs text-white/60 mt-2">Weryfikacja potrzeb i stanu prawnego.</p>
</div>

<div className="h-12 w-px bg-[#E2F6D5]/30"></div>

<div className="border border-[#E2F6D5]/30 rounded-2xl px-8 py-4 bg-[#1F4400] relative z-10 hover:border-[#E2F6D5] transition-colors w-64">
<div className="text-esg-accent font-bold text-sm uppercase mb-2">Krok 2</div>
<span className="text-lg font-medium tracking-tight text-white">Inwentaryzacja</span>
<p className="text-xs text-white/60 mt-2">Pomiary i zbieranie danych <br/>w terenie.</p>
</div>

<div className="h-12 w-px bg-[#E2F6D5]/30"></div>

<div className="border border-esg-accent bg-white text-esg-dark rounded-2xl px-8 py-5 relative z-10 shadow-[0_0_30px_rgba(119,199,68,0.2)] w-72 transform hover:scale-105 transition-all">
<div className="text-esg-dark/60 font-bold text-sm uppercase mb-2">Krok 3</div>
<span className="text-xl font-bold tracking-tight">Opracowanie Dokumentacji</span>
<p className="text-sm text-esg-dark/70 mt-2 leading-snug">Przygotowanie profesjonalnych raportów i wniosków.</p>
</div>

<div className="h-12 w-px bg-[#E2F6D5]/30"></div>

<div className="border border-[#E2F6D5]/30 rounded-2xl px-8 py-4 bg-[#1F4400] relative z-10 hover:border-[#E2F6D5] transition-colors w-64">
<div className="text-esg-accent font-bold text-sm uppercase mb-2">Krok 4</div>
<span className="text-lg font-medium tracking-tight text-white">Postępowanie</span>
<p className="text-xs text-white/60 mt-2">Reprezentacja przed urzędami.</p>
</div>

<div className="h-12 w-px bg-[#E2F6D5]/30"></div>

<div className="border border-[#E2F6D5]/50 rounded-full px-8 py-3 bg-[#163300] relative z-10">
<span className="text-lg font-bold tracking-tight text-esg-accent">Uzyskanie Decyzji / Pozwolenia</span>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden -mt-[80px] z-30 text-slate-900 font-sans bg-white rounded-t-[80px] pt-[100px] pb-20 relative" id="about">
<div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent w-full absolute top-0 left-0"></div>
<div className="flex flex-col text-center w-[95%] max-w-[1600px] z-10 mr-auto ml-auto relative items-center">
<h2 className="md:text-5xl text-3xl font-semibold text-slate-900 tracking-tight mb-4">O Pracowni EkoVerum</h2>
<p className="leading-relaxed text-lg font-normal text-slate-600 max-w-3xl mb-10">Jesteśmy zespołem ekspertów łączących wiedzę inżynierską. Naszą misją jest wspieranie zrównoważonego rozwoju poprzez rzetelne doradztwo.</p>
<div className="inline-flex flex-wrap gap-1 bg-slate-100 border-slate-200 border rounded-full mb-12 p-1.5 items-center justify-center">
<button className="tab-btn transition-all duration-300 text-sm font-semibold text-slate-900 bg-white rounded-full pt-3 pr-6 pb-3 pl-6 shadow-sm" data-tab="history" onclick="switchTab('history')">O Nas</button>
<button className="tab-btn transition-all duration-300 hover:text-slate-900 hover:bg-white/50 text-sm font-medium text-slate-500 rounded-full pt-3 pr-6 pb-3 pl-6" data-tab="values" onclick="switchTab('values')">Nasze Wartości</button>
</div>
</div>
<div className="z-20 relative max-w-[1400px] mx-auto px-6">

<div className="tab-content block animate-fade-in" id="block-history">
<div className="flex flex-col lg:flex-row gap-12 items-center bg-slate-50 rounded-[40px] p-8 lg:p-12 border border-slate-100">
<div className="lg:w-1/2 w-full h-[400px] rounded-[32px] overflow-hidden relative shadow-lg">
<img alt="EkoVerum Team" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bcf74f7c-a8d0-45bf-a589-bc58088bc8a6_1600w.png"/>
</div>
<div className="lg:w-1/2 flex flex-col gap-6">
<h3 className="text-3xl font-semibold text-slate-900">Doświadczenie i Nowoczesność</h3>
<p className="leading-relaxed text-lg text-slate-600">Pracownia EkoVerum powstała, by wspierać przedsiębiorców w zrównoważonym rozwoju. Wyróżnia nas indywidualne podejście do każdego projektu oraz ciągła aktualizacja wiedzy w dynamicznie zmieniającym się otoczeniu prawnym.</p>
<p className="leading-relaxed text-lg text-slate-600">
    Współpracujemy zarówno z dużymi zakładami przemysłowymi, jak <br/>i mniejszymi przedsiębiorstwami oraz jednostkami
    samorządu terytorialnego.
</p>
<div className="mt-4 flex gap-8">
<div className="">
<span className="block text-esg-dark text-3xl font-bold">20+</span>
<span className="text-sm text-slate-500 font-medium">Lat doświadczenia</span>
</div>
<div className="">
<span className="block text-esg-dark text-3xl font-bold">200+</span>
<span className="text-sm text-slate-500 font-medium">Zrealizowanych projektów</span>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content hidden animate-fade-in" id="block-values">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white border border-slate-100 p-8 rounded-[32px] shadow-sm hover:shadow-md transition-all">
<div className="w-12 h-12 bg-esg-light/30 rounded-xl flex items-center justify-center text-esg-dark mb-6">
<iconify-icon icon="solar:star-linear" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-bold mb-3">Jakość</h4>
<p className="text-slate-600">Dokładamy wszelkich starań, aby nasze opracowania były merytorycznie bezbłędne i estetyczne.</p>
</div>
<div className="bg-white border border-slate-100 p-8 rounded-[32px] shadow-sm hover:shadow-md transition-all">
<div className="w-12 h-12 bg-esg-light/30 rounded-xl flex items-center justify-center text-esg-dark mb-6">
<iconify-icon icon="solar:shield-linear" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-bold mb-3">Odpowiedzialność</h4>
<p className="text-slate-600">Bierzemy odpowiedzialność za nasze doradztwo, zapewniając klientom bezpieczeństwo prawne.</p>
</div>
<div className="bg-white border border-slate-100 p-8 rounded-[32px] shadow-sm hover:shadow-md transition-all">
<div className="w-12 h-12 bg-esg-light/30 rounded-xl flex items-center justify-center text-esg-dark mb-6">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-bold mb-3">Partnerstwo</h4>
<p className="text-slate-600">Budujemy długotrwałe relacje oparte na zaufaniu i otwartej komunikacji.</p>
</div>
</div>
</div>
</div>

</section>

<section className="text-esg-dark md:rounded-t-[5rem] -mt-16 z-20 bg-slate-50 rounded-t-[4rem] pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight">Twoje korzyści ze współpracy</h2>
<p className="leading-relaxed text-lg text-slate-600">W EkoVerum traktujemy ochronę środowiska jako element strategii biznesowej, nie tylko obowiązek formalny. Zapewniamy kompleksowe wsparcie, aby rozwój Twojej firmy przebiegał bezpiecznie i zgodnie z regulacjami.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-[32px] bg-white border border-slate-100 hover:border-esg-light hover:shadow-lg transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-esg-light/20 text-esg-dark flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:check-read-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-bold mb-4 tracking-tight">Pewność prawna</h3>
<p className="text-slate-600 leading-relaxed">Gwarancja zgodności dokumentacji <br/>z aktualnie obowiązującymi przepisami ochrony
  środowiska.</p>
</div>

<div className="group p-8 rounded-[32px] bg-white border border-slate-100 hover:border-esg-light hover:shadow-lg transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-esg-light/20 text-esg-dark flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:banknote-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-bold mb-4 tracking-tight">Oszczędność czasu i kosztów</h3>
<p className="leading-relaxed text-slate-600">Uniknięcie kar administracyjnych <br/>i optymalizacja opłat środowiskowych dzięki
  profesjonalnej analizie.</p>
</div>

<div className="group p-8 rounded-[32px] bg-white border border-slate-100 hover:border-esg-light hover:shadow-lg transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-esg-light/20 text-esg-dark flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chat-round-call-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-bold mb-4 tracking-tight">Stałe wsparcie</h3>
<p className="text-slate-600 leading-relaxed">Dostęp do wiedzy eksperckiej na każdym etapie prowadzenia działalności.</p>
</div>
</div>
</div>
</section>

<section className="bg-esg-dark text-esg-light py-24 px-6 relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1F4400] rounded-full blur-[120px] opacity-50 pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="flex flex-col gap-10">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/10 text-esg-accent text-xs font-bold uppercase tracking-wider border border-white/10">
                                Skontaktuj się
                            </div>
<h2 className="text-5xl font-bold text-white tracking-tight mb-6">Porozmawiajmy o Twoim projekcie</h2>
<p className="leading-relaxed text-xl text-white/70 max-w-lg">
                                Potrzebujesz wyceny lub porady? Wypełnij formularz lub skontaktuj się z nami bezpośrednio.
                            </p>
</div>
<div className="flex flex-col gap-6">
<a className="flex items-center gap-6 p-6 rounded-[24px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group" href="mailto:biuro@ekoverum.pl">
<div className="w-12 h-12 rounded-full bg-esg-accent flex items-center justify-center text-esg-dark group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<span className="block text-sm text-white/50 uppercase tracking-wider font-bold mb-1">Email</span>
<span className="text-xl text-white font-medium">biuro@ekoverum.pl</span>
</div>
</a>
<a className="flex items-center gap-6 p-6 rounded-[24px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group" href="tel:+48000000000">
<div className="w-12 h-12 rounded-full bg-esg-accent flex items-center justify-center text-esg-dark group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div className="">
<span className="block text-sm text-white/50 uppercase tracking-wider font-bold mb-1">Telefon</span>
<span className="text-xl font-medium text-white">+48 690 007 277</span>
</div>
</a>
</div>
</div>

<div className="bg-white rounded-[40px] p-8 md:p-12 text-slate-900 shadow-2xl">
<h3 className="text-2xl font-bold mb-6 text-esg-dark">Wyślij wiadomość</h3>

<form action="https://formsubmit.co/biuro@ekoverum.pl" className="flex flex-col gap-5" method="POST">

<input name="_subject" type="hidden" value="Nowe zapytanie ze strony EkoVerum!"/>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="flex flex-col gap-2">
<label className="text-xs font-bold uppercase tracking-wider text-slate-500">Imię i Nazwisko</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-esg-dark focus:ring-2 focus:ring-esg-light transition-all placeholder:text-slate-400" name="Imię_i_Nazwisko" placeholder="Jan Kowalski" required="" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-bold uppercase tracking-wider text-slate-500">Telefon</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-esg-dark focus:ring-2 focus:ring-esg-light transition-all placeholder:text-slate-400" name="Telefon" placeholder="+48 ..." type="tel"/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-bold uppercase tracking-wider text-slate-500">Adres Email</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-esg-dark focus:ring-2 focus:ring-esg-light transition-all placeholder:text-slate-400" name="Email" placeholder="jan@firma.pl" required="" type="email"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-bold uppercase tracking-wider text-slate-500">Wiadomość</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-esg-dark focus:ring-2 focus:ring-esg-light transition-all placeholder:text-slate-400 min-h-[120px] resize-none" name="Wiadomość" placeholder="Opisz krótko sprawę..." required=""></textarea>
</div>
<button className="mt-2 bg-esg-dark text-white font-bold py-4 rounded-xl hover:bg-[#1F4400] transition-colors flex items-center justify-center gap-2 group" type="submit">
<span>Wyślij zapytanie</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="text-sm text-white/40 text-center border-white/10 border-t pt-12 pr-6 pb-12 pl-6">
<div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
<div className="flex items-center gap-2 opacity-80 mb-4">
<div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white">
<iconify-icon icon="solar:leaf-bold" width="16"></iconify-icon>
</div>
<span className="text-lg font-bold text-white tracking-tight">EkoVerum</span>
</div>
<p className="">© 2026 EkoVerum. Wszelkie prawa zastrzeżone.</p>
<div className="flex gap-6 mt-2">
</div>
</div>
</footer>

    </>
  );
}
