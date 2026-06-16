import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  function selectPackage(pkg) {
          const radios = document.getElementsByName('package');
          for(let r of radios) {
              if(r.value.includes(pkg) || (pkg.includes('Start') && r.value === 'Start') || (pkg.includes('Pro') && r.value === 'Pro') || (pkg.includes('Elite') && r.value === 'Elite')) {
                  r.checked = true;
              }
          }
      }

      // Scroll Reveal
      document.addEventListener("DOMContentLoaded", () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('reveal-hidden');
                    entry.target.classList.add('reveal-visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-element').forEach((el) => {
            el.classList.add('reveal-hidden');
            observer.observe(el);
        });
      });

      // Form Handling
      async function handleFormSubmit(event) {
          event.preventDefault();
          const btn = document.getElementById('submit-btn');
          const originalText = btn.innerText;
          btn.innerText = 'Odosielam...';
          btn.disabled = true;
          btn.style.opacity = '0.7';

          const form = event.target;
          const data = {
              balik: form.querySelector('input[name="package"]:checked')?.value || 'PROFI',
              meno: form.querySelector('[name="name"]')?.value || '',
              firma: form.querySelector('[name="firm"]')?.value || '',
              oblast: form.querySelector('[name="craft"]')?.selectedOptions?.[0]?.text || '',
              mesto: form.querySelector('[name="city"]')?.value || '',
              kontakt: form.querySelector('[name="contact_info"]')?.value || '',
              problem: form.querySelector('[name="problem"]')?.selectedOptions?.[0]?.text || ''
          };

          try {
              const response = await fetch('https://localflowai.app.n8n.cloud/webhook/localflow-dotaznik', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(data)
              });

              if (response.ok) {
                  document.getElementById('submission-form').classList.add('hidden');
                  document.getElementById('success-view').classList.remove('hidden');
                  document.getElementById('success-view').classList.add('flex');
              } else {
                  alert('Niečo sa pokazilo. Skúste to znova.');
                  btn.innerText = originalText;
                  btn.disabled = false;
                  btn.style.opacity = '1';
              }
          } catch (err) {
              console.error('Webhook error:', err);
              alert('Nepodarilo sa odoslať. Skontrolujte pripojenie.');
              btn.innerText = originalText;
              btn.disabled = false;
              btn.style.opacity = '1';
          }
      }

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#007bff]/5 blur-[120px] rounded-full mix-blend-screen"></div>
<div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#00badf]/5 blur-[120px] rounded-full mix-blend-screen"></div>
</div>

<div className="fixed bottom-0 left-0 w-full z-50 bg-[#0a0e1a]/90 backdrop-blur-lg border-t border-white/10 p-4 flex gap-3 md:hidden">
<a className="flex-1 btn-primary py-3 rounded-xl text-white text-xs font-semibold text-center flex items-center justify-center" href="#contact">
        Chcem viac zákazníkov
      </a>
<a className="flex-1 btn-secondary py-3 rounded-xl text-white text-xs font-medium text-center flex items-center justify-center" href="#pricing">
        Pozrieť balíky
      </a>
