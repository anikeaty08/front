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



      document.body.style.fontFamily = "'Inter', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'";
    
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
      
<div className="relative overflow-hidden">

<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"></div>
<div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl"></div>
</div>

<header className="relative">
<div className="mx-auto max-w-7xl px-6 md:px-8">
<div className="flex items-center justify-between py-6">
<a className="flex items-center gap-2" href="#">
<div className="grid h-8 w-8 place-items-center rounded-md bg-zinc-900 ring-1 ring-white/10">
<span className="text-sm font-semibold tracking-tighter">LN</span>
</div>
<span className="text-lg font-semibold tracking-tight">lingua</span>
</a>
<nav className="hidden items-center gap-6 md:flex">
<a className="text-sm font-medium text-zinc-300 hover:text-white transition" href="#features">Features</a>
<a className="text-sm font-medium text-zinc-300 hover:text-white transition" href="#solutions">Solutions</a>
<a className="text-sm font-medium text-zinc-300 hover:text-white transition" href="#integrations">Integrations</a>
<a className="text-sm font-medium text-zinc-300 hover:text-white transition" href="#pricing">Pricing</a>
</nav>
<div className="hidden items-center gap-3 md:flex">
<a className="text-sm font-medium text-zinc-300 hover:text-white transition" href="#">Sign in</a>
<a className="inline-flex items-center rounded-md bg-white/5 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
                Book a demo
              </a>
<a className="inline-flex items-center rounded-md bg-gradient-to-tr from-indigo-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:from-indigo-400 hover:to-fuchsia-400 transition" href="#">
                Try it free
              </a>
</div>
<button aria-label="Open menu" className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10 md:hidden">
<iconify-icon className="h-5 w-5" icon="solar:hamburger-menu-linear" style={{'--svg-stroke-width': '1.5'}}></iconify-icon>
              Menu
            </button>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 md:px-8">
<div className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16">
<div>
<div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
<span className="inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
<span className="text-xs font-medium text-zinc-300">The all-in-one multilingual platform for modern teams</span>
</div>
<h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Language shouldn’t block your business growth.
              </h1>
<p className="mt-4 text-base font-normal text-zinc-300">
                Real-time multilingual calls, instant translation, and effortless video creation—so your customers speak their language, and you speak yours.
              </p>
<div className="mt-6 flex flex-col items-start gap-3 sm:flex-row">
<a className="inline-flex items-center gap-2 rounded-md bg-gradient-to-tr from-indigo-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:from-indigo-400 hover:to-fuchsia-400 transition" href="#">
                  Get started
                  <iconify-icon className="h-5 w-5" icon="solar:arrow-right-linear" style={{'--svg-stroke-width': '1.5'}}></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 rounded-md bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
                  Book a demo
                  <iconify-icon className="h-5 w-5" icon="solar:calendar-linear" style={{'--svg-stroke-width': '1.5'}}></iconify-icon>
</a>
</div>

<div className="mt-10 grid gap-4 sm:grid-cols-3" id="solutions">
<div className="rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-2">
<iconify-icon className="h-5 w-5 text-indigo-400" icon="solar:bag-3-linear" style={{'--svg-stroke-width': '1.5'}}></iconify-icon>
<span className="text-sm font-semibold text-white">Sales Teams</span>
</div>
<p className="mt-2 text-sm text-zinc-300">
                    You lose deals because prospects aren't comfortable speaking English.
                  </p>
</div>
<div className="rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-2">
<iconify-icon className="h-5 w-5 text-indigo-400" icon="solar:lifebuoy-linear" style={{'--svg-stroke-width': '1.5'}}></iconify-icon>
<span className="text-sm font-semibold text-white">Support Teams</span>
</div>
<p className="mt-2 text-sm text-zinc-300">
                    You spend hours manually translating tickets or creating help videos.
                  </p>
</div>
<div className="rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-2">
<iconify-icon className="h-5 w-5 text-indigo-400" icon="solar:cup-star-linear" style={{'--svg-stroke-width': '1.5'}}></iconify-icon>
<span className="text-sm font-semibold text-white">CS Teams</span>
</div>
<p className="mt-2 text-sm text-zinc-300">
                    You juggle between Google Translate and bilingual colleagues to explain your product.
                  </p>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-xl bg-gradient-to-b from-white/5 to-white/0 p-6 ring-1 ring-white/10">
