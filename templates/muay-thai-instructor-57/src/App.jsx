import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#fffbeb',
100: '#fef3c7',
200: '#fde68a',
300: '#fcd34d',
400: '#fbbf24',
500: '#f59e0b', // Base Gold
600: '#d97706',
900: '#78350f',
950: '#451a03',
},
dark: {
800: '#1e293b',
900: '#0f172a',
950: '#020617', // Deep Black/Blue
}
},
letterSpacing: {
tightest: '-.075em',
tighter: '-.05em',
}
}
}
}



        function setLang(lang) {
            // Set HTML attribute
            document.documentElement.setAttribute('lang', lang);
            
            // Update Toggle Button Styles
            const btnEn = document.getElementById('btn-en');
            const btnFr = document.getElementById('btn-fr');
            
            if(lang === 'en') {
                btnEn.className = "text-[10px] font-medium px-3 py-1 rounded transition-all text-white bg-white/10";
                btnFr.className = "text-[10px] font-medium px-3 py-1 rounded transition-all text-slate-500 hover:text-white";
            } else {
                btnFr.className = "text-[10px] font-medium px-3 py-1 rounded transition-all text-white bg-white/10";
                btnEn.className = "text-[10px] font-medium px-3 py-1 rounded transition-all text-slate-500 hover:text-white";
            }

            // Optional: Save preference
            // localStorage.setItem('sitsongpeenong-lang', lang);
        }

        // Initialize (Default to FR based on prompt emphasis, or EN)
        // Check for browser lang or default to FR
        document.addEventListener('DOMContentLoaded', () => {
            setLang('fr'); // Setting FR as default based on the extensive French copy provided
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-40 glass-nav transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-brand-500 flex items-center justify-center text-dark-950">
<iconify-icon icon="solar:shield-star-linear" width="20"></iconify-icon>
</div>
<div className="uppercase font-medium tracking-[0.15em] text-white text-xs">
                    Sitsongpeenong
                </div>
</div>
<div className="flex items-center gap-6">

<div className="flex items-center bg-white/5 rounded-lg p-1 border border-white/10">
<button className="text-[10px] font-medium px-3 py-1 rounded transition-all text-white bg-white/10" id="btn-en" onclick="setLang('en')">EN</button>
<button className="text-[10px] font-medium px-3 py-1 rounded transition-all text-slate-500 hover:text-white" id="btn-fr" onclick="setLang('fr')">FR</button>
</div>
<a className="inline-flex items-center gap-2 text-xs font-medium bg-brand-500 text-dark-950 px-5 py-2.5 rounded hover:bg-brand-400 transition-colors" href="#apply">
<span className="lang-en">Apply →</span>
<span className="lang-fr">Postuler →</span>
</a>
</div>
</div>
</nav>

<header className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-12">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-dark-950/80 z-10"></div>
<div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent z-10"></div>
<img alt="Muay Thai" className="w-full h-full object-cover opacity-40 grayscale-[20%]" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-20 max-w-4xl mx-auto px-6 w-full text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium mb-8 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
<span className="lang-en">12 spots only — Filling now</span>
<span className="lang-fr">12 places seulement — Remplissage en cours</span>
</div>
<p className="text-slate-400 text-sm tracking-widest uppercase mb-4 font-medium">Sitsongpeenong Bangkok <span className="lang-en">Presents</span><span className="lang-fr">présente</span></p>
<h1 className="text-5xl md:text-7xl text-white font-medium tracking-tight mb-6 leading-[1.05]">
<span className="lang-en">Muay Thai Instructor<br/> <span className="text-gradient-gold">Training Course</span></span>
<span className="lang-fr">Formation<br/> <span className="text-gradient-gold">Instructeur Muay Thai</span></span>
</h1>
<p className="text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed mb-10">
<span className="lang-en">Intensive 14-Day Certification · Bangkok, Thailand</span>
<span className="lang-fr">Certification Intensive 14 Jours · Bangkok, Thaïlande</span>
<br/>
<span className="text-slate-500 text-sm block mt-4">
<span className="lang-en">Over 80 hours of elite training with 10 experienced stadium trainers. Designed exclusively for coaches and gym owners who want to master the art of teaching authentic Muay Thai — and prove it with certification from one of Thailand's most legendary camps.</span>
<span className="lang-fr">Plus de 80 heures de formation d'élite avec 10 entraîneurs expérimentés en stade. Conçu exclusivement pour les coachs et propriétaires de salles qui veulent maîtriser l'art d'enseigner le Muay Thai authentique — et le prouver avec une certification de l'un des camps les plus légendaires de Thaïlande.</span>
</span>
</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-white text-dark-950 px-8 py-4 rounded font-medium hover:bg-slate-200 transition-all" href="#apply">
<span className="lang-en">Reserve My Spot →</span>
<span className="lang-fr">Réserver Ma Place →</span>
</a>
</div>
<p className="mt-4 text-xs text-slate-600">
<span className="lang-en">Deposit required by April 15 · Limited to 12 participants</span>
<span className="lang-fr">Acompte requis avant le 15 avril · Limité à 12 participants</span>
</p>
</div>

<div className="absolute bottom-0 w-full z-20 border-t border-white/5 bg-dark-950/50 backdrop-blur-md">
<div className="max-w-4xl mx-auto px-6 py-6">
<div className="grid grid-cols-4 gap-4 text-center">
<div>
<div className="text-2xl text-white font-medium tracking-tight">14</div>
<div className="text-[10px] text-brand-500 uppercase tracking-widest font-medium"><span className="lang-en">Days</span><span className="lang-fr">Jours</span></div>
</div>
<div>
<div className="text-2xl text-white font-medium tracking-tight">80+</div>
<div className="text-[10px] text-brand-500 uppercase tracking-widest font-medium"><span className="lang-en">Hours</span><span className="lang-fr">Heures</span></div>
</div>
<div>
<div className="text-2xl text-white font-medium tracking-tight">10</div>
<div className="text-[10px] text-brand-500 uppercase tracking-widest font-medium"><span className="lang-en">Trainers</span><span className="lang-fr">Formateurs</span></div>
</div>
<div>
<div className="text-2xl text-white font-medium tracking-tight">12</div>
<div className="text-[10px] text-brand-500 uppercase tracking-widest font-medium"><span className="lang-en">Max Spots</span><span className="lang-fr">Places max</span></div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 bg-dark-900 border-b border-white/5">
<div className="max-w-5xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">
<span className="lang-en">Who is this training for?</span>
<span className="lang-fr">À qui s'adresse cette formation</span>
</h2>
<p className="text-slate-400 font-light text-lg max-w-2xl">
<span className="lang-en">Not for beginners. For coaches who want to be the best. <br/>We designed this program for serious professionals who already teach Muay Thai and want to elevate their coaching with the credentials to prove it.</span>
<span className="lang-fr">Pas pour les débutants. Pour les coachs qui veulent être les meilleurs. <br/>Nous avons conçu ce programme pour des professionnels sérieux qui enseignent déjà le Muay Thai et veulent élever leur coaching avec les diplômes pour le prouver.</span>
</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white/[0.03] p-6 rounded-xl border border-white/5 hover:border-brand-500/20 transition-all">
<iconify-icon className="text-brand-500 text-3xl mb-4" icon="solar:boxing-glove-linear"></iconify-icon>
<h3 className="text-white font-medium mb-2">
<span className="lang-en">Muay Thai Coaches</span>
<span className="lang-fr">Coachs Muay Thai</span>
</h3>
<p className="text-sm text-slate-500 leading-relaxed font-light">
<span className="lang-en">You already teach — now learn the methodology from the source. Perfect your padwork, clinch instruction and programming with stadium precision.</span>
<span className="lang-fr">Vous enseignez déjà — apprenez maintenant la méthodologie à la source. Perfectionnez votre padwork, votre enseignement du clinch et votre programmation avec la précision du stade.</span>
</p>
</div>

<div className="bg-white/[0.03] p-6 rounded-xl border border-white/5 hover:border-brand-500/20 transition-all">
<iconify-icon className="text-brand-500 text-3xl mb-4" icon="solar:buildings-linear"></iconify-icon>
<h3 className="text-white font-medium mb-2">
<span className="lang-en">Gym Owners</span>
<span className="lang-fr">Propriétaires de Salles</span>
</h3>
<p className="text-sm text-slate-500 leading-relaxed font-light">
<span className="lang-en">Bring credibility back to your gym. A Sitsongpeenong certification tells your clients you trained where champions are made.</span>
<span className="lang-fr">Ramenez de la crédibilité dans votre salle. Une certification Sitsongpeenong dit à vos clients que vous avez formé là où les champions sont forgés.</span>
</p>
</div>

<div className="bg-white/[0.03] p-6 rounded-xl border border-white/5 hover:border-brand-500/20 transition-all">
<iconify-icon className="text-brand-500 text-3xl mb-4" icon="solar:globe-linear"></iconify-icon>
<h3 className="text-white font-medium mb-2">
<span className="lang-en">International Coaches</span>
<span className="lang-fr">Coachs Internationaux</span>
</h3>
<p className="text-sm text-slate-500 leading-relaxed font-light">
<span className="lang-en">Whether from Europe, USA or Asia — come learn the Thai method. Instruction is in English with experienced Thai trainers.</span>
<span className="lang-fr">Que vous veniez d'Europe, des USA ou d'Asie — venez apprendre la méthode thaïlandaise. L'instruction est en anglais avec des entraîneurs thaïs expérimentés.</span>
</p>
</div>

<div className="bg-white/[0.03] p-6 rounded-xl border border-white/5 hover:border-brand-500/20 transition-all">
<iconify-icon className="text-brand-500 text-3xl mb-4" icon="solar:chart-square-linear"></iconify-icon>
<h3 className="text-white font-medium mb-2">
<span className="lang-en">Career Builders</span>
<span className="lang-fr">Bâtisseurs de Carrière</span>
</h3>
<p className="text-sm text-slate-500 leading-relaxed font-light">
<span className="lang-en">Launching a coaching career or going full time? This certification gives you the foundation and legitimacy to stand out from day one.</span>
<span className="lang-fr">Vous lancez une carrière de coach ou passez à temps plein ? Cette certification vous donne les bases et la légitimité pour vous démarquer dès le premier jour.</span>
</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50 text-dark-950">
<div className="max-w-5xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight text-dark-950 mb-4">
<span className="lang-en">What you will learn</span>
<span className="lang-fr">Ce que vous apprendrez</span>
</h2>
<p className="text-slate-500 font-light text-lg">
<span className="lang-en">14 days of pro training. Not a vacation with gloves.</span>
<span className="lang-fr">14 jours de formation pro. Pas des vacances avec des gants.</span>
</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<div>
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-brand-600 text-xl" icon="solar:target-linear"></iconify-icon>
<h4 className="font-semibold text-dark-950"><span className="lang-en">Padwork Mastery</span><span className="lang-fr">Maîtrise du Padwork</span></h4>
</div>
<p className="text-sm text-slate-600 font-light leading-relaxed">
<span className="lang-en">Learn the Sitsongpeenong pad holding system used to build world champions. Timing, rhythm, angles and the art of progressing fighters through pads.</span>
<span className="lang-fr">Apprenez le système de tenue de paos Sitsongpeenong utilisé pour former des champions du monde. Timing, rythme, angles et l'art de faire progresser les combattants grâce aux paos.</span>
</p>
</div>

<div>
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-brand-600 text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
<h4 className="font-semibold text-dark-950"><span className="lang-en">Clinch &amp; Elbows</span><span className="lang-fr">Clinch &amp; Coudes</span></h4>
</div>
<p className="text-sm text-slate-600 font-light leading-relaxed">
<span className="lang-en">Clinch is what separates Muay Thai from kickboxing. Master pedagogical progressions for grappling, sweeps, knees and elbows that your students will actually use.</span>
<span className="lang-fr">Le clinch est ce qui sépare le Muay Thai du kickboxing. Maîtrisez les progressions pédagogiques pour le corps à corps, balayages, genoux et coudes que vos élèves utiliseront vraiment sur le ring.</span>
</p>
</div>

<div>
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-brand-600 text-xl" icon="solar:clipboard-list-linear"></iconify-icon>
<h4 className="font-semibold text-dark-950"><span className="lang-en">Coaching Methodology</span><span className="lang-fr">Méthodologie de Coaching</span></h4>
</div>
<p className="text-sm text-slate-600 font-light leading-relaxed">
<span className="lang-en">How to structure classes, organize camps, program conditioning, and manage fighters from novice to competition. A complete system, not random techniques.</span>
<span className="lang-fr">Comment structurer vos cours, organiser des camps, programmer le conditionnement, et gérer vos combattants du débutant à la compétition. Un système complet, pas des techniques au hasard.</span>
</p>
</div>

<div>
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-brand-600 text-xl" icon="solar:bookmark-circle-linear"></iconify-icon>
<h4 className="font-semibold text-dark-950"><span className="lang-en">Muay Boran</span><span className="lang-fr">Muay Boran</span></h4>
</div>
<p className="text-sm text-slate-600 font-light leading-relaxed">
<span className="lang-en">Learn ancestral techniques that form the roots of modern Muay Thai. Understand history and apply traditional methods that add depth and authenticity.</span>
<span className="lang-fr">Apprenez les techniques ancestrales qui forment les racines du Muay Thai moderne. Comprenez l'histoire et appliquez les méthodes traditionnelles qui ajoutent profondeur et authenticité à votre coaching.</span>
</p>
</div>

<div>
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-brand-600 text-xl" icon="solar:graph-up-linear"></iconify-icon>
<h4 className="font-semibold text-dark-950"><span className="lang-en">Fight Analysis &amp; Corner</span><span className="lang-fr">Analyse de Combat &amp; Corner</span></h4>
</div>
<p className="text-sm text-slate-600 font-light leading-relaxed">
<span className="lang-en">Attend stadium fights with expert commentary. Learn to read rounds, adjust strategy between rounds, and give corner advice that wins fights.</span>
<span className="lang-fr">Assistez à des combats en stade avec commentaires d'experts. Apprenez à lire les rounds, ajuster la stratégie entre les rounds, et donner des conseils de corner qui font gagner des combats.</span>
</p>
</div>

<div>
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-brand-600 text-xl" icon="solar:heart-angle-linear"></iconify-icon>
<h4 className="font-semibold text-dark-950"><span className="lang-en">Culture &amp; Traditions</span><span className="lang-fr">Culture &amp; Traditions</span></h4>
</div>
<p className="text-sm text-slate-600 font-light leading-relaxed">
<span className="lang-en">Wai Kru ceremony, making your own Mongkol, spiritual dimension. Teach with the depth and respect this art deserves.</span>
<span className="lang-fr">Cérémonie du Wai Kru, fabrication de votre propre Mongkol, dimension spirituelle du Muay Thai. Enseignez avec la profondeur et le respect que cet art mérite.</span>
</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-dark-950">
<div className="max-w-4xl mx-auto">
<h2 className="text-2xl font-medium text-white mb-2">
<span className="lang-en">Typical Daily Schedule</span>
<span className="lang-fr">Programme Journalier Type</span>
</h2>
<p className="text-slate-400 text-sm font-light mb-10">
<span className="lang-en">Technical sessions morning and afternoon, cultural components and fight observation in evenings.</span>
<span className="lang-fr">Sessions techniques le matin et l'après-midi, composantes culturelles et observation de combats en soirée.</span>
</p>
<div className="space-y-0 border border-white/10 rounded-lg overflow-hidden text-sm">

<div className="flex flex-col md:flex-row border-b border-white/5 bg-white/[0.02]">
<div className="w-full md:w-32 p-4 text-brand-500 font-medium">06:30 – 07:00</div>
<div className="p-4 text-slate-300 font-light border-t md:border-t-0 md:border-l border-white/5 w-full">
<span className="lang-en">Morning warm-up &amp; conditioning run</span>
<span className="lang-fr">Échauffement matinal &amp; course de conditionnement</span>
</div>
</div>

<div className="flex flex-col md:flex-row border-b border-white/5">
<div className="w-full md:w-32 p-4 text-brand-500 font-medium">07:00 – 09:00</div>
<div className="p-4 text-slate-300 font-light border-t md:border-t-0 md:border-l border-white/5 w-full">
<span className="lang-en">Tech Session 1 — Padwork methodology, posture &amp; movement coaching</span>
<span className="lang-fr">Session technique 1 — Méthodologie padwork, coaching posture &amp; déplacements</span>
</div>
</div>

<div className="flex flex-col md:flex-row border-b border-white/5 bg-white/[0.02]">
<div className="w-full md:w-32 p-4 text-brand-500 font-medium">09:00 – 09:30</div>
<div className="p-4 text-slate-300 font-light border-t md:border-t-0 md:border-l border-white/5 w-full">
<span className="lang-en">Break &amp; Breakfast</span>
<span className="lang-fr">Pause &amp; petit-déjeuner</span>
</div>
</div>

<div className="flex flex-col md:flex-row border-b border-white/5">
<div className="w-full md:w-32 p-4 text-brand-500 font-medium">09:30 – 11:30</div>
<div className="p-4 text-slate-300 font-light border-t md:border-t-0 md:border-l border-white/5 w-full">
<span className="lang-en">Tech Session 2 — Clinch, elbows, knees, sweep progressions &amp; teaching practice</span>
<span className="lang-fr">Session technique 2 — Clinch, coudes, genoux, progressions de balayage &amp; pratique d'enseignement</span>
</div>
</div>

<div className="flex flex-col md:flex-row border-b border-white/5 bg-white/[0.02]">
<div className="w-full md:w-32 p-4 text-brand-500 font-medium">11:30 – 14:00</div>
<div className="p-4 text-slate-300 font-light border-t md:border-t-0 md:border-l border-white/5 w-full">
<span className="lang-en">Lunch &amp; Rest</span>
<span className="lang-fr">Déjeuner &amp; repos</span>
</div>
</div>

<div className="flex flex-col md:flex-row border-b border-white/5">
<div className="w-full md:w-32 p-4 text-brand-500 font-medium">14:00 – 16:00</div>
<div className="p-4 text-slate-300 font-light border-t md:border-t-0 md:border-l border-white/5 w-full">
<span className="lang-en">Afternoon Session — Coaching practice, pedagogical evaluations, sparring supervision</span>
<span className="lang-fr">Session après-midi — Pratique du coaching, évaluations pédagogiques, supervision sparring</span>
</div>
</div>

<div className="flex flex-col md:flex-row">
<div className="w-full md:w-32 p-4 text-brand-500 font-medium"><span className="lang-en">Evening</span><span className="lang-fr">Soirée</span></div>
<div className="p-4 text-slate-300 font-light border-t md:border-t-0 md:border-l border-white/5 w-full">
<span className="lang-en">Cultural sessions (Wai Kru, Mongkol making) or Stadium Fight Observation</span>
<span className="lang-fr">Sessions culturelles (Wai Kru, fabrication Mongkol) ou observation de combats en stade</span>
</div>
</div>
</div>
<p className="mt-4 text-xs text-slate-600 italic">
<span className="lang-en">* Schedule may vary. Full detailed PDF provided upon registration.</span>
<span className="lang-fr">* Le programme peut varier. PDF détaillé complet fourni à l'inscription.</span>
</p>
</div>
</section>

<section className="py-24 px-6 bg-dark-900 border-t border-white/5">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight text-white mb-16 text-center">
<span className="lang-en">Program Breakdown</span>
<span className="lang-fr">Déroulement du Programme</span>
</h2>
<div className="space-y-12">

<div className="flex gap-6">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-brand-500 text-dark-950 flex items-center justify-center font-bold text-sm">S1</div>
<div className="flex-1 w-px bg-white/10 my-2"></div>
</div>
<div className="pb-8">
<h3 className="text-white text-xl font-medium mb-2">
<span className="lang-en">Week 1 — Foundations &amp; Teaching Systems</span>
<span className="lang-fr">Semaine 1 — Fondations &amp; Systèmes d'Enseignement</span>
</h3>
<p className="text-slate-400 font-light text-sm leading-relaxed">
<span className="lang-en">Master Sitsongpeenong methodology. Padwork technique and mechanics, posture correction frameworks, beginner to intermediate class structure, conditioning program design, and clinch fundamentals. Alternating between learning and teaching practice.</span>
<span className="lang-fr">Maîtrisez la méthodologie Sitsongpeenong. Technique de padwork et mécanique du porteur de paos, cadres de correction de posture, structure de cours débutant à intermédiaire, conception de programmes de conditionnement, et fondamentaux du clinch. Chaque session alterne entre apprendre la technique et pratiquer comment l'enseigner aux autres.</span>
</p>
</div>
</div>

<div className="flex gap-6">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-brand-500 text-dark-950 flex items-center justify-center font-bold text-sm">S2</div>
<div className="flex-1 w-px bg-white/10 my-2"></div>
</div>
<div className="pb-8">
<h3 className="text-white text-xl font-medium mb-2">
<span className="lang-en">Week 2 — Advanced Coaching &amp; Certification</span>
<span className="lang-fr">Semaine 2 — Coaching Avancé &amp; Certification</span>
</h3>
<p className="text-slate-400 font-light text-sm leading-relaxed">
<span className="lang-en">Advanced clinch/elbow coaching, fight strategy and round analysis, corner methodology, traditional Muay Boran. Final evaluations where you demonstrate ability to lead a session autonomously. Certification ceremony.</span>
<span className="lang-fr">Coaching avancé du clinch et des coudes, stratégie de combat et analyse des rounds, méthodologie de corner, techniques traditionnelles Muay Boran. Évaluations finales où vous démontrez votre capacité à diriger une session complète de manière autonome. Cérémonie de certification pour clôturer le programme.</span>
</p>
</div>
</div>

<div className="grid md:grid-cols-2 gap-6 pl-16">
<div className="bg-white/[0.03] p-6 rounded-lg border border-white/5">
<div className="text-brand-500 text-2xl mb-2">🏟️</div>
<h4 className="text-white font-medium mb-2">
<span className="lang-en">Stadium Fight Nights</span>
<span className="lang-fr">Soirées Combat en Stade</span>
</h4>
<p className="text-xs text-slate-500 font-light">
<span className="lang-en">Live observations at Bangkok's legendary stadiums with real-time analysis. Understand scoring and corner work.</span>
<span className="lang-fr">Observations de combats en direct dans les stades légendaires de Bangkok avec analyse et décryptage en temps réel par les entraîneurs.</span>
</p>
</div>
<div className="bg-white/[0.03] p-6 rounded-lg border border-white/5">
<div className="text-brand-500 text-2xl mb-2">🙏</div>
<h4 className="text-white font-medium mb-2">
<span className="lang-en">Cultural Ceremonies</span>
<span className="lang-fr">Cérémonies Culturelles</span>
</h4>
<p className="text-xs text-slate-500 font-light">
<span className="lang-en">Wai Kru practice, Mongkol making, Muay Boran. The spiritual heart that separates authentic coaches.</span>
<span className="lang-fr">Pratique de la cérémonie du Wai Kru, fabrication de votre propre Mongkol, sessions de Muay Boran avec des maîtres.</span>
</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-brand-500 text-dark-950">
<div className="max-w-5xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-dark-950/10 pb-8">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-2">
<span className="lang-en">Included in registration</span>
<span className="lang-fr">Inclus dans l'inscription</span>
</h2>
<p className="text-dark-950/70 font-medium">
<span className="lang-en">Over $1,080 of equipment &amp; apparel — yours to keep</span>
<span className="lang-fr">Plus de $1 080 en équipement &amp; vêtements — à garder</span>
</p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
<div className="text-xl mb-2">🥊</div>
<div className="text-sm font-semibold"><span className="lang-en">Training Gloves</span><span className="lang-fr">Gants d'entraînement</span></div>
</div>
<div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
<div className="text-xl mb-2">🎯</div>
<div className="text-sm font-semibold"><span className="lang-en">Focus Mitts</span><span className="lang-fr">Pattes d'ours</span></div>
</div>
<div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
<div className="text-xl mb-2">🦵</div>
<div className="text-sm font-semibold"><span className="lang-en">Kick Pads</span><span className="lang-fr">Pao de frappe</span></div>
</div>
<div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
<div className="text-xl mb-2">🛡️</div>
<div className="text-sm font-semibold"><span className="lang-en">Belly Pad</span><span className="lang-fr">Plastron ventral</span></div>
</div>
<div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
<div className="text-xl mb-2">👑</div>
<div className="text-sm font-semibold"><span className="lang-en">Handmade Mongkol</span><span className="lang-fr">Mongkol fait main</span></div>
</div>
<div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
<div className="text-xl mb-2">🩳</div>
<div className="text-sm font-semibold"><span className="lang-en">2× Shorts</span><span className="lang-fr">2× Shorts Muay Thai</span></div>
</div>
<div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
<div className="text-xl mb-2">👕</div>
<div className="text-sm font-semibold"><span className="lang-en">6x Training Shirts</span><span className="lang-fr">2x Polos, T-shirts, Tanks</span></div>
</div>
<div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
<div className="text-xl mb-2">🥋</div>
<div className="text-sm font-semibold"><span className="lang-en">Boran Uniform</span><span className="lang-fr">Uniforme Muay Boran</span></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark-900 relative">
<div className="max-w-4xl mx-auto px-6">
<div className="mb-12 text-center">
<h2 className="text-3xl font-medium tracking-tight text-white">
<span className="lang-en">Investment</span>
<span className="lang-fr">Investissement</span>
</h2>
<p className="text-slate-400 mt-2 text-sm font-light">
<span className="lang-en">Transparent pricing. No hidden fees.</span>
<span className="lang-fr">Tarifs transparents. Pas de frais cachés.</span>
</p>
</div>

<div className="flex flex-col lg:flex-row gap-8">

<div className="flex-1 bg-white/[0.02] border border-white/10 rounded-xl p-8">
<div className="text-xs text-brand-500 font-medium uppercase tracking-widest mb-2">
<span className="lang-en">Training Fee</span>
<span className="lang-fr">Frais de Formation</span>
</div>
<div className="text-4xl text-white font-medium mb-1">$3,500</div>
<div className="text-slate-500 text-xs mb-8">USD — <span className="lang-en">One-time payment</span><span className="lang-fr">Paiement unique</span></div>
<ul className="space-y-3 mb-8 text-sm text-slate-300 font-light">
<li className="flex gap-3"><iconify-icon className="text-brand-500 mt-0.5" icon="solar:check-read-linear"></iconify-icon> <span className="lang-en">80+ hours intensive instruction</span><span className="lang-fr">80+ heures d'instruction intensive</span></li>
<li className="flex gap-3"><iconify-icon className="text-brand-500 mt-0.5" icon="solar:check-read-linear"></iconify-icon> <span className="lang-en">Full equipment kit ($1,080+)</span><span className="lang-fr">Kit complet d'équipement ($1 080+)</span></li>
<li className="flex gap-3"><iconify-icon className="text-brand-500 mt-0.5" icon="solar:check-read-linear"></iconify-icon> <span className="lang-en">Stadium visits &amp; expert analysis</span><span className="lang-fr">Observation de combats en stade</span></li>
<li className="flex gap-3"><iconify-icon className="text-brand-500 mt-0.5" icon="solar:check-read-linear"></iconify-icon> <span className="lang-en">Official Sitsongpeenong Certification</span><span className="lang-fr">Certification officielle Sitsongpeenong</span></li>
</ul>
</div>

<div className="flex-1 bg-dark-950 border border-white/10 rounded-xl p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10"><iconify-icon className="text-white" icon="solar:bed-linear" width="100"></iconify-icon></div>
<div className="text-xs text-brand-500 font-medium uppercase tracking-widest mb-2">
<span className="lang-en">Accommodation (Required)</span>
<span className="lang-fr">Hébergement (Obligatoire)</span>
</div>
<div className="text-4xl text-white font-medium mb-1">$690 — $1k</div>
<div className="text-slate-500 text-xs mb-8">USD — <span className="lang-en">Depending on room type</span><span className="lang-fr">Selon le type de chambre</span></div>
<div className="space-y-4 mb-8">
<div className="bg-white/5 p-3 rounded border border-white/5">
<div className="text-white text-sm font-medium flex justify-between">
<span><span className="lang-en">Single Room</span><span className="lang-fr">Chambre individuelle</span></span>
<span>$1,000</span>
</div>
<div className="text-xs text-slate-500">14 <span className="lang-en">nights</span><span className="lang-fr">nuits</span></div>
</div>
<div className="bg-white/5 p-3 rounded border border-white/5">
<div className="text-white text-sm font-medium flex justify-between">
<span><span className="lang-en">Double/Shared</span><span className="lang-fr">Double/Partagée</span></span>
<span>$690</span>
</div>
<div className="text-xs text-slate-500">14 <span className="lang-en">nights</span><span className="lang-fr">nuits</span></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50 text-dark-950" id="apply">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl font-medium tracking-tight mb-4">
<span className="lang-en">How to Apply</span>
<span className="lang-fr">Comment postuler</span>
</h2>
<p className="text-slate-500 mb-12">
<span className="lang-en">3 steps to confirm your spot.</span>
<span className="lang-fr">3 étapes pour confirmer votre place.</span>
</p>
<div className="grid md:grid-cols-3 gap-8 text-left">

<div>
<div className="text-4xl font-light text-brand-500 mb-4">01</div>
<h3 className="font-semibold text-lg mb-2">
<span className="lang-en">Email Reply</span>
<span className="lang-fr">Répondez par Email</span>
</h3>
<p className="text-sm text-slate-600 font-light leading-relaxed">
<span className="lang-en">Send your full name, coaching experience, and room preference (single or double).</span>
<span className="lang-fr">Envoyez votre nom complet, votre expérience en coaching ou en salle, et votre préférence d'hébergement.</span>
</p>
</div>

<div>
<div className="text-4xl font-light text-brand-500 mb-4">02</div>
<h3 className="font-semibold text-lg mb-2">
<span className="lang-en">Receive Instructions</span>
<span className="lang-fr">Recevez les Instructions</span>
</h3>
<p className="text-sm text-slate-600 font-light leading-relaxed">
<span className="lang-en">We will review your application and send payment details within 48h.</span>
<span className="lang-fr">Nous examinerons votre candidature et enverrons les détails de paiement sous 48h.</span>
</p>
</div>

<div>
<div className="text-4xl font-light text-brand-500 mb-4">03</div>
<h3 className="font-semibold text-lg mb-2">
<span className="lang-en">Deposit Payment</span>
<span className="lang-fr">Payez l'Acompte</span>
</h3>
<p className="text-sm text-slate-600 font-light leading-relaxed">
<span className="lang-en">Secure your spot before April 15. Confirmed upon receipt. First come, first served.</span>
<span className="lang-fr">Sécurisez votre place avant le 15 avril. Votre place n'est confirmée qu'à réception du paiement.</span>
</p>
</div>
</div>
<div className="mt-16 bg-white p-8 rounded-xl shadow-sm border border-slate-200">
<h3 className="text-xl font-medium mb-4">
<span className="lang-en">Ready to elevate your coaching?</span>
<span className="lang-fr">Prêt à élever votre coaching ?</span>
</h3>
<p className="text-slate-500 mb-8 font-light text-sm">
<span className="lang-en">Reply to apply. Include name, experience, and room preference.</span>
<span className="lang-fr">Répondez pour postuler. Incluez nom, expérience, et préférence de chambre.</span>
</p>
<a className="inline-flex items-center gap-2 bg-dark-950 text-white px-8 py-4 rounded hover:bg-brand-600 transition-colors" href="mailto:info@sitsongpeenong.com?subject=Instructor%20Course%20Application">
<span className="lang-en">Apply via Email →</span>
<span className="lang-fr">Postuler par Email →</span>
</a>
<div className="mt-4 text-xs text-slate-400">Tristian Dharmajiva — Sitsongpeenong Muay Thai Instructor Program</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-dark-950 border-t border-white/5">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl font-medium text-white mb-10 text-center">
<span className="lang-en">Frequently Asked Questions</span>
<span className="lang-fr">Questions Fréquentes</span>
</h2>
<div className="space-y-6">

<div>
<h4 className="text-white font-medium mb-2 flex items-start gap-2">
<span className="text-brand-500 mt-1"><iconify-icon icon="solar:question-circle-linear"></iconify-icon></span>
<span className="lang-en">Do I need to be an active fighter?</span>
<span className="lang-fr">Dois-je être un combattant actif pour participer ?</span>
</h4>
<p className="text-slate-400 text-sm font-light pl-6 leading-relaxed">
<span className="lang-en">No. This course is designed for coaches and gym owners. You need a solid Muay Thai foundation and teaching experience, but focus is on coaching methodology, not fighting skills.</span>
<span className="lang-fr">Non. Cette formation est conçue pour les coachs et propriétaires de salles, pas les compétiteurs actifs. Vous devez avoir une base solide et de l'expérience, mais l'accent est sur la méthodologie.</span>
</p>
</div>

<div>
<h4 className="text-white font-medium mb-2 flex items-start gap-2">
<span className="text-brand-500 mt-1"><iconify-icon icon="solar:question-circle-linear"></iconify-icon></span>
<span className="lang-en">What language is the course in?</span>
<span className="lang-fr">Dans quelle langue se déroule la formation ?</span>
</h4>
<p className="text-slate-400 text-sm font-light pl-6 leading-relaxed">
<span className="lang-en">The course is conducted in English by experienced Thai trainers who work with international fighters daily.</span>
<span className="lang-fr">La formation se déroule en anglais avec des entraîneurs thaïs expérimentés qui travaillent quotidiennement avec des combattants internationaux.</span>
</p>
</div>

<div>
<h4 className="text-white font-medium mb-2 flex items-start gap-2">
<span className="text-brand-500 mt-1"><iconify-icon icon="solar:question-circle-linear"></iconify-icon></span>
<span className="lang-en">Are meals included?</span>
<span className="lang-fr">Les repas sont-ils inclus ?</span>
</h4>
<p className="text-slate-400 text-sm font-light pl-6 leading-relaxed">
<span className="lang-en">Meals are not included in the tuition, but affordable, high-quality food is available at the camp and nearby.</span>
<span className="lang-fr">Les repas ne sont pas inclus, mais une nourriture abordable et de qualité est disponible au camp et à proximité.</span>
</p>
</div>
</div>
</div>
</section>

<footer className="bg-dark-950 border-t border-white/5 py-12 text-center">
<p className="text-sm text-slate-500 mb-2">Questions ? info@sitsongpeenong.com</p>
<p className="text-xs text-slate-600">
            © 2026 Sitsongpeenong Muay Thai · Bangkok, Thailand
        </p>
</footer>



    </>
  );
}
