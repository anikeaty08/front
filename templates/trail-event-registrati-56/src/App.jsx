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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        function selectCourse(courseName) {
            document.getElementById('course-input').value = courseName;
            
            const display = document.getElementById('selected-course-name');
            display.textContent = courseName;
            
            const box = document.getElementById('course-display');
            box.classList.remove('bg-orange-50', 'border-orange-200');
            box.classList.add('bg-emerald-50', 'border-emerald-200');
            
            document.getElementById('inscription').scrollIntoView({ behavior: 'smooth' });
        }

        function submitForm() {
            // Retrieve form values
            const course = document.getElementById('course-input').value;
            const prenom = document.getElementById('prenom').value;
            const nom = document.getElementById('nom').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const btn = document.querySelector('button[type="button"]');
            
            // Basic validation
            if(!course) {
                alert("Merci de choisir une course dans la liste avant de vous inscrire.");
                document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
                return;
            }
            if(!prenom || !nom || !email || !phone) {
                alert("Merci de remplir tous les champs (Prénom, Nom, Email, Téléphone).");
                return;
            }

            // Visual feedback
            const originalText = btn.innerHTML;
            btn.innerHTML = `<iconify-icon icon="solar:spinner-linear" class="animate-spin text-lg"></iconify-icon> Préparation...`;
            
            setTimeout(() => {
                // IMPORTANT: Remplacez 'votre-email@exemple.com' par votre véritable adresse de réception
                const destinationEmail = "votre-email@exemple.com"; 
                const subject = `Inscription Trail Réunion : ${prenom} ${nom}`;
                
                // Construct the email body text
                const body = `Nouvelle demande d'inscription reçue :%0D%0A%0D%0A` +
                             `-----------------------------------%0D%0A` +
                             `COURSE : ${course}%0D%0A` +
                             `-----------------------------------%0D%0A` +
                             `PRÉNOM : ${prenom}%0D%0A` +
                             `NOM : ${nom}%0D%0A` +
                             `EMAIL : ${email}%0D%0A` +
                             `TÉLÉPHONE : ${phone}%0D%0A` +
                             `-----------------------------------%0D%0A` +
                             `%0D%0AMerci de valider cette inscription.`;

                // Open the user's default email client
                window.location.href = `mailto:${destinationEmail}?subject=${encodeURIComponent(subject)}&body=${body}`;

                // Reset button state
                btn.innerHTML = `<iconify-icon icon="solar:check-circle-linear" class="text-lg"></iconify-icon> Ouverture messagerie...`;
                btn.classList.replace('bg-orange-900', 'bg-emerald-600');
                
                setTimeout(() => {
                    btn.innerHTML = "Confirmer mon inscription";
                    btn.classList.replace('bg-emerald-600', 'bg-orange-900');
                }, 3000);
            }, 800);
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="yWZ2Tbe094Fsjgy9NRnD"></div>

</div></div>

<div className="fixed inset-0 z-[-1]">

<img alt="La Réunion Background" className="w-full h-full object-cover opacity-20" src="default"/>

<div className="absolute inset-0 backdrop-blur-[2px] bg-amber-50/90" style={{}}></div>
<div className="absolute inset-0 bg-gradient-to-b via-transparent from-white/80 to-amber-50/90" style={{}}></div>
</div>

<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b bg-amber-50/80 border-orange-200/60" style={{}}>
<div className="flex h-16 max-w-5xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-lg font-semibold tracking-tighter flex items-center gap-2 text-orange-900" href="#" style={{}}>
<span className="w-8 h-8 flex items-center justify-center rounded-lg shadow-md bg-orange-900 text-white shadow-orange-900/20" style={{}}>
<iconify-icon icon="solar:mountains-linear" width="20"></iconify-icon>
</span>
                TRAIL<span className="text-orange-400" style={{}}>RÉUNION</span>
</a>
<div className="flex items-center gap-6">
<a className="hidden sm:block text-sm font-medium transition-colors text-orange-600 hover:text-orange-900" href="#courses" style={{}}>Courses</a>
<a className="text-sm font-medium border px-3 py-1.5 rounded-lg transition-colors shadow-sm bg-white border-orange-200 text-orange-900 hover:bg-orange-50" href="#inscription" style={{}}>Connexion</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 px-6 overflow-hidden">
<div className="max-w-3xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur border shadow-sm mb-8 bg-white/80 border-orange-200" style={{}}>
<span className="flex h-2 w-2 rounded-full bg-yellow-500 animate-pulse" style={{}}></span>
<span className="uppercase text-xs font-medium tracking-wide text-orange-600" style={{}}>Saison 2026 Ouverte</span>
</div>
<h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 drop-shadow-sm text-orange-900" style={{}}>
                Explorez les sentiers <br className="hidden sm:block"/>intenses de La Réunion
            </h1>
<p className="text-lg mb-10 max-w-xl mx-auto leading-relaxed font-medium text-orange-600" style={{}}>
                Des cirques majestueux aux savanes arides. Compare les formats, analyse les profils et inscris-toi en quelques clics.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium transition-all shadow-lg bg-orange-900 hover:bg-orange-800 text-white shadow-orange-900/20 hover:shadow-orange-900/40" href="#courses" style={{}}>
                    Voir les courses
                    <iconify-icon icon="solar:arrow-down-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border px-6 py-3.5 rounded-xl text-sm font-medium transition-all shadow-sm bg-white hover:bg-orange-50 border-orange-200 text-orange-900" href="#inscription" style={{}}>
                    M’inscrire
                </a>
</div>
<p className="mt-8 text-xs text-orange-500 flex items-center justify-center gap-4 font-medium" style={{}}>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:card-linear"></iconify-icon> Paiement sécurisé</span>
<span className="hidden sm:flex items-center gap-1.5"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Validation instantanée</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> Données chiffrées</span>
</p>
</div>
</section>

<div className="sticky top-16 z-40 backdrop-blur-md border-y py-4 shadow-sm bg-amber-50/95 border-orange-200/60" id="courses" style={{}}>
<div className="max-w-5xl mx-auto px-6 overflow-x-auto hide-scrollbar">
<div className="flex items-center gap-3 min-w-max">
<span className="text-xs font-semibold uppercase tracking-wider mr-2 text-orange-400" style={{}}>Filtrer</span>
<button className="px-4 py-1.5 rounded-full text-xs font-medium transition-colors shadow-sm bg-orange-900 text-white" style={{}}>Tout</button>
<button className="transition-colors text-xs font-medium border rounded-full pt-1.5 pr-4 pb-1.5 pl-4 hover:border-orange-300 text-orange-600 bg-white border-orange-200" style={{}}>Montagne</button>
<button className="border px-4 py-1.5 rounded-full text-xs font-medium transition-colors bg-white border-orange-200 text-orange-600 hover:border-orange-300" style={{}}>Nocturne</button>
<button className="border px-4 py-1.5 rounded-full text-xs font-medium transition-colors bg-white border-orange-200 text-orange-600 hover:border-orange-300" style={{}}>Savane</button>
<button className="border px-4 py-1.5 rounded-full text-xs font-medium transition-colors bg-white border-orange-200 text-orange-600 hover:border-orange-300" style={{}}>Nord</button>
</div>
</div>
</div>

<section className="py-12 px-6 max-w-5xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group rounded-2xl border p-4 hover:shadow-2xl transition-all duration-300 flex flex-col h-full relative overflow-hidden bg-white border-orange-200 hover:shadow-orange-200/50 hover:border-orange-300" style={{}}>

<div className="h-40 w-full rounded-xl mb-4 overflow-hidden relative shadow-inner bg-orange-100" style={{}}>
<img alt="Sentier humide Kalla" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a698cf91-b2df-473c-9982-afd146f77942_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/40"></div>
<div className="absolute bottom-2 left-2 text-[10px] font-medium px-2 py-0.5 backdrop-blur rounded-full border text-white bg-black/30 border-white/20">
                        La Possession
                    </div>
</div>
<div className="flex justify-between items-start mb-3 px-1">
<span className="text-xs font-semibold px-2.5 py-1 rounded-md border bg-orange-100 text-orange-600 border-orange-200" style={{}}>24 NOV</span>
<span className="text-xs font-medium flex items-center gap-1 px-2 py-1 rounded-full border text-yellow-600 bg-yellow-50 border-yellow-100" style={{}}>
<iconify-icon icon="solar:ticket-linear"></iconify-icon> Places dispos
                    </span>
</div>
<div className="px-1">
<h3 className="text-lg font-semibold mb-1 leading-tight group-hover:text-green-600 transition-colors text-orange-900" style={{}}>La Kalla Nescafé</h3>
<div className="flex items-center gap-1 text-sm text-orange-500 mb-5" style={{}}>
<iconify-icon className="text-orange-400" icon="solar:map-point-linear" style={{}}></iconify-icon>
                        Sentier de Bord
                    </div>
<div className="grid grid-cols-2 gap-3 mb-6">
<div className="rounded-lg p-2.5 border group-hover:border-orange-200 transition-colors bg-amber-50 border-orange-100" style={{}}>
<div className="text-xs mb-0.5 flex items-center gap-1 text-orange-400" style={{}}><iconify-icon icon="solar:ruler-linear"></iconify-icon> Distance</div>
<div className="text-sm font-semibold text-orange-900" style={{}}>20 km</div>
</div>
<div className="rounded-lg p-2.5 border group-hover:border-orange-200 transition-colors bg-amber-50 border-orange-100" style={{}}>
<div className="text-xs mb-0.5 flex items-center gap-1 text-orange-400" style={{}}><iconify-icon icon="solar:graph-up-linear"></iconify-icon> Dénivelé</div>
<div className="text-sm font-semibold text-orange-900" style={{}}>1100m D+</div>
</div>
</div>
</div>
<div className="mt-auto pt-4 border-t px-1 border-orange-100" style={{}}>
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium px-2 py-1 rounded border text-orange-600 bg-orange-100 border-orange-200" style={{}}>Intermédiaire</span>
<span className="text-xs font-medium text-orange-400" style={{}}>07:00 Départ</span>
</div>
<button className="transition-all flex group-btn hover:border-orange-900 hover:bg-orange-900 hover:text-white text-sm font-medium text-orange-900 bg-white w-full border-orange-200 border rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 shadow-sm gap-x-2 gap-y-2 items-center justify-center" onclick="selectCourse('La Kalla Nescafé')">
                        Sélectionner
                        <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="group rounded-2xl border p-4 hover:shadow-2xl transition-all duration-300 flex flex-col h-full relative overflow-hidden bg-white border-orange-200 hover:shadow-orange-200/50 hover:border-orange-300" style={{}}>

<div className="h-40 w-full rounded-xl mb-4 overflow-hidden relative shadow-inner bg-orange-900" style={{}}>
<img alt="Trail de nuit" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&amp;w=800&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/60"></div>
<div className="absolute bottom-2 left-2 text-[10px] font-medium px-2 py-0.5 backdrop-blur rounded-full border text-white bg-black/30 border-white/20">
                        Saint-Denis
                    </div>
</div>
<div className="flex justify-between items-start mb-3 px-1">
<span className="text-xs font-semibold px-2.5 py-1 rounded-md border bg-orange-100 text-orange-600 border-orange-200" style={{}}>08 DEC</span>
<span className="text-xs font-medium flex items-center gap-1 px-2 py-1 rounded-full border text-yellow-600 bg-yellow-50 border-yellow-100" style={{}}>
<iconify-icon icon="solar:hourglass-linear"></iconify-icon> Bientôt clos
                    </span>
</div>
<div className="px-1">
<h3 className="text-lg font-semibold mb-1 leading-tight group-hover:text-green-600 transition-colors text-orange-900" style={{}}>Trail de Minuit</h3>
<div className="flex items-center gap-1 text-sm text-orange-500 mb-5" style={{}}>
<iconify-icon className="text-orange-400" icon="solar:moon-stars-linear" style={{}}></iconify-icon>
                        La Redoute
                    </div>
<div className="grid grid-cols-2 gap-3 mb-6">
<div className="rounded-lg p-2.5 border group-hover:border-orange-200 transition-colors bg-amber-50 border-orange-100" style={{}}>
<div className="text-xs mb-0.5 flex items-center gap-1 text-orange-400" style={{}}><iconify-icon icon="solar:ruler-linear"></iconify-icon> Distance</div>
<div className="text-sm font-semibold text-orange-900" style={{}}>56 km</div>
</div>
<div className="rounded-lg p-2.5 border group-hover:border-orange-200 transition-colors bg-amber-50 border-orange-100" style={{}}>
<div className="text-xs mb-0.5 flex items-center gap-1 text-orange-400" style={{}}><iconify-icon icon="solar:graph-up-linear"></iconify-icon> Dénivelé</div>
<div className="text-sm font-semibold text-orange-900" style={{}}>3200m D+</div>
</div>
</div>
</div>
<div className="mt-auto pt-4 border-t px-1 border-orange-100" style={{}}>
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium px-2 py-1 rounded border text-orange-600 bg-orange-100 border-orange-200" style={{}}>Expert</span>
<span className="text-xs font-medium text-orange-400" style={{}}>23:59 Départ</span>
</div>
<button className="w-full border font-medium py-2.5 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 group-btn shadow-sm bg-white border-orange-200 text-orange-900 hover:border-orange-900 hover:bg-orange-900 hover:text-white" onclick="selectCourse('Trail de Minuit')" style={{}}>
                        Sélectionner
                        <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="group rounded-2xl border p-4 hover:shadow-2xl transition-all duration-300 flex flex-col h-full relative overflow-hidden bg-white border-orange-200 hover:shadow-orange-200/50 hover:border-orange-300" style={{}}>

<div className="h-40 w-full rounded-xl mb-4 overflow-hidden relative shadow-inner bg-yellow-50" style={{}}>
<img alt="Savane Cap La Houssaye" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/87914a38-d937-45a6-9d52-2cae020cda68_800w.jpg" style={{}}/>
<div className="bg-gradient-to-t to-transparent absolute top-0 right-0 bottom-0 left-0 from-black/30"></div>
<div className="absolute bottom-2 left-2 text-[10px] font-medium px-2 py-0.5 backdrop-blur rounded-full border text-white bg-black/30 border-white/20">
                        Saint-Paul
                    </div>
</div>
<div className="flex justify-between items-start mb-3 px-1">
<span className="text-xs font-semibold px-2.5 py-1 rounded-md border bg-orange-100 text-orange-600 border-orange-200" style={{}}>15 JAN</span>
<span className="text-xs font-medium flex items-center gap-1 px-2 py-1 rounded-full border text-orange-400 bg-orange-50 border-orange-200" style={{}}>
                        Ouvert
                    </span>
</div>
<div className="px-1">
<h3 className="text-lg font-semibold mb-1 leading-tight group-hover:text-green-600 transition-colors text-orange-900" style={{}}>Foulées de la Savane</h3>
<div className="flex items-center gap-1 text-sm text-orange-500 mb-5" style={{}}>
<iconify-icon className="text-orange-400" icon="solar:sun-fog-linear" style={{}}></iconify-icon>
                        Cap La Houssaye
                    </div>
<div className="grid grid-cols-2 gap-3 mb-6">
<div className="rounded-lg p-2.5 border group-hover:border-orange-200 transition-colors bg-amber-50 border-orange-100" style={{}}>
<div className="text-xs mb-0.5 flex items-center gap-1 text-orange-400" style={{}}><iconify-icon icon="solar:ruler-linear"></iconify-icon> Distance</div>
<div className="text-sm font-semibold text-orange-900" style={{}}>10 km</div>
</div>
<div className="rounded-lg p-2.5 border group-hover:border-orange-200 transition-colors bg-amber-50 border-orange-100" style={{}}>
<div className="text-xs mb-0.5 flex items-center gap-1 text-orange-400" style={{}}><iconify-icon icon="solar:road-linear"></iconify-icon> Type</div>
<div className="text-sm font-semibold text-orange-900" style={{}}>Mixte</div>
</div>
</div>
</div>
<div className="mt-auto pt-4 border-t px-1 border-orange-100" style={{}}>
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium px-2 py-1 rounded border text-orange-600 bg-orange-100 border-orange-200" style={{}}>Débutant</span>
<span className="text-xs font-medium text-orange-400" style={{}}>08:00 Départ</span>
</div>
<button className="w-full border font-medium py-2.5 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 group-btn shadow-sm bg-white border-orange-200 text-orange-900 hover:border-orange-900 hover:bg-orange-900 hover:text-white" onclick="selectCourse('Foulées de la Savane')" style={{}}>
                        Sélectionner
                        <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="border-y pt-16 pb-16 backdrop-blur-sm bg-white/50 border-orange-100" style={{}}>
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-semibold text-center mb-10 tracking-tight text-orange-900" style={{}}>Inscription en 3 étapes</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-px -z-0 bg-orange-200" style={{}}></div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-12 h-12 border rounded-xl flex items-center justify-center mb-4 shadow-sm bg-white border-orange-200 text-orange-900" style={{}}>
<iconify-icon className="" icon="solar:magnifer-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-sm text-orange-900" style={{}}>Choisis ta course</h3>
</div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-12 h-12 border rounded-xl flex items-center justify-center mb-4 shadow-sm bg-white border-orange-200 text-orange-900" style={{}}>
<iconify-icon className="" icon="solar:user-id-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-sm text-orange-900" style={{}}>Renseigne tes infos</h3>
</div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-12 h-12 border rounded-xl flex items-center justify-center mb-4 shadow-sm bg-white border-orange-200 text-orange-900" style={{}}>
<iconify-icon icon="solar:mailbox-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-sm text-orange-900" style={{}}>Reçois ton dossard</h3>
</div>
</div>
</div>
</section>

<section className="pt-20 pr-6 pb-20 pl-6" id="inscription">
<div className="max-w-xl mx-auto">
<div className="sm:p-10 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-xl backdrop-blur-xl shadow-orange-200/40 bg-white/95 border-orange-200" style={{}}>
<div className="mb-8">
<h2 className="text-2xl font-semibold tracking-tight mb-2 text-orange-900" style={{}}>Je m’inscris</h2>
<div className="border rounded-lg p-3 flex items-start gap-3 transition-all bg-orange-50 border-orange-200" id="course-display" style={{}}>
<iconify-icon className="mt-0.5 flex-shrink-0 text-orange-400" icon="solar:info-circle-linear" style={{}}></iconify-icon>
<p className="text-sm text-orange-500" style={{}}>
                            Course sélectionnée : <span className="font-semibold text-orange-900" id="selected-course-name" style={{}}>Aucune course sélectionnée</span>
<br/><span className="text-xs text-orange-400" style={{}}>Choisis une course ci-dessus pour commencer.</span>
</p>
</div>
</div>
<form className="space-y-5">
<input id="course-input" name="course" type="hidden"/>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium ml-1 text-orange-700" htmlFor="prenom" style={{}}>Prénom</label>
<input className="block w-full rounded-lg text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:ring-offset-0 transition-shadow px-3 py-2.5 placeholder:text-orange-400 border-orange-200 bg-orange-50/50 text-orange-900" id="prenom" name="prenom" placeholder="Jean" required="" style={{}} type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium ml-1 text-orange-700" htmlFor="nom" style={{}}>Nom</label>
<input className="block w-full rounded-lg text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:ring-offset-0 transition-shadow px-3 py-2.5 placeholder:text-orange-400 border-orange-200 bg-orange-50/50 text-orange-900" id="nom" name="nom" placeholder="Dupont" required="" style={{}} type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium ml-1 text-orange-700" htmlFor="email" style={{}}>Email</label>
<input className="block w-full rounded-lg text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:ring-offset-0 transition-shadow px-3 py-2.5 placeholder:text-orange-400 border-orange-200 bg-orange-50/50 text-orange-900" id="email" name="email" placeholder="jean.dupont@exemple.com" required="" style={{}} type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium ml-1 text-orange-700" htmlFor="phone" style={{}}>Téléphone</label>
<input className="block w-full rounded-lg text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:ring-offset-0 transition-shadow px-3 py-2.5 placeholder:text-orange-400 border-orange-200 bg-orange-50/50 text-orange-900" id="phone" name="phone" placeholder="06 92 XX XX XX" required="" style={{}} type="tel"/>
</div>
<div className="pt-2">
<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border rounded peer-checked:bg-orange-900 peer-checked:border-orange-900 transition-colors border-orange-300 bg-white" style={{}}></div>
<iconify-icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 text-[10px] pointer-events-none text-white" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-xs text-orange-500 group-hover:text-orange-700 transition-colors leading-tight" style={{}}>
                                J’accepte d’être contacté(e) uniquement à propos de mon inscription.
                            </span>
</label>
</div>
<button className="w-full font-medium py-3 rounded-xl text-sm transition-all shadow-lg active:scale-[0.99] flex items-center justify-center gap-2 bg-orange-900 hover:bg-orange-800 text-white shadow-orange-900/20" onclick="submitForm()" style={{}} type="button">
                        Confirmer mon inscription
                    </button>
<p className="text-[10px] text-center leading-snug max-w-sm mx-auto text-orange-400" style={{}}>
                        Les données seront envoyées via votre messagerie par défaut.
                    </p>
</form>
</div>
</div>
</section>

<footer className="backdrop-blur-md border-t pt-12 pb-8 px-6 bg-white/80 border-orange-200" style={{}}>
<div className="max-w-5xl mx-auto">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
<div className="flex items-start gap-3">
<div className="p-2 rounded-lg border bg-orange-50 text-orange-900 border-orange-100" style={{}}><iconify-icon icon="solar:calendar-linear"></iconify-icon></div>
<div className="">
<h4 className="text-sm font-semibold text-orange-900" style={{}}>À jour</h4>
<p className="text-xs text-orange-500" style={{}}>Mises à jour quotidiennes</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="p-2 rounded-lg border bg-orange-50 text-orange-900 border-orange-100" style={{}}><iconify-icon icon="solar:stopwatch-linear"></iconify-icon></div>
<div>
<h4 className="text-sm font-semibold text-orange-900" style={{}}>Rapide</h4>
<p className="text-xs text-orange-500" style={{}}>Inscription en moins d'une minute</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="p-2 rounded-lg border bg-orange-50 text-orange-900 border-orange-100" style={{}}><iconify-icon icon="solar:chat-round-line-linear"></iconify-icon></div>
<div>
<h4 className="text-sm font-semibold text-orange-900" style={{}}>Support</h4>
<p className="text-xs text-orange-500" style={{}}>Basé à La Réunion</p>
</div>
</div>
</div>
<div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs border-orange-200 text-orange-400" style={{}}>
<p>© 2024 Trail Réunion. Tous droits réservés.</p>
<div className="flex gap-6">
<a className="hover:text-orange-600" href="#" style={{}}>Mentions légales</a>
<a className="hover:text-orange-600" href="#" style={{}}>Confidentialité</a>
<a className="hover:text-orange-600" href="#" style={{}}>RGPD</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
