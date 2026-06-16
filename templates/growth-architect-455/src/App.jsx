import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener('DOMContentLoaded', () => {
          lucide.createIcons({
            attrs: {
              'stroke-width': 1.5
            }
          });

          // PARALLAX ENGINE
          const heroLayer = document.getElementById('hero-layer');
          const warmLayer = document.getElementById('warm-layer');
          const navbar = document.getElementById('navbar');
          let ticking = false;

          function updateParallax() {
              const scrollY = window.scrollY;
              const scrollVh = scrollY / window.innerHeight;

              // Hero fade out
              let heroOpacity = 1;
              if (scrollVh > 0) heroOpacity = 1 - (scrollVh * 1.2);
              if (heroLayer) heroLayer.style.opacity = Math.max(0, heroOpacity);

              // Warm layer fade in
              const docHeight = document.documentElement.scrollHeight - window.innerHeight;
              const progress = Math.min(scrollY / docHeight, 1);
              let warmOpacity = 0;
              if (progress > 0.3) warmOpacity = (progress - 0.3) * 1.5;
              if (warmLayer) warmLayer.style.opacity = Math.min(1, warmOpacity);

              // Nav switch
              if (navbar) {
                  if (scrollVh > 0.7) navbar.classList.add('nav-scrolled');
                  else navbar.classList.remove('nav-scrolled');
              }

              ticking = false;
          }

          window.addEventListener('scroll', () => {
              if (!ticking) {
                  window.requestAnimationFrame(updateParallax);
                  ticking = true;
              }
          });

          // NEW ROBUST TYPEWRITER ENGINE
          // This engine takes plain text from the HTML, splits it cleanly, adds spaces,
          // and manages the animation. It is robust against edits.
          const targets = document.querySelectorAll('.typewriter-target');

          targets.forEach(el => {
              const rawText = el.textContent.trim();
              if(!rawText) return;

              el.innerHTML = ''; // Clear original text
              el.dataset.animationStarted = 'false';

              // Split into words, handling multiple spaces correctly
              const words = rawText.split(/\s+/);

              words.forEach((word, index) => {
                  const span = document.createElement('span');
                  span.textContent = word;
                  span.className = 'word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform';
                  el.appendChild(span);

                  // Add a natural space after each word except the last one
                  if (index < words.length - 1) {
                      el.appendChild(document.createTextNode(' '));
                  }
              });
          });

          // INTERSECTION OBSERVER
          const observerOptions = {
              threshold: 0.15,
              rootMargin: "0px 0px -50px 0px"
          };

          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      // Standard Reveal
                      if (entry.target.classList.contains('reveal-on-scroll')) {
                          entry.target.classList.add('reveal-visible');
                      }

                      // Typewriter Trigger
                      if (entry.target.classList.contains('typewriter-target')) {
                          if (entry.target.dataset.animationStarted !== 'true') {
                              entry.target.dataset.animationStarted = 'true';

                              const startDelay = parseInt(entry.target.dataset.typingDelay) || 0;
                              const spans = entry.target.querySelectorAll('.word-span');

                              setTimeout(() => {
                                  spans.forEach((span, i) => {
                                      setTimeout(() => {
                                          span.classList.remove('opacity-0', 'translate-y-4');
                                      }, i * 40); // 40ms per word for fluid effect
                                  });
                              }, startDelay);
                          }
                      }
                  }
              });
          }, observerOptions);

          // Observe all targets
          document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
          targets.forEach(el => observer.observe(el));

          // Initial check
          updateParallax();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="parallax-layer" id="hero-layer" style={{opacity: '1'}}></div>
<div className="parallax-layer" id="warm-layer" style={{opacity: '0'}}></div>

<nav className="fixed top-0 w-full z-50 nav-glass" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="nav-logo group flex items-center gap-2.5 hover:opacity-80 transition-opacity text-white" href="#">
<span className="flex items-center gap-2 text-xl font-semibold tracking-tight font-geist" style={{}}>
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" fill="currentColor" height="24" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" clip-rule="evenodd" d="M4 5C4 3.89543 4.89543 3 6 3H13C14.1046 3 15 3.89543 15 5V9H13V5H6V11H13C14.1046 11 15 11.8954 15 13V19C15 20.1046 14.1046 21 13 21H6C4.89543 21 4 20.1046 4 19V15H6V19H13V13H6C4.89543 13 4 12.1046 4 11V5ZM17 5C17 3.89543 17.8954 3 19 3H20C21.1046 3 22 3.89543 22 5V19C22 20.1046 21.1046 21 20 21H19C17.8954 21 17 20.1046 17 19V5Z" fill-rule="evenodd"></path>
</svg>
            SystematIO
          </span>
