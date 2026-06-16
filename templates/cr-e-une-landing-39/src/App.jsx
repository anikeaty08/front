import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const heroForm = document.getElementById('hero-form');
            const urlInput = document.getElementById('url-input');
            
            const modal = document.getElementById('analysis-modal');
            const modalContainer = document.getElementById('modal-container');
            const modalClose = document.getElementById('modal-close');
            
            const viewLoader = document.getElementById('view-loader');
            const progressText = document.getElementById('progress-text');
            const progressCircle = document.getElementById('progress-circle');
            const stepText = document.getElementById('loading-step-text');
            
            const viewReport = document.getElementById('view-report');
            const reportBlurContainer = document.getElementById('report-blur-container');
            const emailGate = document.getElementById('email-gate');
            const popupEmailForm = document.getElementById('popup-email-form');
            const unblurBtn = document.getElementById('unblur-btn');

            const steps = [
                "Connexion au domaine...",
                "Analyse de l'architecture du site...",
                "Vérification des balises techniques...",
                "Scan de la présence locale (GEO)...",
                "Identification des erreurs critiques...",
                "Génération du rapport de performance..."
            ];

            let progressInterval;

            function openModal() {
                modal.classList.remove('opacity-0', 'pointer-events-none');
                modalContainer.classList.remove('scale-95');
                modalContainer.classList.add('scale-100');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }

            function closeModal() {
                modal.classList.add('opacity-0', 'pointer-events-none');
                modalContainer.classList.remove('scale-100');
                modalContainer.classList.add('scale-95');
                document.body.style.overflow = '';
            }

            modalClose.addEventListener('click', closeModal);

            // 1. Submit URL -> Open Modal and Start Progress
            heroForm.addEventListener('submit', (e) => {
                e.preventDefault();
                if(!urlInput.value) return;

                // Reset views just in case
                viewLoader.classList.remove('hidden');
                viewReport.classList.add('hidden');
                reportBlurContainer.classList.add('blur-[10px]', 'opacity-60', 'select-none');
                emailGate.classList.remove('opacity-0', 'pointer-events-none');
                modalClose.classList.add('hidden');
                unblurBtn.innerHTML = 'Déflouter mon rapport <iconify-icon icon="solar:eye-linear" class="text-lg"></iconify-icon>';
                
                let progress = 0;
                progressCircle.style.strokeDashoffset = 282.7;
                progressText.innerText = '0%';
                
                openModal();

                // Start Progress Animation
                progressInterval = setInterval(() => {
                    progress += 1;
                    if(progress > 100) progress = 100;
                    
                    progressText.innerText = Math.floor(progress) + '%';
                    
                    // Update SVG circle
                    const offset = 282.7 - (282.7 * progress / 100);
                    progressCircle.style.strokeDashoffset = offset;
                    
                    // Update Text
                    let stepIndex = Math.floor((progress / 100) * steps.length);
                    if(stepIndex >= steps.length) stepIndex = steps.length - 1;
                    stepText.innerText = steps[stepIndex];
                    
                    if(progress === 100) {
                        clearInterval(progressInterval);
                        
                        // Switch to Report View after a small delay
                        setTimeout(() => {
                            viewLoader.classList.add('hidden');
                            viewReport.classList.remove('hidden');
                        }, 600);
                    }
                }, 40); // 40ms * 100 = 4000ms (4 seconds)
            });

            // 2. Submit Email -> Unblur Report
            popupEmailForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Show loading state on button
                unblurBtn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin text-xl"></iconify-icon>';
                
                setTimeout(() => {
                    // Hide email gate smoothly
                    emailGate.classList.add('opacity-0', 'pointer-events-none');
                    
                    // Unblur the report
                    reportBlurContainer.classList.remove('blur-[10px]', 'opacity-60', 'select-none');
                    
                    // Show close button so user can exit
                    modalClose.classList.remove('hidden');

                    // Note: Here you would normally send the email to your database/API.
                    
                }, 1000);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden px-4">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-cyan-400/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-white/80 backdrop-blur-md mb-8 shadow-sm">
