import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Animations au scroll (Fade-up)
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-8');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.js-animate').forEach((el) => {
            // État initial
            el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out');
            observer.observe(el);
        });

        // Navbar Sticky & Blur effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                navbar.classList.remove('bg-transparent', 'py-4');
                navbar.classList.add('bg-white/80', 'backdrop-blur-md', 'border-b-[0.5px]', 'border-[#e7e5e4]');
            } else {
                navbar.classList.add('bg-transparent');
                navbar.classList.remove('bg-white/80', 'backdrop-blur-md', 'border-b-[0.5px]', 'border-[#e7e5e4]');
            }
        });

        // FAQ Accordion Logic
        function toggleFaq(element) {
            const content = element.querySelector('.faq-content');
            const isOpen = content.classList.contains('open');
            
            // Fermer tous les autres (optionnel, selon l'UX désirée. Ici on laisse indépendant)
            // document.querySelectorAll('.faq-content').forEach(c => c.classList.remove('open'));
            
            if (isOpen) {
                content.classList.remove('open');
            } else {
                content.classList.add('open');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[60px] flex items-center bg-transparent" id="navbar">
<div className="max-w-[1080px] mx-auto w-full px-6 flex items-center justify-between">
<a className="flex items-baseline gap-2 group" href="#">
<span className="font-manrope font-bold text-xl tracking-tighter text-[#1c1917] group-hover:text-[#e85d1a] transition-colors">Leakly</span>
<span className="font-mono-custom text-xs text-[#a8a29e] hidden sm:inline-block">LeakProof System</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-light text-[#78716c] hover:text-[#1c1917] transition-colors" href="#comment">Comment ça marche</a>
<a className="text-sm font-light text-[#78716c] hover:text-[#1c1917] transition-colors" href="#resultats">Résultats</a>
<a className="text-sm font-light text-[#78716c] hover:text-[#1c1917] transition-colors" href="#tarifs">Tarifs</a>
<a className="text-sm font-light text-[#78716c] hover:text-[#1c1917] transition-colors" href="#apropos">À propos</a>
</nav>
<a className="bg-[#e85d1a] hover:bg-[#ff7a3d] text-white font-manrope font-semibold text-sm px-4 py-2 rounded-lg transition-colors flex items-center gap-1 shadow-sm" href="#tarifs">
                Réserver un appel <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</header>

<main>

<section className="pt-32 pb-20 px-6 max-w-[680px] mx-auto text-center flex flex-col items-center js-animate">
<div className="font-mono-custom text-xs uppercase tracking-widest text-[#a8a29e] mb-6">/ Pour les fondateurs SaaS B2B entre 10k et 40k MRR</div>
<h1 className="font-manrope font-bold text-4xl md:text-5xl lg:text-6xl tracking-tighter text-[#1c1917] mb-6 leading-[1.1]">
                J'identifie où ton SaaS <span className="text-[#e85d1a]">perd du revenu</span>. <br className="hidden md:block"/>
                Et je <span className="text-[#e85d1a]">le corrige</span>.
            </h1>
<p className="font-inter font-light text-lg text-[#78716c] mb-10 leading-relaxed max-w-xl">
                Pour que ton MRR reflète enfin la vraie valeur de ton produit — sans changer ton trafic.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8">
<a className="w-full sm:w-auto bg-[#e85d1a] hover:bg-[#ff7a3d] text-white font-manrope font-semibold text-sm px-6 py-3 rounded-lg transition-colors flex justify-center items-center gap-2" href="#tarifs">
                    Réserver un appel découverte <iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto text-[#78716c] hover:text-[#1c1917] font-inter font-light text-sm px-6 py-3 transition-colors flex justify-center items-center gap-2" href="#comment">
                    Voir comment ça marche <iconify-icon height="18" icon="solar:arrow-down-linear" width="18"></iconify-icon>
</a>
</div>
<div className="flex items-center gap-2 text-xs font-light text-[#a8a29e]">
<iconify-icon height="14" icon="solar:shield-check-linear" width="14"></iconify-icon>
<span>+10 fondateurs SaaS accompagnés en 2025 · 50–100k€ de revenu récupéré estimé par mission</span>
</div>
</section>
<div className="max-w-[1080px] mx-auto px-6"><div className="w-full h-[0.5px] bg-[#e7e5e4]"></div></div>

<section className="py-24 px-6 max-w-[1080px] mx-auto js-animate" id="diagnostic">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
<div className="md:col-span-5 flex flex-col items-start">
<div className="font-mono-custom text-xs uppercase tracking-widest text-[#a8a29e] mb-6">/ Le diagnostic</div>
<h2 className="font-manrope font-bold text-3xl md:text-4xl tracking-tighter text-[#1c1917] leading-tight mb-6">
                        Tu as du trafic. Tu as un produit qui marche.<br/>Mais ton MRR stagne.
                    </h2>
</div>
<div className="md:col-span-7 flex flex-col gap-6">
<div className="font-inter font-light text-base text-[#78716c] leading-relaxed space-y-4">
<p>Ce n'est pas ton produit le problème. Ce n'est pas ton marché non plus.</p>
<p>C'est que quelque chose fuit — entre l'acquisition, la conversion et la rétention — et personne ne t'a encore montré exactement où.</p>
<p>La plupart des fondateurs refont leur landing page. Changent leur prix. Testent un nouveau canal. Résultat : rien ne bouge.</p>
<p className="font-normal text-[#1c1917]">Parce que ce n'est pas là que ça se passe.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
<div className="bg-[#fff3ed] border-l-2 border-[#fed7aa] p-4 rounded-r-lg">
<p className="font-inter font-light text-sm text-[#9a3412] italic">"J'ai du trafic mais ça ne convertit pas."</p>
</div>
<div className="bg-[#fff3ed] border-l-2 border-[#fed7aa] p-4 rounded-r-lg">
<p className="font-inter font-light text-sm text-[#9a3412] italic">"Mon MRR n'avance plus depuis 3 mois."</p>
</div>
<div className="bg-[#fff3ed] border-l-2 border-[#fed7aa] p-4 rounded-r-lg">
<p className="font-inter font-light text-sm text-[#9a3412] italic">"J'ai refait ma landing et ça n'a rien changé."</p>
</div>
<div className="bg-[#fff3ed] border-l-2 border-[#fed7aa] p-4 rounded-r-lg">
<p className="font-inter font-light text-sm text-[#9a3412] italic">"Je perds des clients mais je ne sais pas pourquoi."</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y-[0.5px] border-[#e7e5e4]" id="comment">
<div className="max-w-[1080px] mx-auto px-6 js-animate">
<div className="text-center max-w-2xl mx-auto mb-16">
<div className="font-mono-custom text-xs uppercase tracking-widest text-[#a8a29e] mb-6">/ L'approche</div>
<h2 className="font-manrope font-bold text-3xl md:text-4xl tracking-tighter text-[#1c1917] leading-tight mb-4">
                        Une seule mission. Trois leviers. Un MRR qui repart.
                    </h2>
<p className="font-inter font-light text-lg text-[#78716c] leading-relaxed">
                        Leakly intervient là où les autres ne regardent pas : avant, pendant et après la conversion.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#fafaf9] border-[0.5px] border-[#e7e5e4] rounded-xl p-8 flex flex-col hover:border-[#d6d3d1] transition-colors">
<div className="font-mono-custom text-xs text-[#78716c] mb-6 flex items-center gap-2">
<iconify-icon className="text-[#a8a29e]" height="16" icon="solar:funnel-linear" width="16"></iconify-icon> AVANT
                        </div>
<h3 className="font-manrope font-bold text-xl tracking-tighter text-[#1c1917] mb-3">Acquisition</h3>
<p className="font-inter font-light text-sm text-[#78716c] leading-relaxed mb-8 flex-grow">
                            Ton message ne résonne pas avec ce que ta cible ressent vraiment. On le réaligne.
                        </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="bg-[#e7e5e4] text-[#44403c] text-xs px-2 py-1 rounded">Messaging</span>
<span className="bg-[#e7e5e4] text-[#44403c] text-xs px-2 py-1 rounded">Positionnement</span>
</div>
</div>

<div className="bg-white border-2 border-[#e85d1a] rounded-xl p-8 flex flex-col relative shadow-sm transform md:-translate-y-2">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e85d1a] text-white text-[10px] font-mono-custom uppercase tracking-widest px-3 py-1 rounded-full">
                            Focus Principal
                        </div>
<div className="font-mono-custom text-xs text-[#e85d1a] mb-6 flex items-center gap-2">
<iconify-icon height="16" icon="solar:mouse-circle-linear" width="16"></iconify-icon> PENDANT
                        </div>
<h3 className="font-manrope font-bold text-xl tracking-tighter text-[#1c1917] mb-3">Conversion</h3>
<p className="font-inter font-light text-sm text-[#57534e] leading-relaxed mb-8 flex-grow">
                            Ta landing page ne convainc pas. Ton copy ne vend pas. On corrige ça avec précision.
                        </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="bg-[#fff3ed] text-[#c2410c] text-xs px-2 py-1 rounded border-[0.5px] border-[#fed7aa]">Landing page</span>
<span className="bg-[#fff3ed] text-[#c2410c] text-xs px-2 py-1 rounded border-[0.5px] border-[#fed7aa]">Copywriting</span>
</div>
</div>

<div className="bg-[#fafaf9] border-[0.5px] border-[#e7e5e4] rounded-xl p-8 flex flex-col hover:border-[#d6d3d1] transition-colors">
<div className="font-mono-custom text-xs text-[#78716c] mb-6 flex items-center gap-2">
<iconify-icon className="text-[#a8a29e]" height="16" icon="solar:users-group-two-rounded-linear" width="16"></iconify-icon> APRÈS
                        </div>
<h3 className="font-manrope font-bold text-xl tracking-tighter text-[#1c1917] mb-3">Rétention</h3>
<p className="font-inter font-light text-sm text-[#78716c] leading-relaxed mb-8 flex-grow">
                            Tes clients partent trop tôt. L'onboarding ne les accroche pas. On réduit le churn à la source.
                        </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="bg-[#e7e5e4] text-[#44403c] text-xs px-2 py-1 rounded">Onboarding</span>
<span className="bg-[#e7e5e4] text-[#44403c] text-xs px-2 py-1 rounded">Activation</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-[800px] mx-auto js-animate" id="process">
<div className="text-center mb-16">
<div className="font-mono-custom text-xs uppercase tracking-widest text-[#a8a29e] mb-6">/ Mois 1 — comment on travaille</div>
<h2 className="font-manrope font-bold text-3xl md:text-4xl tracking-tighter text-[#1c1917] leading-tight">
                    En 4 semaines, tu sais exactement où ton revenu fuit.<br/>Et c'est déjà corrigé.
                </h2>
</div>
<div className="space-y-0">

<div className="flex gap-6 items-start py-8 border-t-[0.5px] border-[#e7e5e4]">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1c1917] flex items-center justify-center font-mono-custom text-sm text-[#e85d1a]">1</div>
<div>
<h3 className="font-manrope font-semibold text-lg text-[#1c1917] mb-2">S1 · Diagnostic</h3>
<p className="font-inter font-light text-base text-[#78716c] leading-relaxed">
                            Questionnaire d'onboarding approfondi. Dans les 24 à 48h, tu reçois ta carte des fuites : les points précis où ton SaaS perd du revenu, classés par priorité.
                        </p>
</div>
</div>

<div className="flex gap-6 items-start py-8 border-t-[0.5px] border-[#e7e5e4]">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1c1917] flex items-center justify-center font-mono-custom text-sm text-[#e85d1a]">2</div>
<div>
<h3 className="font-manrope font-semibold text-lg text-[#1c1917] mb-2">S2 · Correction conversion</h3>
<p className="font-inter font-light text-base text-[#78716c] leading-relaxed">
                            On retravaille le copy, le messaging et les pages clés qui bloquent la conversion. Pas de redesign cosmétique — uniquement ce qui a un impact direct sur ton MRR.
                        </p>
</div>
</div>

<div className="flex gap-6 items-start py-8 border-t-[0.5px] border-[#e7e5e4]">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1c1917] flex items-center justify-center font-mono-custom text-sm text-[#e85d1a]">3</div>
<div>
<h3 className="font-manrope font-semibold text-lg text-[#1c1917] mb-2">S3 · Activation &amp; rétention</h3>
<p className="font-inter font-light text-base text-[#78716c] leading-relaxed">
                            On optimise ton onboarding, tes emails d'activation et les séquences qui réduisent le churn. Parce que garder un client coûte moins cher qu'en acquérir un nouveau.
                        </p>
</div>
</div>

<div className="flex gap-6 items-start py-8 border-y-[0.5px] border-[#e7e5e4]">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1c1917] flex items-center justify-center font-mono-custom text-sm text-[#e85d1a]">4</div>
<div>
<h3 className="font-manrope font-semibold text-lg text-[#1c1917] mb-2">S4 · Consolidation</h3>
<p className="font-inter font-light text-base text-[#78716c] leading-relaxed">
                            Mesure des premiers indicateurs, récap complet des corrections apportées, baseline MRR établie. Tu repars avec une vision claire de ce qui a changé — et pourquoi.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y-[0.5px] border-[#e7e5e4]" id="resultats">
<div className="max-w-[1080px] mx-auto px-6 js-animate">
<div className="mb-12">
<div className="font-mono-custom text-xs uppercase tracking-widest text-[#a8a29e] mb-6">/ Résultats</div>
<h2 className="font-manrope font-bold text-3xl md:text-4xl tracking-tighter text-[#1c1917]">Ce que ça change, concrètement.</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
<div className="bg-[#f5f5f4] p-6 rounded-lg border-[0.5px] border-[#e7e5e4] flex flex-col justify-between h-32">
<span className="font-inter font-light text-xs text-[#a8a29e]">ROI estimé</span>
<span className="font-manrope font-bold text-3xl tracking-tighter text-[#e85d1a]">×15–20</span>
</div>
<div className="bg-[#f5f5f4] p-6 rounded-lg border-[0.5px] border-[#e7e5e4] flex flex-col justify-between h-32">
<span className="font-inter font-light text-xs text-[#a8a29e]">Valeur récupérée / an</span>
<span className="font-manrope font-bold text-3xl tracking-tighter text-[#1c1917]">50–100k€</span>
</div>
<div className="bg-[#f5f5f4] p-6 rounded-lg border-[0.5px] border-[#e7e5e4] flex flex-col justify-between h-32">
<span className="font-inter font-light text-xs text-[#a8a29e]">Taux de réussite</span>
<span className="font-manrope font-bold text-3xl tracking-tighter text-[#1c1917]">70%</span>
</div>
<div className="bg-[#f5f5f4] p-6 rounded-lg border-[0.5px] border-[#e7e5e4] flex flex-col justify-between h-32 relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-[#fff3ed] rounded-bl-full -z-0"></div>
<span className="font-inter font-light text-xs text-[#a8a29e] relative z-10">Fuites identifiées garanties</span>
<span className="font-manrope font-bold text-3xl tracking-tighter text-[#e85d1a] relative z-10">3 min.</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-[#fafaf9] p-8 rounded-xl border-[0.5px] border-[#e7e5e4] relative">
<iconify-icon className="text-[#d6d3d1] absolute top-6 right-6 opacity-50" height="32" icon="solar:quote-left-linear" width="32"></iconify-icon>
<p className="font-inter font-light text-base text-[#57534e] italic leading-relaxed mb-6">
                            "En 3 semaines, Leakly a complètement revu notre funnel d'activation. On perdait littéralement 40% de nos signups le premier jour. L'impact sur le MRR a été visible dès le mois suivant."
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#e7e5e4] border-[0.5px] border-[#d6d3d1]"></div>
<div>
<p className="font-manrope font-semibold text-sm text-[#1c1917]">Alexandre D.</p>
<p className="font-inter font-light text-xs text-[#a8a29e]">CEO, SaaS RH (25k MRR)</p>
</div>
</div>
</div>
<div className="bg-[#fafaf9] p-8 rounded-xl border-[0.5px] border-[#e7e5e4] relative">
<iconify-icon className="text-[#d6d3d1] absolute top-6 right-6 opacity-50" height="32" icon="solar:quote-left-linear" width="32"></iconify-icon>
<p className="font-inter font-light text-base text-[#57534e] italic leading-relaxed mb-6">
                            "Je pensais avoir besoin de plus de trafic. Leakly m'a prouvé que mon problème était la clarté de mon offre. On a restructuré la landing et le pricing : le taux de conversion a doublé."
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#e7e5e4] border-[0.5px] border-[#d6d3d1]"></div>
<div>
<p className="font-manrope font-semibold text-sm text-[#1c1917]">Sarah M.</p>
<p className="font-inter font-light text-xs text-[#a8a29e]">Fondatrice, FinTech (18k MRR)</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-[1080px] mx-auto js-animate" id="tarifs">
<div className="text-center max-w-2xl mx-auto mb-16">
<div className="font-mono-custom text-xs uppercase tracking-widest text-[#a8a29e] mb-6">/ Investissement</div>
<h2 className="font-manrope font-bold text-3xl md:text-4xl tracking-tighter text-[#1c1917] leading-tight mb-4">
                    Une offre conçue pour que le ROI soit évident avant même de signer.
                </h2>
<p className="font-inter font-light text-lg text-[#78716c] leading-relaxed">
                    Pas d'agence. Pas d'équipe junior. Une mission, un expert, des résultats mesurables.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8 items-start">

<div className="md:col-span-7 bg-[#1c1917] text-[#f5f5f4] p-8 md:p-10 rounded-2xl shadow-xl flex flex-col h-full border-[0.5px] border-[#44403c]">
<div className="flex justify-between items-start mb-6">
<div>
<span className="bg-[#292524] text-[#d6d3d1] text-xs font-mono-custom px-3 py-1 rounded-full border-[0.5px] border-[#44403c]">Mois 1 · Mission complète</span>
<h3 className="font-manrope font-bold text-2xl tracking-tighter mt-4 text-white">L'Audit &amp; L'Action</h3>
</div>
</div>
<div className="mb-8 pb-8 border-b-[0.5px] border-[#44403c]">
<div className="flex items-end gap-2">
<span className="font-manrope font-bold text-4xl md:text-5xl tracking-tighter text-white">3 000€</span>
<span className="font-inter font-light text-[#a8a29e] mb-1">upfront</span>
</div>
<div className="mt-2 text-[#78716c] font-inter font-light text-sm">
                            + 700€/mois × 3 mois d'accompagnement
                        </div>
<div className="mt-4 bg-[#292524] p-3 rounded-lg flex items-center justify-between border-[0.5px] border-[#44403c]">
<span className="font-inter text-sm text-[#d6d3d1]">Option paiement comptant</span>
<span className="font-manrope font-semibold text-[#e85d1a]">4 500€ (−600€)</span>
</div>
</div>
<ul className="space-y-4 mb-10 flex-grow font-inter font-light text-sm text-[#d6d3d1]">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#e85d1a] flex-shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Diagnostic complet de l'acquisition à la rétention</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#e85d1a] flex-shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Réécriture du messaging et des pages de conversion clés</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#e85d1a] flex-shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Optimisation du flow d'onboarding et d'activation</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#e85d1a] flex-shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Mise en place d'indicateurs de suivi (Baseline)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#e85d1a] flex-shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Accès direct via Slack pendant toute la mission</span>
</li>
</ul>
<button className="w-full bg-[#e85d1a] hover:bg-[#ff7a3d] text-white font-manrope font-semibold text-base px-6 py-4 rounded-xl transition-colors flex justify-center items-center gap-2">
                        Réserver un appel découverte <iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>

<div className="md:col-span-5 bg-white p-8 md:p-10 rounded-2xl border-[0.5px] border-[#e7e5e4] flex flex-col h-full shadow-sm">
<span className="text-[#a8a29e] text-xs font-mono-custom uppercase tracking-widest mb-4">Sur devis</span>
<h3 className="font-manrope font-bold text-2xl tracking-tighter text-[#1c1917] mb-4">Besoin spécifique ?</h3>
<p className="font-inter font-light text-sm text-[#78716c] leading-relaxed mb-8 flex-grow">
                        Tu as besoin d'une intervention ciblée uniquement sur ton onboarding, ou d'une refonte complète de ton pricing model ? Discutons-en. Je réponds généralement dans la journée.
                    </p>
<button className="w-full bg-transparent hover:bg-[#fafaf9] border-[0.5px] border-[#d6d3d1] hover:border-[#a8a29e] text-[#1c1917] font-inter font-normal text-sm px-6 py-3.5 rounded-xl transition-colors">
                        Envoyer un message
                    </button>
</div>
</div>

<div className="bg-[#fff3ed] border-[0.5px] border-[#fed7aa] rounded-xl p-6 md:p-8 max-w-3xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-8">
<div className="w-12 h-12 bg-[#ff7a3d] bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-[#e85d1a]" height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div className="text-center sm:text-left">
<h4 className="font-manrope font-semibold text-[#9a3412] mb-1">Garantie de résultat absolue</h4>
<p className="font-inter font-light text-sm text-[#c2410c] leading-relaxed">
                        3 fuites actionnables identifiées à l'issue de la phase d'audit — ou remboursement intégral de cette phase. Aucun risque pour ton SaaS.
                    </p>
</div>
</div>

<p className="text-center font-inter font-light text-xs text-[#a8a29e] max-w-2xl mx-auto">
                Cette mission n'est pas faite pour toi si : produit non lancé · MRR &lt; 10k · pas de trafic existant · tu cherches juste du design esthétique sans focus conversion.
            </p>
</section>

<section className="py-24 bg-white border-y-[0.5px] border-[#e7e5e4]" id="apropos">
<div className="max-w-[1080px] mx-auto px-6 js-animate">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-5 flex justify-center md:justify-start">

<div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#f5f5f4] border-[0.5px] border-[#e7e5e4] flex items-center justify-center relative overflow-hidden">
<iconify-icon className="text-[#d6d3d1] opacity-50" height="64" icon="solar:user-circle-linear" width="64"></iconify-icon>
</div>
</div>
<div className="md:col-span-7">
<div className="font-mono-custom text-xs uppercase tracking-widest text-[#a8a29e] mb-6">/ Qui est derrière Leakly</div>
<h2 className="font-manrope font-bold text-3xl md:text-4xl tracking-tighter text-[#1c1917] mb-6 leading-tight">
                            Pas une agence. Un expert qui a fait tourner des SaaS.
                        </h2>
<div className="font-inter font-light text-base text-[#57534e] leading-relaxed space-y-4">
<p>
                                Je m'appelle Maxime. J'ai passé les 7 dernières années à travailler sur la croissance de SaaS B2B — entre copywriting, optimisation de la conversion et product marketing.
                            </p>
<p>
                                Ce que j'ai observé à chaque fois dans les boîtes que j'ai accompagnées : <span className="font-normal text-[#1c1917]">les fondateurs perdent du revenu aux mêmes endroits.</span> Ils le savent rarement. Et quand ils le découvrent, c'est souvent après des mois de stagnation.
                            </p>
<p>
                                Leakly est la méthode que j'aurais voulu avoir plus tôt — structurée, chirurgicale, rapide, avec une garantie ferme sur le résultat.
                            </p>
<p className="pt-2 border-t-[0.5px] border-[#e7e5e4] mt-6 text-[#78716c] text-sm">
                                Je travaille avec maximum 3 clients à la fois. Pour que chaque mission reçoive l'attention obsessionnelle qu'elle mérite.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-[800px] mx-auto js-animate" id="faq">
<div className="text-center mb-16">
<div className="font-mono-custom text-xs uppercase tracking-widest text-[#a8a29e] mb-6">/ Questions fréquentes</div>
<h2 className="font-manrope font-bold text-3xl md:text-4xl tracking-tighter text-[#1c1917]">Des questions ?</h2>
</div>
<div className="space-y-4">

<div className="bg-white border-[0.5px] border-[#e7e5e4] rounded-xl hover:border-[#d6d3d1] transition-colors cursor-pointer group" onclick="toggleFaq(this)">
<div className="p-6 flex justify-between items-center">
<h3 className="font-manrope font-semibold text-[#1c1917] pr-8 text-sm md:text-base">En quoi Leakly est différent d'une agence de growth ?</h3>
<div className="w-6 h-6 rounded-full bg-[#f5f5f4] flex items-center justify-center flex-shrink-0 group-hover:bg-[#fff3ed] transition-colors faq-icon-wrapper">
<iconify-icon className="text-[#e85d1a] faq-icon" height="16" icon="solar:add-linear" width="16"></iconify-icon>
</div>
</div>
<div className="faq-content">
<div className="faq-inner px-6 pb-6 pt-0 font-inter font-light text-sm text-[#78716c] leading-relaxed">
                            Une agence facture des forfaits mensuels pour exécuter des tâches. Leakly commence par trouver exactement où ton revenu fuit — puis corrige avec des actions précises. C'est plus rapide, plus chirurgical, et le ROI est mesurable dès le premier mois d'action.
                        </div>
</div>
</div>

<div className="bg-white border-[0.5px] border-[#e7e5e4] rounded-xl hover:border-[#d6d3d1] transition-colors cursor-pointer group" onclick="toggleFaq(this)">
<div className="p-6 flex justify-between items-center">
<h3 className="font-manrope font-semibold text-[#1c1917] pr-8 text-sm md:text-base">Est-ce que ça marche si mon SaaS est encore jeune ?</h3>
<div className="w-6 h-6 rounded-full bg-[#f5f5f4] flex items-center justify-center flex-shrink-0 group-hover:bg-[#fff3ed] transition-colors faq-icon-wrapper">
<iconify-icon className="text-[#e85d1a] faq-icon" height="16" icon="solar:add-linear" width="16"></iconify-icon>
</div>
</div>
<div className="faq-content">
<div className="faq-inner px-6 pb-6 pt-0 font-inter font-light text-sm text-[#78716c] leading-relaxed">
                            Leakly est pensé spécifiquement pour les SaaS générant entre 10k et 40k MRR, avec un produit déjà lancé et du trafic existant. En dessous de ce seuil de traction, les leviers prioritaires sont différents (Product-Market Fit pur) — et cet accompagnement ne serait pas le plus adapté à tes besoins immédiats.
                        </div>
</div>
</div>

<div className="bg-white border-[0.5px] border-[#e7e5e4] rounded-xl hover:border-[#d6d3d1] transition-colors cursor-pointer group" onclick="toggleFaq(this)">
<div className="p-6 flex justify-between items-center">
<h3 className="font-manrope font-semibold text-[#1c1917] pr-8 text-sm md:text-base">Combien de temps avant de voir des résultats ?</h3>
<div className="w-6 h-6 rounded-full bg-[#f5f5f4] flex items-center justify-center flex-shrink-0 group-hover:bg-[#fff3ed] transition-colors faq-icon-wrapper">
<iconify-icon className="text-[#e85d1a] faq-icon" height="16" icon="solar:add-linear" width="16"></iconify-icon>
</div>
</div>
<div className="faq-content">
<div className="faq-inner px-6 pb-6 pt-0 font-inter font-light text-sm text-[#78716c] leading-relaxed">
                            Le diagnostic complet est livré sous 48h. Les premières corrections majeures (comme le messaging ou la landing page) sont en place dans les deux premières semaines. Les effets sur les taux de conversion et le MRR commencent généralement à se mesurer à partir de la fin du mois 1.
                        </div>
</div>
</div>

<div className="bg-white border-[0.5px] border-[#e7e5e4] rounded-xl hover:border-[#d6d3d1] transition-colors cursor-pointer group" onclick="toggleFaq(this)">
<div className="p-6 flex justify-between items-center">
<h3 className="font-manrope font-semibold text-[#1c1917] pr-8 text-sm md:text-base">Que se passe-t-il si le diagnostic ne révèle rien d'utile ?</h3>
<div className="w-6 h-6 rounded-full bg-[#f5f5f4] flex items-center justify-center flex-shrink-0 group-hover:bg-[#fff3ed] transition-colors faq-icon-wrapper">
<iconify-icon className="text-[#e85d1a] faq-icon" height="16" icon="solar:add-linear" width="16"></iconify-icon>
</div>
</div>
<div className="faq-content">
<div className="faq-inner px-6 pb-6 pt-0 font-inter font-light text-sm text-[#78716c] leading-relaxed">
                            C'est le principe même de la garantie. Si à l'issue de l'audit initial je ne suis pas capable de t'identifier au moins 3 fuites actionnables ayant un impact potentiel sur ton revenu, la mission s'arrête là et tu es remboursé intégralement de la phase d'audit.
                        </div>
</div>
</div>

<div className="bg-white border-[0.5px] border-[#e7e5e4] rounded-xl hover:border-[#d6d3d1] transition-colors cursor-pointer group" onclick="toggleFaq(this)">
<div className="p-6 flex justify-between items-center">
<h3 className="font-manrope font-semibold text-[#1c1917] pr-8 text-sm md:text-base">Est-ce qu'on peut travailler ensemble si j'ai déjà une équipe ?</h3>
<div className="w-6 h-6 rounded-full bg-[#f5f5f4] flex items-center justify-center flex-shrink-0 group-hover:bg-[#fff3ed] transition-colors faq-icon-wrapper">
<iconify-icon className="text-[#e85d1a] faq-icon" height="16" icon="solar:add-linear" width="16"></iconify-icon>
</div>
</div>
<div className="faq-content">
<div className="faq-inner px-6 pb-6 pt-0 font-inter font-light text-sm text-[#78716c] leading-relaxed">
                            Absolument. Leakly intervient en complément de ton équipe existante, pas en remplacement. Le diagnostic et les recommandations stratégiques peuvent tout à fait être transmis à tes développeurs, designers ou marketeurs en interne pour l'implémentation finale.
                        </div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#1c1917] text-center px-6 relative overflow-hidden js-animate">
<div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>
<div className="max-w-2xl mx-auto relative z-10">
<h2 className="font-manrope font-bold text-4xl md:text-5xl tracking-tighter text-white mb-6">
                    Ton prochain MRR pourrait être le bon.
                </h2>
<p className="font-inter font-light text-lg text-[#a8a29e] mb-10 leading-relaxed">
                    Réserve un appel de 30 minutes. On regarde ensemble si ta situation correspond à ce que Leakly peut résoudre — en toute transparence et sans engagement.
                </p>
<button className="bg-[#e85d1a] hover:bg-[#ff7a3d] text-white font-manrope font-semibold text-base px-8 py-4 rounded-xl transition-colors mb-4 inline-flex items-center gap-2">
                    Réserver un appel découverte <iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<p className="font-inter font-light text-xs text-[#78716c]">
                    Appel de 30 min · Gratuit · Sans engagement
                </p>
</div>
</section>
</main>

<footer className="bg-[#1c1917] border-t-[0.5px] border-[#292524] py-12 px-6">
<div className="max-w-[1080px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-baseline gap-2">
<span className="font-manrope font-bold text-xl tracking-tighter text-white">Leakly</span>
<span className="font-mono-custom text-[10px] text-[#78716c] uppercase tracking-widest">LeakProof System</span>
</div>
<div className="flex items-center gap-6 font-inter font-light text-xs text-[#78716c]">
<a className="hover:text-[#d6d3d1] transition-colors" href="#">Mentions légales</a>
<a className="hover:text-[#d6d3d1] transition-colors" href="#">Politique de confidentialité</a>
</div>
<div className="font-inter font-light text-xs text-[#57534e]">
                © 2025 Leakly. Tous droits réservés.
            </div>
</div>
</footer>



    </>
  );
}
