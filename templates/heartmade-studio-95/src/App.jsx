import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
// Ustawienie domyślne: brak zgody na śledzenie
gtag('consent', 'default', {
'ad_storage': 'denied',
'analytics_storage': 'denied',
'ad_user_data': 'denied',
'ad_personalization': 'denied',
'personalization_storage': 'denied',
'functionality_storage': 'granted',
'security_storage': 'granted',
'wait_for_update': 500
});



(function (w, d, s, l, i) {
w[l] = w[l] || []; w[l].push({
'gtm.start':
new Date().getTime(), event: 'gtm.js'
}); var f = d.getElementsByTagName(s)[0],
j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-P2L2MVV6');



(function() {
// Sprawdź czy użytkownik już dokonał wyboru języka
const savedLanguage = localStorage.getItem('preferred_language');
// Jeśli użytkownik jeszcze nie wybrał języka
if (!savedLanguage) {
// Wykryj język przeglądarki
const browserLanguage = navigator.language || navigator.userLanguage;
const languageCode = browserLanguage.split('-')[0]; // np. 'en-US' -> 'en'
// Jeśli język przeglądarki to angielski, przekieruj na wersję EN
if (languageCode === 'en') {
localStorage.setItem('preferred_language', 'en');
window.location.href = '/en';
} else {
// W przeciwnym razie zostań na polskiej wersji
localStorage.setItem('preferred_language', 'pl');
}
}
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      function updateConsent(status) {
        // 1. Wyślij aktualizację do Google Analytics/GTM
        gtag('consent', 'update', {
          'ad_storage': status,
          'analytics_storage': status,
          'ad_user_data': status,
          'ad_personalization': status
        });

        // 2. Zapisz wybór w przeglądarce
        localStorage.setItem('cookie_consent_status', status);

        // 3. Schowaj banner
        document.getElementById('cookie-banner').classList.add('translate-y-[150%]');
      }

      // Sprawdź czy użytkownik już dokonał wyboru
      window.addEventListener('DOMContentLoaded', () => {
        const consent = localStorage.getItem('cookie_consent_status');
        if (!consent) {
          setTimeout(() => {
            document.getElementById('cookie-banner').classList.remove('translate-y-[150%]');
          }, 2000);
        } else if (consent === 'granted') {
            updateConsent('granted');
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<noscript>
      &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P2L2MVV6" height="0" width="0" style={{display: 'none', visibility: 'hidden'}}&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lt;/iframe&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;gt;
    </noscript>


<nav className="fixed w-full z-50 border-b border-slate-800/50 glass">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-slate-100 font-medium tracking-tight text-lg flex items-center gap-2 group" href="#">
<div className="w-7 h-7 bg-gradient-to-tr from-orange-200 via-yellow-100 to-blue-200 rounded-lg flex items-center justify-center text-slate-900 group-hover:scale-105 transition duration-300">
<iconify-icon className="text-slate-900" icon="lucide:heart" width="14"></iconify-icon>
</div>
          Heartmade
        </a>
<div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-blue-200 transition-colors duration-300" href="#podejscie">
            Podejście
          </a>
<a className="hover:text-green-200 transition-colors duration-300" href="#o-mnie">
            O mnie
          </a>
<a className="hover:text-orange-200 transition-colors duration-300" href="#portfolio">
            Realizacje
          </a>
<a className="hover:text-yellow-200 transition-colors duration-300" href="#kontakt">
            Kontakt
          </a>
</div>
<div className="flex items-center gap-4">
<a aria-label="Switch to English" className="text-slate-400 hover:text-slate-100 transition-colors duration-300 flex items-center gap-1.5 group" href="/en">
<iconify-icon className="group-hover:text-blue-300 transition-colors" icon="lucide:globe" width="16"></iconify-icon>
<span className="text-sm font-medium">EN</span>
</a>
<a className="text-xs font-medium text-slate-200 border border-slate-700 bg-slate-900 hover:bg-slate-800 hover:border-slate-600 px-4 py-2 rounded-lg transition duration-300" href="#kontakt">
            Rozpocznij projekt
          </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-0 w-full h-[600px] subtle-glow pointer-events-none z-0 opacity-60"></div>
<div className="absolute top-20 right-0 w-2/3 h-[500px] warm-glow pointer-events-none z-0 opacity-40"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-900/50 bg-blue-950/30 text-xs font-medium text-blue-300 mb-8">
<iconify-icon icon="lucide:sparkles" strokeWidth="1.5" width="14"></iconify-icon>
<span>Designed by AI</span>
</div>
<h1 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
              Pomogę Ci wyjść
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-yellow-200 to-blue-300">
                z Twoim biznesem na świat
              </span>
</h1>
<p className="text-lg md:text-xl font-light text-slate-400 max-w-xl mb-10 leading-relaxed">
              W 3 godziny zbudujemy stronę www z Twoją unikalną ofertą, bo Ty
              jesteś unikalny/a (nawet jak w to nie wierzysz). Bez technicznego
              chaosu, za to z mentorskim, życzliwym wsparciem.
            </p>
<div className="flex flex-col sm:flex-row w-full sm:w-auto items-center gap-4">
<a className="w-full sm:w-auto px-6 py-3 bg-slate-200 text-slate-900 font-medium text-sm rounded-lg hover:bg-white transition duration-300 flex items-center justify-center gap-2" href="#portfolio">
                Zobacz portfolio
                <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3 border border-slate-700 text-slate-300 font-medium text-sm rounded-lg hover:bg-slate-800 transition duration-300 text-center" href="#podejscie">
                Moja filozofia
              </a>
</div>
</div>

<div className="relative order-1 lg:order-2 w-full max-w-md mx-auto lg:max-w-full">

<div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 via-slate-500/5 to-orange-500/10 rounded-[2rem] blur-2xl opacity-70"></div>

<div className="relative rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-900/50 shadow-2xl rotate-2 hover:rotate-0 transition duration-700 ease-out group">

<div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none z-20"></div>

<div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent z-10 opacity-60"></div>

<img alt="Paweł Jurewicz - Heartmade Creator" className="w-full h-auto object-cover grayscale-[10%] group-hover:grayscale-0 transition duration-700" src="https://heartmade.pl/images/pawel_jurewicz.webp"/>
</div>
</div>
</div>
</div>
</section>
<section className="md:py-36 overflow-hidden border-y border-white/[0.02] bg-slate-950 pt-24 pb-24 relative">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,197,253,0.03),transparent_70%)] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center">
<div className="flex items-center gap-3 mb-10 opacity-30">
<div className="w-6 h-px bg-slate-700"></div>
<span className="text-[9px] uppercase tracking-[0.4em] font-medium text-slate-400">
              Manifest
            </span>
<div className="w-6 h-px bg-slate-700"></div>
</div>
<blockquote className="space-y-6 md:space-y-8">
<p className="text-2xl md:text-4xl lg:text-5xl font-light text-slate-100 leading-[1.2] tracking-tight">
              „Wierzę, że pomysły płynące z serca potrzebują

              <span className="font-normal italic text-white opacity-90">
                solidnych fundamentów
              </span>
              .”
            </p>
<p className="text-lg md:text-2xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
              Urzeczywistniam idee
              <span className="text-slate-100 font-medium">
                ludzi o otwartych umysłach
              </span>
              , by ich czucie przestało być barierą, a stało się ich
              <span className="text-yellow-100/80 font-medium">
                największą siłą
              </span>
              .
            </p>
</blockquote>
<div className="mt-12 opacity-20">
<iconify-icon className="text-slate-400" icon="lucide:fingerprint" width="24"></iconify-icon>
</div>
</div>
</div>
</section>
<section className="border-slate-900 border-t pt-24 pb-24 relative overflow-hidden" id="podejscie">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-slate-900/40 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="flex flex-col">

<details className="group border-b border-slate-800/60" name="podejscie-accordion">
<summary className="flex items-center justify-between cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden py-8 md:py-10 outline-none">
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-slate-500 group-hover:text-orange-200 group-open:text-orange-200 transition-colors tracking-tight pr-8 leading-tight">
                Budowanie nowoczesnego biznesu
              </h2>
<div className="w-10 h-10 md:w-14 md:h-14 shrink-0 rounded-full border border-slate-800 flex items-center justify-center text-slate-500 group-open:rotate-45 group-open:text-orange-200 group-open:border-orange-900/50 transition-all duration-500 group-hover:bg-slate-900/50">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</summary>
<div className="pb-12 pt-2 md:pt-4">
<div className="pl-6 md:pl-8 border-l-2 border-orange-900/30 max-w-3xl">
<div className="flex items-center gap-3 mb-6 text-orange-200">
<div className="w-10 h-10 rounded-lg bg-orange-950/30 border border-orange-900/20 flex items-center justify-center">
<iconify-icon icon="lucide:sun" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight">Biznes</h3>
</div>
<p className="text-base md:text-lg text-slate-400 font-light leading-relaxed">
                  Przez ponad 20 lat pracowałem w różnych branżach. Pomogę Ci wyklarować swoją ofertę, żeby wydobyć z niej prawdziwą wartość dla klienta. Pokażę, jak możesz się rozwijać z sukcesem, niezależnie od tego czy startujesz czy już masz swój biznes. Lejki, analizy, ścieżki użytkownika, testy A/B... zaplanujemy i zrobimy to razem.
                </p>
<p className="mt-4 text-orange-200/80 italic font-normal">
                  Zastanawiałeś/aś się, jak chcesz docierać do klientów?
                </p>
</div>
</div>
</details>

<details className="group border-b border-slate-800/60" name="podejscie-accordion">
<summary className="flex items-center justify-between cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden py-8 md:py-10 outline-none">
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-slate-500 group-hover:text-yellow-200 group-open:text-yellow-200 transition-colors tracking-tight pr-8 leading-tight">
                Korzystając z AI i technologii
              </h2>
<div className="w-10 h-10 md:w-14 md:h-14 shrink-0 rounded-full border border-slate-800 flex items-center justify-center text-slate-500 group-open:rotate-45 group-open:text-yellow-200 group-open:border-yellow-900/50 transition-all duration-500 group-hover:bg-slate-900/50">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</summary>
<div className="pb-12 pt-2 md:pt-4">
<div className="pl-6 md:pl-8 border-l-2 border-yellow-900/30 max-w-3xl">
<div className="flex items-center gap-3 mb-6 text-yellow-200">
<div className="w-10 h-10 rounded-lg bg-yellow-950/30 border border-yellow-900/20 flex items-center justify-center">
<iconify-icon icon="lucide:lightbulb" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight">AI i technologia</h3>
</div>
<p className="text-base md:text-lg text-slate-400 font-light leading-relaxed">
                  Tworzyłem strony internetowe w czasach, kiedy o AI nikt nie myślał. Z pomocą nowoczesnych narzędzi, podepnę kalendarz, zintegruję z newsletterem, bazą klientów lub płatnościami. A może chcesz, żeby Cię tego nauczyć?
                </p>
<p className="mt-4 text-yellow-200/80 italic font-normal">
                  Czy już wiesz, co chcesz robić sam/a, a co wolisz zautomatyzować?
                </p>
</div>
</div>
</details>

<details className="group border-b border-transparent" name="podejscie-accordion">
<summary className="flex items-center justify-between cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden py-8 md:py-10 outline-none">
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-slate-500 group-hover:text-blue-200 group-open:text-blue-200 transition-colors tracking-tight pr-8 leading-tight">
                W poczuciu wewnętrznej siły
              </h2>
<div className="w-10 h-10 md:w-14 md:h-14 shrink-0 rounded-full border border-slate-800 flex items-center justify-center text-slate-500 group-open:rotate-45 group-open:text-blue-200 group-open:border-blue-900/50 transition-all duration-500 group-hover:bg-slate-900/50">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</summary>
<div className="pb-12 pt-2 md:pt-4">
<div className="pl-6 md:pl-8 border-l-2 border-blue-900/30 max-w-3xl">
<div className="flex items-center gap-3 mb-6 text-blue-200">
<div className="w-10 h-10 rounded-lg bg-blue-950/30 border border-blue-900/20 flex items-center justify-center">
<iconify-icon icon="lucide:waves" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight">Mentoring</h3>
</div>
<p className="text-base md:text-lg text-slate-400 font-light leading-relaxed">
                  Od lat pracuję z ludźmi również holistycznie. Wiem, jak trudno jest wyjść do świata ze swoim pomysłem na biznes, jak trudno jest pokonać własny opór. Jeśli nie rozwiążemy wszystkiego razem, wskażę Ci odpowiednie narzędzia. (Rozpuszczenia, a nie pokonania, bo opór to nie jest Twój wróg, tylko mechanizm, który Cię kiedyś chronił.)
                </p>
<p className="mt-4 text-blue-200/80 italic font-normal">
                  Czy masz już dość tego nieznośnego poczucia, że życie Ci ucieka i chcesz wreszcie robić coś swojego?
                </p>
</div>
</div>
</details>
</div>
</div>
</section>

<section className="py-24 relative border-t border-slate-900 overflow-hidden" id="o-mnie">

<div className="absolute top-1/2 right-0 w-1/3 h-96 bg-gradient-to-b from-blue-900/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative group order-2 lg:order-1">
<div className="absolute -inset-1 bg-gradient-to-br from-slate-700/20 to-orange-900/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-700"></div>
<div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 aspect-[4/3] group-hover:border-slate-700 transition duration-500">

<div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent z-10"></div>

<img alt="Masaż tajski i Product Management" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition duration-700 ease-out" src="https://heartmade.pl/images/pawel_jurewicz_masaz.webp"/>

<div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md border border-slate-800/80 p-4 rounded-xl flex items-center justify-between z-20">
<div>
<div className="text-xs font-semibold text-slate-200">
                    Nowe podejście do biznesu
                  </div>
<div className="text-[10px] text-slate-500 tracking-wide uppercase mt-0.5">
                    Product Management &amp; AI-Assisted Web Design &amp;
                    Business Mentoring
                  </div>
</div>
<div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-orange-200">
<iconify-icon icon="lucide:hand-heart" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 text-xs font-medium text-green-300/80 mb-6">
<iconify-icon icon="lucide:sprout" strokeWidth="1.5" width="14"></iconify-icon>
<span>O mnie</span>
</div>
<h2 className="text-3xl md:text-4xl font-medium text-slate-100 tracking-tight mb-6">
              Most między światami.
            </h2>
<div className="space-y-6 text-lg font-light text-slate-400 leading-relaxed">
<p>
                Przez ponad 20 lat pracowałem jako
                <span className="text-slate-200 font-normal">
                  product owner/product manager
                </span>
                w różnych branżach. Pomagałem dużym firmom i startupom budować
                serwisy internetowe, tworzyć nowe produkty: przekuwać idee w
                rzeczywistość. Rozumiem język biznesu i technologii.
              </p>
<p>
                Od ponad 6 lat zajmuję się też
                <span className="text-slate-200 font-normal">masażem tajskim</span>
                w podejściu holistycznym. Głęboka, uważna praca z ciałem
                nauczyła mnie tego, jak słuchać i reagować z serca a nie tylko z
                głowy. Odkryłem jak ważne są emocje i psychika, które nas
                wspierają lub hamują nasze działania.
              </p>
<div className="pl-4 border-l-2 border-slate-800 italic text-slate-500 text-base">
                "Postrzegam rozluźnienie, oddech i miłość, jako podstawę tak
                codziennego życia, jak i naszego biznesu"
              </div>
</div>
<div className="mt-10 flex flex-wrap gap-4">
<div className="flex items-center gap-3 pr-6 border-r border-slate-800">
<div className="text-right">
<div className="text-2xl font-medium text-slate-200 tracking-tight">
                    20+
                  </div>
<div className="text-xs text-slate-500 uppercase tracking-wider">
                    Lat w IT
                  </div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="text-left">
<div className="text-2xl font-medium text-slate-200 tracking-tight">
                    Focus
                  </div>
<div className="text-xs text-slate-500 uppercase tracking-wider">
                    Na wartości
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-slate-900">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium text-slate-100 tracking-tight mb-4">
            Harmonia narzędzi
          </h2>
<p className="font-light text-slate-400">
            Technologia jest dla Ciebie. Ma być lekko, łatwo i bez wysiłku.
            Narzędzia powinny być dostosowane do Twojego stylu pracy, a nie na
            odwrót. Słyszałeś/aś o automatyzacjach?
          </p>
</div>
<div className="space-y-20">

<div className="flex flex-col md:flex-row items-center gap-12">
<div className="flex-1 space-y-6">
<div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-300">
<iconify-icon icon="lucide:calendar-heart" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-medium text-slate-100 tracking-tight mb-3">
                  Czas dla Ciebie
                </h3>
<p className="text-slate-400 font-light leading-relaxed">
                  Integracja z
                  <strong>kalendarzem</strong>
                  (np. Calendly/Cal.com) pozwala klientom umawiać się wtedy, gdy
                  Ty masz na to przestrzeń. Bez wymiany maili, z szacunkiem dla
                  czasu Twojego i Twoich klientów.
                </p>
</div>
<ul className="space-y-2 text-sm text-slate-500 font-light">
<li className="flex items-center gap-2">
<iconify-icon className="text-blue-400/80" icon="lucide:check"></iconify-icon>
                  Synchronizacja z Twoim rytmem
                </li>
</ul>
</div>
<div className="flex-1 w-full">
<div className="rounded-xl border border-slate-800 bg-slate-900 overflow-hidden shadow-2xl group hover:border-blue-900/50 transition duration-500">
<img alt="Calendly - System rezerwacji spotkań" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-12">
<div className="flex-1 space-y-6">
<div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-orange-300">
<iconify-icon icon="lucide:send" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-medium text-slate-100 tracking-tight mb-3">
                  Słowa, które docierają
                </h3>
<p className="text-slate-400 font-light leading-relaxed">
                  Formularze zapisu, zapytania ze strony. Wszyscy nowi klienci
                  trafiają do
                  <strong>bazy newslettera</strong>
                  , byś mógł budować społeczność w oparciu o swoje wartości.
                </p>
</div>
</div>
<div className="flex-1 w-full">
<div className="rounded-xl border border-slate-800 bg-slate-900 overflow-hidden shadow-2xl group hover:border-orange-900/50 transition duration-500">
<img alt="MailerLite - Newsletter i email marketing" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-12">
<div className="flex-1 space-y-6">
<div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-yellow-300">
<iconify-icon icon="lucide:instagram" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-medium text-slate-100 tracking-tight mb-3">
                  Nowoczesny marketing
                </h3>
<p className="text-slate-400 font-light leading-relaxed">
                  Twoja unikalna oferta jest polecana przez
                  <strong>ChatGPT</strong>
                  . Żyjemy przecież w czasach AI, prawda?
                </p>
</div>
</div>
<div className="flex-1 w-full">
<div className="rounded-xl border border-slate-800 bg-slate-900 overflow-hidden shadow-2xl group hover:border-yellow-900/50 transition duration-500">
<img alt="ChatGPT - AI Marketing i widoczność" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="portfolio">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl font-medium text-slate-100 tracking-tight mb-4">
              Wybrane historie
            </h2>
<p className="font-light text-slate-500 max-w-md">
              Projekty stworzone z czułością dla detalu i szacunkiem dla wizji
              twórcy.
            </p>
</div>
<a className="text-sm font-medium text-slate-300 hover:text-blue-300 transition flex items-center gap-1 group" href="#">
            Pełne portfolio
            <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition duration-300" icon="lucide:arrow-up-right" width="14"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group block rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 hover:border-yellow-900/30 transition duration-300">
<div className="aspect-video w-full bg-slate-800 relative overflow-hidden">
<img alt="Hania Kozubal | TCM" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-slate-100 tracking-tight">
                  Hania Kozubal | TCM
                </h3>
<a href="https://haniakozubal.pl">
<iconify-icon className="text-slate-600 group-hover:text-yellow-200 transition" icon="lucide:external-link" width="18"></iconify-icon>
</a>
</div>
<p className="text-sm text-slate-400 font-light mb-4">
                Przeszliśmy przez proces mentoringowy połączony z projektowaniem
                firmy, gdzie strona www jest jej widocznym wyrazem. Wspólnie
                połączyliśy rózne talenty Hani w jedną ofertę, określiliśmy jej
                UVP i odważnie wyszliśmy na świat publikując w 3h stronę www na
                nowej domenie haniakozubal.pl.
              </p>
<div className="flex flex-wrap gap-2">
<span className="text-xs text-slate-500 border border-slate-800 px-2 py-1 rounded-md">
                  UVP Discovery
                </span>
<span className="text-xs text-yellow-300/50 border border-yellow-900/20 px-2 py-1 rounded-md">
                  Business Mentoring
                </span>
<span className="text-xs text-yellow-300/50 border border-yellow-900/20 px-2 py-1 rounded-md">
                  Launch
                </span>
<span className="text-xs text-purple-300/50 border border-purple-900/20 px-2 py-1 rounded-md">
                  AI design
                </span>
<span className="text-xs text-green-300/50 border border-green-900/20 px-2 py-1 rounded-md">
                  Analityka
                </span>
</div>
</div>
</div>

<div className="group block rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 hover:border-blue-900/30 transition duration-300">
<div className="aspect-video w-full bg-slate-800 relative overflow-hidden">
<img alt="Olga Jurewicz | Art of Breath" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-slate-100 tracking-tight">
                  Olga Jurewicz | Art of Breath
                </h3>
<a href="https://olgajurewicz.com">
<iconify-icon className="text-slate-600 group-hover:text-blue-200 transition" icon="lucide:external-link" width="18"></iconify-icon>
</a>
</div>
<p className="text-sm text-slate-400 font-light mb-4">
                Zbudowaliśmy stronę dla Breathworkerki, która wkracza ze swoją
                unikalną ofertą na rynek. Serwis, który nie tylko prezentuje
                korzyści, ale dba też o praktykalia, jak rezerwacje sesji
                połączona z kalendarzem i budowanie społeczności poprzez
                zautomatyzowany newsletter.
              </p>
<div className="flex flex-wrap gap-2">
<span className="text-xs text-slate-500 border border-slate-800 px-2 py-1 rounded-md">
                  Personal Branding
                </span>
<span className="text-xs text-blue-300/50 border border-blue-900/20 px-2 py-1 rounded-md">
                  Booking Systems
                </span>
<span className="text-xs text-purple-300/50 border border-purple-900/20 px-2 py-1 rounded-md">
                  AI design
                </span>
<span className="text-xs text-indigo-300/50 border border-indigo-900/20 px-2 py-1 rounded-md">
                  Newsletter
                </span>
<span className="text-xs text-green-300/50 border border-green-900/20 px-2 py-1 rounded-md">
                  Analityka
                </span>
</div>
</div>
</div>

<div className="group block rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 hover:border-orange-900/30 transition duration-300">
<div className="aspect-video w-full bg-slate-800 relative overflow-hidden">
<img alt="Męskie karty emocji" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-slate-100 tracking-tight">
                  Męskie karty emocji
                </h3>
<a href="https://meskiekarty.pl">
<iconify-icon className="text-slate-600 group-hover:text-orange-200 transition" icon="lucide:external-link" width="18"></iconify-icon>
</a>
</div>
<p className="text-sm text-slate-400 font-light mb-4">
                Zbudowaliśmy sklep dla landing page'u Męskich Kart Emocji.
                Pomysł, który z udanej akcji na Zrzutka.pl zamieniliśmy w
                regularny sklep e-commerce. Kompleksowe wdrożenie z pełną
                automatyzacją sprzedaży i logistyki, które uwalnia czas twórców
                na merytoryczny rozwój projektu.
              </p>
<div className="flex flex-wrap gap-2">
<span className="text-xs text-slate-500 border border-slate-800 px-2 py-1 rounded-md">
                  E-commerce Strategy
                </span>
<span className="text-xs text-orange-300/50 border border-orange-900/20 px-2 py-1 rounded-md">
                  Automation
                </span>
<span className="text-xs text-orange-300/50 border border-orange-900/20 px-2 py-1 rounded-md">
                  Scale-up
                </span>
<span className="text-xs text-red-300/50 border border-red-900/20 px-2 py-1 rounded-md">
                  3PL
                </span>
<span className="text-xs text-pink-300/50 border border-pink-900/20 px-2 py-1 rounded-md">
                  Bramka płatności
                </span>
<span className="text-xs text-teal-300/50 border border-teal-900/20 px-2 py-1 rounded-md">
                  Integracje
                </span>
</div>
</div>
</div>

<div className="group flex flex-col justify-center items-center text-center rounded-2xl border border-dashed border-slate-800 bg-transparent hover:border-slate-600 hover:bg-slate-900/20 transition duration-300 min-h-[300px]">
<div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 text-slate-500 group-hover:text-slate-300 transition">
<iconify-icon icon="lucide:heart-handshake" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-200 tracking-tight mb-2">
              Twoja wizja?
            </h3>
<p className="text-sm text-slate-500 font-light max-w-xs mx-auto">
              Stwórzmy razem miejsce, które będzie odzwierciedleniem Ciebie.
            </p>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-slate-900">
<div className="max-w-3xl mx-auto px-6 text-center">
<iconify-icon className="text-slate-700 mb-6" icon="lucide:quote" width="32"></iconify-icon>
<blockquote className="text-xl md:text-2xl font-light text-slate-300 leading-relaxed tracking-tight mb-8">
          Paweł,
          <br/>
<br/>
          Co pół godziny wchodzę na stronę i nie mogę uwierzyć 🥹

          <br/>
<br/>

          Na maksa dużo mi dużo dała rozmowa z Tobą i powiedzenie na głos z
          czego wynikają moje ograniczenia, o których niby byłam świadoma.
          Jestem Ci ogromnie wdzięczna za pchnięcie mnie w nowe.
          <br/>
<br/>

          Biorę się za robotę z zupełnie nową energią.
          <br/>
<br/>

          DZIĘKUJĘ 🙏 🪷❤️
        </blockquote>
<div className="flex items-center justify-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-200 to-slate-400"></div>
<div className="text-left">
<p className="text-sm font-medium text-slate-100">Hania Kozubal</p>
<p className="text-xs text-slate-500">haniakozubal.pl</p>
</div>
</div>

<div className="mt-12">
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-800 bg-slate-900/50 hover:bg-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200 transition-all duration-300 text-sm font-medium group" href="#">
                Zobacz więcej opinii
                <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-900 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-96 bg-gradient-to-b from-blue-900/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
<div className="z-10 max-w-6xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="text-center max-w-2xl mx-auto mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 text-xs font-medium text-slate-300 mb-6">
<iconify-icon icon="lucide:route" strokeWidth="1.5" width="14"></iconify-icon>
<span className="">Twoja Droga z Heartmade</span>
</div>
<h2 className="md:text-4xl leading-tight text-3xl font-medium text-slate-100 tracking-tight mb-4">Od pomysłu do stabilnego wzrostu.<br className="hidden sm:block"/> Skutecznie.</h2>
<p className="leading-relaxed text-lg font-light text-slate-400">Buduję kompleksowe rozwiązania, pokazujące realną wartość Twojej oferty. Opiekuję Twoje osobiste blokady i towarzyszę w dalszym rozwoju.</p>
</div>
<div className="relative max-w-5xl mx-auto">

<div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-[1px] bg-slate-800 z-0"></div>

<div className="md:hidden absolute top-6 bottom-12 left-6 w-[1px] bg-slate-800 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">

<a className="flex md:flex-col items-start md:items-center gap-6 group cursor-pointer" href="/oferta">
<div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-500 group-hover:text-blue-300 group-hover:border-blue-500/30 group-hover:-translate-y-1 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-500 shrink-0 z-10 relative">
<iconify-icon icon="lucide:lightbulb" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="md:text-center mt-1 md:mt-0 transition-transform duration-500 group-hover:-translate-y-1">
<div className="text-[10px] font-semibold text-slate-500 mb-2 uppercase tracking-widest">Krok 1</div>
<h3 className="text-sm font-semibold text-slate-200 tracking-tight mb-2 group-hover:text-white transition-colors">Robisz wszystko sam?</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                  Na moich webinarach dowiesz się jak możesz szybko budować swój biznes z AI i jak się pozycjonować w ChacieGPT. 
                </p>
<span className="inline-block mt-3 px-2 py-1 rounded border border-slate-800 bg-slate-900/50 text-[11px] font-medium text-slate-400 group-hover:border-blue-900/30 group-hover:text-blue-200 transition-colors">29-59 zł</span>
</div>
</a>

<a className="flex md:flex-col items-start md:items-center gap-6 group cursor-pointer" href="/oferta">
<div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-500 group-hover:text-green-300 group-hover:border-green-500/30 group-hover:-translate-y-1 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.1)] transition-all duration-500 shrink-0 z-10 relative">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="md:text-center mt-1 md:mt-0 transition-transform duration-500 group-hover:-translate-y-1">
<div className="text-[10px] font-semibold text-slate-500 mb-2 uppercase tracking-widest">Krok 2</div>
<h3 className="group-hover:text-white transition-colors text-sm font-semibold text-slate-200 tracking-tight mb-2">Potrzebujesz strony na już?</h3>
<p className="leading-relaxed text-sm font-light text-slate-400">Przynieś zdjęcia i ogólną koncepcję, zbuduję Ci kompletną stronę www w 1h.</p>
<span className="inline-block mt-3 px-2 py-1 rounded border border-slate-800 bg-slate-900/50 text-[11px] font-medium text-slate-400 group-hover:border-green-900/30 group-hover:text-green-200 transition-colors">500 zł</span>
</div>
</a>

<a className="flex md:flex-col items-start md:items-center gap-6 group cursor-pointer relative" href="/oferta">
<div className="absolute inset-0 bg-yellow-500/5 blur-2xl rounded-full z-0 pointer-events-none"></div>
<div className="w-12 h-12 rounded-2xl bg-yellow-950/20 border border-yellow-900/30 flex items-center justify-center text-yellow-400/80 group-hover:text-yellow-300 group-hover:border-yellow-500/30 group-hover:-translate-y-1 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.1)] transition-all duration-500 shrink-0 z-10 relative shadow-[0_0_15px_rgba(234,179,8,0.05)]">
<iconify-icon className="" icon="lucide:layout-template" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="md:text-center mt-1 md:mt-0 transition-transform duration-500 group-hover:-translate-y-1 relative z-10">
<div className="text-[10px] font-semibold text-yellow-500/70 mb-2 uppercase tracking-widest">Krok 3</div>
<h3 className="text-sm font-semibold text-slate-100 tracking-tight mb-2 group-hover:text-white transition-colors">Wszystko Cię przytłacza?</h3>
<p className="leading-relaxed text-sm font-light text-slate-400">Zróbmy porządny warsztat produktowy i postawmy stronę/sklep, które pokażą wartość tego, co oferujesz. Ogarnijmy roadmapę biznesową. Wszystko w kilka godzin.</p>
<span className="inline-block mt-3 px-2 py-1 rounded border border-yellow-900/30 bg-yellow-950/20 text-[11px] font-medium text-yellow-400/80 group-hover:border-yellow-800/50 group-hover:text-yellow-300 transition-colors">2900 zł</span>
</div>
</a>

<a className="flex md:flex-col items-start md:items-center gap-6 group cursor-pointer" href="/oferta">
<div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-500 group-hover:text-indigo-300 group-hover:border-indigo-500/30 group-hover:-translate-y-1 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.1)] transition-all duration-500 shrink-0 z-10 relative">
<iconify-icon icon="lucide:handshake" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="md:text-center mt-1 md:mt-0 transition-transform duration-500 group-hover:-translate-y-1">
<div className="text-[10px] font-semibold text-slate-500 mb-2 uppercase tracking-widest">Krok 4</div>
<h3 className="text-sm font-semibold text-slate-200 tracking-tight mb-2 group-hover:text-white transition-colors">Martwisz się tym, co będzie potem?</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                  Nie zostawię Cię samego/samej. Będziemy razem rozwijać Twój biznes w czasie spotkań 1:1 oraz w ramach społeczności Heartmade Club.
                </p>
