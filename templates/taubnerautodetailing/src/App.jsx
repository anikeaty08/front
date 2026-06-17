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



    lucide.createIcons();

    (function() {
        const scrollContainer = document.getElementById('portfolio-scroll');
        const scrollLeftBtn = document.getElementById('scroll-left');
        const scrollRightBtn = document.getElementById('scroll-right');

        if (scrollContainer && scrollLeftBtn && scrollRightBtn) {
            scrollLeftBtn.addEventListener('click', () => {
                const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : 616;
                scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });
            scrollRightBtn.addEventListener('click', () => {
                const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : 616;
                scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });
        }
    })();
  
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
      

<nav className="fixed top-0 w-full z-50 bg-[#0F0F0F]/90 backdrop-blur-xl border-b border-[#252525]">
<div className="flex max-w-screen-2xl mr-auto ml-auto pt-5 pr-6 pb-5 pl-6 items-center justify-between">
<div className="flex items-center">
<a className="inline-flex items-center hover:opacity-80 transition-opacity gap-3 text-[#F0EDE8]" href="#">
<span className="uppercase text-3xl font-medium italic tracking-tight font-headline">Taubner Auto<span className="text-[#E63025]">Detailing</span></span>
</a>
<div className="hidden md:flex gap-8 items-center ml-20">
<a className="uppercase font-medium italic text-[#E63025] tracking-tight font-headline border-[#E63025] border-b-2 pb-1 text-lg" href="#services">
            Služby
          </a>
<a className="uppercase hover:text-[#F0EDE8] transition-colors font-medium italic text-[#888880] tracking-tight font-headline text-lg" href="#portfolio">
            Portfolio
          </a>
<a className="uppercase hover:text-[#F0EDE8] transition-colors font-medium italic text-[#888880] tracking-tight font-headline text-lg" href="#about">
            O nás
          </a>
<a className="uppercase hover:text-[#E63025] transition-all duration-300 font-medium italic text-[#888880] tracking-tight font-headline text-lg" href="#contact">
            Kontakt
          </a>
</div>
</div>
<div className="flex items-center gap-6 md:gap-8">
<a className="flex items-center gap-3 hover:opacity-80 transition-opacity" href="tel:+420777607134">
<i className="text-[#E63025] w-6 h-6" data-lucide="phone" strokeWidth="1.5"></i>
<span className="hidden sm:block text-xl font-normal text-[#F0EDE8] tracking-tight">+420 776 243 532</span>
</a>
<div className="flex items-center gap-5">
<a aria-label="Napsat zprávu" className="text-[#F0EDE8] hover:text-[#888880] transition-colors" href="#contact">
<i className="w-6 h-6" data-lucide="message-circle" strokeWidth="1.5"></i>
</a>
<a aria-label="Odeslat" className="text-[#F0EDE8] hover:text-[#888880] transition-colors" href="#contact">
<i className="w-6 h-6" data-lucide="send" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</nav>

<section className="relative h-screen flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Detailní záběr na vyleštěný lak s odlesky světla" className="opacity-40 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71b7a6ac-8be6-4350-ab8e-6faebedd2c77_1600w.png"/>
<div className="hero-gradient absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
<h1 className="md:text-7xl uppercase leading-none text-5xl font-medium italic text-[#F0EDE8] tracking-tight font-headline mb-8 drop-shadow-lg">
  Zakalená světla.
  <br className=""/>
<span className="text-[#E63025]">Poškrábaný lak. </span>
<br/>
        Vyřešeno.
</h1>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-16">
<button className="px-12 py-5 bg-[#E63025] text-[#F0EDE8] font-headline font-medium italic uppercase tracking-widest text-lg hover:bg-[#E63025]/80 transition-all active:scale-95 rounded-sm" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})">
          Nezávazná poptávka
        </button>
