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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.querySelectorAll('.faq-button').forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            const content = button.nextElementSibling;
            const icon = button.querySelector('.arrow-icon');
            
            // Zamknij inne otwarte elementy (opcjonalnie)
            /* document.querySelectorAll('.faq-content').forEach(otherContent => {
                if (otherContent !== content) {
                    otherContent.style.maxHeight = null;
                    otherContent.parentElement.querySelector('.arrow-icon').style.transform = 'rotate(0deg)';
                    otherContent.parentElement.querySelector('.faq-button').style.borderColor = 'rgba(226, 232, 240, 0.6)';
                }
            }); 
            */

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                icon.style.transform = 'rotate(0deg)';
                button.style.borderColor = 'rgba(226, 232, 240, 0.6)';
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                icon.style.transform = 'rotate(180deg)';
                button.style.borderColor = 'rgba(198, 168, 124, 0.4)';
            }
        });
    });

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
      
<nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center">
<img alt="K Property Logo" className="bg-center w-auto h-10 md:h-12 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec926011-ed52-46a2-8908-6b66a45bbca0_320w.png"/>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
<a className="hover:text-[#C6A87C] transition-colors" href="#tarcza">Bezpieczeństwo</a>
<a className="hover:text-[#C6A87C] transition-colors" href="#proces">Proces</a>
<a className="hover:text-[#C6A87C] transition-colors" href="#system">Launchpad</a>
<a className="hover:text-[#C6A87C] transition-colors" href="#wartosc">Wartość</a>
</div>
<a className="flex items-center justify-center h-9 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#0B1C3E] rounded-lg hover:bg-[#162a52] transition-colors shadow-sm ring-1 ring-[#0B1C3E]/10" href="#kontakt">
<span className="hidden md:inline">Sprawdź termin</span>
<span className="md:hidden">Termin ➔</span>
</a>
</div>
</nav>
<section className="md:pt-32 md:pb-12 overflow-hidden pt-28 pb-8 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
<div className="absolute top-[10%] left-[10%] w-[40rem] h-[40rem] bg-[#C6A87C]/10 rounded-full blur-3xl opacity-40 mix-blend-multiply">
</div>
<div className="absolute top-[5%] right-[10%] w-[30rem] h-[30rem] bg-[#0B1C3E]/5 rounded-full blur-3xl opacity-40 mix-blend-multiply">
</div>
</div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center max-w-5xl mx-auto mb-16 fade-in-up">
<div className="flex justify-center mb-8">
<img alt="KRENT360" className="h-24 md:h-32 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7370ea13-0d2c-44e9-9f4a-b38f6e180d0d_800w.png"/>
</div>
<h1 className="md:text-5xl lg:text-6xl leading-[1.15] text-3xl font-semibold text-[#0B1C3E] tracking-tight mb-6">
    Stop niepłacącym lokatorom i kosztownym remontom.
    <span className="text-[#C6A87C]">Odzyskaj święty spokój.</span>
