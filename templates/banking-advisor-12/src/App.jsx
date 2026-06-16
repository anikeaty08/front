import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        document.addEventListener('DOMContentLoaded', () => {
            let currentStep = 1;
            const totalSteps = 5;

            const contentDivs = document.querySelectorAll('.step-content');
            const stepperIndicators = document.querySelectorAll('.step-indicator');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const submitBtn = document.getElementById('submitBtn');
            const mobileTitle = document.getElementById('mobileStepTitle');
            const mobileCount = document.getElementById('mobileStepCount');

            // Step Titles for Mobile
            const stepTitles = [
                "Projet", "Emprunteur", "Détail MOURABAHA", "Bien", "Terrain & Adresse"
            ];

            function updateUI() {
                // Show/Hide Content
                contentDivs.forEach(div => {
                    if(parseInt(div.dataset.step) === currentStep) {
                        div.classList.add('active');
                    } else {
                        div.classList.remove('active');
                    }
                });

                // Update Sidebar Indicators
                stepperIndicators.forEach((indicator, index) => {
                    const stepNum = index + 1;
                    const circle = indicator.querySelector('span:first-child');
                    const text = indicator.querySelector('span:last-child'); // The text label? No, span truncate

                    // Reset classes
                    indicator.className = 'step-indicator group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg border transition-all cursor-default';
                    circle.className = 'w-6 h-6 flex items-center justify-center rounded-full text-[10px] mr-3 font-semibold transition-all';

                    if (stepNum === currentStep) {
                        // Active
                        indicator.classList.add('bg-teal-50', 'text-teal-700', 'border-teal-100');
                        circle.classList.add('bg-teal-600', 'text-white');
                        circle.innerHTML = stepNum;
                    } else if (stepNum < currentStep) {
                        // Completed
                        indicator.classList.add('text-teal-600', 'bg-white', 'border-transparent');
                        circle.classList.add('bg-teal-100', 'text-teal-700');
                        // Optional: Change number to checkmark
                        circle.innerHTML = `<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
                    } else {
                        // Pending
                        indicator.classList.add('text-slate-500', 'hover:bg-slate-50', 'border-transparent');
                        circle.classList.add('border', 'border-slate-300', 'bg-white', 'text-slate-500');
                        circle.innerHTML = stepNum;
                    }
                });

                // Update Mobile Header
                mobileTitle.innerText = `Étape ${currentStep}: ${stepTitles[currentStep - 1]}`;
                mobileCount.innerText = `${currentStep}/${totalSteps}`;

                // Update Buttons
                if (currentStep === 1) {
                    prevBtn.classList.add('hidden');
                } else {
                    prevBtn.classList.remove('hidden');
                }

                if (currentStep === totalSteps) {
                    nextBtn.classList.add('hidden');
                    submitBtn.classList.remove('hidden');
                } else {
                    nextBtn.classList.remove('hidden');
                    submitBtn.classList.add('hidden');
                }
                
                // Scroll to top of form
                document.getElementById('mainForm').scrollTo(0,0);
            }

            nextBtn.addEventListener('click', () => {
                if (currentStep < totalSteps) {
                    currentStep++;
                    updateUI();
                }
            });

            prevBtn.addEventListener('click', () => {
                if (currentStep > 1) {
                    currentStep--;
                    updateUI();
                }
            });

            // Initialize
            updateUI();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="h-16 flex-shrink-0 bg-white border-b border-slate-200 z-50">
<div className="h-full max-w-[1600px] mx-auto px-4 sm:px-6 flex justify-between items-center">

<div className="flex items-center gap-6">
<div className="flex items-center gap-3">
<div className="bg-teal-700 text-white p-1.5 rounded">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M3 21h18M5 21V7l8-4 8 4v14"></path>
<path d="M9 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v11"></path>
</svg>
</div>
<div>
<span className="block text-sm font-bold text-slate-900 tracking-tight uppercase">Bank Assafa</span>
<span className="block text-[10px] font-medium text-slate-500 uppercase tracking-widest">Espace Conseiller</span>
</div>
</div>
<div className="h-6 w-px bg-slate-200 hidden md:block"></div>
<nav className="hidden md:flex items-center gap-1">
<button className="px-3 py-1.5 text-sm font-medium text-slate-900 bg-slate-100 rounded-md transition-colors">Dossiers</button>
<button className="px-3 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Clients</button>
<button className="px-3 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Simulations</button>
</nav>
</div>

<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-full border border-slate-200">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-xs font-medium text-slate-600">En ligne</span>
</div>
<div className="flex items-center gap-3 pl-4 border-l border-slate-200">
<div className="text-right hidden sm:block">
<p className="text-sm font-medium text-slate-900">Ahmed Benali</p>
<p className="text-xs text-slate-500">Agence Casablanca Anfa</p>
</div>
<div className="w-9 h-9 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-semibold text-sm border border-teal-200">
                        AB
                    </div>
</div>
</div>
</div>
</header>

<div className="flex flex-1 overflow-hidden max-w-[1600px] mx-auto w-full">

<aside className="w-64 flex-shrink-0 bg-white border-r border-slate-200 overflow-y-auto hidden lg:block">
<div className="p-6">
<h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Progression</h2>
<nav className="space-y-1" id="stepperNav">

<div className="step-indicator group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg bg-teal-50 text-teal-700 border border-teal-100 transition-all cursor-default">
<span className="w-6 h-6 flex items-center justify-center rounded-full bg-teal-600 text-white text-[10px] mr-3 font-semibold">1</span>
<span className="truncate">Projet</span>
</div>
<div className="step-indicator group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-slate-500 hover:bg-slate-50 border border-transparent transition-all cursor-default">
<span className="w-6 h-6 flex items-center justify-center rounded-full border border-slate-300 bg-white text-slate-500 text-[10px] mr-3">2</span>
<span className="truncate">Emprunteur</span>
</div>
<div className="step-indicator group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-slate-500 hover:bg-slate-50 border border-transparent transition-all cursor-default">
<span className="w-6 h-6 flex items-center justify-center rounded-full border border-slate-300 bg-white text-slate-500 text-[10px] mr-3">3</span>
<span className="truncate">Détail MOURABAHA</span>
</div>
<div className="step-indicator group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-slate-500 hover:bg-slate-50 border border-transparent transition-all cursor-default">
<span className="w-6 h-6 flex items-center justify-center rounded-full border border-slate-300 bg-white text-slate-500 text-[10px] mr-3">4</span>
<span className="truncate">Bien</span>
</div>
<div className="step-indicator group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-slate-500 hover:bg-slate-50 border border-transparent transition-all cursor-default">
<span className="w-6 h-6 flex items-center justify-center rounded-full border border-slate-300 bg-white text-slate-500 text-[10px] mr-3">5</span>
<span className="truncate">Terrain &amp; Adresse</span>
</div>
</nav>
</div>
<div className="p-6 mt-auto border-t border-slate-100">
<div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" data-lucide="info"></i>
<div>
<h4 className="text-sm font-medium text-blue-900">Note interne</h4>
<p className="text-xs text-blue-700 mt-1 leading-relaxed">
                                Vérifiez la conformité des pièces jointes avant validation finale du dossier.
                            </p>
</div>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col bg-slate-50/50 overflow-hidden relative">

<div className="lg:hidden bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between">
<span className="text-sm font-medium text-slate-900" id="mobileStepTitle">Étape 1: Projet</span>
<span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-full" id="mobileStepCount">1/5</span>
</div>

<form className="flex-1 overflow-y-auto p-4 sm:p-8 md:p-12 pb-24" id="mainForm">
<div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200">

<div className="step-content active" data-step="1">
<div className="p-8 border-b border-slate-100">
<div className="flex items-center gap-3 mb-1">
<div className="p-2 bg-teal-50 rounded-lg text-teal-700">
<i className="w-5 h-5" data-lucide="briefcase" strokeWidth="2"></i>
</div>
<h2 className="text-lg font-semibold text-slate-900 tracking-tight">Détails du Projet</h2>
</div>
<p className="text-sm text-slate-500 ml-12">Définissez la nature et le montant du financement.</p>
</div>
<div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-700">Type de MOURABAHA</label>
<div className="relative">
<select className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 pr-10 text-sm text-slate-800 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition shadow-sm">
<option disabled="" selected="" value="">Sélectionner...</option>
<option>MOURABAHA promotion immobilière</option>
<option>Acquéreur</option>
<option>Autres</option>
</select>
<i className="absolute right-3 top-3 w-4 h-4 text-slate-400 pointer-events-none" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-700">Objet de financement</label>
<div className="relative">
<select className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 pr-10 text-sm text-slate-800 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition shadow-sm">
<option disabled="" selected="" value="">Sélectionner...</option>
<option>VRD</option>
<option>TERRAIN</option>
<option>CONSTRUCTION</option>
<option>TERRAIN+CONSTRUCTION</option>
</select>
<i className="absolute right-3 top-3 w-4 h-4 text-slate-400 pointer-events-none" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<div className="space-y-1.5 md:col-span-2">
<label className="block text-sm font-medium text-slate-700">Montant du projet</label>
<div className="relative">
<span className="absolute left-3.5 top-2.5 text-slate-400 text-sm font-medium">MAD</span>
<input className="w-full rounded-lg border border-slate-200 pl-14 pr-4 py-2.5 text-sm text-slate-800 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition shadow-sm placeholder:text-slate-300" placeholder="0.00" type="number"/>
</div>
</div>
</div>
</div>

<div className="step-content" data-step="2">
<div className="p-8 border-b border-slate-100">
<div className="flex items-center gap-3 mb-1">
<div className="p-2 bg-teal-50 rounded-lg text-teal-700">
<i className="w-5 h-5" data-lucide="user-check" strokeWidth="2"></i>
</div>
<h2 className="text-lg font-semibold text-slate-900 tracking-tight">Emprunteur principal</h2>
</div>
<p className="text-sm text-slate-500 ml-12">Informations légales et identité de l'emprunteur.</p>
</div>
<div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-700">Raison sociale</label>
<input className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition shadow-sm" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-700">Forme juridique</label>
<div className="relative">
<select className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 pr-10 text-sm text-slate-800 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition shadow-sm">
<option disabled="" selected="" value="">Choisir...</option>
<option>SA</option>
<option>SARL</option>
<option>SARL AU</option>
<option>SNC</option>
</select>
<i className="absolute right-3 top-3 w-4 h-4 text-slate-400 pointer-events-none" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-700">N° du Registre de commerce</label>
<input className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition shadow-sm" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-700">Ville RC</label>
<input className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition shadow-sm" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-700">Date de création</label>
<input className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition shadow-sm" type="date"/>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-700">Capital</label>
<input className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition shadow-sm" type="text"/>
</div>
<div className="md:col-span-2 pt-4">
<label className="block text-sm font-medium text-slate-700 mb-3">Choix du produit</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<label className="cursor-pointer relative">
<input className="peer sr-only" type="checkbox"/>
<div className="rounded-lg border border-slate-200 p-3 hover:bg-slate-50 peer-checked:border-teal-600 peer-checked:bg-teal-50 peer-checked:text-teal-900 transition-all text-center text-sm font-medium text-slate-600">
                                            CONSTRUCTION
                                        </div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" type="checkbox"/>
<div className="rounded-lg border border-slate-200 p-3 hover:bg-slate-50 peer-checked:border-teal-600 peer-checked:bg-teal-50 peer-checked:text-teal-900 transition-all text-center text-sm font-medium text-slate-600">
                                            TERRAIN
                                        </div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" type="checkbox"/>
<div className="rounded-lg border border-slate-200 p-3 hover:bg-slate-50 peer-checked:border-teal-600 peer-checked:bg-teal-50 peer-checked:text-teal-900 transition-all text-center text-sm font-medium text-slate-600">
                                            VRD
                                        </div>
</label>
</div>
</div>
</div>
</div>

<div className="step-content" data-step="3">
<div className="p-8 border-b border-slate-100">
<div className="flex items-center gap-3 mb-1">
<div className="p-2 bg-teal-50 rounded-lg text-teal-700">
<i className="w-5 h-5" data-lucide="calculator" strokeWidth="2"></i>
</div>
<h2 className="text-lg font-semibold text-slate-900 tracking-tight">Calculs Financiers</h2>
</div>
<p className="text-sm text-slate-500 ml-12">Détails du montage financier de la MOURABAHA.</p>
</div>
<div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-700">Montant du financement</label>
<input className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition shadow-sm" type="number"/>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-700">Montant du dossier</label>
<input className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition shadow-sm" type="number"/>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-700">Montant Total MOURABAHA</label>
<input className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition shadow-sm" type="number"/>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-700">Durée (Mois)</label>
<div className="relative">
<input className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition shadow-sm" type="number"/>
<i className="absolute right-3 top-3 w-4 h-4 text-slate-400 pointer-events-none" data-lucide="clock" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>

<div className="step-content" data-step="4">
<div className="p-8 border-b border-slate-100">
<div className="flex items-center gap-3 mb-1">
<div className="p-2 bg-teal-50 rounded-lg text-teal-700">
<i className="w-5 h-5" data-lucide="home" strokeWidth="2"></i>
</div>
<h2 className="text-lg font-semibold text-slate-900 tracking-tight">Caractéristiques du Bien</h2>
</div>
<p className="text-sm text-slate-500 ml-12">Saisie des informations relatives à la propriété.</p>
</div>
<div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-700">Type du bien</label>
<input className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition shadow-sm" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-700">Type d’usage</label>
<input className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition shadow-sm" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-700">Titre foncier</label>
<input className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition shadow-sm" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-700">Valeur Vénale</label>
<input className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition shadow-sm" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-700">Montant de l’Apport</label>
<input className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition shadow-sm" type="text"/>
</div>
<div className="space-y-1.5 md:col-span-3">
<label className="block text-sm font-medium text-slate-700">Origine des fonds</label>
<input className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition shadow-sm" type="text"/>
</div>
</div>
</div>

<div className="step-content" data-step="5">
<div className="p-8 border-b border-slate-100">
<div className="flex items-center gap-3 mb-1">
<div className="p-2 bg-teal-50 rounded-lg text-teal-700">
<i className="w-5 h-5" data-lucide="map-pin" strokeWidth="2"></i>
</div>
<h2 className="text-lg font-semibold text-slate-900 tracking-tight">Localisation</h2>
</div>
<p className="text-sm text-slate-500 ml-12">Situation géographique et superficie.</p>
</div>
<div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-700">Superficie</label>
<div className="relative">
<input className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition shadow-sm" type="number"/>
<span className="absolute right-3.5 top-2.5 text-slate-400 text-sm font-medium">m²</span>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-700">Ville</label>
<div className="relative">
<select className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 pr-10 text-sm text-slate-800 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition shadow-sm">
<option disabled="" selected="" value="">Sélectionner la ville...</option>
<option>Casablanca</option>
<option>Rabat</option>
<option>Tanger</option>
<option>Marrakech</option>
<option>Agadir</option>
<option>Fès</option>
</select>
<i className="absolute right-3 top-3 w-4 h-4 text-slate-400 pointer-events-none" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<div className="space-y-1.5 md:col-span-2">
<label className="block text-sm font-medium text-slate-700">Adresse complète</label>
<input className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition shadow-sm" placeholder="Adresse complète..." type="text"/>
</div>
</div>
</div>
</div>
</form>

<div className="absolute bottom-0 w-full bg-white border-t border-slate-200 px-6 py-4 z-40">
<div className="max-w-[1600px] mx-auto flex items-center justify-between">
<button className="hidden px-5 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-2" id="prevBtn" type="button">
<i className="w-4 h-4" data-lucide="arrow-left" strokeWidth="2"></i>
                        Précédent
                    </button>
<div className="ml-auto flex gap-3">
<button className="px-5 py-2.5 text-sm font-medium text-slate-500 hover:text-red-600 transition-colors" type="button">
                            Annuler
                        </button>
<button className="bg-teal-700 hover:bg-teal-800 text-white text-sm font-medium py-2.5 px-6 rounded-lg shadow-sm shadow-teal-700/20 transition-all flex items-center gap-2" id="nextBtn" type="button">
<span>Suivant</span>
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="2"></i>
</button>
<button className="hidden bg-teal-700 hover:bg-teal-800 text-white text-sm font-medium py-2.5 px-6 rounded-lg shadow-sm shadow-teal-700/20 transition-all flex items-center gap-2" id="submitBtn" type="button">
<i className="w-4 h-4" data-lucide="check" strokeWidth="2"></i>
<span>Valider le dossier</span>
</button>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
