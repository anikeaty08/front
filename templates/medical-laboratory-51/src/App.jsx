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
surface: '#F8FAFC',
surfaceHighlight: '#F1F5F9',
primary: '#2563EB',
primaryDark: '#1D4ED8',
accent: '#DC2626',
dark: '#0F172A',
darkText: '#334155',
muted: '#64748B',
border: '#E2E8F0',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
heading: ['Poppins', 'sans-serif'],
},
boxShadow: {
'soft': '0 2px 10px rgba(0, 0, 0, 0.03)',
'lift': '0 10px 40px -10px rgba(37, 99, 235, 0.1)',
}
}
}
}



        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    
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
      

<div className="bg-dark text-slate-300 text-xs py-2.5 border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5 hover:text-white transition-colors">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                    Sandomierz, ul. Mickiewicza 52 (Centrum Promocji Zdrowia)
                </span>
</div>
<div className="flex items-center gap-4">
<form action="/" className="relative group" method="post">
<iconify-icon className="absolute left-2.5 top-1.5 text-slate-400 group-focus-within:text-white transition-colors" icon="solar:magnifer-linear"></iconify-icon>
<input className="bg-white/5 border border-white/10 rounded-full pl-8 pr-3 py-1 text-white placeholder-slate-500 focus:outline-none focus:bg-white/10 focus:border-white/20 transition-all w-32 focus:w-48" name="searchword" placeholder="Szukaj..." type="search"/>
<input name="task" type="hidden" value="search"/>
<input name="option" type="hidden" value="com_search"/>
</form>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="/">
<div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:test-tube-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="leading-tight">
<span className="block font-heading font-bold text-lg tracking-tight text-dark">CITO-LAB</span>
<span className="block text-[10px] text-muted uppercase tracking-widest font-medium">Laboratorium Medyczne</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-darkText">
<a className="text-primary font-semibold" href="/">Start</a>
<a className="hover:text-primary transition-colors" href="/oferta">Oferta</a>
<a className="hover:text-primary transition-colors" href="/aktualnosci">Aktualności</a>
<a className="hover:text-primary transition-colors" href="/nasze-placowki">Nasze Placówki</a>
<a className="hover:text-primary transition-colors flex items-center gap-1" href="/b2b5/" target="_blank">
                    Panel B2B <iconify-icon className="text-xs" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
<a className="hover:text-primary transition-colors" href="/dotacje-unijne">Dotacje</a>
</div>

<div className="hidden lg:flex gap-3">
<a className="bg-dark text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all flex items-center gap-2 shadow-soft hover:shadow-lg" href="http://www.cito-lab.eu" target="_blank">
<iconify-icon className="text-lg" icon="solar:laptop-minimalistic-linear"></iconify-icon>
                    Wyniki Online
                </a>
</div>

<button className="lg:hidden text-dark p-2" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-white border-b border-border p-6 flex flex-col gap-4 shadow-xl" id="mobile-menu">
<a className="text-base font-medium text-primary" href="/">Start</a>
<a className="text-base font-medium text-dark" href="/oferta">Oferta</a>
<a className="text-base font-medium text-dark" href="/aktualnosci">Aktualności</a>
<a className="text-base font-medium text-dark" href="/nasze-placowki">Nasze placówki</a>
<a className="text-base font-medium text-dark" href="/b2b5/">Panel kontrahenta</a>
<a className="text-base font-medium text-dark" href="/dotacje-unijne">Dotacje Unijne</a>
<a className="text-base font-medium text-dark" href="/gabinety-lekarskie">Gabinety lekarskie</a>
<hr className="border-border"/>
<a className="bg-primary text-white text-center py-3 rounded-lg font-medium" href="http://www.cito-lab.eu">Odbiór Wyników Online</a>
</div>
</nav>

<section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-surface">
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
<div className="reveal-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-semibold mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
                    40 lat doświadczenia (od 1983 roku)
                </div>
<h1 className="font-heading font-bold text-4xl lg:text-6xl tracking-tight leading-[1.1] mb-6 text-dark">
                    Wiarygodne wyniki <br/>
