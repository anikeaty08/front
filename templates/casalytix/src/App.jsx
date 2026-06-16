import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
        
        function handleSubmit(event) {
            event.preventDefault();
            
            const form = event.target;
            const submitBtn = document.getElementById('submitBtn');
            const formMessage = document.getElementById('formMessage');
            const formData = new FormData(form);
            
            // Disable button
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span>Envoi en cours...</span>';
            
            // Get form data
            const name = formData.get('name');
            const email = formData.get('email');
            const company = formData.get('company');
            const service = formData.get('service');
            const message = formData.get('message');
            
            // Create mailto link
            const subject = encodeURIComponent(`Nouveau contact depuis Casalytix - ${service}`);
            const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\nSociété: ${company}\nService: ${service}\n\nMessage:\n${message}`);
            const mailtoLink = `mailto:kaidiyoussef11@gmail.com?subject=${subject}&body=${body}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            setTimeout(() => {
                formMessage.classList.remove('hidden');
                formMessage.classList.add('bg-green-50', 'text-green-800', 'border', 'border-green-200');
                formMessage.textContent = 'Votre client email devrait s\'ouvrir. Si ce n\'est pas le cas, envoyez-nous directement un email à kaidiyoussef11@gmail.com';
                
                // Reset button
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<span>Envoyer le message</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 ml-2"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>';
                
                // Reset form
                form.reset();
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.classList.add('hidden');
                    formMessage.classList.remove('bg-green-50', 'text-green-800', 'border', 'border-green-200');
                }, 5000);
            }, 500);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center">
<span className="text-2xl font-semibold tracking-tight text-gray-900" style={{letterSpacing: '-0.04em'}}>CASALYTIX</span>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="hover:text-gray-900 transition-colors text-sm font-medium text-gray-600" href="#services">Services</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#avantages">Avantages</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#processus">Processus</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#contact">Contact</a>
<a className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors" href="#contact">Demander un devis</a>
</div>
<button className="md:hidden">
<svg className="lucide lucide-menu w-6 h-6 text-gray-900" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</nav>

<section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="">
<div className="inline-flex items-center px-3 py-1 bg-blue-50 border border-blue-100 rounded-full mb-6">
<span className="text-sm font-medium text-blue-700">Solutions IT Offshore de confiance</span>
</div>
<h1 className="sm:text-6xl lg:text-7xl leading-tight text-5xl font-semibold text-gray-900 tracking-tight mb-6">
                        Transformez vos données en décisions stratégiques
                    </h1>
<p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                        Casalytix combine expertise technique et offshoring IT pour vous offrir des solutions data performantes et accessibles. Optimisez vos processus et réduisez vos coûts.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all hover:scale-105" href="#services">
                            Découvrir nos services
                            <svg className="lucide lucide-arrow-right w-5 h-5 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 bg-white border border-gray-300 text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-colors" href="#contact">
                            Demander un devis
                        </a>
</div>
<div className="mt-12 grid grid-cols-3 gap-8">
<div>
<div className="text-3xl font-semibold text-gray-900 mb-1">50+</div>
<div className="text-sm text-gray-600">Clients satisfaits</div>
</div>
<div>
<div className="text-3xl font-semibold text-gray-900 mb-1">200+</div>
<div className="text-sm text-gray-600">Projets livrés</div>
</div>
<div>
<div className="text-3xl font-semibold text-gray-900 mb-1">-40%</div>
<div className="text-sm text-gray-600">Réduction des coûts</div>
</div>
</div>
</div>
<div className="relative hidden lg:block">
<div className="aspect-square bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 shadow-2xl">
<div className="bg-white rounded-xl p-6 h-full flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-6">
<span className="text-sm font-medium text-gray-600">Performance Analytics</span>
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-gray-600">Efficiency</span>
<span className="font-medium text-gray-900">94%</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-blue-600 h-2 rounded-full" style={{width: '94%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-gray-600">Data Quality</span>
<span className="font-medium text-gray-900">98%</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-indigo-600 h-2 rounded-full" style={{width: '98%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-gray-600">Automation</span>
<span className="font-medium text-gray-900">87%</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-purple-600 h-2 rounded-full" style={{width: '87%'}}></div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
<div className="text-center">
<div className="text-2xl font-semibold text-gray-900">24/7</div>
<div className="text-xs text-gray-600">Support</div>
</div>
<div className="text-center">
<div className="text-2xl font-semibold text-gray-900">99.9%</div>
<div className="text-xs text-gray-600">Uptime</div>
</div>
<div className="text-center">
<div className="text-2xl font-semibold text-gray-900">&lt;2h</div>
<div className="text-xs text-gray-600">Response</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<div className="inline-flex items-center px-3 py-1 bg-blue-50 border border-blue-100 rounded-full mb-4">
<span className="text-sm font-medium text-blue-700">Nos expertises</span>
</div>
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
                    Des services adaptés à vos besoins
                </h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Nous combinons expertise technique et modèle offshore pour vous offrir des solutions performantes à coûts maîtrisés
                </p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="group p-8 bg-white border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