<button className="px-12 py-5 border border-[#252525] bg-[#0F0F0F]/50 backdrop-blur-sm text-[#F0EDE8] font-headline font-medium italic uppercase tracking-widest text-lg hover:bg-[#1A1A1A] transition-all rounded-sm" onclick="document.getElementById('services').scrollIntoView({behavior: 'smooth'})">
          Prohlédnout služby
        </button>
</div>
</div>
</section>

<section className="py-32 bg-[#0F0F0F] px-6 overflow-hidden" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="grid grid-cols-2 gap-6">
<div className="pt-16">
<img alt="Pracovník detailingu aplikující ochranu na vůz" className="hover:grayscale-0 transition-all duration-700 aspect-[3/4] opacity-90 object-cover border-[#252525] border rounded-sm shadow-2xl grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/acf6f611-ed6e-4a91-9074-22e98a137ca1_3840w.jpg?w=800&amp;q=80"/>
</div>
<div className="">
<img alt="Detail pečlivého čištění interiéru vozu" className="hover:grayscale-0 transition-all duration-700 aspect-[3/4] opacity-90 object-cover border-[#252525] border rounded-sm shadow-2xl grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3980f094-aadc-46ec-a6ac-6ed951465280_3840w.jpg?w=800&amp;q=80"/>
</div>
</div>
<div className="space-y-10">
<div className="inline-block px-5 py-2 border border-[#E63025]/30 text-[#E63025] font-headline text-sm tracking-[0.2em] uppercase rounded-sm bg-[#E63025]/5">
          Osobní přístup
        </div>
<h2 className="text-4xl md:text-5xl font-medium italic tracking-tight uppercase font-headline text-[#F0EDE8]">
          PROČ SI VYBRAT
          <span className="text-[#E63025]">NÁS?</span>
</h2>
<ul className="space-y-8">
<li className="flex items-start gap-5">
<i className="text-[#E63025] mt-1 w-7 h-7 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<div className="">
<h4 className="font-headline font-medium italic text-2xl uppercase tracking-tight text-[#F0EDE8]">
                Důraz na detail
              </h4>
<p className="text-[#888880] mt-2 text-xl leading-relaxed">
                Každý vůz bereme jako vlastní. Nic nepřehlížíme a věnujeme se
                každému záhybu s maximální péčí.
              </p>
</div>
</li>
<li className="flex items-start gap-5">
<i className="text-[#E63025] mt-1 w-7 h-7 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<div className="">
<h4 className="font-headline font-medium italic text-2xl uppercase tracking-tight text-[#F0EDE8]">
                Prémiová kosmetika
              </h4>
<p className="text-[#888880] mt-2 text-xl leading-relaxed">
                Pracujeme pouze s ověřenou a špičkovou autokosmetikou šetrnou
                k materiálům.
              </p>
</div>
</li>
<li className="flex items-start gap-5">
<i className="text-[#E63025] mt-1 w-7 h-7 shrink-0" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<div className="">
<h4 className="font-headline font-medium italic text-2xl uppercase tracking-tight text-[#F0EDE8]">
                Individuální péče
              </h4>
<p className="text-[#888880] mt-2 text-xl leading-relaxed">
                Služby přizpůsobujeme na míru stavu vašeho vozidla a vašim
                očekáváním.
              </p>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="border-y bg-[#1A1A1A] border-[#252525] pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-wrap md:flex-nowrap justify-between gap-12">
<div className="relative flex-1 min-w-[200px]">
<div className="text-5xl font-medium italic text-[#252525] tracking-tight font-headline mb-4">
            01
          </div>
<div className="w-full h-1 bg-[#252525] mb-6 relative rounded-full">
<div className="absolute top-0 left-0 w-12 h-1 bg-[#E63025] rounded-full"></div>
</div>
<p className="text-base font-headline font-medium uppercase tracking-widest text-[#888880]">
            Konzultace a prohlídka
          </p>
</div>
<div className="flex-1 min-w-[200px] relative">
<div className="text-5xl font-medium italic text-[#252525] tracking-tight font-headline mb-4">
            02
          </div>