<div className="absolute -inset-x-6 -top-6 -bottom-6 rounded-xl bg-gradient-to-tr from-indigo-500/10 via-fuchsia-500/10 to-transparent blur-2xl"></div>
<div className="relative grid gap-6">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
<iconify-icon className="h-4 w-4 text-indigo-400" icon="solar:users-group-rounded-linear" style={{'--svg-stroke-width': '1.5'}}></iconify-icon>
<span className="text-xs font-medium text-zinc-300">Team Collaboration</span>
</div>
<div className="inline-flex items-center gap-3">
<span className="text-xs font-medium text-zinc-400">Live</span>
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
</div>
</div>

<div className="rounded-lg bg-zinc-900 p-4 ring-1 ring-white/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="grid h-8 w-8 place-items-center rounded-full bg-indigo-500/20 ring-1 ring-indigo-400/30">
<span className="text-xs font-semibold text-indigo-200 tracking-tight">EN</span>
</div>
<div>
<p className="text-sm font-semibold text-white tracking-tight">You</p>
<p className="text-xs text-zinc-400">Speaking English</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="grid h-8 w-8 place-items-center rounded-full bg-fuchsia-500/20 ring-1 ring-fuchsia-400/30">
<span className="text-xs font-semibold text-fuchsia-200 tracking-tight">ES</span>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-white tracking-tight">Customer</p>
<p className="text-xs text-zinc-400">Hears Spanish</p>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-md bg-white/5 p-3 ring-1 ring-white/10">
<div className="flex items-center gap-2">
<iconify-icon className="h-5 w-5 text-indigo-400" icon="solar:microphone-2-linear" style={{'--svg-stroke-width': '1.5'}}></iconify-icon>
<span className="text-xs font-medium text-zinc-300">Natural voice</span>
</div>
</div>
<div className="rounded-md bg-white/5 p-3 ring-1 ring-white/10">
<div className="flex items-center gap-2">
<iconify-icon className="h-5 w-5 text-indigo-400" icon="solar:translate-linear" style={{'--svg-stroke-width': '1.5'}}></iconify-icon>
<span className="text-xs font-medium text-zinc-300">Instant translation</span>
</div>
</div>
<div className="rounded-md bg-white/5 p-3 ring-1 ring-white/10">
<div className="flex items-center gap-2">
<iconify-icon className="h-5 w-5 text-indigo-400" icon="solar:shield-check-linear" style={{'--svg-stroke-width': '1.5'}}></iconify-icon>
<span className="text-xs font-medium text-zinc-300">Zero friction</span>
</div>
</div>
</div>
</div>

<div className="rounded-lg bg-zinc-900 p-4 ring-1 ring-white/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="h-5 w-5 text-fuchsia-400" icon="solar:video-frame-linear" style={{'--svg-stroke-width': '1.5'}}></iconify-icon>
<span className="text-sm font-semibold text-white tracking-tight">Multilingual video creation</span>
</div>
<span className="text-xs text-zinc-400">With just a few clicks</span>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-md bg-white/5 p-3 ring-1 ring-white/10">
<div className="flex items-center gap-2">
<iconify-icon className="h-5 w-5 text-fuchsia-400" icon="solar:wand-linear" style={{'--svg-stroke-width': '1.5'}}></iconify-icon>
<span className="text-xs font-medium text-zinc-300">Translate your demos</span>
</div>
</div>
<div className="rounded-md bg-white/5 p-3 ring-1 ring-white/10">
<div className="flex items-center gap-2">
<iconify-icon className="h-5 w-5 text-fuchsia-400" icon="solar:document-add-linear" style={{'--svg-stroke-width': '1.5'}}></iconify-icon>
<span className="text-xs font-medium text-zinc-300">Onboarding &amp; support content</span>
</div>
</div>
<div className="rounded-md bg-white/5 p-3 ring-1 ring-white/10">
<div className="flex items-center gap-2">
<iconify-icon className="h-5 w-5 text-fuchsia-400" icon="solar:voice-square-linear" style={{'--svg-stroke-width': '1.5'}}></iconify-icon>
<span className="text-xs font-medium text-zinc-300">Authentic human voices</span>
</div>
</div>
<div className="rounded-md bg-white/5 p-3 ring-1 ring-white/10">
<div className="flex items-center gap-2">
<iconify-icon className="h-5 w-5 text-fuchsia-400" icon="solar:globe-linear" style={{'--svg-stroke-width': '1.5'}}></iconify-icon>
<span className="text-xs font-medium text-zinc-300">Ready for international markets</span>
</div>
</div>
</div>
</div>
<p className="text-center text-xs text-zinc-400">Team Collaboration Illustration</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="gallery">
<div className="mx-auto max-w-7xl px-6 md:px-8">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white">Échanges au-delà de la barrière de la langue</h2>
<p className="mt-1 text-sm text-zinc-300">Des scènes réelles illustrant des conversations fluides grâce à la traduction.</p>
</div>
</div>
<div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

