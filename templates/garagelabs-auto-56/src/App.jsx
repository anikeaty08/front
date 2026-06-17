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



    const yearEl = document.getElementById('year');
    yearEl.textContent = new Date().getFullYear();

    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');

    function openModal(src, title, desc) {
      modalImg.src = src;
      modalTitle.textContent = title || 'Náhled';
      modalDesc.textContent = desc || '';
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.classList.add('overflow-hidden');
    }

    function closeModal() {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.classList.remove('overflow-hidden');
      modalImg.src = '';
    }

    document.addEventListener('click', (e) => {
      const openBtn = e.target.closest('[data-open="modal"]');
      if (openBtn) {
        openModal(openBtn.dataset.img, openBtn.dataset.title, openBtn.dataset.desc);
        return;
      }
      const closeBtn = e.target.closest('[data-close="modal"]');
      if (closeBtn) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
    });

    function prefillInquiry() {
      const form = document.querySelector('form');
      const service = form.querySelector('select[name="service"]');
      const msg = form.querySelector('textarea[name="message"]');
      service.value = 'diagnostika';
      if (!msg.value.trim()) {
        msg.value = "Dobrý den,\n\nmám nezávazný dotaz k servisu/detalingu. Prosím o orientační doporučení a cenu.\n\nVůz: (značka, model)\nPožadavek: (popis)\nTermín: (preferovaný)\n\nDěkuji.";
      }
      const status = document.getElementById('formStatus');
      status.classList.add('hidden');
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function handleSubmit(event) {
      event.preventDefault();
      const form = event.target;

      const data = Object.fromEntries(new FormData(form).entries());
      const status = document.getElementById('formStatus');

      // Demo behavior: show status + create mailto draft
      status.classList.remove('hidden');

      const subject = encodeURIComponent(`Garagelabs — objednání: ${data.service || 'služba'}`);
      const body = encodeURIComponent(
        `Jméno: ${data.name}\nTelefon: ${data.phone}\nE-mail: ${data.email}\nSlužba: ${data.service}\nTermín: ${data.date || 'neuvedeno'}\n\nZpráva:\n${data.message}\n`
      );

      // Soft-open a mailto draft (can be removed when integrating backend)
      window.location.href = `mailto:info@garagelabs.cz?subject=${subject}&body=${body}`;

      return false;
    }
  
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
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_0%,rgba(249,115,22,0.20),transparent_60%),radial-gradient(50%_45%_at_85%_10%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(60%_60%_at_50%_100%,rgba(255,255,255,0.05),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.85))]"></div>
</div>

<header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
<div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
<a className="group inline-flex items-baseline gap-3" href="#top">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
<span className="font-['Space_Grotesk'] text-base font-semibold tracking-tight">GL</span>
</span>
<span className="font-['Space_Grotesk'] text-lg font-semibold tracking-tight">
          Garagelabs
          <span className="ml-2 align-middle text-xs font-medium tracking-wide text-orange-300/90">AUTO · DETAILING</span>
</span>
</a>
<nav className="hidden items-center gap-6 md:flex">
<a className="text-sm font-medium text-neutral-200/90 hover:text-white" href="#sluzby">Služby</a>
<a className="text-sm font-medium text-neutral-200/90 hover:text-white" href="#proc">Proč my</a>
<a className="text-sm font-medium text-neutral-200/90 hover:text-white" href="#galerie">Galerie</a>
<a className="text-sm font-medium text-neutral-200/90 hover:text-white" href="#reference">Reference</a>
<a className="text-sm font-medium text-neutral-200/90 hover:text-white" href="#kontakt">Kontakt</a>
</nav>
<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-neutral-100 hover:bg-white/10" href="#kontakt">
          Nezávazná poptávka
        </a>
<a className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-neutral-950 hover:bg-orange-400" href="#objednat">
          Objednat servis
        </a>
</div>
</div>
</header>

<main id="top">
<section className="relative">
<div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-16">
<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-200">
<span className="inline-flex h-2 w-2 rounded-full bg-orange-400"></span>
            Kompletní servis vozidel · Diagnostika · Detailing
          </div>