<div className="bg-[#252525] w-full h-1 rounded-full mb-6 relative">
<div className="bg-[#E63025] w-12 h-1 rounded-full absolute top-0 left-0"></div>
</div>
<p className="text-base font-headline font-medium uppercase tracking-widest text-[#888880]">
            Důkladná příprava
          </p>
</div>
<div className="relative flex-1 min-w-[200px]">
<div className="text-5xl font-medium italic text-[#252525] tracking-tight font-headline mb-4">
            03
          </div>
<div className="w-full h-1 bg-[#252525] mb-6 relative rounded-full">
<div className="absolute top-0 left-0 w-12 h-1 bg-[#E63025] rounded-full"></div>
</div>
<p className="text-base font-headline font-medium uppercase tracking-widest text-[#888880]">
            Precizní práce
          </p>
</div>
<div className="relative flex-1 min-w-[200px]">
<div className="text-5xl font-medium italic text-[#E63025] tracking-tight font-headline mb-4">
            04
          </div>
<div className="w-full h-1 bg-[#252525] mb-6 relative rounded-full">
<div className="absolute top-0 left-0 w-12 h-1 bg-[#E63025] rounded-full"></div>
</div>
<p className="text-base font-headline font-medium uppercase tracking-widest text-[#F0EDE8]">
            Předání s úsměvem
          </p>
</div>
</div>
</div>
</section>

<section className="bg-[#0F0F0F] pt-32 pb-32" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-20">
<div className="">
<h2 className="text-4xl md:text-5xl font-medium italic tracking-tight uppercase font-headline text-[#F0EDE8]">
            PŘEHLED
            <span className="text-[#E63025]">SLUŽEB</span>
