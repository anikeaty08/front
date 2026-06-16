import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 z-0 bg-slate-100 overflow-hidden select-none pointer-events-none opacity-60">
<div className="h-14 bg-[#312e81] w-full mb-6 shadow-sm"></div>
<div className="px-8 max-w-7xl mx-auto grid grid-cols-4 gap-6">
<div className="col-span-1 bg-white border border-gray-200/60 rounded-xl h-[80vh] shadow-sm"></div>
<div className="col-span-3 bg-white border border-gray-200/60 rounded-xl h-[80vh] shadow-sm flex flex-col">
<div className="h-12 border-b border-gray-100 bg-gray-50/50 rounded-t-xl"></div>
<div className="p-6 space-y-4">
<div className="h-8 w-1/3 bg-gray-100 rounded-md"></div>
<div className="h-4 w-2/3 bg-gray-50 rounded-md"></div>
<div className="h-4 w-1/2 bg-gray-50 rounded-md"></div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 z-10 bg-slate-900/20 backdrop-blur-[2px] flex items-center justify-center p-4">

<main className="w-full max-w-4xl bg-white rounded-xl shadow-2xl shadow-slate-900/10 ring-1 ring-black/5 overflow-hidden flex flex-col max-h-[95vh] animate-in fade-in zoom-in-95 duration-200">

<header className="bg-[#312e81] px-6 py-4 flex items-center justify-between shrink-0 border-b border-[#312e81]">
<div className="flex items-center space-x-3 text-white">
<div className="p-1.5 bg-white/10 rounded-lg backdrop-blur-sm ring-1 ring-white/10">
<iconify-icon icon="solar:card-transfer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h1 className="text-base font-medium tracking-tight text-white/95">
                        Modification du paiement
                    </h1>
</div>
<button className="text-white/60 hover:text-white hover:bg-white/10 rounded-full p-1 transition-all">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
</header>

<div className="px-6 pt-5 pb-0 border-b border-gray-100 shrink-0 bg-white">
<div className="flex items-center space-x-6">
<button className="group relative pb-3 px-1 flex items-center space-x-2 text-sm font-medium text-[#312e81]">
<iconify-icon icon="solar:card-linear" width="18"></iconify-icon>
<span>Faire un paiement</span>
<div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#312e81] rounded-t-full"></div>
</button>
<button className="group relative pb-3 px-1 flex items-center space-x-2 text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors">
<iconify-icon icon="solar:list-linear" width="18"></iconify-icon>
<span>Détails du paiement</span>
<div className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent group-hover:bg-slate-200 rounded-t-full transition-colors"></div>
</button>
</div>
</div>

<div className="p-8 overflow-y-auto">
<h2 className="text-slate-800 text-sm font-medium mb-5 flex items-center gap-2 uppercase tracking-wide opacity-90">
<iconify-icon className="text-[#312e81]" icon="solar:info-circle-linear" width="16"></iconify-icon>
                    Informations Générales
                </h2>

<section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

<div className="group">
<label className="block text-xs font-medium text-slate-500 mb-1.5 ml-0.5">Méthode de paiement</label>
<div className="relative">
<select className="w-full appearance-none bg-slate-50 border border-gray-200 text-slate-700 text-sm rounded-lg pl-4 pr-10 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#312e81]/10 focus:border-[#312e81] focus:bg-white transition-all cursor-pointer hover:border-gray-300">
<option disabled="">Sélectionner...</option>
<option selected="">Virement bancaire</option>
<option>Carte de crédit</option>
<option>Chèque</option>
</select>
<div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none flex items-center group-hover:text-slate-600 transition-colors">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="group">
<label className="block text-xs font-medium text-slate-500 mb-1.5 ml-0.5">Étape du dossier</label>
<div className="relative">
<select className="w-full appearance-none bg-slate-50 border border-gray-200 text-slate-700 text-sm rounded-lg pl-4 pr-10 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#312e81]/10 focus:border-[#312e81] focus:bg-white transition-all cursor-pointer hover:border-gray-300">
<option selected="">Préparation de dossier</option>
<option>Analyse préliminaire</option>
<option>Finalisation</option>
</select>
<div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none flex items-center group-hover:text-slate-600 transition-colors">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</section>