<h1 className="mt-5 font-['Space_Grotesk'] text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Garagelabs
            <span className="block text-neutral-200/90">profesionální autoservis &amp; detailing.</span>
</h1>
<p className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-200/80 sm:text-base">
            Technicky precizní servis, moderní diagnostika a špičkové čištění. Postaráme se o spolehlivost i perfektní vzhled vašeho vozu — od pravidelné údržby až po ochranu laku.
          </p>
<div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-orange-400" href="#objednat">
<iconify-icon icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              Objednat servis
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10" href="#kontakt">
<iconify-icon icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              Nezávazná poptávka
            </a>
</div>
<div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-sm font-semibold text-white">
<iconify-icon icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Důvěryhodně
              </div>
<p className="mt-2 text-xs text-neutral-200/75">Jasná komunikace, férové řešení.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-sm font-semibold text-white">
<iconify-icon icon="solar:settings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Technicky
              </div>
<p className="mt-2 text-xs text-neutral-200/75">Diagnostika, měření, postupy.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 col-span-2 sm:col-span-1">
<div className="flex items-center gap-2 text-sm font-semibold text-white">
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Precizně
              </div>
<p className="mt-2 text-xs text-neutral-200/75">Detailing a ochrana povrchů.</p>
</div>
</div>
</div>

<div className="lg:col-span-6">
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
<div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.75),transparent_55%)]"></div>
<img alt="Moderní automobil v nočním prostředí" className="h-[22rem] w-full object-cover sm:h-[26rem] lg:h-[32rem]" loading="lazy" src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
<div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-neutral-950/40 p-4 backdrop-blur">
<div className="text-xs font-medium text-neutral-200/80">Rychlý termín</div>
<div className="mt-1 text-sm font-semibold text-white">Objednání online</div>
</div>
<div className="rounded-2xl border border-white/10 bg-neutral-950/40 p-4 backdrop-blur">
<div className="text-xs font-medium text-neutral-200/80">Detailing</div>
<div className="mt-1 text-sm font-semibold text-white">Interiér i exteriér</div>
</div>
<div className="rounded-2xl border border-white/10 bg-neutral-950/40 p-4 backdrop-blur">
<div className="text-xs font-medium text-neutral-200/80">Diagnostika</div>
<div className="mt-1 text-sm font-semibold text-white">Přesná identifikace závad</div>
</div>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-4">
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
<div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.8),transparent_65%)]"></div>
<img alt="Práce v autoservisu" className="h-40 w-full object-cover sm:h-44" loading="lazy" src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 p-4">
<div className="flex items-center gap-2 text-sm font-semibold text-white">
<iconify-icon icon="solar:wrench-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Servisní práce
                </div>
<p className="mt-1 text-xs text-neutral-200/80">Opravy · údržba · kontrola</p>
</div>
</div>
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
<div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.8),transparent_65%)]"></div>
<img alt="Detailing a čištění vozidla" className="h-40 w-full object-cover sm:h-44" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 right-0 p-4">
<div className="flex items-center gap-2 text-sm font-semibold text-white">
<iconify-icon icon="solar:dropper-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Detailing
                </div>
<p className="mt-1 text-xs text-neutral-200/80">Čistota · lesk · ochrana</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="sluzby">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div>
<h2 className="font-['Space_Grotesk'] text-2xl font-semibold tracking-tight text-white sm:text-3xl">Služby</h2>
<p className="mt-2 max-w-2xl text-sm text-neutral-200/80 sm:text-base">
              Kompletní péče o vůz — od technického stavu po finální vzhled. Vyberte si službu nebo popište problém a navrhneme postup.
            </p>
</div>
<div className="flex gap-2">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-neutral-950 hover:bg-orange-400" href="#objednat">
<iconify-icon icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              Objednat servis
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10" href="#kontakt">
<iconify-icon icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              Nezávazná poptávka
            </a>
</div>
</div>
<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

