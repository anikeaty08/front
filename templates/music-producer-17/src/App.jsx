import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Intersection Observer for Fade-In Effects
      document.addEventListener('DOMContentLoaded', () => {
          const observerOptions = {
              root: null,
              rootMargin: '0px',
              threshold: 0.15
          };

          const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('active');
                      observer.unobserve(entry.target);
                  }
              });
          }, observerOptions);

          const revealElements = document.querySelectorAll('.reveal');
          revealElements.forEach(el => observer.observe(el));
      });

      // Tab Filtering Logic
      function filterTracks(type) {
          // Update Tab Styles
          const tabNonEx = document.getElementById('tab-non-exclusive');
          const tabEx = document.getElementById('tab-exclusive');

          if (type === 'non-exclusive') {
              tabNonEx.className = 'text-xs font-futuristic tracking-widest uppercase pb-3 border-b-2 border-orange-500 text-orange-500 transition-all focus:outline-none';
              tabEx.className = 'text-xs font-futuristic tracking-widest uppercase pb-3 border-b-2 border-transparent text-neutral-500 hover:text-white transition-all focus:outline-none';
          } else {
              tabEx.className = 'text-xs font-futuristic tracking-widest uppercase pb-3 border-b-2 border-orange-500 text-orange-500 transition-all focus:outline-none';
              tabNonEx.className = 'text-xs font-futuristic tracking-widest uppercase pb-3 border-b-2 border-transparent text-neutral-500 hover:text-white transition-all focus:outline-none';
          }

          // Update Track List Visibility
          const tracks = document.querySelectorAll('.track-item');
          tracks.forEach(track => {
              if (track.getAttribute('data-type') === type) {
                  track.style.display = 'flex';
              } else {
                  track.style.display = 'none';
              }
          });
      }
    


      document.addEventListener('DOMContentLoaded', () => {
        if (typeof Lenis !== 'undefined') {
          const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true
          });
          function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
          }
          requestAnimationFrame(raf);
        }
        document.body.classList.add('loading');
        setTimeout(() => {
          document.body.classList.add('loaded');
          document.body.classList.remove('loading');
        }, 500);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed z-50 bg-black/80 w-full border-neutral-900 border-b top-0 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex gap-3 items-center">
<div className="flex bg-white/5 w-8 h-8 border-white/10 border rounded-lg items-center justify-center">
<svg className="w-4 h-5 text-white" data-icon-replaced="true" data-icon-set="solar" data-solar="flame-bold" height="26" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 15c0 4.255-2.618 6.122-4.641 6.751c-.432.134-.715-.369-.457-.74c.88-1.265 1.898-3.195 1.898-5.01c0-1.951-1.644-4.254-2.928-5.675c-.293-.324-.805-.11-.821.328c-.053 1.45-.282 3.388-1.268 4.908a.412.412 0 0 1-.677.036c-.308-.39-.616-.871-.924-1.252c-.166-.204-.466-.207-.657-.026c-.747.707-1.792 1.809-1.792 3.18c0 .93.36 1.905.767 2.69c.224.43-.174.95-.604.724C6.113 19.98 4 18.084 4 15c0-3.146 4.31-7.505 5.956-11.623c.26-.65 1.06-.955 1.617-.531C14.943 5.414 20 10.378 20 15" fill="currentColor">
</path>
</svg>
</div>
<span className="text-sm font-medium text-zinc-300 tracking-wide font-montserrat">FLAME PRODUKCJA BEATSHOP</span>
</div>
<div className="hidden md:flex gap-8 text-xs tracking-widest uppercase">
<a className="hover:text-orange-500 transition-colors text-slate-50" href="#beatshop">
        Beatshop
      </a>
<a className="hover:text-orange-500 transition-colors" href="#licenses">
        Licencje
      </a>
<a className="hover:text-orange-500 transition-colors" href="#about">
        O Mnie
      </a>
<a className="hover:text-orange-500 transition-colors" href="#services">
        Mix/Master
      </a>
<a className="hover:text-orange-500 transition-colors" href="#contact">
        Kontakt
      </a>
</div>
</div>
</nav>

<header className="min-h-screen flex reveal pt-16 relative items-center justify-center">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

<div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 z-10 w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12 items-center">
<div className="col-span-1 lg:col-span-8">
<h2 className="uppercase flex items-center gap-2 text-xs text-orange-500 tracking-widest mb-4">
<iconify-icon className="text-lg" icon="solar:music-note-linear"></iconify-icon>
  Producent Muzyczny
</h2>

<h1 className="font-syne text-6xl md:text-8xl font-semibold tracking-tighter text-white leading-[1.1] uppercase mb-6 relative group cursor-default">
<span className="block md:text-7xl text-7xl font-black italic text-zinc-50 scale-100" style={{maskImage: 'linear-gradient(170deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(170deg, transparent, black 0%, black 100%, transparent)'}}>FLAME</span>
<span className="block md:text-6xl bg-clip-text text-4xl font-black italic text-transparent bg-gradient-to-bl from-white/30 via-white/10 to-orange-500 mt-2">
              PRODUKCJA.
            </span>
</h1>
<p className="max-w-xl text-base text-neutral-400 mb-10 font-light leading-relaxed">
            Nowoczesne brzmienie, futurystyczne podejście do kompozycji.
            Dostarczam najwyższej jakości produkcje muzyczne dla artystów
            szukających unikalnego charakteru.
          </p>
<div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8">
<a className="sharp inline-flex items-center justify-center gap-2 uppercase hover:bg-orange-400 transition-all glow-btn xl:bg-clip-text xl:text-transparent text-xs font-semibold tracking-widest bg-[radial-gradient(circle_at_bottom_left,var(--tw-gradient-stops))] from-orange-400 to-orange-600 border-orange-700 border rounded-xl ring-0 pt-4 pr-8 pb-4 pl-8" href="#beatshop">
<iconify-icon className="text-lg" height="14" icon="solar:flame-bold" style={{color: 'rgb(255, 120, 10)'}} width="14"></iconify-icon>
              Beatshop
            </a>
<a className="sharp inline-flex items-center justify-center gap-2 border border-neutral-800 bg-black/50 px-8 py-4 text-xs uppercase tracking-widest hover:border-orange-500 hover:text-white transition-all backdrop-blur-sm" href="#licenses">
<iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon>
              Licencje
            </a>
<a className="sharp inline-flex items-center justify-center gap-2 uppercase hover:border-orange-500 hover:text-white transition-all text-xs tracking-widest bg-black/50 border-neutral-800 border pt-4 pr-8 pb-4 pl-8 backdrop-blur-sm" href="#services">
<iconify-icon className="text-lg" icon="solar:tuning-square-2-linear"></iconify-icon>
              Mix/Master
            </a>
</div>
</div>

<div className="col-span-1 lg:col-span-4 flex justify-end">
<div className="lg:col-span-6 flex lg:mt-0 mt-16 relative items-center justify-center">
<div className="w-full max-w-lg aspect-square rounded-3xl border border-white/10 bg-white/[0.01] backdrop-blur-3xl p-6 relative overflow-hidden group shadow-2xl">
<div className="bg-gradient-to-br from-white/[0.05] to-transparent opacity-50 absolute top-0 right-0 bottom-0 left-0 scale-100"></div>
<div className="h-full w-full border border-white/5 rounded-2xl flex flex-col justify-between p-8 relative z-10 bg-black/40 backdrop-blur-md">
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
<svg className="text-zinc-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18V5l12-2v13"></path>
<circle cx="6" cy="18" r="3"></circle>
<circle cx="18" cy="16" r="3"></circle>
</svg>
</div>
<span className="text-xs font-montserrat font-medium text-zinc-500 uppercase tracking-widest border border-white/10 px-3 py-1.5 rounded-full bg-white/5">
                    Odtwarzacz
                  </span>
</div>
<div className="space-y-5">
<div className="h-2 w-1/3 bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-white/40 rounded-full"></div>
</div>
<div className="h-2 w-1/2 bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-1/3 bg-white/30 rounded-full"></div>
</div>
<div className="flex items-end gap-2 h-20 mt-8 opacity-60">
<div className="w-2.5 bg-white/80 rounded-t-sm h-[30%] animate-[b1_1s_ease-in-out_infinite]"></div>
<div className="w-2.5 bg-white/80 rounded-t-sm h-[70%] animate-[b2_1.2s_ease-in-out_infinite]"></div>
<div className="w-2.5 bg-white/80 rounded-t-sm h-[40%] animate-[b3_0.9s_ease-in-out_infinite]"></div>
<div className="w-2.5 bg-white/80 rounded-t-sm h-[90%] animate-[b4_1.1s_ease-in-out_infinite]"></div>
<div className="w-2.5 bg-white/80 rounded-t-sm h-[50%] animate-[b5_1.3s_ease-in-out_infinite]"></div>
<div className="w-2.5 bg-white/80 rounded-t-sm h-[80%] animate-[b6_1s_ease-in-out_infinite]"></div>
<div className="w-2.5 bg-white/80 rounded-t-sm h-[60%] animate-[b7_1.4s_ease-in-out_infinite]"></div>
<div className="w-2.5 bg-white/80 rounded-t-sm h-[40%] animate-[b1_1.1s_ease-in-out_infinite]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="reveal border-neutral-900 border-t pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6">
<h2 className="flex items-center gap-4 text-4xl text-white tracking-normal font-futuristic mb-12">
<span className="w-8 h-[1px] bg-orange-500"></span>
          TOP 3 PRODUKCJE
          <svg className="glow-icon w-[26px] h-[26px]" data-icon-replaced="true" data-icon-set="solar" data-solar="flame-linear" height="30" strokeWidth="1.5" style={{width: '26px', height: '26px', color: 'rgb(38, 38, 38)'}} viewbox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 15c0 4.255-2.618 6.122-4.641 6.751c-.432.134-.715-.369-.457-.74c.88-1.265 1.898-3.195 1.898-5.011c0-1.95-1.644-4.254-2.928-5.674c-.293-.325-.805-.11-.821.328c-.053 1.449-.282 3.388-1.268 4.907a.412.412 0 0 1-.677.037c-.308-.39-.616-.872-.924-1.252c-.166-.205-.466-.207-.657-.026c-.747.707-1.792 1.809-1.792 3.18c0 .99.472 2.22.958 3.174c.22.433-.189.941-.61.698C6.246 20.309 4 18.107 4 15c0-3.146 4.31-7.505 5.956-11.623c.26-.65 1.06-.955 1.617-.531C14.943 5.414 20 10.378 20 15Z" fill="none" stroke="currentColor" strokeWidth="1.5"></path></svg>
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group border border-white/5 bg-white/[0.01] backdrop-blur-sm rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-500 flex flex-col shadow-lg">
<div className="w-full aspect-[4/3] bg-white/[0.02] rounded-xl mb-8 relative overflow-hidden flex items-center justify-center border border-white/5 group-hover:bg-orange-500/10 transition-colors">
<iconify-icon className="text-4xl text-zinc-600 group-hover:text-orange-500 transition-colors duration-500 group-hover:scale-110" icon="solar:vinyl-linear"></iconify-icon>
</div>
<div className="flex justify-between items-start mb-3">
<h3 className="text-xl font-medium text-white font-syne tracking-tight group-hover:text-orange-400 transition-colors">
                NEON SHADOWS
              </h3>
