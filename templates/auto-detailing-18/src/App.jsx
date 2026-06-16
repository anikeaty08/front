import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -50px 0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        // Optional: Unobserve to only animate once
                        // observer.unobserve(entry.target); 
                    }
                });
            }, observerOptions);

            const animatedElements = document.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-x-0 border-t-0 border-b border-white/5 anim-nav hover:!transform-none hover:!shadow-none">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter flex items-center gap-1 group" href="#">
<span className="group-hover:text-blue-400 transition-colors duration-300">79</span><span className="text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300">DETAIL</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-zinc-50 hover:-translate-y-0.5 transition-all duration-300" href="#uslugi">Usługi</a>
<a className="hover:text-zinc-50 hover:-translate-y-0.5 transition-all duration-300" href="#o-nas">O Nas</a>
<a className="hover:text-zinc-50 hover:-translate-y-0.5 transition-all duration-300" href="#opinie">Opinie</a>
<a className="hover:text-zinc-50 hover:-translate-y-0.5 transition-all duration-300" href="#kontakt">Kontakt</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium bg-white/10 text-white rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-300 border border-white/5" href="#kontakt">
                Umów wizytę
            </a>
<button className="md:hidden text-zinc-400 hover:text-white hover:rotate-90 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-40 pb-32 md:pt-52 md:pb-40 overflow-hidden flex flex-col items-center justify-center text-center px-6 min-h-[90vh]">
<div className="absolute inset-0 z-0 hero-glow anim-pulse-glow pointer-events-none opacity-70"></div>
<div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
<div className="anim-hero-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel mb-8 border-blue-500/20 text-xs font-medium text-blue-400 hover:!transform-none hover:!shadow-none hover:bg-blue-500/10 cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Premium Auto Detailing Krosno
            </div>
<h1 className="anim-hero-2 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-zinc-50 leading-tight md:leading-tight lg:leading-tight mb-8">
                Bezkompromisowy <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-50 via-zinc-200 to-zinc-500 hover:from-blue-400 hover:to-zinc-200 transition-colors duration-700 cursor-default">Auto Detailing</span>
</h1>
<p className="anim-hero-3 text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                Zadbaj o swoje auto w studio 79DETAIL. Kosmetyki z najwyższej półki, fachowa obsługa i piękny obiekt zaprojektowany z myślą o perfekcji.
            </p>
<div className="anim-hero-4 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="group btn-hover-effect w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium bg-blue-600 text-white rounded-full shadow-lg shadow-blue-500/20" href="#kontakt">
                    Umów wizytę
                    <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform duration-300" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium glass-panel text-white rounded-full" href="#realizacje">
                    Nasze realizacje
                    <iconify-icon className="text-lg group-hover:scale-110 group-hover:text-blue-400 transition-all duration-300" icon="solar:gallery-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="py-12 border-y border-white/5 bg-zinc-900/30 overflow-hidden" id="o-nas">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
<div className="flex-1 space-y-4 animate-on-scroll anim-slide-right">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-100">Pasja, która tworzy perfekcję.</h2>
<p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                        Założone przez Krystiana Kryńskiego, 79DETAIL to miejsce, gdzie motoryzacja spotyka się ze sztuką. Stawiamy na bezkompromisową jakość, profesjonalne podejście i usługi na najwyższym poziomie, dedykowane właścicielom aut premium i sportowych.
                    </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-6 animate-on-scroll anim-slide-left">
<div className="glass-panel rounded-2xl p-6 flex items-center gap-4 w-full sm:w-auto anim-float">
<div className="h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0 border border-amber-500/20 shadow-[0_0_1rem_rgba(245,158,11,0.2)]">
<iconify-icon className="text-2xl" icon="solar:cup-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-xs text-zinc-400 font-medium mb-1">Nagrodzone Studio</p>
<p className="text-sm font-semibold text-zinc-100 tracking-tight">Laureat konkursu Orły Motoryzacji 2025</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="uslugi">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full accent-glow anim-pulse-glow pointer-events-none z-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 animate-on-scroll anim-fade-up">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-50 mb-4">Ekskluzywne usługi</h2>
<p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto">Kompleksowa opieka nad Twoim pojazdem, wykorzystująca innowacyjne technologie i najwyższej klasy kosmetyki.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-panel rounded-3xl p-8 flex flex-col group animate-on-scroll anim-fade-up icon-spin-hover">
<div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-100 mb-6 group-hover:scale-110 group-hover:bg-blue-500/10 group-hover:text-blue-400 group-hover:border-blue-500/20 group-hover:shadow-[0_0_1rem_rgba(37,99,235,0.2)] transition-all duration-500">
<iconify-icon className="text-2xl transition-transform duration-500" icon="solar:layers-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-100 mb-2 group-hover:text-blue-300 transition-colors">Korekta i renowacja lakieru</h3>
<p className="text-sm text-zinc-400 mt-auto leading-relaxed">Przywracamy fabryczny blask, usuwamy zarysowania i niedoskonałości, przygotowując powierzchnię pod zabezpieczenie.</p>
</div>