</div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-[#0a0e1a]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-3 hover:opacity-80 transition-opacity" href="#" onclick="window.scrollTo(0,0); return false;">
<div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00badf] to-[#007bff] flex items-center justify-center text-white shadow-[0_0_15px_rgba(0,186,223,0.3)]">
<iconify-icon icon="solar:bolt-linear" strokeWidth="2" width="20"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight text-sm">
            LocalFlow <span className="text-[#00badf]">AI</span>
</span>
</a>

<a className="hidden md:flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-xs font-medium" href="#">
<iconify-icon icon="solar:user-circle-linear" width="16"></iconify-icon>
          Klientsky portál
        </a>
</div>
</nav>

<div id="main-content-wrapper">

<main className="z-10 pt-32 lg:pt-48 pr-6 pb-12 pl-6 relative">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div className="text-center lg:text-left">
<div className="reveal-element inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/20 text-cyan-400 text-[10px] font-medium mb-8 uppercase tracking-widest hover:border-cyan-500/40 transition-colors cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#00badf] animate-pulse"></span>
                Vytvorené pre remeselníkov
              </div>
<h1 className="reveal-element delay-100 text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 leading-[1.1]">
<span className="gradient-text-accent">Neprichádzajte o zákazky,</span>
<span className="text-slate-400 font-light block mt-2">keď ste v robote.</span>
</h1>
<p className="reveal-element delay-200 text-base md:text-lg text-slate-400 font-light max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                Nastavíme vám web + automatické odpovede a follow-up, aby sa z dopytov stali zaplatené zákazky – aj keď práve robíte na zákazke.
              </p>
<div className="reveal-element delay-200 space-y-3 mb-10 text-left max-w-md mx-auto lg:mx-0">
<div className="flex items-start gap-3 text-slate-300 font-light text-sm">
<iconify-icon className="text-[#00badf] shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                    Okamžitá odpoveď na dopyt (formulár / správy)
                 </div>
<div className="flex items-start gap-3 text-slate-300 font-light text-sm">
<iconify-icon className="text-[#00badf] shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                    Uloženie kontaktov + prehľad v systéme
                 </div>
<div className="flex items-start gap-3 text-slate-300 font-light text-sm">
<iconify-icon className="text-[#00badf] shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                    Follow-up správy, aby zákazka nezomrela
                 </div>
</div>
<div className="reveal-element delay-300 flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">
<a className="btn-primary w-full sm:w-auto px-8 py-4 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 group" href="#contact">
                  Chcem viac zákazníkov
                  <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="btn-secondary w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-medium flex items-center justify-center" href="#pricing">
                   Pozrieť balíky
                </a>
</div>
<p className="reveal-element delay-300 text-[10px] text-slate-500 mt-4 font-light">
                 Všetko nastavíme za vás. Texty si schválite.
              </p>
</div>

<div className="reveal-element delay-300 relative w-full max-w-md mx-auto lg:ml-auto lg:mr-0 mt-10 lg:mt-0">
<div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00badf]/20 blur-3xl rounded-full pointer-events-none"></div>
<div className="glass-card p-6 rounded-2xl border border-white/10 relative overflow-hidden bg-[#0d1221]/60">
<div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:stopwatch-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">
                        Čas odozvy na dopyt
                      </div>
<div className="text-[10px] text-slate-500">
                        Ilustrácia bežnej situácie
                      </div>
</div>
</div>
<div className="flex items-center gap-2 px-2 py-1 rounded-md bg-green-500/10 border border-green-500/20">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] font-bold text-green-500 tracking-wide uppercase">
                      Status
                    </span>
</div>
</div>
<div className="space-y-6">
<div className="">
<div className="flex justify-between text-xs mb-2">
<span className="text-slate-400 font-medium">
                        Bežná firma (keď robíte)
                      </span>
<span className="text-rose-400 font-semibold">3+ Hodiny</span>
</div>
<div className="h-3 w-full bg-white/5 rounded-full overflow-hidden relative">
<div className="absolute top-0 left-0 h-full bg-rose-500/60 w-0 rounded-full animate-fill" style={{-TargetWidth: '85%'}}></div>
</div>
</div>
<div className="">
<div className="flex justify-between text-xs mb-2">
<span className="text-white font-medium flex items-center gap-1">
                        S LocalFlow AI
                        <iconify-icon className="text-[#00badf] animate-pulse" icon="solar:bolt-bold" width="10"></iconify-icon>
</span>
<span className="text-[#00badf] font-bold text-sm cyan-glow-text">
                        Okamžite
                      </span>
</div>
<div className="h-3 w-full bg-white/5 rounded-full overflow-hidden relative shadow-[0_0_10px_rgba(0,186,223,0.1)]">
<div className="absolute top-0 left-0 h-full bg-[#00badf] w-0 rounded-full shadow-[0_0_15px_#00badf] animate-fill" style={{-TargetWidth: '5%', animationDelay: '0.5s'}}></div>
</div>
</div>
</div>
<div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
<span className="text-[10px] text-slate-500">
                    Úspešnosť kontaktu:
                  </span>
<span className="text-xs text-green-400 font-medium flex items-center gap-1">
                    Cieľ: 100% zachytených
                  </span>
