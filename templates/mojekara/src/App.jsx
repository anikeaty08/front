import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Initialize Lucide icons
      lucide.createIcons();

      // Portfolio slider logic
      (function() {
          const scrollContainer = document.getElementById('portfolio-scroll');
          const scrollLeftBtn = document.getElementById('scroll-left');
          const scrollRightBtn = document.getElementById('scroll-right');

          if (scrollContainer && scrollLeftBtn && scrollRightBtn) {
              scrollLeftBtn.addEventListener('click', () => {
                  const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : 516;
                  scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
              });
              scrollRightBtn.addEventListener('click', () => {
                  const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : 516;
                  scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
              });
          }
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(255,0,0,0.05)] bg-gradient-to-b from-neutral-900 to-transparent">
<div className="flex max-w-screen-2xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<div className="flex items-center">
<a className="flex items-center" href="#"></a>
<a className="inline-flex items-center transition-opacity hover:opacity-80" href="#">
<img alt="MOJEKARA Logo" className="md:h-10 bg-center w-10 h-10 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aacb3d46-1b7b-43ef-aeb6-31478fe8d91e_320w.jpg?w=800&amp;q=80"/>
</a>
<div className="hidden md:flex gap-6 items-center ml-16">
<a className="uppercase font-semibold italic text-red-400 tracking-tight font-headline border-red-500 border-b-2 pb-1" href="#services">
              Služby
            </a>
<a className="uppercase hover:text-neutral-200 transition-colors font-semibold italic text-neutral-400 tracking-tight font-headline" href="#portfolio">
              Portfolio
            </a>
<a className="uppercase hover:text-neutral-200 transition-colors font-semibold italic text-neutral-400 tracking-tight font-headline" href="#about">
              O nás
            </a>
<a className="uppercase hover:text-red-300 transition-all duration-300 active:scale-95 font-semibold italic text-red-400 tracking-tight font-headline" href="#contact">
              Kontakt
            </a>
</div>
</div>
<div className="flex items-center gap-4 md:gap-6">
<a className="flex items-center gap-2 hover:opacity-80 transition-opacity" href="tel:+420777607134">
<i className="text-red-900 w-5 h-5" data-lucide="phone" strokeWidth="2"></i>
<span className="text-lg font-medium text-white tracking-tight">+420 775 041 092</span>
</a>
<div className="flex items-center gap-4">
<a aria-label="Napsat zprávu" className="text-white hover:text-neutral-300 transition-colors" href="#contact">
<i className="w-5 h-5" data-lucide="message-circle" strokeWidth="1.5"></i>
</a>
<a aria-label="Odeslat" className="text-white hover:text-neutral-300 transition-colors" href="#contact">
<i className="w-5 h-5" data-lucide="send" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</nav>

<section className="relative h-screen flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Detailní záběr na vyleštěný lak s odlesky světla" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/af363c13-81a9-4d5e-ae1e-5ee4ab2af597_3840w.jpg?w=800&amp;q=80"/>
<div className="hero-gradient absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
<h1 className="md:text-7xl uppercase leading-none text-5xl font-semibold italic text-neutral-100 tracking-tight font-headline mb-6 drop-shadow-lg">
          ČIŠTĚNÍ INTERIÉRŮ
          <br/>
<span className="text-red-400">RENOVACE LAKU</span>
<br/>
          PÉČE NA MÍRU
        </h1>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
<button className="px-10 py-4 bg-red-500 text-neutral-950 font-headline font-semibold italic uppercase tracking-widest hover:bg-red-400 transition-all active:scale-95 rounded-sm" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})">
            Nezávazná poptávka
          </button>
<button className="px-10 py-4 border border-neutral-700 text-neutral-200 font-headline font-semibold italic uppercase tracking-widest hover:bg-neutral-800 transition-all rounded-sm" onclick="document.getElementById('services').scrollIntoView({behavior: 'smooth'})">
            Prohlédnout služby
          </button>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 px-6 overflow-hidden border-t border-neutral-900" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="grid grid-cols-2 gap-4">
