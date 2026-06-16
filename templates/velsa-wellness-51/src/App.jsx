import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
syne: ['Syne', 'sans-serif'],
manrope: ['Manrope', 'sans-serif'],
mono: ['DM Mono', 'monospace'],
},
colors: {
v_white: '#FFFFFF',
v_light: '#F7F7F5',
v_stone: '#F2F1EE',
v_dark: '#0E0E0E',
v_card_dark: '#1A1A1A',
v_black: '#111111',
v_accent: '#B8FF4A',
v_muted: '#A0A0A0',
v_text: '#6B6B6B'
},
transitionTimingFunction: {
'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



          const rituals = [
              {n:"01", s:"ARRIVAL DECOMPRESSION", t:"Sensory Reset", d:"A 45-minute guided breathwork session eliminates cortisol spike from travel. Conducted in silence. No introduction, no small talk.", chip:"45 MIN · DAY 1"},
              {n:"02", s:"THERMAL INTRODUCTION", t:"Cold Initiation", d:"First thermal circuit. Cold at 14°C, warm at 38°C, hot at 62°C. Learning the body's thermoregulatory response firsthand.", chip:"60 MIN · DAY 1"},
              {n:"03", s:"BIOMECHANICAL MAPPING", t:"Body Assessment", d:"Our resident osteopath maps compression zones, fascial restrictions, and postural holding patterns. Forms the basis of your personal ritual arc.", chip:"90 MIN · DAY 2"},
              {n:"04", s:"STONE THERAPY", t:"Deep Tissue Release", d:"Basalt stone massage targeting the mapped compression zones. Temperature graduated from 42°C to 55°C across session.", chip:"75 MIN · DAY 2"},
              {n:"05", s:"FLOATATION PROTOCOL", t:"Zero Gravity", d:"90-minute sensory deprivation float. The deepest theta brainwave state achievable without pharmacology.", chip:"90 MIN · DAY 3"},
              {n:"06", s:"LIGHT RECALIBRATION", t:"Circadian Reset", d:"Morning phototherapy at 10,000 lux for 40 minutes. Cortisol rhythm corrected. Chronotype adjusted.", chip:"40 MIN · DAY 3"},
              {n:"07", s:"LÖYLY CEREMONY", t:"Sauna Ritual", d:"Traditional Finnish sauna protocol with birch bundles, cold plunge, and guided löyly (steam) throwing. Performed by a certified sauna master.", chip:"120 MIN · DAY 4"},
              {n:"08", s:"NUTRITION RECALIBRATION", t:"Metabolic Reset", d:"One full day of plant-based ketogenic protocol designed by nutritionist Alva Lindström. Inflammatory markers targeted.", chip:"FULL DAY · DAY 4"},
              {n:"09", s:"MOVEMENT MAPPING", t:"Functional Mobility", d:"Three-hour mobility session combining Ashtanga Vinyasa, proprioceptive neuromuscular facilitation, and Feldenkrais awareness movement.", chip:"180 MIN · DAY 5"},
              {n:"10", s:"HYDROTHERAPY", t:"Aquatic Bodywork", d:"Watsu session in the thermal pool at 35°C. Passive joint mobilization in warm water. The rarest treatment on the program.", chip:"75 MIN · DAY 5"},
              {n:"11", s:"INTEGRATION REST", t:"Scheduled Silence", d:"Full day of unstructured silence. No treatment, no schedule. The body processes. Many guests report this as the transformative day.", chip:"FULL DAY · DAY 6"},
              {n:"12", s:"DEPARTURE PROTOCOL", t:"Maintenance Sequence", d:"Your personal maintenance protocol: a 12-page PDF containing daily ritual adaptations for home. The practice continues.", chip:"90 MIN · DAY 7"}
          ];

          rituals.forEach((r, i) => {
              document.write(`
                  <div class="ritual-card w-[clamp(16.25rem,30vw,22.5rem)] shrink-0 h-[clamp(20rem,50vh,30rem)] bg-v_light border border-black/5 flex flex-col justify-between p-8 snap-start transition-colors duration-300 hover:border-v_accent group" style="perspective: 1200px;" onmousemove="tiltCard(event, this)" onmouseleave="resetCard(this)">
                      <div style="transform-style: preserve-3d; transition: transform 0.2s; pointer-events: none;" class="h-full flex flex-col justify-between tilt-inner">
                          <div>
                              <span class="font-mono text-[0.6875rem] text-v_muted block mb-4">${r.s}</span>
                              <div class="font-syne font-[800] text-[4rem] text-[#E0DFD9] leading-none mb-4 group-hover:text-v_accent transition-colors">${r.n}</div>
                              <h3 class="font-syne font-[700] text-[1.375rem] text-v_black mb-3">${r.t}</h3>
                              <p class="font-manrope font-light text-[0.9375rem] text-v_text leading-relaxed">${r.d}</p>
                          </div>
                          <div class="mt-auto pt-6 border-t border-black/5">
                              <span class="font-mono text-[0.6875rem] text-v_muted">${r.chip}</span>
                          </div>
                      </div>
                  </div>
              `);
          });
        
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-[100] h-[64px] transition-all duration-[0.4s] ease-smooth bg-transparent border-b border-transparent" id="navbar">
<div className="h-full flex items-center justify-between px-[clamp(1.5rem,5vw,4rem)] max-w-[1440px] mx-auto">

<a aria-label="Velsa Home" className="block w-8 h-8 logo-hover-group" href="#">
<svg className="w-full h-full stroke-v_black fill-none" viewbox="0 0 40 40">
<path className="logo-path-outer" d="M 8 20 C 8 8, 20 6, 20 6 C 32 6, 32 20, 32 20 C 32 32, 20 34, 20 34 C 8 34, 8 20, 8 20 Z" strokeLinecap="round" strokeWidth="1.8"></path>
<path className="logo-path-inner" d="M 13 28 C 16 22, 20 16, 22 13 C 25 18, 27 20, 29 22" strokeLinecap="round" strokeWidth="1.8"></path>
<circle className="logo-dot fill-v_black stroke-none" cx="22" cy="13" r="2"></circle>
</svg>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="relative group font-manrope font-medium text-[0.875rem] text-v_text tracking-[0.01em]" href="#experiences">
            Experiences
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[3px] h-[3px] bg-v_accent scale-0 opacity-0 transition-all duration-[0.2s] ease-spring group-hover:scale-100 group-hover:opacity-100"></span>
</a>
<a className="relative group font-manrope font-medium text-[0.875rem] text-v_text tracking-[0.01em]" href="#rituals">
            Rituals
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[3px] h-[3px] bg-v_accent scale-0 opacity-0 transition-all duration-[0.2s] ease-spring group-hover:scale-100 group-hover:opacity-100"></span>
</a>
<a className="relative group font-manrope font-medium text-[0.875rem] text-v_text tracking-[0.01em]" href="#gallery">
            Spaces
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[3px] h-[3px] bg-v_accent scale-0 opacity-0 transition-all duration-[0.2s] ease-spring group-hover:scale-100 group-hover:opacity-100"></span>
</a>
<a className="relative group font-manrope font-medium text-[0.875rem] text-v_text tracking-[0.01em]" href="#pricing">
            Reserve
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[3px] h-[3px] bg-v_accent scale-0 opacity-0 transition-all duration-[0.2s] ease-spring group-hover:scale-100 group-hover:opacity-100"></span>
</a>
</div>

<div className="hidden md:block">
<a className="relative inline-flex items-center justify-center h-[40px] px-5 border-[1.5px] border-v_black bg-transparent font-mono text-[0.75rem] uppercase tracking-[0.1em] text-v_black transition-all duration-[0.35s] ease-smooth group overflow-hidden active:scale-[0.97]" href="#pricing">
<span className="relative z-10 group-hover:text-v_black transition-colors delay-100">
              Book a Stay
            </span>
<div className="absolute inset-0 bg-v_accent border-v_accent" onmouseout="this.style.clipPath='inset(0 100% 0 0)'" onmouseover="this.style.clipPath='inset(0 0% 0 0)'" style={{clipPath: 'inset(0 100% 0 0)', transition: 'clip-path 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)'}}></div>
</a>
</div>

<button aria-label="Menu" className="md:hidden w10 h10 flex flex-col justify-center gap-[6px] z-[201] relative p-2" id="mobile-menu-btn">
<span className="w-[22px] h-[1.5px] bg-v_black transition-transform duration-[0.4s]"></span>
<span className="w-[22px] h-[1.5px] bg-v_black transition-transform duration-[0.4s]"></span>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-v_white z-[200] translate-x-full transition-transform duration-[0.5s] ease-smooth flex flex-col pt-24 px-8 pb-12" id="mobile-overlay">
<div className="flex flex-col gap-6 text-center mt-auto mb-auto">
<a className="mobile-link opacity-0 translate-y-5 font-syne font-bold text-[clamp(2.25rem,8vw,3.5rem)] text-v_black transition-all duration-500" href="#experiences">
          Experiences
        </a>
<a className="mobile-link opacity-0 translate-y-5 font-syne font-bold text-[clamp(2.25rem,8vw,3.5rem)] text-v_black transition-all duration-500 delay-75" href="#rituals">
          Rituals
        </a>
<a className="mobile-link opacity-0 translate-y-5 font-syne font-bold text-[clamp(2.25rem,8vw,3.5rem)] text-v_black transition-all duration-500 delay-150" href="#gallery">
          Spaces
        </a>
<a className="mobile-link opacity-0 translate-y-5 font-syne font-bold text-[clamp(2.25rem,8vw,3.5rem)] text-v_black transition-all duration-500 delay-[225ms] inline-block bg-v_accent px-4 py-1 self-center" href="#pricing">
          Reserve
        </a>
</div>
<div className="mt-auto text-center font-mono text-[0.75rem] text-v_muted pt-8 border-t border-black/5">
        ROUTE DES VOSGES 14
        <br/>
        +33 3 88 00 14 22
      </div>
</div>

<section className="relative min-h-[100dvh] bg-v_white pt-[80px] overflow-hidden border-b border-black/5">

<div className="absolute inset-0 z-0 bg-swiss-grid pointer-events-none"></div>
<div className="absolute inset-0 z-[1] bg-organic-fallback pointer-events-none opacity-80 mix-blend-multiply"></div>
<svg className="absolute z-[2] right-[-8vw] top-[10vh] w-[clamp(18.75rem,45vw,43.75rem)] h-auto stroke-black/10 stroke-[1.5] fill-none animate-slow-spin pointer-events-none" viewbox="0 0 400 400">
<path d="M 200 50 C 320 60 360 180 340 280 C 310 360 180 380 90 310 C 20 250 40 120 120 70 C 150 50 180 45 200 50 Z"></path>
</svg>

<div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,600px)_minmax(0,380px)_1fr] min-h-[calc(100dvh-80px)] px-[clamp(1.5rem,5vw,4rem)] lg:px-0 gap-x-[clamp(1rem,3vw,3rem)] pb-24 lg:pb-0">

