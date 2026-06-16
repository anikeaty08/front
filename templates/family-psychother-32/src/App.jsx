import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', function() {
            const feedUrl = 'https://przemyslawrosa.substack.com/feed';
            const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;
            const container = document.getElementById('rss-container');

            fetch(apiUrl)
                .then(res => res.json())
                .then(data => {
                    if (data.status === 'ok' && data.items.length > 0) {
                        container.innerHTML = '';
                        
                        data.items.slice(0, 3).forEach((item, index) => {
                            const date = new Date(item.pubDate);
                            const monthYear = date.toLocaleDateString('pl-PL', { year: 'numeric', month: 'long' });
                            
                            const imgSrc = item.thumbnail || (item.enclosure && item.enclosure.link);
                            const imgHtml = imgSrc 
                                ? `<img src="${imgSrc}" alt="" class="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">`
                                : `<div class="w-full h-full flex items-center justify-center text-[#5D3F6A]/30"><iconify-icon icon="solar:document-text-linear" width="48"></iconify-icon></div>`;

                            // Alternate rotations for the polaroids
                            const rotation = index === 1 ? 'rotate-2' : (index === 2 ? '-rotate-2' : '-rotate-1');
                            
                            const article = `
                                <article class="polaroid group cursor-pointer ${rotation} hover:rotate-0 transition-transform duration-300" onclick="window.open('${item.link}', '_blank')">
                                    <div class="washi-tape w-16 h-6 -top-3 left-1/2 -translate-x-1/2 -rotate-3 z-20"></div>
                                    <div class="aspect-[4/3] bg-[#5D3F6A]/10 mb-4 border border-[#5D3F6A]/20 flex items-center justify-center relative overflow-hidden">
                                        ${imgHtml}
                                    </div>
                                    <time class="font-accent text-xs text-[#5D3F6A]/60 block mb-2">${monthYear}</time>
                                    <h3 class="font-heading text-xl uppercase tracking-wide text-[#5D3F6A] leading-snug group-hover:text-[#6B8F5B] transition-colors">
                                        ${item.title}
                                    </h3>
                                </article>
                            `;
                            container.insertAdjacentHTML('beforeend', article);
                        });
                    }
                })
                .catch(err => console.error('Błąd RSS:', err));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-8 bottom-0 w-[1px] border-l-2 border-dashed border-[#E2A76F]/20 z-0"></div>
<header className="fixed top-0 left-0 right-0 z-50 bg-[#5D3F6A]/90 backdrop-blur-md border-b border-[#F3E5DC]/10">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between text-sm relative z-10">
<a className="font-heading font-medium tracking-widest uppercase text-[#F3E5DC] flex items-center gap-3 group text-lg" href="#">
<iconify-icon className="text-[#9DC183] transition-transform duration-700 group-hover:rotate-180" height="24" icon="solar:infinity-linear" width="24"></iconify-icon>
<span>Rodzinny Kalejdoskop</span>
</a>
<nav className="hidden lg:flex items-center gap-8 font-heading uppercase tracking-wide text-[#F3E5DC]/80">
<a className="hover:text-[#5EC8D4] transition-colors" href="#o-mnie">Kim jestem</a>
<a className="hover:text-[#5EC8D4] transition-colors" href="#podejscie">Podejście</a>
<a className="hover:text-[#5EC8D4] transition-colors" href="#strefa">Dla Rodziny</a>
<a className="hover:text-[#5EC8D4] transition-colors" href="#wydarzenia">Webinary</a>
</nav>
<div className="hidden lg:flex items-center gap-4">
<a className="font-heading uppercase tracking-wide text-xs text-[#9DC183] border border-[#9DC183]/30 px-4 py-2 rounded-sm hover:bg-[#9DC183]/10 transition-colors flex items-center gap-2" href="https://kompasemocji.pl" rel="noopener noreferrer" target="_blank">
                    Akademia Kompas Emocji <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="bg-[#E2A76F] text-[#5D3F6A] px-6 py-2 rounded-sm font-heading uppercase tracking-wide hover:bg-[#d1965e] transition-colors" href="#kontakt">
                    Kontakt
                </a>
</div>
<button className="lg:hidden text-[#F3E5DC]">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</header>
<main className="flex-grow pt-20 relative z-10">

<section className="relative pt-24 pb-32 px-6">

<svg className="absolute top-20 right-[10%] w-32 h-32 text-[#E2A76F] opacity-20 pointer-events-none" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" viewbox="0 0 100 100">
<path d="M10 50 Q 30 10 50 50 T 90 50"></path>
</svg>
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="relative z-10">
<span className="font-accent text-lg text-[#9DC183] mb-4 block transform -rotate-2">Czujesz, że utknęliście?</span>
<h1 className="font-heading text-5xl md:text-7xl font-medium tracking-wide text-[#F3E5DC] leading-[1.1] mb-8 uppercase relative">
                        Ułóż się z <span className="sketch-underline">emocjami</span><br/>
<span className="text-[#F3E5DC]/60">W Twojej rodzinie nie musi być szaro.</span>

<svg className="absolute -left-12 top-4 w-10 h-10 text-[#5EC8D4] hidden lg:block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 100 100">
<path d="M20 80 Q 50 20 90 50 M 70 30 L 90 50 L 70 70"></path>
</svg>
</h1>
<p className="text-lg md:text-xl text-[#F3E5DC]/80 font-normal leading-relaxed mb-10 max-w-lg">
                        Pomagam dzieciom, młodzieży i rodzicom, żeby stawali się lepsi w <span className="sketch-circle sketch-circle-sage text-[#F3E5DC]">czuciu</span>. Wspieram w budowaniu relacji, w których emocje można wyrażać swobodnie, a granice dają wolność.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-6 relative">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E2A76F] text-[#5D3F6A] px-8 py-4 font-heading uppercase tracking-widest hover:bg-[#d1965e] transition-colors text-base rounded-sm shadow-[4px_4px_0px_0px_rgba(243,229,220,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 duration-200" href="#kontakt">
                            Skontaktuj się
                        </a>
<a className="w-full sm:w-auto font-heading uppercase tracking-widest text-[#5EC8D4] hover:text-[#4BA3AD] flex items-center gap-2 transition-colors" href="#wydarzenia">
                            Zobacz webinary <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>

<svg className="absolute -bottom-10 left-[15%] w-16 h-16 text-[#9DC183] hidden sm:block pointer-events-none" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 100 100">
<path d="M10 90 Q 50 40 80 10 M 50 10 L 80 10 L 80 40"></path>
</svg>
</div>
</div>

<div className="relative h-[500px] hidden md:block">

<div className="absolute top-10 right-10 w-64 h-80 polaroid rotate-3 z-10">
<div className="w-full h-full bg-[#5D3F6A]/10 border border-[#5D3F6A]/20 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-[#5D3F6A]/30" icon="solar:gallery-linear" width="48"></iconify-icon>

</div>
<div className="washi-tape w-24 h-6 -top-3 left-1/2 -translate-x-1/2 -rotate-2"></div>
<p className="font-accent text-sm text-center mt-4 text-[#5D3F6A]">Krzysztof B.</p>

<svg className="absolute -right-8 -bottom-8 w-20 h-20 text-[#E2A76F] opacity-80 pointer-events-none" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" viewbox="0 0 100 100">
<path d="M20 50 C 40 10, 60 90, 80 50 C 90 30, 70 30, 60 50"></path>
</svg>
</div>
<div className="absolute bottom-10 left-0 w-56 p-6 bg-[#F3E5DC]/5 backdrop-blur-sm border border-[#F3E5DC]/20 hand-drawn-border -rotate-6 z-20">
<p className="font-accent text-[#F3E5DC] text-base leading-relaxed">
                            "Dom to nie sala sądowa. Tu się czuje, a nie wyrokuje."
                        </p>
<iconify-icon className="absolute -bottom-4 -right-4 text-[#E2A76F] text-4xl" icon="solar:pen-new-round-linear"></iconify-icon>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border-[1px] border-dashed border-[#9DC183]/40 rounded-full animate-[spin_60s_linear_infinite] z-0"></div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="o-mnie">
<div className="red-thread top-1/2 -translate-y-1/2"></div>
<div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 relative z-10">
<div className="md:col-span-5 md:mt-12">
<div className="polaroid -rotate-2 bg-[#F3E5DC] text-[#5D3F6A] relative">
<div className="washi-tape w-20 h-8 -top-4 -left-4 rotate-12"></div>
<h2 className="font-heading uppercase tracking-widest text-2xl mb-4 border-b-2 border-dashed border-[#5D3F6A]/20 pb-4">O mnie</h2>
<div className="font-serif text-base leading-relaxed space-y-4">
<p>Jestem psychologiem i psychoterapeutą. Moim zawodowym domem jest <span className="sketch-underline sketch-underline-plum">Terapia Skoncentrowana na Emocjach dla młodzieży (EFT-Y) i opiekunków</span>.</p>
<p>Wierzę, że tłumienie emocji i brak wsparcia prowadzą do lęku, depresji i trudnych dynamik domowych.</p>
<p className="font-medium bg-[#9DC183]/20 p-2 hand-drawn-border-sage">Jako terapeuta nie jestem "lepszym dorosłym" dla Twojego dziecka. Jestem wsparciem w świecie memocji dla <span className="sketch-circle sketch-circle-plum">całego systemu</span> rodzinnego.</p>
</div>
</div>
</div>
<div className="md:col-span-7 relative">
<h2 className="font-heading text-4xl tracking-wide text-[#F3E5DC] mb-8 uppercase">Dla kogo i dlaczego?</h2>
<div className="space-y-8 text-[#F3E5DC]/80 text-lg leading-relaxed">
<p>
                            Często jako rodzice czujemy się osamotnieni i zawstydzeni, gdy w domu pojawiają się trudności. To naturalne zjawisko, ukryte za drzwiami wielu domów.
                        </p>
<p>
                            Młodzież zmaga się z niezrozumiałymi, "wielkimi" emocjami, a my gubimy się między potrzebą stawiania granic, a chęcią bycia blisko. Konflikty, brak komunikacji, wycofanie – to nie są dowody na wychowawczą porażkę. To sygnały <span className="sketch-underline sketch-underline-petrol">niezaspokojonych potrzeb</span>.
                        </p>
<div className="flex items-start gap-4 p-6 border border-[#F3E5DC]/20 bg-[#F3E5DC]/5 rounded-sm relative">

<svg className="absolute -top-12 -left-8 w-16 h-16 text-[#E2A76F] hidden md:block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 100 100">
<path d="M10 10 Q 50 80 80 80 M 60 60 L 80 80 L 80 60"></path>
</svg>
<iconify-icon className="text-[#E2A76F] shrink-0" icon="solar:map-arrow-square-linear" width="32"></iconify-icon>
<div>
<h3 className="font-heading uppercase tracking-wider text-xl text-[#F3E5DC] mb-2">Moja rola</h3>
<p className="text-base text-[#F3E5DC]/70">W rodzicach widzę rozwiązanie, a nie problem. Pracuję z dziećmi, młodzieżą, rodzicami, parami rodzicielskimi oraz dorosłymi, aby przywrócić w domu przestrzeń na autentyczność.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-[#6B8F5B] border-y-4 border-[#F3E5DC] shadow-2xl" id="strefa">

<div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] mix-blend-overlay"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 max-w-3xl mx-auto relative">
<span className="font-accent text-[#5D3F6A] text-lg block mb-4">Strefa Rodziny</span>
<h2 className="font-heading text-4xl md:text-5xl tracking-widest text-[#F3E5DC] mb-6 uppercase">Granice, które <span className="sketch-circle sketch-circle-petrol text-[#F3E5DC]">dają wolność</span></h2>
<p className="text-[#F3E5DC]/90 text-lg leading-relaxed font-serif">
                        Wspólna praca nad odbudową relacji. Narzędzia oparte na badaniach, dostosowane do rzeczywistości Twojego domu.
                    </p>
</div>
<div className="grid md:grid-cols-2 gap-12 relative">

<svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 text-[#F3E5DC] opacity-30 z-20 pointer-events-none hidden md:block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 100 100">
<path d="M10 50 Q 30 10 50 50 T 90 50 M 80 40 L 90 50 L 80 60"></path>
</svg>

<div className="bg-[#F3E5DC] text-[#5D3F6A] p-8 md:p-10 relative hand-drawn-border rotate-1 hover:-rotate-1 transition-transform duration-300">
<div className="washi-tape w-24 h-6 -top-3 right-10 rotate-3"></div>
<h3 className="font-heading text-3xl uppercase tracking-wider mb-4">"Narzędzia" dla Rodziców</h3>
<p className="text-base mb-6 font-medium">
                            Trening Umiejętności Skoncentrowany na Emocjach dla Rodziców (Emotion Focused Skill Training).
                        </p>
<ul className="space-y-4 text-sm mb-8 border-l-2 border-dashed border-[#5D3F6A]/30 pl-4 relative">

<svg className="absolute -top-10 -right-4 w-12 h-12 text-[#6B8F5B] opacity-60 hidden md:block pointer-events-none" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 100 100">
<path d="M20 20 Q 80 20 80 80 M 60 70 L 80 80 L 90 60"></path>
</svg>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#6B8F5B] text-lg shrink-0 mt-0.5" icon="solar:pen-linear"></iconify-icon>
<span>Uczymy się czytać i reagować na trudne emocje dziecka.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#6B8F5B] text-lg shrink-0 mt-0.5" icon="solar:pen-linear"></iconify-icon>
<span>Wsparcie przy wyzwaniach ze <span className="sketch-underline sketch-underline-plum">stawianiem granic</span>.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#6B8F5B] text-lg shrink-0 mt-0.5" icon="solar:pen-linear"></iconify-icon>
<span>Odbudowa i naprawa więzi oraz poczucia skuteczności rodzicielskiej.</span>
</li>
</ul>
<p className="font-accent text-sm text-[#5D3F6A]/70">Dla rodzin zmagających się m.in. z depresją, lękiem czy zaburzeniami odżywiania.</p>
</div>

<div className="bg-[#5D3F6A] text-[#F3E5DC] p-8 md:p-10 relative hand-drawn-border -rotate-1 hover:rotate-1 transition-transform duration-300">
<div className="washi-tape w-24 h-6 -top-3 left-10 -rotate-3"></div>
<h3 className="font-heading text-3xl uppercase tracking-wider mb-4 text-[#E2A76F]">EFT dla Młodzieży</h3>
<p className="text-base mb-6 text-[#F3E5DC]/80">
                            Bezpieczna przestrzeń relacyjna dopasowana do indywidualnych potrzeb nastolatka.
                        </p>
<ul className="space-y-4 text-sm mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#E2A76F] text-lg shrink-0 mt-0.5" icon="solar:star-fall-linear"></iconify-icon>
<span className="text-[#F3E5DC]/70">Rozumienie własnych stanów wewnętrznych i <span className="sketch-underline">akceptacja siebie</span>.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#E2A76F] text-lg shrink-0 mt-0.5" icon="solar:star-fall-linear"></iconify-icon>
<span className="text-[#F3E5DC]/70">Budowa wspierających sposobów radzenia sobie z kryzysem.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#E2A76F] text-lg shrink-0 mt-0.5" icon="solar:star-fall-linear"></iconify-icon>
<span className="text-[#F3E5DC]/70">Wzmocnienie poprzez regularne sesje rodzinne.</span>
</li>
</ul>
<p className="font-accent text-sm text-[#9DC183]">#MłodzieżJestTegoWarta</p>
</div>
</div>
</div>
</section>

<section className="border-y border-[#9DC183]/20 bg-[#5D3F6A] relative overflow-hidden">
<div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8Y2lyY2xlIGN4PSI0IiBjeT0iNCIgcj0iMSIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4=')]"></div>
<div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative z-10">
<div>
<h2 className="font-heading uppercase tracking-widest text-2xl text-[#F3E5DC] mb-2">Jesteś psychoterapeutą lub specjalistą?</h2>
<p className="text-[#F3E5DC]/60 text-sm font-serif">
                        Prowadzę <span className="sketch-circle sketch-circle-sage">pogłębione szkolenia</span> i warsztaty z zakresu EFT-Y dla profesjonalistów.
                    </p>
</div>
<a className="shrink-0 inline-flex items-center gap-3 bg-transparent border-2 border-[#5EC8D4] text-[#5EC8D4] px-8 py-3 rounded-sm font-heading uppercase tracking-widest hover:bg-[#5EC8D4] hover:text-[#5D3F6A] transition-all duration-300" href="https://kompasemocji.pl" rel="noopener noreferrer" target="_blank">
                    Akademia Kompas Emocji
                    <iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 px-6 relative" id="wydarzenia">
<div className="max-w-4xl mx-auto relative z-10">
<div className="text-center mb-16 relative">
<span className="font-accent text-[#E2A76F] text-lg block mb-4 transform rotate-1">Dołącz do nas na żywo</span>
<h2 className="font-heading text-4xl md:text-5xl uppercase tracking-widest text-[#F3E5DC] mb-4">Webinary i Warsztaty</h2>
<p className="text-[#F3E5DC]/60 text-base">Zapisz się na nadchodzące spotkania i zdobądź konkretną wiedzę.</p>

<svg className="absolute -bottom-12 right-1/4 w-12 h-12 text-[#5EC8D4] hidden md:block pointer-events-none" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 100 100">
<path d="M50 10 L 50 80 M 30 60 L 50 80 L 70 60"></path>
</svg>
</div>

<div className="w-full flex justify-center mb-16 relative">
<div className="washi-tape w-32 h-8 -top-4 right-10 rotate-6 z-20"></div>
<div className="bg-[#F3E5DC] p-2 md:p-4 pb-8 shadow-2xl rotate-1 w-full max-w-[720px] hand-drawn-border">
<iframe allowfullscreen="" className="border border-[#5D3F6A]/10 bg-white" frameborder="0" height="560" src="https://luma.com/embed/calendar/cal-bLL1CBs6XNZq2um/events?lt=light" title="Kalendarz wydarzeń i webinarów Luma" width="100%"></iframe>
</div>
</div>

<div className="relative bg-[#5D3F6A] border-2 border-dashed border-[#E2A76F]/50 p-8 md:p-12 max-w-[720px] mx-auto text-center z-10">
<iconify-icon className="text-[#E2A76F] mb-4" icon="solar:letter-linear" width="48"></iconify-icon>
<h3 className="font-heading text-3xl uppercase tracking-wide text-[#F3E5DC] mb-3">Zapisz się na Newsletter</h3>
<p className="text-sm text-[#F3E5DC]/70 mb-8 font-serif">Otrzymuj informacje o nowych webinarach, grupach i artykułach. Żadnego spamu, tylko wiedza.</p>
<form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
<input className="flex-grow px-4 py-3 bg-transparent border-b-2 border-[#F3E5DC]/30 text-base text-[#F3E5DC] focus:outline-none focus:border-[#E2A76F] transition-colors placeholder:text-[#F3E5DC]/30 font-serif" placeholder="Twój adres email" type="email"/>
<button className="bg-[#E2A76F] text-[#5D3F6A] px-8 py-3 font-heading uppercase tracking-widest hover:bg-[#d1965e] transition-colors shadow-[3px_3px_0px_0px_rgba(243,229,220,0.3)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 duration-200" type="button">Zapisz się</button>
</form>
</div>
</div>
</section>

<section className="py-24 bg-[#5D3F6A]/50 border-t border-[#F3E5DC]/10 px-6 relative" id="czytelnia">
<div className="max-w-6xl mx-auto relative z-10">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
<h2 className="font-heading text-4xl uppercase tracking-widest text-[#F3E5DC]">Czytelnia / Notatnik</h2>
<a className="link-petrol font-heading uppercase tracking-wider text-sm flex items-center gap-2" href="https://przemyslawrosa.substack.com/" rel="noopener noreferrer" target="_blank">
                        Wszystkie wpisy <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" id="rss-container">

<article className="polaroid group cursor-pointer -rotate-1 hover:rotate-0 transition-transform">
<div className="aspect-[4/3] bg-[#5D3F6A]/10 mb-4 border border-[#5D3F6A]/20 flex items-center justify-center relative overflow-hidden">
<iconify-icon className="text-[#5D3F6A]/30" icon="solar:document-text-linear" width="48"></iconify-icon>
</div>
<time className="font-accent text-xs text-[#5D3F6A]/60 block mb-2">Ładowanie...</time>
<h3 className="font-heading text-xl uppercase tracking-wide text-[#5D3F6A] leading-snug">Pobieranie artykułów...</h3>
</article>
<article className="polaroid group cursor-pointer rotate-1 hover:rotate-0 transition-transform hidden sm:block">
<div className="aspect-[4/3] bg-[#5D3F6A]/10 mb-4 border border-[#5D3F6A]/20 flex items-center justify-center relative overflow-hidden">
<iconify-icon className="text-[#5D3F6A]/30" icon="solar:document-text-linear" width="48"></iconify-icon>
</div>
<time className="font-accent text-xs text-[#5D3F6A]/60 block mb-2">Ładowanie...</time>
<h3 className="font-heading text-xl uppercase tracking-wide text-[#5D3F6A] leading-snug">Pobieranie artykułów...</h3>
</article>
<article className="polaroid group cursor-pointer -rotate-2 hover:rotate-0 transition-transform hidden lg:block">
<div className="aspect-[4/3] bg-[#5D3F6A]/10 mb-4 border border-[#5D3F6A]/20 flex items-center justify-center relative overflow-hidden">
<iconify-icon className="text-[#5D3F6A]/30" icon="solar:document-text-linear" width="48"></iconify-icon>
</div>
<time className="font-accent text-xs text-[#5D3F6A]/60 block mb-2">Ładowanie...</time>
<h3 className="font-heading text-xl uppercase tracking-wide text-[#5D3F6A] leading-snug">Pobieranie artykułów...</h3>
</article>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-[#F3E5DC]/10 relative" id="kontakt">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
<div>
<span className="font-accent text-[#9DC183] text-lg block mb-4">Porozmawiajmy</span>
<h2 className="font-heading text-4xl md:text-5xl uppercase tracking-widest text-[#F3E5DC] mb-6">Kontakt</h2>
<p className="text-[#F3E5DC]/70 text-base mb-12 font-serif leading-relaxed">
                        Niezależnie od tego, czy szukasz wsparcia dla siebie, swojego nastolatka, czy całej rodziny – zapraszam do kontaktu. Umówmy się na <span className="sketch-underline sketch-underline-petrol">spotkanie</span>.
                    </p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<iconify-icon className="text-[#E2A76F] mt-1" icon="solar:phone-linear" width="28"></iconify-icon>
<div>
<p className="font-accent text-xs text-[#F3E5DC]/50 mb-1">Telefon</p>
<a className="font-heading text-2xl tracking-wide text-[#F3E5DC] hover:text-[#E2A76F] transition-colors" href="tel:+48668509548">+48 668 509 548</a>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#E2A76F] mt-1" icon="solar:letter-linear" width="28"></iconify-icon>
<div>
<p className="font-accent text-xs text-[#F3E5DC]/50 mb-1">Email</p>
<a className="link-petrol font-serif text-lg break-all" href="mailto:krzysiekblazejewski@gmail.com">krzysiekblazejewski@gmail.com</a>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="washi-tape w-24 h-6 -top-3 -right-3 rotate-12 z-20"></div>

<svg className="absolute -left-12 -top-4 w-20 h-20 text-[#9DC183] opacity-60 z-30 pointer-events-none hidden md:block" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" viewbox="0 0 100 100">
<path d="M50 20 C 80 20, 80 80, 50 80 C 20 80, 20 30, 50 30 C 70 30, 70 70, 50 70 C 40 70, 40 50, 50 50"></path>
</svg>
<div className="bg-[#F3E5DC]/5 border border-[#F3E5DC]/20 p-8 md:p-10 hand-drawn-border backdrop-blur-sm relative z-10">
<form className="space-y-6">
<div>
<label className="block font-accent text-xs text-[#F3E5DC]/60 mb-2" htmlFor="name">Imię i nazwisko</label>
<input className="w-full bg-transparent border-b border-[#F3E5DC]/30 py-2 text-base text-[#F3E5DC] focus:outline-none focus:border-[#5EC8D4] transition-colors font-serif" id="name" required="" type="text"/>
</div>
<div>
<label className="block font-accent text-xs text-[#F3E5DC]/60 mb-2" htmlFor="email">Adres email</label>
<input className="w-full bg-transparent border-b border-[#F3E5DC]/30 py-2 text-base text-[#F3E5DC] focus:outline-none focus:border-[#5EC8D4] transition-colors font-serif" id="email" required="" type="email"/>
</div>
<div>
<label className="block font-accent text-xs text-[#F3E5DC]/60 mb-2" htmlFor="message">Wiadomość</label>
<textarea className="w-full bg-transparent border-b border-[#F3E5DC]/30 py-2 text-base text-[#F3E5DC] focus:outline-none focus:border-[#5EC8D4] transition-colors font-serif resize-none" id="message" required="" rows="4"></textarea>
</div>
<label className="flex items-start gap-3 cursor-pointer group pt-4">
<div className="relative flex items-center justify-center w-5 h-5 mt-0.5 shrink-0">
<input className="peer appearance-none w-5 h-5 border border-[#F3E5DC]/40 bg-transparent checked:bg-[#E2A76F] checked:border-[#E2A76F] transition-colors cursor-pointer rounded-sm" required="" type="checkbox"/>
<iconify-icon className="absolute text-[#5D3F6A] opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-xs text-[#F3E5DC]/60 font-serif leading-relaxed">Wyrażam zgodę na przetwarzanie moich danych osobowych. Znam treść polityki prywatności.</span>
</label>
<button className="w-full bg-[#E2A76F] text-[#5D3F6A] py-4 font-heading uppercase tracking-widest hover:bg-[#d1965e] transition-colors mt-6 shadow-[3px_3px_0px_0px_rgba(243,229,220,0.3)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 duration-200" type="submit">
                                Wyślij wiadomość
                            </button>
</form>
</div>
</div>
</div>
</section>
</main>
<footer className="bg-[#2E1F35] text-[#F3E5DC]/60 py-16 px-6 border-t border-[#F3E5DC]/5 relative z-10">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
<div className="text-center md:text-left">
<p className="font-heading uppercase tracking-widest text-lg text-[#F3E5DC] mb-2">Krzysztof Błażejewski</p>
<p className="text-sm font-serif mb-6">Psychoterapia i warsztaty • Warszawa / online</p>
<p className="font-accent text-xs">© 2024 Rodzinny Kalejdoskop.</p>
</div>
<div className="flex flex-col items-center md:items-end gap-6">
<div className="flex items-center gap-4">
<a className="w-12 h-12 border border-[#F3E5DC]/20 rounded-full flex items-center justify-center hover:bg-[#F3E5DC]/10 hover:text-[#5EC8D4] hover:border-[#5EC8D4] transition-all" href="https://www.facebook.com/profile.php?id=61566445632739" rel="noopener" target="_blank" title="Facebook - Profil">
<iconify-icon icon="solar:user-linear" width="22"></iconify-icon>
</a>
<a className="w-12 h-12 border border-[#F3E5DC]/20 rounded-full flex items-center justify-center hover:bg-[#F3E5DC]/10 hover:text-[#5EC8D4] hover:border-[#5EC8D4] transition-all" href="https://www.facebook.com/AkademiaKompasEmocji/" rel="noopener" target="_blank" title="Facebook - Akademia">
<iconify-icon icon="solar:users-group-rounded-linear" width="22"></iconify-icon>
</a>
<a className="w-12 h-12 border border-[#F3E5DC]/20 rounded-full flex items-center justify-center hover:bg-[#F3E5DC]/10 hover:text-[#5EC8D4] hover:border-[#5EC8D4] transition-all" href="https://www.instagram.com/krzysztof_blazejewski/" rel="noopener" target="_blank" title="Instagram">
<iconify-icon icon="solar:camera-linear" width="22"></iconify-icon>
</a>
<a className="w-12 h-12 border border-[#F3E5DC]/20 rounded-full flex items-center justify-center hover:bg-[#F3E5DC]/10 hover:text-[#5EC8D4] hover:border-[#5EC8D4] transition-all" href="https://www.linkedin.com/in/krzysiek-b%C5%82a%C5%BCejewski-60792568/" rel="noopener" target="_blank" title="LinkedIn">
<iconify-icon icon="solar:briefcase-linear" width="22"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-[#F3E5DC]/10">
<details className="group">
<summary className="cursor-pointer text-xs font-serif hover:text-[#F3E5DC] transition-colors flex items-center gap-2 w-max">
<iconify-icon icon="solar:document-text-linear" width="18"></iconify-icon>
                    Polityka prywatności (RODO)
                    <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="mt-6 text-xs leading-relaxed font-serif bg-[#5D3F6A]/30 border border-[#F3E5DC]/10 p-6 rounded-sm">
<p className="mb-2"><strong>Administrator Danych:</strong> InRelatio – Przestrzeń Emocji i Relacji Krzysztof Błażejewski. Kontakt: krzysiekblazejewski@gmail.com.</p>
<p className="mb-2"><strong>Cele przetwarzania:</strong> Wykonanie umowy, marketing własny, obsługa zapytań (kontakt).</p>
<p className="mb-2"><strong>Odbiorcy danych:</strong> Podmioty obsługujące płatności, księgowość oraz ETI.</p>
<p className="mb-2"><strong>Prawa:</strong> Dostęp do danych, sprostowanie, usunięcie, sprzeciw. Skarga do PUODO.</p>
</div>
</details>
</div>
</footer>


    </>
  );
}
