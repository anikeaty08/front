import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-8">

<a className="flex items-center gap-2" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded bg-slate-900 text-white">
<span className="font-semibold tracking-tighter text-lg">G</span>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">GARAGEPRO</span>
</a>

<div className="hidden md:flex items-center gap-6 text-sm font-medium">
<a className="text-slate-900" href="#">Annonces</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">Annuaire</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">Demandes</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900">
<iconify-icon icon="lucide:heart" strokeWidth="1.5" width="18"></iconify-icon>
<span>Favoris</span>
</button>
<div className="h-4 w-px bg-slate-200 hidden md:block"></div>
<button className="text-sm font-medium text-slate-900 hover:text-slate-700">Connexion</button>
<button className="flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-all">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="16"></iconify-icon>
<span>Déposer une annonce</span>
</button>
</div>
</div>
</nav>

<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">

<div className="mb-10 text-center">
<h1 className="mb-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Le marché des professionnels de l'auto</h1>
<p className="mx-auto mb-8 max-w-2xl text-lg text-slate-500">Trouvez des pièces, des véhicules ou des services de garage certifiés.</p>
<div className="mx-auto max-w-3xl relative">
<div className="relative flex items-center w-full rounded-xl bg-white shadow-sm ring-1 ring-slate-200 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 transition-all">
<div className="pl-4 text-slate-400">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input className="w-full border-none bg-transparent py-4 pl-3 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:ring-0" placeholder="Que recherchez-vous ? (ex: Pont élévateur, Moteur V6, Vidange...)" type="text"/>
<div className="pr-2">
<button className="rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 hover:bg-indigo-100 transition-colors">
                            Rechercher
                        </button>
</div>
</div>
</div>

<div className="mt-6 flex flex-wrap justify-center gap-3">
<button className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all">
<iconify-icon className="text-indigo-600" icon="lucide:wrench" strokeWidth="1.5" width="16"></iconify-icon>
                    Équipement Garage
                </button>
<button className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all">
<iconify-icon className="text-indigo-600" icon="lucide:car" strokeWidth="1.5" width="16"></iconify-icon>
                    Véhicules d'occasion
                </button>
<button className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all">
<iconify-icon className="text-indigo-600" icon="lucide:package" strokeWidth="1.5" width="16"></iconify-icon>
                    Pièces Détachées
                </button>
<button className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all">
<iconify-icon className="text-indigo-600" icon="lucide:briefcase" strokeWidth="1.5" width="16"></iconify-icon>
                    Emploi &amp; Services
                </button>
</div>
</div>
<div className="grid grid-cols-1 gap-8 lg:grid-cols-4">

<aside className="hidden lg:block lg:col-span-1">
<div className="sticky top-24 space-y-8 pr-4">

<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4 flex items-center justify-between">
                            Filtres
                            <button className="text-xs text-indigo-600 hover:text-indigo-700 font-medium">Réinitialiser</button>
</h3>

<div className="mb-6 flex items-center justify-between">
<span className="text-sm text-slate-600">Vendeurs Pro uniquement</span>
<label className="relative inline-flex cursor-pointer items-center">
<input checked="" className="peer sr-only" type="checkbox" value=""/>
<div className="peer h-5 w-9 rounded-full bg-slate-200 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-900 peer-checked:after:translate-x-full peer-checked:after:border-white focus:outline-none"></div>
</label>
</div>

<div className="space-y-3">
<p className="text-xs font-medium uppercase tracking-wider text-slate-400 mb-2">État</p>
<label className="custom-checkbox flex cursor-pointer items-center gap-3">
<input className="sr-only" type="checkbox"/>
<div className="flex h-4 w-4 items-center justify-center rounded border border-slate-300 bg-white transition-colors">
<iconify-icon className="text-white hidden" icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-600">Neuf</span>
</label>
<label className="custom-checkbox flex cursor-pointer items-center gap-3">
<input checked="" className="sr-only" type="checkbox"/>
<div className="flex h-4 w-4 items-center justify-center rounded border border-slate-300 bg-white transition-colors">
<iconify-icon className="text-white hidden" icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-600">Très bon état</span>
</label>
<label className="custom-checkbox flex cursor-pointer items-center gap-3">
<input className="sr-only" type="checkbox"/>
<div className="flex h-4 w-4 items-center justify-center rounded border border-slate-300 bg-white transition-colors">
<iconify-icon className="text-white hidden" icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-600">À rénover</span>
</label>
</div>
</div>
<div className="h-px bg-slate-200"></div>

