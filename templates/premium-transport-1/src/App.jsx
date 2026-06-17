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



<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">


    // Initialisation EmailJS
    emailjs.init('z8HjwiU9UYL5flS6U');
    
    document.getElementById('bookingForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = document.getElementById('submitBtn');
        const btnText = submitBtn.querySelector('span');
        const originalText = btnText.textContent;
        
        // Animation d'envoi
        btnText.textContent = 'Envoi en cours...';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
        
        // Envoi via EmailJS
        emailjs.sendForm('service_p0bw76n', 'template_h5pygeh', this)
            .then(function() {
                // Succès
                btnText.textContent = '✓ Réservation envoyée !';
                submitBtn.style.backgroundColor = '#10b981';
                submitBtn.style.color = 'white';
                
                // Reset du formulaire après 2 secondes
                setTimeout(() => {
                    document.getElementById('bookingForm').reset();
                    btnText.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '1';
                    submitBtn.style.backgroundColor = '';
                    submitBtn.style.color = '';
                }, 2000);
            }, function(error) {
                // Erreur
                btnText.textContent = '✗ Erreur, réessayez';
                submitBtn.style.backgroundColor = '#ef4444';
                submitBtn.style.color = 'white';
                console.error('Erreur:', error);
                
                setTimeout(() => {
                    btnText.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '1';
                    submitBtn.style.backgroundColor = '';
                    submitBtn.style.color = '';
                }, 3000);
            });
    });



        lucide.createIcons();
    
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
      

<div className="fixed inset-0 z-0">
<img alt="Night Taxi Background" className="w-full h-full object-cover opacity-50 scale-105" src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/80 z-10"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
<div className="absolute inset-0 grain-overlay pointer-events-none z-20 mix-blend-overlay"></div>
</div>

<div className="relative z-30 flex flex-col w-full">

<section className="min-h-screen flex flex-col md:p-10 lg:p-12 pt-6 pr-6 pb-6 pl-6 relative justify-between">

<header className="flex items-start justify-between">
<div className="flex flex-col gap-1 select-none">
<img alt="Parisian" className="w-auto h-10 object-contain relative" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/efdb0002-5f00-46a2-bb29-6e6e6bb5ec3a_320w.webp"/>
<span className="uppercase text-xs text-zinc-400 tracking-[0.2em]">Transport Privé Côte d'Azur</span>
</div>
<div className="flex items-start">
<div className="bg-zinc-100/90 backdrop-blur text-black rounded-l-lg p-1 flex items-stretch h-14">
<div className="flex items-center gap-3 px-4 border-r border-zinc-300/50">
<div className="relative">
<img alt="Driver" className="w-8 h-8 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-white"></div>
</div>
<div className="hidden sm:flex flex-col">
<span className="text-xs font-semibold tracking-tight uppercase">Chauffeurs</span>
<span className="text-xs font-medium text-zinc-500">Disponibles</span>
</div>
</div>
<div className="hidden md:flex items-center gap-4 px-4 text-[10px] font-medium tracking-wider uppercase">
<div className="flex flex-col border-r border-zinc-300/50 pr-4 h-full justify-center">
<span className="text-zinc-400">Tarifs</span>
<span className="">Fixes</span>
</div>
<div className="flex flex-col h-full justify-center">
<span className="text-zinc-400">Service</span>
<span className="">24H/7J</span>
</div>
</div>
</div>
<a className="bg-zinc-100 h-14 w-14 rounded-r-lg flex items-center justify-center border-l-2 border-dashed border-zinc-300 relative cursor-pointer hover:bg-white transition-colors" href="#booking">
<svg aria-hidden="true" className="lucide lucide-arrow-right w-6 h-6 text-black" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</header>