<svg className="lucide lucide-bar-chart-3 w-6 h-6 text-blue-600 group-hover:text-white transition-colors" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-gray-900 mb-3">Analyse de données</h3>
<p className="text-gray-600 mb-6 leading-relaxed">
                        Transformez vos données brutes en insights actionnables. Nous exploitons les techniques avancées de data mining, business intelligence et statistiques pour révéler les tendances cachées de votre activité.
                    </p>
<ul className="space-y-3">
<li className="flex items-start">
<svg className="lucide lucide-check w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-gray-600">Extraction et traitement de données complexes</span>
</li>
<li className="flex items-start">
<svg className="lucide lucide-check w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-gray-600">Modélisation prédictive et machine learning</span>
</li>
<li className="flex items-start">
<svg className="lucide lucide-check w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-gray-600">Reporting personnalisé et KPI stratégiques</span>
</li>
</ul>
</div>

<div className="group p-8 bg-white border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
<svg className="lucide lucide-layout-dashboard w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
</div>
<h3 className="text-2xl font-semibold text-gray-900 mb-3">Dashboards interactifs</h3>
<p className="text-gray-600 mb-6 leading-relaxed">
                        Visualisez vos données en temps réel avec des tableaux de bord intuitifs et personnalisés. Prenez des décisions éclairées grâce à des interfaces claires et des visualisations percutantes.
                    </p>
<ul className="space-y-3">
<li className="flex items-start">
<svg className="lucide lucide-check w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-gray-600">Dashboards sur-mesure (Power BI, Tableau, Looker)</span>
</li>
<li className="flex items-start">
<svg className="lucide lucide-check w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-gray-600">Visualisations interactives et drill-down</span>
</li>
<li className="flex items-start">
<svg className="lucide lucide-check w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-gray-600">Alertes automatiques et notifications</span>
</li>
</ul>
</div>

<div className="group p-8 bg-white border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
<svg className="lucide lucide-zap w-6 h-6 text-purple-600 group-hover:text-white transition-colors" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-gray-900 mb-3">Automatisation</h3>
<p className="text-gray-600 mb-6 leading-relaxed">
                        Gagnez en productivité et réduisez les erreurs humaines grâce à l'automatisation de vos processus métier. Nous concevons des workflows intelligents qui optimisent votre efficacité opérationnelle.
                    </p>
<ul className="space-y-3">
<li className="flex items-start">
<svg className="lucide lucide-check w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-gray-600">RPA et automatisation de tâches répétitives</span>
</li>
<li className="flex items-start">
<svg className="lucide lucide-check w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-gray-600">Workflows personnalisés et intégrations API</span>
</li>
<li className="flex items-start">
<svg className="lucide lucide-check w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-gray-600">Optimisation continue des processus</span>
</li>
</ul>
</div>

<div className="group p-8 bg-white border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
<svg className="lucide lucide-globe w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-gray-900 mb-3">Offshoring IT</h3>
<p className="text-gray-600 mb-6 leading-relaxed">
                        Bénéficiez d'équipes techniques dédiées et hautement qualifiées à des coûts optimisés. Notre modèle offshore vous garantit expertise, flexibilité et qualité de service sans compromis.
                    </p>