<div>
<p className="text-xs font-medium uppercase tracking-wider text-slate-400 mb-4">Prix</p>
<div className="relative mb-6">
<div className="h-1 w-full rounded-full bg-slate-200"></div>
<div className="absolute top-0 left-0 h-1 w-2/3 rounded-full bg-slate-900"></div>
<div className="absolute top-1/2 -mt-1.5 left-0 h-3 w-3 rounded-full border border-slate-300 bg-white shadow hover:scale-110 transition-transform cursor-pointer"></div>
<div className="absolute top-1/2 -mt-1.5 left-2/3 h-3 w-3 rounded-full border border-slate-300 bg-white shadow hover:scale-110 transition-transform cursor-pointer"></div>
</div>
<div className="flex items-center justify-between gap-4">
<div className="relative flex-1 rounded-md border border-slate-200 px-3 py-2 shadow-sm">
<label className="absolute -top-2 left-2 -mt-px inline-block bg-slate-50 px-1 text-xs font-medium text-slate-500">Min</label>
<input className="block w-full border-0 p-0 bg-transparent text-sm text-slate-900 focus:ring-0" type="text" value="0 €"/>
</div>
<div className="relative flex-1 rounded-md border border-slate-200 px-3 py-2 shadow-sm">
<label className="absolute -top-2 left-2 -mt-px inline-block bg-slate-50 px-1 text-xs font-medium text-slate-500">Max</label>
<input className="block w-full border-0 p-0 bg-transparent text-sm text-slate-900 focus:ring-0" type="text" value="5000 €"/>
</div>
</div>
</div>
<div className="h-px bg-slate-200"></div>

<div className="space-y-3">
<p className="text-xs font-medium uppercase tracking-wider text-slate-400 mb-2">Région</p>
<div className="relative">
<select className="w-full appearance-none rounded-md border border-slate-200 bg-white py-2 pl-3 pr-8 text-sm text-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
<option>Île-de-France</option>
<option>Auvergne-Rhône-Alpes</option>
<option>Nouvelle-Aquitaine</option>
</select>
<iconify-icon className="pointer-events-none absolute right-3 top-2.5 text-slate-400" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
</div>
</aside>

<div className="lg:col-span-3">
<div className="mb-6 flex items-center justify-between">
<p className="text-sm text-slate-500"><span className="font-medium text-slate-900">124</span> résultats trouvés</p>
<div className="flex items-center gap-2">
<span className="text-sm text-slate-500">Trier par:</span>
<select className="border-none bg-transparent py-0 pl-2 pr-8 text-sm font-medium text-slate-900 focus:ring-0 cursor-pointer">
<option>Pertinence</option>
<option>Prix croissant</option>
<option>Plus récent</option>
</select>
</div>
</div>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:shadow-md hover:border-slate-300">
<div className="aspect-[4/3] w-full bg-slate-100 relative overflow-hidden">

<div className="absolute top-3 left-3 z-10 rounded bg-white/90 backdrop-blur px-2 py-0.5 text-xs font-medium text-indigo-700 shadow-sm border border-indigo-100">
                                Équipement
                            </div>

