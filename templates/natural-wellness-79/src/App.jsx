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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // New Reviews Data with Images
      const reviews = [
          { 
            title: "J'ai adoré", 
            text: "J'ai adoré la formation Praticien en aromathérapie. J'ai un boulot très prenant et cette formation à son rythme était idéale. J'ai tellement apprécié que maintenant je fais la formation Fleurs de Bach.",
            image: "https://www.aromapretspartez.fr/cdn/shop/files/IMG-20231211-WA0034_650x.jpg?v=1703251304"
          },
          { 
            title: "Formation unique et géniale !", 
            text: "La formation en lithothérapie a été une merveilleuse découverte. Merci Noémie",
            image: "https://www.aromapretspartez.fr/cdn/shop/files/Jetez_un_oeil_a_mon_design_Canva_9_650x.png?v=1703169640"
          },
          { 
            title: "Très bonne formation", 
            text: "Je suis fière de pouvoir présenter mon certificat à ma famille et à mon travail. Merci Noémie",
            image: "https://www.aromapretspartez.fr/cdn/shop/files/20230512_133648_0000_-_Copie_1_650x.png?v=1703251369"
          },
          { 
            title: "Fier de mon parcours avec APP", 
            text: "Merci pour cette formation et l'accompagnement. Je ne me suis jamais senti seul.",
            image: "https://www.aromapretspartez.fr/cdn/shop/files/Jetez_un_oeil_a_mon_design_Canva_7_650x.png?v=1703169641"
          },
          { 
            title: "Merci pour la qualité!", 
            text: "J'avais peur d'une arnaque avec tout ce que l'on voit sur internet mais je suis heureuse d'être ENFIN tombée sur un organisme de formation sérieux et compétent. Merci Noémie pour tes formations",
            image: "https://www.aromapretspartez.fr/cdn/shop/files/received_875663903015538_1_698c82e5-c44f-4249-bd2d-956abc0d8fc1_650x.jpg?v=1703251213"
          },
          { 
            title: "Accompagnement au top !", 
            text: "Noémie a toujours été disponible pour répondre à mes questions. Je recommande Aroma Prêts Partez à toutes mes amies !",
            image: "https://www.aromapretspartez.fr/cdn/shop/files/Screenshot_20230414_191741_1_650x.jpg?v=1703251258"
          }
      ];

      // Marquee Logic
      function initMarquee() {
          const track = document.getElementById('marquee-track');
          if (!track) return;
          const allReviews = [...reviews, ...reviews]; // Duplicate for loop

          allReviews.forEach(review => {
              const card = document.createElement('div');
              card.className = "w-[350px] md:w-[450px] flex-shrink-0 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-auto hover:shadow-xl transition-all duration-300 select-none overflow-hidden group";
              
              // Ajustement du container image pour permettre l'affichage intégral avec object-contain
              card.innerHTML = `
                  <div class="mb-5 overflow-hidden rounded-xl border border-gray-100 bg-gray-50 flex justify-center items-center h-[250px] md:h-[350px]">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="Avis client" class="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-700">
                  </div>
                  <div class="flex text-[#8ebb14] gap-0.5 mb-3">
                      ${Array(5).fill('<iconify-icon icon="solar:star-bold" class="text-[#8ebb14]"></iconify-icon>').join('')}
                  </div>
                  <h4 class="font-bold text-[#244a70] text-lg mb-2 leading-tight">${review.title}</h4>
                  <p class="text-gray-600 text-sm leading-relaxed mb-2">"${review.text}"</p>
              `;
              track.appendChild(card);
          });
      }

      // Logic Init
      document.addEventListener('DOMContentLoaded', () => {
          initMarquee();
          // Header Scroll
          const header = document.getElementById('header');
          window.addEventListener('scroll', () => {
              if (window.scrollY > 20) {
                  header.classList.add('shadow-lg');
              } else {
                  header.classList.remove('shadow-lg');
              }
          });

          // Mobile Menu
          const mobileBtn = document.getElementById('mobile-menu-btn');
          const mobileMenu = document.getElementById('mobile-menu');
          mobileBtn.addEventListener('click', () => {
              mobileMenu.classList.toggle('hidden');
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
      
<div className="fixed inset-0 -z-10 h-full w-full bg-white pointer-events-none overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#305F8E05_1px,transparent_1px),linear-gradient(to_bottom,#305F8E05_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
<div className="absolute top-[20%] right-[-10%] h-[800px] w-[800px] rounded-full bg-[#D4FF33]/10 blur-[120px]"></div>
<div className="absolute bottom-[10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-[#305F8E]/5 blur-[100px]"></div>
</div>
<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 bg-white/90 backdrop-blur-md border-b border-gray-100" id="header">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<nav className="flex items-center justify-between h-14">
<a className="flex items-center transition-transform hover:scale-105 duration-300" href="#" id="header-logo">
<img alt="Logo Aroma Prêts Partez" className="h-6 md:h-7 w-auto object-contain" src="https://www.aromapretspartez.fr/cdn/shop/files/LOGO_9a6e8d31-569f-4a43-b9dc-5a50d645210c.png?v=1703169639&amp;width=480"/>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="nav-link text-xs font-medium uppercase tracking-widest text-gray-600 hover:text-[#305F8E] transition-colors duration-300" href="#science">
              L'Experte
            </a>
<a className="nav-link text-xs font-medium uppercase tracking-widest text-gray-600 hover:text-[#305F8E] transition-colors duration-300" href="#programme">
              Programme
            </a>
<a className="nav-link text-xs font-medium uppercase tracking-widest text-gray-600 hover:text-[#305F8E] transition-colors duration-300" href="#reviews">
              Avis
            </a>
<a className="nav-link text-xs font-medium uppercase tracking-widest text-gray-600 hover:text-[#305F8E] transition-colors duration-300" href="#offre">
              L'Offre
            </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-[#305F8E] bg-[#D4FF33] rounded-lg hover:bg-[#ccee22] transition-transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-lime-400/20" href="#offre">
              Je découvre
            </a>
<button aria-label="Toggle menu" className="md:hidden p-2 text-[#305F8E]" id="mobile-menu-btn">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
</nav>
</div>
<div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 hidden shadow-xl" id="mobile-menu">
<div className="flex flex-col p-4 space-y-4">
<a className="text-lg font-medium text-gray-800 hover:text-[#305F8E]" href="#science">
            L'Experte
          </a>
<a className="text-lg font-medium text-gray-800 hover:text-[#305F8E]" href="#programme">
            Programme
          </a>
<a className="text-lg font-medium text-gray-800 hover:text-[#305F8E]" href="#reviews">
            Avis
          </a>
<a className="text-lg font-medium text-gray-800 hover:text-[#305F8E]" href="#offre">
            L'Offre
          </a>
<a className="text-lg font-semibold text-[#305F8E]" href="#offre">
            Je découvre
          </a>
</div>
</div>
</header>
<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
<div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="mt-[10px] inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#f0f9ff] border border-[#305F8E]/20 mb-8 animate-fade-in-up">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#305F8E] opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-[#305F8E]"></span>
</span>
<span className="text-sm font-semibold uppercase tracking-widest text-[#305F8E]">
            🌿 Accessible même si vous débutez
          </span>
</div>
<h1 className="font-bebas text-7xl md:text-9xl text-[#244a70] leading-[0.85] tracking-tight mb-8">
          LITHOTHÉRAPIE
          <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8ebb14] to-[#305F8E]">
            &amp; HUILES
          </span>
<br/>
          ESSENTIELLES
        </h1>
<p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 font-light">
          Apprenez à associer la puissance des pierres naturelles et des huiles essentielles pour créer des rituels bien-être, accompagner les émotions et utiliser ces approches naturelles simplement au quotidien.
        </p>
<div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10 text-sm md:text-base font-medium text-[#244a70]">
<span className="flex items-center gap-2"><iconify-icon className="text-[#8ebb14] text-xl" icon="solar:check-circle-linear"></iconify-icon> Formation Complète</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#8ebb14] text-xl" icon="solar:check-circle-linear"></iconify-icon> Accès Immédiat</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#8ebb14] text-xl" icon="solar:check-circle-linear"></iconify-icon> Accès à Vie</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#8ebb14] text-xl" icon="solar:check-circle-linear"></iconify-icon> Certificat de Formation</span>
</div>
<div className="flex flex-col items-center justify-center gap-4">
<a className="pulse-btn w-full sm:w-auto px-10 py-5 bg-[#D4FF33] text-[#305F8E] text-xl font-bold rounded-lg hover:bg-[#ccee22] transition-all shadow-xl shadow-lime-400/30 uppercase tracking-wide" href="#offre">
            Je découvre la formation
          </a>
<div className="flex flex-col items-center text-xs text-gray-400 gap-1">
<span className="flex items-center gap-1"><iconify-icon icon="solar:lock-linear"></iconify-icon> Paiement Sécurisé • Ebook Bonus Offert</span>
</div>
<div className="h-[20px] w-full block"></div>
</div>
</div>
</section>
<section className="py-12 bg-gray-50 border-t border-b border-gray-100 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h3 className="text-center text-[#305F8E] font-medium text-xs uppercase tracking-widest mb-8">Ils en parlent</h3>
<div className="relative w-full overflow-hidden mask-linear">
<div className="flex items-center gap-16 w-max animate-marquee" style={{animationDuration: '40s'}}>
<img alt="Logo Partenaire" className="h-10 md:h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://www.aromapretspartez.fr/cdn/shop/files/LOGO_2.svg?v=1703169639&amp;width=3200"/>
<img alt="Logo Partenaire" className="h-10 md:h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://www.aromapretspartez.fr/cdn/shop/files/LOGO_3.svg?v=1703169639&amp;width=3200"/>
<img alt="Logo Partenaire" className="h-10 md:h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://www.aromapretspartez.fr/cdn/shop/files/LOGO_5.svg?v=1703169639&amp;width=3200"/>
<img alt="Logo Partenaire" className="h-10 md:h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://www.aromapretspartez.fr/cdn/shop/files/LOGO_1.svg?v=1703169639&amp;width=3200"/>
<img alt="Logo Partenaire" className="h-10 md:h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://www.aromapretspartez.fr/cdn/shop/files/LOGO_4.svg?v=1703169639&amp;width=3200"/>
<img alt="Logo Partenaire" className="h-10 md:h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://www.aromapretspartez.fr/cdn/shop/files/LOGO_2.svg?v=1703169639&amp;width=3200"/>
<img alt="Logo Partenaire" className="h-10 md:h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://www.aromapretspartez.fr/cdn/shop/files/LOGO_3.svg?v=1703169639&amp;width=3200"/>
<img alt="Logo Partenaire" className="h-10 md:h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://www.aromapretspartez.fr/cdn/shop/files/LOGO_5.svg?v=1703169639&amp;width=3200"/>
<img alt="Logo Partenaire" className="h-10 md:h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://www.aromapretspartez.fr/cdn/shop/files/LOGO_2.svg?v=1703169639&amp;width=3200"/>
<img alt="Logo Partenaire" className="h-10 md:h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://www.aromapretspartez.fr/cdn/shop/files/LOGO_3.svg?v=1703169639&amp;width=3200"/>
<img alt="Logo Partenaire" className="h-10 md:h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://www.aromapretspartez.fr/cdn/shop/files/LOGO_5.svg?v=1703169639&amp;width=3200"/>
<img alt="Logo Partenaire" className="h-10 md:h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://www.aromapretspartez.fr/cdn/shop/files/LOGO_1.svg?v=1703169639&amp;width=3200"/>
<img alt="Logo Partenaire" className="h-10 md:h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://www.aromapretspartez.fr/cdn/shop/files/LOGO_4.svg?v=1703169639&amp;width=3200"/>
<img alt="Logo Partenaire" className="h-10 md:h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://www.aromapretspartez.fr/cdn/shop/files/LOGO_2.svg?v=1703169639&amp;width=3200"/>
<img alt="Logo Partenaire" className="h-10 md:h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://www.aromapretspartez.fr/cdn/shop/files/LOGO_3.svg?v=1703169639&amp;width=3200"/>
<img alt="Logo Partenaire" className="h-10 md:h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://www.aromapretspartez.fr/cdn/shop/files/LOGO_5.svg?v=1703169639&amp;width=3200"/>
</div>
</div>
</div>
</section>
<section className="py-24 md:py-32 bg-[#305F8E] text-white overflow-hidden relative" id="science">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-[#D4FF33] font-medium text-xs uppercase tracking-widest mb-3 block">
              Une experte à vos côtés
            </span>
<h2 className="font-bebas text-6xl text-white mb-6 tracking-tight">
              Créée par Noémie Xueref
            </h2>
<p className="text-blue-100/80 text-xl mb-6 font-light leading-relaxed">
              Spécialiste de la santé naturelle, Noémie transmet ses connaissances depuis plusieurs années pour rendre ces approches plus simples, accessibles et compréhensibles pour tous.
            </p>
<div className="grid grid-cols-2 gap-6 mt-8">
<div className="p-4 rounded-lg bg-white/5 border border-white/10">
<div className="text-4xl font-bold text-[#D4FF33] mb-1">20+</div>
<div className="text-sm text-blue-100">Ans d'expérience en pharmacie</div>
</div>
<div className="p-4 rounded-lg bg-white/5 border border-white/10">
<div className="text-4xl font-bold text-[#D4FF33] mb-1">230k+</div>
<div className="text-sm text-blue-100">Followers sur les réseaux</div>
</div>
<div className="p-4 rounded-lg bg-white/5 border border-white/10">
<div className="text-4xl font-bold text-[#D4FF33] mb-1">1000+</div>
<div className="text-sm text-blue-100">Élèves déjà formés</div>
</div>
<div className="p-4 rounded-lg bg-white/5 border border-white/10">
<div className="text-4xl font-bold text-[#D4FF33] mb-1">100%</div>
<div className="text-sm text-blue-100">Accessible aux débutants</div>
</div>
</div>
</div>
<div className="relative h-full">
<div className="relative rounded-2xl shadow-2xl overflow-hidden h-[400px] lg:h-[500px]">
<img alt="Noémie Xueref" className="w-full h-full object-cover object-center" src="https://cdn.shopify.com/s/files/1/0267/6110/1508/files/7._Gros_plan_sur_Noemie_Xueref_image_nette.jpg?v=1774012999"/>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 md:py-32 bg-white" id="identification">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="font-bebas text-5xl md:text-6xl text-[#305F8E] mb-6 tracking-tight">
          Peut-être que vous vous reconnaissez dans ces situations...
        </h2>
<p className="text-xl md:text-2xl text-gray-600 font-light mb-12">
          Vous aimez les approches naturelles... <strong className="font-semibold text-[#244a70]">Mais :</strong>
</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto mb-16">
<div className="flex items-start gap-4 p-6 rounded-xl border border-red-100 bg-red-50/50 hover:shadow-md transition-shadow">
<iconify-icon className="text-red-400 text-2xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<p className="text-gray-700 font-light text-lg">Vous ne savez pas <strong className="text-[#244a70]">quelles pierres choisir</strong>.</p>
</div>
<div className="flex items-start gap-4 p-6 rounded-xl border border-red-100 bg-red-50/50 hover:shadow-md transition-shadow">
<iconify-icon className="text-red-400 text-2xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<p className="text-gray-700 font-light text-lg">Vous ne savez pas <strong className="text-[#244a70]">quelles huiles essentielles utiliser</strong>.</p>
</div>
<div className="flex items-start gap-4 p-6 rounded-xl border border-red-100 bg-red-50/50 hover:shadow-md transition-shadow">
<iconify-icon className="text-red-400 text-2xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<p className="text-gray-700 font-light text-lg">Vous avez vu beaucoup <strong className="text-[#244a70]">d'informations contradictoires</strong>.</p>
</div>
<div className="flex items-start gap-4 p-6 rounded-xl border border-red-100 bg-red-50/50 hover:shadow-md transition-shadow">
<iconify-icon className="text-red-400 text-2xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<p className="text-gray-700 font-light text-lg">Vous avez <strong className="text-[#244a70]">peur de faire des erreurs</strong>.</p>
</div>
</div>
<div className="p-8 md:p-10 rounded-2xl bg-[#f0f9ff] border border-[#305F8E]/20 inline-block text-left max-w-3xl w-full shadow-lg shadow-[#305F8E]/5 relative">
<div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-[#D4FF33] flex items-center justify-center text-[#305F8E] shadow-sm">
<iconify-icon className="text-lg" icon="solar:info-circle-bold"></iconify-icon>
</div>
<h4 className="font-bold text-[#244a70] text-xl mb-3 uppercase tracking-wide">Résultat :</h4>
<p className="text-gray-600 text-lg font-light mb-6">
            Vous vous intéressez aux pierres et aux huiles essentielles... mais vous ne savez pas vraiment comment les utiliser correctement.
          </p>
<div className="flex items-center gap-3 text-[#305F8E] font-semibold text-lg pt-6 border-t border-[#305F8E]/10">
<iconify-icon className="text-[#8ebb14] text-2xl" icon="solar:magic-stick-3-bold"></iconify-icon>
            C'est exactement pour cela que cette formation a été créée.
          </div>
</div>
</div>
</section>
<section className="py-24 md:py-32 bg-gray-50 border-t border-gray-100" id="avant-apres">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-[#305F8E] font-medium text-xs uppercase tracking-widest mb-3 block">
            Votre Évolution
          </span>
<h2 className="font-bebas text-5xl md:text-6xl text-[#305F8E] mb-6 tracking-tight">
            Avant / Après la formation
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
<div className="bg-white p-8 md:p-10 rounded-2xl border border-red-100 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -mr-4 -mt-4 z-0"></div>
<h3 className="font-bebas text-3xl text-gray-800 mb-6 relative z-10 border-b border-gray-100 pb-4">Avant la formation</h3>
<ul className="space-y-5 relative z-10">
<li className="flex items-start gap-3 text-gray-600">
<iconify-icon className="text-red-400 text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span>vous êtes curieux mais un peu perdu</span>
</li>
<li className="flex items-start gap-3 text-gray-600">
<iconify-icon className="text-red-400 text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span>vous ne savez pas quelles pierres choisir</span>
</li>
<li className="flex items-start gap-3 text-gray-600">
<iconify-icon className="text-red-400 text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span>vous utilisez parfois des huiles essentielles sans être sûr</span>
</li>
<li className="flex items-start gap-3 text-gray-600">
<iconify-icon className="text-red-400 text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span>vous ne savez pas comment associer les deux</span>
</li>
</ul>
</div>
<div className="bg-[#f0f9ff] p-8 md:p-10 rounded-2xl border border-[#305F8E]/20 shadow-lg shadow-[#305F8E]/5 relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-[#D4FF33]/20 rounded-bl-full -mr-4 -mt-4 z-0"></div>
<h3 className="font-bebas text-3xl text-[#244a70] mb-2 relative z-10">Après la formation</h3>
<p className="text-sm text-[#305F8E] font-medium mb-4 relative z-10 uppercase tracking-widest">Vous saurez :</p>
<ul className="space-y-5 relative z-10">
<li className="flex items-start gap-3 text-gray-700 font-medium">
<iconify-icon className="text-[#8ebb14] text-xl shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>comprendre les propriétés des pierres</span>
</li>
<li className="flex items-start gap-3 text-gray-700 font-medium">
<iconify-icon className="text-[#8ebb14] text-xl shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>découvrir les huiles essentielles les plus utiles</span>
</li>
<li className="flex items-start gap-3 text-gray-700 font-medium">
<iconify-icon className="text-[#8ebb14] text-xl shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>associer pierres et huiles essentielles</span>
</li>
<li className="flex items-start gap-3 text-gray-700 font-medium">
<iconify-icon className="text-[#8ebb14] text-xl shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>créer vos propres rituels bien-être</span>
</li>
<li className="flex items-start gap-3 text-gray-700 font-medium">
<iconify-icon className="text-[#8ebb14] text-xl shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>utiliser ces approches naturelles simplement au quotidien</span>
</li>
</ul>
</div>
</div>
</div>
</section>
<section className="py-24 bg-white border-b border-gray-100 relative overflow-hidden" id="transformation">
<div className="absolute top-0 left-0 w-64 h-64 bg-[#D4FF33]/5 rounded-full blur-3xl -ml-20 -mt-20"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<h2 className="font-bebas text-5xl md:text-6xl text-[#305F8E] mb-12">Imaginez pouvoir :</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
<div className="flex items-center gap-4 p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#D4FF33] hover:shadow-md transition-all">
<iconify-icon className="text-[#8ebb14] text-3xl shrink-0" icon="solar:star-fall-bold-duotone"></iconify-icon>
<span className="text-gray-700 text-lg font-medium">Comprendre l’énergie des pierres</span>
</div>
<div className="flex items-center gap-4 p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#D4FF33] hover:shadow-md transition-all">
<iconify-icon className="text-[#8ebb14] text-3xl shrink-0" icon="solar:infinity-bold-duotone"></iconify-icon>
<span className="text-gray-700 text-lg font-medium">Créer des synergies naturelles</span>
</div>
<div className="flex items-center gap-4 p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#D4FF33] hover:shadow-md transition-all">
<iconify-icon className="text-[#8ebb14] text-3xl shrink-0" icon="solar:heart-pulse-bold-duotone"></iconify-icon>
<span className="text-gray-700 text-lg font-medium">Accompagner les émotions au quotidien</span>
</div>
<div className="flex items-center gap-4 p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#D4FF33] hover:shadow-md transition-all">
<iconify-icon className="text-[#8ebb14] text-3xl shrink-0" icon="solar:home-smile-bold-duotone"></iconify-icon>
<span className="text-gray-700 text-lg font-medium">Créer une atmosphère apaisante chez vous</span>
</div>
</div>
<div className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-[#f0f9ff] border border-[#305F8E]/20 text-[#244a70] font-medium text-lg shadow-sm">
<iconify-icon className="text-[#305F8E] text-2xl" icon="solar:info-circle-bold"></iconify-icon>
          Cette formation vous donne une méthode simple et structurée pour y parvenir.
        </div>
</div>
</section>
<section className="py-24 md:py-32 bg-gray-50" id="programme">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-[#305F8E] font-medium text-xs uppercase tracking-widest mb-3 block">
            Le Contenu
          </span>
<h2 className="font-bebas text-5xl md:text-6xl text-[#305F8E] mb-6 tracking-tight">
            Votre Programme Détaillé
          </h2>
</div>
<div className="mb-20">
<div className="bg-[#305F8E] text-white p-8 md:p-10 rounded-2xl mb-10 shadow-lg relative overflow-hidden">
<div className="absolute top-0 right-0 opacity-10 text-[150px] leading-none -mt-4 -mr-4"><iconify-icon icon="solar:notebook-bold"></iconify-icon></div>
<h3 className="font-bebas text-4xl mb-3 relative z-10">Partie 1 : Pierres et huiles essentielles chez l’enfant</h3>
<p className="text-blue-100 text-lg font-light max-w-3xl relative z-10">
              Les enfants sont particulièrement sensibles à leur environnement et à leurs émotions. Vous découvrirez comment utiliser ces approches naturelles selon les différentes étapes de l’enfance.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative">
<span className="absolute top-4 right-4 text-4xl font-bebas text-gray-100">01</span>
<h4 className="font-bold text-[#244a70] text-xl mb-3 pr-8 relative z-10">Les bases essentielles</h4>
<p className="text-gray-600 font-light relative z-10">Comprendre les principes fondamentaux de la lithothérapie et de l’aromathérapie.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative">
<span className="absolute top-4 right-4 text-4xl font-bebas text-gray-100">02</span>
<h4 className="font-bold text-[#244a70] text-xl mb-3 pr-8 relative z-10">Bébé bonheur (0-2 ans)</h4>
<p className="text-gray-600 font-light relative z-10">Les pierres adaptées aux tout-petits et les approches naturelles douces.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative">
<span className="absolute top-4 right-4 text-4xl font-bebas text-gray-100">03</span>
<h4 className="font-bold text-[#244a70] text-xl mb-3 pr-8 relative z-10">Éveil des émotions (2-5 ans)</h4>
<p className="text-gray-600 font-light relative z-10">Des rituels simples pour accompagner les émotions des jeunes enfants.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative">
<span className="absolute top-4 right-4 text-4xl font-bebas text-gray-100">04</span>
<h4 className="font-bold text-[#244a70] text-xl mb-3 pr-8 relative z-10">Confiance et apprentissage (6-12 ans)</h4>
<p className="text-gray-600 font-light relative z-10">Des pierres et approches naturelles pour accompagner la concentration et la confiance.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative">
<span className="absolute top-4 right-4 text-4xl font-bebas text-gray-100">05</span>
<h4 className="font-bold text-[#244a70] text-xl mb-3 pr-8 relative z-10">Équilibre émotionnel des adolescents (13-18 ans)</h4>
<p className="text-gray-600 font-light relative z-10">Comprendre les pierres et les huiles essentielles pouvant accompagner cette période intense.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative">
<span className="absolute top-4 right-4 text-4xl font-bebas text-gray-100">06</span>
<h4 className="font-bold text-[#244a70] text-xl mb-3 pr-8 relative z-10">Créer un environnement harmonieux</h4>
<p className="text-gray-600 font-light relative z-10">Apprendre à créer une atmosphère apaisante dans le quotidien.</p>
</div>
</div>
</div>
<div>
<div className="bg-[#D4FF33] text-[#244a70] p-8 md:p-10 rounded-2xl mb-10 shadow-lg relative overflow-hidden">
<div className="absolute top-0 right-0 opacity-10 text-[150px] leading-none -mt-4 -mr-4"><iconify-icon icon="solar:users-group-two-rounded-bold"></iconify-icon></div>
<h3 className="font-bebas text-4xl mb-3 relative z-10">Partie 2 : Lithothérapie et aromathérapie pour les adultes</h3>
<p className="text-[#244a70]/80 text-lg font-light max-w-3xl relative z-10">
              Dans cette seconde partie, vous approfondirez vos connaissances.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative">
<span className="absolute top-4 right-4 text-4xl font-bebas text-gray-100">01</span>
<h4 className="font-bold text-[#244a70] text-lg mb-3 pr-8 relative z-10">Les pierres essentielles</h4>
<p className="text-gray-600 font-light text-sm relative z-10">Découverte de 20 pierres majeures utilisées en lithothérapie.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative">
<span className="absolute top-4 right-4 text-4xl font-bebas text-gray-100">02</span>
<h4 className="font-bold text-[#244a70] text-lg mb-3 pr-8 relative z-10">Les huiles essentielles incontournables</h4>
<p className="text-gray-600 font-light text-sm relative z-10">Étude de 20 huiles essentielles importantes dans une approche de bien-être.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative">
<span className="absolute top-4 right-4 text-4xl font-bebas text-gray-100">03</span>
<h4 className="font-bold text-[#244a70] text-lg mb-3 pr-8 relative z-10">Associer pierres et huiles essentielles</h4>
<p className="text-gray-600 font-light text-sm relative z-10">Apprendre à créer des synergies simples et efficaces.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative">
<span className="absolute top-4 right-4 text-4xl font-bebas text-gray-100">04</span>
<h4 className="font-bold text-[#244a70] text-lg mb-3 pr-8 relative z-10">Cadre éthique et bonnes pratiques</h4>
<p className="text-gray-600 font-light text-sm relative z-10">Comprendre les précautions et les limites de ces approches.</p>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-white border-t border-b border-gray-100 relative overflow-hidden" id="bonus">
<div className="absolute top-1/2 left-0 w-64 h-64 bg-[#D4FF33]/10 rounded-full blur-3xl transform -translate-y-1/2 -translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative flex justify-center">
<div className="absolute inset-0 bg-[#D4FF33]/20 rounded-3xl blur-2xl transform rotate-3"></div>
<img alt="Ebook Bonus Fabriquer ses roll-ons" className="relative z-10 w-full max-w-lg lg:max-w-xl mx-auto shadow-2xl rounded-lg" src="https://cdn.shopify.com/s/files/1/0267/6110/1508/files/6._Fabriquer_ses_roll-ons_aux_huiles_essentielles_version_6.png?v=1774005017"/>
</div>
<div className="order-1 lg:order-2">
<span className="text-[#305F8E] font-medium text-xs uppercase tracking-widest mb-3 block">
              Bonus Offert
            </span>
<h2 className="font-bebas text-5xl md:text-6xl text-[#305F8E] mb-6 tracking-tight">
              Ebook offert : Fabriquer ses roll-ons aux huiles essentielles
            </h2>
<p className="text-xl text-gray-600 font-light mb-8">
              En rejoignant la formation, vous recevrez également cet ebook pratique.
            </p>
<h4 className="font-semibold text-[#244a70] text-lg mb-4 uppercase tracking-wide">Vous y apprendrez :</h4>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-gray-700 font-medium">
<iconify-icon className="text-[#8ebb14] text-xl shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>comment fabriquer vos roll-ons</span>
</li>
<li className="flex items-start gap-3 text-gray-700 font-medium">
<iconify-icon className="text-[#8ebb14] text-xl shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>comment associer huiles essentielles et huiles végétales</span>
</li>
<li className="flex items-start gap-3 text-gray-700 font-medium">
<iconify-icon className="text-[#8ebb14] text-xl shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>comment créer des synergies simples</span>
</li>
</ul>
<div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-gray-50 border border-[#305F8E]/20 text-[#244a70] font-medium text-lg shadow-sm">
<iconify-icon className="text-[#305F8E] text-2xl shrink-0" icon="solar:info-circle-bold"></iconify-icon>
              Un guide idéal pour passer à la pratique rapidement.
            </div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-gray-50 border-b border-gray-100" id="recapitulatif">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<span className="text-[#305F8E] font-medium text-xs uppercase tracking-widest mb-3 block">
            Récapitulatif
          </span>
<h2 className="font-bebas text-5xl md:text-6xl text-[#305F8E] mb-4 tracking-tight">
            CE QUE VOUS RECEVEZ EN REJOIGNANT LA FORMATION :
          </h2>
</div>
<div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#D4FF33]/20 rounded-bl-full -mr-8 -mt-8 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 max-w-2xl mx-auto">
<div className="flex items-center gap-4 bg-gray-50 border border-gray-100 p-5 rounded-xl">
<iconify-icon className="text-[#8ebb14] text-3xl shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="font-semibold text-[#244a70] text-lg">La formation complète</span>
</div>
<div className="flex items-center gap-4 bg-gray-50 border border-gray-100 p-5 rounded-xl">
<iconify-icon className="text-[#8ebb14] text-3xl shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="font-semibold text-[#244a70] text-lg">Accès immédiat</span>
</div>
<div className="flex items-center gap-4 bg-gray-50 border border-gray-100 p-5 rounded-xl">
<iconify-icon className="text-[#8ebb14] text-3xl shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="font-semibold text-[#244a70] text-lg">Accès à vie</span>
</div>
<div className="flex items-center gap-4 bg-gray-50 border border-gray-100 p-5 rounded-xl">
<iconify-icon className="text-[#8ebb14] text-3xl shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="font-semibold text-[#244a70] text-lg">Certificat de formation</span>
</div>
<div className="flex items-center gap-4 bg-[#f0f9ff] border border-[#305F8E]/20 p-5 rounded-xl md:col-span-2 shadow-sm">
<iconify-icon className="text-[#305F8E] text-3xl shrink-0" icon="solar:star-fall-bold-duotone"></iconify-icon>
<span className="font-bold text-[#305F8E] text-lg">Ebook bonus offert</span>
</div>
</div>
</div>
</div>
</section>
<section className="py-16 md:py-24 bg-white border-b border-gray-100" id="reviews">
<div className="w-full">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
<span className="text-[#305F8E] font-medium text-xs uppercase tracking-widest mb-3 block">
            Avis Élèves
          </span>
<h2 className="font-bebas text-5xl md:text-6xl text-[#305F8E] tracking-tight">
            Des milliers de personnes ont déjà suivi les formations Aroma Prêts Partez
          </h2>
</div>
<div className="relative w-full overflow-hidden mask-linear">
<div className="flex gap-6 w-max animate-marquee px-4" id="marquee-track" style={{animationDuration: '80s'}}>
</div>
</div>
</div>
</section>
<section className="py-24 bg-gray-50 border-b border-gray-100" id="pour-qui">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="font-bebas text-5xl md:text-6xl text-[#305F8E] mb-12 tracking-tight">
          Cette formation est faite pour vous si :
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
<div className="flex items-center gap-4 p-5 rounded-xl bg-white border border-gray-100 shadow-sm">
<iconify-icon className="text-[#8ebb14] text-2xl shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-gray-700 text-lg">vous aimez les approches naturelles</span>
</div>
<div className="flex items-center gap-4 p-5 rounded-xl bg-white border border-gray-100 shadow-sm">
<iconify-icon className="text-[#8ebb14] text-2xl shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-gray-700 text-lg">vous vous intéressez aux pierres</span>
</div>
<div className="flex items-center gap-4 p-5 rounded-xl bg-white border border-gray-100 shadow-sm">
<iconify-icon className="text-[#8ebb14] text-2xl shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-gray-700 text-lg">vous utilisez déjà des huiles essentielles</span>
</div>
<div className="flex items-center gap-4 p-5 rounded-xl bg-white border border-gray-100 shadow-sm">
<iconify-icon className="text-[#8ebb14] text-2xl shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-gray-700 text-lg">vous souhaitez accompagner votre bien-être</span>
</div>
<div className="flex items-center gap-4 p-5 rounded-xl bg-white border border-gray-100 md:col-span-2 shadow-md">
<iconify-icon className="text-[#8ebb14] text-2xl shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-gray-700 text-lg font-medium">vous souhaitez approfondir vos connaissances</span>
</div>
</div>
</div>
</section>
<section className="py-24 md:py-32 bg-white" id="offre">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="font-bebas text-6xl text-[#305F8E] mb-6 tracking-tight">
            Accès immédiat à la formation complète
          </h2>
</div>
<div className="relative rounded-2xl p-8 md:p-12 border border-[#305F8E]/20 bg-gray-50 shadow-2xl shadow-[#305F8E]/10 overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#D4FF33]/20 rounded-bl-full -mr-8 -mt-8 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
<div>
<h3 className="text-3xl font-semibold mb-4 text-[#244a70] tracking-tight">
                        Offre spéciale
                    </h3>
<div className="flex flex-col gap-1 mb-8">
<div className="text-gray-500 font-medium text-lg">Prix normal : <span className="line-through text-red-600 font-bold">149 €</span></div>
<div className="text-2xl text-[#244a70] font-bold flex items-baseline gap-2">Aujourd'hui : <span className="font-bebas text-6xl text-[#305F8E] tracking-tight">57 €</span></div>
</div>
<p className="text-gray-600 mb-8">
                        L'approche complète de Noémie (Aroma Prêts Partez) couvrant la lithothérapie et l'aromathérapie pour les enfants (Partie 1) et les adultes (Partie 2).
                    </p>
<p className="text-center text-sm font-medium text-red-500 mt-3 bg-red-50 py-2 rounded-lg border border-red-100">
                        Cette promotion peut se terminer à tout moment.
                    </p>
</div>
<div>
<h4 className="font-semibold text-[#305F8E] mb-4 uppercase text-sm tracking-widest">Inclus aujourd'hui :</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-gray-700">
<iconify-icon className="text-[#8ebb14] text-xl shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span><strong className="text-[#244a70]">Accès Immédiat :</strong> Commencez votre formation à l'instant même.</span>
</li>
<li className="flex items-start gap-3 text-gray-700">
<iconify-icon className="text-[#8ebb14] text-xl shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span><strong className="text-[#244a70]">Accès à Vie :</strong> Consultez les 10 modules sans limite de temps, à votre rythme.</span>
</li>
<li className="flex items-start gap-3 text-gray-700">
<iconify-icon className="text-[#8ebb14] text-xl shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span><strong className="text-[#244a70]">Ebook Bonus Offert :</strong> "Fabriquer ses roll-ons aux huiles essentielles" (guide pratique).</span>
</li>
<li className="flex items-start gap-3 text-gray-700">
<iconify-icon className="text-[#8ebb14] text-xl shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span><strong className="text-[#244a70]">Certificat :</strong> Un certificat de formation délivré à la fin de votre parcours.</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>
<section className="py-16 bg-white text-center border-b border-gray-100">
<div className="max-w-3xl mx-auto px-4">
<h2 className="font-bebas text-4xl md:text-5xl text-[#305F8E] mb-4 tracking-tight">Rejoignez la formation dès maintenant</h2>
<p className="text-gray-600 mb-8 text-lg font-light">Cliquez sur le bouton ci-dessous pour accéder immédiatement à la formation.</p>
<a className="pulse-btn inline-block px-12 py-5 bg-[#D4FF33] text-[#305F8E] text-xl font-bold rounded-lg hover:bg-[#ccee22] transition-all shadow-xl shadow-lime-400/30 uppercase tracking-wide" href="#offre">
            Je profite de l'offre
         </a>
</div>
</section>
<section className="py-24 md:py-32 bg-gray-50 border-b border-gray-100" id="guarantee">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<span className="text-[#305F8E] font-medium text-xs uppercase tracking-widest mb-3 block">
              Vos Questions Fréquentes
            </span>
<h2 className="font-bebas text-6xl text-[#305F8E] mb-6 tracking-tight">
              F.A.Q
            </h2>
<div className="space-y-6">
<div className="border-b border-gray-200 pb-4">
<h4 className="font-semibold text-[#244a70] mb-2">Est-ce accessible aux débutants ?</h4>
<p className="text-gray-500 font-light">Oui, la formation a été conçue pour être claire, structurée et accessible à tous, même si vous n'y connaissez rien au départ.</p>
</div>
<div className="border-b border-gray-200 pb-4">
<h4 className="font-semibold text-[#244a70] mb-2">Combien de temps ai-je accès à la formation ?</h4>
<p className="text-gray-500 font-light">L'accès est totalement illimité dans le temps. Vous avancez à votre propre rythme et pouvez y revenir quand vous le souhaitez.</p>
</div>
<div className="border-b border-gray-200 pb-4">
<h4 className="font-semibold text-[#244a70] mb-2">Y a-t-il un certificat ?</h4>
<p className="text-gray-500 font-light">Oui, un certificat nominatif vous est délivré à la fin de la formation pour valider vos nouvelles connaissances.</p>
</div>
<div className="border-b border-gray-200 pb-4">
<h4 className="font-semibold text-[#244a70] mb-2">Est-ce un abonnement ?</h4>
<p className="text-gray-500 font-light">NON vous ne paierez uniquement que ce tarif de 57€ une seule fois. Il n'y a aucun frais caché ou abonnement mensuel.</p>
</div>
</div>
<div className="mt-10 p-6 bg-white rounded-xl border border-[#305F8E]/20 flex gap-4 items-start shadow-sm">
<iconify-icon className="text-[#305F8E] text-4xl shrink-0" icon="solar:shield-check-bold"></iconify-icon>
<div>
<h4 className="font-bold text-[#244a70] text-lg">Formation Certifiante &amp; Sécurisée</h4>
<p className="text-sm text-gray-600 mt-1">Conçue par une spécialiste avec plus de 20 ans d'expérience en pharmacie.</p>
</div>
</div>
</div>
<div className="bg-[#305F8E] p-8 md:p-12 rounded-xl border border-[#305F8E] shadow-2xl text-white flex flex-col justify-center text-center relative overflow-hidden">
<div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] animate-[spin_60s_linear_infinite]"></div>
<span className="relative z-10 inline-block mx-auto px-3 py-1 bg-[#D4FF33] text-[#305F8E] text-xs font-bold rounded-full uppercase mb-6 animate-pulse">Offre Limitée</span>
<h3 className="relative z-10 font-bebas text-5xl md:text-6xl mb-4">
                Rejoignez la formation
             </h3>
<p className="relative z-10 text-blue-100 text-lg mb-8 font-light">
                Les approches naturelles attirent de plus en plus de personnes. Apprenez dès maintenant comment associer pierres et huiles essentielles simplement et efficacement.
             </p>
<a className="relative z-10 w-full py-5 bg-[#D4FF33] text-[#305F8E] font-bold rounded-lg hover:bg-[#ccee22] transition-transform hover:scale-[1.02] shadow-xl shadow-black/20 text-xl uppercase tracking-wide" href="#offre">
                Je rejoins la formation
             </a>
<p className="relative z-10 mt-4 text-xs text-blue-200/60">
                Paiement Sécurisé en une seule fois
             </p>
</div>
</div>
</div>
</section>
<section className="py-24 bg-[#305F8E] text-center text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
<div className="max-w-4xl mx-auto px-4 relative z-10">
<p className="text-2xl font-light text-blue-100 mb-6">Les approches naturelles attirent de plus en plus de personnes.</p>
<h2 className="font-bebas text-5xl md:text-6xl mb-10 leading-tight tracking-wide">
            Apprenez dès maintenant comment associer pierres et huiles essentielles simplement et efficacement.
          </h2>
<a className="pulse-btn inline-block px-12 py-5 bg-[#D4FF33] text-[#305F8E] text-xl font-bold rounded-lg hover:bg-[#ccee22] transition-all shadow-xl shadow-black/20 uppercase tracking-wide" href="#offre">
             Je rejoins la formation
          </a>
</div>
</section>
<footer className="bg-white border-t border-gray-100 text-gray-600">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="col-span-1">
<a className="block mb-6 transition-transform hover:scale-105 duration-300" href="#">
<img alt="Logo Aroma Prêts Partez" className="h-6 md:h-8 w-auto object-contain" src="https://www.aromapretspartez.fr/cdn/shop/files/LOGO_9a6e8d31-569f-4a43-b9dc-5a50d645210c.png?v=1703169639&amp;width=480"/>
</a>
<p className="max-w-sm mb-6 text-base font-light">
              Des formations créées par Aroma Prêts Partez pour vous accompagner dans votre démarche de santé naturelle et de bien-être au quotidien.
            </p>
</div>
<div>
<h4 className="text-[#305F8E] uppercase tracking-widest text-lg font-semibold mb-6">Informations</h4>
<ul className="space-y-3 text-base font-light">
<li><a className="hover:text-[#305F8E] transition-colors duration-300" href="https://www.aromapretspartez.fr/policies/privacy-policy">Politique de confidentialité</a></li>
<li><a className="hover:text-[#305F8E] transition-colors duration-300" href="https://www.aromapretspartez.fr/policies/terms-of-sale">Conditions Générales de vente</a></li>
<li><a className="hover:text-[#305F8E] transition-colors duration-300" href="https://www.aromapretspartez.fr/policies/legal-notice">Mentions légales</a></li>
<li><a className="hover:text-[#305F8E] transition-colors duration-300" href="https://www.aromapretspartez.fr/policies/refund-policy">Politique de remboursement</a></li>
<li><a className="hover:text-[#305F8E] transition-colors duration-300" href="https://www.aromapretspartez.fr/policies/terms-of-service">Conditions d'utilisation</a></li>
<li><a className="hover:text-[#305F8E] transition-colors duration-300" href="https://www.aromapretspartez.fr/pages/faq">FAQ</a></li>
<li><a className="hover:text-[#305F8E] transition-colors duration-300" href="https://www.aromapretspartez.fr/pages/partenaires">Partenaires</a></li>
</ul>
</div>
<div>
<h4 className="text-[#305F8E] uppercase tracking-widest text-lg font-semibold mb-6">Certification</h4>
<div className="p-5 bg-gray-50 rounded-xl border border-gray-100 inline-block shadow-sm">
<p className="font-bold text-[#244a70] text-base mb-1">Organisme certifié QUALIOPI</p>
<p className="text-sm text-gray-500 mb-3">NDA 93840489484</p>
<a className="text-sm font-medium text-[#305F8E] hover:text-[#8ebb14] transition-colors inline-flex items-center gap-1.5" href="https://drive.google.com/file/d/1Kpix6Sg1GHaJ_Hu-pZDsh_3-vyQF4UBG/view?usp=sharing" target="_blank">
<iconify-icon className="text-[#8ebb14] text-lg" icon="solar:document-bold"></iconify-icon>
                    Consulter le certificat
                </a>
</div>
</div>
</div>
<div className="border-t border-gray-100 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-gray-400">
            © 2026 Aroma Prêts Partez. Tous droits réservés.
          </p>
</div>
</div>
</footer>


    </>
  );
}