<div className="hidden lg:flex flex-col justify-end items-center col-start-1 row-start-2 row-end-5 pb-32 reveal-fade" style={{animationDelay: '0s'}}>
<div className="-rotate-90 origin-bottom whitespace-nowrap font-mono text-[0.6875rem] text-v_muted tracking-[0.16em]">
            VELSA WELLNESS / EST. 2024
          </div>
</div>

<div className="col-start-1 lg:col-start-2 row-start-2 row-end-4 self-end lg:pb-[clamp(2rem,5vh,4rem)] pt-12 lg:pt-0">

<div className="flex items-center mb-6 reveal-fade" style={{animationDelay: '0s'}}>
<span className="inline-block w-[3px] h-[3px] bg-v_accent mr-2 mb-[2px] align-middle"></span>
<span className="font-mono text-[0.6875rem] text-v_muted tracking-[0.14em] uppercase">
              / 001 / Wellness Hotel
            </span>
</div>

<h1 className="font-syne font-[800] text-[clamp(2.75rem,7vw,6.875rem)] tracking-[-0.04em] leading-[0.92] text-v_black reveal-text-trigger is-revealed">
<span className="word-reveal-wrap">
<span className="word-reveal-inner" style={{transitionDelay: '0.2s'}}>
                Where
              </span>
</span>
<span className="word-reveal-wrap">
<span className="word-reveal-inner" style={{transitionDelay: '0.25s'}}>
                the
              </span>
</span>
<span className="word-reveal-wrap">
<span className="word-reveal-inner" style={{transitionDelay: '0.3s'}}>
                body
              </span>
</span>
<br/>
<span className="word-reveal-wrap">
<span className="word-reveal-inner" style={{transitionDelay: '0.35s'}}>
                learns
              </span>
</span>
<span className="word-reveal-wrap">
<span className="word-reveal-inner" style={{transitionDelay: '0.4s'}}>
                to
              </span>
</span>
<span className="word-reveal-wrap">
<span className="word-reveal-inner transition-colors duration-700" id="hero-accent-word" style={{transitionDelay: '0.45s'}}>
                rest.
              </span>
</span>
</h1>

<p className="mt-7 font-manrope font-light text-[1.125rem] text-v_text max-w-[420px] leading-[1.7] reveal-fade" style={{animationDelay: '0.5s'}}>
            Seven days. Twelve rituals. One uninterrupted silence.
          </p>

<div className="mt-8 flex gap-8 flex-wrap lg:flex-nowrap">
<div className="flex flex-col reveal-fade" style={{animationDelay: '0.7s'}}>
<span className="font-mono text-[1rem] text-v_black">340+</span>
<span className="font-manrope text-[0.75rem] text-v_muted mt-1">
                Guests annually
              </span>
</div>
<div className="w-[1px] bg-[#E0E0E0] hidden lg:block reveal-fade" style={{animationDelay: '0.78s'}}></div>
<div className="flex flex-col reveal-fade" style={{animationDelay: '0.86s'}}>
<span className="font-mono text-[1rem] text-v_black">4.97</span>
<span className="font-manrope text-[0.75rem] text-v_muted mt-1">
                Average rating
              </span>
</div>
<div className="w-[1px] bg-[#E0E0E0] hidden lg:block reveal-fade" style={{animationDelay: '0.94s'}}></div>
<div className="flex flex-col reveal-fade" style={{animationDelay: '1.02s'}}>
<span className="font-mono text-[1rem] text-v_black">12</span>
<span className="font-manrope text-[0.75rem] text-v_muted mt-1">
                Signature rituals
              </span>
</div>
</div>

<div className="mt-10 flex gap-4 flex-wrap reveal-fade" style={{animationDelay: '0.85s'}}>
<a className="inline-flex items-center justify-center h-[52px] px-8 bg-v_accent font-mono text-[0.8125rem] uppercase tracking-[0.09em] text-v_black transition-all duration-300 ease-spring hover:-translate-y-[2px] active:scale-[0.98] active:translate-y-0" href="#pricing" onmouseout="this.style.outlineColor='transparent'" onmouseover="this.style.outlineColor='#111111'" style={{outline: '1.5px solid transparent', outlineOffset: '3px'}}>
              Reserve a Stay
            </a>
<a className="inline-flex items-center justify-center h-[52px] px-6 bg-transparent border-b-[1.5px] border-v_black font-manrope font-medium text-[0.875rem] text-v_black transition-all duration-300 hover:border-v_accent hover:tracking-[0.04em]" href="#rituals">
              Explore the Rituals
            </a>
</div>
</div>

<div className="col-start-1 lg:col-start-3 row-start-1 lg:row-start-1 row-end-5 self-center mt-8 lg:mt-0" id="hero-image" style={{transition: 'all 1.0s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s'}}>
<div className="w-full aspect-[4/5] lg:h-[680px] lg:aspect-auto overflow-hidden bg-[#EAE8E4]">
<img alt="Thermal pool from above" className="w-full h-full object-cover grayscale-[0.2] hover:scale-[1.04] transition-transform duration-[600ms] ease-smooth" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="mt-4 font-mono text-[0.6875rem] text-v_muted">
            THERMAL SUITE · LEVEL 4
          </div>
</div>

<div className="absolute bottom-8 left-[clamp(1.5rem,5vw,4rem)] flex flex-col items-center gap-2 hidden lg:flex">
<span className="font-mono text-[0.625rem] text-[#C0C0C0] tracking-[0.18em] writing-vertical-rl rotate-180">
            SCROLL
          </span>
<div className="w-[1px] h-[48px] bg-gradient-to-b from-[#C0C0C0] to-transparent animate-scroll-line"></div>
</div>
</div>
</section>

<section className="bg-v_light py-10 border-b border-black/5 overflow-hidden marquee-paused flex flex-col gap-6">

<div className="flex w-max relative">
<div className="flex gap-12 items-center px-6 animate-marquee">
<span className="font-mono text-[0.8125rem] text-v_text tracking-[0.08em] whitespace-nowrap">
            CONDÉ NAST TRAVELLER 2024
          </span>
<span className="font-mono text-v_muted">·</span>
<span className="font-mono text-[0.8125rem] text-v_text tracking-[0.08em] whitespace-nowrap">
            WALLPAPER* TOP 50 RETREATS
          </span>
<span className="font-mono text-v_muted">·</span>
<span className="font-mono text-[0.8125rem] text-v_text tracking-[0.08em] whitespace-nowrap">
            DEZEEN AWARDED
          </span>
<span className="font-mono text-v_muted">·</span>
<span className="font-mono text-[0.8125rem] text-v_text tracking-[0.08em] whitespace-nowrap">
            ARCHITECTURAL DIGEST SELECTION
          </span>
<span className="font-mono text-v_muted">·</span>
<span className="font-mono text-[0.8125rem] text-v_text tracking-[0.08em] whitespace-nowrap">
            TATLER SPA AWARD
          </span>
<span className="font-mono text-v_muted">·</span>
</div>
<div className="flex gap-12 items-center px-6 animate-marquee absolute left-full top-0">
<span className="font-mono text-[0.8125rem] text-v_text tracking-[0.08em] whitespace-nowrap">
            CONDÉ NAST TRAVELLER 2024
          </span>
<span className="font-mono text-v_muted">·</span>
<span className="font-mono text-[0.8125rem] text-v_text tracking-[0.08em] whitespace-nowrap">
            WALLPAPER* TOP 50 RETREATS
          </span>
<span className="font-mono text-v_muted">·</span>
<span className="font-mono text-[0.8125rem] text-v_text tracking-[0.08em] whitespace-nowrap">
            DEZEEN AWARDED
          </span>
<span className="font-mono text-v_muted">·</span>
<span className="font-mono text-[0.8125rem] text-v_text tracking-[0.08em] whitespace-nowrap">
            ARCHITECTURAL DIGEST SELECTION
          </span>
<span className="font-mono text-v_muted">·</span>
<span className="font-mono text-[0.8125rem] text-v_text tracking-[0.08em] whitespace-nowrap">
            TATLER SPA AWARD
          </span>
<span className="font-mono text-v_muted">·</span>
</div>
</div>

<div className="flex w-max relative -translate-x-1/4">
<div className="flex gap-12 items-center px-6 animate-marquee-reverse">
<span className="font-manrope text-[0.875rem] italic text-v_muted whitespace-nowrap">
            "Silence is the rarest luxury."
          </span>
<span className="font-manrope text-v_muted">—</span>
<span className="font-manrope text-[0.875rem] italic text-v_muted whitespace-nowrap">
            "The architecture of recovery."
          </span>
<span className="font-manrope text-v_muted">—</span>
<span className="font-manrope text-[0.875rem] italic text-v_muted whitespace-nowrap">
            "Stillness, systematized."
          </span>
<span className="font-manrope text-v_muted">—</span>
<span className="font-manrope text-[0.875rem] italic text-v_muted whitespace-nowrap">
            "Form and ritual, inseparable."
          </span>
<span className="font-manrope text-v_muted">—</span>
<span className="font-manrope text-[0.875rem] italic text-v_muted whitespace-nowrap">
            "Nordic precision. Primal warmth."
          </span>
