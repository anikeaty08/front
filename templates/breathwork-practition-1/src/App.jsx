import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
// Ustawienie domyślne: brak zgody na śledzenie
if (!localStorage.getItem('cookieConsent')) {
gtag('consent', 'default', {
'ad_storage': 'denied',
'ad_user_data': 'denied',
'ad_personalization': 'denied',
'analytics_storage': 'denied',
'wait_for_update': 500
});
} else {
// Jeśli zgoda już jest w pamięci przeglądarki, wczytaj ją
const consent = JSON.parse(localStorage.getItem('cookieConsent'));
gtag('consent', 'default', consent);
}



(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WJK2GF79');



function toggleReview(t){const e=t.previousElementSibling,o=e.querySelector(".dots"),n=e.querySelector(".full-text");n.classList.contains("hidden")?(n.classList.remove("hidden"),o.classList.add("hidden"),t.innerText="Zwiń"):(n.classList.add("hidden"),o.classList.remove("hidden"),t.innerText="Zobacz więcej")} function toggleMobileMenu(){const m=document.getElementById("mobile-menu");m.classList.contains("hidden")?m.classList.remove("hidden"):m.classList.add("hidden")} function openLightbox(src){const l=document.getElementById('lightbox'),i=document.getElementById('lightbox-img');i.src=src;l.classList.remove('hidden');setTimeout(()=>{l.classList.remove('opacity-0');i.classList.remove('scale-95');i.classList.add('scale-100')},10)} function closeLightbox(){const l=document.getElementById('lightbox'),i=document.getElementById('lightbox-img');l.classList.add('opacity-0');i.classList.remove('scale-100');i.classList.add('scale-95');setTimeout(()=>{l.classList.add('hidden');i.src=''},300)}



      document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const btn = document.getElementById('submitBtn');
    const status = document.getElementById('formStatus');
    const webhookUrl = 'https://olgajurewicz.com/form-handler.php';

    // Sprawdzenie czy biblioteka Enterprise jest załadowana
    if (typeof grecaptcha === 'undefined' || typeof grecaptcha.enterprise === 'undefined') {
        status.innerText = 'Błąd: Skrypt zabezpieczający Enterprise nie został załadowany.';
        status.classList.remove('hidden');
        return;
    }

    btn.disabled = true;
    btn.innerText = 'Weryfikacja...';

    // Wywołanie reCAPTCHA Enterprise
    grecaptcha.enterprise.ready(function() {
        grecaptcha.enterprise.execute('6LfhnjssAAAAAAprWOgJ0Qo9a8LZSEpHwqnE96gg', {action: 'submit'}).then(function(token) {
            
            const formData = new FormData(document.getElementById('contactForm'));
            const data = Object.fromEntries(formData);
            data.recaptchaToken = token;

            // Zbieranie zainteresowań (checkboxy)
            const interests = [];
            document.querySelectorAll('input[name="interests"]:checked').forEach(checkbox => {
                interests.push(checkbox.value);
            });
            data.interests = interests.join(', ');

            btn.innerText = 'Wysyłanie...';

            fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            .then(async response => {
                const result = await response.text();
                if (response.ok) {
                    status.innerText = 'Dziękuję! Twoja wiadomość została wysłana.';
                    status.style.color = '#BCCAC6';
                    status.classList.remove('hidden');
                    document.getElementById('contactForm').reset();
                } else {
                    status.innerText = 'Błąd: ' + result;
                    status.style.color = '#E6C2BF';
                    status.classList.remove('hidden');
                }
            })
            .catch(() => {
                status.innerText = 'Wystąpił błąd połączenia.';
                status.style.color = '#E6C2BF';
                status.classList.remove('hidden');
            })
            .finally(() => {
                btn.disabled = false;
                btn.innerText = 'Wyślij zgłoszenie';
            });
        });
    });
});
    


  (function() {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('cookie-accept');
    const rejectBtn = document.getElementById('cookie-reject');

    // Funkcja aktualizująca zgodę w GTM i localStorage
    function updateConsent(granted) {
      const consentStatus = granted ? 'granted' : 'denied';
      const consentObject = {
        'ad_storage': consentStatus,
        'ad_user_data': consentStatus,
        'ad_personalization': consentStatus,
        'analytics_storage': consentStatus
      };

      // Wyślij aktualizację do Google Tag Managera
      gtag('consent', 'update', consentObject);
      
      // Zapisz w przeglądarce
      localStorage.setItem('cookieConsent', JSON.stringify(consentObject));
      
      // Ukryj baner
      banner.style.display = 'none';
      
      // Opcjonalnie: odśwież stronę jeśli chcesz wymusić przeładowanie skryptów
      // window.location.reload(); 
    }

    // Sprawdź czy zgoda już była udzielona
    if (!localStorage.getItem('cookieConsent')) {
      banner.style.display = 'block';
    }

    acceptBtn.addEventListener('click', () => updateConsent(true));
    rejectBtn.addEventListener('click', () => updateConsent(false));
  })();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<noscript>