<ul className="space-y-3">
<li className="flex items-start">
<svg className="lucide lucide-check w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-gray-600">Équipes dédiées et scalables</span>
</li>
<li className="flex items-start">
<svg className="lucide lucide-check w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-gray-600">Support technique 24/7 multilingue</span>
</li>
<li className="flex items-start">
<svg className="lucide lucide-check w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-gray-600">Développement et maintenance d'applications</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" id="avantages">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<div className="inline-flex items-center px-3 py-1 bg-blue-50 border border-blue-100 rounded-full mb-4">
<span className="text-sm font-medium text-blue-700">Pourquoi nous choisir</span>
</div>
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
                    L'excellence au service de votre croissance
                </h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Casalytix s'engage à vous fournir des solutions de qualité qui transforment réellement votre business
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center">
<div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
<svg className="lucide lucide-award w-8 h-8 text-white" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Expertise technique approfondie</h3>
<p className="text-gray-600 leading-relaxed">
                        Une équipe de spécialistes certifiés maîtrisant les technologies les plus récentes et les meilleures pratiques du secteur
                    </p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
<svg className="lucide lucide-trending-down w-8 h-8 text-white" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Réduction des coûts</h3>
<p className="text-gray-600 leading-relaxed">
                        Jusqu'à 40% d'économies grâce à notre modèle offshore sans compromis sur la qualité de service
                    </p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
<svg className="lucide lucide-sliders w-8 h-8 text-white" data-lucide="sliders" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 8h4"></path><path d="M12 21v-9"></path><path d="M12 8V3"></path><path d="M17 16h4"></path><path d="M19 12V3"></path><path d="M19 21v-5"></path><path d="M3 14h4"></path><path d="M5 10V3"></path><path d="M5 21v-7"></path></svg>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Solutions sur-mesure</h3>
<p className="text-gray-600 leading-relaxed">
                        Des solutions personnalisées et scalables qui s'adaptent parfaitement à vos besoins et évoluent avec votre entreprise
                    </p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
<svg className="lucide lucide-headphones w-8 h-8 text-white" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Support réactif</h3>
<p className="text-gray-600 leading-relaxed">
                        Une équipe dédiée disponible 24/7 avec un temps de réponse garanti inférieur à 2 heures
                    </p>
</div>
</div>

<div className="mt-20 bg-white rounded-2xl border border-gray-200 p-8 sm:p-12">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center lg:text-left lg:border-r border-gray-200">
<div className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-2">10+</div>
<div className="text-gray-600">Années d'expérience</div>
</div>
<div className="text-center lg:text-left lg:border-r border-gray-200">
<div className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-2">50+</div>
<div className="text-gray-600">Clients dans le monde</div>
</div>
<div className="text-center lg:text-left lg:border-r border-gray-200">
<div className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-2">200+</div>
<div className="text-gray-600">Projets réalisés</div>
</div>
<div className="text-center lg:text-left">
<div className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-2">98%</div>
<div className="text-gray-600">Taux de satisfaction</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="processus">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<div className="inline-flex items-center px-3 py-1 bg-blue-50 border border-blue-100 rounded-full mb-4">
<span className="text-sm font-medium text-blue-700">Notre méthodologie</span>
</div>
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
                    Un processus éprouvé pour votre succès
                </h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Une approche structurée et collaborative pour garantir des résultats concrets et mesurables
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="relative">
<div className="bg-white border border-gray-200 rounded-2xl p-8 h-full hover:border-blue-300 hover:shadow-lg transition-all">
<div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
<span className="text-white font-semibold text-lg">1</span>
</div>
<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 mt-4">
<svg className="lucide lucide-search w-6 h-6 text-blue-600" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Analyse &amp; Découverte</h3>
<p className="text-gray-600 leading-relaxed">
                            Nous commençons par une écoute attentive de vos besoins, objectifs et contraintes. Audit complet de votre écosystème data existant.
                        </p>
</div>
</div>

<div className="relative">
<div className="bg-white border border-gray-200 rounded-2xl p-8 h-full hover:border-blue-300 hover:shadow-lg transition-all">
<div className="absolute -top-4 -left-4 w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
<span className="text-white font-semibold text-lg">2</span>
</div>
<div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 mt-4">
<svg className="lucide lucide-pen-tool w-6 h-6 text-indigo-600" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Conception &amp; Stratégie</h3>
<p className="text-gray-600 leading-relaxed">
                            Élaboration d'une roadmap détaillée et d'une architecture technique adaptée. Validation collaborative des solutions proposées.
                        </p>