<span className="font-manrope text-v_muted">—</span>
</div>
<div className="flex gap-12 items-center px-6 animate-marquee-reverse absolute left-full top-0">
<span className="font-manrope text-[0.875rem] italic text-v_muted whitespace-nowrap">
            "Silence is the rarest luxury."
          </span>
<span className="font-manrope text-v_muted">—</span>
<span className="font-manrope text-[0.875rem] italic text-v_muted whitespace-nowrap">
            "The architecture of recovery."
          </span>
<span className="font-manrope text-v_muted">—</span>
<span className="font-manrope text-[0.875rem] italic text-v_muted whitespace-nowrap">
            "Stillness, systematized."
          </span>
<span className="font-manrope text-v_muted">—</span>
<span className="font-manrope text-[0.875rem] italic text-v_muted whitespace-nowrap">
            "Form and ritual, inseparable."
          </span>
<span className="font-manrope text-v_muted">—</span>
<span className="font-manrope text-[0.875rem] italic text-v_muted whitespace-nowrap">
            "Nordic precision. Primal warmth."
          </span>
<span className="font-manrope text-v_muted">—</span>
</div>
</div>
</section>

<section className="bg-v_white py-[clamp(5rem,12vh,10rem)] px-[clamp(1.5rem,8vw,7.5rem)] border-b border-black/5">
<div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-[clamp(2rem,6vw,6rem)] items-start">

<div className="hidden lg:flex flex-col gap-16 sticky top-[120px]">
<span className="font-mono text-[0.6875rem] text-[#C0C0C0] tracking-[0.3em] -rotate-90 origin-bottom-left absolute top-12 -left-6">
            WE ARE
          </span>
<svg className="w-20 h-20 stroke-v_black fill-none" viewbox="0 0 40 40">
<path d="M 8 20 C 8 8, 20 6, 20 6 C 32 6, 32 20, 32 20 C 32 32, 20 34, 20 34 C 8 34, 8 20, 8 20 Z" strokeLinecap="round" strokeWidth="1.8"></path>
<path d="M 13 28 C 16 22, 20 16, 22 13 C 25 18, 27 20, 29 22" strokeLinecap="round" strokeWidth="1.8"></path>
<circle className="fill-v_black stroke-none" cx="22" cy="13" r="2"></circle>
</svg>
</div>

<div>
<div className="flex items-center mb-6">
<span className="inline-block w-[3px] h-[3px] bg-v_accent mr-2 mb-[2px] align-middle"></span>
<span className="font-mono text-[0.6875rem] text-v_muted tracking-[0.14em] uppercase">
              / 002 / Philosophy
            </span>
</div>
<h2 className="font-syne font-[700] text-[clamp(2.25rem,4.5vw,4rem)] tracking-[-0.03em] leading-tight text-v_black max-w-[820px] reveal-text-trigger is-revealed">
<span className="word-reveal-wrap">
<span className="word-reveal-inner" style={{transitionDelay: '0.1s'}}>
                Luxury
              </span>
</span>
<span className="word-reveal-wrap">
<span className="word-reveal-inner" style={{transitionDelay: '0.15s'}}>
                is
              </span>
</span>
<span className="word-reveal-wrap">
<span className="word-reveal-inner" style={{transitionDelay: '0.2s'}}>
                the
              </span>
</span>
<span className="word-reveal-wrap">
<span className="word-reveal-inner" style={{transitionDelay: '0.25s'}}>
                space
              </span>
</span>
<span className="word-reveal-wrap">
<span className="word-reveal-inner text-gradient-accent" style={{transitionDelay: '0.3s'}}>
                between
              </span>
</span>
<span className="word-reveal-wrap">
<span className="word-reveal-inner" style={{transitionDelay: '0.35s'}}>
                stimulus
              </span>
</span>
<span className="word-reveal-wrap">
<span className="word-reveal-inner" style={{transitionDelay: '0.4s'}}>
                and
              </span>
</span>
<span className="word-reveal-wrap">
<span className="word-reveal-inner" style={{transitionDelay: '0.45s'}}>
                response.
              </span>
</span>
</h2>
<div className="mt-10 md:columns-2 gap-12 text-[1.0625rem] text-v_text font-manrope font-light leading-[1.8] reveal-stagger">
<p className="mb-6 break-inside-avoid">
              Velsa was built on a single conviction: that restoration is not a
              weekend activity — it is a discipline. Our seven-acre estate in
              the Vosges foothills was designed by Studio Norm to remove every
              visual unnecessary. Stone, light, water, silence. Arranged with
              intention.
            </p>
<p className="break-inside-avoid">
              Twelve distinct rituals map the nervous system's journey from
              activation to deep rest. Not wellness as trend. Wellness as
              architecture. Each guest arrives with a tension profile, leaves
              with a protocol. We do not offer relaxation. We offer a repeatable
              practice.
            </p>
</div>
<div className="mt-14 flex items-center flex-wrap gap-4 reveal-stagger">
<div className="font-syne font-[800] text-[clamp(4rem,9vw,7.5rem)] text-v_black leading-none">
<span id="vision-counter">94</span>
<span className="text-v_accent">.3%</span>
</div>
<div className="font-manrope font-light text-[1rem] text-v_muted max-w-[260px] pt-4 lg:pt-0">
              of guests return within 18 months
            </div>
</div>
</div>
</div>
</section>

<section className="bg-v_stone py-[clamp(5rem,12vh,8.75rem)] px-[clamp(1.5rem,5vw,4rem)] border-b border-black/5" id="experiences">
<div className="max-w-[1440px] mx-auto">
<div className="flex items-center mb-10">
<span className="inline-block w-[3px] h-[3px] bg-v_accent mr-2 mb-[2px] align-middle"></span>
<span className="font-mono text-[0.6875rem] text-v_muted tracking-[0.14em] uppercase">
            / 003 / Experiences
          </span>
</div>

<div className="expander-container flex flex-col md:flex-row gap-[3px] rounded-none overflow-hidden bg-v_stone h-auto md:h-[clamp(30rem,65vh,45rem)]">

<div className="expander-panel relative group overflow-hidden cursor-pointer bg-[#2A2A2A]" onclick="toggleMobileAccordion(this)" style={{flex: '5'}}>
<img alt="Thermal" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 flex items-center justify-center opacity-100 md:opacity-0 transition-opacity duration-300 md:group-hover:opacity-0 bg-black/20">
<span className="font-mono text-[0.6875rem] text-white tracking-[0.2em] md:-rotate-90">
                THERMAL
              </span>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-100 md:opacity-0 transition-opacity duration-500 md:group-hover:opacity-100 flex flex-col justify-end p-8">
<h3 className="font-syne font-[700] text-3xl text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                THE THERMAL CIRCUIT
              </h3>
<p className="font-manrope font-light text-[0.9375rem] text-white/75 mt-3 max-w-[400px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 hidden md:block">
                Four pools. Twelve degrees to sixty-two. A forty-minute circuit
                that recalibrates the autonomic nervous system through
                controlled thermal contrast.
              </p>
<span className="font-mono text-[0.75rem] text-white mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 hidden md:inline-block">
                Explore →
              </span>
</div>
</div>

<div className="expander-panel relative group overflow-hidden cursor-pointer bg-[#3A3A3A]" onclick="toggleMobileAccordion(this)">
<img alt="Stone" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]" src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-100 md:group-hover:opacity-0 transition-opacity duration-300 bg-black/20">
<span className="font-mono text-[0.6875rem] text-white tracking-[0.2em] md:-rotate-90">
                STONE
              </span>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
<h3 className="font-syne font-[700] text-3xl text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                THE STONE ROOMS
              </h3>
<p className="font-manrope font-light text-[0.9375rem] text-white/75 mt-3 max-w-[400px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 hidden md:block">
                Eight private treatment rooms hewn from Vosges sandstone.
                Sound-dampening walls. Regulated humidity. The silence here has
                a texture.
              </p>
<span className="font-mono text-[0.75rem] text-white mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 hidden md:inline-block">
                Explore →
              </span>
</div>
</div>

<div className="expander-panel relative group overflow-hidden cursor-pointer bg-[#4A4A4A]" onclick="toggleMobileAccordion(this)">
<img alt="Sauna" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]" src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-100 md:group-hover:opacity-0 transition-opacity duration-300 bg-black/20">
<span className="font-mono text-[0.6875rem] text-white tracking-[0.2em] md:-rotate-90">
                SAUNA
              </span>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
<h3 className="font-syne font-[700] text-3xl text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                THE BIRCH SAUNAS
              </h3>
<p className="font-manrope font-light text-[0.9375rem] text-white/75 mt-3 max-w-[400px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 hidden md:block">
                Finnish löyly protocol. 85°C dry heat, birch whisk bundle, cold
                plunge succession. Three sauna chambers, each tuned to a
                different humidity expression.
              </p>
<span className="font-mono text-[0.75rem] text-white mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 hidden md:inline-block">
                Explore →
              </span>
</div>
</div>

<div className="expander-panel relative group overflow-hidden cursor-pointer bg-[#1A1A1A]" onclick="toggleMobileAccordion(this)">
<img alt="Float" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center opacity-100 md:group-hover:opacity-0 transition-opacity duration-300 bg-black/20">
<span className="font-mono text-[0.6875rem] text-white tracking-[0.2em] md:-rotate-90">
                FLOAT
              </span>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
<h3 className="font-syne font-[700] text-3xl text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                THE FLOATATION PODS
              </h3>
<p className="font-manrope font-light text-[0.9375rem] text-white/75 mt-3 max-w-[400px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 hidden md:block">
                Zero-gravity sensory deprivation. Epsom salt solution at body
                temperature. Ninety minutes of complete proprioceptive silence.
                The most advanced rest available.
              </p>
<span className="font-mono text-[0.75rem] text-white mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 hidden md:inline-block">
                Explore →
              </span>
</div>
</div>