</a>
<div className="hidden md:flex nav-link text-sm font-medium text-slate-300 gap-x-8 gap-y-8 items-center">
<a className="transition-colors hover:text-white font-geist" href="#approach" style={{}}>
            Herausforderung
          </a>
<a className="transition-colors hover:text-white font-geist" href="#system" style={{}}>
            Lösung
          </a>
<a className="transition-colors hover:text-white font-geist" href="#services" style={{}}>
            Angebot
          </a>
<a className="transition-colors hover:text-white font-geist" href="#about" style={{}}>
            Über uns
          </a>
<a className="transition-colors hover:text-white font-geist" href="#testimonials" style={{}}>
            Bewertungen
          </a>
</div>
<a className="hidden md:flex nav-btn items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full border transition-all duration-300 group text-white border-white/10 bg-white/5 hover:bg-white/10" href="#contact">
<span className="font-geist" style={{}}>Kontaktieren</span>
<svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1 opacity-90" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</nav>

<section className="min-h-screen flex flex-col pt-32 pb-20 relative justify-center">
<div className="z-10 w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center max-w-5xl mr-auto ml-auto">
<div className="reveal-on-scroll reveal-visible mb-12"></div>

<div className="flex flex-col mb-12 gap-x-3 gap-y-6 items-center">

<h1 className="typewriter-target leading-[1.1] md:text-7xl lg:text-7xl text-4xl sm:text-5xl font-medium text-white tracking-tighter font-jakarta whitespace-nowrap" data-animation-started="false"><span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">Growth</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">Marketing.</span></h1>

<div className="typewriter-target leading-[1.1] md:text-7xl lg:text-7xl text-4xl sm:text-5xl font-medium text-white tracking-tighter font-jakarta whitespace-nowrap" data-animation-started="false"><span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">Mit</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">System.</span></div>

<div className="typewriter-target leading-[1.1] md:text-7xl lg:text-7xl text-4xl sm:text-5xl font-medium text-white tracking-tighter font-jakarta whitespace-nowrap" data-animation-started="false"><span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">Ohne</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">Zufall.</span></div>
</div>

<div className="reveal-on-scroll delay-300 flex flex-col sm:flex-row gap-4 items-center justify-center reveal-visible">
<a className="group px-8 py-3.5 rounded-full font-medium text-sm transition-all inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/20 hover:scale-105 font-geist" href="#transition" style={{}}>
              Wie arbeiten wir
            </a>
</div>
</div>
</div>

<div className="overflow-hidden z-20 marquee-mask bg-slate-900/5 w-full border-white/10 border-t pt-10 pb-10 absolute bottom-0 backdrop-blur-sm" style={{}}>
<div className="flex animate-marquee gap-20 w-max pr-4 pl-4 gap-x-20 gap-y-20 items-center">
<img alt="Google Ads" className="h-8 w-auto object-contain opacity-50 brightness-0 invert" loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg" style={{}}/>
<img alt="Meta Ads" className="h-6 w-auto object-contain opacity-50 brightness-0 invert" loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" style={{}}/>
<img alt="HubSpot" className="h-7 w-auto object-contain opacity-50 brightness-0 invert" loading="lazy" src="https://www.hubspot.com/hubfs/assets/hs-cms-modules/HubSpot-Logo.svg"/>
<img alt="Superchat" className="h-8 w-auto object-contain opacity-50 brightness-0 invert" loading="lazy" src="https://cdn.prod.website-files.com/5f9ad308957693281dc01e0d/6874cdf9820df6206c3f96c6_superchat-user-centric-new.png"/>
<img alt="Make" className="h-6 w-auto object-contain opacity-50 brightness-0 invert" loading="lazy" src="https://images.ctfassets.net/un655fb9wln6/1k5wBPhbu5kXiaYlFWgEJE/b590772959bd510e64cf230ef37bba3e/Make-Logo-RGB.svg"/>
<img alt="n8n" className="h-5 w-auto object-contain opacity-50 brightness-0 invert" loading="lazy" src="https://n8n.io/brandguidelines/logo-dark.svg"/>
<img alt="Zapier" className="h-6 w-auto object-contain opacity-50 brightness-0 invert" loading="lazy" src="https://res.cloudinary.com/zapier-media/image/upload/v1666030611/Contact%20Sales/logo_ptzjx8.png"/>
<img alt="Google Ads" className="h-8 w-auto object-contain opacity-50 brightness-0 invert" loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg" style={{}}/>
<img alt="Meta Ads" className="h-6 w-auto object-contain opacity-50 brightness-0 invert" loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" style={{}}/>
<img alt="HubSpot" className="h-7 w-auto object-contain opacity-50 brightness-0 invert" loading="lazy" src="https://www.hubspot.com/hubfs/assets/hs-cms-modules/HubSpot-Logo.svg"/>
<img alt="Superchat" className="h-8 w-auto object-contain opacity-50 brightness-0 invert" loading="lazy" src="https://cdn.prod.website-files.com/5f9ad308957693281dc01e0d/6874cdf9820df6206c3f96c6_superchat-user-centric-new.png"/>
<img alt="Make" className="h-6 w-auto object-contain opacity-50 brightness-0 invert" loading="lazy" src="https://images.ctfassets.net/un655fb9wln6/1k5wBPhbu5kXiaYlFWgEJE/b590772959bd510e64cf230ef37bba3e/Make-Logo-RGB.svg"/>
<img alt="n8n" className="h-5 w-auto object-contain opacity-50 brightness-0 invert" loading="lazy" src="https://n8n.io/brandguidelines/logo-dark.svg"/>
<img alt="Zapier" className="h-6 w-auto object-contain opacity-50 brightness-0 invert" loading="lazy" src="https://res.cloudinary.com/zapier-media/image/upload/v1666030611/Contact%20Sales/logo_ptzjx8.png"/>
</div>
</div>
</section>

