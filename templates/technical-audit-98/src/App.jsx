import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed inset-0 z-0 bg-grid pointer-events-none opacity-20"></div>
<div className="relative flex h-screen overflow-hidden">

<aside className="hidden w-64 flex-col border-r border-slate-800/60 bg-slate-950/50 backdrop-blur-xl md:flex">
<div className="flex h-16 items-center border-b border-slate-800/60 px-6">
<div className="flex items-center gap-2 text-slate-100">
<div className="flex h-6 w-6 items-center justify-center rounded bg-indigo-500/10 text-indigo-400">
<iconify-icon icon="solar:globus-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tight">EPIL<span className="text-slate-500">TECH.MA</span></span>
</div>
</div>
<nav className="flex-1 space-y-1 px-3 py-6">
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-slate-400 transition hover:bg-slate-900 hover:text-slate-200" href="#">
<iconify-icon icon="solar:widget-2-linear" width="18"></iconify-icon>
                    Rapport d'Audit
                </a>
<a className="group flex items-center gap-3 rounded-md bg-slate-800/40 px-3 py-2 text-sm font-medium text-slate-100 ring-1 ring-inset ring-slate-700/50" href="#">
<iconify-icon className="text-indigo-400" icon="solar:code-file-linear" width="18"></iconify-icon>
                    Correctifs &amp; Code
                </a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-slate-400 transition hover:bg-slate-900 hover:text-slate-200" href="#">
<iconify-icon icon="solar:rocket-2-linear" width="18"></iconify-icon>
                    Déploiement
                </a>
</nav>
<div className="border-t border-slate-800/60 p-4">
<div className="rounded-lg bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 p-4">
<p className="text-xs font-medium text-indigo-200">Mode Développeur</p>
<p className="mt-1 text-[10px] text-slate-400">Accès écriture activé</p>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto bg-slate-950">

<header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-800/60 bg-slate-950/80 px-6 backdrop-blur-xl">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-400">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<div className="flex flex-col">
<h1 className="text-sm font-medium text-slate-200">Implémentation des Solutions</h1>
<p className="text-[10px] text-slate-500">Branche: <span className="font-mono text-indigo-400">fix/security-perf-v1</span></p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden items-center gap-2 text-xs text-slate-500 sm:flex">
<span className="flex h-2 w-2 rounded-full bg-amber-500"></span>
                        4 modifications en attente
                    </div>
<button className="flex items-center gap-2 rounded-md bg-white px-3 py-1.5 text-xs font-medium text-slate-950 shadow-lg shadow-indigo-500/10 transition hover:bg-slate-200">
<iconify-icon icon="solar:upload-minimalistic-linear" width="14"></iconify-icon>
                        Pousser en Prod
                    </button>
</div>
</header>
<div className="p-6 md:p-10 space-y-8">

<div className="grid gap-6 lg:grid-cols-5">
<div className="lg:col-span-2">
<h2 className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-200">
<span className="flex h-6 w-6 items-center justify-center rounded bg-rose-500/10 text-rose-500">
<iconify-icon icon="solar:shield-warning-linear" width="14"></iconify-icon>
</span>
                            1. Sécurisation Formulaire
                        </h2>