<iframe height="0" src="https://www.googletagmanager.com/ns.html?id=GTM-WJK2GF79" style={{display: 'none', visibility: 'hidden'}} width="0"></iframe>
</noscript>


<div className="fixed inset-0 overflow-hidden pointer-events-none">
<div className="breath-blob bg-[#D4E4EB] w-96 h-96 top-[-50px] left-[-100px]"></div>

<div className="breath-blob bg-[#E6C2BF] w-[35rem] h-[35rem] bottom-[-100px] right-[-100px] animation-delay-2000 opacity-40"></div>

<div className="breath-blob bg-[#D8E6E2] w-80 h-80 top-[30%] left-[40%] opacity-40 animation-delay-4000"></div>

</div>

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6">
<div className="flex glass-panel max-w-6xl rounded-full mr-auto ml-auto pt-3 pr-6 pb-3 pl-6 shadow-sm shadow-[#BCCAC6]/20 items-center justify-between">
<a className="text-xl tracking-tighter font-serif font-normal text-[#2D2D2D] z-50 relative group" href="#">
          Olga Jurewicz | Art of Breath
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#4F6D7A] transition-all duration-500 ease-out group-hover:w-full"></span>
</a>

<div className="hidden md:flex space-x-10 items-center">
<a className="text-xs uppercase tracking-widest text-[#6B7C77] hover:text-[#4F6D7A] transition-colors font-medium" href="https://olgajurewicz.com/#about">
            O metodzie RBM
          </a>
<a className="text-xs uppercase tracking-widest text-[#6B7C77] hover:text-[#4F6D7A] transition-colors font-medium" href="sesja-indywidualna.html">
            Sesje 1:1
          </a>
<a className="text-xs uppercase tracking-widest text-[#6B7C77] hover:text-[#4F6D7A] transition-colors font-medium" href="sesja-grupowa.html">
            Sesje Grupowe
          </a>
<a className="text-xs uppercase tracking-widest text-[#6B7C77] hover:text-[#4F6D7A] transition-colors font-medium" href="retreaty.html">
            Retreaty
          </a>
<a className="text-xs uppercase tracking-widest text-[#6B7C77] hover:text-[#4F6D7A] transition-colors font-medium" href="https://olgajurewicz.com/#bio">
            O mnie
          </a>
<a className="px-6 py-2.5 bg-[#4F6D7A] text-white rounded-full text-xs uppercase tracking-widest hover:bg-[#2D2D2D] transition-all hover:scale-[1.01] shadow-lg shadow-[#4F6D7A]/20" href="#contact">
            Kontakt
          </a>
</div>

<button className="md:hidden text-[#2D2D2D]" onclick="toggleMobileMenu()">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<div className="hidden absolute top-24 left-6 right-6 bg-[#FAFAF9]/95 backdrop-blur-xl border border-[#D8E6E2] rounded-2xl shadow-2xl p-6 flex flex-col space-y-4 md:hidden z-40" id="mobile-menu">
<a className="text-xs uppercase tracking-widest text-[#6B7C77] hover:text-[#4F6D7A] transition-colors font-medium py-2 border-b border-[#D8E6E2]/50 transition-colors" href="https://olgajurewicz.com/#about" onclick="toggleMobileMenu()">
          O metodzie RBM
        </a>
<a className="text-xs uppercase tracking-widest text-[#6B7C77] hover:text-[#4F6D7A] transition-colors font-medium py-2 border-b border-[#D8E6E2]/50 transition-colors" href="sesja-indywidualna.html" onclick="toggleMobileMenu()">
          Sesje 1:1
        </a>
<a className="text-xs uppercase tracking-widest text-[#6B7C77] hover:text-[#4F6D7A] transition-colors font-medium py-2 border-b border-[#D8E6E2]/50 transition-colors" href="sesja-grupowa.html" onclick="toggleMobileMenu()">
          Sesje Grupowe
        </a>
<a className="text-xs uppercase tracking-widest text-[#6B7C77] hover:text-[#4F6D7A] transition-colors font-medium py-2 border-b border-[#D8E6E2]/50 transition-colors" href="retreaty.html" onclick="toggleMobileMenu()">
          Retreaty
        </a>
<a className="text-xs uppercase tracking-widest text-[#6B7C77] hover:text-[#4F6D7A] transition-colors font-medium py-2 border-b border-[#D8E6E2]/50 transition-colors" href="https://olgajurewicz.com/#bio" onclick="toggleMobileMenu()">
          O mnie
        </a>
<a className="px-6 py-2.5 bg-[#4F6D7A] text-white rounded-full text-xs uppercase tracking-widest hover:bg-[#2D2D2D] transition-all hover:scale-[1.01] shadow-lg shadow-[#4F6D7A]/20 text-center w-fit mx-auto" href="#contact" onclick="toggleMobileMenu()">
          Kontakt
        </a>
</div>
</nav>