<span className="inline-block mt-3 px-2 py-1 rounded border border-slate-800 bg-slate-900/50 text-[11px] font-medium text-slate-400 group-hover:border-indigo-900/30 group-hover:text-indigo-200 transition-colors">120-1200 zł/m-c</span>
</div>
</a>
</div>
</div>
<div className="mt-20 text-center relative z-20">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-200 text-slate-900 font-medium text-sm rounded-lg hover:bg-white transition duration-300 shadow-lg shadow-white/5 group" href="/oferta">
            Poznaj szczegóły oferty
            <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</section>
<section className="py-24 relative overflow-hidden bg-slate-900/20" id="kontakt">
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">
            Webinary i mastermindy
          </h2>
<div className="w-full bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-800 relative my-12">
<iframe allowfullscreen="" aria-hidden="false" frameborder="0" height="450" src="https://luma.com/embed/calendar/cal-9kGw0zHUMiHWiAW/events?lt=light" style={{border: '1px solid #bfcbda88', borderRadius: '4px'}} tabindex="0" width="100%"></iframe>
</div>
<div className="space-y-4">
<div className="flex items-center gap-3 text-slate-400">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-300">
<iconify-icon icon="lucide:mail" width="18"></iconify-icon>
</div>
<a className="hover:text-white transition" href="mailto:pawel@heartmade.pl">
                pawel@heartmade.pl
              </a>