<span className="text-muted">Twojego zdrowia</span>
</h1>
<p className="text-lg text-muted mb-8 max-w-lg leading-relaxed">
                    Nowoczesna aparatura, kontrola jakości i troska o pacjenta. Oferujemy kompleksową diagnostykę laboratoryjną w Sandomierzu, Tarnobrzegu i Gorzycach.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-primary text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-primaryDark transition-all shadow-lift flex items-center justify-center gap-2" href="http://www.cito-lab.eu" target="_blank">
                        Odbiór Wyników <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="bg-white border border-border text-darkText px-8 py-3.5 rounded-full text-sm font-semibold hover:border-primary hover:text-primary transition-all shadow-sm text-center" href="/nasze-placowki">
                        Znajdź Punkt Pobrań
                    </a>
</div>
<div className="mt-8 flex items-center gap-2 text-sm text-muted">
<iconify-icon className="text-primary" icon="solar:phone-calling-linear"></iconify-icon>
<span>Infolinia (10:00-17:00): <a className="font-semibold text-dark hover:text-primary" href="tel:511100053">511 100 053</a></span>
</div>
</div>
<div className="relative reveal-on-scroll delay-100 lg:pl-10">
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50 group bg-white">
<img alt="Laboratorium Cito-Lab" className="w-full h-[450px] object-cover opacity-90" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 text-white">
<p className="font-heading font-semibold text-xl mb-1">Profesjonalny Zespół</p>
<p className="text-white/80 text-sm">Kierownik: mgr Janina Czwarno<br/>Spec. medycznej diagnostyki laboratoryjnej.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="nasze-placowki">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="font-heading font-semibold text-2xl lg:text-3xl text-dark mb-4">Placówki i Godziny Otwarcia</h2>
<p className="text-muted max-w-xl">Pobrania materiału odbywają się rano. Wyniki dostępne online lub do odbioru osobistego.</p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-surface p-6 rounded-2xl border border-border hover:border-primary/40 transition-all group">
<div className="flex items-center justify-between mb-4">
<h3 className="font-heading font-semibold text-lg text-dark">Sandomierz</h3>
<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<iconify-icon icon="solar:hospital-linear"></iconify-icon>
</div>
</div>
<p className="text-sm text-dark font-medium mb-1">ul. Mickiewicza 52</p>
<p className="text-xs text-muted mb-6">Centrum Promocji Zdrowia</p>
<div className="space-y-3 text-sm border-t border-border pt-4">
<div className="flex justify-between">
<span className="text-muted">Czynne (Pn-Pt)</span>
<span className="font-medium text-dark">7:00 - 17:00</span>
</div>
<div className="flex justify-between">
<span className="text-muted">Pobrania (Pn-So)</span>
<span className="font-medium text-primary">7:00 - 10:00</span>
</div>
<div className="flex justify-between">
<span className="text-muted">Sobota (Czynne)</span>
<span className="font-medium text-dark">7:00 - 14:00</span>
</div>
</div>
<div className="mt-6 flex flex-col gap-2">
<a className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-white border border-border text-xs font-semibold text-dark hover:border-primary hover:text-primary transition-colors" href="tel:158327208">
<iconify-icon icon="solar:phone-linear"></iconify-icon> 15 832 72 08
                        </a>
</div>
</div>

<div className="bg-surface p-6 rounded-2xl border border-border hover:border-primary/40 transition-all group">
<div className="flex items-center justify-between mb-4">
<h3 className="font-heading font-semibold text-lg text-dark">Tarnobrzeg</h3>
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-primary">
<iconify-icon icon="solar:test-tube-linear"></iconify-icon>
</div>
</div>
<p className="text-sm text-dark font-medium mb-1">ul. Wyspiańskiego 2a</p>
<p className="text-xs text-muted mb-6">Punkt pobrań</p>
<div className="space-y-3 text-sm border-t border-border pt-4">
<div className="flex justify-between">
<span className="text-muted">Pobrania (Pn-Pt)</span>
<span className="font-medium text-primary">7:00 - 10:00</span>
</div>
<p className="text-xs text-muted italic mt-2 leading-relaxed">Tylko pobieranie materiału. Odbiór wyników online lub następnego dnia.</p>
</div>
<div className="mt-6">
<a className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-white border border-border text-xs font-semibold text-dark hover:border-primary hover:text-primary transition-colors" href="tel:158223360">
<iconify-icon icon="solar:phone-linear"></iconify-icon> 15 822 33 60
                        </a>
</div>
</div>

