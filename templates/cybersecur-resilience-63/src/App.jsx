import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.getElementById('quiz-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get values
            const formData = new FormData(e.target);
            let score = 0;
            
            // Collect User Data (simulate sending)
            const userData = {
                prenom: formData.get('prenom'),
                nom: formData.get('nom'),
                entreprise: formData.get('entreprise'),
                telephone: formData.get('telephone'),
                email: formData.get('email')
            };
            console.log("Lead Capturé:", userData);

            // Sum score (q1 to q10)
            for (let [key, value] of formData.entries()) {
                if(key.startsWith('q')) {
                    score += parseFloat(value);
                }
            }

            // UI Transitions
            const container = document.getElementById('diagnostic-container');
            const loader = document.getElementById('loader');
            const results = document.getElementById('results');
            const scoreValue = document.getElementById('score-value');
            const scoreBadge = document.getElementById('score-badge');
            const resultTitle = document.getElementById('result-title');
            const resultDesc = document.getElementById('result-desc');

            container.style.display = 'none';
            loader.classList.remove('hidden');
            loader.style.display = 'flex';

            // Simulate processing
            setTimeout(() => {
                loader.style.display = 'none';
                results.classList.remove('hidden');
                
                // Animate Score
                let currentScore = 0;
                const interval = setInterval(() => {
                    scoreValue.innerText = currentScore;
                    if (currentScore >= score) clearInterval(interval);
                    else currentScore += 0.5;
                }, 50);
                
                scoreValue.innerText = score;

                // Logic Results
                if (score < 5) {
                    scoreBadge.className = "inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-500/10 text-red-500 text-3xl font-bold mb-6 border-4 border-red-500/30 shadow-[0_0_30px_-10px_rgba(239,68,68,0.5)]";
                    resultTitle.innerHTML = "🚨 Risque Critique : Action Immédiate Requise";
                    resultDesc.innerHTML = `Bonjour ${userData.prenom}, votre infrastructure chez <strong>${userData.entreprise}</strong> présente des vulnérabilités majeures. En l'état, une attaque ransomware pourrait paralyser votre activité pendant plusieurs semaines.`;
                } else if (score >= 5 && score < 8) {
                    scoreBadge.className = "inline-flex items-center justify-center w-24 h-24 rounded-full bg-amber-500/10 text-amber-500 text-3xl font-bold mb-6 border-4 border-amber-500/30 shadow-[0_0_30px_-10px_rgba(245,158,11,0.5)]";
                    resultTitle.innerHTML = "⚠️ Vigilance : Niveau de Sécurité Inégal";
                    resultDesc.innerHTML = `Bonjour ${userData.prenom}, <strong>${userData.entreprise}</strong> dispose de bonnes bases, mais le "dernier kilomètre" de sécurité (PRA testé, segmentation) est manquant.`;
                } else {
                    scoreBadge.className = "inline-flex items-center justify-center w-24 h-24 rounded-full bg-emerald-500/10 text-emerald-500 text-3xl font-bold mb-6 border-4 border-emerald-500/30 shadow-[0_0_30px_-10px_rgba(16,185,129,0.5)]";
                    resultTitle.innerHTML = "🛡️ Excellente Résilience Opérationnelle";
                    resultDesc.innerHTML = `Félicitations ${userData.prenom}, votre maturité IT chez <strong>${userData.entreprise}</strong> est élevée. Votre défi est maintenant de maintenir ce niveau face aux évolutions de NIS2.`;
                }

                // Smooth scroll to top
                window.scrollTo({top: 0, behavior: 'smooth'});

            }, 1500);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">

<div className="absolute inset-0 bg-grid opacity-50"></div>

<div className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[50rem] h-[30rem] bg-blue-600/20 rounded-full blur-[120px] opacity-40"></div>
<div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-indigo-900/20 rounded-full blur-[100px] opacity-30"></div>
</div>

<nav className="relative z-50 w-full border-b border-white/5 backdrop-blur-md bg-slate-950/50">
<div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">

<div className="text-xl font-bold tracking-tighter text-white flex items-center gap-1">
                    NEXT<span className="text-blue-500">2</span>i
                </div>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">Audit &amp; Conseil</a>
<a className="hover:text-white transition-colors" href="#">Cybersécurité</a>
<a className="hover:text-white transition-colors" href="#">Cloud &amp; Infra</a>
</div>
<a className="text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded transition-all shadow-[0_0_15px_-3px_rgba(37,99,235,0.4)]" href="#contact">
                Espace Client
            </a>
</div>
</nav>
<main className="relative z-10 max-w-3xl mx-auto px-6 pt-12 pb-24">

<header className="text-center mb-12 fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase tracking-widest font-semibold mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Diagnostic Flash 2025
            </div>
<h1 className="text-3xl md:text-5xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                Évaluez la résilience de votre SI face aux <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">nouvelles menaces.</span>
</h1>
<p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
                Cyberattaques, pannes critiques, conformité NIS2 : votre entreprise est-elle prête ? NEXT2i vous accompagne dans la sécurisation de votre continuité d'activité.
            </p>
</header>

<div className="glass-panel rounded-xl p-6 md:p-10 shadow-2xl shadow-blue-900/10 fade-in" id="diagnostic-container" style={{animationDelay: '0.1s'}}>
<div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
<div>
<h2 className="text-lg font-semibold text-white tracking-tight">Questionnaire de Résilience</h2>
<p className="text-xs text-slate-500 mt-1">10 Points de contrôle • Confidentialité garantie</p>
</div>
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-white/10 text-blue-500">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<form className="space-y-10" id="quiz-form">

<div className="space-y-6">
<h3 className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">
<iconify-icon className="text-base" icon="solar:lock-password-linear"></iconify-icon>
                        I. Protection des Données
                    </h3>

<div className="group">
<label className="block text-sm font-medium text-slate-200 mb-3">1. Vos sauvegardes sont-elles immutables et déconnectées du réseau principal ?</label>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<label className="radio-card cursor-pointer bg-slate-900/50 border border-white/10 rounded p-3 hover:bg-slate-800 transition-all flex items-center gap-3">
<input className="hidden" name="q1" required="" type="radio" value="1"/>
<div className="radio-indicator w-4 h-4 rounded-full border border-slate-600 flex-shrink-0"></div>
<span className="text-xs text-slate-300">Oui, testées mensuellement</span>
</label>
<label className="radio-card cursor-pointer bg-slate-900/50 border border-white/10 rounded p-3 hover:bg-slate-800 transition-all flex items-center gap-3">
<input className="hidden" name="q1" type="radio" value="0.5"/>
<div className="radio-indicator w-4 h-4 rounded-full border border-slate-600 flex-shrink-0"></div>
<span className="text-xs text-slate-300">Partiellement / Cloud simple</span>
</label>
<label className="radio-card cursor-pointer bg-slate-900/50 border border-white/10 rounded p-3 hover:bg-slate-800 transition-all flex items-center gap-3">
<input className="hidden" name="q1" type="radio" value="0"/>
<div className="radio-indicator w-4 h-4 rounded-full border border-slate-600 flex-shrink-0"></div>
<span className="text-xs text-slate-300">Non / Je ne sais pas</span>
</label>
</div>
</div>

<div className="group">
<label className="block text-sm font-medium text-slate-200 mb-3">2. L'Authentification Multi-Facteurs (MFA) est-elle active sur 100% des accès ?</label>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<label className="radio-card cursor-pointer bg-slate-900/50 border border-white/10 rounded p-3 hover:bg-slate-800 transition-all flex items-center gap-3">
<input className="hidden" name="q2" required="" type="radio" value="1"/>
<div className="radio-indicator w-4 h-4 rounded-full border border-slate-600 flex-shrink-0"></div>
<span className="text-xs text-slate-300">Oui, généralisée</span>
</label>
<label className="radio-card cursor-pointer bg-slate-900/50 border border-white/10 rounded p-3 hover:bg-slate-800 transition-all flex items-center gap-3">
<input className="hidden" name="q2" type="radio" value="0.5"/>
<div className="radio-indicator w-4 h-4 rounded-full border border-slate-600 flex-shrink-0"></div>
<span className="text-xs text-slate-300">Admin seulement</span>
</label>
<label className="radio-card cursor-pointer bg-slate-900/50 border border-white/10 rounded p-3 hover:bg-slate-800 transition-all flex items-center gap-3">
<input className="hidden" name="q2" type="radio" value="0"/>
<div className="radio-indicator w-4 h-4 rounded-full border border-slate-600 flex-shrink-0"></div>
<span className="text-xs text-slate-300">Non déployée</span>
</label>
</div>
</div>

<div className="group">
<label className="block text-sm font-medium text-slate-200 mb-3">3. Avez-vous réalisé un audit de conformité (NIS2 / ISO 27001) récemment ?</label>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<label className="radio-card cursor-pointer bg-slate-900/50 border border-white/10 rounded p-3 hover:bg-slate-800 transition-all flex items-center gap-3">
<input className="hidden" name="q3" required="" type="radio" value="1"/>
<div className="radio-indicator w-4 h-4 rounded-full border border-slate-600 flex-shrink-0"></div>
<span className="text-xs text-slate-300">Oui, moins de 12 mois</span>
</label>
<label className="radio-card cursor-pointer bg-slate-900/50 border border-white/10 rounded p-3 hover:bg-slate-800 transition-all flex items-center gap-3">
<input className="hidden" name="q3" type="radio" value="0.5"/>
<div className="radio-indicator w-4 h-4 rounded-full border border-slate-600 flex-shrink-0"></div>
<span className="text-xs text-slate-300">En cours de réflexion</span>
</label>
<label className="radio-card cursor-pointer bg-slate-900/50 border border-white/10 rounded p-3 hover:bg-slate-800 transition-all flex items-center gap-3">
<input className="hidden" name="q3" type="radio" value="0"/>
<div className="radio-indicator w-4 h-4 rounded-full border border-slate-600 flex-shrink-0"></div>
<span className="text-xs text-slate-300">Non / Jamais</span>
</label>
</div>
</div>
</div>
<div className="w-full h-px bg-white/5"></div>

<div className="space-y-6">
<h3 className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">
<iconify-icon className="text-base" icon="solar:server-square-linear"></iconify-icon>
                        II. Robustesse Infrastructure
                    </h3>

<div className="group">
<label className="block text-sm font-medium text-slate-200 mb-3">4. Délai d'application des correctifs de sécurité critiques (Patch Management) ?</label>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<label className="radio-card cursor-pointer bg-slate-900/50 border border-white/10 rounded p-3 hover:bg-slate-800 transition-all flex items-center gap-3">
<input className="hidden" name="q4" required="" type="radio" value="1"/>
<div className="radio-indicator w-4 h-4 rounded-full border border-slate-600 flex-shrink-0"></div>
<span className="text-xs text-slate-300">&lt; 48 heures</span>
</label>
<label className="radio-card cursor-pointer bg-slate-900/50 border border-white/10 rounded p-3 hover:bg-slate-800 transition-all flex items-center gap-3">
<input className="hidden" name="q4" type="radio" value="0.5"/>
<div className="radio-indicator w-4 h-4 rounded-full border border-slate-600 flex-shrink-0"></div>
<span className="text-xs text-slate-300">Variable / Manuel</span>
</label>
<label className="radio-card cursor-pointer bg-slate-900/50 border border-white/10 rounded p-3 hover:bg-slate-800 transition-all flex items-center gap-3">
<input className="hidden" name="q4" type="radio" value="0"/>
<div className="radio-indicator w-4 h-4 rounded-full border border-slate-600 flex-shrink-0"></div>
<span className="text-xs text-slate-300">Non suivi</span>
</label>
</div>
</div>

<div className="group">
<label className="block text-sm font-medium text-slate-200 mb-3">5. Votre réseau est-il segmenté pour limiter la propagation latérale ?</label>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<label className="radio-card cursor-pointer bg-slate-900/50 border border-white/10 rounded p-3 hover:bg-slate-800 transition-all flex items-center gap-3">
<input className="hidden" name="q5" required="" type="radio" value="1"/>
<div className="radio-indicator w-4 h-4 rounded-full border border-slate-600 flex-shrink-0"></div>
<span className="text-xs text-slate-300">Oui, cloisonnement strict</span>
</label>
<label className="radio-card cursor-pointer bg-slate-900/50 border border-white/10 rounded p-3 hover:bg-slate-800 transition-all flex items-center gap-3">
<input className="hidden" name="q5" type="radio" value="0.5"/>
<div className="radio-indicator w-4 h-4 rounded-full border border-slate-600 flex-shrink-0"></div>
<span className="text-xs text-slate-300">Partiellement (VLANs)</span>
</label>
<label className="radio-card cursor-pointer bg-slate-900/50 border border-white/10 rounded p-3 hover:bg-slate-800 transition-all flex items-center gap-3">
<input className="hidden" name="q5" type="radio" value="0"/>
<div className="radio-indicator w-4 h-4 rounded-full border border-slate-600 flex-shrink-0"></div>
<span className="text-xs text-slate-300">Non, réseau plat</span>
</label>
</div>
</div>

<div className="group">
<label className="block text-sm font-medium text-slate-200 mb-3">6. Maîtrisez-vous le Shadow IT (applications installées sans contrôle) ?</label>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<label className="radio-card cursor-pointer bg-slate-900/50 border border-white/10 rounded p-3 hover:bg-slate-800 transition-all flex items-center gap-3">
<input className="hidden" name="q6" required="" type="radio" value="1"/>
<div className="radio-indicator w-4 h-4 rounded-full border border-slate-600 flex-shrink-0"></div>
<span className="text-xs text-slate-300">Oui, blocage actif</span>
</label>
<label className="radio-card cursor-pointer bg-slate-900/50 border border-white/10 rounded p-3 hover:bg-slate-800 transition-all flex items-center gap-3">
<input className="hidden" name="q6" type="radio" value="0.5"/>
<div className="radio-indicator w-4 h-4 rounded-full border border-slate-600 flex-shrink-0"></div>
<span className="text-xs text-slate-300">Sensibilisation</span>
</label>
<label className="radio-card cursor-pointer bg-slate-900/50 border border-white/10 rounded p-3 hover:bg-slate-800 transition-all flex items-center gap-3">
<input className="hidden" name="q6" type="radio" value="0"/>
<div className="radio-indicator w-4 h-4 rounded-full border border-slate-600 flex-shrink-0"></div>
<span className="text-xs text-slate-300">Aucune visibilité</span>
</label>
</div>
</div>
</div>
<div className="w-full h-px bg-white/5"></div>

<div className="space-y-6">
<h3 className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">
<iconify-icon className="text-base" icon="solar:refresh-circle-linear"></iconify-icon>
                        III. Continuité &amp; Reprise
                    </h3>

<div className="group">
<label className="block text-sm font-medium text-slate-200 mb-3">7. Pouvez-vous garantir un redémarrage (RTO) en moins de 4h après un crash ?</label>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<label className="radio-card cursor-pointer bg-slate-900/50 border border-white/10 rounded p-3 hover:bg-slate-800 transition-all flex items-center gap-3">
<input className="hidden" name="q7" required="" type="radio" value="1"/>
<div className="radio-indicator w-4 h-4 rounded-full border border-slate-600 flex-shrink-0"></div>
<span className="text-xs text-slate-300">Oui, testé et validé</span>
</label>
<label className="radio-card cursor-pointer bg-slate-900/50 border border-white/10 rounded p-3 hover:bg-slate-800 transition-all flex items-center gap-3">
<input className="hidden" name="q7" type="radio" value="0.5"/>
<div className="radio-indicator w-4 h-4 rounded-full border border-slate-600 flex-shrink-0"></div>
<span className="text-xs text-slate-300">Théoriquement oui</span>
</label>
<label className="radio-card cursor-pointer bg-slate-900/50 border border-white/10 rounded p-3 hover:bg-slate-800 transition-all flex items-center gap-3">
<input className="hidden" name="q7" type="radio" value="0"/>
<div className="radio-indicator w-4 h-4 rounded-full border border-slate-600 flex-shrink-0"></div>
<span className="text-xs text-slate-300">Non, délai inconnu</span>
</label>
</div>
</div>

<div className="group">
<label className="block text-sm font-medium text-slate-200 mb-3">8. Vos collaborateurs sont-ils entraînés contre le Phishing ?</label>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<label className="radio-card cursor-pointer bg-slate-900/50 border border-white/10 rounded p-3 hover:bg-slate-800 transition-all flex items-center gap-3">
<input className="hidden" name="q8" required="" type="radio" value="1"/>
<div className="radio-indicator w-4 h-4 rounded-full border border-slate-600 flex-shrink-0"></div>
<span className="text-xs text-slate-300">Oui, simulations régulières</span>
</label>
<label className="radio-card cursor-pointer bg-slate-900/50 border border-white/10 rounded p-3 hover:bg-slate-800 transition-all flex items-center gap-3">
<input className="hidden" name="q8" type="radio" value="0.5"/>
<div className="radio-indicator w-4 h-4 rounded-full border border-slate-600 flex-shrink-0"></div>
<span className="text-xs text-slate-300">Formation initiale seule</span>
</label>
<label className="radio-card cursor-pointer bg-slate-900/50 border border-white/10 rounded p-3 hover:bg-slate-800 transition-all flex items-center gap-3">
<input className="hidden" name="q8" type="radio" value="0"/>
<div className="radio-indicator w-4 h-4 rounded-full border border-slate-600 flex-shrink-0"></div>
<span className="text-xs text-slate-300">Non, aucune formation</span>
</label>
</div>
</div>

<div className="group">
<label className="block text-sm font-medium text-slate-200 mb-3">9. Disposez-vous de procédures "papier" en cas de panne totale du réseau ?</label>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<label className="radio-card cursor-pointer bg-slate-900/50 border border-white/10 rounded p-3 hover:bg-slate-800 transition-all flex items-center gap-3">
<input className="hidden" name="q9" required="" type="radio" value="1"/>
<div className="radio-indicator w-4 h-4 rounded-full border border-slate-600 flex-shrink-0"></div>
<span className="text-xs text-slate-300">Oui, mode dégradé prêt</span>
</label>
<label className="radio-card cursor-pointer bg-slate-900/50 border border-white/10 rounded p-3 hover:bg-slate-800 transition-all flex items-center gap-3">
<input className="hidden" name="q9" type="radio" value="0.5"/>
<div className="radio-indicator w-4 h-4 rounded-full border border-slate-600 flex-shrink-0"></div>
<span className="text-xs text-slate-300">Informel / Oral</span>
</label>
<label className="radio-card cursor-pointer bg-slate-900/50 border border-white/10 rounded p-3 hover:bg-slate-800 transition-all flex items-center gap-3">
<input className="hidden" name="q9" type="radio" value="0"/>
<div className="radio-indicator w-4 h-4 rounded-full border border-slate-600 flex-shrink-0"></div>
<span className="text-xs text-slate-300">Non, improvisation</span>
</label>
</div>
</div>

<div className="group">
<label className="block text-sm font-medium text-slate-200 mb-3">10. Budget Cybersécurité : est-il sanctuarisé et évolutif ?</label>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<label className="radio-card cursor-pointer bg-slate-900/50 border border-white/10 rounded p-3 hover:bg-slate-800 transition-all flex items-center gap-3">
<input className="hidden" name="q10" required="" type="radio" value="1"/>
<div className="radio-indicator w-4 h-4 rounded-full border border-slate-600 flex-shrink-0"></div>
<span className="text-xs text-slate-300">Oui, investissement</span>
</label>
<label className="radio-card cursor-pointer bg-slate-900/50 border border-white/10 rounded p-3 hover:bg-slate-800 transition-all flex items-center gap-3">
<input className="hidden" name="q10" type="radio" value="0.5"/>
<div className="radio-indicator w-4 h-4 rounded-full border border-slate-600 flex-shrink-0"></div>
<span className="text-xs text-slate-300">Ponctuel</span>
</label>
<label className="radio-card cursor-pointer bg-slate-900/50 border border-white/10 rounded p-3 hover:bg-slate-800 transition-all flex items-center gap-3">
<input className="hidden" name="q10" type="radio" value="0"/>
<div className="radio-indicator w-4 h-4 rounded-full border border-slate-600 flex-shrink-0"></div>
<span className="text-xs text-slate-300">Perçu comme un coût</span>
</label>
</div>
</div>
</div>

<div className="pt-8 mt-8 border-t border-white/5">
<div className="bg-slate-900 rounded-lg border border-slate-800 p-6 relative overflow-hidden">

<div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 blur-[40px] rounded-full"></div>
<div className="relative z-10">
<h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
<iconify-icon className="text-blue-400" icon="solar:user-id-linear"></iconify-icon>
                                Vos Coordonnées
                            </h4>
<p className="text-xs text-slate-400 mb-5">Recevez votre rapport d'audit détaillé et les recommandations de nos experts.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
<div>
<label className="block text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-1">Prénom</label>
<input className="w-full bg-slate-950 border border-slate-700 rounded p-2.5 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-700" name="prenom" required="" type="text"/>
</div>
<div>
<label className="block text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-1">Nom</label>
<input className="w-full bg-slate-950 border border-slate-700 rounded p-2.5 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-700" name="nom" required="" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
<div>
<label className="block text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-1">Entreprise</label>
<input className="w-full bg-slate-950 border border-slate-700 rounded p-2.5 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-700" name="entreprise" required="" type="text"/>
</div>
<div>
<label className="block text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-1">Téléphone</label>
<input className="w-full bg-slate-950 border border-slate-700 rounded p-2.5 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-700" name="telephone" required="" type="tel"/>
</div>
</div>
<div className="mb-6">
<label className="block text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-1">Email Professionnel</label>
<input className="w-full bg-slate-950 border border-slate-700 rounded p-2.5 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-700" name="email" placeholder="nom@entreprise.fr" required="" type="email"/>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm py-3 rounded transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 group" type="submit">
<span>Calculer mon score de résilience</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</button>
<p className="text-[10px] text-center text-slate-600 mt-3">En soumettant ce formulaire, vous acceptez d'être contacté par NEXT2i.</p>
</div>
</div>
</div>
</form>
</div>

<div className="hidden flex-col items-center justify-center py-20 fade-in" id="loader">
<div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mb-6"></div>
<p className="text-sm font-medium text-slate-300 animate-pulse">Analyse des vecteurs de risques NEXT2i...</p>
</div>

<div className="hidden glass-panel rounded-xl p-8 md:p-12 shadow-2xl fade-in mt-10 text-center relative overflow-hidden" id="results">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500"></div>
<div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-slate-800 text-3xl font-bold mb-6 border-4 border-slate-700 shadow-xl relative" id="score-badge">
<span id="score-value">0</span>/10
            </div>
<h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight" id="result-title"></h2>
<p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8" id="result-desc"></p>
<div className="bg-slate-900/80 rounded-lg p-6 border border-blue-500/20 text-left mb-8 relative">
<div className="absolute -left-[1px] top-4 bottom-4 w-1 bg-blue-500 rounded-r"></div>
<h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
<iconify-icon className="text-blue-400" icon="solar:bell-linear"></iconify-icon>
                    Recommandation Expert NEXT2i
                </h3>
<p className="text-xs text-slate-400 leading-5">
                    La Directive NIS2 impose désormais une responsabilité pénale aux dirigeants. Votre score indique des points d'attention qui nécessitent une remédiation rapide pour éviter une non-conformité ou un arrêt de production prolongé.
                </p>
</div>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm px-6 py-3 rounded shadow-lg shadow-blue-500/20 transition-all" href="#">
                    Prendre RDV avec un Expert
                </a>
<a className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-transparent border border-white/10 hover:bg-white/5 text-slate-300 font-medium text-sm px-6 py-3 rounded transition-all" href="#">
                    Télécharger le rapport PDF
                    <iconify-icon icon="solar:file-download-linear"></iconify-icon>
</a>
</div>
</div>
</main>
<footer className="border-t border-white/5 py-8 bg-slate-950 text-center relative z-10">
<div className="flex items-center justify-center gap-2 mb-4">
<span className="text-lg font-bold tracking-tighter text-slate-500">NEXT2i</span>
</div>
<p className="text-xs text-slate-600 font-medium">© 2025 NEXT2i - Tous droits réservés.</p>
<p className="text-[10px] text-slate-700 mt-2">Expertise Cybersécurité • Infrastructure • Cloud</p>
</footer>


    </>
  );
}