</div>
<div className="flex items-center gap-3 text-slate-400">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-green-300">
<iconify-icon icon="logos:whatsapp-icon" width="18"></iconify-icon>
</div>
<a className="hover:text-white transition" href="https://wa.me/48693646837">
                WhatsApp
              </a>
</div>
<div className="flex items-center gap-3 text-slate-400">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-300">
<iconify-icon icon="lucide:phone" width="18"></iconify-icon>
</div>
<a className="hover:text-white transition" href="tel:+48693646837">
                +48 693 646 837
              </a>
</div>
</div>
<div className="flex gap-4 mt-8">
<a aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition duration-300" href="https://www.instagram.com/pawel.jurewicz.from.heart/">
<iconify-icon icon="lucide:instagram" width="18"></iconify-icon>
</a>
<a aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition duration-300" href="https://www.linkedin.com/in/paweł-jurewicz-b417a4b5/">
<iconify-icon icon="lucide:linkedin" width="18"></iconify-icon>
</a>
<a aria-label="GitHub" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition duration-300" href="https://github.com/pawel-jurewicz-heartmade/pawel-jurewicz-heartmade">
<iconify-icon icon="lucide:github" width="18"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="mt-24 pt-8 border-t border-slate-900 max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 gap-4">
<p>© 2025 Heartmade. Paweł Jurewicz.</p>
<div className="flex gap-6">
<a className="hover:text-slate-400 transition" href="/regulamin">
            Regulamin
          </a>