<div className="flex-1 grid grid-cols-12 gap-4 items-center">
<div className="hidden lg:flex col-span-2 flex-col items-start gap-4 text-zinc-300 opacity-80 pl-2">
<div className="flex flex-col items-center text-center gap-1">
<span className="text-2xl font-light tracking-tight text-white">100%</span>
<span className="text-[10px] uppercase leading-tight tracking-widest border-zinc-500 border-t mt-1 pt-2">Ponctualité Garantie</span>
</div>
<div className="py-6"><svg aria-hidden="true" className="lucide lucide-shield-check w-12 h-12 text-zinc-400 stroke-[1]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg></div>
<div className="w-[1px] h-24 bg-gradient-to-b from-zinc-500 to-transparent ml-6"></div>
</div>
<div className="col-span-12 lg:col-span-8 flex h-full items-center justify-center">
<a className="group relative cursor-pointer mt-12 lg:mt-32" href="#booking">
<div className="absolute inset-0 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-all duration-700"></div>
<div className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:border-white/40 group-hover:scale-105 transition-all duration-500">
<span className="text-[10px] uppercase tracking-widest font-medium">Réserver</span>
</div>
</a>
</div>
<div className="hidden lg:flex col-span-2 flex-col items-end gap-12 text-right pr-2">
<div className="flex flex-col items-end gap-2 group cursor-default">
<div className="flex gap-1 text-white"><svg aria-hidden="true" className="lucide lucide-star w-3 h-3 fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg aria-hidden="true" className="lucide lucide-star w-3 h-3 fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg aria-hidden="true" className="lucide lucide-star w-3 h-3 fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg aria-hidden="true" className="lucide lucide-star w-3 h-3 fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg aria-hidden="true" className="lucide lucide-star w-3 h-3 fill-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg></div>
<span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">Trustpilot</span>
<p className="leading-snug group-hover:text-white transition-colors text-xl font-light text-zinc-100 tracking-tight max-w-[200px]">"SERVICE CLIENT IMPECCABLE"</p>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row justify-between items-end w-full mt-auto gap-10 lg:gap-0 pb-12">
<div className="flex flex-col gap-6 w-full lg:w-auto">
<div className="flex flex-col gap-1">
<span className="text-xs uppercase tracking-[0.3em] text-zinc-400 pl-1">VTC • Navettes • Disney • Gares</span>
<h2 className="lg:text-8xl leading-none text-6xl font-semibold text-white tracking-tighter">AzurBasTransport</h2>
</div>
<div className="w-full lg:w-[450px]">
<div className="grid grid-cols-2 border-t border-zinc-700 py-3">
<span className="text-lg uppercase tracking-wider text-zinc-100">Destinations</span>
<span className="text-lg font-light text-right text-zinc-300">CDG, Orly, Beauvais, Parcs</span>
</div>
<div className="grid grid-cols-2 border-t border-b border-zinc-700 py-3">
<span className="text-lg uppercase tracking-wider text-zinc-100">Sièges Auto</span>
<span className="text-lg font-light text-right text-zinc-300">Disponibles sur demande</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-[10px] uppercase tracking-widest text-zinc-400">Nos Services</span>
<svg aria-hidden="true" className="lucide lucide-arrow-down w-4 h-4 text-zinc-400" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
</section>

<section className="relative w-full bg-black border-t border-white/10 py-24 px-6 md:px-12 lg:px-24">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col mb-16 items-start">
<span className="text-xs font-medium text-blue-400 uppercase tracking-[0.2em] mb-2">Prestations sur mesure</span>
<h3 className="text-4xl md:text-5xl font-medium tracking-tighter text-white">Vos déplacements en toute sérénité</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group border border-zinc-800 bg-zinc-900/20 p-8 rounded-xl hover:border-zinc-600 hover:bg-zinc-900/40 transition-all duration-300 flex flex-col justify-between h-[320px]">
<div className="">
<div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors">
<svg aria-hidden="true" className="lucide lucide-plane w-6 h-6" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
</div>
<h4 className="text-xl font-medium text-white mb-2">Transferts Aéroports</h4>
<p className="text-sm text-zinc-400 leading-relaxed">Liaisons directes vers Orly, Roissy CDG et Beauvais. Accueil pancarte personnalisé et suivi de vol en temps réel.</p>
</div>
<span className="text-[10px] uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">A partir de 45€</span>
</div>

