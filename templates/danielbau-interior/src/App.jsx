import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // --- SETUP ---
      gsap.registerPlugin(ScrollTrigger);

      // --- LENIS SCROLL ---
      const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: 'vertical',
          smooth: true,
      });
      function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      // --- TEXT SPLITTER UTILITY ---
      function splitTextToWords(element) {
          const text = element.innerText;
          const words = text.split(' ');
          element.innerHTML = '';
          words.forEach(word => {
              const wordWrap = document.createElement('span');
              wordWrap.classList.add('word-wrap');
              wordWrap.innerHTML = `<span class="word-inner">${word}&nbsp;</span>`;
              element.appendChild(wordWrap);
          });
      }

      // Apply split to all elements with class .split-animate
      document.querySelectorAll('.split-animate').forEach(el => {
          splitTextToWords(el);
      });

      // --- LOADER ---
      const loadTl = gsap.timeline({
          onComplete: () => {
              document.body.style.opacity = 1;
              initSite();
          }
      });

      loadTl.to('.loader-bar', { width: '100%', duration: 1.5, ease: 'power2.inOut' })
            .to('.loader-text', { y: -50, opacity: 0, duration: 0.5 })
            .to('.loader', { yPercent: -100, duration: 1, ease: 'power4.inOut' });

      function initSite() {
          // Hero Animations
          gsap.to('.hero-text span', {
              y: 0,
              stagger: 0.1,
              duration: 1.5,
              ease: 'power4.out'
          });
          gsap.to('.hero-fade', { opacity: 1, duration: 1, delay: 0.5 });

          // Hero Parallax
          gsap.to('.hero-img', {
              yPercent: 30,
              ease: 'none',
              scrollTrigger: {
                  trigger: '.hero-img',
                  start: 'top top',
                  end: 'bottom top',
                  scrub: true
              }
          });

          // --- TEXT REVEAL ON SCROLL ---
          const splitElements = document.querySelectorAll('.split-animate');
          splitElements.forEach(el => {
              const words = el.querySelectorAll('.word-inner');
              gsap.to(words, {
                  y: "0%",
                  duration: 1,
                  ease: "power3.out",
                  stagger: 0.02,
                  scrollTrigger: {
                      trigger: el,
                      start: "top 85%",
                      toggleActions: "play none none reverse"
                  }
              });
          });

          // --- CARD STACK ANIMATION ---
          const cards = gsap.utils.toArray('.card-item');

          cards.forEach((card, i) => {
              const nextCard = cards[i+1];
              if (nextCard) {
                  gsap.to(card.querySelector('.card-inner'), {
                      scale: 0.9,
                      opacity: 0.4,
                      ease: "none",
                      scrollTrigger: {
                          trigger: nextCard,
                          start: "top bottom",
                          end: "top 10vh",
                          scrub: true
                      }
                  });
              }
          });

          // Footer Parallax Effect
          gsap.from('.footer-sticky > div', {
              y: 100,
              opacity: 0.5,
              scale: 0.9,
              scrollTrigger: {
                  trigger: '.footer-sticky',
                  start: 'top bottom',
                  end: 'bottom bottom',
                  scrub: true
              }
          });
      }
    


      setTimeout(()=>{document.getElementById('lang-sidebar').classList.remove('translate-x-full')},2000);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-overlay"></div>

<div className="loader">
<div className="loader-text">DANIELBAU</div>
<div className="loader-bar"></div>
</div>

<nav className="fixed top-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference text-white">
<div className="display font-bold text-xl tracking-tighter">DANIELBAU</div>
<div className="hidden md:flex gap-10 text-xs uppercase tracking-widest">
<a className="hover:text-[var(--c-blue)] transition-colors" href="#">
          Leistungen
        </a>
<a className="hover:text-[var(--c-blue)] transition-colors" href="#">
          Über Uns
        </a>
<a className="hover:text-[var(--c-blue)] transition-colors" href="#">
          Kontakt
        </a>
