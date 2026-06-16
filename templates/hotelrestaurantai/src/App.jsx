import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // ROI Calculator Logic
        function calculateROI() {
            // Get inputs
            const reservations = parseFloat(document.getElementById('reservations').value) || 0;
            const phonePercent = parseFloat(document.getElementById('phonePercent').value) / 100 || 0;
            const avgDuration = parseFloat(document.getElementById('avgDuration').value) || 0;
            const staffCost = parseFloat(document.getElementById('staffCost').value) || 0;
            const avgBooking = parseFloat(document.getElementById('avgBooking').value) || 0;
            const missedPercent = 0.15; // Fixed assumption from pitch deck (15%)

            // UI Updates
            document.getElementById('val-reservations').textContent = reservations;
            document.getElementById('val-phone').textContent = (phonePercent * 100).toFixed(0) + '%';
            document.getElementById('val-avg').textContent = avgBooking + '€';

            // Calculations
            const phoneReservations = reservations * phonePercent;
            const totalMinutes = phoneReservations * avgDuration;
            const totalHours = totalMinutes / 60;
            const currentCost = totalHours * staffCost;

            // AI handles 65% of calls (Pitch deck slide 6/9)
            const savings = currentCost * 0.65;

            // Missed reservations recovered
            const missedReservations = reservations * missedPercent;
            const additionalRevenue = missedReservations * avgBooking;

            // Solution Cost (Pro Plan)
            const solutionCost = 999;

            const totalGain = savings + additionalRevenue;
            const netBenefit = totalGain - solutionCost;
            const roi = ((netBenefit / solutionCost) * 100).toFixed(0);
            const yearlyBenefit = netBenefit * 12;

            // Format Currency
            const fmt = (num) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(num);

            // Output
            document.getElementById('savings').textContent = fmt(savings);
            document.getElementById('additional').textContent = fmt(additionalRevenue);
            document.getElementById('netBenefit').textContent = fmt(netBenefit);
            document.getElementById('yearlyBenefit').textContent = fmt(yearlyBenefit);
            document.getElementById('roiVal').textContent = roi;
        }

        function setType(type) {
            document.getElementById('type').value = type;
            const btnHotel = document.getElementById('btn-hotel');
            const btnResto = document.getElementById('btn-resto');
            
            if(type === 'hotel') {
                btnHotel.classList.add('bg-indigo-50', 'border-indigo-600', 'text-indigo-700');
                btnHotel.classList.remove('border-slate-200', 'text-slate-600', 'hover:bg-slate-50');
                btnResto.classList.remove('bg-indigo-50', 'border-indigo-600', 'text-indigo-700');
                btnResto.classList.add('border-slate-200', 'text-slate-600', 'hover:bg-slate-50');
                // Adjust defaults for Hotel
                document.getElementById('avgBooking').value = 150;
                document.getElementById('avgDuration').value = 8;
            } else {
                btnResto.classList.add('bg-indigo-50', 'border-indigo-600', 'text-indigo-700');
                btnResto.classList.remove('border-slate-200', 'text-slate-600', 'hover:bg-slate-50');
                btnHotel.classList.remove('bg-indigo-50', 'border-indigo-600', 'text-indigo-700');
                btnHotel.classList.add('border-slate-200', 'text-slate-600', 'hover:bg-slate-50');
                // Adjust defaults for Restaurant
                document.getElementById('avgBooking').value = 45; // lower avg ticket
                document.getElementById('avgDuration').value = 3; // shorter calls
            }
            calculateROI();
        }

        // Event Listeners
        const inputs = ['reservations', 'phonePercent', 'avgDuration', 'staffCost', 'avgBooking'];
        inputs.forEach(id => {
            document.getElementById(id).addEventListener('input', calculateROI);
        });

        // Initialize
        calculateROI();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-card border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-slate-900 font-semibold tracking-tight text-lg">
<iconify-icon icon="solar:stars-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
                HOTEL<span className="opacity-50">AI</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#problem">Problème</a>
<a className="hover:text-slate-900 transition-colors" href="#solution">Solution</a>
<a className="hover:text-slate-900 transition-colors" href="#roi">Calculateur ROI</a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">Tarifs</a>
</div>
<a className="hidden md:inline-flex items-center justify-center h-9 px-4 rounded-full bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10" href="#contact">
                Réserver une démo
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 -z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-50/50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
</div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600 mb-8 animate-fade-in-up">
<span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
                Nouvelle technologie Claude AI intégrée
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
                Votre concierge IA <br/>
