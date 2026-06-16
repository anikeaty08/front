import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
document.addEventListener('DOMContentLoaded', () => {
// Initialize Lucide Icons
lucide.createIcons();
// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
btn.addEventListener('click', () => {
menu.classList.toggle('hidden');
});
// Smooth Scroll Reveal
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.style.opacity = '1';
entry.target.style.transform = 'translateY(0)';
}
});
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => {
el.style.opacity = '0';
el.style.transform = 'translateY(2rem)';
el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
observer.observe(el);
});
});



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
      

<nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-[#d8e6df]">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center" href="#">
<span className="font-['Playfair_Display'] text-2xl tracking-tight font-medium text-[#1a1a1a]">
            Super
            <span className="text-[#1a5c38]">Putt</span>
</span>
</a>
<div className="hidden md:flex items-center gap-8 text-base font-normal text-[#5a5a5a]">
<a className="hover:text-[#1a1a1a] transition-colors" href="#the-idea">
            Idea
          </a>
<a className="hover:text-[#1a1a1a] transition-colors" href="#how-it-works">
            Jak to działa
          </a>
<a className="hover:text-[#1a1a1a] transition-colors" href="#venues">
            Dla obiektów
          </a>
<a className="hover:text-[#1a1a1a] transition-colors" href="#about">
            O nas
          </a>
</div>
<div className="hidden md:flex">
<a className="bg-[#1a5c38] hover:bg-[#134429] text-white text-base font-normal px-5 py-2.5 rounded-full transition-colors" href="mailto:mariuszgancarz@hotmail.com">
            Zamów kartę wyników
          </a>
</div>
<button className="md:hidden text-[#1a1a1a] p-2" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>

<div className="hidden md:hidden bg-white border-b border-[#d8e6df] px-6 py-4 space-y-4" id="mobile-menu">
<a className="block text-base font-normal text-[#5a5a5a]" href="#the-idea">
          Idea
        </a>
<a className="block text-base font-normal text-[#5a5a5a]" href="#how-it-works">
          Jak to działa
        </a>
<a className="block text-base font-normal text-[#5a5a5a]" href="#venues">
          Dla obiektów
        </a>
<a className="block text-base font-normal text-[#5a5a5a]" href="#about">
          O nas
        </a>
<a className="block text-base font-normal text-[#1a5c38] pt-2 border-t border-[#d8e6df]" href="mailto:mariuszgancarz@hotmail.com">
          Zamów kartę wyników
        </a>
</div>
</nav>

<section className="pt-36 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal space-y-8">
<div className="inline-flex items-center gap-2 bg-[#edf7f1] text-[#1a5c38] text-sm font-normal px-4 py-1.5 rounded-full">
<i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i>
            Stworzone w Canberze, Australia
          </div>
<h1 className="font-['Playfair_Display'] text-5xl lg:text-6xl tracking-tight font-medium text-[#1a1a1a] leading-tight">
            Nigdy nie graj
            <span className="text-[#1a5c38]">za krótko.</span>
</h1>
<p className="text-xl text-[#5a5a5a] max-w-lg leading-relaxed font-normal">
            Super Putt to angażujący format puttowania, w którym każdy dołek to
            nowe sportowe wyzwanie, a zdrowa rywalizacja napędza chęć ciągłej
            poprawy wyników i gwarantuje świetną zabawę.
          </p>
<div className="bg-[#edf7f1] p-6 rounded-2xl border border-[#d8e6df] space-y-4">
<h3 className="font-normal text-[#1a1a1a] text-base tracking-wide uppercase">
              Dwie Proste Zasady
            </h3>
<div className="space-y-3">
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-white text-[#1a5c38] text-sm font-normal flex items-center justify-center border border-[#d8e6df] shadow-sm mt-0.5">
                  1
                </div>
<p className="text-base font-normal">
                  Jeśli pierwszy putt nie wpadnie (birdie/eagle), piłka musi
                  minąć dołek.
                </p>
</div>
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-white text-[#1a5c38] text-sm font-normal flex items-center justify-center border border-[#d8e6df] shadow-sm mt-0.5">
                  2
                </div>
<p className="text-base font-normal">
                  Jeśli minie dołek, drugi putt musi wpaść.
                </p>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-4 pt-2">
<a className="bg-[#1a5c38] hover:bg-[#134429] text-white text-lg font-normal px-6 py-3 rounded-full transition-colors flex items-center gap-2" href="mailto:mariuszgancarz@hotmail.com">
              Zamów kartę wyników
            </a>
<a className="bg-white border border-[#d8e6df] hover:border-[#1a1a1a] text-[#1a1a1a] text-lg font-normal px-6 py-3 rounded-full transition-colors" href="#how-it-works">
              Dowiedz się więcej
            </a>
</div>
</div>
<div className="reveal lg:pl-10 relative">
<div className="absolute -inset-4 bg-[#edf7f1] rounded-full blur-3xl opacity-50 -z-10"></div>
<div className="bg-gradient-to-br from-[#1a5c38] to-[#2e8b57] rounded-3xl p-8 shadow-2xl text-white flex flex-col h-full">
<h3 className="font-['Playfair_Display'] text-2xl tracking-tight font-normal mb-6">
              Jak wygląda gra na każdym dołku
            </h3>
<div className="space-y-4 flex-grow">

<div className="bg-white/10 border border-white/20 rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between backdrop-blur-sm">
<div className="flex items-center gap-3">
<div className="p-2 bg-white/20 rounded-lg text-white">
<i className="w-5 h-5" data-lucide="star" strokeWidth="1.5"></i>
</div>
<div>
<p className="font-normal text-base">
                      Pierwszy putt trafia do dołka
                    </p>
</div>
</div>
<span className="bg-green-500/20 text-green-100 border border-green-500/30 text-sm px-2.5 py-1 rounded-full whitespace-nowrap font-normal">
                  Birdie -1 lub eagle -2 (dołki 4 i 10)
                </span>
</div>

<div className="bg-white/10 border border-white/20 rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between backdrop-blur-sm">
<div className="flex items-center gap-3">
<div className="p-2 bg-white/20 rounded-lg text-white">
<i className="w-5 h-5" data-lucide="flag" strokeWidth="1.5"></i>
</div>
<div>
<p className="font-normal text-base">
                      Putt zatrzymuje się przed dołkiem
                    </p>
</div>
</div>
<span className="bg-amber-800/60 text-amber-100 border border-amber-800/50 text-sm px-2.5 py-1 rounded-full whitespace-nowrap font-normal">
                  Błąd +1
                </span>
</div>

<div className="bg-white/10 border border-white/20 rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between backdrop-blur-sm">
<div className="flex items-center gap-3">
<div className="p-2 bg-white/20 rounded-lg text-white">
<i className="w-5 h-5" data-lucide="user" strokeWidth="1.5"></i>
</div>
<div>
<p className="font-normal text-base">Putt mija dołek</p>
<p className="text-sm text-white/70">Musisz trafić następny</p>
</div>
</div>
<span className="bg-amber-500/20 text-amber-100 border border-amber-500/30 text-sm px-2.5 py-1 rounded-full whitespace-nowrap font-normal">
                  Wyzwanie
                </span>
</div>

<div className="bg-white/10 border border-white/20 rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between backdrop-blur-sm">
<div className="flex items-center gap-3">
<div className="p-2 bg-white/20 rounded-lg text-white">
<i className="w-5 h-5" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<div>
<p className="font-normal text-base">Putt w dołku</p>
<p className="text-sm text-white/70">Idealne wykonanie</p>
</div>
</div>
<span className="bg-white/20 text-white border border-white/30 text-sm px-2.5 py-1 rounded-full whitespace-nowrap font-normal">
                  Wynik 0
                </span>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/20 flex items-center justify-between text-sm text-white/80 font-normal tracking-wide">
<span>12 Dołków</span>
<span className="w-1 h-1 rounded-full bg-white/40"></span>
<span>Maks. 2 putty na dołek</span>
<span className="w-1 h-1 rounded-full bg-white/40"></span>
<span>$0 kosztów wdrożenia</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#f7f9f8] py-24" id="the-idea">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-16 items-center">
<div className="lg:col-span-5 reveal space-y-6">
<span className="text-sm font-medium tracking-wider uppercase text-[#2e8b57]">
              Koncepcja
            </span>
<h2 className="font-['Playfair_Display'] text-4xl tracking-tight font-medium text-[#1a1a1a]">
              Jedna zasada zmienia wszystko.
            </h2>
<div className="space-y-4 text-lg font-normal text-[#5a5a5a] leading-relaxed">
<p>
                W tradycyjnym golfie gracze mogą zagrać za krótko bez kary. W
                Super Putt zbyt krótki putt to natychmiastowy błąd.
              </p>
<p>
                Ta pojedyncza zmiana wprowadza doskonały element zdrowej
                rywalizacji przy każdym uderzeniu. Buduje sportowe zaangażowanie
                i sprawia, że każdy putt staje się wyzwaniem — niezależnie od
                tego, czy rywalizujesz z przyjaciółmi, czy walczysz o własny
                rekord.
              </p>
</div>
</div>
<div className="lg:col-span-7 reveal flex flex-col gap-4">

<div className="bg-white border border-[#d8e6df] rounded-2xl p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#f7f9f8] flex items-center justify-center text-[#1a1a1a] border border-[#d8e6df]">
<i className="w-6 h-6" data-lucide="flag" strokeWidth="1.5"></i>
</div>
<div>
<p className="font-normal text-lg text-[#1a1a1a]">
                    Putt przed dołkiem
                  </p>
</div>
</div>
<span className="bg-amber-50 text-amber-800 border border-amber-200 text-sm px-3 py-1.5 rounded-full font-normal tracking-wide">
                Błąd +1
              </span>
</div>

<div className="bg-white border border-[#d8e6df] rounded-2xl p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#f7f9f8] flex items-center justify-center text-[#1a1a1a] border border-[#d8e6df]">
<i className="w-6 h-6" data-lucide="user" strokeWidth="1.5"></i>
</div>
<div>
<p className="font-normal text-lg text-[#1a1a1a]">
                    Putt mija dołek
                  </p>
<p className="text-base text-[#5a5a5a] font-normal">
                    Kolejny putt musi wpaść
                  </p>
</div>
</div>
<span className="bg-amber-50 text-amber-600 border border-amber-100 text-sm px-3 py-1.5 rounded-full font-normal tracking-wide">
                Wyzwanie
              </span>
</div>

<div className="bg-white border border-[#d8e6df] rounded-2xl p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#f7f9f8] flex items-center justify-center text-[#1a1a1a] border border-[#d8e6df]">
<i className="w-6 h-6" data-lucide="target" strokeWidth="1.5"></i>
</div>
<div>
<p className="font-normal text-lg text-[#1a1a1a]">
                    Drugi putt nie wpada
                  </p>
<p className="text-base text-[#5a5a5a] font-normal">
                    Niewykorzystana szansa
                  </p>
</div>
</div>
<span className="bg-red-50 text-red-600 border border-red-100 text-sm px-3 py-1.5 rounded-full font-normal tracking-wide">
                Błąd +1
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-24" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<span className="text-sm font-medium tracking-wider uppercase text-[#2e8b57] mb-3 block">
            Jak to działa
          </span>
<h2 className="font-['Playfair_Display'] text-4xl tracking-tight font-medium text-[#1a1a1a]">
            Proste zasady. Świetna zabawa.
          </h2>
</div>
<div className="grid md:grid-cols-2 gap-6 reveal">

<div className="bg-[#f7f9f8] border border-[#d8e6df] rounded-2xl p-8 hover:bg-white transition-colors duration-300">
<div className="w-12 h-12 rounded-full bg-white border border-[#d8e6df] flex items-center justify-center text-[#1a5c38] mb-6 shadow-sm">
<i className="w-6 h-6" data-lucide="user" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl tracking-tight font-normal text-[#1a1a1a] mb-3">
              Format 12 Dołków
            </h3>
<p className="text-base font-normal text-[#5a5a5a] leading-relaxed">
              Pełna runda składa się z 12 dołków na standardowym greenie. Szybka
              gra, łatwa organizacja i zawsze świetna zabawa.
            </p>
</div>

<div className="bg-[#f7f9f8] border border-[#d8e6df] rounded-2xl p-8 hover:bg-white transition-colors duration-300">
<div className="w-12 h-12 rounded-full bg-white border border-[#d8e6df] flex items-center justify-center text-[#1a5c38] mb-6 shadow-sm">
<i className="w-6 h-6" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl tracking-tight font-normal text-[#1a1a1a] mb-3">
              Maksymalnie 2 Putty na Dołek
            </h3>
<p className="text-base font-normal text-[#5a5a5a] leading-relaxed">
              Dwa putty, dwie szanse — bez powtórek. Ograniczona liczba prób
              gwarantuje płynną, szybką grę i uśmiech na twarzy.
            </p>
</div>

<div className="bg-[#f7f9f8] border border-[#d8e6df] border-l-4 border-l-red-400 rounded-2xl p-8 hover:bg-white transition-colors duration-300">
<div className="w-12 h-12 rounded-full bg-white border border-[#d8e6df] flex items-center justify-center text-[#1a5c38] mb-6 shadow-sm">
<i className="w-6 h-6" data-lucide="ban" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl tracking-tight font-normal text-[#1a1a1a] mb-3">
              Pierwszy Putt Musi Minąć Dołek
            </h3>
<p className="text-base font-normal text-[#5a5a5a] leading-relaxed">
              Jeśli pierwszy putt nie wpadnie jako birdie/eagle, piłka musi
              minąć dołek. Uderzenie za krótko w każdym innym przypadku to
              automatyczny błąd.
            </p>
</div>

<div className="bg-[#f7f9f8] border border-[#d8e6df] border-l-4 border-l-[#2e8b57] rounded-2xl p-8 hover:bg-white transition-colors duration-300">
<div className="w-12 h-12 rounded-full bg-white border border-[#d8e6df] flex items-center justify-center text-[#1a5c38] mb-6 shadow-sm">
<i className="w-6 h-6" data-lucide="target" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl tracking-tight font-normal text-[#1a1a1a] mb-3">
              Za Dołkiem? Musisz Trafić
            </h3>
<p className="text-base font-normal text-[#5a5a5a] leading-relaxed">
              Minąłeś dołek — teraz to dokończ. Putt powrotny musi wpaść. Pudło
              oznacza kolejny błąd.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-[#1a1a1a] py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal space-y-6">
<span className="text-sm font-medium tracking-wider uppercase text-[#edf7f1] opacity-90 block">
              Ostateczny Cel
            </span>
<h2 className="font-['Playfair_Display'] text-4xl tracking-tight font-medium text-white">
              Pokonanie pola.
            </h2>
<div className="space-y-4 text-lg font-normal text-white/70 leading-relaxed">
<p>
                „Pokonanie pola” oznacza ukończenie wszystkich 12 dołków bez
                popełnienia ani jednego błędu. Żadnych zagrań za krótko, tylko
                sportowa konsekwencja i uderzenia, które precyzyjnie trafiają do
                celu.
              </p>
<p>
                To idealne wyzwanie, dające satysfakcję ze współzawodnictwa, w
                którym możesz zmierzyć się z innymi graczami lub dążyć do
                ustanowienia własnego rekordu.
              </p>
</div>
</div>
<div className="reveal">
<div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center flex flex-col items-center justify-center backdrop-blur-sm">
<div className="w-20 h-20 rounded-full bg-[#1a5c38] text-white flex items-center justify-center mb-6 shadow-lg border border-[#2e8b57]">
<i className="w-10 h-10" data-lucide="trophy" strokeWidth="1.5"></i>
</div>
<h3 className="font-['Playfair_Display'] text-3xl tracking-tight font-medium text-white mb-4">
                Perfekcyjne Wykonanie
              </h3>
<p className="text-lg text-white/70 font-normal">
                0 Błędów na wszystkich 12 dołkach. Masz to, czego potrzeba?
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#edf7f1] py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mx-auto flex flex-col items-center text-center">
<div className="reveal space-y-6">
<span className="text-sm font-medium tracking-wider uppercase text-[#2e8b57]">
              Dlaczego To Działa
            </span>
<h2 className="font-['Playfair_Display'] text-4xl tracking-tight font-medium text-[#1a1a1a]">
              Duch rywalizacji.
            </h2>
<div className="space-y-4 text-lg font-normal text-[#5a5a5a] leading-relaxed">
<p>
                Zbytnia ostrożność kończy się błędem, a mocniejsze uderzenie
                wymaga większej precyzji przy puttcie powrotnym. To zachęca
                graczy do ciągłego doskonalenia techniki i wciąga w zdrową
                rywalizację.
              </p>
<p>
                Ten dynamiczny element sprawia, że Super Putt wyzwala chęć
                sportowej walki — napędza zaangażowanie i sprawia, że golfiści
                na każdym poziomie wracają, by udowodnić swoje umiejętności.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<span className="text-sm font-medium tracking-wider uppercase text-[#2e8b57] mb-3 block">
            Dla kogo
          </span>
<h2 className="font-['Playfair_Display'] text-4xl tracking-tight font-medium text-[#1a1a1a]">
            Stworzone dla każdego.
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
<div className="bg-[#f7f9f8] border border-[#d8e6df] rounded-2xl p-8 flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-full bg-white border border-[#d8e6df] flex items-center justify-center text-[#1a5c38] mb-6">
<i className="w-7 h-7" data-lucide="flag" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-normal text-[#1a1a1a] mb-3">
              Kluby i Obiekty Golfowe
            </h3>
<p className="text-sm font-normal text-[#5a5a5a] leading-relaxed">
              Nowy format rywalizacji na Twoim istniejącym greenie. Nie wymaga
              dodatkowego sprzętu ani przygotowań.
            </p>
</div>
<div className="bg-[#f7f9f8] border border-[#d8e6df] rounded-2xl p-8 flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-full bg-white border border-[#d8e6df] flex items-center justify-center text-[#1a5c38] mb-6">
<i className="w-7 h-7" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-normal text-[#1a1a1a] mb-3">
              Początkujący Golfiści
            </h3>
<p className="text-sm font-normal text-[#5a5a5a] leading-relaxed">
              Jasne, proste zasady sprawiają, że format jest natychmiast
              dostępny — do gry nie jest wymagany handicap ani doświadczenie.
            </p>
</div>
<div className="bg-[#f7f9f8] border border-[#d8e6df] rounded-2xl p-8 flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-full bg-white border border-[#d8e6df] flex items-center justify-center text-[#1a5c38] mb-6">
<i className="w-7 h-7" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-normal text-[#1a1a1a] mb-3">
              Grupy Korporacyjne
            </h3>
<p className="text-sm font-normal text-[#5a5a5a] leading-relaxed">
              Wyróżniająca się atrakcja na wyjazdy integracyjne, spotkania z
              klientami i firmowe wyjścia na golfa.
            </p>
</div>
<div className="bg-[#f7f9f8] border border-[#d8e6df] rounded-2xl p-8 flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-full bg-white border border-[#d8e6df] flex items-center justify-center text-[#1a5c38] mb-6">
<i className="w-7 h-7" data-lucide="party-popper" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-normal text-[#1a1a1a] mb-3">
              Gracze Rekreacyjni i Eventy
            </h3>
<p className="text-sm font-normal text-[#5a5a5a] leading-relaxed">
              Zabawa i rywalizacja dla graczy w każdym wieku. Łatwe do
              przeprowadzenia jako luźna gra lub pełny turniej.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-[#f7f9f8] py-24" id="venues">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal space-y-8">
<div>
<span className="text-sm font-medium tracking-wider uppercase text-[#2e8b57] mb-3 block">
                Dla Klubów i Obiektów
              </span>
<h2 className="font-['Playfair_Display'] text-4xl tracking-tight font-medium text-[#1a1a1a]">
                Stworzone dla frekwencji i przychodów.
              </h2>
</div>
<ul className="space-y-4">
<li className="bg-white border border-[#d8e6df] rounded-xl p-4 flex items-center gap-4 shadow-sm">
<div className="w-6 h-6 rounded-full bg-[#edf7f1] text-[#2e8b57] flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<span className="text-base font-normal text-[#3d3d3d]">
                  Brak kosztów wdrożenia
                </span>
</li>
<li className="bg-white border border-[#d8e6df] rounded-xl p-4 flex items-center gap-4 shadow-sm">
<div className="w-6 h-6 rounded-full bg-[#edf7f1] text-[#2e8b57] flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<span className="text-base font-normal text-[#3d3d3d]">
                  Wykorzystuje Twój obecny putting green
                </span>
</li>
<li className="bg-white border border-[#d8e6df] rounded-xl p-4 flex items-center gap-4 shadow-sm">
<div className="w-6 h-6 rounded-full bg-[#edf7f1] text-[#2e8b57] flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<span className="text-base font-normal text-[#3d3d3d]">
                  Przyciąga nową i młodszą publiczność
                </span>
</li>
<li className="bg-white border border-[#d8e6df] rounded-xl p-4 flex items-center gap-4 shadow-sm">
<div className="w-6 h-6 rounded-full bg-[#edf7f1] text-[#2e8b57] flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<span className="text-base font-normal text-[#3d3d3d]">
                  Częste powroty graczy i wysoka grywalność
                </span>
</li>
<li className="bg-white border border-[#d8e6df] rounded-xl p-4 flex items-center gap-4 shadow-sm">
<div className="w-6 h-6 rounded-full bg-[#edf7f1] text-[#2e8b57] flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<span className="text-base font-normal text-[#3d3d3d]">
                  Idealne na wydarzenia i rezerwacje grupowe
                </span>
</li>
</ul>
</div>
<div className="reveal">
<div className="bg-[#edf7f1] rounded-3xl p-10 border border-[#d8e6df] text-center flex flex-col items-center justify-center min-h-[400px]">
<span className="text-sm font-medium tracking-wider uppercase text-[#5a5a5a] mb-6">
                Wymagana Inwestycja
              </span>
<div className="font-['Playfair_Display'] text-8xl tracking-tight font-normal text-[#1a5c38] mb-6 leading-none">
                $0
              </div>
<p className="text-lg font-normal text-[#3d3d3d] mb-10 max-w-xs mx-auto">
                Twój obecny green to wszystko, czego potrzebujesz, aby zacząć.
              </p>
<div className="grid grid-cols-2 gap-4 w-full">
<div className="bg-white p-4 rounded-xl border border-[#d8e6df]">
<p className="text-base font-normal text-[#1a1a1a] mb-1">
                    Szybkie Rundy
                  </p>
<p className="text-sm font-normal text-[#5a5a5a]">
                    Wysoka przepustowość graczy
                  </p>
</div>
<div className="bg-white p-4 rounded-xl border border-[#d8e6df]">
<p className="text-base font-normal text-[#1a1a1a] mb-1">
                    Powtarzalność
                  </p>
<p className="text-sm font-normal text-[#5a5a5a]">
                    Gracze chętnie wracają
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#edf7f1] py-24" id="about">
<div className="max-w-4xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-12 reveal">
<div className="flex-shrink-0">
<div className="w-32 h-32 rounded-full bg-[#1a5c38] flex items-center justify-center text-4xl border-4 border-white shadow-lg">
              ⛳
            </div>
</div>
<div className="text-center md:text-left space-y-4">
<span className="text-sm font-medium tracking-wider uppercase text-[#2e8b57]">
              O Twórcy
            </span>
<h2 className="font-['Playfair_Display'] text-3xl tracking-tight font-medium text-[#1a1a1a]">
              Mariusz Gancarz
            </h2>
<p className="text-lg font-normal text-[#5a5a5a] leading-relaxed">
              Super Putt został stworzony przez Mariusza Gancarza w Canberze, w
              Australii, z jednym celem: uczynić golf bardziej przystępnym,
              angażującym i atrakcyjnym do współzawodnictwa dla każdego.
              Analizując najbardziej fundamentalną część gry — putt — Mariusz
              stworzył format, który gwarantuje doskonałą zabawę i zachęca do
              sportowej rywalizacji graczy na każdym poziomie.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-[#1a5c38] text-white py-24 text-center" id="contact">
<div className="max-w-3xl mx-auto px-6 reveal space-y-8">
<span className="text-sm font-medium tracking-wider uppercase text-[#edf7f1] opacity-90">
          Skontaktuj się z nami
        </span>
<h2 className="font-['Playfair_Display'] text-4xl tracking-tight font-normal">
          Gotowy wprowadzić Super Putt do swojego klubu?
        </h2>
<p className="text-lg text-white/90 max-w-xl mx-auto font-light">
          Niezależnie od tego, czy reprezentujesz obiekt sportowy, organizujesz
          wydarzenia, czy po prostu spodobał Ci się nasz pomysł — chętnie z Tobą
          porozmawiamy.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<div className="w-full sm:w-auto bg-white/10 border border-white/20 rounded-xl px-6 py-4 flex items-center justify-center gap-3 backdrop-blur-sm">
<i className="w-5 h-5 opacity-80" data-lucide="mail" strokeWidth="1.5"></i>
<span className="text-base font-normal tracking-wide">
              mariuszgancarz@hotmail.com
            </span>
</div>
<div className="w-full sm:w-auto bg-white/10 border border-white/20 rounded-xl px-6 py-4 flex items-center justify-center gap-3 backdrop-blur-sm">
<i className="w-5 h-5 opacity-80" data-lucide="phone" strokeWidth="1.5"></i>
<span className="text-base font-normal tracking-wide">
              +61 0450 961 477
            </span>
</div>
</div>
</div>
</section>

<footer className="bg-[#111] text-white/50 py-10 text-center">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-2 text-sm font-normal tracking-wide">
<span className="font-normal text-white/70">SuperPutt</span>
<span className="hidden md:inline">·</span>
<span>Stworzone w Canberze, Australia</span>
<span className="hidden md:inline">·</span>
<span>Stworzone przez Mariusza Gancarza</span>
<span className="hidden md:inline">·</span>
<span>© 2025</span>
</div>
</footer>

    </>
  );
}