</div>
</div>
</div>
</div>
</main>

<div className="border-y border-white/5 bg-white/[0.02] py-6">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16">
<div className="flex items-center gap-2 text-slate-400 text-xs font-medium uppercase tracking-wide">
<iconify-icon className="text-[#00badf]" icon="solar:settings-linear" width="18"></iconify-icon>
                    Nastavenie na kľúč
                </div>
<div className="flex items-center gap-2 text-slate-400 text-xs font-medium uppercase tracking-wide">
<iconify-icon className="text-[#00badf]" icon="solar:clock-circle-linear" width="18"></iconify-icon>
                    Funguje aj keď pracujete
                </div>
<div className="flex items-center gap-2 text-slate-400 text-xs font-medium uppercase tracking-wide">
<iconify-icon className="text-[#00badf]" icon="solar:smartphone-linear" width="18"></iconify-icon>
                    Vy máte kontrolu
                </div>
</div>
</div>

<section className="py-24 px-6 relative z-10">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal-element">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">
                        Kde remeselníci prichádzajú o <span className="text-rose-400">peniaze</span>
</h2>
<p className="text-slate-400 text-lg font-light">(potichu)</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="reveal-element delay-100 p-8 rounded-2xl bg-[#0f1422] border border-white/5 flex flex-col">
<div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-6">
<iconify-icon icon="solar:phone-calling-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg mb-3">Nezdvihnete hovor</h3>
<p className="text-slate-400 text-sm font-light leading-relaxed">
                            Ste na rebríku alebo máte špinavé ruky. Zákazník nečaká, volá ďalšiemu v poradí. Zákazka je preč.
                        </p>
</div>

<div className="reveal-element delay-200 p-8 rounded-2xl bg-[#0f1422] border border-white/5 flex flex-col">
<div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-6">
<iconify-icon icon="solar:chat-line-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg mb-3">Žiadny follow-up</h3>
<p className="text-slate-400 text-sm font-light leading-relaxed">
                            Pošlete cenovú ponuku, ale zabudnete sa pripomenúť. Zákazka „umrie“, lebo klient na to zabudol tiež.
                        </p>
</div>

<div className="reveal-element delay-300 p-8 rounded-2xl bg-[#0f1422] border border-white/5 flex flex-col">
<div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-6">
<iconify-icon icon="solar:inbox-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg mb-3">Chaos v správach</h3>
<p className="text-slate-400 text-sm font-light leading-relaxed">
                            SMS, WhatsApp, Email, Messenger. Dopyty sa strácajú v histórii a vy trávite večery hľadaním čísla.
                        </p>
</div>
</div>
<div className="mt-12 text-center reveal-element">
<p className="text-lg text-white font-medium">
                        Väčšina firiem nepotrebuje viac dopytov. <br className="md:hidden"/>
