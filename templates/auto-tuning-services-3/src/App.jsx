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
            
            // Helper function for validation
            function validateField(id, errorId) {
                const el = document.getElementById(id);
                const errorEl = document.getElementById(errorId);
                if (!el.value.trim()) {
                    errorEl.classList.remove('hidden');
                    el.classList.add('border-red-300', 'bg-red-50');
                    el.classList.remove('border-zinc-200');
                    return false;
                } else {
                    errorEl.classList.add('hidden');
                    el.classList.remove('border-red-300', 'bg-red-50');
                    el.classList.add('border-zinc-200');
                    return true;
                }
            }

            // Validate required fields
            const isNameValid = validateField('name', 'nameError');
            const isEmailValid = validateField('email', 'emailError');
            const isCarValid = validateField('cartype', 'cartypeError');

            if (isNameValid && isEmailValid && isCarValid) {
                // Get values
                const name = document.getElementById('name').value;
                const phone = document.getElementById('phone').value;
                const email = document.getElementById('email').value;
                const regnr = document.getElementById('regnr').value;
                const cartype = document.getElementById('cartype').value;
                const message = document.getElementById('message').value;

                // Construct email body
                const subject = "Ny forespørsel fra webside - " + cartype;
                const body = `Navn: ${name}\nE-post: ${email}\nTelefon: ${phone}\n\nBil: ${cartype}\nReg.nr: ${regnr}\n\nMelding:\n${message}`;
                
                // Hide form and show success message
                document.getElementById('formContainer').style.display = 'none';
                document.getElementById('successMessage').classList.remove('hidden');

                // Trigger mailto (delay slightly to allow UI update)
                setTimeout(() => {
                    window.location.href = `mailto:markuskjosar92@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                }, 500);
            }
        });

        // Clear error styling on input
        ['name', 'email', 'cartype'].forEach(id => {
            document.getElementById(id).addEventListener('input', function() {
                this.classList.remove('border-red-300', 'bg-red-50');
                this.classList.add('border-zinc-200');
                document.getElementById(id + 'Error').classList.add('hidden');
            });
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
      

<header className="fixed top-0 w-full z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-zinc-900 flex items-center justify-center text-white font-bold text-sm tracking-tighter shadow-lg shadow-zinc-200">
                    B
                </div>
<span className="text-zinc-900 font-semibold tracking-tight group-hover:text-indigo-600 transition-colors">Bakken Tuning &amp; Bil AS</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#tjenester">Tjenester</a>
<a className="hover:text-zinc-900 transition-colors" href="#om-oss">Om oss</a>
<a className="hover:text-zinc-900 transition-colors" href="#kontakt">Kontakt</a>
</nav>

<button className="md:hidden text-zinc-400 hover:text-zinc-900">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</header>
<main className="flex-grow pt-24">

<section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">

<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
<div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 text-center">
<h1 className="text-5xl md:text-7xl font-semibold text-zinc-900 tracking-tight mb-6">
                    Maksimal ytelse.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Optimal presisjon.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                    Spesialister på motoroptimalisering, feilsøking og vedlikehold. Vi henter ut potensialet i din bil med trygg og effektiv tuning.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 rounded-lg bg-zinc-900 text-white font-medium hover:bg-zinc-800 hover:shadow-lg hover:shadow-zinc-200 transition-all flex items-center justify-center gap-2" href="#kontakt">
                        Bestill time
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3 rounded-lg border border-zinc-200 bg-white text-zinc-700 font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-colors flex items-center justify-center gap-2 group" href="https://www.facebook.com/p/Bakken-Tuning-Bil-As-100063690200315/" target="_blank">
<iconify-icon className="text-indigo-500 group-hover:scale-110 transition-transform" icon="solar:star-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Se våre tilbakemeldinger
                    </a>
</div>
</div>

<div className="mt-24 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6" id="tjenester">

<div className="p-6 rounded-xl border border-zinc-100 bg-white shadow-sm hover:shadow-md hover:border-zinc-200 transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-indigo-600" icon="solar:cpu-bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg text-zinc-900 font-semibold mb-2">Chiptuning</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Øk hestekrefter og dreiemoment uten å ofre pålitelighet. Skreddersydd programvare for din motor.</p>
</div>
<div className="p-6 rounded-xl border border-zinc-100 bg-white shadow-sm hover:shadow-md hover:border-zinc-200 transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-violet-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-violet-600" icon="solar:tuning-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg text-zinc-900 font-semibold mb-2">Diagnose</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Avansert feilsøking med toppmoderne utstyr for å identifisere og løse problemer raskt og nøyaktig.</p>
</div>
<div className="p-6 rounded-xl border border-zinc-100 bg-white shadow-sm hover:shadow-md hover:border-zinc-200 transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-emerald-600" icon="solar:wheel-angle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg text-zinc-900 font-semibold mb-2">Service</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Generelt vedlikehold, oljeskift og reparasjoner utført med presisjon for å holde bilen din i topp stand.</p>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-200" id="kontakt">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

<div>
<h2 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-4">Klar for en oppgradering?</h2>
<p className="text-zinc-500 mb-6 font-light">
                            Vi holder til sentralt i Notodden. Fyll ut skjemaet eller ta kontakt for en uforpliktende prat.
                        </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 mb-10 group" href="https://www.facebook.com/p/Bakken-Tuning-Bil-As-100063690200315/" target="_blank">
<iconify-icon icon="solar:facebook-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>Følg oss på Facebook</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center text-zinc-600 mt-1">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-zinc-900 mb-1">Besøk oss</p>
<p className="text-zinc-600">Veltavegen 26</p>
<p className="text-zinc-500 text-sm">3677 Notodden</p>
<a className="text-xs text-indigo-600 font-medium hover:underline mt-1 inline-block" href="https://maps.google.com/?q=Veltavegen+26+3677+Notodden" target="_blank">Veibeskrivelse</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center text-zinc-600 mt-1">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-zinc-900 mb-1">Ring oss</p>
<a className="text-zinc-600 hover:text-indigo-600 transition-colors" href="tel:93427133">934 27 133</a>
<p className="text-zinc-500 text-xs mt-1">Man-Fre: 08:00 - 16:00</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center text-zinc-600 mt-1">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-zinc-900 mb-1">E-post</p>
<a className="text-zinc-600 hover:text-indigo-600 transition-colors" href="mailto:markuskjosar92@gmail.com">markuskjosar92@gmail.com</a>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-xl shadow-zinc-200/50 relative overflow-hidden">

<div className="hidden h-full flex flex-col items-center justify-center text-center py-12 fade-in" id="successMessage">
<div className="w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-zinc-900 mb-2">Takk for din henvendelse!</h3>
<p className="text-zinc-500 max-w-xs mx-auto mb-8">Vi har mottatt din forespørsel og vil kontakte deg så snart som mulig.</p>
<button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1" onclick="location.reload()">
<iconify-icon icon="solar:refresh-linear" width="16"></iconify-icon>
                                Send ny melding
                            </button>
</div>

<div id="formContainer">
<h3 className="text-xl font-semibold text-zinc-900 mb-6">Send oss en forespørsel</h3>
<form className="space-y-4" id="contactForm" novalidate="">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-700 uppercase tracking-wide" htmlFor="name">Navn *</label>
<input className="custom-input w-full px-4 py-2.5 rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-900 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white placeholder-zinc-400" id="name" placeholder="Ola Nordmann" required="" type="text"/>
<p className="hidden text-xs text-red-500 mt-1" id="nameError">Vennligst fyll ut navn</p>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-700 uppercase tracking-wide" htmlFor="phone">Telefon</label>
<input className="custom-input w-full px-4 py-2.5 rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-900 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white placeholder-zinc-400" id="phone" placeholder="123 45 678" type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-700 uppercase tracking-wide" htmlFor="email">E-post *</label>
<input className="custom-input w-full px-4 py-2.5 rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-900 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white placeholder-zinc-400" id="email" placeholder="ola@eksempel.no" required="" type="email"/>
<p className="hidden text-xs text-red-500 mt-1" id="emailError">Vennligst fyll ut e-post</p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-700 uppercase tracking-wide" htmlFor="regnr">Reg.nr</label>
<input className="custom-input w-full px-4 py-2.5 rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-900 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white placeholder-zinc-400" id="regnr" placeholder="AB12345" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-700 uppercase tracking-wide" htmlFor="cartype">Biltype *</label>
<input className="custom-input w-full px-4 py-2.5 rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-900 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white placeholder-zinc-400" id="cartype" placeholder="Audi A4 2018" required="" type="text"/>
<p className="hidden text-xs text-red-500 mt-1" id="cartypeError">Vennligst fyll ut biltype</p>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-700 uppercase tracking-wide" htmlFor="message">Beskjed</label>
<textarea className="custom-input w-full px-4 py-2.5 rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-900 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white placeholder-zinc-400 resize-none" id="message" placeholder="Hva kan vi hjelpe deg med?" rows="4"></textarea>
</div>
<button className="w-full py-3 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition-all shadow-md shadow-indigo-600/20 hover:shadow-lg hover:shadow-indigo-600/30 flex items-center justify-center gap-2 mt-2" type="submit">
<iconify-icon icon="solar:plain-3-linear" strokeWidth="1.5" width="18"></iconify-icon>
                                    Send melding
                                </button>
<p className="text-center text-xs text-zinc-400 mt-4">Ved å sende inn skjemaet godtar du at vi kontakter deg angående din henvendelse.</p>
</form>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-zinc-200 bg-white py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start gap-1">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-zinc-900 flex items-center justify-center text-white font-bold text-xs">
                        B
                    </div>
<span className="text-zinc-600 font-medium text-sm">Bakken Tuning &amp; Bil AS</span>
</div>
<span className="text-zinc-400 text-xs pl-8">Org.nr: 916 849 532</span>
</div>
<div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm text-zinc-500">
<p>© 2024 Alle rettigheter reservert.</p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-indigo-600 transition-colors" href="https://www.facebook.com/p/Bakken-Tuning-Bil-As-100063690200315/" target="_blank">
<iconify-icon icon="solar:facebook-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-indigo-600 transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