</h2>
<div className="h-1 w-32 bg-[#E63025] mt-6 rounded-full"></div>
</div>
<button className="hidden md:block px-10 py-4 bg-[#1A1A1A] border border-[#252525] text-[#F0EDE8] font-headline font-medium italic uppercase tracking-wider text-lg hover:border-[#E63025] transition-colors rounded-sm" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})">
          Ceník na vyžádání
        </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative aspect-square overflow-hidden bg-[#1A1A1A] border border-[#252525] rounded-sm">
<div className="bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div><img alt="Ruční mytí exteriéru" className="group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 opacity-60 w-full h-full object-cover bg-center absolute top-0 right-0 bottom-0 left-0 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/374379b8-1385-4067-9005-ae66c4451d80_3840w.jpg?w=800&amp;q=80"/>
<div className="absolute bottom-8 left-8 right-8">
<div className="text-base font-headline font-medium text-[#E63025] mb-3 tracking-[0.1em] uppercase">
              Exteriér
            </div>
<h3 className="text-2xl font-medium italic uppercase font-headline tracking-tight text-[#F0EDE8]">
              Šetrné ruční mytí
            </h3>
</div>
</div>

<div className="group relative aspect-square overflow-hidden bg-[#1A1A1A] border border-[#252525] rounded-sm">
<div className="bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div><img alt="Detailní čištění interiéru a sedaček" className="bg-center group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 opacity-60 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/704ecf5e-a9e8-4c13-9936-80d3695debea_3840w.jpg?w=800&amp;q=80"/>
<div className="absolute bottom-8 left-8 right-8">
<div className="text-base font-headline font-medium text-[#E63025] mb-3 tracking-[0.1em] uppercase">
              Interiér
            </div>
<h3 className="text-2xl font-medium italic uppercase font-headline tracking-tight text-[#F0EDE8]">
              Hloubkové čištění
            </h3>
</div>
</div>

<div className="group relative aspect-square overflow-hidden bg-[#1A1A1A] border border-[#252525] rounded-sm">
<div className="bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div><img alt="Strojní leštění a obnova lesku laku" className="bg-center group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 opacity-60 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f224229-57c9-4057-9194-9fcf15d33ffb_3840w.jpg?w=800&amp;q=80"/>
<div className="absolute bottom-8 left-8 right-8">
<div className="text-base font-headline font-medium text-[#E63025] mb-3 tracking-[0.1em] uppercase">
              Korekce vad
            </div>
<h3 className="text-2xl font-medium italic uppercase font-headline tracking-tight text-[#F0EDE8]">
              Renovace laku
            </h3>
</div>
</div>

<div className="group relative aspect-square overflow-hidden bg-[#1A1A1A] border border-[#252525] rounded-sm">
<div className="bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div><img alt="Aplikace keramické nebo voskové ochrany" className="group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 opacity-60 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3980f094-aadc-46ec-a6ac-6ed951465280_3840w.jpg?w=800&amp;q=80"/>
<div className="absolute bottom-8 left-8 right-8">
<div className="text-base font-headline font-medium text-[#E63025] mb-3 tracking-[0.1em] uppercase">
              Dlouhodobý lesk
            </div>
<h3 className="text-2xl font-medium italic uppercase font-headline tracking-tight text-[#F0EDE8]">
              Ochrana laku
            </h3>
</div>
</div>

<div className="group relative aspect-square overflow-hidden bg-[#1A1A1A] border border-[#252525] rounded-sm">
<div className="bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div><img alt="Čištění a impregnace kůže" className="group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 opacity-60 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0ad60973-5649-4c1a-b266-ded21b02c215_3840w.jpg?w=800&amp;q=80"/>
<div className="absolute bottom-8 left-8 right-8">
<div className="text-base font-headline font-medium text-[#E63025] mb-3 tracking-[0.1em] uppercase">
              Prémiové materiály
            </div>
<h3 className="text-2xl font-medium italic uppercase font-headline tracking-tight text-[#F0EDE8]">
              Ošetření kůže
            </h3>
</div>
</div>

<div className="group relative aspect-square overflow-hidden bg-[#1A1A1A] border border-[#252525] rounded-sm">
<div className="bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div><img alt="Příprava vozu před prodejem pro zvýšení hodnoty" className="group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 opacity-60 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0b2e32ce-7e19-483d-896a-23a78bfc5a63_3840w.jpg?w=800&amp;q=80"/>
<div className="absolute bottom-8 left-8 right-8">
<div className="text-base font-headline font-medium text-[#E63025] mb-3 tracking-[0.1em] uppercase">
              Komplexní péče
            </div>
<h3 className="text-2xl font-medium italic uppercase font-headline tracking-tight text-[#F0EDE8]">
              Příprava na prodej
            </h3>
</div>
</div>
</div>
<div className="mt-16 text-center md:hidden">
<button className="w-full px-10 py-5 bg-[#1A1A1A] border border-[#252525] text-[#F0EDE8] font-headline font-medium italic uppercase tracking-wider text-lg rounded-sm hover:border-[#E63025] transition-colors" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})">
          Mám zájem o služby
        </button>
</div>
</div>
</section>

<section className="bg-[#1A1A1A] border-y border-[#252525] pt-32 pb-32" id="portfolio">
<div className="flex flex-row max-w-7xl mx-auto mb-16 px-6 gap-6 items-end justify-between">
<h2 className="text-4xl md:text-5xl font-medium italic tracking-tight uppercase font-headline text-[#F0EDE8]">
        UKÁZKY
        <span className="text-[#E63025]">PRÁCE</span>
