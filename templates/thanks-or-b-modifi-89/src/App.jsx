import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    lucide.createIcons();

    (function () {
      const enBtn = document.getElementById('lang-en');
      const deBtn = document.getElementById('lang-de');
      const footerToggle = document.getElementById('footer-lang-toggle');

      function setLanguage(lang) {
        const isEN = lang === 'en';
        document.querySelectorAll('.lang-en').forEach((el) => {
          el.classList.toggle('hidden', !isEN);
          el.classList.toggle('inline', isEN);
        });
        document.querySelectorAll('.lang-de').forEach((el) => {
          el.classList.toggle('hidden', isEN);
          el.classList.toggle('inline', !isEN);
        });

        if (enBtn && deBtn) {
          if (isEN) {
            enBtn.classList.add('bg-slate-800/90', 'text-slate-50');
            deBtn.classList.remove('bg-slate-800/90');
            deBtn.classList.add('text-slate-300');
          } else {
            deBtn.classList.add('bg-slate-800/90', 'text-slate-50');
            enBtn.classList.remove('bg-slate-800/90');
            enBtn.classList.add('text-slate-300');
          }
        }
      }

      if (enBtn) {
        enBtn.addEventListener('click', () => setLanguage('en'));
      }
      if (deBtn) {
        deBtn.addEventListener('click', () => setLanguage('de'));
      }
      if (footerToggle) {
        footerToggle.addEventListener('click', () => {
          const isCurrentlyENVisible = document.querySelector('.lang-en.inline') !== null;
          setLanguage(isCurrentlyENVisible ? 'de' : 'en');
        });
      }

      setLanguage('en');

      const yearEl = document.getElementById('year');
      if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
      }
    })();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen flex flex-col">

<header className="border-b border-slate-800/70 bg-slate-950/80 backdrop-blur">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-4 gap-4">

<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-sm shadow-sky-500/20">
<div className="h-3 w-3 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-500"></div>
</div>
<div className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">
              Outbound<span className="text-sky-400">Labs</span>
</div>
</div>

<div className="flex items-center gap-3 sm:gap-5">
<nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm text-slate-300">
<a className="hover:text-slate-50 transition-colors" href="#use-cases">
<span className="lang-en inline">Use cases</span>
<span className="lang-de hidden">Use Cases</span>
</a>
<a className="hover:text-slate-50 transition-colors" href="#how-we-work">
<span className="lang-en inline">Process</span>
<span className="lang-de hidden">Prozess</span>
</a>
<a className="hover:text-slate-50 transition-colors" href="#final-cta">
<span className="lang-en inline">Work with us</span>
<span className="lang-de hidden">Zusammenarbeit</span>
</a>
</nav>

<div className="flex items-center rounded-full border border-slate-700/80 bg-slate-900/70 text-xs sm:text-sm shadow-sm shadow-sky-500/10">
<button className="px-3 sm:px-4 py-1.5 rounded-full font-medium tracking-tight transition text-slate-50 bg-slate-800/90" id="lang-en">
                EN
              </button>
<button className="px-3 sm:px-4 py-1.5 rounded-full font-medium tracking-tight transition text-slate-300 hover:text-slate-50" id="lang-de">
                DE
              </button>
</div>

<a className="inline-flex items-center gap-2 rounded-full bg-sky-500/90 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold tracking-tight text-slate-950 shadow-md shadow-sky-500/30 hover:bg-sky-400 transition" href="#final-cta">
<span className="lang-en inline">Book a call</span>
<span className="lang-de hidden">Gespräch buchen</span>
<svg className="h-4 w-4 shrink-0" data-lucide="calendar" strokeWidth="1.5"></svg>
</a>
</div>
</div>
</div>
</header>
<main className="flex-1">

<section className="relative isolate overflow-hidden bg-slate-950">

<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute -top-40 left-10 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl"></div>
<div className="absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl"></div>
<div className="absolute inset-x-0 top-32 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent opacity-40"></div>
</div>
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-14 sm:pt-18 lg:pt-20 pb-16 sm:pb-20 lg:pb-22">
<div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">

<div className="max-w-xl space-y-7">

