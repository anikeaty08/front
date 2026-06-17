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



        gsap.registerPlugin(ScrollTrigger);

        // Glow effect following mouse with reduced sensitivity
        const glowBg = document.getElementById('glowBg');
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let currentX = mouseX;
        let currentY = mouseY;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY + window.scrollY;
        });

        function animateGlow() {
            currentX += (mouseX - currentX) * 0.03;
            currentY += (mouseY - currentY) * 0.03;
            glowBg.style.left = currentX + 'px';
            glowBg.style.top = currentY + 'px';
            requestAnimationFrame(animateGlow);
        }
        animateGlow();

        // Card glow effect
        document.querySelectorAll('.glow-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', x + 'px');
                card.style.setProperty('--mouse-y', y + 'px');
            });
        });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
      

<div className="glow-bg bg-blue-500" id="glowBg" style={{left: '50%', top: '30%', transform: 'translate(-50%, -50%)'}}></div>

<nav className="fixed top-0 left-0 right-0 z-50 p-4">
<div className="max-w-6xl mx-auto">
<div className="glass-nav rounded-full px-6 py-3 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter" href="#">Bley<span className="text-blue-400">.cz</span></a>
<div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
<a className="hover:text-white transition-colors" href="#sluzby">Služby</a>
<a className="hover:text-white transition-colors" href="#proces">Jak pracujeme</a>
<a className="hover:text-white transition-colors" href="#reference">Reference</a>
</div>
<a className="shimmer-btn group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(59,130,246,0.35)] rounded-full relative shadow-[0_8px_40px_rgba(59,130,246,0.25)]" href="#kontakt">
<div className="absolute inset-0">
<div className="absolute inset-[-200%] w-[400%] h-[400%] rotate-gradient">
<div className="absolute inset-0" style={{background: 'conic-gradient(from calc(270deg - (var(--spread) * 0.5)), transparent 0, var(--shimmer-color) var(--spread), transparent var(--spread))'}}></div>
</div>
</div>
<div className="absolute rounded-full backdrop-blur" style={{background: 'var(--bg)', inset: 'var(--cut)'}}></div>
<div className="z-10 flex gap-2 overflow-hidden text-sm font-medium text-white px-5 py-2 relative items-center rounded-full">
<div className="border-beam"></div>
<div className="absolute rounded-full" style={{inset: '1px', background: 'rgba(10, 11, 20, 0.8)', backdropFilter: 'blur(8px)'}}></div>
<span className="whitespace-nowrap relative z-10 font-sans">Chci nový web</span>
</div>
</a>
</div>
</div>
</nav>

<section className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16 relative">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-widest mb-8">
<span className="iconify" data-height="14" data-icon="lucide:map-pin" data-width="14" style={{strokeWidth: '1.5'}}></span>
                Jižní Čechy a okolí
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6">
                Moderní weby, které 
                <span className="text-gray-500">prodávají</span> a 
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">rostou s vámi</span>
</h1>
<p className="text-lg sm:text-xl text-gray-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Tvoříme rychlé, SEO optimalizované webové stránky na míru. Žádné šablony, žádné kompromisy. Pouze weby, které fungují.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="shimmer-btn group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(59,130,246,0.35)] rounded-full relative shadow-[0_8px_40px_rgba(59,130,246,0.25)]" href="#kontakt">
<div className="absolute inset-0">
<div className="absolute inset-[-200%] w-[400%] h-[400%] rotate-gradient">
<div className="absolute inset-0" style={{background: 'conic-gradient(from calc(270deg - (var(--spread) * 0.5)), transparent 0, var(--shimmer-color) var(--spread), transparent var(--spread))'}}></div>
</div>
</div>
<div className="absolute rounded-full backdrop-blur" style={{background: 'var(--bg)', inset: 'var(--cut)'}}></div>
<div className="z-10 flex gap-3 overflow-hidden text-base font-medium text-white px-8 py-4 relative items-center rounded-full">
<div className="border-beam"></div>
<div className="absolute rounded-full" style={{inset: '1px', background: 'rgba(10, 11, 20, 0.8)', backdropFilter: 'blur(8px)'}}></div>
<span className="whitespace-nowrap relative z-10 font-sans">Chci nový web</span>
<span className="inline-flex items-center justify-center z-10 bg-white/10 w-7 h-7 rounded-full relative">
<span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
</div>
</a>
<span className="text-sm text-gray-500">Nezávazná konzultace + návrh zdarma</span>
</div>
<div className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-500 flex-wrap">
<div className="flex items-center gap-2">
<span className="iconify text-green-400" data-height="16" data-icon="lucide:check-circle" data-width="16" style={{strokeWidth: '1.5'}}></span>
                    SEO od základu
                </div>
