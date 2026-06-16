import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



          (function() {
            const carousel = document.getElementById('galleryCarousel');
            const dots = document.querySelectorAll('#galleryDots button');
            let currentIndex = 0;

            function updateDots(index) {
              dots.forEach((dot, i) => {
                if (i === index) {
                  dot.classList.remove('w-2', 'h-2', 'bg-slate-600');
                  dot.classList.add('w-2.5', 'h-2.5', 'bg-amber-400');
                } else {
                  dot.classList.remove('w-2.5', 'h-2.5', 'bg-amber-400');
                  dot.classList.add('w-2', 'h-2', 'bg-slate-600');
                }
              });
            }

            carousel.addEventListener('scroll', function() {
              const scrollLeft = carousel.scrollLeft;
              const itemWidth = carousel.querySelector('div').offsetWidth + 16;
              const newIndex = Math.round(scrollLeft / itemWidth);
              if (newIndex !== currentIndex && newIndex >= 0 && newIndex < dots.length) {
                currentIndex = newIndex;
                updateDots(currentIndex);
              }
            });

            dots.forEach((dot, index) => {
              dot.addEventListener('click', function() {
                const itemWidth = carousel.querySelector('div').offsetWidth + 16;
                carousel.scrollTo({ left: itemWidth * index, behavior: 'smooth' });
                currentIndex = index;
                updateDots(currentIndex);
              });
            });
          })();
        


          (function() {
            const carousel = document.getElementById('testimonialCarousel');
            const dots = document.querySelectorAll('#testimonialDots button');
            let currentIndex = 0;

            function updateDots(index) {
              dots.forEach((dot, i) => {
                if (i === index) {
                  dot.classList.remove('w-2', 'h-2', 'bg-slate-600');
                  dot.classList.add('w-2.5', 'h-2.5', 'bg-amber-400');
                } else {
                  dot.classList.remove('w-2.5', 'h-2.5', 'bg-amber-400');
                  dot.classList.add('w-2', 'h-2', 'bg-slate-600');
                }
              });
            }

            carousel.addEventListener('scroll', function() {
              const scrollLeft = carousel.scrollLeft;
              const itemWidth = carousel.querySelector('div').offsetWidth + 16;
              const newIndex = Math.round(scrollLeft / itemWidth);
              if (newIndex !== currentIndex && newIndex >= 0 && newIndex < dots.length) {
                currentIndex = newIndex;
                updateDots(currentIndex);
              }
            });

            dots.forEach((dot, index) => {
              dot.addEventListener('click', function() {
                const itemWidth = carousel.querySelector('div').offsetWidth + 16;
                carousel.scrollTo({ left: itemWidth * index, behavior: 'smooth' });
                currentIndex = index;
                updateDots(currentIndex);
              });
            });
          })();
        


          function selectSize(index) {
            const slider = document.getElementById('sizeSlider');
            const buttons = slider.parentElement.querySelectorAll('button');
            const width = 100 / 3;
            slider.style.left = `calc(${index * width}% + 4px)`;
            slider.style.width = `calc(${width}% - 8px)`;
            buttons.forEach((btn, i) => {
              if (i === index) {
                btn.classList.remove('text-slate-400');
                btn.classList.add('text-slate-900');
              } else {
                btn.classList.remove('text-slate-900');
                btn.classList.add('text-slate-400');
              }
            });
          }
        


      lucide.createIcons();

      function openReservationSheet() {
          document.getElementById('reservationSheet').classList.remove('hidden');
          setTimeout(() => {
              document.getElementById('sheetContent').style.transform = 'translateY(0)';
          }, 10);
      }

      function closeReservationSheet() {
          document.getElementById('sheetContent').style.transform = 'translateY(100%)';
          setTimeout(() => {
              document.getElementById('reservationSheet').classList.add('hidden');
          }, 300);
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none opacity-30 z-0" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E\')'}}></div>

<div className="fixed inset-0 z-0" style={{background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)'}}></div>


<div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-t border-slate-800/50 shadow-[0_-4px_24px_rgba(0,0,0,0.35)]">
<div className="flex max-w-md mr-auto ml-auto pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="">
<p className="leading-tight text-base font-medium text-white">
            Rezervēt glabātavu
          </p>
<p className="text-sm text-slate-500">No 34,99 € mēnesī</p>
</div>
<button className="hover:bg-amber-500 active:bg-amber-600 transition-colors text-base font-semibold text-slate-900 bg-amber-400 rounded-lg px-5 py-2.5" onclick="openReservationSheet()">
          Rezervēt
        </button>
</div>
</div>
<div className="z-10 max-w-md mr-auto ml-auto pr-4 pb-24 pl-4 relative">

<header className="sticky top-0 z-50 bg-slate-900/95 border-b border-slate-800/60" style={{height: '56px'}}>
<div className="flex items-center justify-between h-full px-3">

<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-amber-400 flex items-center justify-center">
<span className="text-slate-900 font-bold text-xs tracking-tight">
                SC
              </span>
</div>
</div>

<div className="absolute left-1/2 -translate-x-1/2"></div>

<div className="flex items-center gap-2">

<div className="relative flex bg-slate-800 rounded-full p-0.5 border border-slate-700/50">
<div className="absolute left-0.5 top-0.5 w-7 h-6 bg-slate-600 rounded-full transition-transform" style={{transform: 'translateX(0)'}}></div>
<button className="relative z-10 px-2 py-1 text-xs font-medium rounded-full text-white">
                LV
              </button>
<button className="relative z-10 px-2 py-1 text-xs font-medium rounded-full text-slate-500 hover:text-slate-300 transition-colors">
                EN
              </button>
</div>

<button aria-label="Zvanīt uz klientu centru" className="w-8 h-8 rounded-full bg-transparent flex items-center justify-center border border-slate-700/50 hover:border-slate-600 transition-colors">
<svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
</button>
</div>
</div>
</header>

<section className="mt-6" data-section="hero-bento">

<div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{backgroundImage: 'linear-gradient(#C7CCD6 1px, transparent 1px), linear-gradient(90deg, #C7CCD6 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

<div className="relative rounded-xl p-5 mb-4" style={{background: 'linear-gradient(135deg, #0D141D 0%, #111A26 100%)', border: '1px solid rgba(27, 35, 48, 0.14)'}}>
<div className="space-y-3">

<span className="inline-flex items-center text-[10px] uppercase text-sm font-medium text-amber-400 tracking-wider border-amber-400/30 border rounded-md pt-1 pr-2.5 pb-1 pl-2.5" style={{letterSpacing: '0.05em'}}>
              Pašapkalpošanas glabātava Sonora CargoPark
            </span>

<h1 className="text-[28px] leading-[1.15] text-2xl font-bold text-white tracking-tight" style={{maxWidth: '90%'}}>
              Droša glabāšana tieši uz A6 šosejas
            </h1>

<p className="leading-relaxed text-base text-slate-400" style={{maxWidth: '85%'}}>
              Industriāla līmeņa drošība un klimata kontrole mantām, kas
              pelnījušas labāko.
            </p>

<div className="flex flex-wrap gap-2 pt-2">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-300 bg-slate-800/40 border border-slate-700/30 rounded-md">
<svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12,6 12,12 16,14"></polyline>
</svg>
                24/7 piekļuve
              </span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-300 bg-slate-800/40 border border-slate-700/30 rounded-md">
<svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
                Apsargāta zona
              </span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-300 bg-slate-800/40 border border-slate-700/30 rounded-md">
<svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 1 1 4 0Z"></path>
</svg>
                Klimata kontrole
              </span>
</div>
</div>
</div>

<div className="relative rounded-xl p-5 overflow-hidden" style={{background: 'linear-gradient(135deg, #0D141D 0%, #111A26 100%)', border: '1px solid rgba(27, 35, 48, 0.14)', minHeight: '200px'}}>

<div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{backgroundImage: 'linear-gradient(#C7CCD6 1px, transparent 1px), linear-gradient(90deg, #C7CCD6 1px, transparent 1px)', backgroundSize: '16px 16px'}}></div>

<div className="absolute top-5 left-5 z-10">
<span className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 bg-amber-400 rounded-md pt-1.5 pr-3 pb-1.5 pl-3">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
              Tieši uz A6
            </span>
</div>

<div className="flex w-[60%] absolute top-0 right-0 bottom-0 items-center justify-center">
<svg className="-translate-y-2 -translate-y-1 w-[205px] h-[197px]" data-icon-replaced="true" fill="none" preserveaspectratio="xMidYMid meet" strokeWidth="2" style={{width: '205px', height: '197px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 200 160">

<line className="" stroke="#C7CCD6" strokeLinecap="round" strokeWidth="1.6" x1="20" x2="180" y1="80" y2="80"></line>

<line className="" stroke="#FFC426" stroke-dasharray="6 4" strokeLinecap="round" strokeWidth="1.6" x1="50" x2="30" y1="80" y2="50"></line>

<line className="" stroke="#FFC426" stroke-dasharray="6 4" strokeLinecap="round" strokeWidth="1.6" x1="140" x2="170" y1="80" y2="110"></line>

<line className="" opacity="0.5" stroke="#C7CCD6" stroke-dasharray="4 4" strokeLinecap="round" strokeWidth="1" x1="100" x2="100" y1="80" y2="45"></line>

<circle className="" cx="100" cy="80" fill="#FFC426" r="8" stroke="#ffffff" strokeWidth="1.5"></circle>
<circle className="" cx="100" cy="80" fill="#0D141D" r="3"></circle>

<circle className="" cx="50" cy="80" fill="#1B2330" r="4" stroke="#C7CCD6" strokeWidth="1.2"></circle>
<circle className="" cx="140" cy="80" fill="#1B2330" r="4" stroke="#C7CCD6" strokeWidth="1.2"></circle>

<g className="" transform="translate(155, 55)">
<rect className="" fill="none" height="16" rx="1" stroke="#C7CCD6" strokeWidth="1.4" width="24" x="0" y="8"></rect>
<path className="" d="M0 8 L12 0 L24 8" fill="none" stroke="#C7CCD6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4"></path>
<rect className="" fill="none" height="10" stroke="#C7CCD6" strokeWidth="1.2" width="6" x="9" y="14"></rect>
</g>

<g className="invisible" style={{visibility: 'hidden'}} transform="translate(165, 115)">
<polyline className="" fill="none" points="8,2 12,6 8,10" stroke="#FFC426" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4"></polyline>
</g>

<rect className="" fill="#0D141D" height="16" rx="3" stroke="#1B2330" strokeWidth="1" width="28" x="70" y="92"></rect>
<text className="" fill="#FFC426" fontSize="10" font-weight="600" text-anchor="middle" x="84" y="103">
                A6
              </text>

<text className="" fill="#C7CCD6" fontSize="8" opacity="0.7" text-anchor="middle" x="30" y="44">
                Rīga
              </text>
<text className="" fill="#C7CCD6" fontSize="8" opacity="0.7" style={{}} text-anchor="middle" x="170" y="120">
                Ogre
              </text>
</svg>
</div>

<div className="absolute right-5 bottom-5 left-5 translate-y-3">
<p className="text-sm text-slate-500 translate-y-1">
              Stratēģiska atrašanās vieta starp Rīgu, Salaspili un Ikšķili
            </p>
</div>
</div>

<div className="relative mt-4 -mx-4">

<div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>

<div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>
</div>

<div className="mt-6 space-y-3">

<div className="relative overflow-hidden rounded-xl" style={{boxShadow: '0 4px 12px -2px rgba(255, 196, 38, 0.15)'}}>

<div className="absolute top-0 left-0 right-0 h-[2px]" style={{background: 'linear-gradient(90deg, transparent 0%, rgba(255, 209, 90, 0.5) 50%, transparent 100%)'}}></div>
<button className="w-full flex items-center justify-center gap-2.5 py-4 px-6 text-base font-semibold text-slate-900 transition-all hover:opacity-90 active:scale-[0.98]" style={{background: 'linear-gradient(135deg, #FFC426 0%, #F59E0B 100%)'}}>
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
              Apskatīt pieejamās telpas
            </button>
</div>

<div className="flex justify-end">
<button className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-400 border border-slate-700/50 rounded-lg hover:border-slate-600 hover:text-slate-300 active:bg-slate-800/50 transition-all">
<span className="" style={{}}>Kā darbojas glabātavu īre</span>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<line x1="5" x2="19" y1="12" y2="12"></line>
<polyline points="12,5 19,12 12,19"></polyline>
</svg>
</button>
</div>
</div>
<style className="">
          [data-section="hero-bento"] {
            animation: heroFadeIn 180ms ease-out;
          }
          @keyframes heroFadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
        </style>
</section>
<section className="mt-8" data-section="process-inserted">
<div className="mb-4">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-1">
            Kā sākt glabāt Sonora CargoPark
          </h2>
<p className="text-base text-slate-400">
            Viss process no pieteikuma līdz pirmajai vizītei aizņem tikai dažas
            minūtes.
          </p>
</div>
<div className="relative">

<div className="absolute left-5 top-6 bottom-6 w-0.5 bg-gradient-to-b from-amber-400 via-amber-400/60 to-slate-700"></div>
<div className="space-y-4">

<div className="relative flex items-start gap-4 animate-fade-in-up" style={{animationDelay: '0ms'}}>
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-slate-900 font-bold text-base z-10 shadow-lg shadow-amber-400/20">
                1
              </div>
<div className="flex-1 bg-slate-800/60 rounded-xl p-4 border border-slate-700/40 shadow-md shadow-black/10 ml-1 relative">
<div className="absolute top-3 right-3">
<svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M21 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2"></path>
<rect height="8" rx="1" width="6" x="7" y="8"></rect>
<path d="M16 12h5"></path>
<path d="M16 9h3"></path>
<path d="M16 15h4"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-white mb-1 pr-6">
                  Izvēlieties telpas izmēru un cenu
                </h3>
<p className="leading-relaxed text-sm text-slate-400">
                  Apskatiet pieejamās telpas tiešsaistē, izvēlieties sev
                  atbilstošu izmēru un rezervējiet to sev vēlamajam periodam.
                </p>
</div>
</div>

<div className="relative flex items-start gap-4 animate-fade-in-up" style={{animationDelay: '100ms'}}>
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 font-bold text-base z-10 border border-slate-600 shadow-md shadow-black/10">
                2
              </div>
<div className="flex-1 bg-slate-800/60 rounded-xl p-4 border border-slate-700/40 shadow-md shadow-black/10 ml-4 relative">
<div className="absolute top-3 right-3">
<svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
<path d="m9 15 2 2 4-4"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-white mb-1 pr-6">
                  Noformējiet līgumu attālināti
                </h3>
<p className="leading-relaxed text-sm text-slate-400">
                  Saņemiet līgumu e-pastā un parakstiet to ar eParakstu vai
                  Smart-ID – nav nepieciešams braukt uz biroju.
                </p>
</div>
</div>

<div className="relative flex items-start gap-4 animate-fade-in-up" style={{animationDelay: '200ms'}}>
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 font-bold text-base z-10 border border-slate-600 shadow-md shadow-black/10">
                3
              </div>
<div className="flex-1 bg-slate-800/60 rounded-xl p-4 border border-slate-700/40 shadow-md shadow-black/10 ml-1 relative">
<div className="absolute top-3 right-3">
<svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-white mb-1 pr-6">
                  Saņemiet piekļuves instrukciju
                </h3>
<p className="leading-relaxed text-sm text-slate-400">
                  Pēc līguma apstiprināšanas saņemsiet detalizētu piekļuves
                  kārtību un norādes, kā iebraukt CargoPark teritorijā.
                </p>
</div>
</div>

<div className="relative flex items-start gap-4 animate-fade-in-up" style={{animationDelay: '300ms'}}>
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 font-bold text-base z-10 border border-slate-600 shadow-md shadow-black/10">
                4
              </div>
<div className="flex-1 bg-slate-800/60 rounded-xl p-4 border border-slate-700/40 shadow-md shadow-black/10 ml-4 relative">
<div className="absolute top-3 right-3">
<svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
<line x1="3" x2="21" y1="6" y2="6"></line>
<path d="M16 10a4 4 0 0 1-8 0"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-white mb-1 pr-6">
                  Ievietojiet mantas sev ērtā laikā
                </h3>
<p className="leading-relaxed text-sm text-slate-400">
                  Iebrauciet ar auto līdz pašai glabātavai, izmantojiet
                  iekraušanas zonu un droši novietojiet mantas savā telpā.
                </p>
</div>
</div>
</div>
</div>
<style>
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(12px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.5s ease-out forwards;
            opacity: 0;
          }
        </style>
</section>
<section className="mt-12" data-section="location-new">
<div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl overflow-hidden border border-slate-700/30" style={{borderLeft: '3px solid #f59e0b', borderRadius: '16px 16px 24px 24px'}}>

<div className="relative h-52 overflow-hidden">

<svg className="w-full h-full" preserveaspectratio="xMidYMid slice" viewbox="0 0 400 220">

<rect fill="#1e293b" height="220" width="400"></rect>

<pattern height="20" id="gridPattern" patternunits="userSpaceOnUse" width="20">
<path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" strokeWidth="0.3"></path>
</pattern>
<rect className="" fill="url(#gridPattern)" height="220" opacity="0.5" width="400"></rect>

<path className="" d="M -10 180 Q 60 160 120 175 Q 180 190 240 170 Q 300 150 360 165 Q 400 175 420 160" fill="none" opacity="0.3" stroke="#3b82f6" strokeLinecap="round" strokeWidth="18"></path>
<path className="" d="M -10 180 Q 60 160 120 175 Q 180 190 240 170 Q 300 150 360 165 Q 400 175 420 160" fill="none" opacity="0.5" stroke="#60a5fa" strokeLinecap="round" strokeWidth="8"></path>
<text fill="#60a5fa" fontSize="8" font-weight="500" opacity="0.6" x="80" y="195">
                Daugava
              </text>

<path d="M 50 30 Q 100 80 150 100 Q 200 120 250 100" fill="none" stroke="#475569" strokeLinecap="round" strokeWidth="3"></path>
<path d="M 350 50 Q 300 90 270 120" fill="none" stroke="#475569" strokeLinecap="round" strokeWidth="3"></path>
<path d="M 150 200 Q 180 150 200 120" fill="none" stroke="#475569" strokeLinecap="round" strokeWidth="2"></path>

<path d="M 20 140 Q 80 125 140 115 Q 200 105 260 110 Q 320 115 380 95" fill="none" stroke="#64748b" strokeLinecap="round" strokeWidth="12"></path>
<path d="M 20 140 Q 80 125 140 115 Q 200 105 260 110 Q 320 115 380 95" fill="none" stroke="#f59e0b" strokeLinecap="round" strokeWidth="4"></path>

<path d="M 20 140 Q 80 125 140 115 Q 200 105 260 110 Q 320 115 380 95" fill="none" stroke="#fef3c7" stroke-dasharray="8 12" strokeLinecap="round" strokeWidth="1"></path>

<circle cx="60" cy="70" fill="#475569" r="4"></circle>
<text fill="#94a3b8" fontSize="9" font-weight="500" text-anchor="middle" x="60" y="58">
                Rīga
              </text>
<circle cx="150" cy="145" fill="#475569" r="3"></circle>
<text fill="#94a3b8" fontSize="8" text-anchor="middle" x="150" y="160">
                Salaspils
              </text>
<circle cx="280" cy="135" fill="#475569" r="3"></circle>
<text fill="#94a3b8" fontSize="8" text-anchor="middle" x="280" y="150">
                Ikšķile
              </text>
<circle cx="350" cy="75" fill="#475569" r="3"></circle>
<text className="" fill="#94a3b8" fontSize="8" text-anchor="middle" x="350" y="63">
                Ogre
              </text>

<circle cx="220" cy="108" fill="#f59e0b" opacity="0.15" r="20">
<animate attributename="r" dur="2s" repeatcount="indefinite" values="18;24;18"></animate>
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.15;0.08;0.15"></animate>
</circle>
<circle cx="220" cy="108" fill="#f59e0b" opacity="0.25" r="12"></circle>

<circle cx="220" cy="108" fill="#f59e0b" r="8" stroke="#1e293b" strokeWidth="2"></circle>
<circle cx="220" cy="108" fill="#1e293b" r="4"></circle>
<circle cx="220" cy="108" fill="#f59e0b" r="2"></circle>

<rect fill="#0f172a" height="16" opacity="0.8" rx="3" width="70" x="232" y="95"></rect>
<text fill="#f59e0b" fontSize="7" font-weight="600" text-anchor="middle" x="267" y="106">
                CargoPark
              </text>
</svg>

<div className="absolute top-4 left-4">
<div className="flex items-center gap-2 bg-amber-400 text-slate-900 px-3 py-1.5 rounded-full shadow-lg shadow-amber-400/20">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14"></path>
<path d="M4 19h16"></path>
<path d="M12 6v4"></path>
<path d="M8 10h8"></path>
</svg>
<span className="font-semibold text-sm">Tieši uz A6</span>
</div>
</div>

<div className="absolute top-0 right-0 w-16 h-16 bg-slate-900" style={{clipPath: 'polygon(100% 0, 0 0, 100% 100%)'}}></div>
</div>

<div className="p-5 pt-4 pb-6">
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">
              Stratēģiska atrašanās vieta uz A6 šosejas
            </h3>
<p className="leading-relaxed text-base text-slate-400 mb-5">
              Sonora CargoPark atrodas tieši uz A6 šosejas, drošā industriālā
              teritorijā ar ērtu piekļuvi no Rīgas, Salaspils, Ikšķiles un
              Ogres. Pie glabātavas var iebraukt gan ar vieglo auto, gan ar
              busiņu.
            </p>

<div className="flex flex-wrap gap-2">
<span className="text-sm font-medium text-slate-300 bg-slate-800/80 border-slate-700/40 border rounded-full px-3 py-1.5" style={{boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.2)'}}>
                Rīga
              </span>
<span className="text-sm font-medium text-slate-300 bg-slate-800/80 border-slate-700/40 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3" style={{boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.2)'}}>
                Salaspils
              </span>
<span className="text-sm font-medium text-slate-300 bg-slate-800/80 border-slate-700/40 border rounded-full px-3 py-1.5" style={{boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.2)'}}>
                Ikšķile
              </span>
<span className="text-sm font-medium text-slate-300 bg-slate-800/80 border-slate-700/40 border rounded-full px-3 py-1.5" style={{boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.2)'}}>
                Ogre
              </span>
<span className="text-sm font-medium text-slate-300 bg-slate-800/80 border-slate-700/40 border rounded-full px-3 py-1.5" style={{boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.2)'}}>
                Rīgas apvedceļš
              </span>
</div>
</div>
</div>
</section>


<section className="mt-12" data-section="pricing">
<div className="mb-6">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-2">
            Caurspīdīgas cenas bez slēptām izmaksām
          </h2>
<p className="text-base text-slate-400">
            Norēķins pa mēnešiem, piekļuve katru dienu un līgums, ko varat
            noformēt attālināti.
          </p>
</div>
<div className="space-y-6">

<div className="bg-slate-900 overflow-hidden relative" style={{borderRadius: '24px', border: '2px solid #f59e0b', borderLeftWidth: '4px'}}>

<div className="px-5 pt-5 pb-3">
<div className="flex items-start justify-between gap-3">
<span className="text-xl font-semibold text-white tracking-tight">
                  Pamata – 3 m²
                </span>
<span className="flex-shrink-0 bg-amber-400/10 text-amber-400 text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full border border-amber-400/30">
                  Populārākā izvēle privātpersonām
                </span>
</div>

<div className="mt-4 flex items-center gap-3 bg-slate-800/70 rounded-xl px-4 py-3 border border-slate-700/40">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-700/60 flex items-center justify-center border border-slate-600/40">
<svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M3 21h18"></path>
<path d="M5 21V7l8-4 8 4v14"></path>
<path d="M9 21v-6h6v6"></path>
<path d="M10 9h4"></path>
<path d="M10 12h4"></path>
</svg>
</div>
<span className="leading-snug text-base text-slate-300">
                  Ideāli sezonas mantām, sporta inventāram un velosipēdiem.
                </span>
</div>
</div>

<div className="pt-4 pr-5 pb-4 pl-5">
<div className="flex items-baseline gap-1">
<span className="text-5xl font-semibold text-white tracking-tight">
                  34,99
                </span>
<div className="flex flex-col items-start ml-1">
<span className="text-xl font-medium text-white">€</span>
<span className="text-xs text-slate-500 -mt-0.5">
                    mēnesī (ar PVN)
                  </span>
</div>
</div>
</div>

<div className="px-5 pb-4">
<div className="grid grid-cols-2 gap-3">

<div className="bg-slate-800/50 rounded-xl p-3.5 border-l-2 border-amber-400/60">
<div className="flex items-center gap-2 mb-2">
<div className="w-7 h-7 rounded-lg bg-amber-400/10 flex items-center justify-center">
<svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12,6 12,12 16,14"></polyline>
</svg>
</div>
</div>
<p className="leading-relaxed text-sm font-bold text-slate-300">
                    24/7 piekļuve apsargātai CargoPark teritorijai
                  </p>
</div>

<div className="bg-slate-800/50 rounded-xl p-3.5 border-r-2 border-amber-400/40">
<div className="flex items-center gap-2 mb-2">
<div className="w-7 h-7 rounded-lg bg-amber-400/10 flex items-center justify-center">
<svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 1 1 4 0Z"></path>
<circle cx="12" cy="18" fill="currentColor" r="1.5"></circle>
</svg>
</div>
</div>
<p className="leading-relaxed text-sm font-bold text-slate-300">
                    Klimata kontrolēta telpa ar sausu grīdu
                  </p>
</div>

<div className="bg-slate-800/50 rounded-xl p-3.5 border-b-2 border-amber-400/40">
<div className="flex items-center gap-2 mb-2">
<div className="w-7 h-7 rounded-lg bg-amber-400/10 flex items-center justify-center">
<svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M9 18h6"></path>
<path d="M10 22h4"></path>
<circle cx="12" cy="9" r="4"></circle>
<path d="M12 5v-2"></path>
<path d="M12 13v2"></path>
</svg>
</div>
</div>
<p className="leading-relaxed text-sm font-bold text-slate-300">
                    LED apgaismojums katrā telpā
                  </p>
</div>

<div className="bg-slate-800/50 rounded-xl p-3.5 border-t-2 border-amber-400/40">
<div className="flex items-center gap-2 mb-2">
<div className="w-7 h-7 rounded-lg bg-amber-400/10 flex items-center justify-center">
<svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<rect height="9" rx="1" width="12" x="2" y="8"></rect>
<path d="M14 11h4l3 2.5V17h-7"></path>
<circle cx="6" cy="18" r="2"></circle>
<circle cx="17" cy="18" r="2"></circle>
</svg>
</div>
</div>
<p className="leading-relaxed text-sm font-bold text-slate-300">
                    Ērta iebraukšana ar vieglo auto vai busiņu
                  </p>
</div>
</div>
</div>

<div className="px-5 py-3 bg-slate-800/30 border-t border-slate-700/30">
<p className="text-sm text-slate-500">
                Piemērota mājas mantām, nelielam inventāram un ilgtermiņa
                glabāšanai.
              </p>
</div>

<div className="px-5 pb-5 pt-3">
<button className="w-full bg-amber-400 text-slate-900 font-semibold text-sm py-4 px-6 hover:bg-amber-500 active:bg-amber-600 transition-colors" onclick="selectPlanAndReserve('3m2')" style={{borderRadius: '12px'}}>
                Rezervēt 3 m² telpu
              </button>
</div>
</div>

<div className="bg-slate-900 overflow-hidden relative" style={{borderRadius: '24px', border: '2px solid #64748b', borderTopWidth: '4px'}}>

<div className="px-5 pt-5 pb-3">
<div className="flex items-start justify-between gap-3">
<span className="text-xl font-semibold text-white tracking-tight">
                  Plus – 6 m²
                </span>
<span className="flex-shrink-0 bg-blue-400/10 text-blue-400 text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full border border-blue-400/30">
                  Ģimenēm un mazajiem uzņēmumiem
                </span>
</div>

<div className="mt-4 flex items-center gap-3 bg-slate-800/70 rounded-xl px-4 py-3 border border-slate-700/40">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-700/60 flex items-center justify-center border border-slate-600/40">
<svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M3 21h18"></path>
<path d="M4 21V10l8-6 8 6v11"></path>
<rect height="7" width="8" x="8" y="14"></rect>
<path d="M12 14v7"></path>
<path d="M8 17h8"></path>
</svg>
</div>
<span className="leading-snug text-base text-slate-300">
                  Ietilpība 1 istabas mēbelēm, sadzīves tehnikai un kravas
                  paletēm.
                </span>
</div>
</div>

<div className="px-5 py-4">
<div className="flex items-baseline gap-1">
<span className="text-5xl font-semibold text-white tracking-tight">
                  64,99
                </span>
<div className="flex flex-col items-start ml-1">
<span className="text-xl font-medium text-white">€</span>
<span className="text-xs text-slate-500 -mt-0.5">
                    mēnesī (ar PVN)
                  </span>
</div>
</div>
</div>

<div className="px-5 pb-4">
<div className="grid grid-cols-2 gap-3">

<div className="bg-slate-800/50 rounded-xl p-3.5 border-l-2 border-blue-400/60">
<div className="flex items-center gap-2 mb-2">
<div className="w-7 h-7 rounded-lg bg-blue-400/10 flex items-center justify-center">
<svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<rect height="16" rx="2" width="16" x="4" y="4"></rect>
<path d="M4 12h16"></path>
<path d="M12 4v16"></path>
</svg>
</div>
</div>
<p className="leading-relaxed text-sm text-slate-300">
                    Plašāka telpa lielgabarīta priekšmetiem un mēbelēm
                  </p>
</div>

<div className="bg-slate-800/50 border-blue-400/40 rounded-xl border-r-2 pt-3.5 pr-3.5 pb-3.5 pl-3.5">
<div className="flex items-center gap-2 mb-2">
<div className="w-7 h-7 rounded-lg bg-blue-400/10 flex items-center justify-center">
<svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12,6 12,12 16,14"></polyline>
</svg>
</div>
</div>
<p className="leading-relaxed text-sm font-bold text-slate-300">
                    24/7 piekļuve un apgaismota iekraušanas zona
                  </p>
</div>

<div className="bg-slate-800/50 rounded-xl p-3.5 border-b-2 border-blue-400/40">
<div className="flex items-center gap-2 mb-2">
<div className="w-7 h-7 rounded-lg bg-blue-400/10 flex items-center justify-center">
<svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</div>
</div>
<p className="leading-relaxed text-sm font-bold text-slate-300">
                    Drošības perimetrs ar videonovērošanu
                  </p>
</div>

<div className="bg-slate-800/50 rounded-xl p-3.5 border-t-2 border-blue-400/40">
<div className="flex items-center gap-2 mb-2">
<div className="w-7 h-7 rounded-lg bg-blue-400/10 flex items-center justify-center">
<svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
</svg>
</div>
</div>
<p className="leading-relaxed text-sm font-bold text-slate-300">
                    Iespēja glabāt nelielu preču krājumu vai aprīkojumu
                  </p>
</div>
</div>
</div>

<div className="px-5 py-3 bg-slate-800/30 border-t border-slate-700/30">
<p className="text-xs text-slate-500">
                Piemērota pārvākšanās periodam, uzņēmuma noliktavai vai sezonas
                precēm.
              </p>
</div>

<div className="px-5 pb-5 pt-3">
<button className="w-full bg-blue-500 text-white font-semibold text-sm py-4 px-6 hover:bg-blue-600 active:bg-blue-700 transition-colors" onclick="selectPlanAndReserve('6m2')" style={{borderRadius: '12px'}}>
                Rezervēt 6 m² telpu
              </button>
</div>
</div>
</div>
</section>



<section className="mt-12" data-section="security">
<div className="mb-5">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-1">
            Drošība un komforts – bez kompromisiem
          </h2>
<p className="text-base text-slate-400">
            Industriāla līmeņa aizsardzība un infrastruktūra, kas attaisno katru
            ieguldīto eiro.
          </p>
</div>
<div className="flex flex-col gap-4">

<div className="relative overflow-hidden p-5 flex flex-col" style={{borderRadius: '20px', background: '#1e293b', border: '1px solid rgba(71,85,105,0.35)', borderTop: '3px solid #b45309', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3), 0 4px 12px -4px rgba(0,0,0,0.3)'}}>

<div className="flex justify-end mb-3">
<div className="w-10 h-10 rounded-xl flex items-center justify-center relative" style={{background: 'rgba(180,83,9,0.12)', border: '1px solid rgba(180,83,9,0.25)'}}>
<svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path className="" d="M2 8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8z"></path>
<path className="" d="M16 10l4-2v8l-4-2"></path>
<circle cx="6" cy="12" r="1.5"></circle>
</svg>
<div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></div>
</div>
</div>
<div className="">
<h4 className="leading-tight text-lg font-semibold text-white mb-2">
                Videonovērošana 24/7
              </h4>
<p className="leading-relaxed text-base text-slate-400">
                Perimetrs, ieejas un koplietošanas zonas tiek nepārtraukti
                uzraudzītas ar augstas izšķirtspējas kamerām. Ieraksti glabājas
                drošā serverī – papildu garantija jūsu mantām.
              </p>
</div>
</div>

<div className="relative overflow-hidden p-5 flex flex-col" style={{borderRadius: '20px', background: '#1e293b', border: '1px solid rgba(71,85,105,0.35)', borderLeft: '3px solid #10b981', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3), 0 4px 12px -4px rgba(0,0,0,0.3)'}}>
<div className="mb-4">
<h4 className="leading-tight text-lg font-semibold text-white mb-2">
                Klimata kontrole visu gadu
              </h4>
<p className="leading-relaxed text-base text-slate-400">
                Telpās uztur stabilu temperatūru un sausu vidi neatkarīgi no
                gadalaika – pasargājot jūsu mantas no mitruma, pelējuma un
                straujām temperatūras svārstībām.
              </p>
</div>

<div className="">
<div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.25)'}}>
<svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 1 1 4 0Z"></path>
<circle cx="12" cy="18" fill="currentColor" r="1.5"></circle>
<path d="M18 8c1 0 2 .5 2 1.5s-1 1.5-2 1.5"></path>
<path d="M18 14c1.5 0 3 .5 3 1.5s-1.5 1.5-3 1.5"></path>
</svg>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">

<div className="relative overflow-hidden p-4 flex flex-col justify-between" style={{borderRadius: '20px', background: '#1e293b', border: '1px solid rgba(71,85,105,0.35)', borderLeft: '4px solid #f59e0b', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3), 0 4px 12px -4px rgba(0,0,0,0.3)', minHeight: '200px'}}>

<div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)'}}>
<svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
<line x1="8" x2="8" y1="8" y2="14"></line>
<line x1="10.5" x2="10.5" y1="7" y2="15"></line>
<line x1="13.5" x2="13.5" y1="7" y2="15"></line>
<line x1="16" x2="16" y1="8" y2="14"></line>
<line x1="7" x2="17" y1="10" y2="10"></line>
</svg>
</div>
<div className="">
<h4 className="leading-tight text-base font-semibold text-white mb-1.5">
                  Apsargāta industriālā teritorija
                </h4>
<p className="leading-relaxed text-sm text-slate-400">
                  Glabātavas atrodas slēgtā CargoPark industriālajā zonā ar
                  kontrolētu iebraukšanu, perimetra žogu un regulāru apsardzes
                  patrulēšanu diennakts režīmā. Šī nav parasta noliktava – tā ir
                  kravas līmeņa drošība.
                </p>
</div>
</div>

<div className="relative overflow-hidden p-4 flex flex-col justify-between" style={{borderRadius: '20px', background: '#1e293b', border: '1px solid rgba(71,85,105,0.35)', borderRight: '3px solid #8b5cf6', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3), 0 4px 12px -4px rgba(0,0,0,0.3)', minHeight: '200px'}}>
<div className="">
<h4 className="leading-tight text-base font-semibold text-white mb-1.5">
                  Ērta iekraušana un izkraušana
                </h4>
<p className="leading-relaxed text-sm text-slate-400">
                  Pie glabātavām ir plaša, apgaismota iebraukšanas un apstāšanās
                  zona. Varat ērti piebraukt ar vieglo auto vai busiņu, iekraut
                  un izkraut mantas bez steigas un netraucējot citiem klientiem.
                </p>
</div>

<div className="flex justify-end mt-3">
<div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.25)'}}>
<svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<rect height="8" rx="1" width="12" x="1" y="8"></rect>
<path d="M13 10h4l2 3v3h-6"></path>
<circle cx="5" cy="18" r="2"></circle>
<circle cx="15" cy="18" r="2"></circle>
<path d="M1 16l-0.5 4h5" strokeWidth="2"></path>
<path d="M21 13h2v5h-4"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-12" data-section="gallery">
<div className="mb-6">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-2">
            Ieskatieties glabātavās pirms rezervācijas
          </h2>
<p className="text-base text-slate-400">
            Reālas telpas Sonora CargoPark teritorijā, kādas tās izskatās
            ikdienā.
          </p>
</div>

<div className="relative">
<div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" id="galleryCarousel" style={{scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch'}}>

<div className="flex-shrink-0 w-[85%] snap-center relative overflow-hidden" style={{borderRadius: '20px 8px 20px 8px'}}>
<div className="aspect-[4/3] relative bg-slate-800">

<div className="absolute inset-0 bg-gradient-to-b from-slate-700 to-slate-800">

<svg className="w-full h-full" preserveaspectratio="xMidYMid slice" viewbox="0 0 400 300">

<rect fill="#374151" height="100" width="400" x="0" y="200"></rect>
<path d="M0 200 L200 240 L400 200" fill="#4b5563" opacity="0.5"></path>

<rect className="" fill="#1e293b" height="160" width="300" x="50" y="40"></rect>

<path className="" d="M50 40 L0 80 L0 280 L50 200 Z" fill="#334155"></path>

<path className="" d="M350 40 L400 80 L400 280 L350 200 Z" fill="#334155"></path>

<line className="" stroke="#64748b" strokeWidth="2" x1="50" x2="350" y1="60" y2="60"></line>
<line stroke="#64748b" strokeWidth="1" x1="50" x2="350" y1="100" y2="100"></line>
<line className="" stroke="#64748b" strokeWidth="1" x1="50" x2="350" y1="140" y2="140"></line>
<line className="" stroke="#64748b" strokeWidth="1" x1="50" x2="350" y1="180" y2="180"></line>

<line stroke="#64748b" strokeWidth="1" x1="100" x2="100" y1="40" y2="200"></line>
<line stroke="#64748b" strokeWidth="1" x1="150" x2="150" y1="40" y2="200"></line>
<line stroke="#64748b" strokeWidth="1" x1="200" x2="200" y1="40" y2="200"></line>
<line stroke="#64748b" strokeWidth="1" x1="250" x2="250" y1="40" y2="200"></line>
<line stroke="#64748b" strokeWidth="1" x1="300" x2="300" y1="40" y2="200"></line>

<rect className="" fill="#475569" height="140" rx="2" width="160" x="120" y="60"></rect>
<line stroke="#64748b" strokeWidth="1" x1="120" x2="280" y1="80" y2="80"></line>
<line stroke="#64748b" strokeWidth="1" x1="120" x2="280" y1="100" y2="100"></line>
<line stroke="#64748b" strokeWidth="1" x1="120" x2="280" y1="120" y2="120"></line>
<line stroke="#64748b" strokeWidth="1" x1="120" x2="280" y1="140" y2="140"></line>
<line stroke="#64748b" strokeWidth="1" x1="120" x2="280" y1="160" y2="160"></line>
<line stroke="#64748b" strokeWidth="1" x1="120" x2="280" y1="180" y2="180"></line>

<rect className="" fill="#f59e0b" height="20" rx="1" width="8" x="265" y="130"></rect>

<rect fill="#fef3c7" height="8" rx="1" width="40" x="180" y="25"></rect>
<ellipse className="" cx="200" cy="50" fill="#fef3c7" opacity="0.1" rx="60" ry="30"></ellipse>

<rect className="" fill="#0f172a" height="24" opacity="0.8" rx="4" width="50" x="320" y="150"></rect>
<text className="" fill="#f59e0b" fontSize="12" font-weight="600" text-anchor="middle" x="345" y="166">
                      3 m²
                    </text>
</svg>
</div>

<div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900/95 via-slate-900/70 to-transparent"></div>

<div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
<span className="leading-tight text-base font-medium text-white">
                    Pamata 3 m² telpa privātām mantām
                  </span>
<button aria-label="Atvērt attēlu pilnekrānā" className="flex-shrink-0 w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20 hover:bg-white/25 transition-colors">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="m15 15 6 6"></path>
<path d="m15 9 6-6"></path>
<path className="" d="M21 16v5h-5"></path>
<path className="" d="M21 8V3h-5"></path>
<path className="" d="M3 16v5h5"></path>
<path d="m3 21 6-6"></path>
<path className="" d="M3 8V3h5"></path>
<path d="M9 9 3 3"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="flex-shrink-0 w-[85%] snap-center relative overflow-hidden" style={{borderRadius: '8px 20px 8px 20px'}}>
<div className="aspect-[4/3] relative bg-slate-800">

<div className="absolute inset-0 bg-gradient-to-b from-slate-700 to-slate-800">
<svg className="w-full h-full" preserveaspectratio="xMidYMid slice" viewbox="0 0 400 300">

<rect fill="#374151" height="120" width="400" x="0" y="180"></rect>
<path className="" d="M0 180 L200 230 L400 180" fill="#4b5563" opacity="0.4"></path>

<line opacity="0.5" stroke="#4b5563" strokeWidth="1" x1="0" x2="400" y1="210" y2="210"></line>
<line opacity="0.5" stroke="#4b5563" strokeWidth="1" x1="0" x2="400" y1="240" y2="240"></line>
<line opacity="0.5" stroke="#4b5563" strokeWidth="1" x1="0" x2="400" y1="270" y2="270"></line>

<rect className="" fill="#1e293b" height="150" width="340" x="30" y="30"></rect>

<path className="" d="M30 30 L0 60 L0 280 L30 180 Z" fill="#334155"></path>

<path d="M370 30 L400 60 L400 280 L370 180 Z" fill="#334155"></path>

<rect fill="#475569" height="135" rx="2" width="280" x="60" y="45"></rect>

<line stroke="#64748b" strokeWidth="1" x1="60" x2="340" y1="68" y2="68"></line>
<line stroke="#64748b" strokeWidth="1" x1="60" x2="340" y1="91" y2="91"></line>
<line stroke="#64748b" strokeWidth="1" x1="60" x2="340" y1="114" y2="114"></line>
<line stroke="#64748b" strokeWidth="1" x1="60" x2="340" y1="137" y2="137"></line>
<line stroke="#64748b" strokeWidth="1" x1="60" x2="340" y1="160" y2="160"></line>

<rect fill="#f59e0b" height="25" rx="2" width="10" x="320" y="100"></rect>

<rect className="" fill="#64748b" height="120" opacity="0.3" width="20" x="35" y="60"></rect>
<rect fill="#64748b" height="120" opacity="0.3" width="20" x="345" y="60"></rect>

<rect fill="#fef3c7" height="8" rx="1" width="50" x="120" y="15"></rect>
<rect fill="#fef3c7" height="8" rx="1" width="50" x="230" y="15"></rect>
<ellipse cx="145" cy="45" fill="#fef3c7" opacity="0.08" rx="50" ry="25"></ellipse>
<ellipse cx="255" cy="45" fill="#fef3c7" opacity="0.08" rx="50" ry="25"></ellipse>

<rect fill="#0f172a" height="24" opacity="0.8" rx="4" width="50" x="320" y="150"></rect>
<text fill="#3b82f6" fontSize="12" font-weight="600" text-anchor="middle" x="345" y="166">
                      6 m²
                    </text>
</svg>
</div>
<div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900/95 via-slate-900/70 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
<span className="leading-tight text-base font-medium text-white">
                    Plus 6 m² telpa mēbelēm un inventāram
                  </span>
<button aria-label="Atvērt attēlu pilnekrānā" className="flex-shrink-0 w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20 hover:bg-white/25 transition-colors">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="m15 15 6 6"></path>
<path d="m15 9 6-6"></path>
<path d="M21 16v5h-5"></path>
<path d="M21 8V3h-5"></path>
<path d="M3 16v5h5"></path>
<path d="m3 21 6-6"></path>
<path d="M3 8V3h5"></path>
<path d="M9 9 3 3"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="flex-shrink-0 w-[85%] snap-center relative overflow-hidden" style={{borderRadius: '20px 8px 20px 8px'}}>
<div className="aspect-[4/3] relative bg-slate-800">

<div className="absolute inset-0 bg-gradient-to-b from-slate-700 to-slate-800">
<svg className="w-full h-full" preserveaspectratio="xMidYMid slice" viewbox="0 0 400 300">


<path d="M0 300 L100 180 L300 180 L400 300 Z" fill="#374151"></path>
<path d="M100 180 L200 230 L300 180" fill="#4b5563" opacity="0.3"></path>

<path d="M0 0 L100 60 L100 180 L0 300 Z" fill="#475569"></path>

<path d="M20 50 L70 70 L70 150 L20 200 Z" fill="#64748b"></path>
<circle cx="65" cy="115" fill="#f59e0b" r="3"></circle>

<path d="M35 180 L85 160 L85 175 L35 220 Z" fill="#64748b" opacity="0.7"></path>

<path className="" d="M400 0 L300 60 L300 180 L400 300 Z" fill="#475569"></path>

<path className="" d="M380 50 L330 70 L330 150 L380 200 Z" fill="#64748b"></path>
<circle cx="335" cy="115" fill="#f59e0b" r="3"></circle>

<path d="M365 180 L315 160 L315 175 L365 220 Z" fill="#64748b" opacity="0.7"></path>

<path d="M0 0 L100 60 L300 60 L400 0 Z" fill="#1e293b"></path>

<rect fill="#334155" height="120" width="200" x="100" y="60"></rect>
<rect fill="#475569" height="100" width="120" x="140" y="80"></rect>
<line stroke="#64748b" strokeWidth="1" x1="140" x2="260" y1="100" y2="100"></line>
<line stroke="#64748b" strokeWidth="1" x1="140" x2="260" y1="120" y2="120"></line>
<line stroke="#64748b" strokeWidth="1" x1="140" x2="260" y1="140" y2="140"></line>
<line stroke="#64748b" strokeWidth="1" x1="140" x2="260" y1="160" y2="160"></line>

<rect fill="#fef3c7" height="6" rx="1" width="40" x="180" y="30"></rect>
<path d="M100 60 L200 100 L300 60" fill="#fef3c7" opacity="0.05"></path>

<line stroke="#f59e0b" stroke-dasharray="10 8" strokeWidth="2" x1="200" x2="200" y1="180" y2="280"></line>

<rect fill="#0f172a" height="12" opacity="0.8" rx="2" width="20" x="55" y="85"></rect>
<text fill="#94a3b8" fontSize="8" text-anchor="middle" x="65" y="94">
                      A1
                    </text>
<rect fill="#0f172a" height="12" opacity="0.8" rx="2" width="20" x="325" y="85"></rect>
<text fill="#94a3b8" fontSize="8" text-anchor="middle" x="335" y="94">
                      A2
                    </text>
</svg>
</div>
<div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900/95 via-slate-900/70 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
<span className="text-sm text-white font-medium leading-tight">
                    Apgaismots un tīrs koplietošanas gaitenis
                  </span>
<button aria-label="Atvērt attēlu pilnekrānā" className="flex-shrink-0 w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20 hover:bg-white/25 transition-colors">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="m15 15 6 6"></path>
<path d="m15 9 6-6"></path>
<path d="M21 16v5h-5"></path>
<path d="M21 8V3h-5"></path>
<path className="" d="M3 16v5h5"></path>
<path d="m3 21 6-6"></path>
<path d="M3 8V3h5"></path>
<path className="" d="M9 9 3 3"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="flex-shrink-0 w-[85%] snap-center relative overflow-hidden" style={{borderRadius: '8px 20px 8px 20px'}}>
<div className="aspect-[4/3] relative bg-slate-800">

<div className="absolute inset-0 bg-gradient-to-b from-slate-600 to-slate-700">
<svg className="w-full h-full" preserveaspectratio="xMidYMid slice" viewbox="0 0 400 300">

<rect className="" fill="#1e293b" height="100" width="400" x="0" y="0"></rect>

<rect className="" fill="#334155" height="140" width="200" x="150" y="40"></rect>
<rect fill="#475569" height="130" width="190" x="155" y="45"></rect>

<rect className="" fill="#1e293b" height="105" width="100" x="200" y="70"></rect>
<rect fill="#0f172a" height="95" width="90" x="205" y="75"></rect>

<rect fill="#64748b" height="20" width="80" x="210" y="80"></rect>
<line stroke="#4b5563" strokeWidth="1" x1="210" x2="290" y1="90" y2="90"></line>
<line stroke="#4b5563" strokeWidth="1" x1="210" x2="290" y1="95" y2="95"></line>

<rect fill="#f59e0b" height="15" rx="2" width="60" x="280" y="50"></rect>
<text fill="#0f172a" fontSize="8" font-weight="700" text-anchor="middle" x="310" y="61">
                      CargoPark
                    </text>

<rect className="" fill="#374151" height="120" width="400" x="0" y="180"></rect>

<rect fill="#f59e0b" height="60" opacity="0.7" width="3" x="50" y="200"></rect>
<rect fill="#f59e0b" height="60" opacity="0.7" width="3" x="120" y="200"></rect>
<rect fill="#f59e0b" height="60" opacity="0.7" width="3" x="190" y="200"></rect>

<rect fill="#64748b" height="35" rx="3" width="50" x="60" y="195"></rect>
<rect fill="#475569" height="25" rx="2" width="25" x="95" y="200"></rect>
<circle cx="70" cy="235" fill="#1e293b" r="8"></circle>
<circle cx="105" cy="235" fill="#1e293b" r="8"></circle>
<circle cx="70" cy="235" fill="#374151" r="4"></circle>
<circle cx="105" cy="235" fill="#374151" r="4"></circle>

<path className="" d="M150 180 L200 175 L350 175 L350 180 Z" fill="#f59e0b" opacity="0.3"></path>
<rect fill="#475569" height="5" width="150" x="200" y="175"></rect>

<rect fill="#64748b" height="40" width="5" x="160" y="60"></rect>
<circle cx="162" cy="55" fill="#fef3c7" opacity="0.8" r="8"></circle>
<ellipse className="" cx="162" cy="120" fill="#fef3c7" opacity="0.05" rx="40" ry="60"></ellipse>
<rect fill="#64748b" height="40" width="5" x="340" y="60"></rect>
<circle cx="342" cy="55" fill="#fef3c7" opacity="0.8" r="8"></circle>

<path d="M300 250 L330 230 L330 240 L380 240 L380 260 L330 260 L330 270 Z" fill="#f59e0b" opacity="0.6"></path>

<line stroke="#64748b" strokeWidth="2" x1="0" x2="150" y1="180" y2="180"></line>
<line stroke="#64748b" strokeWidth="3" x1="0" x2="0" y1="175" y2="185"></line>
<line stroke="#64748b" strokeWidth="2" x1="30" x2="30" y1="175" y2="185"></line>
<line stroke="#64748b" strokeWidth="2" x1="60" x2="60" y1="175" y2="185"></line>
<line stroke="#64748b" strokeWidth="2" x1="90" x2="90" y1="175" y2="185"></line>
<line stroke="#64748b" strokeWidth="2" x1="120" x2="120" y1="175" y2="185"></line>
</svg>
</div>
<div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900/95 via-slate-900/70 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
<span className="leading-tight text-base font-medium text-white">
                    Ērta iebraukšana un iekraušanas zona pie glabātavas ieejas
                  </span>
<button aria-label="Atvērt attēlu pilnekrānā" className="flex-shrink-0 w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20 hover:bg-white/25 transition-colors">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="m15 15 6 6"></path>
<path d="m15 9 6-6"></path>
<path d="M21 16v5h-5"></path>
<path d="M21 8V3h-5"></path>
<path d="M3 16v5h5"></path>
<path d="m3 21 6-6"></path>
<path d="M3 8V3h5"></path>
<path d="M9 9 3 3"></path>
</svg>
</button>
</div>
</div>
</div>
</div>

<div className="flex justify-center gap-2 mt-4" id="galleryDots">
<button aria-label="Slide 1" className="rounded-full transition-all duration-300" data-index="0"></button>
<button aria-label="Slide 2" className="hover:bg-slate-500 transition-all duration-300 rounded-full" data-index="1"></button>
<button aria-label="Slide 3" className="rounded-full hover:bg-slate-500 transition-all duration-300" data-index="2"></button>
<button aria-label="Slide 4" className="hover:bg-slate-500 transition-all duration-300 rounded-full" data-index="3"></button>
</div>
</div>
<style>
          #galleryCarousel::-webkit-scrollbar {
            display: none;
          }
          #galleryCarousel {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        </style>

</section>

<section className="mt-12" data-section="group-credibility">
<div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800/60">

<div className="border-slate-800/40 border-b pt-6 pr-6 pb-4 pl-6">
<svg className="w-[200px] h-[200px]" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{color: 'rgb(255, 255, 255)', width: '200px', height: '200px'}} viewbox="0 0 200 200">

<circle cx="100" cy="88" fill="none" opacity="0.9" r="52" stroke="#C7CCD6" strokeWidth="1.5"></circle>

<circle cx="100" cy="88" fill="none" opacity="0.25" r="36" stroke="#C7CCD6" stroke-dasharray="3 5" strokeWidth="1"></circle>

<path d="M 55 112 A 52 52 0 1 1 145 68" fill="none" stroke="#FFC426" stroke-dasharray="6 4" strokeWidth="1.6"></path>

<circle cx="58" cy="70" fill="#FFC426" r="2.4"></circle>
<circle cx="100" cy="36" fill="#FFC426" r="2.2"></circle>
<circle cx="140" cy="58" fill="#FFC426" r="2.4"></circle>


<circle cx="100" cy="88" fill="none" opacity="0.5" r="8" stroke="#FFC426" strokeWidth="1"></circle>

<circle cx="100" cy="88" fill="#FFC426" r="4" stroke="#ffffff" strokeWidth="1.25"></circle>

<g transform="translate(18, 108)">

<rect fill="none" height="24" opacity="0.8" rx="12" stroke="#C7CCD6" strokeWidth="1.2" width="58" x="0" y="0"></rect>

<g transform="translate(8, 4)">
<rect fill="none" height="9" rx="1" stroke="#C7CCD6" strokeWidth="1.4" width="14" x="0" y="4"></rect>
<path d="M14 7 L20 7 L22 10 L22 13 L14 13" fill="none" stroke="#C7CCD6" strokeWidth="1.4"></path>
<circle cx="5" cy="15" fill="none" r="2" stroke="#C7CCD6" strokeWidth="1.4"></circle>
<circle cx="18" cy="15" fill="none" r="2" stroke="#C7CCD6" strokeWidth="1.4"></circle>
</g>

<circle cx="48" cy="12" fill="#FFC426" r="2.2"></circle>
</g>

<g transform="translate(128, 32)">

<rect fill="none" height="24" opacity="0.8" rx="12" stroke="#C7CCD6" strokeWidth="1.2" width="58" x="0" y="0"></rect>

<g transform="translate(8, 3)">
<path d="M2 10 L6 4 L18 4 L22 10" fill="none" stroke="#C7CCD6" strokeWidth="1.4"></path>
<rect fill="none" height="4" rx="0.5" stroke="#C7CCD6" strokeWidth="1.4" width="6" x="9" y="0"></rect>
<path d="M0 12 Q12 16 24 12" fill="none" stroke="#C7CCD6" strokeWidth="1.4"></path>
</g>

<circle cx="48" cy="12" fill="#FFC426" r="2.2"></circle>
</g>

<g transform="translate(128, 118)">

<rect fill="none" height="24" opacity="0.8" rx="12" stroke="#C7CCD6" strokeWidth="1.2" width="58" x="0" y="0"></rect>

<g transform="translate(10, 3)">
<line stroke="#C7CCD6" strokeWidth="1.4" x1="4" x2="4" y1="16" y2="2"></line>
<line stroke="#C7CCD6" strokeWidth="1.4" x1="4" x2="18" y1="4" y2="4"></line>
<line stroke="#C7CCD6" strokeWidth="1.4" x1="4" x2="12" y1="8" y2="4"></line>
<line stroke="#C7CCD6" strokeWidth="1.4" x1="18" x2="18" y1="4" y2="10"></line>
<rect fill="none" height="4" rx="0.5" stroke="#C7CCD6" strokeWidth="1.4" width="6" x="15" y="10"></rect>
<line stroke="#C7CCD6" strokeWidth="1.4" x1="0" x2="8" y1="16" y2="16"></line>
</g>

<circle cx="48" cy="12" fill="#FFC426" r="2.2"></circle>
</g>

<rect fill="#FFC426" height="22" rx="11" stroke="#E5B524" strokeWidth="1" width="40" x="80" y="158"></rect>
<text fill="#0f172a" fontSize="11" font-weight="600" text-anchor="middle" x="100" y="173">
                25+
              </text>
</svg>
</div>

<div className="p-6 pt-5">
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">
              Sonora CargoPark – daļa no Sonora Group
            </h3>
<p className="leading-relaxed text-base text-slate-400 mb-6">
              Sonora Group vairāk nekā 25 gadus nodrošina loģistikas risinājumus
              Baltijā un pasaulē. CargoPark glabātavas izmanto to pašu pieeju
              drošībai, infrastruktūrai un attieksmei pret kravu, ko Sonora
              ikdienā pielieto starptautiskajos pārvadājumos.
            </p>

<div className="flex flex-col gap-2.5">
<div className="inline-flex items-center gap-2.5 bg-slate-800/50 rounded-lg px-4 py-2.5 border border-slate-700/30" style={{boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.25)'}}>
<svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12,6 12,12 16,14"></polyline>
</svg>
<span className="text-sm text-slate-300">
                  25+ gadu pieredze loģistikā
                </span>
</div>
<div className="inline-flex items-center gap-2.5 bg-slate-800/50 rounded-lg px-4 py-2.5 border border-slate-700/30" style={{boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.25)'}}>
<svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M2 12h20"></path>
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
</svg>
<span className="text-sm text-slate-300">
                  Starptautiski klienti un kravas
                </span>
</div>
<div className="inline-flex items-center gap-2.5 bg-slate-800/50 rounded-lg px-4 py-2.5 border border-slate-700/30" style={{boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.25)'}}>
<svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
<path d="M9 12l2 2 4-4"></path>
</svg>
<span className="text-sm text-slate-300">
                  Industriāla kvalitāte glabāšanai
                </span>
</div>
</div>
</div>
</div>
</section>

<section className="mt-12" data-section="testimonials">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-5">
          Ko saka mūsu klienti
        </h2>
<div className="relative">
<div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4" id="testimonialCarousel" style={{scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch'}}>

<div className="flex-shrink-0 w-[calc(100%-32px)] snap-center bg-slate-900 rounded-2xl p-5 border border-slate-800/60 shadow-md shadow-black/10">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-0.5">
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
<svg className="w-5 h-5 text-slate-600" fill="currentColor" viewbox="0 0 24 24">
<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
</svg>
</div>
<p className="leading-relaxed text-base text-slate-300 mb-4">
                Pārvākšanās laikā meklējām drošu vietu, kur īslaicīgi novietot
                mēbeles. CargoPark glabātavas bija viegli sasniedzamas un
                piekļuve tiešām strādā 24/7 – braucām iekšā gan vakarā, gan agrā
                rītā.
              </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-400 font-semibold text-sm border border-amber-400/30">
                  M
                </div>
<div className="">
<p className="font-medium text-white text-sm">Marta</p>
<p className="text-xs text-slate-500">
                    Rīga · 3 m² telpa uz 4 mēnešiem
                  </p>
</div>
</div>
</div>

<div className="flex-shrink-0 w-[calc(100%-32px)] snap-center bg-slate-900 rounded-2xl p-5 border border-slate-800/60 shadow-md shadow-black/10">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-0.5">
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
<svg className="w-5 h-5 text-slate-600" fill="currentColor" viewbox="0 0 24 24">
<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
</svg>
</div>
<p className="leading-relaxed text-base text-slate-300 mb-4">
                Kā neliels interneta veikals izmantojam 6 m² telpu sezonas
                precēm. Noliktava ir pietiekami plaša un droša, un nav jāuztur
                pašiem atsevišas telpas biroja ēkā.
              </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center text-blue-400 font-semibold text-sm border border-blue-400/30">
                  J
                </div>
<div>
<p className="font-medium text-white text-sm">Jānis</p>
<p className="text-xs text-slate-500">
                    E-komercijas uzņēmums · 6 m² telpa
                  </p>
</div>
</div>
</div>

<div className="flex-shrink-0 w-[calc(100%-32px)] snap-center bg-slate-900 rounded-2xl p-5 border border-slate-800/60 shadow-md shadow-black/10">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-0.5">
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 text-slate-600" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
<svg className="w-5 h-5 text-slate-600" fill="currentColor" viewbox="0 0 24 24">
<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
</svg>
</div>
<p className="leading-relaxed text-base text-slate-300 mb-4">
                Glabājam tur velosipēdus un ziemas riepas. Ērti, ka var iebraukt
                ar mašīnu līdz pašai telpai un nav jānes pa kāpnēm. Cena arī
                pieņemama.
              </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-400/20 flex items-center justify-center text-emerald-400 font-semibold text-sm border border-emerald-400/30">
                  A
                </div>
<div className="">
<p className="font-medium text-white text-sm">Andris</p>
<p className="text-xs text-slate-500">Salaspils · 3 m² telpa</p>
</div>
</div>
</div>
</div>

<div className="flex justify-center gap-2 mt-3" id="testimonialDots">
<button aria-label="Atsauksme 1" className="rounded-full transition-all duration-300" data-index="0"></button>
<button aria-label="Atsauksme 2" className="rounded-full hover:bg-slate-500 transition-all duration-300" data-index="1"></button>
<button aria-label="Atsauksme 3" className="hover:bg-slate-500 transition-all duration-300 rounded-full" data-index="2"></button>
</div>
</div>
<style>
          #testimonialCarousel::-webkit-scrollbar { display: none; }
          #testimonialCarousel { -ms-overflow-style: none; scrollbar-width: none; }
        </style>

</section>

<section className="mt-12" data-section="lead-form">
<div className="mb-5">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-1">
            Uzdodiet jautājumu vai rezervējiet telpu
          </h2>
<p className="text-base text-slate-400">
            Aizpildiet formu, un mēs atbildēsim 1–3 stundu laikā darba dienās.
          </p>
</div>
<div className="bg-slate-900/80 rounded-2xl p-5 border border-slate-700/40 shadow-md shadow-black/10">
<form className="space-y-5">

<div className="grid grid-cols-2 gap-3">
<div className="relative">
<input className="peer w-full bg-slate-800/60 border border-slate-700/50 rounded-full px-4 pt-5 pb-2 text-sm text-white placeholder-transparent focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/40 transition-colors" id="lead-name" placeholder="Vārds" type="text"/>
<label className="absolute left-4 top-2 text-[10px] font-medium text-slate-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-xs peer-placeholder-shown:text-slate-500 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-amber-400/80" htmlFor="lead-name">
                  Vārds
                </label>
</div>
<div className="relative">
<input className="peer w-full bg-slate-800/60 border border-slate-700/50 rounded-full px-4 pt-5 pb-2 text-sm text-white placeholder-transparent focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/40 transition-colors" id="lead-surname" placeholder="Uzvārds" type="text"/>
<label className="absolute left-4 top-2 text-[10px] font-medium text-slate-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-xs peer-placeholder-shown:text-slate-500 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-amber-400/80" htmlFor="lead-surname">
                  Uzvārds
                </label>
</div>
</div>

<div className="relative">
<input className="peer w-full bg-slate-800/60 border border-slate-700/50 rounded-full px-4 pt-5 pb-2 text-sm text-white placeholder-transparent focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/40 transition-colors" id="lead-email" placeholder="E-pasts" type="email"/>
<label className="absolute left-4 top-2 text-[10px] font-medium text-slate-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-xs peer-placeholder-shown:text-slate-500 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-amber-400/80" htmlFor="lead-email">
                E-pasts
              </label>
</div>

<div className="relative">
<input className="peer w-full bg-slate-800/60 border border-slate-700/50 rounded-full px-4 pt-5 pb-2 text-sm text-white placeholder-transparent focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/40 transition-colors" id="lead-phone" placeholder="Tālrunis" type="tel"/>
<label className="absolute left-4 top-2 text-[10px] font-medium text-slate-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-xs peer-placeholder-shown:text-slate-500 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-amber-400/80" htmlFor="lead-phone">
                Tālrunis
              </label>
</div>

<div className="relative">
<textarea className="peer w-full bg-slate-800/60 border border-slate-700/50 rounded-2xl px-4 pt-6 pb-3 text-sm text-white placeholder-transparent focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/40 transition-colors resize-none" id="lead-message" placeholder="Jūsu jautājums" rows="3"></textarea>
<label className="absolute left-4 top-2 text-[10px] font-medium text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:text-slate-500 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-amber-400/80" htmlFor="lead-message">
                Jūsu jautājums vai vajadzība
              </label>
</div>

<div className="">
<p className="text-[10px] uppercase text-xs font-medium text-slate-500 tracking-wide mb-2">
                Izvēlieties izmēru
              </p>
<div className="relative flex bg-slate-800/60 rounded-full p-1 border border-slate-700/50">
<div className="absolute top-1 left-1 h-[calc(100%-8px)] rounded-full bg-amber-400 transition-all duration-200" id="sizeSlider" style={{width: 'calc(33.333% - 4px)'}}></div>
<button className="relative z-10 flex-1 py-2 text-sm font-medium rounded-full text-slate-900 transition-colors" data-size="0" onclick="selectSize(0)" type="button">
                  3 m²
                </button>
<button className="relative z-10 flex-1 py-2 text-sm font-medium rounded-full text-slate-400 hover:text-slate-200 transition-colors" data-size="1" onclick="selectSize(1)" type="button">
                  6 m²
                </button>
<button className="relative z-10 flex-1 py-2 text-sm font-medium rounded-full text-slate-400 hover:text-slate-200 transition-colors" data-size="2" onclick="selectSize(2)" type="button">
                  Nezinu vēl
                </button>
</div>
</div>

<div className="flex items-start gap-3">
<label className="relative flex-shrink-0 cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-5 h-5 rounded border-2 border-slate-600 bg-slate-800/60 peer-checked:bg-amber-400 peer-checked:border-amber-400 peer-focus:ring-2 peer-focus:ring-amber-400/30 transition-all flex items-center justify-center">
<svg className="w-3 h-3 text-slate-900 opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
</label>
<p className="leading-relaxed text-sm text-slate-500">
                Piekrītu, ka mani norādītie dati tiek izmantoti, lai sazinātos
                ar mani par glabātavas pakalpojumu.
              </p>
</div>

<button className="hover:bg-amber-500 active:bg-amber-600 active:scale-[0.98] transition-all text-base font-semibold text-slate-900 bg-amber-400 w-full rounded-xl pt-3.5 pr-4 pb-3.5 pl-4" type="submit">
              Nosūtīt pieteikumu
            </button>
</form>
</div>

<div className="flex gap-3 mt-4">
<a className="flex-1 flex flex-col items-center justify-center gap-1.5 bg-transparent text-slate-400 font-medium text-xs py-3 px-3 rounded-xl border border-slate-700/50 hover:border-slate-600 hover:text-slate-300 active:bg-slate-800/50 active:scale-[0.98] transition-all" href="tel:+37120000000">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(203, 213, 225)', width: '20px', height: '20px'}} viewbox="0 0 24 24">
<path className="" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
<span className="">Zvanīt</span>
</a>
<a className="flex-1 flex flex-col items-center justify-center gap-1.5 bg-transparent text-slate-400 font-medium text-xs py-3 px-3 rounded-xl border border-slate-700/50 hover:border-slate-600 hover:text-slate-300 active:bg-slate-800/50 active:scale-[0.98] transition-all" href="mailto:info@cargopark.lv">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
<span className="">Rakstīt e-pastu</span>
</a>
<a className="flex-1 flex flex-col items-center justify-center gap-1.5 bg-transparent text-slate-400 font-medium text-xs py-3 px-3 rounded-xl border border-slate-700/50 hover:border-slate-600 hover:text-slate-300 active:bg-slate-800/50 active:scale-[0.98] transition-all" href="https://maps.google.com" target="_blank">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span>Atvērt kartē</span>
</a>
</div>

<style>
          .peer:checked ~ div svg { opacity: 1; }
        </style>
</section>

<footer className="mt-16 pb-8">
<div className="flex items-center justify-between mb-5">
<div className="w-7 h-7 rounded-md bg-amber-400 flex items-center justify-center flex-shrink-0">
<span className="text-slate-900 font-bold text-[10px] tracking-tight">
              SC
            </span>
</div>
<span className="text-xs text-slate-500">
            © 2025 Sonora CargoPark – daļa no Sonora Group
          </span>
</div>
<div className="flex flex-wrap items-center gap-x-1 gap-y-1.5">
<a className="text-xs text-slate-500 hover:text-slate-300 transition-colors" href="#">
            Telpas un cenas
          </a>
<span className="text-slate-600 text-xs">·</span>
<a className="text-xs text-slate-500 hover:text-slate-300 transition-colors" href="#">
            Par mums
          </a>
<span className="text-slate-600 text-xs">·</span>
<a className="text-xs text-slate-500 hover:text-slate-300 transition-colors" href="#">
            Kontakti
          </a>
<span className="text-slate-600 text-xs">·</span>
<a className="text-xs text-slate-500 hover:text-slate-300 transition-colors" href="#">
            Līguma noteikumi
          </a>
<span className="text-slate-600 text-xs">·</span>
<a className="text-xs text-slate-500 hover:text-slate-300 transition-colors" href="#">
            Sīkdatņu politika
          </a>
</div>
</footer>
</div>

<div className="fixed inset-0 z-50 hidden" id="reservationSheet" style={{display: 'none'}}>
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="closeReservationSheet()"></div>
<div className="absolute bottom-0 left-0 right-0 bg-slate-900 rounded-t-3xl p-6 max-h-[90vh] overflow-y-auto transform translate-y-full transition-transform duration-300" id="sheetContent">
<div className="w-12 h-1 bg-slate-700 rounded-full mx-auto mb-6"></div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-1">
          Rezervēt glabātavas telpu
        </h3>
<p className="text-sm text-slate-400 mb-6">
          Izvēlieties izmēru un sākuma datumu – pārējo palīdzēsim noformēt.
        </p>

<div className="flex bg-slate-800/50 rounded-xl p-1 mb-6">
<button className="flex-1 py-2.5 rounded-lg text-sm font-medium bg-amber-400 text-slate-900 transition-all">
            3 m²
          </button>
<button className="flex-1 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white transition-all">
            6 m²
          </button>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">
              Sākuma datums
            </label>
<input className="w-full bg-slate-700/50 border border-slate-600/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/50 transition-colors" type="date"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">
              Vārds, uzvārds
            </label>
<input className="w-full bg-slate-700/50 border border-slate-600/30 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/50 transition-colors" placeholder="Jūsu vārds un uzvārds" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">
              Tālrunis
            </label>
<input className="w-full bg-slate-700/50 border border-slate-600/30 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/50 transition-colors" placeholder="+371 2X XXX XXX" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">
              E-pasts
            </label>
<input className="w-full bg-slate-700/50 border border-slate-600/30 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/50 transition-colors" placeholder="jusu@epasts.lv" type="email"/>
</div>
</div>
<p className="text-xs text-slate-500 mt-4 mb-6">
          Rezervācija nav saistoša līdz brīdim, kad apstiprinām līguma
          nosacījumus.
        </p>
<button className="w-full bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-semibold text-sm py-3.5 px-4 rounded-xl hover:from-amber-300 hover:to-orange-400 transition-all shadow-lg shadow-amber-500/20">
          Apstiprināt rezervāciju
        </button>
</div>
</div>

<style id="custom-scrollbar-style">
      /* Hide default scrollbar on mobile */
      @media (max-width: 768px) {
        body::-webkit-scrollbar {
          width: 3px;
        }
        body::-webkit-scrollbar-track {
          background: transparent;
        }
        body::-webkit-scrollbar-thumb {
          background: rgba(100, 116, 139, 0.25);
          border-radius: 10px;
        }
        body::-webkit-scrollbar-thumb:hover {
          background: rgba(100, 116, 139, 0.4);
        }
        body {
          scrollbar-width: thin;
          scrollbar-color: rgba(100, 116, 139, 0.25) transparent;
        }
      }

      /* Keep normal scrollbar on desktop */
      @media (min-width: 769px) {
        body::-webkit-scrollbar {
          width: 8px;
        }
        body::-webkit-scrollbar-track {
          background: #0f172a;
        }
        body::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 4px;
        }
        body::-webkit-scrollbar-thumb:hover {
          background: #475569;
        }
      }
    </style>

    </>
  );
}