</div>
<div className="md:hidden">MENU</div>
</nav>

<div className="wrapper">

<section className="h-screen relative flex items-center justify-center overflow-hidden">
<img alt="Hero" className="absolute inset-0 w-full h-full object-cover brightness-75 hero-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/482e7b6a-168c-4d0d-b35d-0e2ff4014577_3840w.webp"/>

<div className="relative z-10 text-center text-white mix-blend-difference">
<h1 className="display text-[12vw] leading-none hero-text overflow-hidden">
<span className="block translate-y-full">HANDWERK</span>
</h1>
<h1 className="display text-[12vw] leading-none hero-text overflow-hidden">
<span className="block translate-y-full">PRÄZISION</span>
</h1>

<p className="mt-8 text-sm uppercase tracking-[0.5em] opacity-0 hero-fade mix-blend-difference">
            Innenausbau &amp; Plattenbeläge
          </p>
</div>
</section>

<section className="py-32 px-6 md:px-20 grid md:grid-cols-2 gap-16 max-w-[1800px] mx-auto bg-[var(--c-bg)]">
<div>
<h2 className="display text-4xl md:text-5xl leading-tight split-animate">
            Qualität im
            <br/>
<span className="text-[var(--c-blue)]">Detail.</span>
</h2>
</div>
<div className="text-xl font-light leading-relaxed text-gray-700">
<p className="mb-8 split-animate">
            Willkommen bei Danielbau. Wir sind Ihr Partner für exklusive
            Plattenarbeiten, Wandpaneele und Komplettrenovierungen. Mit über
            5.000 zufriedenen Kunden in der Schweiz stehen wir für
            Zuverlässigkeit und höchste Ausführungsqualität.
          </p>
<div className="h-px w-full bg-black/10 my-8"></div>
<div className="flex gap-12 text-sm uppercase tracking-widest split-animate">
<div>Seit 2015</div>
<div>Schweiz / Zürich</div>
</div>
</div>
</section>

<section className="stack-section">
<div className="text-center mb-20 px-6">
<div className="text-xs uppercase tracking-widest mb-4 opacity-50">
            Expertise &amp; Handwerk
          </div>
<h2 className="display text-5xl md:text-7xl">UNSERE LEISTUNGEN</h2>
</div>
<div className="stack-container">

<div className="card-item" data-type="tiles">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-5xl display mb-2 text-accent-red">01</div>
<h3 className="text-3xl font-bold">PLATTENARBEITEN</h3>
<p className="text-sm mt-4 opacity-70 uppercase tracking-widest">
                    Wand &amp; Boden
                  </p>
</div>
<div className="text-gray-400 font-light">
                  Fachgerechte Verlegung von Keramik, Naturstein und Mosaik. Wir
                  schaffen langlebige, ästhetische Oberflächen für Bäder, Küchen
                  und Wohnräume.
                </div>
<button className="text-left uppercase tracking-widest text-xs border-b border-white/30 pb-2 w-max hover:text-white transition-colors">
                  View Project
                </button>
</div>
<div className="card-img-wrap">

<img alt="Project 1" className="card-img object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dccab47-16b0-4716-9e1a-b97f124e3031_1600w.webp"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-5xl display mb-2 text-accent-green">02</div>
<h3 className="text-3xl font-bold">WANDPANEELE</h3>
<p className="text-sm mt-4 opacity-70 uppercase tracking-widest">
                    Design &amp; Akustik
                  </p>
</div>
<div className="text-gray-400 font-light">
                  Hochwertige Wandverkleidungen und dekorative Paneele.
                  Individuelle Lösungen, die Ihren Räumen Charakter und Wärme
                  verleihen.
                </div>
<button className="text-left uppercase tracking-widest text-xs border-b border-white/30 pb-2 w-max hover:text-white transition-colors">
                  View Project
                </button>