<div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 shadow-sm shadow-sky-500/10">
<svg className="h-4 w-4 text-sky-400" data-lucide="radar" strokeWidth="1.5"></svg>
<p className="text-xs sm:text-sm font-medium text-slate-300 tracking-tight">
<span className="lang-en inline">B2B outbound &amp; revenue engineering partner</span>
<span className="lang-de hidden">B2B Outbound- &amp; Revenue-Engineering-Partner</span>
</p>
</div>

<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
<span className="lang-en inline">
                  Outbound &amp; sales systems for B2B firms that want predictable growth
                </span>
<span className="lang-de hidden">
                  Outbound- &amp; Sales-Systeme für B2B-Unternehmen mit planbarem Wachstum
                </span>
</h1>

<p className="text-base sm:text-lg text-slate-300 max-w-lg">
<span className="lang-en inline">
                  We design and operate outbound engines that turn complex services, high-value assets and B2B
                  offers into real conversations, deals and revenue.
                </span>
<span className="lang-de hidden">
                  Wir entwickeln und betreiben Outbound-Systeme, die komplexe Dienstleistungen, hochwertige Assets
                  und B2B-Angebote in echte Gespräche, Deals und Umsatz verwandeln.
                </span>
</p>

<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold tracking-tight text-slate-950 shadow-md shadow-sky-500/30 hover:bg-sky-400 transition" href="#final-cta">
<span className="lang-en inline">Book a call</span>
<span className="lang-de hidden">Gespräch buchen</span>
<svg className="h-4 w-4 shrink-0" data-lucide="calendar" strokeWidth="1.5"></svg>
</a>
<button className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-2 text-xs sm:text-sm font-medium tracking-tight text-slate-200 hover:border-slate-500 hover:text-slate-50 transition" type="button">
<svg className="h-4 w-4" data-lucide="play-circle" strokeWidth="1.5"></svg>
<span className="lang-en inline">See how the system works</span>
<span className="lang-de hidden">So funktioniert das System</span>
</button>
</div>
<div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400">
<div className="inline-flex items-center gap-2">
<svg className="h-4 w-4 text-emerald-400" data-lucide="shield-check" strokeWidth="1.5"></svg>
<span className="lang-en inline">Built for advisors, industrial &amp; B2B teams</span>
<span className="lang-de hidden">Für Berater, Industrieunternehmen &amp; B2B-Teams</span>
</div>
<span className="hidden sm:inline text-slate-700">•</span>
<span className="lang-en inline">Avg. 6–12 weeks to first qualified pipeline</span>
<span className="lang-de hidden">Ø 6–12 Wochen bis zur ersten qualifizierten Pipeline</span>
</div>
</div>

<div className="relative">
<div className="grid grid-cols-2 gap-3 sm:gap-4">
<div className="aspect-[4/5] rounded-2xl bg-slate-900/80 border border-sky-500/30 shadow-sm shadow-sky-500/30 overflow-hidden">
<div className="h-full w-full bg-[radial-gradient(circle_at_top,_#38bdf8_0,_#020617_55%)]"></div>
</div>
<div className="aspect-[4/5] rounded-2xl bg-slate-900/80 border border-indigo-500/30 shadow-sm shadow-indigo-500/30 overflow-hidden">
<div className="h-full w-full bg-[radial-gradient(circle_at_top,_#6366f1_0,_#020617_55%)]"></div>
</div>
<div className="aspect-[4/5] rounded-2xl bg-slate-900/80 border border-emerald-500/30 shadow-sm shadow-emerald-500/30 overflow-hidden">
<div className="h-full w-full bg-[radial-gradient(circle_at_top,_#22c55e_0,_#020617_55%)]"></div>
</div>
<div className="aspect-[4/5] rounded-2xl bg-slate-900/80 border border-slate-700/70 flex flex-col justify-between p-4 sm:p-5 shadow-sm shadow-sky-500/20">
<div className="space-y-3">
<p className="text-xs font-medium text-slate-400 tracking-tight">
<span className="lang-en inline">Outbound snapshot</span>
<span className="lang-de hidden">Outbound Snapshot</span>
</p>
<div className="space-y-2">
<div className="flex items-center justify-between text-xs text-slate-300">
<span>SQLs</span>
<span className="font-semibold text-slate-50 tracking-tight">32</span>
</div>
<div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-2/3 rounded-full bg-gradient-to-r from-sky-400 to-emerald-400"></div>
</div>
<div className="flex items-center justify-between text-xs text-slate-300">
<span>Win rate</span>
<span className="font-semibold text-emerald-400 tracking-tight">27%</span>
</div>
</div>
</div>
<div className="flex items-center justify-between text-[0.7rem] text-slate-400">
<span className="lang-en inline">Live revenue view</span>
<span className="lang-de hidden">Live-Umsatzansicht</span>
<svg className="h-4 w-4 text-sky-400" data-lucide="activity" strokeWidth="1.5"></svg>
</div>
</div>
</div>
</div>
</div>