</div>
</div>

<div className="relative">
<div className="bg-white border border-gray-200 rounded-2xl p-8 h-full hover:border-blue-300 hover:shadow-lg transition-all">
<div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg">
<span className="text-white font-semibold text-lg">3</span>
</div>
<div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 mt-4">
<svg className="lucide lucide-code w-6 h-6 text-purple-600" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Développement &amp; Tests</h3>
<p className="text-gray-600 leading-relaxed">
                            Mise en œuvre agile avec des sprints itératifs. Tests rigoureux et validation continue pour garantir la qualité du livrable.
                        </p>
</div>
</div>

<div className="relative">
<div className="bg-white border border-gray-200 rounded-2xl p-8 h-full hover:border-blue-300 hover:shadow-lg transition-all">
<div className="absolute -top-4 -left-4 w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
<span className="text-white font-semibold text-lg">4</span>
</div>
<div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 mt-4">
<svg className="lucide lucide-rocket w-6 h-6 text-emerald-600" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Déploiement &amp; Support</h3>
<p className="text-gray-600 leading-relaxed">
                            Mise en production sécurisée et formation de vos équipes. Support continu et optimisations pour maximiser votre ROI.
                        </p>
</div>
</div>
</div>

<div className="mt-16 text-center">
<div className="inline-flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all hover:scale-105" href="#contact">
                        Démarrer un projet
                        <svg className="lucide lucide-arrow-right w-5 h-5 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 bg-white border border-gray-300 text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-colors" href="#services">
                        En savoir plus
                    </a>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<div className="inline-flex items-center px-3 py-1 bg-blue-50 border border-blue-100 rounded-full mb-4">
<span className="text-sm font-medium text-blue-700">Témoignages clients</span>
</div>
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
                    Ils nous font confiance
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all">
<div className="flex items-center mb-4">
<svg className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400 ml-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400 ml-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400 ml-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400 ml-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-600 mb-6 leading-relaxed">
                        "Casalytix a transformé notre approche de la data. Les dashboards développés nous permettent de prendre des décisions en temps réel. L'équipe est ultra-réactive."
                    </p>
<div className="flex items-center">
<img alt="Client" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
<div className="ml-3">
<div className="font-semibold text-gray-900">Marc Dubois</div>
<div className="text-sm text-gray-600">CEO, TechCorp</div>
</div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all">
<div className="flex items-center mb-4">
<svg className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400 ml-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400 ml-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400 ml-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400 ml-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-600 mb-6 leading-relaxed">
                        "L'automatisation de nos processus nous a fait gagner un temps considérable. Le ROI a été au rendez-vous dès les 3 premiers mois. Je recommande vivement !"
                    </p>
<div className="flex items-center">
<img alt="Client" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop"/>
<div className="ml-3">
<div className="font-semibold text-gray-900">Sophie Martin</div>
<div className="text-sm text-gray-600">Directrice Ops, DataFlow</div>
</div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all">
<div className="flex items-center mb-4">
<svg className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400 ml-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400 ml-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400 ml-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400 ml-1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-600 mb-6 leading-relaxed">
                        "Un partenaire offshore fiable et compétent. La qualité du code et le respect des délais sont exemplaires. L'équipe est vraiment professionnelle."
                    </p>
<div className="flex items-center">
<img alt="Client" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop"/>
<div className="ml-3">
<div className="font-semibold text-gray-900">Thomas Leroy</div>
<div className="text-sm text-gray-600">CTO, InnovaSoft</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-8 bg-white pt-20 pr-4 pb-20 pl-4" id="contact">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-start">
<div className="">
<div className="inline-flex items-center px-3 py-1 bg-blue-50 border border-blue-100 rounded-full mb-6">
<span className="text-sm font-medium text-blue-700">Contactez-nous</span>
</div>
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
                        Prêt à transformer vos données ?
                    </h2>
<p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Discutons de votre projet et découvrez comment Casalytix peut vous aider à atteindre vos objectifs. Notre équipe est à votre écoute.
                    </p>
