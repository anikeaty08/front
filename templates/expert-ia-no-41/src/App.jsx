import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- Side Navigation & Active State Logic ---
        const sections = document.querySelectorAll('section');
        const navDots = document.querySelectorAll('.nav-dot div');

        const observerOptions = {
            root: document.querySelector('#main-scroll'),
            threshold: 0.5 // Trigger when 50% of section is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    
                    // Reset all dots
                    navDots.forEach(dot => {
                        dot.classList.remove('bg-black', 'scale-150');
                        dot.classList.add('bg-neutral-300');
                    });

                    // Highlight active dot
                    const activeDot = document.querySelector(`.nav-dot div[data-section="${id}"]`);
                    if (activeDot) {
                        activeDot.classList.remove('bg-neutral-300');
                        activeDot.classList.add('bg-black', 'scale-150');
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });

        // --- Filter Functionality ---
        function filterSelection(category) {
            const items = document.getElementsByClassName("project-item");
            const buttons = document.getElementsByClassName("filter-btn");

            // Handle Buttons Style
            for (let btn of buttons) {
                btn.classList.remove("text-black", "font-bold");
                btn.classList.add("text-neutral-400");
                if (btn.getAttribute("onclick").includes(category)) {
                    btn.classList.remove("text-neutral-400");
                    btn.classList.add("text-black", "font-bold");
                }
            }

            // Handle Items Visibility
            for (let item of items) {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            }
        }

        // --- Form Submission UX ---
        const form = document.getElementById('contactForm');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = 'ENVOI...';
            btn.classList.add('opacity-75', 'cursor-not-allowed');
            
            // Simulating API call time
            setTimeout(() => {
                form.reset();
                form.style.display = 'none';
                document.getElementById('successMessage').classList.remove('hidden');
                // Here you would actually submit the form using fetch/ajax if needed, 
                // but since formsubmit.co handles post, we prevent default for demo aesthetics.
                // To make it work for real, remove e.preventDefault() or use AJAX.
            }, 1000);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<a className="fixed top-8 left-8 z-50 mix-blend-difference text-white" href="#hero">
<span className="text-xl font-bold tracking-tighter">LB.</span>
</a>

<nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6 items-end">
<a aria-label="Hero" className="nav-dot group flex items-center gap-4 cursor-pointer" href="#hero">
<span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">Accueil</span>
<div className="w-1.5 h-1.5 bg-neutral-300 rounded-full transition-all duration-300 group-hover:bg-black group-hover:scale-150" data-section="hero"></div>
</a>
<a aria-label="About" className="nav-dot group flex items-center gap-4 cursor-pointer" href="#about">
<span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">À propos</span>
<div className="w-1.5 h-1.5 bg-neutral-300 rounded-full transition-all duration-300 group-hover:bg-black group-hover:scale-150" data-section="about"></div>
</a>
<a aria-label="Expertise" className="nav-dot group flex items-center gap-4 cursor-pointer" href="#expertise">
<span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">Expertises</span>
<div className="w-1.5 h-1.5 bg-neutral-300 rounded-full transition-all duration-300 group-hover:bg-black group-hover:scale-150" data-section="expertise"></div>
</a>
<a aria-label="Projects" className="nav-dot group flex items-center gap-4 cursor-pointer" href="#projets">
<span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">Projets</span>
<div className="w-1.5 h-1.5 bg-neutral-300 rounded-full transition-all duration-300 group-hover:bg-black group-hover:scale-150" data-section="projets"></div>
</a>
<a aria-label="Contact" className="nav-dot group flex items-center gap-4 cursor-pointer" href="#contact">
<span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">Contact</span>
<div className="w-1.5 h-1.5 bg-neutral-300 rounded-full transition-all duration-300 group-hover:bg-black group-hover:scale-150" data-section="contact"></div>
</a>
</nav>

<main className="snap-container bg-white" id="main-scroll">

<section className="px-6 md:px-12 lg:px-24 bg-cover bg-center bg-no-repeat" data-cms-collection="projets" data-cms-field="image" data-cms-type="image" id="hero">
<div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-center text-center h-full">

<h1 className="text-6xl md:text-8xl lg:text-[9rem] font-bold leading-[0.9] tracking-tighter mb-12 text-black mix-blend-difference" data-cms-collection="projets" data-cms-field="title" data-cms-type="text">
                    EXPERT IA <br/>
<span className="text-neutral-400">&amp;</span> NO-CODE
                </h1>
<div className="flex flex-col sm:flex-row gap-6 mt-4">
<a className="px-10 py-4 bg-black text-white text-sm font-medium tracking-wide hover:bg-neutral-800 transition-colors" href="#contact">
                        ME CONTACTER
                    </a>
<a className="px-10 py-4 bg-transparent border border-black text-black text-sm font-medium tracking-wide hover:bg-black hover:text-white transition-colors" href="#about">
                        À PROPOS
                    </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
<iconify-icon height="24" icon="solar:arrow-down-linear" width="24"></iconify-icon>
</div>
</section>