</div>
<div className="card-img-wrap">
<img alt="Project 2" className="card-img object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/952269bf-60f5-48dc-afce-13953bead1eb_1600w.webp"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-5xl display mb-2 text-accent-blue">03</div>
<h3 className="text-3xl font-bold">RENOVIERUNG</h3>
<p className="text-sm mt-4 opacity-70 uppercase tracking-widest">
                    Komplettausbau
                  </p>
</div>
<div className="text-gray-400 font-light">
                  Von der Planung bis zur Schlüsselübergabe. Wir koordinieren
                  und realisieren Ihren kompletten Innenausbau effizient und
                  sauber.
                </div>
<button className="text-left uppercase tracking-widest text-xs border-b border-white/30 pb-2 w-max hover:text-white transition-colors">
                  View Project
                </button>
</div>
<div className="card-img-wrap">
<img alt="Project 3" className="card-img object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa5ed4de-1a7e-4bb7-b0ea-1a4c511663df_1600w.webp"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 bg-[#E3E1DC] text-center flex flex-col items-center justify-center relative z-10">
<h2 className="display text-3xl md:text-5xl mb-8">
          Ihr Partner für die Schweiz
        </h2>
<div className="max-w-xl text-gray-600 font-light mb-12 leading-relaxed">
          Unser Ziel ist es, Ihre Vision Realität werden zu lassen. Mit einem
          Fokus auf Termintreue und Präzision haben wir bereits über 5.000
          Projekte erfolgreich abgeschlossen.
        </div>
<div className="h-16 w-px bg-black/20"></div>
</section>
</div>


<footer className="footer-sticky">
<div className="relative z-10 text-center">
<div className="text-xs uppercase tracking-[0.3em] mb-4 text-gray-500">
          Bereit für Veränderung?
        </div>
<a className="display text-[8vw] leading-none hover:text-gray-400 transition-colors" href="mailto:zitat@danielbau.de">
          ANGEBOT
        </a>
<div className="flex justify-center gap-8 mt-12 text-sm uppercase tracking-widest text-gray-400">
<div className="hover:text-white transition-colors">+41 76 231 38 31</div>
<a className="hover:text-white transition-colors" href="mailto:zitat@danielbau.de">
            zitat@danielbau.de
          </a>
</div>
<div className="mt-20 text-[10px] text-gray-700">
          © 2025 DANIELBAU SCHWEIZ
        </div>
</div>

<img className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c6b6980-54e4-4d8c-9ff6-e09b844d7b01_3840w.webp"/>
</footer>

<div className="fixed right-0 top-1/2 -translate-y-1/2 translate-x-full bg-[var(--c-bg)] p-6 border-l border-gray-300 shadow-2xl z-[9999] transition-transform duration-700 ease-out flex flex-col gap-4 w-56 rounded-l-xl" id="lang-sidebar">
<div className="flex justify-between items-center mb-1">
<span className="text-[10px] uppercase tracking-widest text-gray-500">
          Region Wählen
        </span>
<button className="text-gray-400 hover:text-black" onclick="document.getElementById('lang-sidebar').classList.add('translate-x-full')">
          ×
        </button>
</div>
<a className="text-sm font-bold text-[var(--c-dark)] flex items-center gap-3 bg-white/50 p-2 rounded" href="#">
<span className="w-2 h-2 rounded-full bg-[var(--c-blue)]"></span>
        Deutsch (CH)
      </a>
<a className="text-sm font-medium text-gray-600 hover:text-[var(--c-blue)] hover:bg-white/50 p-2 rounded transition-all" href="#">
        Français
      </a>
<a className="text-sm font-medium text-gray-600 hover:text-[var(--c-blue)] hover:bg-white/50 p-2 rounded transition-all" href="#">
        Italiano
      </a>
<a className="text-sm font-medium text-gray-600 hover:text-[var(--c-blue)] hover:bg-white/50 p-2 rounded transition-all" href="#">
        English
      </a>
</div>


    </>
  );
}