<div className="flex items-center gap-2">
<span className="iconify text-green-400" data-height="16" data-icon="lucide:check-circle" data-width="16" style={{strokeWidth: '1.5'}}></span>
                    Rychlé načítání
                </div>
<div className="flex items-center gap-2">
<span className="iconify text-green-400" data-height="16" data-icon="lucide:check-circle" data-width="16" style={{strokeWidth: '1.5'}}></span>
                    Responzivní design
                </div>
</div>
</div>
</section>

<section className="py-24 px-4" id="proces">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<span className="text-xs uppercase tracking-widest text-gray-500 mb-4 block">Náš přístup</span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">Jak pracujeme</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="glow-card rounded-3xl p-px">
<div className="glow-inner rounded-3xl p-8">
<div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
<span className="iconify" data-height="24" data-icon="lucide:message-circle" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-3">1. Konzultace</h3>
<p className="text-sm text-gray-400 leading-relaxed">Posloucháme, co potřebujete. Zjistíme vaše cíle a navrhneme řešení na míru.</p>
</div>
</div>
<div className="glow-card rounded-3xl p-px">
<div className="glow-inner rounded-3xl p-8">
<div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6">
<span className="iconify" data-height="24" data-icon="lucide:palette" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-3">2. Návrh designu</h3>
<p className="text-sm text-gray-400 leading-relaxed">Vytvoříme moderní design, který odpovídá vaší značce a osloví zákazníky.</p>
</div>
</div>
<div className="glow-card rounded-3xl p-px">
<div className="glow-inner rounded-3xl p-8">
<div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 mb-6">
<span className="iconify" data-height="24" data-icon="lucide:code-2" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-3">3. Vývoj</h3>
<p className="text-sm text-gray-400 leading-relaxed">Kódujeme rychlý, čistý web optimalizovaný pro vyhledávače od prvního řádku.</p>
</div>
</div>
<div className="glow-card rounded-3xl p-px">
<div className="glow-inner rounded-3xl p-8">
<div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6">
<span className="iconify" data-height="24" data-icon="lucide:rocket" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-3">4. Spuštění</h3>
<p className="text-sm text-gray-400 leading-relaxed">Web spustíme a zůstáváme s vámi i po předání. Podpora je samozřejmostí.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" id="sluzby">
<div className="max-w-6xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-xs uppercase tracking-widest text-gray-500 mb-4 block">Co nabízíme</span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                        Služby, které váš byznys 
                        <span className="text-gray-500">posunou vpřed</span>
</h2>
<p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
                        Neděláme weby do počtu. Každý projekt bereme jako příležitost vytvořit něco, co skutečně funguje a přináší výsledky.
                    </p>
<a className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium" href="#kontakt">
                        Pojďme se bavit o vašem projektu
                        <span className="iconify" data-height="18" data-icon="lucide:arrow-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
<div className="space-y-4">
<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
<span className="iconify" data-height="20" data-icon="lucide:layout" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="font-medium mb-1">Webové stránky na míru</h3>
<p className="text-sm text-gray-500">Unikátní design přesně podle vašich potřeb. Žádné předělané šablony.</p>
</div>
</div>
</div>
<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
<span className="iconify" data-height="20" data-icon="lucide:smartphone" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="font-medium mb-1">Responzivní design</h3>
<p className="text-sm text-gray-500">Perfektní zobrazení na mobilu, tabletu i počítači. Vždy.</p>
</div>
</div>
</div>
<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 shrink-0">
<span className="iconify" data-height="20" data-icon="lucide:search" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="font-medium mb-1">SEO optimalizace</h3>
<p className="text-sm text-gray-500">Web je připravený pro vyhledávače už při tvorbě. Buďte vidět.</p>
</div>
</div>
</div>
<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0">
<span className="iconify" data-height="20" data-icon="lucide:zap" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="font-medium mb-1">Rychlé načítání</h3>
<p className="text-sm text-gray-500">Optimalizovaný kód = spokojení návštěvníci a lepší pozice v Google.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-20">
<span className="text-xs uppercase tracking-widest text-gray-500 mb-4 block">Spolupráce krok za krokem</span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">Průběh projektu</h2>
</div>
<div className="space-y-8" style={{minHeight: '200vh'}}>
<div className="sticky-card" style={{top: '15vh'}}>
<div className="bg-gradient-to-br from-blue-950/30 to-blue-900/10 border border-blue-500/10 rounded-3xl p-8 sm:p-12">
<span className="text-blue-400 text-sm font-medium mb-4 block">Krok 1</span>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">Konzultace &amp; analýza</h3>
<p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                            Sedneme si společně (osobně nebo online) a probereme, co přesně potřebujete. Zjistíme vaše cíle, cílovou skupinu a konkurenci. Na základě toho připravíme návrh řešení.
                        </p>