<span className="text-xs font-medium bg-white/5 border border-white/10 text-zinc-400 px-3 py-1 rounded-full">
                140 BPM
              </span>
</div>
<p className="text-sm text-zinc-500 font-montserrat mb-8">Drill</p>
<button className="mt-auto w-full py-3.5 rounded-xl border border-white/10 bg-white/5 text-white text-xs font-semibold uppercase tracking-wider hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-colors">
              Odtwórz
            </button>
</div>
<div className="group border border-white/5 bg-white/[0.01] backdrop-blur-sm rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-500 flex flex-col shadow-lg">
<div className="w-full aspect-[4/3] bg-white/[0.02] rounded-xl mb-8 relative overflow-hidden flex items-center justify-center border border-white/5 group-hover:bg-orange-500/10 transition-colors">
<iconify-icon className="text-4xl text-zinc-600 group-hover:text-orange-500 transition-colors duration-500 group-hover:scale-110" icon="solar:vinyl-linear"></iconify-icon>
</div>
<div className="flex justify-between items-start mb-3">
<h3 className="text-xl font-medium text-white font-syne tracking-tight group-hover:text-orange-400 transition-colors">
                VOID RUNNER
              </h3>
<span className="text-xs font-medium bg-white/5 border border-white/10 text-zinc-400 px-3 py-1 rounded-full">
                120 BPM
              </span>
</div>
<p className="text-sm text-zinc-500 font-montserrat mb-8">Trap</p>
<button className="mt-auto w-full py-3.5 rounded-xl border border-white/10 bg-white/5 text-white text-xs font-semibold uppercase tracking-wider hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-colors">
              Odtwórz
            </button>
</div>
<div className="group border border-white/5 bg-white/[0.01] backdrop-blur-sm rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-500 flex flex-col shadow-lg">
<div className="w-full aspect-[4/3] bg-white/[0.02] rounded-xl mb-8 relative overflow-hidden flex items-center justify-center border border-white/5 group-hover:bg-orange-500/10 transition-colors">
<iconify-icon className="text-4xl text-zinc-600 group-hover:text-orange-500 transition-colors duration-500 group-hover:scale-110" icon="solar:vinyl-linear"></iconify-icon>
</div>
<div className="flex justify-between items-start mb-3">
<h3 className="text-xl font-medium text-white font-syne tracking-tight group-hover:text-orange-400 transition-colors">
                SYSTEM GLITCH
              </h3>
<span className="text-xs font-medium bg-white/5 border border-white/10 text-zinc-400 px-3 py-1 rounded-full">
                95 BPM
              </span>
</div>
<p className="text-sm text-zinc-500 font-montserrat mb-8">Hip-Hop</p>
<button className="mt-auto w-full py-3.5 rounded-xl border border-white/10 bg-white/5 text-white text-xs font-semibold uppercase tracking-wider hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-colors">
              Odtwórz
            </button>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="sharp md:pt-10 md:pb-10 md:pl-6 max-w-screen-2xl border-0 pt-10 pb-10 pl-6 relative shadow-2xl backdrop-blur-md">

<div className="flex flex-col xl:flex-row xl:items-end gap-6 z-20 border-neutral-900/50 border-b mb-10 pb-8 relative gap-x-6 gap-y-6 justify-between">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tighter font-futuristic mb-2">
          KATALOG / BEATSHOP
        </h2>
<p className="text-xs text-neutral-500 uppercase tracking-widest font-futuristic max-w-2xl">
          Wybierz odpowiednią sekcję i licencję. Pełna lista dostępnych produkcji muzycznych gotowych do zakupu.
        </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">


<div className="flex sharp gap-1 bg-black/50 border-neutral-800 border pt-1 pr-1 pb-1 pl-1 shadow-inner scale-90 gap-x-1 gap-y-1">
<button className="px-4 py-2 sharp text-xs font-futuristic tracking-widest uppercase transition-all bg-orange-500/10 border border-orange-500/20 text-orange-400 shadow-sm flex items-center gap-2 focus:outline-none" id="tab-ne" onclick="document.getElementById('list-ne').classList.remove('hidden'); document.getElementById('list-ex').classList.add('hidden'); this.className='px-4 py-2 sharp text-xs font-futuristic tracking-widest uppercase transition-all bg-orange-500/10 border border-orange-500/20 text-orange-400 shadow-sm flex items-center gap-2'; document.getElementById('tab-ex').className='px-4 py-2 sharp text-xs font-futuristic tracking-widest uppercase transition-all bg-transparent border border-transparent text-neutral-500 hover:text-white flex items-center gap-2';">
<iconify-icon className="text-base" icon="solar:music-library-linear"></iconify-icon>
            Non-Exclusive
          </button>
<button className="sharp uppercase transition-all hover:text-white flex gap-2 focus:outline-none text-xs text-neutral-500 tracking-widest font-futuristic bg-transparent border-transparent border pt-2 pr-4 pb-2 pl-4 gap-x-2 gap-y-2 items-center" id="tab-ex" onclick="document.getElementById('list-ex').classList.remove('hidden'); document.getElementById('list-ne').classList.add('hidden'); this.className='px-4 py-2 sharp text-xs font-futuristic tracking-widest uppercase transition-all bg-orange-500/10 border border-orange-500/20 text-orange-400 shadow-sm flex items-center gap-2'; document.getElementById('tab-ne').className='px-4 py-2 sharp text-xs font-futuristic tracking-widest uppercase transition-all bg-transparent border border-transparent text-neutral-500 hover:text-white flex items-center gap-2';">
<iconify-icon className="text-base" icon="solar:crown-linear"></iconify-icon>
            Exclusive
          </button>
</div><div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 text-lg" icon="solar:magnifier-linear"></iconify-icon>
<input className="sharp bg-black/50 border border-neutral-800 pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500 focus:bg-neutral-900 transition-all w-full sm:w-56 font-futuristic tracking-widest" placeholder="SZUKAJ..." type="text"/>
</div>
</div>
</div>

<div className="overflow-hidden sharp z-10 bg-black/60 max-w-screen-2xl border-neutral-800 border relative backdrop-blur-lg">

<div className="flex gap-4 text-[10px] uppercase font-semibold text-neutral-500 tracking-widest font-futuristic border-neutral-800 border-b p-4 items-center bg-neutral-900/50">
<div className="w-8 text-center flex-shrink-0">#</div>
<div className="w-10 text-center flex-shrink-0">PLAY</div>
<div className="w-48 flex-shrink-0">TYTUŁ</div>
<div className="flex-1 hidden lg:block text-center opacity-0">WAVEFORM</div>
<div className="w-32 hidden md:block">GATUNEK</div>
<div className="w-16 hidden sm:block text-center">BPM</div>
<div className="w-16 hidden sm:block text-center">KEY</div>
<div className="w-[260px] text-right flex-shrink-0">LICENCJA</div>
</div>

<div className="flex flex-col" id="list-ne">

<div className="flex items-center gap-3 px-5 py-3 border-b border-orange-500/10 bg-orange-500/5 font-futuristic tracking-widest">
<iconify-icon className="w-4 h-4 text-orange-500 text-lg" icon="solar:info-circle-linear"></iconify-icon>
<span className="text-orange-400/80 text-[10px] uppercase">
            Playlista z bitami na niewyłączność. Bity te są w ciągłej sprzedaży.
          </span>
</div>

<div className="flex items-center gap-4 px-4 py-3 border-b border-neutral-900/50 hover:bg-neutral-900/50 transition-colors group bg-neutral-900/80 border-l-2 border-l-orange-500">
<div className="w-8 text-center flex-shrink-0 text-xs text-orange-500 font-futuristic">01</div>
<div className="w-10 flex justify-center items-center relative flex-shrink-0">
<button className="text-orange-500 focus:outline-none transition-colors">
<iconify-icon className="text-3xl drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]" icon="solar:pause-circle-bold"></iconify-icon>
</button>
</div>
<div className="w-48 flex-shrink-0 flex items-center gap-3">
<h4 className="text-xs text-orange-400 font-medium truncate uppercase tracking-tight font-futuristic flex items-center gap-2">
              NIGHT CITY
              <iconify-icon className="text-orange-500 text-xs" icon="solar:music-note-linear"></iconify-icon>
</h4>
</div>

<div className="flex-1 hidden lg:flex items-center justify-between h-6 opacity-100 px-4 w-full">
<div className="flex-grow flex items-center gap-[2px] h-full">
<div className="w-[2px] bg-orange-500 rounded-full h-[40%] animate-[wave_0.8s_ease-in-out_infinite]"></div>
<div className="w-[2px] bg-orange-500 rounded-full h-[80%] animate-[wave_1.2s_ease-in-out_infinite_0.1s]">
</div>
<div className="w-[2px] bg-orange-500 rounded-full h-[100%] animate-[wave_0.9s_ease-in-out_infinite_0.2s]">
</div>
<div className="w-[2px] bg-orange-500 rounded-full h-[60%] animate-[wave_1.1s_ease-in-out_infinite_0.3s]">
</div>
<div className="w-[2px] bg-orange-500 rounded-full h-[90%] animate-[wave_0.7s_ease-in-out_infinite_0.4s]">
</div>
<div className="w-[2px] bg-orange-500 rounded-full h-[50%] animate-[wave_0.9s_ease-in-out_infinite_0.5s]">
</div>
<div className="flex-grow h-[2px] bg-neutral-800 ml-2 relative rounded-full">
<div className="absolute left-0 top-0 h-full bg-orange-500 w-1/3 rounded-full"></div>
<div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_5px_#f97316]">
</div>
</div>
</div>
</div>
<div className="w-32 hidden md:block text-xs text-orange-400 font-futuristic uppercase tracking-widest">Dark Trap
          </div>