<a className="hover:text-slate-400 transition" href="/polityka-prywatnosci">
            Polityka prywatności
          </a>
</div>
</div>
</section>
<div className="fixed bottom-6 left-6 right-6 z-[100] transform translate-y-[150%] transition-transform duration-700 ease-out pointer-events-none" id="cookie-banner">
<div className="max-w-4xl mx-auto glass border border-slate-800/50 p-6 rounded-2xl shadow-2xl pointer-events-auto">
<div className="flex flex-col md:flex-row items-center gap-6">
<div className="flex-1 text-center md:text-left">
<h4 className="text-slate-100 font-medium mb-1">
              Dbam o Twoją prywatność
            </h4>
<p className="text-sm text-slate-400 font-light leading-relaxed">
              Używam plików cookies i narzędzi takich jak Google Analytics oraz
              Hotjar, aby zrozumieć, jak mogę ulepszyć Heartmade dla Ciebie. Czy
              zgadzasz się na to?
            </p>
</div>
<div className="flex flex-wrap justify-center gap-3">
<button className="px-5 py-2 text-xs font-medium text-slate-400 hover:text-white transition duration-300" onclick="updateConsent('denied')">
              Tylko niezbędne
            </button>
<button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl transition duration-300 shadow-lg shadow-blue-500/20" onclick="updateConsent('granted')">
              Akceptuję wszystkie
            </button>
</div>
</div>
</div>
</div>


    </>
  );
}
