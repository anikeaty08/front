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



tailwind.config = {
theme: {
extend: {
fontFamily: {
serif: ['Cinzel', 'serif'],
sans: ['Outfit', 'sans-serif'],
},
colors: {
gold: {
400: '#D4AF37',
500: '#C5A028',
600: '#B08D22',
900: '#4A3B0F',
}
},
boxShadow: {
'glow': '0 0 20px rgba(212, 175, 55, 0.3)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        let currentStep = 1;
        const totalSteps = 2;

        function changeStep(direction) {
            // Validation for step 1
            if (direction === 1 && currentStep === 1) {
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const phone = document.getElementById('phone').value;
                
                // Simple validation check
                if (!name || !email || !phone) {
                    // Flash inputs red briefly to indicate error (optional visual cue)
                    if(!name) document.getElementById('name').parentElement.classList.add('animate-pulse');
                    if(!email) document.getElementById('email').parentElement.classList.add('animate-pulse');
                    if(!phone) document.getElementById('phone').parentElement.classList.add('animate-pulse');
                    
                    setTimeout(() => {
                        document.querySelectorAll('.animate-pulse').forEach(el => el.classList.remove('animate-pulse'));
                    }, 1000);
                    
                    return; 
                }
            }

            // Hide current step
            document.getElementById(`step-${currentStep}`).classList.remove('active-step');
            document.getElementById(`step-${currentStep}`).classList.add('hidden-step');

            // Update step count
            currentStep += direction;

            // Show new step
            setTimeout(() => {
                document.getElementById(`step-${currentStep}`).classList.remove('hidden-step');
                document.getElementById(`step-${currentStep}`).classList.add('active-step');
            }, 300);

            // Update Progress Bar
            const progress = (currentStep / totalSteps) * 100;
            document.getElementById('progress-bar').style.width = `${progress}%`;

            // Update Buttons
            const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-btn');
            const submitBtn = document.getElementById('submit-btn');

            if (currentStep === 1) {
                prevBtn.classList.add('opacity-0', 'pointer-events-none');
            } else {
                prevBtn.classList.remove('opacity-0', 'pointer-events-none');
            }

            if (currentStep === totalSteps) {
                nextBtn.classList.add('hidden');
                submitBtn.classList.remove('hidden');
            } else {
                nextBtn.classList.remove('hidden');
                submitBtn.classList.add('hidden');
            }
        }

        function submitForm() {
            // Check specific Step 2 validations if needed
            // Hide Form UI
            document.getElementById(`step-${currentStep}`).classList.remove('active-step');
            document.getElementById(`step-${currentStep}`).classList.add('hidden-step');
            document.getElementById('nav-buttons').style.display = 'none';
            document.querySelector('.h-1').style.opacity = '0'; // fade out progress

            // Show Success
            setTimeout(() => {
                document.getElementById('success-message').classList.remove('hidden-step');
                document.getElementById('success-message').classList.add('active-step');
            }, 300);
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
      

<div className="fixed inset-0 z-0">

<img alt="Ourika Valley Landscape" className="filter blur-[3px] opacity-30 w-full h-full object-cover scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b1d7bd5f-e008-40fe-9636-d55b74159514_3840w.jpg"/>
<div className="bg-center absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<main className="z-10 overflow-hidden flex flex-col w-full max-w-3xl border rounded-2xl relative shadow-2xl backdrop-blur-xl bg-zinc-100/40 border-zinc-200/50">

<div className="absolute top-0 right-0 p-6 hidden md:block">
<div className="border backdrop-blur-md rounded-full px-4 py-1 flex items-center gap-2 border-gold-400/30 bg-gold-100/10">
<iconify-icon className="text-gold-600" icon="solar:star-circle-linear"></iconify-icon>
<span className="text-[10px] uppercase tracking-widest font-medium text-gold-700">Programme Élite</span>
</div>
</div>

<div className="w-full h-1 bg-zinc-200">
<div className="transition-all duration-700 ease-out bg-gradient-to-r w-[50%] h-full shadow-[0_0_10px_rgba(212,175,55,0.4)] from-gold-400 to-gold-600" id="progress-bar"></div>
</div>

<div className="md:px-12 text-center pt-12 pr-8 pl-8">
<div className="inline-flex flex-col mb-6 items-center justify-center">
<span className="text-xs uppercase tracking-[0.3em] mb-2 font-medium text-gold-600">Villas de Prestige</span>
<h1 className="text-3xl md:text-4xl font-serif tracking-tight font-normal text-black">Ourika Valley</h1>
<h2 className="text-lg md:text-xl font-light mt-2 tracking-wide font-serif text-zinc-700">Accès privé</h2>
<div className="h-[1px] w-12 mt-5 bg-gold-400/50"></div>
</div>
<p className="text-sm md:text-base font-light max-w-lg mx-auto leading-relaxed text-zinc-600">
        Recevez la brochure complète et les plans en exclusivité.
    </p>
</div>

<form className="p-8 md:px-12 pb-10" id="lead-form" onsubmit="event.preventDefault();">

<div className="active-step step-transition" id="step-1">
<div className="mb-8 flex items-center gap-3 border-b pb-4 border-zinc-200/50">
<span className="flex items-center justify-center w-8 h-8 rounded-full border text-xs font-serif border-gold-400/30 text-gold-600 bg-gold-100/10">01</span>
<h3 className="text-lg font-serif tracking-wide text-zinc-900">Informations Personnelles</h3>
</div>
<div className="space-y-6">
<div className="group relative z-0 w-full mb-6">
<input className="block py-3 px-0 w-full text-base bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-gold-500 peer transition-colors text-black border-zinc-300" id="name" name="name" placeholder=" " required="" type="text"/>
<label className="peer-focus:font-medium absolute text-sm text-zinc-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gold-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="name">Nom Complet</label>
<div className="absolute right-0 bottom-3 text-zinc-400">
<iconify-icon icon="solar:user-circle-linear" width="20"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="relative z-0 w-full group">
<input className="block py-3 px-0 w-full text-base bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-gold-500 peer transition-colors text-black border-zinc-300" id="email" name="email" placeholder=" " required="" type="email"/>
<label className="peer-focus:font-medium absolute text-sm text-zinc-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gold-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="email">Email Professionnel</label>
</div>
<div className="relative z-0 w-full group">
<input className="block py-3 px-0 w-full text-base bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-gold-500 peer transition-colors text-black border-zinc-300" id="phone" name="phone" placeholder=" " required="" type="tel"/>
<label className="peer-focus:font-medium absolute text-sm text-zinc-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gold-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="phone">Téléphone (WhatsApp)</label>
</div>
</div>
<div className="relative z-0 w-full group pt-2">
<input className="block py-3 px-0 w-full text-base bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-gold-500 peer transition-colors text-black border-zinc-300" id="country" name="country" placeholder=" " type="text"/>
<label className="peer-focus:font-medium absolute text-sm text-zinc-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gold-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="country">Pays de Résidence</label>
<div className="absolute right-0 bottom-3 text-zinc-400">
<iconify-icon icon="solar:globe-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="hidden-step step-transition" id="step-2">
<div className="mb-8 flex items-center gap-3 border-b pb-4 border-zinc-200/50">
<span className="flex items-center justify-center w-8 h-8 rounded-full border text-xs font-serif border-gold-400/30 text-gold-600 bg-gold-100/10">02</span>
<h3 className="text-lg font-serif tracking-wide text-zinc-900">Profil Investisseur</h3>
</div>
<div className="space-y-8">

<div>
<label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">Type d'acquisition</label>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<label className="cursor-pointer group">
<input className="custom-radio hidden" name="type" type="radio" value="principale"/>
<div className="border p-4 rounded-lg flex flex-col items-center justify-center transition-all duration-300 h-full text-center group-hover:bg-zinc-800/50 border-zinc-200 bg-zinc-100/50 hover:border-zinc-400">
<iconify-icon className="mb-2 text-zinc-500 group-hover:text-zinc-300 transition-colors" icon="solar:home-smile-linear" width="24"></iconify-icon>
<span className="text-sm group-hover:text-white font-light transition-colors text-zinc-700">Résidence Principale</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="custom-radio hidden" name="type" type="radio" value="secondaire"/>
<div className="border p-4 rounded-lg flex flex-col items-center justify-center transition-all duration-300 h-full text-center group-hover:bg-zinc-800/50 border-zinc-200 bg-zinc-100/50 hover:border-zinc-400">
<iconify-icon className="mb-2 text-zinc-500 group-hover:text-zinc-300 transition-colors" icon="solar:sun-2-linear" width="24"></iconify-icon>
<span className="text-sm group-hover:text-white font-light transition-colors text-zinc-700">Résidence Secondaire</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="custom-radio hidden" name="type" type="radio" value="investissement"/>
<div className="border p-4 rounded-lg flex flex-col items-center justify-center transition-all duration-300 h-full text-center group-hover:bg-zinc-800/50 border-zinc-200 bg-zinc-100/50 hover:border-zinc-400">
<iconify-icon className="mb-2 text-zinc-500 group-hover:text-zinc-300 transition-colors" icon="solar:chart-square-linear" width="24"></iconify-icon>
<span className="text-sm group-hover:text-white font-light transition-colors text-zinc-700">Investissement</span>
</div>
</label>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Budget Estimé</label>
<div className="relative">
<select className="block w-full border py-3 px-4 rounded-lg appearance-none focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 font-light cursor-pointer transition-colors bg-zinc-100/50 border-zinc-200 text-zinc-800 hover:border-zinc-300">
<option disabled="" selected="" value="">Sélectionner une fourchette</option>
<option value="300-500">300k€ – 500k€</option>
<option value="500-1m">500k€ – 1M€</option>
<option value="1m+">Supérieur à 1M€</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Délai d'achat</label>
<div className="relative">
<select className="block w-full border py-3 px-4 rounded-lg appearance-none focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 font-light cursor-pointer transition-colors bg-zinc-100/50 border-zinc-200 text-zinc-800 hover:border-zinc-300">
<option value="0-3">Immédiat (0-3 mois)</option>
<option value="3-6">Court terme (3-6 mois)</option>
<option value="6-12">Moyen terme (6-12 mois)</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div>
<label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">Mode de paiement envisagé</label>
<div className="grid grid-cols-3 gap-3">
<label className="cursor-pointer group">
<input className="custom-radio hidden" name="payment" type="radio" value="cash"/>
<div className="border p-3 rounded-lg flex items-center justify-center transition-all duration-300 text-center group-hover:bg-zinc-800/50 border-zinc-200 bg-zinc-100/50 hover:border-zinc-400">
<span className="text-sm group-hover:text-white font-light text-zinc-700">Cash</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="custom-radio hidden" name="payment" type="radio" value="credit"/>
<div className="border p-3 rounded-lg flex items-center justify-center transition-all duration-300 text-center group-hover:bg-zinc-800/50 border-zinc-200 bg-zinc-100/50 hover:border-zinc-400">
<span className="text-sm group-hover:text-white font-light text-zinc-700">Crédit</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="custom-radio hidden" name="payment" type="radio" value="mixte"/>
<div className="border p-3 rounded-lg flex items-center justify-center transition-all duration-300 text-center group-hover:bg-zinc-800/50 border-zinc-200 bg-zinc-100/50 hover:border-zinc-400">
<span className="text-sm group-hover:text-white font-light text-zinc-700">Mixte</span>
</div>
</label>
</div>
</div>

<div className="pt-4 border-t border-zinc-200/50">
<div className="flex items-start gap-3">
<div className="flex items-center h-5">
<input checked="" className="w-4 h-4 border rounded focus:ring-1 focus:ring-gold-500 focus:ring-offset-0 cursor-pointer border-zinc-400 bg-zinc-200 text-gold-400" id="rgpd" required="" type="checkbox" value=""/>
</div>
<label className="text-xs text-zinc-500 font-light leading-snug cursor-pointer select-none" htmlFor="rgpd">
                                Je consens à ce que les informations saisies soient traitées pour permettre de me recontacter et je souhaite recevoir la brochure privée.
                            </label>
</div>
</div>
</div>
</div>

<div className="hidden-step text-center py-12" id="success-message">
<div className="w-24 h-24 bg-gradient-to-br rounded-full mx-auto flex items-center justify-center mb-8 shadow-glow animate-pulse from-gold-600 to-gold-300">
<iconify-icon className="text-5xl text-zinc-50" icon="solar:check-read-linear"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-serif mb-4 tracking-tight text-black">Demande Confirmée</h2>
<div className="h-[1px] w-16 mx-auto mb-6 bg-gold-400/50"></div>
<p className="font-light text-lg mb-2 text-zinc-700">
                    Merci de votre intérêt pour Ourika Valley.
                </p>
<p className="text-zinc-500 font-light max-w-md mx-auto mb-8 text-sm">
                    Votre demande a été transmise à notre équipe Private Office. Un conseiller vous contactera sous 24h pour organiser votre présentation privée.
                </p>
<button className="text-xs tracking-[0.2em] uppercase border-b border-gold-500 text-gold-500 pb-2 transition-all hover:pr-2 hover:text-black hover:border-black" onclick="location.reload()" type="button">
                    Retour au site
                </button>
</div>

<div className="flex border-t mt-10 pt-8 items-center justify-between border-zinc-200/50" id="nav-buttons">
<button className="text-zinc-500 text-sm tracking-wide font-light transition-colors opacity-0 pointer-events-none flex items-center gap-2 group hover:text-black" id="prev-btn" onclick="changeStep(-1)" type="button">
<iconify-icon className="group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear"></iconify-icon> Retour
                </button>
<button className="flex transition-all transform hover:-translate-y-0.5 hover:to-gold-600 text-sm font-medium text-zinc-50 bg-gradient-to-r from-gold-500 to-gold-400 rounded pt-3 pr-8 pb-3 pl-8 shadow-glow gap-x-2 gap-y-2 items-center" id="next-btn" onclick="changeStep(1)" type="button">
                    Suivant <iconify-icon className="" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="hidden bg-gradient-to-r from-gold-500 text-sm font-semibold py-3 px-8 rounded shadow-glow transition-all transform hover:-translate-y-0.5 flex items-center gap-2 to-gold-400 hover:to-gold-600 text-zinc-50" id="submit-btn" onclick="submitForm()" type="submit">
                    Demander la présentation <iconify-icon className="text-lg" icon="solar:key-minimalistic-linear"></iconify-icon>
</button>
</div>
</form>

<div className="flex flex-col md:flex-row gap-3 md:gap-0 text-[10px] md:text-xs border-t pt-4 pr-8 pb-4 pl-8 items-center justify-between text-zinc-400 bg-zinc-50/50 border-zinc-200">
<div className="flex gap-2 items-center">
<iconify-icon className="text-gold-500/50" icon="solar:shield-check-linear"></iconify-icon>
<span className="tracking-wide">Données strictement confidentielles</span>
</div>
<div className="flex gap-4">
<div className="flex gap-2 items-center">
<iconify-icon icon="solar:verified-check-linear"></iconify-icon>
<span className="">Villas de Luxe</span>
</div>
<div className="flex gap-2 items-center">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="">Investissement Sécurisé</span>
</div>
</div>
</div>
</main>


    </>
  );
}
