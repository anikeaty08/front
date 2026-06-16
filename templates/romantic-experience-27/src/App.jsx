import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
sage: '#7D9379',
sage_dark: '#5C6F59',
softpink: '#E8B4B8',
softpink_light: '#F5DCDD',
cream: '#FDFBF7',
gold: '#C9A962',
gold_hover: '#B09048',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
}
}
}
}



        // Mobile Menu
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        }

        // Accordion
        function toggleAccordion(id) {
            const content = document.getElementById(id);
            const icon = document.getElementById('icon-' + id);
            
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
            } else {
                content.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
            }
        }

        // Quiz Logic
        let currentStep = 1;
        const totalSteps = 7;

        function openQuiz() {
            document.getElementById('quiz-modal').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            resetQuiz();
        }

        function closeQuiz() {
            document.getElementById('quiz-modal').classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        function resetQuiz() {
            currentStep = 1;
            showStep(1);
            updateProgress(1);
            // Uncheck all inputs
            document.querySelectorAll('input[type="radio"]').forEach(el => el.checked = false);
            document.getElementById('occasion-select').selectedIndex = 0;
        }

        function nextStep() {
            if (currentStep < totalSteps) {
                currentStep++;
                showStep(currentStep);
                updateProgress(currentStep);
            } else {
                showStep('result');
                updateProgress(totalSteps + 1); // Full bar
            }
        }

        function showStep(stepId) {
            document.querySelectorAll('.quiz-step').forEach(el => {
                el.classList.remove('active');
            });
            
            if (stepId === 'result') {
                 document.querySelector(`.quiz-step[data-step="result"]`).classList.add('active');
            } else {
                document.querySelector(`.quiz-step[data-step="${stepId}"]`).classList.add('active');
            }
        }

        function updateProgress(step) {
            const percentage = (step / (totalSteps + 1)) * 100;
            document.getElementById('progress-bar').style.width = percentage + '%';
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-40 top-0 glass-nav border-b border-sage/10">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-sage hover:opacity-80 transition-opacity text-2xl font-medium tracking-tighter font-serif" href="#">
                Signé Ju
            </a>

<div className="hidden md:flex items-center space-x-8">
<a className="hover:text-sage transition-colors text-sm font-medium text-slate-600" href="/#how-it-works">Comment ça marche</a>
<a className="hover:text-sage transition-colors text-sm font-medium text-slate-600" href="/#pricing">Tarifs</a>
<a className="hover:text-sage transition-colors text-sm font-medium text-slate-600" href="#footer">Contact</a>
<button className="bg-sage text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-sage_dark transition-all shadow-sm hover:shadow-md" onclick="openQuiz()">
                    Mon profil amoureux
                </button>
</div>

<button className="md:hidden text-sage" onclick="toggleMobileMenu()">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden md:hidden absolute top-16 left-0 w-full bg-cream border-b border-sage/10 p-6 flex-col space-y-4 shadow-lg" id="mobile-menu">
<a className="text-base font-medium text-slate-700" href="#how-it-works">Comment ça marche</a>
<a className="text-base font-medium text-slate-700" href="#pricing">Tarifs</a>
<a className="text-base font-medium text-slate-700" href="#footer">Contact</a>
<button className="w-full bg-sage text-white py-3 rounded-lg text-sm font-medium" onclick="openQuiz()">Découvrir mon profil amoureux</button>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">

<div className="absolute top-0 right-0 w-96 h-96 bg-softpink/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 -z-10"></div>
<div className="text-center max-w-4xl mr-auto ml-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-sage/20 shadow-sm mb-8 animate-fade-in-up">
<iconify-icon className="text-softpink" icon="solar:heart-angle-linear" width="16"></iconify-icon>
<span className="uppercase text-xs font-medium text-slate-500 tracking-wider">Pour soutenir l'amour</span>
</div>
<h1 className="font-serif text-5xl md:text-7xl text-slate-900 tracking-tight leading-[1.1] mb-6 font-medium">
                Organisez un rendez-vous <span className="text-sage italic">romantique</span> sans y penser
            </h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-slate-600 max-w-2xl mr-auto mb-10 ml-auto" style={{}}>Dites-nous ce que vous cherchez, et nous réfléchissons le rendez-vous idéal pour vous reconnecter.</p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="w-full md:w-auto bg-gold hover:bg-gold_hover text-white px-8 py-4 rounded-lg text-base font-medium transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group" onclick="openQuiz()">
                    Créer mon rendez-vous personnalisé
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full md:w-auto border border-sage text-sage hover:bg-sage/5 px-8 py-4 rounded-lg text-base font-medium transition-all flex items-center justify-center gap-2" onclick="openQuiz()">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
                    Découvrir mon profil amoureux
                </button>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white">
<div className="max-w-6xl mx-auto">
<h2 className="font-serif text-3xl md:text-4xl text-center text-slate-900 mb-16 tracking-tight font-medium">Pourquoi est-ce si difficile ?</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-xl bg-cream border border-sage/10 hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-lg bg-softpink/20 flex items-center justify-center text-softpink mb-6">
<iconify-icon height="24" icon="solar:lightbulb-bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-medium mb-3 text-slate-800">Manque d'inspiration</h3>
<p className="text-slate-600 text-sm leading-relaxed">On finit toujours par faire les mêmes choses, les mêmes restaurants, la même routine.</p>
</div>

<div className="p-8 rounded-xl bg-cream border border-sage/10 hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-lg bg-sage/20 flex items-center justify-center text-sage mb-6">
<iconify-icon height="24" icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-medium mb-3 text-slate-800">Le manque de temps</h3>
<p className="text-slate-600 text-sm leading-relaxed">Planifier demande trop d'énergie après une longue semaine de travail.</p>
</div>

<div className="p-8 rounded-xl bg-cream border border-sage/10 hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center text-gold mb-6">
<iconify-icon height="24" icon="solar:question-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-medium mb-3 text-slate-800">L'incertitude</h3>
<p className="text-slate-600 text-sm leading-relaxed">Va-t-il aimer ? Est-ce le bon endroit ? La pression de réussir le moment gâche le plaisir.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-cream border-t border-sage/5" id="how-it-works">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<span className="text-sage uppercase block text-sm font-medium tracking-widest mb-2" style={{}}>notre solution</span>
<h2 className="font-serif text-3xl md:text-4xl text-slate-900 tracking-tight font-medium">Signé Ju fait le travail à votre place</h2>
</div>
<div className="grid md:grid-cols-4 gap-6 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 border-t border-dashed border-sage/30 -z-0"></div>

<div className="relative bg-white p-6 rounded-xl shadow-sm border border-sage/10 z-10 text-center">
<div className="w-10 h-10 mx-auto bg-sage text-white rounded-full flex items-center justify-center font-serif text-lg mb-4">1</div>
<h4 className="font-medium text-lg mb-2 text-slate-800">Vous répondez</h4>
<p className="text-sm text-slate-500">5 minutes pour cerner vos envies du moment.</p>
</div>

<div className="relative bg-white p-6 rounded-xl shadow-sm border border-sage/10 z-10 text-center">
<div className="w-10 h-10 mx-auto bg-sage text-white rounded-full flex items-center justify-center font-serif text-lg mb-4">2</div>
<h4 className="font-medium text-lg mb-2 text-slate-800">Notre algorithme analyse</h4>
<p className="text-sm text-slate-500">Nous croisons vos goûts avec nos pépites locales.</p>
</div>

<div className="relative bg-white p-6 rounded-xl shadow-sm border border-sage/10 z-10 text-center">
<div className="w-10 h-10 mx-auto bg-sage text-white rounded-full flex items-center justify-center font-serif text-lg mb-4">3</div>
<h4 className="font-medium text-lg mb-2 text-slate-800">Vous recevez l'idée</h4>
<p className="text-sm text-slate-500">Une proposition sur mesure directement par email.</p>
</div>

<div className="relative bg-white p-6 rounded-xl shadow-sm border border-sage/10 z-10 text-center">
<div className="w-10 h-10 mx-auto bg-sage text-white rounded-full flex items-center justify-center font-serif text-lg mb-4">4</div>
<h4 className="font-medium text-lg mb-2 text-slate-800">Profitez simplement</h4>
<p className="text-sm text-slate-500">Aucune charge mentale, juste le plaisir d'être ensemble.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="pricing">
<div className="max-w-6xl mx-auto">
<h2 className="font-serif text-3xl md:text-4xl text-center text-slate-900 mb-16 tracking-tight font-medium">Des formules pour chaque histoire</h2>
<div className="grid md:grid-cols-3 gap-8 items-start">

<div className="p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-lg transition-all">
<h3 className="font-serif text-2xl text-slate-800 mb-2">L'Essentielle</h3>
<div className="text-4xl font-serif text-sage mb-6">Gratuit</div>
<ul className="space-y-4 mb-8 text-sm text-slate-600">
<li className="flex items-center gap-3"><iconify-icon className="text-sage flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon> 1 idée de rendez-vous générique</li>
<li className="flex items-center gap-3"><iconify-icon className="text-sage flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon> Newsletter mensuelle</li>
<li className="flex items-center gap-3 opacity-50"><iconify-icon className="flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon> Pas de personnalisation</li>
</ul>
<button className="w-full py-3 rounded-lg border border-slate-200 text-slate-600 font-medium hover:border-sage hover:text-sage transition-colors">Découvrir</button>
</div>

<div className="p-8 rounded-2xl border-2 border-sage/20 bg-cream relative shadow-xl transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sage text-white px-4 py-1 rounded-full text-xs font-medium tracking-wide">LE PLUS POPULAIRE</div>
<h3 className="font-serif text-2xl text-slate-800 mb-2">L'Authentique</h3>
<div className="text-4xl font-serif text-sage mb-6">19€</div>
<ul className="space-y-4 mb-8 text-sm text-slate-600">
<li className="flex items-center gap-3"><iconify-icon className="text-sage flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon> 3 idées sur mesure</li>
<li className="flex items-center gap-3"><iconify-icon className="text-sage flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon> Lieux précis près de chez vous</li>
<li className="flex items-center gap-3"><iconify-icon className="text-sage flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon> Adapté à votre budget</li>
</ul>
<button className="w-full py-3 rounded-lg bg-gold text-white font-medium hover:bg-gold_hover transition-colors shadow-md">Choisir cette formule</button>
</div>

<div className="p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-lg transition-all">
<h3 className="font-serif text-2xl text-slate-800 mb-2">L'Exceptionnelle</h3>
<div className="text-4xl font-serif text-sage mb-6">49€</div>
<ul className="text-sm text-slate-600 mb-8 space-y-4">
<li className="flex items-center gap-3"><iconify-icon className="text-sage flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon> 5 idées premium</li>
<li className="flex items-center gap-3"><iconify-icon className="text-sage flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon> Service de réservation en option</li>
<li className="flex items-center gap-3"><iconify-icon className="text-sage flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon> Support concierge WhatsApp</li>
</ul>
<button className="w-full py-3 rounded-lg border border-slate-200 text-slate-600 font-medium hover:border-gold hover:text-gold transition-colors">Choisir l'exception</button>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-cream border-t border-sage/5">
<div className="max-w-6xl mx-auto">
<h2 className="md:text-4xl text-3xl font-medium text-slate-900 tracking-tight font-serif text-center mb-12">Pourquoi choisir Signé Ju ?</h2>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
<div className="bg-white p-6 rounded-lg text-center shadow-sm border border-transparent hover:border-sage/20 transition-all">
<div className="text-softpink mb-3 flex justify-center"><iconify-icon icon="solar:gift-linear" width="32"></iconify-icon></div>
<h4 className="font-medium text-slate-800 text-sm md:text-base">Surprendre sans rechercher</h4>
</div>
<div className="bg-white p-6 rounded-lg text-center shadow-sm border border-transparent hover:border-sage/20 transition-all">
<div className="text-sage mb-3 flex justify-center"><iconify-icon icon="solar:refresh-circle-linear" width="32"></iconify-icon></div>
<h4 className="font-medium text-slate-800 text-sm md:text-base">Renouveler la romance</h4>
</div>
<div className="bg-white p-6 rounded-lg text-center shadow-sm border border-transparent hover:border-sage/20 transition-all">
<div className="text-gold mb-3 flex justify-center"><iconify-icon icon="solar:star-linear" width="32"></iconify-icon></div>
<h4 className="font-medium text-slate-800 text-sm md:text-base">Occasion spéciale</h4>
</div>
<div className="bg-white p-6 rounded-lg text-center shadow-sm border border-transparent hover:border-sage/20 transition-all">
<div className="text-slate-400 mb-3 flex justify-center"><iconify-icon icon="solar:confounded-square-linear" width="32"></iconify-icon></div>
<h4 className="font-medium text-slate-800 text-sm md:text-base">Manque d'inspiration</h4>
</div>
<div className="bg-white p-6 rounded-lg text-center shadow-sm border border-transparent hover:border-sage/20 transition-all">
<div className="text-softpink mb-3 flex justify-center"><iconify-icon icon="solar:armchair-2-linear" width="32"></iconify-icon></div>
<h4 className="md:text-base text-sm font-medium text-slate-800">Profiter plutôt que planifier</h4>
</div>
<div className="bg-white p-6 rounded-lg text-center shadow-sm border border-transparent hover:border-sage/20 transition-all">
<div className="text-sage mb-3 flex justify-center"><iconify-icon icon="solar:heart-linear" width="32"></iconify-icon></div>
<h4 className="font-medium text-slate-800 text-sm md:text-base">Authenticité, pas générique</h4>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 bg-white border-y border-sage/10">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
<div>
<h3 className="font-serif text-2xl text-slate-900 mb-2">Pourquoi nous faire confiance ?</h3>
<p className="text-slate-500 text-sm">L'expertise au service de votre cœur.</p>
</div>
<div className="flex flex-wrap justify-center gap-8 md:gap-12">
<div className="flex items-center gap-2">
<iconify-icon className="text-gold text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">10k+ Rendez-vous</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-gold text-2xl" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Données protégées</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-gold text-2xl" icon="solar:smile-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Satisfaction garantie</span>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-cream">
<div className="max-w-3xl mx-auto">
<h2 className="font-serif text-3xl md:text-4xl text-center text-slate-900 mb-12 tracking-tight font-medium">Questions fréquentes</h2>
<div className="space-y-4">

<div className="bg-white rounded-lg border border-sage/10 overflow-hidden">
<button className="w-full flex items-center justify-between p-6 text-left" onclick="toggleAccordion('faq1')">
<span className="font-medium text-slate-800">Quels sont les délais de réponse ?</span>
<iconify-icon className="text-slate-400 transition-transform" icon="solar:alt-arrow-down-linear" id="icon-faq1"></iconify-icon>
</button>
<div className="hidden px-6 pb-6 text-sm text-slate-600" id="faq1">
                        Pour l'offre Authentique, vous recevez vos idées sous 48h. Pour l'offre Exceptionnelle, comptez 72h pour la recherche approfondie et les vérifications de disponibilité.
                    </div>
</div>

<div className="bg-white rounded-lg border border-sage/10 overflow-hidden">
<button className="w-full flex items-center justify-between p-6 text-left" onclick="toggleAccordion('faq2')">
<span className="font-medium text-slate-800">Puis-je modifier mes préférences ?</span>
<iconify-icon className="text-slate-400 transition-transform" icon="solar:alt-arrow-down-linear" id="icon-faq2"></iconify-icon>
</button>
<div className="hidden px-6 pb-6 text-sm text-slate-600" id="faq2">
                        Absolument. Avant la validation finale de votre dossier, un lien vous permet d'ajuster vos critères si vos envies changent.
                    </div>
</div>

<div className="bg-white rounded-lg border border-sage/10 overflow-hidden">
<button className="w-full flex items-center justify-between p-6 text-left" onclick="toggleAccordion('faq3')">
<span className="font-medium text-slate-800">Si je n'aime pas les propositions ?</span>
<iconify-icon className="text-slate-400 transition-transform" icon="solar:alt-arrow-down-linear" id="icon-faq3"></iconify-icon>
</button>
<div className="hidden px-6 pb-6 text-sm text-slate-600" id="faq3">
                        Votre satisfaction est primordiale. Nous proposons une révision gratuite de votre dossier si les premières idées ne vous conviennent pas totalement.
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-sage/5 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="font-serif text-3xl md:text-5xl text-slate-900 mb-8 tracking-tight font-medium">Prêt à organiser votre prochain rendez-vous romantique ?</h2>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="w-full md:w-auto bg-gold hover:bg-gold_hover text-white px-8 py-4 rounded-lg text-base font-medium transition-all shadow-md" onclick="openQuiz()">
                    Créer mon rendez-vous personnalisé
                </button>
<button className="w-full md:w-auto border border-sage text-sage hover:bg-white px-8 py-4 rounded-lg text-base font-medium transition-all" onclick="openQuiz()">
                    Découvrir mon profil amoureux
                </button>
</div>
</div>
</section>

<footer className="bg-slate-900 text-cream py-16 px-6" id="footer">
<div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-1">
<a className="font-serif text-2xl text-cream tracking-tighter mb-4 block" href="#">Signé Ju</a>
<p className="text-slate-400 text-sm leading-relaxed">Redécouvrez le plaisir de la rencontre amoureuse, sans le stress de l'organisation.</p>
</div>
<div className="">
<h4 className="font-medium mb-6 text-white">Liens rapides</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li className=""><a className="hover:text-gold transition-colors" href="/#how-it-works">Comment ça marche</a></li>
<li className=""><a className="hover:text-gold transition-colors" href="/#pricing">Nos tarifs</a></li>
<li className=""><a className="hover:text-gold transition-colors" href="#">À propos</a></li>
</ul>
</div>
<div className="">
<h4 className="font-medium mb-6 text-white">Légal</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li className=""><a className="hover:text-gold transition-colors" href="#">Mentions légales</a></li>
<li><a className="hover:text-gold transition-colors" href="#">Politique de confidentialité</a></li>
<li><a className="hover:text-gold transition-colors" href="#">CGV</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-6 text-white">Contact</h4>
<a className="text-sm text-gold hover:text-white transition-colors flex items-center gap-2" href="mailto:contact@signeju.fr">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
                    contact@signeju.fr
                </a>
<div className="flex gap-4 mt-6">
<a className="text-slate-400 hover:text-white" href="#"><iconify-icon icon="solar:instagram-linear" width="24"></iconify-icon></a>
<a className="text-slate-400 hover:text-white" href="#"><iconify-icon icon="solar:facebook-linear" width="24"></iconify-icon></a>
</div>
</div>
</div>
<div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-slate-800 text-center text-xs text-slate-600">
            © 2023 Signé Ju. Tous droits réservés. Design by Figma Make Prompt.
        </div>
</footer>

<div className="fixed inset-0 z-50 hidden" id="quiz-modal">
<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onclick="closeQuiz()"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">

<div className="bg-cream p-6 border-b border-sage/10 flex justify-between items-center sticky top-0 z-10">
<div>
<h3 className="font-serif text-xl font-medium text-slate-800">Profil Amoureux</h3>
<div className="w-full bg-slate-200 h-1 mt-2 rounded-full w-32">
<div className="bg-gold h-1 rounded-full transition-all duration-300" id="progress-bar" style={{width: '14%'}}></div>
</div>
</div>
<button className="text-slate-400 hover:text-slate-800 transition-colors" onclick="closeQuiz()">
<iconify-icon height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="p-8">

<div className="quiz-step active" data-step="1">
<h4 className="text-lg font-medium text-slate-900 mb-6">Comment définiriez-vous votre rendez-vous idéal ?</h4>
<div className="space-y-3">
<label className="cursor-pointer block group">
<input className="hidden checkbox-custom" name="q1" onclick="nextStep()" type="radio"/>
<div className="p-4 rounded-lg border border-slate-200 group-hover:border-sage transition-all flex items-center gap-3">
<iconify-icon className="text-slate-400" icon="solar:wine-glass-linear"></iconify-icon>
<span className="text-sm text-slate-700">Dîner aux chandelles classique</span>
</div>
</label>
<label className="cursor-pointer block group">
<input className="hidden checkbox-custom" name="q1" onclick="nextStep()" type="radio"/>
<div className="p-4 rounded-lg border border-slate-200 group-hover:border-sage transition-all flex items-center gap-3">
<iconify-icon className="text-slate-400" icon="solar:map-arrow-up-linear"></iconify-icon>
<span className="text-sm text-slate-700">Aventure en pleine nature</span>
</div>
</label>
<label className="cursor-pointer block group">
<input className="hidden checkbox-custom" name="q1" onclick="nextStep()" type="radio"/>
<div className="p-4 rounded-lg border border-slate-200 group-hover:border-sage transition-all flex items-center gap-3">
<iconify-icon className="text-slate-400" icon="solar:palette-linear"></iconify-icon>
<span className="text-sm text-slate-700">Activité créative et ludique</span>
</div>
</label>
<label className="cursor-pointer block group">
<input className="hidden checkbox-custom" name="q1" onclick="nextStep()" type="radio"/>
<div className="p-4 rounded-lg border border-slate-200 group-hover:border-sage transition-all flex items-center gap-3">
<iconify-icon className="text-slate-400" icon="solar:sofa-linear"></iconify-icon>
<span className="text-sm text-slate-700">Détente absolue à la maison</span>
</div>
</label>
</div>
</div>

<div className="quiz-step" data-step="2">
<h4 className="text-lg font-medium text-slate-900 mb-6">Budget idéal pour la soirée ?</h4>
<div className="space-y-3">
<label className="cursor-pointer block group">
<input className="hidden checkbox-custom" name="q2" onclick="nextStep()" type="radio"/>
<div className="p-4 rounded-lg border border-slate-200 group-hover:border-sage transition-all text-sm text-slate-700">Moins de 50€</div>
</label>
<label className="cursor-pointer block group">
<input className="hidden checkbox-custom" name="q2" onclick="nextStep()" type="radio"/>
<div className="p-4 rounded-lg border border-slate-200 group-hover:border-sage transition-all text-sm text-slate-700">Entre 50€ et 100€</div>
</label>
<label className="cursor-pointer block group">
<input className="hidden checkbox-custom" name="q2" onclick="nextStep()" type="radio"/>
<div className="p-4 rounded-lg border border-slate-200 group-hover:border-sage transition-all text-sm text-slate-700">Entre 100€ et 200€</div>
</label>
<label className="cursor-pointer block group">
<input className="hidden checkbox-custom" name="q2" onclick="nextStep()" type="radio"/>
<div className="p-4 rounded-lg border border-slate-200 group-hover:border-sage transition-all text-sm text-slate-700">Peu importe, tant que c'est magique</div>
</label>
</div>
</div>

<div className="quiz-step" data-step="3">
<h4 className="text-lg font-medium text-slate-900 mb-6">Plutôt ville ou nature ?</h4>
<div className="grid grid-cols-3 gap-3">
<label className="cursor-pointer group text-center">
<input className="hidden checkbox-custom" name="q3" onclick="nextStep()" type="radio"/>
<div className="p-4 rounded-lg border border-slate-200 group-hover:border-sage transition-all flex flex-col items-center justify-center gap-2 h-32">
<iconify-icon className="text-2xl text-slate-400" icon="solar:city-linear"></iconify-icon>
<span className="text-sm text-slate-700">Ville</span>
</div>
</label>
<label className="cursor-pointer group text-center">
<input className="hidden checkbox-custom" name="q3" onclick="nextStep()" type="radio"/>
<div className="p-4 rounded-lg border border-slate-200 group-hover:border-sage transition-all flex flex-col items-center justify-center gap-2 h-32">
<iconify-icon className="text-2xl text-slate-400" icon="solar:mountains-linear"></iconify-icon>
<span className="text-sm text-slate-700">Nature</span>
</div>
</label>
<label className="cursor-pointer group text-center">
<input className="hidden checkbox-custom" name="q3" onclick="nextStep()" type="radio"/>
<div className="p-4 rounded-lg border border-slate-200 group-hover:border-sage transition-all flex flex-col items-center justify-center gap-2 h-32">
<iconify-icon className="text-2xl text-slate-400" icon="solar:leaf-linear"></iconify-icon>
<span className="text-sm text-slate-700">Mélange</span>
</div>
</label>
</div>
</div>

<div className="quiz-step" data-step="4">
<h4 className="text-lg font-medium text-slate-900 mb-6">Type d'activité préférée ?</h4>
<div className="space-y-3">
<label className="cursor-pointer block group">
<input className="hidden checkbox-custom" name="q4" onclick="nextStep()" type="radio"/>
<div className="p-4 rounded-lg border border-slate-200 group-hover:border-sage transition-all text-sm text-slate-700">Gastronomie &amp; Dégustation</div>
</label>
<label className="cursor-pointer block group">
<input className="hidden checkbox-custom" name="q4" onclick="nextStep()" type="radio"/>
<div className="p-4 rounded-lg border border-slate-200 group-hover:border-sage transition-all text-sm text-slate-700">Culture &amp; Arts</div>
</label>
<label className="cursor-pointer block group">
<input className="hidden checkbox-custom" name="q4" onclick="nextStep()" type="radio"/>
<div className="p-4 rounded-lg border border-slate-200 group-hover:border-sage transition-all text-sm text-slate-700">Sport &amp; Sensations</div>
</label>
<label className="cursor-pointer block group">
<input className="hidden checkbox-custom" name="q4" onclick="nextStep()" type="radio"/>
<div className="p-4 rounded-lg border border-slate-200 group-hover:border-sage transition-all text-sm text-slate-700">Détente &amp; Bien-être</div>
</label>
</div>
</div>

<div className="quiz-step" data-step="5">
<h4 className="text-lg font-medium text-slate-900 mb-6">Votre approche du romantisme ?</h4>
<div className="space-y-3">
<label className="cursor-pointer block group">
<input className="hidden checkbox-custom" name="q5" onclick="nextStep()" type="radio"/>
<div className="p-4 rounded-lg border border-slate-200 group-hover:border-sage transition-all text-sm text-slate-700">Très romantique, grand jeu</div>
</label>
<label className="cursor-pointer block group">
<input className="hidden checkbox-custom" name="q5" onclick="nextStep()" type="radio"/>
<div className="p-4 rounded-lg border border-slate-200 group-hover:border-sage transition-all text-sm text-slate-700">Discret et intimiste</div>
</label>
<label className="cursor-pointer block group">
<input className="hidden checkbox-custom" name="q5" onclick="nextStep()" type="radio"/>
<div className="p-4 rounded-lg border border-slate-200 group-hover:border-sage transition-all text-sm text-slate-700">Pragmatique et simple</div>
</label>
<label className="cursor-pointer block group">
<input className="hidden checkbox-custom" name="q5" onclick="nextStep()" type="radio"/>
<div className="p-4 rounded-lg border border-slate-200 group-hover:border-sage transition-all text-sm text-slate-700">C'est un peu surfait...</div>
</label>
</div>
</div>

<div className="quiz-step" data-step="6">
<h4 className="text-lg font-medium text-slate-900 mb-6">Depuis quand êtes-vous ensemble ?</h4>
<div className="space-y-3">
<label className="cursor-pointer block group">
<input className="hidden checkbox-custom" name="q6" onclick="nextStep()" type="radio"/>
<div className="p-4 rounded-lg border border-slate-200 group-hover:border-sage transition-all text-sm text-slate-700">Moins d'un an (La passion)</div>
</label>
<label className="cursor-pointer block group">
<input className="hidden checkbox-custom" name="q6" onclick="nextStep()" type="radio"/>
<div className="p-4 rounded-lg border border-slate-200 group-hover:border-sage transition-all text-sm text-slate-700">1 à 5 ans (La construction)</div>
</label>
<label className="cursor-pointer block group">
<input className="hidden checkbox-custom" name="q6" onclick="nextStep()" type="radio"/>
<div className="p-4 rounded-lg border border-slate-200 group-hover:border-sage transition-all text-sm text-slate-700">5 à 10 ans (La stabilité)</div>
</label>
<label className="cursor-pointer block group">
<input className="hidden checkbox-custom" name="q6" onclick="nextStep()" type="radio"/>
<div className="p-4 rounded-lg border border-slate-200 group-hover:border-sage transition-all text-sm text-slate-700">Plus de 10 ans (L'éternité)</div>
</label>
</div>
</div>

<div className="quiz-step" data-step="7">
<h4 className="text-lg font-medium text-slate-900 mb-6">Est-ce pour une occasion spéciale ?</h4>
<select className="w-full p-4 mb-6 border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:border-sage bg-white" id="occasion-select">
<option disabled="" selected="" value="">Choisir une occasion...</option>
<option value="anniversaire_rencontre">Anniversaire de rencontre</option>
<option value="anniversaire">Anniversaire</option>
<option value="saint_valentin">Saint-Valentin</option>
<option value="demande">Demande en mariage</option>
<option value="juste_comme_ca">Juste un moment à deux</option>
<option value="aucune">Aucune en particulier</option>
</select>
<button className="w-full bg-sage text-white py-3 rounded-lg font-medium hover:bg-sage_dark transition-colors" onclick="nextStep()">Voir mes résultats</button>
</div>

<div className="quiz-step text-center" data-step="result">
<div className="w-16 h-16 bg-softpink/20 rounded-full flex items-center justify-center mx-auto mb-6 text-softpink animate-bounce">
<iconify-icon icon="solar:heart-bold" width="32"></iconify-icon>
</div>
<h4 className="font-serif text-2xl font-medium text-slate-900 mb-2">L'Explorateur Romantique</h4>
<p className="text-sm text-slate-600 mb-8 leading-relaxed">
                        Vous aimez sortir des sentiers battus tout en gardant une touche d'élégance. Votre rendez-vous idéal mélange découverte et intimité.
                    </p>
<div className="bg-cream p-6 rounded-xl border border-sage/10 mb-6 text-left">
<label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Recevoir mes 3 idées sur mesure</label>
<div className="flex gap-2">
<input className="flex-1 p-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-sage" placeholder="votre@email.com" type="email"/>
<button className="bg-gold text-white px-4 rounded-lg hover:bg-gold_hover transition-colors">
<iconify-icon icon="solar:plain-linear" width="20"></iconify-icon>
</button>
</div>
<p className="text-[10px] text-slate-400 mt-2">Nous ne spammons jamais. Promis.</p>
</div>
<button className="text-sm text-slate-500 hover:text-sage underline decoration-1 underline-offset-4" onclick="closeQuiz()">Fermer</button>
</div>
</div>
</div>
</div>



    </>
  );
}
