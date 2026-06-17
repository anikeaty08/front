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



        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: {
                            DEFAULT: '#055594',
                            50: '#f0f7ff',
                            100: '#e0effe',
                            200: '#bae0fd',
                            300: '#7cc7fb',
                            400: '#36aaf7',
                            500: '#0c8de9',
                            600: '#055594', 
                            700: '#0558b2',
                            800: '#074885',
                            900: '#0b3d6f',
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    letterSpacing: {
                        tighter: '-0.04em',
                        tight: '-0.02em',
                    }
                }
            }
        }
    
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
      




<div className="bg-primary-900 text-white text-xs font-medium py-2.5 px-4 hidden sm:block">
<div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-6">
<span className="flex items-center gap-2 opacity-90 hover:opacity-100 transition cursor-default">
<iconify-icon icon="solar:phone-calling-linear" width="14"></iconify-icon>
                    045-4042054
                </span>
<span className="flex items-center gap-2 opacity-90 hover:opacity-100 transition cursor-default">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
                    Langstraat 11, Schimmert
                </span>
</div>
<div className="flex items-center gap-4 opacity-90">
<span>Ma - Do: 08:15 - 17:00</span>
<span className="h-3 w-px bg-white/20"></span>
<span>Vr: 08:15 - 12:00</span>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

<a className="flex items-center gap-3 group" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded bg-primary-50 text-primary-700 ring-1 ring-primary-100 transition group-hover:bg-primary-600 group-hover:text-white group-hover:ring-primary-600">
<span className="font-bold text-lg leading-none">V</span>
</div>
<div className="flex flex-col">
<span className="text-base font-semibold tracking-tight text-slate-900 leading-tight">TANDARTS VAESSEN</span>
<span className="text-[10px] font-medium tracking-wider text-slate-500 uppercase">Schimmert</span>
</div>
</a>

<div className="hidden items-center gap-1 md:flex">
<a className="rounded-full px-4 py-2 text-sm font-medium text-slate-900 bg-slate-50" href="#">Home</a>
<a className="rounded-full px-4 py-2 text-sm font-medium text-slate-500 transition hover:bg-slate-50 hover:text-primary-600" href="#">Praktijk</a>
<a className="rounded-full px-4 py-2 text-sm font-medium text-slate-500 transition hover:bg-slate-50 hover:text-primary-600" href="#">Team</a>
<a className="rounded-full px-4 py-2 text-sm font-medium text-slate-500 transition hover:bg-slate-50 hover:text-primary-600" href="#">Tarieven</a>
<a className="rounded-full px-4 py-2 text-sm font-medium text-slate-500 transition hover:bg-slate-50 hover:text-primary-600" href="#">Contact</a>
</div>

<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white shadow-sm transition hover:bg-primary-600 hover:shadow-md ring-1 ring-slate-900 hover:ring-primary-600" href="#">
<span>Inschrijven</span>
<iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>

<button className="flex items-center justify-center rounded-md p-2 text-slate-500 hover:bg-slate-100 md:hidden">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<main className="flex-grow">

<section className="relative overflow-hidden bg-white pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-12 lg:grid-cols-2 lg:items-center">

<div className="max-w-2xl relative z-10">
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50/50 px-3 py-1 text-xs font-medium text-primary-700">
<span className="relative flex h-2 w-2">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75"></span>
<span className="relative inline-flex h-2 w-2 rounded-full bg-primary-600"></span>
</span>
                            Nieuwe patiënten welkom
                        </div>
<h1 className="text-4xl font-semibold tracking-tighter text-slate-900 sm:text-5xl lg:text-6xl">
                            Zorg voor uw lach <br className="hidden lg:block"/>
<span className="text-slate-400">in Schimmert.</span>
</h1>
<p className="mt-6 text-lg leading-relaxed text-slate-600">
                            Tandartspraktijk Max Vaessen staat voor persoonlijke aandacht en rustige mondzorg. Wij helpen u graag met een stralend en gezond gebit.
                        </p>
<div className="mt-8 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-medium text-white shadow-[0_1px_2px_rgba(0,0,0,0.08)] transition hover:bg-primary-700 hover:shadow-lg hover:-translate-y-0.5" href="#">
<iconify-icon icon="solar:calendar-add-linear" strokeWidth="1.5" width="18"></iconify-icon>
                                Inschrijven
                            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 hover:text-slate-900" href="#">
                                Meer informatie
                            </a>
</div>

<div className="mt-10 flex items-center gap-4 border-t border-slate-100 pt-6">
<div className="flex -space-x-2 overflow-hidden">
<div className="h-8 w-8 rounded-full ring-2 ring-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500">MV</div>
<div className="h-8 w-8 rounded-full ring-2 ring-white bg-slate-300 flex items-center justify-center text-[10px] font-bold text-slate-600">A</div>
<div className="h-8 w-8 rounded-full ring-2 ring-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400">+</div>
</div>
<div className="text-xs text-slate-500">
<span className="font-semibold text-slate-900">Vertrouwd</span> in de regio.
                            </div>
