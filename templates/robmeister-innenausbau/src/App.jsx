import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
navy: {
50: '#f0f3f8',
100: '#dde5ef',
800: '#233659',
900: '#1B2A4A',
950: '#111a2e',
},
amber: {
500: '#e69a10',
600: '#D4890A',
700: '#b37307',
},
offwhite: '#FCFCFC'
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      function switchLanguage(lang) {
          document.documentElement.lang = lang;

          // Toggle visibility of blocks based on language
          document.querySelectorAll('[data-lang]').forEach(el => {
              if(el.getAttribute('data-lang') === lang) {
                  el.classList.remove('hidden');
              } else {
                  el.classList.add('hidden');
              }
          });

          // Update button opacities
          document.querySelectorAll('.lang-btn').forEach(btn => {
              if(btn.getAttribute('data-btn-lang') === lang) {
                  btn.style.opacity = '1';
              } else {
                  btn.style.opacity = '0.4';
              }
          });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed transition-all duration-300 z-40 bg-white/85 w-full border-gray-100 border-b top-0 left-0 backdrop-blur-md">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex flex-col text-navy-900" href="#">
<span className="leading-none text-xl font-semibold tracking-tighter">
            RobMeister
          </span>
<span className="uppercase text-xs font-medium text-gray-500 tracking-tight mt-1 hidden" data-lang="pl">
            Nowoczesne Wnętrza
          </span>
<span className="uppercase text-xs font-medium text-gray-500 tracking-tight mt-1" data-lang="de">
            Moderner Innenausbau
          </span>
</a>
<nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
<a className="text-sm font-medium text-gray-600 hover:text-navy-900 transition-colors" href="#o-mnie">
<span className="hidden" data-lang="pl">O mnie</span>
<span className="" data-lang="de">Über mich</span>
</a>
<a className="text-sm font-medium text-gray-600 hover:text-navy-900 transition-colors" href="#uslugi">
<span className="hidden" data-lang="pl">Usługi</span>
<span className="" data-lang="de">Leistungen</span>
</a>
<a className="hover:text-navy-900 transition-colors text-sm font-medium text-gray-600" href="#realizacje">
<span className="hidden" data-lang="pl">Realizacje</span>
<span className="" data-lang="de">Projekte</span>
</a>
<a className="text-sm font-medium text-gray-600 hover:text-navy-900 transition-colors" href="#cennik">
<span className="hidden" data-lang="pl">Cennik</span>
<span className="" data-lang="de">Preise</span>
</a>
</nav>
<div className="flex items-center gap-4 z-50">
<a className="hidden lg:flex items-center gap-2 hover:text-amber-600 transition-colors text-sm font-semibold text-navy-900" href="tel:+48517792814">+48 517 792 814</a>
<a className="hidden sm:inline-flex bg-navy-900 hover:bg-navy-800 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-sm" href="#kontakt">
<span className="hidden" data-lang="pl">Kontakt</span>
<span className="" data-lang="de">Kontakt</span>
</a>

<div className="flex items-center gap-2 pl-4 border-l border-gray-200">
<button className="w-6 h-6 rounded-full overflow-hidden border border-gray-200 hover:opacity-100 transition-opacity lang-btn shadow-sm" data-btn-lang="pl" onclick="switchLanguage('pl')" style={{opacity: '0.4'}}>
<img alt="PL" className="w-full h-full object-cover" src="https://flagcdn.com/pl.svg"/>
</button>
<button className="w-6 h-6 rounded-full overflow-hidden border border-gray-200 hover:opacity-100 transition-opacity lang-btn shadow-sm" data-btn-lang="de" onclick="switchLanguage('de')" style={{opacity: '1'}}>
<img alt="DE" className="w-full h-full object-cover" src="https://flagcdn.com/de.svg"/>
</button>
</div>
</div>
</div>
</header>
<main className="">

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center min-h-[90vh]">

<div className="absolute inset-0 z-0 hidden" data-lang="pl">
<img alt="Container background" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" data-container-bg="true" sizes="(max-width: 768px) 500px, 2000px" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a3caae70-9346-4c37-94eb-57f86d20aece_3840w.jpg" srcset="https://www.aura.build/asset/25605                                                                                             1500w, https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a3caae70-9346-4c37-94eb-57f86d20aece_3840w.jpg 3840w"/>
<img alt="Wykończone wnętrze salonu" className="object-center object-auto w-full h-full object-cover pr-2 pl-2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a3caae70-9346-4c37-94eb-57f86d20aece_3840w.jpg"/>
<div className="bg-gradient-to-r from-white/95 via-white/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="absolute inset-0 z-0" data-lang="de">
<img alt="Zimmer" className="object-center mix-blend-normal w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a3caae70-9346-4c37-94eb-57f86d20aece_1600w.jpg" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)'}}/>
<div className="bg-gradient-to-r from-white/95 via-white/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="max-w-2xl hidden" data-lang="pl">
<h1 className="md:text-6xl leading-[1.1] text-4xl font-semibold text-navy-900 tracking-tighter mb-6">
              RobMeister
              <br/>
<span className="font-medium text-gray-400">Wykończenia Wnętrz</span>
</h1>
<p className="leading-relaxed md:text-2xl text-lg font-bold text-gray-800 mb-10">
              Profesjonalne usługi remontowe i wykończeniowe. Precyzja,
              terminowość i dbałość o każdy detal w Twoim nowym wnętrzu.
            </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<a className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white text-base font-medium px-8 py-3.5 rounded-full transition-all shadow-sm" href="tel:+48600123456">
<iconify-icon icon="solar:phone-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
                Zadzwoń teraz
              </a>