<div className="flex h-full w-full items-center justify-center text-slate-300">
<iconify-icon icon="lucide:wrench" strokeWidth="1" width="48"></iconify-icon>
</div>
</div>
<div className="flex flex-1 flex-col p-4">
<div className="flex items-start justify-between">
<h3 className="text-base font-medium text-slate-900 line-clamp-1 group-hover:text-indigo-600 transition-colors">Pont élévateur 2 colonnes 4T</h3>
</div>
<p className="mt-1 text-sm text-slate-500 line-clamp-2">Hydraulique, marque Ravaglioli. Révisé l'année dernière, parfait état de fonctionnement.</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-lg font-semibold tracking-tight text-slate-900">2 400 € <span className="text-xs font-normal text-slate-400">HT</span></span>
</div>
<div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
<div className="flex items-center gap-1.5 text-xs text-slate-500">
<iconify-icon icon="lucide:map-pin" width="14"></iconify-icon>
                                    Lyon (69)
                                </div>
<div className="flex items-center gap-1 text-xs font-medium text-slate-900">
<iconify-icon className="text-indigo-500" icon="lucide:badge-check" width="14"></iconify-icon>
                                    Garage Auto Plus
                                </div>
</div>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:shadow-md hover:border-slate-300">
<div className="aspect-[4/3] w-full bg-slate-100 relative overflow-hidden">
<div className="absolute top-3 left-3 z-10 rounded bg-slate-900 px-2 py-0.5 text-xs font-medium text-white shadow-sm">
                                Véhicule
                            </div>
<div className="flex h-full w-full items-center justify-center text-slate-300">
<iconify-icon icon="lucide:car-front" strokeWidth="1" width="48"></iconify-icon>
</div>
</div>
<div className="flex flex-1 flex-col p-4">
<h3 className="text-base font-medium text-slate-900 line-clamp-1 group-hover:text-indigo-600 transition-colors">Peugeot 308 II SW BlueHDi</h3>
<p className="mt-1 text-sm text-slate-500">120ch, année 2018, 145 000km. Kit distribution neuf. Idéal véhicule de courtoisie.</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-lg font-semibold tracking-tight text-slate-900">8 900 € <span className="text-xs font-normal text-slate-400">TTC</span></span>
</div>
<div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
<div className="flex items-center gap-1.5 text-xs text-slate-500">
<iconify-icon icon="lucide:map-pin" width="14"></iconify-icon>
                                    Bordeaux (33)
                                </div>
<div className="flex items-center gap-1 text-xs font-medium text-slate-900">
<iconify-icon className="text-indigo-500" icon="lucide:badge-check" width="14"></iconify-icon>
                                    Pro Occasion
                                </div>
</div>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:shadow-md hover:border-slate-300">
<div className="aspect-[4/3] w-full bg-slate-100 relative overflow-hidden">
<div className="absolute top-3 left-3 z-10 rounded bg-white/90 backdrop-blur px-2 py-0.5 text-xs font-medium text-emerald-700 shadow-sm border border-emerald-100">
                                Pièces
                            </div>
<div className="flex h-full w-full items-center justify-center text-slate-300">
<iconify-icon icon="lucide:cog" strokeWidth="1" width="48"></iconify-icon>
</div>
</div>
<div className="flex flex-1 flex-col p-4">
<h3 className="text-base font-medium text-slate-900 line-clamp-1 group-hover:text-indigo-600 transition-colors">Lot de 4 pneus Michelin Alpin</h3>
<p className="mt-1 text-sm text-slate-500">205/55 R16 91H. Usure 10%. Stock suite erreur de commande client.</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-lg font-semibold tracking-tight text-slate-900">220 € <span className="text-xs font-normal text-slate-400">Le lot</span></span>
</div>
<div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
<div className="flex items-center gap-1.5 text-xs text-slate-500">
<iconify-icon icon="lucide:map-pin" width="14"></iconify-icon>
                                    Lille (59)
                                </div>
<div className="flex items-center gap-1 text-xs font-medium text-slate-900">
                                    Méca Service
                                </div>
</div>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:shadow-md hover:border-slate-300">
<div className="aspect-[4/3] w-full bg-slate-100 relative overflow-hidden">
<div className="absolute top-3 left-3 z-10 rounded bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700 shadow-sm border border-indigo-100">
                                Service
                            </div>