</div>
</div>

<div className="relative lg:ml-auto">
<div className="relative h-64 overflow-hidden rounded-2xl bg-slate-100 shadow-2xl shadow-slate-200/50 sm:h-80 lg:h-96 lg:w-[110%]">

<img alt="Tandartspraktijk interieur" className="h-full w-full object-cover object-center transition duration-1000 hover:scale-105" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-tr from-primary-900/10 via-transparent to-transparent"></div>

<div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:bottom-8 sm:left-8 sm:right-auto sm:w-64 border border-white/20">
<div className="flex items-start gap-3">
<div className="rounded-full bg-green-100 p-2 text-green-600">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Kwaliteit</p>
<p className="text-xs text-slate-500">Aangesloten bij KNMT &amp; KRT</p>
</div>
</div>
</div>
</div>

<div className="absolute -right-12 -top-12 -z-10 h-64 w-64 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px'}}></div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-slate-50/50">
<div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-slate-100 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-8 lg:border-x lg:border-slate-100">
<a className="group flex flex-col items-start gap-3 bg-white p-8 transition hover:bg-slate-50" href="#">
<iconify-icon className="text-primary-600 transition group-hover:scale-110" icon="solar:calendar-mark-linear" strokeWidth="1.5" width="28"></iconify-icon>
<div>
<h3 className="font-semibold text-slate-900">Afspraak maken</h3>
<p className="mt-1 text-sm text-slate-500">Bel ons of schrijf u in als nieuwe patiënt.</p>
</div>
</a>
<a className="group flex flex-col items-start gap-3 bg-white p-8 transition hover:bg-slate-50" href="#">
<iconify-icon className="text-primary-600 transition group-hover:scale-110" icon="solar:user-heart-rounded-linear" strokeWidth="1.5" width="28"></iconify-icon>
<div>
<h3 className="font-semibold text-slate-900">Angst voor de tandarts?</h3>
<p className="mt-1 text-sm text-slate-500">Wij nemen extra tijd voor uw behandeling.</p>
</div>
</a>
<a className="group flex flex-col items-start gap-3 bg-white p-8 transition hover:bg-slate-50" href="#">
<iconify-icon className="text-primary-600 transition group-hover:scale-110" icon="solar:medical-kit-linear" strokeWidth="1.5" width="28"></iconify-icon>
<div>
<h3 className="font-semibold text-slate-900">Spoedgevallen</h3>
<p className="mt-1 text-sm text-slate-500">Direct hulp bij acute pijnklachten.</p>
</div>
</a>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
<div className="grid gap-12 lg:grid-cols-12">

<aside className="space-y-6 lg:col-span-4 lg:order-2">

<div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
<div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
<h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-500">
<iconify-icon className="text-primary-600" icon="solar:map-point-linear"></iconify-icon> 
                                Contact
                            </h3>
</div>
<div className="p-6">
<p className="font-medium text-slate-900">Tandartspraktijk Max Vaessen</p>
<p className="mt-1 text-sm text-slate-500">Langstraat 11</p>
<p className="text-sm text-slate-500">6333 CC Schimmert</p>
<div className="mt-6 space-y-3">
<a className="flex items-center gap-3 rounded-md border border-slate-100 bg-slate-50/50 p-2 text-sm text-slate-600 transition hover:border-primary-200 hover:bg-primary-50 hover:text-primary-700" href="tel:0454042054">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                                    045-4042054
                                </a>
<a className="flex items-center gap-3 rounded-md border border-slate-100 bg-slate-50/50 p-2 text-sm text-slate-600 transition hover:border-primary-200 hover:bg-primary-50 hover:text-primary-700" href="mailto:info@tandartsvaessen.nl">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
                                    info@tandartsvaessen.nl
                                </a>
</div>
</div>
</div>

<div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
<div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
<h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-500">
<iconify-icon className="text-primary-600" icon="solar:clock-circle-linear"></iconify-icon> 
                                Openingstijden
                            </h3>
</div>
<div className="px-6 py-4">
<table className="w-full text-sm">
<tbody className="divide-y divide-slate-50">
<tr>
<td className="py-2.5 text-slate-600">Maandag</td>
<td className="py-2.5 text-right font-medium text-slate-900">08:15 - 17:00</td>
</tr>
<tr>
<td className="py-2.5 text-slate-600">Dinsdag</td>
<td className="py-2.5 text-right font-medium text-slate-900">08:15 - 17:00</td>
</tr>
<tr>
<td className="py-2.5 text-slate-600">Woensdag</td>
<td className="py-2.5 text-right font-medium text-slate-900">08:15 - 17:00</td>
</tr>
<tr>
<td className="py-2.5 text-slate-600">Donderdag</td>
<td className="py-2.5 text-right font-medium text-slate-900">08:15 - 17:00</td>
</tr>
<tr>
<td className="py-2.5 text-slate-600">Vrijdag</td>
<td className="py-2.5 text-right font-medium text-slate-900">08:15 - 12:00</td>
</tr>
</tbody>
</table>
</div>
</div>
</aside>