<div className="bg-surface p-6 rounded-2xl border border-border hover:border-primary/40 transition-all group">
<div className="flex items-center justify-between mb-4">
<h3 className="font-heading font-semibold text-lg text-dark">Gorzyce</h3>
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-primary">
<iconify-icon icon="solar:test-tube-linear"></iconify-icon>
</div>
</div>
<p className="text-sm text-dark font-medium mb-1">ul. Piłsudskiego 17</p>
<p className="text-xs text-muted mb-6">Punkt pobrań</p>
<div className="space-y-3 text-sm border-t border-border pt-4">
<div className="flex justify-between">
<span className="text-muted">Czynne</span>
<span className="font-medium text-dark">do 12:00</span>
</div>
<div className="flex justify-between">
<span className="text-muted">Pobrania (Pn-Pt)</span>
<span className="font-medium text-primary">7:00 - 10:00</span>
</div>
</div>
<div className="mt-6">
<a className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-white border border-border text-xs font-semibold text-dark hover:border-primary hover:text-primary transition-colors" href="tel:158361105">
<iconify-icon icon="solar:phone-linear"></iconify-icon> 15 836 11 05
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-surface border-y border-border" id="oferta">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-center mb-10">
<h2 className="font-heading font-semibold text-2xl text-dark">Zakres Badań</h2>
<a className="text-sm text-primary font-medium hover:underline flex items-center gap-1" href="/oferta">Pełna oferta <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

<a className="bg-white p-5 rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all group flex items-center gap-4" href="/dzialy/137-hematologia">
<div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-muted group-hover:bg-primary group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:drop-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-dark group-hover:text-primary">Hematologia</span>
</a>
<a className="bg-white p-5 rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all group flex items-center gap-4" href="/dzialy/139-biochemia">
<div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-muted group-hover:bg-primary group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:test-tube-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-dark group-hover:text-primary">Biochemia</span>
</a>
<a className="bg-white p-5 rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all group flex items-center gap-4" href="/dzialy/140-immunochemia">
<div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-muted group-hover:bg-primary group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-dark group-hover:text-primary">Immunochemia</span>
</a>
<a className="bg-white p-5 rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all group flex items-center gap-4" href="/dzialy/138-koagulologia">
<div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-muted group-hover:bg-primary group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-dark group-hover:text-primary">Koagulologia</span>
</a>
<a className="bg-white p-5 rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all group flex items-center gap-4" href="/dzialy/181-markery-nowotworowe">
<div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-muted group-hover:bg-primary group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:bacteria-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-dark group-hover:text-primary">Markery Nowotworowe</span>
</a>
<a className="bg-white p-5 rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all group flex items-center gap-4" href="/dzialy/178-alergologia">
<div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-muted group-hover:bg-primary group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-dark group-hover:text-primary">Alergologia</span>
</a>
<a className="bg-white p-5 rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all group flex items-center gap-4" href="/dzialy/179-mikrobiologia">
<div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-muted group-hover:bg-primary group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:virus-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-dark group-hover:text-primary">Mikrobiologia</span>
</a>
<a className="bg-white p-5 rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all group flex items-center gap-4" href="/dzialy/180-parazytologia">
<div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-muted group-hover:bg-primary group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:bug-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-dark group-hover:text-primary">Parazytologia</span>
</a>
<a className="bg-white p-5 rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all group flex items-center gap-4" href="/dzialy/184-badanie-nasienia">
<div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-muted group-hover:bg-primary group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-dark group-hover:text-primary">Badanie Nasienia</span>
</a>
<a className="bg-white p-5 rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all group flex items-center gap-4" href="/dzialy/493-badania-genetyczne">
<div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-muted group-hover:bg-primary group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:dna-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-dark group-hover:text-primary">Genetyka</span>
</a>
<a className="bg-white p-5 rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all group flex items-center gap-4" href="/dzialy/183-narkotyki">
<div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-muted group-hover:bg-primary group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:forbidden-circle-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-dark group-hover:text-primary">Narkotyki</span>
</a>
<a className="bg-white p-5 rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all group flex items-center gap-4" href="/dzialy/494-badania-wysylkowe">
<div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-muted group-hover:bg-primary group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:box-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-dark group-hover:text-primary">Badania Wysyłkowe</span>
</a>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