<div className="space-y-4 text-sm text-slate-400">
<p className="leading-relaxed">Le formulaire actuel est vulnérable aux injections et au spam. La solution consiste à ajouter <strong className="text-slate-200">reCAPTCHA v3</strong> (invisible) et à assainir les entrées côté serveur.</p>
<ul className="space-y-2 rounded-lg border border-slate-800 bg-slate-900/30 p-4">
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs">Ajout script API Google</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs">Validation token backend</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-amber-500" icon="solar:clock-circle-linear"></iconify-icon>
<span className="text-xs text-slate-300">Sanitization Input (PHP)</span>
</li>
</ul>
</div>
</div>
<div className="relative overflow-hidden rounded-xl border border-slate-800 bg-[#0B0E14] p-0 lg:col-span-3">
<div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/50 px-4 py-2">
<span className="text-[10px] font-medium text-slate-500">contact-handler.php</span>
<span className="flex h-2 w-2 rounded-full bg-rose-500"></span>
</div>
<div className="overflow-x-auto p-4">
<pre className="font-mono text-[11px] leading-6">
<span className="token-key">if</span> ($_SERVER[<span className="token-str">"REQUEST_METHOD"</span>] == <span className="token-str">"POST"</span>) {
    <span className="token-com">// 1. Validate ReCaptcha Token</span>
    $recaptcha_secret = <span className="token-str">"6LeIxAcTAAAAAGG-..."</span>;
    $response = file_get_contents(<span className="token-str">"https://www.google.com/recaptcha/api/siteverify?secret="</span>.$recaptcha_secret.<span className="token-str">"&amp;response="</span>.$_POST[<span className="token-str">'token'</span>]);
    
    <span className="token-com">// 2. Sanitize Inputs (FIX)</span>
    $name = <span className="text-indigo-400">filter_var</span>($_POST[<span className="token-str">'name'</span>], FILTER_SANITIZE_STRING);
    $email = <span className="text-indigo-400">filter_var</span>($_POST[<span className="token-str">'email'</span>], FILTER_VALIDATE_EMAIL);

    <span className="token-key">if</span> ($score &gt;= 0.5 &amp;&amp; $email) {
        <span className="token-com">// Send Email...</span>
    }
}
</pre>
</div>
<div className="absolute bottom-4 right-4">
<button className="flex items-center gap-2 rounded bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-indigo-500">
<iconify-icon icon="solar:play-circle-linear"></iconify-icon>
                                Appliquer Patch
                            </button>
</div>
</div>
</div>
<div className="h-px w-full bg-slate-800/60"></div>

<div className="grid gap-6 lg:grid-cols-2">
<div>
<h2 className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-200">
<span className="flex h-6 w-6 items-center justify-center rounded bg-amber-500/10 text-amber-500">
<iconify-icon icon="solar:gallery-wide-linear" width="14"></iconify-icon>
</span>
                            2. Optimisation Images (LCP)
                        </h2>
<div className="rounded-xl border border-slate-800 bg-slate-900/20 p-5">
<div className="flex items-center justify-between mb-6">
<div>
<p className="text-xs text-slate-500">Poids Total Home</p>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-slate-200">4.2 MB</span>
<iconify-icon className="text-slate-600" icon="solar:arrow-right-linear"></iconify-icon>
<span className="text-2xl font-semibold text-emerald-400">0.8 MB</span>
</div>
</div>
<button className="rounded-full bg-slate-800 px-3 py-1 text-[10px] font-medium text-slate-300 border border-slate-700">Conversion WebP</button>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-2 rounded bg-slate-900/50 border border-slate-800/50">
<div className="flex items-center gap-3">
<div className="h-8 w-12 rounded bg-slate-800 flex items-center justify-center text-[10px] text-slate-600">JPG</div>
<div className="flex flex-col">
<span className="text-xs text-slate-300">hero-banner.jpg</span>
<span className="text-[10px] text-rose-400">2.1 MB</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-[10px] text-emerald-400">→ 140 KB</span>
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
<div className="flex items-center justify-between p-2 rounded bg-slate-900/50 border border-slate-800/50">
<div className="flex items-center gap-3">
<div className="h-8 w-12 rounded bg-slate-800 flex items-center justify-center text-[10px] text-slate-600">PNG</div>
<div className="flex flex-col">
<span className="text-xs text-slate-300">laser-machine.png</span>
<span className="text-[10px] text-rose-400">1.8 MB</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-[10px] text-emerald-400">→ 95 KB</span>
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div>
<h2 className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-200">
<span className="flex h-6 w-6 items-center justify-center rounded bg-indigo-500/10 text-indigo-400">
<iconify-icon icon="solar:server-square-linear" width="14"></iconify-icon>
</span>
                            3. En-têtes HTTP (Serveur)
                        </h2>
