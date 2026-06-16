import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide icons
        lucide.createIcons();

        // Screen navigation
        function showScreen(screenId) {
            // Hide all screens
            document.querySelectorAll('.screen').forEach(screen => {
                screen.classList.add('hidden');
            });
            
            // Show selected screen
            document.getElementById(screenId).classList.remove('hidden');
            
            // Reinitialize icons
            lucide.createIcons();
            
            // Scroll to top
            window.scrollTo(0, 0);
        }

        // Show home screen by default
        showScreen('screen-home');
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="" id="app">

<div className="screen" id="screen-home">

<header className="bg-white border-b border-gray-200 sticky top-0 z-50">
<div className="px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-map-pin w-5 h-5 text-[#50C878]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<div className="">
<p className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>Votre position</p>
<p className="text-sm text-gray-900 tracking-tight font-montserrat font-semibold" style={{}}>Douala, Akwa</p>
</div>
</div>
<div className="flex items-center gap-3">
<button className="relative">
<svg className="lucide lucide-bell w-6 h-6 text-gray-700" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-[#FF6B35] rounded-full"></span>
</button>
<button className="" onclick="showScreen('screen-profile')">
<img alt="Profil" className="w-9 h-9 rounded-full border-2 border-[#50C878]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop"/>
</button>
</div>
</div>
</header>

<main className="pb-20">

<section className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] px-4 pt-6 pb-8">
<h1 className="text-2xl font-semibold text-white mb-2 tracking-tight font-montserrat" style={{transition: 'outline 0.1s ease-in-out'}}>Bonjour Denise 👋</h1>
<p className="text-blue-100 text-sm mb-5 font-montserrat font-semibold" style={{}}>De quel service avez-vous besoin aujourd'hui ?</p>

