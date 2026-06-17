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
      
tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
brand: {
DEFAULT: '#0B0F19',
light: '#1f2b42',
accent: '#0097a7',
surface: 'rgba(255, 255, 255, 0.03)',
border: 'rgba(255, 255, 255, 0.1)'
},
tech: {
card: '#111625',
glow: '#3b82f6'
}
},
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
serif: ['"Newsreader"', 'serif'],
},
animation: {
'spin-slow': 'spin 12s linear infinite',
'spin-reverse': 'spin 15s linear infinite reverse',
'beam': 'beam 2s linear infinite',
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
'scan': 'scan 3s ease-in-out infinite',
},
keyframes: {
beam: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(100%)' }
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' }
},
scan: {
'0%, 100%': { transform: 'translateX(-100%)' },
'50%': { transform: 'translateX(100%)' }
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener('DOMContentLoaded', () => {
          particlesJS('particles-js', {
              particles: {
                  number: { value: 40, density: { enable: true, value_area: 800 } },
                  color: { value: "#ffffff" },
                  opacity: { value: 0.3, random: false },
                  size: { value: 2, random: true },
                  line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.15, width: 1 },
                  move: { enable: true, speed: 0.5, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
              }
          });
      });
    


      lucide.createIcons();

      // Translation Data
      const translations = {
          en: {
              nav_features: "Features", nav_security: "Data & Security", nav_team: "Team", nav_testimonials: "Testimonials", nav_pricing: "Pricing", nav_faq: "FAQ",
              btn_start: "Start Free",
              hero_title1: "Your AI consultation", hero_title2: "support",
              hero_subtitle1: "Less administration,", hero_subtitle2: "More patient care!",
              hero_btn_demo: "Start Demo", hero_btn_video: "Watch Video",
              usp1_label: "DATA & SECURITY", usp1_text: "Safest app",
              usp2_label: "Flexible", usp2_text: "Also external consults",
              usp3_label: "Archive", usp3_text: "Review all consults",
              features_title: "Designed together with GPs for your practice",
              features_subtitle: "DoctoMinutes supports and relieves your administration and practice processes.",
              feat1_title: "Mobility & Time Savings", feat1_desc: "Discover the unique function of DoctoMinutes, the only solution that works fully outside the practice during home visits!", feat1_desc2: "Upon return to the practice, you are done. No double work, pure convenience, and less administrative pressure.",
              feat2_title: "History & Care Quality", feat2_desc: "Thanks to our rock-solid data security, you always have direct insight into previous consultations. Draw up an accurate treatment plan faster.", feat2_desc2: "Guarantee maximum care quality and efficiency for every patient. Choose certainty and complete insight!",
              feat3_title: "Data Safety & Security", feat3_desc: "Where other apps must delete data, DoctoMinutes offers insight without compromises. We meet the highest safety standards.", feat3_desc2: "This allows you to safely consult previous consultations, draw up more accurate treatment plans, and miss no detail.",
              sec_title: "The safest choice for your practice", sec_subtitle: "The result for maximum care safety and quality.",
              sec_c1_title: "BBN3 Security", sec_c1_desc: "We use BBN3, the strictest security level. Data is protected like a digital vault.",
              sec_c1_p1: "Highest digital protection", sec_c1_p2: "Continuous monitoring", sec_c1_p3: "Encrypted storage",
              sec_c2_title: "NEN 7510 Certified", sec_c2_desc: "Your patient data is safe according to the official Dutch care standard (NEN 7510).",
              sec_c2_p1: "AVG/GDPR Compliant", sec_c2_p2: "Medical privacy standards", sec_c2_p3: "Annual audits",
              sec_c3_title: "VIR-BI Standard", sec_c3_desc: "Data security at 'State Secret' level. An extra impenetrable protection layer for your data.",
              sec_c3_p1: "Defense-level encryption", sec_c3_p2: "Zero-trust architecture", sec_c3_p3: "Full monitoring in NL",
              sec_logos: "SECURITY TECHNIQUES ALSO IMPLEMENTED BY OUR TEAM AT",
              team_label: "THE TEAM", team_title: "Passionate innovators behind DoctoMinutes", team_subtitle: "Meet our dedicated team. Our product is made by and for GPs.",
              role_gp_adv: "GP & Advisor",
              testi_title: "Experiences from GPs",
              testi_1: "\"DoctoMinutes saves me an average of 2 hours of administration per day. I can really listen to my patients again without constantly typing.\"",
              loc_flevo: "GP, Flevoland",
              testi_2: "\"So nice to have an application where I am unburdened and don't have to worry about security and GDPR.\"",
              loc_groningen: "GP, Groningen",
              testi_3: "\"What energy this gives! Previously I did my administration in the evenings, but thanks to the flexibility of this tool I now do it immediately during the home visit.\"",
              loc_gelderland: "GP, Gelderland",
              testi_4: "\"Finally clarity about safety. For years I doubted whether our method was really watertight, but this product shows what truly GDPR-proof working entails.\"",
              loc_utrecht: "GP, Utrecht",
              testi_5: "\"Because previous consultations are consulted by the app, my treatment plan is much more accurate. I no longer have to guess at the history.\"",
              loc_limburg: "GP, Limburg",
              testi_6: "\"A true relief for work-life balance. Because administration is no longer a 'must-do' afterwards, I go home with peace of mind.\"",
              loc_drente: "GP, Drente",
              testi_7: "\"The administrative pressure is drastically reduced because I complete the anamnesis immediately on location. No more double work upon return to the practice.\"",
              loc_noord: "GP, North Holland",
              testi_8: "\"I am always skeptical about data security, but the explanation about security standards convinced me. I now know for sure that my patient data is in safe hands.\"",
              testi_9: "\"Amazing to notice how much time this saves! I never want to go back to the old way.\"",
              testi_10: "\"Consulting old consultations from the past on location is a gamechanger. You immediately have the complete picture, safe and sound.\"",
              testi_11: "\"For the first time, it is really clear to me what GDPR-proof working entails. No more gray areas, but solid guarantees. A safe feeling for me and the patient.\"",
              testi_12: "\"A system that does not slow down, but speeds up. The time savings per consultation are significant because I complete everything on the spot. Clear, fast and safe.\"",
              loc_zuid: "GP, South Holland",
              pricing_title: "Transparent Pricing", pricing_subtitle: "Choose the plan that suits your practice.",
              plan_basic: "Start", plan_basic_consults: "50 Consultations", plan_basic_report: "Basic SOAP report", plan_basic_support: "Email support", btn_basic: "Start Free",
              plan_pro_badge: "Most Popular", plan_pro: "Practice", plan_pro_consults: "Unlimited Consultations", plan_pro_ai: "Advanced AI Models", plan_pro_api: "EHR Integration (API)", btn_pro: "Choose Practice",
              plan_ent: "Clinic", plan_ent_price: "Custom", plan_ent_users: "Multiple users", plan_ent_training: "Custom AI training", plan_ent_premise: "On-premise options", btn_ent: "Contact Us",
              footer_slogan: "The future of GP care.", footer_product: "Product", footer_company: "Company", footer_legal: "Legal"
          },
          nl: {
              nav_features: "Functies", nav_security: "Data & Veiligheid", nav_team: "Team", nav_testimonials: "Ervaringen", nav_pricing: "Prijs", nav_faq: "FAQ",
              btn_start: "Start Gratis",
              hero_title1: "Jouw AI-consult", hero_title2: "ondersteuning",
              hero_subtitle1: "Minder administratie,", hero_subtitle2: "Meer patiëntenzorg!",
              hero_btn_demo: "Start Demo", hero_btn_video: "Bekijk Video",
              usp1_label: "DATA & VEILIGHEID", usp1_text: "Veiligste app",
              usp2_label: "Flexibel", usp2_text: "Ook externe consult",
              usp3_label: "Archief", usp3_text: "Alle consult herbekijken",
              features_title: "Samen met huisartsen ontworpen voor jouw praktijk",
              features_subtitle: "DoctoMinutes ondersteunt en ontlast jouw administratie- en praktijkprocessen.",
              feat1_title: "Mobiliteit & Tijdwinst", feat1_desc: "Ontdek de unieke functie van DoctoMinutes, de enige oplossing die volledig werkt buiten de praktijk tijdens huisbezoeken!", feat1_desc2: "Bij terugkomst op de praktijk ben je klaar. Geen dubbel werk, puur gemak en minder administratiedruk.",
              feat2_title: "Historie & Zorgkwaliteit", feat2_desc: "Dankzij onze ijzersterke dataveiligheid heb je altijd direct inzicht in eerdere consulten. Stel sneller een accuraat behandelplan op.", feat2_desc2: "Garandeer maximale zorgkwaliteit en efficiëntie voor elke patiënt. Kies voor zekerheid en volledig inzicht!",
              feat3_title: "Dataveiligheid & Security", feat3_desc: "Waar andere apps data moeten wissen, biedt DoctoMinutes inzicht zonder compromissen. Wij voldoen aan de hoogste veiligheidsnormen.", feat3_desc2: "Hierdoor raadpleeg je veilig eerdere consulten, stel je accuratere behandelplannen op en mis je geen enkel detail.",
              sec_title: "De veiligste keuze voor uw praktijk", sec_subtitle: "Het resultaat voor maximale zorgveiligheid en zorgkwaliteit.",
              sec_c1_title: "BBN3 Security", sec_c1_desc: "Wij hanteren BBN3, het strengste beveiligingsniveau. Gegevens worden beschermd als een digitale kluis.",
              sec_c1_p1: "Hoogste digitale protectie", sec_c1_p2: "Continue monitoring", sec_c1_p3: "Versleutelde opslag",
              sec_c2_title: "NEN 7510 Gecertificeerd", sec_c2_desc: "Uw patiëntgegevens zijn veilig volgens de officiële Nederlandse zorgnorm (NEN 7510).",
              sec_c2_p1: "AVG/GDPR Compliant", sec_c2_p2: "Medische privacy normen", sec_c2_p3: "Jaarlijkse audits",
              sec_c3_title: "VIR-BI Standaard", sec_c3_desc: "Databeveiliging op niveau 'Staatsgeheim'. Een extra ondoordringbare beschermingslaag voor uw data.",
              sec_c3_p1: "Defensie-niveau encryptie", sec_c3_p2: "Zero-trust architectuur", sec_c3_p3: "Volledige monitoring en beheer in Nederland",
              sec_logos: "VEILIGHEIDSTECHNIEKEN OOK DOOR ONS TEAM UITGEVOERD BIJ",
              team_label: "HET TEAM", team_title: "Gepassioneerde innovators achter DoctoMinutes", team_subtitle: "Ontmoet ons toegewijde team. Ons product wordt gemaakt door en voor huisartsen.",
              role_gp_adv: "Huisarts & Adviseur",
              testi_title: "Ervaringen van huisartsen",
              testi_1: "\"DoctoMinutes bespaart me gemiddeld 2 uur administratie per dag. Ik kan weer echt luisteren naar mijn patiënten zonder constant te typen.\"",
              loc_flevo: "Huisarts, Flevoland",
              testi_2: "\"Zo fijn een applicatie waar ik ontzorgd wordt en geen zorgen hoef te maken over veiligheid en AVG.\"",
              loc_groningen: "Huisarts, Groningen",
              testi_3: "\"Wat een energie geeft dit! Voorheen deed ik mijn administratie in de avonduren, maar dankzij de flexibiliteit van deze tool doe ik het nu direct tijdens het huisbezoek.\"",
              loc_gelderland: "Huisarts, Gelderland",
              testi_4: "\"Eindelijk duidelijkheid over veiligheid. Jarenlang twijfelde ik of onze werkwijze wel echt waterdicht was, maar dit product laat zien wat écht AVG-proof werken inhoudt.\"",
              loc_utrecht: "Huisarts, Utrecht",
              testi_5: "\"Doordat eerdere consulten door de app worden geraadpleegd, is mijn behandelplan veel accurater. Ik hoef niet meer te gissen naar de voorgeschiedenis.\"",
              loc_limburg: "Huisarts, Limburg",
              testi_6: "\"Een ware verademing voor de werk-privébalans. Doordat de administratie geen 'moetje' achteraf meer is, ga ik met een gerust hart naar huis.\"",
              loc_drente: "Huisarts, Drente",
              testi_7: "\"De administratieve druk is drastisch verlaagd omdat ik op locatie de anamnese direct afrond. Geen dubbel werk meer bij terugkomst op de praktijk.\"",
              loc_noord: "Huisarts, Noord-Holland",
              testi_8: "\"Ik ben altijd sceptisch over dataveiligheid, maar de uitleg over de beveiligingsnormen heeft mij overtuigd. Ik weet nu zeker dat mijn patiëntdata in veilige handen is.\"",
              testi_9: "\"Geweldig om te merken hoeveel tijdwinst dit oplevert! Ik wil nooit meer terug naar de oude manier.\"",
              testi_10: "\"Het raadplegen van oude consults uit het verleden op locatie is een gamechanger. Je hebt direct het complete plaatje, veilig en wel.\"",
              testi_11: "\"Voor het eerst is mij écht duidelijk wat AVG-proof werken inhoudt. Geen grijze gebieden meer, maar keiharde garanties. Een veilig gevoel voor mij en de patiënt.\"",
              testi_12: "\"Een systeem dat niet vertraagt, maar versnelt. De tijdwinst per consult is aanzienlijk omdat ik alles ter plekke afrond. Helder, snel en veilig.\"",
              loc_zuid: "Huisarts, Zuid-Holland",
              pricing_title: "Transparante Tarieven", pricing_subtitle: "Kies het abonnement dat bij uw praktijk past.",
              plan_basic: "Start", plan_basic_consults: "50 Consulten", plan_basic_report: "Basis SOEP-verslag", plan_basic_support: "E-mail support", btn_basic: "Start Gratis",
              plan_pro_badge: "Meest Gekozen", plan_pro: "Praktijk", plan_pro_consults: "Onbeperkt Consulten", plan_pro_ai: "Geavanceerde AI Modellen", plan_pro_api: "EPD Integratie (API)", btn_pro: "Kies Praktijk",
              plan_ent: "Kliniek", plan_ent_price: "Op Maat", plan_ent_users: "Meerdere gebruikers", plan_ent_training: "Custom AI training", plan_ent_premise: "On-premise opties", btn_ent: "Contact Opnemen",
              footer_slogan: "De toekomst van huisartsenzorg.", footer_product: "Product", footer_company: "Bedrijf", footer_legal: "Wettelijk"
          }
      };

      function switchLanguage(lang) {
          document.documentElement.lang = lang;
          document.getElementById('current-lang').innerText = lang.toUpperCase();

          const elements = document.querySelectorAll('[data-lang-key]');
          elements.forEach(el => {
              const key = el.getAttribute('data-lang-key');
              if (translations[lang] && translations[lang][key]) {
                  el.innerText = translations[lang][key];
              }
          });
      }

      document.addEventListener("DOMContentLoaded", (event) => {
          gsap.registerPlugin(ScrollTrigger);

          // GSAP Animations
          const revealLines = document.querySelectorAll('.reveal-text');
          if(revealLines.length > 0) {
              gsap.to(revealLines, { y: 0, duration: 1.2, stagger: 0.15, ease: "power4.out", delay: 0.2 });
          }

          const fadeElements = document.querySelectorAll('.reveal-fade');
          fadeElements.forEach((el, index) => {
              gsap.fromTo(el, { opacity: 0, y: 20, filter: 'blur(5px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: "power2.out", delay: 0.8 + (index * 0.1) });
          });

          const scrollElements = document.querySelectorAll('.scroll-reveal');
          scrollElements.forEach(element => {
              gsap.fromTo(element, { y: 50, opacity: 0 }, { scrollTrigger: { trigger: element, start: "top 85%", end: "top 20%", toggleActions: "play none none none" }, y: 0, opacity: 1, duration: 0.8, ease: "power2.out" });
          });

          // Theme Toggle
          const toggleBtn = document.getElementById('theme-toggle');
          toggleBtn.addEventListener('click', () => {
              document.documentElement.classList.toggle('dark');
          });

          // Carousel Logic (Team & Testimonials)
          function setupCarousel(id, prevId, nextId, indicatorId) {
              const carousel = document.getElementById(id);
              const prev = document.getElementById(prevId);
              const next = document.getElementById(nextId);
              const indicator = document.getElementById(indicatorId);
              const scrollAmount = 400;

              const updateIndicator = () => {
                  if(!carousel) return;
                  const scrollLeft = carousel.scrollLeft;
                  const maxScroll = carousel.scrollWidth - carousel.clientWidth;
                  const percentage = (scrollLeft / maxScroll) * 100;
                  const safePercentage = Math.min(Math.max(percentage, 0), 100);
                  const leftPos = (safePercentage / 100) * 90;
                  indicator.style.left = `${leftPos}%`;
              };

              if (carousel) {
                  carousel.addEventListener('scroll', updateIndicator);
                  next.addEventListener('click', () => carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' }));
                  prev.addEventListener('click', () => carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' }));
                  updateIndicator();
              }
          }

          setupCarousel('team-carousel', 'prev-btn', 'next-btn', 'scroll-indicator');
          setupCarousel('testi-carousel', 'testi-prev-btn', 'testi-next-btn', 'testi-scroll-indicator');
      });
    


      function openModal(id){const el=document.getElementById(id);if(el){el.classList.remove('hidden');document.body.style.overflow='hidden';if(window.lucide)lucide.createIcons();}}function closeModal(id){const el=document.getElementById(id);if(el){el.classList.add('hidden');document.body.style.overflow='';}}document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeModal('privacy-modal');closeModal('terms-modal');}});
    
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
      

<div className="fixed top-0 w-full h-screen -z-10 mix-blend-screen saturate-100 opacity-60" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 59%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 59%, transparent)'}}>
<div className="absolute inset-0 -z-10" id="particles-js">
<canvas className="particles-js-canvas-el" height="875" style={{width: '100%', height: '100%'}} width="1418"></canvas></div>
</div>




<nav className="fixed w-full z-50 top-0 border-b border-white/5 glass transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<a className="flex items-center cursor-pointer group" href="#">
<span className="text-xl tracking-tight text-[#2398a3] font-semibold">
              DoctoMinutes
            </span>
</a>

<div className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-300">
<a className="hover:text-brand-accent transition-colors" data-lang-key="nav_features" href="#features">
              Functies
            </a>
<a className="hover:text-brand-accent transition-colors" data-lang-key="nav_security" href="#security">
              Data &amp; Veiligheid
            </a>
<a className="hover:text-brand-accent transition-colors" data-lang-key="nav_team" href="#team">
              Team
            </a>
<a className="hover:text-brand-accent transition-colors" data-lang-key="nav_testimonials" href="#testimonials">
              Ervaringen
            </a>
<a className="hover:text-brand-accent transition-colors" data-lang-key="nav_pricing" href="#pricing">
              Prijs
            </a>
<a className="hover:text-brand-accent transition-colors" data-lang-key="nav_faq" href="#faq">
              FAQ
            </a>
</div>

<div className="flex items-center gap-4">

<div className="relative group">
<button className="text-xs font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1" id="lang-toggle-btn">
<span className="" id="current-lang">NL</span>
<i className="w-3 h-3" data-lucide="chevron-down"></i>
</button>
<div className="absolute right-0 mt-2 w-20 bg-[#111625] border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
<button className="block w-full text-left px-4 py-2 text-xs text-slate-300 hover:bg-white/5 hover:text-white first:rounded-t-lg" onclick="switchLanguage('nl')">
                  NL
                </button>
<button className="block w-full text-left px-4 py-2 text-xs text-slate-300 hover:bg-white/5 hover:text-white last:rounded-b-lg" onclick="switchLanguage('en')">
                  EN
                </button>
</div>
</div>
<div className="hidden" id="theme-toggle"></div>
<a className="hidden sm:flex items-center gap-2 bg-brand-accent/10 hover:bg-brand-accent/20 border border-brand-accent text-brand-accent hover:text-white text-xs font-semibold py-2 px-4 rounded-full transition-all btn-beam shadow-[0_0_15px_rgba(0,151,167,0.1)]" href="#">
<span className="" data-lang-key="btn_start">
                Start voor €1
              </span>
<i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative" id="hero">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
<div className="reveal-line">
<span className="reveal-text" data-lang-key="hero_title1">
                  Jouw AI-consult
                </span>
</div>
<div className="reveal-line pb-2">
<span className="reveal-text bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-200" data-lang-key="hero_title2">
                  ondersteuning
                </span>
</div>
</h1>
<p className="text-lg sm:text-xl text-slate-400 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed reveal-fade" style={{filter: 'blur(0px)'}}>
<span data-lang-key="hero_subtitle1">Minder administratie,</span>
<br/>
<span className="text-slate-200 font-medium tracking-wide" data-lang-key="hero_subtitle2">
                Meer patiëntenzorg!
              </span>
</p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 reveal-fade pt-4" style={{filter: 'blur(0px)'}}>
<button className="group relative px-8 py-3.5 bg-brand-accent text-white text-sm font-semibold rounded-full hover:bg-[#00acc1] transition-all btn-beam w-full sm:w-auto shadow-[0_0_20px_rgba(0,151,167,0.3)]" data-lang-key="hero_btn_demo">
                Start Demo
              </button>
</div>
</div>

<div className="relative flex items-center justify-center reveal-fade delay-200 order-1 lg:order-2 h-[500px] lg:h-[650px]" style={{filter: 'blur(0px)'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-tr from-brand-accent/20 to-purple-500/20 blur-[80px] rounded-full z-0"></div>
<div className="relative z-10 w-full max-w-[400px] h-full flex items-end justify-center">
<img alt="DoctoMinutes App Interface" className="mask-image-bottom w-full h-full object-cover z-10 border-white/5 border-4 rounded-[2.5rem] relative shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fd04cd05-37a4-4775-a8de-4c9c3c256009_800w.png" style={{objectPosition: 'center top'}}/>

<div className="absolute -left-8 top-10 z-20 hidden md:flex animate-float usp-glass p-3 pr-5 rounded-2xl items-center gap-3 max-w-[240px]">
<div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 shrink-0">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<div>
<p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-0.5" data-lang-key="usp1_label">
                    DATA &amp; VEILIGHEID
                  </p>
<p className="text-xs font-semibold text-white" data-lang-key="usp1_text">
                    Veiligste app
                  </p>
</div>
</div>

<div className="absolute -right-6 bottom-[25%] z-20 hidden md:flex animate-float-delayed usp-glass p-3 pr-5 rounded-2xl items-center gap-3 max-w-[220px]">
<div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
<i className="w-5 h-5" data-lucide="smartphone"></i>
</div>
<div>
<p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-0.5" data-lang-key="usp2_label">
                    Flexibel
                  </p>
<p className="text-xs font-semibold text-white" data-lang-key="usp2_text">
                    Ook externe consult
                  </p>
</div>
</div>

<div className="absolute -left-2 bottom-4 z-20 hidden md:flex animate-float usp-glass p-3 pr-5 rounded-2xl items-center gap-3 max-w-[220px]">
<div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
<i className="w-5 h-5" data-lucide="history"></i>
</div>
<div>
<p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-0.5" data-lang-key="usp3_label">
                    Archief
                  </p>
<p className="text-xs font-semibold text-white" data-lang-key="usp3_text">
                    Alle consult herbekijken
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-white text-slate-900" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center max-w-4xl mx-auto mb-16 scroll-reveal">
<h2 className="font-serif italic text-5xl md:text-6xl text-slate-900 leading-[1.1] mb-6 tracking-tight" data-lang-key="features_title">
            Samen met huisartsen ontworpen voor jouw praktijk
          </h2>
<p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto" data-lang-key="features_subtitle">
            DoctoMinutes ondersteunt en ontlast jouw administratie- en
            praktijkprocessen.
          </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="group scroll-reveal relative p-10 rounded-[2.5rem] bg-slate-50 border border-slate-200 overflow-hidden flex flex-col hover:shadow-xl hover:shadow-slate-200/50 hover:border-brand-accent/20 transition-all duration-500 h-full">
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-brand-accent mb-6 mx-auto">
<i className="w-6 h-6" data-lucide="smartphone"></i>
</div>
<h3 className="text-2xl text-slate-900 tracking-tight mb-4 font-semibold" data-lang-key="feat1_title">
                Mobiliteit &amp; Tijdwinst
              </h3>
<div className="text-sm text-slate-600 leading-7 space-y-4">
<p data-lang-key="feat1_desc">
                  Ontdek de unieke functie van DoctoMinutes, de enige oplossing
                  die volledig werkt buiten de praktijk tijdens huisbezoeken!
                </p>
<p data-lang-key="feat1_desc2">
                  Bij terugkomst op de praktijk ben je klaar. Geen dubbel werk,
                  puur gemak en minder administratiedruk.
                </p>
</div>
</div>
</div>

<div className="group scroll-reveal relative p-10 rounded-[2.5rem] bg-slate-50 border border-slate-200 overflow-hidden flex flex-col hover:shadow-xl hover:shadow-slate-200/50 hover:border-brand-accent/20 transition-all duration-500 h-full">
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-purple-500 mb-6 mx-auto">
<i className="w-6 h-6" data-lucide="activity"></i>
</div>
<h3 className="text-2xl text-slate-900 tracking-tight mb-4 font-semibold" data-lang-key="feat2_title">
                Historie &amp; Zorgkwaliteit
              </h3>
<div className="text-sm text-slate-600 leading-7 space-y-4">
<p className="" data-lang-key="feat2_desc">
                  Dankzij onze ijzersterke dataveiligheid heb je altijd direct
                  inzicht in eerdere consulten. Stel sneller een accuraat
                  behandelplan op.
                </p>
<p data-lang-key="feat2_desc2">
                  Garandeer maximale zorgkwaliteit en efficiëntie voor elke
                  patiënt. Kies voor zekerheid en volledig inzicht!
                </p>
</div>
</div>
</div>

<div className="group scroll-reveal relative p-10 rounded-[2.5rem] bg-slate-50 border border-slate-200 overflow-hidden flex flex-col hover:shadow-xl hover:shadow-slate-200/50 hover:border-brand-accent/20 transition-all duration-500 h-full">
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-teal-600 mb-6 mx-auto">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<h3 className="text-2xl text-slate-900 tracking-tight mb-4 font-semibold" data-lang-key="feat3_title">
                Dataveiligheid &amp; Security
              </h3>
<div className="text-sm text-slate-600 leading-7 space-y-4">
<p data-lang-key="feat3_desc">
                  Waar andere apps data moeten wissen, biedt DoctoMinutes
                  inzicht zonder compromissen. Wij voldoen aan de hoogste
                  veiligheidsnormen.
                </p>
<p data-lang-key="feat3_desc2">
                  Hierdoor raadpleeg je veilig eerdere consulten, stel je
                  accuratere behandelplannen op en mis je geen enkel detail.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#05060A] pt-32 pb-32 relative" id="security">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-purple-900/20 to-transparent opacity-50 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-20 scroll-reveal">
<h2 className="font-serif italic text-5xl md:text-6xl text-white leading-tight mb-6 tracking-tight" data-lang-key="sec_title">
            De veiligste keuze voor uw praktijk
          </h2>
<p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto" data-lang-key="sec_subtitle">
            Het resultaat voor maximale zorgveiligheid en zorgkwaliteit.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="tech-card rounded-2xl p-8 relative overflow-hidden group flex flex-col h-[480px] scroll-reveal">

<div className="relative z-10">
<h3 className="text-xl font-semibold text-white mb-4" data-lang-key="sec_c1_title">
                BBN3 Security
              </h3>
<p className="text-sm text-slate-300 mb-8 leading-relaxed" data-lang-key="sec_c1_desc">
                Wij hanteren BBN3, het strengste beveiligingsniveau. Gegevens
                worden beschermd als een digitale kluis.
              </p>
<ul className="space-y-3 mb-8">
<li className="flex gap-3 text-sm text-slate-200 gap-x-3 gap-y-3 items-start">
<i className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" data-lucide="check-circle"></i>
<span data-lang-key="sec_c1_p1">
                    Hoogste digitale protectie
                  </span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-200">
<i className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" data-lucide="check-circle"></i>
<span data-lang-key="sec_c1_p2">Continue monitoring</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-200">
<i className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" data-lucide="check-circle"></i>
<span data-lang-key="sec_c1_p3">Versleutelde opslag</span>
</li>
</ul>
</div>

<div className="mt-auto w-full h-[200px] flex items-center justify-center relative scale-90 md:scale-100 group-hover:scale-105 transition-transform duration-500">

<div className="absolute w-40 h-40 bg-purple-600/10 blur-[60px] rounded-full pointer-events-none"></div>

<div className="absolute w-full h-full animate-spin-slow opacity-30">
<div className="absolute top-10 left-10 w-1 h-1 bg-purple-400 rounded-full"></div>
<div className="absolute bottom-10 right-10 w-1 h-1 bg-white rounded-full"></div>
</div>

<div className="relative z-10 flex flex-col items-center justify-center">

<div className="relative w-28 h-36 bg-gradient-to-b from-slate-800 to-slate-950 rounded-b-[3.5rem] rounded-t-xl border border-slate-700 shadow-2xl flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#a855f7 1px, transparent 1px)', backgroundSize: '8px 8px'}}></div>

<div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>

<div className="relative z-20 w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
<i className="w-6 h-6 text-purple-400 fill-purple-500/20" data-lucide="shield"></i>
</div>
</div>

<div className="absolute -bottom-3 animate-float-delayed bg-slate-900 border border-slate-600 rounded-lg px-3 py-1 shadow-lg flex items-center gap-1.5 z-30">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] text-white tracking-wider font-semibold">
                    SECURE
                  </span>
</div>
</div>
</div>
</div>

<div className="tech-card rounded-2xl p-8 relative overflow-hidden group flex flex-col h-[480px] scroll-reveal transition-all">

<div className="relative z-10">
<h3 className="text-xl font-semibold text-white mb-4" data-lang-key="sec_c2_title">
                NEN 7510 Gecertificeerd
              </h3>
<p className="text-sm text-slate-300 mb-8 leading-relaxed" data-lang-key="sec_c2_desc">
                Uw patiëntgegevens zijn veilig volgens de officiële Nederlandse
                zorgnorm (NEN 7510).
              </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-200">
<i className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" data-lucide="check-circle"></i>
<span data-lang-key="sec_c2_p1">AVG/GDPR Compliant</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-200">
<i className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" data-lucide="check-circle"></i>
<span data-lang-key="sec_c2_p2">Medische privacy normen</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-200">
<i className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" data-lucide="check-circle"></i>
<span className="" data-lang-key="sec_c2_p3">
                    Jaarlijkse audits
                  </span>
</li>
</ul>
</div>

<div className="mt-auto w-full h-[200px] flex items-center justify-center relative scale-90 md:scale-100 group-hover:scale-105 transition-transform duration-500">

<div className="absolute w-40 h-40 bg-teal-500/10 blur-[50px] rounded-full pointer-events-none"></div>

<div className="absolute w-28 h-36 bg-slate-800 rounded-xl border border-slate-700 transform -rotate-6 shadow-xl opacity-80 flex flex-col p-3">
<div className="w-full h-2 bg-slate-700 rounded-full mb-3 opacity-50"></div>
<div className="space-y-2">
<div className="w-3/4 h-1.5 bg-slate-700 rounded-full opacity-30"></div>
<div className="w-full h-1.5 bg-slate-700 rounded-full opacity-30"></div>
<div className="w-5/6 h-1.5 bg-slate-700 rounded-full opacity-30"></div>
</div>
</div>

<div className="relative z-10 w-32 h-40 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-900 rounded-xl border border-slate-600 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] flex flex-col items-center p-4 overflow-hidden">

<div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

<div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 mb-4 flex items-center justify-center shadow-inner">
<i className="text-slate-500 text-xl" data-lucide="file-text"></i>
</div>

<div className="w-full space-y-2.5 px-2">
<div className="w-full h-1.5 bg-slate-700/50 rounded-full"></div>
<div className="w-5/6 h-1.5 bg-slate-700/50 rounded-full mx-auto"></div>
<div className="w-4/5 h-1.5 bg-slate-700/50 rounded-full mx-auto"></div>
</div>

<div className="absolute -bottom-4 animate-float w-16 h-16 rounded-full bg-gradient-to-tr from-teal-500 to-emerald-400 shadow-[0_0_20px_rgba(20,184,166,0.4)] border-2 border-slate-900 flex items-center justify-center z-20">
<div className="absolute inset-1 border border-white/30 rounded-full"></div>
<i className="text-white w-8 h-8 drop-shadow-md" data-lucide="check-circle" strokeWidth="2.5"></i>
</div>
</div>
</div>
</div>

<div className="tech-card rounded-2xl p-8 relative overflow-hidden group flex flex-col h-[480px] scroll-reveal">

<div className="relative z-10">
<h3 className="text-xl font-semibold text-white mb-4" data-lang-key="sec_c3_title">
                VIR-BI Standaard
              </h3>
<p className="text-sm text-slate-300 mb-8 leading-relaxed" data-lang-key="sec_c3_desc">
                Databeveiliging op niveau 'Staatsgeheim'. Een extra
                ondoordringbare beschermingslaag voor uw data.
              </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-200">
<i className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" data-lucide="check-circle"></i>
<span data-lang-key="sec_c3_p1">
                    Defensie-niveau encryptie
                  </span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-200">
<i className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" data-lucide="check-circle"></i>
<span data-lang-key="sec_c3_p2">Zero-trust architectuur</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-200">
<i className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" data-lucide="check-circle"></i>
<span data-lang-key="sec_c3_p3">
                    Volledige monitoring in NL
                  </span>
</li>
</ul>
</div>

<div className="mt-auto w-full h-[200px] flex items-center justify-center relative scale-90 md:scale-100 group-hover:scale-105 transition-transform duration-500">

<div className="absolute w-40 h-40 bg-blue-600/10 blur-[50px] rounded-full pointer-events-none"></div>

<div className="absolute w-40 h-40 rounded-full border border-dashed border-slate-700 animate-spin-slow opacity-60"></div>
<div className="absolute w-32 h-32 rounded-full border border-blue-500/10 animate-spin-reverse"></div>

<div className="absolute w-40 h-40 animate-spin-slow">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]"></div>
<div className="absolute bottom-4 right-6 w-1 h-1 bg-slate-500 rounded-full"></div>
</div>

<div className="relative z-10 w-24 h-28 flex flex-col items-center justify-center animate-float">

<div className="w-12 h-10 border-[6px] border-slate-600 rounded-t-full mb-[-10px] z-0 relative group-hover:border-blue-400/50 transition-colors duration-500"></div>

<div className="w-20 h-20 bg-gradient-to-br from-slate-800 to-[#0B0F19] rounded-2xl border border-slate-600/50 shadow-2xl flex items-center justify-center relative overflow-hidden z-10">

<div className="absolute top-0 w-full h-[2px] bg-blue-400/50 blur-[2px] animate-beam opacity-50 shadow-[0_0_10px_rgba(96,165,250,0.8)]"></div>

<div className="relative w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center shadow-inner">
<div className="absolute inset-0 bg-blue-500/5 rounded-lg animate-pulse"></div>
<i className="text-blue-400 text-xl" data-lucide="lock"></i>
</div>

<div className="absolute bottom-2 flex gap-1">
<div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
<div className="w-1 h-1 bg-slate-600 rounded-full"></div>
<div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse delay-100"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="z-10 text-center border-white/5 border-t mt-20 pt-16 relative">
<p className="text-[10px] uppercase font-semibold text-slate-400 tracking-[0.2em] mb-10" data-lang-key="sec_logos">
            VEILIGHEIDSTECHNIEKEN OOK DOOR ONS TEAM UITGEVOERD BIJ
          </p>
<div className="flex justify-center items-center gap-10 md:gap-20 opacity-70 flex-wrap">
<img alt="Gemeente Amsterdam" className="md:h-24 w-auto h-20 object-contain grayscale hover:grayscale-0 contrast-200 invert brightness-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de996748-8a47-4763-b313-8df4f2afb967_800w.png"/>
<img alt="Gemeente Utrecht" className="md:h-24 hover:grayscale-0 contrast-200 transition-all duration-500 w-auto h-20 grayscale invert brightness-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/15a32a1f-3647-4583-87f2-137eddeb689d_320w.png"/>
<img alt="Nederlands Forensisch Instituut" className="md:h-24 hover:grayscale-0 contrast-200 transition-all duration-500 w-auto h-20 object-cover grayscale invert brightness-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8ad0b09b-7d02-4b0d-a97a-a37bde70c8c4_320w.png"/>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-slate-900 bg-white border-slate-100 border-t pt-24 pb-24 relative" id="team">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">

<div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
<p className="uppercase text-sm font-semibold text-[#720112] tracking-wide mb-3" data-lang-key="team_label">
            HET TEAM
          </p>
<h2 className="font-serif italic text-5xl md:text-6xl text-slate-900 leading-[1.1] mb-6 tracking-tight" data-lang-key="team_title">
            Gepassioneerde innovators achter DoctoMinutes
          </h2>
<p className="leading-relaxed text-lg text-slate-500 max-w-2xl mr-auto ml-auto" data-lang-key="team_subtitle">
            Ontmoet ons toegewijde team. Ons product wordt gemaakt door en voor
            huisartsen.
          </p>
</div>

<div className="relative w-full scroll-reveal">
<div className="relative group/carousel">
<div className="flex overflow-x-auto gap-6 snap-x snap-mandatory hide-scrollbar -mx-4 md:mx-0 md:px-0 scroll-smooth pr-4 pb-12 pl-4 gap-x-6 gap-y-6" id="team-carousel">

<div className="min-w-[85vw] sm:min-w-[400px] h-[550px] relative rounded-[2.5rem] overflow-hidden snap-center group select-none shadow-lg">
<img alt="Heike" className="transition-transform duration-700 group-hover:scale-105 bg-center w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 translate-x-2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b37eb2d-d589-4d8a-89f7-35f71a5e3891_1600w.png"/>
<div className="absolute bottom-4 left-4 right-4 px-6 py-[23px] team-card-bg rounded-[2rem] text-white transition-all duration-300 shadow-xl border border-white/10 h-[220px]">
<div className="mb-1">
<h3 className="text-xl font-semibold tracking-tight">Jane Doe</h3>
<p className="text-sm text-slate-300" data-lang-key="role_gp_adv">
                      Huisarts &amp; Adviseur
                    </p>
</div>
<ul className="list-disc list-outside ml-4 mt-2 space-y-1 text-sm text-slate-200 leading-relaxed opacity-90">
<li className="">
  Praktijkhouder Huisartsen
</li>
<li className="">Lid van de Verenigingsraad</li>
</ul>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[400px] h-[550px] relative rounded-[2.5rem] overflow-hidden snap-center group select-none shadow-lg">
<img alt="Rudger" className="transition-transform duration-700 group-hover:scale-105 bg-center w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b37eb2d-d589-4d8a-89f7-35f71a5e3891_1600w.png"/>
<div className="absolute bottom-4 left-4 right-4 px-6 py-[23px] team-card-bg rounded-[2rem] text-white transition-all duration-300 shadow-xl border border-white/10 h-[220px]">
<div className="mb-1">
<h3 className="text-xl font-bold tracking-tight">Jane Doe</h3>
<p className="text-sm text-slate-300" data-lang-key="role_gp_adv">
                      Huisarts &amp; Adviseur
                    </p>
</div>
<ul className="list-disc list-outside ml-4 mt-2 space-y-1 text-sm text-slate-200 leading-relaxed opacity-90">
<li className="">Praktijkhouder Huisartsenpraktijk</li>
</ul>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[400px] h-[550px] relative rounded-[2.5rem] overflow-hidden snap-center group select-none shadow-lg">
<img alt="Khoa" className="transition-transform duration-700 group-hover:scale-105 bg-center w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab4dea1f-0983-470e-8802-bf8831b302ed_1600w.png"/>
<div className="absolute bottom-4 left-4 right-4 px-6 py-[23px] team-card-bg rounded-[2rem] text-white transition-all duration-300 shadow-xl border border-white/10 h-[220px]">
<div className="mb-1">
<h3 className="text-xl font-bold tracking-tight">Jane Doe</h3>
<p className="text-sm text-slate-300">CEO</p>
</div>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[400px] h-[550px] relative rounded-[2.5rem] overflow-hidden snap-center group select-none shadow-lg">
<img alt="Pieter" className="transition-transform duration-700 group-hover:scale-105 bg-center w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b37eb2d-d589-4d8a-89f7-35f71a5e3891_1600w.png"/>
<div className="absolute bottom-4 left-4 right-4 px-6 py-[23px] team-card-bg rounded-[2rem] text-white transition-all duration-300 shadow-xl border border-white/10 h-[220px]">
<div className="mb-1">
<h3 className="text-xl font-bold tracking-tight">Jane Doe</h3>
<p className="text-sm text-slate-300" data-lang-key="role_gp_adv">
                      Huisarts &amp; Adviseur
                    </p>
</div>
<ul className="list-disc list-outside ml-4 mt-2 space-y-1 text-sm text-slate-200 leading-relaxed opacity-90">
<li className="">Voormalig praktijkhouder Huisartsenpraktijk</li>
<li className="">Docent</li>
</ul>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[400px] h-[550px] relative rounded-[2.5rem] overflow-hidden snap-center group select-none shadow-lg">
<img alt="Rick" className="transition-transform duration-700 group-hover:scale-105 bg-center w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab4dea1f-0983-470e-8802-bf8831b302ed_1600w.png"/>
<div className="absolute bottom-4 left-4 right-4 px-6 py-[23px] team-card-bg rounded-[2rem] text-white transition-all duration-300 shadow-xl border border-white/10 h-[220px]">
<div className="mb-1">
<h3 className="text-xl font-bold tracking-tight">Jane Doe</h3>
<p className="text-sm text-slate-300">CTO</p>
</div>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[400px] h-[550px] relative rounded-[2.5rem] overflow-hidden snap-center group select-none shadow-lg">
<img alt="Inge" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab4dea1f-0983-470e-8802-bf8831b302ed_1600w.png"/>
<div className="absolute bottom-4 left-4 right-4 px-6 py-[23px] team-card-bg rounded-[2rem] text-white transition-all duration-300 shadow-xl border border-white/10 h-[220px]">
<div className="mb-1">
<h3 className="text-xl font-bold tracking-tight">Jane Doe</h3>
<p className="text-sm text-slate-300">
                      Huisarts &amp; Adviseur
                    </p>
</div>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[400px] h-[550px] relative rounded-[2.5rem] overflow-hidden snap-center group select-none shadow-lg">
<img alt="Thomas" className="transition-transform duration-700 group-hover:scale-105 bg-center w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab4dea1f-0983-470e-8802-bf8831b302ed_1600w.png"/>
<div className="absolute bottom-4 left-4 right-4 px-6 py-[23px] team-card-bg rounded-[2rem] text-white transition-all duration-300 shadow-xl border border-white/10 h-[220px]">
<div className="mb-1">
<h3 className="text-xl font-bold tracking-tight">Jane Doe</h3>
<p className="text-sm text-slate-300">CSO</p>
</div>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[400px] h-[550px] relative rounded-[2.5rem] overflow-hidden snap-center group select-none shadow-lg">
<img alt="Erik" className="transition-transform duration-700 group-hover:scale-105 bg-center w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab4dea1f-0983-470e-8802-bf8831b302ed_1600w.png"/>
<div className="absolute bottom-4 left-4 right-4 px-6 py-[23px] team-card-bg rounded-[2rem] text-white transition-all duration-300 shadow-xl border border-white/10 h-[220px]">
<div className="mb-1">
<h3 className="text-xl font-bold tracking-tight">Jane Doe</h3>
<p className="text-sm text-slate-300">Adviseur</p>
</div>
<ul className="list-disc list-outside ml-4 mt-2 space-y-1 text-sm text-slate-200 leading-relaxed opacity-90">
<li className="">Prof. Dr. </li>
<li className="">
  Hoogleraar 
</li>
<li className="">
  Medisch management consultant
</li>
</ul>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[400px] h-[550px] relative rounded-[2.5rem] overflow-hidden snap-center group select-none shadow-lg">
<img alt="Joran" className="transition-transform duration-700 group-hover:scale-105 bg-center w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab4dea1f-0983-470e-8802-bf8831b302ed_1600w.png"/>
<div className="absolute bottom-4 left-4 right-4 px-6 py-[23px] team-card-bg rounded-[2rem] text-white transition-all duration-300 shadow-xl border border-white/10 h-[220px]">
<div className="mb-1">
<h3 className="text-xl font-bold tracking-tight">Jane Doe</h3>
<p className="text-sm text-slate-300">CDO, ML &amp; AI</p>
</div>
<ul className="list-disc list-outside ml-4 mt-2 space-y-1 text-sm text-slate-200 leading-relaxed opacity-90">
<li className="">Fellow</li>
<li className="">Ph.D. </li>
</ul>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[400px] h-[550px] relative rounded-[2.5rem] overflow-hidden snap-center group select-none shadow-lg">
<img alt="Janine" className="transition-transform duration-700 group-hover:scale-105 bg-center w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab4dea1f-0983-470e-8802-bf8831b302ed_1600w.png"/>
<div className="absolute bottom-4 left-4 right-4 px-6 py-[23px] team-card-bg rounded-[2rem] text-white transition-all duration-300 shadow-xl border border-white/10 h-[220px]">
<div className="mb-1">
<h3 className="text-xl font-bold tracking-tight">Jane Doe</h3>
<p className="text-sm text-slate-300">
                      Huisarts &amp; Adviseur
                    </p>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-center gap-6 mt-8">
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors text-slate-600" id="prev-btn">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<div className="w-48 h-1 bg-slate-100 rounded-full overflow-hidden relative">
<div className="absolute left-0 top-0 h-full bg-slate-800 rounded-full w-[10%] transition-all duration-100 ease-out" id="scroll-indicator" style={{left: '38.64%'}}></div>
</div>
<button className="w-10 h-10 border-slate-200 border rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors text-slate-600" id="next-btn">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="border-white/5 border-t pt-24 pb-24" id="testimonials">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-12 text-center scroll-reveal" data-lang-key="testi_title">
          Ervaringen van huisartsen
        </h2>
<div className="relative group/testi">

<div className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0 scroll-smooth" id="testi-carousel">

<div className="min-w-[85vw] sm:min-w-[350px] p-8 rounded-2xl bg-[#111827] border border-white/5 relative snap-center flex flex-col justify-between">
<p className="text-sm italic text-slate-300 mb-6 leading-relaxed" data-lang-key="testi_1">
                "DoctoMinutes bespaart me gemiddeld 2 uur administratie per dag.
                Ik kan weer echt luisteren naar mijn patiënten zonder constant
                te typen."
              </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs text-white font-semibold">
                  RV
                </div>
<div>
<div className="text-xs font-semibold text-white">Rene</div>
<div className="text-[10px] text-slate-500" data-lang-key="loc_flevo">
                    Huisarts, Flevoland
                  </div>
</div>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[350px] p-8 rounded-2xl bg-[#111827] border border-white/5 relative snap-center flex flex-col justify-between">
<p className="text-sm italic text-slate-300 mb-6 leading-relaxed" data-lang-key="testi_2">
                "Zo fijn een applicatie waar ik ontzorgd wordt en geen zorgen
                hoef te maken over veiligheid en AVG."
              </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">
                  HH
                </div>
<div>
<div className="text-xs font-semibold text-white">Hanneke</div>
<div className="text-[10px] text-slate-500" data-lang-key="loc_groningen">
                    Huisarts, Groningen
                  </div>
</div>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[350px] p-8 rounded-2xl bg-[#111827] border border-white/5 relative snap-center flex flex-col justify-between">
<p className="text-sm italic text-slate-300 mb-6 leading-relaxed" data-lang-key="testi_3">
                "Wat een energie geeft dit! Voorheen deed ik mijn administratie
                in de avonduren, maar dankzij de flexibiliteit van deze tool doe
                ik het nu direct tijdens het huisbezoek."
              </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">
                  FD
                </div>
<div>
<div className="text-xs font-semibold text-white">Frank</div>
<div className="text-[10px] text-slate-500" data-lang-key="loc_gelderland">
                    Huisarts, Gelderland
                  </div>
</div>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[350px] p-8 rounded-2xl bg-[#111827] border border-white/5 relative snap-center flex flex-col justify-between">
<p className="text-sm italic text-slate-300 mb-6 leading-relaxed" data-lang-key="testi_4">
                "Eindelijk duidelijkheid over veiligheid. Jarenlang twijfelde ik
                of onze werkwijze wel echt waterdicht was, maar dit product laat
                zien wat écht AVG-proof werken inhoudt."
              </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">
                  BS
                </div>
<div>
<div className="text-xs font-semibold text-white">Berend</div>
<div className="text-[10px] text-slate-500" data-lang-key="loc_utrecht">
                    Huisarts, Utrecht
                  </div>
</div>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[350px] p-8 rounded-2xl bg-[#111827] border border-white/5 relative snap-center flex flex-col justify-between">
<p className="text-sm italic text-slate-300 mb-6 leading-relaxed" data-lang-key="testi_5">
                "Doordat eerdere consulten door de app worden geraadpleegd, is
                mijn behandelplan veel accurater. Ik hoef niet meer te gissen
                naar de voorgeschiedenis."
              </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">
                  JW
                </div>
<div>
<div className="text-xs font-semibold text-white">Janneke</div>
<div className="text-[10px] text-slate-500" data-lang-key="loc_limburg">
                    Huisarts, Limburg
                  </div>
</div>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[350px] p-8 rounded-2xl bg-[#111827] border border-white/5 relative snap-center flex flex-col justify-between">
<p className="text-sm italic text-slate-300 mb-6 leading-relaxed" data-lang-key="testi_6">
                "Een ware verademing voor de werk-privébalans. Doordat de
                administratie geen 'moetje' achteraf meer is, ga ik met een
                gerust hart naar huis."
              </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">
                  RS
                </div>
<div>
<div className="text-xs font-semibold text-white">Ronald</div>
<div className="text-[10px] text-slate-500" data-lang-key="loc_drente">
                    Huisarts, Drente
                  </div>
</div>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[350px] p-8 rounded-2xl bg-[#111827] border border-white/5 relative snap-center flex flex-col justify-between">
<p className="text-sm italic text-slate-300 mb-6 leading-relaxed" data-lang-key="testi_7">
                "De administratieve druk is drastisch verlaagd omdat ik op
                locatie de anamnese direct afrond. Geen dubbel werk meer bij
                terugkomst op de praktijk."
              </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">
                  PE
                </div>
<div>
<div className="text-xs font-semibold text-white">Patricia</div>
<div className="text-[10px] text-slate-500" data-lang-key="loc_noord">
                    Huisarts, Noord-Holland
                  </div>
</div>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[350px] p-8 rounded-2xl bg-[#111827] border border-white/5 relative snap-center flex flex-col justify-between">
<p className="text-sm italic text-slate-300 mb-6 leading-relaxed" data-lang-key="testi_8">
                "Ik ben altijd sceptisch over dataveiligheid, maar de uitleg
                over de beveiligingsnormen heeft mij overtuigd. Ik weet nu zeker
                dat mijn patiëntdata in veilige handen is."
              </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">
                  JH
                </div>
<div>
<div className="text-xs font-semibold text-white">Joost</div>
<div className="text-[10px] text-slate-500" data-lang-key="loc_groningen">
                    Huisarts, Groningen
                  </div>
</div>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[350px] p-8 rounded-2xl bg-[#111827] border border-white/5 relative snap-center flex flex-col justify-between">
<p className="text-sm italic text-slate-300 mb-6 leading-relaxed" data-lang-key="testi_9">
                "Geweldig om te merken hoeveel tijdwinst dit oplevert! Ik wil
                nooit meer terug naar de oude manier."
              </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">
                  JH
                </div>
<div>
<div className="text-xs font-semibold text-white">Joost</div>
<div className="text-[10px] text-slate-500" data-lang-key="loc_utrecht">
                    Huisarts, Utrecht
                  </div>
</div>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[350px] p-8 rounded-2xl bg-[#111827] border border-white/5 relative snap-center flex flex-col justify-between">
<p className="text-sm italic text-slate-300 mb-6 leading-relaxed" data-lang-key="testi_10">
                "Het raadplegen van oude consults uit het verleden op locatie is
                een gamechanger. Je hebt direct het complete plaatje, veilig en
                wel."
              </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">
                  IB
                </div>
<div>
<div className="text-xs font-semibold text-white">Ilse</div>
<div className="text-[10px] text-slate-500" data-lang-key="loc_utrecht">
                    Huisarts, Utrecht
                  </div>
</div>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[350px] p-8 rounded-2xl bg-[#111827] border border-white/5 relative snap-center flex flex-col justify-between">
<p className="text-sm italic text-slate-300 mb-6 leading-relaxed" data-lang-key="testi_11">
                "Voor het eerst is mij écht duidelijk wat AVG-proof werken
                inhoudt. Geen grijze gebieden meer, maar keiharde garanties. Een
                veilig gevoel voor mij en de patiënt."
              </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">
                  BL
                </div>
<div>
<div className="text-xs font-semibold text-white">Bente</div>
<div className="text-[10px] text-slate-500" data-lang-key="loc_utrecht">
                    Huisarts, Utrecht
                  </div>
</div>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[350px] p-8 rounded-2xl bg-[#111827] border border-white/5 relative snap-center flex flex-col justify-between">
<p className="text-sm italic text-slate-300 mb-6 leading-relaxed" data-lang-key="testi_12">
                "Een systeem dat niet vertraagt, maar versnelt. De tijdwinst per
                consult is aanzienlijk omdat ik alles ter plekke afrond. Helder,
                snel en veilig."
              </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">
                  CK
                </div>
<div>
<div className="text-xs font-semibold text-white">Charlotte</div>
<div className="text-[10px] text-slate-500" data-lang-key="loc_zuid">
                    Huisarts, Zuid-Holland
                  </div>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-center gap-6 mt-8">
<button className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 transition-colors text-slate-400 hover:text-white" id="testi-prev-btn">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden relative">
<div className="absolute left-0 top-0 h-full bg-brand-accent rounded-full w-[10%] transition-all duration-100 ease-out" id="testi-scroll-indicator" style={{left: '0%'}}></div>
</div>
<button className="w-10 h-10 border-slate-700 border rounded-full flex items-center justify-center hover:bg-slate-800 transition-colors text-slate-400 hover:text-white" id="testi-next-btn">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 border-slate-200 border-t pt-24 pb-24 relative" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 scroll-reveal">
<h2 className="font-serif italic text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-4" data-lang-key="pricing_title">
            Transparante Tarieven
          </h2>
<p className="text-slate-500 text-lg" data-lang-key="pricing_subtitle">
            Kies het abonnement dat bij uw praktijk past.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mx-auto">

<div className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm flex flex-col scroll-reveal">
<h3 className="text-lg font-medium text-slate-900 mb-2" data-lang-key="plan_basic">
              Start
            </h3>
<div className="text-3xl text-slate-900 mb-6">
              €1
              <span className="text-sm font-normal text-slate-500">/mnd/gbr</span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-brand-accent" data-lucide="check-circle"></i>
<span className="" data-lang-key="plan_basic_consults">
                  Alle functionaliteiten
                </span>
</li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-brand-accent" data-lucide="check-circle"></i>
<span className="" data-lang-key="plan_basic_report">
                  Basis SOEP-verslag
                </span>
</li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-brand-accent" data-lucide="check-circle"></i>
<span className="" data-lang-key="plan_basic_support">
                  14-dagen testen
                </span>
</li>
</ul>
<button className="hover:bg-slate-50 transition-colors text-sm font-semibold text-slate-700 w-full border-slate-200 border rounded-xl pt-3 pb-3" data-lang-key="btn_basic">
              Start voor €1
            </button>
</div>

<div className="p-8 rounded-3xl border border-brand-accent/30 bg-[#111625] flex flex-col relative scale-105 shadow-xl shadow-slate-200/50 scroll-reveal z-10">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-accent text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-semibold" data-lang-key="plan_pro_badge">
              Meest Gekozen
            </div>
<h3 className="text-lg font-medium text-brand-accent mb-2" data-lang-key="plan_pro">
              Praktijk
            </h3>
<div className="text-3xl font-bold text-white mb-6">
              €79
              <span className="text-sm font-normal text-slate-400">
                /mnd/gbr
              </span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-slate-300">
<i className="w-4 h-4 text-brand-accent" data-lucide="check-circle"></i>
<span className="" data-lang-key="plan_pro_consults">
                  Onbeperkt Consulten
                </span>
</li>
<li className="flex items-center gap-2 text-sm text-slate-300">
<i className="w-4 h-4 text-brand-accent" data-lucide="check-circle"></i>
<span className="" data-lang-key="plan_pro_ai">
                  Geavanceerde AI Modellen
                </span>
</li>
<li className="flex items-center gap-2 text-sm text-slate-300">
<i className="w-4 h-4 text-brand-accent" data-lucide="check-circle"></i>
<span className="" data-lang-key="plan_pro_api">
                  EPD Integratie (API)
                </span>
</li>
</ul>
<button className="w-full py-3 rounded-xl bg-brand-accent text-white font-semibold text-sm hover:bg-[#00acc1] transition-colors btn-beam" data-lang-key="btn_pro">
              Kies Praktijk
            </button>
</div>

<div className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm flex flex-col scroll-reveal">
<h3 className="text-lg font-medium text-slate-900 mb-2">Premium</h3>
<div className="text-3xl font-bold text-slate-900 mb-6">
              €99
              <span className="text-sm font-normal text-slate-500">/mnd/gbr</span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-brand-accent" data-lucide="check-circle"></i>
<span className="" data-lang-key="plan_ent_users">
                  Meerdere gebruikers
                </span>
</li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-brand-accent" data-lucide="check-circle"></i>
<span className="" data-lang-key="plan_ent_training">
                  Custom AI training
                </span>
</li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-brand-accent" data-lucide="check-circle"></i>
<span className="" data-lang-key="plan_ent_premise">
                  On-premise opties
                </span>
</li>
</ul>
<button className="w-full py-3 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors">
              Kies Premium
            </button>
</div>

<div className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm flex flex-col scroll-reveal">
<h3 className="text-lg font-medium text-slate-900 mb-2" data-lang-key="plan_ent">
              Kliniek
            </h3>
<div className="text-3xl font-bold text-slate-900 mb-6" data-lang-key="plan_ent_price">
              Op maat
            </div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-brand-accent" data-lucide="check-circle"></i>
<span className="" data-lang-key="plan_ent_users">
                  Meerdere gebruikers
                </span>
</li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-brand-accent" data-lucide="check-circle"></i>
<span className="" data-lang-key="plan_ent_training">
                  Custom AI training
                </span>
</li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4 text-brand-accent" data-lucide="check-circle"></i>
<span className="" data-lang-key="plan_ent_premise">
                  On-premise opties
                </span>
</li>
</ul>
<button className="w-full py-3 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors" data-lang-key="btn_ent">
              Contact Opnemen
            </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0B0F19] relative overflow-hidden border-t border-white/5" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-12 text-center scroll-reveal">
          Veelgestelde vragen
        </h2>
<div className="space-y-4">

<details className="group bg-[#111625] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/10 scroll-reveal">
<summary className="flex cursor-pointer hover:text-white transition-colors font-medium text-slate-200 pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<span>Is mijn data veilig en AVG-proof?</span>
<i className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
              DoctoMinutes voldoet aan de strengste normen, waaronder NEN 7510
              en BBN3-beveiligingsniveaus. Alle gegevens worden versleuteld
              opgeslagen en verzonden. Wij zijn volledig compliant met de AVG en
              medische privacywetgeving.
            </div>
</details>

<details className="group bg-[#111625] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/10 scroll-reveal">
<summary className="flex justify-between items-center p-6 cursor-pointer text-slate-200 font-medium hover:text-white transition-colors">
<span className="">
                Kan ik DoctoMinutes veilig gebruiken tijdens huisbezoeken of
                consulten buiten de praktijk?
              </span>
<iconify-icon className="text-xl text-slate-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
              Uw medische expertise stopt niet bij de deur van uw praktijk, en
              dat geldt ook voor de ondersteuning van DoctoMinutes. Onze
              software is specifiek ontwikkeld voor volledige mobiliteit, zonder
              dat u concessies doet aan de privacy van uw patiënt of de
              integriteit van uw data.
              <br/>
<br/>
              Wij passen als enige in de markt de BNN3-norm en het
              VIR-BI-beveiligingsprotocol toe. Dit zijn normen die normaliter
              gereserveerd zijn voor de meest kritieke infrastructuren, zoals
              bij Defensie en voor het beveiligen van staatsgeheime informatie.
            </div>
</details>

<details className="group bg-[#111625] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/10 scroll-reveal">
<summary className="flex justify-between items-center p-6 cursor-pointer text-slate-200 font-medium hover:text-white transition-colors">
<span>
                BNN normering, wat is het verschil tussen BNN1, BNN2 en BNN3?
              </span>
<iconify-icon className="text-xl text-slate-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
              In de zorg is informatiebeveiliging essentieel, maar bij
              DoctoMinutes gaan we verder. Waar BNN1 en BNN2 volstaan voor
              basisbeveiliging en standaard bedrijfsvertrouwelijkheid, biedt
              BNN3 bescherming tegen de meest geavanceerde dreigingen.
              <br/>
<br/>
              Het is de hoogste norm voor vitale infrastructuur, vergelijkbaar
              met defensieprotocollen. Wij kiezen bewust voor dit
              specialistische niveau om de integriteit van uw medische
              gesprekken te garanderen. Met DoctoMinutes werkt u in een omgeving
              waar privacy en staatsgeheim-waardige security samenkomen.
            </div>
</details>

<details className="group bg-[#111625] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/10 scroll-reveal">
<summary className="flex justify-between items-center p-6 cursor-pointer text-slate-200 font-medium hover:text-white transition-colors">
<span>Kan ik oude consulten inzien?</span>
<iconify-icon className="text-xl text-slate-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
              DoctoMinutes fungeert als uw beveiligd digitaal geheugen. Dankzij
              ons geavanceerde archief kunt u eerdere consulten en medische
              dialogen op elk gewenst moment raadplegen. Dit waarborgt niet
              alleen de continuïteit van zorg, maar biedt u ook de diepgang die
              nodig is bij complexe casuïstiek.
              <br/>
<br/>
              Ons systeem voert een verificatieslag uit. Door deze extra
              controle worden inconsistenties proactief gesignaleerd en wordt de
              informatie voor het behandelplan maximaal verrijkt.
            </div>
</details>

<details className="group bg-[#111625] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/10 scroll-reveal">
<summary className="flex justify-between items-center p-6 cursor-pointer text-slate-200 font-medium hover:text-white transition-colors">
<span>Is er een koppeling met mijn HIS?</span>
<iconify-icon className="text-xl text-slate-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
              Wij werken continu aan integraties met gangbare Huisarts
              Informatie Systemen (HIS). Neem contact met ons op voor de actuele
              status van koppelingen met uw specifieke softwarepakket.
            </div>
</details>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-[#0f172a] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<span className="text-lg text-white tracking-tight font-semibold">
              DoctoMinutes
            </span>
<p className="text-xs text-slate-500 mt-4" data-lang-key="footer_slogan">
              De toekomst van huisartsenzorg.
            </p>
</div>
<div className="">
<h4 className="text-white text-sm font-semibold mb-4" data-lang-key="footer_product">
              Product
            </h4>
<ul className="space-y-2 text-xs text-slate-400">
<li className="">
<a className="hover:text-brand-accent" href="#features">Functies</a>
</li>
<li className="">
<a className="hover:text-brand-accent" href="#security">
                  Data &amp; Veiligheid
                </a>
</li>
<li className="">
<a className="hover:text-brand-accent" href="#pricing">Prijs</a>
</li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-semibold mb-4" data-lang-key="footer_company">
              Bedrijf
            </h4>
<ul className="space-y-2 text-xs text-slate-400">
<li><a className="hover:text-brand-accent" href="#team">Team</a></li>
<li>
<a className="hover:text-brand-accent" href="#testimonials">
                  Ervaringen
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-semibold mb-4" data-lang-key="footer_legal">
              Wettelijk
            </h4>
<ul className="space-y-2 text-xs text-slate-400">
<li>
<button className="hover:text-brand-accent text-left transition-colors" onclick="openModal('privacy-modal')">
                  Privacybeleid (AVG)
                </button>
</li>
<li>
<button className="hover:text-brand-accent text-left transition-colors" onclick="openModal('terms-modal')">
                  Algemene voorwaarden
                </button>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex justify-center">
<p className="text-xs text-slate-500">©2026 DataHyve</p>
</div>
</div>
</footer>


<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-[100] hidden" id="privacy-modal" role="dialog">
<div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onclick="closeModal('privacy-modal')"></div>
<div className="fixed inset-0 z-10 overflow-y-auto">
<div className="flex min-h-full items-center justify-center p-4 text-center">
<div className="relative transform overflow-hidden rounded-2xl bg-[#0B0F19] border border-white/10 text-left shadow-2xl transition-all w-full max-w-2xl">
<div className="px-6 py-6 sm:px-8">
<div className="flex justify-between items-start mb-6">
<h3 className="text-xl font-semibold leading-6 text-white pr-4" id="modal-title">
                  Privacy- en AVG-beleid (BNN3/VIR-BI Focus)
                </h3>
<button className="text-slate-400 hover:text-white transition-colors" onclick="closeModal('privacy-modal')" type="button">
<i className="w-6 h-6" data-lucide="x"></i>
</button>
</div>
<div className="mt-2 text-sm text-slate-300 space-y-4 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
<p className="font-medium text-brand-accent">
                  Dit beleid benadrukt dat data niet alleen 'volgens de wet'
                  wordt verwerkt, maar volgens de strengste staatsnormen.
                </p>
<h4 className="text-white font-semibold mt-6 text-lg">
                  Privacyverklaring DoctoMinutes
                </h4>
<div className="space-y-4">
<p>
                    DoctoMinutes verwerkt medische en persoonsgegevens met een
                    beveiligingsregime dat voldoet aan de VIR-BI en de
                    BNN3-normering. Dit betekent dat onze infrastructuur is
                    ingericht op het verwerken van informatie waarvan de
                    vertrouwelijkheid essentieel is voor de continuïteit van de
                    zorg en de persoonlijke levenssfeer.
                  </p>
<p>
                    Wij verwerken gegevens uitsluitend ter uitvoering van de
                    overeenkomst met de zorgverlener (huisarts) om consulten te
                    archiveren en te verifiëren. De verwerking vindt plaats op
                    basis van de behandelovereenkomst tussen arts en patiënt
                    (art. 9 lid 2 sub h AVG).
                  </p>
<p>Conform de BNN3- en VIR-BI-eisen hanteren wij:</p>
<ul className="list-disc pl-5 space-y-2 mt-2">
<li>
                      Dataoverdracht en opslag zijn versleuteld volgens
                      cryptografische standaarden die zijn goedgekeurd voor
                      gerubriceerde informatie.
                    </li>
<li>
                      Onze servers staan in Nederland in streng beveiligde
                      datacenters die voldoen aan de hoogste eisen voor vitale
                      infrastructuur.
                    </li>
<li>
                      Strikt 'Need-to-Know' principe. Alleen geautoriseerd
                      personeel met de juiste screening heeft toegang tot de
                      systeemarchitectuur (geen toegang tot de inhoud van
                      medische data).
                    </li>
</ul>
<p>
                    Wij hanteren de wettelijke medische bewaartermijnen (WGBO)
                    of de termijn die specifiek in de verwerkersovereenkomst met
                    de praktijk is afgesproken.
                  </p>
</div>
</div>
</div>
<div className="bg-white/5 px-6 py-4 sm:px-8 flex justify-end">
<button className="inline-flex w-full justify-center rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20 sm:w-auto transition-colors" onclick="closeModal('privacy-modal')" type="button">
                Sluiten
              </button>
</div>
</div>
</div>
</div>
</div>
<div aria-labelledby="modal-title-terms" aria-modal="true" className="fixed inset-0 z-[100] hidden" id="terms-modal" role="dialog">
<div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onclick="closeModal('terms-modal')"></div>
<div className="fixed inset-0 z-10 overflow-y-auto">
<div className="flex min-h-full items-center justify-center p-4 text-center">
<div className="relative transform overflow-hidden rounded-2xl bg-[#0B0F19] border border-white/10 text-left shadow-2xl transition-all w-full max-w-2xl">
<div className="px-6 py-6 sm:px-8">
<div className="flex justify-between items-start mb-6">
<h3 className="text-xl font-semibold leading-6 text-white pr-4" id="modal-title-terms">
                  Algemene Voorwaarden (SaaS/B2B)
                </h3>
<button className="text-slate-400 hover:text-white transition-colors" onclick="closeModal('terms-modal')" type="button">
<i className="w-6 h-6" data-lucide="x"></i>
</button>
</div>
<div className="mt-2 text-sm text-slate-300 space-y-4 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
<p className="font-medium text-brand-accent">
                  Deze voorwaarden beschermen uw intellectueel eigendom en
                  bakenen de aansprakelijkheid af, cruciaal bij hoogwaardige
                  software.
                </p>
<h4 className="text-white font-semibold mt-6 text-lg">
                  Algemene Voorwaarden DoctoMinutes
                </h4>
<div className="space-y-4">
<ul className="list-disc pl-5 space-y-1">
<li>
                      De DoctoMinutes applicatie en bijbehorende
                      verificatiemodules.
                    </li>
<li>
                      De medische professional of praktijk die de software
                      afneemt.
                    </li>
</ul>
<p>
                    DoctoMinutes verleent de klant een niet-exclusief,
                    niet-overdraagbaar recht om de software te gebruiken voor de
                    uitoefening van hun medische praktijk. De broncode blijft te
                    allen tijde eigendom van DoctoMinutes.
                  </p>
<p>
                    Wij spannen ons in voor een beschikbaarheid van 99,9%,
                    passend bij de BNN3-classificatie. Onderhoud wordt tijdig
                    aangekondigd en vindt plaats buiten reguliere
                    spreekuurtijden.
                  </p>
<ul className="list-disc pl-5 space-y-1">
<li>
                      DoctoMinutes is een ondersteunend hulpmiddel. De medische
                      eindverantwoordelijkheid voor het behandelplan ligt te
                      allen tijde bij de behandelend arts.
                    </li>
<li>
                      De totale aansprakelijkheid van DoctoMinutes is beperkt
                      tot maximaal het bedrag van de betaalde licentievergoeding
                      over de afgelopen 12 maanden.
                    </li>
</ul>
<p>
                    Beide partijen zijn verplicht tot geheimhouding van alle
                    vertrouwelijke informatie die zij in het kader van de
                    overeenkomst hebben verkregen. Gezien de VIR-BI status geldt
                    hierop een verzwaard regime.
                  </p>
</div>
</div>
</div>
<div className="bg-white/5 px-6 py-4 sm:px-8 flex justify-end">
<button className="inline-flex w-full justify-center rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20 sm:w-auto transition-colors" onclick="closeModal('terms-modal')" type="button">
                Sluiten
              </button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