<div className="mt-10 border-t border-slate-800/80 pt-6">
<div className="flex flex-wrap items-center gap-3 sm:gap-4 justify-between">
<p className="text-xs sm:text-sm text-slate-500">
<span className="lang-en inline">Trusted by B2B teams across advisory, industrial and services.</span>
<span className="lang-de hidden">Vertraut von B2B-Teams in Beratung, Industrie und Dienstleistungen.</span>
</p>
<div className="flex flex-wrap gap-3 sm:gap-5 text-[0.7rem] sm:text-xs text-slate-500 uppercase">
<span className="rounded-full border border-slate-800/90 px-3 py-1 bg-slate-900/60">Advisory</span>
<span className="rounded-full border border-slate-800/90 px-3 py-1 bg-slate-900/60">Industrial</span>
<span className="rounded-full border border-slate-800/90 px-3 py-1 bg-slate-900/60">Tech &amp; SaaS</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 text-slate-900">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-18">
<div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] items-start">

<div className="space-y-4">
<p className="uppercase text-xs font-medium tracking-tight text-slate-500">
                &lt; className="lang-en inline"&gt;About
<span className="lang-de hidden">Über</span>
</p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-950">
<span className="lang-en inline">Who we work with</span>
<span className="lang-de hidden">Zielkunden</span>
</h2>
<p className="text-sm sm:text-base text-slate-600">
<span className="lang-en inline">We work with B2B firms that:</span>
<span className="lang-de hidden">Wir arbeiten mit B2B-Unternehmen, die:</span>
</p>
</div>

<div className="space-y-5">
<ul className="space-y-3 text-sm sm:text-base text-slate-900">
<li className="flex gap-3">
<div className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500"></div>
<span className="lang-en inline">sell complex services or high-value offerings</span>
<span className="lang-de hidden">
                    komplexe Dienstleistungen oder hochwertige Angebote verkaufen
                  </span>
</li>
<li className="flex gap-3">
<div className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500"></div>
<span className="lang-en inline">
                    operate in advisory, industrial or professional environments
                  </span>
<span className="lang-de hidden">
                    in beratenden, industriellen oder professionellen Umfeldern tätig sind
                  </span>
</li>
<li className="flex gap-3">
<div className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500"></div>
<span className="lang-en inline">
                    rely heavily on manual sales or founder-led outreach
                  </span>
<span className="lang-de hidden">
                    stark auf manuellen Vertrieb oder Founder-Sales angewiesen sind
                  </span>
</li>
<li className="flex gap-3">
<div className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500"></div>
<span className="lang-en inline">
                    want structure, scalability and predictability
                  </span>
<span className="lang-de hidden">
                    Struktur, Skalierbarkeit und Planbarkeit suchen
                  </span>
</li>
</ul>
<p className="text-sm sm:text-base text-slate-600 pt-1">
<span className="lang-en inline">
                  This includes advisors, service firms, industrial companies and B2B teams.
                </span>
<span className="lang-de hidden">
                  Dazu zählen Berater, Dienstleister, Industrieunternehmen und B2B-Teams.
                </span>
</p>
</div>
</div>
</div>
</section>

<section className="bg-slate-950 text-slate-50">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-18">
<div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] items-start">

<div className="space-y-4">
<p className="uppercase text-xs font-medium tracking-tight text-slate-400">
<span className="lang-en inline">Services</span>
<span className="lang-de hidden">Leistungen</span>
</p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
<span className="lang-en inline">What we do</span>
<span className="lang-de hidden">Was wir machen</span>
</h2>
<p className="text-sm sm:text-base text-slate-400">
<span className="lang-en inline">OutboundLabs is a revenue engineering partner.</span>
<span className="lang-de hidden">OutboundLabs ist ein Revenue-Engineering-Partner.</span>
</p>
</div>