<span className="text-slate-400">disponible 24/7.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                Transformez vos réservations avec l'intelligence artificielle. Automatisez 60% des appels et augmentez vos revenus sans surcharger votre équipe.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="h-12 px-8 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 flex items-center gap-2" href="#roi">
                    Calculer mon ROI
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>

<a className="h-12 px-8 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-all flex items-center gap-2 group" href="demo_interactive.html" target="_blank">
<iconify-icon className="text-indigo-600" icon="solar:laptop-minimalistic-linear" width="20"></iconify-icon>
                    Essayer la démo interactive
                    <iconify-icon className="opacity-50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-12 border-y border-slate-200/60 bg-white/50">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-8">Ils nous font confiance</p>
<div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-50 hover:opacity-100 transition-opacity duration-500">
<span className="text-xl font-semibold tracking-tighter text-slate-800">HÔTEL BELLEVUE</span>
<span className="text-xl font-semibold tracking-tighter text-slate-800">LE GRAND MONARQUE</span>
<span className="text-xl font-semibold tracking-tighter text-slate-800">VILLA FLORENTINE</span>
<span className="text-xl font-semibold tracking-tighter text-slate-800">RESTAURANT PAUL</span>
</div>
</div>
</section>

<section className="py-24 bg-white" id="problem">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Les hôtels perdent de l'argent chaque jour</h2>
<p className="text-lg text-slate-500">La gestion traditionnelle des réservations monopolise votre équipe et frustre vos clients internationaux.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
<div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600 mb-6">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Surcharge Téléphonique</h3>
<p className="text-slate-500 leading-relaxed">60% des réservations se font encore par téléphone, monopolisant votre personnel sur des tâches répétitives au lieu de l'accueil.</p>
</div>
<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
<div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 mb-6">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Horaires Fermés</h3>
<p className="text-slate-500 leading-relaxed">40% des appels arrivent hors heures d'ouverture. Chaque appel manqué est une réservation et un revenu définitivement perdus.</p>
</div>
<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
<div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
<iconify-icon icon="solar:global-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Barrière de la Langue</h3>
<p className="text-slate-500 leading-relaxed">Les clients internationaux abandonnent souvent face aux difficultés de communication. Coût estimé : 3000-6000€/mois en personnel.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white overflow-hidden relative" id="solution">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-medium text-indigo-400 mb-8">
<iconify-icon icon="solar:bolt-linear" width="16"></iconify-icon>
                    Powered by Claude AI
                </div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Un agent qui gère tout, automatiquement.</h2>
<p className="text-lg text-slate-400 mb-8 leading-relaxed">
                    Intégré à votre site web et WhatsApp, notre agent vérifie les disponibilités en temps réel, répond aux questions complexes et confirme les réservations dans plus de 20 langues.
                </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
                        Connexion directe à votre calendrier &amp; tarifs
                    </li>
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
                        Upselling intelligent (surclassement, options)
                    </li>
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
                        Installation en 48h sans compétence technique
                    </li>
</ul>
</div>

<div className="lg:w-1/2 w-full relative">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 lg:hidden"></div>
<div className="bg-white rounded-3xl shadow-2xl p-6 text-slate-900 max-w-md mx-auto relative z-0">
<div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:stars-minimalistic-bold" width="20"></iconify-icon>
</div>
<div>
<div className="font-semibold text-sm">Concierge IA</div>
<div className="text-xs text-green-500 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                    En ligne
                                </div>
</div>
</div>
</div>
<div className="space-y-4 text-sm">

<div className="flex justify-end">
<div className="bg-slate-100 text-slate-800 py-2.5 px-4 rounded-2xl rounded-tr-sm max-w-[85%]">
                                Je voudrais une chambre pour 2 personnes, demain soir.
                            </div>
</div>

