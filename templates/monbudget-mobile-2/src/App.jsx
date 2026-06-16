import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Dismiss the auth screen securely
        function login() {
            const authScreen = document.getElementById('authScreen');
            authScreen.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
            setTimeout(() => {
                authScreen.style.display = 'none';
            }, 500);
        }

        // Toggle transaction modal
        function toggleModal() {
            const modal = document.getElementById('addModal');
            const backdrop = document.getElementById('modalBackdrop');
            const content = document.getElementById('modalContent');
            
            if (modal.classList.contains('pointer-events-none')) {
                // Open Modal
                modal.classList.remove('pointer-events-none');
                backdrop.classList.remove('opacity-0');
                content.classList.remove('translate-y-full');
            } else {
                // Close Modal
                backdrop.classList.add('opacity-0');
                content.classList.add('translate-y-full');
                setTimeout(() => {
                    modal.classList.add('pointer-events-none');
                }, 300); // Wait for transition to finish
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="w-full max-w-md bg-gray-50 h-[100dvh] sm:h-[844px] sm:rounded-[2.5rem] sm:shadow-2xl relative overflow-hidden flex flex-col sm:border-8 sm:border-gray-900">

<div className="absolute inset-0 bg-white z-[60] flex flex-col justify-center px-6 transition-all duration-500 ease-out" id="authScreen">

<div className="mb-10 flex flex-col items-center">
<div className="w-16 h-16 bg-green-600 rounded-[1.25rem] flex items-center justify-center text-white font-semibold tracking-tighter text-2xl shadow-lg shadow-green-600/20 mb-4">
                    MB+
                </div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-1.5">Bienvenue</h1>
<p className="text-sm text-gray-500 font-medium text-center">Créez un compte ou connectez-vous pour gérer votre budget.</p>
</div>

<button className="w-full flex items-center justify-center gap-3 py-3.5 px-4 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 active:scale-[0.98] transition-all mb-6 group" onclick="login()">
<span className="w-5 h-5 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center text-xs font-semibold tracking-tighter group-hover:bg-gray-200 transition-colors">G</span>
                Continuer avec Google
            </button>

<div className="relative flex items-center justify-center mb-6">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-gray-100"></div>
</div>
<span className="relative bg-white px-3 text-xs text-gray-400 font-medium uppercase tracking-widest">Ou avec l'email</span>
</div>

<form className="space-y-4" onsubmit="event.preventDefault(); login();">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5 ml-1">Adresse email</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
<iconify-icon className="text-lg" icon="solar:letter-outline"></iconify-icon>
</div>
<input className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-50 transition-all placeholder:text-gray-400 text-gray-900" placeholder="vous@exemple.fr" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5 ml-1">Mot de passe</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
<iconify-icon className="text-lg" icon="solar:lock-password-outline"></iconify-icon>
</div>
<input className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-50 transition-all placeholder:text-gray-400 text-gray-900" placeholder="••••••••" required="" type="password"/>
</div>
</div>
<button className="w-full py-3.5 mt-4 rounded-xl bg-green-600 text-white text-sm font-semibold shadow-lg shadow-green-600/20 hover:bg-green-700 transition-colors active:scale-[0.98]" type="submit">
                    S'inscrire / Se connecter
                </button>
</form>
</div>

<div className="bg-orange-50 border-b border-orange-100 px-6 py-3 flex items-start gap-3 relative z-10 pt-12 sm:pt-6">
<div className="text-orange-500 mt-0.5">
<iconify-icon className="text-base" icon="solar:info-circle-outline"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-orange-900">Alerte Budget Transport</p>
<p className="text-xs text-orange-700 mt-0.5">Vous avez atteint 85% de votre limite mensuelle.</p>
</div>
<button className="absolute top-3 right-4 text-orange-400 hover:text-orange-600">
<iconify-icon className="text-base" icon="solar:close-square-outline"></iconify-icon>
</button>
</div>

<header className="px-6 pt-4 pb-2 flex justify-between items-center bg-gray-50 z-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center text-gray-500 font-semibold tracking-tight border border-gray-300">
                    MD
                </div>
<div>
<p className="text-xs text-gray-500 font-medium uppercase tracking-widest">Bonjour</p>
<h1 className="text-lg font-semibold tracking-tight text-gray-900">Moussa Diop</h1>
</div>
</div>
<button className="relative p-2 rounded-full bg-white border border-gray-200 text-gray-600 shadow-sm hover:bg-gray-50 transition-colors">
<iconify-icon className="text-xl" icon="solar:bell-outline"></iconify-icon>
<span className="absolute top-2 right-2.5 w-2 h-2 bg-green-500 rounded-full border-2 border-white"></span>
</button>
</header>

<div className="flex-1 overflow-y-auto no-scrollbar pb-24">

<section className="px-6 py-4">
<div className="bg-green-600 rounded-[1.5rem] p-6 text-white shadow-lg shadow-green-600/20 relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
<div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full blur-xl -ml-8 -mb-8"></div>
<div className="relative z-10">
<div className="flex justify-between items-center mb-1">
<p className="text-green-100 text-sm font-medium">Solde Total</p>
<span className="bg-white/20 text-xs font-medium px-2 py-1 rounded-lg backdrop-blur-sm text-white flex items-center gap-1">
                                XOF <iconify-icon icon="solar:alt-arrow-down-outline"></iconify-icon>
</span>
</div>
<h2 className="text-3xl font-semibold tracking-tight mb-6">250 450 <span className="text-xl font-medium text-green-200">F</span></h2>
<div className="bg-black/10 rounded-2xl p-4 backdrop-blur-sm border border-white/10">
<div className="flex justify-between items-end mb-2">
<div>
<p className="text-xs text-green-100 font-medium mb-0.5">Budget Mensuel Restant</p>
<p className="text-base font-semibold">45 000 F</p>
</div>
<div className="text-right">
<p className="text-xs text-green-100 font-medium mb-0.5">Jours</p>
<p className="text-base font-semibold">12</p>
</div>
</div>

<div className="h-1.5 w-full bg-black/20 rounded-full overflow-hidden">
<div className="h-full bg-white rounded-full w-[70%]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 py-2">
<h3 className="text-sm font-semibold tracking-tight text-gray-900 mb-3">Comptes liés</h3>
<div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
<div className="min-w-[140px] p-3 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-semibold text-xs tracking-tight">OM</div>
<div>
<p className="text-xs text-gray-500 font-medium">Orange Money</p>
<p className="text-sm font-semibold text-gray-900">120K F</p>
</div>
</div>
<div className="min-w-[140px] p-3 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold text-xs tracking-tight">W</div>
<div>
<p className="text-xs text-gray-500 font-medium">Wave</p>
<p className="text-sm font-semibold text-gray-900">85K F</p>
</div>
</div>
<div className="min-w-[140px] p-3 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center gap-3 border-dashed bg-transparent cursor-pointer hover:bg-white transition-colors">
<div className="w-8 h-8 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center">
<iconify-icon className="text-base" icon="solar:add-outline"></iconify-icon>
</div>
<p className="text-xs text-gray-500 font-medium">Ajouter</p>
</div>
</div>
</section>

<section className="px-6 pt-4">
<div className="flex justify-between items-end mb-4">
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Dépenses récentes</h3>
<button className="text-xs text-gray-500 font-medium hover:text-green-600 transition-colors">Voir tout</button>
</div>
<div className="space-y-3">

<div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm group hover:border-gray-200 transition-colors cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center group-hover:scale-105 transition-transform">
<iconify-icon className="text-xl" icon="solar:bus-outline"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">Transport Bus</p>
<p className="text-xs text-gray-500 font-medium mt-0.5">Aujourd'hui, 08:30 • Wave</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-gray-900">- 1 500 F</p>
</div>
</div>

<div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm group hover:border-gray-200 transition-colors cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform">
<iconify-icon className="text-xl" icon="solar:cart-large-outline"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">Supermarché Casino</p>
<p className="text-xs text-gray-500 font-medium mt-0.5">Hier, 18:45 • Orange Money</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-gray-900">- 12 400 F</p>
</div>
</div>

<div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm group hover:border-gray-200 transition-colors cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center group-hover:scale-105 transition-transform">
<iconify-icon className="text-xl" icon="solar:wad-of-money-outline"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">Transfert de Maman</p>
<p className="text-xs text-gray-500 font-medium mt-0.5">Mar 12, 10:00 • Wave</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-green-600">+ 25 000 F</p>
</div>
</div>
</div>
</section>
</div>

<nav className="absolute bottom-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-100 px-6 py-3 flex justify-between items-center z-20 pb-8 sm:pb-4 shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
<button className="flex flex-col items-center gap-1.5 text-green-600 w-12">
<iconify-icon className="text-[22px]" icon="solar:home-2-bold"></iconify-icon>
<span className="text-xs font-medium">Accueil</span>
</button>
<button className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-gray-900 transition-colors w-12">
<iconify-icon className="text-[22px]" icon="solar:pie-chart-2-outline"></iconify-icon>
<span className="text-xs font-medium">Budget</span>
</button>

<div className="relative -top-5">
<button className="w-14 h-14 bg-green-600 text-white rounded-[1.25rem] flex items-center justify-center shadow-lg shadow-green-600/30 hover:bg-green-700 hover:-translate-y-1 transition-all duration-200 active:scale-95 active:translate-y-0" onclick="toggleModal()">
<iconify-icon className="text-3xl" icon="solar:add-outline"></iconify-icon>
</button>
</div>
<button className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-gray-900 transition-colors w-12">
<iconify-icon className="text-[22px]" icon="solar:wallet-money-outline"></iconify-icon>
<span className="text-xs font-medium">Historique</span>
</button>
<button className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-gray-900 transition-colors w-12">
<iconify-icon className="text-[22px]" icon="solar:user-outline"></iconify-icon>
<span className="text-xs font-medium">Profil</span>
</button>
</nav>

<div className="absolute inset-0 z-50 pointer-events-none flex flex-col justify-end" id="addModal">

<div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm opacity-0 transition-opacity duration-300" id="modalBackdrop" onclick="toggleModal()"></div>

<div className="bg-white w-full rounded-t-[2rem] relative z-10 translate-y-full transition-transform duration-300 ease-out flex flex-col max-h-[90dvh]" id="modalContent">
<div className="px-6 py-4 flex justify-between items-center border-b border-gray-100">
<h2 className="text-base font-semibold tracking-tight text-gray-900">Saisir une transaction</h2>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors" onclick="toggleModal()">
<iconify-icon className="text-lg" icon="solar:close-circle-outline"></iconify-icon>
</button>
</div>

<div className="px-6 mt-5 flex gap-2">
<button className="flex-1 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-medium text-center shadow-md">Dépense</button>
<button className="flex-1 py-2.5 rounded-xl bg-gray-50 text-gray-600 text-sm font-medium text-center hover:bg-gray-100 border border-gray-200">Revenu</button>
</div>

<div className="p-6 overflow-y-auto no-scrollbar flex-1 space-y-6">

<div className="text-center bg-gray-50 rounded-2xl p-6 border border-gray-100">
<p className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wider">Montant</p>
<div className="flex items-center justify-center text-4xl font-semibold tracking-tight text-gray-900">
<input autofocus="" className="w-32 text-center bg-transparent outline-none placeholder:text-gray-300" placeholder="0" type="number" value="2500"/>
<span className="text-xl text-gray-400 ml-1">F</span>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-3">
<label className="text-sm font-medium text-gray-900">Catégorie</label>
<span className="text-xs text-green-600 font-medium cursor-pointer">Modifier</span>
</div>
<div className="grid grid-cols-4 gap-3">

<div className="flex flex-col items-center gap-1.5 cursor-pointer group">
<div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center border-2 border-orange-500 transition-all shadow-sm">
<iconify-icon className="text-[26px]" icon="solar:hamburger-menu-outline"></iconify-icon>
</div>
<span className="text-xs font-semibold text-gray-900">Nourriture</span>
</div>

<div className="flex flex-col items-center gap-1.5 cursor-pointer group">
<div className="w-14 h-14 rounded-2xl bg-gray-50 text-gray-500 group-hover:bg-gray-100 flex items-center justify-center border-2 border-transparent transition-colors">
<iconify-icon className="text-[26px]" icon="solar:bus-outline"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-500">Transport</span>
</div>
<div className="flex flex-col items-center gap-1.5 cursor-pointer group">
<div className="w-14 h-14 rounded-2xl bg-gray-50 text-gray-500 group-hover:bg-gray-100 flex items-center justify-center border-2 border-transparent transition-colors">
<iconify-icon className="text-[26px]" icon="solar:home-smile-outline"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-500">Loyer</span>
</div>
<div className="flex flex-col items-center gap-1.5 cursor-pointer group">
<div className="w-14 h-14 rounded-2xl bg-gray-50 text-gray-500 group-hover:bg-gray-100 flex items-center justify-center border-2 border-transparent transition-colors text-gray-400">
<iconify-icon className="text-[26px]" icon="solar:menu-dots-outline"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-500">Autres</span>
</div>
</div>
</div>

<div>
<label className="text-sm font-medium text-gray-900 mb-2 block">Payer depuis</label>
<div className="flex items-center justify-between p-3.5 rounded-xl border border-gray-200 bg-white cursor-pointer hover:border-gray-300 transition-colors shadow-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
<span className="text-[10px] font-semibold tracking-tight">W</span>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Wave Mobile Money</p>
</div>
</div>
<iconify-icon className="text-gray-400 text-lg" icon="solar:alt-arrow-down-outline"></iconify-icon>
</div>
</div>

<div>
<input className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-50 transition-all placeholder:text-gray-400" placeholder="Ajouter une description (optionnel)" type="text"/>
</div>
</div>

<div className="p-6 pt-2 pb-8 sm:pb-6 bg-white border-t border-gray-50">
<button className="w-full py-4 rounded-xl bg-green-600 text-white text-sm font-semibold shadow-lg shadow-green-600/20 hover:bg-green-700 transition-colors active:scale-[0.98]" onclick="toggleModal()">
                        Enregistrer la dépense
                    </button>
</div>
</div>
</div>
</main>


    </>
  );
}