<div className="group border border-zinc-800 bg-zinc-900/20 p-8 rounded-xl hover:border-zinc-600 hover:bg-zinc-900/40 transition-all duration-300 flex flex-col justify-between h-[320px]">
<div className="">
<div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors">
<svg aria-hidden="true" className="lucide lucide-train w-6 h-6" data-lucide="train" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="3"></rect><path d="M4 11h16"></path><path d="M12 3v8"></path><path d="m8 19-2 3"></path><path d="m18 22-2-3"></path><path d="M8 15h.01"></path><path d="M16 15h.01"></path></svg>
</div>
<h4 className="text-xl font-medium text-white mb-2">Gares Parisiennes</h4>
<p className="text-sm text-zinc-400 leading-relaxed">Gare du Nord, Gare de Lyon, Montparnasse... Finies les files d'attente taxi. Votre chauffeur vous attend au bout du quai.</p>
</div>
<span className="text-[10px] uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">Forfait fixe</span>
</div>

<div className="group border border-zinc-800 bg-zinc-900/20 p-8 rounded-xl hover:border-zinc-600 hover:bg-zinc-900/40 transition-all duration-300 flex flex-col justify-between h-[320px]">
<div>
<div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors">
<svg aria-hidden="true" className="lucide lucide-castle w-6 h-6" data-lucide="castle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 5V3"></path><path d="M14 5V3"></path><path d="M15 21v-3a3 3 0 0 0-6 0v3"></path><path d="M18 3v8"></path><path d="M18 5H6"></path><path d="M22 11H2"></path><path d="M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9"></path><path d="M6 3v8"></path></svg>
</div>
<h4 className="text-xl font-medium text-white mb-2">Parcs d'Attractions</h4>
<p className="text-sm text-zinc-400 leading-relaxed">Navettes familiales vers Disneyland Paris et Parc Astérix. Sièges bébés et réhausseurs fournis gratuitement.</p>
</div>
<span className="text-[10px] uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">Vans 7 places</span>
</div>

<div className="group border border-zinc-800 bg-zinc-900/20 p-8 rounded-xl hover:border-zinc-600 hover:bg-zinc-900/40 transition-all duration-300 flex flex-col justify-between h-[320px]">
<div>
<div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors">
<svg aria-hidden="true" className="lucide lucide-hourglass w-6 h-6" data-lucide="hourglass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 22h14"></path><path d="M5 2h14"></path><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path></svg>
</div>
<h4 className="text-xl font-medium text-white mb-2">Mise à Disposition</h4>
<p className="text-sm text-zinc-400 leading-relaxed">Louez un chauffeur à l'heure ou à la journée. Idéal pour le shopping, les rendez-vous d'affaires ou le tourisme.</p>
</div>
<span className="text-[10px] uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">Sur devis</span>
</div>
</div>
</div>
</section>

<section className="relative w-full bg-zinc-950 py-24 px-6 md:px-12 lg:px-24 border-t border-white/5">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
<div className="lg:w-1/3 flex flex-col gap-6">
<span className="text-xs font-medium text-blue-400 uppercase tracking-[0.2em]">Pourquoi nous choisir</span>
<h3 className="text-4xl font-medium tracking-tighter text-white">L'exigence au service de votre confort</h3>
<p className="text-zinc-400 font-light leading-relaxed">
                        Contrairement aux taxis traditionnels, nos tarifs sont fixés à l'avance. Pas de surprise, pas de compteur qui tourne dans les embouteillages. Profitez d'un service premium accessible.
                    </p>
<a className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-white border-b border-white/30 pb-1 w-fit hover:border-white transition-colors mt-4" href="#booking">
                        Réserver un trajet <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
