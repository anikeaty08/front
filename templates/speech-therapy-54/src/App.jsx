import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function () {
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.addEventListener("DOMContentLoaded", () => {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
});
};
initInViewAnimations();
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        (function() {
          const btn = document.getElementById('mobile-menu-button');
          const closeBtn = document.getElementById('mobile-close-button');
          const menu = document.getElementById('mobile-menu');
          const iconM = document.getElementById('menu-icon');
          const iconC = document.getElementById('close-icon');
          const text = document.getElementById('menu-text');
          let open = false;
          function toggle() {
            open = !open;
            if (open) {
              menu.classList.remove('opacity-0', 'invisible');
              menu.classList.add('opacity-100', 'visible');
              iconM.classList.add('hidden');
              iconC.classList.remove('hidden');
              text.textContent = 'Zamknij';
              document.body.style.overflow = 'hidden';
            } else {
              menu.classList.remove('opacity-100', 'visible');
              menu.classList.add('opacity-0', 'invisible');
              iconM.classList.remove('hidden');
              iconC.classList.add('hidden');
              text.textContent = 'Menu';
              document.body.style.overflow = '';
            }
          }
          btn.addEventListener('click', toggle);
          closeBtn.addEventListener('click', toggle);
          menu.querySelectorAll('a').forEach(l => l.addEventListener('click', () => { if(open) toggle(); }));
        })();
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/db6730d4-34e5-4588-94a5-1239360edb3f_3840w.jpg")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>
<header className="z-50 relative" style={{backgroundImage: 'linear-gradient(to bottom, rgba(10, 10, 10, 0.7), transparent)'}}>
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex pt-6 pb-6 items-center justify-between">
<a className="text-xl font-normal tracking-tighter text-black/90" href="/">Centrum Terapii i Rozwoju Mowy - Magdalena Marmol</a>
<nav className="hidden lg:flex items-center gap-8">
<a className="transition text-sm font-light hover:text-black/90 text-black/70" href="#omnie">O mnie</a>
<a className="transition text-sm font-light hover:text-black/90 text-black/70" href="#uslugi">Usługi</a>
<a className="transition text-sm font-light hover:text-black/90 text-black/70" href="#proces">Współpraca</a>
<a className="transition text-sm font-light hover:text-black/90 text-black/70" href="#cennik">Cennik</a>
<button className="inline-flex gap-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-sm font-light border rounded-full py-2 px-4 backdrop-blur items-center hover:bg-black/15 text-black/90 bg-black/10 border-black/10">
            Umów wizytę
          </button>
</nav>
<button className="lg:hidden inline-flex transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-sm font-light border rounded-full py-2 px-4 backdrop-blur gap-2 items-center hover:bg-black/15 text-black/90 bg-black/10 border-black/10" id="mobile-menu-button">
<iconify-icon className="text-base" height="16" icon="solar:hamburger-menu-linear" id="menu-icon" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} width="16"></iconify-icon>
<iconify-icon className="text-base hidden" icon="solar:close-circle-linear" id="close-icon" strokeWidth="1.5"></iconify-icon>
<span className="" id="menu-text">Menu</span>
</button>
</div>
<div className="lg:hidden fixed inset-0 backdrop-blur-xl z-50 opacity-0 invisible transition-all duration-300 ease-out bg-white/95" id="mobile-menu">
<div className="flex flex-col h-full py-8 px-6">
<div className="flex justify-end mb-8">
<button className="inline-flex transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-sm font-light border rounded-full p-3 backdrop-blur hover:bg-black/15 text-black/90 bg-black/10 border-black/10" id="mobile-close-button">
<iconify-icon className="text-xl" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<nav className="flex-1 space-y-6">
<a className="block transition text-2xl font-light tracking-tight hover:text-black text-black/95" href="#omnie">O mnie</a>
<a className="block transition text-2xl font-light tracking-tight hover:text-black text-black/95" href="#uslugi">Usługi</a>
<a className="block transition text-2xl font-light tracking-tight hover:text-black text-black/95" href="#proces">Współpraca</a>
<a className="block transition text-2xl font-light tracking-tight hover:text-black text-black/95" href="#cennik">Cennik</a>
<div className="mt-12 pt-8 border-t border-black/10">
<button className="w-full inline-flex gap-2 transition text-base font-light border rounded-full py-3 px-6 backdrop-blur items-center justify-center hover:bg-black/15 text-black/90 bg-black/10 border-black/10">
                Umów wizytę
              </button>