<div className="group border border-indigo-100 rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm mb-8 bg-indigo-50/30 hover:bg-indigo-50/50 transition-colors">
<div className="flex items-start space-x-4 flex-1">
<div className="bg-indigo-100/80 rounded-lg p-2.5 text-[#312e81] shrink-0 mt-0.5 ring-1 ring-indigo-200">
<iconify-icon icon="solar:flag-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="space-y-1">
<div className="flex items-center space-x-1.5 text-indigo-400 mb-0.5">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
<span className="text-[10px] font-bold uppercase tracking-wider">Étape actuelle</span>
</div>
<h3 className="text-base font-medium text-slate-800 tracking-tight">
                                Préparation de dossier
                            </h3>
<p className="text-xs text-slate-500 max-w-sm hidden md:block leading-relaxed">
                                Frais administratifs pour l'ouverture et la structuration initiale du dossier.
                            </p>
</div>
</div>
<div className="bg-white border border-indigo-100 rounded-lg px-6 py-4 w-full md:w-auto min-w-[180px] flex flex-col items-center justify-center text-center shadow-sm group-hover:shadow-md transition-all">
<div className="text-[#312e81] mb-1 flex items-center gap-1.5 opacity-80">
<iconify-icon icon="solar:wallet-money-linear" width="16"></iconify-icon>
<span className="text-[10px] font-bold uppercase tracking-wider">Montant attendu</span>
</div>
<div className="text-2xl font-semibold text-[#312e81] tracking-tight">
                            150,00 $
                        </div>
</div>
</div>
<div className="h-px bg-gray-100 w-full mb-8"></div>
<h2 className="text-slate-800 text-sm font-medium mb-5 flex items-center gap-2 uppercase tracking-wide opacity-90">
<iconify-icon className="text-[#312e81]" icon="solar:document-add-linear" width="16"></iconify-icon>
                    Informations Complémentaires
                </h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mb-8">

<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5 ml-0.5">Date de transaction</label>
<div className="relative group">
<div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#312e81] transition-colors pointer-events-none flex items-center">
<iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon>
</div>
<input className="w-full bg-slate-50 border border-gray-200 text-slate-700 text-sm rounded-lg pl-10 pr-3 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#312e81]/10 focus:border-[#312e81] focus:bg-white transition-all hover:border-gray-300" type="date" value="2023-10-27"/>
</div>
</div>

<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5 ml-0.5">Statut du paiement</label>
<div className="relative group">
<div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#312e81] transition-colors pointer-events-none flex items-center">
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon>
</div>
<select className="w-full appearance-none bg-slate-50 border border-gray-200 text-slate-700 text-sm rounded-lg pl-10 pr-10 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#312e81]/10 focus:border-[#312e81] focus:bg-white transition-all cursor-pointer hover:border-gray-300">
<option>En attente</option>
<option selected="">Complété</option>
<option>Échoué</option>
<option>Remboursé</option>
</select>
<div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none flex items-center">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5 ml-0.5">Numéro de reçu</label>
<div className="relative group">
<div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#312e81] transition-colors pointer-events-none flex items-center">
<iconify-icon icon="solar:bill-list-linear" width="18"></iconify-icon>
</div>
<input className="w-full bg-slate-50 border border-gray-200 text-slate-700 text-sm rounded-lg pl-10 pr-3 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#312e81]/10 focus:border-[#312e81] focus:bg-white transition-all hover:border-gray-300 placeholder:text-slate-300" type="text" value="#REC-8492"/>
</div>
</div>