<section className="px-6 md:px-12 lg:px-24 bg-neutral-50" id="about">
<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
<div className="lg:col-span-4">

<h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8" data-cms-collection="projets" data-cms-field="slug" data-cms-type="text">VISION</h2>
<div className="h-0.5 w-24 bg-black"></div>
</div>
<div className="lg:col-span-8 space-y-12">

<p className="text-xl md:text-3xl leading-snug font-light text-neutral-800" data-cms-collection="projets" data-cms-field="text" data-cms-type="text">
                        Je conçois des écosystèmes numériques où <span className="font-medium text-black">l'automatisation</span> rencontre le <span className="font-medium text-black">minimalisme</span>.
                    </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm md:text-base leading-relaxed text-neutral-600 font-light">
<p>
                            L'époque des développements longs et coûteux est révolue. Mon approche radicale utilise le No-Code pour déployer des produits robustes en un temps record, sans sacrifier la qualité ou l'évolutivité.
                        </p>
<p>
                            En intégrant l'Intelligence Artificielle au cœur de vos processus, je transforme des tâches manuelles en flux autonomes, libérant ainsi votre potentiel créatif et stratégique.
                        </p>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 lg:px-24" id="expertise">
<div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center">
<div className="mb-24">
<h2 className="text-5xl md:text-7xl font-bold tracking-tighter">EXPERTISES</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-px bg-neutral-200 border border-neutral-200">

<div className="bg-white p-12 hover:bg-neutral-50 transition-colors duration-500 group">
<div className="mb-8 text-black group-hover:scale-110 transition-transform origin-left duration-500">
<iconify-icon icon="solar:cpu-bolt-linear" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Intelligence Artificielle</h3>
<p className="text-neutral-500 font-light leading-relaxed text-sm">
                            Intégration de LLMs, Agents autonomes, Analyse prédictive et automatisation de workflows complexes.
                        </p>
</div>

<div className="bg-white p-12 hover:bg-neutral-50 transition-colors duration-500 group">
<div className="mb-8 text-black group-hover:scale-110 transition-transform origin-left duration-500">
<iconify-icon icon="solar:layers-minimalistic-linear" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Développement No-Code</h3>
<p className="text-neutral-500 font-light leading-relaxed text-sm">
                            Architecture de bases de données, Applications Web (Bubble, Webflow) &amp; Mobile (FlutterFlow).
                        </p>
</div>

<div className="bg-white p-12 hover:bg-neutral-50 transition-colors duration-500 group">
<div className="mb-8 text-black group-hover:scale-110 transition-transform origin-left duration-500">
<iconify-icon icon="solar:tuning-square-2-linear" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Product Management</h3>
<p className="text-neutral-500 font-light leading-relaxed text-sm">
                            Stratégie produit, Design System, UX/UI minimaliste et pilotage de roadmap agile.
                        </p>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 lg:px-24 bg-neutral-50" id="projets">
<div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center">

<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-black pb-6">
<h2 className="text-4xl md:text-6xl font-bold tracking-tighter">SÉLECTION</h2>
<div className="flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm uppercase tracking-wide font-medium mt-4 md:mt-0 text-neutral-400">
<button className="filter-btn text-black hover:text-black transition-colors" onclick="filterSelection('all')">Tous</button>
<button className="filter-btn hover:text-black transition-colors" onclick="filterSelection('site')">Site internet</button>
<button className="filter-btn hover:text-black transition-colors" onclick="filterSelection('app')">Application</button>
<button className="filter-btn hover:text-black transition-colors" onclick="filterSelection('formation')">Formation</button>
<button className="filter-btn hover:text-black transition-colors" onclick="filterSelection('auto')">Automatisation</button>
<button className="filter-btn hover:text-black transition-colors" onclick="filterSelection('gestion')">Gestion de projet</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-[50vh] overflow-y-auto no-scrollbar pr-2">

<div className="project-item group relative aspect-square bg-white border border-neutral-200 cursor-pointer overflow-hidden" data-category="site">
<div className="absolute inset-0 flex items-center justify-center text-neutral-200 group-hover:text-neutral-100 transition-colors">
<iconify-icon icon="solar:laptop-minimalistic-linear" width="64"></iconify-icon>
</div>
<div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-8 text-center">
<span className="text-xs text-neutral-400 uppercase tracking-widest mb-2">Webflow</span>
<h3 className="text-2xl font-bold text-white mb-4">SaaS Landing Page</h3>
<div className="w-8 h-px bg-white"></div>
</div>
</div>

<div className="project-item group relative aspect-square bg-white border border-neutral-200 cursor-pointer overflow-hidden" data-category="app">
<div className="absolute inset-0 flex items-center justify-center text-neutral-200 group-hover:text-neutral-100 transition-colors">
<iconify-icon icon="solar:smartphone-linear" width="64"></iconify-icon>
</div>
<div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-8 text-center">
<span className="text-xs text-neutral-400 uppercase tracking-widest mb-2">Bubble &amp; Stripe</span>
<h3 className="text-2xl font-bold text-white mb-4">Marketplace MVP</h3>
<div className="w-8 h-px bg-white"></div>
</div>
</div>

