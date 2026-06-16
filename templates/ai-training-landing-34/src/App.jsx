import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    document.getElementById('year').textContent = new Date().getFullYear();

    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenuBtn?.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    [...document.querySelectorAll('#mobileMenu a')].forEach(a => {
      a.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });

    const faqButtons = document.querySelectorAll('.faq-btn');
    faqButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const panel = btn.parentElement.querySelector('.faq-panel');
        const expanded = btn.getAttribute('aria-expanded') === 'true';

        faqButtons.forEach((other) => {
          if (other !== btn) {
            other.setAttribute('aria-expanded', 'false');
            const otherPanel = other.parentElement.querySelector('.faq-panel');
            otherPanel.classList.add('hidden');
            const otherIcon = other.querySelector('.faq-icon');
            otherIcon.style.transform = 'rotate(0deg)';
            otherIcon.style.transition = 'transform 200ms ease';
          }
        });

        btn.setAttribute('aria-expanded', (!expanded).toString());
        panel.classList.toggle('hidden');
        const icon = btn.querySelector('.faq-icon');
        icon.style.transform = expanded ? 'rotate(0deg)' : 'rotate(180deg)';
        icon.style.transition = 'transform 200ms ease';
      });
    });

    const leadForm = document.getElementById('leadForm');
    const formNotice = document.getElementById('formNotice');

    leadForm?.addEventListener('submit', (e) => {
      e.preventDefault();

      const prenom = document.getElementById('prenom').value.trim();
      const email = document.getElementById('email').value.trim();
      const objectif = document.getElementById('objectif').value;
      const niveau = document.getElementById('niveau').value;
      const usage = document.getElementById('usage').value;

      if (!prenom || !email || !objectif || !niveau || !usage) return;

      formNotice.classList.remove('hidden');
      formNotice.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      setTimeout(() => {
        leadForm.reset();
      }, 400);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-24 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl"></div>
<div className="absolute top-44 right-[-6rem] h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl"></div>
<div className="absolute bottom-[-8rem] left-[-8rem] h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/10 blur-3xl"></div>
</div>
<header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-3" href="#top">
<div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
<span className="text-sm font-semibold tracking-tight" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif'}}>S</span>
</div>
<div className="leading-tight">
<div className="text-sm font-semibold tracking-tight" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif', letterSpacing: '-0.02em'}}>STUDENS</div>
<div className="text-xs text-slate-300/80">IA &amp; Automatisation</div>
</div>
</a>
<nav className="hidden items-center gap-6 text-sm text-slate-200/80 md:flex">
<a className="hover:text-white transition-colors" href="#formations">Formations</a>
<a className="hover:text-white transition-colors" href="#programme">Programme</a>
<a className="hover:text-white transition-colors" href="#modalites">Modalités</a>
<a className="hover:text-white transition-colors" href="#resultats">Résultats</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center justify-center rounded-xl bg-white text-slate-950 px-4 py-2 text-sm font-semibold hover:bg-white/90 transition" href="#lead">
            Recevoir le programme
          </a>
<button aria-label="Ouvrir le menu" className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" id="mobileMenuBtn">
<iconify-icon className="text-slate-100" icon="solar:hamburger-menu-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</button>
</div>
</div>
</div>
<div className="md:hidden hidden border-t border-white/10 bg-slate-950/95 backdrop-blur" id="mobileMenu">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 grid gap-3 text-sm text-slate-200/90">
<a className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 hover:bg-white/10 transition" href="#formations">Formations</a>
<a className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 hover:bg-white/10 transition" href="#programme">Programme</a>
<a className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 hover:bg-white/10 transition" href="#modalites">Modalités</a>
<a className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 hover:bg-white/10 transition" href="#resultats">Résultats</a>
<a className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 hover:bg-white/10 transition" href="#faq">FAQ</a>
<a className="inline-flex items-center justify-center rounded-xl bg-white text-slate-950 px-4 py-3 text-sm font-semibold hover:bg-white/90 transition" href="#lead">
          Recevoir le programme
        </a>
</div>
</div>
</header>
<main id="top">
<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-14">
<div className="grid items-center gap-10 lg:grid-cols-2">
<div>
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-xs text-slate-200/90">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500/20 ring-1 ring-indigo-400/30">
<iconify-icon icon="solar:stars-linear" style={{fontSize: '1rem'}}></iconify-icon>
</span>
<span>Formations orientées productivité, performance, employabilité</span>
</div>
<h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-white" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif', letterSpacing: '-0.03em'}}>
              Maîtrise l’IA. Automatise. Prends une longueur d’avance.
            </h1>
<p className="mt-4 text-base sm:text-lg text-slate-200/80 leading-relaxed">
              Apprends à utiliser ChatGPT, l’automatisation no-code et les workflows intelligents pour gagner du temps et booster ta performance.
            </p>
<div className="mt-6 grid gap-3 sm:grid-cols-2">
<div className="flex items-start gap-3 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/15 ring-1 ring-indigo-400/25">
<iconify-icon icon="solar:chat-round-dots-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold text-white">ChatGPT &amp; Prompt Engineering</div>
<div className="text-xs text-slate-200/70">Structure, précision, résultats</div>
</div>
</div>
<div className="flex items-start gap-3 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/15 ring-1 ring-cyan-400/25">
<iconify-icon icon="solar:diagram-up-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold text-white">Automatisation no-code</div>
<div className="text-xs text-slate-200/70">Workflows, Make, Zapier</div>
</div>
</div>
<div className="flex items-start gap-3 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-fuchsia-500/15 ring-1 ring-fuchsia-400/25">
<iconify-icon icon="solar:calendar-search-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold text-white">Organisation &amp; productivité</div>
<div className="text-xs text-slate-200/70">Priorités, process, exécution</div>
</div>
</div>
<div className="flex items-start gap-3 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 ring-1 ring-emerald-400/25">
<iconify-icon icon="solar:case-minimalistic-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold text-white">IA appliquée aux métiers</div>
<div className="text-xs text-slate-200/70">Concret, réutilisable, mesurable</div>
</div>
</div>
</div>
<div className="mt-7 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-400 transition shadow-lg shadow-indigo-500/20" href="#formations">
<iconify-icon icon="solar:arrow-right-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
                Découvrir les formations IA
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 ring-1 ring-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition" href="#lead">
<iconify-icon icon="solar:document-text-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
                Recevoir le programme
              </a>
</div>
<div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-3">
<div className="flex items-center gap-2 text-xs font-semibold text-white">
<iconify-icon icon="solar:check-circle-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
                  Cas pratiques concrets
                </div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-3">
<div className="flex items-center gap-2 text-xs font-semibold text-white">
<iconify-icon icon="solar:map-arrow-right-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
                  Méthode structurée
                </div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-3">
<div className="flex items-center gap-2 text-xs font-semibold text-white">
<iconify-icon icon="solar:bolt-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
                  Applicable immédiatement
                </div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-3">
<div className="flex items-center gap-2 text-xs font-semibold text-white">
<iconify-icon icon="solar:graph-up-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
                  Orientation performance
                </div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-cyan-500/10 to-fuchsia-500/10 blur-2xl"></div>
<div className="relative rounded-3xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
<div className="flex items-center gap-2">
<div className="h-2.5 w-2.5 rounded-full bg-white/20"></div>
<div className="h-2.5 w-2.5 rounded-full bg-white/20"></div>
<div className="h-2.5 w-2.5 rounded-full bg-white/20"></div>
</div>
<div className="text-xs text-slate-200/70">AI Workflow Dashboard</div>
</div>
<div className="p-5 sm:p-6">
<div className="grid gap-4">
<div className="grid gap-3 sm:grid-cols-2">
<div className="rounded-2xl bg-slate-950/40 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<div className="text-xs text-slate-200/70">Assistant IA</div>
<div className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/25 px-2 py-0.5 text-xs text-emerald-200">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                          En ligne
                        </div>
</div>
<div className="mt-3 space-y-2">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3 text-xs text-slate-200/80">
                          Donne-moi 3 options d’email client, ton professionnel, + CTA clair.
                        </div>
<div className="rounded-xl bg-indigo-500/15 ring-1 ring-indigo-400/25 p-3 text-xs text-white">
                          Voici 3 versions. Souhaites-tu un ton plus direct, plus empathique, ou plus premium ?
                        </div>
</div>
<div className="mt-3 flex items-center gap-2 text-xs text-slate-200/60">
<iconify-icon icon="solar:magic-stick-3-linear" style={{fontSize: '1rem'}}></iconify-icon>
                        Prompts structurés • résultats fiables
                      </div>
</div>
<div className="rounded-2xl bg-slate-950/40 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<div className="text-xs text-slate-200/70">Automatisation</div>
<div className="text-xs text-slate-200/60">3 étapes</div>
</div>
<div className="mt-3 space-y-3">
<div className="flex items-center gap-3 rounded-2xl bg-white/5 ring-1 ring-white/10 p-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500/15 ring-1 ring-cyan-400/25">
<iconify-icon icon="solar:inbox-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
</span>
<div className="min-w-0">
<div className="text-xs font-semibold text-white truncate">Nouvel email → extraction</div>
<div className="text-xs text-slate-200/70 truncate">Sujet, urgence, action</div>
</div>
</div>
<div className="flex items-center gap-3 rounded-2xl bg-white/5 ring-1 ring-white/10 p-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/15 ring-1 ring-indigo-400/25">
<iconify-icon icon="solar:cpu-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
</span>
<div className="min-w-0">
<div className="text-xs font-semibold text-white truncate">IA → rédaction + résumé</div>
<div className="text-xs text-slate-200/70 truncate">Réponse + points clés</div>
</div>
</div>
<div className="flex items-center gap-3 rounded-2xl bg-white/5 ring-1 ring-white/10 p-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/15 ring-1 ring-emerald-400/25">
<iconify-icon icon="solar:calendar-add-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
</span>
<div className="min-w-0">
<div className="text-xs font-semibold text-white truncate">Agenda → planification auto</div>
<div className="text-xs text-slate-200/70 truncate">RDV • rappels • liens</div>
</div>
</div>
</div>
<div className="mt-3 flex items-center gap-2 text-xs text-slate-200/60">
<iconify-icon icon="solar:link-minimalistic-linear" style={{fontSize: '1rem'}}></iconify-icon>
                        Emails &amp; agenda • outils connectés • workflows réutilisables
                      </div>
</div>
</div>
<div className="rounded-2xl bg-slate-950/40 ring-1 ring-white/10 p-4">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div>
<div className="text-xs text-slate-200/70">Impact estimé</div>
<div className="mt-1 text-sm font-semibold text-white">+3 à +7h / semaine récupérées</div>
</div>
<div className="flex items-center gap-2">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2 text-xs text-slate-200/80">
<span className="font-semibold text-white">Temps</span> → automatisé
                        </div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2 text-xs text-slate-200/80">
<span className="font-semibold text-white">Qualité</span> → standardisée
                        </div>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-3">
<div className="text-xs text-slate-200/70">Emails</div>
<div className="mt-1 text-sm font-semibold text-white">-60%</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-3">
<div className="text-xs text-slate-200/70">Reporting</div>
<div className="mt-1 text-sm font-semibold text-white">-50%</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-3">
<div className="text-xs text-slate-200/70">Admin</div>
<div className="mt-1 text-sm font-semibold text-white">-40%</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-4 text-xs text-slate-200/60">
              Illustration générique (aucun logo officiel). Objectif : visualiser des workflows concrets.
            </div>
</div>
</div>
</div>
</section>
<section className="border-y border-white/10 bg-white text-slate-900">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
<div className="rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-4">
<div className="text-xs text-slate-600">Niveau</div>
<div className="mt-1 text-sm font-semibold tracking-tight text-slate-900">Débutant → Avancé</div>
</div>
<div className="rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-4">
<div className="text-xs text-slate-600">Format</div>
<div className="mt-1 text-sm font-semibold tracking-tight text-slate-900">100% en ligne</div>
</div>
<div className="rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-4">
<div className="text-xs text-slate-600">Objectif</div>
<div className="mt-1 text-sm font-semibold tracking-tight text-slate-900">Automatiser &amp; performer</div>
</div>
<div className="rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-4">
<div className="text-xs text-slate-600">Accès</div>
<div className="mt-1 text-sm font-semibold tracking-tight text-slate-900">Immédiat</div>
</div>
<div className="rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-4">
<div className="text-xs text-slate-600">Cas réels</div>
<div className="mt-1 text-sm font-semibold tracking-tight text-slate-900">Oui</div>
</div>
<div className="rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-4">
<div className="text-xs text-slate-600">Support</div>
<div className="mt-1 text-sm font-semibold tracking-tight text-slate-900">Ressources &amp; templates</div>
</div>
</div>
</div>
</section>
<section className="bg-slate-950">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="grid gap-10 lg:grid-cols-2 lg:items-start">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif', letterSpacing: '-0.03em'}}>
              Pourquoi tout le monde parle d’IA… mais peu savent vraiment l’utiliser
            </h2>
<p className="mt-3 text-sm sm:text-base text-slate-200/80 leading-relaxed">
              Sans méthode, l’IA devient un “outil sympa” au lieu d’un système qui te fait gagner du temps et te rend plus efficace que la moyenne.
            </p>
</div>
<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6">
<ul className="space-y-4">
<li className="flex gap-3">
<span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
<iconify-icon icon="solar:copy-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold text-white">Utilisation basique de ChatGPT</div>
<div className="text-xs text-slate-200/70">Copier/coller, résultats inégaux, perte de temps.</div>
</div>
</li>
<li className="flex gap-3">
<span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
<iconify-icon icon="solar:layers-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold text-white">Aucune structure dans les prompts</div>
<div className="text-xs text-slate-200/70">Pas de cadre → pas de constance → pas de performance.</div>
</div>
</li>
<li className="flex gap-3">
<span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
<iconify-icon icon="solar:repeat-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold text-white">Tâches répétitives toujours manuelles</div>
<div className="text-xs text-slate-200/70">Emails, relances, reporting, tri, suivi.</div>
</div>
</li>
<li className="flex gap-3">
<span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
<iconify-icon icon="solar:link-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold text-white">Aucune automatisation réelle</div>
<div className="text-xs text-slate-200/70">Outils non connectés, pas de workflows.</div>
</div>
</li>
<li className="flex gap-3">
<span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
<iconify-icon icon="solar:hourglass-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold text-white">Perte de temps au lieu de gain</div>
<div className="text-xs text-slate-200/70">On “teste l’IA” au lieu de l’industrialiser.</div>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>
<section className="bg-white text-slate-900">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="grid gap-10 lg:grid-cols-2 lg:items-start">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif', letterSpacing: '-0.03em'}}>
              Ce que tu sauras faire après la formation
            </h2>
<p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              L’objectif n’est pas d’apprendre des fonctionnalités, mais de construire un système : prompts + outils + automatisations + routines.
            </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition" href="#lead">
<iconify-icon icon="solar:document-add-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
                Recevoir le programme
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900/5 ring-1 ring-slate-200 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-900/10 transition" href="#programme">
<iconify-icon icon="solar:route-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
                Voir les parcours
              </a>
</div>
</div>
<div className="rounded-3xl bg-slate-50 ring-1 ring-slate-200 p-6">
<ul className="space-y-4">
<li className="flex gap-3">
<span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white ring-1 ring-slate-200">
<iconify-icon className="text-slate-900" icon="solar:pen-new-square-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold text-slate-900">Créer des prompts avancés et structurés</div>
<div className="text-xs text-slate-600">Cadres prêts à l’emploi + adaptation à ton métier.</div>
</div>
</li>
<li className="flex gap-3">
<span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white ring-1 ring-slate-200">
<iconify-icon className="text-slate-900" icon="solar:settings-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold text-slate-900">Automatiser des tâches répétitives (emails &amp; agenda)</div>
<div className="text-xs text-slate-600">Réponses, relances, prise de rendez-vous, rappels.</div>
</div>
</li>
<li className="flex gap-3">
<span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white ring-1 ring-slate-200">
<iconify-icon className="text-slate-900" icon="solar:share-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold text-slate-900">Connecter des outils entre eux</div>
<div className="text-xs text-slate-600">Workflows no-code, notifications, synchronisation.</div>
</div>
</li>
<li className="flex gap-3">
<span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white ring-1 ring-slate-200">
<iconify-icon className="text-slate-900" icon="solar:clock-circle-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold text-slate-900">Gagner plusieurs heures par semaine</div>
<div className="text-xs text-slate-600">Temps récupéré → exécution + impact.</div>
</div>
</li>
<li className="flex gap-3">
<span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white ring-1 ring-slate-200">
<iconify-icon className="text-slate-900" icon="solar:target-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold text-slate-900">Utiliser l’IA comme levier stratégique</div>
<div className="text-xs text-slate-600">Standardiser, déléguer, accélérer, mieux décider.</div>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>
<section className="bg-slate-950" id="formations">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif', letterSpacing: '-0.03em'}}>
              Les formations IA &amp; Automatisation STUDENS
            </h2>
<p className="mt-3 text-sm sm:text-base text-slate-200/80 max-w-2xl leading-relaxed">
              Choisis une formation ciblée ou prends le pack pour construire une compétence complète : prompts + automatisation + intégration stratégique.
            </p>
</div>
<div className="flex gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-950 px-4 py-2 text-sm font-semibold hover:bg-white/90 transition" href="#lead">
<iconify-icon icon="solar:document-text-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
              Recevoir le programme
            </a>
</div>
</div>
<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" id="programme">
<article className="group rounded-3xl bg-white/5 ring-1 ring-white/10 p-5 hover:bg-white/10 transition">
<div className="flex items-start justify-between gap-4">
<div>
<div className="inline-flex items-center rounded-full bg-indigo-500/15 ring-1 ring-indigo-400/25 px-2.5 py-1 text-xs font-semibold text-indigo-200">
                  Fondation IA
                </div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif', letterSpacing: '-0.02em'}}>
                  ChatGPT &amp; Prompt Engineering
                </h3>
</div>
<div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/15 ring-1 ring-indigo-400/25">
<iconify-icon icon="solar:chat-round-linear" style={{fontSize: '1.35rem'}}></iconify-icon>
</div>
</div>
<p className="mt-3 text-sm text-slate-200/75 leading-relaxed">
              Comprendre l’IA, structurer ses prompts, créer des workflows efficaces.
            </p>
<div className="mt-4 flex items-center justify-between">
<div className="text-xs text-slate-200/70">
<span className="font-semibold text-white">Niveau</span> : Débutant → Intermédiaire
              </div>
</div>
<a className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10 transition" href="#lead">
              Voir le parcours
              <iconify-icon icon="solar:arrow-right-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
</a>
</article>
<article className="group rounded-3xl bg-white/5 ring-1 ring-white/10 p-5 hover:bg-white/10 transition">
<div className="flex items-start justify-between gap-4">
<div>
<div className="inline-flex items-center rounded-full bg-cyan-500/15 ring-1 ring-cyan-400/25 px-2.5 py-1 text-xs font-semibold text-cyan-200">
                  Gain de temps massif
                </div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif', letterSpacing: '-0.02em'}}>
                  Automatisation No-Code
                </h3>
</div>
<div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/15 ring-1 ring-cyan-400/25">
<iconify-icon icon="solar:diagram-down-linear" style={{fontSize: '1.35rem'}}></iconify-icon>
</div>
</div>
<p className="mt-3 text-sm text-slate-200/75 leading-relaxed">
              Créer des automatisations (emails &amp; agenda inclus) avec Make / Zapier / outils connectés.
            </p>
<div className="mt-4 flex items-center justify-between">
<div className="text-xs text-slate-200/70">
<span className="font-semibold text-white">Niveau</span> : Intermédiaire
              </div>
</div>
<a className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10 transition" href="#lead">
              Voir le parcours
              <iconify-icon icon="solar:arrow-right-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
</a>
</article>
<article className="group rounded-3xl bg-white/5 ring-1 ring-white/10 p-5 hover:bg-white/10 transition">
<div className="flex items-start justify-between gap-4">
<div>
<div className="inline-flex items-center rounded-full bg-fuchsia-500/15 ring-1 ring-fuchsia-400/25 px-2.5 py-1 text-xs font-semibold text-fuchsia-200">
                  Organisation stratégique
                </div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif', letterSpacing: '-0.02em'}}>
                  Productivité augmentée
                </h3>
</div>
<div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-fuchsia-500/15 ring-1 ring-fuchsia-400/25">
<iconify-icon icon="solar:calendar-mark-linear" style={{fontSize: '1.35rem'}}></iconify-icon>
</div>
</div>
<p className="mt-3 text-sm text-slate-200/75 leading-relaxed">
              IA pour emails, reporting, contenus, organisation interne.
            </p>
<div className="mt-4 flex items-center justify-between">
<div className="text-xs text-slate-200/70">
<span className="font-semibold text-white">Niveau</span> : Tous niveaux
              </div>
</div>
<a className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10 transition" href="#lead">
              Voir le parcours
              <iconify-icon icon="solar:arrow-right-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
</a>
</article>
<article className="group relative rounded-3xl bg-gradient-to-b from-white/10 to-white/5 ring-1 ring-white/10 p-5 hover:from-white/15 hover:to-white/10 transition overflow-hidden">
<div className="pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full bg-indigo-500/20 blur-2xl"></div>
<div className="pointer-events-none absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-emerald-500/10 blur-2xl"></div>
<div className="relative flex items-start justify-between gap-4">
<div>
<div className="inline-flex items-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/25 px-2.5 py-1 text-xs font-semibold text-emerald-200">
                  Le plus demandé
                </div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif', letterSpacing: '-0.02em'}}>
                  Pack IA Complet
                </h3>
</div>
<div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 ring-1 ring-emerald-400/25">
<iconify-icon icon="solar:shield-star-linear" style={{fontSize: '1.35rem'}}></iconify-icon>
</div>
</div>
<p className="relative mt-3 text-sm text-slate-200/75 leading-relaxed">
              Prompt engineering + automatisation + stratégie d’intégration.
            </p>
<div className="relative mt-4 flex items-center justify-between">
<div className="text-xs text-slate-200/70">
<span className="font-semibold text-white">Niveau</span> : Débutant → Avancé
              </div>
</div>
<a className="relative mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-400 text-slate-950 px-4 py-3 text-sm font-semibold hover:bg-emerald-300 transition shadow-lg shadow-emerald-500/15" href="#lead">
              Voir le pack
              <iconify-icon icon="solar:arrow-right-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
</a>
</article>
</div>
<div className="mt-10 rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-7">
<div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
<div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif', letterSpacing: '-0.03em'}}>
                Tu veux savoir combien d’heures tu pourrais économiser par semaine ?
              </h3>
<p className="mt-2 text-sm text-slate-200/80 leading-relaxed">
                Réponds à quelques questions : on te renvoie le programme + un diagnostic productivité gratuit (axes rapides + automatisations prioritaires).
              </p>
</div>
<div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-stretch">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-400 transition shadow-lg shadow-indigo-500/20" href="#lead">
<iconify-icon icon="solar:pulse-2-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
                Faire le diagnostic gratuit
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 ring-1 ring-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition" href="#lead">
<iconify-icon icon="solar:document-text-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
                Recevoir le programme
              </a>
</div>
</div>
</div>
</div>
</section>
<section className="bg-white text-slate-900">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="grid gap-10 lg:grid-cols-2 lg:items-start">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif', letterSpacing: '-0.03em'}}>
              Pourquoi STUDENS fait la différence
            </h2>
<p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Tu n’apprends pas “des astuces”. Tu construis une compétence durable, directement transposable en stage, en freelance, en PME ou en équipe.
            </p>
<div className="mt-6">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition" href="#lead">
<iconify-icon icon="solar:document-add-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
                Recevoir le programme
              </a>
</div>
</div>
<div className="grid gap-4 sm:grid-cols-2">
<div className="rounded-3xl bg-slate-50 ring-1 ring-slate-200 p-6 hover:bg-white transition">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/5 ring-1 ring-slate-200">
<iconify-icon className="text-slate-900" icon="solar:route-linear" style={{fontSize: '1.35rem'}}></iconify-icon>
</div>
<div className="mt-3 text-sm font-semibold tracking-tight text-slate-900">Approche structurée</div>
<div className="mt-1 text-xs text-slate-600">Pas juste des “trucs IA” : cadre + méthode + répétabilité.</div>
</div>
<div className="rounded-3xl bg-slate-50 ring-1 ring-slate-200 p-6 hover:bg-white transition">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/5 ring-1 ring-slate-200">
<iconify-icon className="text-slate-900" icon="solar:case-minimalistic-linear" style={{fontSize: '1.35rem'}}></iconify-icon>
</div>
<div className="mt-3 text-sm font-semibold tracking-tight text-slate-900">Cas métier</div>
<div className="mt-1 text-xs text-slate-600">Marketing, administratif, gestion, RH, freelance, PME.</div>
</div>
<div className="rounded-3xl bg-slate-50 ring-1 ring-slate-200 p-6 hover:bg-white transition">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/5 ring-1 ring-slate-200">
<iconify-icon className="text-slate-900" icon="solar:folder-open-linear" style={{fontSize: '1.35rem'}}></iconify-icon>
</div>
<div className="mt-3 text-sm font-semibold tracking-tight text-slate-900">Templates prêts à utiliser</div>
<div className="mt-1 text-xs text-slate-600">Prompts avancés + workflows réutilisables + checklists.</div>
</div>
<div className="rounded-3xl bg-slate-50 ring-1 ring-slate-200 p-6 hover:bg-white transition">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/5 ring-1 ring-slate-200">
<iconify-icon className="text-slate-900" icon="solar:graph-up-linear" style={{fontSize: '1.35rem'}}></iconify-icon>
</div>
<div className="mt-3 text-sm font-semibold tracking-tight text-slate-900">Vision stratégique</div>
<div className="mt-1 text-xs text-slate-600">IA = levier de performance, pas gadget. Prioriser ce qui compte.</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-slate-950 border-t border-white/10" id="modalites">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif', letterSpacing: '-0.03em'}}>
              Modalités
            </h2>
<p className="mt-3 text-sm sm:text-base text-slate-200/80 max-w-2xl leading-relaxed">
              Progression claire, pratique, orientée résultats. Tu avances étape par étape jusqu’à l’automatisation utile et maîtrisée.
            </p>
</div>
<div className="flex gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-950 px-4 py-2 text-sm font-semibold hover:bg-white/90 transition" href="#lead">
<iconify-icon icon="solar:document-text-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
              Recevoir le programme
            </a>
</div>
</div>
<div className="mt-8 grid gap-4 lg:grid-cols-3">
<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/10 transition">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/15 ring-1 ring-indigo-400/25">
<iconify-icon icon="solar:map-linear" style={{fontSize: '1.35rem'}}></iconify-icon>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif', letterSpacing: '-0.02em'}}>
              Progression guidée
            </h3>
<p className="mt-2 text-sm text-slate-200/75 leading-relaxed">
              De la compréhension à l’automatisation avancée, sans te perdre dans la technique inutile.
            </p>
</div>
<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/10 transition">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/15 ring-1 ring-cyan-400/25">
<iconify-icon icon="solar:task-square-linear" style={{fontSize: '1.35rem'}}></iconify-icon>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif', letterSpacing: '-0.02em'}}>
              Cas pratiques
            </h3>
<p className="mt-2 text-sm text-slate-200/75 leading-relaxed">
              Email, agenda (prise de RDV, rappels), reporting, contenu, organisation : tu appliques sur des tâches réelles.
            </p>
</div>
<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/10 transition">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 ring-1 ring-emerald-400/25">
<iconify-icon icon="solar:widget-2-linear" style={{fontSize: '1.35rem'}}></iconify-icon>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif', letterSpacing: '-0.02em'}}>
              Templates prêts à l’emploi
            </h3>
<p className="mt-2 text-sm text-slate-200/75 leading-relaxed">
              Prompts avancés + workflows réutilisables : tu repars avec une boîte à outils actionnable.
            </p>
</div>
</div>
<div className="mt-8 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-white/5 to-cyan-500/20 ring-1 ring-white/10 p-6 sm:p-7">
<div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
<div>
<div className="text-xs text-slate-200/70">Recommandé si tu veux un plan clair</div>
<h3 className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-white" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif', letterSpacing: '-0.03em'}}>
                Passe de “j’expérimente l’IA” à “j’exécute avec un système”.
              </h3>
<p className="mt-2 text-sm text-slate-200/80 leading-relaxed">
                Demande l’accès au programme et obtiens un diagnostic productivité gratuit : automatisations prioritaires + quick wins.
              </p>
</div>
<div className="flex flex-col sm:flex-row lg:flex-col gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-950 px-5 py-3 text-sm font-semibold hover:bg-white/90 transition" href="#lead">
<iconify-icon icon="solar:document-add-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
                Recevoir le programme
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 ring-1 ring-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition" href="#lead">
<iconify-icon icon="solar:arrow-right-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
                Demander un accès
              </a>
</div>
</div>
</div>
</div>
</section>
<section className="bg-white text-slate-900" id="resultats">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif', letterSpacing: '-0.03em'}}>
              Résultats concrets
            </h2>
<p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              L’IA devient rentable quand tu automatises et standardises. Voici le type d’impact visé.
            </p>
</div>
<div>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition" href="#lead">
<iconify-icon icon="solar:document-text-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
              Recevoir le programme
            </a>
</div>
</div>
<div className="mt-8 grid gap-4 lg:grid-cols-3">
<figure className="rounded-3xl bg-slate-50 ring-1 ring-slate-200 p-6 hover:bg-white transition">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
<span className="text-sm font-semibold tracking-tight" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif', letterSpacing: '-0.02em'}}>L</span>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Lucas</div>
<div className="text-xs text-slate-600">Freelance</div>
</div>
</div>
<blockquote className="mt-4 text-sm text-slate-700 leading-relaxed">
              “J’ai automatisé mes réponses clients et gagné 5h par semaine.”
            </blockquote>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-600">
<iconify-icon className="text-slate-900" icon="solar:clock-circle-linear" style={{fontSize: '1rem'}}></iconify-icon>
              Gain de temps mesurable
            </div>
</figure>
<figure className="rounded-3xl bg-slate-50 ring-1 ring-slate-200 p-6 hover:bg-white transition">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
<span className="text-sm font-semibold tracking-tight" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif', letterSpacing: '-0.02em'}}>E</span>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Emma</div>
<div className="text-xs text-slate-600">Assistante RH</div>
</div>
</div>
<blockquote className="mt-4 text-sm text-slate-700 leading-relaxed">
              “Mes reporting sont générés en quelques minutes grâce aux workflows.”
            </blockquote>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-600">
<iconify-icon className="text-slate-900" icon="solar:diagram-up-linear" style={{fontSize: '1rem'}}></iconify-icon>
              Process standardisé
            </div>
</figure>
<figure className="rounded-3xl bg-slate-50 ring-1 ring-slate-200 p-6 hover:bg-white transition">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
<span className="text-sm font-semibold tracking-tight" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif', letterSpacing: '-0.02em'}}>K</span>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Karim</div>
<div className="text-xs text-slate-600">Entrepreneur</div>
</div>
</div>
<blockquote className="mt-4 text-sm text-slate-700 leading-relaxed">
              “L’IA est devenue un outil stratégique, pas juste un gadget.”
            </blockquote>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-600">
<iconify-icon className="text-slate-900" icon="solar:target-linear" style={{fontSize: '1rem'}}></iconify-icon>
              Meilleures décisions
            </div>
</figure>
</div>
<div className="mt-10 grid gap-4 lg:grid-cols-4">
<div className="rounded-3xl bg-white ring-1 ring-slate-200 p-5">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/5 ring-1 ring-slate-200">
<iconify-icon className="text-slate-900" icon="solar:lock-keyhole-linear" style={{fontSize: '1.35rem'}}></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">Rassurant</div>
<div className="text-xs text-slate-600">Pas besoin d’être technique</div>
</div>
</div>
</div>
<div className="rounded-3xl bg-white ring-1 ring-slate-200 p-5">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/5 ring-1 ring-slate-200">
<iconify-icon className="text-slate-900" icon="solar:folder-with-files-linear" style={{fontSize: '1.35rem'}}></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">Ressources</div>
<div className="text-xs text-slate-600">Templates &amp; prompts inclus</div>
</div>
</div>
</div>
<div className="rounded-3xl bg-white ring-1 ring-slate-200 p-5">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/5 ring-1 ring-slate-200">
<iconify-icon className="text-slate-900" icon="solar:rocket-linear" style={{fontSize: '1.35rem'}}></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">Action</div>
<div className="text-xs text-slate-600">Applicable dès le début</div>
</div>
</div>
</div>
<div className="rounded-3xl bg-white ring-1 ring-slate-200 p-5">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/5 ring-1 ring-slate-200">
<iconify-icon className="text-slate-900" icon="solar:shield-check-linear" style={{fontSize: '1.35rem'}}></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">Concret</div>
<div className="text-xs text-slate-600">Cas réels orientés métier</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-slate-950 border-t border-white/10" id="faq">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="grid gap-10 lg:grid-cols-2 lg:items-start">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif', letterSpacing: '-0.03em'}}>
              Questions fréquentes
            </h2>
<p className="mt-3 text-sm sm:text-base text-slate-200/80 leading-relaxed">
              Si tu veux avancer vite, commence par recevoir le programme : tu verras immédiatement le niveau, le contenu et les cas d’usage.
            </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-950 px-5 py-3 text-sm font-semibold hover:bg-white/90 transition" href="#lead">
<iconify-icon icon="solar:document-text-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
                Recevoir le programme
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 ring-1 ring-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition" href="#lead">
<iconify-icon icon="solar:arrow-right-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
                Demander un accès
              </a>
</div>
</div>
<div className="space-y-3">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
<button aria-expanded="false" className="faq-btn w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-white/5 transition">
<span className="text-sm font-semibold text-white">Je ne suis pas technique, c’est adapté ?</span>
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
<iconify-icon className="faq-icon" icon="solar:alt-arrow-down-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</span>
</button>
<div className="faq-panel hidden px-5 pb-5">
<p className="text-sm text-slate-200/80 leading-relaxed">
                  Oui. Les formations sont conçues pour être accessibles sans compétences en développement, avec une progression guidée et des exemples métier.
                </p>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
<button aria-expanded="false" className="faq-btn w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-white/5 transition">
<span className="text-sm font-semibold text-white">Est-ce applicable à mon métier ?</span>
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
<iconify-icon className="faq-icon" icon="solar:alt-arrow-down-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</span>
</button>
<div className="faq-panel hidden px-5 pb-5">
<p className="text-sm text-slate-200/80 leading-relaxed">
                  Oui. Les cas pratiques couvrent marketing, administratif, gestion, freelance, PME et fonctions support (dont RH).
                </p>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
<button aria-expanded="false" className="faq-btn w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-white/5 transition">
<span className="text-sm font-semibold text-white">Faut-il payer des outils supplémentaires ?</span>
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
<iconify-icon className="faq-icon" icon="solar:alt-arrow-down-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</span>
</button>
<div className="faq-panel hidden px-5 pb-5">
<p className="text-sm text-slate-200/80 leading-relaxed">
                  Non obligatoire. Beaucoup d’automatisations sont possibles avec des versions gratuites, et tu peux monter en puissance ensuite.
                </p>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
<button aria-expanded="false" className="faq-btn w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-white/5 transition">
<span className="text-sm font-semibold text-white">Combien de temps pour voir des résultats ?</span>
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
<iconify-icon className="faq-icon" icon="solar:alt-arrow-down-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</span>
</button>
<div className="faq-panel hidden px-5 pb-5">
<p className="text-sm text-slate-200/80 leading-relaxed">
                  Dès les premiers modules, tu peux mettre en place des automatisations simples et des prompts structurés qui améliorent immédiatement tes outputs.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-white text-slate-900" id="lead">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="grid gap-10 lg:grid-cols-2 lg:items-start">
<div>
<div className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-3 py-1 text-xs font-semibold">
<iconify-icon icon="solar:bolt-linear" style={{fontSize: '1rem'}}></iconify-icon>
              Demande d’accès
            </div>
<h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif', letterSpacing: '-0.03em'}}>
              Arrête d’utiliser l’IA à 10%. Exploite-la vraiment.
            </h2>
<p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Reçois le programme complet et découvre comment automatiser intelligemment. On t’envoie aussi un diagnostic productivité gratuit (axes rapides + cas d’usage adaptés).
            </p>
<div className="mt-6 grid gap-3 sm:grid-cols-2">
<div className="rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-4">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-900">
<iconify-icon className="text-slate-900" icon="solar:check-circle-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
                  Programme détaillé
                </div>
<div className="mt-1 text-xs text-slate-600">Parcours, niveaux, cas pratiques.</div>
</div>
<div className="rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-4">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-900">
<iconify-icon className="text-slate-900" icon="solar:target-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
                  Diagnostic gratuit
                </div>
<div className="mt-1 text-xs text-slate-600">Quick wins + priorités d’automatisation.</div>
</div>
<div className="rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-4">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-900">
<iconify-icon className="text-slate-900" icon="solar:folder-open-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
                  Templates inclus
                </div>
<div className="mt-1 text-xs text-slate-600">Prompts + workflows réutilisables.</div>
</div>
<div className="rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-4">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-900">
<iconify-icon className="text-slate-900" icon="solar:shield-check-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
                  Concret &amp; rassurant
                </div>
<div className="mt-1 text-xs text-slate-600">Accessible, orienté métier.</div>
</div>
</div>
</div>
<div className="rounded-3xl bg-slate-950 text-white ring-1 ring-slate-900/10 p-6 sm:p-7 shadow-xl shadow-slate-900/20">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif', letterSpacing: '-0.03em'}}>
                  Recevoir le programme IA + diagnostic productivité gratuit
                </h3>
<p className="mt-2 text-sm text-slate-200/80 leading-relaxed">
                  Réponse en 1 minute. On te renvoie le programme adapté à ton objectif principal.
                </p>
</div>
<div className="hidden sm:inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
<iconify-icon icon="solar:document-add-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</div>
</div>
<form className="mt-6 space-y-4" id="leadForm">
<div>
<label className="block text-xs font-semibold text-slate-200/90" htmlFor="prenom">Prénom</label>
<div className="mt-2 relative">
<span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-200/60">
<iconify-icon icon="solar:user-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</span>
<input autocomplete="given-name" className="w-full rounded-2xl bg-white/5 ring-1 ring-white/10 px-10 py-3 text-sm text-white placeholder:text-slate-200/40 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 transition" id="prenom" name="prenom" placeholder="Ton prénom" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-slate-200/90" htmlFor="email">Email</label>
<div className="mt-2 relative">
<span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-200/60">
<iconify-icon icon="solar:letter-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</span>
<input autocomplete="email" className="w-full rounded-2xl bg-white/5 ring-1 ring-white/10 px-10 py-3 text-sm text-white placeholder:text-slate-200/40 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 transition" id="email" name="email" placeholder="toi@exemple.com" required="" type="email"/>
</div>
</div>
<div className="grid gap-4 sm:grid-cols-2">
<div>
<label className="block text-xs font-semibold text-slate-200/90" htmlFor="objectif">Objectif principal</label>
<div className="mt-2 relative">
<span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-200/60">
<iconify-icon icon="solar:target-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</span>
<select className="w-full appearance-none rounded-2xl bg-white/5 ring-1 ring-white/10 pl-10 pr-10 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-400/50 transition" id="objectif" name="objectif" required="">
<option className="text-slate-900" disabled="" selected="" value="">Choisir…</option>
<option value="gagner-temps">Gagner du temps</option>
<option value="automatiser">Automatiser des tâches</option>
<option value="monter-competence">Monter en compétence IA</option>
<option value="ameliorer-output">Améliorer la qualité des livrables</option>
<option value="employabilite">Employabilité / carrière</option>
</select>
<span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-200/60">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</span>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-slate-200/90" htmlFor="niveau">Niveau en IA</label>
<div className="mt-2 relative">
<span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-200/60">
<iconify-icon icon="solar:stairs-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</span>
<select className="w-full appearance-none rounded-2xl bg-white/5 ring-1 ring-white/10 pl-10 pr-10 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-400/50 transition" id="niveau" name="niveau" required="">
<option className="text-slate-900" disabled="" selected="" value="">Choisir…</option>
<option value="debutant">Débutant</option>
<option value="intermediaire">Intermédiaire</option>
<option value="avance">Avancé</option>
</select>
<span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-200/60">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</span>
</div>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-slate-200/90" htmlFor="usage">Usage prioritaire</label>
<div className="mt-2 relative">
<span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-200/60">
<iconify-icon icon="solar:case-minimalistic-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</span>
<select className="w-full appearance-none rounded-2xl bg-white/5 ring-1 ring-white/10 pl-10 pr-10 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-400/50 transition" id="usage" name="usage" required="">
<option className="text-slate-900" disabled="" selected="" value="">Choisir…</option>
<option value="marketing">Marketing / contenus</option>
<option value="admin">Administratif / assistants</option>
<option value="rh">RH / recrutement</option>
<option value="freelance">Freelance / gestion client</option>
<option value="pme">Équipe PME / opérations</option>
<option value="etudes">Études / organisation</option>
</select>
<span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-200/60">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{fontSize: '1.15rem'}}></iconify-icon>
</span>
</div>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-400 transition shadow-lg shadow-indigo-500/20" type="submit">
<iconify-icon icon="solar:document-text-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
                Recevoir le programme
              </button>
<div className="flex items-start gap-2 text-xs text-slate-200/70">
<iconify-icon icon="solar:shield-check-linear" style={{fontSize: '1rem'}}></iconify-icon>
<p>
                  Aucun spam. Tu peux te désinscrire quand tu veux. Tes réponses servent à personnaliser le programme et le diagnostic.
                </p>
</div>
<div className="hidden rounded-2xl bg-emerald-500/15 ring-1 ring-emerald-400/25 p-4 text-sm text-emerald-100" id="formNotice">
<div className="flex items-start gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-500/20 ring-1 ring-emerald-400/25">
<iconify-icon icon="solar:check-circle-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</span>
<div>
<div className="font-semibold">C’est envoyé.</div>
<div className="text-xs text-emerald-100/80">Tu vas recevoir le programme et le diagnostic dès que possible.</div>
</div>
</div>
</div>
</form>
<div className="mt-6 grid gap-3 sm:grid-cols-3">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-xs text-slate-200/70">Accès</div>
<div className="mt-1 text-sm font-semibold text-white">Immédiat</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-xs text-slate-200/70">Format</div>
<div className="mt-1 text-sm font-semibold text-white">100% en ligne</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-xs text-slate-200/70">Orientation</div>
<div className="mt-1 text-sm font-semibold text-white">Performance</div>
</div>
</div>
</div>
</div>
<div className="mt-10 rounded-3xl bg-slate-50 ring-1 ring-slate-200 p-6 sm:p-7">
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div>
<div className="text-xs text-slate-600">CTA final</div>
<div className="mt-1 text-xl sm:text-2xl font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif', letterSpacing: '-0.03em'}}>
                Prêt à gagner du temps et à rester compétitif ?
              </div>
<div className="mt-1 text-sm text-slate-600">Demande le programme. Choisis ton parcours. Commence maintenant.</div>
</div>
<div className="flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition" href="#lead">
<iconify-icon icon="solar:document-text-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
                Recevoir le programme
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900/5 ring-1 ring-slate-200 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-900/10 transition" href="#lead">
<iconify-icon icon="solar:arrow-right-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
                Commencer maintenant
              </a>
</div>
</div>
</div>
</div>
</section>
<footer className="bg-slate-950 border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="grid gap-8 md:grid-cols-3">
<div>
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
<span className="text-sm font-semibold tracking-tight" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif'}}>S</span>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-white" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif', letterSpacing: '-0.02em'}}>STUDENS</div>
<div className="text-xs text-slate-200/70">Formations IA &amp; automatisation</div>
</div>
</div>
<p className="mt-4 text-xs text-slate-200/70 leading-relaxed max-w-md">
              Objectif : gagner du temps, automatiser intelligemment, rester compétitif. Une approche concrète, structurée et orientée métier.
            </p>