<div className="flex justify-start">
<div className="bg-indigo-50 text-indigo-900 py-2.5 px-4 rounded-2xl rounded-tl-sm max-w-[90%]">
                                Bonjour ! Je vérifie nos disponibilités pour demain... 🏨
                                
                                Bonne nouvelle, nous avons une chambre Double Deluxe disponible avec vue sur jardin à 120€. Souhaitez-vous que je la réserve pour vous ?
                            </div>
</div>

<div className="flex justify-end">
<div className="bg-slate-100 text-slate-800 py-2.5 px-4 rounded-2xl rounded-tr-sm max-w-[85%]">
                                Parfait, je prends. Avez-vous un parking ?
                            </div>
</div>

<div className="flex justify-start">
<div className="bg-indigo-50 text-indigo-900 py-2.5 px-4 rounded-2xl rounded-tl-sm max-w-[90%]">
                                C'est noté ! ✅
                                
                                Oui, nous disposons d'un parking privé sécurisé (15€/jour). Je l'ajoute à votre réservation ?
                            </div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-slate-100 flex gap-2">
<div className="flex-1 bg-slate-50 rounded-full h-10 px-4 flex items-center text-slate-400 text-sm">Écrivez un message...</div>
<button className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center">
<iconify-icon icon="solar:plain-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-200">
<div className="max-w-4xl mx-auto px-6">
<div className="glass-card p-10 rounded-3xl border border-slate-200 shadow-sm text-center relative overflow-hidden">
<iconify-icon className="text-indigo-100 absolute top-4 left-6 text-9xl -z-10 opacity-50" icon="solar:quote-up-square-linear"></iconify-icon>
<div className="mb-8">
<div className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">"Une révolution pour notre équipe"</div>
<p className="text-lg text-slate-500 leading-relaxed italic">
                        Avant, on perdait 8h/jour au téléphone et environ 25 réservations par mois. Après 3 mois avec l'agent IA, les appels ont baissé de 65% et nous avons généré 18 000€ de revenus additionnels. Le ROI est indiscutable.
                    </p>
</div>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500 text-lg">MD</div>
<div className="text-left">
<div className="font-semibold text-slate-900">Marie D.</div>
<div className="text-sm text-slate-500">Directrice, Hôtel Le Bellevue (Lyon)</div>
</div>
</div>
<div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-100 pt-8">
<div>
<div className="text-2xl font-bold text-indigo-600">-60%</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">Appels</div>
</div>
<div>
<div className="text-2xl font-bold text-indigo-600">+30%</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">Resa Hors Heures</div>
</div>
<div>
<div className="text-2xl font-bold text-indigo-600">+25%</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">Upselling</div>
</div>
<div>
<div className="text-2xl font-bold text-indigo-600">450%</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">ROI</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden" id="roi">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">Calculez votre rentabilité</h2>
<p className="text-lg text-slate-500">Estimez vos économies et gains potentiels en quelques secondes.</p>
</div>
<div className="grid lg:grid-cols-12 gap-8 bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">

<div className="lg:col-span-5 p-8 border-r border-slate-100 bg-white">
<h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-6 flex items-center gap-2">
<iconify-icon icon="solar:settings-minimalistic-linear" width="18"></iconify-icon>
                        Vos Données
                    </h3>
<div className="space-y-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Type d'établissement</label>
<div className="grid grid-cols-2 gap-2">
<button className="px-4 py-2 text-sm font-medium rounded-lg border border-indigo-600 bg-indigo-50 text-indigo-700 transition-all" id="btn-hotel" onclick="setType('hotel')" type="button">Hôtel</button>
<button className="px-4 py-2 text-sm font-medium rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all" id="btn-resto" onclick="setType('restaurant')" type="button">Restaurant</button>
</div>
<input id="type" type="hidden" value="hotel"/>
</div>
<div>
<label className="flex justify-between text-sm font-medium text-slate-700 mb-2">
                                Réservations / mois
                                <span className="text-indigo-600" id="val-reservations">300</span>
</label>
<input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer" id="reservations" max="2000" min="50" step="10" type="range" value="300"/>
</div>
<div>
<label className="flex justify-between text-sm font-medium text-slate-700 mb-2">
                                % par téléphone
                                <span className="text-indigo-600" id="val-phone">60%</span>
</label>
<input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer" id="phonePercent" max="100" min="0" step="5" type="range" value="60"/>
</div>
<div>
<label className="flex justify-between text-sm font-medium text-slate-700 mb-2">
                                Valeur moyenne réservation
                                <span className="text-indigo-600" id="val-avg">150€</span>