<div className="space-y-6">
<p className="text-sm sm:text-base text-slate-300">
<span className="lang-en inline">
                  We design, build and operate outbound and sales systems that:
                </span>
<span className="lang-de hidden">
                  Wir konzipieren, bauen und betreiben Outbound- und Sales-Systeme, die:
                </span>
</p>
<ul className="space-y-3 text-sm sm:text-base">
<li className="flex gap-3">
<div className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500"></div>
<span className="lang-en inline">identify the right buyers</span>
<span className="lang-de hidden">die richtigen Käufer identifizieren</span>
</li>
<li className="flex gap-3">
<div className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500"></div>
<span className="lang-en inline">approach them directly</span>
<span className="lang-de hidden">diese direkt ansprechen</span>
</li>
<li className="flex gap-3">
<div className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500"></div>
<span className="lang-en inline">create qualified conversations</span>
<span className="lang-de hidden">qualifizierte Gespräche erzeugen</span>
</li>
<li className="flex gap-3">
<div className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500"></div>
<span className="lang-en inline">turn outreach into measurable revenue</span>
<span className="lang-de hidden">Outreach in messbaren Umsatz verwandeln</span>
</li>
</ul>
<div className="grid gap-4 sm:grid-cols-3 pt-2">
<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
<p className="text-xs font-medium text-slate-400 uppercase tracking-tight">
<span className="lang-en inline">Signals</span>
<span className="lang-de hidden">Signale</span>
</p>
<p className="mt-2 text-sm sm:text-base font-medium">
<span className="lang-en inline">Buyer-intent driven targeting</span>
<span className="lang-de hidden">Targeting nach Buyer-Intent</span>
</p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
<p className="text-xs font-medium text-slate-400 uppercase tracking-tight">
<span className="lang-en inline">Systems</span>
<span className="lang-de hidden">Systeme</span>
</p>
<p className="mt-2 text-sm sm:text-base font-medium">
<span className="lang-en inline">Structured outbound playbooks</span>
<span className="lang-de hidden">Strukturierte Outbound-Playbooks</span>
</p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
<p className="text-xs font-medium text-slate-400 uppercase tracking-tight">
<span className="lang-en inline">Revenue</span>
<span className="lang-de hidden">Umsatz</span>
</p>
<p className="mt-2 text-sm sm:text-base font-medium">
<span className="lang-en inline">Live pipeline &amp; ROI visibility</span>
<span className="lang-de hidden">Live-Pipeline &amp; ROI-Transparenz</span>
</p>
</div>
</div>
<div className="space-y-1 text-sm sm:text-base text-slate-300 pt-1">
<p>
<span className="lang-en inline">No theory.</span>
<span className="lang-de hidden">Keine Theorie.</span>
</p>
<p>
<span className="lang-en inline">No vanity metrics.</span>
<span className="lang-de hidden">Keine Vanity Metrics.</span>
</p>
<p>
<span className="lang-en inline">Only conversations and outcomes.</span>
<span className="lang-de hidden">Nur Ergebnisse.</span>
</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 text-slate-900" id="use-cases">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-18">
<div className="flex flex-col gap-4 mb-8">
<div className="flex items-center justify-between gap-4">
<div>
<p className="uppercase text-xs font-medium tracking-tight text-slate-500">
<span className="lang-en inline">Services</span>
<span className="lang-de hidden">Leistungen</span>
</p>
<h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-950">
<span className="lang-en inline">Use cases</span>
<span className="lang-de hidden">Use Cases</span>
</h2>
</div>
<button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-xs sm:text-sm text-slate-700 hover:border-slate-300 hover:bg-white transition">
<svg className="h-4 w-4" data-lucide="sparkles" strokeWidth="1.5"></svg>
<span className="lang-en inline">See examples</span>
<span className="lang-de hidden">Beispiele ansehen</span>
</button>
</div>
<p className="text-sm sm:text-base text-slate-600 max-w-2xl">
<span className="lang-en inline">
                Clear outbound and sales systems for different kinds of B2B revenue.
              </span>