<div className="space-y-6">
<div className="flex items-start">
<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-mail w-6 h-6 text-blue-600" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div className="ml-4">
<div className="font-semibold text-gray-900 mb-1">Email</div>
<a className="hover:text-blue-600 transition-colors text-gray-600" href="mailto:kaidiyoussef11@gmail.com">kaidiyoussef11@gmail.com</a>
</div>
</div>
<div className="flex items-start">
<div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-phone w-6 h-6 text-indigo-600" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div className="ml-4">
<div className="font-semibold text-gray-900 mb-1">Téléphone</div>
<a className="hover:text-blue-600 transition-colors text-gray-600" href="tel:+212714073632">+212714073632</a>
</div>
</div>
<div className="flex items-start">
<div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-map-pin w-6 h-6 text-purple-600" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div className="ml-4">
<div className="font-semibold text-gray-900 mb-1">Adresse</div>
<p className="text-gray-600">Casablanca, Maroc</p>
</div>
</div>
</div>
<div className="mt-10">
<div className="font-semibold text-gray-900 mb-4">Suivez-nous</div>
<div className="flex space-x-4">
<a className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
</div>
</div>
</div>
<div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
<form className="space-y-6" id="contactForm" onsubmit="handleSubmit(event)">
<div className="hidden p-4 rounded-lg" id="formMessage"></div>
<div className="">
<label className="block text-sm font-medium text-gray-900 mb-2" htmlFor="name">Nom complet</label>
<input className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" id="name" name="name" placeholder="Jean Dupont" required="" type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-900 mb-2" htmlFor="email">Email</label>
<input className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" id="email" name="email" placeholder="jean.dupont@entreprise.com" required="" type="email"/>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-900 mb-2" htmlFor="company">Société</label>
<input className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" id="company" name="company" placeholder="Nom de votre société" required="" type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-900 mb-2" htmlFor="service">Service concerné</label>
<select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" id="service" name="service" required="">
<option>Analyse de données</option>
<option>Dashboards interactifs</option>
<option>Automatisation</option>
<option>Offshoring IT</option>
<option>Autre</option>
</select>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-900 mb-2" htmlFor="message">Message</label>
<textarea className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none" id="message" name="message" placeholder="Décrivez votre projet ou vos besoins..." required="" rows="4"></textarea>
</div>
<button className="hover:bg-blue-700 transition-all hover:scale-105 font-medium text-white bg-blue-600 w-full rounded-lg pt-3 pr-6 pb-3 pl-6 flex items-center justify-center" id="submitBtn" type="submit">
<span>Envoyer le message</span>
<svg className="lucide lucide-send w-5 h-5 ml-2" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
<div>
<span className="text-2xl font-semibold tracking-tight text-white mb-4 block" style={{letterSpacing: '-0.04em'}}>CASALYTIX</span>
<p className="text-gray-400 mb-6 leading-relaxed">
                        Transformez vos données en décisions stratégiques avec un partenaire offshore de confiance.
                    </p>
<div className="flex space-x-4">
<a className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
</div>
</div>
<div>
<h3 className="text-white font-semibold mb-4">Services</h3>
<ul className="space-y-3">
<li><a className="text-gray-400 hover:text-white transition-colors" href="#services">Analyse de données</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#services">Dashboards interactifs</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#services">Automatisation</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#services">Offshoring IT</a></li>
</ul>
</div>
<div>
<h3 className="text-white font-semibold mb-4">Entreprise</h3>
<ul className="space-y-3">
<li><a className="text-gray-400 hover:text-white transition-colors" href="#avantages">À propos</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#processus">Notre processus</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#">Carrières</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h3 className="text-white font-semibold mb-4">Ressources</h3>
<ul className="space-y-3">
<li><a className="text-gray-400 hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#">Études de cas</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#">Support</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 pt-8">
<div className="flex flex-col md:flex-row justify-between items-center">
<p className="text-gray-400 text-sm mb-4 md:mb-0">
                        © 2024 Casalytix. Tous droits réservés.
                    </p>
<div className="flex space-x-6">
<a className="text-gray-400 hover:text-white text-sm transition-colors" href="#">Mentions légales</a>
<a className="text-gray-400 hover:text-white text-sm transition-colors" href="#">Confidentialité</a>
<a className="text-gray-400 hover:text-white text-sm transition-colors" href="#">CGV</a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
