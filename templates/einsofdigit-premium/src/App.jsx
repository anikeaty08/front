import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        lucide.createIcons();

        const projectDetails = {
            peretz: {
                title: 'Peretz',
                status: 'Déployé',
                description: "Plateforme de diffusion massive omnicanal (WhatsApp, SMS) avec data-visualisation temps réel, gestion des listes, scénarios et suivi de la délivrabilité.",
                challenge: "Gérer des centaines de milliers de messages par campagne, avec des exigences fortes de fiabilité et de reporting.",
                solution: "Architecture microservices, file de messages, tableaux de bord temps réel, intégration opérateurs et APIs tierces.",
                stack: "React, Node.js, Redis, PostgreSQL, Cloud provider, observabilité centralisée."
            },
            medos: {
                title: 'MedOS',
                status: 'En cours',
                description: "SaaS hospitalier nouvelle génération pour la gestion complète des dossiers patients et workflows médicaux.",
                challenge: "Unifier des outils hétérogènes et mettre en place une ergonomie cohérente pour les équipes médicales.",
                solution: "Plateforme web responsive, modules métiers paramétrables, couche IA pour pré-analyser les données et suggérer des actions.",
                stack: "TypeScript, Node.js, React, base de données chiffrée, normes santé."
            },
            vaccintrack: {
                title: 'VaccinTrack',
                status: 'Déploiement pilote',
                description: "SaaS de suivi des vaccinations à l’échelle nationale, incluant centres, stocks, populations et alertes.",
                challenge: "Assurer la traçabilité bout-en-bout et fournir des indicateurs consolidés en temps quasi réel.",
                solution: "Collecte multi-sources, ETL, dashboards décisionnels, export pour la recherche et les institutions.",
                stack: "React, API REST, data warehouse, outils de visualisation."
            },
            epiwatch: {
                title: 'EpiWatch',
                status: 'En cours',
                description: "Solution de surveillance épidémiologique avec cartographie, alertes et analyses de tendances.",
                challenge: "Constituer un système unifié à partir de sources de données fragmentées et hétérogènes.",
                solution: "Pipelines de données, normalisation, scoring de signaux faibles, interface cartographique.",
                stack: "Data pipelines, moteurs de règles, visualisation cartographique."
            },
            qualitymanager: {
                title: 'QualityManager SaaS',
                status: 'En cours / Sur-mesure',
                description: "Outil de management qualité : audits, NC, plans d’actions, reporting multi-sites.",
                challenge: "Modéliser des processus qualité complexes tout en restant utilisable et adaptable.",
                solution: "Workflows configurables, formulaires dynamiques, moteur de reporting personnalisé.",
                stack: "SaaS multi-tenant, moteur de workflow, reporting avancé."
            }
        };

        function openProjectModal(slug) {
            const data = projectDetails[slug];
            if (!data) return;
            const container = document.getElementById('project-modal-content');
            container.innerHTML = `
                <h2 class="text-2xl font-serif text-white tracking-tight">${data.title}</h2>
                <p class="text-[0.6875rem] uppercase tracking-widest text-[#D4AF37] mb-2">Statut : ${data.status}</p>
                <p>${data.description}</p>
                <p><span class="font-semibold text-white">Challenge :</span> ${data.challenge}</p>
                <p><span class="font-semibold text-white">Solution :</span> ${data.solution}</p>
                <p><span class="font-semibold text-white">Stack :</span> ${data.stack}</p>
                <button onclick="showPage('contact'); closeProjectModal();" class="mt-4 text-xs uppercase tracking-widest text-[#D4AF37] hover:text-[#FCF6BA] transition-colors gold-button-hover border border-[#D4AF37]/40 rounded-full px-4 py-2">
                    Discuter d’un projet similaire
                </button>
            `;
            const modal = document.getElementById('project-modal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function closeProjectModal() {
            const modal = document.getElementById('project-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        // Ressources (contenus neutres, informatifs)
        const resourceDetails = {
            corporate: `
                <h2 class="text-2xl font-serif text-white tracking-tight mb-2">Présentation Corporate — Einsof Digit</h2>
                <p class="text-xs text-neutral-400 mb-4">Version publique • Sans tarification • Document informatif</p>
                <h3 class="text-lg font-serif text-white tracking-tight mt-4 mb-2">Qui nous sommes</h3>
                <p class="mb-2">Einsof Digit est un studio d’ingénierie et de design spécialisé dans les plateformes SaaS, l’intelligence artificielle appliquée et les expériences digitales haut de gamme.</p>
                <p class="mb-2">Nous accompagnons des organisations exigeantes (santé, services financiers, secteur public, services B2B) dans la conception, la réalisation et l’industrialisation de produits numériques durables.</p>
                <h3 class="text-lg font-serif text-white tracking-tight mt-4 mb-2">Piliers d’expertise</h3>
                <ul class="list-disc list-inside space-y-1 mb-2">
                    <li>SaaS engineering &amp; architectures cloud scalables</li>
                    <li>Workflows IA &amp; agents autonomes opérationnels</li>
                    <li>Applications mobiles et écosystèmes multi-devices</li>
                    <li>Design produit, UX &amp; systèmes de design cohérents</li>
                    <li>Formations, conseil et accompagnement à la transformation digitale</li>
                </ul>
                <h3 class="text-lg font-serif text-white tracking-tight mt-4 mb-2">Approche</h3>
                <p class="mb-2">Nous privilégions des cycles courts, une forte transparence technique, et une documentation systématique. Chaque projet est conçu pour être maintenable, observable et aligné sur des objectifs métier clairs.</p>
                <h3 class="text-lg font-serif text-white tracking-tight mt-4 mb-2">Engagements</h3>
                <ul class="list-disc list-inside space-y-1 mb-2">
                    <li>Qualité logicielle mesurable (tests, revues, CI/CD)</li>
                    <li>Respect des contraintes de sécurité et de confidentialité</li>
                    <li>Transfert de connaissance vers vos équipes</li>
                    <li>Expérience utilisateur sobre, élégante et fonctionnelle</li>
                </ul>
            `,
            catalogue: `
                <h2 class="text-2xl font-serif text-white tracking-tight mb-2">Catalogue des services — Einsof Digit</h2>
                <p class="text-xs text-neutral-400 mb-4">Version publique • Sans tarification • Présentation des offres</p>
                <h3 class="text-lg font-serif text-white tracking-tight mt-4 mb-2">1. Développement SaaS</h3>
                <p class="mb-2">Conception et réalisation de plateformes SaaS : multi-tenant, sécurité, facturation, analytics et observabilité.</p>
                <h3 class="text-lg font-serif text-white tracking-tight mt-4 mb-2">2. Workflows IA &amp; Agents autonomes</h3>
                <p class="mb-2">Pipelines IA orientés résultats : KYC, sinistres, routage d’emails, rapports de performance, etc.</p>
                <h3 class="text-lg font-serif text-white tracking-tight mt-4 mb-2">3. Applications mobiles</h3>
                <p class="mb-2">Applications natives ou hybrides alignées avec vos backends SaaS et vos contraintes métiers.</p>
                <h3 class="text-lg font-serif text-white tracking-tight mt-4 mb-2">4. Sites web premium</h3>
                <p class="mb-2">Sites de présentation, portails B2B, landing pages et expériences marketing intégrées.</p>
                <h3 class="text-lg font-serif text-white tracking-tight mt-4 mb-2">5. Formations &amp; accompagnements</h3>
                <p class="mb-2">Workshops, advisory et accompagnement opérationnel sur le SaaS, l’IA et la transformation digitale.</p>
            `,
            'guide-transfo': `
                <h2 class="text-2xl font-serif text-white tracking-tight mb-2">Introduction à la transformation digitale &amp; IA</h2>
                <p class="text-xs text-neutral-400 mb-4">Guide d’introduction • Accessible • Sans tarification</p>
                <h3 class="text-lg font-serif text-white tracking-tight mt-4 mb-2">1. Comprendre la transformation digitale</h3>
                <p class="mb-2">La transformation digitale associe des évolutions technologiques (cloud, data, IA) à des changements d’organisation et de culture.</p>
                <h3 class="text-lg font-serif text-white tracking-tight mt-4 mb-2">2. Le rôle de l’IA</h3>
                <p class="mb-2">L’IA permet d’automatiser, d’optimiser et d’augmenter des activités métiers : décision, analyse, interactions clientes, etc.</p>
                <h3 class="text-lg font-serif text-white tracking-tight mt-4 mb-2">3. Bonnes pratiques de démarrage</h3>
                <ul class="list-disc list-inside space-y-1 mb-2">
                    <li>Commencer par des cas d’usage concrets, mesurables</li>
                    <li>Sécuriser les données en priorité</li>
                    <li>Impliquer les métiers dès le cadrage</li>
                    <li>Prévoir l’industrialisation dès les premiers prototypes</li>
                </ul>
                <h3 class="text-lg font-serif text-white tracking-tight mt-4 mb-2">4. Rôle d’un partenaire spécialisé</h3>
                <p class="mb-2">Un partenaire spécialisé aide à articuler stratégie, architecture et exécution, dans un cadre réaliste et structuré.</p>
            `,
            'brochure-saas': `
                <h2 class="text-2xl font-serif text-white tracking-tight mb-2">Brochure — Développement SaaS Premium</h2>
                <p class="text-xs text-neutral-400 mb-4">Document informatif • Sans tarification</p>
                <h3 class="text-lg font-serif text-white tracking-tight mt-4 mb-2">Positionnement</h3>
                <p class="mb-2">Nous concevons des plateformes SaaS destinées à des environnements critiques (santé, finance, services B2B) avec une exigence forte de qualité et de pérennité.</p>
                <h3 class="text-lg font-serif text-white tracking-tight mt-4 mb-2">Périmètre</h3>
                <ul class="list-disc list-inside space-y-1 mb-2">
                    <li>Architecture applicative et cloud</li>
                    <li>Back-office, API, backends métiers</li>
                    <li>Interfaces web responsives</li>
                    <li>Observabilité, monitoring, journaux</li>
                </ul>
                <h3 class="text-lg font-serif text-white tracking-tight mt-4 mb-2">Bénéfices pour le client</h3>
                <ul class="list-disc list-inside space-y-1 mb-2">
                    <li>Réduction du risque technique</li>
                    <li>Alignement fort avec les exigences métier</li>
                    <li>Capacité de montée en charge maîtrisée</li>
                </ul>
            `,
            'brochure-workflows': `
                <h2 class="text-2xl font-serif text-white tracking-tight mb-2">Brochure — Workflows IA &amp; Automatisations</h2>
                <p class="text-xs text-neutral-400 mb-4">Document informatif • Sans tarification</p>
                <h3 class="text-lg font-serif text-white tracking-tight mt-4 mb-2">Exemples de workflows</h3>
                <ul class="list-disc list-inside space-y-1 mb-2">
                    <li>KYC automatisé pour la banque</li>
                    <li>Traitement de sinistres pour l’assurance</li>
                    <li>Redirection intelligente d’emails</li>
                    <li>Rapports de performance automatisés</li>
                </ul>
                <h3 class="text-lg font-serif text-white tracking-tight mt-4 mb-2">Principes de conception</h3>
                <ul class="list-disc list-inside space-y-1 mb-2">
                    <li>Traçabilité des décisions</li>
                    <li>Surveillance et reprise sur incident</li>
                    <li>Respect des politiques de confidentialité</li>
                </ul>
                <h3 class="text-lg font-serif text-white tracking-tight mt-4 mb-2">Utilisation</h3>
                <p class="mb-2">Ces workflows peuvent être consommés via API, orchestrateurs internes ou intégrations low-code existantes.</p>
            `
        };

        function openResourceModal(key) {
            const content = resourceDetails[key];
            if (!content) return;
            const container = document.getElementById('resource-modal-content');
            container.innerHTML = content;
            const modal = document.getElementById('resource-modal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function closeResourceModal() {
            const modal = document.getElementById('resource-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        // PAGE TRANSITIONS
        function showPage(pageId) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            const pages = ['home', 'projects', 'resources', 'about', 'contact', 'services', 'workflows'];
            const targetId = `page-${pageId}`;
            pages.forEach(p => {
                const el = document.getElementById(`page-${p}`);
                if(el) {
                    if(`page-${p}` === targetId) {
                        el.classList.remove('hidden-page');
                        el.classList.add('active-page');
                        triggerAnimations(el);
                    } else {
                        el.classList.add('hidden-page');
                        el.classList.remove('active-page');
                    }
                }
            });
        }
        
        function scrollToServicesSection() {
            showPage('home');
            setTimeout(() => {
                const el = document.getElementById('services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 500);
        }

        const exploreBtn = document.getElementById('explore-btn');
        if (exploreBtn) {
            exploreBtn.addEventListener('click', (e) => {
                e.preventDefault();
                scrollToServicesSection();
            });
        }

        function triggerAnimations(container) {
            const elements = container.querySelectorAll('.fade-in-up');
            elements.forEach(el => {
                el.classList.remove('visible');
                void el.offsetWidth;
                setTimeout(() => el.classList.add('visible'), 50);
            });
        }

        window.addEventListener('load', () => {
            const progress = document.querySelector('.loader-progress');
            if (progress) progress.style.width = '100%';
            
            setTimeout(() => {
                const preloader = document.getElementById('preloader');
                if (!preloader) return;
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.visibility = 'hidden';
                    triggerAnimations(document.getElementById('page-home'));
                }, 1000);
            }, 1200);
        });

        const cursorInner = document.querySelector('.cursor-inner');
        const cursorOuter = document.querySelector('.cursor-outer');
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', e => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (cursorInner) {
                cursorInner.style.transform = `translate(${mouseX - 2}px, ${mouseY - 2}px)`;
            }

            const tiltElements = document.querySelectorAll('.tilt-element');
            tiltElements.forEach(el => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                el.style.setProperty('--x', `${x}px`);
                el.style.setProperty('--y', `${y}px`);
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const rotateX = ((e.clientY - centerY) / centerY) * -2;
                const rotateY = ((e.clientX - centerX) / centerX) * 2;
                el.style.transform = `perspective(62.5rem) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
        });

        function animateCursor() {
            const easing = 0.15;
            cursorX += (mouseX - cursorX) * easing;
            cursorY += (mouseY - cursorY) * easing;
            if (cursorOuter) {
                cursorOuter.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`;
            }
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        const magnets = document.querySelectorAll('.magnetic-target');
        magnets.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate(0, 0)';
            });
        });

        const canvas = document.getElementById('bg-canvas');
        const ctx = canvas ? canvas.getContext('2d') : null;
        let width, height;
        let particles = [];

        function resize() {
            if (!canvas) return;
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }

        class Particle {
            constructor() { this.init(); }
            init() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.2;
                this.vy = (Math.random() - 0.5) * 0.2;
                this.size = Math.random() * 2;
                this.life = Math.random() * 100;
                this.isGold = Math.random() > 0.3;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.life--;
                if (this.life < 0 || this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
                    this.init();
                }
            }
            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                if (this.isGold) {
                    ctx.fillStyle = `rgba(212, 175, 55, ${Math.random() * 0.3})`;
                } else {
                    ctx.fillStyle = `rgba(0, 240, 255, ${Math.random() * 0.2})`;
                }
                ctx.fill();
            }
        }

        function initParticles() {
            if (!canvas) return;
            particles = [];
            for (let i = 0; i < 40; i++) particles.push(new Particle());
        }

        function animate() {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => { p.update(); p.draw(); });
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
            ctx.lineWidth = 0.5;
            for(let i=0; i<particles.length; i++) {
                for(let j=i+1; j<particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx*dx + dy*dy);
                    if(dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', resize);
        resize();
        initParticles();
        animate();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="bg-noise"></div>
<canvas aria-hidden="true" className="fixed inset-0 z-0 opacity-40" id="bg-canvas"></canvas>
<div className="cursor-inner hidden md:block"></div>
<div className="cursor-outer hidden md:block"></div>
<div id="preloader">
<div className="font-serif text-3xl italic text-white mb-8 tracking-widest opacity-80">EINSOF</div>
<div className="loader-bar">
<div className="loader-progress gold-liquid-bg"></div>
</div>
</div>
<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#020202]/70 backdrop-blur-md transition-all duration-500">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

<a className="group flex items-center gap-3 magnetic-target hover-target" href="/index.html" onclick="showPage('home')">
<div className="relative w-8 h-8 flex items-center justify-center">
<div className="absolute inset-0 border border-white/10 rounded-full group-hover:border-[#D4AF37]/50 transition-colors duration-500"></div>
<div className="w-1 h-1 bg-[#D4AF37] rounded-full group-hover:shadow-[0_0_10px_#D4AF37] transition-all duration-500"></div>
</div>
<div className="flex flex-col">
<span className="font-serif text-xl tracking-tight text-white group-hover:text-[#D4AF37] transition-colors duration-500">EINSOF</span>
<span className="text-[0.5rem] uppercase tracking-[0.3em] text-neutral-500 group-hover:text-[#00F0FF] transition-colors duration-500">Digit • Luxury SaaS</span>
</div>
</a>
<div className="hidden md:flex items-center gap-12">
<button className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white hover:shadow-[0_0_1.25rem_rgba(255,255,255,0.2)] transition-all duration-300 magnetic-target hover-target" onclick="showPage('projects')">Projets</button>
<button className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-all duration-300 magnetic-target hover-target" onclick="showPage('services')">Services</button>
<button className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-all duration-300 magnetic-target hover-target" onclick="showPage('workflows')">Workflows IA</button>
<button className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-all duration-300 magnetic-target hover-target" onclick="showPage('resources')">Ressources</button>
<button className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-all duration-300 magnetic-target hover-target" onclick="showPage('about')">À Propos</button>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block relative px-8 py-3 overflow-hidden group magnetic-target hover-target gold-button-hover border border-[#D4AF37]/30 rounded-full" onclick="showPage('contact')">
<div className="absolute inset-0 rounded-full"></div>
<div className="absolute inset-0 bg-[#D4AF37]/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
<span className="relative z-10 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] group-hover:text-[#FCF6BA] transition-colors">Contact</span>
</button>

<button aria-label="Ouvrir le menu" className="md:hidden text-white hover-target">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>
<main className="relative z-10 pt-24 min-h-screen flex flex-col justify-center" id="main-content">

<div className="active-page" id="page-home">
<header className="min-h-[85vh] flex items-center relative">
<div className="absolute top-1/4 left-1/4 w-[31.25rem] h-[31.25rem] bg-[#D4AF37] opacity-[0.03] blur-[7.5rem] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-[37.5rem] h-[37.5rem] bg-blue-900 opacity-[0.05] blur-[7.5rem] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm fade-in-up">
<span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_0.5rem_#00F0FF]"></span>
<span className="text-[0.625rem] uppercase tracking-[0.2em] text-neutral-400">Architecture Digitale</span>
</div>
<h1 className="text-6xl md:text-8xl font-serif leading-[0.9] text-white mb-4 fade-in-up stagger-1 tracking-tight">
                            L'Art du <br/>
<span className="gold-metallic-text italic pr-4">SaaS Premium</span>
</h1>
<p className="text-neutral-400 text-lg font-light leading-relaxed max-w-xl mb-4 fade-in-up stagger-2 border-l border-[#00F0FF]/30 pl-6">
                            Nous fusionnons l'ingénierie logicielle avancée avec une esthétique de luxe. Pour les entreprises qui exigent l'excellence technique et visuelle.
                        </p>
<p className="text-neutral-300 text-lg font-light leading-relaxed max-w-2xl mb-8 fade-in-up stagger-2">
                            Nous créons des solutions SaaS et des automations IA premium — design d’excellence, code scalable, impact mesurable.
                        </p>
<div className="flex flex-wrap gap-6 fade-in-up stagger-3">
<button className="group relative px-8 py-4 gold-liquid-bg text-black overflow-hidden rounded-sm hover-target gold-button-hover border border-transparent" onclick="showPage('contact')">
<span className="relative z-10 text-xs font-semibold uppercase tracking-widest flex items-center gap-2">
                                    Commencer le projet
                                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</span>
</button>
<button className="group px-8 py-4 border border-white/10 text-white rounded-sm hover:border-white/30 transition-all duration-300 hover-target gold-button-hover" id="explore-btn">
<span className="text-xs font-semibold uppercase tracking-widest group-hover:text-[#00F0FF] transition-colors">Explorer</span>
</button>
</div>

<section className="mt-12 fade-in-up stagger-3">
<h2 className="text-xl font-serif text-white tracking-tight mb-2">Nos services</h2>
<p className="text-base text-neutral-300 leading-relaxed max-w-2xl">
                                Développement SaaS, agents IA et workflows, applications mobiles, sites web premium, formations et accompagnement pour la transformation digitale. 
                                Nous concevons des expériences digitales haut de gamme, scalables et conformes aux exigences métiers.
                            </p>
</section>
</div>
<div className="lg:col-span-5 relative h-[31.25rem] fade-in-up stagger-2 hidden lg:block perspective-1000">
<div className="glass-panel w-full h-full rounded-2xl flex items-center justify-center p-8 tilt-element">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '2.5rem 2.5rem'}}></div>
<div className="relative z-10 w-full">
<div className="flex justify-between items-end mb-8 border-b border-white/5 pb-4">
<div className="text-3xl font-serif text-[#D4AF37]">245%</div>
<div className="text-[0.625rem] uppercase tracking-widest text-[#00F0FF]">Performance ROI</div>
</div>
<div className="space-y-4">
<div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-[#D4AF37] to-[#FCF6BA] w-3/4 shadow-[0_0_0.9375rem_rgba(212,175,55,0.4)]"></div>
</div>
<div className="h-2 w-2/3 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-neutral-600 to-neutral-400 w-1/2"></div>
</div>
<div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-[#00F0FF] to-blue-500 w-4/5 shadow-[0_0_0.625rem_rgba(0,240,255,0.3)]"></div>
</div>
</div>
<div className="mt-12 flex justify-between text-xs text-neutral-500 font-mono">
<span>SYS.STATUS: OPTIMAL</span>
<span className="animate-pulse text-[#00F0FF]">● LIVE</span>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-32 relative" id="services">
<div className="tech-line mb-20"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-list">

<div className="glass-panel p-10 rounded-sm group hover-target fade-in-up stagger-1">
<div className="w-12 h-12 border border-[#D4AF37]/30 flex items-center justify-center mb-8 rounded-full group-hover:bg-[#D4AF37] transition-all duration-500">
<i className="text-[#D4AF37] group-hover:text-black transition-colors" data-lucide="layers"></i>
</div>
<h3 className="text-2xl text-white mb-4 group-hover:text-[#D4AF37] transition-colors tracking-tight">Développement SaaS</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-light mb-4">Architectures robustes et interfaces fluides. Nous transformons la complexité en simplicité élégante.</p>
<a className="inline-block text-xs uppercase tracking-widest text-[#D4AF37] hover:text-[#FCF6BA] transition-colors gold-button-hover border border-transparent border-b-[#D4AF37]/40 pb-1" href="/services/saas.html">
                                En savoir plus
                            </a>
</div>

<div className="glass-panel p-10 rounded-sm group hover-target fade-in-up stagger-2">
<div className="w-12 h-12 border border-[#00F0FF]/30 flex items-center justify-center mb-8 rounded-full group-hover:bg-[#00F0FF] transition-all duration-500">
<i className="text-[#00F0FF] group-hover:text-black transition-colors" data-lucide="cpu"></i>
</div>
<h3 className="text-2xl text-white mb-4 group-hover:text-[#00F0FF] transition-colors tracking-tight">Workflows IA &amp; Agents</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-light mb-4">Intégration d'agents autonomes et de workflows prédictifs pour une automatisation invisible.</p>
<a className="inline-block text-xs uppercase tracking-widest text-[#00F0FF] hover:text-[#FCF6BA] transition-colors gold-button-hover border border-transparent border-b-[#00F0FF]/40 pb-1" href="/services/workflows-agents.html">
                                En savoir plus
                            </a>
</div>

<div className="glass-panel p-10 rounded-sm group hover-target fade-in-up stagger-3">
<div className="w-12 h-12 border border-white/20 flex items-center justify-center mb-8 rounded-full group-hover:bg-white transition-all duration-500">
<i className="text-white group-hover:text-black transition-colors" data-lucide="smartphone"></i>
</div>
<h3 className="text-2xl text-white mb-4 tracking-tight">Écosystème Mobile</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-light mb-4">Applications natives iOS &amp; Android. Une extension naturelle de votre plateforme web.</p>
<a className="inline-block text-xs uppercase tracking-widest text-white hover:text-[#FCF6BA] transition-colors gold-button-hover border border-transparent border-b-white/40 pb-1" href="/services/mobile-apps.html">
                                En savoir plus
                            </a>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight mb-2">Nos réalisations</h2>
<p className="text-base text-neutral-400 max-w-xl">
                                Une sélection de plateformes SaaS, solutions e-santé et outils métiers conçus pour des environnements critiques.
                            </p>
</div>
<button className="text-xs uppercase tracking-widest text-[#D4AF37] hover:text-[#FCF6BA] transition-colors gold-button-hover border border-[#D4AF37]/40 rounded-full px-5 py-2" onclick="showPage('projects')">
                            Voir le portfolio complet
                        </button>
</div>
<div className="grid md:grid-cols-3 gap-8">
<article className="glass-panel p-6 rounded-sm">
<h3 className="text-xl font-serif text-white tracking-tight mb-1">Peretz</h3>
<p className="text-[0.625rem] uppercase tracking-widest text-[#00F0FF] mb-2">Diffusion massive omnicanal</p>
<p className="text-sm text-neutral-400 mb-4">Plateforme de campagnes WhatsApp &amp; SMS à grande échelle avec monitoring en temps réel.</p>
<button className="text-xs uppercase tracking-widest text-[#D4AF37] hover:text-[#FCF6BA] transition-colors" onclick="openProjectModal('peretz')">
                                Voir le projet
                            </button>
</article>
<article className="glass-panel p-6 rounded-sm">
<h3 className="text-xl font-serif text-white tracking-tight mb-1">MedOS</h3>
<p className="text-[0.625rem] uppercase tracking-widest text-[#D4AF37] mb-2">SaaS hospitalier</p>
<p className="text-sm text-neutral-400 mb-4">Dossiers patients, IA d’aide au diagnostic, sécurité renforcée pour données de santé.</p>
<button className="text-xs uppercase tracking-widest text-[#D4AF37] hover:text-[#FCF6BA] transition-colors" onclick="openProjectModal('medos')">
                                Voir le projet
                            </button>
</article>
<article className="glass-panel p-6 rounded-sm">
<h3 className="text-xl font-serif text-white tracking-tight mb-1">VaccinTrack</h3>
<p className="text-[0.625rem] uppercase tracking-widest text-[#00F0FF] mb-2">Suivi vaccinal national</p>
<p className="text-sm text-neutral-400 mb-4">Traçabilité, gestion des centres, API pour institutions de santé et tableaux de bord nationaux.</p>
<button className="text-xs uppercase tracking-widest text-[#D4AF37] hover:text-[#FCF6BA] transition-colors" onclick="openProjectModal('vaccintrack')">
                                Voir le projet
                            </button>
</article>
</div>
<p className="text-[0.75rem] text-neutral-500 mt-8 italic">
                        Certains projets sont confidentiels et ne peuvent être dévoilés publiquement. Contactez-nous pour une présentation privée.
                    </p>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10">
<div>
<h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight mb-2">Workflows IA &amp; Automatisations</h2>
<p className="text-base text-neutral-400 max-w-xl">
                                Des chaînes IA opérationnelles déjà déployées dans la banque, l’assurance et les services.
                            </p>
</div>
<button className="text-xs uppercase tracking-widest text-[#00F0FF] hover:text-[#FCF6BA] transition-colors gold-button-hover border border-[#00F0FF]/40 rounded-full px-5 py-2" onclick="showPage('workflows')">
                            Voir tous les workflows
                        </button>
</div>
<div className="grid md:grid-cols-3 gap-8">
<article className="glass-panel p-6 rounded-sm">
<h3 className="text-lg font-serif text-white tracking-tight mb-1">KYC automatisé (Banques)</h3>
<p className="text-sm text-neutral-400 mb-4">
                                Analyse et scoring des dossiers d’ouverture de compte, extraction documentaire et détection de fraudes.
                            </p>
<a className="inline-block text-xs uppercase tracking-widest text-[#00F0FF] hover:text-[#FCF6BA] transition-colors" href="/workflows/kyc-automatisation.html">
                                Détails du workflow
                            </a>
</article>
<article className="glass-panel p-6 rounded-sm">
<h3 className="text-lg font-serif text-white tracking-tight mb-1">Traitement de sinistres</h3>
<p className="text-sm text-neutral-400 mb-4">
                                Priorisation, classification et propositions de décision pour les dossiers d’assurance.
                            </p>
<a className="inline-block text-xs uppercase tracking-widest text-[#00F0FF] hover:text-[#FCF6BA] transition-colors" href="/workflows/sinistres-ia.html">
                                Détails du workflow
                            </a>
</article>
<article className="glass-panel p-6 rounded-sm">
<h3 className="text-lg font-serif text-white tracking-tight mb-1">Redirection email automatisée</h3>
<p className="text-sm text-neutral-400 mb-4">
                                Routage intelligent des emails entrants vers les équipes et services concernés via NLP.
                            </p>
<a className="inline-block text-xs uppercase tracking-widest text-[#00F0FF] hover:text-[#FCF6BA] transition-colors" href="/workflows/redirection-email.html">
                                Détails du workflow
                            </a>
</article>
</div>
</div>
</section>
</div>

<div className="hidden-page pt-20 pb-32" id="page-projects">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-24 text-center">
<span className="text-[#D4AF37] text-[0.625rem] uppercase tracking-[0.4em] block mb-4">Portfolio</span>
<h2 className="text-5xl md:text-7xl text-white font-serif tracking-tight">Nos Réalisations</h2>
</div>
<div className="space-y-20" id="portfolio-list">

<section className="grid lg:grid-cols-2 gap-16 items-center group">
<div className="glass-panel aspect-[4/3] rounded-sm relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-[#020202] via-transparent to-transparent z-10"></div>
<div className="absolute inset-10 border border-white/5 rounded flex flex-col p-6">
<div className="flex gap-2 mb-8">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
</div>
<div className="w-1/2 h-8 bg-white/5 mb-4"></div>
<div className="w-full h-32 bg-white/5 mt-auto"></div>
</div>
</div>
<div>
<div className="flex items-center gap-4 mb-3">
<span className="text-4xl text-white font-serif italic tracking-tight">Peretz</span>
<span className="px-3 py-1 border border-[#00F0FF]/30 text-[#00F0FF] text-[0.5625rem] uppercase tracking-widest rounded-full">Déployé</span>
</div>
<p className="text-neutral-400 font-light mb-4 leading-relaxed">
                                Plateforme de diffusion massive omnicanal (WhatsApp, SMS). Interface orientée data-visualisation en temps réel, 
                                gestion de campagnes à haute volumétrie et monitoring de la délivrabilité.
                            </p>
<p className="text-neutral-400 font-light mb-6 leading-relaxed">
                                Rôle : conception produit, architecture SaaS, développement full-stack, intégration API et observabilité.
                            </p>
<ul className="flex flex-wrap gap-4 text-[0.625rem] uppercase tracking-widest text-neutral-500 mb-6">
<li>React</li>
<li>Node.js</li>
<li>Microservices</li>
<li>Cloud</li>
</ul>
<button className="text-xs uppercase tracking-widest text-[#D4AF37] hover:text-[#FCF6BA] transition-colors gold-button-hover border border-[#D4AF37]/40 rounded-full px-4 py-2" onclick="openProjectModal('peretz')">
                                Voir le projet
                            </button>
</div>
</section>

<section className="grid lg:grid-cols-2 gap-16 items-center group">
<div className="lg:order-2 glass-panel aspect-[4/3] rounded-sm relative overflow-hidden border-t border-[#D4AF37]/50">
<div className="absolute inset-10 border border-white/5 rounded flex flex-col p-6">
<div className="flex gap-2 mb-8"><div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div></div>
<div className="grid grid-cols-3 gap-4">
<div className="h-20 bg-white/5"></div>
<div className="h-20 bg-white/5"></div>
<div className="h-20 bg-white/5"></div>
</div>
</div>
</div>
<div className="lg:order-1 text-right">
<div className="flex items-center gap-4 mb-3 justify-end">
<span className="px-3 py-1 border border-[#D4AF37]/30 text-[#D4AF37] text-[0.5625rem] uppercase tracking-widest rounded-full">En cours</span>
<span className="text-4xl text-white font-serif italic tracking-tight">MedOS</span>
</div>
<p className="text-neutral-400 font-light mb-4 leading-relaxed">
                                SaaS hospitalier nouvelle génération. Gestion centralisée des dossiers patients, workflow médical unifié, 
                                et couche d'IA pour l'aide au diagnostic préliminaire.
                            </p>
<p className="text-neutral-400 font-light mb-6 leading-relaxed">
                                Priorité donnée à la sécurité (données de santé), à la traçabilité et à une expérience médecin apaisée sur poste fixe et tablette.
                            </p>
<ul className="flex flex-wrap gap-4 justify-end text-[0.625rem] uppercase tracking-widest text-neutral-500 mb-6">
<li>Healthcare</li>
<li>AI Diagnostic</li>
<li>Secure Data</li>
</ul>
<button className="text-xs uppercase tracking-widest text-[#D4AF37] hover:text-[#FCF6BA] transition-colors gold-button-hover border border-[#D4AF37]/40 rounded-full px-4 py-2" onclick="openProjectModal('medos')">
                                Voir le projet
                            </button>
</div>
</section>

<section className="grid lg:grid-cols-2 gap-16 items-center group">
<div className="glass-panel aspect-[4/3] rounded-sm relative overflow-hidden">
<div className="absolute inset-10 border border-white/5 rounded flex flex-col p-6">
<div className="flex gap-2 mb-6"><div className="w-2 h-2 rounded-full bg-[#00F0FF]"></div></div>
<div className="w-3/4 h-8 bg-white/5 mb-4"></div>
<div className="w-full h-24 bg-white/5"></div>
</div>
</div>
<div>
<div className="flex items-center gap-4 mb-3">
<span className="text-4xl text-white font-serif italic tracking-tight">VaccinTrack</span>
<span className="px-3 py-1 border border-[#00F0FF]/30 text-[#00F0FF] text-[0.5625rem] uppercase tracking-widest rounded-full">Déploiement pilote</span>
</div>
<p className="text-neutral-400 font-light mb-4 leading-relaxed">
                                SaaS de suivi des vaccinations à l’échelle nationale : gestion des centres, registre vaccinal, stocks, 
                                et dashboards statistiques multi-niveaux (régions, districts, centres).
                            </p>
<p className="text-neutral-400 font-light mb-6 leading-relaxed">
                                API d’intégration pour les institutions de santé, interfaçage avec systèmes d’information hospitaliers et outils d’export pour la recherche.
                            </p>
<ul className="flex flex-wrap gap-4 text-[0.625rem] uppercase tracking-widest text-neutral-500 mb-6">
<li>Public Health</li>
<li>API</li>
<li>Dashboards</li>
</ul>
<button className="text-xs uppercase tracking-widest text-[#D4AF37] hover:text-[#FCF6BA] transition-colors gold-button-hover border border-[#D4AF37]/40 rounded-full px-4 py-2" onclick="openProjectModal('vaccintrack')">
                                Voir le projet
                            </button>
</div>
</section>

<section className="grid lg:grid-cols-2 gap-16 items-center group">
<div className="lg:order-2 glass-panel aspect-[4/3] rounded-sm relative overflow-hidden">
<div className="absolute inset-10 border border-white/5 rounded flex flex-col p-6">
<div className="flex gap-2 mb-6"><div className="w-2 h-2 rounded-full bg-emerald-400"></div></div>
<div className="w-full h-32 bg-white/5 mb-4"></div>
<div className="w-2/3 h-8 bg-white/5"></div>
</div>
</div>
<div className="lg:order-1 text-right">
<div className="flex items-center gap-4 mb-3 justify-end">
<span className="px-3 py-1 border border-[#D4AF37]/30 text-[#D4AF37] text-[0.5625rem] uppercase tracking-widest rounded-full">En cours</span>
<span className="text-4xl text-white font-serif italic tracking-tight">EpiWatch</span>
</div>
<p className="text-neutral-400 font-light mb-4 leading-relaxed">
                                SaaS de surveillance épidémiologique : collecte, normalisation et analyse des données sanitaires multi-sources, 
                                cartographie en temps réel et alertes précoces.
                            </p>
<p className="text-neutral-400 font-light mb-6 leading-relaxed">
                                Pensé pour les ministères de la santé, organisations internationales et grandes entreprises disposant de réseaux de cliniques.
                            </p>
<ul className="flex flex-wrap gap-4 justify-end text-[0.625rem] uppercase tracking-widest text-neutral-500 mb-6">
<li>Epidemiology</li>
<li>Dashboards</li>
<li>Data Pipelines</li>
</ul>
<button className="text-xs uppercase tracking-widest text-[#D4AF37] hover:text-[#FCF6BA] transition-colors gold-button-hover border border-[#D4AF37]/40 rounded-full px-4 py-2" onclick="openProjectModal('epiwatch')">
                                Voir le projet
                            </button>
</div>
</section>

<section className="grid lg:grid-cols-2 gap-16 items-center group">
<div className="glass-panel aspect-[4/3] rounded-sm relative overflow-hidden">
<div className="absolute inset-10 border border-white/5 rounded flex flex-col p-6">
<div className="flex gap-2 mb-6"><div className="w-2 h-2 rounded-full bg-amber-400"></div></div>
<div className="w-1/2 h-8 bg-white/5 mb-4"></div>
<div className="w-full h-24 bg-white/5"></div>
</div>
</div>
<div>
<div className="flex items-center gap-4 mb-3">
<span className="text-4xl text-white font-serif italic tracking-tight">QualityManager SaaS</span>
<span className="px-3 py-1 border border-[#D4AF37]/30 text-[#D4AF37] text-[0.5625rem] uppercase tracking-widest rounded-full">En cours / Sur-mesure</span>
</div>
<p className="text-neutral-400 font-light mb-4 leading-relaxed">
                                Plateforme de management et de suivi qualité : workflows d’audit, plans d’actions, suivi des non-conformités (NC) 
                                et reporting multi-sites.
                            </p>
<p className="text-neutral-400 font-light mb-6 leading-relaxed">
                                Adaptable à tout type d’institution (santé, industrie, services) avec moteur de formulaires dynamiques et intégration aux SI existants.
                            </p>
<ul className="flex flex-wrap gap-4 text-[0.625rem] uppercase tracking-widest text-neutral-500 mb-6">
<li>Quality</li>
<li>Workflows</li>
<li>Reporting</li>
</ul>
<button className="text-xs uppercase tracking-widest text-[#D4AF37] hover:text-[#FCF6BA] transition-colors gold-button-hover border border-[#D4AF37]/40 rounded-full px-4 py-2" onclick="openProjectModal('qualitymanager')">
                                Voir le projet
                            </button>
</div>
</section>

<section className="grid lg:grid-cols-2 gap-16 items-center group">
<div className="lg:order-2 glass-panel aspect-[4/3] rounded-sm relative overflow-hidden">
<div className="absolute inset-10 border border-white/5 rounded flex flex-col p-6">
<div className="flex gap-2 mb-6"><div className="w-2 h-2 rounded-full bg-[#00F0FF]"></div></div>
<div className="w-full h-16 bg-white/5 mb-4"></div>
<div className="w-3/4 h-16 bg-white/5"></div>
</div>
</div>
<div className="lg:order-1 text-right">
<div className="flex items-center gap-4 mb-3 justify-end">
<span className="px-3 py-1 border border-[#00F0FF]/30 text-[#00F0FF] text-[0.5625rem] uppercase tracking-widest rounded-full">Workflows IA</span>
<span className="text-4xl text-white font-serif italic tracking-tight">Automatisations IA</span>
</div>
<p className="text-neutral-400 font-light mb-4 leading-relaxed">
                                Ensemble de workflows IA opérationnels : KYC automatisé, traitement de sinistres, redirection email intelligente, 
                                génération automatique de rapports de performance et plus.
                            </p>
<p className="text-neutral-400 font-light mb-6 leading-relaxed">
                                Chaque workflow est conçu comme un micro-produit : API documentée, supervision, journalisation et conformité au contexte métier.
                            </p>
<button className="text-xs uppercase tracking-widest text-[#00F0FF] hover:text-[#FCF6BA] transition-colors gold-button-hover border border-[#00F0FF]/40 rounded-full px-4 py-2" onclick="showPage('workflows')">
                                Voir tous les workflows
                            </button>
</div>
</section>
</div>
</div>
</div>

<div className="hidden-page pt-20 pb-32" id="page-services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center">
<span className="text-[#D4AF37] text-[0.625rem] uppercase tracking-[0.4em] block mb-4">Services</span>
<h1 className="text-4xl md:text-6xl font-serif text-white tracking-tight mb-4">Nos services</h1>
<p className="text-base text-neutral-400 max-w-2xl mx-auto">
                        Un socle unifié de services pour concevoir, lancer et scaler vos plateformes SaaS, vos agents IA et vos écosystèmes mobiles.
                    </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

<article className="glass-panel p-8 rounded-sm">
<h2 className="text-2xl font-serif text-white tracking-tight mb-2">Développement SaaS</h2>
<p className="text-[0.6875rem] uppercase tracking-widest text-neutral-500 mb-2">Statut : Disponible</p>
<p className="text-sm text-neutral-400 mb-4">
                            Conception et réalisation de plateformes SaaS complètes : multi-tenant, billing, analytics, sécurité et observabilité.
                        </p>
<a className="text-xs uppercase tracking-widest text-[#D4AF37] hover:text-[#FCF6BA] transition-colors gold-button-hover" href="/services/saas.html">
                            En savoir plus
                        </a>
</article>

<article className="glass-panel p-8 rounded-sm">
<h2 className="text-2xl font-serif text-white tracking-tight mb-2">Workflows IA &amp; Agents</h2>
<p className="text-[0.6875rem] uppercase tracking-widest text-neutral-500 mb-2">Statut : Disponible</p>
<p className="text-sm text-neutral-400 mb-4">
                            Conception de pipelines IA sur-mesure : ingestion de données, LLM, scoring, actions automatisées et supervision.
                        </p>
<a className="text-xs uppercase tracking-widest text-[#D4AF37] hover:text-[#FCF6BA] transition-colors gold-button-hover" href="/services/workflows-agents.html">
                            En savoir plus
                        </a>
</article>

<article className="glass-panel p-8 rounded-sm">
<h2 className="text-2xl font-serif text-white tracking-tight mb-2">Applications mobiles</h2>
<p className="text-[0.6875rem] uppercase tracking-widest text-neutral-500 mb-2">Statut : En accompagnement</p>
<p className="text-sm text-neutral-400 mb-4">
                            Apps natives ou hybrides, parfaitement alignées avec votre back-office SaaS et vos exigences de performance.
                        </p>
<a className="text-xs uppercase tracking-widest text-[#D4AF37] hover:text-[#FCF6BA] transition-colors gold-button-hover" href="/services/mobile-apps.html">
                            En savoir plus
                        </a>
</article>

<article className="glass-panel p-8 rounded-sm">
<h2 className="text-2xl font-serif text-white tracking-tight mb-2">Sites web premium</h2>
<p className="text-[0.6875rem] uppercase tracking-widest text-neutral-500 mb-2">Statut : Disponible</p>
<p className="text-sm text-neutral-400 mb-4">
                            Présentations corporate, landing pages et expériences marketing haut de gamme adossées à vos produits.
                        </p>
<a className="text-xs uppercase tracking-widest text-[#D4AF37] hover:text-[#FCF6BA] transition-colors gold-button-hover" href="/services/sites-premium.html">
                            En savoir plus
                        </a>
</article>

<article className="glass-panel p-8 rounded-sm">
<h2 className="text-2xl font-serif text-white tracking-tight mb-2">Formations &amp; accompagnements</h2>
<p className="text-[0.6875rem] uppercase tracking-widest text-neutral-500 mb-2">Statut : Disponible</p>
<p className="text-sm text-neutral-400 mb-4">
                            Audit, cadrage produit, revue d’architecture, advisory IA, accompagnement build &amp; run.
                        </p>
<a className="text-xs uppercase tracking-widest text-[#D4AF37] hover:text-[#FCF6BA] transition-colors gold-button-hover" href="/services/formations.html">
                            En savoir plus
                        </a>
</article>

<article className="glass-panel p-8 rounded-sm opacity-60">
<h2 className="text-2xl font-serif text-white tracking-tight mb-2">Service sur-mesure</h2>
<p className="text-[0.6875rem] uppercase tracking-widest text-neutral-500 mb-2">Statut : Sur demande</p>
<p className="text-sm text-neutral-400 mb-4">
                            Conception de services digitaux spécifiques à votre métier : intégrations, outils internes, portails clients.
                        </p>
<button className="text-xs uppercase tracking-widest text-[#D4AF37] hover:text-[#FCF6BA] transition-colors gold-button-hover" onclick="showPage('contact')">
                            Nous contacter
                        </button>
</article>
</div>
</div>
</div>

<div className="hidden-page pt-20 pb-32" id="page-workflows">
<div className="max-w-7xl mx-auto px-6">
<header className="mb-16 text-center">
<span className="text-[#00F0FF] text-[0.625rem] uppercase tracking-[0.4em] block mb-4">Workflows IA</span>
<h1 className="text-4xl md:text-6xl font-serif text-white tracking-tight mb-4">Automatisations IA &amp; Ops</h1>
<p className="text-base text-neutral-400 max-w-2xl mx-auto">
                        Des workflows IA prêts à l’emploi, intégrables via API ou bus d’événements, conçus pour la conformité, la traçabilité et la haute disponibilité.
                    </p>
</header>
<section className="grid md:grid-cols-2 gap-8 mb-16">

<article className="glass-panel p-8 rounded-sm">
<div className="mb-4">
<h2 className="text-2xl font-serif text-white tracking-tight mb-2">KYC automatisé (Banques)</h2>
<p className="text-[0.6875rem] uppercase tracking-widest text-neutral-500 mb-2">Workflow IA</p>
</div>
<p className="text-sm text-neutral-400 mb-4">
                            Analyse automatique des dossiers d’ouverture de compte et demandes de prêt : extraction documentaire, 
                            vérification d’identité, scoring de risque et détection de fraude.
                        </p>
<p className="text-xs text-neutral-500 mb-2">
                            Résultat : réduction drastique du temps de traitement et amélioration de la détection de fraudes.
                        </p>
<a className="inline-block mt-2 text-xs uppercase tracking-widest text-[#00F0FF] hover:text-[#FCF6BA] transition-colors gold-button-hover" href="/workflows/kyc-automatisation.html">
                            Voir la fiche workflow
                        </a>
</article>

<article className="glass-panel p-8 rounded-sm">
<div className="mb-4">
<h2 className="text-2xl font-serif text-white tracking-tight mb-2">Traitement de sinistres (Assurances)</h2>
<p className="text-[0.6875rem] uppercase tracking-widest text-neutral-500 mb-2">Workflow IA</p>
</div>
<p className="text-sm text-neutral-400 mb-4">
                            Pipeline IA pour ingestion de dossiers multi-formats (PDF, emails, photos), classification, 
                            priorisation et propositions de décision préremplies pour les gestionnaires.
                        </p>
<p className="text-xs text-neutral-500 mb-2">
                            Résultat : temps de réponse réduit, meilleure cohérence décisionnelle.
                        </p>
<a className="inline-block mt-2 text-xs uppercase tracking-widest text-[#00F0FF] hover:text-[#FCF6BA] transition-colors gold-button-hover" href="/workflows/sinistres-ia.html">
                            Voir la fiche workflow
                        </a>
</article>

<article className="glass-panel p-8 rounded-sm">
<div className="mb-4">
<h2 className="text-2xl font-serif text-white tracking-tight mb-2">Redirection email automatisée</h2>
<p className="text-[0.6875rem] uppercase tracking-widest text-neutral-500 mb-2">Workflow IA</p>
</div>
<p className="text-sm text-neutral-400 mb-4">
                            Routage automatique des emails entrants (internes / externes) vers les services ou personnes appropriées 
                            en fonction du contenu et des métadonnées, via NLP.
                        </p>
<p className="text-xs text-neutral-500 mb-2">
                            Résultat : désengorgement des boîtes partagées, meilleure répartition de charge.
                        </p>
<a className="inline-block mt-2 text-xs uppercase tracking-widest text-[#00F0FF] hover:text-[#FCF6BA] transition-colors gold-button-hover" href="/workflows/redirection-email.html">
                            Voir la fiche workflow
                        </a>
</article>

<article className="glass-panel p-8 rounded-sm">
<div className="mb-4">
<h2 className="text-2xl font-serif text-white tracking-tight mb-2">Génération de rapports de performance</h2>
<p className="text-[0.6875rem] uppercase tracking-widest text-neutral-500 mb-2">Workflow IA</p>
</div>
<p className="text-sm text-neutral-400 mb-4">
                            Pipeline qui agrège KPIs multi-sources et produit automatiquement des rapports riches (PDF, CSV, dashboards) 
                            pour la direction, les équipes opérationnelles ou les clients.
                        </p>
<p className="text-xs text-neutral-500 mb-2">
                            Résultat : reporting systématique, réduction du travail manuel, meilleure qualité des données.
                        </p>
<a className="inline-block mt-2 text-xs uppercase tracking-widest text-[#00F0FF] hover:text-[#FCF6BA] transition-colors gold-button-hover" href="/workflows/rapports-ia.html">
                            Voir la fiche workflow
                        </a>
</article>
</section>
<section className="glass-panel p-6 rounded-sm text-xs text-neutral-500">
<p className="mb-2 uppercase tracking-widest">Catalogue machine-readable</p>
<p>
                        Les workflows sont également décrits dans un format structuré (JSON / HTML) pour ingestion automatisée 
                        (catalogue interne, portail développeurs, génération de documentation).
                    </p>
</section>
</div>
</div>

<div className="hidden-page pt-20 pb-32" id="page-about">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="w-px h-20 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent mx-auto mb-10"></div>
<h2 className="text-4xl md:text-6xl text-white font-serif mb-8 tracking-tight">Philosophie de l'Invisible</h2>
<div className="glass-panel p-12 text-left relative mb-12">
<i className="absolute top-8 left-8 text-white/5 w-16 h-16" data-lucide="quote"></i>
<p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed relative z-10 mb-6">
                         Dans un monde bruyant, le véritable luxe est le calme. Nos interfaces sont conçues pour disparaître, ne laissant que la puissance de la fonctionnalité et la beauté de l'information. Nous ne créons pas seulement du code, nous sculptons l'expérience digitale.
                     </p>
<p className="text-base text-neutral-300 font-light leading-relaxed relative z-10 mb-4">
                        Nous sommes une équipe d’ingénieurs, designers et chercheurs en IA dédiée à la transformation digitale des organisations. 
                        Nous conjuguons esthétique premium et ingénierie robuste pour livrer des SaaS scalables, des agents autonomes et des applications mobiles qui créent de la valeur.
                     </p>
<p className="text-base text-neutral-300 font-light leading-relaxed relative z-10">
                        Notre mission : transformer vos contraintes métiers en produits numériques durables, maintenables et élégants, 
                        tout en vous accompagnant sur la gouvernance, la sécurité et la montée en compétence de vos équipes.
                     </p>
<div className="mt-8 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#D4AF37] grayscale opacity-50"></div>
<div>
<p className="text-white text-sm font-serif italic">L'équipe Einsof</p>
<p className="text-[0.625rem] uppercase tracking-widest text-neutral-500">France — Île-de-France • Guinée — Conakry</p>
</div>
</div>
</div>
<section className="grid md:grid-cols-2 gap-10 text-left mb-12">
<div>
<h3 className="text-xl font-serif text-white tracking-tight mb-3">Équipe &amp; expertises</h3>
<ul className="space-y-2 text-base text-neutral-300">
<li>SaaS engineering &amp; architecture cloud</li>
<li>Intelligence Artificielle &amp; agents autonomes</li>
<li>Applications mobiles iOS / Android</li>
<li>Design produit &amp; design système</li>
</ul>
</div>
<div>
<h3 className="text-xl font-serif text-white tracking-tight mb-3">Méthodologie</h3>
<ul className="space-y-2 text-base text-neutral-300">
<li>Cadres agiles adaptés (Scrum / Kanban)</li>
<li>CI/CD, revues de code et tests automatisés</li>
<li>Prise en compte sécurité &amp; conformité dès la phase de design</li>
<li>Observabilité &amp; mesure de la valeur délivrée</li>
</ul>
</div>
</section>
<section className="grid md:grid-cols-3 gap-8 text-left mb-12 border-t border-white/5 pt-10">
<div>
<h4 className="text-sm font-serif text-white tracking-tight mb-2">Certifications</h4>
<p className="text-xs text-neutral-400">ISO / santé (contexte projet), cloud provider certifications (selon environnement client).</p>
</div>
<div>
<h4 className="text-sm font-serif text-white tracking-tight mb-2">Partenaires</h4>
<p className="text-xs text-neutral-400">Écosystèmes cloud, éditeurs spécialisés et équipes internes de vos organisations.</p>
</div>
<div>
<h4 className="text-sm font-serif text-white tracking-tight mb-2">Études de cas</h4>
<p className="text-xs text-neutral-400">Dossiers détaillés disponibles sur demande pour projets sensibles ou confidentiels.</p>
</div>
</section>
<div className="grid grid-cols-3 gap-8 mt-10 border-t border-white/5 pt-10">
<div>
<span className="block text-3xl text-white font-serif mb-2">100%</span>
<span className="text-[0.625rem] uppercase tracking-widest text-neutral-500">Satisfaction</span>
</div>
<div>
<span className="block text-3xl text-white font-serif mb-2">Global</span>
<span className="text-[0.625rem] uppercase tracking-widest text-neutral-500">Portée</span>
</div>
<div>
<span className="block text-3xl text-white font-serif mb-2">24/7</span>
<span className="text-[0.625rem] uppercase tracking-widest text-neutral-500">Support</span>
</div>
</div>
<div className="mt-10 text-left">
<h3 className="text-sm font-serif text-white tracking-tight mb-3">Témoignages &amp; références</h3>
<p className="text-xs text-neutral-400">
                        Témoignages clients et logos disponibles dans notre présentation corporate et lors des échanges directs.
                    </p>
</div>
</div>
</div>

<div className="hidden-page pt-20 pb-32" id="page-resources">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-4xl text-white font-serif mb-16 border-l-2 border-[#D4AF37] pl-6 tracking-tight">Ressources</h2>
<div className="grid md:grid-cols-3 gap-8">

<article className="glass-panel p-8 group hover-target">
<div className="flex justify-between items-start mb-12">
<i className="text-neutral-500 group-hover:text-[#D4AF37] transition-colors" data-lucide="file-text"></i>
<span className="text-[0.5625rem] border border-white/10 px-2 py-1 rounded text-neutral-500">HTML</span>
</div>
<h3 className="text-xl text-white font-serif mb-2 group-hover:translate-x-2 transition-transform duration-500 tracking-tight">Présentation Corporate</h3>
<p className="text-xs text-neutral-500 mb-8 font-light">Vision, positionnement et piliers d’expertise.</p>
<button className="w-full py-3 border-t border-white/5 text-xs uppercase tracking-widest text-neutral-400 group-hover:text-white group-hover:border-[#D4AF37]/50 transition-all text-left flex justify-between items-center" onclick="openResourceModal('corporate')">
                            Voir le document <i className="w-3 h-3" data-lucide="download"></i>
</button>
</article>

<article className="glass-panel p-8 group hover-target">
<div className="flex justify-between items-start mb-12">
<i className="text-neutral-500 group-hover:text-[#D4AF37] transition-colors" data-lucide="file-text"></i>
<span className="text-[0.5625rem] border border-white/10 px-2 py-1 rounded text-neutral-500">HTML</span>
</div>
<h3 className="text-xl text-white font-serif mb-2 group-hover:translate-x-2 transition-transform duration-500 tracking-tight">Catalogue des services</h3>
<p className="text-xs text-neutral-500 mb-8 font-light">Vue d’ensemble des offres Einsof Digit.</p>
<button className="w-full py-3 border-t border-white/5 text-xs uppercase tracking-widest text-neutral-400 group-hover:text-white group-hover:border-[#D4AF37]/50 transition-all text-left flex justify-between items-center" onclick="openResourceModal('catalogue')">
                            Voir le document <i className="w-3 h-3" data-lucide="download"></i>
</button>
</article>

<article className="glass-panel p-8 group hover-target">
<div className="flex justify-between items-start mb-12">
<i className="text-neutral-500 group-hover:text-[#D4AF37] transition-colors" data-lucide="file-text"></i>
<span className="text-[0.5625rem] border border-white/10 px-2 py-1 rounded text-neutral-500">HTML</span>
</div>
<h3 className="text-xl text-white font-serif mb-2 group-hover:translate-x-2 transition-transform duration-500 tracking-tight">Guide : Transformation digitale &amp; IA</h3>
<p className="text-xs text-neutral-500 mb-8 font-light">Principes clés pour démarrer sereinement.</p>
<button className="w-full py-3 border-t border-white/5 text-xs uppercase tracking-widest text-neutral-400 group-hover:text-white group-hover:border-[#D4AF37]/50 transition-all text-left flex justify-between items-center" onclick="openResourceModal('guide-transfo')">
                            Voir le document <i className="w-3 h-3" data-lucide="download"></i>
</button>
</article>

<article className="glass-panel p-8 group hover-target">
<div className="flex justify-between items-start mb-12">
<i className="text-neutral-500 group-hover:text-[#D4AF37] transition-colors" data-lucide="file-text"></i>
<span className="text-[0.5625rem] border border-white/10 px-2 py-1 rounded text-neutral-500">HTML</span>
</div>
<h3 className="text-xl text-white font-serif mb-2 group-hover:translate-x-2 transition-transform duration-500 tracking-tight">Brochure — Développement SaaS Premium</h3>
<p className="text-xs text-neutral-500 mb-8 font-light">Notre approche pour créer des plateformes SaaS exigeantes.</p>
<button className="w-full py-3 border-t border-white/5 text-xs uppercase tracking-widest text-neutral-400 group-hover:text-white group-hover:border-[#D4AF37]/50 transition-all text-left flex justify-between items-center" onclick="openResourceModal('brochure-saas')">
                            Voir le document <i className="w-3 h-3" data-lucide="download"></i>
</button>
</article>

<article className="glass-panel p-8 group hover-target">
<div className="flex justify-between items-start mb-12">
<i className="text-neutral-500 group-hover:text-[#D4AF37] transition-colors" data-lucide="file-text"></i>
<span className="text-[0.5625rem] border border-white/10 px-2 py-1 rounded text-neutral-500">HTML</span>
</div>
<h3 className="text-xl text-white font-serif mb-2 group-hover:translate-x-2 transition-transform duration-500 tracking-tight">Brochure — Workflows IA &amp; Automatisations</h3>
<p className="text-xs text-neutral-500 mb-8 font-light">Exemples d’automatisations IA prêtes à déployer.</p>
<button className="w-full py-3 border-t border-white/5 text-xs uppercase tracking-widest text-neutral-400 group-hover:text-white group-hover:border-[#D4AF37]/50 transition-all text-left flex justify-between items-center" onclick="openResourceModal('brochure-workflows')">
                            Voir le document <i className="w-3 h-3" data-lucide="download"></i>
</button>
</article>
</div>
</div>
</div>

<div className="hidden-page pt-20 min-h-screen flex items-center" id="page-contact">
<div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-20">
<div className="fade-in-up stagger-1">
<h2 className="text-5xl text-white font-serif mb-6 tracking-tight">Initier le <span className="text-[#D4AF37] italic">Dialogue</span></h2>
<p className="text-neutral-400 font-light mb-12">Pour les projets ambitieux nécessitant une attention particulière. Nous répondons sous 24h.</p>
<div className="space-y-8">
<div className="flex items-center gap-6 group hover-target">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37] transition-colors">
<i className="text-neutral-400 group-hover:text-[#D4AF37]" data-lucide="mail"></i>
</div>
<div>
<p className="text-[0.625rem] uppercase tracking-widest text-neutral-500">Email Direct</p>
<a className="text-white font-serif text-lg hover:text-[#D4AF37] transition-colors" href="mailto:contact@einsofdigit.com">contact@einsofdigit.com</a>
</div>
</div>

<div className="flex items-center gap-6 group hover-target">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#00F0FF] transition-colors">
<i className="text-neutral-400 group-hover:text-[#00F0FF]" data-lucide="map-pin"></i>
</div>
<div>
<p className="text-[0.625rem] uppercase tracking-widest text-neutral-500">Localisations</p>
<p className="text-white font-serif text-lg">
                                    France — Île-de-France<br/>
                                    Guinée — Conakry<br/>
                                    Bientôt — Royaume-Uni
                                </p>
</div>
</div>

<div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/5">
<a aria-label="Lien vers LinkedIn" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 transition-colors" href="https://www.linkedin.com/in/mahunan-gbessi/" rel="noopener noreferrer" target="_blank">
<svg className="w-4 h-4 text-neutral-300" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.34h4.56V24H.22zM8.34 8.34H12.7v2.13h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 6.99V24h-4.56v-7.42c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.92V24H8.34z"></path>
</svg>
</a>
<a aria-label="Lien vers X (Twitter)" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-white hover:bg-white/10 transition-colors" href="https://x.com/EINSOFDIGIT" rel="noopener noreferrer" target="_blank">
<svg className="w-4 h-4 text-neutral-300" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.244 2H21.5l-7.42 8.48L22.75 22h-5.657l-4.41-5.326L7.54 22H4.282l7.93-9.06L3.25 2h5.82l3.986 4.79L18.244 2zm-1.1 17.42h1.53L7.945 4.48H6.27l10.874 14.94z"></path>
</svg>
</a>
<a aria-label="Lien vers WhatsApp" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#25D366] hover:bg-[#25D366]/10 transition-colors" href="https://wa.me/message/57XO7DHDVHETA1" rel="noopener noreferrer" target="_blank">
<svg className="w-4 h-4 text-neutral-300" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20.52 3.48A11.84 11.84 0 0 0 12.04 0C5.62 0 .4 5.21.4 11.62c0 2.05.54 4.05 1.57 5.82L0 24l6.7-1.95a11.67 11.67 0 0 0 5.34 1.36h.01c6.42 0 11.64-5.21 11.64-11.62 0-3.11-1.21-6.03-3.17-8.31zM12.05 21.3h-.01a9.7 9.7 0 0 1-4.95-1.36l-.35-.21-3.98 1.16 1.19-3.88-.23-.4a9.65 9.65 0 0 1-1.46-5.1c0-5.34 4.36-9.69 9.72-9.69 2.6 0 5.05 1.01 6.89 2.84a9.61 9.61 0 0 1 2.85 6.86c0 5.34-4.36 9.68-9.72 9.68zm5.32-7.27c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.9 1.13-.17.19-.33.21-.62.07-.29-.14-1.21-.45-2.3-1.43-.85-.76-1.43-1.7-1.6-1.99-.17-.29-.02-.45.13-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.02 2.81 1.16 3 .14.19 2.01 3.21 4.87 4.5.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.11.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.33z"></path>
</svg>
</a>
</div>
</div>
</div>
<div className="glass-panel p-10 rounded-sm fade-in-up stagger-2">
<form className="space-y-8">
<div className="grid grid-cols-2 gap-8">
<div className="space-y-2">
<label className="text-[0.5625rem] uppercase tracking-widest text-neutral-500">Identité</label>
<input className="w-full premium-input pb-2 font-serif text-lg placeholder-neutral-700" placeholder="Votre nom" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[0.5625rem] uppercase tracking-widest text-neutral-500">Structure</label>
<input className="w-full premium-input pb-2 font-serif text-lg placeholder-neutral-700" placeholder="Entreprise" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-[0.5625rem] uppercase tracking-widest text-neutral-500">Contact</label>
<input className="w-full premium-input pb-2 font-serif text-lg placeholder-neutral-700" placeholder="Email professionnel" type="email"/>
</div>
<div className="space-y-2">
<label className="text-[0.5625rem] uppercase tracking-widest text-neutral-500">Vision</label>
<textarea className="w-full premium-input pb-2 font-serif text-lg placeholder-neutral-700 resize-none" placeholder="Décrivez votre besoin..." rows="3"></textarea>
</div>
<button className="w-full py-4 bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-[0.2em] hover:shadow-[0_0_1.25rem_rgba(212,175,55,0.4)] transition-all duration-300 hover-target" type="button">
                            Envoyer la demande
                        </button>
</form>
</div>
</div>
</div>
</main>
<footer className="border-t border-white/5 bg-[#020202] text-neutral-500 relative z-10">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col md:flex-row md:items-center md:gap-4">
<div className="flex items-center gap-2 mb-2 md:mb-0">
<div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
<span className="text-xs font-serif text-white tracking-wider">EINSOF DIGIT © 2024</span>
</div>
<p className="text-[0.625rem] uppercase tracking-widest text-neutral-500">
                    France — Île-de-France • Guinée — Conakry • Bientôt — Royaume-Uni
                </p>
</div>
<div className="flex flex-wrap gap-4 md:gap-6 items-center text-[0.625rem] uppercase tracking-widest">
<a className="hover:text-[#D4AF37] transition-colors hover-target" href="#">Mentions Légales</a>
<a className="hover:text-[#D4AF37] transition-colors hover-target" href="#">Privacy</a>

<a aria-label="Lien vers LinkedIn" className="hover:text-[#D4AF37] transition-colors hover-target flex items-center gap-1" href="https://www.linkedin.com/in/mahunan-gbessi/" rel="noopener noreferrer" target="_blank">
<span>LinkedIn</span>
</a>
<a aria-label="Lien vers X (Twitter)" className="hover:text-[#D4AF37] transition-colors hover-target flex items-center gap-1" href="https://x.com/EINSOFDIGIT" rel="noopener noreferrer" target="_blank">
<span>X</span>
</a>
<a aria-label="Lien vers WhatsApp" className="hover:text-[#D4AF37] transition-colors hover-target flex items-center gap-1" href="https://wa.me/message/57XO7DHDVHETA1" rel="noopener noreferrer" target="_blank">
<span>WhatsApp</span>
</a>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden items-center justify-center bg-black/60" id="project-modal">
<div className="glass-panel max-w-2xl w-full mx-4 p-8 rounded-sm relative">
<button aria-label="Fermer" className="absolute top-4 right-4 text-neutral-500 hover:text-white" onclick="closeProjectModal()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
<div className="space-y-4 text-sm text-neutral-300" id="project-modal-content"></div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden items-center justify-center bg-black/60" id="resource-modal">
<div className="glass-panel max-w-3xl w-full mx-4 p-8 rounded-sm relative max-h-[80vh] overflow-y-auto">
<button aria-label="Fermer" className="absolute top-4 right-4 text-neutral-500 hover:text-white" onclick="closeResourceModal()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
<div className="space-y-4 text-sm text-neutral-300" id="resource-modal-content"></div>
</div>
</div>


    </>
  );
}