<div className="group rounded-3xl border border-white/10 bg-white/5 p-5 hover:bg-white/10">
<div className="flex items-start justify-between gap-3">
<div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-neutral-950/40">
<iconify-icon icon="solar:garage-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="rounded-full border border-white/10 bg-neutral-950/30 px-3 py-1 text-xs font-medium text-neutral-200/80">Servis</span>
</div>
<h3 className="mt-4 text-base font-semibold text-white">Autoservis</h3>
<p className="mt-2 text-sm text-neutral-200/75">Komplexní servisní úkony pro osobní vozy.</p>
</div>
<div className="group rounded-3xl border border-white/10 bg-white/5 p-5 hover:bg-white/10">
<div className="flex items-start justify-between gap-3">
<div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-neutral-950/40">
<iconify-icon icon="solar:cpu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="rounded-full border border-white/10 bg-neutral-950/30 px-3 py-1 text-xs font-medium text-neutral-200/80">Tech</span>
</div>
<h3 className="mt-4 text-base font-semibold text-white">Diagnostika</h3>
<p className="mt-2 text-sm text-neutral-200/75">Čtení chyb, živá data, testy a ověření závad.</p>
</div>
<div className="group rounded-3xl border border-white/10 bg-white/5 p-5 hover:bg-white/10">
<div className="flex items-start justify-between gap-3">
<div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-neutral-950/40">
<iconify-icon icon="solar:wrench-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="rounded-full border border-white/10 bg-neutral-950/30 px-3 py-1 text-xs font-medium text-neutral-200/80">Opravy</span>
</div>
<h3 className="mt-4 text-base font-semibold text-white">Opravy</h3>
<p className="mt-2 text-sm text-neutral-200/75">Mechanické opravy, výměny dílů a odstranění problémů.</p>
</div>
<div className="group rounded-3xl border border-white/10 bg-white/5 p-5 hover:bg-white/10">
<div className="flex items-start justify-between gap-3">
<div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-neutral-950/40">
<iconify-icon icon="solar:clipboard-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="rounded-full border border-white/10 bg-neutral-950/30 px-3 py-1 text-xs font-medium text-neutral-200/80">Údržba</span>
</div>
<h3 className="mt-4 text-base font-semibold text-white">Pravidelný servis</h3>
<p className="mt-2 text-sm text-neutral-200/75">Olej, filtry, brzdy, kontrola a servisní intervaly.</p>
</div>
<div className="group rounded-3xl border border-white/10 bg-white/5 p-5 hover:bg-white/10">
<div className="flex items-start justify-between gap-3">
<div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-neutral-950/40">
<iconify-icon icon="solar:sofa-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="rounded-full border border-white/10 bg-neutral-950/30 px-3 py-1 text-xs font-medium text-neutral-200/80">Interiér</span>
</div>
<h3 className="mt-4 text-base font-semibold text-white">Čištění interiéru</h3>
<p className="mt-2 text-sm text-neutral-200/75">Tepování, plasty, kůže, dezinfekce, vůně.</p>
</div>
<div className="group rounded-3xl border border-white/10 bg-white/5 p-5 hover:bg-white/10">
<div className="flex items-start justify-between gap-3">
<div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-neutral-950/40">
<iconify-icon icon="solar:sparkle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="rounded-full border border-white/10 bg-neutral-950/30 px-3 py-1 text-xs font-medium text-neutral-200/80">Detailing</span>
</div>
<h3 className="mt-4 text-base font-semibold text-white">Detailing</h3>
<p className="mt-2 text-sm text-neutral-200/75">Komplexní ošetření, precizní práce a finální look.</p>
</div>
<div className="group rounded-3xl border border-white/10 bg-white/5 p-5 hover:bg-white/10">
<div className="flex items-start justify-between gap-3">
<div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-neutral-950/40">
<iconify-icon icon="solar:palette-round-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="rounded-full border border-white/10 bg-neutral-950/30 px-3 py-1 text-xs font-medium text-neutral-200/80">Lak</span>
</div>
<h3 className="mt-4 text-base font-semibold text-white">Leštění laku</h3>
<p className="mt-2 text-sm text-neutral-200/75">Jedno- i vícekrokové leštění, odstranění hologramů.</p>
</div>
<div className="group rounded-3xl border border-white/10 bg-white/5 p-5 hover:bg-white/10">
<div className="flex items-start justify-between gap-3">
<div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-neutral-950/40">
<iconify-icon icon="solar:shield-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="rounded-full border border-white/10 bg-neutral-950/30 px-3 py-1 text-xs font-medium text-neutral-200/80">Ochrana</span>
</div>
<h3 className="mt-4 text-base font-semibold text-white">Ochrana laku</h3>
<p className="mt-2 text-sm text-neutral-200/75">Keramika / sealant, dlouhodobá ochrana a snadná údržba.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="proc">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
<div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
<div className="lg:col-span-5">
<h2 className="font-['Space_Grotesk'] text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Proč si vybrat Garagelabs
            </h2>