<div className="flex h-full w-full items-center justify-center text-slate-300">
<iconify-icon icon="lucide:user-cog" strokeWidth="1" width="48"></iconify-icon>
</div>
</div>
<div className="flex flex-1 flex-col p-4">
<h3 className="text-base font-medium text-slate-900 line-clamp-1 group-hover:text-indigo-600 transition-colors">Diagnostic électronique multimarque</h3>
<p className="mt-1 text-sm text-slate-500">Service de passage valise et recherche de panne pour professionnels débordés.</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-lg font-semibold tracking-tight text-slate-900">Sur devis</span>
</div>
<div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
<div className="flex items-center gap-1.5 text-xs text-slate-500">
<iconify-icon icon="lucide:map-pin" width="14"></iconify-icon>
                                    Nantes (44)
                                </div>
<div className="flex items-center gap-1 text-xs font-medium text-slate-900">
<iconify-icon className="text-indigo-500" icon="lucide:badge-check" width="14"></iconify-icon>
                                    Diag Expert
                                </div>
</div>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:shadow-md hover:border-slate-300">
<div className="aspect-[4/3] w-full bg-slate-900 relative overflow-hidden flex flex-col items-center justify-center text-center p-6">
<div className="absolute top-3 left-3 z-10 rounded bg-white/20 backdrop-blur px-2 py-0.5 text-xs font-medium text-white shadow-sm">
                                Emploi
                            </div>
<iconify-icon className="text-white/80 mb-2" icon="lucide:briefcase" width="32"></iconify-icon>
<span className="text-white font-medium">Mécanicien Confirmé H/F</span>
<span className="text-white/60 text-xs mt-1">CDI - Temps plein</span>
</div>
<div className="flex flex-1 flex-col p-4">
<h3 className="text-base font-medium text-slate-900 line-clamp-1 group-hover:text-indigo-600 transition-colors">Recherche Mécanicien Confirmé</h3>
<p className="mt-1 text-sm text-slate-500">Pour concession Renault. Expérience 5 ans minimum exigée. Salaire motivant.</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-lg font-semibold tracking-tight text-slate-900">~2300 € <span className="text-xs font-normal text-slate-400">Net/mois</span></span>
</div>
<div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
<div className="flex items-center gap-1.5 text-xs text-slate-500">
<iconify-icon icon="lucide:map-pin" width="14"></iconify-icon>
                                    Paris 15 (75)
                                </div>
<div className="flex items-center gap-1 text-xs font-medium text-slate-900">
<iconify-icon className="text-indigo-500" icon="lucide:badge-check" width="14"></iconify-icon>
                                    Garage Rive Gauche
                                </div>
</div>
</div>
</div>

<div className="relative flex flex-col overflow-hidden rounded-xl border border-indigo-100 bg-indigo-50 p-6 items-center justify-center text-center">
<div className="mb-4 rounded-full bg-indigo-100 p-3 text-indigo-600">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-indigo-900">Boostez votre visibilité</h3>
<p className="mt-2 text-sm text-indigo-700/80 mb-6">Mettez vos annonces en avant et touchez plus de 5000 professionnels chaque jour.</p>
<button className="w-full rounded-lg bg-indigo-600 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 transition-colors">
                            Voir les offres Pro
                        </button>
</div>
</div>

<div className="mt-10 flex items-center justify-center gap-2">
<button className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-900 disabled:opacity-50">
<iconify-icon icon="lucide:chevron-left" width="16"></iconify-icon>
</button>
<button className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-sm font-medium text-white shadow-sm">1</button>
<button className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900">2</button>
<button className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900">3</button>
<span className="text-slate-400">...</span>
<button className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900">12</button>
<button className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-900">
<iconify-icon icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</main>

<footer className="mt-12 border-t border-slate-200 bg-white py-12">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded bg-slate-900 text-white text-xs font-bold">G</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">GARAGEPRO</span>
<span className="text-sm text-slate-400 ml-2">© 2023</span>
</div>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-slate-900" href="#">Mentions Légales</a>
<a className="hover:text-slate-900" href="#">Confidentialité</a>
<a className="hover:text-slate-900" href="#">Aide</a>
</div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="18"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="lucide:linkedin" width="18"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