<div className="glass-panel rounded-3xl p-8 flex flex-col group animate-on-scroll anim-fade-up delay-100 icon-spin-hover">
<div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-100 mb-6 group-hover:scale-110 group-hover:bg-blue-500/10 group-hover:text-blue-400 group-hover:border-blue-500/20 group-hover:shadow-[0_0_1rem_rgba(37,99,235,0.2)] transition-all duration-500">
<iconify-icon className="text-2xl transition-transform duration-500" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-100 mb-2 group-hover:text-blue-300 transition-colors">Powłoki ceramiczne i folie PPF</h3>
<p className="text-sm text-zinc-400 mt-auto leading-relaxed">Trwała ochrona przed uszkodzeniami mechanicznymi, chemią i promieniami UV. Niezrównana hydrofobowość.</p>
</div>

<div className="glass-panel rounded-3xl p-8 flex flex-col group animate-on-scroll anim-fade-up delay-200 icon-spin-hover">
<div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-100 mb-6 group-hover:scale-110 group-hover:bg-blue-500/10 group-hover:text-blue-400 group-hover:border-blue-500/20 group-hover:shadow-[0_0_1rem_rgba(37,99,235,0.2)] transition-all duration-500">
<iconify-icon className="text-2xl transition-transform duration-500" icon="solar:droplets-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-100 mb-2 group-hover:text-blue-300 transition-colors">Kompleksowe mycie detailingowe</h3>
<p className="text-sm text-zinc-400 mt-auto leading-relaxed">Wieloetapowy proces oczyszczania karoserii, felg i nadkoli z najwyższą dbałością o detale i bezpieczeństwo powłok.</p>
</div>

<div className="glass-panel rounded-3xl p-8 flex flex-col group animate-on-scroll anim-fade-up delay-300 icon-spin-hover">
<div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-100 mb-6 group-hover:scale-110 group-hover:bg-blue-500/10 group-hover:text-blue-400 group-hover:border-blue-500/20 group-hover:shadow-[0_0_1rem_rgba(37,99,235,0.2)] transition-all duration-500">
<iconify-icon className="text-2xl transition-transform duration-500" icon="solar:sofa-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-100 mb-2 group-hover:text-blue-300 transition-colors">Pielęgnacja wnętrza i tapicerki</h3>
<p className="text-sm text-zinc-400 mt-auto leading-relaxed">Czyszczenie, impregnacja skór i materiałów. Tworzymy sterylnie czyste i pachnące środowisko wewnątrz pojazdu.</p>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-zinc-950 overflow-hidden" id="opinie">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6 animate-on-scroll anim-slide-right">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-50 mb-4">Zaufanie klientów</h2>
<p className="text-sm md:text-base text-zinc-400 max-w-md">Najlepszą wizytówką naszego studia są opinie osób, które powierzyły nam swoje samochody.</p>
</div>
<div className="flex items-center gap-2 text-zinc-400 text-sm group cursor-default">
                    Ocena <span className="text-zinc-50 font-semibold tracking-tight group-hover:text-amber-400 transition-colors">5.0</span> na podstawie Google Reviews
                </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-3xl flex flex-col h-full animate-on-scroll anim-scale-in hover:-translate-y-2 transition-all duration-500">