<div className="w-16 hidden sm:block text-xs text-orange-400 text-center font-futuristic">130</div>
<div className="w-16 hidden sm:block text-xs text-orange-400 text-center font-futuristic uppercase">Cm</div>
<div className="w-[260px] flex justify-end items-center gap-2 flex-shrink-0 text-[10px] uppercase font-semibold tracking-widest font-futuristic">
<button className="text-neutral-500 hover:text-orange-500 transition-colors mr-2" title="Udostępnij">
<iconify-icon className="text-lg" icon="solar:share-linear"></iconify-icon>
</button>
<button className="sharp border border-neutral-700 bg-black text-white hover:border-orange-500 hover:text-orange-500 transition-all px-3 py-1.5 flex items-center gap-2">
              MP3
              <span className="text-neutral-500 font-normal">99 zł</span>
</button>
<button className="sharp border border-orange-500/30 bg-orange-500/10 hover:bg-orange-500 hover:text-black text-orange-400 transition-all px-3 py-1.5 flex items-center gap-2">
              WAV+
              <span className="opacity-70 font-normal text-orange-300 group-hover:text-black">199 zł</span>
</button>
</div>
</div>

<div className="flex items-center gap-4 px-4 py-3 border-b border-neutral-900/50 hover:bg-neutral-900/80 transition-colors group border-l-2 border-l-transparent cursor-pointer">
<div className="w-8 text-center flex-shrink-0 text-xs text-neutral-600 font-futuristic group-hover:text-orange-500 transition-colors">
            02</div>
<div className="w-10 flex justify-center items-center relative flex-shrink-0">
<button className="text-neutral-400 group-hover:text-orange-500 focus:outline-none transition-colors">
<iconify-icon className="text-3xl glow-icon" icon="solar:play-circle-linear"></iconify-icon>
</button>
</div>
<div className="w-48 flex-shrink-0 flex items-center gap-3">
<h4 className="text-xs text-white font-medium truncate uppercase tracking-tight font-futuristic group-hover:text-orange-400 transition-colors">
              SYNTHETIC SOUL
            </h4>
</div>

<div className="flex-1 hidden lg:flex items-center justify-between h-6 opacity-20 group-hover:opacity-40 transition-opacity px-4 w-full">
<div className="flex-grow flex items-center gap-[2px] h-full">
<div className="w-[2px] bg-white rounded-full h-[30%]"></div>
<div className="w-[2px] bg-white rounded-full h-[50%]"></div>
<div className="w-[2px] bg-white rounded-full h-[80%]"></div>
<div className="w-[2px] bg-white rounded-full h-[40%]"></div>
<div className="w-[2px] bg-white rounded-full h-[60%]"></div>
<div className="w-[2px] bg-white rounded-full h-[30%]"></div>
<div className="w-[2px] bg-white rounded-full h-[70%]"></div>
<div className="w-[2px] bg-white rounded-full h-[90%]"></div>
<div className="w-[2px] bg-white rounded-full h-[50%]"></div>
<div className="w-[2px] bg-white rounded-full h-[30%]"></div>
<div className="flex-grow h-[2px] bg-white ml-2 rounded-full"></div>
</div>
</div>
<div className="w-32 hidden md:block text-xs text-neutral-500 font-futuristic uppercase tracking-widest group-hover:text-neutral-400">
            Drill</div>
<div className="w-16 hidden sm:block text-xs text-neutral-500 text-center font-futuristic group-hover:text-neutral-400">
            115</div>
<div className="w-16 hidden sm:block text-xs text-neutral-500 text-center font-futuristic uppercase group-hover:text-neutral-400">
            Am</div>
<div className="w-[260px] flex justify-end items-center gap-2 flex-shrink-0 text-[10px] uppercase font-semibold tracking-widest font-futuristic">
<button className="text-neutral-500 hover:text-orange-500 transition-colors mr-2" title="Udostępnij">
<iconify-icon className="text-lg" icon="solar:share-linear"></iconify-icon>
</button>
<button className="sharp border border-neutral-800 bg-neutral-900 hover:border-orange-500 hover:text-orange-500 text-white transition-all px-3 py-1.5 flex items-center gap-2">
              MP3
              <span className="text-neutral-500 font-normal">99 zł</span>
</button>
<button className="sharp border border-orange-500/30 bg-orange-500/10 hover:bg-orange-500 hover:text-black text-orange-400 transition-all px-3 py-1.5 flex items-center gap-2">
              WAV+
              <span className="opacity-70 font-normal text-orange-300 group-hover:text-black">199 zł</span>
</button>
</div>
</div>
</div>

<div className="flex flex-col hidden" id="list-ex">

<div className="flex items-center gap-3 px-5 py-3 border-b border-orange-500/10 bg-orange-500/5 font-futuristic tracking-widest">
<iconify-icon className="w-4 h-4 text-orange-500 text-lg" icon="solar:crown-linear"></iconify-icon>
<span className="text-orange-400/80 text-[10px] uppercase">
            Pełne prawa własności — 1 of 1. Bit znika ze sklepu po zakupie.
          </span>
</div>

<div className="flex items-center gap-4 px-4 py-3 border-b border-neutral-900/50 hover:bg-neutral-900/80 transition-colors group border-l-2 border-l-transparent cursor-pointer">
<div className="w-8 text-center flex-shrink-0 text-xs text-neutral-600 font-futuristic group-hover:text-orange-500 transition-colors">
            01</div>
<div className="w-10 flex justify-center items-center relative flex-shrink-0">
<button className="text-neutral-400 group-hover:text-orange-500 focus:outline-none transition-colors">
<iconify-icon className="text-3xl glow-icon" icon="solar:play-circle-linear"></iconify-icon>
</button>
</div>
<div className="w-48 flex-shrink-0 flex items-center gap-3">
<h4 className="text-xs text-white font-medium truncate uppercase tracking-tight font-futuristic flex items-center gap-2 group-hover:text-orange-400 transition-colors">
              DATA BREACH
              <iconify-icon className="text-orange-500 text-xs" icon="solar:crown-linear"></iconify-icon>
</h4>
</div>

<div className="flex-1 hidden lg:flex items-center justify-between h-6 opacity-20 group-hover:opacity-40 transition-opacity px-4 w-full">
<div className="flex-grow flex items-center gap-[2px] h-full">
<div className="w-[2px] bg-white rounded-full h-[60%]"></div>
<div className="w-[2px] bg-white rounded-full h-[90%]"></div>
<div className="w-[2px] bg-white rounded-full h-[40%]"></div>
<div className="w-[2px] bg-white rounded-full h-[100%]"></div>
<div className="w-[2px] bg-white rounded-full h-[50%]"></div>
<div className="w-[2px] bg-white rounded-full h-[70%]"></div>
<div className="w-[2px] bg-white rounded-full h-[30%]"></div>
<div className="w-[2px] bg-white rounded-full h-[60%]"></div>
<div className="w-[2px] bg-white rounded-full h-[80%]"></div>
<div className="w-[2px] bg-white rounded-full h-[40%]"></div>
<div className="flex-grow h-[2px] bg-white ml-2 rounded-full"></div>
</div>
</div>
<div className="w-32 hidden md:block text-xs text-neutral-500 font-futuristic uppercase tracking-widest group-hover:text-neutral-400">
            Cyberpunk</div>
<div className="w-16 hidden sm:block text-xs text-neutral-500 text-center font-futuristic group-hover:text-neutral-400">
            145</div>
<div className="w-16 hidden sm:block text-xs text-neutral-500 text-center font-futuristic uppercase group-hover:text-neutral-400">
            Fm</div>
<div className="w-[260px] flex justify-end items-center gap-2 flex-shrink-0 text-[10px] uppercase font-semibold tracking-widest font-futuristic">
<button className="text-neutral-500 hover:text-orange-500 transition-colors mr-2" title="Udostępnij">
<iconify-icon className="text-lg" icon="solar:share-linear"></iconify-icon>
</button>
<button className="sharp border border-orange-500 bg-orange-500 hover:bg-orange-400 text-black transition-all px-6 py-1.5 flex items-center gap-2 glow-btn">
<iconify-icon className="text-sm" icon="solar:cart-linear"></iconify-icon>
              KUP WYŁĄCZNOŚĆ
            </button>
</div>
</div>

<div className="flex items-center gap-4 px-4 py-3 border-b border-neutral-900/50 hover:bg-neutral-900/80 transition-colors group border-l-2 border-l-transparent cursor-pointer">
<div className="w-8 text-center flex-shrink-0 text-xs text-neutral-600 font-futuristic group-hover:text-orange-500 transition-colors">
            02</div>
<div className="w-10 flex justify-center items-center relative flex-shrink-0">
<button className="text-neutral-400 group-hover:text-orange-500 focus:outline-none transition-colors">
<iconify-icon className="text-3xl glow-icon" icon="solar:play-circle-linear"></iconify-icon>
</button>
</div>
<div className="w-48 flex-shrink-0 flex items-center gap-3">
<h4 className="text-xs text-white font-medium truncate uppercase tracking-tight font-futuristic flex items-center gap-2 group-hover:text-orange-400 transition-colors">
              GHOST PROTOCOL
              <iconify-icon className="text-orange-500 text-xs" icon="solar:crown-linear"></iconify-icon>
</h4>
</div>