<span className="lang-de hidden">
                Klare Outbound- und Sales-Systeme für unterschiedliche Arten von B2B-Umsatz.
              </span>
</p>
</div>
<div className="grid gap-6 lg:grid-cols-3">

<article className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
<div className="space-y-3">
<div className="flex items-center gap-2 text-xs font-medium text-slate-500">
<div className="h-6 w-6 rounded-full bg-sky-50 flex items-center justify-center">
<svg className="h-3.5 w-3.5 text-sky-500" data-lucide="radar" strokeWidth="1.5"></svg>
</div>
<span className="uppercase tracking-tight">
<span className="lang-en inline">Use case 1</span>
<span className="lang-de hidden">Use Case 1</span>
</span>
</div>
<h3 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-950">
<span className="lang-en inline">Outbound revenue engine</span>
<span className="lang-de hidden">Outbound Revenue Engine</span>
</h3>
<p className="text-xs sm:text-sm text-slate-500">
<span className="lang-en inline">For B2B service firms and advisors.</span>
<span className="lang-de hidden">Für B2B-Dienstleister und Berater.</span>
</p>
<p className="text-sm sm:text-base text-slate-700">
<span className="lang-en inline">
                    We build outbound systems that consistently create qualified conversations – without relying on
                    referrals or manual prospecting.
                  </span>
<span className="lang-de hidden">
                    Wir bauen Outbound-Systeme, die kontinuierlich qualifizierte Gespräche erzeugen – ohne
                    Abhängigkeit von Empfehlungen oder manuellen Vertrieb.
                  </span>
</p>
</div>
<div className="mt-4 flex items-center justify-between text-[0.75rem] text-slate-500">
<span className="lang-en inline">From founder-led to system-led pipeline.</span>
<span className="lang-de hidden">Von Founder-Sales zu systematischer Pipeline.</span>
<svg className="h-4 w-4" data-lucide="arrow-right" strokeWidth="1.5"></svg>
</div>
</article>

<article className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
<div className="space-y-3">
<div className="flex items-center gap-2 text-xs font-medium text-slate-500">
<div className="h-6 w-6 rounded-full bg-emerald-50 flex items-center justify-center">
<svg className="h-3.5 w-3.5 text-emerald-500" data-lucide="box" strokeWidth="1.5"></svg>
</div>
<span className="uppercase tracking-tight">
<span className="lang-en inline">Use case 2</span>
<span className="lang-de hidden">Use Case 2</span>
</span>
</div>
<h3 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-950">
<span className="lang-en inline">High-value asset sales via outbound</span>
<span className="lang-de hidden">High-Value Asset Sales via Outbound</span>
</h3>
<p className="text-xs sm:text-sm text-slate-500">
<span className="lang-en inline">
                    When products or assets don’t sell themselves, outbound becomes the sales channel.
                  </span>
<span className="lang-de hidden">
                    Wenn sich Produkte oder Assets nicht von selbst verkaufen, wird Outbound zum Vertriebskanal.
                  </span>
</p>
<p className="text-sm sm:text-base text-slate-700">
<span className="lang-en inline">
                    We support companies selling industrial machinery, production lines, specialized equipment and
                    unique B2B assets (500k+).
                  </span>
<span className="lang-de hidden">
                    Wir unterstützen Unternehmen beim Verkauf von Industriemaschinen, Produktionslinien,
                    Spezialanlagen und hochwertigen B2B-Assets (500k+).
                  </span>
</p>
</div>
<div className="mt-4 flex items-center justify-between text-[0.75rem] text-slate-500">
<span className="lang-en inline">Complex, low-volume, high-ticket deals.</span>
<span className="lang-de hidden">Komplexe, niedrigvolumige High-Ticket-Deals.</span>
<svg className="h-4 w-4" data-lucide="arrow-right" strokeWidth="1.5"></svg>
</div>
</article>