</label>
<input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer" id="avgBooking" max="500" min="20" step="5" type="range" value="150"/>
</div>
<div className="pt-4 border-t border-slate-100">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Durée appel (min)</label>
<input className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" id="avgDuration" type="number" value="8"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Coût Staff/h (€)</label>
<input className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" id="staffCost" type="number" value="25"/>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 p-8 bg-slate-900 text-white flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none"></div>
<div className="">
<h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-8 flex items-center gap-2">
<iconify-icon icon="solar:chart-square-linear" width="18"></iconify-icon>
                            Résultats Mensuels
                        </h3>
<div className="grid grid-cols-2 gap-8 mb-10">
<div>
<div className="text-sm text-slate-400 mb-1">Économies Staff</div>
<div className="text-3xl font-semibold tracking-tight text-emerald-400" id="savings">390 €</div>
<div className="text-xs text-slate-500 mt-1">-65% de temps passé</div>
</div>
<div>
<div className="text-sm text-slate-400 mb-1">Revenus Récupérés</div>
<div className="text-3xl font-semibold tracking-tight text-emerald-400" id="additional">6 750 €</div>
<div className="text-xs text-slate-500 mt-1">Réservations hors horaires</div>
</div>
</div>
<div className="p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm">
<div className="flex justify-between items-end mb-2">
<span className="text-lg font-medium text-white">Bénéfice Net Mensuel</span>
<span className="text-4xl font-bold tracking-tight text-white" id="netBenefit">6 141 €</span>
</div>
<div className="flex justify-between text-sm text-slate-400 pt-4 border-t border-white/10 mt-4">
<span>Après coût abonnement (Pro)</span>
<span className="text-indigo-300 font-medium">ROI: <span id="roiVal">615</span>%</span>
</div>
</div>
</div>
<div className="mt-8 flex items-center justify-between">
<div>
<div className="text-sm text-slate-400">Gain annuel estimé</div>
<div className="text-xl font-semibold text-white" id="yearlyBenefit">73 692 €</div>
</div>
<a className="px-6 py-3 rounded-full bg-white text-slate-900 text-sm font-semibold hover:bg-slate-100 transition-colors" href="#contact">
                            Lancer ma période d'essai
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">Une tarification simple</h2>
<p className="text-lg text-slate-500">Sans engagement. Satisfait ou remboursé 30 jours.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 items-start">

<div className="p-8 rounded-3xl border border-slate-200 bg-white hover:border-slate-300 transition-all">
<h3 className="text-lg font-semibold text-slate-900">Essentiel</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-bold tracking-tight text-slate-900">499€</span>
<span className="text-slate-500">/mois</span>
</div>
<p className="text-sm text-slate-500 mt-2">Pour petits hôtels (&lt; 30 chambres)</p>
<ul className="mt-8 space-y-4 text-sm text-slate-600">
<li className="flex gap-3"><iconify-icon className="text-indigo-600 flex-shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon> Widget Web &amp; WhatsApp</li>
<li className="flex gap-3"><iconify-icon className="text-indigo-600 flex-shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon> 1000 conversations/mois</li>
<li className="flex gap-3"><iconify-icon className="text-indigo-600 flex-shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon> Support Email</li>
</ul>
<a className="mt-8 block w-full py-3 px-4 rounded-xl border border-slate-200 text-center text-sm font-semibold text-slate-900 hover:bg-slate-50 transition-colors" href="#contact">Choisir Essentiel</a>
</div>