<p className="mt-3 text-sm text-neutral-200/80 sm:text-base">
              Kombinujeme servisní know-how s detailingovou precizností. Výsledkem je vůz, který je technicky v pořádku a zároveň vypadá skvěle.
            </p>
<div className="mt-6 space-y-3">
<div className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-neutral-950/40">
<iconify-icon icon="solar:medal-star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-white">Zkušenosti</div>
<div className="mt-1 text-sm text-neutral-200/75">Ověřené postupy, důraz na detail a kvalitu provedení.</div>
</div>
</div>
<div className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-neutral-950/40">
<iconify-icon icon="solar:scanner-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-white">Kvalitní vybavení</div>
<div className="mt-1 text-sm text-neutral-200/75">Diagnostika, nářadí a chemie pro profesionální výsledek.</div>
</div>
</div>
<div className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-neutral-950/40">
<iconify-icon icon="solar:user-heart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-white">Individuální přístup</div>
<div className="mt-1 text-sm text-neutral-200/75">Domluvíme rozsah, rozpočet i priority podle vašeho auta.</div>
</div>
</div>
</div>
<div className="mt-7 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-orange-400" href="#objednat">
<iconify-icon icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Objednat servis
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10" href="#kontakt">
<iconify-icon icon="solar:call-chat-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Nezávazná poptávka
              </a>
</div>
</div>
<div className="lg:col-span-7">
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
<div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.85),transparent_60%)]"></div>
<img alt="Sportovní vůz v garáži" className="h-56 w-full object-cover sm:h-72" loading="lazy" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 p-5">
<div className="text-sm font-semibold text-white">Technický standard</div>
<p className="mt-1 text-xs text-neutral-200/80">Důsledná kontrola a jasný plán oprav.</p>
</div>
</div>
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
<div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.85),transparent_60%)]"></div>
<img alt="Čištění a detailing interiéru" className="h-56 w-full object-cover sm:h-72" loading="lazy" src="https://images.unsplash.com/photo-1600703136783-bdb5ea365239?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 p-5">
<div className="text-sm font-semibold text-white">Detailingová preciznost</div>
<p className="mt-1 text-xs text-neutral-200/80">Čistota, lesk a ochrana povrchů.</p>
</div>
</div>
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:col-span-2">
<div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.88),transparent_58%)]"></div>
<img alt="Detaily karoserie a lak" className="h-56 w-full object-cover sm:h-72" loading="lazy" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 p-5">
<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
<div>
<div className="text-sm font-semibold text-white">Od servisu po finální ochranu laku</div>
<p className="mt-1 text-xs text-neutral-200/80">Jedna dílna — jeden standard kvality.</p>
</div>
<div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-neutral-950/40 px-4 py-2 text-xs font-medium text-neutral-200 backdrop-blur">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                      Garagelabs · Servis &amp; detailing
                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="galerie">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div>
<h2 className="font-['Space_Grotesk'] text-2xl font-semibold tracking-tight text-white sm:text-3xl">Galerie realizací</h2>
<p className="mt-2 text-sm text-neutral-200/80 sm:text-base">
              Ukázky čištění, detailingu a práce v servisu. Na kvalitě je vidět každý detail.
            </p>
