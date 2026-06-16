import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Init Icons
      lucide.createIcons();

      // --- Navigation ---
      const menuBtn = document.getElementById('menu-btn');
      const closeMenuBtn = document.getElementById('close-menu-btn');
      const navOverlay = document.getElementById('nav-overlay');

      function toggleMenu() {
          const isOpen = navOverlay.classList.contains('open');
          if (isOpen) {
              navOverlay.classList.remove('open');
              document.body.style.overflow = '';
          } else {
              navOverlay.classList.add('open');
              document.body.style.overflow = 'hidden';
          }
      }

      menuBtn.addEventListener('click', toggleMenu);
      closeMenuBtn.addEventListener('click', toggleMenu);

      // --- Contact Modal Logic ---
      const contactModal = document.getElementById('contact-modal');
      
      function toggleContactModal() {
        const isOpen = contactModal.classList.contains('open');
        if (isOpen) {
          contactModal.classList.remove('open');
          document.body.style.overflow = '';
        } else {
          contactModal.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
      }

      // Close on backdrop click
      contactModal.addEventListener('click', (e) => {
        if(e.target === contactModal) {
          toggleContactModal();
        }
      });
      
      // Prevent form submit for demo
      document.getElementById('retreat-form').addEventListener('submit', (e) => {
          e.preventDefault();
          // Here you would handle the submission
          alert('Demande envoyée ! Nous vous recontacterons sous 24h.');
          toggleContactModal();
      });


      // --- Reveal Animation ---
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                  entry.target.classList.remove('reveal-init');
              }
          });
      }, { threshold: 0.1 });

      // Add initial hidden class via JS so they remain visible if JS is disabled (Design Mode)
      document.querySelectorAll('.reveal-element').forEach((el) => {
          el.classList.add('reveal-init');
          observer.observe(el);
      });

      // --- Rating Slider (One by One) ---
      const track = document.getElementById('slider-track');
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');
      let slideIndex = 0;
      const totalSlides = 4; // Updated to 4 slides

      function updateSlider() {
          const cardWidth = track.firstElementChild.offsetWidth; // width + gap
          const gap = 32; // from gap-8
          const moveAmount = (cardWidth + gap) * slideIndex;
          track.style.transform = `translateX(-${moveAmount}px)`;
      }

      nextBtn.addEventListener('click', () => {
          if (slideIndex < totalSlides - 1) {
              slideIndex++;
              updateSlider();
          }
      });

      prevBtn.addEventListener('click', () => {
          if (slideIndex > 0) {
              slideIndex--;
              updateSlider();
          }
      });

      // --- Services Dynamic Animation ---
      const serviceText = document.getElementById('service-text');
      const progressBar = document.getElementById('progress-bar');
      const bgs = [
          document.getElementById('service-bg-1'),
          document.getElementById('service-bg-2'),
          document.getElementById('service-bg-3')
      ];

      // Translated Services Array
      const services = [
          { text: "Pour équipes produit" },
          { text: "Pour équipes tech" },
          { text: "Pour équipes Go-to-Market" }
      ];

      let serviceIndex = 0;
      const duration = 10000; // 10 seconds

      function animateService() {
          // 1. Text Animation
          serviceText.classList.remove('anim-text-enter');
          serviceText.classList.add('anim-text-exit');

          setTimeout(() => {
              serviceText.textContent = services[serviceIndex].text;
              serviceText.classList.remove('anim-text-exit');
              serviceText.classList.add('anim-text-enter');
          }, 600); // match fadeOutLeft duration

          // 2. Image Crossfade
          bgs.forEach((bg, idx) => {
              bg.style.opacity = idx === serviceIndex ? '1' : '0';
          });

          // 3. Progress Bar Reset & Fill
          progressBar.style.transition = 'none';
          progressBar.style.width = '0%';

          // Force reflow
          void progressBar.offsetWidth;

          progressBar.style.transition = `width ${duration}ms linear`;
          progressBar.style.width = '100%';

          // Next index
          serviceIndex = (serviceIndex + 1) % services.length;
      }

      // Init First State
      serviceText.textContent = services[0].text;
      progressBar.style.transition = `width ${duration}ms linear`;
      progressBar.style.width = '100%';
      serviceIndex = 1; // set next

      // Loop
      setInterval(animateService, duration);


      // --- FAQ Accordion ---
      const accordions = document.querySelectorAll('.accordion-item');

      accordions.forEach(item => {
          const header = item.querySelector('.accordion-header');
          const content = item.querySelector('.accordion-content');
          const iconBg = item.querySelector('.accordion-icon');
          const icon = iconBg.querySelector('i');

          header.addEventListener('click', () => {
              const isActive = item.classList.contains('active');

              // Close all others
              accordions.forEach(otherItem => {
                  otherItem.classList.remove('active');
                  otherItem.querySelector('.accordion-content').style.maxHeight = 0;
                  otherItem.querySelector('.accordion-icon').classList.remove('bg-[#17191F]', 'text-white');
                  otherItem.querySelector('.accordion-icon').classList.add('bg-[#F6F7FA]', 'text-black');
                  otherItem.classList.remove('shadow-[0_8px_30px_rgba(0,0,0,0.04)]');
              });

              if (!isActive) {
                  item.classList.add('active');
                  item.classList.add('shadow-[0_8px_30px_rgba(0,0,0,0.04)]');
                  content.style.maxHeight = content.scrollHeight + "px";

                  // Style Icon active
                  iconBg.classList.remove('bg-[#F6F7FA]', 'text-black');
                  iconBg.classList.add('bg-[#17191F]', 'text-white');
              }
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
<div className="glass-panel flex gap-3 rounded-full pt-2 pr-2 pb-2 pl-2 shadow-[0_8px_30px_rgba(0,0,0,0.04)] items-center justify-between">

<button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors group" id="menu-btn">
<svg className="lucide lucide-menu w-5 h-5 text-black group-hover:scale-110 transition-transform" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>

<div className="px-4 font-medium tracking-tight text-lg hidden md:block">
          Deep Work Retreats
        </div>

<button className="bg-[#17191F] text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:scale-105 transition-transform active:scale-95" onclick="toggleContactModal()">
          Planifier un sprint d'équipe
          <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-[#F6F7FA] z-[60] flex flex-col opacity-0 invisible" id="nav-overlay">
<div className="md:top-8 md:right-8 absolute top-6 right-6">
<button className="flex hover:scale-105 transition-transform bg-white w-14 h-14 rounded-full shadow-lg items-center justify-center" id="close-menu-btn">
<svg className="lucide lucide-x w-6 h-6 text-black" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="flex-1 flex items-center justify-center">
<div className="flex flex-col items-center gap-8 md:gap-10" id="nav-links">
<a className="text-4xl md:text-6xl font-medium tracking-tighter hover:text-gray-500 transition-colors" href="#">
            Pour les équipes
          </a>
<a className="text-4xl md:text-6xl font-medium tracking-tighter hover:text-gray-500 transition-colors" href="#">
            Comment ça marche
          </a>
<a className="text-4xl md:text-6xl font-medium tracking-tighter hover:text-gray-500 transition-colors" href="#">
            Témoignages
          </a>
<a className="text-4xl md:text-6xl font-medium tracking-tighter hover:text-gray-500 transition-colors" href="#">
            FAQ
          </a>
<a className="text-4xl md:text-6xl font-medium tracking-tighter hover:text-gray-500 transition-colors" href="#">
            Contact
          </a>
</div>
</div>
</div>

<div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[70] flex items-center justify-center opacity-0 invisible p-4" id="contact-modal">
<div className="bg-white w-full max-w-lg rounded-[24px] shadow-2xl flex flex-col overflow-hidden relative" id="contact-modal-content">

<div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
<div>
<h3 className="text-xl font-medium tracking-tight text-[#17191F]">Démarrer votre sprint</h3>
<p className="text-sm text-gray-500 mt-1">Dites-nous en plus sur votre projet.</p>
</div>
<button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors" onclick="toggleContactModal()">
<svg className="lucide lucide-x text-gray-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="flex-1 overflow-y-auto p-8 space-y-6">
<form className="space-y-6" id="retreat-form">

<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Prénom</label>
<input className="custom-input" placeholder="Prénom" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Nom</label>
<input className="custom-input" placeholder="Nom" required="" type="text"/>
</div>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Email professionnel</label>
<input className="custom-input" placeholder="vous@societe.com" required="" type="email"/>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Rôle / Poste</label>
<div className="relative">
<select className="custom-input appearance-none cursor-pointer">
<option disabled="" selected="" value="">Sélectionnez votre rôle</option>
<option value="CEO">Fondateur / CEO</option>
<option value="Product">Head of Product / CPO</option>
<option value="Tech">CTO / VP Engineering</option>
<option value="Marketing">CMO / Head of Growth</option>
<option value="HR">HR / People</option>
<option value="Autre">Autre</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
<svg className="lucide lucide-chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Nombre de participants (approx.)</label>
<input className="custom-input" placeholder="Ex: 8" type="number"/>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Objectif principal</label>
<div className="relative">
<select className="custom-input appearance-none cursor-pointer">
<option disabled="" selected="" value="">Quel est le but de la retraite ?</option>
<option value="Launch">Lancer un nouveau produit / feature</option>
<option value="Finish">Boucler un projet (Rush final)</option>
<option value="GTM">Préparer un lancement GTM</option>
<option value="Roadmap">Clarifier la roadmap produit</option>
<option value="Strategy">Offsite stratégique (Vision 12m)</option>
<option value="Team">Alignement / Cohésion</option>
<option value="Other">Autre</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
<svg className="lucide lucide-chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Période souhaitée</label>
<input className="custom-input" placeholder="Ex: Juin 2025, flexible..." type="text"/>
</div>
</form>
</div>

<div className="p-6 border-t border-gray-100 bg-gray-50/50 flex flex-col gap-4 justify-between items-center">
<button className="w-full px-8 py-3 rounded-lg bg-[#17191F] text-white text-sm font-medium hover:scale-105 transition-transform shadow-lg shadow-black/10 flex items-center justify-center gap-2" form="retreat-form" type="submit">
               Envoyer la demande
               <svg className="lucide lucide-send" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
</button>
<p className="text-xs text-gray-500 text-center">
            Nous répondons généralement sous 24h ouvrées.
          </p>
</div>
</div>
</div>

<header className="relative w-full h-screen min-h-[700px] flex flex-col justify-center items-center overflow-hidden bg-[#F6F7FA]">

<div className="absolute inset-0 top-0 left-0 right-0 bottom-0 z-0">
<img alt="Lieu de retraite Deep Work" className="opacity-90 w-full h-full object-cover scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/558ad541-2b90-4d1b-9611-223b5941ca51_3840w.png"/>
<div className="bg-gradient-to-b from-transparent via-transparent to-[#F6F7FA] absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="relative z-10 flex flex-col items-center text-[#17191F] w-full max-w-[90vw] pointer-events-none select-none mix-blend-difference text-white">
<div className="mb-4 text-sm md:text-base font-medium uppercase tracking-widest text-white/90 reveal-element">
          Retraites Deep Work pour équipes produit, tech &amp; créa
        </div>
<h1 className="flex flex-col items-center leading-[0.85] tracking-[-0.04em] whitespace-nowrap">
<span className="text-[13vw] xl:text-[200px] reveal-element font-normal visible">
            Deep Work
          </span>
<span className="text-[13vw] xl:text-[200px] self-end xl:-mt-2 reveal-element mr-[5%] visible" style={{transitionDelay: '100ms'}}>
            Retraites
          </span>
</h1>
<p className="mt-8 text-lg md:text-2xl font-light text-white/90 tracking-wide text-center max-w-2xl reveal-element" style={{transitionDelay: '200ms'}}>
          3 à 15 jours hors du bureau pour boucler le rush, préparer le lancement, ou poser la stratégie des 12 prochains mois.
        </p>
<div className="mt-8 flex flex-col sm:flex-row gap-4 pointer-events-auto reveal-element" style={{transitionDelay: '300ms'}}>
<button className="bg-white text-black px-8 py-3 rounded-full text-sm font-medium hover:scale-105 transition-transform text-center" onclick="toggleContactModal()">
             Planifier un sprint d'équipe
           </button>
<a className="bg-transparent border border-white text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors text-center" href="#contact">
             Réserver un appel découverte
           </a>
</div>
</div>
</header>

<section className="-mt-12 md:-mt-24 md:px-12 xl:px-24 z-20 pr-6 pb-24 pl-6 relative">
<div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-[1400px] mr-auto ml-auto bg-white/50 backdrop-blur-sm rounded-[32px] md:bg-transparent md:backdrop-filter-none">

<div className="reveal-element flex flex-col justify-start gap-2 md:border-r border-black/10 py-8 md:py-0 md:pr-12 md:pl-0 px-6 border-l md:border-l-0 md:border-l-none visible">
<div className="text-4xl md:text-[42px] font-normal tracking-tight text-[#17191F]">
            3 à 15 jours
          </div>
<div className="text-base text-gray-500 font-normal leading-relaxed">
            Des formats courts et intenses où votre équipe se concentre sur une seule mission : lancer ou boucler un projet clé, sans distractions.
          </div>
</div>

<div className="reveal-element flex flex-col justify-start gap-2 md:border-r border-black/10 py-8 md:py-0 md:px-12 px-6 border-l md:border-l-0 visible">
<div className="text-4xl md:text-[42px] font-normal tracking-tight text-[#17191F]">
            2× plus d'impact
          </div>
<div className="text-base text-gray-500 font-normal leading-relaxed">
            En coupant les réunions et notifications, les équipes abattent souvent une semaine de « vrai travail » en quelques jours de retraite.
          </div>
</div>

<div className="reveal-element flex flex-col justify-start gap-2 py-8 md:py-0 md:pl-12 px-6 border-l md:border-l-0 border-black/10 visible">
<div className="text-4xl md:text-[42px] font-normal tracking-tight text-[#17191F]">
            aucune logistique
          </div>
<div className="text-base text-gray-500 font-normal leading-relaxed">
            Lieu, chambres, Wi-Fi pro, repas — on gère tout. Vous arrivez, vous travaillez, vous repartez avec des résultats.
          </div>
</div>
</div>
</section>

<section className="md:px-12 xl:px-24 max-w-[1400px] mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="mb-16 reveal-element">
<h2 className="md:text-[48px] leading-[1.1] text-4xl font-normal tracking-[-0.04em]">
          Au bureau, les semaines décisives
          <span className="text-[#A1A19F]">se noient dans le bruit.</span>
</h2>
<p className="md:text-xl leading-relaxed text-lg font-light text-gray-600 max-w-3xl mt-8">
          Stand-ups, Slack, réunions de dernière minute : au bureau, votre équipe passe ses journées à jongler. En retraite, une seule mission, un même rythme, des décisions qui tiennent — et une équipe qui ne finit pas épuisée.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-x-6 gap-y-6">

<div className="group relative aspect-[3/4] rounded-[24px] overflow-hidden cursor-pointer reveal-element">
<img className="w-full h-full object-cover hover-card-bg" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>
<div className="flex flex-col pt-6 pr-6 pb-6 pl-6 absolute right-0 bottom-0 left-0 justify-end">
<div className="glass-panel self-start px-5 py-2.5 rounded-full mb-3 backdrop-blur-md bg-white/90">
<span className="text-lg font-medium text-black">Focus total</span>
</div>
<div className="h-0 overflow-hidden group-hover:h-auto group-active:h-auto transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 group-active:opacity-100">
<p className="leading-relaxed text-sm font-medium text-white pt-2 drop-shadow-md">
                Des blocs de travail protégés, pas d'appels imprévus, un agenda clair. L'équipe peut enfin rester sur un problème assez longtemps pour le résoudre.
              </p>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-[24px] overflow-hidden cursor-pointer lg:translate-y-16 reveal-element">
<img className="w-full h-full object-cover hover-card-bg" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
<div className="glass-panel self-start px-5 py-2.5 rounded-full mb-3 backdrop-blur-md bg-white/90">
<span className="text-lg font-medium text-black">Espace inspirant</span>
</div>
<div className="h-0 overflow-hidden group-hover:h-auto group-active:h-auto transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 group-active:opacity-100">
<p className="leading-relaxed text-sm font-medium text-white pt-2 drop-shadow-md">
                Espaces de vie lumineux, zones de travail dédiées, pièces pour s'isoler. Le cadre ressemble à une récompense, pas à une salle de réunion grise.
              </p>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-[24px] overflow-hidden cursor-pointer reveal-element">
<img className="w-full h-full object-cover hover-card-bg" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
<div className="glass-panel self-start px-5 py-2.5 rounded-full mb-3 backdrop-blur-md bg-white/90">
<span className="text-lg font-medium text-black">Alignement réel</span>
</div>
<div className="h-0 overflow-hidden group-hover:h-auto group-active:h-auto transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 group-active:opacity-100">
<p className="text-white text-sm leading-relaxed pt-2 font-medium drop-shadow-md">
                Le co-living force la clarté : les décisions se prennent en personne, pas perdues dans un fil Slack. Tout le monde repart avec la même histoire.
              </p>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-[24px] overflow-hidden cursor-pointer lg:translate-y-16 reveal-element">
<img className="w-full h-full object-cover hover-card-bg" src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
<div className="glass-panel self-start px-5 py-2.5 rounded-full mb-3 backdrop-blur-md bg-white/90">
<span className="text-lg font-medium text-black">Intensité durable</span>
</div>
<div className="h-0 overflow-hidden group-hover:h-auto group-active:h-auto transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 group-active:opacity-100">
<p className="text-white text-sm leading-relaxed pt-2 font-medium drop-shadow-md">
                Sprints le matin, décisions l'après-midi, respiration le soir. Un rythme conçu pour livrer sans cramer l'équipe — parce qu'un rush ne devrait pas coûter trois semaines de récupération.
              </p>
</div>
</div>
</div>
</div>

<div className="mt-24 lg:mt-32 flex flex-col items-start gap-8 reveal-element">
<div className="flex flex-col sm:flex-row gap-4 items-center justify-start w-full">
<button className="bg-[#17191F] text-white px-8 py-4 rounded-full font-medium text-lg hover:scale-105 transition-transform duration-300 w-full sm:w-auto text-center shadow-lg shadow-black/10" onclick="toggleContactModal()">
            Planifier un sprint d'équipe
          </button>
<a className="bg-transparent border border-gray-300 text-[#17191F] px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center gap-3 hover:bg-white hover:border-[#17191F] transition-all duration-300 w-full sm:w-auto group" href="#contact">
            Réserver un appel découverte
            <svg className="lucide lucide-arrow-right w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<p className="text-lg md:text-xl font-medium text-[#17191F] italic opacity-80 border-l-2 border-black/20 pl-4 py-1">
          « Transformez les temps morts en progrès : des lieux exceptionnels pour les équipes qui doivent démarrer, lancer ou finir. »
        </p>
</div>
</section>

<section className="py-24 bg-[#F6F7FA] overflow-hidden select-none relative" id="testimonials">
<div className="md:px-12 xl:px-24 max-w-[1400px] mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 reveal-element">
<h2 className="md:text-[48px] leading-tight text-4xl font-normal text-[#17191F] tracking-[-0.04em]">
            Pourquoi les équipes
            <span className="text-[#A1A19F]">reviennent</span>
<br/>
<span className="text-xl md:text-2xl text-gray-500 font-light block mt-4">Histoires d'équipes qui ont choisi de sortir du bureau pour accélérer.</span>
</h2>
<div className="flex gap-4 gap-x-4 gap-y-4 items-center">
<button className="w-14 h-14 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-[#17191F] hover:text-white hover:border-[#17191F] transition-all duration-300 shadow-sm" id="prevBtn">
<svg className="lucide lucide-arrow-left w-6 h-6" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="w-14 h-14 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-[#17191F] hover:text-white hover:border-[#17191F] transition-all duration-300 shadow-sm" id="nextBtn">
<svg className="lucide lucide-arrow-right w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="overflow-hidden">
<div className="flex gap-8 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] gap-x-8 gap-y-8" id="slider-track">

<div className="min-w-full md:min-w-[527px] flex flex-col group hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-shadow bg-white h-[345px] border-gray-200 border rounded-[24px] pt-8 pr-8 pb-8 pl-8 relative shadow-[0_4px_20px_rgba(0,0,0,0.02)] justify-between">
<p className="text-[20px] leading-[1.3] text-[#17191F] tracking-[-0.01em] max-w-sm">
                « En 3 jours, on a aligné la roadmap, verrouillé le plan de lancement et vidé des mois de "on verra plus tard". Être ensemble a rendu chaque conversation utile. »
              </p>
<div className="absolute bottom-[26px] right-[18px] w-[200px] h-[120px] md:w-[280px] md:h-[150px]">
<img className="w-full h-full object-cover rounded-xl shadow-md" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=400"/>
<div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur border border-white/50 rounded-full pl-2 pr-5 py-2 flex items-center gap-3 shadow-lg">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">AR</div>
<div className="flex flex-col">
<span className="text-black text-sm font-medium">
                      Amélie R.
                    </span>
<span className="text-gray-400 text-xs">CPO, Startup SaaS</span>
</div>
</div>
</div>
</div>

<div className="min-w-full md:min-w-[527px] flex flex-col group hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-shadow bg-white h-[345px] border-gray-200 border rounded-[24px] pt-8 pr-8 pb-8 pl-8 relative shadow-[0_4px_20px_rgba(0,0,0,0.02)] justify-between">
<p className="text-[20px] leading-[1.3] text-[#17191F] tracking-[-0.01em] max-w-sm">
                « On a écrit, designé et validé une campagne complète en une retraite. Pas de chaos d'agenda, pas d'idées à moitié finies. Juste du focus. »
              </p>
<div className="absolute bottom-[26px] right-[18px] w-[200px] h-[120px] md:w-[280px] md:h-[150px]">
<img className="w-full h-full object-cover rounded-xl shadow-md" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=400"/>
<div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur border border-white/50 rounded-full pl-2 pr-5 py-2 flex items-center gap-3 shadow-lg">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">KL</div>
<div className="flex flex-col">
<span className="text-black text-sm font-medium">
                      Karim L.
                    </span>
<span className="text-gray-400 text-xs">Head of Marketing</span>
</div>
</div>
</div>
</div>

<div className="min-w-full md:min-w-[527px] h-[345px] bg-white border border-gray-200 rounded-[24px] relative shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-8 flex flex-col justify-between group hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-shadow">
<p className="text-[20px] leading-[1.3] tracking-[-0.01em] text-[#17191F] max-w-sm">
                « On a utilisé la retraite pour remettre à plat la stratégie des 12 prochains mois. Moins de slides, plus de discussions honnêtes. »
              </p>
<div className="absolute bottom-[26px] right-[18px] w-[200px] h-[120px] md:w-[280px] md:h-[150px]">
<img className="w-full h-full object-cover rounded-xl shadow-md" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=400"/>
<div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur border border-white/50 rounded-full pl-2 pr-5 py-2 flex items-center gap-3 shadow-lg">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">SM</div>
<div className="flex flex-col">
<span className="text-black text-sm font-medium">
                      Sophie M.
                    </span>
<span className="text-gray-400 text-xs">COO, Scale-up B2B</span>
</div>
</div>
</div>
</div>

<div className="min-w-full md:min-w-[527px] h-[345px] bg-white border border-gray-200 rounded-[24px] relative shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-8 flex flex-col justify-between group hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-shadow">
<p className="text-[20px] leading-[1.3] tracking-[-0.01em] text-[#17191F] max-w-sm">
                « On avait 10 jours avant le lancement et un backlog qui débordait. En retraite, on a fait en 4 jours ce qu'on n'arrivait pas à boucler en 3 semaines au bureau — et l'équipe est revenue soudée, pas lessivée. »
              </p>
<div className="absolute bottom-[26px] right-[18px] w-[200px] h-[120px] md:w-[280px] md:h-[150px]">
<img className="w-full h-full object-cover rounded-xl shadow-md" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&amp;w=400"/>
<div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur border border-white/50 rounded-full pl-2 pr-5 py-2 flex items-center gap-3 shadow-lg">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">TD</div>
<div className="flex flex-col">
<span className="text-black text-sm font-medium">
                      Thomas D.
                    </span>
<span className="text-gray-400 text-xs">CTO, Startup B2B</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-4 md:px-12 xl:px-24 mb-32" id="how-it-works">
<div className="relative h-[80vh] min-h-[700px] rounded-[40px] overflow-hidden shadow-2xl reveal-element bg-gray-900">

<div className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-100" id="service-bg-1">
<img className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-0" id="service-bg-2">
<img className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-0" id="service-bg-3">
<img className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

<div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-6">

<div className="relative h-[120px] md:h-[150px] w-full flex justify-center items-center overflow-hidden mb-8">
<h2 className="text-[8vw] md:text-[6rem] font-normal leading-none tracking-tighter mix-blend-overlay whitespace-nowrap" id="service-text">Pour équipes produit</h2>
</div>

<div className="max-w-3xl space-y-6 text-base md:text-xl font-light text-white/90">
<p>
               Vous arrivez avec un objectif clair : boucler une feature avant la deadline, préparer un lancement GTM, ou aligner l'équipe sur la stratégie des 12 prochains mois. On s'occupe du reste.
             </p>
<p>
               Nous fournissons la maison, les espaces et la structure pour 3 à 15 jours. Matins pour le deep work, après-midis pour les décisions. Soirées pour les vraies conversations.
             </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-4xl text-left border-t border-white/20 pt-8">
<div>
<strong className="block text-white mb-2">Avant</strong>
<span className="text-white/70 text-sm">Un appel de 30 min pour cadrer l'objectif, la durée et le format. On vous propose un agenda type adapté à votre équipe.</span>
</div>
<div>
<strong className="block text-white mb-2">Pendant</strong>
<span className="text-white/70 text-sm">Un agenda clair, de la facilitation si besoin, et une expérience sans friction.</span>
</div>
<div>
<strong className="block text-white mb-2">Après</strong>
<span className="text-white/70 text-sm">Votre équipe repart avec des résultats concrets et un plan d'action simple.</span>
</div>
</div>

<div className="absolute bottom-0 w-full h-1 bg-white/10">
<div className="h-full bg-white w-0" id="progress-bar" style={{transition: 'width 10000ms linear', width: '100%'}}></div>
</div>
</div>
</div>
</section>

<section className="py-12 px-6 md:px-12 xl:px-24 max-w-[1400px] mx-auto mb-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
<div className="reveal-element">
<h2 className="text-4xl md:text-[48px] font-normal tracking-[-0.04em] leading-[1.1]">
            Questions fréquentes avant de réserver
          </h2>
</div>
<div className="space-y-4 reveal-element">

<div className="accordion-item bg-white rounded-[24px] border border-transparent transition-all duration-300">
<button className="accordion-header w-full flex justify-between items-start text-left p-8 gap-4">
<span className="text-xl font-medium tracking-tight">
                Quels projets fonctionnent le mieux en retraite ?
              </span>
<div className="bg-[#F6F7FA] p-3 rounded-full shrink-0 accordion-icon">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</button>
<div className="accordion-content px-8">
<div className="pb-8 text-gray-600 text-lg leading-relaxed">
                Tout ce qui mérite une attention totale : un lancement produit, une refonte de roadmap, une campagne à créer, un offsite stratégique ou un problème complexe qui ne rentre pas dans une semaine normale.
              </div>
</div>
</div>

<div className="accordion-item bg-white rounded-[24px] border border-transparent shadow-[0_8px_30px_rgba(0,0,0,0.04)] active">
<button className="accordion-header w-full flex justify-between items-start text-left p-8 gap-4">
<span className="text-xl font-medium tracking-tight">
                Quelle est la taille d'équipe idéale ?
              </span>
<div className="bg-[#17191F] text-white p-3 rounded-full shrink-0 accordion-icon">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</button>
<div className="accordion-content px-8" style={{maxHeight: '200px', opacity: '1'}}>
<div className="pb-8 text-gray-600 text-lg leading-relaxed">
                L'idéal se situe entre 6 et 20 personnes. Assez petit pour rester agile et rapide, assez grand pour avoir tous les décideurs réunis au même endroit.
              </div>
</div>
</div>

<div className="accordion-item bg-white rounded-[24px] border border-transparent transition-all duration-300">
<button className="accordion-header w-full flex justify-between items-start text-left p-8 gap-4">
<span className="text-xl font-medium tracking-tight">
                Quelle charge d'organisation pour nous ?
              </span>
<div className="bg-[#F6F7FA] p-3 rounded-full shrink-0 accordion-icon">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</button>
<div className="accordion-content px-8">
<div className="pb-8 text-gray-600 text-lg leading-relaxed">
                Très peu. Vous choisissez les dates, l'équipe et l'objectif. Nous gérons la logistique, le lieu et proposons un agenda type. Vous vous concentrez sur le contenu.
              </div>
</div>
</div>

<div className="accordion-item bg-white rounded-[24px] border border-transparent transition-all duration-300">
<button className="accordion-header w-full flex justify-between items-start text-left p-8 gap-4">
<span className="text-xl font-medium tracking-tight">
                Et si notre équipe est en télétravail ?
              </span>
<div className="bg-[#F6F7FA] p-3 rounded-full shrink-0 accordion-icon">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</button>
<div className="accordion-content px-8">
<div className="pb-8 text-gray-600 text-lg leading-relaxed">
                C'est idéal pour les équipes remote : vous comprimez des mois d'échanges éparpillés en quelques jours intenses, puis repartez en asynchrone avec un plan clair.
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 px-6 md:px-12 xl:px-24 max-w-[1400px] mx-auto">
<div className="bg-white border border-gray-100 rounded-[24px] p-8 md:p-12 reveal-element">
<h2 className="text-2xl font-medium mb-4">Coulisses : nos partenariats avec des lieux d'exception</h2>
<p className="text-gray-600 mb-6 max-w-3xl">
                Pour nos retraites, nous collaborons avec des propriétaires et agences immobilières disposant de biens haut de gamme inoccupés entre deux locataires ou acheteurs. Pendant ces périodes, la maison devient un espace productif pour les équipes.
            </p>
<ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-500">
<li className="flex gap-2">
<span className="text-black">•</span> Les propriétaires valorisent leur bien sur de courtes durées.
                </li>
<li className="flex gap-2">
<span className="text-black">•</span> Les agences offrent un service distinctif tout en restant focus sur la vente.
                </li>
<li className="flex gap-2">
<span className="text-black">•</span> Les équipes profitent de lieux uniques introuvables sur les plateformes classiques.
                </li>
</ul>
</div>
</section>

<footer className="bg-white pt-24 pb-8 px-6 md:px-12 xl:px-24 rounded-t-[40px] shadow-[0_-10px_60px_rgba(0,0,0,0.03)] relative mt-24" id="contact">
<div className="max-w-[1400px] mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
<div className="space-y-6">
<h4 className="text-lg font-medium text-gray-400">Pour les équipes</h4>
<ul className="space-y-4">
<li className="">
<a className="text-2xl font-normal hover:text-gray-500 transition-colors tracking-tight" href="#">
                  Retraites Deep Work
                </a>
</li>
<li className="">
<a className="text-2xl font-normal hover:text-gray-500 transition-colors tracking-tight" href="#">
                  Formats &amp; tarifs
                </a>
</li>
<li className="">
<a className="text-2xl font-normal hover:text-gray-500 transition-colors tracking-tight" href="#">
                  Cas d'usage
                </a>
</li>
<li className="">
<a className="text-2xl font-normal hover:text-gray-500 transition-colors tracking-tight" href="#">
                  Checklist retraite
                </a>
</li>
</ul>
</div>
<div className="space-y-6">
<h4 className="text-lg font-medium text-gray-400">Pour les leaders</h4>
<ul className="space-y-4">
<li>
<a className="text-2xl font-normal hover:text-gray-500 transition-colors tracking-tight" href="#">
                  Pour fondateurs &amp; CEO
                </a>
</li>
<li>
<a className="text-2xl font-normal hover:text-gray-500 transition-colors tracking-tight" href="#">
                  Pour leaders produit &amp; tech
                </a>
</li>
<li>
<a className="text-2xl font-normal hover:text-gray-500 transition-colors tracking-tight" href="#">
                  Pour leaders marketing
                </a>
</li>
<li>
<a className="text-2xl font-normal hover:text-gray-500 transition-colors tracking-tight" href="#">
                  FAQ
                </a>
</li>
</ul>
</div>
<div className="space-y-6">
<h4 className="text-lg font-medium text-gray-400">Ressources</h4>
<ul className="space-y-4">
<li>
<a className="text-2xl font-normal hover:text-gray-500 transition-colors tracking-tight" href="#">
                  Articles &amp; guides
                </a>
</li>
<li>
<a className="text-2xl font-normal hover:text-gray-500 transition-colors tracking-tight" href="#">
                  Playbook retraite
                </a>
</li>
<li>
<a className="text-2xl font-normal hover:text-gray-500 transition-colors tracking-tight" href="#">
                  Newsletter
                </a>
</li>
<li>
<a className="text-2xl font-normal hover:text-gray-500 transition-colors tracking-tight" href="#">
                  À propos
                </a>
</li>
</ul>
</div>
<div className="space-y-6">
<h4 className="text-lg font-medium text-gray-400">Prêt à planifier votre prochain sprint ?</h4>
<button className="w-full bg-[#17191F] text-white py-4 rounded-xl hover:bg-gray-800 transition-colors font-medium text-left px-6 flex justify-between items-center group" onclick="toggleContactModal()">
              Planifier un sprint d'équipe
              <svg className="lucide lucide-arrow-right w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<div className="relative">
<input className="w-full bg-[#F6F7FA] py-4 pl-6 pr-14 rounded-xl outline-none focus:ring-1 focus:ring-black transition-all" placeholder="Email pro" type="email"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-black/50 hover:text-black" onclick="toggleContactModal()">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
<div className="h-px w-full bg-gray-100 mb-8"></div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500 font-medium">
<p>© 2025 Deep Work Retreats</p>
<div className="flex gap-8">
<a className="hover:text-black decoration-1" href="#">Confidentialité</a>
<a className="hover:text-black decoration-1" href="#">Mentions légales</a>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 bg-[#F6F7FA] rounded-full flex items-center justify-center hover:bg-[#17191F] hover:text-white transition-all duration-300" href="#">
<svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="w-10 h-10 bg-[#F6F7FA] rounded-full flex items-center justify-center hover:bg-[#17191F] hover:text-white transition-all duration-300" href="#">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 bg-[#F6F7FA] rounded-full flex items-center justify-center hover:bg-[#17191F] hover:text-white transition-all duration-300" href="#">
<svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</div>

<div className="w-full flex justify-center mt-12 pb-4 opacity-[0.04] pointer-events-none select-none">
<h1 className="text-[18vw] font-bold leading-none tracking-tighter">
          DEEP WORK
        </h1>
</div>
</footer>


    </>
  );
}