<div className="pt-12">
<img alt="Pracovník detailingu aplikující ochranu na vůz" className="hover:grayscale-0 transition-all duration-700 aspect-[3/4] object-contain border-neutral-800 border rounded-sm shadow-2xl grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/808864ee-44e1-4353-8c25-002252618b9d_3840w.jpg?w=800&amp;q=80"/>
</div>
<div className="">
<img alt="Detail pečlivého čištění interiéru vozu" className="hover:grayscale-0 transition-all duration-700 aspect-[3/4] object-contain border-neutral-800 border rounded-sm shadow-2xl grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b3b4012a-93b3-4489-9a40-40792560a438_3840w.jpg?w=800&amp;q=80"/>
</div>
</div>
<div className="space-y-8">
<div className="inline-block px-4 py-1 border border-red-500/30 text-red-400 font-headline text-xs tracking-[0.2em] uppercase rounded-sm bg-red-500/5">
            Osobní přístup
          </div>
<h2 className="text-4xl md:text-5xl font-semibold italic tracking-tight uppercase font-headline">
            PROČ
            <span className="text-red-400">MOJEKÁRA?</span>
</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<iconify-icon className="text-red-400 mt-1 text-2xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<div className="">
<h4 className="font-headline font-semibold italic text-xl uppercase tracking-tight text-neutral-200">
                  Důraz na detail
                </h4>
<p className="text-neutral-400 mt-1 text-lg">
                  Každý vůz bereme jako vlastní. Nic nepřehlížíme a věnujeme se
                  každému záhybu.
                </p>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-red-400 mt-1 text-2xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<div className="">
<h4 className="font-headline font-semibold italic text-xl uppercase tracking-tight text-neutral-200">
                  Prémiová kosmetika
                </h4>
<p className="text-neutral-400 mt-1 text-lg">
                  Pracujeme pouze s ověřenou a špičkovou autokosmetikou šetrnou
                  k materiálům.
                </p>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-red-400 mt-1 text-2xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<div className="">
<h4 className="font-headline font-semibold italic text-xl uppercase tracking-tight text-neutral-200">
                  Individuální péče
                </h4>
<p className="text-neutral-400 mt-1 text-lg">
                  Služby přizpůsobujeme na míru stavu vašeho vozidla a vašim
                  očekáváním.
                </p>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="border-y bg-neutral-900 border-neutral-800 pt-20 pb-20">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-wrap md:flex-nowrap justify-between gap-8">
<div className="relative flex-1 min-w-[200px]">
<div className="text-5xl font-semibold italic text-neutral-700 tracking-tight font-headline mb-2">
              01
            </div>
<div className="w-full h-1 bg-neutral-800 mb-4 relative rounded-full">
<div className="absolute top-0 left-0 w-8 h-1 bg-red-500 rounded-full"></div>
</div>
<p className="text-sm font-headline font-semibold uppercase tracking-widest text-neutral-400">
              Konzultace a prohlídka
            </p>
</div>
<div className="flex-1 min-w-[200px] relative">
<div className="text-5xl font-semibold italic text-neutral-700 tracking-tight font-headline mb-2">
              02
            </div>
<div className="bg-neutral-800 w-full h-1 rounded-full mb-4 relative">
<div className="bg-rose-500 w-8 h-1 rounded-full absolute top-0 left-0"></div>
</div>
<p className="text-sm font-headline font-semibold uppercase tracking-widest text-neutral-400">
              Důkladná příprava
            </p>
</div>
<div className="relative flex-1 min-w-[200px]">
<div className="text-5xl font-semibold italic text-neutral-700 tracking-tight font-headline mb-2">
              03
            </div>
<div className="w-full h-1 bg-neutral-800 mb-4 relative rounded-full">
<div className="absolute top-0 left-0 w-8 h-1 bg-red-500 rounded-full"></div>
</div>
<p className="text-sm font-headline font-semibold uppercase tracking-widest text-neutral-400">
              Precizní práce
            </p>
</div>
<div className="relative flex-1 min-w-[200px]">
<div className="text-5xl font-semibold italic text-red-400 tracking-tight font-headline mb-2">
              04
            </div>
<div className="w-full h-1 bg-neutral-800 mb-4 relative rounded-full">
<div className="absolute top-0 left-0 w-8 h-1 bg-red-500 rounded-full"></div>
</div>
<p className="text-sm font-headline font-semibold uppercase tracking-widest text-red-200">
              Předání s úsměvem
            </p>
</div>
</div>
</div>
</section>

<section className="bg-neutral-950 pt-24 pb-24" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-16">
<div className="">
<h2 className="text-4xl md:text-5xl font-semibold italic tracking-tight uppercase font-headline">
              PŘEHLED
              <span className="text-red-400">SLUŽEB</span>