<div className="flex-1 hidden lg:flex items-center justify-between h-6 opacity-20 group-hover:opacity-40 transition-opacity px-4 w-full">
<div className="flex-grow flex items-center gap-[2px] h-full">
<div className="w-[2px] bg-white rounded-full h-[50%]"></div>
<div className="w-[2px] bg-white rounded-full h-[30%]"></div>
<div className="w-[2px] bg-white rounded-full h-[80%]"></div>
<div className="w-[2px] bg-white rounded-full h-[100%]"></div>
<div className="w-[2px] bg-white rounded-full h-[60%]"></div>
<div className="w-[2px] bg-white rounded-full h-[40%]"></div>
<div className="w-[2px] bg-white rounded-full h-[70%]"></div>
<div className="w-[2px] bg-white rounded-full h-[30%]"></div>
<div className="w-[2px] bg-white rounded-full h-[50%]"></div>
<div className="w-[2px] bg-white rounded-full h-[90%]"></div>
<div className="flex-grow h-[2px] bg-white ml-2 rounded-full"></div>
</div>
</div>
<div className="w-32 hidden md:block text-xs text-neutral-500 font-futuristic uppercase tracking-widest group-hover:text-neutral-400">
            Hip-Hop</div>
<div className="w-16 hidden sm:block text-xs text-neutral-500 text-center font-futuristic group-hover:text-neutral-400">
            120</div>
<div className="w-16 hidden sm:block text-xs text-neutral-500 text-center font-futuristic uppercase group-hover:text-neutral-400">
            Gm</div>
<div className="w-[260px] flex justify-end items-center gap-2 flex-shrink-0 text-[10px] uppercase font-semibold tracking-widest font-futuristic">
<button className="text-neutral-500 hover:text-orange-500 transition-colors mr-2" title="Udostępnij">
<iconify-icon className="text-lg" icon="solar:share-linear"></iconify-icon>
</button>
<button className="sharp border border-orange-500 bg-orange-500 hover:bg-orange-400 text-black transition-all px-6 py-1.5 flex items-center gap-2 glow-btn">
<iconify-icon className="text-sm" icon="solar:cart-linear"></iconify-icon>
              KUP WYŁĄCZNOŚĆ
            </button>
</div>
</div>
</div>
</div>
</div>
</div><section className="reveal bg-neutral-950/20 border-neutral-900 border-t pt-24 pb-24" id="beatshop">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<h2 className="text-3xl text-white tracking-wide font-futuristic mb-4">
      KATALOG / BEATSHOP
    </h2>
<p className="text-sm text-neutral-500 mb-8 max-w-2xl">
      Wybierz odpowiednią sekcję i licencję. Pełna lista dostępnych
      produkcji muzycznych gotowych do zakupu.
    </p>

<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-6 border-b border-neutral-900 pb-px">

<div className="flex gap-6 px-2 w-full md:w-auto">
<button className="uppercase transition-all focus:outline-none text-xs text-orange-500 tracking-widest font-futuristic border-orange-500 border-b-2 pb-3" id="tab-non-exclusive" onclick="document.getElementById('track-search').value=''; filterTracks('non-exclusive')">
              Non-Exclusive
            </button>
<button className="uppercase hover:text-white transition-all focus:outline-none text-xs text-neutral-500 tracking-widest font-futuristic border-transparent border-b-2 pb-3" id="tab-exclusive" onclick="document.getElementById('track-search').value=''; filterTracks('exclusive')">
              Exclusive
            </button>
</div>

<div className="relative w-full md:w-64 mb-2 md:mb-1">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-neutral-900/50 border border-neutral-800 rounded-full py-2 pl-10 pr-4 text-xs text-white focus:outline-none focus:border-orange-500 transition-colors placeholder:text-neutral-600" id="track-search" oninput="
                const q = this.value.toLowerCase(); 
                const activeTab = document.getElementById('tab-non-exclusive').classList.contains('text-orange-500') ? 'non-exclusive' : 'exclusive';
                document.querySelectorAll('.track-item').forEach(el =&gt; {
                  if(el.getAttribute('data-type') === activeTab) {
                    const title = el.querySelector('h4') ? el.querySelector('h4').textContent.toLowerCase() : '';
                    if(title.includes(q)) el.style.display = 'flex';
                    else el.style.display = 'none';
                  }
                });
              " placeholder="Szukaj utworu..." type="text"/>
</div>
</div>

<div className="flex flex-col" id="track-list">

<div className="track-item mb-6 text-xs text-neutral-400 bg-neutral-900/40 p-4 rounded-xl border border-neutral-800 flex items-start gap-3" data-type="non-exclusive">
<iconify-icon className="text-orange-500 text-lg mt-0.5" icon="solar:info-circle-linear"></iconify-icon>
<div className="">
<h4 className="hidden">info</h4>
<br/>
              Te produkcje są dostępne w ciągłej sprzedaży dla wielu twórców. Możesz wybrać odpowiednią licencję (Lease lub Premium) w zależności od Twoich potrzeb i planowanego zasięgu.
        </div>
</div>

<div className="track-item mb-6 text-xs text-orange-200/80 bg-orange-950/20 p-4 rounded-xl border border-orange-500/30 flex items-start gap-3 shadow-[0_0_15px_rgba(249,115,22,0.1)]" data-type="exclusive" style={{display: 'none'}}>
<iconify-icon className="text-orange-500 text-lg mt-0.5 drop-shadow-[0_0_5px_rgba(249,115,22,0.8)]" icon="solar:crown-star-linear"></iconify-icon>
<div>
<h4 className="hidden">info</h4>
<br/>
              Otrzymujesz pełne prawa autorskie do utworu. Po sfinalizowaniu zakupu bit natychmiast znika ze sklepu i staje się w 100% Twoją własnością.
        </div>
</div>

<div className="track-item flex flex-wrap md:flex-nowrap transition-colors group border-l-orange-500 bg-neutral-900/80 border-neutral-900/50 border-b border-l-2 pt-3 pr-4 pb-3 pl-4 items-center justify-between" data-type="non-exclusive">
<div className="flex items-center gap-4 w-full md:w-auto mb-3 md:mb-0">
<span className="text-xs text-orange-500 font-futuristic w-4">
                01
              </span>
<button className="text-orange-500 focus:outline-none transition-colors">
<iconify-icon className="text-2xl drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]" icon="solar:pause-circle-bold"></iconify-icon>
</button>
<div className="w-40">
<h4 className="text-xs text-white font-medium truncate uppercase tracking-tight text-orange-400">
              NIGHT CITY
            </h4>
</div>
</div>

<div className="hidden md:flex items-center justify-between h-8 mx-4 flex-grow opacity-80 gap-[1px]">
<div className="w-[3px] bg-orange-500 rounded-full h-[20%] animate-[wave_0.8s_ease-in-out_infinite]"></div>
<div className="w-[3px] bg-orange-500 rounded-full h-[40%] animate-[wave_1.1s_ease-in-out_infinite_0.1s]"></div>
<div className="w-[3px] bg-orange-500 rounded-full h-[60%] animate-[wave_0.9s_ease-in-out_infinite_0.2s]"></div>
<div className="w-[3px] bg-orange-500 rounded-full h-[80%] animate-[wave_1.2s_ease-in-out_infinite_0.3s]"></div>
<div className="w-[3px] bg-orange-500 rounded-full h-[50%] animate-[wave_0.7s_ease-in-out_infinite_0.4s]"></div>
<div className="w-[3px] bg-orange-500 rounded-full h-[90%] animate-[wave_1.0s_ease-in-out_infinite_0.5s]"></div>
<div className="w-[3px] bg-orange-500 rounded-full h-[100%] animate-[wave_0.8s_ease-in-out_infinite_0.1s]"></div>
<div className="w-[3px] bg-orange-500 rounded-full h-[70%] animate-[wave_1.3s_ease-in-out_infinite_0.2s]"></div>
<div className="w-[3px] bg-orange-500 rounded-full h-[30%] animate-[wave_0.9s_ease-in-out_infinite_0.3s]"></div>
<div className="w-[3px] bg-orange-500 rounded-full h-[50%] animate-[wave_1.1s_ease-in-out_infinite_0.4s]"></div>
<div className="w-[3px] bg-orange-500 rounded-full h-[80%] animate-[wave_0.8s_ease-in-out_infinite_0.5s]"></div>
<div className="w-[3px] bg-orange-500 rounded-full h-[60%] animate-[wave_1.2s_ease-in-out_infinite_0.1s]"></div>
<div className="w-[3px] bg-orange-500 rounded-full h-[40%] animate-[wave_0.9s_ease-in-out_infinite_0.2s]"></div>
<div className="w-[3px] bg-orange-500 rounded-full h-[70%] animate-[wave_1.0s_ease-in-out_infinite_0.3s]"></div>
<div className="w-[3px] bg-orange-500 rounded-full h-[90%] animate-[wave_0.7s_ease-in-out_infinite_0.4s]"></div>

<div className="w-[3px] bg-neutral-800 rounded-full h-[60%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[40%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[20%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[50%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[80%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[100%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[80%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[50%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[30%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[60%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[90%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[70%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[40%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[20%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[50%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[80%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[60%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[40%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[70%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[90%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[60%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[40%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[20%]"></div>
</div>
<div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto ml-auto">
<span className="text-xs text-orange-400 w-16 font-medium">
                130 BPM
              </span>
<span className="text-xs text-orange-400 w-12 font-medium">2:45</span>
<button className="text-neutral-400 hover:text-orange-500 transition-colors mr-2" title="Udostępnij">
<iconify-icon className="text-lg" icon="solar:share-linear"></iconify-icon>
</button>
<div className="flex items-center gap-2">
<button className="sharp border border-orange-500/50 bg-transparent text-orange-400 text-[10px] px-3 py-1.5 uppercase tracking-widest font-semibold transition-all hover:border-orange-500 hover:text-orange-500">
                  Lease
                </button>
<button className="sharp text-[10px] uppercase transition-all hover:bg-orange-400 flex gap-1 glow-btn font-semibold text-black tracking-widest bg-orange-500 border-orange-500 border pt-1.5 pr-3 pb-1.5 pl-3 gap-x-1 gap-y-1 items-center">

                  Premium
                </button>
</div>
</div>
</div>
<div className="track-item flex flex-wrap md:flex-nowrap transition-colors group border-l-orange-500 bg-neutral-900/80 border-neutral-900/50 border-b border-l-2 pt-3 pr-4 pb-3 pl-4 items-center justify-between" data-type="non-exclusive">
<div className="flex items-center gap-4 w-full md:w-auto mb-3 md:mb-0">
<span className="text-xs text-orange-500 font-futuristic w-4">02</span>
<button className="text-orange-500 focus:outline-none transition-colors">
<iconify-icon className="text-2xl drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]" icon="solar:pause-circle-bold"></iconify-icon>
</button>
<div className="w-40">
<h4 className="truncate uppercase text-xs font-medium text-white tracking-tight">LOWEL</h4>
</div>
</div>

