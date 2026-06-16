import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();
            
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

            const menuBtn = document.getElementById('menu-btn');
            const closeMenuBtn = document.getElementById('close-menu');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');

            function toggleMenu() {
                const isOpen = !mobileMenu.classList.contains('translate-x-full');
                if (isOpen) {
                    mobileMenu.classList.add('translate-x-full');
                    document.body.classList.remove('overflow-hidden');
                } else {
                    mobileMenu.classList.remove('translate-x-full');
                    document.body.classList.add('overflow-hidden');
                }
            }

            menuBtn.addEventListener('click', toggleMenu);
            closeMenuBtn.addEventListener('click', toggleMenu);
            mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

            document.querySelectorAll('.faq-item button').forEach(button => {
                button.addEventListener('click', () => {
                    const content = button.nextElementSibling;
                    const icon = button.querySelector('i');
                    const isOpen = content.classList.contains('open');

                    document.querySelectorAll('.accordion-content').forEach(c => {
                        c.style.maxHeight = null;
                        c.classList.remove('open');
                    });
                    document.querySelectorAll('.faq-item i').forEach(i => {
                        i.style.transform = 'rotate(0deg)';
                    });

                    if (!isOpen) {
                        content.classList.add('open');
                        content.style.maxHeight = content.scrollHeight + "px";
                        icon.style.transform = 'rotate(180deg)';
                    }
                });
            });

            const fileInput = document.getElementById('file-upload');
            const fileNameDisplay = document.getElementById('file-name');
            if (fileInput) {
                fileInput.addEventListener('change', (e) => {
                    if (e.target.files.length > 0) {
                        const count = e.target.files.length;
                        fileNameDisplay.textContent = `Wybrano plików: ${count}`;
                        fileNameDisplay.classList.add('text-[#ff751f]');
                    } else {
                        fileNameDisplay.textContent = 'Maks. 20 MB (PDF, JPG, DXF)';
                        fileNameDisplay.classList.remove('text-[#ff751f]');
                    }
                });
            }

            document.getElementById('contactForm').addEventListener('submit', (e) => {
                e.preventDefault();
                const btn = e.target.querySelector('button');
                const originalText = btn.innerText;
                
                btn.innerText = 'Wysłano!';
                btn.classList.add('bg-green-600');
                btn.classList.remove('bg-[#ff751f]', 'hover:bg-[#e66a1c]');
                
                setTimeout(() => {
                    e.target.reset();
                    if(fileNameDisplay) {
                        fileNameDisplay.textContent = 'Maks. 20 MB (PDF, JPG, DXF)';
                        fileNameDisplay.classList.remove('text-[#ff751f]');
                    }
                    btn.innerText = originalText;
                    btn.classList.remove('bg-green-600');
                    btn.classList.add('bg-[#ff751f]', 'hover:bg-[#e66a1c]');
                }, 3000);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<nav className="fixed top-0 left-0 w-full bg-[#1c2f3c]/90 backdrop-blur-md z-50 border-b border-white/10 h-16 transition-all duration-300">
<div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<span className="text-xl md:text-2xl font-medium text-white tracking-tight">Projektant<span className="text-[#ff751f]">24</span></span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-base font-normal text-white/80 hover:text-[#ff751f] transition-colors" href="#cennik">Cennik</a>
<a className="text-base font-normal text-white/80 hover:text-[#ff751f] transition-colors" href="#co-dostajesz">Oferta</a>
<a className="text-base font-normal text-white/80 hover:text-[#ff751f] transition-colors" href="#jak-to-dziala">Proces</a>
<a className="text-base font-normal text-white/80 hover:text-[#ff751f] transition-colors" href="#faq">FAQ</a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="hover:bg-[#e66a1c] transition-all text-sm font-medium text-white bg-[#ff751f] rounded-lg pt-2.5 pr-6 pb-2.5 pl-6 shadow-[0_2px_10px_rgba(255,117,31,0.2)]" href="#kontakt">Wycena projektu</a>
</div>
<button className="md:hidden text-white p-2" id="menu-btn">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
<div className="fixed inset-0 bg-[#1c2f3c] z-50 transform translate-x-full transition-transform duration-300 flex flex-col md:hidden" id="mobile-menu">
<div className="p-6 flex justify-end border-b border-white/10">
<button className="text-white p-2" id="close-menu">
<i className="w-8 h-8" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<div className="flex flex-col items-center gap-8 pt-10 text-xl font-normal">
<a className="mobile-link text-white hover:text-[#ff751f]" href="#cennik">Cennik</a>
<a className="mobile-link text-white hover:text-[#ff751f]" href="#co-dostajesz">Oferta</a>
<a className="mobile-link text-white hover:text-[#ff751f]" href="#jak-to-dziala">Proces</a>
<a className="mobile-link text-white hover:text-[#ff751f]" href="#faq">FAQ</a>
<a className="mobile-link text-[#ff751f]" href="#kontakt">Zamów projekt</a>
</div>
</div>
</nav>
<section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden border-b border-white/10">
<div className="absolute inset-0 bg-grid z-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff751f]/5 blur-[120px] rounded-full z-0 pointer-events-none"></div>
<div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
<div className="flex flex-col items-center lg:items-end justify-center reveal w-full active">
<div className="w-full max-w-[500px] aspect-[4/3] relative mb-12 flex justify-center items-center">
<i className="w-48 h-48 md:w-64 md:h-64 text-white/10" data-lucide="cuboid" strokeWidth="0.5"></i>
<div className="absolute inset-0 border border-white/10 border-dashed rounded-xl pointer-events-none"></div>
<div className="absolute bottom-4 right-4 text-xs text-white/20 uppercase tracking-widest font-light">Rzut 3D</div>
</div>
<div className="text-center lg:text-left w-full max-w-[500px]">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-2">
                            Projektant<span className="text-[#ff751f]">24</span>
</h1>
<p className="text-lg md:text-xl font-light text-white uppercase tracking-[0.15em]">
                            Dokumentacja dla stolarzy
                        </p>
</div>
</div>
<div className="flex flex-col justify-center gap-8 reveal lg:pl-16 active" style={{transitionDelay: '200ms'}}>
<div className="flex items-center gap-5 md:gap-8">
<svg className="w-10 h-10 md:w-14 md:h-14 text-[#ff751f] fill-current shrink-0" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 11h10V8l6 4-6 4v-3H4z"></path></svg>
<span className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-white">Rzuty techniczne i formatki</span>
</div>
<div className="flex items-center gap-5 md:gap-8">
<svg className="w-10 h-10 md:w-14 md:h-14 text-[#ff751f] fill-current shrink-0" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 11h10V8l6 4-6 4v-3H4z"></path></svg>
<span className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-white">Pliki DXF na CNC</span>
</div>
<div className="flex items-center gap-5 md:gap-8">
<svg className="w-10 h-10 md:w-14 md:h-14 text-[#ff751f] fill-current shrink-0" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 11h10V8l6 4-6 4v-3H4z"></path></svg>
<span className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-white">Projektuje stolarz-praktyk</span>
</div>
<div className="flex items-center gap-5 md:gap-8">
<svg className="w-10 h-10 md:w-14 md:h-14 text-[#ff751f] fill-current shrink-0" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 11h10V8l6 4-6 4v-3H4z"></path></svg>
<span className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-white">Express 48H!</span>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-[#182a36] border-b border-white/10" id="cennik">
<div className="max-w-[1200px] mx-auto px-6">
<div className="mb-16 text-center reveal">
<h2 className="text-4xl font-medium text-white tracking-tight mb-4">Przejrzysty Cennik</h2>
<p className="text-lg text-white/60 font-light">Płacisz tylko za metry bieżące zabudowy. Bez ukrytych kosztów.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-[#223847] p-8 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 group reveal">
<div className="w-12 h-12 bg-[#1c2f3c] rounded-lg border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-[#ff751f] transition-colors">
<i className="w-6 h-6" data-lucide="box" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Mała Kuchnia</h3>
<p className="text-base text-white/60 mb-6 font-light">Do 4 metrów bieżących</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-5xl font-medium text-white tracking-tight">400 zł</span>
<span className="text-sm text-white/60">netto</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-base text-white/80 font-light">
<i className="w-5 h-5 text-[#ff751f] shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
                            Dokumentacja techniczna
                        </li>
<li className="flex items-start gap-3 text-base text-white/80 font-light">
<i className="w-5 h-5 text-[#ff751f] shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
                            Rozpiska formatek
                        </li>
</ul>
<a className="block w-full py-3 text-center text-base font-normal border border-white/20 text-white rounded-lg hover:bg-white hover:text-[#1c2f3c] transition-all" href="#kontakt">Wybieram</a>
</div>
<div className="bg-[#223847] p-8 rounded-xl border border-[#ff751f] shadow-[0_0_30px_rgba(255,117,31,0.1)] relative group reveal" style={{transitionDelay: '100ms'}}>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ff751f] text-white text-xs font-medium px-4 py-1.5 rounded-full uppercase tracking-widest">Najczęściej wybierane</div>
<div className="w-12 h-12 bg-[#ff751f]/10 rounded-lg border border-[#ff751f]/20 flex items-center justify-center mb-6 text-[#ff751f]">
<i className="w-6 h-6" data-lucide="home" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Średnia Kuchnia</h3>
<p className="text-base text-white/60 mb-6 font-light">Około 5-6 metrów bieżących</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-5xl font-medium text-white tracking-tight">100 zł</span>
<span className="text-sm text-white/60">netto / mb</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-base text-white/80 font-light">
<i className="w-5 h-5 text-[#ff751f] shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
                            Pełna dokumentacja
                        </li>
<li className="flex items-start gap-3 text-base text-white/80 font-light">
<i className="w-5 h-5 text-[#ff751f] shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
                            Lista materiałowa
                        </li>
</ul>
<a className="block w-full py-3 text-center text-base font-normal bg-[#ff751f] text-white rounded-lg hover:bg-[#e66a1c] transition-all" href="#kontakt">Wybieram</a>
</div>
<div className="bg-[#223847] p-8 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 group reveal" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 bg-[#1c2f3c] rounded-lg border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-[#ff751f] transition-colors">
<i className="w-6 h-6" data-lucide="building" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Duże Projekty</h3>
<p className="text-base text-white/60 mb-6 font-light">Powyżej 10 metrów</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl md:text-5xl font-medium text-white tracking-tight">Indywidualnie</span>
</div>
<ul className="space-y-4 mb-8 mt-[46px]">
<li className="flex items-start gap-3 text-base text-white/80 font-light">
<i className="w-5 h-5 text-[#ff751f] shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
                            Priorytetowa realizacja
                        </li>
<li className="flex items-start gap-3 text-base text-white/80 font-light">
<i className="w-5 h-5 text-[#ff751f] shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
                            Dedykowane wsparcie
                        </li>
</ul>
<a className="block w-full py-3 text-center text-base font-normal border border-white/20 text-white rounded-lg hover:bg-white hover:text-[#1c2f3c] transition-all" href="#kontakt">Wybieram</a>
</div>
</div>
</div>
</section>
<section className="py-24 bg-[#1c2f3c] relative overflow-hidden" id="co-dostajesz">
<div className="max-w-[1200px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-4xl font-medium text-white tracking-tight mb-6">Wszystko, czego potrzebujesz na warsztacie</h2>
<p className="text-lg text-white/80 font-light leading-relaxed mb-10">
                        Moje projekty są tworzone przez praktyków dla praktyków. Otrzymujesz pliki, które możesz od razu wysłać na piłę lub CNC.
                    </p>
<div className="space-y-8">
<div className="flex gap-5">
<div className="w-12 h-12 rounded-full bg-[#ff751f]/10 text-[#ff751f] flex items-center justify-center shrink-0 border border-[#ff751f]/20">
<i className="w-6 h-6" data-lucide="map" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Rzuty Techniczne 2D</h3>
<p className="text-base text-white/60 font-light">Precyzyjne wymiarowanie, przekroje szafek, widoki z góry. Wszystko czytelne i klarowne.</p>
</div>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 rounded-full bg-[#ff751f]/10 text-[#ff751f] flex items-center justify-center shrink-0 border border-[#ff751f]/20">
<i className="w-6 h-6" data-lucide="list-checks" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Lista Formatek (XLS/PDF)</h3>
<p className="text-base text-white/60 font-light">Gotowa lista do rozkroju. Korpusy, fronty, plecy – z podziałem na materiały i okleiny.</p>
</div>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 rounded-full bg-[#ff751f]/10 text-[#ff751f] flex items-center justify-center shrink-0 border border-[#ff751f]/20">
<i className="w-6 h-6" data-lucide="file-output" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Pliki Produkcyjne</h3>
<p className="text-base text-white/60 font-light">DXF na CNC oraz pliki kompatybilne z popularnym oprogramowaniem do optymalizacji.</p>
</div>
</div>
</div>
</div>
<div className="relative h-[500px] bg-[#223847] rounded-2xl border border-white/10 p-8 flex flex-col justify-center items-center shadow-inner reveal">
<div className="absolute inset-0 bg-grid opacity-20 rounded-2xl pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 aspect-[4/3] bg-[#1c2f3c] rounded-lg shadow-2xl border border-white/10 p-5 z-10">
<div className="w-full h-5 bg-white/5 rounded mb-5"></div>
<div className="w-2/3 h-5 bg-white/5 rounded mb-8"></div>
<div className="grid grid-cols-3 gap-3">
<div className="h-28 bg-[#223847] border border-white/5 rounded"></div>
<div className="h-28 bg-[#223847] border border-white/5 rounded"></div>
<div className="h-28 bg-[#223847] border border-white/5 rounded"></div>
</div>
<div className="absolute -right-4 -bottom-4 bg-[#ff751f] text-white text-sm px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 font-medium">
<i className="w-5 h-5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                            Gotowe do druku
                        </div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-[60%] -translate-y-[40%] w-3/4 aspect-[4/3] bg-[#223847] rounded-lg border border-white/5 -z-0 opacity-40 scale-95"></div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-[#182a36] border-y border-white/10" id="jak-to-dziala">
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl font-medium text-white tracking-tight mb-4">Jak wygląda współpraca?</h2>
</div>
<div className="relative">
<div className="hidden md:block absolute top-[28px] left-0 right-0 h-px bg-white/10 z-0 mx-16"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
<div className="group reveal">
<div className="w-14 h-14 bg-[#223847] border border-white/10 rounded-xl flex items-center justify-center text-white text-xl font-medium mb-6 group-hover:border-[#ff751f] group-hover:text-[#ff751f] transition-colors relative z-10 mx-auto md:mx-0">1</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3 text-center md:text-left">Prześlij wymiary</h3>
<p className="text-base text-white/60 font-light leading-relaxed text-center md:text-left">Wymiary pomieszczenia, inspiracje lub szkic odręczny. Im więcej danych, tym lepiej.</p>
</div>
<div className="group reveal" style={{transitionDelay: '100ms'}}>
<div className="w-14 h-14 bg-[#223847] border border-white/10 rounded-xl flex items-center justify-center text-white text-xl font-medium mb-6 group-hover:border-[#ff751f] group-hover:text-[#ff751f] transition-colors relative z-10 mx-auto md:mx-0">2</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3 text-center md:text-left">Analiza i wycena</h3>
<p className="text-base text-white/60 font-light leading-relaxed text-center md:text-left">W ciągu 24h otrzymujesz potwierdzenie ceny. Po akceptacji przystępuję do pracy.</p>
</div>
<div className="group reveal" style={{transitionDelay: '200ms'}}>
<div className="w-14 h-14 bg-[#223847] border border-white/10 rounded-xl flex items-center justify-center text-white text-xl font-medium mb-6 group-hover:border-[#ff751f] group-hover:text-[#ff751f] transition-colors relative z-10 mx-auto md:mx-0">3</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3 text-center md:text-left">Projekt i korekty</h3>
<p className="text-base text-white/60 font-light leading-relaxed text-center md:text-left">Wysyłam projekt wstępny. To czas na Twoje uwagi i jedną rundę poprawek.</p>
</div>
<div className="group reveal" style={{transitionDelay: '300ms'}}>
<div className="w-14 h-14 bg-[#ff751f] border border-[#ff751f] rounded-xl flex items-center justify-center text-white text-xl font-medium mb-6 shadow-[0_0_20px_rgba(255,117,31,0.2)] relative z-10 mx-auto md:mx-0">4</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3 text-center md:text-left">Gotowe pliki</h3>
<p className="text-base text-white/60 font-light leading-relaxed text-center md:text-left">Odbierasz komplet dokumentacji na maila. Możesz zaczynać produkcję.</p>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-[#1c2f3c]" id="faq">
<div className="max-w-[800px] mx-auto px-6">
<h2 className="text-4xl font-medium text-white tracking-tight text-center mb-12 reveal">Najczęstsze pytania</h2>
<div className="space-y-4">
<div className="border border-white/10 rounded-lg overflow-hidden reveal faq-item bg-[#223847]">
<button className="w-full flex items-center justify-between p-6 text-left hover:bg-[#284153] transition-colors">
<span className="text-lg font-normal text-white">Jak liczysz metry bieżące kuchni?</span>
<i className="w-5 h-5 text-white/40 transition-transform duration-300 shrink-0" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="accordion-content bg-[#1c2f3c] border-t border-white/10">
<div className="p-6 text-base text-white/70 font-light leading-relaxed">
                            Sumuję długość szafek dolnych i wysokich. Szafki górne są wliczone w cenę metra, chyba że występują samodzielnie. Wyspy liczymy osobno wg długości.
                        </div>
</div>
</div>
<div className="border border-white/10 rounded-lg overflow-hidden reveal faq-item bg-[#223847]">
<button className="w-full flex items-center justify-between p-6 text-left hover:bg-[#284153] transition-colors">
<span className="text-lg font-normal text-white">W jakim formacie dostanę pliki?</span>
<i className="w-5 h-5 text-white/40 transition-transform duration-300 shrink-0" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="accordion-content bg-[#1c2f3c] border-t border-white/10">
<div className="p-6 text-base text-white/70 font-light leading-relaxed">
                            Standardowo jest to PDF z rysunkami technicznymi oraz Excel/PDF z listą formatek. Na życzenie generuję pliki DXF pod CNC (kompatybilne z większością maszyn).
                        </div>
</div>
</div>
<div className="border border-white/10 rounded-lg overflow-hidden reveal faq-item bg-[#223847]">
<button className="w-full flex items-center justify-between p-6 text-left hover:bg-[#284153] transition-colors">
<span className="text-lg font-normal text-white">Ile trwa realizacja?</span>
<i className="w-5 h-5 text-white/40 transition-transform duration-300 shrink-0" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="accordion-content bg-[#1c2f3c] border-t border-white/10">
<div className="p-6 text-base text-white/70 font-light leading-relaxed">
                            Standardowy czas to 5-7 dni roboczych od momentu otrzymania kompletu informacji. W przypadku pilnych zleceń (Express) termin ustalamy indywidualnie.
                        </div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-[#182a36] text-white relative overflow-hidden border-t border-white/10" id="kontakt">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff751f]/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-[1000px] mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
<div className="reveal">
<h2 className="text-4xl font-medium tracking-tight mb-6">Zacznijmy współpracę</h2>
<p className="text-lg text-white/60 font-light mb-10 leading-relaxed">
                        Wypełnij formularz, aby otrzymać darmową wycenę Twojego projektu. Odpisuję zazwyczaj w ciągu kilku godzin.
                    </p>
<div className="space-y-6">
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-lg bg-[#223847] border border-white/10 flex items-center justify-center">
<i className="w-5 h-5 text-[#ff751f]" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<span className="text-base font-light">kontakt@projektant24.pl</span>
</div>
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-lg bg-[#223847] border border-white/10 flex items-center justify-center">
<i className="w-5 h-5 text-[#ff751f]" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<span className="text-base font-light">+48 123 456 789</span>
</div>
</div>
</div>
<form className="bg-[#223847] rounded-2xl p-8 border border-white/10 reveal" id="contactForm" style={{transitionDelay: '100ms'}}>
<div className="grid gap-6">
<div className="">
<label className="block text-sm font-medium text-white/80 mb-2">Imię i nazwisko</label>
<input className="w-full bg-[#1c2f3c] border border-white/10 rounded-lg px-4 py-3.5 text-base text-white placeholder-white/20 focus:outline-none focus:border-[#ff751f] focus:ring-1 focus:ring-[#ff751f] transition-all" placeholder="Jan Kowalski" required="" type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium text-white/80 mb-2">Email</label>
<input className="w-full bg-[#1c2f3c] border border-white/10 rounded-lg px-4 py-3.5 text-base text-white placeholder-white/20 focus:outline-none focus:border-[#ff751f] focus:ring-1 focus:ring-[#ff751f] transition-all" placeholder="jan@firma.pl" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-white/80 mb-2">Opis projektu</label>
<textarea className="w-full bg-[#1c2f3c] border border-white/10 rounded-lg px-4 py-3.5 text-base text-white placeholder-white/20 focus:outline-none focus:border-[#ff751f] focus:ring-1 focus:ring-[#ff751f] transition-all resize-none" placeholder="Np. Kuchnia w kształcie L, ok. 5mb..." required="" rows="4"></textarea>
</div>
<div>
<label className="block text-sm font-medium text-white/80 mb-2">Załączniki (opcjonalnie)</label>
<div className="relative w-full bg-[#1c2f3c] border border-white/10 border-dashed rounded-lg px-4 py-6 text-center hover:border-[#ff751f] hover:bg-[#1c2f3c]/80 transition-all cursor-pointer group">
<input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" id="file-upload" multiple="" type="file"/>
<div className="flex flex-col items-center justify-center gap-2 pointer-events-none">
<iconify-icon className="w-6 h-6 text-white/40 group-hover:text-[#ff751f] transition-colors" icon="solar:upload-linear" style={{fontSize: '24px'}}></iconify-icon>
<span className="text-sm text-white/60 group-hover:text-white transition-colors">Przeciągnij pliki lub <span className="text-[#ff751f]">wybierz z dysku</span></span>
<span className="text-xs text-white/40" id="file-name">Maks. 20 MB (PDF, JPG, DXF)</span>
</div>
</div>
</div>
<button className="w-full bg-[#ff751f] text-white font-medium text-base py-4 rounded-lg hover:bg-[#e66a1c] transition-colors shadow-[0_2px_10px_rgba(255,117,31,0.2)]" type="submit">
                            Wyślij zapytanie
                        </button>
</div>
</form>
</div>
</div>
</section>
<footer className="bg-[#1c2f3c] border-t border-white/10 py-12">
<div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-white">
<span className="text-lg font-medium tracking-tight">Projektant<span className="text-[#ff751f]">24</span></span>
</div>
<p className="text-sm font-light text-white/40">© 2026 Wszelkie prawa zastrzeżone.</p>
</div>
</footer>


    </>
  );
}
