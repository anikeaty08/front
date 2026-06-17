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



        document.addEventListener('DOMContentLoaded', function() {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
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
      

<nav className="glass-nav fixed w-full top-0 z-50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

<a className="flex flex-col" href="#">
<span className="font-serif text-2xl font-medium tracking-tight text-slate-900">Kadeřnictví Minská</span>
<span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Brno - Žabovřesky</span>
</a>

<div className="hidden md:flex gap-8 items-center">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#about">O nás</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#services">Služby</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#pricing">Ceník</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#gallery">Fotogalerie</a>
<a className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl" href="#contact">
                    Kontaktovat
                </a>
</div>

<button className="md:hidden text-slate-900" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>

<div className="hidden md:hidden bg-white border-t border-slate-100 absolute w-full" id="mobile-menu">
<div className="flex flex-col p-6 gap-4">
<a className="text-lg font-serif" href="#about">O nás</a>
<a className="text-lg font-serif" href="#services">Služby</a>
<a className="text-lg font-serif" href="#pricing">Ceník</a>
<a className="text-lg font-serif text-amber-700" href="#contact">Kontakt</a>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden bg-[#FDFBF7] pt-32 pb-20 relative">
<div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100 opacity-50 -skew-x-12 translate-x-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-8 reveal active">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/50 border border-amber-200 text-amber-800 text-xs tracking-wide uppercase font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse"></span>
                        Přijímáme nové klienty
                    </span>
<h1 className="text-5xl md:text-7xl font-serif text-slate-900 leading-[1.1] tracking-tight">
                        Dokonalý účes <br/>
<span className="italic text-slate-500">pro vaši osobnost</span>
</h1>
<p className="leading-relaxed text-lg font-light text-slate-600 max-w-lg">
                        Nabízíme kompletní kadeřnické služby v pohodlí a komfortu na ulici Minská. Profesionální péče, nové trendy a nejkvalitnější produkty značky Artego.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-slate-900 text-white font-medium rounded hover:bg-slate-800 transition-all" href="#contact">
                            Objednat se
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-900 font-medium rounded hover:bg-slate-50 transition-all" href="#pricing">
                            Zobrazit ceník
                        </a>
</div>
</div>
<div className="relative reveal active delay-200">
<div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">

<img alt="Salon Interior" className="hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/48250c4e-da2f-4bd8-82fa-eb9e86ce96e5_1600w.jpg"/>
</div>

<div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-xl max-w-xs border-l-4 border-amber-400 hidden md:block">
<p className="italic text-slate-800 font-serif">"Účes je nedílnou součástí vaší osobnosti a první dojem bývá vždy tím nejdůležitějším."</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-x-16 gap-y-16 items-start">
<div className="reveal">
<h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 tracking-tight">O nás</h2>
<div className="w-16 h-0.5 bg-amber-400 mb-8"></div>
<div className="space-y-6 text-slate-600 font-light leading-relaxed">
<p>
                            Vítáme Vás v Kadeřnictví Minská. Náš profesionálně vyškolený personál se stará o to, aby byl Váš vzhled vždy perfektní. Pravidelně absolvujeme kadeřnické semináře o nových účesových trendech a technologických postupech.
                        </p>
<p>
                            Důkazem naší kvality je stále větší počet spokojených zákaznic a zákazníků. Těmi nejkvalitnějšími vlasovými přípravky docílíme dokonalého vzhledu Vašich vlasů.
                        </p>
<div className="flex items-center gap-4 pt-6">
<div className="h-px flex-1 bg-slate-100"></div>
<div className="font-serif text-lg text-slate-900">Tým kadeřnictví</div>
<div className="h-px flex-1 bg-slate-100"></div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 bg-slate-50 rounded-lg text-center">
<iconify-icon className="text-3xl text-amber-500 mb-2" icon="solar:user-circle-linear"></iconify-icon>
<p className="font-medium text-slate-900">Hana Sedláčková</p>
<p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Stylistka</p>
</div>
<div className="p-4 bg-slate-50 rounded-lg text-center">
<iconify-icon className="text-3xl text-amber-500 mb-2" icon="solar:user-circle-linear"></iconify-icon>
<p className="font-medium text-slate-900">Hana Rozmarínová</p>
<p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Stylistka</p>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 reveal delay-100">
<img alt="Salon Detail" className="w-full h-64 object-cover rounded-lg translate-y-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c1044be-1a0a-4cd3-9c6e-a102a2881de3_800w.jpg"/>
<img alt="Hair Products" className="rounded-lg object-cover h-64 w-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b5b2ccc3-f17b-49cd-9b92-03dce3318cc4_800w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<span className="text-amber-400 text-xs font-bold tracking-[0.2em] uppercase">Co nabízíme</span>
<h2 className="text-3xl md:text-5xl font-serif mt-3 tracking-tight">Naše služby</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-amber-500/50 transition-all duration-300 reveal">
<div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-amber-400 mb-6 group-hover:bg-amber-400 group-hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:scissors-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-4">Stříhání</h3>
<p className="text-slate-400 font-light text-sm leading-relaxed mb-6">
                        Nabízíme dámské i pánské stříhání. Stále sledujeme nové trendy a vytvoříme Vám pohodlný a praktický účes přesně podle Vašich představ.
                    </p>
<ul className="text-sm text-slate-300 space-y-2">
<li className="flex items-center gap-2"><iconify-icon className="text-amber-400" icon="solar:check-circle-linear"></iconify-icon> Dámské střihy</li>
<li className="flex items-center gap-2"><iconify-icon className="text-amber-400" icon="solar:check-circle-linear"></iconify-icon> Pánské střihy</li>
<li className="flex items-center gap-2"><iconify-icon className="text-amber-400" icon="solar:check-circle-linear"></iconify-icon> Styling</li>
</ul>
</div>

<div className="group p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-amber-500/50 transition-all duration-300 reveal delay-100">
<div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-amber-400 mb-6 group-hover:bg-amber-400 group-hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:palette-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-4">Barvení a Melír</h3>
<p className="text-slate-400 font-light text-sm leading-relaxed mb-6">
                        Používáme kvalitní vlasovou kosmetiku Artego, která vlasy nepoškozuje. Správně zvolený odstín zvýrazní rysy Vaší tváře.
                    </p>
<ul className="text-sm text-slate-300 space-y-2">
<li className="flex items-center gap-2"><iconify-icon className="text-amber-400" icon="solar:check-circle-linear"></iconify-icon> Barvení Artego</li>
<li className="flex items-center gap-2"><iconify-icon className="text-amber-400" icon="solar:check-circle-linear"></iconify-icon> Melírování</li>
<li className="flex items-center gap-2"><iconify-icon className="text-amber-400" icon="solar:check-circle-linear"></iconify-icon> Ombré a techniky</li>
</ul>
</div>

<div className="group p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-amber-500/50 transition-all duration-300 reveal delay-200">
<div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-amber-400 mb-6 group-hover:bg-amber-400 group-hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:crown-star-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-4">Péče a Styling</h3>
<p className="text-slate-400 font-light text-sm leading-relaxed mb-6">
                        Trvalá ondulace, regenerační zábaly a poradenství v oblasti image. Prodej profesionální vlasové kosmetiky.
                    </p>
<ul className="text-sm text-slate-300 space-y-2">
<li className="flex items-center gap-2"><iconify-icon className="text-amber-400" icon="solar:check-circle-linear"></iconify-icon> Trvalá</li>
<li className="flex items-center gap-2"><iconify-icon className="text-amber-400" icon="solar:check-circle-linear"></iconify-icon> Foukaná</li>
<li className="flex items-center gap-2"><iconify-icon className="text-amber-400" icon="solar:check-circle-linear"></iconify-icon> Společenské účesy</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FDFBF7]" id="pricing">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">Ceník služeb</h2>
<p className="text-slate-500 font-light">Ceny jsou orientační a odvíjí se od délky vlasů a spotřeby materiálu.</p>
</div>
<div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden reveal">
<div className="p-8 md:p-12">
<div className="space-y-6">

<div className="flex justify-between items-end border-b border-dashed border-slate-200 pb-4">
<div>
<h4 className="font-medium text-slate-900">Dámský střih</h4>
<p className="text-xs text-slate-500 mt-1">Včetně foukané a stylingu</p>
</div>
<span className="font-serif text-lg text-slate-900 whitespace-nowrap">480 - 620 Kč</span>
</div>

<div className="flex justify-between items-end border-b border-dashed border-slate-200 pb-4">
<div>
<h4 className="font-medium text-slate-900">Barvení</h4>
<p className="text-xs text-slate-500 mt-1">Dle spotřeby materiálu</p>
</div>
<span className="font-serif text-lg text-slate-900 whitespace-nowrap">420 - 850 Kč</span>
</div>

<div className="flex justify-between items-end border-b border-dashed border-slate-200 pb-4">
<div>
<h4 className="font-medium text-slate-900">Melírování</h4>
</div>
<span className="font-serif text-lg text-slate-900 whitespace-nowrap">500 - 950 Kč</span>
</div>

<div className="flex justify-between items-end border-b border-dashed border-slate-200 pb-4">
<div>
<h4 className="font-medium text-slate-900">Trvalá</h4>
</div>
<span className="font-serif text-lg text-slate-900 whitespace-nowrap">500 - 800 Kč</span>
</div>

<div className="flex justify-between items-end pb-4">
<div>
<h4 className="font-medium text-slate-900">Pánský střih</h4>
</div>
<span className="font-serif text-lg text-slate-900 whitespace-nowrap">230 - 320 Kč</span>
</div>
</div>
</div>
<div className="bg-slate-50 p-6 text-center border-t border-slate-100">
<div className="inline-flex items-center gap-2 text-amber-700 font-medium text-sm">
<iconify-icon icon="solar:wallet-money-linear" width="18"></iconify-icon>
                        Upozornění: Platební karty nebereme. Pouze hotovost.
                    </div>
</div>
</div>
</div>
</section>


<section className="bg-slate-900 text-slate-300 py-24" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div className="space-y-10 reveal">
<div className="">
<h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Kontaktujte nás</h2>
<p className="font-light text-slate-400">Těšíme se na Vaši návštěvu v našem salonu v Brně-Žabovřeskách.</p>
</div>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-amber-400 shrink-0">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Adresa</h4>
<p className="text-sm font-light">Minská 86, 616 00 Brno - Žabovřesky<br/>Dostupnost: Tramvaj č. 3 (od zastávky Česká)</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-amber-400 shrink-0">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Telefon</h4>
<div className="space-y-2 text-sm font-light">
<p className="flex items-center gap-2"><span className="text-slate-500 w-24">Kadeřnictví:</span> <a className="text-white hover:text-amber-400 transition-colors" href="tel:722016949">722 016 949</a></p>
<p className="flex items-center gap-2"><span className="text-slate-500 w-24">H. Sedláčková:</span> <a className="text-white hover:text-amber-400 transition-colors" href="tel:731580013">731 580 013</a></p>
<p className="flex items-center gap-2"><span className="text-slate-500 w-24">H. Rozmarínová:</span> <a className="text-white hover:text-amber-400 transition-colors" href="tel:776074205">776 074 205</a></p>
</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-amber-400 shrink-0">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Provozní doba</h4>
<table className="text-sm font-light w-full max-w-[200px]">
<tbody><tr>
<td className="py-1 text-slate-400">Po - Čt</td>
<td className="py-1 text-white text-right">9:00 - 18:00</td>
</tr>
<tr>
<td className="py-1 text-slate-400">Pátek</td>
<td className="py-1 text-white text-right">Dle domluvy</td>
</tr>
<tr>
<td className="py-1 text-slate-400">Víkendy</td>
<td className="py-1 text-white text-right">Zavřeno</td>
</tr>
</tbody></table>
</div>
</div>
</div>
</div>

<div className="h-full min-h-[400px] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 reveal delay-100 border border-slate-700">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.5684534720934!2d16.5783315!3d49.2121652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712946c1f0d3b69%3A0x6b1f2e1b1b1b1b1b!2sMinsk%C3%A1%2086%2C%20616%2000%20Brno-%C5%BDabov%C5%99esky!5e0!3m2!1scs!2scz!4v1620000000000!5m2!1scs!2scz" style={{border: '0'}} width="100%"></iframe>
</div>
</div>

<div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
<p>© 2023 Kadeřnictví Minská. Všechna práva vyhrazena.</p>
<div className="mt-4 md:mt-0 flex gap-4">
<span>IČO: 02006651</span>
<span>IČO: 87597756</span>
</div>
</div>
</div>
</section>



    </>
  );
}