<header className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
<div className="max-w-4xl mx-auto space-y-10 fade-up">
<a className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#BCCAC6]/50 bg-[#FFFFFF]/40 backdrop-blur-sm mb-6 hover:bg-[#FFFFFF]/80 hover:border-[#BCCAC6] transition-all cursor-pointer" href="sesja-grupowa.html">
<span className="w-1.5 h-1.5 rounded-full bg-[#E6C2BF] animate-pulse"></span>
<span className="text-xs text-[#6B7C77] tracking-wide uppercase font-medium">
            Zapisy na sesje grupowe są otwarte
          </span>
</a>
<h1 className="text-6xl md:text-8xl lg:text-9xl text-[#2D2D2D] font-thin tracking-tight leading-[0.95]">
          Buduję
          <span className="italic font-serif text-[#E6C2BF] font-light">
            życie,
          </span>
<br/>
          którego
          <span className="italic font-serif text-[#4F6D7A] font-light">
            pragnę.
          </span>
</h1>
<p className="text-lg md:text-xl text-[#6B7C77] max-w-xl mx-auto font-light leading-relaxed fade-up delay-100">
          Oddech za oddechem.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-5 fade-up delay-200 pt-8">
<a className="group relative px-9 py-4 bg-[#2D2D2D] text-[#FAFAF9] rounded-full overflow-hidden transition-all hover:shadow-xl hover:shadow-[#BCCAC6]/40" href="#offerings">
<span className="relative z-10 text-xs tracking-widest uppercase flex items-center gap-2 font-medium">
              Rozpocznij podróż
              <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</span>