<a className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-navy-900 border border-gray-200 text-base font-medium px-8 py-3.5 rounded-full transition-all shadow-sm" href="#kontakt">
                Zapytaj o wycenę
              </a>
</div>
<div className="flex items-center gap-6 text-sm text-gray-500 font-medium border-t border-gray-200/60 pt-6"></div>
</div>

<div className="max-w-2xl" data-lang="de">
<h1 className="md:text-6xl leading-[1.1] text-4xl font-semibold text-navy-900 tracking-tighter mb-6">
              RobMeister
              <br/>
<span className="text-gray-400 font-medium">Innenausbau</span>
</h1>
<p className="leading-relaxed md:text-2xl text-lg font-bold text-gray-800 mb-10">
              Professionelle Renovierungs- und Ausbaudienstleistungen.
              Präzision, Pünktlichkeit und Liebe zum Detail für Ihr neues
              Zuhause.
            </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12 gap-x-4 gap-y-4">
<a className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white text-base font-medium px-8 py-3.5 rounded-full transition-all shadow-sm" href="tel:+48600123456">
<iconify-icon icon="solar:phone-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
                Jetzt anrufen
              </a>
<a className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-navy-900 border border-gray-200 text-base font-medium px-8 py-3.5 rounded-full transition-all shadow-sm" href="#kontakt">
                Angebot anfordern
              </a>
</div>
<div className="flex gap-6 text-sm font-medium text-gray-500 border-gray-200/60 pt-6 gap-x-6 gap-y-6 items-center">
</div>
</div>
</div>
</section>

<section className="border-y bg-navy-900 border-navy-800 pt-12 pb-12">
<div className="max-w-7xl mx-auto px-6">

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 text-center hidden" data-lang="pl">
<div className="px-4">
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tighter mb-1">
                15+
              </div>
<div className="text-sm text-navy-100 font-light">
                Lat doświadczenia
              </div>
</div>
<div className="px-4">
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tighter mb-1">
                300+
              </div>
<div className="text-sm text-navy-100 font-light">
                Zrealizowanych projektów
              </div>
</div>
<div className="px-4">
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tighter mb-1">
                100%
              </div>
<div className="text-sm text-navy-100 font-light">
                Zadowolonych klientów
              </div>
</div>
<div className="px-4">
<div className="text-3xl font-semibold text-white tracking-tighter mt-1 mb-1 md:text-3xl">
                Zielona Góra
              </div>
<div className="text-sm font-light text-navy-100">
                i okolice (+80km)
              </div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 text-center" data-lang="de">
<div className="px-4">
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tighter mb-1">
                15+
              </div>
<div className="text-sm text-navy-100 font-light">
                Jahre Erfahrung
              </div>
</div>
<div className="px-4">
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tighter mb-1">
                300+
              </div>
<div className="text-sm text-navy-100 font-light">
                Abgeschlossene Projekte
              </div>
</div>
<div className="px-4">
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tighter mb-1">
                100%
              </div>
<div className="text-sm text-navy-100 font-light">
                Zufriedene Kunden
              </div>
</div>
<div className="px-4">
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tighter mb-1">
                Berlin
              </div>
<div className="text-sm text-navy-100 font-light">
                &amp; Region (+100km)
              </div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="o-mnie">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid md:grid-cols-2 gap-x-16 gap-y-16 items-center">
<div className="overflow-hidden bg-gray-100 max-w-fit max-h-fit rounded-2xl relative">
<img className="object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2cde3a24-66a5-4dc8-8dc9-3da54b79acf3_1600w.jpg"/>
<div className="ring-inset max-w-fit max-h-fit ring-black/10 ring-1 rounded-2xl absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="hidden" data-lang="pl">
<h2 className="text-3xl md:text-4xl font-semibold text-navy-900 tracking-tighter mb-6">
                Kilka słów o mnie
              </h2>
<div className="space-y-4 text-base text-gray-600 font-light leading-relaxed mb-10">
<p className="">
                  Nazywam się Robert i od ponad dekady zajmuję się
                  profesjonalnym wykańczaniem wnętrz. Moja praca to nie tylko
                  zawód, ale przede wszystkim rzemiosło, w którym stawiam na
                  najwyższą jakość i zadowolenie klienta.
                </p>
<p className="">
                  Pracuję głównie na terenie Zielonej Góry i okolic. Posiadam
                  własny, nowoczesny park maszynowy i profesjonalne narzędzia,
                  co pozwala mi na szybką, czystą i precyzyjną realizację
                  zleceń. Zawsze dbam o porządek w miejscu pracy i dotrzymuję
                  ustalonych terminów. Wykonuję bezpłatne oględziny i wyceny
                  przed rozpoczęciem prac.
                </p>
</div>
<div className="grid grid-cols-2 gap-y-6 gap-x-4">
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-full bg-navy-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-navy-900" icon="solar:shield-check-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-0.5">
                      Solidność
                    </h4>
<p className="text-xs text-gray-500 font-light">
                      Materiały najwyższej jakości
                    </p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-full bg-navy-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-navy-900" icon="solar:clock-circle-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-semibold text-gray-900 mb-0.5">
                      Punktualność
                    </h4>
<p className="text-xs text-gray-500 font-light">
                      Zawsze w terminie
                    </p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-full bg-navy-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-navy-900" icon="solar:case-minimalistic-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-0.5">
                      Własne narzędzia
                    </h4>
<p className="text-xs text-gray-500 font-light">
                      Profesjonalny sprzęt
                    </p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-full bg-navy-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-navy-900" icon="solar:calculator-minimalistic-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-semibold text-gray-900 mb-0.5">
                      Bezpłatna wycena
                    </h4>