<section className="z-10 flex min-h-screen flex-col md:py-32 overflow-hidden pt-24 pb-24 relative items-center justify-center" id="transition">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f4f4f5] to-[#f4f4f5] z-0 pointer-events-none"></div>
<div className="md:text-left text-left max-w-5xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<h2 className="typewriter-target leading-[1.7] md:text-4xl lg:text-4xl text-2xl font-light text-zinc-800 tracking-tighter font-geist text-center" data-animation-started="false" data-typing-delay="100"><span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">Wir</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">verbinden</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">Performance</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">Marketing,</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">Funnel-Architektur,</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">CRM</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">und</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">KI</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">zu</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">einem</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">ganzheitlichen</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">System,</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">das</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">Wachstum</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">planbar</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">macht.</span></h2>
</div>
</section>

<section className="z-10 pt-32 pb-32 relative" id="approach">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20">
<div className="reveal-on-scroll self-center">
<div className="flex items-center gap-3 mb-6">
<div className="h-px w-8 bg-zinc-300"></div>
<span className="text-xs font-medium tracking-widest uppercase text-zinc-400 font-geist" style={{}}>
                Das Problem
              </span>
</div>
<h2 className="typewriter-target leading-[1.15] md:text-5xl text-4xl font-light text-zinc-900 mb-8 min-h-[3ch] font-geist tracking-tighter" data-animation-started="false" style={{}}><span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">Marketing</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">liefert</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">Leads,</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">doch</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">der</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">Umsatz</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">stagniert</span></h2>
<p className="leading-relaxed text-lg font-light text-zinc-500 max-w-md font-geist" style={{}}>
              Oft liegt der Engpass in der fehlenden Synchronisation zwischen
              Marketing, Daten und Sales-Prozessen.
            </p>
</div>
<div className="lg:mt-0 mt-8 space-y-6">

<div className="reveal-on-scroll delay-100 p-8 rounded-2xl border transition-colors bg-white border-zinc-200 hover:border-zinc-300 shadow-sm">
<div className="flex items-start gap-4">
<div className="p-2 rounded-lg bg-slate-100 text-slate-700">
<svg className="lucide lucide-layers w-5 h-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-semibold mb-2 text-zinc-900 font-geist" style={{}}>
                    Datensilos
                  </h3>
<p className="leading-relaxed text-sm text-zinc-500 font-geist" style={{}}>
                    Leads werden generiert, aber nicht effektiv genutzt.
                    Marketing-Daten erreichen den Vertrieb nicht.
                  </p>
</div>
</div>
</div>

<div className="reveal-on-scroll delay-200 p-8 rounded-2xl border transition-colors bg-white border-zinc-200 hover:border-zinc-300 shadow-sm">
<div className="flex items-start gap-4">
<div className="p-2 rounded-lg bg-zinc-50 text-zinc-600">
<svg className="lucide lucide-cpu w-5 h-5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<div className="">
<h3 className="text-lg font-semibold mb-2 text-zinc-900 font-geist" style={{}}>
                    Manuelle Prozesse
                  </h3>
<p className="text-zinc-500 text-sm leading-relaxed font-geist" style={{}}>
                    Teams verbringen Stunden mit Aufgaben, die automatisiert
                    werden sollten.
                  </p>
</div>
</div>
</div>

<div className="reveal-on-scroll delay-300 p-8 rounded-2xl border transition-colors bg-white border-zinc-200 hover:border-zinc-300 shadow-sm">
<div className="flex items-start gap-4">
<div className="p-2 rounded-lg bg-slate-100 text-slate-700">
<svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="">
<h3 className="text-lg font-semibold mb-2 text-zinc-900 font-geist" style={{}}>
                    Falsche Zielgruppe
                  </h3>
<p className="text-zinc-500 text-sm leading-relaxed font-geist" style={{}}>
                    Marketing spricht häufig die falsche Zielgruppe an.
                    Resultat: schlechte Lead-Qualität.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-20 overflow-hidden" id="system">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[120px] mix-blend-multiply animate-pulse"></div>
<div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-200/20 rounded-full blur-[120px] mix-blend-multiply"></div>
</div>
<div className="max-w-[90rem] mx-auto px-4 md:px-6 relative z-10">
<div className="relative rounded-[2.5rem] bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.05)] p-8 md:p-16 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent opacity-60 pointer-events-none"></div>
<div className="relative z-10">
<div className="reveal-on-scroll text-center mb-16 max-w-full mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 border border-white/60 backdrop-blur-md mb-8 shadow-sm">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div>
<span className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500 font-geist" style={{}}>
                  Die Lösung
                </span>
</div>
<h2 className="typewriter-target text-4xl md:text-5xl lg:text-6xl text-zinc-900 font-light leading-[1.1] md:whitespace-nowrap min-h-[1.2em] font-geist tracking-tighter" data-animation-started="false" style={{}}><span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">Ein</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">integriertes</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">Growth-System</span></h2>
<p className="md:text-xl text-lg font-light text-zinc-600 font-geist mt-5">
                Vom Fundament bis zur KI-Automatisierung.
              </p>
</div>

<div className="grid md:grid-cols-4 gap-12 md:gap-8 gap-x-12 gap-y-12">

<div className="reveal-on-scroll group relative">
<div className="absolute -left-4 -top-4 w-24 h-24 bg-gradient-to-br from-zinc-200/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<span className="block md:text-7xl group-hover:text-zinc-900/60 transition-colors duration-500 select-none text-6xl font-medium text-zinc-900/40 font-jakarta mb-4 relative">
                  01
                </span>
<div className="relative pl-1 border-l border-transparent group-hover:border-zinc-300/50 transition-colors duration-300">
<h3 className="text-lg font-semibold mb-2 text-zinc-900 tracking-tight font-geist" style={{}}>
                    Strategy &amp; Audit
                  </h3>
<p className="text-zinc-500 text-sm leading-relaxed font-light font-geist" style={{}}>
                    Tiefenanalyse des Status Quo. Identifikation von Engpässen
                    und Entwicklung einer klaren Roadmap.
                  </p>
</div>
</div>

<div className="reveal-on-scroll delay-100 group relative">
<div className="absolute -left-4 -top-4 w-24 h-24 bg-gradient-to-br from-zinc-200/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<span className="relative block text-6xl md:text-7xl text-zinc-900/40 mb-4 group-hover:text-zinc-900/60 transition-colors duration-500 select-none font-medium font-jakarta" style={{}}>
                  02
                </span>
<div className="relative pl-1 border-l border-transparent group-hover:border-zinc-300/50 transition-colors duration-300">
<h3 className="text-lg font-semibold mb-2 text-zinc-900 tracking-tight font-geist" style={{}}>
                    Performance Traffic
                  </h3>
<p className="text-zinc-500 text-sm leading-relaxed font-light font-geist" style={{}}>
                    Skalierbare Kampagnen auf Meta &amp; Google. Datenbasiertes
                    Creative-Testing statt Bauchgefühl.
                  </p>
</div>
</div>

<div className="reveal-on-scroll delay-200 group relative">
<div className="absolute -left-4 -top-4 w-24 h-24 bg-gradient-to-br from-zinc-200/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<span className="relative block text-6xl md:text-7xl text-zinc-900/40 mb-4 group-hover:text-zinc-900/60 transition-colors duration-500 select-none font-medium font-jakarta" style={{}}>
                  03
                </span>
<div className="relative pl-1 border-l border-transparent group-hover:border-zinc-300/50 transition-colors duration-300">
<h3 className="text-lg font-semibold mb-2 text-zinc-900 tracking-tight font-geist" style={{}}>
                    Funnel Architektur
                  </h3>
<p className="text-zinc-500 text-sm leading-relaxed font-light font-geist" style={{}}>
                    High-Performance Funnels und KI Chatbots. Qualifizierung und
                    Filterung für maximale Lead-Qualität.
                  </p>
</div>
</div>

<div className="reveal-on-scroll delay-300 group relative">
<div className="absolute -left-4 -top-4 w-24 h-24 bg-gradient-to-br from-zinc-200/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<span className="relative block text-6xl md:text-7xl text-zinc-900/40 mb-4 group-hover:text-zinc-900/60 transition-colors duration-500 select-none font-medium font-jakarta" style={{}}>
                  04
                </span>
<div className="relative pl-1 border-l border-transparent group-hover:border-zinc-300/50 transition-colors duration-300">
<h3 className="text-lg font-semibold mb-2 text-zinc-900 tracking-tight font-geist" style={{}}>
                    Sales Operations
                  </h3>
<p className="text-zinc-500 text-sm leading-relaxed font-light font-geist" style={{}}>
                    CRM-Integration und Nurturing. Kein Lead bleibt liegen,
                    jeder Touchpoint wird erfasst.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 z-10 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
<div className="reveal-on-scroll">
<h2 className="typewriter-target text-4xl md:text-5xl mb-2 text-zinc-900 font-light min-h-[1.2em] font-geist tracking-tighter" data-animation-started="false" style={{}}><span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">Unsere</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">Leistungen</span></h2>
<p className="text-zinc-500 font-light text-lg font-geist" style={{}}>
              Maßgeschneiderte Lösungen für dein Wachstum.
            </p>
</div>
<a className="reveal-on-scroll text-sm transition-colors flex items-center gap-2 border-b pb-1 text-zinc-900 hover:text-zinc-600 border-zinc-300 font-geist" href="#contact" style={{}}>
            Zusammenarbeiten
            <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="space-y-4">

<a className="block reveal-on-scroll group relative border-t transition-colors border-zinc-200 hover:border-zinc-400" href="#contact">
<div className="flex flex-col md:flex-row md:items-center gap-6 cursor-pointer pt-10 pb-10 gap-x-6 gap-y-6 justify-between">
<h3 className="md:w-1/3 text-2xl group-hover:text-slate-600 transition-colors text-zinc-800 font-medium font-jakarta" style={{}}>
                System Audit
              </h3>
<p className="md:w-1/2 text-zinc-500 text-base font-light font-geist" style={{}}>
                Status Quo Check. Identifikation von Blockern und Hebeln in
                Marketing &amp; Sales.
              </p>
<div className="md:w-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
<svg className="lucide lucide-arrow-right w-5 h-5 text-slate-600" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</a>

<a className="block reveal-on-scroll delay-100 group relative border-t transition-colors border-zinc-200 hover:border-zinc-400" href="#contact">
<div className="py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer">
<h3 className="md:w-1/3 text-2xl group-hover:text-slate-600 transition-colors text-zinc-800 font-medium font-jakarta" style={{}}>
                Setup
              </h3>
<p className="md:w-1/2 text-zinc-500 text-base font-light font-geist" style={{}}>
                Aufbau der kompletten Infrastruktur von Ads, Funnels,
                Automationen &amp; CRM.
              </p>
<div className="md:w-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
<svg className="lucide lucide-arrow-right w-5 h-5 text-slate-600" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</a>

<a className="block reveal-on-scroll delay-200 group relative border-t transition-colors border-zinc-200 hover:border-zinc-400" href="#contact">
<div className="py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer">
<h3 className="md:w-1/3 text-2xl group-hover:text-slate-600 transition-colors text-zinc-800 font-medium font-jakarta" style={{}}>
                Begleitender Partner
              </h3>
<p className="md:w-1/2 text-zinc-500 text-base font-light font-geist" style={{}}>
                Strategische &amp; operative Betreuung als dein externer Growth
                Partner
              </p>
<div className="md:w-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
<svg className="lucide lucide-arrow-right w-5 h-5 text-slate-600" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="py-32 z-10 relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7 reveal-on-scroll">

<h2 className="text-4xl md:text-5xl lg:text-5xl leading-tight mb-8 font-light font-geist tracking-tighter">
<span className="block text-zinc-400 typewriter-target" data-animation-started="false" data-typing-delay="0"><span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">Keine</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">Agentur.</span></span>
<span className="block text-zinc-900 typewriter-target" data-animation-started="false" data-typing-delay="0"><span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">Ein</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">strategischer</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">Partner.</span></span>
</h2>
<div className="space-y-6 text-lg font-light leading-relaxed text-zinc-600">
<p className="font-geist" style={{}}>
                Wir haben Growth-Setups für internationale Marken,
                Premium-Dienstleister und komplexe High-Ticket-Modelle begleitet
                und dabei mit 9-stelligen Werbebudgets gearbeitet.
              </p>
<p className="font-geist">
                Wir arbeiten direkt mit Entscheidern, reduzieren Komplexität und
                entwickeln Prozesse, die dauerhaft funktionieren – von der
                Strategie bis zur Umsetzung.
              </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-zinc-200">

<div className="reveal-on-scroll delay-100 flex items-center gap-3 group cursor-default">
<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-100 text-zinc-500 transition-colors group-hover:bg-zinc-200 group-hover:text-zinc-700">
<svg className="lucide lucide-crosshair w-4 h-4" data-lucide="crosshair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
</div>
<span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors font-geist" style={{}}>
                  Strategie
                </span>
</div>

<div className="reveal-on-scroll delay-100 flex items-center gap-3 group cursor-default">
<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-100 text-zinc-500 transition-colors group-hover:bg-zinc-200 group-hover:text-zinc-700">
<svg className="lucide lucide-megaphone w-4 h-4" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
</div>
<span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors font-geist" style={{}}>
                  Ads &amp; E-Mail Outreach
                </span>
</div>

<div className="reveal-on-scroll delay-200 flex items-center gap-3 group cursor-default">
<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-100 text-zinc-500 transition-colors group-hover:bg-zinc-200 group-hover:text-zinc-700">
<svg className="lucide lucide-layout-template w-4 h-4" data-lucide="layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>
</div>
<span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors font-geist" style={{}}>
                  Website &amp; Funnels
                </span>
</div>

<div className="reveal-on-scroll delay-200 flex items-center gap-3 group cursor-default">
<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-100 text-zinc-500 transition-colors group-hover:bg-zinc-200 group-hover:text-zinc-700">
<svg className="lucide lucide-bot w-4 h-4" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors font-geist" style={{}}>
                  AI &amp; Automation
                </span>
</div>

<div className="reveal-on-scroll delay-300 flex items-center gap-3 group cursor-default">
<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-100 text-zinc-500 transition-colors group-hover:bg-zinc-200 group-hover:text-zinc-700">
<svg className="lucide lucide-bar-chart-3 w-4 h-4" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors font-geist" style={{}}>
                  Tracking &amp; Analytics
                </span>
</div>

<div className="reveal-on-scroll delay-300 flex items-center gap-3 group cursor-default">
<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-100 text-zinc-500 transition-colors group-hover:bg-zinc-200 group-hover:text-zinc-700">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors font-geist" style={{}}>
                  CRM
                </span>
</div>
</div>
</div>
<div className="lg:col-span-4 lg:col-start-9 reveal-on-scroll delay-200">
<div className="aspect-[3/4] rounded-2xl overflow-hidden relative shadow-xl border border-zinc-200/50">
<div className="absolute inset-0 w-full h-full group">
<img alt="Fabian Knecht" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform" loading="lazy" src="https://i.postimg.cc/nzSXf6Mj/fabi-foto-neu.jpg"/>
<div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-between gap-3 transform transition-all duration-300 hover:bg-white/20">
<div>
<div className="text-white font-jakarta font-semibold text-sm leading-tight">
                      Fabian Knecht
                    </div>
<div className="text-white/70 font-geist text-xs mt-0.5 font-medium">
                      Founder &amp; Growth Lead
                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 border-zinc-200/60 border-t pt-32 pb-32 relative" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="reveal-on-scroll">
<div className="text-center max-w-3xl mr-auto mb-16 ml-auto space-y-6">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/40 border border-white/60 backdrop-blur-md shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-400"></span>
</span>
<span className="text-xs font-semibold uppercase tracking-widest text-zinc-600 font-geist">
                Testimonials
              </span>
</div>
<div className="space-y-2">
<h2 className="typewriter-target text-4xl md:text-5xl lg:text-6xl font-light text-zinc-900 leading-[1.1] font-geist tracking-tighter" data-animation-started="false"><span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">Ergebnisse,</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">die</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">zählen</span></h2>
<p className="md:text-3xl text-2xl font-medium text-zinc-400 tracking-tight font-jakarta">
                Success Stories
              </p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-5 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300 bg-white h-full border-zinc-200/50 border rounded-[2.5rem] p-8 md:p-10 relative shadow-sm justify-between">
<div className="space-y-6">
<div>
<div className="text-7xl font-medium tracking-tighter text-zinc-900 font-jakarta">
                    10x
                  </div>
<div className="text-lg font-medium text-zinc-500 font-geist mt-2">
                    Umsatz in einem Jahr
                  </div>
</div>
<svg className="lucide lucide-quote text-red-500 w-8 h-8 opacity-90 fill-current" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
<p className="leading-relaxed font-light text-zinc-600 font-geist text-base md:text-lg">
                  Fabian hat unsere Expansion in neue Märkte nicht nur strategisch konzipiert, sondern auch operativ konsequent umgesetzt.
                
                </p><p className="leading-relaxed font-light text-zinc-600 font-geist text-base md:text-lg"> Besonders wertvoll war seine Fähigkeit, komplexe Go-to-Market-Setups schnell zu durchdringen, skalierbare Wachstums-Systeme aufzusetzen und diese datengetrieben weiterzuentwickeln.</p>
<p className="leading-relaxed font-light text-zinc-600 font-geist text-base md:text-lg"> Durch die Kombination aus analytischer Tiefe, klarer Struktur und hoher Umsetzungsgeschwindigkeit konnten wir neue
Märkte deutlich schneller und effizienter skalieren, als es ohne ihn möglich gewesen wäre.</p>
<p></p>
</div>
<div className="mt-8 pt-8 border-t border-zinc-100 flex items-center gap-4">
<img alt="Christian Benzel" className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" src="https://i.postimg.cc/Rhw1z7NX/1738346938037.jpg"/>
<div>
<div className="text-base font-semibold text-zinc-900 font-geist">
                    Christian Benzel
                  </div>
<div className="text-sm text-zinc-500 font-geist">
                    Principal Digital Growth, DERTOUR
                  </div>
</div>
</div>
</div>

<div className="lg:col-span-7 flex flex-col gap-6 h-full">

<div className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white border-zinc-200/50 border rounded-[2.5rem] p-8 md:p-10 relative shadow-sm h-full">
<div className="flex flex-col h-full justify-between">
<div className="space-y-6">
<svg className="lucide lucide-quote text-red-500 w-8 h-8 opacity-90 fill-current" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
<p className="text-zinc-600 font-light leading-relaxed font-geist text-base md:text-lg">
                      Durch den strategischen Ansatz in Kombination mit starker
                      operativer Umsetzungsfähigkeit wurde unsere Performance
                      deutlich verbessert. Sehr gute analytische Fähigkeiten und
                      schnelles Einarbeiten in unsere speziellen Produkte und
                      Antragsstrecken haben zusätzlich zum Erfolg beigetragen.
                    </p>
</div>
<div className="mt-8 pt-8 border-t border-zinc-100 flex items-center gap-4">
<img alt="Steffen Harting" className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" src="https://cdn.businessinsider.de/wp-content/uploads/2017/07/steffen-harting_hires_2000.jpg"/>
<div>
<div className="text-base font-semibold text-zinc-900 font-geist">
                        Steffen Harting
                      </div>
<div className="text-sm text-zinc-500 font-geist">
                        Managing Director, Getsurance
                      </div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">

<div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-zinc-200/50 p-8 md:p-10 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full">
<div className="space-y-6">
<svg className="lucide lucide-quote text-red-500 w-8 h-8 opacity-90 fill-current" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
<p className="leading-relaxed font-light text-zinc-600 font-geist text-base md:text-lg">
                      Cold E-Mail Outreach und Lead Gen wurden komplett
                      automatisiert. Die gewonnene Zeit konnten wir direkt in
                      Closing und Wachstum investieren.
                    </p>
</div>
<div className="mt-8 pt-8 border-t border-zinc-100 flex items-center gap-4">
<img alt="Timo Kretschmer" className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" src="https://i.postimg.cc/gkC7bsrm/Portraitfotograf-Berlin-Format-Internet-02.jpg"/>
<div>
<div className="text-base font-semibold text-zinc-900 font-geist">
                        Timo Kretschmer
                      </div>
<div className="text-sm text-zinc-500 font-geist">
                        Founder &amp; CEO, Online Vision
                      </div>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-950 border border-zinc-800 p-8 md:p-10 shadow-xl shadow-zinc-900/20 flex flex-col justify-between h-full group hover:border-zinc-700 transition-colors">
<div className="absolute top-0 right-0 w-32 h-32 bg-zinc-800/30 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10 space-y-6">
<svg className="lucide lucide-quote text-red-500 w-8 h-8 opacity-80 fill-current" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
<p className="text-zinc-300 font-light leading-relaxed font-geist text-base md:text-lg">
                      Die Optimierung der zielgruppenbasierten Ad-Sets für unser
                      Performance Marketing hat die Conversion-Rates sichtlich
                      erhöht.
                    </p>
</div>
<div className="relative z-10 flex items-center gap-4 mt-8 pt-8 border-t border-zinc-800">
<img alt="Malte Häusler" className="w-12 h-12 rounded-full object-cover border-2 border-zinc-800 shadow-sm" src="https://media.licdn.com/dms/image/v2/D4D03AQGBJ8d1VsJVQw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708962969107?e=1767830400&amp;v=beta&amp;t=lCV8UU3jlEwyDSjk-sQ7QshWiNcnBtq7rX3PzAjiDk8"/>
<div>
<div className="text-base font-semibold text-white font-geist">
                        Malte Häusler
                      </div>
<div className="text-sm text-zinc-500 font-geist">
                        Co-Founder &amp; CEO, Timeless Investments
                      </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-32 pb-12 relative z-10" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="reveal-on-scroll md:p-24 overflow-hidden group text-center bg-white/40 border-white/60 border rounded-[2.5rem] mb-20 pt-12 pr-12 pb-12 pl-12 relative shadow-[0_8px_40px_-12px_rgba(0,0,0,0.05)] backdrop-blur-2xl">
<div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent opacity-60 pointer-events-none"></div>
<div className="z-10 relative">
<h2 className="typewriter-target text-4xl md:text-6xl mb-6 text-zinc-900 font-light min-h-[1.2em] font-geist tracking-tighter" data-animation-started="true"><span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">Bereit</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">für</span> <span className="word-span opacity-0 translate-y-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform">Wachstum?</span></h2>
<p className="max-w-xl mx-auto mb-10 text-lg font-light text-zinc-600 leading-relaxed font-geist">
        Dann lass uns zusammenarbeiten.
    </p>
<div className="flex flex-col items-center gap-6">
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
<a className="group min-w-[240px] py-4 px-8 rounded-full font-medium transition-all duration-300 hover:scale-[1.02] bg-slate-900 text-white shadow-xl shadow-slate-900/10 flex items-center justify-center gap-2.5 hover:bg-slate-800 font-geist" href="https://wa.me/message/RD6K2YC3MZG5H1" rel="noopener noreferrer" target="_blank">
<svg aria-hidden="true" className="w-5 h-5 fill-current transition-transform group-hover:-translate-y-0.5" viewbox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg>
                Auf WhatsApp kontaktieren
            </a>
<a className="group min-w-[240px] py-4 px-8 rounded-full border border-white/80 font-medium transition-all duration-300 bg-white/50 hover:bg-white text-zinc-900 shadow-sm hover:shadow-md flex items-center justify-center gap-2.5 backdrop-blur-sm font-geist" href="mailto:kontakt@systematio.com">
<svg className="lucide lucide-mail w-5 h-5 transition-transform group-hover:-translate-y-0.5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                Per E-Mail schreiben
            </a>
</div>
<a className="group flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 font-medium transition-colors font-geist" href="https://www.linkedin.com/in/fabian-knecht-617003187/" rel="noopener noreferrer" target="_blank">
<svg className="lucide lucide-linkedin w-4 h-4 transition-transform group-hover:-translate-y-0.5" data-lucide="linkedin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
<span className="border-b border-transparent group-hover:border-zinc-900 transition-colors">Auf LinkedIn vernetzen</span>
</a>
</div>
</div>
</div>
<div className="reveal-on-scroll flex flex-col md:flex-row text-sm text-zinc-500 border-zinc-200/50 border-t pt-8 items-center justify-between">
<div className="md:mb-0 font-geist mb-4">2025 Systematio</div>
<div className="flex gap-8">
<a className="hover:text-zinc-900 font-geist" href="/impressum" style={{}}>
              Impressum
            </a>
<a className="hover:text-zinc-900 font-geist" href="/datenschutz" style={{}}>
              Datenschutz
            </a>
</div>
</div>
</div>
</section>


    </>
  );
}
