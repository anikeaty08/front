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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Reveal Animation on Scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
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
      

<nav className="fixed top-0 w-full z-50 bg-[#FBF9F6]/80 backdrop-blur-md border-b border-stone-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-emerald-900 rounded-full flex items-center justify-center text-white">
<iconify-icon className="text-lg" icon="solar:leaf-linear"></iconify-icon>
</div>
<span className="text-xl font-medium tracking-tight text-emerald-950">Pu Guang</span>
</div>
<div className="hidden lg:flex items-center gap-8 text-base font-medium text-stone-600">
<a className="hover:text-emerald-900 transition-colors" href="#problem">TCM</a>
<a className="hover:text-emerald-900 transition-colors" href="#behandlingar">Behandlingar</a>
<a className="hover:text-emerald-900 transition-colors" href="#kurser">Kurser</a>
<a className="hover:text-emerald-900 transition-colors" href="#stories">Berättelser</a>
<a className="hover:text-emerald-900 transition-colors" href="#om">Om Pu Guang</a>
</div>
<a className="hidden md:inline-flex bg-emerald-900 text-[#FBF9F6] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-emerald-800 transition-all hover:scale-[1.02] shadow-lg shadow-emerald-900/10" href="#kontakt">
                Boka Behandling
            </a>
</div>
</nav>

<header className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

<div className="reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100/50 text-emerald-900 rounded-full text-xs font-medium mb-6 border border-emerald-200/50">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Nybörjarkurser i Qigong anmälan öppen
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-emerald-950 leading-[1.1] mb-8">
                    När skolmedicinen <br/> inte räcker till.
                </h1>
<p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-lg mb-10 font-normal">
                    Nordens ledande skola och mottagning inom Traditionell Kinesisk Medicin. Vi behandlar orsaken till sjukdom, inte bara <span className="italic serif text-emerald-800 font-medium">symtomen</span>.
                </p>
<div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
<a className="bg-emerald-900 text-[#FBF9F6] px-8 py-4 rounded-full text-base font-medium hover:bg-emerald-800 transition-all hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2" href="#kontakt">
                        Kontakta Pu Guang
                        <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<div className="flex items-center gap-4 px-6 py-4">
<div className="flex -space-x-3">
<img alt="Pu Guang" className="w-10 h-10 rounded-full border-2 border-[#FBF9F6] object-cover" src="https://images.staticjw.com/pug/3242/puguang.jpg"/>
</div>
<div className="text-xs font-medium text-stone-600">
                            Leds av <span className="text-emerald-900 font-semibold">Mästare Pu Guang</span>
</div>
</div>
</div>

<div className="flex flex-wrap gap-x-8 gap-y-2 text-stone-500 text-xs font-medium pt-8 border-t border-stone-200">
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-emerald-700" icon="solar:check-circle-linear"></iconify-icon> Mångtusenårig beprövad metod
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-emerald-700" icon="solar:star-linear"></iconify-icon> Helhetsdiagnostik &amp; Läkning
                    </div>
</div>
</div>

<div className="relative lg:h-[600px] reveal delay-200 hidden lg:block">

<div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl">
<img alt="Qigong practice in nature" className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent"></div>
</div>

<div className="absolute top-12 -left-8 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-xl border border-white/50 animate-float max-w-xs">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
<iconify-icon className="text-lg" icon="solar:pulse-linear"></iconify-icon>
</div>
<div>
<div className="text-[10px] uppercase tracking-wider text-stone-500 font-medium">Livsenergi (Qi)</div>
<div className="text-xs font-semibold text-emerald-950">Stärkt immunförsvar</div>
</div>
</div>
<div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[85%] rounded-full"></div>
</div>
</div>

