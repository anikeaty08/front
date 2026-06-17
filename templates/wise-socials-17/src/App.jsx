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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        document.addEventListener('DOMContentLoaded', () => {
            const container = document.getElementById('testimonialContainer');
            const leftBtn = document.getElementById('slideLeft');
            const rightBtn = document.getElementById('slideRight');
            const scrollAmount = 672; 

            function scrollContainer(val) {
                if(container) {
                    container.scrollBy({
                        left: val,
                        behavior: 'smooth'
                    });
                }
            }

            if(leftBtn) leftBtn.addEventListener('click', () => scrollContainer(-scrollAmount));
            if(rightBtn) rightBtn.addEventListener('click', () => scrollContainer(scrollAmount));

            const counters = document.querySelectorAll('.counter');
            const speed = 150; 

            const animateCounters = () => {
                counters.forEach(counter => {
                    const updateCount = () => {
                        const target = +counter.getAttribute('data-target');
                        const count = +counter.innerText;
                        const inc = Math.max(1, Math.ceil(target / speed * 4));
                        if (count < target) {
                            counter.innerText = Math.min(count + inc, target);
                            setTimeout(updateCount, 25);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCount();
                });
            }

            const statsSection = document.getElementById('stats');
            if(statsSection) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            animateCounters();
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.5 });
                observer.observe(statsSection);
            }
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
      

<div className="fixed top-0 left-0 w-full h-screen pointer-events-none glow-bg z-0"></div>

<nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 py-6">
<div className="w-full max-w-7xl flex items-center justify-between">

<a className="flex items-center hover:opacity-80 transition-opacity duration-200 shrink-0 z-50 backdrop-blur-sm rounded-lg pr-2" href="#">
<span className="text-xl tracking-tighter text-[#1E8EB6] lowercase font-bricolage font-bold">wise socials.</span>
</a>

<div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6">
<div className="flex items-center px-1.5 py-1.5 rounded-full border border-white/10 bg-[#0A0A0B]/80 backdrop-blur-xl shadow-lg hover:border-white/20 transition-all duration-300">
<a className="px-5 py-2 text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-full transition-colors" href="#sluzby">Služby</a>
<a className="px-5 py-2 text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-full transition-colors" href="#studie">Výsledky</a>
<a className="px-5 py-2 text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-full transition-colors" href="#o-nas">O nás</a>
<a className="px-5 py-2 text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-full transition-colors" href="#reference">Reference</a>
</div>
</div>

<a className="group flex items-center gap-2 bg-[#1E8EB6] hover:bg-[#197a9d] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-[0_0_20px_-5px_rgba(30,142,182,0.4)] shrink-0 z-50" href="#kontakt">
                Spolupráce
                <i className="w-4 h-4 transition-transform group-hover:translate-x-0.5 stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
</div>
</nav>

<main className="md:pt-48 md:pb-32 z-10 pt-40 pr-6 pb-20 pl-6 relative">
<div className="text-center max-w-4xl mr-auto ml-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-8 animate-fade-in bg-white/5 border-white/10 text-neutral-300">

<span className="w-2 h-2 rounded-full bg-[#1E8EB6] animate-pulse"></span>
<span className="font-sans">Přijímáme nové klienty na Q3/Q4</span>
</div>
<h1 className="text-5xl md:text-7xl tracking-tighter mb-6 leading-[1.1] font-bricolage font-bold text-white">
                Sociální sítě a reklamy,<br/>
                které přináší <span className="text-gradient-brand font-bricolage font-bold">výsledky</span>.
            </h1>
<p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-bricolage font-bold text-neutral-400">
                Jsme digitální agentura zaměřená na data a kreativitu. Pomáháme značkám růst, budovat komunitu a zvyšovat obrat.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-[#1E8EB6] text-sm font-medium rounded-full hover:bg-[#197a9d] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_rgba(30,142,182,0.4)] font-sans text-white" href="#sluzby">
                    Naše služby
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 border text-sm font-medium rounded-full transition-all flex items-center justify-center gap-2 font-sans bg-white/5 border-white/10 text-white hover:bg-white/10" href="#reference">
<i className="w-4 h-4" data-lucide="users"></i>
                    Reference
                </a>
</div>
</div>

<div className="mt-20 max-w-6xl mx-auto relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-[#1E8EB6] to-cyan-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
<div className="relative bg-[#0A0A0B] border rounded-xl overflow-hidden shadow-2xl border-white/10">

<div className="h-10 border-b flex items-center px-4 gap-2 bg-white/[0.02] border-white/5">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-white/10"></div>
<div className="w-3 h-3 rounded-full bg-white/10"></div>
<div className="w-3 h-3 rounded-full bg-white/10"></div>
</div>
<div className="mx-auto px-3 py-1 rounded text-[10px] text-neutral-500 font-mono tracking-wide font-sans bg-white/5">
                        Klient: Report Výkonnosti
                    </div>
</div>

<div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-4 gap-6">

<div className="hidden md:flex flex-col gap-6 col-span-1 border-r pr-6 border-white/5">
<div className="space-y-1">
<div className="h-8 w-full bg-[#1E8EB6]/10 border border-[#1E8EB6]/20 rounded-md flex items-center px-3 gap-3 text-[#1E8EB6] text-xs font-medium font-sans">
<i className="w-4 h-4" data-lucide="bar-chart-2"></i> Přehled
                            </div>
<div className="h-8 w-full rounded-md flex items-center px-3 gap-3 text-neutral-500 transition-colors text-xs cursor-pointer font-sans hover:bg-white/5 hover:text-neutral-300">
<i className="w-4 h-4" data-lucide="hash"></i> Meta Ads
                            </div>
<div className="h-8 w-full rounded-md flex items-center px-3 gap-3 text-neutral-500 transition-colors text-xs cursor-pointer font-sans hover:bg-white/5 hover:text-neutral-300">
<i className="w-4 h-4" data-lucide="play-circle"></i> TikTok
                            </div>
<div className="h-8 w-full rounded-md flex items-center px-3 gap-3 text-neutral-500 transition-colors text-xs cursor-pointer font-sans hover:bg-white/5 hover:text-neutral-300">
<i className="w-4 h-4" data-lucide="users"></i> Komunita
                            </div>
</div>
<div className="mt-auto p-4 rounded-lg bg-gradient-to-br from-[#1E8EB6]/20 to-transparent border border-[#1E8EB6]/20">
<p className="text-[10px] text-[#1E8EB6] font-medium mb-2 font-sans">PNO (ROAS) Cíl</p>
<div className="w-full h-1.5 rounded-full overflow-hidden bg-white/10">
<div className="bg-[#1E8EB6] h-full w-[85%]"></div>
</div>
<p className="text-[10px] text-[#1E8EB6]/60 mt-2 text-right font-sans">850% ROAS</p>
</div>
</div>

<div className="col-span-1 md:col-span-3 space-y-6">

<div className="grid grid-cols-3 gap-4">
<div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
<p className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1 font-sans">Obrat (Revenue)</p>
<p className="text-xl font-bricolage font-bold text-white">2.4M Kč</p>
<div className="flex items-center gap-1 mt-2 text-[10px] font-sans text-emerald-400">
<i className="w-3 h-3" data-lucide="trending-up"></i> +12.5%
                                </div>
</div>
<div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
<p className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1 font-sans">Konverze</p>
<p className="text-xl font-bricolage font-bold text-white">4.8%</p>
<div className="flex items-center gap-1 mt-2 text-[10px] font-sans text-emerald-400">
<i className="w-3 h-3" data-lucide="trending-up"></i> +1.2%
                                </div>
</div>
<div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
<p className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1 font-sans">Dosah</p>
<p className="text-xl font-bricolage font-bold text-white">842k</p>
<div className="flex items-center gap-1 mt-2 text-[10px] font-sans text-emerald-400">
<i className="w-3 h-3" data-lucide="trending-up"></i> +24%
                                </div>
</div>
</div>

<div className="h-48 rounded-lg bg-white/[0.02] border p-4 relative overflow-hidden flex flex-col justify-end border-white/5">
<div className="absolute top-4 left-4 flex gap-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-[#1E8EB6]"></div>
<span className="text-[10px] font-sans text-neutral-400">Instagram / FB</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-neutral-700"></div>
<span className="text-[10px] font-sans text-neutral-400">PPC Search</span>
</div>
</div>
<div className="flex items-end justify-between gap-2 h-32 px-2">
<div className="w-full bg-[#1E8EB6]/20 hover:bg-[#1E8EB6]/40 transition-colors rounded-t-sm h-[40%]"></div>
<div className="w-full bg-[#1E8EB6]/20 hover:bg-[#1E8EB6]/40 transition-colors rounded-t-sm h-[60%]"></div>
<div className="w-full bg-[#1E8EB6]/20 hover:bg-[#1E8EB6]/40 transition-colors rounded-t-sm h-[30%]"></div>
<div className="w-full bg-[#1E8EB6]/20 hover:bg-[#1E8EB6]/40 transition-colors rounded-t-sm h-[80%]"></div>
<div className="w-full bg-[#1E8EB6]/20 hover:bg-[#1E8EB6]/40 transition-colors rounded-t-sm h-[55%]"></div>
<div className="w-full bg-[#1E8EB6]/20 hover:bg-[#1E8EB6]/40 transition-colors rounded-t-sm h-[70%]"></div>
<div className="w-full bg-[#1E8EB6]/20 hover:bg-[#1E8EB6]/40 transition-colors rounded-t-sm h-[90%] bg-[#1E8EB6] shadow-[0_0_15px_rgba(30,142,182,0.5)]"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-20 border-y py-10 border-white/5">
<p className="text-center text-xs text-neutral-500 mb-8 font-medium uppercase tracking-widest font-sans">Důvěřují nám</p>
<div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-sm transform rotate-45 bg-white/80"></div>
<span className="font-semibold text-lg tracking-tight font-sans text-white">Acme</span>
</div>
<div className="flex items-center gap-2">
<div className="w-5 h-5 border-2 rounded-full border-white/80"></div>
<span className="font-semibold text-lg tracking-tight font-sans text-white">Sphere</span>
</div>
<div className="flex items-center gap-2">
<div className="flex gap-0.5">
<div className="w-2 h-5 rounded-full bg-white/80"></div>
<div className="w-2 h-5 rounded-full bg-white/80"></div>
</div>
<span className="font-semibold text-lg tracking-tight font-sans text-white">Parallel</span>
</div>
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-tr-xl rounded-bl-xl bg-white/80"></div>
<span className="font-semibold text-lg tracking-tight font-sans text-white">Vertex</span>
</div>
</div>
</div>
</main>

<section className="overflow-hidden bg-[#05080a] border-b pt-16 pb-16 relative border-white/5" id="stats">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 text-center">
<div className="space-y-3">
<div className="text-4xl md:text-6xl tracking-tighter font-bricolage font-bold text-white">
<span className="counter font-bricolage font-bold" data-target="500">14</span>M<span className="text-[#1E8EB6] font-bricolage font-bold">+</span>
</div>
<div className="text-sm font-medium font-sans text-neutral-400">Oslovených uživatelů</div>
</div>
<div className="space-y-3">
<div className="text-4xl md:text-6xl font-semibold tracking-tighter text-white">
<span className="counter font-bricolage font-bold" data-target="150">4</span><span className="text-[#1E8EB6] font-bricolage font-bold">+</span>
</div>
<div className="text-sm font-medium font-sans text-neutral-400">Spokojených klientů</div>
</div>
<div className="space-y-3">
<div className="text-4xl md:text-6xl font-semibold tracking-tighter text-white">
<span className="counter font-bricolage font-bold" data-target="12">1</span><span className="text-[#1E8EB6] font-bricolage font-bold">x</span>
</div>
<div className="text-sm font-medium font-sans text-neutral-400">Průměrný ROAS</div>
</div>
<div className="space-y-3">
<div className="text-4xl md:text-6xl tracking-tighter font-bricolage font-bold text-white">
                        24/7
                    </div>
<div className="text-sm font-medium font-sans text-neutral-400">Monitoring kampaní</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="sluzby">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl tracking-tighter mb-4 font-bricolage font-bold text-white">Kompletní digitální <br/><span className="text-neutral-500 font-bricolage font-bold">servis pro váš business.</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 grid-rows-2 h-auto md:h-[600px]">
<div className="bento-card rounded-3xl p-8 md:col-span-2 md:row-span-2 relative overflow-hidden group">
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-[#1E8EB6]/10 border border-[#1E8EB6]/20 flex items-center justify-center mb-6 text-[#1E8EB6]">
<i className="w-6 h-6" data-lucide="smartphone"></i>
</div>
<h3 className="text-2xl mb-2 tracking-tight font-bricolage font-bold text-white">Správa sociálních sítí</h3>
<p className="text-sm leading-relaxed max-w-sm font-sans text-neutral-400">Staráme se o vaše profily od A do Z. Tvorba strategie, natáčení Reels, copywriting a community management. Budujeme lovebrandy.</p>
</div>
<div className="absolute right-0 bottom-0 w-3/4 h-3/4 translate-x-1/4 translate-y-1/4 opacity-50 group-hover:opacity-80 transition duration-500">
<div className="w-full h-full border rounded-tl-3xl bg-[#0F0F10] p-6 relative border-white/10">
<div className="grid grid-cols-2 gap-4">
<div className="aspect-[9/16] rounded-lg bg-white/5"></div>
<div className="aspect-[9/16] rounded-lg bg-white/5"></div>
</div>
</div>
</div>
</div>
<div className="bento-card rounded-3xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition duration-500">
<i className="w-20 h-20 stroke-[1]" data-lucide="bar-chart"></i>
</div>
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400">
<i className="w-5 h-5" data-lucide="banknote"></i>
</div>
<h3 className="text-lg font-medium mb-2 tracking-tight font-sans text-white">Výkonnostní reklamy</h3>
<p className="text-xs leading-relaxed font-sans text-neutral-400">Meta Ads (FB/IG), TikTok Ads a PPC. Maximalizujeme ROAS a škálujeme zisky.</p>
</div>
<div className="bento-card rounded-3xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition duration-500">
<i className="w-20 h-20 stroke-[1]" data-lucide="camera"></i>
</div>
<div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4 text-orange-400">
<i className="w-5 h-5" data-lucide="clapperboard"></i>
</div>
<h3 className="text-lg font-medium mb-2 tracking-tight font-sans text-white">Kreativní produkce</h3>
<p className="text-xs leading-relaxed font-sans text-neutral-400">Video produkce, focení a grafika. Obsah, který zastaví scrollování.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y bg-white/[0.01] border-white/5" id="o-nas">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div className="sticky top-24">
<h2 className="text-3xl md:text-5xl tracking-tighter mb-6 font-bricolage font-bold text-white">
                    Strategie, která <br/> funguje jako <span className="font-bricolage font-bold text-neutral-400">stroj</span>.
                </h2>
<p className="leading-relaxed text-sm mb-8 font-sans text-neutral-400">
                    Nehrajeme na náhodu. Každý krok je podložen daty a zkušenostmi z desítek úspěšných kampaní. Tady je náš proces spolupráce.
                </p>
<div className="flex items-center gap-4">
<a className="px-7 py-2.5 bg-[#1E8EB6] text-xs font-semibold rounded-full hover:bg-[#197a9d] transition-colors shadow-[0_0_15px_-3px_rgba(30,142,182,0.4)] font-sans text-white" href="#kontakt">Začít spolupráci</a>
</div>
</div>
<div className="space-y-12">
<div className="flex gap-6 group">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full border flex items-center justify-center text-sm font-mono group-hover:bg-[#1E8EB6] group-hover:border-[#1E8EB6] transition-colors duration-300 font-sans border-white/20 bg-white/5 text-white">1</div>
<div className="h-full w-[1px] my-4 group-hover:bg-[#1E8EB6]/30 transition-colors bg-white/10"></div>
</div>
<div className="pb-8 pt-1">
<h4 className="text-lg font-medium mb-3 font-sans text-white">Audit &amp; Strategie</h4>
<p className="text-sm text-neutral-500 leading-relaxed max-w-md font-sans">Analyzujeme vaši současnou situaci, konkurenci a stanovíme jasná KPI. Žádné střílení od boku, ale plán na míru vašim cílům.</p>
</div>
</div>
<div className="flex gap-6 group">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full border flex items-center justify-center text-sm font-mono group-hover:bg-[#1E8EB6] group-hover:border-[#1E8EB6] transition-colors duration-300 font-sans border-white/20 bg-white/5 text-white">2</div>
<div className="h-full w-[1px] my-4 group-hover:bg-[#1E8EB6]/30 transition-colors bg-white/10"></div>
</div>
<div className="pb-8 pt-1">
<h4 className="text-lg font-medium mb-3 font-sans text-white">Tvorba &amp; Exekuce</h4>
<p className="text-sm text-neutral-500 leading-relaxed max-w-md font-sans">Náš tým kreativců a media buyerů převezme otěže. Vy schvalujete klíčové kroky, my doručujeme výsledky a kreativu.</p>
</div>
</div>
<div className="flex gap-6 group">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full border flex items-center justify-center text-sm font-mono group-hover:bg-[#1E8EB6] group-hover:border-[#1E8EB6] transition-colors duration-300 font-sans border-white/20 bg-white/5 text-white">3</div>
</div>
<div className="pb-8 pt-1">
<h4 className="text-lg font-medium mb-3 font-sans text-white">Reporting &amp; Optimalizace</h4>
<p className="text-sm text-neutral-500 leading-relaxed max-w-md font-sans">Pravidelné reporty a neustálé ladění kampaní pro maximální návratnost investic. Škálujeme to, co funguje.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b bg-[#030304] relative border-white/5" id="studie">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-5xl tracking-tighter mb-4 font-bricolage font-bold text-white">Výsledky mluví <span className="text-neutral-500 font-bricolage font-bold">za nás.</span></h2>
<p className="text-sm md:text-base font-light font-sans text-neutral-400">
                    Prohlédněte si naše vybrané případové studie, kde jsme pomohli klientům překonat jejich cíle.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="group relative rounded-[32px] bg-[#0d161f] border border-[#1e293b] overflow-hidden hover:border-[#1E8EB6]/30 transition-all duration-500 hover:-translate-y-1">
<div className="h-64 relative overflow-hidden">
<div className="absolute top-5 left-5 z-20">
<span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1a2c38]/90 backdrop-blur-md border border-[#1E8EB6]/20 text-xs font-medium text-[#1E8EB6] shadow-lg font-sans">
                                E-commerce &amp; Krása
                            </span>
</div>
<img alt="Case Study 1" className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0d161f] via-transparent to-transparent"></div>
</div>
<div className="p-8 pt-2">
<h3 className="text-xl mb-3 tracking-tight group-hover:text-[#1E8EB6] transition-colors font-bricolage font-bold text-white">Jak jsme zvýšili ROAS na 850% pomocí UGC obsahu</h3>
<p className="text-sm leading-relaxed mb-8 font-light font-sans text-slate-400">
                            Tradiční produktové fotky přestaly fungovat. Vytvořili jsme strategii založenou na autentických videích od reálných zákazníků a mikro-influencerů. Kampaň běžela na platformách Meta a TikTok s cílem maximalizovat konverze v Q4.
                        </p>
<div className="h-px w-full bg-[#1e293b] mb-6"></div>
<div className="grid grid-cols-3 gap-2 mb-8">
<div>
<div className="text-2xl text-[#1E8EB6] tracking-tight font-bricolage font-bold">+120%</div>
<div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mt-1 font-sans">Nárůst tržeb</div>
</div>
<div>
<div className="text-2xl text-[#1E8EB6] tracking-tight font-bricolage font-bold">8.5x</div>
<div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mt-1 font-sans">Průměrný ROAS</div>
</div>
<div>
<div className="text-2xl text-[#1E8EB6] tracking-tight font-bricolage font-bold">11.7%</div>
<div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mt-1 font-sans">PNO</div>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-lg border border-[#1e293b] bg-[#111a24] text-xs font-medium font-sans text-slate-400">#Facebook Ads</span>
<span className="px-3 py-1.5 rounded-lg border border-[#1e293b] bg-[#111a24] text-xs font-medium font-sans text-slate-400">#UGC</span>
<span className="px-3 py-1.5 rounded-lg border border-[#1e293b] bg-[#111a24] text-xs font-medium font-sans text-slate-400">#Reels</span>
</div>
</div>
</div>
<div className="group relative rounded-[32px] bg-[#0d161f] border border-[#1e293b] overflow-hidden hover:border-[#1E8EB6]/30 transition-all duration-500 hover:-translate-y-1">
<div className="h-64 relative overflow-hidden">
<div className="absolute top-5 left-5 z-20">
<span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1a2c38]/90 backdrop-blur-md border border-[#1E8EB6]/20 text-xs font-medium text-[#1E8EB6] shadow-lg font-sans">
                                SaaS &amp; B2B
                            </span>
</div>
<img alt="Case Study 2" className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0d161f] via-transparent to-transparent"></div>
</div>
<div className="p-8 pt-2">
<h3 className="text-xl mb-3 tracking-tight group-hover:text-[#1E8EB6] transition-colors font-bricolage font-bold text-white">Generování kvalifikovaných leadů pro tech startup</h3>
<p className="text-sm leading-relaxed mb-8 font-light font-sans text-slate-400">
                            Pro B2B klienta jsme nasadili LinkedIn Ads kombinované s precizním retargetingem. Cílem bylo snížit cenu za lead (CPL) a zvýšit kvalitu poptávek pro obchodní oddělení. Využili jsme Lead Gen Forms.
                        </p>
<div className="h-px w-full bg-[#1e293b] mb-6"></div>
<div className="grid grid-cols-3 gap-2 mb-8">
<div>
<div className="text-2xl text-[#1E8EB6] tracking-tight font-bricolage font-bold">-30%</div>
<div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mt-1 font-sans">Cena za lead</div>
</div>
<div>
<div className="text-2xl text-[#1E8EB6] tracking-tight font-bricolage font-bold">2.4k</div>
<div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mt-1 font-sans">Nové kontakty</div>
</div>
<div>
<div className="text-2xl text-[#1E8EB6] tracking-tight font-bricolage font-bold">45%</div>
<div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mt-1 font-sans">Míra konverze</div>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-lg border border-[#1e293b] bg-[#111a24] text-xs font-medium font-sans text-slate-400">#LinkedIn</span>
<span className="px-3 py-1.5 rounded-lg border border-[#1e293b] bg-[#111a24] text-xs font-medium font-sans text-slate-400">#Automation</span>
<span className="px-3 py-1.5 rounded-lg border border-[#1e293b] bg-[#111a24] text-xs font-medium font-sans text-slate-400">#LeadGen</span>
</div>
</div>
</div>
<div className="group relative rounded-[32px] bg-[#0d161f] border border-[#1e293b] overflow-hidden hover:border-[#1E8EB6]/30 transition-all duration-500 hover:-translate-y-1">
<div className="h-64 relative overflow-hidden">
<div className="absolute top-5 left-5 z-20">
<span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1a2c38]/90 backdrop-blur-md border border-[#1E8EB6]/20 text-xs font-medium text-[#1E8EB6] shadow-lg font-sans">
                                Fashion Brand
                            </span>
</div>
<img alt="Case Study 3" className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0d161f] via-transparent to-transparent"></div>
</div>
<div className="p-8 pt-2">
<h3 className="text-xl mb-3 tracking-tight group-hover:text-[#1E8EB6] transition-colors font-bricolage font-bold text-white">Expanze módní značky na 4 nové trhy v CEE</h3>
<p className="text-sm leading-relaxed mb-8 font-light font-sans text-slate-400">
                            Komplexní strategie vstupu na zahraniční trhy. Lokalizace obsahu, nastavení TikTok Ads a spolupráce s lokálními influencery. Během 6 měsíců se značka stala jedničkou ve své kategorii v Rumunsku.
                        </p>
<div className="h-px w-full bg-[#1e293b] mb-6"></div>
<div className="grid grid-cols-3 gap-2 mb-8">
<div>
<div className="text-2xl text-[#1E8EB6] tracking-tight font-bricolage font-bold">4</div>
<div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mt-1 font-sans">Nové země</div>
</div>
<div>
<div className="text-2xl text-[#1E8EB6] tracking-tight font-bricolage font-bold">+210%</div>
<div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mt-1 font-sans">Meziroční růst</div>
</div>
<div>
<div className="text-2xl text-[#1E8EB6] tracking-tight font-bricolage font-bold">1.2M</div>
<div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mt-1 font-sans">Dosah / měsíc</div>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-lg border border-[#1e293b] bg-[#111a24] text-xs font-medium font-sans text-slate-400">#TikTok Ads</span>
<span className="px-3 py-1.5 rounded-lg border border-[#1e293b] bg-[#111a24] text-xs font-medium font-sans text-slate-400">#Expanze</span>
<span className="px-3 py-1.5 rounded-lg border border-[#1e293b] bg-[#111a24] text-xs font-medium font-sans text-slate-400">#Strategy</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-0 relative overflow-hidden" id="reference">
<div className="max-w-7xl mx-auto mb-10 px-6 text-center">
<h2 className="text-3xl md:text-4xl tracking-tighter mb-2 font-bricolage font-bold text-white">Co o nás říkají klienti</h2>
<p className="text-neutral-500 text-sm font-sans">Spokojenost klientů je pro nás prioritou číslo jedna.</p>
</div>
<div className="relative w-full carousel-mask">
<div className="max-w-[1400px] mx-auto relative h-full pointer-events-none z-30">
<button className="pointer-events-auto absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#111112] border flex items-center justify-center hover:scale-105 transition-all shadow-xl z-30 backdrop-blur-sm border-white/10 text-white hover:bg-white/10 hover:border-white/20" id="slideLeft">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<button className="pointer-events-auto absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#111112] border flex items-center justify-center hover:scale-105 transition-all shadow-xl z-30 backdrop-blur-sm border-white/10 text-white hover:bg-white/10 hover:border-white/20" id="slideRight">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
<div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory py-10 px-[50%] md:px-0 gap-8 items-stretch md:scroll-pl-[calc(50%-320px)]" id="testimonialContainer">
<div className="min-w-[85vw] md:min-w-[640px] bento-card p-10 rounded-2xl snap-center flex flex-col justify-between shrink-0 h-auto">
<div>
<div className="flex gap-1 mb-6 text-orange-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg md:text-xl leading-relaxed mb-8 font-bricolage font-bold text-neutral-200">"Díky Wise Socials jsme zvedli obrat e-shopu o 300% během prvního roku. Jejich přístup k datům a kreativě je přesně to, co jsme hledali. Nejlepší investice do marketingu."</p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400"></div>
<div>
<p className="text-sm font-semibold font-sans text-white">Jan Novák</p>
<p className="text-neutral-500 text-xs font-sans">CEO, FashionBrand</p>
</div>
</div>
</div>
<div className="min-w-[85vw] md:min-w-[640px] bento-card p-10 rounded-2xl snap-center flex flex-col justify-between shrink-0 h-auto">
<div>
<div className="flex gap-1 mb-6 text-orange-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg md:text-xl leading-relaxed mb-8 font-bricolage font-bold text-neutral-200">"Profesionální komunikace a skvělé výsledky v reklamách. Konečně agentura, která rozumí našemu business modelu a neslibuje nereálná čísla, ale doručuje."</p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-400"></div>
<div>
<p className="text-sm font-semibold font-sans text-white">Petra Svobodová</p>
<p className="text-neutral-500 text-xs font-sans">CMO, TechStart</p>
</div>
</div>
</div>
<div className="min-w-[85vw] md:min-w-[640px] bento-card p-10 rounded-2xl snap-center flex flex-col justify-between shrink-0 h-auto">
<div>
<div className="flex gap-1 mb-6 text-orange-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg md:text-xl leading-relaxed mb-8 font-bricolage font-bold text-neutral-200">"Kampaně na TikToku nám otevřely dveře k mladší cílové skupině. Kreativní tým odvedl neuvěřitelnou práci s videi, která se stala virálními."</p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-400"></div>
<div>
<p className="text-sm font-semibold font-sans text-white">Tomáš Horák</p>
<p className="text-neutral-500 text-xs font-sans">Marketing Manager, UrbanStyle</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-center relative overflow-hidden" id="kontakt">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#1E8EB6]/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-4xl md:text-5xl tracking-tighter mb-6 font-bricolage font-bold text-white">Připraveni ovládnout <br/>svůj trh?</h2>
<p className="text-lg mb-10 font-light font-sans text-neutral-400">Domluvte si nezávaznou konzultaci a probereme možnosti spolupráce.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="px-8 py-3.5 bg-[#1E8EB6] text-sm font-semibold rounded-full hover:bg-[#197a9d] transition-all w-full sm:w-auto shadow-[0_0_20px_-5px_rgba(30,142,182,0.4)] font-sans text-white" href="mailto:info@wisesocials.cz">
                    Nezávazná poptávka
                </a>
<a className="px-8 py-3.5 bg-transparent border text-sm font-semibold rounded-full transition-all w-full sm:w-auto font-sans border-white/20 text-white hover:bg-white/5" href="#">
                    Napsat na WhatsApp
                </a>
</div>
<p className="mt-6 text-xs font-sans text-neutral-600">Odpovídáme obvykle do 24 hodin.</p>
</div>
</section>

<footer className="border-t bg-[#020202] pt-16 pb-8 px-6 border-white/5">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
<div className="col-span-2 md:col-span-2">
<a className="block mb-4 hover:opacity-80 transition-opacity" href="#">
<span className="text-xl tracking-tighter text-[#1E8EB6] lowercase font-bricolage font-bold">wise socials.</span>
</a>
<p className="text-xs text-neutral-500 max-w-xs leading-relaxed font-sans">
                    Moderní digitální agentura. Spojujeme kreativitu s tvrdými daty pro váš růst.
                </p>
</div>
<div className="col-span-1">
<h4 className="text-xs font-semibold mb-4 font-sans text-white">Menu</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="transition-colors font-sans hover:text-white" href="#sluzby">Služby</a></li>
<li><a className="transition-colors font-sans hover:text-white" href="#studie">Případové studie</a></li>
<li><a className="transition-colors font-sans hover:text-white" href="#o-nas">O nás</a></li>
<li><a className="transition-colors font-sans hover:text-white" href="#reference">Reference</a></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-xs font-semibold mb-4 font-sans text-white">Služby</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="transition-colors font-sans hover:text-white" href="#">PPC reklamy</a></li>
<li><a className="transition-colors font-sans hover:text-white" href="#">Správa sítí</a></li>
<li><a className="transition-colors font-sans hover:text-white" href="#">Tvorba obsahu</a></li>
<li><a className="transition-colors font-sans hover:text-white" href="#">E-mail marketing</a></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-xs font-semibold mb-4 font-sans text-white">Kontakt</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="transition-colors font-sans hover:text-white" href="mailto:hello@wisesocials.cz">hello@wisesocials.cz</a></li>
<li><a className="transition-colors font-sans hover:text-white" href="#">+420 123 456 789</a></li>
<li><a className="transition-colors font-sans hover:text-white" href="#">Praha, ČR</a></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-xs font-semibold mb-4 font-sans text-white">Social</h4>
<div className="flex gap-4">
<a className="text-neutral-500 transition-colors hover:text-white" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a className="text-neutral-500 transition-colors hover:text-white" href="#">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-white/5">
<p className="text-[10px] font-sans text-neutral-600">© 2024 Wise Socials Agency. Všechna práva vyhrazena.</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-[#1E8EB6]"></div>
<span className="text-[10px] text-neutral-500 font-sans">Přijímáme nové projekty</span>
</div>
</div>
</footer>


    </>
  );
}