<div className="overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
<div className="relative aspect-video">
<img alt="Réunion vidéo entre interlocuteurs anglophone et hispanophone" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-zinc-950/0 to-transparent"></div>
<div className="absolute left-3 top-3 flex items-center gap-2">
<span className="inline-flex items-center rounded-full bg-indigo-500/10 px-2.5 py-1 text-xs font-medium text-indigo-200 ring-1 ring-indigo-500/20 tracking-tight">EN</span>
<iconify-icon className="h-4 w-4 text-zinc-300" icon="solar:translate-linear" style={{'--svg-stroke-width': '1.5'}}></iconify-icon>
<span className="inline-flex items-center rounded-full bg-fuchsia-500/10 px-2.5 py-1 text-xs font-medium text-fuchsia-200 ring-1 ring-fuchsia-500/20 tracking-tight">ES</span>
</div>
<div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-md bg-white/5 px-2.5 py-1 ring-1 ring-white/10">
<iconify-icon className="h-4 w-4 text-emerald-300" icon="solar:microphone-2-linear" style={{'--svg-stroke-width': '1.5'}}></iconify-icon>
<span className="text-xs font-medium text-zinc-200">Traduction en direct</span>
</div>
</div>
<div className="p-4">
<p className="text-sm font-semibold text-white tracking-tight">Appel commercial EN → ES</p>
<p className="mt-1 text-xs text-zinc-400">Le prospect entend l’espagnol pendant que vous parlez anglais.</p>
</div>
</div>

<div className="overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
<div className="relative aspect-video">
<img alt="Collaboration d'équipe multilingue" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-zinc-950/0 to-transparent"></div>
<div className="absolute left-3 top-3 flex items-center gap-2">
<span className="inline-flex items-center rounded-full bg-indigo-500/10 px-2.5 py-1 text-xs font-medium text-indigo-200 ring-1 ring-indigo-500/20 tracking-tight">FR</span>
<iconify-icon className="h-4 w-4 text-zinc-300" icon="solar:translate-linear" style={{'--svg-stroke-width': '1.5'}}></iconify-icon>
<span className="inline-flex items-center rounded-full bg-fuchsia-500/10 px-2.5 py-1 text-xs font-medium text-fuchsia-200 ring-1 ring-fuchsia-500/20 tracking-tight">DE</span>
</div>
<div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-md bg-white/5 px-2.5 py-1 ring-1 ring-white/10">
<iconify-icon className="h-4 w-4 text-indigo-300" icon="solar:chat-round-dots-linear" style={{'--svg-stroke-width': '1.5'}}></iconify-icon>
<span className="text-xs font-medium text-zinc-200">Sous-titres automatiques</span>
</div>
</div>
<div className="p-4">
<p className="text-sm font-semibold text-white tracking-tight">Atelier produit FR ↔ DE</p>
<p className="mt-1 text-xs text-zinc-400">Les idées circulent, la barrière linguistique disparaît.</p>
</div>
</div>