</div>
</div>
<div className="sticky-card" style={{top: '18vh'}}>
<div className="bg-gradient-to-br from-purple-950/30 to-purple-900/10 border border-purple-500/10 rounded-3xl p-8 sm:p-12">
<span className="text-purple-400 text-sm font-medium mb-4 block">Krok 2</span>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">Návrh řešení</h3>
<p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                            Připravíme detailní návrh včetně struktury webu, wireframů a cenové kalkulace. Vše schválíte předem, žádná překvapení.
                        </p>
</div>
</div>
<div className="sticky-card" style={{top: '21vh'}}>
<div className="bg-gradient-to-br from-green-950/30 to-green-900/10 border border-green-500/10 rounded-3xl p-8 sm:p-12">
<span className="text-green-400 text-sm font-medium mb-4 block">Krok 3</span>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">Design &amp; vývoj</h3>
<p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                            Pustíme se do práce. Vytvoříme design a poté ho převedeme do funkčního webu. Průběžně vás informujeme a máte možnost připomínkovat.
                        </p>
</div>
</div>
<div className="sticky-card" style={{top: '24vh'}}>
<div className="bg-gradient-to-br from-orange-950/30 to-orange-900/10 border border-orange-500/10 rounded-3xl p-8 sm:p-12">
<span className="text-orange-400 text-sm font-medium mb-4 block">Krok 4</span>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">Spuštění &amp; podpora</h3>
<p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                            Web otestujeme, nasadíme a spustíme. Zaškolíme vás v administraci a zůstáváme k dispozici pro jakékoliv dotazy nebo úpravy.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4" id="reference">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium uppercase tracking-widest mb-6">
<span className="iconify" data-height="14" data-icon="lucide:shield-check" data-width="14" style={{strokeWidth: '1.5'}}></span>
                    Garance spokojenosti
                </div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">Co říkají klienti</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="glass-review rounded-3xl p-8">
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<span className="iconify" data-height="16" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-height="16" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-height="16" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-height="16" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-height="16" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
</div>
<p className="text-gray-300 leading-relaxed mb-6">"Konečně web, který mi skutečně funguje. Za měsíc od spuštění mám víc poptávek než za celý minulý rok. Skvělá práce!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-sm font-semibold">JN</div>
<div>
<p className="font-medium text-sm">Jan Novák</p>
<p className="text-xs text-gray-500">Truhlářství Novák, České Budějovice</p>
</div>
</div>
</div>
<div className="glass-review rounded-3xl p-8">
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<span className="iconify" data-height="16" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-height="16" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-height="16" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-height="16" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-height="16" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
</div>
<p className="text-gray-300 leading-relaxed mb-6">"Profesionální přístup od začátku do konce. Web je rychlý, krásný a zákazníci mi píšou, jak se jim líbí. Doporučuji všem."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-sm font-semibold">PK</div>
<div>
<p className="font-medium text-sm">Petra Králová</p>
<p className="text-xs text-gray-500">Květinářství Růže, Písek</p>
</div>
</div>
</div>
<div className="glass-review rounded-3xl p-8 md:col-span-2 lg:col-span-1">
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<span className="iconify" data-height="16" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-height="16" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-height="16" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-height="16" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-height="16" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
</div>
<p className="text-gray-300 leading-relaxed mb-6">"Starý web nám dělal jen ostudu. Teď máme něco, co odpovídá kvalitě našich služeb. A v Google nás konečně najdou."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-sm font-semibold">MH</div>
<div>
<p className="font-medium text-sm">Martin Horák</p>
<p className="text-xs text-gray-500">Autoservis Horák, Tábor</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4" id="kontakt">
<div className="max-w-5xl mx-auto">
<div className="glow-card rounded-[40px] p-px">
<div className="glow-inner rounded-[40px] p-8 sm:p-12 lg:p-16">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
<div>
<span className="text-xs uppercase tracking-widest text-gray-500 mb-4 block">Napište mi</span>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
                                Pojďme vytvořit váš 
                                <span className="text-blue-400">nový web</span>
</h2>
<p className="text-gray-400 leading-relaxed mb-8">
                                Nezávazná konzultace zdarma. Napište mi, co potřebujete, a ozvu se vám do 24 hodin.
                            </p>
<div className="space-y-4">
<a className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors" href="tel:+420728062575">
<span className="iconify" data-height="18" data-icon="lucide:phone" data-width="18" style={{strokeWidth: '1.5'}}></span>
                                    728 062 575
                                </a>
<a className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors" href="mailto:bley.info@gmail.com">
<span className="iconify" data-height="18" data-icon="lucide:mail" data-width="18" style={{strokeWidth: '1.5'}}></span>
                                    bley.info@gmail.com
                                </a>