<div className="project-item group relative aspect-square bg-white border border-neutral-200 cursor-pointer overflow-hidden" data-category="auto">
<div className="absolute inset-0 flex items-center justify-center text-neutral-200 group-hover:text-neutral-100 transition-colors">
<iconify-icon icon="solar:bolt-circle-linear" width="64"></iconify-icon>
</div>
<div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-8 text-center">
<span className="text-xs text-neutral-400 uppercase tracking-widest mb-2">Make &amp; Airtable</span>
<h3 className="text-2xl font-bold text-white mb-4">CRM Automation</h3>
<div className="w-8 h-px bg-white"></div>
</div>
</div>

<div className="project-item group relative aspect-square bg-white border border-neutral-200 cursor-pointer overflow-hidden" data-category="gestion">
<div className="absolute inset-0 flex items-center justify-center text-neutral-200 group-hover:text-neutral-100 transition-colors">
<iconify-icon icon="solar:clipboard-list-linear" width="64"></iconify-icon>
</div>
<div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-8 text-center">
<span className="text-xs text-neutral-400 uppercase tracking-widest mb-2">Notion</span>
<h3 className="text-2xl font-bold text-white mb-4">Product Roadmap</h3>
<div className="w-8 h-px bg-white"></div>
</div>
</div>

<div className="project-item group relative aspect-square bg-white border border-neutral-200 cursor-pointer overflow-hidden" data-category="auto">
<div className="absolute inset-0 flex items-center justify-center text-neutral-200 group-hover:text-neutral-100 transition-colors">
<iconify-icon icon="solar:chat-round-dots-linear" width="64"></iconify-icon>
</div>
<div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-8 text-center">
<span className="text-xs text-neutral-400 uppercase tracking-widest mb-2">OpenAI API</span>
<h3 className="text-2xl font-bold text-white mb-4">Support Bot IA</h3>
<div className="w-8 h-px bg-white"></div>
</div>
</div>

<div className="project-item group relative aspect-square bg-white border border-neutral-200 cursor-pointer overflow-hidden" data-category="formation">
<div className="absolute inset-0 flex items-center justify-center text-neutral-200 group-hover:text-neutral-100 transition-colors">
<iconify-icon icon="solar:presentation-graph-linear" width="64"></iconify-icon>
</div>
<div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-8 text-center">
<span className="text-xs text-neutral-400 uppercase tracking-widest mb-2">Bootcamp</span>
<h3 className="text-2xl font-bold text-white mb-4">Masterclass No-Code</h3>
<div className="w-8 h-px bg-white"></div>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 lg:px-24" id="contact">
<div className="max-w-4xl mx-auto w-full">
<div className="mb-16 text-center">
<h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">CONTACT</h2>
<p className="text-neutral-500">Parlons de votre futur projet.</p>
</div>
<form action="https://formsubmit.co/baconnetlouis@gmail.com" className="space-y-12" id="contactForm" method="POST">

<input name="_captcha" type="hidden" value="false"/>
<input name="_subject" type="hidden" value="Nouveau contact Portfolio"/>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="input-group">
<input className="w-full bg-transparent py-4 text-lg outline-none placeholder:text-neutral-400 font-medium" name="name" placeholder="NOM" required="" type="text"/>
<div className="input-line"></div>
</div>
<div className="input-group">
<input className="w-full bg-transparent py-4 text-lg outline-none placeholder:text-neutral-400 font-medium" name="email" placeholder="EMAIL" required="" type="email"/>
<div className="input-line"></div>
</div>
</div>
<div className="input-group">
<select className="w-full bg-transparent py-4 text-lg outline-none text-black font-medium appearance-none rounded-none" name="subject">
<option className="text-neutral-400" disabled="" selected="" value="">SUJET DU PROJET</option>
<option value="No-Code">Développement No-Code</option>
<option value="IA">Intelligence Artificielle</option>
<option value="Autre">Autre demande</option>
</select>
<div className="input-line"></div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-black">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="input-group">
<textarea className="w-full bg-transparent py-4 text-lg outline-none placeholder:text-neutral-400 font-medium resize-none overflow-hidden" name="message" oninput="this.style.height = ''; this.style.height = this.scrollHeight + 'px'" placeholder="VOTRE MESSAGE" required="" rows="1"></textarea>
<div className="input-line"></div>
</div>
<div className="pt-8 text-center md:text-left">
<button className="group relative px-12 py-5 bg-black text-white text-sm font-bold tracking-widest uppercase overflow-hidden hover:bg-neutral-900 transition-colors w-full md:w-auto" type="submit">
                            Envoyer
                            <iconify-icon className="inline-block ml-2 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</form>
<div className="hidden mt-8 text-center p-6 border border-black bg-neutral-50" id="successMessage">
<p className="text-lg font-medium">Message envoyé.</p>
</div>
</div>
<footer className="absolute bottom-6 w-full text-center left-0 text-[10px] uppercase tracking-widest text-neutral-400">
                © 2024 Louis Baconnet
            </footer>
</section>
</main>


    </>
  );
}