<div className="expander-panel relative group overflow-hidden cursor-pointer bg-[#5A5A5A]" onclick="toggleMobileAccordion(this)">
<img alt="Light" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]" src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-100 md:group-hover:opacity-0 transition-opacity duration-300 bg-black/20">
<span className="font-mono text-[0.6875rem] text-white tracking-[0.2em] md:-rotate-90">
                LIGHT
              </span>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
<h3 className="font-syne font-[700] text-3xl text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                THE LIGHT ROOMS
              </h3>
<p className="font-manrope font-light text-[0.9375rem] text-white/75 mt-3 max-w-[400px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 hidden md:block">
                Circadian light therapy calibrated to the guest's chronotype.
                Morning protocol activates cortisol correctly. Evening protocol
                prepares melatonin onset. Sleep architecture, redesigned.
              </p>
<span className="font-mono text-[0.75rem] text-white mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 hidden md:inline-block">
                Explore →
              </span>
</div>
</div>
</div>
<div className="mt-10 text-center font-mono text-[0.75rem] text-v_muted">
          ALL EXPERIENCES INCLUDED IN SEVEN-DAY RESIDENCY PACKAGES
        </div>
</div>
</section>

<section className="bg-v_white py-[clamp(5rem,12vh,8.75rem)] border-b border-black/5 overflow-hidden" id="rituals">
<div className="px-[clamp(1.5rem,8vw,7.5rem)] max-w-[1440px] mx-auto mb-16">
<div className="flex items-center mb-6">
<span className="inline-block w-[3px] h-[3px] bg-v_accent mr-2 mb-[2px] align-middle"></span>
<span className="font-mono text-[0.6875rem] text-v_muted tracking-[0.14em] uppercase">
            / 004 / The Method
          </span>
</div>
<h2 className="font-syne font-[700] text-[clamp(2.25rem,4.5vw,4rem)] tracking-[-0.03em] text-v_black max-w-[640px]">
<span className="text-gradient-accent">Twelve</span>
          rituals. One coherent arc.
        </h2>
<p className="font-manrope font-light text-[1.0625rem] text-v_text max-w-[520px] mt-4">
          Every stay follows a designed nervous-system protocol — from deep
          activation to complete recovery.
        </p>
</div>

<div className="flex gap-6 px-[clamp(1.5rem,8vw,7.5rem)] overflow-x-auto pb-12 snap-x no-scrollbar cursor-grab active:cursor-grabbing" id="rituals-carousel">


</div>
</section>

<section className="bg-v_dark pt-[clamp(5rem,12vh,8.75rem)] px-[clamp(1.5rem,5vw,4rem)] pb-0" id="gallery">
<div className="max-w-[1440px] mx-auto">
<div className="flex items-center mb-6">
<span className="inline-block w-[3px] h-[3px] bg-v_accent mr-2 mb-[2px] align-middle"></span>
<span className="font-mono text-[0.6875rem] text-white/30 tracking-[0.14em] uppercase">
            / 005 / The Estate
          </span>
</div>
<h2 className="font-syne font-[700] text-[clamp(2.25rem,4.5vw,4rem)] text-[#F0F0EE]">
          Seven acres of designed absence.
        </h2>
<p className="font-manrope font-light text-[1rem] text-white/50 max-w-[480px] mt-4">
          The estate was commissioned with a single brief: remove everything
          that does not serve recovery.
        </p>
<div className="gallery-grid mt-14 reveal-stagger">
<div className="g-cell-a relative overflow-hidden group">
<img alt="Estate night" className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 pointer-events-none">
<span className="font-mono text-[0.75rem] text-white">
                EXTERIOR · NIGHT
              </span>
</div>
</div>
<div className="relative overflow-hidden group">
<img alt="Stones" className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 pointer-events-none">
<span className="font-mono text-[0.75rem] text-white">
                RITUAL ELEMENTS
              </span>
</div>
</div>
<div className="relative overflow-hidden group">
<img alt="Corridor" className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 pointer-events-none">
<span className="font-mono text-[0.75rem] text-white">
                BIRCH CORRIDOR
              </span>
</div>
</div>
<div className="bg-v_card_dark p-8 flex flex-col justify-end border border-white/5">
<span className="font-mono text-[0.6875rem] text-white/40 mb-2">
              BUILT 2021
            </span>
<h3 className="font-syne font-[700] text-[1.375rem] text-[#F0F0EE]">
              Studio Norm
            </h3>
<p className="font-manrope font-light text-[0.875rem] text-white/50 mt-1">
              Architecture &amp; interiors
            </p>
<iconify-icon className="text-v_accent mt-6 text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="relative overflow-hidden group">
<img alt="Plunge pool" className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.03] grayscale-[0.5]" src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 pointer-events-none">
<span className="font-mono text-[0.75rem] text-white">
                COLD PLUNGE
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-v_light py-[clamp(5rem,12vh,8.75rem)] px-[clamp(1.5rem,5vw,4rem)] border-b border-black/5">
<div className="max-w-[1440px] mx-auto">
<div className="flex items-center mb-6">
<span className="inline-block w-[3px] h-[3px] bg-v_accent mr-2 mb-[2px] align-middle"></span>
<span className="font-mono text-[0.6875rem] text-v_muted tracking-[0.14em] uppercase">
            / 006 / Guest Accounts
          </span>
</div>
<h2 className="font-syne font-[700] text-[clamp(2rem,4vw,3.5rem)] text-v_black max-w-[680px]">
          Forty-seven hours in. Sleep quality: transformed.
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 reveal-stagger">

<div className="flex flex-col gap-6 md:mt-0">
<div className="spotlight-card bg-v_white border border-black/5 p-9 rounded-none" onmousemove="updateSpotlight(event, this)">
<div className="relative z-10">
<p className="font-manrope font-light text-[0.9375rem] text-v_text leading-[1.8] mb-6">
                  "I have done Chiva-Som, Sha, and Clinique La Prairie. Velsa is
                  categorically different. Within 36 hours my HRV had shifted 14
                  points. My Oura ring data doesn't lie."
                </p>
<p className="font-manrope font-medium text-[0.875rem] text-v_black">
                  Miriam Kessler
                  <span className="font-light text-v_muted block mt-1">
                    Chief Medical Officer, Zurich
                  </span>
</p>
<p className="font-mono text-[0.6875rem] text-v_muted mt-4">
                  5-day Residency, October 2024
                </p>
</div>
</div>
<div className="spotlight-card bg-v_white border border-black/5 p-9 rounded-none" onmousemove="updateSpotlight(event, this)">
<div className="relative z-10">
<p className="font-manrope font-light text-[0.9375rem] text-v_text leading-[1.8] mb-6">
                  "The thermal circuit changed my relationship to discomfort
                  permanently. Cold exposure went from something I avoided to
                  something I seek. That's not a retreat result — that's a
                  behavioral shift."
                </p>
<p className="font-manrope font-medium text-[0.875rem] text-v_black">
                  Lars Dybdahl
                  <span className="font-light text-v_muted block mt-1">
                    Director of Engineering, Copenhagen
                  </span>
</p>
<p className="font-mono text-[0.6875rem] text-v_muted mt-4">
                  5-day Residency, November 2024
                </p>
</div>
</div>
</div>

<div className="flex flex-col gap-6 md:mt-12">
<div className="spotlight-card bg-v_white border border-black/5 p-9 rounded-none" onmousemove="updateSpotlight(event, this)">
<div className="relative z-10">
<p className="font-manrope font-light text-[0.9375rem] text-v_text leading-[1.8] mb-6">
                  "The silence is designed. Not just the absence of noise — the
                  architecture itself absorbs stimulus. I slept 9.2 hours on
                  night three without pharmaceutical assistance. First time in
                  six years."
                </p>
<p className="font-manrope font-medium text-[0.875rem] text-v_black">
                  Tomas Andersson
                  <span className="font-light text-v_muted block mt-1">
                    Architect, Stockholm
                  </span>
</p>
<p className="font-mono text-[0.6875rem] text-v_muted mt-4">
                  7-day Residency, August 2024
                </p>
</div>
</div>
<div className="spotlight-card bg-v_white border border-black/5 p-9 rounded-none" onmousemove="updateSpotlight(event, this)">
<div className="relative z-10">
<p className="font-manrope font-light text-[0.9375rem] text-v_text leading-[1.8] mb-6">
                  "Watsu on day five was a physiological experience unlike
                  anything in my 20 years of wellness practice. If you know, you
                  know. If you don't — you will."
                </p>
<p className="font-manrope font-medium text-[0.875rem] text-v_black">
                  Dr. Isabelle Fontaine
                  <span className="font-light text-v_muted block mt-1">
                    Sports Physiotherapist, Lyon
                  </span>
</p>
<p className="font-mono text-[0.6875rem] text-v_muted mt-4">
                  5-day Residency, July 2024
                </p>
</div>
</div>
</div>

<div className="flex flex-col gap-6 md:mt-6">
<div className="spotlight-card bg-v_white border border-black/5 p-9 rounded-none" onmousemove="updateSpotlight(event, this)">
<div className="relative z-10">
<p className="font-manrope font-light text-[0.9375rem] text-v_text leading-[1.8] mb-6">
                  "I came burned out. I left with a 12-page protocol and the
                  conviction that burnout is a solvable problem. The departure
                  session alone was worth the entire stay."
                </p>
<p className="font-manrope font-medium text-[0.875rem] text-v_black">
                  Hana Murata
                  <span className="font-light text-v_muted block mt-1">
                    Partner, McKinsey Tokyo
                  </span>
</p>
<p className="font-mono text-[0.6875rem] text-v_muted mt-4">
                  7-day Residency, September 2024
                </p>
</div>
</div>
<div className="spotlight-card bg-v_white border border-black/5 p-9 rounded-none" onmousemove="updateSpotlight(event, this)">
<div className="relative z-10">
<p className="font-manrope font-light text-[0.9375rem] text-v_text leading-[1.8] mb-6">
                  "The integration day on day six felt counterintuitive. A full
                  day with nothing scheduled. By 2pm I understood what they were
                  doing. By 6pm I felt it. Three months later I protect one day
                  per month as mine. Unchanged."
                </p>