<div className="absolute inset-0 bg-[#4F6D7A] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
</a>
<a className="px-9 py-4 bg-transparent border border-[#BCCAC6] text-[#4F6D7A] rounded-full hover:bg-[#F4ECE2] transition-all text-xs tracking-widest uppercase font-medium" href="#bio">
            Dowiedz się więcej
          </a>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40 text-[#4F6D7A]">
<iconify-icon icon="lucide:chevron-down" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</header>

<section className="py-24 md:py-32 px-6 bg-white relative" id="bio">
<div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mr-auto ml-auto gap-x-20 gap-y-16 items-center">

<div className="relative order-1">
<div className="aspect-[3/4] rounded-2xl overflow-hidden relative shadow-lg shadow-[#BCCAC6]/30">
<img alt="Portret Olgi Jurewicz" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" src="https://olgajurewicz.com/images/olga.webp"/>
<div className="absolute inset-0 bg-[#4F6D7A]/5 mix-blend-multiply"></div>
</div>

<div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#D4E4EB]/40 rounded-full -z-10 blur-2xl"></div>
</div>

<div className="space-y-10 order-2">
<div>
<div className="text-xs font-semibold uppercase tracking-widest text-[#4F6D7A] mb-4 flex items-center gap-2">
<span className="w-8 h-px bg-[#4F6D7A]"></span>
              O mnie
            </div>
<h2 className="text-4xl md:text-5xl font-light text-[#2D2D2D] tracking-tight leading-tight">
              Cześć,
              <span className="italic text-[#E6C2BF] font-normal">tu Olga.</span>
</h2>
</div>
<div className="space-y-6 text-[#6B7C77] font-light text-lg leading-loose">
<p>
              Jestem pierwszą w Polsce dyplomowaną facylitatorką Rebirthing
              Breathwork Mastery (School of Breathwork Australia), a także
              artystką i świadomą mamą dwóch córek. Macierzyństwo stało się dla
              mnie najgłębszą inspiracją do rozwoju i stawania w mojej mocy.
            </p>
<p className="">
              Prowadzę sesje i retreaty oddechowe jako przestrzeń świadomego
              tworzenia życia w zgodzie z wartościami – z łagodnością,
              autentycznością i zaufaniem do procesu, który toczy się we własnym
              rytmie.
            </p>
<p className="text-[#4F6D7A] font-normal">
              Moja intencja to tworzenie najlepszych warunków i pełnego wsparcia
              dla Twojego wzrostu i sięgania po pełnię własnego potencjału.
            </p>
</div>

<div className="hover:shadow-md transition-shadow duration-300 bg-[#FAFAF9] border-[#D8E6E2] border rounded-2xl mt-8 pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="flex flex-col sm:flex-row gap-6 items-center">

<div className="w-full sm:w-1/3 relative group overflow-hidden rounded-lg shadow-sm border border-[#E6E6E6]">
<div className="aspect-[4/3] bg-[#F4ECE2] relative overflow-hidden">

<img alt="Certyfikat Rebirthing Breathwork Mastery Olga Jurewicz" className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:opacity-100 transition-opacity duration-500" src="https://olgajurewicz.com/images/TSOB_Certificate_Olga_Jurewicz.webp"/>
</div>
<a className="flex items-center justify-center group-hover:bg-[#4F6D7A]/10 transition-colors bg-[#4F6D7A]/0 absolute top-0 right-0 bottom-0 left-0 cursor-zoom-in" onclick="openLightbox('https://olgajurewicz.com/images/TSOB_Certificate_Olga_Jurewicz.webp'); return false;">
<div className="group-hover:opacity-100 transform group-hover:translate-y-0 transition-all duration-300 bg-white/90 opacity-0 rounded-full pt-2 pr-2 pb-2 pl-2 shadow-lg backdrop-blur-sm translate-y-2">
<svg className="text-[#4F6D7A]" data-icon-set="lucide" data-lucide="eye" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0"></path>
<circle cx="12" cy="12" r="3"></circle>
</g>
</svg>
</div>
</a>
</div>

<div className="w-full sm:w-2/3 space-y-3">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-[#E6C2BF]" icon="lucide:award" strokeWidth="1.5" width="20"></iconify-icon>
<span className="uppercase text-xs font-semibold text-[#BCCAC6] tracking-widest">
                    Certyfikat
                  </span>
</div>
<h4 className="text-[#2D2D2D] font-serif text-xl font-normal leading-tight">
                  International Certificate in Breathwork Mastery
                </h4>
<p className="text-sm text-[#6B7C77] font-light leading-relaxed">
                  Jestem breathworkerką certyfikowaną w
                  <span className="font-medium text-[#4F6D7A]">
                    The School Of Breathwork
                  </span>
                  z Australii.
                </p>
</div>
</div>
</div>
<div className="pt-6 border-t border-[#D8E6E2]">
<div className="flex items-center gap-3 text-[#4F6D7A] text-sm font-medium tracking-wide">
<span>Poznaj moją historię</span>
<iconify-icon icon="lucide:arrow-down" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-[#F4ECE2] relative overflow-hidden" id="about">

<div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#FFFFFF]/50 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4"></div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row gap-16 items-start">
<div className="md:w-5/12">
<div className="text-xs font-semibold uppercase tracking-widest text-[#4F6D7A] mb-4 flex items-center gap-2">
<span className="w-8 h-px bg-[#4F6D7A]"></span>
              Co to jest RBM?
            </div>
<h2 className="text-4xl md:text-5xl font-light text-[#2D2D2D] tracking-tight leading-tight mb-8">
              Oddech jest mostem między
              <span className="italic text-[#4F6D7A] font-normal">świadomym</span>
              a
              <span className="italic text-[#E6C2BF] font-normal">
                nieświadomym
              </span>
              .
            </h2>
</div>
<div className="md:w-7/12 space-y-6 text-[#6B7C77] font-light text-lg leading-loose">
<p>
              Ostatnio coraz więcej mówi się o pracy z oddechem (Breathwork) — i
              nie bez powodu. Kolejne badania pokazują, jak ogromny wpływ ma
              świadome oddychanie na nasze samopoczucie, emocje i ogólny
              dobrostan. Samo słowo Breathwork to tak naprawdę zbiór wielu
              różnych praktyk — od jogicznego oddechu (pranajamy), przez oddech
              pudełkowy czy oddech holotropowy, po różne współczesne metody
              terapeutyczne.
            </p>
<p>
              Niektóre style są dynamiczne - kierujące do doświadczeń typu katharsis. Są też takie, które działają odwrotnie:
              łagodnie, spokojnie, przez nos. I właśnie do tej drugiej grupy należy ta delikatna, przywspółczulna praktyka.
            </p>
<p>
              Daje przestrzeń na uwalnianie napięć, puszczanie tego, co zalega,
              i odnajdywanie w sobie spokoju, lekkości i większej prawdy o
              sobie.
            </p>
</div>
</div>
<div className="mt-20 pt-16 border-t border-[#BCCAC6]/40 flex flex-col md:flex-row gap-16 items-start">
<div className="md:w-5/12">
<h3 className="text-2xl md:text-3xl font-serif text-[#2D2D2D] font-normal leading-tight">
              Co wyróżnia Rebirthing Breathwork Mastery spośród innych stylów
              pracy z oddechem?
            </h3>
</div>
<div className="md:w-7/12 space-y-6 text-[#6B7C77] font-light text-lg leading-loose">
<p>
              Podczas sesji RBM koncentrujemy się na pełnym, świadomym,
              połączonym i łagodnym oddechu. To delikatne, a zarazem głęboko
              transformujące podejście zaprasza zarówno subtelne zmiany, jak i
              intensywne uwolnienia — każde z nich jest ważne i stopniowo
              integrowane w procesie.
            </p>
<p>
              W każdej sesji nacisk kładziony jest na poczucie dopełnienia —
              tak, byś zakończył/a spotkanie z wrażeniem, że wykonałaś/eś
              realny, zintegrowany krok naprzód. W swojej istocie RBM to nie
              tylko praca z oddechem — to proces, który wspiera Cię w tym, by
              Twoje życie zaczęło podążać w kierunku Twojej najgłębszej
              intencji.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAF9]" id="offerings">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-4xl md:text-5xl font-light text-[#2D2D2D] tracking-tight font-serif">
              Oferta
            </h2>
<p className="mt-4 text-[#6B7C77] max-w-md font-light text-lg">
              Wybierz ścieżkę, która rezonuje z Twoimi obecnymi potrzebami.
            </p>
</div>
<a className="text-sm border-b border-[#4F6D7A] pb-0.5 hover:opacity-60 transition-opacity text-[#4F6D7A] font-medium" href="#contact">
            Zobacz pełny grafik
          </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-white p-8 rounded-2xl border border-[#D8E6E2] hover:border-[#BCCAC6] transition-all duration-500 hover:shadow-xl hover:shadow-[#D4E4EB]/50 flex flex-col justify-between h-full">
<div>
<div className="w-12 h-12 bg-[#F4ECE2] rounded-full flex items-center justify-center mb-8 text-[#4F6D7A] group-hover:scale-110 group-hover:bg-[#E6C2BF]/20 transition-all">
<iconify-icon icon="lucide:wind" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-serif text-[#2D2D2D] mb-3 font-normal">
                Sesja indywidualna
              </h3>
<p className="text-[#6B7C77] font-light text-base leading-relaxed">
                Pierwsze spotkanie rozpoczynamy od krótkiego wprowadzenia do
                RBM.
              </p>
</div>
<div className="pt-6 border-t border-[#F4ECE2]">
<a className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#F4ECE2] text-[#4F6D7A] rounded-full text-xs uppercase tracking-widest hover:bg-[#4F6D7A] hover:text-white transition-all font-medium group-hover:scale-[1.02]" href="sesja-indywidualna.html">
                Zobacz szczegóły
              </a>
</div>
</div>

<div className="group relative bg-white p-8 rounded-2xl border border-[#D8E6E2] hover:border-[#BCCAC6] transition-all duration-500 hover:shadow-xl hover:shadow-[#D4E4EB]/50 flex flex-col justify-between h-full">
<div>
<div className="w-12 h-12 bg-[#D8E6E2]/30 rounded-full flex items-center justify-center mb-8 text-[#4F6D7A] group-hover:scale-110 group-hover:bg-[#D8E6E2] transition-all">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-serif text-[#2D2D2D] mb-3 font-normal">
                Sesja Grupowa
              </h3>
<p className="text-[#6B7C77] font-light text-base leading-relaxed">
                Grupowa sesja w kameralnej, 4-osobowej przestrzeni, która łączy
                indywidualną głębię pracy z mądrością procesu grupowego.
              </p>
</div>
<div className="pt-6 border-t border-[#F4ECE2]">
<a className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#D8E6E2] text-[#4F6D7A] rounded-full text-xs uppercase tracking-widest hover:bg-[#4F6D7A] hover:text-white transition-all font-medium group-hover:scale-[1.02]" href="sesja-grupowa.html">
                Zobacz szczegóły
              </a>
</div>
</div>

<div className="group relative bg-white p-8 rounded-2xl border border-[#D8E6E2] hover:border-[#BCCAC6] transition-all duration-500 hover:shadow-xl hover:shadow-[#D4E4EB]/50 flex flex-col justify-between h-full">
<div className="">
<div className="w-12 h-12 bg-[#D4E4EB]/30 rounded-full flex items-center justify-center mb-8 text-[#4F6D7A] group-hover:scale-110 group-hover:bg-[#D4E4EB] transition-all">
<iconify-icon icon="lucide:briefcase" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-serif text-[#2D2D2D] mb-3 font-normal">
                Retreaty oddechowe
              </h3>
<p className="text-[#6B7C77] font-light text-base leading-relaxed">
                Kameralne retreaty dedykowane świadomemu domknięciu tego, co
                stare i wejściu w nowe.
              </p>
</div>
<div className="pt-6 border-t border-[#F4ECE2]">
<a className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#D4E4EB] text-[#4F6D7A] rounded-full text-xs uppercase tracking-widest hover:bg-[#4F6D7A] hover:text-white transition-all font-medium group-hover:scale-[1.02]" href="retreaty.html">
                Zobacz szczegóły
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-[#FAFAF9]" id="reviews">

<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D8E6E2]/40 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2"></div>
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<span className="text-xs font-semibold uppercase tracking-widest text-[#BCCAC6]">
            Opinie
          </span>
<h2 className="text-4xl md:text-5xl font-light text-[#2D2D2D] mt-4 font-serif tracking-tight">
            Historie Przemiany
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="p-10 bg-[#FFFFFF] border border-[#F4ECE2] rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
<div className="flex gap-1 text-[#E6C2BF] mb-5">
<iconify-icon className="text-[#4F6D7A]" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="text-[#4F6D7A]" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="text-[#4F6D7A]" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="text-[#4F6D7A]" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="text-[#4F6D7A]" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-[#6B7C77] font-light leading-relaxed italic text-lg mb-2">
              „Na sesję z Olgą przyszłam z ciekawością i zaufaniem, ale bez
              wiedzy, czego się spodziewać. Już po pierwszej rozmowie poczułam,
              że intencja, z którą wchodzę, naprawdę ma znaczenie —
              <span className="dots">...</span>
<span className="full-text hidden">
                że mogę wybrać dla siebie najlepszy możliwy scenariusz i
                pozwolić ciału go poczuć. Sam proces oddychania okazał się
                niezwykle subtelny i kojący. Olga tworzy atmosferę absolutnego
                bezpieczeństwa — pełnej obecności, bez doradzania, bez presji.
                Czuję się przy niej jak otulona spokojem, jakbym mogła wreszcie
                odpocząć i usłyszeć samą siebie. W trakcie sesji pojawiły się
                wizje, uczucia, odpowiedzi, których nie spodziewałam się
                odnaleźć. Przyszły ze mnie — bez wysiłku, bez analizowania. Po
                sesji czułam przestrzeń, lekkość i głęboki sens moich decyzji.
                Wyszłam z poczuciem mocy i wewnętrznego spokoju, jakbym zabrała
                ze sobą butelkę pełną ciszy i mogła się z niej napić zawsze
                wtedy, kiedy tego potrzebuję.”
              </span>
</p>
<button className="text-[#4F6D7A] text-sm font-medium mb-8 hover:opacity-70 focus:outline-none block transition-opacity" onclick="toggleReview(this)">
              Zobacz więcej
            </button>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-[#F4ECE2] rounded-full flex items-center justify-center text-xs text-[#4F6D7A] font-semibold tracking-widest">
                AW
              </div>
<div>
<p className="text-sm font-medium text-[#2D2D2D]">Agata</p>
<p className="text-xs text-[#BCCAC6]">artystka</p>
</div>
</div>
</div>

<div className="p-10 bg-[#FFFFFF] border border-[#F4ECE2] rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
<div className="flex gap-1 text-[#E6C2BF] mb-5">
<iconify-icon className="text-[#4F6D7A]" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="text-[#4F6D7A]" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="text-[#4F6D7A]" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="text-[#4F6D7A]" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="text-[#4F6D7A]" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-[#6B7C77] font-light leading-relaxed italic text-lg mb-2">
              „Doświadczyłam indywidualnej sesji oddechowej u Olgi. Cóż to była
              za doświadczenie!!! Cóż to była za przepiękna, niezwykła podróż
              mojego układu nerwowego!
              <span className="dots">...</span>
<span className="full-text hidden">
                Wielu różnych technik pracy z ciałem doświadczyłam, ale nigdy
                tak subtelnej, a tak mocnej jednocześnie. Nie da się tego
                słowami opisać, ponieważ jest to głębokie, prawdziwe spotkanie z
                samym sobą, więc trzeba tego doświadczyć. Wiem co było po i to
                mogę opisać jako przypływ mocy do działania, którego mi
                brakowało bardzo. Gotowości do brania się zaczepkę życie. Nie
                poznawałam siebie w tym czyli doświadczałam jakiejś nowej wersji
                siebie! Fenomenalne to było! Rozjaśniała mi się wizja życia i
                wizja tego czego w życiu potrzebuję. Bardzo to było przyjemne.
                Transformujące i realnie zmieniające moje nastawienie.”
              </span>
</p>
<button className="text-[#4F6D7A] text-sm font-medium mb-8 hover:opacity-70 focus:outline-none block transition-opacity" onclick="toggleReview(this)">
              Zobacz więcej
            </button>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-[#D4E4EB]/50 rounded-full flex items-center justify-center text-xs text-[#4F6D7A] font-semibold tracking-widest">
                JS
              </div>
<div className="">
<p className="text-sm font-medium text-[#2D2D2D]">Joanna</p>
<p className="text-xs text-[#BCCAC6]">psycholożka</p>
</div>
</div>
</div>

<div className="p-10 bg-[#FFFFFF] border border-[#F4ECE2] rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
<div className="flex gap-1 text-[#E6C2BF] mb-5">
<iconify-icon className="text-[#4F6D7A]" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="text-[#4F6D7A]" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="text-[#4F6D7A]" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="text-[#4F6D7A]" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="text-[#4F6D7A]" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-[#6B7C77] font-light leading-relaxed italic text-lg mb-2">
              "Mam za sobą wiele lat terapii, przeróżnych warsztatów
              rozwojowych, pracy z plant medycine, coachingu, a mimo to sesje
              breathworku w nurcie RBM zaszokowały
              <span className="dots">...</span>
<span className="full-text hidden">
                mnie swoją skutecznością. Praca w punkt. Świadome i uważne
                budowanie intencji zmienia chaotyczną pracę w rozwój w bardzo
                konkretnym kierunku. Do tego same sesje, z jednej strony
                delikatne, ale w działaniu baradzo mocne. Mam za sobą 10 sesji i
                muszę powiedzieć, zauważałem konkretne efekty każdej z nich.
                Albo coś się uwalniało, albo jakby "wdrukowywało się" we mnie
                coś nowego. Niezwykła metoda! Bardzo też lubię sposób pracy
                Olgi. Wprowadza dużo spokoju i bezpieczeństwa do sesji."
              </span>
</p>
<button className="text-[#4F6D7A] text-sm font-medium mb-8 hover:opacity-70 focus:outline-none block transition-opacity" onclick="toggleReview(this)">
              Zobacz więcej
            </button>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-[#E6C2BF]/30 rounded-full flex items-center justify-center text-xs text-[#4F6D7A] font-semibold tracking-widest">
                PJ
              </div>
<div>
<p className="text-sm font-medium text-[#2D2D2D]">Paweł</p>
<p className="text-xs text-[#BCCAC6]">product manager</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#2D2D2D] text-[#FAFAF9] rounded-t-[3rem] mt-12 relative overflow-hidden" id="contact">
<div className="absolute inset-0 opacity-20 pointer-events-none">
<div className="breath-blob bg-[#4F6D7A] w-[40rem] h-[40rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
</div>
<div className="max-w-4xl mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-20">
<div className="flex flex-col justify-center">
<h2 className="text-4xl md:text-5xl font-serif text-[#FAFAF9] mb-8 font-light leading-tight">
              Rozpocznij
              <br/>
              rozmowę.
            </h2>
<p className="text-[#BCCAC6] font-light mb-10 text-lg leading-relaxed">
              Niezależnie od tego, czy masz pytania dotyczące pracy z oddechem,
              czy jesteś gotowy zarezerwować pierwszą sesję, jestem tutaj.
            </p>
<div className="space-y-6">
<div className="flex items-center gap-4 text-base font-light text-[#E6E6E6]">
<div className="w-10 h-10 rounded-full bg-[#4F6D7A]/20 flex items-center justify-center border border-[#4F6D7A]/30">
<iconify-icon icon="lucide:mail" width="18"></iconify-icon>
</div>
<a className="hover:text-[#FAFAF9] transition-colors" href="mailto:breathe@olgajurewicz.com">
                  breathe@olgajurewicz.com
                </a>
</div>
<div className="flex items-center gap-4 text-base font-light text-[#E6E6E6]">
<div className="w-10 h-10 rounded-full bg-[#4F6D7A]/20 flex items-center justify-center border border-[#4F6D7A]/30">
<iconify-icon icon="lucide:map-pin" width="18"></iconify-icon>
</div>
<span>Warszawa / Online</span>
</div>
<div className="flex items-center gap-4 text-base font-light text-[#E6E6E6]">
<div className="w-10 h-10 rounded-full bg-[#4F6D7A]/20 flex items-center justify-center border border-[#4F6D7A]/30">
<iconify-icon icon="lucide:instagram" width="18"></iconify-icon>
</div>
<a className="hover:text-[#FAFAF9] transition-colors" href="https://www.instagram.com/olgajurewicz/" rel="noopener noreferrer" target="_blank">
                  @olgajurewicz
                </a>
</div>
</div>
</div>
<div className="bg-[#363636]/60 p-10 rounded-3xl border border-[#4F6D7A]/30 backdrop-blur-md shadow-2xl shadow-black/20">
<form className="space-y-8" id="contactForm">
<div className="grid grid-cols-2 gap-6">
<div className="group">
<label className="block text-xs uppercase tracking-widest text-[#BCCAC6] mb-3 font-medium">
                    Imię
                    <span className="text-[#E6C2BF]">*</span>
</label>
<input className="w-full bg-transparent border-b border-[#6B7C77] py-2 focus:border-[#E6C2BF] outline-none transition-colors text-[#FAFAF9] placeholder-[#6B7C77] font-light" name="firstName" placeholder="Anna" required="" type="text"/>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-[#BCCAC6] mb-3 font-medium">
                    Nazwisko
                    <span className="text-[#E6C2BF]">*</span>
</label>
<input className="w-full bg-transparent border-b border-[#6B7C77] py-2 focus:border-[#E6C2BF] outline-none transition-colors text-[#FAFAF9] placeholder-[#6B7C77] font-light" name="lastName" placeholder="Kowalska" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-[#BCCAC6] mb-3 font-medium">
                  Email
                  <span className="text-[#E6C2BF]">*</span>
</label>
<input className="w-full bg-transparent border-b border-[#6B7C77] py-2 focus:border-[#E6C2BF] outline-none transition-colors text-[#FAFAF9] placeholder-[#6B7C77] font-light" name="email" placeholder="anna@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-[#BCCAC6] mb-5 font-medium">
                  Interesuje mnie
                </label>
<div className="flex flex-wrap gap-3">
<label className="cursor-pointer group">
<input className="peer sr-only custom-checkbox" name="interests" type="checkbox" value="Sesja 1:1"/>
<div className="px-5 py-2 rounded-full border border-[#6B7C77] text-xs text-[#E6E6E6] transition-all hover:border-[#E6C2BF] group-hover:bg-[#4F6D7A]/20">
                      Sesja 1:1
                    </div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only custom-checkbox" name="interests" type="checkbox" value="Sesja grupowa"/>
<div className="px-5 py-2 rounded-full border border-[#6B7C77] text-xs text-[#E6E6E6] transition-all hover:border-[#E6C2BF] group-hover:bg-[#4F6D7A]/20">
                      Sesja grupowa
                    </div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only custom-checkbox" name="interests" type="checkbox" value="Retreat"/>
<div className="px-5 py-2 rounded-full border border-[#6B7C77] text-xs text-[#E6E6E6] transition-all hover:border-[#E6C2BF] group-hover:bg-[#4F6D7A]/20">
                      Retreat
                    </div>
</label>
</div>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-[#BCCAC6] mb-3 font-medium">
                  Wiadomość
                  <span className="text-[#E6C2BF]">*</span>
</label>
<textarea className="w-full bg-transparent border-b border-[#6B7C77] py-2 focus:border-[#E6C2BF] outline-none transition-colors text-[#FAFAF9] resize-none placeholder-[#6B7C77] font-light" name="message" placeholder="Opowiedz mi o swojej podróży..." required="" rows="3"></textarea>
</div>
<div className="flex items-start gap-3">
<div className="relative flex items-center mt-0.5">
<input className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-[#6B7C77] bg-transparent transition-all checked:border-[#4F6D7A] checked:bg-[#4F6D7A]" id="privacy-policy" required="" type="checkbox"/>
<iconify-icon className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" icon="lucide:check" width="12"></iconify-icon>
</div>
<label className="cursor-pointer select-none text-xs font-light leading-relaxed text-[#BCCAC6]" htmlFor="privacy-policy">
                  Oświadczam, że zapoznałem/am się z Polityką Prywatności i
                  wyrażam zgodę na otrzymywanie odpowiedzi.
                  <span className="text-[#E6C2BF]">*</span>
</label>
</div>
<button className="w-full py-4 bg-[#FAFAF9] text-[#2D2D2D] rounded-xl font-medium text-sm hover:bg-[#E6C2BF] transition-colors mt-4" id="submitBtn" type="submit">
                Wyślij zgłoszenie
              </button>
<p className="text-[10px] text-[#BCCAC6] mt-4 font-light leading-tight">
                Strona jest chroniona przez reCAPTCHA. Obowiązują 
                <a className="underline" href="https://policies.google.com/privacy">Polityka prywatności</a> oraz 
                <a className="underline" href="https://policies.google.com/terms">Warunki korzystania z usług</a> Google.
              </p>
<div className="hidden text-xs mt-3 text-center font-medium tracking-wide" id="formStatus"></div>
</form>
</div>
</div>
</div>
<footer className="max-w-6xl mx-auto pt-16 border-t border-[#6B7C77]/30 mt-20 flex flex-col md:flex-row justify-between items-center text-xs text-[#BCCAC6]">
<div className="mb-4 md:mb-0 font-light">
          © 2025 Olga Jurewicz. Wszelkie prawa zastrzeżone.
          <span className="mx-2 opacity-50">|</span>
          Vibe-coded by
          <a className="hover:text-[#FAFAF9] transition-colors" href="https://heartmade.pl" rel="noopener norefferer nofollow" target="_blank">
            Heartmade
          </a>
</div>
<div className="flex gap-8 font-medium">
<a className="hover:text-[#FAFAF9] transition-colors" href="polityka-prywatnosci.html">
            Polityka Prywatności
          </a>
<a className="hover:text-[#FAFAF9] transition-colors" href="regulamin.html">
            Regulamin
          </a>
</div>
</footer>
</section>

<div className="fixed inset-0 z-[100] hidden bg-[#2D2D2D]/95 backdrop-blur-sm flex items-center justify-center opacity-0 transition-opacity duration-300" id="lightbox" onclick="closeLightbox()">
<img alt="Certyfikat" className="max-w-[90vw] max-h-[90vh] rounded-sm shadow-2xl transform scale-95 transition-transform duration-300 object-contain" id="lightbox-img" onclick="event.stopPropagation()" src=""/>
<button className="absolute top-6 right-6 text-[#FAFAF9] hover:text-[#E6C2BF] transition-colors p-2" onclick="closeLightbox()">
<iconify-icon icon="lucide:x" width="32"></iconify-icon>
</button>
</div>
<div className="cookie-glass rounded-3xl p-6 fade-up" id="cookie-banner">
<div className="space-y-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#4F6D7A]" icon="lucide:cookie" width="24"></iconify-icon>
<h4 className="font-serif text-xl text-[#2D2D2D]">Dbam o Twoją prywatność</h4>
</div>
<p className="text-sm text-[#6B7C77] font-light leading-relaxed">
      Używamy ciasteczek, aby zrozumieć, jak korzystasz z Art of Breath. Dzięki temu możemy ulepszać nasze treści i sesje. Szczegóły znajdziesz w <a className="underline hover:text-[#4F6D7A]" href="polityka-prywatnosci.html">Polityce Prywatności</a>.
    </p>
<div className="flex gap-3 pt-2">
<button className="flex-1 px-4 py-2.5 bg-[#4F6D7A] text-white rounded-full text-xs uppercase tracking-widest hover:bg-[#2D2D2D] transition-all" id="cookie-accept">
        Akceptuję wszystkie
      </button>
<button className="flex-1 px-4 py-2.5 border border-[#BCCAC6] text-[#6B7C77] rounded-full text-xs uppercase tracking-widest hover:bg-[#F4ECE2] transition-all" id="cookie-reject">
        Tylko niezbędne
      </button>
</div>
</div>
</div>


    </>
  );
}