<article className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
<div className="space-y-3">
<div className="flex items-center gap-2 text-xs font-medium text-slate-500">
<div className="h-6 w-6 rounded-full bg-indigo-50 flex items-center justify-center">
<svg className="h-3.5 w-3.5 text-indigo-500" data-lucide="workflow" strokeWidth="1.5"></svg>
</div>
<span className="uppercase tracking-tight">
<span className="lang-en inline">Use case 3</span>
<span className="lang-de hidden">Use Case 3</span>
</span>
</div>
<h3 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-950">
<span className="lang-en inline">Sales &amp; GTM systemization</span>
<span className="lang-de hidden">Sales &amp; GTM-Systemisierung</span>
</h3>
<p className="text-xs sm:text-sm text-slate-500">
<span className="lang-en inline">
                    For growing B2B firms that want to replace spreadsheets, guesswork and manual effort with
                    structure.
                  </span>
<span className="lang-de hidden">
                    Für wachsende B2B-Unternehmen, die Excel, Bauchgefühl und manuelle Prozesse durch klare Systeme
                    ersetzen wollen.
                  </span>
</p>
<p className="text-sm sm:text-base text-slate-700">
<span className="lang-en inline">
                    We map your go-to-market, define operating rhythms and implement the tooling that keeps every
                    rep and motion aligned.
                  </span>
<span className="lang-de hidden">
                    Wir strukturieren Ihren Go-to-Market, definieren Operating Rhythms und implementieren die Tools,
                    die Team und Prozesse ausrichten.
                  </span>
</p>
</div>
<div className="mt-4 flex items-center justify-between text-[0.75rem] text-slate-500">
<span className="lang-en inline">From chaos to clarity in your revenue org.</span>
<span className="lang-de hidden">Vom Chaos zur Klarheit im Revenue-Team.</span>
<svg className="h-4 w-4" data-lucide="arrow-right" strokeWidth="1.5"></svg>
</div>
</article>
</div>
</div>
</section>

<section className="bg-slate-950 text-slate-50" id="how-we-work">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-18">
<div className="flex flex-col gap-5 mb-8">
<div>
<p className="uppercase text-xs font-medium tracking-tight text-slate-400">
<span className="lang-en inline">Process</span>
<span className="lang-de hidden">Prozess</span>
</p>
<h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
<span className="lang-en inline">How we work</span>
<span className="lang-de hidden">Unser Prozess</span>
</h2>
</div>
<p className="text-sm sm:text-base text-slate-300 max-w-2xl">
<span className="lang-en inline">
                A simple, structured process that turns outbound into a predictable revenue function.
              </span>
<span className="lang-de hidden">
                Ein klarer Prozess, der Outbound in eine planbare Umsatzfunktion verwandelt.
              </span>
</p>
</div>
<div className="grid gap-4 sm:gap-5 md:grid-cols-4">

<div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 sm:p-5">
<div className="flex items-center gap-3">
<div className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/10 text-xs font-semibold text-sky-400">
                  1
                </div>
<p className="text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-tight">
<span className="lang-en inline">Step 1</span>
<span className="lang-de hidden">Schritt 1</span>
</p>
</div>
<p className="text-sm sm:text-base font-medium text-slate-50">
<span className="lang-en inline">Define the revenue goal</span>
<span className="lang-de hidden">Umsatzziel definieren</span>
</p>
<p className="text-xs sm:text-sm text-slate-400">
<span className="lang-en inline">Translate targets into clear pipeline and outbound requirements.</span>
<span className="lang-de hidden">Ziele in klare Pipeline- und Outbound-Anforderungen übersetzen.</span>
</p>
</div>

<div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 sm:p-5">
<div className="flex items-center gap-3">
<div className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/10 text-xs font-semibold text-sky-400">
                  2
                </div>
<p className="text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-tight">
<span className="lang-en inline">Step 2</span>
<span className="lang-de hidden">Schritt 2</span>
</p>
</div>
<p className="text-sm sm:text-base font-medium text-slate-50">
<span className="lang-en inline">Identify the real buyers</span>
<span className="lang-de hidden">Reale Käufer identifizieren</span>
</p>
<p className="text-xs sm:text-sm text-slate-400">
<span className="lang-en inline">ICP, triggers and buying committees backed by data, not assumptions.</span>
<span className="lang-de hidden">ICP, Trigger und Buying Committees datenbasiert statt aus dem Bauch.</span>
</p>
</div>