</div>
<div className="text-sm text-neutral-200/70">
            Tip: kliknutím otevřete náhled
          </div>
</div>
<div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-12">

<button className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left lg:col-span-7" data-desc="Leštění a finální úprava povrchu" data-img="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&amp;fit=crop&amp;w=2400&amp;q=80" data-open="modal" data-title="Detailing exteriéru">
<div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.85),transparent_60%)]"></div>
<img alt="Detailing exteriéru" className="h-64 w-full object-cover sm:h-80" loading="lazy" src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
<div className="flex items-center justify-between gap-4">
<div>
<div className="text-sm font-semibold text-white">Detailing exteriéru</div>
<p className="mt-1 text-xs text-neutral-200/80">Leštění · ochrana · finální lesk</p>
</div>
<div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-neutral-950/40 opacity-90 backdrop-blur group-hover:bg-white/10">
<iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</button>

<div className="grid grid-cols-1 gap-4 lg:col-span-5">
<button className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left" data-desc="Tepování, plasty a kůže" data-img="https://images.unsplash.com/photo-1542365887-1b2a1b8b4fdc?auto=format&amp;fit=crop&amp;w=2400&amp;q=80" data-open="modal" data-title="Čištění interiéru">
<div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.85),transparent_65%)]"></div>
<img alt="Čištění interiéru" className="h-40 w-full object-cover sm:h-48" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-0 left-0 right-0 p-5">
<div className="flex items-center justify-between gap-4">
<div>
<div className="text-sm font-semibold text-white">Čištění interiéru</div>
<p className="mt-1 text-xs text-neutral-200/80">Tepování · kůže · dezinfekce</p>
</div>
<div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-neutral-950/40 backdrop-blur group-hover:bg-white/10">
<iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</button>
<button className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left" data-desc="Opravy, údržba a kontrola" data-img="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&amp;fit=crop&amp;w=2400&amp;q=80" data-open="modal" data-title="Práce v servisu">
<div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.85),transparent_65%)]"></div>
<img alt="Práce v servisu" className="h-40 w-full object-cover sm:h-48" loading="lazy" src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 p-5">
<div className="flex items-center justify-between gap-4">
<div>
<div className="text-sm font-semibold text-white">Práce v servisu</div>
<p className="mt-1 text-xs text-neutral-200/80">Kontrola · opravy · spolehlivost</p>
</div>
<div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-neutral-950/40 backdrop-blur group-hover:bg-white/10">
<iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</button>
</div>

<button className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left lg:col-span-4" data-desc="Odstranění jemných škrábanců a hologramů" data-img="https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?auto=format&amp;fit=crop&amp;w=2400&amp;q=80" data-open="modal" data-title="Leštění laku">
<div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.85),transparent_65%)]"></div>
<img alt="Leštění laku" className="h-44 w-full object-cover sm:h-56" loading="lazy" src="https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 p-5">
<div className="text-sm font-semibold text-white">Leštění laku</div>
<p className="mt-1 text-xs text-neutral-200/80">Jedno- i vícekrokové leštění</p>
</div>
</button>
<button className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left lg:col-span-4" data-desc="Čistá dílna a standard práce" data-img="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&amp;fit=crop&amp;w=2400&amp;q=80" data-open="modal" data-title="Servisní prostředí">
<div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.85),transparent_65%)]"></div>
<img alt="Servisní prostředí" className="h-44 w-full object-cover sm:h-56" loading="lazy" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 p-5">
<div className="text-sm font-semibold text-white">Servisní prostředí</div>
<p className="mt-1 text-xs text-neutral-200/80">Pořádek · proces · kontrola</p>
</div>
</button>
<button className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left lg:col-span-4" data-desc="Dlouhodobá ochrana a snadná údržba" data-img="https://images.unsplash.com/photo-1600703136783-bdb5ea365239?auto=format&amp;fit=crop&amp;w=2400&amp;q=80" data-open="modal" data-title="Ochrana laku">
<div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.85),transparent_65%)]"></div>
<img alt="Ochrana laku" className="h-44 w-full object-cover sm:h-56" loading="lazy" src="https://images.unsplash.com/photo-1600703136783-bdb5ea365239?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 p-5">
<div className="text-sm font-semibold text-white">Ochrana laku</div>
<p className="mt-1 text-xs text-neutral-200/80">Keramika · sealant · hydrophobní efekt</p>
</div>
</button>
</div>
</div>
</section>