<div className="overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
<div className="relative aspect-video">
<img alt="Appel vidéo international avec traduction" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1525186402429-b4ff38bedbec?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-zinc-950/0 to-transparent"></div>
<div className="absolute left-3 top-3 flex items-center gap-2">
<span className="inline-flex items-center rounded-full bg-indigo-500/10 px-2.5 py-1 text-xs font-medium text-indigo-200 ring-1 ring-indigo-500/20 tracking-tight">JP</span>
<iconify-icon className="h-4 w-4 text-zinc-300" icon="solar:translate-linear" style={{'--svg-stroke-width': '1.5'}}></iconify-icon>
<span className="inline-flex items-center rounded-full bg-fuchsia-500/10 px-2.5 py-1 text-xs font-medium text-fuchsia-200 ring-1 ring-fuchsia-500/20 tracking-tight">EN</span>
</div>
<div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-md bg-white/5 px-2.5 py-1 ring-1 ring-white/10">
<iconify-icon className="h-4 w-4 text-fuchsia-300" icon="solar:voice-square-linear" style={{'--svg-stroke-width': '1.5'}}></iconify-icon>
<span className="text-xs font-medium text-zinc-200">Voix naturelles</span>
</div>
</div>
<div className="p-4">
<p className="text-sm font-semibold text-white tracking-tight">Support client JP → EN</p>
<p className="mt-1 text-xs text-zinc-400">Assistance précise, même à l’international.</p>
</div>
</div>

<div className="overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
<div className="relative aspect-video">
<img alt="Discussion informelle entre collègues de langues différentes" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-zinc-950/0 to-transparent"></div>
<div className="absolute left-3 top-3 flex items-center gap-2">
<span className="inline-flex items-center rounded-full bg-indigo-500/10 px-2.5 py-1 text-xs font-medium text-indigo-200 ring-1 ring-indigo-500/20 tracking-tight">PT</span>
<iconify-icon className="h-4 w-4 text-zinc-300" icon="solar:translate-linear" style={{'--svg-stroke-width': '1.5'}}></iconify-icon>
<span className="inline-flex items-center rounded-full bg-fuchsia-500/10 px-2.5 py-1 text-xs font-medium text-fuchsia-200 ring-1 ring-fuchsia-500/20 tracking-tight">AR</span>
</div>
<div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-md bg-white/5 px-2.5 py-1 ring-1 ring-white/10">
<iconify-icon className="h-4 w-4 text-emerald-300" icon="solar:shield-check-linear" style={{'--svg-stroke-width': '1.5'}}></iconify-icon>
<span className="text-xs font-medium text-zinc-200">Confiance &amp; sécurité</span>
</div>
</div>
<div className="p-4">
<p className="text-sm font-semibold text-white tracking-tight">Conversation informelle PT ↔ AR</p>
<p className="mt-1 text-xs text-zinc-400">Rapprochez les équipes avec des échanges naturels.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="features">
<div className="mx-auto max-w-7xl px-6 md:px-8">
<div className="grid gap-10 lg:grid-cols-2">

<div className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-start justify-between">
<div>
<div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1 ring-1 ring-indigo-500/20">
<iconify-icon className="h-4 w-4 text-indigo-400" icon="solar:call-linear" style={{'--svg-stroke-width': '1.5'}}></iconify-icon>
<span className="text-xs font-medium text-indigo-200">Real-time multilingual calls</span>
</div>
<h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">Instant translation with your natural voice cloned</h2>
<p className="mt-2 text-sm text-zinc-300">Your customers speak their language, you speak yours. Conversation stays natural and secure.</p>
</div>
</div>
<div className="mt-5 rounded-lg bg-zinc-900 p-4 ring-1 ring-white/10" id="integrations">
<div className="flex items-center gap-2">
<iconify-icon className="h-5 w-5 text-indigo-400" icon="solar:plug-circle-linear" style={{'--svg-stroke-width': '1.5'}}></iconify-icon>
<span className="text-sm font-semibold text-white tracking-tight">Native integration</span>
<span className="text-xs text-zinc-400">Zero friction</span>
</div>
<div className="mt-3 flex flex-wrap items-center gap-2">
<span className="inline-flex items-center rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-200 ring-1 ring-white/10 tracking-tight">Zoom</span>
<span className="inline-flex items-center rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-200 ring-1 ring-white/10 tracking-tight">Meet</span>
<span className="inline-flex items-center rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-200 ring-1 ring-white/10 tracking-tight">Teams</span>
</div>
</div>
</div>

