import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Lecture vidéo: remplace le bouton par l'iframe (placeholder YouTube)
      const playBtn = document.getElementById('videoPlay');
      const frame = document.getElementById('videoFrame');
      if (playBtn && frame) {
        playBtn.addEventListener('click', () => {
          frame.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0';
          frame.classList.remove('hidden');
          playBtn.classList.add('hidden');
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full border-b border-neutral-200/70">
<div className="mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-4">
<a className="inline-flex items-center gap-2" href="#">
<div className="h-8 w-8 rounded-md bg-neutral-900 text-neutral-50 flex items-center justify-center tracking-tight font-semibold">PP</div>
<span className="sr-only">Présences Pro</span>
<span className="text-sm sm:text-base font-medium tracking-tight">Présences Pro</span>
</a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-neutral-700 hover:text-neutral-900" href="#how">Comment ça marche</a>
<a className="text-sm font-medium text-neutral-700 hover:text-neutral-900" href="#value">Bénéfices</a>
<a className="text-sm font-medium text-neutral-700 hover:text-neutral-900" href="#pricing">Tarif</a>
<a className="text-sm font-medium text-neutral-700 hover:text-neutral-900" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-neutral-900" href="#how">
<iconify-icon className="w-5 h-5" icon="lucide:play-circle" style={{-SvgStroke: '1.5'}}></iconify-icon>
              Voir comment ça fonctionne
            </a>
<a className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-neutral-50 text-sm font-medium px-4 py-2 hover:bg-neutral-800" href="#pricing">
              Essayer Présences Pro
            </a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="h-64 md:h-72 bg-gradient-to-b from-neutral-100 to-transparent"></div>
</div>
<div className="mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8 pt-10 pb-12 md:pb-16 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
<div className="order-2 lg:order-1">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Fini le chaos WhatsApp pour gérer les présences d’équipe.
            </h1>
<div className="mt-4 space-y-1.5">
<p className="text-base sm:text-lg text-neutral-700">Qui vient vraiment à l’entraînement ?</p>
<p className="text-base sm:text-lg text-neutral-700">Qui sera là au match ?</p>
<p className="text-base sm:text-lg text-neutral-700">Prenez enfin des décisions claires, sans stress.</p>
</div>
<p className="mt-4 text-base sm:text-lg text-neutral-700">
              Présences Pro transforme les réponses dispersées sur WhatsApp en données simples, fiables et exploitables — en un seul lien.
            </p>
<div className="mt-3 text-sm text-neutral-800 inline-flex items-center gap-2">
<span className="select-none">👉</span> Pensé pour les entraîneurs et managers de clubs amateurs.
            </div>
<div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<a className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-neutral-50 text-sm font-medium px-4 py-2 hover:bg-neutral-800" href="#how">
                Voir comment ça fonctionne
              </a>
<a className="inline-flex items-center justify-center rounded-md border border-neutral-300 text-neutral-900 text-sm font-medium px-4 py-2 hover:bg-neutral-100" href="#pricing">
                Essayer Présences Pro
              </a>
</div>
<div className="mt-8 grid grid-cols-2 gap-4 text-xs text-neutral-600">
<div className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-neutral-900" icon="lucide:link-2" style={{-SvgStroke: '1.5'}}></iconify-icon>
                Lien unique à partager
              </div>
<div className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-neutral-900" icon="lucide:mouse-pointer-click" style={{-SvgStroke: '1.5'}}></iconify-icon>
                Réponse en 3 secondes
              </div>
<div className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-neutral-900" icon="lucide:smartphone" style={{-SvgStroke: '1.5'}}></iconify-icon>
                100% mobile
              </div>
<div className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-neutral-900" icon="lucide:user-x" style={{-SvgStroke: '1.5'}}></iconify-icon>
                Sans compte joueur
              </div>
</div>
</div>

<div className="order-1 lg:order-2">
<div className="grid sm:grid-cols-2 gap-4">

<div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-neutral-700">Avant</div>
<span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 text-neutral-800 px-2 py-1 text-xs font-medium">
<iconify-icon className="w-4 h-4" icon="lucide:message-circle-x" style={{-SvgStroke: '1.5'}}></iconify-icon>
                    WhatsApp
                  </span>
</div>
<div className="mt-3 space-y-2">
<div className="rounded-md border border-neutral-200 p-2 text-xs text-neutral-700">
<span className="font-medium">Joueur 1:</span> Je ne sais pas encore 🤔
                  </div>
<div className="rounded-md border border-neutral-200 p-2 text-xs text-neutral-700">
<span className="font-medium">Parent:</span> Il a contrôle demain 😕
                  </div>
<div className="rounded-md border border-neutral-200 p-2 text-xs text-neutral-700">
<span className="font-medium">Joueur 2:</span> Je viens 💪⚽️
                  </div>
<div className="rounded-md border border-neutral-200 p-2 text-xs text-neutral-700">
<span className="font-medium">Joueur 3:</span> Peut-être…
                  </div>
</div>
<div className="mt-3 flex items-center gap-2 text-xs text-neutral-600">
<iconify-icon className="w-4 h-4 text-amber-600" icon="lucide:triangle-alert" style={{-SvgStroke: '1.5'}}></iconify-icon>
                  Réponses éparpillées, messages noyés, stress avant l’entraînement.
                </div>
</div>

<div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-neutral-700">Après</div>
<span className="inline-flex items-center gap-1 rounded-full bg-neutral-900 text-neutral-50 px-2 py-1 text-xs font-medium">
<iconify-icon className="w-4 h-4" icon="lucide:check-circle-2" style={{-SvgStroke: '1.5'}}></iconify-icon>
                    Présences Pro
                  </span>
</div>
<div className="mt-3 grid grid-cols-3 gap-2">
<div className="rounded-md bg-green-50 border border-green-200 p-2 text-center">
<div className="text-lg font-semibold tracking-tight text-green-700">12</div>
<div className="text-xs text-green-800">Présents</div>
</div>
<div className="rounded-md bg-red-50 border border-red-200 p-2 text-center">
<div className="text-lg font-semibold tracking-tight text-red-700">3</div>
<div className="text-xs text-red-800">Absents</div>
</div>
<div className="rounded-md bg-amber-50 border border-amber-200 p-2 text-center">
<div className="text-lg font-semibold tracking-tight text-amber-700">2</div>
<div className="text-xs text-amber-800">En attente</div>
</div>
</div>
<div className="mt-3 divide-y divide-neutral-200 border border-neutral-200 rounded-md overflow-hidden">
<div className="flex items-center justify-between p-2 text-xs">
<span className="text-neutral-700">M. Diallo</span>
<span className="inline-flex items-center gap-1 text-green-700">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:check" style={{-SvgStroke: '1.5'}}></iconify-icon>
                      Présent
                    </span>
</div>
<div className="flex items-center justify-between p-2 text-xs">
<span className="text-neutral-700">A. Martin</span>
<span className="inline-flex items-center gap-1 text-red-700">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:x" style={{-SvgStroke: '1.5'}}></iconify-icon>
                      Absent
                    </span>
</div>
<div className="flex items-center justify-between p-2 text-xs">
<span className="text-neutral-700">S. Lopez</span>
<span className="inline-flex items-center gap-1 text-amber-700">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:clock" style={{-SvgStroke: '1.5'}}></iconify-icon>
                      En attente
                    </span>
</div>
</div>
<div className="mt-3 flex items-center gap-2 text-xs text-neutral-600">
<iconify-icon className="w-4 h-4 text-neutral-900" icon="lucide:bar-chart-3" style={{-SvgStroke: '1.5'}}></iconify-icon>
                  Stats d’assiduité objectives pour décider sereinement.
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8 py-10 md:py-14" id="video">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight">Voir la démo en vidéo</h2>
<p className="mt-2 text-neutral-700 text-base">Regardez comment Présences Pro fonctionne — 2 minutes.</p>
</div>
<div className="mt-6">
<div className="relative aspect-video rounded-xl border border-neutral-200 bg-neutral-100 overflow-hidden">
<button className="absolute inset-0 w-full h-full flex items-center justify-center group" id="videoPlay">
<div className="rounded-full bg-white/90 backdrop-blur border border-neutral-200 inline-flex items-center gap-2 px-4 py-2 shadow-sm">
<iconify-icon className="w-5 h-5 text-neutral-900" icon="lucide:play" style={{-SvgStroke: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-neutral-900">Lire la vidéo</span>
</div>
</button>
<iframe allow="autoplay; encrypted-media" allowfullscreen="" className="w-full h-full hidden" id="videoFrame" src="" title="Demo Présences Pro"></iframe>
</div>
</div>
</section>

<section className="mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8 py-10 md:py-14">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-2">
<iconify-icon className="w-5 h-5 text-amber-600" icon="lucide:alert-triangle" style={{-SvgStroke: '1.5'}}></iconify-icon>
<h2 className="text-2xl font-semibold tracking-tight">Le problème (reconnaissance immédiate)</h2>
</div>
<div className="mt-4 grid grid-cols-1 gap-2 text-sm">
<div className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-red-600" icon="lucide:x-circle" style={{-SvgStroke: '1.5'}}></iconify-icon>
              Messages noyés dans WhatsApp
            </div>
<div className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-red-600" icon="lucide:x-circle" style={{-SvgStroke: '1.5'}}></iconify-icon>
              Réponses tardives ou ambiguës
            </div>
<div className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-red-600" icon="lucide:x-circle" style={{-SvgStroke: '1.5'}}></iconify-icon>
              Emojis sans contexte
            </div>
<div className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-red-600" icon="lucide:x-circle" style={{-SvgStroke: '1.5'}}></iconify-icon>
              Compilation mentale stressante avant chaque match
            </div>
<div className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-red-600" icon="lucide:x-circle" style={{-SvgStroke: '1.5'}}></iconify-icon>
              Décisions prises “au feeling”
            </div>
</div>
<div className="mt-4 text-sm text-neutral-800">
<div className="font-medium inline-flex items-center gap-2"><span className="select-none">👉</span> Résultat :</div>
<ul className="mt-2 space-y-1.5 text-neutral-700">
<li>Du matériel préparé pour 12, ils sont 8</li>
<li>Des équipes déséquilibrées</li>
<li>Des joueurs mécontents</li>
<li>Des discussions tendues avec les parents</li>
</ul>
<p className="mt-3 text-neutral-900">Et surtout : <span className="font-medium">Aucune donnée fiable sur l’engagement réel des joueurs.</span></p>
</div>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-2">
<iconify-icon className="w-5 h-5 text-neutral-900" icon="lucide:check-circle-2" style={{-SvgStroke: '1.5'}}></iconify-icon>
<h2 className="text-2xl font-semibold tracking-tight">La solution</h2>
</div>
<p className="mt-3 text-sm text-neutral-700">Un lien. Une réponse. Une vision claire.</p>
<p className="mt-1 text-sm text-neutral-700">Avec Présences Pro, vous remplacez le chaos par un système simple et équitable.</p>
<div className="mt-4 grid grid-cols-1 gap-2 text-sm">
<div className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-neutral-900" icon="lucide:link" style={{-SvgStroke: '1.5'}}></iconify-icon>
              Un lien unique pour votre équipe
            </div>
<div className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-neutral-900" icon="lucide:zap" style={{-SvgStroke: '1.5'}}></iconify-icon>
              Une réponse en 3 secondes pour les joueurs
            </div>
<div className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-neutral-900" icon="lucide:bar-chart-3" style={{-SvgStroke: '1.5'}}></iconify-icon>
              Un tableau de bord clair pour le coach
            </div>
</div>
<div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
<span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1">Sans application</span>
<span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1">Sans compte joueur</span>
<span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1">Sans formation</span>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8 py-10 md:py-14">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-2">
<iconify-icon className="w-5 h-5 text-neutral-700" icon="lucide:history" style={{-SvgStroke: '1.5'}}></iconify-icon>
<h2 className="text-2xl font-semibold tracking-tight">Avant (WhatsApp)</h2>
</div>
<div className="mt-4 grid grid-cols-1 gap-3 text-sm">
<div className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-neutral-700" icon="lucide:list" style={{-SvgStroke: '1.5'}}></iconify-icon>
              80 messages à relire
            </div>
<div className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-neutral-700" icon="lucide:smile-plus" style={{-SvgStroke: '1.5'}}></iconify-icon>
              Des “👍” sans contexte
            </div>
<div className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-neutral-700" icon="lucide:search-x" style={{-SvgStroke: '1.5'}}></iconify-icon>
              Des réponses perdues
            </div>
<div className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-neutral-700" icon="lucide:timer" style={{-SvgStroke: '1.5'}}></iconify-icon>
              Du stress inutile
            </div>
</div>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-2">
<iconify-icon className="w-5 h-5 text-neutral-900" icon="lucide:sparkles" style={{-SvgStroke: '1.5'}}></iconify-icon>
<h2 className="text-2xl font-semibold tracking-tight">Après (Présences Pro)</h2>
</div>
<div className="mt-4 grid grid-cols-1 gap-3 text-sm">
<div className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-green-700" icon="lucide:list-checks" style={{-SvgStroke: '1.5'}}></iconify-icon>
              ✅ Présents / ❌ Absents / ⏳ En attente
            </div>
<div className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-neutral-900" icon="lucide:list-tree" style={{-SvgStroke: '1.5'}}></iconify-icon>
              Liste claire et à jour
            </div>
<div className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-neutral-900" icon="lucide:bar-chart-3" style={{-SvgStroke: '1.5'}}></iconify-icon>
              Statistiques d’assiduité
            </div>
<div className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-neutral-900" icon="lucide:scale" style={{-SvgStroke: '1.5'}}></iconify-icon>
              Décisions justifiées et sereines
            </div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8 py-10 md:py-14" id="how">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight">Comment ça marche</h2>
<p className="mt-2 text-neutral-700 text-base">1️⃣ 2️⃣ 3️⃣ — c’est fait.</p>
</div>
<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-neutral-900 text-neutral-50 flex items-center justify-center text-sm font-medium">1️⃣</div>
<h3 className="text-lg font-semibold tracking-tight">Créez un événement</h3>
</div>
<p className="mt-2 text-sm text-neutral-700">Match, entraînement, réunion…<br/>Date, heure, lieu.</p>
<div className="mt-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
<div className="text-sm font-medium text-neutral-800">Exemple — Entraînement</div>
<div className="mt-1 text-xs text-neutral-600">Mer 18:30 • Terrain 2</div>
</div>
</div>

<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-neutral-900 text-neutral-50 flex items-center justify-center text-sm font-medium">2️⃣</div>
<h3 className="text-lg font-semibold tracking-tight">Partagez le lien</h3>
</div>
<p className="mt-2 text-sm text-neutral-700">Dans la bio WhatsApp<br/>Ou envoyé une seule fois au groupe</p>
<div className="mt-4 flex items-center justify-between rounded-lg border border-neutral-200 bg-neutral-50 p-3">
<div className="truncate text-xs text-neutral-700">presences.pro/votre-equipe-evenement</div>
<button className="inline-flex items-center gap-1 text-xs font-medium text-neutral-900 hover:opacity-80">
<iconify-icon className="w-4 h-4" icon="lucide:copy" style={{-SvgStroke: '1.5'}}></iconify-icon>
              Copier
            </button>
</div>
</div>

<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-neutral-900 text-neutral-50 flex items-center justify-center text-sm font-medium">3️⃣</div>
<h3 className="text-lg font-semibold tracking-tight">Les joueurs répondent</h3>
</div>
<p className="mt-2 text-sm text-neutral-700">Ouvrent le lien • Sélectionnent leur nom • Cliquent Je viens / Je ne viens pas</p>
<div className="mt-4 grid grid-cols-3 gap-2">
<button className="rounded-md border border-green-200 bg-green-50 px-3 py-2 text-xs font-medium text-green-800 inline-flex items-center justify-center gap-1">
<iconify-icon className="w-4 h-4" icon="lucide:check" style={{-SvgStroke: '1.5'}}></iconify-icon> Je viens
            </button>
<button className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs font-medium text-red-800 inline-flex items-center justify-center gap-1">
<iconify-icon className="w-4 h-4" icon="lucide:x" style={{-SvgStroke: '1.5'}}></iconify-icon> Je ne viens pas
            </button>
<button className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-medium text-amber-800 inline-flex items-center justify-center gap-1">
<iconify-icon className="w-4 h-4" icon="lucide:clock" style={{-SvgStroke: '1.5'}}></iconify-icon> En attente
            </button>
</div>
<div className="mt-3 inline-flex items-center gap-2 text-xs text-neutral-700">
<iconify-icon className="w-4 h-4" icon="lucide:timer" style={{-SvgStroke: '1.5'}}></iconify-icon>
            ⏱️ Temps moyen : 3 secondes
          </div>
</div>
</div>
</section>

<section className="mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8 py-10 md:py-14" id="value">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight">Ce que vous gagnez concrètement</h2>
</div>
<div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-2">
<span className="text-lg">⏱️</span>
<h3 className="text-base font-semibold tracking-tight">Du temps</h3>
</div>
<ul className="mt-2 space-y-1.5 text-sm text-neutral-700">
<li>Jusqu’à 25 minutes économisées par événement</li>
<li>Plus de compilation mentale</li>
<li>Plus de stress de dernière minute</li>
</ul>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-2">
<span className="text-lg">⚖️</span>
<h3 className="text-base font-semibold tracking-tight">Des décisions justes</h3>
</div>
<ul className="mt-2 space-y-1.5 text-sm text-neutral-700">
<li>Sélections basées sur des faits</li>
<li>Discussions apaisées</li>
<li>Transparence avec joueurs et parents</li>
</ul>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-2">
<span className="text-lg">📊</span>
<h3 className="text-base font-semibold tracking-tight">Une vraie vision d’équipe</h3>
</div>
<ul className="mt-2 space-y-1.5 text-sm text-neutral-700">
<li>Taux de présence réel</li>
<li>Joueurs les plus fiables</li>
<li>Patterns d’absence visibles</li>
</ul>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-2">
<span className="text-lg">🤝</span>
<h3 className="text-base font-semibold tracking-tight">Une meilleure dynamique</h3>
</div>
<ul className="mt-2 space-y-1.5 text-sm text-neutral-700">
<li>Valorisation des joueurs assidus</li>
<li>Responsabilisation de l’équipe</li>
<li>Moins de frustrations</li>
</ul>
</div>
</div>

<div className="mt-8 rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center justify-between">
<div className="text-base font-semibold tracking-tight">Aperçu tableau de bord</div>
<div className="text-xs text-neutral-600">Exemple fictif</div>
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-lg border border-neutral-200 p-4">
<div className="text-sm text-neutral-700">Présence moyenne</div>
<div className="mt-1 text-2xl font-semibold tracking-tight">82%</div>
<div className="mt-2 h-2 w-full rounded-full bg-neutral-100 overflow-hidden">
<div className="h-full w-4/5 bg-neutral-900"></div>
</div>
</div>
<div className="rounded-lg border border-neutral-200 p-4">
<div className="text-sm text-neutral-700">Joueurs assidus (90%+)</div>
<div className="mt-1 text-2xl font-semibold tracking-tight">6</div>
<div className="mt-2 grid grid-cols-6 gap-1">
<div className="h-6 rounded bg-neutral-900"></div>
<div className="h-6 rounded bg-neutral-900"></div>
<div className="h-6 rounded bg-neutral-900"></div>
<div className="h-6 rounded bg-neutral-900"></div>
<div className="h-6 rounded bg-neutral-900"></div>
<div className="h-6 rounded bg-neutral-900"></div>
</div>
</div>
<div className="rounded-lg border border-neutral-200 p-4">
<div className="text-sm text-neutral-700">Absences non justifiées</div>
<div className="mt-1 text-2xl font-semibold tracking-tight">3</div>
<div className="mt-2 flex items-center gap-2 text-xs text-neutral-600">
<iconify-icon className="w-4 h-4" icon="lucide:info" style={{-SvgStroke: '1.5'}}></iconify-icon>
              Base de décision pour les compositions et convocations.
            </div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8 py-10 md:py-14">
<div className="rounded-xl border border-neutral-200 bg-white p-6">
<div className="flex items-center gap-2">
<iconify-icon className="w-5 h-5 text-neutral-900" icon="lucide:users" style={{-SvgStroke: '1.5'}}></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight">Pour qui ?</h3>
</div>
<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
<div className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-neutral-900" icon="lucide:check" style={{-SvgStroke: '1.5'}}></iconify-icon>
            Clubs amateurs (foot, basket, hand, rugby…)
          </div>
<div className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-neutral-900" icon="lucide:check" style={{-SvgStroke: '1.5'}}></iconify-icon>
            Entraîneurs bénévoles ou semi-pro
          </div>
<div className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-neutral-900" icon="lucide:check" style={{-SvgStroke: '1.5'}}></iconify-icon>
            Managers d’équipes jeunes ou seniors
          </div>
<div className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-neutral-900" icon="lucide:check" style={{-SvgStroke: '1.5'}}></iconify-icon>
            Toute équipe fatiguée du chaos WhatsApp
          </div>
</div>
</div>
</section>

<section className="mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8 py-10 md:py-14" id="pricing">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2">
<h2 className="text-3xl font-semibold tracking-tight">Prix simple. Une fois. Pour de bon.</h2>
<p className="mt-2 text-neutral-700 text-base">Accès à vie – 19 €</p>
<ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
<li className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-neutral-900" icon="lucide:infinity" style={{-SvgStroke: '1.5'}}></iconify-icon>
              Utilisation illimitée pour une équipe
            </li>
<li className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-neutral-900" icon="lucide:calendar-range" style={{-SvgStroke: '1.5'}}></iconify-icon>
              Tous les événements de la saison
            </li>
<li className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-neutral-900" icon="lucide:badge-check" style={{-SvgStroke: '1.5'}}></iconify-icon>
              Aucun abonnement
            </li>
<li className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-neutral-900" icon="lucide:shield" style={{-SvgStroke: '1.5'}}></iconify-icon>
              Aucune carte cachée
            </li>
</ul>
<p className="mt-3 text-sm text-neutral-700">Vous payez une fois. Vous utilisez toute l’année.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-6">
<div className="text-sm text-neutral-700">Accès à vie – 19 €</div>
<div className="mt-1">
<span className="text-4xl font-semibold tracking-tight">19 €</span>
<span className="text-sm text-neutral-600">/ équipe</span>
</div>
<div className="mt-2 text-xs text-neutral-600">Aucun abonnement • Utilisable toute la saison • Simple, sans engagement</div>
<a className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-neutral-900 text-neutral-50 text-sm font-medium px-4 py-2 hover:bg-neutral-800" href="#checkout">
            Commencer maintenant
          </a>
<div className="mt-3 flex items-center justify-center gap-2 text-xs text-neutral-600">
<iconify-icon className="w-4 h-4" icon="lucide:lock" style={{-SvgStroke: '1.5'}}></iconify-icon>
            Paiement sécurisé
          </div>
</div>
</div>
</section>

<section className="mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8 py-10 md:py-14" id="faq">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight">Questions fréquentes</h2>
</div>
<div className="mt-6 space-y-3">
<details className="group rounded-lg border border-neutral-200 bg-white p-4">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium">Les joueurs doivent-ils créer un compte ?</span>
<iconify-icon className="w-5 h-5 text-neutral-700 transition-transform group-open:rotate-180" icon="lucide:chevron-down" style={{-SvgStroke: '1.5'}}></iconify-icon>
</summary>
<p className="mt-2 text-sm text-neutral-700">Non. Ils sélectionnent simplement leur nom et répondent.</p>
</details>
<details className="group rounded-lg border border-neutral-200 bg-white p-4">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium">Est-ce une application à installer ?</span>
<iconify-icon className="w-5 h-5 text-neutral-700 transition-transform group-open:rotate-180" icon="lucide:chevron-down" style={{-SvgStroke: '1.5'}}></iconify-icon>
</summary>
<p className="mt-2 text-sm text-neutral-700">Non. Tout fonctionne via un lien web, mobile-first.</p>
</details>
<details className="group rounded-lg border border-neutral-200 bg-white p-4">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium">Est-ce que ça remplace WhatsApp ?</span>
<iconify-icon className="w-5 h-5 text-neutral-700 transition-transform group-open:rotate-180" icon="lucide:chevron-down" style={{-SvgStroke: '1.5'}}></iconify-icon>
</summary>
<p className="mt-2 text-sm text-neutral-700">Non. Ça le complète intelligemment.</p>
</details>
<details className="group rounded-lg border border-neutral-200 bg-white p-4">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium">Fonctionne-t-il sur tous les téléphones ?</span>
<iconify-icon className="w-5 h-5 text-neutral-700 transition-transform group-open:rotate-180" icon="lucide:chevron-down" style={{-SvgStroke: '1.5'}}></iconify-icon>
</summary>
<p className="mt-2 text-sm text-neutral-700">Oui. Android, iPhone, aucun téléchargement requis.</p>
</details>
<details className="group rounded-lg border border-neutral-200 bg-white p-4">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium">Puis-je l’utiliser pour plusieurs événements ?</span>
<iconify-icon className="w-5 h-5 text-neutral-700 transition-transform group-open:rotate-180" icon="lucide:chevron-down" style={{-SvgStroke: '1.5'}}></iconify-icon>
</summary>
<p className="mt-2 text-sm text-neutral-700">Oui, autant que vous voulez.</p>
</details>
</div>
</section>

<section className="mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8 py-10 md:py-14">
<div className="rounded-2xl border border-neutral-200 bg-neutral-900 p-6 md:p-8 text-neutral-50">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
<div className="md:col-span-2">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Reprenez le contrôle des présences.</h3>
<p className="mt-2 text-neutral-200 text-sm md:text-base">Sans stress. Sans chaos. Sans abonnement.</p>
</div>
<div className="flex md:justify-end">
<a className="inline-flex items-center justify-center rounded-md bg-white text-neutral-900 text-sm font-medium px-5 py-2 hover:bg-neutral-100" href="#pricing">
              Essayer Présences Pro maintenant
            </a>
</div>
</div>
</div>
<p className="mt-4 text-center text-xs text-neutral-600">Lien unique, réponse en 3 secondes, stats claires.</p>
</section>
<footer className="mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8 py-8 border-t border-neutral-200/70">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-neutral-900 text-neutral-50 flex items-center justify-center text-xs font-semibold tracking-tight">PP</div>
<span className="text-sm font-medium">Présences Pro</span>
</div>
<div className="text-xs text-neutral-600">
          Paiement unique • Aucun abonnement • Utilisable toute la saison
        </div>
</div>
</footer>




    </>
  );
}