<section className="border-t border-white/10" id="reference">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div>
<h2 className="font-['Space_Grotesk'] text-2xl font-semibold tracking-tight text-white sm:text-3xl">Reference zákazníků</h2>
<p className="mt-2 text-sm text-neutral-200/80 sm:text-base">
              Reálné zkušenosti, reálné výsledky. Spokojenost stavíme na kvalitě a transparentní domluvě.
            </p>
</div>
<div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-neutral-200/80">
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
            Hodnocení: 4.9/5 (ukázka)
          </div>
</div>
<div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
<figure className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-2 text-orange-300">
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<blockquote className="mt-4 text-sm leading-relaxed text-neutral-200/85">
              „Rychlá diagnostika a oprava, vše mi vysvětlili a drželi rozpočet. Auto jede perfektně.“
            </blockquote>
<figcaption className="mt-5 flex items-center justify-between gap-3">
<div>
<div className="text-sm font-semibold text-white">Martin K.</div>
<div className="text-xs text-neutral-200/70">Diagnostika + oprava</div>
</div>
<div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-neutral-950/40 px-3 py-2 text-xs text-neutral-200/80">
<iconify-icon icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Ověřeno
              </div>
</figcaption>
</figure>
<figure className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-2 text-orange-300">
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<blockquote className="mt-4 text-sm leading-relaxed text-neutral-200/85">
              „Detailing top. Interiér je jako nový a lak má krásný lesk. Doporučuji.“
            </blockquote>
<figcaption className="mt-5 flex items-center justify-between gap-3">
<div>
<div className="text-sm font-semibold text-white">Petra S.</div>
<div className="text-xs text-neutral-200/70">Detailing + čištění</div>
</div>
<div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-neutral-950/40 px-3 py-2 text-xs text-neutral-200/80">
<iconify-icon icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Ověřeno
              </div>
</figcaption>
</figure>
<figure className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-2 text-orange-300">
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<blockquote className="mt-4 text-sm leading-relaxed text-neutral-200/85">
              „Pravidelný servis bez stresu. Všechno včas, čistá práce a dobrá komunikace.“
            </blockquote>
<figcaption className="mt-5 flex items-center justify-between gap-3">
<div>
<div className="text-sm font-semibold text-white">David R.</div>
<div className="text-xs text-neutral-200/70">Pravidelný servis</div>
</div>
<div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-neutral-950/40 px-3 py-2 text-xs text-neutral-200/80">
<iconify-icon icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Ověřeno
              </div>
</figcaption>
</figure>
</div>
</div>
</section>

<section className="border-t border-white/10" id="kontakt">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
<div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
<div className="lg:col-span-5">
<h2 className="font-['Space_Grotesk'] text-2xl font-semibold tracking-tight text-white sm:text-3xl">Kontakt &amp; objednání</h2>
<p className="mt-3 text-sm text-neutral-200/80 sm:text-base">
              Popište, co potřebujete — servis, diagnostiku nebo detailing. Ozveme se s návrhem termínu a orientačním postupem.
            </p>
<div className="mt-6 space-y-3">
<div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-neutral-950/40">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-xs text-neutral-200/70">Telefon</div>
<a className="text-sm font-semibold text-white hover:text-orange-200" href="tel:+420777123456">+420 777 123 456</a>
</div>
</div>
<div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-neutral-950/40">
<iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-xs text-neutral-200/70">E-mail</div>
<a className="text-sm font-semibold text-white hover:text-orange-200" href="mailto:info@garagelabs.cz">info@garagelabs.cz</a>
</div>
</div>
<div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-neutral-950/40">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-xs text-neutral-200/70">Adresa</div>
<div className="text-sm font-semibold text-white">Praha · (doplňte ulici a číslo)</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2 text-sm font-semibold text-white">
<iconify-icon icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Otevírací doba
                  </div>