<div className="flex text-amber-500 mb-6 gap-1">
<iconify-icon className="text-sm animate-pulse" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm animate-pulse" icon="solar:star-bold" style={{animationDelay: '100ms'}}></iconify-icon>
<iconify-icon className="text-sm animate-pulse" icon="solar:star-bold" style={{animationDelay: '200ms'}}></iconify-icon>
<iconify-icon className="text-sm animate-pulse" icon="solar:star-bold" style={{animationDelay: '300ms'}}></iconify-icon>
<iconify-icon className="text-sm animate-pulse" icon="solar:star-bold" style={{animationDelay: '400ms'}}></iconify-icon>
</div>
<p className="text-sm text-zinc-300 leading-relaxed mb-8 flex-1">"Polecam 79 detail w 100% Oddałem w ręce tej firmy swoje oczko w głowie. Efekt przeszedł moje najśmielsze oczekiwania, pełen profesjonalizm."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-medium text-zinc-300 border border-white/5 group-hover:border-white/20 transition-colors">MB</div>
<div>
<p className="text-sm font-medium text-zinc-100 tracking-tight">Maciek Bee</p>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-3xl flex flex-col h-full animate-on-scroll anim-scale-in delay-100 hover:-translate-y-2 transition-all duration-500">
<div className="flex text-amber-500 mb-6 gap-1">
<iconify-icon className="text-sm animate-pulse" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm animate-pulse" icon="solar:star-bold" style={{animationDelay: '100ms'}}></iconify-icon>
<iconify-icon className="text-sm animate-pulse" icon="solar:star-bold" style={{animationDelay: '200ms'}}></iconify-icon>
<iconify-icon className="text-sm animate-pulse" icon="solar:star-bold" style={{animationDelay: '300ms'}}></iconify-icon>
<iconify-icon className="text-sm animate-pulse" icon="solar:star-bold" style={{animationDelay: '400ms'}}></iconify-icon>
</div>
<p className="text-sm text-zinc-300 leading-relaxed mb-8 flex-1">"Polecam, 11/10, szef pełen profesjonalizm, a efekt końcowy wow. Samochód wygląda jakby wczoraj wyjechał z salonu."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-medium text-zinc-300 border border-white/5 group-hover:border-white/20 transition-colors">KW</div>
<div>
<p className="text-sm font-medium text-zinc-100 tracking-tight">Kamila Wojczekowska</p>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-3xl flex flex-col h-full animate-on-scroll anim-scale-in delay-200 hover:-translate-y-2 transition-all duration-500">
<div className="flex text-amber-500 mb-6 gap-1">
<iconify-icon className="text-sm animate-pulse" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm animate-pulse" icon="solar:star-bold" style={{animationDelay: '100ms'}}></iconify-icon>
<iconify-icon className="text-sm animate-pulse" icon="solar:star-bold" style={{animationDelay: '200ms'}}></iconify-icon>
<iconify-icon className="text-sm animate-pulse" icon="solar:star-bold" style={{animationDelay: '300ms'}}></iconify-icon>
<iconify-icon className="text-sm animate-pulse" icon="solar:star-bold" style={{animationDelay: '400ms'}}></iconify-icon>
</div>
<p className="text-sm text-zinc-300 leading-relaxed mb-8 flex-1">"Bardzo profesjonalne podejście do klienta, zaangażowanie na najwyższym poziomie. Usługa wykonana perfekcyjnie."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-medium text-zinc-300 border border-white/5 group-hover:border-white/20 transition-colors">MJ</div>
<div>
<p className="text-sm font-medium text-zinc-100 tracking-tight">Marcin Jaracz</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-zinc-950 pt-20 pb-10 overflow-hidden" id="kontakt">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6 animate-on-scroll anim-fade-up">
<a className="text-2xl font-semibold tracking-tighter flex items-center gap-1 group" href="#">
<span className="group-hover:text-blue-400 transition-colors duration-300">79</span><span className="text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300">DETAIL</span>
</a>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Ekskluzywne studio auto detailingu w Krośnie. Pasja, precyzja i kosmetyki z najwyższej półki dla Twojego samochodu.
                    </p>