<div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 sm:p-5">
<div className="flex items-center gap-3">
<div className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/10 text-xs font-semibold text-sky-400">
                  3
                </div>
<p className="text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-tight">
<span className="lang-en inline">Step 3</span>
<span className="lang-de hidden">Schritt 3</span>
</p>
</div>
<p className="text-sm sm:text-base font-medium text-slate-50">
<span className="lang-en inline">Build the outbound system</span>
<span className="lang-de hidden">Outbound-System aufbauen</span>
</p>
<p className="text-xs sm:text-sm text-slate-400">
<span className="lang-en inline">Messaging, sequences, data, routing and reporting as one system.</span>
<span className="lang-de hidden">Messaging, Sequences, Daten, Routing und Reporting als ein System.</span>
</p>
</div>

<div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 sm:p-5">
<div className="flex items-center gap-3">
<div className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/10 text-xs font-semibold text-sky-400">
                  4
                </div>
<p className="text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-tight">
<span className="lang-en inline">Step 4</span>
<span className="lang-de hidden">Schritt 4</span>
</p>
</div>
<p className="text-sm sm:text-base font-medium text-slate-50">
<span className="lang-en inline">Run it, measure it, improve it</span>
<span className="lang-de hidden">Umsetzen, messen, optimieren</span>
</p>
<p className="text-xs sm:text-sm text-slate-400">
<span className="lang-en inline">We operate the engine with you, iterate weekly and report in revenue terms.</span>
<span className="lang-de hidden">Wir betreiben den Engine gemeinsam, iterieren wöchentlich und berichten in Umsatz.</span>
</p>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 text-slate-900" id="final-cta">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-18 lg:py-20">
<div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
<div className="max-w-xl space-y-6">
<p className="uppercase text-xs font-medium tracking-tight text-slate-500">
<span className="lang-en inline">Get started</span>
<span className="lang-de hidden">Start</span>
</p>
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-950">
<span className="lang-en inline">Ready to turn outbound into a real revenue channel?</span>
<span className="lang-de hidden">Bereit, Outbound in einen echten Umsatzkanal zu verwandeln?</span>
</h2>
<p className="text-sm sm:text-base text-slate-600 max-w-xl">
<span className="lang-en inline">
                  Book a call and let’s see if OutboundLabs is a fit.
                </span>
<span className="lang-de hidden">
                  Buche ein Gespräch und wir prüfen, ob OutboundLabs passt.
                </span>