<span className="text-xs font-medium text-neutral-200/70">Po–Pá</span>
</div>
<div className="mt-2 text-sm text-neutral-200/80">8:00–17:00 (dle domluvy)</div>
</div>
</div>
</div>
<div className="lg:col-span-7" id="objednat">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7">
<div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
<div>
<h3 className="font-['Space_Grotesk'] text-xl font-semibold tracking-tight text-white sm:text-2xl">Formulář pro objednání</h3>
<p className="mt-2 text-sm text-neutral-200/80">Vyplňte základní údaje — zbytek doladíme telefonicky nebo e-mailem.</p>
</div>
<div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-neutral-950/40 px-4 py-2 text-xs font-medium text-neutral-200/80">
<iconify-icon icon="solar:lock-keyhole-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Bezpečné odeslání
                </div>
</div>
<form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2" onsubmit="return handleSubmit(event)">
<label className="block">
<span className="text-xs font-medium text-neutral-200/70">Jméno a příjmení</span>
<input className="mt-2 w-full rounded-2xl border border-white/10 bg-neutral-950/50 px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none ring-0 focus:border-orange-400/60 focus:bg-neutral-950/60" name="name" placeholder="Např. Jan Novák" required=""/>
</label>
<label className="block">
<span className="text-xs font-medium text-neutral-200/70">Telefon</span>
<input className="mt-2 w-full rounded-2xl border border-white/10 bg-neutral-950/50 px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none focus:border-orange-400/60 focus:bg-neutral-950/60" name="phone" placeholder="+420 ..." required=""/>
</label>
<label className="block sm:col-span-2">
<span className="text-xs font-medium text-neutral-200/70">E-mail</span>
<input className="mt-2 w-full rounded-2xl border border-white/10 bg-neutral-950/50 px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none focus:border-orange-400/60 focus:bg-neutral-950/60" name="email" placeholder="jan@domena.cz" required="" type="email"/>
</label>
<label className="block">
<span className="text-xs font-medium text-neutral-200/70">Služba</span>
<select className="mt-2 w-full appearance-none rounded-2xl border border-white/10 bg-neutral-950/50 px-4 py-3 text-sm text-white outline-none focus:border-orange-400/60 focus:bg-neutral-950/60" name="service">
<option value="autoservis">Autoservis</option>
<option value="diagnostika">Diagnostika</option>
<option value="opravy">Opravy</option>
<option value="pravidelny-servis">Pravidelný servis</option>
<option value="cisteni-interieru">Čištění interiéru</option>
<option value="detailing">Detailing</option>
<option value="lesteni-laku">Leštění laku</option>
<option value="ochrana-laku">Ochrana laku</option>
</select>
</label>
<label className="block">
<span className="text-xs font-medium text-neutral-200/70">Preferovaný termín</span>
<input className="mt-2 w-full rounded-2xl border border-white/10 bg-neutral-950/50 px-4 py-3 text-sm text-white outline-none focus:border-orange-400/60 focus:bg-neutral-950/60" name="date" type="date"/>
</label>
<label className="block sm:col-span-2">
<span className="text-xs font-medium text-neutral-200/70">Zpráva</span>
<textarea className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-neutral-950/50 px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none focus:border-orange-400/60 focus:bg-neutral-950/60" name="message" placeholder="Popište problém / požadavek (značka, model, ročník, motor, příznaky, stav laku...)" required="" rows="5"></textarea>
</label>
<div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="text-xs text-neutral-200/70">
                    Odesláním souhlasíte se zpracováním údajů za účelem kontaktování (ukázkový text).
                  </div>
<div className="flex flex-col gap-2 sm:flex-row">
<button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10" onclick="prefillInquiry()" type="button">
<iconify-icon icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                      Nezávazná poptávka
                    </button>
<button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-orange-400" type="submit">
<iconify-icon icon="solar:paper-plane-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                      Objednat servis
                    </button>