<p className="text-xs text-gray-500 font-light">
                      Jasne zasady współpracy
                    </p>
</div>
</div>
</div>
</div>

<div className="gap-x-16 gap-y-16" data-lang="de">
<h2 className="text-3xl md:text-4xl font-semibold text-navy-900 tracking-tighter mb-6">
                Ein paar Worte über mich
              </h2>
<div className="space-y-4 text-base text-gray-600 font-light leading-relaxed mb-10">
<p className="">
                  Mein Name ist Robert (ROB) und ich beschäftige mich seit über
                  einem Jahrzehnt mit professionellem Innenausbau. Meine Arbeit
                  ist nicht nur ein Beruf, sondern vor allem ein Handwerk, bei
                  dem höchste Qualität und Kundenzufriedenheit an erster Stelle
                  stehen.
                </p>
<p className="">
                  Ich arbeite hauptsächlich im Raum Berlin. Ich verfüge über
                  eigene, moderne Maschinen und professionelle Werkzeuge, was
                  mir eine schnelle, saubere und präzise Ausführung der Aufträge
                  ermöglicht. Ich achte stets auf Ordnung am Arbeitsplatz und
                  halte vereinbarte Termine ein. Vor Arbeitsbeginn führe ich
                  kostenlose Besichtigungen und Schätzungen durch.
                </p>
</div>
<div className="grid grid-cols-2 gap-y-6 gap-x-4">
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-full bg-navy-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-navy-900" icon="solar:shield-check-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-semibold text-gray-900 mb-0.5">
                      Zuverlässigkeit
                    </h4>
<p className="text-xs text-gray-500 font-light">
                      Hochwertige Materialien
                    </p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-full bg-navy-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-navy-900" icon="solar:clock-circle-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-semibold text-gray-900 mb-0.5">
                      Pünktlichkeit
                    </h4>
<p className="text-xs text-gray-500 font-light">
                      Immer termingerecht
                    </p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-full bg-navy-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-navy-900" icon="solar:case-minimalistic-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-semibold text-gray-900 mb-0.5">
                      Eigene Werkzeuge
                    </h4>
<p className="text-xs text-gray-500 font-light">
                      Professionelle Ausrüstung
                    </p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-full bg-navy-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-navy-900" icon="solar:calculator-minimalistic-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-semibold text-gray-900 mb-0.5">
                      Kostenlose Schätzung
                    </h4>
<p className="text-xs text-gray-500 font-light">
                      Klare Regeln der Zusammenarbeit
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-gray-100 pt-24 pb-24" id="uslugi">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16 hidden" data-lang="pl">
<h2 className="text-3xl md:text-4xl font-semibold text-navy-900 tracking-tighter mb-4">
              Zakres usług
            </h2>
<p className="text-base text-gray-600 font-light max-w-2xl mx-auto">
              Kompleksowe prace wykończeniowe dostosowane do Twoich potrzeb.
            </p>
</div>

<div className="text-center mb-16" data-lang="de">
<h2 className="text-3xl md:text-4xl font-semibold text-navy-900 tracking-tighter mb-4">
              Unsere Leistungen
            </h2>
<p className="text-base text-gray-600 font-light max-w-2xl mx-auto">
              Umfassende Ausbauarbeiten, die auf Ihre Bedürfnisse zugeschnitten
              sind.
            </p>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 hidden" data-lang="pl">
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:pallete-2-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-navy-900 tracking-tight mb-2">
                Malowanie wnętrz
              </h3>
<p className="text-sm text-gray-600 font-light leading-relaxed">
                Profesjonalne malowanie ścian i sufitów, gwarantujące
                równomierne krycie i brak smug.
              </p>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:magic-stick-3-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-navy-900 tracking-tight mb-2">
                Szpachlowanie i gładzie
              </h3>
<p className="text-sm text-gray-600 font-light leading-relaxed">
                Przygotowanie idealnie gładkich powierzchni, gotowych pod
                malowanie na najwyższym poziomie.
              </p>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:wallpaper-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-navy-900 tracking-tight mb-2">
                Tapetowanie
              </h3>
<p className="text-sm text-gray-600 font-light leading-relaxed">
                Precyzyjny montaż tapet dekoracyjnych różnych typów, w tym
                winylowych i flizelinowych.
              </p>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:ruler-cross-pen-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-navy-900 tracking-tight mb-2">
                Naprawy ubytków
              </h3>
<p className="text-sm text-gray-600 font-light leading-relaxed">
                Skuteczne wypełnianie pęknięć, dziur i innych ubytków w
                strukturze ścian oraz sufitów.
              </p>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:shield-check-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-navy-900 tracking-tight mb-2">
                Gruntowanie i impregnacja
              </h3>
<p className="text-sm text-gray-600 font-light leading-relaxed">
                Odpowiednie przygotowanie powierzchni zapewniające maksymalną
                trwałość wykończenia.
              </p>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:city-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-navy-900 tracking-tight mb-2">
                Malowanie elewacji
              </h3>
<p className="text-sm text-gray-600 font-light leading-relaxed">
                Zewnętrzne prace malarskie i renowacja elewacji budynków przy
                użyciu trwałych farb.
              </p>
</div>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" data-lang="de">
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:pallete-2-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-navy-900 tracking-tight mb-2">
                Innenanstrich
              </h3>
<p className="text-sm text-gray-600 font-light leading-relaxed">
                Professioneller Anstrich von Wänden und Decken, der eine
                gleichmäßige Deckkraft ohne Streifen garantiert.
              </p>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:magic-stick-3-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-navy-900 tracking-tight mb-2">
                Spachteln und Glätten
              </h3>