</div>
</nav>
</div>
</div>

</div>
</header>
<section className="flex min-h-[85vh] z-20 pt-10 relative items-center">
<div className="lg:px-8 w-full max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 animate-[fadeInUp_1s_ease-out_0.2s_forwards] opacity-0 gap-x-12 gap-y-12 items-center">
<div className="order-1 opacity-0 animate-[slideInBlur_1.2s_ease-out_0.4s_forwards]" style={{transform: 'translateY(30px)', filter: 'blur(10px)'}}>
<h1 className="sm:text-7xl lg:text-8xl leading-[1.05] text-5xl font-medium tracking-tight">Kompleksowa diagnoza i terapia mowy.</h1>
</div>
<div className="order-2 lg:order-2">
<div className="flex gap-3 animate-[fadeInSlide_0.8s_ease-out_0.6s_forwards] text-xs opacity-0 mb-6 items-center text-black/70" style={{transform: 'translateX(20px)'}}>
<div className="flex items-center gap-1.5 rounded-full px-3 py-1 backdrop-blur border bg-black/10 border-black/10">
<iconify-icon className="text-sm text-black" icon="solar:star-fall-bold-duotone"></iconify-icon>
<span className="font-normal text-black/90">5.0</span>
<span className="text-black/60">opinie</span>
</div>
<div className="w-px h-4 bg-black/20"></div>
<span className="font-light tracking-tight">Setki zadowolonych pacjentów</span>
</div>
<p className="text-base sm:text-lg leading-relaxed animate-[fadeInUp_0.8s_ease-out_0.8s_forwards] opacity-0 mb-8 font-light text-black/70" style={{transform: 'translateY(20px)', filter: 'blur(5px)'}}>Gabinet logopedyczny oferuje kompleksową diagnozę i terapię zaburzeń mowy dla dzieci, młodzieży i dorosłych. Pracuję indywidualnie z każdym pacjentem, dobierając metody terapii do jego potrzeb.</p>
<div className="border-t pt-6 mb-6 opacity-0 animate-[fadeInScale_0.8s_ease-out_1s_forwards] border-black/10" style={{transform: 'scale(0.95)', filter: 'blur(3px)'}}>
<div className="flex flex-wrap gap-4 items-center">
<button className="animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] transition-[transform] duration-150 ease-out active:scale-[0.98] opacity-0 border rounded-full py-3 px-6 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] cursor-pointer hover:bg-black/15 text-black bg-black/10 border-black/20" style={{transform: 'translateX(-30px)', filter: 'blur(8px)'}}>
<span className="inline-flex items-center gap-2 font-light text-sm">Rozpocznij terapię <iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></span>
</button>
<div className="w-px h-6 bg-black/20"></div>
<button className="inline-flex transition cursor-pointer animate-[fadeInSlide_0.8s_ease-out_1.4s_forwards] hover:bg-black/10 text-sm font-light opacity-0 border-black/10 border rounded-full pt-2.5 pr-5 pb-2.5 pl-5 backdrop-blur gap-x-2 gap-y-2 items-center text-black/95" style={{transform: 'translateX(20px)', filter: 'blur(4px)'}}>
<iconify-icon className="text-base" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
                Zobacz metody
              </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-20 border-t relative overflow-hidden backdrop-blur-sm py-8 border-black/10 bg-black/5">