<div className="flex items-center gap-4">
<a className="h-10 w-10 rounded-full glass-panel flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300" href="#">
<iconify-icon className="text-lg" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="h-10 w-10 rounded-full glass-panel flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300" href="#">
<iconify-icon className="text-lg" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="h-10 w-10 rounded-full glass-panel flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300" href="#">
<iconify-icon className="text-lg" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="space-y-6 animate-on-scroll anim-fade-up delay-100">
<h4 className="text-sm font-semibold tracking-tight text-zinc-100">Kontakt</h4>
<ul className="space-y-4">
<li>
<a className="flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-50 hover:translate-x-1 transition-all duration-300 group" href="tel:+48665195000">
<div className="p-2 rounded-lg bg-white/5 group-hover:bg-blue-500/10 transition-colors duration-300 flex items-center justify-center">
<iconify-icon className="text-lg text-zinc-500 group-hover:text-blue-400 transition-colors" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</div>
                                +48 665 195 000
                            </a>
</li>
<li>
<a className="flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-50 hover:translate-x-1 transition-all duration-300 group" href="mailto:79detail@gmail.com">
<div className="p-2 rounded-lg bg-white/5 group-hover:bg-blue-500/10 transition-colors duration-300 flex items-center justify-center">
<iconify-icon className="text-lg text-zinc-500 group-hover:text-blue-400 transition-colors" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
                                79detail@gmail.com
                            </a>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-400 group hover:translate-x-1 transition-transform duration-300 cursor-default">
<div className="p-2 rounded-lg bg-white/5 group-hover:bg-blue-500/10 transition-colors duration-300 flex items-center justify-center">
<iconify-icon className="text-lg text-zinc-500 group-hover:text-blue-400 transition-colors" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="mt-1 group-hover:text-zinc-200 transition-colors duration-300">ul. Podkarpacka 2<br/>38-400 Krosno, Poland</span>
</li>
</ul>
</div>

<div className="space-y-6 animate-on-scroll anim-fade-up delay-200">
<h4 className="text-sm font-semibold tracking-tight text-zinc-100">Nawigacja</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-400 hover:text-blue-400 flex items-center gap-2 group transition-colors" href="#uslugi"><span className="w-0 h-[1px] bg-blue-400 group-hover:w-3 transition-all duration-300"></span> Usługi</a></li>
<li><a className="text-sm text-zinc-400 hover:text-blue-400 flex items-center gap-2 group transition-colors" href="#o-nas"><span className="w-0 h-[1px] bg-blue-400 group-hover:w-3 transition-all duration-300"></span> O Nas</a></li>
<li><a className="text-sm text-zinc-400 hover:text-blue-400 flex items-center gap-2 group transition-colors" href="#opinie"><span className="w-0 h-[1px] bg-blue-400 group-hover:w-3 transition-all duration-300"></span> Opinie</a></li>
<li><a className="text-sm text-zinc-400 hover:text-blue-400 flex items-center gap-2 group transition-colors" href="#"><span className="w-0 h-[1px] bg-blue-400 group-hover:w-3 transition-all duration-300"></span> Regulamin</a></li>
<li><a className="text-sm text-zinc-400 hover:text-blue-400 flex items-center gap-2 group transition-colors" href="#"><span className="w-0 h-[1px] bg-blue-400 group-hover:w-3 transition-all duration-300"></span> Polityka Prywatności</a></li>
</ul>
</div>

<div className="space-y-6 animate-on-scroll anim-fade-up delay-300">
<h4 className="text-sm font-semibold tracking-tight text-zinc-100">Newsletter</h4>
<p className="text-sm text-zinc-400">Bądź na bieżąco z naszymi realizacjami i specjalnymi ofertami.</p>
<form className="flex flex-col gap-3 group">
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-500 group-focus-within:text-blue-400 transition-colors" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 focus:-translate-y-0.5 transition-all duration-300" placeholder="Twój adres e-mail" required="" type="email"/>
</div>
<button className="w-full bg-zinc-100 text-zinc-950 font-medium text-sm rounded-xl py-2.5 hover:bg-blue-500 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300" type="submit">
                            Zapisz się
                        </button>
</form>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 animate-on-scroll anim-fade-up delay-400">
<p className="text-xs text-zinc-500">© 2025 79DETAIL. Wszelkie prawa zastrzeżone.</p>
<div className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors cursor-default">
                    Stworzone z <iconify-icon className="text-blue-500 animate-pulse" icon="solar:heart-bold" strokeWidth="1.5"></iconify-icon> w Krośnie.
                </div>
</div>
</div>
</footer>



    </>
  );
}