<p className="text-sm text-gray-600 font-light leading-relaxed">
                Vorbereitung perfekt glatter Oberflächen, bereit für das
                Streichen auf höchstem Niveau.
              </p>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:wallpaper-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-navy-900 tracking-tight mb-2">
                Tapezieren
              </h3>
<p className="text-sm text-gray-600 font-light leading-relaxed">
                Präzise Montage von dekorativen Tapeten verschiedener Art,
                einschließlich Vinyl- und Vliestapeten.
              </p>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:ruler-cross-pen-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-navy-900 tracking-tight mb-2">
                Reparatur von Mängeln
              </h3>
<p className="text-sm text-gray-600 font-light leading-relaxed">
                Effektives Füllen von Rissen, Löchern und anderen Mängeln in der
                Struktur von Wänden und Decken.
              </p>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:shield-check-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-navy-900 tracking-tight mb-2">
                Grundierung &amp; Imprägnierung
              </h3>
<p className="text-sm text-gray-600 font-light leading-relaxed">
                Richtige Vorbereitung der Oberfläche für maximale Haltbarkeit
                des Finishs.
              </p>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:city-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-navy-900 tracking-tight mb-2">
                Fassadenanstrich
              </h3>
<p className="text-sm text-gray-600 font-light leading-relaxed">
                Äußere Malerarbeiten und Renovierung von Gebäudefassaden mit
                langlebigen Farben.
              </p>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="realizacje">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="hidden" data-lang="pl">
<h2 className="text-3xl md:text-4xl font-semibold text-navy-900 tracking-tighter mb-4">
                Nasze realizacje
              </h2>
<p className="text-base text-gray-600 font-light">
                Przykłady wnętrz odmienionych dzięki mojej pracy.
              </p>
</div>
<div className="" data-lang="de">
<h2 className="text-3xl md:text-4xl font-semibold text-navy-900 tracking-tighter mb-4">
                Meine Projekte
              </h2>
<p className="text-base text-gray-600 font-light">
                Beispiele für durch meine Arbeit verwandelte Innenräume.
              </p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
<div className="group relative rounded-2xl overflow-hidden aspect-square bg-gray-100">
<img alt="Projekt 1" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/08e58c50-bebd-4f37-b4ff-89435e239702_800w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity flex bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent opacity-0 pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-end">
<span className="text-sm font-medium text-white hidden" data-lang="pl">
                  Nowy salon – Berlin
                </span>
<span className="text-white text-sm font-medium" data-lang="de">
                  Gipsglätten – Warschau
                </span>
</div>
</div>
<div className="group relative rounded-2xl overflow-hidden aspect-square bg-gray-100">
<img alt="Projekt 2" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2b8b046e-aeee-4734-84cd-179192ba77eb_800w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity flex bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent opacity-0 pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-end">
<span className="text-sm font-medium text-white hidden" data-lang="pl">
                  Malowanie ścian – Drezno
                </span>
<span className="text-white text-sm font-medium" data-lang="de">
                  Schlafzimmer streichen – Warschau
                </span>
</div>
</div>
<div className="group relative rounded-2xl overflow-hidden aspect-square bg-gray-100 sm:hidden lg:block">
<img alt="Projekt 3" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0d52d34-085b-49f7-88a5-bdc9dbccbaa9_800w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity flex bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent opacity-0 pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-end">
<span className="text-sm font-medium text-white hidden" data-lang="pl">
                  Fototapeta w salonie – Lieberose
                </span>
<span className="text-white text-sm font-medium" data-lang="de">
                  Wandrenovierung – Wola
                </span>
</div>
</div>
<div className="group relative rounded-2xl overflow-hidden aspect-square bg-gray-100">
<img alt="Projekt 4" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/066b6884-1b12-41ca-8c7e-50c3c0882442_800w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity flex bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent opacity-0 pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-end">
<span className="text-sm font-medium text-white hidden" data-lang="pl">
                  Tapetowanie biura – Cottbus
                </span>
<span className="text-white text-sm font-medium" data-lang="de">
                  Tapezieren – Ursynów
                </span>
</div>
</div>
<div className="group relative rounded-2xl overflow-hidden aspect-square bg-gray-100">
<img alt="Projekt 5" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3d7ca908-c768-4ec1-90bc-9f9de7ec93e5_800w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity flex bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent opacity-0 pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-end">
<span className="text-sm font-medium text-white hidden" data-lang="pl">
                  Malowanie sypialni – Luckenwalde
                </span>
<span className="text-white text-sm font-medium" data-lang="de">
                  Büro streichen – Zentrum
                </span>
</div>
</div>
<div className="group relative rounded-2xl overflow-hidden aspect-square bg-gray-100 sm:hidden lg:block">
<img alt="Projekt 6" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b79b6fa2-bef0-4f73-8b65-5833f0f091e7_800w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity flex bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent opacity-0 pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-end">
<span className="text-sm font-medium text-white hidden" data-lang="pl">
                  Pokój dziecięcy – Poczdam
                </span>
<span className="text-white text-sm font-medium" data-lang="de">
                  Kompletter Innenausbau – Region Warschau
                </span>
</div>
</div>
</div>
<div className="flex justify-center" hidden="">
<a className="inline-flex items-center gap-2 text-sm font-medium text-navy-900 hover:text-amber-600 transition-colors" href="#">
<iconify-icon className="hidden" icon="solar:global-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<span data-lang="pl" hidden="">
                Więcej realizacji na naszym Facebooku
              </span>
