import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#eff6ff',
100: '#dbeafe',
200: '#bfdbfe',
300: '#93c5fd',
400: '#60a5fa',
500: '#3b82f6',
600: '#2563eb',
700: '#1d4ed8',
800: '#1e40af',
900: '#1e3a8a',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        let currentEmployeeTab = 'home';

        function switchBottomTab(tab) {
            currentEmployeeTab = tab;
            const allTabs = ['home', 'challenges', 'leaderboard', 'profile'];
            
            allTabs.forEach(t => {
                document.getElementById('view-' + t).classList.add('hidden');
                document.getElementById('view-' + t).classList.remove('flex');
                
                const btn = document.getElementById('btn-nav-' + t);
                const text = document.getElementById('text-nav-' + t);
                btn.classList.remove('text-brand-600');
                btn.classList.add('text-slate-400');
                text.classList.remove('text-slate-900');
                
                const icon = document.getElementById('icon-nav-' + t);
                const baseName = icon.getAttribute('data-base');
                icon.setAttribute('icon', `solar:${baseName}-linear`);
            });

            const targetView = document.getElementById('view-' + tab);
            targetView.classList.remove('hidden');
            targetView.classList.add('flex');

            const activeBtn = document.getElementById('btn-nav-' + tab);
            const activeText = document.getElementById('text-nav-' + tab);
            const activeIcon = document.getElementById('icon-nav-' + tab);
            const activeBase = activeIcon.getAttribute('data-base');

            activeBtn.classList.remove('text-slate-400');
            activeBtn.classList.add('text-brand-600');
            activeText.classList.add('text-slate-900');
            activeIcon.setAttribute('icon', `solar:${activeBase}-bold`);
        }

        function switchTab(viewType) {
            const empContainer = document.getElementById('view-employee');
            const adminView = document.getElementById('view-admin');
            const btnEmp = document.getElementById('btn-employee');
            const btnAdmin = document.getElementById('btn-admin');
            const bottomNav = document.getElementById('bottom-nav');

            if (viewType === 'employee') {
                empContainer.classList.remove('hidden');
                empContainer.classList.add('flex');
                
                adminView.classList.add('hidden');
                adminView.classList.remove('flex');
                
                btnEmp.classList.remove('text-slate-500', 'hover:text-slate-700');
                btnEmp.classList.add('bg-white', 'shadow-sm', 'text-slate-900');
                
                btnAdmin.classList.add('text-slate-500', 'hover:text-slate-700');
                btnAdmin.classList.remove('bg-white', 'shadow-sm', 'text-slate-900');

                bottomNav.style.transform = 'translateY(0)';
                
                switchBottomTab(currentEmployeeTab);
            } else {
                empContainer.classList.add('hidden');
                empContainer.classList.remove('flex');
                
                adminView.classList.remove('hidden');
                adminView.classList.add('flex');

                btnAdmin.classList.remove('text-slate-500', 'hover:text-slate-700');
                btnAdmin.classList.add('bg-white', 'shadow-sm', 'text-slate-900');
                
                btnEmp.classList.add('text-slate-500', 'hover:text-slate-700');
                btnEmp.classList.remove('bg-white', 'shadow-sm', 'text-slate-900');

                bottomNav.style.transform = 'translateY(100%)';
            }
        }

        function toggleDemo(id) {
            const el = document.getElementById(id);
            if (el.classList.contains('hidden')) {
                el.classList.remove('hidden');
            } else {
                el.classList.add('hidden');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full max-w-md bg-white h-[850px] relative shadow-2xl rounded-[32px] overflow-hidden flex flex-col border border-slate-200">
<header className="bg-white pt-8 pb-2 px-6 z-20">
<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
<img alt="User" className="w-full h-full object-cover opacity-90" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
</div>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-900 leading-none">Thomas Dubois</span>
<div className="flex items-center gap-1 mt-1">
<iconify-icon className="text-slate-400" icon="solar:buildings-linear" width="10"></iconify-icon>
<span className="text-[10px] font-medium text-slate-500">Salarié chez <span className="text-brand-600">TechCorp</span></span>
</div>
</div>
</div>
<button className="relative p-2 rounded-full hover:bg-slate-50 transition-colors">
<iconify-icon className="text-slate-600" height="20" icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
</button>
</div>
<div className="bg-slate-100 p-1 rounded-xl flex gap-1 relative mb-2">
<button className="flex-1 py-1.5 text-xs font-medium rounded-lg bg-white shadow-sm text-slate-900 transition-all text-center" id="btn-employee" onclick="switchTab('employee')">
                    Vue Salarié
                </button>
<button className="flex-1 py-1.5 text-xs font-medium rounded-lg text-slate-500 hover:text-slate-700 transition-all text-center" id="btn-admin" onclick="switchTab('admin')">
                    Vue Admin
                </button>
</div>
</header>
<main className="flex-1 overflow-y-auto no-scrollbar relative bg-white">
<div className="flex flex-col transition-opacity duration-300" id="view-employee">
<div className="flex flex-col pb-24 animate-fade-in" id="view-home">
<section className="px-6 py-2">
<div className="bg-brand-50 rounded-2xl p-5 relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-brand-100 rounded-full blur-2xl -mr-8 -mt-8 opacity-60"></div>
<div className="absolute bottom-0 left-0 w-20 h-20 bg-brand-200 rounded-full blur-xl -ml-6 -mb-6 opacity-40"></div>
<div className="relative z-10 flex flex-row items-center justify-between gap-4">
<div className="relative w-32 h-32 flex-shrink-0 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-white" cx="50%" cy="50%" fill="transparent" r="42%" stroke="currentColor" strokeWidth="8"></circle>
<circle className="text-brand-500" cx="50%" cy="50%" fill="transparent" r="42%" stroke="currentColor" stroke-dasharray="210" stroke-dashoffset="50" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<div className="absolute flex flex-col items-center">
<span className="text-2xl font-semibold tracking-tight text-slate-900">6k</span>
<span className="text-[10px] text-slate-400 font-medium">pas</span>
</div>
</div>
<div className="flex-1 flex flex-col justify-center">
<h2 className="text-slate-700 font-semibold text-sm mb-1">C'est un bon début !</h2>
<p className="text-[11px] text-slate-500 mb-4 leading-snug">Vous avez atteint 80% de votre objectif quotidien.</p>
<div className="flex items-center gap-2 bg-white/60 px-2 py-1.5 rounded-lg border border-white/50 w-full">
<div className="w-5 h-5 rounded-md bg-brand-100 flex items-center justify-center text-brand-600 font-bold text-[9px]">12</div>
<div className="flex-1 flex flex-col gap-0.5">
<div className="flex justify-between items-center">
<span className="text-[9px] text-slate-500 font-medium uppercase">Niveau</span>
<span className="text-[9px] text-brand-600 font-medium">850 XP</span>
</div>
<div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-brand-500 rounded-full" style={{width: '75%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="mt-4 w-full">
<div className="px-6 flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-500" icon="solar:calendar-star-bold-duotone"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Défis quotidiens</h3>
</div>
<span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md">1/4 complétés</span>
</div>
<div className="px-6 flex flex-col gap-3">

<div className="w-full flex flex-col p-3 rounded-xl bg-slate-50 border border-slate-100 text-left group">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-brand-500 flex items-center justify-center text-white shrink-0 shadow-sm shadow-brand-500/30">
<iconify-icon icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-slate-500 line-through">Marche matinale (2k pas)</span>
<span className="text-[9px] text-brand-600 font-medium">Validé • Entreprise +20 XP</span>
</div>
</div>
<div className="flex items-center gap-1 opacity-50">
<span className="text-[10px] font-bold text-slate-400">+20 XP</span>
</div>
</div>
<div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2 opacity-60">
<button className="text-[10px] text-slate-500 hover:text-slate-700 font-medium flex items-center gap-1 transition-colors" onclick="toggleDemo('demo-walk')">
<iconify-icon icon="solar:play-circle-linear" width="12"></iconify-icon> Voir démonstration
                                    </button>
<button className="flex items-center gap-1.5 px-2 py-1 bg-slate-100 rounded-md border border-slate-200 cursor-not-allowed">
<iconify-icon className="text-slate-400" icon="solar:user-check-rounded-linear" width="12"></iconify-icon>
<span className="text-[9px] font-semibold text-slate-400">Terminé</span>
</button>
</div>
<div className="hidden mt-2 p-2 bg-white rounded-lg border border-slate-100 animate-fade-in" id="demo-walk">
<div className="w-full h-20 bg-slate-100 rounded-md flex items-center justify-center mb-1.5">
<iconify-icon className="text-slate-300" icon="solar:play-bold" width="24"></iconify-icon>
</div>
<p className="text-[9px] text-slate-500 text-center leading-snug">Marchez à un rythme modéré pendant 15-20 minutes en extérieur.</p>
</div>
</div>

<div className="w-full flex flex-col p-3 rounded-xl bg-white border border-slate-100 shadow-sm hover:border-brand-200 hover:shadow-md transition-all text-left group">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<button className="w-5 h-5 rounded-full border-2 border-slate-200 flex items-center justify-center shrink-0 group-hover:border-brand-300 transition-colors"></button>
<div className="flex flex-col">
<span className="text-xs font-semibold text-slate-900">Monte et descends 5 fois les escaliers</span>
<span className="text-[9px] text-slate-400">Entreprise +15 XP</span>
</div>
</div>
<div className="flex items-center gap-1 bg-brand-50 px-2 py-1 rounded-md">
<iconify-icon className="text-brand-500" icon="solar:star-fall-linear" width="10"></iconify-icon>
<span className="text-[10px] font-bold text-brand-600">15 XP</span>
</div>
</div>
<div className="mt-3 flex items-center justify-between border-t border-slate-50 pt-2">
<button className="text-[10px] text-brand-500 hover:text-brand-600 font-medium flex items-center gap-1 transition-colors" onclick="toggleDemo('demo-stairs')">
<iconify-icon icon="solar:play-circle-linear" width="12"></iconify-icon> Voir démonstration
                                    </button>
<button className="flex items-center gap-1.5 px-2 py-1 bg-slate-50 hover:bg-slate-100 rounded-md transition-colors border border-slate-100">
<iconify-icon className="text-slate-500" icon="solar:user-plus-rounded-linear" width="12"></iconify-icon>
<span className="text-[9px] font-semibold text-slate-600">Inviter</span>
<span className="text-[8px] font-bold text-orange-500 bg-orange-50 px-1 rounded-sm">+XP Groupe</span>
</button>
</div>
<div className="hidden mt-2 p-2 bg-slate-50 rounded-lg border border-slate-100 animate-fade-in" id="demo-stairs">
<div className="w-full h-24 bg-slate-800 rounded-md flex items-center justify-center mb-1.5 relative overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen grayscale" src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-brand-900/20"></div>
<iconify-icon className="text-white z-10 drop-shadow-md" icon="solar:play-bold" width="28"></iconify-icon>
</div>
<p className="text-[9px] text-slate-500 text-center leading-snug px-2">Montez à un rythme régulier sans courir, utilisez la rampe si nécessaire pour plus de sécurité.</p>
</div>
</div>

<div className="w-full flex flex-col p-3 rounded-xl bg-white border border-slate-100 shadow-sm hover:border-brand-200 hover:shadow-md transition-all text-left group">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<button className="w-5 h-5 rounded-full border-2 border-slate-200 flex items-center justify-center shrink-0 group-hover:border-brand-300 transition-colors"></button>
<div className="flex flex-col">
<span className="text-xs font-semibold text-slate-900">S'étirer 5 minutes</span>
<span className="text-[9px] text-slate-400">Entreprise +10 XP</span>
</div>
</div>
<div className="flex items-center gap-1 bg-brand-50 px-2 py-1 rounded-md">
<iconify-icon className="text-brand-500" icon="solar:star-fall-linear" width="10"></iconify-icon>
<span className="text-[10px] font-bold text-brand-600">10 XP</span>
</div>
</div>
<div className="mt-3 flex items-center justify-between border-t border-slate-50 pt-2">
<button className="text-[10px] text-brand-500 hover:text-brand-600 font-medium flex items-center gap-1 transition-colors" onclick="toggleDemo('demo-stretch')">
<iconify-icon icon="solar:play-circle-linear" width="12"></iconify-icon> Voir démonstration
                                    </button>
<button className="flex items-center gap-1.5 px-2 py-1 bg-slate-50 hover:bg-slate-100 rounded-md transition-colors border border-slate-100">
<iconify-icon className="text-slate-500" icon="solar:user-plus-rounded-linear" width="12"></iconify-icon>
<span className="text-[9px] font-semibold text-slate-600">Inviter</span>
<span className="text-[8px] font-bold text-orange-500 bg-orange-50 px-1 rounded-sm">+XP Groupe</span>
</button>
</div>
<div className="hidden mt-2 p-2 bg-slate-50 rounded-lg border border-slate-100 animate-fade-in" id="demo-stretch">
<div className="w-full h-24 bg-slate-800 rounded-md flex items-center justify-center mb-1.5 relative overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen grayscale" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-brand-900/20"></div>
<iconify-icon className="text-white z-10 drop-shadow-md" icon="solar:play-bold" width="28"></iconify-icon>
</div>
<p className="text-[9px] text-slate-500 text-center leading-snug px-2">Étirez doucement la nuque, les épaules et le dos en maintenant chaque position 15 secondes.</p>
</div>
</div>

<div className="w-full flex flex-col p-3 rounded-xl bg-white border border-slate-100 shadow-sm hover:border-brand-200 hover:shadow-md transition-all text-left group">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<button className="w-5 h-5 rounded-full border-2 border-slate-200 flex items-center justify-center shrink-0 group-hover:border-brand-300 transition-colors"></button>
<div className="flex flex-col">
<span className="text-xs font-semibold text-slate-900">Faire 10 squats</span>
<span className="text-[9px] text-slate-400">Entreprise +25 XP</span>
</div>
</div>
<div className="flex items-center gap-1 bg-brand-50 px-2 py-1 rounded-md">
<iconify-icon className="text-brand-500" icon="solar:star-fall-linear" width="10"></iconify-icon>
<span className="text-[10px] font-bold text-brand-600">25 XP</span>
</div>
</div>
<div className="mt-3 flex items-center justify-between border-t border-slate-50 pt-2">
<button className="text-[10px] text-brand-500 hover:text-brand-600 font-medium flex items-center gap-1 transition-colors" onclick="toggleDemo('demo-squats')">
<iconify-icon icon="solar:play-circle-linear" width="12"></iconify-icon> Voir démonstration
                                    </button>
<button className="flex items-center gap-1.5 px-2 py-1 bg-slate-50 hover:bg-slate-100 rounded-md transition-colors border border-slate-100">
<iconify-icon className="text-slate-500" icon="solar:user-plus-rounded-linear" width="12"></iconify-icon>
<span className="text-[9px] font-semibold text-slate-600">Inviter</span>
<span className="text-[8px] font-bold text-orange-500 bg-orange-50 px-1 rounded-sm">+XP Groupe</span>
</button>
</div>
<div className="hidden mt-2 p-2 bg-slate-50 rounded-lg border border-slate-100 animate-fade-in" id="demo-squats">
<div className="w-full h-24 bg-slate-800 rounded-md flex items-center justify-center mb-1.5 relative overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen grayscale" src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-brand-900/20"></div>
<iconify-icon className="text-white z-10 drop-shadow-md" icon="solar:play-bold" width="28"></iconify-icon>
</div>
<p className="text-[9px] text-slate-500 text-center leading-snug px-2">Gardez le dos droit, fléchissez les genoux jusqu'à ce que vos cuisses soient parallèles au sol, puis remontez.</p>
</div>
</div>
</div>
</section>
<section className="px-6 mt-8">
<div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-4 text-white flex items-center justify-between shadow-lg">
<div>
<h5 className="text-xs font-semibold mb-1">Le saviez-vous ?</h5>
<p className="text-[10px] text-slate-300 opacity-90 max-w-[200px]">30min d'activité quotidienne réduit le stress de 45%.</p>
</div>
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:heart-pulse-linear" width="18"></iconify-icon>
</div>
</div>
</section>
</div>

<div className="hidden flex-col pb-24 px-6 animate-fade-in" id="view-challenges">
<div className="flex justify-between items-center mb-4 mt-2">
<h2 className="text-lg font-semibold tracking-tight text-slate-900">Tous les défis</h2>
<button className="w-8 h-8 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center hover:bg-brand-100 transition-colors">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex gap-2 mb-6">
<button className="px-3 py-1.5 bg-slate-900 text-white text-[11px] font-medium rounded-full">En cours</button>
<button className="px-3 py-1.5 bg-slate-100 text-slate-600 text-[11px] font-medium rounded-full hover:bg-slate-200 transition-colors">À venir</button>
<button className="px-3 py-1.5 bg-slate-100 text-slate-600 text-[11px] font-medium rounded-full hover:bg-slate-200 transition-colors">Terminés</button>
</div>
<div className="flex flex-col gap-4">
<div className="w-full bg-white rounded-xl border border-slate-100 p-4 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
<iconify-icon icon="solar:cup-star-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Marche vers Paris</h4>
<span className="text-[10px] text-slate-400">Équipe Marketing</span>
</div>
</div>
<span className="bg-slate-50 text-slate-500 text-[10px] px-2 py-0.5 rounded border border-slate-100 font-medium">J-5</span>
</div>
<div className="mt-3">
<div className="flex justify-between text-[10px] mb-1">
<span className="text-slate-500 font-medium">Progression équipe</span>
<span className="text-slate-900 font-semibold">78%</span>
</div>
<div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full" style={{width: '78%'}}></div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
<div className="flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?u=1"/>
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?u=2"/>
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?u=3"/>
<div className="w-6 h-6 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[9px] text-slate-500 font-medium">+4</div>
</div>
<button className="text-[11px] font-semibold text-brand-600 bg-brand-50 px-3 py-1.5 rounded-lg hover:bg-brand-100 transition-colors">
                                    Voir détails
                                </button>
</div>
</div>
<div className="w-full bg-white rounded-xl border border-slate-100 p-4 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-500 shrink-0">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Solidarité 2024</h4>
<span className="text-[10px] text-slate-400">Global - Caritatif</span>
</div>
</div>
<span className="bg-slate-50 text-slate-500 text-[10px] px-2 py-0.5 rounded border border-slate-100 font-medium">J-12</span>
</div>
<div className="mt-3">
<div className="flex justify-between text-[10px] mb-1">
<span className="text-slate-500 font-medium">Objectif global</span>
<span className="text-slate-900 font-semibold">42%</span>
</div>
<div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-brand-500 rounded-full" style={{width: '42%'}}></div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
<div className="flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?u=5"/>
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?u=6"/>
<div className="w-6 h-6 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[9px] text-slate-500 font-medium">+156</div>
</div>
<button className="text-[11px] font-semibold text-brand-600 bg-brand-50 px-3 py-1.5 rounded-lg hover:bg-brand-100 transition-colors">
                                    Voir détails
                                </button>
</div>
</div>
</div>
</div>

<div className="hidden flex-col pb-24 px-6 animate-fade-in" id="view-leaderboard">
<h2 className="text-lg font-semibold tracking-tight text-slate-900 mb-4 mt-2">Classement Global</h2>
<div className="bg-slate-100 p-1 rounded-xl flex gap-1 relative mb-8">
<button className="flex-1 py-1.5 text-xs font-medium rounded-lg bg-white shadow-sm text-slate-900 transition-all text-center">Individuel</button>
<button className="flex-1 py-1.5 text-xs font-medium rounded-lg text-slate-500 hover:text-slate-700 transition-all text-center">Par équipe</button>
</div>
<div className="flex justify-center items-end gap-2 mb-8 h-40">
<div className="flex flex-col items-center relative w-24">
<div className="absolute -top-10 flex flex-col items-center">
<img className="w-10 h-10 rounded-full border-2 border-white shadow-sm z-10" src="https://i.pravatar.cc/150?u=20"/>
<span className="text-[10px] font-semibold text-slate-700 mt-1 truncate w-20 text-center">Sarah M.</span>
</div>
<div className="w-full h-24 bg-gradient-to-t from-slate-200 to-slate-100 rounded-t-xl border border-slate-200 flex flex-col items-center justify-start pt-2">
<span className="text-xl font-bold text-slate-400">2</span>
<span className="text-[9px] font-medium text-slate-500 mt-1">45k pts</span>
</div>
</div>
<div className="flex flex-col items-center relative w-28">
<div className="absolute -top-12 flex flex-col items-center">
<div className="relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 text-yellow-500">
<iconify-icon icon="solar:crown-minimalistic-bold" width="20"></iconify-icon>
</div>
<img className="w-12 h-12 rounded-full border-2 border-brand-500 shadow-md z-10" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
</div>
<span className="text-xs font-bold text-slate-900 mt-1 truncate w-24 text-center">Vous</span>
</div>
<div className="w-full h-32 bg-gradient-to-t from-brand-200 to-brand-100 rounded-t-xl border border-brand-200 flex flex-col items-center justify-start pt-2 shadow-[0_-4px_15px_rgba(59,130,246,0.15)] z-0">
<span className="text-2xl font-bold text-brand-600">1</span>
<span className="text-[10px] font-semibold text-brand-700 mt-1">52k pts</span>
</div>
</div>
<div className="flex flex-col items-center relative w-24">
<div className="absolute -top-10 flex flex-col items-center">
<img className="w-10 h-10 rounded-full border-2 border-white shadow-sm z-10" src="https://i.pravatar.cc/150?u=30"/>
<span className="text-[10px] font-semibold text-slate-700 mt-1 truncate w-20 text-center">Marc L.</span>
</div>
<div className="w-full h-20 bg-gradient-to-t from-orange-100 to-orange-50 rounded-t-xl border border-orange-100 flex flex-col items-center justify-start pt-2">
<span className="text-xl font-bold text-orange-400">3</span>
<span className="text-[9px] font-medium text-orange-500 mt-1">41k pts</span>
</div>
</div>
</div>
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
<div className="flex items-center gap-3">
<span className="w-5 text-center text-xs font-semibold text-slate-400">4</span>
<img className="w-8 h-8 rounded-full" src="https://i.pravatar.cc/150?u=40"/>
<div className="flex flex-col">
<span className="text-xs font-semibold text-slate-900">Julie Dupont</span>
<span className="text-[9px] text-slate-400">Design</span>
</div>
</div>
<span className="text-xs font-bold text-slate-700">38.2k</span>
</div>
<div className="flex items-center justify-between bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
<div className="flex items-center gap-3">
<span className="w-5 text-center text-xs font-semibold text-slate-400">5</span>
<img className="w-8 h-8 rounded-full" src="https://i.pravatar.cc/150?u=50"/>
<div className="flex flex-col">
<span className="text-xs font-semibold text-slate-900">Antoine R.</span>
<span className="text-[9px] text-slate-400">Dev</span>
</div>
</div>
<span className="text-xs font-bold text-slate-700">35.9k</span>
</div>
</div>
</div>

<div className="hidden flex-col pb-24 px-6 animate-fade-in" id="view-profile">
<h2 className="text-lg font-semibold tracking-tight text-slate-900 mb-6 mt-2">Mon Profil</h2>
<div className="flex flex-col items-center mb-6">
<div className="relative mb-3">
<img className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<button className="absolute bottom-0 right-0 w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center text-white border-2 border-white">
<iconify-icon icon="solar:pen-linear" width="12"></iconify-icon>
</button>
</div>
<h3 className="text-lg font-semibold text-slate-900">Thomas Dubois</h3>
<p className="text-xs text-slate-500 mt-1">Équipe TechCorp • Membre depuis 1 an</p>
</div>
<div className="grid grid-cols-2 gap-3 mb-8">
<div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
<div className="w-8 h-8 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mb-2">
<iconify-icon icon="solar:routing-2-linear" width="18"></iconify-icon>
</div>
<span className="text-lg font-bold text-slate-900">1.2M</span>
<span className="text-[10px] text-slate-500 font-medium">Pas totaux</span>
</div>
<div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
<div className="w-8 h-8 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center mb-2">
<iconify-icon icon="solar:flame-linear" width="18"></iconify-icon>
</div>
<span className="text-lg font-bold text-slate-900">12</span>
<span className="text-[10px] text-slate-500 font-medium">Jours de suite</span>
</div>
</div>
<div className="flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
<button className="flex items-center justify-between p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors w-full text-left">
<div className="flex items-center gap-3">
<div className="text-slate-400 flex items-center"><iconify-icon icon="solar:settings-linear" width="20"></iconify-icon></div>
<span className="text-sm font-medium text-slate-700">Préférences</span>
</div>
<iconify-icon className="text-slate-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="flex items-center justify-between p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors w-full text-left">
<div className="flex items-center gap-3">
<div className="text-slate-400 flex items-center"><iconify-icon icon="solar:bell-bing-linear" width="20"></iconify-icon></div>
<span className="text-sm font-medium text-slate-700">Notifications</span>
</div>
<iconify-icon className="text-slate-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors w-full text-left">
<div className="flex items-center gap-3">
<div className="text-slate-400 flex items-center"><iconify-icon icon="solar:question-circle-linear" width="20"></iconify-icon></div>
<span className="text-sm font-medium text-slate-700">Aide &amp; Support</span>
</div>
<iconify-icon className="text-slate-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden flex-col pb-24 px-6 animate-fade-in" id="view-admin">
<div className="flex justify-between items-center mb-6 mt-2">
<h2 className="text-lg font-semibold tracking-tight text-slate-900">Tableau de bord</h2>
<button className="flex items-center gap-1 text-[10px] font-medium text-slate-500 border border-slate-200 px-2 py-1 rounded hover:bg-slate-50">
<iconify-icon icon="solar:export-linear"></iconify-icon> Export
                    </button>
</div>
<div className="grid grid-cols-2 gap-3 mb-6">
<div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
<div className="flex justify-between items-start mb-2">
<iconify-icon className="text-slate-400" icon="solar:users-group-two-rounded-linear" width="16"></iconify-icon>
<span className="text-[9px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded font-medium">+12%</span>
</div>
<div className="text-xl font-bold text-slate-900 tracking-tight">84%</div>
<div className="text-[10px] text-slate-500 font-medium">Taux d'engagement</div>
</div>
<div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
<div className="flex justify-between items-start mb-2">
<iconify-icon className="text-slate-400" icon="solar:walking-round-linear" width="16"></iconify-icon>
<span className="text-[9px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded font-medium">+5%</span>
</div>
<div className="text-xl font-bold text-slate-900 tracking-tight">42.5M</div>
<div className="text-[10px] text-slate-500 font-medium">Pas cumulés</div>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm mb-6">
<div className="flex justify-between items-center mb-4">
<h3 className="text-xs font-semibold text-slate-900">Activité hebdomadaire</h3>
<select className="text-[10px] border-none bg-slate-50 text-slate-500 rounded px-2 py-1 outline-none">
<option>7 derniers jours</option>
<option>Ce mois</option>
</select>
</div>
<div className="flex items-end justify-between h-32 gap-2 mt-2">
<div className="w-full bg-brand-100 rounded-t-sm relative group" style={{height: '40%'}}></div>
<div className="w-full bg-brand-100 rounded-t-sm relative group" style={{height: '65%'}}></div>
<div className="w-full bg-brand-100 rounded-t-sm relative group" style={{height: '55%'}}></div>
<div className="w-full bg-brand-500 rounded-t-sm relative group shadow-lg shadow-brand-500/20" style={{height: '85%'}}></div>
<div className="w-full bg-brand-100 rounded-t-sm relative group" style={{height: '70%'}}></div>
<div className="w-full bg-brand-100 rounded-t-sm relative group" style={{height: '60%'}}></div>
<div className="w-full bg-brand-100 rounded-t-sm relative group" style={{height: '30%'}}></div>
</div>
<div className="flex justify-between mt-2 text-[9px] text-slate-400 font-medium">
<span>Lun</span><span>Mar</span><span>Mer</span><span className="text-brand-600">Jeu</span><span>Ven</span><span>Sam</span><span>Dim</span>
</div>
</div>
<div className="flex flex-col gap-3">
<h3 className="text-xs font-semibold text-slate-900 mb-1">Classement par équipe</h3>
<div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-orange-100 flex items-center justify-center text-[10px] font-bold text-orange-600">1</div>
<div>
<div className="text-xs font-semibold text-slate-900">Sales &amp; Marketing</div>
<div className="text-[10px] text-slate-400">24 membres actifs</div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-semibold text-slate-900">12.4k</div>
<div className="text-[9px] text-slate-400">moy. pas/j</div>
</div>
</div>
<div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500">2</div>
<div>
<div className="text-xs font-semibold text-slate-900">Tech &amp; Product</div>
<div className="text-[10px] text-slate-400">18 membres actifs</div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-semibold text-slate-900">10.8k</div>
<div className="text-[9px] text-slate-400">moy. pas/j</div>
</div>
</div>
<div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-100 shadow-sm opacity-70">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500">3</div>
<div>
<div className="text-xs font-semibold text-slate-900">HR &amp; Admin</div>
<div className="text-[10px] text-slate-400">6 membres actifs</div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-semibold text-slate-900">8.2k</div>
<div className="text-[9px] text-slate-400">moy. pas/j</div>
</div>
</div>
</div>
</div>
</main>
<nav className="absolute bottom-0 w-full bg-white/90 backdrop-blur-md border-t border-slate-100 px-6 py-4 z-20 transition-transform duration-300" id="bottom-nav">
<ul className="flex justify-between items-center">
<li className="flex flex-col items-center gap-1 w-1/4">
<button className="flex flex-col items-center text-brand-600 w-full group transition-colors" id="btn-nav-home" onclick="switchBottomTab('home')">
<iconify-icon className="transition-transform group-active:scale-90" data-base="home-smile" height="24" icon="solar:home-smile-bold" id="icon-nav-home" width="24"></iconify-icon>
<span className="text-[10px] font-medium mt-1 text-slate-900" id="text-nav-home">Accueil</span>
</button>
</li>
<li className="flex flex-col items-center gap-1 w-1/4">
<button className="flex flex-col items-center text-slate-400 w-full group transition-colors" id="btn-nav-challenges" onclick="switchBottomTab('challenges')">
<iconify-icon className="transition-transform group-active:scale-90" data-base="medal-ribbon" height="24" icon="solar:medal-ribbon-linear" id="icon-nav-challenges" width="24"></iconify-icon>
<span className="text-[10px] font-medium mt-1" id="text-nav-challenges">Défis</span>
</button>
</li>
<li className="flex flex-col items-center gap-1 w-1/4">
<button className="flex flex-col items-center text-slate-400 w-full group transition-colors" id="btn-nav-leaderboard" onclick="switchBottomTab('leaderboard')">
<iconify-icon className="transition-transform group-active:scale-90" data-base="chart-square" height="24" icon="solar:chart-square-linear" id="icon-nav-leaderboard" width="24"></iconify-icon>
<span className="text-[10px] font-medium mt-1" id="text-nav-leaderboard">Classement</span>
</button>
</li>
<li className="flex flex-col items-center gap-1 w-1/4">
<button className="flex flex-col items-center text-slate-400 w-full group transition-colors" id="btn-nav-profile" onclick="switchBottomTab('profile')">
<iconify-icon className="transition-transform group-active:scale-90" data-base="user-circle" height="24" icon="solar:user-circle-linear" id="icon-nav-profile" width="24"></iconify-icon>
<span className="text-[10px] font-medium mt-1" id="text-nav-profile">Profil</span>
</button>
</li>
</ul>
</nav>
</div>


    </>
  );
}
