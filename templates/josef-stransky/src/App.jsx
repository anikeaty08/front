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



        function openLightbox(card) {
            const img = card.querySelector('img');
            if (img) {
                const lightbox = document.getElementById('lightbox');
                const lightboxImg = document.getElementById('lightbox-img');
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }

        function closeLightbox() {
            const lightbox = document.getElementById('lightbox');
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') closeLightbox();
        });

        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        // Sticky call button visibility based on hero section
        const stickyCallBtn = document.getElementById('sticky-call-btn');
        const heroSection = document.getElementById('hero-section');

        function checkStickyButton() {
            if (!heroSection || !stickyCallBtn) return;
            const heroBottom = heroSection.getBoundingClientRect().bottom;
            if (heroBottom < 0) {
                stickyCallBtn.classList.add('visible');
            } else {
                stickyCallBtn.classList.remove('visible');
            }
        }

        window.addEventListener('scroll', checkStickyButton, { passive: true });
        checkStickyButton();
    
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
      

<div className="lightbox-overlay" id="lightbox" onclick="closeLightbox()">
<div className="lightbox-close" onclick="closeLightbox()">
<iconify-icon icon="solar:close-circle-linear" style={{color: 'white'}} width="36"></iconify-icon>
</div>
<img alt="Zvětšený obrázek" id="lightbox-img" src=""/>
</div>

<div className="fixed left-4 right-4 z-50 md:hidden flex justify-center" id="sticky-call-btn" style={{bottom: 'calc(20px + env(safe-area-inset-bottom, 20px))'}}>
<a className="flex items-center justify-center gap-2.5 w-full py-4 bg-slate-900 text-white text-sm font-semibold rounded-2xl shadow-2xl shadow-slate-900/30 active:scale-[0.98] transition-transform border border-slate-800 ring-1 ring-white/10 backdrop-blur-md" href="tel:605847660">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
            Zavolat – 605 847 660
        </a>
</div>

<nav className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
<a className="flex flex-col leading-none" href="#">
<span className="text-xl font-bold text-slate-900 tracking-tighter">Josef Stránský</span>
<span className="text-[10px] tracking-widest text-slate-500 uppercase font-medium">Vodo – Topo – Plyn</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#pro-nas">Proč mě zvolit</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#sluzby">Služby</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#reference">Reference</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#o-nas">O mně</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#kontakt">Kontakt</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-all" href="tel:605847660">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>
                    605 847 660
                </a>
<button className="md:hidden p-2 text-slate-600" id="mobile-menu-btn" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="hidden md:hidden border-t border-slate-100 bg-white" id="mobile-menu">
<div className="px-6 py-4 flex flex-col gap-3">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 py-2" href="#pro-nas" onclick="toggleMobileMenu()">Proč mě zvolit</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 py-2" href="#sluzby" onclick="toggleMobileMenu()">Služby</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 py-2" href="#reference" onclick="toggleMobileMenu()">Reference</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 py-2" href="#o-nas" onclick="toggleMobileMenu()">O mně</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 py-2" href="#kontakt" onclick="toggleMobileMenu()">Kontakt</a>
<a className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-lg mt-2" href="tel:605847660">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>
                    605 847 660
                </a>
</div>
</div>
</nav>
<main className="">

<section className="relative pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden" id="hero-section">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -z-10"></div>
<div className="flex flex-col text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full mb-8">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wide">Přijímám nové zakázky</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
                    Instalatérské služby<br/>
<span className="text-orange-primary">Vodo – Topo – Plyn</span>
</h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10">
                    Více než 30 let zkušeností v oblasti voda, topení a plyn pro okresy Uherské Hradiště a Hodonín. Spolehlivost, individuální přístup a kvalitní práce.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-12">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-900 text-white font-medium text-sm rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-200/50" href="tel:605847660">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                        Zavolat
                    </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white border border-slate-200 text-slate-700 font-medium text-sm rounded-xl hover:bg-slate-50 transition-all" href="#sluzby">
                        Moje služby
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
<div className="flex flex-wrap justify-center gap-3 text-xs font-medium text-slate-500">
<div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full border border-slate-200 shadow-sm">
<iconify-icon className="text-orange-primary" icon="solar:medal-ribbon-linear" width="16"></iconify-icon> 30 let praxe
                    </div>
<div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full border border-slate-200 shadow-sm">
<iconify-icon className="text-orange-primary" icon="solar:shield-check-linear" width="16"></iconify-icon> Spolehlivost
                    </div>