<div className="lg:col-span-8 lg:order-1">
<div className="prose prose-slate prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-slate-900 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:text-primary-700">
<h2 className="text-3xl">Welkom in onze praktijk</h2>
<p className="lead text-xl text-slate-500">
                            Wij zijn een moderne praktijk gevestigd in het hart van Schimmert.
                        </p>
<p>
                            Bij Tandartspraktijk Max Vaessen staat de patiënt centraal. Wij begrijpen dat een bezoek aan de tandarts voor sommigen spannend kan zijn. Daarom nemen wij de tijd om u op uw gemak te stellen en uit te leggen wat we doen. Kwaliteit, hygiëne en een persoonlijke benadering zijn onze speerpunten.
                        </p>
<div className="not-prose my-10 grid gap-6 sm:grid-cols-2">
<div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
<div className="mb-3 text-primary-600">
<iconify-icon icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900">Ervaren Team</h4>
<p className="mt-2 text-sm text-slate-500">Ons team bestaat uit deskundige tandartsen en assistenten die regelmatig bijscholen.</p>
</div>
<div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
<div className="mb-3 text-primary-600">
<iconify-icon icon="solar:home-smile-linear" width="32"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900">Moderne Praktijk</h4>
<p className="mt-2 text-sm text-slate-500">Voorzien van de nieuwste apparatuur voor de beste diagnostiek en behandeling.</p>
</div>
</div>
<h3>Inschrijven</h3>
<p>
                            Bent u op zoek naar een tandarts in Schimmert of omgeving? Wij nemen momenteel nieuwe patiënten aan. U kunt zich eenvoudig online inschrijven via het <a href="#">inschrijformulier</a> of telefonisch contact met ons opnemen.
                        </p>
<div className="not-prose mt-8 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4">
<div className="flex gap-3">
<iconify-icon className="shrink-0 text-yellow-600 mt-0.5" icon="solar:bell-linear" width="20"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-yellow-800">Spoedgevallen buiten openingstijden</h4>
<p className="mt-1 text-sm text-yellow-700">
                                        Voor ernstige pijnklachten buiten onze openingstijden kunt u terecht bij de Mondzorg Poli via telefoonnummer <span className="font-semibold">0900-1515</span>.
                                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="h-80 w-full border-y border-slate-200 bg-slate-100 grayscale filter">
<iframe frameborder="0" height="100%" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=nl&amp;q=Langstraat 11, 6333 CC Schimmert&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed" title="Locatie Praktijk" width="100%"></iframe>
</section>
</main>

<footer className="bg-white pt-16 pb-8">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

<div className="space-y-4">
<span className="text-lg font-bold tracking-tight text-slate-900">TANDARTS VAESSEN</span>
<p className="text-sm text-slate-500 leading-relaxed">
                        Uw vertrouwde tandartspraktijk in Schimmert voor complete mondzorg voor het hele gezin.
                    </p>
<div className="flex gap-4 pt-2">

<a className="text-slate-400 hover:text-primary-600 transition" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-primary-600 transition" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="font-semibold text-slate-900 mb-4">Praktijk</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-primary-600 transition" href="#">Over ons</a></li>
<li><a className="hover:text-primary-600 transition" href="#">Behandelingen</a></li>
<li><a className="hover:text-primary-600 transition" href="#">Nieuws</a></li>
<li><a className="hover:text-primary-600 transition" href="#">Vacatures</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-slate-900 mb-4">Patiënt</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-primary-600 transition" href="#">Inschrijven</a></li>
<li><a className="hover:text-primary-600 transition" href="#">Afspraak annuleren</a></li>
<li><a className="hover:text-primary-600 transition" href="#">Tarieven 2024</a></li>
<li><a className="hover:text-primary-600 transition" href="#">Privacyverklaring</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-slate-900 mb-4">Gegevens</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li>Langstraat 11</li>
<li>6333 CC Schimmert</li>
<li className="pt-2"><a className="hover:text-primary-600 font-medium" href="tel:0454042054">045-4042054</a></li>
<li><a className="hover:text-primary-600" href="mailto:info@tandartsvaessen.nl">info@tandartsvaessen.nl</a></li>
</ul>
</div>
</div>
<div className="mt-12 border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2024 Tandartspraktijk Max Vaessen. Alle rechten voorbehouden.</p>
<div className="flex gap-4">
<a className="hover:text-slate-600" href="#">Disclaimer</a>
<a className="hover:text-slate-600" href="#">Cookies</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