<div className="flex gap-4">
<svg aria-hidden="true" className="lucide lucide-tag w-6 h-6 text-zinc-500 shrink-0 mt-1" data-lucide="tag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
<div className="flex flex-col gap-2">
<h5 className="text-lg font-medium text-white">Prix Fixe Garanti</h5>
<p className="text-sm text-zinc-400 font-light">Le tarif est annoncé à la réservation et ne change pas, même en cas de trafic ou de retard de votre vol/train.</p>
</div>
</div>
<div className="flex gap-4">
<svg aria-hidden="true" className="lucide lucide-clock w-6 h-6 text-zinc-500 shrink-0 mt-1" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<div className="flex flex-col gap-2">
<h5 className="text-lg font-medium text-white">Attente Gratuite</h5>
<p className="text-sm text-zinc-400 font-light">Nous surveillons votre arrivée. L'attente est offerte aux aéroports (60 min) et gares (20 min).</p>
</div>
</div>
<div className="flex gap-4">
<svg aria-hidden="true" className="lucide lucide-armchair w-6 h-6 text-zinc-500 shrink-0 mt-1" data-lucide="armchair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"></path><path d="M5 18v2"></path><path d="M19 18v2"></path></svg>
<div className="flex flex-col gap-2">
<h5 className="text-lg font-medium text-white">Confort Absolu</h5>
<p className="text-sm text-zinc-400 font-light">Véhicules récents, bouteilles d'eau, chargeurs, Wi-Fi et presse à bord pour un trajet relaxant.</p>
</div>
</div>
<div className="flex gap-4">
<svg aria-hidden="true" className="lucide lucide-credit-card w-6 h-6 text-zinc-500 shrink-0 mt-1" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
<div className="flex flex-col gap-2">
<h5 className="text-lg font-medium text-white">Paiement Sécurisé</h5>
<p className="text-sm text-zinc-400 font-light">Réglez votre course en ligne ou directement à bord par carte bancaire (TPE) ou espèces.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full bg-black py-24 px-6 md:px-12 lg:px-24 border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col mb-12 items-center text-center">
<span className="text-xs font-medium text-blue-400 uppercase tracking-[0.2em] mb-2">Avis Clients</span>
<h3 className="text-3xl md:text-4xl font-medium tracking-tighter text-white">Ce qu'ils pensent de nous</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-zinc-900/30 p-6 rounded-lg border border-zinc-800">
<div className="flex gap-1 mb-4 text-yellow-500">
<svg aria-hidden="true" className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg aria-hidden="true" className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg aria-hidden="true" className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg aria-hidden="true" className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg aria-hidden="true" className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm text-zinc-300 italic mb-4">"Chauffeur très ponctuel pour notre départ à Orly à 4h du matin. Van spacieux pour toute la famille et les valises. Je recommande vivement !"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-bold text-white">S</div>
<span className="text-xs font-medium uppercase tracking-wider text-zinc-400">Sophie M.</span>
</div>
</div>

<div className="bg-zinc-900/30 p-6 rounded-lg border border-zinc-800">
<div className="flex gap-1 mb-4 text-yellow-500">
<svg aria-hidden="true" className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg aria-hidden="true" className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg aria-hidden="true" className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg aria-hidden="true" className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg aria-hidden="true" className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm text-zinc-300 italic mb-4">"Service impeccable. Réservation facile, prix fixe respecté malgré les bouchons sur le périph. Voiture très propre (Classe E)."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-bold text-white">P</div>
<span className="text-xs font-medium uppercase tracking-wider text-zinc-400">Pierre L.</span>
</div>
</div>

