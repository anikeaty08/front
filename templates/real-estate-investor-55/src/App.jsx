import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- Mobile Menu Logic ---
        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('translate-x-full')) {
                menu.classList.remove('translate-x-full');
            } else {
                menu.classList.add('translate-x-full');
            }
        }

        // --- Accordion Logic ---
        function toggleAccordion(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('iconify-icon');
            
            // Close others
            const allContents = document.querySelectorAll('.accordion-content');
            const allIcons = document.querySelectorAll('iconify-icon[icon="lucide:plus"]');
            
            allContents.forEach(c => {
                if (c !== content) c.style.gridTemplateRows = '0fr';
            });
            allIcons.forEach(i => {
                if (i !== icon) i.style.transform = 'rotate(0deg)';
            });

            // Toggle current
            if (content.style.gridTemplateRows === '1fr') {
                content.style.gridTemplateRows = '0fr';
                icon.style.transform = 'rotate(0deg)';
            } else {
                content.style.gridTemplateRows = '1fr';
                icon.style.transform = 'rotate(45deg)';
            }
        }

        // --- Carousel Logic ---
        const cards = [
            { title: "Wohnpark Mitte", img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/14422859-2c3e-444b-911b-03aae8342fd5_800w.webp", category: "Bestand" },
            { title: "Villa Westend", img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e70a40f-3f85-4179-ae7c-ae8ce4783151_800w.webp", category: "Wohnen" },
            { title: "Stadthaus Nord", img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5323bb36-ee4e-4aa0-a014-ac8c26c0bcf9_800w.webp", category: "Sanierung" }
        ];

        let currentIndex = 1;
        let isAnimating = false;

        function updateDOM() {
            const leftIdx = (currentIndex - 1 + cards.length) % cards.length;
            const centerIdx = currentIndex;
            const rightIdx = (currentIndex + 1) % cards.length;

            const leftEl = document.getElementById('card-left');
            const centerEl = document.getElementById('card-center');
            const rightEl = document.getElementById('card-right');

            // Apply content
            const setContent = (el, idx, isCenter) => {
                const img = el.querySelector('img');
                img.src = cards[idx].img;
                if(isCenter) {
                    el.querySelector('h3').textContent = cards[idx].title;
                    el.querySelector('span').textContent = cards[idx].category;
                } else {
                    el.querySelector('p').textContent = cards[idx].title;
                }
            };

            setContent(leftEl, leftIdx, false);
            setContent(centerEl, centerIdx, true);
            setContent(rightEl, rightIdx, false);
        }

        function rotateCarousel(direction) {
            if (isAnimating) return;
            isAnimating = true;

            const centerEl = document.getElementById('card-center');

            // Visual transition states
            centerEl.style.opacity = '0';
            centerEl.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                if (direction === 'next') {
                    currentIndex = (currentIndex + 1) % cards.length;
                } else {
                    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
                }
                
                updateDOM();
                
                // Restore center
                centerEl.style.opacity = '1';
                centerEl.style.transform = 'scale(1)';
                
                isAnimating = false;
            }, 600); // Matches CSS transition duration
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#a9b24d]/5 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-[#a9b24d]/3 rounded-full blur-[100px]"></div>
</div>

<div className="fixed inset-0 bg-[#0A0A0B]/95 backdrop-blur-2xl z-[60] transform translate-x-full transition-transform duration-500 ease-in-out flex flex-col justify-center items-center gap-10" id="mobile-menu">
<button className="absolute top-8 right-8 p-2 text-zinc-400 hover:text-white transition-colors" onclick="toggleMenu()">
<iconify-icon className="text-3xl" icon="lucide:x" strokeWidth="1"></iconify-icon>
</button>
<a className="text-4xl text-zinc-300 hover:text-[#a9b24d] font-serif tracking-tight transition-colors" href="#">Leistungen</a>
<a className="text-4xl text-zinc-300 hover:text-[#a9b24d] font-serif tracking-tight transition-colors" href="#">Ankaufsprofil</a>
<a className="text-4xl text-zinc-300 hover:text-[#a9b24d] font-serif tracking-tight transition-colors" href="#">Kontakt</a>
</div>

<nav className="fixed w-full z-50 px-6 lg:px-12 py-6 top-0 left-0 flex items-center justify-between transition-all duration-300 bg-gradient-to-b from-[#0A0A0B]/80 to-transparent">
<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/5 group-hover:bg-[#a9b24d]/20 group-hover:border-[#a9b24d]/30 transition-all duration-300">
<iconify-icon className="text-lg text-[#a9b24d]" icon="lucide:building-2" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-lg text-zinc-200 tracking-tight font-serif flex items-center gap-2">
                Hendrik <span className="text-[#a9b24d] italic">Grau</span>
</span>
</div>
<div className="hidden md:flex items-center gap-2 p-1.5 bg-[#18181B]/80 border border-white/5 rounded-full backdrop-blur-xl shadow-lg shadow-black/20">
<a className="px-6 py-2.5 text-xs font-medium text-zinc-100 bg-white/10 rounded-full transition-all shadow-sm" href="#">Leistungen</a>
<a className="px-6 py-2.5 text-xs font-medium text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-full transition-all" href="#">Ankaufsprofil</a>
<a className="px-6 py-2.5 text-xs font-medium text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-full transition-all" href="#">Kontakt</a>
</div>
<div className="flex items-center gap-6">
<button className="relative p-2 text-zinc-400 hover:text-[#a9b24d] transition-colors">
<iconify-icon className="text-xl" icon="lucide:search" strokeWidth="1.5"></iconify-icon>
</button>
<button className="md:hidden p-2 text-zinc-200" onclick="toggleMenu()">
<iconify-icon className="text-2xl" icon="lucide:menu" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>

<section className="relative z-10 pt-40 pb-24 lg:pt-48 lg:pb-32 px-6 lg:px-12 border-b border-white/5">
<div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

<div className="flex-1 flex flex-col justify-center">
<div className="flex items-center gap-4 mb-8">
<span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#a9b24d]">Investment</span>
<div className="h-px w-8 bg-[#a9b24d]/50"></div>
<span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">Seit 2010</span>
</div>
<h1 className="text-6xl lg:text-7xl xl:text-8xl leading-[0.95] mb-8 text-zinc-100 font-serif font-medium tracking-tight">
                    Ich kaufe <br/>
<span className="italic text-[#a9b24d] opacity-90 pr-4">Mehrfamilienhäuser</span>
</h1>
<p className="text-xl lg:text-2xl text-zinc-300 font-light mb-6 max-w-lg leading-relaxed">
                    Direkter Ankauf ohne Makler. <br/>Diskret, solvent und hanseatisch verlässlich.
                </p>
<p className="text-sm text-zinc-500 max-w-md leading-relaxed mb-12 border-l border-[#a9b24d]/30 pl-5">
                    Verkaufen Sie Ihr Mehrfamilienhaus direkt an den Investor. Bei Hendrik Grau finden Sie einen erfahrenen Partner für eine reibungslose Transaktion.
                </p>
<div className="mb-16">
<button className="group px-8 py-4 bg-[#a9b24d] text-white text-sm font-medium rounded-md hover:bg-[#9ba346] transition-all flex items-center gap-3 shadow-[0_0_30px_-10px_rgba(169,178,77,0.4)]">
                        Immobilie anbieten
                        <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>

<div className="mt-auto grid grid-cols-3 gap-6 pt-8 border-t border-white/5">
<div className="group cursor-default">
<div className="aspect-square rounded-lg overflow-hidden mb-3 relative border border-white/10 bg-white/5">
<img alt="Project 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/588ff515-542e-4057-9122-0b57118b3e74_800w.webp"/>
</div>
<p className="text-xs text-zinc-300 font-medium">MFH Bestand</p>
<p className="text-[10px] text-zinc-600 uppercase tracking-wider">Hamburg</p>
</div>
<div className="group cursor-default">
<div className="aspect-square rounded-lg overflow-hidden mb-3 relative border border-white/10 bg-white/5">
<img alt="Project 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92f79571-c9ab-4ba6-827b-8845c8060486_800w.webp"/>
</div>
<p className="text-xs text-zinc-300 font-medium">Sanierung</p>
<p className="text-[10px] text-zinc-600 uppercase tracking-wider">Berlin</p>
</div>
<div className="flex flex-col justify-end pb-6 items-end">
<button className="w-12 h-12 rounded-full border border-white/10 text-zinc-400 flex items-center justify-center hover:bg-[#a9b24d] hover:border-[#a9b24d] hover:text-white transition-all duration-300 group">
<iconify-icon className="text-xl group-hover:translate-y-1 transition-transform" icon="lucide:arrow-down" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="lg:w-[45%] flex flex-col justify-center relative">
<div className="relative h-[700px] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 group">
<img alt="Architecture Main" className="transition-transform duration-[2s] ease-out group-hover:scale-105 w-full h-full object-cover grayscale-[0.3]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df7a2dd9-504b-4462-9e25-8f9322d8a718_1600w.webp"/>
<div className="bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/20 to-transparent absolute top-0 right-0 bottom-0 left-0 opacity-90"></div>
<div className="absolute bottom-0 left-0 right-0 p-10 lg:p-12">
<div className="flex items-end justify-between">
<div>
<div className="flex items-center gap-3 mb-4">
<span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest bg-[#a9b24d] text-white shadow-lg shadow-[#a9b24d]/20">Aktuell</span>
</div>
<h2 className="text-3xl lg:text-4xl text-zinc-100 mb-3 font-serif font-medium tracking-tight">Bestandspflege</h2>
<p className="text-zinc-400 text-sm font-light max-w-xs leading-relaxed">Nachhaltige Entwicklung bestehender Wohnstrukturen für kommende Generationen.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F4F4F5] text-zinc-900 py-32 px-6 lg:px-12 relative overflow-hidden">
<div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
<div className="max-w-2xl">
<h2 className="text-5xl lg:text-6xl leading-[1] font-medium text-zinc-900 font-serif mb-6 tracking-tight">
                    Werte schaffen. <br/> <span className="text-zinc-400 italic font-serif">Langfristig.</span>
</h2>
<p className="text-zinc-500 text-sm lg:text-base leading-relaxed max-w-md">
                    Mein Fokus liegt auf Wertschöpfung, Nachhaltigkeit und einer vertrauensvollen Zusammenarbeit auf Augenhöhe.
                </p>
</div>
<div className="hidden lg:block h-px flex-1 bg-zinc-300 ml-12 mb-4"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12" id="projects-container">

<div className="group cursor-pointer flex flex-col h-full">
<div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-zinc-200">
<img alt="Ankauf" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[0.2]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4a82ca5b-ffa7-4e34-81d1-7b20a0bbd06d_1600w.webp"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
<div className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest rounded text-zinc-900 shadow-sm">Ankauf</div>
</div>
<div className="flex flex-col flex-1 border-t border-zinc-300 pt-6">
<h3 className="text-2xl text-zinc-900 mb-3 group-hover:text-[#a9b24d] transition-colors font-serif font-medium tracking-tight">Ankauf</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Schneller und diskreter Ankauf von Mehrfamilienhäusern in Metropolregionen. Sofortige Bonitätsprüfung.
                    </p>
</div>
</div>

<div className="group cursor-pointer flex flex-col h-full lg:mt-16">
<div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-zinc-200">
<img alt="Entwicklung" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[0.2]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3bddd261-7b06-4b0b-b492-db3a866ae985_800w.webp"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
<div className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest rounded text-zinc-900 shadow-sm">Konzept</div>
</div>
<div className="flex flex-col flex-1 border-t border-zinc-300 pt-6">
<h3 className="text-2xl text-zinc-900 mb-3 group-hover:text-[#a9b24d] transition-colors font-serif font-medium tracking-tight">Entwicklung</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Ganzheitliche Entwicklungskonzepte zur nachhaltigen Steigerung der Wohnqualität und des Objektwertes.
                    </p>
</div>
</div>

<div className="group cursor-pointer flex flex-col h-full">
<div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-zinc-200">
<img alt="Bestandshaltung" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[0.2]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/14422859-2c3e-444b-911b-03aae8342fd5_800w.webp"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
<div className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest rounded text-zinc-900 shadow-sm">Bestand</div>
</div>
<div className="flex flex-col flex-1 border-t border-zinc-300 pt-6">
<h3 className="text-2xl text-zinc-900 mb-3 group-hover:text-[#a9b24d] transition-colors font-serif font-medium tracking-tight">Bestandshaltung</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Verantwortungsvolle Verwaltung und Instandhaltung für langfristigen Werterhalt im eigenen Portfolio.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-[#101012] border-t border-white/5 py-32 px-6 lg:px-12 relative overflow-hidden">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#a9b24d]/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
<div className="flex flex-col lg:flex-row gap-20 items-start">
<div className="lg:w-1/3 lg:sticky lg:top-32">
<span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#a9b24d] mb-6 block">Ankaufsprofil</span>
<h2 className="text-5xl lg:text-6xl text-zinc-100 font-serif font-medium tracking-tight mb-8 leading-[1.1]">Wir suchen <br/>Objekte.</h2>
<p className="text-zinc-400 text-lg leading-relaxed font-light mb-10">
                    Unser Fokus liegt auf Wohnimmobilien mit Entwicklungspotenzial in norddeutschen Metropolregionen.
                </p>
<button className="text-sm font-medium text-white border-b border-[#a9b24d] pb-2 hover:text-[#a9b24d] hover:border-white transition-all inline-flex items-center gap-3">
                    Detailliertes Profil laden
                    <iconify-icon className="text-base" icon="lucide:download"></iconify-icon>
</button>
</div>
<div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

<div className="bg-white/[0.03] border border-white/[0.05] rounded-xl p-10 hover:bg-white/[0.06] hover:border-white/[0.1] transition-all group">
<div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#a9b24d]/10 text-[#a9b24d]">
<iconify-icon className="text-2xl group-hover:scale-110 transition-transform" icon="lucide:map-pin"></iconify-icon>
</div>
<h3 className="text-xl text-zinc-100 mb-3 font-serif">Standorte</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Hamburg, Berlin, Hannover sowie B-Städte mit positiver demografischer Entwicklung.</p>
</div>

<div className="bg-white/[0.03] border border-white/[0.05] rounded-xl p-10 hover:bg-white/[0.06] hover:border-white/[0.1] transition-all group">
<div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#a9b24d]/10 text-[#a9b24d]">
<iconify-icon className="text-2xl group-hover:scale-110 transition-transform" icon="lucide:home"></iconify-icon>
</div>
<h3 className="text-xl text-zinc-100 mb-3 font-serif">Asset Klasse</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Mehrfamilienhäuser, Wohnanlagen und Wohn- &amp; Geschäftshäuser (Anteil Gewerbe max. 20%).</p>
</div>

<div className="bg-white/[0.03] border border-white/[0.05] rounded-xl p-10 hover:bg-white/[0.06] hover:border-white/[0.1] transition-all group">
<div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#a9b24d]/10 text-[#a9b24d]">
<iconify-icon className="text-2xl group-hover:scale-110 transition-transform" icon="lucide:euro"></iconify-icon>
</div>
<h3 className="text-xl text-zinc-100 mb-3 font-serif">Volumen</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Einzelobjekte von 1 Mio. € bis 10 Mio. €. Portfolios auch darüber hinaus.</p>
</div>

<div className="bg-white/[0.03] border border-white/[0.05] rounded-xl p-10 hover:bg-white/[0.06] hover:border-white/[0.1] transition-all group">
<div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#a9b24d]/10 text-[#a9b24d]">
<iconify-icon className="text-2xl group-hover:scale-110 transition-transform" icon="lucide:hammer"></iconify-icon>
</div>
<h3 className="text-xl text-zinc-100 mb-3 font-serif">Zustand</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Vom sanierten Bestand bis hin zu stark sanierungsbedürftigen Objekten mit Leerstand.</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden flex flex-col text-zinc-800 bg-[#E5E5E5] py-32 relative justify-center">
<div className="px-6 lg:px-12 mb-16 flex justify-between items-end">
<div>
<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-3 block">Portfolio</span>
<h2 className="text-4xl lg:text-5xl text-zinc-900 font-serif font-medium tracking-tight">Aktuelle Objekte</h2>
</div>

<div className="flex gap-3">
<button className="w-14 h-14 rounded-full border border-zinc-300 bg-transparent hover:bg-white hover:border-transparent transition-all flex items-center justify-center text-zinc-800 shadow-sm" onclick="rotateCarousel('prev')">
<iconify-icon className="text-xl" icon="lucide:arrow-left" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-14 h-14 rounded-full border border-zinc-300 bg-transparent hover:bg-white hover:border-transparent transition-all flex items-center justify-center text-zinc-800 shadow-sm" onclick="rotateCarousel('next')">
<iconify-icon className="text-xl" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="flex overflow-visible w-full h-[600px] relative items-center justify-center" id="carousel-container">

<div className="carousel-card absolute w-[300px] lg:w-[450px] h-[550px] bg-white rounded-xl shadow-xl opacity-40 scale-90 -translate-x-[65%] z-10 overflow-hidden cursor-pointer grayscale" id="card-left" onclick="rotateCarousel('prev')">
<img alt="Plan" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/14422859-2c3e-444b-911b-03aae8342fd5_800w.webp"/>
<div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/60 to-transparent">
<p className="text-white font-serif text-2xl tracking-tight">Wohnpark Mitte</p>
</div>
</div>

<div className="carousel-card absolute w-[300px] lg:w-[450px] h-[550px] bg-white rounded-xl shadow-2xl scale-100 z-20 overflow-hidden ring-1 ring-black/5" id="card-center">
<img alt="Plan" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e70a40f-3f85-4179-ae7c-ae8ce4783151_800w.webp"/>

<div className="absolute inset-0 border-[16px] border-white/20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full bg-white border-t border-zinc-100 p-8">
<div className="flex justify-between items-center">
<div>
<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a9b24d] mb-2 block">Wohnen</span>
<h3 className="text-3xl text-zinc-900 font-serif font-medium tracking-tight">Villa Westend</h3>
</div>
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400">
<iconify-icon className="text-xl" icon="lucide:arrow-up-right" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="carousel-card absolute w-[300px] lg:w-[450px] h-[550px] bg-white rounded-xl shadow-xl opacity-40 scale-90 translate-x-[65%] z-10 overflow-hidden cursor-pointer grayscale" id="card-right" onclick="rotateCarousel('next')">
<img alt="Plan" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5323bb36-ee4e-4aa0-a014-ac8c26c0bcf9_800w.webp"/>
<div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/60 to-transparent">
<p className="text-white font-serif text-2xl tracking-tight">Stadthaus Nord</p>
</div>
</div>
</div>
<div className="flex justify-center gap-3 mt-16">
<div className="w-2.5 h-2.5 rounded-full bg-[#a9b24d]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-300"></div>
</div>
</section>

<section className="bg-white text-zinc-900 py-32 px-6 lg:px-12 border-b border-zinc-100">
<div className="max-w-7xl mx-auto">
<div className="mb-24 text-center lg:text-left">
<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a9b24d] mb-4 block">Der Verkaufsprozess</span>
<h2 className="text-4xl lg:text-5xl text-zinc-900 font-serif font-medium tracking-tight">Schnell. Diskret. Sicher.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">

<div className="hidden lg:block absolute top-[3rem] left-0 w-[90%] h-px bg-zinc-100 -z-0"></div>

<div className="group relative z-10">
<div className="w-24 h-24 bg-white border border-zinc-100 rounded-2xl flex items-center justify-center text-2xl font-serif text-[#a9b24d] shadow-sm mb-10 group-hover:-translate-y-2 transition-transform duration-500">
                        01
                    </div>
<h3 className="text-xl font-medium mb-4 font-serif">Kontaktaufnahme</h3>
<p className="text-sm text-zinc-500 leading-relaxed pr-4">Senden Sie uns die Eckdaten. Wir prüfen diese unverzüglich und vertraulich.</p>
</div>

<div className="group relative z-10">
<div className="w-24 h-24 bg-white border border-zinc-100 rounded-2xl flex items-center justify-center text-2xl font-serif text-[#a9b24d] shadow-sm mb-10 group-hover:-translate-y-2 transition-transform duration-500">
                        02
                    </div>
<h3 className="text-xl font-medium mb-4 font-serif">Bewertung</h3>
<p className="text-sm text-zinc-500 leading-relaxed pr-4">Besichtigung und marktgerechte Einwertung Ihrer Immobilie binnen 48h.</p>
</div>

<div className="group relative z-10">
<div className="w-24 h-24 bg-white border border-zinc-100 rounded-2xl flex items-center justify-center text-2xl font-serif text-[#a9b24d] shadow-sm mb-10 group-hover:-translate-y-2 transition-transform duration-500">
                        03
                    </div>
<h3 className="text-xl font-medium mb-4 font-serif">Angebot</h3>
<p className="text-sm text-zinc-500 leading-relaxed pr-4">Sie erhalten ein verbindliches Kaufangebot ohne Finanzierungsvorbehalt.</p>
</div>

<div className="group relative z-10">
<div className="w-24 h-24 bg-[#a9b24d] rounded-2xl flex items-center justify-center text-2xl font-serif text-white shadow-xl shadow-[#a9b24d]/20 mb-10 group-hover:-translate-y-2 transition-transform duration-500">
<iconify-icon icon="lucide:check" strokeWidth="2.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-4 font-serif">Abschluss</h3>
<p className="text-sm text-zinc-500 leading-relaxed pr-4">Schnelle Beurkundung beim Notar und sofortige Kaufpreiszahlung.</p>
</div>
</div>
</div>
</section>

<section className="lg:px-12 text-zinc-900 bg-[#FAFAFA] border-zinc-100 border-b py-32 pr-6 pl-6">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">

<div className="">
<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6 flex items-center gap-3">
<iconify-icon className="text-base text-[#a9b24d]" icon="lucide:user"></iconify-icon>
                Über mich
            </span>
<h2 className="text-5xl lg:text-6xl mb-8 text-zinc-900 leading-[1.05] font-serif font-medium tracking-tight">
                Hendrik Grau: Ihr Experte für den Ankauf.
            </h2>
<p className="text-zinc-500 text-lg leading-relaxed font-light mb-16 max-w-lg">
                Als privater Investor mit langjähriger Erfahrung im Immobilienmarkt stehe ich, Hendrik Grau, persönlich hinter jedem Kauf. Ich lege größten Wert auf eine faire Bewertung, absolute Diskretion und eine zügige, transparente Abwicklung.
            </p>

<div className="w-full space-y-2">
<div className="flex justify-between text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-6 border-b border-zinc-200 pb-4">
<span>Meilenstein</span>
<span>Jahr</span>
</div>

<div className="group flex items-center justify-between py-6 border-b border-zinc-200 hover:bg-white transition-colors cursor-default -mx-4 px-4 rounded-lg">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-4 text-zinc-900 font-semibold text-lg font-serif">
<iconify-icon className="text-xl text-[#a9b24d] opacity-0 group-hover:opacity-100 transition-opacity" icon="lucide:check-circle"></iconify-icon>
<span className="-ml-9 group-hover:ml-0 transition-all duration-300">Gründung Investment</span>
</div>
<span className="text-xs text-zinc-500">Start der privaten Investitionstätigkeit</span>
</div>
<span className="font-mono text-sm text-zinc-400">2010</span>
</div>

<div className="group flex items-center justify-between py-6 border-b border-zinc-200 hover:bg-white transition-colors cursor-default -mx-4 px-4 rounded-lg">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-4 text-zinc-900 font-semibold text-lg font-serif">
<iconify-icon className="text-xl text-[#a9b24d] opacity-0 group-hover:opacity-100 transition-opacity" icon="lucide:building"></iconify-icon>
<span className="-ml-9 group-hover:ml-0 transition-all duration-300">Erstes MFH Portfolio</span>
</div>
<span className="text-xs text-zinc-500">Erweiterung auf Mehrfamilienhäuser</span>
</div>
<span className="font-mono text-sm text-zinc-400">2012</span>
</div>

<div className="group flex items-center justify-between py-6 border-b border-zinc-200 hover:bg-white transition-colors cursor-default -mx-4 px-4 rounded-lg">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-4 text-zinc-900 font-semibold text-lg font-serif">
<iconify-icon className="text-xl text-[#a9b24d] opacity-0 group-hover:opacity-100 transition-opacity" icon="lucide:trending-up"></iconify-icon>
<span className="-ml-9 group-hover:ml-0 transition-all duration-300">Expansion</span>
</div>
<span className="text-xs text-zinc-500">Überregionale Ankäufe</span>
</div>
<span className="font-mono text-sm text-zinc-400">2018</span>
</div>
</div>
</div>

<div className="bg-white rounded-[1.5rem] overflow-hidden border border-zinc-100 shadow-2xl shadow-zinc-200/50 lg:mt-12">

<div className="h-80 w-full overflow-hidden relative group">
<img alt="Award Winning Project" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92fa848d-fed5-4735-b284-fe79a795072d_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-8 left-8 text-white z-10">
<span className="text-[10px] font-bold uppercase tracking-widest bg-[#a9b24d] text-white px-3 py-1 rounded-full mb-4 inline-block shadow-lg">Referenz</span>
<h3 className="text-3xl font-serif font-medium tracking-tight">HafenCity Hamburg</h3>
</div>
</div>

<div className="p-10 lg:p-12">
<div className="mb-12">
<h4 className="text-2xl text-zinc-900 mb-4 font-serif font-medium tracking-tight">Partnerschaft auf Augenhöhe</h4>
<p className="text-zinc-500 text-sm leading-relaxed">
                        Wir garantieren eine schnelle Prüfung Ihres Angebots und eine verbindliche Rückmeldung innerhalb von 48 Stunden.
                    </p>
</div>
<div className="space-y-8">

<div className="flex items-center justify-between group border-b border-zinc-50 pb-6">
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-[#a9b24d] group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="lucide:check"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-base font-semibold text-zinc-900">Abwicklung</span>
<span className="text-xs text-zinc-400">Schnell &amp; Sicher</span>
</div>
</div>
<span className="text-4xl text-zinc-900 font-serif font-medium">100%</span>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-[#a9b24d] group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="lucide:shield-check"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-base font-semibold text-zinc-900">Diskretion</span>
<span className="text-xs text-zinc-400">Garantiert</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white text-zinc-900 py-32 px-6 lg:px-12 border-t border-zinc-100">
<div className="max-w-3xl mx-auto">
<h2 className="text-4xl lg:text-5xl mb-16 text-center font-serif font-medium tracking-tight">Häufige Fragen</h2>
<div className="space-y-4">

<div className="border border-zinc-200 rounded-lg overflow-hidden bg-zinc-50/50 hover:bg-white transition-colors duration-300">
<button className="w-full px-8 py-6 flex items-center justify-between group" onclick="toggleAccordion(this)">
<span className="font-medium text-lg font-serif text-left text-zinc-800">Fallen Maklergebühren an?</span>
<iconify-icon className="text-xl text-[#a9b24d] transition-transform duration-300" icon="lucide:plus"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] accordion-content">
<div className="overflow-hidden">
<div className="px-8 pb-8 pt-0 text-zinc-500 text-sm leading-relaxed max-w-2xl">
                                Nein. Da wir als private Investoren direkt kaufen, entfallen sämtliche Maklerprovisionen für Sie. Der Verkauf ist für Sie provisionsfrei.
                            </div>
</div>
</div>
</div>

<div className="border border-zinc-200 rounded-lg overflow-hidden bg-zinc-50/50 hover:bg-white transition-colors duration-300">
<button className="w-full px-8 py-6 flex items-center justify-between group" onclick="toggleAccordion(this)">
<span className="font-medium text-lg font-serif text-left text-zinc-800">Wie schnell können Sie kaufen?</span>
<iconify-icon className="text-xl text-[#a9b24d] transition-transform duration-300" icon="lucide:plus"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] accordion-content">
<div className="overflow-hidden">
<div className="px-8 pb-8 pt-0 text-zinc-500 text-sm leading-relaxed max-w-2xl">
                                Da wir über eine gesicherte Finanzierung verfügen, können wir in der Regel innerhalb von 2-4 Wochen nach Einigung den Notartermin wahrnehmen.
                            </div>
</div>
</div>
</div>

<div className="border border-zinc-200 rounded-lg overflow-hidden bg-zinc-50/50 hover:bg-white transition-colors duration-300">
<button className="w-full px-8 py-6 flex items-center justify-between group" onclick="toggleAccordion(this)">
<span className="font-medium text-lg font-serif text-left text-zinc-800">Kaufen Sie auch sanierungsbedürftige Objekte?</span>
<iconify-icon className="text-xl text-[#a9b24d] transition-transform duration-300" icon="lucide:plus"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] accordion-content">
<div className="overflow-hidden">
<div className="px-8 pb-8 pt-0 text-zinc-500 text-sm leading-relaxed max-w-2xl">
                                Ja, absolut. Wir sind spezialisiert auf die Entwicklung von Immobilien und kaufen auch Objekte mit Instandhaltungsstau oder Leerstand.
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col px-6 lg:px-12 py-32 pb-48 lg:pb-64 text-zinc-900 text-center bg-white z-20 relative items-center border-t border-zinc-100">
<h2 className="text-4xl lg:text-5xl mb-6 font-serif font-medium tracking-tight">Kontaktieren Sie uns</h2>
<p className="text-zinc-500 text-base max-w-lg mb-12 leading-relaxed">Senden Sie uns die Eckdaten Ihrer Immobilie. Wir melden uns umgehend bei Ihnen.</p>
<div className="w-full max-w-md flex flex-col sm:flex-row gap-4">
<div className="relative flex-1 group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-400 group-focus-within:text-[#a9b24d] transition-colors" icon="lucide:mail" strokeWidth="1.5"></iconify-icon>
</div>
<input className="w-full pl-11 pr-4 py-3.5 rounded-md border border-zinc-200 bg-zinc-50 text-sm focus:outline-none focus:ring-1 focus:ring-[#a9b24d] focus:border-[#a9b24d] transition-all placeholder:text-zinc-400" placeholder="Ihre E-Mail Adresse" type="email"/>
</div>
<button className="bg-[#a9b24d] text-white px-8 py-3.5 rounded-md text-sm font-medium hover:bg-[#9ba346] transition-colors shadow-lg shadow-[#a9b24d]/20">
                Anfragen
            </button>
</div>
<div className="flex items-center gap-3 mt-10 opacity-70">
<span className="text-xs text-zinc-400 font-medium tracking-wide">Persönliche Betreuung durch unser Team</span>
</div>
</section>

<div className="bg-[#0A0A0B] relative">

<div className="relative z-30 mx-4 lg:mx-auto max-w-6xl transform -translate-y-24">
<div className="bg-[#18181B] rounded-[2rem] p-10 lg:p-20 overflow-hidden relative shadow-2xl border border-white/5">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
<div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#a9b24d]/10 to-transparent opacity-50"></div>
<div className="relative z-10 max-w-xl">
<h3 className="text-4xl lg:text-5xl text-white mb-6 leading-tight font-serif font-medium tracking-tight">
                        Kontakt
                    </h3>
<p className="text-zinc-400 text-base lg:text-lg mb-10 font-light">
                        Lassen Sie uns über Ihre Immobilie sprechen.
                    </p>
<button className="bg-white text-zinc-900 px-8 py-4 rounded-md text-sm font-semibold hover:bg-[#a9b24d] hover:text-white transition-all shadow-xl">
                        Unverbindliches Angebot anfordern
                    </button>
</div>
</div>
</div>

<footer className="pt-12 lg:pt-0 pb-16 px-6 lg:px-12 text-zinc-400">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-16 mb-24">

<div className="lg:w-1/3">
<div className="flex items-center gap-3 mb-8">
<iconify-icon className="text-xl text-[#a9b24d]" icon="lucide:building-2" strokeWidth="1.5"></iconify-icon>
<span className="font-serif text-xl font-medium text-white">Hendrik Grau</span>
</div>
<div className="space-y-4 text-sm font-light">
<div className="flex justify-between max-w-[240px] border-b border-white/5 pb-2">
<span className="text-zinc-500">Telefon</span>
<span className="text-zinc-300">040 - 123 456 789</span>
</div>
<div className="flex justify-between max-w-[240px] border-b border-white/5 pb-2">
<span className="text-zinc-500">E-Mail</span>
<span className="text-zinc-300">kontakt@hendrikgrau.de</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24 lg:flex-1">
<div>
<h4 className="text-white font-medium text-sm mb-6 uppercase tracking-widest text-[10px] opacity-70">Links</h4>
<ul className="space-y-4 text-sm font-light">
<li><a className="hover:text-[#a9b24d] transition-colors" href="#">Ankaufsprofil</a></li>
<li><a className="hover:text-[#a9b24d] transition-colors" href="#">Referenzen</a></li>
<li><a className="hover:text-[#a9b24d] transition-colors" href="#">Über mich</a></li>
<li><a className="hover:text-[#a9b24d] transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-6 uppercase tracking-widest text-[10px] opacity-70">Rechtliches</h4>
<ul className="space-y-4 text-sm font-light">
<li><a className="hover:text-[#a9b24d] transition-colors" href="#">Impressum</a></li>
<li><a className="hover:text-[#a9b24d] transition-colors" href="#">Datenschutz</a></li>
<li><a className="hover:text-[#a9b24d] transition-colors" href="#">Cookies</a></li>
</ul>
</div>
</div>
</div>

<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-zinc-600">
<p>© 2024 Hendrik Grau. Alle Rechte vorbehalten.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Xing</a>
</div>
</div>
</footer>
</div>


    </>
  );
}