</h1>
<p className="md:text-2xl leading-relaxed text-xl font-medium text-slate-700 max-w-4xl mr-auto ml-auto">Filtrujemy najemców w bazach dłużników i chronimy Twój majątek Tarczą 10x silniejszą niż zwykła kaucja. My zajmujemy się mediami, urzędami i usterkami – Ty tylko sprawdzasz konto co miesiąc.</p>
</div>
<div className="mt-16 text-center fade-in-up delay-200 flex flex-col items-center">
<a className="inline-flex items-center justify-center hover:bg-[#162a52] transition-all shadow-[#0B1C3E]/20 hover:shadow-[#0B1C3E]/30 gap-2 transform hover:-translate-y-0.5 text-lg font-bold text-white bg-[#0B1C3E] h-14 rounded-xl mb-4 pr-10 pl-10 shadow-lg" href="#kontakt">
                Umów bezpłatną konsultację
            </a>
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-full bg-[#C6A87C]/10 flex items-center justify-center text-[#C6A87C] border border-[#C6A87C]/20">
<iconify-icon height="22" icon="lucide:shield-check" width="22"></iconify-icon>
</div>
<p className="text-sm md:text-base text-[#0B1C3E] tracking-wide">
<span className="font-bold">Bezpieczny start:</span> Gwarancja skuteczności
                </p>
<p className="text-[11px] text-slate-400 uppercase tracking-tighter">lub zwrot 50% opłaty startowej</p>
</div>
</div>
</div>
</section>
<section className="w-full bg-[#0B1C3E] border-y-2 border-[#C6A87C] py-12 relative overflow-hidden">
<div className="absolute inset-0 opacity-10 pointer-events-none" style={{background: 'radial-gradient(circle at center, #C6A87C 0%, transparent 70%)'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
<div className="flex flex-col items-center text-center">
<div className="mb-3"><iconify-icon className="text-[#C6A87C]" height="64" icon="lucide:calendar-check" width="64"></iconify-icon></div>
<h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tighter">5+ lat</h3>
<p className="text-[#C6A87C] text-base font-bold uppercase tracking-[0.2em] mb-4">Doświadczenia rynkowego</p>
<p className="text-white text-sm max-w-[280px] leading-relaxed font-semibold opacity-90">Stabilnie budujemy wartość Twojego portfela nieruchomości od 2019 roku.</p>
</div>
<div className="flex flex-col items-center text-center border-y md:border-y-0 md:border-x border-[#C6A87C]/30 py-10 md:py-0">
<div className="mb-3"><iconify-icon className="text-[#C6A87C]" height="64" icon="lucide:users" width="64"></iconify-icon></div>
<h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tighter">70+</h3>
<p className="text-[#C6A87C] text-base font-bold uppercase tracking-[0.2em] mb-4">Aktywnych najemców</p>
<p className="text-white text-sm max-w-[280px] leading-relaxed font-semibold opacity-90">Skala, która pozwala nam na pełną optymalizację kosztów obsługi.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="mb-3"><iconify-icon className="text-[#C6A87C]" height="64" icon="lucide:file-signature" width="64"></iconify-icon></div>
<h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tighter">300+</h3>
<p className="text-[#C6A87C] text-base font-bold uppercase tracking-[0.2em] mb-4">Obsłużonych umów</p>
<p className="text-white text-sm max-w-[280px] leading-relaxed font-semibold opacity-90">Przetestowane procedury prawne, które chronią Cię w każdym scenariuszu.</p>
</div>
</div>
</div>
</section>
<section className="border-y bg-white border-slate-200 pt-14 pb-24" id="tarcza">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-[#0B1C3E] mb-4 tracking-tight">Wynajem bez ryzyka? To możliwe.</h2>
<p className="text-lg text-slate-600">Eliminujemy 4 największe koszmary właścicieli mieszkań.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="flex flex-col items-center text-center p-8 rounded-2xl bg-rose-50/30 border border-rose-100 hover:shadow-lg transition-all">
<div className="text-rose-600 mb-6"><iconify-icon height="48" icon="lucide:ban" width="48"></iconify-icon></div>
<h4 className="text-sm font-extrabold text-rose-700 uppercase tracking-tighter mb-4 leading-tight">LOKATOR PRZESTAJE PŁACIĆ</h4>
<p className="leading-relaxed text-sm text-slate-600">Zamiast liczyć na szczęście, używamy algorytmów weryfikacji dłużników. Jeśli ktoś ma problem z płatnością, nasza kancelaria przejmuje proces eksmisji i windykacji w Twoim imieniu. Nie jesteś właścicielem – jesteś inwestorem z immunitetem.</p>
</div>
<div className="flex flex-col items-center text-center p-8 rounded-2xl bg-rose-50/30 border border-rose-100 hover:shadow-lg transition-all">
<div className="text-rose-600 mb-6"><iconify-icon height="48" icon="lucide:hammer" width="48"></iconify-icon></div>
<h4 className="text-sm font-extrabold text-rose-700 uppercase tracking-tighter mb-4 leading-tight">ZOSTAWI PO SOBIE RUINĘ</h4>
<p className="leading-relaxed text-sm text-slate-600">Zapomnij o kaucji 3000 zł, która nie starczy nawet na malowanie. System Krent™ 360 zastępuje ją ubezpieczeniem, które chroni Twoje mieszkanie do kwoty 10-krotności czynszu (np. 30 000 zł). To 10x wyższe bezpieczeństwo finansowe.</p>
</div>
<div className="flex flex-col items-center text-center p-8 rounded-2xl bg-rose-50/30 border border-rose-100 hover:shadow-lg transition-all">
<div className="text-rose-600 mb-6"><iconify-icon className="" height="48" icon="lucide:phone-off" width="48"></iconify-icon></div>
<h4 className="text-sm font-extrabold text-rose-700 uppercase tracking-tighter mb-4 leading-tight">BĘDĄ DO MNIE DZWONIĆ</h4>
<p className="leading-relaxed text-sm text-slate-600">Dla Twojego najemcy my jesteśmy właścicielem. Obsługujemy awarie o 3:00 nad ranem, zgłoszenia do administracji i wymianę żarówek. Twój numer telefonu pozostaje dla nich prywatny. Na zawsze.</p>
</div>
<div className="flex flex-col hover:shadow-lg transition-all text-center bg-rose-50/30 border-rose-100 border rounded-2xl pt-8 pr-8 pb-8 pl-8 items-center">
<div className="text-rose-600 mb-6"><iconify-icon className="" height="48" icon="lucide:hourglass" width="48"></iconify-icon></div>
<h4 className="text-sm font-extrabold text-rose-700 uppercase tracking-tighter mb-4 leading-tight">MIESZKANIE BĘDZIE PUSTE</h4>
<p className="leading-relaxed text-sm text-slate-600">Pustostan to najdroższy koszt najmu. Dzięki profesjonalnym zdjęciom, i systemowi bez kaucyjnemu , wynajmujemy mieszkania średnio o 20 dni szybciej niż rynek.</p>
</div>
</div>
</div>
</section>
<section className="overflow-hidden bg-slate-50 pt-14 pb-24" id="proces">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-[#C6A87C] font-semibold tracking-wider uppercase text-sm">Transparentność</span>
<h2 className="text-3xl md:text-5xl font-semibold text-[#0B1C3E] mt-3 mb-6">Pełna kontrola nad procesem</h2>
<p className="text-slate-600 text-lg">Zobacz, jak krok po kroku automatyzujemy obsługę Twojej nieruchomości, dbając o
        każdy detal.</p>
</div>
<style>
      .process-container {
        display: flex;
        flex-direction: row;
        gap: 40px;
        align-items: stretch;
      }

      .visual-column {
        flex: 1.2;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        overflow: hidden;
        background-color: transparent;
        position: relative;
      }

      .krent-process-img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        display: block;
        transition: transform 0.6s ease;
      }

      .visual-column:hover .krent-process-img {
        transform: scale(1.05);
      }

      .list-column {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      }

      .glass-item {
        background: #ffffff;
        border: 1px solid rgba(11, 28, 62, 0.05);
        border-radius: 12px;
        padding: 16px 24px;
        margin-bottom: 12px;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        flex-direction: column;
      }

      .glass-item:hover {
        border-color: #C6A87C;
        transform: translateX(5px);
        box-shadow: 0 10px 25px rgba(11, 28, 62, 0.08);
      }

      .step-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      }

      .step-header span {
        font-weight: 700;
        color: #0B1C3E;
        text-transform: uppercase;
        font-size: 14px;
      }

      .step-header .num {
        color: #C6A87C;
        margin-right: 8px;
        font-weight: 800;
      }

      .step-content {
        max-height: 0;
        opacity: 0;
        overflow: hidden;
        transition: all 0.3s ease;
        color: #334155;
        font-size: 15px;
        line-height: 1.6;
        font-weight: 500;
      }

      .glass-item:hover .step-content {
        max-height: 600px;
        opacity: 1;
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px solid rgba(11, 28, 62, 0.1);
      }

      .btn-krent {
        background: #0B1C3E;
        color: #C6A87C;
        padding: 18px;
        border-radius: 12px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        transition: all 0.3s ease;
        border: 2px solid #0B1C3E;
      }

      .btn-krent:hover {
        background: #C6A87C;
        color: #0B1C3E;
        border-color: #C6A87C;
      }

      @media (max-width: 1024px) {
        .process-container {
          flex-direction: column;
        }

        .visual-column {
          height: auto;
          flex: none;
        }
      }
    </style>
<div className="process-container">
<div className="visual-column">
<img alt="KRENT 360 System" className="krent-process-img object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f68141a-5f72-41d7-973f-66ed6f5cee48_1600w.png"/>
</div>
<div className="list-column">
<div className="glass-item">
<div className="step-header"><span className=""><span className="num">01.</span>
            Przygotowanie</span><span style={{color: '#C6A87C', fontSize: '18px'}}>➔</span></div>
<div className="step-content">Najemca kupuje oczami, dlatego zaczynamy od tego, by Twoja nieruchomość była
            przygotowana na najwyższym poziomie. Dzięki profesjonalnemu home stagingowi i sesji zdjęciowej 3D Twoje
            mieszkanie wyróżnia się na rynku, przyciągając więcej zainteresowanych i zwiększając jego atrakcyjność. W
            ten sposób już na starcie zyskujesz przewagę.</div>
</div>
<div className="glass-item">
<div className="step-header"><span className=""><span className="num">02.</span>
            Marketing</span><span style={{color: '#C6A87C', fontSize: '18px'}}>➔</span></div>
<div className="step-content">Dzięki naszemu unikatowemu systemowi Twój najemca nie musi wpłacać kaucji, co czyni
            Twoją ofertę bardziej atrakcyjną i wybieraną w pierwszej kolejności. Ograniczamy barierę wejścia dla
            najemców, dzięki czemu szybciej znajdujesz solidnego lokatora i minimalizujesz czas pustostanu.
          </div>
</div>
<div className="glass-item">
<div className="step-header"><span><span className="num">03.</span>
            Weryfikacja</span><span style={{color: '#C6A87C', fontSize: '18px'}}>➔</span></div>
<div className="step-content">Każdego potencjalnego najemcę najpierw sprawdzamy w bazach dłużników. To oznacza, że
            masz pewność wynajmu osobie wiarygodnej i stabilnej finansowo. Dzięki temu ryzyko problemów jest minimalne,
            a Ty zyskujesz spokój ducha.</div>
</div>
<div className="glass-item">
<div className="step-header"><span className=""><span className="num">04.</span>
            Prezentacja</span><span style={{color: '#C6A87C', fontSize: '18px'}}>➔</span></div>
<div className="step-content">Prezentacje organizujemy wyłącznie dla wcześniej zweryfikowanych kandydatów, co
            oszczędza Twój czas i zapewnia, że mieszkanie oglądają tylko poważni najemcy. To zwiększa skuteczność i
            minimalizuje ryzyko nietrafionych spotkań.</div>
</div>
<div className="glass-item">
<div className="step-header"><span className=""><span className="num">05.</span> Podpisanie
            Umowy</span><span style={{color: '#C6A87C', fontSize: '18px'}}>➔</span></div>
<div className="step-content">Dzięki wcześniejszej weryfikacji i solidnym umowom najmu Twoje interesy są w pełni
            chronione. Unikasz ryzyka odmowy wypłaty odszkodowania przez ubezpieczyciela, a protokół zdawczo-odbiorczy w
            formie fotograficznej daje Ci pewność, że każdy szczegół jest udokumentowany. Masz gwarancję pełnego
            bezpieczeństwa.</div>
</div>
<div className="glass-item">
<div className="step-header"><span className=""><span className="num">06.</span> Bieżąca
            Obsługa</span><span style={{color: '#C6A87C', fontSize: '18px'}}>➔</span></div>
<div className="step-content">Telefon od najemcy o drugiej w nocy w sprawie pękniętej rury? To już nie Twój
            problem. Jesteśmy pierwszym punktem kontaktu dla najemcy i zajmujemy się wszystkimi codziennymi obowiązkami
            za Ciebie. Zarządzamy czynszami, mediami i zgłoszeniami, a Ty masz pełen wgląd przez profil online. To pełna
            wygoda i spokój.</div>
</div>
<div className="glass-item">
<div className="step-header"><span className=""><span className="num">07.</span> Kontrola
            Mieszkań</span><span style={{color: '#C6A87C', fontSize: '18px'}}>➔</span></div>
<div className="step-content">Regularne inspekcje techniczne zapewniają, że Twoja nieruchomość jest w idealnym
            stanie. Otrzymujesz raporty, dzięki czemu zawsze wiesz, co dzieje się z Twoim mieszkaniem, bez konieczności
            osobistego nadzoru.</div>
</div>
<div className="glass-item">
<div className="step-header"><span><span className="num">08.</span> Zlecenia
            Napraw</span><span style={{color: '#C6A87C', fontSize: '18px'}}>➔</span></div>
<div className="step-content">W przypadku usterek działamy błyskawicznie i współpracujemy z zaufanymi fachowcami.
            Ty decydujesz o większych naprawach na podstawie naszych rekomendacji, a my dbamy o to, by wszystko było
            załatwione fachowo i bezproblemowo.</div>
</div>
<a className="btn-krent" href="#kontakt">SPRAWDŹ WOLNE TERMINY ➔</a>
</div>
</div>
</div>
</section>
<section className="bg-slate-50 pt-14 pb-14 border-t border-slate-200" id="jak-zaczac">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-4xl mx-auto mb-10">
<span className="text-[#C6A87C] font-semibold tracking-wider uppercase text-sm">Prosta droga</span>
<h2 className="text-3xl md:text-5xl font-semibold text-[#0B1C3E] mt-3 mb-8">Jak zaczynamy współpracę?</h2>
<div className="inline-flex flex-col md:flex-row gap-5 bg-[#C6A87C]/5 border-[#C6A87C]/30 border-2 rounded-2xl p-6 md:p-8 items-center text-center md:text-left mb-10 transition-all hover:shadow-lg hover:shadow-[#C6A87C]/10">
<div className="w-12 h-12 rounded-full bg-[#C6A87C]/10 flex items-center justify-center text-[#C6A87C] shrink-0 border border-[#C6A87C]/20">
<iconify-icon height="28" icon="lucide:alert-circle" width="28"></iconify-icon>
</div>
<div className="">
<h4 className="text-xs font-black text-[#C6A87C] uppercase tracking-[0.2em] mb-1">Ograniczona dostępność</h4>
<p className="text-base md:text-lg text-[#0B1C3E] leading-snug">
                            Przyjmujemy maksymalnie <span className="font-bold underline decoration-[#C6A87C] underline-offset-4">3 nowe mieszkania</span> w każdym miesiącu.
                        </p>
</div>
</div>
<p className="text-slate-700 text-lg md:text-xl leading-relaxed mb-6">
                    Zanim Twoja nieruchomość trafi na rynek, budujemy jej realną wartość rynkową.
                    Przygotowanie mieszkania w standardzie <strong className="text-[#0B1C3E]">KRENT360™</strong>
                    wymaga od naszego zespołu od <span className="text-[#0B1C3E] font-bold">7 do 10 dni</span> intensywnych prac.
                </p>
<p className="text-slate-500 text-base md:text-lg italic">
                    Poznaj przejrzysty proces, który oddziela Twoje obawy od realnych zysków. Bez ryzyka na starcie.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative mb-16 mt-16">
<div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-slate-200 z-0"></div>
<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-white border-2 border-[#C6A87C] flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#C6A87C] group-hover:text-white transition-all"><iconify-icon icon="lucide:message-square" width="28"></iconify-icon></div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex-1 w-full"><span className="text-[#C6A87C] font-bold text-xs uppercase tracking-widest mb-2 block">Krok 01</span><h3 className="text-lg font-bold text-[#0B1C3E] mb-3">Bezpłatna Konsultacja</h3><p className="text-sm text-slate-500">Rozmawiamy o celach.</p></div>
</div>
<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-white border-2 border-[#C6A87C] flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#C6A87C] group-hover:text-white transition-all"><iconify-icon className="" icon="lucide:bar-chart-3" width="28"></iconify-icon></div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex-1 w-full"><span className="text-[#C6A87C] font-bold text-xs uppercase tracking-widest mb-2 block">Krok 02</span><h3 className="text-lg font-bold text-[#0B1C3E] mb-3">Ocena Potencjału</h3><p className="text-sm text-slate-500">Analiza czynszu i ROI.</p></div>
</div>
<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-white border-2 border-[#C6A87C] flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#C6A87C] group-hover:text-white transition-all"><iconify-icon className="" icon="lucide:file-signature" width="28"></iconify-icon></div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex-1 w-full"><span className="text-[#C6A87C] font-bold text-xs uppercase tracking-widest mb-2 block">Krok 03</span><h3 className="text-lg font-bold text-[#0B1C3E] mb-3">Podpisanie Umowy</h3><p className="text-sm text-slate-500">Formalności.</p></div>
</div>
<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-[#0B1C3E] border-2 border-[#0B1C3E] text-[#C6A87C] flex items-center justify-center mb-6 shadow-md"><iconify-icon icon="lucide:rocket" width="28"></iconify-icon></div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex-1 w-full border-b-4 border-b-[#C6A87C]"><span className="text-[#C6A87C] font-bold text-xs uppercase tracking-widest mb-2 block">Krok 04</span><h3 className="text-lg font-bold text-[#0B1C3E] mb-3">Start (Launchpad)</h3><p className="text-sm text-slate-500">Aktywacja systemu.</p></div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center justify-center h-16 px-12 text-xl font-bold text-white bg-[#0B1C3E] rounded-xl hover:bg-[#162a52] transition-all shadow-xl gap-3 transform hover:-translate-y-1" href="#kontakt">
                    Umów bezpłatną konsultację
                    <iconify-icon height="24" icon="lucide:arrow-right" width="24"></iconify-icon>
</a>
</div>
</div>
</section>
<section className="bg-white pt-10 pb-24 border-t border-slate-100">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-[#C6A87C] font-semibold tracking-wider uppercase text-sm">Zarządzanie Ryzykiem</span>
<h2 className="text-3xl font-semibold text-[#0B1C3E] mt-3 leading-tight">Kto bierze na siebie problem, gdy coś pójdzie nie tak?</h2>
</div>
<div className="w-full border border-slate-200 rounded-3xl overflow-hidden shadow-xl">
<div className="hidden md:grid grid-cols-3 bg-slate-50 border-b border-slate-200">
<div className="py-6 pl-6 pr-3 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Scenariusz</div>
<div className="py-6 px-3 text-left text-xs font-bold text-slate-400 uppercase tracking-widest">Wynajem Samodzielny</div>
<div className="py-6 px-3 text-center bg-[#0B1C3E]">
<span className="font-bold text-[#C6A87C] uppercase text-xs tracking-[0.2em]">System KRENT360™</span>
</div>
</div>
<div className="divide-y divide-slate-200">
<div className="grid grid-cols-1 md:grid-cols-3">
<div className="py-6 md:py-8 px-6 bg-slate-50 md:bg-white flex items-center gap-3 border-b md:border-b-0 md:border-r border-slate-200">
<iconify-icon className="text-[#0B1C3E]" icon="lucide:hammer" width="20"></iconify-icon>
<span className="text-sm font-bold text-[#0B1C3E]">Najemca niszczy meble i ściany.</span>
</div>
<div className="py-6 md:py-8 px-6 text-sm text-slate-500 bg-white border-b md:border-b-0 md:border-r border-slate-100">
<span className="md:hidden block text-[10px] font-bold text-rose-400 uppercase mb-2">Samodzielnie:</span>
<div className="flex items-start gap-2">
<iconify-icon className="text-rose-400 mt-0.5 shrink-0" icon="lucide:x-circle" width="18"></iconify-icon>
<span>Kaucja (1x czynsz) znika po 2 dniach remontu. Reszta z Twojej kieszeni.</span>
</div>
</div>
<div className="py-6 md:py-8 px-6 text-sm font-medium text-white bg-[#0B1C3E]">
<span className="md:hidden block text-[10px] font-bold text-[#C6A87C] uppercase mb-2">System KRENT360™</span>
<div className="flex items-start gap-2">
<iconify-icon className="text-[#C6A87C] mt-0.5 shrink-0" icon="lucide:check-circle" width="18"></iconify-icon>
<span>Tarcza 10X pokrywa szkody do wysokości 10-krotności czynszu. Twój portfel jest nietknięty.</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3">
<div className="py-6 md:py-8 px-6 bg-slate-50 md:bg-white flex items-center gap-3 border-b md:border-b-0 md:border-r border-slate-200">
<iconify-icon className="text-[#0B1C3E]" icon="lucide:droplets" width="20"></iconify-icon>
<span className="text-sm font-bold text-[#0B1C3E]">Awaria rury w Wigilię o 22:00.</span>
</div>
<div className="py-6 md:py-8 px-6 text-sm text-slate-500 bg-white border-b md:border-b-0 md:border-r border-slate-100">
<span className="md:hidden block text-[10px] font-bold text-rose-400 uppercase mb-2">Samodzielnie:</span>
<div className="flex items-start gap-2">
<iconify-icon className="text-rose-400 mt-0.5 shrink-0" icon="lucide:x-circle" width="18"></iconify-icon>
<span className="">Odbierasz telefon, szukasz hydraulika, płacisz potrójną stawkę, tracisz wieczór.</span>
</div>
</div>
<div className="py-6 md:py-8 px-6 text-sm font-medium text-white bg-[#0B1C3E]">
<span className="md:hidden block text-[10px] font-bold text-[#C6A87C] uppercase mb-2">System KRENT360™</span>
<div className="flex items-start gap-2">
<iconify-icon className="text-[#C6A87C] mt-0.5 shrink-0" icon="lucide:check-circle" width="18"></iconify-icon>
<span>Nawet o tym nie wiesz. Nasz zespół serwisowy naprawia usterkę. Ty dostajesz tylko raport.</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3">
<div className="py-6 md:py-8 px-6 bg-slate-50 md:bg-white flex items-center gap-3 border-b md:border-b-0 md:border-r border-slate-200">
<iconify-icon className="text-[#0B1C3E]" icon="lucide:user-minus" width="20"></iconify-icon>
<span className="text-sm font-bold text-[#0B1C3E]">Najemca traci pracę i przestaje płacić.</span>
</div>
<div className="py-6 md:py-8 px-6 text-sm text-slate-500 bg-white border-b md:border-b-0 md:border-r border-slate-100">
<span className="md:hidden block text-[10px] font-bold text-rose-400 uppercase mb-2">Samodzielnie:</span>
<div className="flex items-start gap-2">
<iconify-icon className="text-rose-400 mt-0.5 shrink-0" icon="lucide:x-circle" width="18"></iconify-icon>
<span className="">Miesiące stresu, puste konto i kosztowne batalie prawne na własną rękę.</span>
</div>
</div>
<div className="py-6 md:py-8 px-6 text-sm font-medium text-white bg-[#0B1C3E]">
<span className="md:hidden block text-[10px] font-bold text-[#C6A87C] uppercase mb-2">System KRENT360™</span>
<div className="flex items-start gap-2">
<iconify-icon className="text-[#C6A87C] mt-0.5 shrink-0" icon="lucide:check-circle" width="18"></iconify-icon>
<span>Od razu uruchamiamy procedury prawne. Masz za sobą naszą kancelarię i sprawdzony proces eksmisji.</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-white border-t border-slate-200 pt-16 pb-16 relative" id="system">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<span className="text-[#C6A87C] font-semibold tracking-wider uppercase text-sm">Pakiet Aktywacyjny</span>
<h2 className="text-3xl font-semibold text-[#0B1C3E] mt-2">Co zawiera Launchpad?</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="group p-8 rounded-2xl border border-slate-200 bg-slate-50/50 text-center hover:shadow-lg transition-all">
<div className="w-16 h-16 mx-auto rounded-lg bg-[#C6A87C]/10 flex items-center justify-center text-[#C6A87C] mb-6"><iconify-icon icon="lucide:armchair" width="32"></iconify-icon></div>
<h3 className="text-lg font-bold text-[#0B1C3E] mb-2">Home Staging PRO</h3>
<p className="text-sm text-slate-600">Profesjonalna stylizacja wnętrza.</p>
</div>
<div className="group p-8 rounded-2xl border border-slate-200 bg-slate-50/50 text-center hover:shadow-lg transition-all">
<div className="w-16 h-16 mx-auto rounded-lg bg-[#C6A87C]/10 flex items-center justify-center text-[#C6A87C] mb-6"><iconify-icon icon="lucide:camera" width="32"></iconify-icon></div>
<h3 className="text-lg font-bold text-[#0B1C3E] mb-2">Sesja Foto Premium</h3>
<p className="text-sm text-slate-600">Zdjęcia, które sprzedają ofertę.</p>
</div>
<div className="group p-8 rounded-2xl border border-slate-200 bg-slate-50/50 text-center hover:shadow-lg transition-all">
<div className="w-16 h-16 mx-auto rounded-lg bg-[#C6A87C]/10 flex items-center justify-center text-[#C6A87C] mb-6"><iconify-icon icon="lucide:shield-check" width="32"></iconify-icon></div>
<h3 className="text-lg font-bold text-[#0B1C3E] mb-2">Weryfikacja Najemcy</h3>
<p className="text-sm text-slate-600">Prześwietlenie w bazach dłużników.</p>
</div>
<div className="group p-8 rounded-2xl border border-slate-200 bg-slate-50/50 text-center hover:shadow-lg transition-all">
<div className="w-16 h-16 mx-auto rounded-lg bg-[#C6A87C]/10 flex items-center justify-center text-[#C6A87C] mb-6"><iconify-icon icon="lucide:arrow-left-right" width="32"></iconify-icon></div>
<h3 className="text-lg font-bold text-[#0B1C3E] mb-2">Transfer Mediów</h3>
<p className="text-sm text-slate-600">Pełna obsługa u dostawców.</p>
</div>
</div>
</div>
</section>
<section className="overflow-hidden bg-slate-50 border-slate-200 border-t pt-20 pb-20 relative" id="wartosc">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C6A87C]/5 rounded-full blur-3xl opacity-30"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<span className="text-[#C6A87C] font-semibold tracking-wider uppercase text-sm">Transparentność Inwestycji</span>
<h2 className="text-3xl md:text-4xl font-semibold text-[#0B1C3E] mt-3">Realna Wartość Systemu KRENT360™</h2>
</div>
<div className="bg-white/50 backdrop-blur-md border border-slate-200 rounded-3xl overflow-hidden shadow-xl">
<div className="hidden md:grid grid-cols-3 bg-[#0B1C3E] text-[#C6A87C] p-5 text-xs font-bold uppercase tracking-widest border-b border-[#C6A87C]/20">
<div>Element Pakietu</div>
<div>Rozwiązanie</div>
<div className="text-right text-white">Wartość rynkowa</div>
</div>
<div className="divide-y divide-slate-200">
<div className="p-6 grid grid-cols-1 md:grid-cols-3 items-center hover:bg-white/60 transition-colors text-base">
<div className="font-bold text-[#0B1C3E] mb-1 md:mb-0">Home Staging PRO</div>
<div className="text-slate-600 font-medium mb-2 md:mb-0">Maksymalizacja atrakcyjności i czynszu</div>
<div className="text-right font-bold text-[#0B1C3E]">2 000 zł</div>
</div>
<div className="p-6 grid grid-cols-1 md:grid-cols-3 items-center hover:bg-white/60 transition-colors text-base">
<div className="font-bold text-[#0B1C3E] mb-1 md:mb-0">Sesja Foto Premium</div>
<div className="text-slate-600 font-medium mb-2 md:mb-0">Większy popyt i prestiż oferty</div>
<div className="text-right font-bold text-[#0B1C3E]">1 500 zł</div>
</div>
<div className="p-6 grid grid-cols-1 md:grid-cols-3 items-center hover:bg-white/60 transition-colors text-base">
<div className="font-bold text-[#0B1C3E] mb-1 md:mb-0">Profesjonalna Umowa Najmu</div>
<div className="text-slate-600 font-medium mb-2 md:mb-0">Pełne zabezpieczenie prawne majątku</div>
<div className="text-right font-bold text-[#0B1C3E]">3 000 zł</div>
</div>
<div className="p-6 grid grid-cols-1 md:grid-cols-3 items-center hover:bg-white/60 transition-colors text-base">
<div className="font-bold text-[#0B1C3E] mb-1 md:mb-0">Weryfikacja Najemcy 360°</div>
<div className="text-slate-600 font-medium mb-2 md:mb-0">Eliminacja osób z baz dłużników</div>
<div className="text-right font-bold text-[#0B1C3E]">2 000 zł</div>
</div>
<div className="p-6 grid grid-cols-1 md:grid-cols-3 items-center hover:bg-white/60 transition-colors text-base">
<div className="font-bold text-[#0B1C3E] mb-1 md:mb-0">Tarcza 10X (Polisa)</div>
<div className="text-slate-600 font-medium mb-2 md:mb-0">10-krotnie silniejsza ochrona niż kaucja</div>
<div className="text-right font-bold text-[#0B1C3E]">5 000 zł</div>
</div>
</div>
<div className="bg-slate-50 p-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Łączna wartość rynkowa:</span>
<p className="text-lg font-bold text-[#0B1C3E] leading-tight">Inwestujesz ułamek tej kwoty, by zarabiać bezpiecznie przez lata.</p>
</div>
<div className="text-3xl md:text-4xl font-bold text-slate-300 line-through decoration-[#C6A87C] decoration-4">13 500 zł</div>
</div>
</div>
<div className="mt-12 flex flex-col md:flex-row gap-6 text-base">
<div className="flex-1 bg-[#0B1C3E] rounded-3xl p-8 text-white shadow-xl shadow-[#0B1C3E]/20 text-center flex flex-col justify-center transform transition-all hover:scale-[1.02] border border-white/10 relative overflow-hidden">
<div className="absolute top-0 right-0 p-2 bg-[#C6A87C] text-[10px] font-bold uppercase text-[#0B1C3E] tracking-widest rounded-bl-xl">Oszczędzasz 11 500 zł</div>
<p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">Twoja Inwestycja (Na Start)</p>
<p className="text-4xl font-bold tracking-tight text-white mb-2"> od 2 500 zł </p>
<p className="text-sm text-slate-300 font-medium">/ lub równowartość 1x czynszu</p>
</div>
<div className="flex-1 bg-white border border-slate-200 rounded-3xl p-8 text-center flex flex-col justify-center shadow-sm">
<p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-3">Twoja Prowizja Miesięczna</p>
<p className="text-5xl font-bold tracking-tight text-[#0B1C3E] mb-2">15%</p>
<p className="text-sm text-slate-700 uppercase font-extrabold tracking-widest">od wpłat najemcy</p>
<div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500 italic">System 12/12: Zarabiamy tylko gdy Ty zarabiasz</div>
</div>
</div>
<p className="mt-10 text-center text-slate-600 text-sm font-medium italic leading-relaxed">Nasza prowizja finansuje się sama dzięki eliminacji pustostanów i maksymalizacji stawek czynszu.</p>
</div>
</section>
<section className="py-20 bg-[#0B1C3E] text-white relative overflow-hidden">
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#C6A87C]/10 text-[#C6A87C] mb-6 ring-1 ring-[#C6A87C]/30">
<iconify-icon height="24" icon="lucide:check-circle" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="md:text-3xl text-2xl font-medium tracking-tight mb-6">Gwarancja Płynności i Skuteczności Launchpad™
        </h2>
<p className="text-slate-300 text-lg leading-relaxed mb-0">
            Wierzymy w nasz system tak bardzo, że bierzemy ryzyko na siebie. Jeśli w ciągu 30 dni od przygotowania
            mieszkania w
            standardzie Launchpad nie podpiszemy umowy ze zweryfikowanym
            najemcą<span className="text-white font-medium border-b border-[#C6A87C]"> - zwracamy Ci 50% Twojej opłaty aktywacyjnej.</span><br/><br/>

            Nie interesują nas wymówki o „trudnym miesiącu” czy „sytuacji na rynku”. Nasz system <span className="text-white font-medium border-b border-[#C6A87C]">0 zł kaucji i 0 zł prowizji dla
                najemcy </span>generuje taki popyt, że 30 dni to dla nas bezpieczny zapas na przeprowadzenie elitarnej
            selekcji i wybór
            idealnego lokatora dla Twojego majątku.
        </p>
</div>
</section><strong className="">
<section className="bg-slate-50 border-slate-200 border-t pt-24 pb-24" id="opinie">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-[#C6A87C] font-semibold tracking-wider uppercase text-sm">Doświadczenie w liczbach</span>
<h2 className="text-3xl md:text-5xl font-semibold text-[#0B1C3E] mt-3">Dlaczego właściciele nam ufają?</h2>
<p className="text-slate-600 mt-4 text-lg">Realne historie, które potwierdzają skuteczność systemu KRENT360™.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">
<div className="flex gap-1 text-[#C6A87C] mb-6">
<iconify-icon icon="lucide:star" width="20"></iconify-icon>
<iconify-icon icon="lucide:star" width="20"></iconify-icon>
<iconify-icon icon="lucide:star" width="20"></iconify-icon>
<iconify-icon icon="lucide:star" width="20"></iconify-icon>
<iconify-icon icon="lucide:star" width="20"></iconify-icon>
</div>
<p className="text-slate-700 leading-relaxed mb-8 flex-grow italic">
          "Mieszkam na stałe w Londynie i KRENT360 to jedyny powód, dla którego jeszcze nie sprzedałem nieruchomości w
          Polsce. Zero telefonów o usterkach, zero problemów z urzędami. Przelew pojawia się na koncie co miesiąc, a ja
          nawet nie wiem, jak nazywa się lokator. Pełny pasyw."
        </p>
<div className="flex items-center gap-4 border-t border-slate-50 pt-6">
<div className="w-12 h-12 rounded-full bg-[#0B1C3E] flex items-center justify-center text-[#C6A87C] font-bold">AK
          </div>
<div className="">
<p className="text-sm font-bold text-[#0B1C3E]">Anna K.</p>
<p className="text-[10px] uppercase text-slate-400 tracking-widest">Inwestorka (Mieszkanie w Katowicach)</p>
</div>
</div>
</div>
<div className="flex flex-col hover:shadow-md transition-shadow bg-white h-full border-slate-100 border rounded-3xl pt-10 pr-10 pb-10 pl-10 shadow-sm">
<div className="flex gap-1 text-[#C6A87C] mb-6">
<iconify-icon icon="lucide:star" width="20"></iconify-icon>
<iconify-icon className="" icon="lucide:star" width="20"></iconify-icon>
<iconify-icon icon="lucide:star" width="20"></iconify-icon>
<iconify-icon icon="lucide:star" width="20"></iconify-icon>
<iconify-icon icon="lucide:star" width="20"></iconify-icon>
</div>
<p className="leading-relaxed flex-grow italic text-slate-700 mb-8">
          "Moje mieszkanie stało puste przez 2 miesiące, bo bałem się wpuścić kogoś przypadkowego. System Launchpad
          przygotował ofertę w tydzień, a zweryfikowanego najemcę mieliśmy po kolejnych 4 dniach. Szybkość i
          profesjonalizm, który po prostu widać w przelewach."
        </p>
<div className="flex items-center gap-4 border-t border-slate-50 pt-6">
<div className="w-12 h-12 rounded-full bg-[#0B1C3E] flex items-center justify-center text-[#C6A87C] font-bold">MR
          </div>
<div className="">
<p className="text-sm font-bold text-[#0B1C3E]">Marek R.</p>
<p className="text-[10px] uppercase text-slate-400 tracking-widest">Właściciel apartamentu</p>
</div>
</div>
</div>
<div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">
<div className="flex gap-1 text-[#C6A87C] mb-6">
<iconify-icon icon="lucide:star" width="20"></iconify-icon>
<iconify-icon icon="lucide:star" width="20"></iconify-icon>
<iconify-icon icon="lucide:star" width="20"></iconify-icon>
<iconify-icon icon="lucide:star" width="20"></iconify-icon>
<iconify-icon className="" icon="lucide:star" width="20"></iconify-icon>
</div>
<p className="leading-relaxed flex-grow italic text-slate-700 mb-8">"Kiedy lokator zalał parkiet, kaucja nie starczyłaby nawet na cyklinowanie. Dzięki Tarczy 10X szkoda została pokryta w całości z ubezpieczenia (do wysokości 10-krotności czynszu), a ja nie musiałem się o nic martwić. Dopiero wtedy zrozumiałem realną wartość tego systemu."</p>
<div className="flex items-center gap-4 border-t border-slate-50 pt-6">
<div className="w-12 h-12 rounded-full bg-[#0B1C3E] flex items-center justify-center text-[#C6A87C] font-bold">TJ
          </div>
<div className="">
<p className="text-sm font-bold text-[#0B1C3E]">Tomasz J.</p>
<p className="text-[10px] text-slate-400 uppercase tracking-widest">Właściciel 3 nieruchomości</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-white border-slate-200 border-t pt-14 pb-14" id="kontakt">
<div className="max-w-xl mx-auto px-6">
<div className="flex gap-4 bg-[#fef8e8] border-[#f5e1b5] border rounded-xl mb-10 p-6 items-start shadow-sm">
<svg className="text-[#b38f4d] shrink-0 mt-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01">
</path>
</svg>
<div className="">
<h4 className="text-sm font-bold text-[#8a6a32] mb-1 uppercase tracking-wide">Ostatnie wolne miejsca</h4>
<p className="text-sm text-[#8a6a32]/90 leading-relaxed">
          W tym miesiącu możemy przyjąć jeszcze tylko <span className="font-bold underline">1 nowe mieszkanie</span> do
          Launchpada. Decyduje kolejność zgłoszeń.
        </p>
</div>
</div>
<div className="text-center mb-10">
<h2 className="text-3xl font-bold text-[#0B1C3E] mb-3">Sprawdź czy Twój lokal się kwalifikuje</h2>
<p className="text-slate-600">Zostaw kontakt. Oddzwonimy w ciągu 24h.</p>
</div>
<form action="https://formsubmit.co/biuro@kproperty.pl" className="flex flex-col gap-4" method="POST">
<input name="_subject" type="hidden" value="Nowe zgłoszenie z KRENT360!"/>
<input name="_captcha" type="hidden" value="false"/>
<input name="_template" type="hidden" value="table"/>
<div className="relative">
<input className="w-full h-14 px-5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#C6A87C] focus:border-[#C6A87C] transition-all outline-none text-[#0B1C3E] placeholder:text-slate-400 font-medium" name="imie" placeholder="Imię i Nazwisko" required="" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="w-full h-14 px-5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#C6A87C] focus:border-[#C6A87C] transition-all outline-none text-[#0B1C3E] placeholder:text-slate-400 font-medium" name="telefon" placeholder="Numer telefonu" required="" type="tel"/>
<input className="w-full h-14 px-5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#C6A87C] focus:border-[#C6A87C] transition-all outline-none text-[#0B1C3E] placeholder:text-slate-400 font-medium" name="miasto" placeholder="Miasto inwestycji" required="" type="text"/>
</div>
<input className="w-full h-14 px-5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#C6A87C] focus:border-[#C6A87C] transition-all outline-none text-[#0B1C3E] placeholder:text-slate-400 font-medium" name="email" placeholder="Twój adres email" required="" type="email"/>
<button className="h-16 mt-2 bg-[#0B1C3E] text-white text-lg font-bold uppercase tracking-widest rounded-xl hover:bg-[#162a52] transition-all shadow-xl flex items-center justify-center gap-3 group" type="submit">
                    Aplikuj o konsultację
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" height="20" icon="lucide:arrow-right" width="20"></iconify-icon>
</button>
<p className="text-center text-xs text-slate-400 mt-2">
<iconify-icon className="relative top-0.5 mr-1" icon="lucide:lock"></iconify-icon>
        Twoje dane są bezpieczne. Nie wysyłamy spamu.
      </p>
</form>
</div>
<div className="flex flex-col md:flex-row text-xs text-slate-400 max-w-7xl border-slate-100 border-t mt-24 mr-auto ml-auto pt-8 pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<img alt="K Property" className="h-6 w-auto grayscale opacity-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec926011-ed52-46a2-8908-6b66a45bbca0_320w.png"/>
<span className="">© 2024 K Property Sp. z o.o.</span>
</div>
<div className="flex gap-6">
<a className="hover:text-[#0B1C3E] transition-colors" href="#">Polityka Prywatności</a>
<a className="hover:text-[#0B1C3E] transition-colors" href="#">Regulamin Usługi</a>
</div>
</div>
</section>
<section className="overflow-hidden bg-slate-50 pt-24 pb-24 relative">
<div className="absolute top-1/4 right-0 w-64 h-64 bg-[#C6A87C]/5 rounded-full blur-3xl"></div>
<div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#0B1C3E]/5 rounded-full blur-3xl"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<span className="text-[#C6A87C] font-semibold tracking-wider uppercase text-sm">Ostatnie wątpliwości</span>
<h2 className="text-3xl md:text-4xl font-semibold text-[#0B1C3E] mt-3">Często zadawane pytania</h2>
</div>
<div className="space-y-4 text-base">
<div className="faq-item group">
<button className="faq-button w-full flex items-center justify-between p-6 rounded-2xl bg-white/50 backdrop-blur-md border border-slate-200 hover:border-[#C6A87C]/40 transition-all duration-300">
<span className="text-left font-bold text-[#0B1C3E]">Dlaczego prowizja wynosi 15%, skoro inne biura biorą 10%?</span>
<iconify-icon className="text-[#C6A87C] transition-transform duration-300 arrow-icon" icon="lucide:chevron-down" width="20"></iconify-icon>
</button>
<div className="faq-content overflow-hidden max-h-0 transition-all duration-300 ease-in-out">
<div className="p-6 text-slate-600 leading-relaxed bg-white/30 backdrop-blur-sm rounded-b-2xl border-x border-b border-slate-200">
                        Zwykłe biura pobierają 10% za samo wystawienie ogłoszenia, co często kończy się pustostanem
                        trwającym miesiąc lub dwa. Koszt jednego miesiąca przerwy w najmie to strata 8,3% Twojego
                        rocznego zysku. W KRENT360™ płacisz 15%, ale dzięki systemowi
                        (pre-odbiory i prezentacje w trakcie trwania umów) Twoje
                        mieszkanie zarabia przez pełne 12 miesięcy w roku. Prowizja KRENT360™ to nie koszt – to Twoja
                        polisa na święty spokój.
                    </div>
</div>
</div>
<div className="faq-item group">
<button className="faq-button w-full flex items-center justify-between p-6 rounded-2xl bg-white/50 backdrop-blur-md border border-slate-200 hover:border-[#C6A87C]/40 transition-all duration-300">
<span className="text-left font-bold text-[#0B1C3E]">Czy brak kaucji od najemcy jest bezpieczny dla mojego mieszkania?</span>
<iconify-icon className="text-[#C6A87C] transition-transform duration-300 arrow-icon" icon="lucide:chevron-down" width="20"></iconify-icon>
</button>
<div className="faq-content overflow-hidden max-h-0 transition-all duration-300 ease-in-out">
<div className="p-6 text-slate-600 leading-relaxed bg-white/30 backdrop-blur-sm rounded-b-2xl border-x border-b border-slate-200">
                        Zwykła kaucja (1x czynsz) to tylko złudzenie bezpieczeństwa – zazwyczaj kończy się już po 2
                        dniach remontu. Nasza zastępuje kaucję ochroną do wysokości
                        . To 10x silniejszy fundament finansowy, który chroni Twój
                        portfel i majątek przed skutkami zniszczeń ścian, mebli czy drogich sprzętów AGD.
                    </div>
</div>
</div>
<div className="faq-item group">
<button className="faq-button w-full flex items-center justify-between p-6 rounded-2xl bg-white/50 backdrop-blur-md border border-slate-200 hover:border-[#C6A87C]/40 transition-all duration-300">
<span className="text-left font-bold text-[#0B1C3E]">Co robicie, gdy najemca przestaje płacić lub nie chce opuścić lokalu?</span>
<iconify-icon className="text-[#C6A87C] transition-transform duration-300 arrow-icon" icon="lucide:chevron-down" width="20"></iconify-icon>
</button>
<div className="faq-content overflow-hidden max-h-0 transition-all duration-300 ease-in-out">
<div className="p-6 text-slate-600 leading-relaxed bg-white/30 backdrop-blur-sm rounded-b-2xl border-x border-b border-slate-200">
                        W takich przypadkach nie zostawiamy Cię z kosztownymi bataliami prawnymi na własną rękę.
                        Uruchamiamy – nasz autorski, bezkompromisowy
                        system procedur operacyjno-prawnych, wspierany przez naszą kancelarię i sprawdzony proces
                        eksmisji. Pozwala nam on odzyskać kontrolę nad nieruchomością tam, gdzie inni rozkładają ręce.
                        Szczegóły protokołu omawiamy wyłącznie podczas bezpośredniej konsultacji.
                    </div>
</div>
</div>
<div className="faq-item group">
<button className="faq-button w-full flex items-center justify-between p-6 rounded-2xl bg-white/50 backdrop-blur-md border border-slate-200 hover:border-[#C6A87C]/40 transition-all duration-300">
<span className="text-left font-bold text-[#0B1C3E]">Dlaczego nie pobieracie prowizji od najemcy?</span>
<iconify-icon className="text-[#C6A87C] transition-transform duration-300 arrow-icon" icon="lucide:chevron-down" width="20"></iconify-icon>
</button>
<div className="faq-content overflow-hidden max-h-0 transition-all duration-300 ease-in-out">
<div className="p-6 text-slate-600 leading-relaxed bg-white/30 backdrop-blur-sm rounded-b-2xl border-x border-b border-slate-200">
                        Pobieranie prowizji od najemcy buduje barierę wejścia, która odstrasza 80% rzetelnych
                        kandydatów. My chcemy, aby o Twoje mieszkanie ubiegało się kilkudziesięciu chętnych w jeden
                        weekend. Dzięki temu nie musimy brać „kogokolwiek, kto ma gotówkę”, ale możemy przeprowadzić
                        rygorystyczną selekcję i wybrać najemcę o najwyższym profilu wiarygodności finansowej.
                    </div>
</div>
</div>
<div className="faq-item group">
<button className="faq-button flex hover:border-[#C6A87C]/40 transition-all duration-300 bg-white/50 w-full border-slate-200 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-md items-center justify-between" style={{borderColor: 'rgba(198, 168, 124, 0.4)'}}>
<span className="text-left font-bold text-[#0B1C3E]">Czy muszę płacić za Launchpad, jeśli mam już profesjonalne zdjęcia?</span>
<iconify-icon className="text-[#C6A87C] transition-transform duration-300 arrow-icon" icon="lucide:chevron-down" style={{transform: 'rotate(180deg)'}} width="20"></iconify-icon>
</button>
<div className="faq-content overflow-hidden max-h-0 transition-all duration-300 ease-in-out" style={{maxHeight: '179px'}}>
<div className="p-6 text-slate-600 leading-relaxed bg-white/30 backdrop-blur-sm rounded-b-2xl border-x border-b border-slate-200">
                        System Launchpad™ to nie tylko estetyka, to fundament techniczny Twojego bezpieczeństwa. W
                        ramach opłaty przeprowadzamy audyt instalacji, certyfikację standardu technicznego oraz
                        przygotowujemy dokumentację niezbędną do objęcia lokalu . Bez tego
                        etapu nie jesteśmy w stanie zagwarantować Ci bezkosztowego usuwania awarii ani pełnego pokrycia
                        szkód przez nasz system ochrony.
                    </div>
</div>
</div>
</div>
</div>
</section>

</strong>
<footer className="bg-[#0B1C3E] text-slate-400 py-16 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
<div className="space-y-6">
<div className="flex items-center gap-3">
<img alt="K Property" className="h-8 w-auto brightness-0 invert opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec926011-ed52-46a2-8908-6b66a45bbca0_320w.png"/>
<div className="h-6 w-px bg-white/10 hidden sm:block"></div>
<span className="text-white font-bold tracking-widest text-xs uppercase">KRENT360™ System</span>
</div>
<div className="text-xs leading-relaxed space-y-2">
<p className="text-white font-semibold">KPROPERTY RENT SP. Z O.O.</p>
<p>Ul. Złota 75a/7, 00-819 Warszawa</p>
<p>NIP: 5273073992 | KRS: 0001055733</p>
</div>
</div>
<div className="flex flex-col md:items-end justify-between h-full space-y-8">
<div className="flex flex-wrap gap-6 md:gap-8 text-xs font-medium">
<a className="hover:text-white transition-colors" href="#tarcza">Bezpieczeństwo</a>
<a className="hover:text-white transition-colors" href="#proces">Proces</a>
<a className="hover:text-white transition-colors" href="#wartosc">Wartość</a>
<a className="hover:text-white transition-colors" href="#kontakt">Kontakt</a>
</div>
<div className="flex flex-wrap gap-6 text-[11px] uppercase tracking-wider font-bold">
<a className="text-[#C6A87C] hover:text-white transition-colors" href="#">Polityka Prywatności</a>
<a className="text-[#C6A87C] hover:text-white transition-colors" href="#">Regulamin Usługi</a>
<a className="text-[#C6A87C] hover:text-white transition-colors" href="#">Wzór Umowy</a>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] uppercase tracking-tighter">
        © 2024 K Property Sp. z o.o. Wszystkie prawa zastrzeżone.
      </p>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-[10px] uppercase tracking-tighter text-slate-500">System operacyjny KRENT360™ Live</span>
</div>
</div>
</div>
</footer>
    </>
  );
}