<div className="lg:px-8 max-w-7xl mx-auto px-6">
<p className="text-xs uppercase tracking-tight text-center mb-6 font-light text-black/40">Zaufali nam oraz współpracujemy z</p>
<div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-30">
<iconify-icon height="64" icon="simple-icons:nasa" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:spacex" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:uber" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:visa" width="64"></iconify-icon>
<iconify-icon height="64" icon="simple-icons:grab" width="64"></iconify-icon>
<iconify-icon className="hidden sm:block" height="64" icon="simple-icons:bose" width="64"></iconify-icon>
<iconify-icon className="hidden md:block" height="64" icon="simple-icons:discover" width="64"></iconify-icon>
<iconify-icon className="hidden md:block" height="64" icon="simple-icons:dji" width="64"></iconify-icon>
<iconify-icon className="hidden lg:block" height="64" icon="simple-icons:nikon" width="64"></iconify-icon>
<iconify-icon className="hidden lg:block" height="64" icon="simple-icons:craftsman" width="64"></iconify-icon>
<iconify-icon className="hidden xl:block" height="64" icon="simple-icons:sony" width="64"></iconify-icon>
</div>
</div>
</section>

<section className="z-20 border-t relative pt-20 pb-20 border-black/10" id="omnie">
<div className="lg:px-8 max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>
<span className="inline-flex items-center gap-2 text-xs uppercase tracking-tight border rounded-full py-1 px-3 mb-4 font-light text-black/60 bg-black/5 border-black/10"><iconify-icon icon="solar:user-circle-bold-duotone"></iconify-icon> O mnie</span>
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight mt-2">Magdalena Marmol</h2>
<p className="leading-relaxed mt-5 font-light text-base text-black/70">Od ponad 11 lat pracuję z dziećmi oraz młodzieżą jako nauczyciel języka polskiego. Codzienny kontakt z najmłodszymi oraz obserwacja ich potrzeb stały się dla mnie inspiracją do poszerzania kompetencji w zakresie logopedii.</p>
<p className="leading-relaxed mt-3 font-light text-base text-black/70">Moją motywacją była chęć niesienia realnej pomocy dzieciom z wadami wymowy, trudnościami komunikacyjnymi oraz w spektrum autyzmu. Tak powstało <strong className="">Centrum Terapii i Rozwoju Mowy</strong>.</p>
<div className="mt-8 space-y-4">
<div className="group flex transition-colors border rounded-xl p-4 backdrop-blur items-center gap-4 animate-on-scroll hover:bg-black/10 bg-black/5 border-black/10" style={{animation: 'fadeSlideIn 1.0s ease-out 0.3s both'}}>
<span className="inline-flex items-center justify-center w-12 h-12 border rounded-lg shrink-0 bg-black/5 border-black/10">
<iconify-icon className="text-xl text-black/95" icon="solar:shield-check-bold-duotone"></iconify-icon>
</span>
<div className="">
<p className="font-normal tracking-tight text-base">Indywidualne podejście</p>
<p className="text-sm font-light mt-0.5 text-black/60">Program terapii dostosowuję do potrzeb, możliwości oraz tempa pracy każdego pacjenta.</p>
</div>
</div>
<div className="group flex transition-colors border rounded-xl p-4 backdrop-blur items-center gap-4 animate-on-scroll hover:bg-black/10 bg-black/5 border-black/10" style={{animation: 'fadeSlideIn 1.0s ease-out 0.4s both'}}>
<span className="inline-flex items-center justify-center w-12 h-12 border rounded-lg shrink-0 bg-black/5 border-black/10">
<iconify-icon className="text-xl text-black/95" icon="solar:laptop-minimalistic-bold-duotone"></iconify-icon>
</span>
<div className="">
<p className="font-normal tracking-tight text-base">Nowoczesne metody</p>
<p className="text-sm font-light mt-0.5 text-black/60">Korzystam z innowacyjnych rozwiązań, takich jak elektrostymulacja czy platforma wibracyjna.</p>
</div>
</div>
<div className="group flex transition-colors border rounded-xl p-4 backdrop-blur items-center gap-4 animate-on-scroll hover:bg-black/10 bg-black/5 border-black/10" style={{animation: 'fadeSlideIn 1.0s ease-out 0.5s both'}}>
<span className="inline-flex items-center justify-center w-12 h-12 border rounded-lg shrink-0 bg-black/5 border-black/10">
<iconify-icon className="text-xl text-black/95" icon="solar:emoji-funny-circle-bold-duotone"></iconify-icon>
</span>
<div>
<p className="font-normal tracking-tight text-base">Bezpieczna atmosfera</p>
<p className="text-sm font-light mt-0.5 text-black/60">Stawiam na spokojną i przyjazną przestrzeń, która sprzyja budowaniu relacji.</p>
</div>
</div>
</div>
</div>
<div className="relative animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.2s both'}}>
<div className="relative overflow-hidden rounded-2xl border aspect-[4/5] border-black/10">
<img alt="Magdalena Marmol w gabinecie" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0cb8f86f-50b5-42ff-b546-5db74a2fd4e8_3840w.jpg"/>
<div className="bg-gradient-to-t to-transparent absolute top-0 right-0 bottom-0 left-0 from-white/60"></div>
</div>
<div className="absolute bottom-6 left-6 right-6 inline-flex items-center gap-3 rounded-xl border backdrop-blur-md px-4 py-3 border-black/10 bg-white/50">
<iconify-icon className="text-2xl text-black/90" icon="solar:diploma-verified-bold-duotone"></iconify-icon>
<div className="flex flex-col">
<span className="text-sm font-normal tracking-tight text-black">Doświadczony pedagog i logopeda</span>
<span className="text-xs font-light text-black/60">11+ lat w zawodzie</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-20 border-t pt-20 pb-20 relative bg-neutral-50 border-black/10" id="uslugi">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-3xl mr-auto ml-auto">
<span className="inline-flex items-center gap-2 text-xs uppercase tracking-tight border rounded-full py-1 px-3 font-light animate-on-scroll text-black/60 bg-black/5 border-black/10" style={{animation: '1s ease-out 0.1s 1 normal both running fadeSlideIn'}}>
<iconify-icon icon="solar:heart-pulse-bold-duotone"></iconify-icon> Oferta
        </span>
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight mt-4 animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.2s both'}}>Najważniejsze usługi</h2>
<p className="leading-relaxed mt-3 font-light text-base animate-on-scroll text-black/70" style={{animation: '1s ease-out 0.3s 1 normal both running fadeSlideIn'}}>Oferuję wszechstronną pomoc logopedyczną dostosowaną do indywidualnych potrzeb, z wykorzystaniem klasycznych oraz nowoczesnych technik wspomagających rozwój mowy.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 animate-on-scroll mt-12 gap-6" style={{animation: 'fadeSlideIn 1.0s ease-out 0.3s both'}}>
<div className="group transition-colors border rounded-2xl p-6 backdrop-blur hover:bg-black/10 bg-black/5 border-black/10">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border mb-4 border-black/10 bg-black/5">
<iconify-icon className="text-2xl text-black/95" icon="solar:stethoscope-bold-duotone"></iconify-icon>
</div>
<h3 className="text-lg font-normal tracking-tight">Diagnostyka logopedyczna</h3>
<p className="text-sm font-light mt-2 leading-relaxed text-black/60">Kompleksowa ocena rozwoju mowy, badanie artykulacji oraz sprawności narządów mowy stanowiąca podstawę terapii.</p>
</div>
<div className="group transition-colors border rounded-2xl p-6 backdrop-blur hover:bg-black/10 bg-black/5 border-black/10">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border mb-4 border-black/10 bg-black/5">
<iconify-icon className="text-2xl text-black/95" icon="solar:chat-round-line-bold-duotone"></iconify-icon>
</div>
<h3 className="text-lg font-normal tracking-tight">Terapia logopedyczna</h3>
<p className="text-sm font-light mt-2 leading-relaxed text-black/60">Indywidualne zajęcia dla dzieci i dorosłych, korygowanie wad wymowy oraz praca nad poprawną komunikacją na co dzień.</p>
</div>
<div className="group transition-colors border rounded-2xl p-6 backdrop-blur hover:bg-black/10 bg-black/5 border-black/10">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border mb-4 border-black/10 bg-black/5">
<iconify-icon className="text-2xl text-black/95" height="24" icon="solar:bolt-bold-duotone" style={{color: 'rgb(0, 0, 0)'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal tracking-tight">Elektrostymulacja</h3>
<p className="text-sm font-light mt-2 leading-relaxed text-black/60">Nowoczesny zabieg wspomagający terapię, stymulujący mięśnie obszaru orofacjalnego dla uzyskania szybszych efektów.</p>
</div>
<div className="group transition-colors border rounded-2xl p-6 backdrop-blur lg:col-start-1 lg:col-end-2 hover:bg-black/10 bg-black/5 border-black/10">
<div className="inline-flex bg-black/5 w-12 h-12 border-black/10 border rounded-xl mb-4 items-center justify-center">
<iconify-icon className="text-2xl text-black/95" icon="solar:star-child-bold-duotone"></iconify-icon>
<iconify-icon className="text-2xl text-black/95" height="24" icon="solar:sleeping-circle-outline" style={{color: 'rgb(0, 0, 0)'}} width="24"></iconify-icon></div>
<h3 className="text-lg font-normal tracking-tight">Wczesna interwencja</h3>
<p className="text-sm font-light mt-2 leading-relaxed text-black/60">Wsparcie rozwoju komunikacji u najmłodszych dzieci, stymulacja rozwoju mowy od wczesnych etapów życia.</p>
</div>
<div className="group transition-colors border rounded-2xl p-6 backdrop-blur lg:col-start-2 lg:col-end-3 hover:bg-black/10 bg-black/5 border-black/10">
<div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border mb-4 border-black/10 bg-black/5">
<iconify-icon className="text-2xl text-black/95" icon="solar:music-notes-bold-duotone"></iconify-icon>
</div>
<h3 className="text-lg font-normal tracking-tight">Logorytmika</h3>
<p className="text-sm font-light mt-2 leading-relaxed text-black/60">Połączenie rytmu, muzyki i ruchu z ćwiczeniami słownymi. Zajęcia prowadzone grupowo (jeżeli utworzy się grupa).</p>
</div>
</div>
</div>
</section>

<section className="z-20 border-t relative pt-20 pb-20 border-black/10" id="proces">
<div className="lg:px-8 max-w-7xl mx-auto px-6">
<div className="mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
<div className="animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.2s both'}}>
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight">Jak wygląda współpraca?</h2>
<p className="mt-3 max-w-2xl font-light text-base text-black/70">Proces terapii logopedycznej składa się z kilku etapów, które krok po kroku zapewniają skuteczną poprawę mowy i komunikacji w oparciu o precyzyjny plan.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="transition-colors h-full border rounded-2xl p-6 backdrop-blur animate-on-scroll hover:bg-black/10 bg-black/5 border-black/10" style={{animation: 'fadeSlideIn 1.0s ease-out 0.3s both'}}>
<div className="flex items-center justify-between mb-4">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border text-sm font-normal border-black/10 bg-black/5">01</div>
<iconify-icon className="text-2xl text-black/40" icon="solar:clipboard-check-bold-duotone"></iconify-icon>
</div>
<h3 className="text-lg font-normal tracking-tight">Konsultacja i diagnoza</h3>
<p className="text-sm font-light mt-1 mb-4 text-black/60">Pierwsze spotkanie ma charakter diagnostyczny, określający problem i przyczynę.</p>
<ul className="space-y-2 mt-auto">
<li className="flex items-start gap-2 text-sm font-light text-black/95"><iconify-icon className="text-base mt-0.5 shrink-0 text-black/60" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Wywiad z pacjentem/rodzicem</li>
<li className="flex items-start gap-2 text-sm font-light text-black/95"><iconify-icon className="text-base mt-0.5 shrink-0 text-black/60" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Ocena rozwoju mowy i artykulacji</li>
<li className="flex items-start gap-2 text-sm font-light text-black/95"><iconify-icon className="text-base mt-0.5 shrink-0 text-black/60" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Badanie słuchu i narządów mowy</li>
</ul>
</div>

<div className="transition-colors h-full border rounded-2xl p-6 backdrop-blur animate-on-scroll hover:bg-black/10 bg-black/5 border-black/10" style={{animation: 'fadeSlideIn 1.0s ease-out 0.4s both'}}>
<div className="flex items-center justify-between mb-4">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border text-sm font-normal border-black/10 bg-black/5">02</div>
<iconify-icon className="text-2xl text-black/40" icon="solar:map-arrow-up-bold-duotone"></iconify-icon>
</div>
<h3 className="text-lg font-normal tracking-tight">Plan terapii</h3>
<p className="text-sm font-light mt-1 mb-4 text-black/60">Po szczegółowej diagnozie tworzony jest całkowicie spersonalizowany plan wsparcia.</p>
<ul className="space-y-2 mt-auto">
<li className="flex items-start gap-2 text-sm font-light text-black/95"><iconify-icon className="text-base mt-0.5 shrink-0 text-black/60" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Cele krótko i długoterminowe</li>
<li className="flex items-start gap-2 text-sm font-light text-black/95"><iconify-icon className="text-base mt-0.5 shrink-0 text-black/60" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Ustalenie częstotliwości (1-2x/tyg)</li>
<li className="flex items-start gap-2 text-sm font-light text-black/95"><iconify-icon className="text-base mt-0.5 shrink-0 text-black/60" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Dobór odpowiednich metod</li>
</ul>
</div>

<div className="transition-colors h-full border rounded-2xl p-6 backdrop-blur animate-on-scroll hover:bg-black/10 bg-black/5 border-black/10" style={{animation: 'fadeSlideIn 1.0s ease-out 0.5s both'}}>
<div className="flex items-center justify-between mb-4">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border text-sm font-normal border-black/10 bg-black/5">03</div>
<iconify-icon className="text-2xl text-black/40" icon="solar:calendar-date-bold-duotone"></iconify-icon>
</div>
<h3 className="text-lg font-normal tracking-tight">Regularne zajęcia</h3>
<p className="text-sm font-light mt-1 mb-4 text-black/60">Główny etap, skupiający się na praktycznych i angażujących ćwiczeniach dostosowanych do wieku.</p>
<ul className="space-y-2 mt-auto">
<li className="flex items-start gap-2 text-sm font-light text-black/95"><iconify-icon className="text-base mt-0.5 shrink-0 text-black/60" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Ćwiczenia artykulacyjne</li>
<li className="flex items-start gap-2 text-sm font-light text-black/95"><iconify-icon className="text-base mt-0.5 shrink-0 text-black/60" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Nauka prawidłowej wymowy</li>
<li className="flex items-start gap-2 text-sm font-light text-black/95"><iconify-icon className="text-base mt-0.5 shrink-0 text-black/60" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Elementy zabawy dla dzieci</li>
</ul>
</div>

<div className="transition-colors h-full border rounded-2xl p-6 backdrop-blur animate-on-scroll lg:col-start-1 lg:col-end-3 md:col-span-2 hover:bg-black/10 bg-black/5 border-black/10" style={{animation: 'fadeSlideIn 1.0s ease-out 0.6s both'}}>
<div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
<div className="flex-1">
<div className="flex items-center gap-4 mb-2">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border text-sm font-normal border-black/10 bg-black/5">04</div>
<h3 className="text-lg font-normal tracking-tight">Ćwiczenia do domu</h3>
</div>
<p className="text-sm font-light mt-2 leading-relaxed text-black/60">Niezbędny element przyspieszający efekty terapii. Logopeda przekazuje jasny zestaw ćwiczeń do wykonywania z dzieckiem w domu pomiędzy spotkaniami w gabinecie. Regularność to klucz do sukcesu.</p>
</div>
<div className="hidden md:block w-px h-16 mx-4 bg-black/10"></div>
<div className="flex-1">
<div className="flex items-center gap-4 mb-2">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border text-sm font-normal border-black/10 bg-black/5">05</div>
<h3 className="text-lg font-normal tracking-tight">Czas trwania</h3>
</div>
<ul className="space-y-1.5 mt-2">
<li className="text-sm font-light text-black/95"><span className="font-normal text-black">Wizyta standardowa:</span> 45 minut</li>
<li className="text-sm font-light text-black/95"><span className="font-normal text-black">Wizyta diagnostyczza:</span> ok. 60 minut</li>
<li className="text-sm font-light text-black/95"><span className="font-normal text-black">Częstotliwość spotkań:</span> 1–2 razy / tydzień</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-20 border-t relative pt-16 pb-16 overflow-hidden border-black/10">
<div className="lg:px-8 max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-10">
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>Rekomendacje pacjentów</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.3s both'}}>
<div className="border rounded-2xl p-6 relative bg-black/5 border-black/10">
<iconify-icon className="text-3xl absolute top-6 right-6 text-black/20" icon="solar:chat-square-quote-bold-duotone"></iconify-icon>
<p className="text-sm font-light leading-relaxed mb-4 text-black/95">„Pani Magdalena ma rewelacyjne podejście do dzieci! Córka na każde zajęcia idzie z ogromnym uśmiechem, a my jako rodzice widzimy ogromne postępy w mowie. Atmosfera w gabinecie bardzo spokojna i bezpieczna.”</p>
<p className="text-xs font-normal tracking-tight text-black/60">— Mama 5-letniej Zuzi</p>
</div>
<div className="border rounded-2xl p-6 relative bg-black/5 border-black/10">
<iconify-icon className="text-3xl absolute top-6 right-6 text-black/20" icon="solar:chat-square-quote-bold-duotone"></iconify-icon>
<p className="text-sm font-light leading-relaxed mb-4 text-black/95">„Po kilku miesiącach terapii syn pokonał trudności artykulacyjne. Bardzo doceniam dokładne wskazówki do ćwiczeń w domu i wsparcie na każdym etapie. Pełen profesjonalizm i wiedza.”</p>
<p className="text-xs font-normal tracking-tight text-black/60">— Rodzice Franka</p>
</div>
</div>
</div>
</section>

<section className="z-20 border-t relative pt-20 pb-24 border-black/10" id="cennik">
<div className="lg:px-8 max-w-7xl mx-auto px-6">
<div className="text-center mb-12 animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.1s both'}}>
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight">Cennik usług</h2>
<p className="mt-3 font-light text-sm text-black/60">Akceptujemy płatności kartą oraz gotówką.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-on-scroll" style={{animation: 'fadeSlideIn 1.0s ease-out 0.3s both'}}>
<div className="border rounded-2xl p-8 flex flex-col items-center text-center transition bg-black/5 border-black/10 hover:bg-black/10">
<h3 className="text-lg font-normal tracking-tight mb-2">Diagnoza logopedyczna</h3>
<p className="text-xs font-light mb-6 text-black/50">Pierwsza wizyta, wywiad i określenie celów</p>
<div className="text-4xl font-medium tracking-tight mb-8">180<span className="text-lg font-light text-black/40"> zł</span></div>
<button className="w-full inline-flex justify-center transition text-sm font-light border rounded-full py-2.5 px-5 mt-auto hover:bg-black/20 text-black bg-black/10 border-black/10">Rezerwuj termin</button>
</div>
<div className="border rounded-2xl p-8 flex flex-col items-center text-center relative shadow-[0_0_40px_rgba(255,255,255,0.03)] transform md:-translate-y-4 bg-black/10 border-black/20">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-normal uppercase tracking-widest py-1 px-3 rounded-full bg-black text-white">Najczęstsza usługa</div>
<h3 className="text-lg font-normal tracking-tight mb-2 mt-2">Terapia logopedyczna</h3>
<p className="text-xs font-light mb-6 text-black/50">Zajęcia indywidualne, 45 minut</p>
<div className="text-4xl font-medium tracking-tight mb-8">150<span className="text-lg font-light text-black/40"> zł</span></div>
<button className="w-full inline-flex justify-center transition text-sm font-normal rounded-full py-2.5 px-5 mt-auto hover:bg-black text-white bg-black/90">Rezerwuj termin</button>
</div>
<div className="border rounded-2xl p-8 flex flex-col items-center text-center transition bg-black/5 border-black/10 hover:bg-black/10">
<h3 className="text-lg font-normal tracking-tight mb-2">Elektrostymulacja</h3>
<p className="text-xs font-light mb-6 text-black/50">Sesja 20 min + ćwiczenia w trakcie zabiegu</p>
<div className="text-4xl font-medium tracking-tight mb-8">80<span className="text-lg font-light text-black/40"> zł</span></div>
<button className="w-full inline-flex justify-center transition text-sm font-light border rounded-full py-2.5 px-5 mt-auto hover:bg-black/20 text-black bg-black/10 border-black/10">Rezerwuj termin</button>
</div>
</div>
</div>
</section>
<footer className="relative z-20 border-t backdrop-blur-xl border-black/10 bg-white/40">
<div className="lg:px-8 max-w-7xl mx-auto py-16 px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
<div className="lg:col-span-2">
<a className="block text-2xl font-normal text-black/90 tracking-tighter mb-4" href="/">Centrum Terapii i Rozwoju Mowy - Magdalena Marmol</a>
<p className="leading-relaxed text-sm font-light text-black/95 max-w-md mb-6">Miejsce stworzone z myślą o kompleksowym wsparciu najmłodszych, łączące empatię z nowoczesnymi metodami diagnozy i leczenia.</p>
<div className="flex items-center gap-4 text-black/40">
<a className="transition hover:text-black" href="#"><iconify-icon className="" icon="simple-icons:facebook" width="20"></iconify-icon></a>
<a className="transition hover:text-black" href="#"><iconify-icon className="" icon="simple-icons:instagram" width="20"></iconify-icon></a>
</div>
</div>
<div className="">
<p className="uppercase text-xs font-normal text-black/95 tracking-tight mb-4">Nawigacja</p>
<ul className="space-y-2.5">
<li className=""><a className="transition hover:text-black/90 text-sm font-light text-black/95" href="#omnie">O mnie</a></li>
<li className=""><a className="transition hover:text-black/90 text-sm font-light text-black/95" href="#uslugi">Usługi terapii</a></li>
<li className=""><a className="transition hover:text-black/90 text-sm font-light text-black/95" href="#proces">Jak pracujemy</a></li>
</ul>
</div>
<div className="">
<p className="uppercase text-xs font-normal tracking-tight mb-4 text-black/95">Kontakt</p>
<ul className="space-y-2.5">
<li className="flex text-sm font-light text-black/95 gap-x-2 gap-y-2 items-start">+48 795 400 774</li>
<li className="flex text-sm font-light text-black/95 gap-x-2 gap-y-2 items-start">logopeda.marmol@gmail.com</li>
<li className="flex text-sm font-light text-black/95 gap-x-2 gap-y-2 items-start">ul. Wyzwolenia 27,
43-190 Mikołów</li>
</ul>
</div>
</div>
<div className="mt-16 border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4 border-black/10">
<p className="text-xs font-light text-black/40">© 2024 CTRM Magdalena Marmol. Wszelkie prawa zastrzeżone.</p>
<div className="flex items-center gap-4">
<a className="text-xs transition font-light text-black/40 hover:text-black/80" href="#">Polityka Prywatności</a>
<span className="w-px h-3 bg-black/10"></span>
<a className="text-xs transition font-light text-black/40 hover:text-black/80" href="#">Regulamin</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