<div className="hidden md:flex flex-grow gap-[1px] opacity-80 h-8 mr-4 ml-4 scale-100 gap-x-[1px] gap-y-[1px] items-center justify-between">
<div className="w-[3px] bg-orange-500 rounded-full h-[20%] animate-[wave_0.8s_ease-in-out_infinite]"></div>
<div className="w-[3px] bg-orange-500 rounded-full h-[40%] animate-[wave_1.1s_ease-in-out_infinite_0.1s]"></div>
<div className="w-[3px] bg-orange-500 rounded-full h-[60%] animate-[wave_0.9s_ease-in-out_infinite_0.2s]"></div>
<div className="w-[3px] bg-orange-500 rounded-full h-[80%] animate-[wave_1.2s_ease-in-out_infinite_0.3s]"></div>
<div className="w-[3px] bg-orange-500 rounded-full h-[50%] animate-[wave_0.7s_ease-in-out_infinite_0.4s]"></div>
<div className="w-[3px] bg-orange-500 rounded-full h-[90%] animate-[wave_1.0s_ease-in-out_infinite_0.5s]"></div>
<div className="w-[3px] bg-orange-500 rounded-full h-[100%] animate-[wave_0.8s_ease-in-out_infinite_0.1s]"></div>
<div className="w-[3px] bg-orange-500 rounded-full h-[70%] animate-[wave_1.3s_ease-in-out_infinite_0.2s]"></div>
<div className="w-[3px] bg-orange-500 rounded-full h-[30%] animate-[wave_0.9s_ease-in-out_infinite_0.3s]"></div>
<div className="w-[3px] bg-orange-500 rounded-full h-[50%] animate-[wave_1.1s_ease-in-out_infinite_0.4s]"></div>
<div className="w-[3px] bg-orange-500 rounded-full h-[80%] animate-[wave_0.8s_ease-in-out_infinite_0.5s]"></div>
<div className="w-[3px] bg-orange-500 rounded-full h-[60%] animate-[wave_1.2s_ease-in-out_infinite_0.1s]"></div>
<div className="w-[3px] bg-orange-500 rounded-full h-[40%] animate-[wave_0.9s_ease-in-out_infinite_0.2s]"></div>
<div className="w-[3px] bg-orange-500 rounded-full h-[70%] animate-[wave_1.0s_ease-in-out_infinite_0.3s]"></div>
<div className="w-[3px] bg-orange-500 rounded-full h-[90%] animate-[wave_0.7s_ease-in-out_infinite_0.4s]"></div>

<div className="w-[3px] bg-neutral-800 rounded-full h-[60%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[40%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[20%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[50%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[80%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[100%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[80%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[50%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[30%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[60%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[90%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[70%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[40%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[20%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[50%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[80%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[60%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[40%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[70%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[90%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[60%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[40%]"></div>
<div className="w-[3px] bg-neutral-800 rounded-full h-[20%]"></div>
</div>
<div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto ml-auto">
<span className="text-xs font-medium text-orange-400 w-16">92 BPM</span>
<span className="text-xs font-medium text-orange-400 w-12">3:00</span>
<button className="text-neutral-400 hover:text-orange-500 transition-colors mr-2" title="Udostępnij">
<iconify-icon className="text-lg" icon="solar:share-linear"></iconify-icon>
</button>
<div className="flex items-center gap-2">
<button className="sharp border border-orange-500/50 bg-transparent text-orange-400 text-[10px] px-3 py-1.5 uppercase tracking-widest font-semibold transition-all hover:border-orange-500 hover:text-orange-500">
                  Lease
                </button>
<button className="sharp text-[10px] uppercase transition-all hover:bg-orange-400 flex gap-1 glow-btn font-semibold text-black tracking-widest bg-orange-500 border-orange-500 border pt-1.5 pr-3 pb-1.5 pl-3 gap-x-1 gap-y-1 items-center">

                  Premium
                </button>
</div>
</div>
</div>


<div className="track-item flex flex-wrap md:flex-nowrap items-center justify-between py-3 border-b border-neutral-900/50 hover:bg-neutral-900/50 transition-colors group px-4 border-l-2 border-l-transparent" data-type="exclusive" style={{display: 'none'}}>
<div className="flex items-center gap-4 w-full md:w-auto mb-3 md:mb-0">
<span className="text-xs text-neutral-600 font-futuristic w-4 group-hover:text-orange-500 transition-colors">
                01
              </span>
<button className="text-neutral-400 focus:outline-none group-hover:text-orange-500 transition-colors">
<iconify-icon className="text-2xl glow-icon" icon="solar:play-circle-linear"></iconify-icon>
</button>
<div className="w-40">
<h4 className="text-xs text-white font-medium truncate uppercase tracking-tight flex items-center gap-2 group-hover:text-orange-400 transition-colors">
              DATA BREACH
              <iconify-icon className="text-orange-500 text-sm drop-shadow-[0_0_5px_rgba(249,115,22,0.8)]" icon="solar:crown-bold"></iconify-icon>
</h4>
</div>
</div>

<div className="hidden md:flex items-center justify-between h-8 mx-4 flex-grow opacity-20 group-hover:opacity-40 transition-opacity gap-[1px]">
<div className="w-[3px] bg-white rounded-full h-[20%]"></div>
<div className="w-[3px] bg-white rounded-full h-[40%]"></div>
<div className="w-[3px] bg-white rounded-full h-[60%]"></div>
<div className="w-[3px] bg-white rounded-full h-[80%]"></div>
<div className="w-[3px] bg-white rounded-full h-[50%]"></div>
<div className="w-[3px] bg-white rounded-full h-[90%]"></div>
<div className="w-[3px] bg-white rounded-full h-[100%]"></div>
<div className="w-[3px] bg-white rounded-full h-[70%]"></div>
<div className="w-[3px] bg-white rounded-full h-[30%]"></div>
<div className="w-[3px] bg-white rounded-full h-[50%]"></div>
<div className="w-[3px] bg-white rounded-full h-[80%]"></div>
<div className="w-[3px] bg-white rounded-full h-[60%]"></div>
<div className="w-[3px] bg-white rounded-full h-[40%]"></div>
<div className="w-[3px] bg-white rounded-full h-[70%]"></div>
<div className="w-[3px] bg-white rounded-full h-[90%]"></div>
<div className="w-[3px] bg-white rounded-full h-[60%]"></div>
<div className="w-[3px] bg-white rounded-full h-[40%]"></div>
<div className="w-[3px] bg-white rounded-full h-[20%]"></div>
<div className="w-[3px] bg-white rounded-full h-[50%]"></div>
<div className="w-[3px] bg-white rounded-full h-[80%]"></div>
<div className="w-[3px] bg-white rounded-full h-[100%]"></div>
<div className="w-[3px] bg-white rounded-full h-[80%]"></div>
<div className="w-[3px] bg-white rounded-full h-[50%]"></div>
<div className="w-[3px] bg-white rounded-full h-[30%]"></div>
<div className="w-[3px] bg-white rounded-full h-[60%]"></div>
<div className="w-[3px] bg-white rounded-full h-[90%]"></div>
<div className="w-[3px] bg-white rounded-full h-[70%]"></div>
<div className="w-[3px] bg-white rounded-full h-[40%]"></div>
<div className="w-[3px] bg-white rounded-full h-[20%]"></div>
<div className="w-[3px] bg-white rounded-full h-[50%]"></div>
<div className="w-[3px] bg-white rounded-full h-[80%]"></div>
<div className="w-[3px] bg-white rounded-full h-[60%]"></div>
<div className="w-[3px] bg-white rounded-full h-[40%]"></div>
<div className="w-[3px] bg-white rounded-full h-[70%]"></div>
<div className="w-[3px] bg-white rounded-full h-[90%]"></div>
<div className="w-[3px] bg-white rounded-full h-[60%]"></div>
<div className="w-[3px] bg-white rounded-full h-[40%]"></div>
<div className="w-[3px] bg-white rounded-full h-[20%]"></div>
</div>
<div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto ml-auto">
<span className="text-xs text-neutral-500 w-16">145 BPM</span>
<span className="text-xs text-neutral-500 w-12">2:55</span>
<button className="text-neutral-400 hover:text-orange-500 transition-colors" title="Udostępnij">
<iconify-icon className="text-lg" icon="solar:share-linear"></iconify-icon>
</button>
<button className="sharp border border-orange-500 bg-orange-500 text-black text-[10px] px-3 py-1.5 uppercase tracking-widest font-semibold transition-all hover:bg-orange-400 flex items-center gap-1 glow-btn">
<iconify-icon className="text-sm" icon="solar:crown-bold"></iconify-icon>
                Excl.
              </button>
</div>
</div>

<div className="track-item flex flex-wrap md:flex-nowrap items-center justify-between py-3 border-b border-neutral-900/50 hover:bg-neutral-900/50 transition-colors group px-4 border-l-2 border-l-transparent" data-type="exclusive" style={{display: 'none'}}>
<div className="flex items-center gap-4 w-full md:w-auto mb-3 md:mb-0">
<span className="text-xs text-neutral-600 font-futuristic w-4 group-hover:text-orange-500 transition-colors">
                02
              </span>
<button className="text-neutral-400 focus:outline-none group-hover:text-orange-500 transition-colors">
<iconify-icon className="text-2xl glow-icon" icon="solar:play-circle-linear"></iconify-icon>
</button>
<div className="w-40">
<h4 className="text-xs text-white font-medium truncate uppercase tracking-tight flex items-center gap-2 group-hover:text-orange-400 transition-colors">
              GHOST PROTOCOL
              <iconify-icon className="text-orange-500 text-sm drop-shadow-[0_0_5px_rgba(249,115,22,0.8)]" icon="solar:crown-bold"></iconify-icon>
</h4>
</div>
</div>