<div className="p-8 rounded-3xl border-2 border-slate-900 bg-slate-900 text-white relative transform md:-translate-y-4 shadow-2xl">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-indigo-500 text-white text-xs font-bold rounded-full uppercase tracking-wide">Populaire</div>
<h3 className="text-lg font-semibold text-white">Professionnel</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-bold tracking-tight text-white">999€</span>
<span className="text-slate-400">/mois</span>
</div>
<p className="text-sm text-slate-400 mt-2">Hôtels moyens (30-100 chambres)</p>
<ul className="mt-8 space-y-4 text-sm text-slate-300">
<li className="flex gap-3"><iconify-icon className="text-indigo-400 flex-shrink-0" icon="solar:check-circle-bold" width="18"></iconify-icon> </li>
<li className="flex gap-3"><iconify-icon className="text-indigo-400 flex-shrink-0" icon="solar:check-circle-bold" width="18"></iconify-icon> 3000 conversations/mois</li>
<li className="flex gap-3"><iconify-icon className="text-indigo-400 flex-shrink-0" icon="solar:check-circle-bold" width="18"></iconify-icon> Branding personnalisé</li>
</ul>
<a className="mt-8 block w-full py-3 px-4 rounded-xl bg-white text-center text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors" href="#contact">Choisir Professionnel</a>
</div>

<div className="p-8 rounded-3xl border border-slate-200 bg-white hover:border-slate-300 transition-all">
<h3 className="text-lg font-semibold text-slate-900">Premium</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-bold tracking-tight text-slate-900">1899€</span>
<span className="text-slate-500">/mois</span>
</div>
<p className="text-sm text-slate-500 mt-2">Grands hôtels (100+ chambres)</p>
<ul className="mt-8 space-y-4 text-sm text-slate-600">
<li className="flex gap-3"><iconify-icon className="text-indigo-600 flex-shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon> Conversations Illimitées</li>
<li className="flex gap-3"><iconify-icon className="text-indigo-600 flex-shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon> Multi-sites</li>
<li className="flex gap-3"><iconify-icon className="text-indigo-600 flex-shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon> Account Manager dédié</li>
</ul>
<a className="mt-8 block w-full py-3 px-4 rounded-xl border border-slate-200 text-center text-sm font-semibold text-slate-900 hover:bg-slate-50 transition-colors" href="#contact">Contactez-nous</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-10 text-center">Questions fréquentes</h2>
<div className="space-y-4">
<details className="group bg-white p-6 rounded-2xl border border-slate-200 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer text-slate-900 font-medium">
                        Et si l'IA se trompe ?
                        <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-slate-500 text-sm leading-relaxed">
                        Le taux d'erreur mesuré est inférieur à 1%. L'agent vérifie en temps réel et en cas de doute, transfère automatiquement la conversation à un humain. Vous avez également accès à l'historique complet.
                    </p>
</details>
<details className="group bg-white p-6 rounded-2xl border border-slate-200 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer text-slate-900 font-medium">
                        Ça remplace mon équipe ?
                        <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-slate-500 text-sm leading-relaxed">
                        Non, ça l'aide ! L'IA gère les 60% de tâches répétitives. Votre équipe est soulagée et peut se concentrer sur l'accueil physique et le service premium.
                    </p>
</details>
<details className="group bg-white p-6 rounded-2xl border border-slate-200 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer text-slate-900 font-medium">
                        Combien de temps pour être rentable ?
                        <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-slate-500 text-sm leading-relaxed">
                        Le ROI est positif dès le 2ème mois en moyenne. Avec l'offre spéciale de lancement (installation gratuite + réduction), c'est souvent immédiat.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white text-center" id="contact">
<div className="max-w-3xl mx-auto px-6">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-500/20 text-indigo-400 mb-8">
<iconify-icon icon="solar:rocket-2-linear" width="32"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Prêt à moderniser votre hôtel ?</h2>
<p className="text-lg text-slate-400 mb-10">Offre de lancement : -50% les 3 premiers mois pour les 10 premiers inscrits. Installation gratuite.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="sm:w-auto hover:bg-slate-100 transition-all font-semibold text-slate-900 bg-white w-full rounded-full pt-4 pr-8 pb-4 pl-8" href="mailto:contact@hotel-ai.com">
                    Réserver ma démo gratuite
                </a>
<a className="sm:w-auto hover:bg-slate-800 transition-all flex items-center justify-center gap-2 font-semibold text-white w-full border-slate-700 border rounded-full pt-4 pr-8 pb-4 pl-8" href="https://wa.me/32">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
                    WhatsApp
                </a>
</div>
<div className="mt-16 pt-8 border-t border-slate-800 text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
<div>© 2024 HotelAI Solution. Tous droits réservés.</div>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Mentions légales</a>
<a className="hover:text-white" href="#">RGPD</a>
</div>
</div>
</div>
</section>


    </>
  );
}