</h2>
<div className="h-1 w-24 bg-red-500 mt-4 rounded-full"></div>
</div>
<button className="hidden md:block px-8 py-3 bg-neutral-900 border border-neutral-700 text-neutral-200 font-headline font-semibold italic uppercase tracking-wider text-base hover:border-red-500 transition-colors rounded-sm" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})">
            Ceník na vyžádání
          </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">

<div className="group relative aspect-square overflow-hidden bg-neutral-900 rounded-sm">
<div className="bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6a32c0b3-0d58-49e0-98c4-f14fbcd83b8d_1600w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Ruční mytí exteriéru" className="group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 bg-center opacity-80 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6a32c0b3-0d58-49e0-98c4-f14fbcd83b8d_1600w.jpg?w=800&amp;q=80"/>
<div className="absolute bottom-8 left-8 right-8">
<div className="text-sm font-headline font-semibold text-red-400 mb-2 tracking-[0.1em] uppercase">
                Exteriér
              </div>
<h3 className="text-xl font-semibold italic uppercase font-headline tracking-tight text-neutral-100">
                Šetrné ruční mytí
              </h3>
</div>
</div>

<div className="group relative aspect-square overflow-hidden bg-neutral-900 rounded-sm">
<div className="bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17b267e2-83cc-415a-ae52-bce479607c84_1600w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Detailní čištění interiéru a sedaček" className="group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 opacity-80 w-full h-full object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17b267e2-83cc-415a-ae52-bce479607c84_1600w.jpg?w=800&amp;q=80"/>
<div className="absolute bottom-8 left-8 right-8">
<div className="text-sm font-headline font-semibold text-red-400 mb-2 tracking-[0.1em] uppercase">
                Interiér
              </div>
<h3 className="text-xl font-semibold italic uppercase font-headline tracking-tight text-neutral-100">
                Hloubkové čištění
              </h3>
</div>
</div>

<div className="group relative aspect-square overflow-hidden bg-neutral-900 rounded-sm">
<div className="bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Strojní leštění a obnova lesku laku" className="group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 opacity-80 w-full h-full object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d6cbd55-4c82-4b75-ab13-3d0d726ead26_1600w.jpg?w=800&amp;q=80"/>
<div className="absolute bottom-8 left-8 right-8">
<div className="text-sm font-headline font-semibold text-red-400 mb-2 tracking-[0.1em] uppercase">
                Korekce vad
              </div>
<h3 className="text-xl font-semibold italic uppercase font-headline tracking-tight text-neutral-100">
                Renovace laku
              </h3>
</div>
</div>

<div className="group relative aspect-square overflow-hidden bg-neutral-900 rounded-sm">
<div className="bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cf4dbc14-a865-440d-9e22-044905ade867_1600w.jpg?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Aplikace keramické nebo voskové ochrany" className="group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 opacity-80 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cf4dbc14-a865-440d-9e22-044905ade867_1600w.jpg?w=800&amp;q=80"/>
<div className="absolute bottom-8 left-8 right-8">
<div className="text-sm font-headline font-semibold text-red-400 mb-2 tracking-[0.1em] uppercase">
                Dlouhodobý lesk
              </div>
<h3 className="text-xl font-semibold italic uppercase font-headline tracking-tight text-neutral-100">
                Ochrana laku (Vosk/Keramika)
              </h3>
</div>
</div>

<div className="group relative aspect-square overflow-hidden bg-neutral-900 rounded-sm">
<div className="bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Čištění a impregnace kůže" className="group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 opacity-80 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/751f23c3-cece-44ab-9152-8a069d5d4f0e_3840w.jpg?w=800&amp;q=80"/>
<div className="absolute bottom-8 left-8 right-8">
<div className="text-sm font-headline font-semibold text-red-400 mb-2 tracking-[0.1em] uppercase">
                Prémiové materiály
              </div>
<h3 className="text-xl font-semibold italic uppercase font-headline tracking-tight text-neutral-100">
                Ošetření kůže
              </h3>
</div>
</div>

<div className="group relative aspect-square overflow-hidden bg-neutral-900 rounded-sm">
<div className="bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Příprava vozu před prodejem pro zvýšení hodnoty" className="group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 opacity-80 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b3b4012a-93b3-4489-9a40-40792560a438_1600w.jpg?w=800&amp;q=80"/>
<div className="absolute bottom-8 left-8 right-8">
<div className="text-sm font-headline font-semibold text-red-400 mb-2 tracking-[0.1em] uppercase">
                Komplexní péče
              </div>
