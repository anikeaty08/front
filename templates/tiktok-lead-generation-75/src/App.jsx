import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Modal controls
      const modal = document.getElementById('modal');
      const openers = ['openModalTop','openModalHero','openModalExample','openModalExample2','openModalBottom','openModalSticky','openModalDemo']
        .map(id => document.getElementById(id))
        .filter(Boolean);
      const closeModalBtn = document.getElementById('closeModal');
      const validateStart = document.getElementById('validateStart');

      const openModal = (e) => {
        e?.preventDefault();
        modal.classList.remove('hidden');
      };
      const closeModal = (e) => {
        e?.preventDefault();
        modal.classList.add('hidden');
      };
      openers.forEach(btn => btn.addEventListener('click', openModal));
      closeModalBtn.addEventListener('click', closeModal);
      modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
      validateStart.addEventListener('click', () => {
        alert('Top ! Ton espace de création va s’ouvrir (démo).');
        closeModal();
      });

      // FAQ accordion
      document.querySelectorAll('[data-acc-btn]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const targetSel = btn.getAttribute('data-target');
          const target = document.querySelector(targetSel);
          const chevron = btn.querySelector('[data-acc-chevron]');
          const expanded = btn.getAttribute('aria-expanded') === 'true';
          if (!expanded) {
            target.classList.remove('hidden');
            chevron.classList.add('rotate-180');
            btn.setAttribute('aria-expanded', 'true');
          } else {
            target.classList.add('hidden');
            chevron.classList.remove('rotate-180');
            btn.setAttribute('aria-expanded', 'false');
          }
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[80vw] md:w-[60vw] aspect-[2/1] rounded-full bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/10 to-cyan-400/10 blur-3xl"></div>
</div>

<header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/70 border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<a className="flex items-center gap-2 group" href="#">
<div className="h-8 w-8 rounded-md bg-gradient-to-tr from-indigo-500 to-cyan-400 grid place-items-center">
<span aria-hidden="true" className="iconify text-neutral-950" data-icon="lucide:triangle" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-lg tracking-tight font-semibold" style={{fontFamily: 'Plus Jakarta Sans, Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'}}>LEADPLAY</span>
</a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm text-neutral-300 hover:text-white transition" href="#exemple">Exemple</a>
<a className="text-sm text-neutral-300 hover:text-white transition" href="#comment">Comment ça marche</a>
<a className="text-sm text-neutral-300 hover:text-white transition" href="#pour-qui">Pour qui</a>
<a className="text-sm text-neutral-300 hover:text-white transition" href="#faq">Réassurance</a>
</div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-200 transition px-4 py-2" href="#start" id="openModalTop">
<span className="iconify" data-icon="lucide:sparkles" style={{strokeWidth: '1.5'}}></span>
              Créer un jeu gratuitement
            </a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center py-12 md:py-20">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 text-neutral-200 text-xs px-3 py-1">
<span className="iconify text-indigo-400" data-icon="lucide:target" style={{strokeWidth: '1.5'}}></span>
              Pour créateurs TikTok Shop FR
              <span className="mx-1">•</span>
<span className="text-white/70">Beta privée</span>
</div>
<h1 className="mt-4 md:mt-5 text-4xl md:text-5xl tracking-tight font-semibold" style={{fontFamily: 'Plus Jakarta Sans, Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI'}}>Transforme ton audience TikTok en prospects qualifiés avec des jeux interactifs basés sur l’actualité</h1>
<p className="mt-4 text-sm md:text-base text-neutral-300 leading-relaxed">Crée un mini‑jeu en 2 minutes, partage un lien unique, collecte emails + pseudos TikTok et repère les plus engagés. Aucun paiement, aucun stock — juste de l’engagement et de la data actionnable.</p>
<div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<a className="inline-flex justify-center items-center gap-2 rounded-md bg-gradient-to-r from-indigo-500 to-cyan-400 text-neutral-950 text-sm font-medium hover:opacity-95 transition px-5 py-3" href="#start" id="openModalHero">
<span className="iconify" data-icon="lucide:wand-2" style={{strokeWidth: '1.5'}}></span>
                Créer un jeu gratuitement
              </a>
<a className="inline-flex justify-center items-center gap-2 rounded-md border border-white/10 bg-white/5 text-white text-sm hover:bg-white/10 transition px-5 py-3" href="#exemple">
<span className="iconify" data-icon="lucide:play-circle" style={{strokeWidth: '1.5'}}></span>
                Voir un exemple
              </a>
</div>
<div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-neutral-300">
<div className="inline-flex items-center gap-2">
<span className="iconify text-emerald-400" data-icon="lucide:shield-check" style={{strokeWidth: '1.5'}}></span>
                Conforme RGPD
              </div>
<div className="inline-flex items-center gap-2">
<span className="iconify text-cyan-300" data-icon="lucide:link" style={{strokeWidth: '1.5'}}></span>
                Lien unique à partager
              </div>
<div className="inline-flex items-center gap-2">
<span className="iconify text-indigo-300" data-icon="lucide:database" style={{strokeWidth: '1.5'}}></span>
                Données exportables
              </div>
<div className="inline-flex items-center gap-2">
<span className="iconify text-rose-300" data-icon="lucide:wallet" style={{strokeWidth: '1.5'}}></span>
                Aucun paiement requis
              </div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-6 md:-inset-8 bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/10 to-cyan-400/10 blur-2xl rounded-3xl"></div>
<div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 md:p-6">
<div className="grid gap-4 md:gap-5">

<div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-xs text-neutral-300">
<span className="iconify text-indigo-400" data-icon="lucide:timer" style={{strokeWidth: '1.5'}}></span>
                      Se termine dans 02:15:08
                    </div>
<div className="inline-flex items-center gap-1 text-xs text-neutral-300">
<span className="iconify" data-icon="lucide:users" style={{strokeWidth: '1.5'}}></span>
                      250
                    </div>
</div>
<h3 className="mt-3 text-lg tracking-tight font-semibold">Qui gagne la finale de The Voice ce soir ?</h3>
<p className="mt-1 text-xs text-neutral-300">Vote et tente d’être tiré au sort parmi les gagnants.</p>
<div className="mt-3 grid grid-cols-2 gap-2">
<button className="rounded-md bg-white text-neutral-950 text-xs font-medium px-3 py-2 hover:bg-neutral-200 transition inline-flex items-center gap-2">
<img alt="Léna Dupont" className="h-6 w-6 rounded-full object-cover" src="https://i.pravatar.cc/96?img=12"/>
<span>Léna Dupont</span>
</button>
<button className="rounded-md bg-white/10 border border-white/10 text-white text-xs px-3 py-2 hover:bg-white/15 transition inline-flex items-center gap-2">
<img alt="Noah S." className="h-6 w-6 rounded-full object-cover" src="https://i.pravatar.cc/96?img=22"/>
<span>Noah S.</span>
</button>
<button className="rounded-md bg-white/10 border border-white/10 text-white text-xs px-3 py-2 hover:bg-white/15 transition inline-flex items-center gap-2">
<img alt="Maya K." className="h-6 w-6 rounded-full object-cover" src="https://i.pravatar.cc/96?img=32"/>
<span>Maya K.</span>
</button>
<button className="rounded-md bg-white/10 border border-white/10 text-white text-xs px-3 py-2 hover:bg-white/15 transition inline-flex items-center gap-2">
<img alt="Yanis B." className="h-6 w-6 rounded-full object-cover" src="https://i.pravatar.cc/96?img=45"/>
<span>Yanis B.</span>
</button>
</div>
<div className="mt-3 rounded-md bg-neutral-800/60 border border-white/10 p-3">
<div className="flex items-center justify-between text-xs">
<span className="text-neutral-300 inline-flex items-center gap-2">
<span className="iconify text-emerald-400" data-icon="lucide:mail" style={{strokeWidth: '1.5'}}></span>
                        Email + pseudo TikTok requis
                      </span>
<span className="text-neutral-400">GDPR ✓</span>
</div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4">
<div className="flex items-center justify-between">
<h4 className="text-sm font-medium tracking-tight">Top participants</h4>
<span className="text-xs text-neutral-400">Engagement</span>
</div>
<div className="mt-3 grid gap-2">
<div className="flex items-center justify-between text-sm">
<div className="inline-flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400"></div>
<span>@lina.tks</span>
</div>
<span className="text-emerald-400 text-xs inline-flex items-center gap-1">
<span className="iconify" data-icon="lucide:flame" style={{strokeWidth: '1.5'}}></span>
                        chaud
                      </span>
</div>
<div className="flex items-center justify-between text-sm">
<div className="inline-flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-neutral-700"></div>
<span>@max.shop</span>
</div>
<span className="text-emerald-400 text-xs inline-flex items-center gap-1">
<span className="iconify" data-icon="lucide:flame" style={{strokeWidth: '1.5'}}></span>
                        chaud
                      </span>
</div>
<div className="flex items-center justify-between text-sm">
<div className="inline-flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-neutral-700"></div>
<span>@sarah_live</span>
</div>
<span className="text-amber-300 text-xs inline-flex items-center gap-1">
<span className="iconify" data-icon="lucide:zap" style={{strokeWidth: '1.5'}}></span>
                        actif
                      </span>
</div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4">
<div className="flex items-center justify-between">
<h4 className="text-sm font-medium tracking-tight">Leads collectés</h4>
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 text-xs px-3 py-1.5 hover:bg-white/10 transition">
<span className="iconify" data-icon="lucide:download" style={{strokeWidth: '1.5'}}></span>
                      Exporter CSV
                    </button>
</div>
<div className="mt-3 grid gap-2 text-xs">
<div className="flex items-center justify-between">
<span className="text-neutral-300">lina@exemple.fr • @lina.tks</span>
<span className="text-neutral-400">opt‑in ✓</span>
</div>
<div className="flex items-center justify-between">
<span className="text-neutral-300">max@exemple.fr • @max.shop</span>
<span className="text-neutral-400">opt‑in ✓</span>
</div>
<div className="flex items-center justify-between">
<span className="text-neutral-300">sarah@exemple.fr • @sarah_live</span>
<span className="text-neutral-400">opt‑in ✓</span>
</div>
</div>
</div>
</div>
<div className="mt-4 text-[0.8rem] text-neutral-400">
                Ne vend rien, ne gère aucun stock, ne traite aucun paiement. Juste de l’animation communautaire et des prospects qualifiés.
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">Les vues n’expliquent pas les ventes</h2>
<p className="mt-3 text-sm md:text-base text-neutral-300">Si tu vends en live, tu connais la frustration : des milliers de vues, des likes… mais peu de contacts exploitables.</p>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="inline-flex items-center gap-2 text-indigo-300 text-sm">
<span className="iconify" data-icon="lucide:eye-off" style={{strokeWidth: '1.5'}}></span>
              Les vues ≠ clients
            </div>
<p className="mt-2 text-sm text-neutral-300">Difficile d’identifier qui est vraiment prêt à acheter.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="inline-flex items-center gap-2 text-cyan-300 text-sm">
<span className="iconify" data-icon="lucide:heart-crack" style={{strokeWidth: '1.5'}}></span>
              Les likes ≠ prospects
            </div>
<p className="mt-2 text-sm text-neutral-300">Les réactions ne te donnent ni email ni pseudo qualifié.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="inline-flex items-center gap-2 text-rose-300 text-sm">
<span className="iconify" data-icon="lucide:shopping-bag" style={{strokeWidth: '1.5'}}></span>
              Les paniers abandonnés n’expliquent rien
            </div>
<p className="mt-2 text-sm text-neutral-300">Sans data, tu ne sais pas quoi améliorer ni qui relancer.</p>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">La solution : un jeu simple, un lien unique, une forte intention</h2>
<p className="mt-3 text-sm md:text-base text-neutral-300">Crée un jeu autour d’un événement du moment, fais participer ta communauté et récupère des contacts chauds pour ton retargeting.</p>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-4 md:gap-6">
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-indigo-500/30 to-cyan-400/30 grid place-items-center">
<span className="iconify text-indigo-300" data-icon="lucide:gamepad-2" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="mt-3 text-lg tracking-tight font-semibold">Un jeu simple</h3>
<p className="mt-1 text-sm text-neutral-300">Question unique, 2–6 réponses, tirage des gagnants. C’est fun, rapide et clair.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-indigo-500/30 to-cyan-400/30 grid place-items-center">
<span className="iconify text-cyan-300" data-icon="lucide:link-2" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="mt-3 text-lg tracking-tight font-semibold">Un lien unique</h3>
<p className="mt-1 text-sm text-neutral-300">Partageable en bio, en live, en story. Compatible mobile, sans friction.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-indigo-500/30 to-cyan-400/30 grid place-items-center">
<span className="iconify text-emerald-300" data-icon="lucide:contact" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="mt-3 text-lg tracking-tight font-semibold">Des leads actionnables</h3>
<p className="mt-1 text-sm text-neutral-300">Email + pseudo TikTok + score d’engagement pour cibler tes retargetings.</p>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16" id="exemple">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">Exemple réel : Finale The Voice</h2>
<p className="mt-3 text-sm md:text-base text-neutral-300">“Qui gagne la finale de The Voice ce soir ?” — posté à 18h, partagé en live à 21h.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-200 transition px-4 py-2" href="#start" id="openModalExample">
<span className="iconify" data-icon="lucide:sparkles" style={{strokeWidth: '1.5'}}></span>
            Répliquer cet exemple
          </a>
</div>
<div className="mt-8 grid lg:grid-cols-3 gap-5">
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="grid grid-cols-2 gap-3 text-center">
<div className="rounded-lg bg-neutral-900/60 border border-white/10 p-4">
<div className="text-2xl font-semibold tracking-tight">1</div>
<div className="text-xs text-neutral-300 mt-1">jeu</div>
</div>
<div className="rounded-lg bg-neutral-900/60 border border-white/10 p-4">
<div className="text-2xl font-semibold tracking-tight">3</div>
<div className="text-xs text-neutral-300 mt-1">gagnants</div>
</div>
<div className="rounded-lg bg-neutral-900/60 border border-white/10 p-4">
<div className="text-2xl font-semibold tracking-tight">250</div>
<div className="text-xs text-neutral-300 mt-1">participants</div>
</div>
<div className="rounded-lg bg-neutral-900/60 border border-white/10 p-4">
<div className="text-2xl font-semibold tracking-tight">247</div>
<div className="text-xs text-neutral-300 mt-1">prospects intéressés</div>
</div>
</div>
<div className="mt-4 text-sm text-emerald-300 inline-flex items-center gap-2">
<span className="iconify" data-icon="lucide:trending-up" style={{strokeWidth: '1.5'}}></span>
              98,8% de participants opt‑in → base exploitable immédiatement
            </div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium tracking-tight">Données collectées</h3>
<span className="text-xs text-neutral-400 inline-flex items-center gap-1">
<span className="iconify" data-icon="lucide:shield" style={{strokeWidth: '1.5'}}></span>
                RGPD
              </span>
</div>
<div className="mt-3 grid gap-3">
<div className="rounded-md bg-neutral-900/60 border border-white/10 p-3 text-xs">
<div className="text-neutral-300">Email</div>
<div className="text-white font-medium tracking-tight mt-0.5">prénom@domaine.fr</div>
</div>
<div className="rounded-md bg-neutral-900/60 border border-white/10 p-3 text-xs">
<div className="text-neutral-300">Pseudo TikTok</div>
<div className="text-white font-medium tracking-tight mt-0.5">@ton.pseudo</div>
</div>
<div className="rounded-md bg-neutral-900/60 border border-white/10 p-3 text-xs">
<div className="text-neutral-300">Intention</div>
<div className="text-white font-medium tracking-tight mt-0.5 inline-flex items-center gap-2">
<span className="iconify text-emerald-400" data-icon="lucide:flame" style={{strokeWidth: '1.5'}}></span>
                  prospect chaud
                </div>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<h3 className="text-sm font-medium tracking-tight">Impact sur ton business</h3>
<ul className="mt-3 space-y-2 text-sm text-neutral-300">
<li className="inline-flex items-start gap-2">
<span className="iconify text-indigo-300 mt-[0.1rem]" data-icon="lucide:megaphone" style={{strokeWidth: '1.5'}}></span>
                Animation fun en live sans casser ton pitch produit
              </li>
<li className="inline-flex items-start gap-2">
<span className="iconify text-cyan-300 mt-[0.1rem]" data-icon="lucide:inbox" style={{strokeWidth: '1.5'}}></span>
                Base email + pseudos TikTok pour retargeting
              </li>
<li className="inline-flex items-start gap-2">
<span className="iconify text-emerald-300 mt-[0.1rem]" data-icon="lucide:check-circle-2" style={{strokeWidth: '1.5'}}></span>
                Plus de clarté sur qui est vraiment intéressé
              </li>
</ul>
<a className="mt-5 inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-200 transition px-4 py-2" href="#start" id="openModalExample2">
<span className="iconify" data-icon="lucide:wand-2" style={{strokeWidth: '1.5'}}></span>
              Créer le même jeu maintenant
            </a>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16" id="comment">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">Comment ça marche</h2>
<p className="mt-3 text-sm md:text-base text-neutral-300">3 étapes, pas plus.</p>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-4 md:gap-6">
<div className="relative rounded-xl border border-white/10 bg-white/5 p-5">
<div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-white text-neutral-900 text-xs font-medium grid place-items-center">1</div>
<div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-indigo-500/30 to-cyan-400/30 grid place-items-center">
<span className="iconify text-indigo-300" data-icon="lucide:pen-tool" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="mt-3 text-lg tracking-tight font-semibold">Crée un jeu en 2 minutes</h3>
<p className="mt-1 text-sm text-neutral-300">Choisis un sujet d’actu, écris ta question, ajoute 2–6 réponses.</p>
</div>
<div className="relative rounded-xl border border-white/10 bg-white/5 p-5">
<div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-white text-neutral-900 text-xs font-medium grid place-items-center">2</div>
<div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-indigo-500/30 to-cyan-400/30 grid place-items-center">
<span className="iconify text-cyan-300" data-icon="lucide:share-2" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="mt-3 text-lg tracking-tight font-semibold">Partage le lien</h3>
<p className="mt-1 text-sm text-neutral-300">Bio TikTok, live, story. Les participants jouent en 10 secondes.</p>
</div>
<div className="relative rounded-xl border border-white/10 bg-white/5 p-5">
<div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-white text-neutral-900 text-xs font-medium grid place-items-center">3</div>
<div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-indigo-500/30 to-cyan-400/30 grid place-items-center">
<span className="iconify text-emerald-300" data-icon="lucide:contacts" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="mt-3 text-lg tracking-tight font-semibold">Récupère les participants</h3>
<p className="mt-1 text-sm text-neutral-300">Email + pseudo TikTok + niveau d’intérêt. Export en 1 clic.</p>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16" id="pour-qui">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">À qui c’est destiné</h2>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="inline-flex items-center gap-2 text-indigo-300 text-sm">
<span className="iconify" data-icon="lucide:video" style={{strokeWidth: '1.5'}}></span>
              Créateurs TikTok Shop
            </div>
<p className="mt-2 text-sm text-neutral-300">Anime tes lives avec un moment fun qui transforme l’audience en base email.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="inline-flex items-center gap-2 text-cyan-300 text-sm">
<span className="iconify" data-icon="lucide:shopping-cart" style={{strokeWidth: '1.5'}}></span>
              Marques e‑commerce DTC
            </div>
<p className="mt-2 text-sm text-neutral-300">Capte l’intention pendant les pics d’actu et alimente tes campagnes.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="inline-flex items-center gap-2 text-rose-300 text-sm">
<span className="iconify" data-icon="lucide:mic-2" style={{strokeWidth: '1.5'}}></span>
              Vendeurs live
            </div>
<p className="mt-2 text-sm text-neutral-300">Garde l’attention, mesure l’intérêt, relance les bons profils.</p>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16" id="temoignages">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">Témoignages</h2>
<p className="mt-3 text-sm md:text-base text-neutral-300">Des créateurs qui transforment leurs vues en prospects exploitables.</p>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-4 md:gap-6">
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="inline-flex items-center gap-3">
<img alt="Camille R." className="h-10 w-10 rounded-full object-cover" src="https://i.pravatar.cc/96?img=5"/>
<div>
<div className="text-sm font-medium tracking-tight">Camille R.</div>
<div className="text-xs text-neutral-400">@camille.live</div>
</div>
</div>
<blockquote className="mt-3 text-sm text-neutral-200">
              “En un live, j’ai récupéré 180 emails + pseudos. Mon retargeting a enfin du sens.”
            </blockquote>
<div className="mt-3 inline-flex items-center gap-1 text-amber-300">
<span className="iconify" data-icon="lucide:star" style={{strokeWidth: '1.5'}}></span>
<span className="iconify" data-icon="lucide:star" style={{strokeWidth: '1.5'}}></span>
<span className="iconify" data-icon="lucide:star" style={{strokeWidth: '1.5'}}></span>
<span className="iconify" data-icon="lucide:star" style={{strokeWidth: '1.5'}}></span>
<span className="iconify" data-icon="lucide:star" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="inline-flex items-center gap-3">
<img alt="Noé M." className="h-10 w-10 rounded-full object-cover" src="https://i.pravatar.cc/96?img=14"/>
<div>
<div className="text-sm font-medium tracking-tight">Noé M.</div>
<div className="text-xs text-neutral-400">@noe.shop</div>
</div>
</div>
<blockquote className="mt-3 text-sm text-neutral-200">
              “Le jeu a créé un pic d’engagement en 10 min. 92% opt‑in, c’est massif.”
            </blockquote>
<div className="mt-3 inline-flex items-center gap-1 text-amber-300">
<span className="iconify" data-icon="lucide:star" style={{strokeWidth: '1.5'}}></span>
<span className="iconify" data-icon="lucide:star" style={{strokeWidth: '1.5'}}></span>
<span className="iconify" data-icon="lucide:star" style={{strokeWidth: '1.5'}}></span>
<span className="iconify" data-icon="lucide:star" style={{strokeWidth: '1.5'}}></span>
<span className="iconify text-neutral-500" data-icon="lucide:star" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="inline-flex items-center gap-3">
<img alt="Sarah L." className="h-10 w-10 rounded-full object-cover" src="https://i.pravatar.cc/96?img=28"/>
<div>
<div className="text-sm font-medium tracking-tight">Sarah L.</div>
<div className="text-xs text-neutral-400">@sarah_live</div>
</div>
</div>
<blockquote className="mt-3 text-sm text-neutral-200">
              “On a pu identifier nos prospects chauds pendant le live. Suivi + ventes derrière.”
            </blockquote>
<div className="mt-3 inline-flex items-center gap-1 text-amber-300">
<span className="iconify" data-icon="lucide:star" style={{strokeWidth: '1.5'}}></span>
<span className="iconify" data-icon="lucide:star" style={{strokeWidth: '1.5'}}></span>
<span className="iconify" data-icon="lucide:star" style={{strokeWidth: '1.5'}}></span>
<span className="iconify" data-icon="lucide:star" style={{strokeWidth: '1.5'}}></span>
<span className="iconify" data-icon="lucide:star" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16" id="demo">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">Démonstration</h2>
<p className="mt-3 text-sm md:text-base text-neutral-300">Vois à quoi ressemble la création d’un jeu et l’expérience côté participant.</p>
</div>
<div className="mt-8 grid md:grid-cols-2 gap-4 md:gap-6 items-stretch">
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="inline-flex items-center gap-2 text-xs text-neutral-300">
<span className="iconify text-indigo-300" data-icon="lucide:mouse-pointer-click" style={{strokeWidth: '1.5'}}></span>
              Création en 3 étapes
            </div>
<ul className="mt-4 space-y-3 text-sm">
<li className="inline-flex items-start gap-3">
<span className="iconify text-cyan-300 mt-[0.15rem]" data-icon="lucide:edit-3" style={{strokeWidth: '1.5'}}></span>
                Renseigne ta question et les réponses.
              </li>
<li className="inline-flex items-start gap-3">
<span className="iconify text-emerald-300 mt-[0.15rem]" data-icon="lucide:toggle-left" style={{strokeWidth: '1.5'}}></span>
                Active la collecte email + pseudo TikTok.
              </li>
<li className="inline-flex items-start gap-3">
<span className="iconify text-indigo-300 mt-[0.15rem]" data-icon="lucide:share" style={{strokeWidth: '1.5'}}></span>
                Partage le lien en bio, en live ou en story.
              </li>
</ul>
<a className="mt-5 inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-200 transition px-4 py-2" href="#start" id="openModalDemo">
<span className="iconify" data-icon="lucide:play" style={{strokeWidth: '1.5'}}></span>
              Lancer la démo
            </a>
</div>
<div className="relative rounded-2xl border border-white/10 overflow-hidden">
<div className="aspect-video bg-neutral-900">
<img alt="Aperçu de la démo du jeu" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1517471240738-bbbab87ac5eb?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<button aria-label="Lire la démo" className="absolute inset-0 m-auto h-12 w-12 rounded-full bg-white/90 text-neutral-900 grid place-items-center hover:bg-white transition">
<span className="iconify" data-icon="lucide:play" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16" id="faq">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">Simple, safe, fait pour performer</h2>
</div>
<div className="mt-8 grid md:grid-cols-2 gap-4 md:gap-6">
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="inline-flex items-center gap-2 text-emerald-300 text-sm">
<span className="iconify" data-icon="lucide:badge-check" style={{strokeWidth: '1.5'}}></span>
              Aucun paiement requis pour les participants
            </div>
<p className="mt-2 text-sm text-neutral-300">Zéro friction. Les joueurs laissent leurs infos et participent immédiatement.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="inline-flex items-center gap-2 text-indigo-300 text-sm">
<span className="iconify" data-icon="lucide:cube" style={{strokeWidth: '1.5'}}></span>
              Aucune gestion de stock
            </div>
<p className="mt-2 text-sm text-neutral-300">Tu tires tes gagnants et envoies ton avantage comme tu veux (code, DM, etc.).</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="inline-flex items-center gap-2 text-emerald-300 text-sm">
<span className="iconify" data-icon="lucide:lock" style={{strokeWidth: '1.5'}}></span>
              Conforme RGPD
            </div>
<p className="mt-2 text-sm text-neutral-300">Consentement explicite, suppression sur demande, hébergement UE.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="inline-flex items-center gap-2 text-cyan-300 text-sm">
<span className="iconify" data-icon="lucide:hard-drive-download" style={{strokeWidth: '1.5'}}></span>
              Données accessibles et exportables
            </div>
<p className="mt-2 text-sm text-neutral-300">CSV en 1 clic, intégrations marketing à venir.</p>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16" id="faq-questions">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">FAQ</h2>
<p className="mt-3 text-sm md:text-base text-neutral-300">Les réponses aux questions les plus fréquentes.</p>
</div>
<div className="mt-8 grid md:grid-cols-2 gap-4 md:gap-6">

<div className="rounded-xl border border-white/10 bg-white/5">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-3 px-5 py-4" data-acc-btn="" data-target="#q1">
<div className="inline-flex items-center gap-2 text-sm">
<span className="iconify text-indigo-300" data-icon="lucide:help-circle" style={{strokeWidth: '1.5'}}></span>
                Est‑ce vraiment gratuit ?
              </div>
<span className="iconify text-neutral-400 transition-transform duration-200" data-acc-chevron="" data-icon="lucide:chevron-down" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="hidden px-5 pb-4 text-sm text-neutral-300" id="q1">
              Oui. Pendant la beta, la création de jeux est gratuite. Nous proposerons ensuite un plan gratuit limité et un plan pro.
            </div>
</div>

<div className="rounded-xl border border-white/10 bg-white/5">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-3 px-5 py-4" data-acc-btn="" data-target="#q2">
<div className="inline-flex items-center gap-2 text-sm">
<span className="iconify text-cyan-300" data-icon="lucide:square-user" style={{strokeWidth: '1.5'}}></span>
                Faut‑il un compte TikTok Shop pour utiliser l’outil ?
              </div>
<span className="iconify text-neutral-400 transition-transform duration-200" data-acc-chevron="" data-icon="lucide:chevron-down" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="hidden px-5 pb-4 text-sm text-neutral-300" id="q2">
              Non. Un compte TikTok suffit. Le lien du jeu est partageable partout (bio, live, story).
            </div>
</div>

<div className="rounded-xl border border-white/10 bg-white/5">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-3 px-5 py-4" data-acc-btn="" data-target="#q3">
<div className="inline-flex items-center gap-2 text-sm">
<span className="iconify text-emerald-300" data-icon="lucide:shield-check" style={{strokeWidth: '1.5'}}></span>
                Comment gérez‑vous la conformité RGPD ?
              </div>
<span className="iconify text-neutral-400 transition-transform duration-200" data-acc-chevron="" data-icon="lucide:chevron-down" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="hidden px-5 pb-4 text-sm text-neutral-300" id="q3">
              Consentement explicite, suppression sur demande, hébergement UE et export des données en 1 clic.
            </div>
</div>

<div className="rounded-xl border border-white/10 bg-white/5">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-3 px-5 py-4" data-acc-btn="" data-target="#q4">
<div className="inline-flex items-center gap-2 text-sm">
<span className="iconify text-indigo-300" data-icon="lucide:cable" style={{strokeWidth: '1.5'}}></span>
                Quelles intégrations sont prévues ?
              </div>
<span className="iconify text-neutral-400 transition-transform duration-200" data-acc-chevron="" data-icon="lucide:chevron-down" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="hidden px-5 pb-4 text-sm text-neutral-300" id="q4">
              Connexions aux principaux outils email/SMS et CRM. D’ici là, l’export CSV couvre la plupart des besoins.
            </div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-white/10 bg-gradient-to-tr from-neutral-900 to-neutral-800 p-6 md:p-10 overflow-hidden relative">
<div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-tr from-indigo-500/20 to-cyan-400/20 blur-2xl"></div>
<div className="max-w-2xl relative">
<h3 className="text-2xl md:text-3xl tracking-tight font-semibold">Prêt à transformer tes vues en prospects ?</h3>
<p className="mt-3 text-sm md:text-base text-neutral-300">Crée ton premier jeu gratuitement. Aucun engagement, annulation à tout moment.</p>
<div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<a className="inline-flex justify-center items-center gap-2 rounded-md bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-200 transition px-5 py-3" href="#start" id="openModalBottom">
<span className="iconify" data-icon="lucide:rocket" style={{strokeWidth: '1.5'}}></span>
                Créer mon premier jeu gratuitement
              </a>
<div className="inline-flex items-center gap-2 text-xs text-neutral-300">
<span className="iconify text-emerald-300" data-icon="lucide:check" style={{strokeWidth: '1.5'}}></span>
                Pas de carte bancaire
              </div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-10 border-t border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-gradient-to-tr from-indigo-500 to-cyan-400 grid place-items-center">
<span className="iconify text-neutral-950" data-icon="lucide:triangle" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-base tracking-tight font-semibold" style={{fontFamily: 'Plus Jakarta Sans, Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI'}}>LEADPLAY</span>
</div>
<ul className="flex items-center gap-6 text-xs text-neutral-400">
<li><a className="hover:text-white transition" href="#">Mentions légales</a></li>
<li><a className="hover:text-white transition" href="#">Confidentialité</a></li>
<li><a className="hover:text-white transition" href="#">Contact</a></li>
</ul>
</div>
</div>
</footer>

<div className="fixed bottom-3 inset-x-3 z-40 md:hidden">
<a className="w-full inline-flex justify-center items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-400 text-neutral-950 text-sm font-medium shadow-lg shadow-indigo-500/10 px-5 py-3" href="#start" id="openModalSticky">
<span className="iconify" data-icon="lucide:wand-2" style={{strokeWidth: '1.5'}}></span>
        Créer mon premier jeu gratuitement
      </a>
</div>

<div className="hidden fixed inset-0 z-50" id="modal">
<div className="absolute inset-0 bg-black/60"></div>
<div className="relative max-w-lg mx-auto mt-20 md:mt-32 rounded-2xl border border-white/10 bg-neutral-900 p-6">
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl tracking-tight font-semibold">Créer ton premier jeu</h3>
<p className="mt-1 text-sm text-neutral-300">C’est gratuit et ça prend 2 minutes.</p>
</div>
<button aria-label="Fermer" className="rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition p-2" id="closeModal">
<span className="iconify" data-icon="lucide:x" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<form className="mt-5 grid gap-4">
<label className="grid gap-1">
<span className="text-xs text-neutral-300">Sujet du jeu</span>
<input className="w-full rounded-md bg-neutral-800 text-white placeholder:text-neutral-500 border border-white/10 focus:border-indigo-400/50 focus:outline-none px-3 py-2 text-sm" placeholder="Ex. Qui gagne la finale de The Voice ?" type="text"/>
</label>
<label className="grid gap-1">
<span className="text-xs text-neutral-300">Email pro</span>
<input className="w-full rounded-md bg-neutral-800 text-white placeholder:text-neutral-500 border border-white/10 focus:border-indigo-400/50 focus:outline-none px-3 py-2 text-sm" placeholder="ton@email.fr" type="email"/>
</label>
<label className="grid gap-1">
<span className="text-xs text-neutral-300">Pseudo TikTok (optionnel)</span>
<input className="w-full rounded-md bg-neutral-800 text-white placeholder:text-neutral-500 border border-white/10 focus:border-indigo-400/50 focus:outline-none px-3 py-2 text-sm" placeholder="@ton.pseudo" type="text"/>
</label>
<button className="mt-2 inline-flex justify-center items-center gap-2 rounded-md bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-200 transition px-4 py-2" id="validateStart" type="button">
<span className="iconify" data-icon="lucide:rocket" style={{strokeWidth: '1.5'}}></span>
            Continuer
          </button>
<p className="text-[0.8rem] text-neutral-400">En créant un jeu, tu acceptes la collecte des données nécessaires au fonctionnement du service (RGPD).</p>
</form>
</div>
</div>



    </>
  );
}
