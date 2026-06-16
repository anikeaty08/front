import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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
500: '#3b82f6',
600: '#2563eb',
700: '#1d4ed8',
900: '#1e3a8a',
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'blob': 'blob 7s infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
}
}
}
}
}



      // Scroll Reveal Animation
      document.addEventListener('DOMContentLoaded', () => {
          const observerOptions = {
              root: null,
              rootMargin: '0px',
              threshold: 0.1
          };

          const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('active');
                      observer.unobserve(entry.target);
                  }
              });
          }, observerOptions);

          const revealElements = document.querySelectorAll('.reveal');
          revealElements.forEach(el => observer.observe(el));
      });

      // Sticky Header Effect
      window.addEventListener('scroll', () => {
          const navbar = document.getElementById('navbar');
          if (window.scrollY > 20) {
              navbar.classList.add('shadow-sm');
              navbar.querySelector('.glass-effect').classList.remove('border-transparent');
              navbar.querySelector('.glass-effect').classList.add('border-slate-200/50');
          } else {
              navbar.classList.remove('shadow-sm');
              navbar.querySelector('.glass-effect').classList.remove('border-slate-200/50');
              navbar.querySelector('.glass-effect').classList.add('border-transparent');
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 transition-all duration-300 border-b border-transparent" id="navbar">
<div className="glass-effect absolute inset-0 w-full h-full border-b border-slate-200/50"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
<div className="flex items-center justify-between h-16">

<div className="flex-shrink-0 cursor-pointer group">
<span className="text-xl font-medium tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors">
              DigiBuild
              <span className="text-brand-600">.</span>
</span>
</div>

<div className="hidden md:block">
<div className="ml-10 flex items-baseline space-x-8">
<a className="text-sm font-medium text-slate-900 hover:text-brand-600 transition-colors" href="#home">
                Accueil
              </a>
<a className="text-sm font-medium text-slate-500 hover:text-brand-600 transition-colors" href="#services">
                Services
              </a>
<a className="px-4 py-2 text-sm font-medium text-white bg-slate-900 hover:bg-brand-600 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/20" href="#contact">
                Nous Contacter
              </a>
</div>
</div>

<div className="-mr-2 flex md:hidden">
<button className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-900 hover:bg-slate-50 focus:outline-none" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" type="button">
<iconify-icon height="24" icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-white border-b border-slate-100 absolute w-full" id="mobile-menu">
<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
<a className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 hover:bg-slate-50" href="#home">
            Accueil
          </a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-brand-600 hover:bg-slate-50" href="#services">
            Services
          </a>
<a className="block px-3 py-2 mt-4 text-center rounded-md text-base font-medium bg-brand-600 text-white" href="#contact">
            Nous Contacter
          </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="home">

<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
<div className="absolute top-0 right-0 -z-10 translate-x-1/3 -translate-y-1/4 w-96 h-96 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
<div className="absolute bottom-0 left-0 -z-10 -translate-x-1/3 translate-y-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
<div className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-600 mb-8 reveal">
<span className="flex h-2 w-2 rounded-full bg-brand-600 mr-2 animate-pulse"></span>
          Nouvelle approche web 2024
        </div>
<h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 mb-6 reveal stagger-delay-1 max-w-4xl mx-auto">
          Nous créons des sites web qui génèrent des
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600">
            résultats
          </span>
</h1>
<p className="text-lg sm:text-xl text-slate-500 mb-10 max-w-2xl mx-auto reveal stagger-delay-2 leading-relaxed">
          Transformez votre présence en ligne avec DigiBuild. Nous concevons des
          expériences digitales sur mesure qui captivent votre audience et
          propulsent votre croissance.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal stagger-delay-3">
<a className="w-full sm:w-auto px-8 py-4 text-sm font-medium text-white bg-brand-600 rounded-lg hover:bg-brand-700 transition-all hover:scale-[1.02] shadow-xl shadow-brand-500/20 flex items-center justify-center gap-2 group" href="#contact">
            Démarrer Votre Projet
            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2" href="#portfolio">
            Voir Nos Réalisations
          </a>
</div>

<div className="mt-16 pt-8 border-t border-slate-100 reveal stagger-delay-3">
<p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-6">
            La confiance de plus de 50 entreprises
          </p>
<div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-800">
<iconify-icon icon="lucide:hexagon"></iconify-icon>
              Nexus
            </div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-800">
<iconify-icon icon="lucide:triangle"></iconify-icon>
              Vertex
            </div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-800">
<iconify-icon icon="lucide:circle"></iconify-icon>
              Sphere
            </div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-800">
<iconify-icon icon="lucide:box"></iconify-icon>
              Cube
            </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl mb-4">
            Nos Expertises
          </h2>
<p className="text-slate-500">
            Des solutions complètes pour chaque étape de votre croissance
            digitale.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 reveal stagger-delay-1">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="lucide:layout" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Web Design</h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Designs UI/UX personnalisés, intuitifs et responsive qui
              renforcent votre identité de marque.
            </p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 reveal stagger-delay-2">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="lucide:code-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">
              Développement
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Sites ultra-rapides, sécurisés et évolutifs construits avec les
              dernières technologies.
            </p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 reveal stagger-delay-3">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">E-commerce</h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Boutiques en ligne optimisées pour la conversion pour transformer
              les visiteurs en clients.
            </p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 reveal stagger-delay-1">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="lucide:bar-chart-3" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">
              SEO &amp; Marketing
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Stratégies de visibilité pour vous placer en tête des résultats de
              recherche.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="process">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="mb-20 text-center reveal">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl mb-4">
            Comment Nous Travaillons
          </h2>
<p className="text-slate-500">Un processus simple et transparent.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">

<div className="relative reveal stagger-delay-1">
<div className="w-24 h-24 bg-white border border-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm z-10 relative">
<span className="text-3xl font-semibold text-brand-600">01</span>
</div>
<div className="text-center">
<h3 className="text-lg font-medium text-slate-900 mb-2">
                  Découverte
                </h3>
<p className="text-xs text-slate-500">
                  Analyse de vos besoins et définition des objectifs.
                </p>
</div>
</div>

<div className="relative reveal stagger-delay-2">
<div className="w-24 h-24 bg-white border border-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm z-10 relative">
<span className="text-3xl font-semibold text-brand-600">02</span>
</div>
<div className="text-center">
<h3 className="text-lg font-medium text-slate-900 mb-2">Design</h3>
<p className="text-xs text-slate-500">
                  Création des maquettes et de l'identité visuelle.
                </p>
</div>
</div>

<div className="relative reveal stagger-delay-3">
<div className="w-24 h-24 bg-white border border-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm z-10 relative">
<span className="text-3xl font-semibold text-brand-600">03</span>
</div>
<div className="text-center">
<h3 className="text-lg font-medium text-slate-900 mb-2">
                  Développement
                </h3>
<p className="text-xs text-slate-500">
                  Intégration technique et tests de performance.
                </p>
</div>
</div>

<div className="relative reveal stagger-delay-1">
<div className="w-24 h-24 bg-white border border-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm z-10 relative">
<span className="text-3xl font-semibold text-brand-600">04</span>
</div>
<div className="text-center">
<h3 className="text-lg font-medium text-slate-900 mb-2">
                  Lancement
                </h3>
<p className="text-xs text-slate-500">
                  Mise en ligne et formation à la gestion.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="portfolio">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl mb-2">
              Nos Réalisations
            </h2>
<p className="text-slate-500">Découvrez nos derniers projets.</p>
</div>
<a className="hidden md:flex items-center text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors mt-4 md:mt-0" href="#">
            Voir tout le portfolio
            <iconify-icon className="ml-2" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 reveal stagger-delay-1">
<div className="aspect-[4/3] overflow-hidden bg-slate-200 relative">

<div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-300"></div>
<div className="absolute inset-0 flex items-center justify-center text-slate-400">
<iconify-icon icon="lucide:image" strokeWidth="1" width="48"></iconify-icon>
</div>
<div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="text-white text-sm font-medium border border-white/30 rounded-full px-6 py-2 backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Voir le Projet
                </span>
</div>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-slate-900">
                Maison Architekt
              </h3>
<p className="text-xs text-slate-500 mt-1">
                Immobilier • Site Vitrine
              </p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 reveal stagger-delay-2">
<div className="aspect-[4/3] overflow-hidden bg-slate-200 relative">
<div className="absolute inset-0 bg-gradient-to-bl from-blue-100 to-slate-200"></div>
<div className="absolute inset-0 flex items-center justify-center text-slate-400">
<iconify-icon icon="lucide:image" strokeWidth="1" width="48"></iconify-icon>
</div>
<div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="text-white text-sm font-medium border border-white/30 rounded-full px-6 py-2 backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Voir le Projet
                </span>
</div>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-slate-900">EcoMarket</h3>
<p className="text-xs text-slate-500 mt-1">Commerce • E-shop</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 reveal stagger-delay-3">
<div className="aspect-[4/3] overflow-hidden bg-slate-200 relative">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-white"></div>
<div className="absolute inset-0 flex items-center justify-center text-slate-400">
<iconify-icon icon="lucide:image" strokeWidth="1" width="48"></iconify-icon>
</div>
<div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="text-white text-sm font-medium border border-white/30 rounded-full px-6 py-2 backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Voir le Projet
                </span>
</div>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-slate-900">
                FinTech Solutions
              </h3>
<p className="text-xs text-slate-500 mt-1">
                Finance • Application Web
              </p>
</div>
</div>
</div>
<div className="mt-8 text-center md:hidden">
<a className="inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors" href="#">
            Voir tout le portfolio
            <iconify-icon className="ml-2" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl font-medium tracking-tight text-center text-slate-900 mb-16 reveal">
          Ce que disent nos clients
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 bg-slate-50 rounded-2xl reveal stagger-delay-1">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 italic">
              "Une équipe à l'écoute et un résultat au-delà de nos espérances.
              Notre trafic a augmenté de 40%."
            </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-xs font-bold">
                SO
              </div>
<div>
<div className="text-sm font-medium text-slate-900">Sophie O.</div>
<div className="text-xs text-slate-500">Directrice Marketing</div>
</div>
</div>
</div>

<div className="p-8 bg-slate-50 rounded-2xl reveal stagger-delay-2">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 italic">
              "DigiBuild a su capturer l'essence de notre marque. Le design est
              épuré et ultra moderne."
            </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-xs font-bold">
                MR
              </div>
<div>
<div className="text-sm font-medium text-slate-900">Marc R.</div>
<div className="text-xs text-slate-500">CEO, TechStart</div>
</div>
</div>
</div>

<div className="p-8 bg-slate-50 rounded-2xl reveal stagger-delay-3">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 italic">
              "Un processus fluide du début à la fin. Le suivi après le
              lancement est impeccable."
            </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-xs font-bold">
                JL
              </div>
<div>
<div className="text-sm font-medium text-slate-900">Jean L.</div>
<div className="text-xs text-slate-500">Fondateur, BioStore</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600 rounded-full mix-blend-overlay filter blur-[100px] opacity-20 animate-pulse"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="reveal">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-6">
              Prêt à lancer votre projet ?
            </h2>
<p className="text-slate-400 mb-10 text-lg">
              Discutons de vos objectifs et voyons comment nous pouvons vous
              aider à les atteindre. Devis gratuit sous 24h.
            </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brand-400">
<iconify-icon icon="lucide:mail" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400">Email</p>
<a className="text-sm font-medium hover:text-brand-400 transition-colors" href="mailto:hello@digibuild.com">
                    hello@digibuild.com
                  </a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brand-400">
<iconify-icon icon="lucide:phone" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400">Téléphone</p>
<a className="text-sm font-medium hover:text-brand-400 transition-colors" href="tel:+33123456789">
                    +33 1 23 45 67 89
                  </a>
</div>
</div>
</div>
</div>

<form className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 reveal stagger-delay-2">
<div className="space-y-6">
<div className="group">
<label className="block text-xs font-medium text-slate-400 mb-2 group-focus-within:text-brand-400 transition-colors" htmlFor="name">
                  Nom complet
                </label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="group">
<label className="block text-xs font-medium text-slate-400 mb-2 group-focus-within:text-brand-400 transition-colors" htmlFor="email">
                  Email professionnel
                </label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all" id="email" placeholder="john@entreprise.com" type="email"/>
</div>
<div className="group">
<label className="block text-xs font-medium text-slate-400 mb-2 group-focus-within:text-brand-400 transition-colors" htmlFor="message">
                  Message
                </label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all" id="message" placeholder="Parlez-nous de votre projet..." rows="4"></textarea>
</div>
<button className="w-full py-4 px-6 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium transition-all hover:scale-[1.01] hover:shadow-lg hover:shadow-brand-600/25 flex items-center justify-center gap-2" type="button">
                Envoyer le message
                <iconify-icon icon="lucide:send" width="16"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center">
<div className="mb-6 md:mb-0">
<span className="text-xl font-semibold text-white tracking-tight">
              DigiBuild
              <span className="text-brand-600">.</span>
</span>
<p className="text-xs mt-2 text-slate-500">
              Construisons votre avenir digital.
            </p>
</div>
<div className="flex gap-6 mb-6 md:mb-0">
<a className="hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:linkedin" width="20"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="20"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="border-t border-slate-900 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
<p>© 2024 DigiBuild. Tous droits réservés.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">
              Mentions légales
            </a>
<a className="hover:text-white transition-colors" href="#">
              Politique de confidentialité
            </a>
</div>
</div>
</div>
</footer>



    </>
  );
}