<div className="hidden md:flex items-center justify-between h-8 mx-4 flex-grow opacity-20 group-hover:opacity-40 transition-opacity gap-[1px]">
<div className="w-[3px] bg-white rounded-full h-[20%]"></div>
<div className="w-[3px] bg-white rounded-full h-[40%]"></div>
<div className="w-[3px] bg-white rounded-full h-[60%]"></div>
<div className="w-[3px] bg-white rounded-full h-[80%]"></div>
<div className="w-[3px] bg-white rounded-full h-[50%]"></div>
<div className="w-[3px] bg-white rounded-full h-[90%]"></div>
<div className="w-[3px] bg-white rounded-full h-[100%]"></div>
<div className="w-[3px] bg-white rounded-full h-[70%]"></div>
<div className="w-[3px] bg-white rounded-full h-[30%]"></div>
<div className="w-[3px] bg-white rounded-full h-[50%]"></div>
<div className="w-[3px] bg-white rounded-full h-[80%]"></div>
<div className="w-[3px] bg-white rounded-full h-[60%]"></div>
<div className="w-[3px] bg-white rounded-full h-[40%]"></div>
<div className="w-[3px] bg-white rounded-full h-[70%]"></div>
<div className="w-[3px] bg-white rounded-full h-[90%]"></div>
<div className="w-[3px] bg-white rounded-full h-[60%]"></div>
<div className="w-[3px] bg-white rounded-full h-[40%]"></div>
<div className="w-[3px] bg-white rounded-full h-[20%]"></div>
<div className="w-[3px] bg-white rounded-full h-[50%]"></div>
<div className="w-[3px] bg-white rounded-full h-[80%]"></div>
<div className="w-[3px] bg-white rounded-full h-[100%]"></div>
<div className="w-[3px] bg-white rounded-full h-[80%]"></div>
<div className="w-[3px] bg-white rounded-full h-[50%]"></div>
<div className="w-[3px] bg-white rounded-full h-[30%]"></div>
<div className="w-[3px] bg-white rounded-full h-[60%]"></div>
<div className="w-[3px] bg-white rounded-full h-[90%]"></div>
<div className="w-[3px] bg-white rounded-full h-[70%]"></div>
<div className="w-[3px] bg-white rounded-full h-[40%]"></div>
<div className="w-[3px] bg-white rounded-full h-[20%]"></div>
<div className="w-[3px] bg-white rounded-full h-[50%]"></div>
<div className="w-[3px] bg-white rounded-full h-[80%]"></div>
<div className="w-[3px] bg-white rounded-full h-[60%]"></div>
<div className="w-[3px] bg-white rounded-full h-[40%]"></div>
<div className="w-[3px] bg-white rounded-full h-[70%]"></div>
<div className="w-[3px] bg-white rounded-full h-[90%]"></div>
<div className="w-[3px] bg-white rounded-full h-[60%]"></div>
<div className="w-[3px] bg-white rounded-full h-[40%]"></div>
<div className="w-[3px] bg-white rounded-full h-[20%]"></div>
</div>
<div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto ml-auto">
<span className="text-xs text-neutral-500 w-16">120 BPM</span>
<span className="text-xs text-neutral-500 w-12">3:20</span>
<button className="text-neutral-400 hover:text-orange-500 transition-colors" title="Udostępnij">
<iconify-icon className="text-lg" icon="solar:share-linear"></iconify-icon>
</button>
<button className="sharp border border-orange-500 bg-orange-500 text-black text-[10px] px-3 py-1.5 uppercase tracking-widest font-semibold transition-all hover:bg-orange-400 flex items-center gap-1 glow-btn">
<iconify-icon className="text-sm" icon="solar:crown-bold"></iconify-icon>
                Excl.
              </button>
</div>
</div>
</div>
</div>
</section><div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<h2 className="text-3xl text-white tracking-wide font-futuristic mb-4">
    KATALOG / BEATSHOP
  </h2>
<p className="text-sm text-neutral-500 mb-12 max-w-2xl">
    Wybierz odpowiednią sekcję i licencję. Pełna lista dostępnych
    produkcji muzycznych gotowych do zakupu.
  </p>

<div className="flex gap-6 mb-6 border-b border-neutral-900 px-2">
<button className="text-xs font-futuristic tracking-widest uppercase pb-3 border-b-2 border-orange-500 text-orange-500 transition-all focus:outline-none" id="tab-non-exclusive" onclick="filterTracks('non-exclusive')">
            Non-Exclusive
          </button>
<button className="text-xs font-futuristic tracking-widest uppercase pb-3 border-b-2 border-transparent text-neutral-500 hover:text-white transition-all focus:outline-none" id="tab-exclusive" onclick="filterTracks('exclusive')">
            Exclusive
          </button>
</div>

<div className="flex flex-col" id="track-list">

<div className="track-item flex flex-wrap md:flex-nowrap items-center justify-between py-3 border-b border-neutral-900/50 transition-colors group px-4 bg-neutral-900/80 border-l-2 border-l-orange-500" data-type="non-exclusive">
<div className="flex items-center gap-4 w-full md:w-auto mb-3 md:mb-0">
<span className="text-xs text-orange-500 font-futuristic w-4">
                01
              </span>
<button className="text-orange-500 focus:outline-none transition-colors">
<iconify-icon className="text-2xl drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]" icon="solar:pause-circle-bold"></iconify-icon>
</button>
<div className="w-40">
<h4 className="text-xs text-white font-medium truncate uppercase tracking-tight text-orange-400">
            NIGHT CITY
          </h4>
</div>
</div>

<div className="hidden md:flex items-center gap-[2px] h-6 mx-4 flex-grow">
<div className="w-[2px] bg-orange-500 rounded-full h-[40%] animate-[wave_0.8s_ease-in-out_infinite]"></div>
<div className="w-[2px] bg-orange-500 rounded-full h-[80%] animate-[wave_1.2s_ease-in-out_infinite_0.1s]"></div>
<div className="w-[2px] bg-orange-500 rounded-full h-[100%] animate-[wave_0.9s_ease-in-out_infinite_0.2s]"></div>
<div className="w-[2px] bg-orange-500 rounded-full h-[60%] animate-[wave_1.1s_ease-in-out_infinite_0.3s]"></div>
<div className="w-[2px] bg-orange-500 rounded-full h-[90%] animate-[wave_0.7s_ease-in-out_infinite_0.4s]"></div>
<div className="w-[2px] bg-orange-500 rounded-full h-[50%] animate-[wave_0.9s_ease-in-out_infinite_0.5s]"></div>
<div className="flex-grow h-[2px] bg-neutral-800 ml-2 relative rounded-full">
<div className="absolute left-0 top-0 h-full bg-orange-500 w-1/3 rounded-full"></div>
<div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_5px_#f97316]">
</div>
</div>
</div>
<div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto ml-auto">
<span className="text-xs text-orange-400 w-16 font-medium">
                130 BPM
              </span>
<span className="text-xs text-orange-400 w-12 font-medium">2:45</span>
<button className="text-neutral-400 hover:text-orange-500 transition-colors" title="Udostępnij">
<iconify-icon className="text-lg" icon="solar:share-linear"></iconify-icon>
</button>
<button className="sharp border border-orange-500 bg-black text-orange-500 text-[10px] px-3 py-1.5 uppercase tracking-widest font-semibold transition-all hover:bg-orange-500 hover:text-black flex items-center gap-1">
<iconify-icon className="text-sm" icon="solar:cart-linear"></iconify-icon>
                Kup
              </button>
</div>
</div>

<div className="track-item flex flex-wrap md:flex-nowrap items-center justify-between py-3 border-b border-neutral-900/50 hover:bg-neutral-900/50 transition-colors group px-4 border-l-2 border-l-transparent" data-type="non-exclusive">
<div className="flex items-center gap-4 w-full md:w-auto mb-3 md:mb-0">
<span className="text-xs text-neutral-600 font-futuristic w-4 group-hover:text-orange-500 transition-colors">
                02
              </span>
<button className="text-neutral-400 focus:outline-none group-hover:text-orange-500 transition-colors">
<iconify-icon className="text-2xl glow-icon" icon="solar:play-circle-linear"></iconify-icon>
</button>
<div className="w-40">
<h4 className="text-xs text-white font-medium truncate uppercase tracking-tight group-hover:text-orange-400 transition-colors">
            SYNTHETIC SOUL
          </h4>
</div>
</div>
<div className="hidden md:flex items-center gap-[2px] h-6 mx-4 flex-grow opacity-20 group-hover:opacity-40 transition-opacity">
<div className="w-[2px] bg-white rounded-full h-[30%]"></div>
<div className="w-[2px] bg-white rounded-full h-[50%]"></div>
<div className="w-[2px] bg-white rounded-full h-[80%]"></div>
<div className="w-[2px] bg-white rounded-full h-[40%]"></div>
<div className="w-[2px] bg-white rounded-full h-[60%]"></div>
<div className="w-[2px] bg-white rounded-full h-[30%]"></div>
<div className="flex-grow h-[2px] bg-white ml-2 rounded-full"></div>
</div>
<div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto ml-auto">
<span className="text-xs text-neutral-500 w-16">115 BPM</span>
<span className="text-xs text-neutral-500 w-12">3:10</span>
<button className="text-neutral-400 hover:text-orange-500 transition-colors" title="Udostępnij">
<iconify-icon className="text-lg" icon="solar:share-linear"></iconify-icon>
</button>
<button className="sharp border border-orange-500 bg-black text-orange-500 text-[10px] px-3 py-1.5 uppercase tracking-widest font-semibold transition-all hover:bg-orange-500 hover:text-black flex items-center gap-1">
<iconify-icon className="text-sm" icon="solar:cart-linear"></iconify-icon>
                Kup
              </button>
</div>
</div>

<div className="track-item flex flex-wrap md:flex-nowrap items-center justify-between py-3 border-b border-neutral-900/50 hover:bg-neutral-900/50 transition-colors group px-4 border-l-2 border-l-transparent" data-type="exclusive" style={{display: 'none'}}>
<div className="flex items-center gap-4 w-full md:w-auto mb-3 md:mb-0">
<span className="text-xs text-neutral-600 font-futuristic w-4 group-hover:text-orange-500 transition-colors">
                01
              </span>