<div className="absolute bottom-24 -right-8 bg-white/95 backdrop-blur rounded-2xl p-5 shadow-xl border border-white/50 animate-float-delayed">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full overflow-hidden bg-stone-100">
<iconify-icon className="text-5xl text-stone-400 -m-1" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-stone-900">"Slipper njurdialys helt."</p>
<div className="flex text-emerald-500 mt-1 gap-0.5">
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 mx-2 md:mx-6 bg-white rounded-[3rem] shadow-sm border border-stone-100 relative overflow-hidden" id="problem">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
<div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-stone-100 rounded-full blur-3xl"></div>
<div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] bg-emerald-50 rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto relative z-10">
<h2 className="text-3xl md:text-5xl font-medium text-emerald-950 tracking-tight mb-16 text-center max-w-3xl mx-auto reveal">
                Du har fått behandling, <br/> <span className="italic serif text-stone-400">så varför mår du fortfarande dåligt?</span>
</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-[#FBF9F6]/80 backdrop-blur p-10 rounded-3xl group hover:bg-[#FBF9F6] transition-colors reveal">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-stone-600 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:stethoscope-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-emerald-950 mb-3 tracking-tight">Skolmedicinen dämpar.</h3>
<p className="text-base text-stone-600 leading-relaxed">Läkemedel och tabletter hanterar oftast bara symtomen. De maskerar varningsklockorna utan att släcka elden som orsakar dem.</p>
</div>

<div className="bg-[#FBF9F6]/80 backdrop-blur p-10 rounded-3xl group hover:bg-[#FBF9F6] transition-colors reveal delay-100">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-stone-600 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:battery-charge-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-emerald-950 mb-3 tracking-tight">Låg livsenergi (Qi).</h3>
<p className="text-base text-stone-600 leading-relaxed">Om kroppen saknar energi kan organen inte fungera normalt. Resultatet är nedsatt immunförsvar och återkommande infektioner.</p>
</div>

<div className="bg-[#FBF9F6]/80 backdrop-blur p-10 rounded-3xl group hover:bg-[#FBF9F6] transition-colors reveal delay-200">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-stone-600 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-emerald-950 mb-3 tracking-tight">Kroppen vill läka.</h3>
<p className="text-base text-stone-600 leading-relaxed">Människokroppen har en enorm självläkande förmåga. Vår uppgift är att ta bort blockeringar och bygga upp den kraften igen.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="behandlingar">
<div className="max-w-6xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-3xl md:text-5xl font-medium text-emerald-950 tracking-tight mb-6">
                        Traditionell Kinesisk Medicin (TCM)
                    </h2>
<p className="text-base md:text-lg text-stone-600 leading-relaxed mb-8">
                        Inom kinesisk medicin beror sjukdomar på blockeringar eller obalans. Genom att återställa kroppens organfunktioner bygger vi upp ditt immunförsvar och behandlar roten till problemet.
                    </p>
<div className="flex flex-col gap-5">
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-2xl bg-stone-100 flex items-center justify-center text-stone-500 shrink-0">
<iconify-icon className="text-3xl" icon="solar:hand-stars-linear"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="font-medium text-emerald-950 text-base">TCM Massage (Tui Na)</h4>
<p className="text-xs text-stone-500 mt-1">Djupgående kinesisk massage som löser upp blockeringar.</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-2xl bg-stone-100 flex items-center justify-center text-stone-500 shrink-0">
<iconify-icon className="text-3xl" icon="solar:body-linear"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="font-medium text-emerald-950 text-base">TCM Akupressur</h4>
<p className="text-xs text-stone-500 mt-1">Samma princip som akupunktur, men kraftfullare och utan nålar.</p>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xl reveal delay-100 transform rotate-1 hover:rotate-0 transition-transform duration-500">
<div className="grid grid-cols-2 text-sm text-center font-medium border-b border-stone-100">
<div className="py-6 text-stone-400 bg-stone-50/50">Skolmedicin</div>
<div className="py-6 text-emerald-900 bg-emerald-50/30 font-semibold">Pu Guang (TCM)</div>
</div>
<div className="divide-y divide-stone-100">
<div className="grid grid-cols-2 py-5 px-6 items-center group hover:bg-stone-50 transition-colors">
<div className="text-stone-500 text-xs md:text-sm">Fokuserar på symtomen</div>
<div className="text-emerald-900 font-medium flex items-center gap-2 text-xs md:text-sm">
<iconify-icon className="text-lg text-emerald-600" icon="solar:check-read-linear"></iconify-icon>
                                Fokuserar på orsaken
                            </div>
</div>
<div className="grid grid-cols-2 py-5 px-6 items-center group hover:bg-stone-50 transition-colors">
<div className="text-stone-500 text-xs md:text-sm">Kemiska läkemedel</div>
<div className="text-emerald-900 font-medium flex items-center gap-2 text-xs md:text-sm">
<iconify-icon className="text-lg text-emerald-600" icon="solar:check-read-linear"></iconify-icon>
                                Kroppens självläkning
                            </div>
</div>
<div className="grid grid-cols-2 py-5 px-6 items-center group hover:bg-stone-50 transition-colors">
<div className="text-stone-500 text-xs md:text-sm">Kort konsultation</div>
<div className="text-emerald-900 font-medium flex items-center gap-2 text-xs md:text-sm">
<iconify-icon className="text-lg text-emerald-600" icon="solar:check-read-linear"></iconify-icon>
                                Djup helhetsdiagnostik
                            </div>
</div>
<div className="grid grid-cols-2 py-5 px-6 items-center group hover:bg-stone-50 transition-colors">
<div className="text-stone-500 text-xs md:text-sm">Passiv behandling</div>
<div className="text-emerald-900 font-medium flex items-center gap-2 text-xs md:text-sm">
<iconify-icon className="text-lg text-emerald-600" icon="solar:check-read-linear"></iconify-icon>
                                Du stärks via Qigong
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 mx-2 md:mx-6 rounded-[3rem] relative overflow-hidden">

<div className="absolute inset-0">
<img alt="Background" className="w-full h-full object-cover grayscale brightness-[0.25]" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-emerald-950/80 mix-blend-multiply"></div>
</div>
<div className="max-w-7xl mx-auto relative z-10 text-[#FBF9F6]">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-20 text-center reveal">Vägen till god hälsa</h2>
<div className="grid md:grid-cols-4 gap-12 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-white/10 z-0"></div>

<div className="relative z-10 reveal delay-100">
<div className="w-12 h-12 bg-white text-emerald-900 rounded-full flex items-center justify-center font-serif text-lg font-medium mb-6 shadow-[0_0_20px_rgba(255,255,255,0.2)]">1</div>
<h3 className="text-xl font-medium mb-4">Diagnos</h3>
<p className="text-sm text-emerald-100/70 leading-relaxed">
                        Noggrann helhetsdiagnos enligt traditionell kinesisk medicin för att förstå grundorsaken.
                    </p>
</div>

<div className="relative z-10 reveal delay-200">
<div className="w-12 h-12 bg-emerald-800 border border-emerald-600 text-emerald-100 rounded-full flex items-center justify-center font-serif text-lg font-medium mb-6">2</div>
<h3 className="text-xl font-medium mb-4">Behandling</h3>
<p className="text-sm text-emerald-100/70 leading-relaxed">
                        Kombination av TCM-massage, akupressur och energibehandling utifrån dina obalanser.
                    </p>
</div>

<div className="relative z-10 reveal delay-300">
<div className="w-12 h-12 bg-emerald-800 border border-emerald-600 text-emerald-100 rounded-full flex items-center justify-center font-serif text-lg font-medium mb-6">3</div>
<h3 className="text-xl font-medium mb-4">Träning</h3>
<p className="text-sm text-emerald-100/70 leading-relaxed">
                        Kultivera din livsenergi och bli starkare med regelbunden Medicinsk Qigong och Tai Chi.
                    </p>
</div>

<div className="relative z-10 reveal delay-400">
<div className="w-12 h-12 bg-emerald-800 border border-emerald-600 text-emerald-100 rounded-full flex items-center justify-center font-serif text-lg font-medium mb-6">4</div>
<h3 className="text-xl font-medium mb-4">Självläkning</h3>
<p className="text-sm text-emerald-100/70 leading-relaxed">
                        Långsiktig hälsa och ett starkt immunförsvar som står emot framtida påfrestningar.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-b border-stone-200">
<div className="max-w-5xl mx-auto text-center reveal">
<h2 className="text-3xl md:text-4xl font-medium text-emerald-950 tracking-tight mb-12">Vi hjälper kroppen att läka</h2>
<div className="flex flex-wrap justify-center gap-3 mb-12">
<span className="px-5 py-2.5 rounded-full bg-stone-50 border border-stone-200 text-sm text-stone-700 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-900 transition-colors cursor-default">Allergier &amp; Eksem</span>
<span className="px-5 py-2.5 rounded-full bg-stone-50 border border-stone-200 text-sm text-stone-700 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-900 transition-colors cursor-default">Mag- &amp; tarmproblem</span>
<span className="px-5 py-2.5 rounded-full bg-stone-50 border border-stone-200 text-sm text-stone-700 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-900 transition-colors cursor-default">Kronisk ryggvärk</span>
<span className="px-5 py-2.5 rounded-full bg-stone-50 border border-stone-200 text-sm text-stone-700 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-900 transition-colors cursor-default">Post-covid &amp; Trötthet</span>
<span className="px-5 py-2.5 rounded-full bg-stone-50 border border-stone-200 text-sm text-stone-700 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-900 transition-colors cursor-default">Högt blodtryck</span>
<span className="px-5 py-2.5 rounded-full bg-stone-50 border border-stone-200 text-sm text-stone-700 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-900 transition-colors cursor-default">Stroke-rehabilitering</span>
</div>
<a className="inline-flex items-center gap-2 text-emerald-900 font-medium text-base hover:underline underline-offset-4 decoration-emerald-500" href="#kontakt">
                Osäker på om vi kan hjälpa dig? Kontakta oss för rådgivning 
                <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 px-6 bg-[#FBF9F6]" id="stories">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-5xl font-medium text-emerald-950 tracking-tight mb-16 text-center reveal">Resultat som förändrar liv</h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white p-10 rounded-3xl border border-stone-100 shadow-sm reveal hover:shadow-lg transition-shadow">
<div className="flex items-center justify-between mb-8">
<div className="w-14 h-14 bg-stone-100 rounded-full flex items-center justify-center text-stone-400">
<iconify-icon className="text-3xl" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div className="flex text-emerald-500 gap-0.5">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
</div>
<p className="text-base md:text-lg text-stone-700 leading-relaxed mb-6 italic">
                        "Läkaren sa att mina njurar bara hade 13% kapacitet och att jag behövde dialys. 15 dagar efter behandlingen hörde jag av mig till Pu Guang – mina njurar hade börjat fungera normalt. Nu behöver jag bara stiga upp ett par gånger på natten."
                    </p>
<div>
<div className="font-serif font-medium text-base text-emerald-950">Man, 70 år</div>
<div className="text-xs text-stone-500">Slipper dialys med TCM</div>
</div>
</div>

<div className="bg-white p-10 rounded-3xl border border-stone-100 shadow-sm reveal delay-100 hover:shadow-lg transition-shadow">
<div className="flex items-center justify-between mb-8">
<div className="w-14 h-14 bg-stone-100 rounded-full flex items-center justify-center text-stone-400">
<iconify-icon className="text-3xl" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div className="flex text-emerald-500 gap-0.5">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
</div>
<p className="text-base md:text-lg text-stone-700 leading-relaxed mb-6 italic">
                        "Efter andra behandlingen kunde jag sluta med sömnmediciner. Under fyra månader fick jag fem behandlingar och började träna medicinsk qigong. Nu är nästan alla mina eksem och allergier borta. Jag känner mycket mindre ångest."
                    </p>
<div>
<div className="font-serif font-medium text-base text-emerald-950">Kvinna, 28 år</div>
<div className="text-xs text-stone-500">Blev av med eksem och allergi</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 mx-2 md:mx-6 bg-gradient-to-br from-emerald-50 to-[#FBF9F6] rounded-[3rem] border border-stone-100" id="kurser">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl md:text-5xl font-medium text-emerald-950 tracking-tight mb-4 text-center reveal">Utbildningar &amp; Kurser</h2>
<p className="text-center text-stone-600 mb-12 max-w-2xl mx-auto reveal delay-100 text-base">Vi erbjuder kurser av högsta kvalitet inom Qigong och Tai Chi. Bevara din livsenergi och öka kroppens egen läkförmåga.</p>
<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 reveal delay-200">
<div className="flex items-start gap-5 p-6 bg-white rounded-3xl shadow-sm border border-emerald-100/50 hover:-translate-y-1 transition-transform">
<div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
<img alt="Qigong" className="w-full h-full object-cover grayscale opacity-80" src="https://images.staticjw.com/pug/9792/qigong.jpg"/>
</div>
<div>
<h3 className="text-lg font-medium text-emerald-950 mb-1">Medicinsk Qigong</h3>
<p className="text-xs text-stone-500 mb-3">Nybörjarkurser (Etapp 1-3). Ökar stresstålighet, ger avslappning och dämpar muskelspänning.</p>
<a className="text-xs font-semibold text-emerald-700 hover:text-emerald-900" href="#kontakt">Läs mer →</a>
</div>
</div>
<div className="flex items-start gap-5 p-6 bg-white rounded-3xl shadow-sm border border-emerald-100/50 hover:-translate-y-1 transition-transform">
<div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
<img alt="Tai Chi" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1599839619722-39751411ea63?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div>
<h3 className="text-lg font-medium text-emerald-950 mb-1">Tai Chi Chuan</h3>
<p className="text-xs text-stone-500 mb-3">Ett sagolikt skönt sätt att röra sig. Utbilda dig till instruktör och fördjupa dina kunskaper.</p>
<a className="text-xs font-semibold text-emerald-700 hover:text-emerald-900" href="#kontakt">Läs mer →</a>
</div>
</div>
<div className="flex items-start gap-5 p-6 bg-white rounded-3xl shadow-sm border border-emerald-100/50 hover:-translate-y-1 transition-transform">
<div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-700 shrink-0">
<iconify-icon className="text-2xl" icon="solar:hand-shake-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-emerald-950 mb-1">TCM Massageutbildning</h3>
<p className="text-xs text-stone-500 mb-3">Lär dig professionell Tui Na (kinesisk massage) för att kunna hjälpa andra professionellt.</p>
<a className="text-xs font-semibold text-emerald-700 hover:text-emerald-900" href="#kontakt">Läs mer →</a>
</div>
</div>
<div className="flex items-start gap-5 p-6 bg-white rounded-3xl shadow-sm border border-emerald-100/50 hover:-translate-y-1 transition-transform">
<div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-700 shrink-0">
<iconify-icon className="text-2xl" icon="solar:target-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-emerald-950 mb-1">TCM Akupressur Terapeut</h3>
<p className="text-xs text-stone-500 mb-3">Behandla genom att stimulera akupunkturpunkter utan nålar. En kraftfull behandlingsmetod.</p>
<a className="text-xs font-semibold text-emerald-700 hover:text-emerald-900" href="#kontakt">Läs mer →</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="om">
<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 reveal">
<div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl max-w-sm mx-auto lg:mx-0">
<img alt="Pu Guang" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.staticjw.com/pug/3242/puguang.jpg"/>
</div>
</div>
<div className="order-1 lg:order-2 reveal delay-100">
<h2 className="text-3xl md:text-5xl font-medium text-emerald-950 tracking-tight mb-6">Om Qigongmästare Pu Guang</h2>
<p className="text-base text-stone-600 leading-relaxed mb-6">
                    Pu Guang driver Nordiska Qigong Skolan och TCM Akademin, med målet att sprida femtusenårig kunskap inom hälsa och välmående i Norden. 
                </p>
<p className="text-base text-stone-600 leading-relaxed mb-8">
                    Han har en oöverträffad förmåga att diagnosticera och behandla hälsoproblem där konventionell medicin ofta går bet. Genom sin starka livsenergi och djupa förståelse för TCM, hjälper han kroppen att återfå sin naturliga balans.
                </p>
<div className="flex items-center gap-6 pt-6 border-t border-stone-100">
<div className="text-center">
<div className="text-3xl font-serif text-emerald-900">20+</div>
<div className="text-[10px] uppercase tracking-wider text-stone-500 font-medium">Års Erfarenhet</div>
</div>
<div className="text-center">
<div className="text-3xl font-serif text-emerald-900">1000+</div>
<div className="text-[10px] uppercase tracking-wider text-stone-500 font-medium">Hjälpta Klienter</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-stone-200" id="kontakt">
<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
<div className="reveal">
<h2 className="text-4xl md:text-5xl font-medium text-emerald-950 tracking-tight mb-6 leading-tight">
                    Redo att stärka din livsenergi?
                </h2>
<p className="text-base md:text-lg text-stone-600 mb-10 leading-relaxed">
                    Kontakta oss för att boka tid för behandling, eller anmäl dig till någon av våra kommande kurser.
                </p>
<div className="space-y-6">
<div className="flex items-center gap-4 bg-[#FBF9F6] p-5 rounded-2xl border border-stone-100">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-800 shadow-sm shrink-0">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<div className="text-xs text-stone-500 font-medium">Ring oss direkt</div>
<div className="text-lg font-semibold text-emerald-950">070 - 5328 222</div>
</div>
</div>
<div className="flex items-center gap-4 bg-[#FBF9F6] p-5 rounded-2xl border border-stone-100">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-800 shadow-sm shrink-0">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<div className="text-xs text-stone-500 font-medium">Maila för förfrågningar</div>
<div className="text-lg font-semibold text-emerald-950">info@puguang.se</div>
</div>
</div>
</div>
</div>
<div className="bg-[#FBF9F6] p-8 md:p-10 rounded-3xl border border-stone-100 shadow-xl reveal delay-100 relative">
<div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-100 rounded-full blur-2xl opacity-60"></div>
<form className="space-y-5 relative z-10">
<div className="grid md:grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-xs font-medium text-stone-500 ml-1">Förnamn</label>
<input className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-emerald-900/10 focus:border-emerald-900 transition-all placeholder:text-stone-300" placeholder="Anna" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-stone-500 ml-1">Efternamn</label>
<input className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-emerald-900/10 focus:border-emerald-900 transition-all placeholder:text-stone-300" placeholder="Svensson" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-stone-500 ml-1">E-post</label>
<input className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-emerald-900/10 focus:border-emerald-900 transition-all placeholder:text-stone-300" placeholder="anna@exempel.se" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-stone-500 ml-1">Ärende</label>
<div className="relative">
<select className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-emerald-900/10 focus:border-emerald-900 transition-all text-stone-600 appearance-none">
<option>Boka Behandling...</option>
<option>Anmälan Qigongkurs</option>
<option>Anmälan Tai Chi</option>
<option>Terapeututbildning</option>
<option>Övrig fråga</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-stone-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<button className="w-full bg-emerald-900 text-white font-medium text-base py-4 rounded-xl mt-4 hover:bg-emerald-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 transform" type="button">
                        Skicka Förfrågan
                    </button>
<p className="text-center text-xs text-stone-400 mt-4 flex items-center justify-center gap-2">
<iconify-icon className="text-sm" icon="solar:lock-linear"></iconify-icon> Säker &amp; Konfidentiell kontakt
                    </p>
</form>
</div>
</div>
</section>

<footer className="py-12 text-center text-stone-400 text-xs border-t border-stone-200 bg-[#FBF9F6]">
<div className="mb-6">
<iconify-icon className="text-2xl mx-auto text-emerald-900 mb-2" icon="solar:leaf-linear"></iconify-icon>
</div>
<p className="font-medium tracking-wide text-stone-500 mb-2">PU GUANG KINESISK MEDICIN</p>
<p>Qigong, Tai Chi &amp; Traditionell Kinesisk Behandling</p>
<div className="mt-8 flex justify-center gap-4 text-stone-400">
<a className="hover:text-emerald-900 transition-colors" href="#">Blogg</a>
<a className="hover:text-emerald-900 transition-colors" href="#">Aktuellt</a>
<a className="hover:text-emerald-900 transition-colors" href="#">Företag</a>
</div>
<p className="mt-8">© 2024 Puguang.se. Alla rättigheter förbehållna.</p>
</footer>


    </>
  );
}
