import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function toggleFaq(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('iconify-icon');
            
            // Close all other FAQs
            const allContents = document.querySelectorAll('.faq-content');
            const allIcons = document.querySelectorAll('iconify-icon');
            
            allContents.forEach((item) => {
                if(item !== content && !item.classList.contains('hidden')) {
                    item.classList.add('hidden');
                }
            });
            allIcons.forEach((item) => {
                if(item !== icon && item.classList.contains('rotate-180')) {
                    item.classList.remove('rotate-180');
                }
            });

            // Toggle current FAQ
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.classList.add('rotate-180');
            } else {
                content.classList.add('hidden');
                icon.classList.remove('rotate-180');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="w-full py-6 px-6 absolute top-0 z-50">
<div className="flex md:justify-start max-w-5xl mr-auto ml-auto justify-center">
<img alt="Joanna Karpeta" className="h-10 object-contain cursor-pointer" onclick="window.location.href='https://tinyurl.com/36jtur8r'" role="button" src="https://i.postimg.cc/K8vyxg7K/Logo-Joanna-Karpeta.png"/>
</div>
</nav>

<div className="fixed top-0 left-0 w-full h-screen overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[60%] h-[50%] bg-[#edf4d4] rounded-full blur-[120px] opacity-60"></div>
<div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[40%] bg-[#f6f9ea] rounded-full blur-[100px] opacity-70"></div>
</div>

<header className="md:pt-48 md:pb-32 fade-in text-center pt-48 pr-6 pb-32 pl-6">
<div className="flex flex-col max-w-3xl mr-auto ml-auto items-center">
<span className="inline-block mb-6 text-[#8bad00] font-medium text-sm tracking-wide uppercase">Tam, gdzie to się zaczęło</span>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#2f3a36] leading-tight mb-10">
                Wiesz, co masz robić… a i tak stoisz w miejscu?
            </h1>
<a className="inline-flex items-center justify-center bg-[#8bad00] text-white px-8 py-4 rounded-full text-base font-medium shadow-[0_4px_14px_0_rgba(139,173,0,0.3)] hover:shadow-[0_6px_20px_rgba(139,173,0,0.23)] hover:bg-[#7a9900] transition-all duration-300" href="https://tidycal.com/m8g5eq3/sesja-1-1-gleboka-zmiana" target="_blank">
                👉 Chcę to w końcu zmienić
            </a>
</div>
</header>
<main className="flex-grow">

<section className="py-16 px-6">
<div className="max-w-2xl mx-auto space-y-6 text-lg text-[#6f7d78] leading-relaxed">
<p className="text-xl md:text-2xl font-medium tracking-tight text-[#2f3a36] mb-8">
                    Czujesz, że coś Cię blokuje, mimo że naprawdę chcesz ruszyć do przodu?
                </p>
<p>Tyle razy już próbowałaś i za każdym razem kończy się podobnie.</p>
<div className="bg-white p-8 rounded-3xl shadow-[0_2px_20px_-10px_rgba(0,0,0,0.03)] border border-[#edf4d4]/50 my-8">
<p className="mb-4">Mówisz sobie:</p>
<p className="italic">„Jeszcze nie jestem gotowa”<br/>
                    „Potrzebuję się jeszcze nauczyć”<br/>
                    „To nie jest dobry moment”</p>
</div>
<p>Niby wiesz, co chcesz robić, a jednak coś Cię trzyma w miejscu.</p>
<p>Brakuje Ci pewności siebie.<br/>
                Boisz się wyjść do ludzi.<br/>
                Wątpisz, że to się uda.</p>
</div>
</section>

<section className="py-16 px-6 bg-[#f6f9ea]/50">
<div className="max-w-2xl mx-auto space-y-6 text-lg text-[#6f7d78] leading-relaxed">
<p>Więc zatrzymujesz swoje działania, plany, marzenia…<br/>
                A potem — z jeszcze większą determinacją — robisz kolejne plany.</p>
<p>I one znowu zostają na papierze.</p>
<p>I gdzieś pod tym wszystkim pojawia się wstyd.<br/>
                Cichy, ale obecny.</p>
<p className="text-xl font-medium tracking-tight text-[#2f3a36] mt-8">
                    …że może coś z Tobą jest nie tak?
                </p>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-2xl mx-auto space-y-12">
<div className="space-y-6 text-lg text-[#6f7d78] leading-relaxed">
<p>Jeśli porusza Cię to, co czytasz, chcę Cię na chwilę zatrzymać i uspokoić.</p>
<p className="text-xl font-medium tracking-tight text-[#2f3a36]">Możesz ruszyć z miejsca. I zacząć działać inaczej.</p>
<p>Tylko to, co Cię dziś zatrzymuje, nie zaczyna się w głowie.</p>
<p>To jest zapisane głębiej.<br/>
                    Poza tym, do czego masz dostęp na co dzień.</p>
</div>
<div className="bg-[#edf4d4]/40 p-8 md:p-10 rounded-3xl border border-[#edf4d4]">
<p className="text-lg text-[#2f3a36] font-medium leading-relaxed">
                        Jeśli jesteś już zmęczona próbami, które niczego nie zmieniają…<br/>
                        i naprawdę chcesz to ruszyć —<br/>
                        potrzebujesz zajrzeć tam, gdzie to wszystko się zaczęło.
                    </p>
</div>
<div className="space-y-6 text-lg text-[#6f7d78] leading-relaxed">
<p>Nie chodzi o to, żeby zdobywać kolejne kompetencje.<br/>
                    Tylko o to, żeby dotrzeć do tego, co naprawdę steruje Twoim działaniem.</p>
<p>Do tego, co zapisane w podświadomości, w ciele, w Twoich reakcjach.<br/>
                    Tam, gdzie powstały schematy, które dziś Cię zatrzymują.</p>
<p>To moment, w którym przestajesz się „naprawiać”…<br/>
                    a zaczynasz docierać do tego, co naprawdę trzyma.</p>
</div>
<div className="space-y-6 text-lg text-[#6f7d78] leading-relaxed">
<p>Dzięki temu zmiana nie kończy się na zrozumieniu.<br/>
                    Zaczyna być odczuwalna i trwała.</p>
<p>Twoja głowa się wycisza.<br/>
                    Myśli przestają pędzić.<br/>
                    Ciało zaczyna się rozluźniać.</p>
<p className="text-[#2f3a36] font-medium">I kiedy zaczynasz to widzieć i czuć…<br/>
                    coś zaczyna się w Tobie zmieniać.</p>
</div>
</div>
</section>

<section className="py-16 px-6">
<div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 md:gap-10">
<div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_4px_30px_-10px_rgba(0,0,0,0.04)] border border-[#f6f9ea]">
<h3 className="text-xl font-semibold tracking-tight text-[#2f3a36] mb-6">Pracując w ten sposób:</h3>
<div className="space-y-3 text-[#6f7d78] text-base md:text-lg">
<p>– rozpoznajesz swoje blokady i widzisz, skąd się wzięły</p>
<p>– odkrywasz „zaklęcia dzieciństwa”, które wpływają na Twoje decyzje</p>
<p>– zaczynasz oddzielać to, co jest Twoje, od tego, co zostało Ci wdrukowane</p>
<p>– widzisz, co Ci służy, a co możesz puścić</p>
</div>
</div>
<div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_4px_30px_-10px_rgba(0,0,0,0.04)] border border-[#f6f9ea]">
<h3 className="text-xl font-semibold tracking-tight text-[#2f3a36] mb-6">W praktyce:</h3>
<div className="space-y-3 text-[#6f7d78] text-base md:text-lg">
<p>– łatwiej podejmujesz decyzje</p>
<p>– mniej się blokujesz przed działaniem</p>
<p>– masz więcej spokoju w głowie i w ciele</p>
</div>
</div>
</div>
<div className="max-w-2xl mx-auto mt-16 space-y-6 text-lg text-[#6f7d78] text-center leading-relaxed">
<p>Zamiast kolejny raz się wycofać —<br/>
                robisz krok do przodu.</p>
<p>I w końcu zaczynasz słyszeć swój głos.<br/>
                Nie ten, który mówi „powinnam”.<br/>
                Tylko ten, który naprawdę wie, czego chcesz.</p>
<p className="text-[#2f3a36] font-medium">I zaczynasz za nim iść —<br/>
                nie tylko w myślach, ale w realnym życiu.</p>
<div className="pt-8 pb-12">
<a className="inline-flex items-center justify-center bg-[#8bad00] text-white px-8 py-4 rounded-full text-base font-medium shadow-[0_4px_14px_0_rgba(139,173,0,0.3)] hover:shadow-[0_6px_20px_rgba(139,173,0,0.23)] hover:bg-[#7a9900] transition-all duration-300" href="https://tidycal.com/m8g5eq3/sesja-1-1-gleboka-zmiana" target="_blank">
                        👉 Umów się na sesję
                    </a>
</div>
</div>
</section>

<section className="py-20 px-6 bg-[#f6f9ea]/50 border-y border-[#edf4d4]/50">
<div className="max-w-2xl mx-auto space-y-6 text-lg text-[#6f7d78] leading-relaxed">
<p>Możesz oczywiście zostawić wszystko tak, jak jest.</p>
<p>I dalej próbować.<br/>
                Jeszcze raz.<br/>
                I jeszcze jeden.</p>
<p>Z nadzieją, że tym razem się uda.</p>
<p>Tylko że najprawdopodobniej znowu będzie to wyglądało podobnie.</p>
<p>Te same wątpliwości.<br/>
                To samo zatrzymanie.<br/>
                Ten sam moment wycofania.</p>
<p>I kolejne miesiące — a czasem lata —<br/>
                w których wiesz, czego chcesz… ale wciąż tego nie robisz.</p>
<p>Nie dlatego, że nie potrafisz.<br/>
                Tylko dlatego, że coś w środku wciąż trzyma Cię w miejscu.</p>
<p className="text-xl font-medium tracking-tight text-[#2f3a36]">I to się samo nie zmieni.</p>
<div className="pt-10 flex flex-col items-start space-y-4">
<a className="inline-flex items-center justify-center bg-[#8bad00] text-white px-8 py-4 rounded-full text-base font-medium shadow-[0_4px_14px_0_rgba(139,173,0,0.3)] hover:shadow-[0_6px_20px_rgba(139,173,0,0.23)] hover:bg-[#7a9900] transition-all duration-300" href="https://tidycal.com/m8g5eq3/sesja-1-1-gleboka-zmiana" target="_blank">
                        👉 Umów się na sesję
                    </a>
<a className="inline-flex items-center justify-center text-[#2f3a36] font-medium text-base hover:text-[#8bad00] transition-colors py-2 px-4" href="https://tidycal.com/m8g5eq3/15-minute-meeting" target="_blank">
                        👉 lub zacznij od krótkiej rozmowy
                    </a>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-2xl mx-auto space-y-6 text-lg text-[#6f7d78] leading-relaxed">
<p>Ta praca nie polega na tym, żeby Cię gdzieś „doprowadzić”.</p>
<p>To proces, w którym krok po kroku docieramy do tego, co naprawdę wymaga uwagi.</p>
<p>W Twoim tempie.<br/>
                Z uwzględnieniem tego, na co jesteś gotowa tu i teraz.</p>
<p>Nie musisz wiedzieć, od czego zacząć.<br/>
                Nie musisz mieć wszystkiego poukładanego.</p>
<p>To ja prowadzę ten proces — tak, żebyś mogła się w nim poczuć bezpiecznie.</p>
<p>Pracujemy z tym, co się pojawia.<br/>
                Z tym, co Twoje ciało i podświadomość są gotowe pokazać.</p>
<p>Bez naciskania.<br/>
                Bez „przełamywania się na siłę”.<br/>
                Ale też bez omijania tego, co ważne.</p>
<p className="text-[#2f3a36] font-medium">To jest praca prawdziwa.<br/>
                I dopasowana do Ciebie.</p>
</div>
</section>

<section className="py-16 px-6">
<div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
<div className="bg-[#edf4d4]/30 p-8 md:p-10 rounded-3xl border border-[#edf4d4]/50">
<h3 className="text-xl font-semibold tracking-tight text-[#2f3a36] mb-6">Ta praca jest dla Ciebie, jeśli:</h3>
<div className="space-y-3 text-[#6f7d78] text-base md:text-lg mb-8">
<p>– czujesz, że coś Cię blokuje, mimo że dużo już rozumiesz</p>
<p>– wracasz do tych samych schematów</p>
<p>– chcesz naprawdę coś zmienić — nie tylko to zrozumieć</p>
<p className="">– jesteś gotowa zajrzeć głębiej</p>
</div>
<a className="inline-flex items-center justify-center bg-[#8bad00] text-white px-6 py-3 rounded-full text-sm md:text-base font-medium shadow-sm hover:shadow-md hover:bg-[#7a9900] transition-all duration-300" href="https://tidycal.com/m8g5eq3/sesja-1-1-gleboka-zmiana" target="_blank">
                        👉 Umów się na sesję
                    </a>
</div>
<div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_4px_30px_-10px_rgba(0,0,0,0.03)] border border-[#f6f9ea]">
<h3 className="text-xl font-semibold tracking-tight text-[#2f3a36] mb-6">To nie jest dla Ciebie, jeśli:</h3>
<div className="space-y-3 text-[#6f7d78] text-base md:text-lg">
<p>– szukasz szybkiego rozwiązania</p>
<p>– chcesz ominąć to, co trudne</p>
<p>– liczysz, że ktoś zrobi tę pracę za Ciebie</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white border-y border-[#f6f9ea]">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
<div className="md:w-[60%] leading-relaxed md:pl-8 text-lg text-[#6f7d78] border-[#edf4d4] border-l-2 pl-6 space-y-6">
<p className="">W tej pracy nie chodzi tylko o to, co widać.<br/>
                    Chodzi o to, żeby odkryć to, co jest pod spodem.</p>
<p className="">I to jest coś, z czym sama miałam kiedyś trudność.</p>
<p className="">Też byłam w miejscu, w którym rozumiałam coraz więcej…<br/>
                    a mimo to coś wciąż nie puszczało.</p>
<p className="">Uczyłam się. Zdobywałam kolejne dyplomy.<br/>
                    A zamiast iść do przodu — zapadałam się w miejscu.</p>
<p className="">Znałam swoje lęki, blokady, ograniczenia.<br/>
                    A mimo to nie byłam w stanie ich przeskoczyć.</p>
<p className="">Kręciłam się w kółko.</p>
<p className="text-[#2f3a36] font-medium">Dopiero kiedy zeszłam głębiej —<br/>
                    zaczęło się coś realnie zmieniać.</p>
<p>Dziś widzę to samo u osób, z którymi pracuję.</p>
<p className="">Świadomość jest. Wiedza jest.<br/>
                    Ale kiedy zaczynamy pracować głębiej — pojawia się coś, czego wcześniej brakowało: ruch.</p>
<p className="text-[#2f3a36] font-medium">To, co było zatrzymane — zaczyna puszczać.<br/>
                    I pojawia się realna zmiana.</p>
</div>
<div className="md:w-[40%] w-full">
<img alt="O mnie" className="w-full object-cover border-[#edf4d4]/30 border rounded-3xl shadow-md" onclick="window.location.href='https://tinyurl.com/2sj43zru'" role="button" src="https://i.postimg.cc/pr6Krjhx/zdjecie-premium.webp"/>
</div>
</div>
</section>

<section className="py-20 px-6 scroll-mt-10" id="offer">
<div className="max-w-3xl mx-auto bg-[#f6f9ea] p-8 md:p-14 rounded-[2rem] border border-[#edf4d4]">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#2f3a36] mb-8">Forma współpracy</h2>
<div className="space-y-6 text-lg text-[#6f7d78]">
<p>To Ty decydujesz, jak długo i jak głęboko chcesz pracować.</p>
<p>Możemy spotkać się raz<br/>
                    albo przejść proces 3–5 sesji.</p>
<p>Każda sesja trwa około 2 godzin.</p>
<div>
<p className="mb-2">Spotkania:</p>
<p>– na żywo w Warszawie<br/>
                        – albo online</p>
</div>
<p>Przed pierwszym spotkaniem wypełniasz krótką ankietę.</p>
<div className="pt-4 pb-2 border-t border-[#edf4d4] mt-6">
<p className="mb-6">Jeśli nie jesteś pewna — możesz zacząć od 15-minutowej rozmowy.</p>
<a className="inline-flex items-center justify-center bg-[#8bad00] text-white px-8 py-4 rounded-full text-base font-medium shadow-[0_4px_14px_0_rgba(139,173,0,0.3)] hover:shadow-[0_6px_20px_rgba(139,173,0,0.23)] hover:bg-[#7a9900] transition-all duration-300" href="https://tidycal.com/m8g5eq3/15-minute-meeting" target="_blank">
                            👉 Umawiam się na rozmowę
                        </a>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 text-center">
<div className="max-w-2xl mx-auto space-y-6">
<h2 className="text-2xl font-semibold tracking-tight text-[#2f3a36] mb-6">Na koniec</h2>
<div className="text-lg text-[#6f7d78] leading-relaxed space-y-4">
<p>Możesz dalej próbować tak jak do tej pory.<br/>
                    Albo zrobić coś inaczej.</p>
<p className="text-[#2f3a36] font-medium">Jeśli czujesz, że nie chcesz już dłużej być w tym samym miejscu —<br/>
                    to jest moment, żeby zrobić pierwszy krok.</p>
</div>
<div className="pt-8">
<a className="inline-flex items-center justify-center bg-[#8bad00] text-white px-8 py-4 rounded-full text-base font-medium shadow-[0_4px_14px_0_rgba(139,173,0,0.3)] hover:shadow-[0_6px_20px_rgba(139,173,0,0.23)] hover:bg-[#7a9900] transition-all duration-300" href="https://tidycal.com/m8g5eq3/sesja-1-1-gleboka-zmiana" target="_blank">
                        👉 Umów się na sesję
                    </a>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white/50 border-t border-[#edf4d4]/30">
<div className="max-w-2xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-12 text-[#2f3a36]">FAQ</h2>
<div className="space-y-4">

<div className="bg-white rounded-2xl border border-[#edf4d4] overflow-hidden shadow-sm">
<button className="w-full px-6 py-5 text-left flex justify-between items-center text-[#2f3a36] font-medium focus:outline-none" onclick="toggleFaq(this)">
<span className="text-base md:text-lg pr-4">Co się dzieje po umówieniu sesji?</span>
<iconify-icon className="text-[#8bad00] transition-transform duration-300 flex-shrink-0" height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</button>
<div className="faq-content hidden px-6 pb-6 text-[#6f7d78] text-base md:text-lg leading-relaxed">
<p>Otrzymasz ode mnie wszystkie potrzebne informacje oraz krótką ankietę do wypełnienia przed spotkaniem.</p>
</div>
</div>

<div className="bg-white rounded-2xl border border-[#edf4d4] overflow-hidden shadow-sm">
<button className="w-full px-6 py-5 text-left flex justify-between items-center text-[#2f3a36] font-medium focus:outline-none" onclick="toggleFaq(this)">
<span className="text-base md:text-lg pr-4">Czy muszę mieć doświadczenie z hipnozą?</span>
<iconify-icon className="text-[#8bad00] transition-transform duration-300 flex-shrink-0" height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</button>
<div className="faq-content hidden px-6 pb-6 text-[#6f7d78] text-base md:text-lg leading-relaxed">
<p>Nie. Prowadzę Cię przez cały proces — krok po kroku.</p>
</div>
</div>

<div className="bg-white rounded-2xl border border-[#edf4d4] overflow-hidden shadow-sm">
<button className="w-full px-6 py-5 text-left flex justify-between items-center text-[#2f3a36] font-medium focus:outline-none" onclick="toggleFaq(this)">
<span className="text-base md:text-lg pr-4">Czy to jest bezpieczne?</span>
<iconify-icon className="text-[#8bad00] transition-transform duration-300 flex-shrink-0" height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</button>
<div className="faq-content hidden px-6 pb-6 text-[#6f7d78] text-base md:text-lg leading-relaxed">
<p>Tak. Pracujemy w pełnym kontakcie i z uwzględnieniem Twoich granic.</p>
</div>
</div>

<div className="bg-white rounded-2xl border border-[#edf4d4] overflow-hidden shadow-sm">
<button className="w-full px-6 py-5 text-left flex justify-between items-center text-[#2f3a36] font-medium focus:outline-none" onclick="toggleFaq(this)">
<span className="text-base md:text-lg pr-4">Czy jedna sesja wystarczy?</span>
<iconify-icon className="text-[#8bad00] transition-transform duration-300 flex-shrink-0" height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</button>
<div className="faq-content hidden px-6 pb-6 text-[#6f7d78] text-base md:text-lg leading-relaxed">
<p>Czasem tak — jeśli pracujemy nad konkretnym tematem.<br/>
                            Przy głębszych schematach warto rozważyć proces kilku spotkań.</p>
</div>
</div>

<div className="bg-white rounded-2xl border border-[#edf4d4] overflow-hidden shadow-sm">
<button className="w-full px-6 py-5 text-left flex justify-between items-center text-[#2f3a36] font-medium focus:outline-none" onclick="toggleFaq(this)">
<span className="text-base md:text-lg pr-4">Co jeśli nie jestem pewna?</span>
<iconify-icon className="text-[#8bad00] transition-transform duration-300 flex-shrink-0" height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</button>
<div className="faq-content hidden px-6 pb-6 text-[#6f7d78] text-base md:text-lg leading-relaxed">
<p>Możesz zacząć od krótkiej rozmowy i spokojnie sprawdzić, czy to jest dla Ciebie.</p>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="py-10 text-center text-[#6f7d78] text-sm mt-auto border-t border-[#edf4d4]">
<div className="max-w-5xl mx-auto px-6">
<p>© Joanna Karpeta. Wszelkie prawa zastrzeżone.</p>
</div>
</footer>


    </>
  );
}
