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
      const totalSlides = 3; // Number of cards

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

      const services = [
          { text: "Immobilienverkauf" },
          { text: "Immobilienkauf" },
          { text: "Immobilienmieten" }
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
          Rialto Estate
        </div>

<a className="bg-[#17191F] text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:scale-105 transition-transform active:scale-95" href="#contact">
          Kontakt
          <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
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
            Immobilie finden
          </a>
<a className="text-4xl md:text-6xl font-medium tracking-tighter hover:text-gray-500 transition-colors" href="#">
            Immobilie verkaufen
          </a>
<a className="text-4xl md:text-6xl font-medium tracking-tighter hover:text-gray-500 transition-colors" href="#">
            Wertermittlung
          </a>
<a className="text-4xl md:text-6xl font-medium tracking-tighter hover:text-gray-500 transition-colors" href="#">
            Über uns
          </a>
<a className="text-4xl md:text-6xl font-medium tracking-tighter hover:text-gray-500 transition-colors" href="#">
            Kontakt
          </a>
</div>
</div>
</div>

<header className="relative w-full h-screen min-h-[700px] flex flex-col justify-center items-center overflow-hidden bg-[#F6F7FA]">

<div className="absolute inset-0 top-0 left-0 right-0 bottom-0 z-0">
<img alt="Luxury Architecture" className="opacity-90 w-full h-full object-cover scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/558ad541-2b90-4d1b-9611-223b5941ca51_3840w.png"/>
<div className="bg-gradient-to-b from-transparent via-transparent to-[#F6F7FA] absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="relative z-10 flex flex-col items-center text-[#17191F] w-full max-w-[90vw] pointer-events-none select-none mix-blend-difference text-white">
<h1 className="flex flex-col items-center leading-[0.8] tracking-[-0.04em]">
<span className="text-[17vw] xl:text-[280px] reveal-element font-normal visible">
            Rialto
          </span>
<span className="text-[7vw] xl:text-[110px] self-end -mt-[1vw] xl:-mt-4 reveal-element mr-[10%] visible" style={{transitionDelay: '100ms'}}>
            Estate
          </span>
</h1>
</div>
</header>

<section className="-mt-12 md:-mt-24 md:px-12 xl:px-24 z-20 pr-6 pb-24 pl-6 relative">
<div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-[1400px] mr-auto ml-auto">

<div className="reveal-element flex flex-col justify-center gap-1 md:border-r border-black/10 py-8 md:py-0 md:pr-12 md:pl-0 pl-4 border-l md:border-l-0 md:border-l-none visible">
<div className="text-5xl md:text-[56px] font-normal tracking-tight text-[#17191F]">
            300+
          </div>
<div className="text-lg md:text-[20px] text-gray-500 font-normal leading-tight">
            Immobilien im Bestand
          </div>
</div>

<div className="reveal-element flex flex-col justify-center gap-1 md:border-r border-black/10 py-8 md:py-0 md:px-12 pl-4 border-l md:border-l-0 visible reveal-init">
<div className="text-5xl md:text-[56px] font-normal tracking-tight text-[#17191F]">
            12+
          </div>
<div className="text-lg md:text-[20px] text-gray-500 font-normal leading-tight">
            Jahre Erfahrung
          </div>
</div>

<div className="reveal-element flex flex-col justify-center gap-1 py-8 md:py-0 md:pl-12 pl-4 border-l md:border-l-0 border-black/10 visible reveal-init">
<div className="text-5xl md:text-[56px] font-normal tracking-tight text-[#17191F]">
            24/7
          </div>
<div className="text-lg md:text-[20px] text-gray-500 font-normal leading-tight">
            Für Sie &amp; Ihre Ziele ansprechbar
          </div>
</div>
</div>
</section>

<section className="md:px-12 xl:px-24 max-w-[1400px] mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="mb-16 reveal-element reveal-init">
<h2 className="md:text-[48px] leading-[1.1] text-5xl font-normal tracking-[-0.04em]">
          Ihre Vorteile
          <span className="text-[#A1A19F]">mit Rialto</span>
</h2>
<p className="md:text-xl leading-relaxed text-lg font-light text-gray-600 max-w-2xl mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-x-6 gap-y-6">

<div className="group relative aspect-[3/4] rounded-[24px] overflow-hidden cursor-pointer reveal-element reveal-init">
<img className="w-full h-full object-cover hover-card-bg" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>
<div className="flex flex-col pt-6 pr-6 pb-6 pl-6 absolute right-0 bottom-0 left-0 justify-end">
<div className="glass-panel self-start px-5 py-2.5 rounded-full mb-3 backdrop-blur-md bg-white/90">
<span className="text-lg font-medium text-black">Augenhöhe</span>
</div>
<div className="h-0 overflow-hidden group-hover:h-auto group-active:h-auto transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 group-active:opacity-100">
<p className="leading-relaxed text-sm font-medium text-white pt-2 drop-shadow-md">
                Wir begegnen Ihnen stets auf Augenhöhe. Partnerschaftlich, fair
                und transparent in jedem Schritt.
              </p>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-[24px] overflow-hidden cursor-pointer lg:translate-y-16 reveal-element reveal-init">
<img className="w-full h-full object-cover hover-card-bg" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
<div className="glass-panel self-start px-5 py-2.5 rounded-full mb-3 backdrop-blur-md bg-white/90">
<span className="text-lg font-medium text-black">Regionalität</span>
</div>
<div className="h-0 overflow-hidden group-hover:h-auto group-active:h-auto transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 group-active:opacity-100">
<p className="leading-relaxed text-sm font-medium text-white pt-2 drop-shadow-md">
                Wir kennen den Markt und die Region wie unsere Westentasche.
                Tief verwurzelt vor Ort.
              </p>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-[24px] overflow-hidden cursor-pointer reveal-element reveal-init">
<img className="w-full h-full object-cover hover-card-bg" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
<div className="glass-panel self-start px-5 py-2.5 rounded-full mb-3 backdrop-blur-md bg-white/90">
<span className="text-lg font-medium text-black">Vertrauen</span>
</div>
<div className="h-0 overflow-hidden group-hover:h-auto group-active:h-auto transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 group-active:opacity-100">
<p className="text-white text-sm leading-relaxed pt-2 font-medium drop-shadow-md">
                Vertrauen ist die Basis unseres Erfolgs. Wir handeln diskret,
                zuverlässig und integer.
              </p>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-[24px] overflow-hidden cursor-pointer lg:translate-y-16 reveal-element reveal-init">
<img className="w-full h-full object-cover hover-card-bg" src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
<div className="glass-panel self-start px-5 py-2.5 rounded-full mb-3 backdrop-blur-md bg-white/90">
<span className="text-lg font-medium text-black">Expertise</span>
</div>
<div className="h-0 overflow-hidden group-hover:h-auto group-active:h-auto transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 group-active:opacity-100">
<p className="text-white text-sm leading-relaxed pt-2 font-medium drop-shadow-md">
                Jahrelange Erfahrung und fundiertes Fachwissen garantieren Ihnen
                den besten Service.
              </p>
</div>
</div>
</div>
</div>

<div className="mt-24 lg:mt-32 flex flex-col sm:flex-row gap-4 items-center justify-start reveal-element reveal-init">
<a className="bg-[#17191F] text-white px-8 py-4 rounded-full font-medium text-lg hover:scale-105 transition-transform duration-300 w-full sm:w-auto text-center shadow-lg shadow-black/10" href="#">
          Beratung vereinbaren
        </a>
<a className="bg-transparent border border-gray-300 text-[#17191F] px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center gap-3 hover:bg-white hover:border-[#17191F] transition-all duration-300 w-full sm:w-auto group" href="#">
          Unser Prozess
          <svg className="lucide lucide-arrow-right w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</section>

<section className="py-24 bg-[#F6F7FA] overflow-hidden select-none relative" id="testimonials">
<div className="md:px-12 xl:px-24 max-w-[1400px] mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 reveal-element">
<h2 className="md:text-[48px] leading-tight text-4xl font-normal text-[#17191F] tracking-[-0.04em]">
            Warum wir der richtige
            <br/>
<span className="text-[#A1A19F]">Partner für Sie sind:</span>
</h2>
<div className="flex gap-4 gap-x-4 gap-y-4 items-center">
<button className="w-14 h-14 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-[#17191F] hover:text-white hover:border-[#17191F] transition-all duration-300 shadow-sm" id="prevBtn">
<svg className="lucide lucide-arrow-left w-6 h-6" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="w-14 h-14 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-[#17191F] hover:text-white hover:border-[#17191F] transition-all duration-300 shadow-sm" id="nextBtn">
<svg className="lucide lucide-arrow-right w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="overflow-hidden">
<div className="flex gap-8 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] gap-x-8 gap-y-8" id="slider-track">

<div className="min-w-full md:min-w-[527px] flex flex-col group hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-shadow bg-white h-[345px] border-gray-200 border rounded-[24px] pt-8 pr-8 pb-8 pl-8 relative shadow-[0_4px_20px_rgba(0,0,0,0.02)] justify-between">
<p className="text-[20px] leading-[1.3] text-[#17191F] tracking-[-0.01em] max-w-sm">
                “Wir fühlten uns von Anfang an sehr gut aufgehoben. Alles hat
                für uns gepasst. Die Beratung und natürlich der erzielte
                Verkaufspreis.”
              </p>
<div className="absolute bottom-[26px] right-[18px] w-[200px] h-[120px] md:w-[280px] md:h-[150px]">
<img className="w-full h-full object-cover rounded-xl shadow-md" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=400"/>
<div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur border border-white/50 rounded-full pl-2 pr-5 py-2 flex items-center gap-3 shadow-lg">
<img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=100"/>
<div className="flex flex-col">
<span className="text-black text-sm font-medium">
                      Katharina P.
                    </span>
<span className="text-gray-400 text-xs">Juni 2025</span>
</div>
</div>
</div>
</div>

<div className="min-w-full md:min-w-[527px] flex flex-col group hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-shadow bg-white h-[345px] border-gray-200 border rounded-[24px] pt-8 pr-8 pb-8 pl-8 relative shadow-[0_4px_20px_rgba(0,0,0,0.02)] justify-between">
<p className="text-[20px] leading-[1.3] text-[#17191F] tracking-[-0.01em] max-w-sm">
                “Professionell, schnell und absolut transparent. Ein Maklerbüro,
                das hält was es verspricht. Jederzeit gerne wieder.”
              </p>
<div className="absolute bottom-[26px] right-[18px] w-[200px] h-[120px] md:w-[280px] md:h-[150px]">
<img className="w-full h-full object-cover rounded-xl shadow-md" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=400"/>
<div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur border border-white/50 rounded-full pl-2 pr-5 py-2 flex items-center gap-3 shadow-lg">
<img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=100"/>
<div className="flex flex-col">
<span className="text-black text-sm font-medium">
                      Thomas K.
                    </span>
<span className="text-gray-400 text-xs">Mai 2025</span>
</div>
</div>
</div>
</div>

<div className="min-w-full md:min-w-[527px] h-[345px] bg-white border border-gray-200 rounded-[24px] relative shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-8 flex flex-col justify-between group hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-shadow">
<p className="text-[20px] leading-[1.3] tracking-[-0.01em] text-[#17191F] max-w-sm">
                “Hervorragende Marktkenntnis und eine sehr persönliche
                Betreuung. Der Verkauf unserer Villa verlief reibungslos.”
              </p>
<div className="absolute bottom-[26px] right-[18px] w-[200px] h-[120px] md:w-[280px] md:h-[150px]">
<img className="w-full h-full object-cover rounded-xl shadow-md" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=400"/>
<div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur border border-white/50 rounded-full pl-2 pr-5 py-2 flex items-center gap-3 shadow-lg">
<img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&amp;w=100"/>
<div className="flex flex-col">
<span className="text-black text-sm font-medium">
                      Michael B.
                    </span>
<span className="text-gray-400 text-xs">April 2025</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-4 md:px-12 xl:px-24 mb-32">
<div className="relative h-[80vh] min-h-[600px] rounded-[40px] overflow-hidden shadow-2xl reveal-element bg-gray-900">

<div className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-100" id="service-bg-1">
<img className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-0" id="service-bg-2">
<img className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-0" id="service-bg-3">
<img className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

<div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">

<div className="relative h-[120px] md:h-[150px] w-full flex justify-center items-center overflow-hidden">
<h2 className="text-[8vw] md:text-[6rem] font-normal leading-none tracking-tighter mix-blend-overlay" id="service-text">Immobilienverkauf</h2>
</div>

<div className="absolute bottom-16 w-[240px] h-1 bg-white/20 rounded-full overflow-hidden">
<div className="h-full bg-white w-0 rounded-full" id="progress-bar" style={{transition: 'width 10000ms linear', width: '100%'}}></div>
</div>
</div>
</div>
</section>

<section className="py-12 px-6 md:px-12 xl:px-24 max-w-[1400px] mx-auto mb-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
<div className="reveal-element reveal-init">
<h2 className="text-4xl md:text-[48px] font-normal tracking-[-0.04em] leading-[1.1]">
            Fragen, die nicht nur Sie sich stellen
          </h2>
</div>
<div className="space-y-4 reveal-element reveal-init">

<div className="accordion-item bg-white rounded-[24px] border border-transparent transition-all duration-300">
<button className="accordion-header w-full flex justify-between items-start text-left p-8 gap-4">
<span className="text-xl font-medium tracking-tight">
                Werde ich hier komplett verhohnepiepelt?
              </span>
<div className="bg-[#F6F7FA] p-3 rounded-full shrink-0 accordion-icon">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</button>
<div className="accordion-content px-8">
<div className="pb-8 text-gray-600 text-lg leading-relaxed">
                Natürlich nicht. Wir legen größten Wert auf Transparenz und
                Fairness. Jeder Schritt wird mit Ihnen abgestimmt.
              </div>
</div>
</div>

<div className="accordion-item bg-white rounded-[24px] border border-transparent shadow-[0_8px_30px_rgba(0,0,0,0.04)] active">
<button className="accordion-header w-full flex justify-between items-start text-left p-8 gap-4">
<span className="text-xl font-medium tracking-tight">
                Kann ich mehrere Makler gleichzeitig beauftragen?
              </span>
<div className="bg-[#17191F] text-white p-3 rounded-full shrink-0 accordion-icon">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</button>
<div className="accordion-content px-8" style={{maxHeight: '200px', opacity: '1'}}>
<div className="pb-8 text-gray-600 text-lg leading-relaxed">
                Ja, natürlich. Nach unserer Erfahrung zahlt sich diese
                Vorgehensweise aber für die Eigentümer nicht aus. Die Gründe
                erläutern wir ausführlich auf der Seite
                <a className="text-black underline" href="#">Makleralleinauftrag</a>
                .
              </div>
</div>
</div>

<div className="accordion-item bg-white rounded-[24px] border border-transparent transition-all duration-300">
<button className="accordion-header w-full flex justify-between items-start text-left p-8 gap-4">
<span className="text-xl font-medium tracking-tight">
                Wie lange dauert der Verkaufsprozess im Durchschnitt?
              </span>
<div className="bg-[#F6F7FA] p-3 rounded-full shrink-0 accordion-icon">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</button>
<div className="accordion-content px-8">
<div className="pb-8 text-gray-600 text-lg leading-relaxed">
                Der Durchschnitt liegt bei 3 bis 6 Monaten, hängt aber stark von
                Lage, Preis und Marktsituation ab.
              </div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-8 px-6 md:px-12 xl:px-24 rounded-t-[40px] shadow-[0_-10px_60px_rgba(0,0,0,0.03)] relative mt-24">
<div className="max-w-[1400px] mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
<div className="space-y-6">
<h4 className="text-lg font-medium text-gray-400">Immobilien</h4>
<ul className="space-y-4">
<li className="">
<a className="text-2xl font-normal hover:text-gray-500 transition-colors tracking-tight" href="#">
                  Immobilie finden
                </a>
</li>
<li className="">
<a className="text-2xl font-normal hover:text-gray-500 transition-colors tracking-tight" href="#">
                  Immobilie verkaufen
                </a>
</li>
<li className="">
<a className="text-2xl font-normal hover:text-gray-500 transition-colors tracking-tight" href="#">
                  Finanzierung
                </a>
</li>
</ul>
</div>
<div className="space-y-6">
<h4 className="text-lg font-medium text-gray-400">About</h4>
<ul className="space-y-4">
<li>
<a className="text-2xl font-normal hover:text-gray-500 transition-colors tracking-tight" href="#">
                  Über uns
                </a>
</li>
<li>
<a className="text-2xl font-normal hover:text-gray-500 transition-colors tracking-tight" href="#">
                  Jobs
                </a>
</li>
<li>
<a className="text-2xl font-normal hover:text-gray-500 transition-colors tracking-tight" href="#">
                  Services
                </a>
</li>
</ul>
</div>
<div className="space-y-6">
<h4 className="text-lg font-medium text-gray-400">Service</h4>
<ul className="space-y-4">
<li>
<a className="text-2xl font-normal hover:text-gray-500 transition-colors tracking-tight" href="#">
                  Kontakt
                </a>
</li>
<li>
<a className="text-2xl font-normal hover:text-gray-500 transition-colors tracking-tight" href="#">
                  Wissenswertes
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
<h4 className="text-lg font-medium text-gray-400">Sie haben Fragen?</h4>
<button className="w-full bg-[#17191F] text-white py-4 rounded-xl hover:bg-gray-800 transition-colors font-medium text-left px-6 flex justify-between items-center group">
              Kontaktieren Sie uns
              <svg className="lucide lucide-arrow-right w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<div className="relative">
<input className="w-full bg-[#F6F7FA] py-4 pl-6 pr-14 rounded-xl outline-none focus:ring-1 focus:ring-black transition-all" placeholder="Ihre Mailadresse" type="email"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-black/50 hover:text-black">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
<div className="h-px w-full bg-gray-100 mb-8"></div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500 font-medium">
<p>© 2025 Rialto Estate</p>
<div className="flex gap-8">
<a className="hover:text-black decoration-1" href="#">Datenschutz</a>
<a className="hover:text-black decoration-1" href="#">Impressum</a>
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
          RIALTO
        </h1>
</div>
</footer>


    </>
  );
}