</div>
<div className="grid grid-cols-2 gap-6 md:gap-8">
<div>
<div className="text-xs font-semibold text-white">Liens</div>
<ul className="mt-3 space-y-2 text-xs text-slate-200/70">
<li><a className="hover:text-white transition" href="#formations">Formations</a></li>
<li><a className="hover:text-white transition" href="#programme">Programme</a></li>
<li><a className="hover:text-white transition" href="#modalites">Modalités</a></li>
<li><a className="hover:text-white transition" href="#resultats">Résultats</a></li>
<li><a className="hover:text-white transition" href="#faq">FAQ</a></li>
</ul>
</div>
<div>
<div className="text-xs font-semibold text-white">Contact</div>
<ul className="mt-3 space-y-2 text-xs text-slate-200/70">
<li><a className="hover:text-white transition" href="#lead">Demander un accès</a></li>
<li><a className="hover:text-white transition" href="mailto:contact@studens.fr">contact@studens.fr</a></li>
<li><a className="hover:text-white transition" href="#">Mentions</a></li>
</ul>
</div>
</div>
<div>
<div className="text-xs font-semibold text-white">Réseaux</div>
<div className="mt-3 flex items-center gap-3">
<a aria-label="Réseau 1" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<iconify-icon icon="solar:share-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</a>
<a aria-label="Réseau 2" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<iconify-icon icon="solar:link-minimalistic-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</a>
<a aria-label="Réseau 3" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<iconify-icon icon="solar:chat-round-dots-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</a>
</div>
<div className="mt-5 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-xs text-slate-200/70">Second objectif</div>
<div className="mt-1 text-sm font-semibold text-white">Recevoir le programme</div>
<a className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white text-slate-950 px-4 py-2 text-sm font-semibold hover:bg-white/90 transition" href="#lead">
<iconify-icon icon="solar:document-text-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
                Recevoir le programme
              </a>
</div>
</div>
</div>
<div className="mt-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-t border-white/10 pt-6">
<div className="text-xs text-slate-200/60">© <span id="year"></span> STUDENS. Tous droits réservés.</div>
<div className="text-xs text-slate-200/60">Productivité • Automatisation • IA appliquée</div>
</div>
</div>
</footer>
</main>
<div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-slate-950/80 backdrop-blur sm:hidden">
<div className="mx-auto max-w-7xl px-4 py-3">
<div className="flex items-center justify-between gap-3">
<div className="min-w-0">
<div className="text-xs text-slate-200/70">STUDENS</div>
<div className="text-sm font-semibold tracking-tight text-white truncate" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif', letterSpacing: '-0.02em'}}>
            Commencer maintenant
          </div>
</div>
<a className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400 transition" href="#lead">
<iconify-icon icon="solar:arrow-right-linear" style={{fontSize: '1.1rem'}}></iconify-icon>
          Commencer
        </a>
</div>
</div>
</div>


    </>
  );
}