<div className="flex items-center gap-3 text-gray-500">
<span className="iconify" data-height="18" data-icon="lucide:building-2" data-width="18" style={{strokeWidth: '1.5'}}></span>
                                    IČO: 19432500
                                </div>
</div>
</div>
<form className="space-y-5">
<div>
<label className="text-sm text-gray-400 mb-2 block">Jméno</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors" name="name" placeholder="Vaše jméno" required="" type="text"/>
</div>
<div className="grid sm:grid-cols-2 gap-5">
<div>
<label className="text-sm text-gray-400 mb-2 block">Telefon</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors" name="phone" placeholder="+420" type="tel"/>
</div>
<div>
<label className="text-sm text-gray-400 mb-2 block">E-mail</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors" name="email" placeholder="vas@email.cz" required="" type="email"/>
</div>
</div>
<div>
<label className="text-sm text-gray-400 mb-2 block">Zpráva</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors resize-none" name="message" placeholder="Popište váš projekt nebo firmu..." required="" rows="4"></textarea>
</div>
<label className="flex items-start gap-3 cursor-pointer">
<input className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-blue-500 focus:ring-blue-500/50" name="gdpr" required="" type="checkbox"/>
<span className="text-xs text-gray-500">Souhlasím se zpracováním osobních údajů za účelem kontaktování (GDPR)</span>
</label>
<button className="shimmer-btn group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(59,130,246,0.35)] rounded-full relative shadow-[0_8px_40px_rgba(59,130,246,0.25)]" type="submit">
<div className="absolute inset-0">
<div className="absolute inset-[-200%] w-[400%] h-[400%] rotate-gradient">
<div className="absolute inset-0" style={{background: 'conic-gradient(from calc(270deg - (var(--spread) * 0.5)), transparent 0, var(--shimmer-color) var(--spread), transparent var(--spread))'}}></div>
</div>
</div>
<div className="absolute rounded-full backdrop-blur" style={{background: 'var(--bg)', inset: 'var(--cut)'}}></div>
<div className="z-10 flex gap-3 overflow-hidden text-base font-medium text-white px-8 py-4 relative items-center rounded-full">
<div className="border-beam"></div>
<div className="absolute rounded-full" style={{inset: '1px', background: 'rgba(10, 11, 20, 0.8)', backdropFilter: 'blur(8px)'}}></div>
<span className="whitespace-nowrap relative z-10 font-sans">Chci nový web</span>
<span className="inline-flex items-center justify-center z-10 bg-white/10 w-7 h-7 rounded-full relative">
<span className="iconify" data-height="16" data-icon="lucide:send" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
</div>
</button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="py-16 px-4 border-t border-white/5">
<div className="max-w-6xl mx-auto">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
<div className="lg:col-span-5">
<a className="text-3xl sm:text-4xl font-semibold tracking-tighter block mb-4" href="#">Bley<span className="text-blue-400">.cz</span></a>
<p className="text-gray-500 max-w-sm leading-relaxed">
                        Moderní webové stránky na míru pro firmy v Jihočeském kraji a okolí. Profesionální přístup, férové ceny.
                    </p>
</div>
<div className="lg:col-span-7">
<div className="grid sm:grid-cols-3 gap-8">
<div>
<h4 className="text-sm font-medium mb-4">Navigace</h4>
<div className="space-y-3 text-sm text-gray-500">
<a className="block hover:text-white transition-colors" href="#sluzby">Služby</a>
<a className="block hover:text-white transition-colors" href="#proces">Jak pracujeme</a>
<a className="block hover:text-white transition-colors" href="#reference">Reference</a>
<a className="block hover:text-white transition-colors" href="#kontakt">Kontakt</a>
</div>
</div>
<div>
<h4 className="text-sm font-medium mb-4">Kontakt</h4>
<div className="space-y-3 text-sm text-gray-500">
<a className="block hover:text-white transition-colors" href="tel:+420728062575">728 062 575</a>
<a className="block hover:text-white transition-colors" href="mailto:bley.info@gmail.com">bley.info@gmail.com</a>
<span className="block">IČO: 19432500</span>
</div>
</div>
<div>
<h4 className="text-sm font-medium mb-4">Sledujte mě</h4>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all" href="#">
<span className="iconify" data-height="18" data-icon="lucide:instagram" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all" href="#">
<span className="iconify" data-height="18" data-icon="lucide:linkedin" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all" href="#">
<span className="iconify" data-height="18" data-icon="lucide:facebook" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-600">© 2025 Bley.cz. Všechna práva vyhrazena.</p>
<p className="text-xs text-gray-600">Webové stránky na míru | Jižní Čechy</p>
</div>
</div>
</footer>


    </>
  );
}
