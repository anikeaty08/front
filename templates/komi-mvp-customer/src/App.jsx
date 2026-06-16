import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const step1 = document.getElementById('step-1');
            const step2 = document.getElementById('step-2');
            const successStep = document.getElementById('success-step');
            
            const btnNext = document.getElementById('btn-next');
            const btnSubmit = document.getElementById('btn-submit');
            const actionButtons = document.getElementById('action-buttons');
            
            const progressLine = document.getElementById('progress-line');
            const step2Indicator = document.getElementById('step-2-indicator');
            const step2Text = document.getElementById('step-2-text');

            // Passage à l'étape 2
            btnNext.addEventListener('click', () => {
                // Masquer étape 1, afficher étape 2
                step1.classList.add('hidden');
                step2.classList.remove('hidden');
                
                // Mettre à jour les boutons d'action
                btnNext.classList.add('hidden');
                btnSubmit.classList.remove('hidden');
                
                // Mettre à jour la barre de progression (Stepper)
                progressLine.classList.remove('w-1/2');
                progressLine.classList.add('w-full');
                
                // Mettre à jour l'indicateur Etape 2
                step2Indicator.classList.remove('bg-white', 'border-2', 'border-[#36372e]');
                step2Indicator.classList.add('bg-[#36372e]', 'text-[#dcee56]');
            });

            // Simulation de la validation finale
            btnSubmit.addEventListener('click', () => {
                // État de chargement
                btnSubmit.innerHTML = `<iconify-icon icon="solar:spinner-linear" class="animate-spin" width="20"></iconify-icon> Traitement...`;
                btnSubmit.classList.add('opacity-80', 'cursor-not-allowed');
                btnSubmit.disabled = true;

                // Simulation d'une requête réseau de 1.5s
                setTimeout(() => {
                    // Masquer étape 2 et actions
                    step2.classList.add('hidden');
                    actionButtons.classList.add('hidden');
                    
                    // Afficher le message de succès
                    successStep.classList.remove('hidden');
                    
                    // Mettre à jour le Stepper pour confirmer l'étape 2
                    step2Text.innerHTML = `<iconify-icon icon="solar:check-read-linear" width="20"></iconify-icon>`;
                }, 1500);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full py-8 flex justify-center items-center">
<div className="text-xl tracking-tighter font-medium uppercase">KOMI</div>
</header>
<main className="max-w-3xl mx-auto px-4 sm:px-6">

<div className="flex items-center justify-between mb-10 relative px-2 sm:px-8">
<div className="absolute left-8 right-8 top-1/2 h-[2px] bg-zinc-200 -z-10 -translate-y-1/2 rounded-full"></div>

<div className="absolute left-8 w-1/2 top-1/2 h-[2px] bg-[#36372e] -z-10 -translate-y-1/2 rounded-full transition-all duration-500 ease-in-out" id="progress-line"></div>

<div className="flex flex-col items-center bg-[#f9faf7] px-3">
<div className="w-10 h-10 rounded-full bg-[#36372e] text-[#dcee56] flex items-center justify-center font-medium shadow-sm ring-4 ring-[#f9faf7]">
<iconify-icon icon="solar:check-read-linear" width="20"></iconify-icon>
</div>
<span className="text-xs mt-2.5 font-medium text-[#36372e]">Expérience</span>
</div>

<div className="flex flex-col items-center bg-[#f9faf7] px-3">
<div className="w-10 h-10 rounded-full bg-white text-[#36372e] flex items-center justify-center font-medium border-2 border-[#36372e] shadow-sm ring-4 ring-[#f9faf7] transition-all duration-500" id="step-2-indicator">
<span id="step-2-text">2</span>
</div>
<span className="text-xs mt-2.5 font-medium text-[#36372e]">Personnalisation</span>
</div>
</div>
<div className="space-y-8 relative">

<div className="transition-opacity duration-300" id="step-1">
<section className="bg-white rounded-[2rem] p-6 sm:p-10 shadow-sm border border-zinc-100 relative overflow-hidden">
<div className="mb-10">
<h1 className="text-3xl tracking-tight font-medium mb-3">Choisissez votre expérience</h1>
<p className="text-sm text-zinc-500">Sélectionnez le type d'événement, le style de cuisine et le chef qui vous correspond.</p>
</div>

<div className="mb-10">
<h2 className="text-base font-medium mb-4 flex items-center gap-2">
<span className="w-6 h-6 rounded bg-[#f4f5f0] flex items-center justify-center text-xs text-[#36372e]">1</span>
                            Type d'événement
                        </h2>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

<label className="flex flex-col items-center justify-center p-6 rounded-2xl border border-zinc-200 bg-white transition-all cursor-pointer relative group text-zinc-400 hover:text-[#36372e] hover:border-[#36372e] has-[:checked]:border-2 has-[:checked]:border-[#dcee56] has-[:checked]:bg-[#fdfef0] has-[:checked]:text-[#36372e]">
<input checked="" className="peer sr-only" name="event_type" type="radio"/>
<div className="absolute top-3 right-3 text-[#36372e] opacity-0 peer-checked:opacity-100 transition-opacity">
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon>
</div>
<iconify-icon className="mb-3 transition-transform group-hover:scale-110 peer-checked:group-hover:scale-100" icon="solar:glass-wine-linear" width="32"></iconify-icon>
<span className="font-medium text-sm text-zinc-600 group-hover:text-[#36372e] peer-checked:text-[#36372e]">Dîner privé</span>
</label>

<label className="flex flex-col items-center justify-center p-6 rounded-2xl border border-zinc-200 bg-white transition-all cursor-pointer relative group text-zinc-400 hover:text-[#36372e] hover:border-[#36372e] has-[:checked]:border-2 has-[:checked]:border-[#dcee56] has-[:checked]:bg-[#fdfef0] has-[:checked]:text-[#36372e]">
<input className="peer sr-only" name="event_type" type="radio"/>
<div className="absolute top-3 right-3 text-[#36372e] opacity-0 peer-checked:opacity-100 transition-opacity">
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon>
</div>
<iconify-icon className="mb-3 transition-transform group-hover:scale-110 peer-checked:group-hover:scale-100" icon="solar:users-group-two-rounded-linear" width="32"></iconify-icon>
<span className="font-medium text-sm text-zinc-600 group-hover:text-[#36372e] peer-checked:text-[#36372e]">Soirée amis</span>
</label>

<label className="flex flex-col items-center justify-center p-6 rounded-2xl border border-zinc-200 bg-white transition-all cursor-pointer relative group text-zinc-400 hover:text-[#36372e] hover:border-[#36372e] has-[:checked]:border-2 has-[:checked]:border-[#dcee56] has-[:checked]:bg-[#fdfef0] has-[:checked]:text-[#36372e]">
<input className="peer sr-only" name="event_type" type="radio"/>
<div className="absolute top-3 right-3 text-[#36372e] opacity-0 peer-checked:opacity-100 transition-opacity">
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon>
</div>
<iconify-icon className="mb-3 transition-transform group-hover:scale-110 peer-checked:group-hover:scale-100" icon="solar:case-minimalistic-linear" width="32"></iconify-icon>
<span className="font-medium text-sm text-zinc-600 group-hover:text-[#36372e] peer-checked:text-[#36372e]">Événement pro</span>
</label>
</div>
</div>

<div className="mb-10">
<h2 className="text-base font-medium mb-4 flex items-center gap-2">
<span className="w-6 h-6 rounded bg-[#f4f5f0] flex items-center justify-center text-xs text-[#36372e]">2</span>
                            Style de cuisine
                        </h2>
<div className="flex flex-wrap gap-3">
<label className="px-5 py-2.5 rounded-full border border-zinc-200 bg-white text-zinc-600 text-sm font-medium cursor-pointer hover:border-[#36372e] hover:text-[#36372e] transition-all flex items-center gap-2 active:scale-95 has-[:checked]:border-2 has-[:checked]:border-[#36372e] has-[:checked]:bg-[#36372e] has-[:checked]:text-[#dcee56]">
<input checked="" className="peer sr-only" name="food_style" type="radio"/>
<iconify-icon icon="solar:chef-hat-linear" width="18"></iconify-icon> Gastronomique
                            </label>
<label className="px-5 py-2.5 rounded-full border border-zinc-200 bg-white text-zinc-600 text-sm font-medium cursor-pointer hover:border-[#36372e] hover:text-[#36372e] transition-all flex items-center gap-2 active:scale-95 has-[:checked]:border-2 has-[:checked]:border-[#36372e] has-[:checked]:bg-[#36372e] has-[:checked]:text-[#dcee56]">
<input className="peer sr-only" name="food_style" type="radio"/>
<iconify-icon icon="solar:leaf-linear" width="18"></iconify-icon> Végétarien
                            </label>
<label className="px-5 py-2.5 rounded-full border border-zinc-200 bg-white text-zinc-600 text-sm font-medium cursor-pointer hover:border-[#36372e] hover:text-[#36372e] transition-all flex items-center gap-2 active:scale-95 has-[:checked]:border-2 has-[:checked]:border-[#36372e] has-[:checked]:bg-[#36372e] has-[:checked]:text-[#dcee56]">
<input className="peer sr-only" name="food_style" type="radio"/>
<iconify-icon icon="solar:fish-linear" width="18"></iconify-icon> Méditerranéen
                            </label>
<label className="px-5 py-2.5 rounded-full border border-zinc-200 bg-white text-zinc-600 text-sm font-medium cursor-pointer hover:border-[#36372e] hover:text-[#36372e] transition-all flex items-center gap-2 active:scale-95 has-[:checked]:border-2 has-[:checked]:border-[#36372e] has-[:checked]:bg-[#36372e] has-[:checked]:text-[#dcee56]">
<input className="peer sr-only" name="food_style" type="radio"/>
<iconify-icon icon="solar:fire-square-linear" width="18"></iconify-icon> Grillades
                            </label>
</div>
</div>

<div>
<h2 className="text-base font-medium mb-4 flex items-center gap-2">
<span className="w-6 h-6 rounded bg-[#f4f5f0] flex items-center justify-center text-xs text-[#36372e]">3</span>
                            Sélectionnez un chef
                        </h2>
<div className="space-y-3">

<label className="flex items-center justify-between p-4 rounded-2xl border border-zinc-200 bg-white cursor-pointer hover:border-[#36372e] transition-all group has-[:checked]:border-2 has-[:checked]:border-[#dcee56] has-[:checked]:bg-[#fdfef0]">
<input checked="" className="peer sr-only" name="chef" type="radio"/>
<div className="flex items-center gap-4 relative z-10">
<div className="w-14 h-14 rounded-full bg-zinc-50 peer-checked:bg-white border border-zinc-100 flex items-center justify-center text-zinc-400 group-hover:text-[#36372e] peer-checked:text-[#36372e] transition-colors">
<iconify-icon icon="solar:user-circle-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-sm text-[#36372e]">Chef Thomas</h3>
<p className="text-xs text-zinc-500 mt-1">Étoilé Michelin, Gastronomie française</p>
</div>
</div>
<div className="w-6 h-6 rounded-full border border-zinc-300 group-hover:border-[#36372e] peer-checked:bg-[#36372e] peer-checked:border-[#36372e] peer-checked:text-[#dcee56] flex items-center justify-center transition-colors relative z-10">
<iconify-icon className="opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
</label>

<label className="flex items-center justify-between p-4 rounded-2xl border border-zinc-200 bg-white cursor-pointer hover:border-[#36372e] transition-all group has-[:checked]:border-2 has-[:checked]:border-[#dcee56] has-[:checked]:bg-[#fdfef0]">
<input className="peer sr-only" name="chef" type="radio"/>
<div className="flex items-center gap-4 relative z-10">
<div className="w-14 h-14 rounded-full bg-zinc-50 peer-checked:bg-white border border-zinc-100 flex items-center justify-center text-zinc-400 group-hover:text-[#36372e] peer-checked:text-[#36372e] transition-colors">
<iconify-icon icon="solar:user-circle-linear" width="28"></iconify-icon>
</div>
<div>
<div className="flex items-center gap-2">
<h3 className="font-medium text-sm text-[#36372e]">Chef Sarah</h3>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#36372e] text-[#dcee56] text-xs">
<iconify-icon icon="solar:star-circle-linear" width="12"></iconify-icon>
                                                Engagé KOMI
                                            </span>
</div>
<p className="text-xs text-zinc-500 mt-1">Cuisine créative, végétale &amp; fusion</p>
</div>
</div>
<div className="w-6 h-6 rounded-full border border-zinc-300 group-hover:border-[#36372e] peer-checked:bg-[#36372e] peer-checked:border-[#36372e] peer-checked:text-[#dcee56] flex items-center justify-center transition-colors relative z-10">
<iconify-icon className="opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
</label>
</div>
</div>
</section>
</div>

<div className="hidden transition-opacity duration-300" id="step-2">
<section className="bg-white rounded-[2rem] p-6 sm:p-10 shadow-sm border border-zinc-100 relative overflow-hidden">
<div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h1 className="text-3xl tracking-tight font-medium mb-3">Personnalisez votre repas</h1>
<p className="text-sm text-zinc-500">Définissez le menu, les préférences et l'ambiance souhaitée.</p>
</div>
</div>

<div className="mb-10">
<h2 className="text-base font-medium mb-4">Vos envies pour le menu</h2>
<textarea className="w-full bg-[#f9faf7] border border-zinc-200 rounded-2xl p-5 text-sm focus:outline-none focus:border-[#36372e] focus:ring-1 focus:ring-[#36372e] transition-all resize-none text-[#36372e] placeholder:text-zinc-400" placeholder="Avez-vous des attentes particulières ? (ex: Menu en 5 services, passion pour la truffe, gâteau d'anniversaire...)" rows="3"></textarea>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div>
<h2 className="text-base font-medium mb-4">Préférences alimentaires</h2>
<div className="space-y-4">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-5 h-5 rounded border border-zinc-300 bg-white group-hover:border-[#36372e] transition-colors">
<input className="peer sr-only" type="checkbox" />
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity z-10" icon="solar:check-read-linear" width="14"></iconify-icon>
<div className="absolute inset-0 bg-[#36372e] rounded opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</input></div>
<span className="text-sm text-zinc-600 group-hover:text-[#36372e] transition-colors">Sans gluten</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-5 h-5 rounded border border-[#36372e] bg-[#36372e] transition-colors">
<input checked="" className="peer sr-only" type="checkbox" />
<iconify-icon className="absolute text-[#dcee56] opacity-0 peer-checked:opacity-100 transition-opacity z-10" icon="solar:check-read-linear" width="14"></iconify-icon>
</input></div>
<span className="text-sm text-[#36372e] font-medium transition-colors">Végétarien (1 personne)</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-5 h-5 rounded border border-zinc-300 bg-white group-hover:border-[#36372e] transition-colors">
<input className="peer sr-only" type="checkbox" />
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity z-10" icon="solar:check-read-linear" width="14"></iconify-icon>
<div className="absolute inset-0 bg-[#36372e] rounded opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</input></div>
<span className="text-sm text-zinc-600 group-hover:text-[#36372e] transition-colors">Sans lactose</span>
</label>
</div>
</div>

<div>
<h2 className="text-base font-medium mb-4">Ambiance souhaitée</h2>
<div className="space-y-3">
<label className="flex items-center justify-between p-4 rounded-2xl border border-zinc-200 bg-white cursor-pointer hover:border-[#36372e] transition-all group has-[:checked]:border-[#dcee56] has-[:checked]:bg-[#fdfef0]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center group-has-[:checked]:bg-white transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-[#36372e] group-has-[:checked]:text-[#36372e] transition-colors" icon="solar:music-notes-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-600 group-hover:text-[#36372e] group-has-[:checked]:text-[#36372e] transition-colors">Animée &amp; Festive</span>
</div>
<div className="w-5 h-5 rounded-full border border-zinc-300 flex items-center justify-center group-has-[:checked]:border-[#36372e] group-has-[:checked]:bg-[#36372e] transition-colors">
<input className="peer sr-only" name="ambiance" type="radio" />
<div className="w-2 h-2 rounded-full bg-[#dcee56] opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</input></div>
</label>
<label className="flex items-center justify-between p-4 rounded-2xl border border-[#dcee56] bg-[#fdfef0] cursor-pointer transition-all group has-[:checked]:border-[#dcee56] has-[:checked]:bg-[#fdfef0]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition-colors">
<iconify-icon className="text-[#36372e] transition-colors" icon="solar:cup-hot-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-[#36372e] transition-colors">Calme &amp; Intime</span>
</div>
<div className="w-5 h-5 rounded-full border border-[#36372e] bg-[#36372e] flex items-center justify-center transition-colors">
<input checked="" className="peer sr-only" name="ambiance" type="radio" />
<div className="w-2 h-2 rounded-full bg-[#dcee56] transition-opacity"></div>
</input></div>
</label>
</div>
</div>
</div>
</section>
</div>

<div className="hidden bg-white rounded-[2rem] p-10 shadow-sm border border-zinc-100 flex flex-col items-center justify-center text-center py-20 transition-opacity duration-500" id="success-step">
<div className="w-20 h-20 rounded-full bg-[#fdfef0] border-2 border-[#dcee56] flex items-center justify-center text-[#36372e] mb-6 shadow-sm">
<iconify-icon icon="solar:confetti-linear" width="40"></iconify-icon>
</div>
<h2 className="text-3xl tracking-tight font-medium mb-3">Demande validée !</h2>
<p className="text-sm text-zinc-500 max-w-md mx-auto mb-8">Votre chef a bien reçu votre demande de personnalisation. Nous vous recontacterons sous 24h pour finaliser les détails de votre événement.</p>
<button className="px-6 py-3 rounded-xl border border-zinc-200 text-[#36372e] text-sm font-medium hover:border-[#36372e] transition-all flex items-center gap-2 active:scale-95" onclick="location.reload()">
<iconify-icon icon="solar:refresh-linear" width="18"></iconify-icon>
                    Nouvelle réservation
                </button>
</div>

<div className="flex justify-end pt-4" id="action-buttons">

<button className="bg-[#36372e] text-[#dcee56] px-8 py-4 rounded-2xl text-sm font-medium hover:bg-black transition-all flex items-center gap-3 shadow-xl shadow-black/5 active:scale-95" id="btn-next">
                    Continuer
                    <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>

<button className="hidden bg-[#36372e] text-[#dcee56] px-8 py-4 rounded-2xl text-sm font-medium hover:bg-black transition-all flex items-center gap-3 shadow-xl shadow-black/5 active:scale-95" id="btn-submit">
                    Finaliser la demande
                    <iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</main>



    </>
  );
}