<div className="rounded-xl border border-slate-800 bg-[#0B0E14] p-0 h-full">
<div className="flex items-center justify-between border-b border-slate-800 px-4 py-2">
<span className="text-[10px] font-medium text-slate-500">.htaccess / nginx.conf</span>
</div>
<div className="p-4">
<p className="mb-3 text-[10px] text-slate-500">Ajoutez ces directives pour prévenir les attaques XSS et Clickjacking.</p>
<pre className="font-mono text-[11px] leading-6 text-slate-300">
<span className="token-com"># Security Headers</span>
<span className="token-key">Header</span> set X-Content-Type-Options <span className="token-str">"nosniff"</span>
<span className="token-key">Header</span> set X-Frame-Options <span className="token-str">"SAMEORIGIN"</span>
<span className="token-key">Header</span> set X-XSS-Protection <span className="token-str">"1; mode=block"</span>
<span className="token-key">Header</span> set Strict-Transport-Security <span className="token-str">"max-age=31536000"</span>
</pre>
</div>
</div>
</div>
</div>
<div className="h-px w-full bg-slate-800/60"></div>

<div>
<h2 className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-200">
<span className="flex h-6 w-6 items-center justify-center rounded bg-blue-500/10 text-blue-400">
<iconify-icon icon="solar:smartphone-linear" width="14"></iconify-icon>
</span>
                        4. Refonte Module Réservation (Mobile)
                    </h2>
<div className="flex flex-col gap-6 lg:flex-row">
<div className="flex-1 space-y-4 text-sm text-slate-400">
<p>Le problème actuel est un tableau non responsive qui dépasse de l'écran (overflow). La solution transforme le tableau en une liste de cartes verticales sur mobile.</p>
<div className="grid grid-cols-2 gap-4">
<div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
<p className="text-[10px] font-semibold uppercase tracking-wider text-rose-500">Avant</p>
<div className="mt-2 h-20 w-full overflow-hidden rounded bg-slate-950 opacity-50 relative">
<div className="absolute inset-0 grid grid-cols-4 gap-1 p-1">
<div className="bg-slate-800"></div><div className="bg-slate-800"></div><div className="bg-slate-800"></div><div className="bg-slate-800 w-[200%]"></div>
</div>
</div>
<p className="mt-2 text-[10px] text-slate-500">Scroll horizontal forcé</p>
</div>
<div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
<p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-500">Solution</p>
<div className="mt-2 h-20 w-full rounded bg-slate-950 relative p-2 flex flex-col gap-1">
<div className="h-4 w-full rounded bg-slate-800"></div>
<div className="h-4 w-full rounded bg-slate-800"></div>
<div className="h-4 w-full rounded bg-slate-800"></div>
</div>
<p className="mt-2 text-[10px] text-slate-500">Layout Vertical (Stack)</p>
</div>
</div>
<div className="mt-4 flex items-center gap-3">
<button className="rounded-md bg-white px-3 py-2 text-xs font-medium text-slate-950 hover:bg-slate-200">Voir la maquette live</button>
<div className="flex items-center gap-2">
<div className="relative inline-block w-8 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 appearance-none cursor-pointer border-slate-600 checked:border-indigo-500 transition-all duration-300" id="toggleCSS" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-slate-700 cursor-pointer" htmlFor="toggleCSS"></label>
</div>
<span className="text-xs text-slate-400">CSS Grid activé</span>
</div>
</div>
</div>

<div className="flex-1 rounded-xl border border-slate-800 bg-[#0B0E14] p-0">
<div className="flex items-center justify-between border-b border-slate-800 px-4 py-2">
<span className="text-[10px] font-medium text-slate-500">booking.css (Media Query)</span>
</div>
<div className="p-4">
<pre className="font-mono text-[11px] leading-6 text-slate-300">
@media (<span className="token-str">max-width: 768px</span>) {
  .booking-table thead {
    <span className="token-key">display</span>: none;
  }
  .booking-table tr {
    <span className="token-key">display</span>: flex;
    <span className="token-key">flex-direction</span>: column;
    <span className="token-key">border</span>: 1px solid #e2e8f0;
    <span className="token-key">margin-bottom</span>: 1rem;
    <span className="token-key">padding</span>: 1rem;
  }
}
</pre>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