<button className="text-neutral-400 focus:outline-none group-hover:text-orange-500 transition-colors">
<iconify-icon className="text-2xl glow-icon" icon="solar:play-circle-linear"></iconify-icon>
</button>
<div className="w-40">
<h4 className="text-xs text-white font-medium truncate uppercase tracking-tight flex items-center gap-2 group-hover:text-orange-400 transition-colors">
            DATA BREACH
            <iconify-icon className="text-orange-500 text-xs" icon="solar:crown-linear"></iconify-icon>
</h4>
</div>
</div>
<div className="hidden md:flex items-center gap-[2px] h-6 mx-4 flex-grow opacity-20 group-hover:opacity-40 transition-opacity">
<div className="w-[2px] bg-white rounded-full h-[60%]"></div>
<div className="w-[2px] bg-white rounded-full h-[90%]"></div>
<div className="w-[2px] bg-white rounded-full h-[40%]"></div>
<div className="w-[2px] bg-white rounded-full h-[100%]"></div>
<div className="w-[2px] bg-white rounded-full h-[50%]"></div>
<div className="w-[2px] bg-white rounded-full h-[70%]"></div>
<div className="flex-grow h-[2px] bg-white ml-2 rounded-full"></div>
</div>
<div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto ml-auto">
<span className="text-xs text-neutral-500 w-16">145 BPM</span>
<span className="text-xs text-neutral-500 w-12">2:55</span>
<button className="text-neutral-400 hover:text-orange-500 transition-colors" title="Udostępnij">
<iconify-icon className="text-lg" icon="solar:share-linear"></iconify-icon>
</button>
<button className="sharp border border-orange-500 bg-orange-500 text-black text-[10px] px-3 py-1.5 uppercase tracking-widest font-semibold transition-all hover:bg-orange-400 flex items-center gap-1 glow-btn">
<iconify-icon className="text-sm" icon="solar:cart-linear"></iconify-icon>
                Excl.
              </button>
</div>
</div>

<div className="track-item flex flex-wrap md:flex-nowrap items-center justify-between py-3 border-b border-neutral-900/50 hover:bg-neutral-900/50 transition-colors group px-4 border-l-2 border-l-transparent" data-type="exclusive" style={{display: 'none'}}>
<div className="flex items-center gap-4 w-full md:w-auto mb-3 md:mb-0">
<span className="text-xs text-neutral-600 font-futuristic w-4 group-hover:text-orange-500 transition-colors">
                02
              </span>
<button className="text-neutral-400 focus:outline-none group-hover:text-orange-500 transition-colors">
<iconify-icon className="text-2xl glow-icon" icon="solar:play-circle-linear"></iconify-icon>
</button>
<div className="w-40">
<h4 className="text-xs text-white font-medium truncate uppercase tracking-tight flex items-center gap-2 group-hover:text-orange-400 transition-colors">
            GHOST PROTOCOL
            <iconify-icon className="text-orange-500 text-xs" icon="solar:crown-linear"></iconify-icon>
</h4>
</div>
</div>
<div className="hidden md:flex items-center gap-[2px] h-6 mx-4 flex-grow opacity-20 group-hover:opacity-40 transition-opacity">
<div className="w-[2px] bg-white rounded-full h-[50%]"></div>
<div className="w-[2px] bg-white rounded-full h-[30%]"></div>
<div className="w-[2px] bg-white rounded-full h-[80%]"></div>
<div className="w-[2px] bg-white rounded-full h-[100%]"></div>
<div className="w-[2px] bg-white rounded-full h-[60%]"></div>
<div className="w-[2px] bg-white rounded-full h-[40%]"></div>
<div className="flex-grow h-[2px] bg-white ml-2 rounded-full"></div>
</div>
<div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto ml-auto">
<span className="text-xs text-neutral-500 w-16">120 BPM</span>
<span className="text-xs text-neutral-500 w-12">3:20</span>
<button className="text-neutral-400 hover:text-orange-500 transition-colors" title="Udostępnij">
<iconify-icon className="text-lg" icon="solar:share-linear"></iconify-icon>
</button>
<button className="sharp border border-orange-500 bg-orange-500 text-black text-[10px] px-3 py-1.5 uppercase tracking-widest font-semibold transition-all hover:bg-orange-400 flex items-center gap-1 glow-btn">
<iconify-icon className="text-sm" icon="solar:cart-linear"></iconify-icon>
                Excl.
              </button>
</div>
</div>
</div>
</div>

<section className="reveal border-neutral-900 border-t pt-12 pb-12">
<div className="max-w-7xl mx-auto px-6 mb-8">
<h2 className="text-xs uppercase tracking-widest text-neutral-500">
          Zaufali mi:
        </h2>
</div>
<div className="marquee-container pt-6 pb-6">
<div className="marquee-content font-futuristic text-2xl md:text-4xl text-neutral-700 tracking-tighter uppercase items-center gap-6 px-6">

<span className="hover:text-orange-500 transition-colors cursor-default">
            NIZIOŁ
          </span>
<span className="text-orange-600/30">•</span>
<span className="hover:text-orange-500 transition-colors cursor-default text-neutral-400">
            STEP RECORDS
          </span>
<span className="text-orange-600/30">•</span>
<span className="hover:text-orange-500 transition-colors cursor-default">
            TPS
          </span>
<span className="text-orange-600/30">•</span>
<span className="hover:text-orange-500 transition-colors cursor-default text-neutral-400">
            HINOL POLSKA WERSJA
          </span>
<span className="text-orange-600/30">•</span>
<span className="hover:text-orange-500 transition-colors cursor-default">
            MAŁACH
          </span>
<span className="text-orange-600/30">•</span>
<span className="hover:text-orange-500 transition-colors cursor-default">
            RUFUZ
          </span>
<span className="text-orange-600/30">•</span>
<span className="hover:text-orange-500 transition-colors cursor-default text-neutral-400">
            DEDIS
          </span>
<span className="text-orange-600/30">•</span>
<span className="hover:text-orange-500 transition-colors cursor-default">
            INTRUZ
          </span>
<span className="text-orange-600/30">•</span>
<span className="text-neutral-400 hover:text-orange-500 transition-colors cursor-default">
            CYBER THUG
          </span>
<span className="text-orange-600/30">•</span>
<span className="hover:text-orange-500 transition-colors cursor-default">
            KACPER HTA
          </span>
</div>
</div>
</section><section className="reveal border-neutral-900 border-t pt-24 pb-24" id="licenses">
<div className="max-w-7xl ring-0 rounded-none mr-auto ml-auto pr-6 pl-6">
<h2 className="text-3xl font-medium text-white tracking-wide font-futuristic text-left mb-2">
          LICENCJE MUZYCZNE
        </h2>
<p className="text-sm text-neutral-500 text-left max-w-xl mb-16">Trzy proste opcje, idealnie dopasowane do skali i potrzeb Twojego projektu. Niezależnie od tego, czy to Twój pierwszy singiel, czy duży komercyjny hit.</p>
<div className="grid grid-cols-1 lg:grid-cols-3 overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-white/10 border-0 rounded-none mt-12 backdrop-blur-md scale-100">
<div className="lg:p-12 flex flex-col hover:bg-white/[0.02] transition-colors group border-neutral-900 border-2 rounded-xl mr-1 ml-1 pt-10 pr-10 pb-10 pl-10 relative scale-90">
<div className="mb-8">
<span className="text-xs text-zinc-500 uppercase tracking-widest font-montserrat font-medium">
                Podstawowa
              </span>
<div className="text-4xl font-semibold text-white mt-4 tracking-tight font-syne">
                MP3 + WAV
              </div>
</div>
<p className="text-zinc-400 text-sm leading-relaxed mb-10 font-montserrat min-h-[60px]">
              Idealna na start. Wysokiej jakości pliki audio do pierwszych
              publikacji (Spotify/Apple/YT).
            </p>
<ul className="space-y-5 mb-12 flex-grow">
<li className="flex items-center gap-4 text-sm text-zinc-300 font-montserrat">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                Nielimitowane wyświetlenia (YouTube)
              </li>
<li className="flex items-center gap-4 text-sm text-zinc-300 font-montserrat">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                Do 500,000 streamów
              </li>
<li className="flex items-center gap-4 text-sm text-zinc-300 font-montserrat">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                Pliki MP3 &amp; WAV
              </li>
</ul>
<button className="w-full py-4 rounded-xl border border-white/10 bg-transparent text-white text-xs font-semibold uppercase tracking-wider group-hover:border-orange-500 group-hover:text-orange-500 transition-colors font-montserrat">
              Wybierz
            </button>
</div>
<div className="lg:p-12 flex flex-col hover:bg-white/[0.02] transition-colors group ring-2 rounded-xl pt-10 pr-10 pb-10 pl-10 relative scale-90">
<div className="absolute -top-px left-1/2 -translate-x-1/2 bg-orange-500 text-black text-[10px] px-4 py-1 uppercase tracking-widest font-bold rounded-b-lg">
              Najpopularniejsza
            </div>
<div className="mb-8 mt-2">
<span className="text-xs text-zinc-400 uppercase tracking-widest font-montserrat font-medium">
                Profesjonalna
              </span>
<div className="text-4xl font-semibold text-white mt-4 tracking-tight font-syne">
                PREMIUM + STEMS
              </div>
</div>
<p className="text-zinc-400 text-sm leading-relaxed mb-10 font-montserrat min-h-[60px]">
              Pełna kontrola nad mixem. Brak limitów na platformach i najwyższa
              jakość dźwięku.
            </p>
<ul className="space-y-5 mb-12 flex-grow">
<li className="flex items-center gap-4 text-sm text-white font-montserrat font-medium">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-bold"></iconify-icon>
                WAV + Rozbite Ślady (Stems)
              </li>
<li className="flex items-center gap-4 text-sm text-white font-montserrat font-medium">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-bold"></iconify-icon>
                Nielimitowane streamy
              </li>
<li className="flex items-center gap-4 text-sm text-white font-montserrat font-medium">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-bold"></iconify-icon>
                Nielimitowane teledyski
              </li>
</ul>
<button className="w-full py-4 rounded-xl bg-orange-500 text-black text-xs font-semibold uppercase tracking-wider hover:bg-orange-400 transition-colors font-montserrat glow-btn">
              Wybierz Premium
            </button>