<h3 className="text-xl font-semibold italic uppercase font-headline tracking-tight text-neutral-100">
                Příprava na prodej
              </h3>
</div>
</div>
</div>
<div className="mt-12 text-center md:hidden">
<button className="w-full px-8 py-4 bg-neutral-900 border border-neutral-800 text-neutral-200 font-headline font-semibold italic uppercase tracking-wider rounded-sm" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})">
            Mám zájem o služby
          </button>
</div>
</div>
</section>

<section className="bg-neutral-900 pt-24 pb-24" id="portfolio">
<div className="flex flex-row max-w-7xl mr-auto mb-12 ml-auto pr-6 pl-6 gap-x-4 gap-y-4 items-end justify-between">
<h2 className="text-4xl md:text-5xl font-semibold italic tracking-tight uppercase font-headline">
          UKÁZKY
          <span className="text-red-400">PRÁCE</span>
</h2>
<div className="flex gap-2 md:gap-4 gap-x-2 gap-y-2">
<button aria-label="Předchozí ukázka" className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-neutral-700 rounded-full hover:bg-neutral-800 hover:border-red-500 hover:text-red-400 transition-all text-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500/50 active:scale-95" id="scroll-left" onclick="document.getElementById('portfolio-scroll').scrollBy({ left: window.innerWidth &lt; 768 ? -(window.innerWidth * 0.85) : -516, behavior: 'smooth' })">
<i className="w-5 h-5" data-lucide="arrow-left" strokeWidth="1.5"></i>
</button>
<button aria-label="Další ukázka" className="md:w-12 md:h-12 flex hover:bg-neutral-800 hover:border-red-500 hover:text-red-400 transition-all focus:outline-none focus:ring-2 focus:ring-red-500/50 active:scale-95 text-neutral-400 w-10 h-10 border-neutral-700 border rounded-full items-center justify-center" id="scroll-right" onclick="document.getElementById('portfolio-scroll').scrollBy({ left: window.innerWidth &lt; 768 ? window.innerWidth * 0.85 : 516, behavior: 'smooth' })">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="flex overflow-x-auto gap-4 px-6 no-scrollbar pb-12 snap-x" id="portfolio-scroll">
<div className="flex-none w-[85vw] md:w-[500px] h-72 md:h-96 bg-neutral-800 rounded-sm overflow-hidden snap-center">
<img alt="Dokonale vyčištěný interiér luxusního vozu" className="hover:grayscale-0 transition-all duration-500 hover:opacity-100 opacity-90 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32c1130c-2ba1-4c48-baa8-8fb1c4d32fd8_1600w.jpg?w=800&amp;q=80"/>
</div>
<div className="flex-none w-[85vw] md:w-[500px] h-72 md:h-96 bg-neutral-800 rounded-sm overflow-hidden snap-center">
<img alt="Zrcadlový lesk na černém laku po renovaci" className="hover:grayscale-0 transition-all duration-500 hover:opacity-100 opacity-90 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/38ad5581-a7c1-4af1-b131-843fce7889b1_1600w.jpg?w=800&amp;q=80"/>
</div>
<div className="flex-none w-[85vw] md:w-[500px] h-72 md:h-96 bg-neutral-800 rounded-sm overflow-hidden snap-center">
<img alt="Detail na odrážející se světlo na kapotě po keramické ochraně" className="hover:grayscale-0 transition-all duration-500 hover:opacity-100 bg-center opacity-90 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cf4dbc14-a865-440d-9e22-044905ade867_1600w.jpg?w=800&amp;q=80"/>
</div>
<div className="flex-none w-[85vw] md:w-[500px] h-72 md:h-96 bg-neutral-800 rounded-sm overflow-hidden snap-center">
<img alt="Vyčištěná a naimpregnovaná sedadla" className="hover:grayscale-0 transition-all duration-500 hover:opacity-100 opacity-90 w-full h-full object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b3b4012a-93b3-4489-9a40-40792560a438_1600w.jpg?w=800&amp;q=80"/>
</div>
</div>
</section>

<footer className="bg-neutral-950 border-t border-neutral-900 pt-24 pb-8" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
<div className="">
<h2 className="text-4xl md:text-5xl font-semibold italic uppercase tracking-tight font-headline text-neutral-100 mb-6">
              KONTAKTUJTE
              <span className="text-red-400">NÁS</span>