<div className="bg-zinc-900/30 p-6 rounded-lg border border-zinc-800">
<div className="flex gap-1 mb-4 text-yellow-500">
<svg aria-hidden="true" className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg aria-hidden="true" className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg aria-hidden="true" className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg aria-hidden="true" className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg aria-hidden="true" className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm text-zinc-300 italic mb-4">"Utilisé pour un transfert Disney depuis CDG. Le chauffeur avait les sièges autos prévus pour les enfants. Parfait."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-bold text-white">M</div>
<span className="text-xs font-medium uppercase tracking-wider text-zinc-400">Marc D.</span>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-12 lg:px-24 bg-black/90 w-full border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative backdrop-blur-xl" id="booking">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col mb-16">
<span className="text-xs font-medium text-blue-400 uppercase tracking-[0.2em] mb-2">Réservation</span>
<h3 className="text-4xl md:text-5xl font-medium tracking-tighter text-white">Calculez votre tarif</h3>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-16">

<div className="lg:col-span-7 flex flex-col gap-8">
<form className="flex flex-col gap-8" id="bookingForm">

<div className="flex flex-col gap-6 p-1">
<div className="input-group relative group">
<label className="absolute -top-3 left-0 text-[10px] uppercase tracking-wider text-zinc-500 transition-colors bg-black px-1">Départ</label>
<div className="flex items-center border-b border-zinc-800 pb-2 group-focus-within:border-zinc-500 transition-colors">
<svg className="w-4 h-4 text-zinc-600 mr-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<input className="w-full bg-transparent text-lg text-zinc-200 placeholder-zinc-700 outline-none font-light" name="depart" placeholder="Ex: Aéroport CDG, Terminal 2E..." required="" type="text"/>
</div>
</div>
<div className="flex justify-center -my-3 relative z-10">
<button className="bg-zinc-900 border border-zinc-800 rounded-full p-1.5 hover:border-zinc-600 transition-colors" type="button">
<svg className="w-3 h-3 text-zinc-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 16-4 4-4-4"></path><path d="M17 20V4"></path><path d="m3 8 4-4 4 4"></path><path d="M7 4v16"></path></svg>
</button>
</div>
<div className="input-group relative group">
<label className="absolute -top-3 left-0 text-[10px] uppercase tracking-wider text-zinc-500 transition-colors bg-black px-1">Destination</label>
<div className="flex items-center border-b border-zinc-800 pb-2 group-focus-within:border-zinc-500 transition-colors">
<svg className="w-4 h-4 text-zinc-600 mr-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
<input className="w-full bg-transparent text-lg text-zinc-200 placeholder-zinc-700 outline-none font-light" name="destination" placeholder="Ex: Disneyland Paris, Hôtel New York..." required="" type="text"/>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-8 mt-4">
<div className="input-group relative group">
<label className="text-[10px] uppercase tracking-wider text-zinc-500 mb-2 block">Date</label>
<div className="flex items-center border-b border-zinc-800 pb-2 group-focus-within:border-zinc-500 transition-colors">
<svg className="w-4 h-4 text-zinc-600 mr-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<input className="w-full bg-transparent text-sm text-zinc-200 outline-none font-light uppercase tracking-wide" name="date" required="" type="date"/>
</div>
</div>
<div className="input-group relative group">
<label className="text-[10px] uppercase tracking-wider text-zinc-500 mb-2 block">Heure</label>
<div className="flex items-center border-b border-zinc-800 pb-2 group-focus-within:border-zinc-500 transition-colors">
<svg className="w-4 h-4 text-zinc-600 mr-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<input className="w-full bg-transparent text-sm text-zinc-200 outline-none font-light uppercase tracking-wide" name="heure" required="" type="time"/>
</div>
</div>
</div>