<div className="relative" onclick="showScreen('screen-search')">
<svg className="lucide lucide-search absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="focus:outline-none focus:ring-2 focus:ring-[#50C878] text-sm w-full h-12 border-0 rounded-xl pr-4 pl-12 shadow-lg" placeholder="Ex : Réparer une prise électrique" type="text"/>
</div>
</section>

<section className="px-4 -mt-4">
<div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
<div className="flex items-center justify-between mb-4">
<h2 className="text-base text-gray-900 tracking-tight font-montserrat font-semibold" style={{}}>Services populaires</h2>
<button className="text-sm text-[#50C878] font-montserrat font-semibold" style={{}}>Voir tout</button>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="bg-gradient-to-br from-[#50C878]/10 to-[#50C878]/5 border border-[#50C878]/20 rounded-xl p-4 text-left hover:border-[#50C878] hover:shadow-md transition-all">
<div className="w-12 h-12 bg-[#50C878] rounded-xl flex items-center justify-center mb-3">
<svg className="lucide lucide-zap w-6 h-6 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-sm text-gray-900 mb-1 font-montserrat font-semibold" style={{}}>Électricité</h3>
<p className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>124 techniciens</p>
</button>
<button className="bg-gradient-to-br from-[#FF6B35]/10 to-[#FF6B35]/5 border border-[#FF6B35]/20 rounded-xl p-4 text-left hover:border-[#FF6B35] hover:shadow-md transition-all">
<div className="w-12 h-12 bg-[#FF6B35] rounded-xl flex items-center justify-center mb-3">
<svg className="lucide lucide-droplet w-6 h-6 text-white" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
</div>
<h3 className="text-sm text-gray-900 mb-1 font-montserrat font-semibold" style={{}}>Plomberie</h3>
<p className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>89 techniciens</p>
</button>
<button className="bg-gradient-to-br from-[#1E3A8A]/10 to-[#1E3A8A]/5 border border-[#1E3A8A]/20 rounded-xl p-4 text-left hover:border-[#1E3A8A] hover:shadow-md transition-all">
<div className="w-12 h-12 bg-[#1E3A8A] rounded-xl flex items-center justify-center mb-3">
<svg className="lucide lucide-hammer w-6 h-6 text-white" data-lucide="hammer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path><path d="m18 15 4-4"></path><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></svg>
</div>
<h3 className="text-sm text-gray-900 mb-1 font-montserrat font-semibold" style={{}}>Rénovation</h3>
<p className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>67 techniciens</p>
</button>
<button className="bg-gradient-to-br from-gray-600/10 to-gray-600/5 border border-gray-300 rounded-xl p-4 text-left hover:border-gray-400 hover:shadow-md transition-all">
<div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mb-3">
<svg className="lucide lucide-wind w-6 h-6 text-white" data-lucide="wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path></svg>
</div>
<h3 className="text-sm text-gray-900 mb-1 font-montserrat font-semibold" style={{}}>Climatisation</h3>
<p className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>43 techniciens</p>
</button>
</div>
</div>
</section>

<section className="px-4 mt-6">
<div className="flex items-center justify-between mb-4">
<h2 className="text-base text-gray-900 tracking-tight font-montserrat font-semibold" style={{}}>Techniciens à proximité</h2>
<button className="text-sm text-[#50C878] font-montserrat font-semibold" onclick="showScreen('screen-map')" style={{}}>Voir carte</button>
</div>
<div className="space-y-3">
<div className="bg-white rounded-xl border border-gray-200 p-4 hover:border-[#50C878] hover:shadow-md transition-all">
<div className="flex gap-3">
<img alt="Ahmed" className="w-14 h-14 rounded-xl object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&amp;h=120&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-start justify-between mb-1">
<div className="">
<div className="flex items-center gap-2">
<h3 className="text-sm text-gray-900 font-montserrat font-semibold" style={{}}>Ahmed Nkoulou</h3>
<div className="flex items-center gap-1 bg-[#10B981]/10 px-2 py-0.5 rounded-md">
<svg className="lucide lucide-shield-check w-3 h-3 text-[#10B981]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-xs text-[#10B981] font-montserrat font-semibold" style={{}}>Vérifié</span>
</div>
</div>
<p className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>Électricien · Plombier</p>
</div>
</div>
<div className="flex items-center gap-4 mt-2">
<div className="flex items-center gap-1">
<svg className="lucide lucide-star w-4 h-4 text-[#FF6B35] fill-[#FF6B35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-sm text-gray-900 font-montserrat font-semibold" style={{}}>4.8</span>
<span className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>(127)</span>
</div>
<div className="flex items-center gap-1 text-gray-600">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-xs font-montserrat font-semibold" style={{}}>1.2 km</span>
</div>
<div className="flex items-center gap-1 text-gray-900">
<span className="text-sm font-montserrat font-semibold" style={{}}>5 000 FCFA</span>
<span className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>/h</span>
</div>
</div>
</div>
</div>
<div className="flex gap-2 mt-3 pt-3 border-t border-gray-100">
<button className="flex-1 h-10 bg-[#50C878] text-white text-sm rounded-lg hover:bg-[#45B369] transition-colors font-montserrat font-semibold" onclick="showScreen('screen-booking')" style={{}}>
                                    Demander
                                </button>
<button className="h-10 w-10 border border-gray-300 rounded-lg flex items-center justify-center hover:border-[#50C878] hover:bg-[#50C878]/5 transition-all" onclick="showScreen('screen-profile-tech')">
<svg className="lucide lucide-eye w-5 h-5 text-gray-700" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-4 hover:border-[#50C878] hover:shadow-md transition-all">
<div className="flex gap-3">
<img alt="Pascal" className="w-14 h-14 rounded-xl object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&amp;h=120&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-start justify-between mb-1">
<div className="">
<div className="flex items-center gap-2">
<h3 className="text-sm text-gray-900 font-montserrat font-semibold" style={{}}>Pascal Mbida</h3>
<div className="flex items-center gap-1 bg-[#10B981]/10 px-2 py-0.5 rounded-md">
<svg className="lucide lucide-shield-check w-3 h-3 text-[#10B981]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-xs text-[#10B981] font-montserrat font-semibold" style={{}}>Vérifié</span>
</div>
</div>
<p className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>Rénovation · Maçonnerie</p>
</div>
</div>
<div className="flex items-center gap-4 mt-2">
<div className="flex items-center gap-1">
<svg className="lucide lucide-star w-4 h-4 text-[#FF6B35] fill-[#FF6B35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-sm text-gray-900 font-montserrat font-semibold" style={{}}>4.9</span>
<span className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>(89)</span>
</div>
<div className="flex items-center gap-1 text-gray-600">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-xs font-montserrat font-semibold" style={{}}>2.4 km</span>
</div>
<div className="flex items-center gap-1 text-gray-900">
<span className="text-sm font-montserrat font-semibold" style={{}}>8 000 FCFA</span>
<span className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>/h</span>
</div>
</div>
</div>
</div>
<div className="flex gap-2 mt-3 pt-3 border-t border-gray-100">
<button className="flex-1 h-10 bg-[#50C878] text-white text-sm rounded-lg hover:bg-[#45B369] transition-colors font-montserrat font-semibold" onclick="showScreen('screen-booking')" style={{}}>
                                    Demander
                                </button>
<button className="h-10 w-10 border border-gray-300 rounded-lg flex items-center justify-center hover:border-[#50C878] hover:bg-[#50C878]/5 transition-all" onclick="showScreen('screen-profile-tech')">
<svg className="lucide lucide-eye w-5 h-5 text-gray-700" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle className="" cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-4 hover:border-[#50C878] hover:shadow-md transition-all">
<div className="flex gap-3">
<img alt="Jean" className="w-14 h-14 rounded-xl object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&amp;h=120&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-start justify-between mb-1">
<div>
<div className="flex items-center gap-2">
<h3 className="text-sm text-gray-900 font-montserrat font-semibold" style={{}}>Jean Fotso</h3>
<div className="flex items-center gap-1 bg-[#10B981]/10 px-2 py-0.5 rounded-md">
<svg className="lucide lucide-shield-check w-3 h-3 text-[#10B981]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-xs text-[#10B981] font-montserrat font-semibold" style={{}}>Vérifié</span>
</div>
</div>
<p className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>Climatisation · Froid</p>
</div>
</div>
<div className="flex items-center gap-4 mt-2">
<div className="flex items-center gap-1">
<svg className="lucide lucide-star w-4 h-4 text-[#FF6B35] fill-[#FF6B35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-sm text-gray-900 font-montserrat font-semibold" style={{}}>5.0</span>
<span className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>(56)</span>
</div>
<div className="flex items-center gap-1 text-gray-600">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-xs font-montserrat font-semibold" style={{}}>0.8 km</span>
</div>
<div className="flex items-center gap-1 text-gray-900">
<span className="text-sm font-montserrat font-semibold" style={{}}>12 000 FCFA</span>
<span className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>/h</span>
</div>
</div>
</div>
</div>
<div className="flex gap-2 mt-3 pt-3 border-t border-gray-100">
<button className="flex-1 h-10 bg-[#50C878] text-white text-sm rounded-lg hover:bg-[#45B369] transition-colors font-montserrat font-semibold" onclick="showScreen('screen-booking')" style={{}}>
                                    Demander
                                </button>
<button className="h-10 w-10 border border-gray-300 rounded-lg flex items-center justify-center hover:border-[#50C878] hover:bg-[#50C878]/5 transition-all" onclick="showScreen('screen-profile-tech')">
<svg className="lucide lucide-eye text-gray-700 w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="edit" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(55, 65, 81)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path></svg>
</button>
</div>
</div>
</div>
</section>

<section className="px-4 mt-6">
<div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C61] rounded-2xl p-5 text-white relative overflow-hidden">
<div className="relative z-10">
<h3 className="text-lg mb-1 tracking-tight font-montserrat font-semibold" style={{}}>Vous êtes technicien ?</h3>
<p className="text-sm text-white/90 mb-4 font-montserrat font-semibold" style={{}}>Rejoignez notre réseau et trouvez plus de clients</p>
<button className="h-10 px-5 bg-white text-[#FF6B35] text-sm rounded-lg hover:bg-gray-50 transition-colors font-montserrat font-semibold" style={{}}>
                                S'inscrire maintenant
                            </button>
</div>
<div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full"></div>
<div className="absolute -right-4 top-4 w-20 h-20 bg-white/10 rounded-full"></div>
</div>
</section>
</main>

<nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
<div className="flex items-center justify-around">
<button className="flex flex-col items-center gap-1 py-2 px-3 text-[#50C878]" onclick="showScreen('screen-home')">
<svg className="lucide lucide-home w-6 h-6" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-xs font-montserrat font-semibold" style={{}}>Accueil</span>
</button>
<button className="flex flex-col hover:text-gray-900 transition-colors text-gray-500 pt-2 pr-3 pb-2 pl-3 gap-x-1 gap-y-1 items-center" onclick="showScreen('screen-search')">
<svg className="lucide lucide-search w-6 h-6" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="text-xs font-montserrat font-semibold" style={{}}>Rechercher</span>
</button>
<button className="flex flex-col items-center gap-1 py-2 px-3 text-gray-500 hover:text-gray-900 transition-colors" onclick="showScreen('screen-history')">
<svg className="lucide lucide-clock w-6 h-6" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-xs font-montserrat font-semibold" style={{}}>Historique</span>
</button>
<button className="flex flex-col items-center gap-1 py-2 px-3 text-gray-500 hover:text-gray-900 transition-colors" onclick="showScreen('screen-profile')">
<svg className="lucide lucide-user w-6 h-6" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-xs font-montserrat font-semibold" style={{}}>Profil</span>
</button>
</div>
</nav>
</div>

<div className="screen hidden" id="screen-search">
<header className="bg-white border-b border-gray-200 sticky top-0 z-50">
<div className="px-4 py-3 flex items-center gap-3">
<button className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors" onclick="showScreen('screen-home')">
<svg className="lucide lucide-arrow-left w-5 h-5 text-gray-700" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<div className="flex-1 relative">
<svg className="lucide lucide-search absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full h-11 pl-12 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#50C878] focus:border-transparent text-sm" placeholder="Rechercher un service..." type="text"/>
</div>
</div>
</header>
<main className="pb-20">

<section className="px-4 py-4 bg-white border-b border-gray-200">
<div className="flex items-center gap-2 overflow-x-auto pb-2">
<button className="flex items-center gap-2 px-4 h-9 bg-[#50C878] text-white text-sm rounded-lg whitespace-nowrap font-montserrat font-semibold" style={{}}>
<svg className="lucide lucide-sliders-horizontal w-4 h-4" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3"></path><path d="M12 19H3"></path><path d="M14 3v4"></path><path d="M16 17v4"></path><path d="M21 12h-9"></path><path d="M21 19h-5"></path><path d="M21 5h-7"></path><path d="M8 10v4"></path><path d="M8 12H3"></path></svg>
                            Filtres
                        </button>
<button className="px-4 h-9 border border-gray-300 text-gray-700 text-sm rounded-lg whitespace-nowrap hover:border-[#50C878] hover:bg-[#50C878]/5 transition-all font-montserrat font-semibold" style={{}}>
                            Prix
                        </button>
<button className="px-4 h-9 border border-gray-300 text-gray-700 text-sm rounded-lg whitespace-nowrap hover:border-[#50C878] hover:bg-[#50C878]/5 transition-all font-montserrat font-semibold" style={{}}>
                            Distance
                        </button>
<button className="px-4 h-9 border border-gray-300 text-gray-700 text-sm rounded-lg whitespace-nowrap hover:border-[#50C878] hover:bg-[#50C878]/5 transition-all font-montserrat font-semibold" style={{}}>
                            Note
                        </button>
<button className="px-4 h-9 border border-gray-300 text-gray-700 text-sm rounded-lg whitespace-nowrap hover:border-[#50C878] hover:bg-[#50C878]/5 transition-all font-montserrat font-semibold" style={{}}>
                            Disponibilité
                        </button>
</div>
</section>

<section className="px-4 pt-4">
<h3 className="text-sm text-gray-900 mb-3 font-montserrat font-semibold" style={{}}>Recherches récentes</h3>
<div className="space-y-2">
<button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-100 transition-colors">
<div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-clock w-5 h-5 text-gray-500" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<span className="flex-1 text-left text-sm text-gray-700 font-montserrat font-semibold" style={{}}>Réparer une prise électrique</span>
</button>
<button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-100 transition-colors">
<div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-clock w-5 h-5 text-gray-500" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<span className="flex-1 text-left text-sm text-gray-700 font-montserrat font-semibold" style={{}}>Installation climatiseur</span>
</button>
<button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-100 transition-colors">
<div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-clock w-5 h-5 text-gray-500" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<span className="flex-1 text-left text-sm text-gray-700 font-montserrat font-semibold" style={{}}>Plombier d'urgence</span>
</button>
</div>
</section>

<section className="px-4 pt-6">
<h3 className="text-sm text-gray-900 mb-3 font-montserrat font-semibold" style={{}}>Services populaires</h3>
<div className="grid grid-cols-2 gap-3">
<button className="p-4 border border-gray-200 rounded-xl text-left hover:border-[#50C878] hover:shadow-md transition-all">
<div className="w-10 h-10 bg-[#50C878]/10 rounded-lg flex items-center justify-center mb-2">
<svg className="lucide lucide-zap w-5 h-5 text-[#50C878]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h4 className="text-sm text-gray-900 mb-0.5 font-montserrat font-semibold" style={{}}>Installation électrique</h4>
<p className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>À partir de 5 000 FCFA</p>
</button>
<button className="p-4 border border-gray-200 rounded-xl text-left hover:border-[#50C878] hover:shadow-md transition-all">
<div className="w-10 h-10 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-2">
<svg className="lucide lucide-droplet w-5 h-5 text-[#FF6B35]" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
</div>
<h4 className="text-sm text-gray-900 mb-0.5 font-montserrat font-semibold" style={{}}>Fuite d'eau</h4>
<p className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>À partir de 3 000 FCFA</p>
</button>
<button className="p-4 border border-gray-200 rounded-xl text-left hover:border-[#50C878] hover:shadow-md transition-all">
<div className="w-10 h-10 bg-gray-700/10 rounded-lg flex items-center justify-center mb-2">
<svg className="lucide lucide-wind w-5 h-5 text-gray-700" data-lucide="wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path></svg>
</div>
<h4 className="text-sm text-gray-900 mb-0.5 font-montserrat font-semibold" style={{}}>Entretien climatiseur</h4>
<p className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>À partir de 8 000 FCFA</p>
</button>
<button className="p-4 border border-gray-200 rounded-xl text-left hover:border-[#50C878] hover:shadow-md transition-all">
<div className="w-10 h-10 bg-[#1E3A8A]/10 rounded-lg flex items-center justify-center mb-2">
<svg className="lucide lucide-paintbrush w-5 h-5 text-[#1E3A8A]" data-lucide="paintbrush" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m14.622 17.897-10.68-2.913"></path><path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"></path><path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"></path></svg>
</div>
<h4 className="text-sm text-gray-900 mb-0.5 font-montserrat font-semibold" style={{}}>Peinture murale</h4>
<p className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>À partir de 10 000 FCFA</p>
</button>
</div>
</section>
</main>

<nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
<div className="flex items-center justify-around">
<button className="flex flex-col items-center gap-1 py-2 px-3 text-gray-500 hover:text-gray-900 transition-colors" onclick="showScreen('screen-home')">
<svg className="lucide lucide-home w-6 h-6" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-xs font-montserrat font-semibold" style={{}}>Accueil</span>
</button>
<button className="flex flex-col items-center gap-1 py-2 px-3 text-[#50C878]" onclick="showScreen('screen-search')">
<svg className="lucide lucide-search w-6 h-6" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="text-xs font-montserrat font-semibold" style={{}}>Rechercher</span>
</button>
<button className="flex flex-col items-center gap-1 py-2 px-3 text-gray-500 hover:text-gray-900 transition-colors" onclick="showScreen('screen-history')">
<svg className="lucide lucide-clock w-6 h-6" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-xs font-montserrat font-semibold" style={{}}>Historique</span>
</button>
<button className="flex flex-col items-center gap-1 py-2 px-3 text-gray-500 hover:text-gray-900 transition-colors" onclick="showScreen('screen-profile')">
<svg className="lucide lucide-user w-6 h-6" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-xs font-montserrat font-semibold" style={{}}>Profil</span>
</button>
</div>
</nav>
</div>

<div className="screen hidden" id="screen-profile-tech">
<header className="bg-white border-b border-gray-200 sticky top-0 z-50">
<div className="px-4 py-3 flex items-center justify-between">
<button className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors" onclick="showScreen('screen-home')">
<svg className="lucide lucide-arrow-left w-5 h-5 text-gray-700" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<h1 className="text-base text-gray-900 font-montserrat font-semibold" style={{}}>Profil du technicien</h1>
<button className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors">
<svg className="lucide lucide-share-2 w-5 h-5 text-gray-700" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</button>
</div>
</header>
<main className="pb-24">

<section className="px-4 pt-6 pb-4 bg-white">
<div className="flex items-start gap-4 mb-4">
<img alt="Ahmed" className="w-20 h-20 rounded-2xl object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&amp;h=200&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-start justify-between mb-2">
<div>
<div className="flex items-center gap-2 mb-1">
<h2 className="text-lg text-gray-900 tracking-tight font-montserrat font-semibold" style={{}}>Ahmed Nkoulou</h2>
<div className="flex items-center gap-1 bg-[#10B981]/10 px-2 py-0.5 rounded-md">
<svg className="lucide lucide-shield-check w-3.5 h-3.5 text-[#10B981]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-xs text-[#10B981] font-montserrat font-semibold" style={{}}>Vérifié</span>
</div>
</div>
<p className="text-sm text-gray-600 mb-2 font-montserrat font-semibold" style={{}}>Électricien · Plombier</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-1">
<svg className="lucide lucide-star w-5 h-5 text-[#FF6B35] fill-[#FF6B35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-base text-gray-900 font-montserrat font-semibold" style={{}}>4.8</span>
<span className="text-sm text-gray-500 font-montserrat font-semibold" style={{}}>(127 avis)</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100">
<div className="text-center">
<div className="text-xl text-gray-900 mb-1 font-montserrat font-semibold" style={{}}>127</div>
<div className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>Interventions</div>
</div>
<div className="text-center border-l border-r border-gray-100">
<div className="text-xl text-gray-900 mb-1 font-montserrat font-semibold" style={{}}>98%</div>
<div className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>Satisfaction</div>
</div>
<div className="text-center">
<div className="text-xl text-gray-900 mb-1 font-montserrat font-semibold" style={{}}>3 ans</div>
<div className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>Expérience</div>
</div>
</div>
</section>

<section className="px-4 py-4 bg-gray-50">
<h3 className="text-sm text-gray-900 mb-2 font-montserrat font-semibold" style={{}}>À propos</h3>
<p className="text-sm text-gray-600 leading-relaxed font-montserrat font-semibold" style={{}}>
                        Électricien et plombier qualifié avec plus de 3 ans d'expérience. Intervention rapide et travail soigné garanti. Disponible 7j/7 pour les urgences.
                    </p>
</section>

<section className="px-4 py-4 bg-white">
<h3 className="text-sm text-gray-900 mb-3 font-montserrat font-semibold" style={{}}>Services et tarifs</h3>
<div className="space-y-2">
<div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-[#50C878]/10 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-zap w-5 h-5 text-[#50C878]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div>
<h4 className="text-sm text-gray-900 font-montserrat font-semibold" style={{}}>Installation électrique</h4>
<p className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>Prises, tableaux, câblage</p>
</div>
</div>
<div className="text-right">
<div className="text-sm text-gray-900 font-montserrat font-semibold" style={{}}>5 000 FCFA</div>
<div className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>/heure</div>
</div>
</div>
<div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-droplet w-5 h-5 text-[#FF6B35]" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
</div>
<div>
<h4 className="text-sm text-gray-900 font-montserrat font-semibold" style={{}}>Plomberie</h4>
<p className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>Fuites, robinetterie, WC</p>
</div>
</div>
<div className="text-right">
<div className="text-sm text-gray-900 font-montserrat font-semibold" style={{}}>6 000 FCFA</div>
<div className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>/heure</div>
</div>
</div>
</div>
</section>

<section className="px-4 py-4 bg-gray-50">
<h3 className="text-sm text-gray-900 mb-3 font-montserrat font-semibold" style={{}}>Disponibilité</h3>
<div className="flex items-center gap-2 mb-3">
<div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
<span className="text-sm text-[#10B981] font-montserrat font-semibold" style={{}}>Disponible maintenant</span>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between text-sm">
<span className="text-gray-600 font-montserrat font-semibold" style={{}}>Lundi - Vendredi</span>
<span className="text-gray-900 font-montserrat font-semibold" style={{}}>8h00 - 18h00</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-gray-600 font-montserrat font-semibold" style={{}}>Samedi</span>
<span className="text-gray-900 font-montserrat font-semibold" style={{}}>9h00 - 14h00</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-gray-600 font-montserrat font-semibold" style={{}}>Dimanche</span>
<span className="text-gray-900 font-montserrat font-semibold" style={{}}>Urgences uniquement</span>
</div>
</div>
</section>

<section className="px-4 py-4 bg-white">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm text-gray-900 font-montserrat font-semibold" style={{}}>Avis clients</h3>
<button className="text-sm text-[#50C878] font-montserrat font-semibold" style={{}}>Voir tous</button>
</div>
<div className="space-y-3">
<div className="p-4 border border-gray-200 rounded-lg">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-3">
<img alt="Marie" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;h=100&amp;fit=crop"/>
<div>
<h4 className="text-sm text-gray-900 font-montserrat font-semibold" style={{}}>Marie Kouam</h4>
<div className="flex items-center gap-1 mt-0.5">
<svg className="lucide lucide-star w-3.5 h-3.5 text-[#FF6B35] fill-[#FF6B35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 text-[#FF6B35] fill-[#FF6B35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 text-[#FF6B35] fill-[#FF6B35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 text-[#FF6B35] fill-[#FF6B35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 text-[#FF6B35] fill-[#FF6B35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
</div>
<span className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>Il y a 2 jours</span>
</div>
<p className="text-sm text-gray-600 leading-relaxed font-montserrat font-semibold" style={{}}>
                                Excellent travail ! Très professionnel et rapide. A réparé ma prise défectueuse en moins de 30 minutes. Je recommande vivement.
                            </p>
</div>
<div className="p-4 border border-gray-200 rounded-lg">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-3">
<img alt="Paul" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;h=100&amp;fit=crop"/>
<div>
<h4 className="text-sm text-gray-900 font-montserrat font-semibold" style={{}}>Paul Ebode</h4>
<div className="flex items-center gap-1 mt-0.5">
<svg className="lucide lucide-star w-3.5 h-3.5 text-[#FF6B35] fill-[#FF6B35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 text-[#FF6B35] fill-[#FF6B35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 text-[#FF6B35] fill-[#FF6B35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 text-[#FF6B35] fill-[#FF6B35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 text-gray-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
</div>
<span className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>Il y a 1 semaine</span>
</div>
<p className="text-sm text-gray-600 leading-relaxed font-montserrat font-semibold" style={{}}>
                                Bon technicien, ponctuel et efficace. Prix raisonnable pour la qualité du service.
                            </p>
</div>
</div>
</section>
</main>

<div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
<div className="flex gap-3">
<button className="h-12 w-12 border-2 border-[#50C878] rounded-xl flex items-center justify-center hover:bg-[#50C878]/5 transition-colors">
<svg className="lucide lucide-phone w-5 h-5 text-[#50C878]" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</button>
<button className="h-12 w-12 border-2 border-[#50C878] rounded-xl flex items-center justify-center hover:bg-[#50C878]/5 transition-colors">
<svg className="lucide lucide-message-circle w-5 h-5 text-[#50C878]" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</button>
<button className="flex-1 h-12 bg-[#50C878] text-white text-sm rounded-xl hover:bg-[#45B369] transition-colors font-montserrat font-semibold" onclick="showScreen('screen-booking')" style={{}}>
                        Demander une intervention
                    </button>
</div>
</div>
</div>

<div className="screen hidden" id="screen-booking">
<header className="bg-white border-b border-gray-200 sticky top-0 z-50">
<div className="px-4 py-3 flex items-center justify-between">
<button className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors" onclick="showScreen('screen-profile-tech')">
<svg className="lucide lucide-arrow-left w-5 h-5 text-gray-700" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<h1 className="text-base text-gray-900 font-montserrat font-semibold" style={{}}>Nouvelle demande</h1>
<div className="w-9"></div>
</div>
</header>
<main className="pb-24">

<section className="px-4 pt-4 pb-4 bg-white border-b border-gray-200">
<div className="flex items-center gap-3">
<img alt="Ahmed" className="w-14 h-14 rounded-xl object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&amp;h=120&amp;fit=crop"/>
<div className="flex-1">
<h3 className="text-sm text-gray-900 mb-0.5 font-montserrat font-semibold" style={{}}>Ahmed Nkoulou</h3>
<p className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>Électricien · Plombier</p>
<div className="flex items-center gap-2 mt-1">
<div className="flex items-center gap-1">
<svg className="lucide lucide-star w-3.5 h-3.5 text-[#FF6B35] fill-[#FF6B35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-xs text-gray-900 font-montserrat font-semibold" style={{}}>4.8</span>
</div>
<span className="text-xs text-gray-400 font-montserrat font-semibold" style={{}}>·</span>
<span className="text-xs text-gray-600 font-montserrat font-semibold" style={{}}>1.2 km</span>
</div>
</div>
</div>
</section>

<section className="px-4 pt-4 pb-4 bg-gray-50">
<label className="block text-sm text-gray-900 mb-3 font-montserrat font-semibold" style={{}}>Type de service</label>
<div className="space-y-2">
<button className="w-full flex items-center justify-between p-4 bg-white border-2 border-[#50C878] rounded-xl text-left">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-[#50C878]/10 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-zap w-5 h-5 text-[#50C878]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div>
<h4 className="text-sm text-gray-900 font-montserrat font-semibold" style={{}}>Installation électrique</h4>
<p className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>5 000 FCFA/h</p>
</div>
</div>
<div className="w-5 h-5 bg-[#50C878] rounded-full flex items-center justify-center">
<svg className="lucide lucide-check w-3.5 h-3.5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</button>
<button className="w-full flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl text-left hover:border-[#50C878] transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-droplet w-5 h-5 text-[#FF6B35]" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
</div>
<div>
<h4 className="text-sm text-gray-900 font-montserrat font-semibold" style={{}}>Plomberie</h4>
<p className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>6 000 FCFA/h</p>
</div>
</div>
</button>
</div>
</section>

<section className="px-4 pt-4 pb-4 bg-white">
<label className="block text-sm text-gray-900 mb-3 font-montserrat font-semibold" style={{}}>Date et heure</label>
<div className="grid grid-cols-2 gap-3 mb-3">
<div>
<label className="block text-xs text-gray-600 mb-2 font-montserrat font-semibold" style={{}}>Date</label>
<div className="relative">
<svg className="lucide lucide-calendar absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<input className="w-full h-11 pl-10 pr-4 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#50C878] focus:border-transparent" type="date" value="2024-01-15"/>
</div>
</div>
<div>
<label className="block text-xs text-gray-600 mb-2 font-montserrat font-semibold" style={{}}>Heure</label>
<div className="relative">
<svg className="lucide lucide-clock absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<input className="w-full h-11 pl-10 pr-4 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#50C878] focus:border-transparent" type="time" value="14:00"/>
</div>
</div>
</div>

<div className="flex gap-2 overflow-x-auto pb-2">
<button className="px-4 h-9 bg-[#50C878] text-white text-xs rounded-lg whitespace-nowrap font-montserrat font-semibold" style={{}}>
                            Maintenant
                        </button>
<button className="px-4 h-9 border border-gray-300 text-gray-700 text-xs rounded-lg whitespace-nowrap hover:border-[#50C878] hover:bg-[#50C878]/5 transition-all font-montserrat font-semibold" style={{}}>
                            Dans 1h
                        </button>
<button className="px-4 h-9 border border-gray-300 text-gray-700 text-xs rounded-lg whitespace-nowrap hover:border-[#50C878] hover:bg-[#50C878]/5 transition-all font-montserrat font-semibold" style={{}}>
                            Dans 2h
                        </button>
<button className="px-4 h-9 border border-gray-300 text-gray-700 text-xs rounded-lg whitespace-nowrap hover:border-[#50C878] hover:bg-[#50C878]/5 transition-all font-montserrat font-semibold" style={{}}>
                            Demain
                        </button>
</div>
</section>

<section className="px-4 pt-4 pb-4 bg-gray-50">
<label className="block text-sm text-gray-900 mb-3 font-montserrat font-semibold" style={{}}>Adresse d'intervention</label>
<div className="relative mb-3">
<svg className="lucide lucide-map-pin absolute left-3 top-3 w-4 h-4 text-gray-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<input className="w-full h-11 pl-10 pr-4 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#50C878] focus:border-transparent" type="text" value="Akwa, Rue de la Joie"/>
</div>
<button className="flex items-center gap-2 text-sm text-[#50C878] font-montserrat font-semibold" style={{}}>
<svg className="lucide lucide-crosshair w-4 h-4" data-lucide="crosshair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
                        Utiliser ma position actuelle
                    </button>
</section>

<section className="px-4 pt-4 pb-4 bg-white">
<label className="block text-sm text-gray-900 mb-3 font-montserrat font-semibold" style={{}}>Description du problème</label>
<textarea className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#50C878] focus:border-transparent resize-none font-montserrat font-semibold" placeholder="Décrivez le problème en détail..." rows="4" style={{}}>Ma prise électrique dans le salon ne fonctionne plus depuis ce matin.</textarea>
</section>

<section className="px-4 pt-4 pb-4 bg-gray-50">
<label className="block text-sm text-gray-900 mb-3 font-montserrat font-semibold" style={{}}>Photos (optionnel)</label>
<div className="flex gap-3 overflow-x-auto pb-2">
<button className="w-20 h-20 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center hover:border-[#50C878] hover:bg-[#50C878]/5 transition-all">
<svg className="lucide lucide-plus w-5 h-5 text-gray-400 mb-1" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>Ajouter</span>
</button>
<div className="w-20 h-20 rounded-lg bg-gray-200"></div>
<div className="w-20 h-20 rounded-lg bg-gray-200"></div>
</div>
</section>

<section className="px-4 pt-4 pb-4 bg-white border-t border-gray-200">
<h3 className="text-sm text-gray-900 mb-3 font-montserrat font-semibold" style={{}}>Estimation</h3>
<div className="space-y-2">
<div className="flex items-center justify-between text-sm">
<span className="text-gray-600 font-montserrat font-semibold" style={{}}>Tarif horaire</span>
<span className="text-gray-900 font-montserrat font-semibold" style={{}}>5 000 FCFA</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-gray-600 font-montserrat font-semibold" style={{}}>Durée estimée</span>
<span className="text-gray-900 font-montserrat font-semibold" style={{}}>1-2 heures</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-gray-600 font-montserrat font-semibold" style={{}}>Frais de déplacement</span>
<span className="text-gray-900 font-montserrat font-semibold" style={{}}>1 000 FCFA</span>
</div>
<div className="pt-2 border-t border-gray-100 flex items-center justify-between">
<span className="text-sm text-gray-900 font-montserrat font-semibold" style={{}}>Total estimé</span>
<span className="text-lg text-[#50C878] font-montserrat font-semibold" style={{}}>6 000 - 11 000 FCFA</span>
</div>
</div>
</section>
</main>

<div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
<button className="w-full h-12 bg-[#50C878] text-white text-sm rounded-xl hover:bg-[#45B369] transition-colors font-montserrat font-semibold" onclick="showScreen('screen-confirmation')" style={{}}>
                    Confirmer la demande
                </button>
<p className="text-xs text-center text-gray-500 mt-2 font-montserrat font-semibold" style={{}}>
                    Vous ne serez pas facturé avant la confirmation du technicien
                </p>
</div>
</div>

<div className="screen hidden" id="screen-confirmation">
<header className="bg-white border-b border-gray-200">
<div className="px-4 py-3 flex items-center justify-between">
<div className="w-9"></div>
<h1 className="text-base text-gray-900 font-montserrat font-semibold" style={{}}>Demande envoyée</h1>
<button className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors" onclick="showScreen('screen-home')">
<svg className="lucide lucide-x w-5 h-5 text-gray-700" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</header>
<main className="px-4 pt-8 pb-24">

<div className="flex flex-col items-center text-center mb-8">
<div className="w-20 h-20 bg-[#50C878]/10 rounded-full flex items-center justify-center mb-4">
<svg className="lucide lucide-check w-10 h-10 text-[#50C878]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<h2 className="text-xl text-gray-900 mb-2 tracking-tight font-montserrat font-semibold" style={{}}>Demande envoyée avec succès !</h2>
<p className="text-sm text-gray-600 font-montserrat font-semibold" style={{}}>Ahmed Nkoulou a été notifié de votre demande. Vous recevrez une réponse dans quelques minutes.</p>
</div>

<div className="bg-white border border-gray-200 rounded-2xl p-4 mb-4">
<h3 className="text-sm text-gray-900 mb-3 font-montserrat font-semibold" style={{}}>Détails de la demande</h3>
<div className="space-y-3">
<div className="flex items-start gap-3">
<div className="w-10 h-10 bg-[#50C878]/10 rounded-lg flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-zap w-5 h-5 text-[#50C878]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="flex-1">
<h4 className="text-sm text-gray-900 font-montserrat font-semibold" style={{}}>Installation électrique</h4>
<p className="text-xs text-gray-500 mt-0.5 font-montserrat font-semibold" style={{}}>Ma prise électrique dans le salon ne fonctionne plus...</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-calendar w-5 h-5 text-gray-600" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<div className="flex-1">
<h4 className="text-sm text-gray-900 font-montserrat font-semibold" style={{}}>15 janvier 2024 à 14h00</h4>
<p className="text-xs text-gray-500 mt-0.5 font-montserrat font-semibold" style={{}}>Dans 2 heures</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-map-pin w-5 h-5 text-gray-600" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div className="flex-1">
<h4 className="text-sm text-gray-900 font-montserrat font-semibold" style={{}}>Akwa, Rue de la Joie</h4>
<p className="text-xs text-gray-500 mt-0.5 font-montserrat font-semibold" style={{}}>1.2 km de distance</p>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-2xl p-4 mb-4">
<div className="flex items-center gap-3 mb-4">
<img alt="Ahmed" className="w-14 h-14 rounded-xl object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&amp;h=120&amp;fit=crop"/>
<div className="flex-1">
<h3 className="text-sm text-gray-900 mb-0.5 font-montserrat font-semibold" style={{}}>Ahmed Nkoulou</h3>
<p className="text-xs text-gray-500 mb-1 font-montserrat font-semibold" style={{}}>Électricien · Plombier</p>
<div className="flex items-center gap-1">
<svg className="lucide lucide-star w-3.5 h-3.5 text-[#FF6B35] fill-[#FF6B35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-xs text-gray-900 font-montserrat font-semibold" style={{}}>4.8 (127 avis)</span>
</div>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 h-10 border border-[#50C878] text-[#50C878] text-sm rounded-lg hover:bg-[#50C878]/5 transition-colors flex items-center justify-center gap-2 font-montserrat font-semibold" style={{}}>
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                            Message
                        </button>
<button className="flex-1 h-10 border border-[#50C878] text-[#50C878] text-sm rounded-lg hover:bg-[#50C878]/5 transition-colors flex items-center justify-center gap-2 font-montserrat font-semibold" style={{}}>
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                            Appeler
                        </button>
</div>
</div>

<div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
<h3 className="text-sm text-gray-900 mb-4 font-montserrat font-semibold" style={{}}>Statut</h3>
<div className="space-y-4">
<div className="flex gap-3">
<div className="flex flex-col items-center">
<div className="w-8 h-8 bg-[#50C878] rounded-full flex items-center justify-center">
<svg className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="w-0.5 h-full bg-gray-300 mt-1"></div>
</div>
<div className="flex-1 pb-4">
<h4 className="text-sm text-gray-900 font-montserrat font-semibold" style={{}}>Demande envoyée</h4>
<p className="text-xs text-gray-500 mt-0.5 font-montserrat font-semibold" style={{}}>Il y a quelques secondes</p>
</div>
</div>
<div className="flex gap-3">
<div className="flex flex-col items-center">
<div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
</div>
<div className="w-0.5 h-full bg-gray-200 mt-1"></div>
</div>
<div className="flex-1 pb-4">
<h4 className="text-sm text-gray-500 font-montserrat font-semibold" style={{}}>En attente de confirmation</h4>
<p className="text-xs text-gray-400 mt-0.5 font-montserrat font-semibold" style={{}}>Réponse attendue</p>
</div>
</div>
<div className="flex gap-3">
<div className="flex flex-col items-center">
<div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
<svg className="lucide lucide-user-check w-4 h-4 text-gray-400" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="w-0.5 h-full bg-gray-200 mt-1"></div>
</div>
<div className="flex-1 pb-4">
<h4 className="text-sm text-gray-400 font-montserrat font-semibold" style={{}}>Intervention confirmée</h4>
</div>
</div>
<div className="flex gap-3">
<div className="flex flex-col items-center">
<div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
<svg className="lucide lucide-wrench w-4 h-4 text-gray-400" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
</div>
</div>
<div className="flex-1">
<h4 className="text-sm text-gray-400 font-montserrat font-semibold" style={{}}>Intervention terminée</h4>
</div>
</div>
</div>
</div>
</main>

<div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
<button className="w-full h-12 bg-[#50C878] text-white text-sm rounded-xl hover:bg-[#45B369] transition-colors font-montserrat font-semibold" onclick="showScreen('screen-history')" style={{}}>
                    Voir mes demandes
                </button>
</div>
</div>

<div className="screen hidden" id="screen-history">
<header className="bg-white border-b border-gray-200 sticky top-0 z-50">
<div className="px-4 py-3">
<h1 className="text-lg text-gray-900 tracking-tight font-montserrat font-semibold" style={{}}>Historique</h1>
</div>
</header>
<main className="pb-20">

<div className="px-4 pt-3 pb-2 bg-white border-b border-gray-200">
<div className="flex gap-2">
<button className="px-4 h-9 bg-[#50C878] text-white text-sm rounded-lg font-montserrat font-semibold" style={{}}>
                            En cours (1)
                        </button>
<button className="px-4 h-9 text-gray-600 text-sm rounded-lg hover:bg-gray-100 transition-colors font-montserrat font-semibold" style={{}}>
                            Terminées
                        </button>
<button className="px-4 h-9 text-gray-600 text-sm rounded-lg hover:bg-gray-100 transition-colors font-montserrat font-semibold" style={{}}>
                            Annulées
                        </button>
</div>
</div>

<section className="px-4 pt-4">
<div className="bg-white border border-[#50C878] rounded-2xl p-4 mb-4">
<div className="flex items-start gap-3 mb-3">
<img alt="Ahmed" className="w-12 h-12 rounded-xl object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&amp;h=120&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-start justify-between mb-1">
<div>
<h3 className="text-sm text-gray-900 font-montserrat font-semibold" style={{}}>Ahmed Nkoulou</h3>
<p className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>Électricien</p>
</div>
<span className="px-2 py-1 bg-[#FFA500]/10 text-[#FFA500] text-xs rounded-md font-montserrat font-semibold" style={{}}>En attente</span>
</div>
<div className="flex items-center gap-1 mt-1">
<svg className="lucide lucide-calendar w-3.5 h-3.5 text-gray-500" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-xs text-gray-600 font-montserrat font-semibold" style={{}}>15 janv. à 14h00</span>
</div>
</div>
</div>
<div className="p-3 bg-gray-50 rounded-lg mb-3">
<div className="flex items-start gap-2">
<svg className="lucide lucide-zap w-4 h-4 text-[#50C878] flex-shrink-0 mt-0.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<p className="text-sm text-gray-700 font-montserrat font-semibold" style={{}}>Installation électrique - Ma prise électrique dans le salon ne fonctionne plus...</p>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 h-9 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors font-montserrat font-semibold" style={{}}>
                                Annuler
                            </button>
<button className="flex-1 h-9 bg-[#50C878] text-white text-sm rounded-lg hover:bg-[#45B369] transition-colors font-montserrat font-semibold" style={{}}>
                                Voir détails
                            </button>
</div>
</div>
</section>

<section className="px-4 pt-2">
<h3 className="text-sm text-gray-900 mb-3 font-montserrat font-semibold" style={{}}>Récentes</h3>
<div className="space-y-3">
<div className="bg-white border border-gray-200 rounded-xl p-4">
<div className="flex items-start gap-3 mb-3">
<img alt="Pascal" className="w-12 h-12 rounded-xl object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&amp;h=120&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-start justify-between mb-1">
<div>
<h3 className="text-sm text-gray-900 font-montserrat font-semibold" style={{}}>Pascal Mbida</h3>
<p className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>Rénovation</p>
</div>
<span className="px-2 py-1 bg-[#10B981]/10 text-[#10B981] text-xs rounded-md font-montserrat font-semibold" style={{}}>Terminée</span>
</div>
<div className="flex items-center gap-1 mt-1">
<svg className="lucide lucide-calendar w-3.5 h-3.5 text-gray-500" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-xs text-gray-600 font-montserrat font-semibold" style={{}}>10 janv. 2024</span>
</div>
</div>
</div>
<div className="p-3 bg-gray-50 rounded-lg mb-3">
<p className="text-sm text-gray-700 font-montserrat font-semibold" style={{}}>Peinture murale - Repeindre le mur du salon</p>
<div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-200">
<span className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>Durée : 3h</span>
<span className="text-sm text-gray-900 font-montserrat font-semibold" style={{}}>24 000 FCFA</span>
</div>
</div>
<button className="w-full h-9 border border-[#50C878] text-[#50C878] text-sm rounded-lg hover:bg-[#50C878]/5 transition-colors font-montserrat font-semibold" style={{}}>
                                Laisser un avis
                            </button>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-4">
<div className="flex items-start gap-3 mb-3">
<img alt="Jean" className="w-12 h-12 rounded-xl object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&amp;h=120&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-start justify-between mb-1">
<div>
<h3 className="text-sm text-gray-900 font-montserrat font-semibold" style={{}}>Jean Fotso</h3>
<p className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>Climatisation</p>
</div>
<span className="px-2 py-1 bg-[#10B981]/10 text-[#10B981] text-xs rounded-md font-montserrat font-semibold" style={{}}>Terminée</span>
</div>
<div className="flex items-center gap-3 mt-1">
<div className="flex items-center gap-1">
<svg className="lucide lucide-calendar w-3.5 h-3.5 text-gray-500" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-xs text-gray-600 font-montserrat font-semibold" style={{}}>5 janv. 2024</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-star w-3.5 h-3.5 text-[#FF6B35] fill-[#FF6B35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-xs text-gray-900 font-montserrat font-semibold" style={{}}>5.0</span>
</div>
</div>
</div>
</div>
<div className="p-3 bg-gray-50 rounded-lg">
<p className="text-sm text-gray-700 font-montserrat font-semibold" style={{}}>Installation climatiseur</p>
<div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-200">
<span className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>Durée : 2h</span>
<span className="text-sm text-gray-900 font-montserrat font-semibold" style={{}}>36 000 FCFA</span>
</div>
</div>
</div>
</div>
</section>
</main>

<nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
<div className="flex items-center justify-around">
<button className="flex flex-col items-center gap-1 py-2 px-3 text-gray-500 hover:text-gray-900 transition-colors" onclick="showScreen('screen-home')">
<svg className="lucide lucide-home w-6 h-6" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-xs font-montserrat font-semibold" style={{}}>Accueil</span>
</button>
<button className="flex flex-col items-center gap-1 py-2 px-3 text-gray-500 hover:text-gray-900 transition-colors" onclick="showScreen('screen-search')">
<svg className="lucide lucide-search w-6 h-6" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="text-xs font-montserrat font-semibold" style={{}}>Rechercher</span>
</button>
<button className="flex flex-col items-center gap-1 py-2 px-3 text-[#50C878]" onclick="showScreen('screen-history')">
<svg className="lucide lucide-clock w-6 h-6" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-xs font-montserrat font-semibold" style={{}}>Historique</span>
</button>
<button className="flex flex-col items-center gap-1 py-2 px-3 text-gray-500 hover:text-gray-900 transition-colors" onclick="showScreen('screen-profile')">
<svg className="lucide lucide-user w-6 h-6" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-xs font-montserrat font-semibold" style={{}}>Profil</span>
</button>
</div>
</nav>
</div>

<div className="screen hidden" id="screen-profile">
<header className="bg-white border-b border-gray-200 sticky top-0 z-50">
<div className="px-4 py-3 flex items-center justify-between">
<h1 className="text-lg text-gray-900 tracking-tight font-montserrat font-semibold" style={{}}>Mon profil</h1>
<button className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors">
<svg className="lucide lucide-settings w-5 h-5 text-gray-700" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</header>
<main className="pb-20">

<section className="px-4 pt-6 pb-4 bg-white">
<div className="flex items-center gap-4 mb-4">
<div className="relative">
<img alt="Denise" className="w-20 h-20 rounded-2xl object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&amp;h=200&amp;fit=crop"/>
<button className="absolute -bottom-1 -right-1 w-7 h-7 bg-[#50C878] rounded-lg flex items-center justify-center hover:bg-[#45B369] transition-colors">
<svg className="lucide lucide-camera w-4 h-4 text-white" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</button>
</div>
<div className="flex-1">
<h2 className="text-xl text-gray-900 mb-1 tracking-tight font-montserrat font-semibold" style={{}}>Denise Kamga</h2>
<p className="text-sm text-gray-600 font-montserrat font-semibold" style={{}}>+237 6 XX XX XX XX</p>
<p className="text-sm text-gray-600 font-montserrat font-semibold" style={{}}>denise.kamga@email.cm</p>
</div>
</div>

<div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100">
<div className="text-center">
<div className="text-xl text-gray-900 mb-1 font-montserrat font-semibold" style={{}}>12</div>
<div className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>Interventions</div>
</div>
<div className="text-center border-l border-r border-gray-100">
<div className="text-xl text-gray-900 mb-1 font-montserrat font-semibold" style={{}}>4.9</div>
<div className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>Note moyenne</div>
</div>
<div className="text-center">
<div className="text-xl text-gray-900 mb-1 font-montserrat font-semibold" style={{}}>3</div>
<div className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>Favoris</div>
</div>
</div>
</section>

<section className="px-4 pt-4 pb-4 bg-gray-50">
<div className="grid grid-cols-2 gap-3">
<button className="p-4 bg-white border border-gray-200 rounded-xl text-left hover:border-[#50C878] hover:shadow-md transition-all">
<div className="w-10 h-10 bg-[#50C878]/10 rounded-lg flex items-center justify-center mb-2">
<svg className="lucide lucide-credit-card w-5 h-5 text-[#50C878]" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<h3 className="text-sm text-gray-900 mb-0.5 font-montserrat font-semibold" style={{}}>Paiements</h3>
<p className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>Gérer mes moyens de paiement</p>
</button>
<button className="p-4 bg-white border border-gray-200 rounded-xl text-left hover:border-[#50C878] hover:shadow-md transition-all">
<div className="w-10 h-10 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-2">
<svg className="lucide lucide-map-pin w-5 h-5 text-[#FF6B35]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<h3 className="text-sm text-gray-900 mb-0.5 font-montserrat font-semibold" style={{}}>Adresses</h3>
<p className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>Mes adresses enregistrées</p>
</button>
<button className="p-4 bg-white border border-gray-200 rounded-xl text-left hover:border-[#50C878] hover:shadow-md transition-all">
<div className="w-10 h-10 bg-[#1E3A8A]/10 rounded-lg flex items-center justify-center mb-2">
<svg className="lucide lucide-heart w-5 h-5 text-[#1E3A8A]" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
<h3 className="text-sm text-gray-900 mb-0.5 font-montserrat font-semibold" style={{}}>Favoris</h3>
<p className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>Mes techniciens favoris</p>
</button>
<button className="p-4 bg-white border border-gray-200 rounded-xl text-left hover:border-[#50C878] hover:shadow-md transition-all">
<div className="w-10 h-10 bg-gray-700/10 rounded-lg flex items-center justify-center mb-2">
<svg className="lucide lucide-gift w-5 h-5 text-gray-700" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
</div>
<h3 className="text-sm text-gray-900 mb-0.5 font-montserrat font-semibold" style={{}}>Parrainage</h3>
<p className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>Inviter des amis</p>
</button>
</div>
</section>

<section className="px-4 pt-4 pb-4 bg-white">
<div className="space-y-1">
<button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors">
<div className="flex items-center gap-3">
<svg className="lucide lucide-bell w-5 h-5 text-gray-600" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="text-sm text-gray-900 font-montserrat font-semibold" style={{}}>Notifications</span>
</div>
<svg className="lucide lucide-chevron-right w-5 h-5 text-gray-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors">
<div className="flex items-center gap-3">
<svg className="lucide lucide-shield w-5 h-5 text-gray-600" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<span className="text-sm text-gray-900 font-montserrat font-semibold" style={{}}>Sécurité et confidentialité</span>
</div>
<svg className="lucide lucide-chevron-right w-5 h-5 text-gray-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors">
<div className="flex items-center gap-3">
<svg className="lucide lucide-help-circle w-5 h-5 text-gray-600" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
<span className="text-sm text-gray-900 font-montserrat font-semibold" style={{}}>Aide et support</span>
</div>
<svg className="lucide lucide-chevron-right w-5 h-5 text-gray-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors">
<div className="flex items-center gap-3">
<svg className="lucide lucide-info w-5 h-5 text-gray-600" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<span className="text-sm text-gray-900 font-montserrat font-semibold" style={{}}>À propos</span>
</div>
<svg className="lucide lucide-chevron-right w-5 h-5 text-gray-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</section>

<section className="px-4 pt-4 pb-4 bg-gray-50">
<div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C61] rounded-2xl p-5 text-white relative overflow-hidden">
<div className="relative z-10">
<h3 className="text-base mb-1 tracking-tight font-montserrat font-semibold" style={{}}>Devenez technicien</h3>
<p className="text-sm text-white/90 mb-4 font-montserrat font-semibold" style={{}}>Inscrivez-vous et commencez à gagner de l'argent</p>
<button className="h-10 px-5 bg-white text-[#FF6B35] text-sm rounded-lg hover:bg-gray-50 transition-colors font-montserrat font-semibold" style={{}}>
                                En savoir plus
                            </button>
</div>
<div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full"></div>
</div>
</section>

<section className="px-4 pt-2 pb-4">
<button className="w-full flex items-center justify-center gap-2 p-4 text-red-600 hover:bg-red-50 rounded-xl transition-colors">
<svg className="lucide lucide-log-out w-5 h-5" data-lucide="log-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
<span className="text-sm font-montserrat font-semibold" style={{}}>Se déconnecter</span>
</button>
</section>
<div className="px-4 pb-4 text-center">
<p className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>Version 1.0.0</p>
</div>
</main>

<nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
<div className="flex items-center justify-around">
<button className="flex flex-col items-center gap-1 py-2 px-3 text-gray-500 hover:text-gray-900 transition-colors" onclick="showScreen('screen-home')">
<svg className="lucide lucide-home w-6 h-6" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-xs font-montserrat font-semibold" style={{}}>Accueil</span>
</button>
<button className="flex flex-col items-center gap-1 py-2 px-3 text-gray-500 hover:text-gray-900 transition-colors" onclick="showScreen('screen-search')">
<svg className="lucide lucide-search w-6 h-6" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="text-xs font-montserrat font-semibold" style={{}}>Rechercher</span>
</button>
<button className="flex flex-col items-center gap-1 py-2 px-3 text-gray-500 hover:text-gray-900 transition-colors" onclick="showScreen('screen-history')">
<svg className="lucide lucide-clock w-6 h-6" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-xs font-montserrat font-semibold" style={{}}>Historique</span>
</button>
<button className="flex flex-col items-center gap-1 py-2 px-3 text-[#50C878]" onclick="showScreen('screen-profile')">
<svg className="lucide lucide-user w-6 h-6" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-xs font-montserrat font-semibold" style={{}}>Profil</span>
</button>
</div>
</nav>
</div>

<div className="screen hidden" id="screen-map">
<header className="bg-white border-b border-gray-200 sticky top-0 z-50">
<div className="px-4 py-3 flex items-center justify-between">
<button className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors" onclick="showScreen('screen-home')">
<svg className="lucide lucide-arrow-left w-5 h-5 text-gray-700" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<h1 className="text-base text-gray-900 font-montserrat font-semibold" style={{}}>Carte</h1>
<button className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors">
<svg className="lucide lucide-sliders-horizontal w-5 h-5 text-gray-700" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3"></path><path d="M12 19H3"></path><path d="M14 3v4"></path><path d="M16 17v4"></path><path d="M21 12h-9"></path><path d="M21 19h-5"></path><path d="M21 5h-7"></path><path d="M8 10v4"></path><path d="M8 12H3"></path></svg>
</button>
</div>
</header>
<main className="relative h-screen pb-48">

<div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
<div className="text-center">
<svg className="lucide lucide-map w-16 h-16 text-gray-400 mx-auto mb-2" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
<p className="text-sm text-gray-600 font-montserrat font-semibold" style={{}}>Carte interactive</p>
<p className="text-xs text-gray-500 font-montserrat font-semibold" style={{}}>Vue de Douala, Akwa</p>
</div>
</div>

<div className="absolute top-4 right-4 flex flex-col gap-2">
<button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
<svg className="lucide lucide-crosshair w-5 h-5 text-gray-700" data-lucide="crosshair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
</button>
<button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
<svg className="lucide lucide-plus w-5 h-5 text-gray-700" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
<svg className="lucide lucide-minus w-5 h-5 text-gray-700" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</button>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl">
<div className="px-4 pt-4 pb-6">

<div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
<h3 className="text-base text-gray-900 mb-3 font-montserrat font-semibold" style={{}}>Techniciens à proximité (15)</h3>
<div className="space-y-3 max-h-64 overflow-y-auto">
<button className="w-full bg-white border border-gray-200 rounded-xl p-3 hover:border-[#50C878] hover:shadow-md transition-all text-left" onclick="showScreen('screen-profile-tech')">
<div className="flex items-center gap-3">
<img alt="Ahmed" className="w-12 h-12 rounded-lg object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&amp;h=120&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<h4 className="text-sm text-gray-900 font-montserrat font-semibold" style={{}}>Ahmed Nkoulou</h4>
<span className="text-xs text-gray-600 font-montserrat font-semibold" style={{}}>1.2 km</span>
</div>
<p className="text-xs text-gray-500 mb-1 font-montserrat font-semibold" style={{}}>Électricien · Plombier</p>
<div className="flex items-center gap-2">
<div className="flex items-center gap-1">
<svg className="lucide lucide-star w-3.5 h-3.5 text-[#FF6B35] fill-[#FF6B35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-xs text-gray-900 font-montserrat font-semibold" style={{}}>4.8</span>
</div>
<span className="text-xs text-gray-400 font-montserrat font-semibold" style={{}}>·</span>
<span className="text-xs text-gray-900 font-montserrat font-semibold" style={{}}>5 000 FCFA/h</span>
</div>
</div>
</div>
</button>
<button className="w-full bg-white border border-gray-200 rounded-xl p-3 hover:border-[#50C878] hover:shadow-md transition-all text-left" onclick="showScreen('screen-profile-tech')">
<div className="flex items-center gap-3">
<img alt="Jean" className="w-12 h-12 rounded-lg object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&amp;h=120&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<h4 className="text-sm text-gray-900 font-montserrat font-semibold" style={{}}>Jean Fotso</h4>
<span className="text-xs text-gray-600 font-montserrat font-semibold" style={{}}>0.8 km</span>
</div>
<p className="text-xs text-gray-500 mb-1 font-montserrat font-semibold" style={{}}>Climatisation · Froid</p>
<div className="flex items-center gap-2">
<div className="flex items-center gap-1">
<svg className="lucide lucide-star w-3.5 h-3.5 text-[#FF6B35] fill-[#FF6B35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-xs text-gray-900 font-montserrat font-semibold" style={{}}>5.0</span>
</div>
<span className="text-xs text-gray-400 font-montserrat font-semibold" style={{}}>·</span>
<span className="text-xs text-gray-900 font-montserrat font-semibold" style={{}}>12 000 FCFA/h</span>
</div>
</div>
</div>
</button>
<button className="w-full bg-white border border-gray-200 rounded-xl p-3 hover:border-[#50C878] hover:shadow-md transition-all text-left" onclick="showScreen('screen-profile-tech')">
<div className="flex items-center gap-3">
<img alt="Pascal" className="w-12 h-12 rounded-lg object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&amp;h=120&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<h4 className="text-sm text-gray-900 font-montserrat font-semibold" style={{}}>Pascal Mbida</h4>
<span className="text-xs text-gray-600 font-montserrat font-semibold" style={{}}>2.4 km</span>
</div>
<p className="text-xs text-gray-500 mb-1 font-montserrat font-semibold" style={{}}>Rénovation · Maçonnerie</p>
<div className="flex items-center gap-2">
<div className="flex items-center gap-1">
<svg className="lucide lucide-star w-3.5 h-3.5 text-[#FF6B35] fill-[#FF6B35]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-xs text-gray-900 font-montserrat font-semibold" style={{}}>4.9</span>
</div>
<span className="text-xs text-gray-400 font-montserrat font-semibold" style={{}}>·</span>
<span className="text-xs text-gray-900 font-montserrat font-semibold" style={{}}>8 000 FCFA/h</span>
</div>
</div>
</div>
</button>
</div>
</div>
</div>
</main>
</div>
</div>


    </>
  );
}