</h2>
<p className="text-lg text-neutral-400 mb-10 max-w-lg leading-relaxed">
              Máte zájem o naše služby nebo se chcete na něco zeptat? Napište
              nám nebo zavolejte, rádi vám poradíme.
            </p>
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="w-full bg-neutral-900/40 border border-neutral-800 rounded-sm p-4 text-base text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-red-500 focus:bg-neutral-900 transition-colors" placeholder="Jméno a příjmení" type="text"/>
<input className="w-full bg-neutral-900/40 border border-neutral-800 rounded-sm p-4 text-base text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-red-500 focus:bg-neutral-900 transition-colors" placeholder="Telefon" type="tel"/>
</div>
<input className="w-full bg-neutral-900/40 border border-neutral-800 rounded-sm p-4 text-base text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-red-500 focus:bg-neutral-900 transition-colors" placeholder="E-mailová adresa" type="email"/>
<input className="w-full bg-neutral-900/40 border border-neutral-800 rounded-sm p-4 text-base text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-red-500 focus:bg-neutral-900 transition-colors" placeholder="Předmět zprávy" type="text"/>
<textarea className="w-full bg-neutral-900/40 border border-neutral-800 rounded-sm p-4 text-base text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-red-500 focus:bg-neutral-900 transition-colors resize-none" placeholder="Popište stav vašeho vozu a jaké služby požadujete..." rows="4"></textarea>
<button className="mt-6 flex items-center justify-center gap-3 bg-red-500 text-neutral-950 font-headline font-semibold italic uppercase tracking-widest px-8 py-4 rounded-sm hover:bg-red-400 transition-all active:scale-95 w-max" type="button">
                ODESLAT ZPRÁVU
                <i className="w-5 h-5" data-lucide="send" strokeWidth="1.5"></i>
</button>
</form>
</div>
<div className="flex flex-col space-y-12 lg:pl-10">
<div className="space-y-8">
<div className="flex items-start gap-6">
<div className="w-12 h-12 shrink-0 bg-neutral-900 rounded-sm border border-neutral-800 flex items-center justify-center">
<i className="text-red-400 w-5 h-5" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div className="">
<h3 className="text-neutral-200 font-headline font-semibold italic uppercase tracking-tight text-xl mb-1">
                    Adresa
                  </h3>
<p className="text-base text-neutral-400">Špitálské náměstí 3404/13, Ústí nad Labem, Czech Republic, 40001</p>
</div>
</div>
<div className="flex items-start gap-6">
<div className="w-12 h-12 shrink-0 bg-neutral-900 rounded-sm border border-neutral-800 flex items-center justify-center">
<i className="text-red-400 w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div className="">
<h3 className="text-neutral-200 font-headline font-semibold italic uppercase tracking-tight text-xl mb-1">
                    Telefon
                  </h3>
<p className="text-base text-neutral-400">775 041 092</p>
</div>
</div>
<div className="flex items-start gap-6">
<div className="w-12 h-12 shrink-0 bg-neutral-900 rounded-sm border border-neutral-800 flex items-center justify-center">
<i className="text-red-400 w-5 h-5" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<div className="">
<h3 className="text-neutral-200 font-headline font-semibold italic uppercase tracking-tight text-xl mb-1">
                    Otevírací doba
                  </h3>
<p className="text-base text-neutral-400">
                    Po - Ne: 24 hodin denně
                  </p>
</div>
</div>
</div>
<div className="relative w-full h-[260px] bg-neutral-900 rounded-sm border border-neutral-800 overflow-hidden flex items-center justify-center group mt-auto">
<img alt="Tmavá mapa" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale mix-blend-screen group-hover:opacity-50 transition-all duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
<button className="relative z-10 px-8 py-4 bg-red-500 text-neutral-950 font-headline font-semibold italic uppercase tracking-widest hover:bg-red-400 transition-all active:scale-95 rounded-sm">
                Otevřít v Google Maps
              </button>
</div>
</div>
</div>
<div className="border-t border-neutral-900 pt-8 text-center">
<p className="uppercase text-xs text-neutral-600 tracking-[0.2em] font-headline">
            © 2026 MOJEKÁRA DETAILING. Všechna práva vyhrazena.
          </p>
</div>
</div>
</footer>


    </>
  );
}