<p className="font-manrope font-medium text-[0.875rem] text-v_black">
                  Ravi Srinivasan
                  <span className="font-light text-v_muted block mt-1">
                    Founder, Bangalore
                  </span>
</p>
<p className="font-mono text-[0.6875rem] text-v_muted mt-4">
                  7-day Residency, December 2024
                </p>
</div>
</div>
</div>
</div>
<div className="mt-14 pt-12 border-t border-black/5 flex gap-12 lg:gap-16 flex-wrap reveal-fade">
<div className="flex items-center gap-4">
<span className="font-mono text-[1.375rem] text-v_black">
              4.97 / 5.0
            </span>
<span className="font-manrope text-[0.875rem] text-v_muted max-w-[120px] leading-tight">
              Average rating across 340 stays
            </span>
</div>
<div className="flex items-center gap-4">
<span className="font-mono text-[1.375rem] text-v_accent bg-v_black px-2">
              94.3%
            </span>
<span className="font-manrope text-[0.875rem] text-v_muted max-w-[120px] leading-tight">
              Return within 18 months
            </span>
</div>
<div className="flex items-center gap-4">
<span className="font-mono text-[1.375rem] text-v_black">12</span>
<span className="font-manrope text-[0.875rem] text-v_muted max-w-[120px] leading-tight">
              Signature rituals, zero filler
            </span>
</div>
</div>
</div>
</section>

<section className="bg-v_stone py-[clamp(5rem,12vh,8.75rem)] px-[clamp(1.5rem,5vw,4rem)] border-b border-black/5" id="pricing">
<div className="max-w-[1440px] mx-auto">
<div className="flex items-center mb-6">
<span className="inline-block w-[3px] h-[3px] bg-v_accent mr-2 mb-[2px] align-middle"></span>
<span className="font-mono text-[0.6875rem] text-v_muted tracking-[0.14em] uppercase">
            / 007 / Residency Packages
          </span>
</div>
<h2 className="font-syne font-[700] text-[clamp(2.25rem,4.5vw,4rem)] text-v_black">
          Three durations. One depth.
        </h2>
<p className="font-manrope font-light text-[1.0625rem] text-v_text max-w-[540px] mt-4">
          All packages are full-residency. Transport, accommodation, all twelve
          rituals, and your personal departure protocol are included.
        </p>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-[2px] mt-14">

<div className="conic-card bg-v_white p-[clamp(2rem,4vw,3rem)] cursor-pointer group">
<div className="conic-content flex flex-col h-full">
<span className="font-mono text-[0.6875rem] text-v_muted">
                5 NIGHTS / 6 DAYS
              </span>
<h3 className="font-syne font-[800] text-[clamp(2.5rem,5vw,4rem)] text-v_black mt-2">
                €4,200
              </h3>
<span className="font-manrope font-light text-[0.875rem] text-v_muted">
                per person, double occupancy
              </span>
<hr className="my-6 border-black/5"/>
<ul className="font-manrope font-light text-[0.9375rem] text-v_text leading-[2] mb-10 flex-grow">
<li className="flex items-center gap-3">
<span className="w-[3px] h-[3px] bg-v_black"></span>
                  5 thermal circuit sessions
                </li>
<li className="flex items-center gap-3">
<span className="w-[3px] h-[3px] bg-v_black"></span>
                  3 signature body treatments
                </li>
<li className="flex items-center gap-3">
<span className="w-[3px] h-[3px] bg-v_black"></span>
                  Floatation protocol
                </li>
<li className="flex items-center gap-3">
<span className="w-[3px] h-[3px] bg-v_black"></span>
                  Circadian light therapy
                </li>
<li className="flex items-center gap-3">
<span className="w-[3px] h-[3px] bg-v_black"></span>
                  Departure maintenance protocol
                </li>
<li className="flex items-center gap-3">
<span className="w-[3px] h-[3px] bg-v_black"></span>
                  All meals included
                </li>
</ul>
<button className="h-[48px] w-full border-[1.5px] border-v_black font-mono text-[0.75rem] uppercase text-v_black transition-colors group-hover:bg-v_black group-hover:text-v_white mt-auto">
                Reserve Essential
              </button>
</div>
</div>

<div className="conic-card bg-v_black p-[clamp(2rem,4vw,3rem)] cursor-pointer group">