<div className="mt-8">
<label className="text-[10px] uppercase tracking-wider text-zinc-500 mb-4 block">Sélectionnez votre gamme</label>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<label className="cursor-pointer group">
<input className="peer hidden" name="vehicule" type="radio" value="ECO - Berline (3 passagers, 2 valises)"/>
<div className="border border-zinc-800 bg-zinc-900/30 p-4 rounded-lg peer-checked:border-white peer-checked:bg-zinc-900 transition-all hover:bg-zinc-900/50 h-full flex flex-col justify-between">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 group-hover:text-white transition-colors">Eco</span>
<svg className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="text-center py-2">
<svg className="w-10 h-10 mx-auto text-zinc-500 group-hover:text-white transition-colors stroke-1 mb-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"></path><path d="M7 14h.01"></path><path d="M17 14h.01"></path><rect height="8" rx="2" width="18" x="3" y="10"></rect><path d="M5 18v2"></path><path d="M19 18v2"></path></svg>
<span className="block text-xl font-medium tracking-tight">Berline</span>
</div>
<div className="text-[10px] text-zinc-500 mt-2 text-center uppercase tracking-wide">3 Passagers • 2 Valises</div>
</div>
</label>
<label className="cursor-pointer group">
<input checked="" className="peer hidden" name="vehicule" type="radio" value="VAN - Familial (7 passagers, 7 valises)"/>
<div className="border border-zinc-800 bg-zinc-900/30 p-4 rounded-lg peer-checked:border-white peer-checked:bg-zinc-900 transition-all hover:bg-zinc-900/50 h-full flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 w-12 h-12 bg-white/5 rounded-bl-full -mr-2 -mt-2"></div>
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 group-hover:text-white transition-colors">Van</span>
<svg className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="text-center py-2">
<svg className="w-10 h-10 mx-auto text-zinc-300 group-hover:text-white transition-colors stroke-1 mb-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 6v6"></path><path d="M15 6v6"></path><path d="M2 12h19.6"></path><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"></path><circle cx="7" cy="18" r="2"></circle><path d="M9 18h5"></path><circle cx="16" cy="18" r="2"></circle></svg>
<span className="block text-xl font-medium tracking-tight">Familial</span>
</div>
<div className="text-[10px] text-zinc-500 mt-2 text-center uppercase tracking-wide">7 Passagers • 7 Valises</div>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer hidden" name="vehicule" type="radio" value="AFFAIRES - Luxe (3 passagers, VIP)"/>
<div className="border border-zinc-800 bg-zinc-900/30 p-4 rounded-lg peer-checked:border-white peer-checked:bg-zinc-900 transition-all hover:bg-zinc-900/50 h-full flex flex-col justify-between">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 group-hover:text-white transition-colors">Affaires</span>
<svg className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="text-center py-2">
<svg className="w-10 h-10 mx-auto text-zinc-500 group-hover:text-white transition-colors stroke-1 mb-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
<span className="block text-xl font-medium tracking-tight">Luxe</span>
</div>
<div className="text-[10px] text-zinc-500 mt-2 text-center uppercase tracking-wide">3 Passagers • VIP</div>
</div>
</label>
</div>
</div>

<div className="grid grid-cols-2 gap-6 mt-4">
<div className="input-group relative group">
<label className="absolute -top-3 left-0 text-[10px] uppercase tracking-wider text-zinc-500 transition-colors bg-black px-1">Téléphone</label>
<input className="w-full bg-transparent border-b border-zinc-800 pb-2 text-sm text-zinc-200 placeholder-zinc-700 outline-none focus:border-zinc-500 transition-colors" name="telephone" placeholder="+33 6 00 00 00 00" required="" type="tel"/>
</div>
<div className="input-group relative group">
<label className="absolute -top-3 left-0 text-[10px] uppercase tracking-wider text-zinc-500 transition-colors bg-black px-1">Nom complet</label>
<input className="w-full bg-transparent border-b border-zinc-800 pb-2 text-sm text-zinc-200 placeholder-zinc-700 outline-none focus:border-zinc-500 transition-colors" name="nom" placeholder="Votre nom" required="" type="text"/>
</div>
</div>