<div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full border border-slate-200 shadow-sm">
<iconify-icon className="text-orange-primary" icon="solar:map-point-linear" width="16"></iconify-icon> Uherské Hradiště &amp; Hodonín
                    </div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-slate-100" id="pro-nas">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-2xl font-bold text-slate-900 tracking-tight">Proč zvolit právě mě?</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50/50 hover:bg-white border border-transparent hover:border-slate-100 transition-all hover:shadow-lg hover:shadow-slate-100/50">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="" icon="solar:user-hand-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Osobní přístup</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Jednáte přímo se mnou, bez prostředníků. Zakládám si na stabilní základně spokojených zákazníků a více než 30 letech praxe.
                        </p>
</div>
<div className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50/50 hover:bg-white border border-transparent hover:border-slate-100 transition-all hover:shadow-lg hover:shadow-slate-100/50">
<div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:document-add-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Dotace a odbornost</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Mám bohaté zkušenosti s dotacemi na kotle a topné systémy. Odborné provedení prací je samozřejmostí.
                        </p>
</div>
<div className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50/50 hover:bg-white border border-transparent hover:border-slate-100 transition-all hover:shadow-lg hover:shadow-slate-100/50">
<div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:map-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Lokální působnost</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Specializuji se na okresy Uherské Hradiště a Hodonín. Rychlá dostupnost v regionu Hradišťska a Hodonínska.
                        </p>
</div>
</div>
</div>
</section>