<iconify-icon className="text-cyan-600 text-sm" icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-semibold text-cyan-700 tracking-wide uppercase">Pour les e-commerçants</span>
</div>
<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-slate-900">
                90% des sites perdent du trafic sans le savoir… <br className="hidden md:block"/>
<span className="gradient-text">êtes-vous l’un d’eux ?</span>
</h1>
<p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-10 font-normal">
                Recevez un audit SEO + GEO complet de votre boutique en ligne et découvrez exactement où vous perdez des clients… et comment les récupérer immédiatement.
            </p>

<form className="max-w-2xl mx-auto glass-card p-2 rounded-2xl flex flex-col md:flex-row gap-2 relative z-20" id="hero-form">
<div className="relative flex-1">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
<iconify-icon className="text-slate-400 text-lg" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input className="w-full bg-transparent border-none py-3.5 pl-12 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 rounded-xl" id="url-input" placeholder="https://votre-boutique.com" required="" type="url"/>
</div>
<button className="cta-button shrink-0" id="hero-submit" type="submit">
<div className="points_wrapper">
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
</div>
<span className="inner" id="hero-btn-text">
                        Obtenir mon audit gratuit
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
</form>
<p className="text-xs text-slate-500 mt-4 flex items-center justify-center gap-1.5">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon> 100% gratuit. Résultat en quelques secondes.
            </p>
</div>
</section>

<section className="py-20 px-4 relative z-10 border-t border-slate-200 bg-white">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center max-w-3xl mx-auto mb-16 text-slate-900">
                Votre boutique pourrait générer <span className="text-blue-600">2 à 10x plus de ventes</span> si vous corrigez ces erreurs
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-slate-50 rounded-3xl p-6 relative overflow-hidden group border border-slate-100 hover:shadow-md transition-shadow">
<div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full blur-2xl group-hover:bg-red-200 transition-colors"></div>
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 relative z-10">
<iconify-icon className="text-2xl text-red-500" icon="solar:danger-triangle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-3 text-slate-900 relative z-10">Erreurs SEO invisibles</h3>
<p className="text-sm text-slate-500 leading-relaxed relative z-10">
                        Des balises manquantes aux problèmes d'indexation profonds, nous détectons les failles techniques qui repoussent les visiteurs et pénalisent votre classement.
                    </p>
</div>

<div className="bg-slate-50 rounded-3xl p-6 relative overflow-hidden group border border-slate-100 hover:shadow-md transition-shadow">
<div className="absolute top-0 right-0 w-32 h-32 bg-cyan-100 rounded-full blur-2xl group-hover:bg-cyan-200 transition-colors"></div>
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 relative z-10">
<iconify-icon className="text-2xl text-cyan-600" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-3 text-slate-900 relative z-10">Opportunités GEO locales</h3>
<p className="text-sm text-slate-500 leading-relaxed relative z-10">
                        Dominez votre zone de chalandise. Nous analysons votre présence locale et révélons comment attirer les clients qui recherchent vos produits à proximité.
                    </p>
</div>

<div className="bg-slate-50 rounded-3xl p-6 relative overflow-hidden group border border-slate-100 hover:shadow-md transition-shadow">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-full blur-2xl group-hover:bg-emerald-200 transition-colors"></div>
<div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 relative z-10">
<iconify-icon className="text-2xl text-emerald-500" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-3 text-slate-900 relative z-10">Fiches produits non optimisées</h3>
<p className="text-sm text-slate-500 leading-relaxed relative z-10">
                        Avoir du trafic ne suffit pas. L'audit identifie les pages où l'intention utilisateur est cassée et vous montre exactement comment structurer vos descriptions.
                    </p>
</div>
</div>
</div>
</section>