</h2>
<div className="flex gap-4">
<button aria-label="Předchozí ukázka" className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-[#252525] rounded-full hover:bg-[#252525] hover:border-[#E63025] hover:text-[#E63025] transition-all text-[#888880] focus:outline-none focus:ring-2 focus:ring-[#E63025]/50 active:scale-95" id="scroll-left" onclick="document.getElementById('portfolio-scroll').scrollBy({ left: window.innerWidth &lt; 768 ? -(window.innerWidth * 0.85) : -616, behavior: 'smooth' })">
<i className="w-6 h-6" data-lucide="arrow-left" strokeWidth="1.5"></i>
</button>
<button aria-label="Další ukázka" className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-[#252525] rounded-full hover:bg-[#252525] hover:border-[#E63025] hover:text-[#E63025] transition-all text-[#888880] focus:outline-none focus:ring-2 focus:ring-[#E63025]/50 active:scale-95" id="scroll-right" onclick="document.getElementById('portfolio-scroll').scrollBy({ left: window.innerWidth &lt; 768 ? window.innerWidth * 0.85 : 616, behavior: 'smooth' })">
<i className="w-6 h-6" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="flex overflow-x-auto gap-6 px-6 no-scrollbar pb-16 snap-x" id="portfolio-scroll">
<div className="flex-none w-[85vw] md:w-[600px] h-[400px] bg-[#1A1A1A] border border-[#252525] rounded-sm overflow-hidden snap-center relative">
<img alt="Dokonale vyčištěný interiér luxusního vozu" className="hover:grayscale-0 transition-all duration-700 hover:opacity-100 opacity-60 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5dbd27c5-9288-4c49-b43a-0cead56e45c2_3840w.jpg?w=800&amp;q=80"/>
</div>
<div className="flex-none w-[85vw] md:w-[600px] h-[400px] bg-[#1A1A1A] border border-[#252525] rounded-sm overflow-hidden snap-center relative">
<img alt="Zrcadlový lesk na černém laku po renovaci" className="hover:grayscale-0 transition-all duration-700 hover:opacity-100 opacity-60 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e94454e8-cc57-425d-8da1-7a2258f4b3dc_1600w.webp"/>
</div>
<div className="flex-none w-[85vw] md:w-[600px] h-[400px] bg-[#1A1A1A] border border-[#252525] rounded-sm overflow-hidden snap-center relative">
<img alt="Detail na odrážející se světlo na kapotě po keramické ochraně" className="hover:grayscale-0 transition-all duration-700 hover:opacity-100 bg-center opacity-60 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6ec8037f-dccb-448f-a1b3-2b5106f6fed5_1600w.webp"/>
</div>
<div className="flex-none w-[85vw] md:w-[600px] h-[400px] bg-[#1A1A1A] border border-[#252525] rounded-sm overflow-hidden snap-center relative">
<img alt="Vyčištěná a naimpregnovaná sedadla" className="hover:grayscale-0 transition-all duration-700 hover:opacity-100 bg-center opacity-60 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1868d193-8dff-472c-9903-f8baf745ca95_1600w.webp"/>
</div>
</div>
</section>

<footer className="bg-[#0F0F0F] pt-32 pb-10" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
<div className="">
<h2 className="text-4xl md:text-5xl font-medium italic uppercase tracking-tight font-headline text-[#F0EDE8] mb-8">
            KONTAKTUJTE
            <span className="text-[#E63025]">NÁS</span>
</h2>
<p className="text-xl text-[#888880] mb-12 max-w-lg leading-relaxed">
            Máte zájem o naše služby nebo se chcete na něco zeptat? Napište
            nám nebo zavolejte, rádi vám poradíme s péčí o váš vůz.
          </p>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<input className="w-full bg-[#1A1A1A] border border-[#252525] rounded-sm p-5 text-lg text-[#F0EDE8] placeholder-[#888880] focus:outline-none focus:border-[#E63025] focus:bg-[#252525] transition-colors" placeholder="Jméno a příjmení" type="text"/>
<input className="w-full bg-[#1A1A1A] border border-[#252525] rounded-sm p-5 text-lg text-[#F0EDE8] placeholder-[#888880] focus:outline-none focus:border-[#E63025] focus:bg-[#252525] transition-colors" placeholder="Telefon" type="tel"/>
</div>
<input className="w-full bg-[#1A1A1A] border border-[#252525] rounded-sm p-5 text-lg text-[#F0EDE8] placeholder-[#888880] focus:outline-none focus:border-[#E63025] focus:bg-[#252525] transition-colors" placeholder="E-mailová adresa" type="email"/>
<input className="w-full bg-[#1A1A1A] border border-[#252525] rounded-sm p-5 text-lg text-[#F0EDE8] placeholder-[#888880] focus:outline-none focus:border-[#E63025] focus:bg-[#252525] transition-colors" placeholder="Předmět zprávy" type="text"/>
<textarea className="w-full bg-[#1A1A1A] border border-[#252525] rounded-sm p-5 text-lg text-[#F0EDE8] placeholder-[#888880] focus:outline-none focus:border-[#E63025] focus:bg-[#252525] transition-colors resize-none" placeholder="Popište stav vašeho vozu a jaké služby požadujete..." rows="5"></textarea>
<button className="mt-8 flex items-center justify-center gap-4 bg-[#E63025] text-[#F0EDE8] font-headline font-medium italic uppercase tracking-widest px-10 py-5 rounded-sm hover:bg-[#E63025]/80 transition-all active:scale-95 w-max text-lg" type="button">
              ODESLAT ZPRÁVU
              <i className="w-6 h-6" data-lucide="send" strokeWidth="1.5"></i>
</button>
</form>
</div>
<div className="flex flex-col space-y-14 lg:pl-12">
<div className="space-y-10">
<div className="flex items-start gap-6">
<div className="w-14 h-14 shrink-0 bg-[#1A1A1A] rounded-sm border border-[#252525] flex items-center justify-center">
<i className="text-[#E63025] w-6 h-6" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div className="">
<h3 className="text-[#F0EDE8] font-headline font-medium italic uppercase tracking-tight text-2xl mb-2">
                  Adresa
                </h3>
<p className="text-lg text-[#888880]">Mezihorská 1329/20, Prague, Czech Republic, 143 00</p>
</div>
</div>
<div className="flex items-start gap-6">
<div className="w-14 h-14 shrink-0 bg-[#1A1A1A] rounded-sm border border-[#252525] flex items-center justify-center">
<i className="text-[#E63025] w-6 h-6" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div className="">
<h3 className="text-[#F0EDE8] font-headline font-medium italic uppercase tracking-tight text-2xl mb-2">
                  Telefon
                </h3>
<p className="text-lg text-[#888880]">+420 776 243 532</p>
</div>
</div>
<div className="flex items-start gap-6">
<div className="w-14 h-14 shrink-0 bg-[#1A1A1A] rounded-sm border border-[#252525] flex items-center justify-center">
<i className="text-[#E63025] w-6 h-6" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<div className="">
<h3 className="text-[#F0EDE8] font-headline font-medium italic uppercase tracking-tight text-2xl mb-2">
                  Otevírací doba
                </h3>
<p className="text-lg text-[#888880]">
                  Po - Ne: Dle telefonické domluvy
                </p>
</div>
</div>
</div>
<div className="relative w-full h-[300px] bg-[#1A1A1A] rounded-sm border border-[#252525] overflow-hidden flex items-center justify-center group mt-auto">
<img alt="Tmavá mapa" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale mix-blend-screen group-hover:opacity-50 transition-all duration-700 group-hover:scale-105 z-0" src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-transparent z-10"></div>
<button className="relative z-20 px-10 py-5 bg-[#E63025] text-[#F0EDE8] font-headline font-medium italic uppercase tracking-widest text-lg hover:bg-[#E63025]/80 transition-all active:scale-95 rounded-sm">
              Otevřít v Google Maps
            </button>
</div>
</div>
</div>
<div className="border-t border-[#252525] pt-10 text-center">
<p className="uppercase text-sm text-[#888880] tracking-[0.2em] font-headline">© 2026 Taubner Auto Detailing. Všechna práva vyhrazena.</p>
</div>
</div>
</footer>


    </>
  );
}