<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5 ml-0.5">Montant reçu (Confirmation)</label>
<div className="relative group">
<div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#312e81] transition-colors pointer-events-none flex items-center">
<span className="text-sm font-semibold">$</span>
</div>
<input className="w-full bg-slate-50 border border-gray-200 text-slate-700 text-sm rounded-lg pl-8 pr-3 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#312e81]/10 focus:border-[#312e81] focus:bg-white transition-all hover:border-gray-300 placeholder:text-slate-300" type="number" value="150.00"/>
</div>
</div>
</div>

<div className="mb-8">
<div className="flex items-center justify-between mb-1.5 ml-0.5">
<label className="block text-xs font-medium text-slate-500">Preuve de paiement</label>
<span className="text-[10px] font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full ring-1 ring-green-600/10 flex items-center gap-1">
<iconify-icon icon="solar:check-circle-bold" width="10"></iconify-icon>
                            Téléversé
                        </span>
</div>
<div className="group relative flex items-center p-3.5 bg-white border border-[#312e81]/30 rounded-lg shadow-sm transition-all hover:border-[#312e81] hover:shadow-md ring-1 ring-transparent hover:ring-[#312e81]/10">

<div className="h-10 w-10 rounded-lg bg-red-50 flex items-center justify-center text-red-500 mr-4 border border-red-100 shrink-0">
<iconify-icon icon="solar:file-text-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>

<div className="flex-1 min-w-0 pr-4">
<p className="text-sm font-medium text-slate-800 truncate tracking-tight">reçu_virement_BNC_2023.pdf</p>
<div className="flex items-center gap-2 mt-0.5">
<span className="text-[11px] text-slate-500 font-medium">2.4 MB</span>
<span className="h-0.5 w-0.5 rounded-full bg-slate-300"></span>
<span className="text-[11px] text-slate-400">Ajouté il y a 2 min</span>
</div>
</div>

<div className="flex items-center gap-1 border-l border-gray-100 pl-2">
<button className="p-2 text-slate-400 hover:text-[#312e81] hover:bg-slate-50 rounded-lg transition-all" title="Voir le fichier">
<iconify-icon icon="solar:eye-linear" width="18"></iconify-icon>
</button>
<button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all" title="Supprimer">
<iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="mb-8">
<label className="block text-xs font-medium text-slate-500 mb-1.5 ml-0.5">Note interne</label>
<div className="relative group">
<textarea className="w-full bg-slate-50 border border-gray-200 text-slate-700 text-sm rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#312e81]/10 focus:border-[#312e81] focus:bg-white transition-all hover:border-gray-300 resize-none placeholder:text-slate-300" placeholder="Ajouter un commentaire concernant ce paiement..." rows="3">Paiement reçu via virement bancaire ce matin. Le dossier est prêt pour l'analyse.</textarea>
<div className="absolute right-3 top-3 text-slate-400 pointer-events-none group-focus-within:text-[#312e81] transition-colors">
<iconify-icon icon="solar:pen-new-square-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="pt-6 border-t border-gray-100 flex justify-end items-center gap-3">
<button className="bg-white hover:bg-slate-50 border border-gray-200 text-slate-600 hover:text-slate-800 text-sm font-medium py-2.5 px-5 rounded-lg shadow-sm transition-all flex items-center space-x-2 focus:ring-2 focus:ring-gray-200 active:scale-[0.98]">
<iconify-icon icon="solar:close-circle-linear" width="18"></iconify-icon>
<span>Annuler</span>
</button>
<button className="bg-[#16a34a] hover:bg-[#15803d] text-white text-sm font-medium py-2.5 px-6 rounded-lg shadow-sm shadow-green-900/10 transition-all flex items-center space-x-2 focus:ring-2 focus:ring-green-500/20 active:scale-[0.98]">
<iconify-icon icon="solar:diskette-linear" width="18"></iconify-icon>
<span>Enregistrer</span>
</button>
</div>
</div>
</main>
</div>

    </>
  );
}