</p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold tracking-tight text-slate-950 shadow-md shadow-sky-500/30 hover:bg-sky-400 transition" href="#">
<span className="lang-en inline">Book a call</span>
<span className="lang-de hidden">Gespräch buchen</span>
<svg className="h-4 w-4 shrink-0" data-lucide="calendar" strokeWidth="1.5"></svg>
</a>
<p className="text-xs sm:text-sm text-slate-500">
<span className="lang-en inline">No long forms. No obligation.</span>
<span className="lang-de hidden">Keine langen Formulare. Keine Verpflichtung.</span>
</p>
</div>
<div className="flex flex-wrap gap-4 text-[0.75rem] text-slate-500">
<div className="inline-flex items-center gap-1.5">
<svg className="h-3.5 w-3.5" data-lucide="clock" strokeWidth="1.5"></svg>
<span className="lang-en inline">30–40 min strategy conversation</span>
<span className="lang-de hidden">30–40 Min. Strategiegespräch</span>
</div>
<div className="inline-flex items-center gap-1.5">
<svg className="h-3.5 w-3.5" data-lucide="message-circle" strokeWidth="1.5"></svg>
<span className="lang-en inline">No pitch unless there’s a clear fit</span>
<span className="lang-de hidden">Kein Pitch ohne klaren Fit</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3 sm:gap-4">
<div className="aspect-[4/5] rounded-2xl bg-slate-900/90 overflow-hidden">
<div className="h-full w-full bg-[radial-gradient(circle_at_top,_#38bdf8_0,_#020617_65%)]"></div>
</div>
<div className="aspect-[4/5] rounded-2xl bg-slate-900/90 overflow-hidden">
<div className="h-full w-full bg-[radial-gradient(circle_at_top,_#4ade80_0,_#020617_65%)]"></div>
</div>
<div className="aspect-[4/5] rounded-2xl bg-slate-900/90 overflow-hidden">
<div className="h-full w-full bg-[radial-gradient(circle_at_top,_#818cf8_0,_#020617_65%)]"></div>
</div>
<div className="aspect-[4/5] rounded-2xl bg-slate-900 flex flex-col justify-between p-4">
<div>
<p className="text-xs font-medium text-slate-300 tracking-tight">
<span className="lang-en inline">After 90 days</span>
<span className="lang-de hidden">Nach 90 Tagen</span>
</p>
<p className="mt-2 text-sm sm:text-base font-medium text-slate-50">
<span className="lang-en inline">A repeatable outbound engine, live in your stack.</span>
<span className="lang-de hidden">Ein wiederholbarer Outbound-Engine in Ihrem Stack.</span>
</p>
</div>
<div className="mt-4 flex items-center justify-between text-[0.75rem] text-slate-400">
<span className="lang-en inline">Owned by your team, co-piloted by us.</span>
<span className="lang-de hidden">In Ihrem Besitz, von uns mitgesteuert.</span>
<svg className="h-4 w-4" data-lucide="infinity" strokeWidth="1.5"></svg>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-800 bg-slate-950">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 sm:py-7">
<div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
<div className="space-y-2">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
<div className="h-2.5 w-2.5 rounded-md bg-gradient-to-br from-sky-400 to-indigo-500"></div>
</div>
<span className="text-xs sm:text-sm font-semibold tracking-tight text-slate-50">OutboundLabs</span>
</div>
<p className="text-xs sm:text-sm text-slate-500 max-w-sm">
<span className="lang-en inline">Outbound &amp; sales systems for predictable B2B growth.</span>
<span className="lang-de hidden">Outbound- &amp; Sales-Systeme für planbares B2B-Wachstum.</span>
</p>
<p className="text-[0.75rem] text-slate-600">
              © <span id="year"></span> OutboundLabs. All rights reserved.
            </p>
</div>
<div className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-xs sm:text-sm text-slate-400">
<div className="space-y-1.5">
<p className="font-medium text-slate-200 tracking-tight">
<span className="lang-en inline">Pages</span>
<span className="lang-de hidden">Seiten</span>
</p>
<a className="hover:text-slate-50 transition-colors" href="#use-cases">
<span className="lang-en inline">Use cases</span>
<span className="lang-de hidden">Use Cases</span>
</a>
<a className="hover:text-slate-50 transition-colors" href="#how-we-work">
<span className="lang-en inline">Process</span>
<span className="lang-de hidden">Prozess</span>
</a>
<a className="hover:text-slate-50 transition-colors" href="#final-cta">
<span className="lang-en inline">Work with us</span>
<span className="lang-de hidden">Zusammenarbeit</span>
</a>
</div>
<div className="space-y-1.5">
<p className="font-medium text-slate-200 tracking-tight">
<span className="lang-en inline">Information</span>
<span className="lang-de hidden">Information</span>
</p>
<a className="hover:text-slate-50 transition-colors" href="#">
<span className="lang-en inline">Imprint</span>
<span className="lang-de hidden">Impressum</span>
</a>
<a className="hover:text-slate-50 transition-colors" href="#">
<span className="lang-en inline">Privacy</span>
<span className="lang-de hidden">Datenschutz</span>
</a>
</div>
<div className="space-y-2">
<p className="font-medium text-slate-200 tracking-tight">
<span className="lang-en inline">Connect</span>
<span className="lang-de hidden">Kontakt</span>
</p>
<a className="inline-flex items-center gap-1.5 text-slate-400 hover:text-slate-50 transition" href="#">
<svg className="h-4 w-4" data-lucide="linkedin" strokeWidth="1.5"></svg>
<span>LinkedIn</span>
</a>
<button className="inline-flex items-center gap-1.5 text-slate-400 hover:text-slate-50 transition" id="footer-lang-toggle">
<svg className="h-4 w-4" data-lucide="globe-2" strokeWidth="1.5"></svg>
<span className="lang-en inline">DE</span>
<span className="lang-de hidden">EN</span>
</button>
</div>
</div>
</div>
</div>
</footer>
</div>



    </>
  );
}