</div>
</div>
<div className="sm:col-span-2">
<div className="hidden rounded-2xl border border-white/10 bg-neutral-950/50 p-4 text-sm text-neutral-200/80" id="formStatus">
<span className="font-semibold text-white">Hotovo.</span> Zpráva byla připravena (ukázka). V reálném webu se napojí odeslání na e-mail / CRM.
                  </div>
</div>
</form>
</div>
<div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-5">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-center gap-3">
<div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-neutral-950/40">
<iconify-icon icon="solar:bolt-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-white">Express kontrola</div>
<div className="text-xs text-neutral-200/70">Pokud potřebujete rychle řešit problém, napište do zprávy „EXPRESS“.</div>
</div>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-neutral-950/40 px-4 py-2 text-sm font-medium text-white hover:bg-white/10" href="#sluzby">
<iconify-icon icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Zpět na služby
                </a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
<div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-start">
<div>
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
<span className="font-['Space_Grotesk'] text-base font-semibold tracking-tight">GL</span>
</span>
<div>
<div className="font-['Space_Grotesk'] text-lg font-semibold tracking-tight text-white">Garagelabs</div>
<div className="text-xs text-neutral-200/70">Autoservis · Diagnostika · Detailing</div>
</div>
</div>
<p className="mt-4 max-w-sm text-sm text-neutral-200/75">
              Moderní dílna pro technický servis i detailingové služby. Preciznost, jasná komunikace a důraz na kvalitu.
            </p>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<div className="text-sm font-semibold text-white">Navigace</div>
<div className="mt-3 space-y-2">
<a className="block text-sm text-neutral-200/80 hover:text-white" href="#sluzby">Služby</a>
<a className="block text-sm text-neutral-200/80 hover:text-white" href="#proc">Proč Garagelabs</a>
<a className="block text-sm text-neutral-200/80 hover:text-white" href="#galerie">Galerie</a>
<a className="block text-sm text-neutral-200/80 hover:text-white" href="#reference">Reference</a>
</div>
</div>
<div>
<div className="text-sm font-semibold text-white">Kontakt</div>
<div className="mt-3 space-y-2 text-sm text-neutral-200/80">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<a className="hover:text-white" href="tel:+420777123456">+420 777 123 456</a>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<a className="hover:text-white" href="mailto:info@garagelabs.cz">info@garagelabs.cz</a>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Praha</span>
</div>
</div>
</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-5">
<div className="text-sm font-semibold text-white">Rychlé CTA</div>
<p className="mt-2 text-sm text-neutral-200/75">Zarezervujte termín nebo pošlete nezávaznou poptávku.</p>
<div className="mt-4 flex flex-col gap-2 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-4 py-3 text-sm font-semibold text-neutral-950 hover:bg-orange-400" href="#objednat">
<iconify-icon icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Objednat servis
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-neutral-950/40 px-4 py-3 text-sm font-medium text-white hover:bg-white/10" href="#kontakt">
<iconify-icon icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Nezávazná poptávka
              </a>
</div>
</div>
</div>
<div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
<div className="text-xs text-neutral-200/60">© <span id="year"></span> Garagelabs. Všechna práva vyhrazena.</div>
<div className="text-xs text-neutral-200/60">Vyrobeno pro mobil i desktop · moderní technický styl</div>
</div>
</div>
</footer>
</main>

<div className="fixed inset-0 z-[60] hidden items-center justify-center p-4" id="modal">
<div className="absolute inset-0 bg-neutral-950/80 backdrop-blur" data-close="modal"></div>
<div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/80">
<div className="flex items-center justify-between gap-4 border-b border-white/10 p-4 sm:p-5">
<div>
<div className="text-sm font-semibold text-white" id="modalTitle">Náhled</div>
<div className="mt-1 text-xs text-neutral-200/70" id="modalDesc"></div>
</div>
<button className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10" data-close="modal">
          Zavřít
        </button>
</div>
<div className="relative">
<div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),transparent_60%)]"></div>
<img alt="Náhled galerie" className="max-h-[70vh] w-full object-cover" id="modalImg" src=""/>
</div>
</div>
</div>


    </>
  );
}