<span className="hidden" data-lang="de">
                Mehr Projekte auf unserem Facebook
              </span>
</a>
</div>
</div>
</section>

<section className="border-y overflow-hidden border-gray-100 pt-24 pb-24">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="text-center mb-16 hidden" data-lang="pl">
<h2 className="text-3xl md:text-4xl font-semibold text-navy-900 tracking-tighter mb-4">
              Co mówią klienci
            </h2>
<p className="text-base text-gray-600 font-light max-w-2xl mx-auto">
              Opinie osób, które zaufały mojemu doświadczeniu.
            </p>
</div>

<div className="text-center mb-16" data-lang="de">
<h2 className="text-3xl md:text-4xl font-semibold text-navy-900 tracking-tighter mb-4">
              Was Kunden sagen
            </h2>
<p className="text-base text-gray-600 font-light max-w-2xl mx-auto">
              Meinungen von Menschen, die meiner Erfahrung vertraut haben.
            </p>
</div>

<div className="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 hidden" data-lang="pl">
<div className="min-w-[85vw] md:min-w-0 snap-center bg-white p-8 rounded-2xl border border-gray-100 shadow-sm shrink-0">
<div className="flex gap-1 mb-4 text-amber-500">
<iconify-icon icon="solar:star-bold" style={{fontSize: '1.1rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{fontSize: '1.1rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{fontSize: '1.1rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{fontSize: '1.1rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{fontSize: '1.1rem'}}></iconify-icon>
</div>
<p className="leading-relaxed font-light italic text-gray-700 mb-6">
                "Praca wykonana solidnie i na czas. Efekt końcowy przeszedł
                nasze najśmielsze oczekiwania. Polecam Pana Roberta z czystym
                sumieniem każdemu!"
              </p>
<div className="text-sm font-semibold text-navy-900">
                Pani Krystyna Z., Zielona Góra
              </div>
</div>
<div className="min-w-[85vw] md:min-w-0 snap-center shrink-0 bg-white border-gray-100 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="flex gap-1 mb-4 text-amber-500">
<iconify-icon className="" icon="solar:star-bold" style={{fontSize: '1.1rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{fontSize: '1.1rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{fontSize: '1.1rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{fontSize: '1.1rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{fontSize: '1.1rem'}}></iconify-icon>
</div>
<p className="leading-relaxed font-light italic text-gray-700 mb-6">
                "Robert zostawił mieszkanie czyste i zadbane po zakończeniu
                prac. Gładzie są idealne, a malowanie perfekcyjne. Pełen
                profesjonalizm."
              </p>
<div className="text-sm font-semibold text-navy-900">
                Pan Waldemar T., Lubsko
              </div>
</div>
</div>

<div className="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0" data-lang="de">
<div className="min-w-[85vw] md:min-w-0 snap-center bg-white p-8 rounded-2xl border border-gray-100 shadow-sm shrink-0">
<div className="flex gap-1 mb-4 text-amber-500">
<iconify-icon icon="solar:star-bold" style={{fontSize: '1.1rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{fontSize: '1.1rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{fontSize: '1.1rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{fontSize: '1.1rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{fontSize: '1.1rem'}}></iconify-icon>
</div>
<p className="leading-relaxed font-light italic text-gray-700 mb-6">
                "Die Arbeit wurde solide und pünktlich ausgeführt. Das
                Endergebnis hat unsere kühnsten Erwartungen übertroffen. Ich
                empfehle Herrn Robert jedem mit gutem Gewissen!"
              </p>
<div className="text-sm font-semibold text-navy-900">
                Frau Anna K., Dresden
              </div>
</div>
<div className="min-w-[85vw] md:min-w-0 snap-center shrink-0 bg-white border-gray-100 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="flex gap-1 mb-4 text-amber-500">
<iconify-icon icon="solar:star-bold" style={{fontSize: '1.1rem'}}></iconify-icon>
<iconify-icon className="" icon="solar:star-bold" style={{fontSize: '1.1rem'}}></iconify-icon>
<iconify-icon className="" icon="solar:star-bold" style={{fontSize: '1.1rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{fontSize: '1.1rem'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{fontSize: '1.1rem'}}></iconify-icon>
</div>
<p className="leading-relaxed font-light italic text-gray-700 mb-6">
                "Robert hinterließ die Wohnung nach Abschluss der Arbeiten
                sauber und gepflegt. Die Spachtelarbeiten sind ideal und der
                Anstrich perfekt. Volle Professionalität."
              </p>
<div className="text-sm font-semibold text-navy-900">
                Herr Marcus T., Berlin
              </div>
</div>
</div>
<div className="text-center mt-10" hidden="">
<a className="inline-flex items-center gap-2 text-sm font-medium text-navy-900 hover:text-amber-600 transition-colors" href="#">
<span className="hidden" data-lang="pl">
                Zobacz wszystkie opinie na Google Maps
              </span>
<span className="hidden" data-lang="de">
                Alle Bewertungen auf Google Maps ansehen
              </span>
<iconify-icon className="" icon="solar:arrow-right-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="cennik">
<div className="max-w-4xl mr-auto ml-auto pr-6 pl-6">

<div className="text-center mb-16 hidden" data-lang="pl">
<h2 className="text-3xl md:text-4xl font-semibold text-navy-900 tracking-tighter mb-4">
              Orientacyjny cennik
            </h2>
<p className="text-base text-gray-600 font-light">
              Transparentne ceny. Dokładna wycena ustalana jest po bezpłatnych
              oględzinach.
            </p>
</div>

<div className="text-center mb-16" data-lang="de">
<h2 className="text-3xl md:text-4xl font-semibold text-navy-900 tracking-tighter mb-4">
              Ungefähre Preisliste
            </h2>
<p className="text-base text-gray-600 font-light">
              Transparente Preise. Die genaue Schätzung erfolgt nach einer
              kostenlosen Besichtigung vor Ort.
            </p>
</div>

<div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-8 hidden" data-lang="pl">
<div className="divide-y divide-gray-100">
<div className="flex justify-between items-center p-5 hover:bg-gray-50 transition-colors">
<span className="text-base font-medium text-gray-800">
                  Malowanie ścian i sufitów
                </span>
<span className="text-base font-semibold text-navy-900">
                  od 12 zł / m²
                </span>
</div>
<div className="flex justify-between items-center p-5 hover:bg-gray-50 transition-colors">
<span className="text-base font-medium text-gray-800">
                  Gładź jednowarstwowa
                </span>
<span className="text-base font-semibold text-navy-900">
                  od 25 zł / m²
                </span>
</div>
<div className="flex justify-between items-center p-5 hover:bg-gray-50 transition-colors">
<span className="text-base font-medium text-gray-800">
                  Gładź dwuwarstwowa
                </span>
<span className="text-base font-semibold text-navy-900">
                  od 40 zł / m²
                </span>
</div>
<div className="flex justify-between items-center p-5 hover:bg-gray-50 transition-colors">
<span className="text-base font-medium text-gray-800">
                  Tapetowanie
                </span>
<span className="text-base font-semibold text-navy-900">
                  od 20 zł / m²
                </span>
</div>
<div className="flex justify-between items-center p-5 hover:bg-gray-50 transition-colors">
<span className="text-base font-medium text-gray-800">
                  Naprawy ubytków
                </span>
<span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  wycena indywidualna
                </span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-8" data-lang="de">
<div className="divide-y divide-gray-100">
<div className="flex justify-between items-center p-5 hover:bg-gray-50 transition-colors">
<span className="text-base font-medium text-gray-800">
                  Streichen von Wänden und Decken
                </span>
<span className="text-base font-semibold text-navy-900">
                  ab 5 € / m²
                </span>
</div>
<div className="flex justify-between items-center p-5 hover:bg-gray-50 transition-colors">
<span className="text-base font-medium text-gray-800">
                  Einlagiges Spachteln
                </span>
<span className="text-base font-semibold text-navy-900">
                  ab 8 € / m²
                </span>
</div>
<div className="flex justify-between items-center p-5 hover:bg-gray-50 transition-colors">
<span className="text-base font-medium text-gray-800">
                  Zweilagiges Spachteln
                </span>
<span className="text-base font-semibold text-navy-900">
                  ab 12 € / m²
                </span>
</div>
<div className="flex justify-between items-center p-5 hover:bg-gray-50 transition-colors">
<span className="text-base font-medium text-gray-800">
                  Tapezieren
                </span>
<span className="text-base font-semibold text-navy-900">
                  ab 7 € / m²
                </span>
</div>
<div className="flex justify-between items-center p-5 hover:bg-gray-50 transition-colors">
<span className="text-base font-medium text-gray-800">
                  Reparatur von Mängeln
                </span>
<span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  Individuelle Schätzung
                </span>
</div>
</div>
</div>
<div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
<div className="hidden" data-lang="pl">
<h4 className="text-lg font-semibold text-navy-900 tracking-tight mb-1">
                Nie wiesz ile zapłacisz?
              </h4>
<p className="text-sm text-gray-600 font-light">
                Zadzwoń lub napisz. Przyjadę na miejsce, doradzę i przygotuję
                darmowy kosztorys – bez żadnych zobowiązań.
              </p>
</div>
<div className="" data-lang="de">
<h4 className="text-lg font-semibold text-navy-900 tracking-tight mb-1">
                Wissen Sie nicht, wie viel Sie zahlen werden?
              </h4>
<p className="text-sm text-gray-600 font-light">
                Rufen Sie an oder schreiben Sie. Ich komme vorbei, berate Sie
                und erstelle einen kostenlosen Kostenvoranschlag – völlig
                unverbindlich.
              </p>
</div>
<a className="shrink-0 bg-navy-900 hover:bg-navy-800 text-white text-sm font-medium px-6 py-3 rounded-full transition-all shadow-sm whitespace-nowrap" href="tel:+48600123456">
<span className="hidden" data-lang="pl">Zamów wycenę</span>
<span className="" data-lang="de">Angebot anfordern</span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-offwhite border-y border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 gap-x-12 gap-y-12 items-center">
<div className="order-2 md:order-1 h-[400px] rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-gray-100" data-lang="de">
<iframe allowfullscreen="" className="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310844.1327873206!2d13.09511410864227!3d52.506836706752246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Niemcy!5e0!3m2!1spl!2spl!4v1776796101035!5m2!1spl!2spl" style={{border: '0', filter: 'grayscale(80%) contrast(1.1) brightness(1.1)'}} width="100%"></iframe>
</div>
<div className="order-2 md:order-1 h-[400px] rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-gray-100 hidden" data-lang="pl">
<iframe allowfullscreen="" className="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189279.5437850664!2d15.81395440563348!3d51.440800174778765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470613d95c7424c9%3A0xd459243a658363d!2sZielona%20G%C3%B3ra!5e0!3m2!1spl!2spl!4v1776891967175!5m2!1spl!2spl" style={{border: '0', filter: 'grayscale(80%) contrast(1.1) brightness(1.1)'}} width="100%"></iframe>
</div>
<div className="order-1 md:order-2">
<div className="hidden" data-lang="pl">
<h2 className="text-3xl md:text-4xl font-semibold text-navy-900 tracking-tighter mb-6">
                  Obszar działania
                </h2>
<p className="text-base text-gray-600 font-light mb-8">
                  Działam na terenie Zielonej Góry oraz w okolicznych
                  miejscowościach. Głównym priorytetem jest dla mnie szybki
                  dojazd i terminowa realizacja. Pracuję w promieniu
                  <strong className="">100 km od Zielonej Góry</strong>
                  .
                </p>
</div>
<div className="" data-lang="de">
<h2 className="text-3xl md:text-4xl font-semibold text-navy-900 tracking-tighter mb-6">
                  Einsatzgebiet
                </h2>
<p className="text-base font-light text-gray-600 mb-8">Ich bin in ganz Berlin und den umliegenden Städten tätig. Mein Hauptpriorität ist eine schnelle Anfahrt und termingerechte Ausführung. Ich arbeite im Umkreis von <strong className="">100 km vom Berlin, Dresden, Cottbus</strong>.</p>
</div>
<div className="flex flex-wrap gap-2 mb-8 hidden" data-lang="pl">
<span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full shadow-sm">
                  Żary
                </span>
<span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full shadow-sm">
                  Lubsko
                </span>
<span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full shadow-sm">
                  Żagań
                </span>
<span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full shadow-sm">
                  Cybinka
                </span>
<span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full shadow-sm">
                  Krosno Odrz.
                </span>
<span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full shadow-sm">
                  Szprotawa
                </span>
<span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full shadow-sm">
                  Babimost
                </span>
<span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full shadow-sm">
                  Kargowa
                </span>
<span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full shadow-sm">
                  Leszno
                </span>
<span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full shadow-sm">
                  Nowa Sól
                </span>
<span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full shadow-sm">
                  Bolesławiec
                </span>
<span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full shadow-sm">
                  Polkowice
                </span>
</div>
<div className="" data-lang="de">
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full shadow-sm">
                    Berlin
                  </span>
<span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full shadow-sm">
                    Drezden
                  </span>
<span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full shadow-sm">
                    Cottbus
                  </span>
<span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full shadow-sm">
                    Postdam
                  </span>
<span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full shadow-sm">
                    Liberose
                  </span>
<span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full shadow-sm">
                    Fürstenwalde
                  </span>
<span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full shadow-sm">
                    Luckenwalde
                  </span>
<span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full shadow-sm">
                    Seftenberg
                  </span>
<span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full shadow-sm">
                    Eisenhüttenstadt
                  </span>
<span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full shadow-sm">
                    Luckau
                  </span>
<span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full shadow-sm">
                    Spremberg
                  </span>
<span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full shadow-sm">
                    Lauta
                  </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="kontakt">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid md:grid-cols-2 gap-16">
<div className="">
<div className="hidden" data-lang="pl">
<h2 className="text-3xl md:text-4xl font-semibold text-navy-900 tracking-tighter mb-4">
                  Skontaktuj się
                </h2>
<p className="text-base text-gray-600 font-light mb-10">
                  Masz pytania lub chcesz umówić się na bezpłatną wycenę?
                  Zadzwoń lub napisz wiadomość przez formularz kontaktowy.
                </p>
</div>
<div className="" data-lang="de">
<h2 className="text-3xl md:text-4xl font-semibold text-navy-900 tracking-tighter mb-4">
                  Kontaktieren Sie uns
                </h2>
<p className="text-base text-gray-600 font-light mb-10">
                  Haben Sie Fragen oder möchten Sie einen Termin für eine
                  kostenlose Schätzung vereinbaren? Rufen Sie an oder schreiben
                  Sie eine Nachricht.
                </p>
</div>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center shrink-0">
<iconify-icon className="" icon="solar:phone-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<div className="text-sm text-gray-500 font-light mb-1">
<span className="hidden" data-lang="pl">Zadzwoń do mnie</span>
<span className="" data-lang="de">Rufen Sie mich an</span>
</div>
<a className="text-2xl font-semibold text-navy-900 tracking-tight hover:text-amber-600 transition-colors" href="tel:+48517792814">
                      +48 517792814
                    </a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:letter-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<div className="text-sm text-gray-500 font-light mb-1">
<span className="hidden" data-lang="pl">Napisz maila</span>
<span className="" data-lang="de">
                        Schreiben Sie eine E-Mail
                      </span>
</div>
<a className="hover:text-amber-600 transition-colors text-lg font-medium text-navy-900" href="mailto:rob.malermeister@gmail.com">rob.malermeister@gmail.com</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:clock-circle-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="hidden" data-lang="pl">
<div className="text-sm text-gray-500 font-light mb-1">
                      Godziny pracy
                    </div>
<div className="text-base font-medium text-navy-900">
                      Pn–Pt: 7:00 – 18:00
                      <br/>
                      Sob: 8:00 – 14:00
                    </div>
</div>
<div className="" data-lang="de">
<div className="text-sm text-gray-500 font-light mb-1">
                      Öffnungszeiten
                    </div>
<div className="text-base font-medium text-navy-900">
                      Mo–Fr: 7:00 – 18:00
                      <br/>
                      Sa: 8:00 – 14:00
                    </div>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">

<form className="space-y-5 hidden" data-lang="pl">
<div className="">
<label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="name-pl">
                    Imię i nazwisko
                  </label>
<input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900 transition-all placeholder:text-gray-400" id="name-pl" placeholder="Jan Kowalski" type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="phone-pl">
                    Telefon
                  </label>
<input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900 transition-all placeholder:text-gray-400" id="phone-pl" placeholder="+48 ___ ___ ___" type="tel"/>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="service-pl">
                    Rodzaj usługi
                  </label>
<select className="appearance-none w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900 transition-all" id="service-pl">
<option disabled="" selected="" value="">
                      Wybierz z listy
                    </option>
<option value="malowanie">Malowanie wnętrz</option>
<option value="gladzie">Szpachlowanie i gładzie</option>
<option value="tapetowanie">Tapetowanie</option>
<option value="inne">Inne prace</option>
</select>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="message-pl">
                    Wiadomość (opcjonalnie)
                  </label>
<textarea className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900 transition-all placeholder:text-gray-400 resize-none" id="message-pl" placeholder="Krótki opis zlecenia, np. malowanie mieszkania 50m2" rows="4"></textarea>
</div>
<button className="w-full bg-navy-900 hover:bg-navy-800 text-white text-sm font-medium py-3.5 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2" type="button">
<iconify-icon icon="solar:plain-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
                  Wyślij zapytanie
                </button>
<p className="text-xs text-gray-400 text-center font-light mt-4">
                  Naciskając przycisk wyrażasz zgodę na kontakt w celu obsługi
                  zapytania.
                </p>
</form>

<form className="space-y-5" data-lang="de">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="name-de">
                    Vor- und Nachname
                  </label>
<input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900 transition-all placeholder:text-gray-400" id="name-de" placeholder="Max Mustermann" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="phone-de">
                    Telefonnummer
                  </label>
<input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900 transition-all placeholder:text-gray-400" id="phone-de" placeholder="+49 ___ ___ ___" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="service-de">
                    Art der Leistung
                  </label>
<select className="appearance-none w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900 transition-all" id="service-de">
<option disabled="" selected="" value="">
                      Bitte auswählen
                    </option>
<option value="malowanie">Innenanstrich</option>
<option value="gladzie">Spachteln und Glätten</option>
<option value="tapetowanie">Tapezieren</option>
<option value="inne">Sonstige Arbeiten</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="message-de">
                    Nachricht (optional)
                  </label>
<textarea className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900 transition-all placeholder:text-gray-400 resize-none" id="message-de" placeholder="Kurze Beschreibung, z. B. Wohnung streichen 50m2" rows="4"></textarea>
</div>
<button className="w-full bg-navy-900 hover:bg-navy-800 text-white text-sm font-medium py-3.5 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2" type="button">
<iconify-icon icon="solar:plain-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
                  Anfrage senden
                </button>
<p className="text-xs text-gray-400 text-center font-light mt-4">
                  Durch Klicken auf die Schaltfläche erklären Sie sich damit
                  einverstanden, dass wir Sie bezüglich Ihrer Anfrage
                  kontaktieren.
                </p>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-navy-950 pt-16 pb-8 border-t border-navy-800 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
<div className="text-center md:text-left">
<a className="inline-flex flex-col text-white mb-4" href="#">
<span className="text-2xl font-semibold tracking-tighter leading-none">
                RobMeister
              </span>
<span className="text-xs font-medium tracking-tight text-navy-100 uppercase mt-1 hidden" data-lang="pl">
                Nowoczesne Wnętrza
              </span>
<span className="text-xs font-medium tracking-tight text-navy-100 uppercase mt-1" data-lang="de">
                Innenausbau
              </span>
</a>
<p className="text-sm text-navy-100 font-light max-w-xs hidden" data-lang="pl">
              Profesjonalne wykończenia wnętrz na terenie Warszawy i okolic.
            </p>
<p className="text-sm text-navy-100 font-light max-w-xs" data-lang="de">
              Professioneller Innenausbau in Berlin, Dresden, Cottbus und Umgebung.
            </p>
</div>
<div className="flex flex-col items-center md:items-end gap-4">
<div className="text-sm text-navy-100 font-light">
              NIP:
              <span className="font-medium text-white">123-456-78-90</span>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors" href="#">
<iconify-icon icon="solar:basketball-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 text-xs font-light text-navy-100/60">
<p className="hidden" data-lang="pl">
            © 2025 RobMeister Wykończenia Wnętrz. Wszelkie prawa
            zastrzeżone.
          </p>
<p className="" data-lang="de">
            © 2025 RobMeister Innenausbau. Alle Rechte vorbehalten.
          </p>
<p>
            Projekt i realizacja:
            <span className="text-white font-medium tracking-tight">
              WebMarko_Design
            </span>
</p>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 w-full z-50 flex md:hidden bg-white border-t border-gray-100 p-3 pb-safe gap-3 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
<a className="flex-1 flex items-center justify-center gap-2 bg-navy-900 text-white text-sm font-medium py-3 rounded-xl" href="tel:+48600123456">
<iconify-icon icon="solar:phone-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
<span className="hidden" data-lang="pl">Zadzwoń</span>
<span className="" data-lang="de">Anrufen</span>
</a>
<a className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-medium py-3 rounded-xl" href="https://wa.me/48517792814" rel="noopener noreferrer" target="_blank">
<iconify-icon icon="solar:chat-round-line-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
        WhatsApp
      </a>
</div>
<a className="hidden md:flex fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group" href="https://wa.me/48517792814" rel="noopener noreferrer" target="_blank">
<iconify-icon className="" icon="solar:chat-round-line-linear" style={{fontSize: '1.75rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="absolute right-full mr-4 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
<span className="hidden" data-lang="pl">Napisz na WhatsApp</span>
<span className="" data-lang="de">Auf WhatsApp schreiben</span>
</span>
</a>



    </>
  );
}