<div className="input-group relative group">
<label className="absolute -top-3 left-0 text-[10px] uppercase tracking-wider text-zinc-500 transition-colors bg-black px-1">Email</label>
<input className="w-full bg-transparent border-b border-zinc-800 pb-2 text-sm text-zinc-200 placeholder-zinc-700 outline-none focus:border-zinc-500 transition-colors" name="email" placeholder="votre@email.fr" required="" type="email"/>
</div>

<div className="flex flex-col gap-2 mt-2">
<div className="input-group relative group">
<label className="absolute -top-3 left-0 text-[10px] uppercase tracking-wider text-zinc-500 transition-colors bg-black px-1">Options (Sièges bébé, vol n°...)</label>
<input className="w-full bg-transparent border-b border-zinc-800 pb-2 text-sm text-zinc-200 placeholder-zinc-700 outline-none focus:border-zinc-500 transition-colors" name="options" placeholder="Précisez vos besoins..." type="text"/>
</div>
</div>

<button className="mt-8 bg-zinc-100 text-black hover:bg-white transition-all w-full py-4 rounded-lg flex items-center justify-center gap-3 group" id="submitBtn" type="submit">
<span className="font-medium tracking-wide uppercase text-xs">Confirmer la réservation</span>
<svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</form>
</div>
</div>
</div>
</section>





<div className="lg:col-span-5 relative">
<div className="sticky top-24 w-full border border-zinc-800 rounded-xl overflow-hidden bg-[#0c0c0e] relative shadow-2xl flex flex-col group/card">

<div className="relative h-[320px] w-full border-b border-zinc-800 bg-zinc-900/20 overflow-hidden">

<div className="absolute inset-0 z-0">
<svg className="w-full h-full opacity-30 grayscale contrast-125" fill="none" preserveaspectratio="xMidYMid slice" viewbox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="grid-pattern-new" patternunits="userSpaceOnUse" width="40" x="0" y="0">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3f3f46" stroke-opacity="0.3" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid-pattern-new)" height="100%" width="100%"></rect>

<path d="M-50 150 H 650" stroke="#27272a" strokeWidth="8"></path>
<path d="M-50 350 H 650" stroke="#27272a" strokeWidth="6"></path>
<path d="M-50 500 H 650" stroke="#27272a" strokeWidth="4"></path>
<path d="M200 -50 V 650" stroke="#27272a" strokeWidth="8"></path>
<path d="M450 -50 V 650" stroke="#27272a" strokeWidth="6"></path>

<path className="opacity-30" d="M200 650 C 200 500, 450 400, 450 250" stroke="#3b82f6" stroke-dasharray="4 4" strokeLinecap="round" strokeWidth="2"></path>
</svg>
<div className="absolute inset-0 w-full h-full z-10 overflow-hidden after:absolute after:inset-0 after:bg-gradient-to-t after:from-[#0c0c0e] after:via-transparent after:to-transparent after:pointer-events-none">
<iframe className="w-full h-full grayscale invert-[0.9] contrast-[1.1] opacity-90 border-none" frameborder="0" id="map-canvas" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=51 Av. Franklin Roosevelt, 06110 Le Cannet&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title="Google Map"></iframe>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-3">
<div className="relative">
<div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-md animate-pulse"></div>
<div className="relative bg-white text-black p-2.5 rounded-full shadow-[0_0_25px_rgba(59,130,246,0.6)] group-hover/card:scale-110 transition-transform duration-500">
<svg className="lucide lucide-map-pin w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
</div>
<div className="px-3 py-1.5 bg-zinc-900/90 backdrop-blur border border-zinc-700 rounded-md text-[10px] font-bold uppercase tracking-widest text-white shadow-xl opacity-0 translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-500 delay-100">
                    Le Cannet
                </div>
</div>