<div className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="inline-flex items-center gap-2 rounded-full bg-fuchsia-500/10 px-3 py-1 ring-1 ring-fuchsia-500/20">
<iconify-icon className="h-4 w-4 text-fuchsia-400" icon="solar:clapperboard-open-linear" style={{'--svg-stroke-width': '1.5'}}></iconify-icon>
<span className="text-xs font-medium text-fuchsia-200">Multilingual video creation</span>
</div>
<h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">Translate your demos, onboarding, or support content automatically</h2>
<p className="mt-2 text-sm text-zinc-300">Produce localized videos with authentic human voices—not synthetic robots.</p>
<div className="mt-5 grid gap-3 sm:grid-cols-2">
<div className="flex items-start gap-3 rounded-lg bg-zinc-900 p-4 ring-1 ring-white/10">
<iconify-icon className="mt-0.5 h-5 w-5 text-fuchsia-400" icon="solar:scroll-text-linear" style={{'--svg-stroke-width': '1.5'}}></iconify-icon>
<div>
<p className="text-sm font-semibold text-white tracking-tight">Script-aware translation</p>
<p className="text-xs text-zinc-400">Keeps product terms and tone intact.</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg bg-zinc-900 p-4 ring-1 ring-white/10">
<iconify-icon className="mt-0.5 h-5 w-5 text-fuchsia-400" icon="solar:gallery-add-linear" style={{'--svg-stroke-width': '1.5'}}></iconify-icon>
<div>
<p className="text-sm font-semibold text-white tracking-tight">Subtitles &amp; overlays</p>
<p className="text-xs text-zinc-400">Auto captions and localized UI text.</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg bg-zinc-900 p-4 ring-1 ring-white/10">
<iconify-icon className="mt-0.5 h-5 w-5 text-fuchsia-400" icon="solar:export-linear" style={{'--svg-stroke-width': '1.5'}}></iconify-icon>
<div>
<p className="text-sm font-semibold text-white tracking-tight">One-click publishing</p>
<p className="text-xs text-zinc-400">Share or download in multiple formats.</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg bg-zinc-900 p-4 ring-1 ring-white/10">
<iconify-icon className="mt-0.5 h-5 w-5 text-fuchsia-400" icon="solar:code-square-linear" style={{'--svg-stroke-width': '1.5'}}></iconify-icon>
<div>
<p className="text-sm font-semibold text-white tracking-tight">Embed anywhere</p>
<p className="text-xs text-zinc-400">Docs, portals, LMS—no friction.</p>
</div>
</div>
</div>
</div>
</div>

<div className="mt-12 overflow-hidden rounded-xl bg-gradient-to-tr from-indigo-500/10 via-fuchsia-500/10 to-transparent ring-1 ring-white/10">
<div className="grid items-center gap-6 p-6 sm:grid-cols-3">
<div className="sm:col-span-2">
<h3 className="text-xl font-semibold tracking-tight text-white">Your customers speak their language, you speak yours.</h3>
<p className="mt-1 text-sm text-zinc-300">Spin up multilingual calls and content in minutes. No new tools to learn.</p>
</div>
<div className="flex items-center gap-3 sm:justify-end">
<a className="inline-flex items-center gap-2 rounded-md bg-white/5 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
                  See it in action
                  <iconify-icon className="h-5 w-5" icon="solar:play-circle-linear" style={{'--svg-stroke-width': '1.5'}}></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 rounded-md bg-gradient-to-tr from-indigo-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:from-indigo-400 hover:to-fuchsia-400 transition" href="#">
                  Start free
                  <iconify-icon className="h-5 w-5" icon="solar:arrow-right-up-linear" style={{'--svg-stroke-width': '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="relative mt-16">
<div className="mx-auto max-w-7xl px-6 md:px-8">
<div className="border-t border-white/10 py-8">
<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
<div className="flex items-center gap-2">
<div className="grid h-7 w-7 place-items-center rounded-md bg-zinc-900 ring-1 ring-white/10">
<span className="text-xs font-semibold tracking-tighter">LN</span>
</div>
<span className="text-sm font-semibold tracking-tight">lingua</span>
</div>
<p className="text-xs text-zinc-400">© 2026. Content ready for international markets.</p>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-zinc-300 hover:text-white transition" href="#">Privacy</a>
<a className="text-xs font-medium text-zinc-300 hover:text-white transition" href="#">Terms</a>
<a className="text-xs font-medium text-zinc-300 hover:text-white transition" href="#">Security</a>
</div>
</div>
</div>
</div>
</footer>
</div>



    </>
  );
}