<div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300 px-4" id="analysis-modal">
<div className="bg-white w-full max-w-lg rounded-[2rem] shadow-2xl relative overflow-hidden transform scale-95 transition-transform duration-300" id="modal-container">

<button className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors z-20 hidden" id="modal-close">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>

<div className="p-12 flex flex-col items-center justify-center text-center min-h-[400px]" id="view-loader">
<div className="relative w-40 h-40 mb-8">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 100 100">
<circle className="text-slate-100" cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeWidth="6"></circle>
<circle className="text-cyan-500 circle-transition" cx="50" cy="50" fill="none" id="progress-circle" r="45" stroke="currentColor" stroke-dasharray="282.7" stroke-dashoffset="282.7" strokeLinecap="round" strokeWidth="6"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-4xl font-semibold tracking-tight text-slate-900" id="progress-text">0%</span>
</div>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Analyse en cours</h3>
<p className="text-sm text-slate-500 font-medium animate-pulse" id="loading-step-text">Initialisation de l'outil...</p>
</div>

<div className="hidden relative min-h-[450px]" id="view-report">

<div className="p-8 md:p-10 blur-[10px] select-none transition-all duration-700 opacity-60" id="report-blur-container">
<div className="text-center mb-8">
<div className="w-32 h-32 mx-auto rounded-full border-[6px] border-red-500 flex flex-col items-center justify-center text-red-500 mb-6 relative">
<div className="absolute inset-0 rounded-full border-[6px] border-red-200 border-t-red-500 animate-spin opacity-20"></div>
<div className="flex items-baseline">
<span className="text-5xl font-bold tracking-tight">23</span>
<span className="text-lg font-medium opacity-50">/100</span>
</div>
</div>
<h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">Score Critique Détecté</h3>
<p className="text-sm text-slate-500">Votre site passe à côté de trafic qualifié.</p>
</div>
<div className="space-y-3">
<div className="p-4 rounded-2xl bg-red-50 border border-red-100 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-red-500 text-xl" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<div className="flex-1 space-y-2">
<div className="h-3 bg-red-200 rounded w-1/3"></div>
<div className="h-2 bg-red-200/60 rounded w-3/4"></div>
</div>
</div>
<div className="p-4 rounded-2xl bg-red-50 border border-red-100 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-red-500 text-xl" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<div className="flex-1 space-y-2">
<div className="h-3 bg-red-200 rounded w-1/2"></div>
<div className="h-2 bg-red-200/60 rounded w-full"></div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/40 p-6 transition-all duration-500" id="email-gate">
<div className="bg-white p-8 rounded-[1.5rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 w-full max-w-sm text-center transform transition-transform">
<div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-red-100">
<iconify-icon className="text-2xl" icon="solar:lock-keyhole-linear"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">Analyse terminée</h4>
<p className="text-xs text-slate-500 mb-6 leading-relaxed">Nous avons détecté <span className="font-semibold text-red-500">des erreurs critiques</span>. Entrez votre email pour déflouter le rapport complet et corriger votre site.</p>
<form id="popup-email-form">
<div className="relative mb-3">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
<iconify-icon className="text-slate-400 text-lg" icon="solar:letter-linear"></iconify-icon>
</div>
<input className="w-full bg-slate-50 border border-slate-200 py-3 pl-10 pr-4 text-sm text-slate-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-shadow" id="popup-email-input" placeholder="votre@email.com" required="" type="email"/>
</div>
<button className="w-full bg-slate-900 text-white font-medium py-3 rounded-xl hover:bg-slate-800 transition-colors text-sm flex items-center justify-center gap-2" id="unblur-btn" type="submit">
                                Déflouter mon rapport <iconify-icon className="text-lg" icon="solar:eye-linear"></iconify-icon>
</button>
<p className="text-[10px] text-slate-400 mt-4 flex items-center justify-center gap-1">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon> 100% sécurisé et confidentiel
                            </p>
</form>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