<span className="gradient-text-accent">Potrebujú menej únikov.</span>
</p>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 border-t border-white/5 bg-[#0a0e1a]" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20 reveal-element">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
                  Čo vám nastavíme
                </h2>
<p className="text-slate-400 font-light">
                    Systémy presne podľa balíkov, ktoré ponúkame.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="reveal-element delay-100 p-8 rounded-3xl bg-[#111625] border border-white/5 hover:border-white/10 transition-colors">
<h3 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
<iconify-icon className="text-[#00badf]" icon="solar:laptop-minimalistic-linear"></iconify-icon>
                    Web, ktorý predáva
                  </h3>
<p className="text-slate-400 text-sm font-light mb-6">
                    Nie len pekná vizitka. Stránka optimalizovaná tak, aby návštevník zavolal alebo vyplnil formulár.
                  </p>
<ul className="space-y-2">
<li className="text-xs text-slate-300 flex gap-2"><span className="text-[#00badf]">•</span> SEO optimalizácia pre Google</li>
<li className="text-xs text-slate-300 flex gap-2"><span className="text-[#00badf]">•</span> Kontaktný formulár</li>
<li className="text-xs text-slate-300 flex gap-2"><span className="text-[#00badf]">•</span> Responzívny dizajn</li>
</ul>
</div>

<div className="reveal-element delay-200 p-8 rounded-3xl bg-[#111625] border border-white/5 hover:border-white/10 transition-colors">
<h3 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
<iconify-icon className="text-[#00badf]" icon="solar:chat-round-dots-linear"></iconify-icon>
                    Okamžitá odpoveď
                  </h3>
<p className="text-slate-400 text-sm font-light mb-6">
                    Automatický systém odpovie na dopyt okamžite, pošle potvrdzujúcu SMS/Email a dá vám vedieť.
                  </p>
<ul className="space-y-2">
<li className="text-xs text-slate-300 flex gap-2"><span className="text-[#00badf]">•</span> Odpoveď do pár sekúnd</li>
<li className="text-xs text-slate-300 flex gap-2"><span className="text-[#00badf]">•</span> Zber kontaktov do databázy</li>
<li className="text-xs text-slate-300 flex gap-2"><span className="text-[#00badf]">•</span> Notifikácia pre vás</li>
</ul>
</div>

<div className="reveal-element delay-300 p-8 rounded-3xl bg-[#111625] border border-white/5 hover:border-white/10 transition-colors">
<h3 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
<iconify-icon className="text-[#00badf]" icon="solar:bolt-linear"></iconify-icon>
                    Automatizácia &amp; Follow-up
                  </h3>
<p className="text-slate-400 text-sm font-light mb-6">
                    Systém sa pripomenie zákazníkovi, ak neodpovedá na ponuku. Šetrí hodiny administratívy.
                  </p>
<ul className="space-y-2">
<li className="text-xs text-slate-300 flex gap-2"><span className="text-[#00badf]">•</span> Automatické pripomienky</li>
<li className="text-xs text-slate-300 flex gap-2"><span className="text-[#00badf]">•</span> SMS notifikácie</li>
<li className="text-xs text-slate-300 flex gap-2"><span className="text-[#00badf]">•</span> Správa zákazníkov</li>
</ul>
</div>
</div>
<div className="mt-12 text-center">
<a className="text-sm font-medium text-white hover:text-[#00badf] transition-colors inline-flex items-center gap-2" href="#pricing">
                      Pozrieť balíky a ceny
                      <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 border-t border-white/5 bg-[#0a0e1a] overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal-element">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">
                Ako to funguje
              </h2>
<p className="text-slate-400 font-light">
                  Zmapujeme dopyty, nastavíme systém a spustíme.
              </p>
</div>
<div className="grid md:grid-cols-3 gap-8 mb-16 text-center md:text-left">
<div className="reveal-element delay-100">
<div className="text-4xl font-bold text-white/10 mb-4">01</div>
<h3 className="text-white font-medium text-lg mb-2">Analýza zdrojov</h3>
<p className="text-slate-400 text-sm font-light">Poviete nám, odkiaľ chodia dopyty (web, správy, formulár).</p>
</div>
<div className="reveal-element delay-200">
<div className="text-4xl font-bold text-white/10 mb-4">02</div>
<h3 className="text-white font-medium text-lg mb-2">Nastavení pravidiel</h3>
<p className="text-slate-400 text-sm font-light">Nastavíme automatické odpovede a texty. Všetko si schválite.</p>
</div>
<div className="reveal-element delay-300">
<div className="text-4xl font-bold text-white/10 mb-4">03</div>
<h3 className="text-white font-medium text-lg mb-2">Spustenie</h3>
<p className="text-slate-400 text-sm font-light">Prepojíme systém a dopyty sa začnú spracovávať automaticky.</p>
</div>
</div>

<div className="reveal-element delay-100 relative rounded-2xl bg-[#080b14] border border-white/5 p-4 md:p-10 shadow-2xl">
<div className="absolute top-4 left-4 text-[10px] text-slate-500 uppercase tracking-wider">
                  Ukážka automatizácie (zjednodušené)
              </div>
<div className="workflow-scroll-container overflow-x-auto pb-0 relative h-[150px] sm:h-[200px] flex items-center justify-center">

<div className="flex items-center gap-4 min-w-[600px] px-8">

<div className="p-3 rounded border border-white/10 bg-[#1e293b] flex items-center gap-2 w-40">
<iconify-icon className="text-white" icon="solar:user-circle-linear"></iconify-icon>
<div className="text-[10px] text-slate-300">Nový dopyt<br/>(Web/Email)</div>
</div>

<div className="flex-1 h-[1px] bg-slate-700 relative">
<div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#00badf] rounded-full animate-ping"></div>
</div>

<div className="p-3 rounded border border-[#00badf]/30 bg-[#00badf]/10 flex items-center gap-2 w-48">
<iconify-icon className="text-[#00badf]" icon="solar:bolt-bold"></iconify-icon>
<div className="text-[10px] text-white">Okamžitá odpoveď<br/>+ Uloženie kontaktu</div>
</div>

<div className="flex-1 h-[1px] bg-slate-700"></div>

<div className="p-3 rounded border border-white/10 bg-[#1e293b] flex items-center gap-2 w-40">
<iconify-icon className="text-green-400" icon="solar:check-read-linear"></iconify-icon>
<div className="text-[10px] text-slate-300">Notifikácia vám<br/>(SMS/App)</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 bg-[#0a0e1a]">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal-element">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                Výsledky
              </h2>
</div>

<div className="grid md:grid-cols-3 gap-6">

<div className="reveal-element delay-100 glass-card p-8 rounded-2xl flex flex-col justify-between h-full">
<div>
<div className="flex items-center gap-2 mb-4">
<span className="text-xs font-bold text-[#00badf] uppercase tracking-wide">Vodár / Kúrenár</span>
<span className="text-[10px] text-slate-500 px-2 py-0.5 rounded border border-white/10">Bratislava</span>
</div>
<h4 className="text-white font-medium mb-2">Problém: Stratené hovory</h4>
<p className="text-slate-400 text-sm font-light mb-6">
                    "Nestíhal som dvíhať telefóny pri práci. Systém teraz pošle SMS každému, kto sa nedovolá a navedie ho na formulár."
                  </p>
</div>
<div className="border-t border-white/5 pt-4">
<p className="text-white text-sm font-medium">Ján K.</p>
</div>
</div>

<div className="reveal-element delay-200 glass-card p-8 rounded-2xl flex flex-col justify-between h-full">
<div>
<div className="flex items-center gap-2 mb-4">
<span className="text-xs font-bold text-[#00badf] uppercase tracking-wide">Stolárstvo</span>
<span className="text-[10px] text-slate-500 px-2 py-0.5 rounded border border-white/10">Žilina</span>
</div>
<h4 className="text-white font-medium mb-2">Problém: Žiadny follow-up</h4>
<p className="text-slate-400 text-sm font-light mb-6">
                    "Poslal som ponuku a zabudol som sa ozvať. Teraz systém automaticky pošle pripomienku po 3 dňoch."
                  </p>
</div>
<div className="border-t border-white/5 pt-4">
<p className="text-white text-sm font-medium">Marek P.</p>
</div>
</div>

<div className="reveal-element delay-300 glass-card p-8 rounded-2xl flex flex-col justify-between h-full">
<div>
<div className="flex items-center gap-2 mb-4">
<span className="text-xs font-bold text-[#00badf] uppercase tracking-wide">Elektrikár</span>
<span className="text-[10px] text-slate-500 px-2 py-0.5 rounded border border-white/10">Trnava</span>
</div>
<h4 className="text-white font-medium mb-2">Výsledok: Poriadok</h4>
<p className="text-slate-400 text-sm font-light mb-6">
                    "Mám všetky kontakty na jednom mieste. Ráno presne viem, komu mám zavolať naspäť."
                  </p>
</div>
<div className="border-t border-white/5 pt-4">
<p className="text-white text-sm font-medium">Peter S.</p>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12 md:mb-16 reveal-element">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">
                Vyberte si svoj balík
              </h2>
<p className="text-slate-400 font-light text-lg">
                Investícia, ktorá sa vám vráti v prvých zákazkách.
              </p>
</div>

<div className="max-w-2xl mx-auto mb-16 text-center reveal-element delay-100">
<a className="inline-block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group cursor-pointer" href="#contact">
<p className="text-sm text-white font-medium mb-1">Neviete si vybrať?</p>
<p className="text-xs text-slate-400 group-hover:text-[#00badf] transition-colors flex items-center justify-center gap-1">
                        Odpovedzte na 3 otázky a odporučíme vám balík
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</p>
</a>
</div>
<div className="mobile-scroll-snap md:grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">

<div className="reveal-element delay-100 p-6 md:p-8 rounded-3xl glass-card flex flex-col h-full">
<div className="mb-4">
<div className="text-[10px] font-bold tracking-wider text-slate-500 uppercase mb-2 bg-white/5 inline-block px-2 py-1 rounded">
                      PRE ZAČÍNAJÚCE FIRMY
                  </div>
<h3 className="text-xl font-medium text-white mb-2 uppercase">ŠTART</h3>
</div>
<div className="mb-6 pb-6 border-b border-white/5">
<div className="flex items-end gap-2 mb-1">
<span className="text-3xl md:text-4xl font-semibold text-white">399 €</span>
<span className="text-[10px] text-slate-500 uppercase tracking-widest font-medium mb-1.5">jednorazovo</span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-sm md:text-lg font-normal text-cyan-400">+ 25 €</span>
<span className="text-[10px] text-slate-500">/ mesačne</span>
</div>
</div>
<div className="flex-1 mb-8">
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-300 font-light">
<iconify-icon className="text-[#00badf] shrink-0 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>
                      Profesionálna webstránka
                    </li>
<li className="flex items-start gap-3 text-sm text-slate-300 font-light">
<iconify-icon className="text-[#00badf] shrink-0 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>
                      Kontaktný formulár
                    </li>
<li className="flex items-start gap-3 text-sm text-slate-300 font-light">
<iconify-icon className="text-[#00badf] shrink-0 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>
                      Email upozornenia na nové dopyty
                    </li>
<li className="flex items-start gap-3 text-sm text-slate-300 font-light">
<iconify-icon className="text-[#00badf] shrink-0 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>
                      Základné SEO
                    </li>
</ul>
</div>
<a className="w-full py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm hover:bg-white/10 transition-all font-medium text-center block" href="#contact" onclick="selectPackage('Start Package')">
                  Chcem viac zákazníkov
                </a>
</div>

<div className="reveal-element p-6 md:p-8 rounded-3xl bg-[#0d1326] active-card-glow relative transform lg:-translate-y-4 flex flex-col h-full z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-[#00badf] to-[#007bff] text-white text-[10px] uppercase font-bold tracking-widest rounded-full shadow-[0_0_15px_rgba(0,186,223,0.4)] border border-white/10 whitespace-nowrap z-20">
                  NAJOBĽÚBENEJŠIE
                </div>
<div className="mb-4 mt-2">
<div className="text-[10px] font-bold tracking-wider text-cyan-400 uppercase mb-2 bg-cyan-950/30 border border-cyan-500/20 inline-block px-2 py-1 rounded">
                      PRE RASTÚCI BIZNIS
                  </div>
<h3 className="text-xl font-medium text-white mb-2 uppercase">PROFI</h3>
</div>
<div className="mb-6 pb-6 border-b border-white/5">
<div className="flex items-end gap-2 mb-1">
<span className="text-4xl md:text-5xl font-semibold text-white">599 €</span>
<span className="text-[10px] text-slate-500 uppercase tracking-widest font-medium mb-1.5">jednorazovo</span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-sm md:text-xl font-normal text-cyan-400">+ 49 €</span>
<span className="text-[10px] text-slate-500">/ mesačne</span>
</div>
</div>
<div className="flex-1 mb-8">
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-white font-medium">
<iconify-icon className="text-[#00badf] shrink-0 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>
                      Všetko zo ŠTARTu
                    </li>
<li className="flex items-start gap-3 text-sm text-white font-medium">
<iconify-icon className="text-[#00badf] shrink-0 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>
                      Automatická odpoveď zákazníkovi
                    </li>
<li className="flex items-start gap-3 text-sm text-white font-medium">
<iconify-icon className="text-[#00badf] shrink-0 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>
                      CRM – prehľad všetkých dopytov
                    </li>
<li className="flex items-start gap-3 text-sm text-white font-medium">
<iconify-icon className="text-[#00badf] shrink-0 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>
                      Chat so zákazníkmi
                    </li>
<li className="flex items-start gap-3 text-sm text-white font-medium">
<iconify-icon className="text-[#00badf] shrink-0 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>
                      Štatistiky a konverzný lievik
                    </li>
<li className="flex items-start gap-3 text-sm text-white font-medium">
<iconify-icon className="text-[#00badf] shrink-0 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>
                      Automatický follow-up
                    </li>
</ul>
</div>
<a className="btn-primary w-full py-3 rounded-xl text-white text-sm font-semibold text-center block shadow-lg shadow-cyan-500/20" href="#contact" onclick="selectPackage('Pro Package')">
                  Chcem viac zákazníkov
                </a>
</div>

<div className="reveal-element delay-200 p-6 md:p-8 rounded-3xl glass-card flex flex-col h-full">
<div className="mb-4">
<div className="text-[10px] font-bold tracking-wider text-slate-500 uppercase mb-2 bg-white/5 inline-block px-2 py-1 rounded">
                      PRE PROFESIONÁLOV
                  </div>
<h3 className="text-xl font-medium text-white mb-2 uppercase">ELITA</h3>
</div>
<div className="mb-6 pb-6 border-b border-white/5">
<div className="flex items-end gap-2 mb-1">
<span className="text-3xl md:text-4xl font-semibold text-white">999 €</span>
<span className="text-[10px] text-slate-500 uppercase tracking-widest font-medium mb-1.5">jednorazovo</span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-sm md:text-lg font-normal text-cyan-400">+ 89 €</span>
<span className="text-[10px] text-slate-500">/ mesačne</span>
</div>
</div>
<div className="flex-1 mb-8">
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-300 font-light">
<iconify-icon className="text-[#00badf] shrink-0 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>
                      Všetko z PROFIho
                    </li>
<li className="flex items-start gap-3 text-sm text-slate-300 font-light">
<iconify-icon className="text-[#00badf] shrink-0 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>
                      Rezervačný systém s kalendárom
                    </li>
<li className="flex items-start gap-3 text-sm text-slate-300 font-light">
<iconify-icon className="text-[#00badf] shrink-0 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>
                      SMS notifikácie
                    </li>
<li className="flex items-start gap-3 text-sm text-slate-300 font-light">
<iconify-icon className="text-[#00badf] shrink-0 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>
                      Pokročilá automatizácia
                    </li>
</ul>
</div>
<a className="w-full py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm hover:bg-white/10 transition-all font-medium text-center block" href="#contact" onclick="selectPackage('Elite Package')">
                  Chcem viac zákazníkov
                </a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 border-t border-white/5 bg-[#0a0e1a]" id="contact">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16 reveal-element">
<span className="text-[#00badf] text-xs font-semibold tracking-[0.2em] uppercase mb-6 block">
                Nezáväzný dopyt
              </span>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">
                Chcem viac <span className="gradient-text-accent">zákazníkov</span>
</h2>
<p className="text-slate-400 font-light text-lg">
                Vyplňte formulár a ozveme sa vám.
              </p>
</div>
<div className="reveal-element delay-100 p-8 md:p-12 rounded-3xl border border-[#00badf]/20 bg-[#0d1221] shadow-[0_0_50px_-20px_rgba(0,186,223,0.1)] relative overflow-hidden">

<div className="hidden absolute inset-0 z-20 flex-col items-center justify-center text-center p-8 bg-[#0d1221]/95 backdrop-blur-xl" id="success-view">
<div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mb-4">
<iconify-icon icon="solar:check-read-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Dopyt odoslaný!</h3>
<p className="text-slate-400 font-light mb-6">Budeme vás kontaktovať.</p>
<button className="px-6 py-2 rounded-full border border-white/10 text-sm text-white" onclick="location.reload()">Zavrieť</button>
</div>
<form className="space-y-8 relative z-10" id="submission-form" onsubmit="handleFormSubmit(event)">

<div className="grid grid-cols-3 gap-2 md:gap-4 mb-8">
<label className="cursor-pointer">
<input className="peer sr-only" id="pkg-start" name="package" type="radio" value="Start"/>
<div className="p-3 md:p-4 rounded-xl border border-white/10 bg-white/5 peer-checked:border-[#00badf] peer-checked:bg-[#00badf]/10 text-center transition-all">
<div className="text-xs md:text-sm font-medium text-white mb-1">ŠTART</div>
</div>
</label>
<label className="cursor-pointer">
<input checked="" className="peer sr-only" id="pkg-pro" name="package" type="radio" value="Pro"/>
<div className="p-3 md:p-4 rounded-xl border border-white/10 bg-white/5 peer-checked:border-[#00badf] peer-checked:bg-[#00badf]/10 text-center transition-all">
<div className="text-xs md:text-sm font-medium text-white mb-1">PROFI</div>
<div className="hidden md:block text-[9px] text-[#00badf] uppercase tracking-wide">Odporúčame</div>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" id="pkg-elite" name="package" type="radio" value="Elite"/>
<div className="p-3 md:p-4 rounded-xl border border-white/10 bg-white/5 peer-checked:border-[#00badf] peer-checked:bg-[#00badf]/10 text-center transition-all">
<div className="text-xs md:text-sm font-medium text-white mb-1">ELITA</div>
</div>
</label>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs text-slate-400 ml-1" htmlFor="name">Vaše meno</label>
<input className="form-input w-full px-4 py-3 rounded-lg text-sm" id="name" name="name" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-400 ml-1" htmlFor="firm">Názov firmy</label>
<input className="form-input w-full px-4 py-3 rounded-lg text-sm" id="firm" name="firm" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-400 ml-1" htmlFor="craft">Oblasť podnikania</label>
<select className="form-input w-full px-4 py-3 rounded-lg text-sm" id="craft" name="craft">
<option disabled="" selected="" value="">Vyberte...</option>
<option value="stavebnictvo">Stavebníctvo / Murár</option>
<option value="voda-kurenie">Voda / Kúrenie / Plyn</option>
<option value="elektro">Elektroinštalácie</option>
<option value="zahrada">Záhrada / Údržba</option>
<option value="klima">Klimatizácie / Tepelné čerpadlá</option>
<option value="ine">Iné remeslo</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-400 ml-1" htmlFor="city">Mesto / Okres</label>
<input className="form-input w-full px-4 py-3 rounded-lg text-sm" id="city" name="city" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-400 ml-1" htmlFor="contact">Telefón / Email</label>
<input className="form-input w-full px-4 py-3 rounded-lg text-sm" id="contact_info" name="contact_info" placeholder="+421..." required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-400 ml-1" htmlFor="problem">Čo vás trápi najviac?</label>
<select className="form-input w-full px-4 py-3 rounded-lg text-sm" id="problem" name="problem">
<option value="nestiham">Nestíham dvíhať / odpisovať</option>
<option value="zabudam">Zabúdam na follow-up</option>
<option value="chaos">Mám v tom chaos</option>
<option value="malo">Mám málo dopytov</option>
</select>
</div>
</div>
<button className="w-full btn-primary py-4 rounded-xl text-white font-semibold text-lg flex items-center justify-center gap-3" id="submit-btn" type="submit">
                      Chcem viac zákazníkov
                  </button>
<p className="text-center text-xs text-slate-500 font-light mt-4">
                      Odoslaním súhlasíte so spracovaním osobných údajov.
                  </p>
</form>
</div>
</div>
</section>
</div>

<footer className="border-t border-white/5 bg-[#080b14] py-12 px-6 pb-32 md:pb-12">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-[#00badf] to-[#007bff] flex items-center justify-center text-white shadow-sm">
<iconify-icon icon="solar:bolt-linear" width="14"></iconify-icon>
</div>
<span className="text-white text-sm font-medium">LocalFlow <span className="text-[#00badf]">AI</span></span>
</div>
<p className="text-[11px] text-slate-500 font-light ml-8">
            Pre slovenských remeselníkov.
          </p>
</div>
<div className="text-[10px] text-slate-600 font-light uppercase tracking-wide">
          © 2026 LocalFlow
        </div>
</div>
</footer>



    </>
  );
}