<section className="bg-[#F9FAFB] pt-24 pb-24" id="sluzby">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 max-w-2xl">
<h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">Moje služby</h2>
<p className="text-slate-500">Poskytuji kompletní řemeslné práce rozdělené do tří hlavních oblastí.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-lg hover:shadow-slate-100 transition-all group">
<div className="flex group-hover:scale-110 transition-transform text-blue-500 bg-blue-50 w-10 h-10 rounded-lg mb-6 items-center justify-center">
<iconify-icon className="" height="24" icon="solar:waterdrop-linear" style={{color: 'rgb(59, 130, 246)'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-4">VODO</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-xs font-medium text-slate-500">
<iconify-icon className="shrink-0 text-orange-400 mt-0.5" height="16" icon="solar:check-circle-linear" style={{color: 'rgb(59, 130, 246)'}} width="16"></iconify-icon> Montáže odpadního a vodovodního potrubí
                            </li>
<li className="flex items-start gap-3 text-xs font-medium text-slate-500">
<iconify-icon className="shrink-0 text-orange-400 mt-0.5" height="16" icon="solar:check-circle-linear" style={{color: 'rgb(59, 130, 246)'}} width="16"></iconify-icon> Rekonstrukce koupelen a bytových jader
                            </li>
<li className="flex items-start gap-3 text-xs font-medium text-slate-500">
<iconify-icon className="shrink-0 text-orange-400 mt-0.5" height="16" icon="solar:check-circle-linear" style={{color: 'rgb(59, 130, 246)'}} width="16"></iconify-icon> Solární ohřev teplé užitkové vody
                            </li>
<li className="flex items-start gap-3 text-xs font-medium text-slate-500">
<iconify-icon className="shrink-0 text-orange-400 mt-0.5" height="16" icon="solar:check-circle-linear" style={{color: 'rgb(59, 130, 246)'}} width="16"></iconify-icon> Montáže domácích vodáren
                            </li>
</ul>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-lg hover:shadow-slate-100 transition-all group">
<div className="flex group-hover:scale-110 transition-transform text-orange-500 bg-orange-50 w-10 h-10 rounded-lg mb-6 items-center justify-center">
<iconify-icon className="" icon="solar:temperature-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-4">TOPO</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-xs font-medium text-slate-500">
<iconify-icon className="shrink-0 text-orange-400 mt-0.5" height="16" icon="solar:check-circle-linear" style={{color: 'rgb(251, 146, 60)'}} width="16"></iconify-icon> Montáž topení rodinných domků
                            </li>
<li className="flex items-start gap-3 text-xs font-medium text-slate-500">
<iconify-icon className="text-orange-400 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> Výměny kotlů (dřevoplyn, pelety)
                            </li>
<li className="flex items-start gap-3 text-xs font-medium text-slate-500">
<iconify-icon className="text-orange-400 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> Tepelná čerpadla &amp; Kotle na dotace
                            </li>
<li className="flex items-start gap-3 text-xs font-medium text-slate-500">
<iconify-icon className="text-orange-400 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon> Podlahové topení &amp; Montáže radiátorů
                            </li>
</ul>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-lg hover:shadow-slate-100 transition-all group">
<div className="flex group-hover:scale-110 transition-transform text-green-500 bg-green-50 w-10 h-10 rounded-lg mb-6 items-center justify-center">
<iconify-icon className="" height="24" icon="solar:fire-linear" style={{color: 'rgb(34, 197, 94)'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-4">PLYN</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-xs font-medium text-slate-500">
<iconify-icon className="shrink-0 text-orange-400 mt-0.5" height="16" icon="solar:check-circle-linear" style={{color: 'rgb(34, 197, 94)'}} width="16"></iconify-icon> Rozvody plynového potrubí
                            </li>
<li className="flex items-start gap-3 text-xs font-medium text-slate-500">
<iconify-icon className="shrink-0 text-orange-400 mt-0.5" height="16" icon="solar:check-circle-linear" style={{color: 'rgb(34, 197, 94)'}} width="16"></iconify-icon> Montáže plynových zařízení
                            </li>
<li className="flex items-start gap-3 text-xs font-medium text-slate-500">
<iconify-icon className="shrink-0 text-orange-400 mt-0.5" height="16" icon="solar:check-circle-linear" style={{color: 'rgb(34, 197, 94)'}} width="16"></iconify-icon> Kondenzační plynové kotle
                            </li>
<li className="flex items-start gap-3 text-xs font-medium text-slate-500">
<iconify-icon className="shrink-0 text-orange-400 mt-0.5" height="16" icon="solar:check-circle-linear" style={{color: 'rgb(34, 197, 94)'}} width="16"></iconify-icon> Řešení včetně možnosti dotací
                            </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-navy-900 relative overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5">Máte projekt? Pojďme to probrat.</h2>
<p className="text-slate-400 text-base mb-16 max-w-xl mx-auto leading-relaxed">Zavolejte mi nebo napište e-mail. Rád se podívám na vaše plány a vymyslím řešení, které bude fungovat.</p>
<div className="cta-container rounded-3xl p-3 md:p-4 max-w-3xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
<a className="group cta-glass rounded-2xl p-10 transition-all text-center flex flex-col items-center" href="tel:605847660">
<div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
<iconify-icon icon="solar:phone-calling-linear" width="26"></iconify-icon>
</div>
<div className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-3">Zavolejte mi</div>
<div className="text-xl font-bold text-white mb-4">605 847 660</div>
<div className="text-xs text-slate-500">Po–Pá 8:00 – 18:00</div>
</a>
<a className="group cta-glass transition-all flex flex-col items-center text-center rounded-2xl pt-10 pr-10 pb-10 pl-10" href="mailto:josefstransky@atlas.cz">
<div className="w-14 h-14 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
<iconify-icon icon="solar:letter-linear" width="26"></iconify-icon>
</div>
<div className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-3">Napište mi</div>
<div className="break-all text-lg font-bold text-white mb-4 md:text-xl">josefstransky@atlas.cz</div>
<div className="text-xs text-slate-500">Odepíšu co nejdříve</div>
</a>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="reference">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-3">Ukázky mojí práce</h2>
<p className="text-slate-500 text-sm">Vybrané realizace z poslední doby. Klikněte na fotografii pro zvětšení.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

<div className="rounded-2xl bg-white border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all cursor-pointer" onclick="openLightbox(this)">
<div className="aspect-[4/3] overflow-hidden bg-slate-100">
<img alt="Rudice - Litinový kotel" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/012119c2-bc5f-4555-a3f1-2182ed28deac_800w.webp"/>
</div>
<div className="p-5">
<h4 className="font-semibold text-slate-900 text-sm mb-1">Rudice</h4>
<p className="text-xs text-slate-500">Náhrada za litinový kotel Viadrus</p>
</div>
</div>

<div className="rounded-2xl bg-white border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all cursor-pointer" onclick="openLightbox(this)">
<div className="aspect-[4/3] overflow-hidden bg-slate-100">
<img alt="Blatnice - Podlahové topení" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2fcc41fd-dd16-4cff-8d14-872876290d79_800w.webp"/>
</div>
<div className="p-5">
<h4 className="font-semibold text-slate-900 text-sm mb-1">Blatnice pod Sv. Antonínkem</h4>
<p className="text-xs text-slate-500">Podlahové topení v půdní vestavbě</p>
</div>
</div>

<div className="rounded-2xl bg-white border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all cursor-pointer" onclick="openLightbox(this)">
<div className="aspect-[4/3] overflow-hidden bg-slate-100">
<img alt="Velká nad Veličkou - Kotelna" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6fb5bfe2-bbe5-425b-96f2-bed1486cfc09_800w.webp"/>
</div>
<div className="p-5">
<h4 className="font-semibold text-slate-900 text-sm mb-1">Velká nad Veličkou</h4>
<p className="text-xs text-slate-500">Kotelna na dotace – ATMOS DC25S</p>
</div>
</div>

<div className="rounded-2xl bg-white border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all cursor-pointer" onclick="openLightbox(this)">
<div className="aspect-[4/3] overflow-hidden bg-slate-100">
<img alt="Bohuslavice - Kotelna" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c2e1f5bd-0a7a-4e2b-9e0c-57530d89372b_800w.webp"/>
</div>
<div className="p-5">
<h4 className="font-semibold text-slate-900 text-sm mb-1">Bohuslavice u Kyjova</h4>
<p className="text-xs text-slate-500">Kotelna na dotace – Aku nádrže 1000 l</p>
</div>
</div>

<div className="rounded-2xl bg-white border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all cursor-pointer" onclick="openLightbox(this)">
<div className="aspect-[4/3] overflow-hidden bg-slate-100">
<img alt="Rohatec - Průmyslová instalace" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3fb77f64-2213-40db-a071-2f0264949a07_800w.webp"/>
</div>
<div className="p-5">
<h4 className="font-semibold text-slate-900 text-sm mb-1">Rohatec – MODULPAN s.r.o.</h4>
<p className="text-xs text-slate-500">Průmyslová instalace – ATMOS DC70S</p>
</div>
</div>

<div className="rounded-2xl bg-white border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all cursor-pointer" onclick="openLightbox(this)">
<div className="aspect-[4/3] overflow-hidden bg-slate-100">
<img alt="Tasov - Tepelné čerpadlo" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec149a22-2560-4d6b-aa89-6bef4169dbf2_800w.webp"/>
</div>
<div className="p-5">
<h4 className="font-semibold text-slate-900 text-sm mb-1">Tasov</h4>
<p className="text-xs text-slate-500">Tepelné čerpadlo Fujitsu</p>
</div>
</div>

<div className="rounded-2xl bg-white border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all cursor-pointer" onclick="openLightbox(this)">
<div className="aspect-[4/3] overflow-hidden bg-slate-100">
<img alt="Staré Město - Úprava vody" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e8a3c1ff-c1b5-429a-904f-ad83cd8babf7_800w.webp"/>
</div>
<div className="p-5">
<h4 className="font-semibold text-slate-900 text-sm mb-1">Staré Město</h4>
<p className="text-xs text-slate-500">Úprava vody pro rodinný dům</p>
</div>
</div>

<div className="rounded-2xl bg-white border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all cursor-pointer" onclick="openLightbox(this)">
<div className="aspect-[4/3] overflow-hidden bg-slate-100">
<img alt="Staré Město - Bazén" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8b7cff5e-31f5-4a7a-81a3-06d5c836e823_800w.webp"/>
</div>
<div className="p-5">
<h4 className="font-semibold text-slate-900 text-sm mb-1">Staré Město</h4>
<p className="text-xs text-slate-500">Bazénová technologie – úprava vody</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F9FAFB] relative overflow-hidden" id="o-nas">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-50/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div className="flex flex-col gap-6">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full w-fit">
<div className="w-1.5 h-1.5 rounded-full bg-slate-900"></div>
<span className="text-[11px] font-semibold text-slate-600 uppercase tracking-wide">O mně</span>
</div>
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                            Spolehlivý partner pro vaše teplo a vodu již přes 30 let.
                        </h2>
<div className="prose prose-slate text-slate-500 leading-relaxed text-sm md:text-base">
<p className="font-medium text-slate-700">
                                Jsem instalatér, který sází na poctivé řemeslo a osobní domluvu.
                            </p>
<p>
                                Za dobu své praxe jsem vybudoval stabilní základnu spokojených zákazníků v regionu Uherské Hradiště a Hodonín. Mým cílem není jen jednorázová oprava, ale dlouhodobá spolehlivost vašich systémů.
                            </p>
<p>
                                Ať už jde o drobnou opravu nebo komplexní realizaci kotelny na dotace, vždy odvádím maximálně kvalitní práci a garantuji férové jednání.
                            </p>
</div>
<div className="mt-4 flex items-center gap-4 pt-6 border-t border-slate-200">
<div className="">
<div className="font-bold text-slate-900 text-sm">Josef Stránský</div>
<div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Majitel &amp; Instalatér</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="bg-white rounded-xl border border-slate-100 p-5 hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 rounded-lg bg-orange-50 text-orange-500">
<iconify-icon icon="solar:medal-star-linear" width="18"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 text-sm">Odbornost</h4>
</div>
<p className="text-xs text-slate-500 leading-relaxed pl-11">Více než 30 let praxe v oboru voda, topení a plyn.</p>
</div>
<div className="bg-white rounded-xl border border-slate-100 p-5 hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 rounded-lg bg-blue-50 text-blue-500">
<iconify-icon icon="solar:shield-check-linear" width="18"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 text-sm">Spolehlivost</h4>
</div>
<p className="text-xs text-slate-500 leading-relaxed pl-11">Dodržování termínů a dohodnutých cen bez výjimek.</p>
</div>
<div className="bg-white rounded-xl border border-slate-100 p-5 hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 rounded-lg bg-emerald-50 text-emerald-500">
<iconify-icon icon="solar:verified-check-linear" width="18"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 text-sm">Kvalita</h4>
</div>
<p className="text-xs text-slate-500 leading-relaxed pl-11">Důraz na detail a funkčnost celého systému.</p>
</div>
<div className="bg-white rounded-xl border border-slate-100 p-5 hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 rounded-lg bg-purple-50 text-purple-500">
<iconify-icon icon="solar:user-heart-linear" width="18"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 text-sm">Přístup</h4>
</div>
<p className="text-xs text-slate-500 leading-relaxed pl-11">Přímé jednání bez prostředníků a zbytečných průtahů.</p>
</div>
<div className="bg-white rounded-xl border border-slate-100 p-5 hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 rounded-lg bg-slate-100 text-slate-600">
<iconify-icon icon="solar:map-point-linear" width="18"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 text-sm">Lokalita</h4>
</div>
<p className="text-xs text-slate-500 leading-relaxed pl-11">Působnost v okresech Uherské Hradiště a Hodonín.</p>
</div>
<div className="bg-white rounded-xl border border-slate-100 p-5 hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 rounded-lg bg-amber-50 text-amber-500">
<iconify-icon icon="solar:hand-money-linear" width="18"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 text-sm">Cena</h4>
</div>
<p className="text-xs text-slate-500 leading-relaxed pl-11">Transparentní cenové nabídky bez skrytých poplatků.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="kontakt">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="">
<h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">Kontaktujte mě</h2>
<p className="text-sm text-slate-500 mb-10">Potřebujete instalatéra? Zavolejte mi, nebo mi napište e-mail.</p>
<div className="space-y-4 mb-10">
<a className="flex items-center gap-4 p-5 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all group" href="tel:605847660">
<div className="w-10 h-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
<iconify-icon className="" icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div className="">
<div className="text-[10px] text-slate-400 font-medium">Zavolat</div>
<div className="text-xl font-bold text-slate-900">605 847 660</div>
</div>
</a>
<a className="flex items-center gap-4 p-5 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all group" href="mailto:josefstransky@atlas.cz">
<div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div className="">
<div className="text-[10px] text-slate-400 font-medium">Napsat e-mail</div>
<div className="text-lg font-bold text-slate-900">josefstransky@atlas.cz</div>
</div>
</a>
</div>
<div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
<h4 className="font-bold text-slate-900 text-xs mb-4">Kontaktní údaje</h4>
<div className="grid grid-cols-2 gap-4 text-xs text-slate-500">
<div>
<span className="block font-medium text-slate-700">Firma:</span> Josef Stránský
                                <span className="block font-medium text-slate-700 mt-2">Obor:</span> Vodo – Topo – Plyn
                            </div>
<div className="">
<span className="block font-medium text-slate-700">Adresa:</span> Kněždub 343<br/>696 64
                            </div>
</div>
</div>
</div>
<div className="h-[500px] lg:h-auto bg-slate-100 rounded-3xl overflow-hidden relative">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.2!2d17.3935!3d48.8925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471339466545167d%3A0x8630263623098552!2zS27Em8W-ZHViIDM0MywgNjk2IDY0IEtuxJvFvmR1Yg!5e0!3m2!1scs!2scz!4v1709214700000!5m2!1scs!2scz" style={{border: '0'}} width="100%"></iframe>
<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg border border-white/50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:map-point-bold" width="16"></iconify-icon>
</div>
<div>
<div className="font-bold text-slate-900 text-xs">Sídlo firmy</div>
<div className="text-[10px] text-slate-500">Kněždub 343, 696 64</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-navy-900 border-t border-slate-800 py-12 pb-32 md:pb-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col">
<span className="font-bold text-white text-lg">Josef Stránský</span>
<span className="text-[10px] tracking-widest text-slate-500 uppercase">Vodo – Topo – Plyn</span>
</div>
<p className="text-xs text-slate-500">
                © 2026 Josef Stránský. Všechna práva vyhrazena.
            </p>
</div>
</footer>


    </>
  );
}