<div className="reveal-on-scroll">
<h3 className="font-heading font-semibold text-2xl text-dark mb-8">Usługi Specjalistyczne</h3>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-red-50 text-accent shrink-0 flex items-center justify-center border border-red-100">
<iconify-icon className="text-lg" icon="solar:home-add-linear"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-dark text-sm">Wizyty Domowe</h4>
<p className="text-sm text-muted mt-1 leading-relaxed">Świadczymy profesjonalną usługę dojazdu i pobrania krwi w domu chorego.</p>
<a className="text-accent text-sm font-bold mt-2 inline-flex items-center gap-1 hover:underline" href="tel:736009339">
<iconify-icon icon="solar:phone-linear"></iconify-icon> 736 009 339
                            </a>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 text-primary shrink-0 flex items-center justify-center border border-blue-100">
<iconify-icon className="text-lg" icon="solar:emoji-funny-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-dark text-sm">Badania Dzieci (Mikrometoda)</h4>
<p className="text-sm text-muted mt-1 leading-relaxed">Pobieramy krew mikrometodą (z paluszka). Przyjmujemy małych pacjentów w godzinach 9:00 - 11:00.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-green-50 text-green-600 shrink-0 flex items-center justify-center border border-green-100">
<iconify-icon className="text-lg" icon="solar:user-check-linear"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-dark text-sm">Badanie Nasienia (WHO)</h4>
<p className="text-sm text-muted mt-1 leading-relaxed">Kompleksowe badanie wg standardów WHO 2010-2021r. Rejestracja (Pn-Czw) 8:00-9:00.</p>
<a className="text-primary text-sm font-bold mt-2 inline-flex items-center gap-1 hover:underline" href="tel:511055162">
<iconify-icon icon="solar:phone-linear"></iconify-icon> 511 055 162
                            </a>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 text-slate-600 shrink-0 flex items-center justify-center border border-slate-100">
<iconify-icon className="text-lg" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-dark text-sm">Testy Specjalistyczne</h4>
<p className="text-sm text-muted mt-1 leading-relaxed">Testy w kierunku wirusa Covid-19, szeroki panel testów narkotykowych oraz diagnostyka parazytologiczna.</p>
</div>
</div>
</div>
</div>

<div className="reveal-on-scroll delay-100 flex flex-col gap-6">
<div className="bg-surfaceHighlight p-8 rounded-3xl border border-primary/10">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:laptop-minimalistic-linear"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-xl text-dark">Wyniki Online</h3>
</div>
<p className="text-sm text-muted mb-6">Szybki i bezpieczny dostęp do Twoich wyników badań bez wychodzenia z domu.</p>
<div className="space-y-3">
<a className="flex items-center justify-between p-4 bg-white rounded-xl border border-border shadow-sm hover:border-primary hover:shadow-md transition-all group" href="http://www.cito-lab.eu" target="_blank">
<span className="font-medium text-sm text-dark">Cito-Lab Sandomierz</span>
<iconify-icon className="text-muted group-hover:text-primary transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
<a className="flex items-center justify-between p-4 bg-white rounded-xl border border-border shadow-sm hover:border-primary hover:shadow-md transition-all group" href="/wyniki1d/" target="_blank">
<span className="font-medium text-sm text-dark">Serwer Alternatywny</span>
<iconify-icon className="text-muted group-hover:text-primary transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
<a className="flex items-center justify-between p-4 bg-white rounded-xl border border-border shadow-sm hover:border-primary hover:shadow-md transition-all group" href="https://odbior-wynikow.luxmedlublin.pl/" target="_blank">
<span className="font-medium text-sm text-dark">Lux-Med Lublin</span>
<iconify-icon className="text-muted group-hover:text-primary transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<p className="text-xs text-muted mt-4 text-center">W razie problemów polecamy przeglądarkę <a className="text-primary underline" href="https://www.mozilla.org/pl/firefox/products/">Firefox</a>.</p>
</div>
<a className="block bg-dark rounded-3xl p-8 relative overflow-hidden group" href="/jak-przygotowac-sie-do-badania">
<div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10">
<h4 className="font-heading font-semibold text-lg text-white mb-2">Jak przygotować się do badania?</h4>
<div className="flex items-center gap-2 text-white/70 text-sm group-hover:text-white transition-colors">
<span>Czytaj poradnik</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="py-20 bg-surface border-t border-border">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-heading font-semibold text-2xl text-dark mb-10">Warto Przeczytać</h2>
<div className="grid md:grid-cols-3 gap-6">