<div className="absolute top-4 right-4 flex flex-col gap-1.5 z-20">
<div className="w-8 h-8 bg-black/40 backdrop-blur border border-white/10 rounded flex items-center justify-center text-zinc-400 hover:text-white hover:bg-black/60 hover:border-white/20 transition-all cursor-pointer">
<svg className="lucide lucide-plus" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="w-8 h-8 bg-black/40 backdrop-blur border border-white/10 rounded flex items-center justify-center text-zinc-400 hover:text-white hover:bg-black/60 hover:border-white/20 transition-all cursor-pointer">
<svg className="lucide lucide-minus" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
</div>

<div className="absolute bottom-1 right-2 text-[8px] text-zinc-600 font-medium select-none pointer-events-none">
                Map data ©2024
            </div>
</div>

<div className="flex-1 bg-[#0c0c0e] p-8 flex flex-col gap-8 justify-center">

<div className="flex items-start gap-5 group/item">
<div className="mt-1 bg-zinc-900 border border-zinc-800 p-2 rounded-lg group-hover/item:border-blue-500/50 group-hover/item:bg-blue-500/10 transition-colors duration-300">
<svg className="lucide lucide-map-pin w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold mb-1">Siège Social</span>
<p className="text-zinc-200 font-light text-sm leading-relaxed tracking-wide">
                        51 Av. Franklin Roosevelt06110 Le Cannet
                    </p>
</div>
</div>

<div className="flex items-start gap-5 group/item">
<div className="mt-1 bg-zinc-900 border border-zinc-800 p-2 rounded-lg group-hover/item:border-zinc-600 transition-colors duration-300">
<svg className="lucide lucide-phone group-hover/item:text-white transition-colors w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold mb-1">Téléphone</span>
<div className="flex flex-col">
<span className="text-zinc-200 font-light text-sm tracking-wide">+33 80 06 89 81</span>
<span className="text-zinc-400 font-light text-sm tracking-wide">+33 6 10 04 52 60</span>
</div>
</div>
</div>

<div className="flex items-start gap-5 group/item">
<div className="mt-1 bg-zinc-900 border border-zinc-800 p-2 rounded-lg group-hover/item:border-zinc-600 transition-colors duration-300">
<svg className="lucide lucide-mail w-4 h-4 text-zinc-400 group-hover/item:text-white transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold mb-1">Email</span>
<div className="flex flex-col gap-1">
<a className="text-zinc-300 font-light text-sm tracking-wide hover:text-white transition-colors" href="mailto:guidevtcprive@gmail.com">guidevtcprive@gmail.com</a>
<a className="text-zinc-400 font-light text-sm tracking-wide hover:text-white transition-colors" href="mailto:azurbas.transport@gmail.com">azurbas.transport@gmail.com</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<footer className="bg-black border-t border-zinc-900 py-12 px-6 md:px-12 relative z-40">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div className="flex flex-col gap-4">
<span className="text-2xl font-semibold tracking-tighter uppercase">Parisian</span>
<p className="text-xs text-zinc-500 max-w-xs leading-relaxed">
                        Votre partenaire de confiance pour tous vos déplacements en Île-de-France. Aéroports, Gares, Parcs d'attractions et Longues distances.
                    </p>
<span className="text-[10px] text-zinc-600 uppercase tracking-widest mt-2">© 2024 Parisian Transport</span>
</div>
<div className="grid grid-cols-2 gap-12">
<div className="flex flex-col gap-4">
<span className="text-xs font-semibold uppercase tracking-wider text-white">Contact</span>
<div className="flex flex-col gap-2 text-xs text-zinc-400">
<span className="hover:text-white transition-colors cursor-pointer">06 00 00 00 00</span>
<span className="hover:text-white transition-colors cursor-pointer">contact@parisian.com</span>
<span className="text-zinc-600">75008 Paris, France</span>
</div>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-semibold uppercase tracking-wider text-white">Légal</span>
<div className="flex flex-col gap-2 text-xs text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Mentions Légales</a>
<a className="hover:text-white transition-colors" href="#">CGV</a>
<a className="hover:text-white transition-colors" href="#">Confidentialité</a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