</div>
<div className="lg:p-12 flex flex-col hover:bg-orange-950/20 transition-colors group overflow-hidden bg-gradient-to-b from-[#000000] to-orange-600/20 border-stone-900 border-0 rounded-xl ring-2 pt-10 pr-10 pb-10 pl-10 relative scale-90 space-x-0">
<div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px] pointer-events-none"></div>
<div className="mb-8 relative z-10">
<iconify-icon className="text-orange-500 text-3xl mb-4" icon="solar:crown-bold"></iconify-icon>
<div className="block">
<span className="text-xs text-orange-500 uppercase tracking-widest font-montserrat font-medium">
                  Wyłączność
                </span>
</div>
<div className="text-4xl font-semibold text-white mt-4 tracking-tight font-syne">
                EXCLUSIVE
              </div>
</div>
<p className="text-zinc-400 text-sm leading-relaxed mb-10 font-montserrat min-h-[60px] relative z-10">
              Pełne prawa majątkowe i wolność artystyczna. Bit natychmiast znika
              ze sklepu.
            </p>
<ul className="space-y-5 mb-12 flex-grow relative z-10">
<li className="flex gap-4 text-sm text-zinc-200 font-montserrat gap-x-4 gap-y-4 items-center">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                Pełne prawa autorskie
              </li>
<li className="flex items-center gap-4 text-sm text-zinc-200 font-montserrat">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                Usunięcie ze sklepu (1 of 1)
              </li>
<li className="flex items-center gap-4 text-sm text-zinc-200 font-montserrat">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                Umowa prawna (PDF)
              </li>
</ul>
<button className="w-full py-4 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider hover:bg-orange-500 hover:text-black transition-colors font-montserrat relative z-10">
              Kontakt
            </button>
</div>
</div>
</div>
</section>



<section className="reveal border-neutral-900 border-t pt-24 pb-24" id="services">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl text-white tracking-normal font-futuristic text-center mb-12">
          USŁUGI MIX &amp; MASTERING
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="sharp border border-neutral-800 p-8 hover:border-orange-500/50 transition-colors relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-orange-500/10 transition-colors"></div>
<iconify-icon className="text-4xl text-orange-500 mb-6" icon="solar:tuning-square-2-linear"></iconify-icon>
<h3 className="font-futuristic text-xl text-white tracking-tight mb-4">
              MIX WOKALI + BEAT (WAV/MP3)
            </h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed">
              Złożenie Twoich wokali z gotowym bitem w jednym pliku. Wyrównanie,
              korekcja barwy, kompresja, efekty przestrzenne (reverb/delay) oraz
              finalny mastering utworu, aby brzmiał głośno i czysto na
              platformach streamingowych.
            </p>
<button className="text-xs text-white uppercase tracking-widest border-b border-white pb-1 hover:text-orange-500 hover:border-orange-500 transition-colors inline-flex items-center gap-2">
              Sprawdź Cennik
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="sharp border border-neutral-800 p-8 hover:border-orange-500/50 transition-colors relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-orange-500/10 transition-colors"></div>
<iconify-icon className="text-4xl text-orange-500 mb-6" icon="solar:soundwave-linear"></iconify-icon>
<h3 className="font-futuristic text-xl text-white tracking-tight mb-4">
              PEŁNY MIX ŚLADÓW (STEMS)
            </h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed">
              Zaawansowany mix i master, gdzie bit oraz wokale dostarczone są w
              osobnych śladach. Pełna kontrola nad każdym elementem utworu.
              Chirurgiczne cięcia częstotliwości, kreowanie głębi i maksymalne
              uderzenie finalnego miksu.
            </p>
<button className="text-xs text-white uppercase tracking-widest border-b border-white pb-1 hover:text-orange-500 hover:border-orange-500 transition-colors inline-flex items-center gap-2">
              Sprawdź Cennik
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section><div className="overflow-hidden flex font-geist bg-black w-full h-12 border-white/10 border-t border-b relative items-center" id="about">
<div className="absolute w-full flex whitespace-nowrap animate-[ticker_30s_linear_infinite] gap-16 text-xs text-zinc-500 uppercase tracking-widest font-medium">
<span>Produkcja</span>
<span>Mix/Master</span>
<span>Beatshop</span>
<span className="">Aranżacja</span>
<span>Wokale</span>
<span>Studio</span>
<span>Produkcja</span>
<span>Mix/Master</span>
<span className="">Beatshop</span>
<span>Aranżacja</span>
<span>Wokale</span>
<span>Studio</span>
<span>Produkcja</span>
<span>Mix/Master</span>
<span>Beatshop</span>
<span>Aranżacja</span>
<span>Wokale</span>
<span>Studio</span>
</div>
<div className="absolute right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
<div className="absolute left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
</div>

<section className="reveal bg-neutral-950/20 border-neutral-900 border-t pt-24 pb-24">
<div className="max-w-4xl mx-auto px-6">
<h2 className="font-futuristic text-2xl text-white tracking-tighter mb-8 flex items-center gap-4">
<iconify-icon className="text-orange-500" icon="solar:video-frame-linear"></iconify-icon>
          OSTATNIO NA YOUTUBE
        </h2>

<div className="aspect-video w-full border border-neutral-800 sharp relative group bg-neutral-900 cursor-pointer overflow-hidden hover:border-orange-500/50 transition-colors">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzExMSIvPjwvc3ZnPg==')] bg-cover opacity-50 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-16 h-16 border border-white flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-black transition-all glow-btn sharp">
<iconify-icon className="text-3xl" icon="solar:play-linear"></iconify-icon>
</div>
</div>
<div className="absolute bottom-6 left-6 right-6">
<p className="text-xs uppercase tracking-widest text-orange-500 mb-1">
              Making of
            </p>
<h3 className="font-futuristic text-xl text-white tracking-tight drop-shadow-md">
              STUDIO SESSION: TWORZENIE BITU "NIGHT CITY"
            </h3>
</div>
</div>
</div>
</section>

<section className="overflow-hidden reveal bg-black border-neutral-900 border-t pt-32 pb-32 relative" id="youtube">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-white font-syne tracking-tight mb-6 relative z-10 flex items-center gap-4">
<iconify-icon className="text-orange-500" icon="solar:video-frame-linear"></iconify-icon>
          SPRAWDŹ MÓJ KANAŁ
        </h2>
<p className="text-zinc-400 text-base font-montserrat max-w-2xl mx-auto mb-16 relative z-10">
          Subskrybuj kanał YouTube, aby być na bieżąco z nowymi produkcjami.
          Nowe bity wlatują w każdym tygodniu. Zobacz proces i posłuchaj
          nowości.
        </p>
<div className="w-full max-w-5xl aspect-video md:aspect-[21/9] border border-white/10 bg-zinc-950 rounded-[2rem] relative flex items-center justify-center group cursor-pointer overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-black to-black opacity-60 transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzExMSIvPjwvc3ZnPg==')] bg-cover opacity-20 mix-blend-overlay"></div>
<div className="relative z-20 w-20 h-20 md:w-24 md:h-24 rounded-full bg-orange-500/10 backdrop-blur-xl border border-orange-500/30 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform duration-500 group-hover:bg-orange-500 group-hover:text-black glow-btn">
<iconify-icon className="text-4xl ml-2" icon="solar:play-bold"></iconify-icon>
</div>
<div className="absolute bottom-6 left-8 z-20 text-left hidden md:block">
<div className="text-white text-lg font-medium font-montserrat tracking-tight mb-1">
              Making of
            </div>
<div className="text-zinc-400 text-sm font-montserrat">
              STUDIO SESSION: TWORZENIE BITU "NIGHT CITY"
            </div>
</div>
</div>
<button className="mt-16 px-10 py-4 rounded-full border border-white/10 bg-white/[0.02] text-white text-xs font-semibold uppercase tracking-wider hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-colors inline-block font-montserrat relative z-10 glow-btn">
          Przejdź na YouTube
        </button>
</div>
</section><footer className="bg-black pt-24 pb-10" id="contact">
<div className="max-w-[90rem] mx-auto px-6 md:px-12">
<div className="grid md:grid-cols-2 gap-16 mb-20">
<div className="">
<h2 className="text-4xl font-semibold text-white font-display uppercase tracking-tight mb-6">
          Kontakt
        </h2>
<p className="text-zinc-400 text-base font-montserrat mb-10 max-w-sm">
          Masz pytania dotyczące licencji, mix/masteringu, czy chcesz
          zamówić custom beat? Napisz do mnie.
        </p>
<div className="space-y-6">
<a className="flex items-center gap-4 text-base text-zinc-300 hover:text-white transition-colors font-montserrat" href="mailto:kontakt@flameprodukcja.pl">
<div className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
</div>
            kontakt@flameprodukcja.pl
          </a>
<a className="flex items-center gap-4 text-base text-zinc-300 hover:text-white transition-colors font-montserrat" href="#">
<div className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</div>
            @flame.produkcja
          </a>
</div>
</div>
<div>
<form className="flex flex-col gap-4">
<div className="grid grid-cols-2 gap-4">
<input className="bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors font-montserrat" placeholder="Imię / Ksywa" type="text"/>
<input className="bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors font-montserrat" placeholder="E-mail" type="email"/>
</div>
<textarea className="bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors font-montserrat resize-none" placeholder="Twoja wiadomość..." rows="5"></textarea>
<button className="w-full py-4 rounded-xl bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-colors font-montserrat mt-2" type="submit">
                Wyślij wiadomość
              </button>
</form>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-sm text-zinc-600 font-montserrat">
        © 2024 Flame Produkcja. Wszelkie prawa zastrzeżone.
      </div>
<div className="flex gap-8">
<a className="text-sm text-zinc-600 hover:text-zinc-300 transition-colors font-montserrat" href="#">
          Regulamin
        </a>
<a className="text-sm text-zinc-600 hover:text-zinc-300 transition-colors font-montserrat" href="#">
          Polityka Prywatności
        </a>
</div>
</div>
</div>
</footer>

<footer className="border-t border-neutral-900 py-8 text-center bg-black">
<p className="font-futuristic tracking-widest text-white text-sm mb-2 flex items-center justify-center gap-1">
        FLAME PRODUKCJA
        <iconify-icon className="text-orange-500" icon="solar:fire-linear"></iconify-icon>
</p>
<p className="text-xs uppercase text-neutral-600 tracking-widest">
        © 2023 Wszelkie prawa zastrzeżone.
      </p>
</footer>




    </>
  );
}