<article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lift transition-all group">
<div className="h-48 overflow-hidden bg-slate-100">
<img alt="Covid" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'" src="/images/CITOLAB-KORONAWIRUS_73402.jpg"/>
</div>
<div className="p-6">
<h3 className="font-heading font-semibold text-dark text-base mb-2 group-hover:text-primary transition-colors">Testy na KORONAWIRUSA</h3>
<a className="text-sm text-muted hover:text-primary font-medium inline-flex items-center gap-1" href="/warto-przeczytac/569-covid">Czytaj więcej <iconify-icon className="text-xs" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</article>

<article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lift transition-all group">
<div className="h-48 overflow-hidden bg-slate-100">
<img alt="Vitamin D" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&amp;fit=crop&amp;w=500&amp;q=80'" src="/images/warto-przeczytac/witaina_D/witamina_D/wit_d_f3a11e2.jpg"/>
</div>
<div className="p-6">
<h3 className="font-heading font-semibold text-dark text-base mb-2 group-hover:text-primary transition-colors">Witamina D a Witamina K2</h3>
<a className="text-sm text-muted hover:text-primary font-medium inline-flex items-center gap-1" href="/warto-przeczytac/362-witamina-d">Czytaj więcej <iconify-icon className="text-xs" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</article>

<article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lift transition-all group">
<div className="h-48 overflow-hidden bg-slate-100">
<img alt="Quality" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg'" src="/images/warto-przeczytac/kontrola_jakosci.jpg"/>
</div>
<div className="p-6">
<h3 className="font-heading font-semibold text-dark text-base mb-2 group-hover:text-primary transition-colors">Kontrola Jakości Badań</h3>
<a className="text-sm text-muted hover:text-primary font-medium inline-flex items-center gap-1" href="/kontrola-jakosci-badan">Czytaj więcej <iconify-icon className="text-xs" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</article>
</div>
</div>
</section>

<footer className="bg-dark text-slate-400 pt-16 pb-8 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div className="space-y-4">
<div className="flex items-center gap-2 text-white">
<iconify-icon icon="solar:test-tube-minimalistic-linear" width="24"></iconify-icon>
<span className="font-heading font-bold text-lg">CITO-LAB</span>
</div>
<p className="leading-relaxed">
                        NZOZ Laboratorium Medyczne CITO-LAB J.A.A. Czwarno Sp. J.<br/>
                        Rok założenia: 1983.
                    </p>
<div className="pt-2">
<a className="inline-block opacity-80 hover:opacity-100 transition-opacity bg-white p-2 rounded" href="/dotacje-unijne">
<img alt="Fundusze Europejskie" className="h-8 w-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</a>
</div>
</div>

<div>
<h4 className="text-white font-heading font-semibold mb-4 text-base">Sandomierz</h4>
<p className="mb-2">ul. Mickiewicza 52</p>
<div className="flex flex-col gap-2 mt-3">
<a className="hover:text-white transition-colors" href="tel:158327208">Tel: 15 832 72 08</a>
<a className="hover:text-white transition-colors" href="tel:511100054">Tel: 511 100 054</a>
<a className="hover:text-white transition-colors" href="mailto:info.cito-lab@tlen.pl">info.cito-lab@tlen.pl</a>
</div>
</div>

<div>
<h4 className="text-white font-heading font-semibold mb-4 text-base">Filie</h4>
<div className="mb-4">
<strong className="text-white block font-medium">Tarnobrzeg</strong>
<p className="text-xs">ul. Wyspiańskiego 3</p>
<a className="hover:text-white transition-colors text-xs" href="tel:158223360">Tel: 15 822 33 60</a>
</div>
<div>
<strong className="text-white block font-medium">Gorzyce</strong>
<p className="text-xs">ul. Piłsudskiego 17</p>
<a className="hover:text-white transition-colors text-xs" href="tel:158361105">Tel: 15 836 11 05</a>
</div>
</div>

<div>
<h4 className="text-white font-heading font-semibold mb-4 text-base">Informacje</h4>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="/polityka-prywatnosci">Polityka Prywatności</a></li>
<li><a className="hover:text-white transition-colors" href="/polityka-cookies">Polityka Cookies</a></li>
<li><a className="hover:text-white transition-colors" href="http://www.medox.pl" target="_blank">Realizacja: medox.pl</a></li>
</ul>
<div className="mt-6 p-3 bg-white/5 rounded-lg border border-white/10">
<p className="text-xs text-slate-300">Laboratorium CITO-LAB zatrudni diagnostę laboratoryjnego.</p>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
<p>© 1983 - 2026 CITO-LAB. Wszelkie prawa zastrzeżone.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
<span className="text-slate-500">Systemy sprawne</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