<style>
              .conic-card.bg-v_black::after { background: #111111; }
            </style>
<div className="conic-content flex flex-col h-full">
<div className="flex justify-between items-start">
<span className="font-mono text-[0.6875rem] text-white/40">
                  7 NIGHTS / 8 DAYS
                </span>
<span className="font-mono text-[0.625rem] bg-v_accent text-v_black px-2 py-1 tracking-[0.1em]">
                  MOST CHOSEN
                </span>
</div>
<h3 className="font-syne font-[800] text-[clamp(2.5rem,5vw,4rem)] text-white mt-2">
                €6,800
              </h3>
<span className="font-manrope font-light text-[0.875rem] text-white/40">
                per person, double occupancy
              </span>
<hr className="my-6 border-white/10"/>
<ul className="font-manrope font-light text-[0.9375rem] text-white/70 leading-[2] mb-10 flex-grow">
<li className="flex items-center gap-3">
<span className="w-[3px] h-[3px] bg-v_accent shadow-[0_0_8px_#B8FF4A]"></span>
                  7 thermal circuit sessions
                </li>
<li className="flex items-center gap-3">
<span className="w-[3px] h-[3px] bg-v_accent shadow-[0_0_8px_#B8FF4A]"></span>
                  5 signature body treatments
                </li>
<li className="flex items-center gap-3">
<span className="w-[3px] h-[3px] bg-v_accent shadow-[0_0_8px_#B8FF4A]"></span>
                  2 Watsu aquatic sessions
                </li>
<li className="flex items-center gap-3">
<span className="w-[3px] h-[3px] bg-v_accent shadow-[0_0_8px_#B8FF4A]"></span>
                  Löyly ceremony
                </li>
<li className="flex items-center gap-3">
<span className="w-[3px] h-[3px] bg-v_accent shadow-[0_0_8px_#B8FF4A]"></span>
                  Integration silence day
                </li>
<li className="flex items-center gap-3">
<span className="w-[3px] h-[3px] bg-v_accent shadow-[0_0_8px_#B8FF4A]"></span>
                  Personalized nutrition protocol
                </li>
<li className="flex items-center gap-3">
<span className="w-[3px] h-[3px] bg-v_accent shadow-[0_0_8px_#B8FF4A]"></span>
                  Departure protocol + follow-up
                </li>
</ul>
<button className="h-[48px] w-full bg-v_accent font-mono text-[0.75rem] uppercase text-v_black transition-all group-hover:-translate-y-[2px]" onmouseout="this.style.outlineColor='transparent'" onmouseover="this.style.outlineColor='#B8FF4A'" style={{outline: '1.5px solid transparent', outlineOffset: '3px'}}>
                Reserve Signature
              </button>
</div>
</div>

<div className="conic-card bg-v_white p-[clamp(2rem,4vw,3rem)] cursor-pointer group">
<div className="conic-content flex flex-col h-full">
<span className="font-mono text-[0.6875rem] text-v_muted">
                14 NIGHTS / 15 DAYS
              </span>
<h3 className="font-syne font-[800] text-[clamp(2.5rem,5vw,4rem)] text-v_black mt-2">
                €12,400
              </h3>
<span className="font-manrope font-light text-[0.875rem] text-v_muted">
                per person, double occupancy
              </span>
<hr className="my-6 border-black/5"/>
<ul className="font-manrope font-light text-[0.9375rem] text-v_text leading-[2] mb-10 flex-grow">
<li className="flex items-center gap-3 font-medium text-v_black">
<span className="w-[3px] h-[3px] bg-v_black"></span>
                  All Signature inclusions
                </li>
<li className="flex items-center gap-3">
<span className="w-[3px] h-[3px] bg-v_black"></span>
                  Biomechanical full assessment
                </li>
<li className="flex items-center gap-3">
<span className="w-[3px] h-[3px] bg-v_black"></span>
                  Personal osteopath sessions x4
                </li>
<li className="flex items-center gap-3">
<span className="w-[3px] h-[3px] bg-v_black"></span>
                  Sleep architecture program
                </li>
<li className="flex items-center gap-3">
<span className="w-[3px] h-[3px] bg-v_black"></span>
                  Private chef nutrition day
                </li>
<li className="flex items-center gap-3">
<span className="w-[3px] h-[3px] bg-v_black"></span>
                  Partner protocol (split stays)
                </li>
</ul>
<button className="h-[48px] w-full border-[1.5px] border-v_black font-mono text-[0.75rem] uppercase text-v_black transition-colors group-hover:bg-v_black group-hover:text-v_white mt-auto">
                Reserve Residency
              </button>
</div>
</div>
</div>
<div className="mt-8 text-center">
<p className="font-mono text-[0.75rem] text-v_muted">
            Prices include VAT. Single occupancy: add 30%. Group of 4+: 12%
            discount. Gift residencies available.
          </p>
<a className="font-mono text-[0.75rem] text-v_black border-b border-v_black inline-block mt-2 hover:text-v_accent hover:border-v_accent transition-colors" href="#">
            View all inclusions
          </a>
</div>

<div className="mt-24 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8">

<div className="bg-v_dark border border-white/5 p-8 lg:p-10 w-full max-w-[680px]">
<span className="font-mono text-[0.75rem] text-white/40 mb-6 block">
              BUILD YOUR RITUAL ARC
            </span>
<div className="flex flex-col gap-6" id="arc-builder">
<div>
<span className="font-mono text-[0.625rem] text-white/30 block mb-2">
                  DURATION
                </span>
<div className="flex flex-wrap gap-2 builder-group" data-group="duration">
<button className="h-[40px] px-5 border border-white/10 bg-transparent rounded-none font-mono text-[0.6875rem] text-white/50 transition-colors btn-active border-v_accent text-v_accent bg-[rgba(184,255,74,0.08)]" data-val="5">
                    5 DAYS
                  </button>
<button className="h-[40px] px-5 border border-white/10 bg-transparent rounded-none font-mono text-[0.6875rem] text-white/50 transition-colors hover:border-white/30" data-val="7">
                    7 DAYS
                  </button>
<button className="h-[40px] px-5 border border-white/10 bg-transparent rounded-none font-mono text-[0.6875rem] text-white/50 transition-colors hover:border-white/30" data-val="14">
                    14 DAYS
                  </button>
</div>
</div>
<div>
<span className="font-mono text-[0.625rem] text-white/30 block mb-2">
                  FOCUS AREA
                </span>
<div className="flex flex-wrap gap-2 builder-group" data-group="focus">
<button className="h-[40px] px-5 border border-white/10 bg-transparent rounded-none font-mono text-[0.6875rem] text-white/50 transition-colors btn-active border-v_accent text-v_accent bg-[rgba(184,255,74,0.08)]" data-val="rest">
                    DEEP REST
                  </button>
<button className="h-[40px] px-5 border border-white/10 bg-transparent rounded-none font-mono text-[0.6875rem] text-white/50 transition-colors hover:border-white/30" data-val="body">
                    BODY RESET
                  </button>
<button className="h-[40px] px-5 border border-white/10 bg-transparent rounded-none font-mono text-[0.6875rem] text-white/50 transition-colors hover:border-white/30" data-val="mind">
                    MIND CLARITY
                  </button>
<button className="h-[40px] px-5 border border-white/10 bg-transparent rounded-none font-mono text-[0.6875rem] text-white/50 transition-colors hover:border-white/30" data-val="sleep">
                    SLEEP REPAIR
                  </button>
</div>
</div>
<div>
<span className="font-mono text-[0.625rem] text-white/30 block mb-2">
                  ARRIVAL CONCERN
                </span>
<div className="flex flex-wrap gap-2 builder-group" data-group="concern">
<button className="h-[40px] px-5 border border-white/10 bg-transparent rounded-none font-mono text-[0.6875rem] text-white/50 transition-colors btn-active border-v_accent text-v_accent bg-[rgba(184,255,74,0.08)]" data-val="burnout">
                    BURNOUT
                  </button>
<button className="h-[40px] px-5 border border-white/10 bg-transparent rounded-none font-mono text-[0.6875rem] text-white/50 transition-colors hover:border-white/30" data-val="tension">
                    CHRONIC TENSION
                  </button>
<button className="h-[40px] px-5 border border-white/10 bg-transparent rounded-none font-mono text-[0.6875rem] text-white/50 transition-colors hover:border-white/30" data-val="sleep">
                    SLEEP DISORDER
                  </button>
</div>
</div>
</div>

<div className="mt-8 pt-8 border-t border-white/5 transition-opacity duration-300" id="arc-output">
<h4 className="font-syne font-[700] text-[1.75rem] text-[#F0F0EE]" id="arc-title">
                The Recovery Arc
              </h4>
<ul className="font-mono text-[0.875rem] text-white/70 mt-4 flex flex-col gap-2" id="arc-rituals">
<li className="flex items-center gap-3">
<span className="w-[3px] h-[3px] bg-v_accent"></span>
                  Thermal Circuit × 5
                </li>
<li className="flex items-center gap-3">
<span className="w-[3px] h-[3px] bg-v_accent"></span>
                  Floatation × 2
                </li>
<li className="flex items-center gap-3">
<span className="w-[3px] h-[3px] bg-v_accent"></span>
                  Integration Silence Day
                </li>
<li className="flex items-center gap-3">
<span className="w-[3px] h-[3px] bg-v_accent"></span>
                  Departure Protocol
                </li>
</ul>
<div className="mt-8 flex items-center justify-between">
<span className="font-mono text-[1.25rem] text-v_accent" id="arc-price">
                  €6,800
                </span>
<button className="h-[40px] px-6 bg-v_accent font-mono text-[0.75rem] uppercase text-v_black transition-transform hover:-translate-y-[2px]" onmouseout="this.style.outlineColor='transparent'" onmouseover="this.style.outlineColor='#B8FF4A'" style={{outline: '1px solid transparent', outlineOffset: '2px'}}>
                  Reserve This Arc
                </button>
</div>
</div>
</div>

<div className="bg-v_white border border-black/10 p-7 w-full lg:w-[clamp(20rem,40vw,26.25rem)] h-fit self-start">
<div className="flex items-center justify-between mb-6">
<button aria-label="Previous Month" className="w-6 h-6 flex items-center justify-center hover:bg-black/5">
<iconify-icon icon="solar:alt-arrow-left-linear" strokeWidth="1.5"></iconify-icon>
</button>
<span className="font-mono text-[0.75rem] text-v_black tracking-widest">
                JANUARY 2025
              </span>
<button aria-label="Next Month" className="w-6 h-6 flex items-center justify-center hover:bg-black/5">
<iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-7 gap-[2px] mb-2 text-center">
<span className="font-mono text-[0.625rem] text-v_muted tracking-[0.08em]">
                MO
              </span>
<span className="font-mono text-[0.625rem] text-v_muted tracking-[0.08em]">
                TU
              </span>
<span className="font-mono text-[0.625rem] text-v_muted tracking-[0.08em]">
                WE
              </span>
<span className="font-mono text-[0.625rem] text-v_muted tracking-[0.08em]">
                TH
              </span>
<span className="font-mono text-[0.625rem] text-v_muted tracking-[0.08em]">
                FR
              </span>
<span className="font-mono text-[0.625rem] text-v_muted tracking-[0.08em]">
                SA
              </span>
<span className="font-mono text-[0.625rem] text-v_muted tracking-[0.08em]">
                SU
              </span>
</div>
<div className="grid grid-cols-7 gap-[2px] font-mono text-[0.8125rem]" id="cal-grid">
<div></div>
<div></div>
<div className="aspect-square flex items-center justify-center text-[0.75rem] bg-[#D0D0D0] text-white cursor-not-allowed">
                1
              </div>
<div className="aspect-square flex items-center justify-center text-[0.75rem] bg-[#D0D0D0] text-white cursor-not-allowed">
                2
              </div>
<div className="aspect-square flex items-center justify-center text-[0.75rem] bg-[#D0D0D0] text-white cursor-not-allowed">
                3
              </div>
<div className="aspect-square flex items-center justify-center text-[0.75rem] bg-[#D0D0D0] text-white cursor-not-allowed">
                4
              </div>
<div className="aspect-square flex items-center justify-center text-[0.75rem] bg-[#D0D0D0] text-white cursor-not-allowed">
                5
              </div>
<div className="aspect-square flex items-center justify-center text-[0.75rem] bg-[#D0D0D0] text-white cursor-not-allowed">
                6
              </div>
<div className="aspect-square flex items-center justify-center text-[0.75rem] bg-transparent border border-black/5 text-v_black cursor-pointer hover:border-v_black">
                7
              </div>
<div className="aspect-square flex items-center justify-center text-[0.75rem] bg-transparent border border-black/5 text-v_black cursor-pointer hover:border-v_black">
                8
              </div>
<div className="aspect-square flex items-center justify-center text-[0.75rem] bg-v_accent text-v_black cursor-pointer hover:bg-[#a6e642]">
                9
              </div>
<div className="aspect-square flex items-center justify-center text-[0.75rem] bg-transparent border border-black/5 text-v_black cursor-pointer hover:border-v_black">
                10
              </div>
<div className="aspect-square flex items-center justify-center text-[0.75rem] bg-transparent border border-black/5 text-v_black cursor-pointer hover:border-v_black">
                11
              </div>
<div className="aspect-square flex items-center justify-center text-[0.75rem] bg-[#D0D0D0] text-white cursor-not-allowed">
                12
              </div>
<div className="aspect-square flex items-center justify-center text-[0.75rem] bg-transparent border border-black/5 text-v_black cursor-pointer hover:border-v_black">
                13
              </div>
<div className="aspect-square flex items-center justify-center text-[0.75rem] bg-transparent border border-black/5 text-v_black cursor-pointer hover:border-v_black">
                14
              </div>
<div className="aspect-square flex items-center justify-center text-[0.75rem] bg-v_accent text-v_black cursor-pointer hover:bg-[#a6e642]">
                15
              </div>
<div className="aspect-square flex items-center justify-center text-[0.75rem] bg-transparent border border-black/5 text-v_black cursor-pointer hover:border-v_black">
                16
              </div>
<div className="aspect-square flex items-center justify-center text-[0.75rem] bg-transparent border border-black/5 text-v_black cursor-pointer hover:border-v_black">
                17
              </div>
<div className="aspect-square flex items-center justify-center text-[0.75rem] bg-transparent border border-black/5 text-v_black cursor-pointer hover:border-v_black">
                18
              </div>
<div className="aspect-square flex items-center justify-center text-[0.75rem] bg-transparent border border-black/5 text-v_black cursor-pointer hover:border-v_black">
                19
              </div>
<div className="aspect-square flex items-center justify-center text-[0.75rem] bg-transparent border border-black/5 text-v_black cursor-pointer hover:border-v_black">
                20
              </div>
<div className="aspect-square flex items-center justify-center text-[0.75rem] bg-v_accent text-v_black cursor-pointer hover:bg-[#a6e642]">
                21
              </div>
<div className="aspect-square flex items-center justify-center text-[0.75rem] bg-transparent border border-black/5 text-v_black cursor-pointer hover:border-v_black">
                22
              </div>
<div className="aspect-square flex items-center justify-center text-[0.75rem] bg-transparent border border-black/5 text-v_black cursor-pointer hover:border-v_black">
                23
              </div>
<div className="aspect-square flex items-center justify-center text-[0.75rem] bg-transparent border border-black/5 text-v_black cursor-pointer hover:border-v_black">
                24
              </div>
<div className="aspect-square flex items-center justify-center text-[0.75rem] bg-transparent border border-black/5 text-v_black cursor-pointer hover:border-v_black">
                25
              </div>
<div className="aspect-square flex items-center justify-center text-[0.75rem] bg-[#D0D0D0] text-white cursor-not-allowed">
                26
              </div>
<div className="aspect-square flex items-center justify-center text-[0.75rem] bg-transparent border border-black/5 text-v_black cursor-pointer hover:border-v_black">
                27
              </div>
<div className="aspect-square flex items-center justify-center text-[0.75rem] bg-transparent border border-black/5 text-v_black cursor-pointer hover:border-v_black">
                28
              </div>
<div className="aspect-square flex items-center justify-center text-[0.75rem] bg-transparent border border-black/5 text-v_black cursor-pointer hover:border-v_black">
                29
              </div>
<div className="aspect-square flex items-center justify-center text-[0.75rem] bg-v_accent text-v_black cursor-pointer hover:bg-[#a6e642]">
                30
              </div>
<div className="aspect-square flex items-center justify-center text-[0.75rem] bg-transparent border border-black/5 text-v_black cursor-pointer hover:border-v_black">
                31
              </div>
</div>
<div className="mt-6 flex gap-4 justify-center flex-wrap">
<div className="flex items-center gap-1">
<span className="w-[3px] h-[3px] bg-transparent border border-v_black"></span>
<span className="font-mono text-[0.625rem] text-v_muted">
                  AVAILABLE
                </span>
</div>
<div className="flex items-center gap-1">
<span className="w-[3px] h-[3px] bg-v_accent"></span>
<span className="font-mono text-[0.625rem] text-v_muted">
                  LIMITED
                </span>
</div>
<div className="flex items-center gap-1">
<span className="w-[3px] h-[3px] bg-[#D0D0D0]"></span>
<span className="font-mono text-[0.625rem] text-v_muted">
                  SOLD OUT
                </span>
</div>
</div>
<div className="mt-2 text-center font-mono text-[0.625rem] text-v_muted border-t border-black/5 pt-2">
              ARRIVAL DAYS: MONDAY &amp; FRIDAY ONLY
            </div>
<div className="overflow-hidden transition-all duration-400" id="booking-panel" style={{height: '0', opacity: '0'}}>
<div className="pt-4 mt-4 border-t border-black/5">
<div className="font-mono text-[0.75rem] text-v_black mb-3" id="cal-selected-date">
                  CHECK-IN: —
                </div>
<button className="h-[40px] w-full border-[1.5px] border-v_black bg-transparent font-mono text-[0.75rem] uppercase text-v_black hover:bg-v_accent hover:border-v_accent transition-colors">
                  Continue to booking
                </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-v_white py-[clamp(5rem,12vh,8.75rem)] border-b border-black/5 overflow-hidden">
<div className="px-[clamp(1.5rem,5vw,4rem)] max-w-[1440px] mx-auto">
<div className="flex items-center mb-6">
<span className="inline-block w-[3px] h-[3px] bg-v_accent mr-2 mb-[2px] align-middle"></span>
<span className="font-mono text-[0.6875rem] text-v_muted tracking-[0.14em] uppercase">
            / 008 / The Practitioners
          </span>
</div>
<h2 className="font-syne font-[700] text-[clamp(2.25rem,4.5vw,4rem)] text-v_black max-w-[580px]">
          Eight specialists. One shared belief.
        </h2>
<p className="font-manrope font-light text-[1rem] text-v_text max-w-[480px] mt-4">
          No generalists. Every practitioner holds a postgraduate specialization
          and a minimum of eight years of clinical practice.
        </p>
</div>
<div className="flex gap-6 mt-14 px-[clamp(1.5rem,5vw,4rem)] overflow-x-auto snap-x cursor-grab active:cursor-grabbing no-scrollbar pb-8 reveal-stagger" id="team-carousel">

<div className="w-[clamp(16.25rem,30vw,20rem)] shrink-0 snap-start group">
<div className="aspect-[3/4] overflow-hidden bg-v_stone">
<img alt="Dr Lena" className="w-full h-full object-cover grayscale transition-all duration-[600ms] group-hover:grayscale-0 group-hover:-translate-y-1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="pt-5">
<h3 className="font-syne font-[700] text-[1.25rem] text-v_black">
              Dr. Lena Hartmann
            </h3>
<div className="font-mono text-[0.6875rem] text-v_muted tracking-[0.1em] mt-1">
              MEDICAL DIRECTOR
            </div>
<p className="font-manrope font-light text-[0.875rem] text-v_text mt-2 max-w-[260px]">
              Internal medicine specialist with 14 years in functional medicine.
              Clinical director at Clinique La Prairie 2015–2022.
            </p>
</div>
</div>

<div className="w-[clamp(16.25rem,30vw,20rem)] shrink-0 snap-start group">
<div className="aspect-[3/4] overflow-hidden bg-v_stone">
<img alt="Alva" className="w-full h-full object-cover grayscale transition-all duration-[600ms] group-hover:grayscale-0 group-hover:-translate-y-1" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="pt-5">
<h3 className="font-syne font-[700] text-[1.25rem] text-v_black">
              Alva Lindström
            </h3>
<div className="font-mono text-[0.6875rem] text-v_muted tracking-[0.1em] mt-1">
              LEAD NUTRITIONIST
            </div>
<p className="font-manrope font-light text-[0.875rem] text-v_text mt-2 max-w-[260px]">
              Certified clinical nutritionist specializing in chrono-nutrition
              and anti-inflammatory protocols. Author of 'The Metabolic Season.'
            </p>
</div>
</div>

<div className="w-[clamp(16.25rem,30vw,20rem)] shrink-0 snap-start group">
<div className="aspect-[3/4] overflow-hidden bg-v_stone">
<img alt="Mikael" className="w-full h-full object-cover grayscale transition-all duration-[600ms] group-hover:grayscale-0 group-hover:-translate-y-1" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="pt-5">
<h3 className="font-syne font-[700] text-[1.25rem] text-v_black">
              Mikael Jørgensen
            </h3>
<div className="font-mono text-[0.6875rem] text-v_muted tracking-[0.1em] mt-1">
              SAUNA MASTER
            </div>
<p className="font-manrope font-light text-[0.875rem] text-v_text mt-2 max-w-[260px]">
              Third-generation Finnish sauna practitioner and certified Aufguss
              master. 11-year practice in traditional löyly ceremony.
            </p>
</div>
</div>

<div className="w-[clamp(16.25rem,30vw,20rem)] shrink-0 snap-start group">
<div className="aspect-[3/4] overflow-hidden bg-v_stone">
<img alt="Celine" className="w-full h-full object-cover grayscale transition-all duration-[600ms] group-hover:grayscale-0 group-hover:-translate-y-1" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="pt-5">
<h3 className="font-syne font-[700] text-[1.25rem] text-v_black">
              Dr. Céline Moreau
            </h3>
<div className="font-mono text-[0.6875rem] text-v_muted tracking-[0.1em] mt-1">
              OSTEOPATH
            </div>
<p className="font-manrope font-light text-[0.875rem] text-v_text mt-2 max-w-[260px]">
              Postgraduate osteopathy specialization in chronic tension and
              fascia release. Formerly of the French national athletics medical
              staff.
            </p>
</div>
</div>

<div className="w-[clamp(16.25rem,30vw,20rem)] shrink-0 snap-start group">
<div className="aspect-[3/4] overflow-hidden bg-v_stone">
<img alt="Noa" className="w-full h-full object-cover grayscale transition-all duration-[600ms] group-hover:grayscale-0 group-hover:-translate-y-1" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="pt-5">
<h3 className="font-syne font-[700] text-[1.25rem] text-v_black">
              Noa Ben-David
            </h3>
<div className="font-mono text-[0.6875rem] text-v_muted tracking-[0.1em] mt-1">
              WATSU THERAPIST
            </div>
<p className="font-manrope font-light text-[0.875rem] text-v_text mt-2 max-w-[260px]">
              Internationally certified Watsu practitioner (WABA Level 3). One
              of 14 WABA-certified therapists in Europe.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-v_light py-[clamp(5rem,12vh,8.75rem)] px-[clamp(1.5rem,5vw,4rem)] border-b border-black/5">
<div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[clamp(2rem,6vw,6rem)] items-start">
<div className="lg:sticky lg:top-[120px]">
<div className="flex items-center mb-6">
<span className="inline-block w-[3px] h-[3px] bg-v_accent mr-2 mb-[2px] align-middle"></span>
<span className="font-mono text-[0.6875rem] text-v_muted tracking-[0.14em] uppercase">
              / 009 / Common Questions
            </span>
</div>
<h2 className="font-syne font-[700] text-[clamp(1.75rem,3.5vw,3rem)] text-v_black">
            Everything you're wondering.
          </h2>
<p className="font-manrope font-light text-[0.9375rem] text-v_text mt-4">
            We receive the same 9 questions. Here they are, answered honestly.
          </p>
<div className="mt-8 flex items-center gap-4">
<span className="font-mono text-[2.25rem] text-v_accent bg-v_black px-3 py-1 leading-none">
              9
            </span>
<span className="font-manrope text-[0.875rem] text-v_muted max-w-[100px]">
              questions most asked
            </span>
</div>
</div>
<div className="flex flex-col reveal-stagger">

<details className="group border-b border-black/5 overflow-hidden active-faq-parent">
<summary className="flex justify-between items-center py-6 cursor-pointer font-manrope font-medium text-[1.0625rem] text-v_black transition-colors faq-summary relative">
<span>
                Is Velsa right for me if I'm not already a wellness
                practitioner?
              </span>
<div className="w-6 h-6 relative shrink-0 ml-4 transition-transform duration-300 group-open:rotate-45">
<div className="absolute top-1/2 left-0 w-full h-[1px] bg-v_black -translate-y-1/2"></div>
<div className="absolute left-1/2 top-0 h-full w-[1px] bg-v_black -translate-x-1/2"></div>
</div>
</summary>
<p className="font-manrope font-light text-[0.9375rem] text-v_text leading-[1.8] pb-6 pr-8">
              Yes — and that is deliberately who we are designed for. The
              majority of our guests arrive with no meditation practice, no yoga
              background, and no prior spa experience. The protocols work
              independently of baseline. We do, however, require that you come
              in good general health, verified by a pre-arrival medical form.
            </p>
</details>

<details className="group border-b border-black/5 overflow-hidden active-faq-parent">
<summary className="flex justify-between items-center py-6 cursor-pointer font-manrope font-medium text-[1.0625rem] text-v_black transition-colors faq-summary relative">
<span>Can I come alone, without a partner?</span>
<div className="w-6 h-6 relative shrink-0 ml-4 transition-transform duration-300 group-open:rotate-45">
<div className="absolute top-1/2 left-0 w-full h-[1px] bg-v_black -translate-y-1/2"></div>
<div className="absolute left-1/2 top-0 h-full w-[1px] bg-v_black -translate-x-1/2"></div>
</div>
</summary>
<p className="font-manrope font-light text-[0.9375rem] text-v_text leading-[1.8] pb-6 pr-8">
              Yes. Approximately 58% of our guests arrive solo. Single-occupancy
              rooms are available with a 30% premium. The estate is
              architecturally designed for solitude without isolation — common
              spaces exist but are never obligatory.
            </p>
</details>

<details className="group border-b border-black/5 overflow-hidden active-faq-parent">
<summary className="flex justify-between items-center py-6 cursor-pointer font-manrope font-medium text-[1.0625rem] text-v_black transition-colors faq-summary relative">
<span>What if a treatment doesn't suit me?</span>
<div className="w-6 h-6 relative shrink-0 ml-4 transition-transform duration-300 group-open:rotate-45">
<div className="absolute top-1/2 left-0 w-full h-[1px] bg-v_black -translate-y-1/2"></div>
<div className="absolute left-1/2 top-0 h-full w-[1px] bg-v_black -translate-x-1/2"></div>
</div>
</summary>
<p className="font-manrope font-light text-[0.9375rem] text-v_text leading-[1.8] pb-6 pr-8">
              Every ritual has a documented opt-out protocol. Our medical
              director reviews your intake form before day one and pre-flags any
              contraindications. Nothing in your protocol is mandatory. A
              replacement rest period is always available.
            </p>
</details>

<details className="group border-b border-black/5 overflow-hidden active-faq-parent">
<summary className="flex justify-between items-center py-6 cursor-pointer font-manrope font-medium text-[1.0625rem] text-v_black transition-colors faq-summary relative">
<span>How do I know the outcomes are real, not placebo?</span>
<div className="w-6 h-6 relative shrink-0 ml-4 transition-transform duration-300 group-open:rotate-45">
<div className="absolute top-1/2 left-0 w-full h-[1px] bg-v_black -translate-y-1/2"></div>
<div className="absolute left-1/2 top-0 h-full w-[1px] bg-v_black -translate-x-1/2"></div>
</div>
</summary>
<p className="font-manrope font-light text-[0.9375rem] text-v_text leading-[1.8] pb-6 pr-8">
              We provide pre-arrival and post-departure biometric baselines on
              request: HRV, sleep stage analysis, cortisol morning levels, and
              inflammatory markers. 94.3% of guests show measurable improvement
              in at least two markers. The data is yours.
            </p>
</details>

<details className="group border-b border-black/5 overflow-hidden active-faq-parent">
<summary className="flex justify-between items-center py-6 cursor-pointer font-manrope font-medium text-[1.0625rem] text-v_black transition-colors faq-summary relative">
<span>Is there WiFi? Am I expected to disconnect?</span>
<div className="w-6 h-6 relative shrink-0 ml-4 transition-transform duration-300 group-open:rotate-45">
<div className="absolute top-1/2 left-0 w-full h-[1px] bg-v_black -translate-y-1/2"></div>
<div className="absolute left-1/2 top-0 h-full w-[1px] bg-v_black -translate-x-1/2"></div>
</div>
</summary>
<p className="font-manrope font-light text-[0.9375rem] text-v_text leading-[1.8] pb-6 pr-8">
              WiFi exists throughout the estate and is never restricted. You are
              not expected to disconnect. Many guests choose to — after day two,
              most do. The architecture creates its own gravitational pull
              toward quiet.
            </p>
</details>
<style>
            details[open] .faq-summary { border-left: 2px solid #B8FF4A; padding-left: 16px; margin-left: -16px; }
          </style>
</div>
</div>
</section>

<section className="bg-v_dark py-[clamp(6.25rem,16vh,12.5rem)] px-[clamp(1.5rem,8vw,7.5rem)] relative overflow-hidden">

<svg className="absolute right-[-15vw] bottom-[-10vw] w-[60vw] h-[60vw] stroke-white fill-none opacity-[0.03] pointer-events-none" viewbox="0 0 40 40">
<path d="M 8 20 C 8 8, 20 6, 20 6 C 32 6, 32 20, 32 20 C 32 32, 20 34, 20 34 C 8 34, 8 20, 8 20 Z" strokeLinecap="round" strokeWidth="1.8"></path>
<path d="M 13 28 C 16 22, 20 16, 22 13 C 25 18, 27 20, 29 22" strokeLinecap="round" strokeWidth="1.8"></path>
</svg>
<div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_max-content] gap-[clamp(2rem,5vw,5rem)] items-end relative z-10">
<div>
<div className="flex items-center mb-8">
<span className="inline-block w-[3px] h-[3px] bg-v_accent mr-2 mb-[2px] align-middle"></span>
<span className="font-mono text-[0.6875rem] text-white/30 tracking-[0.14em] uppercase">
              / 010 / Book a Residency
            </span>
</div>
<h2 className="font-syne font-[800] text-[clamp(3.25rem,7vw,6.5rem)] text-[#F0F0EE] leading-[0.92] reveal-text-trigger is-revealed">
<span className="word-reveal-wrap block">
<span className="word-reveal-inner" style={{transitionDelay: '0.1s'}}>
                Begin your
              </span>
</span>
<span className="word-reveal-wrap block">
<span className="word-reveal-inner text-gradient-pure" style={{transitionDelay: '0.2s'}}>
                protocol.
              </span>
</span>
</h2>
<p className="font-manrope font-light text-[1.0625rem] text-white/50 max-w-[420px] mt-6">
            Availability is limited to 12 guests per week. Current lead time:
            6–8 weeks.
          </p>
</div>
<div className="flex flex-col w-full md:w-auto mt-8 md:mt-0">
<a className="h-[56px] px-9 bg-v_accent font-mono text-[0.875rem] uppercase text-v_black flex items-center justify-center transition-all duration-300 ease-spring hover:-translate-y-[3px]" href="#pricing" onmouseout="this.style.outlineColor='transparent'" onmouseover="this.style.outlineColor='#B8FF4A'" style={{outline: '1.5px solid transparent', outlineOffset: '4px'}}>
            Reserve Your Stay
          </a>
<span className="font-mono text-[0.6875rem] text-white/30 text-center md:text-right mt-[14px]">
            OR CALL +33 3 88 00 14 22
          </span>
</div>
</div>
</section>

<footer className="bg-v_black pt-[clamp(5rem,12vh,8.75rem)] px-[clamp(1.5rem,5vw,4rem)] pb-12">
<div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 border-t border-white/5 pt-12 md:pt-16">

<div>
<a className="inline-block logo-hover-group group" href="#" onmouseenter="triggerFooterBrandHover(true)" onmouseleave="triggerFooterBrandHover(false)">
<svg className="w-12 h-12 stroke-white fill-none" viewbox="0 0 40 40">
<path className="logo-path-outer" d="M 8 20 C 8 8, 20 6, 20 6 C 32 6, 32 20, 32 20 C 32 32, 20 34, 20 34 C 8 34, 8 20, 8 20 Z" strokeLinecap="round" strokeWidth="1.8"></path>
<path className="logo-path-inner" d="M 13 28 C 16 22, 20 16, 22 13 C 25 18, 27 20, 29 22" strokeLinecap="round" strokeWidth="1.8"></path>
<circle className="fill-white stroke-none logo-dot" cx="22" cy="13" r="2"></circle>
</svg>
</a>
<div className="mt-6 font-syne font-[700] text-[1.75rem] text-[#F0F0EE] transition-all duration-500 ease-smooth" id="footer-brand-name">
            Velsa
          </div>
<div className="font-manrope font-light text-[0.875rem] text-white/40 mt-1">
            Premium Spa &amp; Wellness Estate
          </div>
<div className="mt-7 font-mono text-[0.6875rem] text-white/30 tracking-[0.06em] leading-relaxed">
            ROUTE DES VOSGES 14
            <br/>
            67420 SAINTE-CROIX-AUX-MINES
            <br/>
            ALSACE, FRANCE
          </div>
</div>

<div>
<div className="font-mono text-[0.625rem] text-white/30 tracking-[0.16em] mb-6">
            EXPLORE
          </div>
<div className="flex flex-col gap-1">
<a className="font-manrope font-normal text-[0.875rem] text-white/55 hover:text-white transition-colors leading-[2.4] relative group inline-block w-max" href="#experiences">
<span className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-[3px] h-[3px] bg-v_accent scale-0 transition-transform duration-200 ease-spring group-hover:scale-100"></span>
              Experiences
            </a>
<a className="font-manrope font-normal text-[0.875rem] text-white/55 hover:text-white transition-colors leading-[2.4] relative group inline-block w-max" href="#rituals">
<span className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-[3px] h-[3px] bg-v_accent scale-0 transition-transform duration-200 ease-spring group-hover:scale-100"></span>
              Rituals
            </a>
<a className="font-manrope font-normal text-[0.875rem] text-white/55 hover:text-white transition-colors leading-[2.4] relative group inline-block w-max" href="#gallery">
<span className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-[3px] h-[3px] bg-v_accent scale-0 transition-transform duration-200 ease-spring group-hover:scale-100"></span>
              Spaces
            </a>
<a className="font-manrope font-normal text-[0.875rem] text-white/55 hover:text-white transition-colors leading-[2.4] relative group inline-block w-max" href="#team">
<span className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-[3px] h-[3px] bg-v_accent scale-0 transition-transform duration-200 ease-spring group-hover:scale-100"></span>
              Team
            </a>
<a className="font-manrope font-normal text-[0.875rem] text-white/55 hover:text-white transition-colors leading-[2.4] relative group inline-block w-max" href="#pricing"></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
