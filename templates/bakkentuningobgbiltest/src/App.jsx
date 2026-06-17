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



        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            function validateField(id, errorId) {
                const el = document.getElementById(id);
                const errorEl = document.getElementById(errorId);
                if (!el.value.trim()) {
                    errorEl.classList.remove('hidden');
                    el.classList.add('border-red-300');
                    el.classList.remove('border-zinc-200');
                    return false;
                } else {
                    errorEl.classList.add('hidden');
                    el.classList.remove('border-red-300');
                    el.classList.add('border-zinc-200');
                    return true;
                }
            }

            const isNameValid = validateField('name', 'nameError');
            const isEmailValid = validateField('email', 'emailError');

            if (isNameValid && isEmailValid) {
                const name = document.getElementById('name').value;
                const phone = document.getElementById('phone').value;
                const email = document.getElementById('email').value;
                const regnr = document.getElementById('regnr').value;
                const cartype = document.getElementById('cartype').value;
                const message = document.getElementById('message').value;

                const subject = "Ny forespørsel fra webside" + (cartype ? " - " + cartype : "");
                const body = `Navn: ${name}\nE-post: ${email}\nTelefon: ${phone}\n\nBil: ${cartype}\nReg.nr: ${regnr}\n\nMelding:\n${message}`;
                
                document.getElementById('formContainer').style.display = 'none';
                document.getElementById('successMessage').classList.remove('hidden');
                document.getElementById('successMessage').classList.add('flex');

                setTimeout(() => {
                    window.location.href = `mailto:bakken_tuning@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                }, 500);
            }
        });

        ['name', 'email'].forEach(id => {
            document.getElementById(id).addEventListener('input', function() {
                this.classList.remove('border-red-300');
                this.classList.add('border-zinc-200');
                document.getElementById(id + 'Error').classList.add('hidden');
            });
        });

        document.getElementById("mobileMenuBtn").addEventListener("click", function () {
            const menu = document.getElementById("mobileMenu");
            menu.classList.toggle("hidden");
            menu.classList.toggle("flex");
        });
    
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
      

<header className="fixed top-0 w-full z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center text-white font-medium text-sm tracking-tight transition-transform group-hover:scale-105">
                    B
                </div>
<span className="text-zinc-900 font-medium tracking-tight group-hover:text-red-600 transition-colors">Bakken Tuning &amp; Bil AS</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-red-600 transition-colors" href="#tjenester">Tjenester</a>
<a className="hover:text-red-600 transition-colors" href="#anmeldelser">Anmeldelser</a>
<a className="hover:text-red-600 transition-colors" href="#om-oss">Om oss</a>
<a className="hover:text-red-600 transition-colors" href="#kontakt">Kontakt</a>
</nav>
<div className="md:hidden hidden absolute top-16 left-0 w-full bg-white border-b border-zinc-200 flex-col gap-4 text-sm font-medium text-zinc-500 px-6 py-6 shadow-sm" id="mobileMenu">
<a className="hover:text-red-600 transition-colors" href="#tjenester">Tjenester</a>
<a className="hover:text-red-600 transition-colors" href="#anmeldelser">Anmeldelser</a>
<a className="hover:text-red-600 transition-colors" href="#om-oss">Om oss</a>
<a className="hover:text-red-600 transition-colors" href="#kontakt">Kontakt</a>
</div>

<button className="md:hidden text-zinc-400 hover:text-red-600 transition-colors" id="mobileMenuBtn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</header>
<main className="flex-grow pt-16">

<section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28">
<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#f4f4f5_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
<div className="max-w-3xl mx-auto px-6 text-center">
<h1 className="text-4xl md:text-6xl font-medium text-zinc-900 tracking-tight mb-6">
                    Bakken Tuning &amp; Bil AS
                </h1>
<p className="text-lg md:text-xl text-zinc-500 mb-10 font-light leading-relaxed">
                    Tuning, diagnose og service for personbiler.<br className="hidden sm:block"/>
                    Fokus på kvalitet, erfaring og gode løsninger for din bil.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-red-600 text-white font-medium text-sm hover:bg-red-700 transition-colors flex items-center justify-center gap-2" href="#kontakt">
                        Bestill time
                    </a>
<a className="w-full sm:w-auto px-6 py-2.5 rounded-lg border border-zinc-200 bg-white text-zinc-700 font-medium text-sm hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors flex items-center justify-center gap-2" href="#tjenester">
                        Se tjenester
                    </a>
</div>
</div>
</section>

<section className="py-20 bg-zinc-50 border-y border-zinc-100" id="tjenester">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight mb-2">Våre tjenester</h2>
<p className="text-zinc-500 font-light text-sm">Vi tilbyr et bredt spekter av tjenester for personbiler.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 rounded-xl border border-zinc-200 bg-white hover:border-red-200 hover:shadow-sm transition-all">
<div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-6">
<iconify-icon className="text-red-600" icon="solar:cpu-bolt-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-base text-zinc-900 font-medium tracking-tight mb-2">Chiptuning</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">Optimalisering av motorstyring for bedre effekt og kjøreopplevelse.</p>
</div>
<div className="p-6 rounded-xl border border-zinc-200 bg-white hover:border-red-200 hover:shadow-sm transition-all">
<div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-6">
<iconify-icon className="text-red-600" icon="solar:tuning-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-base text-zinc-900 font-medium tracking-tight mb-2">Diagnose</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">Feilsøking med profesjonelt diagnoseutstyr for å finne og løse problemer.</p>
</div>
<div className="p-6 rounded-xl border border-zinc-200 bg-white hover:border-red-200 hover:shadow-sm transition-all">
<div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-6">
<iconify-icon className="text-red-600" icon="solar:wheel-angle-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-base text-zinc-900 font-medium tracking-tight mb-2">Service</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">Oljeskift, generelt vedlikehold og mindre reparasjoner utført med kvalitet.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="anmeldelser">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight mb-2">Hva kundene sier</h2>
<div className="flex items-center gap-3 text-zinc-500 font-light">
<span className="text-3xl font-medium text-zinc-900 tracking-tight">5.0</span>
<div className="flex flex-col items-start">
<div className="flex gap-1 text-amber-400">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<span className="text-xs mt-0.5">Basert på Google anmeldelser</span>
</div>
</div>
</div>
<a className="text-sm font-medium text-red-600 hover:text-red-700 flex items-center gap-1 transition-colors" href="https://www.google.com/search?q=Bakken+Tuning+%26+Bil+AS" target="_blank">
                        Les alle anmeldelser
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 rounded-xl border border-zinc-200 bg-white flex flex-col h-full">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 font-light leading-relaxed flex-grow mb-6">
                            "Kjempegod service og rask levering! Bilen ble en helt annen å kjøre etter en tur innom her. Anbefales på det sterkeste."
                        </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600 font-medium text-xs">G</div>
<span className="text-sm font-medium text-zinc-900">Glenn</span>
</div>
</div>
<div className="p-6 rounded-xl border border-zinc-200 bg-white flex flex-col h-full">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 font-light leading-relaxed flex-grow mb-6">
                            "Ryddig og profesjonell. Fikk optimalisert motoren på bilen, utrolig fornøyd med resultatet og forbruket gikk ned."
                        </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600 font-medium text-xs">K</div>
<span className="text-sm font-medium text-zinc-900">Kenneth</span>
</div>
</div>
<div className="p-6 rounded-xl border border-zinc-200 bg-white flex flex-col h-full">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 font-light leading-relaxed flex-grow mb-6">
                            "Veldig bra service! Fikk time raskt og han har peiling på det han driver med. Bilen går som en kule nå."
                        </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600 font-medium text-xs">M</div>
<span className="text-sm font-medium text-zinc-900">Martin</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-50 border-y border-zinc-100">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight mb-10">Hvorfor velge oss</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="flex flex-col gap-3">
<iconify-icon className="text-red-500" icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-sm font-medium text-zinc-900">Erfaring</h4>
<p className="text-sm text-zinc-500 font-light">Solid erfaring med tuning og feilsøking på et bredt spekter av bilmerker.</p>
</div>
<div className="flex flex-col gap-3">
<iconify-icon className="text-red-500" icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-sm font-medium text-zinc-900">Moderne utstyr</h4>
<p className="text-sm text-zinc-500 font-light">Vi bruker anerkjent og moderne diagnoseutstyr for sikre resultater.</p>
</div>
<div className="flex flex-col gap-3">
<iconify-icon className="text-red-500" icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-sm font-medium text-zinc-900">Kvalitet &amp; trygghet</h4>
<p className="text-sm text-zinc-500 font-light">Fokus på langvarige og trygge løsninger som ivaretar bilens driftssikkerhet.</p>
</div>
<div className="flex flex-col gap-3">
<iconify-icon className="text-red-500" icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-sm font-medium text-zinc-900">Lokal bedrift</h4>
<p className="text-sm text-zinc-500 font-light">Din lokale partner på Notodden, lett tilgjengelig når du trenger oss.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="om-oss">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight mb-6">Om oss</h2>
<div className="space-y-4 text-zinc-600 font-light leading-relaxed text-sm md:text-base">
<p>Bakken Tuning &amp; Bil AS holder til på Notodden.</p>
<p>Vi jobber med tuning, diagnose og service på personbiler. Målet vårt er å levere pålitelige løsninger og god oppfølging til alle kunder uansett oppdrag.</p>
<p>Med riktig utstyr og interesse for faget sørger vi for at bilen din får behandlingen den trenger. Ta gjerne kontakt dersom du har spørsmål om bilen din eller ønsker et pristilbud.</p>
</div>
</div>
</section>

<section className="py-20 bg-zinc-50 border-t border-zinc-200" id="kontakt">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight mb-4">Kontakt oss</h2>
<p className="text-sm text-zinc-500 mb-8 font-light">
                            Vi holder til sentralt i Notodden. Ring oss, send en e-post eller bruk skjemaet for en prat om din bil.
                        </p>
<div className="space-y-6 mb-10">
<div className="flex items-start gap-4">
<div className="mt-0.5 text-red-500">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900 mb-1">Besøk oss</p>
<p className="text-zinc-600 font-light text-sm">Veltavegen 26<br/>3677 Notodden</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-0.5 text-red-500">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900 mb-1">Ring oss</p>
<a className="text-zinc-600 font-light text-sm hover:text-red-600 transition-colors" href="tel:93427133">934 27 133</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-0.5 text-red-500">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900 mb-1">Åpningstider</p>
<p className="text-zinc-600 font-light text-sm">Mandag – Fredag: 08:00 – 16:00<br/>Helg: Stengt</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-0.5 text-red-500">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900 mb-1">E-post</p>
<a className="text-zinc-600 font-light text-sm hover:text-red-600 transition-colors" href="mailto:bakken_tuning@outlook.com">bakken_tuning@outlook.com</a>
</div>
</div>
</div>

<div className="w-full h-48 bg-zinc-200 rounded-xl overflow-hidden border border-zinc-200">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://maps.google.com/maps?q=Veltavegen+26,+3677+Notodden&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{border: '0'}} width="100%">
</iframe>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-200">
<div className="hidden h-full flex-col items-center justify-center text-center py-12" id="successMessage">
<div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-4 border border-red-100">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">Takk for din henvendelse</h3>
<p className="text-zinc-500 font-light text-sm mb-6">Vi har mottatt meldingen og tar kontakt snart.</p>
<button className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors" onclick="location.reload()">
                                Send ny melding
                            </button>
</div>
<div id="formContainer">
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-6">Send forespørsel</h3>
<form className="space-y-4" id="contactForm" novalidate="">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-900" htmlFor="name">Navn *</label>
<input className="custom-input w-full px-3 py-2 rounded-lg border border-zinc-200 bg-white text-zinc-900 text-sm focus:outline-none focus:border-red-400 placeholder-zinc-400 font-light" id="name" required="" type="text"/>
<p className="hidden text-xs text-red-500 mt-1" id="nameError">Må fylles ut</p>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-900" htmlFor="phone">Telefon</label>
<input className="custom-input w-full px-3 py-2 rounded-lg border border-zinc-200 bg-white text-zinc-900 text-sm focus:outline-none focus:border-red-400 placeholder-zinc-400 font-light" id="phone" type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-900" htmlFor="email">E-post *</label>
<input className="custom-input w-full px-3 py-2 rounded-lg border border-zinc-200 bg-white text-zinc-900 text-sm focus:outline-none focus:border-red-400 placeholder-zinc-400 font-light" id="email" required="" type="email"/>
<p className="hidden text-xs text-red-500 mt-1" id="emailError">Må fylles ut</p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-900" htmlFor="regnr">Reg.nr</label>
<input className="custom-input w-full px-3 py-2 rounded-lg border border-zinc-200 bg-white text-zinc-900 text-sm focus:outline-none focus:border-red-400 placeholder-zinc-400 font-light" id="regnr" placeholder="AB12345" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-900" htmlFor="cartype">Bilmerke/modell</label>
<input className="custom-input w-full px-3 py-2 rounded-lg border border-zinc-200 bg-white text-zinc-900 text-sm focus:outline-none focus:border-red-400 placeholder-zinc-400 font-light" id="cartype" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-900" htmlFor="message">Beskjed</label>
<textarea className="custom-input w-full px-3 py-2 rounded-lg border border-zinc-200 bg-white text-zinc-900 text-sm focus:outline-none focus:border-red-400 placeholder-zinc-400 resize-none font-light" id="message" rows="4"></textarea>
</div>
<button className="w-full py-2.5 px-4 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium text-sm transition-colors mt-2" type="submit">
                                    Send
                                </button>
</form>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-zinc-200 bg-white py-10">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start gap-1">
<span className="text-zinc-900 font-medium text-sm tracking-tight">Bakken Tuning &amp; Bil AS</span>
<span className="text-zinc-500 text-xs font-light">Org.nr: 916 849 532</span>
</div>
<div className="flex flex-col md:flex-row items-center gap-6 text-sm text-zinc-500 font-light">
<div className="flex gap-4">
<a aria-label="Facebook" className="text-zinc-400 hover:text-red-600 transition-colors" href="https://www.facebook.com/p/Bakken-Tuning-Bil-As-100063690200315/" target="_blank">
<iconify-icon icon="solar:facebook-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
